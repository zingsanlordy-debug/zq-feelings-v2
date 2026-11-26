import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const BHAI_BEHEN_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'टीवी रिमोट की मीठी तकरार',
    titleEnglish: 'Sweet Fight Over TV Remote',
    linesHindi: [
      'टीवी के रिमोट पर रोज़ आधी घंटे की जंग छिड़ जाती है घर में',
      'पर कोई बाहर से आँख दिखा दे तो दोनों एक साथ खड़े हो जाते हैं',
    ],
    linesHinglish: [
      'TV ke remote par roz aadhe ghante ki jung chhid jaati hai ghar mein',
      'Par koi baahar se aankh dikha de to dono ek saath khade ho jaate hain',
    ],
    linesEnglish: [
      'Half-hour battles break out daily over the living room remote',
      'Yet one glare from the world puts both of us on the exact same side',
    ],
  },
  {
    title: 'मैगी में दो चम्मच ज़्यादा',
    titleEnglish: 'Extra Spoon of Noodles',
    linesHindi: [
      'आधी रात को मैगी बनते ही चुपके से एक कटोरी ज़्यादा बन जाती है',
      'भाई-बहन का प्यार प्लेट से नहीं, बिना पूछे हिस्सा बाँटने से दिखता है',
    ],
    linesHinglish: [
      'Aadhi raat ko Maggi bante hi chupke se ek katori zyada ban jaati hai',
      'Bhai-behen ka pyar plate se nahin, bina poochhe hissa baantne se dikhta hai',
    ],
    linesEnglish: [
      'Whenever late-night noodles boil, an extra bowl quietly gets made',
      'Sibling love shows not on big days, but in sharing without ever asking',
    ],
  },
  {
    title: 'पापा की डाँट से ढाल',
    titleEnglish: 'Shield Against Dad’s Scolding',
    linesHindi: [
      'जब देर रात घर लौटने पर पापा के सवालों का डर सताता है',
      'तब बहन का चुपके से दरवाज़ा खोलना किसी वरदान से कम नहीं लगता',
    ],
    linesHinglish: [
      'Jab der raat ghar lautne par papa ke sawaalon ka dar satata hai',
      'Tab behen ka chupke se darwaza kholna kisi vardaan se kam nahin lagta',
    ],
    linesEnglish: [
      'When coming home late fills you with dread of facing Dad’s questions',
      'A sister quietly unlatching the front door feels like pure blessing',
    ],
  },
  {
    title: 'रक्षाबंधन का कच्चा धागा',
    titleEnglish: 'Sacred Thread of Childhood',
    linesHindi: [
      'कलाई पर बँधा वह रेशम का धागा सिर्फ़ एक दिन की रस्म नहीं होता',
      'बहन की दुआ में भाई की पूरी उम्र की सलामती छुपी होती है',
    ],
    linesHinglish: [
      'Kalaai par bandha woh resham ka dhaaga sirf ek din ki rasm nahin hota',
      'Behen ki dua mein bhai ki poori umr ki salamati chhupi hoti hai',
    ],
    linesEnglish: [
      'That silk thread tied on the wrist is never just a one-day ritual',
      'Inside a sister’s prayer hides a lifetime shield for her brother',
    ],
  },
  {
    title: 'विदाई वाले आँगन की चुप्पी',
    titleEnglish: 'Silence After Sister’s Farewell',
    linesHindi: [
      'बहन की डोली उठते ही पूरे घर की दीवारें तक भारी लगने लगती हैं',
      'सबसे ज़्यादा चिढ़ाने वाला भाई ही कोने में जाकर सबसे ज़्यादा रोता है',
    ],
    linesHinglish: [
      'Behen ki doli uthte hi poore ghar ki deewarein tak bhaari lagne lagti hain',
      'Sabse zyada chidhane wala bhai hi kone mein jaakar sabse zyada rota hai',
    ],
    linesEnglish: [
      'The moment a sister leaves for her new home, even the walls feel heavy',
      'The brother who teased her most weeps hardest alone in a corner',
    ],
  },
  {
    title: 'पर्स से गायब होते नोट',
    titleEnglish: 'Missing Notes From Wallet',
    linesHindi: [
      'जेब खर्च कम पड़ते ही बिना बताए भाई के पर्स से नोट निकल जाते हैं',
      'और वह जानकर भी अनजान बन जाता है ताकि बहन का शौक पूरा रहे',
    ],
    linesHinglish: [
      'Jeb kharch kam padte hi bina bataye bhai ke purse se note nikal jaate hain',
      'Aur woh jaankar bhi anjaan ban jaata hai taaki behen ka shauk poora rahe',
    ],
    linesEnglish: [
      'When pocket money runs short, cash vanishes quietly from his wallet',
      'And he pretends not to notice just so his sister gets what she loves',
    ],
  },
  {
    title: 'बचपन का पहला यार',
    titleEnglish: 'First Best Friend Forever',
    linesHindi: [
      'दुनिया में दोस्त तो बड़े होने पर स्कूल-कॉलेज में मिल ही जाते हैं',
      'पर बचपन के सारे राज़ संभालने वाला पहला यार भाई-बहन ही होता है',
    ],
    linesHinglish: [
      'Duniya mein dost to bade hone par school-college mein mil hi jaate hain',
      'Par bachpan ke saare raaz sambhaalne wala pehla yaar bhai-behen hi hota hai',
    ],
    linesEnglish: [
      'Friends come along later in school corridors and college yards',
      'Yet the first keeper of every childhood secret is always your sibling',
    ],
  },
  {
    title: 'चिढ़ाने में पीएचडी का रिश्ता',
    titleEnglish: 'Masters in Loving Teasing',
    linesHindi: [
      'दुनिया भर के अजीब नाम रखकर चिढ़ाने का हक़ सिर्फ़ भाई को है',
      'क्योंकि उदास चेहरे पर हँसी लौटाने की दवा भी उसी के पास होती है',
    ],
    linesHinglish: [
      'Duniya bhar ke ajeeb naam rakhkar chidhane ka haq sirf bhai ko hai',
      'Kyunki udaas chehre par hansi lautane ki dawa bhi usi ke paas hoti hai',
    ],
    linesEnglish: [
      'Only a brother holds the right to invent silly nicknames all day',
      'Because he also holds the quickest cure to turn tears into giggles',
    ],
  },
  {
    title: 'फ़ोन पर माँ जैसी फ़िक्र',
    titleEnglish: 'Motherly Care Over Calls',
    linesHindi: [
      'बड़ी बहन की आवाज़ में कहीं न कहीं माँ की ममता झलक ही आती है',
      'खाना खाया या नहीं, यह सवाल वह बिना नागा रोज़ पूछती है',
    ],
    linesHinglish: [
      'Badi behen ki aawaz mein kahin na kahin maa ki mamta jhalak hi aati hai',
      'Khaana khaaya ya nahin, yeh sawaal woh bina naaga roz poochhti hai',
    ],
    linesEnglish: [
      'In an elder sister’s voice shines a gentle piece of a mother’s heart',
      'Have you eaten yet remains her unfailing daily check-in call',
    ],
  },
  {
    title: 'चॉकलेट का आधा टुकड़ा',
    titleEnglish: 'Half Piece of Chocolate',
    linesHindi: [
      'चाहे कितनी भी ज़िद करके पूरा डिब्बा छुपा लें अलमारी के अंदर',
      'पर आखिरी टुकड़ा खाते वक़्त भाई का हिस्सा हाथ में आ ही जाता है',
    ],
    linesHinglish: [
      'Chaahe kitni bhi zid karke poora dibba chhupa lein almaari ke andar',
      'Par aakhiri tukda khaate waqt bhai ka hissa haath mein aa hi jaata hai',
    ],
    linesEnglish: [
      'No matter how stubbornly you hide the candy box inside the cupboard',
      'You still end up placing the last piece right in your sibling’s palm',
    ],
  },
  {
    title: 'दहेज नहीं, दुआ की सौगात',
    titleEnglish: 'Gift of Blessings Forever',
    linesHindi: [
      'भाई के कमाए पहले वेतन से बहन के लिए आया छोटा सा सूट',
      'दुनिया के सबसे महँगे तोहफ़े से भी हज़ार गुना भारी लगता है',
    ],
    linesHinglish: [
      'Bhai ke kamaaye pehle vetan se behen ke liye aaya chhota sa suit',
      'Duniya ke sabse mehnge tohfe se bhi hazaar guna bhaari lagta hai',
    ],
    linesEnglish: [
      'A modest dress bought from a brother’s very first paycheck',
      'Carries a thousand times more worth than any luxury gift on earth',
    ],
  },
  {
    title: 'दूर शहर से राखी का लिफ़ाफ़ा',
    titleEnglish: 'Rakhi Envelope From Afar',
    linesHindi: [
      'डाक से आए राखी के लिफ़ाफ़े को खोलते ही घर की खुशबू आ जाती है',
      'मीलों की दूरी भी भाई-बहन के अपनापन को फीका नहीं कर पाती',
    ],
    linesHinglish: [
      'Daak se aaye rakhi ke lifaafe ko kholte hi ghar ki khushboo aa jaati hai',
      'Meelon ki doori bhi bhai-behen ke apnapan ko feeka nahin kar paati',
    ],
    linesEnglish: [
      'Opening a posted Rakhi envelope fills a distant room with home scent',
      'Even hundreds of miles cannot fade the warmth siblings carry inside',
    ],
  },
  {
    title: 'बाइक की पिछली सीट पर गप्पें',
    titleEnglish: 'Stories on Back Seat Ride',
    linesHindi: [
      'भाई की बाइक के पीछे बैठकर आइसक्रीम खाने का मज़ा ही अलग है',
      'दुनिया के सारे महँगे रेस्तराँ उस सस्ती सी शाम के आगे फीके हैं',
    ],
    linesHinglish: [
      'Bhai ki bike ke peechhe baithkar ice-cream khaane ka maza hi alag hai',
      'Duniya ke saare mehnge restoraan us sasti si shaam ke aage feeke hain',
    ],
    linesEnglish: [
      'Riding pillion behind your brother for roadside ice cream feels unmatched',
      'Every fancy restaurant fades next to that simple, breezy evening',
    ],
  },
  {
    title: 'चुपके से रोते देख लेना',
    titleEnglish: 'Spotting Silent Tears First',
    linesHindi: [
      'मुस्कान के पीछे छुपा दर्द मम्मी-पापा से भी छिप जाता है कई बार',
      'पर एक बहन की नज़र भाई की भीगी पलकें तुरंत पकड़ लेती है',
    ],
    linesHinglish: [
      'Muskaan ke peechhe chhupa dard mummy-papa se bhi chhip jaata hai kai baar',
      'Par ek behen ki nazar bhai ki bheegi palkein turant pakad leti hai',
    ],
    linesEnglish: [
      'Pain hidden behind a smile often escapes even watchful parents',
      'Yet a sister’s eyes instantly catch the wetness on her brother’s lashes',
    ],
  },
  {
    title: 'शादी के बाद पहला कॉल',
    titleEnglish: 'First Call From New Home',
    linesHindi: [
      'ससुराल की भागदौड़ के बीच भी जब बहन का पहला कॉल आता है',
      'तो भाई की आवाज़ सुनते ही उसके सारे दिन की थकान उतर जाती है',
    ],
    linesHinglish: [
      'Sasuraal ki bhaagdaud ke beech bhi jab behen ka pehla call aata hai',
      'To bhai ki aawaz sunte hi uske saare din ki thakaan utar jaati hai',
    ],
    linesEnglish: [
      'Amidst busy routines in her new household, a sister still calls home',
      'Hearing her brother’s voice melts away the tiredness of her whole day',
    ],
  },
  {
    title: 'बिना कहे हौसला बन जाना',
    titleEnglish: 'Unspoken Strength Beside Me',
    linesHindi: [
      'ज़िंदगी की कठिन परीक्षा में जब सारा आत्मविश्वास डगमगाने लगता है',
      'तब भाई का कंधे पर रखा हाथ कहता है, तू कर लेगा यार',
    ],
    linesHinglish: [
      'Zindagi ki kathin pareeksha mein jab saara aatmvishwas dagmagane lagta hai',
      'Tab bhai ka kandhe par rakha haath kehta hai, tu kar lega yaar',
    ],
    linesEnglish: [
      'During tough life storms when all self-belief starts to wobble',
      'A sibling’s steady hand on your shoulder whispers you have got this',
    ],
  },
  {
    title: 'छोटी बहन की बड़ी अक़्ल',
    titleEnglish: 'Little Sister’s Big Wisdom',
    linesHindi: [
      'कहने को तो घर में सबसे छोटी और नटखट गुड़िया कहलाती है वह',
      'पर उलझे मामलों में ऐसी समझदारी की बात कहती है कि दंग रह जाएँ',
    ],
    linesHinglish: [
      'Kehne ko to ghar mein sabse chhoti aur natkhat gudiya kehlaati hai woh',
      'Par uljhe maamlon mein aisi samajhdaari ki baat kehti hai ki dang reh jaayein',
    ],
    linesEnglish: [
      'Everyone calls her the mischievous little doll of the family',
      'Yet in messy moments her calm advice leaves us all quietly amazed',
    ],
  },
  {
    title: 'झूठी शिकायत और सच्ची हँसी',
    titleEnglish: 'Playful Complaints Real Laughs',
    linesHindi: [
      'सुबह मम्मी से एक-दूसरे की झूठी शिकायतें लगाने में दिन बीतता था',
      'आज वही क़िस्से वीडियो कॉल पर याद करके दोनों ज़ोर से हँसते हैं',
    ],
    linesHinglish: [
      'Subah mummy se ek-doosre ki jhoothi shikaayatein lagaane mein din beetta tha',
      'Aaj wahi kisse video call par yaad karke dono zor se hanste hain',
    ],
    linesEnglish: [
      'Mornings once went by tattling on each other playfully to Mom',
      'Today replaying those antics on video calls makes us burst out laughing',
    ],
  },
  {
    title: 'मायके की सबसे प्यारी राह',
    titleEnglish: 'Sweetest Road Back Home',
    linesHindi: [
      'मायके आते वक़्त स्टेशन पर लेने खड़े भाई को देखकर मन भर आता है',
      'लगता है बचपन का पूरा शहर आज भी मेरी हथेली में सुरक्षित है',
    ],
    linesHinglish: [
      'Maayke aate waqt station par lene khade bhai ko dekhkar mann bhar aata hai',
      'Lagta hai bachpan ka poora shehar aaj bhi meri hatheli mein surakshit hai',
    ],
    linesEnglish: [
      'Seeing your brother waiting at the station fills the heart to the brim',
      'It feels as if our entire childhood town still rests safe in my palm',
    ],
  },
  {
    title: 'गूगल मैप से तेज़ भाई',
    titleEnglish: 'Faster Than Any Map',
    linesHindi: [
      'रात को कहीं देर हो जाए तो किसी कैब से ज़्यादा भरोसा भाई पर होता है',
      'बस एक मैसेज भेजो और दस मिनट में वह गेट के बाहर खड़ा मिलता है',
    ],
    linesHinglish: [
      'Raat ko kahin der ho jaaye to kisi cab se zyada bharosa bhai par hota hai',
      'Bas ek message bhejo aur das minute mein woh gate ke baahar khada milta hai',
    ],
    linesEnglish: [
      'Whenever evening runs late, a brother beats any ride app on trust',
      'Send one text and within ten minutes he is waiting outside the gate',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'किताबों के बीच छुपे नोट',
    titleEnglish: 'Notes Tucked in Books',
    linesHindi: [
      'परीक्षा से एक रात पहले मेरी नोटबुक में चॉकलेट रख जाना',
      'बहन का बिना कुछ बोले प्यार जताने का सबसे प्यारा तरीका था',
    ],
    linesHinglish: [
      'Pareeksha se ek raat pehle meri notebook mein chocolate rakh jaana',
      'Behen ka bina kuch bole pyar jataane ka sabse pyara tareeka tha',
    ],
    linesEnglish: [
      'Slipping a chocolate bar inside my notebook the night before finals',
      'Was my sister’s sweetest way of saying good luck without a word',
    ],
  },
  {
    title: 'हर झगड़े की पाँच मिनट उम्र',
    titleEnglish: 'Five-Minute Expiry on Fights',
    linesHindi: [
      'चाहे कितनी भी तीखी नोकझोंक हो जाए दोपहर की धूप में',
      'शाम की चाय तक दोनों फिर एक ही मज़ाक़ पर ठहाके लगाते हैं',
    ],
    linesHinglish: [
      'Chaahe kitni bhi teekhi nok-jhonk ho jaaye dopahar ki dhoop mein',
      'Shaam ki chai tak dono phir ek hi mazaaq par thahake lagaate hain',
    ],
    linesEnglish: [
      'No matter how sharp our argument gets under the afternoon sun',
      'By evening tea we are giggling again over the exact same joke',
    ],
  },
  {
    title: 'अजनबी शहर में घर जैसा चेहरा',
    titleEnglish: 'Home Face in New City',
    linesHindi: [
      'कॉलेज के पहले दिन जब पूरा हॉस्टल अनजान सा लग रहा था मुझे',
      'भाई का गेट तक छोड़ने आना पूरे हफ़्ते की हिम्मत दे गया',
    ],
    linesHinglish: [
      'College ke pehle din jab poora hostel anjaan sa lag raha tha mujhe',
      'Bhai ka gate tak chhodne aana poore hafte ki himmat de gaya',
    ],
    linesEnglish: [
      'On day one of college when the hostel hallways felt completely cold',
      'My brother walking me to the gate gave courage for the whole week',
    ],
  },
  {
    title: 'नए कपड़ों पर पहला ट्रायल',
    titleEnglish: 'First Critique on New Outfits',
    linesHindi: [
      'कोई भी नया कुर्ता या शर्ट लेने से पहले बहन की मुहर ज़रूरी है',
      'दुनिया भले तारीफ़ करे, उसकी हाँ के बिना बात बनती ही नहीं',
    ],
    linesHinglish: [
      'Koi bhi naya kurta ya shirt lene se pehle behen ki muhar zaroori hai',
      'Duniya bhale taareef kare, uski haan ke bina baat banti hi nahin',
    ],
    linesEnglish: [
      'Before buying any new shirt or jacket, a sister’s nod is mandatory',
      'The world can praise it all day, yet without her yes it feels incomplete',
    ],
  },
  {
    title: 'कपड़ों की अलमारी पर कब्ज़ा',
    titleEnglish: 'Shared Wardrobe Rights',
    linesHindi: [
      'मेरी सबसे पसंदीदा हुडी अक्सर बहन की अलमारी में पाई जाती है',
      'शिकायत करने पर हँसकर कहती है, तेरी चीज़ पर मेरा ही तो हक़ है',
    ],
    linesHinglish: [
      'Meri sabse pasandeeda hoodie aksar behen ki almaari mein paayi jaati hai',
      'Shikaayat karne par hanskar kehti hai, teri cheez par mera hi to haq hai',
    ],
    linesEnglish: [
      'My favorite oversized hoodie somehow always migrates to her closet',
      'Call her out and she laughs saying what is yours is obviously mine',
    ],
  },
  {
    title: 'बूढ़े माँ-पापा की साझा जिम्मेदारी',
    titleEnglish: 'Shared Duty Toward Parents',
    linesHindi: [
      'जब माँ-पापा की उम्र बढ़ने लगती है और बाल सफ़ेद होने लगते हैं',
      'तब भाई और बहन एक-दूसरे की सबसे मज़बूत ताक़त बन जाते हैं',
    ],
    linesHinglish: [
      'Jab maa-papa ki umr badhne lagti hai aur baal safed hone lagte hain',
      'Tab bhai aur behen ek-doosre ki sabse mazboot taaqat ban jaate hain',
    ],
    linesEnglish: [
      'As our parents grow older and silver threads weave through their hair',
      'Brother and sister become each other’s steadier, stronger pillar',
    ],
  },
  {
    title: 'चुटकी में हल होती उलझन',
    titleEnglish: 'Knots Untangled Together',
    linesHindi: [
      'कभी-कभी बड़ी समस्याओं का हल कोई भारी किताब नहीं दे पाती',
      'भाई के साथ छत पर बैठकर दो बातें कर लेने से ही मन हल्का हो जाता है',
    ],
    linesHinglish: [
      'Kabhi-kabhi badi samasyaon ka hal koi bhaari kitaab nahin de paati',
      'Bhai ke saath chhat par baithkar do baatein kar lene se hi mann halka ho jaata hai',
    ],
    linesEnglish: [
      'Sometimes no heavy advice book can solve what weighs on your chest',
      'Sitting on the terrace talking with your sibling lightens everything',
    ],
  },
  {
    title: 'आख़िरी टुकड़े पर नकली गुस्सा',
    titleEnglish: 'Fake Anger Over Last Bite',
    linesHindi: [
      'पिज़्ज़ा की आखिरी स्लाइस पर जो दो मिनट का नाटक चलता है घर में',
      'वही बचपन की सबसे सुंदर याद बनकर पूरी ज़िंदगी साथ चलता है',
    ],
    linesHinglish: [
      'Pizza ki aakhiri slice par jo do minute ka naatak chalta hai ghar mein',
      'Wahi bachpan ki sabse sundar yaad bankar poori zindagi saath chalta hai',
    ],
    linesEnglish: [
      'That two-minute courtroom drama over the final slice of pizza',
      'Turns into the warmest memory we carry through every decade ahead',
    ],
  },
  {
    title: 'गुपचुप भेजे यूपीआई पैसे',
    titleEnglish: 'Secret UPI Treat Transfer',
    linesHindi: [
      'महीने के आखिरी दिनों में जब जेब बिल्कुल खाली हो जाती है मेरी',
      'तब बड़े भाई का बिना माँगे भेजा संदेश किसी जादू से कम नहीं लगता',
    ],
    linesHinglish: [
      'Maheene ke aakhiri dinon mein jab jeb bilkul khaali ho jaati hai meri',
      'Tab bade bhai ka bina maange bheja sandesh kisi jaadoo se kam nahin lagta',
    ],
    linesEnglish: [
      'During the final week of the month when my wallet hits rock bottom',
      'An unprompted transfer alert from my brother feels like pure magic',
    ],
  },
  {
    title: 'सेल्फ़ी में अजीब शक्ल बनाना',
    titleEnglish: 'Ruining Every Nice Selfie',
    linesHindi: [
      'कितनी भी अच्छी तस्वीर खिंचवाने का मूड बनाकर खड़ी हो जाऊँ',
      'भाई पीछे से अजीब चेहरा बनाकर हर फोटो को मज़ेदार बना देता है',
    ],
    linesHinglish: [
      'Kitni bhi achhi tasveer khinchwane ka mood banakar khadi ho jaaun',
      'Bhai peechhe se ajeeb chehra banakar har photo ko mazedaar bana deta hai',
    ],
    linesEnglish: [
      'No matter how poised I stand ready for a picture-perfect portrait',
      'My brother pulls a goofy face behind me and steals the frame',
    ],
  },
  {
    title: 'बीमारी में रात भर जागना',
    titleEnglish: 'Sitting Up Through Fever',
    linesHindi: [
      'दिन भर चाहे जितना चिढ़ा लें हम एक-दूसरे को मज़ाक़-मज़ाक़ में',
      'पर हल्का सा बुखार आते ही बहन माथे पर पट्टी रखती बैठी रहती है',
    ],
    linesHinglish: [
      'Din bhar chaahe jitna chidha lein hum ek-doosre ko mazaaq-mazaaq mein',
      'Par halka sa bukhaar aate hi behen maathe par patti rakhti baithi rehti hai',
    ],
    linesEnglish: [
      'We may tease each other nonstop from sunrise until evening falls',
      'Yet one hint of fever brings my sister beside my bed with cool cloth',
    ],
  },
  {
    title: 'सफ़र की हर तस्वीर तुम्हें भेजना',
    titleEnglish: 'Sending Every Trip Snap',
    linesHindi: [
      'कहीं भी सुंदर पहाड़ या चाय की टपरी दिखे तो मन करता है',
      'सबसे पहले फोटो खींचकर अपनी बहन के व्हाट्सऐप पर भेज दूँ',
    ],
    linesHinglish: [
      'Kahin bhi sundar pahaad ya chai ki tapri dikhe to mann karta hai',
      'Sabse pehle photo kheenchkar apni behen ke WhatsApp par bhej doon',
    ],
    linesEnglish: [
      'Whenever I spot misty hills or a charming roadside tea stall',
      'My first instinct is snapping a photo straight to my sister’s chat',
    ],
  },
  {
    title: 'एक ही छत के नीचे दो दुनिया',
    titleEnglish: 'Two Worlds Under One Roof',
    linesHindi: [
      'लड़का और लड़की की सोच भले ही सौ बातों में अलग होती हो',
      'पर भाई-बहन का दिल हमेशा एक ही धुन पर धड़कता है',
    ],
    linesHinglish: [
      'Ladka aur ladki ki soch bhale hi sau baaton mein alag hoti ho',
      'Par bhai-behen ka dil hamesha ek hi dhun par dhadakta hai',
    ],
    linesEnglish: [
      'A boy and girl may view a hundred things from opposite angles',
      'Yet a brother and sister’s hearts beat to the exact same rhythm',
    ],
  },
  {
    title: 'आँगन की झूले वाली शाम',
    titleEnglish: 'Courtyard Swing Evenings',
    linesHindi: [
      'बचपन के उस झूले पर कौन पहले बैठेगा, इसी में आधी शाम जाती थी',
      'अब दोनों कमाने लगे तो वही आँगन दोनों की हँसी को तरसता है',
    ],
    linesHinglish: [
      'Bachpan ke us jhoole par kaun pehle baithega, isi mein aadhi shaam jaati thi',
      'Ab dono kamaane lage to wahi aangan dono ki hansi ko tarasta hai',
    ],
    linesEnglish: [
      'Half our evenings went racing to claim the courtyard swing first',
      'Now both busy working, that quiet yard misses our noisy laughter',
    ],
  },
  {
    title: 'पहली कमाई का कड़ा और सूट',
    titleEnglish: 'First Salary Bracelet and Dress',
    linesHindi: [
      'नौकरी लगते ही सबसे पहले बहन के लिए मनपसंद घड़ी खरीदने का सपना',
      'हर भाई के दिल में बचपन से ही चुपचाप पलता रहता है',
    ],
    linesHinglish: [
      'Naukri lagte hi sabse pehle behen ke liye manpasand ghadi khareedne ka sapna',
      'Har bhai ke dil mein bachpan se hi chupchaap palta rehta hai',
    ],
    linesEnglish: [
      'Dreaming of buying a sister her favorite watch with his first salary',
      'Quietly grows inside every brother’s heart right from childhood',
    ],
  },
  {
    title: 'असफलता में भी गर्व की नज़र',
    titleEnglish: 'Proud Eyes Even in Loss',
    linesHindi: [
      'जब दुनिया नंबर और रैंक देखकर इंसान की कीमत आँकती है',
      'तब बहन कहती है, मेरे लिए तो मेरा भाई हमेशा चैंपियन है',
    ],
    linesHinglish: [
      'Jab duniya number aur rank dekhkar insaan ki keemat aankti hai',
      'Tab behen kehti hai, mere liye to mera bhai hamesha champion hai',
    ],
    linesEnglish: [
      'While the world judges worth by scores, grades, and rankings',
      'A sister insists to me you will always remain an undefeated champ',
    ],
  },
  {
    title: 'माँ की तरह टिफ़िन पैक करना',
    titleEnglish: 'Packing Lunch Like Mom',
    linesHindi: [
      'जब कभी मम्मी बाहर होती हैं तो बहन रसोई संभाल लेती है',
      'और टिफ़िन में मेरी पसंद का पराठा खुद बना कर रख देती है',
    ],
    linesHinglish: [
      'Jab kabhi mummy baahar hoti hain to behen rasoi sambhaal leti hai',
      'Aur tiffin mein meri pasand ka paratha khud bana kar rakh deti hai',
    ],
    linesEnglish: [
      'Whenever Mom travels away, my sister steps straight into the kitchen',
      'And packs my favorite stuffed flatbread neatly into my lunchbox',
    ],
  },
  {
    title: 'छोटी सी माफ़ी पर बड़ा गले लगना',
    titleEnglish: 'Big Hug After Tiny Sorry',
    linesHindi: [
      'भाई-बहन के बीच अहंकार जैसी कोई दीवार टिक ही नहीं पाती',
      'एक छोटी सी आइसक्रीम या मुस्कान से सारे झगड़े पिघल जाते हैं',
    ],
    linesHinglish: [
      'Bhai-behen ke beech ahankaar jaisi koi deewar tik hi nahin paati',
      'Ek chhoti si ice-cream ya muskaan se saare jhagde pighal jaate hain',
    ],
    linesEnglish: [
      'Ego walls simply cannot survive between a brother and sister',
      'One cone of ice cream or a goofy grin melts every fight instantly',
    ],
  },
  {
    title: 'बचपन की एल्बम में मुस्कान',
    titleEnglish: 'Smiles Inside Old Albums',
    linesHindi: [
      'पुरानी एल्बम पलटते ही दो टूटे दाँतों वाली तस्वीरें सामने आती हैं',
      'तब लगता है कि समय कितनी जल्दी हमें बड़ा कर गया यार',
    ],
    linesHinglish: [
      'Puraani album palatte hi do toote daanton waali tasveerein saamne aati hain',
      'Tab lagta hai ki samay kitni jaldi humein bada kar gaya yaar',
    ],
    linesEnglish: [
      'Flipping old photo albums shows our gap-toothed grins side by side',
      'And makes you realize how swiftly time turned kids into adults',
    ],
  },
  {
    title: 'भाई दूज का तिलक और आशीष',
    titleEnglish: 'Sacred Tilak of Bhai Dooj',
    linesHindi: [
      'माथे पर लगा केसरिया तिलक सिर्फ़ त्योहार की रस्म नहीं होता भाई',
      'यह बहन की ओर से हर बुरी नज़र से बचाने का वचन होता है',
    ],
    linesHinglish: [
      'Maathe par laga kesariya tilak sirf tyohaar ki rasm nahin hota bhai',
      'Yeh behen ki or se har buri nazar se bachaane ka vachan hota hai',
    ],
    linesEnglish: [
      'That saffron mark on your forehead is far beyond a festival custom',
      'It is a sister’s silent vow to guard your life from every shadow',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'स्कूल बस का पहला सहारा',
    titleEnglish: 'First Ally on School Bus',
    linesHindi: [
      'स्कूल बस की आखिरी सीट पर साथ बैठने से शुरू हुई थी दोस्ती हमारी',
      'आज ज़िंदगी की सबसे लंबी बस में भी तुम मेरे साथ खड़े हो',
    ],
    linesHinglish: [
      'School bus ki aakhiri seat par saath baithne se shuru hui thi dosti hamaari',
      'Aaj zindagi ki sabse lambi bus mein bhi tum mere saath khade ho',
    ],
    linesEnglish: [
      'Our bond began sharing the last bench on the noisy yellow school bus',
      'Even on life’s longest highway now, you still stand beside me',
    ],
  },
  {
    title: 'गलती मेरी, डाँट तेरी',
    titleEnglish: 'My Mistake, Your Lecture',
    linesHindi: [
      'बचपन में काँच मैं तोड़ता था और सफाई बहन को देनी पड़ती थी',
      'तब लगता था वह क्यों बचा रही है, आज समझ आता है यही प्यार है',
    ],
    linesHinglish: [
      'Bachpan mein kaanch main todta tha aur safaai behen ko deni padti thi',
      'Tab lagta tha woh kyun bacha rahi hai, aaj samajh aata hai yahi pyar hai',
    ],
    linesEnglish: [
      'As kids I broke the glass while my sister took the scolding for me',
      'Back then I wondered why; today I know that was pure protection',
    ],
  },
  {
    title: 'मीम शेयर करने का पहला नंबर',
    titleEnglish: 'First Recipient of Funny Reels',
    linesHindi: [
      'इंस्टाग्राम पर कोई भी मज़ेदार रील दिखते ही उँगली अपने आप चलती है',
      'सबसे पहला शेयर हमेशा अपने भाई या बहन के चैट में ही जाता है',
    ],
    linesHinglish: [
      'Instagram par koi bhi mazedaar reel dikhte hi ungli apne aap chalti hai',
      'Sabse pehla share hamesha apne bhai ya behen ke chat mein hi jaata hai',
    ],
    linesEnglish: [
      'Spot one hilarious clip scrolling late at night and thumbs move fast',
      'The very first DM always lands straight inside my sibling’s chat',
    ],
  },
  {
    title: 'ससुराल से आई भाई की चिंता',
    titleEnglish: 'Sister’s Worry From Afar',
    linesHindi: [
      'खुद दो घरों की ज़िम्मेदारी संभालती रहती है दिन से रात तक',
      'फिर भी फोन पर पूछती है, भाई तू समय से सोता तो है न',
    ],
    linesHinglish: [
      'Khud do gharon ki zimmedari sambhaalti rehti hai din se raat tak',
      'Phir bhi phone par poochhti hai, bhai tu samay se sota to hai na',
    ],
    linesEnglish: [
      'She juggles duties across two homes effortlessly from dawn to dusk',
      'Yet still calls asking, brother, are you getting proper sleep at night',
    ],
  },
  {
    title: 'चुपचाप रखी पानी की बोतल',
    titleEnglish: 'Quiet Water Bottle Beside Bed',
    linesHindi: [
      'देर रात पढ़ते वक़्त मेज़ पर ठंडे पानी का गिलास रखकर चले जाना',
      'बहन की छोटी सी आदत पूरे दिन की मेहनत को आसान बना देती है',
    ],
    linesHinglish: [
      'Der raat padhte waqt mez par thande paani ka gilaas rakhkar chale jaana',
      'Behen ki chhoti si aadat poore din ki mehnat ko aasaan bana deti hai',
    ],
    linesEnglish: [
      'Leaving a glass of cool water silently on my desk past midnight',
      'A sister’s tiny habit makes hours of hard study feel light',
    ],
  },
  {
    title: 'पापा के बाद दूसरा अभिभावक',
    titleEnglish: 'Second Guardian After Father',
    linesHindi: [
      'बड़े भाई की डाँट भले ही कुछ पल के लिए कड़वी लग जाए दिल को',
      'पर उसके पीछे छुपी फ़िक्र बिल्कुल पापा के साए जैसी होती है',
    ],
    linesHinglish: [
      'Bade bhai ki daant bhale hi kuch pal ke liye kadvi lag jaaye dil ko',
      'Par uske peechhe chhupi fikr bilkul papa ke saaye jaisi hoti hai',
    ],
    linesEnglish: [
      'An elder brother’s stern tone might sting for a brief moment',
      'Yet the care beneath it shelters you just like a father’s shade',
    ],
  },
  {
    title: 'पसंदीदा गाने पर पागलपन वाला डांस',
    titleEnglish: 'Crazy Living Room Dance',
    linesHindi: [
      'घर खाली मिलते ही स्पीकर पर गाना लगाकर दोनों का अजीब नाच',
      'आज भी याद आए तो चेहरे पर बचपन वाली मुस्कान खिल उठती है',
    ],
    linesHinglish: [
      'Ghar khaali milte hi speaker par gaana lagaakar dono ka ajeeb naach',
      'Aaj bhi yaad aaye to chehre par bachpan waali muskaan khil uthti hai',
    ],
    linesEnglish: [
      'Cranking up speakers the second parents stepped out for silly dances',
      'Still brings that exact careless childhood grin back to my face',
    ],
  },
  {
    title: 'दुकान पर मोलभाव की उस्ताद',
    titleEnglish: 'Undefeated Bargain Queen',
    linesHindi: [
      'जहाँ हम दो सौ की चीज़ पाँच सौ में खरीदकर खुश हो जाते हैं',
      'वहीं छोटी बहन साथ हो तो दुकानदार भी हाथ जोड़कर रेट घटाता है',
    ],
    linesHinglish: [
      'Jahaan hum do sau ki cheez paanch sau mein khareedkar khush ho jaate hain',
      'Wahin chhoti behen saath ho to dukaandaar bhi haath jodkar rate ghataata hai',
    ],
    linesEnglish: [
      'While I happily overpay without negotiating a single rupee',
      'Bringing my little sister shopping gets shopkeepers lowering prices fast',
    ],
  },
  {
    title: 'बाहर की दुनिया में मेरा वकील',
    titleEnglish: 'My Fierce Lawyer Outside',
    linesHindi: [
      'घर के अंदर मुझसे सौ शिकायतें करती है दिन भर मेरी बहन',
      'पर किसी तीसरे ने कुछ बोल दिया तो शेरनी की तरह लड़ जाती है',
    ],
    linesHinglish: [
      'Ghar ke andar mujhse sau shikaayatein karti hai din bhar meri behen',
      'Par kisi teesre ne kuch bol diya to sherni ki tarah lad jaati hai',
    ],
    linesEnglish: [
      'Inside the house my sister lists a hundred flaws of mine daily',
      'Yet let an outsider say one bad word and she defends me fiercely',
    ],
  },
  {
    title: 'भतीजे-भांजे की आँखों में बचपन',
    titleEnglish: 'Childhood Reborn in Next Gen',
    linesHindi: [
      'बहन के बच्चे जब मामा कहकर गले से लिपट जाते हैं दौड़कर',
      'तब लगता है हमारे अपने बचपन का दूसरा अध्याय शुरू हो गया है',
    ],
    linesHinglish: [
      'Behen ke bachche jab maama kehkar gale se lipat jaate hain daudkar',
      'Tab lagta hai hamaare apne bachpan ka doosra adhyaay shuru ho gaya hai',
    ],
    linesEnglish: [
      'When your sister’s kids run shouting uncle and hug your knees tight',
      'It feels like chapter two of our very own childhood just began',
    ],
  },
  {
    title: 'बारिश में एक ही छतरी',
    titleEnglish: 'One Umbrella in Pouring Rain',
    linesHindi: [
      'स्कूल से लौटते वक़्त एक ही छतरी के नीचे आधा भीगकर चलना',
      'और दोनों का कीचड़ में छपाक करना हर मौसम से खूबसूरत था',
    ],
    linesHinglish: [
      'School se lautte waqt ek hi chhatri ke neeche aadha bheegkar chalna',
      'Aur dono ka keechad mein chhapaak karna har mausam se khoobsurat tha',
    ],
    linesEnglish: [
      'Sharing one crooked umbrella walking home soaked from school',
      'And splashing puddles together beat every season since then',
    ],
  },
  {
    title: 'जन्मदिन पर आधी रात का शोर',
    titleEnglish: 'Midnight Cake Noise Together',
    linesHindi: [
      'ठीक बारह बजे चेहरे पर केक पोतने की पुरानी परंपरा भाई-बहन की',
      'साल दर साल उम्र बढ़ाती है पर रिश्ता वही दस साल का रखती है',
    ],
    linesHinglish: [
      'Theek baarah baje chehre par cake potne ki puraani parampara bhai-behen ki',
      'Saal dar saal umr badhaati hai par rishta wahi das saal ka rakhti hai',
    ],
    linesEnglish: [
      'Smearing birthday frosting across faces right at twelve sharp',
      'Adds candles every year yet keeps our bond eternally ten years old',
    ],
  },
  {
    title: 'सच्चाई दिखाने वाला आईना',
    titleEnglish: 'Honest Mirror Without Filter',
    linesHindi: [
      'सारी दुनिया भले ही झूठी तारीफ़ करके आगे निकल जाए हमारे सामने',
      'भाई-बहन ही मुँह पर सच बोलकर हमें सही रास्ते पर लाते हैं',
    ],
    linesHinglish: [
      'Saari duniya bhale hi jhoothi taareef karke aage nikal jaaye hamaare saamne',
      'Bhai-behen hi munh par sach bolkar humein sahi raaste par laate hain',
    ],
    linesEnglish: [
      'Everyone else may offer sweet flattery and walk away quietly',
      'Only a sibling tells the blunt truth to steer you back on track',
    ],
  },
  {
    title: 'रिश्तों की भीड़ में सबसे सच्चा',
    titleEnglish: 'Truest Bond in Every Crowd',
    linesHindi: [
      'मतलबी दुनिया में हर संबंध किसी शर्त या स्वार्थ पर टिका दिखता है',
      'एक भाई-बहन का रिश्ता ही बिना किसी सौदे के ताउम्र चलता है',
    ],
    linesHinglish: [
      'Matlabi duniya mein har sambandh kisi shart ya swaarth par tika dikhta hai',
      'Ek bhai-behen ka rishta hi bina kisi saude ke taa-umr chalta hai',
    ],
    linesEnglish: [
      'In a transactional world most ties come with silent conditions attached',
      'Only brother and sister love endures lifelong with zero bargains',
    ],
  },
  {
    title: 'पुराने खिलौनों की बराबरी',
    titleEnglish: 'Dividing Toys Down the Middle',
    linesHindi: [
      'कैरम बोर्ड की गोटी और लूडो की चाल पर घंटों बहस होती थी कभी',
      'आज वही खेल एक साथ बैठकर खेलने को तरस जाते हैं हम दोनों',
    ],
    linesHinglish: [
      'Carrom board ki goti aur ludo ki chaal par ghanton behas hoti thi kabhi',
      'Aaj wahi khel ek saath baithkar khelne ko taras jaate hain hum dono',
    ],
    linesEnglish: [
      'We once argued for hours over carrom coins and board game dice',
      'Now we long for one quiet Sunday afternoon just to play again',
    ],
  },
  {
    title: 'बहन के आने पर घर में उत्सव',
    titleEnglish: 'Festival Whenever Sister Visits',
    linesHindi: [
      'बहन के आने की ख़बर सुनते ही घर में दीवाली जैसा माहौल बन जाता है',
      'उसकी पसंद की हर मिठाई सुबह से ही फ्रिज में सज जाती है',
    ],
    linesHinglish: [
      'Behen ke aane ki khabar sunte hi ghar mein Diwali jaisa mahaul ban jaata hai',
      'Uski pasand ki har mithaai subah se hi fridge mein saj jaati hai',
    ],
    linesEnglish: [
      'The moment word spreads that sister is visiting, home feels festive',
      'Her favorite sweets fill the kitchen shelves right from morning',
    ],
  },
  {
    title: 'दुःख में बिना शोर की मज़बूती',
    titleEnglish: 'Quiet Strength in Hard Times',
    linesHindi: [
      'जब जीवन की आंधी में कोई शब्द काम नहीं आते हमारे पास',
      'तब भाई का बस पास बैठ जाना ही आधी तकलीफ़ हर लेता है',
    ],
    linesHinglish: [
      'Jab jeevan ki aandhi mein koi shabd kaam nahin aate hamaare paas',
      'Tab bhai ka bas paas baith jaana hi aadhi takleef har leta hai',
    ],
    linesEnglish: [
      'When life hits hard and no comforting speech can reach your heart',
      'Having your sibling sit quietly beside you lifts half the weight',
    ],
  },
  {
    title: 'पहली साइकिल से पहली कार तक',
    titleEnglish: 'From First Bicycle to First Car',
    linesHindi: [
      'कभी साइकिल के कैरियर पर बैठकर पूरा मोहल्ला घूमा करते थे साथ',
      'आज अपनी पहली कार की चाबी भी पहले बहन के हाथ में थमा दी',
    ],
    linesHinglish: [
      'Kabhi cycle ke carrier par baithkar poora mohalla ghooma karte the saath',
      'Aaj apni pehli car ki chaabi bhi pehle behen ke haath mein thama di',
    ],
    linesEnglish: [
      'We once circled the whole neighborhood perched on one bicycle rack',
      'Today I handed the keys of my very first car straight to my sister',
    ],
  },
  {
    title: 'नज़र उतारने वाली बड़ी दीदी',
    titleEnglish: 'Elder Sister Warding Off Ills',
    linesHindi: [
      'किसी भी बड़े इंटरव्यू या सफ़र से पहले दही-चीनी खिलाना न भूलना',
      'बड़ी दीदी की यह आदत हर मंज़िल को शुभ बना देती है',
    ],
    linesHinglish: [
      'Kisi bhi bade interview ya safar se pehle dahi-cheeni khilana na bhoolna',
      'Badi didi ki yeh aadat har manzil ko shubh bana deti hai',
    ],
    linesEnglish: [
      'Never letting you leave for big interviews without sweet yogurt luck',
      'An elder sister’s tender ritual turns every journey auspicious',
    ],
  },
  {
    title: 'कहानी अधूरी, पर प्यार पूरा',
    titleEnglish: 'Short Calls, Full Love',
    linesHindi: [
      'भागदौड़ में भले ही हफ़्तों बात न हो पाए काम के चलते कभी',
      'पर एक कॉल लगते ही लगता है जैसे कल शाम ही तो मिले थे',
    ],
    linesHinglish: [
      'Bhaagdaud mein bhale hi hafton baat na ho paaye kaam ke chalte kabhi',
      'Par ek call lagte hi lagta hai jaise kal shaam hi to mile the',
    ],
    linesEnglish: [
      'Busy weeks may pass without a single proper catch-up phone call',
      'Yet the second we speak, it feels like we met just last evening',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'चोरी-छिपे खाई आइसक्रीम',
    titleEnglish: 'Secret Midnight Ice Cream',
    linesHindi: [
      'सबके सोने के बाद फ्रिज से आइसक्रीम निकालकर आधा-आधा खाना',
      'बचपन का वह मीठा अपराध आज भी सबसे प्यारा राज़ है हमारा',
    ],
    linesHinglish: [
      'Sabke sone ke baad fridge se ice-cream nikaalkar aadha-aadha khaana',
      'Bachpan ka woh meetha apraadh aaj bhi sabse pyara raaz hai hamaara',
    ],
    linesEnglish: [
      'Sneaking ice cream from the freezer after everyone went to sleep',
      'Remains our favorite sweet childhood crime we still laugh about',
    ],
  },
  {
    title: 'थके कंधों पर छोटा सा सिर',
    titleEnglish: 'Head Resting on Tired Shoulder',
    linesHindi: [
      'दुनिया की ठोकरें खाकर जब भाई चुपचाप कमरे में बैठ जाता है',
      'तब छोटी बहन के दो मीठे शब्द उसे फिर से खड़ा कर देते हैं',
    ],
    linesHinglish: [
      'Duniya ki thokrein khaakar jab bhai chupchaap kamre mein baith jaata hai',
      'Tab chhoti behen ke do meethe shabd use phir se khada kar dete hain',
    ],
    linesEnglish: [
      'When life knocks a brother down and he sits silent in his room',
      'Two gentle words from his little sister raise him right back up',
    ],
  },
  {
    title: 'बचपन की पेंसिल और शार्पनर',
    titleEnglish: 'Shared Pencils and Sharpener',
    linesHindi: [
      'मेरी पेंसिल छीलकर आधी तोड़ देने की शरारत भी क्या गज़ब थी',
      'अब लाखों के लेनदेन में भी वैसी ख़ुशी कहाँ मिलती है भाई',
    ],
    linesHinglish: [
      'Meri pencil chheelkar aadhi tod dene ki sharaarat bhi kya gazab thi',
      'Ab laakhon ke lenden mein bhi waisi khushi kahaan milti hai bhai',
    ],
    linesEnglish: [
      'Swiping my sharpener and snapping my pencil tip was peak mischief',
      'Big grown-up deals rarely match that pure, carefree joy anymore',
    ],
  },
  {
    title: 'गुलाबी लिफ़ाफ़े में बचत',
    titleEnglish: 'Coin Jar Shared Together',
    linesHindi: [
      'मेले में जाने के लिए मिट्टी की गुल्लक दोनों ने मिलकर भरी थी',
      'आज अलग शहरों में रहकर भी मुसीबत में साथ गुल्लक तोड़ते हैं',
    ],
    linesHinglish: [
      'Mele mein jaane ke liye mitti ki gullak dono ne milkar bhari thi',
      'Aaj alag shehron mein rehkar bhi musibat mein saath gullak todte hain',
    ],
    linesEnglish: [
      'We once stuffed coins together into one clay piggy bank for the fair',
      'Even across separate cities, we still pool everything in tough times',
    ],
  },
  {
    title: 'छत की मुँडेर पर बातें',
    titleEnglish: 'Chats Along the Rooftop Edge',
    linesHindi: [
      'गर्मियों की रात में छत पर ठंडी हवा और हमारी बेफ़िक्र बातें',
      'उस वक़्त दुनिया की किसी भी चिंता की कोई औक़ात नहीं थी',
    ],
    linesHinglish: [
      'Garmiyon ki raat mein chhat par thandi hawa aur hamaari befikr baatein',
      'Us waqt duniya ki kisi bhi chinta ki koi aukaat nahin thi',
    ],
    linesEnglish: [
      'Summer breezes on the open rooftop and endless careless stories',
      'Back then no worry in the whole wide world stood a chance against us',
    ],
  },
  {
    title: 'अजनबियों के आगे मज़बूत दीवार',
    titleEnglish: 'Solid Wall Against Trouble',
    linesHindi: [
      'मुश्किल चाहे कितनी भी बड़ी सामने खड़ी क्यों न आ जाए मेरी',
      'मेरा भाई हर हाल में ढाल बनकर खड़ा रहेगा, यह यक़ीन काफ़ी है',
    ],
    linesHinglish: [
      'Mushkil chaahe kitni bhi badi saamne khadi kyun na aa jaaye meri',
      'Mera bhai har haal mein dhaal bankar khada rahega, yeh yakeen kaafi hai',
    ],
    linesEnglish: [
      'No matter how tall any problem looms directly across my path',
      'Knowing my brother stands as my shield is all the peace I need',
    ],
  },
  {
    title: 'रोती आँखों में हँसी का बहाना',
    titleEnglish: 'Joke Inside Wet Eyes',
    linesHindi: [
      'मेरी आँख में एक बूँद आँसू आते ही भाई का जोक शुरू हो जाता है',
      'ताकि बहन को रोने का मौका ही न मिले और वह खिलखिला उठे',
    ],
    linesHinglish: [
      'Meri aankh mein ek boond aansoo aate hi bhai ka joke shuru ho jaata hai',
      'Taaki behen ko rone ka mauka hi na mile aur woh khilkhila uthe',
    ],
    linesEnglish: [
      'The second one tear drops, my brother launches a ridiculous joke',
      'Just so I never get a chance to cry and start laughing instead',
    ],
  },
  {
    title: 'लड़ाई के बाद पानी पूछना',
    titleEnglish: 'Offering Water After a Fight',
    linesHindi: [
      'ज़ोरदार झगड़े के बाद बात बंद होती है तो सबसे पहले वही बोलता है',
      'सुन, चाय पी रही है क्या, और यही भाई की सबसे प्यारी माफ़ी होती है',
    ],
    linesHinglish: [
      'Zordaar jhagde ke baad baat band hoti hai to sabse pehle wahi bolta hai',
      'Sun, chai pee rahi hai kya, aur yahi bhai ki sabse pyari maafi hoti hai',
    ],
    linesEnglish: [
      'During silent treatment after a fierce fight, he breaks the ice first',
      'Asking hey want some tea—a brother’s sweetest unspoken apology',
    ],
  },
  {
    title: 'सास-ससुर के घर में भी भाई का मान',
    titleEnglish: 'Pride Across Two Households',
    linesHindi: [
      'बहन जब गर्व से कहती है कि यह मेरे भाई ने भेजा है आज',
      'तो उसकी आँखों की चमक भाई की सारी मेहनत वसूल कर देती है',
    ],
    linesHinglish: [
      'Behen jab garv se kehti hai ki yeh mere bhai ne bheja hai aaj',
      'To uski aankhon ki chamak bhai ki saari mehnat vasool kar deti hai',
    ],
    linesEnglish: [
      'When a sister proudly says my brother sent this over for us',
      'The sparkle in her eyes repays every ounce of his hard labor',
    ],
  },
  {
    title: 'नए जूते और पुरानी यादें',
    titleEnglish: 'New Shoes, Old Memories',
    linesHindi: [
      'पहले एक ही जोड़ी नए जूते बड़े भाई से छोटे को मिल जाया करते थे',
      'उन पुराने जूतों में भी बड़े भाई का प्यार और आशीर्वाद रहता था',
    ],
    linesHinglish: [
      'Pehle ek hi jodi naye joote bade bhai se chhote ko mil jaaya karte the',
      'Un puraane jooton mein bhi bade bhai ka pyar aur aashirwaad rehta tha',
    ],
    linesEnglish: [
      'Hand-me-down shoes used to pass smoothly from elder to younger',
      'Even worn soles carried an older sibling’s quiet warmth and grace',
    ],
  },
  {
    title: 'हर त्योहार की पहली रौनक',
    titleEnglish: 'First Spark of Every Festival',
    linesHindi: [
      'त्योहार चाहे होली का हो या दिवाली के दीपों वाली रात हो',
      'भाई-बहन एक साथ न हों तो हर सजावट अधूरी सी लगती है',
    ],
    linesHinglish: [
      'Tyohaar chaahe Holi ka ho ya Diwali ke deepo waali raat ho',
      'Bhai-behen ek saath na hon to har sajaawat adhoori si lagti hai',
    ],
    linesEnglish: [
      'Whether it is splashing Holi colors or lighting Diwali lamps at dusk',
      'If brother and sister are apart, every celebration feels half lit',
    ],
  },
  {
    title: 'सीक्रेट क्रश पर खिंचाई',
    titleEnglish: 'Teasing About Secret Crushes',
    linesHindi: [
      'बहन के सामने किसी का नाम आते ही जो मुस्कान भाई के चेहरे पर आती है',
      'उस शरारत से बचना दुनिया के किसी भी क़िले को जीतने से कठिन है',
    ],
    linesHinglish: [
      'Behen ke saamne kisi ka naam aate hi jo muskaan bhai ke chehre par aati hai',
      'Us sharaarat se bachna duniya ke kisi bhi kile ko jeetne se kathin hai',
    ],
    linesEnglish: [
      'That sneaky smirk a sibling flashes the instant someone’s name pops up',
      'Is harder to dodge than storming the tallest fortress on earth',
    ],
  },
  {
    title: 'तस्वीरों में छिपा बचपन',
    titleEnglish: 'Childhood Hidden in Frames',
    linesHindi: [
      'घर की दीवार पर टँगी हमारी बचपन की धुँधली सी एक तस्वीर',
      'जब भी नज़र जाती है, बरसों की थकान पल भर में उड़ जाती है',
    ],
    linesHinglish: [
      'Ghar ki deewar par tangi hamaari bachpan ki dhundhli si ek tasveer',
      'Jab bhi nazar jaati hai, barson ki thakaan pal bhar mein ud jaati hai',
    ],
    linesEnglish: [
      'One faded childhood snapshot hanging crookedly on our living room wall',
      'Melts away years of grown-up fatigue every single time I look up',
    ],
  },
  {
    title: 'मेरी कामयाबी की पहली ताली',
    titleEnglish: 'First Clap for My Win',
    linesHindi: [
      'रिज़ल्ट आने पर सबसे ज़ोर से चीखकर खुशी मनाने वाला इंसान',
      'हमेशा मेरी बहन ही रही है जिसने मुझसे ज़्यादा मुझ पर भरोसा किया',
    ],
    linesHinglish: [
      'Result aane par sabse zor se cheekhkar khushi manaane wala insaan',
      'Hamesha meri behen hi rahi hai jisne mujhse zyada mujh par bharosa kiya',
    ],
    linesEnglish: [
      'The loudest cheer the moment my results came out was always hers',
      'My sister always believed in my wins even more deeply than I did',
    ],
  },
  {
    title: 'भाई की डाँट, बहन का नखरा',
    titleEnglish: 'Brother’s Lecture, Sister’s Sass',
    linesHindi: [
      'तुम बड़े हो गए तो क्या हुआ, नखरे तो मैं आज भी उठाऊँगी अपने',
      'हर छोटी बहन का यही मीठा हक़ भाई को ताउम्र जवान रखता है',
    ],
    linesHinglish: [
      'Tum bade ho gaye to kya hua, nakhre to main aaj bhi uthaaungi apne',
      'Har chhoti behen ka yahi meetha haq bhai ko taa-umr jawaan rakhta hai',
    ],
    linesEnglish: [
      'So what if we grew up, I will still throw tantrums whenever I want',
      'That sweet little-sister privilege keeps a brother young forever',
    ],
  },
  {
    title: 'सड़क पार कराती बड़ी उँगली',
    titleEnglish: 'Guiding Hand Across the Street',
    linesHindi: [
      'भीड़ भरी सड़क पार कराते वक़्त आज भी बहन हाथ पकड़ लेती है',
      'बचपन की वह आदत बताती है कि उम्र बढ़ने से फ़िक्र नहीं घटती',
    ],
    linesHinglish: [
      'Bheed bhari sadak paar karaate waqt aaj bhi behen haath pakad leti hai',
      'Bachpan ki woh aadat bataati hai ki umr badhne se fikr nahin ghatti',
    ],
    linesEnglish: [
      'Crossing busy traffic even now, my sister instinctively grabs my hand',
      'Proving that growing older never shrinks a sibling’s protective heart',
    ],
  },
  {
    title: 'अधूरी प्लेट का पूरा स्वाद',
    titleEnglish: 'Best Taste in Shared Plate',
    linesHindi: [
      'अपनी थाली छोड़कर भाई के हिस्से से निवाला छीनकर खाने में',
      'जो सुकून मिलता है वह दुनिया के किसी फाइव स्टार में नहीं',
    ],
    linesHinglish: [
      'Apni thaali chhodkar bhai ke hisse se nivaala chheenkar khaane mein',
      'Jo sukoon milta hai woh duniya ke kisi five star mein nahin',
    ],
    linesEnglish: [
      'Ignoring your own full plate just to steal bites off your sibling’s',
      'Brings a comfort no five-star dining hall could ever recreate',
    ],
  },
  {
    title: 'भीगे स्टेशन पर आख़िरी गले मिलना',
    titleEnglish: 'Last Platform Hug in Rain',
    linesHindi: [
      'ट्रेन चलने की सीटी बजते ही बहन ने आँसू पोंछकर मुस्कुरा दिया',
      'ताकि सफ़र पर जाते भाई का मन भारी न हो रास्ते भर',
    ],
    linesHinglish: [
      'Train chalne ki seeti bajte hi behen ne aansoo ponchhkar muskura diya',
      'Taaki safar par jaate bhai ka mann bhaari na ho raaste bhar',
    ],
    linesEnglish: [
      'As the departure whistle blew, she wiped her tears and smiled bright',
      'Just so her departing brother would not ride away with a heavy heart',
    ],
  },
  {
    title: 'क़दम-क़दम पर सच्ची दुआ',
    titleEnglish: 'Blessing at Every Step',
    linesHindi: [
      'इंसान कितना भी अमीर बन जाए अपनी मेहनत के दम पर यारो',
      'पर बहन की दुआ से बड़ा कोई सुरक्षा कवच नहीं होता',
    ],
    linesHinglish: [
      'Insaan kitna bhi ameer ban jaaye apni mehnat ke dam par yaaro',
      'Par behen ki dua se bada koi suraksha kavach nahin hota',
    ],
    linesEnglish: [
      'No matter how much wealth anyone gathers through years of hustle',
      'No armor stands stronger than a sister’s sincere daily blessing',
    ],
  },
  {
    title: 'झूठ पकड़ने वाला डिटेक्टर',
    titleEnglish: 'Built-In Lie Detector',
    linesHindi: [
      'दुनिया के सामने भले ही कह दो कि सब कुछ एकदम ठीक चल रहा है',
      'पर भाई-बहन दो सेकंड में आवाज पहचानकर सच पूछ ही लेते हैं',
    ],
    linesHinglish: [
      'Duniya ke saamne bhale hi keh do ki sab kuch ekdum theek chal raha hai',
      'Par bhai-behen do second mein aawaz pehchaankar sach poochh hi lete hain',
    ],
    linesEnglish: [
      'You can tell everyone else that life is going totally great lately',
      'Yet your sibling reads the tremble in your voice within two seconds',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'घर की सबसे प्यारी शोरगुल',
    titleEnglish: 'Sweetest Chaos in the House',
    linesHindi: [
      'मम्मी अक्सर कहती हैं कि तुम दोनों बहुत शोर मचाते हो घर में',
      'पर एक दिन कोई न दिखे तो घर की खामोशी भी उन्हें काटती है',
    ],
    linesHinglish: [
      'Mummy aksar kehti hain ki tum dono bahut shor machaate ho ghar mein',
      'Par ek din koi na dikhe to ghar ki khaamoshi bhi unhein kaatati hai',
    ],
    linesEnglish: [
      'Mom always scolds us for raising such a racket indoors all day',
      'Yet if even one of us travels away, the quiet house feels unbearable',
    ],
  },
  {
    title: 'चुटकुले से ज़्यादा प्यारा चिढ़ाना',
    titleEnglish: 'Playful Banter Over Jokes',
    linesHindi: [
      'तुम जैसा बेवकूफ़ भाई किसी को न मिले, यह ताना रोज़ मिलता है',
      'पर अगले ही पल वही कहती है, तू मेरी जान है पगले',
    ],
    linesHinglish: [
      'Tum jaisa bewakoof bhai kisi ko na mile, yeh taana roz milta hai',
      'Par agle hi pal wahi kehti hai, tu meri jaan hai pagle',
    ],
    linesEnglish: [
      'Daily she teases nobody deserves a goofy brother quite like you',
      'And two minutes later she admits honestly, you are my whole heart',
    ],
  },
  {
    title: 'बचपन के कोने की गुप्त बैठक',
    titleEnglish: 'Secret Corner Meetings',
    linesHindi: [
      'माँ की डाँट से बचने के लिए दोनों की जो गुप्त योजना बनती थी',
      'वह किसी भी बड़ी फिल्म की स्क्रिप्ट से कम मज़ेदार नहीं थी',
    ],
    linesHinglish: [
      'Maa ki daant se bachne ke liye dono ki jo gupt yojana banti thi',
      'Woh kisi bhi badi film ki script se kam mazedaar nahin thi',
    ],
    linesEnglish: [
      'The secret cover-up plots we drafted to dodge Mom’s strict lectures',
      'Were far more thrilling than any blockbuster movie script ever written',
    ],
  },
  {
    title: 'शादी के मंडप में भीगा रुमाल',
    titleEnglish: 'Wet Handkerchief at the Wedding',
    linesHindi: [
      'शादी में हँसी-ठिठोली के बीच अचानक जब फेरे शुरू होते हैं',
      'तब सबसे सख़्त दिखने वाले भाई की आँखें भी नम हो ही जाती हैं',
    ],
    linesHinglish: [
      'Shaadi mein hansi-thitholi ke beech achaanak jab phere shuru hote hain',
      'Tab sabse sakht dikhne wale bhai ki aankhein bhi nam ho hi jaati hain',
    ],
    linesEnglish: [
      'Amidst all wedding laughter, the instant the sacred vows begin',
      'Even the toughest-looking brother finds warm tears filling his eyes',
    ],
  },
  {
    title: 'एक कॉल पर दौड़ा चला आना',
    titleEnglish: 'Showing Up on One Ring',
    linesHindi: [
      'किसी काम में फँसने पर सौ दोस्तों के नंबर डायल करने पड़ते हैं',
      'पर भाई या बहन का नंबर हमेशा पहली रिंग में उठा लिया जाता है',
    ],
    linesHinglish: [
      'Kisi kaam mein phansne par sau doston ke number dial karne padte hain',
      'Par bhai ya behen ka number hamesha pehli ring mein utha liya jaata hai',
    ],
    linesEnglish: [
      'When trouble strikes, friends might take ten calls before replying',
      'A brother or sister’s phone always picks up on the very first ring',
    ],
  },
  {
    title: 'रसोई में आधी रात की चोरी',
    titleEnglish: 'Midnight Kitchen Raid Duo',
    linesHindi: [
      'सबके सो जाने पर चुपचाप फ्रिज खोलने की आवाज़ पहचानकर',
      'तुम भी पीछे-पीछे आकर कहती हो, मेरा हिस्सा भी निकालना',
    ],
    linesHinglish: [
      'Sabke so jaane par chupchaap fridge kholne ki aawaz pehchaankar',
      'Tum bhi peechhe-peechhe aakar kehti ho, mera hissa bhi nikaalna',
    ],
    linesEnglish: [
      'Hearing the fridge door creak softly past midnight from down the hall',
      'You tiptoe right behind whispering save half of whatever you found',
    ],
  },
  {
    title: 'ताक़त का अनदेखा स्रोत',
    titleEnglish: 'Unseen Source of Grit',
    linesHindi: [
      'जब लगता है कि अब दुनिया की भीड़ में कोई अपना नहीं बचा',
      'तब बहन की एक मुस्कुराती तस्वीर फिर से जान फूँक देती है',
    ],
    linesHinglish: [
      'Jab lagta hai ki ab duniya ki bheed mein koi apna nahin bacha',
      'Tab behen ki ek muskuraati tasveer phir se jaan phoonk deti hai',
    ],
    linesEnglish: [
      'Whenever the crowd makes you feel completely alone in the city',
      'One smiling snapshot of your sister breathes fresh life straight back',
    ],
  },
  {
    title: 'ज़्यादा बोलने वाली, कम न होने वाली',
    titleEnglish: 'Endless Chatter, Endless Care',
    linesHindi: [
      'बिना रुके घंटे भर अपनी पूरी दिनचर्या सुना देने वाली बहन',
      'अगर दो दिन शांत दिख जाए तो पूरा घर बेचैन हो उठता है',
    ],
    linesHinglish: [
      'Bina ruke ghante bhar apni poori dincharya suna dene waali behen',
      'Agar do din shaant dikh jaaye to poora ghar bechain ho uthta hai',
    ],
    linesEnglish: [
      'The sister who narrates her entire day nonstop for an hour straight',
      'Leaves the whole house worried if she goes quiet for just two days',
    ],
  },
  {
    title: 'बचपन के स्कूल प्रोजेक्ट',
    titleEnglish: 'Late-Night School Projects',
    linesHindi: [
      'रात के ग्यारह बजे याद आए स्कूल के चार्ट पेपर को रंगना',
      'बड़ी बहन की मदद के बिना वह सुबह कभी मुमकिन ही नहीं होती',
    ],
    linesHinglish: [
      'Raat ke gyaarah baje yaad aaye school ke chart paper ko rangna',
      'Badi behen ki madad ke bina woh subah kabhi mumkin hi nahin hoti',
    ],
    linesEnglish: [
      'Coloring forgotten poster boards frantically at eleven at night',
      'Could never have survived morning class without an elder sister’s help',
    ],
  },
  {
    title: 'रंगों से भरी रक्षाबंधन की थाली',
    titleEnglish: 'Colorful Rakhi Plate Ritual',
    linesHindi: [
      'थाली में सजा दीपक, रोली, मिठाई और चमकती हुई राखी',
      'साल भर के लिए दोनों के चेहरे पर सुनहरी मुस्कान लिख जाती है',
    ],
    linesHinglish: [
      'Thaali mein saja deepak, roli, mithaai aur chamakti hui rakhi',
      'Saal bhar ke liye dono ke chehre par sunahari muskaan likh jaati hai',
    ],
    linesEnglish: [
      'A glowing lamp, vermilion, sweets, and a bright Rakhi on one tray',
      'Draws a golden smile across both faces that lasts all year round',
    ],
  },
  {
    title: 'चाय के साथ गॉसिप पार्टनर',
    titleEnglish: 'Forever Tea & Gossip Buddy',
    linesHindi: [
      'रिश्तेदारों की मज़ेदार बातें हों या मोहल्ले का कोई नया क़िस्सा',
      'चाय की चुस्की के साथ भाई-बहन की जोड़ी सबसे बेस्ट टीम है',
    ],
    linesHinglish: [
      'Rishtedaaron ki mazedaar baatein hon ya mohalle ka koi naya kissa',
      'Chai ki chuski ke saath bhai-behen ki jodi sabse best team hai',
    ],
    linesEnglish: [
      'Whether sharing funny family updates or wild neighborhood stories',
      'Over hot cups of tea, brother and sister form an undefeated team',
    ],
  },
  {
    title: 'बुरा वक़्त टालने वाला हाथ',
    titleEnglish: 'Hand Pulling You From Storms',
    linesHindi: [
      'गलत रास्ते पर क़दम पड़ने से पहले ही जो टोक दे बेझिझक',
      'वह बड़ा भाई किस्मत वालों को ही मिला करता है जीवन में',
    ],
    linesHinglish: [
      'Galat raaste par kadam padne se pehle hi jo tok de bejhijhak',
      'Woh bada bhai kismat waalon ko hi mila karta hai jeevan mein',
    ],
    linesEnglish: [
      'Someone who stops you boldly before a single step hits the wrong road',
      'Having such an elder brother is reserved only for the truly lucky',
    ],
  },
  {
    title: 'दुआओं से भरा हर लिफ़ाफ़ा',
    titleEnglish: 'Every Gift Filled With Wishes',
    linesHindi: [
      'सगुन के सौ रुपये हों या महँगा सा कोई नया फ़ोन हाथ में',
      'बहन की मुस्कान देखकर हर रुपया करोड़ों सा लगने लगता है',
    ],
    linesHinglish: [
      'Sagun ke sau rupaye hon ya mehnga sa koi naya phone haath mein',
      'Behen ki muskaan dekhkar har rupaya karodon sa lagne lagta hai',
    ],
    linesEnglish: [
      'Whether it is a modest token note or a brand-new gadget in hand',
      'One radiant grin from your sister turns pennies into priceless gold',
    ],
  },
  {
    title: 'एक जैसी हँसी, अलग रास्ते',
    titleEnglish: 'Same Laugh on Different Roads',
    linesHindi: [
      'काम और शादी के बाद भले ही शहर और घर बदल जाएँ हमारे',
      'पर हँसने का अंदाज़ और बात करने का लहज़ा एक जैसा ही रहता है',
    ],
    linesHinglish: [
      'Kaam aur shaadi ke baad bhale hi shehar aur ghar badal jaayein hamaare',
      'Par hansne ka andaaz aur baat karne ka lehja ek jaisa hi rehta hai',
    ],
    linesEnglish: [
      'Careers and marriage may lead our homes into completely different towns',
      'Yet the way we laugh and finish sentences stays wonderfully identical',
    ],
  },
  {
    title: 'मज़ाक़ में छुपी सच्चाई',
    titleEnglish: 'Truth Hidden Inside Teasing',
    linesHindi: [
      'मुँह पर भले ही सौ बार कह दूँ कि तू बिल्कुल पागल है यार',
      'पर दिल जानता है कि तुझसे प्यारा इंसान मैंने देखा ही नहीं',
    ],
    linesHinglish: [
      'Munh par bhale hi sau baar keh doon ki tu bilkul paagal hai yaar',
      'Par dil jaanta hai ki tujhse pyara insaan maine dekha hi nahin',
    ],
    linesEnglish: [
      'Out loud I might roast you a hundred times calling you total trouble',
      'Deep inside my heart knows I have never met anyone kinder than you',
    ],
  },
  {
    title: 'चश्मे के पीछे की मुस्कान',
    titleEnglish: 'Smile Behind Reading Glasses',
    linesHindi: [
      'उम्र बढ़ने के साथ जब बालों में सफ़ेदी झाँकने लगेगी कल को',
      'तब भी हम दोनों एक-दूसरे को छोटू और चिंटू कहकर ही पुकारेंगे',
    ],
    linesHinglish: [
      'Umr badhne ke saath jab baalon mein safedi jhaankne lagegi kal ko',
      'Tab bhi hum dono ek-doosre ko chhotu aur chintu kehkar hi pukaarenge',
    ],
    linesEnglish: [
      'Even decades later when silver hairs show and glasses rest on noses',
      'We will still call each other by our silly childhood nicknames',
    ],
  },
  {
    title: 'पसंदीदा गाना और लंबा सफ़र',
    titleEnglish: 'Road Trip With Favorite Playlist',
    linesHindi: [
      'हाईवे पर तेज़ हवा, पुरानी प्लेलिस्ट और साथ बैठी छोटी बहन',
      'इस दुनिया की सबसे खूबसूरत और हल्की शाम वही होती है',
    ],
    linesHinglish: [
      'Highway par tez hawa, puraani playlist aur saath baithi chhoti behen',
      'Is duniya ki sabse khoobsurat aur halki shaam wahi hoti hai',
    ],
    linesEnglish: [
      'Open highway breeze, throwbacks on speakers, and sister riding shotgun',
      'Makes for the lightest, happiest evening anywhere under the sky',
    ],
  },
  {
    title: 'डर के वक़्त पहला नाम',
    titleEnglish: 'First Name Spoken in Fear',
    linesHindi: [
      'कभी अँधेरे में कोई अजीब सी आहट सुनाई दे जाए रात को',
      'तो जुबान पर पहला नाम माँ के बाद हमेशा भाई का ही आता है',
    ],
    linesHinglish: [
      'Kabhi andhere mein koi ajeeb si aahat sunaayi de jaaye raat ko',
      'To jubaan par pehla naam maa ke baad hamesha bhai ka hi aata hai',
    ],
    linesEnglish: [
      'Whenever an eerie sound breaks the quiet in the middle of night',
      'Right after Mom, a brother’s name is the first word on our lips',
    ],
  },
  {
    title: 'मेहनत से सजा पहला घर',
    titleEnglish: 'Blessing the First Earned Home',
    linesHindi: [
      'जब छोटे भाई के नए घर में बहन पहला दीया जलाने आती है',
      'तब पूरे परिवार की वर्षों की तपस्या सार्थक होती दिखती है',
    ],
    linesHinglish: [
      'Jab chhote bhai ke naye ghar mein behen pehla diya jalaane aati hai',
      'Tab poore parivaar ki varshon ki tapasya saarthak hoti dikhti hai',
    ],
    linesEnglish: [
      'When a sister arrives to light the first lamp in her brother’s new home',
      'Years of family struggle suddenly bloom into pure celebration',
    ],
  },
  {
    title: 'बिना शर्त की यारी',
    titleEnglish: 'Lifelong Ally Without Conditions',
    linesHindi: [
      'दोस्त बदल जाते हैं अक्सर शहर, समय और हालात के साथ यारो',
      'पर भाई-बहन का रिश्ता हर मौसम में ज्यों का त्यों हरा रहता है',
    ],
    linesHinglish: [
      'Dost badal jaate hain aksar shehar, samay aur haalaat ke saath yaaro',
      'Par bhai-behen ka rishta har mausam mein jyon ka tyon hara rehta hai',
    ],
    linesEnglish: [
      'Friends often drift away with changing cities, seasons, and schedules',
      'Yet the sibling bond stays evergreen through every twist of time',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'बचपन का झूला और कागज़ की नाव',
    titleEnglish: 'Paper Boats in Monsoon Puddles',
    linesHindi: [
      'पहली बारिश में कागज़ की नाव बनाने की होड़ लगती थी हम दोनों में',
      'किसकी नाव ज़्यादा दूर तक बहेगी, इसी बात पर शर्त लगती थी',
    ],
    linesHinglish: [
      'Pehli baarish mein kaagaz ki naav banaane ki hod lagti thi hum dono mein',
      'Kiski naav zyada door tak behegi, isi baat par shart lagti thi',
    ],
    linesEnglish: [
      'First monsoon raindrops sparked races to fold fast paper boats',
      'We wagered whose little vessel would sail farthest down the lane',
    ],
  },
  {
    title: 'मेहमान जाते ही बची मिठाई पर हमला',
    titleEnglish: 'Raiding Leftover Party Sweets',
    linesHindi: [
      'मेहमानों के दरवाज़े से बाहर निकलते ही काजू कतली पर टूट पड़ना',
      'भाई-बहन के बिना इस शरारत का आधा मज़ा ही खत्म हो जाता है',
    ],
    linesHinglish: [
      'Mehmaanon ke darwaze se baahar nikalte hi kaju katli par toot padna',
      'Bhai-behen ke bina is sharaarat ka aadha maza hi khatam ho jaata hai',
    ],
    linesEnglish: [
      'Swooping onto the leftover sweet platter the second guests step out',
      'Would never taste half as thrilling without a sibling partner in crime',
    ],
  },
  {
    title: 'मेरी हर बुरी आदत की खबर',
    titleEnglish: 'Keeper of All My Quirks',
    linesHindi: [
      'तुझे सब पता है कि मुझे कब गुस्सा आता है और कब भूख लगती है',
      'यही अनकही समझदारी हमारे रिश्ते को दुनिया से अलग बनाती है',
    ],
    linesHinglish: [
      'Tujhe sab pata hai ki mujhe kab gussa aata hai aur kab bhookh lagti hai',
      'Yahi ankahi samajhdaari hamaare rishte ko duniya se alag banaati hai',
    ],
    linesEnglish: [
      'You know down to the minute when I get cranky or secretly hungry',
      'That unspoken intuition sets our bond completely apart from the world',
    ],
  },
  {
    title: 'छोटी बहन का जन्मदिन',
    titleEnglish: 'Little Sister’s Special Birthday',
    linesHindi: [
      'चाहे कितनी भी बड़ी अफसर बन जाए तू कल को अपने जीवन में',
      'मेरे लिए हमेशा वही चोटी वाली नटखट गुड़िया ही रहेगी तू',
    ],
    linesHinglish: [
      'Chaahe kitni bhi badi afsar ban jaaye tu kal ko apne jeevan mein',
      'Mere liye hamesha wahi choti waali natkhat gudiya hi rahegi tu',
    ],
    linesEnglish: [
      'No matter how high you climb or what big title you earn tomorrow',
      'To me you will forever stay that cheeky kid with messy pigtails',
    ],
  },
  {
    title: 'तंग गलियों से बड़े सपनों तक',
    titleEnglish: 'From Narrow Lanes to Big Dreams',
    linesHindi: [
      'एक छोटे से कमरे में बैठकर देखे थे हमने बड़े होने के सपने',
      'आज उनमें से आधे पूरे हो गए और आधे तुम्हारे साथ बाकी हैं',
    ],
    linesHinglish: [
      'Ek chhote se kamre mein baithkar dekhe the humne bade hone ke sapne',
      'Aaj unmein se aadhe poore ho gaye aur aadhe tumhaare saath baaqi hain',
    ],
    linesEnglish: [
      'Sitting inside one tiny bedroom we sketched grand dreams for life',
      'Half have come true already and the rest are still waiting for us',
    ],
  },
  {
    title: 'जब घर याद आए तो फ़ोन करना',
    titleEnglish: 'Call Me When Homesick Hits',
    linesHindi: [
      'कभी बड़े शहर की भीड़ में दिल घबराए तो हिचकना मत यार',
      'तेरा भाई बस एक वीडियो कॉल की दूरी पर हमेशा हाज़िर है',
    ],
    linesHinglish: [
      'Kabhi bade shehar ki bheed mein dil ghabraaye to hichakna mat yaar',
      'Tera bhai bas ek video call ki doori par hamesha haazir hai',
    ],
    linesEnglish: [
      'If big-city crowds ever overwhelm your heart, never hesitate once',
      'Your brother stays right here just one quick video call away',
    ],
  },
  {
    title: 'रंग-बिरंगी चूड़ियों की खनक',
    titleEnglish: 'Chiming Bangles in Childhood Courtyard',
    linesHindi: [
      'दीदी की चूड़ियों की खनक और पायल की हल्की सी आवाज़',
      'सालों बाद भी मायके की सुबह की पहचान बनकर गूँजती है',
    ],
    linesHinglish: [
      'Didi ki choodiyon ki khanak aur paayal ki halki si aawaz',
      'Saalon baad bhi maayke ki subah ki pehchaan bankar goonjti hai',
    ],
    linesEnglish: [
      'The gentle clink of elder sister’s bangles and soft anklets',
      'Still echoes through memories as the true sound of home mornings',
    ],
  },
  {
    title: 'मेरी गलतियों पर सबसे बड़ा पर्दा',
    titleEnglish: 'Covering Up My Blunders',
    linesHindi: [
      'स्कूल में कम नंबर आने पर रिपोर्ट कार्ड मम्मी से छिपाना',
      'उस बुरे वक़्त में भाई का साथ किसी सुपरहीरो से कम नहीं था',
    ],
    linesHinglish: [
      'School mein kam number aane par report card mummy se chhipaana',
      'Us bure waqt mein bhai ka saath kisi superhero se kam nahin tha',
    ],
    linesEnglish: [
      'Hiding low test marks gently before Mom spotted the report card',
      'Made my sibling feel nothing short of a real-life superhero',
    ],
  },
  {
    title: 'छुट्टियों की गिनती शुरू',
    titleEnglish: 'Counting Down Holiday Days',
    linesHindi: [
      'रक्षाबंधन या दिवाली से पंद्रह दिन पहले ही कैलेंडर पर निशान लग जाते हैं',
      'बहन कब आ रही है, यही सवाल पूरा घर रोज़ पूछता है',
    ],
    linesHinglish: [
      'Rakshabandhan ya Diwali se pandrah din pehle hi calendar par nishaan lag jaate hain',
      'Behen kab aa rahi hai, yahi sawaal poora ghar roz poochhta hai',
    ],
    linesEnglish: [
      'Circles go on the calendar fifteen days before Rakhi or Diwali',
      'When is sister coming home becomes the entire family’s daily refrain',
    ],
  },
  {
    title: 'दो भाइयों के बीच एक बहन',
    titleEnglish: 'One Princess Between Two Brothers',
    linesHindi: [
      'जिस घर में दो भाइयों के बीच एक प्यारी सी बहन होती है',
      'उस घर में रौनक, अनुशासन और प्यार तीनों एक साथ बसते हैं',
    ],
    linesHinglish: [
      'Jis ghar mein do bhaiyon ke beech ek pyari si behen hoti hai',
      'Us ghar mein raunak, anushaasan aur pyar teeno ek saath baste hain',
    ],
    linesEnglish: [
      'A home blessed with one cherished sister between two protective brothers',
      'Enjoys laughter, warmth, and gentle order all living side by side',
    ],
  },
  {
    title: 'सच्चे दोस्त की कमी नहीं खलती',
    titleEnglish: 'Never Lacking a True Confidant',
    linesHindi: [
      'जिसके पास हर दर्द सुनने वाली एक समझदार बहन होती है',
      'उसे बाहर जाकर किसी झूठे हमदर्द को ढूँढना नहीं पड़ता',
    ],
    linesHinglish: [
      'Jiske paas har dard sunne waali ek samajhdaar behen hoti hai',
      'Use baahar jaakar kisi jhoothe hamdard ko dhoondhna nahin padta',
    ],
    linesEnglish: [
      'Anyone blessed with a wise sister who hears every hidden ache',
      'Never has to go hunting outdoors for fake sympathy from strangers',
    ],
  },
  {
    title: 'गर्मी में बर्फ के गोले का स्वाद',
    titleEnglish: 'Summer Ice Candy Together',
    linesHindi: [
      'जून की तपती दोपहर में दोनों का रंग-बिरंगा बर्फ गोला खाना',
      'रंग लगे होंठ देखकर हँसना आज भी सबसे मीठी तस्वीर है',
    ],
    linesHinglish: [
      'June ki tapti dopahar mein dono ka rang-biranga barf gola khaana',
      'Rang lage honth dekhkar hansna aaj bhi sabse meethi tasveer hai',
    ],
    linesEnglish: [
      'Slurping bright crushed-ice cones under scorching June afternoons',
      'And laughing at each other’s stained tongues stays my favorite snapshot',
    ],
  },
  {
    title: 'भाई का गर्व, बहन का मान',
    titleEnglish: 'Mutual Pride and Dignity',
    linesHindi: [
      'जब बहन अपने पैरों पर खड़ी होकर दुनिया जीत लेती है',
      'तो सबसे चौड़ा सीना उसके भाई का ही होता है भीड़ में',
    ],
    linesHinglish: [
      'Jab behen apne pairon par khadi hokar duniya jeet leti hai',
      'To sabse chauda seena uske bhai ka hi hota hai bheed mein',
    ],
    linesEnglish: [
      'When a sister stands on her own feet and shines before the world',
      'The proudest smile in the entire audience belongs to her brother',
    ],
  },
  {
    title: 'नींद से जगाकर चाय पिलाना',
    titleEnglish: 'Waking Up for Morning Tea',
    linesHindi: [
      'रविवार की सुबह अलार्म बजने से पहले ही रजाई खींच लेना',
      'और हँसते हुए गरम चाय का कप थमाना, यही घर की असली रौनक है',
    ],
    linesHinglish: [
      'Ravivaar ki subah alarm bajne se pehle hi rajai kheench lena',
      'Aur hanste hue garam chai ka cup thamaana, yahi ghar ki asli raunak hai',
    ],
    linesEnglish: [
      'Yanking away the Sunday blanket minutes before the alarm rings',
      'Just to hand over hot tea laughing is true magic at home',
    ],
  },
  {
    title: 'बड़ी दीदी की पहली साड़ी',
    titleEnglish: 'Elder Sister’s First Saree',
    linesHindi: [
      'फेयरवेल वाले दिन जब पहली बार दीदी ने साड़ी पहनी थी',
      'तब सबसे पहले उसकी नज़र उतारने वाला छोटा भाई ही खड़ा था',
    ],
    linesHinglish: [
      'Farewell waale din jab pehli baar didi ne saree pehni thi',
      'Tab sabse pehle uski nazar utaarne wala chhota bhai hi khada tha',
    ],
    linesEnglish: [
      'On farewell morning when elder sister draped her very first saree',
      'Her little brother stood right there smiling proudest of all',
    ],
  },
  {
    title: 'तकिये की लड़ाई का अखाड़ा',
    titleEnglish: 'Living Room Pillow Arena',
    linesHindi: [
      'रविवार दोपहर को सोफ़े के कुशन हवा में उड़ते थे जब दोनों लड़ते थे',
      'पापा की एक आवाज़ सुनते ही दोनों चुपचाप किताब खोल लेते थे',
    ],
    linesHinglish: [
      'Ravivaar dopahar ko sofe ke cushion hawa mein udte the jab dono ladte the',
      'Papa ki ek aawaz sunte hi dono chupchaap kitaab khol lete the',
    ],
    linesEnglish: [
      'Sunday afternoon sofa cushions flew across the hall during pillow wars',
      'One footstep from Dad and both immediately pretended to study hard',
    ],
  },
  {
    title: 'रिटायरमेंट तक का साथ',
    titleEnglish: 'Companions Until Old Age',
    linesHindi: [
      'ज़िंदगी के हर मोड़ पर रिश्ते बदलते और बनते रहते हैं यारो',
      'पर बचपन से बुढ़ापे तक साथ चलने वाला इकलौता साथी भाई-बहन है',
    ],
    linesHinglish: [
      'Zindagi ke har mod par rishte badalte aur bante rehte hain yaaro',
      'Par bachpan se budhaape tak saath chalne wala iklauta saathi bhai-behen hai',
    ],
    linesEnglish: [
      'Friends and circles keep shifting through different phases of life',
      'Only a sibling walks beside you from cradle mornings to silver hair',
    ],
  },
  {
    title: 'दहेज की नहीं, भाई के प्यार की आस',
    titleEnglish: 'Longing Only for Brother’s Hug',
    linesHindi: [
      'ब्याही हुई बहन को तुमसे कोई महँगा सामान या सोना नहीं चाहिए',
      'बस साल में दो बार दरवाज़े पर भाई मुस्कुराता दिख जाए, इतना बहुत है',
    ],
    linesHinglish: [
      'Byaahi hui behen ko tumse koi mehnga saamaan ya sona nahin chahiye',
      'Bas saal mein do baar darwaze par bhai muskuraata dikh jaaye, itna bahut hai',
    ],
    linesEnglish: [
      'A married sister never asks you for fancy gifts or shiny gold',
      'Just seeing her brother smiling at her doorstep twice a year means everything',
    ],
  },
  {
    title: 'छोटी गलती पर भी बड़ा भरोसा',
    titleEnglish: 'Unshaken Trust Despite Flaws',
    linesHindi: [
      'चाहे मैं कितना भी लापरवाह और ज़िद्दी क्यों न बन जाऊँ कभी',
      'मेरी बहन का विश्वास मेरे ऊपर से कभी एक इंच भी नहीं हिलता',
    ],
    linesHinglish: [
      'Chaahe main kitna bhi laaparwah aur ziddi kyun na ban jaaun kabhi',
      'Meri behen ka vishwas mere oopar se kabhi ek inch bhi nahin hilta',
    ],
    linesEnglish: [
      'No matter how stubborn or scatterbrained I act from time to time',
      'My sister’s faith in me never budges by a single millimeter',
    ],
  },
  {
    title: 'आँगन में बचपन की गूँज',
    titleEnglish: 'Echoes of Childhood in the Yard',
    linesHindi: [
      'आज भी जब दोनों घर लौटकर एक कमरे में बैठते हैं देर रात तक',
      'तो लगता है समय की घड़ी फिर से बीस साल पीछे घूम गई है',
    ],
    linesHinglish: [
      'Aaj bhi jab dono ghar lautkar ek kamre mein baithte hain der raat tak',
      'To lagta hai samay ki ghadi phir se bees saal peechhe ghoom gayi hai',
    ],
    linesEnglish: [
      'Even today when we visit home and sit talking past midnight',
      'Time seems to rewind itself effortlessly by twenty whole years',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'बहन की सहेलियों से जलन नहीं, मज़ाक़',
    titleEnglish: 'Teasing Sister’s Best Friends',
    linesHindi: [
      'घर पर बहन की सहेलियाँ आते ही भाई का अलग स्वैग निकल आता था',
      'और बहन उन्हें अंदर से इशारे करके चुप रहने को कहती रहती थी',
    ],
    linesHinglish: [
      'Ghar par behen ki saheliyaan aate hi bhai ka alag swag nikal aata tha',
      'Aur behen unhein andar se ishaare karke chup rehne ko kehti rehti thi',
    ],
    linesEnglish: [
      'Whenever sister’s friends dropped by, brother turned up maximum swagger',
      'While she signaled frantically from the hallway telling him to behave',
    ],
  },
  {
    title: 'आख़िरी निवाला और पहला हक़',
    titleEnglish: 'First Claim, Final Share',
    linesHindi: [
      'माँ के हाथ की बनाई आखिरी रोटी पर किसका नाम लिखा होगा आज',
      'यह मीठी बहस हर घर की रसोई को खुशहाल बनाए रखती है',
    ],
    linesHinglish: [
      'Maa ke haath ki banaayi aakhiri roti par kiska naam likha hoga aaj',
      'Yeh meethi behas har ghar ki rasoi ko khushhaal banaaye rakhti hai',
    ],
    linesEnglish: [
      'Friendly debates over who gets the very last hot roti off Mom’s pan',
      'Keep the heartbeat of every family kitchen joyful and alive',
    ],
  },
  {
    title: 'मेरे हिस्से की खुशी तुझे मिले',
    titleEnglish: 'Wishing You My Share of Joy',
    linesHindi: [
      'राखी बाँधते हुए बस एक ही प्रार्थना निकलती है हर बहन के दिल से',
      'मेरे भाई की झोली में इस दुनिया की सारी खुशियाँ बरसती रहें',
    ],
    linesHinglish: [
      'Rakhi baandhte hue bas ek hi prarthana nikalti hai har behen ke dil se',
      'Mere bhai ki jholi mein is duniya ki saari khushiyaan barasti rahein',
    ],
    linesEnglish: [
      'While tying Rakhi, one quiet prayer rises from every sister’s soul',
      'May every bright joy in this world rain abundantly over my brother',
    ],
  },
  {
    title: 'भीड़ भरी शादी में भाई का सहारा',
    titleEnglish: 'Holding Hands in Crowded Halls',
    linesHindi: [
      'किसी बड़े आयोजन में जब थकान और भीड़ से सिर घूमने लगता है',
      'तो बहन का गिलास भरकर पानी ला देना दिल जीत लेता है',
    ],
    linesHinglish: [
      'Kisi bade aayojan mein jab thakaan aur bheed se sir ghoomne lagta hai',
      'To behen ka gilaas bharkar paani la dena dil jeet leta hai',
    ],
    linesEnglish: [
      'At crowded family events when noise and fatigue start spinning your head',
      'Having your sister walk over with cool water melts your heart',
    ],
  },
  {
    title: 'गुस्से के पीछे छुपे आँसू',
    titleEnglish: 'Tears Hidden Behind Scolding',
    linesHindi: [
      'बाइक तेज़ चलाने पर जब बहन गुस्से से चिल्लाती है मुझ पर',
      'तो उस डाँट में मेरी सलामती का डर साफ़ दिखाई दे जाता है',
    ],
    linesHinglish: [
      'Bike tez chalaane par jab behen gusse se chillaati hai mujh par',
      'To us daant mein meri salamati ka dar saaf dikhaayi de jaata hai',
    ],
    linesEnglish: [
      'When my sister scolds me fiercely for speeding down empty roads',
      'Every sharp word simply reveals how deeply she guards my safety',
    ],
  },
  {
    title: 'बचपन की टूटी साइकिल',
    titleEnglish: 'Old Scraped Training Wheels',
    linesHindi: [
      'साइकिल चलाना सिखाते वक़्त जब मैं घुटने छीलकर रोने लगा था',
      'तब बड़े भाई ने पीठ पर बिठाकर पूरा रास्ता घर तक पहुँचाया था',
    ],
    linesHinglish: [
      'Cycle chalaana sikhaate waqt jab main ghutne chheelkar rone laga tha',
      'Tab bade bhai ne peeth par bithaakar poora raasta ghar tak pahunchaaya tha',
    ],
    linesEnglish: [
      'When I scraped both knees learning to ride and burst into tears',
      'My big brother gave me a piggyback ride all the way back home',
    ],
  },
  {
    title: 'कमरे की आधी दीवार मेरी',
    titleEnglish: 'Half the Room Belongs to Me',
    linesHindi: [
      'एक ही कमरे को तकियों से दो हिस्सों में बाँटने का वह खेल पुराना',
      'आज बड़े घरों के अलग कमरों में रहकर बहुत याद आता है यार',
    ],
    linesHinglish: [
      'Ek hi kamre ko takiyon se do hisson mein baantne ka woh khel puraana',
      'Aaj bade gharon ke alag kamron mein rehkar bahut yaad aata hai yaar',
    ],
    linesEnglish: [
      'Dividing our shared bedroom down the middle using a line of pillows',
      'Hits me hard with nostalgia now that we live in separate apartments',
    ],
  },
  {
    title: 'रब का सबसे प्यारा तोहफ़ा',
    titleEnglish: 'Heaven’s Warmest Gift on Earth',
    linesHindi: [
      'माँ-पापा ने दुनिया दिखाई तो भाई-बहन ने जीना सिखा दिया हमें',
      'इस प्यारे से रिश्ते का कर्ज़ कोई भी इंसान नहीं उतार सकता',
    ],
    linesHinglish: [
      'Maa-papa ne duniya dikhaayi to bhai-behen ne jeena sikha diya humein',
      'Is pyare se rishte ka karz koi bhi insaan nahin utaar sakta',
    ],
    linesEnglish: [
      'Parents gave us life, while siblings taught us how to truly laugh through it',
      'Nobody can ever repay the warmth owed to this sacred bond',
    ],
  },
  {
    title: 'सुबह की पहली गुड मॉर्निंग',
    titleEnglish: 'First Morning Check-In Message',
    linesHindi: [
      'सूरज उगते ही बहन के भेजे प्यारे से स्टेटस या संदेश से',
      'लगता है आज का दिन बिना किसी रुकावट के बहुत अच्छा बीतेगा',
    ],
    linesHinglish: [
      'Sooraj ugte hi behen ke bheje pyare se status ya sandesh se',
      'Lagta hai aaj ka din bina kisi rukaawat ke bahut achha beetega',
    ],
    linesEnglish: [
      'Waking up to a cheerful good-morning ping from your sister',
      'Promises that the entire day ahead will flow smoothly and bright',
    ],
  },
  {
    title: 'बिना बताए शॉपिंग बैग लाना',
    titleEnglish: 'Surprise Shopping Bags at Door',
    linesHindi: [
      'कहीं बाहर से लौटते वक़्त बहन के लिए पसंद की चॉकलेट ले आना',
      'भले छोटी सी चीज़ हो पर चेहरे पर पूरे हफ़्ते की खुशी लाती है',
    ],
    linesHinglish: [
      'Kahin baahar se lautte waqt behen ke liye pasand ki chocolate le aana',
      'Bhale chhoti si cheez ho par chehre par poore hafte ki khushi laati hai',
    ],
    linesEnglish: [
      'Grabbing her favorite snack on the way home without saying a word',
      'Costs next to nothing yet sparks a whole week of beaming smiles',
    ],
  },
  {
    title: 'घर की असली चौकीदार',
    titleEnglish: 'Guardian of Family Traditions',
    linesHindi: [
      'भाई भले ही दुनिया जीतने के लिए घर से बाहर कदम रख दे',
      'पर घर के हर संस्कार और याद को बहन ही सँभालकर रखती है',
    ],
    linesHinglish: [
      'Bhai bhale hi duniya jeetne ke liye ghar se baahar kadam rakh de',
      'Par ghar ke har sanskaar aur yaad ko behen hi sambhaalkar rakhti hai',
    ],
    linesEnglish: [
      'Brothers may step outside to chase big ambitions around the globe',
      'While sisters quietly preserve every warmth and tradition inside home',
    ],
  },
  {
    title: 'मुँह फुलाने की अदा',
    titleEnglish: 'Cute Sulking Expressions',
    linesHindi: [
      'मनपसंद चीज़ न मिलने पर बहन का वह मुँह फुलाकर बैठ जाना',
      'भाई के लिए हर बार दुनिया का सबसे प्यारा और मज़ेदार दृश्य होता है',
    ],
    linesHinglish: [
      'Manpasand cheez na milne par behen ka woh munh phulaakar baith jaana',
      'Bhai ke liye har baar duniya ka sabse pyara aur mazedaar drishya hota hai',
    ],
    linesEnglish: [
      'Watching your sister puff her cheeks when she does not get her way',
      'Remains the funniest, sweetest little show a brother can witness',
    ],
  },
  {
    title: 'कहानी सुनाने वाली रातें',
    titleEnglish: 'Late-Night Story Sharing',
    linesHindi: [
      'बत्ती बुझाने के बाद भी आधे घंटे तक भूतों के क़िस्से सुनना',
      'और फिर डरकर एक ही रजाई में छुप जाना आज भी याद है',
    ],
    linesHinglish: [
      'Batti bujhaane ke baad bhi aadhe ghante tak bhooton ke kisse sunna',
      'Aur phir darkar ek hi rajai mein chhup jaana aaj bhi yaad hai',
    ],
    linesEnglish: [
      'Whispering spooky ghost stories for half an hour after lights out',
      'Then diving scared under one blanket together still makes me grin',
    ],
  },
  {
    title: 'भीगे आँगन की मिट्टी की महक',
    titleEnglish: 'Earthy Scent of Shared Childhood',
    linesHindi: [
      'कागज़ के हवाई जहाज़ उड़ाकर घर भर में जो धमाचौकड़ी मचाई थी',
      'उस बचपन की महक आज भी हमारे भाई-बहन के रिश्ते में ताज़ा है',
    ],
    linesHinglish: [
      'Kaagaz ke hawai jahaaz udaakar ghar bhar mein jo dhamaachaukadi machaayi thi',
      'Us bachpan ki mehak aaj bhi hamaare bhai-behen ke rishte mein taaza hai',
    ],
    linesEnglish: [
      'Launching paper airplanes across hallways during endless summer breaks',
      'Keeps its fresh nostalgic fragrance alive in our bond even now',
    ],
  },
  {
    title: 'दिल की किताब का सबसे सुंदर पन्ना',
    titleEnglish: 'Brightest Page in Life’s Book',
    linesHindi: [
      'जीवन की किताब में भले ही सौ अधूरे और कठिन पन्ने मिल जाएँ',
      'पर भाई-बहन वाला अध्याय हमेशा सुनहरे अक्षरों में चमकता है',
    ],
    linesHinglish: [
      'Jeevan ki kitaab mein bhale hi sau adhure aur kathin panne mil jaayein',
      'Par bhai-behen waala adhyaay hamesha sunahare aksharon mein chamakta hai',
    ],
    linesEnglish: [
      'Life’s book may hold plenty of rough chapters and unfinished pages',
      'Yet the sibling chapter always shines brightest in warm golden ink',
    ],
  },
  {
    title: 'बहन के कदमों से घर में बरकत',
    titleEnglish: 'Grace Brought by a Sister’s Steps',
    linesHindi: [
      'जिस आँगन में बहन हँसती है और भाई उसका सम्मान करता है',
      'उस घर से खुशियाँ कभी रूठकर बाहर नहीं जा सकतीं यारो',
    ],
    linesHinglish: [
      'Jis aangan mein behen hansti hai aur bhai uska sammaan karta hai',
      'Us ghar se khushiyaan kabhi roothkar baahar nahin ja saktin yaaro',
    ],
    linesEnglish: [
      'Any courtyard where a sister smiles freely and her brother honors her',
      'Never sees true joy pack its bags and leave through the door',
    ],
  },
  {
    title: 'ख़ुद हारकर तुझे जिताना',
    titleEnglish: 'Losing Playfully So You Win',
    linesHindi: [
      'कैरम में जानबूझकर आखिरी रानी छोड़ देना अपनी छोटी बहन के लिए',
      'बड़े भाई की यही चालाकी उसके चेहरे पर जीत की चमक ले आती थी',
    ],
    linesHinglish: [
      'Carrom mein jaanboojhkar aakhiri rani chhod dena apni chhoti behen ke liye',
      'Bade bhai ki yahi chaalaaki uske chehre par jeet ki chamak le aati thi',
    ],
    linesEnglish: [
      'Intentionally missing the winning shot on the board for my little sister',
      'Was my oldest trick just to watch victory light up her whole face',
    ],
  },
  {
    title: 'तानों में भी अनमोल अपनापन',
    titleEnglish: 'Warm Affection Wrapped in Roasts',
    linesHindi: [
      'तू किसी काम का नहीं है, कहकर भी सारा काम उसी से कराना',
      'भाई-बहन के बीच यही खट्टी-मीठी भाषा प्यार का असली कोड है',
    ],
    linesHinglish: [
      'Tu kisi kaam ka nahin hai, kehkar bhi saara kaam usi se karaana',
      'Bhai-behen ke beech yahi khatti-meethi bhasha pyar ka asli code hai',
    ],
    linesEnglish: [
      'Saying you are totally useless then trusting them with every big chore',
      'Is the sweet-and-sour secret language only siblings decode naturally',
    ],
  },
  {
    title: 'दूरियाँ सिर्फ़ नक़्शे पर हैं',
    titleEnglish: 'Distance Exists Only on Maps',
    linesHindi: [
      'सात समंदर पार चले जाओ या किसी दूसरे राज्य में बस जाओ भाई',
      'बहन की दुआ हर सुबह तुम्हारे सिर पर हाथ फेरकर ही लौटती है',
    ],
    linesHinglish: [
      'Saat samandar paar chale jaao ya kisi doosre raajya mein bas jaao bhai',
      'Behen ki dua har subah tumhaare sir par haath pherkar hi lautti hai',
    ],
    linesEnglish: [
      'Cross seven oceans or settle down in a distant corner of the map',
      'A sister’s prayer still reaches your doorstep gently every single dawn',
    ],
  },
  {
    title: 'मुस्कान की पहली वजह',
    titleEnglish: 'First Reason Behind Every Grin',
    linesHindi: [
      'जब सारा दिन ऑफिस और काम की थकान से बोझिल हो जाता है',
      'तब बहन की एक मज़ेदार वॉइस नोट सुनकर सारी थकान भाग जाती है',
    ],
    linesHinglish: [
      'Jab saara din office aur kaam ki thakaan se bojhil ho jaata hai',
      'Tab behen ki ek mazedaar voice note sunkar saari thakaan bhaag jaati hai',
    ],
    linesEnglish: [
      'When long hours at work leave my shoulders aching and spirits low',
      'One hilarious voice note from my sister clears the exhaustion instantly',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'आँगन की पहली रंगोली',
    titleEnglish: 'First Courtyard Rangoli Together',
    linesHindi: [
      'दिवाली पर रंगोली बहन बनाती थी और भाई दूर से रंग चुराता था',
      'आज दोनों मिलकर घर की हर ख़ुशी में नए रंग भर रहे हैं',
    ],
    linesHinglish: [
      'Diwali par rangoli behen banaati thi aur bhai door se rang churaata tha',
      'Aaj dono milkar ghar ki har khushi mein naye rang bhar rahe hain',
    ],
    linesEnglish: [
      'On Diwali she drew rangoli patterns while I playfully hid the bright powders',
      'Today together we paint fresh colors across every family milestone',
    ],
  },
  {
    title: 'मज़बूत डोर जो कभी न टूटे',
    titleEnglish: 'Strong Cord That Never Snaps',
    linesHindi: [
      'समय की आँधियाँ बड़े-बड़े पेड़ों की जड़ें हिला देती हैं अक्सर',
      'पर भाई-बहन के विश्वास की डोर हर तूफ़ान में और कस जाती है',
    ],
    linesHinglish: [
      'Samay ki aandhiyaan bade-bade pedon ki jadein hila deti hain aksar',
      'Par bhai-behen ke vishwas ki dor har toofaan mein aur kas jaati hai',
    ],
    linesEnglish: [
      'Fierce storms of time shake even the tallest trees to their roots',
      'Yet the cord tying brother and sister only tightens in rough winds',
    ],
  },
  {
    title: 'पसंदीदा सीट पर शर्त',
    titleEnglish: 'Claiming the Window Seat',
    linesHindi: [
      'ट्रेन या कार में खिड़की वाली सीट के लिए आधे रास्ते बहस चलती थी',
      'अब वही सीट खाली दिखे तो आँखें अपने आप बहन को ढूँढती हैं',
    ],
    linesHinglish: [
      'Train ya car mein khidki waali seat ke liye aadhe raaste behas chalti thi',
      'Ab wahi seat khaali dikhe to aankhein apne aap behen ko dhoondhti hain',
    ],
    linesEnglish: [
      'We used to argue half the journey claiming the breezy window seat',
      'Now whenever that seat sits empty, my eyes instantly look for you',
    ],
  },
  {
    title: 'बिना मोल का अनमोल धन',
    titleEnglish: 'Priceless Wealth Without a Tag',
    linesHindi: [
      'बाज़ार में दौलत से हर सुख-सुविधा आसानी से मिल जाती है आजकल',
      'पर बहन जैसा सच्चा शुभचिंतक सिर्फ़ पुण्य से ही मिलता है',
    ],
    linesHinglish: [
      'Baazaar mein daulat se har sukh-suvidha aasaani se mil jaati hai aajkal',
      'Par behen jaisa sachha shubhchintak sirf punya se hi milta hai',
    ],
    linesEnglish: [
      'Money buys almost every shiny comfort lining shop windows today',
      'Yet a true well-wisher like a sister arrives only by sheer grace',
    ],
  },
  {
    title: 'माफ़ करने में सबसे आगे',
    titleEnglish: 'Quickest to Forgive Every Flaw',
    linesHindi: [
      'लाख ग़लतियाँ करने के बाद भी जो गले लगाकर कह दे कोई बात नहीं',
      'उस बड़े भाई के चरणों में ही असली अपनापन बसता है',
    ],
    linesHinglish: [
      'Laakh galtiyaan karne ke baad bhi jo gale lagaakar keh de koi baat nahin',
      'Us bade bhai ke charnon mein hi asli apnapan basta hai',
    ],
    linesEnglish: [
      'Someone who hugs you after a dozen slip-ups saying do not worry',
      'That elder brother holds the truest grace you will ever witness',
    ],
  },
  {
    title: 'हर राज़ की सुरक्षित तिजोरी',
    titleEnglish: 'Safest Vault for Every Secret',
    linesHindi: [
      'दिल की जो बातें मम्मी-पापा से भी कह पाने में हिचक होती है',
      'वह भाई-बहन के पास जाकर बिल्कुल सुरक्षित तिजोरी में बंद रहती हैं',
    ],
    linesHinglish: [
      'Dil ki jo baatein mummy-papa se bhi keh paane mein hichak hoti hai',
      'Woh bhai-behen ke paas jaakar bilkul surakshit tijori mein band rehti hain',
    ],
    linesEnglish: [
      'Confessions too nervous to whisper even to our loving parents',
      'Stay locked inside a sibling’s trust tighter than any steel vault',
    ],
  },
  {
    title: 'बहन के घर की पहली चाय',
    titleEnglish: 'First Cup at Sister’s Place',
    linesHindi: [
      'बहन के ससुराल जाकर उसके हाथ की बनी गरम चाय पीते हुए',
      'भाई के दिल में गर्व और भावुकता दोनों एक साथ उमड़ आते हैं',
    ],
    linesHinglish: [
      'Behen ke sasuraal jaakar uske haath ki bani garam chai peete hue',
      'Bhai ke dil mein garv aur bhaavukta dono ek saath umad aate hain',
    ],
    linesEnglish: [
      'Sipping hot tea brewed in your sister’s own happy new kitchen',
      'Floods a brother’s chest with both proud joy and tender emotion',
    ],
  },
  {
    title: 'नादानियों की साझा किताब',
    titleEnglish: 'Shared Book of Silly Days',
    linesHindi: [
      'ज़िंदगी की सबसे खूबसूरत यादें महँगी छुट्टियों में नहीं बनतीं',
      'वह घर की छत पर भाई-बहन के साथ की गई नादानियों में बसती हैं',
    ],
    linesHinglish: [
      'Zindagi ki sabse khoobsurat yaadein mehngi chhuttiyon mein nahin bantin',
      'Woh ghar ki chhat par bhai-behen ke saath ki gayi naadaaniyon mein basti hain',
    ],
    linesEnglish: [
      'Life’s finest memories are rarely born on costly luxury resorts',
      'They live inside silly rooftop pranks shared between brother and sister',
    ],
  },
  {
    title: 'तेरी आँख में आँसू गवारा नहीं',
    titleEnglish: 'Never Tolerating Your Tears',
    linesHindi: [
      'दुनिया की किसी भी ताक़त से लड़ जाने का दम रखता है हर भाई',
      'अगर बात उसकी प्यारी बहन के सम्मान और मुस्कान पर आ जाए',
    ],
    linesHinglish: [
      'Duniya ki kisi bhi taaqat se lad jaane ka dam rakhta hai har bhai',
      'Agar baat uski pyari behen ke sammaan aur muskaan par aa jaaye',
    ],
    linesEnglish: [
      'Every brother carries the courage to face the toughest storms alive',
      'The instant his sister’s dignity or precious smile comes on the line',
    ],
  },
  {
    title: 'माँ की तरह डांट, दोस्त की तरह प्यार',
    titleEnglish: 'Scolding Like Mom, Loving Like Bestie',
    linesHindi: [
      'कभी वह मेरी सख़्त टीचर बन जाती है तो कभी सबसे प्यारी दोस्त',
      'एक बहन के भीतर सौ रिश्तों की ख़ूबसूरती एक साथ रहती है',
    ],
    linesHinglish: [
      'Kabhi woh meri sakht teacher ban jaati hai to kabhi sabse pyari dost',
      'Ek behen ke bheetar sau rishton ki khoobsurati ek saath rehti hai',
    ],
    linesEnglish: [
      'One minute she plays strict teacher, the next my coolest best friend',
      'Inside one sister lives the magic of a hundred caring roles',
    ],
  },
  {
    title: 'रक्षाबंधन का हर साल इंतज़ार',
    titleEnglish: 'Waiting for Rakhi Every Year',
    linesHindi: [
      'साल भर चाहे कितनी भी व्यस्त रहे ज़िंदगी अपने-अपने काम में',
      'सावन आते ही भाई की कलाई और बहन की राखी एक हो जाते हैं',
    ],
    linesHinglish: [
      'Saal bhar chaahe kitni bhi vyast rahe zindagi apne-apne kaam mein',
      'Saawan aate hi bhai ki kalaai aur behen ki rakhi ek ho jaate hain',
    ],
    linesEnglish: [
      'No matter how relentlessly busy schedules keep us throughout the year',
      'When monsoon arrives, brother’s wrist and sister’s Rakhi reunite again',
    ],
  },
  {
    title: 'हँसी के फव्वारे वाली शाम',
    titleEnglish: 'Evenings Bursting With Giggles',
    linesHindi: [
      'न कोई फ़िल्टर, न कोई दिखावा और न ही शब्दों को तौलने की ज़रूरत',
      'भाई-बहन के पास बैठकर इंसान बिल्कुल अपने असली रूप में हँसता है',
    ],
    linesHinglish: [
      'Na koi filter, na koi dikhaava aur na hi shabdon ko taulne ki zaroorat',
      'Bhai-behen ke paas baithkar insaan bilkul apne asli roop mein hansta hai',
    ],
    linesEnglish: [
      'Zero social filters, zero pretense, and zero need to watch your words',
      'Beside a sibling you can laugh effortlessly as your truest unfiltered self',
    ],
  },
  {
    title: 'पुराने स्वेटर में गर्म यादें',
    titleEnglish: 'Warm Memories in Old Sweaters',
    linesHindi: [
      'सर्दियों में एक ही कंबल के लिए हुई मीठी छीना-झपटी की यादें',
      'हर दिसंबर में दिल को आज भी उतनी ही गर्माहट दे जाती हैं',
    ],
    linesHinglish: [
      'Sardiyon mein ek hi kambal ke liye hui meethi chheena-jhapti ki yaadein',
      'Har December mein dil ko aaj bhi utni hi garmaahat de jaati hain',
    ],
    linesEnglish: [
      'Playful December tug-of-wars over one cozy winter blanket',
      'Still wrap my heart in the exact same warmth every cold night',
    ],
  },
  {
    title: 'रिश्तों की भीड़ में इकलौता सच',
    titleEnglish: 'Only Constant Among Changing Ties',
    linesHindi: [
      'दुनिया की चमक-दमक कुछ ही दिनों की मेहमान हुआ करती है यार',
      'मुश्किल में हमेशा घर का दरवाज़ा और भाई-बहन का साथ काम आता है',
    ],
    linesHinglish: [
      'Duniya ki chamak-damak kuch hi dinon ki mehmaan hua karti hai yaar',
      'Mushkil mein hamesha ghar ka darwaza aur bhai-behen ka saath kaam aata hai',
    ],
    linesEnglish: [
      'Worldly glitz and noisy applause only stay as passing visitors',
      'When trouble knocks, only home doors and siblings stand unwavering',
    ],
  },
  {
    title: 'बहन की खुशी ही असली जीत',
    titleEnglish: 'Sister’s Joy as Real Victory',
    linesHindi: [
      'मेरे भाई की तरक़्क़ी पर सबसे ज़्यादा गर्व मुझे होता है हमेशा',
      'और उसकी बहन की मुस्कान भाई के लिए सबसे बड़ा इनाम होती है',
    ],
    linesHinglish: [
      'Mere bhai ki tarakki par sabse zyada garv mujhe hota hai hamesha',
      'Aur uski behen ki muskaan bhai ke liye sabse bada inaam hoti hai',
    ],
    linesEnglish: [
      'My brother’s rise fills me with more pride than anyone else on earth',
      'And seeing his sister smile stays a brother’s grandest trophy',
    ],
  },
  {
    title: 'चुटकुला पुराना, हँसी नई',
    titleEnglish: 'Same Old Joke, Fresh Laughs',
    linesHindi: [
      'एक ही दस साल पुराने क़िस्से को हर मीटिंग में फिर से सुनाना',
      'और हर बार पहली बार की तरह पेट पकड़कर हँसना सिर्फ़ हम कर सकते हैं',
    ],
    linesHinglish: [
      'Ek hi das saal puraane kisse ko har meeting mein phir se sunaana',
      'Aur har baar pehli baar ki tarah pet pakadkar hansna sirf hum kar sakte hain',
    ],
    linesEnglish: [
      'Retelling the same ten-year-old embarrassing story at every reunion',
      'And doubling over laughing as if it happened yesterday belongs to us',
    ],
  },
  {
    title: 'नज़र न लगे इस जोड़ी को',
    titleEnglish: 'Blessed Pair Beyond Envy',
    linesHindi: [
      'लड़ाई में भी प्यार और चिढ़ाने में भी फ़िक्र छुपी रहती है',
      'ईश्वर करे भाई-बहन की यह प्यारी जोड़ी यूँ ही सलामत रहे',
    ],
    linesHinglish: [
      'Ladaai mein bhi pyar aur chidhane mein bhi fikr chhupi rehti hai',
      'Ishwar kare bhai-behen ki yeh pyari jodi yoon hi salaamat rahe',
    ],
    linesEnglish: [
      'Affection hides inside every argument and care inside every tease',
      'May heaven forever bless this precious bond between brother and sister',
    ],
  },
  {
    title: 'अधूरे ख्वाबों की साझीदार',
    titleEnglish: 'Partner in Unfinished Dreams',
    linesHindi: [
      'जब मैंने अपने पागल से सपने सबको बताए तो सब हँस पड़े थे',
      'सिर्फ़ मेरी बहन थी जिसने कहा था, तू करके दिखाएगा मुझे यक़ीन है',
    ],
    linesHinglish: [
      'Jab maine apne paagal se sapne sabko bataaye to sab hans pade the',
      'Sirf meri behen thi jisne kaha tha, tu karke dikhaayega mujhe yakeen hai',
    ],
    linesEnglish: [
      'When I shared my wildest dreams out loud, almost everyone chuckled',
      'Only my sister said boldly, I know for certain you will pull it off',
    ],
  },
  {
    title: 'बचपन वाली मिठाई की दुकान',
    titleEnglish: 'Childhood Sweet Shop Memories',
    linesHindi: [
      'स्कूल के बाहर वाली दुकान से एक समोसा आधा-आधा बाँटकर खाना',
      'उस दो रुपये की दावत में करोड़ों का सुकून मिला करता था',
    ],
    linesHinglish: [
      'School ke baahar waali dukaan se ek samosa aadha-aadha baantkar khaana',
      'Us do rupaye ki daawat mein karodon ka sukoon mila karta tha',
    ],
    linesEnglish: [
      'Splitting one crispy samosa right in half outside the school gate',
      'Packed a million dollars of comfort inside a pocket-change feast',
    ],
  },
  {
    title: 'बड़े होने के बाद भी बचपना ज़िंदा',
    titleEnglish: 'Keeping Childlike Spark Alive',
    linesHindi: [
      'बाहर की दुनिया में हम दोनों कितने भी गंभीर और समझदार बन जाएँ',
      'पर एक साथ होते ही फिर से वही शरारती बच्चे बन जाते हैं',
    ],
    linesHinglish: [
      'Baahar ki duniya mein hum dono kitne bhi gambheer aur samajhdaar ban jaayein',
      'Par ek saath hote hi phir se wahi sharaarti bachche ban jaate hain',
    ],
    linesEnglish: [
      'Out in the adult world we both wear serious, composed expressions',
      'Yet the second we reunite, those mischievous kids jump right back out',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'हर जनम में यही साथ मिले',
    titleEnglish: 'Same Sibling in Every Lifetime',
    linesHindi: [
      'अगर ऊपरवाले से कभी दोबारा जीवन माँगने का मौका मिला मुझे',
      'तो हर जनम में मैं यही नटखट बहन और यही प्यारा घर माँगूँगा',
    ],
    linesHinglish: [
      'Agar ooparwaale se kabhi dobaara jeevan maangne ka mauka mila mujhe',
      'To har janam mein main yahi natkhat behen aur yahi pyara ghar maangoonga',
    ],
    linesEnglish: [
      'If heaven ever grants me the choice to live another life again',
      'In every lifetime I would ask for this exact sibling and warm home',
    ],
  },
  {
    title: 'चप्पल और दुपट्टे की लड़ाई',
    titleEnglish: 'Playful Chasing Down Hallways',
    linesHindi: [
      'छोटी बात पर पूरे घर में भाग-भागकर एक-दूसरे को चिढ़ाना',
      'थककर फिर सोफ़े पर गिर जाना, वही जन्नत थी बचपन की',
    ],
    linesHinglish: [
      'Chhoti baat par poore ghar mein bhaag-bhaagkar ek-doosre ko chidhaana',
      'Thakkar phir sofe par gir jaana, wahi jannat thi bachpan ki',
    ],
    linesEnglish: [
      'Chasing each other around hallways laughing over the tiniest prank',
      'Before collapsing breathless onto the couch was pure childhood heaven',
    ],
  },
  {
    title: 'आँगन से आसमान तक का सफ़र',
    titleEnglish: 'Journey From Courtyard to Sky',
    linesHindi: [
      'हाथ पकड़कर चलना घर के छोटे आँगन से शुरू हुआ था कभी',
      'आज जीवन की हर ऊँचाई पर दोनों का साथ एक-दूसरे का हौसला है',
    ],
    linesHinglish: [
      'Haath pakadkar chalna ghar ke chhote aangan se shuru hua tha kabhi',
      'Aaj jeevan ki har oonchaai par dono ka saath ek-doosre ka hausla hai',
    ],
    linesEnglish: [
      'Holding hands began right across the dusty tiles of our small courtyard',
      'Now atop life’s tallest peaks, having you beside me fuels my courage',
    ],
  },
  {
    title: 'बिना बोले दिल की भाषा समझना',
    titleEnglish: 'Reading Hearts Without Words',
    linesHindi: [
      'चेहरे के रंग बदलते ही समझ जाना कि आज मन थोड़ा भारी है',
      'यह जादू सिर्फ़ भाई-बहन के निस्वार्थ प्यार में ही संभव होता है',
    ],
    linesHinglish: [
      'Chehre ke rang badalte hi samajh jaana ki aaj mann thoda bhaari hai',
      'Yeh jaadoo sirf bhai-behen ke niswaarth pyar mein hi sambhav hota hai',
    ],
    linesEnglish: [
      'Sensing a heavy heart the second the glow dims on your face',
      'Is quiet magic possible only inside a sibling’s selfless love',
    ],
  },
  {
    title: 'भाई की मूँछ, बहन की शान',
    titleEnglish: 'Brother’s Pride, Sister’s Crown',
    linesHindi: [
      'बहन की आँखों में अपने भाई के लिए जो इज़्ज़त झलकती है',
      'वह किसी भी राजा के ताज से ज़्यादा चमकदार हुआ करती है',
    ],
    linesHinglish: [
      'Behen ki aankhon mein apne bhai ke liye jo izzat jhalakti hai',
      'Woh kisi bhi raja ke taaj se zyada chamakdaar hua karti hai',
    ],
    linesEnglish: [
      'The quiet respect gleaming inside a sister’s eyes for her brother',
      'Shines far brighter than any jeweled crown worn by kings',
    ],
  },
  {
    title: 'तंग करने का लाइसेंस पक्का',
    titleEnglish: 'Lifetime License to Annoy',
    linesHindi: [
      'चाहे तुम साठ साल की हो जाओ या बाल सारे सफ़ेद हो जाएँ',
      'तुम्हें चिढ़ाने और हँसाने का लाइसेंस मेरे पास ताउम्र पक्का है',
    ],
    linesHinglish: [
      'Chaahe tum saath saal ki ho jaao ya baal saare safed ho jaayein',
      'Tumhein chidhaane aur hansaane ka license mere paas taa-umr pakka hai',
    ],
    linesEnglish: [
      'Even when you hit sixty and every hair turns silver bright',
      'My lifetime license to annoy and make you crack up stays valid',
    ],
  },
  {
    title: 'हर सुबह सलामती की अरदास',
    titleEnglish: 'Daily Prayer for Your Well-Being',
    linesHindi: [
      'मेरी हर दुआ का पहला हिस्सा हमेशा अपने भाई के नाम रहता है',
      'कि उसे ज़िंदगी की किसी मोड़ पर कोई ग़म छू भी न पाए',
    ],
    linesHinglish: [
      'Meri har dua ka pehla hissa hamesha apne bhai ke naam rehta hai',
      'Ki use zindagi ki kisi mod par koi gham chhoo bhi na paaye',
    ],
    linesEnglish: [
      'The opening line of every prayer I whisper always carries your name',
      'Asking that sorrow never once grazes your path on any turn',
    ],
  },
  {
    title: 'दोस्त हज़ार, पर तेरे जैसा कोई नहीं',
    titleEnglish: 'Thousand Friends, Only One You',
    linesHindi: [
      'दुनिया घूमकर सैकड़ों प्यारे दोस्त बना लिए मैंने जीवन में',
      'पर भाई-बहन वाली जगह इस दिल में आज भी कोई भर नहीं पाया',
    ],
    linesHinglish: [
      'Duniya ghoomkar sainkdon pyare dost bana liye maine jeevan mein',
      'Par bhai-behen waali jagah is dil mein aaj bhi koi bhar nahin paaya',
    ],
    linesEnglish: [
      'Traveling the world brought hundreds of wonderful friends my way',
      'Yet nobody has ever filled the irreplaceable corner reserved for you',
    ],
  },
  {
    title: 'सपनों के पंख और मेरा भरोसा',
    titleEnglish: 'Wings for Dreams, My Faith Always',
    linesHindi: [
      'तू खुले आसमान में जितना ऊँचा उड़ना चाहे उड़ ले मेरी बहना',
      'ज़मीन पर तेरे भाई का हाथ हमेशा तेरे हौसले के लिए खड़ा है',
    ],
    linesHinglish: [
      'Tu khule aasmaan mein jitna ooncha udna chaahe ud le meri behna',
      'Zameen par tere bhai ka haath hamesha tere hausle ke liye khada hai',
    ],
    linesEnglish: [
      'Soar as high across the open sky as your dreams dare, dear sister',
      'Down here your brother always stands ready cheering every wingbeat',
    ],
  },
  {
    title: 'प्यार का सबसे पवित्र रिश्ता',
    titleEnglish: 'Purest Bond Under the Sun',
    linesHindi: [
      'न कोई लालच, न कोई शर्त और न ही कभी बिछड़ने का डर',
      'भाई और बहन का रिश्ता इस धरती पर प्यार का सबसे शुद्ध रूप है',
    ],
    linesHinglish: [
      'Na koi laalach, na koi shart aur na hi kabhi bichhadne ka dar',
      'Bhai aur behen ka rishta is dharti par pyar ka sabse shuddh roop hai',
    ],
    linesEnglish: [
      'Zero greed, zero strings attached, and zero fear of drifting apart',
      'Brother and sister share the purest form of love walking this earth',
    ],
  },
];

export const UNIQUE_BHAI_BEHEN_170 = buildUniqueShayaris(
  'bhai-behen',
  'Bhai Behen Shayari (भाई बहन शायरी)',
  '👫',
  31,
  BHAI_BEHEN_ENTRIES
);
