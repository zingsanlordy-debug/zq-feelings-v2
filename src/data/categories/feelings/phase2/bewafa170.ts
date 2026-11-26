import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const BEWAFA_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'मीठे वादों का सच',
    titleEnglish: 'Truth Behind Sweet Promises',
    linesHindi: [
      'मीठे वादे तो तुमने बड़ी आसानी से कर दिए थे उस शाम',
      'वक़्त आया निभाने का तो तुमने अपना पता ही बदल लिया',
    ],
    linesHinglish: [
      'Meethe waade to tumne badi aasaani se kar diye the us shaam',
      'Waqt aaya nibhaane ka to tumne apna pata hi badal liya',
    ],
    linesEnglish: [
      'You made sweet promises effortlessly on that quiet evening',
      'When the hour came to keep them, you simply changed your address',
    ],
  },
  {
    title: 'बदला हुआ लहजा',
    titleEnglish: 'Changed Tone',
    linesHindi: [
      'बेवफ़ाई कोई एक दिन में नहीं होती मेरी जान मैंने समझा है',
      'पहले लहजा बदलता है, फिर धीरे-धीरे इंसान बदल जाता है',
    ],
    linesHinglish: [
      'Bewafaai koi ek din mein nahin hoti meri jaan maine samjha hai',
      'Pehle lehja badalta hai, phir dheere-dheere insaan badal jaata hai',
    ],
    linesEnglish: [
      'Betrayal rarely arrives overnight—I finally learned how it works',
      'First the tone turns distant, and slowly the person turns into a stranger',
    ],
  },
  {
    title: 'क़ीमत मेरे यक़ीन की',
    titleEnglish: 'Price of My Trust',
    linesHindi: [
      'मेरी ग़लती बस इतनी थी कि हर झूठ को सच मान बैठा मैं',
      'तुमने मेरे साफ़ दिल का सबसे सस्ता सौदा कर दिया',
    ],
    linesHinglish: [
      'Meri galti bas itni thi ki har jhooth ko sach maan baitha main',
      'Tumne mere saaf dil ka sabse sasta sauda kar diya',
    ],
    linesEnglish: [
      'My only flaw was believing every smooth excuse you gave me',
      'While you traded my sincere heart for the cheapest convenience',
    ],
  },
  {
    title: 'मुस्कान के पीछे नक़ाब',
    titleEnglish: 'Mask Behind the Smile',
    linesHindi: [
      'चहरे की मासूमियत देखकर दिल हार बैठे थे हम भी कभी',
      'बाद में पता चला कि सबसे ज़्यादा फ़रेब उसी नक़ाब के पीछे था',
    ],
    linesHinglish: [
      'Chehre ki maasoomiyat dekhkar dil haar baithe the hum bhi kabhi',
      'Baad mein pata chala ki sabse zyada fareb usi naqaab ke peechhe tha',
    ],
    linesEnglish: [
      'Once I lost my heart simply trusting an innocent smile',
      'Only to learn the sharpest deceit lived right behind that gentle mask',
    ],
  },
  {
    title: 'शिकायत भी बेकार है',
    titleEnglish: 'No Point Complaining',
    linesHindi: [
      'अब तुमसे कोई गिला या शिकायत भी नहीं बची दिल में मेरे',
      'जहाँ वफ़ा की उम्मीद ही ग़लत थी, वहाँ रोना किस बात का',
    ],
    linesHinglish: [
      'Ab tumse koi gila ya shikaayat bhi nahin bachi dil mein mere',
      'Jahaan wafa ki ummeed hi galat thi, wahaan rona kis baat ka',
    ],
    linesEnglish: [
      'I do not even hold complaints left for you anymore',
      'Where expecting loyalty was my mistake, there is nothing left to cry over',
    ],
  },
  {
    title: 'ज़रूरत का रिश्ता',
    titleEnglish: 'Bond of Convenience',
    linesHindi: [
      'जब तक मेरी ज़रूरत थी तब तक मैं तुम्हारी दुनिया था पूरा',
      'मतलब निकलते ही मैं तुम्हारे लिए एक अनजान अजनबी बन गया',
    ],
    linesHinglish: [
      'Jab tak meri zaroorat thi tab tak main tumhaari duniya tha poora',
      'Matlab nikalte hi main tumhaare liye ek anjaan ajnabi ban gaya',
    ],
    linesEnglish: [
      'As long as you needed me around, I was your entire world',
      'The moment your purpose ended, I became a total stranger overnight',
    ],
  },
  {
    title: 'ख़ुद को बचा लिया',
    titleEnglish: 'Saved My Own Heart',
    linesHindi: [
      'अच्छा हुआ वक़्त रहते तुम्हारा असली चेहरा सामने आ गया',
      'वरना पूरी ज़िंदगी एक झूठे सहारे के भरोसे कट जाती मेरी',
    ],
    linesHinglish: [
      'Accha hua waqt rehte tumhaara asli chehra saamne aa gaya',
      'Warna poori zindagi ek jhoothe sahaare ke bharose kat jaati meri',
    ],
    linesEnglish: [
      'It was actually mercy that your real face showed up in time',
      'Otherwise I might have wasted whole years leaning on an illusion',
    ],
  },
  {
    title: 'आधे सफ़र की बेवफ़ाई',
    titleEnglish: 'Left Halfway Through',
    linesHindi: [
      'साथ चलने की क़सम तो हर कोई खा लेता है पहले मोड़ पर',
      'असली इम्तिहान तो तब होता है जब रास्ता थोड़ा कठिन हो जाए',
    ],
    linesHinglish: [
      'Saath chalne ki qasam to har koi khaa leta hai pehle mod par',
      'Asli imtihaan to tab hota hai jab raasta thoda kathin ho jaaye',
    ],
    linesEnglish: [
      'Anyone can swear lifelong loyalty right at the easy starting line',
      'The real test begins only when the road turns steep and uphill',
    ],
  },
  {
    title: 'वक़्त ने दिखा दिया',
    titleEnglish: 'Time Revealed Everything',
    linesHindi: [
      'मैंने तो अपनी तरफ़ से कोई कसर छोड़ी ही नहीं थी रिश्तों में',
      'तुम्हारी बेवफ़ाई ने ही साबित किया कि हर चमकती चीज़ सोना नहीं',
    ],
    linesHinglish: [
      'Maine to apni taraf se koi kasar chhodi hi nahin thi rishton mein',
      'Tumhaari bewafaai ne hi saabit kiya ki har chamakti cheez sona nahin',
    ],
    linesEnglish: [
      'I left zero effort undone from my side of the bond',
      'Your betrayal alone proved that not every bright promise is real gold',
    ],
  },
  {
    title: 'शोर नहीं, सबक़',
    titleEnglish: 'Lesson Without Drama',
    linesHindi: [
      'तुम्हारे जाने पर मैंने कोई तमाशा नहीं किया दुनिया के आगे',
      'बस एक गहरा सबक़ सीखकर चुपचाप आगे बढ़ गया हूँ मैं',
    ],
    linesHinglish: [
      'Tumhaare jaane par maine koi tamaasha nahin kiya duniya ke aage',
      'Bas ek gehra sabak seekhkar chupchaap aage badh gaya hoon main',
    ],
    linesEnglish: [
      'When you walked out, I made zero drama in front of the crowd',
      'I simply pocketed the lesson and quietly kept moving forward',
    ],
  },
  {
    title: 'ख़ाली जवाब',
    titleEnglish: 'Cold Replies',
    linesHindi: [
      'कभी मेरी हर साँस का हाल पूछने में दिन गुज़ारते थे तुम',
      'अब मेरे लंबे संदेशों का जवाब भी दो शब्दों में सिमट गया',
    ],
    linesHinglish: [
      'Kabhi meri har saans ka haal poochhne mein din guzaarte the tum',
      'Ab mere lambe sandeshon ka jawaab bhi do shabdon mein simat gaya',
    ],
    linesEnglish: [
      'You once spent whole afternoons asking about every little detail of my day',
      'Now my thoughtful messages only earn two cold words in return',
    ],
  },
  {
    title: 'दोहरा चेहरा',
    titleEnglish: 'Two Faces',
    linesHindi: [
      'मेरे सामने मोहब्बत की बातें और पीठ पीछे किसी और का हाथ',
      'इतनी सफ़ाई से झूठ बोलने का हुनर हर किसी के पास नहीं होता',
    ],
    linesHinglish: [
      'Mere saamne mohabbat ki baatein aur peeth peechhe kisi aur ka haath',
      'Itni safaai se jhooth bolne ka hunar har kisi ke paas nahin hota',
    ],
    linesEnglish: [
      'Sweet love talks to my face while holding someone else’s hand behind me',
      'Not everyone possesses the nerve to lie that smoothly',
    ],
  },
  {
    title: 'नज़र से उतर जाना',
    titleEnglish: 'Falling From Grace',
    linesHindi: [
      'दिल से उतरने में वक़्त लगता है थोड़ा सा इंसान को',
      'पर जब कोई नज़र से गिर जाए तो दोबारा उठ नहीं पाता कभी',
    ],
    linesHinglish: [
      'Dil se utarne mein waqt lagta hai thoda sa insaan ko',
      'Par jab koi nazar se gir jaaye to dobaara uth nahin paata kabhi',
    ],
    linesEnglish: [
      'It takes a little time for someone to leave your heart',
      'Yet once someone falls from your respect, they never rise back up',
    ],
  },
  {
    title: 'अधूरा इक़रार',
    titleEnglish: 'Half-Hearted Love',
    linesHindi: [
      'अगर किसी और की ही राह देखनी थी तुम्हें हमेशा से',
      'तो मेरे आँगन में झूठी उम्मीदों का दिया क्यों जलाया था',
    ],
    linesHinglish: [
      'Agar kisi aur ki hi raah dekhni thi tumhein hamesha se',
      'To mere aangan mein jhoothi ummeedon ka diya kyon jalaaya tha',
    ],
    linesEnglish: [
      'If your eyes were always waiting for somebody else to arrive',
      'Why did you bother lighting false hopes inside my quiet courtyard',
    ],
  },
  {
    title: 'सच्ची कदर का अभाव',
    titleEnglish: 'Unvalued Loyalty',
    linesHindi: [
      'जिसकी हर खुशी के लिए हमने ख़ुद को भी पीछे रख दिया',
      'उसी ने बड़ी आसानी से कह दिया कि तुमने मेरे लिए किया ही क्या',
    ],
    linesHinglish: [
      'Jiski har khushi ke liye humne khud ko bhi peechhe rakh diya',
      'Usi ne badi aasaani se keh diya ki tumne mere liye kiya hi kya',
    ],
    linesEnglish: [
      'The one whose happiness made me put my own needs last every time',
      'Turned around easily and asked—what did you ever really do for me',
    ],
  },
  {
    title: 'चुपचाप विदाई',
    titleEnglish: 'Quiet Goodbye',
    linesHindi: [
      'दिल दुखाकर भी मुस्कुराते हुए चले जाने की अदा कमाल थी तुम्हारी',
      'और हम भी बिना एक लफ़्ज़ कहे सब समझकर ख़ामोश हो गए',
    ],
    linesHinglish: [
      'Dil dukhaakar bhi muskuraate hue chale jaane ki adaa kamaal thi tumhaari',
      'Aur hum bhi bina ek lafz kahe sab samajhkar khaamosh ho gaye',
    ],
    linesEnglish: [
      'Walking away with a cool smile after hurting me was quite an art',
      'And I understood every word of your silence without making a sound',
    ],
  },
  {
    title: 'झूठी हमदर्दी',
    titleEnglish: 'Fake Sympathy',
    linesHindi: [
      'घाव देने वाले ही जब मरहम लेकर हाल पूछने आ जाएँ',
      'तो उनकी झूठी हमदर्दी से भी ज़्यादा तकलीफ़ होने लगती है',
    ],
    linesHinglish: [
      'Ghaav dene waale hi jab marham lekar haal poochhne aa jaayein',
      'To unki jhoothi hamdardi se bhi zyada takleef hone lagti hai',
    ],
    linesEnglish: [
      'When the very person who caused the wound shows up pretending to care',
      'Their fake sympathy stings even sharper than the hurt itself',
    ],
  },
  {
    title: 'आख़िरी सच',
    titleEnglish: 'Final Truth',
    linesHindi: [
      'तुम्हारे जाने के बाद एक बात बिल्कुल साफ़ समझ आ गई मुझे',
      'कि दिल साफ़ रखने का मतलब हर किसी पर भरोसा करना नहीं होता',
    ],
    linesHinglish: [
      'Tumhaare jaane ke baad ek baat bilkul saaf samajh aa gayi mujhe',
      'Ki dil saaf rakhne ka matlab har kisi par bharosa karna nahin hota',
    ],
    linesEnglish: [
      'One crystal-clear truth stayed behind long after you walked away',
      'Having a pure heart does not mean handing trust out to just anyone',
    ],
  },
  {
    title: 'नए चेहरे, पुरानी आदत',
    titleEnglish: 'Old Habits New Targets',
    linesHindi: [
      'तुम कल भी किसी एक दिल पर टिककर रह नहीं सके थे कभी',
      'आज नए शहर में भी वही पुरानी कहानी दोहरा रहे होगे अभी',
    ],
    linesHinglish: [
      'Tum kal bhi kisi ek dil par tikkar reh nahin sake the kabhi',
      'Aaj naye shehar mein bhi wahi purani kahaani dohra rahe hoge abhi',
    ],
    linesEnglish: [
      'You could never stay loyal to a single heart back then either',
      'Even in a brand-new circle today, you are probably running the same script',
    ],
  },
  {
    title: 'इज़्ज़त से वापसी',
    titleEnglish: 'Walking Away With Pride',
    linesHindi: [
      'जहाँ मेरे होने या न होने से कोई फ़र्क़ ही न पड़े तुम्हें',
      'वहाँ ज़बरदस्ती रुके रहने से बेहतर है ख़ुददार होकर लौट जाना',
    ],
    linesHinglish: [
      'Jahaan mere hone ya na hone se koi farq hi na pade tumhein',
      'Wahaan zabardasti ruke rehne se behtar hai khuddaar hokar laut jaana',
    ],
    linesEnglish: [
      'Where my presence or absence makes zero difference to your peace',
      'Walking away with self-respect beats begging to stay there any day',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'वक़्त की सज़ा नहीं, आईना',
    titleEnglish: 'Not Revenge Just Karma',
    linesHindi: [
      'मैं कभी बददुआ नहीं देता दिल तोड़कर जाने वालों को अपने',
      'वक़्त ख़ुद बड़ा मुंसिफ़ है, हर शख़्स को उसी के जैसा मिलाता है',
    ],
    linesHinglish: [
      'Main kabhi baddua nahin deta dil todkar jaane waalon ko apne',
      'Waqt khud bada munsif hai, har shakhs ko usi ke jaisa milaata hai',
    ],
    linesEnglish: [
      'I never wish bad luck on anyone who broke my heart and left',
      'Time itself is a fair judge—it brings everyone face to face with their match',
    ],
  },
  {
    title: 'अधूरी वफ़ा',
    titleEnglish: 'Broken Faith',
    linesHindi: [
      'जब मैंने अपना पूरा वजूद तुम्हारे भरोसे छोड़ दिया था',
      'तुमने ठीक उसी मोड़ पर हाथ छुड़ाना सबसे आसान समझा',
    ],
    linesHinglish: [
      'Jab maine apna poora wajood tumhaare bharose chhod diya tha',
      'Tumne theek usi mod par haath chhudaana sabse aasaan samjha',
    ],
    linesEnglish: [
      'Right when I placed my whole trust safely inside your hands',
      'You decided letting go was the easiest shortcut out',
    ],
  },
  {
    title: 'चालाकियाँ समझ आ गईं',
    titleEnglish: 'Saw Through the Game',
    linesHindi: [
      'शुरू में भोलापन समझकर हर बात पर यक़ीन करता रहा मैं',
      'बाद में समझ आया कि वो मासूमियत नहीं, सोची-समझी चाल थी',
    ],
    linesHinglish: [
      'Shuru mein bholaapan samajhkar har baat par yaqeen karta raha main',
      'Baad mein samajh aaya ki wo maasoomiyat nahin, sochi-samjhi chaal thi',
    ],
    linesEnglish: [
      'At first I trusted every excuse thinking you were just naive',
      'Later I saw it was never innocence—it was carefully planned convenience',
    ],
  },
  {
    title: 'ख़ाली कसमें',
    titleEnglish: 'Hollow Vows',
    linesHindi: [
      'जिन क़समों पर मैंने अपनी सारी ख़ुशियाँ कुर्बान कर दी थीं',
      'तुम्हारे लिए वो महज़ एक शाम की मीठी बातचीत भर थीं',
    ],
    linesHinglish: [
      'Jin qasmon par maine apni saari khushiyaan qurbaan kar di theen',
      'Tumhaare liye wo mehaz ek shaam ki meethi baatcheet bhar theen',
    ],
    linesEnglish: [
      'The promises I once rebuilt my entire happiness around',
      'Were nothing more to you than sweet chatter for a single evening',
    ],
  },
  {
    title: 'अंदाज़-ए-बेवफ़ाई',
    titleEnglish: 'Art of Walking Out',
    linesHindi: [
      'न कोई झगड़ा हुआ और न ही कोई बड़ी बात बनी थी हमारे बीच',
      'बस तुम्हारा मन भर गया और तुमने बहाने बनाने शुरू कर दिए',
    ],
    linesHinglish: [
      'Na koi jhagda hua aur na hi koi badi baat bani thi hamaare beech',
      'Bas tumhaara man bhar gaya aur tumne bahaane banaane shuru kar diye',
    ],
    linesEnglish: [
      'There was no giant fight and no unforgivable mistake between us',
      'You simply grew bored and started inventing neat little excuses',
    ],
  },
  {
    title: 'पत्थर सा जवाब',
    titleEnglish: 'Stone Cold Answer',
    linesHindi: [
      'एक ज़माना था जब मेरी आँख की नमी तुम्हें बेचैन कर देती थी',
      'आज मेरे टूटे शब्दों पर भी तुम्हारे चेहरे पर कोई शिकन नहीं आती',
    ],
    linesHinglish: [
      'Ek zamaana tha jab meri aankh ki nami tumhein bechain kar deti thi',
      'Aaj mere toote shabdon par bhi tumhaare chehre par koi shikan nahin aati',
    ],
    linesEnglish: [
      'Once upon a time even tiny sadness in my eyes made you restless',
      'Today not even my broken words move a single muscle on your face',
    ],
  },
  {
    title: 'सपनों की सौदेबाज़ी',
    titleEnglish: 'Trading My Dreams',
    linesHindi: [
      'मैंने हर दुआ में तुम्हारा नाम सबसे आगे रखा था हमेशा',
      'और तुमने मुझे अपनी ख़्वाहिशों की सूची से ही मिटा दिया',
    ],
    linesHinglish: [
      'Maine har dua mein tumhaara naam sabse aage rakha tha hamesha',
      'Aur tumne mujhe apni khwaahishon ki soochi se hi mita diya',
    ],
    linesEnglish: [
      'I placed your name right at the top of every prayer I whispered',
      'And you quietly crossed me off your list without looking back',
    ],
  },
  {
    title: 'झूठी परवाह',
    titleEnglish: 'Pretend Care',
    linesHindi: [
      'जब दिल में जगह ही नहीं बची थी मेरे लिए तुम्हारे पास',
      'तो झूठी परवाह का बोझ क्यों उठाते रहे इतने दिनों तक',
    ],
    linesHinglish: [
      'Jab dil mein jagah hi nahin bachi thi mere liye tumhaare paas',
      'To jhoothi parwaah ka bojh kyon uthaate rahe itne dinon tak',
    ],
    linesEnglish: [
      'If there was no real room left for me inside your heart anymore',
      'Why keep carrying the heavy act of pretending to care for so long',
    ],
  },
  {
    title: 'सबक़ जो अमूल्य था',
    titleEnglish: 'Costly Lesson',
    linesHindi: [
      'बेवफ़ाई ने मेरा दिल ज़रूर तोड़ा पर मेरी आँखें खोल दीं',
      'वरना मैं आज भी हर मुस्कुराते चेहरे को अपना मान लेता',
    ],
    linesHinglish: [
      'Bewafaai ne mera dil zaroor toda par meri aankhein khol deen',
      'Warna main aaj bhi har muskuraate chehre ko apna maan leta',
    ],
    linesEnglish: [
      'Betrayal bruised my heart for sure, yet it opened my eyes wide',
      'Otherwise I would still be trusting every smiling stranger who walked by',
    ],
  },
  {
    title: 'बहाने बनाती तुम्हारी घड़ी',
    titleEnglish: 'Too Busy for Me',
    linesHindi: [
      'सारी दुनिया के लिए वक़्त निकल आता था तुम्हारी घड़ी में',
      'बस जब मेरी बारी आती थी तो तुम्हारे पास बहाने तैयार रहते थे',
    ],
    linesHinglish: [
      'Saari duniya ke liye waqt nikal aata tha tumhaari ghadi mein',
      'Bas jab meri baari aati thi to tumhaare paas bahaane taiyaar rehte the',
    ],
    linesEnglish: [
      'Your clock always found spare hours for everyone else in town',
      'Only when it was my turn did your excuses line up right on cue',
    ],
  },
  {
    title: 'ग़ैर जैसा व्यवहार',
    titleEnglish: 'Treated Like a Stranger',
    linesHindi: [
      'कभी हर राज़ मुझसे कहकर ही सुकून मिलता था तुम्हें रात में',
      'अब मेरे पूछने पर भी तुम कहते हो — इसमें तुम्हारा क्या काम है',
    ],
    linesHinglish: [
      'Kabhi har raaz mujhse kehkar hi sukoon milta tha tumhein raat mein',
      'Ab mere poochhne par bhi tum kehte ho — ismein tumhaara kya kaam hai',
    ],
    linesEnglish: [
      'Sharing every late-night secret with me used to bring you peace',
      'Now when I ask how you are, you say it is none of my business',
    ],
  },
  {
    title: 'वफ़ा का इनाम',
    titleEnglish: 'Reward for Staying True',
    linesHindi: [
      'इतनी वफ़ादारी निभाने के बाद भी अगर धोखा ही नसीब हुआ',
      'तो समझो मेरी क़ीमत समझने लायक तुम्हारा दिल ही छोटा था',
    ],
    linesHinglish: [
      'Itni wafaadaari nibhaane ke baad bhi agar dhokha hi naseeb hua',
      'To samjho meri qeemat samajhne laayak tumhaara dil hi chhota tha',
    ],
    linesEnglish: [
      'If deep loyalty still earned me deceit at the very end',
      'Then your heart was simply too small to recognize what you held',
    ],
  },
  {
    title: 'टूटा हुआ यक़ीन',
    titleEnglish: 'Shattered Confidence',
    linesHindi: [
      'दिल की चोट तो धीरे-धीरे वक़्त के साथ भर ही जाती है',
      'पर किसी पर दोबारा वैसा भरोसा करना बहुत मुश्किल हो जाता है',
    ],
    linesHinglish: [
      'Dil ki chot to dheere-dheere waqt ke saath bhar hi jaati hai',
      'Par kisi par dobaara waisa bharosa karna bahut mushkil ho jaata hai',
    ],
    linesEnglish: [
      'Bruises on the heart gradually heal with passing months',
      'Yet trusting anyone that openly a second time becomes the hardest part',
    ],
  },
  {
    title: 'काग़ज़ के फूल',
    titleEnglish: 'Paper Flowers',
    linesHindi: [
      'तुम्हारी मोहब्बत बिल्कुल काग़ज़ के फूलों जैसी ही निकली आख़िर',
      'दूर से देखने में ख़ूबसूरत थी, पर उसमें न खुशबू थी न जान थी',
    ],
    linesHinglish: [
      'Tumhaari mohabbat bilkul kaagaz ke phoolon jaisi hi nikli aakhir',
      'Door se dekhne mein khoobsurat thi, par usmein na khushboo thi na jaan thi',
    ],
    linesEnglish: [
      'Your love turned out just like a bouquet of paper flowers',
      'Pretty from across the street, yet holding zero scent or living warmth',
    ],
  },
  {
    title: 'बेदाग़ मैं रहा',
    titleEnglish: 'My Conscience Is Clean',
    linesHindi: [
      'तुम चाहे लाख कहानियाँ सुना लो लोगों को अपने बचाव में अब',
      'मेरे ज़मीर को पता है कि रिश्ते में ग़द्दारी किसने की थी',
    ],
    linesHinglish: [
      'Tum chaahe laakh kahaaniyaan suna lo logon ko apne bachaav mein ab',
      'Mere zameer ko pata hai ki rishte mein gaddaari kisne ki thi',
    ],
    linesEnglish: [
      'Tell as many polished stories as you like to defend yourself now',
      'My own conscience knows exactly who broke faith between us',
    ],
  },
  {
    title: 'अहमियत का अहसास',
    titleEnglish: 'Realization Comes Late',
    linesHindi: [
      'आज सस्ते में छोड़ दिया है न तुमने मेरे इस सच्चे साथ को',
      'वक़्त आने पर समझोगे कि हर कोई दिल से चाहने वाला नहीं होता',
    ],
    linesHinglish: [
      'Aaj saste mein chhod diya hai na tumne mere is sacche saath ko',
      'Waqt aane par samjhoge ki har koi dil se chaahne waala nahin hota',
    ],
    linesEnglish: [
      'Today you threw away my sincere care like it cost nothing',
      'Someday you will learn how rare unconditional love actually is',
    ],
  },
  {
    title: 'चुप रहना ही जवाब',
    titleEnglish: 'Silence Is My Reply',
    linesHindi: [
      'तुम्हारे झूठ पकड़ने के बाद भी मैंने बहस नहीं की तुमसे',
      'क्योंकि टूटते रिश्ते पर शोर मचाने से कोई वापस अपना नहीं बनता',
    ],
    linesHinglish: [
      'Tumhaare jhooth pakadne ke baad bhi maine behas nahin ki tumse',
      'Kyonki toot-te rishte par shor machaane se koi waapas apna nahin banta',
    ],
    linesEnglish: [
      'Even after catching your lies, I refused to argue with you',
      'Because shouting over a broken bond never turns anyone loyal again',
    ],
  },
  {
    title: 'बदलाव का दौर',
    titleEnglish: 'Season of Pretense',
    linesHindi: [
      'ज़्यादातर लोग तब तक ही अच्छे बने रहते हैं तुम्हारे सामने',
      'जब तक उन्हें तुमसे बेहतर कोई दूसरा विकल्प न मिल जाए',
    ],
    linesHinglish: [
      'Zyaadatar log tab tak hi acche bane rehte hain tumhaare saamne',
      'Jab tak unhein tumse behtar koi doosra vikalp na mil jaaye',
    ],
    linesEnglish: [
      'Many people only stay sweet right in front of you',
      'Until they spot another option that serves them slightly better',
    ],
  },
  {
    title: 'मोहब्बत थी, कोई शतरंज नहीं',
    titleEnglish: 'Clear Conscience',
    linesHindi: [
      'मैंने मोहब्बत की थी, कोई शतरंज की बाज़ी नहीं खेली थी',
      'हार भी गया तो क्या, कम से कम मेरी नियत तो बिल्कुल साफ़ थी',
    ],
    linesHinglish: [
      'Maine mohabbat ki thi, koi shatranj ki baazi nahin kheli thi',
      'Haar bhi gaya to kya, kam se kam meri niyat to bilkul saaf thi',
    ],
    linesEnglish: [
      'I offered genuine love, not some sneaky game of chess',
      'Even if I lost, at least my intentions stayed spotless from day one',
    ],
  },
  {
    title: 'बीती बातों की धूल',
    titleEnglish: 'Dust of Yesterday',
    linesHindi: [
      'तुम्हारी मीठी यादों पर अब तुम्हारी ही बेवफ़ाई की धूल जम गई',
      'जिसे मैंने सिर आँखों पर रखा था, वही शख़्स मेरा सबसे बड़ा दर्द बन गई',
    ],
    linesHinglish: [
      'Tumhaari meethi yaadon par ab tumhaari hi bewafaai ki dhool jam gayi',
      'Jise maine sir aankhon par rakha tha, wahi shakhs mera sabse bada dard ban gayi',
    ],
    linesEnglish: [
      'Your own betrayal settled like grey dust over every sweet memory',
      'The person I treasured highest became the sharpest lesson I ever learned',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'मुँह मोड़ लेने वाले',
    titleEnglish: 'Turning Away Coldly',
    linesHindi: [
      'कभी राह में मिल भी जाओ तो नज़रें चुराने की ज़रूरत नहीं',
      'मैं अब उन लोगों को पहचानता ही नहीं जो वादे करके मुकर जाएँ',
    ],
    linesHinglish: [
      'Kabhi raah mein mil bhi jaao to nazrein churaane ki zaroorat nahin',
      'Main ab un logon ko pehchaanta hi nahin jo waade karke mukar jaayein',
    ],
    linesEnglish: [
      'If our paths cross someday, no need to duck your eyes away',
      'I simply no longer recognize people who break their own word',
    ],
  },
  {
    title: 'सौ झूठ और एक सच',
    titleEnglish: 'One Truth Over Lies',
    linesHindi: [
      'सौ झूठे बहाने बनाकर भी कोई रिश्ता ज़्यादा दूर नहीं चलता',
      'एक कड़वा सच कहकर अलग हो जाना कहीं ज़्यादा इज़्ज़तदार होता है',
    ],
    linesHinglish: [
      'Sau jhoothe bahaane banaakar bhi koi rishta zyada door nahin chalta',
      'Ek kadwa sach kehkar alag ho jaana kahin zyada izzatdaar hota hai',
    ],
    linesEnglish: [
      'Stacking a hundred pretty lies still cannot carry a bond very far',
      'Speaking one honest goodbye shows far more dignity in the end',
    ],
  },
  {
    title: 'क़दम पीछे हटा लिए',
    titleEnglish: 'Stepping Back Quietly',
    linesHindi: [
      'जब देखा कि मेरी मौजूदगी तुम्हें अब बोझ सी लगने लगी है',
      'मैंने बिना कोई शोर किए चुपचाप अपने क़दम पीछे खींच लिए',
    ],
    linesHinglish: [
      'Jab dekha ki meri maujoodgi tumhein ab bojh si lagne lagi hai',
      'Maine bina koi shor kiye chupchaap apne qadam peechhe kheench liye',
    ],
    linesEnglish: [
      'The moment I noticed my presence started feeling like a chore to you',
      'I quietly pulled my steps back without raising my voice once',
    ],
  },
  {
    title: 'दिल के सौदागर',
    titleEnglish: 'Merchants of Emotion',
    linesHindi: [
      'आजकल लोग जज़्बातों से भी खेलना बख़ूबी सीख गए हैं यारो',
      'दिल लगाकर छोड़ देना अब किसी खिलौने बदलने जैसा हो गया',
    ],
    linesHinglish: [
      'Aajkal log jazbaaton se bhi khelna bakhoobi seekh gaye hain yaaro',
      'Dil lagaakar chhod dena ab kisi khilaune badalne jaisa ho gaya',
    ],
    linesEnglish: [
      'People today have mastered turning real feelings into casual games',
      'Winning someone’s heart and walking off feels like swapping old toys to them',
    ],
  },
  {
    title: 'धोखे का आईना',
    titleEnglish: 'Mirror of Deceit',
    linesHindi: [
      'जब मैंने कहा था कि दुनिया मतलबी है, तुम हँस पड़े थे तब',
      'खुद पर बीतने से पहले ही तुमने मुझे उसका पहला सबूत दे दिया',
    ],
    linesHinglish: [
      'Jab maine kaha tha ki duniya matlabi hai, tum hans pade the tab',
      'Khud par beetne se pehle hi tumne mujhe uska pehla saboot de diya',
    ],
    linesEnglish: [
      'When I once said the world runs on self-interest, you laughed it off',
      'And then you promptly became my first living proof of it',
    ],
  },
  {
    title: 'अधूरी शामें',
    titleEnglish: 'Left Waiting',
    linesHindi: [
      'तुम्हारे इंतज़ार में कितनी शामें चुपचाप ढल गईं मेरी छत पर',
      'और तुम किसी और की महफ़िल में बैठकर नया वक़्त बुनते रहे',
    ],
    linesHinglish: [
      'Tumhaare intezaar mein kitni shaamein chupchaap dhal gayeen meri chhat par',
      'Aur tum kisi aur ki mehfil mein baithkar naya waqt bunte rahe',
    ],
    linesEnglish: [
      'So many quiet evenings faded on my rooftop while I waited on you',
      'While you sat in somebody else’s company weaving brand-new plans',
    ],
  },
  {
    title: 'वफ़ादारी की सज़ा',
    titleEnglish: 'Cost of Devotion',
    linesHindi: [
      'जितनी आसानी से तुमने मुझे भुला दिया, हैरानी होती है आज भी',
      'शायद ज़रूरत से ज़्यादा चाहने की यही सबसे बड़ी सज़ा मिलती है',
    ],
    linesHinglish: [
      'Jitni aasaani se tumne mujhe bhula diya, hairaani hoti hai aaj bhi',
      'Shaayad zaroorat se zyada chaahne ki yahi sabse badi saza milti hai',
    ],
    linesEnglish: [
      'How effortlessly you erased me from your life still surprises me',
      'Maybe loving someone beyond measure carries this quiet price',
    ],
  },
  {
    title: 'नक़ली मुस्कान का खेल',
    titleEnglish: 'Hollow Affection',
    linesHindi: [
      'जिन आँखों में मुझे कभी अपना पूरा जहाँ दिखाई देता था',
      'उन्हीं आँखों में आज अजनबियों जैसी बेरुख़ी साफ़ चमकती है',
    ],
    linesHinglish: [
      'Jin aankhon mein mujhe kabhi apna poora jahaan dikhaai deta tha',
      'Unheen aankhon mein aaj ajnabiyon jaisi berukhi saaf chamakti hai',
    ],
    linesEnglish: [
      'The very eyes where I once saw my whole future shining back',
      'Now hold nothing but the cold detachment of a passing stranger',
    ],
  },
  {
    title: 'दिल की हार नहीं, जीत',
    titleEnglish: 'Freedom Not Defeat',
    linesHindi: [
      'तुम्हारे जाने से मैं टूटा नहीं, बल्कि आज़ाद हो गया हूँ सच कहूँ',
      'रोज़-रोज़ झूठे भरोसे का बोझ ढोने से तो तन्हाई ही भली है',
    ],
    linesHinglish: [
      'Tumhaare jaane se main toota nahin, balki aazaad ho gaya hoon sach kahoon',
      'Roz-roz jhoothe bharose ka bojh dhone se to tanhaai hi bhali hai',
    ],
    linesEnglish: [
      'Honestly, your departure did not break me—it set me free',
      'Peaceful solitude beats hauling a fake promise every single morning',
    ],
  },
  {
    title: 'मेरी सादगी का फ़ायदा',
    titleEnglish: 'Mistaking Kindness',
    linesHindi: [
      'तुमने मेरी ख़ामोशी को कमज़ोरी समझकर बार-बार आज़माया मुझे',
      'तुम्हें ख़बर न थी कि मैं सिर्फ़ रिश्ते की लाज बचा रहा था',
    ],
    linesHinglish: [
      'Tumne meri khaamoshi ko kamzori samajhkar baar-baar aazmaaya mujhe',
      'Tumhein khabar na thi ki main sirf rishte ki laaj bacha raha tha',
    ],
    linesEnglish: [
      'You mistook my quiet patience for weakness and tested me again and again',
      'Never realizing I was only staying gentle to protect what we had',
    ],
  },
  {
    title: 'क़िस्मत से ज़्यादा फरेब',
    titleEnglish: 'Choices Not Fate',
    linesHindi: [
      'हर बार सारा इल्ज़ाम क़िस्मत के मत्थे मढ़ना ठीक नहीं होता',
      'कई बार इंसान ख़ुद अपनी मर्ज़ी से किसी का भरोसा तोड़ देता है',
    ],
    linesHinglish: [
      'Har baar saara ilzaam qismat ke matthe madhna theek nahin hota',
      'Kai baar insaan khud apni marzi se kisi ka bharosa tod deta hai',
    ],
    linesEnglish: [
      'Blaming destiny every single time is an easy way out',
      'Often a person simply chooses with open eyes to break someone’s trust',
    ],
  },
  {
    title: 'शाम के बाद की सुबह',
    titleEnglish: 'Morning After Betrayal',
    linesHindi: [
      'तुम्हारी बेवफ़ाई की रात बहुत लंबी और भारी ज़रूर गुज़री थी',
      'पर जब सुबह हुई तो मेरे दिल से सारा भ्रम साफ़ हो चुका था',
    ],
    linesHinglish: [
      'Tumhaari bewafaai ki raat bahut lambi aur bhaari zaroor guzri thi',
      'Par jab subah hui to mere dil se saara bhram saaf ho chuka tha',
    ],
    linesEnglish: [
      'The night your truth came out felt heavy and endless at first',
      'Yet by morning every last illusion inside my heart had cleared away',
    ],
  },
  {
    title: 'वापसी की गुंजाइश नहीं',
    titleEnglish: 'Closed Door Policy',
    linesHindi: [
      'दिल का दरवाज़ा एक बार बंद हो जाए तो फिर खुलता नहीं दोबारा',
      'माफ़ तो कर दूँगा तुम्हें, पर पहले जैसा यक़ीन अब कभी न होगा',
    ],
    linesHinglish: [
      'Dil ka darwaaza ek baar band ho jaaye to phir khulta nahin dobaara',
      'Maaf to kar doonga tumhein, par pehle jaisa yaqeen ab kabhi na hoga',
    ],
    linesEnglish: [
      'Once the door of my trust swings shut, it stays latched for good',
      'I can forgive you cleanly, yet things will never go back to how they were',
    ],
  },
  {
    title: 'मीठे शब्दों का जाल',
    titleEnglish: 'Web of Pretty Words',
    linesHindi: [
      'तुम्हारे खूबसूरत शब्दों की चमक में असली नियत छिप गई थी कहीं',
      'वक़्त ने जब परदा हटाया तो अंदर सिर्फ़ खालीपन ही मिला',
    ],
    linesHinglish: [
      'Tumhaare khoobsurat shabdon ki chamak mein asli niyat chhip gayi thi kahin',
      'Waqt ne jab parda hataaya to andar sirf khaalipan hi mila',
    ],
    linesEnglish: [
      'Your real intentions hid well behind the sparkle of pretty words',
      'When time pulled back the curtain, nothing waited behind it but emptiness',
    ],
  },
  {
    title: 'हद से ज़्यादा यक़ीन',
    titleEnglish: 'Trusted Too Far',
    linesHindi: [
      'ख़ुद से भी ज़्यादा भरोसा करना सबसे बड़ी नादानी थी मेरी',
      'तुमने साबित कर दिया कि कोई किसी का हमेशा के लिए नहीं होता',
    ],
    linesHinglish: [
      'Khud se bhi zyada bharosa karna sabse badi naadaani thi meri',
      'Tumne saabit kar diya ki koi kisi ka hamesha ke liye nahin hota',
    ],
    linesEnglish: [
      'Trusting you more than my own instincts was my biggest mistake',
      'You proved right away that nobody belongs to anyone forever',
    ],
  },
  {
    title: 'भीड़ में अकेला छोड़ना',
    titleEnglish: 'Abandoned Mid-Road',
    linesHindi: [
      'सबसे बुरे वक़्त में जब मुझे एक हाथ की सबसे ज़्यादा ज़रूरत थी',
      'ठीक उसी दिन तुमने अपनी राह अलग करने का फ़ैसला सुना दिया',
    ],
    linesHinglish: [
      'Sabse bure waqt mein jab mujhe ek haath ki sabse zyada zaroorat thi',
      'Theek usi din tumne apni raah alag karne ka faisla suna diya',
    ],
    linesEnglish: [
      'During my hardest week when I needed one steady hand beside me',
      'That exact day you announced you were taking a different road',
    ],
  },
  {
    title: 'बदली हुई प्राथमिकता',
    titleEnglish: 'Shifted Priorities',
    linesHindi: [
      'वक़्त की कमी का रोना तो सिर्फ़ एक सभ्य सा बहाना होता है',
      'असल में जब दिल भर जाए तो कोई इंसान जरूरी नहीं रहता',
    ],
    linesHinglish: [
      'Waqt ki kami ka rona to sirf ek sabhya sa bahaana hota hai',
      'Asal mein jab dil bhar jaaye to koi insaan zaroori nahin rehta',
    ],
    linesEnglish: [
      'Complaining about a busy schedule is usually just a polite excuse',
      'The truth is, once feelings fade, you simply stop making the priority list',
    ],
  },
  {
    title: 'दिल की समझदारी',
    titleEnglish: 'Wiser Now',
    linesHindi: [
      'एक चेहरे ने मुझे ज़िंदगी भर की समझदारी दे दी जाते-जाते',
      'अब मीठी बातों पर नहीं, सिर्फ़ निभाए गए वक़्त पर यक़ीन करता हूँ',
    ],
    linesHinglish: [
      'Ek chehre ne mujhe zindagi bhar ki samajhdaari de di jaate-jaate',
      'Ab meethi baaton par nahin, sirf nibhaaye gaye waqt par yaqeen karta hoon',
    ],
    linesEnglish: [
      'One person handed me a lifetime of wisdom on their way out the door',
      'Now I trust consistent actions, never pretty speeches',
    ],
  },
  {
    title: 'अधूरे नाम की कहानी',
    titleEnglish: 'Unfinished Chapter',
    linesHindi: [
      'हमारी कहानी आधी छूट गई इसका मलाल अब कम होने लगा है',
      'अधूरे झूठ के साथ पूरा सफ़र तय करने से ये विराम बेहतर था',
    ],
    linesHinglish: [
      'Hamaari kahaani aadhi chhoot gayi iska malaal ab kam hone laga hai',
      'Adhoore jhooth ke saath poora safar tay karne se ye viraam behtar tha',
    ],
    linesEnglish: [
      'The sting of leaving our story unfinished grows lighter every day',
      'A clean full stop beats dragging an honest heart through a long lie',
    ],
  },
  {
    title: 'ख़ुद से मोहब्बत',
    titleEnglish: 'Back to Myself',
    linesHindi: [
      'तुम्हारी बेवफ़ाई से इतना तो भला हुआ मेरी ज़िंदगी में अब',
      'दूसरों को मनाते-मनाते मैं ख़ुद से प्यार करना सीख गया हूँ',
    ],
    linesHinglish: [
      'Tumhaari bewafaai se itna to bhala hua meri zindagi mein ab',
      'Doosron ko manaate-manaate main khud se pyaar karna seekh gaya hoon',
    ],
    linesEnglish: [
      'If your betrayal gave me one lasting gift in return',
      'After chasing someone else’s mood for years, I finally chose myself',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'झूठी वफ़ा का परदा',
    titleEnglish: 'Curtain Lifted',
    linesHindi: [
      'तुम जितने मासूम दिखते थे हर मुलाक़ात में मुझे पहले',
      'उतने ही माहिर निकले दिल के साथ खिलवाड़ करने में आख़िर',
    ],
    linesHinglish: [
      'Tum jitne maasoom dikhte the har mulaaqaat mein mujhe pehle',
      'Utne hi maahir nikle dil ke saath khilwaad karne mein aakhir',
    ],
    linesEnglish: [
      'For all the sweet innocence you wore every time we met',
      'You turned out remarkably skilled at playing carelessly with hearts',
    ],
  },
  {
    title: 'तस्वीरों का धोखा',
    titleEnglish: 'Deceptive Frames',
    linesHindi: [
      'पुरानी तस्वीरों में आज भी दोनों कितने खुश नज़र आते हैं साथ',
      'किसे पता था उन मुस्कानों के नीचे बेवफ़ाई की नींव रख रहे थे तुम',
    ],
    linesHinglish: [
      'Purani tasveeron mein aaj bhi donon kitne khush nazar aate hain saath',
      'Kise pata tha un muskaanon ke neeche bewafaai ki neev rakh rahe the tum',
    ],
    linesEnglish: [
      'In old photos the two of us still look effortlessly happy together',
      'Who knew you were already laying the bricks of betrayal underneath',
    ],
  },
  {
    title: 'अकेलापन ही अच्छा',
    titleEnglish: 'Better Alone',
    linesHindi: [
      'ऐसे दोहरे साथ से सौ गुना बेहतर है अपने कमरे की ख़ामोशी',
      'जहाँ कम से कम कोई रोज़ नया झूठ तो नहीं सुनाता कानों में',
    ],
    linesHinglish: [
      'Aise dohre saath se sau guna behtar hai apne kamre ki khaamoshi',
      'Jahaan kam se kam koi roz naya jhooth to nahin sunaata kaanon mein',
    ],
    linesEnglish: [
      'Quiet peace in my own room beats a two-faced partner a hundred times over',
      'At least here nobody whispers a fresh lie in my ear every evening',
    ],
  },
  {
    title: 'ज़ख़्म जो सिखा गए',
    titleEnglish: 'Scars That Taught Me',
    linesHindi: [
      'जिन्होंने दिल पर निशान छोड़े, उनसे नफ़रत क्यों करूँ मैं',
      'उन्हीं की बदौलत आज मुझे सही और ग़लत इंसान की परख हुई है',
    ],
    linesHinglish: [
      'Jinhone dil par nishaan chhode, unse nafrat kyon karoon main',
      'Unheen ki badaulat aaj mujhe sahi aur galat insaan ki parakh hui hai',
    ],
    linesEnglish: [
      'Why carry hatred toward the one who left bruises on my heart',
      'Thanks to that experience, I finally know how to read people clearly',
    ],
  },
  {
    title: 'अनसुनी पुकार',
    titleEnglish: 'Ignored Calls',
    linesHindi: [
      'एक घंटी में उठने वाला फ़ोन अब घंटों बजता रहता है खाली',
      'इंसान बदला या उसकी ज़िंदगी में मेरी जगह बदल गई शायद',
    ],
    linesHinglish: [
      'Ek ghanti mein uthne waala phone ab ghanton bajta rehta hai khaali',
      'Insaan badla ya uski zindagi mein meri jagah badal gayi shaayad',
    ],
    linesEnglish: [
      'The phone you once picked up on the first ring now rings into silence',
      'Did you change, or did my spot in your life quietly get replaced',
    ],
  },
  {
    title: 'वादे हवा हो गए',
    titleEnglish: 'Promises Into Smoke',
    linesHindi: [
      'हर मोड़ पर साथ रहने की बातें हवा में धुएँ सी उड़ गईं',
      'हक़ीक़त की धूप निकलते ही तुम्हारे सारे वादे पिघल गए',
    ],
    linesHinglish: [
      'Har mod par saath rehne ki baatein hawa mein dhuen si ud gayeen',
      'Haqeeqat ki dhoop nikalte hi tumhaare saare waade pighal gaye',
    ],
    linesEnglish: [
      'Every vow to stand beside me through every turn vanished like smoke',
      'The moment real-life heat arrived, your promises melted clean away',
    ],
  },
  {
    title: 'दिल की सज़ा',
    titleEnglish: 'Soft Heart Tax',
    linesHindi: [
      'साफ़ बोलने वालों की क़दर कम ही होती है इस चालाक शहर में',
      'दिल से चाहने वालों को अक्सर मीठे धोखे ही तोहफ़े में मिलते हैं',
    ],
    linesHinglish: [
      'Saaf bolne waalon ki qadr kam hi hoti hai is chaalaak shehar mein',
      'Dil se chaahne waalon ko aksar meethe dhokhe hi tohfe mein milte hain',
    ],
    linesEnglish: [
      'Plain, honest hearts are rarely valued in a clever, rushing world',
      'Those who love wholeheartedly too often receive sweet betrayal in return',
    ],
  },
  {
    title: 'हद पार हो गई',
    titleEnglish: 'Crossed the Line',
    linesHindi: [
      'हर ग़लती माफ़ की जा सकती है अगर नीयत पाक हो सामने वाले की',
      'पर बार-बार वही धोखा मिले तो चुपचाप किनारा कर लेना ही सही है',
    ],
    linesHinglish: [
      'Har galti maaf ki ja sakti hai agar niyat paak ho saamne waale ki',
      'Par baar-baar wahi dhokha mile to chupchaap kinaara kar lena hi sahi hai',
    ],
    linesEnglish: [
      'Honest mistakes can always be forgiven when intentions are sincere',
      'When the same betrayal repeats on loop, stepping away cleanly is wise',
    ],
  },
  {
    title: 'दिल की कीमत',
    titleEnglish: 'Priceless Worth',
    linesHindi: [
      'तुम्हारी नज़रों में शायद मेरी कोई क़ीमत ही नहीं बची थी कभी',
      'पर मैंने ख़ुद को तुम्हारे हिसाब से कम आँकना बंद कर दिया अब',
    ],
    linesHinglish: [
      'Tumhaari nazron mein shaayad meri koi qeemat hi nahin bachi thi kabhi',
      'Par maine khud ko tumhaare hisaab se kam aankna band kar diya ab',
    ],
    linesEnglish: [
      'Maybe my worth never registered properly in your eyes',
      'Yet I am done measuring my own value using your broken scale',
    ],
  },
  {
    title: 'झूठी हँसी का बोझ',
    titleEnglish: 'Done Pretending',
    linesHindi: [
      'सब कुछ जानते हुए भी अनजान बने रहने का नाटक थका गया मुझे',
      'इसलिए एक दिन सच सामने रखकर मैंने ख़ुद को हल्का कर लिया',
    ],
    linesHinglish: [
      'Sab kuch jaante hue bhi anjaan bane rehne ka naatak thaka gaya mujhe',
      'Isliye ek din sach saamne rakhkar maine khud ko halka kar liya',
    ],
    linesEnglish: [
      'Acting clueless when I already knew the truth wore my soul thin',
      'So one day I laid the facts on the table and freed myself at last',
    ],
  },
  {
    title: 'नए बहाने रोज़',
    titleEnglish: 'Fresh Excuse Daily',
    linesHindi: [
      'मोहब्बत में समय न होने के बहाने सिर्फ़ तभी बनते हैं दोस्त',
      'जब दिल किसी नई महफ़िल में अपना मन लगाने लगा हो',
    ],
    linesHinglish: [
      'Mohabbat mein samay na hone ke bahaane sirf tabhi bante hain dost',
      'Jab dil kisi nayi mehfil mein apna man lagaane laga ho',
    ],
    linesEnglish: [
      'Excuses about having zero time only show up in love',
      'When someone’s heart has already wandered off to entertain a new room',
    ],
  },
  {
    title: 'ख़ुद को खोने से बचाया',
    titleEnglish: 'Did Not Lose Myself',
    linesHindi: [
      'तुम्हें पाने की कोशिश में ख़ुद को मिटाने ही वाला था मैं',
      'शुक्र है तुम्हारी बेरुख़ी ने मुझे सही वक़्त पर जगा दिया',
    ],
    linesHinglish: [
      'Tumhein paane ki koshish mein khud ko mitaane hi waala tha main',
      'Shukr hai tumhaari berukhi ne mujhe sahi waqt par jaga diya',
    ],
    linesEnglish: [
      'Trying to keep you happy almost made me erase who I was',
      'Thankfully your coldness woke me up just before I disappeared completely',
    ],
  },
  {
    title: 'भरोसे का क़त्ल',
    titleEnglish: 'Silence After Betrayal',
    linesHindi: [
      'इंसान किसी के जाने से उतना नहीं रोता है ज़िंदगी में कभी',
      'जितना वो अपने ही चुने हुए भरोसे के टूटने पर ख़ामोश होता है',
    ],
    linesHinglish: [
      'Insaan kisi ke jaane se utna nahin rota hai zindagi mein kabhi',
      'Jitna wo apne hi chune hue bharose ke tootne par khaamosh hota hai',
    ],
    linesEnglish: [
      'People do not break down simply because someone walked out the door',
      'They fall quiet watching the trust they gave freely shatter on the floor',
    ],
  },
  {
    title: 'मज़बूत वापसी',
    titleEnglish: 'Stronger Return',
    linesHindi: [
      'तुम्हारे धोखे ने मुझे कमज़ोर नहीं, पत्थर से ज़्यादा सख़्त कर दिया',
      'अब मीठे शब्दों के पीछे छिपा स्वार्थ दूर से ही दिख जाता है',
    ],
    linesHinglish: [
      'Tumhaare dhokhe ne mujhe kamzor nahin, patthar se zyada sakht kar diya',
      'Ab meethe shabdon ke peechhe chhipa swaarth door se hi dikh jaata hai',
    ],
    linesEnglish: [
      'Your deceit did not weaken me—it sharpened my instincts to steel',
      'Now I spot selfish motives hiding behind honeyed words a mile away',
    ],
  },
  {
    title: 'मनमर्ज़ी के रिश्ते की थकान',
    titleEnglish: 'Fickle Season',
    linesHindi: [
      'जब चाहा तब पास बुला लिया, जब जी भरा तो रास्ता दिखा दिया',
      'तुमने मेरे जज़्बातों को किसी मौसम की तरह इस्तेमाल किया',
    ],
    linesHinglish: [
      'Jab chaaha tab paas bula liya, jab jee bhara to raasta dikha diya',
      'Tumne mere jazbaaton ko kisi mausam ki tarah istemaal kiya',
    ],
    linesEnglish: [
      'Pulling me close whenever you felt lonely and dismissing me once satisfied',
      'You treated my genuine feelings like changing seasonal clothes',
    ],
  },
  {
    title: 'झूठ की उम्र छोटी',
    titleEnglish: 'Short Life of Lies',
    linesHindi: [
      'तुम सोचते थे कि तुम्हारी चालाकी कभी सामने नहीं आएगी',
      'सच का सूरज थोड़ा देर से सही, पर हर परदा जला देता है',
    ],
    linesHinglish: [
      'Tum sochte the ki tumhaari chaalaaki kabhi saamne nahin aayegi',
      'Sach ka sooraj thoda der se sahi, par har parda jala deta hai',
    ],
    linesEnglish: [
      'You truly believed your clever little secrets would stay buried forever',
      'The sun of truth rises late sometimes, yet it burns through every veil',
    ],
  },
  {
    title: 'बिना इल्ज़ाम के विदा',
    titleEnglish: 'No Blame Needed',
    linesHindi: [
      'तुम्हारे सर कोई इल्ज़ाम धरकर ख़ुद को बड़ा नहीं दिखाना मुझे',
      'जो तुमने किया वो तुम्हारी फ़ितरत थी, जो मैंने निभाया वो मेरी',
    ],
    linesHinglish: [
      'Tumhaare sar koi ilzaam dharkar khud ko bada nahin dikhaana mujhe',
      'Jo tumne kiya wo tumhaari fitrat thi, jo maine nibhaaya wo meri',
    ],
    linesEnglish: [
      'I have no wish to stack blame on your head just to look noble',
      'What you did showed your nature, and how I stayed loyal showed mine',
    ],
  },
  {
    title: 'अधूरे ख्वाब का अंत',
    titleEnglish: 'End of a Mirage',
    linesHindi: [
      'रेगिस्तान में पानी समझकर मैं भी दौड़ पड़ा था तेरे पीछे',
      'करीब पहुँचा तो सिर्फ़ रेत और तपिश ही हाथ लगी मेरे',
    ],
    linesHinglish: [
      'Registaan mein paani samajhkar main bhi daud pada tha tere peechhe',
      'Kareeb pahuncha to sirf ret aur tapish hi haath lagi mere',
    ],
    linesEnglish: [
      'Like chasing water shimmering across hot desert sand, I ran after you',
      'When I got close enough to touch, nothing awaited me except dry dust',
    ],
  },
  {
    title: 'ग़म से उबरना',
    titleEnglish: 'Rising Above Hurt',
    linesHindi: [
      'धोखा खाकर बैठ जाने वालों में से नहीं हूँ मैं मेरे दोस्त',
      'दिल पर लगे घाव सूखते ही फिर से नई मुस्कान पहन लूँगा',
    ],
    linesHinglish: [
      'Dhokha khaakar baith jaane waalon mein se nahin hoon main mere dost',
      'Dil par lage ghaav sookhte hi phir se nayi muskaan pehen loonga',
    ],
    linesEnglish: [
      'I am not built to sit paralyzed forever over someone’s betrayal',
      'Once the sting dries out, I will wear a brighter smile than before',
    ],
  },
  {
    title: 'सच्ची कदर का इंतज़ार',
    titleEnglish: 'Waiting for Worthy Love',
    linesHindi: [
      'ग़लत हाथ में फूल देकर मैंने सिर्फ़ काँटे ही बटोरे थे',
      'अब दिल तभी दूँगा जब सामने वाला उसकी इज़्ज़त करना जानता हो',
    ],
    linesHinglish: [
      'Galat haath mein phool dekar maine sirf kaante hi batore the',
      'Ab dil tabhi doonga jab saamne waala uski izzat karna jaanta ho',
    ],
    linesEnglish: [
      'Handing roses to the wrong hands only brought back thorns',
      'Next time I offer my heart, it goes only to someone who knows how to guard it',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'आख़िरी मुलाक़ात का सच',
    titleEnglish: 'Last Meeting Truth',
    linesHindi: [
      'आख़िरी मुलाक़ात में ही तुम्हारी आँखें सब बयाँ कर गई थीं',
      'मैं ही दिल के कहने पर ख़ुद को झूठी तसल्ली देता रहा',
    ],
    linesHinglish: [
      'Aakhiri mulaaqaat mein hi tumhaari aankhein sab bayaan kar gayi theen',
      'Main hi dil ke kehne par khud ko jhoothi tasalli deta raha',
    ],
    linesEnglish: [
      'During our very last meeting, your eyes already gave everything away',
      'Only my stubborn heart kept feeding me false reassurance for another week',
    ],
  },
  {
    title: 'चुपचाप टूटता रिश्ता',
    titleEnglish: 'Silent Collapse',
    linesHindi: [
      'ज़्यादातर रिश्ते किसी एक बड़े झगड़े से नहीं टूटते हैं यहाँ',
      'वो छोटी-छोटी अनदेखी और झूठे वादों से अंदर ही दम तोड़ देते हैं',
    ],
    linesHinglish: [
      'Zyaadatar rishte kisi ek bade jhagde se nahin toot-te hain yahaan',
      'Wo chhoti-chhoti andekhi aur jhoothe waadon se andar hi dam tod dete hain',
    ],
    linesEnglish: [
      'Most bonds rarely shatter from one dramatic explosion',
      'They quietly suffocate beneath small neglects and dozens of broken promises',
    ],
  },
  {
    title: 'सपने तोड़ने का हुनर',
    titleEnglish: 'Easy Heartbreak',
    linesHindi: [
      'किसी के सालों के यक़ीन को एक पल में मिट्टी कर देना',
      'इतना बेरहम हुनर भला कैसे सीख लिया तुमने इतनी जल्दी',
    ],
    linesHinglish: [
      'Kisi ke saalon ke yaqeen ko ek pal mein mitti kar dena',
      'Itna beraham hunar bhala kaise seekh liya tumne itni jaldi',
    ],
    linesEnglish: [
      'Turning years of steady trust into dust within a single afternoon',
      'How on earth did you learn to be that cold so effortlessly',
    ],
  },
  {
    title: 'तन्हा सफ़र भी मंजूर',
    titleEnglish: 'Proud to Walk Solo',
    linesHindi: [
      'अब झूठे हमसफ़र से हाथ मिलाने का शौक़ ख़त्म हो चुका है',
      'अकेले चलने में थोड़ी थकान सही, पर कम से कम धोखा तो नहीं मिलता',
    ],
    linesHinglish: [
      'Ab jhoothe humsafar se haath milaane ka shauq khatm ho chuka hai',
      'Akele chalne mein thodi thakaan sahi, par kam se kam dhokha to nahin milta',
    ],
    linesEnglish: [
      'My appetite for holding hands with fake companions is completely gone',
      'Walking solo gets tiring sometimes, yet at least no one stabs your trust',
    ],
  },
  {
    title: 'दिल की सज़ा नहीं',
    titleEnglish: 'Not My Fault',
    linesHindi: [
      'मैंने ख़ुद को कोसना बंद कर दिया है तुम्हारी बेरुख़ी के बाद',
      'कमी मेरी वफ़ा में नहीं, तुम्हारी निभाने की औक़ात में थी',
    ],
    linesHinglish: [
      'Maine khud ko kosna band kar diya hai tumhaari berukhi ke baad',
      'Kami meri wafa mein nahin, tumhaari nibhaane ki aukaat mein thi',
    ],
    linesEnglish: [
      'I stopped blaming myself after your coldness finally made sense',
      'The flaw was never my devotion—it was your inability to keep your word',
    ],
  },
  {
    title: 'ग़ैर बन जाने की कला',
    titleEnglish: 'Turning Stranger Fast',
    linesHindi: [
      'तुमसे ज़्यादा तेज़ी से रंग बदलते किसी मौसम को भी नहीं देखा',
      'कल तक जान कहते थे, आज पहचानने से भी इनकार कर दिया',
    ],
    linesHinglish: [
      'Tumse zyada tezi se rang badalte kisi mausam ko bhi nahin dekha',
      'Kal tak jaan kehte the, aaj pehchaanne se bhi inkaar kar diya',
    ],
    linesEnglish: [
      'I have never watched even fickle weather shift faster than you did',
      'Yesterday I was your favorite soul; today you barely recognize my name',
    ],
  },
  {
    title: 'इकतरफ़ा बोझ उठाने की हद',
    titleEnglish: 'Unreturned Effort',
    linesHindi: [
      'एक ही इंसान कब तक दोनों तरफ़ का बोझ उठाएगा रिश्ते में',
      'जहाँ सामने वाले का दिल ही न हो, वहाँ कोशिश भी थक जाती है',
    ],
    linesHinglish: [
      'Ek hi insaan kab tak donon taraf ka bojh uthaayega rishte mein',
      'Jahaan saamne waale ka dil hi na ho, wahaan koshish bhi thak jaati hai',
    ],
    linesEnglish: [
      'How long can one person carry both halves of a failing bond alone',
      'When the other heart has checked out, even stubborn effort runs dry',
    ],
  },
  {
    title: 'दिल के चक्कर',
    titleEnglish: 'Mind Over Mirage',
    linesHindi: [
      'दिल की नादानी में बहुत वक़्त गँवा दिया मैंने ग़लत लोगों पर',
      'अब दिमाग़ और इज़्ज़त दोनों से पूछकर क़दम रखता हूँ आगे',
    ],
    linesHinglish: [
      'Dil ki naadaani mein bahut waqt ganwa diya maine galat logon par',
      'Ab dimaag aur izzat donon se poochhkar qadam rakhta hoon aage',
    ],
    linesEnglish: [
      'Following a naive heart cost me too many months on the wrong people',
      'Now I check in with both wisdom and self-respect before taking a step',
    ],
  },
  {
    title: 'ख़ुदग़र्ज़ी की हद',
    titleEnglish: 'Peak Selfishness',
    linesHindi: [
      'अपनी सहूलियत के हिसाब से प्यार करने वाले लोग हमेशा मिलते हैं',
      'मुश्किल आते ही सबसे पहले वही दरवाज़े से बाहर निकलते हैं',
    ],
    linesHinglish: [
      'Apni sahooliyat ke hisaab se pyaar karne waale log hamesha milte hain',
      'Mushkil aate hi sabse pehle wahi darwaaze se baahar nikalte hain',
    ],
    linesEnglish: [
      'People who love strictly on their own convenience show up everywhere',
      'And the second life grows difficult, they are first out the front door',
    ],
  },
  {
    title: 'अफ़सोस किस बात का',
    titleEnglish: 'No Regrets Left',
    linesHindi: [
      'मुझे अफ़सोस बस इतना है कि तुम्हें अपना कीमती वक़्त दे दिया',
      'बाक़ी मेरे हिस्से की वफ़ा में तो आज भी कोई दाग़ नहीं है',
    ],
    linesHinglish: [
      'Mujhe afsos bas itna hai ki tumhein apna keemti waqt de diya',
      'Baaqi mere hisse ki wafa mein to aaj bhi koi daag nahin hai',
    ],
    linesEnglish: [
      'My only regret is handing you precious months you never earned',
      'Everything else about how faithfully I loved remains spotless',
    ],
  },
  {
    title: 'ख़ाली वादों की बस्ती',
    titleEnglish: 'City of Empty Words',
    linesHindi: [
      'तुम्हारे शहर में बड़े-बड़े वादों का बाज़ार बहुत सजता है शायद',
      'पर जब वफ़ा की बात आए तो सारी दुकानें बंद मिलती हैं',
    ],
    linesHinglish: [
      'Tumhaare shehar mein bade-bade waadon ka baazaar bahut sajta hai shaayad',
      'Par jab wafa ki baat aaye to saari dukaanein band milti hain',
    ],
    linesEnglish: [
      'Your world puts on quite a loud market of grand promises',
      'Yet the day real loyalty is needed, every single shop sits locked',
    ],
  },
  {
    title: 'चुप रहने का फ़ैसला',
    titleEnglish: 'Dignified Exit',
    linesHindi: [
      'चिल्लाकर गिला करने से मेरी तकलीफ़ कम नहीं होने वाली थी',
      'इसलिए मैंने सम्मान के साथ चुपचाप दरवाज़ा बंद कर दिया',
    ],
    linesHinglish: [
      'Chillaakar gila karne se meri takleef kam nahin hone waali thi',
      'Isliye maine sammaan ke saath chupchaap darwaaza band kar diya',
    ],
    linesEnglish: [
      'Screaming out my hurt was never going to cure the ache anyway',
      'So I shut the door quietly and walked away with my dignity intact',
    ],
  },
  {
    title: 'मीठे झूठ से बेहतर कड़वा सच',
    titleEnglish: 'Bitter Clarity',
    linesHindi: [
      'झूठ सुनने में हमेशा मीठा और सुहाना लगता है दिल को पहले',
      'सच कड़वा ज़रूर होता है, पर वो तुम्हें ग़लत रास्ते से बचा लेता है',
    ],
    linesHinglish: [
      'Jhooth sunne mein hamesha meetha aur suhaana lagta hai dil ko pehle',
      'Sach kadwa zaroor hota hai, par wo tumhein galat raaste se bacha leta hai',
    ],
    linesEnglish: [
      'A smooth lie always sounds cozy and sweet when you first hear it',
      'Truth stings on arrival, yet it rescues you from wasting another year',
    ],
  },
  {
    title: 'आँसू भी शर्मिंदा',
    titleEnglish: 'No More Tears for You',
    linesHindi: [
      'जितने आँसू बहाने थे, वो तेरे जाने के दिन ही ख़त्म हो गए',
      'अब मेरे जज़्बात इतने सस्ते नहीं कि हर बेवफ़ा पर बहें',
    ],
    linesHinglish: [
      'Jitne aansoo bahaane the, wo tere jaane ke din hi khatm ho gaye',
      'Ab mere jazbaat itne saste nahin ki har bewafa par bahein',
    ],
    linesEnglish: [
      'Every tear meant for you ran out on the very day you walked away',
      'My emotions are no longer cheap enough to spill over unfaithful people',
    ],
  },
  {
    title: 'बदला हुआ मौसम',
    titleEnglish: 'Winter in the Heart',
    linesHindi: [
      'तुम्हारी बातों में पहले जैसी गर्माहट अब कहाँ रही है बाक़ी',
      'साफ़ दिखता है कि किसी और की धूप ने तुम्हें घेर लिया है',
    ],
    linesHinglish: [
      'Tumhaari baaton mein pehle jaisi garmaahat ab kahaan rahi hai baaqi',
      'Saaf dikhta hai ki kisi aur ki dhoop ne tumhein gher liya hai',
    ],
    linesEnglish: [
      'Where did all that earlier warmth inside your voice disappear to',
      'It is plain to see somebody else’s sunshine holds your attention now',
    ],
  },
  {
    title: 'धोखे के बाद सुकून',
    titleEnglish: 'Peace After Truth',
    linesHindi: [
      'शक में घुट-घुटकर जीने से कहीं ज़्यादा सुकून आज मिला है',
      'कम से कम अब पूरा सच आँखों के सामने साफ़ रखा हुआ है',
    ],
    linesHinglish: [
      'Shaq mein ghut-ghutkar jeene se kahin zyada sukoon aaj mila hai',
      'Kam se kam ab poora sach aankhon ke saamne saaf rakha hua hai',
    ],
    linesEnglish: [
      'Living suffocated inside constant doubt was far worse than today',
      'At least now the whole unvarnished truth sits right in front of me',
    ],
  },
  {
    title: 'मन की सफाई',
    titleEnglish: 'Clean Slate',
    linesHindi: [
      'कड़वाहट दिल में रखकर कोई आगे कैसे बढ़ सकता है भला',
      'तुम्हें माफ़ किया, और अपनी ज़िंदगी से हमेशा के लिए विदा किया',
    ],
    linesHinglish: [
      'Kadwaahat dil mein rakhkar koi aage kaise badh sakta hai bhala',
      'Tumhein maaf kiya, aur apni zindagi se hamesha ke liye vida kiya',
    ],
    linesEnglish: [
      'How can anyone move freely forward carrying bitterness inside',
      'I forgive you completely, and remove your access to my life for good',
    ],
  },
  {
    title: 'ग़लत चुनाव का सबक़',
    titleEnglish: 'Wrong Choice Lesson',
    linesHindi: [
      'इंसान की शक्ल देखकर उसकी फ़ितरत का अंदाज़ा कभी मत लगाना',
      'सबसे प्यारी मुस्कान रखने वाले भी कभी-कभी बड़ा धोखा दे जाते हैं',
    ],
    linesHinglish: [
      'Insaan ki shakl dekhkar uski fitrat ka andaaza kabhi mat lagaana',
      'Sabse pyaari muskaan rakhne waale bhi kabhi-kabhi bada dhokha de jaate hain',
    ],
    linesEnglish: [
      'Never judge anyone’s character purely by a gentle face',
      'Even people wearing the warmest smile sometimes leave the deepest betrayal',
    ],
  },
  {
    title: 'अपने पैरों पर संभलना',
    titleEnglish: 'Standing Back Up',
    linesHindi: [
      'जब किसी सहारे ने बीच रास्ते में हाथ झटक दिया मेरा',
      'तब अपने ही हौसले ने गिरने से पहले मुझे संभाल लिया',
    ],
    linesHinglish: [
      'Jab kisi sahaare ne beech raaste mein haath jhatak diya mera',
      'Tab apne hi hausle ne girne se pehle mujhe sambhaal liya',
    ],
    linesEnglish: [
      'The moment the hand I leaned on shook me off mid-journey',
      'My own quiet courage caught me steady before I ever hit the ground',
    ],
  },
  {
    title: 'झूठे रिश्तों से आज़ादी',
    titleEnglish: 'Free From Illusions',
    linesHindi: [
      'एक तरफ़ा उम्मीदें पालने का सिलसिला यहीं ख़त्म करता हूँ आज',
      'जो मेरा होने के लायक ही न था, उसके पीछे दौड़ना अब बंद हुआ',
    ],
    linesHinglish: [
      'Ek tarfa ummeedein paalne ka silsila yaheen khatm karta hoon aaj',
      'Jo mera hone ke laayak hi na tha, uske peechhe daudna ab band hua',
    ],
    linesEnglish: [
      'I am ending the habit of feeding one-sided expectations today',
      'Running behind someone unworthy of my loyalty stops right here',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'नए चेहरे का आकर्षण',
    titleEnglish: 'Chasing Novelty',
    linesHindi: [
      'नए लोगों की चमक में पुराने सच्चे रिश्ते भुला देते हैं कुछ लोग',
      'जब नयापन उतरता है तब ही असली नुक़सान समझ में आता है',
    ],
    linesHinglish: [
      'Naye logon ki chamak mein purane sacche rishte bhula dete hain kuch log',
      'Jab nayaapan utarta hai tab hi asli nuksaan samajh mein aata hai',
    ],
    linesEnglish: [
      'Dazzled by fresh faces, some forget the loyal bond already holding them',
      'Only when the novelty wears off does the real loss sink in',
    ],
  },
  {
    title: 'अनकही नाराज़गी',
    titleEnglish: 'Quiet Distance',
    linesHindi: [
      'जब मैंने सवाल पूछने बंद कर दिए तुम्हारे देर से आने पर',
      'समझ लेना चाहिए था कि दिल से मोहब्बत अब उतर चुकी है',
    ],
    linesHinglish: [
      'Jab maine sawaal poochhne band kar diye tumhaare der se aane par',
      'Samajh lena chahiye tha ki dil se mohabbat ab utar chuki hai',
    ],
    linesEnglish: [
      'When I stopped asking questions about where you had been',
      'You should have guessed my heart was already detaching itself',
    ],
  },
  {
    title: 'मेरी वफ़ा, तेरी आदत',
    titleEnglish: 'Taken for Granted',
    linesHindi: [
      'हर बार मान जाने की मेरी आदत ने तुम्हें लापरवाह बना दिया',
      'तुमने सोचा कि चाहे जितना दिल दुखाओ, मैं यहीं मिलूँगा',
    ],
    linesHinglish: [
      'Har baar maan jaane ki meri aadat ne tumhein laaparwaah bana diya',
      'Tumne socha ki chaahe jitna dil dukhaao, main yaheen miloonga',
    ],
    linesEnglish: [
      'My habit of forgiving quickly made you completely careless',
      'You assumed no matter how badly you hurt me, I would stay waiting here',
    ],
  },
  {
    title: 'वक़्त की अदालत',
    titleEnglish: 'Court of Time',
    linesHindi: [
      'तुम्हें लगता है कि कोई गवाह नहीं था तुम्हारी बेवफ़ाई का वहां',
      'पर हर टूटे दिल की आह ऊपर वाले के पास दर्ज होती है',
    ],
    linesHinglish: [
      'Tumhein lagta hai ki koi gawaah nahin tha tumhaari bewafaai ka wahaan',
      'Par har toote dil ki aah upar waale ke paas darj hoti hai',
    ],
    linesEnglish: [
      'You think nobody witnessed how carelessly you broke a sincere heart',
      'Yet every silent ache is quietly noted where it truly counts',
    ],
  },
  {
    title: 'आधे दिल का प्यार',
    titleEnglish: 'Half-Given Heart',
    linesHindi: [
      'मुझे पूरी मोहब्बत चाहिए थी, कोई बचा-खुचा वक़्त नहीं तुम्हारा',
      'आधे मन से निभाए गए रिश्तों से तन्हा रहना कहीं बेहतर है',
    ],
    linesHinglish: [
      'Mujhe poori mohabbat chahiye thi, koi bacha-khucha waqt nahin tumhaara',
      'Aadhe man se nibhaaye gaye rishton se tanha rehna kahin behtar hai',
    ],
    linesEnglish: [
      'I wanted wholehearted love, never leftover scraps of your spare time',
      'Standing alone beats surviving on half-hearted affection every time',
    ],
  },
  {
    title: 'शोर के बिना अलविदा',
    titleEnglish: 'Farewell Without Noise',
    linesHindi: [
      'अब न कोई स्क्रीनशॉट बचेगा, न कोई पुरानी चैट पढ़ी जाएगी',
      'तुम्हारा नाम ज़िंदगी की किताब से बिल्कुल साफ़ मिटा दिया है',
    ],
    linesHinglish: [
      'Ab na koi screenshot bachega, na koi purani chat padhi jaayegi',
      'Tumhaara naam zindagi ki kitaab se bilkul saaf mita diya hai',
    ],
    linesEnglish: [
      'No more saved screenshots and no re-reading old chat threads at midnight',
      'Your name has been wiped cleanly out of my book of days',
    ],
  },
  {
    title: 'सपनों से जागना',
    titleEnglish: 'Waking Up Clean',
    linesHindi: [
      'ख़ूबसूरत ख्वाब टूटते हैं तो थोड़ी सी चुभन ज़रूर होती है पहले',
      'पर जागने के बाद ही इंसान असली दुनिया का सामना कर पाता है',
    ],
    linesHinglish: [
      'Khoobsurat khwaab toot-te hain to thodi si chubhan zaroor hoti hai pehle',
      'Par jaagne ke baad hi insaan asli duniya ka saamna kar paata hai',
    ],
    linesEnglish: [
      'When a lovely daydream breaks, it stings for the first few mornings',
      'Yet waking up is the only way you finally step into real life',
    ],
  },
  {
    title: 'रंग बदलते लोग',
    titleEnglish: 'Changing Colors',
    linesHindi: [
      'जब तक काम निकलता रहा तब तक मैं सबसे अच्छा इंसान था',
      'जिस दिन मैंने सच बोल दिया, मैं ही सबसे बुरा बन गया',
    ],
    linesHinglish: [
      'Jab tak kaam nikalta raha tab tak main sabse accha insaan tha',
      'Jis din maine sach bol diya, main hi sabse bura ban gaya',
    ],
    linesEnglish: [
      'As long as I stayed useful, I was your favorite person alive',
      'The very day I spoke an honest boundary, I suddenly turned into the villain',
    ],
  },
  {
    title: 'इज़्ज़त सबसे ऊपर',
    titleEnglish: 'Dignity Above Attachment',
    linesHindi: [
      'मोहब्बत कितनी भी गहरी हो, ख़ुद्दारी से बड़ी कभी नहीं होती',
      'जहाँ बार-बार अपमान मिले, वहाँ रुकना मोहब्बत नहीं मजबूरी है',
    ],
    linesHinglish: [
      'Mohabbat kitni bhi gehri ho, khuddaari se badi kabhi nahin hoti',
      'Jahaan baar-baar apmaan mile, wahaan rukna mohabbat nahin majboori hai',
    ],
    linesEnglish: [
      'No matter how deep attachment runs, it never outranks self-respect',
      'Staying where you are repeatedly disrespected is not love—it is settling',
    ],
  },
  {
    title: 'अधूरी वफ़ा का ग़म',
    titleEnglish: 'Halfway Loyalty',
    linesHindi: [
      'साथ चलने का हौसला न था तो हाथ थामा ही क्यों था तुमने',
      'बीच भँवर में नाव छोड़ने से बेहतर था किनारे पर ही मना कर देते',
    ],
    linesHinglish: [
      'Saath chalne ka hausla na tha to haath thaama hi kyon tha tumne',
      'Beech bhanwar mein naav chhodne se behtar tha kinaare par hi mana kar dete',
    ],
    linesEnglish: [
      'If you lacked the courage to walk the full distance, why hold my hand at all',
      'Better to decline at the shore than jump ship in the middle of the storm',
    ],
  },
  {
    title: 'हल्का दिल, साफ़ राह',
    titleEnglish: 'Lighter Heart',
    linesHindi: [
      'बेवफ़ा लोगों की यादों का बोझ उतारकर फेंक दिया है मैंने',
      'अब मेरे सामने सिर्फ़ सुकून और नई सुबह का खुला आसमान है',
    ],
    linesHinglish: [
      'Bewafa logon ki yaadon ka bojh utaarkar phenk diya hai maine',
      'Ab mere saamne sirf sukoon aur nayi subah ka khula aasmaan hai',
    ],
    linesEnglish: [
      'I dropped the heavy baggage of memories tied to unfaithful people',
      'Ahead of me stretches nothing but fresh air and open morning sky',
    ],
  },
  {
    title: 'झूठा एहसास',
    titleEnglish: 'Filling Only Your Loneliness',
    linesHindi: [
      'तुम प्यार नहीं कर रहे थे, बस अपना अकेलापन भर रहे थे मुझसे',
      'जैसे ही भीड़ मिली, तुम बिना पलटे आगे निकल गए',
    ],
    linesHinglish: [
      'Tum pyaar nahin kar rahe the, bas apna akelaapan bhar rahe the mujhse',
      'Jaise hi bheed mili, tum bina palte aage nikal gaye',
    ],
    linesEnglish: [
      'You were never really in love—you were just curing your boredom with me',
      'The second new company arrived, you walked ahead without a glance back',
    ],
  },
  {
    title: 'आँखों का धोखा',
    titleEnglish: 'Seeing Clearly Now',
    linesHindi: [
      'चमक देखकर मैंने भी काँच के टुकड़े को हीरा समझ लिया था',
      'हाथ में चुभा तब जाकर उसकी असली औक़ात समझ में आई',
    ],
    linesHinglish: [
      'Chamak dekhkar maine bhi kaanch ke tukde ko heera samajh liya tha',
      'Haath mein chubha tab jaakar uski asli aukaat samajh mein aayi',
    ],
    linesEnglish: [
      'Fooled by the shine, I mistook a shard of glass for a real diamond',
      'Only when it cut my palm did I recognize what I was holding',
    ],
  },
  {
    title: 'वक़्त की मरहम',
    titleEnglish: 'Healing Takes Time',
    linesHindi: [
      'मानता हूँ कि आज भी कभी-कभी पुरानी बात चुभ जाती है दिल में',
      'पर ये यक़ीन है कि आने वाला कल इस दर्द से कहीं बेहतर होगा',
    ],
    linesHinglish: [
      'Maanta hoon ki aaj bhi kabhi-kabhi purani baat chubh jaati hai dil mein',
      'Par ye yaqeen hai ki aane waala kal is dard se kahin behtar hoga',
    ],
    linesEnglish: [
      'I admit an old memory still pricks softly inside my chest sometimes',
      'Yet I trust completely that tomorrow holds far better days than that sting',
    ],
  },
  {
    title: 'बनावटी रिश्ते',
    titleEnglish: 'Plastic Connections',
    linesHindi: [
      'जितनी सजावट बाहर से दिखती थी हमारे इस प्यारे से रिश्ते में',
      'अंदर से उसकी नींव उतनी ही कमज़ोर और खोखली निकली आख़िर',
    ],
    linesHinglish: [
      'Jitni sajaawat baahar se dikhti thi hamaare is pyaare se rishte mein',
      'Andar se uski neev utni hi kamzor aur khokhli nikli aakhir',
    ],
    linesEnglish: [
      'For all the glossy shine our relationship wore from the outside',
      'Underneath the surface, the foundation turned out hollow and fragile',
    ],
  },
  {
    title: 'पसंद और वफ़ा',
    titleEnglish: 'Liking vs Loyalty',
    linesHindi: [
      'पसंद तो दुनिया को रोज़ नई-नई चीज़ें आ जाती हैं यहाँ',
      'पर वफ़ादारी निभाना सिर्फ़ मज़बूत किरदार वालों के बस की बात है',
    ],
    linesHinglish: [
      'Pasand to duniya ko roz nayi-nayi cheezein aa jaati hain yahaan',
      'Par wafaadaari nibhaana sirf mazboot kirdaar waalon ke bas ki baat hai',
    ],
    linesEnglish: [
      'Anyone can feel attracted to something shiny and new every week',
      'Staying loyal takes real character—and very few people carry that weight',
    ],
  },
  {
    title: 'ज़ख़्म से सबक़ तक',
    titleEnglish: 'From Hurt to Wisdom',
    linesHindi: [
      'गिरने के बाद इंसान या तो रोता रहता है या चलना सीख लेता है',
      'मैंने आँसू पोंछकर दुबारा मज़बूती से खड़ा होना चुन लिया',
    ],
    linesHinglish: [
      'Girne ke baad insaan ya to rota rehta hai ya chalna seekh leta hai',
      'Maine aansoo ponchhkar dubaara mazbooti se khada hona chun liya',
    ],
    linesEnglish: [
      'After a hard fall, you either stay down weeping or learn how to rise',
      'I wiped my eyes clean and chose to stand up steadier than before',
    ],
  },
  {
    title: 'सच्ची कदर बाद में',
    titleEnglish: 'Missed When Gone',
    linesHindi: [
      'भीड़ में जब कोई मेरी तरह बिना स्वार्थ के न मिलेगा तुम्हें',
      'उस दिन याद आएगा कि तुमने किस हीरे को सस्ते में खो दिया',
    ],
    linesHinglish: [
      'Bheed mein jab koi meri tarah bina swaarth ke na milega tumhein',
      'Us din yaad aayega ki tumne kis heere ko saste mein kho diya',
    ],
    linesEnglish: [
      'When you look around a crowd and find nobody loving without a price tag',
      'That day you will remember the priceless loyalty you let slip away',
    ],
  },
  {
    title: 'झूठी तस्वीर',
    titleEnglish: 'Faded Illusion',
    linesHindi: [
      'मैंने जिस शख़्स को अपने ख्वाबों में इतना ऊँचा बिठाया था',
      'हक़ीक़त में वो ज़रा सी परख पर भी खरा न उतर सका',
    ],
    linesHinglish: [
      'Maine jis shakhs ko apne khwaabon mein itna ooncha bithaaya tha',
      'Haqeeqat mein wo zara si parakh par bhi khara na utar saka',
    ],
    linesEnglish: [
      'The person I placed upon the highest pedestal inside my dreams',
      'Could not pass even the simplest test of honesty in real life',
    ],
  },
  {
    title: 'झूठी उम्मीद के पिंजरे से रिहाई',
    titleEnglish: 'Peacefully Free',
    linesHindi: [
      'झूठी उम्मीद के पिंजरे से बाहर आकर अब साँस अच्छी आती है',
      'अधूरे प्यार से आज़ाद होकर ज़िंदगी फिर से अपनी लगती है',
    ],
    linesHinglish: [
      'Jhoothi ummeed ke pinjre se baahar aakar ab saans acchi aati hai',
      'Adhoore pyaar se aazaad hokar zindagi phir se apni lagti hai',
    ],
    linesEnglish: [
      'Stepping out of the cage of false hopes lets me breathe freely again',
      'Released from half-hearted love, life finally feels like mine once more',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'बिन कहे अलविदा',
    titleEnglish: 'Unspoken Exit',
    linesHindi: [
      'जाने वाले कभी इजाज़त लेकर नहीं जाते, बस नज़रों से ओझल होते हैं',
      'समझदार इंसान भी फिर उन्हें दुबारा बुलाने की ज़िद नहीं करता',
    ],
    linesHinglish: [
      'Jaane waale kabhi ijaazat lekar nahin jaate, bas nazron se ojhal hote hain',
      'Samajhdaar insaan bhi phir unhein dubaara bulaane ki zid nahin karta',
    ],
    linesEnglish: [
      'People who want to leave never ask permission—they simply fade out',
      'And a self-respecting soul never begs them to come back twice',
    ],
  },
  {
    title: 'ख़ामोश सज़ा',
    titleEnglish: 'Quiet Distance Held',
    linesHindi: [
      'जब मैंने पलटकर देखना बंद कर दिया तुम्हारी गली की ओर',
      'तभी मुझे एहसास हुआ कि बाहर की दुनिया कितनी ख़ूबसूरत है',
    ],
    linesHinglish: [
      'Jab maine palatkar dekhna band kar diya tumhaari gali ki or',
      'Tabhi mujhe ehsaas hua ki baahar ki duniya kitni khoobsurat hai',
    ],
    linesEnglish: [
      'The day I stopped glancing back toward your old street',
      'I realized how bright and peaceful the wider world actually is',
    ],
  },
  {
    title: 'दिल का आईना साफ़',
    titleEnglish: 'No Bitterness Carried',
    linesHindi: [
      'बेवफ़ाई तुम्हारी थी, पर मैं अपना स्वभाव कड़वा क्यों करूँ',
      'मेरा दिल आज भी उतना ही साफ़ है, बस अब दरवाज़े पर पहरा है',
    ],
    linesHinglish: [
      'Bewafaai tumhaari thi, par main apna swabhaav kadwa kyon karoon',
      'Mera dil aaj bhi utna hi saaf hai, bas ab darwaaze par pehra hai',
    ],
    linesEnglish: [
      'The betrayal belonged to you, so why should I let my heart turn sour',
      'I am still just as kind—only now I guard the gate a little wiser',
    ],
  },
  {
    title: 'अधूरा भरोसा',
    titleEnglish: 'Fragile Promise',
    linesHindi: [
      'काँच की तरह एक बार चटक जाए जो भरोसा दिल के अंदर',
      'उसे लाख गोंद लगाकर जोड़ो, दरार तो साफ़ दिखाई ही देती है',
    ],
    linesHinglish: [
      'Kaanch ki tarah ek baar chatak jaaye jo bharosa dil ke andar',
      'Use laakh gond lagaakar jodo, daraar to saaf dikhaai hi deti hai',
    ],
    linesEnglish: [
      'Once trust cracks inside the heart like fine glass',
      'No matter how carefully you glue it back, the seam always shows',
    ],
  },
  {
    title: 'ज़ुबान और दिल का फ़र्क़',
    titleEnglish: 'Words vs Intent',
    linesHindi: [
      'तुम्हारी मीठी ज़ुबान ने जिस क़दर भरोसा जगाया था मेरे अंदर',
      'तुम्हारे कठोर फ़ैसलों ने उतनी ही तेज़ी से सब उजाड़ दिया',
    ],
    linesHinglish: [
      'Tumhaari meethi zubaan ne jis qadar bharosa jagaaya tha mere andar',
      'Tumhaare kathor faislon ne utni hi tezi se sab ujaad diya',
    ],
    linesEnglish: [
      'As high as your sweet promises lifted my faith in the beginning',
      'Your cold choices tore it all down twice as fast in the end',
    ],
  },
  {
    title: 'वफ़ा का सौदा नहीं',
    titleEnglish: 'Loyalty Is Not for Sale',
    linesHindi: [
      'मैं उन लोगों में से नहीं जो हर मौसम के साथ साथी बदल लें',
      'इसलिए तुम्हारी फरेबी दुनिया से दूर हो जाना ही बेहतर लगा मुझे',
    ],
    linesHinglish: [
      'Main un logon mein se nahin jo har mausam ke saath saathi badal lein',
      'Isliye tumhaari farebi duniya se door ho jaana hi behtar laga mujhe',
    ],
    linesEnglish: [
      'I am not built to switch loyalties with every shifting season',
      'Stepping far away from your web of games felt like the only clean move',
    ],
  },
  {
    title: 'मुस्कान के पीछे सबक़',
    titleEnglish: 'Lesson Behind Smile',
    linesHindi: [
      'लोग मेरी मुस्कान देखकर सोचते हैं मुझे कभी कोई धोखा नहीं मिला',
      'उन्हें क्या पता मैंने दर्द को ताक़त बनाकर पहनना सीख लिया है',
    ],
    linesHinglish: [
      'Log meri muskaan dekhkar sochte hain mujhe kabhi koi dhokha nahin mila',
      'Unhein kya pata maine dard ko taaqat banaakar pehenna seekh liya hai',
    ],
    linesEnglish: [
      'Seeing my smile, people assume nobody ever broke my trust',
      'Little do they know I turned old pain into quiet inner armor',
    ],
  },
  {
    title: 'वक़्त ने बदल दिया सब',
    titleEnglish: 'Outgrew the Hurt',
    linesHindi: [
      'जिस नाम पर कभी मेरी धड़कनें रुक सी जाती थीं पल भर को',
      'आज वही नाम सुनकर चेहरे पर ज़रा सी हलचल भी नहीं होती',
    ],
    linesHinglish: [
      'Jis naam par kabhi meri dhadkanein ruk si jaati theen pal bhar ko',
      'Aaj wahi naam sunkar chehre par zara si halchal bhi nahin hoti',
    ],
    linesEnglish: [
      'The very name that used to make my pulse skip a beat',
      'Now passes right by my ears without stirring a single ripple',
    ],
  },
  {
    title: 'सच्चाई से मुलाक़ात',
    titleEnglish: 'Facing Reality',
    linesHindi: [
      'जिस दिन मैंने ख़ुद से झूठ बोलना बंद कर दिया तुम्हारे बारे में',
      'उसी दिन से मेरी आँखें खुलीं और दर्द कम होना शुरू हो गया',
    ],
    linesHinglish: [
      'Jis din maine khud se jhooth bolna band kar diya tumhaare baare mein',
      'Usi din se meri aankhein khuleen aur dard kam hona shuru ho gaya',
    ],
    linesEnglish: [
      'The day I stopped making up sweet excuses to defend you',
      'My eyes opened cleanly and the heaviness finally started fading',
    ],
  },
  {
    title: 'सस्ते बहाने',
    titleEnglish: 'Cheap Alibis',
    linesHindi: [
      'मोहब्बत सच्ची हो तो हज़ार मुश्किलों में भी रास्ता निकल आता है',
      'दिल बदल जाए तो छोटी सी बात भी बहाने का पहाड़ बन जाती है',
    ],
    linesHinglish: [
      'Mohabbat sacchi ho to hazaar mushkilon mein bhi raasta nikal aata hai',
      'Dil badal jaaye to chhoti si baat bhi bahaane ka pahaad ban jaati hai',
    ],
    linesEnglish: [
      'When love is real, two people find a path through a thousand storms',
      'Once feelings fade, the tiniest inconvenience turns into a giant excuse',
    ],
  },
  {
    title: 'हद से ज़्यादा उम्मीद',
    titleEnglish: 'Lesson on Expectations',
    linesHindi: [
      'तकलीफ़ तुम्हारे जाने से कम, मेरी अपनी उम्मीदों से ज़्यादा हुई',
      'मैंने एक बंजर ज़मीन पर फूल खिलने का इंतज़ार जो किया था',
    ],
    linesHinglish: [
      'Takleef tumhaare jaane se kam, meri apni ummeedon se zyada hui',
      'Maine ek banjar zameen par phool khilne ka intezaar jo kiya tha',
    ],
    linesEnglish: [
      'Less than your departure, my own blind expectations hurt me most',
      'Wait too long for roses to bloom in barren soil, and you only exhaust yourself',
    ],
  },
  {
    title: 'भीतर की मज़बूती',
    titleEnglish: 'Steady Core',
    linesHindi: [
      'धोखे की हवाएँ थोड़ी ठंडी और तेज़ ज़रूर थीं शुरुआत में',
      'पर मेरे अंदर का दिया उनसे बुझने की बजाय और चमक उठा',
    ],
    linesHinglish: [
      'Dhokhe ki hawaayein thodi thandi aur tez zaroor theen shuruaat mein',
      'Par mere andar ka diya unse bujhne ki bajaay aur chamak utha',
    ],
    linesEnglish: [
      'The winds of betrayal blew sharp and cold at the start',
      'Yet instead of blowing out, the flame inside me burned steadier than ever',
    ],
  },
  {
    title: 'सच्चा साथी कौन',
    titleEnglish: 'Real vs Temporary',
    linesHindi: [
      'वक़्त अच्छा हो तो हर कोई हाथ में हाथ डालकर चलना चाहता है',
      'बुरे दिनों में जो गायब हो जाए, वही असली बेवफ़ा कहलाता है',
    ],
    linesHinglish: [
      'Waqt accha ho to har koi haath mein haath daalkar chalna chahta hai',
      'Bure dinon mein jo gaayab ho jaaye, wahi asli bewafa kehlaata hai',
    ],
    linesEnglish: [
      'During sunny chapters, everyone wants to stroll along beside you',
      'Whoever vanishes when dark clouds gather proves where their loyalty stood',
    ],
  },
  {
    title: 'मन के दरवाज़े पर आत्मसम्मान',
    titleEnglish: 'Protecting My Peace',
    linesHindi: [
      'अब मैंने भी अपने मन के दरवाज़े पर एक नियम लिख दिया है',
      'यहाँ सिर्फ़ वफ़ादार लोगों को ही बैठने की इजाज़त मिलेगी',
    ],
    linesHinglish: [
      'Ab maine bhi apne man ke darwaaze par ek niyam likh diya hai',
      'Yahaan sirf wafaadaar logon ko hi baithne ki ijaazat milegi',
    ],
    linesEnglish: [
      'I finally posted a simple house rule at the entrance of my peace',
      'Only loyal, honest souls earn a seat inside anymore',
    ],
  },
  {
    title: 'बदलते चेहरे की कहानी',
    titleEnglish: 'Two Sides of a Coin',
    linesHindi: [
      'कितने अजीब होते हैं वो लोग जो एक ही दिन में अजनबी बन जाएँ',
      'जिनके बिना कभी सुबह न होती थी, अब उनका ज़िक्र भी भारी लगे',
    ],
    linesHinglish: [
      'Kitne ajeeb hote hain wo log jo ek hi din mein ajnabi ban jaayein',
      'Jinke bina kabhi subah na hoti thi, ab unka zikr bhi bhaari lage',
    ],
    linesEnglish: [
      'How strange it is watching someone turn into a stranger in one day',
      'Once my morning began with your name; now even a mention feels tiring',
    ],
  },
  {
    title: 'दिल से माफ़ी, पर दूरी',
    titleEnglish: 'Forgive From Afar',
    linesHindi: [
      'बदला लेना मेरी फितरत में कभी शामिल रहा ही नहीं मेरे दोस्त',
      'मैंने बस चुपचाप उनकी जगह अपनी ज़िंदगी से ख़ाली कर दी',
    ],
    linesHinglish: [
      'Badla lena meri fitrat mein kabhi shaamil raha hi nahin mere dost',
      'Maine bas chupchaap unki jagah apni zindagi se khaali kar di',
    ],
    linesEnglish: [
      'Chasing payback has never been part of who I am',
      'I simply cleared out their chair and protected my peace from afar',
    ],
  },
  {
    title: 'स्वार्थ के वक़्त असली चेहरा',
    titleEnglish: 'True Colors Show',
    linesHindi: [
      'जब बात स्वार्थ और इज़्ज़त के बीच चुनने की आई आख़िरकार',
      'तुमने अपनी असली पहचान खुद-ब-खुद दुनिया को दिखा दी',
    ],
    linesHinglish: [
      'Jab baat swaarth aur izzat ke beech chunne ki aayi aakhirkaar',
      'Tumne apni asli pehchaan khud-ba-khud duniya ko dikha di',
    ],
    linesEnglish: [
      'When it finally came down to choosing between selfishness and loyalty',
      'You revealed your true colors without me needing to say a word',
    ],
  },
  {
    title: 'ताज़ा हवा की ओर',
    titleEnglish: 'Toward Fresh Air',
    linesHindi: [
      'घुटन भरे रिश्तों में साँस रोककर जीने का दौर गुज़र गया अब',
      'ज़िंदगी फिर से मुस्कुराने के लिए ताज़ा हवा की तरफ़ बढ़ चली है',
    ],
    linesHinglish: [
      'Ghutan bhare rishton mein saans rokkar jeene ka daur guzar gaya ab',
      'Zindagi phir se muskuraane ke liye taaza hawa ki taraf badh chali hai',
    ],
    linesEnglish: [
      'My days of holding my breath inside a suffocating bond are over',
      'Life is stepping back out into open air ready to smile freely again',
    ],
  },
  {
    title: 'यादों की राख',
    titleEnglish: 'Ashes of Promises',
    linesHindi: [
      'जिन ख़तों को मैंने ताउम्र संभालकर रखने की सोची थी दिल से',
      'तुम्हारी एक बेवफ़ाई ने उन सबको धुंधली यादों में बदल दिया',
    ],
    linesHinglish: [
      'Jin khaton ko maine taumr sambhaalkar rakhne ki sochi thi dil se',
      'Tumhaari ek bewafaai ne un sabko dhundhli yaadon mein badal diya',
    ],
    linesEnglish: [
      'The letters I once planned to keep safe for a whole lifetime',
      'Turned into faded dust the moment you broke your own word',
    ],
  },
  {
    title: 'वक़्त से बड़ा जवाब नहीं',
    titleEnglish: 'Best Answer Is Moving On',
    linesHindi: [
      'बदले की आग में जलने से बेहतर है अपनी दुनिया सँवार लेना',
      'आगे बढ़कर खुश रहना ही किसी बेवफ़ा को सबसे बड़ा जवाब होता है',
    ],
    linesHinglish: [
      'Badle ki aag mein jalne se behtar hai apni duniya sanwaar lena',
      'Aage badhkar khush rehna hi kisi bewafa ko sabse bada jawaab hota hai',
    ],
    linesEnglish: [
      'Building a brighter life beats burning inside bitterness any day',
      'Moving forward genuinely happy is the cleanest reply to any betrayal',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'चालाकी से दूर सुकून',
    titleEnglish: 'Away From Mind Games',
    linesHindi: [
      'मुझे शतरंज जैसी चालें चलकर रिश्ते निभाना कभी नहीं आया',
      'इसलिए तुम्हारी चालाक बस्ती से बाहर आकर बहुत राहत मिली',
    ],
    linesHinglish: [
      'Mujhe shatranj jaisi chaalein chalkar rishte nibhaana kabhi nahin aaya',
      'Isliye tumhaari chaalaak basti se baahar aakar bahut raahat mili',
    ],
    linesEnglish: [
      'I never learned how to treat love like a cunning game of chess',
      'Stepping out of your mind games brought instant relief to my soul',
    ],
  },
  {
    title: 'ख़ामोशी से मिली आख़िरी विदाई',
    titleEnglish: 'Distance Chosen',
    linesHindi: [
      'तुम्हारी ख़ामोशी ने हर सवाल का जवाब पहले ही दे दिया था',
      'मैं ही बेवजह उलझे हुए धागों को सुलझाने की कोशिश करता रहा',
    ],
    linesHinglish: [
      'Tumhaari khaamoshi ne har sawaal ka jawaab pehle hi de diya tha',
      'Main hi bewajah uljhe hue dhaagon ko suljhaane ki koshish karta raha',
    ],
    linesEnglish: [
      'Your cold silence had already answered every question I asked',
      'I was just stubbornly trying to untangle knots you wanted left tangled',
    ],
  },
  {
    title: 'दिल की सख़्ती नहीं, समझ',
    titleEnglish: 'Boundaries Not Coldness',
    linesHindi: [
      'अब मैं हर किसी को दिल के अंदर आने की चाबी नहीं देता',
      'ये पत्थरदिली नहीं है दोस्त, बस पुराने धोखों का असर है',
    ],
    linesHinglish: [
      'Ab main har kisi ko dil ke andar aane ki chaabi nahin deta',
      'Ye patthardili nahin hai dost, bas purane dhokhon ka asar hai',
    ],
    linesEnglish: [
      'I no longer hand spare keys to my heart out to every stranger',
      'That is not coldness—it is just healthy wisdom earned the hard way',
    ],
  },
  {
    title: 'बेवफ़ाई की परछाई',
    titleEnglish: 'Shadow Left Behind',
    linesHindi: [
      'तुम तो नए सफ़र पर निकल पड़े बिना पीछे मुड़कर देखे एक बार',
      'मेरी गलियों में महीनों तुम्हारे झूठे वादों की गूँज बाकी रही',
    ],
    linesHinglish: [
      'Tum to naye safar par nikal pade bina peechhe mudkar dekhe ek baar',
      'Meri galiyon mein mahinon tumhaare jhoothe waadon ki goonj baaki rahi',
    ],
    linesEnglish: [
      'You hurried onto a brand-new journey without glancing back once',
      'Leaving the echo of your empty promises ringing across my months',
    ],
  },
  {
    title: 'झूठ का महल',
    titleEnglish: 'Palace Built on Lies',
    linesHindi: [
      'झूठ की नींव पर खड़ा किया गया महल एक दिन गिरता ही है',
      'सच्चाई का एक हल्का सा झोंका भी उसे मिट्टी में मिला देता है',
    ],
    linesHinglish: [
      'Jhooth ki neev par khada kiya gaya mehal ek din girta hi hai',
      'Sacchaai ka ek halka sa jhonka bhi use mitti mein mila deta hai',
    ],
    linesEnglish: [
      'A grand palace built atop shifting lies always collapses sooner or later',
      'Even one gentle breeze of truth brings the whole tower crashing down',
    ],
  },
  {
    title: 'अपना रास्ता साफ़',
    titleEnglish: 'Clear Road Ahead',
    linesHindi: [
      'सही इंसान साथ न चले तो रास्ता ख़ुद ही तय करना पड़ता है',
      'बेवफ़ा साथियों की भीड़ से तन्हा चलना सौ गुना बेहतर होता है',
    ],
    linesHinglish: [
      'Sahi insaan saath na chale to raasta khud hi tay karna padta hai',
      'Bewafa saathiyon ki bheed se tanha chalna sau guna behtar hota hai',
    ],
    linesEnglish: [
      'If the right companion refuses to walk true, you take the trail yourself',
      'Walking solo beats marching alongside unfaithful company a hundred times over',
    ],
  },
  {
    title: 'चुप रहने का सबब',
    titleEnglish: 'Reason for Silence',
    linesHindi: [
      'दिल की बात अब हर किसी से कहने की इच्छा ख़त्म हो गई है',
      'जिन पर सबसे ज़्यादा भरोसा किया, उन्हीं ने सबसे बड़ा ज़ख़्म दिया',
    ],
    linesHinglish: [
      'Dil ki baat ab har kisi se kehne ki iccha khatm ho gayi hai',
      'Jin par sabse zyada bharosa kiya, unheen ne sabse bada zakhm diya',
    ],
    linesEnglish: [
      'The urge to pour my heart out to everyone has quietly faded away',
      'The person I trusted highest was the one who cut the deepest',
    ],
  },
  {
    title: 'आधा सच, पूरा धोखा',
    titleEnglish: 'Half Truths',
    linesHindi: [
      'आधा सच बोलकर भी लोग ख़ुद को ईमानदार मान बैठते हैं आजकल',
      'जबकि छिपाई गई एक बात ही पूरे रिश्ते की जान ले लेती है',
    ],
    linesHinglish: [
      'Aadha sach bolkar bhi log khud ko imaandaar maan baithte hain aajkal',
      'Jabki chhipaayi gayi ek baat hi poore rishte ki jaan le leti hai',
    ],
    linesEnglish: [
      'Plenty of people feed you half the truth and still call themselves honest',
      'Even though one hidden secret is enough to kill an entire bond',
    ],
  },
  {
    title: 'वक़्त पर पहचान',
    titleEnglish: 'Grateful for Clarity',
    linesHindi: [
      'देर से सही पर आँखों पर बंधी पट्टी आख़िर खुल ही गई मेरी',
      'अब मुझे कम से कम अपने दुश्मन और अपने हमदर्द में फ़र्क़ पता है',
    ],
    linesHinglish: [
      'Der se sahi par aankhon par bandhi patti aakhir khul hi gayi meri',
      'Ab mujhe kam se kam apne dushman aur apne hamdard mein farq pata hai',
    ],
    linesEnglish: [
      'Better late than never—the blindfold finally slipped off my eyes',
      'At least now I can tell my real allies apart from clever actors',
    ],
  },
  {
    title: 'मुस्कान की वापसी',
    titleEnglish: 'Smile Returns',
    linesHindi: [
      'किसी के धोखे से मेरी पूरी दुनिया नहीं रुकने वाली कभी',
      'दो दिन की उदासी के बाद मेरी हँसी फिर से लौट आएगी',
    ],
    linesHinglish: [
      'Kisi ke dhokhe se meri poori duniya nahin rukne waali kabhi',
      'Do din ki udaasi ke baad meri hansi phir se laut aayegi',
    ],
    linesEnglish: [
      'One person’s betrayal will never bring my whole world to a halt',
      'After a couple of quiet days, my real laugh always finds its way back',
    ],
  },
  {
    title: 'रूह से जुड़ा सबक़',
    titleEnglish: 'Permanent Lesson',
    linesHindi: [
      'दिल लगाकर सीखा है मैंने कि शब्द नहीं, किरदार मायने रखता है',
      'अच्छी बातें करने वाला हर शख़्स अच्छा साथी नहीं होता कभी',
    ],
    linesHinglish: [
      'Dil lagaakar seekha hai maine ki shabd nahin, kirdaar maayne rakhta hai',
      'Acchi baatein karne waala har shakhs accha saathi nahin hota kabhi',
    ],
    linesEnglish: [
      'Love taught me clearly that character matters far more than charm',
      'Not everyone who speaks fluent sweetness knows how to stand loyal',
    ],
  },
  {
    title: 'नक़ली हमसफ़र',
    titleEnglish: 'Temporary Co-Passenger',
    linesHindi: [
      'तुम मेरी ट्रेन के सिर्फ़ दो स्टेशन के मुसाफ़िर निकले आख़िर',
      'और मैं बेवकूफ़ तुम्हें आख़िरी मंज़िल समझकर बैठा रहा',
    ],
    linesHinglish: [
      'Tum meri train ke sirf do station ke musaafir nikle aakhir',
      'Aur main bewakoof tumhein aakhiri manzil samajhkar baitha raha',
    ],
    linesEnglish: [
      'You turned out to be a passenger riding only for two stops on my train',
      'While I sat there smiling, mistaking you for my final destination',
    ],
  },
  {
    title: 'शोर के बाहर शांति',
    titleEnglish: 'Calm Outside Drama',
    linesHindi: [
      'जहाँ हर बात पर सफ़ाई और शक का साया मंडराता रहे रोज़',
      'उस भीड़ से निकलकर बाहर की खामोशी में बैठना ज़्यादा सुखद है',
    ],
    linesHinglish: [
      'Jahaan har baat par safaai aur shaq ka saaya mandraata rahe roz',
      'Us bheed se nikal kar baahar ki khaamoshi mein baithna zyada sukhad hai',
    ],
    linesEnglish: [
      'Where constant excuses and lingering doubts hang over every evening',
      'Stepping outside into quiet solitude feels like pure relief',
    ],
  },
  {
    title: 'क़समों की हक़ीक़त',
    titleEnglish: 'Reality of Vows',
    linesHindi: [
      'जो बात-बात पर बड़ी क़समें खाने का शोर मचाया करते हैं',
      'अक्सर वही लोग सबसे पहले अपने वादों से पीछे हट जाते हैं',
    ],
    linesHinglish: [
      'Jo baat-baat par badi qasmein khaane ka shor machaaya karte hain',
      'Aksar wahi log sabse pehle apne waadon se peechhe hat jaate hain',
    ],
    linesEnglish: [
      'People who make the loudest habit of swearing endless oaths',
      'Are usually the very first ones to slip backward out of their promises',
    ],
  },
  {
    title: 'ख़ुद को समेटना',
    titleEnglish: 'Gathering Myself',
    linesHindi: [
      'बिखरे हुए टुकड़ों को जोड़ने में थोड़ा वक़्त तो लगता है यार',
      'पर एक बार संभल गया तो फिर कोई आंधी हिला नहीं पाएगी',
    ],
    linesHinglish: [
      'Bikhre hue tukdon ko jodne mein thoda waqt to lagta hai yaar',
      'Par ek baar sambhal gaya to phir koi aandhi hila nahin paayegi',
    ],
    linesEnglish: [
      'Picking up scattered pieces takes a little quiet patience, friend',
      'Yet once I stand steady again, no passing storm will shake me',
    ],
  },
  {
    title: 'सच्चाई का उजाला',
    titleEnglish: 'Light of Truth',
    linesHindi: [
      'रात कितनी भी काली लगे पर सुबह से ज़्यादा देर नहीं टिकती',
      'दिल पर लगा हर धोखा भी एक दिन बस धुंधली कहानी बन जाता है',
    ],
    linesHinglish: [
      'Raat kitni bhi kaali lage par subah se zyada der nahin tikti',
      'Dil par laga har dhokha bhi ek din bas dhundhli kahaani ban jaata hai',
    ],
    linesEnglish: [
      'No matter how dark midnight feels, it never outlasts the sunrise',
      'Every sharp betrayal eventually fades into an old chapter you barely feel',
    ],
  },
  {
    title: 'मोहब्बत बनाम चालाकी',
    titleEnglish: 'Heart vs Strategy',
    linesHindi: [
      'मैंने दिल की किताब खोली और तुमने हर पन्ने का फ़ायदा उठाया',
      'चलो कोई बात नहीं, कम से कम मैं तो इंसान बनकर ही जीता रहा',
    ],
    linesHinglish: [
      'Maine dil ki kitaab kholi aur tumne har panne ka faayda uthaaya',
      'Chalo koi baat nahin, kam se kam main to insaan bankar hi jeeta raha',
    ],
    linesEnglish: [
      'I laid open my heart like a book, and you exploited every page',
      'Even so, I walked away proud that I stayed genuinely human through it all',
    ],
  },
  {
    title: 'इंतज़ार का अंत',
    titleEnglish: 'Done Waiting',
    linesHindi: [
      'बंद दरवाज़ों के बाहर खड़े रहकर उम्र नहीं गँवानी चाहिए कभी',
      'जहाँ क़दर न हो, वहाँ से वक़्त रहते मुड़ जाना ही अक़्लमंदी है',
    ],
    linesHinglish: [
      'Band darwaazon ke baahar khade rehkar umr nahin ganwaani chahiye kabhi',
      'Jahaan qadr na ho, wahaan se waqt rehte mud jaana hi aqlmandi hai',
    ],
    linesEnglish: [
      'You should never spend years knocking outside a locked door',
      'Turning around while you still have your dignity is true wisdom',
    ],
  },
  {
    title: 'दिल का नया सवेरा',
    titleEnglish: 'Fresh Morning Inside',
    linesHindi: [
      'पुराने ज़ख़्मों को रोज़ कुरेदने से कोई फ़ायदा नहीं मिलता अब',
      'बीता हुआ धोखा पीछे छोड़कर मैं नए सवेरे की ओर चल पड़ा हूँ',
    ],
    linesHinglish: [
      'Purane zakhmon ko roz kuredne se koi faayda nahin milta ab',
      'Beeta hua dhokha peechhe chhodkar main naye sawere ki or chal pada hoon',
    ],
    linesEnglish: [
      'Reopening old bruises every evening heals nothing at all',
      'Leaving past deceit behind, I am stepping straight toward a fresh morning',
    ],
  },
  {
    title: 'अजनबी शहर में सुकून',
    titleEnglish: 'Peace Without You',
    linesHindi: [
      'तुम्हारे बिना भी सूरज ठीक अपने वक़्त पर उगता है हर रोज़',
      'दुनिया किसी एक बेवफ़ा के रुकने से कभी थमा नहीं करती',
    ],
    linesHinglish: [
      'Tumhaare bina bhi sooraj theek apne waqt par ugta hai har roz',
      'Duniya kisi ek bewafa ke rukne se kabhi thama nahin karti',
    ],
    linesEnglish: [
      'Even without you around, the sun still rises right on schedule every day',
      'Life never pauses for one person who decided not to stay true',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'दिल की सलामती सबसे पहले',
    titleEnglish: 'Mental Peace First',
    linesHindi: [
      'अब कोई भी रिश्ता मेरी नींद और सुकून से महँगा नहीं हो सकता',
      'जहाँ वफ़ा में शक हो, वहाँ से दूर रहना ही मेरी पहली पसंद है',
    ],
    linesHinglish: [
      'Ab koi bhi rishta meri neend aur sukoon se mehanga nahin ho sakta',
      'Jahaan wafa mein shaq ho, wahaan se door rehna hi meri pehli pasand hai',
    ],
    linesEnglish: [
      'No bond will ever cost more than my sleep and peace of mind again',
      'Whenever loyalty feels questionable, walking away is my first choice',
    ],
  },
  {
    title: 'ख़ुद से सच्चाई',
    titleEnglish: 'Honest With Myself',
    linesHindi: [
      'दूसरों को दोष देने से ज़्यादा आसान है अपनी ग़लती स्वीकार करना',
      'मेरी ग़लती बस ग़लत इंसान पर हक़ जताने की थी, और कुछ नहीं',
    ],
    linesHinglish: [
      'Doosron ko dosh dene se zyada aasaan hai apni galti sweekaar karna',
      'Meri galti bas galat insaan par haq jataane ki thi, aur kuch nahin',
    ],
    linesEnglish: [
      'Accepting my own share is far cleaner than trading endless blame',
      'My only mistake was expecting loyalty from the wrong person, nothing else',
    ],
  },
  {
    title: 'मासूम दिल का सबक़',
    titleEnglish: 'Guarded Kindness',
    linesHindi: [
      'साफ़ पानी की तरह रहना अच्छा है पर गंदले तालाब से दूर रहो',
      'ज़्यादातर दिल तब टूटते हैं जब हम पत्थर से नर्मी की उम्मीद करें',
    ],
    linesHinglish: [
      'Saaf paani ki tarah rehna accha hai par gandle taalaab se door raho',
      'Zyaadatar dil tab toot-te hain jab hum patthar se narmi ki ummeed karein',
    ],
    linesEnglish: [
      'Staying pure like clear water is wonderful—just stay out of muddy ponds',
      'Hearts break mostly when we expect tenderness out of cold stone',
    ],
  },
  {
    title: 'ख़ुशी का नया पता',
    titleEnglish: 'New Address for Joy',
    linesHindi: [
      'तुम्हारी बेवफ़ाई ने मुझे एक बहुत बड़ा तोहफ़ा दिया अनजाने में',
      'मैंने ख़ुश रहने के लिए किसी दूसरे का इंतज़ार करना छोड़ दिया',
    ],
    linesHinglish: [
      'Tumhaari bewafaai ne mujhe ek bahut bada tohfa diya anjaane mein',
      'Maine khush rehne ke liye kisi doosre ka intezaar karna chhod diya',
    ],
    linesEnglish: [
      'Without even meaning to, your betrayal gave me a priceless gift',
      'I stopped waiting for somebody else’s permission to feel happy again',
    ],
  },
  {
    title: 'आख़िरी पन्ना बंद',
    titleEnglish: 'Closing the Final Page',
    linesHindi: [
      'कुछ किताबें अधूरी छोड़ देना ही बेहतर होता है पाठक के लिए',
      'क्योंकि आगे के पन्नों में भी सिर्फ़ वही पुराना झूठ लिखा होता है',
    ],
    linesHinglish: [
      'Kuch kitaabein adhoori chhod dena hi behtar hota hai paathak ke liye',
      'Kyonki aage ke pannon mein bhi sirf wahi purana jhooth likha hota hai',
    ],
    linesEnglish: [
      'Some books are better left unfinished for your own sanity',
      'Because the remaining chapters only repeat the same old lie',
    ],
  },
  {
    title: 'पत्थर नहीं, हीरा',
    titleEnglish: 'Refined by Pressure',
    linesHindi: [
      'धोखे की आँच ने मुझे तोड़ा नहीं, बल्कि कुंदन सा निखार दिया',
      'अब मेरे चेहरे पर पुरानी मायूसी नहीं, नया आत्मविश्वास चमकता है',
    ],
    linesHinglish: [
      'Dhokhe ki aanch ne mujhe toda nahin, balki kundan sa nikhaar diya',
      'Ab mere chehre par purani maayoosi nahin, naya aatmvishwas chamakta hai',
    ],
    linesEnglish: [
      'The heat of deceit did not ruin me—it refined me like pure gold',
      'Not old sadness, only steady self-assurance shines on my face now',
    ],
  },
  {
    title: 'अनसुनी कहानी',
    titleEnglish: 'Quiet Closure',
    linesHindi: [
      'दुनिया को सुनाने के लिए मेरे पास कोई लंबी शिकायत नहीं है',
      'जिसने दिल दुखाया वो ख़ुश रहे, और मैं अपने रास्ते पर ख़ुश हूँ',
    ],
    linesHinglish: [
      'Duniya ko sunaane ke liye mere paas koi lambi shikaayat nahin hai',
      'Jisne dil dukhaaya wo khush rahe, aur main apne raaste par khush hoon',
    ],
    linesEnglish: [
      'I carry no dramatic speech to perform for onlookers',
      'May whoever hurt me find peace, and I am content on my own road ahead',
    ],
  },
  {
    title: 'क़ीमत मेरे सब्र की',
    titleEnglish: 'Value of My Patience',
    linesHindi: [
      'तुमने मेरे सब्र का इम्तिहान हद से ज़्यादा ले लिया था यार',
      'जिस दिन बांध टूटा, उस दिन फिर पलटकर देखने की गुंजाइश न बची',
    ],
    linesHinglish: [
      'Tumne mere sabr ka imtihaan had se zyada le liya tha yaar',
      'Jis din baandh toota, us din phir palatkar dekhne ki gunjaaish na bachi',
    ],
    linesEnglish: [
      'You pushed my patience far past every reasonable limit',
      'The day the dam finally gave way, there was zero room left to look back',
    ],
  },
  {
    title: 'वफ़ा का मान',
    titleEnglish: 'Honoring Loyalty',
    linesHindi: [
      'जहाँ ईमानदारी को बेवकूफ़ी समझा जाने लगे एक दिन आकर',
      'वहाँ से अपना सामान समेटकर निकल लेना ही सबसे सही फ़ैसला है',
    ],
    linesHinglish: [
      'Jahaan imaandaari ko bewakoofi samjha jaane lage ek din aakar',
      'Wahaan se apna saamaan sametkar nikal lena hi sabse sahi faisla hai',
    ],
    linesEnglish: [
      'The moment sincerity gets mocked as foolishness inside a room',
      'Packing your peace and walking out is the smartest choice you can make',
    ],
  },
  {
    title: 'सुकून भरा अंत',
    titleEnglish: 'Peaceful Ending',
    linesHindi: [
      'तुम्हारी बेवफ़ाई भी मेरी ज़िंदगी की सबसे बड़ी सफ़ाई बन गई',
      'एक झटके में सारे झूठे वादे और नक़ली लोग दूर हो गए मुझसे',
    ],
    linesHinglish: [
      'Tumhaari bewafaai bhi meri zindagi ki sabse badi safaai ban gayi',
      'Ek jhatke mein saare jhoothe waade aur naqli log door ho gaye mujhse',
    ],
    linesEnglish: [
      'Even your betrayal ended up acting like a deep spring cleaning for my life',
      'In one clean sweep, every hollow vow and fake face cleared out of my world',
    ],
  },
];

export const UNIQUE_BEWAFA_170 = buildUniqueShayaris(
  'bewafa',
  'Bewafa Shayari (बेवफ़ा शायरी)',
  '🥀',
  31,
  BEWAFA_ENTRIES
);
