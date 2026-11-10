// Contenu SEO partagé entre la page (texte visible) et le JSON-LD (layout).
// Google exige que les questions du balisage FAQPage soient visibles sur la page.

export const BASE_URL = "https://www.sahelmahel.com";

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Qu'est-ce que Sahel Mahel ?",
    a: "Sahel Mahel (سهل ماهل) est une application web gratuite de tirage au sort qui désigne au hasard qui paye l'addition parmi un groupe d'amis, grâce à une roue animée.",
  },
  {
    q: "Comment savoir qui paye entre amis avec Sahel Mahel ?",
    a: "Ajoutez les prénoms de vos amis, puis lancez la roue. Elle tourne quelques secondes et s'arrête sur la personne qui paye. Le résultat est instantané et équitable.",
  },
  {
    q: "Sahel Mahel est-il gratuit ?",
    a: "Oui, Sahel Mahel est 100 % gratuit, sans inscription, sans abonnement et sans publicité. Il fonctionne directement dans le navigateur, sur mobile et sur ordinateur.",
  },
  {
    q: "Le tirage au sort est-il vraiment aléatoire ?",
    a: "Oui. Chaque participant a exactement la même probabilité d'être choisi : personne ne peut truquer la roue.",
  },
  {
    q: "Combien de personnes peut-on ajouter ?",
    a: "Autant que vous voulez. Le tirage fonctionne dès 2 participants.",
  },
  {
    q: "Dans quelles langues est disponible Sahel Mahel ?",
    a: "En 7 langues : français, darija algérienne, arabe, tamazight, anglais, italien et espagnol. La langue se change en un clic via le drapeau.",
  },
  {
    q: "Peut-on installer Sahel Mahel sur son téléphone ?",
    a: "Oui. Sur Android ou iPhone, utilisez « Ajouter à l'écran d'accueil » depuis le navigateur pour l'ouvrir comme une application.",
  },
];
