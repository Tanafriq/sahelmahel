"use client";

import dynamic from "next/dynamic";

// Pendant le chargement (et pour les robots qui n'exécutent pas le JS),
// le serveur envoie au moins le titre principal, dans la langue de la page.
const AppFR = dynamic(() => import("./App"), {
  ssr: false,
  loading: () => (
    <main className="shell">
      <header className="header-title">
        <h1 className="app-title">Qui paye ?</h1>
        <p className="app-subtitle">Sahel Mahel — le sort en décide !</p>
      </header>
    </main>
  ),
});

const AppDZ = dynamic(() => import("./App"), {
  ssr: false,
  loading: () => (
    <main className="shell" dir="rtl">
      <header className="header-title">
        <h1 className="app-title">شكون يخلص ؟</h1>
        <p className="app-subtitle">ساهل ماهل — الزهر هو لي يخير !</p>
      </header>
    </main>
  ),
});

export default function ClientApp({ defaultLang = "FR" }: { defaultLang?: "FR" | "DZ" }) {
  return defaultLang === "DZ" ? <AppDZ defaultLang="DZ" /> : <AppFR />;
}
