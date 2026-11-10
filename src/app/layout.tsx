import type { Metadata, Viewport } from "next";
import Script from "next/script";
import CookieConsentInit from "@/components/CookieConsentInit";
import "./globals.css";

import { BASE_URL, FAQ } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0369a1",
};

const SITE_TITLE = "Sahel Mahel — Qui paye ? Tirage au sort gratuit entre amis";
const SITE_DESC =
  "Sahel Mahel (سهل ماهل) : la roue gratuite pour savoir qui paye l'addition entre amis. Ajoute les prénoms, lance la roue, le sort décide ! Sans inscription, sans pub, en 7 langues.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sahel Mahel",
  },
  description: SITE_DESC,
  applicationName: "Sahel Mahel",
  keywords: [
    "sahel mahel",
    "sahelmahel",
    "sahel-mahel",
    "sahel mahel qui paye",
    "sahel mahel roue",
    "سهل ماهل",
    "qui paye",
    "qui paye l'addition",
    "qui va payer",
    "c'est qui qui paye",
    "tirage au sort",
    "tirage au sort entre amis",
    "tirage au sort gratuit",
    "roue de la fortune",
    "roue aléatoire",
    "roue tirage au sort",
    "choisir qui paye",
    "désigner qui paye",
    "qui paye le resto",
    "qui paye le café",
    "random picker",
    "wheel of names",
    "who pays",
    "who pays the bill",
    "شكون يخلص",
    "من يدفع",
    "قرعة بين الأصدقاء",
    "chi paga",
    "chi paga il conto",
    "quién paga",
    "quién paga la cuenta",
  ],
  authors: [{ name: "SahelMahel", url: BASE_URL }],
  creator: "SahelMahel",
  publisher: "SahelMahel",
  category: "entertainment",
  classification: "Application web de tirage au sort",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Une seule URL pour toutes les langues (choix côté client) : pas de hreflang,
  // qui serait ignoré ou signalé en erreur s'il pointe vers la même page.
  alternates: {
    canonical: BASE_URL + "/",
  },
  // L'image de partage est générée par src/app/opengraph-image.tsx.
  openGraph: {
    type: "website",
    url: BASE_URL + "/",
    title: SITE_TITLE,
    description:
      "La roue qui désigne qui paye l'addition en un clic. Ajoute tes amis, lance la roue, le sort décide. 100 % gratuit, sans pub, en 7 langues.",
    siteName: "Sahel Mahel",
    locale: "fr_FR",
    alternateLocale: ["ar_DZ", "ar_AR", "en_US", "it_IT", "es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahelmahel",
    creator: "@sahelmahel",
    title: SITE_TITLE,
    description: "La roue gratuite pour savoir qui paye entre amis. Sans pub, en 7 langues.",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Sahel Mahel",
    "msapplication-TileColor": "#0369a1",
    "format-detection": "telephone=no",
  },
};

const JSON_LD_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": BASE_URL + "/#website",
      url: BASE_URL + "/",
      name: "Sahel Mahel",
      alternateName: ["SahelMahel", "Sahel-Mahel", "سهل ماهل", "Qui paye ?", "sahelmahel.com"],
      description: "Roue de tirage au sort gratuite pour savoir qui paye l'addition entre amis.",
      publisher: { "@id": BASE_URL + "/#organization" },
      inLanguage: ["fr", "ar-DZ", "ar", "zgh", "en", "it", "es"],
    },
    {
      "@type": "Organization",
      "@id": BASE_URL + "/#organization",
      name: "Sahel Mahel",
      alternateName: ["SahelMahel", "سهل ماهل"],
      url: BASE_URL + "/",
      logo: {
        "@type": "ImageObject",
        url: BASE_URL + "/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebApplication",
      "@id": BASE_URL + "/#app",
      name: "Sahel Mahel — Qui paye ?",
      alternateName: ["Qui paye ?", "شكون يخلص ؟", "من يدفع ؟", "Who pays?", "Chi paga?", "¿Quién paga?"],
      description:
        "Application web gratuite de tirage au sort : une roue animée désigne au hasard qui paye parmi un groupe d'amis. Sans inscription, sans publicité, en 7 langues.",
      url: BASE_URL + "/",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Android, iOS, Windows, macOS, Linux",
      browserRequirements: "Requires JavaScript",
      inLanguage: ["fr", "ar-DZ", "ar", "zgh", "en", "it", "es"],
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      author: { "@id": BASE_URL + "/#organization" },
      featureList: [
        "Roue de tirage au sort animée",
        "Avatars rigolos pour chaque ami",
        "Historique des tirages",
        "Mode sombre et mode clair, palettes de couleurs",
        "Effets sonores et confettis",
        "7 langues : français, darija algérienne, arabe, tamazight, anglais, italien, espagnol",
        "QR code et partage de lien",
        "100 % gratuit, sans inscription, sans publicité",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": BASE_URL + "/#faq",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const INIT_SCRIPT = `(function(){try{
  var t=localStorage.getItem('qui-paye-theme');
  try{t=JSON.parse(t);}catch(e){}
  if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
  document.body.classList.add((t==='light')?'theme-light':'theme-dark');
  var pk=localStorage.getItem('qui-paye-palette');
  try{pk=JSON.parse(pk);}catch(e){}
  var m={
    violet:{primary:'#7c3aed',mid:'#a855f7',accent:'#ec4899',extra:'#f97316',rgb:'168,85,247',rgb2:'124,58,237',rgb3:'236,72,153'},
    ocean:{primary:'#0369a1',mid:'#0ea5e9',accent:'#06b6d4',extra:'#38bdf8',rgb:'14,165,233',rgb2:'3,105,161',rgb3:'6,182,212'},
    emeraude:{primary:'#047857',mid:'#10b981',accent:'#34d399',extra:'#a7f3d0',rgb:'16,185,129',rgb2:'4,120,87',rgb3:'52,211,153'},
    sunset:{primary:'#b91c1c',mid:'#ef4444',accent:'#f97316',extra:'#fbbf24',rgb:'239,68,68',rgb2:'185,28,28',rgb3:'249,115,22'},
    gold:{primary:'#92400e',mid:'#d97706',accent:'#f59e0b',extra:'#fcd34d',rgb:'217,119,6',rgb2:'146,64,14',rgb3:'245,158,11'},
    rose:{primary:'#9f1239',mid:'#e11d48',accent:'#f43f5e',extra:'#fb7185',rgb:'244,63,94',rgb2:'159,18,57',rgb3:'251,113,133'},
    indigo:{primary:'#4338ca',mid:'#6366f1',accent:'#818cf8',extra:'#a78bfa',rgb:'99,102,241',rgb2:'67,56,202',rgb3:'129,140,248'}
  };
  var v=m[pk]||m.ocean;
  var r=document.documentElement.style;
  r.setProperty('--pal-primary',v.primary);r.setProperty('--pal-mid',v.mid);
  r.setProperty('--pal-accent',v.accent);r.setProperty('--pal-extra',v.extra);
  r.setProperty('--pal-rgb',v.rgb);r.setProperty('--pal-rgb2',v.rgb2);r.setProperty('--pal-rgb3',v.rgb3);
}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Cairo:wght@400;600;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_GRAPH) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DLZ01F2QHL"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
gtag('js',new Date());gtag('config','G-DLZ01F2QHL',{anonymize_ip:true});`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
        {children}
        <CookieConsentInit />
      </body>
    </html>
  );
}
