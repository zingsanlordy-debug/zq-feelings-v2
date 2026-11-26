import { Shayari } from '../../types/shayari';

interface RawFestEntry {
  title: string;
  titleEnglish: string;
  linesHindi: [string, string];
  linesHinglish: [string, string];
  linesEnglish: [string, string];
}

const FEST_COMMENTS: Record<'christmas' | 'republic-day' | 'new-year', Array<{ userName: string; text: string }>> = {
  christmas: [
    { userName: 'रवि मेहता', text: 'मेरी क्रिसमस! बहुत ही प्यारी और दिल को छू लेने वाली शुभकामनाएँ 🎄✨' },
    { userName: 'Ananya Verma', text: 'Christmas par apnon ko bhejne ke liye ekdum dil se likhi lines ❤️' },
    { userName: 'निखिल शर्मा', text: 'इतनी खूबसूरत क्रिसमस शायरी, तुरंत स्टेटस पर लगा ली 🌟' },
    { userName: 'Simran Gill', text: 'Bahut sukoon aur pyaar bhari lines hain, Merry Christmas! ❄️' },
  ],
  'republic-day': [
    { userName: 'अर्जुन सिंह', text: 'जय हिंद! तिरंगे और भारत माँ के सम्मान में लाजवाब पंक्तियाँ 🇮🇳' },
    { userName: 'Priya Deshmukh', text: '26 January status ke liye sabse behtareen aur garv bhari shayari 🎖️' },
    { userName: 'रोहित चौहान', text: 'रगों में देशभक्ति का जोश भर दिया इन दो लाइनों ने, वंदे मातरम!' },
    { userName: 'Kavita Nair', text: 'Samvidhan aur veeron ko naman karti bahut hi sundar rachna ✨' },
  ],
  'new-year': [
    { userName: 'अमन राजपूत', text: 'नए साल की बहुत ही प्यारी और दिल को छू जाने वाली शुभकामनाएँ 🎉✨' },
    { userName: 'Sneha Kapoor', text: 'Happy New Year! Family aur doston ko bhejne ke liye ekdum dil se likhi lines 💛' },
    { userName: 'विवेक जोशी', text: 'साल की नई शुरुआत के लिए सबसे खूबसूरत और पॉजिटिव शायरी 🌟' },
    { userName: 'Pooja Iyer', text: 'Naye saal par status aur WhatsApp wish ke liye best shayari! 🎊' },
  ],
};

const DATES = ['25 Dec 2026', '26 Jan 2026', '18 Dec 2026', '22 Jan 2026', '24 Dec 2026'];

function buildFestivalShayaris(
  category: 'christmas' | 'republic-day' | 'new-year',
  categoryName: string,
  categoryIcon: string,
  tags: string[],
  startNumber: number,
  entries: RawFestEntry[]
): Shayari[] {
  const pool = FEST_COMMENTS[category];
  return entries.map((entry, idx) => {
    const num = startNumber + idx;
    const sample = pool[idx % pool.length];
    return {
      id: `${category}-${num}`,
      category,
      categoryType: 'festival',
      categoryName,
      categoryIcon,
      title: entry.title,
      titleEnglish: entry.titleEnglish,
      lines: entry.linesHindi,
      linesHindi: entry.linesHindi,
      linesHinglish: entry.linesHinglish,
      linesEnglish: entry.linesEnglish,
      tags,
      author: 'ZQ-FEELINGS 👑 Official',
      isOfficial: idx % 3 === 0,
      initialLikes: 980 + ((idx * 43 + num * 19) % 1400),
      commentsCount: 1,
      comments: [
        {
          id: `c-${category}-${num}-1`,
          userName: sample.userName,
          text: sample.text,
          date: DATES[idx % DATES.length],
          likes: 3 + (idx % 21),
        },
      ],
    };
  });
}

const CHRISTMAS_EXTRA_75: RawFestEntry[] = [
  {
    title: 'क्रिसमस की गुनगुनी रौनक',
    titleEnglish: 'Warm Glow of Christmas Morning',
    linesHindi: [
      'सर्द सुबह में भी अपनों की मुस्कान से गर्माहट छा जाती है',
      'क्रिसमस की हर घंटी दिल में नई उम्मीद जगा जाती है',
    ],
    linesHinglish: [
      'Sard subah mein bhi apnon ki muskaan se garmahat chha jaati hai',
      'Christmas ki har ghanti dil mein nayi ummeed jaga jaati hai',
    ],
    linesEnglish: [
      'Even on chilly mornings, loved ones bring gentle warmth with every smile',
      'Every Christmas chime awakens fresh hope inside the quiet heart',
    ],
  },
  {
    title: 'सांता से पहले अपनों की दुआ',
    titleEnglish: 'Prayers Before Santa Arrives',
    linesHindi: [
      'तोहफ़ों से भी ज़्यादा क़ीमती अपनों की सच्ची दुआ होती है',
      'क्रिसमस की रात हर घर में खुशियों की नई शुरुआत होती है',
    ],
    linesHinglish: [
      'Tohfon se bhi zyada keemti apnon ki sacchi dua hoti hai',
      'Christmas ki raat har ghar mein khushiyon ki nayi shuruat hoti hai',
    ],
    linesEnglish: [
      'Sincere blessings from loved ones shine richer than wrapped gifts',
      'Christmas night opens a joyful new chapter inside every home',
    ],
  },
  {
    title: 'सितारों संग सजा आँगन',
    titleEnglish: 'Courtyard Lit With Stars',
    linesHindi: [
      'रंग-बिरंगी रोशनी से हर गली का चेहरा निखर उठता है',
      'क्रिसमस आते ही इंसान के भीतर का बचपन फिर संवर उठता है',
    ],
    linesHinglish: [
      'Rang-birangi roshni se har gali ka chehra nikhar uthta hai',
      'Christmas aate hi insaan ke bheetar ka bachpan phir sanwar uthta hai',
    ],
    linesEnglish: [
      'Colorful lanterns brighten the face of every quiet lane',
      'Christmas softly awakens the innocent child living inside us all',
    ],
  },
  {
    title: 'दिसंबर की मीठी सौगात',
    titleEnglish: 'Sweet Gift of December',
    linesHindi: [
      'बर्फ़ीली हवाओं में भी मोहब्बत का मौसम गुनगुनाता है',
      'क्रिसमस हर टूटे मन को फिर से मुस्कुराना सिखाता है',
    ],
    linesHinglish: [
      'Barfeeli hawaon mein bhi mohabbat ka mausam gungunata hai',
      'Christmas har toote man ko phir se muskurana sikhata hai',
    ],
    linesEnglish: [
      'Even through frosty breezes, love hums its tender melody',
      'Christmas teaches every weary heart how to smile softly again',
    ],
  },
  {
    title: 'प्यार और शांति का पैग़ाम',
    titleEnglish: 'Message of Love and Peace',
    linesHindi: [
      'नफ़रत की दीवारों को गिराने वाली रौशनी जलती रहे सदा',
      'क्रिसमस पर हर दिल में बस इंसानियत और करुणा पलती रहे सदा',
    ],
    linesHinglish: [
      'Nafrat ki deewaron ko girane wali roshni jalti rahe sada',
      'Christmas par har dil mein bas insaaniyat aur karuna palti rahe sada',
    ],
    linesEnglish: [
      'May the light that dissolves walls of bitterness keep burning forever',
      'Let kindness and shared humanity flourish inside every heart this Christmas',
    ],
  },
  {
    title: 'केक की मिठास और यारी',
    titleEnglish: 'Cake Sweetness and Friendship',
    linesHindi: [
      'ताज़ा बेक किए केक की खुशबू में दोस्ती की मिठास घुल जाए',
      'क्रिसमस की इस शाम आपके हर अधूरे ख्वाब को पंख मिल जाए',
    ],
    linesHinglish: [
      'Taaza bake kiye cake ki khushboo mein dosti ki mithaas ghul jaaye',
      'Christmas ki is shaam aapke har adhure khwaab ko pankh mil jaaye',
    ],
    linesEnglish: [
      'May warm bakery aromas blend with sweet laughter among true friends',
      'May every cherished dream find gentle wings this Christmas evening',
    ],
  },
  {
    title: 'ट्री के नीचे छिपी ख़ुशी',
    titleEnglish: 'Joy Beneath the Tree',
    linesHindi: [
      'सिर्फ़ क्रिसमस ट्री सजाना ही नहीं, रिश्तों को भी महकाना ज़रूरी है',
      'जो साल भर दूर रहे उनसे आज गले लगकर मुस्कुराना ज़रूरी है',
    ],
    linesHinglish: [
      'Sirf Christmas tree sajaana hi nahin, rishton ko bhi mehkaana zaroori hai',
      'Jo saal bhar door rahe unse aaj gale lagkar muskurana zaroori hai',
    ],
    linesEnglish: [
      'Beyond adorning the pine tree, let us brighten neglected bonds today',
      'Embrace those missed all year and share an unhurried warm smile',
    ],
  },
  {
    title: 'यीशु मसीह की करुणा',
    titleEnglish: 'Grace of Lord Jesus',
    linesHindi: [
      'माफ़ कर देने का हौसला हर दिल को बड़ा बना देता है',
      'क्रिसमस का पवित्र दिन इंसान को प्यार से जीना सिखा देता है',
    ],
    linesHinglish: [
      'Maaf kar dene ka hausla har dil ko bada bana deta hai',
      'Christmas ka pavitra din insaan ko pyaar se jeena sikha deta hai',
    ],
    linesEnglish: [
      'Courage to forgive makes every human heart quietly magnificent',
      'Holy Christmas teaches every soul to walk gently in love',
    ],
  },
  {
    title: 'बचपन वाले मोज़े की उम्मीद',
    titleEnglish: 'Childhood Stocking Wonder',
    linesHindi: [
      'आज भी सिरहाने रखे भरोसे में सांता की आहट सुनाई देती है',
      'उम्र चाहे जो हो क्रिसमस पर मुस्कान बिना वजह दिखाई देती है',
    ],
    linesHinglish: [
      'Aaj bhi sirhaane rakhe bharose mein Santa ki aahat sunaai deti hai',
      'Umr chaahe jo ho Christmas par muskaan bina wajah dikhaai deti hai',
    ],
    linesEnglish: [
      'Even now quiet faith hears sleigh bells near a hopeful pillow',
      'No matter the years, Christmas brings effortless joy across every face',
    ],
  },
  {
    title: 'सर्दी की चादर में सुकून',
    titleEnglish: 'Peace Wrapped in Winter',
    linesHindi: [
      'बाहर गिरती ठंडी बूँदों के बीच चाय की प्याली बात करती है',
      'क्रिसमस की रात पुराने ग़म भुलाकर नई सुबह से मुलाक़ात करती है',
    ],
    linesHinglish: [
      'Baahar girti thandi boondon ke beech chai ki pyaali baat karti hai',
      'Christmas ki raat puraane gham bhulaakar nayi subah se mulaakaat karti hai',
    ],
    linesEnglish: [
      'While crisp winter mist settles outside, warm tea sparks gentle talk',
      'Christmas night forgets old sorrows and greets a brighter dawn ahead',
    ],
  },
  {
    title: 'हर चेहरे पर मुस्कान का तोहफ़ा',
    titleEnglish: 'Gift of Smiles Everywhere',
    linesHindi: [
      'किसी भूखे को रोटी और उदास को साथ दे देना सबसे बड़ा जश्न है',
      'क्रिसमस वही है जहाँ दूसरों की ख़ुशी देखकर भर आए अपना मन है',
    ],
    linesHinglish: [
      'Kisi bhookhe ko roti aur udaas ko saath de dena sabse bada jashn hai',
      'Christmas wahi hai jahaan doosron ki khushi dekhkar bhar aaye apna man hai',
    ],
    linesEnglish: [
      'Sharing bread with the hungry and time with the lonely is real celebration',
      'True Christmas blooms when another’s joy fills your own heart',
    ],
  },
  {
    title: 'चर्च की घंटियों की सदा',
    titleEnglish: 'Echo of Church Bells',
    linesHindi: [
      'सुबह की धुंध को चीरकर जब मीठी घंटियाँ गूँजती हैं फिज़ा में',
      'रब की रहमत और अमन की बरसात उतर आती है हर दुआ में',
    ],
    linesHinglish: [
      'Subah ki dhund ko cheerkar jab meethi ghantiyan goonjti hain fiza mein',
      'Rab ki rehmat aur aman ki barsaat utar aati hai har dua mein',
    ],
    linesEnglish: [
      'When sweet bells ring through silver morning fog across town',
      'Gentle grace and quiet peace descend softly into every prayer',
    ],
  },
  {
    title: 'सपनों से भरा क्रिसमस कार्ड',
    titleEnglish: 'Christmas Card Full of Dreams',
    linesHindi: [
      'लिखकर भेजी दो लाइनों में पूरे साल की मोहब्बत समेट दी हमने',
      'क्रिसमस के दिन आपकी लंबी ख़ुशी की दुआ दिल में सहेज ली हमने',
    ],
    linesHinglish: [
      'Likhkar bheji do lainon mein poore saal ki mohabbat samet di humne',
      'Christmas ke din aapki lambi khushi ki dua dil mein sahej li humne',
    ],
    linesEnglish: [
      'Inside two heartfelt lines we folded an entire year of affection',
      'On Christmas day we tucked prayers for your lasting happiness deep inside',
    ],
  },
  {
    title: 'दिसंबर की सुनहरी शाम',
    titleEnglish: 'Golden Evening of December',
    linesHindi: [
      'झिलमिलाते बल्बों की कतारें कहती हैं अंधेरा कभी टिकता नहीं',
      'जिस घर में प्यार और भरोसा हो वहाँ कोई त्योहार फीका दिखता नहीं',
    ],
    linesHinglish: [
      'Jhilmilaate bulbon ki kataarein kehti hain andhera kabhi tikta nahin',
      'Jis ghar mein pyaar aur bharosa ho wahaan koi tyohar feeka dikhta nahin',
    ],
    linesEnglish: [
      'Twinkling rows of fairy lights remind us darkness never stays long',
      'Where love and trust dwell together, every festival shines deeply alive',
    ],
  },
  {
    title: 'लाल टोपी और सच्चा प्यार',
    titleEnglish: 'Red Cap and Pure Affection',
    linesHindi: [
      'सांता की सफ़ेद दाढ़ी जैसी पाक नीयत रहे हमारी हर बात में',
      'क्रिसमस का जादू बिखरा रहे परिवार के साथ बिताई हर रात में',
    ],
    linesHinglish: [
      'Santa ki safed daadhi jaisi paak niyat rahe hamaari har baat mein',
      'Christmas ka jaadoo bikhra rahe parivaar ke saath bitaayi har raat mein',
    ],
    linesEnglish: [
      'May snowy purity shine through every kind word we speak',
      'May Christmas magic linger warmly through every family night together',
    ],
  },
  {
    title: 'मोमबत्ती की लौ सा यक़ीन',
    titleEnglish: 'Faith Like Candlelight',
    linesHindi: [
      'अँधेरी सर्द रात में एक छोटी मोमबत्ती भी उम्मीद जगा देती है',
      'सच्चे दिल की प्रार्थना हर मुश्किल रास्ता आसान बना देती है',
    ],
    linesHinglish: [
      'Andheri sard raat mein ek chhoti mombatti bhi ummeed jaga deti hai',
      'Sacche dil ki prarthana har mushkil raasta aasaan bana deti hai',
    ],
    linesEnglish: [
      'Even one slender candle awakens bright hope inside a winter night',
      'A sincere prayer gently smooths even the steepest road ahead',
    ],
  },
  {
    title: 'कैरोल गीतों का सुकून',
    titleEnglish: 'Calm of Christmas Carols',
    linesHindi: [
      'रात की ख़ामोशी में जब कैरोल की मधुर धुन सुनाई देती है',
      'सारी थकान उतर जाती है और रूह को शांति दिखाई देती है',
    ],
    linesHinglish: [
      'Raat ki khaamoshi mein jab carol ki madhur dhun sunaai deti hai',
      'Saari thakaan utar jaati hai aur rooh ko shaanti dikhaai deti hai',
    ],
    linesEnglish: [
      'When tender carol harmonies float across the quiet night air',
      'Daily exhaustion melts away and the spirit finds deep calm',
    ],
  },
  {
    title: 'दूर बैठे अपनों के नाम',
    titleEnglish: 'For Loved Ones Miles Away',
    linesHindi: [
      'मीलों की दूरी भी क्रिसमस के एहसास को कम नहीं कर पाती',
      'एक छोटा सा संदेश भेजते ही मुस्कान फ़ोन पर खिल जाती',
    ],
    linesHinglish: [
      'Meelon ki doori bhi Christmas ke ehsaas ko kam nahin kar paati',
      'Ek chhota sa sandesh bhejte hi muskaan phone par khil jaati',
    ],
    linesEnglish: [
      'Distance across miles can never dim the warmth of Christmas',
      'One thoughtful message makes a familiar smile bloom across the screen',
    ],
  },
  {
    title: 'रिश्तों में घुली मिठास',
    titleEnglish: 'Sweetness Blended in Bonds',
    linesHindi: [
      'बीते साल की सारी कड़वाहट आज प्लम केक संग भुला दो यारों',
      'क्रिसमस पर फिर से पुरानी दोस्ती को गले लगाकर सजा दो यारों',
    ],
    linesHinglish: [
      'Beete saal ki saari kadwahat aaj plum cake sang bhula do yaaron',
      'Christmas par phir se purani dosti ko gale lagaakar saja do yaaron',
    ],
    linesEnglish: [
      'Let go of old bitterness over a slice of warm plum cake today',
      'Pull close friendships nearer with an open hug this Christmas',
    ],
  },
  {
    title: 'तारे ने दिखाया रास्ता',
    titleEnglish: 'Guided by the Star',
    linesHindi: [
      'आसमान का एक चमकता तारा भटके राही को राह दिखा गया',
      'क्रिसमस हमें अंधेरे में भी नेकी का दिया जलाना सिखा गया',
    ],
    linesHinglish: [
      'Aasmaan ka ek chamakta taara bhatke raahi ko raah dikha gaya',
      'Christmas humein andhere mein bhi neki ka diya jalaana sikha gaya',
    ],
    linesEnglish: [
      'One steadfast star in winter skies led wandering travelers home',
      'Christmas taught us to keep lighting lamps of goodness in dark times',
    ],
  },
  {
    title: 'सर्द हवा में गरम कॉफ़ी',
    titleEnglish: 'Warm Coffee in Winter Breeze',
    linesHindi: [
      'ऊन के मफ़लर और गरम कॉफ़ी में दिसंबर महकने लगता है',
      'क्रिसमस की सुबह हर दिल बेवजह चहकने लगता है',
    ],
    linesHinglish: [
      'Oon ke muffler aur garam coffee mein December mehakne lagta hai',
      'Christmas ki subah har dil bewajah chehakne lagta hai',
    ],
    linesEnglish: [
      'Wrapped in wool scarves beside hot coffee, December feels sweet',
      'On Christmas morning every heart chirps effortlessly with joy',
    ],
  },
  {
    title: 'बर्फ़ सी उजली दुआएँ',
    titleEnglish: 'Snow-White Blessings',
    linesHindi: [
      'बर्फ़ की तरह बेदाग़ रहे आपकी ज़िंदगी का हर आने वाला कल',
      'क्रिसमस की रौशनी से सँवर जाए आपका हर सुखद पल',
    ],
    linesHinglish: [
      'Barf ki tarah bedaag rahe aapki zindagi ka har aane wala kal',
      'Christmas ki roshni se sanwar jaaye aapka har sukhad pal',
    ],
    linesEnglish: [
      'May every tomorrow waiting for you stay bright and spotless like snow',
      'May Christmas radiance bless every peaceful moment in your home',
    ],
  },
  {
    title: 'माता-पिता की मुस्कान',
    titleEnglish: 'Smile of Parents on Christmas',
    linesHindi: [
      'मेज़ पर सबके साथ बैठकर हँसना ही असली त्यौहार होता है',
      'माँ-पापा की आँखों की चमक से बड़ा कोई सांता उपहार नहीं होता है',
    ],
    linesHinglish: [
      'Mez par sabke saath baithkar hansna hi asli tyohar hota hai',
      'Maa-Papa ki aankhon ki chamak se bada koi Santa uphaar nahin hota hai',
    ],
    linesEnglish: [
      'Laughing around one table together is the truest celebration alive',
      'No Santa gift shines brighter than joy in our parents’ eyes',
    ],
  },
  {
    title: 'प्रेमियों का खास क्रिसमस',
    titleEnglish: 'Special Christmas for Lovers',
    linesHindi: [
      'तुम्हारा हाथ थामे बिना क्रिसमस की ठंड कहाँ ढलती है',
      'मेरी तो हर क्रिसमस विश बस तुम्हारी खुशी में पलती है',
    ],
    linesHinglish: [
      'Tumhara haath thaame bina Christmas ki thand kahaan dhalti hai',
      'Meri to har Christmas wish bas tumhari khushi mein palti hai',
    ],
    linesEnglish: [
      'Without holding your warm hand, December chill barely softens at all',
      'Every Christmas wish I whisper lives inside your bright smile',
    ],
  },
  {
    title: 'पड़ोस में बाँटी मिठाई',
    titleEnglish: 'Sweets Shared Next Door',
    linesHindi: [
      'दरवाज़े पर केक का डिब्बा रखकर मुस्कुरा देना कितना प्यारा है',
      'मोहल्ले में मिल-जुलकर मनाया क्रिसमस दिल का सबसे सुंदर सहारा है',
    ],
    linesHinglish: [
      'Darwaze par cake ka dibba rakhkar muskura dena kitna pyaara hai',
      'Mohalle mein mil-julkar manaaya Christmas dil ka sabse sundar sahara hai',
    ],
    linesEnglish: [
      'Leaving a warm box of cake with a smile feels effortlessly sweet',
      'Neighborhood warmth on Christmas turns streets into one joyful home',
    ],
  },
  {
    title: 'सुकून की सजीली रात',
    titleEnglish: 'Decorated Night of Serenity',
    linesHindi: [
      'लाल, सुनहरे और हरे रंगों में उम्मीदों का संगम सजता है',
      'क्रिसमस की पाक रात में हर घर एक छोटा सा स्वर्ग लगता है',
    ],
    linesHinglish: [
      'Laal, sunahare aur hare rangon mein ummeedon ka sangam sajta hai',
      'Christmas ki paak raat mein har ghar ek chhota sa swarg lagta hai',
    ],
    linesEnglish: [
      'Crimson, gold, and pine green weave vibrant hope across every wall',
      'On sacred Christmas night every home feels like a corner of heaven',
    ],
  },
  {
    title: 'थके मन को मीठा आलिंगन',
    titleEnglish: 'Gentle Hug for Tired Souls',
    linesHindi: [
      'पूरे बरस की थकान उतारने एक प्यारा त्यौहार चला आया है',
      'क्रिसमस अपने संग धीरज, मोहब्बत और सुकून लाया है',
    ],
    linesHinglish: [
      'Poore baras ki thakaan utaarne ek pyaara tyohar chala aaya hai',
      'Christmas apne sang dheeraj, mohabbat aur sukoon laaya hai',
    ],
    linesEnglish: [
      'To lift an entire year of tiredness, a tender festival has arrived',
      'Christmas brings quiet patience, warmth, and deep inner peace',
    ],
  },
  {
    title: 'अजनबी को भी अपनापन',
    titleEnglish: 'Kindness Even for Strangers',
    linesHindi: [
      'राह चलते किसी अजनबी को मेरी क्रिसमस कहकर मुस्कुरा देना',
      'इतनी सी नेकी से ही पूरा दिन खुशियों से सजा देना',
    ],
    linesHinglish: [
      'Raah chalte kisi ajnabi ko Merry Christmas kehkar muskura dena',
      'Itni si neki se hi poora din khushiyon se saja dena',
    ],
    linesEnglish: [
      'Wish a passing stranger Merry Christmas with a genuine smile',
      'One tiny gesture of warmth can brighten the entire day around you',
    ],
  },
  {
    title: 'घंटियों की मधुर गूँज',
    titleEnglish: 'Sweet Ring of Jingle Bells',
    linesHindi: [
      'जिंगल बेल्स की धुन पर छोटे कदमों की थिरकन मन मोह लेती है',
      'क्रिसमस की रौनक घर के हर कोने में उजाला भर देती है',
    ],
    linesHinglish: [
      'Jingle bells ki dhun par chhote kadmon ki thirkan man moh leti hai',
      'Christmas ki raunak ghar ke har kone mein ujaala bhar deti hai',
    ],
    linesEnglish: [
      'Little footsteps dancing to jingle bells melt every heart in sight',
      'Christmas cheer pours bright golden light into every corner home',
    ],
  },
  {
    title: 'ईश्वर का सबसे सुंदर तोहफ़ा',
    titleEnglish: 'Finest Gift From Heaven',
    linesHindi: [
      'साँसों का चलना और अपनों का पास होना किसी चमत्कार से कम नहीं',
      'क्रिसमस हमें याद दिलाता है कि प्रेम बाँटने से बड़ा कोई धर्म नहीं',
    ],
    linesHinglish: [
      'Saanson ka chalna aur apnon ka paas hona kisi chamatkar se kam nahin',
      'Christmas humein yaad dilaata hai ki prem baantne se bada koi dharm nahin',
    ],
    linesEnglish: [
      'Steady breath and loved ones nearby are quiet miracles every day',
      'Christmas reminds us no creed stands higher than sharing pure love',
    ],
  },
  {
    title: 'हर गली में सजी उम्मीद',
    titleEnglish: 'Hope Glowing in Every Lane',
    linesHindi: [
      'कागज़ के सितारों में भी चमकती है बच्चों की भोली कल्पना',
      'क्रिसमस पर हर घर के लिए बस यही है दिल से प्रार्थना',
    ],
    linesHinglish: [
      'Kaagaz ke sitaaron mein bhi chamakti hai bacchon ki bholi kalpana',
      'Christmas par har ghar ke liye bas yahi hai dil se prarthana',
    ],
    linesEnglish: [
      'Even folded paper stars hold the bright wonder of children’s dreams',
      'May peace and gladness guard every doorway on Christmas day',
    ],
  },
  {
    title: 'क्रिसमस की पावन भोर',
    titleEnglish: 'Sacred Dawn of Christmas',
    linesHindi: [
      'पच्चीस दिसंबर की सुबह लेकर आती है नेकी का उजियारा',
      'ईश्वर करे ख़ुशियों से भरा रहे आपका यह संसार सारा',
    ],
    linesHinglish: [
      'Pachchees December ki subah lekar aati hai neki ka ujiyaara',
      'Ishwar kare khushiyon se bhara rahe aapka yah sansaar saara',
    ],
    linesEnglish: [
      'The dawn of twenty-fifth December carries gentle light of grace',
      'May heaven bless your whole world with peace and sweet joy',
    ],
  },
  {
    title: 'बेसहारा हाथों को गर्माहट',
    titleEnglish: 'Warmth for Helpless Hands',
    linesHindi: [
      'सर्द रात में किसी ज़रूरतमंद को कंबल ओढ़ा देना ही सच्चा जश्न है',
      'सांता बनने के लिए लाल कोट नहीं, बस एक नेक दिल का होना ही मस्त है',
    ],
    linesHinglish: [
      'Sard raat mein kisi zarooratmand ko kambal odha dena hi saccha jashn hai',
      'Santa banne ke liye laal coat nahin, bas ek nek dil ka hona hi mast hai',
    ],
    linesEnglish: [
      'Offering a warm blanket on a cold night is the truest celebration',
      'You need no red coat to play Santa, only a generous heart',
    ],
  },
  {
    title: 'आँगन में चहकते बच्चे',
    titleEnglish: 'Children Laughing in Courtyard',
    linesHindi: [
      'चॉकलेट और छोटे खिलौनों में उनकी पूरी दुनिया खिल उठती है',
      'क्रिसमस पर बच्चों की हँसी देखकर थकी ज़िंदगी संवर उठती है',
    ],
    linesHinglish: [
      'Chocolate aur chhote khilaunon mein unki poori duniya khil uthti hai',
      'Christmas par bacchon ki hansi dekhkar thaki zindagi sanwar uthti hai',
    ],
    linesEnglish: [
      'With chocolate and tiny toys, children see an entire world bloom',
      'Watching kids laugh at Christmas refreshes even the weariest soul',
    ],
  },
  {
    title: 'रब की मेहर और परिवार',
    titleEnglish: 'Grace of God and Family',
    linesHindi: [
      'बर्फ़ीली शाम हो या सादा सा कमरा, अपनों संग हर पल खास है',
      'क्रिसमस पर बस यही दुआ कि हर चेहरे पर बनी रहे एक मीठी आस है',
    ],
    linesHinglish: [
      'Barfeeli shaam ho ya saada sa kamra, apnon sang har pal khaas hai',
      'Christmas par bas yahi dua ki har chehre par bani rahe ek meethi aas hai',
    ],
    linesEnglish: [
      'Snowy evening or modest room, loved ones make every hour special',
      'Our Christmas wish is that sweet hope lingers on every smiling face',
    ],
  },
  {
    title: 'टूटे रिश्तों की नई सिलाई',
    titleEnglish: 'Mending Broken Ties',
    linesHindi: [
      'जिससे बरसों से बात न हुई आज उसे भी मेरी क्रिसमस कह दो',
      'अहंकार की गठरी उतारकर मोहब्बत की ठंडी हवा में बह लो',
    ],
    linesHinglish: [
      'Jisse barson se baat na hui aaj use bhi Merry Christmas keh do',
      'Ahankaar ki gathri utaarkar mohabbat ki thandi hawa mein beh lo',
    ],
    linesEnglish: [
      'Send Merry Christmas even to someone you haven’t spoken with in years',
      'Set down heavy pride and breathe the gentle breeze of love',
    ],
  },
  {
    title: 'बेकरी की सोंधी खुशबू',
    titleEnglish: 'Warm Scent of Bakery',
    linesHindi: [
      'इलायची और दालचीनी की महक गलियों को गुलज़ार कर देती है',
      'क्रिसमस की तैयारी हर घर में खुशियों का संसार भर देती है',
    ],
    linesHinglish: [
      'Elaichi aur daalchini ki mehek galiyon ko gulzaar kar deti hai',
      'Christmas ki taiyaari har ghar mein khushiyon ka sansaar bhar deti hai',
    ],
    linesEnglish: [
      'Warm scents of cardamom and cinnamon turn streets into festive gardens',
      'Christmas preparations fill every kitchen and home with bright cheer',
    ],
  },
  {
    title: 'तारे और चाँद की महफ़िल',
    titleEnglish: 'Gathering of Moon and Stars',
    linesHindi: [
      'दिसंबर का चाँद भी आज सुनहरे सितारे से बतियाता है',
      'क्रिसमस का पाक संदेश सबको प्यार से रहना सिखाता है',
    ],
    linesHinglish: [
      'December ka chaand bhi aaj sunahare sitaare se batiyaata hai',
      'Christmas ka paak sandesh sabko pyaar se rehna sikhata hai',
    ],
    linesEnglish: [
      'Tonight even the December moon converses softly with golden stars',
      'Sacred Christmas reminds every heart to live gently in love',
    ],
  },
  {
    title: 'दिल के भीतर क्रिसमस ट्री',
    titleEnglish: 'Christmas Tree Inside Heart',
    linesHindi: [
      'बाहर चाहे एक दिया भी न जले, पर मन में उजियारा रखना',
      'क्रिसमस की असली रौनक है हर इंसान से रिश्ता प्यारा रखना',
    ],
    linesHinglish: [
      'Baahar chaahe ek diya bhi na jale, par man mein ujiyaara rakhna',
      'Christmas ki asli raunak hai har insaan se rishta pyaara rakhna',
    ],
    linesEnglish: [
      'Even if only one small lamp glows outside, keep bright light within',
      'The true beauty of Christmas is cherishing every soul with kindness',
    ],
  },
  {
    title: 'सर्द शाम का प्यारा तोहफ़ा',
    titleEnglish: 'Sweet Gift of Chilly Dusk',
    linesHindi: [
      'किसी का नाम लेकर चुपचाप दुआ कर देना सबसे ख़ूबसूरत उपहार है',
      'मेरी क्रिसमस बोलकर गले लग जाना ही सच्चे प्यार का इज़हार है',
    ],
    linesHinglish: [
      'Kisi ka naam lekar chupchaap dua kar dena sabse khoobsurat uphaar hai',
      'Merry Christmas bolkar gale lag jaana hi sacche pyaar ka izhaar hai',
    ],
    linesEnglish: [
      'Quietly praying for someone by name is the rarest gift of all',
      'Whispering Merry Christmas with an embrace speaks truest love',
    ],
  },
  {
    title: 'नए साल की दहलीज़ से पहले',
    titleEnglish: 'Before New Year Threshold',
    linesHindi: [
      'नए साल से पहले क्रिसमस मन को साफ और हल्का कर जाता है',
      'पुरानी थकान मिटाकर चेहरे पर नया नूर भर जाता है',
    ],
    linesHinglish: [
      'Naye saal se pehle Christmas man ko saaf aur halka kar jaata hai',
      'Puraani thakaan mitaakar chehre par naya noor bhar jaata hai',
    ],
    linesEnglish: [
      'Just before the new year, Christmas leaves the heart light and clear',
      'Washing away old fatigue, it leaves fresh radiance on every face',
    ],
  },
  {
    title: 'चमकीले रिबन सा साथ',
    titleEnglish: 'Bond Like Bright Ribbon',
    linesHindi: [
      'तोहफ़े खुल जाएँगे कल, पर प्यार की गाँठ हमेशा बंधी रहे',
      'क्रिसमस की तरह आपकी हर शाम उजालों से सजी रहे',
    ],
    linesHinglish: [
      'Tohfe khul jaayenge kal, par pyaar ki gaanth hamesha bandhi rahe',
      'Christmas ki tarah aapki har shaam ujaalon se saji rahe',
    ],
    linesEnglish: [
      'Wrappings untie tomorrow, yet may our knot of affection hold forever',
      'Like Christmas night, may every evening of yours glow with warmth',
    ],
  },
  {
    title: 'शांत मन की प्रार्थना',
    titleEnglish: 'Prayer of Peaceful Heart',
    linesHindi: [
      'शोर भरी दुनिया में दो पल की शांति मिल जाए वही बड़ी नेमत है',
      'क्रिसमस पर हर घर में सेहत, अमन और मुस्कुराहट की रहमत है',
    ],
    linesHinglish: [
      'Shor bhari duniya mein do pal ki shaanti mil jaaye wahi badi nemat hai',
      'Christmas par har ghar mein sehat, aman aur muskurahat ki rehmat hai',
    ],
    linesEnglish: [
      'Finding two quiet minutes inside a noisy world is a priceless grace',
      'May Christmas shower health, peace, and gentle smiles on every home',
    ],
  },
  {
    title: 'गांव से शहर तक उजाला',
    titleEnglish: 'Light From Village to City',
    linesHindi: [
      'छोटे कस्बे के चर्च से बड़े शहर के बाज़ार तक एक ही खुशी छाई है',
      'क्रिसमस ने फिर याद दिलाया कि हर दिल में करुणा ही सबसे सच्ची कमाई है',
    ],
    linesHinglish: [
      'Chhote kasbe ke church se bade sheher ke baazaar tak ek hi khushi chhaayi hai',
      'Christmas ne phir yaad dilaaya ki har dil mein karuna hi sabse sacchi kamaai hai',
    ],
    linesEnglish: [
      'From small-town chapels to bright city avenues, one shared joy shines',
      'Christmas reminds us compassion remains the truest wealth of any life',
    ],
  },
  {
    title: 'दिसंबर की मीठी धूप',
    titleEnglish: 'Sweet Winter Sunshine',
    linesHindi: [
      'दोपहर की नरम धूप में बैठकर अपनों संग बतियाने का मज़ा ही अलग है',
      'क्रिसमस की छुट्टी में घर की रौनक और हँसी का नज़ारा ही अलग है',
    ],
    linesHinglish: [
      'Dopeher ki naram dhoop mein baithkar apnon sang batiyaane ka maza hi alag hai',
      'Christmas ki chhutti mein ghar ki raunak aur hansi ka nazaara hi alag hai',
    ],
    linesEnglish: [
      'Sitting in mild December sunshine talking with family feels unmatched',
      'Christmas holiday fills the home with effortless warmth and laughter',
    ],
  },
  {
    title: 'रौशन खिड़कियों का शहर',
    titleEnglish: 'City of Glowing Windows',
    linesHindi: [
      'हर खिड़की पर टंगा सितारा कहता है कोई रास्ता बंद नहीं होता',
      'जहाँ ईमान और प्रेम हो वहाँ दिल कभी बेबस और मंद नहीं होता',
    ],
    linesHinglish: [
      'Har khidki par tanga sitaara kehta hai koi raasta band nahin hota',
      'Jahaan imaan aur prem ho wahaan dil kabhi bebas aur mand nahin hota',
    ],
    linesEnglish: [
      'Every window star proclaims that no door of hope ever closes forever',
      'Where faith and love stay bright, the human spirit never grows dim',
    ],
  },
  {
    title: 'सांता की मुस्कान जैसी सूरत',
    titleEnglish: 'Face Bright Like Santa Smile',
    linesHindi: [
      'आपकी एक मुस्कान किसी का पूरा क्रिसमस यादगार बना सकती है',
      'मीठी ज़ुबान बिना किसी खर्च के दुनिया खूबसूरत सजा सकती है',
    ],
    linesHinglish: [
      'Aapki ek muskaan kisi ka poora Christmas yaadgaar bana sakti hai',
      'Meethi zubaan bina kisi kharch ke duniya khoobsurat saja sakti hai',
    ],
    linesEnglish: [
      'Just one warm smile from you can make someone’s Christmas unforgettable',
      'Gentle words cost nothing yet brighten the whole world beautifully',
    ],
  },
  {
    title: 'फूलों और पत्तों का ताज',
    titleEnglish: 'Wreath of Leaves and Flowers',
    linesHindi: [
      'दरवाज़े पर सजी हरी माला कहती है रिश्ते हमेशा ताज़ा रहें',
      'क्रिसमस पर हर घर के आँगन ख़ुशहाली के साज़ से नवाज़ा रहें',
    ],
    linesHinglish: [
      'Darwaze par saji hari maala kehti hai rishte hamesha taaza rahein',
      'Christmas par har ghar ke aangan khushhaali ke saaz se nawaaza rahein',
    ],
    linesEnglish: [
      'Green wreaths on doorways wish that friendships stay evergreen forever',
      'May every home courtyard be blessed with music of gladness this Christmas',
    ],
  },
  {
    title: 'मासूम दुआ का असर',
    titleEnglish: 'Power of Innocent Prayer',
    linesHindi: [
      'बच्चों की जोड़ी हाथ उठाकर जब सबके लिए सलामती मांगती है',
      'आसमान से ख़ुशियों की रहमत चुपचाप ज़मीन पर उतर आती है',
    ],
    linesHinglish: [
      'Bacchon ki jodi haath uthaakar jab sabke liye salaamati maangti hai',
      'Aasmaan se khushiyon ki rehmat chupchaap zameen par utar aati hai',
    ],
    linesEnglish: [
      'When little folded hands pray quietly for everyone’s safety and peace',
      'Silent blessings of pure happiness descend gently down from heaven',
    ],
  },
  {
    title: 'यादों का पुराना एल्बम',
    titleEnglish: 'Old Album of Memories',
    linesHindi: [
      'बीते क्रिसमस की तस्वीरें देखकर आँखों में नमी और लबों पर हँसी आई',
      'वक्त आगे बढ़ गया पर अपनों की महक आज भी दिल में समाई',
    ],
    linesHinglish: [
      'Beete Christmas ki tasveerein dekhkar aankhon mein nami aur labon par hansi aayi',
      'Waqt aage badh gaya par apnon ki mehek aaj bhi dil mein samaayi',
    ],
    linesEnglish: [
      'Old Christmas photos bring tender tears and gentle smiles at once',
      'Years moved along, yet the warmth of loved ones stays inside forever',
    ],
  },
  {
    title: 'दिल की स्लेट साफ करो',
    titleEnglish: 'Clean Slate of Heart',
    linesHindi: [
      'साल भर के ग़मों को इस ठंड में अलाव के हवाले कर दो अब',
      'क्रिसमस की सुबह फिर से नई मुस्कुराहट के उजाले भर दो अब',
    ],
    linesHinglish: [
      'Saal bhar ke ghamon ko is thand mein alaav ke hawaale kar do ab',
      'Christmas ki subah phir se nayi muskurahat ke ujaale bhar do ab',
    ],
    linesEnglish: [
      'Leave all heavy worries of this past year beside the winter bonfire',
      'Fill Christmas morning with bright laughter and fresh light anew',
    ],
  },
  {
    title: 'रंगीन गुब्बारों सा उल्लास',
    titleEnglish: 'Joy Bright as Balloons',
    linesHindi: [
      'छत से बंधे सुनहरे सितारों में परिवार का प्यार झलकता है',
      'क्रिसमस आते ही हर साधारण शाम में जश्न का रंग दमकता है',
    ],
    linesHinglish: [
      'Chhat se bandhe sunahare sitaaron mein parivaar ka pyaar jhalakta hai',
      'Christmas aate hi har saadharan shaam mein jashn ka rang damakta hai',
    ],
    linesEnglish: [
      'Golden stars hung beneath the ceiling reflect a family’s shared love',
      'With Christmas near, even an ordinary evening sparkles with celebration',
    ],
  },
  {
    title: 'नए ख्वाबों की बुनाई',
    titleEnglish: 'Knitting Fresh Dreams',
    linesHindi: [
      'दादी के बुने स्वेटर जैसी अपनाइयत रहे हमारी दोस्ती में सदा',
      'क्रिसमस के हर पल में खुशियों का कारवाँ चलता रहे सदा',
    ],
    linesHinglish: [
      'Daadi ke bune sweater jaisi apnaaiyat rahe hamaari dosti mein sada',
      'Christmas ke har pal mein khushiyon ka kaarwaan chalta rahe sada',
    ],
    linesEnglish: [
      'May our friendship stay warm and faithful like grandma’s hand-knitted wool',
      'May a joyful caravan of bright moments stay beside you every Christmas',
    ],
  },
  {
    title: 'रब के नाम एक शमा',
    titleEnglish: 'A Flame for Grace',
    linesHindi: [
      'हर आँख में सुकून की नींद और हर थाली में बरकत का वास हो',
      'क्रिसमस के दिन दुनिया के हर बच्चे के पास ख़ुश होने की आस हो',
    ],
    linesHinglish: [
      'Har aankh mein sukoon ki neend aur har thaali mein barkat ka waas ho',
      'Christmas ke din duniya ke har bacche ke paas khush hone ki aas ho',
    ],
    linesEnglish: [
      'May calm sleep bless every eye and abundance fill every family plate',
      'May every child everywhere feel bright joy this Christmas day',
    ],
  },
  {
    title: 'यारों की सर्द महफ़िल',
    titleEnglish: 'Winter Gathering of Friends',
    linesHindi: [
      'रज़ाई छोड़ो बाहर आओ, यारों के साथ जश्न मनाने की रात आई है',
      'क्रिसमस की रोशनी में पुराने किस्से और हँसी की बरसात आई है',
    ],
    linesHinglish: [
      'Razaai chhodo baahar aao, yaaron ke saath jashn manaane ki raat aayi hai',
      'Christmas ki roshni mein puraane kisse aur hansi ki barsaat aayi hai',
    ],
    linesEnglish: [
      'Step out from cozy blankets, tonight belongs to celebration with friends',
      'Under Christmas lights old stories return amid showers of laughter',
    ],
  },
  {
    title: 'मोहब्बत की सफ़ेद कबूतर',
    titleEnglish: 'White Dove of Love',
    linesHindi: [
      'लड़ाई-झगड़ों से ऊपर उठकर इंसान को गले लगाने की रीत यही है',
      'क्रिसमस का सच्चा मक़सद और ज़िंदगी का सबसे पाक गीत यही है',
    ],
    linesHinglish: [
      'Ladaai-jhagdon se oopar uthkar insaan ko gale lagaane ki reet yahi hai',
      'Christmas ka saccha maqsad aur zindagi ka sabse paak geet yahi hai',
    ],
    linesEnglish: [
      'Rising past quarrels to embrace one another is the timeless way',
      'That remains the true heart of Christmas and life’s purest song',
    ],
  },
  {
    title: 'दिसंबर की आख़िरी चमक',
    titleEnglish: 'Year-End Sparkle of December',
    linesHindi: [
      'साल जाने से पहले क्रिसमस यादों में सुनहरा रंग भर देता है',
      'हर उदास कोने को दुआओं और उम्मीदों से तर कर देता है',
    ],
    linesHinglish: [
      'Saal jaane se pehle Christmas yaadon mein sunahara rang bhar deta hai',
      'Har udaas kone ko duaon aur ummeedon se tar kar deta hai',
    ],
    linesEnglish: [
      'Before the year closes, Christmas paints our memories in warm gold',
      'It refreshes every quiet corner with prayers and steady hope',
    ],
  },
  {
    title: 'सच्चे दिल की शुभकामना',
    titleEnglish: 'Wish From an Honest Heart',
    linesHindi: [
      'ना महँगे तोहफ़े की चाहत, ना दिखावे का कोई शोर चाहिए',
      'क्रिसमस पर बस अपनों का साथ और सुकून भरी भोर चाहिए',
    ],
    linesHinglish: [
      'Na mehenge tohfe ki chaahat, na dikhawe ka koi shor chahiye',
      'Christmas par bas apnon ka saath aur sukoon bhari bhor chahiye',
    ],
    linesEnglish: [
      'I ask for neither pricey gifts nor noisy grandeur tonight',
      'Just loved ones close beside me and a peaceful Christmas dawn',
    ],
  },
  {
    title: 'चाँदनी में नहाया क्रिसमस',
    titleEnglish: 'Christmas Bathed in Moonlight',
    linesHindi: [
      'सर्द चाँदनी और सजे हुए पेड़ों का नज़ारा मन को भा जाता है',
      'क्रिसमस पर हर दिल अपने आप को रब के क़रीब पाता है',
    ],
    linesHinglish: [
      'Sard chaandni aur saje hue pedon ka nazaara man ko bha jaata hai',
      'Christmas par har dil apne aap ko rab ke kareeb paata hai',
    ],
    linesEnglish: [
      'Crisp moonlight resting on adorned pines soothes the watching mind',
      'On Christmas night every quiet soul feels gently closer to grace',
    ],
  },
  {
    title: 'दोस्त के नाम क्रिसमस दुआ',
    titleEnglish: 'Christmas Prayer for a Friend',
    linesHindi: [
      'तेरी हर मेहनत को इस साल मीठा फल मिले मेरे प्यारे यार',
      'क्रिसमस पर खुशियाँ तेरे दरवाज़े पर दस्तक दें बार-बार',
    ],
    linesHinglish: [
      'Teri har mehnat ko is saal meetha phal mile mere pyaare yaar',
      'Christmas par khushiyan tere darwaze par dastak dein baar-baar',
    ],
    linesEnglish: [
      'May every honest effort you made bear sweet fruit, dear friend',
      'May bright gladness keep knocking warmly at your door this Christmas',
    ],
  },
  {
    title: 'मिठाई से मीठे शब्द',
    titleEnglish: 'Words Sweeter Than Candy',
    linesHindi: [
      'क्रिसमस के दिन अपनी ज़ुबान में भी थोड़ी और मिठास घोल लो',
      'जो बात दिल में अटक गई थी आज प्यार से वो सच बोल दो',
    ],
    linesHinglish: [
      'Christmas ke din apni zubaan mein bhi thodi aur mithaas ghol lo',
      'Jo baat dil mein atak gayi thi aaj pyaar se wo sach bol do',
    ],
    linesEnglish: [
      'Blend a little extra kindness into your words this Christmas day',
      'Speak with tenderness the affection your heart held back too long',
    ],
  },
  {
    title: 'हौसले की नई रोशनी',
    titleEnglish: 'Fresh Light of Courage',
    linesHindi: [
      'जितनी भी रात लंबी थी वो सुबह की एक किरण से हार गई',
      'क्रिसमस की प्रार्थना टूटे हुए सपनों को फिर से संवार गई',
    ],
    linesHinglish: [
      'Jitni bhi raat lambi thi wo subah ki ek kiran se haar gayi',
      'Christmas ki prarthana toote hue sapnon ko phir se sanwaar gayi',
    ],
    linesEnglish: [
      'However long the night stretched, one morning ray quietly won',
      'Christmas prayers gently mended broken dreams back into whole',
    ],
  },
  {
    title: 'सांता के थैले में सुकून',
    titleEnglish: 'Peace Inside Santa Bag',
    linesHindi: [
      'काश इस बरस सांता थैले में भरकर सबके लिए सुकून लाए',
      'किसी के भी घर में कोई ग़म या अकेलापन कभी न आए',
    ],
    linesHinglish: [
      'Kaash is baras Santa thaile mein bharkar sabke liye sukoon laaye',
      'Kisi ke bhi ghar mein koi gham ya akelapan kabhi na aaye',
    ],
    linesEnglish: [
      'If only Santa carried bags brimming with calm peace for everyone',
      'May no sorrow or loneliness ever cross your family doorway',
    ],
  },
  {
    title: 'दीवारों पर झिलमिल सितारे',
    titleEnglish: 'Shining Stars Along Walls',
    linesHindi: [
      'रौशनी की लड़ी जब छत से नीचे तक मुस्कुराती हुई लटकती है',
      'हर आँख में बचपन की कोई खोई हुई ख़ुशी फिर से चमकती है',
    ],
    linesHinglish: [
      'Roshni ki ladi jab chhat se neeche tak muskurati hui latakti hai',
      'Har aankh mein bachpan ki koi khoyi hui khushi phir se chamakti hai',
    ],
    linesEnglish: [
      'When glowing fairy strings drape cheerfully from roof to sill',
      'Lost sparkles of childhood wonder shine brightly in every eye',
    ],
  },
  {
    title: 'अमन के गीत गाती शाम',
    titleEnglish: 'Evening Singing Peace',
    linesHindi: [
      'न मंदिर का झगड़ा, न किसी मज़हब की दीवार बीच में आए',
      'क्रिसमस पर हर इंसान बस इंसान बनकर गले लग जाए',
    ],
    linesHinglish: [
      'Na mandir ka jhagda, na kisi mazhab ki deewar beech mein aaye',
      'Christmas par har insaan bas insaan bankar gale lag jaaye',
    ],
    linesEnglish: [
      'May no barrier of creed or pride stand between fellow souls',
      'Let every heart greet one another warmly in pure humanity this Christmas',
    ],
  },
  {
    title: 'प्यार भरा परिवारिक डिनर',
    titleEnglish: 'Warm Family Dinner',
    linesHindi: [
      'एक ही थाली, हज़ार किस्से और सबके चेहरों पर सुकून का नूर',
      'क्रिसमस के दिन दुनिया की सारी चिंताएँ हो जाती हैं दूर',
    ],
    linesHinglish: [
      'Ek hi thaali, hazaar kisse aur sabke chehron par sukoon ka noor',
      'Christmas ke din duniya ki saari chintaaein ho jaati hain door',
    ],
    linesEnglish: [
      'One shared dinner, endless stories, and peaceful light on every face',
      'On Christmas night every worldly worry drifts softly out of sight',
    ],
  },
  {
    title: 'आसमान से बरसी नेमत',
    titleEnglish: 'Grace Showered From Sky',
    linesHindi: [
      'जिसने कभी किसी को बिना स्वार्थ के हँसाया वही सच्चा मसीहा है',
      'क्रिसमस ने दुनिया को बस करुणा और सेवा का ही राह दिखाया है',
    ],
    linesHinglish: [
      'Jisne kabhi kisi ko bina swaarth ke hansaaya wahi saccha maseeha hai',
      'Christmas ne duniya ko bas karuna aur seva ka hi raah dikhaaya hai',
    ],
    linesEnglish: [
      'Whoever made another smile selflessly walks in true grace',
      'Christmas showed the world no finer path than mercy and service',
    ],
  },
  {
    title: 'सर्द रात में दिल का ताप',
    titleEnglish: 'Heart Warmth in Winter Night',
    linesHindi: [
      'पारा चाहे जितना गिर जाए, मोहब्बत की तपिश कम न होने पाए',
      'क्रिसमस पर आपकी हर दुआ बिना किसी अड़चन के पूरी हो जाए',
    ],
    linesHinglish: [
      'Paara chaahe jitna gir jaaye, mohabbat ki tapish kam na hone paaye',
      'Christmas par aapki har dua bina kisi adchan ke poori ho jaaye',
    ],
    linesEnglish: [
      'No matter how low winter frost dips, never let affection grow cold',
      'May every sincere prayer of yours unfold smoothly this Christmas',
    ],
  },
  {
    title: 'सजी हुई क्रिसमस की डाली',
    titleEnglish: 'Adorned Pine Bough',
    linesHindi: [
      'हरी डाल पर सजी घंटियाँ कहती हैं हर मौसम में हरे रहना सीखो',
      'आँधियाँ कितनी भी आएँ पर प्यार का हाथ थामे रहना सीखो',
    ],
    linesHinglish: [
      'Hari daal par saji ghantiyan kehti hain har mausam mein hare rehna seekho',
      'Aandhiyan kitni bhi aayein par pyaar ka haath thaame rehna seekho',
    ],
    linesEnglish: [
      'Bells on green pine branches remind us to stay hopeful in every season',
      'However fierce the storms blow, keep holding hands in steady love',
    ],
  },
  {
    title: 'सदा सलामत रहे अपनापन',
    titleEnglish: 'May Kinship Endure',
    linesHindi: [
      'चमकते शहर से ज़्यादा खूबसूरत वो घर है जहाँ अपने इंतज़ार करते हैं',
      'मेरी क्रिसमस बोलकर जो दिल से एक-दूसरे का आदर करते हैं',
    ],
    linesHinglish: [
      'Chamakte sheher se zyada khoobsurat wo ghar hai jahaan apne intezaar karte hain',
      'Merry Christmas bolkar jo dil se ek-doosre ka aadar karte hain',
    ],
    linesEnglish: [
      'Fairer than neon skylines is a home where loved ones wait warmly',
      'Happy are they who honor each other sincerely with Merry Christmas',
    ],
  },
  {
    title: 'ख़्वाहिशों की प्यारी लिस्ट',
    titleEnglish: 'Sweet Wish List',
    linesHindi: [
      'मैंने अपनी विश लिस्ट में सिर्फ़ अपनों की सेहत और मुस्कान लिखी है',
      'क्रिसमस के हर लफ़्ज़ में मैंने सुख-शांति की पहचान लिखी है',
    ],
    linesHinglish: [
      'Maine apni wish list mein sirf apnon ki sehat aur muskaan likhi hai',
      'Christmas ke har lafz mein maine sukh-shaanti ki pehchaan likhi hai',
    ],
    linesEnglish: [
      'On my Christmas wish list I wrote only health and smiles for loved ones',
      'In every Christmas line I tucked a wish for lasting peace at home',
    ],
  },
  {
    title: 'रौशन सवेरा और दुआ',
    titleEnglish: 'Bright Dawn and Blessing',
    linesHindi: [
      'रात की चादर हटे तो सुबह नई उम्मीद का पैग़ाम लाए',
      'आपका क्रिसमस खुशियों, सेहत और मोहब्बत के नाम हो जाए',
    ],
    linesHinglish: [
      'Raat ki chaadar hate to subah nayi ummeed ka paigaam laaye',
      'Aapka Christmas khushiyon, sehat aur mohabbat ke naam ho jaaye',
    ],
    linesEnglish: [
      'As night’s blanket lifts, may morning carry bright tidings of hope',
      'May your Christmas belong wholly to gladness, health, and warm love',
    ],
  },
  {
    title: 'हर घर में क्रिसमस गीत',
    titleEnglish: 'Christmas Song in Every Home',
    linesHindi: [
      'ख़ुशियों का मौसम आया है, दिल के सारे दरवाज़े खोल दो आज',
      'जो भी मिले रास्ते में उसे मुस्कुराकर मेरी क्रिसमस बोल दो आज',
    ],
    linesHinglish: [
      'Khushiyon ka mausam aaya hai, dil ke saare darwaze khol do aaj',
      'Jo bhi mile raaste mein use muskuraakar Merry Christmas bol do aaj',
    ],
    linesEnglish: [
      'A season of joy has arrived, swing open every guarded door of your heart',
      'Greet everyone you pass today with a bright, warm Merry Christmas',
    ],
  },
  {
    title: 'दिसंबर की मीठी याद',
    titleEnglish: 'Sweet Memory of December',
    linesHindi: [
      'दिसंबर जाते-जाते क्रिसमस की सुनहरी याद छोड़ जाता है',
      'बिखरे हुए दिलों को फिर से उम्मीदों की डोर से जोड़ जाता है',
    ],
    linesHinglish: [
      'December jaate-jaate Christmas ki sunahari yaad chhod jaata hai',
      'Bikhre hue dilon ko phir se ummeedon ki dor se jod jaata hai',
    ],
    linesEnglish: [
      'Before leaving, December leaves golden Christmas memories behind',
      'It gently stitches scattered hearts back together on threads of hope',
    ],
  },
  {
    title: 'पच्चीस दिसंबर का पैग़ाम',
    titleEnglish: 'Message of 25 December',
    linesHindi: [
      'बड़ा दिन बड़ा तभी बनता है जब दिल भी हम बड़ा बना लें अपना',
      'क्रिसमस पर किसी और की मुस्कान को ही बना लें सबसे प्यारा सपना',
    ],
    linesHinglish: [
      'Bada din bada tabhi banta hai jab dil bhi hum bada bana lein apna',
      'Christmas par kisi aur ki muskaan ko hi bana lein sabse pyaara sapna',
    ],
    linesEnglish: [
      'This festive day grows truly grand when we widen our own hearts',
      'Make someone else’s glad smile your finest dream this Christmas',
    ],
  },
];

const REPUBLIC_DAY_EXTRA_175: RawFestEntry[] = [
  {
    title: 'तिरंगे की पावन छाया',
    titleEnglish: 'Sacred Shade of Tricolor',
    linesHindi: [
      'तीन रंगों की छाया में पूरा हिंदुस्तान एक साथ मुस्कुराता है',
      'छब्बीस जनवरी का दिन हमें आज़ादी और संविधान की कीमत याद दिलाता है',
    ],
    linesHinglish: [
      'Teen rangon ki chhaaya mein poora Hindustan ek saath muskurata hai',
      'Chhabbees January ka din humein aazaadi aur samvidhan ki keemat yaad dilaata hai',
    ],
    linesEnglish: [
      'Beneath the shade of three sacred colors, all of India smiles together',
      'Twenty-sixth January reminds us of the priceless worth of our Constitution',
    ],
  },
  {
    title: 'संविधान की अमर ज्योति',
    titleEnglish: 'Eternal Flame of Constitution',
    linesHindi: [
      'समानता और न्याय की नींव पर खड़ा हमारा प्यारा गणतंत्र महान है',
      'हर नागरिक के हक की रक्षा करता यही संविधान हमारी असली पहचान है',
    ],
    linesHinglish: [
      'Samaanata aur nyaay ki neev par khada hamaara pyaara gantantra mahaan hai',
      'Har naagarik ke haq ki raksha karta yahi samvidhan hamaari asli pehchaan hai',
    ],
    linesEnglish: [
      'Built on equality and justice, our beloved Republic stands noble and strong',
      'Guarding every citizen’s dignity, this Constitution defines our true spirit',
    ],
  },
  {
    title: 'राजपथ पर भारत का गौरव',
    titleEnglish: 'Pride of India on Parade',
    linesHindi: [
      'क़दम से क़दम मिलाकर जब हमारे वीर जवान सलामी देते हैं',
      'करोड़ों दिलों में देशभक्ति के नए अरमान और हौसला भर देते हैं',
    ],
    linesHinglish: [
      'Kadam se kadam milaakar jab hamaare veer jawaan salaami dete hain',
      'Karodon dilon mein deshbhakti ke naye armaan aur hausla bhar dete hain',
    ],
    linesEnglish: [
      'When brave soldiers march in steady unison and offer their crisp salute',
      'They fill millions of hearts with renewed devotion and quiet courage',
    ],
  },
  {
    title: 'केसरिया, सफ़ेद और हरा रंग',
    titleEnglish: 'Saffron, White, and Green',
    linesHindi: [
      'केसरिया त्याग, सफ़ेद अमन और हरा हमारी तरक़्क़ी की कहानी कहता है',
      'बीच का नीला अशोक चक्र हर पल आगे बढ़ते रहने की रवानी कहता है',
    ],
    linesHinglish: [
      'Kesariya tyaag, safed aman aur hara hamaari tarakki ki kahaani kehta hai',
      'Beech ka neela Ashok Chakra har pal aage badhte rehne ki rawaani kehta hai',
    ],
    linesEnglish: [
      'Saffron speaks of sacrifice, white of peace, and green of vibrant growth',
      'At center, the blue Ashoka wheel inspires tireless motion forward',
    ],
  },
  {
    title: 'माटी से जुड़ा हर सपना',
    titleEnglish: 'Every Dream Rooted in Soil',
    linesHindi: [
      'नदी, पहाड़, खेत और समंदर सब में एक ही भारत बसता है',
      'गणतंत्र दिवस पर हर शहर और गाँव देशप्रेम के रंग में सँवरता है',
    ],
    linesHinglish: [
      'Nadi, pahaad, khet aur samandar sab mein ek hi Bharat basta hai',
      'Gantantra Diwas par har sheher aur gaanv deshprem ke rang mein sanwarta hai',
    ],
    linesEnglish: [
      'Through rivers, peaks, harvests, and shores beats one united India',
      'On Republic Day every town and village glows with warm patriotism',
    ],
  },
  {
    title: 'वीर शहीदों का कर्ज़',
    titleEnglish: 'Debt of Brave Martyrs',
    linesHindi: [
      'जिनकी कुर्बानी से मिली हमें खुली हवा में साँस लेने की आज़ादी',
      'उन अमर शहीदों के चरणों में झुकती है पूरी सृष्टि और हर आबादी',
    ],
    linesHinglish: [
      'Jinki kurbaani se mili humein khuli hawa mein saans lene ki aazaadi',
      'Un amar shaheedon ke charnon mein jhukti hai poori srishti aur har aabaadi',
    ],
    linesEnglish: [
      'Through their sacrifice we breathe freely beneath open, peaceful skies',
      'Every grateful heart bows in reverence before our immortal martyrs',
    ],
  },
  {
    title: 'एकता में बसी ताक़त',
    titleEnglish: 'Strength Woven in Unity',
    linesHindi: [
      'अनेक बोलियाँ, अनेक पहनावे फिर भी दिल की धड़कन एक ही है',
      'भारत माँ की संतानों का आपसी प्यार और अपनापन नेक ही है',
    ],
    linesHinglish: [
      'Anek boliyan, anek pehnaawe phir bhi dil ki dhadkan ek hi hai',
      'Bharat Maa ki santaanon ka aapsi pyaar aur apnaapan nek hi hai',
    ],
    linesEnglish: [
      'Many languages and traditions, yet one steady heartbeat echoes across all',
      'The bond uniting children of Mother India stays noble and enduring',
    ],
  },
  {
    title: 'सुबह का वंदे मातरम',
    titleEnglish: 'Morning Vande Mataram',
    linesHindi: [
      'छब्बीस जनवरी की सुबह जब स्कूल के आँगन में राष्ट्रगान गूँजता है',
      'बच्चों की आँखों में सुनहरे भारत का नया सपना चुपके से झूलता है',
    ],
    linesHinglish: [
      'Chhabbees January ki subah jab school ke aangan mein rashtragan goonjta hai',
      'Bacchon ki aankhon mein sunahare Bharat ka naya sapna chupke se jhoolta hai',
    ],
    linesEnglish: [
      'On twenty-sixth January morning when the national anthem fills schoolyards',
      'Bright dreams of a golden India shine gently in every child’s eyes',
    ],
  },
  {
    title: 'सरहद के पहरेदारों को नमन',
    titleEnglish: 'Salute to Frontier Guardians',
    linesHindi: [
      'बर्फीली चोटियों और तपते रेगिस्तान में जो तिरंगा ऊँचा रखते हैं',
      'गणतंत्र दिवस पर पूरा देश उन फ़ौजी भाइयों को दिल से सलाम करते हैं',
    ],
    linesHinglish: [
      'Barfeeli chotiyon aur tapte registaan mein jo tiranga ooncha rakhte hain',
      'Gantantra Diwas par poora desh un fauji bhaiyon ko dil se salaam karte hain',
    ],
    linesEnglish: [
      'Upon icy peaks and scorching dunes they keep our tricolor flying high',
      'On Republic Day the entire nation salutes our gallant soldiers with pride',
    ],
  },
  {
    title: 'लोकतंत्र का पावन उत्सव',
    titleEnglish: 'Sacred Festival of Democracy',
    linesHindi: [
      'राजा नहीं यहाँ हर आम इंसान के वोट की ताक़त चलती है',
      'हमारे गणतंत्र की यही ख़ूबसूरती हर पीढ़ी में उम्मीदें भरती है',
    ],
    linesHinglish: [
      'Raaja nahin yahaan har aam insaan ke vote ki taqat chalti hai',
      'Hamaare gantantra ki yahi khoobsurati har peedhi mein ummeedein bharti hai',
    ],
    linesEnglish: [
      'Not kings, here the voice and vote of every ordinary citizen stands supreme',
      'That grace of our Republic fills every rising generation with bright hope',
    ],
  },
  {
    title: 'नए भारत की उड़ान',
    titleEnglish: 'Flight of Modern India',
    linesHindi: [
      'चाँद तक पहुँचे क़दम और खेत में लहराती फ़सल दोनों कमाल हैं',
      'मेहनत, विज्ञान और संस्कृति से सजे हमारे भारत की यही मिसाल है',
    ],
    linesHinglish: [
      'Chaand tak pahunche kadam aur khet mein lehraati fasal dono kamaal hain',
      'Mehnat, vigyaan aur sanskriti se saje hamaare Bharat ki yahi misaal hai',
    ],
    linesEnglish: [
      'Footsteps reaching the moon and waving harvests in fields shine equally bright',
      'Crafted by labor, science, and heritage, India sets an inspiring example',
    ],
  },
  {
    title: 'अंबेडकर जी की दूरदृष्टि',
    titleEnglish: 'Vision of Dr. Ambedkar',
    linesHindi: [
      'कलम की ताक़त से जिसने हर कमज़ोर को बराबरी का हक़ दिलाया',
      'छब्बीस जनवरी ने उस महान संविधान का सुनहरा सवेरा दिखाया',
    ],
    linesHinglish: [
      'Kalam ki taqat se jisne har kamzor ko baraabari ka haq dilaaya',
      'Chhabbees January ne us mahaan samvidhan ka sunahara savera dikhaaya',
    ],
    linesEnglish: [
      'With the quiet strength of his pen, he secured equal dignity for every citizen',
      'Twenty-sixth January unveiled the golden dawn of that great Constitution',
    ],
  },
  {
    title: 'कागज़ का छोटा तिरंगा',
    titleEnglish: 'Little Paper Tricolor',
    linesHindi: [
      'बच्चे के हाथ में लहराता छोटा सा तिरंगा सबसे बड़ा गर्व लगता है',
      'देश से प्यार करने का जज़्बा हर उम्र में पाक और अटल लगता है',
    ],
    linesHinglish: [
      'Bacche ke haath mein lehraata chhota sa tiranga sabse bada garv lagta hai',
      'Desh se pyaar karne ka jazba har umr mein paak aur atal lagta hai',
    ],
    linesEnglish: [
      'Even a small paper tricolor waving in a child’s hand feels deeply proud',
      'Love for one’s homeland rings pure and unshakeable at every age',
    ],
  },
  {
    title: 'किसान और जवान का देश',
    titleEnglish: 'Nation of Farmer and Soldier',
    linesHindi: [
      'एक सीमा पर जागता है, दूसरा खेतों में पसीने से सोना उगाता है',
      'इन्ही दो वीरों के कंधों पर मेरा भारत शान से मुस्कुराता है',
    ],
    linesHinglish: [
      'Ek seema par jaagta hai, doosra kheton mein paseene se sona ugaata hai',
      'Inhi do veeron ke kandhon par mera Bharat shaan se muskurata hai',
    ],
    linesEnglish: [
      'One stands guard at the border while the other grows golden harvests in soil',
      'Resting on those two brave shoulders, India smiles with quiet dignity',
    ],
  },
  {
    title: 'आसमान में तिरंगी पतंग',
    titleEnglish: 'Tricolor Kite in Sky',
    linesHindi: [
      'जनवरी की ठंडी हवा में भी देशभक्ति की आँच गुनगुनी लगती है',
      'तिरंगे के आगे दुनिया की हर शान और शोहरत फीकी पड़ती है',
    ],
    linesHinglish: [
      'January ki thandi hawa mein bhi deshbhakti ki aanch gunguni lagti hai',
      'Tirange ke aage duniya ki har shaan aur shohrat feeki padti hai',
    ],
    linesEnglish: [
      'Even in January’s crisp chill, devotion to homeland warms the heart',
      'Before our proud tricolor, every lesser glory fades silently away',
    ],
  },
  {
    title: 'मेहनत से लिखें नया इतिहास',
    titleEnglish: 'Writing History Through Effort',
    linesHindi: [
      'सिर्फ़ एक दिन झंडा फहराना नहीं, हर दिन ईमान से काम करना देशप्रेम है',
      'भारत को और सुंदर बनाने का संकल्प लेना ही असली नेक नेम है',
    ],
    linesHinglish: [
      'Sirf ek din jhanda fehraana nahin, har din imaan se kaam karna deshprem hai',
      'Bharat ko aur sundar banaane ka sankalp lena hi asli nek nem hai',
    ],
    linesEnglish: [
      'Beyond raising the flag for one day, honest daily effort is true patriotism',
      'Resolving to build a kinder, stronger India is our finest tribute',
    ],
  },
  {
    title: 'जन गण मन की धड़कन',
    titleEnglish: 'Heartbeat of National Anthem',
    linesHindi: [
      'बावन सेकंड जब पूरा देश एक लय में सीधा खड़ा हो जाता है',
      'हर आँख में गर्व का समंदर अपने आप उमड़कर बह आता है',
    ],
    linesHinglish: [
      'Baawan second jab poora desh ek lay mein seedha khada ho jaata hai',
      'Har aankh mein garv ka samandar apne aap umadkar beh aata hai',
    ],
    linesEnglish: [
      'For fifty-two sacred seconds, an entire nation stands tall in one rhythm',
      'An ocean of quiet pride wells effortlessly inside every watching eye',
    ],
  },
  {
    title: 'सच्चे नागरिक की शपथ',
    titleEnglish: 'Oath of a True Citizen',
    linesHindi: [
      'कचरा न फैलाना, सच बोलना और किसी का हक न मारना भी सेवा है',
      'अच्छे नागरिक का कर्तव्य निभाना ही गणतंत्र दिवस का असली मेवा है',
    ],
    linesHinglish: [
      'Kachra na failaana, sach bolna aur kisi ka haq na maarna bhi seva hai',
      'Acche naagarik ka kartavya nibhaana hi Gantantra Diwas ka asli mewa hai',
    ],
    linesEnglish: [
      'Keeping streets clean, speaking truth, and respecting rights is real service',
      'Living as a responsible citizen honors Republic Day more than speeches',
    ],
  },
  {
    title: 'गंगा-जमुनी तहज़ीब का भारत',
    titleEnglish: 'Land of Shared Heritage',
    linesHindi: [
      'मंदिर की आरती और अज़ान की सदा दोनों एक ही आसमान में मिलती हैं',
      'मेरा भारत ऐसा बग़ीचा है जहाँ हर मज़हब की कलियाँ साथ खिलती हैं',
    ],
    linesHinglish: [
      'Mandir ki aarti aur azaan ki sada dono ek hi aasmaan mein milti hain',
      'Mera Bharat aisa bageecha hai jahaan har mazhab ki kaliyan saath khilti hain',
    ],
    linesEnglish: [
      'Temple bells and morning prayers rise peacefully under one shared sky',
      'India is a vibrant garden where blossoms of every faith bloom together',
    ],
  },
  {
    title: 'नारी शक्ति को सलाम',
    titleEnglish: 'Salute to Women Strength',
    linesHindi: [
      'लड़ाकू विमान से अंतरिक्ष तक भारत की बेटियाँ परचम लहरा रही हैं',
      'गणतंत्र दिवस पर हर माँ-बहन पूरे राष्ट्र का मान बढ़ा रही हैं',
    ],
    linesHinglish: [
      'Ladaaku vimaan se antariksh tak Bharat ki betiyan parcham lehra rahi hain',
      'Gantantra Diwas par har maa-behen poore raashtra ka maan badha rahi hain',
    ],
    linesEnglish: [
      'From fighter cockpits to outer space, India’s daughters raise our banner high',
      'Every courageous woman adds brighter honor to our growing Republic',
    ],
  },
  {
    title: 'संविधान दिवस से गणतंत्र तक',
    titleEnglish: 'Journey to the Republic',
    linesHindi: [
      'कई सालों के तप, बहस और दूरदर्शिता से रचा गया यह पाक ग्रंथ है',
      'भारत का संविधान हर नागरिक को गरिमा देने वाला अमूल्य मंत्र है',
    ],
    linesHinglish: [
      'Kai saalon ke tap, behas aur doordarshita se racha gaya yah paak granth hai',
      'Bharat ka samvidhan har naagarik ko garima dene wala amoolya mantra hai',
    ],
    linesEnglish: [
      'Through years of wisdom, debate, and dedication was this charter shaped',
      'Our Constitution remains a timeless pledge securing dignity for all',
    ],
  },
  {
    title: 'बूँदी के लड्डू और बचपन',
    titleEnglish: 'School Sweets and Childhood',
    linesHindi: [
      'प्रभात फेरी और दो लड्डुओं की खुशबू आज भी यादों में ताज़ा है',
      'बचपन वाला वो छब्बीस जनवरी हर बड़ी पार्टी से ज़्यादा प्यारा नज़ारा है',
    ],
    linesHinglish: [
      'Prabhat pheri aur do laddoo ki khushboo aaj bhi yaadon mein taaza hai',
      'Bachpan wala wo chhabbees January har badi party se zyada pyaara nazaara hai',
    ],
    linesEnglish: [
      'Morning school parades and sweet laddoos still linger fresh in memory',
      'Childhood Republic Days outshine every grand celebration since',
    ],
  },
  {
    title: 'रक्त से सींची आज़ादी',
    titleEnglish: 'Freedom Watered With Courage',
    linesHindi: [
      'भगत, आज़ाद, सुभाष और बापू की राहों ने हमें सवेरा दिया',
      'अपनी जवानी वार कर उन्होंने हर भारतवासी को नया बसेरा दिया',
    ],
    linesHinglish: [
      'Bhagat, Aazaad, Subhash aur Bapu ki raahon ne humein savera diya',
      'Apni jawaani waar kar unhone har Bharatvaasi ko naya basera diya',
    ],
    linesEnglish: [
      'The fearless paths of Bhagat, Azad, Bose, and Gandhi brought our dawn',
      'Giving their youth, they gifted every Indian a proud and free home',
    ],
  },
  {
    title: 'तिरंगे सा साफ़ मन',
    titleEnglish: 'Heart Clear as Tricolor',
    linesHindi: [
      'दिल में सफ़ेद रंग जैसी सच्चाई और इरादों में केसरिया जोश रखो',
      'देश के प्रति अपनी ज़िम्मेदारी का हमेशा दिल में पूरा होश रखो',
    ],
    linesHinglish: [
      'Dil mein safed rang jaisi sacchaai aur iraadon mein kesariya josh rakho',
      'Desh ke prati apni zimmedaari ka hamesha dil mein poora hosh rakho',
    ],
    linesEnglish: [
      'Carry snow-white honesty inside your heart and saffron courage in purpose',
      'Stay mindful every day of our shared duty toward this beloved land',
    ],
  },
  {
    title: 'चक्र की भाँति निरंतर गति',
    titleEnglish: 'Steady Motion Like the Wheel',
    linesHindi: [
      'रुक जाना भारत के स्वभाव में कभी लिखा ही नहीं गया है',
      'हर ठोकर से उठकर दुनिया में नया मुक़ाम इस देश ने पाया है',
    ],
    linesHinglish: [
      'Ruk jaana Bharat ke swabhaav mein kabhi likha hi nahin gaya hai',
      'Har thokar se uthkar duniya mein naya mukaam is desh ne paaya hai',
    ],
    linesEnglish: [
      'Standing still was never written into the spirit of India',
      'Rising stronger from every trial, this nation always carves new heights',
    ],
  },
  {
    title: 'गाँव की पगडंडी से दिल्ली तक',
    titleEnglish: 'From Village Path to Capital',
    linesHindi: [
      'खेत की मेड़ से लेकर कर्तव्य पथ तक एक ही गर्व लहराता है',
      'भारत का हर बेटा-बेटी अपने तिरंगे पर जान लुटाता है',
    ],
    linesHinglish: [
      'Khet ki med se lekar Kartavya Path tak ek hi garv lehraata hai',
      'Bharat ka har beta-beti apne tirange par jaan lutaata hai',
    ],
    linesEnglish: [
      'From rustic field ridges to Kartavya Path waves one shared pride',
      'Every son and daughter of India cherishes the tricolor above self',
    ],
  },
  {
    title: 'अहिंसा और साहस का संगम',
    titleEnglish: 'Confluence of Peace and Valor',
    linesHindi: [
      'हमने दुनिया को हमेशा शांति और भाईचारे का ही पाठ पढ़ाया है',
      'पर ज़रूरत पड़ी तो इसी धरती ने रणभूमि में भी परचम फहराया है',
    ],
    linesHinglish: [
      'Humne duniya ko hamesha shaanti aur bhaichare ka hi paath padhaaya hai',
      'Par zaroorat padi to isi dharti ne ranbhoomi mein bhi parcham fehraaya hai',
    ],
    linesEnglish: [
      'We have always offered the world lessons of peace and brotherhood',
      'Yet when duty called, this soil stood fearless on every battlefield too',
    ],
  },
  {
    title: 'सत्तर से ऊपर गौरवशाली साल',
    titleEnglish: 'Glorious Decades of Republic',
    linesHindi: [
      'गणतंत्र की यह यात्रा हर साल और भी परिपक्व व मज़बूत होती है',
      'जनता की उम्मीदों से सजी भारत की तस्वीर हर दौर में खूबसूरत होती है',
    ],
    linesHinglish: [
      'Gantantra ki yah yatra har saal aur bhi paripakva wa mazboot hoti hai',
      'Janta ki ummeedon se saji Bharat ki tasveer har daur mein khoobsurat hoti hai',
    ],
    linesEnglish: [
      'Each passing year makes this democratic journey wiser and stronger',
      'Brightened by the hopes of its people, India’s story shines in every era',
    ],
  },
  {
    title: 'युवाओं के कंधों पर कल',
    titleEnglish: 'Tomorrow on Young Shoulders',
    linesHindi: [
      'देश के युवाओं की मेहनत ही आने वाले कल की असली तक़दीर है',
      'नई सोच और पुराने संस्कारों से बनी भारत की सुंदर तस्वीर है',
    ],
    linesHinglish: [
      'Desh ke yuvaon ki mehnat hi aane wale kal ki asli taqdeer hai',
      'Nayi soch aur puraane sanskaaron se bani Bharat ki sundar tasveer hai',
    ],
    linesEnglish: [
      'The honest labor of India’s youth writes the destiny of tomorrow',
      'Fresh innovation guided by timeless values paints our finest portrait',
    ],
  },
  {
    title: 'तिरंगे में लिपटी दुआ',
    titleEnglish: 'Prayer Wrapped in Tricolor',
    linesHindi: [
      'मेरा देश सदा तरक़्क़ी करे और हर आँगन में खुशहाली रहे',
      'छब्बीस जनवरी पर हर दिल में बस यही पावन दुआ पलती रहे',
    ],
    linesHinglish: [
      'Mera desh sada tarakki kare aur har aangan mein khushhaali rahe',
      'Chhabbees January par har dil mein bas yahi paavan dua palti rahe',
    ],
    linesEnglish: [
      'May my homeland flourish forever and prosperity bless every doorstep',
      'On Republic Day let this pure prayer live steadily in every heart',
    ],
  },
  {
    title: 'गर्व से ऊँचा मस्तक',
    titleEnglish: 'Forehead Held High With Pride',
    linesHindi: [
      'जिस माटी में राम, बुद्ध, नानक और कबीर की वाणी बसी हो',
      'उस भारत की संतान होने पर हर सांस में गर्व की महक घुली हो',
    ],
    linesHinglish: [
      'Jis maati mein Ram, Buddha, Nanak aur Kabir ki vaani basi ho',
      'Us Bharat ki santaan hone par har saans mein garv ki mehek ghuli ho',
    ],
    linesEnglish: [
      'In a soil enriched by the wisdom of saints, sages, and poets',
      'Every breath swells with gratitude to belong to this noble land',
    ],
  },
  {
    title: 'विज्ञान और संस्कृति का मेल',
    titleEnglish: 'Blend of Science and Culture',
    linesHindi: [
      'वेदों के ज्ञान से लेकर डिजिटल भारत तक सफ़र बेमिसाल रहा है',
      'हर संकट से लड़कर फिर उठ खड़ा होना भारत का कमाल रहा है',
    ],
    linesHinglish: [
      'Vedon ke gyaan se lekar digital Bharat tak safar bemisaal raha hai',
      'Har sankat se ladkar phir uth khada hona Bharat ka kamaal raha hai',
    ],
    linesEnglish: [
      'From ancient wisdom to digital horizons, our journey stays remarkable',
      'Rising resilient from every challenge has always been India’s strength',
    ],
  },
  {
    title: 'बुलंद हौसलों की परेड',
    titleEnglish: 'Parade of Unbroken Spirit',
    linesHindi: [
      'बैंड की थाप और घुड़सवारों की शान दिल में जोश जगा देती है',
      'गणतंत्र की झांकी पूरे विश्व को हमारी विविधता दिखा देती है',
    ],
    linesHinglish: [
      'Band ki thaap aur ghudsawaaron ki shaan dil mein josh jaga deti hai',
      'Gantantra ki jhaanki poore vishwa ko hamaari vividhta dikha deti hai',
    ],
    linesEnglish: [
      'Drumbeats and cavalry grace stir bright pride in every chest',
      'Republic Day tableaux showcase our rich diversity before the world',
    ],
  },
  {
    title: 'अधिकार और कर्तव्य का संतुलन',
    titleEnglish: 'Balance of Rights and Duties',
    linesHindi: [
      'हक़ मांगने के साथ फर्ज़ निभाने का भी सलीक़ा सीखना होगा',
      'सपनों का भारत बनाने को हमें ख़ुद ही पहला दीपक बनना होगा',
    ],
    linesHinglish: [
      'Haq maangne ke saath farz nibhaane ka bhi saleeka seekhna hoga',
      'Sapnon ka Bharat banaane ko humein khud hi pehla deepak banna hoga',
    ],
    linesEnglish: [
      'Alongside claiming rights, we must gracefully fulfill every civic duty',
      'To build the India of our dreams, each of us must shine first',
    ],
  },
  {
    title: 'मातृभूमि के चरणों में प्रणाम',
    titleEnglish: 'Salutation at Motherland Feet',
    linesHindi: [
      'जन्म लिया इस पावन धरती पर इससे बड़ा सौभाग्य क्या होगा',
      'तिरंगा सदा आसमान छूता रहे, इससे सुंदर कोई ख्वाब क्या होगा',
    ],
    linesHinglish: [
      'Janm liya is paavan dharti par isse bada saubhagya kya hoga',
      'Tiranga sada aasmaan chhoota rahe, isse sundar koi khwaab kya hoga',
    ],
    linesEnglish: [
      'Being born on this sacred land is blessing beyond compare',
      'Seeing the tricolor kiss free skies forever is our finest dream',
    ],
  },
  {
    title: 'हर घर तिरंगा हर मन वंदन',
    titleEnglish: 'Tricolor on Every Home',
    linesHindi: [
      'छत पर लहराते तीन रंग मन को नई ऊर्जा से भर देते हैं',
      'देश के नाम बिताए दो पल भी जीवन को सार्थक कर देते हैं',
    ],
    linesHinglish: [
      'Chhat par lehraate teen rang man ko nayi oorja se bhar dete hain',
      'Desh ke naam bitaaye do pal bhi jeevan ko saarthak kar dete hain',
    ],
    linesEnglish: [
      'Three proud colors fluttering overhead charge the heart with fresh energy',
      'Even moments devoted to one’s nation make an entire life meaningful',
    ],
  },
  {
    title: 'अखंड भारत का विश्वास',
    titleEnglish: 'Faith in Undivided India',
    linesHindi: [
      'कश्मीर की वादी से कन्याकुमारी की लहरों तक एक ही राग बजता है',
      'हिंदुस्तान का हर कोना अपनी अनूठी संस्कृति से खूब सजता है',
    ],
    linesHinglish: [
      'Kashmir ki vaadi se Kanyakumari ki lehron tak ek hi raag bajta hai',
      'Hindustan ka har kona apni anoothi sanskriti se khoob sajta hai',
    ],
    linesEnglish: [
      'From Kashmir’s valleys to Kanyakumari’s waves plays one timeless song',
      'Every corner of India blooms gracefully in its own rich heritage',
    ],
  },
  {
    title: 'शिक्षक, डॉक्टर और हर कर्मयोगी',
    titleEnglish: 'Every Builder of the Nation',
    linesHindi: [
      'सिर्फ़ वर्दी वाले ही नहीं, ईमानदार शिक्षक और मज़दूर भी राष्ट्र बनाते हैं',
      'जो अपना काम सच्चे मन से करे वही भारत का गौरव बढ़ाते हैं',
    ],
    linesHinglish: [
      'Sirf vardi waale hi nahin, imaandar shikshak aur mazdoor bhi raashtra banaate hain',
      'Jo apna kaam sacche man se kare wahi Bharat ka gaurav badhaate hain',
    ],
    linesEnglish: [
      'Not uniforms alone—honest teachers, healers, and workers build our nation',
      'Whoever serves with integrity lifts India’s dignity higher each day',
    ],
  },
  {
    title: 'गुलिस्ताँ-ए-हिंद की खुशबू',
    titleEnglish: 'Fragrance of India Garden',
    linesHindi: [
      'फूल कई रंग के हों तब ही बग़ीचे की रौनक निखरकर आती है',
      'भारत की यही विविधता पूरी दुनिया को मोहब्बत का पाठ पढ़ाती है',
    ],
    linesHinglish: [
      'Phool kai rang ke hon tab hi bageeche ki raunak nikharkar aati hai',
      'Bharat ki yahi vividhta poori duniya ko mohabbat ka paath padhaati hai',
    ],
    linesEnglish: [
      'Only when blossoms come in many hues does a garden truly shine',
      'India’s harmony in diversity teaches the entire world how to live in love',
    ],
  },
  {
    title: 'संविधान के चार स्तंभ',
    titleEnglish: 'Four Pillars of Republic',
    linesHindi: [
      'न्याय, स्वतंत्रता, समता और बंधुता हमारे राष्ट्र के चार मजबूत पाये हैं',
      'इन्ही मूल्यों को संभालकर हमारे पुरखों ने सुनहरे ख्वाब सजाये हैं',
    ],
    linesHinglish: [
      'Nyaay, swatantrata, samta aur bandhuta hamaare raashtra ke chaar mazboot paaye hain',
      'Inhi moolyon ko sambhaalkar hamaare purkhon ne sunahare khwaab sajaaye hain',
    ],
    linesEnglish: [
      'Justice, liberty, equality, and fraternity stand as our four strong pillars',
      'Guarding these ideals, our elders wove golden hopes for generations ahead',
    ],
  },
  {
    title: 'वतन की मिट्टी का तिलक',
    titleEnglish: 'Tilak of Homeland Soil',
    linesHindi: [
      'माथे पर लगी देश की मिट्टी किसी भी मुकुट से ज़्यादा अनमोल है',
      'भारत के सम्मान में बोला गया हर शब्द शहद से ज़्यादा मीठा बोल है',
    ],
    linesHinglish: [
      'Maathe par lagi desh ki mitti kisi bhi mukut se zyada anmol hai',
      'Bharat ke sammaan mein bola gaya har shabd shahad se zyada meetha bol hai',
    ],
    linesEnglish: [
      'Dust of this homeland on the forehead outshines any golden crown',
      'Every word spoken in honor of India rings sweeter than pure honey',
    ],
  },
  {
    title: 'शांति का सफ़ेद कबूतर',
    titleEnglish: 'White Dove of Peace',
    linesHindi: [
      'हमारी ताक़त किसी को डराने नहीं, अमन की रक्षा करने के लिए है',
      'भारत की हर सांस संसार के कल्याण और भाईचारे के लिए है',
    ],
    linesHinglish: [
      'Hamaari taqat kisi ko daraane nahin, aman ki raksha karne ke liye hai',
      'Bharat ki har saans sansaar ke kalyaan aur bhaichare ke liye hai',
    ],
    linesEnglish: [
      'Our strength exists not to threaten, but to shelter lasting peace',
      'India’s heartbeat wishes steady goodwill and harmony across the globe',
    ],
  },
  {
    title: 'सपनों से आगे कर्तव्य',
    titleEnglish: 'Duty Above Self',
    linesHindi: [
      'जब बात वतन की आन पर आए तो हर निजी स्वार्थ छोटा पड़ जाता है',
      'सच्चा देशभक्त मुस्कुराकर हर कठिन पथ पर आगे बढ़ जाता है',
    ],
    linesHinglish: [
      'Jab baat watan ki aan par aaye to har niji swaarth chhota pad jaata hai',
      'Saccha deshbhakt muskuraakar har kathin path par aage badh jaata hai',
    ],
    linesEnglish: [
      'When national honor calls, every selfish concern shrinks into nothing',
      'A true patriot smiles and steps bravely down the steepest road',
    ],
  },
  {
    title: 'बसंती चोला और तिरंगा',
    titleEnglish: 'Basanti Robe and Tricolor',
    linesHindi: [
      'मेरा रंग दे बसंती चोला की गूँज आज भी रगों में बिजली भरती है',
      'वीरों की याद हर पीढ़ी के दिल को अडिग और निडर करती है',
    ],
    linesHinglish: [
      'Mera rang de basanti chola ki goonj aaj bhi ragon mein bijli bharti hai',
      'Veeron ki yaad har peedhi ke dil ko adig aur nidar karti hai',
    ],
    linesEnglish: [
      'Echoes of freedom songs still spark electric courage inside every vein',
      'Remembering our brave heroes steadies every generation without fear',
    ],
  },
  {
    title: 'ख़ुशहाल गाँव, सुरक्षित शहर',
    titleEnglish: 'Prosperous Villages, Safe Cities',
    linesHindi: [
      'हर बच्चे के हाथ में किताब और हर बुजुर्ग के चेहरे पर सम्मान हो',
      'गणतंत्र दिवस पर बस इतना सुंदर और सुरक्षित अपना हिंदुस्तान हो',
    ],
    linesHinglish: [
      'Har bacche ke haath mein kitaab aur har bujurg ke chehre par sammaan ho',
      'Gantantra Diwas par bas itna sundar aur surakshit apna Hindustan ho',
    ],
    linesEnglish: [
      'May every child hold a book and every elder enjoy warm respect',
      'On Republic Day we wish for an India so fair, wise, and safe',
    ],
  },
  {
    title: 'सागर से हिमालय तक वंदन',
    titleEnglish: 'Homage From Ocean to Himalayas',
    linesHindi: [
      'सिर पर हिमालय का ताज और चरण पखारता नीला समंदर है',
      'मेरा भारत देश इस धरती पर कुदरत का सबसे प्यारा मंदिर है',
    ],
    linesHinglish: [
      'Sir par Himalaya ka taaj aur charan pakhaarta neela samandar hai',
      'Mera Bharat desh is dharti par kudrat ka sabse pyaara mandir hai',
    ],
    linesEnglish: [
      'Crowned by lofty Himalayas and washed by deep blue southern seas',
      'My India stands as nature’s dearest sanctuary on this earth',
    ],
  },
  {
    title: 'नई सुबह की सलामी',
    titleEnglish: 'Salute to New Dawn',
    linesHindi: [
      'सूरज की पहली किरण जब लाल क़िले और संसद को छूकर निकलती है',
      'गणतंत्र की पावन हवा हर भारतीय में नया आत्मविश्वास भरती है',
    ],
    linesHinglish: [
      'Sooraj ki pehli kiran jab Lal Qile aur Sansad ko chhookar nikalti hai',
      'Gantantra ki paavan hawa har Bharatiya mein naya aatmvishwas bharti hai',
    ],
    linesEnglish: [
      'When dawn’s first ray touches historic red sandstone and Parliament domes',
      'The free breeze of our Republic fills every citizen with steady pride',
    ],
  },
  {
    title: 'तिरंगे की लाज हमारी ज़िम्मेदारी',
    titleEnglish: 'Flag Honor Is Our Duty',
    linesHindi: [
      'झंडा फहराने के बाद उसे ज़मीन पर न गिरने देना भी सम्मान है',
      'अपने तिरंगे की मर्यादा सँभालना ही सच्चे भारतीय की पहचान है',
    ],
    linesHinglish: [
      'Jhanda fehraane ke baad use zameen par na girne dena bhi sammaan hai',
      'Apne tirange ki maryaada sambhaalna hi sacche Bharatiya ki pehchaan hai',
    ],
    linesEnglish: [
      'Ensuring the flag never touches the ground after celebrations is true honor',
      'Protecting our tricolor’s dignity marks a mindful, proud citizen',
    ],
  },
  {
    title: 'खिलाड़ियों का बढ़ा मान',
    titleEnglish: 'Pride Raised by Athletes',
    linesHindi: [
      'जब विदेशी मैदान में अपना राष्ट्रगान बजता है तो आँखें छलक आती हैं',
      'जीत किसी एक खिलाड़ी की हो, पर खुशियां पूरे हिंदुस्तान में छा जाती हैं',
    ],
    linesHinglish: [
      'Jab videshi maidaan mein apna rashtragan bajta hai to aankhein chhalak aati hain',
      'Jeet kisi ek khiladi ki ho, par khushiyan poore Hindustan mein chha jaati hain',
    ],
    linesEnglish: [
      'When our anthem plays across distant stadiums, proud tears well instantly',
      'One athlete wins a medal, yet all of India celebrates as one family',
    ],
  },
  {
    title: 'अमन के रखवाले जाँबाज़',
    titleEnglish: 'Brave Guardians of Peace',
    linesHindi: [
      'त्यौहारों पर जब हम घरों में मिठाई बाँटकर खुशियाँ मनाते हैं',
      'तब फ़ौजी भाई सरहद पर जागकर हमारे चैन की नींद बचाते हैं',
    ],
    linesHinglish: [
      'Tyoharon par jab hum gharon mein mithaai baantkar khushiyan manaate hain',
      'Tab fauji bhai sarhad par jaagkar hamaare chain ki neend bachaate hain',
    ],
    linesEnglish: [
      'While we share sweets safely inside warm homes during every festival',
      'Our soldiers stay wide awake at borders guarding our peaceful sleep',
    ],
  },
  {
    title: 'मेरा भारत, मेरा अभिमान',
    titleEnglish: 'My India, My Pride',
    linesHindi: [
      'नफ़रत की आँधी लाख चले, इस देश की जड़ें प्रेम से जुड़ी हैं',
      'गणतंत्र की धरोहर हमारे भरोसे और भाईचारे के धागों से मढ़ी हैं',
    ],
    linesHinglish: [
      'Nafrat ki aandhi laakh chale, is desh ki jadein prem se judi hain',
      'Gantantra ki dharohar hamaare bharose aur bhaichare ke dhaagon se madhi hain',
    ],
    linesEnglish: [
      'Let storms of division blow as they may, India’s roots are woven in love',
      'Our Republic’s heritage shines stitched with threads of trust and kinship',
    ],
  },
  {
    title: 'जय हिंद का गगनभेदी नाद',
    titleEnglish: 'Skyward Cry of Jai Hind',
    linesHindi: [
      'जय हिंद बोलते ही सीने में एक अजीब सी ताक़त दौड़ जाती है',
      'मातृभूमि की पुकार हर डर और थकान को पल में मिटा जाती है',
    ],
    linesHinglish: [
      'Jai Hind bolte hi seene mein ek ajeeb si taqat daud jaati hai',
      'Matribhoomi ki pukaar har dar aur thakaan ko pal mein mita jaati hai',
    ],
    linesEnglish: [
      'Saying Jai Hind sends a quiet rush of strength straight through the chest',
      'The call of motherland erases weariness and doubt in an instant',
    ],
  },
  {
    title: 'छब्बीस जनवरी की शुभकामनाएं',
    titleEnglish: 'Warm Wishes of 26 January',
    linesHindi: [
      'उन्नति के नए शिखर छुए अपना देश और घर-घर उजियारा रहे',
      'आप सभी को गणतंत्र दिवस की ढेरों शुभकामनाएं, भारत सदा प्यारा रहे',
    ],
    linesHinglish: [
      'Unnati ke naye shikhar chhue apna desh aur ghar-ghar ujiyaara rahe',
      'Aap sabhi ko Gantantra Diwas ki dheron shubhkamnayein, Bharat sada pyaara rahe',
    ],
    linesEnglish: [
      'May our nation scale brighter summits and every household stay radiant',
      'Warmest Republic Day wishes to you all—may India flourish forever',
    ],
  },
  {
    title: 'आज़ाद हवा में खिलते ख्वाब',
    titleEnglish: 'Dreams Blooming in Free Air',
    linesHindi: [
      'खुली फ़िज़ा में उड़ने का अवसर हमें हमारे संविधान ने दिया है',
      'आज हर आम इंसान ने अपने हुनर से नया इतिहास रच दिया है',
    ],
    linesHinglish: [
      'Khuli fiza mein udne ka avsar humein hamaare samvidhan ne diya hai',
      'Aaj har aam insaan ne apne hunar se naya itihaas rach diya hai',
    ],
    linesEnglish: [
      'Our Constitution granted every citizen room to spread wings beneath open skies',
      'Ordinary people across India now craft history through honest skill',
    ],
  },
  {
    title: 'सदियों की धरोहर, नया संकल्प',
    titleEnglish: 'Ancient Heritage, Fresh Resolve',
    linesHindi: [
      'इतिहास हमारा गौरव है और भविष्य हमारी मेहनत से सजेगा',
      'जब हर भारतवासी साथ चलेगा तो यह देश विश्व गुरु बनकर चमकेगा',
    ],
    linesHinglish: [
      'Itihaas hamaara gaurav hai aur bhavishya hamaari mehnat se sajega',
      'Jab har Bharatvaasi saath chalega to yah desh vishwa guru bankar chamkega',
    ],
    linesEnglish: [
      'Our past fills us with pride while our shared effort adorns tomorrow',
      'Walking forward as one people, India will shine as a light to the world',
    ],
  },
  {
    title: 'तिरंगे संग चमकता सवेरा',
    titleEnglish: 'Dawn Shining With Flag',
    linesHindi: [
      'जनवरी की धुंध में लिपटी सुबह भी आज केसरिया चमक रखती है',
      'गणतंत्र की धड़कन करोड़ों दिलों में अमन और प्यार की महक रखती है',
    ],
    linesHinglish: [
      'January ki dhund mein lipti subah bhi aaj kesariya chamak rakhti hai',
      'Gantantra ki dhadkan karodon dilon mein aman aur pyaar ki mehek rakhti hai',
    ],
    linesEnglish: [
      'Even a mist-wrapped January dawn wears a warm saffron glow today',
      'The pulse of our Republic spreads calm peace and love through millions',
    ],
  },
  {
    title: 'सच्चाई की अमर पताका',
    titleEnglish: 'Immortal Banner of Truth',
    linesHindi: [
      'सत्यमेव जयते सिर्फ़ लिखा हुआ वाक्य नहीं, हमारे जीवन का आधार है',
      'इसी सच्चाई पर टिका हमारा प्यारा गणतंत्र और भारतीय संस्कार है',
    ],
    linesHinglish: [
      'Satyameva Jayate sirf likha hua vaakya nahin, hamaare jeevan ka aadhaar hai',
      'Isi sacchaai par tika hamaara pyaara gantantra aur Bharatiya sanskaar hai',
    ],
    linesEnglish: [
      'Truth Alone Triumphs is no mere motto carved in stone, but our way of life',
      'Upon that honesty rests our enduring Republic and timeless culture',
    ],
  },
  {
    title: 'बसंती धूप में लहराता परचम',
    titleEnglish: 'Flag Waving in Winter Sun',
    linesHindi: [
      'सुनहरी धूप में लहराते तिरंगे को देखकर मन भावुक हो उठता है',
      'एक ही पल में सारा अभिमान और सारी दूरी जैसे खो उठता है',
    ],
    linesHinglish: [
      'Sunahari dhoop mein lehraate tirange ko dekhkar man bhavuk ho uthta hai',
      'Ek hi pal mein saara abhimaan aur saari doori jaise kho uthta hai',
    ],
    linesEnglish: [
      'Watching the tricolor ripple in golden sunlight stirs the deepest heart',
      'In a single instant every petty distance melts quietly away',
    ],
  },
  {
    title: 'नए भारत के निर्माण की घड़ी',
    titleEnglish: 'Hour of Building New India',
    linesHindi: [
      'आओ नफ़रत छोड़कर विकास और भाईचारे का हाथ थामें आज',
      'मिलकर सजाएं अपनी मातृभूमि के माथे पर सुनहरा ताज',
    ],
    linesHinglish: [
      'Aao nafrat chhodkar vikaas aur bhaichare ka haath thaamein aaj',
      'Milkar sajaayein apni matribhoomi ke maathe par sunahara taaj',
    ],
    linesEnglish: [
      'Let us set aside division and join hands for progress and kinship today',
      'Together let us place a radiant crown of goodness on our homeland',
    ],
  },
  {
    title: 'हर दिल की आवाज़: हिंदुस्तान',
    titleEnglish: 'Every Heart Speaks India',
    linesHindi: [
      'कदमों में रफ़्तार और आँखों में अपने देश के लिए सम्मान रहे',
      'सदा ज़िंदाबाद मेरा हिंदुस्तान और ऊँचा हर पल इसका नाम रहे',
    ],
    linesHinglish: [
      'Kadmon mein raftaar aur aankhon mein apne desh ke liye sammaan rahe',
      'Sada zindabaad mera Hindustan aur ooncha har pal iska naam rahe',
    ],
    linesEnglish: [
      'Keep steady stride in your steps and deep respect for homeland in your eyes',
      'Long live my beloved India, rising brighter in honor with every passing day',
    ],
  },
  {
    title: 'तिरंगे की कसम, वतन की सेवा',
    titleEnglish: 'Oath of Flag and Service',
    linesHindi: [
      'केवल भाषण से नहीं, अपने कर्तव्य से देश को महान बनाना है',
      'तिरंगे की हर फहरान को सचमुच अपनी मेहनत से सजाना है',
    ],
    linesHinglish: [
      'Kewal bhashan se nahin, apne kartavya se desh ko mahaan banana hai',
      'Tirange ki har fehraan ko sachmuch apni mehnat se sajaana hai',
    ],
    linesEnglish: [
      'Not through speeches alone, but by daily duty we make the nation great',
      'Every ripple of the tricolor deserves to be adorned by honest work',
    ],
  },
  {
    title: 'गणतंत्र की पावन भोर',
    titleEnglish: 'Sacred Dawn of Republic',
    linesHindi: [
      'छब्बीस जनवरी की सुबह हर आँगन में नई उमंग जगाती है',
      'मिट्टी से उठती सोंधी खुशबू माँ भारती का प्यार लुटाती है',
    ],
    linesHinglish: [
      'Chhabbees January ki subah har aangan mein nayi umang jagaati hai',
      'Mitti se uthti sondhi khushboo Maa Bharati ka pyaar lutaati hai',
    ],
    linesEnglish: [
      'Twenty-sixth January dawns with bright enthusiasm in every courtyard',
      'Earthy fragrance rising from the soil showers Mother India’s affection',
    ],
  },
  {
    title: 'अशोक चक्र की निरंतर गति',
    titleEnglish: 'Unceasing Motion of Ashoka Chakra',
    linesHindi: [
      'नीला चक्र सिखाता है कि रुकना नहीं, निरंतर आगे बढ़ना ही जीवन है',
      'धर्म, न्याय और परिश्रम की राह ही सच्चे भारतवर्ष का दर्पण है',
    ],
    linesHinglish: [
      'Neela chakra sikhata hai ki rukna nahin, nirantar aage badhna hi jeevan hai',
      'Dharm, nyaay aur parishram ki raah hi sacche Bharatvarsh ka darpan hai',
    ],
    linesEnglish: [
      'The navy wheel teaches us never to halt, for steady motion is life itself',
      'Truth, justice, and diligence form the true mirror of India',
    ],
  },
  {
    title: 'किसान के पसीने का भारत',
    titleEnglish: 'India of Farmer Sweat',
    linesHindi: [
      'खेतों की हरियाली में भी तिरंगे का हरा रंग साँस लेता है',
      'मेहनतकश किसान हर साल देश की थाली में उम्मीदें परोस देता है',
    ],
    linesHinglish: [
      'Kheton ki hariyali mein bhi tirange ka hara rang saans leta hai',
      'Mehnatkash kisaan har saal desh ki thaali mein ummeedein paros deta hai',
    ],
    linesEnglish: [
      'In emerald fields too, the green stripe of our tricolor breathes deeply',
      'Hardworking farmers serve fresh hope upon the nation’s plate each year',
    ],
  },
  {
    title: 'सीमा पर जागता पहरेदार',
    titleEnglish: 'Sentinel Awake on Border',
    linesHindi: [
      'हम घरों में चैन की धूप सेंकते हैं क्योंकि सरहद पर कोई जाग रहा है',
      'बर्फ़ीली हवाओं में खड़ा जवान अपनी जवानी वतन पर वार रहा है',
    ],
    linesHinglish: [
      'Hum gharon mein chain ki dhoop senkte hain kyunki sarhad par koi jaag raha hai',
      'Barfeeli hawaon mein khada jawaan apni jawaani watan par waar raha hai',
    ],
    linesEnglish: [
      'We bask safely in winter sun because a sentinel stays awake at the frontier',
      'Standing against icy winds, a soldier offers his youth to the homeland',
    ],
  },
  {
    title: 'स्कूल के मैदान की परेड',
    titleEnglish: 'Schoolyard Parade Morning',
    linesHindi: [
      'सफ़ेद कपड़ों में सजे बच्चों के हाथ जब सलामी में उठ जाते हैं',
      'बूढ़े बरगद भी मुस्कराकर भारत के सुनहरे कल को दुआ दे जाते हैं',
    ],
    linesHinglish: [
      'Safed kapdon mein saje bachchon ke haath jab salaami mein uth jaate hain',
      'Boodhe bargad bhi muskuraakar Bharat ke sunahare kal ko dua de jaate hain',
    ],
    linesEnglish: [
      'When children in crisp white raise tiny hands in morning salute',
      'Even old banyan trees smile and bless India’s golden tomorrow',
    ],
  },
  {
    title: 'बाबा साहेब की लेखनी का तेज',
    titleEnglish: 'Brilliance of Constitution Makers',
    linesHindi: [
      'तलवारों से जीती धरती को क़लम की ताक़त ने गणतंत्र बनाया',
      'हर कमजोर के हाथ में बराबर अधिकार का पावन दीप जलाया',
    ],
    linesHinglish: [
      'Talwaaron se jeeti dharti ko kalam ki taakat ne gantantra banaya',
      'Har kamzor ke haath mein baraabar adhikaar ka paavan deep jalaya',
    ],
    linesEnglish: [
      'The power of the pen shaped a hard-won land into a living Republic',
      'It placed a sacred lamp of equal rights in every citizen’s hands',
    ],
  },
  {
    title: 'एकता की सुगंधित माला',
    titleEnglish: 'Fragrant Garland of Unity',
    linesHindi: [
      'भाषाएँ अनेक हैं, पहनावे अलग हैं, पर धड़कन सबकी एक ही है',
      'गंगा से कावेरी तक हर नदी ने भारत माँ के चरणों में ही राह ली है',
    ],
    linesHinglish: [
      'Bhashaayein anek hain, pehnave alag hain, par dhadkan sabki ek hi hai',
      'Ganga se Kaveri tak har nadi ne Bharat Maa ke charnon mein hi raah li hai',
    ],
    linesEnglish: [
      'Our tongues and attire differ, yet every heartbeat shares one rhythm',
      'From Ganga to Kaveri, every river bows gently at Mother India’s feet',
    ],
  },
  {
    title: 'केसरिया त्याग की गाथा',
    titleEnglish: 'Tale of Saffron Sacrifice',
    linesHindi: [
      'सबसे ऊपर का केसरिया रंग यूँ ही नहीं आसमान से बातें करता है',
      'इसमें अनगिनत बलिदानियों का उजला इतिहास चुपचाप धड़कता है',
    ],
    linesHinglish: [
      'Sabse upar ka kesariya rang yoon hi nahin aasmaan se baatein karta hai',
      'Ismein anginat balidaaniyon ka ujla itihaas chupchaap dhadakta hai',
    ],
    linesEnglish: [
      'That topmost saffron band does not converse with skies by mere chance',
      'Within it beats the luminous story of countless selfless martyrs',
    ],
  },
  {
    title: 'शांति का श्वेत संदेश',
    titleEnglish: 'White Message of Peace',
    linesHindi: [
      'सफ़ेद पट्टी कहती है कि हम अमन के पुजारी और सच्चाई के राही हैं',
      'पूरी दुनिया को वसुधैव कुटुंबकम सिखाने वाले भारत के सिपाही हैं',
    ],
    linesHinglish: [
      'Safed patti kehti hai ki hum aman ke pujari aur sacchaai ke raahi hain',
      'Poori duniya ko Vasudhaiva Kutumbakam sikhane waale Bharat ke sipahi hain',
    ],
    linesEnglish: [
      'The white band declares us seekers of peace and travelers of truth',
      'We carry India’s timeless lesson that the whole world is one family',
    ],
  },
  {
    title: 'लड्डू और राष्ट्रगान की मिठास',
    titleEnglish: 'Sweetness of Laddoo and Anthem',
    linesHindi: [
      'बचपन की छब्बीस जनवरी आज भी जेहन में ताज़ा तस्वीर जगाती है',
      'जन गण मन के बाद मिली बूंदी की मिठास अलग ही ख़ुशी दे जाती है',
    ],
    linesHinglish: [
      'Bachpan ki chhabbees January aaj bhi zehan mein taaza tasveer jagaati hai',
      'Jana Gana Mana ke baad mili boondi ki mithaas alag hi khushi de jaati hai',
    ],
    linesEnglish: [
      'Childhood Republic Days still paint vivid pictures across our memory',
      'Sweet laddoos shared right after the anthem carried unmatched joy',
    ],
  },
  {
    title: 'राजपथ से कर्तव्य पथ तक',
    titleEnglish: 'Path of Duty and Pride',
    linesHindi: [
      'अधिकारों की बातें बहुत हुईं, अब कर्तव्य पथ पर कदम बढ़ाना है',
      'अपने छोटे-छोटे अच्छे कामों से इस मुल्क को और हसीन बनाना है',
    ],
    linesHinglish: [
      'Adhikaaron ki baatein bahut huin, ab kartavya path par kadam badhana hai',
      'Apne chhote-chhote achhe kaamon se is mulk ko aur haseen banana hai',
    ],
    linesEnglish: [
      'Enough has been spoken of rights; now we stride firmly down Duty Path',
      'Small honest deeds every day will make this homeland lovelier still',
    ],
  },
  {
    title: 'शहीदों की माताओं को प्रणाम',
    titleEnglish: 'Salute to Mothers of Martyrs',
    linesHindi: [
      'सलाम उन माताओं की कोख को जिन्होंने वतन को ऐसे हीरे दिए',
      'खुद आँसू पी लिए मगर भारत माँ के आँगन में उजाले भर दिए',
    ],
    linesHinglish: [
      'Salaam un maataon ki kokh ko jinhone watan ko aise heere diye',
      'Khud aansu pi liye magar Bharat Maa ke aangan mein ujaale bhar diye',
    ],
    linesEnglish: [
      'Bow in reverence to mothers who gave such priceless gems to India',
      'Swallowing quiet tears, they filled Mother India’s courtyard with light',
    ],
  },
  {
    title: 'तिरंगा सिर्फ़ कपड़ा नहीं',
    titleEnglish: 'Not Mere Cloth But Honor',
    linesHindi: [
      'यह तीन रंगों का कपड़ा नहीं, सवा सौ करोड़ से ज़्यादा साँसों की शान है',
      'जहाँ भी यह गर्व से लहराता है, वहाँ झुकता सारा जहान है',
    ],
    linesHinglish: [
      'Yah teen rangon ka kapda nahin, sawa sau karod se zyada saanson ki shaan hai',
      'Jahaan bhi yah garv se lehraata hai, wahaan jhukta saara jahaan hai',
    ],
    linesEnglish: [
      'This is no simple fabric, but the pride of over a billion breaths',
      'Wherever it ripples proudly, the entire horizon offers respect',
    ],
  },
  {
    title: 'गूँजती हुई बूटों की थाप',
    titleEnglish: 'Echo of Marching Boots',
    linesHindi: [
      'सड़क पर पड़ती एक लय में बूटों की थाप दिल को रोमांचित करती है',
      'हर भारतवासी के भीतर नए साहस और विश्वास का संचार करती है',
    ],
    linesHinglish: [
      'Sadak par padti ek lay mein booton ki thaap dil ko romanchit karti hai',
      'Har Bharatvaasi ke bheetar naye saahas aur vishwaas ka sanchar karti hai',
    ],
    linesEnglish: [
      'The synchronized beat of marching boots thrills every watching heart',
      'It sends fresh courage and steady faith rippling through the nation',
    ],
  },
  {
    title: 'गाँव की पगडंडी का गौरव',
    titleEnglish: 'Pride of Village Trail',
    linesHindi: [
      'सिर्फ़ दिल्ली के मंच पर नहीं, हर गाँव के चौराहे पर गणतंत्र बसता है',
      'जब कच्ची पगडंडी पर तिरंगा उड़ता है तो पूरा आसमान हँसता है',
    ],
    linesHinglish: [
      'Sirf Dilli ke manch par nahin, har gaanv ke chauraha par gantantra basta hai',
      'Jab kacchi pagdandi par tiranga udta hai to poora aasmaan hansta hai',
    ],
    linesEnglish: [
      'Not just on grand capital avenues, the Republic lives in every village square',
      'When the tricolor rises over dusty paths, the whole sky smiles',
    ],
  },
  {
    title: 'न्याय की अखंड ज्योत',
    titleEnglish: 'Unbroken Flame of Justice',
    linesHindi: [
      'कानून के सामने हर नागरिक बराबर है, यही हमारी सबसे बड़ी ताक़त है',
      'सच्चाई को बचाए रखना ही आज के समय की सबसे सच्ची इबादत है',
    ],
    linesHinglish: [
      'Kanoon ke saamne har naagrik baraabar hai, yahi hamaari sabse badi taakat hai',
      'Sacchaai ko bachaye rakhna hi aaj ke samay ki sabse sacchi ibaadat hai',
    ],
    linesEnglish: [
      'Equal standing before the law remains our proudest civic pillar',
      'Guarding truth without fear is the highest service of our age',
    ],
  },
  {
    title: 'युवा कंधों पर कल का भारत',
    titleEnglish: 'Tomorrow on Youth Shoulders',
    linesHindi: [
      'नए विचार, नई तकनीक और दिल में पुराना संस्कार लिए युवा चल रहे हैं',
      'सपनों के भारत को हकीक़त में बदलने के लिए दिन-रात जल रहे हैं',
    ],
    linesHinglish: [
      'Naye vichaar, nayi takneek aur dil mein purana sanskaar liye yuva chal rahe hain',
      'Sapnon ke Bharat ko haqeeqat mein badalne ke liye din-raat jal rahe hain',
    ],
    linesEnglish: [
      'Carrying bold ideas and timeless values, youth step toward tomorrow',
      'They burn quietly day and night to turn dreamed-of India into reality',
    ],
  },
  {
    title: 'वतन से मोहब्बत का इज़हार',
    titleEnglish: 'Declaration of Love for Homeland',
    linesHindi: [
      'इश्क़ के तो कई किस्से सुने होंगे, कभी वतन से इश्क़ करके देखो',
      'मिट्टी को माथे से लगाते ही हर थकान दूर हो जाती है, आज़माकर देखो',
    ],
    linesHinglish: [
      'Ishq ke to kai kisse sune honge, kabhi watan se ishq karke dekho',
      'Mitti ko maathe se lagaate hi har thakaan door ho jaati hai, aazmaakar dekho',
    ],
    linesEnglish: [
      'You have heard many tales of romance—now try falling in love with homeland',
      'Pressing native dust to your brow melts every weariness away',
    ],
  },
  {
    title: 'आसमान में तिरंगी उड़ान',
    titleEnglish: 'Tricolor Flight Across Sky',
    linesHindi: [
      'जब आसमान में विमान तीन रंगों की रेखाएँ पीछे छोड़ जाते हैं',
      'तब नीचे खड़े करोड़ों चेहरों पर आँसू और मुस्कान एक साथ खिल आते हैं',
    ],
    linesHinglish: [
      'Jab aasmaan mein vimaan teen rangon ki rekhaayein peechhe chhod jaate hain',
      'Tab neeche khade karodon chehron par aansu aur muskaan ek saath khil aate hain',
    ],
    linesEnglish: [
      'When jets streak bright saffron, white, and green across the winter sky',
      'Tears of pride and beaming smiles bloom together on watching faces',
    ],
  },
  {
    title: 'स्वच्छ और सुंदर भारत का सपना',
    titleEnglish: 'Dream of Clean Beautiful India',
    linesHindi: [
      'देश से प्यार है तो उसकी गली-मोहल्लों को भी साफ रखना सीखें हम',
      'काग़ज़ पर नहीं, अपनी आदतों में गणतंत्र की मर्यादा लिखें हम',
    ],
    linesHinglish: [
      'Desh se pyaar hai to uski gali-mohallon ko bhi saaf rakhna seekhein hum',
      'Kagaz par nahin, apni aadaton mein gantantra ki maryada likhein hum',
    ],
    linesEnglish: [
      'If we truly love our land, let us keep every lane clean and welcoming',
      'Inscribe the grace of our Republic in daily habits, not just on paper',
    ],
  },
  {
    title: 'बलिदानियों की अनसुनी कहानियाँ',
    titleEnglish: 'Unsung Tales of Freedom Heroes',
    linesHindi: [
      'जिनके नाम इतिहास की किताबों में छपे नहीं, वे भी हमारे ही नायक थे',
      'हर गुमनाम क्रांतिकारी के कारण ही हम आज़ादी के लायक थे',
    ],
    linesHinglish: [
      'Jinke naam itihaas ki kitaabon mein chhape nahin, we bhi hamaare hi naayak the',
      'Har gumnaam krantikari ke kaaran hi hum aazaadi ke laayak the',
    ],
    linesEnglish: [
      'Even those whose names missed textbooks were fearless heroes of ours',
      'Through every unsung patriot we inherited the gift of free skies',
    ],
  },
  {
    title: 'संविधान की आत्मा: बंधुत्व',
    titleEnglish: 'Brotherhood Soul of Constitution',
    linesHindi: [
      'पड़ोसी के दुख में हाथ बंटाना ही सबसे बड़ा राष्ट्रीय धर्म है',
      'जहाँ इंसान इंसान का सम्मान करे, वही गणतंत्र सबसे गर्म और नर्म है',
    ],
    linesHinglish: [
      'Padosi ke dukh mein haath bantaana hi sabse bada rashtriya dharm hai',
      'Jahaan insaan insaan ka sammaan kare, wahi gantantra sabse garm aur narm hai',
    ],
    linesEnglish: [
      'Standing beside a neighbor in sorrow is the truest civic duty',
      'Where humans honor one another warmly, the Republic shines brightest',
    ],
  },
  {
    title: 'सियाचिन से कन्याकुमारी तक',
    titleEnglish: 'From Siachen to Kanyakumari',
    linesHindi: [
      'बर्फ़ीले पहाड़ों से लेकर समंदर के किनारों तक एक ही नाम गूँजता है',
      'भारत माता की जय सुनते ही हर दिल में अनोखा जोश फूटता है',
    ],
    linesHinglish: [
      'Barfeele pahaadon se lekar samandar ke kinaaron tak ek hi naam goonjta hai',
      'Bharat Mata ki Jai sunte hi har dil mein anokha josh phoot-ta hai',
    ],
    linesEnglish: [
      'From frozen Himalayan ridges to southern shores rings one proud name',
      'Hearing Victory to Mother India ignites rare spirit in every chest',
    ],
  },
  {
    title: 'छोटी सी गुड़िया के हाथ तिरंगा',
    titleEnglish: 'Tiny Hands Holding Flag',
    linesHindi: [
      'जब किसी नन्ही सी बच्ची के हाथ में काग़ज़ का तिरंगा लहराता है',
      'तो लगता है पूरा देश सुरक्षित भविष्य की गोद में मुस्कुराता है',
    ],
    linesHinglish: [
      'Jab kisi nanhi si bachchi ke haath mein kagaz ka tiranga lehraata hai',
      'To lagta hai poora desh surakshit bhavishya ki god mein muskurata hai',
    ],
    linesEnglish: [
      'When a little girl waves a paper tricolor with innocent delight',
      'The entire nation seems to smile safely in tomorrow’s gentle lap',
    ],
  },
  {
    title: 'शिक्षा से सशक्त गणतंत्र',
    titleEnglish: 'Republic Empowered by Learning',
    linesHindi: [
      'हर बच्चे के हाथ में किताब पहुँचे, तब असली गणतंत्र साकार होगा',
      'ज्ञान के उजाले से ही भारत का हर कोना रोशन और खुशहाल होगा',
    ],
    linesHinglish: [
      'Har bachche ke haath mein kitaab pahunche, tab asli gantantra saakaar hoga',
      'Gyaan ke ujaale se hi Bharat ka har kona roshan aur khushhaal hoga',
    ],
    linesEnglish: [
      'When books reach every child’s hands, our Republic blooms completely',
      'By the lamp of learning every corner of India grows radiant and thriving',
    ],
  },
  {
    title: 'ताक़त नहीं, शालीनता की पहचान',
    titleEnglish: 'Known for Grace Not Arrogance',
    linesHindi: [
      'हमने कभी किसी की धरती छीनी नहीं, हमेशा ज्ञान और प्रेम बाँटा है',
      'इसीलिए सदियों के तूफ़ानों के बाद भी भारत अपना अडिग काँटा है',
    ],
    linesHinglish: [
      'Humne kabhi kisi ki dharti chheeni nahin, hamesha gyaan aur prem baanta hai',
      'Isiliye sadiyon ke toofanon ke baad bhi Bharat apna adig kaanta hai',
    ],
    linesEnglish: [
      'We never coveted another’s soil, sharing wisdom and friendship instead',
      'That grace keeps India standing unbroken through centuries of storms',
    ],
  },
  {
    title: 'शाम के वक़्त ध्वज संकलन',
    titleEnglish: 'Evening Retreat With Honor',
    linesHindi: [
      'सूरज ढलते ही जब सम्मान के साथ ध्वज को उतारा जाता है',
      'तब अनुशासन और गरिमा का हर सबक़ दिल में उतारा जाता है',
    ],
    linesHinglish: [
      'Sooraj dhalte hi jab sammaan ke saath dhwaj ko utaara jaata hai',
      'Tab anushasan aur garima ka har sabak dil mein utaara jaata hai',
    ],
    linesEnglish: [
      'As sunset arrives and the flag is lowered with quiet ceremony',
      'Every lesson of discipline and dignity settles deep within the soul',
    ],
  },
  {
    title: 'लोकतंत्र का सबसे बड़ा पर्व',
    titleEnglish: 'Grandest Festival of Democracy',
    linesHindi: [
      'धर्म-जाति से ऊपर उठकर जो देश के लिए सोचे वही सच्चा इंसान है',
      'अनेकता में एकता ही हमारे गणतंत्र की सबसे प्यारी पहचान है',
    ],
    linesHinglish: [
      'Dharm-jaati se upar uthkar jo desh ke liye soche wahi saccha insaan hai',
      'Anekta mein ekta hi hamaare gantantra ki sabse pyaari pehchaan hai',
    ],
    linesEnglish: [
      'Whoever rises above narrow divides to think of India stands tallest',
      'Unity woven from rich diversity remains our Republic’s finest jewel',
    ],
  },
  {
    title: 'ज़मीन, भाषा और संविधान का गर्व',
    titleEnglish: 'Pride of Land Language and Law',
    linesHindi: [
      'माथे पर लगा देश की मिट्टी का तिलक किसी भी मुकुट से भारी है',
      'हमें अपनी ज़मीन, अपनी भाषा और अपने संविधान पर गर्व अपार है',
    ],
    linesHinglish: [
      'Maathe par laga desh ki mitti ka tilak kisi bhi mukut se bhaari hai',
      'Humein apni zameen, apni bhasha aur apne samvidhan par garv apaar hai',
    ],
    linesEnglish: [
      'A mark of native earth on the brow outweighs any royal crown',
      'We hold boundless pride in our soil, languages, and Constitution',
    ],
  },
  {
    title: 'नारी शक्ति का बढ़ता परचम',
    titleEnglish: 'Rising Banner of Women Power',
    linesHindi: [
      'कदम से कदम मिलाकर बेटियाँ आज आसमान की ऊँचाइयाँ नाप रही हैं',
      'परेड से लेकर अंतरिक्ष तक भारत का गौरव नया लिख डाल रही हैं',
    ],
    linesHinglish: [
      'Kadam se kadam milaakar betiyaan aaj aasmaan ki oonchaaiyan naap rahi hain',
      'Parade se lekar antariksh tak Bharat ka gaurav naya likh daal rahi hain',
    ],
    linesEnglish: [
      'Marching side by side, daughters of India measure sky-high summits',
      'From parade avenues to outer space, they author fresh national glory',
    ],
  },
  {
    title: 'शांति और शौर्य का संगम',
    titleEnglish: 'Confluence of Peace and Valor',
    linesHindi: [
      'हम बुद्ध की करुणा भी जानते हैं और राणा-शिवाजी का शौर्य भी रखते हैं',
      'जो दोस्ती बढ़ाए उसे गले लगाते हैं, आँख दिखाने वाले को जवाब देते हैं',
    ],
    linesHinglish: [
      'Hum Buddh ki karuna bhi jaante hain aur Rana-Shivaji ka shaurya bhi rakhte hain',
      'Jo dosti badhaaye use gale lagaate hain, aankh dikhane waale ko jawaab dete hain',
    ],
    linesEnglish: [
      'We carry Buddha’s compassion alongside fierce historic valor',
      'We embrace every hand of peace yet answer aggression with calm resolve',
    ],
  },
  {
    title: 'गणतंत्र की सुनहरी शाम',
    titleEnglish: 'Golden Evening of Republic',
    linesHindi: [
      'रोशनी में नहाई इमारतें जब तीन रंगों में सज उठती हैं',
      'तब दिल्ली की सर्दी में भी देशप्रेम की गर्माहटें जग उठती हैं',
    ],
    linesHinglish: [
      'Roshni mein nahaayi imaaratein jab teen rangon mein saj uthti hain',
      'Tab Dilli ki sardi mein bhi deshprem ki garmaahtein jag uthti hain',
    ],
    linesEnglish: [
      'When illuminated stone landmarks glow softly in tricolor radiance',
      'Even winter chill warms with quiet affection for the homeland',
    ],
  },
  {
    title: 'हर धड़कन में वंदे मातरम',
    titleEnglish: 'Vande Mataram in Every Beat',
    linesHindi: [
      'साँसों की सरगम में जब वंदे मातरम का सुर मिल जाता है',
      'तब साधारण सा मनुष्य भी फौलादी इरादों से भर जाता है',
    ],
    linesHinglish: [
      'Saanson ki sargam mein jab Vande Mataram ka sur mil jaata hai',
      'Tab sadharan sa manushya bhi faulaadi iraadon se bhar jaata hai',
    ],
    linesEnglish: [
      'When Vande Mataram weaves its melody into the cadence of breath',
      'Even an ordinary soul fills quickly with steel-strong resolve',
    ],
  },
  {
    title: 'तिरंगे की लाज बचाना है',
    titleEnglish: 'Upholding Honor of Flag',
    linesHindi: [
      'असली देशभक्ति तब है जब हम अपने काम में ईमानदारी बरतें',
      'बिना शोर किए अपने हिस्से का भारत हर रोज़ बेहतर करते रहें',
    ],
    linesHinglish: [
      'Asli deshbhakti tab hai jab hum apne kaam mein imaandaari bartein',
      'Bina shor kiye apne hisse ka Bharat har roz behtar karte rahein',
    ],
    linesEnglish: [
      'True patriotism shines whenever we bring honesty to our own work',
      'Quietly bettering our small corner of India each passing day',
    ],
  },
  {
    title: 'विविध रंगों का एक ही चित्र',
    titleEnglish: 'One Portrait of Many Hues',
    linesHindi: [
      'कश्मीर की वादियों से केरल के समंदर तक एक ही गुलदस्ता है',
      'इस विविधता में ही मेरे भारत का अनोखा और सुंदर रास्ता है',
    ],
    linesHinglish: [
      'Kashmir ki waadiyon se Kerala ke samandar tak ek hi guldasta hai',
      'Is vividhta mein hi mere Bharat ka anokha aur sundar raasta hai',
    ],
    linesEnglish: [
      'From Kashmir’s valleys to Kerala’s shores blooms one vibrant bouquet',
      'Within this rich tapestry lies India’s rare and graceful path',
    ],
  },
  {
    title: 'वीरों की अमर शहादत',
    titleEnglish: 'Immortal Sacrifice of Braves',
    linesHindi: [
      'जो तिरंगे में लिपटकर घर लौटे, उनकी अमर कहानी कभी नहीं मरेगी',
      'हर आने वाली पीढ़ी उनके चरणों में श्रद्धा के फूल धरेगी',
    ],
    linesHinglish: [
      'Jo tirange mein lipatkar ghar laute, unki amar kahaani kabhi nahin maregi',
      'Har aane waali peedhi unke charnon mein shraddha ke phool dharegi',
    ],
    linesEnglish: [
      'Those who returned wrapped in the tricolor leave tales that never fade',
      'Every future generation will lay flowers of gratitude at their memory',
    ],
  },
  {
    title: 'नए युग का डिजिटल और हरित भारत',
    titleEnglish: 'Green and Modern New India',
    linesHindi: [
      'एक हाथ में हरित धरती का संकल्प और दूसरे में विज्ञान की उड़ान हो',
      'प्रगति ऐसी हो जहाँ हर इंसान का सुखी, सुरक्षित और ऊँचा मुकाम हो',
    ],
    linesHinglish: [
      'Ek haath mein harit dharti ka sankalp aur doosre mein vigyaan ki udaan ho',
      'Pragati aisi ho jahaan har insaan ka sukhi, surakshit aur ooncha mukaam ho',
    ],
    linesEnglish: [
      'Hold a green earth promise in one hand and scientific flight in the other',
      'May progress raise every citizen into peace, dignity, and safety',
    ],
  },
  {
    title: 'बचपन की सुबह की प्रभातफेरी',
    titleEnglish: 'Morning Procession of Childhood',
    linesHindi: [
      'ठंडी सुबह में नारों की गूँज और हाथों में छोटे-छोटे झंडे याद आते हैं',
      'छब्बीस जनवरी आते ही पुराने स्कूल और दोस्त बहुत याद आते हैं',
    ],
    linesHinglish: [
      'Thandi subah mein naaron ki goonj aur haathon mein chhote-chhote jhande yaad aate hain',
      'Chhabbees January aate hi purane school aur dost bahut yaad aate hain',
    ],
    linesEnglish: [
      'Chilly mornings echoing with cheers and tiny flags return vividly',
      'Each January twenty-sixth brings back old schoolyards and dear friends',
    ],
  },
  {
    title: 'संविधान की प्रस्तावना का भाव',
    titleEnglish: 'Spirit of Preamble Words',
    linesHindi: [
      'हम भारत के लोग—सिर्फ़ शब्द नहीं, पूरे राष्ट्र का साझा वचन है',
      'इसी विश्वास पर टिका सदियों पुराना यह लोकतांत्रिक चमन है',
    ],
    linesHinglish: [
      'Hum Bharat ke log—sirf shabd nahin, poore rashtra ka saajha vachan hai',
      'Isi vishwaas par tika sadiyon purana yah loktantrik chaman hai',
    ],
    linesEnglish: [
      'We, the People of India—no mere phrasing, but a shared national vow',
      'Upon that trust rests this enduring democratic garden of ours',
    ],
  },
  {
    title: 'हवाओं में घुलती देशभक्ति',
    titleEnglish: 'Patriotism Blending in Breeze',
    linesHindi: [
      'आज की हवा में भी कुछ अलग सा नशा और सुकून घुला हुआ है',
      'हर चौराहे पर देशभक्ति के गीतों से दिल जुड़ा हुआ है',
    ],
    linesHinglish: [
      'Aaj ki hawa mein bhi kuch alag sa nasha aur sukoon ghula hua hai',
      'Har chauraha par deshbhakti ke geeton se dil juda hua hai',
    ],
    linesEnglish: [
      'Today’s winter air carries an unmistakable blend of peace and pride',
      'Every street corner binds hearts together through patriotic melodies',
    ],
  },
  {
    title: 'मातृभूमि का कर्ज़',
    titleEnglish: 'Debt to Motherland',
    linesHindi: [
      'इस ज़मीन ने हमें साँस दी, नाम दिया और सिर उठाकर जीना सिखाया',
      'हम भी कुछ ऐसा करें कि भारत को हम पर गर्व हो, यही फ़र्ज़ निभाया',
    ],
    linesHinglish: [
      'Is zameen ne humein saans di, naam diya aur sir uthakar jeena sikhaya',
      'Hum bhi kuch aisa karein ki Bharat ko hum par garv ho, yahi farz nibhaya',
    ],
    linesEnglish: [
      'This land gifted us breath, identity, and the grace to stand tall',
      'Let us live so India feels proud to call us children of her soil',
    ],
  },
  {
    title: 'शांतिदूत भारत की छवि',
    titleEnglish: 'India Messenger of Harmony',
    linesHindi: [
      'जब दुनिया उलझनों में घिरती है तो भारत की ओर उम्मीद से देखती है',
      'हमारी संस्कृति हमेशा जोड़ने, संभालने और मुस्कुराने की सीख देती है',
    ],
    linesHinglish: [
      'Jab duniya uljhanon mein ghirti hai to Bharat ki ore ummeed se dekhti hai',
      'Hamaari sanskriti hamesha jodne, sambhaalne aur muskurane ki seekh deti hai',
    ],
    linesEnglish: [
      'When turbulent times shake the globe, eyes turn toward India for calm',
      'Our heritage forever teaches healing, steadiness, and open warmth',
    ],
  },
  {
    title: 'मेहनत से चमकता तिरंगा',
    titleEnglish: 'Tricolor Lit by Effort',
    linesHindi: [
      'मजदूर के पसीने और वैज्ञानिक की खोज से ही देश आगे जाता है',
      'हर ईमानदार नागरिक चुपचाप गणतंत्र को और मज़बूत बनाता है',
    ],
    linesHinglish: [
      'Mazdoor ke paseene aur vaigyanik ki khoj se hi desh aage jaata hai',
      'Har imaandaar naagrik chupchaap gantantra ko aur mazboot banata hai',
    ],
    linesEnglish: [
      'Through workers’ sweat and scientists’ discovery the nation marches forward',
      'Every honest citizen quietly fortifies the strength of our Republic',
    ],
  },
  {
    title: 'जनवरी की धूप और झंडावंदन',
    titleEnglish: 'Winter Sun and Flag Hoisting',
    linesHindi: [
      'ठिठुरती सुबह पर जब गुनगुनी धूप तिरंगे को चूमती है',
      'तो हर दिल के आँगन में अमन और उम्मीद की बयार झूमती है',
    ],
    linesHinglish: [
      'Thithurti subah par jab gunguni dhoop tirange ko choomti hai',
      'To har dil ke aangan mein aman aur ummeed ki bayaar jhoomti hai',
    ],
    linesEnglish: [
      'When gentle morning sunlight warms the hoisted tricolor in cold air',
      'Breezes of peace and bright hope dance through every courtyard',
    ],
  },
  {
    title: 'संप्रभुता की अमर गूँज',
    titleEnglish: 'Eternal Echo of Sovereignty',
    linesHindi: [
      'अपने फैसले खुद लेने का यह हक अनगिनत आँसुओं से कमाया गया',
      'इस आज़ाद गणतंत्र को बड़े जतन और तपस्या से सजाया गया',
    ],
    linesHinglish: [
      'Apne faisle khud lene ka yah haq anginat aansuon se kamaya gaya',
      'Is aazaad gantantra ko bade jatan aur tapasya se sajaaya gaya',
    ],
    linesEnglish: [
      'The right to chart our own destiny was won through countless sacrifices',
      'This free Republic was crafted with immense care, wisdom, and devotion',
    ],
  },
  {
    title: 'हर घर तिरंगा, हर मन गौरव',
    titleEnglish: 'Flag in Every Home and Heart',
    linesHindi: [
      'छत पर लहराता तिरंगा बाहर से ज़्यादा भीतर की पहचान जगाता है',
      'हम सब एक ही परिवार के हिस्से हैं, यह एहसास दिल को भाता है',
    ],
    linesHinglish: [
      'Chhat par lehraata tiranga baahar se zyada bheetar ki pehchaan jagaata hai',
      'Hum sab ek hi parivaar ke hisse hain, yah ehsaas dil ko bhaata hai',
    ],
    linesEnglish: [
      'The flag fluttering above our rooftops awakens an inner bond first',
      'It reminds us sweetly that all Indians belong to one vast family',
    ],
  },
  {
    title: 'प्रगति और परंपरा का संतुलन',
    titleEnglish: 'Balance of Roots and Progress',
    linesHindi: [
      'जड़ें अगर मज़बूत रहें तो नई शाखें आसमान छू लेती हैं',
      'संस्कृति और आधुनिकता साथ चलें तो भारत को नई ऊर्जा देती हैं',
    ],
    linesHinglish: [
      'Jadein agar mazboot rahein to nayi shaakhein aasmaan chhoo leti hain',
      'Sanskriti aur aadhunikta saath chalein to Bharat ko nayi oorja deti hain',
    ],
    linesEnglish: [
      'When deep roots hold steady, young branches easily reach the sky',
      'Tradition and innovation walking hand in hand power India upward',
    ],
  },
  {
    title: 'फौजी भाइयों की मुस्कान',
    titleEnglish: 'Smiles of Our Brave Soldiers',
    linesHindi: [
      'सरहद से आई एक तस्वीर भी पूरे परिवार का हौसला बढ़ा देती है',
      'वतन की रक्षा करने वालों की मुस्कान हर डर को हरा देती है',
    ],
    linesHinglish: [
      'Sarhad se aayi ek tasveer bhi poore parivaar ka hausla badha deti hai',
      'Watan ki raksha karne waalon ki muskaan har dar ko hara deti hai',
    ],
    linesEnglish: [
      'A single snapshot sent from the border lifts the spirits of millions',
      'The bright smile of our defenders quietly defeats every trace of fear',
    ],
  },
  {
    title: 'न्याय, स्वतंत्रता और समता',
    titleEnglish: 'Justice Liberty and Equality',
    linesHindi: [
      'तीन स्तंभों पर खड़ा यह भवन कभी झुकने न पाए यही अरमान है',
      'न्याय, आज़ादी और बराबरी से ही बनता भारत महान है',
    ],
    linesHinglish: [
      'Teen stambhon par khada yah bhavan kabhi jhukne na paaye yahi armaan hai',
      'Nyaay, aazaadi aur baraabari se hi banta Bharat mahaan hai',
    ],
    linesEnglish: [
      'May this house built upon three noble pillars stand unshaken forever',
      'Justice, liberty, and equality are what truly make India great',
    ],
  },
  {
    title: 'कला, संगीत और लोकनृत्य',
    titleEnglish: 'Folk Art Music and Dance',
    linesHindi: [
      'परेड की हर झाँकी में भारत के कोने-कोने की आत्मा झलकती है',
      'ढोल, नगाड़े और लोकगीतों में इस धरती की जीवंतता खनकती है',
    ],
    linesHinglish: [
      'Parade ki har jhaanki mein Bharat ke kone-kone ki aatma jhalakti hai',
      'Dhol, nagaade aur lokgeeton mein is dharti ki jeevant-ta khanakti hai',
    ],
    linesEnglish: [
      'Every tableau in the parade reflects the vibrant soul of India’s regions',
      'Drums, melodies, and folk rhythms ring with this land’s living spirit',
    ],
  },
  {
    title: 'परेड देखते दादा-पोते',
    titleEnglish: 'Grandfather and Child Watching Parade',
    linesHindi: [
      'दादा जी जब परेड दिखाते हुए आज़ादी के किस्से सुनाते हैं',
      'तो नन्ही आँखों में देशप्रेम के सुनहरे सपने सजाते हैं',
    ],
    linesHinglish: [
      'Dada ji jab parade dikhaate hue aazaadi ke kisse sunaate hain',
      'To nanhi aankhon mein deshprem ke sunahare sapne sajaate hain',
    ],
    linesEnglish: [
      'When grandparents narrate freedom stories while watching the morning parade',
      'Golden sparks of love for homeland light up young watching eyes',
    ],
  },
  {
    title: 'मज़बूत इरादों की धरती',
    titleEnglish: 'Land of Unshakable Resolve',
    linesHindi: [
      'हमें मुश्किलों ने कई बार परखा पर हर बार और निखरकर आए हैं',
      'गिरकर फिर उठना और मुस्कुराना यही तो हम सदियों से लाए हैं',
    ],
    linesHinglish: [
      'Humein mushkilon ne kai baar parkha par har baar aur nikharkar aaye hain',
      'Girkar phir uthna aur muskurana yahi to hum sadiyon se laaye hain',
    ],
    linesEnglish: [
      'Hardships tested us often, yet every storm left us stronger and wiser',
      'Rising again with quiet grace has been India’s timeless heritage',
    ],
  },
  {
    title: 'भारत माँ की गोद का सुकून',
    titleEnglish: 'Peace in Homeland Embrace',
    linesHindi: [
      'दुनिया की किसी भी दौलत में वो चैन कहाँ जो अपने वतन में मिलता है',
      'विदेश की चमक से ज़्यादा प्यारा अपने गाँव-शहर का आँगन लगता है',
    ],
    linesHinglish: [
      'Duniya ki kisi bhi daulat mein wo chain kahaan jo apne watan mein milta hai',
      'Videsh ki chamak se zyada pyaara apne gaanv-sheher ka aangan lagta hai',
    ],
    linesEnglish: [
      'No distant luxury holds the calm found in our own motherland',
      'Far dearer than foreign neon shines the simple warmth of home soil',
    ],
  },
  {
    title: 'शांति से भरी तिरंगी सुबह',
    titleEnglish: 'Peaceful Tricolor Morning',
    linesHindi: [
      'बंदूक से नहीं, विचारों और सद्भाव से दुनिया जीती जाती है',
      'तिरंगे की हर सलामी यही खूबसूरत बात दोहराती है',
    ],
    linesHinglish: [
      'Bandook se nahin, vichaaron aur sadbhaav se duniya jeeti jaati hai',
      'Tirange ki har salaami yahi khoobsurat baat dohraati hai',
    ],
    linesEnglish: [
      'Hearts across the world are won not by force, but by wisdom and goodwill',
      'Every salute to our tricolor gently echoes that noble conviction',
    ],
  },
  {
    title: 'नए सपनों का सूरज',
    titleEnglish: 'Sun of Fresh Aspirations',
    linesHindi: [
      'नया सवेरा कह रहा है कि अब आलस्य छोड़कर निर्माण करना है',
      'हर भारतवासी के जीवन को बेहतर और खुशहाल करना है',
    ],
    linesHinglish: [
      'Naya savera keh raha hai ki ab aalasya chhodkar nirmaan karna hai',
      'Har Bharatvaasi ke jeevan ko behtar aur khushhaal karna hai',
    ],
    linesEnglish: [
      'This bright morning calls us to set hesitation aside and build anew',
      'Let us uplift the daily life of every fellow citizen across the land',
    ],
  },
  {
    title: 'सत्य और अहिंसा का आभूषण',
    titleEnglish: 'Jewel of Truth and Nonviolence',
    linesHindi: [
      'अहिंसा कमजोरी नहीं, सबसे बहादुर इंसान का गहना होती है',
      'सच्चे पथ पर चलने की हिम्मत हर तूफ़ान से बड़ी होती है',
    ],
    linesHinglish: [
      'Ahinsa kamzori nahin, sabse bahaadur insaan ka gehna hoti hai',
      'Sacche path par chalne ki himmat har toofaan se badi hoti hai',
    ],
    linesEnglish: [
      'Nonviolence is never weakness, but the ornament of the bravest heart',
      'The courage to walk truthfully stands taller than any gathering storm',
    ],
  },
  {
    title: 'तिरंगे की तरह निखरता जीवन',
    titleEnglish: 'Life Shining Like Tricolor',
    linesHindi: [
      'कर्म में केसरिया उत्साह हो, विचारों में श्वेत शांति बसती रहे',
      'और जीवन में हरियाली की तरह खुशियों की बगिया महकती रहे',
    ],
    linesHinglish: [
      'Karm mein kesariya utsaah ho, vichaaron mein shwet shaanti basti rahe',
      'Aur jeevan mein hariyali ki tarah khushiyon ki bagiya mehakti rahe',
    ],
    linesEnglish: [
      'Hold saffron energy in action and pure white calm within your thoughts',
      'May your life bloom like green meadows filled with lasting joy',
    ],
  },
  {
    title: 'हिमालय सा अडिग हौसला',
    titleEnglish: 'Steadfast Courage Like Himalayas',
    linesHindi: [
      'हिमालय की तरह अडिग रहकर हमने हर चुनौती को स्वीकारा है',
      'मुश्किल राहों पर भी मुस्कुराते हुए अपना कल सँवारा है',
    ],
    linesHinglish: [
      'Himalaya ki tarah adig rehkar humne har chunauti ko sweekara hai',
      'Mushkil raahon par bhi muskurate hue apna kal sanwara hai',
    ],
    linesEnglish: [
      'Standing steadfast as the Himalayas, we faced every trial head-on',
      'Even along steep paths we kept smiling and shaped a brighter future',
    ],
  },
  {
    title: 'वतन के नाम एक दुआ',
    titleEnglish: 'Prayer Named for Homeland',
    linesHindi: [
      'मेरा देश सदा महकता रहे, कोई आँख कभी उदास न हो',
      'हर बच्चे को मिले उजाला, किसी आँगन में निराशा का वास न हो',
    ],
    linesHinglish: [
      'Mera desh sada mehakta rahe, koi aankh kabhi udaas na ho',
      'Har bachche ko mile ujaala, kisi aangan mein niraasha ka vaas na ho',
    ],
    linesEnglish: [
      'May my country bloom forever and no citizen’s eyes ever dim in sorrow',
      'May every child find opportunity and no home know quiet despair',
    ],
  },
  {
    title: 'नदियों की तरह बहता भाईचारा',
    titleEnglish: 'Brotherhood Flowing Like Rivers',
    linesHindi: [
      'नदियाँ कभी पूछकर नहीं बहतीं कि किसका खेत और किसका गाँव है',
      'हम भी सबके लिए प्रेम रखें, यही असली भारतीय स्वभाव है',
    ],
    linesHinglish: [
      'Nadiyaan kabhi poochhkar nahin behtin ki kiska khet aur kiska gaanv hai',
      'Hum bhi sabke liye prem rakhein, yahi asli Bharatiya swabhav hai',
    ],
    linesEnglish: [
      'Rivers never ask whose field or village they nourish as they flow',
      'Extending warmth to everyone alike is India’s truest character',
    ],
  },
  {
    title: 'तिरंगे से लिपटी भावनाएँ',
    titleEnglish: 'Emotions Wrapped in Tricolor',
    linesHindi: [
      'चाहे देश में रहें या सात समंदर पार, वतन दिल से कभी नहीं जाता',
      'एक तिरंगा दिखते ही हर परदेसी का मन अपने घर लौट आता',
    ],
    linesHinglish: [
      'Chaahe desh mein rahein ya saat samandar paar, watan dil se kabhi nahin jaata',
      'Ek tiranga dikhte hi har pardesi ka man apne ghar laut aata',
    ],
    linesEnglish: [
      'Whether at home or seven seas away, homeland never leaves the heart',
      'One glimpse of the tricolor brings every distant traveler straight home',
    ],
  },
  {
    title: 'सच्चे नागरिक की पहचान',
    titleEnglish: 'Mark of True Citizen',
    linesHindi: [
      'ट्रैफ़िक नियम मानने से लेकर पेड़ लगाने तक सब देशसेवा है',
      'छोटी-छोटी जिम्मेदारियों से ही बनता राष्ट्र का असली खेवा है',
    ],
    linesHinglish: [
      'Traffic niyam maanne se lekar ped lagaane tak sab deshseva hai',
      'Chhoti-chhoti zimmedariyon se hi banta rashtra ka asli khewa hai',
    ],
    linesEnglish: [
      'From obeying road rules to planting saplings, every care serves the land',
      'Small everyday responsibilities steer the nation smoothly forward',
    ],
  },
  {
    title: 'गणतंत्र की अखंड ज्योति',
    titleEnglish: 'Eternal Flame of Republic',
    linesHindi: [
      'अमर जवान ज्योति पर जलती लौ हर पल याद दिलाती है',
      'हमारी आज़ादी किसी के अनमोल बलिदान की कहानी सुनाती है',
    ],
    linesHinglish: [
      'Amar Jawan Jyoti par jalti lau har pal yaad dilaati hai',
      'Hamaari aazaadi kisi ke anmol balidaan ki kahaani sunaati hai',
    ],
    linesEnglish: [
      'The eternal memorial flame reminds us softly every single hour',
      'Our freedom speaks tenderly of someone’s priceless sacrifice',
    ],
  },
  {
    title: 'ज्ञान और संस्कृति की धरोहर',
    titleEnglish: 'Heritage of Wisdom and Culture',
    linesHindi: [
      'वेदांत से लेकर शून्य की खोज तक, हमने विश्व को राह दिखाई है',
      'अब नई सदी में भी भारत ने अपनी मेधा की छाप जमाई है',
    ],
    linesHinglish: [
      'Vedant se lekar shoonya ki khoj tak, humne vishwa ko raah dikhaayi hai',
      'Ab nayi sadi mein bhi Bharat ne apni medha ki chhaap jamaayi hai',
    ],
    linesEnglish: [
      'From ancient philosophy to the birth of zero, India lit human thought',
      'In this new century too, our ingenuity leaves a bright global mark',
    ],
  },
  {
    title: 'जन-गण-मन का पावन स्वर',
    titleEnglish: 'Sacred Notes of National Anthem',
    linesHindi: [
      'बावन सेकंड के राष्ट्रगान में पूरा हिंदुस्तान सिमटकर आ जाता है',
      'सीना तन जाता है, आँखें नम होती हैं और हर मन खिल जाता है',
    ],
    linesHinglish: [
      'Bawan second ke rashtragaan mein poora Hindustan simatkar aa jaata hai',
      'Seena tan jaata hai, aankhein nam hoti hain aur har man khil jaata hai',
    ],
    linesEnglish: [
      'Within fifty-two seconds of the anthem, all of India gathers into one',
      'Shoulders straighten, eyes glisten softly, and every spirit swells with pride',
    ],
  },
  {
    title: 'ग्राम स्वराज का उजाला',
    titleEnglish: 'Light of Self-Reliant Villages',
    linesHindi: [
      'गाँव खुशहाल होंगे तो शहर खुद-ब-खुद मुस्करा उठेंगे',
      'आत्मनिर्भर भारत के सपने हर आँगन में फूल बनकर खिल उठेंगे',
    ],
    linesHinglish: [
      'Gaanv khushhaal honge to sheher khud-ba-khud muskara uthenge',
      'Aatmanirbhar Bharat ke sapne har aangan mein phool bankar khil uthenge',
    ],
    linesEnglish: [
      'When villages thrive in peace, cities naturally smile brighter too',
      'Dreams of a self-reliant India will blossom across every courtyard',
    ],
  },
  {
    title: 'मातृभूमि के चरणों में वंदन',
    titleEnglish: 'Bow at Motherland Feet',
    linesHindi: [
      'सूरज की पहली किरण के साथ भारत माता को नमन करते हैं',
      'सुख-दुख में सदा तेरा मान बढ़े, यही दिल से अर्पण करते हैं',
    ],
    linesHinglish: [
      'Sooraj ki pehli kiran ke saath Bharat Mata ko naman karte hain',
      'Sukh-dukh mein sada tera maan badhe, yahi dil se arpan karte hain',
    ],
    linesEnglish: [
      'With the very first ray of dawn, we bow humbly to Mother India',
      'May your dignity rise through every season—this is our heartfelt offering',
    ],
  },
  {
    title: 'हर दिल में बसता तिरंगा',
    titleEnglish: 'Tricolor Dwelling in Every Heart',
    linesHindi: [
      'बाहर झंडा लहराने से पहले भीतर तिरंगे की सोच बसा लें हम',
      'सच्चाई, अमन और मेहनत से अपने भारत को स्वर्ग बना लें हम',
    ],
    linesHinglish: [
      'Baahar jhanda lehraane se pehle bheetar tirange ki soch basa lein hum',
      'Sacchaai, aman aur mehnat se apne Bharat ko swarg bana lein hum',
    ],
    linesEnglish: [
      'Before hoisting flags outdoors, let us plant tricolor ideals within',
      'Through honesty, peace, and steady toil let us turn India into paradise',
    ],
  },
  {
    title: 'छब्बीस जनवरी का अमिट गौरव',
    titleEnglish: 'Indelible Pride of 26 January',
    linesHindi: [
      'यह दिन कैलेंडर की एक तारीख़ नहीं, हमारे आत्मसम्मान का उत्सव है',
      'संविधान की रक्षा और देश की एकता ही हमारा सबसे बड़ा प्रण है',
    ],
    linesHinglish: [
      'Yah din calendar ki ek taareekh nahin, hamaare aatmasammaan ka utsav hai',
      'Samvidhan ki raksha aur desh ki ekta hi hamaara sabse bada pran hai',
    ],
    linesEnglish: [
      'This day is no ordinary calendar date, but a festival of national self-respect',
      'Guarding our Constitution and unity remains our foremost vow',
    ],
  },
  {
    title: 'मेहनतकश भारत की जय',
    titleEnglish: 'Victory to Hardworking India',
    linesHindi: [
      'सुबह से शाम तक पसीना बहाने वाले हर हाथ को हमारा सलाम है',
      'उन्हीं की बदौलत चलता हुआ यह प्यारा और महान हिंदुस्तान है',
    ],
    linesHinglish: [
      'Subah se shaam tak paseena bahaane waale har haath ko hamaara salaam hai',
      'Unhi ki badaulat chalta hua yah pyaara aur mahaan Hindustan hai',
    ],
    linesEnglish: [
      'Salute to every working hand that toils honestly from dawn till dusk',
      'By their steady grace moves this beloved and mighty India',
    ],
  },
  {
    title: 'आसमान छूती उम्मीदें',
    titleEnglish: 'Sky-High Hopes of Nation',
    linesHindi: [
      'कल से बेहतर आज है और आज से कहीं ज़्यादा उजला कल होगा',
      'जब इरादे नेक और कदम एक हों तो हर समस्या का हल होगा',
    ],
    linesHinglish: [
      'Kal se behtar aaj hai aur aaj se kahin zyada ujla kal hoga',
      'Jab irade nek aur kadam ek hon to har samasya ka hal hoga',
    ],
    linesEnglish: [
      'Today outshines yesterday, and tomorrow will glow brighter still',
      'When intentions stay pure and steps stay united, every challenge yields',
    ],
  },
  {
    title: 'गणतंत्र की पावन हवाएँ',
    titleEnglish: 'Sacred Winds of Republic Day',
    linesHindi: [
      'पेड़ों की पत्तियाँ भी आज तिरंगे की लय में झूमती दिखती हैं',
      'हर शहर की गलियाँ देशभक्ति के मीठे रंगों में सजी मिलती हैं',
    ],
    linesHinglish: [
      'Pedon ki pattiyaan bhi aaj tirange ki lay mein jhoomti dikhti hain',
      'Har sheher ki galiyaan deshbhakti ke meethe rangon mein saji milti hain',
    ],
    linesEnglish: [
      'Even tree leaves seem to sway to the gentle rhythm of the tricolor today',
      'Lanes across every town glow warmly in cheerful patriotic colors',
    ],
  },
  {
    title: 'वतन की आन पर निसार',
    titleEnglish: 'Devoted to Nation Dignity',
    linesHindi: [
      'हम छोटे हों या बड़े, देश की प्रतिष्ठा की जिम्मेदारी सबकी है',
      'मिलजुलकर आगे बढ़ें तो पूरी दुनिया में पहचान अपनी ही पक्की है',
    ],
    linesHinglish: [
      'Hum chhote hon ya bade, desh ki pratishtha ki zimmedari sabki hai',
      'Miljulkar aage badhein to poori duniya mein pehchaan apni hi pakki hai',
    ],
    linesEnglish: [
      'Young or old, upholding India’s good name belongs equally to us all',
      'Striding forward hand in hand, our place of respect shines worldwide',
    ],
  },
  {
    title: 'न्याय और समानता की पावन पुस्तक',
    titleEnglish: 'Sacred Book of Justice and Equality',
    linesHindi: [
      'एक किताब ने करोड़ों विविध सपनों को एक ही सूत्र में पिरो दिया',
      'असमानताओं के अंधेरे को न्याय के सूरज से हमेशा के लिए धो दिया',
    ],
    linesHinglish: [
      'Ek kitaab ne karodon vividh sapnon ko ek hi sootra mein piro diya',
      'Asmaantaon ke andhere ko nyaay ke sooraj se hamesha ke liye dho diya',
    ],
    linesEnglish: [
      'One sacred book wove billions of varied dreams into a single thread',
      'It washed away shadows of inequality beneath the sun of justice',
    ],
  },
  {
    title: 'नौजवानों की आँखों में भारत',
    titleEnglish: 'India in Youthful Eyes',
    linesHindi: [
      'किताबों, प्रयोगशालाओं और खेल के मैदानों में नया भारत धड़क रहा है',
      'हर युवा अपने हुनर से तिरंगे के मान में नया सितारा जड़ रहा है',
    ],
    linesHinglish: [
      'Kitaabon, prayogshalaon aur khel ke maidaanon mein naya Bharat dhadak raha hai',
      'Har yuva apne hunar se tirange ke maan mein naya sitara jad raha hai',
    ],
    linesEnglish: [
      'In libraries, labs, and playing fields, a confident new India beats alive',
      'Young talent sets fresh stars upon the crown of our tricolor daily',
    ],
  },
  {
    title: 'सपनों के साकार होने का पर्व',
    titleEnglish: 'Festival of Realized Dreams',
    linesHindi: [
      'आज़ादी के मतवालों ने जो भारत सोचा था, उसे और सुंदर बनाना है',
      'गरीबी और अशिक्षा को हराकर हर चेहरे पर मुस्कान लाना है',
    ],
    linesHinglish: [
      'Aazaadi ke matwaalon ne jo Bharat socha tha, use aur sundar banana hai',
      'Gareebi aur ashiksha ko haraakar har chehre par muskaan laana hai',
    ],
    linesEnglish: [
      'The India our freedom fighters envisioned must grow lovelier in our hands',
      'Defeating hardship and ignorance, we bring smiles to every doorstep',
    ],
  },
  {
    title: 'समंदर से ऊँचे पर्वत तक',
    titleEnglish: 'From Seas to Lofty Peaks',
    linesHindi: [
      'नीले समंदर की लहरें भी आज भारत की जय का गान गाती हैं',
      'बर्फ़ीली चोटियाँ शांत खड़े होकर तिरंगे को शीश झुकाती हैं',
    ],
    linesHinglish: [
      'Neele samandar ki lehrein bhi aaj Bharat ki jai ka gaan gaati hain',
      'Barfeeli chotiyaan shaant khade hokar tirange ko sheesh jhukaati hain',
    ],
    linesEnglish: [
      'Blue ocean waves sing joyful praise along our shores today',
      'Quiet snow peaks stand tall and bow in honor of the tricolor',
    ],
  },
  {
    title: 'अमन और दोस्ती का पैग़ाम',
    titleEnglish: 'Message of Peace and Friendship',
    linesHindi: [
      'प्यार बाँटने से बढ़ता है, यह बात हमारी मिट्टी ने दुनिया को सिखाई है',
      'गणतंत्र दिवस पर हर दिल ने अमन की यही दुआ फिर दोहराई है',
    ],
    linesHinglish: [
      'Pyaar baantne se badhta hai, yah baat hamaari mitti ne duniya ko sikhaayi hai',
      'Gantantra Diwas par har dil ne aman ki yahi dua phir dohraayi hai',
    ],
    linesEnglish: [
      'Love multiplies when shared—a truth our soil taught the wider world',
      'On Republic Day every heart repeats this gentle prayer for peace',
    ],
  },
  {
    title: 'सच्चे कर्मों की पूजा',
    titleEnglish: 'Worship Through Honest Deeds',
    linesHindi: [
      'तिरंगे को सिर्फ़ एक दिन नहीं, साल के हर दिन दिल में सहेजना है',
      'अपने व्यवहार और मेहनत से देश का नाम आसमान तक भेजना है',
    ],
    linesHinglish: [
      'Tirange ko sirf ek din nahin, saal ke har din dil mein sahejna hai',
      'Apne vyavahaar aur mehnat se desh ka naam aasmaan tak bhejna hai',
    ],
    linesEnglish: [
      'Cherish the tricolor not for one morning alone, but through all 365 days',
      'Lift India’s good name skyward through kindness and steady labor',
    ],
  },
  {
    title: 'गर्वित माताओं और बहनों को नमन',
    titleEnglish: 'Tribute to Proud Women of India',
    linesHindi: [
      'घर संभालने से लेकर देश चलाने तक हर भूमिका में नारी महान है',
      'उनकी मुस्कान और शक्ति से ही संपूर्ण होता अपना हिंदुस्तान है',
    ],
    linesHinglish: [
      'Ghar sambhaalne se lekar desh chalaane tak har bhoomika mein naari mahaan hai',
      'Unki muskaan aur shakti se hi sampoorn hota apna Hindustan hai',
    ],
    linesEnglish: [
      'From nurturing homes to leading the nation, women stand tall in grace',
      'Through their quiet strength and wisdom, India stands truly whole',
    ],
  },
  {
    title: 'परेड की अनुशासित शोभा',
    titleEnglish: 'Disciplined Grace of Parade',
    linesHindi: [
      'हज़ारों कदम जब एक ही ताल में चलते हैं तो चमत्कार दिखता है',
      'यही एकता पूरे देश के अनुशासन और संकल्प का आधार लिखता है',
    ],
    linesHinglish: [
      'Hazaaron kadam jab ek hi taal mein chalte hain to chamatkaar dikhta hai',
      'Yahi ekta poore desh ke anushasan aur sankalp ka aadhaar likhta hai',
    ],
    linesEnglish: [
      'When thousands of footsteps strike in unison, quiet magic unfolds',
      'That harmony mirrors the discipline and unity holding our land firm',
    ],
  },
  {
    title: 'तिरंगा मेरा अभिमान',
    titleEnglish: 'Tricolor My Timeless Pride',
    linesHindi: [
      'ख़ुद को खुशकिस्मत समझता हूँ कि इस पावन धरती पर जन्म मिला है',
      'तिरंगे की छाया में हर ख्वाब को खिलने का सुनहरा अवसर मिला है',
    ],
    linesHinglish: [
      'Khud ko khushkismat samajhta hoon ki is paavan dharti par janm mila hai',
      'Tirange ki chhaaya mein har khwaab ko khilne ka sunahara avsar mila hai',
    ],
    linesEnglish: [
      'I count myself deeply blessed to be born upon this sacred soil',
      'Beneath the tricolor’s shelter, every honest dream finds room to bloom',
    ],
  },
  {
    title: 'कविता और गीतों से सजा मंच',
    titleEnglish: 'Stage Graced With Patriotic Verse',
    linesHindi: [
      'जब कोई बच्चा मंच से देशभक्ति की दो लाइनें गर्व से बोलता है',
      'तो सभागार में बैठा हर इंसान भावविभोर होकर तालियाँ खोलता है',
    ],
    linesHinglish: [
      'Jab koi bachcha manch se deshbhakti ki do linein garv se bolta hai',
      'To sabhaagaar mein baitha har insaan bhavvibhor hokar taaliyaan kholta hai',
    ],
    linesEnglish: [
      'When a young child recites two patriotic lines proudly from the stage',
      'Every listener in the hall bursts into warm, moved applause',
    ],
  },
  {
    title: 'आज़ादी की कीमत का बोध',
    titleEnglish: 'Awareness of Freedom Price',
    linesHindi: [
      'जो सुकून हमें आसानी से मिला, उसके पीछे सदियों का संघर्ष था',
      'हर स्वतंत्रता सेनानी के मन में बस अपने भारत का ही हर्ष था',
    ],
    linesHinglish: [
      'Jo sukoon humein aasaani se mila, uske peechhe sadiyon ka sangharsh tha',
      'Har swatantrata senani ke man mein bas apne Bharat ka hi harsh tha',
    ],
    linesEnglish: [
      'Behind the peace we breathe so freely lay centuries of tireless struggle',
      'Every freedom fighter carried only India’s bright dawn within their heart',
    ],
  },
  {
    title: 'मिट्टी से जुड़ी संस्कृति',
    titleEnglish: 'Culture Rooted in Earth',
    linesHindi: [
      'हमारे त्योहार, हमारी बोली और हमारे संस्कार ही हमारी असली दौलत हैं',
      'दुनिया घूम लें पर इस अपनापन जैसी कहीं और नहीं मिलती मोहलत है',
    ],
    linesHinglish: [
      'Hamaare tyohaar, hamaari boli aur hamaare sanskaar hi hamaari asli daulat hain',
      'Duniya ghoom lein par is apnapan jaisi kahin aur nahin milti mohlat hai',
    ],
    linesEnglish: [
      'Our festivals, dialects, and values form our most enduring wealth',
      'Travel the whole world over, yet nowhere matches this tender belonging',
    ],
  },
  {
    title: 'धूप में चमकता अशोक स्तंभ',
    titleEnglish: 'Lion Capital Gleaming in Sun',
    linesHindi: [
      'चारों दिशाओं को देखते सिंह हमारे साहस और सतर्कता के प्रतीक हैं',
      'सत्य के मार्ग पर अडिग चलने के यह पावन और प्राचीन गीत हैं',
    ],
    linesHinglish: [
      'Chaaron dishaon ko dekhte singh hamaare saahas aur satarkta ke prateek hain',
      'Satya ke maarg par adig chalne ke yah paavan aur pracheen geet hain',
    ],
    linesEnglish: [
      'Gazing in all directions, the four lions symbolize vigilance and grace',
      'They sing an ancient reminder to stand unyielding upon truth’s road',
    ],
  },
  {
    title: 'सपनों के भारत की तस्वीर',
    titleEnglish: 'Portrait of Ideal India',
    linesHindi: [
      'जहाँ हर बुजुर्ग को सम्मान और हर युवा को अवसर मिले भरपूर',
      'ऐसा सुंदर भारत बने जो हर आँख में रोशनी और दिल में रखे नूर',
    ],
    linesHinglish: [
      'Jahaan har bujurg ko sammaan aur har yuva ko avsar mile bharpoor',
      'Aisa sundar Bharat bane jo har aankh mein roshni aur dil mein rakhe noor',
    ],
    linesEnglish: [
      'Where every elder knows respect and every youth finds open doors',
      'May we shape an India glowing with quiet light in every heart',
    ],
  },
  {
    title: 'तिरंगे को आँखों से लगाना',
    titleEnglish: 'Holding Tricolor Near Heart',
    linesHindi: [
      'ज़मीन पर गिरा एक छोटा कागज़ी झंडा भी उठाकर संभाल लेना चाहिए',
      'सच्चा देशप्रेम इन्हीं छोटी संवेदनाओं में हमेशा दिखाई देना चाहिए',
    ],
    linesHinglish: [
      'Zameen par gira ek chhota kagazi jhanda bhi uthakar sambhaal lena chahiye',
      'Saccha deshprem inhi chhoti samvednaon mein hamesha dikhaayi dena chahiye',
    ],
    linesEnglish: [
      'Even a tiny fallen paper flag deserves to be lifted gently with care',
      'Genuine love of country reveals itself through such quiet mindfulness',
    ],
  },
  {
    title: 'अंतरिक्ष में भारत के कदम',
    titleEnglish: 'India Striding Through Space',
    linesHindi: [
      'चाँद और सूरज तक पहुँचकर हमने दुनिया को अपना कौशल दिखाया है',
      'कम खर्च और बड़े हौसले से भारत ने नया इतिहास रचाया है',
    ],
    linesHinglish: [
      'Chaand aur sooraj tak pahunchkar humne duniya ko apna kaushal dikhaya hai',
      'Kam kharch aur bade hausle se Bharat ne naya itihaas rachaya hai',
    ],
    linesEnglish: [
      'Reaching moon and sun alike, India showed the world its quiet skill',
      'With modest means and mighty courage, our scientists wrote bright history',
    ],
  },
  {
    title: 'दिलों को जोड़ने वाला पर्व',
    titleEnglish: 'Festival Uniting All Hearts',
    linesHindi: [
      'छब्बीस जनवरी हर धर्म, भाषा और उम्र के लोगों को एक लाइन में लाती है',
      'एक साथ तिरंगे के नीचे खड़े होकर सबकी साँस देश बन जाती है',
    ],
    linesHinglish: [
      'Chhabbees January har dharm, bhasha aur umr ke logon ko ek line mein laati hai',
      'Ek saath tirange ke neeche khade hokar sabki saans desh ban jaati hai',
    ],
    linesEnglish: [
      'January twenty-sixth gathers every faith, tongue, and age side by side',
      'Standing together beneath the tricolor, every breath becomes one nation',
    ],
  },
  {
    title: 'शहीदों के नाम एक दीप',
    titleEnglish: 'A Lamp for Fallen Heroes',
    linesHindi: [
      'शाम को एक दीया उन वीरों के नाम भी ज़रूर जलाना आज',
      'जिनकी बदौलत सलामत है हमारे सिर पर आज़ादी का ताज',
    ],
    linesHinglish: [
      'Shaam ko ek diya un veeron ke naam bhi zaroor jalaana aaj',
      'Jinki badaulat salamat hai hamaare sir par aazaadi ka taaj',
    ],
    linesEnglish: [
      'Light one quiet lamp this evening in memory of our fallen braves',
      'Through their courage, freedom’s gentle crown rests safely upon us',
    ],
  },
  {
    title: 'सद्भाव की मीठी बयार',
    titleEnglish: 'Sweet Breeze of Goodwill',
    linesHindi: [
      'दीवारें उठाने से ज़्यादा सुंदर पुल बनाना होता है हर समाज में',
      'प्यार और भरोसे की ईंटों से ही चमकता है देश हर अंदाज़ में',
    ],
    linesHinglish: [
      'Deewarein uthane se zyada sundar pul banana hota hai har samaaj mein',
      'Pyaar aur bharose ki eenton se hi chamakta hai desh har andaaz mein',
    ],
    linesEnglish: [
      'Building bridges always shines far lovelier than raising walls between us',
      'Bricks of warmth and mutual trust make the whole nation gleam',
    ],
  },
  {
    title: 'खेत, खलिहान और खुशहाली',
    titleEnglish: 'Fields Harvests and Prosperity',
    linesHindi: [
      'लहलहाती फ़सलों को देखकर लगता है धरती माँ खुद मुस्करा रही है',
      'मेहनत की खुशबू पूरे देश को जीवन और उम्मीद दे रही है',
    ],
    linesHinglish: [
      'Lehlehaati fasalon ko dekhkar lagta hai dharti Maa khud muskara rahi hai',
      'Mehnat ki khushboo poore desh ko jeevan aur ummeed de rahi hai',
    ],
    linesEnglish: [
      'Watching golden crops sway makes it seem Mother Earth smiles herself',
      'The honest scent of harvest fills the nation with sustenance and hope',
    ],
  },
  {
    title: 'छब्बीस जनवरी की सुबह का जोश',
    titleEnglish: 'Morning Zeal of 26 January',
    linesHindi: [
      'सुबह आँख खुलते ही मन में अजीब सा गर्व और उत्साह जागता है',
      'भारतवासी होने का एहसास हर दिन से कुछ खास और पावन लगता है',
    ],
    linesHinglish: [
      'Subah aankh khulte hi man mein ajeeb sa garv aur utsaah jaagta hai',
      'Bharatvaasi hone ka ehsaas har din se kuch khaas aur paavan lagta hai',
    ],
    linesEnglish: [
      'Upon waking this morning, a rare warmth of pride stirs in the chest',
      'Belonging to India feels even deeper and more sacred than usual today',
    ],
  },
  {
    title: 'सच्चे रास्ते की रोशनी',
    titleEnglish: 'Light Along Honest Path',
    linesHindi: [
      'झूठ और स्वार्थ की आंधियाँ कभी किसी देश को बड़ा नहीं बनातीं',
      'सदाचार और सच्चाई की नींव ही राष्ट्र को सदियों तक बचातीं',
    ],
    linesHinglish: [
      'Jhooth aur swaarth ki aandhiyaan kabhi kisi desh ko bada nahin banaatin',
      'Sadaachar aur sacchaai ki neev hi rashtra ko sadiyon tak bachaatin',
    ],
    linesEnglish: [
      'Whirlwinds of deceit and greed never made any civilization endure',
      'Only foundations of integrity and truth sustain a nation across ages',
    ],
  },
  {
    title: 'कंधे से कंधा मिलाकर चलें',
    titleEnglish: 'Walking Shoulder to Shoulder',
    linesHindi: [
      'अगर हम एक-दूसरे का हाथ पकड़ लें तो कोई मुश्किल बड़ी नहीं है',
      'एकजुट भारत के आगे दुनिया की कोई चुनौती अड़ी नहीं है',
    ],
    linesHinglish: [
      'Agar hum ek-doosre ka haath pakad lein to koi mushkil badi nahin hai',
      'Ekjut Bharat ke aage duniya ki koi chunauti adi nahin hai',
    ],
    linesEnglish: [
      'If we clasp one another’s hands firmly, no obstacle looks too tall',
      'Before a united India, no challenge on earth can stand in the way',
    ],
  },
  {
    title: 'संविधान के अक्षरों में जीवन',
    titleEnglish: 'Life Within Sacred Articles',
    linesHindi: [
      'काग़ज़ पर लिखी धाराएँ तब जीवंत होती हैं जब हम उन्हें जीते हैं',
      'हर अन्याय के विरुद्ध शांत और मज़बूत आवाज़ बनकर उठते हैं',
    ],
    linesHinglish: [
      'Kagaz par likhi dhaarayein tab jeevant hoti hain jab hum unhein jeete hain',
      'Har anyaay ke viruddh shaant aur mazboot aawaaz bankar uthte hain',
    ],
    linesEnglish: [
      'Written articles spring truly alive only when we practice them daily',
      'Standing calm yet firm beside justice brings our Constitution to life',
    ],
  },
  {
    title: 'धरा से अंबर तक सम्मान',
    titleEnglish: 'Honor From Earth to Sky',
    linesHindi: [
      'धरा भी तेरी है अंबर भी तेरा है, हे भारत तू सबसे न्यारा है',
      'करोड़ों दिलों की धड़कन में बसता तू सबसे अज़ीज़ सहारा है',
    ],
    linesHinglish: [
      'Dhara bhi teri hai ambar bhi tera hai, he Bharat tu sabse nyaara hai',
      'Karodon dilon ki dhadkan mein basta tu sabse azeez sahaara hai',
    ],
    linesEnglish: [
      'Earth and open sky both echo your beauty—O India, none shines like you',
      'Within millions of beating hearts, you live as our dearest refuge',
    ],
  },
  {
    title: 'प्यारे हिंदुस्तान को सलाम',
    titleEnglish: 'Salute to Beloved Hindustan',
    linesHindi: [
      'तेरी नदियों, पहाड़ों और गलियों से हमने जीवन का हर रंग पाया है',
      'तेरे ही आँचल में रहकर हमने खुद को महफ़ूज़ और खुश पाया है',
    ],
    linesHinglish: [
      'Teri nadiyon, pahaadon aur galiyon se humne jeevan ka har rang paaya hai',
      'Tere hi aanchal mein rehkar humne khud ko mehfooz aur khush paaya hai',
    ],
    linesEnglish: [
      'From your rivers, mountains, and lanes we learned every hue of life',
      'Sheltered in your warm embrace, we found safety and lasting gladness',
    ],
  },
  {
    title: 'नए भारत की मधुर ध्वनि',
    titleEnglish: 'Sweet Melody of New India',
    linesHindi: [
      'विज्ञान के मंत्र और परंपरा की वीणा आज एक सुर में बज रहे हैं',
      'गणतंत्र दिवस पर नए कीर्तिमान भारत के माथे पर सज रहे हैं',
    ],
    linesHinglish: [
      'Vigyaan ke mantra aur parampara ki veena aaj ek sur mein baj rahe hain',
      'Gantantra Diwas par naye keertimaan Bharat ke maathe par saj rahe hain',
    ],
    linesEnglish: [
      'Chants of science and strings of ancient music play in sweet harmony today',
      'Fresh milestones adorn India’s brow brightly on this Republic Day',
    ],
  },
  {
    title: 'दिल की गहराई से जय हिंद',
    titleEnglish: 'Jai Hind From Heart Depth',
    linesHindi: [
      'ना कोई दिखावा, ना कोई शोर, बस दिल से निकलता एक पावन भाव है',
      'जय हिंद बोलते ही लगता जैसे सारी दुनिया में अपना ही लगाव है',
    ],
    linesHinglish: [
      'Na koi dikhawa, na koi shor, bas dil se nikalta ek paavan bhaav hai',
      'Jai Hind bolte hi lagta jaise saari duniya mein apna hi lagaav hai',
    ],
    linesEnglish: [
      'No empty show, no hollow clamor—only a pure feeling rising from within',
      'Saying Jai Hind fills the whole wide world with warm belonging',
    ],
  },
  {
    title: 'गुलिस्ताँ अपना सदा खिला रहे',
    titleEnglish: 'May Our Garden Bloom Always',
    linesHindi: [
      'बगिया में तरह-तरह के फूल हों तभी उसकी सुंदरता निखरती है',
      'सबके साथ और प्रेम से ही मेरे भारत की शान सँवरती है',
    ],
    linesHinglish: [
      'Bagiya mein tarah-tarah ke phool hon tabhi uski sundarta nikharti hai',
      'Sabke saath aur prem se hi mere Bharat ki shaan sanwarti hai',
    ],
    linesEnglish: [
      'A garden glows fairest when many varied blossoms bloom side by side',
      'Through shared care and affection, India’s radiance grows ever brighter',
    ],
  },
  {
    title: 'तिरंगे की छाया में अमन',
    titleEnglish: 'Peace Under Flag Shelter',
    linesHindi: [
      'जहाँ नफ़रत की आग बुझे और मोहब्बत की बारिश होती रहे',
      'तिरंगे की छाया में हर पीढ़ी चैन और अमन से सोती रहे',
    ],
    linesHinglish: [
      'Jahaan nafrat ki aag bujhe aur mohabbat ki baarish hoti rahe',
      'Tirange ki chhaaya mein har peedhi chain aur aman se soti rahe',
    ],
    linesEnglish: [
      'May sparks of bitterness fade away while gentle rains of kindness fall',
      'Beneath the tricolor’s shelter may every generation rest in peace',
    ],
  },
  {
    title: 'देशप्रेम की सच्ची मूरत',
    titleEnglish: 'True Image of Patriotism',
    linesHindi: [
      'किसी जरूरतमंद के आँसू पोंछ देना भी तो देश की सेवा है',
      'इंसानियत बचाए रखना ही हर गणतंत्र का सबसे मीठा मेवा है',
    ],
    linesHinglish: [
      'Kisi zarooratmand ke aansu ponchh dena bhi to desh ki seva hai',
      'Insaaniyat bachaye rakhna hi har gantantra ka sabse meetha mewa hai',
    ],
    linesEnglish: [
      'Wiping tears from a struggling neighbor’s cheek also serves the nation',
      'Preserving gentle humanity remains the finest fruit of our Republic',
    ],
  },
  {
    title: 'शिक्षक, किसान और जवान',
    titleEnglish: 'Teacher Farmer and Soldier',
    linesHindi: [
      'एक सरहद संभालता है, एक खेत और एक आने वाली पीढ़ी गढ़ता है',
      'इन तीनों के बल पर ही अपना भारत हर रोज़ ऊँचा चढ़ता है',
    ],
    linesHinglish: [
      'Ek sarhad sambhalta hai, ek khet aur ek aane waali peedhi gadhta hai',
      'In teenon ke bal par hi apna Bharat har roz ooncha chadhta hai',
    ],
    linesEnglish: [
      'One guards the border, one feeds the land, and one shapes young minds',
      'Resting upon these three quiet pillars, India rises higher every day',
    ],
  },
  {
    title: 'खुशियों से भरा गणतंत्र पर्व',
    titleEnglish: 'Joyful Republic Celebration',
    linesHindi: [
      'हर आँगन में खुशहाली हो, हर हाथ में ईमानदार रोज़गार रहे',
      'छब्बीस जनवरी की तरह हर दिन दिलों में वतन के लिए प्यार रहे',
    ],
    linesHinglish: [
      'Har aangan mein khushhaali ho, har haath mein imaandaar rozgaar rahe',
      'Chhabbees January ki tarah har din dilon mein watan ke liye pyaar rahe',
    ],
    linesEnglish: [
      'May prosperity bless every home and dignified work fill eager hands',
      'Like today’s twenty-sixth January, may love of country live each day',
    ],
  },
  {
    title: 'आने वाले कल को वचन',
    titleEnglish: 'Promise to Coming Generations',
    linesHindi: [
      'आने वाली पीढ़ियों को हम स्वच्छ हवा, पानी और सुरक्षित देश देंगे',
      'अपने छोटे लालच छोड़, हम उन्हें विरासत में उजला परिवेश देंगे',
    ],
    linesHinglish: [
      'Aane waali peedhiyon ko hum swachh hawa, paani aur surakshit desh denge',
      'Apne chhote lalach chhod, hum unhein virasat mein ujla parivesh denge',
    ],
    linesEnglish: [
      'We shall pass clean air, pure rivers, and a safe homeland to our children',
      'Setting petty greed aside, we leave them a luminous inheritance',
    ],
  },
  {
    title: 'केसरिया सुबह का वंदन',
    titleEnglish: 'Saluting Saffron Dawn',
    linesHindi: [
      'सूरज उगते ही लगता है जैसे आसमान ने केसरिया चादर ओढ़ ली हो',
      'और माँ भारती ने अपने हर बच्चे पर ममता की आँख खोल ली हो',
    ],
    linesHinglish: [
      'Sooraj ugte hi lagta hai jaise aasmaan ne kesariya chaadar odh li ho',
      'Aur Maa Bharati ne apne har bachche par mamta ki aankh khol li ho',
    ],
    linesEnglish: [
      'At sunrise it seems the sky itself wraps round in warm saffron silk',
      'While Mother India opens tender, watchful eyes over every child',
    ],
  },
  {
    title: 'बसंती पवन में देशगीत',
    titleEnglish: 'Patriotic Song in Breeze',
    linesHindi: [
      'शीतल पवन में जब पुराने देशभक्ति गीत कानों में घुल जाते हैं',
      'तब बीते युग के सारे वीर जैसे फिर से जीवित नज़र आते हैं',
    ],
    linesHinglish: [
      'Sheetal pawan mein jab purane deshbhakti geet kaanon mein ghul jaate hain',
      'Tab beete yug ke saare veer jaise phir se jeevit nazar aate hain',
    ],
    linesEnglish: [
      'When timeless patriotic songs drift across the crisp morning wind',
      'Heroic spirits of bygone eras seem to walk vividly beside us again',
    ],
  },
  {
    title: 'एकता की अजेय शक्ति',
    titleEnglish: 'Invincible Strength of Unity',
    linesHindi: [
      'अलग-अलग धागे मिल जाएँ तो मज़बूत और सुंदर वस्त्र बन जाता है',
      'जब सारा भारत एक हो जाए तो हर संकट खुद ही डर जाता है',
    ],
    linesHinglish: [
      'Alag-alag dhaage mil jaayein to mazboot aur sundar vastra ban jaata hai',
      'Jab saara Bharat ek ho jaaye to har sankat khud hi dar jaata hai',
    ],
    linesEnglish: [
      'Separate threads woven carefully together become strong, lovely cloth',
      'When all of India stands united, every looming crisis shrinks away',
    ],
  },
  {
    title: 'आज़ादी की पावन महक',
    titleEnglish: 'Sacred Scent of Freedom',
    linesHindi: [
      'आज़ादी केवल बंधन टूटने का नाम नहीं, खुद को सँवारने की ज़िम्मेदारी है',
      'यही समझ हर जागरूक और सच्चे भारतवासी की सबसे बड़ी सवारी है',
    ],
    linesHinglish: [
      'Aazaadi kewal bandhan tootne ka naam nahin, khud ko sanwaarne ki zimmedari hai',
      'Yahi samajh har jaagruk aur sacche Bharatvaasi ki sabse badi sawaari hai',
    ],
    linesEnglish: [
      'Freedom is not merely broken chains, but a duty to better ourselves',
      'That wisdom carries every thoughtful citizen proudly forward',
    ],
  },
  {
    title: 'स्वाभिमान और समता का पथ',
    titleEnglish: 'Path of Dignity and Equality',
    linesHindi: [
      'न किसी के आगे झुकना है, न किसी को नीचा दिखाने की चाह है',
      'समानता और स्वाभिमान से चलना ही भारतीय गणतंत्र की राह है',
    ],
    linesHinglish: [
      'Na kisi ke aage jhukna hai, na kisi ko neecha dikhane ki chaah hai',
      'Samaanta aur swabhimaan se chalna hi Bharatiya gantantra ki raah hai',
    ],
    linesEnglish: [
      'We bow to no arrogance nor wish to look down upon anyone else',
      'Walking with dignity and equality defines India’s Republic road',
    ],
  },
  {
    title: 'भारतवर्ष की अमर कहानी',
    titleEnglish: 'Immortal Story of India',
    linesHindi: [
      'सभ्यताएँ आईं और मिट गईं, पर भारत की आत्मा आज भी युवा है',
      'हर युग में नया रूप धरकर यह धरती सदा मुस्कुराती हुई धुआँ-मुक्त दुआ है',
    ],
    linesHinglish: [
      'Sabhyataayein aayin aur mit gayin, par Bharat ki aatma aaj bhi yuva hai',
      'Har yug mein naya roop dharkar yah dharti sada muskurati hui dua hai',
    ],
    linesEnglish: [
      'Empires rose and faded into dust, yet India’s spirit remains forever young',
      'Renewing gracefully in every age, this sacred land stays a living blessing',
    ],
  },
  {
    title: 'शांति, सद्भाव और प्रगति',
    titleEnglish: 'Peace Harmony and Progress',
    linesHindi: [
      'हाथ में हाथ डालकर चलें तो दूरी कितनी भी हो छोटी हो जाती है',
      'मुस्कुराता हुआ गणतंत्र ही हमारी सबसे सुंदर और सच्ची ख्याति है',
    ],
    linesHinglish: [
      'Haath mein haath daalkar chalein to doori kitni bhi ho chhoti ho jaati hai',
      'Muskurata hua gantantra hi hamaari sabse sundar aur sacchi khyaati hai',
    ],
    linesEnglish: [
      'Walking hand in hand turns even the longest road gentle and short',
      'A smiling, harmonious Republic remains our proudest glory before the world',
    ],
  },
];

export const FESTIVALS_CHRISTMAS_75_TO_200: Shayari[] = buildFestivalShayaris(
  'christmas',
  'क्रिसमस',
  '🎄',
  ['Christmas', 'ChristmasShayari', 'MerryChristmas', 'Festival'],
  126,
  CHRISTMAS_EXTRA_75
);

export const FESTIVALS_REPUBLIC_DAY_175_TO_200: Shayari[] = buildFestivalShayaris(
  'republic-day',
  'गणतंत्र दिवस',
  '🎖️',
  ['RepublicDay', '26January', 'Deshbhakti', 'JaiHind'],
  26,
  REPUBLIC_DAY_EXTRA_175
);

const NEW_YEAR_EXTRA_175: RawFestEntry[] = [
  {
    "title": "आने वाला हर सवेरा — नववर्ष शुभ संदेश",
    "titleEnglish": "May every coming sunrise — New Year Wish",
    "linesHindi": [
      "आने वाला हर सवेरा आपके आँगन में सेहत और सुकून की धूप लाए",
      "नए साल का हर एक पन्ना आपकी मुस्कान की सबसे सुंदर कहानी सुनाए"
    ],
    "linesHinglish": [
      "Aane waala har savera aapke aangan mein sehat aur sukoon ki dhoop laaye",
      "Naye saal ka har ek panna aapki muskaan ki sabse sundar kahaani sunaaye"
    ],
    "linesEnglish": [
      "May every coming sunrise bring steady health and calm sunlight to your door",
      "May every page of the New Year tell sweet stories of smiles forevermore"
    ]
  },
  {
    "title": "दुआ है कि इस — नववर्ष शुभ संदेश",
    "titleEnglish": "I pray this fresh — New Year Wish",
    "linesHindi": [
      "दुआ है कि इस नए साल आपकी मेहनत को मिले आसमान जैसी ऊँचाई",
      "और आपके घर में सदा गूंजती रहे माँ की ममता और हँसी की शहनाई"
    ],
    "linesHinglish": [
      "Dua hai ki is naye saal aapki mehnat ko mile aasmaan jaisi oonchaai",
      "Aur aapke ghar mein sada goonjti rahe maa ki mamta aur hansi ki shehnaai"
    ],
    "linesEnglish": [
      "I pray this fresh year lifts your earnest efforts as high as open skies",
      "And fills your household endlessly with gentle love and joyful cries"
    ]
  },
  {
    "title": "नए बरस की पहली — नववर्ष शुभ संदेश",
    "titleEnglish": "May January s very — New Year Wish",
    "linesHindi": [
      "नए बरस की पहली किरण से रोशन हो जाएं आपके सारे अधूरे ख्वाब",
      "हर कठिन राह आसान लगे और हर सवाल का मिले मीठा सा जवाब"
    ],
    "linesHinglish": [
      "Naye baras ki pehli kiran se roshan ho jaayein aapke saare adhoore khwaab",
      "Har kathin raah aasaan lage aur har sawaal ka mile meetha sa jawaab"
    ],
    "linesEnglish": [
      "May January’s very first sunbeam brighten every half-spun dream you hold",
      "May steep roads flatten softly as gentle answers gently unfold"
    ]
  },
  {
    "title": "फूलों सा महके आपका — नववर्ष शुभ संदेश",
    "titleEnglish": "May your days stay — New Year Wish",
    "linesHindi": [
      "फूलों सा महके आपका जीवन, चाँद सी शीतल रहे आपकी हर शाम",
      "दिल की गहराइयों से स्वीकार करें नए साल की ये पावन सलाम"
    ],
    "linesHinglish": [
      "Phoolon sa mehke aapka jeevan, chaand si sheetal rahe aapki har shaam",
      "Dil ki gehraaiyon se sweekaar karein naye saal ki yeh paavan salaam"
    ],
    "linesEnglish": [
      "May your days stay fragrant like spring gardens and your evenings calm as moonlight",
      "Receive from the bottom of my heart these warmest New Year wishes bright"
    ]
  },
  {
    "title": "बीते कल की कोई — नववर्ष शुभ संदेश",
    "titleEnglish": "May yesterday s weariness — New Year Wish",
    "linesHindi": [
      "बीते कल की कोई भी थकान आपके नए कदमों को कभी न रोके",
      "नए साल में किस्मत ख़ुद आकर आपके दरवाज़े पर खुशियाँ झोंके"
    ],
    "linesHinglish": [
      "Beete kal ki koi bhi thakaan aapke naye kadmon ko kabhi na roke",
      "Naye saal mein kismat khud aakar aapke darwaaze par khushiyaan jhonke"
    ],
    "linesEnglish": [
      "May yesterday’s weariness never weigh down a single forward stride",
      "May gentle grace knock upon your doorway bringing joyful tides inside"
    ]
  },
  {
    "title": "हर महीने नई तरक्की — नववर्ष शुभ संदेश",
    "titleEnglish": "Fresh progress in every — New Year Wish",
    "linesHindi": [
      "हर महीने नई तरक्की मिले, हर सप्ताह मिले अपनों का प्यारा साथ",
      "नए साल में ईश्वर थामे रखे सदा आपके सिर पर आशीर्वाद का हाथ"
    ],
    "linesHinglish": [
      "Har mahine nayi tarakki mile, har saptah mile apno ka pyaara saath",
      "Naye saal mein Ishwar thaame rakhe sada aapke sir par aasheervaad ka haath"
    ],
    "linesEnglish": [
      "Fresh progress in every month, warm companionship through every week ahead",
      "May grace rest a steady sheltering blessing quietly above your head"
    ]
  },
  {
    "title": "नया साल आपके चेहरे — नववर्ष शुभ संदेश",
    "titleEnglish": "May the New Year — New Year Wish",
    "linesHindi": [
      "नया साल आपके चेहरे से कभी न जाने दे ये सच्ची मुस्कुराहट",
      "हर मोड़ पर सुनाई दे आपको खुशखबरी की मीठी सी आहट"
    ],
    "linesHinglish": [
      "Naya saal aapke chehre se kabhi na jaane de yeh sachchi muskurahat",
      "Har mod par sunaai de aapko khushkhabri ki meethi si aahat"
    ],
    "linesEnglish": [
      "May the New Year never let that genuine smile slip from your face",
      "May soft footsteps of happy news greet every turn you come to trace"
    ]
  },
  {
    "title": "रिश्तों में मिठास बनी — नववर्ष शुभ संदेश",
    "titleEnglish": "May sweetness linger in — New Year Wish",
    "linesHindi": [
      "रिश्तों में मिठास बनी रहे और जेब में बरकत का पूरा उजाला हो",
      "आपका ये आने वाला साल ज़िंदगी का सबसे सुंदर और निराला हो"
    ],
    "linesHinglish": [
      "Rishton mein mithaas bani rahe aur jeb mein barkat ka poora ujaala ho",
      "Aapka yeh aane waala saal zindagi ka sabse sundar aur niraala ho"
    ],
    "linesEnglish": [
      "May sweetness linger in your bonds and abundance bless every honest deed",
      "May this unfolding year turn out the loveliest chapter you could ever read"
    ]
  },
  {
    "title": "हर आँसू मुस्कान में — नववर्ष शुभ संदेश",
    "titleEnglish": "May every quiet teardrop — New Year Wish",
    "linesHindi": [
      "हर आँसू मुस्कान में बदले और हर इंतज़ार का मिले प्यारा सिला",
      "नए साल में न रहे किसी से कोई बैर, न रहे दिल में कोई गिला"
    ],
    "linesHinglish": [
      "Har aansoo muskaan mein badle aur har intezaar ka mile pyaara sila",
      "Naye saal mein na rahe kisi se koi bair, na rahe dil mein koi gila"
    ],
    "linesEnglish": [
      "May every quiet teardrop turn into laughter and long patience earn its prize",
      "May old bitterness leave no trace behind beneath fresh January skies"
    ]
  },
  {
    "title": "माँ-बाप की दुआएँ और — नववर्ष शुभ संदेश",
    "titleEnglish": "May parents prayers and — New Year Wish",
    "linesHindi": [
      "माँ-बाप की दुआएँ और दोस्तों का साथ हमेशा आपके पास रहे",
      "नए साल का हर दिन आपके लिए बेहद सुकून भरा और खास रहे"
    ],
    "linesHinglish": [
      "Maa-baap ki duaayein aur doston ka saath hamesha aapke paas rahe",
      "Naye saal ka har din aapke liye behad sukoon bhara aur khaas rahe"
    ],
    "linesEnglish": [
      "May parents’ prayers and loyal friends stay anchored closely by your side",
      "May every single day ahead stay deeply peaceful, rich, and bright with pride"
    ]
  },
  {
    "title": "तारे जैसी चमक रहे — नववर्ष शुभ संदेश",
    "titleEnglish": "May starlight stay bright — New Year Wish",
    "linesHindi": [
      "तारे जैसी चमक रहे आँखों में और पहाड़ सा मजबूत रहे विश्वास",
      "आपको और आपके पूरे परिवार को मुबारक हो ये नया साल बेहद खास"
    ],
    "linesHinglish": [
      "Taare jaisi chamak rahe aankhon mein aur pahaad sa mazboot rahe vishwaas",
      "Aapko aur aapke poore parivaar ko mubaarak ho yeh naya saal behad khaas"
    ],
    "linesEnglish": [
      "May starlight stay bright inside your eyes and courage stand firm as stone",
      "Warmest New Year blessings to you and every cherished heart at home"
    ]
  },
  {
    "title": "सुबह की चाय सी — नववर्ष शुभ संदेश",
    "titleEnglish": "Fresh as morning tea — New Year Wish",
    "linesHindi": [
      "सुबह की चाय सी ताज़गी और शाम के सुकून सा मीठा रहे हर पल",
      "नए साल में खिल जाएं आपकी मेहनत से सजे हुए सुंदर कमल"
    ],
    "linesHinglish": [
      "Subah ki chai si taazgi aur shaam ke sukoon sa meetha rahe har pal",
      "Naye saal mein khil jaayein aapki mehnat se saje hue sundar kamal"
    ],
    "linesEnglish": [
      "Fresh as morning tea and peaceful as twilight’s gentle golden breeze",
      "May every lotus planted by your patience bloom brightly with grace and ease"
    ]
  },
  {
    "title": "नए साल के तोहफ़े — नववर्ष शुभ संदेश",
    "titleEnglish": "May the New Year — New Year Wish",
    "linesHindi": [
      "नए साल के तोहफ़े में मिले आपको मन की शांति और अच्छा स्वास्थ्य",
      "यही सबसे बड़ी दौलत है, बाकी सब कुछ है इसके आगे बस व्यर्थ"
    ],
    "linesHinglish": [
      "Naye saal ke tohfe mein mile aapko man ki shaanti aur achha swaasthy",
      "Yahi sabse badi daulat hai, baaki sab kuch hai iske aage bas vyarth"
    ],
    "linesEnglish": [
      "May the New Year gift you quiet clarity of mind and vibrant health",
      "Beside peace inside and a sturdy body, nothing else outshines such wealth"
    ]
  },
  {
    "title": "जो भी सोचा है — नववर्ष शुभ संदेश",
    "titleEnglish": "Everything your heart whispered — New Year Wish",
    "linesHindi": [
      "जो भी सोचा है दिल ने चुपके से, वह सब इस बरस सच हो जाए",
      "आपकी ज़िंदगी की बगिया में हर मौसम खुशियों का फूल खिलाए"
    ],
    "linesHinglish": [
      "Jo bhi socha hai dil ne chupke se, wah sab is baras sach ho jaaye",
      "Aapki zindagi ki bagiya mein har mausam khushiyon ka phool khilaaye"
    ],
    "linesEnglish": [
      "Everything your heart whispered silently in prayer—may this year make real",
      "May every passing season bloom bright blossoms inside the garden you feel"
    ]
  },
  {
    "title": "सूरज हर रोज़ आपके — नववर्ष शुभ संदेश",
    "titleEnglish": "May sunrise climb the — New Year Wish",
    "linesHindi": [
      "सूरज हर रोज़ आपके लिए नई रोशनी और नए अवसर लेकर उगे",
      "हर अंधेरे की शाम आपके हौसले के सामने झुककर पीछे हटे"
    ],
    "linesHinglish": [
      "Sooraj har roz aapke liye nayi roshni aur naye avsar lekar uge",
      "Har andhere ki shaam aapke hausle ke saamne jhukkar peeche hate"
    ],
    "linesEnglish": [
      "May sunrise climb the sky each dawn carrying open doors and light anew",
      "May shadowy evenings step respectfully aside before steady courage in you"
    ]
  },
  {
    "title": "दोस्तों की महफ़िल हमेशा — नववर्ष शुभ संदेश",
    "titleEnglish": "May gatherings of loyal — New Year Wish",
    "linesHindi": [
      "दोस्तों की महफ़िल हमेशा आबाद रहे और अपनों का प्यार कभी न घटे",
      "नए साल में आपके हिस्से की ख़ुशी कभी किसी नज़र से न छटे"
    ],
    "linesHinglish": [
      "Doston ki mehfil hamesha aabaad rahe aur apno ka pyaar kabhi na ghate",
      "Naye saal mein aapke hisse ki khushi kabhi kisi nazar se na chhate"
    ],
    "linesEnglish": [
      "May gatherings of loyal friends flourish and family warmth never grow thin",
      "May joy meant rightly for your home shine steadily protected within"
    ]
  },
  {
    "title": "कदम-कदम पर सफलता मिले — नववर्ष शुभ संदेश",
    "titleEnglish": "May success meet your — New Year Wish",
    "linesHindi": [
      "कदम-कदम पर सफलता मिले और हर सफर में मिले नेक हमसफ़र",
      "नया साल भर दे आपकी झोली अनगिनत खुशियों और दुआओं से तर"
    ],
    "linesHinglish": [
      "Kadam-kadam par safalta mile aur har safar mein mile nek humsafar",
      "Naya saal bhar de aapki jholi anginat khushiyon aur duaon se tar"
    ],
    "linesEnglish": [
      "May success meet your footsteps and gentle companions walk every mile",
      "May this coming year overflow your lap with blessings and lasting smile"
    ]
  },
  {
    "title": "हवाओं में घुली रहे — नववर्ष शुभ संदेश",
    "titleEnglish": "May warmth perfume the — New Year Wish",
    "linesHindi": [
      "हवाओं में घुली रहे स्नेह की खुशबू, आँगन में रहे खुशियों की बहार",
      "आपको दिल से भेजता हूँ नए साल की अनंत शुभकामनाएँ बार-बार"
    ],
    "linesHinglish": [
      "Hawaon mein ghuli rahe sneh ki khushboo, aangan mein rahe khushiyon ki bahaar",
      "Aapko dil se bhejta hoon naye saal ki anant shubhkaamnaayein baar-baar"
    ],
    "linesEnglish": [
      "May warmth perfume the air around you and spring linger inside your yard",
      "Again and again I send heartfelt New Year wishes held in high regard"
    ]
  },
  {
    "title": "न कोई बीमारी पास — नववर्ष शुभ संदेश",
    "titleEnglish": "May illness stay far — New Year Wish",
    "linesHindi": [
      "न कोई बीमारी पास आए, न कोई चिंता कभी रात की नींद चुराए",
      "ईश्वर करे आपका नया साल हर पल मुस्कुराते हुए गुज़र जाए"
    ],
    "linesHinglish": [
      "Na koi bimaari paas aaye, na koi chinta kabhi raat ki neend churaaye",
      "Ishwar kare aapka naya saal har pal muskurate hue guzar jaaye"
    ],
    "linesEnglish": [
      "May illness stay far from your threshold and anxiety never steal your rest",
      "May every single hour of this year glide by smiling, calm, and blessed"
    ]
  },
  {
    "title": "पुराने जख्मों पर वक़्त — नववर्ष शुभ संदेश",
    "titleEnglish": "Gentle healing across old — New Year Wish",
    "linesHindi": [
      "पुराने जख्मों पर वक़्त का मरहम और दिल में नया विश्वास जगे",
      "नए साल में आपका हर दिन किसी प्यारे त्योहार जैसा सजे"
    ],
    "linesHinglish": [
      "Puraane zakhmon par waqt ka marham aur dil mein naya vishwaas jage",
      "Naye saal mein aapka har din kisi pyaare tyohaar jaisa saje"
    ],
    "linesEnglish": [
      "Gentle healing across old bruises and radiant faith waking fresh inside",
      "May every ordinary day ahead feel festive, warm, and brightened with pride"
    ]
  },
  {
    "title": "शब्द कम हैं पर — नववर्ष शुभ संदेश",
    "titleEnglish": "My words may seem — New Year Wish",
    "linesHindi": [
      "शब्द कम हैं पर दुआओं में असर बहुत गहरा है मेरे अज़ीज़ यार",
      "ये नया साल लाए आपके जीवन में खुशियों का सबसे सुंदर संसार"
    ],
    "linesHinglish": [
      "Shabd kam hain par duaon mein asar bahut gehra hai mere azeez yaar",
      "Yeh naya saal laaye aapke jeevan mein khushiyon ka sabse sundar sansaar"
    ],
    "linesEnglish": [
      "My words may seem brief, dear friend, yet sincere prayer runs deep inside",
      "May this New Year build a joyful world around every step you guide"
    ]
  },
  {
    "title": "हर सुबह मिले कुछ — नववर्ष शुभ संदेश",
    "titleEnglish": "Bright curiosity waking each — New Year Wish",
    "linesHindi": [
      "हर सुबह मिले कुछ नया सीखने का जोश और शाम को मन का सुकून",
      "नए साल के इन बारह महीनों में बरसे आप पर खुशियों का जूनून"
    ],
    "linesHinglish": [
      "Har subah mile kuch naya seekhne ka josh aur shaam ko man ka sukoon",
      "Naye saal ke in baarah mahinon mein barse aap par khushiyon ka junoon"
    ],
    "linesEnglish": [
      "Bright curiosity waking each morning and calm contentment at day’s close",
      "May twelve full months pour generous gladness where your spirit goes"
    ]
  },
  {
    "title": "बच्चों की मुस्कान से — नववर्ष शुभ संदेश",
    "titleEnglish": "May children s giggles — New Year Wish",
    "linesHindi": [
      "बच्चों की मुस्कान से घर चहके और बड़ों के आशीष से राह बने",
      "नए साल में आपके सारे सपने हक़ीक़त के सुंदर ताज बनें"
    ],
    "linesHinglish": [
      "Bachchon ki muskaan se ghar chehke aur badon ke aasheesh se raah bane",
      "Naye saal mein aapke saare sapne haqeeqat ke sundar taaj banein"
    ],
    "linesEnglish": [
      "May children’s giggles fill your rooms while elders’ wisdom lights the road",
      "May quiet hopes crown true reality cleanly where you long abode"
    ]
  },
  {
    "title": "दिल से निकली हर — नववर्ष शुभ संदेश",
    "titleEnglish": "May every blessing sent — New Year Wish",
    "linesHindi": [
      "दिल से निकली हर दुआ आज आसमान के रास्ते आप तक पहुँचे",
      "इस नए साल में ग़म की परछाई कभी आपके पास न पहुँचे"
    ],
    "linesHinglish": [
      "Dil se nikli har dua aaj aasmaan ke raaste aap tak pahunche",
      "Is naye saal mein gham ki parchhaai kabhi aapke paas na pahunche"
    ],
    "linesEnglish": [
      "May every blessing sent straight from my heart travel swiftly to your side",
      "May no shadow of heavy grief find entry where your loved ones abide"
    ]
  },
  {
    "title": "अंधेरे कोनों में दीप — नववर्ष शुभ संदेश",
    "titleEnglish": "Warm lamps in shadowed — New Year Wish",
    "linesHindi": [
      "अंधेरे कोनों में दीप जले और उदास लबों पर खिल जाए हँसी",
      "नए साल में हर घर में ऐसे ही रहे रौनक और प्रेम की डोर बसी"
    ],
    "linesHinglish": [
      "Andhere konon mein deep jale aur udaas labon par khil jaaye hansi",
      "Naye saal mein har ghar mein aise hi rahe raunak aur prem ki dor basi"
    ],
    "linesEnglish": [
      "Warm lamps in shadowed corners and bright laughter blooming on quiet lips",
      "May love weave glowing radiance across homes and enduring friendships"
    ]
  },
  {
    "title": "सफ़र चाहे लंबा हो — नववर्ष शुभ संदेश",
    "titleEnglish": "Though trails run long — New Year Wish",
    "linesHindi": [
      "सफ़र चाहे लंबा हो या थोड़ा कठिन, पर मंज़िल आपके क़दम चूमे",
      "नए साल की हर सुबह आपकी ज़िंदगी में ताज़गी बनकर घूमे"
    ],
    "linesHinglish": [
      "Safar chaahe lamba ho ya thoda kathin, par manzil aapke kadam choome",
      "Naye saal ki har subah aapki zindagi mein taazgi bankar ghoome"
    ],
    "linesEnglish": [
      "Though trails run long or climb uphill, may proud horizons meet your tread",
      "May every New Year morning swirl like crisp refreshment overhead"
    ]
  },
  {
    "title": "सपनों की किताब में — नववर्ष शुभ संदेश",
    "titleEnglish": "Let a gentle shining — New Year Wish",
    "linesHindi": [
      "सपनों की किताब में आज से शुरू हो एक बेहद प्यारा और नया अध्याय",
      "जिसमें हर मोड़ पर सिर्फ़ शांति, प्यार और मुस्कुराहट ही पाए"
    ],
    "linesHinglish": [
      "Sapno ki kitaab mein aaj se shuru ho ek behad pyaara aur naya adhyaay",
      "Jismein har mod par sirf shaanti, pyaar aur muskurahat hi paaye"
    ],
    "linesEnglish": [
      "Let a gentle shining chapter open today inside your book of dreams",
      "Where peace, affection, and glad smiles wait quietly beside all streams"
    ]
  },
  {
    "title": "खुद पर भरोसा और — नववर्ष शुभ संदेश",
    "titleEnglish": "May steady faith in — New Year Wish",
    "linesHindi": [
      "खुद पर भरोसा और अपनों पर स्नेह कभी कम न हो इस साल",
      "ईश्वर करे हर दिन आपका रहे खुशियों से लबालब और खुशहाल"
    ],
    "linesHinglish": [
      "Khud par bharosa aur apno par sneh kabhi kam na ho is saal",
      "Ishwar kare har din aapka rahe khushiyon se labaalaab aur khushhaal"
    ],
    "linesEnglish": [
      "May steady faith in yourself and tenderness for kin never diminish here",
      "May heaven fill every single day with quiet grace and rich cheer"
    ]
  },
  {
    "title": "चाहे दूरी शहरों की — नववर्ष शुभ संदेश",
    "titleEnglish": "Whether miles or busy — New Year Wish",
    "linesHindi": [
      "चाहे दूरी शहरों की हो या वक़्त की, पर दिलों में वही अपनापन रहे",
      "नए साल में हमारे इस खूबसूरत रिश्ते में सदा ताज़ा सावन रहे"
    ],
    "linesHinglish": [
      "Chaahe doori shehron ki ho ya waqt ki, par dilon mein wahi apnapan rahe",
      "Naye saal mein hamaare is khoobsurat rishte mein sada taaza saawan rahe"
    ],
    "linesEnglish": [
      "Whether miles or busy hours divide our towns, warm kinship stays true",
      "May fresh green rain keep blessing this sweet bond all twelve months through"
    ]
  },
  {
    "title": "आपकी झोली में वो — नववर्ष शुभ संदेश",
    "titleEnglish": "May all the gentle — New Year Wish",
    "linesHindi": [
      "आपकी झोली में वो सब आए जिसके आप सचमुच हक़दार हैं",
      "नए साल में आपकी मेहनत और नेकी के खुल जाएं सारे द्वार हैं"
    ],
    "linesHinglish": [
      "Aapki jholi mein woh sab aaye jiske aap sachmuch haqdaar hain",
      "Naye saal mein aapki mehnat aur neki ke khul jaayein saare dwaar hain"
    ],
    "linesEnglish": [
      "May all the gentle goodness you truly earned find its way into your hands",
      "May doors of reward swing wide for kindness and labor across new lands"
    ]
  },
  {
    "title": "दिल की धड़कनों में — नववर्ष शुभ संदेश",
    "titleEnglish": "Calmness inside your heartbeat — New Year Wish",
    "linesHindi": [
      "दिल की धड़कनों में शांति रहे और विचारों में उजला सवेरा",
      "नए साल में खुशियों से भरा रहे हमेशा आपका ये प्यारा बसेरा"
    ],
    "linesHinglish": [
      "Dil ki dhadkanon mein shaanti rahe aur vichaaron mein ujla savera",
      "Naye saal mein khushiyon se bhara rahe hamesha aapka yeh pyaara basera"
    ],
    "linesEnglish": [
      "Calmness inside your heartbeat and sunlit clarity inside your mind",
      "May your cherished home stay blessed with warmth and gladness of every kind"
    ]
  },
  {
    "title": "ज़िंदगी की राहों में — नववर्ष शुभ संदेश",
    "titleEnglish": "Fewer thorns along life — New Year Wish",
    "linesHindi": [
      "ज़िंदगी की राहों में काँटे कम और गुलज़ार बगिया ज्यादा हो",
      "इस नए साल में आपकी हर कामयाबी पहले से कहीं ज्यादा हो"
    ],
    "linesHinglish": [
      "Zindagi ki raahon mein kaante kam aur gulzaar bagiya zyaada ho",
      "Is naye saal mein aapki har kaamyaabi pehle se kahin zyaada ho"
    ],
    "linesEnglish": [
      "Fewer thorns along life’s footpaths, far fuller rose gardens ahead",
      "May your triumphs rise higher this year than any path you earlier tread"
    ]
  },
  {
    "title": "मीठी यादों का गुलदस्ता — नववर्ष शुभ संदेश",
    "titleEnglish": "May a bright bouquet — New Year Wish",
    "linesHindi": [
      "मीठी यादों का गुलदस्ता सजा रहे आपकी अलमारी में हमेशा",
      "नए साल में दूर रहे हर उलझन और हर मन का अंदेशा"
    ],
    "linesHinglish": [
      "Meethi yaadon ka guldasta saja rahe aapki almaari mein hamesha",
      "Naye saal mein door rahe har uljhan aur har man ka andesha"
    ],
    "linesEnglish": [
      "May a bright bouquet of tender memories rest timelessly on your shelf",
      "May doubt and knotty worries stay far away from your peaceful self"
    ]
  },
  {
    "title": "आपके परिवार के हर — नववर्ष शुभ संदेश",
    "titleEnglish": "May luminous smiles shine — New Year Wish",
    "linesHindi": [
      "आपके परिवार के हर सदस्य के चेहरे पर दमकती रहे मुस्कान",
      "नए साल की सुबह लाए आपके आँगन में सुख-समृद्धि का सम्मान"
    ],
    "linesHinglish": [
      "Aapke parivaar ke har sadasya ke chehre par damakti rahe muskaan",
      "Naye saal ki subah laaye aapke aangan mein sukh-samriddhi ka sammaan"
    ],
    "linesEnglish": [
      "May luminous smiles shine warmly on every dear face inside your house",
      "May New Year’s morning carry harmony and dignity where kindness dwells"
    ]
  },
  {
    "title": "थके हुए कदमों को — नववर्ष शुभ संदेश",
    "titleEnglish": "Rest for weary footsteps — New Year Wish",
    "linesHindi": [
      "थके हुए कदमों को आराम मिले और नए सपनों को ऊँचे पंख",
      "नए साल में बरसे आप पर खुशियों का बेहिसाब और प्यारा रंग"
    ],
    "linesHinglish": [
      "Thake hue kadmon ko aaraam mile aur naye sapno ko oonche pankh",
      "Naye saal mein barse aap par khushiyon ka behisaab aur pyaara rang"
    ],
    "linesEnglish": [
      "Rest for weary footsteps and strong bright wings for dreams ready to fly",
      "May boundless vivid joy shower gently upon you from January’s sky"
    ]
  },
  {
    "title": "एक छोटा सा धन्यवाद — नववर्ष शुभ संदेश",
    "titleEnglish": "One heartfelt thank-you for — New Year Wish",
    "linesHindi": [
      "एक छोटा सा धन्यवाद बीते साल के साथ निभाने के लिए मेरे मित्र",
      "और अनगिनत शुभकामनाएँ आने वाले इस खूबसूरत नए सत्र"
    ],
    "linesHinglish": [
      "Ek chhota sa dhanyavaad beete saal ke saath nibhane ke liye mere mitra",
      "Aur anginat shubhkaamnaayein aane waale is khoobsurat naye satra"
    ],
    "linesEnglish": [
      "One heartfelt thank-you for standing loyally through yesterday, dear friend",
      "And boundless blessings for every sparkling chapter waiting round the bend"
    ]
  },
  {
    "title": "नफरतों की आंधी से — नववर्ष शुभ संदेश",
    "titleEnglish": "Safe beyond bitter storms — New Year Wish",
    "linesHindi": [
      "नफरतों की आंधी से दूर एक प्यार का कोना सदा सुरक्षित रहे",
      "नए साल में आपका दिल हर पल मीठे गीतों सा गुनगुनाता रहे"
    ],
    "linesHinglish": [
      "Nafraton ki aandhi se door ek pyaar ka kona sada surakshit rahe",
      "Naye saal mein aapka dil har pal meethe geeton sa gungunaata rahe"
    ],
    "linesEnglish": [
      "Safe beyond bitter storms, may your gentle haven of love stay intact",
      "May your heart hum softly like beloved melodies through every act"
    ]
  },
  {
    "title": "जितनी मिठास गुड़ और — नववर्ष शुभ संदेश",
    "titleEnglish": "Sweet as winter sesame — New Year Wish",
    "linesHindi": [
      "जितनी मिठास गुड़ और तिल में है, उतनी ही बातों में बनी रहे",
      "नए साल में खुशियों की बरसात आपकी छत पर यूँ ही थमी रहे"
    ],
    "linesHinglish": [
      "Jitni mithaas gud aur til mein hai, utni hi baaton mein bani rahe",
      "Naye saal mein khushiyon ki barsaat aapki chhat par yoon hi thami rahe"
    ],
    "linesEnglish": [
      "Sweet as winter sesame jaggery—may such warmth sweeten every conversation",
      "May showers of gladness linger generously across your sunlit station"
    ]
  },
  {
    "title": "हर कठिन फैसले में — नववर्ष शुभ संदेश",
    "titleEnglish": "In every tough crossroads — New Year Wish",
    "linesHindi": [
      "हर कठिन फैसले में ऊपर वाला आपको सही राह दिखाए",
      "इस नए साल आपकी हर दुआ बिना देरी के कबूल हो जाए"
    ],
    "linesHinglish": [
      "Har kathin faisle mein oopar waala aapko sahi raah dikhaaye",
      "Is naye saal aapki har dua bina deri ke qabool ho jaaye"
    ],
    "linesEnglish": [
      "In every tough crossroads may steady wisdom guide you toward the true trail",
      "May heartfelt prayers find gentle answers swift without fail"
    ]
  },
  {
    "title": "नया साल सिर्फ़ तारीख — नववर्ष शुभ संदेश",
    "titleEnglish": "A New Year refreshes — New Year Wish",
    "linesHindi": [
      "नया साल सिर्फ़ तारीख नहीं बदलता, बल्कि नए हौसले भी जगाता है",
      "दुआ है कि यह बरस आपके लिए कामयाबी के नए शिखर लाता है"
    ],
    "linesHinglish": [
      "Naya saal sirf taarikh nahi badalta, balki naye hausle bhi jagaata hai",
      "Dua hai ki yeh baras aapke liye kaamyaabi ke naye shikhar laata hai"
    ],
    "linesEnglish": [
      "A New Year refreshes more than calendar numbers—it wakes fresh resolve",
      "I wish this year carries you cleanly to shining summits yet untold"
    ]
  },
  {
    "title": "मायूस चेहरे भी खिल — नववर्ष शुभ संदेश",
    "titleEnglish": "May downcast faces brighten — New Year Wish",
    "linesHindi": [
      "मायूस चेहरे भी खिल उठें जब आप मुस्कान लेकर सामने आएं",
      "नए साल में इतनी खुशियां मिलें कि आप दूसरों में भी लुटाएं"
    ],
    "linesHinglish": [
      "Maayoos chehre bhi khil uthein jab aap muskaan lekar saamne aayein",
      "Naye saal mein itni khushiyaan milein ki aap doosron mein bhi lutaayein"
    ],
    "linesEnglish": [
      "May downcast faces brighten instantly whenever you walk in smiling near",
      "May so much joy overflow your life that you scatter warmth far and near"
    ]
  },
  {
    "title": "सुकून भरी नींद आए — नववर्ष शुभ संदेश",
    "titleEnglish": "Deep tranquil sleep greeting — New Year Wish",
    "linesHindi": [
      "सुकून भरी नींद आए हर रात और हर सुबह हो ऊर्जा से भरपूर",
      "नए साल में आपके रास्ते का हर पत्थर हो जाए चकनाचूर"
    ],
    "linesHinglish": [
      "Sukoon bhari neend aaye har raat aur har subah ho oorja se bharpoor",
      "Naye saal mein aapke raaste ka har patthar ho jaaye chaknaachoor"
    ],
    "linesEnglish": [
      "Deep tranquil sleep greeting every night and bright vigor rising every dawn",
      "May every stubborn stone blocking your journey melt quietly and be gone"
    ]
  },
  {
    "title": "प्यार सम्मान और विश्वास — नववर्ष शुभ संदेश",
    "titleEnglish": "May love mutual respect — New Year Wish",
    "linesHindi": [
      "प्यार, सम्मान और विश्वास का संगम बना रहे आपके संसार में",
      "कोई कमी न आए कभी भी आपके हँसते-खेलते परिवार में"
    ],
    "linesHinglish": [
      "Pyaar, sammaan aur vishwaas ka sangam bana rahe aapke sansaar mein",
      "Koi kami na aaye kabhi bhi aapke hanste-khelte parivaar mein"
    ],
    "linesEnglish": [
      "May love, mutual respect, and steady trust stay braided inside your home",
      "May laughter never fall short among dear faces wherever you roam"
    ]
  },
  {
    "title": "जहाँ जाएं वहाँ इज़्ज़त — नववर्ष शुभ संदेश",
    "titleEnglish": "Warm honor greeting everywhere — New Year Wish",
    "linesHindi": [
      "जहाँ जाएं वहाँ इज़्ज़त मिले, जो बोलें उसमें अपनापन झलके",
      "नए साल में आपकी खुशियों के दीये हर चौराहे पर जगमग चमके"
    ],
    "linesHinglish": [
      "Jahaan jaayein wahaan izzat mile, jo bolein usmein apnapan jhalke",
      "Naye saal mein aapki khushiyon ke deeye har chauraahe par jagmag chamke"
    ],
    "linesEnglish": [
      "Warm honor greeting everywhere you step and gentle kindness in your voice",
      "May your lanterns of gladness shine bright across every path of choice"
    ]
  },
  {
    "title": "सूरज की तरह तेज — नववर्ष शुभ संदेश",
    "titleEnglish": "Bright as noon sun — New Year Wish",
    "linesHindi": [
      "सूरज की तरह तेज चमके आपका नाम और चाँद सी रहे शीतलता",
      "नए साल के हर मोड़ पर मिले आपको सुकून और सफलता"
    ],
    "linesHinglish": [
      "Sooraj ki tarah tez chamke aapka naam aur chaand si rahe sheetalta",
      "Naye saal ke har mod par mile aapko sukoon aur safalta"
    ],
    "linesEnglish": [
      "Bright as noon sun may your good name shine, cool as moonlight your spirit stay",
      "At every bend of this fresh year may peace and achievement light your way"
    ]
  },
  {
    "title": "अधूरे ख्वाब इस बरस — नववर्ष शुभ संदेश",
    "titleEnglish": "May unfinished dreams blossom — New Year Wish",
    "linesHindi": [
      "अधूरे ख्वाब इस बरस पूरे हों और नए लक्ष्य बनाएं उड़ान",
      "दिल से मुबारक हो आपको खुशियों से भरा ये नया जहान"
    ],
    "linesHinglish": [
      "Adhoore khwaab is baras poore hon aur naye lakshya banaayein udaan",
      "Dil se mubaarak ho aapko khushiyon se bhara yeh naya jahaan"
    ],
    "linesEnglish": [
      "May unfinished dreams blossom whole this year while bold goals take flight",
      "Warmest congratulations on stepping into a joyful horizon bright"
    ]
  },
  {
    "title": "कभी अकेलापन पास न — नववर्ष शुभ संदेश",
    "titleEnglish": "May loneliness never cross — New Year Wish",
    "linesHindi": [
      "कभी अकेलापन पास न भटके, हर शाम अपनों की महफ़िल हो",
      "नए साल में आपकी हर छोटी सी ख्वाहिश भी आसानी से हासिल हो"
    ],
    "linesHinglish": [
      "Kabhi akelapan paas na bhatke, har shaam apno ki mehfil ho",
      "Naye saal mein aapki har chhoti si khwaahish bhi aasaani se haasil ho"
    ],
    "linesEnglish": [
      "May loneliness never cross your threshold, may loved ones brighten each dusk",
      "May even your smallest quiet wish bloom effortless without husk"
    ]
  },
  {
    "title": "मुश्किल वक़्त आए तो — नववर्ष शुभ संदेश",
    "titleEnglish": "Should challenging hours knock — New Year Wish",
    "linesHindi": [
      "मुश्किल वक़्त आए तो भी हिम्मत का दामन कभी न छूटे",
      "नए साल में अपनों का प्यार और विश्वास कभी न टूटे"
    ],
    "linesHinglish": [
      "Mushkil waqt aaye to bhi himmat ka daaman kabhi na chhoote",
      "Naye saal mein apno ka pyaar aur vishwaas kabhi na toote"
    ],
    "linesEnglish": [
      "Should challenging hours knock briefly, may courage never slip your grasp",
      "May loyal affection and deep trust stay unbroken inside your clasp"
    ]
  },
  {
    "title": "घर की देहरी पर — नववर्ष शुभ संदेश",
    "titleEnglish": "May steady grace stand — New Year Wish",
    "linesHindi": [
      "घर की देहरी पर बरकत खड़ी रहे और मन में शांत संगीत बजे",
      "नया साल आपके जीवन को बिल्कुल नए और सुंदर रूप में सजे"
    ],
    "linesHinglish": [
      "Ghar ki dehri par barkat khadi rahe aur man mein shaant sangeet baje",
      "Naya saal aapke jeevan ko bilkul naye aur sundar roop mein saje"
    ],
    "linesEnglish": [
      "May steady grace stand guard on your threshold while peaceful music plays inside",
      "May this New Year dress your days in serene radiance far and wide"
    ]
  },
  {
    "title": "हाथों में सेहत का — नववर्ष शुभ संदेश",
    "titleEnglish": "Treasury of vibrant health — New Year Wish",
    "linesHindi": [
      "हाथों में सेहत का खज़ाना और दिल में संतोष का गहरा सागर हो",
      "आपको मिलने वाली हर सुबह बेहद खुशनुमा और उजागर हो"
    ],
    "linesHinglish": [
      "Haathon mein sehat ka khazaana aur dil mein santosh ka gehra saagar ho",
      "Aapko milne waali har subah behad khushnuma aur ujaagar ho"
    ],
    "linesEnglish": [
      "Treasury of vibrant health in your hands and calm contentment deep within",
      "May every sunrise reaching your window bring pure delight as days begin"
    ]
  },
  {
    "title": "पुराने दोस्तों की हँसी — नववर्ष शुभ संदेश",
    "titleEnglish": "May old friends laughter — New Year Wish",
    "linesHindi": [
      "पुराने दोस्तों की हँसी फिर गूंजे और नए रिश्ते प्यार से जुड़ें",
      "नए साल में आपकी सफलता के पंख हर ऊँचे आसमान में उड़ें"
    ],
    "linesHinglish": [
      "Puraane doston ki hansi phir goonje aur naye rishte pyaar se judein",
      "Naye saal mein aapki safalta ke pankh har oonche aasmaan mein udein"
    ],
    "linesEnglish": [
      "May old friends’ laughter ring loud again while gentle new bonds grow warm",
      "May your wings of achievement soar freely above every passing storm"
    ]
  },
  {
    "title": "चाहे मौसम कोई भी — नववर्ष शुभ संदेश",
    "titleEnglish": "Whatever weather shifts outside — New Year Wish",
    "linesHindi": [
      "चाहे मौसम कोई भी बदले, आपके चेहरे की रौनक सलामत रहे",
      "नए साल में हर दिन आपका मान-सम्मान और सुखद कयामत रहे"
    ],
    "linesHinglish": [
      "Chaahe mausam koi bhi badle, aapke chehre ki raunak salaamat rahe",
      "Naye saal mein har din aapka maan-sammaan aur sukhad kayaamat rahe"
    ],
    "linesEnglish": [
      "Whatever weather shifts outside your window, may your bright glow remain intact",
      "May honor and peaceful joy grace every step in every daily act"
    ]
  },
  {
    "title": "सच्चे दिल की हर — नववर्ष शुभ संदेश",
    "titleEnglish": "May every honest longing — New Year Wish",
    "linesHindi": [
      "सच्चे दिल की हर तमन्ना इस साल पूरी होकर घर आए",
      "आपकी झोली में बस खुशियों और सुकून के ही सितारे समाएं"
    ],
    "linesHinglish": [
      "Sachche dil ki har tamanna is saal poori hokar ghar aaye",
      "Aapki jholi mein bas khushiyon aur sukoon ke hi sitaare samaayein"
    ],
    "linesEnglish": [
      "May every honest longing tucked inside your chest come shining home",
      "May constellations of quiet peace and gladness bless wherever you roam"
    ]
  },
  {
    "title": "रंगों सी खिली रहे — नववर्ष शुभ संदेश",
    "titleEnglish": "May your world stay — New Year Wish",
    "linesHindi": [
      "रंगों सी खिली रहे दुनिया आपकी और फूलों सा महके हर कदम",
      "इस नए साल में कभी न छू पाए आपको कोई भी छोटा या बड़ा ग़म"
    ],
    "linesHinglish": [
      "Rangon si khili rahe duniya aapki aur phoolon sa mehke har kadam",
      "Is naye saal mein kabhi na chhoo paaye aapko koi bhi chhota ya bada gham"
    ],
    "linesEnglish": [
      "May your world stay vivid with spring hues and fragrance attend your tread",
      "May neither small ache nor heavy sorrow touch a hair upon your head"
    ]
  },
  {
    "title": "काम के बीच भी — नववर्ष शुभ संदेश",
    "titleEnglish": "Amidst busy hours may — New Year Wish",
    "linesHindi": [
      "काम के बीच भी अपनों के संग बैठने का समय मिल जाए भरपूर",
      "नए साल में हर तनाव आपसे कोसों दूर रहे, हर दिन हो मसूर"
    ],
    "linesHinglish": [
      "Kaam ke beech bhi apno ke sang baithne ka samay mil jaaye bharpoor",
      "Naye saal mein har tanaav aapse koson door rahe, har din ho masoor"
    ],
    "linesEnglish": [
      "Amidst busy hours may rich unhurried evenings beside loved ones remain",
      "May heavy stress stay miles away while gladness fills sunshine and rain"
    ]
  },
  {
    "title": "जिन्हें आप दिल से — नववर्ष शुभ संदेश",
    "titleEnglish": "May everyone you hold — New Year Wish",
    "linesHindi": [
      "जिन्हें आप दिल से चाहते हैं, वे हमेशा आपकी आँखों के करीब रहें",
      "नए साल में खुशियों के सारे दरवाज़े आपके लिए सदा खुले रहें"
    ],
    "linesHinglish": [
      "Jinhein aap dil se chaahte hain, weh hamesha aapki aankhon ke kareeb rahein",
      "Naye saal mein khushiyon ke saare darwaaze aapke liye sada khule rahein"
    ],
    "linesEnglish": [
      "May everyone you hold dear stay safe and close within your warm embrace",
      "May doors of bright opportunity stand wide for you in every place"
    ]
  },
  {
    "title": "मन में ठहराव रहे — नववर्ष शुभ संदेश",
    "titleEnglish": "Serene steadiness in your — New Year Wish",
    "linesHindi": [
      "मन में ठहराव रहे और कर्म में ईमानदारी की अनोखी चमक",
      "नए साल में आपके जीवन में गूंजे खुशियों की पायल की खनक"
    ],
    "linesHinglish": [
      "Man mein thehraav rahe aur karm mein imaandari ki anokhi chamak",
      "Naye saal mein aapke jeevan mein goonje khushiyon ki paayal ki khanak"
    ],
    "linesEnglish": [
      "Serene steadiness in your spirit and quiet integrity lighting all you do",
      "May joyful anklets chime brightly throughout every season coming to you"
    ]
  },
  {
    "title": "बीते बरस से सीखा — नववर्ष शुभ संदेश",
    "titleEnglish": "Every hard-won lesson gathered — New Year Wish",
    "linesHindi": [
      "बीते बरस से सीखा हर सबक आज से आपकी ताक़त बन जाए",
      "आने वाला ये नया साल आपके लिए स्वर्णिम युग लेकर आए"
    ],
    "linesHinglish": [
      "Beete baras se seekha har sabak aaj se aapki taaqat ban jaaye",
      "Aane waala yeh naya saal aapke liye swarnim yug lekar aaye"
    ],
    "linesEnglish": [
      "Every hard-won lesson gathered last year—may it turn into steady grace",
      "May this arriving year open a golden season in your sunlit space"
    ]
  },
  {
    "title": "नन्हे बच्चों की तरह — नववर्ष शुभ संदेश",
    "titleEnglish": "May effortless childlike laughter — New Year Wish",
    "linesHindi": [
      "नन्हे बच्चों की तरह निश्छल हँसी हर दिन आपके लबों पर खिले",
      "नए साल में बिना मांगे ही आपको दुनिया के सारे सुकून मिलें"
    ],
    "linesHinglish": [
      "Nanhe bachchon ki tarah nishchhal hansi har din aapke labon par khile",
      "Naye saal mein bina maange hi aapko duniya ke saare sukoon milein"
    ],
    "linesEnglish": [
      "May effortless childlike laughter bloom fresh upon your lips each day",
      "May unasked calm and tender peace walk gracefully beside your way"
    ]
  },
  {
    "title": "चाँदनी रात सी शांत — नववर्ष शुभ संदेश",
    "titleEnglish": "Moonlight-calm slumber each night — New Year Wish",
    "linesHindi": [
      "चाँदनी रात सी शांत नींद और सवेरे की धूप सी ताज़गी मिले",
      "इस नए साल में आपकी हर नेक कोशिश में जीत ही जीत खिले"
    ],
    "linesHinglish": [
      "Chaandni raat si shaant neend aur savere ki dhoop si taazgi mile",
      "Is naye saal mein aapki har nek koshish mein jeet hi jeet khile"
    ],
    "linesEnglish": [
      "Moonlight-calm slumber each night and crisp morning vigor when dawn breaks",
      "May noble victories blossom sweetly inside every effort your heart makes"
    ]
  },
  {
    "title": "अपनों के गले लगने — नववर्ष शुभ संदेश",
    "titleEnglish": "May the warmth of — New Year Wish",
    "linesHindi": [
      "अपनों के गले लगने की गरमाहट पूरे बारह महीने बनी रहे",
      "नए साल में आपके घर की रौनक हर त्यौहार की तरह सजी रहे"
    ],
    "linesHinglish": [
      "Apno ke gale lagne ki garmahat poore baarah mahine bani rahe",
      "Naye saal mein aapke ghar ki raunak har tyohaar ki tarah saji rahe"
    ],
    "linesEnglish": [
      "May the warmth of dear hugs linger unbroken across all twelve months ahead",
      "May your home stay radiant as a quiet festival wherever love is led"
    ]
  },
  {
    "title": "कलम आपकी सच लिखे — नववर्ष शुभ संदेश",
    "titleEnglish": "May your words carry — New Year Wish",
    "linesHindi": [
      "कलम आपकी सच लिखे और कर्म आपके नेक राह पर चलें",
      "नए साल में आपके आँगन में खुशहाली के अनगिनत दीपक जलें"
    ],
    "linesHinglish": [
      "Kalam aapki sach likhe aur karm aapke nek raah par chalein",
      "Naye saal mein aapke aangan mein khushhaali ke anginat deepak jalein"
    ],
    "linesEnglish": [
      "May your words carry truth and your quiet footsteps walk gentle grace",
      "May countless lamps of abundance stay lit inside your peaceful place"
    ]
  },
  {
    "title": "हर मुश्किल मोड़ पर — नववर्ष शुभ संदेश",
    "titleEnglish": "At any steep bend — New Year Wish",
    "linesHindi": [
      "हर मुश्किल मोड़ पर कोई फरिश्ता मदद के लिए खड़ा मिल जाए",
      "नए साल में आपका भरोसा इस खूबसूरत दुनिया पर और बढ़ जाए"
    ],
    "linesHinglish": [
      "Har mushkil mod par koi farishta madad ke liye khada mil jaaye",
      "Naye saal mein aapka bharosa is khoobsurat duniya par aur badh jaaye"
    ],
    "linesEnglish": [
      "At any steep bend along the road may a kind friend appear right beside you",
      "May your quiet faith in goodness grow deeper all the bright year through"
    ]
  },
  {
    "title": "जहाँ प्यार कम पड़ा — नववर्ष शुभ संदेश",
    "titleEnglish": "Wherever affection ran scarce — New Year Wish",
    "linesHindi": [
      "जहाँ प्यार कम पड़ा था पिछले बरस, वहाँ आज से बहार आ जाए",
      "नए साल में हर रूठा हुआ रिश्ता फिर से मुस्कुराता नजर आए"
    ],
    "linesHinglish": [
      "Jahaan pyaar kam pada tha pichhle baras, wahaan aaj se bahaar aa jaaye",
      "Naye saal mein har rootha hua rishta phir se muskurata nazar aaye"
    ],
    "linesEnglish": [
      "Wherever affection ran scarce before, may tender spring return today",
      "May estranged bonds mend gently and smile brightly along your way"
    ]
  },
  {
    "title": "आपकी हँसी से दूसरों — नववर्ष शुभ संदेश",
    "titleEnglish": "May your cheerful spirit — New Year Wish",
    "linesHindi": [
      "आपकी हँसी से दूसरों के घरों में भी रोशनी पहुँचती रहे",
      "नए साल में आपकी झोली में बस प्यार और दुआएं बरसती रहें"
    ],
    "linesHinglish": [
      "Aapki hansi se doosron ke gharon mein bhi roshni pahunchti rahe",
      "Naye saal mein aapki jholi mein bas pyaar aur duaayein barasti rahein"
    ],
    "linesEnglish": [
      "May your cheerful spirit keep carrying warm light into neighbors’ halls",
      "May sincere love and gentle prayers shower steadily within your walls"
    ]
  },
  {
    "title": "हर दिन इतना सुंदर — नववर्ष शुभ संदेश",
    "titleEnglish": "May every day unfold — New Year Wish",
    "linesHindi": [
      "हर दिन इतना सुंदर हो कि शाम को दिल बस शुक्रिया अदा करे",
      "नए साल में आपका जीवन हर पल आनंद की नई ऊँचाई छुए"
    ],
    "linesHinglish": [
      "Har din itna sundar ho ki shaam ko dil bas shukriya ada kare",
      "Naye saal mein aapka jeevan har pal aanand ki nayi oonchaai chhue"
    ],
    "linesEnglish": [
      "May every day unfold so gently that sunset finds only gratitude within",
      "May fresh quiet joy lift every season as bright mornings begin"
    ]
  },
  {
    "title": "सफ़ेद कबूतर सी शांति — नववर्ष शुभ संदेश",
    "titleEnglish": "May dove-white serenity glide — New Year Wish",
    "linesHindi": [
      "सफ़ेद कबूतर सी शांति उड़ती रहे आपके मन के नीले गगन में",
      "नए साल में खुशबू ही खुशबू बसी रहे आपके पूरे जीवन में"
    ],
    "linesHinglish": [
      "Safed kabootar si shaanti udti rahe aapke man ke neele gagan mein",
      "Naye saal mein khushboo hi khushboo basi rahe aapke poore jeevan mein"
    ],
    "linesEnglish": [
      "May dove-white serenity glide peacefully across your sky of thought",
      "May gentle fragrance linger through every precious blessing you are brought"
    ]
  },
  {
    "title": "साल का हर मौसम — नववर्ष शुभ संदेश",
    "titleEnglish": "May each turning season — New Year Wish",
    "linesHindi": [
      "साल का हर मौसम आपको दे जाए मीठे पलों की नई सौगात",
      "चाहे धूप खिले या बरसे मेघ, पर अपनों का न छूटे कभी साथ"
    ],
    "linesHinglish": [
      "Saal ka har mausam aapko de jaaye meethe palon ki nayi saugaat",
      "Chaahe dhoop khile ya barse megh, par apno ka na chhoote kabhi saath"
    ],
    "linesEnglish": [
      "May each turning season hand you gentle memories shining clear and sweet",
      "Through bright sunshine or soft rainfall, may dear hands never lose their beat"
    ]
  },
  {
    "title": "सुख की घड़ी में — नववर्ष शुभ संदेश",
    "titleEnglish": "Graceful humility in sunlit — New Year Wish",
    "linesHindi": [
      "सुख की घड़ी में विनम्रता और दुख में धैर्य सदा आपके पास रहे",
      "नए साल में आपका जीवन एक सुंदर और शांत उदाहरण के रूप में रहे"
    ],
    "linesHinglish": [
      "Sukh ki ghadi mein vinamrata aur dukh mein dhairya sada aapke paas rahe",
      "Naye saal mein aapka jeevan ek sundar aur shaant udaaharan ke roop mein rahe"
    ],
    "linesEnglish": [
      "Graceful humility in sunlit hours and steady patience if shadows pass",
      "May your gentle life stand glowing like calm light upon clear glass"
    ]
  },
  {
    "title": "बड़ों के चरणों का — नववर्ष शुभ संदेश",
    "titleEnglish": "Warm blessings from elders — New Year Wish",
    "linesHindi": [
      "बड़ों के चरणों का आशीर्वाद और छोटों के लबों की प्यारी हँसी",
      "यही दौलत आपके घर में पूरे नए साल रहे हमेशा बसी"
    ],
    "linesHinglish": [
      "Badon ke charanon ka aasheervaad aur chhoton ke labon ki pyaari hansi",
      "Yahi daulat aapke ghar mein poore naye saal rahe hamesha basi"
    ],
    "linesEnglish": [
      "Warm blessings from elders’ gentle palms and carefree laughter from the young",
      "May such true wealth remain inside your home till every year’s song is sung"
    ]
  },
  {
    "title": "बिना किसी डर के — नववर्ष शुभ संदेश",
    "titleEnglish": "Step forward fearless and — New Year Wish",
    "linesHindi": [
      "बिना किसी डर के आगे बढ़ें और हर नए चैलेंज को हँसकर जीतें",
      "नए साल के ये तीन सौ पैंसठ दिन आपके सबसे बेहतरीन बीते"
    ],
    "linesHinglish": [
      "Bina kisi dar ke aage badhein aur har naye challenge ko hanskar jeetein",
      "Naye saal ke yeh teen sau painsath din aapke sabse behtareen beete"
    ],
    "linesEnglish": [
      "Step forward fearless and overcome every fresh hurdle with a quiet grin",
      "May these three hundred sixty-five dawns shine brighter than all years have been"
    ]
  },
  {
    "title": "दिल की ज़मीन पर — नववर्ष शुभ संदेश",
    "titleEnglish": "May hopeful seeds planted — New Year Wish",
    "linesHindi": [
      "दिल की ज़मीन पर उम्मीद का बीज हमेशा हरा-भरा रहे",
      "नए साल में आपके हर काम में ऊपर वाले का हाथ धरा रहे"
    ],
    "linesHinglish": [
      "Dil ki zameen par ummeed ka beej hamesha hara-bhara rahe",
      "Naye saal mein aapke har kaam mein oopar waale ka haath dhara rahe"
    ],
    "linesEnglish": [
      "May hopeful seeds planted inside your heart stay lush and green always",
      "May quiet grace rest steadily over every honest path you trace"
    ]
  },
  {
    "title": "तन्हा शामें अब महफ़िलों — नववर्ष शुभ संदेश",
    "titleEnglish": "May quiet evenings fill — New Year Wish",
    "linesHindi": [
      "तन्हा शामें अब महफ़िलों में बदलें और सूनी राहें गुलज़ार हों",
      "नए साल में आपकी दुनिया में सिर्फ़ सच्चे दिल और सच्चे यार हों"
    ],
    "linesHinglish": [
      "Tanha shaamein ab mehfilon mein badlein aur sooni raahein gulzaar hon",
      "Naye saal mein aapki duniya mein sirf sachche dil aur sachche yaar hon"
    ],
    "linesEnglish": [
      "May quiet evenings fill with warm company and lonely paths turn lush with cheer",
      "May only genuine hearts and faithful companions walk beside your year"
    ]
  },
  {
    "title": "जिस मुकाम के लिए — नववर्ष शुभ संदेश",
    "titleEnglish": "Every milestone you spent — New Year Wish",
    "linesHindi": [
      "जिस मुकाम के लिए आपने रातें जागी हैं, वह इस साल करीब आए",
      "आपकी आँखों की मेहनत एक दिन सुंदर कामयाबी में बदल जाए"
    ],
    "linesHinglish": [
      "Jis mukaam ke liye aapne raatein jaagi hain, wah is saal kareeb aaye",
      "Aapki aankhon ki mehnat ek din sundar kaamyaabi mein badal jaaye"
    ],
    "linesEnglish": [
      "Every milestone you spent quiet midnight hours chasing—may it draw close now",
      "May tireless patience crown your forehead with proud triumph on your brow"
    ]
  },
  {
    "title": "मन में कोई मैल — नववर्ष शुभ संदेश",
    "titleEnglish": "May grudges melt away — New Year Wish",
    "linesHindi": [
      "मन में कोई मैल न रहे, हर दिल में करुणा और प्यार का वास हो",
      "इस नए साल पूरी धरती पर अमन, चैन और खुशियों का प्रकाश हो"
    ],
    "linesHinglish": [
      "Man mein koi mail na rahe, har dil mein karuna aur pyaar ka waas ho",
      "Is naye saal poori dharti par aman, chain aur khushiyon ka prakaash ho"
    ],
    "linesEnglish": [
      "May grudges melt away until compassion and tender kindness softly reign",
      "May calm peace and hopeful radiance shine across every valley and plain"
    ]
  },
  {
    "title": "हर सफ़र की थकान — नववर्ष शुभ संदेश",
    "titleEnglish": "May one warm smile — New Year Wish",
    "linesHindi": [
      "हर सफ़र की थकान अपनों की एक मुस्कान से उतर जाए",
      "नए साल में आपकी ज़िंदगी किसी मधुर कविता सी संवर जाए"
    ],
    "linesHinglish": [
      "Har safar ki thakaan apno ki ek muskaan se utar jaaye",
      "Naye saal mein aapki zindagi kisi madhur kavita si sanwar jaaye"
    ],
    "linesEnglish": [
      "May one warm smile from loved ones lift every mile’s fatigue away",
      "May your life flow gracefully like gentle poetry through every day"
    ]
  },
  {
    "title": "चाय की महक सा — नववर्ष शुभ संदेश",
    "titleEnglish": "Unpretentious as steaming chai — New Year Wish",
    "linesHindi": [
      "चाय की महक सा सादा और अपनों सा गहरा हो आपका हर दिन",
      "नए साल की ढेरों बधाइयाँ मेरे सबसे प्यारे दोस्त, तुम बिन सब सुन"
    ],
    "linesHinglish": [
      "Chai ki mehek sa saada aur apno sa gehra ho aapka har din",
      "Naye saal ki dheron badhaaiyaan mere sabse pyaare dost, tum bin sab sun"
    ],
    "linesEnglish": [
      "Unpretentious as steaming chai and deep as family love may your days grow",
      "Warmest New Year greetings, dearest friend—my world shines brighter when you glow"
    ]
  },
  {
    "title": "नए साल में कभी — नववर्ष शुभ संदेश",
    "titleEnglish": "In this New Year — New Year Wish",
    "linesHindi": [
      "नए साल में कभी भी सच्चे सपनों का पीछा करना मत छोड़ना",
      "हर नया सवेरा तुम्हें अपनी मंज़िल के और नज़दीक ले जाएगा मोड़ना"
    ],
    "linesHinglish": [
      "Naye saal mein kabhi bhi sachche sapno ka peechha karna mat chhodna",
      "Har naya savera tumhein apni manzil ke aur nazdeek le jaayega modna"
    ],
    "linesEnglish": [
      "In this New Year never cease chasing the quiet dreams closest to your soul",
      "Every turning dawn nudges your footsteps nearer toward your cherished goal"
    ]
  },
  {
    "title": "आपकी मेज़ पर हमेशा — नववर्ष शुभ संदेश",
    "titleEnglish": "May sweet nourishment grace — New Year Wish",
    "linesHindi": [
      "आपकी मेज़ पर हमेशा मीठा भोजन हो और दिल में संतुष्टि का गीत",
      "नए साल में आपको मिले दुनिया की सबसे प्यारी और सच्ची जीत"
    ],
    "linesHinglish": [
      "Aapki mez par hamesha meetha bhojan ho aur dil mein santushti ka geet",
      "Naye saal mein aapko mile duniya ki sabse pyaari aur sachchi jeet"
    ],
    "linesEnglish": [
      "May sweet nourishment grace your table and peaceful songs hum deep inside",
      "May the New Year bring quiet, honest victories you cherish with pride"
    ]
  },
  {
    "title": "बीते दुखों की छाया — नववर्ष शुभ संदेश",
    "titleEnglish": "May shadows from old — New Year Wish",
    "linesHindi": [
      "बीते दुखों की छाया कभी आने वाले उजालों पर न पड़े",
      "नए साल में आपके हर अच्छे संकल्प सच की ज़मीन पर खिल खड़े"
    ],
    "linesHinglish": [
      "Beete dukhon ki chhaaya kabhi aane waale ujaalon par na pade",
      "Naye saal mein aapke har achhe sankalp sach ki zameen par khil khade"
    ],
    "linesEnglish": [
      "May shadows from old sorrows never darken bright mornings waiting near",
      "May every good intention take root firmly and blossom right here"
    ]
  },
  {
    "title": "दूरी चाहे हज़ारों किलोमीटर — नववर्ष शुभ संदेश",
    "titleEnglish": "Though thousands of miles — New Year Wish",
    "linesHindi": [
      "दूरी चाहे हज़ारों किलोमीटर की हो पर दिलों का तार जुड़ा रहे",
      "नए साल की हर दुआ में हमेशा आपका प्यारा नाम लिखा रहे"
    ],
    "linesHinglish": [
      "Doori chaahe hazaaron kilometer ki ho par dilon ka taar juda rahe",
      "Naye saal ki har dua mein hamesha aapka pyaara naam likha rahe"
    ],
    "linesEnglish": [
      "Though thousands of miles stretch out between, our hearts stay tuned as one",
      "Your dear name remains woven into every blessing whispered toward the sun"
    ]
  },
  {
    "title": "हँसी बांटते रहें आप — नववर्ष शुभ संदेश",
    "titleEnglish": "Keep sharing gentle smiles — New Year Wish",
    "linesHindi": [
      "हँसी बांटते रहें आप और बदले में अनगिनत दुआएं समेटते रहें",
      "नए साल में आप हर ऊँचाई को विनम्रता के साथ छूते रहें"
    ],
    "linesHinglish": [
      "Hansi baantte rahein aap aur badle mein anginat duaayein sametate rahein",
      "Naye saal mein aap har oonchaai ko vinamrata ke saath chhoote rahein"
    ],
    "linesEnglish": [
      "Keep sharing gentle smiles and gathering countless warm prayers in return",
      "May you reach every proud height gracefully with wisdom still to learn"
    ]
  },
  {
    "title": "सर्दियों की गुनगुनी धूप — नववर्ष शुभ संदेश",
    "titleEnglish": "May every arriving day — New Year Wish",
    "linesHindi": [
      "सर्दियों की गुनगुनी धूप जैसा सुकून दे आपका हर आने वाला दिन",
      "नए साल में न बीते कोई पल कभी अपनों की मुस्कान के बिन"
    ],
    "linesHinglish": [
      "Sardiyon ki gunguni dhoop jaisa sukoon de aapka har aane waala din",
      "Naye saal mein na beete koi pal kabhi apno ki muskaan ke bin"
    ],
    "linesEnglish": [
      "May every arriving day comfort you softly like gentle winter sunbeams clear",
      "May not one passing hour go by without the smiles of loved ones near"
    ]
  },
  {
    "title": "कठिन प्रश्नों के आसान — नववर्ष शुभ संदेश",
    "titleEnglish": "Clear gentle answers to — New Year Wish",
    "linesHindi": [
      "कठिन प्रश्नों के आसान उत्तर और उलझे रास्तों की सीधी डगर मिले",
      "नए साल में हर भटके मन को सुकून का अपना सुंदर घर मिले"
    ],
    "linesHinglish": [
      "Kathin prashnon ke aasaan uttar aur uljhe raaston ki seedhi dagar mile",
      "Naye saal mein har bhatke man ko sukoon ka apna sundar ghar mile"
    ],
    "linesEnglish": [
      "Clear gentle answers to tangled questions and straight trails through misty air",
      "May every wandering spirit find a peaceful home waiting right there"
    ]
  },
  {
    "title": "पैसे से भी बड़ी — नववर्ष शुभ संदेश",
    "titleEnglish": "Richer than coin or — New Year Wish",
    "linesHindi": [
      "पैसे से भी बड़ी जो दौलत है, वह सच्चा प्यार आपके पास रहे",
      "नए साल का हर महीना आपके लिए नई खुशखबरी का एहसास रहे"
    ],
    "linesHinglish": [
      "Paise se bhi badi jo daulat hai, wah sachcha pyaar aapke paas rahe",
      "Naye saal ka har mahina aapke liye nayi khushkhabri ka ehsaas rahe"
    ],
    "linesEnglish": [
      "Richer than coin or gold—may genuine love remain steadfastly yours",
      "May every single month unwrap sweet gladness behind gently opened doors"
    ]
  },
  {
    "title": "हर सुबह ईश्वर का — नववर्ष शुभ संदेश",
    "titleEnglish": "Morning rising with gentle — New Year Wish",
    "linesHindi": [
      "हर सुबह ईश्वर का आभार और हर रात सुकून का विश्राम मिले",
      "नए साल में आपकी ज़िंदगी को सबसे सुंदर और सुखद मुकाम मिले"
    ],
    "linesHinglish": [
      "Har subah Ishwar ka aabhaar aur har raat sukoon ka vishraam mile",
      "Naye saal mein aapki zindagi ko sabse sundar aur sukhad mukaam mile"
    ],
    "linesEnglish": [
      "Morning rising with gentle gratitude and nightfall cradling calm repose",
      "May your journey discover its loveliest harbor wherever life goes"
    ]
  },
  {
    "title": "दिलों से नफ़रतें मिटें — नववर्ष शुभ संदेश",
    "titleEnglish": "May cold resentment fade — New Year Wish",
    "linesHindi": [
      "दिलों से नफ़रतें मिटें और घरों में खुशहाली के फूल खिलें",
      "नए साल में पुराने बिछड़े हुए यार फिर से गले आ मिलें"
    ],
    "linesHinglish": [
      "Dilon se nafratein mitein aur gharon mein khushhaali ke phool khilein",
      "Naye saal mein puraane bichhde hue yaar phir se gale aa milein"
    ],
    "linesEnglish": [
      "May cold resentment fade from hearts while peace blooms warm inside each hall",
      "May long-parted friends reunite with open hugs before winter leaves fall"
    ]
  },
  {
    "title": "आपकी आँखों का कोई — नववर्ष शुभ संदेश",
    "titleEnglish": "May none of your — New Year Wish",
    "linesHindi": [
      "आपकी आँखों का कोई सपना कभी आँसू बनकर न बहे",
      "नए साल में हर हकीकत आपसे बढ़कर प्यारी और सुखद रहे"
    ],
    "linesHinglish": [
      "Aapki aankhon ka koi sapna kabhi aansoo bankar na bahe",
      "Naye saal mein har haqeeqat aapse badhkar pyaari aur sukhad rahe"
    ],
    "linesEnglish": [
      "May none of your cherished dreams dissolve as quiet tears down your cheek",
      "May waking life bloom lovelier still than every silent wish you seek"
    ]
  },
  {
    "title": "धूप छांव से भरी — नववर्ष शुभ संदेश",
    "titleEnglish": "Across a shifting world — New Year Wish",
    "linesHindi": [
      "धूप छांव से भरी इस दुनिया में आपका आँगन सदा महकता रहे",
      "नए साल में हर दिन आपका जीवन चिड़ियों सा चहकता रहे"
    ],
    "linesHinglish": [
      "Dhoop chhaanv se bhari is duniya mein aapka aangan sada mehakta rahe",
      "Naye saal mein har din aapka jeevan chidiyon sa chehakta rahe"
    ],
    "linesEnglish": [
      "Across a shifting world of light and shade, may your courtyard stay sweet",
      "May every morning find your spirit singing bright as songbirds greet"
    ]
  },
  {
    "title": "सफलता के नए शिखर — नववर्ष शुभ संदेश",
    "titleEnglish": "Touch bold new summits — New Year Wish",
    "linesHindi": [
      "सफलता के नए शिखर चूमो और अपनों के दिलों में राज करो",
      "नए साल की नई सुबह से तुम अपने सुंदर जीवन का आगाज़ करो"
    ],
    "linesHinglish": [
      "Safalta ke naye shikhar choomo aur apno ke dilon mein raaj karo",
      "Naye saal ki nayi subah se tum apne sundar jeevan ka aagaaz karo"
    ],
    "linesEnglish": [
      "Touch bold new summits of accomplishment while reigning gently inside loved hearts",
      "Begin the radiant chapter of your life right as tomorrow’s morning starts"
    ]
  },
  {
    "title": "इक्तीस दिसंबर की रात — नववर्ष स्वागत",
    "titleEnglish": "When clock hands draw — New Year Eve",
    "linesHindi": [
      "इक्तीस दिसंबर की रात घड़ी की सुइयाँ जब बारह के करीब आती हैं",
      "तो बीती हँसी और आने वाले कल की धड़कनें एक साथ गुनगुनाती हैं"
    ],
    "linesHinglish": [
      "Iktis December ki raat ghadi ki suiyaan jab baarah ke kareeb aati hain",
      "To beeti hansi aur aane wale kal ki dhadkanein ek saath gungunaati hain"
    ],
    "linesEnglish": [
      "When clock hands draw near twelve on this thirty-first December night",
      "Yesterday’s laughter and tomorrow’s pulse hum together in warm light"
    ]
  },
  {
    "title": "छत पर दोस्तों की — नववर्ष स्वागत",
    "titleEnglish": "Friends gathered on rooftops — New Year Eve",
    "linesHindi": [
      "छत पर दोस्तों की महफ़िल और आसमान में चमकती आतिशबाज़ी की लकीर",
      "न्यू ईयर ईव की इस रात हर चेहरे पर खिल उठी उम्मीद की तस्वीर"
    ],
    "linesHinglish": [
      "Chhat par doston ki mehfil aur aasmaan mein chamakti aatishbaazi ki lakeer",
      "New Year Eve ki is raat har chehre par khil uthi ummeed ki tasveer"
    ],
    "linesEnglish": [
      "Friends gathered on rooftops beneath bright trails of midnight fire",
      "Every face glows tonight on New Year’s Eve with hopes rising higher"
    ]
  },
  {
    "title": "ग्यारह बजकर उनसठ मिनट — नववर्ष स्वागत",
    "titleEnglish": "At eleven fifty-nine the — New Year Eve",
    "linesHindi": [
      "ग्यारह बजकर उनसठ मिनट पर थम सी जाती है पूरी कायनात की सांस",
      "एक सेकंड बाद शुरू होने वाला है खुशियों से भरा नया इतिहास"
    ],
    "linesHinglish": [
      "Gyaarah bajkar unsath minute par tham si jaati hai poori kaaynaat ki saans",
      "Ek second baad shuru hone waala hai khushiyon se bhara naya itihaas"
    ],
    "linesEnglish": [
      "At eleven fifty-nine the whole night seems to hold its quiet breath",
      "One heartbeat away begins a joyful chapter waking fresh beneath"
    ]
  },
  {
    "title": "फुलझड़ियों की रौशनी में — नववर्ष स्वागत",
    "titleEnglish": "Hand-held sparklers illuminate this — New Year Eve",
    "linesHindi": [
      "फुलझड़ियों की रौशनी में चमक उठी आज दिसंबर की आखिरी रात",
      "पुराने ग़म भुलाकर दिल ने थामा नए जश्न का मुस्कुराता हाथ"
    ],
    "linesHinglish": [
      "Phuljhadiyon ki roshni mein chamak uthi aaj December ki aakhiri raat",
      "Puraane gham bhulaakar dil ne thaama naye jashn ka muskurata haath"
    ],
    "linesEnglish": [
      "Hand-held sparklers illuminate this final night of cold December",
      "Leaving old sorrow behind, our hearts clasp tonight’s bright ember"
    ]
  },
  {
    "title": "दस से एक तक — नववर्ष स्वागत",
    "titleEnglish": "Counting down from ten — New Year Eve",
    "linesHindi": [
      "दस से एक तक की उलटी गिनती में बसी है बच्चों जैसी उमंग",
      "आधी रात के शोर में घुल गया यारों की हँसी का प्यारा रंग"
    ],
    "linesHinglish": [
      "Das se ek tak ki ulti ginti mein basi hai bachchon jaisi umang",
      "Aadhi raat ke shor mein ghul gaya yaaron ki hansi ka pyaara rang"
    ],
    "linesEnglish": [
      "Counting down from ten to one brings back pure childlike cheer",
      "Friends’ hearty laughter blends into the midnight chime drawing near"
    ]
  },
  {
    "title": "सर्द हवा में गूंजता — नववर्ष स्वागत",
    "titleEnglish": "Warm music drifts through — New Year Eve",
    "linesHindi": [
      "सर्द हवा में गूंजता संगीत और हाथों में गरम कॉफी का प्याला",
      "न्यू ईयर ईव ने हर उदास कोने में फिर से कर दिया उजाला"
    ],
    "linesHinglish": [
      "Sard hawa mein goonjta sangeet aur haathon mein garam coffee ka pyaala",
      "New Year Eve ne har udaas kone mein phir se kar diya ujaala"
    ],
    "linesEnglish": [
      "Warm music drifts through winter air beside steaming mugs we hold",
      "New Year’s Eve lights up every quiet corner before the night grows old"
    ]
  },
  {
    "title": "तारे भी आज झुककर — नववर्ष स्वागत",
    "titleEnglish": "Even stars lean low — New Year Eve",
    "linesHindi": [
      "तारे भी आज झुककर देखते हैं ज़मीन पर जलती दीपों की कतार",
      "बाहर पटाखों का जश्न है और भीतर अपनों से बेशुमार प्यार"
    ],
    "linesHinglish": [
      "Taare bhi aaj jhukkar dekhte hain zameen par jalti deepakon ki kataar",
      "Baahar pataakhon ka jashn hai aur bheetar apno se beshumaar pyaar"
    ],
    "linesEnglish": [
      "Even stars lean low tonight to watch rows of lanterns below glow bright",
      "Fireworks bloom across the sky while love fills rooms on this Eve night"
    ]
  },
  {
    "title": "आधी रात को जब — नववर्ष स्वागत",
    "titleEnglish": "When midnight strikes and — New Year Eve",
    "linesHindi": [
      "आधी रात को जब सारा शहर एक आवाज़ में खुशी से चिल्लाया",
      "उस पल मैंने चुपके से अपने परिवार की सलामती का दीप जलाया"
    ],
    "linesHinglish": [
      "Aadhi raat ko jab saara shehar ek aawaaz mein khushi se chillaaya",
      "Us pal maine chupke se apne parivaar ki salaamati ka deep jalaaya"
    ],
    "linesEnglish": [
      "When midnight strikes and the city cheers together with joyful might",
      "I quietly whisper a grateful wish for my family’s warmth and light"
    ]
  },
  {
    "title": "सड़कों पर रंगीन झालरें — नववर्ष स्वागत",
    "titleEnglish": "Strings of lights drape — New Year Eve",
    "linesHindi": [
      "सड़कों पर रंगीन झालरें और छतों पर नाचते क़दमों की थिरकन",
      "इक्तीस की इस जादुई रात को भूल न पाएगा कभी ये मन"
    ],
    "linesHinglish": [
      "Sadkon par rangeen jhaalrein aur chhaton par naachte kadmon ki thirkan",
      "Iktis ki is jaadui raat ko bhool na paayega kabhi yeh man"
    ],
    "linesEnglish": [
      "Strings of lights drape lively streets as footsteps dance up high",
      "My heart will cherish this enchanted thirty-first beneath the open sky"
    ]
  },
  {
    "title": "घड़ी के काँटे जब — नववर्ष स्वागत",
    "titleEnglish": "When both hands of — New Year Eve",
    "linesHindi": [
      "घड़ी के काँटे जब बारह पर आकर एक दूसरे से गले मिलते हैं",
      "तब अनगिनत नए सपने एक साथ आँखों के आसमान में खिलते हैं"
    ],
    "linesHinglish": [
      "Ghadi ke kaante jab baarah par aakar ek doosre se gale milte hain",
      "Tab anginat naye sapne ek saath aankhon ke aasmaan mein khilte hain"
    ],
    "linesEnglish": [
      "When both hands of the midnight clock embrace at twelve on cue",
      "Countless hopeful dreams blossom across our eyes shiny and new"
    ]
  },
  {
    "title": "नए साल की दहलीज़ — नववर्ष स्वागत",
    "titleEnglish": "Pausing at the threshold — New Year Eve",
    "linesHindi": [
      "नए साल की दहलीज़ पर आज रात कुछ देर ठहरकर झूम लेते हैं",
      "बीते कल को सलाम करके आने वाली सुबह का माथा चूम लेते हैं"
    ],
    "linesHinglish": [
      "Naye saal ki dehleez par aaj raat kuch der theharkar jhoom lete hain",
      "Beete kal ko salaam karke aane waali subah ka maatha choom lete hain"
    ],
    "linesEnglish": [
      "Pausing at the threshold of tomorrow, we sway and celebrate tonight",
      "Saluting days behind us while kissing the brow of morning light"
    ]
  },
  {
    "title": "कैमरे में क़ैद हो — नववर्ष स्वागत",
    "titleEnglish": "Cameras capture beaming smiles — New Year Eve",
    "linesHindi": [
      "कैमरे में क़ैद हो रही हैं खिलखिलाते चेहरों की ये प्यारी तस्वीरें",
      "न्यू ईयर ईव की शाम बुन रही है दोस्ती की पक्की ज़ंजीरें"
    ],
    "linesHinglish": [
      "Camera mein qaid ho rahi hain khilkhilate chehron ki yeh pyaari tasveerein",
      "New Year Eve ki shaam bun rahi hai dosti ki pakki zanjeerein"
    ],
    "linesEnglish": [
      "Cameras capture beaming smiles and laughter frozen mid-embrace",
      "This festive evening weaves unbreakable friendship in one joyful space"
    ]
  },
  {
    "title": "चूल्हे पर पकता केक — नववर्ष स्वागत",
    "titleEnglish": "A warm cake baking — New Year Eve",
    "linesHindi": [
      "चूल्हे पर पकता केक और कमरों में गूंजती बच्चों की किलकारी",
      "इसी सादगी से सजती है हर साल हमारी ये रात सबसे प्यारी"
    ],
    "linesHinglish": [
      "Choolhe par pakta cake aur kamron mein goonjti bachchon ki kilkaari",
      "Isi saadgi se sajti hai har saal hamaari yeh raat sabse pyaari"
    ],
    "linesEnglish": [
      "A warm cake baking in the kitchen while children giggle down the hall",
      "Such tender simplicity makes tonight the sweetest celebration of all"
    ]
  },
  {
    "title": "सुनहरी रौशनी में नहाए — नववर्ष स्वागत",
    "titleEnglish": "Golden flares tint drifting — New Year Eve",
    "linesHindi": [
      "सुनहरी रौशनी में नहाए बादल और हवा में तैरते गुब्बारे",
      "आधी रात के जश्न में आज चमक उठे धरती के सारे नज़ारे"
    ],
    "linesHinglish": [
      "Sunehri roshni mein nahaaye baadal aur hawa mein tairte gubbaare",
      "Aadhi raat ke jashn mein aaj chamak uthe dharti ke saare nazaare"
    ],
    "linesEnglish": [
      "Golden flares tint drifting clouds as glowing lanterns float on breeze",
      "Midnight festivities brighten every rooftop, street, and sleeping trees"
    ]
  },
  {
    "title": "कोई क्लब में झूम — नववर्ष स्वागत",
    "titleEnglish": "Some dance beneath loud — New Year Eve",
    "linesHindi": [
      "कोई क्लब में झूम रहा है तो कोई अपनों के पास बैठा है चुपचाप",
      "हर किसी के लिए इक्तीस दिसंबर लाती है एक सुकून भरी छाप"
    ],
    "linesHinglish": [
      "Koi club mein jhoom raha hai to koi apno ke paas baitha hai chupchaap",
      "Har kisi ke liye iktis December laati hai ek sukoon bhari chhaap"
    ],
    "linesEnglish": [
      "Some dance beneath loud neon lights while others sit softly beside kin",
      "This thirty-first night leaves a soothing mark before fresh days begin"
    ]
  },
  {
    "title": "अलावा की लपटों के — नववर्ष स्वागत",
    "titleEnglish": "Sitting beside a crackling — New Year Eve",
    "linesHindi": [
      "अलावा की लपटों के पास बैठकर छू रही है मन को मीठी धुन",
      "गिनती के पल बचे हैं अब बस दिल से इस पल को ले गुन"
    ],
    "linesHinglish": [
      "Alaav ki lapton ke paas baithkar chhoo rahi hai man ko meethi dhun",
      "Ginti ke pal bache hain ab bas dil se is pal ko le gun"
    ],
    "linesEnglish": [
      "Sitting beside a crackling bonfire while soft acoustic chords play low",
      "Only seconds remain now—breathe in this magic moment’s gentle glow"
    ]
  },
  {
    "title": "आज रात हर फोन — नववर्ष स्वागत",
    "titleEnglish": "Phones ring across distant — New Year Eve",
    "linesHindi": [
      "आज रात हर फोन पर बज रही है अपनों की खनकती कॉल",
      "दूरी चाहे जितनी हो फिर भी दिलों में भरा है उत्सव वाला माहौल"
    ],
    "linesHinglish": [
      "Aaj raat har phone par baj rahi hai apno ki khanakti call",
      "Doori chaahe jitni ho phir bhi dilon mein bhara hai utsav waala mahaul"
    ],
    "linesEnglish": [
      "Phones ring across distant miles with cherished voices calling near",
      "No distance dims the festive warmth that pulls our hearts together here"
    ]
  },
  {
    "title": "ठंडी ओस में भीगी — नववर्ष स्वागत",
    "titleEnglish": "Cool dew gathers along — New Year Eve",
    "linesHindi": [
      "ठंडी ओस में भीगी बालकनी और हाथ में जलती सुनहरी मोमबत्ती",
      "आधी रात के इस संगम पर खिल उठी दिल की हर सोई बत्ती"
    ],
    "linesHinglish": [
      "Thandi os mein bheegi balcony aur haath mein jalti sunehri mombatti",
      "Aadhi raat ke is sangam par khil uthi dil ki har soi batti"
    ],
    "linesEnglish": [
      "Cool dew gathers along the balcony where a golden candle sways",
      "At midnight’s crossing, every dormant spark inside the heart ablaze"
    ]
  },
  {
    "title": "नींद को आज आंखों — नववर्ष स्वागत",
    "titleEnglish": "Let sleep stay gently — New Year Eve",
    "linesHindi": [
      "नींद को आज आंखों से थोड़ा दूर ही रहने दो मेरे यार",
      "साल में एक ही बार आता है बारह बजने का ये अद्भुत त्योहार"
    ],
    "linesHinglish": [
      "Neend ko aaj aankhon se thoda door hi rehne do mere yaar",
      "Saal mein ek hi baar aata hai baarah bajne ka yeh adbhut tyohaar"
    ],
    "linesEnglish": [
      "Let sleep stay gently outside our eyelids for one more hour tonight",
      "This wondrous midnight crossing visits only once in a whole year’s flight"
    ]
  },
  {
    "title": "आतिशबाज़ी के रंग जब — नववर्ष स्वागत",
    "titleEnglish": "When blooming fireworks shower — New Year Eve",
    "linesHindi": [
      "आतिशबाज़ी के रंग जब काले आसमान पर फूल बरसाते हैं",
      "तब अनजाने चेहरे भी एक दूसरे को देख मुस्कुराते हैं"
    ],
    "linesHinglish": [
      "Aatishbaazi ke rang jab kaale aasmaan par phool barsaate hain",
      "Tab anjaane chehre bhi ek doosre ko dekh muskuraate hain"
    ],
    "linesEnglish": [
      "When blooming fireworks shower bright petals across the velvet sky",
      "Even strangers turn toward each other with a shared and joyful sigh"
    ]
  },
  {
    "title": "दिसंबर की आख़िरी साँझ — नववर्ष स्वागत",
    "titleEnglish": "When December s closing — New Year Eve",
    "linesHindi": [
      "दिसंबर की आख़िरी साँझ ने जब ओढ़ी सितारों की चमकीली चादर",
      "तो हर गली में बिखर गया नए साल के स्वागत का आदर"
    ],
    "linesHinglish": [
      "December ki aakhiri saanjh ne jab odhi sitaaron ki chamkeeli chaadar",
      "To har gali mein bikhar gaya naye saal ke swaagat ka aadar"
    ],
    "linesEnglish": [
      "When December’s closing dusk wraps itself in a shawl of silver stars",
      "Warm hospitality fills every lane awaiting midnight from afar"
    ]
  },
  {
    "title": "गिटार की तारों पर — नववर्ष स्वागत",
    "titleEnglish": "Acoustic guitar strings hum — New Year Eve",
    "linesHindi": [
      "गिटार की तारों पर गूंजता है पुरानी दोस्ती का मीठा तराना",
      "इक्तीस की रात बन जाती है ज़िंदगी का सबसे हसीन फ़साना"
    ],
    "linesHinglish": [
      "Guitar ki taaron par goonjta hai puraani dosti ka meetha taraana",
      "Iktis ki raat ban jaati hai zindagi ka sabse haseen fasaana"
    ],
    "linesEnglish": [
      "Acoustic guitar strings hum the sweet anthem of long-held camaraderie",
      "Thirty-first night transforms into life’s most radiant golden memory"
    ]
  },
  {
    "title": "रंग-बिरंगे गुब्बारों से सजा — नववर्ष स्वागत",
    "titleEnglish": "Colorful balloons dress up — New Year Eve",
    "linesHindi": [
      "रंग-बिरंगे गुब्बारों से सजा घर और मेज़ पर मिठाई की थाल",
      "बच्चों की चहचहाहट से रोशन हो गई नए साल की पूर्व संध्या कमाल"
    ],
    "linesHinglish": [
      "Rang-birange gubbaaron se saja ghar aur mez par mithaai ki thaal",
      "Bachchon ki chehchahaahat se roshan ho gayi naye saal ki poorv sandhya kamaal"
    ],
    "linesEnglish": [
      "Colorful balloons dress up the living room beside platters of sweets",
      "Children’s giggles turn New Year’s Eve into magic on cozy seats"
    ]
  },
  {
    "title": "चाँद भी आज बादलों — नववर्ष स्वागत",
    "titleEnglish": "Even the moon peeks — New Year Eve",
    "linesHindi": [
      "चाँद भी आज बादलों से निकलकर देख रहा है ज़मीन का शोर",
      "पूरा संसार जाग रहा है स्वागत करने एक नई सुनहरी भोर"
    ],
    "linesHinglish": [
      "Chaand bhi aaj baadalon se nikalkar dekh raha hai zameen ka shor",
      "Poora sansaar jaag raha hai swaagat karne ek nayi sunehri bhor"
    ],
    "linesEnglish": [
      "Even the moon peeks clear of clouds to watch our jubilant roar",
      "Half the waking world stays lit to welcome one bright golden shore"
    ]
  },
  {
    "title": "कपड़ों पर चमकता सितारा — नववर्ष स्वागत",
    "titleEnglish": "Festive shimmer on winter — New Year Eve",
    "linesHindi": [
      "कपड़ों पर चमकता सितारा और आंखों में अगले कल का ख्वाब",
      "आज रात हर दिल के पास है मुस्कुराने का एक खूबसूरत जवाब"
    ],
    "linesHinglish": [
      "Kapdon par chamakta sitaara aur aankhon mein agle kal ka khwaab",
      "Aaj raat har dil ke paas hai muskurane ka ek khoobsurat jawaab"
    ],
    "linesEnglish": [
      "Festive shimmer on winter coats and bright tomorrows in our gaze",
      "Tonight every beating heart holds a lovely reason to smile and praise"
    ]
  },
  {
    "title": "जैसे-जैसे घटते हैं काउंटडाउन — नववर्ष स्वागत",
    "titleEnglish": "As the final ten — New Year Eve",
    "linesHindi": [
      "जैसे-जैसे घटते हैं काउंटडाउन के आखिरी दस सेकंड मेरे दोस्त",
      "दिल की रफ्तार बढ़ जाती है और आँखें खोजती हैं खुशियों का स्रोत"
    ],
    "linesHinglish": [
      "Jaise-jaise ghatte hain countdown ke aakhiri das second mere dost",
      "Dil ki raftaar badh jaati hai aur aankhein khojti hain khushiyon ka srot"
    ],
    "linesEnglish": [
      "As the final ten seconds of the countdown tick swiftly away, my friend",
      "Heartbeats quicken with wonder where old paths meet a radiant bend"
    ]
  },
  {
    "title": "हाथ में हाथ थामे — नववर्ष स्वागत",
    "titleEnglish": "Holding hands tightly as — New Year Eve",
    "linesHindi": [
      "हाथ में हाथ थामे जब हम साथ-साथ गिनते हैं पाँच, चार, तीन",
      "तब लगता है दुनिया का सबसे खूबसूरत पल यही है सबसे हसीन"
    ],
    "linesHinglish": [
      "Haath mein haath thaame jab hum saath-saath ginte hain paanch, chaar, teen",
      "Tab lagta hai duniya ka sabse khoobsurat pal yahi hai sabse haseen"
    ],
    "linesEnglish": [
      "Holding hands tightly as we chant five, four, three into midnight air",
      "Nothing on earth feels lovelier than standing together right there"
    ]
  },
  {
    "title": "दो और एक के — नववर्ष स्वागत",
    "titleEnglish": "After two and one — New Year Eve",
    "linesHindi": [
      "दो और एक के बाद जब गूंजती है आधी रात की पहली ताली",
      "तो हर उदास चेहरे पर भी छा जाती है खुशियों की लाली"
    ],
    "linesHinglish": [
      "Do aur ek ke baad jab goonjti hai aadhi raat ki pehli taali",
      "To har udaas chehre par bhi chhaa jaati hai khushiyon ki laali"
    ],
    "linesEnglish": [
      "After two and one when midnight’s very first applause rings loud and clear",
      "Even the quietest face warms up with rosy joy and genuine cheer"
    ]
  },
  {
    "title": "बर्फ़ीली हवा भी आज — नववर्ष स्वागत",
    "titleEnglish": "Even icy December gusts — New Year Eve",
    "linesHindi": [
      "बर्फ़ीली हवा भी आज नहीं रोक पाती जश्न मनाने वालों के कदम",
      "गुनगुनी चाय और गले लगने से पिघल जाते हैं सारे रंजो-ग़म"
    ],
    "linesHinglish": [
      "Barfeeli hawa bhi aaj nahi rok paati jashn manaane waalon ke kadam",
      "Gunguni chai aur gale lagne se pighal jaate hain saare ranjo-gham"
    ],
    "linesEnglish": [
      "Even icy December gusts cannot slow dancing feet down tonight",
      "Steaming tea and warm hugs melt every trace of sorrow out of sight"
    ]
  },
  {
    "title": "इक्तीस की रात जब — नववर्ष स्वागत",
    "titleEnglish": "When tall city towers — New Year Eve",
    "linesHindi": [
      "इक्तीस की रात जब रोशन होते हैं शहर के ऊंचे-ऊंचे मीनार",
      "तो हर दिल गा उठता है नई उम्मीदों की प्यारी सी मल्हार"
    ],
    "linesHinglish": [
      "Iktis ki raat jab roshan hote hain shehar ke oonche-oonche meenaar",
      "To har dil gaa uthta hai nayi ummeedon ki pyaari si malhaar"
    ],
    "linesEnglish": [
      "When tall city towers glow in gold and emerald on thirty-first night",
      "Every hopeful heart sings softly a melody of fresh morning light"
    ]
  },
  {
    "title": "पुराने कैलेंडर के आखिरी — नववर्ष स्वागत",
    "titleEnglish": "Celebrating the year s — New Year Eve",
    "linesHindi": [
      "पुराने कैलेंडर के आखिरी दिन पर जश्न सिर्फ़ तारीख बदलने का नहीं",
      "ये तो शुक्रिया है उन पलों का जिन्होंने हमें तोड़ा नहीं, बल्कि निखारा यहीं"
    ],
    "linesHinglish": [
      "Puraane calendar ke aakhiri din par jashn sirf taarikh badalne ka nahi",
      "Yeh to shukriya hai un palon ka jinhone humein toda nahi, balki nikhaara yahin"
    ],
    "linesEnglish": [
      "Celebrating the year’s final night isn’t merely flipping a wall date",
      "It honors every storm that shaped our grace instead of sealing our fate"
    ]
  },
  {
    "title": "गाड़ियों के हॉर्न और — नववर्ष स्वागत",
    "titleEnglish": "Joyful street echoes and — New Year Eve",
    "linesHindi": [
      "गाड़ियों के हॉर्न और दूर से आती ढोल की मस्त थाप",
      "नए साल की पूर्व संध्या मिटा देती है मन की हर थकान अपने आप"
    ],
    "linesHinglish": [
      "Gaadiyon ke horn aur door se aati dhol ki mast thaap",
      "Naye saal ki poorv sandhya mita deti hai man ki har thakaan apne aap"
    ],
    "linesEnglish": [
      "Joyful street echoes and distant drumbeats rising through midnight chill",
      "New Year’s Eve washes away a year’s fatigue with effortless thrill"
    ]
  },
  {
    "title": "हाथ में फुलझड़ी लेकर — नववर्ष स्वागत",
    "titleEnglish": "When children twirl bright — New Year Eve",
    "linesHindi": [
      "हाथ में फुलझड़ी लेकर जब बच्चे गोल-गोल घुमाते हैं उजाला",
      "तो लगता है किसी ने रात के आँगन में तारों का हार ही डाल डाला"
    ],
    "linesHinglish": [
      "Haath mein phuljhadi lekar jab bachche gol-gol ghumaate hain ujaala",
      "To lagta hai kisi ne raat ke aangan mein taaron ka haar hi daal daala"
    ],
    "linesEnglish": [
      "When children twirl bright sparklers in golden circles through the yard",
      "It feels as though someone draped fresh stars across the night courtyard"
    ]
  },
  {
    "title": "मेज़ पर सजी मोमबत्तियों — नववर्ष स्वागत",
    "titleEnglish": "Soft candle flames flicker — New Year Eve",
    "linesHindi": [
      "मेज़ पर सजी मोमबत्तियों की धीमी-धीमी सी मद्धम लौ",
      "अपनों संग बीती इक्तीस की शाम दे जाती है सुकून सौ-सौ"
    ],
    "linesHinglish": [
      "Mez par saji mombattiyon ki dheemi-dheemi si maddham lau",
      "Apno sang beeti iktis ki shaam de jaati hai sukoon sau-sau"
    ],
    "linesEnglish": [
      "Soft candle flames flicker steadily across our shared dinner table",
      "New Year’s Eve beside loved ones leaves hearts peaceful, warm, and stable"
    ]
  },
  {
    "title": "एक तरफ़ पटाखों की — नववर्ष स्वागत",
    "titleEnglish": "Crackling fireworks out in — New Year Eve",
    "linesHindi": [
      "एक तरफ़ पटाखों की गड़गड़ाहट, दूसरी तरफ़ दिल में शांति का राग",
      "इक्तीस की रात ने जला दिया हर निराशा के भीतर उम्मीद का चिराग"
    ],
    "linesHinglish": [
      "Ek taraf pataakhon ki gadgadaahat, doosri taraf dil mein shaanti ka raag",
      "Iktis ki raat ne jala diya har niraasha ke bheetar ummeed ka chiraag"
    ],
    "linesEnglish": [
      "Crackling fireworks out in the cold, quiet peace humming inside the chest",
      "Tonight lights an unbroken lantern of hope where heavy doubts once pressed"
    ]
  },
  {
    "title": "आज की रात कोई — नववर्ष स्वागत",
    "titleEnglish": "May nobody sit lonely — New Year Eve",
    "linesHindi": [
      "आज की रात कोई अकेला न रहे, हर दरवाज़े पर दस्तक दे खुशी",
      "इक्तीस दिसंबर की हवा में घुल जाए बस मोहब्बत और दोस्ती की हँसी"
    ],
    "linesHinglish": [
      "Aaj ki raat koi akela na rahe, har darwaaze par dastak de khushi",
      "Iktis December ki hawa mein ghul jaaye bas mohabbat aur dosti ki hansi"
    ],
    "linesEnglish": [
      "May nobody sit lonely tonight, may joy knock softly on every door",
      "May warm affection and friendly laughter fill December’s thirty-first air once more"
    ]
  },
  {
    "title": "चूड़ियों की खनक और — नववर्ष स्वागत",
    "titleEnglish": "Clinking bangles and piping-hot — New Year Eve",
    "linesHindi": [
      "चूड़ियों की खनक और कड़ाके की सर्दी में गरमा-गरम जलेबी की महक",
      "देसी अंदाज़ में न्यू ईयर ईव मनाने का मज़ा ही है सबसे अलग और चहक"
    ],
    "linesHinglish": [
      "Choodiyon ki khanak aur kadaake ki sardi mein garma-garam jalebi ki mehek",
      "Desi andaaz mein New Year Eve manaane ka maza hi hai sabse alag aur chehek"
    ],
    "linesEnglish": [
      "Clinking bangles and piping-hot sweets perfuming the crisp winter night",
      "Celebrating New Year’s Eve the desi way carries its own radiant delight"
    ]
  },
  {
    "title": "बंद कमरों के बाहर — नववर्ष स्वागत",
    "titleEnglish": "Stepping outside closed rooms — New Year Eve",
    "linesHindi": [
      "बंद कमरों के बाहर आकर आज आसमान तले बैठते हैं सब लोग",
      "बाहर आतिशों का रंग है और भीतर ख़त्म हो गया हर पुराना सोग"
    ],
    "linesHinglish": [
      "Band kamron ke baahar aakar aaj aasmaan tale baithte hain sab log",
      "Baahar aatishon ka rang hai aur bheetar khatm ho gaya har puraana sog"
    ],
    "linesEnglish": [
      "Stepping outside closed rooms to gather beneath the wide starry dome",
      "Colorful fireworks paint the sky while quiet relief fills our home"
    ]
  },
  {
    "title": "बारह बजने से ठीक — नववर्ष स्वागत",
    "titleEnglish": "Right before twelve when — New Year Eve",
    "linesHindi": [
      "बारह बजने से ठीक पहले जब सब खामोशी से आँखें मूंद लेते हैं",
      "तब अनकही दुआएँ एक साथ आसमान की ओर उड़ान भर लेते हैं"
    ],
    "linesHinglish": [
      "Baarah bajne se theek pehle jab sab khamoshi se aankhein moond lete hain",
      "Tab ankahi duaayein ek saath aasmaan ki ore udaan bhar lete hain"
    ],
    "linesEnglish": [
      "Right before twelve when everybody closes their eyes in gentle hush",
      "Unspoken prayers rise skyward together in a luminous, silent rush"
    ]
  },
  {
    "title": "बर्फ़ सी ठंडी रात — नववर्ष स्वागत",
    "titleEnglish": "Even through frosty midnight — New Year Eve",
    "linesHindi": [
      "बर्फ़ सी ठंडी रात में भी धड़क रहा है दिलों में उत्सव का ताप",
      "यारों की महफ़िल ने बना दिया इक्तीस की शाम को यादगार अपने आप"
    ],
    "linesHinglish": [
      "Barf si thandi raat mein bhi dhadak raha hai dilon mein utsav ka taap",
      "Yaaron ki mehfil ne bana diya iktis ki shaam ko yaadgaar apne aap"
    ],
    "linesEnglish": [
      "Even through frosty midnight chill, festive warmth beats strong inside",
      "Good friends around one glowing fire make tonight unforgettable with pride"
    ]
  },
  {
    "title": "रात के बारह बजते — नववर्ष स्वागत",
    "titleEnglish": "At twelve sharp only — New Year Eve",
    "linesHindi": [
      "रात के बारह बजते ही बदल जाएगी सिर्फ़ घड़ी और दीवार की तारीख",
      "पर ये दोस्ती, ये अपनापन रहेगा हर आने वाले मौसम के करीब"
    ],
    "linesHinglish": [
      "Raat ke baarah bajte hi badal jaayegi sirf ghadi aur deewar ki taarikh",
      "Par yeh dosti, yeh apnapan rahega har aane waale mausam ke kareeb"
    ],
    "linesEnglish": [
      "At twelve sharp only the clock and wall calendar turn a fresh page",
      "Yet our friendship and tender bond stay timeless through every stage"
    ]
  },
  {
    "title": "कॉलोनी की छत से — नववर्ष स्वागत",
    "titleEnglish": "From our neighborhood rooftop — New Year Eve",
    "linesHindi": [
      "कॉलोनी की छत से दिखती दूर शहर की जगमगाती हुई रौशनी",
      "न्यू ईयर ईव की इस रात ने कर दी हर उदास गली चांदनी"
    ],
    "linesHinglish": [
      "Colony ki chhat se dikhti door shehar ki jagmagaati hui roshni",
      "New Year Eve ki is raat ne kar di har udaas gali chaandni"
    ],
    "linesEnglish": [
      "From our neighborhood rooftop we watch distant skylines shimmer bright",
      "New Year’s Eve drapes every quiet alley in silver celebratory light"
    ]
  },
  {
    "title": "पुराने गीतों पर थिरकते — नववर्ष स्वागत",
    "titleEnglish": "When elders smile and — New Year Eve",
    "linesHindi": [
      "पुराने गीतों पर थिरकते बुज़ुर्गों के चेहरे पर जब मुस्कान आती है",
      "तब इक्तीस दिसंबर की रात सच में जन्नत सी बन जाती है"
    ],
    "linesHinglish": [
      "Puraane geeton par thirakte buzurgo ke chehre par jab muskaan aati hai",
      "Tab iktis December ki raat sach mein jannat si ban jaati hai"
    ],
    "linesEnglish": [
      "When elders smile and sway softly to timeless songs from long ago",
      "This thirty-first night feels like a slice of heaven warming here below"
    ]
  },
  {
    "title": "गर्म कंबल ओढ़े खिड़की — नववर्ष स्वागत",
    "titleEnglish": "Wrapped in warm blankets — New Year Eve",
    "linesHindi": [
      "गर्म कंबल ओढ़े खिड़की से देखते हैं आकाश में उड़ते लालटेन",
      "इक्तीस की रात में बसा है कुछ अनोखा सा सुकून और चैन"
    ],
    "linesHinglish": [
      "Garm kambal odhe khidki se dekhte hain aakaash mein udte lantern",
      "Iktis ki raat mein basa hai kuch anokha sa sukoon aur chain"
    ],
    "linesEnglish": [
      "Wrapped in warm blankets by the window watching sky lanterns drift high",
      "A rare tranquility fills this December Eve beneath the glowing sky"
    ]
  },
  {
    "title": "शहर की हर सड़क — नववर्ष स्वागत",
    "titleEnglish": "Rivers of colored bulbs — New Year Eve",
    "linesHindi": [
      "शहर की हर सड़क पर आज रंगीन लाइटों की नदियाँ बह रही हैं",
      "मानो हर धड़कन आने वाले नए साल से कुछ मीठा कह रही है"
    ],
    "linesHinglish": [
      "Shehar ki har sadak par aaj rangeen lighton ki nadiyaan beh rahi hain",
      "Maano har dhadkan aane waale naye saal se kuch meetha keh rahi hai"
    ],
    "linesEnglish": [
      "Rivers of colored bulbs flow down city avenues tonight in radiant streams",
      "As if every heartbeat whispers sweet promises to tomorrow’s dreams"
    ]
  },
  {
    "title": "आधी रात का वो — नववर्ष स्वागत",
    "titleEnglish": "That priceless midnight moment — New Year Eve",
    "linesHindi": [
      "आधी रात का वो एक पल जब सब अपने मोबाइल नीचे रख देते हैं",
      "और आँखों में आँखें डालकर मुस्कुराते हुए गले लग लेते हैं"
    ],
    "linesHinglish": [
      "Aadhi raat ka woh ek pal jab sab apne mobile neeche rakh dete hain",
      "Aur aankhon mein aankhein daalkar muskurate hue gale lag lete hain"
    ],
    "linesEnglish": [
      "That priceless midnight moment when everyone sets their phone aside",
      "And meets each other’s eyes to wrap one another in hugs wide"
    ]
  },
  {
    "title": "आसमान से गिरती हल्की — नववर्ष स्वागत",
    "titleEnglish": "Gentle mist drifts from — New Year Eve",
    "linesHindi": [
      "आसमान से गिरती हल्की धुंध और ज़मीन पर नाचती रौशनी की कली",
      "इक्तीस दिसंबर की ये रात लगती है सपनों की कोई सुंदर गली"
    ],
    "linesHinglish": [
      "Aasmaan se girti halki dhundh aur zameen par naachti roshni ki kali",
      "Iktis December ki yeh raat lagti hai sapno ki koi sundar gali"
    ],
    "linesEnglish": [
      "Gentle mist drifts from above while festive lights dance on the street",
      "Thirty-first night feels like a dreamy lane where starlight and wonder meet"
    ]
  },
  {
    "title": "आज हर कोई तैयार — नववर्ष स्वागत",
    "titleEnglish": "Tonight everyone stands ready — New Year Eve",
    "linesHindi": [
      "आज हर कोई तैयार है पुराने बोझ को पीछे छोड़ने के लिए",
      "आधी रात का जश्न बना है नए हौसलों की डोर जोड़ने के लिए"
    ],
    "linesHinglish": [
      "Aaj har koi taiyaar hai puraane bojh ko peeche chhodne ke liye",
      "Aadhi raat ka jashn bana hai naye hauslon ki dor jodne ke liye"
    ],
    "linesEnglish": [
      "Tonight everyone stands ready to lay heavy yesterdays gently down",
      "Midnight’s celebration ties fresh courage around our hopeful town"
    ]
  },
  {
    "title": "कप में भाप उड़ाती — नववर्ष स्वागत",
    "titleEnglish": "Steaming mugs beside fresh — New Year Eve",
    "linesHindi": [
      "कप में भाप उड़ाती कॉफी और मेज़ पर सजे ताज़े गुलाब के फूल",
      "न्यू ईयर ईव की शाम कहती है—बीती सारी खताएं जा अब भूल"
    ],
    "linesHinglish": [
      "Cup mein bhaap udaati coffee aur mez par saje taaze gulaab ke phool",
      "New Year Eve ki shaam kehti hai—beeti saari khataayein ja ab bhool"
    ],
    "linesEnglish": [
      "Steaming mugs beside fresh roses resting softly on our table tonight",
      "New Year’s Eve whispers kindly to forgive old slips before morning light"
    ]
  },
  {
    "title": "चमकीले रिबन संगीत की — नववर्ष स्वागत",
    "titleEnglish": "Glittering ribbons lively beats — New Year Eve",
    "linesHindi": [
      "चमकीले रिबन, संगीत की बीट और यारों की बेफिक्र हँसी",
      "इक्तीस की रात ने फिर से दिलों में ताज़ा जवानी सी बसी"
    ],
    "linesHinglish": [
      "Chamkeele ribbon, sangeet ki beat aur yaaron ki befikr hansi",
      "Iktis ki raat ne phir se dilon mein taaza jawaani si basi"
    ],
    "linesEnglish": [
      "Glittering ribbons, lively beats, and friends laughing without a care",
      "Thirty-first night breathes effortless youthfulness back into crisp air"
    ]
  },
  {
    "title": "जब घड़ी की टिकटिक — नववर्ष स्वागत",
    "titleEnglish": "When steady ticking quickens — New Year Eve",
    "linesHindi": [
      "जब घड़ी की टिकटिक तेज होकर आखिरी मिनट में बदल जाती है",
      "तब हर साँस में एक नया जोश और नई उमंग भर जाती है"
    ],
    "linesHinglish": [
      "Jab ghadi ki tiktik tez hokar aakhiri minute mein badal jaati hai",
      "Tab har saans mein ek naya josh aur nayi umang bhar jaati hai"
    ],
    "linesEnglish": [
      "When steady ticking quickens inside the last minute before twelve chimes",
      "Every breath fills with electric spark and excitement for coming times"
    ]
  },
  {
    "title": "आज न कोई शिकायत — नववर्ष स्वागत",
    "titleEnglish": "Tonight holds no grudges — New Year Eve",
    "linesHindi": [
      "आज न कोई शिकायत होगी, न किसी रूठे मन की पुरानी बात",
      "सिर्फ़ मोहब्बत और संगीत के नाम होगी ये इक्तीस दिसंबर की रात"
    ],
    "linesHinglish": [
      "Aaj na koi shikaayat hogi, na kisi roothe man ki puraani baat",
      "Sirf mohabbat aur sangeet ke naam hogi yeh iktis December ki raat"
    ],
    "linesEnglish": [
      "Tonight holds no grudges, no rehearsing arguments from days gone by",
      "Only warmth and music claim this thirty-first beneath the open sky"
    ]
  },
  {
    "title": "छोटी-छोटी बालकनियों से भी — नववर्ष स्वागत",
    "titleEnglish": "When joyful cheers echo — New Year Eve",
    "linesHindi": [
      "छोटी-छोटी बालकनियों से भी जब आवाज आती है हैप्पी न्यू ईयर की",
      "तो अनजान पड़ोसी भी बन जाते हैं हिस्सेदार एक खूबसूरत सफर की"
    ],
    "linesHinglish": [
      "Chhoti-chhoti balconiyon se bhi jab aawaaz aati hai Happy New Year ki",
      "To anjaan padosi bhi ban jaate hain hissedar ek khoobsurat safar ki"
    ],
    "linesEnglish": [
      "When joyful cheers echo across neighboring balconies at midnight’s bell",
      "Unfamiliar neighbors share one bright beginning where kind wishes dwell"
    ]
  },
  {
    "title": "मोमबत्ती की लौ में — नववर्ष स्वागत",
    "titleEnglish": "Innocent children s eyes — New Year Eve",
    "linesHindi": [
      "मोमबत्ती की लौ में चमकते मासूम बच्चों के वो सुंदर नैन",
      "न्यू ईयर ईव की रात दे जाती है पूरे घर को बेशकीमती चैन"
    ],
    "linesHinglish": [
      "Mombatti ki lau mein chamakte maasoom bachchon ke woh sundar nain",
      "New Year Eve ki raat de jaati hai poore ghar ko beshkeemti chain"
    ],
    "linesEnglish": [
      "Innocent children’s eyes reflecting tiny candle flames in quiet wonder",
      "New Year’s Eve blesses the whole household with peace nothing can sunder"
    ]
  },
  {
    "title": "आतिशबाज़ी की गूंज के — नववर्ष स्वागत",
    "titleEnglish": "Even amidst booming fireworks — New Year Eve",
    "linesHindi": [
      "आतिशबाज़ी की गूंज के बीच भी सुन लेना मेरे दिल की हल्की आवाज़",
      "इस साल के आखिरी पलों में तुम ही हो मेरे सबसे प्यारे हमराज़"
    ],
    "linesHinglish": [
      "Aatishbaazi ki goonj ke beech bhi sun lena mere dil ki halki aawaaz",
      "Is saal ke aakhiri palon mein tum hi ho mere sabse pyaare humraaz"
    ],
    "linesEnglish": [
      "Even amidst booming fireworks hear my heart’s soft whisper clear",
      "In this year’s closing seconds, you remain my closest confidant dear"
    ]
  },
  {
    "title": "सर्द रात की धुंध — नववर्ष स्वागत",
    "titleEnglish": "When crimson and gold — New Year Eve",
    "linesHindi": [
      "सर्द रात की धुंध में भी जब चमक उठता है लाल और सुनहरा रंग",
      "तो न्यू ईयर ईव के जश्न में हर दिल हो जाता है उमंग से दंग"
    ],
    "linesHinglish": [
      "Sard raat ki dhundh mein bhi jab chamak uthta hai laal aur sunehra rang",
      "To New Year Eve ke jashn mein har dil ho jaata hai umang se dang"
    ],
    "linesEnglish": [
      "When crimson and gold bursts gleam straight through thick winter fog",
      "New Year’s Eve astonishes every tired soul like sunlight through smog"
    ]
  },
  {
    "title": "आधी रात को जब — नववर्ष स्वागत",
    "titleEnglish": "Standing together upon the — New Year Eve",
    "linesHindi": [
      "आधी रात को जब छत पर खड़े होकर हम आसमान को ताकते हैं",
      "तो हर टूटते पटाखे संग अपने दिल के प्यारे ख्वाब माँगते हैं"
    ],
    "linesHinglish": [
      "Aadhi raat ko jab chhat par khade hokar hum aasmaan ko taakte hain",
      "To har tootate pataakhe sang apne dil ke pyaare khwaab maangte hain"
    ],
    "linesEnglish": [
      "Standing together upon the rooftop gazing up at midnight’s open frame",
      "With every golden spark descending, we wish quietly without shame"
    ]
  },
  {
    "title": "किचन से आती गरम — नववर्ष स्वागत",
    "titleEnglish": "Spiced tea and hot — New Year Eve",
    "linesHindi": [
      "किचन से आती गरम समोसे और मसाला चाय की मनमोहक खुशबू",
      "घर पर मनाई न्यू ईयर ईव में होती है एक अनोखी और प्यारी जादू"
    ],
    "linesHinglish": [
      "Kitchen se aati garam samose aur masala chai ki manmohak khushboo",
      "Ghar par manaayi New Year Eve mein hoti hai ek anokhi aur pyaari jaadoo"
    ],
    "linesEnglish": [
      "Spiced tea and hot snacks wafting warmth straight out the kitchen door",
      "Homemade New Year’s Eve holds a tender magic crowds can never pour"
    ]
  },
  {
    "title": "नए साल से ठीक — नववर्ष स्वागत",
    "titleEnglish": "This night before January — New Year Eve",
    "linesHindi": [
      "नए साल से ठीक पहले की ये रात बड़ी खामोशी से समझा जाती है",
      "कि जो पल आज अपनों के साथ हैं, वही असली दौलत कहलाती है"
    ],
    "linesHinglish": [
      "Naye saal se theek pehle ki yeh raat badi khamoshi se samjha jaati hai",
      "Ki jo pal aaj apno ke saath hain, wahi asli daulat kehlaati hai"
    ],
    "linesEnglish": [
      "This night before January arrives teaches one gentle truth so clear",
      "That hours spent close to loved ones are the truest treasure here"
    ]
  },
  {
    "title": "नाचते हुए थक जाएं — नववर्ष स्वागत",
    "titleEnglish": "Feet may grow tired — New Year Eve",
    "linesHindi": [
      "नाचते हुए थक जाएं पाँव पर मुस्कुराना न रुके आज की शाम",
      "इक्तीस की ये हसीन रात लिख दे हमारी यादों में एक सुनहरा नाम"
    ],
    "linesHinglish": [
      "Naachte hue thak jaayein paanw par muskurana na ruke aaj ki shaam",
      "Iktis ki yeh haseen raat likh de hamaari yaadon mein ek sunehra naam"
    ],
    "linesEnglish": [
      "Feet may grow tired from dancing while our smiles keep glowing wide",
      "Let this lovely thirty-first etch a golden memory deep inside"
    ]
  },
  {
    "title": "घड़ी में जैसे ही — नववर्ष स्वागत",
    "titleEnglish": "The instant clocks chime — New Year Eve",
    "linesHindi": [
      "घड़ी में जैसे ही बजेंगे बारह, हवा में गूंज उठेगा नया संगीत",
      "भूलकर सारी दूरियां आज एक साथ गुनगुनाएंगे हम प्यार के गीत"
    ],
    "linesHinglish": [
      "Ghadi mein jaise hi bajenge baarah, hawa mein goonj uthega naya sangeet",
      "Bhoolkar saari dooriyaan aaj ek saath gungunaayenge hum pyaar ke geet"
    ],
    "linesEnglish": [
      "The instant clocks chime twelve, fresh melodies ripple through midnight air",
      "Setting aside every distance, we sing warm songs together there"
    ]
  },
  {
    "title": "सर्द दिसंबर की रात — नववर्ष स्वागत",
    "titleEnglish": "Even inside chilly December — New Year Eve",
    "linesHindi": [
      "सर्द दिसंबर की रात में भी दिल धड़क रहे हैं किसी बसंत की तरह",
      "न्यू ईयर ईव का हर लम्हा खिल रहा है ताज़े गुलाब के अनंत की तरह"
    ],
    "linesHinglish": [
      "Sard December ki raat mein bhi dil dhadak rahe hain kisi basant ki tarah",
      "New Year Eve ka har lamha khil raha hai taaze gulaab ke anant ki tarah"
    ],
    "linesEnglish": [
      "Even inside chilly December darkness, hearts pulse as bright as spring",
      "Each moment of New Year’s Eve blooms like fresh roses welcoming everything"
    ]
  },
  {
    "title": "पुराने गीत चाय की — नववर्ष स्वागत",
    "titleEnglish": "Nostalgic songs warm sips — New Year Eve",
    "linesHindi": [
      "पुराने गीत, चाय की चुस्की और दोस्तों के बीच छेड़े गए मीठे किस्से",
      "इक्तीस दिसंबर की रात दे जाती है ज़िंदगी के सबसे प्यारे हिस्से"
    ],
    "linesHinglish": [
      "Puraane geet, chai ki chuski aur doston ke beech chhede gaye meethe kisse",
      "Iktis December ki raat de jaati hai zindagi ke sabse pyaare hisse"
    ],
    "linesEnglish": [
      "Nostalgic songs, warm sips of tea, and playful stories shared with friends",
      "Thirty-first night hands us life’s sweetest pieces before December ends"
    ]
  },
  {
    "title": "आसमान में फूटती चिंगारियाँ — नववर्ष स्वागत",
    "titleEnglish": "Sparks blooming overhead announce — New Year Eve",
    "linesHindi": [
      "आसमान में फूटती चिंगारियाँ बता रही हैं कि अंधेरा अब जाने को है",
      "बस चंद पल और हैं, फिर नया सवेरा हर घर में आने को है"
    ],
    "linesHinglish": [
      "Aasmaan mein phootati chingaariyaan bata rahi hain ki andhera ab jaane ko hai",
      "Bas chand pal aur hain, phir naya savera har ghar mein aane ko hai"
    ],
    "linesEnglish": [
      "Sparks blooming overhead announce that old shadows are about to fade",
      "Just a few fleeting beats remain before dawn’s bright promise is made"
    ]
  },
  {
    "title": "हर खिड़की से झांकती — नववर्ष स्वागत",
    "titleEnglish": "Lights glowing out of — New Year Eve",
    "linesHindi": [
      "हर खिड़की से झांकती रौशनी कह रही है आज की रात ख़ास है",
      "चाहे कितनी भी सर्दी हो बाहर, पर दिलों के भीतर पूरा विश्वास है"
    ],
    "linesHinglish": [
      "Har khidki se jhaankti roshni keh rahi hai aaj ki raat khaas hai",
      "Chaahe kitni bhi sardi ho baahar, par dilon ke bheetar poora vishwaas hai"
    ],
    "linesEnglish": [
      "Lights glowing out of every window testify tonight stands set apart",
      "Despite biting frost outside, steady faith warms every waiting heart"
    ]
  },
  {
    "title": "तुम्हारे हाथ में मेरा — नववर्ष स्वागत",
    "titleEnglish": "Your hand resting inside — New Year Eve",
    "linesHindi": [
      "तुम्हारे हाथ में मेरा हाथ और सामने काउंटडाउन की चमकती घड़ी",
      "इक्तीस दिसंबर की ये रात बन गई हमारे इश्क़ की सबसे सुंदर कड़ी"
    ],
    "linesHinglish": [
      "Tumhaare haath mein mera haath aur saamne countdown ki chamakti ghadi",
      "Iktis December ki yeh raat ban gayi hamaare ishq ki sabse sundar kadi"
    ],
    "linesEnglish": [
      "Your hand resting inside mine before the glowing countdown clock on high",
      "Thirty-first night becomes the loveliest link beneath our midnight sky"
    ]
  },
  {
    "title": "जो बात साल भर — नववर्ष स्वागत",
    "titleEnglish": "Words kept tucked inside — New Year Eve",
    "linesHindi": [
      "जो बात साल भर दिल में छुपी रही, आज बारह बजने पर कह दो",
      "नए साल की शुरुआत किसी अपने की सच्ची मुस्कान के नाम कर दो"
    ],
    "linesHinglish": [
      "Jo baat saal bhar dil mein chhupi rahi, aaj baarah bajne par keh do",
      "Naye saal ki shuruaat kisi apne ki sachchi muskaan ke naam kar do"
    ],
    "linesEnglish": [
      "Words kept tucked inside all year—let midnight’s chime set them free",
      "Dedicate the opening breath of January to someone’s genuine glee"
    ]
  },
  {
    "title": "रंगीन कागज़ की बरसात — नववर्ष स्वागत",
    "titleEnglish": "Confetti showering downward amidst — New Year Eve",
    "linesHindi": [
      "रंगीन कागज़ की बरसात और छत पर उड़ती हँसी की फुहार",
      "साल की इस आख़िरी रात में समाया है खुशियों का संसार"
    ],
    "linesHinglish": [
      "Rangeen kaagaz ki barsaat aur chhat par udti hansi ki phuhaar",
      "Saal ki is aakhiri raat mein samaaya hai khushiyon ka sansaar"
    ],
    "linesEnglish": [
      "Confetti showering downward amidst bursts of carefree rooftop glee",
      "This final night holds a whole bright universe of joy for you and me"
    ]
  },
  {
    "title": "ठंडी सड़क पर टहलते — नववर्ष स्वागत",
    "titleEnglish": "Unrushed footsteps along cool — New Year Eve",
    "linesHindi": [
      "ठंडी सड़क पर टहलते कदम और हाथों में जलता मीठा सा गीत",
      "न्यू ईयर ईव याद दिलाती है कि ज़िंदगी है कितनी प्यारी मीत"
    ],
    "linesHinglish": [
      "Thandi sadak par tehalte kadam aur haathon mein jalta meetha sa geet",
      "New Year Eve yaad dilaati hai ki zindagi hai kitni pyaari meet"
    ],
    "linesEnglish": [
      "Unrushed footsteps along cool avenues humming soft tunes in warm mittens",
      "New Year’s Eve reminds us gently how richly sweet this life is written"
    ]
  },
  {
    "title": "चाय की टपरी से — नववर्ष स्वागत",
    "titleEnglish": "From roadside tea stalls — New Year Eve",
    "linesHindi": [
      "चाय की टपरी से लेकर बड़े महलों तक आज एक ही धुन बजती है",
      "इक्तीस की रात हर अमीर-ग़रीब के चेहरे पर समान खुशी सजती है"
    ],
    "linesHinglish": [
      "Chai ki tapri se lekar bade mehlon tak aaj ek hi dhun bajti hai",
      "Iktis ki raat har ameer-gareeb ke chehre par samaan khushi sajti hai"
    ],
    "linesEnglish": [
      "From roadside tea stalls to grand rooftops, one joyful tune plays clear",
      "Thirty-first night crowns every face alike with unaffected cheer"
    ]
  },
  {
    "title": "बारह बजने से दो — नववर्ष स्वागत",
    "titleEnglish": "Two minutes short of — New Year Eve",
    "linesHindi": [
      "बारह बजने से दो मिनट पहले का वो अनोखा और मीठा इंतज़ार",
      "दिल की हर धड़कन जैसे स्वागत में खोल रही हो उम्मीद के द्वार"
    ],
    "linesHinglish": [
      "Baarah bajne se do minute pehle ka woh anokha aur meetha intezaar",
      "Dil ki har dhadkan jaise swaagat mein khol rahi ho ummeed ke dwaar"
    ],
    "linesEnglish": [
      "Two minutes short of midnight—oh, that breathless, sweet anticipation",
      "As if every pulse swings wide the gates of bright regeneration"
    ]
  },
  {
    "title": "सितारों के नीचे बैठकर — नववर्ष स्वागत",
    "titleEnglish": "Sitting under bright stars — New Year Eve",
    "linesHindi": [
      "सितारों के नीचे बैठकर जब हम गिनते हैं गुज़रे बरस की सौगातें",
      "तो आधी रात की ठंडक भी बन जाती है प्यार भरी मीठी बातें"
    ],
    "linesHinglish": [
      "Sitaaron ke neeche baithkar jab hum ginte hain guzre baras ki saugaatein",
      "To aadhi raat ki thandak bhi ban jaati hai pyaar bhari meethi baatein"
    ],
    "linesEnglish": [
      "Sitting under bright stars while counting gifts this passing year supplied",
      "Even midnight’s crispest chill turns into tender whispers side by side"
    ]
  },
  {
    "title": "नया साल आने की — नववर्ष स्वागत",
    "titleEnglish": "Excited for tomorrow s — New Year Eve",
    "linesHindi": [
      "नया साल आने की खुशी में आज पूरा शहर जागकर मुस्कुराया है",
      "आतिशबाज़ी के हर रंग ने अंधेरी रात को दुल्हन सा सजाया है"
    ],
    "linesHinglish": [
      "Naya saal aane ki khushi mein aaj poora shehar jaagkar muskuraya hai",
      "Aatishbaazi ke har rang ne andheri raat ko dulhan sa sajaaya hai"
    ],
    "linesEnglish": [
      "Excited for tomorrow’s birth, the entire waking city smiles tonight",
      "Every firework color adorns the dark sky like a bride draped in light"
    ]
  },
  {
    "title": "कंपकंपाते हाथों में थामे — नववर्ष स्वागत",
    "titleEnglish": "Chilled hands slicing warm — New Year Eve",
    "linesHindi": [
      "कंपकंपाते हाथों में थामे केक और सामने अपनों का भरा परिवार",
      "इससे सुंदर न्यू ईयर ईव भला हो सकती है क्या इस जग के पार"
    ],
    "linesHinglish": [
      "Kampkampaate haathon mein thaame cake aur saamne apno ka bhara parivaar",
      "Isse sundar New Year Eve bhala ho sakti hai kya is jag ke paar"
    ],
    "linesEnglish": [
      "Chilled hands slicing warm cake before a room filled with dear family",
      "Could any New Year’s Eve on earth feel richer than this company"
    ]
  },
  {
    "title": "आज की रात पुराने — नववर्ष स्वागत",
    "titleEnglish": "Tonight belongs to letting — New Year Eve",
    "linesHindi": [
      "आज की रात पुराने ग़मों को हवा में धुएँ सा उड़ा देने की रात है",
      "गले लगकर हर अपने को नई हँसी दे जाने की प्यारी सौगात है"
    ],
    "linesHinglish": [
      "Aaj ki raat puraane ghamon ko hawa mein dhuen sa uda dene ki raat hai",
      "Gale lagkar har apne ko nayi hansi de jaane ki pyaari saugaat hai"
    ],
    "linesEnglish": [
      "Tonight belongs to letting old sorrows vanish like smoke in winter air",
      "And gifting warm embraces and fresh smiles to loved ones gathered there"
    ]
  },
  {
    "title": "दूर कहीं चर्च की — नववर्ष स्वागत",
    "titleEnglish": "Distant bells chime softly — New Year Eve",
    "linesHindi": [
      "दूर कहीं चर्च की घंटी बजी और पास कहीं मस्जिद-मंदिर में दुआ हुई",
      "इक्तीस की रात हर इंसान की खुशहाली के लिए एक जैसी सदा हुई"
    ],
    "linesHinglish": [
      "Door kahin church ki ghanti baji aur paas kahin masjid-mandir mein dua hui",
      "Iktis ki raat har insaan ki khushhaali ke liye ek jaisi sada hui"
    ],
    "linesEnglish": [
      "Distant bells chime softly while prayers rise gently near and far",
      "Tonight one shared blessing wishes every human peace beneath each star"
    ]
  },
  {
    "title": "बच्चों ने जलाई फुलझड़ी — नववर्ष स्वागत",
    "titleEnglish": "Children light small sparklers — New Year Eve",
    "linesHindi": [
      "बच्चों ने जलाई फुलझड़ी, बुज़ुर्गों ने दी सर पर हाथ रख आशीष",
      "न्यू ईयर ईव की इस रात हर आँगन में झुक गया सुकून का शीश"
    ],
    "linesHinglish": [
      "Bachchon ne jalaayi phuljhadi, buzurgo ne di sar par haath rakh aasheesh",
      "New Year Eve ki is raat har aangan mein jhuk gaya sukoon ka sheesh"
    ],
    "linesEnglish": [
      "Children light small sparklers while elders lay warm blessings on each head",
      "Calm serenity bows softly over courtyards where sweet hope is bred"
    ]
  },
  {
    "title": "साल के आख़िरी साठ — नववर्ष स्वागत",
    "titleEnglish": "In the closing sixty — New Year Eve",
    "linesHindi": [
      "साल के आख़िरी साठ सेकंड में थाम लो किसी अपने का नर्म हाथ",
      "ज़िंदगी की सबसे सुंदर शुरुआत होती है सच्चे प्यार के साथ"
    ],
    "linesHinglish": [
      "Saal ke aakhiri saath second mein thaam lo kisi apne ka narm haath",
      "Zindagi ki sabse sundar shuruaat hoti hai sachche pyaar ke saath"
    ],
    "linesEnglish": [
      "In the closing sixty seconds of the year, clasp a gentle hand held dear",
      "Life’s finest chapters always start beside sincere love standing near"
    ]
  },
  {
    "title": "दीवारों पर नाचती रौशनी — नववर्ष स्वागत",
    "titleEnglish": "Dancing shadows of string — New Year Eve",
    "linesHindi": [
      "दीवारों पर नाचती रौशनी की परछाइयाँ और हवा में बजता साज़",
      "इक्तीस दिसंबर की रात कर देती है हर थके हुए मन का आगाज़"
    ],
    "linesHinglish": [
      "Deewaaron par naachti roshni ki parchhaaiyaan aur hawa mein bajta saaz",
      "Iktis December ki raat kar deti hai har thake hue man ka aagaaz"
    ],
    "linesEnglish": [
      "Dancing shadows of string lights ripple softly across walls to sweet tune",
      "Thirty-first night awakens weary hearts beneath a silver winter moon"
    ]
  },
  {
    "title": "गुनगुनाती सर्दी और कान — नववर्ष स्वागत",
    "titleEnglish": "Crisp December breeze and — New Year Eve",
    "linesHindi": [
      "गुनगुनाती सर्दी और कान में बजते पुराने पसंदीदा गाने",
      "न्यू ईयर ईव पर खुल जाते हैं हँसी के सबसे अनमोल खजाने"
    ],
    "linesHinglish": [
      "Gungunati sardi aur kaan mein bajte puraane pasandeeda gaane",
      "New Year Eve par khul jaate hain hansi ke sabse anmol khajaane"
    ],
    "linesEnglish": [
      "Crisp December breeze and favorite classic songs humming in the ear",
      "New Year’s Eve unlocks the richest treasure chest of laughter every year"
    ]
  },
  {
    "title": "चाहे तुम मीलों दूर — नववर्ष स्वागत",
    "titleEnglish": "Though oceans stretch miles — New Year Eve",
    "linesHindi": [
      "चाहे तुम मीलों दूर बैठे हो सात समंदर उस पार मेरे हमदम",
      "आधी रात को एक साथ देखेंगे हम यही चाँद और यही मौसम"
    ],
    "linesHinglish": [
      "Chaahe tum meelon door baithe ho saat samandar us paar mere humdam",
      "Aadhi raat ko ek saath dekhenge hum yahi chaand aur yahi mausam"
    ],
    "linesEnglish": [
      "Though oceans stretch miles wide between us on this chilly Eve, my dear",
      "At midnight both our gazes share this moon as though you lingered near"
    ]
  },
  {
    "title": "हाथों में मोमबत्ती लिए — नववर्ष स्वागत",
    "titleEnglish": "Holding glowing candles as — New Year Eve",
    "linesHindi": [
      "हाथों में मोमबत्ती लिए जब हम नए कल का नाम पुकारते हैं",
      "तो हवा के झोंके भी सलीके से हमारे सपने संवारते हैं"
    ],
    "linesHinglish": [
      "Haathon mein mombatti liye jab hum naye kal ka naam pukaarte hain",
      "To hawa ke jhonke bhi saleeke se hamaare sapne sanwaarte hain"
    ],
    "linesEnglish": [
      "Holding glowing candles as we call tomorrow softly by its name",
      "Even passing winter gusts protectively caress each hopeful flame"
    ]
  },
  {
    "title": "इक्तीस की रात सिर्फ़ — नववर्ष स्वागत",
    "titleEnglish": "Thirty-first night is far — New Year Eve",
    "linesHindi": [
      "इक्तीस की रात सिर्फ़ शोर-शराबे और आतिशों का मेला नहीं",
      "ये तो वो पुल है जहाँ पुराना साल नए साल से मिलता है यहीं"
    ],
    "linesHinglish": [
      "Iktis ki raat sirf shor-sharaabe aur aatishon ka mela nahi",
      "Yeh to woh pul hai jahaan puraana saal naye saal se milta hai yahin"
    ],
    "linesEnglish": [
      "Thirty-first night is far more than loud cheers and bright flares in the sky",
      "It is the sacred bridge where fading years shake hands with days nearby"
    ]
  },
  {
    "title": "कहकशां सी चमक रही — नववर्ष स्वागत",
    "titleEnglish": "Rows of lamps gleam — New Year Eve",
    "linesHindi": [
      "कहकशां सी चमक रही हैं आज सड़कों पर लगी कतारें दीपों की",
      "नए साल की पूर्व संध्या सजा रही है महफ़िलें सच्चे मीतों की"
    ],
    "linesHinglish": [
      "Kehkashan si chamak rahi hain aaj sadkon par lagi kataarein deepakon ki",
      "Naye saal ki poorv sandhya saja rahi hai mehfilein sachche meeton ki"
    ],
    "linesEnglish": [
      "Rows of lamps gleam down the avenues like a fallen Milky Way tonight",
      "New Year’s Eve gathers loyal friends inside one circle warm and bright"
    ]
  },
  {
    "title": "आधी रात से पहले — नववर्ष स्वागत",
    "titleEnglish": "One proud smile before — New Year Eve",
    "linesHindi": [
      "आधी रात से पहले एक प्यारी सी मुस्कान तो बनती है यारों",
      "कि हमने मिलकर पार कर ली हर मुश्किल और पा लिए किनारे न्यारों"
    ],
    "linesHinglish": [
      "Aadhi raat se pehle ek pyaari si muskaan to banti hai yaaron",
      "Ki humne milkar paar kar li har mushkil aur paa liye kinaare nyaaron"
    ],
    "linesEnglish": [
      "One proud smile before the stroke of twelve belongs to us tonight, my friends",
      "We weathered every rocky wave together to stand right where winter bends"
    ]
  }
];

export const FESTIVALS_NEW_YEAR_175_TO_200: Shayari[] = buildFestivalShayaris(
  'new-year',
  'नया साल',
  '🎉',
  ['NewYear', 'NewYearWishes', 'NayaSaal', 'HappyNewYear'],
  26,
  NEW_YEAR_EXTRA_175
);
