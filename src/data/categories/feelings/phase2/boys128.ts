import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const BOYS_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'लड़कों की सादगी और ज़िम्मेदारी',
    titleEnglish: 'Silent Weight on Young Shoulders',
    linesHindi: [
      'चेहरे पर मुस्कान और कंधों पर पूरा घर उठाए चलते हैं',
      'लड़के रोते कम हैं, पर जिम्मेदारियाँ चुपचाप निभाते हैं',
    ],
    linesHinglish: [
      'Chehre par muskaan aur kandhon par poora ghar uthaye chalte hain',
      'Ladke rote kam hain, par zimmedariyan chupchaap nibhaate hain',
    ],
    linesEnglish: [
      'Carrying a bright smile while holding the whole household steady',
      'Boys rarely complain—they quietly shoulder every duty',
    ],
  },
  {
    title: 'जेब खाली, दिल अमीर',
    titleEnglish: 'Empty Pockets, Rich Heart',
    linesHindi: [
      'पॉकेट में चाहे चिल्लर ही क्यों न बज रही हो दोस्तों',
      'यारों के लिए चाय पिलाने का दम हमेशा रखते हैं लड़के',
    ],
    linesHinglish: [
      'Pocket mein chaahe chillar hi kyun na baj rahi ho doston',
      'Yaaron ke liye chai pilaane ka dam hamesha rakhte hain ladke',
    ],
    linesEnglish: [
      'Even when only loose coins jingle inside their jeans',
      'Real boys never hesitate to pick up the tea bill for friends',
    ],
  },
  {
    title: 'बाइक और खुली सड़क',
    titleEnglish: 'Two Wheels, Clear Head',
    linesHindi: [
      'जब दिमाग़ ज़्यादा उलझने लगे शहर के शोर से',
      'लड़कों को तो बस एक लंबी राइड और हवा सुकून देती है',
    ],
    linesHinglish: [
      'Jab dimaag zyada ulajhne lage shehar ke shor se',
      'Ladkon ko to bas ek lambi ride aur hawa sukoon deti hai',
    ],
    linesEnglish: [
      'When city stress tangles up inside the head all week',
      'One long evening ride in open wind resets everything',
    ],
  },
  {
    title: 'यारी में जान हाज़िर',
    titleEnglish: 'Built for Brotherhood',
    linesHindi: [
      'रात के दो बजे भी बस एक कॉल की दूरी पर होते हैं',
      'असली लड़के दोस्ती में नफ़ा-नुकसान नहीं देखा करते',
    ],
    linesHinglish: [
      'Raat ke do baje bhi bas ek call ki doori par hote hain',
      'Asli ladke dosti mein nafa-nuksaan nahin dekha karte',
    ],
    linesEnglish: [
      'Even at two in the morning they stay one ring away',
      'True brothers never keep scorecards inside friendship',
    ],
  },
  {
    title: 'चुपचाप मेहनत',
    titleEnglish: 'Grinding Without Noise',
    linesHindi: [
      'इंस्टाग्राम पर दिखावा थोड़ा कम ही रहता है इनका',
      'क्योंकि घर की हालत बदलने का जुनून दिन-रात चलता है',
    ],
    linesHinglish: [
      'Instagram par dikhawa thoda kam hi rehta hai inka',
      'Kyunki ghar ki haalat badalne ka junoon din-raat chalta hai',
    ],
    linesEnglish: [
      'They post little noise on feeds throughout the week',
      'Too busy grinding day and night to upgrade their home',
    ],
  },
  {
    title: 'पापा का भरोसा',
    titleEnglish: 'Fathers Quiet Pride',
    linesHindi: [
      'दुनिया की कोई भी ट्रॉफी इतनी प्यारी नहीं लगती लड़कों को',
      'जितना पापा के चेहरे पर गर्व देखकर सुकून मिलता है',
    ],
    linesHinglish: [
      'Duniya ki koi bhi trophy itni pyaari nahin lagti ladkon ko',
      'Jitna papa ke chehre par garv dekhkar sukoon milta hai',
    ],
    linesEnglish: [
      'No shiny trophy anywhere matches this single moment',
      'Seeing quiet pride light up fathers tired eyes',
    ],
  },
  {
    title: 'सच्चा प्यार और इज़्ज़त',
    titleEnglish: 'Gentle Where It Matters',
    linesHindi: [
      'बाहर से भले ही सख़्त और मस्तमौला दिखते हों हम',
      'जिससे दिल जुड़ जाए, उसकी इज़्ज़त जान से ज़्यादा करते हैं',
    ],
    linesHinglish: [
      'Baahar se bhale hi sakht aur mastmaula dikhte hon hum',
      'Jisse dil jud jaaye, uski izzat jaan se zyada karte hain',
    ],
    linesEnglish: [
      'From the outside guys may look tough and carefree',
      'Once attached, we guard our loved ones honor above life',
    ],
  },
  {
    title: 'कम शब्दों में बात',
    titleEnglish: 'Few Words, Solid Bond',
    linesHindi: [
      'लड़कों को लंबे-लंबे पैराग्राफ़ लिखना नहीं आता अक्सर',
      'दो शब्द बोलकर भी पूरी दुनिया संभाल लेते हैं वो',
    ],
    linesHinglish: [
      'Ladkon ko lambe-lambe paragraph likhna nahin aata aksar',
      'Do shabd bolkar bhi poori duniya sanbhaal lete hain wo',
    ],
    linesEnglish: [
      'Most boys rarely write long emotional paragraphs',
      'Two steady words from them still hold everything together',
    ],
  },
  {
    title: 'माँ की मुस्कान के लिए',
    titleEnglish: 'Everything for Mom',
    linesHindi: [
      'सुबह जल्दी निकलने और देर रात थककर लौटने की वजह',
      'बस माँ की दवाइयाँ और उनकी सुकून भरी मुस्कान होती है',
    ],
    linesHinglish: [
      'Subah jaldi nikalne aur der raat thakkar lautne ki wajah',
      'Bas maa ki dawaaiyan aur unki sukoon bhari muskaan hoti hai',
    ],
    linesEnglish: [
      'Why they leave at sunrise and drag home past midnight',
      'Simply to keep mothers medicines stocked and smile peaceful',
    ],
  },
  {
    title: 'टूटे हुए सपने से उठना',
    titleEnglish: 'Rebuilding After Fall',
    linesHindi: [
      'करियर की एक हार से टूट जरूर जाते हैं अंदर से',
      'पर अगले ही दिन चाय पीकर फिर किताब खोल लेते हैं',
    ],
    linesHinglish: [
      'Career ki ek haar se toot zaroor jaate hain andar se',
      'Par agle hi din chai peekar phir kitaab khol lete hain',
    ],
    linesEnglish: [
      'A tough career setback shakes them hard inside',
      'Yet the next morning they sip warm tea and open the books again',
    ],
  },
  {
    title: 'देसी स्वैग',
    titleEnglish: 'Clean Desi Style',
    linesHindi: [
      'महँगी घड़ी न भी हो कलाई पर तो क्या ग़म है',
      'लड़कों की सादगी और आत्मविश्वास ही सबसे बड़ा स्टाइल है',
    ],
    linesHinglish: [
      'Mehngi ghadi na bhi ho kalaai par to kya gham hai',
      'Ladkon ki saadgi aur aatmavishwaas hi sabse bada style hai',
    ],
    linesEnglish: [
      'No luxury watch on the wrist matters one bit',
      'Simplicity paired with quiet confidence beats every brand',
    ],
  },
  {
    title: 'कंधे से कंधा',
    titleEnglish: 'Shoulder to Shoulder',
    linesHindi: [
      'दोस्त की शादी हो या कोई अचानक आई मुसीबत',
      'सबसे पहले कुर्ता समेटकर खड़े लड़के ही दिखते हैं',
    ],
    linesHinglish: [
      'Dost ki shaadi ho ya koi achanak aayi museebat',
      'Sabse pehle kurta sametkar khade ladke hi dikhte hain',
    ],
    linesEnglish: [
      'Whether it is a friends wedding or sudden family crisis',
      'The boys always roll up their sleeves and show up first',
    ],
  },
  {
    title: 'बहन की रक्षा और प्यार',
    titleEnglish: 'Brothers Quiet Shield',
    linesHindi: [
      'दिन भर बहन से लड़ने और चिढ़ाने वाले वही लड़के',
      'बहन की आँख में आँसू देखकर पूरी दुनिया से भिड़ जाते हैं',
    ],
    linesHinglish: [
      'Din bhar behen se ladne aur chidhaane waale wahi ladke',
      'Behen ki aankh mein aansu dekhkar poori duniya se bhid jaate hain',
    ],
    linesEnglish: [
      'The same brothers who tease their sisters all afternoon',
      'Will face down the whole world if one tear touches her eyes',
    ],
  },
  {
    title: 'शाम की टपरी',
    titleEnglish: 'Evening Tea Stall',
    linesHindi: [
      'चार दोस्त, दो समोसे और ढेर सारी बकवास बातें',
      'लड़कों की आधी थकान बस इसी महफ़िल में उतर जाती है',
    ],
    linesHinglish: [
      'Chaar dost, do samose aur dher saari bakwaas baatein',
      'Ladkon ki aadhi thakaan bas isi mehfil mein utar jaati hai',
    ],
    linesEnglish: [
      'Four friends, two hot snacks, and endless silly banter',
      'Melts away half the stress of a young mans whole week',
    ],
  },
  {
    title: 'पसंद की ज़िद',
    titleEnglish: 'Committed Once Chosen',
    linesHindi: [
      'लड़के आसानी से किसी को दिल के करीब आने नहीं देते',
      'और जिसे एक बार चुन लें, उसे उम्र भर नहीं भूलते',
    ],
    linesHinglish: [
      'Ladke aasaani se kisi ko dil ke kareeb aane nahin dete',
      'Aur jise ek baar chun lein, use umar bhar nahin bhoolte',
    ],
    linesEnglish: [
      'Boys rarely let just anyone walk straight into their trust',
      'And whoever earns that seat never gets forgotten',
    ],
  },
  {
    title: 'किराये का कमरा',
    titleEnglish: 'Hostel & PG Days',
    linesHindi: [
      'हॉस्टल के छोटे कमरे में आधा पका खाना खाकर भी',
      'आँखों में बड़े शहर जीतने का सपना पलता है हर दिन',
    ],
    linesHinglish: [
      'Hostel ke chhote kamre mein aadha paka khaana khaakar bhi',
      'Aankhon mein bade shehar jeetne ka sapna palta hai har din',
    ],
    linesEnglish: [
      'Cooking clumsy quick meals inside cramped hostel rooms',
      'Still sparks bold dreams of conquering big cities ahead',
    ],
  },
  {
    title: 'बिन बताए मदद',
    titleEnglish: 'Silent Helpers',
    linesHindi: [
      'सेल्फी खींचकर मदद दिखाना इनकी आदत नहीं होती',
      'चुपचाप जेब से निकालकर किसी का काम बना देते हैं',
    ],
    linesHinglish: [
      'Selfie kheenchkar madad dikhana inki aadat nahin hoti',
      'Chupchaap jeb se nikaalkar kisi ka kaam bana dete hain',
    ],
    linesEnglish: [
      'Snapping selfies while helping was never their thing',
      'They quietly step in, settle the bill, and walk off smiling',
    ],
  },
  {
    title: 'हँसी के पीछे गहराई',
    titleEnglish: 'Depth Behind the Laugh',
    linesHindi: [
      'हर बात को हँसी में टाल देने वाले लड़के भी कभी-कभी',
      'रात को छत पर बैठकर बहुत गहरी बातें सोचते हैं',
    ],
    linesHinglish: [
      'Har baat ko hansi mein taal dene waale ladke bhi kabhi-kabhi',
      'Raat ko chhat par baithkar bahut gehri baatein sochte hain',
    ],
    linesEnglish: [
      'Even the boys who turn every tense moment into a joke',
      'Sit quiet on rooftops at midnight carrying deep thoughts',
    ],
  },
  {
    title: 'शराफ़त और स्वाभिमान',
    titleEnglish: 'Gentle & Self-Respecting',
    linesHindi: [
      'कपड़ों से ज़्यादा उनके लहजे में शराफ़त झलकती है',
      'सही लड़के कभी किसी कमज़ोर पर रौब नहीं झाड़ते',
    ],
    linesHinglish: [
      'Kapdon se zyada unke lehje mein sharaafat jhalakti hai',
      'Sahi ladke kabhi kisi kamzor par raub nahin jhaadte',
    ],
    linesEnglish: [
      'More than fashion, quiet decency shines inside their tone',
      'Good men never punch down to prove how tough they feel',
    ],
  },
  {
    title: 'क्रिकेट का मैदान',
    titleEnglish: 'Sunday Pitch Joy',
    linesHindi: [
      'धूप चाहे जितनी तेज़ हो इतवार की सुबह में',
      'गली की पिच और यारों का शोर इन्हें फिर जवान कर देता है',
    ],
    linesHinglish: [
      'Dhoop chaahe jitni tez ho itwaar ki subah mein',
      'Gali ki pitch aur yaaron ka shor inhein phir jawaan kar deta hai',
    ],
    linesEnglish: [
      'No matter how hot the Sunday morning sun blazes down',
      'One street cricket match with the boys restores pure youth',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'ख़ामोश त्याग',
    titleEnglish: 'Quiet Sacrifices',
    linesHindi: [
      'अपने नए जूते टालकर परिवार के त्योहार सजाने वाले',
      'घर के बड़े बेटे अक्सर उम्र से पहले समझदार हो जाते हैं',
    ],
    linesHinglish: [
      'Apne naye joote taalkar parivaar ke tyohaar sajaane waale',
      'Ghar ke bade bete aksar umar se pehle samajhdaar ho jaate hain',
    ],
    linesEnglish: [
      'Skipping new shoes for themselves to brighten family festivals',
      'Eldest sons grow wise far ahead of their years in silence',
    ],
  },
  {
    title: 'दिल के सच्चे यार',
    titleEnglish: 'Unfiltered Loyalty',
    linesHindi: [
      'जहाँ मतलब की दुनिया मुँह मोड़कर निकल जाती है',
      'वहाँ पुराने यार बिना बुलाए सामने आ खड़े होते हैं',
    ],
    linesHinglish: [
      'Jahaan matlab ki duniya munh modkar nikal jaati hai',
      'Wahaan purane yaar bina bulaaye saamne aa khade hote hain',
    ],
    linesEnglish: [
      'Right where fair-weather crowds turn away quickly',
      'Old brothers step up unasked to lock arms beside you',
    ],
  },
  {
    title: 'जिम और अनुशासन',
    titleEnglish: 'Discipline in Sweat',
    linesHindi: [
      'दर्द को भी ताक़त में बदलना बख़ूबी जानते हैं लड़के',
      'तभी तो पसीने में भीगकर खुद को नया आकार देते हैं',
    ],
    linesHinglish: [
      'Dard ko bhi taaqat mein badalna bakhoobi jaante hain ladke',
      'Tabhi to paseene mein bheegkar khud ko naya aakaar dete hain',
    ],
    linesEnglish: [
      'Boys know well how to forge heartbreak straight into iron grit',
      'Soaking in daily sweat to build a stronger self',
    ],
  },
  {
    title: 'सपने बड़े हैं',
    titleEnglish: 'Humble Start, Big Aim',
    linesHindi: [
      'छोटे कस्बे से निकले ज़रूर हैं सादा झोला लेकर',
      'पर इरादे पूरी दुनिया में नाम करने के रखते हैं लड़के',
    ],
    linesHinglish: [
      'Chhote kasbe se nikle zaroor hain saada jhola lekar',
      'Par iraade poori duniya mein naam karne ke rakhte hain ladke',
    ],
    linesEnglish: [
      'Stepping out of small towns carrying one simple backpack',
      'With dreams wide enough to leave a lasting mark everywhere',
    ],
  },
  {
    title: 'बात के पक्के',
    titleEnglish: 'Word as Bond',
    linesHindi: [
      'ज़ुबान से निकली बात को पत्थर की लकीर मानते हैं हम',
      'मुश्किल आए तब भी अपने वादे से पीछे नहीं हटते',
    ],
    linesHinglish: [
      'Zubaan se nikli baat ko patthar ki lakeer maante hain hum',
      'Mushkil aaye tab bhi apne waade se peeche nahin hat-te',
    ],
    linesEnglish: [
      'Once a promise leaves our lips, it stays carved in stone',
      'Even when trouble knocks, we never walk back on our word',
    ],
  },
  {
    title: 'चोट खाकर भी मस्त',
    titleEnglish: 'Smiling Through Bruises',
    linesHindi: [
      'घुटने छिलें या दिल पर गहरी खरोंच लग जाए कभी',
      'दो दिन में झटककर फिर हँसी बिखेरते हैं लड़के',
    ],
    linesHinglish: [
      'Ghutne chhilein ya dil par gehri kharonch lag jaaye kabhi',
      'Do din mein jhatakkar phir hansi bikherte hain ladke',
    ],
    linesEnglish: [
      'Scraped knees or a bruised heart along the way',
      'Give them two days to dust off and share laughs again',
    ],
  },
  {
    title: 'अपने दम पर मंज़िल',
    titleEnglish: 'Self-Reliant Spirit',
    linesHindi: [
      'किसी के भरोसे अपनी मंज़िल नहीं छोड़ते आजकल के लड़के',
      'पार्ट-टाइम काम करके भी अपनी फीस खुद भरते हैं',
    ],
    linesHinglish: [
      'Kisi ke bharose apni manzil nahin chhodte aajkal ke ladke',
      'Part-time kaam karke bhi apni fees khud bharte hain',
    ],
    linesEnglish: [
      'Modern boys refuse to lean passively waiting on luck',
      'Working side gigs gladly just to pay their own way forward',
    ],
  },
  {
    title: 'कपड़ों से ज़्यादा संस्कार',
    titleEnglish: 'Grace Over Fashion',
    linesHindi: [
      'फैशन से ज़्यादा उनके व्यवहार में चमक होनी चाहिए',
      'बुज़ुर्गों के पैर छूने वाला लड़का हमेशा रॉयल दिखता है',
    ],
    linesHinglish: [
      'Fashion se zyada unke vyavahaar mein chamak honi chahiye',
      'Buzurgon ke pair chhoone wala ladka hamesha royal dikhta hai',
    ],
    linesEnglish: [
      'Character shines brighter than any trendy jacket ever can',
      'A young man bowing humbly before elders always looks royal',
    ],
  },
  {
    title: 'रात का मुसाफ़िर',
    titleEnglish: 'Late Night Hustlers',
    linesHindi: [
      'जब आधा शहर नींद में खर्राटे भर रहा होता है',
      'कई लड़के लैपटॉप के आगे अपना भविष्य गढ़ रहे होते हैं',
    ],
    linesHinglish: [
      'Jab aadha shehar neend mein kharraate bhar raha hota hai',
      'Kai ladke laptop ke aage apna bhavishya gadh rahe hote hain',
    ],
    linesEnglish: [
      'While half the neighborhood sleeps soundly after midnight',
      'Countless boys sit glowing before screens shaping their future',
    ],
  },
  {
    title: 'मजाक़िया अंदाज़',
    titleEnglish: 'Wit and Warmth',
    linesHindi: [
      'माहौल कितना भी गंभीर क्यों न हो जाए कमरे का',
      'इनका एक छोटा सा पंच सबको हँसाकर हल्का कर देता है',
    ],
    linesHinglish: [
      'Maahaul kitna bhi gambheer kyun na ho jaaye kamre ka',
      'Inka ek chhota sa punch sabko hansaakar halka kar deta hai',
    ],
    linesEnglish: [
      'No matter how heavy tension hangs over the room',
      'One clever line from the boys breaks everyone into relief',
    ],
  },
  {
    title: 'आँसू छुपाने की कला',
    titleEnglish: 'Hidden Tears',
    linesHindi: [
      'बाथरूम का नल चलाकर कई बार ग़म बहा देते हैं वो',
      'और बाहर निकलकर फिर मज़बूत भाई या बेटा बन जाते हैं',
    ],
    linesHinglish: [
      'Bathroom ka nal chalaakar kai baar gham baha dete hain wo',
      'Aur baahar nikalkar phir mazboot bhai ya beta ban jaate hain',
    ],
    linesEnglish: [
      'Sometimes running tap water masks quiet moments of pain',
      'Before they step back out as steady brothers and sons',
    ],
  },
  {
    title: 'सच्चे दोस्त की कीमत',
    titleEnglish: 'Value of True Brothers',
    linesHindi: [
      'गर्लफ्रेंड या काम छूट जाए तो संभालने वाले वही होते हैं',
      'सच्चे यार लड़कों की ज़िंदगी की सबसे बड़ी ताक़त हैं',
    ],
    linesHinglish: [
      'Rishta ya kaam chhoot jaaye to sanbhaalne waale wahi hote hain',
      'Sacche yaar ladkon ki zindagi ki sabse badi taaqat hain',
    ],
    linesEnglish: [
      'When heartbreak or setbacks hit out of nowhere',
      'Real friends step up as a young mans unbreakable backbone',
    ],
  },
  {
    title: 'सीधा दिल, तेज़ दिमाग़',
    titleEnglish: 'Street Smart & Pure',
    linesHindi: [
      'शहर की चालाकियों को बख़ूबी समझते हैं आज के लड़के',
      'बस किसी के साथ गलत करना इनकी फ़ितरत में नहीं',
    ],
    linesHinglish: [
      'Shehar ki chaalaakiyon ko bakhoobi samajhte hain aaj ke ladke',
      'Bas kisi ke saath galat karna inki fitrat mein nahin',
    ],
    linesEnglish: [
      'Modern boys read street tricks faster than anyone',
      'Choosing never to play dirty simply defines their code',
    ],
  },
  {
    title: 'फ़ोटो नहीं, काम में यक़ीन',
    titleEnglish: 'Action Over Photos',
    linesHindi: [
      'कहानी सुनाने से ज़्यादा करके दिखाने में यक़ीन रखते हैं',
      'जब नाम बनता है तो तस्वीरें खुद बोलने लगती हैं',
    ],
    linesHinglish: [
      'Kahaani sunaane se zyada karke dikhane mein yaqeen rakhte hain',
      'Jab naam banta hai to tasveerein khud bolne lagti hain',
    ],
    linesEnglish: [
      'They believe in showing output rather than spinning talk',
      'Once milestones stand tall, results speak for themselves',
    ],
  },
  {
    title: 'दबंग दोस्ती',
    titleEnglish: 'Unbreakable Pack',
    linesHindi: [
      'तीन-चार लड़कों की टोली जब एक साथ निकल पड़ती है',
      'तो सफ़र चाहे कितना लंबा हो, रास्ता छोटा लगने लगता है',
    ],
    linesHinglish: [
      'Teen-chaar ladkon ki toli jab ek saath nikal padti hai',
      'To safar chaahe kitna lamba ho, raasta chhota lagne lagta hai',
    ],
    linesEnglish: [
      'When three or four close buddies hit the road together',
      'Even endless highways shrink into one great memory',
    ],
  },
  {
    title: 'नए ज़माने का जोश',
    titleEnglish: 'Hungry Generation',
    linesHindi: [
      'न पुरानी शिकायतों में अटकते हैं, न किस्मत को कोसते हैं',
      'आज के लड़के खुद अपना नया आसमान लिखने निकले हैं',
    ],
    linesHinglish: [
      'Na purani shikayaton mein atakte hain, na kismat ko koste hain',
      'Aaj ke ladke khud apna naya aasmaan likhne nikle hain',
    ],
    linesEnglish: [
      'Neither stuck blaming yesterday nor cursing their stars',
      'Todays boys are stepping out to build brand new skies',
    ],
  },
  {
    title: 'सुकून की खोज',
    titleEnglish: 'Chasing Real Peace',
    linesHindi: [
      'महफ़िल में हँसी और एकांत में शांति ढूँढते हैं लड़के',
      'कम ही लोग समझ पाते हैं इनके दिल की साफ़ किताब',
    ],
    linesHinglish: [
      'Mehfil mein hansi aur ekaant mein shaanti dhoondhte hain ladke',
      'Kam hi log samajh paate hain inke dil ki saaf kitaab',
    ],
    linesEnglish: [
      'Sharing laughs at tables while craving quiet peace inside',
      'Few people ever read just how simple their honest hearts are',
    ],
  },
  {
    title: 'हद में रहना, शान से चलना',
    titleEnglish: 'Respectful Pride',
    linesHindi: [
      'किसी लड़की की इज़्ज़त करना सबसे बड़ी मर्दानगी है',
      'तभी तो समझदार लड़कों की हर जगह कद्र होती है',
    ],
    linesHinglish: [
      'Kisi ladki ki izzat karna sabse badi mardaanagi hai',
      'Tabhi to samajhdaar ladkon ki har jagah qadr hoti hai',
    ],
    linesEnglish: [
      'Honoring women with respect defines true strength in a man',
      'That grace earns genuine boys admiration everywhere they walk',
    ],
  },
  {
    title: 'बदलता मौसम, पक्का इरादा',
    titleEnglish: 'Steady Through Seasons',
    linesHindi: [
      'धूप हो, बारिश हो या कड़ाके की सर्दी पड़ रही हो',
      'अपना काम पूरा करके ही दम लेते हैं मेहनती लड़के',
    ],
    linesHinglish: [
      'Dhoop ho, baarish ho ya kadaake ki sardi pad rahi ho',
      'Apna kaam poora karke hi dam lete hain mehnati ladke',
    ],
    linesEnglish: [
      'Blazing heat, heavy downpour, or freezing winter dawn',
      'Driven boys never rest until the task stands done right',
    ],
  },
  {
    title: 'सादगी भरी मुस्कान',
    titleEnglish: 'Warm Everyday Smile',
    linesHindi: [
      'कमीज़ पुरानी हो या जूते थोड़े घिस गए हों भले',
      'चेहरे की निश्चिंत मुस्कान उन्हें सबसे अलग बनाती है',
    ],
    linesHinglish: [
      'Kameez purani ho ya joote thode ghis gaye hon bhale',
      'Chehre ki nishchint muskaan unhein sabse alag banaati hai',
    ],
    linesEnglish: [
      'Even in a faded shirt and scuffed everyday sneakers',
      'An unbothered, genuine smile sets them apart instantly',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'पहली कमाई का जश्न',
    titleEnglish: 'First Paycheck Pride',
    linesHindi: [
      'पहली तनख़्वाह हाथ में आते ही सबसे पहले घर याद आता है',
      'माँ के लिए साड़ी और पापा के लिए घड़ी ही असली ख़ुशी है',
    ],
    linesHinglish: [
      'Pehli tankhwaah haath mein aate hi sabse pehle ghar yaad aata hai',
      'Maa ke liye saadi aur papa ke liye ghadi hi asli khushi hai',
    ],
    linesEnglish: [
      'The second their first salary lands, thoughts fly straight home',
      'Buying a gift for Mom and Dad brings their proudest joy',
    ],
  },
  {
    title: 'बेफ़िक्री और फ़िक्र का मेल',
    titleEnglish: 'Carefree Yet Caring',
    linesHindi: [
      'देखने में भले ही बिल्कुल बेपरवाह लगते हों सड़क पर',
      'पर अपनों के एक संदेश पर सारी दुनिया भूल जाते हैं',
    ],
    linesHinglish: [
      'Dekhne mein bhale hi bilkul beparwaah lagte hon sadak par',
      'Par apnon ke ek sandesh par saari duniya bhool jaate hain',
    ],
    linesEnglish: [
      'Out on the street they act totally chill and unbothered',
      'Yet one worried text from family drops everything instantly',
    ],
  },
  {
    title: 'हार के बाद भी जोश',
    titleEnglish: 'Never Down Long',
    linesHindi: [
      'मैच हारे हों या कोई परीक्षा बिगड़ गई हो अचानक',
      'शाम को फिर नई रणनीति बनाकर बैठ जाते हैं लड़के',
    ],
    linesHinglish: [
      'Match haare hon ya koi pariksha bigad gayi ho achanak',
      'Shaam ko phir nayi ranneeti banaakar baith jaate hain ladke',
    ],
    linesEnglish: [
      'After dropping a close match or stumbling on an exam',
      'By evening they sit mapping out a sharper game plan',
    ],
  },
  {
    title: 'तस्वीरों से दूर असल ज़िंदगी',
    titleEnglish: 'Real Beyond Filters',
    linesHindi: [
      'फ़िल्टर वाली दुनिया से कहीं ज़्यादा असली होते हैं ये',
      'धूल लगे कपड़ों में भी इनकी चमक कम नहीं होती',
    ],
    linesHinglish: [
      'Filter waali duniya se kahin zyada asli hote hain ye',
      'Dhool lage kapdon mein bhi inki chamak kam nahin hoti',
    ],
    linesEnglish: [
      'Far more authentic than filtered snapshots online',
      'Even covered in field dust, their spirit gleams clean',
    ],
  },
  {
    title: 'छोटी-छोटी खुशियों के राजा',
    titleEnglish: 'Kings of Simple Joys',
    linesHindi: [
      'बारिश में भीगकर कुल्हड़ वाली चाय मिल जाए अगर',
      'तो लड़कों के लिए उससे बड़ा कोई रिज़ॉर्ट नहीं होता',
    ],
    linesHinglish: [
      'Baarish mein bheegkar kulhad waali chai mil jaaye agar',
      'To ladkon ke liye usse bada koi resort nahin hota',
    ],
    linesEnglish: [
      'Soaked in light rain holding an earthen cup of hot tea',
      'Feels richer to them than any luxury weekend resort',
    ],
  },
  {
    title: 'सबको हँसाने वाला यार',
    titleEnglish: 'Heart of the Group',
    linesHindi: [
      'हर ग्रुप में एक ऐसा लड़का ज़रूर होता है यारों',
      'जो खुद उदास रहकर भी पूरे माहौल को ज़िंदा रखता है',
    ],
    linesHinglish: [
      'Har group mein ek aisa ladka zaroor hota hai yaaro',
      'Jo khud udaas rehkar bhi poore maahaul ko zinda rakhta hai',
    ],
    linesEnglish: [
      'Every crew always has that one golden buddy',
      'Who hides his own quiet blues simply to keep everyone laughing',
    ],
  },
  {
    title: 'खुद के बनाए रास्ते',
    titleEnglish: 'Self-Built Track',
    linesHindi: [
      'बने-बनाए साम्राज्य पर बैठने का मज़ा वो क्या जानें',
      'जिन्होंने शून्य से शुरू करके खुद की पहचान गढ़ी हो',
    ],
    linesHinglish: [
      'Bane-banaaye saamraajya par baithne ka maza wo kya jaanein',
      'Jinhone shoonya se shuru karke khud ki pehchaan gadhi ho',
    ],
    linesEnglish: [
      'Inheriting built empires never compares to the thrill',
      'Of starting from zero and sculpting your own proud name',
    ],
  },
  {
    title: 'शांत स्वभाव, गहरी सोच',
    titleEnglish: 'Quiet Observer',
    linesHindi: [
      'ज़्यादा बोलने से बेहतर सुनना पसंद करते हैं कुछ लड़के',
      'क्योंकि उन्हें दिखावे से ज़्यादा समझदारी प्यारी होती है',
    ],
    linesHinglish: [
      'Zyada bolne se behtar sunna pasand karte hain kuch ladke',
      'Kyunki unhein dikhawe se zyada samajhdaari pyaari hoti hai',
    ],
    linesEnglish: [
      'Some boys choose listening calmly over loud small talk',
      'Valuing sharp quiet wisdom far above cheap attention',
    ],
  },
  {
    title: 'जिम्मेदारी का ताज',
    titleEnglish: 'Crown of Duty',
    linesHindi: [
      'कम उम्र में ही घर के खर्च का हिसाब सीख लेते हैं',
      'लड़कों की मेहनत के पीछे पूरा परिवार सुरक्षित सोता है',
    ],
    linesHinglish: [
      'Kam umar mein hi ghar ke kharch ka hisaab seekh lete hain',
      'Ladkon ki mehnat ke peeche poora parivaar surakshit sota hai',
    ],
    linesEnglish: [
      'Learning household budgets early before carefree youth ends',
      'Their steady grind lets the entire family sleep in peace',
    ],
  },
  {
    title: 'बिना शर्त यारी',
    titleEnglish: 'Unconditional Crew',
    linesHindi: [
      'महीनों बात न हो तब भी पहली आवाज़ में पहचान लेते हैं',
      'लड़कों की दोस्ती वक़्त और दूरी से कभी पुरानी नहीं होती',
    ],
    linesHinglish: [
      'Mahino baat na ho tab bhi pehli aawaaz mein pehchaan lete hain',
      'Ladkon ki dosti waqt aur doori se kabhi purani nahin hoti',
    ],
    linesEnglish: [
      'Months apart without texting never dull the greeting',
      'True brotherhood picks right back up on the very first hello',
    ],
  },
  {
    title: 'जूनून और धीरज',
    titleEnglish: 'Patience Meets Drive',
    linesHindi: [
      'एक दिन की कामयाबी का सपना नहीं देखते मेहनती लड़के',
      'सालों तक चुपचाप नींव मजबूत करते रहते हैं ये',
    ],
    linesHinglish: [
      'Ek din ki kaamyaabi ka sapna nahin dekhte mehnati ladke',
      'Saalon tak chupchaap neenv mazboot karte rehte hain ye',
    ],
    linesEnglish: [
      'Driven young men do not chase overnight flashes of fame',
      'They spend quiet years pouring concrete beneath their goals',
    ],
  },
  {
    title: 'दिल साफ, आँखें सच्ची',
    titleEnglish: 'Honest Gaze',
    linesHindi: [
      'झूठे वादों का जाल बुनना नहीं आता सच्चे लड़कों को',
      'जितना निभा सकते हैं, सिर्फ़ उतना ही कहते हैं वो',
    ],
    linesHinglish: [
      'Jhoothe waadon ka jaal bunna nahin aata sacche ladkon ko',
      'Jitna nibha sakte hain, sirf utna hi kehte hain wo',
    ],
    linesEnglish: [
      'Genuine men never spin shiny traps of hollow vows',
      'They promise only what their hands can faithfully deliver',
    ],
  },
  {
    title: 'अपनों के लिए ढाल',
    titleEnglish: 'Protective Core',
    linesHindi: [
      'जब किसी अपने पर आँच आती दिखे सामने से',
      'तो लड़के बिना कुछ सोचे सबसे आगे आ खड़े होते हैं',
    ],
    linesHinglish: [
      'Jab kisi apne par aanch aati dikhe saamne se',
      'To ladke bina kuch soche sabse aage aa khade hote hain',
    ],
    linesEnglish: [
      'Whenever trouble threatens anyone inside their home',
      'Boys step directly out front without blinking twice',
    ],
  },
  {
    title: 'नए शहर में हिम्मत',
    titleEnglish: 'Brave in Big Cities',
    linesHindi: [
      'अनजान सड़कों पर भी घबराना नहीं सीखा हमने',
      'मेहनत और मुस्कान के सहारे हर शहर अपना बना लेते हैं',
    ],
    linesHinglish: [
      'Anjaan sadkon par bhi ghabrana nahin seekha humne',
      'Mehnat aur muskaan ke sahaare har shehar apna bana lete hain',
    ],
    linesEnglish: [
      'Even down unfamiliar avenues they refuse to lose nerve',
      'With grit and an easy grin, any strange city turns into home',
    ],
  },
  {
    title: 'चुटकुले और गहरी बातें',
    titleEnglish: 'Midnight Roof Talks',
    linesHindi: [
      'आधी रात को चाय के साथ करियर और जिंदगी की बातें',
      'लड़कों की महफ़िल में हर सवाल का हल निकल आता है',
    ],
    linesHinglish: [
      'Aadhi raat ko chai ke saath career aur zindagi ki baatein',
      'Ladkon ki mehfil mein har sawaal ka hal nikal aata hai',
    ],
    linesEnglish: [
      'Late-night tea talks mixing life dreams and silly jokes',
      'Somehow solve half the worries sitting around the crew',
    ],
  },
  {
    title: 'ताक़त का सलीक़ा',
    titleEnglish: 'Graceful Strength',
    linesHindi: [
      'असली मर्द वही है जिसकी मौजूदगी से सुरक्षा महसूस हो',
      'न कि जिसके बोलने से किसी को डर लगने लगे',
    ],
    linesHinglish: [
      'Asli mard wahi hai jiski maujoodgi se suraksha mehsoos ho',
      'Na ki jiske bolne se kisi ko dar lagne lage',
    ],
    linesEnglish: [
      'Real manhood makes everyone nearby feel steady and safe',
      'Never making quiet rooms shrink back in fear',
    ],
  },
  {
    title: 'पसीने और जज़्बे की चमक',
    titleEnglish: 'Shine From Effort',
    linesHindi: [
      'कहते हैं लड़कों की असली खूबसूरती उनके चेहरे से नहीं',
      'उनके काम, किरदार और आत्मविश्वास से झलकती है',
    ],
    linesHinglish: [
      'Kehte hain ladkon ki asli khoobsurati unke chehre se nahin',
      'Unke kaam, kirdaar aur aatmavishwaas se jhalakti hai',
    ],
    linesEnglish: [
      'A young mans real appeal never hangs on fancy mirrors',
      'It shines naturally out of steady work and solid character',
    ],
  },
  {
    title: 'ठोकरों के बाद मुस्कान',
    titleEnglish: 'Built Tough',
    linesHindi: [
      'जिंदगी की हर रेस आसान नहीं होती है यारों',
      'पर मुस्कुराकर दौड़ने वाले लड़के हर मोड़ जीत लेते हैं',
    ],
    linesHinglish: [
      'Zindagi ki har race aasaan nahin hoti hai yaaro',
      'Par muskurakar daudne waale ladke har mod jeet lete hain',
    ],
    linesEnglish: [
      'Not every track in life comes paved smooth and flat',
      'Yet boys who keep smiling through grit win every lap',
    ],
  },
  {
    title: 'बचपन का यार',
    titleEnglish: 'School Days Crew',
    linesHindi: [
      'बचपन वाले दोस्त आज भले ही अलग शहरों में बस गए हों',
      'नाम सुनते ही चेहरे पर वही पुरानी चमक आ जाती है',
    ],
    linesHinglish: [
      'Bachpan waale dost aaj bhale hi alag shehron mein bas gaye hon',
      'Naam sunte hi chehre par wahi purani chamak aa jaati hai',
    ],
    linesEnglish: [
      'Even if school buddies moved across distant cities now',
      'Just hearing their name lights up that exact old grin',
    ],
  },
  {
    title: 'सरल और बेबाक',
    titleEnglish: 'Simple & Unafraid',
    linesHindi: [
      'न बनावटी लहजा है, न किसी से झूठा दिखावा करते हैं',
      'लड़के जैसे अंदर से हैं, बाहर से भी वैसे ही दिखते हैं',
    ],
    linesHinglish: [
      'Na banaawati lehja hai, na kisi se jhootha dikhawa karte hain',
      'Ladke jaise andar se hain, baahar se bhi waise hi dikhte hain',
    ],
    linesEnglish: [
      'No rehearsed tones, no shiny performance put on for show',
      'What you meet on the surface is the exact heart inside',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'अपने पैरों पर खड़ा होना',
    titleEnglish: 'Standing Independent',
    linesHindi: [
      'पिता के नाम से ज़्यादा अपनी पहचान बनाने का नशा है',
      'इसीलिए दिन-रात एक करके खुद को तराशते हैं लड़के',
    ],
    linesHinglish: [
      'Pita ke naam se zyada apni pehchaan banaane ka nasha hai',
      'Isiliye din-raat ek karke khud ko taraashte hain ladke',
    ],
    linesEnglish: [
      'More than leaning on a family name, they crave earning their own',
      'Working round the clock simply to polish their craft',
    ],
  },
  {
    title: 'दोस्त के लिए वक़्त',
    titleEnglish: 'Always Time for Bros',
    linesHindi: [
      'सप्ताह भर काम के बीच भले ही व्यस्त रहें कितना भी',
      'यार ने आवाज़ दी तो आधा घंटा निकाल ही लेते हैं',
    ],
    linesHinglish: [
      'Saptah bhar kaam ke beech bhale hi vyast rahein kitna bhi',
      'Yaar ne aawaaz di to aadha ghanta nikaal hi lete hain',
    ],
    linesEnglish: [
      'Regardless how tightly deadlines pack their week',
      'When a close brother calls, half an hour always opens up',
    ],
  },
  {
    title: 'शोर कम, इरादे बड़े',
    titleEnglish: 'Quiet Ambition',
    linesHindi: [
      'सपनों का विज्ञापन लगाने से मंज़िल नहीं मिलती',
      'लड़के खामोशी से काम निपटाते हैं और सीधा आगे निकलते हैं',
    ],
    linesHinglish: [
      'Sapnon ka vigyapan lagaane se manzil nahin milti',
      'Ladke khaamoshi se kaam niptaate hain aur seedha aage nikalte hain',
    ],
    linesEnglish: [
      'Hanging posters of dreams never builds a single mile',
      'Boys quietly stack the work and let milestones announce them',
    ],
  },
  {
    title: 'अंधेरे में राह बनाना',
    titleEnglish: 'Pathfinder Grit',
    linesHindi: [
      'राह में पत्थर आएँ तो शिकायत नहीं करते हम',
      'दोस्त मिलकर उन्हें किनारे करते हैं और बढ़ जाते हैं',
    ],
    linesHinglish: [
      'Raah mein patthar aayein to shikayat nahin karte hum',
      'Dost milkar unhein kinaare karte hain aur badh jaate hain',
    ],
    linesEnglish: [
      'When boulders block the lane, we do not sit complaining',
      'Friends lock arms, clear the track, and keep rolling',
    ],
  },
  {
    title: 'दिल में वफ़ा',
    titleEnglish: 'Faithful Hearts',
    linesHindi: [
      'बाज़ार में भले हज़ारों चेहरे खूबसूरत नज़र आएँ',
      'पर सच्चे लड़के अपनी एक पसंद पर पूरी तरह टिके रहते हैं',
    ],
    linesHinglish: [
      'Baazaar mein bhale hazaaron chehre khoobsurat nazar aayein',
      'Par sacche ladke apni ek pasand par poori tarah tike rehte hain',
    ],
    linesEnglish: [
      'Even amidst crowds full of passing distractions',
      'Loyal men stay fiercely devoted to the one they chose',
    ],
  },
  {
    title: 'पुरानी जींस, नया जोश',
    titleEnglish: 'Old Jeans, Fresh Fire',
    linesHindi: [
      'पसंद की पुरानी शर्ट में भी उतने ही जंचते हैं लड़के',
      'क्योंकि असली चमक उनकी आँखों के आत्मविश्वास में है',
    ],
    linesHinglish: [
      'Pasand ki purani shirt mein bhi utne hi janchte hain ladke',
      'Kyunki asli chamak unki aankhon ke aatmavishwaas mein hai',
    ],
    linesEnglish: [
      'They look sharp even in that favorite worn-in cotton shirt',
      'Because true swagger lives inside steady eyes',
    ],
  },
  {
    title: 'सच्चा सम्मान',
    titleEnglish: 'Respect Earned Quietly',
    linesHindi: [
      'हर महफ़िल में शोर करके ध्यान खींचना नहीं आता',
      'लड़के अपने काम और शालीनता से दिल जीत लेते हैं',
    ],
    linesHinglish: [
      'Har mehfil mein shor karke dhyaan kheenchana nahin aata',
      'Ladke apne kaam aur shaaleenta se dil jeet lete hain',
    ],
    linesEnglish: [
      'They never chase spotlights with loud gimmicks',
      'Steady respect arrives through dignity and sharp output',
    ],
  },
  {
    title: 'आगे बढ़ने की भूख',
    titleEnglish: 'Always Improving',
    linesHindi: [
      'कल जो मुश्किल लगता था आज आसान लगने लगा है',
      'यही तो लगातार सीखने वाले लड़कों की पहचान है',
    ],
    linesHinglish: [
      'Kal jo mushkil lagta tha aaj aasaan lagne laga hai',
      'Yahi to lagaataar seekhne waale ladkon ki pehchaan hai',
    ],
    linesEnglish: [
      'What looked impossible last winter feels routine today',
      'That quiet growth defines boys hungry to keep leveling up',
    ],
  },
  {
    title: 'मुस्कुराते हुए संघर्ष',
    titleEnglish: 'Cheerful Hustle',
    linesHindi: [
      'चाहे नौकरी की तलाश हो या नए कारोबार का तनाव',
      'लड़के दोस्तों के बीच बैठकर सारा डर हँसी में उड़ा देते हैं',
    ],
    linesHinglish: [
      'Chaahe naukri ki talaash ho ya naye kaarobaar ka tanaav',
      'Ladke doston ke beech baithkar saara dar hansi mein uda dete hain',
    ],
    linesEnglish: [
      'Job hunts, tight deadlines, or starting out from scratch',
      'Sitting with brothers turns half that worry into shared laughter',
    ],
  },
  {
    title: 'अपनों की ख़ुशी सबसे पहले',
    titleEnglish: 'Family First Always',
    linesHindi: [
      'अपनी ख्वाहिशों की सूची छोटी रख लेते हैं कई बार',
      'ताकि छोटे भाई-बहन के सारे सपने पूरे हो सकें',
    ],
    linesHinglish: [
      'Apni khwahishon ki soochi chhoti rakh lete hain kai baar',
      'Taaki chhote bhai-behen ke saare sapne poore ho sakein',
    ],
    linesEnglish: [
      'Trimming back their own wishlist quietly year after year',
      'Just to watch younger siblings dreams take flight first',
    ],
  },
  {
    title: 'निडर राही',
    titleEnglish: 'Fearless Travelers',
    linesHindi: [
      'अँधेरा कितना भी गहरा हो रास्ते के सामने खड़ा',
      'दो क़दम चलकर ही उजाला खोज लेते हैं हिम्मती लड़के',
    ],
    linesHinglish: [
      'Andhera kitna bhi gehra ho raaste ke saamne khada',
      'Do kadam chalkar hi ujala khoj lete hain himmati ladke',
    ],
    linesEnglish: [
      'However thick darkness hangs across an unfamiliar turn',
      'Bold boys walk straight through until sunlight greets them',
    ],
  },
  {
    title: 'साफ़ नीयत का इनाम',
    titleEnglish: 'Clean Intent Wins',
    linesHindi: [
      'चालाकी के रास्ते कुछ दिन तो अच्छे लग सकते हैं',
      'पर लंबी दूरी हमेशा साफ़ नीयत वाले लड़के ही जीतते हैं',
    ],
    linesHinglish: [
      'Chaalaaki ke raaste kuch din to acche lag sakte hain',
      'Par lambi doori hamesha saaf neeyat waale ladke hi jeette hain',
    ],
    linesEnglish: [
      'Clever shortcuts look flashy only for a passing season',
      'Over real miles, honest guys always finish out ahead',
    ],
  },
  {
    title: 'दिल से देसी',
    titleEnglish: 'Rooted at Heart',
    linesHindi: [
      'दुनिया के किसी भी बड़े शहर में जा बसें ये लड़के',
      'गांव की मिट्टी और माँ के हाथ का स्वाद नहीं भूलते',
    ],
    linesHinglish: [
      'Duniya ke kisi bhi bade shehar mein ja basein ye ladke',
      'Gaanv ki mitti aur maa ke haath ka swaad nahin bhoolte',
    ],
    linesEnglish: [
      'No matter which gleaming skyline they move across',
      'They never outgrow hometown roots or mothers warm cooking',
    ],
  },
  {
    title: 'कठिन वक़्त के साथी',
    titleEnglish: 'Rock in Tough Hours',
    linesHindi: [
      'जब सब हाथ झाड़कर किनारे खड़े हो जाते हैं चुपचाप',
      'तब असली लड़के ही कंधा लगाकर नैया पार लगाते हैं',
    ],
    linesHinglish: [
      'Jab sab haath jhaadkar kinaare khade ho jaate hain chupchaap',
      'Tab asli ladke hi kandha lagaakar naiya paar lagaate hain',
    ],
    linesEnglish: [
      'When fair-weather spectators dust their hands and step aside',
      'Dependable men put their shoulder in and push the boat free',
    ],
  },
  {
    title: 'स्वाभिमान से समझौता नहीं',
    titleEnglish: 'Honor Untraded',
    linesHindi: [
      'दो वक्त की रोटी कम खा लेना मंजूर होता है इन्हें',
      'पर किसी के आगे सिर झुकाना लड़कों को गवारा नहीं',
    ],
    linesHinglish: [
      'Do waqt ki roti kam khaa lena manzoor hota hai inhein',
      'Par kisi ke aage sir jhukaana ladkon ko gawaara nahin',
    ],
    linesEnglish: [
      'Living lean and simple sits far easier on their soul',
      'Than bending their spine for someone elses favor',
    ],
  },
  {
    title: 'हल्की मुस्कान, पक्की बात',
    titleEnglish: 'Easy Grin, Solid Word',
    linesHindi: [
      'चेहरे पर हल्की सी मुस्कान और बात में पूरा वज़न',
      'यही हर समझदार लड़के की सबसे प्यारी अदा होती है',
    ],
    linesHinglish: [
      'Chehre par halki si muskaan aur baat mein poora wazan',
      'Yahi har samajhdaar ladke ki sabse pyaari ada hoti hai',
    ],
    linesEnglish: [
      'An easygoing smile paired with unmistakable weight in speech',
      'Stands out as every grounded mans sharpest charm',
    ],
  },
  {
    title: 'नई सुबह की तलाश',
    titleEnglish: 'Chasing Better Days',
    linesHindi: [
      'कल क्या बिगड़ा, इसका अफ़सोस ज़्यादा देर नहीं पालते',
      'सुबह होते ही नए लक्ष्य पर निकल पड़ते हैं लड़के',
    ],
    linesHinglish: [
      'Kal kya bigda, iska afsos zyada der nahin paalte',
      'Subah hote hi naye lakshya par nikal padte hain ladke',
    ],
    linesEnglish: [
      'They never nurse regret over yesterdays misses for long',
      'As dawn breaks, they lace up and chase fresh ground',
    ],
  },
  {
    title: 'ख़ामोश ताक़त',
    titleEnglish: 'Quiet Backbone',
    linesHindi: [
      'बाहर से भले ही बिल्कुल सामान्य दिखते हों ये हर रोज़',
      'घर के हर मुश्किल मोड़ पर यही सबसे बड़े सहारे होते हैं',
    ],
    linesHinglish: [
      'Baahar se bhale hi bilkul saamaanya dikhte hon ye har roz',
      'Ghar ke har mushkil mod par yahi sabse bade sahaare hote hain',
    ],
    linesEnglish: [
      'Ordinary and unassuming out in daily traffic',
      'At every crisis inside home, they turn into iron pillars',
    ],
  },
  {
    title: 'असली चमक समय पर',
    titleEnglish: 'Tested Like Gold',
    linesHindi: [
      'हीरे की पहचान जौहरी करता है और लड़कों की वक़्त',
      'मुश्किल दौर ही इन्हें सबसे दमदार इंसान बनाता है',
    ],
    linesHinglish: [
      'Heere ki pehchaan jauhri karta hai aur ladkon ki waqt',
      'Mushkil daur hi inhein sabse damdaar insaan banaata hai',
    ],
    linesEnglish: [
      'A jeweler tests diamonds while tough seasons test young men',
      'Hard miles forge ordinary boys into extraordinary leaders',
    ],
  },
  {
    title: 'यारी का जश्न',
    titleEnglish: 'Celebrating Brothers',
    linesHindi: [
      'कोई छोटा सा भी कमाल हो जाए किसी दोस्त का आज',
      'लड़कों की टोली ऐसे मनाती है जैसे विश्व कप जीत लिया',
    ],
    linesHinglish: [
      'Koi chhota sa bhi kamaal ho jaaye kisi dost ka aaj',
      'Ladkon ki toli aise manaati hai jaise vishwa cup jeet liya',
    ],
    linesEnglish: [
      'Whenever one friend lands even a modest small win',
      'The whole crew cheers as if they just lifted a world trophy',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'धैर्य की मिसाल',
    titleEnglish: 'Patient Climbers',
    linesHindi: [
      'शुरुआत में भले ही तंग हालतों में गुज़रता हो वक़्त',
      'धीरज रखकर लड़के पूरा खेल बदल देने की ताक़त रखते हैं',
    ],
    linesHinglish: [
      'Shuruaat mein bhale hi tang haalaaton mein guzarta ho waqt',
      'Dheeraj rakhkar ladke poora khel badal dene ki taaqat rakhte hain',
    ],
    linesEnglish: [
      'Early years often start lean with tight corners all around',
      'With patient focus, boys rewrite the scoreboard completely',
    ],
  },
  {
    title: 'दिलदार स्वभाव',
    titleEnglish: 'Generous Spirit',
    linesHindi: [
      'जब पास में कम हो तब भी बाँटकर खाना जानते हैं',
      'लड़कों की यारी में कभी हिसाब की कॉपी नहीं खुलती',
    ],
    linesHinglish: [
      'Jab paas mein kam ho tab bhi baantkar khaana jaante hain',
      'Ladkon ki yaari mein kabhi hisaab ki copy nahin khulti',
    ],
    linesEnglish: [
      'Even when plates hold little, they gladly split everything',
      'Inside real brotherhood, nobody ever opens a ledger book',
    ],
  },
  {
    title: 'खुली सड़क का यार',
    titleEnglish: 'Highway Spirit',
    linesHindi: [
      'पहाड़ों की हवा हो या शहर की खाली रात वाली सड़क',
      'लड़कों के लिए आज़ादी सबसे बड़ा सुकून होती है',
    ],
    linesHinglish: [
      'Pahaadon ki hawa ho ya shehar ki khaali raat waali sadak',
      'Ladkon ke liye aazaadi sabse bada sukoon hoti hai',
    ],
    linesEnglish: [
      'Crisp mountain passes or quiet late-night city avenues',
      'That open stretch of freedom heals every tired nerve',
    ],
  },
  {
    title: 'सच्चा चरित्र',
    titleEnglish: 'Solid Values',
    linesHindi: [
      'दिखावटी ताक़त दो दिन की हवा होती है मेरे दोस्त',
      'असली सम्मान तो विनम्रता और पक्के चरित्र से मिलता है',
    ],
    linesHinglish: [
      'Dikhaawati taaqat do din ki hawa hoti hai mere dost',
      'Asli sammaan to vinamrata aur pakke charitra se milta hai',
    ],
    linesEnglish: [
      'Loud swagger evaporates faster than morning fog, friend',
      'Lasting honor belongs to humility and unshakable character',
    ],
  },
  {
    title: 'ग़म में भी हँसी',
    titleEnglish: 'Calm Under Storms',
    linesHindi: [
      'अंदर चाहे जितनी उलझन चल रही हो नौकरी या प्यार की',
      'बाहर आकर यारों के साथ ठहाका लगाना नहीं भूलते लड़के',
    ],
    linesHinglish: [
      'Andar chaahe jitni uljhan chal rahi ho naukri ya pyaar ki',
      'Baahar aakar yaaron ke saath thahaka lagaana nahin bhoolte ladke',
    ],
    linesEnglish: [
      'No matter how heavy life presses on work or heart',
      'Once with the boys, they still share a full, roaring laugh',
    ],
  },
  {
    title: 'मेहनत से किस्मत बदलना',
    titleEnglish: 'Changing Fate by Sweat',
    linesHindi: [
      'ज्योतिषी से पूछकर भविष्य नहीं तय करते समझदार लड़के',
      'पसीने से अपनी लकीरें खुद चमकाने पर यक़ीन रखते हैं',
    ],
    linesHinglish: [
      'Jyotishi se poochhkar bhavishya nahin tay karte samajhdaar ladke',
      'Paseene se apni lakeerein khud chamkaane par yaqeen rakhte hain',
    ],
    linesEnglish: [
      'Driven boys do not wait around for palm readings',
      'They trust steady sweat to redraw their own future',
    ],
  },
  {
    title: 'साफ़ दिल के मालिक',
    titleEnglish: 'Open-Hearted Guys',
    linesHindi: [
      'थोड़े शरारती और थोड़े लापरवाह दिखते जरूर हैं ये',
      'पर मुसीबत में सबसे पहले मदद के लिए वही हाथ बढ़ाते हैं',
    ],
    linesHinglish: [
      'Thode sharaarti aur thode laaparwaah dikhte zaroor hain ye',
      'Par museebat mein sabse pehle madad ke liye wahi haath badhate hain',
    ],
    linesEnglish: [
      'Playful and slightly careless on ordinary easy days',
      'Yet first to stretch a steady hand the moment trouble hits',
    ],
  },
  {
    title: 'ऊँचा हौसला',
    titleEnglish: 'Tall Spirit',
    linesHindi: [
      'छोटी असफलताओं से कदम पीछे नहीं खींचते ये लड़के',
      'हर नई कोशिश में पहले से ज़्यादा जोश लेकर उतरते हैं',
    ],
    linesHinglish: [
      'Chhoti asafaltaon se kadam peeche nahin kheenchate ye ladke',
      'Har nayi koshish mein pehle se zyada josh lekar utarte hain',
    ],
    linesEnglish: [
      'Minor stumbles never pull these boys off the climb',
      'Every fresh attempt brings twice the fire and sharper aim',
    ],
  },
  {
    title: 'सच्ची दोस्ती की निशानी',
    titleEnglish: 'Zero Envy in Friends',
    linesHindi: [
      'अपने दोस्त की तरक्की पर जो दिल से खुश हो जाए',
      'उससे बड़ा अमीर इंसान कोई नहीं होता लड़कों की दुनिया में',
    ],
    linesHinglish: [
      'Apne dost ki taraqqi par jo dil se khush ho jaaye',
      'Usse bada ameer insaan koi nahin hota ladkon ki duniya mein',
    ],
    linesEnglish: [
      'Whoever celebrates a brothers win without a drop of envy',
      'Stands richest of all inside the world of true friends',
    ],
  },
  {
    title: 'सादगी का रौब',
    titleEnglish: 'Graceful Simplicity',
    linesHindi: [
      'महँगी गाड़ियों से ज़्यादा चमक उनके आत्मसम्मान में होती है',
      'साइकिल पर भी चलते हैं तो किसी राजा से कम नहीं लगते',
    ],
    linesHinglish: [
      'Mehngi gaadiyon se zyada chamak unke aatmasammaan mein hoti hai',
      'Cycle par bhi chalte hain to kisi raaja se kam nahin lagte',
    ],
    linesEnglish: [
      'Self-respect outshines any luxury engine on the highway',
      'Even pedaling an old bicycle, they carry pure poise',
    ],
  },
  {
    title: 'ज़िम्मेदार कदम',
    titleEnglish: 'Measured Steps',
    linesHindi: [
      'उम्र बढ़ने के साथ जब घर की फिक्र समझ आने लगती है',
      'तब हर लड़का खुद-ब-खुद गंभीर और मजबूत बन जाता है',
    ],
    linesHinglish: [
      'Umar badhne ke saath jab ghar ki fikr samajh aane lagti hai',
      'Tab har ladka khud-ba-khud gambheer aur mazboot ban jaata hai',
    ],
    linesEnglish: [
      'As years roll on and household weights come into clear view',
      'Every boy quietly matures into a steady anchor of strength',
    ],
  },
  {
    title: 'असली पहचान का सफ़र',
    titleEnglish: 'Building a Name',
    linesHindi: [
      'भीड़ में शामिल होकर गुम हो जाना इन्हें पसंद नहीं',
      'मेहनत की कलम से अपना नाम खुद लिखना जानते हैं लड़के',
    ],
    linesHinglish: [
      'Bheed mein shaamil hokar gum ho jaana inhein pasand nahin',
      'Mehnat ki kalam se apna naam khud likhna jaante hain ladke',
    ],
    linesEnglish: [
      'Vanishing quietly inside a crowd never sat right with them',
      'They carve their own unmistakable signature through effort',
    ],
  },
  {
    title: 'कम शब्दों में गहराई',
    titleEnglish: 'Quiet Depth',
    linesHindi: [
      'लड़के अपनी तकलीफ़ हर किसी से साझा नहीं करते हैं',
      'दोस्त के सामने भी बस मुस्कान रखकर बात टाल देते हैं',
    ],
    linesHinglish: [
      'Ladke apni takleef har kisi se saajha nahin karte hain',
      'Dost ke saamne bhi bas muskaan rakhkar baat taal dete hain',
    ],
    linesEnglish: [
      'Boys rarely unpack every hidden ache before the world',
      'Handing out an easy smile even when days feel heavy',
    ],
  },
  {
    title: 'हर हाल में मस्त',
    titleEnglish: 'Ready for Anything',
    linesHindi: [
      'चाहे जेब भारी हो या महीने की आख़िरी तारीख़ चल रही हो',
      'जिंदादिल लड़कों के चेहरे की रौनक कभी कम नहीं होती',
    ],
    linesHinglish: [
      'Chaahe jeb bhaari ho ya mahine ki aakhiri taareekh chal rahi ho',
      'Zindadil ladkon ke chehre ki raunak kabhi kam nahin hoti',
    ],
    linesEnglish: [
      'Payday morning or the lean last week of the month',
      'Spirited boys never lose that spark on their faces',
    ],
  },
  {
    title: 'ताक़त और नरमी',
    titleEnglish: 'Balanced Strength',
    linesHindi: [
      'मुश्किल वक़्त में चट्टान जैसा सख़्त हो जाता है मन',
      'और अपनों के सामने मोम की तरह पिघल जाते हैं लड़के',
    ],
    linesHinglish: [
      'Mushkil waqt mein chattan jaisa sakht ho jaata hai man',
      'Aur apnon ke saamne mom ki tarah pighal jaate hain ladke',
    ],
    linesEnglish: [
      'Firm as granite when storms batter from outside',
      'Yet gentle as warm wax before the ones they love',
    ],
  },
  {
    title: 'शेरदिल दोस्त',
    titleEnglish: 'Fearless Buddy',
    linesHindi: [
      'एक सच्चा दोस्त सौ रिश्तेदारों से बढ़कर होता है यारो',
      'लड़कों की यारी हमेशा दिल के रिश्ते से चलती है',
    ],
    linesHinglish: [
      'Ek saccha dost sau rishtedaaron se badhkar hota hai yaaro',
      'Ladkon ki yaari hamesha dil ke rishte se chalti hai',
    ],
    linesEnglish: [
      'One solid friend outweighs a hundred distant relatives',
      'Brotherhood always runs on pure unspoken trust',
    ],
  },
  {
    title: 'आने वाले कल के सितारे',
    titleEnglish: 'Rising Stars',
    linesHindi: [
      'आज जो पसीना बहा रहे हैं छोटी मेज़ पर बैठकर',
      'कल उन्हीं लड़कों के हाथों में बड़ी कमान आने वाली है',
    ],
    linesHinglish: [
      'Aaj jo paseena baha rahe hain chhoti mez par baithkar',
      'Kal unhi ladkon ke haathon mein badi kamaan aane waali hai',
    ],
    linesEnglish: [
      'Those grinding quietly today at humble wooden desks',
      'Are the very leaders tomorrow will look up toward',
    ],
  },
  {
    title: 'सच्ची शराफ़त',
    titleEnglish: 'True Gentleman',
    linesHindi: [
      'ताक़तवर होना अच्छा है पर विनम्र रहना उससे बड़ा है',
      'सही लड़का अपनी जुबान से कभी किसी का दिल नहीं तोड़ता',
    ],
    linesHinglish: [
      'Taaqatwar hona accha hai par vinamra rehna usse bada hai',
      'Sahi ladka apni zubaan se kabhi kisi ka dil nahin todta',
    ],
    linesEnglish: [
      'Strength earns respect, yet gentle manners win hearts',
      'A true gentleman never breaks someone with cruel words',
    ],
  },
  {
    title: 'चुनौतियों से दोस्ती',
    titleEnglish: 'Built for Hard Roads',
    linesHindi: [
      'आरामदायक रास्ते कभी दमदार इंसान नहीं बनाते हैं',
      'कठिन सफ़र ही लड़कों को असली योद्धा बनाता है',
    ],
    linesHinglish: [
      'Aaraamdaayak raaste kabhi damdaar insaan nahin banaate hain',
      'Kathin safar hi ladkon ko asli yoddha banaata hai',
    ],
    linesEnglish: [
      'Smooth paved roads rarely shape resilient spirits',
      'Steep uphill trails are what forge dependable men',
    ],
  },
  {
    title: 'मुस्कान भरा सफ़र',
    titleEnglish: 'Cheerful Road Ahead',
    linesHindi: [
      'कंधों पर ज़िम्मेदारी और होंठों पर मीठी हँसी रखते हैं',
      'ऐसे ही लड़के हर परिवार की असली शान होते हैं',
    ],
    linesHinglish: [
      'Kandhon par zimmedari aur honthon par meethi hansi rakhte hain',
      'Aise hi ladke har parivaar ki asli shaan hote hain',
    ],
    linesEnglish: [
      'Steady responsibility on shoulders and warm laughter on lips',
      'Those are the boys who stand as every familys true pride',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'बदलता हुआ वक़्त',
    titleEnglish: 'Owning the Moment',
    linesHindi: [
      'वक़्त खराब हो तो भी तेवर कम नहीं होते इनके',
      'मेहनत से हर बाज़ी फिर से अपने नाम कर लेते हैं',
    ],
    linesHinglish: [
      'Waqt kharaab ho to bhi tevar kam nahin hote inke',
      'Mehnat se har baazi phir se apne naam kar lete hain',
    ],
    linesEnglish: [
      'Even when seasons turn harsh, their drive refuses to dip',
      'Hard work flips every scoreboard straight back in their favor',
    ],
  },
  {
    title: 'असली ताक़त भीतर',
    titleEnglish: 'Inner Composure',
    linesHindi: [
      'दुनिया की भीड़ में चिल्लाने से कुछ हासिल नहीं होता',
      'शांत रहने वाला लड़का सबसे ज़्यादा दूर तक जाता है',
    ],
    linesHinglish: [
      'Duniya ki bheed mein chillaane se kuch haasil nahin hota',
      'Shaant rehne wala ladka sabse zyada door tak jaata hai',
    ],
    linesEnglish: [
      'Shouting over crowds accomplishes little along the climb',
      'The composed, focused boy always travels farthest ahead',
    ],
  },
  {
    title: 'रंगीन शामें और यारी',
    titleEnglish: 'Golden Dusk With Friends',
    linesHindi: [
      'कॉलेज छूटने के बाद भी वो यारी कम नहीं होती कभी',
      'साल में एक मुलाक़ात भी पूरे साल की ताक़त दे जाती है',
    ],
    linesHinglish: [
      'College chhootne ke baad bhi wo yaari kam nahin hoti kabhi',
      'Saal mein ek mulaaqaat bhi poore saal ki taaqat de jaati hai',
    ],
    linesEnglish: [
      'Long after college gates close behind us for good',
      'Even one reunion dinner charges the soul for an entire year',
    ],
  },
  {
    title: 'सीधी और सच्ची ज़ुबान',
    titleEnglish: 'Straight From the Chest',
    linesHindi: [
      'बात कड़वी जरूर लग सकती है कभी-कभी हमारी',
      'पर लड़के कभी मीठा बोलकर पीठ में छुरा नहीं घोंपते',
    ],
    linesHinglish: [
      'Baat kadwi zaroor lag sakti hai kabhi-kabhi hamaari',
      'Par ladke kabhi meetha bolkar peeth mein chhura nahin ghonpte',
    ],
    linesEnglish: [
      'Plain honesty may sting for a second up front',
      'Yet real brothers never smile sweetly only to stab behind',
    ],
  },
  {
    title: 'फ़र्ज़ और ख्वाब',
    titleEnglish: 'Duty Meets Dreams',
    linesHindi: [
      'एक हाथ में घर की ज़िम्मेदारी और दूसरे में अपने ख्वाब',
      'दोनों को साथ लेकर चलने का हुनर रखते हैं लड़के',
    ],
    linesHinglish: [
      'Ek haath mein ghar ki zimmedari aur doosre mein apne khwaab',
      'Dono ko saath lekar chalne ka hunar rakhte hain ladke',
    ],
    linesEnglish: [
      'Family duty in one palm, personal dreams in the other',
      'Boys master balancing both without dropping either one',
    ],
  },
  {
    title: 'मुसीबत से लड़ना',
    titleEnglish: 'Steady in Storms',
    linesHindi: [
      'जब घबराहट चारों तरफ़ से घेरने लगे इंसान को',
      'सच्चे दोस्त बस कंधे पर हाथ रखकर कहते हैं—हम हैं न',
    ],
    linesHinglish: [
      'Jab ghabraahat chaaron taraf se gherne lage insaan ko',
      'Sacche dost bas kandhe par haath rakhkar kehte hain—hum hain na',
    ],
    linesEnglish: [
      'When panic starts closing in from every corner',
      'Real friends simply tap your shoulder and say—we got this',
    ],
  },
  {
    title: 'सफ़र की ताज़गी',
    titleEnglish: 'Fresh Spirit Daily',
    linesHindi: [
      'थककर चूर हो जाने के बाद भी अगले दिन तैयार दिखते हैं',
      'लड़कों की रगों में हार मानना कभी बसता ही नहीं',
    ],
    linesHinglish: [
      'Thakkar choor ho jaane ke baad bhi agle din taiyaar dikhte hain',
      'Ladkon ki ragon mein haar maanna kabhi basta hi nahin',
    ],
    linesEnglish: [
      'Even after running on empty yesterday, they lace up at dawn',
      'Quitting simply never runs inside a fighters veins',
    ],
  },
  {
    title: 'सादगी भरी रईसी',
    titleEnglish: 'Rich in Grace',
    linesHindi: [
      'महँगे कपड़ों से ज़्यादा उनके लहजे में रईसी होती है',
      'जो हर किसी को बराबरी और सम्मान से देखते हैं',
    ],
    linesHinglish: [
      'Mehnge kapdon se zyada unke lehje mein raeesi hoti hai',
      'Jo har kisi ko baraabari aur sammaan se dekhte hain',
    ],
    linesEnglish: [
      'True class shines richer inside kindness than pricey outfits',
      'Treating every human across the room with equal honor',
    ],
  },
  {
    title: 'खुद का निर्माण',
    titleEnglish: 'Self-Sculpted',
    linesHindi: [
      'कोई तराशने वाला नहीं आता बाहर से अक्सर जीवन में',
      'लड़के ठोकरें खाकर खुद ही अपनी मूरत संवार लेते हैं',
    ],
    linesHinglish: [
      'Koi taraashne wala nahin aata baahar se aksar jeevan mein',
      'Ladke thokrein khaakar khud hi apni moorat sanwaar lete hain',
    ],
    linesEnglish: [
      'Rarely does an outside hand arrive to carve your road smooth',
      'Boys take lifes knocks and sculpt their own stature clean',
    ],
  },
  {
    title: 'उम्मीद का चिराग़',
    titleEnglish: 'Beacon at Home',
    linesHindi: [
      'पूरे घर की उम्मीदें टिकी होती हैं उनकी आँखों पर',
      'तभी तो अंधेरे में भी रास्ता निकाल लाते हैं लड़के',
    ],
    linesHinglish: [
      'Poore ghar ki ummeedein tiki hoti hain unki aankhon par',
      'Tabhi to andhere mein bhi raasta nikaal laate hain ladke',
    ],
    linesEnglish: [
      'An entire households hopes rest warmly upon their eyes',
      'Which is why they carve pathways even out of pitch dark',
    ],
  },
  {
    title: 'प्यारा सा गुस्सा',
    titleEnglish: 'Soft Heart Inside',
    linesHindi: [
      'गुस्सा भी दिखाते हैं तो दो मिनट में पिघल जाते हैं',
      'अपनों के सामने लड़कों का दिल हमेशा साफ रहता है',
    ],
    linesHinglish: [
      'Gussa bhi dikhate hain to do minute mein pighal jaate hain',
      'Apnon ke saamne ladkon ka dil hamesha saaf rehta hai',
    ],
    linesEnglish: [
      'Even if tempers flare briefly, they soften within minutes',
      'Toward their own, boys never hold onto cold grudges',
    ],
  },
  {
    title: 'सपनों के पीछे दौड़',
    titleEnglish: 'Chasing Tomorrow',
    linesHindi: [
      'नींद अधूरी रह जाए तो भी कोई शिकवा नहीं होता',
      'क्योंकि आँखों में सुबह से भी बड़ा सपना सजता है',
    ],
    linesHinglish: [
      'Neend adhoori reh jaaye to bhi koi shikwa nahin hota',
      'Kyunki aankhon mein subah se bhi bada sapna sajta hai',
    ],
    linesEnglish: [
      'Running on short sleep never draws a single complaint',
      'When a dream brighter than sunrise dances before their eyes',
    ],
  },
  {
    title: 'रिश्तों के पक्के',
    titleEnglish: 'Faithful Beyond Words',
    linesHindi: [
      'जताने में भले ही थोड़े कच्चे रह जाते हों हमेशा',
      'पर निभाने के मामले में लड़कों का कोई जवाब नहीं',
    ],
    linesHinglish: [
      'Jataane mein bhale hi thode kacche reh jaate hon hamesha',
      'Par nibhaane ke maamle mein ladkon ka koi jawaab nahin',
    ],
    linesEnglish: [
      'Perhaps awkward at delivering flowery daily speeches',
      'When it comes to actually showing up, they stand unmatched',
    ],
  },
  {
    title: 'आज़ाद परिंदा',
    titleEnglish: 'Free Spirit',
    linesHindi: [
      'किसी की ग़ुलामी या झूठी वाहवाही के मोहताज नहीं',
      'खुले आसमान के नीचे अपने दम पर जीते हैं लड़के',
    ],
    linesHinglish: [
      'Kisi ki ghulaami ya jhoothi waahwaahi ke mohtaaj nahin',
      'Khule aasmaan ke neeche apne dam par jeete hain ladke',
    ],
    linesEnglish: [
      'Never begging applause or bowing to shallow favors',
      'True boys stand free on their own feet beneath open skies',
    ],
  },
  {
    title: 'असली जीत',
    titleEnglish: 'True Victory',
    linesHindi: [
      'कामयाबी तब असली लगती है हर लड़के को जीवन में',
      'जब उनके कारण माँ-बाप के चेहरे पर मुस्कान आए',
    ],
    linesHinglish: [
      'Kaamyaabi tab asli lagti hai har ladke ko jeevan mein',
      'Jab unke kaaran maa-baap ke chehre par muskaan aaye',
    ],
    linesEnglish: [
      'Success feels truly worth it to any young man',
      'Only when his climb puts quiet pride on his parents faces',
    ],
  },
  {
    title: 'हौसले की कहानी',
    titleEnglish: 'Story of Grit',
    linesHindi: [
      'कहानी जितनी कठिन रही हो शुरुआती दिनों की यार',
      'अंतिम पन्ने अपने मनपसंद रंग से सजाते हैं लड़के',
    ],
    linesHinglish: [
      'Kahaani jitni kathin rahi ho shuruaati dinon ki yaar',
      'Antim panne apne manpasand rang se sajaate hain ladke',
    ],
    linesEnglish: [
      'Regardless how steep the opening chapters felt back then',
      'Gritty boys paint the closing chapters in bold bright colors',
    ],
  },
  {
    title: 'सच्ची दोस्ती की कसम',
    titleEnglish: 'Loyal Crew Always',
    linesHindi: [
      'हँसी में तो हर कोई शामिल हो जाता है पास आकर',
      'लड़के दुख की घड़ी में भी हाथ नहीं छोड़ते दोस्त का',
    ],
    linesHinglish: [
      'Hansi mein to har koi shaamil ho jaata hai paas aakar',
      'Ladke dukh ki ghadi mein bhi haath nahin chhodte dost ka',
    ],
    linesEnglish: [
      'Everybody pulls up a chair when parties flow smoothly',
      'True brothers keep their grip tight through darkest storms too',
    ],
  },
  {
    title: 'निश्चल मन',
    titleEnglish: 'Clean Hearted',
    linesHindi: [
      'बाहर से भले ही पत्थर जैसे सख़्त दिखते हों हम',
      'पर अंदर एक छोटा सा बच्चा आज भी जिंदा रहता है',
    ],
    linesHinglish: [
      'Baahar se bhale hi patthar jaise sakht dikhte hon hum',
      'Par andar ek chhota sa baccha aaj bhi zinda rehta hai',
    ],
    linesEnglish: [
      'Steely and unmoved on the surface throughout busy weeks',
      'Deep down, a playful, earnest kid still beats inside',
    ],
  },
  {
    title: 'मेहनत से सम्मान',
    titleEnglish: 'Respect From Hustle',
    linesHindi: [
      'शॉर्टकट वाले रास्ते जल्दी धुंधले पड़ जाते हैं यारों',
      'पसीने से कमाया नाम हमेशा चमकता रहता है',
    ],
    linesHinglish: [
      'Shortcut waale raaste jaldi dhundhle pad jaate hain yaaro',
      'Paseene se kamaya naam hamesha chamakta rehta hai',
    ],
    linesEnglish: [
      'Quick gimmicks wash off at the very first rainfall',
      'A name carved out of sweat shines steady for decades',
    ],
  },
  {
    title: 'बेमिसाल ज़िंदादिली',
    titleEnglish: 'Vibrant Spirit',
    linesHindi: [
      'ज़िंदगी के हर रंग को खुलकर जीना जानते हैं लड़के',
      'ग़म हो या ख़ुशी, हर पल को यादगार बना देते हैं',
    ],
    linesHinglish: [
      'Zindagi ke har rang ko khulkar jeena jaante hain ladke',
      'Gham ho ya khushi, har pal ko yaadgaar bana dete hain',
    ],
    linesEnglish: [
      'Knowing how to embrace every season life throws their way',
      'Boys turn ordinary afternoons into lifelong stories',
    ],
  },
  // Block 7 (121-128)
  {
    title: 'कमज़ोर नहीं, शांत हैं',
    titleEnglish: 'Quiet, Never Weak',
    linesHindi: [
      'चुप रहना उनकी कमज़ोरी नहीं, समझदारी होती है',
      'वरना वक़्त आने पर हर लड़का अपनी ताक़त जानता है',
    ],
    linesHinglish: [
      'Chup rehna unki kamzori nahin, samajhdaari hoti hai',
      'Warna waqt aane par har ladka apni taaqat jaanta hai',
    ],
    linesEnglish: [
      'Keeping calm silence shows maturity, never weakness',
      'When the moment calls, every good man knows his strength',
    ],
  },
  {
    title: 'मंज़िल तक साथ',
    titleEnglish: 'Committed to the End',
    linesHindi: [
      'आधे रास्ते में साथ छोड़ना इनकी किताब में नहीं',
      'जो हाथ पकड़ लें, उसे मंज़िल तक पहुँचाकर मानते हैं',
    ],
    linesHinglish: [
      'Aadhe raaste mein saath chhodna inki kitaab mein nahin',
      'Jo haath pakad lein, use manzil tak pahunchaakar maante hain',
    ],
    linesEnglish: [
      'Walking away halfway never appears in their playbook',
      'Whoever takes their hand gets walked safely all the way home',
    ],
  },
  {
    title: 'नया दौर, नई सोच',
    titleEnglish: 'Modern Respectful Boys',
    linesHindi: [
      'पुराने दकियानूसी ख़्यालों से बाहर निकल आए हैं अब',
      'रिश्तों में बराबरी और सम्मान को सबसे ऊपर रखते हैं',
    ],
    linesHinglish: [
      'Purane dakiyaanoosi khayaalon se baahar nikal aaye hain ab',
      'Rishton mein baraabari aur sammaan ko sabse upar rakhte hain',
    ],
    linesEnglish: [
      'Stepping cleanly beyond outdated narrow boxes today',
      'Todays young men place mutual respect above everything',
    ],
  },
  {
    title: 'चट्टान सा हौसला',
    titleEnglish: 'Steadfast Resolve',
    linesHindi: [
      'आंधियाँ आएं तो पेड़ की तरह झुकते नहीं हैं ये',
      'जड़ें मज़बूत रखकर सामने सीना तान देते हैं लड़के',
    ],
    linesHinglish: [
      'Aandhiyan aayein to ped ki tarah jhukte nahin hain ye',
      'Jadein mazboot rakhkar saamne seena taan dete hain ladke',
    ],
    linesEnglish: [
      'When harsh winds roll through, they plant their heels deep',
      'Facing every headwind squarely with calm steadiness',
    ],
  },
  {
    title: 'प्यारा सा बचपना',
    titleEnglish: 'Playful Soul',
    linesHindi: [
      'चाहे जितना बड़ा ओहदा मिल जाए दफ़्तर में जाकर',
      'माँ के सामने आज भी छोटे बच्चे बन जाते हैं लड़के',
    ],
    linesHinglish: [
      'Chaahe jitna bada ohda mil jaaye daftar mein jaakar',
      'Maa ke saamne aaj bhi chhote bacche ban jaate hain ladke',
    ],
    linesEnglish: [
      'Regardless how tall their office title climbs someday',
      'Around mom, every boy still turns into a playful child',
    ],
  },
  {
    title: 'सही समय का इंतज़ार',
    titleEnglish: 'Patient Hustle',
    linesHindi: [
      'जल्दबाज़ी में नाम नहीं, उम्र भर की पहचान बनानी है',
      'तभी तो धीरे-धीरे मगर पक्के क़दम बढ़ाते हैं लड़के',
    ],
    linesHinglish: [
      'Jaldbaazi mein naam nahin, umar bhar ki pehchaan banaani hai',
      'Tabhi to dheere-dheere magar pakke kadam badhate hain ladke',
    ],
    linesEnglish: [
      'Not chasing fleeting hype, but building lifetime legacy',
      'Taking steady, deliberate steps brick by brick forward',
    ],
  },
  {
    title: 'ख़ुद पर यक़ीन',
    titleEnglish: 'Self-Believe',
    linesHindi: [
      'जब दुनिया कहे कि रास्ता बहुत लंबा और कठिन है',
      'बस मुस्कुराकर जूते के फीते कस लेते हैं लड़के',
    ],
    linesHinglish: [
      'Jab duniya kahe ki raasta bahut lamba aur kathin hai',
      'Bas muskurakar joote ke feete kas lete hain ladke',
    ],
    linesEnglish: [
      'Whenever bystanders warn how steep and endless the road looks',
      'They just smirk lightly, lace their boots tight, and step off',
    ],
  },
  {
    title: 'दिल से सलाम',
    titleEnglish: 'Real Men Rising',
    linesHindi: [
      'अपनी मेहनत, अपनी यारी और अपने परिवार की शान',
      'इन तीन चीज़ों में ही बसती है हर सच्चे लड़के की जान',
    ],
    linesHinglish: [
      'Apni mehnat, apni yaari aur apne parivaar ki shaan',
      'In teen cheezon mein hi basti hai har sacche ladke ki jaan',
    ],
    linesEnglish: [
      'Honest sweat, loyal friends, and the pride of home',
      'Inside those three treasures beats every true mans heart',
    ],
  },
];

export const UNIQUE_BOYS_128 = buildUniqueShayaris(
  'boys',
  'Boys Shayari (लड़कों की शायरी)',
  '🦁',
  73,
  BOYS_ENTRIES
);
