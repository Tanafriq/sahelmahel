import ClientApp from "../components/ClientApp";
import { FAQ } from "@/lib/seo";

/*
 * L'application est rendue côté client (roue, sons, localStorage).
 * Cette section est rendue côté serveur : c'est le texte que Google lit
 * immédiatement. Elle doit rester visible et correspondre au JSON-LD (FAQ).
 */
export default function Page() {
  return (
    <>
      <ClientApp />

      <details className="seo-about" lang="fr">
        <summary className="seo-toggle">À propos de Sahel Mahel</summary>
        <h2>Sahel Mahel : qui paye l&apos;addition ? Le sort décide !</h2>
        <p>
          <strong>Sahel Mahel</strong> (سهل ماهل) est une application gratuite de{" "}
          <strong>tirage au sort</strong> pour savoir <strong>qui paye</strong> entre amis :
          le café, le resto, les pizzas, le taxi ou la tournée de thé. Ajoutez les prénoms,
          lancez la <strong>roue</strong>, et le hasard désigne le payeur en quelques secondes.
          Sans inscription, sans publicité, sur mobile comme sur ordinateur.
        </p>

        <h2>Pourquoi utiliser Sahel Mahel ?</h2>
        <ul>
          <li><strong>100 % gratuit</strong> et sans compte : ouvrez sahelmahel.com et jouez.</li>
          <li><strong>Roue de la fortune</strong> animée, avatars rigolos, sons et confettis.</li>
          <li><strong>Tirage équitable</strong> : chaque ami a exactement la même chance.</li>
          <li><strong>Historique des tirages</strong> pour savoir qui a déjà payé.</li>
          <li>
            <strong>7 langues</strong> : français, darija algérienne, arabe, tamazight, anglais,
            italien et espagnol.
          </li>
          <li>QR code et lien de partage pour lancer le tirage à table avec tout le groupe.</li>
        </ul>

        <h2>Comment ça marche ?</h2>
        <ol>
          <li>Ajoutez le prénom de chaque ami (au moins 2).</li>
          <li>Touchez « Tirer au sort ! » ou le centre de la roue.</li>
          <li>La roue tourne… et s&apos;arrête sur celui ou celle qui paye !</li>
        </ol>

        <h2>Questions fréquentes</h2>
        {FAQ.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}

        <h2>Dans toutes les langues</h2>
        <p dir="rtl" lang="ar-DZ">
          <strong>سهل ماهل — شكون يخلص ؟</strong> زيد صحابك، دور العجلة، والزهر هو لي يخير شكون
          يخلص القهوة ولا الماكلة. باطل وبلا تسجيل.
        </p>
        <p dir="rtl" lang="ar">
          <strong>من يدفع ؟</strong> تطبيق مجاني للقرعة بين الأصدقاء لاختيار من يدفع الحساب.
        </p>
        <p lang="en">
          <strong>Who pays?</strong> Free random picker wheel to decide who pays the bill
          among friends.
        </p>
        <p lang="it"><strong>Chi paga?</strong> Ruota gratuita per decidere chi paga il conto tra amici.</p>
        <p lang="es"><strong>¿Quién paga?</strong> Ruleta gratis para decidir quién paga la cuenta entre amigos.</p>
        <p lang="zgh"><strong>ⵎⵉⵯ ⵉⵅⵍⵍⵚⵏ ?</strong> Sahel Mahel s tmaziɣt.</p>
      </details>
    </>
  );
}
