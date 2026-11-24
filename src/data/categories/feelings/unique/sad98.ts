import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const SAD_ENTRIES: UniqueShayariEntry[] = [
  {
    title: 'अनसुनी चीख़ों का बोझ',
    titleEnglish: 'Weight of Unheard Cries',
    linesHindi: [
      'दिन भर लोगों के सामने हँसकर बात करता रहा',
      'रात हुई तो तकिया भी मेरे आँसुओं से भीग गया',
    ],
    linesHinglish: [
      'Din bhar logon ke saamne hanskar baat karta raha',
      'Raat hui to takiya bhi mere aansuon se bheeg gaya',
    ],
    linesEnglish: [
      'All day I kept smiling and talking in front of people',
      'When night fell, even my pillow grew soaked with tears',
    ],
  },
  {
    title: 'अधूरे वादों की चुभन',
    titleEnglish: 'Sting of Unkept Promises',
    linesHindi: [
      'तुमने तो कहा था हर हाल में साथ निभाओगे',
      'ज़रा सी हवा क्या बदली, तुमने तो रास्ता ही मोड़ लिया',
    ],
    linesHinglish: [
      'Tumne to kaha tha har haal mein saath nibhaoge',
      'Zara si hawa kya badli, tumne to raasta hi mod liya',
    ],
    linesEnglish: [
      'You had promised to stand by me through every storm',
      'The moment the wind shifted slightly, you changed your path',
    ],
  },
  {
    title: 'खाली कमरे की गूँज',
    titleEnglish: 'Echo of an Empty Room',
    linesHindi: [
      'कमरे की दीवारें आज भी तेरा नाम पुकारती हैं',
      'शायद इन्हें भी ख़बर नहीं कि तुम अब लौटोगे नहीं',
    ],
    linesHinglish: [
      'Kamre ki deewarein aaj bhi tera naam pukaarti hain',
      'Shayad inhein bhi khabar nahin ki tum ab lautoge nahin',
    ],
    linesEnglish: [
      'The walls of this room still call out your name',
      'Perhaps even they do not know that you will never return',
    ],
  },
  {
    title: 'भरोसा टूटने की आवाज़',
    titleEnglish: 'Sound of Shattered Trust',
    linesHindi: [
      'काँच टूटे तो शोर पूरे मोहल्ले को सुनाई देता है',
      'पर दिल टूटे तो अंदर ही अंदर सब ख़त्म हो जाता है',
    ],
    linesHinglish: [
      'Kaanch toote to shor poore mohalle ko sunai deta hai',
      'Par dil toote to andar hi andar sab khatam ho jaata hai',
    ],
    linesEnglish: [
      'When glass breaks, the crash echoes down the entire street',
      'But when a heart breaks, everything ends silently within',
    ],
  },
  {
    title: 'अजनबी बनता अपना',
    titleEnglish: 'A Loved One Turning Stranger',
    linesHindi: [
      'सबसे ज़्यादा तकलीफ़ तब होती है इस ज़िंदगी में',
      'जब अपनी ही जान कहकर बुलाने वाला अनजान बन जाए',
    ],
    linesHinglish: [
      'Sabse zyada takleef tab hoti hai is zindagi mein',
      'Jab apni hi jaan kehkar bulaane wala anjaan ban jaaye',
    ],
    linesEnglish: [
      'The deepest ache in this life happens when',
      'The one who once called you their soul turns into a stranger',
    ],
  },
  {
    title: 'भीगी पलकों के पीछे की सच्चाई',
    titleEnglish: 'Truth Behind Wet Eyelashes',
    linesHindi: [
      'लोग पूछते हैं आजकल आँखें लाल क्यों रहती हैं',
      'अब उन्हें कैसे बताऊँ कि नींद से मेरा रिश्ता टूट गया',
    ],
    linesHinglish: [
      'Log poochhte hain aajkal aankhein laal kyun rehti hain',
      'Ab unhein kaise bataun ki neend se mera rishta toot gaya',
    ],
    linesEnglish: [
      'People ask why my eyes stay red these days',
      'How do I tell them my bond with sleep has broken apart',
    ],
  },
  {
    title: 'चैट में दफ़न अल्फ़ाज़',
    titleEnglish: 'Words Buried in Unsent Chats',
    linesHindi: [
      'कितनी ही बार टाइप करके मिटा दिया हाल-ए-दिल',
      'डर था कहीं तुम्हें मेरी फ़िक्र भी बोझ न लगने लगे',
    ],
    linesHinglish: [
      'Kitni hi baar type karke mita diya haal-e-dil',
      'Dar tha kahin tumhein meri fikr bhi bojh na lagne lage',
    ],
    linesEnglish: [
      'Countless times I typed out my hearts state and erased it',
      'Fearing my concern might begin to feel like a burden to you',
    ],
  },
  {
    title: 'बदले हुए लहजे का दर्द',
    titleEnglish: 'Pain of a Changed Tone',
    linesHindi: [
      'बात तो आज भी होती है कभी-कभार उनसे',
      'बस उस आवाज़ में अब पहले जैसा अपनापन नहीं रहा',
    ],
    linesHinglish: [
      'Baat to aaj bhi hoti hai kabhi-kabhaar unse',
      'Bas us aawaaz mein ab pehle jaisa apnapan nahin raha',
    ],
    linesEnglish: [
      'I still speak to them occasionally even today',
      'Only that warmth of belonging is no longer in their voice',
    ],
  },
  {
    title: 'वफ़ा की सज़ा',
    titleEnglish: 'Punishment for Loyalty',
    linesHindi: [
      'हमने हर मोड़ पर सिर्फ़ उनकी खुशी को चुना था',
      'शायद यही हमारी सबसे बड़ी ख़ता बन गई उनके लिए',
    ],
    linesHinglish: [
      'Humne har mod par sirf unki khushi ko chuna tha',
      'Shayad yahi hamaari sabse badi khata ban gayi unke liye',
    ],
    linesEnglish: [
      'At every turn I chose only their happiness above all',
      'Perhaps that became my biggest mistake in their eyes',
    ],
  },
  {
    title: 'बिखरे सपनों का मलबा',
    titleEnglish: 'Rubble of Broken Dreams',
    linesHindi: [
      'बड़े अरमानों से सजाया था एक छोटा सा आशियाना',
      'एक गलतफ़हमी के झोंके ने सब कुछ उजाड़ दिया',
    ],
    linesHinglish: [
      'Bade armaanon se sajaya tha ek chhota sa aashiyaana',
      'Ek galatfehmi ke jhonke ne sab kuch ujaad diya',
    ],
    linesEnglish: [
      'With tender hopes I had decorated a small nest of dreams',
      'A single gust of misunderstanding tore it all down',
    ],
  },
  {
    title: 'झूठी तसल्ली का सहारा',
    titleEnglish: 'Shelter of False Consolation',
    linesHindi: [
      'रोते हुए दिल को रोज़ झूठ कहकर सुला देता हूँ',
      'कि कल सवेरे सब कुछ फिर से पहले जैसा हो जाएगा',
    ],
    linesHinglish: [
      'Rote hue dil ko roz jhooth kehkar sula deta hoon',
      'Ki kal savere sab kuch phir se pehle jaisa ho jaayega',
    ],
    linesEnglish: [
      'Every night I lull my weeping heart to sleep with a lie',
      'Telling it that tomorrow morning everything will be as before',
    ],
  },
  {
    title: 'अनकहा अलविदा',
    titleEnglish: 'An Unspoken Goodbye',
    linesHindi: [
      'जाते वक़्त तुमने मुड़कर एक नज़र देखा भी नहीं',
      'और हम आज भी उसी मोड़ पर खड़े इंतज़ार कर रहे हैं',
    ],
    linesHinglish: [
      'Jaate waqt tumne mudkar ek nazar dekha bhi nahin',
      'Aur hum aaj bhi usi mod par khade intezaar kar rahe hain',
    ],
    linesEnglish: [
      'While leaving, you did not even glance back once',
      'And here I stand at that same corner waiting to this day',
    ],
  },
  {
    title: 'टूटी उम्मीद की परछाईं',
    titleEnglish: 'Shadow of a Broken Hope',
    linesHindi: [
      'जिस पेड़ की छाँव में सुकून ढूँढा था हमने',
      'वही सूखे पत्ते बनकर हमारे पैरों में बिखर गया',
    ],
    linesHinglish: [
      'Jis ped ki chhaanv mein sukoon dhoondha tha humne',
      'Wahi sookhe patte bankar hamaare pairon mein bikhar gaya',
    ],
    linesEnglish: [
      'The very tree whose shade I sought for comfort',
      'Scattered as dry autumn leaves beneath my feet',
    ],
  },
  {
    title: 'मीठे शब्दों का ज़हर',
    titleEnglish: 'Poison Behind Sweet Words',
    linesHindi: [
      'दुनिया की ठोकरें तो फिर भी सँभल जाती हैं',
      'पर अपनों के दिए ज़ख्म उम्र भर हरे रहते हैं',
    ],
    linesHinglish: [
      'Duniya ki thokrein to phir bhi sanbhal jaati hain',
      'Par apnon ke diye zakhm umar bhar hare rehte hain',
    ],
    linesEnglish: [
      'Blows from the outside world heal sooner or later',
      'But wounds given by loved ones stay raw for a lifetime',
    ],
  },
  {
    title: 'अधूरी कहानी का ग़म',
    titleEnglish: 'Sorrow of an Unfinished Tale',
    linesHindi: [
      'हमने तो पूरी ज़िंदगी साथ चलने की सोची थी',
      'तुम दो कदम चलकर ही थक गए, ये पता न था',
    ],
    linesHinglish: [
      'Humne to poori zindagi saath chalne ki sochi thi',
      'Tum do kadam chalkar hi thak gaye, ye pata na tha',
    ],
    linesEnglish: [
      'I had planned on walking beside you for an entire lifetime',
      'Little did I know you would tire after just two steps',
    ],
  },
  {
    title: 'सन्नाटे से दोस्ती',
    titleEnglish: 'Friendship With Silence',
    linesHindi: [
      'शोर भरी महफ़िल में भी अब दिल घबराने लगा है',
      'जब से तेरा साथ छूटा, सन्नाटा अपना सा लगता है',
    ],
    linesHinglish: [
      'Shor bhari mehfil mein bhi ab dil ghabrane laga hai',
      'Jab se tera saath chhoota, sannata apna sa lagta hai',
    ],
    linesEnglish: [
      'Even in lively gatherings my heart feels uneasy now',
      'Ever since you left, silence feels like my only kin',
    ],
  },
  {
    title: 'बिना क़सूर की सज़ा',
    titleEnglish: 'Punishment Without a Fault',
    linesHindi: [
      'मेरी ख़ता बस इतनी थी कि हद से ज़्यादा चाहा तुम्हें',
      'और तुमने उसी चाहत को मेरी कमज़ोरी समझ लिया',
    ],
    linesHinglish: [
      'Meri khata bas itni thi ki had se zyada chaaha tumhein',
      'Aur tumne usi chahat ko meri kamzori samajh liya',
    ],
    linesEnglish: [
      'My only fault was loving you beyond every limit',
      'And you mistook that devotion for my weakness',
    ],
  },
  {
    title: 'सूने आँगन की उदासी',
    titleEnglish: 'Gloom of a Deserted Courtyard',
    linesHindi: [
      'कभी जहाँ कहकहों की बारिश हुआ करती थी',
      'आज वहाँ सिर्फ़ गुज़रे वक़्त की धूल जमी है',
    ],
    linesHinglish: [
      'Kabhi jahaan kehkahon ki baarish hua karti thi',
      'Aaj wahaan sirf guzre waqt ki dhool jami hai',
    ],
    linesEnglish: [
      'Where laughter once poured down like monsoon rain',
      'Only the dust of bygone days settles quietly today',
    ],
  },
  {
    title: 'बेवजह की दूरी',
    titleEnglish: 'Needless Distance',
    linesHindi: [
      'एक बार पूछ तो लेते मेरी ख़ामोशी का सबब',
      'शायद बात इतनी आगे कभी बढ़ती ही नहीं',
    ],
    linesHinglish: [
      'Ek baar poochh to lete meri khaamoshi ka sabab',
      'Shayad baat itni aage kabhi badhti hi nahin',
    ],
    linesEnglish: [
      'If only you had asked once why I fell quiet',
      'Perhaps things would never have drifted this far apart',
    ],
  },
  {
    title: 'आँसुओं की क़ीमत',
    titleEnglish: 'Worth of Tears',
    linesHindi: [
      'जिनके लिए हम पूरी दुनिया से लड़ बैठे थे',
      'उन्होंने ही एक पल में हमें पराया साबित कर दिया',
    ],
    linesHinglish: [
      'Jinke liye hum poori duniya se lad baithe the',
      'Unhone hi ek pal mein humein paraya saabit kar diya',
    ],
    linesEnglish: [
      'The ones for whom I stood up against the entire world',
      'Proved me an outsider in just a single heartbeat',
    ],
  },
  {
    title: 'दिल की वीरानी',
    titleEnglish: 'Desolation of the Heart',
    linesHindi: [
      'बाहर से बिल्कुल ठीक दिखता हूँ हर किसी को',
      'पर अंदर से कोई टूटा हुआ मकान सा बन गया हूँ',
    ],
    linesHinglish: [
      'Baahar se bilkul theek dikhta hoon har kisi ko',
      'Par andar se koi toota hua makaan sa ban gaya hoon',
    ],
    linesEnglish: [
      'From the outside I appear completely fine to everyone',
      'Yet inside I feel like a crumbling, abandoned house',
    ],
  },
  {
    title: 'वक़्त की बेरुख़ी',
    titleEnglish: 'Indifference of Time',
    linesHindi: [
      'हमने सोचा था वक़्त हर मर्ज़ की दवा होता है',
      'पर कुछ दर्द ऐसे हैं जो वक़्त के साथ और बढ़ते हैं',
    ],
    linesHinglish: [
      'Humne socha tha waqt har marz ki dawa hota hai',
      'Par kuch dard aise hain jo waqt ke saath aur badhte hain',
    ],
    linesEnglish: [
      'I used to think time heals every ailment eventually',
      'Yet some aches only sharpen as the seasons pass',
    ],
  },
  {
    title: 'तड़पता हुआ एहसास',
    titleEnglish: 'An Aching Emotion',
    linesHindi: [
      'तुम्हें ख़ुश देखकर भी आँख नम हो जाती है मेरी',
      'क्योंकि उस ख़ुशी की वजह अब कोई और है',
    ],
    linesHinglish: [
      'Tumhein khush dekhkar bhi aankh nam ho jaati hai meri',
      'Kyunki us khushi ki wajah ab koi aur hai',
    ],
    linesEnglish: [
      'Even seeing you happy fills my eyes with tears',
      'Because someone else is the reason behind that smile now',
    ],
  },
  {
    title: 'अधूरी दुआ का दर्द',
    titleEnglish: 'Pain of an Unanswered Prayer',
    linesHindi: [
      'हमने हर सज़दे में सिर्फ़ तुम्हें ही माँगा था',
      'पर शायद मेरी दुआओं में ही कोई कमी रह गई',
    ],
    linesHinglish: [
      'Humne har sajde mein sirf tumhein hi maanga tha',
      'Par shayad meri duaon mein hi koi kami reh gayi',
    ],
    linesEnglish: [
      'In every prayer I had asked only for you',
      'Perhaps my devotion itself fell short somehow',
    ],
  },
  {
    title: 'ख़ुद से नाराज़गी',
    titleEnglish: 'Anger With Myself',
    linesHindi: [
      'शिकायत तुमसे कम और ख़ुद से ज़्यादा है मुझे',
      'इतनी आसानी से किसी पर एतबार क्यों कर लिया',
    ],
    linesHinglish: [
      'Shikayat tumse kam aur khud se zyada hai mujhe',
      'Itni aasaani se kisi par aitbaar kyun kar liya',
    ],
    linesEnglish: [
      'My grievance is less with you and more with myself',
      'Why did I place my trust in someone so effortlessly',
    ],
  },
  {
    title: 'बिछड़ने का मौसम',
    titleEnglish: 'Season of Parting',
    linesHindi: [
      'पतझड़ ने तो सिर्फ़ पेड़ों से पत्ते गिराए थे',
      'तुम्हारे जाने ने मेरी ज़िंदगी की हरियाली छीन ली',
    ],
    linesHinglish: [
      'Patjhad ne to sirf pedon se patte giraaye the',
      'Tumhaare jaane ne meri zindagi ki hariyali chheen li',
    ],
    linesEnglish: [
      'Autumn only stripped the leaves from the trees',
      'Your departure stole every shade of green from my life',
    ],
  },
  {
    title: 'मुस्कान के पीछे का ग़म',
    titleEnglish: 'Grief Behind the Smile',
    linesHindi: [
      'चेहरे की हँसी देखकर कोई अंदाज़ा नहीं लगा पाया',
      'कि सीने में कितना बड़ा समंदर छुपाए बैठा हूँ',
    ],
    linesHinglish: [
      'Chehre ki hansi dekhkar koi andaaza nahin laga paaya',
      'Ki seene mein kitna bada samandar chhupaaye baitha hoon',
    ],
    linesEnglish: [
      'Seeing the smile on my face, nobody could ever guess',
      'How vast an ocean of sorrow I hold hidden inside my chest',
    ],
  },
  {
    title: 'बेरंग शामें',
    titleEnglish: 'Colorless Evenings',
    linesHindi: [
      'सूरज ढलते ही मन भारी सा होने लगता है',
      'तेरे बिना हर शाम बिल्कुल बेरंग गुज़रती है',
    ],
    linesHinglish: [
      'Sooraj dhalte hi man bhaari sa hone lagta hai',
      'Tere bina har shaam bilkul berang guzarti hai',
    ],
    linesEnglish: [
      'As soon as the sun sets, my heart begins to feel heavy',
      'Without you, every evening passes completely drained of color',
    ],
  },
  {
    title: 'अधूरा सफ़र',
    titleEnglish: 'Incomplete Journey',
    linesHindi: [
      'आधे रास्ते में हाथ छोड़ देना ही था अगर',
      'तो सफ़र की शुरुआत में इतने ख्वाब क्यों दिखाए',
    ],
    linesHinglish: [
      'Aadhe raaste mein haath chhod dena hi tha agar',
      'To safar ki shuruaat mein itne khwaab kyun dikhaaye',
    ],
    linesEnglish: [
      'If you were always going to let go halfway through',
      'Why show me such vivid dreams at the start of the road',
    ],
  },
  {
    title: 'दिल की सिसकी',
    titleEnglish: 'Quiet Sob of the Heart',
    linesHindi: [
      'ज़ोर से रोने की इजाज़त भी नहीं देता ये ज़माना',
      'इसलिए बंद कमरों में सिसकियों से बात कर लेते हैं',
    ],
    linesHinglish: [
      'Zor se rone ki ijaazat bhi nahin deta ye zamaana',
      'Isliye band kamron mein siskiyon se baat kar lete hain',
    ],
    linesEnglish: [
      'This world does not even allow one to weep out loud',
      'So behind closed doors I converse with my quiet sobs',
    ],
  },
  {
    title: 'बदला हुआ वक़्त',
    titleEnglish: 'Changed Times',
    linesHindi: [
      'कल तक जो मेरे बिना एक पल नहीं रहते थे',
      'आज उन्हें मेरी ख़बर लेने की भी फ़ुर्सत नहीं',
    ],
    linesHinglish: [
      'Kal tak jo mere bina ek pal nahin rehte the',
      'Aaj unhein meri khabar lene ki bhi fursat nahin',
    ],
    linesEnglish: [
      'Those who could not spend a moment without me yesterday',
      'Do not even have a spare second to ask how I am today',
    ],
  },
  {
    title: 'दर्द का समंदर',
    titleEnglish: 'Ocean of Ache',
    linesHindi: [
      'कागज़ छोटा पड़ जाता है लिखने बैठूँ तो',
      'इतना गहरा दर्द दे गए हो तुम जाते-जाते',
    ],
    linesHinglish: [
      'Kaagaz chhota pad jaata hai likhne baithoon to',
      'Itna gehra dard de gaye ho tum jaate-jaate',
    ],
    linesEnglish: [
      'Every sheet of paper falls short whenever I sit to write',
      'So deep is the pain you left behind while walking away',
    ],
  },
  {
    title: 'ख़ाली हाथ लौटना',
    titleEnglish: 'Returning Empty-Handed',
    linesHindi: [
      'सब कुछ लुटा दिया जिस रिश्ते को बचाने के लिए',
      'आख़िर में वही रिश्ता मेरे हाथ से फिसल गया',
    ],
    linesHinglish: [
      'Sab kuch luta diya jis rishte ko bachaane ke liye',
      'Aakhir mein wahi rishta mere haath se phisal gaya',
    ],
    linesEnglish: [
      'I gave up everything I owned to save that bond',
      'In the end, that very bond slipped right through my fingers',
    ],
  },
  {
    title: 'ठंडी हवा और तन्हा मन',
    titleEnglish: 'Cold Breeze and Heavy Heart',
    linesHindi: [
      'सर्द हवा जब खिड़की से अंदर आती है',
      'तो तुम्हारी कमी दिल को चीर कर रख देती है',
    ],
    linesHinglish: [
      'Sard hawa jab khidki se andar aati hai',
      'To tumhaari kami dil ko cheer kar rakh deti hai',
    ],
    linesEnglish: [
      'When the chilly breeze blows in through the window',
      'Your absence cuts straight across my aching heart',
    ],
  },
  {
    title: 'झूठी हँसी का मुखौटा',
    titleEnglish: 'Mask of a Forced Smile',
    linesHindi: [
      'मुस्कुराने की अदाकारी अब बख़ूबी सीख ली है',
      'वरना अंदर से टूटे हुए महीनों गुज़र चुके हैं',
    ],
    linesHinglish: [
      'Muskurane ki adaakari ab bakhoobi seekh li hai',
      'Warna andar se toote hue mahino guzar chuke hain',
    ],
    linesEnglish: [
      'I have mastered the performance of smiling well',
      'Otherwise it has been months since I shattered inside',
    ],
  },
  {
    title: 'भुलाने की नाकाम कोशिश',
    titleEnglish: 'Failed Attempt to Forget',
    linesHindi: [
      'सोचा था वक़्त के साथ तुम्हें दिल से निकाल दूँगा',
      'पर हर कोशिश में तुम्हारा नाम और गहरा छप गया',
    ],
    linesHinglish: [
      'Socha tha waqt ke saath tumhein dil se nikaal doonga',
      'Par har koshish mein tera naam aur gehra chhap gaya',
    ],
    linesEnglish: [
      'I thought I would erase you from my heart over time',
      'Yet with every attempt, your name etched itself even deeper',
    ],
  },
  {
    title: 'दिल की मजबूरी',
    titleEnglish: 'Helplessness of the Heart',
    linesHindi: [
      'दिमाग़ कहता है कि अब आगे बढ़ जाना चाहिए',
      'पर ये नादान दिल अभी भी तुम्हारी राह देखता है',
    ],
    linesHinglish: [
      'Dimaag kehta hai ki ab aage badh jaana chahiye',
      'Par ye nadaan dil abhi bhi tumhaari raah dekhta hai',
    ],
    linesEnglish: [
      'My mind keeps telling me it is time to move forward',
      'Yet this naive heart still watches the road for your return',
    ],
  },
  {
    title: 'ज़ख्मों पर नमक',
    titleEnglish: 'Salt on Fresh Wounds',
    linesHindi: [
      'तकलीफ़ इस बात की नहीं कि तुम दूर चले गए',
      'दर्द इस बात का है कि तुम्हें कोई फ़र्क नहीं पड़ा',
    ],
    linesHinglish: [
      'Takleef is baat ki nahin ki tum door chale gaye',
      'Dard is baat ka hai ki tumhein koi farq nahin pada',
    ],
    linesEnglish: [
      'What hurts is not merely that you walked far away',
      'What breaks me is that it made no difference to you at all',
    ],
  },
  {
    title: 'सूखे हुए अश्क',
    titleEnglish: 'Dried-Up Tears',
    linesHindi: [
      'इतना रो चुका हूँ मैं पिछले कुछ महीनों में',
      'कि अब दर्द होने पर भी आँख से बूँद नहीं टपकती',
    ],
    linesHinglish: [
      'Itna ro chuka hoon main pichhle kuch mahino mein',
      'Ki ab dard hone par bhi aankh se boond nahin tapakti',
    ],
    linesEnglish: [
      'I have wept so heavily over these past few months',
      'That even when pain strikes now, not a drop falls from my eyes',
    ],
  },
  {
    title: 'टूटी हुई डोर',
    titleEnglish: 'Snapped Thread',
    linesHindi: [
      'रिश्ते की डोर इतनी नाज़ुक होगी, सोचा न था',
      'ज़रा सा खिंचाव क्या पड़ा, बीच से ही टूट गई',
    ],
    linesHinglish: [
      'Rishte ki dor itni naazuk hogi, socha na tha',
      'Zara sa khichaav kya pada, beech se hi toot gayi',
    ],
    linesEnglish: [
      'I never imagined the thread between us would be so fragile',
      'The slightest tension appeared, and it snapped right down the middle',
    ],
  },
  {
    title: 'रात का सूनापन',
    titleEnglish: 'Emptiness of Midnight',
    linesHindi: [
      'जब घड़ी की सुई बारह के पार निकल जाती है',
      'तब हर दबी हुई तड़प फिर से ज़िंदा हो जाती है',
    ],
    linesHinglish: [
      'Jab ghadi ki sui baarah ke paar nikal jaati hai',
      'Tab har dabi hui tadap phir se zinda ho jaati hai',
    ],
    linesEnglish: [
      'Once the hands of the clock cross past midnight',
      'Every buried ache wakes back up inside my chest',
    ],
  },
  {
    title: 'मायूसी का कोहरा',
    titleEnglish: 'Fog of Despair',
    linesHindi: [
      'आगे देखने की कोशिश करता हूँ तो धुंध दिखती है',
      'पीछे मुड़कर देखूँ तो बस टूटे ख्वाबों की बस्ती है',
    ],
    linesHinglish: [
      'Aage dekhne ki koshish karta hoon to dhundh dikhti hai',
      'Peeche mudkar dekhoon to bas toote khwaabon ki basti hai',
    ],
    linesEnglish: [
      'When I try to look ahead, all I see is dense mist',
      'When I look back, there lies only a town of broken dreams',
    ],
  },
  {
    title: 'दिल की हार',
    titleEnglish: 'Defeat of a Devoted Heart',
    linesHindi: [
      'दुनिया की हर बाज़ी जीत सकता था मैं हँसकर',
      'पर अपनों के सामने हमेशा दिल से हार गया',
    ],
    linesHinglish: [
      'Duniya ki har baazi jeet sakta tha main hanskar',
      'Par apnon ke saamne hamesha dil se haar gaya',
    ],
    linesEnglish: [
      'I could have won every battle in this world with a smile',
      'Yet before my own loved ones, I always surrendered my heart',
    ],
  },
  {
    title: 'नए चेहरे, पुराना दर्द',
    titleEnglish: 'New Faces, Old Pain',
    linesHindi: [
      'शहर बदल लिया मैंने, रास्ते भी नए चुन लिए',
      'पर सीने में रखा पुराना दर्द साथ चला आया',
    ],
    linesHinglish: [
      'Shehar badal liya maine, raaste bhi naye chun liye',
      'Par seene mein rakha purana dard saath chala aaya',
    ],
    linesEnglish: [
      'I changed my city and chose brand new streets to walk',
      'Yet the old ache carried inside my chest came along with me',
    ],
  },
  {
    title: 'फ़ासलों का सच',
    titleEnglish: 'Truth About Distances',
    linesHindi: [
      'एक ही छत के नीचे रहकर भी दूरियाँ बढ़ जाती हैं',
      'जब दिलों के बीच संवाद का पुल टूट जाता है',
    ],
    linesHinglish: [
      'Ek hi chhat ke neeche rehkar bhi dooriyan badh jaati hain',
      'Jab dilon ke beech samvaad ka pul toot jaata hai',
    ],
    linesEnglish: [
      'Distances grow even while living beneath the same roof',
      'Whenever the bridge of understanding between hearts collapses',
    ],
  },
  {
    title: 'बेबस निगाहें',
    titleEnglish: 'Helpless Eyes',
    linesHindi: [
      'भीड़ में एक झलक दिखी थी तुम्हारी कल शाम',
      'पर पास आने की हिम्मत आज मेरे पैरों में न थी',
    ],
    linesHinglish: [
      'Bheed mein ek jhalak dikhi thi tumhaari kal shaam',
      'Par paas aane ki himmat aaj mere pairon mein na thi',
    ],
    linesEnglish: [
      'Last evening I caught a brief glimpse of you in the crowd',
      'Yet my feet held no courage left to walk up to you',
    ],
  },
  {
    title: 'सच्चाई की कड़वाहट',
    titleEnglish: 'Bitterness of Truth',
    linesHindi: [
      'काश मैं भी झूठे दिखावों को पहचान पाता वक़्त पर',
      'तो आज इतना भारी नुकसान न उठाना पड़ता दिल को',
    ],
    linesHinglish: [
      'Kaash main bhi jhoothe dikhaawon ko pehchaan paata waqt par',
      'To aaj itna bhaari nuksaan na uthana padta dil ko',
    ],
    linesEnglish: [
      'I wish I had seen through hollow appearances in time',
      'My heart would not have paid such a heavy price today',
    ],
  },
  {
    title: 'छूटी हुई मुलाक़ातें',
    titleEnglish: 'Missed Encounters',
    linesHindi: [
      'कॉफी की वो मेज़ आज भी खाली पड़ी है वहीं',
      'बस वहाँ बैठने वाले दो लोगों की राहें अलग हो गईं',
    ],
    linesHinglish: [
      'Coffee ki wo mez aaj bhi khaali padi hai wahin',
      'Bas wahaan baithne wale do logon ki raahein alag ho gayin',
    ],
    linesEnglish: [
      'That coffee table still sits empty in the very same corner',
      'Only the paths of the two people who sat there parted ways',
    ],
  },
  {
    title: 'मौन आँसू',
    titleEnglish: 'Silent Drops',
    linesHindi: [
      'चेहरा धोकर आ जाता हूँ अक्सर दफ़्तर से लौटकर',
      'घर वालों को मेरी आँखों की नमी दिखनी नहीं चाहिए',
    ],
    linesHinglish: [
      'Chehra dhokar aa jaata hoon aksar daftar se lautkar',
      'Ghar waalon ko meri aankhon ki nami dikhni nahin chahiye',
    ],
    linesEnglish: [
      'I often wash my face before stepping inside after work',
      'My family must never notice the moisture in my eyes',
    ],
  },
  {
    title: 'बिखरा हुआ मन',
    titleEnglish: 'Scattered Mind',
    linesHindi: [
      'इतनी बार खुद को समेटा है टूटने के बाद मैंने',
      'कि अब बिखरे टुकड़ों की गिनती भी भूल चुका हूँ',
    ],
    linesHinglish: [
      'Itni baar khud ko sameta hai tootne ke baad maine',
      'Ki ab bikhre tukdon ki ginti bhi bhool chuka hoon',
    ],
    linesEnglish: [
      'So many times I have gathered myself back after breaking',
      'That I have lost count of my own scattered pieces now',
    ],
  },
  {
    title: 'आख़िरी ख़त का दर्द',
    titleEnglish: 'Ache of the Final Letter',
    linesHindi: [
      'लिख तो दिया मैंने तुमको खुश रहने की दुआ',
      'पर हाथ काँपते रहे हर एक शब्द को लिखते हुए',
    ],
    linesHinglish: [
      'Likh to diya maine tumko khush rehne ki dua',
      'Par haath kaampte rahe har ek shabd ko likhte hue',
    ],
    linesEnglish: [
      'I did write down a wish for your everlasting happiness',
      'Yet my hands kept trembling as I penned every single word',
    ],
  },
  {
    title: 'ख़्वाबों का बोझ',
    titleEnglish: 'Weight of Unlived Dreams',
    linesHindi: [
      'जितने सपने साथ बुने थे हमने उस सर्दी में',
      'उतने ही ठंडे पड़ गए सब के सब इस बरसात में',
    ],
    linesHinglish: [
      'Jitne sapne saath bune the humne us sardi mein',
      'Utne hi thande pad gaye sab ke sab is barsaat mein',
    ],
    linesEnglish: [
      'Every dream we had woven together back in that winter',
      'Grew cold and washed away in this season of rain',
    ],
  },
  {
    title: 'छलनी दिल की पुकार',
    titleEnglish: 'Cry of a Bruised Heart',
    linesHindi: [
      'कभी सोचा न था कि जिसे जान से ज़्यादा चाहा',
      'उसी के हाथों मेरा हर अरमान क़त्ल हो जाएगा',
    ],
    linesHinglish: [
      'Kabhi socha na tha ki jise jaan se zyada chaaha',
      'Usi ke haathon mera har armaan qatl ho jaayega',
    ],
    linesEnglish: [
      'I never imagined the one I cherished more than my own life',
      'Would become the reason every longing in me perished',
    ],
  },
  {
    title: 'चुप रहने की आदत',
    titleEnglish: 'Habit of Staying Quiet',
    linesHindi: [
      'पहले हर बात पर रूठ जाता था मैं बच्चों की तरह',
      'अब दिल कितना भी दुखे, चुप रहना बेहतर लगता है',
    ],
    linesHinglish: [
      'Pehle har baat par rooth jaata tha main bachchon ki tarah',
      'Ab dil kitna bhi dukhe, chup rehna behtar lagta hai',
    ],
    linesEnglish: [
      'Earlier I would sulk like a child over every small thing',
      'Now no matter how deeply my heart hurts, silence feels safer',
    ],
  },
  {
    title: 'अधूरी शाम का ग़म',
    titleEnglish: 'Sorrow of an Incomplete Dusk',
    linesHindi: [
      'चाय आज भी दो कप ही बनती है मेरी रसोई में',
      'फिर याद आता है कि अब पीने वाला कोई नहीं',
    ],
    linesHinglish: [
      'Chai aaj bhi do cup hi banti hai meri rasoi mein',
      'Phir yaad aata hai ki ab peene wala koi nahin',
    ],
    linesEnglish: [
      'Even today I accidentally brew two cups of tea in my kitchen',
      'Before remembering there is no one left to share the second',
    ],
  },
  {
    title: 'टूटी तस्वीर',
    titleEnglish: 'Cracked Photograph',
    linesHindi: [
      'फ्रेम का शीशा चटका तो दिल सिहर उठा अचानक',
      'पर तेरी मुस्कान उस तस्वीर में आज भी वैसी ही है',
    ],
    linesHinglish: [
      'Frame ka sheesha chatka to dil sihar utha achanak',
      'Par teri muskaan us tasveer mein aaj bhi waisi hi hai',
    ],
    linesEnglish: [
      'When the glass on the frame cracked, my heart shivered suddenly',
      'Yet your smile inside that photograph stays unchanged to this day',
    ],
  },
  {
    title: 'उम्मीदों का टूटना',
    titleEnglish: 'Collapse of Expectations',
    linesHindi: [
      'जितनी बड़ी उम्मीद हमने लगा रखी थी उनसे',
      'उससे भी गहरा सन्नाटा मिला हमें जवाब में',
    ],
    linesHinglish: [
      'Jitni badi ummeed humne laga rakhi thi unse',
      'Usse bhi gehra sannata mila humein jawaab mein',
    ],
    linesEnglish: [
      'As towering as the hopes I had placed upon them were',
      'Even deeper was the silence I received in return',
    ],
  },
  {
    title: 'दिल की दरारें',
    titleEnglish: 'Cracks Within the Heart',
    linesHindi: [
      'मरहम तो बहुत लगाए लोगों ने ऊपर से आकर',
      'पर अंदर की दरारें आज भी वैसी ही खुली हैं',
    ],
    linesHinglish: [
      'Marham to bahut lagaaye logon ne upar se aakar',
      'Par andar ki daraarein aaj bhi waisi hi khuli hain',
    ],
    linesEnglish: [
      'Many people came and applied ointments from the outside',
      'Yet the fractures deep inside remain just as wide open',
    ],
  },
  {
    title: 'बेनाम उदासी',
    titleEnglish: 'Nameless Melancholy',
    linesHindi: [
      'कोई बड़ी वजह नहीं होती आजकल उदास होने की',
      'बस किसी की कमी अचानक अंदर खालीपन भर देती है',
    ],
    linesHinglish: [
      'Koi badi wajah nahin hoti aajkal udaas hone ki',
      'Bas kisi ki kami achanak andar khaalipan bhar deti hai',
    ],
    linesEnglish: [
      'There needs no grand reason to feel sorrowful anymore',
      'Just someones absence suddenly fills the chest with emptiness',
    ],
  },
  {
    title: 'क़दमों की थकान',
    titleEnglish: 'Weariness of Walking Alone',
    linesHindi: [
      'रिश्ता निभाते-निभाते इतने थक गए मेरे क़दम',
      'कि अब किसी का हाथ पकड़ने से भी डर लगता है',
    ],
    linesHinglish: [
      'Rishta nibhate-nibhate itne thak gaye mere kadam',
      'Ki ab kisi ka haath pakadne se bhi dar lagta hai',
    ],
    linesEnglish: [
      'My footsteps grew so exhausted trying to keep a bond alive',
      'That now I feel afraid to hold anyones hand at all',
    ],
  },
  {
    title: 'गलतफ़हमी की दीवार',
    titleEnglish: 'Wall of Misunderstanding',
    linesHindi: [
      'बात बैठकर सुलझा लेते तो शायद साथ होते आज',
      'पर तुमने अहम चुना और मैंने ख़ामोशी चुन ली',
    ],
    linesHinglish: [
      'Baat baithkar suljha lete to shayad saath hote aaj',
      'Par tumne aham chuna aur maine khaamoshi chun li',
    ],
    linesEnglish: [
      'Had we sat down and talked it out, we might still be together',
      'Instead you chose pride, and I chose quiet retreat',
    ],
  },
  {
    title: 'रंगहीन त्यौहार',
    titleEnglish: 'Dull Festivals',
    linesHindi: [
      'शहर भर में रोशनी और पटाखों का शोर है आज',
      'पर मेरे दिल के कोने में अब भी अँधेरा ही फैला है',
    ],
    linesHinglish: [
      'Shehar bhar mein roshni aur pataakhon ka shor hai aaj',
      'Par mere dil ke kone mein ab bhi andhera hi phaila hai',
    ],
    linesEnglish: [
      'Across the whole city there are lights and festive sounds tonight',
      'Yet darkness still stretches across every corner of my heart',
    ],
  },
  {
    title: 'हवा में बिखरे वादे',
    titleEnglish: 'Promises Scattered in Wind',
    linesHindi: [
      'कागज़ पर लिखे होते तो संभाल भी लेता मैं उन्हें',
      'तुम्हारे वादे तो हवा में कहे गए लफ़्ज़ निकले',
    ],
    linesHinglish: [
      'Kaagaz par likhe hote to sanbhaal bhi leta main unhein',
      'Tumhaare waade to hawa mein kahe gaye lafz nikle',
    ],
    linesEnglish: [
      'Had they been written on paper, I might have preserved them',
      'Your vows turned out to be mere words spoken into thin air',
    ],
  },
  {
    title: 'ख़ुद को खो देने का डर',
    titleEnglish: 'Fear of Losing Oneself',
    linesHindi: [
      'तुम्हें खुश रखने की ज़िद में इतना बदल गया मैं',
      'कि अब आईने में अपनी ही सूरत अजनबी लगती है',
    ],
    linesHinglish: [
      'Tumhein khush rakhne ki zid mein itna badal gaya main',
      'Ki ab aaine mein apni hi soorat ajnabi lagti hai',
    ],
    linesEnglish: [
      'Trying so hard to keep you happy, I altered myself so much',
      'That even my own reflection looks unfamiliar in the mirror now',
    ],
  },
  {
    title: 'दबी हुई सिसकियाँ',
    titleEnglish: 'Suppressed Heartache',
    linesHindi: [
      'कहने को तो बहुत कुछ है इस सीने के अंदर',
      'पर सुनने वाला कोई अपना बचा ही नहीं आसपास',
    ],
    linesHinglish: [
      'Kehne ko to bahut kuch hai is seene ke andar',
      'Par sunne wala koi apna bacha hi nahin aaspaas',
    ],
    linesEnglish: [
      'There is so much waiting to be spoken inside this chest',
      'Yet not a single true confidant remains nearby to listen',
    ],
  },
  {
    title: 'बिन मौसम की बरसात',
    titleEnglish: 'Unseasonal Rain',
    linesHindi: [
      'आसमान तो आज बिल्कुल साफ़ दिख रहा था शाम से',
      'पता नहीं फिर भी दिल के अंदर इतनी बरसात क्यों हुई',
    ],
    linesHinglish: [
      'Aasmaan to aaj bilkul saaf dikh raha tha shaam se',
      'Pata nahin phir bhi dil ke andar itni barsaat kyun hui',
    ],
    linesEnglish: [
      'The sky outside looked completely clear since evening',
      'Yet somehow a heavy downpour broke out inside my heart',
    ],
  },
  {
    title: 'आधा-अधूरा सुकून',
    titleEnglish: 'Half-Lived Peace',
    linesHindi: [
      'नींद आ भी जाए तो चैन कहाँ मिलता है रातों में',
      'ख़्वाबों में भी तुम्हारे जाने का मंज़र दिखता है',
    ],
    linesHinglish: [
      'Neend aa bhi jaaye to chain kahaan milta hai raaton mein',
      'Khwaabon mein bhi tumhaare jaane ka manzar dikhta hai',
    ],
    linesEnglish: [
      'Even when sleep arrives, peace escapes me through the night',
      'Even in my dreams, I keep witnessing the sight of you leaving',
    ],
  },
  {
    title: 'टूटे हुए इरादे',
    titleEnglish: 'Wounded Resolve',
    linesHindi: [
      'दिल की ज़मीन अब बंजर सी हो चली है ग़ालिब',
      'यहाँ अब किसी नई उम्मीद का पौधा नहीं उगता',
    ],
    linesHinglish: [
      'Dil ki zameen ab banjar si ho chali hai Ghalib',
      'Yahaan ab kisi nayi ummeed ka paudha nahin ugta',
    ],
    linesEnglish: [
      'The soil of my heart has turned barren over time',
      'No seed of new hope takes root here anymore',
    ],
  },
  {
    title: 'बेदर्द ज़माने की रीत',
    titleEnglish: 'Way of a Callous World',
    linesHindi: [
      'जब तक काम निकलता रहा, हम सबसे ख़ास थे',
      'जरूरत ख़त्म होते ही सबसे फ़ालतू हो गए',
    ],
    linesHinglish: [
      'Jab tak kaam nikalta raha, hum sabse khaas the',
      'Zaroorat khatam hote hi sabse faaltu ho gaye',
    ],
    linesEnglish: [
      'As long as I was useful, I was treated like someone special',
      'The moment their need ended, I became completely expendable',
    ],
  },
  {
    title: 'सच्चे प्यार की क़द्र',
    titleEnglish: 'Value of True Affection',
    linesHindi: [
      'जो बिना शर्त तुम्हारा साथ निभाने को तैयार था',
      'तुमने उसे ही सबसे सस्ता और आसान समझ लिया',
    ],
    linesHinglish: [
      'Jo bina shart tumhaara saath nibhane ko taiyaar tha',
      'Tumne use hi sabse sasta aur aasaan samajh liya',
    ],
    linesEnglish: [
      'The one who stood ready to love you unconditionally',
      'Was the very person you took most cheaply for granted',
    ],
  },
  {
    title: 'तस्वीरों का सहारा',
    titleEnglish: 'Comfort of Old Pictures',
    linesHindi: [
      'गैलरी से सारी तस्वीरें तो डिलीट कर दीं गुस्से में',
      'पर दिल की यादों से एक भी पल नहीं मिटा पाए',
    ],
    linesHinglish: [
      'Gallery se saari tasveerein to delete kar deen gusse mein',
      'Par dil ki yaadon se ek bhi pal nahin mita paaye',
    ],
    linesEnglish: [
      'In anger I deleted every picture from my phone gallery',
      'Yet I could not erase a single moment from my hearts memory',
    ],
  },
  {
    title: 'नज़रअंदाज़ होने का दर्द',
    titleEnglish: 'Pain of Being Ignored',
    linesHindi: [
      'सबसे गहरा ज़ख्म कोई गाली या झगड़ा नहीं देता',
      'अपनों का चुपचाप नज़रअंदाज़ करना तोड़ देता है',
    ],
    linesHinglish: [
      'Sabse gehra zakhm koi gaali ya jhagda nahin deta',
      'Apnon ka chupchaap nazarandaaz karna tod deta hai',
    ],
    linesEnglish: [
      'No harsh argument ever hurts as deeply as this',
      'Being quietly ignored by someone you love breaks you whole',
    ],
  },
  {
    title: 'ज़िंदगी की थकान',
    titleEnglish: 'Exhaustion of Pretending',
    linesHindi: [
      'अब किसी को समझाने की ताक़त नहीं बची मुझमें',
      'जो जैसा समझना चाहे, वैसा ही मान ले मुझे',
    ],
    linesHinglish: [
      'Ab kisi ko samjhaane ki taaqat nahin bachi mujhmein',
      'Jo jaisa samajhna chaahe, waisa hi maan le mujhe',
    ],
    linesEnglish: [
      'I no longer have the strength left to explain myself to anyone',
      'Let each person think of me however they wish to believe',
    ],
  },
  {
    title: 'अधूरे ख्वाब की राख',
    titleEnglish: 'Ashes of an Unfinished Dream',
    linesHindi: [
      'जिस आग ने कभी सर्दियों में गर्माहट दी थी',
      'आज उसी की ठंडी राख हाथों में लिए बैठा हूँ',
    ],
    linesHinglish: [
      'Jis aag ne kabhi sardiyon mein garmaahat di thi',
      'Aaj usi ki thandi raakh haathon mein liye baitha hoon',
    ],
    linesEnglish: [
      'The very fire that once warmed me through cold winters',
      'Leaves only cold ashes sitting in my palms today',
    ],
  },
  {
    title: 'मुँह मोड़ लेने की सज़ा',
    titleEnglish: 'Sting of Turning Away',
    linesHindi: [
      'बुरे वक़्त में सबके असली चेहरे सामने आ गए',
      'जिन्हें अपनी परछाईं समझा, वही साये से गायब थे',
    ],
    linesHinglish: [
      'Bure waqt mein sabke asli chehre saamne aa gaye',
      'Jinhein apni parchhaai samjha, wahi saaye se gaayab the',
    ],
    linesEnglish: [
      'Hard times revealed everyones true face in plain sight',
      'Those I thought were my shadow vanished at first sign of dark',
    ],
  },
  {
    title: 'दिल की सलाखें',
    titleEnglish: 'Caged Emotions',
    linesHindi: [
      'बाहर से आज़ाद घूमता हूँ मैं खुले आसमान तले',
      'पर अंदर तेरे ग़म की क़ैद से रिहाई नहीं मिलती',
    ],
    linesHinglish: [
      'Baahar se aazaad ghoomta hoon main khule aasmaan tale',
      'Par andar tere gham ki qaid se rihaai nahin milti',
    ],
    linesEnglish: [
      'Outwardly I walk free beneath the open sky',
      'Yet inside I find no release from the prison of missing you',
    ],
  },
  {
    title: 'बदलते मौसम सा इश्क़',
    titleEnglish: 'Love That Changed Like Weather',
    linesHindi: [
      'कहते थे कभी न बदलेंगे हम किसी भी हाल में',
      'पर तुम तो मौसम से भी ज़्यादा तेज़ बदल गए',
    ],
    linesHinglish: [
      'Kehte the kabhi na badlenge hum kisi bhi haal mein',
      'Par tum to mausam se bhi zyada tez badal gaye',
    ],
    linesEnglish: [
      'You swore you would never change under any circumstance',
      'Yet you shifted faster than the passing weather itself',
    ],
  },
  {
    title: 'अनचाही खामोशी',
    titleEnglish: 'Unwanted Silence',
    linesHindi: [
      'मोबाइल की घंटी अब भी बजती है दिन में सौ बार',
      'बस तेरे नाम की नोटिफिकेशन कभी नहीं आती',
    ],
    linesHinglish: [
      'Mobile ki ghanti ab bhi bajti hai din mein sau baar',
      'Bas tere naam ki notification kabhi nahin aati',
    ],
    linesEnglish: [
      'My phone still rings a hundred times every single day',
      'Only a notification with your name on it never arrives',
    ],
  },
  {
    title: 'अधूरे जज़्बात',
    titleEnglish: 'Half-Spoken Feelings',
    linesHindi: [
      'कुछ बातें दिल में ही दफ़न हो जाएँ तो अच्छा है',
      'हर सच बोल देने से रिश्ते बच नहीं जाया करते',
    ],
    linesHinglish: [
      'Kuch baatein dil mein hi dafan ho jaayein to accha hai',
      'Har sach bol dene se rishte bach nahin jaaya karte',
    ],
    linesEnglish: [
      'Some feelings are better off buried quietly inside the heart',
      'Speaking every raw truth does not always save a bond',
    ],
  },
  {
    title: 'बिखरा हुआ विश्वास',
    titleEnglish: 'Shattered Faith',
    linesHindi: [
      'एक झूठ ने सालों की सच्चाई पर पानी फेर दिया',
      'अब सच भी बोलो तो दिल मानने से डरता है',
    ],
    linesHinglish: [
      'Ek jhooth ne saalon ki sacchai par paani pher diya',
      'Ab sach bhi bolo to dil maanne se darta hai',
    ],
    linesEnglish: [
      'One lie washed away years of honest devotion',
      'Now even when you speak the truth, my heart fears believing it',
    ],
  },
  {
    title: 'सपनों की कब्र',
    titleEnglish: 'Grave of Unfulfilled Wishes',
    linesHindi: [
      'जिन गलियों में साथ घूमने के ख़्वाब देखे थे',
      'आज उन्हीं गलियों से आँखें चुराकर निकलता हूँ',
    ],
    linesHinglish: [
      'Jin galiyon mein saath ghoomne ke khwaab dekhe the',
      'Aaj unhi galiyon se aankhein churaakar nikalta hoon',
    ],
    linesEnglish: [
      'The very lanes I dreamed of strolling down hand in hand with you',
      'Are the streets I slip past with lowered eyes today',
    ],
  },
  {
    title: 'बेदर्द यादगार',
    titleEnglish: 'Cruel Keepsake',
    linesHindi: [
      'वो छोटा सा तोहफ़ा आज भी मेज़ पर रखा है',
      'न फेंकने का मन करता है, न देखने की हिम्मत है',
    ],
    linesHinglish: [
      'Wo chhota sa tohfa aaj bhi mez par rakha hai',
      'Na phenkne ka man karta hai, na dekhne ki himmat hai',
    ],
    linesEnglish: [
      'That small keepsake gift still rests on my desk',
      'I neither bear to throw it away nor have the courage to look at it',
    ],
  },
  {
    title: 'ख़ुशी का भरम',
    titleEnglish: 'Illusion of Cheer',
    linesHindi: [
      'मेरी हँसी पर मत जाना ऐ मिलने वाले दोस्त',
      'ये तो बस टूटे दिल पर लगाया हुआ पर्दा है',
    ],
    linesHinglish: [
      'Meri hansi par mat jaana ae milne waale dost',
      'Ye to bas toote dil par lagaya hua parda hai',
    ],
    linesEnglish: [
      'Do not be fooled by my laughter, visiting friend',
      'It is merely a curtain drawn over a broken heart',
    ],
  },
  {
    title: 'दूरी का असर',
    titleEnglish: 'Weight of Separation',
    linesHindi: [
      'बात सिर्फ़ कुछ मीलों की दूरी की नहीं थी यार',
      'दिलों के बीच का एहसास ही ख़त्म हो गया था',
    ],
    linesHinglish: [
      'Baat sirf kuch meelon ki doori ki nahin thi yaar',
      'Dilon ke beech ka ehsaas hi khatam ho gaya tha',
    ],
    linesEnglish: [
      'It was never merely a matter of physical miles between us',
      'The tenderness connecting our hearts had faded out',
    ],
  },
  {
    title: 'हारे हुए दिल की दास्तान',
    titleEnglish: 'Story of a Defeated Heart',
    linesHindi: [
      'जिसे हमने अपनी दुआओं में सबसे ऊपर रखा था',
      'उसने हमें अपनी ज़रूरतों के बाद भी न गिना',
    ],
    linesHinglish: [
      'Jise humne apni duaon mein sabse upar rakha tha',
      'Usne humein apni zarooraton ke baad bhi na gina',
    ],
    linesEnglish: [
      'The person I placed at the very top of my prayers',
      'Did not even count me after all their own conveniences',
    ],
  },
  {
    title: 'अजनबी शहर का दर्द',
    titleEnglish: 'Lonely Streets of a Strange City',
    linesHindi: [
      'जब अपना घर भी पराया सा लगने लगे इंसान को',
      'तब बाहर की दुनिया से क्या ही उम्मीद रखी जाए',
    ],
    linesHinglish: [
      'Jab apna ghar bhi paraya sa lagne lage insaan ko',
      'Tab baahar ki duniya se kya hi ummeed rakhi jaaye',
    ],
    linesEnglish: [
      'When even ones own home begins to feel unfamiliar',
      'What comfort can one expect from the outside world',
    ],
  },
  {
    title: 'ख़ामोश शिकवे',
    titleEnglish: 'Unspoken Complaints',
    linesHindi: [
      'शिकवे तो इतने थे कि पूरी रात कम पड़ जाती',
      'पर जब सामने आए तो सिर्फ़ आँखों ने बात की',
    ],
    linesHinglish: [
      'Shikwe to itne the ki poori raat kam pad jaati',
      'Par jab saamne aaye to sirf aankhon ne baat ki',
    ],
    linesEnglish: [
      'I held enough grievances to fill an entire night',
      'Yet when we stood face to face, only my eyes spoke',
    ],
  },
  {
    title: 'सुलगता हुआ सीना',
    titleEnglish: 'Smoldering Heartache',
    linesHindi: [
      'धुआँ दिखता नहीं पर अंदर कुछ जलता रहता है',
      'तेरे जाने का ग़म हर रोज़ थोड़ा और पकता है',
    ],
    linesHinglish: [
      'Dhuaan dikhta nahin par andar kuch jalta rehta hai',
      'Tere jaane ka gham har roz thoda aur pakta hai',
    ],
    linesEnglish: [
      'No smoke shows outside, yet something burns quietly within',
      'The grief of your leaving deepens a little more every day',
    ],
  },
  {
    title: 'आधी नींद का टूटना',
    titleEnglish: 'Waking Mid-Slumber',
    linesHindi: [
      'तीन बजे रात को अचानक आँख खुल जाती है',
      'और फिर सुबह तक सिर्फ़ करवटें बदलते हैं हम',
    ],
    linesHinglish: [
      'Teen baje raat ko achanak aankh khul jaati hai',
      'Aur phir subah tak sirf karwatein badalte hain hum',
    ],
    linesEnglish: [
      'Every night my eyes snap open around three in the morning',
      'And until dawn breaks, I only toss and turn in silence',
    ],
  },
  {
    title: 'ख़ुद से दूर जाना',
    titleEnglish: 'Drifting From Myself',
    linesHindi: [
      'किसी एक इंसान के चले जाने से इतना फ़र्क पड़ा',
      'कि मुझे अपना पुराना हँसमुख स्वभाव खोना पड़ा',
    ],
    linesHinglish: [
      'Kisi ek insaan ke chale jaane se itna farq pada',
      'Ki mujhe apna purana hansmukh swabhaav khona pada',
    ],
    linesEnglish: [
      'One persons departure altered me so deeply inside',
      'That I lost the cheerful version of myself I used to be',
    ],
  },
  {
    title: 'अनसुनी दुआ',
    titleEnglish: 'Whispered Wish Unheard',
    linesHindi: [
      'मैंने चाहा था कि कम से कम दोस्ती बची रहे',
      'पर तुमने तो दुश्मनों से भी बदतर दूरी बना ली',
    ],
    linesHinglish: [
      'Maine chaaha tha ki kam se kam dosti bachi rahe',
      'Par tumne to dushmanon se bhi badtar doori bana li',
    ],
    linesEnglish: [
      'I had hoped at least a quiet friendship would remain between us',
      'Yet you built a wall colder than any strangers distance',
    ],
  },
  {
    title: 'रुकता हुआ वक़्त',
    titleEnglish: 'Frozen Hours',
    linesHindi: [
      'कैलेंडर के पन्ने तो हर महीने बदल जाते हैं',
      'पर मेरा दिल आज भी उसी बिछड़ने की तारीख़ पर है',
    ],
    linesHinglish: [
      'Calendar ke panne to har mahine badal jaate hain',
      'Par mera dil aaj bhi usi bichhadne ki taareekh par hai',
    ],
    linesEnglish: [
      'The pages of the calendar flip faithfully every month',
      'Yet my heart stays stuck on the exact date we parted',
    ],
  },
  {
    title: 'दिल की सफ़ाई',
    titleEnglish: 'Quiet Honesty',
    linesHindi: [
      'गलती मेरी भी रही होगी कहीं न कहीं ज़रूर',
      'पर सज़ा इतनी लंबी मिलेगी, ये सोचा न था',
    ],
    linesHinglish: [
      'Galti meri bhi rahi hogi kahin na kahin zaroor',
      'Par saza itni lambi milegi, ye socha na tha',
    ],
    linesEnglish: [
      'Somewhere along the way I surely had my share of fault',
      'Still I never thought the punishment would last this long',
    ],
  },
  {
    title: 'बिखरा हुआ सब्र',
    titleEnglish: 'Fraying Patience',
    linesHindi: [
      'बहुत सब्र करके देख लिया इस दुनिया के सामने',
      'आख़िर इंसान का दिल भी तो पत्थर का नहीं होता',
    ],
    linesHinglish: [
      'Bahut sabr karke dekh liya is duniya ke saamne',
      'Aakhir insaan ka dil bhi to patthar ka nahin hota',
    ],
    linesEnglish: [
      'I have tried holding onto patience for so very long',
      'After all, a human heart is not carved out of stone',
    ],
  },
  {
    title: 'टूटे पंखों की उड़ान',
    titleEnglish: 'Flight With Broken Wings',
    linesHindi: [
      'हौसला तो आज भी रखता हूँ मैं मुस्कुराने का',
      'बस टूटे हुए पंखों से ज़्यादा ऊँचा उड़ा नहीं जाता',
    ],
    linesHinglish: [
      'Hausla to aaj bhi rakhta hoon main muskurane ka',
      'Bas toote hue pankhon se zyada ooncha uda nahin jaata',
    ],
    linesEnglish: [
      'Even today I summon the courage to put on a smile',
      'It is only hard to soar high when your wings are bruised',
    ],
  },
  {
    title: 'नमी भरी मुस्कुराहट',
    titleEnglish: 'Tearful Smile',
    linesHindi: [
      'जब भी कोई पुराना गाना रेडियो पर बज उठता है',
      'होंठ मुस्कुराते हैं और आँख चुपके से भर आती है',
    ],
    linesHinglish: [
      'Jab bhi koi purana gaana radio par baj uthta hai',
      'Honth muskurate hain aur aankh chupke se bhar aati hai',
    ],
    linesEnglish: [
      'Whenever an old song plays softly on the radio',
      'My lips curve into a smile while my eyes quietly brim over',
    ],
  },
  {
    title: 'अनचाहा समझौता',
    titleEnglish: 'Silent Compromise',
    linesHindi: [
      'ख़ुश नहीं हूँ मैं इस नए दौर की तन्हाई से',
      'बस हालात के आगे झुककर जीना सीख लिया है',
    ],
    linesHinglish: [
      'Khush nahin hoon main is naye daur ki tanhaai se',
      'Bas haalaat ke aage jhukkar jeena seekh liya hai',
    ],
    linesEnglish: [
      'I am not content with this newfound chapter of solitude',
      'I have simply learned to bow to circumstance and carry on',
    ],
  },
  {
    title: 'अधूरी दास्ताँ का बोझ',
    titleEnglish: 'Burden of Half a Story',
    linesHindi: [
      'जिस किताब का अंजाम हमने साथ लिखा ही नहीं',
      'उसके अधूरे पन्ने आज भी सीने में चुभते हैं',
    ],
    linesHinglish: [
      'Jis kitaab ka anjaam humne saath likha hi nahin',
      'Uske adhoore panne aaj bhi seene mein chubhte hain',
    ],
    linesEnglish: [
      'That book whose ending we never got to write together',
      'Leaves torn, unfinished pages aching against my chest',
    ],
  },
];

export const UNIQUE_SAD_98 = buildUniqueShayaris(
  'sad',
  'Sad Shayari (दर्द शायरी)',
  '💔',
  103,
  SAD_ENTRIES
);
