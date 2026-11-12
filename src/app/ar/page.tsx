import type { Metadata } from "next";
import ClientApp from "../../components/ClientApp";
import { BASE_URL, LANG_ALTERNATES } from "@/lib/seo";

/*
 * Version arabe / darija de la page d'accueil.
 * Même application, langue « DZ » par défaut, et un texte arabe rendu côté
 * serveur pour que Google associe le site aux recherches « ساهل ماهل ».
 */

const TITLE_AR = "ساهل ماهل — شكون يخلص ؟ قرعة مجانية بين الصحاب";
const DESC_AR =
  "ساهل ماهل (Sahel Mahel) : العجلة المجانية باش تعرف شكون يخلص الحساب بين الصحاب. زيد الأسماء، دور العجلة، والزهر يخير ! بلا تسجيل، بلا إشهار.";

export const metadata: Metadata = {
  title: { absolute: TITLE_AR },
  description: DESC_AR,
  keywords: [
    "ساهل ماهل",
    "سهل ماهل",
    "ساهل ماهل شكون يخلص",
    "شكون يخلص",
    "شكون يخلص الحساب",
    "من يدفع",
    "من يدفع الحساب",
    "قرعة",
    "قرعة بين الأصدقاء",
    "قرعة مجانية",
    "عجلة الحظ",
    "عجلة القرعة",
    "sahel mahel",
  ],
  alternates: {
    canonical: BASE_URL + "/ar",
    languages: LANG_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: BASE_URL + "/ar",
    title: TITLE_AR,
    description: DESC_AR,
    siteName: "ساهل ماهل — Sahel Mahel",
    locale: "ar_DZ",
    alternateLocale: ["fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_AR,
    description: DESC_AR,
  },
};

const FAQ_AR: { q: string; a: string }[] = [
  {
    q: "واش هو ساهل ماهل ؟",
    a: "ساهل ماهل (سهل ماهل، Sahel Mahel) تطبيق ويب مجاني للقرعة : عجلة تدور وتختار بالزهر شكون يخلص الحساب بين الصحاب.",
  },
  {
    q: "كيفاش نعرف شكون يخلص بين الصحاب ؟",
    a: "زيد أسماء صحابك، ومن بعد دور العجلة. تدور شوية وتحبس على واحد : هو لي يخلص. النتيجة فورية وعادلة.",
  },
  {
    q: "ساهل ماهل باطل ؟",
    a: "إيه، ساهل ماهل مجاني 100٪ : بلا تسجيل، بلا اشتراك وبلا إشهار. يخدم مباشرة في المتصفح، في التيليفون ولا في الكمبيوتر.",
  },
  {
    q: "القرعة عادلة صح ؟",
    a: "إيه. كل واحد عندو نفس الحظ باش يطيح عليه الدور، وحتى واحد ما يقدر يغشش العجلة.",
  },
  {
    q: "بأي لغات كاين ساهل ماهل ؟",
    a: "في 7 لغات : الدارجة الجزائرية، العربية، الفرنسية، الأمازيغية، الإنجليزية، الإيطالية والإسبانية. تبدل اللغة بكليك واحد على العلم.",
  },
];

const JSON_LD_AR = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": BASE_URL + "/ar#webpage",
  url: BASE_URL + "/ar",
  name: TITLE_AR,
  description: DESC_AR,
  inLanguage: "ar-DZ",
  isPartOf: { "@id": BASE_URL + "/#website" },
  about: { "@id": BASE_URL + "/#app" },
};

export default function PageAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_AR) }}
      />
      <ClientApp defaultLang="DZ" />

      <details id="a-propos" className="seo-about" lang="ar-DZ" dir="rtl">
        <summary className="seo-toggle">على ساهل ماهل</summary>
        <h2>ساهل ماهل : شكون يخلص الحساب ؟ الزهر يخير !</h2>
        <p>
          <strong>ساهل ماهل</strong> (Sahel Mahel) تطبيق مجاني لـ<strong>القرعة</strong> باش
          تعرفو <strong>شكون يخلص</strong> بين الصحاب : القهوة، الماكلة، البيتزا، الطاكسي ولا
          الأتاي. زيدو الأسماء، دورو <strong>العجلة</strong>، والزهر يختار لي يخلص في ثواني.
          بلا تسجيل، بلا إشهار، في التيليفون ولا في الكمبيوتر.
        </p>
        <p lang="ar">
          <strong>من يدفع الحساب ؟</strong> سهل ماهل تطبيق مجاني للقرعة بين الأصدقاء : أضف
          الأسماء، أدر العجلة، والحظ يختار من يدفع.
        </p>

        <h2>علاش ساهل ماهل ؟</h2>
        <ul>
          <li><strong>مجاني 100٪</strong> وبلا حساب : حل sahelmahel.com وابدا.</li>
          <li><strong>عجلة الحظ</strong> تدور، أفاتارات ضحك، أصوات وكونفيتي.</li>
          <li><strong>قرعة عادلة</strong> : كل واحد عندو نفس الحظ.</li>
          <li><strong>تاريخ القرعات</strong> باش تعرفو شكون خلص قبل.</li>
          <li><strong>7 لغات</strong> : الدارجة، العربية، الفرنسية، الأمازيغية، الإنجليزية، الإيطالية والإسبانية.</li>
          <li>كود QR ورابط للمشاركة باش الجماعة كامل تشوف القرعة.</li>
        </ul>

        <h2>كيفاش يخدم ؟</h2>
        <ol>
          <li>زيد اسم كل صاحب (على الأقل 2).</li>
          <li>اضغط على زر القرعة ولا على وسط العجلة.</li>
          <li>العجلة تدور… وتحبس على لي يخلص !</li>
        </ol>

        <h2>أسئلة متكررة</h2>
        {FAQ_AR.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}

        <p lang="fr" dir="ltr">
          <a href="/">Version française : Sahel Mahel — Qui paye ?</a>
        </p>
      </details>
    </>
  );
}
