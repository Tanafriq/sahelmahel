"use client";

import dynamic from "next/dynamic";

// Pendant le chargement (et pour les robots qui n'exécutent pas le JS),
// le serveur envoie au moins le titre principal de la page.
const App = dynamic(() => import("./App"), {
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

export default function ClientApp() {
  return <App />;
}
