import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const KHWAB_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'खुली आँखों की बड़ी उड़ान',
    titleEnglish: 'Wide-Awake Flight of Big Dreams',
    linesHindi: [
      'नींद में देखे गए सपने सुबह का अलार्म बजते ही बिखर जाते हैं',
      'असली ख़्वाब वे हैं जो तुम्हें सोने न दें और काम पर लगा दें',
    ],
    linesHinglish: [
      'Neend mein dekhe gaye sapne subah ka alarm bajte hi bikhar jaate hain',
      'Asli khwaab we hain jo tumhein sone na dein aur kaam par laga dein',
    ],
    linesEnglish: [
      'Midnight dreams vanish the instant your morning alarm rings out',
      'Real dreams are those keeping your eyes wide awake building tomorrow',
    ],
  },
  {
    title: 'छोटे कमरे में बड़े आसमान',
    titleEnglish: 'Vast Skies Inside Small Room',
    linesHindi: [
      'किराये के छोटे कमरे की दीवारों से कभी सपनों की हद नहीं तय होती',
      'वहीं से बैठकर कई मुसाफ़िर पूरे आसमान का नक्शा बदल देते हैं',
    ],
    linesHinglish: [
      'Kiraaye ke chhote kamre ki deewaaron se kabhi sapnon ki had nahin tay hoti',
      'Wahin se baithkar kai musaafir poora aasmaan ka naksha badal dete hain',
    ],
    linesEnglish: [
      'Four cramped rented walls never dictate the ceiling of your ambition',
      'Quiet dreamers sitting there redraw maps of entire skies above',
    ],
  },
  {
    title: 'पसीने से सींचा गया पौधा',
    titleEnglish: 'Seed Watered With Quiet Sweat',
    linesHindi: [
      'ख़्वाब सिर्फ़ किताबों या मोबाइल के वॉलपेपर पर सजाने से पूरे नहीं होते',
      'हर सुबह आलस्य छोड़कर पसीने से उन्हें सींचना पड़ता है रोज़',
    ],
    linesHinglish: [
      'Khwaab sirf kitaabon ya mobile ke wallpaper par sajaane se poore nahin hote',
      'Har subah aalasya chhodkar paseene se unhein seenchna padta hai roz',
    ],
    linesEnglish: [
      'Dreams never bloom merely pinned on lock-screens or journal covers',
      'They ask you to rise early and water steady roots with honest sweat',
    ],
  },
  {
    title: 'तारे गिनने से आगे की सोच',
    titleEnglish: 'Thinking Farther Than Counting Stars',
    linesHindi: [
      'छत पर लेटकर तारे गिनने का दौर भी बहुत प्यारा था बचपन में',
      'अब वक़्त आ गया है कि ख़ुद की मेहनत से एक सितारा बन जाएँ',
    ],
    linesHinglish: [
      'Chhat par letkar taare ginne ka daur bhi bahut pyara tha bachpan mein',
      'Ab waqt aa gaya hai ki khud ki mehnat se ek sitaara ban jaayein',
    ],
    linesEnglish: [
      'Counting constellations flat on summer rooftops felt sweet in childhood',
      'Now comes the season to turn quiet effort into your own steady star',
    ],
  },
  {
    title: 'सपनों के पीछे की ख़ामोशी',
    titleEnglish: 'Silent Focus Behind Every Goal',
    linesHindi: [
      'बड़े मंसूबे महफ़िल में तालियाँ बटोरने के लिए सुनाए नहीं जाते कभी',
      'चुपचाप कमरे में काम करो ताकि तुम्हारी कामयाबी शोर मचाए खुद',
    ],
    linesHinglish: [
      'Bade mansoobe mehfil mein taaliyaan batorne ke liye sunaaye nahin jaate kabhi',
      'Chupchaap kamre mein kaam karo taaki tumhaari kaamyaabi shor machaaye khud',
    ],
    linesEnglish: [
      'Big visions are never announced just to gather casual applause early',
      'Build silently behind closed doors until results ring clearly outside',
    ],
  },
  {
    title: 'पहली कमाई से खरीदा सुकून',
    titleEnglish: 'First Paycheck Fulfilling Old Dream',
    linesHindi: [
      'बरसों से आँखों में सँजोया गया वह छोटा सा ख़्वाब पूरा हो ही गया',
      'जब अपनी पहली कमाई से घर की मुस्कान खरीद लाया मैं शाम को',
    ],
    linesHinglish: [
      'Barson se aankhon mein sanjoya gaya woh chhota sa khwaab poora ho hi gaya',
      'Jab apni pehli kamaai se ghar ki muskaan khareed laaya main shaam ko',
    ],
    linesEnglish: [
      'That quiet dream sheltered in my eyes for years finally stepped alive',
      'When my first honest paycheck brought bright smiles straight home',
    ],
  },
  {
    title: 'कागज़ के हवाई जहाज़ का सफ़र',
    titleEnglish: 'Paper Plane Turned Real Flight',
    linesHindi: [
      'बचपन में जो कागज़ का जहाज़ छत से उड़ाकर खुश हो जाते थे हम',
      'आज वही बचपना असली हवाई अड्डे की खिड़की से बादल देखता है',
    ],
    linesHinglish: [
      'Bachpan mein jo kaagaz ka jahaaz chhat se udaakar khush ho jaate the hum',
      'Aaj wahi bachpana asli hawaai adde ki khidki se baadal dekhta hai',
    ],
    linesEnglish: [
      'Kids who once cheered tossing folded paper planes off windy balconies',
      'Now gaze out real cabin windows watching sunlit clouds drift below',
    ],
  },
  {
    title: 'थकान से बड़ा लक्ष्य का नशा',
    titleEnglish: 'Purpose Larger Than Fatigue',
    linesHindi: [
      'कदम ज़रूर दुखते हैं पूरे दिन भागते-दौड़ते इस बड़े शहर में',
      'पर जब रात को अपना बड़ा ख़्वाब याद आता है तो थकान उड़ जाती है',
    ],
    linesHinglish: [
      'Kadam zaroor dukhte hain poore din bhaagte-daudte is bade shehar mein',
      'Par jab raat ko apna bada khwaab yaad aata hai to thakaan ud jaati hai',
    ],
    linesEnglish: [
      'Feet certainly ache after sprinting nonstop across concrete city avenues',
      'Yet picturing your sunlit goal at night makes every soreness vanish fast',
    ],
  },
  {
    title: 'हँसी उड़ाने वालों को जवाब',
    titleEnglish: 'Quiet Answer to Early Doubters',
    linesHindi: [
      'जब तुम छोटे शहर से बड़ा ख़्वाब देखोगे तो कई लोग हँसेंगे ज़रूर',
      'बस मुड़कर बहस मत करना, एक दिन वही लोग तुम्हारा उदाहरण देंगे',
    ],
    linesHinglish: [
      'Jab tum chhote shehar se bada khwaab dekhoge to kai log hansenge zaroor',
      'Bas mudkar behas mat karna, ek din wahi log tumhaara udaaharan denge',
    ],
    linesEnglish: [
      'Dreaming bold from a small town always invites a few easy chuckles',
      'Skip useless arguments—soon enough those exact voices will cite your story',
    ],
  },
  {
    title: 'नए सवेरे की ताज़ा स्लेट',
    titleEnglish: 'Fresh Slate at Every Sunrise',
    linesHindi: [
      'कल कोई अवसर हाथ से फिसल गया तो बैठकर रोते मत रहो भाई',
      'हर नई सुबह फिर से अपनी तक़दीर लिखने का कोरा पन्ना देती है',
    ],
    linesHinglish: [
      'Kal koi avsar haath se phisal gaya to baithkar rote mat raho bhai',
      'Har nayi subah phir se apni taqdeer likhne ka kora panna deti hai',
    ],
    linesEnglish: [
      'If one opportunity slipped past your fingertips yesterday, let it rest',
      'Every fresh dawn unfolds a clean blank page ready for bold strokes',
    ],
  },
  {
    title: 'चाय की चुस्की संग बड़ी सोच',
    titleEnglish: 'Big Ideas Over Morning Tea',
    linesHindi: [
      'सुबह छह बजे चाय की भाप के साथ जो योजना बनती है शांत मन में',
      'वही दिन भर के सारे कामों को सही दिशा में ले जाती है धीरे से',
    ],
    linesHinglish: [
      'Subah chheh baje chai ki bhaap ke saath jo yojana banti hai shaant mann mein',
      'Wahi din bhar ke saare kaamon ko sahi disha mein le jaati hai dheere se',
    ],
    linesEnglish: [
      'Calm plans sketched softly over steaming six a.m. tea in stillness',
      'Steer every busy hour ahead smoothly toward meaningful finish lines',
    ],
  },
  {
    title: 'अधूरे नक्शे को पूरा करने की जिद',
    titleEnglish: 'Grit Completing Unfinished Sketches',
    linesHindi: [
      'सपना देखने में एक पल लगता है पर उसे ज़मीन पर उतारने में साल लगते हैं',
      'जो इन सालों में टिक गया, दुनिया उसी का नाम इतिहास में पढ़ती है',
    ],
    linesHinglish: [
      'Sapna dekhne mein ek pal lagta hai par use zameen par utaarne mein saal lagte hain',
      'Jo in saalon mein tik gaya, duniya usi ka naam itihaas mein padhti hai',
    ],
    linesEnglish: [
      'Imagining a dream takes one spark, while building it steady takes seasons',
      'Whoever refuses to quit across those quiet seasons earns lasting triumph',
    ],
  },
  {
    title: 'माँ-पापा की आँखों का सपना',
    titleEnglish: 'Dream Shining in Parents’ Eyes',
    linesHindi: [
      'मेरी हर बड़ी कोशिश के पीछे बस एक प्यारा सा दृश्य रहता है सामने',
      'माँ-पापा को बिना किसी चिंता के मुस्कुराते हुए आराम से बैठे देखना',
    ],
    linesHinglish: [
      'Meri har badi koshish ke peechhe bas ek pyara sa drishya rehta hai saamne',
      'Maa-papa ko bina kisi chinta ke muskuraate hue aaraam se baithe dekhna',
    ],
    linesEnglish: [
      'Behind my toughest late-night efforts glows one crystal-clear picture',
      'Seeing Mom and Dad resting carefree with proud smiles across their faces',
    ],
  },
  {
    title: 'बादलों के पार चमकती उम्मीद',
    titleEnglish: 'Bright Hope Above Gray Clouds',
    linesHindi: [
      'तेज़ बारिश में परिंदे भी डाल छोड़कर कहीं दूर नहीं भागते कभी',
      'उन्हें पता होता है कि हर काले बादल के पीछे सूरज चमकेगा फिर से',
    ],
    linesHinglish: [
      'Tez baarish mein parinde bhi daal chhodkar kahin door nahin bhaagte kabhi',
      'Unhein pata hota hai ki har kaale baadal ke peechhe sooraj chamkega phir se',
    ],
    linesEnglish: [
      'Even in fierce downpours birds hold steady upon their sheltering branches',
      'Knowing bright gold sunbeams wait faithfully right behind gray clouds',
    ],
  },
  {
    title: 'अपने पैरों पर खड़ा होने का मान',
    titleEnglish: 'Pride Standing on Own Feet',
    linesHindi: [
      'किसी के सहारे महल पाने से बेहतर है अपनी मेहनत की छत बनाना यार',
      'स्वयं के दम पर सजाए घर की हर ईंट में गर्व की महक आती है',
    ],
    linesHinglish: [
      'Kisi ke sahaare mahal paane se behtar hai apni mehnat ki chhat banaana yaar',
      'Swayam ke dam par sajaaye ghar ki har eent mein garv ki mehak aati hai',
    ],
    linesEnglish: [
      'Better a modest roof built cleanly by your own hands than borrowed palaces',
      'Every single brick earned honestly breathes unmistakable quiet pride',
    ],
  },
  {
    title: 'टूटे हुए पंखों से नई उड़ान',
    titleEnglish: 'New Flight Beyond Early Falls',
    linesHindi: [
      'पहली बार गिरते ही अगर हर कोई उड़ान छोड़ देता इस ज़मीन पर',
      'तो आसमान में आज एक भी परिंदा पंख फैलाए नज़र न आता कभी',
    ],
    linesHinglish: [
      'Pehli baar girte hi agar har koi udaan chhod deta is zameen par',
      'To aasmaan mein aaj ek bhi parinda pankh failaaye nazar na aata kabhi',
    ],
    linesEnglish: [
      'If every fledgling quit after tumbling once toward soft garden grass',
      'Open blue skies overhead would remain completely empty of wings',
    ],
  },
  {
    title: 'डायरी के पन्नों में बंद कल',
    titleEnglish: 'Tomorrow Sketched Inside Journal',
    linesHindi: [
      'दो साल पहले जो बातें बस मेरी डायरी के आखिरी पन्ने पर लिखी थीं',
      'आज उनमें से आधी हक़ीक़त बनकर मेरे सामने खड़ी मुस्कुरा रही हैं',
    ],
    linesHinglish: [
      'Do saal pehle jo baatein bas meri diary ke aakhiri panne par likhi thin',
      'Aaj unmein se aadhi haqeeqat bankar mere saamne khadi muskura rahi hain',
    ],
    linesEnglish: [
      'Goals penned shyly onto the back page of my notebook two years ago',
      'Stand half-fulfilled right before my eyes smiling proudly today',
    ],
  },
  {
    title: 'सपनों के संग सादगी की पहचान',
    titleEnglish: 'Staying Grounded While Soaring High',
    linesHindi: [
      'ऊँचे पहाड़ों की चोटी तक पहुँचने का ख़्वाब ज़रूर देखो पूरे जोश से',
      'पर नीचे गाँव की मिट्टी और अपने पुराने यारों को कभी मत भूलना',
    ],
    linesHinglish: [
      'Oonche pahaadon ki choti tak pahunchne ka khwaab zaroor dekho poore josh se',
      'Par neeche gaanv ki mitti aur apne puraane yaaron ko kabhi mat bhoolna',
    ],
    linesEnglish: [
      'Dare boldly to climb the tallest mountain summits beneath open stars',
      'Just never forget hometown soil and loyal friends cheering near the base',
    ],
  },
  {
    title: 'नींद से पहले का मीठा संकल्प',
    titleEnglish: 'Gentle Vow Before Closing Eyes',
    linesHindi: [
      'हर रात सोने से पहले एक बार अपनी मंज़िल की तस्वीर देख लेता हूँ',
      'ताकि अगली सुबह आँख खुलते ही कदम खुद सही रास्ते पर बढ़ चलें',
    ],
    linesHinglish: [
      'Har raat sone se pehle ek baar apni manzil ki tasveer dekh leta hoon',
      'Taaki agli subah aankh khulte hi kadam khud sahi raaste par badh chalein',
    ],
    linesEnglish: [
      'Right before drifting asleep I picture my destination calmly once',
      'So the instant daylight wakes me, every step heads straight on course',
    ],
  },
  {
    title: 'इतिहास रचती शांत आदतें',
    titleEnglish: 'Daily Habits Building Legends',
    linesHindi: [
      'चमत्कार एक रात में अचानक आसमान से टपक कर नहीं गिरते कभी',
      'हर रोज़ का छोटा सा अनुशासन ही एक दिन बड़ा ख़्वाब सच करता है',
    ],
    linesHinglish: [
      'Chamatkaar ek raat mein achaanak aasmaan se tapak kar nahin girte kabhi',
      'Har roz ka chhota sa anushaasan hi ek din bada khwaab sach karta hai',
    ],
    linesEnglish: [
      'Breakthroughs never drop out of empty clouds overnight by accident',
      'Small disciplined choices repeated daily turn wild dreams completely real',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'रात के दो बजे जलता लैम्प',
    titleEnglish: 'Study Lamp Glowing Past Two',
    linesHindi: [
      'जब पूरा मोहल्ला मीठी नींद की चादर तान कर सोया रहता है चुपचाप',
      'तब कुछ जागते हुए लैम्प आने वाले कल के सितारे गढ़ रहे होते हैं',
    ],
    linesHinglish: [
      'Jab poora mohalla meethi neend ki chaadar taan kar soya rehta hai chupchaap',
      'Tab kuch jaagte hue lamp aane waale kal ke sitaare gadh rahe hote hain',
    ],
    linesEnglish: [
      'While the quiet neighborhood sleeps soundly under midnight blankets',
      'A few steady desk lamps quietly forge bright tomorrows brick by brick',
    ],
  },
  {
    title: 'ख़्वाबों से सजी खुली खिड़की',
    titleEnglish: 'Open Window Framed With Dreams',
    linesHindi: [
      'डर को कमरा बंद करके अंदर बैठने की आदत बहुत पुरानी रही है',
      'हिम्मत हमेशा खिड़की खोलकर सुबह की ताज़ा रोशनी बुलाती है',
    ],
    linesHinglish: [
      'Dar ko kamra band karke andar baithne ki aadat bahut puraani rahi hai',
      'Himmat hamesha khidki kholkar subah ki taaza roshni bulaati hai',
    ],
    linesEnglish: [
      'Fear loves shutting wooden blinds tight to keep the room dark',
      'Courage throws every window wide inviting fresh morning light inside',
    ],
  },
  {
    title: 'नक्शे पर पहली लाल बिंदी',
    titleEnglish: 'First Pin Dropped on World Map',
    linesHindi: [
      'कभी मोबाइल की स्क्रीन पर जिन शहरों की तस्वीरें देखकर मुस्कुराते थे',
      'एक दिन उन्हीं सड़कों पर चलकर ख़ुद की मेहनत को सलाम करेंगे',
    ],
    linesHinglish: [
      'Kabhi mobile ki screen par jin shehron ki tasveerein dekhkar muskuraate the',
      'Ek din unhin sadkon par chalkar khud ki mehnat ko salaam karenge',
    ],
    linesEnglish: [
      'Those faraway skylines we once admired smiling across phone screens',
      'One day we will stroll their real sidewalks saluting our own hustle',
    ],
  },
  {
    title: 'पत्थर तराशकर बनती मूरत',
    titleEnglish: 'Sculpture Carved From Patient Stone',
    linesHindi: [
      'असफलता की हर छेनी से इंसान टूटता नहीं बल्कि और सँवरता जाता है',
      'जो दर्द से गुज़र गया वही अपने सबसे खूबसूरत रूप में निखरता है',
    ],
    linesHinglish: [
      'Asafalta ki har chheni se insaan toot-ta nahin balki aur sanwarta jaata hai',
      'Jo dard se guzar gaya wahi apne sabse khoobsurat roop mein nikharta hai',
    ],
    linesEnglish: [
      'Every chisel mark of setbacks never breaks stone—it refines the shape',
      'Staying patient beneath tough lessons carves your finest bright form',
    ],
  },
  {
    title: 'चाहत में छिपी ईमानदार भूख',
    titleEnglish: 'Honest Hunger Inside True Ambition',
    linesHindi: [
      'बड़े लक्ष्य पाने की सबसे पहली शर्त है ख़ुद से सच्चा रहना हमेशा',
      'जो अपनी कमियों को पहचान ले, उसकी उड़ान को कोई रोक नहीं सकता',
    ],
    linesHinglish: [
      'Bade lakshya paane ki sabse pehli shart hai khud se sachha rehna hamesha',
      'Jo apni kamiyon ko pehchaan le, uski udaan ko koi rok nahin sakta',
    ],
    linesEnglish: [
      'Reaching tall peaks starts with staying completely honest toward yourself',
      'Once you spot and mend your blind spots, no headwind stops your flight',
    ],
  },
  {
    title: 'ख़ुद पर यक़ीन का पहला दीपक',
    titleEnglish: 'First Lamp of Self-Belief',
    linesHindi: [
      'जब दुनिया का कोई भी इंसान तुम्हारी बात पर भरोसा न करे पहले पहल',
      'तब बस ख़ुद का हाथ थामकर आगे बढ़ जाना ही सबसे बड़ा चमत्कार है',
    ],
    linesHinglish: [
      'Jab duniya ka koi bhi insaan tumhaari baat par bharosa na kare pehle pehal',
      'Tab bas khud ka haath thaamkar aage badh jaana hi sabse bada chamatkaar hai',
    ],
    linesEnglish: [
      'When nobody in the room believes in your quiet spark at the start',
      'Holding your own hand steady and stepping forward becomes pure magic',
    ],
  },
  {
    title: 'साइकिल से शुरू हुआ बड़ा सफ़र',
    titleEnglish: 'Long Journey Launched on Bicycles',
    linesHindi: [
      'जिन रास्तों पर कभी साइकिल के पैडल मारते हुए पसीना बहाया था हमने',
      'उन्हीं पगडंडियों ने बड़े हाईवे पर दौड़ने का हौसला सिखाया है',
    ],
    linesHinglish: [
      'Jin raaston par kabhi cycle ke pedal maarte hue paseena bahaaya tha humne',
      'Unhin pagdandiyon ne bade highway par daudne ka hausla sikhaaya hai',
    ],
    linesEnglish: [
      'Those dusty backroads where we once pedaled breathless old bicycles',
      'Trained our legs patiently for sweeping highways later in life',
    ],
  },
  {
    title: 'अधूरी नींद से बना मजबूत कल',
    titleEnglish: 'Strong Future From Short Rest',
    linesHindi: [
      'आज की थोड़ी सी असुविधा कल की पूरी आज़ादी खरीद लेती है यारो',
      'इसीलिए आराम से ज़्यादा अपने अधूरे ख़्वाबों से प्यार करना सीखो',
    ],
    linesHinglish: [
      'Aaj ki thodi si asuvidha kal ki poori aazaadi khareed leti hai yaaro',
      'Isiliye aaraam se zyada apne adhoore khwaabon se pyar karna seekho',
    ],
    linesEnglish: [
      'Modest discomfort today purchases entire peaceful freedom tomorrow',
      'Fall slightly deeper in love with your building dreams than easy couches',
    ],
  },
  {
    title: 'मेहनत से लिखा गया सुनहरा नाम',
    titleEnglish: 'Name Written in Honest Gold',
    linesHindi: [
      'विरासत में मिले नाम से कुछ पल की चमक तो ज़रूर मिल जाती है यहाँ',
      'पर ख़ुद के दम पर बनाई पहचान पूरी नस्लों को रास्ता दिखाती है',
    ],
    linesHinglish: [
      'Viraasat mein mile naam se kuch pal ki chamak to zaroor mil jaati hai yahaan',
      'Par khud ke dam par banaayi pehchaan poori naslon ko raasta dikhaati hai',
    ],
    linesEnglish: [
      'Inherited titles grant fleeting spotlight across easy beginnings',
      'Identity forged with your own grit lights trails for generations ahead',
    ],
  },
  {
    title: 'आसमान से दोस्ती करने का जज़्बा',
    titleEnglish: 'Spirit Befriending Open Skies',
    linesHindi: [
      'पिंजरे में दाने मिलने से कभी बाज़ की उड़ान ख़त्म नहीं हो जाती यार',
      'ज़रा सा मौका मिलते ही वह फिर बादलों के ऊपर घर बसा लेता है',
    ],
    linesHinglish: [
      'Pinjare mein daane milne se kabhi baaz ki udaan khatam nahin ho jaati yaar',
      'Zara sa mauka milte hi woh phir baadalon ke oopar ghar basa leta hai',
    ],
    linesEnglish: [
      'Safe cages and steady crumbs never tame an eagle’s longing for height',
      'One open breeze is enough to lift it home above high clouds again',
    ],
  },
  {
    title: 'सपनों के बाज़ार में ईमानदार सौदा',
    titleEnglish: 'Honest Bargain in Dream Market',
    linesHindi: [
      'बड़ा मुकाम हमेशा वक़्त, धैर्य और पसीने की कीमत माँगता है पहले',
      'जो बिना शॉर्टकट के कीमत चुका देता है, जीत उसी की झोली में आती है',
    ],
    linesHinglish: [
      'Bada mukaam hamesha waqt, dhairya aur paseene ki keemat maangta hai pehle',
      'Jo bina shortcut ke keemat chuka deta hai, jeet usi ki jholi mein aati hai',
    ],
    linesEnglish: [
      'Meaningful heights always charge fair currency in patience, sweat, and years',
      'Whoever pays full price without shady shortcuts keeps lasting victory',
    ],
  },
  {
    title: 'बचपन की पेंसिल से बनी तस्वीर',
    titleEnglish: 'Portrait Drawn With Childhood Pencil',
    linesHindi: [
      'रबड़ से मिटाकर बार-बार सुधारी गई ड्राइंग भी एक दिन कलाकृति बनती है',
      'बस अपनी शुरुआती गलतियों से घबराकर पन्ना फाड़ना मत कभी भी',
    ],
    linesHinglish: [
      'Rabar se mitaakar baar-baar sudhaari gayi drawing bhi ek din kalaakriti banti hai',
      'Bas apni shuruwaati galtiyon se ghabraakar panna faadna mat kabhi bhi',
    ],
    linesEnglish: [
      'Even messy sketches erased and redrawn ten times become real art',
      'Just never tear the notebook page out because your first lines shook',
    ],
  },
  {
    title: 'खामोश समंदर में अपनी नाव',
    titleEnglish: 'Your Own Boat on Wide Waters',
    linesHindi: [
      'दूसरों के जहाज़ की प्रतीक्षा में किनारे पर बैठे रहने से सफ़र नहीं होता',
      'छोटी ही सही, अपनी पतवार खुद थामोगे तो पार ज़रूर उतरोगे एक दिन',
    ],
    linesHinglish: [
      'Doosron ke jahaaz ki prateeksha mein kinaare par baithe rehne se safar nahin hota',
      'Chhoti hi sahi, apni patwaar khud thaamoge to paar zaroor utroge ek din',
    ],
    linesEnglish: [
      'Waiting on shore for someone else’s grand ship never crosses the bay',
      'Grip your own humble oars steady and you will reach distant harbors fine',
    ],
  },
  {
    title: 'नई मंज़िल की खुशबूदार हवा',
    titleEnglish: 'Fragrant Breeze From Next Horizon',
    linesHindi: [
      'जैसे ही हम पुराने डर की दहलीज़ से बाहर पहला कदम रख देते हैं',
      'ताज़ा हवा खुद आगे आकर हमारा स्वागत करती है पूरे सम्मान से',
    ],
    linesHinglish: [
      'Jaise hi hum puraane dar ki dehleez se baahar pehla kadam rakh dete hain',
      'Taaza hawa khud aage aakar hamaara swaagat karti hai poore sammaan se',
    ],
    linesEnglish: [
      'The very second you step boldly past the doorstep of old hesitation',
      'Fresh mountain air rushes forward welcoming your courage cleanly',
    ],
  },
  {
    title: 'हर दिन एक प्रतिशत बेहतर',
    titleEnglish: 'One Percent Brighter Each Day',
    linesHindi: [
      'पूरा पहाड़ एक ही छलांग में पार करने की ज़िद करना ज़रूरी नहीं है',
      'आज कल से थोड़ा सा बेहतर कर लेना भी सबसे बड़ी तरक्की है दोस्त',
    ],
    linesHinglish: [
      'Poora pahaad ek hi chhalaang mein paar karne ki zid karna zaroori nahin hai',
      'Aaj kal se thoda sa behtar kar lena bhi sabse badi tarakki hai dost',
    ],
    linesEnglish: [
      'No climber leaps a snowy peak in one reckless afternoon jump',
      'Growing one steady notch wiser today than yesterday beats every rush',
    ],
  },
  {
    title: 'आँखों की चमक बचाए रखना',
    titleEnglish: 'Guarding That Spark Inside Eyes',
    linesHindi: [
      'दुनिया की उलझनों में खोकर भी बस एक चीज़ कभी मत मरने देना अंदर',
      'वह बचपन वाली चमक जो हर नई सुबह को जादू समझकर देखती थी',
    ],
    linesHinglish: [
      'Duniya ki uljhanon mein khokar bhi bas ek cheez kabhi mat marne dena andar',
      'Woh bachpan waali chamak jo har nayi subah ko jaadoo samajhkar dekhti thi',
    ],
    linesEnglish: [
      'Amid endless chores and deadlines, protect one priceless treasure inside',
      'That bright-eyed wonder greeting every sunrise like brand-new magic',
    ],
  },
  {
    title: 'चमकते शहर से अलग अपनी राह',
    titleEnglish: 'Your Own Trail Beyond Neon',
    linesHindi: [
      'भीड़ जिस रास्ते पर दौड़ रही है वहीं भागना हमेशा कामयाबी नहीं होती',
      'अपनी पसंद और हुनर की पगडंडी पर चलकर भी मंज़िल मिलती है सुकून से',
    ],
    linesHinglish: [
      'Bheed jis raaste par daud rahi hai wahin bhaagna hamesha kaamyaabi nahin hoti',
      'Apni pasand aur hunar ki pagdandi par chalkar bhi manzil milti hai sukoon se',
    ],
    linesEnglish: [
      'Sprinting blindly down crowded lanes rarely guarantees true fulfillment',
      'Walking trails carved by your own craft leads smoothly to lasting peace',
    ],
  },
  {
    title: 'सपनों के बगीचे में धैर्य का माली',
    titleEnglish: 'Patient Gardener of Quiet Dreams',
    linesHindi: [
      'बीज बोने के अगले ही दिन कोई ज़मीन खोदकर अंकुर नहीं देखता कभी',
      'थोड़ा पानी, थोड़ी धूप और थोड़ा इंतज़ार ही बाग़ में फूल खिलाते हैं',
    ],
    linesHinglish: [
      'Beej bone ke agle hi din koi zameen khodkar ankur nahin dekhta kabhi',
      'Thoda paani, thodi dhoop aur thoda intezaar hi baag mein phool khilaate hain',
    ],
    linesEnglish: [
      'No wise gardener digs up fresh soil next morning checking on seeds',
      'Steady water, warm sun, and quiet patience raise entire blooming beds',
    ],
  },
  {
    title: 'खुद से किया गया मीठा वादा',
    titleEnglish: 'Sweet Promise Kept With Yourself',
    linesHindi: [
      'जब भी मन थके तो बस पुराने दिनों को याद करके मुस्कुरा देना एक बार',
      'हमने यह सफ़र रुकने के लिए नहीं, पूरा करने के लिए शुरू किया था',
    ],
    linesHinglish: [
      'Jab bhi mann thake to bas puraane dinon ko yaad karke muskura dena ek baar',
      'Humne yeh safar rukne ke liye nahin, poora karne ke liye shuru kiya tha',
    ],
    linesEnglish: [
      'Whenever weary limbs beg to pause, glance back smiling at mile zero',
      'Remember we launched this journey to finish proud—not fade halfway',
    ],
  },
  {
    title: 'सितारों से भरा खुला मन',
    titleEnglish: 'Open Mind Aglow With Stars',
    linesHindi: [
      'जिस इंसान के मन में उम्मीद और सपनों की रोशनी जलती रहती है हमेशा',
      'उसके लिए हर अंधेरी रात सिर्फ़ अगले सवेरे की तैयारी बन जाती है',
    ],
    linesHinglish: [
      'Jis insaan ke mann mein ummeed aur sapnon ki roshni jalti rehti hai hamesha',
      'Uske liye har andheri raat sirf agle savere ki taiyaari ban jaati hai',
    ],
    linesEnglish: [
      'For anyone keeping steady lanterns of hope burning bright within',
      'Even the darkest night turns merely into quiet rehearsal for sunrise',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'सपनों की पहली सीढ़ी का सम्मान',
    titleEnglish: 'Honoring the First Humble Step',
    linesHindi: [
      'छोटी नौकरी या छोटे काम से शुरू करने में कभी संकोच मत करना दोस्त',
      'बड़े से बड़े महल की बुनियाद भी सबसे निचली ईंट से ही रखी जाती है',
    ],
    linesHinglish: [
      'Chhoti naukri ya chhote kaam se shuru karne mein kabhi sankoch mat karna dost',
      'Bade se bade mahal ki buniyaad bhi sabse nichli eent se hi rakhi jaati hai',
    ],
    linesEnglish: [
      'Never hesitate starting with modest rooms, small gigs, or entry steps',
      'Even soaring palaces rest solidly upon their lowest laid stones',
    ],
  },
  {
    title: 'कागज़ पर उतरी सुनहरी लकीर',
    titleEnglish: 'Golden Line Traced on Paper',
    linesHindi: [
      'सिर्फ़ दिमाग में घूमते हुए विचारों को हवा कभी भी उड़ा ले जा सकती है',
      'उन्हें कागज़ पर लिखकर तारीख़ डाल दो, तो रास्ते ख़ुद बनने लगते हैं',
    ],
    linesHinglish: [
      'Sirf dimaag mein ghoomte hue vichaaron ko hawa kabhi bhi uda le ja sakti hai',
      'Unhein kaagaz par likhkar taareekh daal do, to raaste khud banne lagte hain',
    ],
    linesEnglish: [
      'Vague ideas floating loose in thought drift away with busy weeks',
      'Write them clearly on paper with dates, and footpaths start appearing',
    ],
  },
  {
    title: 'इम्तिहान की रात का हौसला',
    titleEnglish: 'Quiet Courage Before Exam Dawn',
    linesHindi: [
      'किताबों के पन्नों के बीच जो रातें कॉफ़ी के सहारे काटी जाती हैं अक्सर',
      'वे एक दिन पूरे परिवार के माथे पर गर्व का तिलक लगा देती हैं',
    ],
    linesHinglish: [
      'Kitaabon ke pannon ke beech jo raatein coffee ke sahaare kaati jaati hain aksar',
      'We ek din poore parivaar ke maathe par garv ka tilak laga deti hain',
    ],
    linesEnglish: [
      'Long studious nights kept company by warm mugs and thick textbooks',
      'Grow into proud bright moments lifting an entire household high',
    ],
  },
  {
    title: 'हवा के रुख से बेपरवाह पंख',
    titleEnglish: 'Wings Unafraid of Shifting Winds',
    linesHindi: [
      'हमेशा अनुकूल मौसम की प्रतीक्षा करने वाले कभी घर से नहीं निकल पाते',
      'हवा का रुख जैसा भी हो, अपनी दिशा तय करके उड़ना ही कला है',
    ],
    linesHinglish: [
      'Hamesha anukool mausam ki prateeksha karne waale kabhi ghar se nahin nikal paate',
      'Hawa ka rukh jaisa bhi ho, apni disha tay karke udna hi kala hai',
    ],
    linesEnglish: [
      'Folks waiting endlessly for flawless weather never step past the gate',
      'Adjusting your sails to whatever wind blows today is real mastery',
    ],
  },
  {
    title: 'दिल की गहराई से निकली चाह',
    titleEnglish: 'Sincere Wish Born From Within',
    linesHindi: [
      'जब किसी लक्ष्य को पाने की चाहत भीतर से बिल्कुल सच्ची होती है',
      'तो मुश्किल से मुश्किल दरवाज़े में भी कोई न कोई रास्ता खुल ही जाता है',
    ],
    linesHinglish: [
      'Jab kisi lakshya ko paane ki chaahat bheetar se bilkul sachhi hoti hai',
      'To mushkil se mushkil darwaze mein bhi koi na koi raasta khul hi jaata hai',
    ],
    linesEnglish: [
      'When desire to reach an honest goal burns cleanly from deep inside',
      'Even stubborn locked doors begin revealing subtle hinges one by one',
    ],
  },
  {
    title: 'चाय की टपरी से बोर्डरूम तक',
    titleEnglish: 'From Roadside Stall to Boardroom',
    linesHindi: [
      'जिस आइडिया पर कभी टपरी की बेंच पर दोस्तों संग ठहाके लगते थे रोज़',
      'मेहनत ने आज उसी को बड़े शहर की चमकती इमारत में सच कर दिखाया',
    ],
    linesHinglish: [
      'Jis idea par kabhi tapri ki bench par doston sang thahaake lagte the roz',
      'Mehnat ne aaj usi ko bade shehar ki chamakti imaarat mein sach kar dikhaaya',
    ],
    linesEnglish: [
      'Wild blueprints we once laughed over on wooden roadside tea benches',
      'Became bright glass offices downtown thanks to steady stubborn work',
    ],
  },
  {
    title: 'सफलता की सादी परिभाषा',
    titleEnglish: 'Simple Meaning of True Success',
    linesHindi: [
      'मेरा ख़्वाब सिर्फ़ करोड़ों की गिनती गिनने तक सीमित नहीं रहा कभी',
      'मैं ऐसा जीवन चाहता हूँ जहाँ शाम को मन शांत और घर सुरक्षित रहे',
    ],
    linesHinglish: [
      'Mera khwaab sirf karodon ki ginti ginne tak seemit nahin raha kabhi',
      'Main aisa jeevan chaahta hoon jahaan shaam ko mann shaant aur ghar surakshit rahe',
    ],
    linesEnglish: [
      'My vision never shrank down solely to counting stacks of zeros',
      'I dream of evenings filled with calm minds, honest work, and safe roofs',
    ],
  },
  {
    title: 'अधूरी रात में जगता सूरज',
    titleEnglish: 'Rising Sun Inside Quiet Night',
    linesHindi: [
      'जब सबको लगे कि अब कोई रास्ता नहीं बचा है आगे बढ़ने के लिए',
      'तभी सबसे शांत कमरे में बैठे इंसान के भीतर नया सूरज उगता है',
    ],
    linesHinglish: [
      'Jab sabko lage ki ab koi raasta nahin bacha hai aage badhne ke liye',
      'Tabhi sabse shaant kamre mein baithe insaan ke bheetar naya sooraj ugta hai',
    ],
    linesEnglish: [
      'Right when crowds declare every forward avenue sealed tight',
      'A fresh bright sun rises quietly inside the calmest dreamer’s room',
    ],
  },
  {
    title: 'पुराने बैग में बड़ी मंज़िल',
    titleEnglish: 'Big Destiny Inside Worn Backpack',
    linesHindi: [
      'कंधे पर टँगा पुराना पिट्ठू बैग और जेब में सिर्फ़ किराये भर के पैसे',
      'इतनी सी पूँजी से निकलकर कई लोगों ने पूरी दुनिया जीत ली है यार',
    ],
    linesHinglish: [
      'Kandhe par tanga puraana pitthu bag aur jeb mein sirf kiraaye bhar ke paise',
      'Itni si poonji se nikalkar kai logon ne poori duniya jeet li hai yaar',
    ],
    linesEnglish: [
      'One scuffed backpack on both shoulders and barely train fare in pockets',
      'Has launched countless ordinary dreamers straight into extraordinary lives',
    ],
  },
  {
    title: 'नए शहर की पहली चाबी',
    titleEnglish: 'First Apartment Key in New City',
    linesHindi: [
      'जब पहली बार अपने दम पर लिए कमरे की चाबी हाथ में आई मेरे आज',
      'तो खाली फ़र्श पर बैठकर भी पूरा आसमान अपना लगने लगा था मुझे',
    ],
    linesHinglish: [
      'Jab pehli baar apne dam par liye kamre ki chaabi haath mein aayi mere aaj',
      'To khaali farsh par baithkar bhi poora aasmaan apna lagne laga tha mujhe',
    ],
    linesEnglish: [
      'Holding the brass key to my very first place earned completely on my own',
      'Even sitting flat on bare wooden floors felt like owning the whole sky',
    ],
  },
  {
    title: 'गिरकर उठने की अनोखी कला',
    titleEnglish: 'Rare Grace of Rising Again',
    linesHindi: [
      'असली हार तब होती है जब तुम ख़ुद ही अपने ख़्वाबों से मुँह मोड़ लो',
      'वरना हर ठोकर तो बस दौड़ की रफ़्तार सँवारने के लिए आती है',
    ],
    linesHinglish: [
      'Asli haar tab hoti hai jab tum khud hi apne khwaabon se munh mod lo',
      'Warna har thokar to bas daud ki raftaar sanwaarne ke liye aati hai',
    ],
    linesEnglish: [
      'Real defeat arrives only the day you personally turn away from your dreams',
      'Every stumble along the track merely sharpens balance for the sprint',
    ],
  },
  {
    title: 'सपनों में बसी माँ की दुआ',
    titleEnglish: 'Mother’s Blessing Inside Every Goal',
    linesHindi: [
      'मेरी मंज़िल की हर बड़ी ईंट पर मेरा नहीं, माँ की दुआओं का नाम है',
      'क्योंकि बिना उनके आशीर्वाद के कोई उड़ान पूरी हो ही नहीं सकती',
    ],
    linesHinglish: [
      'Meri manzil ki har badi eent par mera nahin, maa ki duaon ka naam hai',
      'Kyunki unke aashirwaad ke bina koi udaan poori ho hi nahin sakti',
    ],
    linesEnglish: [
      'Every sturdy milestone I reach carries Mom’s quiet prayers before my name',
      'Without her gentle blessings, no flight ever sails completely steady',
    ],
  },
  {
    title: 'भीड़ से अलग खड़ी सोच',
    titleEnglish: 'Thought Standing Apart From Crowd',
    linesHindi: [
      'दुनिया वही देखती है जो पहले से बाज़ार में सजाकर रखा गया हो सामने',
      'पर ख़्वाब देखने वाले हमेशा वह चीज़ गढ़ते हैं जो अभी बनी ही नहीं',
    ],
    linesHinglish: [
      'Duniya wahi dekhti hai jo pehle se baazaar mein sajaakar rakha gaya ho saamne',
      'Par khwaab dekhne waale hamesha woh cheez gadhte hain jo abhi bani hi nahin',
    ],
    linesEnglish: [
      'Crowds mostly admire what already sits polished behind shop glass',
      'True dreamers cheerfully sketch shapes nobody else has built yet',
    ],
  },
  {
    title: 'तपते सूरज में छाया की आस',
    titleEnglish: 'Dreaming Cool Shade in Noon Heat',
    linesHindi: [
      'तपती दुपहरी में पेड़ लगाने की हिम्मत हर किसी के पास नहीं होती',
      'पर वही पौधा एक दिन आने वाली पीढ़ियों को मीठी छाया बाँटता है',
    ],
    linesHinglish: [
      'Tapti dupahari mein ped lagaane ki himmat har kisi ke paas nahin hoti',
      'Par wahi paudha ek din aane waali peedhiyon ko meethi chhaaya baant-ta hai',
    ],
    linesEnglish: [
      'Few have grit to plant young saplings under blazing midsummer sun',
      'Yet those exact trees eventually shelter entire neighborhoods in cool shade',
    ],
  },
  {
    title: 'आसमान छूती सादगी',
    titleEnglish: 'Simplicity Reaching Cloud Tops',
    linesHindi: [
      'अपने सपनों को इतना ऊँचा रखो कि बादल भी रास्ता पूछने आएँ कभी',
      'और अपने व्यवहार को इतना सरल रखो कि हर इंसान पास बैठ सके',
    ],
    linesHinglish: [
      'Apne sapnon ko itna ooncha rakho ki baadal bhi raasta poochhne aayein kabhi',
      'Aur apne vyavahaar ko itna saral rakho ki har insaan paas baith sake',
    ],
    linesEnglish: [
      'Set your dreams soaring high enough that high clouds ask directions',
      'Keep your spirit humble enough that anyone feels warm sitting beside you',
    ],
  },
  {
    title: 'कलम की स्याही में छिपा कल',
    titleEnglish: 'Tomorrow Held Inside Pen Ink',
    linesHindi: [
      'जो भी विद्यार्थी आज अपनी मेज़ पर झुककर कलम घिस रहा है चुपचाप',
      'वह अनजाने में अपने पूरे खानदान की तस्वीर बदल रहा है धीरे-धीरे',
    ],
    linesHinglish: [
      'Jo bhi vidyaarthi aaj apni mez par jhukkar kalam ghis raha hai chupchaap',
      'Woh anjaane mein apne poore khaandaan ki tasveer badal raha hai dheere-dheere',
    ],
    linesEnglish: [
      'Every quiet student hunched late over study desks wearing down pens',
      'Is steadily rewriting the entire bright horizon of their family name',
    ],
  },
  {
    title: 'मंज़िल से प्यारा सफ़र का मज़ा',
    titleEnglish: 'Joy of Climbing Beyond Summit',
    linesHindi: [
      'सिर्फ़ शिखर पर पहुँचकर ही खुश होने की आदत अक्सर थका देती है',
      'चढ़ाई के हर छोटे पड़ाव का आनंद लेना भी तो ख़्वाब जीना ही है',
    ],
    linesHinglish: [
      'Sirf shikhar par pahunchkar hi khush hone ki aadat aksar thaka deti hai',
      'Chadhaai ke har chhote padaav ka aanand lena bhi to khwaab jeena hi hai',
    ],
    linesEnglish: [
      'Saving happiness strictly for mountaintops leaves whole journeys gray',
      'Savoring every bright bend along the trail means living your dream daily',
    ],
  },
  {
    title: 'भरोसे के पंखों पर सवेरा',
    titleEnglish: 'Morning Carried on Trust Wings',
    linesHindi: [
      'चाहे रास्ता कितना भी धुँधला क्यों न दिख रहा हो आज सुबह के वक़्त',
      'भरोसा रखो कि तुम्हारे हर ईमानदार कदम के आगे रोशनी ज़रूर मिलेगी',
    ],
    linesHinglish: [
      'Chaahe raasta kitna bhi dhundhla kyun na dikh raha ho aaj subah ke waqt',
      'Bharosa rakho ki tumhaare har imaandaar kadam ke aage roshni zaroor milegi',
    ],
    linesEnglish: [
      'No matter how foggy the road ahead appears right around breakfast',
      'Trust firmly that clear sunlight meets every honest step forward',
    ],
  },
  {
    title: 'छोटी सी चिंगारी से उजाला',
    titleEnglish: 'Single Spark Turning Into Dawn',
    linesHindi: [
      'पूरा जंगल रोशन करने के लिए शुरुआत में बस एक चिंगारी काफ़ी होती है',
      'तुम्हारे भीतर का वह छोटा सा ख़्वाब ही कल बड़ा कारवाँ बनेगा',
    ],
    linesHinglish: [
      'Poora jangal roshan karne ke liye shuruwaat mein bas ek chingaari kaafi hoti hai',
      'Tumhaare bheetar ka woh chhota sa khwaab hi kal bada kaarwaan banega',
    ],
    linesEnglish: [
      'One steady little spark carries power enough to wake dark sleeping hills',
      'That quiet dream inside you today grows into tomorrow’s proud movement',
    ],
  },
  {
    title: 'पूरी होती दुआ की मुस्कान',
    titleEnglish: 'Smile of a Dream Coming True',
    linesHindi: [
      'जब सालों की मेहनत के बाद पहला ख़्वाब हक़ीक़त बनता है सामने',
      'तो मुँह से शब्द नहीं निकलते, बस आँखें आसमान को शुक्रिया कहती हैं',
    ],
    linesHinglish: [
      'Jab saalon ki mehnat ke baad pehla khwaab haqeeqat banta hai saamne',
      'To munh se shabd nahin nikalte, bas aankhein aasmaan ko shukriya kehti hain',
    ],
    linesEnglish: [
      'When years of silent work blossom suddenly into real triumph before you',
      'Words fall short—only glistening eyes lift quietly thanking wide skies',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'मेज़ पर बिखरे रंग और ख़्वाब',
    titleEnglish: 'Colors and Dreams Across Desk',
    linesHindi: [
      'जिसका दिल कुछ नया रचने के लिए मचलता रहता है हर पल अंदर से',
      'उसकी मेज़ की अव्यवस्था में भी आने वाले कल की चमक दिखती है',
    ],
    linesHinglish: [
      'Jiska dil kuch naya rachne ke liye machalta rehta hai har pal andar se',
      'Uski mez ki avyavastha mein bhi aane waale kal ki chamak dikhti hai',
    ],
    linesEnglish: [
      'Anyone whose spirit burns to invent fresh beauty every waking hour',
      'Hides tomorrow’s finest creations right across a cluttered workspace',
    ],
  },
  {
    title: 'तन्हा सफ़र में खुद की तालियाँ',
    titleEnglish: 'Clapping for Yourself Mid-Journey',
    linesHindi: [
      'शुरुआत में जब कोई तुम्हारे ख़्वाब पर ताली न बजाए पास आकर',
      'तो ख़ुद ही अपने छोटे कदमों की तारीफ़ करना मत भूलना मेरे यार',
    ],
    linesHinglish: [
      'Shuruwaat mein jab koi tumhaare khwaab par taali na bajaaye paas aakar',
      'To khud hi apne chhote kadmon ki taareef karna mat bhoolna mere yaar',
    ],
    linesEnglish: [
      'At first when nobody nearby applauds your quiet early breakthroughs',
      'Remember to celebrate each steady inch gained all on your own',
    ],
  },
  {
    title: 'साधारण लोगों के असाधारण ख़्वाब',
    titleEnglish: 'Bold Dreams of Everyday People',
    linesHindi: [
      'सपने देखने के लिए किसी बड़े महल में पैदा होना ज़रूरी नहीं होता',
      'बल्कि आम घरों के शांत बच्चे ही सबसे बड़ी क्रांति रचकर दिखाते हैं',
    ],
    linesHinglish: [
      'Sapne dekhne ke liye kisi bade mahal mein paida hona zaroori nahin hota',
      'Balki aam gharon ke shaant bachche hi sabse badi kraanti rachkar dikhaate hain',
    ],
    linesEnglish: [
      'Great visions never require being born behind gilded estate gates',
      'Quiet kids from modest lanes most often build world-changing stories',
    ],
  },
  {
    title: 'पत्थरों से गुजरती नदी की धारा',
    titleEnglish: 'River Carving Through Hard Stones',
    linesHindi: [
      'नदी के रास्ते में चट्टानें आ जाएँ तो वह बहना बंद नहीं करती कभी',
      'बल्कि गोल घूमकर और भी मधुर संगीत के साथ आगे बढ़ जाती है',
    ],
    linesHinglish: [
      'Nadi ke raaste mein chattaanein aa jaayein to woh behna band nahin karti kabhi',
      'Balki gol ghoomkar aur bhi madhur sangeet ke saath aage badh jaati hai',
    ],
    linesEnglish: [
      'When stubborn boulders block a mountain stream, water never stops moving',
      'It curves gracefully around stone singing even sweeter down the bend',
    ],
  },
  {
    title: 'दुनिया बदलने वाला पहला क़दम',
    titleEnglish: 'First Step Changing Everything',
    linesHindi: [
      'सब कुछ एक साथ परफेक्ट हो जाए, इस इंतज़ार में साल बीत जाते हैं',
      'जैसे हो वैसे ही शुरू कर दो, चलते-चलते सब सँवरता चला जाता है',
    ],
    linesHinglish: [
      'Sab kuch ek saath perfect ho jaaye, is intezaar mein saal beet jaate hain',
      'Jaise ho waise hi shuru kar do, chalte-chalte sab sanwarta chala jaata hai',
    ],
    linesEnglish: [
      'Whole years evaporate waiting for conditions to align flawlessly',
      'Begin right from where you stand—motion itself polishes the path ahead',
    ],
  },
  {
    title: 'नीले आसमान में छूटी लकीर',
    titleEnglish: 'Jet Trail Across Open Blue',
    linesHindi: [
      'आसमान में उड़ते जहाज़ की सफ़ेद लकीर देखकर बचपन में जो चमक आती थी',
      'वही चमक इंसान को गाँव की पगडंडी से दुनिया के नक्शे तक ले आती है',
    ],
    linesHinglish: [
      'Aasmaan mein udte jahaaz ki safed lakeer dekhkar bachpan mein jo chamak aati thi',
      'Wahi chamak insaan ko gaanv ki pagdandi se duniya ke nakshe tak le aati hai',
    ],
    linesEnglish: [
      'That wide-eyed spark watching white contrails slice summer blue sky',
      'Carries kids from dusty village lanes straight across world capitals',
    ],
  },
  {
    title: 'मीठे ख़्वाबों की जागती आँखें',
    titleEnglish: 'Waking Eyes Full of Gentle Vision',
    linesHindi: [
      'ख़्वाब देखने से इंसान पागल नहीं बल्कि थोड़ा ज़्यादा ज़िंदा हो जाता है',
      'वरना बिना लक्ष्य की साँसें तो बस कैलेंडर के दिन काटती रहती हैं',
    ],
    linesHinglish: [
      'Khwaab dekhne se insaan paagal nahin balki thoda zyada zinda ho jaata hai',
      'Warna bina lakshya ki saansein to bas calendar ke din kaat-ti rehti hain',
    ],
    linesEnglish: [
      'Dreaming boldly never makes you foolish—it wakes your soul alive',
      'Without clear purpose, days merely flicker past like blank pages',
    ],
  },
  {
    title: 'कमरे के कोने में टँगा टाइमटेबल',
    titleEnglish: 'Handwritten Schedule Pinned on Wall',
    linesHindi: [
      'दीवार पर चिपकाए गए छोटे-छोटे लक्ष्य एक दिन बड़ी इमारत बनते हैं',
      'हर टिक मार्क के साथ तुम्हारा आत्मविश्वास दोगुना होता चला जाता है',
    ],
    linesHinglish: [
      'Deewaar par chipkaaye gaye chhote-chhote lakshya ek din badi imaarat bante hain',
      'Har tick mark ke saath tumhaara aatmavishwas doguna hota chala jaata hai',
    ],
    linesEnglish: [
      'Tiny handwritten checklists taped on bedroom paint grow into towers',
      'Every checked box doubles quiet confidence inside your stride',
    ],
  },
  {
    title: 'खामोश समर्पण का फल',
    titleEnglish: 'Harvest of Quiet Devotion',
    linesHindi: [
      'जब सब लोग त्योहारों और छुट्टियों में आराम फरमा रहे होते हैं घर पर',
      'तब अपने कौशल को माँजने वाला एक दिन सबके लिए प्रेरणा बनता है',
    ],
    linesHinglish: [
      'Jab sab log tyohaaron aur chhuttiyon mein aaraam farma rahe hote hain ghar par',
      'Tab apne kaushal ko maanjne waala ek din sabke liye prerna banta hai',
    ],
    linesEnglish: [
      'When everyone else coasts casually through easy weekends and breaks',
      'Quiet craftspeople sharpening their gift soon become the standard',
    ],
  },
  {
    title: 'अधूरे घर को पूरा करने की चाह',
    titleEnglish: 'Desire Completing Family Home',
    linesHindi: [
      'बारिश में टपकती छत को देखकर जो कसम खाई थी बचपन में कभी',
      'उसे पूरा करने की ताक़त ही हर थकी शाम को जगाए रखती है',
    ],
    linesHinglish: [
      'Baarish mein tapakti chhat ko dekhkar jo kasam khaayi thi bachpan mein kabhi',
      'Use poora karne ki taaqat hi har thaki shaam ko jagaaye rakhti hai',
    ],
    linesEnglish: [
      'That quiet childhood vow made watching monsoon leaks drip into pans',
      'Still powers every tired late evening until our dream home stands dry',
    ],
  },
  {
    title: 'सपनों के बीच अपनापन',
    titleEnglish: 'Kindness Kept Amid Big Goals',
    linesHindi: [
      'इतने बड़े ख़्वाब भी मत पाल लेना कि अपनों का हाल पूछना भूल जाओ',
      'क्योंकि सच्ची जीत वही है जहाँ मुस्कान बाँटने के लिए अपने पास हों',
    ],
    linesHinglish: [
      'Itne bade khwaab bhi mat paal lena ki apnon ka haal poochhna bhool jaao',
      'Kyunki sachhi jeet wahi hai jahaan muskaan baantne ke liye apne paas hon',
    ],
    linesEnglish: [
      'Never chase tall castles so fast that you forget checking on loved ones',
      'Real triumph means having warm faces nearby to share the view at top',
    ],
  },
  {
    title: 'सुनहरे भविष्य की नींव',
    titleEnglish: 'Foundation of Brighter Tomorrow',
    linesHindi: [
      'आज जो घंटे तुम अपनी पढ़ाई और हुनर में चुपचाप निवेश कर रहे हो',
      'कल वही तुम्हें दुनिया के सामने सिर उठाकर चलने का हक़ दिलाएँगे',
    ],
    linesHinglish: [
      'Aaj jo ghante tum apni padhaai aur hunar mein chupchaap nivesh kar rahe ho',
      'Kal wahi tumhein duniya ke saamne sir uthaakar chalne ka haq dilaayenge',
    ],
    linesEnglish: [
      'Quiet hours invested now in learning crafts and sharpening mind',
      'Purchase lifelong dignity walking tall through every hall tomorrow',
    ],
  },
  {
    title: 'जुगनुओं जैसी चमकदार चाहत',
    titleEnglish: 'Firefly Glow Inside Dark Hours',
    linesHindi: [
      'अंधेरी रात में जुगनू से किसी ने नहीं पूछा कि तेरी रोशनी कितनी बड़ी है',
      'बस उसकी छोटी सी चमक ही पूरे बगीचे को खूबसूरत बना देती है',
    ],
    linesHinglish: [
      'Andheri raat mein jugnu se kisi ne nahin poochha ki teri roshni kitni badi hai',
      'Bas uski chhoti si chamak hi poore bageeche ko khoobsurat bana deti hai',
    ],
    linesEnglish: [
      'Nobody asks a tiny firefly in dark gardens how many watts it shines',
      'Its gentle flickering spark alone turns the whole midnight meadow bright',
    ],
  },
  {
    title: 'भीतर के कलाकार को सलाम',
    titleEnglish: 'Saluting the Creator Inside',
    linesHindi: [
      'दुनिया की नकल करने से सिर्फ़ दूसरी प्रति ही बन पाती है हमेशा',
      'अपने भीतर की अनोखी आवाज़ सुनो, वही असली इतिहास रचती है',
    ],
    linesHinglish: [
      'Duniya ki nakal karne se sirf doosri prati hi ban paati hai hamesha',
      'Apne bheetar ki anokhi aawaz suno, wahi asli itihaas rachti hai',
    ],
    linesEnglish: [
      'Imitating noisy crowds produces nothing sharper than faded copies',
      'Listening closely to your own rare voice creates work the world remembers',
    ],
  },
  {
    title: 'नए मौसम के नए इरादे',
    titleEnglish: 'Fresh Resolve With Shifting Skies',
    linesHindi: [
      'साल बदलने से ज़्यादा ज़रूरी होता है अपने इरादों को मजबूत करना यार',
      'सच्चे इरादे किसी भी साधारण मंगलवार को ऐतिहासिक बना सकते हैं',
    ],
    linesHinglish: [
      'Saal badalne se zyada zaroori hota hai apne iraadon ko mazboot karna yaar',
      'Sachhe iraade kisi bhi saadhaaran mangalwaar ko aitihaasik bana sakte hain',
    ],
    linesEnglish: [
      'Waiting for January first matters far less than steady daily grit',
      'Fierce focus can turn any ordinary Tuesday into life’s turning point',
    ],
  },
  {
    title: 'चमकते पन्नों की खुशबू',
    titleEnglish: 'Scent of Fresh Unwritten Chapters',
    linesHindi: [
      'अब तक जो बीत गया वह सिर्फ़ तुम्हारी भूमिका भर थी इस किताब की',
      'असली और सबसे शानदार अध्याय तो अब लिखे जाने बाकी हैं दोस्त',
    ],
    linesHinglish: [
      'Ab tak jo beet gaya woh sirf tumhaari bhoomika bhar thi is kitaab ki',
      'Asli aur sabse shaandaar adhyaay to ab likhe jaane baaki hain dost',
    ],
    linesEnglish: [
      'Everything lived up until today was merely your opening prologue',
      'The richest, boldest chapters remain freshly waiting right ahead',
    ],
  },
  {
    title: 'सुकून की छाया में मेहनत',
    titleEnglish: 'Effort Anchored in Calm Focus',
    linesHindi: [
      'भागदौड़ ज़रूरी है पर भीतर की शांति खोकर कोई दौड़ नहीं जीती जाती',
      'मुस्कुराते हुए काम करो तो सबसे कठिन पहाड़ भी आसान लगने लगते हैं',
    ],
    linesHinglish: [
      'Bhaagdaud zaroori hai par bheetar ki shaanti khokar koi daud nahin jeeti jaati',
      'Muskuraate hue kaam karo to sabse kathin pahaad bhi aasaan lagne lagte hain',
    ],
    linesEnglish: [
      'Hustle matters, yet burning out your inner peace wins no worthy race',
      'Working steadily with calm cheer shrinks steep ridges into gentle hills',
    ],
  },
  {
    title: 'उम्मीद का अटूट धागा',
    titleEnglish: 'Unbreakable Thread of Hope',
    linesHindi: [
      'कितनी भी बार धागा उलझे, धैर्य से सुलझाने वाला कभी हारता नहीं',
      'वही एक दिन अपने सपनों की पूरी माला पिरोकर गले में पहनता है',
    ],
    linesHinglish: [
      'Kitni bhi baar dhaaga uljhe, dhairya se suljhaane waala kabhi haarta nahin',
      'Wahi ek din apne sapnon ki poori maala pirokar gale mein pehanta hai',
    ],
    linesEnglish: [
      'No matter how often strings tangle, patient hands untie every knot',
      'Slowly threading all scattered beads into bright garlands of triumph',
    ],
  },
  {
    title: 'मंज़िल के पहले की साँस',
    titleEnglish: 'Deep Breath Right Before Summit',
    linesHindi: [
      'जब रास्ता सबसे ज़्यादा खड़ी चढ़ाई पर लगे और पैर भारी होने लगें',
      'तब समझ लेना कि सुंदर दृश्य बस अगले मोड़ के ठीक पीछे खड़ा है',
    ],
    linesHinglish: [
      'Jab raasta sabse zyada khadi chadhaai par lage aur pair bhaari hone lagein',
      'Tab samajh lena ki sundar drishya bas agle mod ke theek peechhe khada hai',
    ],
    linesEnglish: [
      'Right when the climb tilts steepest and legs feel heaviest of all',
      'Know the breathtaking vista waits just beyond the very next bend',
    ],
  },
  {
    title: 'आकाश में लिखा अपना कल',
    titleEnglish: 'Your Future Written on Wide Sky',
    linesHindi: [
      'छोटे दायरे में सिमटकर रहने के लिए नहीं जन्मा है तुम्हारा हौसला',
      'पंख खोलो और दिखा दो कि बड़े ख़्वाब सच होने के लिए ही आते हैं',
    ],
    linesHinglish: [
      'Chhote daayre mein simatkar rehne ke liye nahin janma hai tumhaara hausla',
      'Pankh kholo aur dikha do ki bade khwaab sach hone ke liye hi aate hain',
    ],
    linesEnglish: [
      'Your courage was never meant to stay folded inside tiny borders',
      'Spread wide wings and prove bold dreams arrive solely to come true',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'सपनों में बसा अपना गाँव',
    titleEnglish: 'Dreaming Back for Own Village',
    linesHindi: [
      'बड़े शहर में ऊँचा मुकाम पाने का एक प्यारा ख़्वाब यह भी है मन में',
      'कि एक दिन अपने गाँव के बच्चों के लिए भी एक सुंदर स्कूल बनाऊँ',
    ],
    linesHinglish: [
      'Bade shehar mein ooncha mukaam paane ka ek pyara khwaab yeh bhi hai mann mein',
      'Ki ek din apne gaanv ke bachchon ke liye bhi ek sundar school banaaoon',
    ],
    linesEnglish: [
      'One tender dream driving my climb across busy metropolitan towers',
      'Is returning someday to build bright classrooms back in my home village',
    ],
  },
  {
    title: 'चुपचाप रचती किस्मत की रेखा',
    titleEnglish: 'Lines of Fate Slowly Rewritten',
    linesHindi: [
      'हथेली की लकीरों को कोसने वाले हमेशा वहीं खड़े रह जाते हैं',
      'जो उँगलियों से मेहनत करते हैं वे अपनी लकीरें खुद बना लेते हैं',
    ],
    linesHinglish: [
      'Hatheli ki lakeeron ko kosne waale hamesha wahin khade reh jaate hain',
      'Jo ungliyon se mehnat karte hain we apni lakeerein khud bana lete hain',
    ],
    linesEnglish: [
      'Folks blaming lines across their palms remain parked at mile zero',
      'Workers putting hands to real craft carve brand-new destinies cleanly',
    ],
  },
  {
    title: 'सुबह की दौड़ और ताज़ी साँस',
    titleEnglish: 'Morning Run and Clear Ambition',
    linesHindi: [
      'सुबह पाँच बजे खाली सड़क पर दौड़ते हुए लगता है पूरा शहर सोया है',
      'और मेरे पास अपने सपनों को आगे बढ़ाने के दो अतिरिक्त घंटे हैं',
    ],
    linesHinglish: [
      'Subah paanch baje khaali sadak par daudte hue lagta hai poora shehar soya hai',
      'Aur mere paas apne sapnon ko aage badhaane ke do atirikt ghante hain',
    ],
    linesEnglish: [
      'Running five a.m. avenues while whole blocks still slumber peacefully',
      'Feels like claiming two bonus golden hours purely for my goals',
    ],
  },
  {
    title: 'हौसले की मजबूत पतवार',
    titleEnglish: 'Steady Oar of Quiet Courage',
    linesHindi: [
      'तूफ़ान का डर सिर्फ़ उन्हीं को सताता है जिन्होंने समंदर दूर से देखा है',
      'लहरों के बीच उतरते ही हर डर अपने आप पतवार में बदल जाता है',
    ],
    linesHinglish: [
      'Toofaan ka dar sirf unhin ko sataata hai jinhonne samandar door se dekha hai',
      'Lehron ke beech utarte hi har dar apne aap patwaar mein badal jaata hai',
    ],
    linesEnglish: [
      'Storm dread haunts only onlookers watching wide waves from safe docks',
      'Once you launch out into open sea, fear turns steadily into skill',
    ],
  },
  {
    title: 'प्यार और लक्ष्य का सुंदर संतुलन',
    titleEnglish: 'Sweet Balance of Love and Goals',
    linesHindi: [
      'मेरा ख़्वाब भी बड़ा है और तुम्हारे साथ चाय पीने की हसरत भी',
      'दोनों को साथ लेकर चलने में ही जीवन का असली रंग निखरता है',
    ],
    linesHinglish: [
      'Mera khwaab bhi bada hai aur tumhaare saath chai peene ki hasrat bhi',
      'Dono ko saath lekar chalne mein hi jeevan ka asli rang nikharta hai',
    ],
    linesEnglish: [
      'Tall ambitions matter deeply, and so do unhurried evening teas beside you',
      'Walking forward carrying both together paints life’s richest colors',
    ],
  },
  {
    title: 'अनजाने सफ़र की मीठी धुन',
    titleEnglish: 'Sweet Tune on Uncharted Road',
    linesHindi: [
      'हर मोड़ पहले से गूगल मैप पर दिख जाए यह ज़रूरी तो नहीं होता',
      'कभी-कभी बिना नक्शे के चलने पर सबसे सुंदर वादियाँ मिलती हैं',
    ],
    linesHinglish: [
      'Har mod pehle se Google Map par dikh jaaye yeh zaroori to nahin hota',
      'Kabhi-kabhi bina nakshe ke chalne par sabse sundar vaadiyaan milti hain',
    ],
    linesEnglish: [
      'Not every turn in life needs turn-by-turn previews beforehand',
      'Stepping off paved routes often reveals the loveliest green valleys',
    ],
  },
  {
    title: 'कल की मुस्कान के लिए आज की तैयारी',
    titleEnglish: 'Preparing Today for Tomorrow Smile',
    linesHindi: [
      'आज का हर शांत अभ्यास कल की शानदार प्रस्तुति की नींव रखता है',
      'जल्दबाज़ी मत करो, पक्का काम हमेशा थोड़ा वक़्त माँगता है',
    ],
    linesHinglish: [
      'Aaj ka har shaant abhyaas kal ki shaandaar prastuti ki neev rakhta hai',
      'Jaldbaazi mat karo, pakka kaam hamesha thoda waqt maangta hai',
    ],
    linesEnglish: [
      'Every quiet rehearsal today anchors tomorrow’s effortless applause',
      'Resist frantic rushing—masterwork always asks for patient craft',
    ],
  },
  {
    title: 'खुद की उम्मीदों पर खरा उतरना',
    titleEnglish: 'Meeting Your Own Quiet Standard',
    linesHindi: [
      'दुनिया की तालियों से पहले ख़ुद के दिल की तसल्ली सबसे बड़ी जीत है',
      'जिस दिन अपना काम देखकर मुस्कान आए, समझो सही रास्ते पर हो',
    ],
    linesHinglish: [
      'Duniya ki taaliyon se pehle khud ke dil ki tasalli sabse badi jeet hai',
      'Jis din apna kaam dekhkar muskaan aaye, samjho sahi raaste par ho',
    ],
    linesEnglish: [
      'Long before public cheers ring out, inner pride marks true triumph',
      'The day your own work earns a quiet satisfied nod, you are on track',
    ],
  },
  {
    title: 'सपनों के आँगन में नई सुबह',
    titleEnglish: 'New Morning in Dream Courtyard',
    linesHindi: [
      'रात के अँधेरे ने कभी किसी सूरज को उगने से रोका नहीं आज तक',
      'तुम्हारी कठिन परिस्थितियाँ भी बस भोर से ठीक पहले की छाया हैं',
    ],
    linesHinglish: [
      'Raat ke andhere ne kabhi kisi sooraj ko ugne se roka nahin aaj tak',
      'Tumhaari kathin paristhitiyaan bhi bas bhor se theek pehle ki chhaaya hain',
    ],
    linesEnglish: [
      'No dark midnight in history has ever held back sunrise by one minute',
      'Tough chapters right now are simply shadows fading right before dawn',
    ],
  },
  {
    title: 'बड़े सपनों की शांत आवाज़',
    titleEnglish: 'Calm Voice of Tall Ambitions',
    linesHindi: [
      'असली जुनून कभी सड़कों पर चिल्लाकर प्रचार नहीं करता अपना',
      'वह हर रोज़ बिना छुट्टी लिए अपनी मेज़ पर आकर बैठ जाता है',
    ],
    linesHinglish: [
      'Asli junoon kabhi sadkon par chillaakar prachaar nahin karta apna',
      'Woh har roz bina chhutti liye apni mez par aakar baith jaata hai',
    ],
    linesEnglish: [
      'True passion never shouts noisy boasts down crowded streets',
      'It simply shows up at the work desk steadily day after unglamorous day',
    ],
  },
  {
    title: 'तितलियों संग खिलते इरादे',
    titleEnglish: 'Resolutions Blooming Like Wings',
    linesHindi: [
      'अपने मन के बगीचे में कभी निराशा की खरपतवार मत उगने देना',
      'हर सुबह उम्मीद के दो नए फूल लगाकर दिन की शुरुआत करो',
    ],
    linesHinglish: [
      'Apne mann ke bageeche mein kabhi niraasha ki kharpatwaar mat ugne dena',
      'Har subah ummeed ke do naye phool lagaakar din ki shuruwaat karo',
    ],
    linesEnglish: [
      'Never let quiet weeds of doubt crowd across your mind’s garden',
      'Begin every morning planting two fresh bright blossoms of hope',
    ],
  },
  {
    title: 'अधूरे ख्वाब से पूर्णता की ओर',
    titleEnglish: 'Moving From Incomplete Toward Whole',
    linesHindi: [
      'जिन चीजों की कमी में बचपन गुज़रा था बड़े सलीके से हमारा',
      'अब वही कमियाँ मेरी सबसे बड़ी ताकत बनकर आगे खड़ी हैं',
    ],
    linesHinglish: [
      'Jin cheezon ki kami mein bachpan guzra tha bade saleeke se hamaara',
      'Ab wahi kamiyaan meri sabse badi taaqat bankar aage khadi hain',
    ],
    linesEnglish: [
      'Modest shortages we once navigated gracefully growing up',
      'Now stand squarely behind every ounce of grit driving me forward',
    ],
  },
  {
    title: 'सूरजमुखी सा उजाला चेहरा',
    titleEnglish: 'Sunflower Turned Toward Light',
    linesHindi: [
      'सूरजमुखी की तरह हमेशा अपनी नज़र रोशनी की तरफ़ रखना सीखो',
      'साये अपने आप पीछे छूटते चले जाएँगे सफ़र के हर मोड़ पर',
    ],
    linesHinglish: [
      'Soorajmukhi ki tarah hamesha apni nazar roshni ki taraf rakhna seekho',
      'Saaye apne aap peechhe chhoot-te chale jaayenge safar ke har mod par',
    ],
    linesEnglish: [
      'Like bright sunflowers, train your eyes firmly toward steady daylight',
      'Heavy shadows naturally fall behind you around every turn ahead',
    ],
  },
  {
    title: 'किस्मत से आगे कदमों की ताक़त',
    titleEnglish: 'Strength of Stride Beyond Luck',
    linesHindi: [
      'लॉटरी या संयोग पर जीवन के बड़े ख़्वाब नहीं टिकते मेरे यार',
      'रोज़ की छोटी-छोटी कोशिशें ही पहाड़ को रास्ता बना देती हैं',
    ],
    linesHinglish: [
      'Lottery ya sanyog par jeevan ke bade khwaab nahin tikte mere yaar',
      'Roz ki chhoti-chhoti koshishein hi pahaad ko raasta bana deti hain',
    ],
    linesEnglish: [
      'Great life visions never balance precariously on lucky coin flips',
      'Consistent tiny efforts carve smooth highways clean through mountains',
    ],
  },
  {
    title: 'बदलते वक़्त में स्थिर लक्ष्य',
    titleEnglish: 'Steady North Star in Shifting Wind',
    linesHindi: [
      'दुनिया की पसंद-नापसंद तो हर सप्ताह ट्रेंड के साथ बदलती रहती है',
      'जो अपने ध्रुव तारे पर नज़र टिकाए रखे, वही किनारे लगता है सही सलामत',
    ],
    linesHinglish: [
      'Duniya ki pasand-naapasand to har saptah trend ke saath badalti rehti hai',
      'Jo apne dhruv taare par nazar tikaaye rakhe, wahi kinaare lagta hai sahi salaamat',
    ],
    linesEnglish: [
      'Passing trends and noisy opinions flip sideways every single week',
      'Keeping eyes fixed upon one clear north star steers every ship home',
    ],
  },
  {
    title: 'सपने और नींद की दोस्ती',
    titleEnglish: 'Gentle Truce Between Sleep and Dreams',
    linesHindi: [
      'थककर छह घंटे चैन से सो लेना भी बड़े सफ़र का हिस्सा होता है',
      'क्योंकि ताज़ा दिमाग ही नई मंज़िलों के सही नक्शे बना पाता है',
    ],
    linesHinglish: [
      'Thakkar chheh ghante chain se so lena bhi bade safar ka hissa hota hai',
      'Kyunki taaza dimaag hi nayi manzilon ke sahi nakshe bana paata hai',
    ],
    linesEnglish: [
      'Granting yourself peaceful rest belongs right inside ambitious plans too',
      'Only a clear refreshed mind sketches clean maps toward tall horizons',
    ],
  },
  {
    title: 'अंजान रास्तों पर पहला निशान',
    titleEnglish: 'First Footprint on Fresh Snow',
    linesHindi: [
      'बनी-बनाई पगडंडियों पर तो सारा ज़माना आराम से चलता रहता है',
      'मज़ा तो तब है जब तुम्हारे कदमों से कोई नया रास्ता बन जाए',
    ],
    linesHinglish: [
      'Bani-banaayi pagdandiyon par to saara zamaana aaraam se chalta rehta hai',
      'Maza to tab hai jab tumhaare kadmon se koi naya raasta ban jaaye',
    ],
    linesEnglish: [
      'Crowds stroll effortlessly down wide trails packed flat by others',
      'Real thrill arrives when your own boots press brand-new paths open',
    ],
  },
  {
    title: 'खामोश शहर में अपनी पहचान',
    titleEnglish: 'Carving Your Name in New Town',
    linesHindi: [
      'जब इस बड़े शहर में आए थे तब कोई नाम जानने वाला भी नहीं था यहाँ',
      'अब काम ऐसा करेंगे कि शहर की हवा ख़ुद हमारा पता बताएगी',
    ],
    linesHinglish: [
      'Jab is bade shehar mein aaye the tab koi naam jaanne waala bhi nahin tha yahaan',
      'Ab kaam aisa karenge ki shehar ki hawa khud hamaara pata bataayegi',
    ],
    linesEnglish: [
      'Stepping off the train here years ago, not one soul knew my name',
      'Steady craft ahead will ensure this city whispers our work with pride',
    ],
  },
  {
    title: 'सपनों के पार भी इंसानियत',
    titleEnglish: 'Humanity Standing Higher Than Fame',
    linesHindi: [
      'चाहे कितनी भी बड़ी गाड़ी और ऊँची मंज़िल मिल जाए आने वाले कल में',
      'किसी के काम आ जाने वाला स्वभाव कभी पीछे मत छोड़ना यार',
    ],
    linesHinglish: [
      'Chaahe kitni bhi badi gaadi aur oonchi manzil mil jaaye aane waale kal mein',
      'Kisi ke kaam aa jaane waala swabhaav kabhi peechhe mat chhodna yaar',
    ],
    linesEnglish: [
      'No matter how sleek the ride or tall the penthouse rises tomorrow',
      'Never leave behind that generous grace ready to lend a kind hand',
    ],
  },
  {
    title: 'हर दिन एक नया चमत्कार',
    titleEnglish: 'Every Day Holds Fresh Wonder',
    linesHindi: [
      'आँखें खोलो तो देखो आज भी कितनी संभावनाएँ तुम्हारा इंतज़ार कर रही हैं',
      'एक छोटा सा सही कदम आज से पूरी कहानी की दिशा बदल सकता है',
    ],
    linesHinglish: [
      'Aankhein kholo to dekho aaj bhi kitni sambhaavnayein tumhaara intezaar kar rahi hain',
      'Ek chhota sa sahi kadam aaj se poori kahaani ki disha badal sakta hai',
    ],
    linesEnglish: [
      'Open your eyes to count how many bright doors wait untouched today',
      'One brave step taken right now can pivot the entire story onward',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'किताबों के बीच बसा संसार',
    titleEnglish: 'Worlds Built Between Open Books',
    linesHindi: [
      'पुरानी मेज़ पर सजी कुछ किताबें इंसान को वो पंख दे जाती हैं',
      'जिनसे वह बिना पासपोर्ट के भी पूरी दुनिया नापकर लौट आता है',
    ],
    linesHinglish: [
      'Puraani mez par saji kuch kitaabein insaan ko woh pankh de jaati hain',
      'Jinse woh bina passport ke bhi poori duniya naapkar laut aata hai',
    ],
    linesEnglish: [
      'A modest stack of thoughtful books along an old wooden desk',
      'Hands you wings sweeping clear across centuries without any passport',
    ],
  },
  {
    title: 'सपनों की कीमत पर मुस्कान',
    titleEnglish: 'Smiling Through Dream Sacrifices',
    linesHindi: [
      'कुछ पार्टियाँ और आराम छोड़ने पड़ते हैं जब लक्ष्य बहुत प्यारा हो',
      'पर जब नतीजा आता है तो हर छोड़ा हुआ पल मीठा लगने लगता है',
    ],
    linesHinglish: [
      'Kuch partiyaan aur aaraam chhodne padte hain jab lakshya bahut pyara ho',
      'Par jab nateeja aata hai to har chhoda hua pal meetha lagne lagta hai',
    ],
    linesEnglish: [
      'Skipping easy weekends feels steep while guarding a treasured goal',
      'Yet the morning results arrive, every quiet trade turns utterly sweet',
    ],
  },
  {
    title: 'चाँद को छूने की मासूम ज़िद',
    titleEnglish: 'Sweet Stubbornness Reaching Moon',
    linesHindi: [
      'दिमाग ने सौ बार समझाया कि राह बहुत लंबी और कठिन दिखती है',
      'पर दिल ने एक ही ज़िद पकड़ी—बनाकर दिखाएँगे जो सोचा है हमने',
    ],
    linesHinglish: [
      'Dimaag ne sau baar samjhaaya ki raah bahut lambi aur kathin dikhti hai',
      'Par dil ne ek hi zid pakdi—banaakar dikhaayenge jo socha hai humne',
    ],
    linesEnglish: [
      'Caution listed a hundred tidy reasons calling the climb far too steep',
      'Heart held steady to one gentle vow—we will build what we imagined',
    ],
  },
  {
    title: 'पहली उड़ान का मीठा रोमांच',
    titleEnglish: 'Sweet Thrill of First Launch',
    linesHindi: [
      'कदम काँपते जरूर हैं जब इंसान पहली बार बड़ा मंच संभालता है',
      'पर पहला वाक्य बोलते ही सारा डर आत्मविश्वास में बदल जाता है',
    ],
    linesHinglish: [
      'Kadam kaanpte zaroor hain jab insaan pehli baar bada manch sambhaalta hai',
      'Par pehla vaakya bolte hi saara dar aatmavishwas mein badal jaata hai',
    ],
    linesEnglish: [
      'Knees certainly tremble stepping onto a wide bright stage the first time',
      'Yet the second your opening line rings clear, fear turns pure power',
    ],
  },
  {
    title: 'छोटी नाव और गहरा समंदर',
    titleEnglish: 'Humble Boat Facing Deep Sea',
    linesHindi: [
      'नाव छोटी होने से कोई भी मुसाफ़िर कभी समंदर से माफी नहीं माँगता',
      'हौसला बड़ा हो तो छोटी कश्ती भी तूफ़ान चीरकर पार उतर जाती है',
    ],
    linesHinglish: [
      'Naav chhoti hone se koi bhi musaafir kabhi samandar se maafi nahin maangta',
      'Hausla bada ho to chhoti kashti bhi toofaan cheerkar paar utar jaati hai',
    ],
    linesEnglish: [
      'No bold sailor apologizes to wide oceans simply for a modest hull',
      'With fierce steady courage even small timber cuts cleanly past whitecaps',
    ],
  },
  {
    title: 'सपनों के शहर में अपनी गली',
    titleEnglish: 'Own Quiet Lane in City of Dreams',
    linesHindi: [
      'बड़े शहर की चकाचौंध में खुद को खो मत देना मेरे प्यारे दोस्त',
      'कामयाबी ऐसी पाना कि तुम्हारे आने से गली में अपनापन बढ़ जाए',
    ],
    linesHinglish: [
      'Bade shehar ki chakaachaundh mein khud ko kho mat dena mere pyare dost',
      'Kaamyaabi aisi paana ki tumhaare aane se gali mein apnapan badh jaaye',
    ],
    linesEnglish: [
      'Never misplace your soul chasing neon dazzle across big avenues',
      'Rise tall in a way that brings extra warmth wherever your footsteps go',
    ],
  },
  {
    title: 'धूप में चमकता पसीने का मोती',
    titleEnglish: 'Pearl of Sweat Under Noon Sun',
    linesHindi: [
      'मखमल के बिस्तर पर सोकर कोई हीरा अपनी चमक नहीं पाता कभी',
      'धूप और मेहनत की तपन ही इंसान को अनमोल मोती बनाती है',
    ],
    linesHinglish: [
      'Makhmal ke bistar par sokar koi heera apni chamak nahin paata kabhi',
      'Dhoop aur mehnat ki tapan hi insaan ko anmol moti banaati hai',
    ],
    linesEnglish: [
      'No diamond ever catches bright fire resting tucked inside velvet',
      'Honest noon heat and patient work polish raw grit into rare pearls',
    ],
  },
  {
    title: 'खामोश इरादों की गूँज',
    titleEnglish: 'Echo of Quiet Decisions',
    linesHindi: [
      'साल भर शोर मचाने वालों के खाते अक्सर दिसंबर में खाली दिखते हैं',
      'चुपचाप रोज़ काम करने वाला बिना बताए सबको चौंका देता है',
    ],
    linesHinglish: [
      'Saal bhar shor machaane waalon ke khaate aksar December mein khaali dikhte hain',
      'Chupchaap roz kaam karne waala bina bataaye sabko chaunka deta hai',
    ],
    linesEnglish: [
      'Folks boasting loud every spring often hold empty ledgers by winter',
      'Quiet steady builders surprise whole crowds without ever firing warnings',
    ],
  },
  {
    title: 'नई सोच का उजला आसमान',
    titleEnglish: 'Bright Sky of Fresh Ideas',
    linesHindi: [
      'पुराने तालों को खोलने के लिए कभी-कभी नई चाबी बनानी पड़ती है खुद',
      'जो सवाल पूछने की हिम्मत रखता है वही नया सवेरा लेकर आता है',
    ],
    linesHinglish: [
      'Puraane taalon ko kholne ke liye kabhi-kabhi nayi chaabi banaani padti hai khud',
      'Jo sawaal poochhne ki himmat rakhta hai wahi naya savera lekar aata hai',
    ],
    linesEnglish: [
      'Stubborn old padlocks sometimes ask you to forge a brand-new key',
      'Whoever stays brave enough to question limits ushers bright mornings in',
    ],
  },
  {
    title: 'दिल की धड़कन में बसी मंज़िल',
    titleEnglish: 'Destination Anchored in Heartbeat',
    linesHindi: [
      'जब ख़्वाब तुम्हारी साँसों और धड़कनों में बस जाए पूरी तरह से',
      'तब हर थकान अपने आप एक मीठे सुकून में बदल जाती है यार',
    ],
    linesHinglish: [
      'Jab khwaab tumhaari saanson aur dhadkanon mein bas jaaye poori tarah se',
      'Tab har thakaan apne aap ek meetha sukoon mein badal jaati hai yaar',
    ],
    linesEnglish: [
      'Once a vision weaves seamlessly into your very breath and pulse',
      'Even heavy exhaustion shifts naturally into deep serene contentment',
    ],
  },
  {
    title: 'बचपन की स्लेट पर बड़े अक्षर',
    titleEnglish: 'Bold Words on Childhood Slate',
    linesHindi: [
      'टूटी हुई चॉक से भी जो बच्चे स्लेट पर साफ अक्षर लिखते हैं रोज़',
      'एक दिन वही दुनिया की सबसे बड़ी किताबों में अपना नाम दर्ज कराते हैं',
    ],
    linesHinglish: [
      'Tooti hui chalk se bhi jo bachche slate par saaf akshar likhte hain roz',
      'Ek din wahi duniya ki sabse badi kitaabon mein apna naam darj karaate hain',
    ],
    linesEnglish: [
      'Children tracing neat clear letters daily with stubby broken chalk',
      'Grow up inscribing proud names across the finest books on earth',
    ],
  },
  {
    title: 'गुलशन में खिलने की तैयारी',
    titleEnglish: 'Getting Ready to Bloom Bright',
    linesHindi: [
      'अगर अभी कोई तुम्हारी मेहनत पर ध्यान नहीं दे रहा है तो घबराना मत',
      'कली जब भीतर तैयार होती है तो बाहर किसी को ख़बर नहीं होती',
    ],
    linesHinglish: [
      'Agar abhi koi tumhaari mehnat par dhyaan nahin de raha hai to ghabraana mat',
      'Kali jab bheetar taiyaar hoti hai to baahar kisi ko khabar nahin hoti',
    ],
    linesEnglish: [
      'Do not fret if zero spotlights track your quiet daily progress today',
      'Nobody hears tight green buds preparing bursts of color from within',
    ],
  },
  {
    title: 'सपने और सफर का अनमोल मेल',
    titleEnglish: 'Priceless Bond of Dreams and Travel',
    linesHindi: [
      'सिर्फ़ एक ही शहर में बैठकर पूरी दुनिया का अंदाज़ा नहीं लग पाता',
      'नए रास्तों पर निकलो तो खुद के भीतर नए ख़्वाब जन्म लेते हैं',
    ],
    linesHinglish: [
      'Sirf ek hi shehar mein baithkar poori duniya ka andaaza nahin lag paata',
      'Naye raaston par niklo to khud ke bheetar naye khwaab janm lete hain',
    ],
    linesEnglish: [
      'Sitting fixed in one postal code rarely shows how vast horizons stretch',
      'Stepping out onto unfamiliar roads births bright brand-new dreams inside',
    ],
  },
  {
    title: 'हल्की मुस्कान और भारी इरादा',
    titleEnglish: 'Light Smile, Unshakable Resolve',
    linesHindi: [
      'चेहरे पर हल्की सी मुस्कान रखो और भीतर चट्टान जैसा इरादा हमेशा',
      'दुनिया की कोई भी मुश्किल इस जोड़ी के आगे ज़्यादा देर टिक नहीं पाती',
    ],
    linesHinglish: [
      'Chehre par halki si muskaan rakho aur bheetar chattaan jaisa iraada hamesha',
      'Duniya ki koi bhi mushkil is jodi ke aage zyada der tik nahin paati',
    ],
    linesEnglish: [
      'Wear an easy gentle smile outside and stone-solid grit underneath',
      'No thorny obstacle on earth holds ground long before that combination',
    ],
  },
  {
    title: 'पत्थर पर उगता नन्हा पौधा',
    titleEnglish: 'Tiny Sprout Breaking Through Rock',
    linesHindi: [
      'पहाड़ की दरार से भी नन्हा पौधा अपना रास्ता निकाल ही लेता है ऊपर',
      'इंसान की हिम्मत के सामने भला कौन सी दीवार टिक सकती है ज़्यादा',
    ],
    linesHinglish: [
      'Pahaad ki daraar se bhi nanha paudha apna raasta nikaal hi leta hai oopar',
      'Insaan ki himmat ke saamne bhala kaun si deewaar tik sakti hai zyada',
    ],
    linesEnglish: [
      'Even a tiny green sprout splits rock crevices reaching toward noon sun',
      'What lifeless wall could ever withstand genuine human determination',
    ],
  },
  {
    title: 'सपनों के नाम एक और सुबह',
    titleEnglish: 'One More Morning Dedicated to Dreams',
    linesHindi: [
      'अलार्म बंद करके फिर सो जाने में दो मिनट का सुकून ज़रूर मिलता है',
      'पर उठकर काम शुरू कर देने से पूरी ज़िंदगी मुस्कुराने लगती है',
    ],
    linesHinglish: [
      'Alarm band karke phir so jaane mein do minute ka sukoon zaroor milta hai',
      'Par uthkar kaam shuru kar dene se poori zindagi muskuraane lagti hai',
    ],
    linesEnglish: [
      'Tapping snooze buys five fleeting minutes beneath warm heavy sheets',
      'Rising straight to your work desk makes entire decades smile brightly',
    ],
  },
  {
    title: 'अधूरे काम को पूरा करने का जोश',
    titleEnglish: 'Fire Finishing What Stayed Half-Done',
    linesHindi: [
      'आधी रात को कोई काम अधूरा छोड़कर करवट बदलने में चैन नहीं आता',
      'जब लक्ष्य सिर पर सवार हो तो पूरा करके ही नींद मीठी लगती है',
    ],
    linesHinglish: [
      'Aadhi raat ko koi kaam adhoora chhodkar karwat badalne mein chain nahin aata',
      'Jab lakshya sir par sawaar ho to poora karke hi neend meethi lagti hai',
    ],
    linesEnglish: [
      'Tossing restlessly over half-finished blueprints brings zero true rest',
      'Finishing that final clean stroke makes sleep taste wonderfully sweet',
    ],
  },
  {
    title: 'तितली बनने से पहले की तपस्या',
    titleEnglish: 'Quiet Cocoon Before Bright Wings',
    linesHindi: [
      'हर रंगीन तितली को भी उड़ने से पहले बंद खोल में सब्र करना पड़ता है',
      'आज का शांत दौर तुम्हारे पंखों में मज़बूती भर रहा है चुपचाप',
    ],
    linesHinglish: [
      'Har rangeen titli ko bhi udne se pehle band khol mein sabr karna padta hai',
      'Aaj ka shaant daur tumhaare pankhon mein mazbooti bhar raha hai chupchaap',
    ],
    linesEnglish: [
      'Every painted butterfly first waits patiently inside a tight quiet shell',
      'This slow hidden season is quietly strengthening colors on your wings',
    ],
  },
  {
    title: 'खुद का सबसे अच्छा संस्करण',
    titleEnglish: 'Becoming Your Finest Self',
    linesHindi: [
      'मेरी दौड़ किसी पड़ोसी या साथी को हराने के लिए नहीं रही कभी भी',
      'मेरा ख़्वाब बस कल के ख़ुद से एक कदम आगे निकलने का रहा है',
    ],
    linesHinglish: [
      'Meri daud kisi padosi ya saathi ko haraane ke liye nahin rahi kabhi bhi',
      'Mera khwaab bas kal ke khud se ek kadam aage nikalne ka raha hai',
    ],
    linesEnglish: [
      'My sprint was never aimed at outrunning neighbors or old rivals',
      'My sole ambition is stepping one steady stride past yesterday’s me',
    ],
  },
  {
    title: 'ख़्वाबों से सजा शांत घरौंदा',
    titleEnglish: 'Peaceful Home Built From Dreams',
    linesHindi: [
      'एक छोटा सा आँगन, चाय की महक और अपनों की निश्चिंत हँसी चारों ओर',
      'मेरी सारी बड़ी महत्वाकांक्षाएँ इसी एक तस्वीर पर आकर पूरी होती हैं',
    ],
    linesHinglish: [
      'Ek chhota sa aangan, chai ki mehak aur apnon ki nishchint hansi chaaron or',
      'Meri saari badi mahatwaakankshayein isi ek tasveer par aakar poori hoti hain',
    ],
    linesEnglish: [
      'A sunlit small porch, spiced tea drifting warm, and loved ones laughing',
      'Every tall ambition I chase points gently toward this exact peaceful scene',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'सपनों के मोड़ पर धीरज',
    titleEnglish: 'Patience Around Dream Corners',
    linesHindi: [
      'कभी-कभी गाड़ी मोड़ पर धीमी करनी पड़ती है ताकि संतुलन बना रहे',
      'रफ़्तार कम होना हार नहीं, बल्कि लंबी यात्रा की समझदारी होती है',
    ],
    linesHinglish: [
      'Kabhi-kabhi gaadi mod par dheemi karni padti hai taaki santulan bana rahe',
      'Raftaar kam hona haar nahin, balki lambi yaatra ki samajhdaari hoti hai',
    ],
    linesEnglish: [
      'Easing off the gas around sharp bends keeps your balance intact',
      'Slowing briefly never spells defeat—it protects the whole long voyage',
    ],
  },
  {
    title: 'अंधेरे में राह दिखाती चिंगारी',
    titleEnglish: 'Spark Guiding Through Dark Miles',
    linesHindi: [
      'पूरी सड़क का नक्शा दिखने का इंतज़ार करने वाले घर पर बैठे रहते हैं',
      'हाथ में छोटी टॉर्च लेकर निकल पड़ो, आगे के कदम खुद रोशन होंगे',
    ],
    linesHinglish: [
      'Poori sadak ka naksha dikhne ka intezaar karne waale ghar par baithe rehte hain',
      'Haath mein chhoti torch lekar nikal pado, aage ke kadam khud roshan honge',
    ],
    linesEnglish: [
      'Folks insisting on seeing every mile lit ahead stay stuck indoors',
      'Step out holding one small flashlight—each yard illuminates as you walk',
    ],
  },
  {
    title: 'सपनों की किताब में स्वर्णिम अक्षर',
    titleEnglish: 'Golden Ink in Book of Dreams',
    linesHindi: [
      'बड़े लोग किसी दूसरे ग्रह से नहीं उतरते हैं काम करने के लिए',
      'वे बस साधारण काम को असाधारण लगन के साथ पूरा करते चले जाते हैं',
    ],
    linesHinglish: [
      'Bade log kisi doosre grah se nahin utarte hain kaam karne ke liye',
      'We bas saadhaaran kaam ko asaadhaaran lagan ke saath poora karte chale jaate hain',
    ],
    linesEnglish: [
      'Trailblazers do not land here from distant galaxies above',
      'They simply finish everyday tasks with uncommon care and steady joy',
    ],
  },
  {
    title: 'नए सफ़र की सोंधी खुशबू',
    titleEnglish: 'Earthy Scent of New Chapter',
    linesHindi: [
      'पहली बारिश के बाद जैसे मिट्टी में नई जान आ जाती है हर कोने में',
      'वैसे ही एक सही फैसला पूरी ज़िंदगी को ताज़ा रंगों से भर देता है',
    ],
    linesHinglish: [
      'Pehli baarish ke baad jaise mitti mein nayi jaan aa jaati hai har kone mein',
      'Waise hi ek sahi faisla poori zindagi ko taaza rangon se bhar deta hai',
    ],
    linesEnglish: [
      'Just as first monsoon rain awakens dry fields bursting back alive',
      'One brave clean decision fills stale routines with fresh color fast',
    ],
  },
  {
    title: 'आसमान के नीचे खुला मंच',
    titleEnglish: 'Wide Stage Beneath Open Sky',
    linesHindi: [
      'अगर किसी कमरे का दरवाज़ा तुम्हारी काबिलियत के लिए छोटा पड़ जाए',
      'तो समझो वक़्त तुम्हें खुली छत के नीचे बड़ा मंच देने वाला है',
    ],
    linesHinglish: [
      'Agar kisi kamre ka darwaaza tumhaari kaabiliyat ke liye chhota pad jaaye',
      'To samjho waqt tumhein khuli chhat ke neeche bada manch dene waala hai',
    ],
    linesEnglish: [
      'If one narrow doorway suddenly feels too tight for your growing stride',
      'Know life is clearing space for a far wider stage under open skies',
    ],
  },
  {
    title: 'खुशियों से भरा हर पड़ाव',
    titleEnglish: 'Joyful Milestones Along Climb',
    linesHindi: [
      'सिर्फ़ मंज़िल पर झंडा गाड़ने को ही जीत मत मान लेना मेरे दोस्त',
      'हर ईमानदार कोशिश के बाद शांत नींद आना भी बड़ी कामयाबी है',
    ],
    linesHinglish: [
      'Sirf manzil par jhanda gaadne ko hi jeet mat maan lena mere dost',
      'Har imaandaar koshish ke baad shaant neend aana bhi badi kaamyaabi hai',
    ],
    linesEnglish: [
      'Planting banners at mountaintops is not the sole prize worth cheering',
      'Falling asleep peaceful after honest daily work is pure success too',
    ],
  },
  {
    title: 'सपनों के पंख और ज़मीन की जड़ें',
    titleEnglish: 'Dream Wings With Grounded Roots',
    linesHindi: [
      'हवा में उड़ने वाले गुब्बारे अक्सर थोड़ी देर बाद कहीं खो जाते हैं',
      'पर जड़ों से जुड़ा पेड़ ही आसमान तक ऊँचा खड़ा रह पाता है हमेशा',
    ],
    linesHinglish: [
      'Hawa mein udne waale gubbaare aksar thodi der baad kahin kho jaate hain',
      'Par jadon se juda ped hi aasmaan tak ooncha khada reh paata hai hamesha',
    ],
    linesEnglish: [
      'Untethered balloons shoot upward fast before vanishing completely sightless',
      'Only deeply rooted oaks stand tall enough to brush passing clouds forever',
    ],
  },
  {
    title: 'सुबह छह बजे का पहला संकल्प',
    titleEnglish: 'Six A.M. Quiet Commitment',
    linesHindi: [
      'सुबह की पहली रोशनी से पहले जो अपने आलस्य को जीत लेता है आज',
      'पूरा दिन उसकी जेब में चाबी की तरह आसान बनकर रहता है हमेशा',
    ],
    linesHinglish: [
      'Subah ki pehli roshni se pehle jo apne aalasya ko jeet leta hai aaj',
      'Poora din uski jeb mein chaabi ki tarah aasaan bankar rehta hai hamesha',
    ],
    linesEnglish: [
      'Whoever conquers heavy eyelids before early sunlight hits the curtains',
      'Carries the rest of the whole day smoothly like keys in pocket',
    ],
  },
  {
    title: 'अधूरे ख्वाब की मीठी लौ',
    titleEnglish: 'Gentle Flame of Unfinished Dream',
    linesHindi: [
      'तेज़ हवा चलने पर अगर दीपक बुझ भी जाए दो पल के लिए कभी',
      'तो बाती सँवारकर फिर से जलाने की हिम्मत रखना ही असली जीत है',
    ],
    linesHinglish: [
      'Tez hawa chalne par agar deepak bujh bhi jaaye do pal ke liye kabhi',
      'To baati sanwaarkar phir se jalaane ki himmat rakhna hi asli jeet hai',
    ],
    linesEnglish: [
      'Even if sudden crosswinds blow your clay lamp out for two dark minutes',
      'Trimming the wick gently and striking another match marks real victory',
    ],
  },
  {
    title: 'पुराने अनुभव की सुनहरी सीढ़ी',
    titleEnglish: 'Golden Ladder of Past Lessons',
    linesHindi: [
      'बीती हुई गलतियों को बोझ की तरह कंधे पर मत ढोते रहना कभी',
      'उन्हें पैरों के नीचे रखकर एक सीढ़ी और ऊपर चढ़ने का काम लो',
    ],
    linesHinglish: [
      'Beeti hui galtiyon ko bojh ki tarah kandhe par mat dhote rehna kabhi',
      'Unhein pairon ke neeche rakhkar ek seedhi aur oopar chadhne ka kaam lo',
    ],
    linesEnglish: [
      'Stop hauling yesterday’s slip-ups across your shoulders like heavy stones',
      'Stack them neatly beneath your boots as extra steps climbing higher',
    ],
  },
  {
    title: 'मन के आकाश में इंद्रधनुष',
    titleEnglish: 'Rainbow Across Inner Horizon',
    linesHindi: [
      'धूप और बारिश जब एक साथ मिलती हैं तो इंद्रधनुष बनता है ऊपर',
      'मुश्किल और उम्मीद के संगम से ही ज़िंदगी में सातों रंग खिलते हैं',
    ],
    linesHinglish: [
      'Dhoop aur baarish jab ek saath milti hain to indradhanush banta hai oopar',
      'Mushkil aur ummeed ke sangam se hi zindagi mein saaton rang khilte hain',
    ],
    linesEnglish: [
      'Only where bright sunlight crosses fresh falling rain do rainbows arch',
      'Where tough seasons meet steady hope, life blooms in all seven hues',
    ],
  },
  {
    title: 'चाहत से बड़ा लगन का जादू',
    titleEnglish: 'Magic of Consistency Over Wishes',
    linesHindi: [
      'सिर्फ़ मन्नत के धागे बाँधने से मंज़िल घर चलकर नहीं आ जाती है',
      'पर लगन से किए काम पर किस्मत ख़ुद आकर मोहर लगा देती है',
    ],
    linesHinglish: [
      'Sirf mannat ke dhaage baandhne se manzil ghar chalkar nahin aa jaati hai',
      'Par lagan se kiye kaam par kismat khud aakar mohar laga deti hai',
    ],
    linesEnglish: [
      'Wishing threads tied softly never carry summits straight to your couch',
      'Yet relentless honest effort invites destiny itself to sign off proudly',
    ],
  },
  {
    title: 'मज़बूत इरादों का साफ़ आईना',
    titleEnglish: 'Clear Mirror of Steady Intent',
    linesHindi: [
      'जब इरादा बिल्कुल नेक और मेहनत पूरी साफ़ हो आपकी ओर से',
      'तो रास्ता भटकने का डर मन से हमेशा के लिए गायब हो जाता है',
    ],
    linesHinglish: [
      'Jab iraada bilkul nek aur mehnat poori saaf ho aapki or se',
      'To raasta bhatakne ka dar mann se hamesha ke liye gaayab ho jaata hai',
    ],
    linesEnglish: [
      'When your intentions stay clean and daily work stays completely honest',
      'Every anxious fear of losing direction dissolves quietly on its own',
    ],
  },
  {
    title: 'छोटी चिंगारी, बड़ा सवेरा',
    titleEnglish: 'Humble Spark Before Grand Dawn',
    linesHindi: [
      'किसी भी बड़े पेड़ की शुरुआत में पत्तियाँ या फल नहीं दिखते कभी',
      'बस एक नन्हा अंकुर चुपचाप मिट्टी से बाहर सिर उठाता है पहले',
    ],
    linesHinglish: [
      'Kisi bhi bade ped ki shuruwaat mein pattiyaan ya phal nahin dikhte kabhi',
      'Bas ek nanha ankur chupchaap mitti se baahar sir uthaata hai pehle',
    ],
    linesEnglish: [
      'No mighty banyan displays broad shade or sweet fruit on day one',
      'First a tiny tender shoot simply lifts its head gently above soil',
    ],
  },
  {
    title: 'खुद पर नाज़ करने वाला दिन',
    titleEnglish: 'Day You Feel Proud of Yourself',
    linesHindi: [
      'मेहनत करते वक़्त भले ही हर दिन एक जैसा साधारण लगता रहे अभी',
      'पर एक शाम ऐसी ज़रूर आएगी जब अपने सफ़र पर नाज़ होगा तुम्हें',
    ],
    linesHinglish: [
      'Mehnat karte waqt bhale hi har din ek jaisa saadhaaran lagta rahe abhi',
      'Par ek shaam aisi zaroor aayegi jab apne safar par naaz hoga tumhein',
    ],
    linesEnglish: [
      'During long grinding months, single days may blur looking ordinary',
      'Yet one golden evening arrives where glancing back fills you with pride',
    ],
  },
  {
    title: 'तालों के बाहर खड़ी चाबी',
    titleEnglish: 'Key Waiting Right Outside Every Lock',
    linesHindi: [
      'दुनिया में आज तक ऐसा कोई भी ताला नहीं बना जिसकी चाबी न हो',
      'बस हर मुश्किल सवाल का हल थोड़ा और शांत दिमाग से ढूँढना पड़ता है',
    ],
    linesHinglish: [
      'Duniya mein aaj tak aisa koi bhi taala nahin bana jiski chaabi na ho',
      'Bas har mushkil sawaal ka hal thoda aur shaant dimaag se dhoondhna padta hai',
    ],
    linesEnglish: [
      'Not one padlock on earth was ever forged without a matching key',
      'Tough riddles simply ask for two calmer minutes searching with clear eyes',
    ],
  },
  {
    title: 'सपनों के बीच अपनी मुस्कान',
    titleEnglish: 'Keeping Your Smile Alive En Route',
    linesHindi: [
      'कामयाब होने की जल्दबाज़ी में अपने आज को बेरंग मत बना देना यार',
      'दोस्तों संग दो घड़ी हँसना भी उतनी ही ज़रूरी खुराक है जीवन की',
    ],
    linesHinglish: [
      'Kaamyaab hone ki jaldbaazi mein apne aaj ko berang mat bana dena yaar',
      'Doston sang do ghadi hansna bhi utni hi zaroori khuraak hai jeevan ki',
    ],
    linesEnglish: [
      'Never drain all color out of today racing frantically toward tomorrow',
      'Sharing hearty laughs with dear friends fuels the climb just as much',
    ],
  },
  {
    title: 'आसमान के पार नया घर',
    titleEnglish: 'Fresh Horizon Past High Clouds',
    linesHindi: [
      'मेरी हर उड़ान के पीछे बस एक छोटा सा सच छिपा हुआ है दोस्त',
      'मुझे अपनों को आसमान की सबसे खूबसूरत सुबह दिखानी है एक दिन',
    ],
    linesHinglish: [
      'Meri har udaan ke peechhe bas ek chhota sa sach chhipa hua hai dost',
      'Mujhe apnon ko aasmaan ki sabse khoobsurat subah dikhaani hai ek din',
    ],
    linesEnglish: [
      'Behind every brave leap I take hides one simple heartfelt truth',
      'I long to gift my loved ones the brightest sunrise under wide skies',
    ],
  },
  {
    title: 'मिट्टी की महक और चाँद का ख़्वाब',
    titleEnglish: 'Earth Scent and Moonlit Vision',
    linesHindi: [
      'पाँव ज़मीन की सोंधी मिट्टी पर मजबूती से टिके रहें हमेशा मेरे',
      'और निगाहें हर शाम आसमान के सबसे ऊँचे सितारे पर जमी रहें',
    ],
    linesHinglish: [
      'Paanv zameen ki sondhi mitti par mazbooti se tike rahein hamesha mere',
      'Aur nigaahein har shaam aasmaan ke sabse oonche sitaare par jami rahein',
    ],
    linesEnglish: [
      'Keep my boots planted firmly upon warm honest earth below always',
      'While my eyes stay lifted smiling toward the highest star overhead',
    ],
  },
  {
    title: 'अंत में सच होने वाला विश्वास',
    titleEnglish: 'Faith Turning Real at Finish',
    linesHindi: [
      'जब सब कुछ असंभव लगे तब भी अपने अंदर एक छोटी हां बचाए रखना',
      'यही छोटी सी हाँ एक दिन सारे असंभव को संभव बनाकर दिखाती है',
    ],
    linesHinglish: [
      'Jab sab kuch asambhav lage tab bhi apne andar ek chhoti haan bachaaye rakhna',
      'Yahi chhoti si haan ek din saare asambhav ko sambhav banaakar dikhaati hai',
    ],
    linesEnglish: [
      'Even when odds whisper impossible, shelter one quiet yes inside',
      'That steady little yes eventually turns impossible blueprints real',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'नई मंज़िल की पहली दस्तक',
    titleEnglish: 'First Knock on New Horizon',
    linesHindi: [
      'जब अवसर पहली बार दरवाज़े पर दस्तक दे तो झिझक कर मत छुप जाना',
      'कम तैयार सही, पर मुस्कुराकर दरवाज़ा खोलने वाले ही आगे बढ़ते हैं',
    ],
    linesHinglish: [
      'Jab avsar pehli baar darwaze par dastak de to jhijhak kar mat chhup jaana',
      'Kam taiyaar sahi, par muskuraakar darwaaza kholne waale hi aage badhte hain',
    ],
    linesEnglish: [
      'When opportunity taps gently on your door, never hide feeling unready',
      'People who open the latch smiling bravely learn swiftly on the move',
    ],
  },
  {
    title: 'खामोश रातों का उजला इनाम',
    titleEnglish: 'Bright Reward of Quiet Nights',
    linesHindi: [
      'दुनिया सिर्फ़ मंच की रोशनी और मेडल देखती है बाहर से खड़े होकर',
      'पर असली इनाम वे शांत रातें होती हैं जहाँ तुमने खुद को गढ़ा था',
    ],
    linesHinglish: [
      'Duniya sirf manch ki roshni aur medal dekhti hai baahar se khade hokar',
      'Par asli inaam we shaant raatein hoti hain jahaan tumne khud ko gadha tha',
    ],
    linesEnglish: [
      'Spectators notice only gleaming stage spotlights and golden trophies',
      'Your truest prize remains those quiet nights where you shaped your grit',
    ],
  },
  {
    title: 'पहाड़ की चोटी पर शांत चाय',
    titleEnglish: 'Peaceful Tea at Mountain Peak',
    linesHindi: [
      'सीधी सड़क पर चलने का अनुभव कभी भी यादगार कहानी नहीं बनाता',
      'टेढ़े-मेढ़े पहाड़ी मोड़ पार करके पी गई चाय का स्वाद अलग ही होता है',
    ],
    linesHinglish: [
      'Seedhi sadak par chalne ka anubhav kabhi bhi yaadgaar kahaani nahin banaata',
      'Tedhe-medhe pahaadi mod paar karke pi gayi chai ka swaad alag hi hota hai',
    ],
    linesEnglish: [
      'Coasting flat straight interstates rarely leaves vivid tales worth telling',
      'Sipping hot mountain tea after winding steep switchbacks tastes sweeter',
    ],
  },
  {
    title: 'सपनों के बीच अपना बचपन',
    titleEnglish: 'Keeping Childlike Spark in Dreams',
    linesHindi: [
      'बड़े लक्ष्य हासिल करने में कहीं भीतर का सरल बच्चा खो न जाए',
      'कभी-कभी बिना वजह तितलियों के पीछे हँस लेना भी ज़रूरी होता है',
    ],
    linesHinglish: [
      'Bade lakshya haasil karne mein kahin bheetar ka saral bachcha kho na jaaye',
      'Kabhi-kabhi bina wajah titliyon ke peechhe hans lena bhi zaroori hota hai',
    ],
    linesEnglish: [
      'Never let chasing adult milestones hush the playful child within',
      'Smiling freely at butterflies passing overhead keeps the heart young',
    ],
  },
  {
    title: 'नए रंग भरती सुबह की किरण',
    titleEnglish: 'Dawn Ray Painting Fresh Hues',
    linesHindi: [
      'जैसे सूरज की एक किरण पूरे कमरे के कोने रोशन कर देती है तुरंत',
      'वैसे ही एक सकारात्मक सोच पूरा जीवन नया कर देती है पल भर में',
    ],
    linesHinglish: [
      'Jaise sooraj ki ek kiran poore kamre ke kone roshan kar deti hai turant',
      'Waise hi ek sakaaraatmak soch poora jeevan naya kar deti hai pal bhar mein',
    ],
    linesEnglish: [
      'Just as one clear sunbeam brightens every sleepy corner instantly',
      'One steady hopeful mindset refreshes an entire lifetime overnight',
    ],
  },
  {
    title: 'अधूरे नक्शों से बनती इमारत',
    titleEnglish: 'Towers Built From Draft Sketches',
    linesHindi: [
      'किसी भी शानदार इमारत की पहली तस्वीर हमेशा एक साधारण रफ़ पेपर थी',
      'आज तुम्हारा विचार छोटा लगे तो भी उसे कम मत आँकना कभी दोस्त',
    ],
    linesHinglish: [
      'Kisi bhi shaandaar imaarat ki pehli tasveer hamesha ek saadhaaran rough paper thi',
      'Aaj tumhaara vichaar chhota lage to bhi use kam mat aankna kabhi dost',
    ],
    linesEnglish: [
      'Every towering bridge or skyline began scratched hastily on scrap paper',
      'Never underestimate a young rough sketch simply because it looks humble',
    ],
  },
  {
    title: 'कठिन दौर का सुनहरा उपहार',
    titleEnglish: 'Golden Gift Hidden in Struggle',
    linesHindi: [
      'सरल दिनों ने आज तक किसी को मज़बूत नाविक नहीं बनाया समंदर में',
      'तेज़ लहरों से जूझकर ही हाथों में पतवार संभालने का जादू आता है',
    ],
    linesHinglish: [
      'Saral dinon ne aaj tak kisi ko mazboot naavik nahin banaaya samandar mein',
      'Tez lehron se joojhkar hi haathon mein patwaar sambhaalne ka jaadoo aata hai',
    ],
    linesEnglish: [
      'Glass-flat harbor water never once trained a seasoned captain',
      'Stepping bravely through rolling swells puts steady mastery in your hands',
    ],
  },
  {
    title: 'सपनों के साथ ईमानदारी की छत',
    titleEnglish: 'Roof of Honesty Over Big Dreams',
    linesHindi: [
      'मेहनत की कमाई से बना छोटा सा मकान भी महल से कम नहीं होता',
      'क्योंकि वहाँ रात को सिर रखते ही एक सेकंड में सुकून की नींद आती है',
    ],
    linesHinglish: [
      'Mehnat ki kamaai se bana chhota sa makaan bhi mahal se kam nahin hota',
      'Kyunki wahaan raat ko sir rakhte hi ek second mein sukoon ki neend aati hai',
    ],
    linesEnglish: [
      'Even a modest cottage built from clean work outshines gilded halls',
      'Because the instant heads hit pillows there, pure peaceful sleep follows',
    ],
  },
  {
    title: 'तालों के पार उम्मीद की रोशनी',
    titleEnglish: 'Light Glowing Past Closed Gates',
    linesHindi: [
      'जब एक दरवाज़ा बंद दिखता है सामने तो मन छोटा मत करना कभी',
      'अक्सर वही संकेत होता है कि अब तुम्हें बड़ा रास्ता चुनना चाहिए',
    ],
    linesHinglish: [
      'Jab ek darwaaza band dikhta hai saamne to mann chhota mat karna kabhi',
      'Aksar wahi sanket hota hai ki ab tumhein bada raasta chunna chahiye',
    ],
    linesEnglish: [
      'Never droop your shoulders when one expected gate clicks tightly shut',
      'Usually that quiet click means an even wider trail awaits nearby',
    ],
  },
  {
    title: 'प्यार और हौसले की जुगलबंदी',
    titleEnglish: 'Duet of Warm Love and Courage',
    linesHindi: [
      'जिसके पास सपनों के पीछे भागते वक़्त अपनों का प्यार साथ रहता है',
      'वह इंसान आधी दुनिया तो शुरुआत में ही जीत चुका होता है यार',
    ],
    linesHinglish: [
      'Jiske paas sapnon ke peechhe bhaagte waqt apnon ka pyar saath rehta hai',
      'Woh insaan aadhi duniya to shuruwaat mein hi jeet chuka hota hai yaar',
    ],
    linesEnglish: [
      'Whoever chases lofty visions wrapped in loyal family warmth',
      'Has already won half the world before crossing the starting line',
    ],
  },
  {
    title: 'चाँद की रोशनी में लिखी कविता',
    titleEnglish: 'Verse Penned Under Moonbeams',
    linesHindi: [
      'सपने हमेशा कविताओं जैसे होते हैं जिन्हें धीरे-धीरे सँवारना पड़ता है',
      'हर कठिन दिन एक नई पंक्ति जोड़कर इसे और सुंदर बना देता है',
    ],
    linesHinglish: [
      'Sapne hamesha kavitaon jaise hote hain jinhein dheere-dheere sanwaarna padta hai',
      'Har kathin din ek nayi pankti jodkar ise aur sundar bana deta hai',
    ],
    linesEnglish: [
      'Dreams resemble quiet poems polished line by careful line over years',
      'Even tough days add vivid rhymes making the finished stanza shine',
    ],
  },
  {
    title: 'मेहनत से बदला घर का मौसम',
    titleEnglish: 'Hard Work Changing Home Weather',
    linesHindi: [
      'कभी पापा की आँखों में जो चिंता की लकीरें दिखती थीं शाम को',
      'अब मेरी मेहनत से वहाँ निश्चिंत मुस्कान खिली देखकर दिल भर आता है',
    ],
    linesHinglish: [
      'Kabhi papa ki aankhon mein jo chinta ki lakeerein dikhti thin shaam ko',
      'Ab meri mehnat se wahaan nishchint muskaan khili dekhkar dil bhar aata hai',
    ],
    linesEnglish: [
      'Where tired lines of worry once creased Dad’s forehead each dusk',
      'Watching carefree smiles bloom there from my work warms my whole soul',
    ],
  },
  {
    title: 'नीले समंदर सा बड़ा दिल',
    titleEnglish: 'Heart Vast as Open Ocean',
    linesHindi: [
      'कामयाबी मिले तो कभी भी अपनी ज़ुबान पर गुरूर मत आने देना',
      'बड़ा इंसान हमेशा दूसरों की मदद करने के लिए झुककर हाथ बढ़ाता है',
    ],
    linesHinglish: [
      'Kaamyaabi mile to kabhi bhi apni zubaan par guroor mat aane dena',
      'Bada insaan hamesha doosron ki madad karne ke liye jhukkar haath badhaata hai',
    ],
    linesEnglish: [
      'When success arrives at last, never let arrogance taint your tone',
      'True greatness bends gracefully downward lifting newcomers up beside it',
    ],
  },
  {
    title: 'मंज़िल तक ले जाती सादगी',
    titleEnglish: 'Simplicity Guiding Toward Summit',
    linesHindi: [
      'दिखावे की भीड़ में अक्सर असली काम करने वाले पीछे दिखते हैं शुरू में',
      'पर अंत में समय हमेशा सादगी और सच्ची मेहनत का ही ताज सजाता है',
    ],
    linesHinglish: [
      'Dikhaawe ki bheed mein aksar asli kaam karne waale peechhe dikhte hain shuru mein',
      'Par ant mein samay hamesha saadgi aur sachhi mehnat ka hi taaj sajaata hai',
    ],
    linesEnglish: [
      'Amidst flashy crowds, genuine craftsmen often look quiet at launch',
      'Yet time inevitably crowns sincere simplicity and honest grit at dusk',
    ],
  },
  {
    title: 'दिल की गहराई से जगा जोश',
    titleEnglish: 'Fire Rising Cleanly From Within',
    linesHindi: [
      'बाहरी भाषणों की आग तो दो घंटे बाद अपने आप ठंडी हो जाती है',
      'असली ऊर्जा वह है जो तुम्हारे अपने ख़्वाब से रोज़ सुबह जागती है',
    ],
    linesHinglish: [
      'Baahari bhaashanon ki aag to do ghante baad apne aap thandi ho jaati hai',
      'Asli oorja woh hai jo tumhaare apne khwaab se roz subah jaagti hai',
    ],
    linesEnglish: [
      'Hype from loud pep talks cools off cleanly two hours after lunch',
      'Real lasting fuel wakes naturally every dawn inside your own dream',
    ],
  },
  {
    title: 'नई सुबह की ताज़ा किताब',
    titleEnglish: 'Fresh Volume Opening at Dawn',
    linesHindi: [
      'बीते हुए कल की गलतियों को सिर्फ़ सीख मानकर किनारे रख दो आज',
      'सामने पड़ा पूरा नया साल तुम्हारी सबसे सुंदर लिखावट का इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Beete hue kal ki galtiyon ko sirf seekh maankar kinaare rakh do aaj',
      'Saamne pada poora naya saal tumhaari sabse sundar likhaawat ka intezaar kar raha hai',
    ],
    linesEnglish: [
      'Set yesterday’s stumbles gently aside purely as crisp lessons earned',
      'Bright blank months ahead wait patiently for your finest handwriting',
    ],
  },
  {
    title: 'हौसलों की अनगिनत उड़ानें',
    titleEnglish: 'Countless Flights of Courage',
    linesHindi: [
      'एक ख़्वाब पूरा हो जाए तो रुककर हमेशा के लिए आराम मत कर लेना',
      'नए लक्ष्य बनाते रहना ही जीवन को हर उम्र में जवान बनाए रखता है',
    ],
    linesHinglish: [
      'Ek khwaab poora ho jaaye to rukkar hamesha ke liye aaraam mat kar lena',
      'Naye lakshya banaate rehna hi jeevan ko har umr mein jawaan banaaye rakhta hai',
    ],
    linesEnglish: [
      'Reaching one dream is never a cue to fold your wings forever',
      'Sketching fresh new horizons keeps the spirit vibrant at every age',
    ],
  },
  {
    title: 'अपनों संग घर लौटने का सुकून',
    titleEnglish: 'Peaceful Harbor After Long Climb',
    linesHindi: [
      'सारी भागदौड़ के बाद भी हर इंसान एक ही बड़ा ख़्वाब देखता है भीतर',
      'शाम को घर लौटकर अपनों के बीच बिना चिंता मुस्कुरा सकने का ख़्वाब',
    ],
    linesHinglish: [
      'Saari bhaagdaud ke baad bhi har insaan ek hi bada khwaab dekhta hai bheetar',
      'Shaam ko ghar lautkar apnon ke beech bina chinta muskura sakne ka khwaab',
    ],
    linesEnglish: [
      'After all dizzy climbs and distant chases, everyone dreams one thing',
      'Coming home by twilight able to smile worry-free among loved ones',
    ],
  },
  {
    title: 'चाहत में बसी ताक़त का रंग',
    titleEnglish: 'Hue of Strength Inside Desire',
    linesHindi: [
      'जो तुम दिल की गहराई से सोच सकते हो पूरी ईमानदारी के साथ आज',
      'यकीन मानो एक दिन उसे अपने हाथों से छूने की ताक़त भी पा लोगे',
    ],
    linesHinglish: [
      'Jo tum dil ki gehraai se soch sakte ho poori imaandari ke saath aaj',
      'Yakeen maano ek din use apne haathon se chhoone ki taaqat bhi pa loge',
    ],
    linesEnglish: [
      'Whatever honest dream you can picture clearly from deep within today',
      'Trust firmly you already carry quiet grit enough to touch it real',
    ],
  },
  {
    title: 'खुशियों से भरी मंज़िल की घड़ी',
    titleEnglish: 'Joyful Hour of Arrival',
    linesHindi: [
      'एक दिन घड़ी की सुइयाँ भी तुम्हारी मेहनत को सलाम करेंगी मुस्कुराकर',
      'जब हर देखा गया प्यारा ख़्वाब तुम्हारे आँगन में उतरकर खिलेगा',
    ],
    linesHinglish: [
      'Ek din ghadi ki suiyaan bhi tumhaari mehnat ko salaam karengi muskuraakar',
      'Jab har dekha gaya pyara khwaab tumhaare aangan mein utarkar khilega',
    ],
    linesEnglish: [
      'One bright afternoon even passing clocks will salute your stubborn effort',
      'As every cherished dream descends gently blooming right across your porch',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'सपनों के बीच अपनी पहचान',
    titleEnglish: 'Holding True Identity Mid-Dream',
    linesHindi: [
      'इतनी ऊँचाई पर भी पहुँचकर अपनी मिट्टी की बोली कभी मत छोड़ना',
      'क्योंकि तुम्हारे संस्कार ही तुम्हारी कामयाबी को सबसे सुंदर बनाते हैं',
    ],
    linesHinglish: [
      'Itni oonchaai par bhi pahunchkar apni mitti ki boli kabhi mat chhodna',
      'Kyunki tumhaare sanskaar hi tumhaari kaamyaabi ko sabse sundar banaate hain',
    ],
    linesEnglish: [
      'Even standing atop bright skyscrapers, keep your native warmth intact',
      'Your humble values are exactly what make high success shine graceful',
    ],
  },
  {
    title: 'ताज़गी से भरा हर सवेरा',
    titleEnglish: 'Every Dawn Brimming With Freshness',
    linesHindi: [
      'बीती रात की थकान को तकिये पर छोड़कर सुबह नए जोश से उठो',
      'तुम्हारे सबसे बेहतरीन और चमकदार दिन अभी आने बाकी हैं दोस्त',
    ],
    linesHinglish: [
      'Beeti raat ki thakaan ko takiye par chhodkar subah naye josh se utho',
      'Tumhaare sabse behtareen aur chamakdaar din abhi aane baaki hain dost',
    ],
    linesEnglish: [
      'Leave yesterday’s fatigue resting on crumpled pillows and rise renewed',
      'Your brightest, happiest chapters still wait right down the sunny road',
    ],
  },
  {
    title: 'नए आसमान में पुराने यार',
    titleEnglish: 'Old Friends Under New Skies',
    linesHindi: [
      'बड़ा ख़्वाब अकेले पूरा होने पर उतना मज़ा नहीं देता कभी भी',
      'जब पुराने यार पास बैठकर कहें—तूने कर दिखाया भाई, तब जीत पूरी होती है',
    ],
    linesHinglish: [
      'Bada khwaab akele poora hone par utna maza nahin deta kabhi bhi',
      'Jab puraane yaar paas baithkar kahein—tune kar dikhaaya bhai, tab jeet poori hoti hai',
    ],
    linesEnglish: [
      'Reaching huge summits completely alone never tastes quite as sweet',
      'Hearing old buddies grin—you actually pulled it off—completes the win',
    ],
  },
  {
    title: 'अधूरे ख्वाब को फिर जगाना',
    titleEnglish: 'Waking a Tucked-Away Dream Again',
    linesHindi: [
      'किसी भी पुराने शौक या सपने को धूल जमने के लिए मत छोड़ देना',
      'ज़िंदगी की उम्र कोई भी हो, नई शुरुआत करने का हक़ हमेशा रहता है',
    ],
    linesHinglish: [
      'Kisi bhi puraane shauk ya sapne ko dhool jamne ke liye mat chhod dena',
      'Zindagi ki umr koi bhi ho, nayi shuruwaat karne ka haq hamesha rehta hai',
    ],
    linesEnglish: [
      'Never abandon beloved old crafts to gather dust along high shelves',
      'At any chapter of life, you hold full right to begin wonderfully fresh',
    ],
  },
  {
    title: 'सुकून और सफलता की छत',
    titleEnglish: 'Roof Built of Calm and Success',
    linesHindi: [
      'ऐसा कोई काम मत चुनना जो तुम्हें अपनों की हँसी से बहुत दूर कर दे',
      'मेरी हर सफलता ऐसी हो जो घर के आँगन में और खुशियाँ लेकर आए',
    ],
    linesHinglish: [
      'Aisa koi kaam mat chunna jo tumhein apnon ki hansi se bahut door kar de',
      'Meri har safalta aisi ho jo ghar ke aangan mein aur khushiyaan lekar aaye',
    ],
    linesEnglish: [
      'Never pick paths tearing you permanently away from loved ones’ laughter',
      'Let every bright milestone carry extra warmth straight back into home',
    ],
  },
  {
    title: 'चाँद-तारों से आगे का सफ़र',
    titleEnglish: 'Journey Past Moon and Stars',
    linesHindi: [
      'जब इंसान ख़ुद की सीमाएँ तोड़कर आगे निकलने की ठान लेता है मन में',
      'तो पूरा ब्रह्मांड चुपचाप उसके लिए रास्ते खोलने में लग जाता है',
    ],
    linesHinglish: [
      'Jab insaan khud ki seemaayein todkar aage nikalne ki thaan leta hai mann mein',
      'To poora brahmaand chupchaap uske liye raaste kholne mein lag jaata hai',
    ],
    linesEnglish: [
      'Once you decide cleanly to step past old self-imposed fences inside',
      'The entire wide universe quietly starts opening unexpected gates ahead',
    ],
  },
  {
    title: 'दिल की गहराई में बसा विश्वास',
    titleEnglish: 'Quiet Conviction Deep Inside',
    linesHindi: [
      'बाहर से भले कोई ताली बजाए या सन्नाटा रहे तुम्हारी शुरुआत पर',
      'भीतर का अटूट विश्वास ही तुम्हें एक दिन मज़बूत शिखर तक ले जाएगा',
    ],
    linesHinglish: [
      'Baahar se bhale koi taali bajaaye ya sannaata rahe tumhaari shuruwaat par',
      'Bheetar ka atoot vishwas hi tumhein ek din mazboot shikhar tak le jaayega',
    ],
    linesEnglish: [
      'Whether crowds cheer loudly or stay quiet around your early launch',
      'Unshakable quiet belief inside carries you straight to tall summits',
    ],
  },
  {
    title: 'सपनों के रंग में रंगा कल',
    titleEnglish: 'Tomorrow Dyed in Dream Hues',
    linesHindi: [
      'हर सुबह सूरज से पूछ लिया करो कि आज नया क्या बनाना है दुनिया में',
      'ख़्वाब देखने वालों के पास कभी ऊर्जा या उम्मीद की कमी नहीं होती',
    ],
    linesHinglish: [
      'Har subah sooraj se poochh liya karo ki aaj naya kya banaana hai duniya mein',
      'Khwaab dekhne waalon ke paas kabhi oorja ya ummeed ki kami nahin hoti',
    ],
    linesEnglish: [
      'Ask bright morning sunlight daily what fresh good thing we can build today',
      'True dreamers never run dry on quiet energy, wonder, or crisp hope',
    ],
  },
  {
    title: 'मेहनत से चमकती आँखों की लौ',
    titleEnglish: 'Bright Flame in Honest Eyes',
    linesHindi: [
      'थकी हुई आँखों में भी जब लक्ष्य की चमक दिखाई देने लगे साफ़-साफ़',
      'तो समझ लेना कि अब कामयाबी बस कुछ कदम दूर खड़ी है तुमसे',
    ],
    linesHinglish: [
      'Thaki hui aankhon mein bhi jab lakshya ki chamak dikhaayi dene lage saaf-saaf',
      'To samajh lena ki ab kaamyaabi bas kuch kadam door khadi hai tumse',
    ],
    linesEnglish: [
      'When even tired eyes glow unmistakably with clarity of purpose',
      'Know bright breakthrough stands merely a few patient strides ahead',
    ],
  },
  {
    title: 'सपनों को सच करती प्यारी सुबह',
    titleEnglish: 'Lovely Dawn Turning Dreams True',
    linesHindi: [
      'हर बड़ा सफ़र बस एक शांत और सच्चे ख़्वाब से शुरू होता है पहले',
      'बाकी सब तो तुम्हारी लगन और वक़्त मिलकर ख़ूबसूरत बना ही देते हैं',
    ],
    linesHinglish: [
      'Har bada safar bas ek shaant aur sachhe khwaab se shuru hota hai pehle',
      'Baaki sab to tumhaari lagan aur waqt milkar khoobsurat bana hi dete hain',
    ],
    linesEnglish: [
      'Every grand voyage opens quietly inside one honest, brave dream',
      'Steady dedication and patient seasons weave the rest into gold ahead',
    ],
  },
];

export const UNIQUE_KHWAB_170 = buildUniqueShayaris(
  'khwab',
  'Khwab Shayari (ख़्वाब शायरी)',
  '🌠',
  31,
  KHWAB_ENTRIES
);
