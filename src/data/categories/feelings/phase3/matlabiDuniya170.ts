import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const MATLABI_DUNIYA_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'ज़रूरत के मौसम वाले चेहरे',
    titleEnglish: 'Faces Appearing Only When Needed',
    linesHindi: [
      'जब जेब में चमक और हाथ में ताक़त होती है तुम्हारे पास यार',
      'तो अनजान लोग भी दूर की रिश्तेदारी निकालकर मुस्कुराते हैं',
    ],
    linesHinglish: [
      'Jab jeb mein chamak aur haath mein taaqat hoti hai tumhaare paas yaar',
      'To anjaan log bhi door ki rishtedaari nikaalkar muskuraate hain',
    ],
    linesEnglish: [
      'When your pockets shine bright and favors sit handy in your palm',
      'Even distant strangers suddenly trace warm family ties with a grin',
    ],
  },
  {
    title: 'मीठे शब्दों के पीछे तराज़ू',
    titleEnglish: 'Invisible Scales Behind Sweet Words',
    linesHindi: [
      'हर मुस्कान को दिल की सच्चाई समझ बैठना मेरी पुरानी भूल थी',
      'यहाँ तो मीठे लहजे भी अक्सर अपना फायदा तौलकर बोले जाते हैं',
    ],
    linesHinglish: [
      'Har muskaan ko dil ki sachhaai samajh baithna meri puraani bhool thi',
      'Yahaan to meetha lehja bhi aksar apna faayda taulkar bola jaata hai',
    ],
    linesEnglish: [
      'Mistaking every warm grin for pure honesty was my younger habit',
      'Too often even honeyed phrases get weighed carefully on profit scales',
    ],
  },
  {
    title: 'कठिन वक़्त की असली छलनी',
    titleEnglish: 'Hard Times Acting as Pure Filter',
    linesHindi: [
      'शुक्रिया उन छोटे से बुरे दिनों का भी ज़िंदगी में आने के लिए',
      'उन्होंने एक झटके में असली और नकली चेहरों को अलग कर दिया',
    ],
    linesHinglish: [
      'Shukriya un chhote se bure dinon ka bhi zindagi mein aane ke liye',
      'Unhonne ek jhatke mein asli aur nakli chehron ko alag kar diya',
    ],
    linesEnglish: [
      'Oddly enough I thank those brief rough storms that rolled across my door',
      'In one clean sweep they sorted genuine hearts from painted masks',
    ],
  },
  {
    title: 'फ़ोन नंबर और बदलती प्राथमिकता',
    titleEnglish: 'Changing Priority Across Same Contact',
    linesHindi: [
      'कल तक हर छोटे काम के लिए दिन में दस बार कॉल आती थी जिनकी',
      'आज काम निकलते ही उनके पास हेलो कहने का समय भी कम पड़ गया',
    ],
    linesHinglish: [
      'Kal tak har chhote kaam ke liye din mein das baar call aati thi jinki',
      'Aaj kaam nikalte hi unke paas hello kehne ka samay bhi kam pad gaya',
    ],
    linesEnglish: [
      'Folks who rang ten times daily whenever they needed quick help',
      'Suddenly run terribly short on spare seconds once their errand ends',
    ],
  },
  {
    title: 'चाय से भी हल्के कुछ रिश्ते',
    titleEnglish: 'Fair-Weather Ties Light as Steam',
    linesHindi: [
      'जब तक काम आता रहा तब तक हम सबसे खास भाई कहलाते रहे यहाँ',
      'जैसे ही ना कहना सीखा, सारी पुरानी तारीफ़ें शिकायत में बदल गईं',
    ],
    linesHinglish: [
      'Jab tak kaam aata raha tab tak hum sabse khaas bhai kehlaate rahe yahaan',
      'Jaise hi na kehna seekha, saari puraani taareefein shikaayat mein badal gayin',
    ],
    linesEnglish: [
      'As long as you stayed endlessly handy, you wore the crown of favorite friend',
      'The first morning you politely said no, every praise flipped into blame',
    ],
  },
  {
    title: 'दोहरे चेहरों से शांत दूरी',
    titleEnglish: 'Quiet Distance From Double Faces',
    linesHindi: [
      'सामने बैठकर शहद घोलने वाले और पीठ पीछे चिंगारी लगाने वाले',
      'ऐसे चेहरों से लड़ना नहीं, बस चुपचाप किनारा कर लेना बेहतर है',
    ],
    linesHinglish: [
      'Saamne baithkar shehad gholne waale aur peeth peechhe chingaari lagaane waale',
      'Aise chehron se ladna nahin, bas chupchaap kinaara kar lena behtar hai',
    ],
    linesEnglish: [
      'People pouring sweet honey face-to-face while tossing sparks behind your back',
      'Never deserve loud fights—simply stepping calmly aside keeps peace whole',
    ],
  },
  {
    title: 'दौलत के तराज़ू में तौला इंसान',
    titleEnglish: 'Measuring Character by Bank Balance',
    linesHindi: [
      'यहाँ लोग इंसान की नीयत नहीं, पहले उसका पद और रुतबा पूछते हैं',
      'चमक दिख जाए तो बंजर बात में भी गहरी समझदारी ढूँढ लेते हैं',
    ],
    linesHinglish: [
      'Yahaan log insaan ki neeyat nahin, pehle uska pad aur rutba poochhte hain',
      'Chamak dikh jaaye to banjar baat mein bhi gehri samajhdaari dhoondh lete hain',
    ],
    linesEnglish: [
      'Crowds rarely weigh your kind spirit before glancing at titles and shoes',
      'Once status gleams bright, even shallow remarks draw eager nods',
    ],
  },
  {
    title: 'बिना मतलब की दोस्ती की क़द्र',
    titleEnglish: 'Rarity of Agenda-Free Friendship',
    linesHindi: [
      'जिस दौर में हर सलाम के पीछे कोई काम छिपा रहता हो अक्सर',
      'वहाँ एक बिना मतलब हाल पूछने वाला दोस्त हीरे से कम नहीं होता',
    ],
    linesHinglish: [
      'Jis daur mein har salaam ke peechhe koi kaam chhipa rehta ho aksar',
      'Wahaan ek bina matlab haal poochhne waala dost heere se kam nahin hota',
    ],
    linesEnglish: [
      'In an era where half of cheerful greetings carry hidden errands behind',
      'One friend checking in purely to hear your voice shines rarer than diamonds',
    ],
  },
  {
    title: 'नक़ाबों से भरी चालाक महफ़िल',
    titleEnglish: 'Clever Gatherings Behind Polished Masks',
    linesHindi: [
      'मुस्कुराहट के बाज़ार में अब असली चेहरा पहचानना आसान नहीं रहा',
      'सबने वक़्त के हिसाब से दो-दो चेहरे जेब में रख रखे हैं आजकल',
    ],
    linesHinglish: [
      'Muskurahat ke baazaar mein ab asli chehra pehchaanna aasaan nahin raha',
      'Sabne waqt ke hisaab se do-do chehre jeb mein rakh rakhe hain aajkal',
    ],
    linesEnglish: [
      'In crowded markets of practiced smiles, real character hides deep',
      'Too many carry spare faces tucked neatly inside pockets for convenience',
    ],
  },
  {
    title: 'सीधेपन का गलत फायदा',
    titleEnglish: 'Kindness Mistaken for Naivety',
    linesHindi: [
      'मैंने झुककर बात करना संस्कार समझकर सीखा था अपने घर से',
      'पर कुछ मतलबी लोगों ने मेरी नरमी को मेरी कमज़ोरी समझ लिया',
    ],
    linesHinglish: [
      'Maine jhukkar baat karna sanskaar samajhkar seekha tha apne ghar se',
      'Par kuch matlabi logon ne meri narmi ko meri kamzori samajh liya',
    ],
    linesEnglish: [
      'Speaking gently with lowered pride was manners taught warm at home',
      'Selfish passersby somehow confused quiet politeness for easy weakness',
    ],
  },
  {
    title: 'काम निकलने पर बदली चाल',
    titleEnglish: 'Changing Pace Once Favors End',
    linesHindi: [
      'सड़क पार करने तक तो हर कोई हाथ पकड़कर साथ चलता है यहाँ',
      'मंज़िल दिखते ही अनजान की तरह आगे निकल जाने वाले कम नहीं हैं',
    ],
    linesHinglish: [
      'Sadak paar karne tak to har koi haath pakadkar saath chalta hai yahaan',
      'Manzil dikhte hi anjaan ki tarah aage nikal jaane waale kam nahin hain',
    ],
    linesEnglish: [
      'Crossing tricky streets, everybody holds your elbow smiling warm',
      'Reach safe pavement ahead and half rush away acting like strangers',
    ],
  },
  {
    title: 'कम लोगों में सच्चा सुकून',
    titleEnglish: 'Peace Inside a Smaller Circle',
    linesHindi: [
      'भीड़ बढ़ाने से अच्छा है अपने दायरे को छोटा और साफ़ रख लेना यारो',
      'चार सच्चे लोग सौ मतलबी तालियों से लाख गुना बेहतर होते हैं',
    ],
    linesHinglish: [
      'Bheed badhaane se achha hai apne daayre ko chhota aur saaf rakh lena yaaro',
      'Chaar sachhe log sau matlabi taaliyon se laakh guna behtar hote hain',
    ],
    linesEnglish: [
      'Far wiser to shrink your table small and clean than collect noisy crowds',
      'Four loyal souls outshine a hundred self-serving claps any evening',
    ],
  },
  {
    title: 'स्वार्थ से परे अपनी सादगी',
    titleEnglish: 'Guarding Own Goodness Amid Greed',
    linesHindi: [
      'मतलबी लोगों को देखकर अपनी अच्छाई मत बदल देना मेरे दोस्त कभी',
      'बस किसके आगे कितना खुलना है, इतनी समझदारी जोड़ लेना साथ में',
    ],
    linesHinglish: [
      'Matlabi logon ko dekhkar apni achhaai mat badal dena mere dost kabhi',
      'Bas kiske aage kitna khulna hai, itni samajhdaari jod lena saath mein',
    ],
    linesEnglish: [
      'Never surrender your own generous spirit merely watching greedy players',
      'Simply pair open kindness with sharp wisdom about who earns your trust',
    ],
  },
  {
    title: 'तारीफ़ के पीछे छुपे मंसूबे',
    titleEnglish: 'Hidden Motives Inside Flattery',
    linesHindi: [
      'जब कोई बिना किसी बात के ज़रूरत से ज़्यादा तारीफ़ करने लगे अचानक',
      'तो समझ जाना कि अगले वाक्य में कोई नया काम आने वाला है सामने',
    ],
    linesHinglish: [
      'Jab koi bina kisi baat ke zaroorat se zyada taareef karne lage achaanak',
      'To samajh jaana ki agle vaakya mein koi naya kaam aane waala hai saamne',
    ],
    linesEnglish: [
      'Whenever someone lays on sudden thick compliments out of clear blue sky',
      'Expect a neatly wrapped favor request arriving two sentences later',
    ],
  },
  {
    title: 'मुश्किल घड़ी का सच्चा आईना',
    titleEnglish: 'Clear Mirror of Tough Hours',
    linesHindi: [
      'पार्टी की मेज़ पर तो हर गिलास टकराने वाला यार बन जाता है तुरंत',
      'असली अपना वही दिखता है जो खाली जेब होने पर भी साथ न छोड़े',
    ],
    linesHinglish: [
      'Party ki mez par to har gilaas takraane waala yaar ban jaata hai turant',
      'Asli apna wahi dikhta hai jo khaali jeb hone par bhi saath na chhode',
    ],
    linesEnglish: [
      'Around celebratory dinner tables everyone volunteers as your lifelong pal',
      'Real family reveals itself the week pockets empty and phones go quiet',
    ],
  },
  {
    title: 'शोर कम, परख ज़्यादा',
    titleEnglish: 'Fewer Arguments, Sharper Clarity',
    linesHindi: [
      'दुनिया की चालाकियाँ समझने के बाद बहस करने का मन नहीं करता अब',
      'बस मुस्कुराकर हर किसी को उसकी ही समझ पर छोड़ देता हूँ आजकल',
    ],
    linesHinglish: [
      'Duniya ki chaalaakiyaan samajhne ke baad behas karne ka mann nahin karta ab',
      'Bas muskuraakar har kisi ko uski hi samajh par chhod deta hoon aajkal',
    ],
    linesEnglish: [
      'Once you decode worldly games clearly, arguing loses all appeal',
      'Nowadays I simply smile politely and let people meet their own mirror',
    ],
  },
  {
    title: 'कपड़ों की चमक से आँकी इज़्ज़त',
    titleEnglish: 'Respect Judged by Cloth Gloss',
    linesHindi: [
      'अजीब दस्तूर है इस मतलबी शहर की गलियों का भी मेरे दोस्त',
      'यहाँ फटी चादर वाले का सच भी लोग महँगे सूट के आगे कम आँकते हैं',
    ],
    linesHinglish: [
      'Ajeeb dastoor hai is matlabi shehar ki galiyon ka bhi mere dost',
      'Yahaan phati chaadar waale ka sach bhi log mehnge suit ke aage kam aankte hain',
    ],
    linesEnglish: [
      'Funny habits rule these glittery streets across town too often',
      'Honest truth in plain cotton gets brushed past beneath tailored silk',
    ],
  },
  {
    title: 'वक़्त पर उतरा झूठा नक़ाब',
    titleEnglish: 'Painted Mask Slipping Right on Time',
    linesHindi: [
      'बहुत ज़्यादा चालाक बनने वाले भी एक दिन खुद ही पकड़े जाते हैं यहाँ',
      'क्योंकि झूठ का नक़ाब ज़्यादा देर तक धूप बर्दाश्त नहीं कर पाता',
    ],
    linesHinglish: [
      'Bahut zyada chaalaak banne waale bhi ek din khud hi pakde jaate hain yahaan',
      'Kyunki jhooth ka naqaab zyada der tak dhoop bardaasht nahin kar paata',
    ],
    linesEnglish: [
      'Overly slick schemers always trip cleanly over their own clever knots',
      'Painted masks melt swiftly once harsh noon sunlight warms the room',
    ],
  },
  {
    title: 'अकेले चलने की सुकून भरी ताक़त',
    titleEnglish: 'Peaceful Strength in Walking Alone',
    linesHindi: [
      'झूठे हमसफ़रों की भीड़ में चलते रहने से हजार गुना अच्छा है यारो',
      'साफ़ मन के साथ अपने अकेले सफ़र का आनंद उठाते हुए आगे बढ़ना',
    ],
    linesHinglish: [
      'Jhoothe humsafaron ki bheed mein chalte rehne se hazaar guna achha hai yaaro',
      'Saaf mann ke saath apne akele safar ka aanand uthaate hue aage badhna',
    ],
    linesEnglish: [
      'A thousand times sweeter than marching inside crowds of fake companions',
      'Is walking solo with a light chest savoring clean air along the road',
    ],
  },
  {
    title: 'मतलबी माहौल में शांत समझदारी',
    titleEnglish: 'Calm Wisdom Amid Selfish Noise',
    linesHindi: [
      'मैंने लोगों से उम्मीदें कम करके अपनी शांति बचा ली है पूरी तरह',
      'अब कोई साथ निभाए तो शुक्रिया, और मुड़ जाए तो भी कोई गिला नहीं',
    ],
    linesHinglish: [
      'Maine logon se ummeedein kam karke apni shaanti bacha li hai poori tarah',
      'Ab koi saath nibhaaye to shukriya, aur mud jaaye to bhi koi gila nahin',
    ],
    linesEnglish: [
      'By trimming heavy expectations of passersby I protected inner calm whole',
      'Stay loyal and receive warm gratitude—drift off and carry zero grudge',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'सौदेबाज़ी बन गए रिश्ते',
    titleEnglish: 'Bonds Reduced Into Quiet Trades',
    linesHindi: [
      'पहले लोग हाल पूछने के लिए भी घर के आँगन तक चले आते थे पैदल',
      'अब बिना मुनाफ़े के कोई दो मिनट का वक़्त भी खर्च नहीं करता यहाँ',
    ],
    linesHinglish: [
      'Pehle log haal poochhne ke liye bhi ghar ke aangan tak chale aate the paidal',
      'Ab bina munaafe ke koi do minute ka waqt bhi kharch nahin karta yahaan',
    ],
    linesEnglish: [
      'Folks once walked across whole neighborhoods purely to ask how you felt',
      'Now too many refuse spending even two minutes absent personal gain',
    ],
  },
  {
    title: 'अच्छाई का मज़ाक उड़ाती सोच',
    titleEnglish: 'Cynics Mocking Genuine Kindness',
    linesHindi: [
      'जो दुनिया आज ईमानदार इंसान को सीधा और भोला कहकर हँसती है',
      'संकट आते ही सबसे पहले मदद माँगने उसी की चौखट पर जाती है',
    ],
    linesHinglish: [
      'Jo duniya aaj imaandaar insaan ko seedha aur bhola kehkar hansti hai',
      'Sankat aate hi sabse pehle madad maangne usi ki chaukhat par jaati hai',
    ],
    linesEnglish: [
      'The very crowd chuckling at honest souls as simpleminded fools today',
      'Knocks first on that exact honest doorstep when storm clouds roll over',
    ],
  },
  {
    title: 'हल्के मौसम में भारी सबक़',
    titleEnglish: 'Heavy Lesson on an Easy Day',
    linesHindi: [
      'कभी-कभी बहुत छोटी सी बात भी इंसान की पूरी असलियत दिखा देती है',
      'बड़े तूफ़ान की ज़रूरत नहीं पड़ती मतलबी मिज़ाज पहचानने के लिए',
    ],
    linesHinglish: [
      'Kabhi-kabhi bahut chhoti si baat bhi insaan ki poori asliyat dikha deti hai',
      'Bade toofaan ki zaroorat nahin padti matlabi mizaaj pehchaanne ke liye',
    ],
    linesEnglish: [
      'Tiny everyday moments reveal true character clearer than loud speeches',
      'You never need giant crises to recognize purely selfish intentions',
    ],
  },
  {
    title: 'पीठ पीछे चलने वाली बातें',
    titleEnglish: 'Whispers Turning Behind Closed Doors',
    linesHindi: [
      'जो लोग तुम्हारे सामने बैठकर किसी और की बुराई बड़े चाव से करते हैं',
      'यकीन मानो तुम्हारे उठते ही वे तुम्हारा किस्सा भी वैसे ही सुनाते हैं',
    ],
    linesHinglish: [
      'Jo log tumhaare saamne baithkar kisi aur ki buraai bade chaav se karte hain',
      'Yakeen maano tumhaare uthte hi we tumhaara kissa bhi waise hi sunaate hain',
    ],
    linesEnglish: [
      'Whoever eagerly serves gossip roasting others across your tea table',
      'Starts serving your own name the second your chair slides back outside',
    ],
  },
  {
    title: 'मतलब की छतरी वाले साथी',
    titleEnglish: 'Umbrella Friends Only in Light Rain',
    linesHindi: [
      'जब धूप खिली थी तब हर कोई साथ चलने की कसमें खा रहा था रोज़',
      'ज़रा सी तेज़ आंधी आते ही सब अपने-अपने दरवाज़े बंद कर गए',
    ],
    linesHinglish: [
      'Jab dhoop khili thi tab har koi saath chalne ki kasmein kha raha tha roz',
      'Zara si tez aandhi aate hi sab apne-apne darwaaze band kar gaye',
    ],
    linesEnglish: [
      'Under mild sunshine everyone swore eternal loyalty along the park path',
      'At the first stiff gust of trouble, shutters clicked locked everywhere',
    ],
  },
  {
    title: 'दिल साफ रखो, आँखें खुली',
    titleEnglish: 'Keep Heart Pure, Keep Eyes Sharp',
    linesHindi: [
      'हर किसी पर तुरंत भरोसा कर लेने की आदत थोड़ी बदलनी पड़ती है अब',
      'दिल को कोमल रखते हुए भी दिमाग को थोड़ा चौकन्ना रखना सीखो',
    ],
    linesHinglish: [
      'Har kisi par turant bharosa kar lene ki aadat thodi badalni padti hai ab',
      'Dil ko komal rakhte hue bhi dimaag ko thoda chaukanna rakhna seekho',
    ],
    linesEnglish: [
      'Handing blind keys to every cheerful newcomer gets expensive fast',
      'Keep your spirit tender while training calm eyes to notice real patterns',
    ],
  },
  {
    title: 'उपकार भूल जाने की बीमारी',
    titleEnglish: 'Quick Amnesia for Past Favors',
    linesHindi: [
      'हज़ार बार काम आने के बाद भी बस एक बार असमर्थ कहकर देख लो',
      'पिछले सारे एहसान एक पल में हवा की तरह गायब हो जाते हैं यहाँ',
    ],
    linesHinglish: [
      'Hazaar baar kaam aane ke baad bhi bas ek baar asamarth kehkar dekh lo',
      'Pichhle saare ehsaan ek pal mein hawa ki tarah gaayab ho jaate hain yahaan',
    ],
    linesEnglish: [
      'Step up reliably a thousand times, then decline gently just once',
      'Every past favor evaporates clean into thin air before sunset',
    ],
  },
  {
    title: 'बनावटी सहानुभूति की परत',
    titleEnglish: 'Thin Layer of Politeness Only',
    linesHindi: [
      'दुनिया में हाल पूछने वाले बहुत मिल जाएँगे तुम्हें हर नुक्कड़ पर यारो',
      'पर सच में परवाह करने वाले उँगलियों पर गिने जाने लायक ही रहते हैं',
    ],
    linesHinglish: [
      'Duniya mein haal poochhne waale bahut mil jaayenge tumhein har nukkad par yaaro',
      'Par sach mein parwaah karne waale ungliyon par gine jaane laayak hi rehte hain',
    ],
    linesEnglish: [
      'Casual acquaintances asking how are you appear on every corner',
      'Souls who actually stay when skies turn stormy fit easily on one hand',
    ],
  },
  {
    title: 'कमज़ोरी पर तमाशा बनाने वाले',
    titleEnglish: 'Crowd Watching Without Lending Hand',
    linesHindi: [
      'जब तुम थककर गिरोगे तो सौ लोग मोबाइल निकालकर वीडियो बना लेंगे',
      'पर हाथ पकड़कर उठाने वाला कोई एक ही सच्चा इंसान आगे बढ़ेगा',
    ],
    linesHinglish: [
      'Jab tum thakkar giroge to sau log mobile nikaalkar video bana lenge',
      'Par haath pakadkar uthaane waala koi ek hi sachha insaan aage badhega',
    ],
    linesEnglish: [
      'Stumble in public and dozens raise glowing phone cameras instantly',
      'Only one quiet genuine soul pockets theirs to help you stand back up',
    ],
  },
  {
    title: 'अपने काम से काम रखने का सुकून',
    titleEnglish: 'Quiet Peace of Minding Own Path',
    linesHindi: [
      'दुनिया के हर नक़ली इंसान को सुधारने की ज़िम्मेदारी हमारी नहीं है',
      'अपनी राह साफ़ रखो और मतलबी शोर से खुद को दूर कर लो बस',
    ],
    linesHinglish: [
      'Duniya ke har nakli insaan ko sudhaarne ki zimmedari hamaari nahin hai',
      'Apni raah saaf rakho aur matlabi shor se khud ko door kar lo bas',
    ],
    linesEnglish: [
      'Reforming every crooked player across town was never assigned to us',
      'Walk cleanly on your own lane and mute greedy background chatter',
    ],
  },
  {
    title: 'सस्ते दिखावे की चमक',
    titleEnglish: 'Hollow Shine of Borrowed Glitz',
    linesHindi: [
      'आजकल रिश्ते भी कैमरे की फ़्लैशलाइट में चमकने लगे हैं हर तरफ़',
      'पर कैमरा बंद होते ही आधे से ज़्यादा लोग बात भी नहीं करते आपस में',
    ],
    linesHinglish: [
      'Aajkal rishte bhi camera ki flashlight mein chamakne lage hain har taraf',
      'Par camera band hote hi aadhe se zyada log baat bhi nahin karte aapas mein',
    ],
    linesEnglish: [
      'Modern ties pose brightly under warm party flashes for social feeds',
      'The second cameras lower, half those hugs go completely cold and quiet',
    ],
  },
  {
    title: 'मीठे ज़हर से बचने की समझ',
    titleEnglish: 'Wisdom Outsmarting Sugar-Coated Traps',
    linesHindi: [
      'अक्सर कड़वी सलाह देने वाला तुम्हारा सच्चा हितैषी निकलता है बाद में',
      'और हर बात में हाँ-हाँ मिलाने वाला सबसे पहले रास्ता बदल लेता है',
    ],
    linesHinglish: [
      'Aksar kadwi salaah dene waala tumhaara sachha hitaishi nikalta hai baad mein',
      'Aur har baat mein haan-haan milaane waala sabse pehle raasta badal leta hai',
    ],
    linesEnglish: [
      'Blunt honest critics often prove your truest protectors over years',
      'While smooth yes-men smiling nonstop vanish earliest when winds shift',
    ],
  },
  {
    title: 'कीमत चुकाने के बाद मिली अक्ल',
    titleEnglish: 'Clarity Bought Through Real Experience',
    linesHindi: [
      'किताबों ने मुझे उतना नहीं सिखाया कभी जितना मतलबी यारों ने सिखाया',
      'एक छोटा सा धोखा पूरी उम्र के लिए आँखों का चश्मा साफ़ कर गया',
    ],
    linesHinglish: [
      'Kitaabon ne mujhe utna nahin sikhaaya kabhi jitna matlabi yaaron ne sikhaaya',
      'Ek chhota sa dhokha poori umr ke liye aankhon ka chashma saaf kar gaya',
    ],
    linesEnglish: [
      'Thick philosophy shelves taught less than one self-serving acquaintance',
      'A single quiet letdown polished my glasses crystal clear for good',
    ],
  },
  {
    title: 'वक़्त पर नाप ली गई गहराई',
    titleEnglish: 'Depth Measured When Needed Most',
    linesHindi: [
      'जब तक हमारी नाव किनारे लगी थी तब तक हर कोई मल्लाह बना फिरता था',
      'लहरों के बीच उतरते ही सबने पतवार फेंककर तमाशा देखना चुन लिया',
    ],
    linesHinglish: [
      'Jab tak hamaari naav kinaare lagi thi tab tak har koi mallaah bana phirta tha',
      'Lehron ke beech utarte hi sabne patwaar phenkkar tamaasha dekhna chun liya',
    ],
    linesEnglish: [
      'While our boat rested moored at calm docks, everyone boasted sailor skills',
      'Out past choppy whitecaps, half dropped oars simply to watch from shore',
    ],
  },
  {
    title: 'चालाक दुनिया में साफ़ ज़मीर',
    titleEnglish: 'Clean Conscience in Crafty World',
    linesHindi: [
      'चालाकियाँ सीख लेने में कोई बहुत बड़ी बहादुरी नहीं होती मेरे भाई',
      'भीड़ के बीच अपना ज़मीर साफ़ रखकर निकल जाना ही असली दम है',
    ],
    linesHinglish: [
      'Chaalaakiyaan seekh lene mein koi bahut badi bahaaduri nahin hoti mere bhai',
      'Bheed ke beech apna zameer saaf rakhkar nikal jaana hi asli dam hai',
    ],
    linesEnglish: [
      'Picking up sly street tricks earns zero lasting badge of honor',
      'Walking right through tricky crowds with a clean conscience takes real grit',
    ],
  },
  {
    title: 'कम बोलने का बड़ा फ़ायदा',
    titleEnglish: 'Quiet Power of Speaking Less',
    linesHindi: [
      'जब से हर किसी को अपने घर के राज़ बताना बंद कर दिया है मैंने',
      'मतलबी लोगों की आधी दुकान अपने आप बंद हो गई है गली में',
    ],
    linesHinglish: [
      'Jab se har kisi ko apne ghar ke raaz bataana band kar diya hai maine',
      'Matlabi logon ki aadhi dukaan apne aap band ho gayi hai gali mein',
    ],
    linesEnglish: [
      'Ever since I stopped sharing private plans with casual ears around town',
      'Half the rumor stalls along the block closed shutters on their own',
    ],
  },
  {
    title: 'हँसी के पीछे छुपी परख',
    titleEnglish: 'Quiet Discernment Behind Easy Grin',
    linesHindi: [
      'मैं मुस्कुराकर हर किसी से आज भी तहज़ीब से ही बात करता हूँ यारो',
      'पर दिल में किसे किस जगह बैठाना है, यह अब बहुत अच्छी तरह जानता हूँ',
    ],
    linesHinglish: [
      'Main muskuraakar har kisi se aaj bhi tehzeeb se hi baat karta hoon yaaro',
      'Par dil mein kise kis jagah baithaana hai, yeh ab bahut achhi tarah jaanta hoon',
    ],
    linesEnglish: [
      'I still greet every acquaintance politely with a relaxed warm smile',
      'Yet nowadays I know precisely which seat each person earns inside',
    ],
  },
  {
    title: 'मतलब से परे सच्चा अपनापन',
    titleEnglish: 'Genuine Warmth Outside Calculations',
    linesHindi: [
      'सच्चे रिश्ते कभी फ़ायदे और नुकसान का चार्ट देखकर नहीं जुड़ते हैं',
      'जहाँ हर कदम पर हिसाब दिखे, वहाँ से चुपचाप लौट आना ही सही है',
    ],
    linesHinglish: [
      'Sachhe rishte kabhi faayde aur nuksaan ka chart dekhkar nahin judte hain',
      'Jahaan har kadam par hisaab dikhe, wahaan se chupchaap laut aana hi sahi hai',
    ],
    linesEnglish: [
      'Authentic bonds never check quarterly profit charts before caring',
      'Wherever you spot tidy ledgers behind favors, step gracefully away',
    ],
  },
  {
    title: 'गिरगिट से तेज़ बदलते रंग',
    titleEnglish: 'Shades Shifting Faster Than Weather',
    linesHindi: [
      'मौसम को बेवफ़ा कहने वाले लोग शायद दुनिया से मिले नहीं अभी तक',
      'इंसान जितनी तेज़ी से रंग बदलता है उतना कोई मौसम नहीं बदलता',
    ],
    linesHinglish: [
      'Mausam ko bewafa kehne waale log shaayad duniya se mile nahin abhi tak',
      'Insaan jitni tezi se rang badalta hai utna koi mausam nahin badalta',
    ],
    linesEnglish: [
      'Folks calling April skies fickle clearly have not watched social games',
      'No sudden storm swaps colors quicker than self-interest flipping sides',
    ],
  },
  {
    title: 'अपने दम पर खड़ी मज़बूती',
    titleEnglish: 'Strength Built Without Crutches',
    linesHindi: [
      'मतलबी लोगों ने एक बहुत शानदार आदत डाल दी है मेरे अंदर यार',
      'अब मैं हर काम अकेले पूरा करने का भरोसा रखता हूँ अपने हाथों पर',
    ],
    linesHinglish: [
      'Matlabi logon ne ek bahut shaandaar aadat daal di hai mere andar yaar',
      'Ab main har kaam akele poora karne ka bharosa rakhta hoon apne haathon par',
    ],
    linesEnglish: [
      'Unreliable acquaintances accidentally gifted me one priceless habit',
      'Now I trust my own two steady hands to finish every heavy lift cleanly',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'स्वार्थ के चश्मे से दिखती दुनिया',
    titleEnglish: 'World Seen Through Selfish Lenses',
    linesHindi: [
      'जब तक आपके पास देने के लिए कुछ रहे तब तक सब सगे बने रहते हैं',
      'खाली हाथ होते ही वही लोग नसीहतों की किताब खोलकर बैठ जाते हैं',
    ],
    linesHinglish: [
      'Jab tak aapke paas dene ke liye kuch rahe tab tak sab sage bane rehte hain',
      'Khaali haath hote hi wahi log naseehaton ki kitaab kholkar baith jaate hain',
    ],
    linesEnglish: [
      'While you still hold plenty to hand out, everybody claims close kin',
      'The second your hands sit bare, those exact guests deliver free lectures',
    ],
  },
  {
    title: 'बनावटी अपनापन पहचानने की कला',
    titleEnglish: 'Art of Spotting Plastic Warmth',
    linesHindi: [
      'हर बार चोट खाकर रोने से बेहतर है एक बार इंसान पढ़ना सीख लेना',
      'शब्दों से ज़्यादा उनके काम करने के तरीके असली इरादा बता देते हैं',
    ],
    linesHinglish: [
      'Har baar chot khaakar rone se behtar hai ek baar insaan padhna seekh lena',
      'Shabdon se zyada unke kaam karne ke tareeke asli iraada bata dete hain',
    ],
    linesEnglish: [
      'Far wiser than nursing fresh bruises every winter is reading patterns early',
      'Consistent actions reveal quiet truth far louder than smooth phrases',
    ],
  },
  {
    title: 'जरूरत पड़ने पर बंद दरवाज़े',
    titleEnglish: 'Doors Latched Tight When Needed',
    linesHindi: [
      'जिनके लिए हम आधी रात को भी दौड़कर पहुँच जाया करते थे हमेशा',
      'अपनी बारी आने पर उनके ज़्यादातर नंबर व्यस्त या बंद ही मिले मुझे',
    ],
    linesHinglish: [
      'Jinke liye hum aadhi raat ko bhi daudkar pahunch jaaya karte the hamesha',
      'Apni baari aane par unke zyaadatar number vyast ya band hi mile mujhe',
    ],
    linesEnglish: [
      'For people whose emergencies once pulled me running out past midnight',
      'When my turn arrived, voicemail greetings were all I heard back',
    ],
  },
  {
    title: 'खुद के लिए समय बचाने की समझ',
    titleEnglish: 'Saving Energy From Hollow Ties',
    linesHindi: [
      'गलत जगह ऊर्जा लगाने से अच्छा है खुद के काम पर ध्यान देना भाई',
      'मतलबी लोग वक्त भी खाते हैं और मन की शांति भी छीन लेते हैं',
    ],
    linesHinglish: [
      'Galat jagah oorja lagaane se achha hai khud ke kaam par dhyaan dena bhai',
      'Matlabi log waqt bhi khaate hain aur mann ki shaanti bhi chheen lete hain',
    ],
    linesEnglish: [
      'Far smarter investing hours into your own craft than one-way circles',
      'Selfish folks drain both your calendar pages and your quiet peace',
    ],
  },
  {
    title: 'ताक़त और कमज़ोरी का हिसाब',
    titleEnglish: 'Scorekeeping Power and Weakness',
    linesHindi: [
      'जहाँ आपकी गलती पर तुरंत जश्न मनाया जाए कोने में छुपकर',
      'समझ लेना वह महफ़िल आपकी कभी थी ही नहीं किसी भी रूप में',
    ],
    linesHinglish: [
      'Jahaan aapki galti par turant jashn manaaya jaaye kone mein chhupkar',
      'Samajh lena woh mehfil aapki kabhi thi hi nahin kisi bhi roop mein',
    ],
    linesEnglish: [
      'Anywhere small stumbles draw quiet smug grins behind coffee cups',
      'Recognize cleanly that circle never belonged on your side at all',
    ],
  },
  {
    title: 'सरलता का मोल समझने वाले कम',
    titleEnglish: 'Few Value Genuine Simplicity',
    linesHindi: [
      'साफ-साफ बात बोलने वाले अक्सर यहाँ सबको कड़वे लगते हैं शुरू में',
      'क्योंकि लोगों को मीठे झूठ सुनने की आदत बहुत गहरी पड़ चुकी है',
    ],
    linesHinglish: [
      'Saaf-saaf baat bolne waale aksar yahaan sabko kadwe lagte hain shuru mein',
      'Kyunki logon ko meetha jhooth sunne ki aadat bahut gehri pad chuki hai',
    ],
    linesEnglish: [
      'Folks speaking plain clean truth often sound blunt around polished halls',
      'Too many ears have grown addicted purely to sugar-coated fiction',
    ],
  },
  {
    title: 'नए चेहरे, पुरानी चाल',
    titleEnglish: 'Brand-New Faces, Same Old Play',
    linesHindi: [
      'शहर बदल जाए या दफ्तर की इमारत नई बन जाए चाहे जितनी भी',
      'स्वार्थ का खेल खेलने वालों के तरीके आज भी वही पुराने रहते हैं',
    ],
    linesHinglish: [
      'Shehar badal jaaye ya daftar ki imaarat nayi ban jaaye chaahe jitni bhi',
      'Swaarth ka khel khelne waalon ke tareeke aaj bhi wahi puraane rehte hain',
    ],
    linesEnglish: [
      'Skyscrapers rise taller and zip codes switch across glossy badges',
      'Yet folks playing narrow self-interest still use identical old scripts',
    ],
  },
  {
    title: 'खामोश रहकर सीखा गया सच',
    titleEnglish: 'Quiet Truth Learned by Observing',
    linesHindi: [
      'कम बोलने का एक बड़ा फ़ायदा यह भी मिला मुझे इन बीते सालों में',
      'कि कौन सच में सुनता है और कौन बस अपनी बारी का इंतज़ार करता है',
    ],
    linesHinglish: [
      'Kam bolne ka ek bada faayda yeh bhi mila mujhe in beete saalon mein',
      'Ki kaun sach mein sunta hai aur kaun bas apni baari ka intezaar karta hai',
    ],
    linesEnglish: [
      'Staying quiet across gatherings revealed one sharp lesson effortlessly',
      'Who genuinely listens versus who merely waits impatiently to boast',
    ],
  },
  {
    title: 'दिल की सफ़ाई सबसे ऊपर',
    titleEnglish: 'Clean Heart Remains Above All',
    linesHindi: [
      'लोग लाख चालाकी से आगे निकलने की होड़ में भागते रहें रोज़ यहाँ',
      'पर दिल की सफ़ाई और सच्ची नींद हर चालाकी से महँगी चीज़ है',
    ],
    linesHinglish: [
      'Log laakh chaalaaki se aage nikalne ki hod mein bhaagte rahein roz yahaan',
      'Par dil ki safaai aur sachhi neend har chaalaaki se mehngi cheez hai',
    ],
    linesEnglish: [
      'Let clever schemers sprint endlessly through shallow shortcuts daily',
      'A clean conscience and sound untroubled sleep remain far richer prizes',
    ],
  },
  {
    title: 'आधे सफ़र में छूटे नक़ली हाथ',
    titleEnglish: 'Fake Hands Dropping Mid-Climb',
    linesHindi: [
      'चढ़ाई शुरू होते ही जो लोग बहाने बनाकर नीचे रुक गए रास्ते में',
      'शिखर पर पहुँचने के बाद उन्हें याद रखना भी ज़रूरी नहीं लगता अब',
    ],
    linesHinglish: [
      'Chadhaai shuru hote hi jo log bahaane banaakar neeche ruk gaye raaste mein',
      'Shikhar par pahunchne ke baad unhein yaad rakhna bhi zaroori nahin lagta ab',
    ],
    linesEnglish: [
      'Folks inventing neat excuses right when uphill trails got rocky',
      'Hardly earn front-row invites once crisp mountain summits come in view',
    ],
  },
  {
    title: 'असली और नक़ली का फर्क',
    titleEnglish: 'Difference Between Real and Gold-Plated',
    linesHindi: [
      'पानी की एक बौछार से ही नक़ली रंग बहकर ज़मीन पर आ गिरता है',
      'असली सोना हर आंच में तपकर और भी साफ चमकने लगता है',
    ],
    linesHinglish: [
      'Paani ki ek bauchhaar se hi nakli rang behkar zameen par aa girta hai',
      'Asli sona har aanch mein tapkar aur bhi saaf chamakne lagta hai',
    ],
    linesEnglish: [
      'One steady rain shower washes cheap surface paint right down the drain',
      'Pure solid gold only gleams sharper through every quiet trial fire',
    ],
  },
  {
    title: 'भरोसे का महंगा सिक्का',
    titleEnglish: 'Rare Coin Called Genuine Trust',
    linesHindi: [
      'आज की दुनिया में सबसे महंगा सिक्का भरोसा ही बन गया है दोस्तों',
      'इसे यूँ ही हर राह चलते के हाथ में थमा देना समझदारी नहीं है',
    ],
    linesHinglish: [
      'Aaj ki duniya mein sabse mehnga sikka bharosa hi ban gaya hai doston',
      'Ise yoon hi har raah chalte ke haath mein thama dena samajhdaari nahin hai',
    ],
    linesEnglish: [
      'In modern markets, honest trust stands as the rarest currency minted',
      'Tossing it casually into untested hands is never wise stewardship',
    ],
  },
  {
    title: 'दिखावे से दूर सादा जीवन',
    titleEnglish: 'Simple Life Beyond Showy Games',
    linesHindi: [
      'मतलबी भीड़ में बड़ा नाम दिखाने की भूख अब खत्म हो चुकी है',
      'सादे घर में दो सच्चे चेहरों के साथ हँस लेना ही असली दौलत है',
    ],
    linesHinglish: [
      'Matlabi bheed mein bada naam dikhaane ki bhookh ab khatam ho chuki hai',
      'Saade ghar mein do sachhe chehron ke saath hans lena hi asli daulat hai',
    ],
    linesEnglish: [
      'Hunger to impress self-serving crowds faded peacefully long ago',
      'Laughing softly at home with two trusted souls equals true wealth',
    ],
  },
  {
    title: 'चमक के पीछे छिपा अकेलापन',
    titleEnglish: 'Hollow Noise Around Selfish Fame',
    linesHindi: [
      'जो सिर्फ़ तुम्हारी कामयाबी देखकर तुम्हारे आसपास मँडराते रहते हैं',
      'तुम थोड़ा शांत होते ही वे अगले उजाले की तरफ़ उड़ जाते हैं',
    ],
    linesHinglish: [
      'Jo sirf tumhaari kaamyaabi dekhkar tumhaare aaspaas mandraate rehte hain',
      'Tum thoda shaant hote hi we agle ujaale ki taraf ud jaate hain',
    ],
    linesEnglish: [
      'Moths circling your porch purely for bright porchlight warmth',
      'Flutter straight toward the next glowing lamp the second yours dims low',
    ],
  },
  {
    title: 'मीठी बातों की असली परीक्षा',
    titleEnglish: 'Real Test of Honeyed Promises',
    linesHindi: [
      'बड़े-बड़े दावे तो चाय की मेज़ पर कोई भी कर जाता है मिनटों में',
      'असली इंसान की पहचान अगले दिन समय पर खड़े मिलने से होती है',
    ],
    linesHinglish: [
      'Bade-bade daawe to chai ki mez par koi bhi kar jaata hai minaton mein',
      'Asli insaan ki pehchaan agle din samay par khade milne se hoti hai',
    ],
    linesEnglish: [
      'Anyone can toss huge lofty pledges across teacups in five easy minutes',
      'Real character shows up quietly on time the following rainy morning',
    ],
  },
  {
    title: 'तोल-मोल कर मिलने वाले लोग',
    titleEnglish: 'People Measuring Every Hello',
    linesHindi: [
      'कुछ लोग मुस्कान भी उतना ही खर्च करते हैं जितना सामने वाले का कद हो',
      'ऐसे तराज़ू वाले लोगों से दूर रहकर ही दिल हल्का बना रहता है',
    ],
    linesHinglish: [
      'Kuch log muskaan bhi utna hi kharch karte hain jitna saamne waale ka kad ho',
      'Aise taraazoo waale logon se door rehkar hi dil halka bana rehta hai',
    ],
    linesEnglish: [
      'Certain folks ration even basic smiles strictly by job titles',
      'Keeping clear of human calculators keeps your spirit delightfully light',
    ],
  },
  {
    title: 'असली साथी की खामोश निशानी',
    titleEnglish: 'Silent Sign of True Ally',
    linesHindi: [
      'मतलबी दुनिया में भी कुछ फरिश्ते आज भी मौजूद हैं धरती पर यार',
      'जो तुम्हारी गैरहाज़िरी में भी तुम्हारे नाम की इज़्ज़त बचाकर रखते हैं',
    ],
    linesHinglish: [
      'Matlabi duniya mein bhi kuch farishte aaj bhi maujood hain dharti par yaar',
      'Jo tumhaari gairhaaziri mein bhi tumhaare naam ki izzat bachaakar rakhte hain',
    ],
    linesEnglish: [
      'Even inside a self-serving world, rare gems still walk among us',
      'Friends who guard your good name cleanly even when you leave the room',
    ],
  },
  {
    title: 'अतिरिक्त झुकने से टूटी रीढ़',
    titleEnglish: 'Lesson Against Over-Bending',
    linesHindi: [
      'सबको खुश रखने की कोशिश में अपनी सेहत और शांति मत बेच देना',
      'क्योंकि मतलबी लोग कभी भी किसी के त्याग से संतुष्ट नहीं होते',
    ],
    linesHinglish: [
      'Sabko khush rakhne ki koshish mein apni sehat aur shaanti mat bech dena',
      'Kyunki matlabi log kabhi bhi kisi ke tyaag se santusht nahin hote',
    ],
    linesEnglish: [
      'Never trade away health and serenity trying to satisfy everyone nearby',
      'Selfish appetites never once feel full regardless how much you give',
    ],
  },
  {
    title: 'समझदारी का शांत कवच',
    titleEnglish: 'Calm Shield of Hard-Won Wisdom',
    linesHindi: [
      'अब किसी के बदल जाने पर रात भर बैठकर सोचना छोड़ दिया मैंने',
      'इंसान का स्वभाव बदलना मौसम जितना ही आम लगता है अब मुझे',
    ],
    linesHinglish: [
      'Ab kisi ke badal jaane par raat bhar baithkar sochna chhod diya maine',
      'Insaan ka swabhaav badalna mausam jitna hi aam lagta hai ab mujhe',
    ],
    linesEnglish: [
      'I stopped losing midnight sleep over someone flipping cold overnight',
      'Shifting loyalties feel just as predictable now as afternoon rain',
    ],
  },
  {
    title: 'शांति से भरी अपनी दुनिया',
    titleEnglish: 'Peaceful Own World Built Apart',
    linesHindi: [
      'जब बाहर की दुनिया बहुत ज़्यादा स्वार्थी और शोर भरी लगने लगे कभी',
      'तो अपनी चाय, अपनी किताब और दो सच्चे दोस्तों में लौट आना चाहिए',
    ],
    linesHinglish: [
      'Jab baahar ki duniya bahut zyada swaarthi aur shor bhari lagne lage kabhi',
      'To apni chai, apni kitaab aur do sachhe doston mein laut aana chahiye',
    ],
    linesEnglish: [
      'Whenever outer noise grows too calculating and loud around you',
      'Retreat calmly back to warm tea, good books, and two real friends',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'चिकनी बातों की पुरानी दुकान',
    titleEnglish: 'Old Shop Selling Smooth Excuses',
    linesHindi: [
      'यहाँ हर किसी के पास मदद न करने का कोई नया बहाना तैयार रहता है',
      'और मुफ्त की सलाह बाँटने के लिए तो सब सबसे आगे खड़े दिखते हैं',
    ],
    linesHinglish: [
      'Yahaan har kisi ke paas madad na karne ka koi naya bahaana taiyaar rehta hai',
      'Aur muft ki salaah baantne ke liye to sab sabse aage khade dikhte hain',
    ],
    linesEnglish: [
      'Everybody keeps fresh polished excuses lined up whenever action matters',
      'Yet crowds rush straight to front rows handing out free advice',
    ],
  },
  {
    title: 'अपनों की भीड़ में अजनबीपन',
    titleEnglish: 'Feeling Stranger Amid Familiar Crowds',
    linesHindi: [
      'कभी-कभी घर की तस्वीरों से ज़्यादा सच्चा अपनापन अनजान से मिलता है',
      'जब करीबी लोग भी रिश्तों को फायदे से तौलकर देखने लगें अचानक',
    ],
    linesHinglish: [
      'Kabhi-kabhi ghar ki tasveeron se zyada sachha apnapan anjaan se milta hai',
      'Jab kareebi log bhi rishton ko faayde se taulkar dekhne lagein achaanak',
    ],
    linesEnglish: [
      'Oddly, kinder warmth sometimes arrives from passing strangers on trains',
      'When familiar faces start weighing closeness against cold favors',
    ],
  },
  {
    title: 'ज़ुबान की मिठास बनाम नीयत',
    titleEnglish: 'Sweet Speech vs True Intent',
    linesHindi: [
      'शक्कर जैसी आवाज़ पर भरोसा करने से पहले थोड़ा वक़्त ज़रूर लेना',
      'क्योंकि कई बार सबसे साफ़ चेतावनी कड़वे सच के अंदर ही छिपी होती है',
    ],
    linesHinglish: [
      'Shakkar jaisi aawaz par bharosa karne se pehle thoda waqt zaroor lena',
      'Kyunki kai baar sabse saaf chetaavani kadwe sach ke andar hi chhipi hoti hai',
    ],
    linesEnglish: [
      'Pause thoughtfully before buying syrup-smooth promises on sight',
      'Oftentimes honest warnings hide right inside plain, unvarnished truth',
    ],
  },
  {
    title: 'मुसीबत में गिनती के दो कदम',
    titleEnglish: 'Two Steady Steps in Crisis',
    linesHindi: [
      'ख़ुशहाली के दिनों में मेरी गली में भी गाड़ियों की लंबी कतार रहती थी',
      'एक छोटा संकट आया तो दरवाज़े पर सिर्फ़ मेरा साया ही खड़ा मिला',
    ],
    linesHinglish: [
      'Khushhaali ke dinon mein meri gali mein bhi gaadiyon ki lambi kataar rehti thi',
      'Ek chhota sankat aaya to darwaze par sirf mera saaya hi khada mila',
    ],
    linesEnglish: [
      'During sunny peak seasons parked cars lined our lane down the block',
      'One modest rainy crunch left only my own shadow standing out front',
    ],
  },
  {
    title: 'अहंकार और स्वार्थ का मेल',
    titleEnglish: 'Self-Interest Paired With Pride',
    linesHindi: [
      'जो लोग कल तक हाथ जोड़कर मदद की भीख माँगते दिखते थे सामने',
      'हालात सुधरते ही वही आवाज़ ऊँची करके बात करने लगे आजकल',
    ],
    linesHinglish: [
      'Jo log kal tak haath jodkar madad ki bheekh maangte dikhte the saamne',
      'Haalaat sudharte hi wahi aawaz oonchi karke baat karne lage aajkal',
    ],
    linesEnglish: [
      'Folks who yesterday leaned softly folding palms asking urgent favors',
      'Raise sharp voices effortlessly the instant their own tide turns smooth',
    ],
  },
  {
    title: 'साफ़ कहना और सुखी रहना',
    titleEnglish: 'Speaking Clearly, Living Peacefully',
    linesHindi: [
      'गलत काम के लिए मुँह पर ना बोलने की आदत डाल लेना बहुत ज़रूरी है',
      'इससे चार मतलबी चेहरे कम ज़रूर होंगे पर चैन पूरा मिलेगा',
    ],
    linesHinglish: [
      'Galat kaam ke liye munh par na bolne ki aadat daal lena bahut zaroori hai',
      'Isse chaar matlabi chehre kam zaroor honge par chain poora milega',
    ],
    linesEnglish: [
      'Learning to deliver one polite direct no upfront saves years of grief',
      'It trims four opportunistic smiles away while doubling daily peace',
    ],
  },
  {
    title: 'दूसरों की मेहनत पर नज़र',
    titleEnglish: 'Eyeing Fruits Without Planting Seeds',
    linesHindi: [
      'फसल काटने के वक़्त तो सारा मोहल्ला हँसिया लेकर पहुँच जाता है खेत में',
      'पर धूप में बीज बोते समय कोई भी पसीना पोंछने नहीं आता पास',
    ],
    linesHinglish: [
      'Fasal kaatne ke waqt to saara mohalla hansiya lekar pahunch jaata hai khet mein',
      'Par dhoop mein beej bote samay koi bhi paseena ponchhne nahin aata paas',
    ],
    linesEnglish: [
      'Come harvest week the whole block shows up grinning with empty baskets',
      'Under June noon heat planting seeds, nobody stops once to wipe sweat',
    ],
  },
  {
    title: 'समझदार इंसान की चुप्पी',
    titleEnglish: 'Quiet Observation of Wise Minds',
    linesHindi: [
      'चुप रहने का मतलब यह मत समझ लेना कि हमें कुछ समझ नहीं आता',
      'हम बस लोगों को उनके असली किरदार में खुलने का मौका देते हैं',
    ],
    linesHinglish: [
      'Chup rehne ka matlab yeh mat samajh lena ki humein kuch samajh nahin aata',
      'Hum bas logon ko unke asli kirdaar mein khulne ka mauka dete hain',
    ],
    linesEnglish: [
      'Never mistake calm silence for blindness around sly room dynamics',
      'Quiet observers simply grant actors ample rope to show true colors',
    ],
  },
  {
    title: 'नक़ली यारी का हल्का वज़न',
    titleEnglish: 'Light Weight of Hollow Camaraderie',
    linesHindi: [
      'सिर्फ़ ग्रुप फ़ोटो में कंधे पर हाथ रखने से कोई अपना नहीं हो जाता',
      'असली यारी तब दिखती है जब कोई तुम्हारे पीछे भी तुम्हारी ढाल बने',
    ],
    linesHinglish: [
      'Sirf group photo mein kandhe par haath rakhne se koi apna nahin ho jaata',
      'Asli yaari tab dikhti hai jab koi tumhaare peechhe bhi tumhaari dhaal bane',
    ],
    linesEnglish: [
      'Draping arms over shoulders for group selfies never seals true brotherhood',
      'Real loyalty stands tall defending your back when you are nowhere near',
    ],
  },
  {
    title: 'दौलत से नहीं खरीदे जाते दिल',
    titleEnglish: 'Money Cannot Buy Sincere Loyalty',
    linesHindi: [
      'पैसों से खरीदी गई भीड़ केवल ताली बजाने तक ही साथ खड़ी दिखती है',
      'सच्चे रिश्ते तो सादगी और वक़्त की कसौटी पर ही जन्म लेते हैं',
    ],
    linesHinglish: [
      'Paison se khareedi gayi bheed kewal taali bajaane tak hi saath khadi dikhti hai',
      'Sachhe rishte to saadgi aur waqt ki kasauti par hi janm lete hain',
    ],
    linesEnglish: [
      'Renting crowds with generous tabs keeps cheering only until checks clear',
      'Lasting devotion grows solely through honest care and shared rainy miles',
    ],
  },
  {
    title: 'स्वार्थ से आज़ाद स्वाभिमान',
    titleEnglish: 'Self-Respect Free From Greed',
    linesHindi: [
      'भले ही मेरी मेज़ पर कम लोग बैठें शाम की चाय के वक़्त यारो',
      'पर किसी भी मतलबी हाथ से मुझे अपना नाम बड़ा नहीं कराना है',
    ],
    linesHinglish: [
      'Bhale hi meri mez par kam log baithein shaam ki chai ke waqt yaaro',
      'Par kisi bhi matlabi haath se mujhe apna naam bada nahin karaana hai',
    ],
    linesEnglish: [
      'Gladly let fewer chairs surround my table over quiet evening tea',
      'I never want favors stamped by opportunistic hands boosting my name',
    ],
  },
  {
    title: 'कड़वे अनुभवों से मिली रोशनी',
    titleEnglish: 'Clear Light From Bitter Lessons',
    linesHindi: [
      'हर धोखे ने मेरे दिल को कठोर नहीं बल्कि आँखों को तेज़ बनाया है',
      'अब दो मिनट की बातचीत में ही इंसान की नीयत समझ आ जाती है',
    ],
    linesHinglish: [
      'Har dhokhe ne mere dil ko kathor nahin balki aankhon ko tez banaaya hai',
      'Ab do minute ki baatcheet mein hi insaan ki neeyat samajh aa jaati hai',
    ],
    linesEnglish: [
      'Letdowns never hardened my heart—they simply sharpened my eyesight',
      'Within two calm minutes of conversation, real motives read crystal clear',
    ],
  },
  {
    title: 'मतलब की चादर ओढ़े रिश्तेदार',
    titleEnglish: 'Kin Wearing Blankets of Convenience',
    linesHindi: [
      'रिश्तेदारी के नाम पर सिर्फ़ फ़ायदा लेने वाले सबसे पहले गायब होते हैं',
      'और जिन्हें हम दूर समझते थे वही वक़्त पर ढाल बनकर खड़े मिलते हैं',
    ],
    linesHinglish: [
      'Rishtedaari ke naam par sirf faayda lene waale sabse pehle gaayab hote hain',
      'Aur jinhein hum door samajhte the wahi waqt par dhaal bankar khade milte hain',
    ],
    linesEnglish: [
      'Relatives dropping by solely for advantage vanish earliest when skies gray',
      'Meanwhile quiet distant acquaintances step up like true shields on cue',
    ],
  },
  {
    title: 'चालाकी के खेल से बाहर',
    titleEnglish: 'Stepping Out of Sly Mind Games',
    linesHindi: [
      'मुझे शतरंज की गंदी चालें चलना कभी पसंद नहीं रहा जीवन में',
      'जहाँ खेल शुरू दिखे, मैं खुद ही अपनी बाज़ी समेटकर उठ जाता हूँ',
    ],
    linesHinglish: [
      'Mujhe shatranj ki gandi chaalein chalna kabhi pasand nahin raha jeevan mein',
      'Jahaan khel shuru dikhe, main khud hi apni baazi sametkar uth jaata hoon',
    ],
    linesEnglish: [
      'Playing crooked social chess never appealed to my peaceful spirit',
      'The second sneaky rules appear, I fold my board cleanly and step out',
    ],
  },
  {
    title: 'सच्चाई की कीमत अकेलापन सही',
    titleEnglish: 'Happy Solo Over Fake Company',
    linesHindi: [
      'हँसी में शामिल होने को तो सारा बाज़ार तैयार बैठा रहता है रोज़',
      'पर सच्चे मन से साथ रहने के लिए कम लोग ही हिम्मत जुटा पाते हैं',
    ],
    linesHinglish: [
      'Hansi mein shaamil hone ko to saara baazaar taiyaar baitha rehta hai roz',
      'Par sachhe mann se saath rehne ke liye kam log hi himmat juta paate hain',
    ],
    linesEnglish: [
      'Whole marketplaces rush over eagerly whenever easy laughter rings out',
      'Yet very few muster quiet courage standing beside you cleanly year-round',
    ],
  },
  {
    title: 'झूठी हमदर्दी से बेहतर साफ़ सच',
    titleEnglish: 'Plain Truth Over Fake Sympathy',
    linesHindi: [
      'झूठी सहानुभूति के मीठे बोल सिर्फ़ कानों को अच्छे लगते हैं दो पल',
      'अगर साथ नहीं दे सकते तो साफ़ मना कर देना ज़्यादा ईमानदार है',
    ],
    linesHinglish: [
      'Jhoothi sahaanubhooti ke meethe bol sirf kaanon ko achhe lagte hain do pal',
      'Agar saath nahin de sakte to saaf mana kar dena zyada imaandaar hai',
    ],
    linesEnglish: [
      'Hollow sympathetic speeches soothe weary ears merely for five minutes',
      'Saying cleanly I cannot help proves far kinder than empty promises',
    ],
  },
  {
    title: 'अपने पैरों पर भरोसा',
    titleEnglish: 'Trusting Your Own Steady Steps',
    linesHindi: [
      'दूसरों के कंधे पर टिककर चलने वाले हमेशा नीचे गिरने से डरते हैं',
      'अपने दम पर चलना सीख लो तो मतलबी दुनिया का डर खत्म हो जाता है',
    ],
    linesHinglish: [
      'Doosron ke kandhe par tikkar chalne waale hamesha neeche girne se darte hain',
      'Apne dam par chalna seekh lo to matlabi duniya ka dar khatam ho jaata hai',
    ],
    linesEnglish: [
      'Leaning every ounce on borrowed shoulders breeds constant fear of dropping',
      'Learn standing steadily on your own boots and user games lose their grip',
    ],
  },
  {
    title: 'सफ़ेद कपड़ों में काले इरादे',
    titleEnglish: 'Spotless Coats, Crooked Intentions',
    linesHindi: [
      'बाहर से बिल्कुल सफ़ेद और शालीन दिखने वाले हर चेहरे पर मत जाना',
      'कई बार सबसे तीखे काँटे गुलाब की पंखुड़ियों के नीचे छिपे मिलते हैं',
    ],
    linesHinglish: [
      'Baahar se bilkul safed aur shaaleen dikhne waale har chehre par mat jaana',
      'Kai baar sabse teekhe kaante gulaab ki pankhudiyon ke neeche chhipe milte hain',
    ],
    linesEnglish: [
      'Never judge full character solely from crisp pressed suits and soft manners',
      'Even sharpest thorns hide gracefully right underneath velvet petals',
    ],
  },
  {
    title: 'वक़्त का सबसे सटीक हिसाब',
    titleEnglish: 'Time Keeps the Exact Ledger',
    linesHindi: [
      'किसी के छल का बदला लेने में अपना समय खराब मत करना कभी',
      'वक़्त का तराज़ू हर किसी को ठीक उसी के कर्मों का फल लौटा देता है',
    ],
    linesHinglish: [
      'Kisi ke chhal ka badla lene mein apna samay kharaab mat karna kabhi',
      'Waqt ka taraazoo har kisi ko theek usi ke karmon ka phal lauta deta hai',
    ],
    linesEnglish: [
      'Never waste precious sunlit mornings plotting revenge on shady players',
      'Time’s steady scale returns every seed straight back to whoever sowed it',
    ],
  },
  {
    title: 'सादगी में बसी असली ताक़त',
    titleEnglish: 'Quiet Power Inside Plain Living',
    linesHindi: [
      'दिखावे की दौड़ में हमने कभी अपनी सादगी को नीलाम नहीं किया',
      'यही कारण है कि मतलबी बाजार में भी हमारा स्वाभिमान सलामत रहा',
    ],
    linesHinglish: [
      'Dikhaawe ki daud mein humne kabhi apni saadgi ko neelaam nahin kiya',
      'Yahi kaaran hai ki matlabi baazaar mein bhi hamaara swaabhimaan salaamat raha',
    ],
    linesEnglish: [
      'In loud races of flashy bragging we never auctioned our plain dignity',
      'That kept our quiet self-respect completely intact amid calculating crowds',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'दौलत के आगे झुकी हुई निगाहें',
    titleEnglish: 'Eyes Bowing Only Before Wealth',
    linesHindi: [
      'जहाँ इज़्ज़त जेब के वज़न के हिसाब से कम या ज़्यादा होती रहे रोज़',
      'समझ लेना वह जगह इंसानियत की नहीं बल्कि व्यापार की मंडी है',
    ],
    linesHinglish: [
      'Jahaan izzat jeb ke wazan ke hisaab se kam ya zyada hoti rahe roz',
      'Samajh lena woh jagah insaaniyat ki nahin balki vyaapaar ki mandi hai',
    ],
    linesEnglish: [
      'Wherever basic respect rises or dips strictly with wallet thickness',
      'Know plainly you walked into a trade floor—not a house of hearts',
    ],
  },
  {
    title: 'अनकही सच्चाई का भारीपन',
    titleEnglish: 'Weight of Unspoken Truth',
    linesHindi: [
      'कभी-कभी सब कुछ साफ दिख रहा होता है सामने हमारी आँखों के',
      'बस रिश्ता बचाने के लिए इंसान चुपचाप अनदेखा करता रहता है बहुत देर तक',
    ],
    linesHinglish: [
      'Kabhi-kabhi sab kuch saaf dikh raha hota hai saamne hamaari aankhon ke',
      'Bas rishta bachaane ke liye insaan chupchaap andekha karta rehta hai bahut der tak',
    ],
    linesEnglish: [
      'Often every clue stands glaringly obvious right in front of our eyes',
      'Yet gentle hearts blink past warnings hoping earnestly to save the tie',
    ],
  },
  {
    title: 'मदद के बाद बदला रवैया',
    titleEnglish: 'Attitude Flipping Once Helped',
    linesHindi: [
      'बुरे वक़्त में हाथ थामकर बाहर निकालने वालों को ही लोग भूल जाते हैं',
      'क्योंकि पुराना कर्ज याद रखना उनके नए गुरूर को चुभने लगता है',
    ],
    linesHinglish: [
      'Bure waqt mein haath thaamkar baahar nikaalne waalon ko hi log bhool jaate hain',
      'Kyunki puraana karz yaad rakhna unke naye guroor ko chubhne lagta hai',
    ],
    linesEnglish: [
      'Folks rescued cleanly from deep mud frequently avoid whoever pulled them out',
      'Remembering that quiet lifeline pinches their shiny newfound pride',
    ],
  },
  {
    title: 'सच्चाई के रास्ते पर शांति',
    titleEnglish: 'Peace Upon the Honest Path',
    linesHindi: [
      'चालाकियाँ दो दिन की चमक ज़रूर दे सकती हैं किसी को भी यहाँ',
      'पर लंबी दौड़ में हमेशा साफ़ नीयत वाला इंसान ही चैन से जीता है',
    ],
    linesHinglish: [
      'Chaalaakiyaan do din ki chamak zaroor de sakti hain kisi ko bhi yahaan',
      'Par lambi daud mein hamesha saaf neeyat waala insaan hi chain se jeeta hai',
    ],
    linesEnglish: [
      'Crafty shortcuts certainly lend two flashy days of easy spotlight',
      'Across long decades only clean-hearted walkers live completely free',
    ],
  },
  {
    title: 'रिश्तों में पारदर्शिता की कमी',
    titleEnglish: 'Missing Transparency in Modern Ties',
    linesHindi: [
      'अब बातों में कम और शर्तों में ज़्यादा जीने लगे हैं लोग आजकल',
      'पहले दिल से बात होती थी, अब हर शब्द सोच-समझकर तौला जाता है',
    ],
    linesHinglish: [
      'Ab baaton mein kam aur sharton mein zyada jeene lage hain log aajkal',
      'Pehle dil se baat hoti thi, ab har shabd soch-samajhkar taula jaata hai',
    ],
    linesEnglish: [
      'Conversations lately carry fewer laughs and far more fine print',
      'Where hearts once spoke freely, every phrase gets weighed first',
    ],
  },
  {
    title: 'बदलते चेहरे और स्थिर मैं',
    titleEnglish: 'Changing Faces, Unchanged Core',
    linesHindi: [
      'दुनिया चाहे जितनी भी मतलबी होती जाए अपने स्वार्थ के लिए रोज़',
      'मैंने अपने भीतर की ईमानदारी को कभी सौदे में नहीं लगाया है',
    ],
    linesHinglish: [
      'Duniya chaahe jitni bhi matlabi hoti jaaye apne swaarth ke liye roz',
      'Maine apne bheetar ki imaandari ko kabhi saude mein nahin lagaaya hai',
    ],
    linesEnglish: [
      'However calculating noisy crowds grow chasing narrow corners',
      'I never put my own quiet honesty up for auction at any counter',
    ],
  },
  {
    title: 'काम के वक्त दिखने वाले साये',
    titleEnglish: 'Shadows Showing Up Only at Work',
    linesHindi: [
      'जब किसी को अपना स्वार्थ साधना हो तो मीठी हँसी अपने आप निकलती है',
      'काम खत्म होते ही वही चेहरे घड़ी देखकर जल्दी निकलने लगते हैं',
    ],
    linesHinglish: [
      'Jab kisi ko apna swaarth saadhna ho to meethi hansi apne aap nikalti hai',
      'Kaam khatam hote hi wahi chehre ghadi dekhkar jaldi nikalne lagte hain',
    ],
    linesEnglish: [
      'When someone needs your help, warm smiles switch on effortlessly',
      'The instant the ink dries, watches get checked and heels turn fast',
    ],
  },
  {
    title: 'भीतर की आवाज़ पर यक़ीन',
    titleEnglish: 'Trusting Quiet Inner Instinct',
    linesHindi: [
      'दिल की पहली चेतावनी अक्सर बिल्कुल सही निकलती है इंसान के बारे में',
      'हम ही उसे झुठलाकर बाद में अफ़सोस की चादर ओढ़ बैठते हैं',
    ],
    linesHinglish: [
      'Dil ki pehli chetaavani aksar bilkul sahi nikalati hai insaan ke baare mein',
      'Hum hi use jhuthlaakar baad mein afsos ki chaadar odh baithte hain',
    ],
    linesEnglish: [
      'That calm first gut whisper about someone’s motives rarely misses',
      'Only when we hush it politely do we buy avoidable headaches later',
    ],
  },
  {
    title: 'चंद सिक्कों में बिके सिद्धांत',
    titleEnglish: 'Principles Sold for Small Change',
    linesHindi: [
      'अफ़सोस तब होता है जब पुराने साथी भी छोटे स्वार्थ में बदल जाएँ',
      'वरना अजनबियों से तो हमने कभी बड़ी उम्मीद रखी ही नहीं थी',
    ],
    linesHinglish: [
      'Afsos tab hota hai jab puraane saathi bhi chhote swaarth mein badal jaayein',
      'Warna ajnabiyon se to humne kabhi badi ummeed rakhi hi nahin thi',
    ],
    linesEnglish: [
      'It stings gently when longtime allies trade loyalty for petty gain',
      'Passing strangers never held heavy expectations from us anyway',
    ],
  },
  {
    title: 'भीड़ से निकलकर सुकून की सांस',
    titleEnglish: 'Breathing Free Outside Fake Crowds',
    linesHindi: [
      'मतलबी महफ़िलों में बैठकर घुटने से बेहतर है अपनी छत पर टहलना',
      'खुली हवा में न कोई बनावट होती है, न किसी के तानों का शोर',
    ],
    linesHinglish: [
      'Matlabi mehfilon mein baithkar ghutne se behtar hai apni chhat par tehalna',
      'Khuli hawa mein na koi banaawat hoti hai, na kisi ke taanon ka shor',
    ],
    linesEnglish: [
      'Strolling cool rooftops alone beats suffocating inside fake parties',
      'Fresh night air carries zero masks and zero backhanded jabs',
    ],
  },
  {
    title: 'हर किसी को मत खोलो दिल की किताब',
    titleEnglish: 'Guard Pages of Your Heart',
    linesHindi: [
      'हर मिलने वाले को अपने दिल की सारी बातें सुना देना ठीक नहीं यार',
      'यहाँ सुनने वाले कम और उनका इस्तेमाल करने वाले ज़्यादा बैठे हैं',
    ],
    linesHinglish: [
      'Har milne waale ko apne dil ki saari baatein suna dena theek nahin yaar',
      'Yahaan sunne waale kam aur unka istemaal karne waale zyada baithe hain',
    ],
    linesEnglish: [
      'Handing your unedited life story to every friendly stranger backfires fast',
      'Far fewer ears listen to care than wait to use details tomorrow',
    ],
  },
  {
    title: 'असली इज़्ज़त काम से मिलती है',
    titleEnglish: 'True Respect Earned Through Craft',
    linesHindi: [
      'मतलबी दुनिया भी एक चीज़ के आगे चुपचाप झुक जाती है हमेशा यारो',
      'वह है तुम्हारी काबिलियत और लगातार चलने वाली ईमानदार मेहनत',
    ],
    linesHinglish: [
      'Matlabi duniya bhi ek cheez ke aage chupchaap jhuk jaati hai hamesha yaaro',
      'Woh hai tumhaari kaabiliyat aur lagaataar chalne waali imaandaar mehnat',
    ],
    linesEnglish: [
      'Even calculating crowds grow quietly respectful before one clear truth',
      'Solid undeniable craft built steadily through clean persistent work',
    ],
  },
  {
    title: 'नक़ली रिश्तों की हल्की डोर',
    titleEnglish: 'Fragile String of Convenient Ties',
    linesHindi: [
      'जो डोर सिर्फ़ फ़ायदे की गाँठ से बँधी हो, वह ज़्यादा दूर नहीं चलती',
      'ज़रा सा मौसम बदलते ही अपने आप खुलकर किनारे जा गिरती है',
    ],
    linesHinglish: [
      'Jo dor sirf faayde ki gaanth se bandhi ho, woh zyada door nahin chalti',
      'Zara sa mausam badalte hi apne aap khulkar kinaare ja girti hai',
    ],
    linesEnglish: [
      'Threads knotted purely around mutual favors rarely survive strong winds',
      'One cool season shift loosens them cleanly right onto the floor',
    ],
  },
  {
    title: 'अपने आप से सच्ची यारी',
    titleEnglish: 'True Friendship With Yourself',
    linesHindi: [
      'जिस दिन इंसान ख़ुद का सबसे अच्छा दोस्त बन जाता है इस दुनिया में',
      'उस दिन मतलबी लोगों के जाने से कोई खालीपन महसूस नहीं होता',
    ],
    linesHinglish: [
      'Jis din insaan khud ka sabse achha dost ban jaata hai is duniya mein',
      'Us din matlabi logon ke jaane se koi khaalipan mehsoos nahin hota',
    ],
    linesEnglish: [
      'The day you become a steady, loyal friend to yourself inside',
      'Fair-weather folks drifting out leaves zero hollow spaces behind',
    ],
  },
  {
    title: 'चेहरे पढ़ने का सरल अनुभव',
    titleEnglish: 'Simple Skill of Reading Intent',
    linesHindi: [
      'कुछ लोग मुँह से कुछ नहीं बोलते, पर उनकी नज़रों की चाल बता देती है',
      'कि वे तुम्हारी खुशी में आए हैं या सिर्फ़ तुम्हारा हाल टटोलने आए हैं',
    ],
    linesHinglish: [
      'Kuch log munh se kuch nahin bolte, par unki nazron ki chaal bata deti hai',
      'Ki we tumhaari khushi mein aaye hain ya sirf tumhaara haal tatolne aaye hain',
    ],
    linesEnglish: [
      'Some visitors reveal very little aloud, yet darting eyes tell all',
      'Whether they came to share your warmth or quietly inspect your cracks',
    ],
  },
  {
    title: 'कम उम्मीद, ज़्यादा सुकून',
    titleEnglish: 'Lower Expectations, Deeper Peace',
    linesHindi: [
      'मेरा दिल तब से बहुत हल्का और शांत रहने लगा है मेरे दोस्त',
      'जब से मैंने दुनिया से अपनी उम्मीदें वापस अपने पास रख ली हैं',
    ],
    linesHinglish: [
      'Mera dil tab se bahut halka aur shaant rehne laga hai mere dost',
      'Jab se maine duniya se apni ummeedein waapas apne paas rakh li hain',
    ],
    linesEnglish: [
      'My chest has stayed remarkably serene and light ever since one shift',
      'Taking back heavy expectations from crowds and placing them gently home',
    ],
  },
  {
    title: 'कड़वाहट से दूर परिपक्व मन',
    titleEnglish: 'Mature Heart Free of Bitterness',
    linesHindi: [
      'दुनिया की मतलबी हरकतें देखकर नफ़रत से भर जाना कोई हल नहीं है',
      'बस मुस्कुराओ, सीखो और अपने काम में आगे निकल जाओ चुपचाप',
    ],
    linesHinglish: [
      'Duniya ki matlabi harkatein dekhkar nafrat se bhar jaana koi hal nahin hai',
      'Bas muskuraao, seekho aur apne kaam mein aage nikal jaao chupchaap',
    ],
    linesEnglish: [
      'Swallowing anger over selfish stunts solves nothing worth keeping',
      'Simply smile calmly, note the lesson, and stride ahead cleanly',
    ],
  },
  {
    title: 'झूठी तारीफ़ से सावधानी',
    titleEnglish: 'Guarded Against Hollow Flattery',
    linesHindi: [
      'मुँह पर भगवान और पीठ पीछे अजनबी बना देने वाले हर जगह हैं',
      'इसीलिए अपने असली दोस्तों की पहचान वक़्त से पहले कर लेनी चाहिए',
    ],
    linesHinglish: [
      'Munh par bhagwaan aur peeth peechhe ajnabi bana dene waale har jagah hain',
      'Isiliye apne asli doston ki pehchaan waqt se pehle kar leni chahiye',
    ],
    linesEnglish: [
      'Folks praising you sky-high upfront before erasing you behind closed doors appear everywhere',
      'Spot your handful of steady real ones early before heavy weather arrives',
    ],
  },
  {
    title: 'आखिर में बचती है इंसानियत',
    titleEnglish: 'Humanity Outlasts Clever Tricks',
    linesHindi: [
      'चालाकियाँ और मतलबपरस्ती कुछ दूर तक तो साथ ले जा सकती हैं तुम्हें',
      'पर आखिरी पड़ाव पर इंसान की सच्ची अच्छाई ही काम आती है यारो',
    ],
    linesHinglish: [
      'Chaalaakiyaan aur matlabparasti kuch door tak to saath le ja sakti hain tumhein',
      'Par aakhiri padaav par insaan ki sachhi achhaai hi kaam aati hai yaaro',
    ],
    linesEnglish: [
      'Sly shortcuts and cold self-interest might carry someone a few easy blocks',
      'Yet at life’s final stretch only genuine kindness holds lasting worth',
    ],
  },
  {
    title: 'साफ़ नीयत का अटूट प्रकाश',
    titleEnglish: 'Unbroken Light of Clean Intent',
    linesHindi: [
      'लोग मतलबी हों तो होने दो, तुम अपनी चमक मत खो देना कहीं भी',
      'अँधेरे में भी सच्चा दीया अपनी रोशनी से अलग ही पहचाना जाता है',
    ],
    linesHinglish: [
      'Log matlabi hon to hone do, tum apni chamak mat kho dena kahin bhi',
      'Andhere mein bhi sachha diya apni roshni se alag hi pehchaana jaata hai',
    ],
    linesEnglish: [
      'Let selfish circles spin as they will—never dim your own warmth',
      'Even across shadowy halls, one honest oil lamp shines unmistakably pure',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'वक़्त से बड़ा कोई उस्ताद नहीं',
    titleEnglish: 'No Teacher Wiser Than Time',
    linesHindi: [
      'दुनिया की मीठी बातें जितनी जल्दी उलझा देती हैं सीधे इंसान को',
      'वक़्त उतनी ही साफ़ तस्वीर बिना बोले सामने रख देता है एक दिन',
    ],
    linesHinglish: [
      'Duniya ki meethi baatein jitni jaldi uljha deti hain seedhe insaan ko',
      'Waqt utni hi saaf tasveer bina bole saamne rakh deta hai ek din',
    ],
    linesEnglish: [
      'As quickly as charming chatter tangles trusting hearts in knots',
      'Passing time calmly lays out the unedited picture with zero words needed',
    ],
  },
  {
    title: 'मतलबी रिश्तों से हल्की दूरी',
    titleEnglish: 'Gentle Space From User Ties',
    linesHindi: [
      'किसी से लड़कर रिश्ता तोड़ने की ज़रूरत नहीं पड़ती समझदार लोगों को',
      'बस मिलने-जुलने का वक़्त कम कर दो, फर्क अपने आप दिख जाता है',
    ],
    linesHinglish: [
      'Kisi se ladkar rishta todne ki zaroorat nahin padti samajhdaar logon ko',
      'Bas milne-julne ka waqt kam kar do, fark apne aap dikh jaata hai',
    ],
    linesEnglish: [
      'Wise folks never need shouting matches to close draining doorways',
      'Simply step back two paces—false ties fade out effortlessly themselves',
    ],
  },
  {
    title: 'बाज़ारू मुस्कान की असलियत',
    titleEnglish: 'Truth Beneath Commercial Smiles',
    linesHindi: [
      'आजकल शहर में हर कोई मुस्कुराते हुए ही जेब काटने की कला जानता है',
      'सीधी-सादी सच्चाई बोलने वालों को तो लोग पुराने ज़माने का कहते हैं',
    ],
    linesHinglish: [
      'Aajkal shehar mein har koi muskuraate hue hi jeb kaatne ki kala jaanta hai',
      'Seedhi-saadi sachhaai bolne waalon ko to log puraane zamaane ka kehte hain',
    ],
    linesEnglish: [
      'Too many around glossy towns practice grinning brightly while keeping tabs',
      'Folks speaking plain old-fashioned honesty get teased as outdated',
    ],
  },
  {
    title: 'खामोश तमाशा देखने वाले',
    titleEnglish: 'Silent Crowd Watching From Fence',
    linesHindi: [
      'जब तुम्हारी तरक्की की गाड़ी रुकती दिखे किसी चढ़ाई पर थोड़ी देर',
      'तो मदद करने से ज़्यादा लोग तमाशा देखने छतों पर चढ़ जाते हैं',
    ],
    linesHinglish: [
      'Jab tumhaari tarakki ki gaadi rukti dikhe kisi chadhaai par thodi der',
      'To madad karne se zyada log tamaasha dekhne chhaton par chadh jaate hain',
    ],
    linesEnglish: [
      'Pause briefly halfway up a steep ridge catching your breath',
      'And far more neighbors climb roofs to watch than walk down to push',
    ],
  },
  {
    title: 'काम के वक्त सगा भाई बनने वाले',
    titleEnglish: 'Instant Sibling When Favor Arises',
    linesHindi: [
      'सालों तक एक कॉल भी न करने वाले अचानक याद करने लगें जब तुम्हें',
      'तो समझ लो किसी फ़ाइल या पैसे का नया काम आने वाला है सामने',
    ],
    linesHinglish: [
      'Saalon tak ek call bhi na karne waale achaanak yaad karne lagein jab tumhein',
      'To samajh lo kisi file ya paise ka naya kaam aane waala hai saamne',
    ],
    linesEnglish: [
      'When someone silent for three winters rings cheerfully out of nowhere',
      'You can safely guess a favor or signature sits two minutes away',
    ],
  },
  {
    title: 'दिल की सलामती सबसे ज़रूरी',
    titleEnglish: 'Protecting Your Own Heart First',
    linesHindi: [
      'दूसरों के स्वार्थ के लिए अपने मन का चैन बार-बार मत लुटाया करो',
      'तुम्हारी भावनाएँ कोई मुफ़्त की सड़क नहीं जिस पर हर कोई चल दे',
    ],
    linesHinglish: [
      'Doosron ke swaarth ke liye apne mann ka chain baar-baar mat lutaaya karo',
      'Tumhaari bhaavnaayein koi muft ki sadak nahin jis par har koi chal de',
    ],
    linesEnglish: [
      'Stop spending your inner peace recklessly fueling somebody else’s agenda',
      'Your open heart is sacred soil—never a free highway for muddy boots',
    ],
  },
  {
    title: 'दो मुँही ज़ुबान से बचाव',
    titleEnglish: 'Guarding Against Forked Tongues',
    linesHindi: [
      'यहाँ एक ही मुँह से कभी दुआ निकलती है और अगले पल बुराई भी',
      'इसीलिए लोगों की बातों को दिल पर नहीं, सिर्फ़ अनुभव पर लिखो',
    ],
    linesHinglish: [
      'Yahaan ek hi munh se kabhi dua nikalati hai aur agle pal buraai bhi',
      'Isiliye logon ki baaton ko dil par nahin, sirf anubhav par likho',
    ],
    linesEnglish: [
      'Identical mouths toss sweet blessings at noon and sharp gossip by tea',
      'Store shifting chatter strictly inside experience—never inside your heart',
    ],
  },
  {
    title: 'असली और बनावटी अपनापन',
    titleEnglish: 'Genuine Warmth vs Plastic Charm',
    linesHindi: [
      'असली अपनापन कभी भी तुम्हारे अच्छे वक़्त की शर्त नहीं रखता है',
      'वह टूटी हुई कुर्सी पर बैठकर भी उतनी ही खुशी से चाय पी लेता है',
    ],
    linesHinglish: [
      'Asli apnapan kabhi bhi tumhaare achhe waqt ki shart nahin rakhta hai',
      'Woh tooti hui kursi par baithkar bhi utni hi khushi se chai pi leta hai',
    ],
    linesEnglish: [
      'Real belonging never demands shiny silverware or spotless weekends',
      'It sips roadside tea happily sitting on a creaky plastic stool beside you',
    ],
  },
  {
    title: 'अपने आप पर अटूट भरोसा',
    titleEnglish: 'Steady Reliance on Yourself',
    linesHindi: [
      'जब मैंने दूसरों से उम्मीदें लगाना कम कर दिया धीरे-धीरे जीवन में',
      'तो हर सुबह पहले से ज़्यादा आसान और खुशगवार लगने लगी मुझे',
    ],
    linesHinglish: [
      'Jab maine doosron se ummeedein lagaana kam kar diya dheere-dheere jeevan mein',
      'To har subah pehle se zyada aasaan aur khushgawaar lagne lagi mujhe',
    ],
    linesEnglish: [
      'Stepping back gently from expecting crowds to act reliably fair',
      'Made every brand-new morning feel remarkably lighter and calmer',
    ],
  },
  {
    title: 'मुँह पर सादगी, अंदर हिसाब',
    titleEnglish: 'Plain Smile Outside, Ledger Inside',
    linesHindi: [
      'कुछ लोग भोले चेहरे के पीछे पूरा हिसाब-किताब लेकर घूमते रहते हैं',
      'वे दोस्ती में भी पहले अपना मुनाफ़ा पक्का करने में लगे रहते हैं',
    ],
    linesHinglish: [
      'Kuch log bhole chehre ke peechhe poora hisaab-kitaab lekar ghoomte rehte hain',
      'We dosti mein bhi pehle apna munaafa pakka karne mein lage rehte hain',
    ],
    linesEnglish: [
      'Behind innocent nods, certain people carry pocket calculators everywhere',
      'Even inside friendship they secretly check returns before pouring tea',
    ],
  },
  {
    title: 'सुकून के लिए कम दोस्त सही',
    titleEnglish: 'Fewer Friends, Richer Serenity',
    linesHindi: [
      'सौ मतलबी नंबर रखने से फ़ोन की बैटरी ही ज़्यादा खर्च होती है बस',
      'दो ऐसे यार काफ़ी हैं जो मुसीबत में बिना कहे दरवाज़े पर मिलें',
    ],
    linesHinglish: [
      'Sau matlabi number rakhne se phone ki battery hi zyada kharch hoti hai bas',
      'Do aise yaar kaafi hain jo museebat mein bina kahe darwaze par milein',
    ],
    linesEnglish: [
      'Saving a hundred fair-weather contacts drains battery far more than helping',
      'Two loyal friends standing at your door unasked are plenty for life',
    ],
  },
  {
    title: 'धूप में साथ छोड़ती परछाईं',
    titleEnglish: 'Even Shadows Leave in Darkness',
    linesHindi: [
      'जब अपनी ही परछाईं अँधेरा होते ही साथ छोड़कर गायब हो जाती है',
      'तो किसी मतलबी इंसान के बदल जाने पर भला क्या हैरानी करनी',
    ],
    linesHinglish: [
      'Jab apni hi parchhaayin andhera hote hi saath chhodkar gaayab ho jaati hai',
      'To kisi matlabi insaan ke badal jaane par bhala kya hairaani karni',
    ],
    linesEnglish: [
      'When even your faithful shadow slips quietly away the instant dusk falls',
      'Why look startled if fair-weather acquaintances drift at nightfall',
    ],
  },
  {
    title: 'नक़ली लोगों से शांत सलाम',
    titleEnglish: 'Polite Nod Past Fake Crowds',
    linesHindi: [
      'न किसी से पुरानी दुश्मनी रखनी है और न ही दिल में ज़हर पालना है',
      'मतलबी लोगों को बस दूर से ही मुस्कुराकर नमस्ते कर देना काफ़ी है',
    ],
    linesHinglish: [
      'Na kisi se puraani dushmani rakhni hai aur na hi dil mein zehar paalna hai',
      'Matlabi logon ko bas door se hi muskuraakar namaste kar dena kaafi hai',
    ],
    linesEnglish: [
      'Zero need to nurse lifelong grudges or carry heavy sourness inside',
      'A polite wave and calm smile from twenty feet away handles everything',
    ],
  },
  {
    title: 'चमकते शहर की असली तस्वीर',
    titleEnglish: 'True Frame Behind Glossy Town',
    linesHindi: [
      'बड़े शहर की चकाचौंध में रिश्तों का रंग थोड़ा फीका पड़ने लगा है',
      'यहाँ पड़ोसी का नाम कम और उसकी गाड़ी का मॉडल ज़्यादा याद रहता है',
    ],
    linesHinglish: [
      'Bade shehar ki chakaachaundh mein rishton ka rang thoda feeka padne laga hai',
      'Yahaan padosi ka naam kam aur uski gaadi ka model zyada yaad rehta hai',
    ],
    linesEnglish: [
      'Beneath neon rush across big avenues, human warmth turns pale sometimes',
      'More people memorize their neighbor’s car badge than their first name',
    ],
  },
  {
    title: 'सच बोलने का साहस',
    titleEnglish: 'Courage Speaking Unvarnished Truth',
    linesHindi: [
      'झूठी महफ़िल की शान बनने से अच्छा है सच बोलकर अलग खड़े रहना',
      'ताली कम मिले तो भी रात को अपने आपसे नज़रें तो मिला सकोगे',
    ],
    linesHinglish: [
      'Jhoothi mehfil ki shaan banne se achha hai sach bolkar alag khade rehna',
      'Taali kam mile to bhi raat ko apne aapse nazrein to mila sakoge',
    ],
    linesEnglish: [
      'Better standing apart speaking truth than starring in hollow rooms',
      'Even with fewer cheers, you meet your own eyes proudly at midnight',
    ],
  },
  {
    title: 'बिना मतलब मिली दुआ की कीमत',
    titleEnglish: 'Value of Unasked Kind Blessing',
    linesHindi: [
      'इस स्वार्थी युग में अगर कोई तुम्हारे लिए बिना किसी लालच के खुश हो',
      'तो उस इंसान को दोनों हाथों से थामकर जीवन भर सँभाल लेना यार',
    ],
    linesHinglish: [
      'Is swaarthi yug mein agar koi tumhaare liye bina kisi laalach ke khush ho',
      'To us insaan ko dono haathon se thaamkar jeevan bhar sambhaal lena yaar',
    ],
    linesEnglish: [
      'In calculating times, if someone cheers cleanly for your joy with zero angle',
      'Hold that rare human gift carefully with both hands for life',
    ],
  },
  {
    title: 'अधूरे वादों की लंबी कतार',
    titleEnglish: 'Long Queue of Forgotten Oaths',
    linesHindi: [
      'वादा करना सबसे सस्ता शौक बन चुका है आज की इस दुनिया में यारो',
      'और निभाने की बारी आते ही सबके ज़रूरी काम निकल आते हैं अचानक',
    ],
    linesHinglish: [
      'Waada karna sabse sasta shauk ban chuka hai aaj ki is duniya mein yaaro',
      'Aur nibhaane ki baari aate hi sabke zaroori kaam nikal aate hain achaanak',
    ],
    linesEnglish: [
      'Tossing grand promises remains the cheapest hobby in modern conversation',
      'Come delivery morning, sudden urgent errands pop up on every phone',
    ],
  },
  {
    title: 'साफ़ दिल वालों की अलग पहचान',
    titleEnglish: 'Clear Mark of Pure-Hearted Folk',
    linesHindi: [
      'लाख मतलबी लोगों के बीच भी साफ दिल वाला अलग ही चमक उठता है',
      'क्योंकि उसकी बातों में बनावट नहीं, बल्कि अपनापन झलकता है सीधा',
    ],
    linesHinglish: [
      'Laakh matlabi logon ke beech bhi saaf dil waala alag hi chamak uthta hai',
      'Kyunki uski baaton mein banaawat nahin, balki apnapan jhalakta hai seedha',
    ],
    linesEnglish: [
      'Even surrounded by a crowd of schemers, an honest soul glows distinct',
      'Zero rehearsed spin—pure natural warmth shines clean through every word',
    ],
  },
  {
    title: 'हालात बदलने पर बदली ज़ुबान',
    titleEnglish: 'Tongue Shifting With Changing Luck',
    linesHindi: [
      'वक़्त बदलते ही जो लोग कल तक तुम्हारी गलतियों पर भी वाह कहते थे',
      'आज वही तुम्हारे सही काम में भी दस कमियाँ निकालने लग जाएँगे',
    ],
    linesHinglish: [
      'Waqt badalte hi jo log kal tak tumhaari galtiyon par bhi waah kehte the',
      'Aaj wahi tumhaare sahi kaam mein bhi das kamiyaan nikaalne lag jaayenge',
    ],
    linesEnglish: [
      'When fortune dips, the exact voices that praised even clumsy drafts yesterday',
      'Suddenly nitpick ten tiny flaws across your finest finished work',
    ],
  },
  {
    title: 'खामोश रहकर जीती हुई शांति',
    titleEnglish: 'Peace Won Through Calm Restraint',
    linesHindi: [
      'हर किसी को जवाब देकर साबित करने में आधी उम्र बीत जाती है यहाँ',
      'अपनी शांति चुनो और मतलबी शोर को पीछे छोड़कर आगे बढ़ जाओ',
    ],
    linesHinglish: [
      'Har kisi ko jawaab dekar saabit karne mein aadhi umr beet jaati hai yahaan',
      'Apni shaanti chuno aur matlabi shor ko peechhe chhodkar aage badh jaao',
    ],
    linesEnglish: [
      'Half a lifetime burns away proving yourself to folks committed to doubting',
      'Choose serene quiet instead and leave self-serving noise miles behind',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'कपड़ों से परे इंसान की परख',
    titleEnglish: 'Looking Deeper Than Polished Suits',
    linesHindi: [
      'बाज़ार में महँगे इत्र से किसी के किरदार की खुशबू नहीं बढ़ती कभी',
      'असली इंसानियत तो संकट में किए गए व्यवहार से नापी जाती है',
    ],
    linesHinglish: [
      'Baazaar mein mehnge itra se kisi ke kirdaar ki khushboo nahin badhti kabhi',
      'Asli insaaniyat to sankat mein kiye gaye vyavahaar se naapi jaati hai',
    ],
    linesEnglish: [
      'Pricey cologne never sweetens crooked intentions by one single ounce',
      'True character gets weighed solely during ordinary stressful moments',
    ],
  },
  {
    title: 'दूरी बनाकर बची हुई गरिमा',
    titleEnglish: 'Dignity Preserved by Healthy Boundaries',
    linesHindi: [
      'जहाँ बार-बार आपको ही झुककर रिश्ता बचाना पड़े बिना गलती के',
      'वहाँ से शालीनता के साथ दो कदम पीछे हट जाना ही आत्मसम्मान है',
    ],
    linesHinglish: [
      'Jahaan baar-baar aapko hi jhukkar rishta bachaana pade bina galti ke',
      'Wahaan se shaaleenta ke saath do kadam peechhe hat jaana hi aatmasammaan hai',
    ],
    linesEnglish: [
      'Wherever keeping peace requires solely you apologizing with zero fault',
      'Stepping cleanly two paces back preserves natural self-respect intact',
    ],
  },
  {
    title: 'मीठे शब्दों की आड़ में वार',
    titleEnglish: 'Soft Words Masking Sharp Edges',
    linesHindi: [
      'हमेशा खुलकर दुश्मनी निभाने वाला इंसान उतना खतरनाक नहीं होता',
      'जितना वह जो दोस्त बनकर हर दिन तुम्हारी राह में काँटे बिछाता है',
    ],
    linesHinglish: [
      'Hamesha khulkar dushmani nibhaane waala insaan utna khatarnaak nahin hota',
      'Jitna woh jo dost bankar har din tumhaari raah mein kaante bichhaata hai',
    ],
    linesEnglish: [
      'Open upfront critics rarely sting nearly as sharply as fake confidants',
      'Who drop smiling hugs daily while quietly strewing pebbles in your path',
    ],
  },
  {
    title: 'स्वार्थ के बाज़ार में अकेला सच',
    titleEnglish: 'Lone Honesty Amid Greedy Crowd',
    linesHindi: [
      'भले ही सच्चाई का रास्ता थोड़ा सुनसान दिखाई देता हो आज की तारीख़ में',
      'पर उस पर चलने वालों के सिर हमेशा आसमान की तरफ़ ऊँचे रहते हैं',
    ],
    linesHinglish: [
      'Bhale hi sachhaai ka raasta thoda sunsaan dikhaayi deta ho aaj ki taareekh mein',
      'Par us par chalne waalon ke sir hamesha aasmaan ki taraf oonche rehte hain',
    ],
    linesEnglish: [
      'The honest avenue may appear quieter and emptier these crowded days',
      'Yet everyone strolling down it carries heads lifted proudly skyward',
    ],
  },
  {
    title: 'मुसीबत में गायब हुए सलाहकार',
    titleEnglish: 'Advisors Vanishing at Crunch Time',
    linesHindi: [
      'आराम की शामों में हर कोई कहेगा—बस आवाज़ देना हम खड़े हैं साथ',
      'पर सच में आवाज़ देने पर आधे से ज़्यादा नंबर व्यस्त आते हैं',
    ],
    linesHinglish: [
      'Aaraam ki shaamon mein har koi kahega—bas aawaz dena hum khade hain saath',
      'Par sach mein aawaz dene par aadhe se zyada number vyast aate hain',
    ],
    linesEnglish: [
      'Over easy weekend snacks everybody vows—just dial once and watch me run',
      'Dial when storm clouds hit and half those lines ring straight to busy',
    ],
  },
  {
    title: 'भीड़ की झूठी हमदर्दी',
    titleEnglish: 'Empty Concern From Passing Crowds',
    linesHindi: [
      'दुनिया आपके दर्द पर सिर्फ़ दो मिनट का अफ़सोस जताना जानती है',
      'उससे लड़कर बाहर निकलने की हिम्मत आपको खुद ही जुटानी पड़ती है',
    ],
    linesHinglish: [
      'Duniya aapke dard par sirf do minute ka afsos jataana jaanti hai',
      'Usse ladkar baahar nikalne ki himmat aapko khud hi jutaani padti hai',
    ],
    linesEnglish: [
      'Crowds effortlessly offer two polite minutes of sighing over hard luck',
      'Rising up cleanly from the dust remains a solo climb nobody runs for you',
    ],
  },
  {
    title: 'समय के साथ साफ़ होती नज़र',
    titleEnglish: 'Vision Clearing Cleanly With Years',
    linesHindi: [
      'उम्र बढ़ने का सबसे अच्छा तोहफ़ा यह है कि अब चेहरों का धुँधलका छँट गया',
      'दो मिनट में समझ आ जाता है कि कौन दिल से आया है और कौन काम से',
    ],
    linesHinglish: [
      'Umr badhne ka sabse achha tohfa yeh hai ki ab chehron ka dhundhalka chhant gaya',
      'Do minute mein samajh aa jaata hai ki kaun dil se aaya hai aur kaun kaam se',
    ],
    linesEnglish: [
      'The finest gift of growing wiser is watching social fog lift clear',
      'Two minutes quickly tell who visits from the heart versus from errands',
    ],
  },
  {
    title: 'कपटी दुनिया से सुरक्षित दूरी',
    titleEnglish: 'Safe Margin From Calculating Minds',
    linesHindi: [
      'अपने घर के दरवाज़े पर इज़्ज़त सबको दो, पर अंदर किसे बुलाना है सोचो',
      'हर कोई तुम्हारे दिल के आँगन में बैठने के काबिल नहीं होता यार',
    ],
    linesHinglish: [
      'Apne ghar ke darwaze par izzat sabko do, par andar kise bulaana hai socho',
      'Har koi tumhaare dil ke aangan mein baithne ke kaabil nahin hota yaar',
    ],
    linesEnglish: [
      'Offer polite courtesy to every guest at the gate, yet guard your living room',
      'Not every smiling caller earns a cozy seat inside your inner life',
    ],
  },
  {
    title: 'मतलब की दोस्ती से बेहतर अकेलापन',
    titleEnglish: 'Clean Solitude Beats Fake Circle',
    linesHindi: [
      'तन्हा चाय पी लेना कहीं ज़्यादा सुकून देता है इस दिल को आजकल',
      'बजाय उन लोगों के बीच बैठने के जो हर बात में स्वार्थ ढूँढते रहें',
    ],
    linesHinglish: [
      'Tanha chai pi lena kahin zyada sukoon deta hai is dil ko aajkal',
      'Bajaay un logon ke beech baithne ke jo har baat mein swaarth dhoondhte rahein',
    ],
    linesEnglish: [
      'Sipping quiet morning tea solo brings far deeper ease nowadays',
      'Than sharing noisy tables where every sentence hunts personal angles',
    ],
  },
  {
    title: 'अहंकार नहीं, आत्मरक्षा है दूरी',
    titleEnglish: 'Distance as Self-Care, Not Pride',
    linesHindi: [
      'जब मैंने फालतू महफ़िलों से दूरी बनानी शुरू की चुपचाप रहकर',
      'तो लोगों ने उसे घमंड कह दिया, जबकि वह सिर्फ़ मेरी मानसिक शांति थी',
    ],
    linesHinglish: [
      'Jab maine faaltu mehfilon se doori banaani shuru ki chupchaap rehkar',
      'To logon ne use ghamand keh diya, jabki woh sirf meri maansik shaanti thi',
    ],
    linesEnglish: [
      'When I quietly stepped back from draining gossip circles for good',
      'Crowds labeled it aloof pride—when really it was plain mental peace',
    ],
  },
  {
    title: 'चमकते चेहरों का बदलता रंग',
    titleEnglish: 'Fickle Shine Around Passing Praise',
    linesHindi: [
      'आजकल की तारीफ़ें भी मोबाइल की बैटरी जैसी ही होती हैं ज़्यादातर',
      'थोड़ा सा काम अटकते ही एक सेकंड में लाल निशान दिखाने लगती हैं',
    ],
    linesHinglish: [
      'Aajkal ki taareefein bhi mobile ki battery jaisi hi hoti hain zyaadatar',
      'Thoda sa kaam atakte hi ek second mein laal nishaan dikhaane lagti hain',
    ],
    linesEnglish: [
      'Modern praise mostly behaves just like weak phone battery bars',
      'One minor delay flashes angry low red warnings before sunset',
    ],
  },
  {
    title: 'भीतर की अच्छाई पर अडिग रहना',
    titleEnglish: 'Standing Firm on Inner Decency',
    linesHindi: [
      'मतलबी लोगों की नकल करके खुद वैसा बन जाना बहुत आसान रास्ता है',
      'मज़ा तो तब है जब तुम दुनिया देखकर भी अपनी सच्चाई न छोड़ो',
    ],
    linesHinglish: [
      'Matlabi logon ki nakal karke khud waisa ban jaana bahut aasaan raasta hai',
      'Maza to tab hai jab tum duniya dekhkar bhi apni sachhaai na chhodo',
    ],
    linesEnglish: [
      'Copying cynical tricks around town takes zero effort whatsoever',
      'Real strength shines when you see every game clearly yet stay clean',
    ],
  },
  {
    title: 'चंद सिक्कों से ऊँचे रिश्ते',
    titleEnglish: 'Bonds Standing Taller Than Coins',
    linesHindi: [
      'जहाँ हर मदद के बाद उम्मीद रखी जाए कि ब्याज समेत लौटेगा सब',
      'वह लेन-देन का सौदा हो सकता है, दिल का रिश्ता बिल्कुल नहीं होता',
    ],
    linesHinglish: [
      'Jahaan har madad ke baad ummeed rakhi jaaye ki byaaj samet lautega sab',
      'Woh len-den ka sauda ho sakta hai, dil ka rishta bilkul nahin hota',
    ],
    linesEnglish: [
      'Wherever every helpful hand expects repayment packed with interest',
      'That belongs in quiet banking ledgers—nowhere near genuine love',
    ],
  },
  {
    title: 'ज़्यादा बोलने से बचा हुआ मौन',
    titleEnglish: 'Calm Silence Saved From Idle Talk',
    linesHindi: [
      'अब मैंने बेकार की बहसों में अपनी ऊर्जा गँवाना बिल्कुल बंद कर दिया',
      'जो समझना चाहते हैं उन्हें एक शब्द काफ़ी है, बाकियों से मुस्कान सही',
    ],
    linesHinglish: [
      'Ab maine bekaar ki behason mein apni oorja ganwaana bilkul band kar diya',
      'Jo samajhna chaahte hain unhein ek shabd kaafi hai, baakiyon se muskaan sahi',
    ],
    linesEnglish: [
      'I completely retired from burning energy inside pointless debates',
      'Kind hearts grasp one quiet word—the rest receive one polite smile',
    ],
  },
  {
    title: 'असली चेहरे दिखाती खाली जेब',
    titleEnglish: 'Empty Pockets Revealing Real Faces',
    linesHindi: [
      'जिस दिन जेब खाली हो जाए उस दिन शहर बहुत ईमानदार दिखता है',
      'क्योंकि तब सिर्फ़ वही दो लोग रुकते हैं जो सच में तुम्हारे अपने होते हैं',
    ],
    linesHinglish: [
      'Jis din jeb khaali ho jaaye us din shehar bahut imaandaar dikhta hai',
      'Kyunki tab sirf wahi do log rukte hain jo sach mein tumhaare apne hote hain',
    ],
    linesEnglish: [
      'The week your pockets run light, the whole noisy town grows remarkably clear',
      'Solely those two souls who genuinely love you stay seated right beside you',
    ],
  },
  {
    title: 'मतलबी लोगों से सीखी आत्मनिर्भरता',
    titleEnglish: 'Self-Reliance Learned From Users',
    linesHindi: [
      'किसी का इंतजार करने की आदत उन्हीं के बदलने से छूट गई मेरी',
      'अब हर मुश्किल का हल खुद अपने दोनों हाथों से निकाल लेता हूँ मैं',
    ],
    linesHinglish: [
      'Kisi ka intezaar karne ki aadat unhin ke badalne se chhoot gayi meri',
      'Ab har mushkil ka hal khud apne dono haathon se nikaal leta hoon main',
    ],
    linesEnglish: [
      'Waiting around for promised rescues vanished cleanly thanks to broken oaths',
      'Now I solve steep knots steadily with my own two able hands',
    ],
  },
  {
    title: 'छल से ऊपर साफ़ किरदार',
    titleEnglish: 'Clean Character Standing Above Deceit',
    linesHindi: [
      'थोड़े दिन के फायदे के लिए किसी का भरोसा तोड़ना बड़ा घाटा है',
      'पैसा तो फिर आ जाता है पर टूटी हुई इज़्ज़त कभी वापस नहीं आती',
    ],
    linesHinglish: [
      'Thode din ke faayde ke liye kisi ka bharosa todna bada ghaata hai',
      'Paisa to phir aa jaata hai par tooti hui izzat kabhi waapas nahin aati',
    ],
    linesEnglish: [
      'Breaking sincere trust for short-term profit spells the steepest loss',
      'Lost cash returns in seasons ahead—shattered honor rarely mends back',
    ],
  },
  {
    title: 'सुकून भरा साफ़ दायरा',
    titleEnglish: 'Peaceful Clean Inner Circle',
    linesHindi: [
      'कम लोग रखो जीवन में पर ऐसे रखो जिन पर आँख बंद कर सको भरोसा',
      'बाकी दुनिया तो बस काम के हिसाब से हेलो-हाय करने के लिए है',
    ],
    linesHinglish: [
      'Kam log rakho jeevan mein par aise rakho jin par aankh band kar sako bharosa',
      'Baaki duniya to bas kaam ke hisaab se hello-hi karne ke liye hai',
    ],
    linesEnglish: [
      'Keep your inner table small and stocked solely with souls you trust blind',
      'Everyone else remains pleasant small talk around busy daytime errands',
    ],
  },
  {
    title: 'बनावटी शहर में असली दिल',
    titleEnglish: 'Genuine Heart Inside Glossy Town',
    linesHindi: [
      'इस मतलबी दुनिया की सबसे अच्छी बात भी एक दिन समझ आ ही जाती है',
      'कि असली खुशी दूसरों को खुश करने में नहीं, खुद के सच्चे होने में है',
    ],
    linesHinglish: [
      'Is matlabi duniya ki sabse achhi baat bhi ek din samajh aa hi jaati hai',
      'Ki asli khushi doosron ko khush karne mein nahin, khud ke sachhe hone mein hai',
    ],
    linesEnglish: [
      'One priceless realization eventually dawns clear amid calculating crowds',
      'True joy never hides in pleasing users—it blooms from living authentically',
    ],
  },
  {
    title: 'आखिर तक टिकने वाला सच',
    titleEnglish: 'Truth Enduring Until the End',
    linesHindi: [
      'स्वार्थ पर बनी हर इमारत एक न एक दिन खुद ही ढह जाती है नीचे',
      'प्यार और ईमानदारी पर रखी नींव सदियों तक सलामत रहती है हमेशा',
    ],
    linesHinglish: [
      'Swaarth par bani har imaarat ek na ek din khud hi dheh jaati hai neeche',
      'Pyar aur imaandari par rakhi neev sadiyon tak salaamat rehti hai hamesha',
    ],
    linesEnglish: [
      'Every glittering tower built on greed inevitably crumbles down inside',
      'Foundations set on honesty and warm care stay standing strong for ages',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'ताक़तवर के पीछे भागती भीड़',
    titleEnglish: 'Crowds Chasing Whoever Holds Clout',
    linesHindi: [
      'जिसकी कुर्सी ऊँची दिखती है वहाँ सलाम करने वालों की लाइन लग जाती है',
      'कुर्सी हटते ही वही लोग रास्ता बदलकर दूसरी गली पकड़ लेते हैं',
    ],
    linesHinglish: [
      'Jiski kursi oonchi dikhti hai wahaan salaam karne waalon ki line lag jaati hai',
      'Kursi hat-te hi wahi log raasta badalkar doosri gali pakad lete hain',
    ],
    linesEnglish: [
      'Tall corner offices gather long lines of eager bows every morning',
      'Once that chair shifts names, identical feet hurry down side alleys',
    ],
  },
  {
    title: 'सच्ची मुस्कान की पहचान',
    titleEnglish: 'Spotting Genuine Unmasked Smiles',
    linesHindi: [
      'बनावटी हँसी सिर्फ़ होठों के किनारों तक ही आकर थम जाती है अक्सर',
      'सच्चा अपनापन हमेशा सामने वाले की आँखों में रोशनी बनकर दिखता है',
    ],
    linesHinglish: [
      'Banaawati hansi sirf honthon ke kinaaron tak hi aakar tham jaati hai aksar',
      'Sachha apnapan hamesha saamne waale ki aankhon mein roshni bankar dikhta hai',
    ],
    linesEnglish: [
      'Rehearsed politeness stops abruptly right at the corners of the mouth',
      'Genuine affection always lights up warmly inside unguarded eyes',
    ],
  },
  {
    title: 'काम निकलने के बाद की खामोशी',
    titleEnglish: 'Quiet Coldness Once Help Finishes',
    linesHindi: [
      'जब मदद चाहिए थी तब हर घंटे मैसेज आता था हाल पूछने के लिए',
      'अब काम पूरा होते ही कई हफ़्तों से कोई निशान नहीं है चैट में',
    ],
    linesHinglish: [
      'Jab madad chahiye thi tab har ghante message aata tha haal poochhne ke liye',
      'Ab kaam poora hote hi kai hafton se koi nishaan nahin hai chat mein',
    ],
    linesEnglish: [
      'Every hour pinged warm check-ins while favors were still needed',
      'Weeks pass now with zero bubbles lighting up the chat screen at all',
    ],
  },
  {
    title: 'मन की शांति से बड़ा कुछ नहीं',
    titleEnglish: 'Nothing Worth Trading Inner Calm',
    linesHindi: [
      'किसी मतलबी इंसान की हाँ में हाँ मिलाकर मन भारी मत करो अपना',
      'साफ़ बात कहकर अलग बैठ जाना लाख गुना हल्का और अच्छा है',
    ],
    linesHinglish: [
      'Kisi matlabi insaan ki haan mein haan milaakar mann bhaari mat karo apna',
      'Saaf baat kehkar alag baith jaana laakh guna halka aur achha hai',
    ],
    linesEnglish: [
      'Stop weighing down your spirit nodding along with self-serving spins',
      'Speaking plain clean truth and sitting comfortably solo feels way lighter',
    ],
  },
  {
    title: 'भरोसा तोड़ने वालों से सबक़',
    titleEnglish: 'Lesson Taken From Broken Promises',
    linesHindi: [
      'गलती उनकी नहीं थी जिन्होंने अपना असली रंग दिखा दिया वक़्त पर',
      'सबक़ तो मेरा था कि हर किसी को दिल के इतने पास क्यों आने दिया',
    ],
    linesHinglish: [
      'Galti unki nahin thi jinhonne apna asli rang dikha diya waqt par',
      'Sabaq to mera tha ki har kisi ko dil ke itne paas kyun aane diya',
    ],
    linesEnglish: [
      'No need blaming folks who merely displayed their genuine habits early',
      'My real lesson was opening inner gates too fast to unproven guests',
    ],
  },
  {
    title: 'हल्की मुस्कान और गहरी परख',
    titleEnglish: 'Easy Smile, Quiet Sharp Judge',
    linesHindi: [
      'अब मैं सामने वाले की तारीफ़ सुनकर हवा में नहीं उड़ने लगता तुरंत',
      'कुछ महीने साथ चलकर देखता हूँ कि मुश्किल में कौन टिकता है',
    ],
    linesHinglish: [
      'Ab main saamne waale ki taareef sunkar hawa mein nahin udne lagta turant',
      'Kuch mahine saath chalkar dekhta hoon ki mushkil mein kaun tikta hai',
    ],
    linesEnglish: [
      'Flattering introductions no longer sweep my feet off solid ground',
      'Watching quiet seasons unfold soon reveals who stands steady in rain',
    ],
  },
  {
    title: 'चालाक दुनिया में सादा दिल',
    titleEnglish: 'Simple Heart in Calculating World',
    linesHindi: [
      'चाहे कितनी भी चालाकियां चलती रहें चारों ओर इस बड़े बाज़ार में',
      'दिल की सादगी बचाकर रखने वाला इंसान ही सबसे सुंदर दिखता है',
    ],
    linesHinglish: [
      'Chaahe kitni bhi chaalaakiyaan chalti rahein chaaron or is bade baazaar mein',
      'Dil ki saadgi bachaakar rakhne waala insaan hi sabse sundar dikhta hai',
    ],
    linesEnglish: [
      'No matter how many shrewd plots spin around busy marketplaces',
      'Anyone guarding an uncomplicated, clean heart shines loveliest of all',
    ],
  },
  {
    title: 'स्वार्थ के आगे टूटे वादे',
    titleEnglish: 'Oaths Snapping Under Selfish Weight',
    linesHindi: [
      'दोस्ती की बड़ी-बड़ी बातें अक्सर छोटी सी शर्त के आगे टूट जाती हैं',
      'जब किसी को अपना फायदा या अपनी सुविधा ज़्यादा प्यारी लगने लगे',
    ],
    linesHinglish: [
      'Dosti ki badi-badi baatein aksar chhoti si shart ke aage toot jaati hain',
      'Jab kisi ko apna faayda ya apni suvidha zyada pyari lagne lage',
    ],
    linesEnglish: [
      'Loud pledges of brotherhood snap effortlessly under small tests',
      'Right when personal comfort or quick gain outweighs shared loyalty',
    ],
  },
  {
    title: 'अकेले सफ़र की मीठी आज़ादी',
    titleEnglish: 'Sweet Freedom of Walking Solo',
    linesHindi: [
      'किसी के हिसाब से मुस्कान या चाल बदलने की मजबूरी नहीं रही अब',
      'अपने छोटे से संसार में मैं खुद ही अपना सबसे सच्चा साथी हूँ',
    ],
    linesHinglish: [
      'Kisi ke hisaab se muskaan ya chaal badalne ki majboori nahin rahi ab',
      'Apne chhote se sansaar mein main khud hi apna sabse sachha saathi hoon',
    ],
    linesEnglish: [
      'Zero pressure remains to tweak my stride or smile pleasing spectators',
      'Inside my peaceful quiet world, my own honest voice stays best ally',
    ],
  },
  {
    title: 'अच्छाई कभी बेकार नहीं जाती',
    titleEnglish: 'Kindness Never Goes Unnoticed',
    linesHindi: [
      'मतलबी लोगों ने भले ही कद्र न की हो तुम्हारे किए हुए कामों की कभी',
      'ऊपर वाला हर एक नेक कदम का सही हिसाब अलग खाते में रखता है',
    ],
    linesHinglish: [
      'Matlabi logon ne bhale hi kadr na ki ho tumhaare kiye hue kaamon ki kabhi',
      'Oopar waala har ek nek kadam ka sahi hisaab alag khaate mein rakhta hai',
    ],
    linesEnglish: [
      'Even if ungrateful callers shrugged off your sincere help quickly',
      'Grace above keeps an exact golden ledger of every kind gesture',
    ],
  },
  {
    title: 'दोहरे मापदंडों की दुनिया',
    titleEnglish: 'World of Shifting Double Standards',
    linesHindi: [
      'खुद करें तो मजबूरी बताकर माफ़ी की उम्मीद रखते हैं सब लोग यहाँ',
      'और हमसे ज़रा सी चूक हो जाए तो पूरी दुनिया को सुनाते फिरते हैं',
    ],
    linesHinglish: [
      'Khud karein to majboori bataakar maafi ki ummeed rakhte hain sab log yahaan',
      'Aur humse zara si chook ho jaaye to poori duniya ko sunaate phirte hain',
    ],
    linesEnglish: [
      'Folks demand instant pardon calling their own slip-ups tough luck',
      'Yet broadcast your slightest misstep loudly across three blocks by noon',
    ],
  },
  {
    title: 'सच्ची नीयत का सुरक्षित क़िला',
    titleEnglish: 'Safe Fortress of Clean Intent',
    linesHindi: [
      'जिसका दिल साफ़ होता है उसे लोगों की साज़िशों से डर नहीं लगता',
      'सच्चाई के किले में अंदर से कोई दरार कभी आ ही नहीं सकती',
    ],
    linesHinglish: [
      'Jiska dil saaf hota hai use logon ki saazishon se dar nahin lagta',
      'Sachhaai ke kile mein andar se koi daraar kabhi aa hi nahin sakti',
    ],
    linesEnglish: [
      'Anyone walking with transparent honesty rarely fears whispered plots',
      'Fortresses built from plain truth develop zero cracks from within',
    ],
  },
  {
    title: 'मुँह पर मीठा, पीठ पीछे सूना',
    titleEnglish: 'Sweet to Face, Empty Behind',
    linesHindi: [
      'आजकल की दुनिया में दूर से सब अपने लगते हैं देखने में हमेशा',
      'पास जाकर परखो तो आधे रिश्ते बस फ़ोटो खींचने भर के दिखते हैं',
    ],
    linesHinglish: [
      'Aajkal ki duniya mein door se sab apne lagte hain dekhne mein hamesha',
      'Paas jaakar parkho to aadhe rishte bas photo kheenchne bhar ke dikhte hain',
    ],
    linesEnglish: [
      'From afar modern circles look packed with warm lifelong hugs',
      'Step closer and half exist solely until party cameras click off',
    ],
  },
  {
    title: 'कड़वे सच का मीठा असर',
    titleEnglish: 'Healthy Sting of Plain Truth',
    linesHindi: [
      'चंद मतलबी लोगों के जाने से जीवन का बगीचा खाली नहीं होता कभी',
      'बल्कि पुराने सूखे पत्ते झड़ने पर ही नई कोंपलों को जगह मिलती है',
    ],
    linesHinglish: [
      'Chand matlabi logon ke jaane se jeevan ka bageecha khaali nahin hota kabhi',
      'Balki puraane sookhe patte jhadne par hi nayi konpalon ko jagah milti hai',
    ],
    linesEnglish: [
      'Watching self-serving guests drift away never leaves your garden bare',
      'Clearing away dry leaves creates sunlit room for real friendships',
    ],
  },
  {
    title: 'भरोसा कमाना आसान नहीं',
    titleEnglish: 'Trust Is Earned, Never Borrowed',
    linesHindi: [
      'चालाकी से किसी को एक बार तो ठगा जा सकता है आसानी से यहाँ',
      'पर दिल जीतकर जीवन भर का साथ कमाना सिर्फ़ सच्चाई से ही होता है',
    ],
    linesHinglish: [
      'Chaalaaki se kisi ko ek baar to thaga ja sakta hai aasaani se yahaan',
      'Par dil jeetkar jeevan bhar ka saath kamaana sirf sachhaai se hi hota hai',
    ],
    linesEnglish: [
      'Smooth tricks can fool a kind soul cleanly once without much work',
      'Earning lifelong loyalty comes strictly through years of steady truth',
    ],
  },
  {
    title: 'शांत मन की सबसे बड़ी जीत',
    titleEnglish: 'Quiet Mind Remains Top Prize',
    linesHindi: [
      'मतलबी लोगों की भीड़ में खुद को उलझाकर समय नष्ट मत करना दोस्त',
      'अपने लक्ष्य और परिवार के साथ मुस्कुराना ही सबसे बड़ी दौलत है',
    ],
    linesHinglish: [
      'Matlabi logon ki bheed mein khud ko uljhaakar samay nasht mat karna dost',
      'Apne lakshya aur parivaar ke saath muskuraana hi sabse badi daulat hai',
    ],
    linesEnglish: [
      'Stop burning precious years tangled inside self-serving drama circles',
      'Smiling warmly with family while building honest work tops every prize',
    ],
  },
  {
    title: 'अधूरे वादे, पूरे सबक़',
    titleEnglish: 'Half-Kept Promises, Complete Lessons',
    linesHindi: [
      'हर टूटे हुए भरोसे ने मुझे थोड़ा और समझदार बना दिया अंदर से',
      'अब मैं कम बोलता हूँ, ज़्यादा सुनता हूँ और खुद पर यक़ीन रखता हूँ',
    ],
    linesHinglish: [
      'Har toote hue bharose ne mujhe thoda aur samajhdaar bana diya andar se',
      'Ab main kam bolta hoon, zyada sunta hoon aur khud par yakeen rakhta hoon',
    ],
    linesEnglish: [
      'Every broken handshake quietly added sharper clarity inside me',
      'Now I speak less, notice calmer patterns, and trust my steady stride',
    ],
  },
  {
    title: 'खामोश रहकर पहचाना गया खेल',
    titleEnglish: 'Silent Eyes Reading the Room',
    linesHindi: [
      'जब मैंने तालियाँ बजाकर सबकी हाँ में हाँ मिलाना बंद कर दिया',
      'तो समझ आया कि आधे रिश्ते बस मेरी चुप्पी से ही चल रहे थे',
    ],
    linesHinglish: [
      'Jab maine taaliyaan bajaakar sabki haan mein haan milaana band kar diya',
      'To samajh aaya ki aadhe rishte bas meri chuppi se hi chal rahe the',
    ],
    linesEnglish: [
      'The second I stopped nodding cheerfully at every unfair slight',
      'I realized half those easy ties survived solely on my quiet silence',
    ],
  },
  {
    title: 'सच्ची दोस्ती की कद्र बढ़ाता समय',
    titleEnglish: 'Time Proving Rare True Friends',
    linesHindi: [
      'मतलबी दुनिया से टकराने का एक बेहद प्यारा फायदा यह होता है',
      'कि जो दो सच्चे दोस्त पास बचते हैं, उनकी क़द्र सौ गुना बढ़ जाती है',
    ],
    linesHinglish: [
      'Matlabi duniya se takraane ka ek behad pyara faayda yeh hota hai',
      'Ki jo do sachhe dost paas bachte hain, unki kadr sau guna badh jaati hai',
    ],
    linesEnglish: [
      'Navigating selfish crowds carries one wonderful unexpected gift',
      'The two loyal friends standing beside you grow a hundredfold dearer',
    ],
  },
  {
    title: 'खुद की अच्छाई पर अभिमान',
    titleEnglish: 'Quiet Pride in Staying Honest',
    linesHindi: [
      'मैंने लाख ठोकरें खाने के बाद भी किसी के साथ छल करना नहीं सीखा',
      'दुनिया कैसी भी रहे, मैं आज भी साफ़ दिल से ही मुस्कुराता हूँ',
    ],
    linesHinglish: [
      'Maine laakh thokrein khaane ke baad bhi kisi ke saath chhal karna nahin seekha',
      'Duniya kaisi bhi rahe, main aaj bhi saaf dil se hi muskuraata hoon',
    ],
    linesEnglish: [
      'Even after plenty of hard bumps, I refused learning sly tricks back',
      'No matter how games play outside, my smile stays clean from within',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'बाहर शोर, भीतर शांति',
    titleEnglish: 'Noise Outside, Calm Peace Inside',
    linesHindi: [
      'लोगों की मतलबी बातों को अब दिल के दरवाज़े के बाहर ही छोड़ देता हूँ',
      'भीतर सिर्फ़ उन्हीं को जगह मिलती है जो बिना शर्त अपनापन लाते हैं',
    ],
    linesHinglish: [
      'Logon ki matlabi baaton ko ab dil ke darwaze ke baahar hi chhod deta hoon',
      'Bheetar sirf unhin ko jagah milti hai jo bina shart apnapan laate hain',
    ],
    linesEnglish: [
      'I leave calculating chatter resting neatly outside my front porch',
      'Inside sits reserved strictly for warmth arriving free of hidden bills',
    ],
  },
  {
    title: 'कामयाबी पर जुड़ते नए रिश्ते',
    titleEnglish: 'Fresh Kinships Sprouting Around Success',
    linesHindi: [
      'कल तक जिन्हें मेरे नाम का उच्चारण भी ठीक से नहीं आता था कभी',
      'मेहनत चमकते ही वही लोग हर महफ़िल में मेरा परिचय देते दिखते हैं',
    ],
    linesHinglish: [
      'Kal tak jinhein mere naam ka uchhaaran bhi theek se nahin aata tha kabhi',
      'Mehnat chamakte hi wahi log har mehfil mein mera parichay dete dikhte hain',
    ],
    linesEnglish: [
      'Folks who mispronounced my first name casually just two winters ago',
      'Now eagerly introduce me across crowded rooms once hard work shines',
    ],
  },
  {
    title: 'साफ़ दिल से बड़ा कोई धन नहीं',
    titleEnglish: 'Clean Heart Exceeds Every Wealth',
    linesHindi: [
      'पैसा और रुतबा कमाने की होड़ में अपनी इंसानियत मत खो देना कहीं',
      'क्योंकि अंत में हर इंसान अपने व्यवहार से ही याद किया जाता है',
    ],
    linesHinglish: [
      'Paisa aur rutba kamaane ki hod mein apni insaaniyat mat kho dena kahin',
      'Kyunki ant mein har insaan apne vyavahaar se hi yaad kiya jaata hai',
    ],
    linesEnglish: [
      'Never misplace basic decency racing upward for wealth and status',
      'In the final chapter everybody gets remembered purely for how they treated others',
    ],
  },
  {
    title: 'स्वार्थ से परे जीवन की सुंदरता',
    titleEnglish: 'Life Beauty Beyond Self-Interest',
    linesHindi: [
      'जिन्होंने सिर्फ़ मतलब से हाथ मिलाया था, उनसे कोई शिकायत नहीं मुझे',
      'ज़िंदगी बहुत छोटी है, इसमें बस सच्चे लोगों के साथ हँसना काफी है',
    ],
    linesHinglish: [
      'Jinhonne sirf matlab se haath milaaya tha, unse koi shikaayat nahin mujhe',
      'Zindagi bahut chhoti hai, ismein bas sachhe logon ke saath hansna kaafi hai',
    ],
    linesEnglish: [
      'I carry zero lingering grudges toward folks who shook hands solely for gain',
      'Life runs far too short—laughing beside real friends fills every need',
    ],
  },
  {
    title: 'हर चेहरे के पीछे अपनी कहानी',
    titleEnglish: 'Discernment Without Cruelty',
    linesHindi: [
      'मतलबी दुनिया से बचना ज़रूरी है पर हर किसी पर शक करना भी ठीक नहीं',
      'बस आँखें खुली रखो और जो सही मिले, उसका दिल से सम्मान करो',
    ],
    linesHinglish: [
      'Matlabi duniya se bachna zaroori hai par har kisi par shak karna bhi theek nahin',
      'Bas aankhein khuli rakho aur jo sahi mile, uska dil se sammaan karo',
    ],
    linesEnglish: [
      'Guarding against users matters, yet suspecting every soul dims life gray',
      'Keep clear eyes open and honor genuine kindness warmly when it meets you',
    ],
  },
  {
    title: 'चालाकी से ज़्यादा प्यारी सादगी',
    titleEnglish: 'Simplicity Lovelier Than Sly Games',
    linesHindi: [
      'हर बात में मतलब ढूँढने वाले अक्सर मन का सुकून खो बैठते हैं',
      'सरल रहकर जीने वाले कम में भी पूरी खुशी महसूस कर लेते हैं',
    ],
    linesHinglish: [
      'Har baat mein matlab dhoondhne waale aksar mann ka sukoon kho baithte hain',
      'Saral rehkar jeene waale kam mein bhi poori khushi mehsoos kar lete hain',
    ],
    linesEnglish: [
      'People dissecting every gesture for angles rarely enjoy one peaceful night',
      'Simple honest souls savor full joy even inside modest quiet rooms',
    ],
  },
  {
    title: 'बदलते रिश्तों के बीच खुद से प्यार',
    titleEnglish: 'Loving Yourself Amid Shifting Ties',
    linesHindi: [
      'लोग बदल जाएँ तो खुद को कमतर आँकने की भूल मत करना कभी भी',
      'हीरे की कीमत उसकी जगह बदलने से कभी कम नहीं होती मेरे दोस्त',
    ],
    linesHinglish: [
      'Log badal jaayein to khud ko kamtar aankne ki bhool mat karna kabhi bhi',
      'Heere ki keemat uski jagah badalne se kabhi kam nahin hoti mere dost',
    ],
    linesEnglish: [
      'Never shrink your self-worth just because shallow people drift away',
      'A real diamond loses zero brilliance shifting into different light',
    ],
  },
  {
    title: 'अपने रास्तों की खुद रखवाली',
    titleEnglish: 'Guarding Your Own Peace Daily',
    linesHindi: [
      'दुनिया का नियम समझ आ जाए तो फिर किसी से कोई गिला नहीं रहता',
      'बस अपने रास्ते की रखवाली खुद करके मुस्कुराते हुए आगे बढ़ो',
    ],
    linesHinglish: [
      'Duniya ka niyam samajh aa jaaye to phir kisi se koi gila nahin rehta',
      'Bas apne raaste ki rakhwaali khud karke muskuraate hue aage badho',
    ],
    linesEnglish: [
      'Once you understand how selfish games spin, resentment melts away',
      'Simply protect your own calm lane and keep stepping forward smiling',
    ],
  },
  {
    title: 'असली अमीरी दिल की होती है',
    titleEnglish: 'True Richness Lives Inside Heart',
    linesHindi: [
      'मतलबी दौड़ में जीतने से भी बड़ी जीत होती है शांत इंसान बने रहना',
      'क्योंकि दिल की अमीरी के आगे दुनिया की हर चमक छोटी लगती है',
    ],
    linesHinglish: [
      'Matlabi daud mein jeetne se bhi badi jeet hoti hai shaant insaan bane rehna',
      'Kyunki dil ki ameeri ke aage duniya ki har chamak chhoti lagti hai',
    ],
    linesEnglish: [
      'Greater than winning calculating races is staying grounded and kind',
      'Every glittery trophy looks modest beside a rich, untroubled heart',
    ],
  },
  {
    title: 'चंद सच्चे लोगों का अनमोल संसार',
    titleEnglish: 'Priceless World of Few True Souls',
    linesHindi: [
      'लाख स्वार्थी चेहरों के बाद भी यह दुनिया अभी भी खूबसूरत बनी है',
      'क्योंकि कुछ निस्वार्थ लोग आज भी बिना शर्त मुस्कुराकर साथ खड़े हैं',
    ],
    linesHinglish: [
      'Laakh swaarthi chehron ke baad bhi yeh duniya abhi bhi khoobsurat bani hai',
      'Kyunki kuch niswaarth log aaj bhi bina shart muskuraakar saath khade hain',
    ],
    linesEnglish: [
      'Despite countless self-serving games, this world remains wonderfully bright',
      'Because a handful of selfless friends still stand smiling beside you free',
    ],
  },
];

export const UNIQUE_MATLABI_DUNIYA_170 = buildUniqueShayaris(
  'matlabi-duniya',
  'Matlabi Duniya Shayari (मतलबी दुनिया शायरी)',
  '🎭',
  31,
  MATLABI_DUNIYA_ENTRIES
);
