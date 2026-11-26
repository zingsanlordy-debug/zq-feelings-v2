import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const FAMILY_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'घर लौटते ही सुकून',
    titleEnglish: 'Peace Coming Home',
    linesHindi: [
      'सारे शहर की थकान दरवाज़े के बाहर ही छूट जाती है तब',
      'जब अंदर से माँ की आवाज़ आती है — बेटा, आ गए तुम घर',
    ],
    linesHinglish: [
      'Saare shehar ki thakaan darwaaze ke baahar hi chhoot jaati hai tab',
      'Jab andar se Maa ki aawaaz aati hai — beta, aa gaye tum ghar',
    ],
    linesEnglish: [
      'All the city’s exhaustion drops right outside the front porch',
      'The second Mom calls out from inside—welcome back home, child',
    ],
  },
  {
    title: 'पापा के कंधों का साया',
    titleEnglish: 'Shade of Papa’s Shoulders',
    linesHindi: [
      'धूप कितनी भी तेज़ हो पर मैंने कभी तपन महसूस नहीं की',
      'मेरे पिता की मेहनत ने हमेशा सिर पर छत की तरह साया रखा',
    ],
    linesHinglish: [
      'Dhoop kitni bhi tez ho par maine kabhi tapan mehsoos nahin ki',
      'Mere pita ki mehnat ne hamesha sir par chhat ki tarah saaya rakha',
    ],
    linesEnglish: [
      'No matter how harsh life’s sun burned, I rarely felt the heat',
      'My father’s quiet labor sheltered me like a steady roof overhead',
    ],
  },
  {
    title: 'एक साथ खाने की मेज़',
    titleEnglish: 'Family Dinner Table',
    linesHindi: [
      'दुनिया के सबसे बड़े रेस्टोरेंट में भी वो स्वाद कहाँ मिलता है',
      'जो रात को पूरे परिवार के साथ बैठकर एक थाली में मिलता है',
    ],
    linesHinglish: [
      'Duniya ke sabse bade restaurant mein bhi wo swaad kahaan milta hai',
      'Jo raat ko poore parivaar ke saath baithkar ek thaali mein milta hai',
    ],
    linesEnglish: [
      'Not even five-star restaurants serve the magic flavor found right there',
      'When the whole family gathers around one warm dinner table at night',
    ],
  },
  {
    title: 'माँ की दुआओं का कवच',
    titleEnglish: 'Shield of Maa’s Prayers',
    linesHindi: [
      'सौ मुश्किलें टकरा कर लौट गईं मेरे दरवाज़े के बाहर से ही',
      'शायद हर सुबह माँ ने दुआओं का अदृश्य पहरा लगाया था',
    ],
    linesHinglish: [
      'Sau mushkilein takra kar laut gayeen mere darwaaze ke baahar se hi',
      'Shaayad har subah Maa ne duaon ka adrishya pehra lagaaya tha',
    ],
    linesEnglish: [
      'A hundred quiet storms turned away right outside my doorstep',
      'Because every morning my mother stood unseen guard with her prayers',
    ],
  },
  {
    title: 'छोटा आँगन, बड़ा दिल',
    titleEnglish: 'Small Courtyard Big Hearts',
    linesHindi: [
      'घर के कमरे बड़े होने से कोई आशियाना स्वर्ग नहीं बनता',
      'परिवार में प्यार और अपनापन हो तो छोटा घर भी महल लगता है',
    ],
    linesHinglish: [
      'Ghar ke kamre bade hone se koi aashiyaana swarg nahin banta',
      'Parivaar mein pyaar aur apnaapan ho to chhota ghar bhi mehal lagta hai',
    ],
    linesEnglish: [
      'Tall ceilings and wide bedrooms alone never turn walls into heaven',
      'When warmth and laughter fill the rooms, the tiniest house feels royal',
    ],
  },
  {
    title: 'दादी-नानी की कहानियाँ',
    titleEnglish: 'Grandma’s Old Tales',
    linesHindi: [
      'गर्मियों की छत, तारों की चादर और दादी के किस्से पुराने',
      'बचपन की उन रातों का सुकून आज भी दिल में ज़िंदा है',
    ],
    linesHinglish: [
      'Garmiyon ki chhat, taaron ki chaadar aur daadi ke qisse purane',
      'Bachpan ki un raaton ka sukoon aaj bhi dil mein zinda hai',
    ],
    linesEnglish: [
      'Summer breezes on the terrace, stars overhead, and Grandma’s classic stories',
      'The peaceful magic of those childhood nights still lives inside me today',
    ],
  },
  {
    title: 'हर हाल में अपना घर',
    titleEnglish: 'Always Home',
    linesHindi: [
      'बाहर की दुनिया तो सिर्फ़ कामयाबी देखकर हाथ मिलाती है रोज़',
      'परिवार अकेला है जो हारने पर भी सीने से लगा लेता है',
    ],
    linesHinglish: [
      'Baahar ki duniya to sirf kaamyaabi dekhkar haath milaati hai roz',
      'Parivaar akela hai jo haarne par bhi seene se laga leta hai',
    ],
    linesEnglish: [
      'The outside crowd happily shakes your hand only while trophies pile up',
      'Family alone pulls you tightly into their arms even when you fall short',
    ],
  },
  {
    title: 'रविवार की रौनक',
    titleEnglish: 'Sunday at Home',
    linesHindi: [
      'रविवार की सुबह सबका एक साथ देर से चाय पीना और हँसना',
      'यही छोटे-छोटे पल पूरे हफ्ते की मेहनत की असली कमाई हैं',
    ],
    linesHinglish: [
      'Raviwaar ki subah sabka ek saath der se chai peena aur hansna',
      'Yahi chhote-chhote pal poore hafte ki mehnat ki asli kamaai hain',
    ],
    linesEnglish: [
      'Lazy Sunday tea together with everyone laughing around the living room',
      'Those simple hours are the truest paycheck of an entire busy week',
    ],
  },
  {
    title: 'परिवार की एकता',
    titleEnglish: 'United Roots',
    linesHindi: [
      'अकेली लकड़ी तो कोई भी बड़ी आसानी से तोड़ देता है हाथ में',
      'परिवार जब एक साथ खड़ा हो तो बड़े तूफ़ान भी झुक जाते हैं',
    ],
    linesHinglish: [
      'Akeli lakdi to koi bhi badi aasaani se tod deta hai haath mein',
      'Parivaar jab ek saath khada ho to bade toofaan bhi jhuk jaate hain',
    ],
    linesEnglish: [
      'Anyone can snap a lone twig cleanly between two fingers',
      'When an entire family stands united, even fierce storms bow down',
    ],
  },
  {
    title: 'बचपन की दीवारें',
    titleEnglish: 'Walls of Childhood',
    linesHindi: [
      'घर की पुरानी दीवारों पर आज भी पेंसिल के निशान दिखते हैं',
      'हम बड़े तो हो गए पर माँ के लिए आज भी वही बच्चे हैं',
    ],
    linesHinglish: [
      'Ghar ki purani deewaron par aaj bhi pencil ke nishaan dikhte hain',
      'Hum bade to ho gaye par Maa ke liye aaj bhi wahi bacche hain',
    ],
    linesEnglish: [
      'Faint pencil height marks still stay sketched along our old hallway wall',
      'Years passed and we grew tall, yet to Mom we never stop being kids',
    ],
  },
  {
    title: 'पापा की खामोश मोहब्बत',
    titleEnglish: 'Papa’s Quiet Love',
    linesHindi: [
      'माँ की तरह हर रोज़ गले लगाकर प्यार नहीं जताते पापा',
      'पर मेरे हर सपने के लिए चुपचाप अपनी ख़्वाहिशें टाल देते हैं',
    ],
    linesHinglish: [
      'Maa ki tarah har roz gale lagaakar pyaar nahin jataate Papa',
      'Par mere har sapne ke liye chupchaap apni khwaahishein taal dete hain',
    ],
    linesEnglish: [
      'Dad rarely hugs loudly or speaks his affection out loud every day',
      'Yet he quietly delays his own wishes so every dream of mine stays whole',
    ],
  },
  {
    title: 'अपनों के संग घर की असली रौनक',
    titleEnglish: 'Heart of Every Festival',
    linesHindi: [
      'मिठाइयों और लाइटों से ज़्यादा रौनक तब आती है घर में',
      'जब दूर शहरों में बसे सारे बच्चे छुट्टी लेकर लौट आते हैं',
    ],
    linesHinglish: [
      'Mithaaiyon aur lighton se zyada raunak tab aati hai ghar mein',
      'Jab door shehron mein base saare bacche chhutti lekar laut aate hain',
    ],
    linesEnglish: [
      'Brighter than string lights or platters of sweets inside any hallway',
      'Is the evening grown kids catch trains home from distant cities',
    ],
  },
  {
    title: 'अजनबी शहर में घर की याद',
    titleEnglish: 'Missing Home Far Away',
    linesHindi: [
      'नए शहर की ऊँची इमारतों में सब कुछ मिलता है पैसे से',
      'बस शाम को घर जैसी रोटी और अपनों की आवाज़ नहीं मिलती',
    ],
    linesHinglish: [
      'Naye shehar ki oonchi imaarton mein sab kuch milta hai paise se',
      'Bas shaam ko ghar jaisi roti aur apnon ki aawaaz nahin milti',
    ],
    linesEnglish: [
      'Among gleaming city towers, money buys almost every convenience',
      'Everything except warm homemade rotis and familiar voices at dusk',
    ],
  },
  {
    title: 'माँ के हाथों का स्वाद',
    titleEnglish: 'Taste of Maa’s Hands',
    linesHindi: [
      'दुनिया की सारी रेसिपी किताबें भी वो जादू नहीं बना पातीं',
      'जो माँ बस सादे मसालों और ढेर सारे प्यार से पका देती हैं',
    ],
    linesHinglish: [
      'Duniya ki saari recipe kitaabein bhi wo jaadu nahin bana paateen',
      'Jo Maa bas saade masaalon aur dher saare pyaar se paka deti hain',
    ],
    linesEnglish: [
      'Not one glossy cookbook on earth captures that quiet magic',
      'When Mom cooks simple spices seasoned generously with pure love',
    ],
  },
  {
    title: 'बड़ों का आशीष',
    titleEnglish: 'Elders’ Blessings',
    linesHindi: [
      'दादा-दादी के झुर्रियों भरे हाथों में वो बरकत छुपी होती है',
      'जो सिर पर पड़ते ही हर मुश्किल सफ़र आसान बना देती है',
    ],
    linesHinglish: [
      'Daada-daadi ke jhurriyon bhare haathon mein wo barkat chhipi hoti hai',
      'Jo sir par padte hi har mushkil safar aasaan bana deti hai',
    ],
    linesEnglish: [
      'Gentle grace rests inside the wrinkled hands of grandparents',
      'Touching your head softly and making every uphill road feel blessed',
    ],
  },
  {
    title: 'बिना तराज़ू के तौला जाता घर का प्यार',
    titleEnglish: 'Unconditional Roots',
    linesHindi: [
      'दुनिया में हर रिश्ता किसी न किसी उम्मीद की तराज़ू पर तुलता है',
      'बस परिवार ही है जो कमियों के साथ भी पूरा अपनाता है',
    ],
    linesHinglish: [
      'Duniya mein har rishta kisi na kisi ummeed ki taraazu par tulta hai',
      'Bas parivaar hi hai jo kamiyon ke saath bhi poora apnaata hai',
    ],
    linesEnglish: [
      'Almost every outside tie gets weighed on scales of performance',
      'Only family accepts all your rough edges and holds you close anyway',
    ],
  },
  {
    title: 'घर की हँसी',
    titleEnglish: 'Laughter Under One Roof',
    linesHindi: [
      'नौकरी और पैसे की दौड़ में इतना भी आगे मत निकल जाना यारो',
      'कि परिवार के साथ बैठकर हँसने का वक़्त ही खो जाए कहीं',
    ],
    linesHinglish: [
      'Naukri aur paise ki daud mein itna bhi aage mat nikal jaana yaaro',
      'Ki parivaar ke saath baithkar hansne ka waqt hi kho jaaye kahin',
    ],
    linesEnglish: [
      'Never sprint so hard chasing titles and paychecks, friend',
      'That you lose the evenings meant for sitting and laughing with family',
    ],
  },
  {
    title: 'माँ-पापा की मुस्कान',
    titleEnglish: 'Parents’ Proud Smile',
    linesHindi: [
      'मेरी हर छोटी कामयाबी पर सबसे ज़्यादा चमक उनकी आँखों में होती है',
      'माँ-पापा की वही मुस्कान मेरी पूरी मेहनत का इनाम होती है',
    ],
    linesHinglish: [
      'Meri har chhoti kaamyaabi par sabse zyada chamak unki aankhon mein hoti hai',
      'Maa-Papa ki wahi muskaan meri poori mehnat ka inaam hoti hai',
    ],
    linesEnglish: [
      'On every small win of mine, the brightest sparkle shines inside their eyes',
      'Seeing Mom and Dad smile proud is the greatest prize for all my work',
    ],
  },
  {
    title: 'साथ रहने की कीमत',
    titleEnglish: 'Value of Being Together',
    linesHindi: [
      'दीवारें और छत तो मिस्त्री भी दो महीने में बना देता है ईंटों से',
      'पर उसे घर बनाने में पूरे परिवार का प्यार और सब्र लगता है',
    ],
    linesHinglish: [
      'Deewaarein aur chhat to mistri bhi do mahine mein bana deta hai eenton se',
      'Par use ghar banaane mein poore parivaar ka pyaar aur sabr lagta hai',
    ],
    linesEnglish: [
      'Builders can raise brick walls and cement roofs inside two months',
      'Turning those walls into a living home takes a family’s love and patience',
    ],
  },
  {
    title: 'दिल की सबसे सुरक्षित जगह',
    titleEnglish: 'Safest Place on Earth',
    linesHindi: [
      'दुनिया की सबसे महफ़ूज़ जगह न कोई किला है न कोई बैंक का लॉकर',
      'वो तो अपने परिवार के बीच चैन से बैठने का सुकून है',
    ],
    linesHinglish: [
      'Duniya ki sabse mehfooz jagah na koi qila hai na koi bank ka locker',
      'Wo to apne parivaar ke beech chain se baithne ka sukoon hai',
    ],
    linesEnglish: [
      'The safest place on earth is no stone fortress or locked vault',
      'It is sitting calmly inside the living room surrounded by your family',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'फ़ोन पर माँ की चिंता',
    titleEnglish: 'Mom Checking In',
    linesHindi: [
      'पूरे दिन की थकान के बाद जब फ़ोन पर माँ कहती हैं — खाना खा लिया',
      'इतनी सी बात सुनकर ही आँखें नम और दिल हल्का हो जाता है',
    ],
    linesHinglish: [
      'Poore din ki thakaan ke baad jab phone par Maa kehti hain — khaana khaa liya',
      'Itni si baat sunkar hi aankhein nam aur dil halka ho jaata hai',
    ],
    linesEnglish: [
      'After an exhausting day, Mom calls simply asking—did you eat properly',
      'Just hearing that softens my eyes and lifts half the weight off my chest',
    ],
  },
  {
    title: 'पापा का हाथ',
    titleEnglish: 'Holding Dad’s Hand',
    linesHindi: [
      'बचपन में मेले में न खो जाऊँ इसलिए पापा ने उँगली थाम रखी थी',
      'आज बड़ी दुनिया में भी उनके संस्कार ही मुझे संभाले रखते हैं',
    ],
    linesHinglish: [
      'Bachpan mein mele mein na kho jaaoon isliye Papa ne ungli thaam rakhi thi',
      'Aaj badi duniya mein bhi unke sanskaar hi mujhe sambhaale rakhte hain',
    ],
    linesEnglish: [
      'In childhood fairs, Dad gripped my small hand so I would never get lost',
      'In this wide adult world today, his quiet values still keep me steady',
    ],
  },
  {
    title: 'भाई-बहन की नोकझोंक',
    titleEnglish: 'Sibling Banter',
    linesHindi: [
      'रिमोट और आखिरी मिठाई पर दिन भर लड़ने वाले भाई-बहन ही',
      'वक़्त आने पर एक-दूसरे के लिए पूरी दुनिया से लड़ जाते हैं',
    ],
    linesHinglish: [
      'Remote aur aakhiri mithaai par din bhar ladne waale bhai-behen hi',
      'Waqt aane par ek-doosre ke liye poori duniya se lad jaate hain',
    ],
    linesEnglish: [
      'Siblings who argue endlessly over the TV remote and the last sweet',
      'Will stand up fiercely against the whole world whenever one needs defending',
    ],
  },
  {
    title: 'छुट्टियों की रौनक',
    titleEnglish: 'Holiday Homecoming',
    linesHindi: [
      'साल भर के कैलेंडर में बस उन्हीं दिनों पर गोला लगा रहता है',
      'जब बैग पैक करके पूरा परिवार साथ बैठने घर आता है',
    ],
    linesHinglish: [
      'Saal bhar ke calendar mein bas unheen dinon par gola laga rehta hai',
      'Jab bag pack karke poora parivaar saath baithne ghar aata hai',
    ],
    linesEnglish: [
      'Across the entire year’s calendar, only those circled dates shine brightest',
      'When bags are packed and everyone reunites back at home together',
    ],
  },
  {
    title: 'बड़े घर का खालीपन नहीं',
    titleEnglish: 'Warmth Over Size',
    linesHindi: [
      'पक्के मकान तो आसानी से बन जाते हैं मेहनत की कमाई से',
      'परिवार को जोड़े रखने के लिए रोज़ थोड़ा समझौता और प्यार चाहिए',
    ],
    linesHinglish: [
      'Pakke makaan to aasaani se ban jaate hain mehnat ki kamaai se',
      'Parivaar ko jode rakhne ke liye roz thoda samjhauta aur pyaar chahiye',
    ],
    linesEnglish: [
      'Brick houses go up quickly once earnings start coming in',
      'Keeping a family genuinely close asks for patience and warmth every day',
    ],
  },
  {
    title: 'आसमान छूकर भी घर की ओर लौटता मन',
    titleEnglish: 'Deep Family Roots',
    linesHindi: [
      'आकाश में कितनी भी ऊँचाई पर उड़ ले कोई परिंदा दिन भर',
      'शाम होते ही लौटकर अपने ही घोंसले में सबसे महफ़ूज़ सोता है',
    ],
    linesHinglish: [
      'Aakaash mein kitni bhi oonchaai par ud le koi parinda din bhar',
      'Shaam hote hi lautkar apne hi ghonsle mein sabse mehfooz sota hai',
    ],
    linesEnglish: [
      'No matter how high a bird flies under wide clouds all afternoon',
      'At dusk it returns home to rest safest inside its own familiar nest',
    ],
  },
  {
    title: 'त्याग की मूरत माँ-बाप',
    titleEnglish: 'Parents Unseen Sacrifices',
    linesHindi: [
      'हमारी नई शर्ट के लिए जिन्होंने अपनी पुरानी चप्पलें भी नहीं बदलीं',
      'उन माता-पिता के क़र्ज़ इस जन्म में कभी चुकाए नहीं जा सकते',
    ],
    linesHinglish: [
      'Hamaari nayi shirt ke liye jinhone apni purani chappalein bhi nahin badleen',
      'Un maata-pita ke qarz is janm mein kabhi chukaaye nahin jaa sakte',
    ],
    linesEnglish: [
      'Putting off replacing their own worn sandals just to buy our new clothes',
      'Such silent sacrifices by parents can never truly be repaid in one lifetime',
    ],
  },
  {
    title: 'घर की चौखट',
    titleEnglish: 'Home Threshold',
    linesHindi: [
      'जहाँ जूते उतारते ही दिल से हर बनावटी मुखौटा उतर जाए',
      'बस वही अपने परिवार का प्यारा घर कहलाता है जीवन में',
    ],
    linesHinglish: [
      'Jahaan joote utaarte hi dil se har banaawati mukhauta utar jaaye',
      'Bas wahi apne parivaar ka pyaara ghar kehlaata hai jeevan mein',
    ],
    linesEnglish: [
      'The doorway where slipping off your shoes drops every outer mask too',
      'That sacred spot is what a real family home feels like',
    ],
  },
  {
    title: 'एकजुट परिवार',
    titleEnglish: 'Together Through Everything',
    linesHindi: [
      'जब परिवार के लोग एक-दूसरे की ताक़त बन जाते हैं मुश्किल में',
      'तो बड़े से बड़ा पहाड़ भी रेत के टीले जैसा लगता है सामने',
    ],
    linesHinglish: [
      'Jab parivaar ke log ek-doosre ki taaqat ban jaate hain mushkil mein',
      'To bade se bada pahaad bhi ret ke teele jaisa lagta hai saamne',
    ],
    linesEnglish: [
      'When family members lock arms as each other’s steady shield in crisis',
      'Even towering mountains look no bigger than small sand hills',
    ],
  },
  {
    title: 'बच्चों की किलकारी',
    titleEnglish: 'Children’s Giggles',
    linesHindi: [
      'घर के कोनों में गूँजती बच्चों की बेफिक्र हँसी के आगे',
      'दुनिया का हर महँगा संगीत बिल्कुल फीका सा लगता है मुझे',
    ],
    linesHinglish: [
      'Ghar ke konon mein goonjti bacchon ki befikr hansi ke aage',
      'Duniya ka har mehanga sangeet bilkul feeka sa lagta hai mujhe',
    ],
    linesEnglish: [
      'Compared to children’s bright giggles echoing across living room floors',
      'Even the grandest symphony sounds completely ordinary',
    ],
  },
  {
    title: 'माँ के आँचल की छाँव',
    titleEnglish: 'Shelter of Maa’s Lap',
    linesHindi: [
      'दुनिया की कोई भी दवा उतना सुकून नहीं दे पाती सिर दर्द में',
      'जितना माँ की गोद में सिर रखकर दस मिनट लेटने से मिलता है',
    ],
    linesHinglish: [
      'Duniya ki koi bhi dawa utna sukoon nahin de paati sir dard mein',
      'Jitna Maa ki god mein sir rakhkar das minute letne se milta hai',
    ],
    linesEnglish: [
      'No pill from any pharmacy eases an aching head half as swiftly',
      'As resting ten quiet minutes with your head in your mother’s lap',
    ],
  },
  {
    title: 'प्यार और सम्मान का घर',
    titleEnglish: 'Respect at Home',
    linesHindi: [
      'जहाँ बड़ों की बात सुनी जाए और छोटों को स्नेह से समझाया जाए',
      'उस घर में कभी खुशियों और शांति की कमी नहीं होती',
    ],
    linesHinglish: [
      'Jahaan badon ki baat suni jaaye aur chhoton ko sneh se samjhaaya jaaye',
      'Us ghar mein kabhi khushiyon aur shaanti ki kami nahin hoti',
    ],
    linesEnglish: [
      'Where elders are heard with respect and young ones guided gently with love',
      'Joy and calm harmony never run short inside that household',
    ],
  },
  {
    title: 'साझा सुख-दुख',
    titleEnglish: 'Shared Burdens',
    linesHindi: [
      'परिवार वह छत है जिसके नीचे ग़म आधा और ख़ुशी कई गुना हो जाती है',
      'इसी संगति में हर कठिन दिन भी बड़ी आसानी से कट जाता है',
    ],
    linesHinglish: [
      'Parivaar wah chhat hai jiske neeche gham aadha aur khushi kai guna ho jaati hai',
      'Isi sangati mein har kathin din bhi badi aasaani se kat jaata hai',
    ],
    linesEnglish: [
      'Family is the roof beneath which sorrow splits in half and joy multiplies',
      'Side by side together, even the heaviest weeks feel lighter to carry',
    ],
  },
  {
    title: 'माफ़ी और अपनापन',
    titleEnglish: 'Forgiving Family',
    linesHindi: [
      'छोटी-छोटी नाराज़गियाँ तो हर घर के आँगन में आती-जाती रहती हैं',
      'रात को एक साथ बैठकर खाना खाते ही सब पिघल जाता है फिर',
    ],
    linesHinglish: [
      'Chhoti-chhoti naaraazgiyaan to har ghar ke aangan mein aati-jaati rehti hain',
      'Raat ko ek saath baithkar khaana khaate hi sab pighal jaata hai phir',
    ],
    linesEnglish: [
      'Minor tiffs come and go inside almost every lively household',
      'One shared dinner at the end of the day melts all of it away again',
    ],
  },
  {
    title: 'सुकून की सुबह घर में',
    titleEnglish: 'Morning Tea at Home',
    linesHindi: [
      'सुबह की पूजा की घंटी और रसोई में पकते गरम परांठों की खुशबू',
      'घर से दूर रहकर ही इन छोटी चीज़ों की असली कीमत समझ आती है',
    ],
    linesHinglish: [
      'Subah ki pooja ki ghanti aur rasoi mein pakte garam paraanthon ki khushboo',
      'Ghar se door rehkar hi in chhoti cheezon ki asli qeemat samajh aati hai',
    ],
    linesEnglish: [
      'Morning prayer bells and warm parathas sizzling softly in the kitchen',
      'Only after moving far away do you grasp how priceless those rituals were',
    ],
  },
  {
    title: 'पापा के कदमों का निशान',
    titleEnglish: 'Following Good Footsteps',
    linesHindi: [
      'पिता कभी किताबें पढ़कर नहीं सिखाते कि ईमानदारी क्या होती है',
      'उनका खुद का सादा जीवन ही बच्चों के लिए सबसे बड़ा पाठ होता है',
    ],
    linesHinglish: [
      'Pita kabhi kitaabein padhkar nahin sikhaate ki imaandaari kya hoti hai',
      'Unka khud ka saada jeevan hi bacchon ke liye sabse bada paath hota hai',
    ],
    linesEnglish: [
      'Fathers rarely lecture out of thick textbooks about integrity',
      'Their own quiet, honest way of living becomes the clearest lesson of all',
    ],
  },
  {
    title: 'दिल की दौलत',
    titleEnglish: 'Richest Inheritance',
    linesHindi: [
      'जायदाद के बंटवारे से ज़्यादा ज़रूरी है संस्कारों की विरासत संभालना',
      'अच्छा परिवार मिल जाना जीवन का सबसे बड़ा सौभाग्य होता है',
    ],
    linesHinglish: [
      'Jaaydaad ke bantwaare se zyada zaroori hai sanskaaron ki viraasat sambhaalna',
      'Accha parivaar mil jaana jeevan ka sabse bada saubhaagya hota hai',
    ],
    linesEnglish: [
      'Far richer than any property deed is guarding the values passed down',
      'Being born into a loving family remains life’s finest stroke of luck',
    ],
  },
  {
    title: 'दूसरे शहर में भी घर की धड़कन',
    titleEnglish: 'Close Across Miles',
    linesHindi: [
      'रोज़गार के लिए भले ही आज दूसरे शहर में कमरा ले लिया हो मैंने',
      'मेरी हर सुबह और हर रात आज भी घर की यादों में ही बीतती है',
    ],
    linesHinglish: [
      'Rozgaar ke liye bhale hi aaj doosre shehar mein kamra le liya ho maine',
      'Meri har subah aur har raat aaj bhi ghar ki yaadon mein hi beet-ti hai',
    ],
    linesEnglish: [
      'Even though work placed me inside a rented room in a distant city',
      'Every morning and night of mine still orbits warmly around home',
    ],
  },
  {
    title: 'परिवार की प्रार्थना',
    titleEnglish: 'Family Prayer',
    linesHindi: [
      'ईश्वर से बस यही माँगता हूँ कि मेरे घर की रौनक कभी कम न हो',
      'सबके चेहरे पर हँसी रहे और कोई आँख कभी नम न हो',
    ],
    linesHinglish: [
      'Ishwar se bas yahi maangta hoon ki mere ghar ki raunak kabhi kam na ho',
      'Sabke chehre par hansi rahe aur koi aankh kabhi nam na ho',
    ],
    linesEnglish: [
      'My simplest prayer is that the cheerful glow inside our home never dims',
      'May smiles stay steady on every face and no eye grow heavy with sorrow',
    ],
  },
  {
    title: 'माँ की मुस्कान',
    titleEnglish: 'Joy on Maa’s Face',
    linesHindi: [
      'सारे दिन की थकावट एक पल में खुशियों में बदल जाती है मेरी',
      'जब पहली तनख़्वाह से माँ के लिए साड़ी लाकर उनके हाथ में रखता हूँ',
    ],
    linesHinglish: [
      'Saare din ki thakaawat ek pal mein khushiyon mein badal jaati hai meri',
      'Jab pehli tankhwaah se Maa ke liye saadi laakar unke haath mein rakhta hoon',
    ],
    linesEnglish: [
      'Months of hard grind turn into pure joy inside a single second',
      'The day I place a gift for Mom in her hands from my very first paycheck',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'बचपन का आँगन',
    titleEnglish: 'Childhood Courtyard',
    linesHindi: [
      'उस आँगन की मिट्टी में आज भी हमारे बचपन की हँसी महकती है',
      'जहाँ बारिश में भीगते हुए सब भाई-बहन कागज़ की नाव चलाते थे',
    ],
    linesHinglish: [
      'Us aangan ki mitti mein aaj bhi hamaare bachpan ki hansi mehakti hai',
      'Jahaan baarish mein bheegte hue sab bhai-behen kaagaz ki naav chalaate the',
    ],
    linesEnglish: [
      'Our courtyard earth still holds the sweet echo of childhood laughter',
      'Where siblings stood drenched in monsoon rain floating tiny paper boats',
    ],
  },
  {
    title: 'अटूट सहारा',
    titleEnglish: 'Unbreakable Support',
    linesHindi: [
      'जब बाहर की दुनिया में कहीं कोई रास्ता समझ नहीं आता मुझे',
      'तब पापा का एक शब्द — चिंता मत कर, मैं हूँ न — सब ठीक कर देता है',
    ],
    linesHinglish: [
      'Jab baahar ki duniya mein kahin koi raasta samajh nahin aata mujhe',
      'Tab Papa ka ek shabd — chinta mat kar, main hoon na — sab theek kar deta hai',
    ],
    linesEnglish: [
      'Whenever the outside world feels confusing and paths look blocked',
      'Dad’s calm voice saying—do not worry, I am right here—steadies everything',
    ],
  },
  {
    title: 'परिवार की गरमाहट',
    titleEnglish: 'Warmth of Kin',
    linesHindi: [
      'सर्द रातों में रजाई से ज़्यादा गर्माहट घर की बातों में होती है',
      'जब सब मिलकर पुरानी तस्वीरें निकालकर हँसी-मज़ाक करते हैं',
    ],
    linesHinglish: [
      'Sard raaton mein rajaai se zyada garmaahat ghar ki baaton mein hoti hai',
      'Jab sab milkar purani tasveerein nikaalkar hansi-mazaak karte hain',
    ],
    linesEnglish: [
      'On chilly winter nights, living room chatter warms deeper than heavy quilts',
      'Pulling out dusty photo albums and laughing together over old memories',
    ],
  },
  {
    title: 'परिवार की जड़ें, जीवन का संबल',
    titleEnglish: 'Anchor in Life',
    linesHindi: [
      'पेड़ के पत्ते हवा में हिलते ज़रूर हैं पर जड़ें उन्हें गिरने नहीं देतीं',
      'इंसान की ज़िंदगी में भी परिवार वही मज़बूत जड़ें होता है',
    ],
    linesHinglish: [
      'Ped ke patte hawa mein hilte zaroor hain par jadein unhein girne nahin deteen',
      'Insaan ki zindagi mein bhi parivaar wahi mazboot jadein hota hai',
    ],
    linesEnglish: [
      'Leaves tremble under fierce winds, yet deep roots keep the tree standing',
      'Inside every human life, family serves as those exact unshakeable roots',
    ],
  },
  {
    title: 'दीवाली की सफ़ाई और हँसी',
    titleEnglish: 'Cleaning Together With Smiles',
    linesHindi: [
      'त्यौहार से पहले घर की सफ़ाई में थकान कम और मज़ा ज़्यादा होता है',
      'जब पूरा परिवार मिलकर हँसते हुए पुराने सामान टटोलता है',
    ],
    linesHinglish: [
      'Tyohaar se pehle ghar ki safaai mein thakaan kam aur maza zyada hota hai',
      'Jab poora parivaar milkar hanste hue purana saamaan tatolta hai',
    ],
    linesEnglish: [
      'Pre-festival house cleaning holds far more laughs than chores',
      'When everyone gathers around digging out forgotten childhood treasures',
    ],
  },
  {
    title: 'बुज़ुर्गों की छाँव',
    titleEnglish: 'Shade of Elders',
    linesHindi: [
      'जिस घर में बुज़ुर्गों का सम्मान और हँसी गूँजती रहती है रोज़',
      'उस आँगन में सुख-समृद्धि खुद चलकर आने को बेताब रहती है',
    ],
    linesHinglish: [
      'Jis ghar mein buzurgon ka sammaan aur hansi goonjti rehti hai roz',
      'Us aangan mein sukh-samriddhi khud chalkar aane ko betaab rehti hai',
    ],
    linesEnglish: [
      'In a house where grandparents’ laughter and honor echo warmly daily',
      'Peace and quiet blessings seem eager to walk right through the doorway',
    ],
  },
  {
    title: 'ख़ाली बैग, भरा दिल',
    titleEnglish: 'Leaving Home With Love',
    linesHindi: [
      'शहर वापस आते वक़्त माँ मेरे बैग में आधा घर भर देती हैं हमेशा',
      'कहती हैं — वहाँ बाहर अकेले में घर की याद कम आएगी बेटा',
    ],
    linesHinglish: [
      'Shehar waapas aate waqt Maa mere bag mein aadha ghar bhar deti hain hamesha',
      'Kehti hain — wahaan baahar akele mein ghar ki yaad kam aayegi beta',
    ],
    linesEnglish: [
      'Every time I catch a train back to work, Mom packs half the kitchen inside my bag',
      'Saying gently—so you miss home a little less out there on your own',
    ],
  },
  {
    title: 'दिल का असली सुकून',
    titleEnglish: 'Real Peace',
    linesHindi: [
      'हज़ार दोस्तों के बीच रहकर भी वो हल्कापन कभी नहीं मिलता',
      'जो परिवार के साथ बैठकर बिना कुछ कहे चुपचाप मिल जाता है',
    ],
    linesHinglish: [
      'Hazaar doston ke beech rehkar bhi wo halkapan kabhi nahin milta',
      'Jo parivaar ke saath baithkar bina kuch kahe chupchaap mil jaata hai',
    ],
    linesEnglish: [
      'Even surrounded by noisy crowds, you rarely feel that pure ease',
      'Which settles effortlessly just sitting silently in your family room',
    ],
  },
  {
    title: 'परिवार की दुआ सबसे बड़ी',
    titleEnglish: 'Greatest Blessing',
    linesHindi: [
      'ताक़त और शोहरत कभी-कभी रास्ते में साथ छोड़ देती हैं इंसान का',
      'पर परिवार की दुआ आख़िरी साँस तक ढाल बनकर चलती है साथ',
    ],
    linesHinglish: [
      'Taaqat aur shohrat kabhi-kabhi raaste mein saath chhod deti hain insaan ka',
      'Par parivaar ki dua aakhiri saans tak dhaal bankar chalti hai saath',
    ],
    linesEnglish: [
      'Fame and fortune sometimes shift directions halfway down the road',
      'Yet family prayers walk steadily beside you like lifelong armor',
    ],
  },
  {
    title: 'प्यारा संदेश घर से',
    titleEnglish: 'Sweet Home Call',
    linesHindi: [
      'काम के बीच में भी घर से आई एक वीडियो कॉल दिन बना देती है',
      'सबको स्क्रीन पर हँसता देखकर सारी थकान दूर हो जाती है',
    ],
    linesHinglish: [
      'Kaam ke beech mein bhi ghar se aayi ek video call din bana deti hai',
      'Sabko screen par hansta dekhkar saari thakaan door ho jaati hai',
    ],
    linesEnglish: [
      'Even mid-shift, one quick video call from home turns the whole day bright',
      'Seeing everyone smile on screen melts every trace of fatigue away',
    ],
  },
  {
    title: 'माँ की ममता',
    titleEnglish: 'Mother’s Warmth',
    linesHindi: [
      'दुनिया में हर चीज़ की क़ीमत बढ़ती-घटती रहती है समय के साथ',
      'बस माँ की ममता ही है जो हर उम्र में बिल्कुल मुफ़्त और पूरी मिलती है',
    ],
    linesHinglish: [
      'Duniya mein har cheez ki qeemat badhti-ghatati rehti hai samay ke saath',
      'Bas Maa ki mamta hi hai jo har umr mein bilkul muft aur poori milti hai',
    ],
    linesEnglish: [
      'Everything in markets fluctuates wildly in price as decades turn',
      'Only a mother’s unconditional care remains priceless and overflowing at every age',
    ],
  },
  {
    title: 'रिश्तों का सम्मान',
    titleEnglish: 'Honoring Each Other',
    linesHindi: [
      'परिवार में कभी-कभी छोटे-मोटे मतभेद होना स्वाभाविक है दोस्त',
      'पर एक-दूसरे का हाथ न छोड़ने का वादा सबसे बड़ा होता है',
    ],
    linesHinglish: [
      'Parivaar mein kabhi-kabhi chhote-mote matbhed hona swaabhaavik hai dost',
      'Par ek-doosre ka haath na chhodne ka waada sabse bada hota hai',
    ],
    linesEnglish: [
      'Small differences pop up naturally between folks living closely together',
      'What truly counts is the unspoken promise never to let go of each other’s hands',
    ],
  },
  {
    title: 'पापा की सीख',
    titleEnglish: 'Father’s Wisdom',
    linesHindi: [
      'जब कभी ग़लत रास्ता आसान दिखने लगे जीवन के सफ़र में मुझे',
      'पापा की सिखाई ईमानदारी तुरंत सही राह पर लौटा लाती है',
    ],
    linesHinglish: [
      'Jab kabhi galat raasta aasaan dikhne lage jeevan ke safar mein mujhe',
      'Papa ki sikhaayi imaandaari turant sahi raah par lauta laati hai',
    ],
    linesEnglish: [
      'Whenever an easy shortcut tempts me slightly off course in life',
      'My father’s quiet lesson on integrity guides me straight back home',
    ],
  },
  {
    title: 'एक साथ सफ़र',
    titleEnglish: 'Traveling Together',
    linesHindi: [
      'परिवार के साथ की गई छोटी सी यात्रा भी तीर्थ जैसी लगती है',
      'क्योंकि मंज़िल से ज़्यादा सुंदर वह हँसी-मज़ाक भरा रास्ता होता है',
    ],
    linesHinglish: [
      'Parivaar ke saath ki gayi chhoti si yatra bhi teerth jaisi lagti hai',
      'Kyonki manzil se zyada sundar wah hansi-mazaak bhara raasta hota hai',
    ],
    linesEnglish: [
      'Even a brief weekend drive with family feels sacred and joyful',
      'Because the laughter inside the car beats every tourist stop outside',
    ],
  },
  {
    title: 'दिल की सच्ची अमीरी',
    titleEnglish: 'True Family Wealth',
    linesHindi: [
      'कमाई इतनी हो या न हो कि महँगी गाड़ियाँ खड़ी हों बाहर घर के',
      'इतना प्यार ज़रूर हो कि शाम को सब एक साथ बैठने को तरसें',
    ],
    linesHinglish: [
      'Kamaai itni ho ya na ho ki mehangi gaadiyaan khadi hon baahar ghar ke',
      'Itna pyaar zaroor ho ki shaam ko sab ek saath baithne ko tarsein',
    ],
    linesEnglish: [
      'Whether or not fancy cars line the driveway out front',
      'May enough warmth fill the house that everyone rushes home at dusk',
    ],
  },
  {
    title: 'घर की यादों का खज़ाना',
    titleEnglish: 'Treasure of Memories',
    linesHindi: [
      'दीवारों पर टँगी पुरानी पारिवारिक तस्वीरें बस काग़ज़ नहीं होतीं',
      'वो हमारी ज़िंदगी के सबसे कीमती पलों की गवाह होती हैं',
    ],
    linesHinglish: [
      'Deewaaron par tangi purani paarivaarik tasveerein bas kaagaz nahin hoteen',
      'Wo hamaari zindagi ke sabse keemti palon ki gawaah hoti hain',
    ],
    linesEnglish: [
      'Framed family photos hanging across hallway walls are never just paper',
      'They stand as gentle witnesses to the happiest hours we ever lived',
    ],
  },
  {
    title: 'प्यारा बंधन',
    titleEnglish: 'Precious Bond',
    linesHindi: [
      'दुनिया की कोई भी सफलता तब तक अधूरी सी लगती है दिल को',
      'जब तक उसे घर आकर अपनों के साथ बाँटा न जाए खुशी से',
    ],
    linesHinglish: [
      'Duniya ki koi bhi safalta tab tak adhoori si lagti hai dil ko',
      'Jab tak use ghar aakar apnon ke saath baanta na jaaye khushi se',
    ],
    linesEnglish: [
      'Even the grandest achievement feels oddly incomplete on your own',
      'Until you carry the good news home to celebrate with the people you love',
    ],
  },
  {
    title: 'बहन-भाई का प्यार',
    titleEnglish: 'Sibling Care',
    linesHindi: [
      'चाहे जितने भी बड़े हो जाएँ हम अपनी-अपनी जिम्मेदारियों में',
      'भाई-बहन के बीच का बचपना और ख़्याल हमेशा वैसा ही रहता है',
    ],
    linesHinglish: [
      'Chaahe jitne bhi bade ho jaayein hum apni-apni zimmedaariyon mein',
      'Bhai-behen ke beech ka bachpana aur khayaal hamesha waisa hi rehta hai',
    ],
    linesEnglish: [
      'No matter how grown up our careers and calendars get',
      'The playful teasing and fierce loyalty between siblings never ages a day',
    ],
  },
  {
    title: 'सुकून भरा आशियाना',
    titleEnglish: 'Peaceful Nest',
    linesHindi: [
      'प्यार, सम्मान और थोड़ा सा सब्र — बस इन्हीं तीन चीज़ों से',
      'हर मकान एक खूबसूरत और खुशहाल घर बन जाया करता है',
    ],
    linesHinglish: [
      'Pyaar, sammaan aur thoda sa sabr — bas inheen teen cheezon se',
      'Har makaan ek khoobsurat aur khushhaal ghar ban jaaya karta hai',
    ],
    linesEnglish: [
      'Affection, respect, and daily patience—with those three quiet bricks',
      'Any ordinary house transforms into a deeply joyful home',
    ],
  },
  {
    title: 'ईश्वर का सबसे सुंदर तोहफ़ा',
    titleEnglish: 'Heaven’s Finest Gift',
    linesHindi: [
      'दुनिया में बहुत सी दौलतें होंगी किस्मत से मिलने वाली शायद',
      'पर एक हँसता-खेलता परिवार भगवान का सबसे सुंदर तोहफ़ा है',
    ],
    linesHinglish: [
      'Duniya mein bahut si daulatein hongi qismat se milne waali shaayad',
      'Par ek hansta-khelta parivaar Bhagwan ka sabse sundar tohfa hai',
    ],
    linesEnglish: [
      'Countless kinds of fortune exist out in this wide world',
      'Yet a loving, laughing family remains heaven’s finest gift of all',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'शाम की आरती और शांति',
    titleEnglish: 'Evening Lamps at Home',
    linesHindi: [
      'तुलसी के पास जलता शाम का दिया और परिवार की प्रार्थना',
      'ऐसा लगता है जैसे साक्षात सुकून घर में आकर बैठ गया हो',
    ],
    linesHinglish: [
      'Tulsi ke paas jalta shaam ka diya aur parivaar ki praarthna',
      'Aisa lagta hai jaise saakshaat sukoon ghar mein aakar baith gaya ho',
    ],
    linesEnglish: [
      'An evening diya flickering near the courtyard plant and soft family prayers',
      'Feels as though serenity itself walked indoors and pulled up a chair',
    ],
  },
  {
    title: 'मेहनत के पीछे परिवार',
    titleEnglish: 'Why I Work Hard',
    linesHindi: [
      'जब भी सुबह थकान की वजह से उठने का मन नहीं करता मेरा',
      'माँ-पापा के सपने याद आते ही अपने आप ताक़त आ जाती है',
    ],
    linesHinglish: [
      'Jab bhi subah thakaan ki wajah se uthne ka man nahin karta mera',
      'Maa-Papa ke sapne yaad aate hi apne aap taaqat aa jaati hai',
    ],
    linesEnglish: [
      'Whenever tiredness makes getting out of bed tough on cold mornings',
      'Remembering my parents’ quiet hopes restores my energy instantly',
    ],
  },
  {
    title: 'परिवार का साथ अनमोल',
    titleEnglish: 'Priceless Togetherness',
    linesHindi: [
      'ज़िंदगी के सबसे कठिन इम्तिहानों में भी डर नहीं लगा मुझे कभी',
      'क्योंकि पीछे मुड़ते ही पूरा परिवार मेरे साथ खड़ा दिखा हमेशा',
    ],
    linesHinglish: [
      'Zindagi ke sabse kathin imtihaanon mein bhi dar nahin laga mujhe kabhi',
      'Kyonki peechhe mudte hi poora parivaar mere saath khada dikha hamesha',
    ],
    linesEnglish: [
      'Even walking into life’s toughest tests, fear rarely shook me',
      'Because one glance over my shoulder always showed my family standing right there',
    ],
  },
  {
    title: 'छोटे घर की बड़ी खुशियाँ',
    titleEnglish: 'Big Joy Simple Roof',
    linesHindi: [
      'ज़्यादातर खुशियाँ बड़ी कोठियों की मोहताज नहीं होतीं मेरे दोस्त',
      'साफ नीयत और मिलजुलकर रहने वाला परिवार ही काफी होता है',
    ],
    linesHinglish: [
      'Zyaadatar khushiyaan badi kothiyon ki mohtaaj nahin hoteen mere dost',
      'Saaf niyat aur miljulkar rehne waala parivaar hi kaafi hota hai',
    ],
    linesEnglish: [
      'Real joy rarely requires marble hallways or giant mansions, friend',
      'Clean intentions and a family standing close together are always plenty',
    ],
  },
  {
    title: 'माँ का इंतज़ार',
    titleEnglish: 'Waiting at the Gate',
    linesHindi: [
      'चाहे कितनी भी देर हो जाए रात को घर पहुँचने में मुझको',
      'दरवाज़े के पास माँ आज भी जागकर रास्ता देखती मिलती हैं',
    ],
    linesHinglish: [
      'Chaahe kitni bhi der ho jaaye raat ko ghar pahunchne mein mujhko',
      'Darwaaze ke paas Maa aaj bhi jaagkar raasta dekhti milti hain',
    ],
    linesEnglish: [
      'No matter how late past midnight my train or work shift brings me back',
      'Mom is still waiting right beside the doorway checking the street for me',
    ],
  },
  {
    title: 'संस्कारों की जड़',
    titleEnglish: 'Values Taught Gently',
    linesHindi: [
      'दुनिया की बड़ी डिग्रियों से भी बड़ी सीख घर से मिलती है',
      'बड़ों से अदब और छोटों से प्यार यही परिवार सिखाता है',
    ],
    linesHinglish: [
      'Duniya ki badi degreeon se bhi badi seekh ghar se milti hai',
      'Badon se adab aur chhoton se pyaar yahi parivaar sikhaata hai',
    ],
    linesEnglish: [
      'Wisdom deeper than any framed degree begins at home',
      'How to treat elders with grace and little ones with kindness comes from family',
    ],
  },
  {
    title: 'मीठी चाय और गपशप',
    titleEnglish: 'Porch Tea and Talks',
    linesHindi: [
      'शाम को बरामदे में बैठकर सबके साथ दिन भर के किस्से सुनना',
      'दुनिया की सबसे सस्ती पर सबसे कीमती खुशी यही होती है',
    ],
    linesHinglish: [
      'Shaam ko baraamde mein baithkar sabke saath din bhar ke qisse sunna',
      'Duniya ki sabse sasti par sabse keemti khushi yahi hoti hai',
    ],
    linesEnglish: [
      'Sitting out on the porch at dusk swapping stories from everyone’s day',
      'Remains the simplest yet most priceless joy anyone could wish for',
    ],
  },
  {
    title: 'दुख बाँटने वाले अपने',
    titleEnglish: 'Sharing Every Weight',
    linesHindi: [
      'अजनबी भीड़ में तो लोग सिर्फ़ कारण पूछकर आगे बढ़ जाते हैं',
      'अपना परिवार ही बिना कहे आँसू पोंछकर गले लगाता है',
    ],
    linesHinglish: [
      'Ajnabi bheed mein to log sirf kaaran poochhkar aage badh jaate hain',
      'Apna parivaar hi bina kahe aansoo ponchhkar gale lagaata hai',
    ],
    linesEnglish: [
      'Passersby ask what went wrong out of curiosity and keep walking',
      'Only your own family wipes your tears quietly and pulls you close',
    ],
  },
  {
    title: 'दादाजी का अनुभव',
    titleEnglish: 'Grandpa’s Stories',
    linesHindi: [
      'दादाजी की पुरानी बातें आज भी किसी किताब से कम नहीं लगतीं',
      'हर किस्से में ज़िंदगी जीने का सच्चा सलीक़ा छिपा होता है',
    ],
    linesHinglish: [
      'Daadaaji ki purani baatein aaj bhi kisi kitaab se kam nahin lagteen',
      'Har qisse mein zindagi jeene ka saccha saleeqa chhipa hota hai',
    ],
    linesEnglish: [
      'Grandpa’s old stories carry more treasure than a whole shelf of books',
      'Hidden inside every memory sits quiet wisdom on how to live well',
    ],
  },
  {
    title: 'विश्वास की छत',
    titleEnglish: 'Roof of Trust',
    linesHindi: [
      'बाहर चाहे कितनी भी आँधी चले और लोग बदल जाएँ रोज़',
      'घर की चारदीवारी में आज भी भरोसा बिल्कुल महफ़ूज़ रहता है',
    ],
    linesHinglish: [
      'Baahar chaahe kitni bhi aandhi chale aur log badal jaayein roz',
      'Ghar ki chaardiwaari mein aaj bhi bharosa bilkul mehfooz rehta hai',
    ],
    linesEnglish: [
      'No matter how fiercely outside winds blow or faces shift around you',
      'Inside your family’s four walls, real trust stays completely intact',
    ],
  },
  {
    title: 'प्यार भरा सफ़र',
    titleEnglish: 'Journey Together',
    linesHindi: [
      'पैसे से घर में सामान तो बहुत सारे आ जाते हैं आजकल',
      'पर सुकून सिर्फ़ तभी आता है जब परिवार साथ बैठकर मुस्कुराए',
    ],
    linesHinglish: [
      'Paise se ghar mein saamaan to bahut saare aa jaate hain aajkal',
      'Par sukoon sirf tabhi aata hai jab parivaar saath baithkar muskuraaye',
    ],
    linesEnglish: [
      'Earnings easily fill living rooms with shiny furniture and screens',
      'Yet real warmth only shows up when the family sits down smiling together',
    ],
  },
  {
    title: 'पापा की खुशियाँ',
    titleEnglish: 'Simple Pride for Dad',
    linesHindi: [
      'ख़ुद के लिए कभी नया घड़ी-कपड़ा नहीं ख़रीदते मेरे पापा आसानी से',
      'और बच्चों की ख़्वाहिश सुनते ही अगले दिन लाकर रख देते हैं',
    ],
    linesHinglish: [
      'Khud ke liye kabhi naya ghadi-kapda nahin khareedte mere Papa aasaani se',
      'Aur bacchon ki khwaahish sunte hi agle din laakar rakh dete hain',
    ],
    linesEnglish: [
      'My father hesitates months before buying anything new for himself',
      'Yet hears one wish from his kids and brings it home the very next day',
    ],
  },
  {
    title: 'माँ का आशीर्वाद',
    titleEnglish: 'Maa’s Morning Touch',
    linesHindi: [
      'इम्तिहान हो या कोई नया काम, बस माँ के पैर छूकर निकलता हूँ',
      'लगता है आधी कामयाबी तो उनके आशीर्वाद से ही मिल गई',
    ],
    linesHinglish: [
      'Imtihaan ho ya koi naya kaam, bas Maa ke pair chhookar nikalta hoon',
      'Lagta hai aadhi kaamyaabi to unke aashirwaad se hi mil gayi',
    ],
    linesEnglish: [
      'Before any big exam or fresh leap, I seek my mother’s blessing first',
      'And walk out feeling half the success is already tucked safely with me',
    ],
  },
  {
    title: 'भाई का भरोसा',
    titleEnglish: 'Brother’s Backing',
    linesHindi: [
      'एक भाई साथ खड़ा हो तो इंसान आधी दुनिया से बेख़ौफ़ रहता है',
      'लड़ाई अपनी जगह है पर ज़रूरत में वही सबसे आगे खड़ा मिलता है',
    ],
    linesHinglish: [
      'Ek bhai saath khada ho to insaan aadhi duniya se bekhauf rehta hai',
      'Ladaai apni jagah hai par zaroorat mein wahi sabse aage khada milta hai',
    ],
    linesEnglish: [
      'With a loyal brother standing in your corner, fear shrinks to half',
      'Jokes and arguments aside, he always steps right in front when it matters',
    ],
  },
  {
    title: 'बहन की फ़िक्र',
    titleEnglish: 'Sister’s Care',
    linesHindi: [
      'घर में दूसरी माँ की तरह सबका ख़्याल रखती है एक बहन हमेशा',
      'उसकी हँसी और दुआएँ पूरे घर की रौनक बढ़ाती हैं',
    ],
    linesHinglish: [
      'Ghar mein doosri Maa ki tarah sabka khayaal rakhti hai ek behen hamesha',
      'Uski hansi aur duaayein poore ghar ki raunak badhaati hain',
    ],
    linesEnglish: [
      'A sister quietly watches out for everyone at home just like a second mom',
      'Her laughter and prayers brighten every corner of the house',
    ],
  },
  {
    title: 'परिवार की असली ताक़त',
    titleEnglish: 'Real Family Strength',
    linesHindi: [
      'जब हर सदस्य एक-दूसरे के सम्मान की रक्षा करना सीख ले घर में',
      'तो दुनिया की कोई भी ताक़त उस परिवार को तोड़ नहीं सकती',
    ],
    linesHinglish: [
      'Jab har sadasya ek-doosre ke sammaan ki raksha karna seekh le ghar mein',
      'To duniya ki koi bhi taaqat us parivaar ko tod nahin sakti',
    ],
    linesEnglish: [
      'When every person under one roof protects each other’s dignity gently',
      'No outside storm on earth can ever pull that family apart',
    ],
  },
  {
    title: 'सपनों को पंख देते अपने',
    titleEnglish: 'Family Fuels Dreams',
    linesHindi: [
      'ऊँची उड़ान भरने वाले बच्चों के पीछे अक्सर एक भरोसा खड़ा होता है',
      'जो घर से माता-पिता के रूप में हर पल हौसला देता रहता है',
    ],
    linesHinglish: [
      'Oonchi udaan bharne waale bacchon ke peechhe aksar ek bharosa khada hota hai',
      'Jo ghar se maata-pita ke roop mein har pal hausla deta rehta hai',
    ],
    linesEnglish: [
      'Behind every young dreamer soaring high stands steady quiet faith',
      'Parents cheering calmly from home through every single step',
    ],
  },
  {
    title: 'मीठी यादें घर की',
    titleEnglish: 'Sweet Home Moments',
    linesHindi: [
      'बिजली चले जाने पर छत पर बैठकर एक साथ गाना गाना याद है आज भी',
      'बिना किसी तकनीक के वो शामें सबसे ज़्यादा जुड़ी हुई लगती थीं',
    ],
    linesHinglish: [
      'Bijli chale jaane par chhat par baithkar ek saath gaana gaana yaad hai aaj bhi',
      'Bina kisi technique ke wo shaamein sabse zyada judi hui lagti theen',
    ],
    linesEnglish: [
      'Power cuts sending everyone onto the terrace singing songs under stars',
      'Without a single glowing screen, those evenings felt closer than anything',
    ],
  },
  {
    title: 'लौटने की ख़ुशी',
    titleEnglish: 'Joy of Returning',
    linesHindi: [
      'ट्रेन जैसे-जैसे अपने शहर के स्टेशन के करीब पहुँचने लगती है',
      'चेहरे पर घर वालों से मिलने की मुस्कान अपने आप फैल जाती है',
    ],
    linesHinglish: [
      'Train jaise-jaise apne shehar ke station ke kareeb pahunchne lagti hai',
      'Chehre par ghar waalon se milne ki muskaan apne aap phail jaati hai',
    ],
    linesEnglish: [
      'As the train slows near the platform of my hometown station',
      'An unstoppable smile spreads across my face thinking of everyone waiting',
    ],
  },
  {
    title: 'मेरा संसार, मेरा परिवार',
    titleEnglish: 'My Whole World',
    linesHindi: [
      'लोग कहते हैं कि दुनिया घूमकर देखो कितनी विशाल और सुंदर है',
      'मुझे तो मेरा पूरा संसार मेरे परिवार की मुस्कान में ही दिखता है',
    ],
    linesHinglish: [
      'Log kehte hain ki duniya ghoomkar dekho kitni vishaal aur sundar hai',
      'Mujhe to mera poora sansaar mere parivaar ki muskaan mein hi dikhta hai',
    ],
    linesEnglish: [
      'People tell you to travel far and see how vast the world stretches',
      'To me, my entire world fits warmly inside my family’s smile',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'ताक़त की असली जगह',
    titleEnglish: 'Source of Strength',
    linesHindi: [
      'जब भी बाहर की भीड़ में ख़ुद को थोड़ा थका हुआ पाता हूँ मैं',
      'परिवार की एक फ़ोन कॉल फिर से पूरी ताक़त लौटा देती है',
    ],
    linesHinglish: [
      'Jab bhi baahar ki bheed mein khud ko thoda thaka hua paata hoon main',
      'Parivaar ki ek phone call phir se poori taaqat lauta deti hai',
    ],
    linesEnglish: [
      'Whenever noisy weeks leave me feeling slightly worn thin inside',
      'One five-minute call home restores every ounce of my strength',
    ],
  },
  {
    title: 'अपनों की ख़ातिर',
    titleEnglish: 'For My Loved Ones',
    linesHindi: [
      'मेहनत करने का असली मज़ा तब आता है जब नतीजा घर वालों के काम आए',
      'उनके चेहरे का गर्व ही ज़िंदगी का सबसे बड़ा पुरस्कार होता है',
    ],
    linesHinglish: [
      'Mehnat karne ka asli maza tab aata hai jab nateeja ghar waalon ke kaam aaye',
      'Unke chehre ka garv hi zindagi ka sabse bada puraskaar hota hai',
    ],
    linesEnglish: [
      'Hard work truly feels rewarding the day it brings ease to everyone at home',
      'Seeing quiet pride on your parents’ faces is life’s highest award',
    ],
  },
  {
    title: 'बिना कहे समझ जाना',
    titleEnglish: 'Known Completely',
    linesHindi: [
      'बाहर वालों को तो पूरी कहानी समझाकर भी बात समझ नहीं आती',
      'माँ आवाज़ सुनते ही पहचान लेती हैं कि आज तबीयत ठीक नहीं है',
    ],
    linesHinglish: [
      'Baahar waalon ko to poori kahaani samjhaakar bhi baat samajh nahin aati',
      'Maa aawaaz sunte hi pehchaan leti hain ki aaj tabiyat theek nahin hai',
    ],
    linesEnglish: [
      'Outsiders sometimes miss your point even after twenty explanations',
      'Mom catches the second you say hello that your voice sounds slightly tired',
    ],
  },
  {
    title: 'घर का प्यार अमर',
    titleEnglish: 'Timeless Family Love',
    linesHindi: [
      'साल बदलते रहते हैं, उम्र के पड़ाव भी आगे निकलते जाते हैं',
      'पर घर के अंदर मिलने वाला अपनापन कभी पुराना नहीं होता',
    ],
    linesHinglish: [
      'Saal badalte rehte hain, umr ke padaav bhi aage nikalte jaate hain',
      'Par ghar ke andar milne waala apnaapan kabhi purana nahin hota',
    ],
    linesEnglish: [
      'Calendars flip swiftly and life carries us through brand-new decades',
      'Yet the tender warmth waiting back home never grows old',
    ],
  },
  {
    title: 'धैर्य की सीख घर से',
    titleEnglish: 'Patience Learned at Home',
    linesHindi: [
      'सबको साथ लेकर चलने का गुण किसी स्कूल में नहीं सिखाया जाता',
      'यह सुंदर कला इंसान हमेशा अपने संयुक्त परिवार से ही सीखता है',
    ],
    linesHinglish: [
      'Sabko saath lekar chalne ka gun kisi school mein nahin sikhaaya jaata',
      'Yeh sundar kala insaan hamesha apne sanyukt parivaar se hi seekhta hai',
    ],
    linesEnglish: [
      'How to bring diverse personalities along gently is never taught in textbooks',
      'You learn that generous art right inside a close, loving family',
    ],
  },
  {
    title: 'आँगन की धूप',
    titleEnglish: 'Courtyard Sunshine',
    linesHindi: [
      'सर्दियों की सुबह घर के आँगन में बैठकर धूप सेकने का आनंद',
      'दुनिया के किसी भी महँगे होटल की बालकनी में नहीं मिल सकता',
    ],
    linesHinglish: [
      'Sardiyon ki subah ghar ke aangan mein baithkar dhoop sekne ka aanand',
      'Duniya ke kisi bhi mehange hotel ki balcony mein nahin mil sakta',
    ],
    linesEnglish: [
      'Basking in winter morning sun inside your own quiet courtyard at home',
      'Cannot be matched by any luxury resort balcony anywhere on earth',
    ],
  },
  {
    title: 'माँ-बाप की दुआ का असर',
    titleEnglish: 'Power of Parents’ Prayer',
    linesHindi: [
      'कई बार अनजान ख़तरों से यूँ ही बचकर निकल आते हैं हम राह में',
      'पीछे मुड़कर देखते हैं तो माँ-बाप की दुआ काम आती दिखती है',
    ],
    linesHinglish: [
      'Kai baar anjaan khatron se yoon hi bachkar nikal aate hain hum raah mein',
      'Peechhe mudkar dekhte hain to Maa-Baap ki dua kaam aati dikhti hai',
    ],
    linesEnglish: [
      'More than once we steer cleanly past sudden trouble without noticing how',
      'Looking back later, you recognize your parents’ prayers standing guard',
    ],
  },
  {
    title: 'संयुक्त खुशी',
    titleEnglish: 'Multiplied Joy',
    linesHindi: [
      'एक की तरक़्क़ी पर पूरा घर मिठाई बाँटकर जश्न मनाता है जहाँ',
      'उस परिवार में बरकत और प्रेम हमेशा ठहर जाया करते हैं',
    ],
    linesHinglish: [
      'Ek ki taraqqi par poora ghar mithaai baantkar jashn manaata hai jahaan',
      'Us parivaar mein barkat aur prem hamesha thehar jaaya karte hain',
    ],
    linesEnglish: [
      'Where one member’s win sets the entire household sharing sweets happily',
      'Warmth and steady grace choose to stay inside that home forever',
    ],
  },
  {
    title: 'रिश्तों का सम्मान सबसे पहले',
    titleEnglish: 'Family Respect First',
    linesHindi: [
      'पैसे और अहंकार को कभी घर की दहलीज़ मत पार करने देना यारो',
      'वरना रिश्तों की सुंदर माला के मोती बिखरने में देर नहीं लगती',
    ],
    linesHinglish: [
      'Paise aur ahankaar ko kabhi ghar ki dehleez mat paar karne dena yaaro',
      'Warna rishton ki sundar maala ke moti bikharne mein der nahin lagti',
    ],
    linesEnglish: [
      'Never allow ego or pride over wealth to cross your front doorstep, friend',
      'Otherwise the precious pearls of family closeness scatter all too quickly',
    ],
  },
  {
    title: 'चुपचाप देखभाल',
    titleEnglish: 'Silent Care',
    linesHindi: [
      'बीमार पड़ने पर रात भर जागकर माथे पर पट्टी रखना बिना थके',
      'ऐसा निःस्वार्थ प्यार दुनिया में सिर्फ़ परिवार में ही दिखता है',
    ],
    linesHinglish: [
      'Beemaar padne par raat bhar jaagkar maathe par patti rakhna bina thake',
      'Aisa nihswaarth pyaar duniya mein sirf parivaar mein hi dikhta hai',
    ],
    linesEnglish: [
      'Sitting awake through the whole night tending a fever without one complaint',
      'Selfless care that pure exists almost nowhere outside your family',
    ],
  },
  {
    title: 'साथ का भरोसा',
    titleEnglish: 'Safety Net of Love',
    linesHindi: [
      'ज़िंदगी के झूले में चाहे जितनी ऊँचाई तक जाऊँ मैं आगे बढ़कर',
      'मन निश्चिंत रहता है कि नीचे परिवार की मज़बूत बाहें खुली हैं',
    ],
    linesHinglish: [
      'Zindagi ke jhoole mein chaahe jitni oonchaai tak jaaoon main aage badhkar',
      'Man nishchint rehta hai ki neeche parivaar ki mazboot baahein khuli hain',
    ],
    linesEnglish: [
      'No matter how boldly I swing upward chasing ambitious dreams',
      'My heart rests calm knowing strong family arms stand ready below',
    ],
  },
  {
    title: 'साधारण पल, अनमोल यादें',
    titleEnglish: 'Ordinary Golden Moments',
    linesHindi: [
      'एक साथ टीवी देखना, मज़ाक उड़ाना और रात को आइसक्रीम खाना',
      'बाद में यही साधारण शामें ज़िंदगी की सबसे सुंदर यादें बनती हैं',
    ],
    linesHinglish: [
      'Ek saath TV dekhna, mazaak udaana aur raat ko ice-cream khaana',
      'Baad mein yahi saadhaaran shaamein zindagi ki sabse sundar yaadein banti hain',
    ],
    linesEnglish: [
      'Teasing each other over old shows and splitting late-night ice cream together',
      'Years later, those ordinary evenings turn into your fondest memories',
    ],
  },
  {
    title: 'बड़ों की सलामती',
    titleEnglish: 'Elders at Home',
    linesHindi: [
      'जिनके साए में हमने पहला कदम चलना सीखा था बचपन के दिन में',
      'अब हमारी बारी है कि बुढ़ापे में उनका हाथ उतने ही प्यार से थामें',
    ],
    linesHinglish: [
      'Jinke saaye mein humne pehla qadam chalna seekha tha bachpan ke din mein',
      'Ab hamaari baari hai ki budhaape mein unka haath utne hi pyaar se thaamein',
    ],
    linesEnglish: [
      'In their shelter we took our very first wobbly childhood steps',
      'Now it is our joyful turn to steady their hands gently in later years',
    ],
  },
  {
    title: 'दिल की तसल्ली घर',
    titleEnglish: 'Heart Finds Peace Home',
    linesHindi: [
      'चाहे जितने बड़े होटल में ठहर आओ सफ़र के दौरान कभी भी',
      'असली सुकून की नींद अपने घर के तकिये पर आकर ही मिलती है',
    ],
    linesHinglish: [
      'Chaahe jitne bade hotel mein thehar aao safar ke dauraan kabhi bhi',
      'Asli sukoon ki neend apne ghar ke takiye par aakar hi milti hai',
    ],
    linesEnglish: [
      'No matter how grand the hotel suite feels along business trips',
      'Truly deep, untroubled sleep only arrives back upon your pillow at home',
    ],
  },
  {
    title: 'मेहनती पिता का गौरव',
    titleEnglish: 'Proud of Dad’s Grit',
    linesHindi: [
      'पिता के हाथों की सख़्ती उनके संघर्षों की गवाही देती है हमें',
      'ताकि बच्चों के हिस्से में हमेशा नरम और आसान राहें आ सकें',
    ],
    linesHinglish: [
      'Pita ke haathon ki sakhti unke sangharshon ki gawaahi deti hai humein',
      'Taaki bacchon ke hisse mein hamesha naram aur aasaan raahein aa sakein',
    ],
    linesEnglish: [
      'The calluses on a father’s palms quietly tell the story of his decades',
      'All endured gladly so his children’s footsteps could walk smoother paths',
    ],
  },
  {
    title: 'परिवार की रक्षा',
    titleEnglish: 'Guarding Family Peace',
    linesHindi: [
      'बाहर से लौटते समय सारा गुस्सा और चिड़चिड़ापन बाहर छोड़कर आइए',
      'घर के अंदर सिर्फ़ प्यार और मुस्कान लेकर प्रवेश कीजिएगा',
    ],
    linesHinglish: [
      'Baahar se laut-te samay saara gussa aur chidchidapan baahar chhodkar aaiye',
      'Ghar ke andar sirf pyaar aur muskaan lekar pravesh kijiyega',
    ],
    linesEnglish: [
      'Coming home at dusk, leave work irritation neatly outside the doorway',
      'Step indoors carrying only gentle warmth and an unhurried smile',
    ],
  },
  {
    title: 'सबके लिए जगह दिल में',
    titleEnglish: 'Room for Everyone',
    linesHindi: [
      'परिवार का दिल इतना बड़ा होता है कि हर गलती समा जाती है उसमें',
      'बस एक माफ़ी और एक झप्पी से सारे फासले मिट जाते हैं',
    ],
    linesHinglish: [
      'Parivaar ka dil itna bada hota hai ki har galti sama jaati hai usmein',
      'Bas ek maafi aur ek jhappi se saare faasle mit jaate hain',
    ],
    linesEnglish: [
      'A family’s heart stays wide enough to mend almost any honest mistake',
      'Just one sincere sorry and a tight hug erase weeks of distance',
    ],
  },
  {
    title: 'माँ की हँसी',
    titleEnglish: 'Mother’s Laughter',
    linesHindi: [
      'दुनिया की सबसे खूबसूरत तस्वीर किसी कैमरे से नहीं बनती कभी',
      'वो तो माँ के मुस्कुराते हुए चेहरे को देखकर ही बन जाती है',
    ],
    linesHinglish: [
      'Duniya ki sabse khoobsurat tasveer kisi camera se nahin banti kabhi',
      'Wo to Maa ke muskuraate hue chehre ko dekhkar hi ban jaati hai',
    ],
    linesEnglish: [
      'The finest portrait in the world is never captured by expensive lenses',
      'It shines simply in watching your mother laugh carefree and bright',
    ],
  },
  {
    title: 'अपनों की कदर समय पर',
    titleEnglish: 'Cherish While Here',
    linesHindi: [
      'जब तक माता-पिता का साया सिर पर है तब तक खुद को राजा समझिए',
      'उनके साथ बैठने का समय कभी बाद के लिए मत टालिए',
    ],
    linesHinglish: [
      'Jab tak maata-pita ka saaya sir par hai tab tak khud ko raja samjhiye',
      'Unke saath baithne ka samay kabhi baad ke liye mat taaliye',
    ],
    linesEnglish: [
      'As long as your parents stand under your sky, count yourself blessed royalty',
      'Never postpone sitting beside them today for some mythical free weekend later',
    ],
  },
  {
    title: 'सदाबहार घर',
    titleEnglish: 'Evergreen Home',
    linesHindi: [
      'बाग़ के फूल तो मौसम के साथ खिलते और मुरझाते रहते हैं',
      'परिवार का बगीचा हर मौसम में प्यार से हरा-भरा रहता है',
    ],
    linesHinglish: [
      'Baag ke phool to mausam ke saath khilte aur murjhaate rehte hain',
      'Parivaar ka bageecha har mausam mein pyaar se hara-bhara rehta hai',
    ],
    linesEnglish: [
      'Garden blossoms rise and fade strictly according to passing seasons',
      'The garden of a loving family stays green through every weather all year',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'दिल की पहली धड़कन परिवार',
    titleEnglish: 'First Belonging',
    linesHindi: [
      'दुनिया में आकर सबसे पहले जिस गोद में सुकून मिला था हमें',
      'ज़िंदगी के हर मोड़ पर वही परिवार हमारी पहली ताक़त रहता है',
    ],
    linesHinglish: [
      'Duniya mein aakar sabse pehle jis god mein sukoon mila tha humein',
      'Zindagi ke har mod par wahi parivaar hamaari pehli taaqat rehta hai',
    ],
    linesEnglish: [
      'The very first arms that held us safe on entering this wide world',
      'Stay our quiet anchor through every sharp turn down the road',
    ],
  },
  {
    title: 'मिलकर मनाए पल',
    titleEnglish: 'Shared Celebrations',
    linesHindi: [
      'ख़ुशी तभी दोगुनी लगती है जब पूरा घर एक साथ बैठकर हँसता है',
      'वरना अकेले में तो बड़े जश्न भी अधूरे से महसूस होते हैं',
    ],
    linesHinglish: [
      'Khushi tabhi doguni lagti hai jab poora ghar ek saath baithkar hansta hai',
      'Warna akele mein to bade jashn bhi adhoore se mehsoos hote hain',
    ],
    linesEnglish: [
      'Happiness only truly doubles when the whole family laughs around one table',
      'Without them near, even grand parties feel quietly half-finished',
    ],
  },
  {
    title: 'दुनिया के तानों के बीच पिता का यक़ीन',
    titleEnglish: 'Father’s Belief',
    linesHindi: [
      'जब सारी दुनिया ने मेरे सपनों को पागलपन कहकर हँस दिया था',
      'मेरे पिता ने कंधे पर हाथ रखकर कहा — आगे बढ़, मैं तेरे साथ हूँ',
    ],
    linesHinglish: [
      'Jab saari duniya ne mere sapnon ko paagalpan kehkar hans diya tha',
      'Mere pita ne kandhe par haath rakhkar kaha — aage badh, main tere saath hoon',
    ],
    linesEnglish: [
      'When onlookers scoffed at my bold ambitions as impractical',
      'My father rested a firm hand on my shoulder and said—keep going, I back you',
    ],
  },
  {
    title: 'माँ की गोद का सुख',
    titleEnglish: 'Comfort of Home',
    linesHindi: [
      'पूरी दुनिया के मखमली बिस्तर एक तरफ़ रख दीजिए आज भी',
      'माँ के आँचल की गर्माहट के बराबर कोई चीज़ नहीं बनी है',
    ],
    linesHinglish: [
      'Poori duniya ke makhmali bistar ek taraf rakh dijiye aaj bhi',
      'Maa ke aanchal ki garmaahat ke baraabar koi cheez nahin bani hai',
    ],
    linesEnglish: [
      'Set every velvet mattress in the finest hotels aside on one scale',
      'Nothing ever crafted compares to the safe warmth of a mother’s hug',
    ],
  },
  {
    title: 'परिवार की छाया',
    titleEnglish: 'Cooling Canopy',
    linesHindi: [
      'ज़िंदगी की कड़कड़ाती धूप में जब रास्ते पसीने से भर जाते हैं',
      'परिवार का साथ किसी घने बरगद की ठंडी छाँव जैसा लगता है',
    ],
    linesHinglish: [
      'Zindagi ki kadkadaati dhoop mein jab raaste paseene se bhar jaate hain',
      'Parivaar ka saath kisi ghane bargad ki thandi chhaanv jaisa lagta hai',
    ],
    linesEnglish: [
      'Under scorching midday struggles when paths feel dusty and steep',
      'Family stands over you like cool shade beneath an ancient banyan tree',
    ],
  },
  {
    title: 'छोटी सी माफ़ी से बचाव',
    titleEnglish: 'Soft Words Save Ties',
    linesHindi: [
      'घर में बड़े होने का मतलब हर बार सही साबित होना नहीं होता',
      'कभी-कभी मुस्कुराकर मान लेना पूरे घर की शांति बचा लेता है',
    ],
    linesHinglish: [
      'Ghar mein bade hone ka matlab har baar sahi saabit hona nahin hota',
      'Kabhi-kabhi muskuraakar maan lena poore ghar ki shaanti bacha leta hai',
    ],
    linesEnglish: [
      'Being wise at home never means winning every minor debate',
      'Smiling softly and letting small things go protects harmony for everyone',
    ],
  },
  {
    title: 'हँसते चेहरों की रौनक',
    titleEnglish: 'Glowing Home Faces',
    linesHindi: [
      'घर की असली सजावट किसी महँगे झूमर या पर्दे से नहीं होती',
      'वहाँ रहने वालों की मुस्कान ही घर को सबसे खूबसूरत बनाती है',
    ],
    linesHinglish: [
      'Ghar ki asli sajaawat kisi mehange jhoomar ya parde se nahin hoti',
      'Wahaan rehne waalon ki muskaan hi ghar ko sabse khoobsurat banaati hai',
    ],
    linesEnglish: [
      'A home’s finest charm never hangs from expensive chandeliers or drapes',
      'The genuine smiles of the people living inside beautify every room',
    ],
  },
  {
    title: 'छुट्टियों में गूँजते बचपन के क़िस्से',
    titleEnglish: 'Childhood Mischief',
    linesHindi: [
      'आज भी छुट्टियों में सब बैठकर उन पुरानी शरारतों पर हँसते हैं',
      'जहाँ माँ की डाँट और पापा के छुपे हुए लाड़ दोनों याद आते हैं',
    ],
    linesHinglish: [
      'Aaj bhi chhuttiyon mein sab baithkar un purani sharaaraton par hanste hain',
      'Jahaan Maa ki daant aur Papa ke chhupe hue laad donon yaad aate hain',
    ],
    linesEnglish: [
      'Even today during holidays, we gather laughing over childhood mischief',
      'Recalling Mom’s playful scolding alongside Dad’s quiet hidden grins',
    ],
  },
  {
    title: 'घर लौटकर बेफ़िक्र बोलने का सुकून',
    titleEnglish: 'Real Belonging',
    linesHindi: [
      'दुनिया की हर महफ़िल में इंसान को थोड़ा संभलकर बोलना पड़ता है',
      'बस अपना घर ही है जहाँ बिना सोचे दिल की बात निकलती है',
    ],
    linesHinglish: [
      'Duniya ki har mehfil mein insaan ko thoda sambhalkar bolna padta hai',
      'Bas apna ghar hi hai jahaan bina soche dil ki baat nikalti hai',
    ],
    linesEnglish: [
      'In almost every outside room, people filter what they say carefully',
      'Only at home can your heart speak freely without wearing armor',
    ],
  },
  {
    title: 'बड़ों का आशीष हमेशा',
    titleEnglish: 'Protected by Elders',
    linesHindi: [
      'घर से निकलते समय बुज़ुर्गों की एक दुआ साथ मिल जाए जब',
      'तो पूरा दिन किसी अनदेखे डर के बिना गुज़र जाता है तब',
    ],
    linesHinglish: [
      'Ghar se nikalte samay buzurgon ki ek dua saath mil jaaye jab',
      'To poora din kisi andekhe dar ke bina guzar jaata hai tab',
    ],
    linesEnglish: [
      'Stepping out the gate wrapped inside one elder’s morning blessing',
      'Lets the entire day unfold calm, safe, and steady',
    ],
  },
  {
    title: 'परिवार और वक़्त',
    titleEnglish: 'Gift Your Time',
    linesHindi: [
      'काम और फ़ोन की दुनिया तो कल भी यहीं मिलने वाली है आपको',
      'पर माता-पिता के साथ बिताए ये शामें दुबारा लौटकर न आएँगी',
    ],
    linesHinglish: [
      'Kaam aur phone ki duniya to kal bhi yaheen milne waali hai aapko',
      'Par maata-pita ke saath bitaaye ye shaamein dubaara lautkar na aayengi',
    ],
    linesEnglish: [
      'Work emails and scrolling screens will wait right where you left them tomorrow',
      'Quiet evenings sitting beside your parents never circle back twice',
    ],
  },
  {
    title: 'साझा सपने',
    titleEnglish: 'Shared Family Dreams',
    linesHindi: [
      'अकेले देखा हुआ सपना सिर्फ़ मेरी ख़ुशी तक सीमित रहता है',
      'जब परिवार के सपने पूरे हों तो पूरा आँगन रोशन हो उठता है',
    ],
    linesHinglish: [
      'Akele dekha hua sapna sirf meri khushi tak seemit rehta hai',
      'Jab parivaar ke sapne poore hon to poora aangan roshan ho uthta hai',
    ],
    linesEnglish: [
      'A solo dream ends at your own small doorway',
      'When a family’s shared dream comes true, the whole house shines',
    ],
  },
  {
    title: 'माँ की सादगी',
    titleEnglish: 'Mom’s Simple Grace',
    linesHindi: [
      'बाक़ी सबके लिए पचास पकवान बनाती हैं बिना एक बार थके हुए',
      'और ख़ुद की बारी आने पर कहती हैं — मेरा तो मन भर गया देखकर ही',
    ],
    linesHinglish: [
      'Baaqi sabke liye pachaas pakwaan banaati hain bina ek baar thake hue',
      'Aur khud ki baari aane par kehti hain — mera to man bhar gaya dekhkar hi',
    ],
    linesEnglish: [
      'Cooking a feast tirelessly so everyone else eats until full and happy',
      'Then smiling softly saying—just watching you enjoy it fills me up',
    ],
  },
  {
    title: 'पापा की खामोशी में प्यार',
    titleEnglish: 'Quiet Strength of Dad',
    linesHindi: [
      'पापा की डाँट में भी कभी नफ़रत नहीं, बस हमारी फिक्र छुपी होती है',
      'ज़िंदगी की ठोकरें खाने के बाद ही उनकी हर बात समझ आती है',
    ],
    linesHinglish: [
      'Papa ki daant mein bhi kabhi nafrat nahin, bas hamaari fikr chhipi hoti hai',
      'Zindagi ki thokarein khaane ke baad hi unki har baat samajh aati hai',
    ],
    linesEnglish: [
      'Even inside Dad’s stern advice, there is never anger—only fierce care',
      'Only after walking into real adulthood does every word of his make full sense',
    ],
  },
  {
    title: 'एकता की ताक़त',
    titleEnglish: 'Strength in Unity',
    linesHindi: [
      'घर में जब सब एक स्वर में एक-दूसरे के साथ खड़े हो जाते हैं',
      'तो कठिन से कठिन समय भी पानी की तरह बह निकलता है',
    ],
    linesHinglish: [
      'Ghar mein jab sab ek swar mein ek-doosre ke saath khade ho jaate hain',
      'To kathin se kathin samay bhi paani ki tarah beh nikalta hai',
    ],
    linesEnglish: [
      'When everyone in a household stands shoulder to shoulder in harmony',
      'Even the heaviest season flows smoothly past like clear water',
    ],
  },
  {
    title: 'अजनबी भीड़ में अपना नाम',
    titleEnglish: 'Roots Remembered',
    linesHindi: [
      'बड़े शहर में मुझे कोई मेरे नाम से जाने या न जाने क्या फ़र्क़',
      'गाँव के घर में आज भी मेरा नाम सुनते ही दादी मुस्कुराती हैं',
    ],
    linesHinglish: [
      'Bade shehar mein mujhe koi mere naam se jaane ya na jaane kya farq',
      'Gaanv ke ghar mein aaj bhi mera naam sunte hi daadi muskuraati hain',
    ],
    linesEnglish: [
      'Whether anyone knows my name across giant city avenues barely matters',
      'Back home in our courtyard, Grandma still beams the second someone mentions me',
    ],
  },
  {
    title: 'प्यार भरा संसार',
    titleEnglish: 'World Built on Care',
    linesHindi: [
      'जहाँ हर सुबह चाय के साथ सबका हाल-चाल पूछा जाता हो प्यार से',
      'वो छोटा सा घर दुनिया के सबसे अमीर महलों से बढ़कर होता है',
    ],
    linesHinglish: [
      'Jahaan har subah chai ke saath sabka haal-chaal poochha jaata ho pyaar se',
      'Wo chhota sa ghar duniya ke sabse ameer mehalon se badhkar hota hai',
    ],
    linesEnglish: [
      'Where every morning begins checking warmly on each other over tea',
      'That humble home stands richer than the grandest marble palace',
    ],
  },
  {
    title: 'परिवार की याद',
    titleEnglish: 'Longing for Home',
    linesHindi: [
      'कमरे के सन्नाटे में जब कभी बाहर काम का बोझ भारी लगने लगे',
      'घर की पुरानी तस्वीरें देखते ही चेहरे पर मुस्कान लौट आती है',
    ],
    linesHinglish: [
      'Kamre ke sannaate mein jab kabhi baahar kaam ka bojh bhaari lagne lage',
      'Ghar ki purani tasveerein dekhte hi chehre par muskaan laut aati hai',
    ],
    linesEnglish: [
      'Alone in a rented apartment when career stress starts pressing heavy',
      'Looking once at old family snapshots brings my smile right back',
    ],
  },
  {
    title: 'सच्ची सुरक्षा',
    titleEnglish: 'Warmest Shelter',
    linesHindi: [
      'पैसे और शोहरत का कोई भरोसा नहीं कि कब साथ छोड़ जाएँगे',
      'परिवार का प्यार वो दौलत है जो हर मोड़ पर साथ निभाता है',
    ],
    linesHinglish: [
      'Paise aur shohrat ka koi bharosa nahin ki kab saath chhod jaayenge',
      'Parivaar ka pyaar wo daulat hai jo har mod par saath nibhaata hai',
    ],
    linesEnglish: [
      'Titles and bank balances come and go with shifting winds',
      'Family love stays the one steady wealth holding true at every turn',
    ],
  },
  {
    title: 'दिल से दुआ घर के लिए',
    titleEnglish: 'Blessing Our Home',
    linesHindi: [
      'किसी की नज़र न लगे मेरे हँसते-मुस्कुराते परिवार को कभी',
      'ईश्वर करे हर दिन ऐसे ही प्यार और एकता के साथ बीते',
    ],
    linesHinglish: [
      'Kisi ki nazar na lage mere hanste-muskuraate parivaar ko kabhi',
      'Ishwar kare har din aise hi pyaar aur ekta ke saath beete',
    ],
    linesEnglish: [
      'May steady grace shield my smiling family from every shadow',
      'And may every coming year keep us wrapped in this same warmth and unity',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'घर की राह सबसे प्यारी',
    titleEnglish: 'Sweetest Road Home',
    linesHindi: [
      'दुनिया की सबसे सुंदर सड़क वही लगती है आँखों को हमेशा',
      'जो हमें सीधे अपने माँ-पापा के आँगन तक ले जाती है',
    ],
    linesHinglish: [
      'Duniya ki sabse sundar sadak wahi lagti hai aankhon ko hamesha',
      'Jo humein seedhe apne Maa-Papa ke aangan tak le jaati hai',
    ],
    linesEnglish: [
      'The loveliest road on earth will always look the same to my eyes',
      'The one leading straight back onto my parents’ welcoming porch',
    ],
  },
  {
    title: 'मुस्कान की वजह परिवार',
    titleEnglish: 'Reason I Smile',
    linesHindi: [
      'थके हुए घर आओ और छोटा बच्चा दौड़कर गले से लग जाए',
      'लगता है सारी दुनिया की दौलत एक झटके में मिल गई हो',
    ],
    linesHinglish: [
      'Thake hue ghar aao aur chhota baccha daudkar gale se lag jaaye',
      'Lagta hai saari duniya ki daulat ek jhatke mein mil gayi ho',
    ],
    linesEnglish: [
      'Walk indoors exhausted and watch a little one sprint straight into your arms',
      'Suddenly it feels like you hold every treasure in the universe',
    ],
  },
  {
    title: 'भाई-बहन का साथ',
    titleEnglish: 'Lifelong Friends at Home',
    linesHindi: [
      'माँ-बाप के बाद अगर कोई बिना कहे मन की बात समझ लेता है',
      'तो वो बचपन के साथी यानी अपने भाई-बहन ही होते हैं',
    ],
    linesHinglish: [
      'Maa-Baap ke baad agar koi bina kahe man ki baat samajh leta hai',
      'To wo bachpan ke saathi yaani apne bhai-behen hi hote hain',
    ],
    linesEnglish: [
      'After parents, if anyone reads your silent moods effortlessly',
      'It is the brothers and sisters who grew up right beside you',
    ],
  },
  {
    title: 'त्याग और प्रेम',
    titleEnglish: 'Quiet Devotion',
    linesHindi: [
      'परिवार में प्यार का मतलब सिर्फ़ मीठे शब्द बोलना नहीं होता',
      'एक-दूसरे के बुरे वक़्त में कंधे से कंधा मिलाकर खड़ा रहना होता है',
    ],
    linesHinglish: [
      'Parivaar mein pyaar ka matlab sirf meethe shabd bolna nahin hota',
      'Ek-doosre ke bure waqt mein kandhe se kandha milaakar khada rehna hota hai',
    ],
    linesEnglish: [
      'Love inside a family is never just polite holiday speeches',
      'It is standing shoulder to shoulder when life turns heavy and uncertain',
    ],
  },
  {
    title: 'खुशहाल आँगन',
    titleEnglish: 'Joyful Courtyard',
    linesHindi: [
      'जहाँ सुबह की शुरुआत बड़ों के चरण स्पर्श से होती हो हर रोज़',
      'वहाँ का हर दिन किसी न किसी शुभ समाचार से सजता है',
    ],
    linesHinglish: [
      'Jahaan subah ki shuruaat badon ke charan sparsh se hoti ho har roz',
      'Wahaan ka har din kisi na kisi shubh samaachaar se sajta hai',
    ],
    linesEnglish: [
      'Where mornings begin honoring elders with sincere respect every day',
      'Good grace and peaceful tidings always find their way inside',
    ],
  },
  {
    title: 'हर तूफ़ान के सामने अडिग घर की छत',
    titleEnglish: 'Safe Harbor',
    linesHindi: [
      'बाहर के तूफ़ान चाहे जितनी ज़ोर से टकराएँ नाव से मेरी',
      'परिवार ही वो बंदरगाह है जहाँ आकर हर डर शांत हो जाता है',
    ],
    linesHinglish: [
      'Baahar ke toofaan chaahe jitni zor se takraayein naav se meri',
      'Parivaar hi wo bandargaah hai jahaan aakar har dar shaant ho jaata hai',
    ],
    linesEnglish: [
      'No matter how fiercely open waters toss my small boat around',
      'Family remains the calm harbor where every storm grows quiet',
    ],
  },
  {
    title: 'माँ के हाथों की चाय',
    titleEnglish: 'Tea Made by Mom',
    linesHindi: [
      'कैफ़े की महँगी चाय में भी वह स्वाद कभी नहीं आ सकता',
      'जो बारिश की शाम को माँ के हाथ से बनी अदरक वाली चाय में है',
    ],
    linesHinglish: [
      'Cafe ki mehangi chai mein bhi wah swaad kabhi nahin aa sakta',
      'Jo baarish ki shaam ko Maa ke haath se bani adrak waali chai mein hai',
    ],
    linesEnglish: [
      'No trendy cafe brew could ever come close to matching that cup',
      'Of warm ginger tea made by Mom on a rainy late afternoon',
    ],
  },
  {
    title: 'पापा की निस्वार्थ मेहनत',
    titleEnglish: 'Dad’s Quiet Effort',
    linesHindi: [
      'चेहरे पर मुस्कान रखकर घर की सारी ज़िम्मेदारी उठा लेना अकेले',
      'पापा जैसा मज़बूत किरदार इस दुनिया में दूसरा कोई नहीं होता',
    ],
    linesHinglish: [
      'Chehre par muskaan rakhkar ghar ki saari zimmedaari utha lena akele',
      'Papa jaisa mazboot kirdaar is duniya mein doosra koi nahin hota',
    ],
    linesEnglish: [
      'Carrying the weight of an entire household steadily with a calm face',
      'No strength on earth compares quietly to a devoted father’s heart',
    ],
  },
  {
    title: 'दूरियों से भी न टूटने वाला रिश्ता',
    titleEnglish: 'Ties That Hold',
    linesHindi: [
      'कितने भी दूर निकल जाएँ हम जीवन की राहों पर चलते हुए',
      'घर की देहरी पर लौटते ही मन फिर से बच्चा बन जाता है',
    ],
    linesHinglish: [
      'Kitne bhi door nikal jaayein hum jeevan ki raahon par chalte hue',
      'Ghar ki dehri par laut-te hi man phir se baccha ban jaata hai',
    ],
    linesEnglish: [
      'However far ambition takes us down winding highways of the world',
      'Stepping back across home’s threshold turns the heart young again instantly',
    ],
  },
  {
    title: 'बड़ों की सीख',
    titleEnglish: 'Priceless Guidance',
    linesHindi: [
      'जवानी के जोश में जो बातें कभी पुरानी और बेकार लगती थीं हमें',
      'ज़िंदगी के इम्तिहान में वही बुज़ुर्गों की बातें सबसे सही निकलीं',
    ],
    linesHinglish: [
      'Jawaani ke josh mein jo baatein kabhi purani aur bekaar lagti theen humein',
      'Zindagi ke imtihaan mein wahi buzurgon ki baatein sabse sahi nikleen',
    ],
    linesEnglish: [
      'Advice from elders that sounded old-fashioned in our impatient youth',
      'Turned out remarkably wise the very moment real life tested us',
    ],
  },
  {
    title: 'प्यार भरी शाम',
    titleEnglish: 'Warm Evening at Home',
    linesHindi: [
      'काम के बाद घर आकर एक साथ बैठना भी किसी दवा से कम नहीं',
      'अपनों की हँसी देखते ही आधी थकान अपने आप भाग जाती है',
    ],
    linesHinglish: [
      'Kaam ke baad ghar aakar ek saath baithna bhi kisi dawa se kam nahin',
      'Apnon ki hansi dekhte hi aadhi thakaan apne aap bhaag jaati hai',
    ],
    linesEnglish: [
      'Sitting down together after work heals faster than any medicine',
      'One burst of family laughter chases half your exhaustion right away',
    ],
  },
  {
    title: 'खुशियों की नींव',
    titleEnglish: 'Foundation of Joy',
    linesHindi: [
      'सुख हो या दुख, हर मौसम में एक छत के नीचे खड़े रहना ही परिवार है',
      'इसी भरोसे पर इंसान बड़ी से बड़ी जंग जीत जाता है',
    ],
    linesHinglish: [
      'Sukh ho ya dukh, har mausam mein ek chhat ke neeche khade rehna hi parivaar hai',
      'Isi bharose par insaan badi se badi jung jeet jaata hai',
    ],
    linesEnglish: [
      'Standing together under one roof through sunshine and heavy rain—that is family',
      'Backed by that trust, anyone can overcome life’s steepest battles',
    ],
  },
  {
    title: 'मंच की ताली से बड़ा घर का मान',
    titleEnglish: 'True Respect',
    linesHindi: [
      'बाहर दुनिया से कितनी भी तालियाँ मिलें मंच पर खड़े होकर',
      'घर वालों की आँखों में इज़्ज़त देखना सबसे बड़ी बात होती है',
    ],
    linesHinglish: [
      'Baahar duniya se kitni bhi taaliyaan milein manch par khade hokar',
      'Ghar waalon ki aankhon mein izzat dekhna sabse badi baat hoti hai',
    ],
    linesEnglish: [
      'No matter how loud crowds clap beneath bright public stages',
      'Seeing genuine respect inside your family’s eyes means everything',
    ],
  },
  {
    title: 'माँ की आवाज़',
    titleEnglish: 'Comforting Voice',
    linesHindi: [
      'दुनिया की कोई भी धुन इतनी मीठी नहीं लगती कानों को मेरे',
      'जितनी सुबह-सुबह माँ का प्यार से नाम लेकर जगाना लगता है',
    ],
    linesHinglish: [
      'Duniya ki koi bhi dhun itni meethi nahin lagti kaanon ko mere',
      'Jitni subah-subah Maa ka pyaar se naam lekar jagaana lagta hai',
    ],
    linesEnglish: [
      'No favorite melody sounds sweeter to my ears',
      'Than Mom softly calling my name to wake up on a peaceful morning',
    ],
  },
  {
    title: 'पापा का गर्व',
    titleEnglish: 'Father’s Quiet Pride',
    linesHindi: [
      'जिस दिन कोई अजनबी आकर पापा से मेरी अच्छाई की बात करे',
      'उस दिन पापा का सीना गर्व से और भी चौड़ा हो जाता है',
    ],
    linesHinglish: [
      'Jis din koi ajnabi aakar Papa se meri acchaai ki baat kare',
      'Us din Papa ka seena garv se aur bhi chauda ho jaata hai',
    ],
    linesEnglish: [
      'The day a stranger walks up to tell Dad something kind about my work',
      'My father’s chest swells taller with a pride words cannot hold',
    ],
  },
  {
    title: 'अपनों की हिफ़ाज़त',
    titleEnglish: 'Watching Over Each Other',
    linesHindi: [
      'परिवार का मतलब है कोई एक गिरे तो बाकी सब हाथ बढ़ा दें तुरंत',
      'जहाँ हार में भी कोई अकेला न पड़े वही असली घर होता है',
    ],
    linesHinglish: [
      'Parivaar ka matlab hai koi ek gire to baaqi sab haath badha dein turant',
      'Jahaan haar mein bhi koi akela na pade wahi asli ghar hota hai',
    ],
    linesEnglish: [
      'Family means the second one person stumbles, five hands reach down fast',
      'A place where nobody ever faces defeat alone—that is real home',
    ],
  },
  {
    title: 'बचपन का वह कमरा',
    titleEnglish: 'Old Childhood Room',
    linesHindi: [
      'आज भी छुट्टियों में जब अपने पुराने कमरे में सोता हूँ घर जाकर',
      'लगता है सारी दुनिया की चिंताएँ दरवाज़े के बाहर ही रह गईं',
    ],
    linesHinglish: [
      'Aaj bhi chhuttiyon mein jab apne purane kamre mein sota hoon ghar jaakar',
      'Lagta hai saari duniya ki chintaayein darwaaze ke baahar hi reh gayeen',
    ],
    linesEnglish: [
      'Whenever I sleep back inside my old childhood bedroom during holidays',
      'Every adult worry seems to stay locked neatly outside the door',
    ],
  },
  {
    title: 'रिश्तों का इत्र',
    titleEnglish: 'Fragrance of Family',
    linesHindi: [
      'प्यार, सम्मान और अपनापन वह इत्र है मेरे प्यारे दोस्त',
      'जिससे पूरे परिवार का माहौल हमेशा महकता रहता है',
    ],
    linesHinglish: [
      'Pyaar, sammaan aur apnaapan wah itr hai mere pyaare dost',
      'Jisse poore parivaar ka maahaul hamesha mehakta rehta hai',
    ],
    linesEnglish: [
      'Affection, respect, and quiet kindness act like gentle perfume',
      'Keeping the entire atmosphere of a home fresh and welcoming always',
    ],
  },
  {
    title: 'सबके चेहरों पर हँसी',
    titleEnglish: 'All Faces Smiling',
    linesHindi: [
      'मेरी मेहनत बस इतनी सी बात के लिए है हर रोज़ सुबह से शाम',
      'कि मेरे परिवार को कभी किसी के आगे हाथ न फैलाना पड़े',
    ],
    linesHinglish: [
      'Meri mehnat bas itni si baat ke liye hai har roz subah se shaam',
      'Ki mere parivaar ko kabhi kisi ke aage haath na phailaana pade',
    ],
    linesEnglish: [
      'Every hour I grind from morning till dusk comes down to one quiet wish',
      'That my family stands proud and comfortable without ever needing favors',
    ],
  },
  {
    title: 'जीवन का असली धन',
    titleEnglish: 'True Treasure of Life',
    linesHindi: [
      'धन-दौलत आती-जाती रहती है समय के साथ इस संसार में',
      'परिवार का साथ ही मनुष्य का सबसे सच्चा और स्थायी धन है',
    ],
    linesHinglish: [
      'Dhan-daulat aati-jaati rehti hai samay ke saath is sansaar mein',
      'Parivaar ka saath hi manushya ka sabse saccha aur sthaayi dhan hai',
    ],
    linesEnglish: [
      'Material fortune ebbs and flows continuously across a lifetime',
      'A loving, supportive family stays our truest and most lasting treasure',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'अपनों की छाया में सुख',
    titleEnglish: 'Ease Among Loved Ones',
    linesHindi: [
      'दुनिया की सबसे बड़ी चिंता भी छोटी लगती है उस शाम को',
      'जब माँ सिर पर हाथ रखकर कहती हैं — सब ठीक हो जाएगा बेटा',
    ],
    linesHinglish: [
      'Duniya ki sabse badi chinta bhi chhoti lagti hai us shaam ko',
      'Jab Maa sir par haath rakhkar kehti hain — sab theek ho jaayega beta',
    ],
    linesEnglish: [
      'Even the heaviest problem shrinks down immediately that evening',
      'When Mom rests a gentle hand on your head saying—everything will turn out fine',
    ],
  },
  {
    title: 'सच्ची एकता का घर',
    titleEnglish: 'House of Harmony',
    linesHindi: [
      'बड़े घरों में अक्सर लोग अलग-अलग कमरों में गुम रहते हैं आजकल',
      'पर जहां एक कमरे में बैठकर सब हँसते हैं वहीं जन्नत बसती है',
    ],
    linesHinglish: [
      'Bade gharon mein aksar log alag-alag kamron mein gum rehte hain aajkal',
      'Par jahaan ek kamre mein baithkar sab hanste hain waheen jannat basti hai',
    ],
    linesEnglish: [
      'Inside huge modern houses, people often drift apart behind shut doors',
      'Where everyone crowds happily into one room laughing together—that is heaven',
    ],
  },
  {
    title: 'माँ-बाप की सेवा',
    titleEnglish: 'Caring for Parents',
    linesHindi: [
      'तीर्थ यात्राओं में भटकने से पहले घर के मंदिर में देख लीजिए',
      'माता-पिता की मुस्कान से बढ़कर कोई पुण्य नहीं होता संसार में',
    ],
    linesHinglish: [
      'Teerth yatraon mein bhatakne se pehle ghar ke mandir mein dekh lijiye',
      'Maata-pita ki muskaan se badhkar koi punya nahin hota sansaar mein',
    ],
    linesEnglish: [
      'Before traveling far across distant shrines, look right inside your own home',
      'Few blessings compare to keeping a peaceful smile on your parents’ faces',
    ],
  },
  {
    title: 'पापा के साए में हिम्मत',
    titleEnglish: 'Courage Under Dad’s Wing',
    linesHindi: [
      'भले ही पापा अब थोड़े बुज़ुर्ग होने लगे हैं वक़्त के साथ धीरे-धीरे',
      'पर उनकी एक हाँ आज भी सौ लोगों की फ़ौज के बराबर हिम्मत देती है',
    ],
    linesHinglish: [
      'Bhale hi Papa ab thode buzurg hone lage hain waqt ke saath dheere-dheere',
      'Par unki ek haan aaj bhi sau logon ki fauj ke baraabar himmat deti hai',
    ],
    linesEnglish: [
      'Even as silver hairs arrive gently with passing years on Dad’s head',
      'One calm nod of support from him still gives me the strength of a hundred',
    ],
  },
  {
    title: 'घर की यादों की खुशबू',
    titleEnglish: 'Scent of Home Memories',
    linesHindi: [
      'नए शहर की हर सुबह चाय पीते वक़्त घर बहुत याद आता है',
      'पापा का अख़बार पढ़ना और माँ की रसोई की आवाज़ें कानों में गूँजती हैं',
    ],
    linesHinglish: [
      'Naye shehar ki har subah chai peete waqt ghar bahut yaad aata hai',
      'Papa ka akhbaar padhna aur Maa ki rasoi ki aawaazein kaanon mein goonjti hain',
    ],
    linesEnglish: [
      'Every morning sipping tea in a new city brings vivid waves of homesickness',
      'Dad rustling the morning paper and Mom bustling softly in the kitchen',
    ],
  },
  {
    title: 'बिन कहे प्यार',
    titleEnglish: 'Unspoken Family Love',
    linesHindi: [
      'हम भारतीय परिवारों में रोज़ आई लव यू कहने का रिवाज़ भले न हो',
      'पर रात को घर लौटने तक इंतज़ार करना ही सबसे बड़ा प्यार है',
    ],
    linesHinglish: [
      'Hum bhaaratiya parivaaron mein roz I love you kehne ka riwaaz bhale na ho',
      'Par raat ko ghar lautne tak intezaar karna hi sabse bada pyaar hai',
    ],
    linesEnglish: [
      'Our homes may not say fancy affectionate lines out loud every day',
      'Yet keeping warm dinner covered until you step safely home says love louder',
    ],
  },
  {
    title: 'रिश्तों को संभालना',
    titleEnglish: 'Protecting Ties',
    linesHindi: [
      'बाहर के लोगों को जीतने से पहले अपने परिवार का दिल जीतना ज़रूरी है',
      'क्योंकि अंतिम समय तक यही लोग आपके पास खड़े रहते हैं',
    ],
    linesHinglish: [
      'Baahar ke logon ko jeetne se pehle apne parivaar ka dil jeetna zaroori hai',
      'Kyonki antim samay tak yahi log aapke paas khade rehte hain',
    ],
    linesEnglish: [
      'Before rushing out to impress strangers, guard the warmth inside your own home',
      'Because when seasons turn late, family remains standing right beside you',
    ],
  },
  {
    title: 'साथ की ताक़त',
    titleEnglish: 'Stronger as One',
    linesHindi: [
      'ज़िंदगी के हर उतार-चढ़ाव में एक चीज़ हमेशा अडिग रहती है',
      'परिवार का साथ हो तो कोई भी राह नामुमकिन नहीं लगती',
    ],
    linesHinglish: [
      'Zindagi ke har utaar-chadhaav mein ek cheez hamesha adig rehti hai',
      'Parivaar ka saath ho to koi bhi raah naamumkin nahin lagti',
    ],
    linesEnglish: [
      'Through every unexpected twist and dip of life, one anchor stays constant',
      'With your family standing united, no uphill climb feels impossible',
    ],
  },
  {
    title: 'माँ की दुआ का असर',
    titleEnglish: 'Power of Maa’s Blessing',
    linesHindi: [
      'जब पूरी दुनिया दरवाज़ा बंद कर ले मुंह पर किसी मुश्किल घड़ी में',
      'माँ का प्यार और परिवार का आँगन हमेशा खुला मिलता है',
    ],
    linesHinglish: [
      'Jab poori duniya darwaaza band kar le munh par kisi mushkil ghadi mein',
      'Maa ka pyaar aur parivaar ka aangan hamesha khula milta hai',
    ],
    linesEnglish: [
      'When harsh seasons slam outside doors right in your face',
      'A mother’s embrace and your family’s doorway never lock against you',
    ],
  },
  {
    title: 'सुकून भरा बंधन',
    titleEnglish: 'Soothing Kinship',
    linesHindi: [
      'पूरी दुनिया घूमकर भी इंसान अंत में सुकून यहीं पाता है आकर',
      'अपने परिवार के बीच बैठकर हँसने से बड़ी कोई शांति नहीं',
    ],
    linesHinglish: [
      'Poori duniya ghoomkar bhi insaan ant mein sukoon yaheen paata hai aakar',
      'Apne parivaar ke beech baithkar hansne se badi koi shaanti nahin',
    ],
    linesEnglish: [
      'Travel across every continent and at the end real ease waits right here',
      'Nothing matches the peace of sitting comfortably laughing with family',
    ],
  },
  {
    title: 'दादा-दादी का लाड़',
    titleEnglish: 'Grandparents’ Pampering',
    linesHindi: [
      'माँ-बाप की डाँट से हमेशा चुपचाप बचा लेने वाले दादा-दादी',
      'हर बच्चे के बचपन के सबसे प्यारे हीरो होते हैं हमेशा',
    ],
    linesHinglish: [
      'Maa-Baap ki daant se hamesha chupchaap bacha lene waale daada-daadi',
      'Har bacche ke bachpan ke sabse pyaare hero hote hain hamesha',
    ],
    linesEnglish: [
      'Quietly rescuing grandkids whenever parents turn strict for five minutes',
      'Grandparents remain the sweetest childhood heroes of every home',
    ],
  },
  {
    title: 'ईमानदारी की विरासत',
    titleEnglish: 'Legacy of Honor',
    linesHindi: [
      'माता-पिता ने भले ही करोड़ों की संपत्ति न जोड़ी हो हमारे लिए',
      'पर उन्होंने हमें सिर उठाकर जीने के संस्कार ज़रूर दिए हैं',
    ],
    linesHinglish: [
      'Maata-pita ne bhale hi karodon ki sampatti na jodi ho hamaare liye',
      'Par unhone humein sir uthaakar jeene ke sanskaar zaroor diye hain',
    ],
    linesEnglish: [
      'Parents may not always leave behind towering vaults of gold',
      'Yet raising us to walk with clean dignity is the noblest legacy of all',
    ],
  },
  {
    title: 'मुस्कानों का संगम',
    titleEnglish: 'Chorus of Smiles',
    linesHindi: [
      'एक घर में जब तीन पीढ़ियाँ एक साथ बैठकर भोजन करती हैं',
      'तो मानो सारा स्वर्ग उसी छत के नीचे उतर आता है',
    ],
    linesHinglish: [
      'Ek ghar mein jab teen peedhiyaan ek saath baithkar bhojan karti hain',
      'To maano saara swarg usi chhat ke neeche utar aata hai',
    ],
    linesEnglish: [
      'When three generations gather together sharing warm dinner around one table',
      'It feels as though paradise stepped down calmly beneath that roof',
    ],
  },
  {
    title: 'दिल की गहराई से प्यार',
    titleEnglish: 'Deep Family Affection',
    linesHindi: [
      'हज़ार व्यस्तताएँ हों पर रोज़ रात को घर बात ज़रूर किया कीजिए',
      'आपकी पाँच मिनट की आवाज़ माँ-पापा के चेहरे पर रौनक लाती है',
    ],
    linesHinglish: [
      'Hazaar vyastataayein hon par roz raat ko ghar baat zaroor kiya kijiye',
      'Aapki paanch minute ki aawaaz Maa-Papa ke chehre par raunak laati hai',
    ],
    linesEnglish: [
      'No matter how crazy work runs, call home for five minutes before bed',
      'Just hearing your voice lights up your parents’ whole evening',
    ],
  },
  {
    title: 'प्यार का पहला पाठ',
    titleEnglish: 'First Lesson in Love',
    linesHindi: [
      'निःस्वार्थ प्रेम क्या होता है यह किसी किताब में नहीं मिलता लिखा',
      'हमने तो इसे रोज़ अपने परिवार की आँखों में देखा है',
    ],
    linesHinglish: [
      'Nihswaarth prem kya hota hai yeh kisi kitaab mein nahin milta likha',
      'Humne to ise roz apne parivaar ki aankhon mein dekha hai',
    ],
    linesEnglish: [
      'True selfless love cannot be summed up neatly inside any dictionary',
      'We witnessed it firsthand growing up inside our own family’s eyes',
    ],
  },
  {
    title: 'घर की शांति सर्वोपरि',
    titleEnglish: 'Peace at Home First',
    linesHindi: [
      'बाहर की दुनिया जीतने से ज़्यादा ज़रूरी है घर में सुकून बना रहे',
      'जहाँ हर सदस्य एक-दूसरे के होने पर गर्व महसूस करे',
    ],
    linesHinglish: [
      'Baahar ki duniya jeetne se zyada zaroori hai ghar mein sukoon bana rahe',
      'Jahaan har sadasya ek-doosre ke hone par garv mehsoos kare',
    ],
    linesEnglish: [
      'Guarding calm harmony inside your home outranks impressing any crowd outside',
      'Where everyone feels thankful just to share life under one roof',
    ],
  },
  {
    title: 'रिश्तों की मिठास कायम',
    titleEnglish: 'Preserving Warmth',
    linesHindi: [
      'छोटी बातों पर मुँह फुलाने से ज़्यादा सुंदर होता है मुस्कुरा देना',
      'क्योंकि अपनों से जीतकर भी इंसान हार ही जाता है अंदर से',
    ],
    linesHinglish: [
      'Chhoti baaton par munh phulaane se zyada sundar hota hai muskura dena',
      'Kyonki apnon se jeetkar bhi insaan haar hi jaata hai andar se',
    ],
    linesEnglish: [
      'Smiling softly beats holding stubborn grudges over tiny domestic moments',
      'Because winning an argument against someone you love feels like losing anyway',
    ],
  },
  {
    title: 'सुरक्षा का घेरा',
    titleEnglish: 'Circle of Protection',
    linesHindi: [
      'ज़िंदगी की राहों में चाहे जितने काँटे बिछे हों आगे जाकर',
      'परिवार का प्यार हमारे लिए हमेशा मज़बूत कवच बना रहता है',
    ],
    linesHinglish: [
      'Zindagi ki raahon mein chaahe jitne kaante bichhe hon aage jaakar',
      'Parivaar ka pyaar hamaare liye hamesha mazboot kavach bana rehta hai',
    ],
    linesEnglish: [
      'However thorny distant trails ahead may look someday',
      'A loving family stays woven securely around you like warm armor',
    ],
  },
  {
    title: 'यादों का आँगन',
    titleEnglish: 'Courtyard of Memories',
    linesHindi: [
      'पक्के फ़र्श पर भी जब आँखें बंद करता हूँ पुराने घर को सोचकर',
      'बचपन की वो सारी आवाज़ें आज भी कानों में गूँज उठती हैं',
    ],
    linesHinglish: [
      'Pakke farsh par bhi jab aankhein band karta hoon purane ghar ko sochkar',
      'Bachpan ki wo saari aawaazein aaj bhi kaanon mein goonj uthti hain',
    ],
    linesEnglish: [
      'Whenever I close my eyes picturing our old family house back home',
      'Every joyful childhood voice echoes clearly again like yesterday',
    ],
  },
  {
    title: 'दिल से धन्यवाद परिवार',
    titleEnglish: 'Thank You Family',
    linesHindi: [
      'हर बार ज़ुबान से कह नहीं पाता मैं कि कितने अज़ीज़ हैं सब मुझे',
      'मेरी हर साँस और हर दुआ मेरे प्यारे परिवार के नाम रहती है',
    ],
    linesHinglish: [
      'Har baar zubaan se keh nahin paata main ki kitne azeez hain sab mujhe',
      'Meri har saans aur har dua mere pyaare parivaar ke naam rehti hai',
    ],
    linesEnglish: [
      'I may not say out loud often enough how deeply precious you all are to me',
      'Yet every quiet prayer and grateful breath I take belongs to my family',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'नए दिन की दुआ घर से',
    titleEnglish: 'Home Blessing Every Day',
    linesHindi: [
      'सुबह निकलते समय माँ की मुस्कान और पापा का आशीर्वाद मिल जाए',
      'तो समझिए पूरे दिन की सारी मुश्किलें पहले ही टल गईं',
    ],
    linesHinglish: [
      'Subah nikalte samay Maa ki muskaan aur Papa ka aashirwaad mil jaaye',
      'To samajhiye poore din ki saari mushkilein pehle hi tal gayeen',
    ],
    linesEnglish: [
      'Catching Mom’s smile and Dad’s blessing right before stepping out the gate',
      'Means half the day’s hurdles are cleared before the sun climbs high',
    ],
  },
  {
    title: 'सुकून भरा साथ',
    titleEnglish: 'Peaceful Companionship',
    linesHindi: [
      'दुनिया की कोई भी दौलत वह चैन नहीं खरीद सकती बाज़ार से',
      'जो शाम को पूरे परिवार के एक साथ होने से मिलता है घर में',
    ],
    linesHinglish: [
      'Duniya ki koi bhi daulat wah chain nahin khareed sakti baazaar se',
      'Jo shaam ko poore parivaar ke ek saath hone se milta hai ghar mein',
    ],
    linesEnglish: [
      'No stack of cash in any market can purchase that specific peace',
      'Of coming home at dusk to find your whole family under one roof',
    ],
  },
  {
    title: 'एक जैसा प्यार सबके लिए',
    titleEnglish: 'Equal Love for All',
    linesHindi: [
      'घर में छोटे-बड़े सबके लिए जब प्यार का एक ही पैमाना हो',
      'तो हर त्यौहार और हर आम दिन ख़ुशियों से भर जाता है',
    ],
    linesHinglish: [
      'Ghar mein chhote-bade sabke liye jab pyaar ka ek hi paimaana ho',
      'To har tyohaar aur har aam din khushiyon se bhar jaata hai',
    ],
    linesEnglish: [
      'When kindness and fairness treat everyone at home with equal warmth',
      'Every ordinary Tuesday feels nearly as festive as a holiday',
    ],
  },
  {
    title: 'मेहनत और संस्कार',
    titleEnglish: 'Hard Work and Roots',
    linesHindi: [
      'हम कितनी भी ऊँचाई पर पहुँच जाएँ अपनी मेहनत से जीवन में',
      'पर हमारे कदम हमेशा माँ-पापा की सीख के सामने झुकते हैं',
    ],
    linesHinglish: [
      'Hum kitni bhi oonchaai par pahunch jaayein apni mehnat se jeevan mein',
      'Par hamaare qadam hamesha Maa-Papa ki seekh ke saamne jhukte hain',
    ],
    linesEnglish: [
      'No matter how tall our personal milestones rise someday',
      'Our gratitude always bows humbly before the lessons Mom and Dad taught',
    ],
  },
  {
    title: 'ख़ुशियों की बगिया परिवार',
    titleEnglish: 'Garden of Happiness',
    linesHindi: [
      'परिवार वह बगिया है जहाँ अलग-अलग फूल एक ही मिट्टी में खिलते हैं',
      'सबके रंग अलग होकर भी पूरे घर को एक साथ महकाते हैं',
    ],
    linesHinglish: [
      'Parivaar wah bagiya hai jahaan alag-alag phool ek hi mitti mein khilte hain',
      'Sabke rang alag hokar bhi poore ghar ko ek saath mehkaate hain',
    ],
    linesEnglish: [
      'Family is a garden where different blossoms share the same rich soil',
      'Each wearing their own bright colors, yet perfuming the whole house as one',
    ],
  },
  {
    title: 'घर लौट आने का सुख',
    titleEnglish: 'Sweetness of Homecoming',
    linesHindi: [
      'सफ़र चाहे जितना भी रोमांचक रहा हो बाहर की दुनिया में',
      'लौटकर अपनों की हँसी सुनने से सुंदर कोई अनुभव नहीं होता',
    ],
    linesHinglish: [
      'Safar chaahe jitna bhi romaanchak raha ho baahar ki duniya mein',
      'Lautkar apnon ki hansi sunne se sundar koi anubhav nahin hota',
    ],
    linesEnglish: [
      'No matter how thrilling adventures out in the wide world felt',
      'Nothing rivals coming back through the door and hearing loved ones laugh',
    ],
  },
  {
    title: 'अनकही फ़िक्र',
    titleEnglish: 'Quiet Care Everyday',
    linesHindi: [
      'बाहर बारिश शुरू होते ही घर से फ़ोन आ जाना — छतरी साथ रखी है न',
      'इतनी सी फ़िक्र बताती है कि आप किसी की दुनिया में कितने ज़रूरी हैं',
    ],
    linesHinglish: [
      'Baahar baarish shuru hote hi ghar se phone aa jaana — chhatri saath rakhi hai na',
      'Itni si fikr bataati hai ki aap kisi ki duniya mein kitne zaroori hain',
    ],
    linesEnglish: [
      'The second rain starts outside, home calls asking—did you carry an umbrella',
      'Tiny reminders like that prove how deeply treasured you are in someone’s world',
    ],
  },
  {
    title: 'सच्चा सम्मान अपनों का',
    titleEnglish: 'Respecting Our Own',
    linesHindi: [
      'बाहर मीठा बोलना आसान है पर घर में भी वही नर्मी रखना ज़रूरी है',
      'अपनों को दिया गया सम्मान ही असली चरित्र दिखाता है हमारा',
    ],
    linesHinglish: [
      'Baahar meetha bolna aasaan hai par ghar mein bhi wahi narmi rakhna zaroori hai',
      'Apnon ko diya gaya sammaan hi asli charitra dikhaata hai hamaara',
    ],
    linesEnglish: [
      'Politeness around strangers comes easy—keeping that same gentleness at home matters',
      'How respectfully we speak to our own family reveals our truest character',
    ],
  },
  {
    title: 'सलामती की दुआ',
    titleEnglish: 'Safe and Blessed Home',
    linesHindi: [
      'ईश्वर हर घर की छत सलामत रखे और हर रसोई में बरकत दे',
      'कोई परिवार कभी अपने हिस्से की खुशियों से दूर न रहे',
    ],
    linesHinglish: [
      'Ishwar har ghar ki chhat salaamat rakhe aur har rasoi mein barkat de',
      'Koi parivaar kabhi apne hisse ki khushiyon se door na rahe',
    ],
    linesEnglish: [
      'May grace keep every household roof strong and every kitchen abundant',
      'May no family ever walk far away from the warmth and joy meant for them',
    ],
  },
  {
    title: 'सब कुछ मेरा परिवार',
    titleEnglish: 'Family Means Everything',
    linesHindi: [
      'ज़िंदगी की हर किताब का सबसे खूबसूरत अध्याय यहीं से शुरू होता है',
      'माँ-पापा, भाई-बहन — यही हँसता परिवार मेरी पूरी दुनिया होता है',
    ],
    linesHinglish: [
      'Zindagi ki har kitaab ka sabse khoobsurat adhyaay yaheen se shuru hota hai',
      'Maa-Papa, bhai-behen — yahi hansta parivaar meri poori duniya hota hai',
    ],
    linesEnglish: [
      'The finest chapter of life’s story always opens right here at home',
      'Mom, Dad, and siblings—this laughing family remains my entire world',
    ],
  },
];

export const UNIQUE_FAMILY_170 = buildUniqueShayaris(
  'family',
  'Family Shayari (परिवार शायरी)',
  '🏡',
  31,
  FAMILY_ENTRIES
);
