import React, { useState } from 'react';
import { ArrowLeft, Check, Copy, FileText, Heart, Info, Mail, Scale, ShieldCheck } from 'lucide-react';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';

export type LegalTabId = 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact';

interface LegalPageProps {
  activeTab: LegalTabId;
  onSelectTab: (tab: LegalTabId) => void;
  onNavigateHome: () => void;
}

const CONTACT_EMAIL = 'support@zqfeelings.com';
const SECONDARY_CONTACT_EMAIL = 'zingsanlordy@gmail.com';

const LEGAL_TABS: ReadonlyArray<{
  id: LegalTabId;
  label: string;
  hindiLabel: string;
  href: string;
}> = [
  { id: 'about', label: 'About Us', hindiLabel: 'हमारे बारे में', href: '/about-us' },
  { id: 'privacy', label: 'Privacy Policy', hindiLabel: 'गोपनीयता नीति', href: '/privacy-policy' },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    hindiLabel: 'नियम व शर्तें',
    href: '/terms-and-conditions'
  },
  { id: 'disclaimer', label: 'Disclaimer', hindiLabel: 'अस्वीकरण', href: '/disclaimer' },
  { id: 'contact', label: 'Contact Us', hindiLabel: 'संपर्क करें', href: '/contact-us' }
];

export const LegalPage: React.FC<LegalPageProps> = ({
  activeTab,
  onSelectTab,
  onNavigateHome
}) => {
  const { globalLanguage, ui } = useGlobalLanguage();
  const isHindiMode = globalLanguage === 'hindi';
  const isHinglishMode = globalLanguage === 'default' || globalLanguage === 'hinglish';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 space-y-7 bg-white">
      {/* Top Back to Home + Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#ffe4e8] pb-4">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome();
          }}
          className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#991B1B] hover:text-white border border-[#fecdd3] text-[15px] font-extrabold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{ui.btnHome}</span>
        </a>

        <nav aria-label="Legal & Info Pages" className="flex flex-wrap items-center gap-2">
          {LEGAL_TABS.map((t) => {
            const isCurrent = t.id === activeTab;
            return (
              <a
                key={t.id}
                href={t.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(t.id);
                }}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-extrabold border transition-colors cursor-pointer inline-flex items-center ${
                  isCurrent
                    ? 'bg-[#d94f70] text-white border-[#d94f70]'
                    : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
                }`}
              >
                {isHindiMode ? t.hindiLabel : t.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* ABOUT US */}
      {activeTab === 'about' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-5">
          <div className="flex items-center gap-3">
            <Info className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              {isHindiMode
                ? 'About Us — ZQ FEELINGS (दिल की आवाज़)'
                : 'About Us — ZQ FEELINGS (Dil Ki Awaaz)'}
            </h1>
          </div>

          {isHindiMode ? (
            <div className="space-y-4 text-[17px] leading-[1.85] text-slate-800">
              <p>
                <strong>ZQ FEELINGS - Dil Ki Awaaz</strong> एक 100% मौलिक (Original) और दिल से लिखा गया
                ऑल-इन-वन शायरी मंच है, जहाँ आपको हर भावना (Love, Sad, Yaad, Attitude, Dosti, Maafi),
                27 भारतीय त्यौहारों, 15 दिनों के Valentine Week Special (7 Feb – 21 Feb), धार्मिक
                आस्था (Sanatan Hindu, Islamic, Masih Faith, Sikh Dharm), संस्कार रस्मों (Newborn Baby,
                Godh Bharai, Naamkaran &amp; Mundan, Grah Pravesh) और पूरे 12 महीनों के खास दिनों के
                लिए बेहतरीन शायरियाँ मिलती हैं।
              </p>
              <p>
                हमारी हर शायरी मानवीय संवेदना, परिवार के अपनत्व और साफ़-सुथरी भाषा के साथ तैयार की गई
                है। आप किसी भी शायरी को <strong>20 स्टाइलिश फ़ॉन्ट्स</strong> में बदलकर एक क्लिक में कॉपी
                कर सकते हैं, फोटो कार्ड डाउनलोड कर सकते हैं, या सीधे WhatsApp और Facebook पर शेयर कर
                सकते हैं।
              </p>
              <p>
                इसके साथ ही <strong>“Apni Shayari Likhe”</strong> और <strong>“ZQ Moments 💗”</strong> के
                ज़रिए पाठक अपनी खुद की रचनाएँ और स्टेटस मोमेंट्स भी सुरक्षित रूप से साझा कर सकते हैं।
              </p>
            </div>
          ) : isHinglishMode ? (
            <div className="space-y-4 text-[17px] leading-[1.85] text-slate-800">
              <p>
                <strong>ZQ FEELINGS - Dil Ki Awaaz</strong> ek 100% original aur dil se likha gaya
                all-in-one Shayari platform hai, jahan aapko har feeling (Love, Sad, Yaad, Attitude,
                Dosti, Maafi), 27 Indian Festivals, 15 dino ke Valentine Week Special (7 Feb – 21
                Feb), Religious Categories (Sanatan Hindu, Islamic, Masih Faith, Sikh Dharm),
                Sanskar &amp; Family Rituals (Newborn Baby, Godh Bharai, Naamkaran &amp; Mundan, Grah
                Pravesh) aur poore 12 mahino ke special days ke liye behtareen shayariyan milti hain.
              </p>
              <p>
                Hamari har shayari sacchi feelings, parivaar ke apnapan aur saaf-suthri bhasha ke saath
                taiyar ki gayi hai. Aap kisi bhi shayari ko <strong>240+ Stylish Fonts</strong> me
                badal kar ek click me Copy kar sakte hain, sundar Photo Card Download kar sakte hain,
                ya seedhe WhatsApp aur Facebook par Share kar sakte hain.
              </p>
              <p>
                Iske saath hi <strong>“Apni Shayari Likhe”</strong> aur{' '}
                <strong>“ZQ Moments 💗”</strong> ke zariye readers apni khud ki shayari aur status
                moments bhi safely share kar sakte hain.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-[17px] leading-[1.85] text-slate-800">
              <p>
                <strong>ZQ FEELINGS - Dil Ki Awaaz</strong> is a 100% original, heartfelt all-in-one
                Shayari platform featuring poetry for every emotion (Love, Sad, Yaad, Attitude, Dosti,
                Maafi), 27 Indian Festivals, 15 days of Valentine Week Special (7 Feb – 21 Feb),
                Religious Faith collections, Family Rituals, and Special Days across all 12 months.
              </p>
              <p>
                Every verse is crafted with warmth and clean language. You can style any Shayari with{' '}
                <strong>240+ Stylish Fonts</strong>, copy it in one click, download custom Photo
                Cards, or share directly on WhatsApp and Facebook.
              </p>
              <p>
                With <strong>“Write Your Shayari”</strong> and <strong>“ZQ Moments 💗”</strong>,
                readers can also share their own original poetry and moments safely.
              </p>
            </div>
          )}
        </article>
      )}

      {/* PRIVACY POLICY */}
      {activeTab === 'privacy' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              {isHindiMode ? 'Privacy Policy (गोपनीयता नीति)' : 'Privacy Policy'}
            </h1>
          </div>

          {isHindiMode ? (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  1. No Mandatory Sign-Up (बिना अकाउंट सुरक्षित ब्राउज़िंग)
                </h2>
                <p>
                  ZQ FEELINGS - Dil Ki Awaaz पर आप बिना किसी लॉगिन, पासवर्ड या व्यक्तिगत जानकारी दिए
                  सभी शायरियाँ पढ़ सकते हैं, 35 भाषाओं में बदल सकते हैं, कॉपी कर सकते हैं और फोटो
                  कार्ड डाउनलोड कर सकते हैं।
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  2. Browser Local Storage &amp; Favorites (लोकल स्टोरेज)
                </h2>
                <p>
                  जब आप किसी शायरी को पसंदीदा (Favorites) में सेव करते हैं या फ़ॉन्ट साइज़/भाषा चुनते
                  हैं, तो वह सेटिंग आपके अपने ब्राउज़र के Local Storage में सुरक्षित रहती है। आप इसे कभी
                  भी हटा सकते हैं।
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  3. Community Safety &amp; Auto-Moderation (सुरक्षित सामग्री)
                </h2>
                <p>
                  “Apni Shayari Likhe” और “ZQ Moments” में पोस्ट की जाने वाली रचनाएँ ऑटोमैटिक भाषा और
                  स्पैम फ़िल्टर से गुज़रती हैं ताकि वेबसाइट हर उम्र और परिवार के लिए सम्मानजनक बनी रहे।
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  4. Cookies, Google AdSense &amp; DoubleClick DART Cookie Policy
                </h2>
                <p>
                  हम किसी भी उपयोगकर्ता का निजी डेटा किसी तीसरे पक्ष को बेचते या साझा नहीं करते। वेबसाइट के
                  निःशुल्क संचालन और रखरखाव हेतु तृतीय-पक्ष विज्ञापनदाता (जैसे{' '}
                  <strong>Google AdSense</strong>) विज्ञापन दिखाने के लिए मानक कुकीज़ (Cookies) व
                  वेब बीकन का उपयोग कर सकते हैं।
                </p>
                <p>
                  Google एक तृतीय-पक्ष विक्रेता (Third-Party Vendor) के रूप में{' '}
                  <strong>DoubleClick DART Cookie</strong> का उपयोग करता है ताकि उपयोगकर्ताओं को इस
                  वेबसाइट और इंटरनेट की अन्य वेबसाइटों पर उनकी विज़िट के आधार पर प्रासंगिक विज्ञापन
                  दिखाए जा सकें। उपयोगकर्ता कभी भी{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-[#991B1B] underline"
                  >
                    Google Ads Settings (adssettings.google.com)
                  </a>{' '}
                  पर जाकर व्यक्तिगत विज्ञापनों (Personalized Advertising) और DART कुकी के उपयोग को बंद
                  (Opt-Out) कर सकते हैं।
                </p>
              </section>
            </div>
          ) : isHinglishMode ? (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  1. No Mandatory Sign-Up (Bina Account Surakshit Browsing)
                </h2>
                <p>
                  ZQ FEELINGS - Dil Ki Awaaz par aap bina kisi login, password ya personal details
                  diye sabhi shayariyan padh sakte hain, 77+ bhashaon me badal sakte hain, Copy kar
                  sakte hain aur Photo Card Download kar sakte hain.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  2. Browser Local Storage &amp; Favorites
                </h2>
                <p>
                  Jab aap kisi shayari ko Favorites (Pasandida) me save karte hain ya font size /
                  language chunte hain, toh woh setting aapke apne browser ke Local Storage me save
                  rehti hai. Aap ise kabhi bhi clear kar sakte hain.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  3. Community Safety &amp; Auto-Moderation
                </h2>
                <p>
                  “Apni Shayari Likhe” aur “ZQ Moments” me post ki jaane wali shayariyan automatic
                  language aur spam filter se guzarti hain taaki website har umar aur parivaar ke
                  liye safe aur sammanjanak bani rahe.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  4. Cookies, Google AdSense &amp; DoubleClick DART Cookie Policy
                </h2>
                <p>
                  Hum kisi bhi user ka personal data kisi third-party ko bechte ya share nahi karte.
                  Website ko free rakhne aur chalane ke liye third-party advertisers (jaise{' '}
                  <strong>Google AdSense</strong>) ads dikhane ke liye standard Cookies aur web
                  beacons ka use kar sakte hain.
                </p>
                <p>
                  Google ek third-party vendor ke roop me <strong>DoubleClick DART Cookie</strong> ka
                  use karta hai taaki users ko is website aur internet ki dusri websites par unki
                  visit ke hisaab se relevant ads dikhaye ja sakein. Users kabhi bhi{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-[#991B1B] underline"
                  >
                    Google Ads Settings (adssettings.google.com)
                  </a>{' '}
                  par jaakar Personalized Advertising aur DART cookie ko band (Opt-Out) kar sakte hain.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  1. No Mandatory Sign-Up
                </h2>
                <p>
                  On ZQ FEELINGS - Dil Ki Awaaz, you can read all Shayari, switch across 77+
                  languages, copy verses, and download Photo Cards without any login or password.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  2. Browser Local Storage &amp; Favorites
                </h2>
                <p>
                  When you save a Shayari to Favorites or pick a font size or language, that preference
                  is stored locally in your own browser&apos;s Local Storage and can be cleared anytime.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  3. Community Safety &amp; Auto-Moderation
                </h2>
                <p>
                  Posts submitted to “Write Your Shayari” and “ZQ Moments” go through automated safety
                  and spam filtering so the community remains respectful for all readers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  4. Cookies, Google AdSense &amp; DoubleClick DART Cookie Policy
                </h2>
                <p>
                  We never sell or share user personal data. To support free access, third-party
                  advertising partners such as <strong>Google AdSense</strong> may use standard
                  cookies and web beacons.
                </p>
                <p>
                  Google uses the <strong>DoubleClick DART Cookie</strong> to serve relevant ads. You
                  may opt out anytime via{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-[#991B1B] underline"
                  >
                    Google Ads Settings (adssettings.google.com)
                  </a>
                  .
                </p>
              </section>
            </div>
          )}
        </article>
      )}

      {/* TERMS & CONDITIONS */}
      {activeTab === 'terms' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              {isHindiMode ? 'Terms & Conditions (नियम व शर्तें)' : 'Terms & Conditions'}
            </h1>
          </div>

          {isHindiMode ? (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  1. Personal Sharing Allowed (व्यक्तिगत शेयरिंग की अनुमति)
                </h2>
                <p>
                  आप ZQ FEELINGS पर उपलब्ध शायरियों को अपने दोस्तों व परिवार के साथ WhatsApp, Facebook,
                  Instagram Status और शुभकामना संदेशों में निःशुल्क कॉपी व शेयर कर सकते हैं।
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  2. Prohibition of Bulk Scraping (बल्क कॉपी निषेध)
                </h2>
                <p>
                  वेबसाइट के संपूर्ण डेटाबेस या सैकड़ों शायरियों को बॉट्स/स्क्रैपिंग द्वारा कॉपी करके किसी
                  अन्य व्यावसायिक वेबसाइट या ऐप पर बिना अनुमति पुनः प्रकाशित करना वर्जित है।
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  3. User Submissions, Auto-Filter &amp; 3-Report Auto-Delete (पाठकों की रचनाएँ)
                </h2>
                <p>
                  “Apni Shayari Likhe” या “ZQ Moments” में पोस्ट करते समय अनिवार्य रूप से Original
                  Content Declaration स्वीकार करना होता है। लोगो, वॉटरमार्क, धुंधली फोटो, लिंक, 10
                  शब्द से कम, गाली या 80%+ कॉपी कंटेंट को हमारा ऑटो-फ़िल्टर लाइव होने से पहले ही रोक
                  देता है। किसी भी गेस्ट पोस्ट पर <strong>3 Report</strong> आते ही वह पोस्ट तुरंत
                  Auto-Delete हो जाती है।
                </p>
              </section>
            </div>
          ) : isHinglishMode ? (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  1. Personal Sharing Allowed
                </h2>
                <p>
                  Aap ZQ FEELINGS par maujood shayariyan apne doston aur parivaar ke saath WhatsApp,
                  Facebook, Instagram Status aur wishes me bilkul free Copy aur Share kar sakte hain.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  2. Prohibition of Bulk Scraping
                </h2>
                <p>
                  Website ke poore database ya saikdon shayariyon ko bots ya scraping ke zariye copy
                  karke kisi dusri commercial website ya app par bina permission republish karna mana hai.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  3. User Submissions, Auto-Filter &amp; 3-Report Auto-Delete
                </h2>
                <p>
                  “Apni Shayari Likhe” ya “ZQ Moments” me post karte samay Original Content Declaration
                  accept karna zaroori hota hai. Logo, watermark, blurry photo, link, 10 shabd se kam,
                  gaali ya 80%+ copied content ko hamara auto-filter live hone se pehle hi rok deta hai.
                  Kisi bhi guest post par <strong>3 Report</strong> aate hi woh post turant Auto-Delete
                  ho jaati hai.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  1. Personal Sharing Allowed
                </h2>
                <p>
                  You are free to copy and share Shayari from ZQ FEELINGS with friends and family on
                  WhatsApp, Facebook, Instagram Status, and personal messages.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  2. Prohibition of Bulk Scraping
                </h2>
                <p>
                  Automated scraping or bulk copying of the database to republish on commercial apps
                  or websites without permission is prohibited.
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="text-[20px] font-extrabold text-slate-900">
                  3. User Submissions, Auto-Filter &amp; 3-Report Auto-Delete
                </h2>
                <p>
                  Submissions require confirming an Original Content Declaration. Logos, links,
                  profanity, or heavily duplicated text are blocked automatically, and any guest post
                  receiving <strong>3 Reports</strong> is automatically removed.
                </p>
              </section>
            </div>
          )}
        </article>
      )}

      {/* DISCLAIMER & COPYRIGHT */}
      {activeTab === 'disclaimer' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <Scale className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              {isHindiMode
                ? 'Disclaimer, UGC Safe Harbor & DMCA Policy (अस्वीकरण)'
                : 'Disclaimer, UGC Safe Harbor & DMCA Policy'}
            </h1>
          </div>

          {isHindiMode ? (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <p>
                <strong>100% Original Content Commitment:</strong> ZQ FEELINGS - Dil Ki Awaaz पर
                प्रकाशित सभी मुख्य श्रेणियों की शायरियाँ मौलिक रूप से तैयार की गई हैं और किसी भी प्रसिद्ध
                शायर या अन्य वेबसाइट से कॉपी नहीं की गई हैं। वेबसाइट पर प्रयुक्त सभी फ़ॉन्ट्स Open Font
                License (Google Fonts / Unicode) के अंतर्गत मुक्त हैं।
              </p>
              <p>
                <strong>Guest User Content &amp; DMCA Takedown:</strong> “ZQ Moments” और “Apni Shayari
                Likhe” में दिखने वाली पोस्ट अतिथि उपयोगकर्ताओं (Guest Users) द्वारा मौलिक घोषणा के साथ
                साझा की जाती हैं। यदि कोई सामग्री कॉपी पाई जाती है, तो पोस्ट पर दिए गए{' '}
                <strong>Report</strong> बटन से रिपोर्ट करें (3 रिपोर्ट पर तुरंत Auto-Delete) या
                आधिकारिक DMCA हटाने हेतु हमें{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-extrabold text-[#991B1B] underline"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                पर ईमेल करें।
              </p>
              <p>
                हम सभी धर्मों (सनातन हिन्दू, इस्लाम, मसीही विश्वास, सिख धर्म), संस्कृतियों और पारिवारिक
                परंपराओं का समान आदर करते हैं। यदि किसी भी सामग्री के संबंध में आपका कोई सुझाव या
                प्रश्न हो, तो कृपया हमसे ईमेल पर संपर्क करें—हम 24–48 घंटों में समीक्षा करेंगे।
              </p>
            </div>
          ) : isHinglishMode ? (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <p>
                <strong>100% Original Content Commitment:</strong> ZQ FEELINGS - Dil Ki Awaaz par
                publish ki gayi sabhi main categories ki shayariyan originally taiyar ki gayi hain aur
                kisi bhi famous shayar ya dusri website se copy nahi ki gayi hain. Website par use kiye
                gaye sabhi fonts Open Font License (Google Fonts / Unicode) ke tahat free hain.
              </p>
              <p>
                <strong>Guest User Content &amp; DMCA Takedown:</strong> “ZQ Moments” aur “Apni
                Shayari Likhe” me dikhne wali posts Guest Users dwara original declaration ke saath
                share ki jaati hain. Agar koi content copied milta hai, toh post par diye gaye{' '}
                <strong>Report</strong> button se report karein (3 reports par turant Auto-Delete)
                ya official DMCA removal ke liye hume{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-extrabold text-[#991B1B] underline"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                par email karein.
              </p>
              <p>
                Hum sabhi dharmon (Sanatan Hindu, Islam, Masih Faith, Sikh Dharm), sanskritiyon aur
                parivarik paramparaon ka barabar samman karte hain. Agar kisi bhi content ko lekar
                aapka koi sujhav ya sawaal ho, toh kripya hume email par contact karein — hum 24–48
                ghanton me review karenge.
              </p>
            </div>
          ) : (
            <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
              <p>
                <strong>100% Original Content Commitment:</strong> All curated Shayari across main
                categories on ZQ FEELINGS - Dil Ki Awaaz is originally crafted. All fonts used are
                open-licensed (Google Fonts / Unicode).
              </p>
              <p>
                <strong>Guest User Content &amp; DMCA Takedown:</strong> Posts in “ZQ Moments” and
                “Write Your Shayari” are submitted by guests under an originality declaration. If any
                content infringes copyright, click <strong>Report</strong> (auto-deleted at 3 reports)
                or email us at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-extrabold text-[#991B1B] underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <p>
                We deeply respect all faiths, cultures, and family traditions. Reach out anytime by
                email and we will review within 24–48 hours.
              </p>
            </div>
          )}
        </article>
      )}

      {/* CONTACT US */}
      {activeTab === 'contact' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              {isHindiMode ? 'Contact Us (संपर्क करें)' : 'Contact Us'}
            </h1>
          </div>

          <p className="text-[17px] leading-[1.85] text-slate-800">
            {isHindiMode
              ? 'किसी भी सुझाव, फीडबैक, सहयोग (Collaboration) या सहायता के लिए आप सीधे हमारे आधिकारिक ईमेल पते पर संपर्क कर सकते हैं:'
              : isHinglishMode
              ? 'Kisi bhi sujhav, feedback, collaboration ya madad ke liye aap seedhe hamare official email address par contact kar sakte hain:'
              : 'For any suggestions, feedback, collaborations, or support, feel free to reach out to our official email address:'}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white border-2 border-[#ffd6df] p-5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 text-[18px] sm:text-[20px] font-extrabold text-[#991B1B] hover:text-[#d94f70] break-all"
            >
              <Mail className="w-5 h-5 text-[#d94f70] shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="min-h-[46px] px-5 py-2.5 rounded-xl bg-[#d94f70] hover:bg-[#b83b59] text-white text-[15px] font-extrabold inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[15px] text-slate-600 font-medium">
            {isHindiMode
              ? 'अतिरिक्त संपादकीय संपर्क (Editorial Support):'
              : 'Editorial Support:'}{' '}
            <a
              href={`mailto:${SECONDARY_CONTACT_EMAIL}`}
              className="font-bold text-[#991B1B] hover:text-[#d94f70]"
            >
              {SECONDARY_CONTACT_EMAIL}
            </a>
          </p>

          <div className="pt-2 flex items-center gap-2 text-[15px] font-bold text-[#d94f70]">
            <Heart className="w-4 h-4 fill-[#d94f70]" />
            <span>ZQ FEELINGS - Dil Ki Awaaz Support &amp; DMCA Team</span>
          </div>
        </article>
      )}
    </div>
  );
};
