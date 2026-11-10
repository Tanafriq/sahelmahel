import { ImageResponse } from "next/og";

// Image de partage (Facebook, WhatsApp, X, LinkedIn…) générée au build.
export const alt = "Sahel Mahel — Qui paye ? Tirage au sort gratuit entre amis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const colors = ["#0369a1", "#0ea5e9", "#06b6d4", "#38bdf8", "#0284c7", "#22d3ee"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 90px",
          background: "linear-gradient(135deg, #0b1630 0%, #0c2f4f 60%, #0369a1 100%)",
          color: "#fbf8ff", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 38, fontWeight: 700, color: "#7dd3fc", letterSpacing: 2 }}>SAHEL MAHEL</div>
          <div style={{ fontSize: 112, fontWeight: 900, lineHeight: 1, marginTop: 16 }}>Qui paye ?</div>
          <div style={{ fontSize: 40, marginTop: 28, color: "#e0f2fe" }}>
            La roue qui désigne qui paye l&apos;addition entre amis.
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#bae6fd" }}>
            Gratuit · Sans pub · 7 langues · sahelmahel.com
          </div>
        </div>
        <svg width="380" height="380" viewBox="-100 -100 200 200">
          {colors.map((c, i) => {
            const a0 = (i / 6) * Math.PI * 2 - Math.PI / 2;
            const a1 = ((i + 1) / 6) * Math.PI * 2 - Math.PI / 2;
            const p = (a: number) => `${(90 * Math.cos(a)).toFixed(2)} ${(90 * Math.sin(a)).toFixed(2)}`;
            return <path key={i} d={`M0 0 L${p(a0)} A90 90 0 0 1 ${p(a1)} Z`} fill={c} />;
          })}
          <circle r="90" fill="none" stroke="#fbbf24" strokeWidth="9" />
          <circle r="28" fill="#fbbf24" />
        </svg>
      </div>
    ),
    size,
  );
}
