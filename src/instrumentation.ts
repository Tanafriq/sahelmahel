export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.RENDER_EXTERNAL_URL ||
    "http://localhost:3001";

  const INTERVAL = 4 * 60 * 1000; // 4 minutes — sous le seuil de 15 min de Render

  setInterval(() => {
    fetch(`${base}/api/ping`).catch(() => {});
  }, INTERVAL);
}
