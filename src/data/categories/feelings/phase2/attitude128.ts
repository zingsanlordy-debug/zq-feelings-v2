import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const ATTITUDE_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'ख़ामोशी ही काफी है',
    titleEnglish: 'Silence Speaks Loudest',
    linesHindi: [
      'हम शोर मचाकर अपनी पहचान नहीं बनाते दोस्त',
      'हमारी ख़ामोशी ही महफ़िल का रुख़ मोड़ देती है',
    ],
    linesHinglish: [
      'Hum shor machaakar apni pehchaan nahin banaate dost',
      'Hamaari khaamoshi hi mehfil ka rukh mod deti hai',
    ],
    linesEnglish: [
      'I never announce my presence with empty noise, friend',
      'My quiet entry alone shifts the whole mood of the room',
    ],
  },
  {
    title: 'अंदाज़ अपना अलग है',
    titleEnglish: 'My Own Standard',
    linesHindi: [
      'नक़ल करके लोग कुछ दिन चमक सकते हैं शायद',
      'पर हमारा असली तेवर ही हमारा ब्रांड बन चुका है',
    ],
    linesHinglish: [
      'Naqal karke log kuch din chamak sakte hain shaayad',
      'Par hamaara asli tevar hi hamaara brand ban chuka hai',
    ],
    linesEnglish: [
      'Copycats might sparkle briefly for a passing week',
      'My authentic vibe has already become my signature',
    ],
  },
  {
    title: 'बराबरी का शौक़ नहीं',
    titleEnglish: 'Not Built to Compete Down',
    linesHindi: [
      'हमसे जलने वालों से बस इतनी गुज़ारिश है मेरी',
      'थोड़ा और मेहनत करो, बराबरी यूँ ही नहीं होती',
    ],
    linesHinglish: [
      'Humse jalne waalon se bas itni guzaarish hai meri',
      'Thoda aur mehnat karo, baraabari yoon hi nahin hoti',
    ],
    linesEnglish: [
      'To everyone busy envying my pace from the sidelines',
      'Work a little harder—matching my level takes real grit',
    ],
  },
  {
    title: 'झुकना फितरत में नहीं',
    titleEnglish: 'Respect Not Fear',
    linesHindi: [
      'प्यार से बोलो तो सिर आँखों पर बिठाते हैं हम',
      'अकड़ दिखाओ तो नज़रअंदाज़ करना बख़ूबी आता है',
    ],
    linesHinglish: [
      'Pyaar se bolo to sir aankhon par bithaate hain hum',
      'Akad dikhao to nazarandaaz karna bakhoobi aata hai',
    ],
    linesEnglish: [
      'Speak with warmth and I welcome you with full honor',
      'Flash arrogance and I master ignoring you effortlessly',
    ],
  },
  {
    title: 'वक़्त बताएगा क़द',
    titleEnglish: 'Time Answers Everything',
    linesHindi: [
      'हर बात का जवाब ज़ुबान से देना ज़रूरी नहीं समझते',
      'हम अपने काम से लोगों की बोलती बंद करते हैं',
    ],
    linesHinglish: [
      'Har baat ka jawaab zubaan se dena zaroori nahin samajhte',
      'Hum apne kaam se logon ki bolti band karte hain',
    ],
    linesEnglish: [
      'I never bother replying to every remark with words',
      'I let my results silence the room all by themselves',
    ],
  },
  {
    title: 'आसमान अपना मैदान',
    titleEnglish: 'Built for Higher Skies',
    linesHindi: [
      'पिंजरे में उड़ने की आदत नहीं है हमारी जान',
      'हम अपने पंख खुले आसमान के लिए बचाकर रखते हैं',
    ],
    linesHinglish: [
      'Pinjare mein udne ki aadat nahin hai hamaari jaan',
      'Hum apne pankh khule aasmaan ke liye bachaakar rakhte hain',
    ],
    linesEnglish: [
      'Caged loops were never meant for wings like mine',
      'I save every flight for wide, untamed open skies',
    ],
  },
  {
    title: 'दिल साफ, तेवर कड़क',
    titleEnglish: 'Pure Heart, Sharp Edge',
    linesHindi: [
      'दिल से बिल्कुल साफ़ हैं और बात के पूरे पक्के हैं',
      'बस मतलबियों के लिए हमारा अंदाज़ थोड़ा सख़्त है',
    ],
    linesHinglish: [
      'Dil se bilkul saaf hain aur baat ke poore pakke hain',
      'Bas matlabiyon ke liye hamaara andaaz thoda sakht hai',
    ],
    linesEnglish: [
      'My heart stays spotless and my word stays solid gold',
      'Only selfish people ever meet my colder edge',
    ],
  },
  {
    title: 'अकेला काफ़ी हूँ',
    titleEnglish: 'One Man Army',
    linesHindi: [
      'भीड़ इकट्ठी करने का शौक़ कमज़ोर लोगों को होता है',
      'हम तो अकेले ही पूरा गेम पलटने का दम रखते हैं',
    ],
    linesHinglish: [
      'Bheed ikatthi karne ka shauq kamzor logon ko hota hai',
      'Hum to akele hi poora game palatne ka dam rakhte hain',
    ],
    linesEnglish: [
      'Collecting loud crowds is a habit of uncertain minds',
      'Standing solo, I still hold enough fire to flip the game',
    ],
  },
  {
    title: 'कीमत खुद तय करना',
    titleEnglish: 'Never Discounted',
    linesHindi: [
      'अपनी क़द्र खुद करनी आती है हमें इस दुनिया में',
      'जो हमारी अहमियत न समझे, हम उसके रास्ते से हट जाते हैं',
    ],
    linesHinglish: [
      'Apni qadr khud karni aati hai humein is duniya mein',
      'Jo hamaari ahmiyat na samjhe, hum uske raaste se hat jaate hain',
    ],
    linesEnglish: [
      'I know my own worth well inside this noisy world',
      'Whoever overlooks my value loses access to my presence',
    ],
  },
  {
    title: 'मुस्कान ही जवाब है',
    titleEnglish: 'Cold Smile Reply',
    linesHindi: [
      'दुश्मन भी हैरान रहते हैं मेरी मुस्कान देखकर आजकल',
      'इतनी ठोकरों के बाद भी ये बंदा हर रोज़ चमक रहा है',
    ],
    linesHinglish: [
      'Dushman bhi hairaan rehte hain meri muskaan dekhkar aajkal',
      'Itni thokron ke baad bhi ye banda har roz chamak raha hai',
    ],
    linesEnglish: [
      'Even critics stay puzzled seeing how calmly I smile now',
      'Rising sharper after every blow thrown my way',
    ],
  },
  {
    title: 'शोर नहीं, असर चाहिए',
    titleEnglish: 'Impact Over Volume',
    linesHindi: [
      'स्टेटस पर बड़े-बड़े दावे करने से कोई बड़ा नहीं बनता',
      'असली रौब तो सामने आते ही आँखों में दिख जाता है',
    ],
    linesHinglish: [
      'Status par bade-bade daave karne se koi bada nahin banta',
      'Asli raub to saamne aate hi aankhon mein dikh jaata hai',
    ],
    linesEnglish: [
      'Typing loud boasts online never builds real stature',
      'True presence shows the instant you walk into the room',
    ],
  },
  {
    title: 'दोस्त या दुश्मन साफ़',
    titleEnglish: 'Clear Boundaries',
    linesHindi: [
      'हम दोस्ती निभाएँ तो जान की बाज़ी लगा देते हैं',
      'और रिश्ता ख़त्म करें तो पलटकर देखना भूल जाते हैं',
    ],
    linesHinglish: [
      'Hum dosti nibhaayein to jaan ki baazi laga dete hain',
      'Aur rishta khatam karein to palatkar dekhna bhool jaate hain',
    ],
    linesEnglish: [
      'When I stand by someone, I back them with everything',
      'Once a door closes for good, I never glance backward',
    ],
  },
  {
    title: 'नया वर्ज़न अपग्रेड',
    titleEnglish: 'Upgraded Mindset',
    linesHindi: [
      'पुराना वाला सीधापन अब अलमारी में बंद कर दिया है',
      'अब जैसा व्यवहार मिलेगा, वैसा ही रिटर्न गिफ्ट मिलेगा',
    ],
    linesHinglish: [
      'Purana waala seedhapan ab almaari mein band kar diya hai',
      'Ab jaisa vyavahaar milega, waisa hi return gift milega',
    ],
    linesEnglish: [
      'I tucked my old over-nice patience neatly away',
      'Now every vibe sent my way gets matched with exact energy',
    ],
  },
  {
    title: 'खुद के नियम',
    titleEnglish: 'My Rules Only',
    linesHindi: [
      'ज़िंदगी की किताब किसी और के हिसाब से नहीं चलती मेरी',
      'हर नया अध्याय मैं अपनी शर्तों और कलम से लिखता हूँ',
    ],
    linesHinglish: [
      'Zindagi ki kitaab kisi aur ke hisaab se nahin chalti meri',
      'Har naya adhyaay main apni sharton aur kalam se likhta hoon',
    ],
    linesEnglish: [
      'My life never runs on somebody elses borrowed schedule',
      'Every fresh chapter gets written strictly by my own pen',
    ],
  },
  {
    title: 'ठंडा दिमाग़, तेज़ निगाह',
    titleEnglish: 'Calm Mind, Sharp Eyes',
    linesHindi: [
      'हर किसी की चाल को भाँप लेता हूँ मैं मुस्कुराते हुए',
      'बस चुप रहता हूँ ताकि लोगों का असली रूप सामने आए',
    ],
    linesHinglish: [
      'Har kisi ki chaal ko bhaanp leta hoon main muskurate hue',
      'Bas chup rehta hoon taaki logon ka asli roop saamne aaye',
    ],
    linesEnglish: [
      'I spot every hidden move clearly behind a calm smile',
      'Staying quiet simply lets people reveal who they really are',
    ],
  },
  {
    title: 'हल्के में मत लेना',
    titleEnglish: 'Never Underestimate Calm',
    linesHindi: [
      'मेरी शराफ़त को कभी मेरी कमज़ोरी मत समझ लेना',
      'समंदर शांत दिखे तब भी उसमें तूफ़ान की ताक़त रहती है',
    ],
    linesHinglish: [
      'Meri sharaafat ko kabhi meri kamzori mat samajh lena',
      'Samandar shaant dikhe tab bhi usmein toofaan ki taaqat rehti hai',
    ],
    linesEnglish: [
      'Never mistake my polite composure for quiet weakness',
      'Even glassy calm waters carry storm force beneath',
    ],
  },
  {
    title: 'जीत की आदत',
    titleEnglish: 'Winning Habit',
    linesHindi: [
      'हारने का डर उनके मन में होता है जो दिखावे के लिए खेलें',
      'हम तो हर मैदान में सीखने या जीतने के लिए उतरते हैं',
    ],
    linesHinglish: [
      'Haarne ka dar unke man mein hota hai jo dikhawe ke liye khelain',
      'Hum to har maidaan mein seekhne ya jeetne ke liye utarte hain',
    ],
    linesEnglish: [
      'Fear of losing haunts those who play solely for applause',
      'I step onto every field either to learn sharp or win clean',
    ],
  },
  {
    title: 'अपना रास्ता अलग',
    titleEnglish: 'Carving Own Lane',
    linesHindi: [
      'भीड़ जिस सड़क पर चले, ज़रूरी नहीं हम भी वहीं चलें',
      'अपनी पगडंडी बनाना ही असली मर्द और दम की पहचान है',
    ],
    linesHinglish: [
      'Bheed jis sadak par chale, zaroori nahin hum bhi wahin chalein',
      'Apni pagdandi banaana hi asli dam ki pehchaan hai',
    ],
    linesEnglish: [
      'Just because a crowd takes one highway does not mean I follow',
      'Cutting your own trail defines real backbone',
    ],
  },
  {
    title: 'शौक़ ऊँचे, दिल सादा',
    titleEnglish: 'Royal Taste, Grounded Soul',
    linesHindi: [
      'बात पैसे की नहीं, बात सोच और तहज़ीब की होती है',
      'हम सादे कपड़ों में भी पूरा माहौल अपना बना लेते हैं',
    ],
    linesHinglish: [
      'Baat paise ki nahin, baat soch aur tehzeeb ki hoti hai',
      'Hum saade kapdon mein bhi poora maahaul apna bana lete hain',
    ],
    linesEnglish: [
      'Presence is never bought by price tags, only carried by grace',
      'Even in plain clothes, I command the room effortlessly',
    ],
  },
  {
    title: 'बिना इजाज़त एंट्री नहीं',
    titleEnglish: 'Selective Access',
    linesHindi: [
      'अब हर किसी के लिए उपलब्ध रहना बंद कर दिया है मैंने',
      'दिल और वक़्त दोनों अब सिर्फ़ ख़ास लोगों के लिए हैं',
    ],
    linesHinglish: [
      'Ab har kisi ke liye uplabdh rehna band kar diya hai maine',
      'Dil aur waqt dono ab sirf khaas logon ke liye hain',
    ],
    linesEnglish: [
      'I stopped staying constantly reachable for everyone around',
      'Both my time and heart stay reserved for rare company now',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'ख़ुद पर पूरा भरोसा',
    titleEnglish: 'Unshaken Self-Trust',
    linesHindi: [
      'ताली बजाने वाले आएँ या न आएँ मेरे सफ़र में',
      'अपने दम पर रास्ता तय करने का भरोसा पूरा है मुझे',
    ],
    linesHinglish: [
      'Taali bajaane waale aayein ya na aayein mere safar mein',
      'Apne dam par raasta tay karne ka bharosa poora hai mujhe',
    ],
    linesEnglish: [
      'Whether crowds gather to cheer along my road or stay away',
      'I trust my own two feet to carry me all the way there',
    ],
  },
  {
    title: 'बेवजह की बहस से दूर',
    titleEnglish: 'Too Busy to Argue',
    linesHindi: [
      'हर भौंकने वाले के पीछे रुककर पत्थर नहीं मारते हम',
      'हमारी मंज़िल इतनी बड़ी है कि फ़ालतू वक़्त नहीं है',
    ],
    linesHinglish: [
      'Har kisi ki bakwaas par rukkar behas nahin karte hum',
      'Hamaari manzil itni badi hai ki faaltu waqt nahin hai',
    ],
    linesEnglish: [
      'I never waste breath stopping for every petty noise',
      'My goals stand far too big to spare idle minutes',
    ],
  },
  {
    title: 'असली चमक अंदर से',
    titleEnglish: 'Built Different',
    linesHindi: [
      'हीरे की कीमत बाज़ार के शोर से कम नहीं होती कभी',
      'हम अपनी चमक किसी की तारीफ़ के भरोसे नहीं रखते',
    ],
    linesHinglish: [
      'Heere ki keemat baazaar ke shor se kam nahin hoti kabhi',
      'Hum apni chamak kisi ki taareef ke bharose nahin rakhte',
    ],
    linesEnglish: [
      'Market chatter never lowers the worth of genuine diamond',
      'My confidence never waits on anybody elses approval',
    ],
  },
  {
    title: 'सीधी बात, साफ़ हिसाब',
    titleEnglish: 'Straight Talk Always',
    linesHindi: [
      'मीठी चाशनी में ज़हर घोलने की आदत नहीं हमारी',
      'मुँह पर सच बोलते हैं, इसलिए कुछ लोगों को खटकते हैं',
    ],
    linesHinglish: [
      'Meethi chaashni mein zehar gholne ki aadat nahin hamaari',
      'Munh par sach bolte hain, isliye kuch logon ko khatakte hain',
    ],
    linesEnglish: [
      'Sugarcoating bitter games was never my style',
      'I speak plain truth face to face, and real ones respect it',
    ],
  },
  {
    title: 'ख़ामोश तैयारी',
    titleEnglish: 'Silent Hustle',
    linesHindi: [
      'आज जो लोग हमारी मेहनत पर हल्की हँसी हँस रहे हैं',
      'कल वही लोग हमारा नाम बड़ी इज़्ज़त से लेने वाले हैं',
    ],
    linesHinglish: [
      'Aaj jo log hamaari mehnat par halki hansi hans rahe hain',
      'Kal wahi log hamaara naam badi izzat se lene waale hain',
    ],
    linesEnglish: [
      'Those chuckling softly at my quiet grind today',
      'Will speak my name with unmistakable respect tomorrow',
    ],
  },
  {
    title: 'दबाव में निखार',
    titleEnglish: 'Calm Under Fire',
    linesHindi: [
      'तूफ़ान जब सबसे तेज़ चलता है समंदर के ऊपर',
      'असली खिलाड़ी तभी अपनी शांत चाल चलता है',
    ],
    linesHinglish: [
      'Toofaan jab sabse tez chalta hai samandar ke upar',
      'Asli khiladi tabhi apni shaant chaal chalta hai',
    ],
    linesEnglish: [
      'Right when the storm swells fiercest across the deck',
      'True players make their sharpest, calmest move',
    ],
  },
  {
    title: 'दो मुँहे लोगों से दूरी',
    titleEnglish: 'Zero Tolerance for Fake',
    linesHindi: [
      'मुँह पर भाई और पीठ पीछे बुराई करने वाले दूर रहें',
      'हम कम लोगों में खुश हैं, पर सब असली होने चाहिए',
    ],
    linesHinglish: [
      'Munh par bhai aur peeth peeche buraai karne waale door rahein',
      'Hum kam logon mein khush hain, par sab asli hone chahiye',
    ],
    linesEnglish: [
      'Friendly faces hiding backstabbing tongues can stay miles away',
      'I prefer a tiny table where every single soul is real',
    ],
  },
  {
    title: 'ताक़त का सही उपयोग',
    titleEnglish: 'Controlled Power',
    linesHindi: [
      'ताक़त होने का मतलब हर जगह दिखाना नहीं होता यार',
      'सही वक़्त पर शांत रहना सबसे बड़ा रौब होता है',
    ],
    linesHinglish: [
      'Taaqat hone ka matlab har jagah dikhana nahin hota yaar',
      'Sahi waqt par shaant rehna sabse bada raub hota hai',
    ],
    linesEnglish: [
      'Carrying real strength never needs loud daily proof',
      'Holding composed silence at the peak moment commands awe',
    ],
  },
  {
    title: 'माफ़ी है पर भूल नहीं',
    titleEnglish: 'Forgive, Never Forget',
    linesHindi: [
      'गलतियाँ माफ़ करने का बड़ा दिल आज भी रखते हैं हम',
      'पर किसी को दोबारा वैसी ही जगह नहीं देते हम',
    ],
    linesHinglish: [
      'Galtiyan maaf karne ka bada dil aaj bhi rakhte hain hum',
      'Par kisi ko dobaara waisi hi jagah nahin dete hum',
    ],
    linesEnglish: [
      'My heart still stays generous enough to forgive past mistakes',
      'Yet nobody ever gets handed the same second seat twice',
    ],
  },
  {
    title: 'अपनी ही धुन में मस्त',
    titleEnglish: 'Locked Into My Zone',
    linesHindi: [
      'दुनिया क्या सोचती है, यह चिंता उनके लिए छोड़ दी मैंने',
      'मैं अपने लक्ष्य और अपने सुकून में मस्त रहता हूँ',
    ],
    linesHinglish: [
      'Duniya kya sochti hai, yah chinta unke liye chhod di maine',
      'Main apne lakshya aur apne sukoon mein mast rehta hoon',
    ],
    linesEnglish: [
      'I left worrying over gossip strictly to idle spectators',
      'I stay locked into my goals and unbothered peace',
    ],
  },
  {
    title: 'अंदाज़-ए-बयाँ',
    titleEnglish: 'Class Over Clout',
    linesHindi: [
      'कपड़ों के टैग नहीं, इंसान का लहजा बताता है औक़ात',
      'हमारी सादगी में भी एक रॉयल ठहराव नज़र आता है',
    ],
    linesHinglish: [
      'Kapdon ke tag nahin, insaan ka lehja bataata hai aukaat',
      'Hamaari saadgi mein bhi ek royal thehraav nazar aata hai',
    ],
    linesEnglish: [
      'Not designer labels, but tone reveals true upbringing',
      'Even my simplest days carry effortless royal poise',
    ],
  },
  {
    title: 'हार से बड़ा जज़्बा',
    titleEnglish: 'Unfazed by Losses',
    linesHindi: [
      'दो-चार ठोकरों से हमारे कदम डगमगाते नहीं कभी',
      'हम हर बार पहले से ज़्यादा मजबूत होकर लौटते हैं',
    ],
    linesHinglish: [
      'Do-chaar thokron se hamaare kadam dagmagaate nahin kabhi',
      'Hum har baar pehle se zyada mazboot hokar laut-te hain',
    ],
    linesEnglish: [
      'A few hard knocks never shake my footing for long',
      'Every comeback finds me steadier and sharper than before',
    ],
  },
  {
    title: 'अपनी मेहनत की ऊँचाई',
    titleEnglish: 'Self-Made Standing',
    linesHindi: [
      'किसी की सिफ़ारिश की सीढ़ी से ऊपर नहीं चढ़े हैं हम',
      'जितनी भी ऊँचाई पाई है, अपने पसीने से पाई है',
    ],
    linesHinglish: [
      'Kisi ki sifaarish ki seedhi se upar nahin chadhe hain hum',
      'Jitni bhi oonchaai paai hai, apne paseene se paai hai',
    ],
    linesEnglish: [
      'I never climbed upward on borrowed ladders or favors',
      'Every inch of ground beneath me was earned by my own sweat',
    ],
  },
  {
    title: 'निगाहें मंज़िल पर',
    titleEnglish: 'Tunnel Vision',
    linesHindi: [
      'रास्ते के शोर पर ध्यान देने की आदत नहीं मेरी',
      'जब तक जीत हाथ न लगे, पीछे मुड़कर नहीं देखता',
    ],
    linesHinglish: [
      'Raaste ke shor par dhyaan dene ki aadat nahin meri',
      'Jab tak jeet haath na lage, peeche mudkar nahin dekhta',
    ],
    linesEnglish: [
      'Distractions along the roadside never pull my gaze off course',
      'Until victory rests in hand, I refuse to glance back',
    ],
  },
  {
    title: 'दबंग नहीं, दमदार',
    titleEnglish: 'Impact Through Grace',
    linesHindi: [
      'चीख़कर बात मनवाना कमज़ोर लोगों का तरीका है',
      'हम सिर्फ़ एक शांत नज़र से अपनी बात कह देते हैं',
    ],
    linesHinglish: [
      'Cheekhkar baat manwaana kamzor logon ka tareeka hai',
      'Hum sirf ek shaant nazar se apni baat keh dete hain',
    ],
    linesEnglish: [
      'Shouting to force respect belongs to uncertain minds',
      'One steady glance delivers everything I need to say',
    ],
  },
  {
    title: 'वक़्त के पाबंद',
    titleEnglish: 'Respecting My Clock',
    linesHindi: [
      'जो हमारी कद्र न करे, उसके लिए घड़ी रोकना छोड़ दिया',
      'अब हमारा समय सिर्फ़ उन्हीं को मिलता है जो लायक हैं',
    ],
    linesHinglish: [
      'Jo hamaari qadr na kare, uske liye ghadi rokna chhod diya',
      'Ab hamaara samay sirf unhi ko milta hai jo laayak hain',
    ],
    linesEnglish: [
      'I quit pausing my life for people who take it lightly',
      'My hours now belong strictly to those who deserve them',
    ],
  },
  {
    title: 'असली बादशाहत',
    titleEnglish: 'Ruling Own Mind',
    linesHindi: [
      'किसी और पर राज करने की ख़्वाहिश नहीं है दिल में',
      'बस अपने मन और गुस्से पर पूरा काबू रखना असली ताक़त है',
    ],
    linesHinglish: [
      'Kisi aur par raaj karne ki khwahish nahin hai dil mein',
      'Bas apne man aur gusse par poora kaaboo rakhna asli taaqat hai',
    ],
    linesEnglish: [
      'I hold zero desire to dominate anyone else in life',
      'Mastering my own temper and mind is the truest crown',
    ],
  },
  {
    title: 'बदलाव का असर',
    titleEnglish: 'Rare Energy',
    linesHindi: [
      'हमारी मौजूदगी ही काफी है माहौल बदलने के लिए',
      'हमें दिखावे के लिए ज़्यादा बोलने की ज़रूरत नहीं पड़ती',
    ],
    linesHinglish: [
      'Hamaari maujoodgi hi kaafi hai maahaul badalne ke liye',
      'Humein dikhawe ke liye zyada bolne ki zaroorat nahin padti',
    ],
    linesEnglish: [
      'My presence alone shifts the energy of the entire table',
      'I never have to overtalk simply to be noticed',
    ],
  },
  {
    title: 'इज्ज़त से समझौता नहीं',
    titleEnglish: 'Dignity Above All',
    linesHindi: [
      'दोस्ती हो या मोहब्बत, सब कुछ दिल से निभाते हैं हम',
      'पर बात आत्मसम्मान पर आए तो पल में किनारा कर लेते हैं',
    ],
    linesHinglish: [
      'Dosti ho ya mohabbat, sab kuch dil se nibhaate hain hum',
      'Par baat aatmasammaan par aaye to pal mein kinaara kar lete hain',
    ],
    linesEnglish: [
      'Friendship or love, I give everything wholeheartedly',
      'The second self-respect gets tested, I walk away cleanly',
    ],
  },
  {
    title: 'ख़ुद की पहचान',
    titleEnglish: 'Unmistakable Identity',
    linesHindi: [
      'हम किसी की परछाईं बनकर जीना पसंद नहीं करते',
      'अपना सूरज खुद बनकर चमकना हमारी पुरानी आदत है',
    ],
    linesHinglish: [
      'Hum kisi ki parchhaai bankar jeena pasand nahin karte',
      'Apna sooraj khud bankar chamakna hamaari purani aadat hai',
    ],
    linesEnglish: [
      'Standing inside anybody elses shadow never suited me',
      'Burning bright like my own sun has always been my way',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'मुँहतोड़ शांत जवाब',
    titleEnglish: 'Quiet Comeback',
    linesHindi: [
      'पीठ पीछे बोलने वालों से क्या उलझना बेकार में',
      'जो सामने आने से डरते हों, वो हमारे लायक ही नहीं',
    ],
    linesHinglish: [
      'Peeth peeche bolne waalon se kya ulajhna bekaar mein',
      'Jo saamne aane se darte hon, wo hamaare laayak hi nahin',
    ],
    linesEnglish: [
      'Why bother sparing energy on whispers behind my back',
      'Anyone too scared to speak face to face sits far below notice',
    ],
  },
  {
    title: 'कड़क स्वाभिमान',
    titleEnglish: 'Fierce Self-Respect',
    linesHindi: [
      'झुकी हुई गर्दन से मिली जीत हमें कभी रास न आई',
      'हम हार भी जाएं तो सिर उठाकर मैदान छोड़ते हैं',
    ],
    linesHinglish: [
      'Jhuki hui gardan se mili jeet humein kabhi raas na aayi',
      'Hum haar bhi jaayein to sir uthaakar maidaan chhodte hain',
    ],
    linesEnglish: [
      'A trophy handed to a bowed head never appealed to me',
      'Even in loss, I walk off the field with my chin held high',
    ],
  },
  {
    title: 'तोल-मोल के बात',
    titleEnglish: 'Measured Words',
    linesHindi: [
      'हर सवाल पर बोलना ज़रूरी नहीं समझते हम यार',
      'कम बोलते हैं पर जब बोलते हैं तो असर गहरा होता है',
    ],
    linesHinglish: [
      'Har sawaal par bolna zaroori nahin samajhte hum yaar',
      'Kam bolte hain par jab bolte hain to asar gehra hota hai',
    ],
    linesEnglish: [
      'I see no need to weigh in on every noisy debate',
      'I speak seldom, yet every sentence leaves a mark',
    ],
  },
  {
    title: 'अंदाज़ का जादू',
    titleEnglish: 'Effortless Aura',
    linesHindi: [
      'हमारी सादगी भी लोगों को भारी पड़ जाती है अक्सर',
      'क्योंकि दिखावे से ज़्यादा दम हमारे किरदार में है',
    ],
    linesHinglish: [
      'Hamaari saadgi bhi logon ko bhaari pad jaati hai aksar',
      'Kyunki dikhawe se zyada dam hamaare kirdaar mein hai',
    ],
    linesEnglish: [
      'Even my plain simplicity intimidates louder crowds',
      'Because real weight lives inside character, never flash',
    ],
  },
  {
    title: 'सब्र की हद',
    titleEnglish: 'Limit of Patience',
    linesHindi: [
      'जब तक बर्दाश्त करते हैं तब तक बहुत शांत रहते हैं',
      'हद पार होते ही फिर हमारा पुराना अंदाज़ याद दिलाते हैं',
    ],
    linesHinglish: [
      'Jab tak bardaasht karte hain tab tak bahut shaant rehte hain',
      'Had paar hote hi phir hamaara purana andaaz yaad dilaate hain',
    ],
    linesEnglish: [
      'As long as patience holds, I remain calm as still water',
      'Cross the final line, and you meet my sharpest side instantly',
    ],
  },
  {
    title: 'ताक़त का शांत रूप',
    titleEnglish: 'Quiet Power',
    linesHindi: [
      'गरजने वाले बादल अक्सर बिना बरसे निकल जाते हैं',
      'हम शांत रहकर भी मौसम बदलने का हुनर रखते हैं',
    ],
    linesHinglish: [
      'Garajne waale baadal aksar bina barse nikal jaate hain',
      'Hum shaant rehkar bhi mausam badalne ka hunar rakhte hain',
    ],
    linesEnglish: [
      'Loud thunderclouds often pass overhead without a single drop',
      'Moving quietly, I still carry power to change the weather',
    ],
  },
  {
    title: 'भीड़ से ऊपर सोच',
    titleEnglish: 'Above Average Noise',
    linesHindi: [
      'छोटी-छोटी बातों पर उलझने की फितरत नहीं है हमारी',
      'हमारी नज़रें हमेशा बड़े खेल और बड़ी जीत पर रहती हैं',
    ],
    linesHinglish: [
      'Chhoti-chhoti baaton par ulajhne ki fitrat nahin hai hamaari',
      'Hamaari nazrein hamesha bade khel aur badi jeet par rehti hain',
    ],
    linesEnglish: [
      'Getting tangled in petty drama is never in my blood',
      'My sights stay locked onto bigger games and higher wins',
    ],
  },
  {
    title: 'दो टूक जवाब',
    titleEnglish: 'Crystal Clear Stand',
    linesHindi: [
      'हम साफ़ दिल के लोग हैं, घुमाकर बात नहीं करते',
      'पसंद आए तो साथ चलो, वरना रास्ता खुद नाप लो',
    ],
    linesHinglish: [
      'Hum saaf dil ke log hain, ghumaakar baat nahin karte',
      'Pasand aaye to saath chalo, warna raasta khud naap lo',
    ],
    linesEnglish: [
      'I am straightforward by nature—zero mind games played here',
      'Walk beside me with honesty, or step freely down another road',
    ],
  },
  {
    title: 'अकेले डटे रहने का जज़्बा',
    titleEnglish: 'Fearless Standing Solo',
    linesHindi: [
      'जो इंसान अकेले खड़े होने से नहीं डरता कभी',
      'दुनिया की कोई भी ताक़त उसे झुका नहीं सकती',
    ],
    linesHinglish: [
      'Jo insaan akele khade hone se nahin darta kabhi',
      'Duniya ki koi bhi taaqat use jhuka nahin sakti',
    ],
    linesEnglish: [
      'Anyone who never flinches at standing completely alone',
      'Cannot be bent by any pressure this world brings',
    ],
  },
  {
    title: 'लहजे में दम',
    titleEnglish: 'Weight in Presence',
    linesHindi: [
      'महफ़िल चाहे जितनी बड़ी हो, अपनी जगह बना ही लेते हैं',
      'हमारी मौजूदगी ही हमारे परिचय के लिए काफी होती है',
    ],
    linesHinglish: [
      'Mehfil chaahe jitni badi ho, apni jagah bana hi lete hain',
      'Hamaari maujoodgi hi hamaare parichay ke liye kaafi hoti hai',
    ],
    linesEnglish: [
      'No matter how packed the hall gets, I carve out my space',
      'My presence alone introduces everything about me',
    ],
  },
  {
    title: 'चेहरे पर आत्मविश्वास',
    titleEnglish: 'Confidence Unfazed',
    linesHindi: [
      'आँखों में चमक और चेहरे पर बेख़ौफ़ मुस्कान रखते हैं',
      'हालात चाहे जैसे हों, हम अपना हौसला जवान रखते हैं',
    ],
    linesHinglish: [
      'Aankhon mein chamak aur chehre par bekhauf muskaan rakhte hain',
      'Haalaat chaahe jaise hon, hum apna hausla jawaan rakhte hain',
    ],
    linesEnglish: [
      'Bright resolve in my eyes and a fearless smile on my lips',
      'Whatever season rolls in, I keep my spirit untamed',
    ],
  },
  {
    title: 'सोच में आज़ादी',
    titleEnglish: 'Untamed Mind',
    linesHindi: [
      'किसी के हिसाब से बदल जाऊँ, इतना सस्ता नहीं हूँ मैं',
      'वक़्त के साथ और निखरता जा रहा हूँ, वही काफी है',
    ],
    linesHinglish: [
      'Kisi ke hisaab se badal jaaoon, itna sasta nahin hoon main',
      'Waqt ke saath aur nikharta ja raha hoon, wahi kaafi hai',
    ],
    linesEnglish: [
      'I am not cheap clay molded to fit everyone elses mood',
      'Only growing sharper and stronger with every passing year',
    ],
  },
  {
    title: 'जीत के बाद सादगी',
    titleEnglish: 'Humble Strength',
    linesHindi: [
      'जमीन पर पाँव और आसमान पर निगाहें रखते हैं हम',
      'जीतकर शोर नहीं मचाते, बस अगली मंज़िल चुनते हैं हम',
    ],
    linesHinglish: [
      'Zameen par paanv aur aasmaan par nigaahein rakhte hain hum',
      'Jeetkar shor nahin machaate, bas agli manzil chunte hain hum',
    ],
    linesEnglish: [
      'Feet planted solidly on earth, eyes fixed on open skies',
      'After every win I skip the bragging and aim for the next summit',
    ],
  },
  {
    title: 'खुद के आलोचक',
    titleEnglish: 'My Own Benchmark',
    linesHindi: [
      'मुझे हराने के लिए किसी दुश्मन की ज़रूरत नहीं',
      'मैं खुद अपने पिछले रिकॉर्ड तोड़ने में लगा रहता हूँ',
    ],
    linesHinglish: [
      'Mujhe haraane ke liye kisi dushman ki zaroorat nahin',
      'Main khud apne pichhle record todne mein laga rehta hoon',
    ],
    linesEnglish: [
      'No rival out there can challenge me harder than I do',
      'Every morning I wake up aiming to beat my own past best',
    ],
  },
  {
    title: 'वफ़ा और कड़क मिज़ाज',
    titleEnglish: 'Loyal Yet Firm',
    linesHindi: [
      'अच्छों के साथ पानी की तरह घुल मिल जाते हैं हम',
      'पर गलत बात पर पत्थर से भी ज़्यादा सख़्त हो जाते हैं',
    ],
    linesHinglish: [
      'Acchon ke saath paani ki tarah ghul mil jaate hain hum',
      'Par galat baat par patthar se bhi zyada sakht ho jaate hain',
    ],
    linesEnglish: [
      'With genuine souls I flow gently like cool clear water',
      'Against disrespect I turn harder than solid stone',
    ],
  },
  {
    title: 'दबदबा मेहनत का',
    titleEnglish: 'Earned Respect',
    linesHindi: [
      'डर पैदा करके इज़्ज़त लेने का दौर पुराना हो गया',
      'अब तो अपने हुनर से लोगों के दिल जीते जाते हैं',
    ],
    linesHinglish: [
      'Dar paida karke izzat lene ka daur purana ho gaya',
      'Ab to apne hunar se logon ke dil jeete jaate hain',
    ],
    linesEnglish: [
      'Demanding respect through loud intimidation is outdated',
      'Today you earn admiration strictly through undeniable craft',
    ],
  },
  {
    title: 'भीड़ से अलग पहचान',
    titleEnglish: 'Standing Unmistakable',
    linesHindi: [
      'हर किसी को खुश रखने का ठेका नहीं लिया हमने',
      'अपने उसूलों पर जीते हैं, तभी तो सबसे अलग दिखते हैं',
    ],
    linesHinglish: [
      'Har kisi ko khush rakhne ka theka nahin liya humne',
      'Apne usoolon par jeete hain, tabhi to sabse alag dikhte hain',
    ],
    linesEnglish: [
      'I never signed up to keep every single crowd satisfied',
      'Living by clear principles is why I stand apart naturally',
    ],
  },
  {
    title: 'हौसले की दहाड़',
    titleEnglish: 'Roar Inside Calm',
    linesHindi: [
      'शेर कभी घास खाने के लिए जंगल से समझौता नहीं करता',
      'भूखा रह लेगा पर अपना स्वाभिमान कभी नहीं बेचता',
    ],
    linesHinglish: [
      'Sher kabhi ghaas khaane ke liye jangal se samjhauta nahin karta',
      'Bhookha reh lega par apna swaabhimaan kabhi nahin bechta',
    ],
    linesEnglish: [
      'A lion never compromises its nature just to fit in easy',
      'True pride would rather endure hunger than sell its dignity',
    ],
  },
  {
    title: 'नए जमाने का अंदाज़',
    titleEnglish: 'Modern Swag',
    linesHindi: [
      'न फ़ालतू का ड्रामा, न किसी से बेवजह की जलन',
      'बस अपना काम, अपने यार और अपनी रॉयल धुन',
    ],
    linesHinglish: [
      'Na faaltu ka drama, na kisi se bewajah ki jalan',
      'Bas apna kaam, apne yaar aur apni royal dhun',
    ],
    linesEnglish: [
      'Zero pointless drama, zero petty jealousy toward anyone',
      'Just focused work, real friends, and my own steady rhythm',
    ],
  },
  {
    title: 'बदला नहीं, बदलाव',
    titleEnglish: 'Growth Over Revenge',
    linesHindi: [
      'हम बदला लेने में अपना कीमती वक़्त बर्बाद नहीं करते',
      'इतना आगे बढ़ जाते हैं कि सामने वाले खुद पछताएँ',
    ],
    linesHinglish: [
      'Hum badla lene mein apna keemti waqt barbaad nahin karte',
      'Itna aage badh jaate hain ki saamne waale khud pachhtaayein',
    ],
    linesEnglish: [
      'I never waste priceless hours plotting small revenge',
      'I simply level up so high that regret hits them on its own',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'ख़ुद का बादशाह',
    titleEnglish: 'King of My World',
    linesHindi: [
      'ताज सिर पर न भी दिखे तो कोई फ़र्क़ नहीं पड़ता',
      'क्योंकि अपनी सल्तनत के नियम हम खुद बनाते हैं',
    ],
    linesHinglish: [
      'Taaj sir par na bhi dikhe to koi farq nahin padta',
      'Kyunki apni saltanat ke niyam hum khud banaate hain',
    ],
    linesEnglish: [
      'Wearing no visible gold crown makes zero difference',
      'I rule my own peace and draft every law of my world',
    ],
  },
  {
    title: 'नज़र का असर',
    titleEnglish: 'Magnetic Focus',
    linesHindi: [
      'जिनकी नज़रों में इरादा और चाल में ठहराव होता है',
      'दुनिया खुद उनके लिए रास्ता खाली कर देती है',
    ],
    linesHinglish: [
      'Jinki nazron mein iraada aur chaal mein thehraav hota hai',
      'Duniya khud unke liye raasta khaali kar deti hai',
    ],
    linesEnglish: [
      'When calm purpose burns in your eyes and poise fills your walk',
      'Even crowded streets naturally part to make way',
    ],
  },
  {
    title: 'बेफ़िक्र चाल',
    titleEnglish: 'Unbothered Stride',
    linesHindi: [
      'कहने वालों की ज़ुबान पर ताला कोई नहीं लगा सकता',
      'इसलिए हम मुस्कुराकर अपनी ही रफ़्तार से चलते हैं',
    ],
    linesHinglish: [
      'Kehne waalon ki zubaan par taala koi nahin laga sakta',
      'Isliye hum muskurakar apni hi raftaar se chalte hain',
    ],
    linesEnglish: [
      'Nobody can lock up idle tongues whispering around town',
      'So I simply smile and keep moving at my own clean pace',
    ],
  },
  {
    title: 'गहराई का असर',
    titleEnglish: 'Depth Over Flash',
    linesHindi: [
      'सस्ती चीज़ें चमकती ज़रूर हैं दो दिन के लिए',
      'पर असली खज़ाना हमेशा गहरे समंदर में ही मिलता है',
    ],
    linesHinglish: [
      'Sasti cheezein chamakti zaroor hain do din ke liye',
      'Par asli khazaana hamesha gehre samandar mein hi milta hai',
    ],
    linesEnglish: [
      'Cheap trinkets always glitter loudest for two passing days',
      'Rare pearls remain quietly anchored deep beneath the surface',
    ],
  },
  {
    title: 'ठोकर से ताक़त',
    titleEnglish: 'Sharpened by Blows',
    linesHindi: [
      'जिन्होंने गिराने की कोशिश की थी हमें मोड़ पर',
      'आज वही हमारे उठने की कहानी सुनाते फिरते हैं',
    ],
    linesHinglish: [
      'Jinhone giraane ki koshish ki thi humein mod par',
      'Aaj wahi hamaare uthne ki kahaani sunaate phirte hain',
    ],
    linesEnglish: [
      'The very people who tried tripping me around the corner',
      'Now spend evenings retelling the story of my comeback',
    ],
  },
  {
    title: 'ख़ास होना आम बात नहीं',
    titleEnglish: 'Rare by Nature',
    linesHindi: [
      'हर किसी से घुलना-मिलना ज़रूरी नहीं समझते हम',
      'तभी तो हमारी दोस्ती की कीमत आज भी ऊँची है',
    ],
    linesHinglish: [
      'Har kisi se ghulna-milna zaroori nahin samajhte hum',
      'Tabhi to hamaari dosti ki keemat aaj bhi oonchi hai',
    ],
    linesEnglish: [
      'I never chase blending effortlessly into every table',
      'That selective circle is why my loyalty still holds high value',
    ],
  },
  {
    title: 'निडर फ़ैसले',
    titleEnglish: 'Bold Decisions',
    linesHindi: [
      'आधा-अधूरा खेल खेलना हमें कभी पसंद नहीं आया',
      'जहाँ कदम रखा है, वहाँ पूरी शिद्दत से खेला है',
    ],
    linesHinglish: [
      'Aadha-adhoora khel khelna humein kabhi pasand nahin aaya',
      'Jahaan kadam rakha hai, wahaan poori shiddat se khela hai',
    ],
    linesEnglish: [
      'Playing halfway with cold feet was never my style',
      'Wherever I step onto the field, I bring everything I own',
    ],
  },
  {
    title: 'बिन बोले रौब',
    titleEnglish: 'Silent Respect',
    linesHindi: [
      'ताक़त दिखाने के लिए भारी आवाज़ नहीं चाहिए दोस्त',
      'बस एक शांत मुस्कान ही सामने वाले को सोचने पर मजबूर कर दे',
    ],
    linesHinglish: [
      'Taaqat dikhane ke liye bhaari aawaaz nahin chahiye dost',
      'Bas ek shaant muskaan hi saamne waale ko sochne par majboor kar de',
    ],
    linesEnglish: [
      'Power never relies on booming volume to make its point',
      'One calm smile leaves anyone across from you thinking twice',
    ],
  },
  {
    title: 'सच्चाई की धार',
    titleEnglish: 'Edge of Truth',
    linesHindi: [
      'चापलूसी करके आगे बढ़ना हमारी फितरत में नहीं',
      'सीधे रास्ते चलकर जो मिलेगा, उसी में सान के साथ रहेंगे',
    ],
    linesHinglish: [
      'Chaaploosi karke aage badhna hamaari fitrat mein nahin',
      'Seedhe raaste chalkar jo milega, usi mein shaan ke saath rahenge',
    ],
    linesEnglish: [
      'Climbing forward through fake flattery is not in my blood',
      'Whatever I earn on straight ground, I wear with pure pride',
    ],
  },
  {
    title: 'ग़म छुपाने का हुनर',
    titleEnglish: 'Unbroken Exterior',
    linesHindi: [
      'दिल में चाहे जितने तूफ़ान चल रहे हों अंदर',
      'बाहर से हमारी चाल हमेशा सधी और बेख़ौफ़ दिखती है',
    ],
    linesHinglish: [
      'Dil mein chaahe jitne toofaan chal rahe hon andar',
      'Baahar se hamaari chaal hamesha sadhi aur bekhauf dikhti hai',
    ],
    linesEnglish: [
      'No matter how fierce storms roar silently inside my chest',
      'My step stays composed, calm, and fearless before the world',
    ],
  },
  {
    title: 'क़दमों की गूँज',
    titleEnglish: 'Steady Footsteps',
    linesHindi: [
      'रास्ते खुद बन जाते हैं जब हौसले पहाड़ जैसे हों',
      'हम मंज़िल से पहले कभी हार मानना नहीं जानते',
    ],
    linesHinglish: [
      'Raaste khud ban jaate hain jab hausle pahaad jaise hon',
      'Hum manzil se pehle kabhi haar maanna nahin jaante',
    ],
    linesEnglish: [
      'Pathways open naturally before mountain-tall grit',
      'Quitting short of the finish line simply is not in my dictionary',
    ],
  },
  {
    title: 'वफ़ादारी की शर्त',
    titleEnglish: 'Loyalty First',
    linesHindi: [
      'धोखा देने वालों को दोबारा मौका नहीं देते हम',
      'क्योंकि साँप को दूध पिलाने का शौक़ नहीं रखते हम',
    ],
    linesHinglish: [
      'Dhokha dene waalon ko dobaara mauqa nahin dete hum',
      'Kyunki galat logon par bharosa dobaara nahin karte hum',
    ],
    linesEnglish: [
      'Once trust is broken intentionally, the door locks shut',
      'I never hand a second blade to hands that already cut once',
    ],
  },
  {
    title: 'अंदाज़ पुराना, सोच नई',
    titleEnglish: 'Classic Roots, Sharp Vision',
    linesHindi: [
      'संस्कार पुराने हैं मेरे, पर इरादे नए ज़माने के हैं',
      'सबको साथ लेकर चलना और खुद सबसे आगे रहना पसंद है',
    ],
    linesHinglish: [
      'Sanskaar purane hain mere, par iraade naye zamaane ke hain',
      'Sabko saath lekar chalna aur khud sabse aage rehna pasand hai',
    ],
    linesEnglish: [
      'My values remain timeless while my vision runs ahead of time',
      'Lifting real ones beside me while leading calmly from the front',
    ],
  },
  {
    title: 'साफ़ इनकार',
    titleEnglish: 'Saying No Cleanly',
    linesHindi: [
      'हर बात में हाँ मिलाकर झूठा अपनापन नहीं दिखाते',
      'जहाँ ग़लत लगे वहाँ साफ ना कहने का जिगर रखते हैं',
    ],
    linesHinglish: [
      'Har baat mein haan milaakar jhootha apnapan nahin dikhate',
      'Jahaan galat lage wahaan saaf na kehne ka jigar rakhte hain',
    ],
    linesEnglish: [
      'I never nod along softly just to stay popular',
      'Wherever lines turn wrong, I hold the spine to say plain no',
    ],
  },
  {
    title: 'अकेला सफ़र, ऊँची उड़ान',
    titleEnglish: 'High Solo Flight',
    linesHindi: [
      'सहारा ढूँढने वाले अक्सर बीच राह में ठहर जाते हैं',
      'हम अपने कंधों पर विश्वास रखकर आगे निकल जाते हैं',
    ],
    linesHinglish: [
      'Sahaara dhoondhne waale aksar beech raah mein thehar jaate hain',
      'Hum apne kandhon par vishwaas rakhkar aage nikal jaate hain',
    ],
    linesEnglish: [
      'Those hunting for endless crutches stall halfway up the slope',
      'I trust my own shoulders and keep climbing past the mist',
    ],
  },
  {
    title: 'वक़्त की सलामी',
    titleEnglish: 'Earned Salute',
    linesHindi: [
      'इज़्ज़त मांगकर नहीं, अपने काम से कमाई जाती है',
      'जब नाम गूँजे तो लोग खुद खड़े होकर सलाम करते हैं',
    ],
    linesHinglish: [
      'Izzat maangkar nahin, apne kaam se kamaai jaati hai',
      'Jab naam goonje to log khud khade hokar salaam karte hain',
    ],
    linesEnglish: [
      'Respect is never begged for—it is earned silently by merit',
      'When your track record speaks, rooms stand tall on their own',
    ],
  },
  {
    title: 'शोर के पार सुकून',
    titleEnglish: 'Calm Mastery',
    linesHindi: [
      'सबको साबित करने की दौड़ से बाहर आ चुका हूँ मैं',
      'अब सिर्फ़ खुद से बेहतर बनने का नशा रहता है',
    ],
    linesHinglish: [
      'Sabko saabit karne ki daud se baahar aa chuka hoon main',
      'Ab sirf khud se behtar banne ka nasha rehta hai',
    ],
    linesEnglish: [
      'I stepped completely out of the race to impress spectators',
      'Now my only obsession is outgrowing who I was yesterday',
    ],
  },
  {
    title: 'जवाब देने का तरीका',
    titleEnglish: 'Classy Replies',
    linesHindi: [
      'हम पत्थर का जवाब गाली से नहीं देते कभी भी',
      'बस मुस्कुराकर अपनी मंज़िल की ऊँचाई बढ़ा देते हैं',
    ],
    linesHinglish: [
      'Hum patthar ka jawaab gaali se nahin dete kabhi bhi',
      'Bas muskurakar apni manzil ki oonchaai badha dete hain',
    ],
    linesEnglish: [
      'I never throw mud back when someone tosses stones my way',
      'I simply smile calmly and raise my altitude even higher',
    ],
  },
  {
    title: 'मज़बूत किरदार',
    titleEnglish: 'Unshaken Character',
    linesHindi: [
      'हवाएँ अपना रुख़ रोज़ बदल सकती हैं मौसम के साथ',
      'पर चट्टान जैसे लोग अपनी जगह पर अडिग रहते हैं',
    ],
    linesHinglish: [
      'Hawaayein apna rukh roz badal sakti hain mausam ke saath',
      'Par chattan jaise log apni jagah par adig rehte hain',
    ],
    linesEnglish: [
      'Winds shift directions daily with every passing forecast',
      'Rock-solid minds remain grounded exactly where they stand',
    ],
  },
  {
    title: 'कमाल की सादगी',
    titleEnglish: 'Effortless Edge',
    linesHindi: [
      'न शो-ऑफ़ का शौक़ है, न बड़ी बातों का दिखावा',
      'बस एक नज़र ही काफी है हमारी शख्सियत समझने को',
    ],
    linesHinglish: [
      'Na show-off ka shauq hai, na badi baaton ka dikhawa',
      'Bas ek nazar hi kaafi hai hamaari shakhsiyat samajhne ko',
    ],
    linesEnglish: [
      'Zero flashy bragging, zero loud performance needed here',
      'One steady glance is all it takes to read my presence',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'फ़ैसला अटल है',
    titleEnglish: 'Decision Carved Firm',
    linesHindi: [
      'सोचने में वक़्त ज़रूर लेता हूँ मैं हर कदम से पहले',
      'पर एक बार ठान लूँ तो फिर किसी की नहीं सुनता',
    ],
    linesHinglish: [
      'Sochne mein waqt zaroor leta hoon main har kadam se pehle',
      'Par ek baar thaan loon to phir kisi ki nahin sunta',
    ],
    linesEnglish: [
      'I take calm, thoughtful time before committing to a step',
      'Once my mind locks in, zero outside noise can turn me back',
    ],
  },
  {
    title: 'आलोचकों के लिए शुक्रिया',
    titleEnglish: 'Grateful to Critics',
    linesHindi: [
      'जिन लोगों ने कहा था कि तुमसे नहीं हो पाएगा यह',
      'उन्हीं की बातों ने मेरे इरादों में आग भर दी',
    ],
    linesHinglish: [
      'Jin logon ne kaha tha ki tumse nahin ho paayega yah',
      'Unhi ki baaton ne mere iraadon mein aag bhar di',
    ],
    linesEnglish: [
      'Everyone who smugly told me I could never pull it off',
      'Accidently lit the brightest fire inside my resolve',
    ],
  },
  {
    title: 'अपनी ही गति',
    titleEnglish: 'Running Own Race',
    linesHindi: [
      'किसी की रफ़्तार देखकर मैं घबराता नहीं हूँ आजकल',
      'क्योंकि मेरी रेस सिर्फ़ मेरे खुद के साथ चल रही है',
    ],
    linesHinglish: [
      'Kisi ki raftaar dekhkar main ghabrata nahin hoon aajkal',
      'Kyunki meri race sirf mere khud ke saath chal rahi hai',
    ],
    linesEnglish: [
      'Watching anyone elses sprint no longer phases me at all',
      'My only true race is beating my own yesterday',
    ],
  },
  {
    title: 'शान से जीना',
    titleEnglish: 'Living on Honor',
    linesHindi: [
      'भीख में मिली तारीफ़ से कहीं ज़्यादा प्यारी है मुझे',
      'अपनी मेहनत के दम पर कमाई गई दो पल की शांति',
    ],
    linesHinglish: [
      'Bheekh mein mili taareef se kahin zyada pyaari hai mujhe',
      'Apni mehnat ke dam par kamaai gayi do pal ki shaanti',
    ],
    linesEnglish: [
      'Far sweeter than hollow praise begged from crowds',
      'Is two minutes of proud peace earned by my own hands',
    ],
  },
  {
    title: 'बिना डर के कदम',
    titleEnglish: 'Fearless Stride',
    linesHindi: [
      'आगे खाई हो या पहाड़, कदम पीछे नहीं हटाते हम',
      'जहाँ रास्ता बंद दिखे, वहीं नया पुल बना देते हैं हम',
    ],
    linesHinglish: [
      'Aage khaai ho ya pahaad, kadam peeche nahin hataate hum',
      'Jahaan raasta band dikhe, wahin naya pul bana dete hain hum',
    ],
    linesEnglish: [
      'Cliff or mountain ahead, my boots never step backward',
      'Where roads end, I build a sturdy bridge across',
    ],
  },
  {
    title: 'ख़ुद का मान',
    titleEnglish: 'Respecting My Worth',
    linesHindi: [
      'जहाँ मेरी गैरहाज़िरी से किसी को फ़र्क़ न पड़ता हो',
      'वहाँ अपनी मौजूदगी सस्ती करना मुझे मंजूर नहीं',
    ],
    linesHinglish: [
      'Jahaan meri gairhaaziri se kisi ko farq na padta ho',
      'Wahaan apni maujoodgi sasti karna mujhe manzoor nahin',
    ],
    linesEnglish: [
      'Anywhere my absence makes zero difference to the room',
      'I refuse to cheapen my presence by hanging around',
    ],
  },
  {
    title: 'दबंग सोच, नर्म दिल',
    titleEnglish: 'Bold Mind, Kind Heart',
    linesHindi: [
      'मासूम लोगों के लिए आज भी फूल जैसा नर्म हूँ मैं',
      'बस चालाक लोगों के सामने मेरा अंदाज़ बदल जाता है',
    ],
    linesHinglish: [
      'Maasoom logon ke liye aaj bhi phool jaisa narm hoon main',
      'Bas chaalaak logon ke saamne hamaara andaaz badal jaata hai',
    ],
    linesEnglish: [
      'Toward genuine, kind souls my heart stays soft as petals',
      'Only scheming minds ever witness my colder side',
    ],
  },
  {
    title: 'असली पहचान',
    titleEnglish: 'True Calling Card',
    linesHindi: [
      'सरनेम या शोर से नहीं, अपने काम से जाना जाता हूँ',
      'मैं वो कहानी हूँ जो हर मोड़ पर नई मिसाल बनाती है',
    ],
    linesHinglish: [
      'Surname ya shor se nahin, apne kaam se jaana jaata hoon',
      'Main wo kahaani hoon jo har mod par nayi misaal banaati hai',
    ],
    linesEnglish: [
      'Known not by borrowed names or noise, but pure output',
      'I am writing a story that sets a new benchmark every bend',
    ],
  },
  {
    title: 'हार को भी सलाम',
    titleEnglish: 'Grace Even in Defeat',
    linesHindi: [
      'जीत जाओ तो मुस्कान और हार जाओ तो सीख मिलती है',
      'हमारे जैसे खिलाड़ी के लिए हर खेल फायदे का सौदा है',
    ],
    linesHinglish: [
      'Jeet jaao to muskaan aur haar jaao to seekh milti hai',
      'Hamaare jaise khiladi ke liye har khel faayde ka sauda hai',
    ],
    linesEnglish: [
      'Win and I gain joy; stumble and I collect razor-sharp wisdom',
      'For players built like me, every match ends up a profit',
    ],
  },
  {
    title: 'सपनों की ज़िद',
    titleEnglish: 'Stubborn About Dreams',
    linesHindi: [
      'नसीब पर रोने की आदत बहुत पहले छोड़ दी मैंने',
      'अब जो चाहिए उसे छीनने का नहीं, कमाने का दम रखता हूँ',
    ],
    linesHinglish: [
      'Naseeb par rone ki aadat bahut pehle chhod di maine',
      'Ab jo chahiye use chheenne ka nahin, kamaane ka dam rakhta hoon',
    ],
    linesEnglish: [
      'I quit crying over unfair luck years ago',
      'Whatever I want now, I carry the grit to earn fair and square',
    ],
  },
  {
    title: 'भीड़ का हिस्सा नहीं',
    titleEnglish: 'One of One',
    linesHindi: [
      'सस्ते ट्रेंड के पीछे भागना मेरा मिज़ाज नहीं है',
      'हम खुद वो स्टाइल हैं जिसे लोग बाद में फॉलो करते हैं',
    ],
    linesHinglish: [
      'Saste trend ke peeche bhaagna mera mizaaj nahin hai',
      'Hum khud wo style hain jise log baad mein follow karte hain',
    ],
    linesEnglish: [
      'Chasing fleeting trends never fit my temperament',
      'I set my own pace that others end up copying months later',
    ],
  },
  {
    title: 'रौब किरदार का',
    titleEnglish: 'Power of Character',
    linesHindi: [
      'पैसे की गर्मी कुछ दिन की मेहमान होती है बाजार में',
      'असली दबदबा तो साफ नीयत और पक्की ज़ुबान का होता है',
    ],
    linesHinglish: [
      'Paise ki garmi kuch din ki mehmaan hoti hai baazaar mein',
      'Asli dabdaba to saaf neeyat aur pakki zubaan ka hota hai',
    ],
    linesEnglish: [
      'Showy money glow fades fast across the street',
      'Lasting respect belongs to pure intent and an unbreakable word',
    ],
  },
  {
    title: 'सुकून सबसे महंगा',
    titleEnglish: 'Peace Is Expensive',
    linesHindi: [
      'सुकून की कीमत आजकल हर किसी को समझ नहीं आती',
      'तभी तो हम फ़ालतू लोगों को ब्लॉक लिस्ट में सुला देते हैं',
    ],
    linesHinglish: [
      'Sukoon ki keemat aajkal har kisi ko samajh nahin aati',
      'Tabhi to hum faaltu logon ko block list mein sula dete hain',
    ],
    linesEnglish: [
      'Not everyone respects the priceless value of calm peace',
      'Which is why toxic noise earns a clean exit immediately',
    ],
  },
  {
    title: 'नज़र अंदाज़ करने की कला',
    titleEnglish: 'Art of Unbothered Exit',
    linesHindi: [
      'हर बकवास पर रिएक्ट करना वक़्त की बर्बादी लगती है',
      'एक हल्की स्माइल देकर निकल जाना मेरी सबसे बड़ी ताक़त है',
    ],
    linesHinglish: [
      'Har bakwaas par react karna waqt ki barbaadi lagti hai',
      'Ek halki smile dekar nikal jaana meri sabse badi taaqat hai',
    ],
    linesEnglish: [
      'Reacting to every petty bait wastes precious energy',
      'Smiling gently and walking right past is my superpower',
    ],
  },
  {
    title: 'तूफ़ान से पहले की ख़ामोशी',
    titleEnglish: 'Patient Strike',
    linesHindi: [
      'ख़ामोश बैठा हूँ तो यह मत समझना कि मैदान छोड़ दिया',
      'शेर दो कदम पीछे हटता है ताकि छलांग लंबी मार सके',
    ],
    linesHinglish: [
      'Khaamosh baitha hoon to yah mat samajhna ki maidaan chhod diya',
      'Sher do kadam peeche hat-ta hai taaki chhalaang lambi maar sake',
    ],
    linesEnglish: [
      'Never mistake my quiet pause for stepping off the field',
      'Even a lion steps back two paces before its boldest leap',
    ],
  },
  {
    title: 'कड़क दोस्ती',
    titleEnglish: 'Solid Brotherhood',
    linesHindi: [
      'दुश्मन भी जानते हैं कि हमारे यार कितने कमाल हैं',
      'अकेला भी पड़ जाऊँ तो चार की जगह अकेले सँभाल लूँ',
    ],
    linesHinglish: [
      'Dushman bhi jaante hain ki hamaare yaar kitne kamaal hain',
      'Akela bhi pad jaaoon to chaar ki jagah akele sanbhaal loon',
    ],
    linesEnglish: [
      'Even rivals recognize how loyal my small circle stands',
      'And even solo, I handle heavy odds without blinking',
    ],
  },
  {
    title: 'बिन झिझक सच',
    titleEnglish: 'Unfiltered Honesty',
    linesHindi: [
      'मीठा झूठ बोलकर दिल रखने की कला नहीं आती मुझे',
      'कड़वा सच बोलकर जो बचे, बस वही अपने लोग हैं',
    ],
    linesHinglish: [
      'Meetha jhooth bolkar dil rakhne ki kala nahin aati mujhe',
      'Kadwa sach bolkar jo bache, bas wahi apne log hain',
    ],
    linesEnglish: [
      'I lack the talent for spinning sweet comforting lies',
      'Whoever stays close through blunt honesty is family',
    ],
  },
  {
    title: 'तेवर जन्मजात',
    titleEnglish: 'Natural Edge',
    linesHindi: [
      'स्टाइल और एटीट्यूड किसी कोर्स से नहीं सीखे जाते',
      'ये तो इंसान के चलने, बोलने और सोचने में बसते हैं',
    ],
    linesHinglish: [
      'Style aur attitude kisi course se nahin seekhe jaate',
      'Ye to insaan ke chalne, bolne aur sochne mein baste hain',
    ],
    linesEnglish: [
      'Real poise and attitude cannot be downloaded from any course',
      'They live naturally inside how you walk, speak, and think',
    ],
  },
  {
    title: 'आसमान से बातें',
    titleEnglish: 'Aiming Beyond Limits',
    linesHindi: [
      'छोटी सोच वाले लोग हमेशा नीचे देखने की सलाह देते हैं',
      'हमारी आदत सिर्फ़ बादलों से ऊपर उड़ने की रही है',
    ],
    linesHinglish: [
      'Chhoti soch waale log hamesha neeche dekhne ki salaah dete hain',
      'Hamaari aadat sirf baadalon se upar udne ki rahi hai',
    ],
    linesEnglish: [
      'Small minds constantly advise playing safe near the ground',
      'My habit has always been flying well above the storm clouds',
    ],
  },
  {
    title: 'अपनी ही कहानी',
    titleEnglish: 'My Own Script',
    linesHindi: [
      'किस्मत की कॉपी किसी और से उधार नहीं मांगी हमने',
      'अच्छी हो या कठिन, हर लाइन अपने हाथ से लिखी है',
    ],
    linesHinglish: [
      'Kismat ki copy kisi aur se udhaar nahin maangi humne',
      'Acchi ho ya kathin, har line apne haath se likhi hai',
    ],
    linesEnglish: [
      'I never borrowed a single page of someone elses script',
      'Smooth or rough, every line of my story comes from my hands',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'चमक अपनी मेहनत की',
    titleEnglish: 'Self-Earned Glow',
    linesHindi: [
      'उधार की रोशनी से ज़्यादा देर उजाला नहीं रहता यार',
      'अपने दम पर जलाया दीया हमेशा शान से चमकता है',
    ],
    linesHinglish: [
      'Udhaar ki roshni se zyada der ujala nahin rehta yaar',
      'Apne dam par jalaya diya hamesha shaan se chamakta hai',
    ],
    linesEnglish: [
      'Borrowed spotlights fade the second the room clears',
      'A lamp fueled by your own grit burns proudly forever',
    ],
  },
  {
    title: 'सीधा और सटीक',
    titleEnglish: 'Sharp and Direct',
    linesHindi: [
      'न किसी के आगे झुकते हैं, न किसी को नीचा दिखाते हैं',
      'बस अपने स्तर पर रहकर दुनिया को मुस्कान दिखाते हैं',
    ],
    linesHinglish: [
      'Na kisi ke aage jhukte hain, na kisi ko neecha dikhate hain',
      'Bas apne star par rehkar duniya ko muskaan dikhate hain',
    ],
    linesEnglish: [
      'Never bowing before arrogance, never belittling anyone below',
      'I stand tall on my own ground and greet life smiling',
    ],
  },
  {
    title: 'भरोसे का बाज़ार',
    titleEnglish: 'Rare Loyalty',
    linesHindi: [
      'आजकल सस्ते वादे हर नुक्कड़ पर मिल जाते हैं दोस्त',
      'पर हमारे जैसा साथ निभाने वाला मुश्किल से मिलता है',
    ],
    linesHinglish: [
      'Aajkal saste waade har nukkad par mil jaate hain dost',
      'Par hamaare jaisa saath nibhaane wala mushkil se milta hai',
    ],
    linesEnglish: [
      'Cheap promises get tossed around on every street corner today',
      'Finding loyalty steady as mine stays genuinely rare',
    ],
  },
  {
    title: 'रुतबा बरक़रार',
    titleEnglish: 'Aura Intact',
    linesHindi: [
      'वक़्त बदला, लोग बदले और कई चेहरे बेनक़ाब हुए',
      'पर हमारा वजूद और ठहराव आज भी वैसा ही क़ायम है',
    ],
    linesHinglish: [
      'Waqt badla, log badle aur kai chehre benaqaab hue',
      'Par hamaara wajood aur thehraav aaj bhi waisa hi qaayam hai',
    ],
    linesEnglish: [
      'Seasons turned, people shifted, and countless masks slipped off',
      'Yet my composure and presence stand just as rock-solid',
    ],
  },
  {
    title: 'तपिश से निखार',
    titleEnglish: 'Tempered Steel',
    linesHindi: [
      'जिन्होंने हमें आग में झोंका था ख़त्म करने के इरादे से',
      'उन्हें क्या पता था कि हम सोना बनकर बाहर निकलेंगे',
    ],
    linesHinglish: [
      'Jinhone humein aag mein jhonka tha khatam karne ke iraade se',
      'Unhein kya pata tha ki hum sona bankar baahar niklenge',
    ],
    linesEnglish: [
      'Those who tossed me into the fire expecting ashes',
      'Never imagined I would step back out refined like pure gold',
    ],
  },
  {
    title: 'ख़ुद का फ़ैन',
    titleEnglish: 'Backing Myself First',
    linesHindi: [
      'दुनिया की भीड़ में अपने सबसे बड़े समर्थक हम खुद हैं',
      'इसीलिए कोई साथ छोड़े तब भी हौसला कम नहीं होता',
    ],
    linesHinglish: [
      'Duniya ki bheed mein apne sabse bade samarthak hum khud hain',
      'Isiliye koi saath chhode tab bhi hausla kam nahin hota',
    ],
    linesEnglish: [
      'Amidst the whole world, I am my own loudest supporter',
      'So even when others walk out, my nerve never drops an inch',
    ],
  },
  {
    title: 'ग़मों से ऊपर मुस्कान',
    titleEnglish: 'Unbreakable Smile',
    linesHindi: [
      'तकलीफ़ें भी थक जाती हैं हमारा चेहरा देखकर यारो',
      'हर बार ये बंदा मुस्कुराकर नया रास्ता निकाल लेता है',
    ],
    linesHinglish: [
      'Takleefein bhi thak jaati hain hamaara chehra dekhkar yaaro',
      'Har baar ye banda muskurakar naya raasta nikaal leta hai',
    ],
    linesEnglish: [
      'Even stubborn setbacks grow tired watching my face',
      'Every single time I smile calmly and build a fresh way out',
    ],
  },
  {
    title: 'ख़ामोश शतरंज',
    titleEnglish: 'Playing Three Moves Ahead',
    linesHindi: [
      'शोर मचाकर चालें बताने वाले अक्सर मात खा जाते हैं',
      'हम चुपचाप खेलते हैं और सीधा आख़िरी बाज़ी जीतते हैं',
    ],
    linesHinglish: [
      'Shor machaakar chaalein bataane waale aksar maat khaa jaate hain',
      'Hum chupchaap khelte hain aur seedha aakhiri baazi jeette hain',
    ],
    linesEnglish: [
      'Players who brag every move out loud get cornered early',
      'I move quietly and close out the final checkmate clean',
    ],
  },
  {
    title: 'सीमाएँ तय रखना',
    titleEnglish: 'Respecting Limits',
    linesHindi: [
      'मज़ाक़ भी सिर्फ़ उन्हीं के साथ अच्छा लगता है हमें',
      'जो अपनी हद और हमारी इज़्ज़त दोनों पहचानते हों',
    ],
    linesHinglish: [
      'Mazaak bhi sirf unhi ke saath accha lagta hai humein',
      'Jo apni had aur hamaari izzat dono pehchaante hon',
    ],
    linesEnglish: [
      'Playful banter stays welcome only with people who know',
      'Both where their boundary stops and where my honor stands',
    ],
  },
  {
    title: 'काम बोलता है',
    titleEnglish: 'Let Results Talk',
    linesHindi: [
      'बड़ी-बड़ी डींगें हाँकने की आदत नहीं है हमारी',
      'हमारी मेहनत का शोर एक दिन खुद सुनाई देगा सबको',
    ],
    linesHinglish: [
      'Badi-badi deengein haankne ki aadat nahin hai hamaari',
      'Hamaari mehnat ka shor ek din khud sunai dega sabko',
    ],
    linesEnglish: [
      'Spinning tall bragging tales has never been my habit',
      'One day the echo of my work will speak loud enough for all',
    ],
  },
  {
    title: 'नज़र ऊँची रखो',
    titleEnglish: 'High Standards',
    linesHindi: [
      'सस्ते विकल्पों पर कभी मन नहीं टिका हमारा',
      'या तो सबसे बेहतरीन चुनते हैं या फिर अकेले चलते हैं',
    ],
    linesHinglish: [
      'Saste vikalpon par kabhi man nahin tika hamaara',
      'Ya to sabse behtareen chunte hain ya phir akele chalte hain',
    ],
    linesEnglish: [
      'Settling for halfhearted bargains never tempted me once',
      'Either I build with the finest, or I walk proudly solo',
    ],
  },
  {
    title: 'बेबाक ज़िंदगी',
    titleEnglish: 'Unapologetic Life',
    linesHindi: [
      'ज़िंदगी छोटी है किसी की नफ़रत ढोने के लिए दोस्त',
      'अपनी मस्ती में जियो और दुनिया को देखने दो',
    ],
    linesHinglish: [
      'Zindagi chhoti hai kisi ki nafrat dhone ke liye dost',
      'Apni masti mein jiyo aur duniya ko dekhne do',
    ],
    linesEnglish: [
      'Life is way too brief to haul around anybody elses bitterness',
      'Live boldly in your own joy and let the world watch',
    ],
  },
  {
    title: 'ताक़तवर चुप्पी',
    titleEnglish: 'Power in Restraint',
    linesHindi: [
      'जवाब तो हर बात का है मेरे पास सटीक बिल्कुल',
      'बस हर किसी के स्तर तक नीचे उतरना सही नहीं लगता',
    ],
    linesHinglish: [
      'Jawaab to har baat ka hai mere paas sateek bilkul',
      'Bas har kisi ke star tak neeche utarna sahi nahin lagta',
    ],
    linesEnglish: [
      'I hold a razor-sharp answer ready for every remark thrown',
      'I simply refuse to climb down to petty levels to deliver it',
    ],
  },
  {
    title: 'असली चमक बरकरार',
    titleEnglish: 'Never Fading',
    linesHindi: [
      'धूल जमा होने से सोने की कीमत घटती नहीं कभी',
      'वक़्त आने पर हर कोई फिर से क़द्र करने लगता है',
    ],
    linesHinglish: [
      'Dhool jama hone se sone ki keemat ghat-ti nahin kabhi',
      'Waqt aane par har koi phir se qadr karne lagta hai',
    ],
    linesEnglish: [
      'Dust resting briefly on gold never drops its real worth',
      'When light hits again, every eye recognizes pure value',
    ],
  },
  {
    title: 'अपना स्टाइल, अपना नियम',
    titleEnglish: 'Unmatched Vibe',
    linesHindi: [
      'दुनिया की भीड़ में खो जाना हमारी फ़ितरत में नहीं',
      'हम जहाँ खड़े होते हैं, पहचान अलग ही चमकती है',
    ],
    linesHinglish: [
      'Duniya ki bheed mein kho jaana hamaari fitrat mein nahin',
      'Hum jahaan khade hote hain, pehchaan alag hi chamakti hai',
    ],
    linesEnglish: [
      'Blending invisibly into the pack was never in my blood',
      'Wherever I stand, my identity shines effortlessly distinct',
    ],
  },
  {
    title: 'दिल बड़ा, दिमाग़ शांत',
    titleEnglish: 'Big Heart, Cool Head',
    linesHindi: [
      'छोटी सोच वाले लोग हमेशा गलतियाँ तलाशते रहते हैं',
      'और हम मुस्कुराकर नए अवसर बनाते रहते हैं',
    ],
    linesHinglish: [
      'Chhoti soch waale log hamesha galtiyan talaashte rehte hain',
      'Aur hum muskurakar naye avsar banaate rehte hain',
    ],
    linesEnglish: [
      'Petty critics stay busy hunting tiny flaws all day',
      'Meanwhile I keep smiling and building brand new doors',
    ],
  },
  {
    title: 'भविष्य की तैयारी',
    titleEnglish: 'Focused on Next',
    linesHindi: [
      'कल किसने क्या कहा, इस किताब को बंद कर दिया है',
      'अब सिर्फ़ आने वाले कल को शानदार बनाने पर ध्यान है',
    ],
    linesHinglish: [
      'Kal kisne kya kaha, is kitaab ko band kar diya hai',
      'Ab sirf aane waale kal ko shaandaar banaane par dhyaan hai',
    ],
    linesEnglish: [
      'I shut the binder on who whispered what yesterday',
      'All my focus now sits squarely on building a bold tomorrow',
    ],
  },
  {
    title: 'निडर राही का तेवर',
    titleEnglish: 'Mark of Nerve',
    linesHindi: [
      'खतरा देखकर रास्ता बदलने वाले कायर होते हैं',
      'हम तो सामने से टकराकर रास्ता साफ़ करने वाले हैं',
    ],
    linesHinglish: [
      'Khatra dekhkar raasta badalne waale kaayar hote hain',
      'Hum to saamne se takraakar raasta saaf karne waale hain',
    ],
    linesEnglish: [
      'Only timid hearts switch lanes at the first hint of risk',
      'I meet steep hurdles head-on and clear the highway clean',
    ],
  },
  {
    title: 'अनसुना तेवर',
    titleEnglish: 'Quiet Swagger',
    linesHindi: [
      'मेरी शक्ल और शांत लहजे पर मत जाना कभी दोस्त',
      'ज़रूरत पड़ने पर बाज़ी पलटने में एक सेकंड लगता है',
    ],
    linesHinglish: [
      'Meri shakl aur shaant lehje par mat jaana kabhi dost',
      'Zaroorat padne par baazi palatne mein ek second lagta hai',
    ],
    linesEnglish: [
      'Never judge by my relaxed face or quiet tone, friend',
      'When it counts, flipping the entire board takes one second',
    ],
  },
  {
    title: 'शिखर पर नज़र',
    titleEnglish: 'Built for the Summit',
    linesHindi: [
      'नीचे की भीड़ में शोर हमेशा ज़्यादा होता है यारो',
      'शिखर पर पहुँचने वालों के हिस्से शांत आसमान आता है',
    ],
    linesHinglish: [
      'Neeche ki bheed mein shor hamesha zyada hota hai yaaro',
      'Shikhar par pahunchne waalon ke hisse shaant aasmaan aata hai',
    ],
    linesEnglish: [
      'Down at the base, the crowd always yells loudest',
      'Up near the summit, quiet sky belongs exclusively to climbers',
    ],
  },
  // Block 7 (121-128)
  {
    title: 'ख़ुद पर नाज़',
    titleEnglish: 'Proud of My Grind',
    linesHindi: [
      'आज जहाँ खड़ा हूँ, वहां तक पहुँचने की कीमत जानता हूँ',
      'इसलिए किसी के सस्ते ताने दिल पर नहीं लेता मैं',
    ],
    linesHinglish: [
      'Aaj jahaan khada hoon, wahaan tak pahunchne ki keemat jaanta hoon',
      'Isliye kisi ke saste taane dil par nahin leta main',
    ],
    linesEnglish: [
      'I know every hard step it cost to stand where I do today',
      'So cheap remarks from spectators never touch me once',
    ],
  },
  {
    title: 'खेल अपना, नियम अपने',
    titleEnglish: 'Own Game, Own Rules',
    linesHindi: [
      'जब खेल अपना हो तो हार-जीत की चिंता नहीं होती',
      'आख़िरी दांव हमेशा हमारे ही पक्ष में गिरता है',
    ],
    linesHinglish: [
      'Jab khel apna ho to haar-jeet ki chinta nahin hoti',
      'Aakhiri daanv hamesha hamaare hi paksh mein girta hai',
    ],
    linesEnglish: [
      'When you master your own craft, luck loses its grip',
      'The decisive final turn always lands squarely in your favor',
    ],
  },
  {
    title: 'सच्ची दोस्ती, साफ़ दुश्मनी',
    titleEnglish: 'No Grey Masks',
    linesHindi: [
      'बीच के दोहरे रिश्ते हमें कभी पसंद नहीं आए',
      'या तो दिल से अपने रहो, या फिर बिल्कुल अजनबी',
    ],
    linesHinglish: [
      'Beech ke dohre rishte humein kabhi pasand nahin aaye',
      'Ya to dil se apne raho, ya phir bilkul ajnabi',
    ],
    linesEnglish: [
      'Lukewarm, two-faced ties never appealed to my heart',
      'Either stand by me genuinely, or stay a polite stranger',
    ],
  },
  {
    title: 'अटूट आत्मविश्वास',
    titleEnglish: 'Zero Doubt Left',
    linesHindi: [
      'अब किसी के जाने से डर नहीं लगता इस दिल को',
      'जो मेरे साथ रुकने लायक होगा, वो खुद टिक जाएगा',
    ],
    linesHinglish: [
      'Ab kisi ke jaane se dar nahin lagta is dil ko',
      'Jo mere saath rukne laayak hoga, wo khud tik jaayega',
    ],
    linesEnglish: [
      'My heart no longer flinches when temporary folks walk out',
      'Whoever belongs beside me will stand steady on their own',
    ],
  },
  {
    title: 'ज़िंदादिल अंदाज़',
    titleEnglish: 'Fierce & Alive',
    linesHindi: [
      'मुसीबत को भी मुस्कुराकर चाय पिला देते हैं हम',
      'इतनी आसानी से हार मानने वाली मिट्टी के नहीं हैं हम',
    ],
    linesHinglish: [
      'Museebat ko bhi muskurakar chai pila dete hain hum',
      'Itni aasaani se haar maanne waali mitti ke nahin hain hum',
    ],
    linesEnglish: [
      'I welcome even tough trouble with a smile and warm tea',
      'I am simply not made of stuff that folds easily',
    ],
  },
  {
    title: 'सोच का बड़ा स्तर',
    titleEnglish: 'Elevated Standard',
    linesHindi: [
      'अपना समय बचाने का सबसे अच्छा तरीक़ा ढूँढ लिया है',
      'अब बेमतलब की बातों पर सिर्फ़ मुस्कान और अलविदा देता हूँ',
    ],
    linesHinglish: [
      'Apna samay bachaane ka sabse accha tareeqa dhoondh liya hai',
      'Ab bematlab ki baaton par sirf muskaan aur alvida deta hoon',
    ],
    linesEnglish: [
      'I found the cleanest trick to protect every golden hour',
      'I answer pointless drama with one smile and a clean exit',
    ],
  },
  {
    title: 'मज़बूत इरादों का ताज',
    titleEnglish: 'Crown of Steel Resolve',
    linesHindi: [
      'जिस दिन तुमने खुद पर संदेह करना बंद कर दिया',
      'उसी दिन पूरी दुनिया तुम्हारा रौब मानने लगेगी',
    ],
    linesHinglish: [
      'Jis din tumne khud par sandeh karna band kar diya',
      'Usi din poori duniya tumhaara raub maanne lagegi',
    ],
    linesEnglish: [
      'The exact day you stop second-guessing your own step',
      'Is the day the whole room starts honoring your stature',
    ],
  },
  {
    title: 'बेमिसाल सफ़र',
    titleEnglish: 'Unstoppable Era',
    linesHindi: [
      'पुराने पन्नों पर अटकने वालों में से नहीं हूँ मैं',
      'मेरी असली कहानी तो अभी शुरू हुई है मेरे दोस्त',
    ],
    linesHinglish: [
      'Purane pannon par atakne waalon mein se nahin hoon main',
      'Meri asli kahaani to abhi shuru hui hai mere dost',
    ],
    linesEnglish: [
      'I am not the type to stay stuck rereading old pages',
      'My real, defining chapter has only just begun, friend',
    ],
  },
];

export const UNIQUE_ATTITUDE_128 = buildUniqueShayaris(
  'attitude',
  'Attitude Shayari (एटीट्यूड शायरी)',
  '😎',
  73,
  ATTITUDE_ENTRIES
);
