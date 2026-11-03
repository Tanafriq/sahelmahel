"use client";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { AvatarIcon } from "./AvatarSVG";
import { sfx, vibrate } from "@/lib/audio";

export interface WheelHandle {
  /** Fait tourner la roue jusqu'au secteur `index`, puis appelle `onDone`. */
  spin: (index: number, onDone: () => void) => void;
}

interface WheelProps {
  names: string[];
  avatarMap: Record<string, string>;
  state: "idle" | "spinning" | "winner";
  winnerIndex: number;
  onHubClick: () => void;
  onSegment?: (index: number) => void;
  hubLabel: string;
}

const SEG_COLORS = ["var(--pal-primary)", "var(--pal-accent)", "var(--pal-mid)", "var(--pal-extra)"];
const BULBS = 28;
const R = 150; // rayon du disque (viewBox 360)
const SPIN_MS = 5200;

function segColor(i: number, n: number) {
  // Évite deux secteurs voisins de même couleur au raccord fin/début
  if (n > 1 && i === n - 1 && i % SEG_COLORS.length === 0) return SEG_COLORS[2];
  return SEG_COLORS[i % SEG_COLORS.length];
}

function arcPath(a0: number, a1: number, r: number) {
  const rad = (a: number) => ((a - 90) * Math.PI) / 180;
  const x0 = r * Math.cos(rad(a0));
  const y0 = r * Math.sin(rad(a0));
  const x1 = r * Math.cos(rad(a1));
  const y1 = r * Math.sin(rad(a1));
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M0 0 L${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
}

function truncate(s: string, max: number) {
  const chars = Array.from(s);
  return chars.length > max ? chars.slice(0, max - 1).join("") + "…" : s;
}

// décélération longue façon roue de fête foraine
function ease(t: number) {
  return 1 - Math.pow(1 - t, 4.2);
}

const Wheel = forwardRef<WheelHandle, WheelProps>(function Wheel(
  { names, avatarMap, state, winnerIndex, onHubClick, onSegment, hubLabel },
  ref,
) {
  const rotorRef = useRef<SVGGElement>(null);
  const pointerRef = useRef<SVGGElement>(null);
  const rotation = useRef(0);
  const raf = useRef<number | null>(null);
  const onSegmentRef = useRef(onSegment);
  onSegmentRef.current = onSegment;

  const placeholder = names.length < 2;
  const items = useMemo(
    () => (placeholder ? [...names, ...Array(Math.max(0, 6 - names.length)).fill("?")] : names),
    [names, placeholder],
  );
  const n = items.length;
  const seg = 360 / n;

  useImperativeHandle(
    ref,
    () => ({
      spin(index, onDone) {
        if (raf.current) cancelAnimationFrame(raf.current);
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const start = rotation.current;
        const jitter = (Math.random() - 0.5) * seg * 0.7;
        const targetMod = (((-(index + 0.5) * seg - jitter) % 360) + 360) % 360;
        const startMod = ((start % 360) + 360) % 360;
        let delta = targetMod - startMod;
        if (delta < 0) delta += 360;
        const turns = reduced ? 1 : 7 + Math.floor(Math.random() * 2);
        const end = start + delta + 360 * turns;
        const duration = reduced ? 900 : SPIN_MS;
        const t0 = performance.now();
        let lastSeg = -1;
        let lastTickAt = 0;

        const frame = (now: number) => {
          const t = Math.min(1, (now - t0) / duration);
          const r = start + (end - start) * ease(t);
          rotation.current = r;
          if (rotorRef.current) rotorRef.current.style.transform = `rotate(${r}deg)`;

          const under = Math.floor(((((-r) % 360) + 360) % 360) / seg);
          if (under !== lastSeg) {
            if (lastSeg !== -1 && now - lastTickAt > 28) {
              const speed = 1 - t;
              sfx.tick(speed);
              if (speed < 0.5) vibrate(6);
              pointerRef.current?.animate(
                [
                  { transform: "rotate(0deg)" },
                  { transform: `rotate(${-14 - speed * 14}deg)` },
                  { transform: "rotate(0deg)" },
                ],
                { duration: 70 + (1 - speed) * 160, easing: "ease-out" },
              );
              lastTickAt = now;
            }
            lastSeg = under;
            onSegmentRef.current?.(under);
          }
          if (t < 1) raf.current = requestAnimationFrame(frame);
          else {
            raf.current = null;
            onDone();
          }
        };
        raf.current = requestAnimationFrame(frame);
      },
    }),
    [seg],
  );

  const fontSize = n <= 4 ? 19 : n <= 6 ? 17 : n <= 9 ? 14 : n <= 14 ? 11 : 9;
  const maxChars = n <= 6 ? 11 : n <= 10 ? 9 : 7;
  const avatarSize = n <= 6 ? 34 : n <= 10 ? 26 : n <= 16 ? 18 : 0;

  return (
    <div className={`wheel-wrap wheel-${state}`}>
      <svg viewBox="-180 -180 360 360" className="wheel-svg" role="img" aria-label={hubLabel} direction="ltr">
        <defs>
          <radialGradient id="wheel-shine" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.22" />
          </radialGradient>
          <radialGradient id="hub-grad" cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#fff7d1" />
            <stop offset="45%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
        </defs>

        {/* Jante */}
        <circle r={R + 22} className="wheel-rim" />
        <circle r={R + 22} className="wheel-rim-edge" />

        {/* Ampoules */}
        {Array.from({ length: BULBS }).map((_, i) => {
          const a = ((i * 360) / BULBS - 90) * (Math.PI / 180);
          return (
            <circle
              key={i}
              cx={(R + 11) * Math.cos(a)}
              cy={(R + 11) * Math.sin(a)}
              r={4.2}
              className={`bulb ${i % 2 ? "bulb-odd" : "bulb-even"}`}
              style={{ animationDelay: `calc(var(--bulb-step) * ${i})` }}
            />
          );
        })}

        {/* Disque tournant */}
        <g ref={rotorRef} className="wheel-rotor" style={{ transform: `rotate(${rotation.current}deg)` }}>
          {items.map((name, i) => {
            const a0 = i * seg;
            const mid = a0 + seg / 2;
            const isWin = state === "winner" && i === winnerIndex;
            const isQ = placeholder && name === "?";
            return (
              <g
                key={`${name}-${i}`}
                className={`seg ${isWin ? "seg-win" : ""} ${state === "winner" && !isWin ? "seg-dim" : ""}`}
              >
                <path
                  d={n === 1 ? `M0 ${-R} A${R} ${R} 0 1 1 -0.01 ${-R} Z` : arcPath(a0, a0 + seg, R)}
                  style={{ fill: segColor(i, n), opacity: isQ ? 0.35 : 1 }}
                  className="seg-path"
                />
                <g transform={`rotate(${mid})`}>
                  {isQ ? (
                    <text y={-R * 0.62} textAnchor="middle" dominantBaseline="middle" className="seg-q">
                      ?
                    </text>
                  ) : (
                    <>
                      {avatarSize > 0 && (
                        <g transform={`translate(${-avatarSize / 2} ${-R + 8})`}>
                          <AvatarIcon avatarKey={avatarMap[name] ?? "cat"} size={avatarSize} />
                        </g>
                      )}
                      <text
                        transform="rotate(-90)"
                        x={R - (avatarSize ? avatarSize + 14 : 14)}
                        y={0}
                        textAnchor="end"
                        dominantBaseline="central"
                        className="seg-label"
                        style={{ fontSize }}
                      >
                        {truncate(name, maxChars)}
                      </text>
                    </>
                  )}
                </g>
              </g>
            );
          })}
          {/* Séparateurs */}
          {n > 1 &&
            items.map((_, i) => (
              <line
                key={`l${i}`}
                x1={0}
                y1={0}
                x2={0}
                y2={-R}
                transform={`rotate(${i * seg})`}
                className="seg-sep"
              />
            ))}
          {/* Pions */}
          {n > 1 &&
            items.map((_, i) => (
              <circle key={`p${i}`} cx={0} cy={-R + 3} r={3} transform={`rotate(${i * seg})`} className="seg-peg" />
            ))}
        </g>

        <circle r={R} fill="url(#wheel-shine)" pointerEvents="none" />
      </svg>

      {/* Moyeu cliquable */}
      <button
        type="button"
        className="wheel-hub"
        onClick={onHubClick}
        disabled={state === "spinning"}
        aria-label={hubLabel}
      >
        {state === "winner" && names[winnerIndex] ? (
          <span className="hub-avatar">
            <AvatarIcon avatarKey={avatarMap[names[winnerIndex]] ?? "cat"} size={46} />
          </span>
        ) : (
          <span className="hub-coin" aria-hidden="true">
            €
          </span>
        )}
      </button>

      {/* Languette / pointeur */}
      <svg viewBox="-24 -6 48 60" className="wheel-pointer" aria-hidden="true">
        <g ref={pointerRef} style={{ transformOrigin: "0px 6px", transformBox: "view-box" }}>
          <path d="M-17 0 Q0 -10 17 0 L3 44 Q0 50 -3 44 Z" className="pointer-body" />
          <circle cx={0} cy={6} r={5} className="pointer-pin" />
        </g>
      </svg>
    </div>
  );
});

export default Wheel;
