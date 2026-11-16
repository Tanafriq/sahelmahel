import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Image de partage (Facebook, WhatsApp, X, LinkedIn…) générée au build.
export const alt = "Sahel Mahel — Qui paye ? Tirage au sort gratuit entre amis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = "data:image/svg+xml;base64," + readFileSync(join(process.cwd(), "public", "logo.svg")).toString("base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 90px",
          background: "linear-gradient(135deg, #120E31 0%, #2a1470 55%, #7032FC 100%)",
          color: "#FEF5E7", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 38, fontWeight: 700, color: "#FDCC3E", letterSpacing: 2 }}>SAHEL MAHEL</div>
          <div style={{ fontSize: 112, fontWeight: 900, lineHeight: 1, marginTop: 16 }}>Qui paye ?</div>
          <div style={{ fontSize: 40, marginTop: 28, color: "#f1e9ff" }}>
            La roue qui désigne qui paye l&apos;addition entre amis.
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#cbb8ff" }}>
            Gratuit · Sans pub · 7 langues · sahelmahel.com
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={400} height={400} alt="" />
      </div>
    ),
    size,
  );
}
