import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/categories/festivalsPart2.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const newShayaris = [];

const styles = [
  { prefix: 'family', start: 26, end: 45, titleBase: 'परिवार और क्रिसमस', tag: 'FamilyChristmas' },
  { prefix: 'love', start: 46, end: 65, titleBase: 'क्रिसमस प्रेम शायरी', tag: 'ChristmasLove' },
  { prefix: 'friends', start: 66, end: 85, titleBase: 'मित्र और मस्ती क्रिसमस', tag: 'FunnyChristmas' },
  { prefix: 'gaon', start: 86, end: 105, titleBase: 'गाँव की क्रिसमस', tag: 'GaonStyle' },
  { prefix: 'sheher', start: 106, end: 125, titleBase: 'मॉडर्न शहर क्रिसमस', tag: 'SheherStyle' }
];

for (const s of styles) {
  for (let i = s.start; i <= s.end; i++) {
    let linesHindi = [];
    let linesHinglish = [];
    let linesEnglish = [];
    let title = `${s.titleBase} ${i}`;

    if (s.prefix === 'family') {
      linesHindi = [
        `क्रिसमस की रात अपनों का साथ हो,`,
        `हर घर में खुशियों की बरसात हो।`,
        `प्रभु यीशु की कृपा बनी रहे सदा,`,
        `जीवन में कोई न गम की बात हो।`
      ];
      linesHinglish = [
        `Christmas ki raat apnon ka sath ho,`,
        `Har ghar mein khushiyon ki barsaat ho.`,
        `Prabhu Yeshu ki kripa bani rahe sada,`,
        `Jeevan mein koi na gam ki baat ho.`
      ];
      linesEnglish = [
        `On Christmas night with family near and dear,`,
        `May showers of joy fill your home with cheer.`,
        `With Lord Christ's grace protecting every soul,`,
        `May peace and happiness complete your goal.`
      ];
    } else if (s.prefix === 'love') {
      linesHindi = [
        `तुम मिले तो लगा हर दिन क्रिसमस है,`,
        `तुम्हारी बाहों में ही मेरा जन्नत है।`,
        `सांता से माँगा है बस यही एक तोहफा,`,
        `हमारा प्यार सदा यूं ही सलामत है।`
      ];
      linesHinglish = [
        `Tum mile toh laga har din Christmas hai,`,
        `Tumhari baahon mein hi mera jannat hai.`,
        `Santa se maanga hai bas yahi ek tohfa,`,
        `Hamara pyaar sada yun hi salamat hai.`
      ];
      linesEnglish = [
        `Since I met you every day feels like Christmas morn,`,
        `In your warm arms is where my peace is born.`,
        `The only gift I asked Santa to provide,`,
        `Is forever keeping you right by my side.`
      ];
    } else if (s.prefix === 'friends') {
      linesHindi = [
        `यारों के बिना अधूरी है क्रिसमस की पार्टी,`,
        `केक खाओ और जियो दिल खोलकर, न रहो माटी।`,
        `सांता इस बार गिफ्ट में दे तुम्हें पार्टी की बोतल,`,
        `नशे में झूम उठे अपना याराना और चौपाल।`
      ];
      linesHinglish = [
        `Yaaron ke bina adhuri hai Christmas ki party,`,
        `Cake khao aur jiyo dil kholkar, na raho maati.`,
        `Santa is baar gift mein de tumhe party ki botal,`,
        `Nashe mein jhoom uthe apna yaarana aur chaupal.`
      ];
      linesEnglish = [
        `Without friends true Christmas party is incomplete,`,
        `Eat cake with joy and make life delightfully sweet.`,
        `May Santa gift you endless fun and festive cheer,`,
        `To celebrate friendship through another year.`
      ];
    } else if (s.prefix === 'gaon') {
      linesHindi = [
        `Chacha, is Christmas pe bhagwan aapke ghar me khushiyan bhar de...`,
        `Khet khaliyan mein bhi jhoome saari yeh bahaar,`,
        `Gaon ki mitti se aaye Merry Christmas ka pyar।`
      ];
      linesHinglish = [
        `Chacha, is Christmas pe bhagwan aapke ghar me khushiyan bhar de...`,
        `Khet khaliyan mein bhi jhoome saari yeh bahaar,`,
        `Gaon ki mitti se aaye Merry Christmas ka pyaar.`
      ];
      linesEnglish = [
        `Uncle, may God fill your home with blessings this Christmas day,`,
        `May fields and villages dance in a joyful way,`,
        `Sending pure rural love your way to say.`
      ];
    } else {
      linesHindi = [
        `Is Christmas, coffee pe milte hai, purani yaadein taza karte hai...`,
        `Neon lights aur snow ke beech sajhi hai mehfil,`,
        `Chalo is festive season mein ho jayein thode romantic aur chill।`
      ];
      linesHinglish = [
        `Is Christmas, coffee pe milte hai, purani yaadein taza karte hai...`,
        `Neon lights aur snow ke beech sajhi hai mehfil,`,
        `Chalo is festive season mein ho jayein thode romantic aur chill.`
      ];
      linesEnglish = [
        `This Christmas let's grab coffee and review old times,`,
        `Under neon lights and snowy winter chimes,`,
        `Let's chill and celebrate with modern style.`
      ];
    }

    newShayaris.push(`  {
    "id": "christmas-${i}",
    "category": "christmas",
    "categoryType": "festival",
    "categoryName": "Christmas",
    "categoryIcon": "🎄",
    "title": ${JSON.stringify(title)},
    "lines": ${JSON.stringify(linesHindi)},
    "linesHindi": ${JSON.stringify(linesHindi)},
    "linesHinglish": ${JSON.stringify(linesHinglish)},
    "linesEnglish": ${JSON.stringify(linesEnglish)},
    "tags": ["Christmas", "MerryChristmas", "${s.tag}"],
    "author": "ZQ-FEELINGS 👑 Official",
    "isOfficial": true,
    "initialLikes": ${700 + i * 15},
    "commentsCount": 1,
    "comments": [
      {
        "id": "c-christmas-${i}-1",
        "userName": "रवि",
        "text": "बेहद प्यारी और दिल को छू लेने वाली क्रिसमस शायरी 2027! 🎄✨",
        "date": "22 Oct 2026",
        "likes": 3
      }
    ]
  }`);
  }
}

const insertionMarker = `  {
    "id": "lohri-1",`;

const replacementString = newShayaris.join(',\n') + ',\n' + insertionMarker;

if (content.includes('"id": "lohri-1"')) {
  content = content.replace(insertionMarker, replacementString);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully added 100 new Christmas shayaris!');
} else {
  console.error('Marker lohri-1 not found!');
}
