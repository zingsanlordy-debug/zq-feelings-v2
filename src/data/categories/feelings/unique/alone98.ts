import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const ALONE_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'अकेलेपन की शांत शाम',
    titleEnglish: 'Quiet Evening Alone',
    linesHindi: [
      'भीड़ से लौटकर जब अपने कमरे में आता हूँ मैं',
      'तन्हाई की ठंडी चादर बड़े प्यार से गले लगाती है',
    ],
    linesHinglish: [
      'Bheed se lautkar jab apne kamre mein aata hoon main',
      'Tanhaai ki thandi chaadar bade pyaar se gale lagaati hai',
    ],
    linesEnglish: [
      'Returning home to my room away from noisy crowds',
      'The quiet blanket of solitude wraps gently around me',
    ],
  },
  {
    title: 'खुद से दोस्ती',
    titleEnglish: 'Befriending Myself',
    linesHindi: [
      'जब सब अपने-अपने रास्ते निकल गए धीरे-धीरे',
      'तब समझ आया कि खुद से बेहतर कोई दोस्त नहीं होता',
    ],
    linesHinglish: [
      'Jab sab apne-apne raaste nikal gaye dheere-dheere',
      'Tab samajh aaya ki khud se behtar koi dost nahin hota',
    ],
    linesEnglish: [
      'When everyone drifted down their own roads one by one',
      'I learned there is no steadier companion than myself',
    ],
  },
  {
    title: 'ख़ाली कुर्सी की गवाही',
    titleEnglish: 'Empty Chair Beside Me',
    linesHindi: [
      'मेज़ के उस तरफ़ रखी कुर्सी आज भी खाली रहती है',
      'शायद अकेला बैठना अब मेरी आदत बन चुका है',
    ],
    linesHinglish: [
      'Mez ke us taraf rakhi kursi aaj bhi khaali rehti hai',
      'Shaayad akela baithna ab meri aadat ban chuka hai',
    ],
    linesEnglish: [
      'The chair across the table remains empty day after day',
      'Sitting alone has quietly turned into second nature now',
    ],
  },
  {
    title: 'सन्नाटे में सुकून',
    titleEnglish: 'Peace Inside Silence',
    linesHindi: [
      'पहले डर लगता था अकेले कमरे के सन्नाटे से मुझे',
      'अब दुनिया के झूठे शोर से ज़्यादा सुकून यहाँ मिलता है',
    ],
    linesHinglish: [
      'Pehle dar lagta tha akele kamre ke sannate se mujhe',
      'Ab duniya ke jhoothe shor se zyada sukoon yahaan milta hai',
    ],
    linesEnglish: [
      'Silence inside an empty room once frightened me deeply',
      'Today it feels far calmer than the fake clamor outside',
    ],
  },
  {
    title: 'बिना साथ के सफ़र',
    titleEnglish: 'Walking the Mile Alone',
    linesHindi: [
      'नक़्शे पर मंज़िल चाहे जितनी भी दूर नज़र आए',
      'अकेले चलने वालों की रफ़्तार सबसे सधी हुई होती है',
    ],
    linesHinglish: [
      'Naqshe par manzil chaahe jitni bhi door nazar aaye',
      'Akele chalne waalon ki raftaar sabse sadhi hui hoti hai',
    ],
    linesEnglish: [
      'No matter how distant the destination looks upon the map',
      'Those who walk solo develop the steadiest stride of all',
    ],
  },
  {
    title: 'चाय की अकेली चुस्की',
    titleEnglish: 'Solo Cup of Tea',
    linesHindi: [
      'एक कप चाय और बालकनी में बहती हुई ठंडी हवा',
      'तन्हाई कभी-कभी बिल्कुल दवा जैसा काम करती है',
    ],
    linesHinglish: [
      'Ek cup chai aur balcony mein behti hui thandi hawa',
      'Tanhaai kabhi-kabhi bilkul dawa jaisa kaam karti hai',
    ],
    linesEnglish: [
      'One warm cup of tea and cool wind drifting past the balcony',
      'Sometimes solitude works exactly like quiet medicine',
    ],
  },
  {
    title: 'भीड़ में अनजान चेहरा',
    titleEnglish: 'Alone Amidst Hundreds',
    linesHindi: [
      'हज़ारों लोगों के बीच खड़े होकर भी तन्हा लग सकता है मन',
      'क्योंकि साथ होने के लिए चेहरे नहीं, एहसास चाहिए',
    ],
    linesHinglish: [
      'Hazaaron logon ke beech khade hokar bhi tanha lag sakta hai man',
      'Kyunki saath hone ke liye chehre nahin, ehsaas chahiye',
    ],
    linesEnglish: [
      'Standing amid thousands of faces, the heart can still feel solo',
      'True company needs shared understanding, not just bodies near',
    ],
  },
  {
    title: 'चाँद के साथ गुफ़्तगू',
    titleEnglish: 'Talking to the Moon',
    linesHindi: [
      'जब सुनने वाला कोई अपना न मिले आस-पास शहर में',
      'तब आधी रात को छत का चाँद मेरा हमराज़ बन जाता है',
    ],
    linesHinglish: [
      'Jab sunne wala koi apna na mile aas-paas shehar mein',
      'Tab aadhi raat ko chhat ka chaand mera hamraaz ban jaata hai',
    ],
    linesEnglish: [
      'When no close confidant stays awake across the town',
      'The midnight moon above my terrace becomes my quiet listener',
    ],
  },
  {
    title: 'आत्मनिर्भर सफ़र',
    titleEnglish: 'Strength Built Alone',
    linesHindi: [
      'तन्हा चलने से इंसान कमज़ोर नहीं, मज़बूत होता है',
      'हर फ़ैसला खुद लेने की ताक़त यहीं से आती है',
    ],
    linesHinglish: [
      'Tanha chalne se insaan kamzor nahin, mazboot hota hai',
      'Har faisla khud lene ki taaqat yahin se aati hai',
    ],
    linesEnglish: [
      'Walking alone never weakens a person—it strengthens their spine',
      'That is where the courage to stand on your own feet grows',
    ],
  },
  {
    title: 'ख़ामोश किताबें',
    titleEnglish: 'Quiet Company of Books',
    linesHindi: [
      'जब इंसान थक जाता है लोगों की अधूरी बातों से',
      'तब अलमारी की किताबें सबसे वफ़ादार साथी लगती हैं',
    ],
    linesHinglish: [
      'Jab insaan thak jaata hai logon ki adhoori baaton se',
      'Tab almaari ki kitaabein sabse wafadaar saathi lagti hain',
    ],
    linesEnglish: [
      'When one grows weary of hollow chatter around town',
      'Silent books upon the shelf feel like the truest friends',
    ],
  },
  {
    title: 'रात की तन्हा सड़क',
    titleEnglish: 'Empty Midnight Lane',
    linesHindi: [
      'सड़क की पीली रोशनी में सिर्फ़ मेरी परछाईं चलती है',
      'वही है जो बिना किसी शर्त के मेरे साथ रहती है',
    ],
    linesHinglish: [
      'Sadak ki peeli roshni mein sirf meri parchhaai chalti hai',
      'Wahi hai jo bina kisi shart ke mere saath rehti hai',
    ],
    linesEnglish: [
      'Beneath amber streetlights, only my own shadow keeps pace',
      'It stays quietly beside me without asking a single condition',
    ],
  },
  {
    title: 'मौन की भाषा',
    titleEnglish: 'Language of Quietness',
    linesHindi: [
      'हर जज़्बात को बोलकर समझाना ज़रूरी नहीं होता',
      'कभी-कभी अकेले बैठकर ख़ामोशी सुनना भी अच्छा है',
    ],
    linesHinglish: [
      'Har jazbaat ko bolkar samjhaana zaroori nahin hota',
      'Kabhi-kabhi akele baithkar khaamoshi sunna bhi accha hai',
    ],
    linesEnglish: [
      'Every emotion does not need to be spoken out loud',
      'Sometimes sitting alone listening to silence feels soothing',
    ],
  },
  {
    title: 'अनचाही दूरी',
    titleEnglish: 'Quiet Distance Kept',
    linesHindi: [
      'अब मैंने खुद ही लोगों से थोड़ी दूरी बना ली है',
      'क्योंकि बहुत क़रीब आने पर अक्सर रिश्ते बिखरते देखे हैं',
    ],
    linesHinglish: [
      'Ab maine khud hi logon se thodi doori bana li hai',
      'Kyunki bahut kareeb aane par aksar rishte bikharte dekhe hain',
    ],
    linesEnglish: [
      'Nowadays I gently keep a little space around myself',
      'Having seen too many close bonds unravel once masks drop',
    ],
  },
  {
    title: 'अपने साथ शाम',
    titleEnglish: 'Evening With Myself',
    linesHindi: [
      'किसी के आने-जाने से अब दिन खराब नहीं होता मेरा',
      'अकेले रहकर भी अपने मन को बहलाना सीख लिया है',
    ],
    linesHinglish: [
      'Kisi ke aane-jaane se ab din kharaab nahin hota mera',
      'Akele rehkar bhi apne man ko behlaana seekh liya hai',
    ],
    linesEnglish: [
      'My days no longer crumble depending on who stays or leaves',
      'I have learned how to keep my own heart calm in solitude',
    ],
  },
  {
    title: 'अकेला पेड़',
    titleEnglish: 'Solitary Tree Standing Tall',
    linesHindi: [
      'मैदान के बीच खड़ा अकेला पेड़ भी हवाओं से लड़ता है',
      'जरूरी नहीं कि मज़बूत रहने के लिए झुंड में रहा जाए',
    ],
    linesHinglish: [
      'Maidaan ke beech khada akela ped bhi hawaon se ladta hai',
      'Zaroori nahin ki mazboot rehne ke liye jhund mein raha jaaye',
    ],
    linesEnglish: [
      'A lone oak standing mid-field withstands the fiercest gales',
      'You never need a crowd around you simply to stand tall',
    ],
  },
  {
    title: 'दिल की सुनसान गली',
    titleEnglish: 'Quiet Corner Inside',
    linesHindi: [
      'बाहर से मुस्कुराकर हर महफ़िल में बैठ लेता हूँ मैं',
      'पर दिल का एक कोना हमेशा बिल्कुल सुनसान रहता है',
    ],
    linesHinglish: [
      'Baahar se muskurakar har mehfil mein baith leta hoon main',
      'Par dil ka ek kona hamesha bilkul sunsaan rehta hai',
    ],
    linesEnglish: [
      'I smile politely and join every gathering around me',
      'Yet one quiet chamber inside my heart stays utterly solitary',
    ],
  },
  {
    title: 'बिना सहारे की उड़ान',
    titleEnglish: 'Flying Without Crutches',
    linesHindi: [
      'पंछी जब घोंसला छोड़ता है तो अकेला ही उड़ता है',
      'खुले आसमान का मज़ा तन्हाई से ही शुरू होता है',
    ],
    linesHinglish: [
      'Panchhi jab ghonsla chhodta hai to akela hi udta hai',
      'Khule aasmaan ka maza tanhaai se hi shuru hota hai',
    ],
    linesEnglish: [
      'When a young bird leaves the nest, it takes flight alone',
      'The true freedom of open sky begins with solo wings',
    ],
  },
  {
    title: 'ठहरी हुई रातें',
    titleEnglish: 'Still Nights',
    linesHindi: [
      'फ़ोन चुप पड़ा रहता है घंटों तक बिस्तर के पास',
      'और मुझे इस खामोशी से अब कोई शिकायत नहीं रही',
    ],
    linesHinglish: [
      'Phone chup pada rehta hai ghanton tak bistar ke paas',
      'Aur mujhe is khaamoshi se ab koi shikayat nahin rahi',
    ],
    linesEnglish: [
      'My phone lies silent beside the bed for hours on end',
      'And oddly, I hold no complaint against that quiet anymore',
    ],
  },
  {
    title: 'खुद की तलाश',
    titleEnglish: 'Finding Myself',
    linesHindi: [
      'दुनिया की भागदौड़ में खुद से बिछड़ गए थे हम',
      'अकेलेपन ने ही दोबारा खुद से मुलाक़ात करवाई है',
    ],
    linesHinglish: [
      'Duniya ki bhaagdaud mein khud se bichhad gaye the hum',
      'Akelepan ne hi dobaara khud se mulaaqaat karwaai hai',
    ],
    linesEnglish: [
      'Lost inside the rush of pleasing everyone around',
      'Solitude gently introduced me back to my own true self',
    ],
  },
  {
    title: 'सच्चा एकांत',
    titleEnglish: 'Restorative Solitude',
    linesHindi: [
      'अकेलापन हमेशा उदासी की वजह नहीं होता मेरे दोस्त',
      'कभी-कभी यह खुद को ठीक करने का सबसे अच्छा वक़्त है',
    ],
    linesHinglish: [
      'Akelapan hamesha udaasi ki wajah nahin hota mere dost',
      'Kabhi-kabhi yah khud ko theek karne ka sabse accha waqt hai',
    ],
    linesEnglish: [
      'Being alone does not always spell sadness, my friend',
      'Often it is the gentlest season to mend your spirit whole',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'नए शहर की तन्हाई',
    titleEnglish: 'Quiet Nights in a New Town',
    linesHindi: [
      'किराये के छोटे से कमरे में अपना सामान समेटते हुए',
      'पहली बार समझा कि बड़े होने की कीमत अकेलापन है',
    ],
    linesHinglish: [
      'Kiraaye ke chhote se kamre mein apna saamaan samet-te hue',
      'Pehli baar samjha ki bade hone ki keemat akelapan hai',
    ],
    linesEnglish: [
      'Unpacking boxes inside a tiny rented room far from home',
      'Taught me for the first time how solitary growing up can feel',
    ],
  },
  {
    title: 'बिना भीड़ के जश्न',
    titleEnglish: 'Celebrating Quietly Solo',
    linesHindi: [
      'जरूरी नहीं कि हर खुशी में सौ लोगों का शोर शामिल हो',
      'अकेले बैठकर अपनी जीत पर मुस्कुराना भी कमाल है',
    ],
    linesHinglish: [
      'Zaroori nahin ki har khushi mein sau logon ka shor shaamil ho',
      'Akele baithkar apni jeet par muskurana bhi kamaal hai',
    ],
    linesEnglish: [
      'Every celebration need not ring with a hundred noisy voices',
      'Smiling quietly alone over a personal triumph feels magic too',
    ],
  },
  {
    title: 'शांत समंदर',
    titleEnglish: 'Still Waters',
    linesHindi: [
      'किनारे पर शोर मचाने वाली भीड़ से दूर निकल आया हूँ',
      'अब समंदर के शांत बीचों-बीच अपना सुकून ढूँढता हूँ',
    ],
    linesHinglish: [
      'Kinaare par shor machaane waali bheed se door nikal aaya hoon',
      'Ab samandar ke shaant beechon-beech apna sukoon dhoondhta hoon',
    ],
    linesEnglish: [
      'I drifted far from the noisy chatter along the shore',
      'Seeking stillness out upon quiet, open waters',
    ],
  },
  {
    title: 'सुकून की खिड़की',
    titleEnglish: 'Window Overlooking Dusk',
    linesHindi: [
      'खिड़की के बाहर डूबते सूरज को देखते रहना अकेले',
      'दिल की सारी उलझनों को चुपचाप सुलझा देता है',
    ],
    linesHinglish: [
      'Khidki ke baahar doobte sooraj ko dekhte rehna akele',
      'Dil ki saari uljhanon ko chupchaap suljha deta hai',
    ],
    linesEnglish: [
      'Watching the sun dip slowly past an open window alone',
      'Gently untangles every noisy knot inside the chest',
    ],
  },
  {
    title: 'ख़ुद पर निर्भरता',
    titleEnglish: 'Standing Solo With Pride',
    linesHindi: [
      'जब कोई हाथ थामने वाला न मिले अंधेरे रास्ते पर',
      'तो अपनी ही हिम्मत की मशाल जलाकर आगे बढ़ना पड़ता है',
    ],
    linesHinglish: [
      'Jab koi haath thaamne wala na mile andhere raaste par',
      'To apni hi himmat ki mashaal jalaakar aage badhna padta hai',
    ],
    linesEnglish: [
      'When no hand reaches out along a darkened stretch of road',
      'You light your own torch of courage and keep stepping forward',
    ],
  },
  {
    title: 'तन्हाई का आईना',
    titleEnglish: 'Mirror of Solitude',
    linesHindi: [
      'भीड़ में तो हर कोई नक़ाब पहनकर चलता है यहाँ',
      'अकेलेपन में ही इंसान का असली चेहरा सामने आता है',
    ],
    linesHinglish: [
      'Bheed mein to har koi naqaab pehenkar chalta hai yahaan',
      'Akelepan mein hi insaan ka asli chehra saamne aata hai',
    ],
    linesEnglish: [
      'In crowds almost everyone wears a polite, guarded mask',
      'Only in solitude does a person meet their truest face',
    ],
  },
  {
    title: 'सफ़र की डायरी',
    titleEnglish: 'Pages Written Alone',
    linesHindi: [
      'जब बात करने को कोई अपना मौजूद न हो आसपास',
      'तो सफ़ेद पन्ने सबसे अच्छे दोस्त बन जाया करते हैं',
    ],
    linesHinglish: [
      'Jab baat karne ko koi apna maujood na ho aaspaas',
      'To safed panne sabse acche dost ban jaaya karte hain',
    ],
    linesEnglish: [
      'When nobody close sits nearby to listen through the night',
      'Clean white pages become the most patient confidants of all',
    ],
  },
  {
    title: 'गहरी ख़ामोशी का संगीत',
    titleEnglish: 'Music of Stillness',
    linesHindi: [
      'रात तीन बजे जब पूरा मोहल्ला गहरी नींद में हो',
      'तब तन्हाई में भी एक मीठी सी धुन सुनाई देती है',
    ],
    linesHinglish: [
      'Raat teen baje jab poora mohalla gehri neend mein ho',
      'Tab tanhaai mein bhi ek meethi si dhun sunai deti hai',
    ],
    linesEnglish: [
      'At three in the morning when the neighborhood sleeps sound',
      'Even solitude hums a gentle melody all its own',
    ],
  },
  {
    title: 'कम लोगों की दुनिया',
    titleEnglish: 'Small Peaceful Circle',
    linesHindi: [
      'सौ झूठे रिश्तों की भीड़ से कई गुना बेहतर है',
      'कि इंसान अकेला रहकर अपना आत्मसम्मान बचाए रखे',
    ],
    linesHinglish: [
      'Sau jhoothe rishton ki bheed se kai guna behtar hai',
      'Ki insaan akela rehkar apna aatmasammaan bachaaye rakhe',
    ],
    linesEnglish: [
      'Far better than standing amid a hundred hollow acquaintances',
      'Is walking alone while guarding your quiet self-respect',
    ],
  },
  {
    title: 'अकेले बैठने की कला',
    titleEnglish: 'Comfort in Quiet Hours',
    linesHindi: [
      'जो अकेले बैठकर भी ऊबता नहीं अपने ख़्यालों से',
      'उसे फिर किसी के साथ की मोहताजी नहीं रहती',
    ],
    linesHinglish: [
      'Jo akele baithkar bhi oobta nahin apne khayaalon se',
      'Use phir kisi ke saath ki mohtaaji nahin rehti',
    ],
    linesEnglish: [
      'Whoever grows peaceful sitting alone with their own thoughts',
      'Never stays desperate for shallow company again',
    ],
  },
  {
    title: 'सुनसान प्लेटफ़ॉर्म',
    titleEnglish: 'Empty Platform Bench',
    linesHindi: [
      'सब यात्री अपनी-अपनी गाड़ियों में बैठकर निकल गए',
      'बस मैं तन्हाई लिए उसी बेंच पर बैठा सोचता रहा',
    ],
    linesHinglish: [
      'Sab yaatri apni-apni gaadiyon mein baithkar nikal gaye',
      'Bas main tanhaai liye usi bench par baitha sochta raha',
    ],
    linesEnglish: [
      'All the other passengers boarded their trains and pulled away',
      'Leaving me seated thoughtfully alone upon the empty bench',
    ],
  },
  {
    title: 'ख़ुद का सहारा',
    titleEnglish: 'My Own Anchor',
    linesHindi: [
      'आँसू आए तो खुद ही पोंछकर मुस्कुराना सीख लिया',
      'अकेलेपन ने मुझे मेरी ताक़त से मिलवा दिया',
    ],
    linesHinglish: [
      'Aansu aaye to khud hi ponchhkar muskurana seekh liya',
      'Akelepan ne mujhe meri taaqat se milwa diya',
    ],
    linesEnglish: [
      'When tears fell, I learned to wipe them myself and smile again',
      'Solitude introduced me directly to my inner resilience',
    ],
  },
  {
    title: 'ठंडी कॉफी और सोच',
    titleEnglish: 'Cold Coffee and Quiet Thoughts',
    linesHindi: [
      'कैफे की कोने वाली टेबल अब मेरी पहचान बन गई है',
      'अकेले बैठकर दुनिया को देखना भी एक अलग सुकून है',
    ],
    linesHinglish: [
      'Cafe ki kone waali table ab meri pehchaan ban gayi hai',
      'Akele baithkar duniya ko dekhna bhi ek alag sukoon hai',
    ],
    linesEnglish: [
      'That corner cafe table has quietly become my regular spot',
      'Watching the busy world pass by solo brings odd tranquility',
    ],
  },
  {
    title: 'अनचाही परछाइयाँ',
    titleEnglish: 'Silent Companion',
    linesHindi: [
      'दीवार पर बढ़ती-घटती परछाईं देखकर लगता है आज',
      'मेरे कमरों की तन्हाई भी मुझसे बातें करती है',
    ],
    linesHinglish: [
      'Deewar par badhti-ghat-ti parchhaai dekhkar lagta hai aaj',
      'Mere kamron ki tanhaai bhi mujhse baatein karti hai',
    ],
    linesEnglish: [
      'Watching shadows lengthen and fade across the quiet wall',
      'Feels as if the rooms own silence whispers back to me',
    ],
  },
  {
    title: 'भीतर की शांति',
    titleEnglish: 'Inner Stillness',
    linesHindi: [
      'बाहर के कोलाहल ने जब मन को थका दिया था पूरा',
      'तब कुछ दिन अकेले रहकर मैंने नई साँस ली है',
    ],
    linesHinglish: [
      'Baahar ke kolaahal ne jab man ko thaka diya tha poora',
      'Tab kuch din akele rehkar maine nayi saans li hai',
    ],
    linesEnglish: [
      'When outside noise had drained my spirit completely dry',
      'A few quiet days spent solo let me breathe freely once more',
    ],
  },
  {
    title: 'अकेले सफ़र का मज़ा',
    titleEnglish: 'Joy of Solo Travel',
    linesHindi: [
      'जहाँ मन करे रुको, जहाँ दिल चाहे मुड़ जाओ आगे',
      'अकेले सफ़र करने की आज़ादी हर किसी को नहीं मिलती',
    ],
    linesHinglish: [
      'Jahaan man kare ruko, jahaan dil chaahe mud jaao aage',
      'Akele safar karne ki aazaadi har kisi ko nahin milti',
    ],
    linesEnglish: [
      'Pause wherever the heart pleases and wander down any lane',
      'Not everyone tastes the quiet freedom of traveling solo',
    ],
  },
  {
    title: 'खाली रास्ते',
    titleEnglish: 'Quiet Country Lanes',
    linesHindi: [
      'सुबह की धुंध में जब सड़क पर कोई नहीं दिखता दूर तक',
      'तब लगता है पूरी धरती सिर्फ़ मेरे लिए सजी है आज',
    ],
    linesHinglish: [
      'Subah ki dhundh mein jab sadak par koi nahin dikhta door tak',
      'Tab lagta hai poori dharti sirf mere liye saji hai aaj',
    ],
    linesEnglish: [
      'Walking through morning mist with not a soul in sight ahead',
      'Feels as though the whole quiet earth woke up just for me',
    ],
  },
  {
    title: 'दिल की गहराई',
    titleEnglish: 'Deep Quiet Core',
    linesHindi: [
      'सबको खुश रखने की कोशिश में थक गए थे हम बहुत',
      'अकेले रहकर अब सिर्फ़ अपनी शांति बचाते हैं हम',
    ],
    linesHinglish: [
      'Sabko khush rakhne ki koshish mein thak gaye the hum bahut',
      'Akele rehkar ab sirf apni shaanti bachaate hain hum',
    ],
    linesEnglish: [
      'Exhausted from trying endlessly to please every single face',
      'I stay quietly by myself now simply guarding my peace',
    ],
  },
  {
    title: 'शाम की तन्हा रोशनी',
    titleEnglish: 'Single Porch Lamp',
    linesHindi: [
      'पोर्च में जलता एक छोटा सा बल्ब अंधेरे से लड़ता है',
      'कभी-कभी अकेला होना भी रोशनी जैसा सुंदर लगता है',
    ],
    linesHinglish: [
      'Porch mein jalta ek chhota sa bulb andhere se ladta hai',
      'Kabhi-kabhi akela hona bhi roshni jaisa sundar lagta hai',
    ],
    linesEnglish: [
      'One modest porch bulb holds back the night all on its own',
      'Sometimes standing alone shines with a quiet beauty of its own',
    ],
  },
  {
    title: 'अनसुनी परवाह',
    titleEnglish: 'Unspoken Care for Oneself',
    linesHindi: [
      'आज अपने लिए खुद ही गरम खाना बनाया और खाया मैंने',
      'तन्हाई में भी खुद से प्यार करना कितना सुकून देता है',
    ],
    linesHinglish: [
      'Aaj apne liye khud hi garam khaana banaaya aur khaaya maine',
      'Tanhaai mein bhi khud se pyaar karna kitna sukoon deta hai',
    ],
    linesEnglish: [
      'Tonight I cooked a warm dinner carefully just for myself',
      'Treating your own soul gently in solitude feels surprisingly rich',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'भीड़ से किनारा',
    titleEnglish: 'Stepping Back From Noise',
    linesHindi: [
      'दिखावटी दोस्तों के शोर से बाहर निकलकर देखा जब',
      'तो अकेलेपन की सादगी बहुत प्यारी लगने लगी मुझे',
    ],
    linesHinglish: [
      'Dikhaawati doston ke shor se baahar nikalkar dekha jab',
      'To akelepan ki saadgi bahut pyaari lagne lagi mujhe',
    ],
    linesEnglish: [
      'Once I stepped clear of shallow crowds and noisy chatter',
      'The gentle honesty of solitude grew deeply dear to me',
    ],
  },
  {
    title: 'ख़ाली आकाश और परिंदा',
    titleEnglish: 'Lone Bird Across Skies',
    linesHindi: [
      'नीले आसमान में अकेला उड़ता परिंदा बता रहा है',
      'कि ऊँचाई पर पहुंचने के लिए भीड़ की ज़रूरत नहीं होती',
    ],
    linesHinglish: [
      'Neele aasmaan mein akela udta parinda bata raha hai',
      'Ki oonchaai par pahunchne ke liye bheed ki zaroorat nahin hoti',
    ],
    linesEnglish: [
      'A lone eagle gliding across high blue skies reminds us',
      'Reaching tall heights never requires flying in a flock',
    ],
  },
  {
    title: 'अकेलेपन की सीख',
    titleEnglish: 'Wisdom Taught by Solitude',
    linesHindi: [
      'अकेलेपन ने सिखाया है कि सहारे कितने अस्थायी होते हैं',
      'अंत में हर इंसान को अपना बोझ खुद ही उठाना पड़ता है',
    ],
    linesHinglish: [
      'Akelepan ne sikhaya hai ki sahaare kitne asthaayi hote hain',
      'Ant mein har insaan ko apna bojh khud hi uthana padta hai',
    ],
    linesEnglish: [
      'Solitude teaches how temporary outside crutches often are',
      'Eventually each soul learns to steady its own steps forward',
    ],
  },
  {
    title: 'सर्द शाम का कोना',
    titleEnglish: 'Warm Blanket Alone',
    linesHindi: [
      'बाहर धुंध है और अंदर कंबल ओढ़े बैठा हूँ अकेला',
      'कोई शोर नहीं, कोई उम्मीद नहीं, बस गहरा सुकून है',
    ],
    linesHinglish: [
      'Baahar dhundh hai aur andar kambal odhe baitha hoon akela',
      'Koi shor nahin, koi ummeed nahin, bas gehra sukoon hai',
    ],
    linesEnglish: [
      'Fog settles outside while I sit wrapped in a warm blanket solo',
      'No clamor, no expectations—just deep, quiet calm',
    ],
  },
  {
    title: 'अधूरी महफ़िल से बेहतर',
    titleEnglish: 'Better Than Hollow Crowds',
    linesHindi: [
      'जहाँ तुम्हारी कद्र न हो ऐसी महफ़िल से उठ आना बेहतर है',
      'तन्हा रहना कम से कम अपना वजूद तो ज़िंदा रखता है',
    ],
    linesHinglish: [
      'Jahaan tumhaari qadr na ho aisi mehfil se uth aana behtar hai',
      'Tanha rehna kam se kam apna wajood to zinda rakhta hai',
    ],
    linesEnglish: [
      'Leaving a table where your voice goes unheard is always wiser',
      'Standing alone at least keeps your dignity alive and whole',
    ],
  },
  {
    title: 'ख़ुद की आवाज़ सुनना',
    titleEnglish: 'Hearing My Own Voice',
    linesHindi: [
      'दूसरों की सलाहों में दब गई थी मेरी अपनी सोच',
      'अकेले रहकर पहली बार खुद की आवाज़ साफ सुनी मैंने',
    ],
    linesHinglish: [
      'Doosron ki salaahon mein dab gayi thi meri apni soch',
      'Akele rehkar pehli baar khud ki aawaaz saaf suni maine',
    ],
    linesEnglish: [
      'Buried beneath endless advice from everyone around me',
      'Only in solitude did I hear my own clear voice again',
    ],
  },
  {
    title: 'धीमी बारिश और सन्नाटा',
    titleEnglish: 'Rain Tap Against Silence',
    linesHindi: [
      'टिन की छत पर बूँदें गिरती हैं और कमरा शांत रहता है',
      'ऐसी तन्हा शामें मुझे बहुत कुछ सोचने का मौका देती हैं',
    ],
    linesHinglish: [
      'Tin ki chhat par boondein girti hain aur kamra shaant rehta hai',
      'Aisi tanha shaamein mujhe bahut kuch sochne ka mauqa deti hain',
    ],
    linesEnglish: [
      'Raindrops drum softly overhead while my quiet room rests still',
      'Such solitary evenings hand me space to breathe and reflect',
    ],
  },
  {
    title: 'बेदाग़ आज़ादी',
    titleEnglish: 'Untethered Hours',
    linesHindi: [
      'किसी के इंतज़ार में घड़ी देखने की आदत छूट गई अब',
      'जब चाहा सोया, जब चाहा उठा, यही अकेले होने का सुख है',
    ],
    linesHinglish: [
      'Kisi ke intezaar mein ghadi dekhne ki aadat chhoot gayi ab',
      'Jab chaaha soya, jab chaaha utha, yahi akele hone ka sukh hai',
    ],
    linesEnglish: [
      'I stopped watching the clock waiting endlessly on others',
      'Waking and resting on my own rhythm brings quiet ease',
    ],
  },
  {
    title: 'यादों से खाली कमरा',
    titleEnglish: 'Cleared Space Inside',
    linesHindi: [
      'धीरे-धीरे कमरा और मन दोनों खाली कर लिए मैंने',
      'ताकि नए सफ़र के लिए ज़्यादा बोझ न उठाना पड़े',
    ],
    linesHinglish: [
      'Dheere-dheere kamra aur man dono khaali kar liye maine',
      'Taaki naye safar ke liye zyada bojh na uthana pade',
    ],
    linesEnglish: [
      'Slowly I cleared out clutter from both room and mind',
      'So the next chapter ahead needs no heavy baggage carried',
    ],
  },
  {
    title: 'अकेले मुसाफ़िर का हौसला',
    titleEnglish: 'Spirit of a Solo Traveler',
    linesHindi: [
      'सफ़र चाहे लंबा हो और रास्ता बिल्कुल अनजान लगे',
      'अकेला मुसाफ़िर भी मंज़िल तक पहुँच ही जाता है एक दिन',
    ],
    linesHinglish: [
      'Safar chaahe lamba ho aur raasta bilkul anjaan lage',
      'Akela musaafir bhi manzil tak pahunch hi jaata hai ek din',
    ],
    linesEnglish: [
      'Even when miles stretch long and trails look unfamiliar',
      'A steady solo traveler still reaches home safely one day',
    ],
  },
  {
    title: 'चुपचाप संभलना',
    titleEnglish: 'Healing Without Audience',
    linesHindi: [
      'अपने टूटे हुए हिस्से अकेले में जोड़ना सीख लिया है',
      'अब किसी के कंधे का इंतज़ार नहीं करता मेरा दिल',
    ],
    linesHinglish: [
      'Apne toote hue hisse akele mein jodna seekh liya hai',
      'Ab kisi ke kandhe ka intezaar nahin karta mera dil',
    ],
    linesEnglish: [
      'I have learned how to mend my bruised pieces quietly alone',
      'My heart no longer waits anxiously for anyones shoulder',
    ],
  },
  {
    title: 'तारों की छत तले',
    titleEnglish: 'Beneath Silent Stars',
    linesHindi: [
      'शहर की बत्तियाँ बुझती हैं तो आसमान खुल जाता है',
      'तन्हा रातों में तारे ही सबसे पुराने दोस्त लगते हैं',
    ],
    linesHinglish: [
      'Shehar ki battiyan bujhti hain to aasmaan khul jaata hai',
      'Tanha raaton mein taare hi sabse purane dost lagte hain',
    ],
    linesEnglish: [
      'When streetlights dim, the vast sky opens overhead',
      'Through solitary nights, distant stars feel like old companions',
    ],
  },
  {
    title: 'भीतर की रोशनी',
    titleEnglish: 'Light Kindled Solo',
    linesHindi: [
      'अँधेरा कितना भी घना हो, किसी की प्रतीक्षा मत करना',
      'अकेले ही अपनी राह में दीपक जलाना सीख लो दोस्त',
    ],
    linesHinglish: [
      'Andhera kitna bhi ghana ho, kisi ki prateeksha mat karna',
      'Akele hi apni raah mein deepak jalaana seekh lo dost',
    ],
    linesEnglish: [
      'However thick darkness falls, wait for nobody to rescue you',
      'Learn to kindle your own small lamp along the trail, friend',
    ],
  },
  {
    title: 'बिना शिकायत अकेलापन',
    titleEnglish: 'Peaceful With Being Alone',
    linesHindi: [
      'हर किसी को हर बात समझाई नहीं जा सकती ज़िंदगी में',
      'इसलिए चुपचाप अकेले चल देना ही सुकून देता है',
    ],
    linesHinglish: [
      'Har kisi ko har baat samjhaai nahin ja sakti zindagi mein',
      'Isliye chupchaap akele chal dena hi sukoon deta hai',
    ],
    linesEnglish: [
      'You cannot explain your heart clearly to every passerby',
      'Stepping away quietly on your own often brings truer calm',
    ],
  },
  {
    title: 'मज़बूत एकांत',
    titleEnglish: 'Strength Born in Quiet',
    linesHindi: [
      'शोर में अक्सर इंसान खुद से दूर चला जाता है',
      'तन्हाई ही वापस हमें अपनी जड़ों से जोड़ती है',
    ],
    linesHinglish: [
      'Shor mein aksar insaan khud se door chala jaata hai',
      'Tanhaai hi waapas humein apni jadon se jodti hai',
    ],
    linesEnglish: [
      'Amidst constant noise, people drift far away from themselves',
      'Solitude gently anchors us straight back to our roots',
    ],
  },
  {
    title: 'ख़ाली सड़क पर सुबह',
    titleEnglish: 'Dawn on Empty Streets',
    linesHindi: [
      'भोर के उजाले में अकेले दौड़ने का आनंद ही अलग है',
      'न कोई पीछे खींचने वाला, न कोई तुलना करने वाला',
    ],
    linesHinglish: [
      'Bhor ke ujaale mein akele daudne ka aanand hi alag hai',
      'Na koi peeche kheenchne wala, na koi tulna karne wala',
    ],
    linesEnglish: [
      'Running solo at early dawn carries an unmatched clarity',
      'Nobody pulling you back, nobody racing to compare',
    ],
  },
  {
    title: 'मन की शांत झील',
    titleEnglish: 'Quiet Lake Within',
    linesHindi: [
      'पत्थर न फेंके कोई तो पानी भी आईने सा शांत रहता है',
      'कुछ वक़्त अकेले बिताने पर मन भी वैसा ही साफ़ हो जाता है',
    ],
    linesHinglish: [
      'Patthar na phenke koi to paani bhi aaine sa shaant rehta hai',
      'Kuch waqt akele bitaane par man bhi waisa hi saaf ho jaata hai',
    ],
    linesEnglish: [
      'Undisturbed by pebbles, water settles smooth as glass',
      'Spending time quietly alone makes the mind equally clear',
    ],
  },
  {
    title: 'अनकही समझदारी',
    titleEnglish: 'Quiet Maturity',
    linesHindi: [
      'अब हर किसी को अपनी कहानी सुनाने का मन नहीं करता',
      'कुछ दर्द अपने पास अकेले रखने में ही गरिमा लगती है',
    ],
    linesHinglish: [
      'Ab har kisi ko apni kahaani sunaane ka man nahin karta',
      'Kuch dard apne paas akele rakhne mein hi garima lagti hai',
    ],
    linesEnglish: [
      'I no longer feel eager to tell my story to every ear',
      'Carrying certain chapters quietly alone feels dignified now',
    ],
  },
  {
    title: 'अकेलेपन की ताक़त',
    titleEnglish: 'Steadiness of Solitude',
    linesHindi: [
      'जो इंसान अकेले रहने से नहीं डरता इस दुनिया में',
      'उसे कोई भी गलत रिश्ता मजबूरी में नहीं बांध सकता',
    ],
    linesHinglish: [
      'Jo insaan akele rehne se nahin darta is duniya mein',
      'Use koi bhi galat rishta majboori mein nahin baandh sakta',
    ],
    linesEnglish: [
      'A person who holds no fear of standing alone in life',
      'Can never be trapped inside an unkind bond out of loneliness',
    ],
  },
  {
    title: 'चुपचाप बढ़ता क़द',
    titleEnglish: 'Growing Quietly',
    linesHindi: [
      'अकेले रहकर ही बड़ी तैयारियाँ पूरी होती हैं जीवन में',
      'शोर तो बस जीत के दिन दुनिया की तरफ़ से होता है',
    ],
    linesHinglish: [
      'Akele rehkar hi badi taiyaariyan poori hoti hain jeevan mein',
      'Shor to bas jeet ke din duniya ki taraf se hota hai',
    ],
    linesEnglish: [
      'Every meaningful preparation takes place quietly behind closed doors',
      'Applause from the world only arrives on the day of victory',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'शाम का अकेला मुसाफ़िर',
    titleEnglish: 'Twilight Walker',
    linesHindi: [
      'सूरज ढलते वक़्त नदी किनारे अकेले टहलना अच्छा लगता है',
      'बहते पानी के साथ दिल का हर बोझ भी हल्का हो जाता है',
    ],
    linesHinglish: [
      'Sooraj dhalte waqt nadi kinaare akele tehalna accha lagta hai',
      'Behte paani ke saath dil ka har bojh bhi halka ho jaata hai',
    ],
    linesEnglish: [
      'Strolling solo along the riverbank as evening fades',
      'Lets every heavy thought drift downstream with the current',
    ],
  },
  {
    title: 'भीतर की आवाज़',
    titleEnglish: 'Clarity in Silence',
    linesHindi: [
      'जब आसपास के सारे दरवाज़े शांत हो जाते हैं रात को',
      'तभी सबसे सटीक विचारों का जन्म होता है मन में',
    ],
    linesHinglish: [
      'Jab aaspaas ke saare darwaaze shaant ho jaate hain raat ko',
      'Tabhi sabse sateek vichaaron ka janm hota hai man mein',
    ],
    linesEnglish: [
      'Once every hallway falls quiet at night',
      'Your clearest, truest thoughts finally find room to speak',
    ],
  },
  {
    title: 'ख़ुद का सम्मान',
    titleEnglish: 'Choosing Dignity Over Crowds',
    linesHindi: [
      'जहाँ बार-बार अपनी जगह साबित करनी पड़े लोगों को',
      'वहाँ रुकने से कहीं बेहतर अकेले निकल जाना होता है',
    ],
    linesHinglish: [
      'Jahaan baar-baar apni jagah saabit karni pade logon ko',
      'Wahaan rukne se kahin behtar akele nikal jaana hota hai',
    ],
    linesEnglish: [
      'Where you must constantly prove your worth to stay included',
      'Walking away cleanly on your own is far nobler than staying',
    ],
  },
  {
    title: 'अकेलेपन में रचनात्मकता',
    titleEnglish: 'Quiet Hours Create',
    linesHindi: [
      'अकेले कमरों ने ही दुनिया को सबसे प्यारी कविताएँ दी हैं',
      'भीड़ में तो सिर्फ़ अधूरी चर्चाएँ ही हो पाती हैं',
    ],
    linesHinglish: [
      'Akele kamron ne hi duniya ko sabse pyaari kavitaayein di hain',
      'Bheed mein to sirf adhoori charchaayein hi ho paati hain',
    ],
    linesEnglish: [
      'Quiet rooms have gifted the world its deepest poetry',
      'Noisy gatherings rarely produce more than fleeting chatter',
    ],
  },
  {
    title: 'ख़ाली शाम और संगीत',
    titleEnglish: 'Solo Evening Melodies',
    linesHindi: [
      'दीवार से टिककर पुराने गाने सुनते वक़्त लगता है',
      'तन्हाई भी कितनी शालीन और समझदार होती है',
    ],
    linesHinglish: [
      'Deewar se tikkar purane gaane sunte waqt lagta hai',
      'Tanhaai bhi kitni shaaleen aur samajhdaar hoti hai',
    ],
    linesEnglish: [
      'Leaning back listening to classic songs completely alone',
      'Shows just how graceful and gentle solitude can feel',
    ],
  },
  {
    title: 'बिना भीड़ की पहचान',
    titleEnglish: 'Standing Apart Quietly',
    linesHindi: [
      'हर किसी के जैसे बनने की होड़ से बाहर निकल आया हूँ',
      'अकेला हूँ पर कम से कम अपने जैसा बना हुआ हूँ',
    ],
    linesHinglish: [
      'Har kisi ke jaise banne ki hod se baahar nikal aaya hoon',
      'Akela hoon par kam se kam apne jaisa bana hua hoon',
    ],
    linesEnglish: [
      'I stepped right out of the race to look like everyone else',
      'I may stand alone, yet at least I remain genuinely myself',
    ],
  },
  {
    title: 'तालाब के पास अकेलापन',
    titleEnglish: 'Beside Calm Waters',
    linesHindi: [
      'पार्क के शांत कोने में बैठकर पंछियों को दाना डालना',
      'अकेले रहकर भी दिल को खुश रखने का प्यारा तरीका है',
    ],
    linesHinglish: [
      'Park ke shaant kone mein baithkar panchhiyon ko daana daalna',
      'Akele rehkar bhi dil ko khush rakhne ka pyaara tareeka hai',
    ],
    linesEnglish: [
      'Sitting in a quiet park corner tossing seeds to sparrows',
      'Is a tender way to keep the heart warm even on solo days',
    ],
  },
  {
    title: 'अधूरे साथ से आज़ादी',
    titleEnglish: 'Better Alone Than Lonely Together',
    linesHindi: [
      'गलत साथ में रहकर अकेले महसूस करने से बेहतर है',
      'कि इंसान अकेले रहकर पूरा सुकून महसूस करे',
    ],
    linesHinglish: [
      'Galat saath mein rehkar akele mehsoos karne se behtar hai',
      'Ki insaan akele rehkar poora sukoon mehsoos kare',
    ],
    linesEnglish: [
      'Far better than feeling lonely beside the wrong person',
      'Is standing comfortably alone in full, unbroken peace',
    ],
  },
  {
    title: 'कमरे का अकेला कोना',
    titleEnglish: 'My Quiet Sanctuary',
    linesHindi: [
      'दिन भर की दफ़्तरी भीड़ से थककर लौटता हूँ जब',
      'अपना अकेला कमरा जन्नत से कम नहीं लगता तब',
    ],
    linesHinglish: [
      'Din bhar ki daftari bheed se thakkar lautta hoon jab',
      'Apna akela kamra jannat se kam nahin lagta tab',
    ],
    linesEnglish: [
      'Returning home drained from endless office noise all day',
      'My quiet solo apartment feels nothing short of heaven',
    ],
  },
  {
    title: 'सच्ची समझ',
    titleEnglish: 'Self-Understanding',
    linesHindi: [
      'हम दूसरों को समझने में पूरी उम्र गुज़ार देते हैं',
      'अकेलापन ही वो आईना है जो हमें खुद से मिलाता है',
    ],
    linesHinglish: [
      'Hum doosron ko samajhne mein poori umar guzaar dete hain',
      'Akelapan hi wo aaina hai jo humein khud se milaata hai',
    ],
    linesEnglish: [
      'We spend whole lifetimes trying hard to decode others',
      'Solitude is the quiet mirror that finally introduces us to ourselves',
    ],
  },
  {
    title: 'सन्नाटे का मोल',
    titleEnglish: 'Value of Quietude',
    linesHindi: [
      'जब हर वक़्त फोन बजता था तो सुकून गायब रहता था',
      'अब सन्नाटा है तो अपने विचारों की क़द्र समझ आई',
    ],
    linesHinglish: [
      'Jab har waqt phone bajta tha to sukoon gaayab rehta tha',
      'Ab sannata hai to apne vichaaron ki qadr samajh aayi',
    ],
    linesEnglish: [
      'When my phone chimed non-stop, peace never stood a chance',
      'Now in this stillness, I finally value my own thoughts',
    ],
  },
  {
    title: 'बदलता हुआ नज़रिए का दौर',
    titleEnglish: 'Seeing Solitude Differently',
    linesHindi: [
      'कभी जिसे सज़ा समझकर रोता था रातों में मैं',
      'आज वही तन्हाई मेरी सबसे बड़ी ताक़त बन चुकी है',
    ],
    linesHinglish: [
      'Kabhi jise saza samajhkar rota tha raaton mein main',
      'Aaj wahi tanhaai meri sabse badi taaqat ban chuki hai',
    ],
    linesEnglish: [
      'What I once wept over at night thinking it a punishment',
      'Has quietly grown into my steadying strength today',
    ],
  },
  {
    title: 'सफ़ेद पन्नों से बात',
    titleEnglish: 'Ink and Quiet Pages',
    linesHindi: [
      'मन जब भर आता है और कोई सुनने वाला नहीं होता',
      'तो कलम उठाकर पन्नों से सब कह देना अच्छा लगता है',
    ],
    linesHinglish: [
      'Man jab bhar aata hai aur koi sunne wala nahin hota',
      'To kalam uthaakar pannon se sab keh dena accha lagta hai',
    ],
    linesEnglish: [
      'When your chest swells full and no listener stands near',
      'Picking up a pen to tell blank pages everything feels healing',
    ],
  },
  {
    title: 'रात की शांति में आराम',
    titleEnglish: 'Rest in Night Stillness',
    linesHindi: [
      'बिना किसी के फ़ोन का इंतज़ार किए सो जाना चैन से',
      'अकेले रहने की सबसे सुकून भरी आदत होती है',
    ],
    linesHinglish: [
      'Bina kisi ke phone ka intezaar kiye so jaana chain se',
      'Akele rehne ki sabse sukoon bhari aadat hoti hai',
    ],
    linesEnglish: [
      'Drifting peacefully asleep without waiting on anyones call',
      'Is one of the quietest reliefs of standing independent',
    ],
  },
  {
    title: 'अकेले पलों का श्रृंगार',
    titleEnglish: 'Graceful Solo Hours',
    linesHindi: [
      'कमरे में एक छोटा सा पौधा और हल्की सी रोशनी रख लो',
      'अकेलापन भी किसी प्यारे घर जैसा लगने लगेगा',
    ],
    linesHinglish: [
      'Kamre mein ek chhota sa paudha aur halki si roshni rakh lo',
      'Akelapan bhi kisi pyaare ghar jaisa lagne lagega',
    ],
    linesEnglish: [
      'Keep one small green plant and a soft warm lamp nearby',
      'And even solo evenings begin feeling warmly like home',
    ],
  },
  {
    title: 'मौन की ताक़त',
    titleEnglish: 'Quiet Resilience',
    linesHindi: [
      'हर लड़ाई चीखकर नहीं लड़ी जाती इस दुनिया में',
      'कुछ जंगें अकेले और चुपचाप रहकर जीती जाती हैं',
    ],
    linesHinglish: [
      'Har ladaai cheekhkar nahin ladi jaati is duniya mein',
      'Kuch jangein akele aur chupchaap rehkar jeeti jaati hain',
    ],
    linesEnglish: [
      'Not every battle in life is fought with loud voices',
      'Some of the bravest victories are won quietly alone',
    ],
  },
  {
    title: 'खुले मैदान की हवा',
    titleEnglish: 'Open Air Freedom',
    linesHindi: [
      'जब मन बहुत भारी लगे तो खुले आसमान के नीचे खड़े हो जाओ',
      'पूरी प्रकृति अकेलेपन में तुम्हारा साथ देने आ जाती है',
    ],
    linesHinglish: [
      'Jab man bahut bhaari lage to khule aasmaan ke neeche khade ho jaao',
      'Poori prakriti akelepan mein tumhaara saath dene aa jaati hai',
    ],
    linesEnglish: [
      'When your heart feels heavy, step out beneath the open sky',
      'All of nature steps quietly forward to keep you company',
    ],
  },
  {
    title: 'अजनबी रास्तों का आनंद',
    titleEnglish: 'Solo Steps Ahead',
    linesHindi: [
      'भीड़ के पीछे चलने से सिर्फ़ धूल मिलती है पैरों को',
      'अकेले राह बनाने वालों को ही नया आसमान मिलता है',
    ],
    linesHinglish: [
      'Bheed ke peeche chalne se sirf dhool milti hai pairon ko',
      'Akele raah banaane waalon ko hi naya aasmaan milta hai',
    ],
    linesEnglish: [
      'Following blindly behind crowds kicks up nothing but dust',
      'Those willing to step out solo discover wide open horizons',
    ],
  },
  {
    title: 'अपने अंदर का घर',
    titleEnglish: 'Home Within Oneself',
    linesHindi: [
      'दुनिया में भटककर आख़िर में इंसान यहीं सीखता है',
      'कि सबसे सुरक्षित घर खुद के भीतर ही बसा होता है',
    ],
    linesHinglish: [
      'Duniya mein bhatakkar aakhir mein insaan yahin seekhta hai',
      'Ki sabse surakshit ghar khud ke bheetar hi basa hota hai',
    ],
    linesEnglish: [
      'After wandering far and wide, every traveler eventually learns',
      'The safest home of all rests peacefully inside your own soul',
    ],
  },
  {
    title: 'ख़ामोश मुसाफ़िर',
    titleEnglish: 'Quiet Wayfarer',
    linesHindi: [
      'कोई साथ चले तो स्वागत, न चले तो भी सफ़र जारी है',
      'तन्हा रहना भी जिंदगी की एक खूबसूरत सवारी है',
    ],
    linesHinglish: [
      'Koi saath chale to swaagat, na chale to bhi safar jaari hai',
      'Tanha rehna bhi zindagi ki ek khoobsurat sawaari hai',
    ],
    linesEnglish: [
      'If someone walks beside me, welcome; if not, the road rolls on',
      'Walking solo can still be a lovely stretch of lifes journey',
    ],
  },
  // Block 5 (81-98)
  {
    title: 'सुकून भरा एकांत',
    titleEnglish: 'Peaceful Solitude',
    linesHindi: [
      'जब से लोगों से उम्मीदें लगाना कम कर दिया मैंने',
      'अकेलेपन में भी एक गज़ब का आराम मिलने लगा है',
    ],
    linesHinglish: [
      'Jab se logon se ummeedein lagaana kam kar diya maine',
      'Akelepan mein bhi ek gazab ka aaraam milne laga hai',
    ],
    linesEnglish: [
      'Ever since I lowered my expectations of everyone around',
      'Even solitude carries a wonderful sense of quiet relief',
    ],
  },
  {
    title: 'अपने साथ की क़द्र',
    titleEnglish: 'Valuing Quiet Company',
    linesHindi: [
      'खुद को कभी कमजोर मत समझना अकेला देखकर',
      'शेर भी जंगल में हमेशा अकेले ही कदम रखता है',
    ],
    linesHinglish: [
      'Khud ko kabhi kamzor mat samajhna akela dekhkar',
      'Sher bhi jangal mein hamesha akele hi kadam rakhta hai',
    ],
    linesEnglish: [
      'Never mistake standing alone for being weak',
      'Even the lion walks its path through the wild alone',
    ],
  },
  {
    title: 'धुंधली सुबह में एकांत',
    titleEnglish: 'Misty Solo Morning',
    linesHindi: [
      'सुबह की पहली चाय के साथ छत पर टहलता हूँ अकेला',
      'कोई शोर-शराबा नहीं, बस परिंदों की मीठी आवाज़ें हैं',
    ],
    linesHinglish: [
      'Subah ki pehli chai ke saath chhat par tehalta hoon akela',
      'Koi shor-sharaaba nahin, bas parindon ki meethi aawaazein hain',
    ],
    linesEnglish: [
      'Strolling the rooftop solo with my first morning cup of tea',
      'No traffic or clamor—only soft birdsong drifting overhead',
    ],
  },
  {
    title: 'दिल की शांत बस्ती',
    titleEnglish: 'Quiet Town of the Mind',
    linesHindi: [
      'ज़्यादा बोलने वालों के बीच अक्सर सच्चाई खो जाती है',
      'अकेले बैठकर मन की हर बात साफ़ दिखने लगती है',
    ],
    linesHinglish: [
      'Zyada bolne waalon ke beech aksar sacchai kho jaati hai',
      'Akele baithkar man ki har baat saaf dikhne lagti hai',
    ],
    linesEnglish: [
      'Truth easily gets drowned out amidst loud chatter',
      'Sitting quietly alone brings every inner thought into clear view',
    ],
  },
  {
    title: 'आज़ाद ख़्याल',
    titleEnglish: 'Unbound Thoughts',
    linesHindi: [
      'तन्हाई में ख़्यालों को कोई दीवार रोक नहीं पाती',
      'इंसान बैठकर पूरा ब्रह्मांड घूम आता है एक पल में',
    ],
    linesHinglish: [
      'Tanhaai mein khayaalon ko koi deewar rok nahin paati',
      'Insaan baithkar poora brahmaand ghoom aata hai ek pal mein',
    ],
    linesEnglish: [
      'No wall can box in a mind wandering freely in solitude',
      'Sitting quietly, you can travel across whole worlds in a breath',
    ],
  },
  {
    title: 'अकेलेपन का संतोष',
    titleEnglish: 'Contentment Alone',
    linesHindi: [
      'कमरे की शांति में खुद से बातें करना सीख लिया है',
      'अब किसी के आने या न आने से दिल घबराता नहीं',
    ],
    linesHinglish: [
      'Kamre ki shaanti mein khud se baatein karna seekh liya hai',
      'Ab kisi ke aane ya na aane se dil ghabrata nahin',
    ],
    linesEnglish: [
      'I have grown comfortable conversing gently with myself in quiet rooms',
      'My heart no longer panics over who comes or goes',
    ],
  },
  {
    title: 'चुपचाप संभलते रिश्ते',
    titleEnglish: 'Boundaries in Quiet',
    linesHindi: [
      'कुछ दूरी बना लेना हमेशा नफ़रत नहीं होती दोस्त',
      'कभी-कभी खुद को बचाने के लिए अकेला रहना ज़रूरी है',
    ],
    linesHinglish: [
      'Kuch doori bana lena hamesha nafrat nahin hoti dost',
      'Kabhi-kabhi khud ko bachaane ke liye akela rehna zaroori hai',
    ],
    linesEnglish: [
      'Stepping back into space does not always mean anger, friend',
      'Sometimes quiet solitude is how you protect your peace whole',
    ],
  },
  {
    title: 'ख़ाली रास्ते की सच्चाई',
    titleEnglish: 'Truth on Empty Paths',
    linesHindi: [
      'भीड़ तो हमेशा मंज़िल पर तालियाँ बजाने आती है',
      'रास्ते का सफ़र हर इंसान को अकेले ही काटना पड़ता है',
    ],
    linesHinglish: [
      'Bheed to hamesha manzil par taaliyan bajaane aati hai',
      'Raaste ka safar har insaan ko akele hi kaatna padta hai',
    ],
    linesEnglish: [
      'Crowds always show up right at the finish line to applaud',
      'Every stretch of the climb in between is walked alone',
    ],
  },
  {
    title: 'निर्मल एकांत',
    titleEnglish: 'Pure Quietude',
    linesHindi: [
      'जब झूठे रिश्तों की धूल छँट जाती है ज़िंदगी से',
      'तो अकेलेपन की ताज़ी हवा बहुत साफ़ लगती है',
    ],
    linesHinglish: [
      'Jab jhoothe rishton ki dhool chhant jaati hai zindagi se',
      'To akelepan ki taazi hawa bahut saaf lagti hai',
    ],
    linesEnglish: [
      'Once the dust of insincere ties settles clear of your life',
      'The fresh air of solitude feels remarkably crisp and clean',
    ],
  },
  {
    title: 'सफ़ेद चादर सा सुकून',
    titleEnglish: 'Clean Sheet Calm',
    linesHindi: [
      'अकेले कमरे में बैठकर मन की थकान उतार देना',
      'किसी महँगे इलाज से ज़्यादा असरदार होता है',
    ],
    linesHinglish: [
      'Akele kamre mein baithkar man ki thakaan utaar dena',
      'Kisi mehngay ilaaj se zyada asardaar hota hai',
    ],
    linesEnglish: [
      'Sitting quietly alone letting mental fatigue gently peel off',
      'Heals faster and deeper than any costly retreat ever could',
    ],
  },
  {
    title: 'रात का शांत दीपक',
    titleEnglish: 'Night Study Lamp',
    linesHindi: [
      'एक छोटा सा लैंप और किताबों के पन्ने पलटती रातें',
      'अकेलेपन को भी कितना खूबसूरत बना देती हैं',
    ],
    linesHinglish: [
      'Ek chhota sa lamp aur kitaabon ke panne palat-ti raatein',
      'Akelepan ko bhi kitna khoobsurat bana deti hain',
    ],
    linesEnglish: [
      'One soft desk lamp and nights turning quiet pages',
      'Transform solitude into something deeply meaningful',
    ],
  },
  {
    title: 'अपने दम पर मुस्कान',
    titleEnglish: 'Self-Made Smile',
    linesHindi: [
      'किसी और पर निर्भर रहना छोड़ दिया खुशी के लिए',
      'अकेले में भी अब होठों पर मुस्कान खुद आ जाती है',
    ],
    linesHinglish: [
      'Kisi aur par nirbhar rehna chhod diya khushi ke liye',
      'Akele mein bhi ab honthon par muskaan khud aa jaati hai',
    ],
    linesEnglish: [
      'I stopped handing anyone else the remote to my happiness',
      'Now a soft smile finds my lips naturally even when alone',
    ],
  },
  {
    title: 'बिन सहारे की मज़बूती',
    titleEnglish: 'Rooted Strength',
    linesHindi: [
      'तन्हाई हमें तोड़ने नहीं, संवारने आती है कई बार',
      'ताकि हम जान सकें कि हम खुद कितने काफ़ी हैं',
    ],
    linesHinglish: [
      'Tanhaai humein todne nahin, sanwaarne aati hai kai baar',
      'Taaki hum jaan sakein ki hum khud kitne kaafi hain',
    ],
    linesEnglish: [
      'Often solitude visits not to break us, but to refine us',
      'Reminding us how wonderfully whole we already are alone',
    ],
  },
  {
    title: 'सपनों से भरा एकांत',
    titleEnglish: 'Solitude Full of Dreams',
    linesHindi: [
      'अकेला बैठा हूँ पर दिल में हज़ारों ख्वाब सजा रखे हैं',
      'ख़ामोश हूँ पर अंदर एक नया आसमान बना रखा है',
    ],
    linesHinglish: [
      'Akela baitha hoon par dil mein hazaaron khwaab saja rakhe hain',
      'Khaamosh hoon par andar ek naya aasmaan bana rakha hai',
    ],
    linesEnglish: [
      'I sit by myself, yet carry bright dreams tucked inside',
      'Outwardly quiet, while building an entire sky within',
    ],
  },
  {
    title: 'भीड़ के परे सुकून',
    titleEnglish: 'Peace Beyond Crowds',
    linesHindi: [
      'कम लोग, कम शोर और दिल में ज़्यादा शांति हो',
      'अकेलेपन की यही सादगी अब सबसे प्यारी लगती है',
    ],
    linesHinglish: [
      'Kam log, kam shor aur dil mein zyada shaanti ho',
      'Akelepan ki yahi saadgi ab sabse pyaari lagti hai',
    ],
    linesEnglish: [
      'Fewer voices, less commotion, and deeper peace inside',
      'This quiet simplicity feels sweeter than any crowd today',
    ],
  },
  {
    title: 'तन्हाई की सौगात',
    titleEnglish: 'Gift of Quiet Space',
    linesHindi: [
      'हर किसी को मौका नहीं मिलता खुद के साथ रहने का',
      'तन्हा पलों को बोझ नहीं, एक सुकून समझकर जियो',
    ],
    linesHinglish: [
      'Har kisi ko mauqa nahin milta khud ke saath rehne ka',
      'Tanha palon ko bojh nahin, ek sukoon samajhkar jiyo',
    ],
    linesEnglish: [
      'Not everyone gets the rare gift of unhurried quiet time',
      'Treat solo hours not as a burden, but as gentle sanctuary',
    ],
  },
  {
    title: 'ख़ुद का सबसे अच्छा साथी',
    titleEnglish: 'Best Friend Within',
    linesHindi: [
      'दुनिया की सबसे गहरी दोस्ती अपने आप से होती है',
      'जिस दिन यह समझ आ जाए, अकेलापन खत्म हो जाता है',
    ],
    linesHinglish: [
      'Duniya ki sabse gehri dosti apne aap se hoti hai',
      'Jis din yah samajh aa jaaye, akelapan khatam ho jaata hai',
    ],
    linesEnglish: [
      'The truest friendship in life is the one built with yourself',
      'Once that settles in, loneliness fades forever away',
    ],
  },
  {
    title: 'शांत सफ़र की ओर',
    titleEnglish: 'Stepping Calmly Solo',
    linesHindi: [
      'न किसी से शिकायत है, न किसी से कोई गिला बाकी है',
      'अब अपने अकेलेपन के साथ ही बहुत प्यारा राबता बाकी है',
    ],
    linesHinglish: [
      'Na kisi se shikayat hai, na kisi se koi gila baaki hai',
      'Ab apne akelepan ke saath hi bahut pyaara raabta baaki hai',
    ],
    linesEnglish: [
      'No grudges linger, no complaints weigh down my chest',
      'Just a gentle, peaceful companionship with my own solitude',
    ],
  },
];

export const UNIQUE_ALONE_98 = buildUniqueShayaris(
  'alone',
  'Alone Shayari (तन्हाई शायरी)',
  '🌙',
  103,
  ALONE_ENTRIES
);
