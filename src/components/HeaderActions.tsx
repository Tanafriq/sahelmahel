"use client";
import { useState, useRef, useEffect } from "react";
import { LANG_OPTIONS, PALETTES } from "@/lib/constants";
import { FLAG_MAP } from "./Flags";
import { Translation } from "@/lib/translations";
import { sfx, setSoundEnabled as setAudioEnabled } from "@/lib/audio";

interface HeaderActionsProps {
  t: Translation;
  lang: string; setLang: (l: string) => void;
  theme: string; setTheme: (t: string) => void;
  isArabic: boolean;
  soundEnabled: boolean; setSoundEnabled: (v: boolean) => void;
  palette: string; setPalette: (p: string) => void;
  onApplyPalette: (key: string) => void;
}

function SoundIcon({ on }: { on: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" fillOpacity="0.15" />
      {on ? (
        <>
          <path className="wave wave-1" d="M16 9.5a3.5 3.5 0 0 1 0 5" />
          <path className="wave wave-2" d="M18.5 7a7 7 0 0 1 0 10" />
        </>
      ) : (
        <path d="M17 9.5l4 5M21 9.5l-4 5" />
      )}
    </svg>
  );
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return (
    <svg key={dark ? "sun" : "moon"} className="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      {dark ? (
        <>
          <circle cx="12" cy="12" r="4.2" fill="currentColor" fillOpacity="0.2" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="12" y1="2.5" x2="12" y2="4.8" transform={`rotate(${i * 45} 12 12)`} />
          ))}
        </>
      ) : (
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor" fillOpacity="0.2" />
      )}
    </svg>
  );
}

export default function HeaderActions({
  t, lang, setLang, theme, setTheme,
  soundEnabled, setSoundEnabled, palette, setPalette, onApplyPalette,
}: HeaderActionsProps) {
  const [openLang, setOpenLang] = useState(false);
  const [openPalette, setOpenPalette] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);

  const currentLang = LANG_OPTIONS.find((l) => l.key === lang) || LANG_OPTIONS[0];
  const CurrentFlag = FLAG_MAP[currentLang.key];
  const currentPalette = PALETTES.find((p) => p.key === palette) || PALETTES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setOpenLang(false);
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) setOpenPalette(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setAudioEnabled(next);
    setSoundEnabled(next);
    if (next) sfx.chime();
  };

  return (
    <div className="flex gap-1.5 items-center" dir="ltr">
      <button
        onClick={toggleSound}
        className={`icon-btn ${soundEnabled ? "is-on" : ""}`}
        title={soundEnabled ? "Son activé" : "Son désactivé"}
        aria-label={soundEnabled ? "Désactiver le son" : "Activer le son"}
        aria-pressed={soundEnabled}>
        <SoundIcon on={soundEnabled} />
      </button>

      <div className="relative" ref={paletteRef}>
        <button
          onClick={() => { (openPalette ? sfx.close : sfx.open)(); setOpenPalette(!openPalette); setOpenLang(false); }}
          className="icon-btn"
          title={t.paletteTitle}
          aria-label={t.paletteTitle}
          aria-expanded={openPalette}>
          <span className="palette-swatch" style={{ background: currentPalette.dot }} />
        </button>
        {openPalette && (
          <div className="pop-menu palette-menu" dir="ltr">
            {PALETTES.map((p, i) => (
              <button key={p.key}
                onClick={() => { onApplyPalette(p.key); setPalette(p.key); setOpenPalette(false); sfx.chime(); }}
                className={`pop-option ${palette === p.key ? "active" : ""}`}
                style={{ animationDelay: `${i * 30}ms` }}
                aria-label={p.key}>
                <span className="palette-dot" style={{ background: p.dot }} />
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => { const next = theme === "dark" ? "light" : "dark"; sfx.toggle(next === "dark"); setTheme(next); }}
        className="icon-btn"
        title={t.themeTitle}
        aria-label={t.themeTitle}>
        <ThemeIcon dark={theme === "dark"} />
      </button>

      <div className="relative" ref={langRef}>
        <button
          onClick={() => { (openLang ? sfx.close : sfx.open)(); setOpenLang(!openLang); setOpenPalette(false); }}
          className="icon-btn"
          title={t.languageTitle}
          aria-label={t.languageTitle}
          aria-expanded={openLang}>
          <span className="flag-round"><CurrentFlag size={22} /></span>
        </button>
        {openLang && (
          <div className="pop-menu lang-menu" dir="ltr">
            {LANG_OPTIONS.map((option, i) => {
              const Flag = FLAG_MAP[option.key];
              return (
                <button key={option.key}
                  onClick={() => { setLang(option.key); setOpenLang(false); sfx.lang(); }}
                  title={option.label}
                  aria-label={option.label}
                  className={`pop-option ${lang === option.key ? "active" : ""}`}
                  style={{ animationDelay: `${i * 30}ms` }}>
                  <span className="flag-round"><Flag size={22} /></span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
