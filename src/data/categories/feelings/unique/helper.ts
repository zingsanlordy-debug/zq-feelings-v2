import { Shayari } from '../../../../types/shayari';

export interface UniqueShayariEntry {
  title: string;
  titleEnglish: string;
  linesHindi: string[];
  linesHinglish: string[];
  linesEnglish: string[];
}

const COMMENT_TEMPLATES: Record<string, Array<{ userName: string; text: string }>> = {
  love: [
    { userName: 'आरव वर्मा', text: 'दिल को छू गई ये शायरी, शब्द बहुत प्यारे हैं ❤️' },
    { userName: 'Meera Joshi', text: 'Bilkul dil se likhi hui lagti hai, bahut khoobsurat 💖' },
    { userName: 'सलोनी गुप्ता', text: 'इतनी सच्ची और प्यारी लाइनें, पढ़कर दिल खुश हो गया ✨' },
    { userName: 'Rohan Kulkarni', text: 'Har shabd mein ek pyara sa ehsaas hai, lajawaab!' },
  ],
  sad: [
    { userName: 'कबीर सिंह', text: 'बहुत गहरा दर्द छुपा है इन लफ़्ज़ों में 💔' },
    { userName: 'Neha Tiwari', text: 'Aankhein bhar aayin padhkar, ekdum dil ki baat likh di.' },
    { userName: 'अमन राजपूत', text: 'टूटे दिल का हर एहसास इसमें बयाँ हो गया।' },
    { userName: 'Simran Kaur', text: 'Sach mein bahut emotional aur dil ko chhoone wali lines.' },
  ],
  yaad: [
    { userName: 'तनिषा मेहता', text: 'किसी अपने की बहुत याद दिला दी इन लाइनों ने ⏳' },
    { userName: 'Vikram Aditya', text: 'Raat ke sannate mein ye shayari dil par lagti hai.' },
    { userName: 'राहुल मिश्रा', text: 'यादों का इतना सच्चा एहसास बहुत कम पढ़ने को मिलता है।' },
    { userName: 'Pooja Nair', text: 'Har lafz mein intezaar aur yaad ki khushboo hai.' },
  ],
  kismat: [
    { userName: 'सिद्धार्थ यादव', text: 'किस्मत और मेहनत पर बहुत सच्ची बात कही है 🌟' },
    { userName: 'Ananya Sen', text: 'Bahut gehri soch hai, padhkar nayi himmat mili.' },
    { userName: 'मयंक पटेल', text: 'तक़दीर पर लिखी ये लाइनें दिल में उतर गईं।' },
    { userName: 'Devansh Kapoor', text: 'Waqt aur kismat ki sacchai bahut khoobsurti se likhi hai.' },
  ],
  khushi: [
    { userName: 'नंदिनी शर्मा', text: 'चेहरे पर अपने आप मुस्कान आ गई इसे पढ़कर 😊' },
    { userName: 'Karan Malhotra', text: 'Dil halka ho gaya, bahut hi positive aur pyari shayari!' },
    { userName: 'रिया चौधरी', text: 'छोटी खुशियों की कद्र सिखाती लाजवाब पंक्तियाँ ✨' },
    { userName: 'Harshvardhan Rao', text: 'Padhte hi din ban gaya, sach mein dil khush kar diya.' },
  ],
  alone: [
    { userName: 'ईशान कुरैशी', text: 'तन्हाई के सन्नाटे को बख़ूबी शब्दों में पिरोया है 🌙' },
    { userName: 'Aakriti Bansal', text: 'Khud se baat karne jaisa ehsaas hua padhkar.' },
    { userName: 'गौरव त्रिपाठी', text: 'अकेलेपन की सबसे सच्ची तस्वीर है यह शायरी।' },
    { userName: 'Sana Siddiqui', text: 'Bahut sukoon aur gehrai hai in khamosh lafzon mein.' },
  ],
  motivational: [
    { userName: 'अर्जुन देशमुख', text: 'पढ़ते ही अंदर से नया जोश और हौसला जाग गया 🔥' },
    { userName: 'Prachi Aggarwal', text: 'Jab himmat toot rahi thi tab ye lines sahara ban gayin.' },
    { userName: 'विवेक ठाकुर', text: 'असली ज़िंदगी से जुड़ा सच्चा मोटिवेशन, शानदार!' },
    { userName: 'Nikhil Bhatia', text: 'Har line aag aur junoon bhar deti hai, zabardast!' },
  ],
  sorry: [
    { userName: 'काव्या नायर', text: 'इतने सच्चे दिल से मांगी माफ़ी कोई भी ठुकरा नहीं पाएगा 🙏' },
    { userName: 'Sahil Arora', text: 'Narazgi pighal jaaye aisi pyari aur sacchi lines hain.' },
    { userName: 'शिवानी दुबे', text: 'रिश्तों को संभालने का सबसे प्यारा तरीका है ये माफ़ी।' },
    { userName: 'Tarun Saxena', text: 'Dil se likhi hui maafi seedha dil tak pahunchti hai.' },
  ],
};

const DATES = [
  '12 Oct 2026',
  '19 Oct 2026',
  '25 Oct 2026',
  '03 Nov 2026',
  '11 Nov 2026',
  '18 Nov 2026',
  '24 Nov 2026',
];

export function buildUniqueShayaris(
  category: string,
  categoryName: string,
  categoryIcon: string,
  startNumber: number,
  entries: UniqueShayariEntry[]
): Shayari[] {
  const pool = COMMENT_TEMPLATES[category] || COMMENT_TEMPLATES.love;
  return entries.map((entry, idx) => {
    const num = startNumber + idx;
    const commentSample = pool[idx % pool.length];
    return {
      id: `${category}-unique-${num}`,
      category,
      categoryType: 'feelings',
      categoryName,
      categoryIcon,
      title: entry.title,
      titleEnglish: entry.titleEnglish,
      lines: entry.linesHindi,
      linesHindi: entry.linesHindi,
      linesHinglish: entry.linesHinglish,
      linesEnglish: entry.linesEnglish,
      tags: [category, 'ZQFeelings', 'DilKiAwaaz'],
      author: 'ZQ-FEELINGS 👑 Official',
      isOfficial: true,
      initialLikes: 1180 + ((idx * 37 + num * 13) % 1250),
      commentsCount: 1,
      comments: [
        {
          id: `c-${category}-u-${num}`,
          userName: commentSample.userName,
          text: commentSample.text,
          date: DATES[idx % DATES.length],
          likes: 4 + (idx % 19),
        },
      ],
    };
  });
}
