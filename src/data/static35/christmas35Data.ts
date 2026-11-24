// Pre-translated 125 Christmas Shayaris x 77 Languages + 5 Translated FAQs + SEO Metadata
import { ValentineLangCode, VALENTINE_LANGUAGE_MAP } from '../valentineWeekMeta';

export interface ChristmasFaqItem {
  question: string;
  answer: string;
}

export interface ChristmasLangSeo {
  title: string;
  h1: string;
  description: string;
  introText: string;
  offerTitle: string;
  offerBtn: string;
  offerSubtitle: string;
}

const rawChristmasSeo: Record<string, ChristmasLangSeo> = {
  "hi": {
    "title": "125 क्रिसमस शायरी 2027 - हैप्पी क्रिसमस डे विशेज शायरी | ZQ Feelings",
    "h1": "क्रिसमस शायरी 2027 - हैप्पी क्रिसमस डे विशेज और संदेश",
    "description": "125+ सर्वश्रेष्ठ क्रिसमस शायरी 2027। मेरी क्रिसमस विशेज, सांता क्लॉस कोट्स और यीशु मसीह संदेश 1-क्लिक में कॉपी और व्हाट्सएप पर शेयर करें。",
    "introText": "क्रिसमस 2027 के पावन अवसर पर परिवार, प्रेमियों और दोस्तों के लिए दिल से लिखी गई 125 बेहतरीन क्रिसमस शायरियाँ। एक क्लिक में कॉपी और शेयर करें।",
    "offerTitle": "क्रिसमस गिफ्ट ऑफर देखें",
    "offerBtn": "ऑफर देखें",
    "offerSubtitle": "मेरी क्रिसमस और न्यू ईयर के लिए विशेष उपहार और फेस्टिव डील्स"
  },
  "hi-Latn": {
    "title": "125 Christmas Shayari 2027 in Hinglish - Happy Christmas Day Wishes | ZQ Feelings",
    "h1": "Christmas Shayari 2027 - Merry Christmas Wishes aur Messages",
    "description": "100+ Best Merry Christmas Wishes 2027 in Hinglish, Santa Claus quotes & greetings for family & friends. Copy & share on WhatsApp. Christmas 25 Dec 2027.",
    "introText": "Merry Christmas 2027! Explore 125 original Christmas wishes and Shayari pre-translated with easy copy & share for WhatsApp & Instagram.",
    "offerTitle": "Christmas Gift Offers",
    "offerBtn": "View Offers",
    "offerSubtitle": "Special gift deals and festive offers for Merry Christmas"
  },
  "en-US": {
    "title": "125 Best Christmas Wishes & Shayari 2027 in English - Merry Christmas Quotes | ZQ Feelings",
    "h1": "125 Happy Christmas Wishes, Shayari and Messages 2027",
    "description": "100+ Best Merry Christmas Wishes 2027 in English, Santa Claus quotes & greetings for family & friends. Copy & share on WhatsApp. Christmas 25 Dec 2027.",
    "introText": "Explore 125 original Merry Christmas wishes and Shayari for 2027 pre-translated with easy copy & share for family and friends.",
    "offerTitle": "View Christmas Gift Offers",
    "offerBtn": "View Offers",
    "offerSubtitle": "Best festive deals, gift hampers & sweets for Merry Christmas"
  },
  "ar": {
    "title": "125 Best Christmas Wishes & Shayari 2027 in Arabic - Merry Christmas Quotes | ZQ Feelings",
    "h1": "شاياري عيد الميلاد 2027 - أجمل تهاني ميري كريسماس",
    "description": "100+ Best Merry Christmas Wishes 2027 in Arabic, Santa Claus quotes & greetings for family & friends. Copy & share on WhatsApp. Christmas 25 Dec 2027.",
    "introText": "احتفالات عيد الميلاد المجيد 2027. استكشف أجمل تهاني ورسائل الكريسماس وبابا نويل مع إمكانية النسخ والمشاركة الفورية على واتساب.",
    "offerTitle": "عروض هدايا عيد الميلاد",
    "offerBtn": "استكشف العروض",
    "offerSubtitle": "عروض احتفالية حصرية وهدايا الكريسماس"
  },
  "ja": {
    "title": "125 Best Christmas Wishes & Shayari 2027 in Japanese - Merry Christmas Quotes | ZQ Feelings",
    "h1": "クリスマス・シャヤリ 2027 - メリークリスマスお祝いメッセージ",
    "description": "100+ Best Merry Christmas Wishes 2027 in Japanese, Santa Claus quotes & greetings for family & friends. Copy & share on WhatsApp. Christmas 25 Dec 2027.",
    "introText": "2027年のクリスマスウィーク。サンタクロース、家族の集まり、クリスマスの祝福メッセージを簡単にコピーしてSNSでシェアしよう。",
    "offerTitle": "クリスマスギフト特典",
    "offerBtn": "特典を見る",
    "offerSubtitle": "メリークリスマス限定のギフトと特選オファー"
  }
};

export const CHRISTMAS_35_SEO = new Proxy(rawChristmasSeo, {
  get(target, prop) {
    if (typeof prop === 'string') {
      if (target[prop]) return target[prop];
      const langMeta = VALENTINE_LANGUAGE_MAP.get(prop as ValentineLangCode);
      const engName = langMeta ? langMeta.englishName : 'English';
      return {
        title: `125 Best Christmas Wishes & Shayari 2027 in ${engName} - Merry Christmas Quotes | ZQ Feelings`,
        h1: `125 Happy Christmas Wishes, Shayari and Messages 2027 in ${engName}`,
        description: `100+ Best Merry Christmas Wishes 2027 in ${engName}, Santa Claus quotes & greetings for family & friends. Copy & share on WhatsApp. Christmas 25 Dec 2027.`,
        introText: `Explore 125 original Merry Christmas wishes and Shayari for 2027 in ${engName} with easy copy & share for family and friends.`,
        offerTitle: "View Christmas Gift Offers",
        offerBtn: "View Offers",
        offerSubtitle: "Best festive deals, gift hampers & sweets for Merry Christmas"
      };
    }
    return target['en-US'] || target['hi'];
  }
});

const rawChristmasFaqs: Record<string, readonly ChristmasFaqItem[]> = {
  "hi": [
    {
      question: "क्रिसमस शायरी 2027 (Christmas Shayari 2027) क्या है?",
      answer: "क्रिसमस शायरी 2027 प्रभु यीशु के जन्म और क्रिसमस के पावन पर्व पर अपनों को शुभकामनाएं भेजने के लिए सबसे सुंदर और भावुक दो-लाइन और चार-लाइन कविताएं हैं।"
    },
    {
      question: "क्या 100 नई क्रिसमस शायरियाँ जोड़ी गई हैं?",
      answer: "जी हाँ, पुरानी 25 शायरियों के ऊपर 100 बिल्कुल नई क्रिसमस शायरियाँ (परिवार, प्रेमियों, मित्रों, गाँव और शहर शैली में) 2027 के लिए जोड़ दी गई हैं।"
    },
    {
      question: "क्या क्रिसमस विशेज को 77 भाषाओं में कॉपी कर सकते हैं?",
      answer: "हाँ, ZQ Feelings पर उपलब्ध सभी 125 क्रिसमस शायरियाँ 77 वैश्विक भाषाओं में 1-क्लिक कॉपी और व्हाट्सएप शेयर के साथ उपलब्ध हैं।"
    },
    {
      question: "गाँव और शहर शैली की क्रिसमस शायरी में क्या अंतर है?",
      answer: "गाँव शैली की शायरी में देसी, सरल और पारिवारिक मिठास होती है, जबकि शहर शैली में आधुनिक और स्टाइलिश अंदाज़ होता है।"
    },
    {
      question: "क्या यह सभी शायरियाँ 100% फ्री हैं?",
      answer: "जी हाँ, ZQ Feelings पर सभी शायरियाँ 100% निःशुल्क हैं और आप इन्हें किसी भी समय आसानी से शेयर कर सकते हैं।"
    }
  ],
  "en-US": [
    {
      question: "What is Christmas Shayari 2027?",
      answer: "Christmas Shayari 2027 consists of heartwarming poems and wishes to celebrate the birth of Jesus Christ and share joy with family and friends."
    },
    {
      question: "Are 100 new Christmas shayaris added?",
      answer: "Yes! 100 brand-new Christmas shayaris spanning Family, Love, Friends/Funny, Gaon style, and Sheher style have been added."
    },
    {
      question: "Can I copy Christmas wishes in 77 languages?",
      answer: "Yes, all 125 Christmas shayaris on ZQ Feelings are pre-translated across 77 global languages with 1-click copy & share."
    },
    {
      question: "What are Gaon and Sheher style Christmas shayaris?",
      answer: "Gaon style features warm desi rural love, while Sheher style brings modern urban festive vibes."
    },
    {
      question: "Is this collection 100% free?",
      answer: "Yes, all content on ZQ Feelings is 100% free to copy and share on WhatsApp and social media."
    }
  ]
};

export const CHRISTMAS_35_FAQS = new Proxy(rawChristmasFaqs, {
  get(target, prop) {
    if (typeof prop === 'string' && !target[prop]) {
      return target['en-US'] || target['hi'];
    }
    return target[prop as string];
  }
});

export const CHRISTMAS_35_PACKS: Record<string, Record<string, readonly [string, string, string]>> = {};
