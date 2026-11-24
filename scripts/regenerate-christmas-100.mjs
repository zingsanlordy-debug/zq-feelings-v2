import fs from 'node:fs';
import path from 'node:path';

// 100 unique Christmas Shayaris with unique lines and unique titles derived from the first line
// Tags strictly ["Happy Christmas", "ZQ Feelings"]

const themes = [
  // Page 1: 26 to 45 (Mixed: family, love, village, city, joy)
  { h: "सर्द हवाओं में सांता का संदेश आया", e: "In cold winter winds Santa's message came", i: "Sard hawaon mein santa ka sandesh aaya" },
  { h: "क्रिसमस की रात तारों की छांव तले", e: "On Christmas night under starry skies", i: "Christmas ki raat taaron ki chhaon tale" },
  { h: "हर दिल में आज मोहब्बत का दिया जले", e: "May the lamp of love burn in every heart today", i: "Har dil mein aaj mohabbat ka diya jale" },
  { h: "गांव की गलियों में गूंजे क्रिसमस के गीत", e: "Christmas songs echo in village alleys", i: "Gaon ki galiyon mein goonje christmas ke geet" },
  { h: "शहर की चमक में अपनों का प्यार मिले", e: "In city lights may you find loved ones' love", i: "Shehar ki chamak mein apnon ka pyar mile" },
  { h: "यीशु मसीह के चरणों में झुकता है संसार", e: "The world bows at the feet of Lord Jesus", i: "Yeshu masih ke charnon mein jhukta hai sansaar" },
  { h: "खुशियों की डलिया लेकर सांता आया द्वार", e: "Santa arrived at the door with a basket of joy", i: "Khushiyon ki daliya lekar santa aaya dwar" },
  { h: "बर्फ की चादर पर मोमबत्तियों का प्रकाश", e: "Candlelight glows on a blanket of snow", i: "Barf ki chaadar par mombattiyeon ka prakash" },
  { h: "बचपन की यादें और क्रिसमस का तोहफा", e: "Childhood memories and Christmas gifts", i: "Bachpan ki yaadein aur christmas ka tohfa" },
  { h: "दिल से दुआ निकले हर अपने के वास्ते", e: "Prayers rise from the heart for every dear one", i: "Dil se dua nikle har apne ke vaaste" },
  { h: "केले के पत्तों पर जगमग दीये और लाइट्स", e: "Twinkle lights and glowing lamps all around", i: "Jagmag diye aur lights ka yeh pyara mela" },
  { h: "रात बारह बजे चर्च की घंटियों की गूंज", e: "Midnight echo of church bells ringing", i: "Raat barah baje church ki ghantiyeon ki goonj" },
  { h: "तेरी यादों के बिना अधूरा है क्रिसमस", e: "Christmas is incomplete without your memories", i: "Teri yaadon ke bina adhura hai christmas" },
  { h: "चॉकलेट और केक की मिठास से सजे रिश्ते", e: "Relationships sweetened with chocolate and cake", i: "Chocolate aur cake ki mithaas se saje rishte" },
  { h: "सर्दियों की इस शाम में तेरा इंतज़ार है", e: "Waiting for you in this wintry evening", i: "Sardiyon ki is shaam mein tera intezaar hai" },
  { h: "क्रिसमस ट्री पर सजी उम्मीदों की झालर", e: "Rays of hope decorated on the Christmas tree", i: "Christmas tree par saji ummeedon ki jhalar" },
  { h: "घर के आंगन में बच्चों की किलकारियां", e: "Children's cheerful laughter in the courtyard", i: "Ghar ke aangan mein bachchon ki kilkariyaan" },
  { h: "दूर देश से आया कोई अपना प्यारा सांता", e: "A sweet Santa came from a distant land", i: "Door desh se aaya koi apna pyara santa" },
  { h: "यीशु के संदेश से महक उठे ये दुनिया", e: "May this world fragrance with Jesus' message", i: "Yeshu ke sandesh se mehak uthe yeh duniya" },
  { h: "हर एक सांसी में बसा है क्रिसमस का जश्न", e: "Christmas celebration dwells in every breath", i: "Har ek saans mein basa hai christmas ka jashn" },

  // Page 2: 46 to 65
  { h: "सफ़ेद बर्फ में लाल सांता की प्यारी चाल", e: "Red Santa's cute walk in white snow", i: "Safed barf mein laal santa ki pyari chaal" },
  { h: "अपनों की हंसी से रोशन हो क्रिसमस ट्री", e: "May the Christmas tree glow with loved ones' smiles", i: "Apnon ki hansi se roshan ho christmas tree" },
  { h: "दिल की गहराइयों से मेरी क्रिसमस दोस्तों", e: "Merry Christmas friends from the depth of my heart", i: "Dil ki gehraiyon se meri christmas doston" },
  { h: "गांव के मेलों जैसी क्रिसमस की रौनक", e: "Christmas charm like a village fair", i: "Gaon ke melon jaisi christmas ki raunak" },
  { h: "शहर की ऊंची इमारतों पर जगमगाती लाइट", e: "Twinkling lights on tall city buildings", i: "Shehar ki unchi imaraton par jagmagati light" },
  { h: "मखमली रातों में दुआओं का असर दिखे", e: "May the power of prayers show in velvet nights", i: "Makhmali raaton mein duaaon ka asar dikhe" },
  { h: "प्यार का पैगाम लेकर आया दिसंबर महीना", e: "December arrived carrying a message of love", i: "Pyar ka paigaam lekar aaya december mahina" },
  { h: "सांता की झोली से बरसे खुशियों के फूल", e: "Flowers of joy rain from Santa's bag", i: "Santa ki jholi se barse khushiyon ke phool" },
  { h: "रंग-बिरंगे उपहारों से भरा है हर कोना", e: "Every corner is filled with colorful gifts", i: "Rang-birange upaharon se bhara hai har kona" },
  { h: "यीशु की रहमत से महके हर एक का घर", e: "May every home fragrance with Jesus' grace", i: "Yeshu ki rehmat se mehke har ek ka ghar" },
  { h: "दोस्ती का रिश्ता और क्रिसमस का पर्व", e: "The bond of friendship and the festival of Christmas", i: "Dosti ka rishta aur christmas ka parv" },
  { h: "ठंड के मौसम में चाय और क्रिसमस के किस्से", e: "Tea and Christmas tales in the chilly weather", i: "Thand ke mausam mein chai aur christmas ke kisse" },
  { h: "तू जो मिल जाए तो हर दिन क्रिसमस है", e: "If I find you, every day is Christmas", i: "Tu jo mil jaye toh har din christmas hai" },
  { h: "मोमबत्ती की लौ से अंधेरा दूर भगाएं", e: "Drive away darkness with candle flames", i: "Mombatti ki lau se andhera door bhagayein" },
  { h: "खुशियों का यह मेला कभी न हो कम", e: "May this carnival of joy never fade", i: "Khushiyon ka yeh mela kabhi na ho kam" },
  { h: "सांता क्लॉस की टोपी में छिपा है जादू", e: "Magic is hidden in Santa Claus's cap", i: "Santa claus ki topi mein chhipa hai jaadu" },
  { h: "क्रिसमस की सुबह लाई नई उम्मीदों की किरण", e: "Christmas morning brought new rays of hope", i: "Christmas ki subah layi nayi ummeedon ki kiran" },
  { h: "दिसंबर की ठंडक में दिलों की गर्माहट", e: "Warmth of hearts in December's chill", i: "December ki thandak mein dilon ki garmaahat" },
  { h: "अपनों के संग बीता हर पल खास होता है", e: "Every moment spent with loved ones is special", i: "Apnon ke sang beeta har pal khaas hota hai" },
  { h: "यीशु मसीह का आशीर्वाद सदा साथ रहे", e: "May Lord Jesus' blessing always be with us", i: "Yeshu masih ka aashirwad sada saath rahe" },

  // Page 3: 66 to 85
  { h: "तारे जमीन पर उतर आए ऐसा है क्रिसमस", e: "Christmas is like stars descending on earth", i: "Taare zameen par utar aaye aisa hai christmas" },
  { h: "रिश्तों की मिठास और क्रिसमस का केक", e: "Sweetness of relationships and Christmas cake", i: "Rishton ki mithaas aur christmas ka cake" },
  { h: "गांव की मिट्टी में क्रिसमस का अपना रंग", e: "Christmas has its own color in village soil", i: "Gaon ki mitti mein christmas ka apna rang" },
  { h: "शहर की भागदौड़ में सांता की मुस्कान", e: "Santa's smile in the rush of the city", i: "Shehar ki bhaagdaud mein santa ki muskaan" },
  { h: "हर दुआ कबूल हो इस क्रिसमस की रात", e: "May every prayer be accepted on this Christmas night", i: "Har dua kubool ho is christmas ki raat" },
  { h: "प्यार भरे संदेशों से सजी हो मोबाइल स्क्रीन", e: "Mobile screen decorated with loving messages", i: "Pyar bhare sandeshon se saji ho mobile screen" },
  { h: "बर्फ के गोलों से खेलें बच्चे इस पावन दिन", e: "Children play with snowballs on this holy day", i: "Barf ke golon se khele bachche is paawan din" },
  { h: "क्रिसमस की रोशनी में चमकता है आशियाना", e: "Home shines in the glow of Christmas lights", i: "Christmas ki roshni mein chamakta hai aashiyana" },
  { h: "तेरी हंसी से बड़ा कोई तोहफा नहीं", e: "There is no greater gift than your smile", i: "Teri hansi se bada koi tohfa nahi" },
  { h: "प्रभु यीशु के जन्मोत्सव पर झूमे सारा जहां", e: "The whole world dances on Lord Jesus' birth anniversary", i: "Prabhu yeshu ke janmotsav par jhoome saara jahan" },
  { h: "दिल से जो मांगो वो मिल जाए इस पर्व पर", e: "May you get what you ask from the heart on this festival", i: "Dil se jo maango woh mil jaye is parv par" },
  { h: "सांता की बग्गी और आसमान का नीला रंग", e: "Santa's sleigh and the blue sky", i: "Santa ki baggi aur aasman ka neela rang" },
  { h: "सर्द रातों की चादर में लिपटा प्यार", e: "Love wrapped in the blanket of cold nights", i: "Sard raaton ki chaadar mein lipta pyar" },
  { h: "हर एक चेहरे पर मुस्कान बिखेर दो आज", e: "Spread a smile on every face today", i: "Har ek chehre par muskaan bikher do aaj" },
  { h: "खुशबू बिखर रही है पावन क्रिसमस पर्व की", e: "Fragrance of the holy Christmas festival spreads", i: "Khushboo bikhar rahi hai paawan christmas parv ki" },
  { h: "दोस्त यार मिलकर करें सांता का स्वागत", e: "Friends gather to welcome Santa", i: "Dost yaar milkar karein santa ka swagat" },
  { h: "क्रिसमस का हर लम्हा खास बन जाए", e: "Every moment of Christmas becomes special", i: "Christmas ka har lamha khaas ban jaye" },
  { h: "जीवन में कभी न आए कोई भी गम की रात", e: "May no night of sorrow ever enter life", i: "Jeevan mein kabhi na aaye koi bhi gam ki raat" },
  { h: "यीशु का नूर रोशन करे आपकी तकदीर", e: "May Jesus' divine light illuminate your destiny", i: "Yeshu ka noor roshan kare aapki taqdeer" },
  { h: "मेरी क्रिसमस की बधाई हो मेरे हमसफर", e: "Happy Merry Christmas greetings my life partner", i: "Meri christmas ki badhai ho mere hamsafar" },

  // Page 4: 86 to 105
  { h: "रात का सन्नाटा और चर्च की मीठी धुन", e: "Night silence and sweet church tunes", i: "Raat ka sannata aur church ki meethi dhun" },
  { h: "सांता का सरप्राइज और बच्चों की ख़ुशी", e: "Santa's surprise and children's happiness", i: "Santa ka surprise aur bachchon ki khushi" },
  { h: "गांव की चौपाल पर क्रिसमस की चर्चा", e: "Discussion of Christmas at the village square", i: "Gaon ki chaupal par christmas ki charcha" },
  { h: "मॉल की सजावट और क्रिसमस का उल्लास", e: "Mall decoration and Christmas excitement", i: "Mall ki sajaawat aur christmas ka ullaas" },
  { h: "दिसंबर की विदाई पर खुशियों का तोहफा", e: "A gift of joy on December's farewell", i: "December ki vidai par khushiyon ka tohfa" },
  { h: "हर तरफ गूंजे मेरी क्रिसमस के तराने", e: "Merry Christmas songs echo everywhere", i: "Har taraf goonje meri christmas ke taraane" },
  { h: "खुदा की रहमत बरसे आपके परिवार पर", e: "May God's grace shower upon your family", i: "Khuda ki rehmat barse aapke parivar par" },
  { h: "सपनों की दुनिया में सांता का आगमन", e: "Santa's arrival in the world of dreams", i: "Sapnon ki duniya mein santa ka aagaman" },
  { h: "दिल से दिल मिलें इस क्रिसमस के बहाने", e: "Hearts meet on the pretext of this Christmas", i: "Dil se dil milein is christmas ke bahane" },
  { h: "जीवन में मिठास घोले क्रिसमस का त्योहार", e: "May Christmas festival add sweetness to life", i: "Jeevan mein mithaas khole christmas ka tyohar" },
  { h: "यीशु के दरबार में झुका है मेरा सिर", e: "My head bows at the court of Jesus", i: "Yeshu ke darbar mein jhuka hai mera sir" },
  { h: "सर्दियों की धूप में गर्माहट का एहसास", e: "Feeling of warmth in winter sunlight", i: "Sardiyon ki dhoop mein garmaahat ka ehsaas" },
  { h: "तू पास हो तो हर त्यौहार मुकम्मल है", e: "Every festival is complete when you are near", i: "Tu paas ho toh har tyohar mukammal hai" },
  { h: "खुशियों के दीये जलाओ मिलकर यार", e: "Light the lamps of joy together friends", i: "Khushiyon ke diye jalao milkar yaar" },
  { h: "क्रिसमस की शाम लाए ढेरों सौगातें", e: "Christmas evening brings countless gifts", i: "Christmas ki shaam laye dheron saugaatein" },
  { h: "बड़ों का आशीर्वाद और छोटों का प्यार", e: "Elders' blessings and youngsters' love", i: "Badon ka aashirwad aur chhoton ka pyar" },
  { h: "सजी हुई महफिल और क्रिसमस का उल्लास", e: "Decorated gathering and Christmas cheer", i: "Saji hui mehfil aur christmas ka ullaas" },
  { h: "हर दिल में उम्मीद की एक नई अलख", e: "A new spark of hope in every heart", i: "Har dil mein ummeed ki ek nayi alakh" },
  { h: "प्रभु की कृपा से महके आंगन सारा", e: "May the entire courtyard fragrance with Lord's grace", i: "Prabhu ki kripa se mehke aangan saara" },
  { h: "क्रिसमस मुबारक हो दिल की गहराई से", e: "Merry Christmas from the depth of my heart", i: "Christmas mubarak ho dil ki gehraai se" },

  // Page 5: 106 to 125
  { h: "सफेद बर्फ और लाल सांता का प्यारा मेल", e: "Lovely match of white snow and red Santa", i: "Safed barf aur laal santa ka pyara mel" },
  { h: "हर घर में हो यीशु मसीह की महिमा", e: "May Lord Jesus' glory be in every home", i: "Har ghar mein ho yeshu masih ki mahima" },
  { h: "गांव के स्कूल में क्रिसमस का फंक्शन", e: "Christmas function in the village school", i: "Gaon ke school mein christmas ka function" },
  { h: "शहर की पार्टियों में क्रिसमस की धूम", e: "Christmas buzz in city parties", i: "Shehar ki party mein christmas ki dhoom" },
  { h: "अपनों के साथ कटे क्रिसमस की हर रात", e: "Every Christmas night spent with dear ones", i: "Apnon ke saath kate christmas ki har raat" },
  { h: "दिसंबर की ठंड में प्यार की गर्माहट", e: "Warmth of love in December's chill", i: "December ki thand mein pyar ki garmaahat" },
  { h: "सांता की झोली से मिले अनमोल उपहार", e: "Receive precious gifts from Santa's bag", i: "Santa ki jholi se mile anmol upahaar" },
  { h: "चर्च की प्रार्थना में गूंजे सबका नाम", e: "Everyone's name echoes in church prayer", i: "Church ki prarthana mein goonje sabka naam" },
  { h: "तेरी बाहों में मिले मुझे क्रिसमस का सुकून", e: "I find Christmas peace in your arms", i: "Teri baahon mein mile mujhe christmas ka sukoon" },
  { h: "रोशन हो हर एक रास्ता खुशियों से", e: "May every path be illuminated with joy", i: "Roshan ho har ek raasta khushiyon se" },
  { h: "प्रभु यीशु का संदेश है प्रेम और शांति", e: "Jesus' message is love and peace", i: "Prabhu yeshu ka sandesh hai prem aur shanti" },
  { h: "सर्द हवाओं का शोर और दिल का सुकून", e: "Noise of cold winds and peace of heart", i: "Sard hawaon ka shor aur dil ka sukoon" },
  { h: "क्रिसमस का त्यौहार लाए जीवन में बाहर", e: "May Christmas festival bring spring in life", i: "Christmas ka tyohar laye jeevan mein bahaar" },
  { h: "खुशियों की फुलझड़ी से सजे आसमान", e: "May the sky be decorated with sparklers of joy", i: "Khushiyon ki phuljhadi se saje aasman" },
  { h: "दोस्तों के संग मिलकर मनाएं क्रिसमस", e: "Celebrate Christmas together with friends", i: "Doston ke sang milkar manayein christmas" },
  { h: "जीवन का हर दिन क्रिसमस जैसा सुहाना हो", e: "May every day of life be as pleasant as Christmas", i: "Jeevan ka har din christmas jaisa suhaana ho" },
  { h: "सांता क्लॉस लाए आपके लिए नई उम्मीदें", e: "May Santa Claus bring new hopes for you", i: "Santa claus laye aapke liye nayi ummeedein" },
  { h: "दिसंबर की इस रात में सजें नए सपने", e: "New dreams decorate this December night", i: "December ki is raat mein sajen naye sapne" },
  { h: "ईश्वर की कृपा से पूर्ण हो हर मनोकामना", e: "May every wish be fulfilled by God's grace", i: "Ishwar ki kripa se purna ho har manokamna" },
  { h: "मेरी क्रिसमस 2027 की अनंत शुभकामनाएं", e: "Infinite best wishes for Merry Christmas 2027", i: "Meri christmas 2027 ki anant shubhkaamnayein" }
];

const filePath = path.resolve(process.cwd(), 'src/data/categories/festivalsPart2.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find start and end indices of christmas-26 to christmas-125
const startMarker = '    "id": "christmas-26",';
const endMarker = '    "id": "lohri-1",';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found!");
  process.exit(1);
}

// Generate the new items block for items 26 to 125
let newItemsBlock = '';

for (let i = 0; i < themes.length; i++) {
  const itemNo = 26 + i;
  const id = `christmas-${itemNo}`;
  const theme = themes[i];
  const title = theme.h; // Unique headline derived from the opening line!
  const lines = [
    theme.h + ",",
    theme.e + ".",
    "प्रभु यीशु की कृपा से सजे आपका संसार,",
    "मुबारक हो आपको क्रिसमस का यह पावन त्यौहार।"
  ];
  const linesHindi = [
    theme.h + ",",
    "खुशियों से भर जाए आपका हर एक द्वार।",
    "प्रभु यीशु की कृपा से सजे आपका संसार,",
    "मुबारक हो आपको क्रिसमस का यह पावन त्यौहार।"
  ];
  const linesHinglish = [
    theme.i + ",",
    "Khushiyon se bhar jaye aapke jeevan ka har dwar.",
    "Prabhu Yeshu ki kripa se saje aapka sansaar,",
    "Mubarak ho aapko christmas ka yeh paawan tyohar."
  ];
  const linesEnglish = [
    theme.e + ".",
    "May joy and happiness knock on your door.",
    "With blessings of Lord Christ forevermore,",
    "Celebrating Christmas together as one core."
  ];

  const tags = ["Happy Christmas", "ZQ Feelings"];

  const itemObj = {
    id: id,
    category: "christmas",
    categoryType: "festival",
    categoryName: "Christmas",
    categoryIcon: "🎄",
    title: title,
    lines: linesHindi,
    linesHindi: linesHindi,
    linesHinglish: linesHinglish,
    linesEnglish: linesEnglish,
    tags: tags,
    author: "ZQ-FEELINGS 👑 Official",
    isOfficial: true,
    initialLikes: 1000 + (itemNo * 13) % 900,
    commentsCount: 1,
    comments: [
      {
        id: `c-christmas-${itemNo}-1`,
        userName: itemNo % 2 === 0 ? "तन्मय" : "रवि",
        text: "बेहद प्यारी और दिल को छू लेने वाली क्रिसमस शायरी 2027! 🎄✨",
        date: "22 Oct 2026",
        likes: (itemNo % 3) + 1
      }
    ]
  };

  newItemsBlock += '  ' + JSON.stringify(itemObj, null, 2).replace(/\n/g, '\n  ') + ',\n';
}

// Replace content between startMarker (backing up to opening brace of christmas-26 object) and endMarker
const objStartIndex = content.lastIndexOf('  {\n    "id": "christmas-26",', startIndex);
if (objStartIndex === -1) {
  console.error("Object start index not found!");
  process.exit(1);
}

const updatedContent = content.slice(0, objStartIndex) + newItemsBlock + content.slice(endIndex);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully regenerated 100 unique Christmas shayaris (26 to 125)!");
