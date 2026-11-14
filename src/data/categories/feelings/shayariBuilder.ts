import { Shayari, FeelingsCategory } from '../../../types/shayari';
import { convertHindiLineToHinglish } from '../../../utils/globalTranslations';

export type RawPoemTuple = readonly [hindi: string, english: string];

export interface CategoryBuildConfig {
  category: FeelingsCategory | string;
  categoryName: string;
  categoryIcon: string;
  idPrefix: string;
  startIndex: number;
  tags: string[];
  twoLine?: boolean;
}

export function hindiLineToHinglish(line: string): string {
  return convertHindiLineToHinglish(line);
}

const READER_NAMES = [
  'आरव शर्मा', 'प्रिया वर्मा', 'रोहित राजपूत', 'अंजलि सिंह',
  'कबीर मेहरा', 'नेहा गुप्ता', 'आदित्य मिश्रा', 'साक्षी तिवारी',
  'विवेक यादव', 'काव्या जोशी', 'राहुल चौहान', 'पूजा अग्रवाल',
  'अमन सक्सेना', 'दिव्या पांडे', 'हर्षित श्रीवास्तव', 'निधि रावत'
];

const READER_PRAISE = [
  'दिल की गहराइयों को छू लेने वाली बेहद खूबसूरत शायरी! 💖',
  'एक-एक लफ़्ज़ में सच्चा एहसास झलकता है, लाजवाब! ✨',
  'सीधा रूह तक उतर गई ये शायरी, बहुत ही शानदार! 🌸',
  'स्टेटस पर लगाने के लिए एकदम परफेक्ट पंक्तियाँ! 💗',
  'जितनी बार पढ़ो उतना ही सुकून मिलता है, बेहतरीन! 🙏',
  'ज़िंदगी और जज़्बातों की बिल्कुल सच्ची तस्वीर! 🌟',
  'बहुत ही प्यारे अल्फ़ाज़, पढ़कर दिल खुश हो गया! 😊',
  'दिल की बात कहने का इससे सुंदर अंदाज़ नहीं हो सकता! 🌹'
];

const FUNNY_READER_PRAISE = [
  'पढ़कर हँसी ही नहीं रुक रही, एकदम मज़ेदार चुटकुला शायरी! 😂',
  'बिल्कुल सच लिखा है भाई, दोस्तों के ग्रुप में भेजने लायक! 🤣',
  'हर लाइन पर ज़ोरदार मुस्कान आ गई, सुपर कॉमेडी शायरी! 😄',
  'स्टेटस पर लगाते ही सब हँस पड़े, लाजवाब प्रैंक अंदाज़! 😆'
];

function extractTitleFromHindi(firstLine: string): string {
  const cleaned = firstLine
    .replace(/[।,!?;:"'“”‘’—–-]+/g, ' ')
    .trim();
  const words = cleaned.split(/\s+/).slice(0, 4);
  return words.join(' ');
}

export function buildCategoryShayaris(
  config: CategoryBuildConfig,
  poems: readonly RawPoemTuple[]
): Shayari[] {
  return poems.map(([hindiBlock, englishBlock], idx) => {
    const num = config.startIndex + idx;
    const id = `${config.idPrefix}-${num}`;
    const linesHindi = hindiBlock
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const linesEnglish = englishBlock
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const linesHinglish = linesHindi.map(hindiLineToHinglish);

    const isOfficial = idx === 0;
    const author = isOfficial
      ? 'ZQ-FEELINGS 👑 Official'
      : idx % 2 === 1
      ? 'ZQ-FEELINGS 💗'
      : 'दिल की आवाज़ (ZQ)';

    const commentAuthor = READER_NAMES[(num + idx * 3) % READER_NAMES.length];
    const praisePool = config.category === 'funny' ? FUNNY_READER_PRAISE : READER_PRAISE;
    const commentText = `${praisePool[(num + idx * 5) % praisePool.length]} ${config.categoryIcon}`;

    return {
      id,
      category: config.category,
      categoryType: 'feelings',
      categoryName: config.categoryName,
      categoryIcon: config.categoryIcon,
      title: extractTitleFromHindi(linesHindi[0] || config.categoryName),
      lines: linesHindi,
      linesHindi,
      linesHinglish,
      linesEnglish,
      tags: [...config.tags, 'DilKiAwaaz', 'ZQFeelings'],
      author,
      isOfficial,
      initialLikes: 950 + ((num * 83 + idx * 47) % 1450),
      commentsCount: 1,
      comments: [
        {
          id: `c-${id}-1`,
          userName: commentAuthor,
          text: commentText,
          date: '26 Oct 2026',
          likes: 3 + ((num + idx) % 14)
        }
      ]
    };
  });
}
