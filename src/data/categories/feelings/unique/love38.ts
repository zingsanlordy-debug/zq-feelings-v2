import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const LOVE_ENTRIES: UniqueShayariEntry[] = [
  {
    title: 'सुबह की पहली किरण सा इश्क़',
    titleEnglish: 'Love Like the First Ray of Morning',
    linesHindi: [
      'सुबह की पहली धूप जैसे आँगन को छू जाती है',
      'तेरी एक मुस्कान मेरे पूरे दिन को सँवार जाती है',
    ],
    linesHinglish: [
      'Subah ki pehli dhoop jaise aangan ko chhoo jaati hai',
      'Teri ek muskaan mere poore din ko sanwaar jaati hai',
    ],
    linesEnglish: [
      'Just as the first morning sunlight touches the courtyard',
      'A single smile of yours brightens my entire day',
    ],
  },
  {
    title: 'बिना बोले दिल की बात समझना',
    titleEnglish: 'Understanding the Heart Without Words',
    linesHindi: [
      'लफ़्ज़ों की ज़रूरत ही नहीं पड़ती हमारे दरमियाँ',
      'तेरी आँखें मेरी ख़ामोशी को भी पूरा पढ़ लेती हैं',
    ],
    linesHinglish: [
      'Lafzon ki zaroorat hi nahin padti hamaare darmiyaan',
      'Teri aankhein meri khaamoshi ko bhi poora padh leti hain',
    ],
    linesEnglish: [
      'Words are never even needed between the two of us',
      'Your eyes read my silence from start to finish',
    ],
  },
  {
    title: 'चाय की भाप और तेरी बातें',
    titleEnglish: 'Warm Tea and Your Conversations',
    linesHindi: [
      'बारिश की बूँदें और हाथ में गरम चाय का कप हो',
      'सामने तुम बैठे रहो तो फिर वक़्त की किसे ख़बर हो',
    ],
    linesHinglish: [
      'Baarish ki boondein aur haath mein garam chai ka cup ho',
      'Saamne tum baithe raho to phir waqt ki kise khabar ho',
    ],
    linesEnglish: [
      'Raindrops outside and a warm cup of tea in hand',
      'When you sit across from me, who cares about passing time',
    ],
  },
  {
    title: 'दिल की देहलीज़ पर तेरा नाम',
    titleEnglish: 'Your Name on the Threshold of My Heart',
    linesHindi: [
      'दिल की देहलीज़ पर सिर्फ़ तेरी आहट का इंतज़ार है',
      'तू पास रहे या दूर, मेरी हर धड़कन को तुझसे प्यार है',
    ],
    linesHinglish: [
      'Dil ki dehleez par sirf teri aahat ka intezaar hai',
      'Tu paas rahe ya door, meri har dhadkan ko tujhse pyaar hai',
    ],
    linesEnglish: [
      'At the threshold of my heart, I await only your footsteps',
      'Whether near or far, every beat of my heart loves only you',
    ],
  },
  {
    title: 'साँसों में बसी तेरी ख़ुशबू',
    titleEnglish: 'Your Fragrance Settled in My Breaths',
    linesHindi: [
      'बंद आँखों से भी तेरा चेहरा साफ़ दिखाई देता है',
      'मेरी हर साँस में तेरे होने का सुकून सुनाई देता है',
    ],
    linesHinglish: [
      'Band aankhon se bhi tera chehra saaf dikhai deta hai',
      'Meri har saans mein tere hone ka sukoon sunai deta hai',
    ],
    linesEnglish: [
      'Even with closed eyes, I can see your face so clearly',
      'In every breath I take, I feel the calm of your presence',
    ],
  },
  {
    title: 'हाथ थामकर चलने का वादा',
    titleEnglish: 'Promise to Walk Hand in Hand',
    linesHindi: [
      'रास्ते चाहे कितने भी टेढ़े-मेढ़े क्यों न हों ज़िंदगी के',
      'तेरा हाथ मेरे हाथ में हो तो हर सफ़र आसान लगता है',
    ],
    linesHinglish: [
      'Raaste chaahe kitne bhi tedhe-medhe kyun na hon zindagi ke',
      'Tera haath mere haath mein ho to har safar aasaan lagta hai',
    ],
    linesEnglish: [
      'No matter how winding the roads of life may become',
      'With your hand in mine, every journey feels effortless',
    ],
  },
  {
    title: 'दुआओं में सिर्फ़ तेरा ज़िक्र',
    titleEnglish: 'Only Your Mention in My Prayers',
    linesHindi: [
      'जब भी मंदिर या दरगाह में सिर झुकाया है मैंने',
      'अपने से पहले तेरी सलामती का हाथ उठाया है मैंने',
    ],
    linesHinglish: [
      'Jab bhi mandir ya dargah mein sir jhukaya hai maine',
      'Apne se pehle teri salaamati ka haath uthaya hai maine',
    ],
    linesEnglish: [
      'Whenever I have bowed my head in prayer',
      'Before asking for myself, I have always wished for your well-being',
    ],
  },
  {
    title: 'तेरी हँसी से रोशन मेरा जहाँ',
    titleEnglish: 'My World Lit by Your Laughter',
    linesHindi: [
      'तुम हँस देते हो तो घर में उजाला उतर आता है',
      'मेरा रूठा हुआ दिन भी पल भर में सँवर जाता है',
    ],
    linesHinglish: [
      'Tum hans dete ho to ghar mein ujala utar aata hai',
      'Mera rootha hua din bhi pal bhar mein sanwar jaata hai',
    ],
    linesEnglish: [
      'Whenever you laugh, sunlight fills the entire home',
      'Even my gloomy day heals within a single moment',
    ],
  },
  {
    title: 'मोहब्बत का सादा सा हिसाब',
    titleEnglish: 'Simple Arithmetic of True Love',
    linesHindi: [
      'ना महँगे तोहफ़े चाहिए, ना बड़े-बड़े वादों की कतार',
      'बस शाम को पूछ लेना दिन कैसा रहा, यही है सच्चा प्यार',
    ],
    linesHinglish: [
      'Na mehnge tohfe chahiye, na bade-bade waadon ki kataar',
      'Bas shaam ko poochh lena din kaisa raha, yahi hai saccha pyaar',
    ],
    linesEnglish: [
      'I need no costly gifts, nor a long queue of grand promises',
      'Just asking how my day went each evening—that is true love',
    ],
  },
  {
    title: 'नज़रें झुकने का प्यारा अंदाज़',
    titleEnglish: 'Sweet Charm of Lowered Eyes',
    linesHindi: [
      'हया से जब तुम अपनी पलकें नीचे झुकाते हो',
      'कसम से, बिना कुछ कहे भी दिल की धड़कन बढ़ाते हो',
    ],
    linesHinglish: [
      'Haya se jab tum apni palkein neeche jhukate ho',
      'Kasam se, bina kuch kahe bhi dil ki dhadkan badhate ho',
    ],
    linesEnglish: [
      'When you shyly lower your eyelashes',
      'I swear, even without speaking, you make my heart race',
    ],
  },
  {
    title: 'भीड़ में भी सिर्फ़ तुम पर नज़र',
    titleEnglish: 'Eyes Only on You in a Crowd',
    linesHindi: [
      'हज़ारों चेहरों के बीच भी निगाहें तुम्हें ही ढूँढती हैं',
      'जैसे भटकी हुई कश्ती हर लहर में किनारा खोजती है',
    ],
    linesHinglish: [
      'Hazaaron chehron ke beech bhi nigaahein tumhein hi dhoondhti hain',
      'Jaise bhatki hui kashti har lehar mein kinara khojti hai',
    ],
    linesEnglish: [
      'Even among thousands of faces, my eyes look only for you',
      'Just as a drifting boat searches every wave for the shore',
    ],
  },
  {
    title: 'दिल में बसा एक सुकून भरा घर',
    titleEnglish: 'A Peaceful Home Inside the Heart',
    linesHindi: [
      'थक कर जब दुनिया के शोर से लौट आता हूँ मैं',
      'तेरी बाहों में ही अपना असली घर पाता हूँ मैं',
    ],
    linesHinglish: [
      'Thak kar jab duniya ke shor se laut aata hoon main',
      'Teri baahon mein hi apna asli ghar paata hoon main',
    ],
    linesEnglish: [
      'When I return exhausted from the noise of the world',
      'It is in your arms that I find my true home',
    ],
  },
  {
    title: 'वक़्त के साथ गहरा होता रिश्ता',
    titleEnglish: 'A Bond Deepening With Time',
    linesHindi: [
      'साल गुज़रते गए पर तेरे लिए चाहत कम ना हुई',
      'हर नई सुबह तुझसे मोहब्बत थोड़ी और बढ़ गई',
    ],
    linesHinglish: [
      'Saal guzarte gaye par tere liye chahat kam na hui',
      'Har nayi subah tujhse mohabbat thodi aur badh gayi',
    ],
    linesEnglish: [
      'Years passed by, yet my fondness for you never faded',
      'Each new morning, my love for you grew a little deeper',
    ],
  },
  {
    title: 'अनकही ख़्वाहिशों का जवाब तुम हो',
    titleEnglish: 'You Are the Answer to Unspoken Wishes',
    linesHindi: [
      'जिन सपनों को लफ़्ज़ों में ढालना भी मुश्किल था कभी',
      'तुम्हारे आने से वो हर ख़्वाब हक़ीक़त बन गया अभी',
    ],
    linesHinglish: [
      'Jin sapnon ko lafzon mein dhaalna bhi mushkil tha kabhi',
      'Tumhaare aane se wo har khwaab haqeeqat ban gaya abhi',
    ],
    linesEnglish: [
      'Dreams that were once too delicate to put into words',
      'Have all turned into reality with your arrival in my life',
    ],
  },
  {
    title: 'मेरी हर कहानी का खूबसूरत हिस्सा',
    titleEnglish: 'The Loveliest Chapter of My Story',
    linesHindi: [
      'ज़िंदगी की किताब के पन्ने चाहे जितने सादे रहे हों',
      'जिस पन्ने पर तुम आए, वो सबसे रंगीन बन गया',
    ],
    linesHinglish: [
      'Zindagi ki kitaab ke panne chaahe jitne saade rahe hon',
      'Jis panne par tum aaye, wo sabse rangeen ban gaya',
    ],
    linesEnglish: [
      'No matter how plain the earlier pages of my life were',
      'The page on which you appeared became the most vibrant',
    ],
  },
  {
    title: 'चुपचाप ख़याल रखने की आदत',
    titleEnglish: 'Quiet Habit of Caring',
    linesHindi: [
      'तेरा बिना जताए मेरी छोटी-छोटी फ़िक्र कर लेना',
      'मेरे दिल को रोज़ तुझसे नया इश्क़ करवा देता है',
    ],
    linesHinglish: [
      'Tera bina jataaye meri chhoti-chhoti fikr kar lena',
      'Mere dil ko roz tujhse naya ishq karwa deta hai',
    ],
    linesEnglish: [
      'The way you quietly look after my smallest needs',
      'Makes my heart fall in love with you anew every day',
    ],
  },
  {
    title: 'तुम्हारे काँधे पर सुकून की नींद',
    titleEnglish: 'Peaceful Rest on Your Shoulder',
    linesHindi: [
      'दुनिया की सारी थकान एक पल में उतर जाती है',
      'जब तेरे काँधे पर सिर रखकर आँख लग जाती है',
    ],
    linesHinglish: [
      'Duniya ki saari thakaan ek pal mein utar jaati hai',
      'Jab tere kaandhe par sir rakhkar aankh lag jaati hai',
    ],
    linesEnglish: [
      'All the weariness of the world melts away in an instant',
      'Whenever I rest my head on your shoulder and drift to sleep',
    ],
  },
  {
    title: 'चाँद से ज़्यादा प्यारा तेरा चेहरा',
    titleEnglish: 'Your Face Sweeter Than the Moon',
    linesHindi: [
      'छत पर निकलकर चाँद को देखने की आदत छूट गई',
      'जब से तेरी तस्वीर फोन के वॉलपेपर पर लग गई',
    ],
    linesHinglish: [
      'Chhat par nikalkar chaand ko dekhne ki aadat chhoot gayi',
      'Jab se teri tasveer phone ke wallpaper par lag gayi',
    ],
    linesEnglish: [
      'I lost the habit of stepping onto the terrace to admire the moon',
      'Ever since your photograph became the wallpaper on my phone',
    ],
  },
  {
    title: 'रूह से जुड़ा अनमोल बंधन',
    titleEnglish: 'Precious Bond Tied to the Soul',
    linesHindi: [
      'जिस्म की दूरी से ये रिश्ता कभी फीका नहीं पड़ता',
      'जब दो रूहें एक हो जाएँ तो फ़ासला भी झुक जाता है',
    ],
    linesHinglish: [
      'Jism ki doori se ye rishta kabhi feeka nahin padta',
      'Jab do roohein ek ho jaayein to faasla bhi jhuk jaata hai',
    ],
    linesEnglish: [
      'Physical distance never dims a bond like ours',
      'When two souls unite, even miles bend before them',
    ],
  },
  {
    title: 'मीठी सी तकरार का मज़ा',
    titleEnglish: 'Joy of Sweet Little Quarrels',
    linesHindi: [
      'छोटी बात पर रूठना और फिर हँसकर गले लग जाना',
      'यही तो हमारे रिश्ते की सबसे प्यारी निशानी है',
    ],
    linesHinglish: [
      'Chhoti baat par roothna aur phir hanskar gale lag jaana',
      'Yahi to hamaare rishte ki sabse pyaari nishaani hai',
    ],
    linesEnglish: [
      'Getting upset over tiny things and then hugging with a smile',
      'That is the sweetest hallmark of our relationship',
    ],
  },
  {
    title: 'आवाज़ में छुपा जादू',
    titleEnglish: 'Magic Hidden in Your Voice',
    linesHindi: [
      'सारा दिन उदास रहने के बाद भी दिल खिल उठता है',
      'जब फोन के उस पार से तेरा प्यार भरा हैलो सुनाई देता है',
    ],
    linesHinglish: [
      'Saara din udaas rehne ke baad bhi dil khil uthta hai',
      'Jab phone ke us paar se tera pyaar bhara hello sunai deta hai',
    ],
    linesEnglish: [
      'Even after staying gloomy the entire day, my heart blooms',
      'The moment I hear your affectionate hello across the phone',
    ],
  },
  {
    title: 'तेरे संग हर मौसम सुहाना',
    titleEnglish: 'Every Season Lovely With You',
    linesHindi: [
      'तेज़ धूप हो या कड़कड़ाती सर्दी की शाम हो',
      'तू साथ हो तो हर मौसम सावन जैसा लगता है',
    ],
    linesHinglish: [
      'Tez dhoop ho ya kadkadati sardi ki shaam ho',
      'Tu saath ho to har mausam saawan jaisa lagta hai',
    ],
    linesEnglish: [
      'Whether it is harsh summer heat or a freezing winter dusk',
      'With you beside me, every season feels like spring',
    ],
  },
  {
    title: 'सच्ची मोहब्बत का इज़हार',
    titleEnglish: 'Confession of Pure Love',
    linesHindi: [
      'मुझे चाँद-तारे तोड़कर लाने का दावा करना नहीं आता',
      'बस उम्र भर तेरा साथ निभाने का हुनर बख़ूबी आता है',
    ],
    linesHinglish: [
      'Mujhe chaand-taare todkar laane ka daava karna nahin aata',
      'Bas umar bhar tera saath nibhane ka hunar bakhoobi aata hai',
    ],
    linesEnglish: [
      'I do not know how to boast of plucking the moon and stars',
      'I only know the art of standing faithfully by you for life',
    ],
  },
  {
    title: 'माथे पर प्यार भरा बोसा',
    titleEnglish: 'Affectionate Kiss on the Forehead',
    linesHindi: [
      'हज़ारों लफ़्ज़ों से भी ज़्यादा भरोसा मिल जाता है',
      'जब तू प्यार से मेरे माथे को चूमकर मुस्कुराता है',
    ],
    linesHinglish: [
      'Hazaaron lafzon se bhi zyada bharosa mil jaata hai',
      'Jab tu pyaar se mere maathe ko choomkar muskurata hai',
    ],
    linesEnglish: [
      'I gain more reassurance than a thousand words could give',
      'When you gently kiss my forehead and smile',
    ],
  },
  {
    title: 'पहली मुलाक़ात की ताज़गी',
    titleEnglish: 'Freshness of the First Meeting',
    linesHindi: [
      'आज भी उस पहली मुलाक़ात का हर पल याद है मुझे',
      'जब नज़रें मिली थीं और वक़्त वहीं थम सा गया था',
    ],
    linesHinglish: [
      'Aaj bhi us pehli mulaaqaat ka har pal yaad hai mujhe',
      'Jab nazrein mili thin aur waqt wahin tham sa gaya tha',
    ],
    linesEnglish: [
      'I still remember every instant of that very first meeting',
      'When our eyes met and time seemed to stand completely still',
    ],
  },
  {
    title: 'ज़िंदगी का सबसे खूबसूरत इत्तेफ़ाक़',
    titleEnglish: 'Lifes Most Beautiful Coincidence',
    linesHindi: [
      'अजनबी बनकर टकराए थे हम किसी मोड़ पर कभी',
      'आज एक-दूसरे की साँसों की ज़रूरत बन गए हैं',
    ],
    linesHinglish: [
      'Ajnabi bankar takraaye the hum kisi mod par kabhi',
      'Aaj ek-doosre ki saanson ki zaroorat ban gaye hain',
    ],
    linesEnglish: [
      'Once we crossed paths as strangers at a bend in the road',
      'Today we have become essential to each others very breath',
    ],
  },
  {
    title: 'उम्र भर के लिए एक ही ख़्याल',
    titleEnglish: 'One Thought for a Lifetime',
    linesHindi: [
      'बुढ़ापे की झुर्रियों में भी हाथ थामे रहेंगे हम',
      'जवानी का ये इश्क़ आख़िरी साँस तक जवान रखेंगे हम',
    ],
    linesHinglish: [
      'Budhaape ki jhurriyon mein bhi haath thaame rahenge hum',
      'Jawaani ka ye ishq aakhiri saans tak jawaan rakhenge hum',
    ],
    linesEnglish: [
      'Even amidst the wrinkles of old age, we will hold each others hands',
      'We shall keep this youthful love alive until our final breath',
    ],
  },
  {
    title: 'मेरे हर अल्फ़ाज़ में तू ही तू',
    titleEnglish: 'Only You in Every Word I Write',
    linesHindi: [
      'कागज़ पर जब भी कुछ खूबसूरत लिखने बैठता हूँ मैं',
      'कलम खुद-ब-खुद तेरा नाम पन्नों पर उतार देती है',
    ],
    linesHinglish: [
      'Kaagaz par jab bhi kuch khoobsurat likhne baithta hoon main',
      'Kalam khud-ba-khud tera naam pannon par utaar deti hai',
    ],
    linesEnglish: [
      'Whenever I sit down to write something lovely on paper',
      'My pen naturally traces your name across the page',
    ],
  },
  {
    title: 'रंगों से भरी मेरी दुनिया',
    titleEnglish: 'My World Filled With Colors',
    linesHindi: [
      'तेरे आने से पहले ज़िंदगी सिर्फ़ दिन-रात का सफ़र थी',
      'तुमने आकर इसमें इंद्रधनुष के सारे रंग भर दिए',
    ],
    linesHinglish: [
      'Tere aane se pehle zindagi sirf din-raat ka safar thi',
      'Tumne aakar ismein indradhanush ke saare rang bhar diye',
    ],
    linesEnglish: [
      'Before you arrived, life was merely a passage of days and nights',
      'By coming into my life, you filled it with every color of the rainbow',
    ],
  },
  {
    title: 'सुकून का दूसरा नाम तुम हो',
    titleEnglish: 'You Are Another Name for Peace',
    linesHindi: [
      'दिल की बेचैनी जब हद से बढ़ने लगती है',
      'सिर्फ़ तुम्हें देखकर एक गहरी राहत मिल जाती है',
    ],
    linesHinglish: [
      'Dil ki bechaini jab had se badhne lagti hai',
      'Sirf tumhein dekhkar ek gehri raahat mil jaati hai',
    ],
    linesEnglish: [
      'Whenever the restlessness of my heart grows overwhelming',
      'Merely looking at you brings a deep, soothing calm',
    ],
  },
  {
    title: 'इश्क़ में सादगी की खूबसूरती',
    titleEnglish: 'Beauty of Simplicity in Love',
    linesHindi: [
      'दिखावे की मोहब्बत से कोसों दूर रहते हैं हम',
      'हम तो बस एक-दूसरे की आँखों में दुनिया देखते हैं',
    ],
    linesHinglish: [
      'Dikhawe ki mohabbat se koson door rehte hain hum',
      'Hum to bas ek-doosre ki aankhon mein duniya dekhte hain',
    ],
    linesEnglish: [
      'We stay miles away from showy, superficial romance',
      'We simply see our entire world reflected in each others eyes',
    ],
  },
  {
    title: 'तुम्हारे नाम से खिलता चेहरा',
    titleEnglish: 'A Face Glowing at Your Name',
    linesHindi: [
      'कोई मज़ाक़ में भी तेरा नाम ले दे मेरे सामने',
      'तो मेरे गालों पर शर्म की लाली खुद आ जाती है',
    ],
    linesHinglish: [
      'Koi mazaak mein bhi tera naam le de mere saamne',
      'To mere gaalon par sharm ki laali khud aa jaati hai',
    ],
    linesEnglish: [
      'Even if someone playfully mentions your name in front of me',
      'A gentle blush naturally blooms across my cheeks',
    ],
  },
  {
    title: 'सफ़र में हमसफ़र का साथ',
    titleEnglish: 'A Companion for Lifes Journey',
    linesHindi: [
      'मंज़िल की परवाह अब किसे रही है ऐ हमदम',
      'रास्ते में तेरा साथ ही मेरी सबसे बड़ी मंज़िल है',
    ],
    linesHinglish: [
      'Manzil ki parwaah ab kise rahi hai ae hamdam',
      'Raaste mein tera saath hi meri sabse badi manzil hai',
    ],
    linesEnglish: [
      'Who even worries about the destination anymore, my beloved',
      'Having you beside me along the road is my greatest destination',
    ],
  },
  {
    title: 'ख़ामोश रातों का मीठा एहसास',
    titleEnglish: 'Sweet Feeling of Quiet Nights',
    linesHindi: [
      'चाँदनी रात में जब हवा धीमे से गुज़रती है',
      'लगता है जैसे तू चुपके से मुझे गले लगा रहा है',
    ],
    linesHinglish: [
      'Chaandni raat mein jab hawa dheeme se guzarti hai',
      'Lagta hai jaise tu chupke se mujhe gale laga raha hai',
    ],
    linesEnglish: [
      'On a moonlit night when the breeze drifts softly past',
      'It feels as though you are quietly wrapping me in an embrace',
    ],
  },
  {
    title: 'मेरी हसरतों का आख़िरी ठिकाना',
    titleEnglish: 'Final Resting Place of My Longings',
    linesHindi: [
      'दिल की भटकती हुई सारी हसरतें शांत हो गईं',
      'जब तेरे प्यार की छत के नीचे पनाह मिल गई',
    ],
    linesHinglish: [
      'Dil ki bhatakti hui saari hasratein shaant ho gayin',
      'Jab tere pyaar ki chhat ke neeche panaah mil gayi',
    ],
    linesEnglish: [
      'All the wandering desires of my heart grew peaceful',
      'The day I found shelter beneath the roof of your love',
    ],
  },
  {
    title: 'हर जनम का प्यारा बंधन',
    titleEnglish: 'A Sweet Bond Beyond Lifetimes',
    linesHindi: [
      'अगर सच में सात जनम होते हैं इस दुनिया में',
      'तो हर बार दिल की पहली पसंद तुम ही रहोगे',
    ],
    linesHinglish: [
      'Agar sach mein saat janam hote hain is duniya mein',
      'To har baar dil ki pehli pasand tum hi rahoge',
    ],
    linesEnglish: [
      'If there truly are seven lifetimes in this world',
      'Every single time, you will remain my hearts first choice',
    ],
  },
  {
    title: 'तेरी ख़ुशी में मेरी ख़ुशी',
    titleEnglish: 'My Happiness Inside Yours',
    linesHindi: [
      'तेरी मुस्कान की कीमत मेरे लिए हर दौलत से बढ़कर है',
      'तू खुश रहे तो मुझे अपने ग़म भी छोटे लगते हैं',
    ],
    linesHinglish: [
      'Teri muskaan ki keemat mere liye har daulat se badhkar hai',
      'Tu khush rahe to mujhe apne gham bhi chhote lagte hain',
    ],
    linesEnglish: [
      'The value of your smile means more to me than any fortune',
      'As long as you stay happy, even my worries seem small',
    ],
  },
  {
    title: 'दिल से दिल तक का सीधा रास्ता',
    titleEnglish: 'Direct Path from Heart to Heart',
    linesHindi: [
      'दुनिया वाले रस्में और रिवाज देखते रह गए',
      'और हम दोनों ने चुपचाप दिल से दिल जोड़ लिया',
    ],
    linesHinglish: [
      'Duniya wale rasmein aur riwaaj dekhte reh gaye',
      'Aur hum dono ne chupchaap dil se dil jod liya',
    ],
    linesEnglish: [
      'The world kept busy watching customs and conventions',
      'While the two of us quietly joined heart to heart',
    ],
  },
];

export const UNIQUE_LOVE_38 = buildUniqueShayaris(
  'love',
  'Love Shayari (प्यार शायरी)',
  '💖',
  163,
  LOVE_ENTRIES
);
