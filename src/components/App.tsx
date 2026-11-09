"use client";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { EMOJIS, PALETTES } from "@/lib/constants";
import { TEXT } from "@/lib/translations";
import { applyPalette, shareLink } from "@/lib/utils";
import { AVATAR_KEYS } from "./AvatarSVG";
import { sfx, vibrate, setSoundEnabled as setAudioEnabled } from "@/lib/audio";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Tag from "./Tag";
import SlotDisplay from "./SlotDisplay";
import HeaderActions from "./HeaderActions";
import LegalModal from "./LegalModal";
import Wheel, { WheelHandle } from "./Wheel";
import confetti from "canvas-confetti";

/* ── Célébration : confettis aux couleurs de la palette + pluie de billets ── */
function launchConfetti(paletteKey: string) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const pal = PALETTES.find((p) => p.key === paletteKey) || PALETTES[0];
  const colors = [pal.vars.primary, pal.vars.mid, pal.vars.accent, pal.vars.extra, "#fcd34d", "#ffffff"];
  const base = { particleCount: 90, spread: 70, startVelocity: 55, colors, zIndex: 1000 };
  confetti({ ...base, angle: 60, origin: { x: 0, y: 0.75 } });
  confetti({ ...base, angle: 120, origin: { x: 1, y: 0.75 } });
  setTimeout(() => confetti({ ...base, particleCount: 120, spread: 120, startVelocity: 38, origin: { x: 0.5, y: 0.45 } }), 250);

  try {
    const shapes = ["💸", "🪙", "🧾"].map((text) => confetti.shapeFromText({ text, scalar: 2.2 }));
    const rain = () =>
      confetti({
        shapes,
        scalar: 2.2,
        particleCount: 14,
        spread: 160,
        startVelocity: 12,
        gravity: 0.7,
        ticks: 260,
        flat: true,
        origin: { x: Math.random(), y: -0.1 },
        zIndex: 1000,
      });
    rain();
    setTimeout(rain, 350);
    setTimeout(rain, 700);
  } catch {}
}

/* ── Décor : pièces et tickets qui flottent ── */
const FLOATERS = [
  { x: 6, s: 26, d: 19, delay: -2, k: "coin" },
  { x: 18, s: 18, d: 24, delay: -11, k: "bill" },
  { x: 31, s: 14, d: 21, delay: -6, k: "coin" },
  { x: 47, s: 22, d: 27, delay: -15, k: "coin" },
  { x: 62, s: 16, d: 22, delay: -3, k: "bill" },
  { x: 74, s: 28, d: 25, delay: -9, k: "coin" },
  { x: 86, s: 15, d: 18, delay: -13, k: "coin" },
  { x: 94, s: 20, d: 23, delay: -5, k: "bill" },
];

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className={`floater floater-${f.k}`}
          style={{
            left: `${f.x}%`,
            width: f.s,
            height: f.k === "bill" ? f.s * 0.6 : f.s,
            animationDuration: `${f.d}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

type Phase = "idle" | "rolling" | "winner";
type ModalType = "mentions" | "privacy" | "cgu" | null;

export default function App() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [leaving, setLeaving] = useState<string[]>([]);
  const [avatarMap, setAvatarMap] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<Phase>("idle");
  const [currentName, setCurrentName] = useState("");
  const [winner, setWinner] = useState("");
  const [sharing, setSharing] = useState(false);
  const [history, setHistory] = useState<{ id: number; name: string; time: string; emoji: string }[]>([]);
  const [shake, setShake] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const [titleWave, setTitleWave] = useState(0);
  const [modal, setModal] = useState<ModalType>(null);

  const [soundEnabled, setSoundEnabled] = useLocalStorage("qui-paye-sound", true);
  const [lang, setLang] = useLocalStorage("qui-paye-lang", "FR");
  const systemTheme =
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("qui-paye-theme", systemTheme);
  const [palette, setPalette] = useLocalStorage("qui-paye-palette", "ocean");

  const inputRef = useRef<HTMLInputElement>(null);
  const wheelRef = useRef<WheelHandle>(null);
  const stageRef = useRef<HTMLElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const t = TEXT[lang] || TEXT["FR"];
  const isArabic = lang === "AR" || lang === "DZ";

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };

  useEffect(() => {
    setAudioEnabled(soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    (window as { updateCCLang?: (l: string) => void }).updateCCLang?.(lang);
  }, [lang, isArabic]);

  useEffect(() => {
    applyPalette(palette);
  }, [palette]);

  // Effet d'onde au clic sur tous les boutons marqués .ripple
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(".ripple");
      if (!el || (el as HTMLButtonElement).disabled) return;
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const dot = document.createElement("span");
      dot.className = "ripple-dot";
      dot.style.width = dot.style.height = `${size}px`;
      dot.style.left = `${e.clientX - rect.left - size / 2}px`;
      dot.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(dot);
      setTimeout(() => dot.remove(), 650);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  useEffect(() => {
    const id = setInterval(() => fetch("/api/ping").catch(() => {}), 5 * 60 * 1000);
    const list = timers.current;
    return () => {
      clearInterval(id);
      list.forEach(clearTimeout);
    };
  }, []);

  const notifyShake = () => {
    sfx.error();
    vibrate([30, 40, 30]);
    setShake(true);
    later(() => setShake(false), 600);
  };

  const normalizedNames = useMemo(() => names.map((n) => n.toLowerCase()), [names]);

  const resetResult = () => {
    if (phase === "winner") {
      setPhase("idle");
      setWinner("");
    }
  };

  const addName = () => {
    if (phase === "rolling") return;
    const trimmed = input.trim();
    if (!trimmed) return;
    if (normalizedNames.includes(trimmed.toLowerCase())) {
      notifyShake();
      return;
    }
    setAvatarMap((prev) => {
      const used = new Set(Object.values(prev));
      const available = AVATAR_KEYS.filter((k) => !used.has(k));
      const pool = available.length > 0 ? available : AVATAR_KEYS;
      return { ...prev, [trimmed]: pool[Math.floor(Math.random() * pool.length)] };
    });
    setNames((prev) => [...prev, trimmed]);
    resetResult();
    sfx.pop();
    vibrate(10);
    setInput("");
    inputRef.current?.focus();
  };

  const removeName = (name: string) => {
    if (phase === "rolling" || leaving.includes(name)) return;
    sfx.remove();
    setLeaving((prev) => [...prev, name]);
    later(() => {
      setNames((prev) => prev.filter((n) => n !== name));
      setLeaving((prev) => prev.filter((n) => n !== name));
      setAvatarMap((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }, 260);
    resetResult();
  };

  const draw = useCallback(() => {
    if (phase === "rolling" || leaving.length > 0) return;
    if (names.length < 2) {
      notifyShake();
      inputRef.current?.focus();
      return;
    }
    const idx = Math.floor(Math.random() * names.length);
    const picked = names[idx];
    setPhase("rolling");
    setWinner("");
    stageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    sfx.spinStart();
    vibrate(20);
    wheelRef.current?.spin(idx, () => {
      setCurrentName(picked);
      setWinner(picked);
      setPhase("winner");
      setFlashKey((k) => k + 1);
      sfx.victory();
      sfx.kaching(0.95);
      vibrate([60, 40, 120]);
      launchConfetti(palette);
      later(() => {
        sfx.printer();
        setHistory((prev) => [
          {
            id: Date.now(),
            name: picked,
            time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }),
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          },
          ...prev.slice(0, 9),
        ]);
      }, 1500);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names, palette, phase, leaving]);

  const handleShare = async () => {
    sfx.click();
    setSharing(true);
    await shareLink(t.shareText, t.shareFallback);
    setSharing(false);
  };

  const handleApplyPalette = (key: string) => {
    applyPalette(key);
    setPalette(key);
  };

  const waveTitle = () => {
    setTitleWave((w) => w + 1);
    sfx.coin();
  };

  const year = new Date().getFullYear();
  const splitTitle = !isArabic;
  const visibleNames = names;
  const wheelNames = names.filter((n) => !leaving.includes(n));
  const winnerIndex = wheelNames.indexOf(winner);

  return (
    <>
      <Backdrop />
      {flashKey > 0 && <div key={flashKey} className="win-flash" aria-hidden="true" />}

      <main className="shell" dir={isArabic ? "rtl" : "ltr"}>
        {/* En-tête */}
        <header className="flex items-start justify-between gap-3" dir="ltr">
          <div className="header-title" dir={isArabic ? "rtl" : "ltr"}>
            <h1
              key={`${lang}-${titleWave}`}
              className={`app-title ${lang === "ES" || lang === "TZM" || lang === "DZ" ? "is-long" : ""}`}
              onClick={waveTitle}
            >
              {splitTitle
                ? Array.from(t.title).map((ch, i) => (
                    <span key={i} className="title-letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {ch === " " ? " " : ch}
                    </span>
                  ))
                : <span className="title-letter">{t.title}</span>}
            </h1>
            <p className="app-subtitle">{t.subtitle}</p>
          </div>
          <div dir="ltr">
            <HeaderActions
              t={t}
              lang={lang}
              setLang={setLang}
              theme={theme}
              setTheme={setTheme}
              isArabic={isArabic}
              soundEnabled={soundEnabled}
              setSoundEnabled={setSoundEnabled}
              palette={palette}
              setPalette={setPalette}
              onApplyPalette={handleApplyPalette}
            />
          </div>
        </header>

        {/* Ajout des amis */}
        <section className="table-card" aria-label={t.addFriends}>
          <label htmlFor="friend-input" className="card-heading">
            {t.addFriends}
            {names.length > 0 && (
              <span key={names.length} className="count-badge">
                {names.length}
              </span>
            )}
          </label>
          <div className={`entry ${shake ? "shake" : ""}`} dir="ltr">
            <input
              id="friend-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addName()}
              placeholder={t.placeholder}
              maxLength={24}
              autoComplete="off"
              className="entry-input"
              style={{ textAlign: isArabic ? "right" : "left", direction: isArabic ? "rtl" : "ltr" }}
            />
            <button onClick={addName} className="entry-add ripple" aria-label={t.addFriends} disabled={!input.trim()}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          {visibleNames.length > 0 && (
            <div className={`chips ${isArabic ? "justify-end" : ""}`}>
              {visibleNames.map((n, i) => (
                <Tag
                  key={n}
                  name={n}
                  index={i}
                  avatar={avatarMap[n] ?? "cat"}
                  leaving={leaving.includes(n)}
                  onRemove={removeName}
                />
              ))}
            </div>
          )}
        </section>

        {/* La roue */}
        <section className="stage" ref={stageRef}>
          <Wheel
            ref={wheelRef}
            names={wheelNames}
            avatarMap={avatarMap}
            state={phase === "rolling" ? "spinning" : phase === "winner" ? "winner" : "idle"}
            winnerIndex={winnerIndex}
            onHubClick={draw}
            onSegment={(i) => setCurrentName(wheelNames[i] ?? "")}
            hubLabel={t.cta}
          />
          <SlotDisplay
            phase={phase}
            currentName={currentName}
            winner={winner}
            t={t}
            isArabic={isArabic}
            ready={names.length >= 2}
          />
        </section>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={draw}
            disabled={phase === "rolling"}
            className={`cta ripple ${names.length >= 2 && phase === "idle" ? "cta-ready" : ""}`}
          >
            <span className="cta-face">
              {phase === "rolling" ? (
                <>
                  <span className="cta-spinner" aria-hidden="true" />
                  <span>{t.drawing}</span>
                </>
              ) : (
                <span>{phase === "winner" ? t.replay.replace(/^\S+\s/, "") : t.cta}</span>
              )}
            </span>
          </button>
          <div className={`flex gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
            <button
              onClick={() => {
                sfx.click();
                window.open(`QRcode${lang}.pdf`, "_blank");
              }}
              className="ghost-btn ripple"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <path d="M14 14h3v3M21 14v.01M14 21h3M21 17v4h-1" strokeLinecap="round" />
              </svg>
              <span>{t.qrcode}</span>
            </button>
            <button onClick={handleShare} disabled={sharing} className="ghost-btn ripple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className={sharing ? "animate-spin" : ""}>
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="18" cy="6" r="2.5" />
                <circle cx="18" cy="18" r="2.5" />
                <path d="M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8" />
              </svg>
              <span>{t.share}</span>
            </button>
          </div>
        </div>

        {/* Historique façon ticket de caisse */}
        {history.length > 0 && (
          <section className="receipt" aria-label={t.history}>
            <div className="receipt-paper">
              <p className="receipt-title">{t.history}</p>
              <ul className="receipt-list">
                {history.map((h, i) => (
                  <li key={h.id} className={`receipt-row ${i === 0 ? "receipt-new" : ""}`}>
                    <span className="receipt-emoji" aria-hidden="true">{h.emoji}</span>
                    <span className="receipt-name">{h.name}</span>
                    <span className="receipt-dots" aria-hidden="true" />
                    <span className="receipt-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {winner && <span className="sr-only">{t.resultLabel(winner)}</span>}
      </main>

      {/* Pied de page */}
      <footer className="app-footer" dir="ltr">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          {(
            [
              { label: t.footerMentions, key: "mentions" },
              { label: t.footerPrivacy, key: "privacy" },
              { label: t.footerCgu, key: "cgu" },
            ] as const
          ).map(({ label, key }) => (
            <button
              key={key}
              onClick={() => {
                sfx.open();
                setModal(key);
              }}
              className="footer-link"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() =>
              (window as unknown as { CookieConsent?: { showPreferences: () => void } }).CookieConsent?.showPreferences()
            }
            className="footer-link"
          >
            {t.footerCookies}
          </button>
        </div>
        <p className="footer-copy">
          © {year} SahelMahel, {t.footerRights}. by{" "}
          <a href="mailto:slimanelami@proton.me" className="footer-sign">
            SL
          </a>
        </p>
      </footer>

      <LegalModal
        type={modal}
        onClose={() => {
          sfx.close();
          setModal(null);
        }}
        theme={theme}
        lang={lang}
        t={t}
      />
    </>
  );
}
