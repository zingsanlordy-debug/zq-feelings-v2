import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const GIRLS_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'नज़ाकत और ताक़त का संगम',
    titleEnglish: 'Grace Paired With Fire',
    linesHindi: [
      'फूलों सी कोमल ज़रूर हैं पर कमज़ोर मत समझना कभी',
      'वक़्त आने पर चट्टानों से भी टकराना जानती हैं लड़कियाँ',
    ],
    linesHinglish: [
      'Phoolon si komal zaroor hain par kamzor mat samajhna kabhi',
      'Waqt aane par chattanon se bhi takraana jaanti hain ladkiyan',
    ],
    linesEnglish: [
      'Soft like fresh blossoms yet never mistake that for fragile',
      'When moments demand, girls stand firm against solid rock',
    ],
  },
  {
    title: 'अपनी शर्तों की रानी',
    titleEnglish: 'Queen of Her Own Path',
    linesHindi: [
      'किसी के दिए ताज का इंतज़ार नहीं करतीं आज की लड़कियाँ',
      'अपनी मेहनत और मुस्कान से खुद अपनी पहचान बनाती हैं',
    ],
    linesHinglish: [
      'Kisi ke diye taaj ka intezaar nahin karteen aaj ki ladkiyan',
      'Apni mehnat aur muskaan se khud apni pehchaan banaati hain',
    ],
    linesEnglish: [
      'Todays women never wait around to be handed a crown',
      'They build their own legacy through brilliance and grace',
    ],
  },
  {
    title: 'आत्मसम्मान सबसे ऊपर',
    titleEnglish: 'Dignity Non-Negotiable',
    linesHindi: [
      'दिल से रिश्ता निभाएँ तो पूरी दुनिया वार देती हैं',
      'पर आत्मसम्मान पर बात आए तो पलटकर भी नहीं देखतीं',
    ],
    linesHinglish: [
      'Dil se rishta nibhaayein to poori duniya waar deti hain',
      'Par aatmasammaan par baat aaye to palatkar bhi nahin dekhteen',
    ],
    linesEnglish: [
      'When loving earnestly, girls pour out their whole world',
      'Touch their self-respect once, and they walk clean without looking back',
    ],
  },
  {
    title: 'मुस्कान में छुपा हौसला',
    titleEnglish: 'Strength Inside Her Smile',
    linesHindi: [
      'चेहरे की प्यारी मुस्कान में सौ तूफ़ान संभाले रखती हैं',
      'हर हाल में मुस्कुराना लड़कियों का सबसे बड़ा हुनर है',
    ],
    linesHinglish: [
      'Chehre ki pyaari muskaan mein sau toofaan sanbhaale rakhteen hain',
      'Har haal mein muskurana ladkiyon ka sabse bada hunar hai',
    ],
    linesEnglish: [
      'Holding back a hundred silent storms behind one radiant smile',
      'Staying graceful under pressure is a womans quiet art',
    ],
  },
  {
    title: 'सपनों के पंख',
    titleEnglish: 'Wings Unclipped',
    linesHindi: [
      'रसोई से लेकर आसमान की उड़ान तक हर जगह काबिल हैं',
      'ज़रा पंख खोलकर देखो, हर मंच इन्हीं के नाम है',
    ],
    linesHinglish: [
      'Rasoi se lekar aasmaan ki udaan tak har jagah qaabil hain',
      'Zara pankh kholkar dekho, har manch inhi ke naam hai',
    ],
    linesEnglish: [
      'From warm family tables all the way to soaring skyward',
      'Give them open space, and every stage shines brighter',
    ],
  },
  {
    title: 'दो टूक सलीक़ा',
    titleEnglish: 'Polite Yet Firm',
    linesHindi: [
      'मीठा बोलना हमारी तहज़ीब का हिस्सा है हमेशा से',
      'पर बेअदबी करने वालों को आइना दिखाना भी आता है',
    ],
    linesHinglish: [
      'Meetha bolna hamaari tehzeeb ka hissa hai hamesha se',
      'Par beadabi karne waalon ko aaina dikhana bhi aata hai',
    ],
    linesEnglish: [
      'Graceful speech reflects the elegance I choose to carry',
      'Yet disrespect still gets handed an honest mirror instantly',
    ],
  },
  {
    title: 'खुद से मोहब्बत',
    titleEnglish: 'Self-Love Era',
    linesHindi: [
      'दूसरों को सँवारते-सँवारते अब खुद को चुनना सीख लिया है',
      'अपनी ख़ुशी और शांति का ख़याल रखना सबसे ज़रूरी है',
    ],
    linesHinglish: [
      'Doosron ko sanwaarte-sanwaarte ab khud ko chunna seekh liya hai',
      'Apni khushi aur shaanti ka khayaal rakhna sabse zaroori hai',
    ],
    linesEnglish: [
      'After endlessly tending everyone else, she learned to choose herself',
      'Guarding her own joy and peace stands sacred now',
    ],
  },
  {
    title: 'बेटी नहीं, शान हैं',
    titleEnglish: 'Pride of the Home',
    linesHindi: [
      'पापा का गर्व और माँ की सबसे प्यारी सहेली होती हैं',
      'बेटियाँ सिर्फ़ घर की रौनक नहीं, पूरा हौसला होती हैं',
    ],
    linesHinglish: [
      'Papa ka garv aur maa ki sabse pyaari saheli hoti hain',
      'Betiyan sirf ghar ki raunak nahin, poora hausla hoti hain',
    ],
    linesEnglish: [
      'Fathers proudest strength and mothers closest confidante',
      'Daughters do not just decorate homes—they anchor them',
    ],
  },
  {
    title: 'काजल जैसी गहरी निगाह',
    titleEnglish: 'Sharp Eyes, Kind Heart',
    linesHindi: [
      'आँखों में काजल और दिल में बड़े ख्वाब सजाती हैं लड़कियाँ',
      'भीड़ से अलग अपनी राह खुद बनाना जानती हैं लड़कियाँ',
    ],
    linesHinglish: [
      'Aankhon mein kaajal aur dil mein bade khwaab sajaati hain ladkiyan',
      'Bheed se alag apni raah khud banaana jaanti hain ladkiyan',
    ],
    linesEnglish: [
      'Kohl-lined eyes holding visions wide as the horizon',
      'Girls know well how to step out and lead their own path',
    ],
  },
  {
    title: 'आलोचना से बेपरवाह',
    titleEnglish: 'Unbothered by Gossip',
    linesHindi: [
      'चार लोग क्या कहेंगे, इस डर को अब अलविदा कह दिया',
      'जो मन को सही लगे, बस उसी रास्ते पर चल दिया',
    ],
    linesHinglish: [
      'Chaar log kya kahenge, is dar ko ab alvida keh diya',
      'Jo man ko sahi lage, bas usi raaste par chal diya',
    ],
    linesEnglish: [
      'She waved goodbye to worrying over idle neighborhood talk',
      'Stepping boldly wherever conscience and purpose lead',
    ],
  },
  {
    title: 'सहेलियों की महफ़िल',
    titleEnglish: 'Sisterhood Joy',
    linesHindi: [
      'दुनिया की सारी चिंताएँ गायब हो जाती हैं पल में',
      'जब दो-चार सहेलियाँ बैठकर दिल खोलकर हँसती हैं',
    ],
    linesHinglish: [
      'Duniya ki saari chintaayein gaayab ho jaati hain pal mein',
      'Jab do-chaar saheliyan baithkar dil kholkar hansti hain',
    ],
    linesEnglish: [
      'Every heavy thought vanishes within seconds when',
      'Close girlfriends sit together laughing until eyes water',
    ],
  },
  {
    title: 'सादगी का जादू',
    titleEnglish: 'Simplicity Wins',
    linesHindi: [
      'सोलह श्रृंगार की ज़रूरत हर वक़्त नहीं पड़ती हमें',
      'माथे पर एक छोटी सी बिंदी भी पूरा निखार ले आती है',
    ],
    linesHinglish: [
      'Solah shringaar ki zaroorat har waqt nahin padti humein',
      'Maathe par ek chhoti si bindi bhi poora nikhaar le aati hai',
    ],
    linesEnglish: [
      'No heavy sparkle is ever required to look unforgettable',
      'Even one tiny bindi paired with pure confidence glows bright',
    ],
  },
  {
    title: 'ख़ुद पर निर्भर',
    titleEnglish: 'Independent Wings',
    linesHindi: [
      'किसी की बटुए की मोहताज नहीं हैं आज की बेटियाँ',
      'मेहनत करके अपनी दुनिया खुद सजाना पसंद करती हैं',
    ],
    linesHinglish: [
      'Kisi ke batue ki mohtaaj nahin hain aaj ki betiyan',
      'Mehnat karke apni duniya khud sajaana pasand karti hain',
    ],
    linesEnglish: [
      'Todays daughters never wait for anyone elses wallet',
      'They love building and funding their own bright worlds',
    ],
  },
  {
    title: 'झूठ से दूरी',
    titleEnglish: 'Zero Patience for Games',
    linesHindi: [
      'दिखावे की तारीफ़ों में पिघलने वाली नहीं हूँ मैं',
      'मुझे सच्चा साथ और साफ़ नीयत ही पसंद आती है',
    ],
    linesHinglish: [
      'Dikhawe ki taareefon mein pighalne waali nahin hoon main',
      'Mujhe saccha saath aur saaf neeyat hi pasand aati hai',
    ],
    linesEnglish: [
      'I never melt easily over rehearsed flattery',
      'Only genuine loyalty and clear intentions earn my trust',
    ],
  },
  {
    title: 'हर भूमिका में अव्वल',
    titleEnglish: 'Grace in Every Role',
    linesHindi: [
      'पढ़ाई हो, दफ़्तर हो या घर की प्यारी ज़िम्मेदारी',
      'हर जगह अपना सौ प्रतिशत देना इनकी खूबी है',
    ],
    linesHinglish: [
      'Padhai ho, daftar ho ya ghar ki pyaari zimmedari',
      'Har jagah apna sau pratishat dena inki khoobi hai',
    ],
    linesEnglish: [
      'Classrooms, boardrooms, or warm family responsibilities',
      'Pouring wholehearted brilliance into every space shines natural',
    ],
  },
  {
    title: 'नज़र में ठहराव',
    titleEnglish: 'Poised Confidence',
    linesHindi: [
      'शोर मचाने की आदत नहीं होती समझदार लड़कियों को',
      'उनकी मुस्कान और कामयाबी खुद कहानी कह देती है',
    ],
    linesHinglish: [
      'Shor machaane ki aadat nahin hoti samajhdaar ladkiyon ko',
      'Unki muskaan aur kaamyaabi khud kahaani keh deti hai',
    ],
    linesEnglish: [
      'Wise women rarely waste breath chasing loud applause',
      'Their calm poise and milestones tell the entire story',
    ],
  },
  {
    title: 'साहस की मूरत',
    titleEnglish: 'Fearless Heart',
    linesHindi: [
      'अँधेरी सड़कों से डरकर घर बैठना अब पुराना हुआ',
      'हौसलों की रोशनी लेकर खुद राह बनाती हैं लड़कियाँ',
    ],
    linesHinglish: [
      'Andheri sadkon se darkar ghar baithna ab purana hua',
      'Hauslon ki roshni lekar khud raah banaati hain ladkiyan',
    ],
    linesEnglish: [
      'Staying locked indoors out of fear belongs to the past',
      'Girls step out carrying bright resolve and carve clear paths',
    ],
  },
  {
    title: 'दिल की सुनना',
    titleEnglish: 'Trusting Intuition',
    linesHindi: [
      'हर बात दूसरों से पूछकर तय करना ज़रूरी नहीं',
      'लड़कियों का अपना एहसास ही सबसे सही दिशा दिखाता है',
    ],
    linesHinglish: [
      'Har baat doosron se poochhkar tay karna zaroori nahin',
      'Ladkiyon ka apna ehsaas hi sabse sahi disha dikhata hai',
    ],
    linesEnglish: [
      'Permission from spectators is never needed for every move',
      'Her own sharp intuition already knows the truest course',
    ],
  },
  {
    title: 'सच्ची दोस्ती की कद्र',
    titleEnglish: 'Fierce Best Friend',
    linesHindi: [
      'बुरे वक़्त में किसी लड़की को दोस्त बनाकर देखो कभी',
      'अपनो की तरह हर मुश्किल में तुम्हारे साथ खड़ी मिलेगी',
    ],
    linesHinglish: [
      'Bure waqt mein kisi ladki ko dost banaakar dekho kabhi',
      'Apnon ki tarah har mushkil mein tumhaare saath khadi milegi',
    ],
    linesEnglish: [
      'Have a loyal female friend beside you during stormy seasons',
      'She will guard your corner fiercely just like family',
    ],
  },
  {
    title: 'खिलती हुई ज़िंदगी',
    titleEnglish: 'Blooming Boldly',
    linesHindi: [
      'काँटों के बीच रहकर भी गुलाब महकना नहीं छोड़ता',
      'वैसे ही हर हाल में मुस्कुराती और खिलती हैं लड़कियाँ',
    ],
    linesHinglish: [
      'Kaanton ke beech rehkar bhi gulaab mehakna nahin chhodta',
      'Waise hi har haal mein muskurati aur khilti hain ladkiyan',
    ],
    linesEnglish: [
      'Surrounded by sharp thorns, a rose never quits blooming',
      'Through every season, girls find ways to shine anyway',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'क़ाबिलियत की पहचान',
    titleEnglish: 'Defined by Talent',
    linesHindi: [
      'शक्ल से ज़्यादा अक़्ल और हुनर पर नाज़ करती हूँ मैं',
      'सूरत तो वक़्त की चीज़ है, काबिलियत हमेशा रहती है',
    ],
    linesHinglish: [
      'Shakl se zyada aql aur hunar par naaz karti hoon main',
      'Soorat to waqt ki cheez hai, qaabiliyat hamesha rehti hai',
    ],
    linesEnglish: [
      'I take far deeper pride in sharp mind and skill than mirrors',
      'Looks shift with passing years, yet brilliance endures forever',
    ],
  },
  {
    title: 'ख़ामोशी में गहराई',
    titleEnglish: 'Depth Inside Quiet',
    linesHindi: [
      'मेरी शराफ़त और नरमी का कभी गलत फायदा मत उठाना',
      'चुप रहना जानती हूँ तो साफ़ जवाब देना भी आता है',
    ],
    linesHinglish: [
      'Meri sharaafat aur narmi ka kabhi galat faayda mat uthana',
      'Chup rehna jaanti hoon to saaf jawaab dena bhi aata hai',
    ],
    linesEnglish: [
      'Never mistake my gentle manners for an open door to cross',
      'Knowing when to smile quietly also means knowing how to draw lines',
    ],
  },
  {
    title: 'अकेले सफ़र का आत्मविश्वास',
    titleEnglish: 'Solo Traveler Spirit',
    linesHindi: [
      'अब कहीं जाने के लिए किसी के साथ का इंतज़ार नहीं करती',
      'बैग उठाती हूँ और अकेले ही नई दुनिया देख आती हूँ',
    ],
    linesHinglish: [
      'Ab kahin jaane ke liye kisi ke saath ka intezaar nahin karti',
      'Bag uthaati hoon aur akele hi nayi duniya dekh aati hoon',
    ],
    linesEnglish: [
      'I stopped waiting for matching schedules before seeing the world',
      'I pack my own bag and go discover new horizons solo',
    ],
  },
  {
    title: 'चाय और किताबों की दोस्त',
    titleEnglish: 'Peace in Quiet Corners',
    linesHindi: [
      'फ़ालतू दिखावे की पार्टियों से ज़्यादा प्यारा लगता है मुझे',
      'शाम की हल्की बारिश, किताब और एक कप अदरक चाय',
    ],
    linesHinglish: [
      'Faaltu dikhawe ki partiyon se zyada pyaara lagta hai mujhe',
      'Shaam ki halki baarish, kitaab aur ek cup adrak chai',
    ],
    linesEnglish: [
      'Far dearer to me than noisy, superficial parties',
      'Is gentle evening rain, a thoughtful book, and warm ginger tea',
    ],
  },
  {
    title: 'ग़म से उबरने की ताक़त',
    titleEnglish: 'Resilient Queen',
    linesHindi: [
      'दिल टूटे भी तो दो दिन आँसू बहाकर सँभल जाती हैं',
      'फिर लिपस्टिक लगाकर नई जंग जीतने निकल पड़ती हैं',
    ],
    linesHinglish: [
      'Dil toote bhi to do din aansu bahaakar sanbhal jaati hain',
      'Phir muskuraakar nayi jang jeetne nikal padti hain',
    ],
    linesEnglish: [
      'Even after heartbreak, she weeps honestly and stands back up',
      'Adjusts her grace and steps out to conquer brand new goals',
    ],
  },
  {
    title: 'बेबाक आवाज़',
    titleEnglish: 'Unapologetic Voice',
    linesHindi: [
      'ग़लत के सामने चुप रहना हमें सिखाया ही नहीं गया',
      'हक़ की बात हमेशा साफ़ और निडर होकर कहती हैं लड़कियाँ',
    ],
    linesHinglish: [
      'Galat ke saamne chup rehna humein sikhaya hi nahin gaya',
      'Haq ki baat hamesha saaf aur nidar hokar kehti hain ladkiyan',
    ],
    linesEnglish: [
      'Staying quiet before unfairness was never part of our raising',
      'Girls speak truth clearly without shrinking an inch',
    ],
  },
  {
    title: 'प्यारा सा बचपन अंदर',
    titleEnglish: 'Playful Spark Alive',
    linesHindi: [
      'दफ़्तर में चाहे कितनी ही गंभीर मीटिंग संभाल लें दिन में',
      'गोलगप्पे देखते ही बचपन वाली खुशी चेहरे पर आ जाती है',
    ],
    linesHinglish: [
      'Daftar mein chaahe kitni bhi gambheer meeting sanbhaal lein din mein',
      'Golgappe dekhte hi bachpan waali khushi chehre par aa jaati hai',
    ],
    linesEnglish: [
      'No matter how sharp she leads serious boardrooms all day',
      'Spotting street snacks still lights up childhood delight',
    ],
  },
  {
    title: 'अपने पैरों पर गर्व',
    titleEnglish: 'Self-Made Pride',
    linesHindi: [
      'अपने कमाए पैसों से खरीदा छोटा सा तोहफ़ा भी',
      'दुनिया के सबसे महँगे हीरे से ज़्यादा सुकून देता है',
    ],
    linesHinglish: [
      'Apne kamaaye paison se khareeda chhota sa tohfa bhi',
      'Duniya ke sabse mehngay heere se zyada sukoon deta hai',
    ],
    linesEnglish: [
      'Even a modest treat bought straight from her own paycheck',
      'Brings sweeter joy than any gifted diamond ring',
    ],
  },
  {
    title: 'तुलना से आज़ाद',
    titleEnglish: 'Unique Beauty',
    linesHindi: [
      'हर लड़की अपने आप में अनोखी और खूबसूरत होती है',
      'किसी और की नक़ल बनकर अपनी चमक कम मत करना कभी',
    ],
    linesHinglish: [
      'Har ladki apne aap mein anokhi aur khoobsurat hoti hai',
      'Kisi aur ki naqal bankar apni chamak kam mat karna kabhi',
    ],
    linesEnglish: [
      'Every girl shines with a grace uniquely tailored to her soul',
      'Never dim your own light chasing someone elses mold',
    ],
  },
  {
    title: 'माँ जैसी हिम्मत',
    titleEnglish: 'Inherited Strength',
    linesHindi: [
      'माँ से सीखा है बिना थके सबको संभालकर चलना',
      'और पापा से सीखा है हर मुश्किल में सिर ऊँचा रखना',
    ],
    linesHinglish: [
      'Maa se seekha hai bina thake sabko sanbhaalkar chalna',
      'Aur papa se seekha hai har mushkil mein sir ooncha rakhna',
    ],
    linesEnglish: [
      'From mom she learned tireless warmth that holds homes whole',
      'From dad she learned keeping her chin tall through every gale',
    ],
  },
  {
    title: 'दोस्त जैसी बहन',
    titleEnglish: 'Bond of Sisters',
    linesHindi: [
      'कपड़ों पर झगड़ा हो या आधी रात की सीक्रेट बातें',
      'सहेली और बहन के बिना हर लड़की की कहानी अधूरी है',
    ],
    linesHinglish: [
      'Kapdon par jhagda ho ya aadhi raat ki secret baatein',
      'Saheli aur behen ke bina har ladki ki kahaani adhoori hai',
    ],
    linesEnglish: [
      'Borrowing outfits without asking or whispering midnight secrets',
      'Every womans story glows richer with sisters beside her',
    ],
  },
  {
    title: 'दिल साफ, इरादे पक्के',
    titleEnglish: 'Kind Yet Unstoppable',
    linesHindi: [
      'प्यार से बात करोगे तो हर मुस्कान तुम्हारे नाम कर देंगी',
      'पर बराबरी के हक़ से कभी समझौता नहीं करेंगी लड़कियाँ',
    ],
    linesHinglish: [
      'Pyaar se baat karoge to har muskaan tumhaare naam kar dengi',
      'Par baraabari ke haq se kabhi samjhauta nahin karengi ladkiyan',
    ],
    linesEnglish: [
      'Treat her with genuine kindness and she brightens your world',
      'Ask her to accept less than equal honor, and the answer stays no',
    ],
  },
  {
    title: 'सपनों से समझौता नहीं',
    titleEnglish: 'Dreams Stay Non-Negotiable',
    linesHindi: [
      'शादी या उम्र के तानों से अपने ख्वाब मत रोकना कभी',
      'तुम्हारी उड़ान सिर्फ़ तुम्हारे हौसले की मोहताज है',
    ],
    linesHinglish: [
      'Shaadi ya umar ke taanon se apne khwaab mat rokna kabhi',
      'Tumhaari udaan sirf tumhaare hausle ki mohtaaj hai',
    ],
    linesEnglish: [
      'Never fold up your goals to satisfy arbitrary timelines',
      'How high you fly depends solely upon your own nerve',
    ],
  },
  {
    title: 'शालीन तेवर',
    titleEnglish: 'Classy Composure',
    linesHindi: [
      'ग़ुस्सा आने पर चीख़ने की ज़रूरत नहीं पड़ती हमें',
      'एक शांत ख़ामोशी ही सामने वाले को सब समझा देती है',
    ],
    linesHinglish: [
      'Gussa aane par cheekhne ki zaroorat nahin padti humein',
      'Ek shaant khaamoshi hi saamne waale ko sab samjha deti hai',
    ],
    linesEnglish: [
      'Real class never needs shouting when patience gets tested',
      'One calm, steady silence communicates everything effortlessly',
    ],
  },
  {
    title: 'मेहनत से सजा कल',
    titleEnglish: 'Earning Her Crown',
    linesHindi: [
      'बिना किसी सिफ़ारिश के अपने दम पर जगह बनाई है मैंने',
      'तभी तो मेरी हर छोटी जीत का मज़ा दोगुना लगता है',
    ],
    linesHinglish: [
      'Bina kisi sifaarish ke apne dam par jagah banaai hai maine',
      'Tabhi to meri har chhoti jeet ka maza doguna lagta hai',
    ],
    linesEnglish: [
      'I carved out every seat at the table strictly on my own',
      'Which makes even small victories taste twice as sweet',
    ],
  },
  {
    title: 'असली खूबसूरती',
    titleEnglish: 'Beauty in Kindness',
    linesHindi: [
      'आईने से ज़्यादा खूबसूरत इंसान का व्यवहार होता है',
      'सच्ची दया और आत्मविश्वास हर चेहरे को चमका देता है',
    ],
    linesHinglish: [
      'Aaine se zyada khoobsurat insaan ka vyavahaar hota hai',
      'Sacchi daya aur aatmavishwaas har chehre ko chamka deta hai',
    ],
    linesEnglish: [
      'Graceful warmth outshines every reflection in the mirror',
      'Kindness paired with steady confidence lights up every face',
    ],
  },
  {
    title: 'आजाद ख्याल',
    titleEnglish: 'Free-Spirited Soul',
    linesHindi: [
      'बंद खिड़कियों में दम घुटता है मेरे सपनों का अक्सर',
      'मुझे खुली हवा और बड़े आसमान से प्यार है बहुत',
    ],
    linesHinglish: [
      'Band khidkiyon mein dam ghutta hai mere sapnon ka aksar',
      'Mujhe khuli hawa aur bade aasmaan se pyaar hai bahut',
    ],
    linesEnglish: [
      'Locked shutters always feel too small for my aspirations',
      'My heart belongs to fresh wind and wide-open skies',
    ],
  },
  {
    title: 'बिन बोले समझ',
    titleEnglish: 'Quiet Empathy',
    linesHindi: [
      'दूसरों की आँखों की अनकही उदासी भी पढ़ लेती हैं ये',
      'तभी तो लड़कियाँ हर घर की सबसे प्यारी मरहम होती हैं',
    ],
    linesHinglish: [
      'Doosron ki aankhon ki ankahi udaasi bhi padh leti hain ye',
      'Tabhi to ladkiyan har ghar ki sabse pyaari marham hoti hain',
    ],
    linesEnglish: [
      'Sensing quiet sorrow hidden behind someone elses smile',
      'Makes daughters and sisters the gentlest balm at home',
    ],
  },
  {
    title: 'मुस्कान ही पहचान',
    titleEnglish: 'Signature Smile',
    linesHindi: [
      'महँगे गहने पहनकर भी कई चेहरे फीके रह जाते हैं',
      'और एक सच्ची मुस्कान हमें सबसे ख़ास बना देती है',
    ],
    linesHinglish: [
      'Mehngay gehne pehenkar bhi kai chehre feeke reh jaate hain',
      'Aur ek sacchi muskaan humein sabse khaas bana deti hai',
    ],
    linesEnglish: [
      'Even weighed down with gold, cold faces feel dim',
      'One genuine smile turns simple grace completely unforgettable',
    ],
  },
  {
    title: 'नए युग की आवाज़',
    titleEnglish: 'Voice of Tomorrow',
    linesHindi: [
      'अब कहानी के पीछे नहीं, मुख्य किरदार में खड़ी हैं लड़कियाँ',
      'हर क्षेत्र में अपने नाम का परचम लहरा रही हैं आज',
    ],
    linesHinglish: [
      'Ab kahaani ke peeche nahin, mukhya kirdaar mein khadi hain ladkiyan',
      'Har kshetra mein apne naam ka parcham lehra rahi hain aaj',
    ],
    linesEnglish: [
      'No longer waiting quietly in the margins of the story',
      'Women stand squarely center stage leading every field today',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'दिल की अमीरी',
    titleEnglish: 'Rich Inside',
    linesHindi: [
      'रिश्तों को पैसों से तौलने की आदत नहीं होती इनकी',
      'प्यार और सम्मान के दो बोल ही दिल जीत लेते हैं',
    ],
    linesHinglish: [
      'Rishton ko paison se taulne ki aadat nahin hoti inki',
      'Pyaar aur sammaan ke do bol hi dil jeet lete hain',
    ],
    linesEnglish: [
      'True hearts never weigh affection against price tags',
      'Two sincere words of care and respect mean everything',
    ],
  },
  {
    title: 'अपने रास्ते ख़ुद गढ़ती लड़की',
    titleEnglish: 'Steady Self-Faith',
    linesHindi: [
      'कोई साथ चले न चले, मैं अपने रास्ते खुद बना लूँगी',
      'अपने छोटे-छोटे सपनों को बड़ा मैं खुद ही कर लूँगी',
    ],
    linesHinglish: [
      'Koi saath chale na chale, main apna raasta khud bana loongi',
      'Apne chhote-chhote sapnon ko bada main khud hi kar loongi',
    ],
    linesEnglish: [
      'Whether anyone walks beside me or steps aside',
      'I carry enough heart to turn small wishes into tall reality',
    ],
  },
  {
    title: 'सच्चा तेवर',
    titleEnglish: 'Quiet Edge',
    linesHindi: [
      'हर किसी को अच्छा लगने की कोशिश छोड़ दी है मैंने',
      'जो मेरी सच्चाई पसंद करे, बस वही अपने पास रहे',
    ],
    linesHinglish: [
      'Har kisi ko accha lagne ki koshish chhod di hai maine',
      'Jo meri sacchai pasand kare, bas wahi apne paas rahe',
    ],
    linesEnglish: [
      'I retired from bending myself to please every spectator',
      'Those who value my honest self are the ones who stay',
    ],
  },
  {
    title: 'मासूमियत और समझदारी',
    titleEnglish: 'Innocent Yet Sharp',
    linesHindi: [
      'दिल से मासूम हैं पर दुनिया की समझ पूरी रखती हैं',
      'कब झुकना है और कब डट जाना है, बख़ूबी जानती हैं',
    ],
    linesHinglish: [
      'Dil se maasoom hain par duniya ki samajh poori rakhti hain',
      'Kab jhukna hai aur kab dat jaana hai, bakhoobi jaanti hain',
    ],
    linesEnglish: [
      'Pure at heart while sharp enough to read every room clearly',
      'Knowing well when to bend gently and when to stand unmoved',
    ],
  },
  {
    title: 'मज़बूत इरादे',
    titleEnglish: 'Unshaken Dreams',
    linesHindi: [
      'रास्ते में आई रुकावटें सिर्फ़ मेरी रफ़्तार जाँचती हैं',
      'मंज़िल से पीछे हटना कभी सीखा ही नहीं मैंने',
    ],
    linesHinglish: [
      'Raaste mein aayi rukaawatein sirf meri raftaar jaanchti hain',
      'Manzil se peeche hatna kabhi seekha hi nahin maine',
    ],
    linesEnglish: [
      'Hurdles along the road only test how steady my pace holds',
      'Backing down short of my goal was never an option learned',
    ],
  },
  {
    title: 'धूप में भी खिलना',
    titleEnglish: 'Blooming in Heat',
    linesHindi: [
      'कठिन हालातों की धूप मुझे मुरझा नहीं सकती दोस्त',
      'मैं हर मौसम में और ज़्यादा निखरकर खिलती हूँ',
    ],
    linesHinglish: [
      'Kathin haalaaton ki dhoop mujhe murjha nahin sakti dost',
      'Main har mausam mein aur zyada nikharkar khilti hoon',
    ],
    linesEnglish: [
      'Harsh heat of tough seasons can never wilt my roots',
      'Through every turn of weather I bloom back brighter',
    ],
  },
  {
    title: 'दबंग नहीं, दिलदार',
    titleEnglish: 'Warm Power',
    linesHindi: [
      'दूसरों को नीचे गिराकर बड़ा बनने का शौक़ नहीं मुझे',
      'मैं खुद चमककर आसपास भी उजाला फैलाना चाहती हूँ',
    ],
    linesHinglish: [
      'Doosron ko neeche giraakar bada banne ka shauq nahin mujhe',
      'Main khud chamakkar aaspaas bhi ujala phailaana chaahti hoon',
    ],
    linesEnglish: [
      'I hold zero interest in stepping on others to feel tall',
      'I want to shine brightly while lighting up everyone near',
    ],
  },
  {
    title: 'पायल की झंकार',
    titleEnglish: 'Confident Steps',
    linesHindi: [
      'पायल की खनक हो या दफ़्तर की ऊँची हील्स की आवाज़',
      'हर कदम पर हमारा आत्मविश्वास साफ़ सुनाई देता है',
    ],
    linesHinglish: [
      'Paayal ki khanak ho ya daftar ki oonchi heels ki aawaaz',
      'Har kadam par hamaara aatmavishwaas saaf sunai deta hai',
    ],
    linesEnglish: [
      'Chime of silver anklets or crisp footsteps down office halls',
      'Confidence rings unmistakable inside every single stride',
    ],
  },
  {
    title: 'अपनों की ताक़त',
    titleEnglish: 'Anchor for Loved Ones',
    linesHindi: [
      'घर में कोई भी परेशान हो तो सबसे पहले यही संभालती हैं',
      'छोटी दिखने वाली बेटियाँ बहुत बड़ा सहारा होती हैं',
    ],
    linesHinglish: [
      'Ghar mein koi bhi pareshaan ho to sabse pehle yahi sanbhaalti hain',
      'Chhoti dikhne waali betiyan bahut bada sahaara hoti hain',
    ],
    linesEnglish: [
      'When anyone at home grows anxious, daughters steady the room first',
      'Quietly holding weight far taller than their gentle frames',
    ],
  },
  {
    title: 'सही चुनाव का हक़',
    titleEnglish: 'Choosing Respect',
    linesHindi: [
      'मैं अब वहीं ठहरती हूँ जहाँ मेरी बात को सुना जाए',
      'अनदेखी वाली जगहों से चुपचाप विदा ले लेती हूँ',
    ],
    linesHinglish: [
      'Main ab wahin theharti hoon jahaan meri baat ko suna jaaye',
      'Andekhi waali jagahon se chupchaap vida le leti hoon',
    ],
    linesEnglish: [
      'I linger only in spaces where my voice is truly heard',
      'From rooms that overlook me, I take a graceful exit early',
    ],
  },
  {
    title: 'किताबों से प्यार',
    titleEnglish: 'Wisdom & Grace',
    linesHindi: [
      'फूल और कपड़े तो वक़्त के साथ पुराने हो जाते हैं',
      'किताबों से कमाई समझ उम्र भर चेहरा चमकाती है',
    ],
    linesHinglish: [
      'Phool aur kapde to waqt ke saath purane ho jaate hain',
      'Kitaabon se kamaai samajh umar bhar chehra chamkaati hai',
    ],
    linesEnglish: [
      'Fresh petals and trends fade quietly across seasons',
      'Wisdom gathered from good pages keeps a mind radiant forever',
    ],
  },
  {
    title: 'निस्वार्थ फ़िक्र की अहमियत',
    titleEnglish: 'Pure Affection',
    linesHindi: [
      'अगर कोई लड़की दिल से तुम्हारी फ़िक्र करने लगे तो',
      'समझ लेना ज़िंदगी का सबसे बड़ा तोहफ़ा मिल गया तुम्हें',
    ],
    linesHinglish: [
      'Agar koi ladki dil se tumhaari fikr karne lage to',
      'Samajh lena zindagi ka sabse bada tohfa mil gaya tumhein',
    ],
    linesEnglish: [
      'If a woman cares for you deeply straight from her soul',
      'Know you received one of lifes finest blessings',
    ],
  },
  {
    title: 'खुद के रंग',
    titleEnglish: 'True Colors',
    linesHindi: [
      'दुनिया की पसंद बनने की होड़ में खुद को मत खो देना',
      'तुम्हारी असली खूबसूरती तुम्हारे अपने स्वाभाविक रंग में है',
    ],
    linesHinglish: [
      'Duniya ki pasand banne ki hod mein khud ko mat kho dena',
      'Tumhaari asli khoobsurati tumhaare apne swaabhaavik rang mein hai',
    ],
    linesEnglish: [
      'Never lose yourself trying to fit everyone elses filter',
      'Your brightest glow lives inside your unedited natural shade',
    ],
  },
  {
    title: 'मेहनत से चमकता चेहरा',
    titleEnglish: 'Pride in Work',
    linesHindi: [
      'पसीने से थका चेहरा भी बेहद प्यारा लगता है तब',
      'जब इंसान अपने सपनों के लिए दिन-रात लड़ रहा हो',
    ],
    linesHinglish: [
      'Paseene se thaka chehra bhi behad pyaara lagta hai tab',
      'Jab insaan apne sapnon ke liye din-raat lad raha ho',
    ],
    linesEnglish: [
      'Even a tired face glowing from honest work looks radiant',
      'When she spends every ounce chasing goals dear to her heart',
    ],
  },
  {
    title: 'हद से ज़्यादा नहीं, सही',
    titleEnglish: 'Kindness With Limits',
    linesHindi: [
      'दयालु होना बहुत अच्छी बात है हर लड़की के लिए',
      'पर अपनी खुशियों की कीमत पर हर किसी को हाँ कहना ठीक नहीं',
    ],
    linesHinglish: [
      'Dayaalu hona bahut acchi baat hai har ladki ke liye',
      'Par apni khushiyon ki keemat par har kisi ko haan kehna theek nahin',
    ],
    linesEnglish: [
      'Kindness is a lovely grace every heart can carry',
      'Never at the cost of silencing your own peace to say yes',
    ],
  },
  {
    title: 'छोटी जीत, बड़ा जश्न',
    titleEnglish: 'Every Win Counts',
    linesHindi: [
      'किसी बड़ी मंज़िल का इंतज़ार करने से बेहतर है आज',
      'अपनी हर छोटी तरक्की पर दिल से मुस्कुरा लिया जाए',
    ],
    linesHinglish: [
      'Kisi badi manzil ka intezaar karne se behtar hai aaj',
      'Apni har chhoti taraqqi par dil se muskura liya jaaye',
    ],
    linesEnglish: [
      'Rather than holding breath solely for giant summits',
      'Smile wholeheartedly today for every small mile conquered',
    ],
  },
  {
    title: 'नज़र में सपना',
    titleEnglish: 'Starry Focus',
    linesHindi: [
      'आँखों में चमक सिर्फ़ काजल से नहीं आती है यारो',
      'सपने पूरे करने का जुनून चेहरा रोशन कर देता है',
    ],
    linesHinglish: [
      'Aankhon mein chamak sirf kaajal se nahin aati hai yaaro',
      'Sapne poore karne ka junoon chehra roshan kar deta hai',
    ],
    linesEnglish: [
      'Sparkle in her eyes never comes from makeup alone',
      'Passion to conquer her own dreams lights up her whole face',
    ],
  },
  {
    title: 'नर्म दिल, पक्का इरादा',
    titleEnglish: 'Soft Heart, Steel Spine',
    linesHindi: [
      'दिल में ममता और दिमाग़ में तेज़ी एक साथ रखती हैं',
      'यही संतुलन हर लड़की को सबसे ख़ास बनाता है',
    ],
    linesHinglish: [
      'Dil mein mamta aur dimaag mein tezi ek saath rakhti hain',
      'Yahi santulan har ladki ko sabse khaas banaata hai',
    ],
    linesEnglish: [
      'Carrying tender warmth alongside razor-sharp focus',
      'That rare balance makes every strong woman unforgettable',
    ],
  },
  {
    title: 'ख़ुद की हीरोइन',
    titleEnglish: 'Her Own Hero',
    linesHindi: [
      'किसी राजकुमार के आने की कहानी अब पुरानी हो गई',
      'लड़कियाँ अब अपनी दुनिया खुद बचाने का दम रखती हैं',
    ],
    linesHinglish: [
      'Kisi raajkumaar ke aane ki kahaani ab purani ho gayi',
      'Ladkiyan ab apni duniya khud bachaane ka dam rakhti hain',
    ],
    linesEnglish: [
      'Waiting around for some fairy-tale rescue grew old years ago',
      'Girls carry every ounce of strength to rescue themselves',
    ],
  },
  {
    title: 'सादगी भरी शान',
    titleEnglish: 'Timeless Grace',
    linesHindi: [
      'दिखावे की चमक दो घंटे की मेहमान होती है पार्टी में',
      'तहज़ीब और आत्मविश्वास की शान हमेशा बनी रहती है',
    ],
    linesHinglish: [
      'Dikhawe ki chamak do ghante ki mehmaan hoti hai party mein',
      'Tehzeeb aur aatmavishwaas ki shaan hamesha bani rehti hai',
    ],
    linesEnglish: [
      'Flashy glitter fades before the party lights dim out',
      'Poise and self-assurance stay timeless in every room',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'अनकहा हौसला',
    titleEnglish: 'Silent Grit',
    linesHindi: [
      'घर और करियर दोनों को एक साथ मुस्कुराकर साध लेना',
      'सिर्फ़ एक मजबूत लड़की के ही बस की बात होती है',
    ],
    linesHinglish: [
      'Ghar aur career dono ko ek saath muskurakar saadh lena',
      'Sirf ek mazboot ladki ke hi bas ki baat hoti hai',
    ],
    linesEnglish: [
      'Balancing home and rising career calmly with a smile',
      'Takes the quiet strength of an extraordinary woman',
    ],
  },
  {
    title: 'चुटकी भर मस्ती',
    titleEnglish: 'Playful Spirit',
    linesHindi: [
      'थोड़ी सी नटखट और थोड़ी सी समझदार रहती हैं लड़कियाँ',
      'इनकी प्यारी बातें पूरे घर में रौनक भर देती हैं',
    ],
    linesHinglish: [
      'Thodi si natkhat aur thodi si samajhdaar rehti hain ladkiyan',
      'Inki pyaari baatein poore ghar mein raunak bhar deti hain',
    ],
    linesEnglish: [
      'A dash of mischief braided gently with sharp wisdom',
      'Her joyful chatter fills every hallway at home with life',
    ],
  },
  {
    title: 'भरोसे का क़िला',
    titleEnglish: 'Steadfast Confidence',
    linesHindi: [
      'जो बात किसी से न कह पाएँ, वो खुद से कह लेती हैं',
      'अकेले में भी अपने हौसले को मज़बूत रखती हैं लड़कियाँ',
    ],
    linesHinglish: [
      'Jo baat kisi se na keh paayein, wo khud se keh leti hain',
      'Akele mein bhi apne hausle ko mazboot rakhti hain ladkiyan',
    ],
    linesEnglish: [
      'Whispers too deep to share aloud get talked out in private',
      'Keeping her courage tall even on quiet solo evenings',
    ],
  },
  {
    title: 'नई उड़ान की तैयारी',
    titleEnglish: 'Ready to Soar',
    linesHindi: [
      'सपनों की किताब में नया पन्ना जोड़ दिया है आज मैंने',
      'अब हर सुबह मुझे अपनी मंज़िल के करीब ले जाएगी',
    ],
    linesHinglish: [
      'Sapnon ki kitaab mein naya panna jod diya hai aaj maine',
      'Ab har subah mujhe apni manzil ke kareeb le jaayegi',
    ],
    linesEnglish: [
      'I opened a crisp new chapter inside my book of dreams today',
      'From here, every morning carries me closer toward my goal',
    ],
  },
  {
    title: 'साफ़ दिल और तेज़ अक़्ल',
    titleEnglish: 'Wise and Pure',
    linesHindi: [
      'मीठी चालबाज़ी पहचानने में देर नहीं लगती मुझे अब',
      'सीधी रहती हूँ पर नादान बिल्कुल नहीं रही अब',
    ],
    linesHinglish: [
      'Meethi chaalbaazi pehchaanne mein der nahin lagti mujhe ab',
      'Seedhi rehti hoon par nadaan bilkul nahin rahi ab',
    ],
    linesEnglish: [
      'Spotting sweet manipulation takes me seconds nowadays',
      'I remain kind by nature, never naive anymore',
    ],
  },
  {
    title: 'फूलों से सुंदर विचार',
    titleEnglish: 'Graceful Mind',
    linesHindi: [
      'सिर्फ़ सजने-संवरने तक सीमित नहीं है मेरी दुनिया',
      'किताबों, विचारों और काम से भी खुद को सजाती हूँ मैं',
    ],
    linesHinglish: [
      'Sirf sajne-sanwarne tak seemit nahin hai meri duniya',
      'Kitaabon, vichaaron aur kaam se bhi khud ko sajaati hoon main',
    ],
    linesEnglish: [
      'My world stretches way past mirrors and outfits',
      'I dress my spirit daily in ideas, wisdom, and craft',
    ],
  },
  {
    title: 'दोस्त के लिए ढाल',
    titleEnglish: 'Fierce Friend',
    linesHindi: [
      'जिसकी अच्छी दोस्त एक सच्ची लड़की बन जाए जीवन में',
      'उसे फिर किसी और सहारे की कमी महसूस नहीं होती',
    ],
    linesHinglish: [
      'Jiski acchi dost ek sacchi ladki ban jaaye jeevan mein',
      'Use phir kisi aur sahaare ki kami mehsoos nahin hoti',
    ],
    linesEnglish: [
      'Having a genuine girl standing beside you as true friend',
      'Leaves you needing zero extra anchors through rough seas',
    ],
  },
  {
    title: 'सुकून की सहेली',
    titleEnglish: 'Peaceful Aura',
    linesHindi: [
      'शोर-शराबे वाली बातों से कोसों दूर रहती हूँ आजकल',
      'जिंदगी की सादगी और सच्चाई में ही सुकून पाती हूँ',
    ],
    linesHinglish: [
      'Shor-sharaabe waali baaton se koson door rehti hoon aajkal',
      'Zindagi ki saadgi aur sacchai mein hi sukoon paati hoon',
    ],
    linesEnglish: [
      'Miles away from pointless gossip and loud drama these days',
      'I gather calm happiness inside simple, honest living',
    ],
  },
  {
    title: 'आगे बढ़ने की ज़िद',
    titleEnglish: 'Unstoppable Stride',
    linesHindi: [
      'अगर रास्ता आसान नहीं तो कोई परवाह नहीं मुझे',
      'चढ़ाई पर चलना भी सीख लूँगी अपनी मंज़िल के लिए',
    ],
    linesHinglish: [
      'Agar raasta aasaan nahin to koi parwaah nahin mujhe',
      'Chadhai par chalna bhi seekh loongi apni manzil ke liye',
    ],
    linesEnglish: [
      'If the path turns steep, it matters little to me',
      'I will learn how to climb effortlessly for what matters',
    ],
  },
  {
    title: 'प्यार और सम्मान का संतुलन',
    titleEnglish: 'Respect First in Love',
    linesHindi: [
      'प्यार में समर्पण ज़रूर होता है हर लड़की के पास',
      'पर बदले में बराबर की इज़्ज़त मिलना सबसे ज़रूरी है',
    ],
    linesHinglish: [
      'Pyaar mein samarpan zaroor hota hai har ladki ke paas',
      'Par badle mein baraabar ki izzat milna sabse zaroori hai',
    ],
    linesEnglish: [
      'Devotion lives richly inside a womans loving heart',
      'Equal respect returned in kind remains non-negotiable',
    ],
  },
  {
    title: 'तारीफ़ की मोहताज नहीं',
    titleEnglish: 'Self-Validated',
    linesHindi: [
      'किसी की एक टिप्पणी से अपना दिन खराब नहीं करती मैं',
      'अपनी कीमत आईने से नहीं, अपने कर्मों से जानती हूँ मैं',
    ],
    linesHinglish: [
      'Kisi ki ek tippani se apna din kharaab nahin karti main',
      'Apni keemat aaine se nahin, apne karmon se jaanti hoon main',
    ],
    linesEnglish: [
      'Nobody elses careless remark ruins my morning anymore',
      'I measure my worth by my deeds, never passing comments',
    ],
  },
  {
    title: 'हर मौसम की रौनक',
    titleEnglish: 'Sunshine Everywhere',
    linesHindi: [
      'गर्मी हो या ठंड, अपनी हँसी से मौसम बदल देती हैं',
      'घर की रौनक बेटियों की आवाज़ से ही बनी रहती है',
    ],
    linesHinglish: [
      'Garmi ho ya thand, apni hansi se mausam badal deti hain',
      'Ghar ki raunak betiyon ki aawaaz se hi bani rehti hai',
    ],
    linesEnglish: [
      'Summer heat or chilly frost, her laughter warms the air',
      'A homes brightness stays alive through daughters voices',
    ],
  },
  {
    title: 'घर की अनकही ताक़त',
    titleEnglish: 'Quiet Inspiration',
    linesHindi: [
      'जो लड़कियाँ बिना शोर के अपने परिवार का सहारा बनती हैं',
      'दुनिया की सबसे बड़ी प्रेरणा वही होती हैं सच में',
    ],
    linesHinglish: [
      'Jo ladkiyan bina shor ke apne parivaar ka sahaara banti hain',
      'Duniya ki sabse badi prerna wahi hoti hain sach mein',
    ],
    linesEnglish: [
      'Daughters who quietly stand up as anchors for their homes',
      'Shine as the truest inspiration anywhere on earth',
    ],
  },
  {
    title: 'ख़ास व्यक्तित्व',
    titleEnglish: 'One of a Kind',
    linesHindi: [
      'मेरी शालीनता को मेरी ख़ामोशी की कमज़ोरी मत मानो',
      'ज़रूरत पड़ने पर मैं पूरे हालात बदल सकती हूँ',
    ],
    linesHinglish: [
      'Meri shaaleenta ko meri khaamoshi ki kamzori mat maano',
      'Zaroorat padne par main poore haalaat badal sakti hoon',
    ],
    linesEnglish: [
      'Never mistake my graceful restraint for timidness',
      'When circumstances demand, I reshape everything cleanly',
    ],
  },
  {
    title: 'खुश रहने की कला',
    titleEnglish: 'Choosing Her Own Joy',
    linesHindi: [
      'छोटी-छोटी चीज़ों में खुश रहना आता है लड़कियों को',
      'एक प्यारा फूल भी इनका पूरा दिन बना देता है',
    ],
    linesHinglish: [
      'Chhoti-chhoti cheezon mein khush rehna aata hai ladkiyon ko',
      'Ek pyaara phool bhi inka poora din bana deta hai',
    ],
    linesEnglish: [
      'Girls know how to gather joy inside tiny thoughtful gestures',
      'Even one simple wildflower brightens her whole afternoon',
    ],
  },
  {
    title: 'नए रंगों की उड़ान',
    titleEnglish: 'Painting Own Canvas',
    linesHindi: [
      'रंगों से डरने वाले क्या जानेंगे इंद्रधनुष का मज़ा',
      'हम लड़कियाँ तो हर नए मोड़ को खूबसूरत बना देती हैं',
    ],
    linesHinglish: [
      'Rangon se darne waale kya jaanenge indradhanush ka maza',
      'Hum ladkiyan to har naye mod ko khoobsurat bana deti hain',
    ],
    linesEnglish: [
      'Those scared of change never taste the beauty of rainbows',
      'Girls step around every new corner and make it bloom',
    ],
  },
  {
    title: 'बिन डरे बोलना',
    titleEnglish: 'Speaking Truth Plainly',
    linesHindi: [
      'नक़ली मुस्कान पहनकर बैठना नहीं भाता मुझे अब',
      'जो बात दिल में है, साफ़ शब्दों में कह देती हूँ',
    ],
    linesHinglish: [
      'Naqli muskaan pehenkar baithna nahin bhaata mujhe ab',
      'Jo baat dil mein hai, saaf shabdon mein keh deti hoon',
    ],
    linesEnglish: [
      'Wearing polite fake smiles around heavy tables feels exhausting',
      'I prefer voicing honest thoughts calmly and cleanly',
    ],
  },
  {
    title: 'हर मुश्किल पर भारी',
    titleEnglish: 'Stronger Than Storms',
    linesHindi: [
      'हालात चाहे जितने भी सख़्त क्यों न हो जाएँ रास्ते में',
      'लड़कियाँ मुस्कुराते हुए हर कठिन दौर पार कर जाती हैं',
    ],
    linesHinglish: [
      'Haalaat chaahe jitne bhi sakht kyun na ho jaayein raaste mein',
      'Ladkiyan muskurate hue har kathin daur paar kar jaati hain',
    ],
    linesEnglish: [
      'No matter how heavy obstacles stack up along her road',
      'She moves steadily forward and crosses every barrier whole',
    ],
  },
  {
    title: 'सच्चा गुरूर',
    titleEnglish: 'Quiet Pride',
    linesHindi: [
      'अपने दम पर कमाने वाली लड़की के चेहरे की चमक',
      'दुनिया की किसी भी महँगी चीज़ से नहीं खरीदी जा सकती',
    ],
    linesHinglish: [
      'Apne dam par kamaane waali ladki ke chehre ki chamak',
      'Duniya ki kisi bhi mehngi cheez se nahin khareedi ja sakti',
    ],
    linesEnglish: [
      'That calm glow on a self-reliant womans face',
      'Cannot be purchased inside any boutique on earth',
    ],
  },
  {
    title: 'आज़ादी की मुस्कान',
    titleEnglish: 'Free & Radiant',
    linesHindi: [
      'सही ग़लत की पहचान खुद रखती हैं आज की लड़कियाँ',
      'तभी तो पूरे भरोसे के साथ आसमान नापती हैं आज',
    ],
    linesHinglish: [
      'Sahi galat ki pehchaan khud rakhti hain aaj ki ladkiyan',
      'Tabhi to poore bharose ke saath aasmaan naapti hain aaj',
    ],
    linesEnglish: [
      'Guided by clear judgment of their own today',
      'Girls measure vast open skies with fearless confidence',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'गहरी समझ, प्यारा लहजा',
    titleEnglish: 'Graceful Wisdom',
    linesHindi: [
      'ऊँची आवाज़ से नहीं, अपनी बात की सच्चाई से जीतती हैं',
      'समझदार लड़कियाँ हमेशा दिलों पर राज करती हैं',
    ],
    linesHinglish: [
      'Oonchi aawaaz se nahin, apni baat ki sacchai se jeet-ti hain',
      'Samajhdaar ladkiyan hamesha dilon par raaj karti hain',
    ],
    linesEnglish: [
      'Winning hearts not through loud volume, but honest weight',
      'Thoughtful women leave an unforgettable mark wherever they walk',
    ],
  },
  {
    title: 'बेफ़िक्र अंदाज़',
    titleEnglish: 'Unbothered Queen',
    linesHindi: [
      'जिसे मेरी कद्र नहीं, उसके पीछे भागने की आदत नहीं मेरी',
      'अपनी दुनिया में खुश रहना मुझे बख़ूबी आता है',
    ],
    linesHinglish: [
      'Jise meri qadr nahin, uske peeche bhaagne ki aadat nahin meri',
      'Apni duniya mein khush rehna mujhe bakhoobi aata hai',
    ],
    linesEnglish: [
      'Chasing after people who overlook my worth is never my habit',
      'I know well how to bloom cheerfully inside my own world',
    ],
  },
  {
    title: 'निर्मल मन और साफ़ इरादा',
    titleEnglish: 'Pure Intent Glow',
    linesHindi: [
      'दिल में मैल रखकर किसी से रिश्ता नहीं जोड़तीं ये',
      'दोस्ती हो या प्यार, हर चीज़ पूरे मन से निभाती हैं',
    ],
    linesHinglish: [
      'Dil mein mail rakhkar kisi se rishta nahin jodteen ye',
      'Dosti ho ya pyaar, har cheez poore man se nibhaati hain',
    ],
    linesEnglish: [
      'Never entering bonds carrying hidden angles inside',
      'Friendship or love, everything she gives comes pure and whole',
    ],
  },
  {
    title: 'नए सवेरे की किरण',
    titleEnglish: 'Morning Sunbeam',
    linesHindi: [
      'कल की थकान उतारकर फिर से मुस्कुराने लगती हैं सुबह',
      'हर लड़की के अंदर एक नई शुरुआत की ताक़त होती है',
    ],
    linesHinglish: [
      'Kal ki thakaan utaarkar phir se muskurane lagti hain subah',
      'Har ladki ke andar ek nayi shuruaat ki taaqat hoti hai',
    ],
    linesEnglish: [
      'Shaking off yesterdays weariness to smile cleanly at dawn',
      'Inside every woman sleeps the strength of fresh beginnings',
    ],
  },
  {
    title: 'ताक़तवर सहेलियाँ',
    titleEnglish: 'Girls Supporting Girls',
    linesHindi: [
      'जब एक लड़की दूसरी लड़की का हाथ थाम लेती है आगे बढ़ने को',
      'तो बड़ी से बड़ी दीवार भी रास्ता दे देती है उन्हें',
    ],
    linesHinglish: [
      'Jab ek ladki doosri ladki ka haath thaam leti hai aage badhne ko',
      'To badi se badi deewar bhi raasta de deti hai unhein',
    ],
    linesEnglish: [
      'When women lock hands to lift one another higher',
      'Even the tallest barriers step back to make way',
    ],
  },
  {
    title: 'सादगी भरी रौशनी',
    titleEnglish: 'Soft Radiance',
    linesHindi: [
      'चेहरे की शांति बता देती है कि दिल कितना साफ़ है',
      'कुछ लड़कियाँ बिना कुछ कहे भी सबका मन मोह लेती हैं',
    ],
    linesHinglish: [
      'Chehre ki shaanti bata deti hai ki dil kitna saaf hai',
      'Kuch ladkiyan bina kuch kahe bhi sabka man moh leti hain',
    ],
    linesEnglish: [
      'Serenity upon her face mirrors how pure her heart stays',
      'Some souls captivate every room without saying a single word',
    ],
  },
  {
    title: 'अपने सपनों की मालिक',
    titleEnglish: 'Owning Her Vision',
    linesHindi: [
      'कमरे के कोने से लेकर बड़े मंच तक पहुँचने का सफ़र',
      'लड़कियाँ अपने पसीने और हिम्मत से पूरा करती हैं',
    ],
    linesHinglish: [
      'Kamre ke kone se lekar bade manch tak pahunchne ka safar',
      'Ladkiyan apne paseene aur himmat se poora karti hain',
    ],
    linesEnglish: [
      'Every step from a quiet study desk to bright grand stages',
      'Gets earned cleanly by her own sweat and grit',
    ],
  },
  {
    title: 'बेदाग़ आत्मविश्वास',
    titleEnglish: 'Unshaken Self-Worth',
    linesHindi: [
      'तुम खुद को कितना मानती हो, यही बात सबसे अहम है',
      'दूसरों की तराज़ू पर अपनी कीमत कभी मत तौलना',
    ],
    linesHinglish: [
      'Tum khud ko kitna maanti ho, yahi baat sabse aham hai',
      'Doosron ki taraazoo par apni keemat kabhi mat taulna',
    ],
    linesEnglish: [
      'How deeply you respect yourself stands above every voice',
      'Never weigh your priceless worth upon anyone elses scale',
    ],
  },
  {
    title: 'चुटकुले और अपनापन',
    titleEnglish: 'Warm Laughter',
    linesHindi: [
      'माँ के साथ रसोई में बैठकर पुरानी बातें दोहराना',
      'लड़कियों के लिए दुनिया का सबसे प्यारा सुकून होता है',
    ],
    linesHinglish: [
      'Maa ke saath rasoi mein baithkar purani baatein dohraana',
      'Ladkiyon ke liye duniya ka sabse pyaara sukoon hota hai',
    ],
    linesEnglish: [
      'Sitting beside mom in the kitchen trading old stories',
      'Feels like the coziest comfort anywhere on earth',
    ],
  },
  {
    title: 'हिम्मत से जीत',
    titleEnglish: 'Bravery Wins',
    linesHindi: [
      'डर को आंखों में आँखें डालकर देख लो एक बार बस',
      'फिर देखना हर रास्ता खुद तुम्हारे आगे आसान हो जाएगा',
    ],
    linesHinglish: [
      'Dar ko aankhon mein aankhein daalkar dekh lo ek baar bas',
      'Phir dekhna har raasta khud tumhaare aage aasaan ho jaayega',
    ],
    linesEnglish: [
      'Look doubt squarely in the eyes just once with steady nerve',
      'Watch every daunting road smooth out right beneath your feet',
    ],
  },
  {
    title: 'रंगीन मिज़ाज',
    titleEnglish: 'Joyful Spirit',
    linesHindi: [
      'सादा सूट हो या चमकता हुआ त्यौहार का लिबास',
      'लड़कियों की रौनक हमेशा उनके खुश रहने से होती है',
    ],
    linesHinglish: [
      'Saada suit ho ya chamakta hua tyohaar ka libaas',
      'Ladkiyon ki raunak hamesha unke khush rehne se hoti hai',
    ],
    linesEnglish: [
      'Plain cotton kurti or sparkling festive attire',
      'Her real glow arrives straight from staying happy inside',
    ],
  },
  {
    title: 'मज़बूत मन',
    titleEnglish: 'Anchored Within',
    linesHindi: [
      'जो मन को शांत रखना सीख जाती हैं मुश्किल घड़ी में',
      'उन्हें दुनिया की कोई भीड़ विचलित नहीं कर पाती',
    ],
    linesHinglish: [
      'Jo man ko shaant rakhna seekh jaati hain mushkil ghadi mein',
      'Unhein duniya ki koi bheed vichalit nahin kar paati',
    ],
    linesEnglish: [
      'Once she masters keeping calm amid chaotic storms',
      'No noisy crowd anywhere can ever rattle her peace',
    ],
  },
  {
    title: 'अपना वक़्त खुद बनाना',
    titleEnglish: 'Making Her Own Time',
    linesHindi: [
      'मौका मिलने का इंतज़ार करने से कहीं बेहतर है आज',
      'अपनी मेहनत से खुद अपना दरवाज़ा खटखटाया जाए',
    ],
    linesHinglish: [
      'Mauqa milne ka intezaar karne se kahin behtar hai aaj',
      'Apni mehnat se khud apna darwaaza khatkhataya jaaye',
    ],
    linesEnglish: [
      'Better than sitting politely waiting to be noticed',
      'Step up with prepared hands and open your own door',
    ],
  },
  {
    title: 'दिल की सचाई',
    titleEnglish: 'Realness Matters',
    linesHindi: [
      'हर समय परफ़ेक्ट दिखने का बोझ उतारकर देखो कभी',
      'असली और बेपरवाह हँसी में ही सबसे ज़्यादा खूबसूरती है',
    ],
    linesHinglish: [
      'Har samay perfect dikhne ka bojh utaarkar dekho kabhi',
      'Asli aur beparwaah hansi mein hi sabse zyada khoobsurati hai',
    ],
    linesEnglish: [
      'Set down the exhausting weight of looking spotless all day',
      'Your brightest beauty glows inside a genuine, messy laugh',
    ],
  },
  {
    title: 'चुपचाप तरक्की',
    titleEnglish: 'Quiet Ascent',
    linesHindi: [
      'बहुत बोलकर नहीं, अपने नतीजों से चौंकाना पसंद है मुझे',
      'मेरा अगला कदम मेरे पिछले काम से भी बड़ा होगा',
    ],
    linesHinglish: [
      'Bahut bolkar nahin, apne nateejon se chaunkaana pasand hai mujhe',
      'Mera agla kadam mere pichhle kaam se bhi bada hoga',
    ],
    linesEnglish: [
      'I prefer surprising the room with finished results over chatter',
      'My next step forward will outshine everything I built before',
    ],
  },
  {
    title: 'बेटियों का हौसला',
    titleEnglish: 'Daughters Rising',
    linesHindi: [
      'सपनों की किताब में कोई सीमा नहीं लिखी है मेरे लिए',
      'जहाँ तक निगाह जाती है, वहाँ तक उड़ान मेरी है',
    ],
    linesHinglish: [
      'Sapnon ki kitaab mein koi seema nahin likhi hai mere liye',
      'Jahaan tak nigaah jaati hai, wahaan tak udaan meri hai',
    ],
    linesEnglish: [
      'No borderlines were drawn inside my book of dreams',
      'As far as my eyes can reach belongs openly to my flight',
    ],
  },
  {
    title: 'दिल से प्यार, दिमाग़ से निर्णय',
    titleEnglish: 'Heart & Head Balanced',
    linesHindi: [
      'रिश्तों में प्यार रखती हूँ पर आँखें बंद नहीं करती',
      'सही इंसान और सही रास्ते की परख पूरी रखती हूँ',
    ],
    linesHinglish: [
      'Rishton mein pyaar rakhti hoon par aankhein band nahin karti',
      'Sahi insaan aur sahi raaste ki parakh poori rakhti hoon',
    ],
    linesEnglish: [
      'I bring warm love to bonds without ever blinding my sight',
      'Discerning clearly between true character and sweet illusions',
    ],
  },
  {
    title: 'हर हाल में खास',
    titleEnglish: 'Unmistakably Special',
    linesHindi: [
      'भीड़ से अलग दिखने के लिए दिखावा जरूरी नहीं होता',
      'अपने उसूलों पर कायम रहना ही सबसे अलग बनाता है',
    ],
    linesHinglish: [
      'Bheed se alag dikhne ke liye dikhawa zaroori nahin hota',
      'Apne usoolon par qaayam rehna hi sabse alag banaata hai',
    ],
    linesEnglish: [
      'Standing out never requires putting on flashy theater',
      'Holding steady onto your principles already sets you apart',
    ],
  },
  {
    title: 'ख़ुशबुओं सा वजूद',
    titleEnglish: 'Lingering Grace',
    linesHindi: [
      'जिस कमरे से गुज़रती हैं, वहाँ अपनापन छोड़ जाती हैं',
      'अच्छी लड़कियों की मौजूदगी किसी दुआ से कम नहीं',
    ],
    linesHinglish: [
      'Jis kamre se guzarti hain, wahaan apnapan chhod jaati hain',
      'Acchi ladkiyon ki maujoodgi kisi dua se kam nahin',
    ],
    linesEnglish: [
      'Every hallway she passes through stays warmer afterward',
      'A thoughtful womans presence feels nothing short of a blessing',
    ],
  },
  {
    title: 'सुकून भरा स्वाभिमान',
    titleEnglish: 'Peaceful Pride',
    linesHindi: [
      'छोटी-छोटी लड़ाइयाँ छोड़कर बड़ी मंज़िल चुन ली मैंने',
      'अब मेरे वक़्त की कीमत सिर्फ़ मेरे सपने जानते हैं',
    ],
    linesHinglish: [
      'Chhoti-chhoti ladaaiyan chhodkar badi manzil chun li maine',
      'Ab mere waqt ki keemat sirf mere sapne jaante hain',
    ],
    linesEnglish: [
      'I walked past petty dramas to focus strictly on tall summits',
      'Only my worthiest dreams get access to my hours now',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'शेरनी जैसा दम',
    titleEnglish: 'Brave & Graceful',
    linesHindi: [
      'बाहर से शांत दिखती हैं पर अंदर हौसलों का समंदर है',
      'जरूरत पड़ने पर अपनों की सबसे मजबूत ढाल बनती हैं',
    ],
    linesHinglish: [
      'Baahar se shaant dikhti hain par andar hauslon ka samandar hai',
      'Zaroorat padne par apnon ki sabse mazboot dhaal banti hain',
    ],
    linesEnglish: [
      'Calm on the surface, carrying oceans of courage within',
      'Rising instantly as a fierce shield for everyone she loves',
    ],
  },
  {
    title: 'खुद का सम्मान पहले',
    titleEnglish: 'Respect Comes First',
    linesHindi: [
      'तारीफ़ की दो मीठी बातों पर मत फिदा होना कभी',
      'इंसान का असली सम्मान उसके व्यवहार में दिखता है',
    ],
    linesHinglish: [
      'Taareef ki do meethi baaton par mat fida hona kabhi',
      'Insaan ka asli sammaan unke vyavahaar mein dikhta hai',
    ],
    linesEnglish: [
      'Never be swayed purely by sugarcoated compliments',
      'How a person treats you consistently tells the whole truth',
    ],
  },
  {
    title: 'सादा लिबास, ऊँची सोच',
    titleEnglish: 'High Mind, Simple Style',
    linesHindi: [
      'फ़ैशन रोज़ बदलता है पर किरदार उम्र भर रहता है',
      'सोच को ऊँचा रखो, व्यक्तित्व खुद ही निखर उठेगा',
    ],
    linesHinglish: [
      'Fashion roz badalta hai par kirdaar umar bhar rehta hai',
      'Soch ko ooncha rakho, vyaktitva khud hi nikhar uthega',
    ],
    linesEnglish: [
      'Trends rotate every season, yet character stays forever',
      'Keep your mindset elevated, and poise follows naturally',
    ],
  },
  {
    title: 'प्यार की सही परिभाषा',
    titleEnglish: 'Healthy Love Only',
    linesHindi: [
      'जो तुम्हारे सपनों को पंख दे और मुस्कान बचाए रखे',
      'वही इंसान तुम्हारे समय और प्यार के असली लायक है',
    ],
    linesHinglish: [
      'Jo tumhaare sapnon ko pankh de aur muskaan bachaaye rakhe',
      'Wahi insaan tumhaare samay aur pyaar ke asli laayak hai',
    ],
    linesEnglish: [
      'Someone who hands wings to your dreams and guards your smile',
      'Is the only soul truly worthy of your heart and time',
    ],
  },
  {
    title: 'आगे बढ़ने का हक़',
    titleEnglish: 'Right to Grow',
    linesHindi: [
      'किसी के पीछे चलने के लिए नहीं बनी हैं आज की बेटियाँ',
      'कदम से कदम मिलाकर दुनिया बदलने निकली हैं आज',
    ],
    linesHinglish: [
      'Kisi ke peeche chalne ke liye nahin bani hain aaj ki betiyan',
      'Kadam se kadam milaakar duniya badalne nikli hain aaj',
    ],
    linesEnglish: [
      'Daughters were never meant to trail two steps behind',
      'Walking stride for stride today, they reshape the whole world',
    ],
  },
  {
    title: 'अकेले में भी रौनक',
    titleEnglish: 'Joyful Even Solo',
    linesHindi: [
      'कपड़ों की अलमारी नहीं, मन के ख़्याल सुंदर होने चाहिए',
      'खुद के साथ भी समय बिताना बड़ा सुकून देता है',
    ],
    linesHinglish: [
      'Kapdon ki almaari nahin, man ke khayaal sundar hone chahiye',
      'Khud ke saath bhi samay bitaana bada sukoon deta hai',
    ],
    linesEnglish: [
      'Lovely thoughts inside matter far more than stuffed closets',
      'Spending peaceful solo hours with yourself feels deeply rich',
    ],
  },
  {
    title: 'साहसी मुस्कान',
    titleEnglish: 'Brave Through Tears',
    linesHindi: [
      'आँखें नम हों तब भी हार मानने से इनकार कर देती हैं',
      'लड़कियाँ गिरकर हर बार दोगुनी चमक के साथ उठती हैं',
    ],
    linesHinglish: [
      'Aankhein nam hon tab bhi haar maanne se inkaar kar deti hain',
      'Ladkiyan girkar har baar doguni chamak ke saath uthti hain',
    ],
    linesEnglish: [
      'Even through misty eyes, she flatly refuses to surrender',
      'Rising after every stumble glowing twice as fierce',
    ],
  },
  {
    title: 'दो टूक सफ़ाई',
    titleEnglish: 'Crystal Clear Heart',
    linesHindi: [
      'पीठ पीछे बातें बनाना मेरी आदत में नहीं रहा कभी',
      'पसंद हो तो पास रहो, वरना दूरी ही बेहतर लगती है',
    ],
    linesHinglish: [
      'Peeth peeche baatein banaana meri aadat mein nahin raha kabhi',
      'Pasand ho to paas raho, warna doori hi behtar lagti hai',
    ],
    linesEnglish: [
      'Whispering behind backs never fit my character',
      'Stay around with warmth and honesty, or let distance keep peace',
    ],
  },
  {
    title: 'निडर ख़्वाब',
    titleEnglish: 'Fearless Ambitions',
    linesHindi: [
      'छोटे दायरे में सिमटकर रहने का मन नहीं करता अब',
      'पूरी दुनिया नापने का हौसला आँखों में पल रहा है',
    ],
    linesHinglish: [
      'Chhote daayre mein simatkar rehne ka man nahin karta ab',
      'Poori duniya naapne ka hausla aankhon mein pal raha hai',
    ],
    linesEnglish: [
      'Shrinking inside tiny safe corners no longer satisfies me',
      'Big dreams of exploring wide horizons burn bright in my eyes',
    ],
  },
  {
    title: 'मेहनत से प्यार',
    titleEnglish: 'In Love With Growth',
    linesHindi: [
      'खुद को हर दिन थोड़ा बेहतर बनाने का नशा चढ़ा है',
      'जब अपनी पहचान बनेगी तो दुनिया खुद सलाम करेगी',
    ],
    linesHinglish: [
      'Khud ko har din thoda behtar banaane ka nasha chadha hai',
      'Jab apni pehchaan banegi to duniya khud salaam karegi',
    ],
    linesEnglish: [
      'Growing one small inch wiser daily has become my favorite thrill',
      'When my own name stands tall, applause follows naturally',
    ],
  },
  {
    title: 'माँ की दुआ का ताज',
    titleEnglish: 'Blessed Beyond Measure',
    linesHindi: [
      'सबसे मजबूत सुरक्षा कवच किसी सोने-चांदी का नहीं',
      'माँ के आशीर्वाद से बढ़कर कोई ताज नहीं होता',
    ],
    linesHinglish: [
      'Sabse mazboot suraksha kavach kisi sone-chaandi ka nahin',
      'Maa ke aashirwaad se badhkar koi taaj nahin hota',
    ],
    linesEnglish: [
      'The strongest armor never gets forged from gold or silver',
      'No crown anywhere shines brighter than a mothers blessing',
    ],
  },
  {
    title: 'सच्ची दोस्ती की कदर',
    titleEnglish: 'Loyal Sisterhood',
    linesHindi: [
      'जलन से दूर रहकर जो दूसरी लड़की की तारीफ़ करे',
      'ऐसी सहेली ज़िंदगी के सबसे सुंदर तोहफ़ों में एक है',
    ],
    linesHinglish: [
      'Jalan se door rehkar jo doosri ladki ki taareef kare',
      'Aisi saheli zindagi ke sabse sundar tohfon mein ek hai',
    ],
    linesEnglish: [
      'A friend free of envy who cheers loudly when you shine',
      'Remains one of lifes most priceless blessings',
    ],
  },
  {
    title: 'सादगी का सम्मान',
    titleEnglish: 'Dignified Poise',
    linesHindi: [
      'बोलचाल में शालीनता और चाल में पूरा आत्मविश्वास',
      'यही हर लड़की को भीड़ में अलग पहचान दिलाता है',
    ],
    linesHinglish: [
      'Bolchaal mein shaaleenta aur chaal mein poora aatmavishwaas',
      'Yahi har ladki ko bheed mein alag pehchaan dilaata hai',
    ],
    linesEnglish: [
      'Kindness in voice paired with steady certainty in stride',
      'Sets any woman effortlessly apart inside any crowd',
    ],
  },
  {
    title: 'मुस्कुराती ताक़त',
    titleEnglish: 'Power Dressed Gently',
    linesHindi: [
      'प्यार से पेश आना कमज़ोरी की निशानी नहीं होती कभी',
      'दिल की नरमी ही सबसे बड़ी ताक़त बन जाती है',
    ],
    linesHinglish: [
      'Pyaar se pesh aana kamzori ki nishaani nahin hoti kabhi',
      'Dil ki narmi hi sabse badi taaqat ban jaati hai',
    ],
    linesEnglish: [
      'Offering warmth never makes anyone fragile',
      'Tenderness paired with spine turns into unstoppable strength',
    ],
  },
  {
    title: 'आत्मनिर्भर बेटियों का मान',
    titleEnglish: 'Own Pillar',
    linesHindi: [
      'जब खुद के पैरों पर खड़ी हो जाती हैं लड़कियाँ',
      'तब ज़िंदगी का हर फ़ैसला आसान लगने लगता है',
    ],
    linesHinglish: [
      'Jab khud ke pairon par khadi ho jaati hain ladkiyan',
      'Tab zindagi ka har faisla aasaan lagne lagta hai',
    ],
    linesEnglish: [
      'Once a woman stands squarely upon her own two feet',
      'Every decision ahead turns clear, calm, and fearless',
    ],
  },
  {
    title: 'नए मौसम का स्वागत',
    titleEnglish: 'Embracing Every Chapter',
    linesHindi: [
      'हर उम्र का अपना एक अलग निखार और अनुभव होता है',
      'वक़्त के साथ और ज़्यादा खूबसूरत और समझदार होती हैं ये',
    ],
    linesHinglish: [
      'Har umar ka apna ek alag nikhaar aur anubhav hota hai',
      'Waqt ke saath aur zyada khoobsurat aur samajhdaar hoti hain ye',
    ],
    linesEnglish: [
      'Every season of life unfolds its own rare wisdom and grace',
      'Growing even brighter, wiser, and stronger with each year',
    ],
  },
  {
    title: 'सपनों के रंग',
    titleEnglish: 'Vibrant Visions',
    linesHindi: [
      'कागज़ पर ही नहीं, हक़ीक़त में भी रंग भरना जानती हैं',
      'अपने इरादों से हर नामुमकिन को मुमकिन कर देती हैं',
    ],
    linesHinglish: [
      'Kaagaz par hi nahin, haqeeqat mein bhi rang bharna jaanti hain',
      'Apne iraadon se har naamumkin ko mumkin kar deti hain',
    ],
    linesEnglish: [
      'Not just sketching hopes on paper, she brings them alive',
      'Turning steep impossibles real through stubborn grit',
    ],
  },
  {
    title: 'सुकून भरा दिल',
    titleEnglish: 'Peace Over Drama',
    linesHindi: [
      'बेवजह के झगड़ों से दूर रहकर खुश रहना चुनती हूँ',
      'अपनी शांति से ज़्यादा कीमती कुछ नहीं लगता मुझे',
    ],
    linesHinglish: [
      'Bewajah ke jhagdon se door rehkar khush rehna chunti hoon',
      'Apni shaanti se zyada keemti kuch nahin lagta mujhe',
    ],
    linesEnglish: [
      'Choosing quiet peace far away from noisy pointless drama',
      'Nothing feels worth trading away my inner calm',
    ],
  },
  {
    title: 'मुस्कान से बढ़कर कोई गहना नहीं',
    titleEnglish: 'Priceless Warmth',
    linesHindi: [
      'तुम्हारी मुस्कान ही तुम्हारा सबसे प्यारा गहना है',
      'इसे किसी के छोटे बर्ताव से कभी मत खोने देना',
    ],
    linesHinglish: [
      'Tumhaari muskaan hi tumhaara sabse pyaara gehna hai',
      'Ise kisi ke chhote bartaav se kabhi mat khone dena',
    ],
    linesEnglish: [
      'Your radiant smile remains your finest ornament forever',
      'Never let someone elses small behavior steal it away',
    ],
  },
  {
    title: 'आईने के सामने ख़ुद से वादा',
    titleEnglish: 'Trust Yourself First',
    linesHindi: [
      'आईने के सामने खड़ी होकर खुद से एक वादा करना आज',
      'हर हाल में अपने सपनों का साथ खुद ही निभाऊँगी',
    ],
    linesHinglish: [
      'Aaine ke saamne khadi hokar khud se ek waada karna aaj',
      'Har haal mein apne sapnon ka saath khud hi nibhaaoongi',
    ],
    linesEnglish: [
      'Stand before the mirror today and make one steady vow',
      'No matter what, I will stay fiercely loyal to my dreams',
    ],
  },
  // Block 7 (121-128)
  {
    title: 'बेमिसाल आत्मसम्मान',
    titleEnglish: 'Unbroken Self-Respect',
    linesHindi: [
      'दिल की अच्छी ज़रूर हूँ पर किसी की खिलौना नहीं हूँ',
      'मेरा सम्मान करोगे तो जान से ज़्यादा चाहूँगी तुम्हें',
    ],
    linesHinglish: [
      'Dil ki acchi zaroor hoon par kisi ki khilauna nahin hoon',
      'Mera sammaan karoge to jaan se zyada chaahoongi tumhein',
    ],
    linesEnglish: [
      'Kind by nature, yet never a toy for passing convenience',
      'Honor my spirit, and my devotion knows zero bounds',
    ],
  },
  {
    title: 'हल्की मुस्कान, गहरी बात',
    titleEnglish: 'Gentle Confidence',
    linesHindi: [
      'चेहरे की सादगी और आँखों का भरोसा काफी है यारो',
      'हम लड़कियाँ बिना दिखावे के भी हर दिल पर छा जाती हैं',
    ],
    linesHinglish: [
      'Chehre ki saadgi aur aankhon ka bharosa kaafi hai yaaro',
      'Hum ladkiyan bina dikhawe ke bhi har dil par chhaa jaati hain',
    ],
    linesEnglish: [
      'Quiet grace and certainty in the eyes are more than enough',
      'Without flashy tricks, real women leave every heart touched',
    ],
  },
  {
    title: 'सफलता का नया अध्याय',
    titleEnglish: 'Next Chapter Bold',
    linesHindi: [
      'जिस रास्ते पर चलने से कभी रोकते थे लोग मुझे',
      'आज उसी मंज़िल पर सबसे पहले मेरा नाम चमकता है',
    ],
    linesHinglish: [
      'Jis raaste par chalne se kabhi rokte the log mujhe',
      'Aaj usi manzil par sabse pehle mera naam chamakta hai',
    ],
    linesEnglish: [
      'On the very highway critics tried holding me back from',
      'My name shines out front right near the summit today',
    ],
  },
  {
    title: 'बंदिशों से परे खुले पंख',
    titleEnglish: 'Free & Unbound',
    linesHindi: [
      'उड़ने के लिए आसमान हमेशा खुला रहता है सबके लिए',
      'बस किसी की बातों के पिंजरे से बाहर निकलना पड़ता है',
    ],
    linesHinglish: [
      'Udne ke liye aasmaan hamesha khula rehta hai sabke liye',
      'Bas kisi ki baaton ke pinjare se baahar nikalna padta hai',
    ],
    linesEnglish: [
      'Wide open skies stay free and welcoming for every wing',
      'Simply step outside cages built by outdated whispers',
    ],
  },
  {
    title: 'सच्ची चमक',
    titleEnglish: 'Genuine Brilliance',
    linesHindi: [
      'फूलों से सीखो कि बिना शोर के भी कैसे महका जाता है',
      'अच्छी लड़कियाँ अपने काम और प्यार से दुनिया संवारती हैं',
    ],
    linesHinglish: [
      'Phoolon se seekho ki bina shor ke bhi kaise mehka jaata hai',
      'Acchi ladkiyan apne kaam aur pyaar se duniya sanwaarti hain',
    ],
    linesEnglish: [
      'Learn from blooms how to fill rooms with grace silently',
      'Thoughtful women enrich the world through care and craft',
    ],
  },
  {
    title: 'मुस्कान से जीत',
    titleEnglish: 'Winning With Grace',
    linesHindi: [
      'नफ़रत का जवाब नफ़रत से देना मेरी फितरत में नहीं',
      'मैं मुस्कुराकर आगे बढ़ जाने में ही अपनी जीत मानती हूँ',
    ],
    linesHinglish: [
      'Nafrat ka jawaab nafrat se dena meri fitrat mein nahin',
      'Main muskurakar aage badh jaane mein hi apni jeet maanti hoon',
    ],
    linesEnglish: [
      'Returning bitterness for bitterness never sits right with me',
      'Smiling calmly and stepping onward is my sweetest victory',
    ],
  },
  {
    title: 'प्यारा आत्मविश्वास',
    titleEnglish: 'Quiet Assurance',
    linesHindi: [
      'जो भी मिलेगा, अपनी क़ाबिलियत और मेहनत से लूँगी मैं',
      'ख़ुद पर पूरा यक़ीन ही मेरी सबसे बड़ी पूंजी है',
    ],
    linesHinglish: [
      'Jo bhi milega, apni qaabiliyat aur mehnat se loongi main',
      'Khud par poora yaqeen hi meri sabse badi poonji hai',
    ],
    linesEnglish: [
      'Every milestone ahead will be earned by skill and sweat',
      'Unshakable faith in myself remains my finest treasure',
    ],
  },
  {
    title: 'रानी सा मिज़ाज',
    titleEnglish: 'Unmatched Poise',
    linesHindi: [
      'न किसी से कम, न किसी के जैसी बनने की दौड़ में हूँ',
      'मैं अपने आप में ही एक खूबसूरत और पूरी कहानी हूँ',
    ],
    linesHinglish: [
      'Na kisi se kam, na kisi ke jaisi banne ki daud mein hoon',
      'Main apne aap mein hi ek khoobsurat aur poori kahaani hoon',
    ],
    linesEnglish: [
      'Never beneath anyone, never racing to copy anyone else',
      'Right as I stand, I am already an extraordinary story whole',
    ],
  },
];

export const UNIQUE_GIRLS_128 = buildUniqueShayaris(
  'girls',
  'Girls Shayari (लड़कियों की शायरी)',
  '👑',
  73,
  GIRLS_ENTRIES
);
