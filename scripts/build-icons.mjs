// Génère le logo SahelMahel (SVG) et toutes les icônes du site (PNG + ICO).
// Usage : node scripts/build-icons.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

export const C = {
  violet: "#7032FC",
  coral: "#FD754A",
  gold: "#FDCC3E",
  mint: "#61E2AD",
  ink: "#120E31",
  cream: "#FEF5E7",
  coin: "#FDC832",
  coinLine: "#C98F12",
};

const CX = 270;
const CY = 286;
const R = 180; // rayon du contour noir (axe du trait)

const pt = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [+(CX + r * Math.cos(a)).toFixed(2), +(CY + r * Math.sin(a)).toFixed(2)];
};

function sectors(r) {
  // Sens horaire depuis le haut (angles SVG, y vers le bas).
  const fills = [C.coral, C.gold, C.mint, C.violet, C.coral, C.violet];
  return fills
    .map((fill, i) => {
      const a0 = -90 + i * 60;
      const [x0, y0] = pt(r, a0);
      const [x1, y1] = pt(r, a0 + 60);
      return `<path d="M${CX} ${CY}L${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}Z" fill="${fill}"/>`;
    })
    .join("");
}

function separators(r, w) {
  return [0, 1, 2]
    .map((i) => {
      const [x0, y0] = pt(r, -90 + i * 60);
      const [x1, y1] = pt(r, 90 + i * 60);
      return `<path d="M${x0} ${y0}L${x1} ${y1}" stroke="${C.cream}" stroke-width="${w}"/>`;
    })
    .join("");
}

function star() {
  // Étoile zellige : 8 pétales en losange.
  const petal = `M0 0L7 -15L0 -31L-7 -15Z`;
  return `<g transform="translate(${CX} ${CY})" fill="none" stroke="${C.coinLine}" stroke-width="3" stroke-linejoin="round">${Array.from(
    { length: 8 },
    (_, k) => `<path d="${petal}" transform="rotate(${k * 45})"/>`,
  ).join("")}</g>`;
}

function receipt(simple) {
  const x0 = 212, x1 = 328, top = 22, base = 156, tooth = 14, n = 12;
  const step = (x1 - x0) / n;
  let zig = "";
  for (let i = 1; i <= n; i++) zig += `L${+(x1 - i * step).toFixed(2)} ${i % 2 ? base + tooth : base}`;
  const body = `<path d="M${x0} ${top}H${x1}V${base}${zig}Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="10" stroke-linejoin="round"/>`;
  const q = simple
    ? `<path d="M251 62A19 19 0 1 1 281 78Q270 85 270 99V106" fill="none" stroke="${C.ink}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><circle cx="270" cy="134" r="10" fill="${C.ink}"/>`
    : `<path d="M255 64A15 15 0 1 1 279 76Q270 82 270 94V98" fill="none" stroke="${C.ink}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><circle cx="270" cy="115" r="7.5" fill="${C.ink}"/>` +
      `<path d="M244 134H296M254 147H286" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>`;
  return body + q;
}

function speedLines() {
  const arc = (r, a0, a1) => {
    const [x0, y0] = pt(r, a0);
    const [x1, y1] = pt(r, a1);
    return `<path d="M${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}" fill="none" stroke="${C.ink}" stroke-width="14" stroke-linecap="round"/>`;
  };
  return arc(212, 206, 238) + arc(242, 201, 234);
}

/**
 * @param {object} o
 * @param {"none"|"rounded"|"square"} o.bg  fond violet
 * @param {boolean} o.simple  version épurée pour 16–48 px
 * @param {number} o.scale    réduction du contenu (icône « maskable »)
 */
export function iconSvg({ bg = "rounded", simple = false, scale = 1 } = {}) {
  const background =
    bg === "none" ? "" : `<rect width="512" height="512" ${bg === "rounded" ? 'rx="112"' : ""} fill="${C.violet}"/>`;
  const wheel =
    `<circle cx="${CX}" cy="${CY}" r="${R}" fill="${C.cream}" stroke="${C.ink}" stroke-width="${simple ? 18 : 14}"/>` +
    sectors(R - 15) +
    separators(R - 8, simple ? 10 : 8) +
    `<circle cx="${CX}" cy="${CY}" r="${simple ? 52 : 47}" fill="${C.coin}" stroke="${C.ink}" stroke-width="${simple ? 11 : 8}"/>` +
    (simple ? "" : `<circle cx="${CX}" cy="${CY}" r="37" fill="none" stroke="${C.coinLine}" stroke-width="2.5"/>` + star()) +
    receipt(simple);
  // Recentre la composition (le dessin est décalé à droite par les traits de vitesse).
  const dx = simple ? -14 : -6;
  const s = scale;
  const t = `translate(${256 - 256 * s + dx * s} ${256 - 256 * s + (simple ? -12 : 0) * s}) scale(${s})`;
  const content = (simple ? "" : speedLines()) + wheel;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${background}<g transform="${t}">${content}</g></svg>`;
}

/** Version 16 px : roue seule, agrandie, sans ticket ni détails. */
export function tinySvg() {
  const r = 168;
  const t = `translate(${256 - CX * 1.3} ${256 - CY * 1.3}) scale(1.3)`;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="${C.violet}"/>` +
    `<g transform="${t}"><circle cx="${CX}" cy="${CY}" r="${r}" fill="${C.cream}" stroke="${C.ink}" stroke-width="22"/>` +
    sectors(r - 12) +
    `<circle cx="${CX}" cy="${CY}" r="54" fill="${C.coin}" stroke="${C.ink}" stroke-width="16"/></g></svg>`
  );
}

function ico(pngs) {
  // ICO avec entrées PNG (supporté par tous les navigateurs actuels).
  const header = Buffer.alloc(6 + 16 * pngs.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, buf }, i) => {
    const e = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(buf.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += buf.length;
  });
  return Buffer.concat([header, ...pngs.map((p) => p.buf)]);
}

const png = (svg, size) => sharp(Buffer.from(svg), { density: 72 * (size / 512) * 4 }).resize(size, size).png().toBuffer();

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const full = iconSvg({ bg: "rounded" });
  const small = iconSvg({ bg: "rounded", simple: true });
  const tiny = tinySvg();
  const square = iconSvg({ bg: "square" });
  const maskable = iconSvg({ bg: "square", scale: 0.78 });

  writeFileSync(join(PUBLIC, "logo.svg"), full);
  writeFileSync(join(PUBLIC, "logo-mark.svg"), iconSvg({ bg: "none" }));
  writeFileSync(join(PUBLIC, "favicon.svg"), small);

  const out = {
    "favicon-16x16.png": [tiny, 16],
    "favicon-32x32.png": [small, 32],
    "favicon.png": [small, 48],
    "apple-touch-icon.png": [square, 180],
    "android-chrome-192x192.png": [full, 192],
    "android-chrome-512x512.png": [full, 512],
    "maskable-512x512.png": [maskable, 512],
    "logo-1024.png": [full, 1024],
  };
  for (const [name, [svg, size]] of Object.entries(out)) writeFileSync(join(PUBLIC, name), await png(svg, size));

  const icoPngs = await Promise.all([16, 32, 48].map(async (size) => ({ size, buf: await png(size === 16 ? tiny : small, size) })));
  writeFileSync(join(PUBLIC, "favicon.ico"), ico(icoPngs));
  console.log("Icônes générées dans public/");
}
