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
  attitude: [
    { userName: 'रवि प्रताप', text: 'एकदम कड़क और रॉयल एटीट्यूड, स्टेटस के लिए बेस्ट है 😎' },
    { userName: 'Vansh Thakur', text: 'Kya baat hai, ekdum killer aura aur classy attitude!' },
    { userName: 'आदित्य चौहान', text: 'दिल जीत लिया भाई, शोर कम और असर ज़्यादा 🔥' },
    { userName: 'Harshil Rana', text: 'Story aur reel pe lagane ke liye zabardast lines hain!' },
  ],
  boys: [
    { userName: 'रोहित राठौड़', text: 'लड़कों के असली जज़्बात और यारी बख़ूबी लिखी है 🦁' },
    { userName: 'Kunal Deshmukh', text: 'Bhai dil ki baat likh di, zimmedari aur swag dono ek saath!' },
    { userName: 'यशवर्धन सिंह', text: 'एकदम रियल और दमदार शायरी, हर लड़के को पसंद आएगी।' },
    { userName: 'Manav Verma', text: 'Status par lagate hi sabne puchha kahaan se mili!' },
  ],
  girls: [
    { userName: 'अनन्या शर्मा', text: 'बहुत प्यारी और सशक्त लाइनें, पढ़कर गर्व महसूस हुआ 👑' },
    { userName: 'Ishita Kapoor', text: 'Pure grace aur self-respect ka behtareen andaaz ✨' },
    { userName: 'प्रिया राजपूत', text: 'नज़ाकत और हिम्मत दोनों का इतना सुंदर मेल कम दिखता है।' },
    { userName: 'Rhea Chatterjee', text: 'Every girl will relate to this classy vibe!' },
  ],
  dosti: [
    { userName: 'सौरभ पांडे', text: 'सच्चे यारों की याद दिला दी, अभी ग्रुप में भेजता हूँ 🤝' },
    { userName: 'Akash Tiwari', text: 'Chai aur yaari wali feeling ekdum taaza ho gayi yaar!' },
    { userName: 'मोहित अग्रवाल', text: 'दोस्ती की सबसे सच्ची और दिल से निकली हुई पंक्तियाँ।' },
    { userName: 'Siddharth Nair', text: 'Best friend ko tag karne ke liye perfect shayari!' },
  ],
  bewafa: [
    { userName: 'ज़ोया खान', text: 'मीठे वादों के पीछे की सच्चाई बिल्कुल साफ़ लिख दी 🥀' },
    { userName: 'Pranav Mishra', text: 'Bahut gehri baat kahi hai bina kisi shor ke.' },
    { userName: 'निधि सक्सेना', text: 'दिल को छू गई ये लाइनें, बिल्कुल सच्चा एहसास।' },
    { userName: 'Ayaan Mirza', text: 'Dil ki sachai aur self-worth dono dikhta hai ismein.' },
  ],
  breakup: [
    { userName: 'तन्मय जोशी', text: 'दर्द के साथ आगे बढ़ने की हिम्मत भी देती है यह शायरी 💔' },
    { userName: 'Sneha Kulkarni', text: 'Dil halka ho gaya padhkar, bahut real feelings hain.' },
    { userName: 'अंकित यादव', text: 'टूटने के बाद सँभलने का सबसे सच्चा एहसास लिखा है।' },
    { userName: 'Roshni Menon', text: 'Har lafz seedha dil tak pahunchta hai, very relatable.' },
  ],
  'good-morning': [
    { userName: 'सुनीता शर्मा', text: 'पढ़ते ही सुबह और भी ताज़ा और खुशनुमा हो गई 🌅' },
    { userName: 'Deepak Khanna', text: 'Family group mein subah bhejne ke liye sabse pyari line!' },
    { userName: 'राजीव गुप्ता', text: 'बहुत सकारात्मक और मीठी सुबह की शुरुआत ✨' },
    { userName: 'Pallavi Joshi', text: 'Chai ke saath padhkar din shuru karne ka maza aa gaya.' },
  ],
  'good-night': [
    { userName: 'मनीषा वर्मा', text: 'मन को बहुत सुकून मिला रात को पढ़कर, शुभ रात्रि 🌌' },
    { userName: 'Varun Sethi', text: 'Sone se pehle dil ko shaant kar dene wali pyari lines.' },
    { userName: 'अभिषेक त्रिपाठी', text: 'हर रात अपनों को भेजने के लिए सबसे अच्छी शायरी।' },
    { userName: 'Nandita Roy', text: 'Sweet dreams aur sukoon bhari raat ka ehsaas!' },
  ],
  '2-line': [
    { userName: 'कार्तिक मेहता', text: 'सिर्फ़ दो लाइनों में पूरी ज़िंदगी की बात कह दी ✨' },
    { userName: 'Tanvi Bansal', text: 'Short, crisp aur ekdum reel-caption friendly!' },
    { userName: 'प्रशांत दुबे', text: 'कम शब्दों में इतना गहरा असर, कमाल की शायरी है।' },
    { userName: 'Aarush Saini', text: 'Seedha WhatsApp bio aur status ke liye save kar li!' },
  ],
  family: [
    { userName: 'दीपाली जोशी', text: 'माँ-पापा और घर की याद ने आँखें नम कर दीं 🏡' },
    { userName: 'Gaurav Sharma', text: 'Parivaar ke pyaar se badhkar sach mein kuch nahin hota.' },
    { userName: 'रेणुका पाठक', text: 'पूरे परिवार के साथ साझा करने लायक अनमोल पंक्तियाँ ❤️' },
    { userName: 'Vivek Hegde', text: 'Ghar aur apnon ka sukoon ekdum dil se likha hai.' },
  ],
  'bhai-behen': [
    { userName: 'कनिष्का वर्मा', text: 'अपने भाई की याद आ गई पढ़कर, हर घर की यही प्यारी कहानी है 👫' },
    { userName: 'Rishabh Chauhan', text: 'Behen ke liye ekdum dil se likhi lines, turant status pe lagayi!' },
    { userName: 'आयुषी मिश्रा', text: 'लड़ाई और प्यार दोनों का इतना प्यारा मेल, दिल खुश हो गया ❤️' },
    { userName: 'Pratik Kulkarni', text: 'Bhai-behen ke rishte ki sabse sachhi aur pyari shayari!' },
  ],
  'birthday-feelings': [
    { userName: 'स्नेहा अग्रवाल', text: 'दोस्त के जन्मदिन पर भेजने के लिए सबसे प्यारी शायरी मिल गई 🎂' },
    { userName: 'Arjun Malhotra', text: 'Kisi ke special day ko aur khaas banane ke liye perfect lines!' },
    { userName: 'मानसी त्रिपाठी', text: 'इतनी दिल से निकली दुआएँ पढ़कर सामने वाला खुश हो जाएगा ✨' },
    { userName: 'Devansh Joshi', text: 'Birthday reel aur story caption ke liye ekdum classy wishes!' },
  ],
  'miss-you': [
    { userName: 'अदिति नायर', text: 'किसी खास की बहुत याद आ रही थी, बिल्कुल मन की बात कह दी 🥺' },
    { userName: 'Karanveer Gill', text: 'Door rehne walon ka dard aur pyar dono dil ko chhoo gaya.' },
    { userName: 'नताशा खान', text: 'हर लफ़्ज़ में इंतज़ार और सच्ची याद बसी हुई है ⏳' },
    { userName: 'Raghavendra Rao', text: 'Padhte hi kisi ko call karne ka mann kar gaya, bahut sachhi lines!' },
  ],
  'heart-touching': [
    { userName: 'प्रियांशु दुबे', text: 'सीधे दिल में उतर गई ये लाइनें, बार-बार पढ़ने का मन कर रहा है 💗' },
    { userName: 'Shruti Menon', text: 'Itni saadgi aur itni gehrai ek saath, sach mein lajawaab!' },
    { userName: 'अविनाश पटेल', text: 'ज़िंदगी की सबसे सच्ची बात दो लाइनों में कह दी ✨' },
    { userName: 'Mehak Kapoor', text: 'Status save kar liya, dil ko sukoon dene wali shayari hai.' },
  ],
  emotional: [
    { userName: 'सौम्या शुक्ला', text: 'पढ़ते ही आँखें भर आईं, बिल्कुल असली एहसास लिखा है 🥹' },
    { userName: 'Harshit Saxena', text: 'Dil ke andar chhupi baatein itni khoobsurti se likh di hain.' },
    { userName: 'ज़ैनब सिद्दीकी', text: 'हर जज़्बात को बख़ूबी शब्दों में ढाला है, बहुत गहरा असर पड़ा।' },
    { userName: 'Nitin Bhardwaj', text: 'Raat ki khamoshi mein dil ko chhoone wali behtareen lines.' },
  ],
  'sad-love': [
    { userName: 'अदिति चौहान', text: 'अधूरे प्यार की इतनी मीठी और सच्ची कसक लिखी है 🌧️' },
    { userName: 'Arjun Verma', text: 'Bina shikayat ke pyar ko itni khoobsurti se bayaan kiya hai.' },
    { userName: 'नूर फ़ातिमा', text: 'प्यार और इंतज़ार दोनों का एहसास दिल में उतर गया ✨' },
    { userName: 'Keshav Nair', text: 'Dil ko chhoone wali lines, bilkul real feel aaya padhkar.' },
  ],
  khwab: [
    { userName: 'आयुष तिवारी', text: 'बड़े सपनों और रात की मेहनत को सलाम करती लाजवाब शायरी 🌠' },
    { userName: 'Ananya Deshmukh', text: 'Padhkar apne adhure sapne phir se poore karne ka man kar gaya!' },
    { userName: 'दिव्यांश गुप्ता', text: 'खुली आँखों से देखे ख़्वाब की असली उड़ान इन पंक्तियों में है ✨' },
    { userName: 'Rohan Iyer', text: 'Dreamy aur motivating dono ek saath, status ke liye best hai.' },
  ],
  'matlabi-duniya': [
    { userName: 'विशाल राणा', text: 'आज के दौर की बिल्कुल खरी और सच्ची तस्वीर दिखा दी 🎭' },
    { userName: 'Pooja Bhatia', text: 'Meethi baaton ke peeche ka sach itni saadgi se likh diya!' },
    { userName: 'संदीप यादव', text: 'बिना कड़वाहट के बहुत गहरी समझदारी दे गईं ये लाइनें 👌' },
    { userName: 'Nikhil Kulkarni', text: 'Har insaan ko ek baar zaroor padhni chahiye, ekdum real!' },
  ],
  funny: [
    { userName: 'रोहन मल्होत्रा', text: 'हँसते-हँसते पेट में दर्द हो गया भाई, तुरंत दोस्तों को भेज रहा हूँ 😂' },
    { userName: 'Kritika Sharma', text: 'Itna relatable aur clean humour, story pe lagate hi sabne puchha!' },
    { userName: 'अंकुर जैन', text: 'चाय और दोस्ती पर इससे मज़ेदार शायरी आज तक नहीं पढ़ी 🤣' },
    { userName: 'Sagar Kapoor', text: 'Mood ekdum fresh ho gaya yaar, kamaal ka punch hai!' },
  ],
  sharabi: [
    { userName: 'राघव मेहरा', text: 'महफ़िल और यारी के रंग में डूबी एकदम क्लासिक शायरी 🍷' },
    { userName: 'Kabir Malhotra', text: 'Shabdon mein aisa nasha hai ki bina jaam ke hi dil jhoom utha!' },
    { userName: 'फ़ैज़ान मिर्ज़ा', text: 'मयख़ाने की सादगी और पुरानी यादें ताज़ा कर दीं इन शेरों ने ✨' },
    { userName: 'Devendra Singh', text: 'Shaam ki mehfil aur doston ke saath share karne ke liye shandaar!' },
  ],
  'self-love': [
    { userName: 'आन्या जोशी', text: 'खुद से प्यार और आत्मसम्मान की इतनी प्यारी सीख मिली 🪞✨' },
    { userName: 'Rhea Kapoor', text: 'Bilkul dil se likhi lines hain, khud ki qadr karna yaad dila diya 💖' },
    { userName: 'प्रियांशु वर्मा', text: 'बहुत सच्ची और सुकून देने वाली शायरी, अपनी कद्र करना सिखाती है।' },
    { userName: 'Simran Bedi', text: 'Self-worth aur inner peace dono ek saath mehsoos hue padhkar!' },
  ],
  sukoon: [
    { userName: 'साधना मिश्रा', text: 'पढ़ते ही मन एकदम शांत और हल्का हो गया, सच्चा सुकून मिला 🕊️' },
    { userName: 'Aarav Kulkarni', text: 'Bhaag-daud bhari zindagi mein thandak aur shanti dene wali shayari ✨' },
    { userName: 'ज़ोया सिद्दीकी', text: 'हर लफ़्ज़ में जैसे ठहरी हुई शाम और सुकून की खुशबू बसी है।' },
    { userName: 'Karan Oberoi', text: 'Raat ko padhkar dil ko ek alag hi chain mila, lajawaab lines!' },
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
