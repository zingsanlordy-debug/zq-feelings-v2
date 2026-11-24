import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const KISMAT_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'मेहनत से बदली लकीरें',
    titleEnglish: 'Lines Reshaped by Effort',
    linesHindi: [
      'हाथों की लकीरें तो सिर्फ़ इशारा देती हैं राह का',
      'असली तक़दीर तो माथे के पसीने से लिखी जाती है',
    ],
    linesHinglish: [
      'Haathon ki lakeerein to sirf ishaara deti hain raah ka',
      'Asli taqdeer to maathe ke paseene se likhi jaati hai',
    ],
    linesEnglish: [
      'The lines on our palms only point toward a direction',
      'True destiny is written by the sweat upon our brow',
    ],
  },
  {
    title: 'वक़्त का अनदेखा मोड़',
    titleEnglish: 'Unseen Turn of Time',
    linesHindi: [
      'बुरे दिनों को देखकर कभी हौसला मत खोना दोस्त',
      'किस्मत का पहिया घूमते वक़्त आवाज़ नहीं करता',
    ],
    linesHinglish: [
      'Bure dinon ko dekhkar kabhi hausla mat khona dost',
      'Kismat ka pahiya ghoomte waqt aawaaz nahin karta',
    ],
    linesEnglish: [
      'Never lose heart while watching hard days pass by, friend',
      'The wheel of fortune makes no noise when it turns around',
    ],
  },
  {
    title: 'अधूरे हिस्से का सच',
    titleEnglish: 'Truth of Missing Pieces',
    linesHindi: [
      'सब कुछ मेहनत के बावजूद कभी-कभी रुक जाता है',
      'शायद ऊपर वाले ने इससे भी बेहतर लिखा होता है',
    ],
    linesHinglish: [
      'Sab kuch mehnat ke baawajood kabhi-kabhi ruk jaata hai',
      'Shayad upar waale ne isse bhi behtar likha hota hai',
    ],
    linesEnglish: [
      'Sometimes things pause even after giving all your effort',
      'Perhaps the Almighty has written something far better ahead',
    ],
  },
  {
    title: 'सही वक़्त का इंतज़ार',
    titleEnglish: 'Waiting for the Right Hour',
    linesHindi: [
      'बीज को भी पेड़ बनने में पूरा मौसम लगता है',
      'किस्मत पर भरोसा रखो, हर कली अपने वक़्त पर खिलती है',
    ],
    linesHinglish: [
      'Beej ko bhi ped banne mein poora mausam lagta hai',
      'Kismat par bharosa rakho, har kali apne waqt par khilti hai',
    ],
    linesEnglish: [
      'Even a tiny seed takes whole seasons to grow into a tree',
      'Trust in timing; every bud blooms when its hour arrives',
    ],
  },
  {
    title: 'नसीब और कोशिश की दोस्ती',
    titleEnglish: 'Friendship of Fate and Effort',
    linesHindi: [
      'सिर्फ़ नसीब के भरोसे बैठना समझदारी नहीं होती',
      'किस्मत भी उन्हीं का साथ देती है जो कदम बढ़ाते हैं',
    ],
    linesHinglish: [
      'Sirf naseeb ke bharose baithna samajhdaari nahin hoti',
      'Kismat bhi unhi ka saath deti hai jo kadam badhate hain',
    ],
    linesEnglish: [
      'Sitting idle relying on luck alone is never wise',
      'Even destiny walks beside those who dare to step forward',
    ],
  },
  {
    title: 'तक़दीर का बंद दरवाज़ा',
    titleEnglish: 'Behind Closed Doors of Fate',
    linesHindi: [
      'जब एक दरवाज़ा बंद दिखता है सामने से बिल्कुल',
      'कहीं न कहीं किस्मत ने कोई रोशन खिड़की खोली होती है',
    ],
    linesHinglish: [
      'Jab ek darwaaza band dikhta hai saamne se bilkul',
      'Kahin na kahin kismat ne koi roshan khidki kholi hoti hai',
    ],
    linesEnglish: [
      'Whenever one door stands completely shut right ahead of you',
      'Destiny has quietly opened a bright window somewhere nearby',
    ],
  },
  {
    title: 'माथे पर लिखा इम्तहान',
    titleEnglish: 'Trials Carved Ahead',
    linesHindi: [
      'कठिन सफ़र अक्सर उन्हीं के हिस्से में आता है',
      'जिन्हें किस्मत एक बड़ी मंज़िल के क़ाबिल समझती है',
    ],
    linesHinglish: [
      'Kathin safar aksar unhi ke hisse mein aata hai',
      'Jinhein kismat ek badi manzil ke qaabil samajhti hai',
    ],
    linesEnglish: [
      'Steeper roads are often handed only to those travelers',
      'Whom destiny deems worthy of reaching grander heights',
    ],
  },
  {
    title: 'हाथ की मुट्ठी में कल',
    titleEnglish: 'Tomorrow in Your Fist',
    linesHindi: [
      'पंडितों को हाथ दिखाने से पहले अपने कर्म देख लेना',
      'असली किस्मत तो तुम्हारे आज के फ़ैसलों में छुपी है',
    ],
    linesHinglish: [
      'Panditon ko haath dikhane se pehle apne karm dekh lena',
      'Asli kismat to tumhaare aaj ke faislon mein chhupi hai',
    ],
    linesEnglish: [
      'Before showing your palm to fortune-tellers, look at your deeds',
      'Your real destiny lies hidden within the choices you make today',
    ],
  },
  {
    title: 'बिखरे पासे और नया खेल',
    titleEnglish: 'Fresh Roll of the Dice',
    linesHindi: [
      'हार जाना इस बात का सबूत नहीं कि खेल ख़त्म हुआ',
      'कल फिर नया दिन होगा और किस्मत का पासा पलटेगा',
    ],
    linesHinglish: [
      'Haar jaana is baat ka saboot nahin ki khel khatam hua',
      'Kal phir naya din hoga aur kismat ka paasa paltega',
    ],
    linesEnglish: [
      'Losing one round never proves the entire game is over',
      'Tomorrow brings a brand new dawn when fortunes turn anew',
    ],
  },
  {
    title: 'सितारों से आगे का हौसला',
    titleEnglish: 'Courage Beyond the Stars',
    linesHindi: [
      'ग्रहों की चाल से ज़्यादा ताकत इरादों में होती है',
      'ज़िद्दी मुसाफ़िर अपनी किस्मत ख़ुद मोड़ लिया करते हैं',
    ],
    linesHinglish: [
      'Grahon ki chaal se zyada taaqat iraadon mein hoti hai',
      'Ziddi musaafir apni kismat khud mod liya karte hain',
    ],
    linesEnglish: [
      'Firm resolve carries greater power than the alignment of stars',
      'Determined travelers bend destiny to walk beside them',
    ],
  },
  {
    title: 'छोटी चिंगारी का असर',
    titleEnglish: 'Power of One Spark',
    linesHindi: [
      'क़िस्मत को कोसने वाले हमेशा वहीं खड़े रह जाते हैं',
      'और उम्मीद की एक चिंगारी अँधेरों को चीर जाती है',
    ],
    linesHinglish: [
      'Kismat ko kosne waale hamesha wahin khade reh jaate hain',
      'Aur ummeed ki ek chingaari andheron ko cheer jaati hai',
    ],
    linesEnglish: [
      'Those who keep cursing luck remain rooted in the same spot',
      'While one steady spark of hope cuts cleanly through the dark',
    ],
  },
  {
    title: 'सब्र का मीठा फल',
    titleEnglish: 'Sweet Fruit of Patience',
    linesHindi: [
      'देर से मिला तो क्या हुआ, भरोसा कम मत करना',
      'किस्मत अक्सर सबसे अच्छा हिस्सा आख़िर में देती है',
    ],
    linesHinglish: [
      'Der se mila to kya hua, bharosa kam mat karna',
      'Kismat aksar sabse accha hissa aakhir mein deti hai',
    ],
    linesEnglish: [
      'So what if it arrived late, never let your faith grow weak',
      'Destiny often saves its finest gift for the final chapter',
    ],
  },
  {
    title: 'अजनबी संयोग की करामात',
    titleEnglish: 'Magic of Unplanned Paths',
    linesHindi: [
      'जिस रास्ते पर चलने से कभी घबराता था दिल मेरा',
      'किस्मत ने उसी मोड़ पर ज़िंदगी का सबसे बड़ा तोहफ़ा दिया',
    ],
    linesHinglish: [
      'Jis raaste par chalne se kabhi ghabrata tha dil mera',
      'Kismat ne usi mod par zindagi ka sabse bada tohfa diya',
    ],
    linesEnglish: [
      'Along the very road my heart once feared to step onto',
      'Destiny handed me the greatest blessing of my entire life',
    ],
  },
  {
    title: 'बिना शिकायत सफ़र',
    titleEnglish: 'Journey Without Grudge',
    linesHindi: [
      'शिकायत करने से नसीब के पन्ने नहीं बदलते कभी',
      'हँसकर स्वीकार करने से रास्ते आसान हो जाते हैं',
    ],
    linesHinglish: [
      'Shikayat karne se naseeb ke panne nahin badalte kabhi',
      'Hanskar sweekar karne se raaste aasaan ho jaate hain',
    ],
    linesEnglish: [
      'Complaining never rewrites the pages of our fortune',
      'Accepting life with grace makes every road smoother to walk',
    ],
  },
  {
    title: 'ख़ुदा की अनदेखी योजना',
    titleEnglish: 'Gods Quiet Design',
    linesHindi: [
      'हम सिर्फ़ आज का छोटा सा टुकड़ा देख पाते हैं',
      'ऊपर वाला पूरी तस्वीर सजाकर बैठता है पहले से',
    ],
    linesHinglish: [
      'Hum sirf aaj ka chhota sa tukda dekh paate hain',
      'Upar waala poori tasveer sajaakar baithta hai pehle se',
    ],
    linesEnglish: [
      'We only ever glimpse one tiny piece of today',
      'While the Maker already holds the whole tapestry complete',
    ],
  },
  {
    title: 'बदलाव की पहली आहट',
    titleEnglish: 'First Sign of Change',
    linesHindi: [
      'तपती दोपहर के बाद ही शाम की ठंडक उतरती है',
      'कठिन वक़्त के पीछे ही अच्छा नसीब खड़ा रहता है',
    ],
    linesHinglish: [
      'Tapti dopahar ke baad hi shaam ki thandak utarti hai',
      'Kathin waqt ke peeche hi accha naseeb khada rehta hai',
    ],
    linesEnglish: [
      'Only after the scorching noon does cool twilight descend',
      'Brighter fortune always waits just behind a difficult hour',
    ],
  },
  {
    title: 'लकीरों से बड़ा इरादा',
    titleEnglish: 'Will Greater Than Lines',
    linesHindi: [
      'जिनके हाथों में लकीरें नहीं होतीं, क्या वो जीते नहीं',
      'किस्मत का असली कलम इंसान का पक्का इरादा है',
    ],
    linesHinglish: [
      'Jinke haathon mein lakeerein nahin hoteen, kya wo jeete nahin',
      'Kismat ka asli kalam insaan ka pakka iraada hai',
    ],
    linesEnglish: [
      'Do people born without palm lines not live and triumph too',
      'The true pen of destiny is a persons unyielding resolve',
    ],
  },
  {
    title: 'संयोग और कर्म का संगम',
    titleEnglish: 'Meeting of Luck and Labor',
    linesHindi: [
      'किस्मत की चाबी तभी खुलती है ताले के अंदर',
      'जब परिश्रम का हाथ उसे सही दिशा में घुमाता है',
    ],
    linesHinglish: [
      'Kismat ki chaabi tabhi khulti hai taale ke andar',
      'Jab parishram ka haath use sahi disha mein ghoomata hai',
    ],
    linesEnglish: [
      'The key of good fortune only turns inside the lock',
      'When steady hands of hard work twist it in the right direction',
    ],
  },
  {
    title: 'गिरकर संभलने का नसीब',
    titleEnglish: 'Grace to Rise Again',
    linesHindi: [
      'ठोकर लगना बुरे नसीब की निशानी नहीं होती',
      'हर ठोकर हमें सही रास्ते पर मोड़ने आती है',
    ],
    linesHinglish: [
      'Thokar lagna bure naseeb ki nishaani nahin hoti',
      'Har thokar humein sahi raaste par modne aati hai',
    ],
    linesEnglish: [
      'Stumbling along the road is never a sign of cursed luck',
      'Every stumble arrives simply to steer us onto the truer path',
    ],
  },
  {
    title: 'साफ़ नीयत की ताक़त',
    titleEnglish: 'Strength of Pure Intent',
    linesHindi: [
      'जब नीयत साफ़ हो और दिल में किसी का बुरा न हो',
      'तो किस्मत को भी एक दिन झुककर रास्ता देना पड़ता है',
    ],
    linesHinglish: [
      'Jab neeyat saaf ho aur dil mein kisi ka bura na ho',
      'To kismat ko bhi ek din jhukkar raasta dena padta hai',
    ],
    linesEnglish: [
      'When your intentions stay pure and free of ill will',
      'Even stubborn destiny eventually bows and clears your path',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'टूटी कश्ती और किनारा',
    titleEnglish: 'Shores for Drifting Boats',
    linesHindi: [
      'समंदर कितना भी गहरा हो, डरना बेकार है',
      'जिसके नसीब में पहुंचना लिखा है, वो पार उतर ही जाता है',
    ],
    linesHinglish: [
      'Samandar kitna bhi gehra ho, darna bekaar hai',
      'Jiske naseeb mein pahunchna likha hai, wo paar utar hi jaata hai',
    ],
    linesEnglish: [
      'However deep the ocean stretches, fear changes nothing',
      'Whoever is meant to reach the shore safely crosses every wave',
    ],
  },
  {
    title: 'अनमोल अवसर की पहचान',
    titleEnglish: 'Recognizing Rare Fortune',
    linesHindi: [
      'क़िस्मत रोज़ दरवाज़ा नहीं खटखटाती किसी के घर',
      'जब मौक़ा सामने आए तो पूरी हिम्मत से थाम लेना',
    ],
    linesHinglish: [
      'Kismat roz darwaaza nahin khatkhatati kisi ke ghar',
      'Jab mauqa saamne aaye to poori himmat se thaam lena',
    ],
    linesEnglish: [
      'Opportunity does not knock at anyones door every morning',
      'When fortune stands before you, grasp it with all your heart',
    ],
  },
  {
    title: 'वक़्त की किताब',
    titleEnglish: 'Ledger of Time',
    linesHindi: [
      'हर इंसान के हिस्से का सूरज अपने वक़्त पर उगता है',
      'किसी की चमक देखकर अपनी सुबह पर शक मत करना',
    ],
    linesHinglish: [
      'Har insaan ke hisse ka sooraj apne waqt par ugta hai',
      'Kisi ki chamak dekhkar apni subah par shak mat karna',
    ],
    linesEnglish: [
      'Every persons share of sunlight rises at its appointed hour',
      'Never doubt your own dawn while watching someone elses shine',
    ],
  },
  {
    title: 'खोकर पाने का रहस्य',
    titleEnglish: 'Finding After Loss',
    linesHindi: [
      'कुछ चीज़ें हाथ से फिसलती हैं तो दिल रो पड़ता है',
      'पर बाद में समझ आता है कि वही हमारे हक़ में बेहतर था',
    ],
    linesHinglish: [
      'Kuch cheezein haath se phisalti hain to dil ro padta hai',
      'Par baad mein samajh aata hai ki wahi hamaare haq mein behtar tha',
    ],
    linesEnglish: [
      'When certain things slip from our grasp, the heart aches deeply',
      'Yet time later reveals how losing them protected us in disguise',
    ],
  },
  {
    title: 'सच्चे कर्म का प्रतिफल',
    titleEnglish: 'Return of Honest Work',
    linesHindi: [
      'बोया हुआ एक भी अच्छा काम कभी ज़ाया नहीं जाता',
      'वक़्त आने पर नसीब उसे कई गुना लौटाता है',
    ],
    linesHinglish: [
      'Boya hua ek bhi accha kaam kabhi zaaya nahin jaata',
      'Waqt aane par naseeb use kai guna lautata hai',
    ],
    linesEnglish: [
      'Not a single seed of kindness you plant ever goes to waste',
      'When the season matures, destiny returns it multiplied manifold',
    ],
  },
  {
    title: 'अंधेरी रात के बाद भोर',
    titleEnglish: 'Dawn Past Midnight',
    linesHindi: [
      'रात कितनी भी स्याह हो, हमेशा टिक नहीं सकती',
      'क़िस्मत का उजाला एक न एक दिन दस्तक ज़रूर देता है',
    ],
    linesHinglish: [
      'Raat kitni bhi syaah ho, hamesha tik nahin sakti',
      'Kismat ka ujala ek na ek din dastak zaroor deta hai',
    ],
    linesEnglish: [
      'No matter how dark the night grows, it cannot stay forever',
      'Brighter fortune inevitably knocks upon the door one morning',
    ],
  },
  {
    title: 'अनचाहे मोड़ की सीख',
    titleEnglish: 'Lesson in Unexpected Turns',
    linesHindi: [
      'हम कुछ और चाहते थे पर मिला कुछ और रास्ते में',
      'वक़्त ने सिखाया कि मनचाहे से ज़्यादा सही होना ज़रूरी है',
    ],
    linesHinglish: [
      'Hum kuch aur chaahte the par mila kuch aur raaste mein',
      'Waqt ne sikhaya ki manchaahe se zyada sahi hona zaroori hai',
    ],
    linesEnglish: [
      'I wished for one road, yet life placed me upon another',
      'Time taught me that what is right matters more than what we crave',
    ],
  },
  {
    title: 'तपते सोने की चमक',
    titleEnglish: 'Gold Forged in Heat',
    linesHindi: [
      'आग में तपे बिना सोना भी गहना नहीं बन पाता',
      'बुरे हालात भी इंसान की तक़दीर निखारने आते हैं',
    ],
    linesHinglish: [
      'Aag mein tape bina sona bhi gehna nahin ban paata',
      'Bure haalaat bhi insaan ki taqdeer nikhaarne aate hain',
    ],
    linesEnglish: [
      'Without passing through fire, even gold cannot become jewelry',
      'Tough chapters arrive to refine and polish your destiny too',
    ],
  },
  {
    title: 'दुआ और दवा का मेल',
    titleEnglish: 'Prayer Alongside Effort',
    linesHindi: [
      'किस्मत को बेहतर बनाने के लिए दो पंख ज़रूरी हैं',
      'एक ईमानदार मेहनत और दूसरा बुज़ुर्गों की दुआ',
    ],
    linesHinglish: [
      'Kismat ko behtar banaane ke liye do pankh zaroori hain',
      'Ek imaandaar mehnat aur doosra buzurgon ki dua',
    ],
    linesEnglish: [
      'Two wings are needed to lift your destiny toward the sky',
      'Honest hard work on one side, and elders blessings on the other',
    ],
  },
  {
    title: 'अपने हिस्से का आसमान',
    titleEnglish: 'Your Own Piece of Sky',
    linesHindi: [
      'छोटे पंखों को देखकर उड़ान का फैसला मत करना',
      'किस्मत साथ दे तो चिड़िया भी बादलों के पार जाती है',
    ],
    linesHinglish: [
      'Chhote pankhon ko dekhkar udaan ka faisla mat karna',
      'Kismat saath de to chidiya bhi baadalon ke paar jaati hai',
    ],
    linesEnglish: [
      'Never judge a flight by the modest size of ones wings',
      'When grace and grit align, even small birds soar past clouds',
    ],
  },
  {
    title: 'चुपचाप बनता भविष्य',
    titleEnglish: 'Future Built in Silence',
    linesHindi: [
      'जब दुनिया सोती है तब जो जागकर मेहनत करता है',
      'एक दिन उसी की तक़दीर पर पूरा जहाँ नाज़ करता है',
    ],
    linesHinglish: [
      'Jab duniya soti hai tab jo jaagkar mehnat karta hai',
      'Ek din usi ki taqdeer par poora jahaan naaz karta hai',
    ],
    linesEnglish: [
      'The one who stays awake working quietly while the world sleeps',
      'Builds a destiny the whole world gazes upon with pride someday',
    ],
  },
  {
    title: 'तक़दीर का अनोखा गणित',
    titleEnglish: 'Strangely Fair Math of Fate',
    linesHindi: [
      'जहाँ से कोई उम्मीद बाकी नहीं दिखती आंखों को',
      'क़िस्मत ठीक वहीं से नया रास्ता निकाल देती है',
    ],
    linesHinglish: [
      'Jahaan se koi ummeed baaki nahin dikhti aankhon ko',
      'Kismat theek wahin se naya raasta nikaal deti hai',
    ],
    linesEnglish: [
      'Right from the spot where eyes can spot no hope remaining',
      'Destiny carves out a sudden, unexpected pathway forward',
    ],
  },
  {
    title: 'रेत और चट्टान का फ़र्क़',
    titleEnglish: 'Sand vs Bedrock',
    linesHindi: [
      'किस्मत की हवाएँ कमज़ोर सपनों को उड़ा ले जाती हैं',
      'पर मजबूत इरादों वाले चट्टान की तरह जमे रहते हैं',
    ],
    linesHinglish: [
      'Kismat ki hawaayein kamzor sapnon ko uda le jaati hain',
      'Par mazboot iraadon waale chattan ki tarah jame rehte hain',
    ],
    linesEnglish: [
      'Winds of fortune sweep fragile wishes away in moments',
      'While people of firm resolve stand anchored like solid stone',
    ],
  },
  {
    title: 'मिलने और बिछड़ने का लेख',
    titleEnglish: 'Script of Meetings and Partings',
    linesHindi: [
      'कौन कितने दिन साथ चलेगा यह ऊपर वाला लिखता है',
      'हमारे हाथ में बस हर रिश्ते को ईमानदारी से निभाना है',
    ],
    linesHinglish: [
      'Kaun kitne din saath chalega yah upar waala likhta hai',
      'Hamaare haath mein bas har rishte ko imaandaari se nibhana hai',
    ],
    linesEnglish: [
      'How long each person walks with us is scripted from above',
      'In our hands lies only loving and honoring them honestly while here',
    ],
  },
  {
    title: 'मुस्कुराता हुआ नसीब',
    titleEnglish: 'Smiling at Destiny',
    linesHindi: [
      'जो मिला उसमें शुक्र करना सीख लिया जिस दिन से',
      'उस दिन से मेरी किस्मत भी मुझ पर मुस्कुराने लगी',
    ],
    linesHinglish: [
      'Jo mila usmein shukr karna seekh liya jis din se',
      'Us din se meri kismat bhi mujh par muskurane lagi',
    ],
    linesEnglish: [
      'From the very day I learned gratitude for whatever came my way',
      'Fortune itself began smiling gently back at me',
    ],
  },
  {
    title: 'वक़्त की कसौटी',
    titleEnglish: 'Touchstone of Time',
    linesHindi: [
      'हर किसी को एक बार बुरे वक़्त से गुज़रना पड़ता है',
      'यही तो बताता है कि कौन अपना है और कौन पराया',
    ],
    linesHinglish: [
      'Har kisi ko ek baar bure waqt se guzarna padta hai',
      'Yahi to bataata hai ki kaun apna hai aur kaun paraya',
    ],
    linesEnglish: [
      'Everyone has to pass through a testing season once',
      'That is how life reveals who stands beside you and who walks out',
    ],
  },
  {
    title: 'बिना पंखों की उड़ान',
    titleEnglish: 'Soaring Without Wings',
    linesHindi: [
      'गरीबी या मजबूरी किस्मत पर ताला नहीं लगा सकती',
      'पढ़ने और सीखने की लगन हर दीवार तोड़ देती है',
    ],
    linesHinglish: [
      'Gareebi ya majboori kismat par taala nahin laga sakti',
      'Padhne aur seekhne ki lagan har deewar tod deti hai',
    ],
    linesEnglish: [
      'Hardship or humble starts cannot lock the gates of destiny',
      'Hunger to learn and grow tears down every barrier in sight',
    ],
  },
  {
    title: 'कल पर टला इनाम',
    titleEnglish: 'Reward Reserved for Tomorrow',
    linesHindi: [
      'आज की मेहनत का फल आज ही न दिखे तो घबराना मत',
      'क़िस्मत हर बूंद पसीने का हिसाब ब्याज सहित चुकाती है',
    ],
    linesHinglish: [
      'Aaj ki mehnat ka phal aaj hi na dikhe to ghabrana mat',
      'Kismat har boond paseene ka hisaab byaaj sahit chukaati hai',
    ],
    linesEnglish: [
      'Do not fret if todays labor bears no instant visible fruit',
      'Destiny repays every drop of honest sweat with compound grace',
    ],
  },
  {
    title: 'राह का हर पत्थर सीढ़ी',
    titleEnglish: 'Obstacles Into Steps',
    linesHindi: [
      'जो पत्थर किस्मत ने रास्ते में फेंके थे रुकावट बनकर',
      'हमने उन्हीं को जोड़कर अपनी कामयाबी की सीढ़ी बना ली',
    ],
    linesHinglish: [
      'Jo patthar kismat ne raaste mein phenke the rukaawat bankar',
      'Humne unhi ko jodkar apni kaamyaabi ki seedhi bana li',
    ],
    linesEnglish: [
      'The heavy stones fate dropped along my road as hurdles',
      'Were the very bricks I stacked into steps toward my climb',
    ],
  },
  {
    title: 'अंत भला तो सब भला',
    titleEnglish: 'Graceful Ending',
    linesHindi: [
      'शुरुआत कैसी भी रही हो इस सफ़र की मेरे यार',
      'असली खेल तो आखिरी मोड़ पर किस्मत तय करती है',
    ],
    linesHinglish: [
      'Shuruaat kaisi bhi rahi ho is safar ki mere yaar',
      'Asli khel to aakhiri mod par kismat tay karti hai',
    ],
    linesEnglish: [
      'Regardless of how rocky the opening stretch felt, my friend',
      'Life reveals its truest masterpiece around the final bend',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'मन की शांति सबसे बड़ा भाग्य',
    titleEnglish: 'Peace as Greatest Luck',
    linesHindi: [
      'बड़े महल और तिजोरी होना ही अच्छी किस्मत नहीं है',
      'रात को चैन की नींद आ जाए, यही सबसे बड़ा नसीब है',
    ],
    linesHinglish: [
      'Bade mahal aur tijori hona hi acchi kismat nahin hai',
      'Raat ko chain ki neend aa jaaye, yahi sabse bada naseeb hai',
    ],
    linesEnglish: [
      'Mansions and vaults alone never define good fortune',
      'Drifting into peaceful sleep each night is the rarest blessing',
    ],
  },
  {
    title: 'सच्चे साथी का मिलना',
    titleEnglish: 'Luck of a True Friend',
    linesHindi: [
      'हीरे-मोती तो बाज़ार में हर किसी को मिल जाते हैं',
      'मुश्किल वक़्त में हाथ थामने वाला सिर्फ़ किस्मत से मिलता है',
    ],
    linesHinglish: [
      'Heere-moti to baazaar mein har kisi ko mil jaate hain',
      'Mushkil waqt mein haath thaamne wala sirf kismat se milta hai',
    ],
    linesEnglish: [
      'Diamonds and pearls can be bought in any marketplace',
      'Someone who holds your hand through storms comes only by grace',
    ],
  },
  {
    title: 'वक़्त की मरम्मत',
    titleEnglish: 'Mending Through Time',
    linesHindi: [
      'जो आज टूटा हुआ लग रहा है अंदर से बिल्कुल',
      'वक़्त का साज़ एक दिन उसे नए सुर में सजा देगा',
    ],
    linesHinglish: [
      'Jo aaj toota hua lag raha hai andar se bilkul',
      'Waqt ka saaz ek din use naye sur mein saja dega',
    ],
    linesEnglish: [
      'Whatever feels shattered right down to the core today',
      'Will be tuned by time into a gentle new melody someday',
    ],
  },
  {
    title: 'उम्मीद का दीया',
    titleEnglish: 'Lamp of Unshaken Hope',
    linesHindi: [
      'तेज़ आँधियों में भी जिसने अपनी लौ बचाकर रखी',
      'किस्मत ने आख़िरकार उसके हिस्से का सवेरा कर दिया',
    ],
    linesHinglish: [
      'Tez aandhiyon mein bhi jisne apni lau bachaakar rakhi',
      'Kismat ne aakhirkaar uske hisse ka savera kar diya',
    ],
    linesEnglish: [
      'Whoever guarded their small flame against howling gales',
      'Watched destiny eventually usher in a bright morning for them',
    ],
  },
  {
    title: 'हाथ की मेहनत, भगवान की रहमत',
    titleEnglish: 'Human Effort, Divine Grace',
    linesHindi: [
      'खेत में हल चलाना इंसान के बस की बात है',
      'आसमान से बारिश बरसाना तो किस्मत के हाथ में है',
    ],
    linesHinglish: [
      'Khet mein hal chalaana insaan ke bas ki baat hai',
      'Aasmaan se baarish barsaana to kismat ke haath mein hai',
    ],
    linesEnglish: [
      'Plowing the field faithfully lies within human strength',
      'Sending rain down from the skies belongs to grace alone',
    ],
  },
  {
    title: 'धैर्य की ताक़त',
    titleEnglish: 'Power of Quiet Endurance',
    linesHindi: [
      'जल्दबाज़ी में अक्सर बने हुए काम बिगड़ जाते हैं',
      'धीरज रखने वालों की तक़दीर खुद संवर जाती है',
    ],
    linesHinglish: [
      'Jaldbaazi mein aksar bane hue kaam bigad jaate hain',
      'Dheeraj rakhne waalon ki taqdeer khud sanwar jaati hai',
    ],
    linesEnglish: [
      'Haste often unravels progress already halfway built',
      'For those who keep steady patience, fortune blossoms naturally',
    ],
  },
  {
    title: 'अनचाही हार से जीत',
    titleEnglish: 'Victory Born of Defeat',
    linesHindi: [
      'कई बार एक छोटी हार हमें उस घमंड से बचाती है',
      'जो आगे चलकर हमारी पूरी किस्मत बर्बाद कर देता',
    ],
    linesHinglish: [
      'Kai baar ek chhoti haar humein us ghamand se bachaati hai',
      'Jo aage chalkar hamaari poori kismat barbaad kar deta',
    ],
    linesEnglish: [
      'Often a small setback saves us from the quiet arrogance',
      'That might have ruined our entire future further down the road',
    ],
  },
  {
    title: 'मज़बूत जड़ें',
    titleEnglish: 'Deep Roots Hold Firm',
    linesHindi: [
      'मौसम की मार तो सिर्फ़ ऊपर की टहनियाँ हिलाती है',
      'जिनकी जड़ें गहरी हों, उनकी किस्मत कभी नहीं उखड़ती',
    ],
    linesHinglish: [
      'Mausam ki maar to sirf upar ki tehniyan hilaati hai',
      'Jinki jadein gehri hon, unki kismat kabhi nahin ukhadti',
    ],
    linesEnglish: [
      'Harsh storms only sway the upper branches of a tree',
      'Whose roots run deep can never be uprooted by shifting luck',
    ],
  },
  {
    title: 'ख़ुद पर विश्वास',
    titleEnglish: 'Trusting Your Own Steps',
    linesHindi: [
      'जब कोई साथ न दे और रास्ते अँधेरे लगें',
      'तब अपने आप पर यक़ीन ही सबसे बड़ी तक़दीर है',
    ],
    linesHinglish: [
      'Jab koi saath na de aur raaste andhere lagen',
      'Tab apne aap par yaqeen hi sabse badi taqdeer hai',
    ],
    linesEnglish: [
      'When nobody walks beside you and every lane appears dark',
      'Self-belief becomes the brightest fortune you could hold',
    ],
  },
  {
    title: 'बदलाव का हौसला',
    titleEnglish: 'Courage to Pivot',
    linesHindi: [
      'एक ही ताले पर ज़िंदगी भर अटकना सही नहीं',
      'कभी-कभी रास्ता बदलते ही किस्मत मुस्कुरा उठती है',
    ],
    linesHinglish: [
      'Ek hi taale par zindagi bhar atakna sahi nahin',
      'Kabhi-kabhi raasta badalte hi kismat muskura uthti hai',
    ],
    linesEnglish: [
      'Staying stuck before a single locked gate forever helps no one',
      'Sometimes the moment you shift roads, fortune bursts into smile',
    ],
  },
  {
    title: 'सादगी का वरदान',
    titleEnglish: 'Blessing of Simplicity',
    linesHindi: [
      'दिखावे की दौड़ में तो हर कोई भागा जा रहा है',
      'सादगी से सुकून पाना ही असली खुशकिस्मती है',
    ],
    linesHinglish: [
      'Dikhawe ki daud mein to har koi bhaaga ja raha hai',
      'Saadgi se sukoon paana hi asli khushkismati hai',
    ],
    linesEnglish: [
      'Everyone races frantically after flashy appearances these days',
      'Finding deep peace in simplicity is true good fortune',
    ],
  },
  {
    title: 'अधूरा नहीं, अनोखा सफ़र',
    titleEnglish: 'Unique Rather Than Late',
    linesHindi: [
      'हर घड़ी एक ही रफ़्तार से नहीं चलती दुनिया में',
      'तुम्हारे वक़्त की चाल सबसे अलग और ख़ास होगी',
    ],
    linesHinglish: [
      'Har ghadi ek hi raftaar se nahin chalti duniya mein',
      'Tumhaare waqt ki chaal sabse alag aur khaas hogi',
    ],
    linesEnglish: [
      'Every clock in life does not tick on the exact same schedule',
      'Your season will unfold along a path uniquely meant for you',
    ],
  },
  {
    title: 'चमकता हुआ कल',
    titleEnglish: 'Luminous Tomorrow',
    linesHindi: [
      'आज बादलों ने सूरज को ढक रखा है तो क्या ग़म',
      'कल की धूप तेरे आँगन में सबसे ज़्यादा खिलेगी',
    ],
    linesHinglish: [
      'Aaj baadalon ne sooraj ko dhak rakha hai to kya gham',
      'Kal ki dhoop tere aangan mein sabse zyada khilegi',
    ],
    linesEnglish: [
      'So what if clouds hide the sun across the sky today',
      'Tomorrows sunlight will pour brightest into your courtyard',
    ],
  },
  {
    title: 'मेहनती हाथों की क़द्र',
    titleEnglish: 'Dignity of Hardworking Hands',
    linesHindi: [
      'चाँदी की चम्मच लेकर पैदा न होने का अफ़सोस कैसा',
      'अपने दम पर पहचान बनाना सबसे ऊँचा नसीब है',
    ],
    linesHinglish: [
      'Chaandi ki chammach lekar paida na hone ka afsos kaisa',
      'Apne dam par pehchaan banana sabse ooncha naseeb hai',
    ],
    linesEnglish: [
      'Why regret not being born holding a silver spoon',
      'Building your own name from scratch is the proudest destiny',
    ],
  },
  {
    title: 'दिल की सच्चाई',
    titleEnglish: 'Honesty Guarded by Grace',
    linesHindi: [
      'चालाकियाँ कुछ दिनों की जीत दिला सकती हैं शायद',
      'पर लंबी दौड़ में हमेशा सच्चाई की किस्मत जीतती है',
    ],
    linesHinglish: [
      'Chaalaakiyan kuch dinon ki jeet dila sakti hain shaayad',
      'Par lambi daud mein hamesha sacchai ki kismat jeetti hai',
    ],
    linesEnglish: [
      'Clever shortcuts might hand out wins for a few brief days',
      'Yet over the long run, honest character always wins destiny',
    ],
  },
  {
    title: 'टूटे हिस्से से नई शुरुआत',
    titleEnglish: 'Fresh Start From Ruins',
    linesHindi: [
      'जहाँ सब कुछ ख़त्म हुआ लगा था एक रोज़ तुम्हें',
      'वहीं से ज़िंदगी ने नया अध्याय लिखना शुरू किया',
    ],
    linesHinglish: [
      'Jahaan sab kuch khatam hua laga tha ek roz tumhein',
      'Wahin se zindagi ne naya adhyaay likhna shuru kiya',
    ],
    linesEnglish: [
      'Right where you once felt everything had come to a total halt',
      'Life quietly began writing a brand new opening chapter',
    ],
  },
  {
    title: 'आसमान की ऊँचाई',
    titleEnglish: 'Boundless Sky Above',
    linesHindi: [
      'अपनी सोच के पिंजरे छोटे मत बनाना कभी भी',
      'किस्मत हमेशा बड़े सपनों वालों को बड़ा मंच देती है',
    ],
    linesHinglish: [
      'Apni soch ke pinjare chhote mat banaana kabhi bhi',
      'Kismat hamesha bade sapnon waalon ko bada manch deti hai',
    ],
    linesEnglish: [
      'Never build small cages around the reach of your own thoughts',
      'Destiny always grants larger stages to those who dare dream wide',
    ],
  },
  {
    title: 'छोटी जीत का जश्न',
    titleEnglish: 'Honoring Small Wins',
    linesHindi: [
      'बड़े चमत्कार का इंतज़ार करते वक़्त मत गंवाना',
      'रोज़ की छोटी कामयाबी ही बड़ी किस्मत बनाती है',
    ],
    linesHinglish: [
      'Bade chamatkaar ka intezaar karte waqt mat ganwaana',
      'Roz ki chhoti kaamyaabi hi badi kismat banaati hai',
    ],
    linesEnglish: [
      'Do not waste years waiting idly for one grand miracle',
      'Every modest victory today builds a magnificent tomorrow',
    ],
  },
  {
    title: 'मुसीबत में सँभलना',
    titleEnglish: 'Steady Through Gales',
    linesHindi: [
      'हालात जब उल्टे चल रहे हों तो शांत रहना सीखो',
      'तूफ़ान थमते ही कश्ती फिर सही दिशा पकड़ती है',
    ],
    linesHinglish: [
      'Haalaat jab ulte chal rahe hon to shaant rehna seekho',
      'Toofaan thamte hi kashti phir sahi disha pakadti hai',
    ],
    linesEnglish: [
      'Learn to stay calm whenever every tide pushes against you',
      'As soon as the squall passes, your boat catches steady wind again',
    ],
  },
  {
    title: 'मेहनत का अमिट रंग',
    titleEnglish: 'Unfading Hue of Effort',
    linesHindi: [
      'रंगों की तरह वक़्त भी बदलता है हर इंसान का',
      'मेहनत से सजा नसीब कभी फीका नहीं पड़ता',
    ],
    linesHinglish: [
      'Rangon ki tarah waqt bhi badalta hai har insaan ka',
      'Mehnat se saja naseeb kabhi feeka nahin padta',
    ],
    linesEnglish: [
      'Like shifting colors, every persons season turns with time',
      'A fortune painted with hard work never loses its glow',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'ताक़तवर इरादे',
    titleEnglish: 'Ironclad Intentions',
    linesHindi: [
      'पत्थर से टकराने पर ही पानी अपना रास्ता बनाता है',
      'मुश्किलों से लड़कर ही इंसान किस्मत आज़माता है',
    ],
    linesHinglish: [
      'Patthar se takraane par hi paani apna raasta banaata hai',
      'Mushkilon se ladkar hi insaan kismat aazmaata hai',
    ],
    linesEnglish: [
      'Only by pushing past rock does flowing water carve a path',
      'Only by facing hardship does a soul discover its true fortune',
    ],
  },
  {
    title: 'अनकही मदद',
    titleEnglish: 'Unseen Helping Hands',
    linesHindi: [
      'जब सब रास्ते बंद लगें तो ऊपर निगाह उठाना',
      'कोई अनजाना मददगार किस्मत बनकर सामने आता है',
    ],
    linesHinglish: [
      'Jab sab raaste band lagen to upar nigaah uthana',
      'Koi anjaana madadgaar kismat bankar saamne aata hai',
    ],
    linesEnglish: [
      'When every path seems barred ahead, lift your eyes upward',
      'An unexpected helper often arrives as grace in disguise',
    ],
  },
  {
    title: 'सीखने की भूख',
    titleEnglish: 'Hunger to Grow',
    linesHindi: [
      'जो अपनी ग़लतियों से सीखना जानता है इस जीवन में',
      'उसकी किस्मत कभी लंबे समय तक रूठ नहीं सकती',
    ],
    linesHinglish: [
      'Jo apni galtiyon se seekhna jaanta hai is jeevan mein',
      'Uski kismat kabhi lambe samay tak rooth nahin sakti',
    ],
    linesEnglish: [
      'Whoever knows how to learn humbly from past missteps',
      'Can never stay estranged from good fortune for very long',
    ],
  },
  {
    title: 'पत्थर से तराशी मूरत',
    titleEnglish: 'Sculpted From Struggle',
    linesHindi: [
      'छेनी और हथौड़ी के दर्द से डरता है जो पत्थर',
      'वो कभी मंदिर की पूज्य मूरत नहीं बन पाता',
    ],
    linesHinglish: [
      'Chheni aur hathaudi ke dard se darta hai jo patthar',
      'Wo kabhi mandir ki poojya moorat nahin ban paata',
    ],
    linesEnglish: [
      'The stone that shrinks away from chisel and mallet blows',
      'Can never become a revered statue shaped with grace',
    ],
  },
  {
    title: 'तुलना से आज़ादी',
    titleEnglish: 'Free From Comparison',
    linesHindi: [
      'फूल और चाँद अपनी-अपनी जगह खूबसूरत लगते हैं',
      'हर इंसान की किस्मत की अपनी अलग चमक होती है',
    ],
    linesHinglish: [
      'Phool aur chaand apni-apni jagah khoobsurat lagte hain',
      'Har insaan ki kismat ki apni alag chamak hoti hai',
    ],
    linesEnglish: [
      'Both a blossom and the moon shine beautifully in their own sphere',
      'Every human life carries a radiance uniquely its own',
    ],
  },
  {
    title: 'मज़बूत क़दमों की आवाज़',
    titleEnglish: 'Sound of Steady Steps',
    linesHindi: [
      'धीमे चलो पर रुकना मत किसी भी हाल में तुम',
      'क़दम बढ़ाते रहने से ही किस्मत की दूरी सिमटती है',
    ],
    linesHinglish: [
      'Dheeme chalo par rukna mat kisi bhi haal mein tum',
      'Kadam badhate rehne se hi kismat ki doori simat-ti hai',
    ],
    linesEnglish: [
      'Walk steadily at your own pace, just refuse to quit',
      'Only by keeping one foot ahead does distance shrink before you',
    ],
  },
  {
    title: 'वफ़ादार कर्म',
    titleEnglish: 'Faithful Deeds',
    linesHindi: [
      'इंसान साथ छोड़ दे तो ग़म मत करना कभी',
      'तुम्हारे अच्छे कर्म हमेशा तुम्हारी किस्मत संभालेंगे',
    ],
    linesHinglish: [
      'Insaan saath chhod de to gham mat karna kabhi',
      'Tumhaare acche karm hamesha tumhaari kismat sanbhaalenge',
    ],
    linesEnglish: [
      'Do not grieve if people drift away when roads turn steep',
      'Your own good deeds will forever guard your destiny',
    ],
  },
  {
    title: 'आशा की डोर',
    titleEnglish: 'Thread of Optimism',
    linesHindi: [
      'कहते हैं उम्मीद पर ही पूरी दुनिया क़ायम है',
      'इस डोर को थामे रखो, नसीब भी रास्ता बदल लेगा',
    ],
    linesHinglish: [
      'Kehte hain ummeed par hi poori duniya qaayam hai',
      'Is dor ko thaame rakho, naseeb bhi raasta badal lega',
    ],
    linesEnglish: [
      'They say the entire world stands anchored upon hope alone',
      'Keep holding that thread tight, and fortune too will turn around',
    ],
  },
  {
    title: 'सही संगत का असर',
    titleEnglish: 'Blessing of Good Company',
    linesHindi: [
      'नेक लोगों के साथ बैठने से सिर्फ़ आदतें नहीं बदलतीं',
      'कभी-कभी पूरी की पूरी किस्मत चमक उठती है',
    ],
    linesHinglish: [
      'Nek logon ke saath baithne se sirf aadatein nahin badalteen',
      'Kabhi-kabhi poori ki poori kismat chamak uthti hai',
    ],
    linesEnglish: [
      'Sitting beside kind souls does more than mend daily habits',
      'Sometimes it illuminates your entire destiny all at once',
    ],
  },
  {
    title: 'माँ-बाप की दुआ का साया',
    titleEnglish: 'Shelter of Parents Prayers',
    linesHindi: [
      'तारा टूटे या ना टूटे, फ़र्क़ क्या पड़ता है भला',
      'जब माँ-बाप के आशीर्वाद से पूरी किस्मत बनती है',
    ],
    linesHinglish: [
      'Taara toote ya na toote, farq kya padta hai bhala',
      'Jab maa-baap ke aashirwaad se poori kismat banti hai',
    ],
    linesEnglish: [
      'Whether a shooting star crosses the sky or not matters little',
      'When parents warm blessings quietly shape our entire destiny',
    ],
  },
  {
    title: 'बिना शोर की जीत',
    titleEnglish: 'Silent Triumph',
    linesHindi: [
      'मेहनत इतनी खामोशी से करते रहो हर दिन',
      'कि एक दिन तुम्हारी कामयाबी किस्मत का परिचय दे',
    ],
    linesHinglish: [
      'Mehnat itni khaamoshi se karte raho har din',
      'Ki ek din tumhaari kaamyaabi kismat ka parichay de',
    ],
    linesEnglish: [
      'Keep working each day in steady, unassuming silence',
      'Until one day your success speaks loudly for your destiny',
    ],
  },
  {
    title: 'मुश्किल सवाल का हल',
    titleEnglish: 'Answer to Hard Puzzles',
    linesHindi: [
      'ज़िंदगी हर इम्तहान एक जैसे पन्ने पर नहीं लेती',
      'कठिन सवाल ही हमें ज़्यादा मजबूत और क़ाबिल बनाते हैं',
    ],
    linesHinglish: [
      'Zindagi har imtihaan ek jaise panne par nahin leti',
      'Kathin sawaal hi humein zyada mazboot aur qaabil banaate hain',
    ],
    linesEnglish: [
      'Life never writes every exam on easy, predictable sheets',
      'Tougher questions are what forge sharper strength within us',
    ],
  },
  {
    title: 'नए सवेरे का स्वागत',
    titleEnglish: 'Welcoming New Mornings',
    linesHindi: [
      'कल की हार का बोझ आज के कंधे पर मत रखना',
      'हर सुबह किस्मत एक साफ़ कोरा पन्ना देती है',
    ],
    linesHinglish: [
      'Kal ki haar ka bojh aaj ke kandhe par mat rakhna',
      'Har subah kismat ek saaf kora panna deti hai',
    ],
    linesEnglish: [
      'Do not carry yesterdays defeat across todays shoulders',
      'Each morning destiny hands you a crisp, spotless blank page',
    ],
  },
  {
    title: 'रिश्तों में खुशकिस्मती',
    titleEnglish: 'Fortunate in Love',
    linesHindi: [
      'जो बिना मांगे ही तुम्हारी ख़ामोशी पढ़ सके',
      'समझ लेना कि किस्मत ने तुम्हें सबसे अमीर बनाया है',
    ],
    linesHinglish: [
      'Jo bina maange hi tumhaari khaamoshi padh sake',
      'Samajh lena ki kismat ne tumhein sabse ameer banaaya hai',
    ],
    linesEnglish: [
      'If someone reads your quiet silence without asking',
      'Know that fortune has made you richer than kings',
    ],
  },
  {
    title: 'वक़्त से बड़ा उस्ताद नहीं',
    titleEnglish: 'No Teacher Greater Than Time',
    linesHindi: [
      'किताबें तो सिर्फ़ जानकारी देती हैं इंसान को',
      'किस्मत और वक़्त असल ज़िंदगी जीना सिखाते हैं',
    ],
    linesHinglish: [
      'Kitaabein to sirf jaankari deti hain insaan ko',
      'Kismat aur waqt asal zindagi jeena sikhaate hain',
    ],
    linesEnglish: [
      'Books offer knowledge gathered across quiet pages',
      'Time and destiny teach us how real life is truly lived',
    ],
  },
  {
    title: 'अधूरे ख्वाबों की उड़ान',
    titleEnglish: 'Flight of Delayed Dreams',
    linesHindi: [
      'अगर कोई सपना पूरा नहीं हुआ इस साल तो क्या',
      'क्या पता अगले ही मोड़ पर पूरा आसमान तुम्हारा हो',
    ],
    linesHinglish: [
      'Agar koi sapna poora nahin hua is saal to kya',
      'Kya pata agle hi mod par poora aasmaan tumhaara ho',
    ],
    linesEnglish: [
      'So what if one dream stayed unfulfilled this passing year',
      'Who knows if the whole open sky awaits you around the next bend',
    ],
  },
  {
    title: 'सही दिशा का महत्व',
    titleEnglish: 'Direction Over Speed',
    linesHindi: [
      'तेज़ दौड़ने से ज़्यादा ज़रूरी है सही दिशा में चलना',
      'सही राह चुनते ही किस्मत खुद रफ़्तार पकड़ लेती है',
    ],
    linesHinglish: [
      'Tez daudne se zyada zaroori hai sahi disha mein chalna',
      'Sahi raah chunte hi kismat khud raftaar pakad leti hai',
    ],
    linesEnglish: [
      'More vital than sprinting fast is choosing the truer direction',
      'Once aligned on the right track, fortune gathers speed by itself',
    ],
  },
  {
    title: 'संतोष की दौलत',
    titleEnglish: 'Wealth of Contentment',
    linesHindi: [
      'लालच में आकर जो आज की मुस्कान खो देता है',
      'वह अच्छी किस्मत पाकर भी ख़ाली हाथ रह जाता है',
    ],
    linesHinglish: [
      'Laalach mein aakar jo aaj ki muskaan kho deta hai',
      'Wah acchi kismat paakar bhi khaali haath reh jaata hai',
    ],
    linesEnglish: [
      'Whoever trades todays simple joy for endless greed',
      'Remains empty-handed even while standing amid abundant luck',
    ],
  },
  {
    title: 'सच्चे रास्ते की पहचान',
    titleEnglish: 'Mark of the Right Path',
    linesHindi: [
      'रास्ता कठिन ज़रूर हो सकता है सच्चाई का',
      'पर अंत में किस्मत उसी पर सुकून के फूल बिछाती है',
    ],
    linesHinglish: [
      'Raasta kathin zaroor ho sakta hai sacchai ka',
      'Par ant mein kismat usi par sukoon ke phool bichaati hai',
    ],
    linesEnglish: [
      'The road of integrity can certainly climb steeply at first',
      'Yet at journeys end, destiny carpets it with peaceful blooms',
    ],
  },
  {
    title: 'अपना वक़्त आएगा',
    titleEnglish: 'Your Hour Will Arrive',
    linesHindi: [
      'दुनिया हँसती है जब तक मंज़िल दूर दिखती है',
      'क़िस्मत बदलते ही वही लोग मिसालें देने लगते हैं',
    ],
    linesHinglish: [
      'Duniya hansti hai jab tak manzil door dikhti hai',
      'Kismat badalte hi wahi log misaalein dene lagte hain',
    ],
    linesEnglish: [
      'The crowd scoffs as long as your destination stays out of sight',
      'The moment fortune shifts, those same voices quote your name',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'पसीने की मोती',
    titleEnglish: 'Pearls of Honest Effort',
    linesHindi: [
      'ख़ैरात में मिली दौलत पल भर का घमंड देती है',
      'मेहनत से कमाई किस्मत पीढ़ियों तक इज़्ज़त देती है',
    ],
    linesHinglish: [
      'Khairaat mein mili daulat pal bhar ka ghamand deti hai',
      'Mehnat se kamaai kismat peedhiyon tak izzat deti hai',
    ],
    linesEnglish: [
      'Handouts bring only fleeting pride that fades quickly',
      'A destiny earned through sweat commands respect for generations',
    ],
  },
  {
    title: 'चाहत और क़ाबिलियत',
    titleEnglish: 'Desire Meeting Readiness',
    linesHindi: [
      'सिर्फ़ मांग लेने से ताज सिर पर नहीं सजता है',
      'किस्मत भी पहले क़ाबिलियत की परीक्षा लेती है',
    ],
    linesHinglish: [
      'Sirf maang lene se taaj sir par nahin sajta hai',
      'Kismat bhi pehle qaabiliyat ki pariksha leti hai',
    ],
    linesEnglish: [
      'A crown never settles on anyones head merely by wishing',
      'Even destiny tests our readiness before handing out rewards',
    ],
  },
  {
    title: 'टूटी उम्मीद की मरम्मत',
    titleEnglish: 'Rebuilding Broken Hopes',
    linesHindi: [
      'एक सपना टूटा तो क्या हुआ, आँखें तो अभी ज़िंदा हैं',
      'नए सिरे से लिखने को फिर पूरी ज़िंदगी बाकी है',
    ],
    linesHinglish: [
      'Ek sapna toota to kya hua, aankhein to abhi zinda hain',
      'Naye sire se likhne ko phir poori zindagi baaki hai',
    ],
    linesEnglish: [
      'So what if one dream shattered; your eyes still see clearly',
      'An entire life remains waiting for you to write anew',
    ],
  },
  {
    title: 'समुद्र से गहरी सोच',
    titleEnglish: 'Depth Beyond the Surface',
    linesHindi: [
      'ऊपर दिखती लहरों से गहराई का अंदाज़ा नहीं होता',
      'शांत रहने वालों की किस्मत अक्सर बड़ी होती है',
    ],
    linesHinglish: [
      'Upar dikhti lehron se gehraai ka andaaza nahin hota',
      'Shaant rehne waalon ki kismat aksar badi hoti hai',
    ],
    linesEnglish: [
      'Surface ripples never reveal the true depth of the sea',
      'Quiet, composed souls often carry the grandest destinies',
    ],
  },
  {
    title: 'छोटी सी मुस्कान का जादू',
    titleEnglish: 'Grace in a Smile',
    linesHindi: [
      'मुसीबत में भी जो चेहरा मुस्कुराना नहीं भूलता',
      'बदक़िस्मती भी उससे हार मानकर लौट जाती है',
    ],
    linesHinglish: [
      'Museebat mein bhi jo chehra muskurana nahin bhoolta',
      'Badkismati bhi usse haar maankar laut jaati hai',
    ],
    linesEnglish: [
      'When a face refuses to lose its smile even amid trouble',
      'Misfortune itself admits defeat and turns away quietly',
    ],
  },
  {
    title: 'नसीब का सुनहरा धागा',
    titleEnglish: 'Golden Thread of Fate',
    linesHindi: [
      'कौन किससे कब मिलेगा यह हम तय नहीं करते',
      'सही वक़्त पर किस्मत खुद अच्छे लोगों से मिला देती है',
    ],
    linesHinglish: [
      'Kaun kisse kab milega yah hum tay nahin karte',
      'Sahi waqt par kismat khud acche logon se mila deti hai',
    ],
    linesEnglish: [
      'We never script whom we will cross paths with and when',
      'At the right hour, destiny introduces us to gentle souls',
    ],
  },
  {
    title: 'धीरज का फल',
    titleEnglish: 'Seasoned Reward',
    linesHindi: [
      'जल्दी पकने वाले फल ज़्यादा देर टिकते नहीं डाली पर',
      'वक़्त लगाकर बनी किस्मत वर्षों तक चमकती है',
    ],
    linesHinglish: [
      'Jaldi pakne waale phal zyada der tikte nahin daali par',
      'Waqt lagaakar bani kismat varshon tak chamakti hai',
    ],
    linesEnglish: [
      'Fruits ripened in haste rarely endure long on the branch',
      'A destiny matured with patience shines steadily for decades',
    ],
  },
  {
    title: 'आख़िरी कोशिश',
    titleEnglish: 'One More Try',
    linesHindi: [
      'क्या पता जिस ताले को तुमने हारकर छोड़ दिया',
      'अगली ही चाबी से किस्मत का ख़ज़ाना खुलने वाला हो',
    ],
    linesHinglish: [
      'Kya pata jis taale ko tumne haarkar chhod diya',
      'Agli hi chaabi se kismat ka khazaana khulne waala ho',
    ],
    linesEnglish: [
      'Who knows if the very lock you walked away from in defeat',
      'Was about to open fortunes treasure with the very next key',
    ],
  },
  {
    title: 'सच्चे दिल की पुकार',
    titleEnglish: 'Prayer of a Pure Heart',
    linesHindi: [
      'किसी का दिल न दुखाना अपनी ज़िंदगी की राह में',
      'वरना टूटी हुई आहें किस्मत का रुख मोड़ देती हैं',
    ],
    linesHinglish: [
      'Kisi ka dil na dukhana apni zindagi ki raah mein',
      'Warna tooti hui aahein kismat ka rukh mod deti hain',
    ],
    linesEnglish: [
      'Never wound another gentle heart along your walk through life',
      'Unanswered sighs hold power to turn the tide of any fortune',
    ],
  },
  {
    title: 'चुनौतियों का तोहफ़ा',
    titleEnglish: 'Gift Inside Challenges',
    linesHindi: [
      'आसान रास्तों पर चलकर कोई मजबूत नहीं बना आज तक',
      'कठिन डगर ही हमें नई ऊँचाइयों के लायक बनाती है',
    ],
    linesHinglish: [
      'Aasaan raaston par chalkar koi mazboot nahin bana aaj tak',
      'Kathin dagar hi humein nayi oonchayiyon ke laayak banaati hai',
    ],
    linesEnglish: [
      'Nobody ever grew resilient walking solely down smooth pavements',
      'Steeper trails prepare our feet to stand on higher peaks',
    ],
  },
  {
    title: 'अनमोल स्वास्थ्य और परिवार',
    titleEnglish: 'True Riches at Home',
    linesHindi: [
      'घर में हँसता परिवार और सेहतमंद शरीर मिल जाए',
      'तो समझो दुनिया की सबसे बड़ी किस्मत तुम्हारे पास है',
    ],
    linesHinglish: [
      'Ghar mein hansta parivaar aur sehatmand shareer mil jaaye',
      'To samjho duniya ki sabse badi kismat tumhaare paas hai',
    ],
    linesEnglish: [
      'Having a smiling family at home and steady health in body',
      'Means you already hold the worlds rarest good fortune',
    ],
  },
  {
    title: 'धूप में छाँव की खोज',
    titleEnglish: 'Shade Along Hard Roads',
    linesHindi: [
      'तपती धूप ने सिखाया है छाँव की क़द्र करना',
      'बुरे वक़्त ने ही अच्छे नसीब की कीमत समझाई है',
    ],
    linesHinglish: [
      'Tapti dhoop ne sikhaya hai chhaanv ki qadr karna',
      'Bure waqt ne hi acche naseeb ki keemat samjhai hai',
    ],
    linesEnglish: [
      'Blazing noon heat taught us how precious cool shade feels',
      'Difficult days teach us the true worth of kind fortune',
    ],
  },
  {
    title: 'बदलाव से दोस्ती',
    titleEnglish: 'Befriending Change',
    linesHindi: [
      'पुरानी चीज़ें छूटें तो अफ़सोस में मत डूब जाना',
      'नए मौसम के लिए पुराने पत्तों का झड़ना ज़रूरी है',
    ],
    linesHinglish: [
      'Purani cheezein chhootein to afsos mein mat doob jaana',
      'Naye mausam ke liye purane patton ka jhadna zaroori hai',
    ],
    linesEnglish: [
      'When old chapters slip behind, do not drown in regret',
      'Autumn leaves must fall so fresh spring can bloom anew',
    ],
  },
  {
    title: 'सही इरादों की जीत',
    titleEnglish: 'Triumph of Clear Purpose',
    linesHindi: [
      'रास्ते में धुंध हो तो भी मंज़िल गायब नहीं होती',
      'साफ़ इरादे हों तो किस्मत खुद रास्ता दिखाती है',
    ],
    linesHinglish: [
      'Raaste mein dhundh ho to bhi manzil gaayab nahin hoti',
      'Saaf iraade hon to kismat khud raasta dikhati hai',
    ],
    linesEnglish: [
      'Even when mist covers the road, the destination stays real',
      'With clear purpose, destiny reveals each next step ahead',
    ],
  },
  {
    title: 'असफलता की सीढ़ी',
    titleEnglish: 'Lessons From Stumbles',
    linesHindi: [
      'गिरना सिर्फ़ एक हादसा है ज़िंदगी के सफ़र का',
      'पर हार मान लेना ही बुरी किस्मत बन जाता है',
    ],
    linesHinglish: [
      'Girna sirf ek haadsa hai zindagi ke safar ka',
      'Par haar maan lena hi buri kismat ban jaata hai',
    ],
    linesEnglish: [
      'Falling down is merely a passing moment along the journey',
      'Refusing to stand back up is what turns it into bad luck',
    ],
  },
  {
    title: 'ख़ुद का सहारा बनना',
    titleEnglish: 'Becoming Your Own Pillar',
    linesHindi: [
      'दूसरों से उम्मीद रखकर अक्सर निराशा मिलती है',
      'अपने कंधों पर भरोसा रखो, किस्मत खुद साथ चलेगी',
    ],
    linesHinglish: [
      'Doosron se ummeed rakhkar aksar niraasha milti hai',
      'Apne kandhon par bharosa rakho, kismat khud saath chalegi',
    ],
    linesEnglish: [
      'Leaning too hard on others often invites disappointment',
      'Trust the strength of your own shoulders, and fortune follows',
    ],
  },
  {
    title: 'सच्चे गुणों की चमक',
    titleEnglish: 'Shine of Real Character',
    linesHindi: [
      'सिफ़ारिश से मिली कुर्सी ज़्यादा देर नहीं टिकती',
      'कागज़ नहीं, हुनर और मेहनत ही किस्मत चमकाते हैं',
    ],
    linesHinglish: [
      'Sifaarish se mili kursi zyada der nahin tikti',
      'Kaagaz nahin, hunar aur mehnat hi kismat chamkaate hain',
    ],
    linesEnglish: [
      'Seats handed through favors rarely endure the test of time',
      'Not papers, but skill and effort make a destiny shine',
    ],
  },
  {
    title: 'मीठे बोलों का भाग्य',
    titleEnglish: 'Grace in Kind Speech',
    linesHindi: [
      'प्यार से बोली गई दो बातें पत्थर भी पिघला देती हैं',
      'मीठी ज़ुबान इंसान की आधी किस्मत संवार देती है',
    ],
    linesHinglish: [
      'Pyaar se boli gayi do baatein patthar bhi pighla deti hain',
      'Meethi zubaan insaan ki aadhi kismat sanwaar deti hai',
    ],
    linesEnglish: [
      'Two gentle words spoken with care can soften hardest stone',
      'Kindness of speech alone brightens half of anyones destiny',
    ],
  },
  {
    title: 'संतुलित मन की जीत',
    titleEnglish: 'Poise Through Highs and Lows',
    linesHindi: [
      'सुख में घमंड न करना और दुख में न टूटना कभी',
      'संतुलन रखने वालों से किस्मत हमेशा खुश रहती है',
    ],
    linesHinglish: [
      'Sukh mein ghamand na karna aur dukh mein na tootna kabhi',
      'Santulan rakhne waalon se kismat hamesha khush rehti hai',
    ],
    linesEnglish: [
      'Stay humble in triumph and unbroken amid heavy storms',
      'Destiny favors those who keep calm balance through every season',
    ],
  },
  {
    title: 'सही मौके की कीमत',
    titleEnglish: 'Respecting Time',
    linesHindi: [
      'जो वक़्त की क़द्र करता है इस संसार में',
      'एक दिन वक़्त उसकी किस्मत को सोना बना देता है',
    ],
    linesHinglish: [
      'Jo waqt ki qadr karta hai is sansaar mein',
      'Ek din waqt uski kismat ko sona bana deta hai',
    ],
    linesEnglish: [
      'Whoever honors the value of each passing hour',
      'Watches time eventually spin their destiny into pure gold',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'अनमोल धैर्य',
    titleEnglish: 'Quiet Perseverance',
    linesHindi: [
      'बारिश की एक बूँद भी पत्थर पर निशान बना देती है',
      'लगातार कोशिश से बड़ी से बड़ी किस्मत बदल जाती है',
    ],
    linesHinglish: [
      'Baarish ki ek boond bhi patthar par nishaan bana deti hai',
      'Lagaataar koshish se badi se badi kismat badal jaati hai',
    ],
    linesEnglish: [
      'Even steady droplets of rain carve shapes into solid rock',
      'Persistent effort slowly reshapes even the stubbornest fate',
    ],
  },
  {
    title: 'नए अवसर का उजाला',
    titleEnglish: 'Light of Fresh Chances',
    linesHindi: [
      'कल क्या हुआ इस सोच में आज को मत बर्बाद करना',
      'अभी बहुत से सुंदर मोड़ आना बाकी हैं ज़िंदगी में',
    ],
    linesHinglish: [
      'Kal kya hua is soch mein aaj ko mat barbaad karna',
      'Abhi bahut se sundar mod aana baaki hain zindagi mein',
    ],
    linesEnglish: [
      'Do not waste today trapped over how yesterday turned out',
      'Plenty of bright, beautiful bends still lie ahead in life',
    ],
  },
  {
    title: 'दयालुता की वापसी',
    titleEnglish: 'Kindness Comes Back',
    linesHindi: [
      'किसी ज़रूरतमंद के चेहरे पर मुस्कान ले आना कभी',
      'उसकी सच्ची दुआ तुम्हारी किस्मत के ताले खोल देगी',
    ],
    linesHinglish: [
      'Kisi zarooratmand ke chehre par muskaan le aana kabhi',
      'Uski sacchi dua tumhaari kismat ke taale khol degi',
    ],
    linesEnglish: [
      'Bring a quiet smile onto the face of someone in need',
      'Their heartfelt gratitude unlocks doors across your destiny',
    ],
  },
  {
    title: 'संयम और साहस',
    titleEnglish: 'Restraint and Courage',
    linesHindi: [
      'गुस्से के एक पल में सालों की मेहनत जल जाती है',
      'संयम रखने वालों की तक़दीर हमेशा सुरक्षित रहती है',
    ],
    linesHinglish: [
      'Gusse ke ek pal mein saalon ki mehnat jal jaati hai',
      'Sanyam rakhne waalon ki taqdeer hamesha surakshit rehti hai',
    ],
    linesEnglish: [
      'In a single flash of anger, years of labor can burn away',
      'Those who practice calm restraint keep their destiny secure',
    ],
  },
  {
    title: 'सपनो की कीमत',
    titleEnglish: 'Price of Big Dreams',
    linesHindi: [
      'बड़े ख्वाब सिर्फ़ सोने से पूरे नहीं होते कभी',
      'किस्मत को जगाने के लिए नींदें कुर्बान करनी पड़ती हैं',
    ],
    linesHinglish: [
      'Bade khwaab sirf sone se poore nahin hote kabhi',
      'Kismat ko jagaane ke liye neendein qurbaan karni padti hain',
    ],
    linesEnglish: [
      'Grand dreams never materialize merely while resting asleep',
      'Waking up ones destiny demands sacrificing quiet nights to work',
    ],
  },
  {
    title: 'सादगी भरी जीत',
    titleEnglish: 'Humble Victory',
    linesHindi: [
      'जीत के बाद भी जो अपने पाँव ज़मीन पर रखता है',
      'उसकी किस्मत हमेशा आसमान छूती रहती है',
    ],
    linesHinglish: [
      'Jeet ke baad bhi jo apne paanv zameen par rakhta hai',
      'Uski kismat hamesha aasmaan chhooti rehti hai',
    ],
    linesEnglish: [
      'Whoever keeps both feet grounded even after winning',
      'Keeps watching their destiny reach steadily toward the skies',
    ],
  },
  {
    title: 'भरोसे की शक्ति',
    titleEnglish: 'Strength of Faith',
    linesHindi: [
      'जिसने मुश्किलों के समंदर में भी उम्मीद की कश्ती छोड़ी नहीं',
      'एक दिन हवाओं ने भी उसका साथ देना शुरू कर दिया',
    ],
    linesHinglish: [
      'Jisne mushkilon ke samandar mein bhi ummeed ki kashti chhodi nahin',
      'Ek din hawaon ne bhi uska saath dena shuru kar diya',
    ],
    linesEnglish: [
      'Whoever refused to abandon hopes boat on stormy waters',
      'Found even the shifting winds blowing gently at their back',
    ],
  },
  {
    title: 'वक़्त की अनोखी रफ़्तार',
    titleEnglish: 'Measured Pace of Fortune',
    linesHindi: [
      'धीरे-धीरे चलने वाला भी मंज़िल तक पहुँच ही जाता है',
      'बस इरादे पक्के और दिल में सचाई होनी चाहिए',
    ],
    linesHinglish: [
      'Dheere-dheere chalne wala bhi manzil tak pahunch hi jaata hai',
      'Bas iraade pakke aur dil mein sachaai honi chahiye',
    ],
    linesEnglish: [
      'Even someone moving step by steady step arrives on time',
      'As long as resolve stays firm and the heart remains honest',
    ],
  },
  {
    title: 'कल की नई रोशनी',
    titleEnglish: 'Light Beyond Today',
    linesHindi: [
      'आज का अँधेरा देखकर उम्मीद का दिया मत बुझाना',
      'तेरी किस्मत के आसमान में कई तारे अभी उगने वाले हैं',
    ],
    linesHinglish: [
      'Aaj ka andhera dekhkar ummeed ka diya mat bujhana',
      'Teri kismat ke aasmaan mein kai taare abhi ugne waale hain',
    ],
    linesEnglish: [
      'Do not blow out the lamp of hope just seeing todays dark',
      'Countless bright stars are waiting to rise across your sky',
    ],
  },
  {
    title: 'अनकहे एहसान',
    titleEnglish: 'Quiet Blessings Counted',
    linesHindi: [
      'जो हमें मिल चुका है उसकी गिनती कम नहीं है',
      'शुक्राना अदा करते ही नसीब और बढ़ने लगता है',
    ],
    linesHinglish: [
      'Jo humein mil chuka hai uski ginti kam nahin hai',
      'Shukraana ada karte hi naseeb aur badhne lagta hai',
    ],
    linesEnglish: [
      'The blessings already placed in our hands are never small',
      'The moment gratitude begins, good fortune multiplies naturally',
    ],
  },
  {
    title: 'नए रास्तों का स्वागत',
    titleEnglish: 'Open Roads Ahead',
    linesHindi: [
      'बंद रास्तों के आगे रोने से दरवाज़े नहीं खुलते',
      'नया रास्ता बनाने वाले ही अपनी किस्मत लिखते हैं',
    ],
    linesHinglish: [
      'Band raaston ke aage rone se darwaaze nahin khulte',
      'Naya raasta banaane waale hi apni kismat likhte hain',
    ],
    linesEnglish: [
      'Weeping before locked gates never turns the rusted key',
      'Those who carve fresh trails write their own destiny',
    ],
  },
  {
    title: 'सच्ची लगन का रंग',
    titleEnglish: 'True Devotion Always Shows',
    linesHindi: [
      'जिस काम को पूरे मन से करोगे इस दुनिया में',
      'उसका मीठा फल किस्मत एक दिन ज़रूर चखाएगी',
    ],
    linesHinglish: [
      'Jis kaam ko poore man se karoge is duniya mein',
      'Uska meetha phal kismat ek din zaroor chakhayegi',
    ],
    linesEnglish: [
      'Whatever craft you pour your whole soul into wholeheartedly',
      'Destiny will surely let you taste its sweet harvest someday',
    ],
  },
  {
    title: 'अंदर की आवाज़',
    titleEnglish: 'Voice Within',
    linesHindi: [
      'दुनिया की भीड़ के शोर में खुद को मत खो देना',
      'तुम्हारी अपनी अंतरात्मा ही सबसे सही रास्ता जानती है',
    ],
    linesHinglish: [
      'Duniya ki bheed ke shor mein khud ko mat kho dena',
      'Tumhaari apni antaraatma hi sabse sahi raasta jaanti hai',
    ],
    linesEnglish: [
      'Do not lose yourself inside the clamor of the crowd',
      'Your own quiet conscience already knows the truest road',
    ],
  },
  {
    title: 'हर दिन नया मौका',
    titleEnglish: 'Daily Renewal',
    linesHindi: [
      'क़िस्मत कोई एक बार लिखी गई पत्थर की किताब नहीं',
      'हर अच्छे फैसले के साथ इसके पन्ने रोज़ बदलते हैं',
    ],
    linesHinglish: [
      'Kismat koi ek baar likhi gayi patthar ki kitaab nahin',
      'Har acche faisle ke saath iske panne roz badalte hain',
    ],
    linesEnglish: [
      'Destiny is no static book chiseled once onto cold stone',
      'With every wise choice you make, its pages rewrite daily',
    ],
  },
  {
    title: 'हौसलों की उड़ान',
    titleEnglish: 'Winged Determination',
    linesHindi: [
      'जब हौसला आसमान से भी ऊँचा हो जाता है',
      'तो किस्मत की हवाएँ भी तुम्हारे साथ बहने लगती हैं',
    ],
    linesHinglish: [
      'Jab hausla aasmaan se bhi ooncha ho jaata hai',
      'To kismat ki hawaayein bhi tumhaare saath behne lagti hain',
    ],
    linesEnglish: [
      'When inner courage rises taller than the distant sky',
      'Even the winds of fortune turn to carry your sails forward',
    ],
  },
  {
    title: 'मुसीबत से मिली सीख',
    titleEnglish: 'Wisdom Out of Adversity',
    linesHindi: [
      'अगर ज़िंदगी में कभी काँटे ही न चुभे होते पैरों में',
      'तो मखमल पर चलने का असली मज़ा भी न समझ आता',
    ],
    linesHinglish: [
      'Agar zindagi mein kabhi kaante hi na chubhe hote pairon mein',
      'To makhmal par chalne ka asli maza bhi na samajh aata',
    ],
    linesEnglish: [
      'Had thorns never once pricked our soles along the trail',
      'We would never cherish the softness of velvet beneath our feet',
    ],
  },
  {
    title: 'वक़्त की सही पहचान',
    titleEnglish: 'Knowing Your Moment',
    linesHindi: [
      'हर बात का एक मुनासिब वक़्त मुक़र्रर होता है',
      'सही समय आने पर बंद किस्मत भी चमक उठती है',
    ],
    linesHinglish: [
      'Har baat ka ek munaasib waqt muqarrar hota hai',
      'Sahi samay aane par band kismat bhi chamak uthti hai',
    ],
    linesEnglish: [
      'Everything under the sun holds its own appointed season',
      'When the proper hour strikes, even locked fortune gleams bright',
    ],
  },
  {
    title: 'ईमानदारी का वरदान',
    titleEnglish: 'Blessing of Truthfulness',
    linesHindi: [
      'सच्चे रास्ते पर चलने में थोड़ा वक़्त लग सकता है',
      'पर जब किस्मत साथ देती है तो फिर कोई रोक नहीं पाता',
    ],
    linesHinglish: [
      'Sacche raaste par chalne mein thoda waqt lag sakta hai',
      'Par jab kismat saath deti hai to phir koi rok nahin paata',
    ],
    linesEnglish: [
      'Walking the honest lane may take a little longer at first',
      'Yet once fortune backs you, nothing stands able to hold you',
    ],
  },
  {
    title: 'चट्टान जैसा संकल्प',
    titleEnglish: 'Rock-Solid Purpose',
    linesHindi: [
      'एक छोटी सी असफलता पर अपना लक्ष्य मत बदल देना',
      'क्या पता अगली सीढ़ी पर ही तुम्हारी तक़दीर खड़ी हो',
    ],
    linesHinglish: [
      'Ek chhoti si asafalta par apna lakshya mat badal dena',
      'Kya pata agli seedhi par hi tumhaari taqdeer khadi ho',
    ],
    linesEnglish: [
      'Do not abandon your goal over one small misstep along the way',
      'Fortune itself may be waiting right at the very next rung',
    ],
  },
  {
    title: 'मेहनत से सजा नसीब',
    titleEnglish: 'Destiny Dressed in Labor',
    linesHindi: [
      'सपनों को हक़ीक़त में बदलने का बस एक नियम है',
      'किस्मत से ज़्यादा अपने पसीने पर भरोसा रखना',
    ],
    linesHinglish: [
      'Sapnon ko haqeeqat mein badalne ka bas ek niyam hai',
      'Kismat se zyada apne paseene par bharosa rakhna',
    ],
    linesEnglish: [
      'There is only one timeless rule for turning dreams real',
      'Place far greater faith in your daily sweat than mere luck',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'ख़ामोश संघर्ष की जीत',
    titleEnglish: 'Triumph of Quiet Grit',
    linesHindi: [
      'जो आज तुम्हें किस्मत का खेल लग रहा है बाहर से',
      'उसके पीछे बरसों की खामोश मेहनत छुपी होती है',
    ],
    linesHinglish: [
      'Jo aaj tumhein kismat ka khel lag raha hai baahar se',
      'Uske peeche barson ki khaamosh mehnat chhupi hoti hai',
    ],
    linesEnglish: [
      'What appears to outsiders like a stroke of pure luck today',
      'Rests upon years of silent, unseen struggle underneath',
    ],
  },
  {
    title: 'सब्र की ख़ूबसूरती',
    titleEnglish: 'Grace Inside Patience',
    linesHindi: [
      'जब सब कुछ उल्टा लगे तब भी धीरज मत हारना',
      'हर रात के बाद सुबह लाना किस्मत का पुराना नियम है',
    ],
    linesHinglish: [
      'Jab sab kuch ulta lage tab bhi dheeraj mat haarna',
      'Har raat ke baad subah laana kismat ka purana niyam hai',
    ],
    linesEnglish: [
      'Even when everything feels upside down, hold onto patience',
      'Bringing dawn after every night is lifes oldest, truest law',
    ],
  },
  {
    title: 'अनदेखा मोड़',
    titleEnglish: 'Hidden Turn Ahead',
    linesHindi: [
      'कई बार बंद गली लगने वाला मोड़ भी आगे खुल जाता है',
      'बस चलते रहने का हौसला बनाए रखना ज़रूरी है',
    ],
    linesHinglish: [
      'Kai baar band gali lagne wala mod bhi aage khul jaata hai',
      'Bas chalte rehne ka hausla banaaye rakhna zaroori hai',
    ],
    linesEnglish: [
      'Often a bend that looks like a dead end opens wide ahead',
      'All that matters is keeping the courage to keep moving on',
    ],
  },
  {
    title: 'अच्छा सोचने की ताक़त',
    titleEnglish: 'Power of Positive Thought',
    linesHindi: [
      'अच्छी उम्मीदें रखने वालों के पास खुशियाँ खिंची आती हैं',
      'सकारात्मक सोच खुद ही बेहतर किस्मत बना देती है',
    ],
    linesHinglish: [
      'Acchi ummeedein rakhne waalon ke paas khushiyan khinchi aati hain',
      'Sakaaratmak soch khud hi behtar kismat bana deti hai',
    ],
    linesEnglish: [
      'Joys naturally gravitate toward minds that harbor bright hope',
      'Hopeful thinking itself shapes a kinder destiny ahead',
    ],
  },
  {
    title: 'कर्मों की गूंज',
    titleEnglish: 'Echoes of Your Deeds',
    linesHindi: [
      'तुम दुनिया को जो देते हो, लौटकर वही आता है',
      'अच्छे कर्म करो तो किस्मत खुद मेहरबान हो जाती है',
    ],
    linesHinglish: [
      'Tum duniya ko jo dete ho, lautkar wahi aata hai',
      'Acche karm karo to kismat khud meharbaan ho jaati hai',
    ],
    linesEnglish: [
      'Whatever energy you send into this world circles right back',
      'Act with goodness, and destiny grows generous in return',
    ],
  },
  {
    title: 'ख़ुद को तराशना',
    titleEnglish: 'Polishing Your Craft',
    linesHindi: [
      'हीरे को भी चमकने के लिए घिसना पड़ता है पहले',
      'मेहनत की धार से ही नसीब की लकीरें चमकती हैं',
    ],
    linesHinglish: [
      'Heere ko bhi chamakne ke liye ghisna padta hai pehle',
      'Mehnat ki dhaar se hi naseeb ki lakeerein chamakti hain',
    ],
    linesEnglish: [
      'Even a rough diamond must be cut and polished to shine',
      'Through steady effort alone do fortunes lines begin to gleam',
    ],
  },
  {
    title: 'वक़्त की मार से निखार',
    titleEnglish: 'Refined by Storms',
    linesHindi: [
      'हर आंधी सिर्फ़ नुकसान करने नहीं आती जीवन में',
      'कुछ झोंके तुम्हारा रास्ता साफ़ करने भी आते हैं',
    ],
    linesHinglish: [
      'Har aandhi sirf nuksaan karne nahin aati jeevan mein',
      'Kuch jhonke tumhaara raasta saaf karne bhi aate hain',
    ],
    linesEnglish: [
      'Not every storm blows into life solely to cause harm',
      'Some strong winds arrive simply to clear debris off your path',
    ],
  },
  {
    title: 'सही इरादों का साथ',
    titleEnglish: 'Backed by Pure Resolve',
    linesHindi: [
      'जहाँ इरादे नेक हों वहाँ मदद खुद पहुँच जाती है',
      'अच्छी नीयत वालों का नसीब कभी खाली नहीं रहता',
    ],
    linesHinglish: [
      'Jahaan iraade nek hon wahaan madad khud pahunch jaati hai',
      'Acchi neeyat waalon ka naseeb kabhi khaali nahin rehta',
    ],
    linesEnglish: [
      'Wherever intentions remain upright, help finds its own way there',
      'Good-hearted people never walk away empty-handed from fate',
    ],
  },
  {
    title: 'लहरों से लड़कर जीत',
    titleEnglish: 'Crossing Rough Seas',
    linesHindi: [
      'किस्मत की लहरें ऊँची ज़रूर उठती हैं बीच समंदर',
      'पर कुशल नाविक हर मौज को सवारी बना लेता है',
    ],
    linesHinglish: [
      'Kismat ki lehrein oonchi zaroor uthti hain beech samandar',
      'Par kushal naavik har mauj ko sawaari bana leta hai',
    ],
    linesEnglish: [
      'Waves of fortune certainly swell high out in deep water',
      'Yet a steady sailor turns every rising crest into momentum',
    ],
  },
  {
    title: 'नए सिरे से शुरुआत',
    titleEnglish: 'Clean Slate Courage',
    linesHindi: [
      'देर हो जाने के डर से शुरुआत मत रोक देना कभी',
      'कई लोगों की किस्मत जीवन के दूसरे हिस्से में चमकती है',
    ],
    linesHinglish: [
      'Der ho jaane ke dar se shuruaat mat rok dena kabhi',
      'Kai logon ki kismat jeevan ke doosre hisse mein chamakti hai',
    ],
    linesEnglish: [
      'Never stop yourself from starting out of fear it is too late',
      'Countless peoples finest fortunes bloom in lifes second half',
    ],
  },
  {
    title: 'सच्ची मेहनत की गवाही',
    titleEnglish: 'Proof of Honest Work',
    linesHindi: [
      'हथेली पर लिखी रेखाएँ समय के साथ मिट भी सकती हैं',
      'पर अपने पसीने से बनी पहचान हमेशा ज़िंदा रहती है',
    ],
    linesHinglish: [
      'Hatheli par likhi rekhaayein samay ke saath mit bhi sakti hain',
      'Par apne paseene se bani pehchaan hamesha zinda rehti hai',
    ],
    linesEnglish: [
      'Faint creases on the palm can soften and blur with age',
      'Yet an identity built with honest sweat lives on forever',
    ],
  },
  {
    title: 'मुस्कुराता हुआ भविष्य',
    titleEnglish: 'Bright Horizons Ahead',
    linesHindi: [
      'थोड़ी सी धूप और थोड़ा सा धैर्य काफी है दोस्त',
      'देखना जल्द ही तुम्हारी तक़दीर भी गुलज़ार होगी',
    ],
    linesHinglish: [
      'Thodi si dhoop aur thoda sa dhairya kaafi hai dost',
      'Dekhna jald hi tumhaari taqdeer bhi gulzaar hogi',
    ],
    linesEnglish: [
      'A little warm sunlight and steady patience are plenty, friend',
      'Soon enough you will watch your destiny burst into bloom',
    ],
  },
  {
    title: 'सफलता का आसान राज़',
    titleEnglish: 'Simple Secret of Fortune',
    linesHindi: [
      'रोज़ थोड़ा बेहतर बनने की आदत डाल लो बस',
      'एक दिन किस्मत खुद तुम्हें सबसे आगे ला खड़ा करेगी',
    ],
    linesHinglish: [
      'Roz thoda behtar banne ki aadat daal lo bas',
      'Ek din kismat khud tumhein sabse aage la khada karegi',
    ],
    linesEnglish: [
      'Simply build the habit of growing a little better every day',
      'And fortune itself will place you ahead of the pack someday',
    ],
  },
  {
    title: 'अनचाहे बदलाव की सुंदरता',
    titleEnglish: 'Beauty in Forced Turns',
    linesHindi: [
      'तितली बनने से पहले हर किसी को बंद कोकून झेलना पड़ता है',
      'कठिन वक़्त भी उड़ान से पहले की तैयारी होता है',
    ],
    linesHinglish: [
      'Titli banne se pehle har kisi ko band cocoon jhelna padta hai',
      'Kathin waqt bhi udaan se pehle ki taiyaari hota hai',
    ],
    linesEnglish: [
      'Before becoming a butterfly, every wing endures a tight cocoon',
      'Hard seasons are simply preparation just ahead of flight',
    ],
  },
  {
    title: 'अपनों की दुआओं का बल',
    titleEnglish: 'Shield of Loved Ones Wishes',
    linesHindi: [
      'कई बार बड़े हादसों से हम यूँ ही बच निकलते हैं',
      'ज़रूर किसी अपने की सच्ची दुआ हमारे साथ चलती है',
    ],
    linesHinglish: [
      'Kai baar bade haadson se hum yoon hi bach nikalte hain',
      'Zaroor kisi apne ki sacchi dua hamaare saath chalti hai',
    ],
    linesEnglish: [
      'Sometimes we walk safely past disasters without knowing how',
      'Surely some loved ones silent prayer walks right beside us',
    ],
  },
  {
    title: 'दिल की गहराई से भरोसा',
    titleEnglish: 'Deep-Rooted Trust',
    linesHindi: [
      'मंज़िल तक पहुँचने में वक़्त लगे तो चिंता न करना',
      'अच्छी चीज़ें हमेशा थोड़ा इंतज़ार करवाकर आती हैं',
    ],
    linesHinglish: [
      'Manzil tak pahunchne mein waqt lage to chinta na karna',
      'Acchi cheezein hamesha thoda intezaar karwaakar aati hain',
    ],
    linesEnglish: [
      'Do not worry if reaching your dream takes longer than planned',
      'Truly worthwhile blessings often make us wait a little while',
    ],
  },
  {
    title: 'हिम्मत के आगे झुकती तक़दीर',
    titleEnglish: 'Fate Yielding to Grit',
    linesHindi: [
      'जिन्होंने मुश्किल दिनों में भी मैदान नहीं छोड़ा',
      'आख़िरकार नसीब को उनके क़दमों में झुकना ही पड़ा',
    ],
    linesHinglish: [
      'Jinhone mushkil dinon mein bhi maidaan nahin chhoda',
      'Aakhirkaar naseeb ko unke kadmon mein jhukna hi pada',
    ],
    linesEnglish: [
      'Those who refused to quit the field during darkest hours',
      'Watched fortune eventually bow down gently at their feet',
    ],
  },
  {
    title: 'अच्छा वक़्त क़रीब है',
    titleEnglish: 'Good Times Near',
    linesHindi: [
      'सबर की स्याही से जो तुमने पन्ने लिखे हैं मेहनत के',
      'अब उनके चमकने और पढ़े जाने का वक़्त आ गया है',
    ],
    linesHinglish: [
      'Sabr ki syaahi se jo tumne panne likhe hain mehnat ke',
      'Ab unke chamakne aur padhe jaane ka waqt aa gaya hai',
    ],
    linesEnglish: [
      'All those quiet pages of toil you wrote with patient ink',
      'Are finally stepping into the light to be seen and celebrated',
    ],
  },
  {
    title: 'आसमान छूने का हक़',
    titleEnglish: 'Born for Higher Skies',
    linesHindi: [
      'अपने छोटे दायरे से बाहर निकलकर तो देखो कभी',
      'क़िस्मत ने तुम्हारे लिए बहुत बड़ा जहाँ रखा है',
    ],
    linesHinglish: [
      'Apne chhote daayre se baahar nikalkar to dekho kabhi',
      'Kismat ne tumhaare liye bahut bada jahaan rakha hai',
    ],
    linesEnglish: [
      'Step just once beyond the small circle of your doubts',
      'And see what a vast, generous world fortune prepared for you',
    ],
  },
  {
    title: 'ख़ुद लिखी हुई तक़दीर',
    titleEnglish: 'Self-Written Destiny',
    linesHindi: [
      'दूसरों के लिखे फ़ैसलों पर जीना छोड़ दो अब यार',
      'कलम उठाओ और अपनी किस्मत की सबसे प्यारी कहानी लिखो',
    ],
    linesHinglish: [
      'Doosron ke likhe faislon par jeena chhod do ab yaar',
      'Kalam uthao aur apni kismat ki sabse pyaari kahaani likho',
    ],
    linesEnglish: [
      'Stop living according to scripts written by other hands, friend',
      'Pick up your own pen and write your brightest chapter of destiny',
    ],
  },
];

export const UNIQUE_KISMAT_140 = buildUniqueShayaris(
  'kismat',
  'Kismat Shayari (किस्मत शायरी)',
  '🌟',
  61,
  KISMAT_ENTRIES
);
