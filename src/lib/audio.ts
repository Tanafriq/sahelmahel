/* ──────────────────────────────────────────────────────────────
   Moteur sonore — Web Audio API, un seul AudioContext partagé.
   Tous les sons sont synthétisés (aucun fichier à charger).
   ────────────────────────────────────────────────────────────── */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let enabled = true;

export function setSoundEnabled(v: boolean): void {
  enabled = v;
}

function ac(): AudioContext | null {
  if (!enabled || typeof window === "undefined") return null;
  try {
    if (!ctx) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.6;
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    return ctx;
  } catch {
    return null;
  }
}

function out(): GainNode {
  return master!;
}

/** Oscillateur avec enveloppe percussive. */
function tone(
  freq: number,
  {
    type = "sine" as OscillatorType,
    start = 0,
    dur = 0.15,
    vol = 0.3,
    slideTo,
    attack = 0.005,
  }: {
    type?: OscillatorType;
    start?: number;
    dur?: number;
    vol?: number;
    slideTo?: number;
    attack?: number;
  } = {},
) {
  const c = ac();
  if (!c) return;
  const t0 = c.currentTime + start;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g);
  g.connect(out());
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

/** Bruit blanc filtré (whoosh, clic, caisse…). */
function noise({
  start = 0,
  dur = 0.1,
  vol = 0.2,
  type = "bandpass" as BiquadFilterType,
  freq = 1000,
  freqTo,
  q = 1,
}: {
  start?: number;
  dur?: number;
  vol?: number;
  type?: BiquadFilterType;
  freq?: number;
  freqTo?: number;
  q?: number;
} = {}) {
  const c = ac();
  if (!c) return;
  const t0 = c.currentTime + start;
  const len = Math.max(1, Math.floor(c.sampleRate * dur));
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = type;
  f.frequency.setValueAtTime(freq, t0);
  if (freqTo) f.frequency.exponentialRampToValueAtTime(freqTo, t0 + dur);
  f.Q.value = q;
  const g = c.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(f);
  f.connect(g);
  g.connect(out());
  src.start(t0);
}

/* ── Sons d'interface ── */

export const sfx = {
  /** Clic doux de bouton. */
  click() {
    tone(1400, { type: "triangle", dur: 0.05, vol: 0.12 });
  },
  /** Ajout d'un ami : « bloup » montant. */
  pop() {
    tone(420, { type: "sine", dur: 0.14, vol: 0.32, slideTo: 980 });
    tone(1320, { type: "triangle", start: 0.07, dur: 0.1, vol: 0.1 });
  },
  /** Suppression : glissando descendant + souffle. */
  remove() {
    tone(700, { type: "sine", dur: 0.18, vol: 0.22, slideTo: 160 });
    noise({ dur: 0.16, vol: 0.08, freq: 3000, freqTo: 400, q: 0.7 });
  },
  /** Erreur : double buzz. */
  error() {
    tone(150, { type: "square", dur: 0.1, vol: 0.12 });
    tone(130, { type: "square", start: 0.12, dur: 0.14, vol: 0.12 });
  },
  /** Bascule de thème : souffle + note. */
  toggle(dark: boolean) {
    noise({ dur: 0.25, vol: 0.1, freq: dark ? 2400 : 500, freqTo: dark ? 400 : 3200, q: 1.2 });
    tone(dark ? 520 : 780, { type: "sine", start: 0.05, dur: 0.2, vol: 0.14, slideTo: dark ? 330 : 1170 });
  },
  /** Choix de palette : petit carillon. */
  chime() {
    [1046, 1318, 1568].forEach((f, i) => tone(f, { type: "sine", start: i * 0.05, dur: 0.35, vol: 0.12 }));
  },
  /** Ouverture d'un menu. */
  open() {
    tone(600, { type: "triangle", dur: 0.08, vol: 0.12, slideTo: 900 });
  },
  close() {
    tone(900, { type: "triangle", dur: 0.08, vol: 0.1, slideTo: 600 });
  },
  /** Choix de langue : « blip-blip ». */
  lang() {
    tone(880, { type: "square", dur: 0.05, vol: 0.06 });
    tone(1320, { type: "square", start: 0.06, dur: 0.06, vol: 0.06 });
  },
  /** Lancement de la roue : swoosh + ressort. */
  spinStart() {
    noise({ dur: 0.5, vol: 0.18, freq: 300, freqTo: 4000, q: 0.9 });
    tone(110, { type: "sawtooth", dur: 0.35, vol: 0.08, slideTo: 440 });
  },
  /** Cliquet de la roue — la hauteur suit la vitesse. */
  tick(speed = 1) {
    const s = Math.min(1, Math.max(0, speed));
    noise({ dur: 0.025, vol: 0.25 + s * 0.15, freq: 2200 + s * 1800, q: 4 });
    tone(900 + s * 700, { type: "square", dur: 0.02, vol: 0.05 });
  },
  /** Fanfare de victoire. */
  victory() {
    const notes = [523, 659, 784, 1046];
    notes.forEach((f, i) => {
      tone(f, { type: "triangle", start: i * 0.09, dur: 0.3, vol: 0.22 });
      tone(f * 2, { type: "sine", start: i * 0.09, dur: 0.2, vol: 0.06 });
    });
    // accord final tenu
    [1046, 1318, 1568].forEach((f) =>
      tone(f, { type: "sawtooth", start: 0.38, dur: 0.9, vol: 0.06, attack: 0.03 }),
    );
    [523, 784].forEach((f) => tone(f, { type: "triangle", start: 0.38, dur: 1, vol: 0.14, attack: 0.02 }));
    // grosse caisse
    tone(150, { type: "sine", start: 0.38, dur: 0.25, vol: 0.6, slideTo: 40 });
    noise({ start: 0.38, dur: 0.6, vol: 0.12, type: "highpass", freq: 6000 });
  },
  /** « Ka-ching ! » de caisse enregistreuse. */
  kaching(delay = 0) {
    noise({ start: delay, dur: 0.06, vol: 0.3, freq: 1800, q: 2 });
    noise({ start: delay + 0.07, dur: 0.05, vol: 0.25, freq: 2500, q: 2 });
    [2637, 3520, 4186].forEach((f, i) =>
      tone(f, { type: "sine", start: delay + 0.14 + i * 0.015, dur: 0.9, vol: 0.09 }),
    );
    tone(5274, { type: "triangle", start: delay + 0.14, dur: 0.6, vol: 0.04 });
  },
  /** Pièce qui tombe. */
  coin() {
    tone(1975, { type: "square", dur: 0.06, vol: 0.06 });
    tone(2637, { type: "square", start: 0.06, dur: 0.18, vol: 0.06 });
  },
  /** Impression du ticket. */
  printer() {
    for (let i = 0; i < 6; i++) noise({ start: i * 0.045, dur: 0.035, vol: 0.07, freq: 3500, q: 6 });
  },
};

export function vibrate(pattern: number | number[]): void {
  if (!enabled) return;
  try {
    navigator.vibrate?.(pattern);
  } catch {}
}
