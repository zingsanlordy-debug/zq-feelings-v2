import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const BIRTHDAY_FEELINGS_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'बारह बजे की पहली दुआ',
    titleEnglish: 'First Wish at Twelve Sharp',
    linesHindi: [
      'घड़ी की सुइयाँ मिलते ही सबसे पहले तुम्हारा नाम जुबान पर आया',
      'दुआ है यह नया साल तुम्हारी मुस्कान को दोगुना कर दे',
    ],
    linesHinglish: [
      'Ghadi ki suiyaan milte hi sabse pehle tumhaara naam jubaan par aaya',
      'Dua hai yeh naya saal tumhaari muskaan ko doguna kar de',
    ],
    linesEnglish: [
      'The second midnight struck, your name was the first on my lips',
      'May this fresh chapter of your life double every single smile',
    ],
  },
  {
    title: 'मोमबत्तियों से ज़्यादा रोशन मुस्कान',
    titleEnglish: 'Smile Brighter Than Candles',
    linesHindi: [
      'केक पर सजी मोमबत्तियाँ तो बस एक खूबसूरत बहाना हैं आज',
      'असली रोशनी तो तुम्हारे खिलते चेहरे की मुस्कान से फैलती है',
    ],
    linesHinglish: [
      'Cake par saji mombattiyaan to bas ek khoobsurat bahaana hain aaj',
      'Asli roshni to tumhaare khilte chehre ki muskaan se phailti hai',
    ],
    linesEnglish: [
      'Those glowing birthday candles are merely a charming little excuse today',
      'True radiance pours straight out from the warmth of your bright grin',
    ],
  },
  {
    title: 'साल दर साल बढ़ती दुआएँ',
    titleEnglish: 'Blessings Growing Each Year',
    linesHindi: [
      'उम्र का एक और सुनहरा पन्ना आज तुम्हारी किताब में जुड़ गया',
      'रब करे हर आने वाला कल बीते हुए साल से भी ज़्यादा सुंदर हो',
    ],
    linesHinglish: [
      'Umr ka ek aur sunahara panna aaj tumhaari kitaab mein jud gaya',
      'Rab kare har aane waala kal beete hue saal se bhi zyada sundar ho',
    ],
    linesEnglish: [
      'Another golden page turns smoothly inside your life story today',
      'May every tomorrow ahead shine even fairer than the year gone by',
    ],
  },
  {
    title: 'तुम्हारे होने से महफ़िल जिंदा',
    titleEnglish: 'Rooms Come Alive With You',
    linesHindi: [
      'कुछ लोग कैलेंडर की तारीख़ नहीं, अपनों की ख़ुशियाँ सजाते हैं',
      'जन्मदिन मुबारक उसे जिसके आने से हर महफ़िल ज़िंदा हो उठती है',
    ],
    linesHinglish: [
      'Kuch log calendar ki taareekh nahin, apnon ki khushiyaan sajaate hain',
      'Janmdin mubaarak use jiske aane se har mehfil zinda ho uthti hai',
    ],
    linesEnglish: [
      'Some rare souls brighten lives far beyond any date on the wall',
      'Happy birthday to the one whose laughter wakes up every room',
    ],
  },
  {
    title: 'केक से मीठी तुम्हारी दोस्ती',
    titleEnglish: 'Sweeter Than Birthday Frosting',
    linesHindi: [
      'चॉकलेट केक की मिठास तो बस दो घड़ी में खत्म हो जाती है',
      'पर तुम्हारी दोस्ती की मिठास हर जन्मदिन पर और गहरी लगती है',
    ],
    linesHinglish: [
      'Chocolate cake ki mithaas to bas do ghadi mein khatam ho jaati hai',
      'Par tumhaari dosti ki mithaas har janmdin par aur gehri lagti hai',
    ],
    linesEnglish: [
      'Sweet frosting on the birthday cake vanishes within a few bites',
      'Yet the sweetness of having you around deepens every single year',
    ],
  },
  {
    title: 'सपनों को पंख देने वाला दिन',
    titleEnglish: 'Day Giving Dreams Fresh Wings',
    linesHindi: [
      'आज सिर्फ़ केक काटने का नहीं, नए हौसले सजाने का दिन है दोस्त',
      'इस साल तुम्हारी हर वो अधूरी तमन्ना पूरी हो जो तुमने चुपचाप सोची थी',
    ],
    linesHinglish: [
      'Aaj sirf cake kaatne ka nahin, naye hausle sajaane ka din hai dost',
      'Is saal tumhaari har woh adhoori tamanna poori ho jo tumne chupchaap sochi thi',
    ],
    linesEnglish: [
      'Today is not just for slicing cake, it is for launching bolder hopes',
      'May every quiet dream you tucked away finally unfold this very year',
    ],
  },
  {
    title: 'तारीख़ ख़ास, इंसान उससे भी ख़ास',
    titleEnglish: 'Special Date, Finer Soul',
    linesHindi: [
      'यूँ तो हर दिन सूरज अपनी ही रफ़्तार से उगता है आसमान में',
      'पर आज की सुबह ख़ास है क्योंकि आज मेरी जान का जन्मदिन है',
    ],
    linesHinglish: [
      'Yoon to har din sooraj apni hi raftaar se ugta hai aasmaan mein',
      'Par aaj ki subah khaas hai kyunki aaj meri jaan ka janmdin hai',
    ],
    linesEnglish: [
      'Most mornings sunrise paints the same familiar glow across the sky',
      'Yet today shines differently because the world welcomed you on this date',
    ],
  },
  {
    title: 'मेरी खुशियों का पता तुम हो',
    titleEnglish: 'My Joy Begins With You',
    linesHindi: [
      'तोहफ़े में क्या दूँ तुम्हें समझ नहीं आता इस ख़ास दिन पर',
      'मेरी हर सच्ची दुआ में सबसे पहला नाम हमेशा तुम्हारा ही लिखा है',
    ],
    linesHinglish: [
      'Tohfe mein kya doon tumhein samajh nahin aata is khaas din par',
      'Meri har sachhi dua mein sabse pehla naam hamesha tumhaara hi likha hai',
    ],
    linesEnglish: [
      'I never quite know what ribbon-wrapped gift matches your worth',
      'So take the very first line of every sincere prayer I ever whisper',
    ],
  },
  {
    title: 'गुब्बारों सा हल्का मन रहे',
    titleEnglish: 'Heart Light as Party Balloons',
    linesHindi: [
      'आसमान में उड़ते रंगीन गुब्बारों की तरह हल्का रहे तुम्हारा दिल',
      'कोई चिंता कभी तुम्हारी मुस्कान की राह में न आ पाए',
    ],
    linesHinglish: [
      'Aasmaan mein udte rangeen gubbaaron ki tarah halka rahe tumhaara dil',
      'Koi chinta kabhi tumhaari muskaan ki raah mein na aa paaye',
    ],
    linesEnglish: [
      'May your heart float as light as bright balloons rising skyward',
      'And may heavy worries stay miles away from your carefree smile',
    ],
  },
  {
    title: 'माँ की गोद का पहला उजाला',
    titleEnglish: 'First Light in Mother’s Arms',
    linesHindi: [
      'आज ही के दिन पहली बार रोकर पूरे घर को हँसाया था तुमने',
      'तब से आज तक तुम अपने अपनों के जीवन की सबसे बड़ी रोशनी हो',
    ],
    linesHinglish: [
      'Aaj hi ke din pehli baar rokar poore ghar ko hansaaya tha tumne',
      'Tab se aaj tak tum apne apnon ke jeevan ki sabse badi roshni ho',
    ],
    linesEnglish: [
      'On this very date your first tiny cry made a whole household laugh',
      'Ever since then you have been the brightest light your loved ones know',
    ],
  },
  {
    title: 'कदम चूमे हर नई मंज़िल',
    titleEnglish: 'Every Milestone Greeting You',
    linesHindi: [
      'आने वाले बारह महीने तुम्हारे लिए तरक़्क़ी और सुकून लेकर आएँ',
      'तुम जहाँ भी क़दम रखो, कामयाबी ख़ुद तुम्हारे स्वागत में खड़ी हो',
    ],
    linesHinglish: [
      'Aane waale baarah maheene tumhaare liye tarakki aur sukoon lekar aayein',
      'Tum jahaan bhi kadam rakho, kaamyaabi khud tumhaare swagat mein khadi ho',
    ],
    linesEnglish: [
      'May the next twelve months pour steady growth and peace into your lap',
      'Wherever your footsteps lead, success is waiting eagerly at the door',
    ],
  },
  {
    title: 'गिफ़्ट से बढ़कर तुम्हारा साथ',
    titleEnglish: 'Your Presence Beats Every Gift',
    linesHindi: [
      'पार्टी, सजावट और तस्वीरों से ज़्यादा ज़रूरी बस इतना है यार',
      'हर आने वाले जन्मदिन पर हम यूँ ही साथ बैठकर हँसते रहें',
    ],
    linesHinglish: [
      'Party, sajaawat aur tasveeron se zyada zaroori bas itna hai yaar',
      'Har aane waale janmdin par hum yoon hi saath baithkar hanste rahein',
    ],
    linesEnglish: [
      'More than balloons, snapshots, or fancy wrapping paper ever matter',
      'What counts most is sitting side by side laughing every single year',
    ],
  },
  {
    title: 'चमकता सितारा हमारे बीच',
    titleEnglish: 'Brightest Star Among Us',
    linesHindi: [
      'हज़ारों लोगों की भीड़ में भी अपनी सादगी से चमकते हो तुम',
      'ईश्वर करे तुम्हारी यह मासूमियत और नेकी ताउम्र बनी रहे',
    ],
    linesHinglish: [
      'Hazaaron logon ki bheed mein bhi apni saadgi se chamakte ho tum',
      'Ishwar kare tumhaari yeh maasoomiyat aur neki taa-umr bani rahe',
    ],
    linesEnglish: [
      'Even in rooms of thousands you shine quietly through genuine grace',
      'May that warm kindness and honest spirit stay yours for decades ahead',
    ],
  },
  {
    title: 'फ़ोटो नहीं, एहसास सहेजना है',
    titleEnglish: 'Saving Moments Beyond Cameras',
    linesHindi: [
      'जन्मदिन की स्टोरी तो चौबीस घंटे में अपने आप हट जाती है फ़ोन से',
      'पर दिल से दी गई दुआएँ पूरी ज़िंदगी तुम्हारे साथ चलती हैं',
    ],
    linesHinglish: [
      'Janmdin ki story to chaubees ghante mein apne aap hat jaati hai phone se',
      'Par dil se di gayi duaaein poori zindagi tumhaare saath chalti hain',
    ],
    linesEnglish: [
      'Birthday stories vanish quietly off phone screens after twenty-four hours',
      'Yet heartfelt blessings linger beside your journey for a lifetime',
    ],
  },
  {
    title: 'मीठी यादों का गुलदस्ता',
    titleEnglish: 'Bouquet of Sweet Memories',
    linesHindi: [
      'बीते साल ने जो सिखाया उसे हिम्मत बनाकर आगे बढ़ जाओ दोस्त',
      'यह नया साल तुम्हारी झोली में खुशियों का गुलदस्ता भर दे',
    ],
    linesHinglish: [
      'Beete saal ne jo sikhaaya use himmat banaakar aage badh jaao dost',
      'Yeh naya saal tumhaari jholi mein khushiyon ka guldasta bhar de',
    ],
    linesEnglish: [
      'Turn every lesson from last year into quiet fuel for tomorrow',
      'May this brand-new lap around the sun bloom like a bright bouquet',
    ],
  },
  {
    title: 'ख़ास दोस्त के नाम एक शाम',
    titleEnglish: 'An Evening for My Bestie',
    linesHindi: [
      'आज कोई डाइट नहीं, कोई काम की टेंशन नहीं और कोई जल्दबाज़ी नहीं',
      'आज का पूरा दिन सिर्फ़ तुम्हारे नाम है मेरे सबसे प्यारे यार',
    ],
    linesHinglish: [
      'Aaj koi diet nahin, koi kaam ki tension nahin aur koi jaldbaazi nahin',
      'Aaj ka poora din sirf tumhaare naam hai mere sabse pyare yaar',
    ],
    linesEnglish: [
      'Zero calorie counting today, zero office stress, and zero rushing clocks',
      'All twenty-four golden hours belong completely to my favorite person',
    ],
  },
  {
    title: 'हर धड़कन में जन्मदिन का जश्न',
    titleEnglish: 'Celebration in Every Heartbeat',
    linesHindi: [
      'तेरे जन्मदिन पर बस यही तमन्ना है मेरे दिल के कोने से',
      'तेरा हर दिन उत्सव बने और हर रात सुकून की नींद लाए',
    ],
    linesHinglish: [
      'Tere janmdin par bas yahi tamanna hai mere dil ke kone se',
      'Tera har din utsav bane aur har raat sukoon ki neend laaye',
    ],
    linesEnglish: [
      'On your birthday my single wish rises gently from the heart',
      'May every morning bring celebration and every night wrap you in calm',
    ],
  },
  {
    title: 'सितारों से सजी नई शुरुआत',
    titleEnglish: 'Starlit Fresh Beginning',
    linesHindi: [
      'पुराने ग़मों को कल की राख में छोड़कर मुस्कुरा दो एक बार',
      'आज से तुम्हारी ज़िंदगी का सबसे बेहतरीन अध्याय शुरू हो रहा है',
    ],
    linesHinglish: [
      'Puraane ghamon ko kal ki raakh mein chhodkar muskura do ek baar',
      'Aaj se tumhaari zindagi ka sabse behtareen adhyaay shuru ho raha hai',
    ],
    linesEnglish: [
      'Leave yesterday’s heaviness behind and flash a wide, fearless smile',
      'Starting today your brightest, richest chapter is stepping onto stage',
    ],
  },
  {
    title: 'फूलों की खुशबू सा जीवन',
    titleEnglish: 'Life Fragrant as Fresh Blooms',
    linesHindi: [
      'जैसे बगीचे में गुलाब बिना शोर के अपनी महक बाँटता रहता है',
      'वैसे ही तुम हमेशा अपनों की दुनिया में प्यार बाँटते रहो',
    ],
    linesHinglish: [
      'Jaise bageeche mein gulaab bina shor ke apni mehak baantta rehta hai',
      'Waise hi tum hamesha apnon ki duniya mein pyar baantte raho',
    ],
    linesEnglish: [
      'Just as a garden rose scatters quiet fragrance without boasting',
      'May you keep spreading warmth effortlessly across every heart you touch',
    ],
  },
  {
    title: 'जन्मदिन की प्यारी मुबारकबाद',
    titleEnglish: 'Warmest Happy Birthday Note',
    linesHindi: [
      'शब्द छोटे पड़ जाते हैं जब तुम्हारी अहमियत बयाँ करनी हो मुझे',
      'बस इतना समझ लो कि तुम हो तो हमारी ज़िंदगी बहुत खूबसूरत है',
    ],
    linesHinglish: [
      'Shabd chhote pad jaate hain jab tumhaari ahmiyat bayaan karni ho mujhe',
      'Bas itna samajh lo ki tum ho to hamaari zindagi bahut khoobsurat hai',
    ],
    linesEnglish: [
      'Ordinary words fall short whenever I try explaining what you mean',
      'Simply know this much: life feels infinitely brighter with you in it',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'बढ़ती उम्र, घटती फिक्र',
    titleEnglish: 'Growing Wiser, Worrying Less',
    linesHindi: [
      'उम्र का हर बढ़ता नंबर बस तजुर्बे और मुस्कान की निशानी बने',
      'दिल से तुम हमेशा उतने ही जिंदादिल और बेफ़िक्र बने रहो',
    ],
    linesHinglish: [
      'Umr ka har badhta number bas tajurbe aur muskaan ki nishaani bane',
      'Dil se tum hamesha utne hi zindaadil aur befikr bane raho',
    ],
    linesEnglish: [
      'Let every new candle simply stand for deeper wisdom and wider smiles',
      'Inside your heart, stay just as spirited and carefree as day one',
    ],
  },
  {
    title: 'प्यार भरा सरप्राइज़ केक',
    titleEnglish: 'Surprise Cake at Your Door',
    linesHindi: [
      'दरवाज़े की घंटी बजते ही हाथों में केक देखकर जो चमक आँखों में आई',
      'उसी एक पल की ख़ुशी के लिए हमने पूरा हफ़्ता प्लानिंग की थी',
    ],
    linesHinglish: [
      'Darwaze ki ghanti bajte hi haathon mein cake dekhkar jo chamak aankhon mein aayi',
      'Usi ek pal ki khushi ke liye humne poora hafta planning ki thi',
    ],
    linesEnglish: [
      'That spark lighting your eyes the instant the doorbell revealed cake',
      'Made an entire week of sneaky planning completely worth every minute',
    ],
  },
  {
    title: 'आँसुओं से दूर, हँसी के पास',
    titleEnglish: 'Far From Tears, Near Laughter',
    linesHindi: [
      'मेरी बस यही अरदास है ऊपरवाले के दरबार में आज के दिन',
      'तेरे हिस्से का हर आँसू मुस्कान बनकर तेरे होंठों पर सजे',
    ],
    linesHinglish: [
      'Meri bas yahi ardaas hai ooparwaale ke darbaar mein aaj ke din',
      'Tere hisse ka har aansoo muskaan bankar tere honthon par saje',
    ],
    linesEnglish: [
      'One gentle prayer rises quietly up to heaven for you today',
      'May every would-be tear turn into pure laughter along your lips',
    ],
  },
  {
    title: 'सूरज की पहली किरण जैसा उपहार',
    titleEnglish: 'Gift Like First Morning Sunbeam',
    linesHindi: [
      'सुबह की ताज़ी किरण ने आज खिड़की पर दस्तक कुछ अलग दी है',
      'शायद हवाओं को भी पता है कि आज किसी अनमोल का जन्मदिन है',
    ],
    linesHinglish: [
      'Subah ki taazi kiran ne aaj khidki par dastak kuch alag di hai',
      'Shaayad hawaaon ko bhi pata hai ki aaj kisi anmol ka janmdin hai',
    ],
    linesEnglish: [
      'Morning sunlight tapped gently on the windowpane a little brighter today',
      'Even the breeze seemed to whisper someone precious was born on this day',
    ],
  },
  {
    title: 'मेरी जान को सलामत रखे रब',
    titleEnglish: 'Heaven Guarding My Favorite Person',
    linesHindi: [
      'ज़िंदगी की दौड़ में जब कभी धूप थोड़ी तेज़ लगने लगे तुम्हें',
      'तो दुआ है मेरा प्यार तुम्हारे सिर पर हमेशा छांव बनकर चले',
    ],
    linesHinglish: [
      'Zindagi ki daud mein jab kabhi dhoop thodi tez lagne lage tumhein',
      'To dua hai mera pyar tumhaare sir par hamesha chhaanv bankar chale',
    ],
    linesEnglish: [
      'Whenever the afternoon sun feels too harsh along life’s busy stretch',
      'May my affection drift silently above your head like cool shade',
    ],
  },
  {
    title: 'दोस्त कम, परिवार ज़्यादा हो तुम',
    titleEnglish: 'More Family Than Friend',
    linesHindi: [
      'कहने को तो लोग तुम्हें मेरा दोस्त समझते हैं इस दुनिया में',
      'पर दिल जानता है कि तुम मेरे परिवार का सबसे प्यारा हिस्सा हो',
    ],
    linesHinglish: [
      'Kehne ko to log tumhein mera dost samajhte hain is duniya mein',
      'Par dil jaanta hai ki tum mere parivaar ka sabse pyara hissa ho',
    ],
    linesEnglish: [
      'Outsiders look at us and call you simply one of my close friends',
      'Yet my heart knows deeply you are family in every way that counts',
    ],
  },
  {
    title: 'ताउम्र जवां रहने की दुआ',
    titleEnglish: 'Forever Young in Spirit',
    linesHindi: [
      'कैलेंडर भले हर साल बारह महीने बाद तारीख़ बदल देता हो',
      'पर तुम्हारे दिल का उत्साह और बचपना हमेशा एक जैसा ताज़ा रहे',
    ],
    linesHinglish: [
      'Calendar bhale har saal baarah maheene baad taareekh badal deta ho',
      'Par tumhaare dil ka utsaah aur bachpana hamesha ek jaisa taaza rahe',
    ],
    linesEnglish: [
      'Wall calendars inevitably flip past another twelve busy months',
      'Still, may your playful spark and wonder remain timelessly young',
    ],
  },
  {
    title: 'तुम्हारे बिना अधूरा था सफ़र',
    titleEnglish: 'Journey Incomplete Without You',
    linesHindi: [
      'इस दुनिया में आकर तुमने सबसे बड़ा एहसान हम पर किया है',
      'क्योंकि तुम्हारे बिना हमारे कई खुशनुमा पल कभी बनते ही नहीं',
    ],
    linesHinglish: [
      'Is duniya mein aakar tumne sabse bada ehsaan hum par kiya hai',
      'Kyunki tumhaare bina hamaare kai khushnuma pal kabhi bante hi nahin',
    ],
    linesEnglish: [
      'Being born into this world was secretly the greatest favor to us all',
      'Without you here, half our happiest memories never would have existed',
    ],
  },
  {
    title: 'हर चाहत को मिले मंज़िल',
    titleEnglish: 'Every Honest Wish Fulfilled',
    linesHindi: [
      'सुबह की पहली चाय से लेकर रात के सुनहरे सपनों तक',
      'तुम्हारी हर छोटी-बड़ी चाहत इस साल हक़ीक़त में बदल जाए',
    ],
    linesHinglish: [
      'Subah ki pehli chai se lekar raat ke sunahare sapnon tak',
      'Tumhaari har chhoti-badi chaahat is saal hakeekat mein badal jaaye',
    ],
    linesEnglish: [
      'From peaceful morning tea to your grandest midnight ambitions',
      'May every quiet longing blossom into real joy over this coming year',
    ],
  },
  {
    title: 'जश्न से भरी प्यारी रात',
    titleEnglish: 'Night Glowing With Celebration',
    linesHindi: [
      'ताली, हँसी, पसंदीदा गाने और अपनों की चमकती हुई आँखें',
      'तुम्हारा हर जन्मदिन ऐसी ही सुकून भरी यादगार शाम लेकर आए',
    ],
    linesHinglish: [
      'Taali, hansi, pasandeeda gaane aur apnon ki chamakti hui aankhein',
      'Tumhaara har janmdin aisi hi sukoon bhari yaadgaar shaam lekar aaye',
    ],
    linesEnglish: [
      'Warm applause, loud laughter, favorite songs, and eyes sparkling bright',
      'May every birthday bring an unforgettable evening filled just like this',
    ],
  },
  {
    title: 'नए साल में नई उड़ान',
    titleEnglish: 'New Year of Life, Higher Flight',
    linesHindi: [
      'पिछले साल की सारी थकान को आज गुब्बारों संग हवा में उड़ा दो',
      'क्योंकि आज से तुम्हारी कामयाबी की नई और ऊँची उड़ान शुरू है',
    ],
    linesHinglish: [
      'Pichhle saal ki saari thakaan ko aaj gubbaaron sang hawa mein uda do',
      'Kyunki aaj se tumhaari kaamyaabi ki nayi aur oonchi udaan shuru hai',
    ],
    linesEnglish: [
      'Release every tired sigh from last year up into the open breeze',
      'Because starting right now your boldest ascent officially takes wing',
    ],
  },
  {
    title: 'खुशियों का अनंत आसमान',
    titleEnglish: 'Limitless Sky of Happiness',
    linesHindi: [
      'जितने तारे रात के खुले आसमान में टिमटिमाते दिखते हैं तुम्हें',
      'उतनी ही अनगिनत खुशियाँ तुम्हारे जीवन के हिस्से में आती रहें',
    ],
    linesHinglish: [
      'Jitne taare raat ke khule aasmaan mein timtimaate dikhte hain tumhein',
      'Utni hi anginat khushiyaan tumhaare jeevan ke hisse mein aati rahein',
    ],
    linesEnglish: [
      'Count all the stars shimmering softly across a clear midnight sky',
      'That is how many bright blessings I pray arrive at your doorstep',
    ],
  },
  {
    title: 'दिल की गहराई से मुबारक',
    titleEnglish: 'Birthday Cheers From the Soul',
    linesHindi: [
      'लाखों संदेश आते होंगे आज के दिन तुम्हारे फ़ोन की स्क्रीन पर',
      'पर मेरी यह दो लाइनें सीधे मेरे दिल की धड़कन से निकली हैं',
    ],
    linesHinglish: [
      'Laakhon sandesh aate honge aaj ke din tumhaare phone ki screen par',
      'Par meri yeh do linein seedhe mere dil ki dhadkan se nikli hain',
    ],
    linesEnglish: [
      'Hundreds of cheerful pings may light up your phone screen today',
      'Yet these two simple lines travel straight out from the pulse of my heart',
    ],
  },
  {
    title: 'सुकून भरी लंबी उम्र',
    titleEnglish: 'Long Life Wrapped in Peace',
    linesHindi: [
      'ईश्वर करे तुम्हारी उम्र लंबी हो और सेहत हमेशा फूलों सी खिली रहे',
      'अपनों का प्यार तुम्हारे आँगन में हमेशा यूँ ही बरसता रहे',
    ],
    linesHinglish: [
      'Ishwar kare tumhaari umr lambi ho aur sehat hamesha phoolon si khili rahe',
      'Apnon ka pyar tumhaare aangan mein hamesha yoon hi barasta rahe',
    ],
    linesEnglish: [
      'May heaven grant you long years overflowing with blooming health',
      'And let warm love shower endlessly across your courtyard forever',
    ],
  },
  {
    title: 'तितलियों सी चंचल हँसी',
    titleEnglish: 'Laughter Graceful as Butterflies',
    linesHindi: [
      'तितलियों के पंखों जैसे हल्के और रंगीन रहें तुम्हारे आने वाले दिन',
      'तुम जहाँ जाओ, वहाँ अपने साथ बहारों का मौसम लेकर जाओ',
    ],
    linesHinglish: [
      'Titliyon ke pankhon jaise halke aur rangeen rahein tumhaare aane waale din',
      'Tum jahaan jaao, wahaan apne saath bahaaron ka mausam lekar jaao',
    ],
    linesEnglish: [
      'May your days ahead flutter as light and colorful as butterfly wings',
      'Every place you visit deserves the spring breeze you naturally bring',
    ],
  },
  {
    title: 'मज़ेदार पार्टी और मीठी यादें',
    titleEnglish: 'Playful Party, Golden Keepsakes',
    linesHindi: [
      'चेहरे पर केक लगने से कभी नाराज़ मत होना मेरे यार आज',
      'यही नटखट तस्वीरें दस साल बाद सबसे प्यारी याद बन जाएँगी',
    ],
    linesHinglish: [
      'Chehre par cake lagne se kabhi naaraaz mat hona mere yaar aaj',
      'Yahi natkhat tasveerein das saal baad sabse pyari yaad ban jaayengi',
    ],
    linesEnglish: [
      'Never get grumpy about frosting smudges landing on your nose today',
      'Ten years down the road those messy snapshots become priceless gold',
    ],
  },
  {
    title: 'प्यार और सम्मान की सौगात',
    titleEnglish: 'Token of Love and Honor',
    linesHindi: [
      'दुनिया की सबसे बड़ी दौलत पैसा नहीं, सच्चे चाहने वाले होते हैं',
      'तुम बहुत अमीर हो क्योंकि हर दिल में तुम्हारे लिए प्यार बसता है',
    ],
    linesHinglish: [
      'Duniya ki sabse badi daulat paisa nahin, sachhe chaahne waale hote hain',
      'Tum bahut ameer ho kyunki har dil mein tumhaare liye pyar basta hai',
    ],
    linesEnglish: [
      'True richness is never tallied in coins, but in people cheering for you',
      'By that measure you stand wealthier than royalty in every room',
    ],
  },
  {
    title: 'बुरी नज़र से कोसों दूर',
    titleEnglish: 'Miles Away From Every Shadow',
    linesHindi: [
      'तुम्हारी मुस्कान को कभी ज़माने की बुरी नज़र न लगे दोस्त',
      'हर मोड़ पर तुम सुरक्षित, खुशहाल और बेफ़िक्र मुस्कुराते रहो',
    ],
    linesHinglish: [
      'Tumhaari muskaan ko kabhi zamaane ki buri nazar na lage dost',
      'Har mod par tum surakshit, khushhaal aur befikr muskuraate raho',
    ],
    linesEnglish: [
      'May no shadow of envy ever dim the brilliance of your smile',
      'Keep walking every bend safe, thriving, and wonderfully carefree',
    ],
  },
  {
    title: 'मेरी दुआओं का पहला हकदार',
    titleEnglish: 'First Claim to Every Prayer',
    linesHindi: [
      'जब भी हाथ उठते हैं प्रार्थना में किसी की सलामती माँगने को',
      'तो अनजाने में सबसे पहले तुम्हारा ही मुस्कुराता चेहरा याद आता है',
    ],
    linesHinglish: [
      'Jab bhi haath uthte hain prarthana mein kisi ki salamati maangne ko',
      'To anjaane mein sabse pehle tumhaara hi muskuraata chehra yaad aata hai',
    ],
    linesEnglish: [
      'Whenever palms fold quietly asking heaven for someone’s peace',
      'Your smiling face naturally appears first inside my thoughts',
    ],
  },
  {
    title: 'सुनहरे भविष्य की दहलीज़',
    titleEnglish: 'Threshold of Golden Years Ahead',
    linesHindi: [
      'आज तुम एक और खूबसूरत साल की दहलीज़ पर खड़े हो मुस्कुराते हुए',
      'आगे की पूरी राह गुलाब की पंखुड़ियों सी कोमल और उजली रहे',
    ],
    linesHinglish: [
      'Aaj tum ek aur khoobsurat saal ki dehleez par khade ho muskuraate hue',
      'Aage ki poori raah gulaab ki pankhudiyon si komal aur ujali rahe',
    ],
    linesEnglish: [
      'Today you stand smiling on the threshold of another radiant year',
      'May the whole road ahead unfold soft as rose petals and sunlit bright',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'माँ-पापा का सबसे बड़ा गर्व',
    titleEnglish: 'Greatest Pride of Parents',
    linesHindi: [
      'जिस दिन तुम पैदा हुए थे, घर में जश्न का माहौल था चारो तरफ़',
      'आज अपने कर्मों से तुमने माँ-पापा के माथे का गर्व दोगुना कर दिया',
    ],
    linesHinglish: [
      'Jis din tum paida hue the, ghar mein jashn ka mahaul tha chaaro taraf',
      'Aaj apne karmon se tumne maa-papa ke maathe ka garv doguna kar diya',
    ],
    linesEnglish: [
      'Joy filled every corner of the house on the morning you arrived',
      'Through your character now you have doubled your parents’ pride',
    ],
  },
  {
    title: 'केक के साथ एक वादा',
    titleEnglish: 'Promise Alongside Birthday Cake',
    linesHindi: [
      'इस जन्मदिन पर तुमसे कोई बड़ा तोहफ़ा नहीं, एक वादा चाहिए बस',
      'चाहे हालात कैसे भी आएँ, तुम कभी मुस्कुराना बंद नहीं करोगे',
    ],
    linesHinglish: [
      'Is janmdin par tumse koi bada tohfa nahin, ek waada chahiye bas',
      'Chaahe haalaat kaise bhi aayein, tum kabhi muskuraana band nahin karoge',
    ],
    linesEnglish: [
      'All I ask from you on this birthday is one simple little promise',
      'No matter what weather rolls in, never stop flashing that warm smile',
    ],
  },
  {
    title: 'पसंदीदा गाने पर जन्मदिन का नाच',
    titleEnglish: 'Dancing to Your Birthday Anthem',
    linesHindi: [
      'आज सारे काम एक तरफ़ रखकर ज़ोर से म्यूज़िक बजा दो कमरे में',
      'क्योंकि आज उस इंसान का दिन है जो सबके चेहरों पर रौनक लाता है',
    ],
    linesHinglish: [
      'Aaj saare kaam ek taraf rakhkar zor se music baja do kamre mein',
      'Kyunki aaj us insaan ka din hai jo sabke chehron par raunak laata hai',
    ],
    linesEnglish: [
      'Push every pending task aside and crank the volume sky-high today',
      'Because today honors the soul who brings life into everyone’s day',
    ],
  },
  {
    title: 'मेरी ज़िंदगी का सबसे हसीन दिन',
    titleEnglish: 'Finest Date on My Calendar',
    linesHindi: [
      'मेरे लिए दुनिया के सारे त्योहारों से बढ़कर आज की तारीख़ है',
      'क्योंकि आज वह दिन है जब मेरी दुनिया को उसकी धड़कन मिली थी',
    ],
    linesHinglish: [
      'Mere liye duniya ke saare tyohaaron se badhkar aaj ki taareekh hai',
      'Kyunki aaj woh din hai jab meri duniya ko uski dhadkan mili thi',
    ],
    linesEnglish: [
      'Higher than every holiday on my calendar sits today’s bright date',
      'Because this is the day my world first received its favorite heartbeat',
    ],
  },
  {
    title: 'चाय की चुस्की संग लंबी गप्पें',
    titleEnglish: 'Tea Sips and Birthday Laughs',
    linesHindi: [
      'जन्मदिन मनाने के लिए बड़े क्लब या शोर की ज़रूरत नहीं होती',
      'दो कप चाय और तुम्हारी मौजूदगी ही हर जश्न को पूरा कर देती है',
    ],
    linesHinglish: [
      'Janmdin manaane ke liye bade club ya shor ki zaroorat nahin hoti',
      'Do cup chai aur tumhaari maujoodgi hi har jashn ko poora kar deti hai',
    ],
    linesEnglish: [
      'You never need loud clubs or flashing neon lights to celebrate right',
      'Two warm cups of tea and your company make any gathering complete',
    ],
  },
  {
    title: 'दिल जीत लेने वाली सादगी',
    titleEnglish: 'Simplicity Winning Every Heart',
    linesHindi: [
      'बनावटी दुनिया में तुम्हारा साफ़ दिल ही तुम्हारी सबसे बड़ी दौलत है',
      'जन्मदिन मुबारक हो उस यार को जो आज भी बिल्कुल असली है',
    ],
    linesHinglish: [
      'Banaawati duniya mein tumhaara saaf dil hi tumhaari sabse badi daulat hai',
      'Janmdin mubaarak ho us yaar ko jo aaj bhi bilkul asli hai',
    ],
    linesEnglish: [
      'In an age of fake filters, your honest heart stays your greatest wealth',
      'Happy birthday to the rare soul who remains unapologetically real',
    ],
  },
  {
    title: 'ख़ास इंसान को ख़ास संदेश',
    titleEnglish: 'Heartfelt Note for Someone Rare',
    linesHindi: [
      'कुछ लोग हमारे जीवन में मेहमान बनकर नहीं, आशीर्वाद बनकर आते हैं',
      'तुम्हारे जन्मदिन पर शुक्रिया कि तुम मेरी ज़िंदगी का हिस्सा हो',
    ],
    linesHinglish: [
      'Kuch log hamaare jeevan mein mehmaan bankar nahin, aashirwaad bankar aate hain',
      'Tumhaare janmdin par shukriya ki tum meri zindagi ka hissa ho',
    ],
    linesEnglish: [
      'Certain people enter our lives not as passing guests, but true blessings',
      'On your birthday, thank you deeply for walking through my story',
    ],
  },
  {
    title: 'ख़्वाबों के सच होने का साल',
    titleEnglish: 'Year When Dreams Turn Real',
    linesHindi: [
      'आँख बंद करके केक पर फूँक मारते हुए जो भी माँगो आज तुम',
      'ऊपरवाला बिना देर किए तुम्हारी हर मुराद पूरी कर दे',
    ],
    linesHinglish: [
      'Aankh band karke cake par phoonk maarte hue jo bhi maango aaj tum',
      'Ooparwaala bina der kiye tumhaari har muraad poori kar de',
    ],
    linesEnglish: [
      'Close your eyes and wish boldly as you blow out every flickering candle',
      'May heaven hurry to turn every single silent prayer into reality',
    ],
  },
  {
    title: 'मोहब्बत भरी जन्मदिन शुभकामना',
    titleEnglish: 'Loving Birthday Wish for Partner',
    linesHindi: [
      'मेरी सुबह तुमसे शुरू होती है और रात तुम्हारे ख़्यालों में ढलती है',
      'जन्मदिन मुबारक मेरी जान, तुम मेरी सबसे प्यारी आदत बन गए हो',
    ],
    linesHinglish: [
      'Meri subah tumse shuru hoti hai aur raat tumhaare khayaalon mein dhalti hai',
      'Janmdin mubaarak meri jaan, tum meri sabse pyari aadat ban gaye ho',
    ],
    linesEnglish: [
      'My mornings begin with your name and nights wind down in your warmth',
      'Happy birthday my love—you have become my sweetest daily habit',
    ],
  },
  {
    title: 'रिश्तों की गर्माहट हमेशा रहे',
    titleEnglish: 'May Warm Bonds Always Surround You',
    linesHindi: [
      'हर जन्मदिन पर तुम्हारे आस-पास अपनों की भीड़ कम न हो कभी',
      'तुम्हारी आवाज़ सुनने वाले लोग हमेशा मुस्कुराते हुए पास मिलें',
    ],
    linesHinglish: [
      'Har janmdin par tumhaare aas-paas apnon ki bheed kam na ho kabhi',
      'Tumhaari aawaz sunne waale log hamesha muskuraate hue paas milein',
    ],
    linesEnglish: [
      'May the circle of people who adore you never thin at any birthday table',
      'Keep finding smiling faces eager to listen whenever you speak',
    ],
  },
  {
    title: 'छोटी बहन के जन्मदिन का प्यार',
    titleEnglish: 'Sweetest Birthday to Little Sister',
    linesHindi: [
      'बचपन की शैतानियाँ भले कम हो गई हों समय के साथ थोड़ी सी',
      'पर मेरे लिए तुम आज भी घर की सबसे प्यारी राजकुमारी हो',
    ],
    linesHinglish: [
      'Bachpan ki shaitaaniyaan bhale kam ho gayi hon samay ke saath thodi si',
      'Par mere liye tum aaj bhi ghar ki sabse pyari rajkumari ho',
    ],
    linesEnglish: [
      'Childhood pranks may have softened slightly over the busy seasons',
      'Yet inside my eyes you stay the sweetest little princess of home',
    ],
  },
  {
    title: 'बड़े भाई को जन्मदिन सलाम',
    titleEnglish: 'Birthday Salute to Elder Brother',
    linesHindi: [
      'बिना जताए हर मुश्किल से बचाने वाले मेरे बड़े भाई को सलाम',
      'आपकी सेहत, मुस्कान और शान हमेशा आसमान से ऊँची रहे',
    ],
    linesHinglish: [
      'Bina jataaye har mushkil se bachaane waale mere bade bhai ko salaam',
      'Aapki sehat, muskaan aur shaan hamesha aasmaan se oonchi rahe',
    ],
    linesEnglish: [
      'Here is to my elder brother who shields us quietly from every storm',
      'May your health, smile, and stature always tower above the skies',
    ],
  },
  {
    title: 'चाँद जैसी शीतल मुस्कान',
    titleEnglish: 'Moonlight Gentle on Your Smile',
    linesHindi: [
      'पूर्णिमा के चाँद जैसी शीतलता बसी है तुम्हारे प्यारे स्वभाव में',
      'ईश्वर करे तुम्हारा जीवन हमेशा इसी चाँदनी में नहाया रहे',
    ],
    linesHinglish: [
      'Poornima ke chaand jaisi sheetalta basi hai tumhaare pyare swabhaav mein',
      'Ishwar kare tumhaara jeevan hamesha isi chaandni mein nahaaya rahe',
    ],
    linesEnglish: [
      'A full-moon coolness rests naturally inside your gentle temperament',
      'May your life stay bathed forever inside that peaceful silver glow',
    ],
  },
  {
    title: 'दोस्त के नाम बर्थडे स्टेटस',
    titleEnglish: 'Birthday Status for True Buddy',
    linesHindi: [
      'शहर में पार्टी चाहे जहाँ भी हो आज रात की रौनक हमारे नाम है',
      'हैप्पी बर्थडे यार, तेरे जैसा भाई मिलना किस्मत की बात है',
    ],
    linesHinglish: [
      'Shehar mein party chaahe jahaan bhi ho aaj raat ki raunak hamaare naam hai',
      'Happy birthday yaar, tere jaisa bhai milna kismat ki baat hai',
    ],
    linesEnglish: [
      'Wherever tonight’s celebration lands across town, the spotlight belongs to us',
      'Happy birthday buddy—getting a brother like you is pure good luck',
    ],
  },
  {
    title: 'दुःख दूर, ख़ुशी भरपूर',
    titleEnglish: 'Sorrows Far, Joys Overflowing',
    linesHindi: [
      'आज के दिन तुम्हारी किताब से हर उदास शब्द हमेशा को मिट जाए',
      'सिर्फ़ सफलता, सेहत और सुकून के रंग हर पन्ने पर बिखर जाएँ',
    ],
    linesHinglish: [
      'Aaj ke din tumhaari kitaab se har udaas shabd hamesha ko mit jaaye',
      'Sirf safalta, sehat aur sukoon ke rang har panne par bikhar jaayein',
    ],
    linesEnglish: [
      'May every heavy word wash cleanly out of your story starting today',
      'Leaving only bright colors of triumph, health, and calm across every page',
    ],
  },
  {
    title: 'हर सुबह मिले नया उत्साह',
    titleEnglish: 'Fresh Spark Every Morning',
    linesHindi: [
      'आने वाले साल की तीन सौ पैंसठ सुबहें नई उम्मीद जगाएँ तुम्हारे अंदर',
      'हर शाम को तुम दिन भर की खुशियों पर मुस्कुराते हुए सोओ',
    ],
    linesHinglish: [
      'Aane waale saal ki teen sau painsath subhein nayi ummeed jagaayein tumhaare andar',
      'Har shaam ko tum din bhar ki khushiyon par muskuraate hue soo',
    ],
    linesEnglish: [
      'May all three hundred sixty-five dawns ahead spark wonder inside you',
      'And let every evening drift to sleep smiling over bright moments lived',
    ],
  },
  {
    title: 'फूलों के शहर सा सुंदर दिन',
    titleEnglish: 'Day Lovely as a Flower Town',
    linesHindi: [
      'काँटों भरी राहों में भी तुम्हारे क़दम कभी ज़ख्मी न हों यार',
      'तुम्हारे हिस्से में हमेशा खिले हुए बाग़ों का मौसम आए',
    ],
    linesHinglish: [
      'Kaanton bhari raahon mein bhi tumhaare kadam kabhi zakhmi na hon yaar',
      'Tumhaare hisse mein hamesha khile hue baagon ka mausam aaye',
    ],
    linesEnglish: [
      'Even along thorny turns may your footsteps never stumble or bruise',
      'Let blooming spring gardens keep greeting every season of your life',
    ],
  },
  {
    title: 'दिल की गहराई से शुक्रिया',
    titleEnglish: 'Thank You From Heart’s Core',
    linesHindi: [
      'आज सिर्फ़ तुम्हें बधाई देने का नहीं, शुक्रिया कहने का भी दिन है',
      'कि तुमने अपनी दोस्ती और प्यार से मेरे बुरे दिनों को आसान किया',
    ],
    linesHinglish: [
      'Aaj sirf tumhein badhaai dene ka nahin, shukriya kehne ka bhi din hai',
      'Ki tumne apni dosti aur pyar se mere bure dinon ko aasaan kiya',
    ],
    linesEnglish: [
      'Today is not only for sending cake emojis and cheerful confetti',
      'It is for thanking you for softening my darkest days with pure kindness',
    ],
  },
  {
    title: 'चमकता ताज आत्मविश्वास का',
    titleEnglish: 'Shining Crown of Self-Belief',
    linesHindi: [
      'तुम्हारी मेहनत और तुम्हारा सब्र एक दिन इतिहास ज़रूर लिखेगा',
      'जन्मदिन मुबारक उस योद्धा को जो हर हार के बाद और निखरा है',
    ],
    linesHinglish: [
      'Tumhaari mehnat aur tumhaara sabr ek din itihaas zaroor likhega',
      'Janmdin mubaarak us yoddha ko jo har haar ke baad aur nikhra hai',
    ],
    linesEnglish: [
      'Your quiet patience and daily hustle are guaranteed to write history soon',
      'Happy birthday to the fighter who emerged stronger after every test',
    ],
  },
  {
    title: 'दूर शहर से जन्मदिन का पैग़ाम',
    titleEnglish: 'Birthday Dispatch From Miles Away',
    linesHindi: [
      'भले ही आज हम एक मेज़ पर बैठकर केक नहीं काट पा रहे हैं',
      'पर मेरी दुआओं की मोमबत्ती सबसे पहले तुम्हारे लिए ही जली है',
    ],
    linesHinglish: [
      'Bhale hi aaj hum ek mez par baithkar cake nahin kaat pa rahe hain',
      'Par meri duaon ki mombatti sabse pehle tumhaare liye hi jali hai',
    ],
    linesEnglish: [
      'Even though miles keep us from slicing cake around the same table',
      'My candle of heartfelt wishes burned brightest for you first tonight',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'माँ के जन्मदिन की दुआ',
    titleEnglish: 'Warm Wishes on Mom’s Birthday',
    linesHindi: [
      'जिसने अपनी सारी खुशियाँ हमारी थाली में परोस दीं बिना गिने',
      'आज उस प्यारी माँ के जन्मदिन पर दुनिया की हर खुशी उनके नाम',
    ],
    linesHinglish: [
      'Jisne apni saari khushiyaan hamaari thaali mein paros deen bina gine',
      'Aaj us pyari maa ke janmdin par duniya ki har khushi unke naam',
    ],
    linesEnglish: [
      'To the mother who served all her own joys onto our plates without counting',
      'On her birthday today, may every happiness on earth bow at her feet',
    ],
  },
  {
    title: 'पापा के चेहरे की चमक',
    titleEnglish: 'Bright Pride on Dad’s Birthday',
    linesHindi: [
      'धूप में खुद जलकर हमें ठंडी छाँव देने वाले पापा का दिन है आज',
      'ईश्वर से बस यही प्रार्थना है कि आपकी मुस्कान कभी फीकी न हो',
    ],
    linesHinglish: [
      'Dhoop mein khud jalkar humein thandi chhaanv dene waale papa ka din hai aaj',
      'Ishwar se bas yahi prarthana hai ki aapki muskaan kabhi feeki na ho',
    ],
    linesEnglish: [
      'Today celebrates Dad, who stood in harsh sun to keep us cool in shade',
      'Our single prayer is that your proud smile never once dims with time',
    ],
  },
  {
    title: 'हँसी का सिलसिला अनवरत',
    titleEnglish: 'Unbroken Chain of Laughter',
    linesHindi: [
      'उम्र चाहे पच्चीस हो जाए या पचास का पड़ाव आ जाए सामने',
      'तुम्हारी हँसी की खनक बिल्कुल आज की तरह ही खिलती रहे',
    ],
    linesHinglish: [
      'Umr chaahe pachhees ho jaaye ya pachaas ka padaav aa jaaye saamne',
      'Tumhaari hansi ki khanak bilkul aaj ki tarah hi khilti rahe',
    ],
    linesEnglish: [
      'Whether turning twenty-five today or stepping boldly into fifty',
      'May the crisp music of your laughter always ring exactly like this',
    ],
  },
  {
    title: 'आसमां छूने की तैयारी',
    titleEnglish: 'Ready to Touch the Skies',
    linesHindi: [
      'पिछला साल बस एक अभ्यास था तुम्हारे बड़े सफ़र का दोस्त',
      'इस जन्मदिन से दुनिया तुम्हारा असली कमाल देखने वाली है',
    ],
    linesHinglish: [
      'Pichhla saal bas ek abhyaas tha tumhaare bade safar ka dost',
      'Is janmdin se duniya tumhaara asli kamaal dekhne waali hai',
    ],
    linesEnglish: [
      'Last year was merely a warm-up lap before your grandest race',
      'Starting from this birthday onward, the world sees your true brilliance',
    ],
  },
  {
    title: 'अजनबी से जान बनने की कहानी',
    titleEnglish: 'From Stranger to Lifeline',
    linesHindi: [
      'कभी तुम एक अनजान नाम भर थे मेरी ज़िंदगी की भीड़ में',
      'आज तुम्हारे जन्मदिन के बिना मेरा कैलेंडर पूरा ही नहीं होता',
    ],
    linesHinglish: [
      'Kabhi tum ek anjaan naam bhar the meri zindagi ki bheed mein',
      'Aaj tumhaare janmdin ke bina mera calendar poora hi nahin hota',
    ],
    linesEnglish: [
      'Once you were merely an unfamiliar face passing through a crowd',
      'Now my calendar feels completely unfinished without celebrating your date',
    ],
  },
  {
    title: 'चॉकलेट से ज़्यादा मीठी याद',
    titleEnglish: 'Memory Sweeter Than Cocoa',
    linesHindi: [
      'तुम्हारे साथ बिताई हर कॉफ़ी और हर शाम मेरे दिल में क़ैद है',
      'दुआ है अगले साल हम इससे भी ज़्यादा मज़ेदार यादें बनाएँ',
    ],
    linesHinglish: [
      'Tumhaare saath bitaayi har coffee aur har shaam mere dil mein kaid hai',
      'Dua hai agle saal hum isse bhi zyada mazedaar yaadein banaayein',
    ],
    linesEnglish: [
      'Every shared coffee and unhurried evening stays locked inside my heart',
      'Here is to creating twice as many unforgettable tales in the year ahead',
    ],
  },
  {
    title: 'हर दिन सवेरा लेकर आए',
    titleEnglish: 'Each Dawn Bringing Fresh Light',
    linesHindi: [
      'बारिश के बाद जैसे इंद्रधनुष आसमान में नए रंग घोल देता है',
      'वैसे ही यह नया साल तुम्हारी ज़िंदगी में अनगिनत रंग भरे',
    ],
    linesHinglish: [
      'Baarish ke baad jaise indradhanush aasmaan mein naye rang ghol deta hai',
      'Waise hi yeh naya saal tumhaari zindagi mein anginat rang bhare',
    ],
    linesEnglish: [
      'Like a bright rainbow painting the sky clean right after heavy rain',
      'May this birthday wash fresh, vivid hues across your entire horizon',
    ],
  },
  {
    title: 'मेरी जान का ख़ास जश्न',
    titleEnglish: 'Sweetest Day for My Soulmate',
    linesHindi: [
      'तुम्हारे जन्मदिन पर मैं दुनिया भर के गुलाब नहीं भेज सकता शायद',
      'पर हर धड़कन में तुम्हारी खुशी की दुआ ज़रूर भेज रहा हूँ',
    ],
    linesHinglish: [
      'Tumhaare janmdin par main duniya bhar ke gulaab nahin bhej sakta shaayad',
      'Par har dhadkan mein tumhaari khushi ki dua zaroor bhej raha hoon',
    ],
    linesEnglish: [
      'I may not send truckloads of red roses to your doorstep today',
      'Yet every beat of my chest dispatches warm wishes for your happiness',
    ],
  },
  {
    title: 'बेफ़िक्री और जोश का तोहफ़ा',
    titleEnglish: 'Gift of Grit and Ease',
    linesHindi: [
      'तनाव चाहे जितना बढ़े बाहर, तुम्हारा मन शांत समुद्र सा रहे',
      'और हर नई चुनौती के आगे तुम्हारा हौसला पहाड़ सा खड़ा रहे',
    ],
    linesHinglish: [
      'Tanaav chaahe jitna badhe baahar, tumhaara mann shaant samudra sa rahe',
      'Aur har nayi chunauti ke aage tumhaara hausla pahaad sa khada rahe',
    ],
    linesEnglish: [
      'However loudly noise rises outside, may your spirit stay calm as deep seas',
      'And before every challenge, let your courage stand tall as mountains',
    ],
  },
  {
    title: 'सच्चे दिल की शुभकामनाएँ',
    titleEnglish: 'Wishes Straight From Sincerity',
    linesHindi: [
      'दिखावे की महफ़िलों से दूर, एक शांत और सच्चा संदेश तुम्हारे नाम',
      'जन्मदिन मुबारक, रब तुम्हें हर वह सुकून दे जिसके तुम हक़दार हो',
    ],
    linesHinglish: [
      'Dikhaawe ki mehfilon se door, ek shaant aur sachha sandesh tumhaare naam',
      'Janmdin mubaarak, rab tumhein har woh sukoon de jiske tum haqdaar ho',
    ],
    linesEnglish: [
      'Far from noisy show-off crowds, here is one sincere note with your name',
      'Happy birthday—may grace grant every ounce of peace you deserve',
    ],
  },
  {
    title: 'सितारों वाली बर्थडे नाइट',
    titleEnglish: 'Starlit Birthday Night Magic',
    linesHindi: [
      'रात के अँधेरे में जब तुम केक काटकर सबको खिला रहे होते हो',
      'तब लगता है दुनिया की सारी अच्छाई एक ही कमरे में सिमट आई है',
    ],
    linesHinglish: [
      'Raat ke andhere mein jab tum cake kaatkar sabko khila rahe hote ho',
      'Tab lagta hai duniya ki saari achhaai ek hi kamre mein simat aayi hai',
    ],
    linesEnglish: [
      'When midnight glows softly as you slice cake and feed everyone smiling',
      'All goodness on earth feels gathered neatly inside one cozy room',
    ],
  },
  {
    title: 'तुम्हारे बिना सब फीका था',
    titleEnglish: 'Everything Pale Before You',
    linesHindi: [
      'कहीं कोई मज़ाक़ हो या मुश्किल घड़ी की लंबी ख़ामोशी हो',
      'तुम्हारा होना हर मौसम को जीने लायक़ बना देता है यार',
    ],
    linesHinglish: [
      'Kahin koi mazaaq ho ya mushkil ghadi ki lambi khaamoshi ho',
      'Tumhaara hona har mausam ko jeene laayak bana deta hai yaar',
    ],
    linesEnglish: [
      'Whether sharing loud jokes or sitting through heavy silent hours',
      'Simply having you near makes every single season worth living',
    ],
  },
  {
    title: 'जीत का नया अध्याय',
    titleEnglish: 'Fresh Chapter of Victory',
    linesHindi: [
      'आज से तुम्हारी मेहनत के रंग चमकने शुरू हो जाएँ हर तरफ़',
      'तुम जितने सुंदर इंसान हो, तुम्हारा नसीब उससे भी सुंदर हो',
    ],
    linesHinglish: [
      'Aaj se tumhaari mehnat ke rang chamakne shuru ho jaayein har taraf',
      'Tum jitne sundar insaan ho, tumhaara naseeb usse bhi sundar ho',
    ],
    linesEnglish: [
      'May every honest seed you planted start blooming brightly from today',
      'As lovely as your soul is, may your destiny turn out even lovelier',
    ],
  },
  {
    title: 'छोटी खुशियाँ, बड़े जश्न',
    titleEnglish: 'Small Joys, Grand Celebrations',
    linesHindi: [
      'जन्मदिन सिर्फ़ एक दिन का नहीं, अपने होने का जश्न होता है',
      'आज ख़ुद पर गर्व करो कि तुम कितने सुंदर सफ़र पर हो दोस्त',
    ],
    linesHinglish: [
      'Janmdin sirf ek din ka nahin, apne hone ka jashn hota hai',
      'Aaj khud par garv karo ki tum kitne sundar safar par ho dost',
    ],
    linesEnglish: [
      'A birthday is not merely one busy date—it celebrates your whole existence',
      'Feel proud today looking back at how gracefully far you have come',
    ],
  },
  {
    title: 'सुकून भरी मुबारकबाद',
    titleEnglish: 'Peaceful Birthday Greeting',
    linesHindi: [
      'शोरगुल से दूर तुम्हारे चेहरे पर एक गहरी शांति की मुस्कान हो',
      'ईश्वर करे तुम्हारी हर सुबह सुकून और हर शाम संतोष से भरी रहे',
    ],
    linesHinglish: [
      'Shorgul se door tumhaare chehre par ek gehri shaanti ki muskaan ho',
      'Ishwar kare tumhaari har subah sukoon aur har shaam santosh se bhari rahe',
    ],
    linesEnglish: [
      'Away from all chaos, may deep calm rest gently across your smile',
      'May each morning begin in ease and every evening settle in gratitude',
    ],
  },
  {
    title: 'तस्वीरों से बाहर सच्चा प्यार',
    titleEnglish: 'Real Love Beyond Filters',
    linesHindi: [
      'सोशल मीडिया पर स्टेटस लगाने वाले तो बहुत मिल जाएँगे तुम्हें आज',
      'पर बुरे वक़्त में हाथ थामने वाला यह दोस्त ताउम्र साथ रहेगा',
    ],
    linesHinglish: [
      'Social media par status lagaane waale to bahut mil jaayenge tumhein aaj',
      'Par bure waqt mein haath thaamne waala yeh dost taa-umr saath rahega',
    ],
    linesEnglish: [
      'Dozens will post glossy throwback photos on social feeds for you today',
      'Yet this friend holding your hand through storms stays forever offline too',
    ],
  },
  {
    title: 'प्यार की सबसे मीठी बधाई',
    titleEnglish: 'Sweetest Wish Wrapped in Love',
    linesHindi: [
      'दिल की सारी कड़वाहट भूलकर बस एक प्यारी मुस्कान बिखेर दो आज',
      'तुम्हारे जन्मदिन पर पूरी क़ायनात तुम्हें खुश रखने में लग जाए',
    ],
    linesHinglish: [
      'Dil ki saari kadwaahat bhoolkar bas ek pyari muskaan bikher do aaj',
      'Tumhaare janmdin par poori kaayanaat tumhein khush rakhne mein lag jaaye',
    ],
    linesEnglish: [
      'Drop every tiny grudge aside and scatter one glowing smile today',
      'May the entire universe conspire softly to keep your spirit bright',
    ],
  },
  {
    title: 'मेरी जान को सलाम',
    titleEnglish: 'Birthday Cheers for My Heart',
    linesHindi: [
      'जब तुम मुस्कुराते हो तो मेरी आधी चिंताएँ अपने आप गायब हो जाती हैं',
      'इसीलिए हर जन्मदिन पर मैं सबसे ज़्यादा तुम्हारी खुशी माँगता हूँ',
    ],
    linesHinglish: [
      'Jab tum muskuraate ho to meri aadhi chintaaein apne aap gaayab ho jaati hain',
      'Isiliye har janmdin par main sabse zyada tumhaari khushi maangta hoon',
    ],
    linesEnglish: [
      'The second your face lights up, half my own worries vanish instantly',
      'That is why every birthday I ask above all for your lasting joy',
    ],
  },
  {
    title: 'नए रंगों से भरा साल',
    titleEnglish: 'Year Painted in Bright Hues',
    linesHindi: [
      'चुनौतियाँ भले आएँ रास्ते में, पर तुम उनसे भी सुंदर राह बना लो',
      'इस जन्मदिन पर तुम्हारे हौसलों को नई ताक़त और उड़ान मिले',
    ],
    linesHinglish: [
      'Chunautiyaan bhale aayein raaste mein, par tum unse bhi sundar raah bana lo',
      'Is janmdin par tumhaare hauslon ko nayi taaqat aur udaan mile',
    ],
    linesEnglish: [
      'Even if detours cross your lane, may you turn them into scenic roads',
      'May this birthday pour fresh vigor and wings into your boldest stride',
    ],
  },
  {
    title: 'हर कदम पर खुशियाँ बिखरें',
    titleEnglish: 'Joy Scattered Along Every Step',
    linesHindi: [
      'फूलों से लदी राह हो और चेहरे पर नूर की बरसात होती रहे',
      'जन्मदिन मुबारक हो यार, तुम्हारी हर शाम गुलज़ार होती रहे',
    ],
    linesHinglish: [
      'Phoolon se ladi raah ho aur chehre par noor ki barsaat hoti rahe',
      'Janmdin mubaarak ho yaar, tumhaari har shaam gulzaar hoti rahe',
    ],
    linesEnglish: [
      'May flower-lined pathways greet you and radiance shower every step',
      'Happy birthday dear friend—may every evening of yours bloom bright',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'दसियों साल की यारी सलामत',
    titleEnglish: 'Celebrating Decades of Friendship',
    linesHindi: [
      'कितने जन्मदिन साथ मना लिए हमने अब तक गिनती भी भूल गया हूँ',
      'बस इतना पता है कि बुढ़ापे में भी हम ऐसे ही केक काटेंगे',
    ],
    linesHinglish: [
      'Kitne janmdin saath mana liye humne ab tak ginti bhi bhool gaya hoon',
      'Bas itna pata hai ki budhaape mein bhi hum aise hi cake kaatenge',
    ],
    linesEnglish: [
      'I have already lost count of how many birthdays we celebrated side by side',
      'All I know is we will still be slicing cake like this at eighty',
    ],
  },
  {
    title: 'रंगीन गुब्बारे, उजले अरमान',
    titleEnglish: 'Bright Balloons, Clear Hopes',
    linesHindi: [
      'आज हवा में उड़ते हर गुब्बारे के साथ एक नया सपना जोड़ दो तुम',
      'देखना आने वाला साल तुम्हारे सारे इरादे सच करके दिखाएगा',
    ],
    linesHinglish: [
      'Aaj hawa mein udte har gubbaare ke saath ek naya sapna jod do tum',
      'Dekhna aane waala saal tumhaare saare iraade sach karke dikhaayega',
    ],
    linesEnglish: [
      'Tie one sparkling new hope onto each colorful balloon rising today',
      'Watch how warmly this coming year brings your intentions to life',
    ],
  },
  {
    title: 'तारीख़ जो दिल पर लिखी है',
    titleEnglish: 'Date Etched Upon My Heart',
    linesHindi: [
      'फ़ोन के रिमाइंडर की ज़रूरत नहीं पड़ती मुझे तुम्हारा दिन याद रखने को',
      'यह तारीख़ तो बरसों से मेरे दिल के कैलेंडर पर सुनहरी लिखी है',
    ],
    linesHinglish: [
      'Phone ke reminder ki zaroorat nahin padti mujhe tumhaara din yaad rakhne ko',
      'Yeh taareekh to barson se mere dil ke calendar par sunahari likhi hai',
    ],
    linesEnglish: [
      'I never need digital phone alerts to remember your special morning',
      'This date has been etched in gold across my heart for years',
    ],
  },
  {
    title: 'अधूरी तमन्नाओं की पूर्ति',
    titleEnglish: 'Fulfillment of Quiet Dreams',
    linesHindi: [
      'जो बात तुम किसी से कह नहीं पाते चुपचाप अपने मन में रखते हो',
      'ऊपरवाला इस जन्मदिन पर वह ख्वाहिश भी तुम्हारी झोली में डाल दे',
    ],
    linesHinglish: [
      'Jo baat tum kisi se keh nahin paate chupchaap apne mann mein rakhte ho',
      'Ooparwaala is janmdin par woh khwaahish bhi tumhaari jholi mein daal de',
    ],
    linesEnglish: [
      'Even those unspoken wishes you guard quietly behind your smile',
      'May heaven gently place every single one into your palms this year',
    ],
  },
  {
    title: 'खूबसूरत तोहफ़ा तुम खुद हो',
    titleEnglish: 'You Yourself Are the Gift',
    linesHindi: [
      'आज हम तुम्हें क्या तोहफ़ा दें यह सोचकर परेशान हो जाते हैं हर बार',
      'क्योंकि तुम खुद इस दुनिया को मिला सबसे खूबसूरत तोहफ़ा हो',
    ],
    linesHinglish: [
      'Aaj hum tumhein kya tohfa dein yeh sochkar pareshaan ho jaate hain har baar',
      'Kyunki tum khud is duniya ko mila sabse khoobsurat tohfa ho',
    ],
    linesEnglish: [
      'Every year we scratch our heads wondering what gift could fit you right',
      'Because you yourself remain the finest present this world ever received',
    ],
  },
  {
    title: 'आनंद और सेहत का संगम',
    titleEnglish: 'Harmony of Joy and Health',
    linesHindi: [
      'दौलत और शोहरत तो मेहनत के साथ पीछे-पीछे चल ही आती है',
      'दुआ है पहले तुम्हारी सेहत और मन का सुकून हमेशा सलामत रहे',
    ],
    linesHinglish: [
      'Daulat aur shohrat to mehnat ke saath peechhe-peechhe chal hi aati hai',
      'Dua hai pehle tumhaari sehat aur mann ka sukoon hamesha salaamat rahe',
    ],
    linesEnglish: [
      'Wealth and applause follow naturally behind honest daily effort',
      'First and foremost, may sturdy health and deep peace stay beside you',
    ],
  },
  {
    title: 'अंधेरों से उजालों की ओर',
    titleEnglish: 'Stepping Out Into Sunshine',
    linesHindi: [
      'अगर बीते महीनों में कोई ग़म या उलझन रही भी हो जीवन में',
      'तो आज के सूरज के साथ हर अंधेरे को अलविदा कह दो यार',
    ],
    linesHinglish: [
      'Agar beete maheenon mein koi gham ya uljhan rahi bhi ho jeevan mein',
      'To aaj ke sooraj ke saath har andhere ko alvida keh do yaar',
    ],
    linesEnglish: [
      'If past months carried quiet storms or tangled sleepless nights',
      'Bid farewell to every shadow right alongside today’s rising sun',
    ],
  },
  {
    title: 'मुस्कुराते चेहरों की टोली',
    titleEnglish: 'Squad of Smiling Faces',
    linesHindi: [
      'जब जन्मदिन पर सारे पुराने यार एक छत के नीचे इकट्ठा होते हैं',
      'तब लगता है वक़्त अपनी सबसे खूबसूरत रफ़्तार पर चल रहा है',
    ],
    linesHinglish: [
      'Jab janmdin par saare puraane yaar ek chhat ke neeche ikattha hote hain',
      'Tab lagta hai waqt apni sabse khoobsurat raftaar par chal raha hai',
    ],
    linesEnglish: [
      'When old friends squeeze back together under one roof for your cake',
      'Time seems to move at its sweetest, kindest pace on earth',
    ],
  },
  {
    title: 'पहली किरण संग शुभ आशीष',
    titleEnglish: 'Morning Blessings With First Light',
    linesHindi: [
      'ताज़ी सुबह, फूलों की महक और दिल से निकली लाखों दुआएँ',
      'तुम्हारे जन्मदिन को हमेशा-हमेशा के लिए यादगार बना दें',
    ],
    linesHinglish: [
      'Taazi subah, phoolon ki mehak aur dil se nikli laakhon duaaein',
      'Tumhaare janmdin ko hamesha-hamesha ke liye yaadgaar bana dein',
    ],
    linesEnglish: [
      'Crisp morning breeze, garden fragrance, and a million heartfelt prayers',
      'Come together today to mark your birthday unforgettable forever',
    ],
  },
  {
    title: 'चेहरे पर नूर, दिल में सुकून',
    titleEnglish: 'Glow on Face, Calm in Heart',
    linesHindi: [
      'दुआ है हर आने वाला साल तुम्हारे चेहरे पर नया नूर लेकर आए',
      'और अंदर से तुम हमेशा शांत, संतुष्ट और खुशहाल बने रहो',
    ],
    linesHinglish: [
      'Dua hai har aane waala saal tumhaare chehre par naya noor lekar aaye',
      'Aur andar se tum hamesha shaant, santusht aur khushhaal bane raho',
    ],
    linesEnglish: [
      'May every turning year paint a warmer glow across your face',
      'While leaving your spirit quietly grounded, grateful, and thriving',
    ],
  },
  {
    title: 'ज़िंदगी के मंच का सितारा',
    titleEnglish: 'Star Shines Bright on Stage',
    linesHindi: [
      'ज़िंदगी के इस बड़े मंच पर तुम्हारा किरदार सबसे प्यारा है यार',
      'जन्मदिन मुबारक, हर सीन में तुम्हारे लिए तालियाँ बजती रहें',
    ],
    linesHinglish: [
      'Zindagi ke is bade manch par tumhaara kirdaar sabse pyara hai yaar',
      'Janmdin mubaarak, har scene mein tumhaare liye taaliyaan bajti rahein',
    ],
    linesEnglish: [
      'On life’s grand stage, your kindness plays the most lovable role of all',
      'Happy birthday—may warm applause greet you in every upcoming scene',
    ],
  },
  {
    title: 'दुनिया की सबसे बड़ी खुशी',
    titleEnglish: 'Grandest Joy on Earth',
    linesHindi: [
      'तुम्हारी मुस्कान देखने के लिए मैं कुछ भी कर सकता हूँ दोस्त',
      'आज फिर से केक पर फूँक मारो और दुनिया जीत लेने को तैयार हो जाओ',
    ],
    linesHinglish: [
      'Tumhaari muskaan dekhne ke liye main kuch bhi kar sakta hoon dost',
      'Aaj phir se cake par phoonk maaro aur duniya jeet lene ko taiyaar ho jaao',
    ],
    linesEnglish: [
      'Seeing a real grin break across your face makes any effort worthwhile',
      'Blow out those candles bright and step out ready to own the year',
    ],
  },
  {
    title: 'चमकते ख्वाबों की बारात',
    titleEnglish: 'Parade of Sparkling Dreams',
    linesHindi: [
      'जन्मदिन की इस रात में तुम्हारी आँखों में सिर्फ़ उम्मीद चमके',
      'आने वाला हर महीना तुम्हारे लिए नई सफलता की सौगात बने',
    ],
    linesHinglish: [
      'Janmdin ki is raat mein tumhaari aankhon mein sirf ummeed chamke',
      'Aane waala har maheena tumhaare liye nayi safalta ki saugaat bane',
    ],
    linesEnglish: [
      'Tonight let pure golden hope shimmer steadily behind your eyes',
      'May each new month unfold like a fresh triumph waiting to be unwrapped',
    ],
  },
  {
    title: 'अपनों के बीच सबसे प्यारे',
    titleEnglish: 'Beloved by Every Familiar Face',
    linesHindi: [
      'चाहे ऑफिस हो, कॉलेज हो या परिवार का प्यारा आँगन हो',
      'हर जगह लोग तुम्हारे जन्मदिन पर दिल से खुश नज़र आते हैं',
    ],
    linesHinglish: [
      'Chaahe office ho, college ho ya parivaar ka pyara aangan ho',
      'Har jagah log tumhaare janmdin par dil se khush nazar aate hain',
    ],
    linesEnglish: [
      'Whether among office teammates, college pals, or family around home',
      'Everyone genuinely lights up smiling whenever your birthday rolls around',
    ],
  },
  {
    title: 'हँसी से महकता पूरा घर',
    titleEnglish: 'House Blooming With Your Laugh',
    linesHindi: [
      'आज घर की दीवारों में भी अलग सी चमक दिखाई दे रही है',
      'आख़िर उस इंसान का जन्मदिन है जो सबका ख़्याल रखता है',
    ],
    linesHinglish: [
      'Aaj ghar ki deewaaron mein bhi alag si chamak dikhaayi de rahi hai',
      'Aakhir us insaan ka janmdin hai jo sabka khayaal rakhta hai',
    ],
    linesEnglish: [
      'Even the walls around the house seem to beam a little warmer today',
      'After all, it celebrates the person who cares endlessly for everyone',
    ],
  },
  {
    title: 'मीठा केक, मीठी ज़िंदगी',
    titleEnglish: 'Sweet Cake, Sweeter Years Ahead',
    linesHindi: [
      'केक का पहला टुकड़ा तुम्हारे नाम और आख़िरी भी तुम्हारे ही नाम',
      'बस ज़िंदगी की हर कड़वाहट हम सब मिलकर दूर कर दें तुम्हारी',
    ],
    linesHinglish: [
      'Cake ka pehla tukda tumhaare naam aur aakhiri bhi tumhaare hi naam',
      'Bas zindagi ki har kadwaahat hum sab milkar door kar dein tumhaari',
    ],
    linesEnglish: [
      'The very first slice goes to you—and honestly the last slice too',
      'Let us share and clear away any bitter moments along your path',
    ],
  },
  {
    title: 'सितारों से उजला नसीब',
    titleEnglish: 'Fortune Brighter Than Stars',
    linesHindi: [
      'चाँद-तारों की रोशनी से भी ज़्यादा उजला रहे तुम्हारा हर क़दम',
      'जन्मदिन की ढेरों शुभकामनाएँ मेरे सबसे ख़ास साथी को',
    ],
    linesHinglish: [
      'Chaand-taaron ki roshni se bhi zyada ujala rahe tumhaara har kadam',
      'Janmdin ki dheron shubhkaamnayein mere sabse khaas saathi ko',
    ],
    linesEnglish: [
      'May every stride you take glow fairer than moonlight and constellations',
      'Warmest birthday blessings to the finest companion anyone could ask for',
    ],
  },
  {
    title: 'मेरी जान का हर साल अनमोल',
    titleEnglish: 'Every Year of Yours Priceless',
    linesHindi: [
      'तुम्हारे साथ बिताया एक-एक साल किसी अनमोल मोती जैसा लगता है',
      'दुआ है यह माला यूँ ही प्यार और खुशियों से सजती रहे',
    ],
    linesHinglish: [
      'Tumhaare saath bitaaya ek-ek saal kisi anmol moti jaisa lagta hai',
      'Dua hai yeh maala yoon hi pyar aur khushiyon se sajti rahe',
    ],
    linesEnglish: [
      'Every single year walked beside you feels like stringing a rare pearl',
      'May this radiant necklace keep growing richer with love and joy',
    ],
  },
  {
    title: 'दिल से निकली अनमोल दुआ',
    titleEnglish: 'Priceless Wish Straight From Soul',
    linesHindi: [
      'कोई बहुत महँगा गुलदस्ता नहीं, दो सच्ची लाइनें लिख लाया हूँ आज',
      'तुम हमेशा खुश रहो, मेरी हर सुबह की यही पहली दुआ है',
    ],
    linesHinglish: [
      'Koi bahut mehnga guldasta nahin, do sachhi linein likh laaya hoon aaj',
      'Tum hamesha khush raho, meri har subah ki yahi pehli dua hai',
    ],
    linesEnglish: [
      'Not a towering luxury bouquet, just two honest lines penned for you',
      'Stay genuinely happy always—that remains my very first morning wish',
    ],
  },
  {
    title: 'कल से बेहतर हर आज हो',
    titleEnglish: 'Today Brighter Than Yesterday',
    linesHindi: [
      'न उम्र का डर, न बीते कल का कोई पछतावा रखना दिल में आज',
      'तुम्हारा हर नया साल पिछले साल से ज़्यादा हसीन होने वाला है',
    ],
    linesHinglish: [
      'Na umr ka dar, na beete kal ka koi pachtaawa rakhna dil mein aaj',
      'Tumhaara har naya saal pichhle saal se zyada haseen hone waala hai',
    ],
    linesEnglish: [
      'Carry zero fear of growing older and zero regret from yesterday',
      'Every single new year of yours is set to outshine the one before',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'गुलाल सी खिली सुबह',
    titleEnglish: 'Morning Vibrant as Celebration',
    linesHindi: [
      'रंगों की तरह खिल उठे तुम्हारा हर आने वाला दिन इस साल में',
      'जन्मदिन पर बस यही चाहत है कि तुम्हारा मन हमेशा नाचता रहे',
    ],
    linesHinglish: [
      'Rangon ki tarah khil uthe tumhaara har aane waala din is saal mein',
      'Janmdin par bas yahi chaahat hai ki tumhaara mann hamesha naachta rahe',
    ],
    linesEnglish: [
      'May every approaching day burst alive with vivid, celebratory color',
      'My birthday wish is simply that your heart never stops dancing light',
    ],
  },
  {
    title: 'खूबसूरत उम्र का नया पड़ाव',
    titleEnglish: 'Graceful New Milestone Reached',
    linesHindi: [
      'आज तुम पहले से ज़्यादा समझदार और पहले से ज़्यादा प्यारे हो गए हो',
      'जीवन के इस नए पड़ाव पर तुम्हें दिल से ढेर सारी बधाई',
    ],
    linesHinglish: [
      'Aaj tum pehle se zyada samajhdaar aur pehle se zyada pyare ho gaye ho',
      'Jeevan ke is naye padaav par tumhein dil se dher saari badhaai',
    ],
    linesEnglish: [
      'Today finds you wiser than yesterday and kinder than ever before',
      'Warmest congratulations as you step onto this bright new milestone',
    ],
  },
  {
    title: 'दिल की धड़कन सा ख़ास दिन',
    titleEnglish: 'Day Close as a Heartbeat',
    linesHindi: [
      'चाहे जितनी भी व्यस्त रहे मेरी दुनिया अपने कामों के बीच में',
      'तुम्हारे जन्मदिन पर हर काम अपने आप रुक जाता है मुस्कान के लिए',
    ],
    linesHinglish: [
      'Chaahe jitni bhi vyast rahe meri duniya apne kaamon ke beech mein',
      'Tumhaare janmdin par har kaam apne aap ruk jaata hai muskaan ke liye',
    ],
    linesEnglish: [
      'No matter how endlessly my calendar overflows with work deadlines',
      'Everything pauses effortlessly on your birthday just to celebrate you',
    ],
  },
  {
    title: 'बचपन वाली पार्टी की याद',
    titleEnglish: 'Sweet Nostalgia of Childhood Parties',
    linesHindi: [
      'कागज़ की टोपी, समोसे की प्लेट और वो मीठी टॉफ़ी बाँटना स्कूल में',
      'आज के बड़े केक में भी उस बचपन की ख़ुशी ज़रूर बसी है',
    ],
    linesHinglish: [
      'Kaagaz ki topi, samose ki plate aur woh meethi toffee baantna school mein',
      'Aaj ke bade cake mein bhi us bachpan ki khushi zaroor basi hai',
    ],
    linesEnglish: [
      'Paper party cones, samosa plates, and passing candies around class',
      'Still sprinkle their innocent magic over every tall birthday cake today',
    ],
  },
  {
    title: 'हर मुश्किल पर भारी मुस्कान',
    titleEnglish: 'Smile Stronger Than Any Hurdle',
    linesHindi: [
      'तेरी मुस्कान में वो ताक़त है जो बड़े-बड़े तूफ़ानों को झुका दे',
      'जन्मदिन मुबारक दोस्त, तेरी यह हिम्मत कभी कम न हो पाए',
    ],
    linesHinglish: [
      'Teri muskaan mein woh taaqat hai jo bade-bade toofaanon ko jhuka de',
      'Janmdin mubaarak dost, teri yeh himmat kabhi kam na ho paaye',
    ],
    linesEnglish: [
      'Your smile carries quiet strength capable of taming fierce storms',
      'Happy birthday friend—may that fearless spirit never once wear thin',
    ],
  },
  {
    title: 'संगीत और खुशियों की बारिश',
    titleEnglish: 'Shower of Music and Joy',
    linesHindi: [
      'आज तुम्हारी गली में खुशियों के बादल झूमकर बरसने वाले हैं',
      'भीग जाओ इस प्यार में क्योंकि आज तुम्हारा सबसे बड़ा दिन है',
    ],
    linesHinglish: [
      'Aaj tumhaari gali mein khushiyon ke baadal jhoomkar barasne waale hain',
      'Bheeg jaao is pyar mein kyunki aaj tumhaara sabse bada din hai',
    ],
    linesEnglish: [
      'Clouds bursting with joy and music are rolling right down your street',
      'Soak up every drop of affection because today belongs completely to you',
    ],
  },
  {
    title: 'मेरी दुआ में हर रोज़ तुम',
    titleEnglish: 'Inside Every Daily Prayer of Mine',
    linesHindi: [
      'सिर्फ़ जन्मदिन पर ही नहीं, साल के हर दिन तुम्हारी खैर माँगते हैं',
      'बस आज के दिन सबके सामने ज़ोर से मुबारक कहने का बहाना मिला है',
    ],
    linesHinglish: [
      'Sirf janmdin par hi nahin, saal ke har din tumhaari khair maangte hain',
      'Bas aaj ke din sabke saamne zor se mubaarak kehne ka bahaana mila hai',
    ],
    linesEnglish: [
      'Not just on this one date, I wish you wellness every single morning',
      'Today simply hands us an excuse to cheer it loudly before the world',
    ],
  },
  {
    title: 'जीवनसाथी को जन्मदिन प्यार',
    titleEnglish: 'Birthday Love to My Life Partner',
    linesHindi: [
      'तुम्हारे हाथ में हाथ रखकर हर उम्र गुज़ारने का वादा आज फिर ताज़ा है',
      'जन्मदिन मुबारक मेरे हमसफ़र, तुम हो तो हर सफ़र जन्नत सा है',
    ],
    linesHinglish: [
      'Tumhaare haath mein haath rakhkar har umr guzaarne ka waada aaj phir taaza hai',
      'Janmdin mubaarak mere hamsafar, tum ho to har safar jannat sa hai',
    ],
    linesEnglish: [
      'Walking every decade hand in hand with you feels freshly vowed today',
      'Happy birthday my partner—with you beside me, every mile feels like heaven',
    ],
  },
  {
    title: 'अनमोल हीरे जैसा यार',
    titleEnglish: 'A Friend Rare as a Diamond',
    linesHindi: [
      'कोयले की खान में बड़ी मुश्किल से मिलता है कोई सच्चा हीरा यार',
      'तुम मेरे जीवन का वही अनमोल रत्न हो, जन्मदिन की हार्दिक बधाई',
    ],
    linesHinglish: [
      'Koyle ki khaan mein badi mushkil se milta hai koi sachha heera yaar',
      'Tum mere jeevan ka wahi anmol ratn ho, janmdin ki haardik badhaai',
    ],
    linesEnglish: [
      'A genuine diamond is rare to uncover anywhere in this noisy crowd',
      'You are that priceless gem in my life—happiest birthday to you',
    ],
  },
  {
    title: 'सफलता का नया सूरज',
    titleEnglish: 'New Sun of Rising Success',
    linesHindi: [
      'तुम्हारे सपनों के आसमान में आज नया सूरज उग रहा है चमकता हुआ',
      'इस साल हर वह दरवाज़ा खुले जो तुम्हारी कामयाबी की ओर जाता है',
    ],
    linesHinglish: [
      'Tumhaare sapnon ke aasmaan mein aaj naya sooraj ug raha hai chamakta hua',
      'Is saal har woh darwaaza khule jo tumhaari kaamyaabi ki or jaata hai',
    ],
    linesEnglish: [
      'A brilliant new sun rises smoothly across the sky of your ambitions',
      'May every single door leading toward triumph swing wide open this year',
    ],
  },
  {
    title: 'मीठे पलों की लंबी कतार',
    titleEnglish: 'Endless Line of Sweet Moments',
    linesHindi: [
      'ख़ुशियों की ट्रेन कभी तुम्हारे स्टेशन से खाली न गुज़रे दोस्त',
      'हर डिब्बे में हँसी, प्यार और अपनों की दुआएँ भरी मिलें तुम्हें',
    ],
    linesHinglish: [
      'Khushiyon ki train kabhi tumhaare station se khaali na guzre dost',
      'Har dibbe mein hansi, pyar aur apnon ki duaaein bhari milein tumhein',
    ],
    linesEnglish: [
      'May the train of happiness never once roll past your platform empty',
      'Let every coach pull in packed with laughter, love, and warm wishes',
    ],
  },
  {
    title: 'मासूमियत से सजी उम्र',
    titleEnglish: 'Age Graced With Pure Heart',
    linesHindi: [
      'दुनिया की चालाकियाँ सीखकर भी जिसने अपना दिल साफ़ रखा है',
      'उस प्यारे इंसान को जन्मदिन पर सलाम और ढेर सारा प्यार',
    ],
    linesHinglish: [
      'Duniya ki chaalaakiyaan seekhkar bhi jisne apna dil saaf rakha hai',
      'Us pyare insaan ko janmdin par salaam aur dher saara pyar',
    ],
    linesEnglish: [
      'Someone who sees how clever the world gets yet keeps their heart clean',
      'Deserves endless love and the warmest salute on their birthday today',
    ],
  },
  {
    title: 'जन्मदिन की रील वाली शाम',
    titleEnglish: 'Birthday Reel Worth Remembering',
    linesHindi: [
      'कैमरा ऑन करो, लाइट जलाओ और एक प्यारी सी मुस्कान दे दो यार',
      'क्योंकि आज की यह शाम हमेशा के लिए सबसे खास रील बनने वाली है',
    ],
    linesHinglish: [
      'Camera on karo, light jalaao aur ek pyari si muskaan de do yaar',
      'Kyunki aaj ki yeh shaam hamesha ke liye sabse khaas reel banne waali hai',
    ],
    linesEnglish: [
      'Hit record, switch on the warm lights, and flash your best grin',
      'Tonight is turning into our favorite birthday memory clip ever captured',
    ],
  },
  {
    title: 'नए इरादों की सुबह',
    titleEnglish: 'Morning of Bold Intentions',
    linesHindi: [
      'जो बीत गया उस पर अफसोस नहीं, जो आ रहा है उस पर यक़ीन रखो',
      'तुम्हारे जन्मदिन से शुरू होने वाला हर दिन कमाल होने वाला है',
    ],
    linesHinglish: [
      'Jo beet gaya us par afsos nahin, jo aa raha hai us par yakeen rakho',
      'Tumhaare janmdin se shuru hone waala har din kamaal hone waala hai',
    ],
    linesEnglish: [
      'No sighs over months behind you; hold fierce faith for what arrives next',
      'Every single morning unfolding from your birthday onward looks bright',
    ],
  },
  {
    title: 'दीपक सा उजला जीवन',
    titleEnglish: 'Life Glowing Like a Lamp',
    linesHindi: [
      'एक छोटा सा दीया जैसे पूरे घर का अँधेरा पी जाता है चुपचाप',
      'वैसे ही तुम अपनी मुस्कान से सबकी उदासी दूर करते रहते हो',
    ],
    linesHinglish: [
      'Ek chhota sa diya jaise poore ghar ka andhera pee jaata hai chupchaap',
      'Waise hi tum apni muskaan se sabki udaasi door karte rehte ho',
    ],
    linesEnglish: [
      'Just like a small clay lamp quietly chases darkness out of every corner',
      'Your cheerful presence lifts gloom out of every heart around you',
    ],
  },
  {
    title: 'मोमबत्ती बुझाने से पहले विश',
    titleEnglish: 'Wish Before Blowing the Flame',
    linesHindi: [
      'चुपके से जो भी माँगो आज केक के सामने आँख बंद करके तुम',
      'दुआ है अगली सालगिरह से पहले वह खुशी तुम्हारे हाथों में हो',
    ],
    linesHinglish: [
      'Chupke se jo bhi maango aaj cake ke saamne aankh band karke tum',
      'Dua hai agli saalgirah se pehle woh khushi tumhaare haathon mein ho',
    ],
    linesEnglish: [
      'Whatever quiet wish you whisper before blowing out the flame tonight',
      'May it sit proudly inside your hands well before your next birthday',
    ],
  },
  {
    title: 'हल्का मन, खुली उड़ान',
    titleEnglish: 'Untroubled Heart, Open Flight',
    linesHindi: [
      'कोई बोझ न रहे कंधों पर, कोई मलाल न रहे मन के भीतर कभी',
      'तुम पंछी की तरह आज़ाद होकर अपने सपनों के आकाश में उड़ो',
    ],
    linesHinglish: [
      'Koi bojh na rahe kandhon par, koi malaal na rahe mann ke bheetar kabhi',
      'Tum panchhi ki tarah aazaad hokar apne sapnon ke aakaash mein udo',
    ],
    linesEnglish: [
      'May no heavy burden press your shoulders and no regret weigh your soul',
      'Spread your wings free as a bird across the open sky of your dreams',
    ],
  },
  {
    title: 'बधाई शब्दों से परे',
    titleEnglish: 'Greetings Beyond Plain Words',
    linesHindi: [
      'शुभकामना के दो शब्द तो हर कोई भेज देता है फॉर्मेलिटी में आज',
      'पर मेरी दुआ में तुम्हारी पूरे जीवन की खुशहाली शामिल है',
    ],
    linesHinglish: [
      'Shubhkaamna ke do shabd to har koi bhej deta hai formality mein aaj',
      'Par meri dua mein tumhaari poore jeevan ki khushhaali shaamil hai',
    ],
    linesEnglish: [
      'Anybody can copy-paste quick two-word birthday greetings out of habit',
      'My prayers gather an entire lifetime of bright fortune for you',
    ],
  },
  {
    title: 'रिश्ते का सबसे प्यारा उत्सव',
    titleEnglish: 'Sweetest Festival of Our Bond',
    linesHindi: [
      'तुम्हारा जन्मदिन मेरे लिए किसी बड़े त्योहार से कम नहीं होता',
      'क्योंकि आज ही वह ख़ास इंसान इस धरती पर आया था मेरे लिए',
    ],
    linesHinglish: [
      'Tumhaara janmdin mere liye kisi bade tyohaar se kam nahin hota',
      'Kyunki aaj hi woh khaas insaan is dharti par aaya tha mere liye',
    ],
    linesEnglish: [
      'Your birthday feels no smaller to me than the grandest festival night',
      'Because today is when heaven sent someone truly irreplaceable my way',
    ],
  },
  {
    title: 'प्यार भरा आख़िरी तोहफ़ा नहीं, शुरुआत',
    titleEnglish: 'Not Just a Gift, a New Beginning',
    linesHindi: [
      'आज से एक और खूबसूरत साल तुम्हारा इंतज़ार कर रहा है बाहें फैलाए',
      'हँसते हुए स्वागत करो हर पल का, क्योंकि यह साल तुम्हारा है',
    ],
    linesHinglish: [
      'Aaj se ek aur khoobsurat saal tumhaara intezaar kar raha hai baahein phailaaye',
      'Hanste hue swagat karo har pal ka, kyunki yeh saal tumhaara hai',
    ],
    linesEnglish: [
      'A gorgeous new year waits right ahead with wide-open arms for you',
      'Greet every single hour laughing, because this whole chapter is yours',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'चाँद की रोशनी सा आशीर्वाद',
    titleEnglish: 'Moonlit Blessings All Around',
    linesHindi: [
      'रात के सन्नाटे में भी तुम्हारे हिस्से में चाँदनी बरसती रहे',
      'ईश्वर करे तुम्हारी आँखों के ख्वाब हमेशा हक़ीक़त बनते रहें',
    ],
    linesHinglish: [
      'Raat ke sannaate mein bhi tumhaare hisse mein chaandni barasti rahe',
      'Ishwar kare tumhaari aankhon ke khwaab hamesha hakeekat bante rahein',
    ],
    linesEnglish: [
      'Even on quiet nights may silver moonlight shower softly over your roof',
      'And let every dream behind your eyes keep turning sweetly real',
    ],
  },
  {
    title: 'दोस्त के बिना पार्टी अधूरी',
    titleEnglish: 'No Party Complete Without You',
    linesHindi: [
      'तुम हो तो महफ़िल में चार चाँद अपने आप लग जाते हैं यार',
      'जन्मदिन मुबारक उस शख्स को जो सबकी ज़िंदगी में रंग भरता है',
    ],
    linesHinglish: [
      'Tum ho to mehfil mein chaar chaand apne aap lag jaate hain yaar',
      'Janmdin mubaarak us shakhs ko jo sabki zindagi mein rang bharta hai',
    ],
    linesEnglish: [
      'Wherever you step in, the entire room instantly triples in charm',
      'Happy birthday to the soul who splashes color across everyone’s days',
    ],
  },
  {
    title: 'दिल के सबसे क़रीब की तारीख़',
    titleEnglish: 'Date Closest to My Heart',
    linesHindi: [
      'साल में तीन सौ पैंसठ दिन आते-जाते रहते हैं अपनी चाल से',
      'पर आज के दिन दिल अपने आप तुम्हारी सलामती की दुआ माँगता है',
    ],
    linesHinglish: [
      'Saal mein teen sau painsath din aate-jaate rehte hain apni chaal se',
      'Par aaj ke din dil apne aap tumhaari salamati ki dua maangta hai',
    ],
    linesEnglish: [
      'Three hundred sixty-five ordinary days spin past at their steady pace',
      'Yet today my heart instinctively whispers prayers for your peace',
    ],
  },
  {
    title: 'आने वाले कल की सुनहरी किरण',
    titleEnglish: 'Golden Ray of Tomorrow',
    linesHindi: [
      'तुम्हारी सादगी और सच्चाई तुम्हें हर भीड़ से ऊपर ले जाएगी',
      'यह नया साल तुम्हारे नाम कई बड़ी खुशियाँ लिखने वाला है',
    ],
    linesHinglish: [
      'Tumhaari saadgi aur sachhaai tumhein har bheed se oopar le jaayegi',
      'Yeh naya saal tumhaare naam kai badi khushiyaan likhne waala hai',
    ],
    linesEnglish: [
      'Your grace and honesty will always lift you cleanly above the crowd',
      'This new lap holds grand, sunlit victories already bearing your name',
    ],
  },
  {
    title: 'गुलाब जैसी महकती मुस्कान',
    titleEnglish: 'Smile Fragrant as Morning Roses',
    linesHindi: [
      'सुबह के गुलाब की तरह ताज़ी रहे तुम्हारी मुस्कान हर दिन',
      'दुनिया की कोई उदासी तुम्हारे चेहरे के पास फटकने न पाए',
    ],
    linesHinglish: [
      'Subah ke gulaab ki tarah taazi rahe tumhaari muskaan har din',
      'Duniya ki koi udaasi tumhaare chehre ke paas phatakne na paaye',
    ],
    linesEnglish: [
      'May your smile stay as dewy-fresh as morning garden roses all year',
      'Never letting a passing cloud of gloom settle anywhere near your eyes',
    ],
  },
  {
    title: 'अजनबी शहर में अपनों की बधाई',
    titleEnglish: 'Warm Wishes Across Far Cities',
    linesHindi: [
      'काम के सिलसिले में चाहे तुम घर से कितनी भी दूर क्यों न हो आज',
      'पूरे घर का प्यार और दुआ इस संदेश के साथ तुम्हारे पास पहुँच गई है',
    ],
    linesHinglish: [
      'Kaam ke silsile mein chaahe tum ghar se kitni bhi door kyun na ho aaj',
      'Poore ghar ka pyar aur dua is sandesh ke saath tumhaare paas pahunch gayi hai',
    ],
    linesEnglish: [
      'However many miles work has carried you away from home right now',
      'Everyone’s love and hugs travel straight through this birthday note',
    ],
  },
  {
    title: 'मेहनत से चमकते सितारे',
    titleEnglish: 'Stars Shining From Your Effort',
    linesHindi: [
      'किस्मत भी उसी का साथ देती है जो हर रोज़ मुस्कुराकर चलता है',
      'जन्मदिन मुबारक उस मेहनती दोस्त को जो हार मानना नहीं जानता',
    ],
    linesHinglish: [
      'Kismat bhi usi ka saath deti hai jo har roz muskuraakar chalta hai',
      'Janmdin mubaarak us mehnati dost ko jo haar maanna nahin jaanta',
    ],
    linesEnglish: [
      'Even luck walks eagerly beside someone who greets each morning smiling',
      'Happy birthday to the tireless friend who simply refuses to quit',
    ],
  },
  {
    title: 'खूबसूरत यादों का नया साल',
    titleEnglish: 'Fresh Year of Lovely Keepsakes',
    linesHindi: [
      'अल्बम की पुरानी तस्वीरों को देखकर मुस्कुराना अच्छा लगता है बहुत',
      'दुआ है यह नया साल हमें और भी सुंदर तस्वीरें खींचने का मौका दे',
    ],
    linesHinglish: [
      'Album ki puraani tasveeron ko dekhkar muskuraana achha lagta hai bahut',
      'Dua hai yeh naya saal humein aur bhi sundar tasveerein kheenchne ka mauka de',
    ],
    linesEnglish: [
      'Flipping back through old snapshots always sparks such warm grins',
      'Here is to capturing twice as many bright photographs together this year',
    ],
  },
  {
    title: 'बचपना और समझदारी का संगम',
    titleEnglish: 'Blend of Playfulness and Grace',
    linesHindi: [
      'बचपन की शरारत और बड़ों जैसी समझदारी दोनों बसी हैं तुम में',
      'इसीलिए हर उम्र के लोग तुमसे बात करके खुश हो जाते हैं',
    ],
    linesHinglish: [
      'Bachpan ki sharaarat aur badon jaisi samajhdaari dono basi hain tum mein',
      'Isiliye har umr ke log tumse baat karke khush ho jaate hain',
    ],
    linesEnglish: [
      'Childlike humor and quiet maturity live effortlessly inside your heart',
      'That is why young and old alike feel lighter after talking with you',
    ],
  },
  {
    title: 'नए अवसर, नई ऊँचाइयाँ',
    titleEnglish: 'New Doors, Taller Horizons',
    linesHindi: [
      'तुम्हारी काबिलियत के आगे हर बड़ी मंज़िल छोटी पड़ने वाली है',
      'इस जन्मदिन पर मेरी तरफ़ से तुम्हें बुलंदियों की अनगिनत शुभकामना',
    ],
    linesHinglish: [
      'Tumhaari kaabiliyat ke aage har badi manzil chhoti padne waali hai',
      'Is janmdin par meri taraf se tumhein bulandiyon ki anginat shubhkaamna',
    ],
    linesEnglish: [
      'Beside your quiet talent, even towering goals look wonderfully reachable',
      'Sending endless wishes for soaring new heights on your birthday',
    ],
  },
  {
    title: 'मीठे शब्दों की माला',
    titleEnglish: 'Garland of Gentle Birthday Words',
    linesHindi: [
      'शब्दों की यह छोटी सी माला तुम्हारे प्यारे जन्मदिन के नाम आज',
      'दुआ है तुम्हारी ज़िंदगी में प्यार का संगीत कभी धीमा न हो',
    ],
    linesHinglish: [
      'Shabdon ki yeh chhoti si maala tumhaare pyare janmdin ke naam aaj',
      'Dua hai tumhaari zindagi mein pyar ka sangeet kabhi dheema na ho',
    ],
    linesEnglish: [
      'Accept this modest garland of warm words woven just for your birthday',
      'May the gentle music of affection never fade inside your life',
    ],
  },
  {
    title: 'ख़ास पल का ख़ास जश्न',
    titleEnglish: 'Bright Toast to a Special Soul',
    linesHindi: [
      'साल में एक बार आने वाला यह दिन बहुत खास होता है सबके लिए',
      'खुलकर जी लो आज का हर पल, क्योंकि कल फिर यही यादें काम आएँगी',
    ],
    linesHinglish: [
      'Saal mein ek baar aane waala yeh din bahut khaas hota hai sabke liye',
      'Khulkar jee lo aaj ka har pal, kyunki kal phir yahi yaadein kaam aayengi',
    ],
    linesEnglish: [
      'This one special date returning once a year carries pure magic for all',
      'Savor every unhurried hour today—tomorrow these memories warm the soul',
    ],
  },
  {
    title: 'हृदय से निकली शुभ कामना',
    titleEnglish: 'Sincere Blessing From Within',
    linesHindi: [
      'तुम्हारे घर में सुख, शांति और समृद्धि का वास हमेशा बना रहे',
      'हर जन्मदिन पर तुम पहले से भी ज़्यादा मुस्कुराते हुए मिलो हमें',
    ],
    linesHinglish: [
      'Tumhaare ghar mein sukh, shaanti aur samriddhi ka vaas hamesha bana rahe',
      'Har janmdin par tum pehle se bhi zyada muskuraate hue milo humein',
    ],
    linesEnglish: [
      'May peace, abundance, and laughter dwell endlessly within your home',
      'And each birthday find you grinning even brighter than the year before',
    ],
  },
  {
    title: 'प्यार के रंग में रंगा दिन',
    titleEnglish: 'Day Dipped in Pure Affection',
    linesHindi: [
      'आज की हवा में कुछ अलग ही मिठास घुली हुई लगती है मुझे',
      'शायद आज मेरे सबसे चहेते इंसान का जन्मदिन जो आ गया है',
    ],
    linesHinglish: [
      'Aaj ki hawa mein kuch alag hi mithaas ghuli hui lagti hai mujhe',
      'Shaayad aaj mere sabse chahete insaan ka janmdin jo aa gaya hai',
    ],
    linesEnglish: [
      'Even the afternoon air feels strangely sweeter right around now',
      'Most likely because my favorite person’s birthday finally arrived',
    ],
  },
  {
    title: 'दिल की गहराई से बधाई यार',
    titleEnglish: 'Deepest Birthday Cheers Buddy',
    linesHindi: [
      'तुम हो तो बोरिंग सी ज़िंदगी भी फिल्म की तरह मज़ेदार लगती है',
      'हैप्पी बर्थडे मेरे दोस्त, तुम हमेशा ऐसे ही कमाल बने रहना',
    ],
    linesHinglish: [
      'Tum ho to boring si zindagi bhi film ki tarah mazedaar lagti hai',
      'Happy birthday mere dost, tum hamesha aise hi kamaal bane rehna',
    ],
    linesEnglish: [
      'With you around, even slow ordinary weeks feel like a blockbuster film',
      'Happy birthday buddy—never change that wonderful spark you carry',
    ],
  },
  {
    title: 'मेरी जान की मुस्कान अमर रहे',
    titleEnglish: 'May Your Bright Smile Endure',
    linesHindi: [
      'दुनिया की सारी दौलत एक तरफ़ और तुम्हारी एक सच्ची मुस्कान एक तरफ़',
      'जन्मदिन पर बस यही चाहत है कि तुम हमेशा खुशहाल दिखो मुझे',
    ],
    linesHinglish: [
      'Duniya ki saari daulat ek taraf aur tumhaari ek sachhi muskaan ek taraf',
      'Janmdin par bas yahi chaahat hai ki tum hamesha khushhaal dikho mujhe',
    ],
    linesEnglish: [
      'Put all worldly treasure on one scale and your genuine smile on the other',
      'My birthday wish is simply seeing you thriving and radiant always',
    ],
  },
  {
    title: 'सुकून और तरक़्क़ी का वरदान',
    titleEnglish: 'Gift of Calm and Progress',
    linesHindi: [
      'ईश्वर तुम्हारे रास्ते के हर पत्थर को फूल में बदल दे इस साल',
      'तुम्हारी मेहनत रंग लाए और हर सुबह नई खुशखबरी लेकर आए',
    ],
    linesHinglish: [
      'Ishwar tumhaare raaste ke har patthar ko phool mein badal de is saal',
      'Tumhaari mehnat rang laaye aur har subah nayi khushkhabri lekar aaye',
    ],
    linesEnglish: [
      'May heaven turn every rough stone along your path into soft blossoms',
      'Let your hard work bloom proudly and mornings bring wonderful news',
    ],
  },
  {
    title: 'उम्र नहीं, अनुभव बढ़ता जाए',
    titleEnglish: 'Growing in Grace, Not Years',
    linesHindi: [
      'सिर्फ़ तारीख़ बदली है कैलेंडर की, तुम्हारा दिल तो वही जवां है',
      'आज खूब हँसो, खूब खाओ और अपनी ज़िंदगी का जश्न मनाओ दोस्त',
    ],
    linesHinglish: [
      'Sirf taareekh badli hai calendar ki, tumhaara dil to wahi jawaan hai',
      'Aaj khoob hanso, khoob khaao aur apni zindagi ka jashn manaao dost',
    ],
    linesEnglish: [
      'Only a page flipped on the calendar—your spirit stays wonderfully young',
      'Laugh loudly, feast happily, and celebrate the gift of being you today',
    ],
  },
  {
    title: 'मीठी चाय और बर्थडे विश',
    titleEnglish: 'Sweet Tea and Birthday Cheers',
    linesHindi: [
      'सुबह की गरम चाय के साथ मेरी तरफ़ से सबसे पहला जन्मदिन संदेश',
      'दुआ है तुम्हारा पूरा दिन इसी चाय जैसा सुकून भरा और मीठा रहे',
    ],
    linesHinglish: [
      'Subah ki garam chai ke saath meri taraf se sabse pehla janmdin sandesh',
      'Dua hai tumhaara poora din isi chai jaisa sukoon bhara aur meetha rahe',
    ],
    linesEnglish: [
      'Sent alongside your first hot cup of morning tea—happy birthday!',
      'May the whole day stay as cozy, sweet, and comforting as that first sip',
    ],
  },
  {
    title: 'दिल को छूने वाली बधाई',
    titleEnglish: 'Birthday Wish Touching the Soul',
    linesHindi: [
      'कभी-कभी कुछ लोग अनजाने में ही हमारी पूरी दुनिया बन जाते हैं',
      'जन्मदिन मुबारक उसे जिसने मेरी ज़िंदगी को जीने की वजह दी है',
    ],
    linesHinglish: [
      'Kabhi-kabhi kuch log anjaane mein hi hamaari poori duniya ban jaate hain',
      'Janmdin mubaarak use jisne meri zindagi ko jeene ki wajah di hai',
    ],
    linesEnglish: [
      'Sometimes without even trying, one person becomes your entire world',
      'Happy birthday to the one who gave my everyday life its brightest reason',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'रौशन चिराग़ों सा दिन',
    titleEnglish: 'Day Bright as Festive Lamps',
    linesHindi: [
      'आँगन में जलते दीपों की तरह रोशन रहे तुम्हारा पूरा जीवन',
      'कोई अँधेरा कभी तुम्हारी उम्मीद की लौ को कम न कर पाए',
    ],
    linesHinglish: [
      'Aangan mein jalte deepo ki tarah roshan rahe tumhaara poora jeevan',
      'Koi andhera kabhi tumhaari ummeed ki lau ko kam na kar paaye',
    ],
    linesEnglish: [
      'May your entire journey glow warmly like courtyard oil lamps at dusk',
      'Never letting a passing gust dim the steady flame of your hope',
    ],
  },
  {
    title: 'खुशियों की अनोखी सौगात',
    titleEnglish: 'Unique Gift of Pure Joy',
    linesHindi: [
      'जन्मदिन पर हर कोई केक और फूलों की बात करता है यारो',
      'पर मेरी दुआ है कि तुम्हें हर मोड़ पर सच्चे और अच्छे लोग मिलें',
    ],
    linesHinglish: [
      'Janmdin par har koi cake aur phoolon ki baat karta hai yaaro',
      'Par meri dua hai ki tumhein har mod par sachhe aur achhe log milein',
    ],
    linesEnglish: [
      'Everyone talks of ribbons, bouquets, and chocolate cakes on birthdays',
      'My wish is simpler: may kind, genuine souls cross every mile with you',
    ],
  },
  {
    title: 'बर्थडे पार्टी का असली मज़ा',
    titleEnglish: 'Real Fun at the Birthday Table',
    linesHindi: [
      'मेहमानों की भीड़ से ज़्यादा मज़ा तो तब आता है जन्मदिन पर',
      'जब रात बारह बजे चार पक्के दोस्त मिलकर शोर मचा देते हैं',
    ],
    linesHinglish: [
      'Mehmaanon ki bheed se zyada maza to tab aata hai janmdin par',
      'Jab raat baarah baje chaar pakke dost milkar shor macha dete hain',
    ],
    linesEnglish: [
      'The best birthday party never comes from formal, crowded halls',
      'It happens when four true friends show up loud at twelve midnight',
    ],
  },
  {
    title: 'सपनों के महल की नींव',
    titleEnglish: 'Foundation for Your Dream Castle',
    linesHindi: [
      'तुमने जो ख्वाब रातों को जागकर देखे हैं अपने आने वाले कल के',
      'इस साल से उन सभी सपनों की मज़बूत नींव रखने का समय आ गया है',
    ],
    linesHinglish: [
      'Tumne jo khwaab raaton ko jaagkar dekhe hain apne aane waale kal ke',
      'Is saal se un sabhi sapnon ki mazboot neev rakhne ka samay aa gaya hai',
    ],
    linesEnglish: [
      'All those quiet dreams you stayed up sketching for brighter tomorrows',
      'Finally find their rock-solid foundation starting with this birthday',
    ],
  },
  {
    title: 'सच्ची दोस्ती की सालगिरह',
    titleEnglish: 'Another Year of Real Friendship',
    linesHindi: [
      'तुम्हारे जन्मदिन पर मैं अपनी दोस्ती का भी जश्न मनाता हूँ हमेशा',
      'क्योंकि तुम्हारा इस दुनिया में होना ही मेरी सबसे बड़ी खुशकिस्मती है',
    ],
    linesHinglish: [
      'Tumhaare janmdin par main apni dosti ka bhi jashn manaata hoon hamesha',
      'Kyunki tumhaara is duniya mein hona hi meri sabse badi khushkismati hai',
    ],
    linesEnglish: [
      'On your birthday I secretly celebrate our whole friendship too',
      'Because sharing a lifetime with you remains my luckiest blessing',
    ],
  },
  {
    title: 'तेरी आँखों की चमक हमेशा',
    titleEnglish: 'Sparkle Forever Inside Your Eyes',
    linesHindi: [
      'चाहे कितनी भी ज़िम्मेदारियाँ बढ़ जाएँ अब बड़े होने के साथ-साथ',
      'तेरी आँखों की वह बच्चों जैसी मासूम चमक कभी न खोने पाए',
    ],
    linesHinglish: [
      'Chaahe kitni bhi zimmedariyaan badh jaayein ab bade hone ke saath-saath',
      'Teri aankhon ki woh bachchon jaisi maasoom chamak kabhi na khone paaye',
    ],
    linesEnglish: [
      'No matter how tall grown-up responsibilities stack up around you',
      'Never lose that bright, wonder-filled sparkle gleaming in your eyes',
    ],
  },
  {
    title: 'मेरी हर कहानी का हीरो',
    titleEnglish: 'Hero of Every Good Story',
    linesHindi: [
      'जब भी कोई मुझसे मेरी सबसे प्यारी यादों के बारे में पूछता है',
      'तो हर कहानी में तुम्हारा नाम अपने आप सबसे पहले आ जाता है',
    ],
    linesHinglish: [
      'Jab bhi koi mujhse meri sabse pyari yaadon ke baare mein poochhta hai',
      'To har kahaani mein tumhaara naam apne aap sabse pehle aa jaata hai',
    ],
    linesEnglish: [
      'Whenever anyone asks me about the happiest memories I have lived',
      'Your name naturally opens every single favorite story I tell',
    ],
  },
  {
    title: 'प्यार भरा केक और शुभकामना',
    titleEnglish: 'Warm Frosting and Endless Cheers',
    linesHindi: [
      'केक भी है, मोमबत्ती भी है और अपनों का प्यारा साथ भी आज',
      'बस एक तुम मुस्कुरा दो तो यह जन्मदिन इतिहास बन जाए',
    ],
    linesHinglish: [
      'Cake bhi hai, mombatti bhi hai aur apnon ka pyara saath bhi aaj',
      'Bas ek tum muskura do to yeh janmdin itihaas ban jaaye',
    ],
    linesEnglish: [
      'We have the frosting, flickering candles, and everyone you love around',
      'One wide grin from you right now turns tonight into pure magic',
    ],
  },
  {
    title: 'अच्छा वक़्त तुम्हारे साथ',
    titleEnglish: 'Best Times Walk With You',
    linesHindi: [
      'ज़िंदगी में अच्छे और बुरे दोनों मौसम आते-जाते रहते हैं यारो',
      'पर दुआ है तुम्हारे जीवन में हमेशा बसंत ही डेरा डाले रखे',
    ],
    linesHinglish: [
      'Zindagi mein achhe aur bure dono mausam aate-jaate rehte hain yaaro',
      'Par dua hai tumhaare jeevan mein hamesha basant hi dera daale rakhe',
    ],
    linesEnglish: [
      'Sunny seasons and gray showers naturally take turns across life',
      'Yet my wish for you is an endless spring camping right at your door',
    ],
  },
  {
    title: 'दिल की गहराइयों से आशीर्वाद',
    titleEnglish: 'Heartfelt Blessing for Bright Days',
    linesHindi: [
      'बड़ों का आशीर्वाद और छोटों का प्यार हमेशा तुम्हारे साथ रहे',
      'तुम जीवन के हर इम्तिहान में अव्वल आते रहो, यही कामना है',
    ],
    linesHinglish: [
      'Badon ka aashirwaad aur chhoton ka pyar hamesha tumhaare saath rahe',
      'Tum jeevan ke har imtihaan mein avval aate raho, yahi kaamna hai',
    ],
    linesEnglish: [
      'May elders’ blessings and youngsters’ affection walk beside you always',
      'Keep rising triumphant through every test life places along your way',
    ],
  },
  {
    title: 'आसमां जितना बड़ा दिल',
    titleEnglish: 'Heart Wide as the Open Sky',
    linesHindi: [
      'तुम्हारे अंदर सबकी मदद करने का जो प्यारा गुण बसा है दोस्त',
      'उसी की वजह से आज पूरा आसमान तुम्हें मुबारकबाद दे रहा है',
    ],
    linesHinglish: [
      'Tumhaare andar sabki madad karne ka jo pyara gun basa hai dost',
      'Usi ki wajah se aaj poora aasmaan tumhein mubaarakbaad de raha hai',
    ],
    linesEnglish: [
      'Because of that generous instinct to lift up everyone around you',
      'Even the wide open sky seems cheering happy birthday to you today',
    ],
  },
  {
    title: 'हर दिन खुशियों की दस्तक',
    titleEnglish: 'Happiness Knocking Every Morning',
    linesHindi: [
      'सुबह की दस्तक हो या रात की शांत हवाएँ चलती हों बाहर',
      'तुम्हारे कमरे में हमेशा खुशियों और सुकून का उजाला रहे',
    ],
    linesHinglish: [
      'Subah ki dastak ho ya raat ki shaant hawaaein chalti hon baahar',
      'Tumhaare kamre mein hamesha khushiyon aur sukoon ka ujala rahe',
    ],
    linesEnglish: [
      'Whether dawn knocks softly or evening breezes drift outside your window',
      'May warm joy and deep calm always illuminate every corner of your room',
    ],
  },
  {
    title: 'मीठी बर्थडे दुआओं की बारिश',
    titleEnglish: 'Shower of Sweet Birthday Wishes',
    linesHindi: [
      'ज़्यादा तो कुछ नहीं जानता पर इतना ज़रूर कहता हूँ दिल से आज',
      'तुम्हारे बिना यह दुनिया थोड़ी कम प्यारी होती मेरे दोस्त',
    ],
    linesHinglish: [
      'Zyada to kuch nahin jaanta par itna zaroor kehta hoon dil se aaj',
      'Tumhaare bina yeh duniya thodi kam pyari hoti mere dost',
    ],
    linesEnglish: [
      'I may not know fancy poetry, yet one truth I say straight from heart',
      'This whole world would have felt far less lovely without you in it',
    ],
  },
  {
    title: 'खुशियों से भरा हर पन्ना',
    titleEnglish: 'Every Upcoming Page Full of Joy',
    linesHindi: [
      'उम्र के अगले पन्ने पर कामयाबी के नए हस्ताक्षर लिखने जा रहे हो तुम',
      'मेरी दुआ है तुम्हारी कलम कभी रुकने न पाए और नाम चमकता रहे',
    ],
    linesHinglish: [
      'Umr ke agle panne par kaamyaabi ke naye hastaakshar likhne ja rahe ho tum',
      'Meri dua hai tumhaari kalam kabhi rukne na paaye aur naam chamakta rahe',
    ],
    linesEnglish: [
      'On the next blank page of your life, you are set to sign bold wins',
      'May your pen keep flowing effortlessly and your name shine far and wide',
    ],
  },
  {
    title: 'दिल जीत लेने वाला अंदाज़',
    titleEnglish: 'Charm Winning Hearts Effortlessly',
    linesHindi: [
      'न शोर, न दिखावा, बस एक प्यारी सी मुस्कान और साफ़ नीयत',
      'तुम्हारा यही अंदाज़ हर साल तुम्हें सबका चहेता बनाता है',
    ],
    linesHinglish: [
      'Na shor, na dikhaava, bas ek pyari si muskaan aur saaf neeyat',
      'Tumhaara yahi andaaz har saal tumhein sabka chaheta banaata hai',
    ],
    linesEnglish: [
      'No noise, no flashy drama—only an honest intention and warm grin',
      'That effortless grace keeps winning hearts around you year after year',
    ],
  },
  {
    title: 'नए सवेरे में नई रोशनी',
    titleEnglish: 'Fresh Glow Inside New Morning',
    linesHindi: [
      'कल की चिंता छोड़ो और आज की मीठी हवा में गहरी साँस लो दोस्त',
      'तुम्हारे जन्मदिन का यह सवेरा तुम्हारी हर राह आसान कर दे',
    ],
    linesHinglish: [
      'Kal ki chinta chhodo aur aaj ki meethi hawa mein gehri saans lo dost',
      'Tumhaare janmdin ka yeh savera tumhaari har raah aasaan kar de',
    ],
    linesEnglish: [
      'Leave yesterday’s worries outside and breathe in this sweet morning air',
      'May your birthday sunrise clear and brighten every mile ahead of you',
    ],
  },
  {
    title: 'सुकून भरा जन्मदिन संदेश',
    titleEnglish: 'Peace-Filled Birthday Greeting',
    linesHindi: [
      'जितनी बार पलकें झपकती हैं इस भागती-दौड़ती दुनिया में',
      'उतनी बार मेरी दुआ तुम्हें खुश रहने का आशीर्वाद देती है',
    ],
    linesHinglish: [
      'Jitni baar palkein jhapakti hain is bhaagti-daudti duniya mein',
      'Utni baar meri dua tumhein khush rehne ka aashirwaad deti hai',
    ],
    linesEnglish: [
      'Every time the busy world rushes past in the blink of an eye',
      'Another silent wish leaves my heart cheering for your lasting peace',
    ],
  },
  {
    title: 'जन्मदिन मुबारक मेरे हमराज़',
    titleEnglish: 'Happy Birthday My Confidant',
    linesHindi: [
      'मेरे सारे राज़ और सारी नादानियाँ हँसकर संभालने वाले दोस्त को',
      'दिल की गहराइयों से जन्मदिन की लाखों प्यारी शुभकामनाएँ',
    ],
    linesHinglish: [
      'Mere saare raaz aur saari naadaaniyaan hanskar sambhaalne waale dost ko',
      'Dil ki gehraaiyon se janmdin ki laakhon pyari shubhkaamnayein',
    ],
    linesEnglish: [
      'To the friend who kept all my secrets and laughed off my wildest mistakes',
      'Sending a million warm birthday blessings straight from the heart',
    ],
  },
  {
    title: 'बहारों से सजा नया साल',
    titleEnglish: 'New Year Adorned in Spring',
    linesHindi: [
      'तुम्हारी जिंदगी का बगीचा हमेशा नए फूलों से महकता रहे यार',
      'कोई पतझड़ कभी तुम्हारे हिस्से की मुस्कान न छीन सके',
    ],
    linesHinglish: [
      'Tumhaari zindagi ka bageecha hamesha naye phoolon se mehakta rahe yaar',
      'Koi patjhad kabhi tumhaare hisse ki muskaan na chheen sake',
    ],
    linesEnglish: [
      'May the garden of your life stay forever scented with fresh blooms',
      'Never letting a chilly autumn steal even one grin from your face',
    ],
  },
  {
    title: 'ज़िंदादिली का जश्न आज',
    titleEnglish: 'Celebrating Your Spirited Heart',
    linesHindi: [
      'आज सिर्फ़ तारीख़ बदलने का नहीं, तुम्हारे होने का शुक्रिया कहने का दिन है',
      'ऐसे ही हँसते, चमकते और सबको हँसाते रहो मेरे प्यारे दोस्त',
    ],
    linesHinglish: [
      'Aaj sirf taareekh badalne ka nahin, tumhaare hone ka shukriya kehne ka din hai',
      'Aise hi hanste, chamakte aur sabko hansaate raho mere pyare dost',
    ],
    linesEnglish: [
      'Today is less about numbers changing and more about celebrating you',
      'Keep laughing, shining, and lifting spirits everywhere you walk',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'प्यारी सी यादगार शाम',
    titleEnglish: 'Sweet Unforgettable Evening',
    linesHindi: [
      'मोमबत्तियाँ बुझेंगी, केक बटेगा और तस्वीरों में हँसी क़ैद होगी',
      'पर दिल में बसी यह शाम हमेशा तुम्हें अपनापन याद दिलाएगी',
    ],
    linesHinglish: [
      'Mombattiyaan bujhengi, cake batega aur tasveeron mein hansi kaid hogi',
      'Par dil mein basi yeh shaam hamesha tumhein apnapan yaad dilaayegi',
    ],
    linesEnglish: [
      'Candles will blow out, cake slices pass round, and cameras click away',
      'Yet the warmth of tonight stays glowing inside your heart for years',
    ],
  },
  {
    title: 'तारीख़ ख़ास, दिल भी ख़ास',
    titleEnglish: 'Special Day for a Rare Soul',
    linesHindi: [
      'हर किसी के जन्मदिन पर दिल से इतनी दुआएँ नहीं निकलतीं यार',
      'तुम सबसे अलग हो, इसलिए मेरी शुभकामना भी सबसे खास है आज',
    ],
    linesHinglish: [
      'Har kisi ke janmdin par dil se itni duaaein nahin nikaltin yaar',
      'Tum sabse alag ho, isiliye meri shubhkaamna bhi sabse khaas hai aaj',
    ],
    linesEnglish: [
      'Prayers this sincere do not pour out effortlessly for just anyone',
      'You are one of a kind, so today’s wishes carry all my heart',
    ],
  },
  {
    title: 'रब की मेहरबानी बरसती रहे',
    titleEnglish: 'May Heaven’s Grace Shower Always',
    linesHindi: [
      'जन्मदिन मुबारक, रब की रहमत तुम्हारे सिर पर हमेशा साया रखे',
      'तुम्हारी हर सुबह खुशियों और हर रात सुकून से महकती रहे',
    ],
    linesHinglish: [
      'Janmdin mubaarak, rab ki rehmat tumhaare sir par hamesha saaya rakhe',
      'Tumhaari har subah khushiyon aur har raat sukoon se mehakti rahe',
    ],
    linesEnglish: [
      'Happy birthday—may gentle grace always shade your life from above',
      'Keeping every morning scented with joy and every night wrapped in calm',
    ],
  },
  {
    title: 'मुस्कान का सबसे बड़ा दिन',
    titleEnglish: 'Brightest Day of Pure Smiles',
    linesHindi: [
      'आज पूरे दिन बस मुस्कुराते रहना क्योंकि यह दिन तुम्हारा है',
      'तुम्हारी एक हँसी हम सबके चेहरे पर रौनक ला देती है यार',
    ],
    linesHinglish: [
      'Aaj poore din bas muskuraate rehna kyunki yeh din tumhaara hai',
      'Tumhaari ek hansi hum sabke chehre par raunak la deti hai yaar',
    ],
    linesEnglish: [
      'Keep smiling from sunrise to midnight because every hour today is yours',
      'One cheerful laugh from you lights up every face around the table',
    ],
  },
  {
    title: 'नई मंज़िल, नया जोश',
    titleEnglish: 'Fresh Destination, Renewed Spark',
    linesHindi: [
      'पिछले साल से ज़्यादा मज़बूत, ज़्यादा शांत और ज़्यादा खुश रहो तुम',
      'इस जन्मदिन पर मेरी तरफ़ से यही सबसे प्यारा आशीर्वाद है',
    ],
    linesHinglish: [
      'Pichhle saal se zyada mazboot, zyada shaant aur zyada khush raho tum',
      'Is janmdin par meri taraf se yahi sabse pyara aashirwaad hai',
    ],
    linesEnglish: [
      'Grow steadier, calmer, and even happier than the year before',
      'That remains the warmest, purest wish I could possibly hand you today',
    ],
  },
  {
    title: 'आँखों में चमकते अरमान',
    titleEnglish: 'Hopes Sparkling in Your Eyes',
    linesHindi: [
      'तुम्हारी आँखों में जो सपने पल रहे हैं चुपचाप वर्षों से',
      'वह सब इस नए साल में सच होकर तुम्हारे चेहरे को रोशन कर दें',
    ],
    linesHinglish: [
      'Tumhaari aankhon mein jo sapne pal rahe hain chupchaap varshon se',
      'Woh sab is naye saal mein sach hokar tumhaare chehre ko roshan kar dein',
    ],
    linesEnglish: [
      'All those quiet dreams growing patiently behind your eyes for years',
      'May each one come alive this year and light up your face completely',
    ],
  },
  {
    title: 'बिना कहे प्यार की बधाई',
    titleEnglish: 'Unspoken Love in Birthday Note',
    linesHindi: [
      'भले ही हर रोज़ बातें न हो पाएँ हमारी इस व्यस्त ज़िंदगी में',
      'पर तुम्हारे जन्मदिन पर सबसे पहले दुआ दिल से मेरी ही निकलती है',
    ],
    linesHinglish: [
      'Bhale hi har roz baatein na ho paayein hamaari is vyast zindagi mein',
      'Par tumhaare janmdin par sabse pehle dua dil se meri hi nikalti hai',
    ],
    linesEnglish: [
      'Even when busy calendars keep us from catching up every single day',
      'My heart still sends out the very first prayer on your birthday morning',
    ],
  },
  {
    title: 'बहारों से भी सुंदर हो कल',
    titleEnglish: 'Tomorrow Fairer Than Spring',
    linesHindi: [
      'गुज़रे दिनों से भी ज़्यादा खूबसूरत होगा तुम्हारा आने वाला हर कल',
      'जन्मदिन मुबारक, खुशियों की चाबी हमेशा तुम्हारे हाथ में रहे',
    ],
    linesHinglish: [
      'Guzre dinon se bhi zyada khoobsurat hoga tumhaara aane waala har kal',
      'Janmdin mubaarak, khushiyon ki chaabi hamesha tumhaare haath mein rahe',
    ],
    linesEnglish: [
      'Every tomorrow ahead is going to look brighter than all days passed',
      'Happy birthday—may the key to true joy always rest inside your palm',
    ],
  },
  {
    title: 'दुआओं में बसी दोस्ती',
    titleEnglish: 'Friendship Woven Into Prayers',
    linesHindi: [
      'सच्चे दोस्तों को तोहफ़े की नहीं, सच्चे साथ की ज़रूरत होती है',
      'मैं हर जन्मदिन पर तुम्हारे साथ ऐसे ही खड़ा मिलने का वादा करता हूँ',
    ],
    linesHinglish: [
      'Sachhe doston ko tohfe ki nahin, sachhe saath ki zaroorat hoti hai',
      'Main har janmdin par tumhaare saath aise hi khada milne ka waada karta hoon',
    ],
    linesEnglish: [
      'True friends never measure love by wrapped boxes, only loyal presence',
      'I promise to show up smiling beside you on every birthday yet to come',
    ],
  },
  {
    title: 'हैप्पी बर्थडे दिल से यार',
    titleEnglish: 'Happy Birthday Straight From Heart',
    linesHindi: [
      'दिल की हर धड़कन आज बस एक ही प्यारा सा नाम दोहरा रही है',
      'जन्मदिन मुबारक हो यार, तुम्हारी उम्र खुशियों से भरी रहे',
    ],
    linesHinglish: [
      'Dil ki har dhadkan aaj bas ek hi pyara sa naam dohara rahi hai',
      'Janmdin mubaarak ho yaar, tumhaari umr khushiyon se bhari rahe',
    ],
    linesEnglish: [
      'Every single beat of my heart repeats one joyful wish today',
      'Happy birthday dear friend—may every year ahead overflow with happiness',
    ],
  },
];

export const UNIQUE_BIRTHDAY_FEELINGS_170 = buildUniqueShayaris(
  'birthday-feelings',
  'Birthday Shayari (जन्मदिन शायरी)',
  '🎂',
  31,
  BIRTHDAY_FEELINGS_ENTRIES
);
