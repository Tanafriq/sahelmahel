"use client";
import { Translation } from "@/lib/translations";

type Phase = "idle" | "rolling" | "winner";

interface SlotDisplayProps {
  phase: Phase;
  currentName: string;
  winner: string;
  t: Translation;
  isArabic: boolean;
  ready: boolean;
}

/** Bandeau sous la roue : nom qui défile pendant le tirage, puis verdict. */
export default function SlotDisplay({ phase, currentName, winner, t, isArabic, ready }: SlotDisplayProps) {
  // Les écritures cursives (arabe…) ne doivent pas être découpées lettre par lettre
  const split = !/[֐-ࣿיִ-﻿]/.test(winner);
  return (
    <div className="verdict" aria-live="polite" dir={isArabic ? "rtl" : "ltr"}>
      {phase === "idle" && (
        <p key="idle" className="verdict-idle">
          {ready ? t.subtitle : t.helper}
        </p>
      )}
      {phase === "rolling" && (
        <p key={`r-${currentName}`} className="verdict-rolling">
          {currentName || "…"}
        </p>
      )}
      {phase === "winner" && (
        <div key={`w-${winner}`} className="verdict-win">
          <p className="verdict-name">
            {Array.from(winner).map((ch, i) =>
              !split ? null : (
                <span key={i} className="verdict-letter" style={{ animationDelay: `${0.15 + i * 0.045}s` }}>
                  {ch === " " ? " " : ch}
                </span>
              ),
            )}
            {!split && <span className="verdict-letter">{winner}</span>}
          </p>
          <p className="verdict-label">{t.winner.trim()}</p>
        </div>
      )}
    </div>
  );
}
