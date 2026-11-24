import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const YAAD_ENTRIES: UniqueShayariEntry[] = [
  {
    title: 'चाय की केतली और तेरी याद',
    titleEnglish: 'Steaming Tea and Your Memory',
    linesHindi: [
      'शाम की पहली भाप उठते ही तेरा ख़याल आ जाता है',
      'अदरक वाली चाय में आज भी तेरी बातों का स्वाद आता है',
    ],
    linesHinglish: [
      'Shaam ki pehli bhaap uthte hi tera khayaal aa jaata hai',
      'Adrak waali chai mein aaj bhi teri baaton ka swaad aata hai',
    ],
    linesEnglish: [
      'With the first wisp of evening steam, thoughts of you arrive',
      'Even today, ginger tea carries the warmth of your conversations',
    ],
  },
  {
    title: 'सफ़र की खिड़की वाली सीट',
    titleEnglish: 'Window Seat Memories',
    linesHindi: [
      'ट्रेन की खिड़की से गुज़रते हर पेड़ पर तेरी तस्वीर दिखती है',
      'सफ़र चाहे कितना भी लंबा हो, याद तेरी साथ चलती है',
    ],
    linesHinglish: [
      'Train ki khidki se guzarte har ped par teri tasveer dikhti hai',
      'Safar chaahe kitna bhi lamba ho, yaad teri saath chalti hai',
    ],
    linesEnglish: [
      'Every tree rushing past the train window sketches your face',
      'No matter how long the journey is, your memory travels beside me',
    ],
  },
  {
    title: 'सावन की पहली सौंधी ख़ुशबू',
    titleEnglish: 'First Drop of Monsoon Rain',
    linesHindi: [
      'पहली बारिश की मिट्टी वाली ख़ुशबू जब हवा में घुलती है',
      'दिल की पुरानी दराज़ से तेरी हर याद निकल पड़ती है',
    ],
    linesHinglish: [
      'Pehli baarish ki mitti waali khushboo jab hawa mein ghulti hai',
      'Dil ki purani daraaz se teri har yaad nikal padti hai',
    ],
    linesEnglish: [
      'When the earthy scent of first rain blends into the breeze',
      'Every fond memory of you spills out from my hearts old drawer',
    ],
  },
  {
    title: 'किताब में रखा सूखा गुलाब',
    titleEnglish: 'Pressed Rose Inside a Book',
    linesHindi: [
      'पुरानी डायरी खोली तो सूखा गुलाब गिर पड़ा गोद में',
      'रंग तो उड़ गया था उसका, पर तेरी याद अब भी ताज़ा थी',
    ],
    linesHinglish: [
      'Purani diary kholi to sookha gulaab gir pada god mein',
      'Rang to ud gaya tha uska, par teri yaad ab bhi taaza thi',
    ],
    linesEnglish: [
      'As I opened an old journal, a dried rose fell into my lap',
      'Its color had faded away, yet your memory felt completely fresh',
    ],
  },
  {
    title: 'रात के दो बजे का सन्नाटा',
    titleEnglish: 'Two AM Silence',
    linesHindi: [
      'सारा शहर जब मीठी नींद की चादर ओढ़ लेता है',
      'तब मेरी छत पर तेरी यादों का मेला लग जाता है',
    ],
    linesHinglish: [
      'Saara shehar jab meethi neend ki chaadar odh leta hai',
      'Tab meri chhat par teri yaadon ka mela lag jaata hai',
    ],
    linesEnglish: [
      'When the entire town wraps itself in a blanket of sweet sleep',
      'A whole gathering of your memories arrives upon my terrace',
    ],
  },
  {
    title: 'गली का वही पुराना मोड़',
    titleEnglish: 'That Familiar Turn in the Lane',
    linesHindi: [
      'आज भी उस नुक्कड़ से गुज़रते हुए नज़रें ठहर जाती हैं',
      'जहाँ कभी मुस्कुराकर तुम हाथ हिलाया करते थे',
    ],
    linesHinglish: [
      'Aaj bhi us nukkad se guzarte hue nazrein thehar jaati hain',
      'Jahaan kabhi muskurakar tum haath hilaya karte the',
    ],
    linesEnglish: [
      'Even today my gaze pauses while walking past that street corner',
      'Where you once used to smile and wave goodbye to me',
    ],
  },
  {
    title: 'बचपन जैसी अनमोल यादें',
    titleEnglish: 'Treasured Old Memories',
    linesHindi: [
      'तस्वीरों से ज़्यादा गहरी होती हैं दिल की यादें',
      'जो बिना कैमरे के भी आँखों के सामने जीवित रहती हैं',
    ],
    linesHinglish: [
      'Tasveeron se zyada gehri hoti hain dil ki yaadein',
      'Jo bina camera ke bhi aankhon ke saamne jeevit rehti hain',
    ],
    linesEnglish: [
      'Memories held in the heart run deeper than any photograph',
      'Staying vividly alive before my eyes without needing a camera',
    ],
  },
  {
    title: 'फ़ोन नंबर का पुराना रिकॉर्ड',
    titleEnglish: 'Unforgotten Digits',
    linesHindi: [
      'कॉन्टैक्ट लिस्ट से नाम तो हटा दिया बरसों पहले मैंने',
      'पर उंगलियों को आज भी तेरा पूरा नंबर ज़ुबानी याद है',
    ],
    linesHinglish: [
      'Contact list se naam to hata diya barson pehle maine',
      'Par ungliyon ko aaj bhi tera poora number zubaani yaad hai',
    ],
    linesEnglish: [
      'Years ago I removed your name from my contact list',
      'Yet my fingers still remember every digit of your number by heart',
    ],
  },
  {
    title: 'सर्दियों की धूप में तेरा ज़िक्र',
    titleEnglish: 'Remembering You in Winter Sun',
    linesHindi: [
      'दिसंबर की हल्की धूप में जब स्वेटर समेटता हूँ मैं',
      'तुम्हारी ठंडी उंगलियाँ थामने का मौसम याद आ जाता है',
    ],
    linesHinglish: [
      'December ki halki dhoop mein jab sweater samet-ta hoon main',
      'Tumhaari thandi ungliyan thaamne ka mausam yaad aa jaata hai',
    ],
    linesEnglish: [
      'When I fold my sweater under the gentle December sun',
      'I miss the winter days spent holding your chilly fingers warm',
    ],
  },
  {
    title: 'गीत की एक धुंधली धुन',
    titleEnglish: 'A Faint Melody on the Breeze',
    linesHindi: [
      'कहीं दूर पड़ोस में जब कोई पुरानी ग़ज़ल चलती है',
      'दिल की हर धड़कन तेरे नाम की ताल पर नाच उठती है',
    ],
    linesHinglish: [
      'Kahin door pados mein jab koi purani ghazal chalti hai',
      'Dil ki har dhadkan tere naam ki taal par naach uthti hai',
    ],
    linesEnglish: [
      'Whenever an old ghazal drifts softly from a neighboring house',
      'Every beat of my heart sways to the rhythm of your name',
    ],
  },
  {
    title: 'हल्की सी हँसी का अक्स',
    titleEnglish: 'Reflection of Your Soft Laugh',
    linesHindi: [
      'किसी अजनबी की हँसी भी अगर तुमसे मिलती-जुलती लगे',
      'तो भीड़ में भी मेरी गर्दन अनायास मुड़ जाती है',
    ],
    linesHinglish: [
      'Kisi ajnabi ki hansi bhi agar tumse milti-julti lage',
      'To bheed mein bhi meri gardan anaayaas mud jaati hai',
    ],
    linesEnglish: [
      'If even a strangers laughter sounds faintly like yours',
      'My head instinctively turns around amidst the bustling crowd',
    ],
  },
  {
    title: 'छुट्टियों की पुरानी शामें',
    titleEnglish: 'Old Holiday Evenings',
    linesHindi: [
      'इतवार की दोपहरें अब बहुत लंबी कटती हैं मेरे दोस्त',
      'जब से साथ बैठकर गप्पें लड़ाने वाला शहर छोड़ गया',
    ],
    linesHinglish: [
      'Itwaar ki dopahrein ab bahut lambi kat-ti hain mere dost',
      'Jab se saath baithkar gappe ladaane wala shehar chhod gaya',
    ],
    linesEnglish: [
      'Sunday afternoons stretch out endlessly now, my friend',
      'Ever since the one I spent hours chatting with moved away',
    ],
  },
  {
    title: 'पुरानी चिट्ठियों का बक्सा',
    titleEnglish: 'Box of Old Letters',
    linesHindi: [
      'अलमारी के ऊपरी खाने में सहेज रखे हैं कुछ ख़त',
      'जब भी मन उचाट होता है, उन्हें पढ़कर मुस्कुरा लेता हूँ',
    ],
    linesHinglish: [
      'Almaari ke oopari khaane mein sahej rakhe hain kuch khat',
      'Jab bhi man uchaat hota hai, unhein padhkar muskura leta hoon',
    ],
    linesEnglish: [
      'I keep a handful of old notes tucked on the top shelf',
      'Whenever my heart grows restless, reading them makes me smile',
    ],
  },
  {
    title: 'हवा का झोंका और खुशबू',
    titleEnglish: 'Familiar Scent in the Wind',
    linesHindi: [
      'बाज़ार से गुज़रते हुए जब वही इत्र हवा में तैरता है',
      'एक पल को लगता है जैसे तुम अभी पास से गुज़रे हो',
    ],
    linesHinglish: [
      'Baazaar se guzarte hue jab wahi itra hawa mein tairta hai',
      'Ek pal ko lagta hai jaise tum abhi paas se guzre ho',
    ],
    linesEnglish: [
      'Walking through the market when that familiar perfume floats by',
      'For a split second it feels as though you just walked right past me',
    ],
  },
  {
    title: 'भूली-बिसरी आदतें',
    titleEnglish: 'Unlearned Habits',
    linesHindi: [
      'पसंद की मिठाई दिख जाए तो हाथ खुद बढ़ जाता है',
      'फिर याद आता है कि अब घर पर कौन खाएगा इसे',
    ],
    linesHinglish: [
      'Pasand ki mithai dikh jaaye to haath khud badh jaata hai',
      'Phir yaad aata hai ki ab ghar par kaun khaayega ise',
    ],
    linesEnglish: [
      'Seeing your favorite sweet at the shop, my hand still reaches out',
      'Before I recall there is no one waiting at home to eat it',
    ],
  },
  {
    title: 'यादों का मीठा बोझ',
    titleEnglish: 'Bittersweet Weight of Memory',
    linesHindi: [
      'तेरी यादें कोई तकलीफ़ नहीं, मेरा सबसे बड़ा खज़ाना हैं',
      'इन्हीं के सहारे तो मैंने तन्हा वक़्त को काटा है',
    ],
    linesHinglish: [
      'Teri yaadein koi takleef nahin, mera sabse bada khazaana hain',
      'Inhi ke sahaare to maine tanha waqt ko kaata hai',
    ],
    linesEnglish: [
      'Memories of you are no burden; they are my richest treasure',
      'Holding onto them is how I weathered every lonely hour',
    ],
  },
  {
    title: 'मेज़ पर रखी कॉफी की निशानी',
    titleEnglish: 'Rings Left on the Table',
    linesHindi: [
      'उस पुराने कैफे का कोना आज भी वैसा ही सजा है',
      'बस वहाँ की हवा में हमारी हँसी गूँजना बंद हो गई',
    ],
    linesHinglish: [
      'Us purane cafe ka kona aaj bhi waisa hi saja hai',
      'Bas wahaan ki hawa mein hamaari hansi goonjna band ho gayi',
    ],
    linesEnglish: [
      'That corner of our old cafe still sits arranged the same way',
      'Only our laughter no longer rings through its quiet air',
    ],
  },
  {
    title: 'सपनों में मुलाक़ात',
    titleEnglish: 'Reunion in Dreams',
    linesHindi: [
      'नींद खुलने पर अक्सर तकिये पर हाथ चला जाता है',
      'सपने में तुम इतने करीब थे कि हक़ीक़त लगने लगी थी',
    ],
    linesHinglish: [
      'Neend khulne par aksar takiye par haath chala jaata hai',
      'Sapne mein tum itne kareeb the ki haqeeqat lagne lagi thi',
    ],
    linesEnglish: [
      'Upon waking, my hand still reaches across the empty pillow',
      'In my dream you stood so close that it felt utterly real',
    ],
  },
  {
    title: 'तारीख़ों का कैलेंडर',
    titleEnglish: 'Dates Etched in Mind',
    linesHindi: [
      'साल भर के कई दिन अब ख़ास लगते हैं चुपचाप',
      'किसी दिन पहली बात हुई थी, किसी दिन आख़िरी मुलाक़ात',
    ],
    linesHinglish: [
      'Saal bhar ke kai din ab khaas lagte hain chupchaap',
      'Kisi din pehli baat hui thi, kisi din aakhiri mulaaqaat',
    ],
    linesEnglish: [
      'Several quiet dates throughout the year still feel sacred',
      'The day we first spoke, and the evening we met one last time',
    ],
  },
  {
    title: 'मीलों दूर से एहसास',
    titleEnglish: 'Feeling You Across Miles',
    linesHindi: [
      'तुम किसी और शहर की भीड़ में व्यस्त होंगे अभी',
      'और यहाँ बैठा मैं तेरी पुरानी तस्वीर निहार रहा हूँ',
    ],
    linesHinglish: [
      'Tum kisi aur shehar ki bheed mein vyast honge abhi',
      'Aur yahaan baitha main teri purani tasveer nihaar raha hoon',
    ],
    linesEnglish: [
      'You must be busy amidst the rush of another city right now',
      'While here I sit, quietly gazing at an old photo of yours',
    ],
  },
  {
    title: 'ख़ामोश दीवारों की गवाही',
    titleEnglish: 'Witness of Quiet Walls',
    linesHindi: [
      'कहानी ख़त्म हो गई पर किरदार ज़िंदा हैं मन में',
      'आज भी हर खाली शाम तेरी आहट ढूँढती है घर में',
    ],
    linesHinglish: [
      'Kahaani khatam ho gayi par kirdaar zinda hain man mein',
      'Aaj bhi har khaali shaam teri aahat dhoondhti hai ghar mein',
    ],
    linesEnglish: [
      'The story ended, yet its characters live brightly in my mind',
      'Every quiet evening still listens for your footsteps at home',
    ],
  },
  {
    title: 'आँखों में ठहरी तस्वीर',
    titleEnglish: 'Image Frozen in My Eyes',
    linesHindi: [
      'वक़्त ने चेहरे पर कई नए निशान बना दिए होंगे',
      'पर मेरी यादों में तुम आज भी उन्हीं पुराने दिनों जैसे हो',
    ],
    linesHinglish: [
      'Waqt ne chehre par kai naye nishaan bana diye honge',
      'Par meri yaadon mein tum aaj bhi unhi purane dinon jaise ho',
    ],
    linesEnglish: [
      'Time may have traced new lines across your face by now',
      'Yet in my memories you remain exactly as you were back then',
    ],
  },
  {
    title: 'ढलते सूरज की लाली',
    titleEnglish: 'Crimson of the Setting Sun',
    linesHindi: [
      'जब भी आसमान शाम को नारंगी रंग में ढलता है',
      'तुम्हारे साथ देखे हुए वो सुनहरे पल याद आते हैं',
    ],
    linesHinglish: [
      'Jab bhi aasmaan shaam ko naarangi rang mein dhalta hai',
      'Tumhaare saath dekhe hue wo sunehre pal yaad aate hain',
    ],
    linesEnglish: [
      'Whenever the evening sky turns a warm shade of amber',
      'Those golden sunsets we watched side by side return to mind',
    ],
  },
  {
    title: 'अनजानी सी हिचकी',
    titleEnglish: 'Sudden Hiccup of Thought',
    linesHindi: [
      'कहते हैं हिचकी आए तो कोई दिल से याद करता है',
      'पर मेरे बिना हिचकी के भी हर पल तुम याद आते हो',
    ],
    linesHinglish: [
      'Kehte hain hichki aaye to koi dil se yaad karta hai',
      'Par mere bina hichki ke bhi har pal tum yaad aate ho',
    ],
    linesEnglish: [
      'They say a hiccup means someone is missing you warmly',
      'Yet even without a sign, you cross my mind every single moment',
    ],
  },
  {
    title: 'पुराने मकान का बरामदा',
    titleEnglish: 'Veranda of the Old House',
    linesHindi: [
      'ताला बंद दरवाज़े के बाहर से आज भी गुज़रा था मैं',
      'उस बरामदे में तेरी बचपन जैसी हँसी आज भी गूँजती है',
    ],
    linesHinglish: [
      'Taala band darwaaze ke baahar se aaj bhi guzra tha main',
      'Us baraamde mein teri bachpan jaisi hansi aaj bhi goonjti hai',
    ],
    linesEnglish: [
      'Today I walked past that locked wooden front door again',
      'Your carefree laughter still echoes across that old veranda',
    ],
  },
  {
    title: 'दिल के किसी कोने में',
    titleEnglish: 'In a Quiet Corner of the Heart',
    linesHindi: [
      'दुनिया भर के कामों में उलझा रहता हूँ दिन भर',
      'पर दिल का एक हिस्सा हमेशा सिर्फ़ तुम्हें याद रखता है',
    ],
    linesHinglish: [
      'Duniya bhar ke kaamon mein uljha rehta hoon din bhar',
      'Par dil ka ek hissa hamesha sirf tumhein yaad rakhta hai',
    ],
    linesEnglish: [
      'I stay tangled in endless errands throughout the busy day',
      'Yet one quiet corner of my heart always holds onto you',
    ],
  },
  {
    title: 'चश्मे के पार धुंधला अक्स',
    titleEnglish: 'Blurred Memory Through Mist',
    linesHindi: [
      'धुंध भरे कोहरे में जब सुबह की सैर पर निकलता हूँ',
      'हर कदम पर तुम्हारे साथ की हुई बातें सुनाई देती हैं',
    ],
    linesHinglish: [
      'Dhundh bhare kohre mein jab subah ki sair par nikalta hoon',
      'Har kadam par tumhaare saath ki hui baatein sunai deti hain',
    ],
    linesEnglish: [
      'Stepping out into the thick morning fog for a walk',
      'Every footstep brings back echoes of our old conversations',
    ],
  },
  {
    title: 'बिन कहे समझ जाने की याद',
    titleEnglish: 'Missing How You Understood',
    linesHindi: [
      'नए लोग तो बहुत मिले ज़िंदगी की इस राह में',
      'पर तुम्हारी तरह आवाज़ से दर्द पहचानने वाला कोई न मिला',
    ],
    linesHinglish: [
      'Naye log to bahut mile zindagi ki is raah mein',
      'Par tumhaari tarah aawaaz se dard pehchaanne wala koi na mila',
    ],
    linesEnglish: [
      'I met plenty of new people along this road of life',
      'Yet none could sense pain in my voice the way you once did',
    ],
  },
  {
    title: 'कागज़ की नाव',
    titleEnglish: 'Paper Boats in Rainwater',
    linesHindi: [
      'गलियों में पानी भरा देख आज बचपन सा याद आ गया',
      'जब भीगते हुए हम दोनों ने कागज़ की कश्ती तैराई थी',
    ],
    linesHinglish: [
      'Galiyon mein paani bhara dekh aaj bachpan sa yaad aa gaya',
      'Jab bheegte hue hum dono ne kaagaz ki kashti tairai thi',
    ],
    linesEnglish: [
      'Seeing rainwater puddle in the lanes brought back those carefree days',
      'When drenched together we floated paper boats down the street',
    ],
  },
  {
    title: 'दीवार पर टंगी घड़ी',
    titleEnglish: 'Clock on the Quiet Wall',
    linesHindi: [
      'टिक-टिक करती घड़ी बताती है कि वक़्त बीत रहा है',
      'पर मेरी यादों की सुई तेरे पास ही अटक गई है',
    ],
    linesHinglish: [
      'Tik-tik karti ghadi bataati hai ki waqt beet raha hai',
      'Par meri yaadon ki sui tere paas hi atak gayi hai',
    ],
    linesEnglish: [
      'The ticking clock reminds me that hours keep slipping past',
      'Yet the needle of my memory stays stopped right beside you',
    ],
  },
  {
    title: 'शाम का सुनहरा आसमान',
    titleEnglish: 'Golden Evening Sky',
    linesHindi: [
      'सड़क के किनारे लगे पीले गुलमोहर के नीचे खड़ा हूँ',
      'यहाँ गिरते हर फूल के साथ तेरा इंतज़ार याद आता है',
    ],
    linesHinglish: [
      'Sadak ke kinaare lage peele gulmohar ke neeche khada hoon',
      'Yahaan girte har phool ke saath tera intezaar yaad aata hai',
    ],
    linesEnglish: [
      'Standing beneath the yellow blossoms along the roadside',
      'Every falling petal reminds me of waiting there for you',
    ],
  },
  {
    title: 'चुपके से मुस्कुराना',
    titleEnglish: 'Smiling Quietly to Myself',
    linesHindi: [
      'जब भी कोई तुम्हारी पसंदीदा शरारत याद आ जाती है',
      'काम के बीच में भी चेहरे पर मुस्कान आ जाती है',
    ],
    linesHinglish: [
      'Jab bhi koi tumhaari pasandeeda sharaarat yaad aa jaati hai',
      'Kaam ke beech mein bhi chehre par muskaan aa jaati hai',
    ],
    linesEnglish: [
      'Whenever one of your playful habits flashes across my mind',
      'A gentle smile appears on my face even in the middle of work',
    ],
  },
  {
    title: 'तन्हा सफ़र की साथी याद',
    titleEnglish: 'Memory as Travel Companion',
    linesHindi: [
      'अकेले घूमने निकलता हूँ तो कभी तन्हाई नहीं लगती',
      'तुम्हारी मीठी यादें मेरे साथ कदम से कदम मिलाती हैं',
    ],
    linesHinglish: [
      'Akele ghoomne nikalta hoon to kabhi tanhaai nahin lagti',
      'Tumhaari meethi yaadein mere saath kadam se kadam milaati hain',
    ],
    linesEnglish: [
      'When I set out on walks alone, I never truly feel lonely',
      'Your sweet memories match my stride step for step',
    ],
  },
  {
    title: 'मखमली रात के तारे',
    titleEnglish: 'Stars of a Velvet Night',
    linesHindi: [
      'छत पर लेटकर जब आसमान के तारे गिनता हूँ मैं',
      'हर चमकते तारे में तेरी आँखों की चमक दिखती है',
    ],
    linesHinglish: [
      'Chhat par letkar jab aasmaan ke taare ginta hoon main',
      'Har chamakte taare mein teri aankhon ki chamak dikhti hai',
    ],
    linesEnglish: [
      'Lying on the rooftop counting stars across the night sky',
      'In every sparkling star I glimpse the brightness of your eyes',
    ],
  },
  {
    title: 'भूली हुई आवाज़ का जादू',
    titleEnglish: 'Echo of an Old Voice Note',
    linesHindi: [
      'पुराना वॉइस नोट आज अचानक फिर से सुन लिया मैंने',
      'एक मिनट की आवाज़ ने सालों की तड़प ताज़ा कर दी',
    ],
    linesHinglish: [
      'Purana voice note aaj achanak phir se sun liya maine',
      'Ek minute ki aawaaz ne saalon ki tadap taaza kar di',
    ],
    linesEnglish: [
      'Today I accidentally played an old voice note of yours',
      'Just one minute of your voice revived years of longing',
    ],
  },
  {
    title: 'दिल की अलमारी',
    titleEnglish: 'Closet of the Heart',
    linesHindi: [
      'कपड़ों के साथ तेरा दिया रूमाल भी संभाला हुआ है',
      'ताकि वक़्त पड़ने पर तेरी यादों की ख़ुशबू मिल सके',
    ],
    linesHinglish: [
      'Kapdon ke saath tera diya roomal bhi sanbhaala hua hai',
      'Taaki waqt padne par teri yaadon ki khushboo mil sake',
    ],
    linesEnglish: [
      'Tucked neatly among my clothes sits the handkerchief you gave me',
      'So whenever I miss you, a trace of your memory remains near',
    ],
  },
  {
    title: 'ख़ुद से पुरानी बातें',
    titleEnglish: 'Old Jokes Only We Understood',
    linesHindi: [
      'कुछ मज़ाक़ ऐसे थे जो सिर्फ़ हम दोनों ही समझते थे',
      'आज उन बातों को याद करके अकेले ही हँस लेता हूँ',
    ],
    linesHinglish: [
      'Kuch mazaak aise the jo sirf hum dono hi samajhte the',
      'Aaj un baaton ko yaad karke akele hi hans leta hoon',
    ],
    linesEnglish: [
      'There were inside jokes only the two of us ever understood',
      'Remembering them today, I end up chuckling quietly to myself',
    ],
  },
  {
    title: 'गर्मी की दुपहरिया',
    titleEnglish: 'Lazy Summer Noon',
    linesHindi: [
      'जून की तपती दोपहर में जब पंखा धीरे घूमता है',
      'तुम्हारे साथ खाए हुए ठंडे आमों का वक़्त याद आता है',
    ],
    linesHinglish: [
      'June ki tapti dopahar mein jab pankha dheere ghoomta hai',
      'Tumhaare saath khaaye hue thande aamon ka waqt yaad aata hai',
    ],
    linesEnglish: [
      'On scorching June afternoons beneath a slow ceiling fan',
      'I recall those chilled mangoes we used to share together',
    ],
  },
  {
    title: 'नए शहर की पुरानी याद',
    titleEnglish: 'Old Memories in a New City',
    linesHindi: [
      'ऊँची इमारतों वाले इस नए शहर में सब कुछ चमकदार है',
      'पर दिल को तो वही पुरानी गली और तेरा साथ याद आता है',
    ],
    linesHinglish: [
      'Oonchi imaarton waale is naye shehar mein sab kuch chamakdaar hai',
      'Par dil ko to wahi purani gali aur tera saath yaad aata hai',
    ],
    linesEnglish: [
      'Everything glitters in this tall-buildinged modern city',
      'Yet my heart misses that quiet old lane and your company',
    ],
  },
  {
    title: 'अनमिट निशान',
    titleEnglish: 'Indelible Traces',
    linesHindi: [
      'रेत पर लिखे नाम तो लहरें बहा ले जाती हैं पल में',
      'पर दिल पर उकेरी यादें उम्र भर धुंधली नहीं होतीं',
    ],
    linesHinglish: [
      'Ret par likhe naam to lehrein baha le jaati hain pal mein',
      'Par dil par ukeri yaadein umar bhar dhundhli nahin hoteen',
    ],
    linesEnglish: [
      'Names written in sand are washed away by waves in seconds',
      'Yet memories carved onto the heart never fade across a lifetime',
    ],
  },
  {
    title: 'बदलते चेहरे और पुरानी तस्वीर',
    titleEnglish: 'A Snapshot That Never Aged',
    linesHindi: [
      'एल्बम के हर पन्ने पर धूल थोड़ी जम गई होगी',
      'पर तेरी मुस्कान वाली तस्वीर आज भी सबसे चमकदार है',
    ],
    linesHinglish: [
      'Album ke har panne par dhool thodi jam gayi hogi',
      'Par teri muskaan waali tasveer aaj bhi sabse chamakdaar hai',
    ],
    linesEnglish: [
      'Dust may have settled slightly across the album pages',
      'Yet the picture of your bright smile remains vivid as ever',
    ],
  },
  {
    title: 'ख़ामोश सलाम',
    titleEnglish: 'Quiet Silent Greeting',
    linesHindi: [
      'अब ना तो कोई संदेश आता है, ना ही कोई ख़बर',
      'फिर भी हर सुबह मन ही मन तुम्हें दुआ दे देता हूँ',
    ],
    linesHinglish: [
      'Ab na to koi sandesh aata hai, na hi koi khabar',
      'Phir bhi har subah man hi man tumhein dua de deta hoon',
    ],
    linesEnglish: [
      'Neither a message nor any news arrives from you now',
      'Even so, every morning I silently whisper a blessing for you',
    ],
  },
  {
    title: 'तन्हाई की चौखट',
    titleEnglish: 'Threshold of Solitude',
    linesHindi: [
      'यादें भी अजीब मेहमान होती हैं इस मन के घर की',
      'बिना दरवाज़ा खटखटाए सीधे दिल में आ बैठती हैं',
    ],
    linesHinglish: [
      'Yaadein bhi ajeeb mehmaan hoti hain is man ke ghar ki',
      'Bina darwaaza khatkhataye seedhe dil mein aa baithti hain',
    ],
    linesEnglish: [
      'Memories are curious guests in the home of the mind',
      'Without ever knocking, they walk straight in and sit inside the heart',
    ],
  },
  {
    title: 'धूप-छाँव का खेल',
    titleEnglish: 'Sunlight and Shade',
    linesHindi: [
      'कभी याद आकर चेहरे पर नूर बिखेर जाती है',
      'तो कभी वही याद पलकों को चुपचाप भिगो जाती है',
    ],
    linesHinglish: [
      'Kabhi yaad aakar chehre par noor bikher jaati hai',
      'To kabhi wahi yaad palkon ko chupchaap bhigo jaati hai',
    ],
    linesEnglish: [
      'Sometimes a memory arrives and lights up my entire face',
      'And other times that very memory quietly dampens my lashes',
    ],
  },
  {
    title: 'अधूरी बातचीत',
    titleEnglish: 'Unfinished Conversation',
    linesHindi: [
      'कई अनकहे सवाल आज भी मन में टहलते रहते हैं',
      'काश उस दिन थोड़ा और वक़्त मिल जाता बात करने को',
    ],
    linesHinglish: [
      'Kai ankahe sawaal aaj bhi man mein tehalte rehte hain',
      'Kaash us din thoda aur waqt mil jaata baat karne ko',
    ],
    linesEnglish: [
      'So many unasked questions still pace around inside my mind',
      'I wish we had just a little more time to talk that day',
    ],
  },
  {
    title: 'हाथों की गर्माहट',
    titleEnglish: 'Warmth Remembered',
    linesHindi: [
      'ठंडी सुबह में जब कोहरे से हाथ सुन्न होने लगते हैं',
      'तेरी हथेली की वो मीठी गर्माहट बहुत याद आती है',
    ],
    linesHinglish: [
      'Thandi subah mein jab kohre se haath sunn hone lagte hain',
      'Teri hatheli ki wo meethi garmaahat bahut yaad aati hai',
    ],
    linesEnglish: [
      'On freezing mornings when the mist numbs my bare hands',
      'I deeply miss the gentle warmth of your palms around mine',
    ],
  },
  {
    title: 'पुस्तकालय की शांत मेज़',
    titleEnglish: 'Quiet Desk Corners',
    linesHindi: [
      'किताबों के पन्नों के बीच भी तेरा नाम ढूँढ लेता हूँ',
      'पढ़ाई तो बहाना थी, असल में तो तुझसे मिलना होता था',
    ],
    linesHinglish: [
      'Kitaabon ke pannon ke beech bhi tera naam dhoondh leta hoon',
      'Padhai to bahaana thi, asal mein to tujhse milna hota tha',
    ],
    linesEnglish: [
      'Even between textbook pages my eyes trace out your name',
      'Studying was only an excuse; the real reason was meeting you',
    ],
  },
  {
    title: 'सपनों के शहर में तुम',
    titleEnglish: 'City Built of Memories',
    linesHindi: [
      'मेरा दिल भी किसी पुराने संग्रहालय से कम नहीं है',
      'यहाँ तेरी हर मुस्कान और हर अदा सहेजकर रखी है',
    ],
    linesHinglish: [
      'Mera dil bhi kisi purane sangrahalaya se kam nahin hai',
      'Yahaan teri har muskaan aur har ada sahejkar rakhi hai',
    ],
    linesEnglish: [
      'My heart is no less than an old, treasured museum',
      'Every smile and small gesture of yours stays preserved inside',
    ],
  },
  {
    title: 'सड़क पार की वो दुकान',
    titleEnglish: 'The Shop Across the Road',
    linesHindi: [
      'नुक्कड़ की उस छोटी सी दुकान से आज भी समोसे खरीदे',
      'बस दूसरा हिस्सा खाने वाला यार अब शहर में नहीं रहा',
    ],
    linesHinglish: [
      'Nukkad ki us chhoti si dukaan se aaj bhi samose khareede',
      'Bas doosra hissa khaane wala yaar ab shehar mein nahin raha',
    ],
    linesEnglish: [
      'Even today I bought snacks from that little corner stall',
      'Only the friend who shared the second half lives in this town no more',
    ],
  },
  {
    title: 'हवा में उड़ता पन्ना',
    titleEnglish: 'Turning Pages of Memory',
    linesHindi: [
      'ज़िंदगी की तेज़ रफ़्तार में आगे तो बढ़ गए हम दोनों',
      'पर पीछे छूटे हुए पन्ने हवा में आज भी फड़फड़ाते हैं',
    ],
    linesHinglish: [
      'Zindagi ki tez raftaar mein aage to badh gaye hum dono',
      'Par peeche chhoote hue panne hawa mein aaj bhi phadphadate hain',
    ],
    linesEnglish: [
      'Both of us moved ahead with the brisk pace of life',
      'Yet the pages left behind still flutter gently in the wind',
    ],
  },
  {
    title: 'सुबह की अलार्म घंटी',
    titleEnglish: 'Morning Wake-Up Thought',
    linesHindi: [
      'आँख खुलते ही पहला संदेश तुम्हें भेजने की आदत थी',
      'आज फोन उठाता हूँ तो स्क्रीन पर सिर्फ़ सन्नाटा दिखता है',
    ],
    linesHinglish: [
      'Aankh khulte hi pehla sandesh tumhein bhejne ki aadat thi',
      'Aaj phone uthata hoon to screen par sirf sannata dikhta hai',
    ],
    linesEnglish: [
      'Sending you the very first morning message used to be my habit',
      'Picking up my phone today, I see only quiet emptiness on screen',
    ],
  },
  {
    title: 'गुज़रती रेलगाड़ी की सीटी',
    titleEnglish: 'Distant Train Whistle',
    linesHindi: [
      'रात के सन्नाटे में जब दूर से ट्रेन की सीटी सुनाई देती है',
      'तुम्हें स्टेशन पर विदा करने वाला दिन ताज़ा हो जाता है',
    ],
    linesHinglish: [
      'Raat ke sannate mein jab door se train ki seeti sunai deti hai',
      'Tumhein station par vida karne wala din taaza ho jaata hai',
    ],
    linesEnglish: [
      'When a distant train whistle echoes through the quiet night',
      'The evening I saw you off at the platform turns vivid again',
    ],
  },
  {
    title: 'अधूरी चाय और गहरी याद',
    titleEnglish: 'Cold Cup of Memories',
    linesHindi: [
      'तुम्हारी बातों में खोकर अक्सर मेरी चाय ठंडी हो जाती है',
      'तुम सामने न रहकर भी मेरी हर शाम में शामिल हो',
    ],
    linesHinglish: [
      'Tumhaari baaton mein khokar aksar meri chai thandi ho jaati hai',
      'Tum saamne na rehkar bhi meri har shaam mein shaamil ho',
    ],
    linesEnglish: [
      'Lost in memories of our talks, my tea often grows cold',
      'Even absent from sight, you remain part of every evening I spend',
    ],
  },
  {
    title: 'मन के आकाश में चाँद',
    titleEnglish: 'Moon Inside the Mind',
    linesHindi: [
      'बादलों के पीछे छुपकर भी चाँद कम चमकदार नहीं होता',
      'आँखों से ओझल होकर भी तुम मेरी रूह में बसे रहते हो',
    ],
    linesHinglish: [
      'Baadalon ke peeche chhupkar bhi chaand kam chamakdaar nahin hota',
      'Aankhon se ojhal hokar bhi tum meri rooh mein base rehte ho',
    ],
    linesEnglish: [
      'Even tucked behind clouds, the moon loses none of its glow',
      'Out of my sight, you still dwell deeply within my soul',
    ],
  },
  {
    title: 'पुरानी शर्ट की जेब',
    titleEnglish: 'Pocket of an Old Shirt',
    linesHindi: [
      'पुरानी जैकेट की जेब से आज एक बस का टिकट मिला',
      'तारीख़ मिट चुकी थी पर हमारा वो सफ़र आँखों में तैर गया',
    ],
    linesHinglish: [
      'Purani jacket ki jeb se aaj ek bus ka ticket mila',
      'Taareekh mit chuki thi par hamaara wo safar aankhon mein tair gaya',
    ],
    linesEnglish: [
      'Today I found an old bus ticket inside my jacket pocket',
      'Its ink had faded, yet our whole ride floated before my eyes',
    ],
  },
  {
    title: 'रिश्तों का मीठा असर',
    titleEnglish: 'Lingering Grace of True Bonds',
    linesHindi: [
      'इंसान चला जाता है अपनी नई दुनिया बसाने के लिए',
      'पर उसकी छोटी-छोटी बातें हमेशा के लिए रह जाती हैं',
    ],
    linesHinglish: [
      'Insaan chala jaata hai apni nayi duniya basaane ke liye',
      'Par uski chhoti-chhoti baatein hamesha ke liye reh jaati hain',
    ],
    linesEnglish: [
      'People move away to build their newer worlds elsewhere',
      'Yet all their small, endearing ways linger on forever',
    ],
  },
  {
    title: 'चुपचाप गिरते पत्तों सा वक़्त',
    titleEnglish: 'Time Falling Like Quiet Leaves',
    linesHindi: [
      'महीनों से मुलाक़ात नहीं हुई पर लगता है कल की बात है',
      'तुम्हारी यादों ने वक़्त की दूरी को भी हरा दिया है',
    ],
    linesHinglish: [
      'Mahino se mulaaqaat nahin hui par lagta hai kal ki baat hai',
      'Tumhaari yaadon ne waqt ki doori ko bhi hara diya hai',
    ],
    linesEnglish: [
      'Months have passed without meeting, yet it feels like yesterday',
      'Memories of you have defeated even the distance of time',
    ],
  },
  {
    title: 'बग़ीचे की सूनी बेंच',
    titleEnglish: 'Empty Park Bench',
    linesHindi: [
      'पार्क की उस लकड़ी वाली बेंच पर कोई और बैठा था आज',
      'पर मेरी आँखों को वहाँ सिर्फ़ हमारा गुज़रा कल दिखा',
    ],
    linesHinglish: [
      'Park ki us lakdi waali bench par koi aur baitha tha aaj',
      'Par meri aankhon ko wahaan sirf hamaara guzra kal dikha',
    ],
    linesEnglish: [
      'Someone else sat upon that wooden park bench today',
      'Yet my eyes saw only our yesterday resting right there',
    ],
  },
  {
    title: 'शहर की बारिश और तुम',
    titleEnglish: 'City Rain and You',
    linesHindi: [
      'सावन की फुहारें आज फिर खिड़की पर दस्तक दे रही हैं',
      'जैसे तुम्हारी यादें बाहर खड़े होकर अंदर आने को कह रही हैं',
    ],
    linesHinglish: [
      'Saawan ki fuhaarein aaj phir khidki par dastak de rahi hain',
      'Jaise tumhaari yaadein baahar khade hokar andar aane ko keh rahi hain',
    ],
    linesEnglish: [
      'Monsoon droplets tap gently against my windowpane again',
      'As if your memories stand outside asking to step back in',
    ],
  },
  {
    title: 'सुकून भरा पुराना पल',
    titleEnglish: 'A Restful Moment From Before',
    linesHindi: [
      'भागदौड़ भरी ज़िंदगी में जब भी थककर बैठता हूँ मैं',
      'तेरी यादों की छाँव पल भर में तरोताज़ा कर देती है',
    ],
    linesHinglish: [
      'Bhaagdaud bhari zindagi mein jab bhi thakkar baithta hoon main',
      'Teri yaadon ki chhaanv pal bhar mein tarotaaza kar deti hai',
    ],
    linesEnglish: [
      'Whenever I pause exhausted amidst this frantic pace of life',
      'The shade of your memories refreshes my spirit in a heartbeat',
    ],
  },
  {
    title: 'नाम की मिठास',
    titleEnglish: 'Sweetness of a Name',
    linesHindi: [
      'किसी और का नाम भी जब तेरे नाम जैसा सुनाई देता है',
      'तो अनजाने में ही दिल की धड़कन ज़रा तेज़ हो जाती है',
    ],
    linesHinglish: [
      'Kisi aur ka naam bhi jab tere naam jaisa sunai deta hai',
      'To anjaane mein hi dil ki dhadkan zara tez ho jaati hai',
    ],
    linesEnglish: [
      'Even when another person shares the sound of your name',
      'My heart involuntarily beats a little faster for a second',
    ],
  },
  {
    title: 'आँखों की नमी में अक्स',
    titleEnglish: 'Reflection in Moist Eyes',
    linesHindi: [
      'भुलाने की हर तरक़ीब हार गई तेरे आगे आकर',
      'जब भी आँखें गीली हुईं, सबसे पहले तेरा चेहरा उभरा',
    ],
    linesHinglish: [
      'Bhulaane ki har tarqeeb haar gayi tere aage aakar',
      'Jab bhi aankhein geeli hueen, sabse pehle tera chehra ubhra',
    ],
    linesEnglish: [
      'Every trick to forget failed once it stood before your memory',
      'Whenever my eyes turned misty, your face was first to appear',
    ],
  },
  {
    title: 'अधूरा जन्मदिन का तोहफ़ा',
    titleEnglish: 'Saved Birthday Wish',
    linesHindi: [
      'आज भी तुम्हारे जन्मदिन पर घड़ी की सुई देखता हूँ मैं',
      'बस फ़र्क इतना है कि अब रात बारह बजे कॉल नहीं करता',
    ],
    linesHinglish: [
      'Aaj bhi tumhaare janamdin par ghadi ki sui dekhta hoon main',
      'Bas farq itna hai ki ab raat baarah baje call nahin karta',
    ],
    linesEnglish: [
      'Even today I watch the clock strike midnight on your birthday',
      'The only change is that I no longer place that twelve o clock call',
    ],
  },
  {
    title: 'ख़ुशबूदार यादों का बाग़',
    titleEnglish: 'Garden of Fragrant Memories',
    linesHindi: [
      'भले ही आज हमारे बीच मीलों की ख़ामोशी खड़ी है',
      'पर मेरी यादों का बग़ीचा तेरे नाम से अब भी महकता है',
    ],
    linesHinglish: [
      'Bhale hi aaj hamaare beech meelon ki khaamoshi khadi hai',
      'Par meri yaadon ka bageecha tere naam se ab bhi mehakta hai',
    ],
    linesEnglish: [
      'Though miles of silence stand between the two of us today',
      'The garden of my memories still blooms fragrant with your name',
    ],
  },
  {
    title: 'चुपचाप बीती शामें',
    titleEnglish: 'Quietly Passing Twilights',
    linesHindi: [
      'दिया जलाकर जब आँगन में बैठती है माँ शाम को',
      'लौ की चमक में तेरे साथ बिताए त्यौहार याद आते हैं',
    ],
    linesHinglish: [
      'Diya jalaakar jab aangan mein baithti hai maa shaam ko',
      'Lau ki chamak mein tere saath bitaaye tyohaar yaad aate hain',
    ],
    linesEnglish: [
      'When evening lamps are lit in the courtyard at dusk',
      'Their warm glow brings back festivals spent laughing with you',
    ],
  },
  {
    title: 'रास्ते की पहचान',
    titleEnglish: 'Landmarks of Yesterday',
    linesHindi: [
      'शहर के हर चौराहे से कोई न कोई किस्सा जुड़ा है तेरा',
      'अब नया रास्ता चुनूँ भी तो किधर से होकर निकलूँ',
    ],
    linesHinglish: [
      'Shehar ke har chaurahay se koi na koi kissa juda hai tera',
      'Ab naya raasta chunoon bhi to kidhar se hokar nikloon',
    ],
    linesEnglish: [
      'Every crossroads in this city carries a story tied to you',
      'Even if I want a new route, where could I possibly turn',
    ],
  },
  {
    title: 'बंद खिड़की के पार',
    titleEnglish: 'Beyond the Closed Window',
    linesHindi: [
      'बाहर तेज़ हवा चलती है तो खिड़की खड़कने लगती है',
      'एक सेकंड को लगता है जैसे तुमने बाहर से दस्तक दी',
    ],
    linesHinglish: [
      'Baahar tez hawa chalti hai to khidki khadakne lagti hai',
      'Ek second ko lagta hai jaise tumne baahar se dastak di',
    ],
    linesEnglish: [
      'When strong winds blow outside, the window shutter rattles',
      'For one brief second it feels as though you knocked outside',
    ],
  },
  {
    title: 'रंगीन पत्तों का मौसम',
    titleEnglish: 'Season of Fallen Leaves',
    linesHindi: [
      'सड़क पर बिखरे सूखे पत्तों की आवाज़ सुनते हुए',
      'तुम्हारे साथ टहलने वाली वो ठंडी शाम याद आ गई',
    ],
    linesHinglish: [
      'Sadak par bikhre sookhe patton ki aawaaz sunte hue',
      'Tumhaare saath tehalne waali wo thandi shaam yaad aa gayi',
    ],
    linesEnglish: [
      'Listening to dry leaves crunch beneath my boots on the road',
      'Brought back that crisp evening when we strolled side by side',
    ],
  },
  {
    title: 'मन के तारों की झंकार',
    titleEnglish: 'Strumming Strings of Memory',
    linesHindi: [
      'किसी एक याद के छूते ही पूरा अतीत गूँज उठता है',
      'जैसे शांत कमरे में कोई सितार के तार छेड़ दे',
    ],
    linesHinglish: [
      'Kisi ek yaad ke chhoote hi poora ateet goonj uthta hai',
      'Jaise shaant kamre mein koi sitaar ke taar chhed de',
    ],
    linesEnglish: [
      'At the touch of a single memory, the whole past resonates',
      'Like someone gently plucking a sitar string in a quiet room',
    ],
  },
  {
    title: 'ख़ामोश सफ़र का हमराज़',
    titleEnglish: 'Confidant of Quiet Miles',
    linesHindi: [
      'हेडफ़ोन लगाकर बस की आख़िरी सीट पर बैठा हूँ',
      'बाहर गुज़रते हर शहर में सिर्फ़ तेरा इंतज़ार दिखता है',
    ],
    linesHinglish: [
      'Headphone lagaakar bus ki aakhiri seat par baitha hoon',
      'Baahar guzarte har shehar mein sirf tera intezaar dikhta hai',
    ],
    linesEnglish: [
      'Sitting on the last seat of the bus with headphones on',
      'Every passing town outside reminds me of waiting for you',
    ],
  },
  {
    title: 'दिल की गहराई में बसी छवि',
    titleEnglish: 'Portrait Kept Deep Within',
    linesHindi: [
      'चेहरे तो रोज़ हज़ारों नए सामने आते हैं दुनिया में',
      'पर मन की स्लेट पर लिखी तेरी छवि कोई मिटा न सका',
    ],
    linesHinglish: [
      'Chehre to roz hazaaron naye saamne aate hain duniya mein',
      'Par man ki slate par likhi teri chhavi koi mita na saka',
    ],
    linesEnglish: [
      'Thousands of new faces pass before me every day in this world',
      'Yet nothing could erase your portrait etched onto my mind',
    ],
  },
  {
    title: 'चाँदनी रात की गुफ़्तगू',
    titleEnglish: 'Moonlight Conversation',
    linesHindi: [
      'आधी रात को जब छत पर चाँद चमकता दिखता है',
      'लगता है तुम भी कहीं इसी चाँद को देख रहे होंगे',
    ],
    linesHinglish: [
      'Aadhi raat ko jab chhat par chaand chamakta dikhta hai',
      'Lagta hai tum bhi kahin isi chaand ko dekh rahe honge',
    ],
    linesEnglish: [
      'At midnight when the moon glows brightly above the rooftop',
      'I imagine you somewhere far away gazing at this very same moon',
    ],
  },
  {
    title: 'सच्ची दोस्ती की कशिश',
    titleEnglish: 'Pull of Pure Fondness',
    linesHindi: [
      'यादें कभी पूछकर नहीं आतीं इंसान के दरवाज़े पर',
      'वो तो बस पुराने प्यार का हक़ जताने आ जाती हैं',
    ],
    linesHinglish: [
      'Yaadein kabhi poochhkar nahin aateen insaan ke darwaaze par',
      'Wo to bas purane pyaar ka haq jataane aa jaati hain',
    ],
    linesEnglish: [
      'Memories never ask permission before visiting your doorstep',
      'They simply arrive to claim the right of old affection',
    ],
  },
  {
    title: 'मीठी यादों का संदूक़',
    titleEnglish: 'Chest of Sweet Keepsakes',
    linesHindi: [
      'ज़िंदगी भर की कमाई में सबसे क़ीमती चीज़ यही है',
      'कुछ हँसते-खिलखिलाते पलों की यादें जो तुमने दीं',
    ],
    linesHinglish: [
      'Zindagi bhar ki kamaai mein sabse keemti cheez yahi hai',
      'Kuch hanste-khilkhilaate palon ki yaadein jo tumne deen',
    ],
    linesEnglish: [
      'Among everything gathered in a lifetime, this remains most precious',
      'Those radiant, laughing moments you gifted to my memory',
    ],
  },
  {
    title: 'गुज़रे सावन का गीलापन',
    titleEnglish: 'Scent of Past Monsoons',
    linesHindi: [
      'भीगे हुए कागज़ पर आज भी धुंधला सा नाम लिखा है',
      'बचपन की उस बारिश में तुम्हारी हँसी आज भी बसी है',
    ],
    linesHinglish: [
      'Bheege hue kaagaz par aaj bhi dhundhla sa naam likha hai',
      'Bachpan ki us baarish mein tumhaari hansi aaj bhi basi hai',
    ],
    linesEnglish: [
      'A faint name still sits written on dampened old paper',
      'Your laughter from that monsoon afternoon still lingers on',
    ],
  },
  {
    title: 'ठहरे हुए लम्हों की तस्वीर',
    titleEnglish: 'Still Frame of Yesterday',
    linesHindi: [
      'सब कुछ आगे बढ़ गया पर दिल की तस्वीर वहीं रुकी है',
      'जहाँ पहली बार तुमने मुस्कुराकर हाथ थामा था मेरा',
    ],
    linesHinglish: [
      'Sab kuch aage badh gaya par dil ki tasveer wahin ruki hai',
      'Jahaan pehli baar tumne muskurakar haath thaama tha mera',
    ],
    linesEnglish: [
      'Everything else moved on, yet my hearts snapshot stayed frozen',
      'Right at the moment you smiled and held my hand for the first time',
    ],
  },
  {
    title: 'बिछड़न के बाद का एहसास',
    titleEnglish: 'After Parting',
    linesHindi: [
      'साथ रहते हुए कभी इतनी कद्र न समझी थी वक़्त की',
      'दूर होने के बाद हर एक मिनट हीरे जैसा याद आता है',
    ],
    linesHinglish: [
      'Saath rehte hue kabhi itni qadr na samjhi thi waqt ki',
      'Door hone ke baad har ek minute heere jaisa yaad aata hai',
    ],
    linesEnglish: [
      'While together, I scarcely realized the worth of each hour',
      'After parting, every single minute returns to mind like a jewel',
    ],
  },
  {
    title: 'यादों की मुलायम चादर',
    titleEnglish: 'Soft Blanket of Memory',
    linesHindi: [
      'जब दुनिया के तानों से मन ज़ख़्मी हो जाता है',
      'तेरी प्यारी यादें मरहम बनकर सीने से लग जाती हैं',
    ],
    linesHinglish: [
      'Jab duniya ke taanon se man zakhmi ho jaata hai',
      'Teri pyaari yaadein marham bankar seene se lag jaati hain',
    ],
    linesEnglish: [
      'When harsh words from the world leave my spirit bruised',
      'Your tender memories turn into balm and soothe my heart',
    ],
  },
  {
    title: 'ख़ाली पन्नों की पुकार',
    titleEnglish: 'Blank Pages Calling',
    linesHindi: [
      'नई डायरी खरीदी थी कि कुछ नया लिखूँगा इस साल',
      'पर पहले ही पन्ने पर फिर तेरी याद का ज़िक्र आ गया',
    ],
    linesHinglish: [
      'Nayi diary khareedi thi ki kuch naya likhoonga is saal',
      'Par pehle hi panne par phir teri yaad ka zikr aa gaya',
    ],
    linesEnglish: [
      'I bought a fresh diary hoping to write something new this year',
      'Yet right on the first page, memories of you appeared again',
    ],
  },
  {
    title: 'अनसुनी परछाईं',
    titleEnglish: 'Quiet Shadow Beside Me',
    linesHindi: [
      'शाम की धूप में जब लंबी परछाईं बनती है सड़क पर',
      'एक पल को लगता है जैसे तुम साथ चल रहे हो बगल में',
    ],
    linesHinglish: [
      'Shaam ki dhoop mein jab lambi parchhaai banti hai sadak par',
      'Ek pal ko lagta hai jaise tum saath chal rahe ho bagal mein',
    ],
    linesEnglish: [
      'When late afternoon sun stretches long shadows across the road',
      'For a heartbeat it feels as though you walk right beside me',
    ],
  },
  {
    title: 'भूली-बिसरी गलियाँ',
    titleEnglish: 'Alleys of Youth',
    linesHindi: [
      'स्कूल से लौटते वक़्त जिन पेड़ों के नीचे रुकते थे हम',
      'आज वहाँ बड़ी इमारत बन गई पर यादें वहीं खड़ी हैं',
    ],
    linesHinglish: [
      'School se laut-te waqt jin pedon ke neeche rukte the hum',
      'Aaj wahaan badi imaarat ban gayi par yaadein wahin khadi hain',
    ],
    linesEnglish: [
      'Where we used to pause beneath tall trees on our walk back',
      'A concrete tower stands now, yet our memories still linger there',
    ],
  },
  {
    title: 'मुस्कुराती हुई तन्हाई',
    titleEnglish: 'Smiling Solitude',
    linesHindi: [
      'याद तुम्हारी इतनी प्यारी है कि ग़म भी हल्का लगता है',
      'अकेला बैठा हूँ पर चेहरा तुम्हें सोचकर खिल उठता है',
    ],
    linesHinglish: [
      'Yaad tumhaari itni pyaari hai ki gham bhi halka lagta hai',
      'Akela baitha hoon par chehra tumhein sochkar khil uthta hai',
    ],
    linesEnglish: [
      'Thoughts of you are so dear that even sorrow turns lighter',
      'I sit all alone, yet my face brightens simply picturing you',
    ],
  },
  {
    title: 'धड़कन में छुपा नाम',
    titleEnglish: 'Name Inside Every Beat',
    linesHindi: [
      'ज़ुबान से तो बरसों से तुम्हारा नाम लेना छोड़ दिया',
      'पर दिल की हर धड़कन अब भी तुम्हें ही पुकारती है',
    ],
    linesHinglish: [
      'Zubaan se to barson se tumhaara naam lena chhod diya',
      'Par dil ki har dhadkan ab bhi tumhein hi pukaarti hai',
    ],
    linesEnglish: [
      'Years ago my lips stopped speaking your name aloud',
      'Yet every beat inside my chest still calls out only for you',
    ],
  },
  {
    title: 'अनचाही दूरी में भी पास',
    titleEnglish: 'Close Across Distance',
    linesHindi: [
      'तस्वीर धुंधली पड़ सकती है मोबाइल की स्क्रीन पर',
      'पर दिल की नज़रों से तुम कभी ओझल नहीं होते',
    ],
    linesHinglish: [
      'Tasveer dhundhli pad sakti hai mobile ki screen par',
      'Par dil ki nazron se tum kabhi ojhal nahin hote',
    ],
    linesEnglish: [
      'A photo might fade upon a glowing phone screen',
      'Yet from the eyes of my heart, you never slip out of sight',
    ],
  },
  {
    title: 'गुज़रे पलों की चाशनी',
    titleEnglish: 'Sweetness of Yesteryear',
    linesHindi: [
      'कितनी मीठी थीं वो छोटी-छोटी मुलाक़ातें हमारी',
      'दस मिनट की बात पूरे हफ़्ते का सुकून दे जाती थी',
    ],
    linesHinglish: [
      'Kitni meethi theen wo chhoti-chhoti mulaaqaatein hamaari',
      'Das minute ki baat poore hafte ka sukoon de jaati thi',
    ],
    linesEnglish: [
      'How sweet those brief little meetings of ours used to be',
      'Ten minutes of talking brought peace that lasted an entire week',
    ],
  },
  {
    title: 'सपने और हक़ीक़त के बीच',
    titleEnglish: 'Between Dream and Dawn',
    linesHindi: [
      'हर रात तुम्हें याद करके आँखें बंद करता हूँ मैं',
      'और हर सुबह एक नई उम्मीद लेकर उठता हूँ मैं',
    ],
    linesHinglish: [
      'Har raat tumhein yaad karke aankhein band karta hoon main',
      'Aur har subah ek nayi ummeed lekar uthta hoon main',
    ],
    linesEnglish: [
      'Every night I close my eyes holding thoughts of you',
      'And every morning I wake carrying a quiet spark of hope',
    ],
  },
  {
    title: 'यादों का अनमोल सफ़र',
    titleEnglish: 'Priceless Journey of Memory',
    linesHindi: [
      'भले ही रास्ते अलग मोड़ पर मुड़ गए हों हमारे',
      'पर साथ बिताया हर पल आज भी मेरी ताक़त है',
    ],
    linesHinglish: [
      'Bhale hi raaste alag mod par mud gaye hon hamaare',
      'Par saath bitaaya har pal aaj bhi meri taaqat hai',
    ],
    linesEnglish: [
      'Even though our paths turned down different roads eventually',
      'Every moment we shared remains my quiet strength today',
    ],
  },
  {
    title: 'सन्नाटे में गूँजती हँसी',
    titleEnglish: 'Laughter in the Stillness',
    linesHindi: [
      'जब सारा घर सो जाता है और हवा धीमे चलती है',
      'तब कानों में तेरी पुरानी खिलखिलाहट सुनाई देती है',
    ],
    linesHinglish: [
      'Jab saara ghar so jaata hai aur hawa dheeme chalti hai',
      'Tab kaanon mein teri purani khilkhilaahat sunai deti hai',
    ],
    linesEnglish: [
      'When the entire house is asleep and the night breeze settles',
      'I can clearly hear your bright laughter ringing in my ears',
    ],
  },
  {
    title: 'पत्थर पर उकेरा वक़्त',
    titleEnglish: 'Carved in Memory Forever',
    linesHindi: [
      'किताबें बदल गईं, शहर बदल गए और लोग भी बदल गए',
      'पर जो वक़्त तेरे संग जिया, वो पत्थर की लकीर बन गया',
    ],
    linesHinglish: [
      'Kitaabein badal gayin, shehar badal gaye aur log bhi badal gaye',
      'Par jo waqt tere sang jiya, wo patthar ki lakeer ban gaya',
    ],
    linesEnglish: [
      'Books changed, cities changed, and people changed along the way',
      'Yet the time lived beside you remained carved in stone',
    ],
  },
  {
    title: 'छोटी सी यादगार निशानी',
    titleEnglish: 'Small Token of Fondness',
    linesHindi: [
      'काँच की चूड़ियों की खनक आज भी चौंका देती है मुझे',
      'तुम्हारी कलाई की वो प्यारी आवाज़ अब भी याद है',
    ],
    linesHinglish: [
      'Kaanch ki choodiyon ki khanak aaj bhi chaunka deti hai mujhe',
      'Tumhaari kalaai ki wo pyaari aawaaz ab bhi yaad hai',
    ],
    linesEnglish: [
      'The clink of glass bangles still startles me when nearby',
      'I vividly remember that sweet chime around your wrists',
    ],
  },
  {
    title: 'आँगन की पुरानी नीम',
    titleEnglish: 'Shade of the Old Neem Tree',
    linesHindi: [
      'नीम के पेड़ की वो ठंडी छाँव आज भी वहीं बिछी है',
      'बस वहाँ बैठकर बातें करने वाले दो दोस्त अब दूर हैं',
    ],
    linesHinglish: [
      'Neem ke ped ki wo thandi chhaanv aaj bhi wahin bichhi hai',
      'Bas wahaan baithkar baatein karne waale do dost ab door hain',
    ],
    linesEnglish: [
      'The cool shade of that neem tree still spreads across the yard',
      'Only the two friends who sat talking beneath it live far apart now',
    ],
  },
  {
    title: 'अनजानी सी बेचैनी',
    titleEnglish: 'Quiet Longing Inside',
    linesHindi: [
      'सब कुछ हासिल होने के बाद भी मन अधूरा लगता है',
      'शायद तुम्हारी कमी कोई भी चीज़ पूरी नहीं कर सकती',
    ],
    linesHinglish: [
      'Sab kuch haasil hone ke baad bhi man adhoora lagta hai',
      'Shayad tumhaari kami koi bhi cheez poori nahin kar sakti',
    ],
    linesEnglish: [
      'Even after achieving everything, my heart feels incomplete',
      'Perhaps nothing in this world can ever fill the space you left',
    ],
  },
  {
    title: 'अधूरी दास्ताँ की याद',
    titleEnglish: 'Echoes of Half a Tale',
    linesHindi: [
      'लोग कहते हैं कि बीती बातें भूल जाना ही बेहतर है',
      'पर दिल का क्या करूँ, जो हर साँस में तुम्हें याद करता है',
    ],
    linesHinglish: [
      'Log kehte hain ki beeti baatein bhool jaana hi behtar hai',
      'Par dil ka kya karoon, jo har saans mein tumhein yaad karta hai',
    ],
    linesEnglish: [
      'People say it is wisest to let bygone memories go',
      'Yet what can I do with a heart that misses you with every breath',
    ],
  },
  {
    title: 'आँखों की चौखट पर इंतज़ार',
    titleEnglish: 'Waiting at the Threshold',
    linesHindi: [
      'दरवाज़े की हल्की आहट पर आज भी दिल धड़क उठता है',
      'दिमाग़ जानता है सच, पर मन अब भी उम्मीद रखता है',
    ],
    linesHinglish: [
      'Darwaaze ki halki aahat par aaj bhi dil dhadak uthta hai',
      'Dimaag jaanta hai sach, par man ab bhi ummeed rakhta hai',
    ],
    linesEnglish: [
      'At the faintest sound near the door, my heart still skips a beat',
      'My mind knows reality, yet my soul refuses to let go of hope',
    ],
  },
  {
    title: 'तस्वीर के रंग',
    titleEnglish: 'Colors of an Old Snapshot',
    linesHindi: [
      'दीवार पर लगी तस्वीर का रंग थोड़ा फीका भले पड़ जाए',
      'तुम्हारी यादों का उजाला दिल में कभी कम नहीं होता',
    ],
    linesHinglish: [
      'Deewar par lagi tasveer ka rang thoda feeka bhale pad jaaye',
      'Tumhaari yaadon ka ujala dil mein kabhi kam nahin hota',
    ],
    linesEnglish: [
      'Even if the colors on a framed photo slowly soften over years',
      'The light of your memory inside my heart never grows dim',
    ],
  },
  {
    title: 'यादों की ठंडी फुहार',
    titleEnglish: 'Cool Mist of Memory',
    linesHindi: [
      'तपती धूप जैसे हालात में जब मन घबराने लगता है',
      'तुम्हारा एक प्यारा किस्सा ठंडी हवा सा सुकून देता है',
    ],
    linesHinglish: [
      'Tapti dhoop jaise haalaat mein jab man ghabrane lagta hai',
      'Tumhaara ek pyaara kissa thandi hawa sa sukoon deta hai',
    ],
    linesEnglish: [
      'When harsh days wear my spirit down like scorching heat',
      'A sweet memory of you blows over me like a cool breeze',
    ],
  },
  {
    title: 'मोबाइल की पुरानी चैट',
    titleEnglish: 'Scrolling Old Messages',
    linesHindi: [
      'कभी-कभी आधी रात को पुरानी चैट ऊपर स्क्रॉल कर लेता हूँ',
      'ताकि फिर से महसूस कर सकूँ कि हम कितने ख़ास थे',
    ],
    linesHinglish: [
      'Kabhi-kabhi aadhi raat ko purani chat upar scroll kar leta hoon',
      'Taaki phir se mehsoos kar sakoon ki hum kitne khaas the',
    ],
    linesEnglish: [
      'Sometimes at midnight I scroll way back through our old messages',
      'Just to feel again how wonderfully close we once used to be',
    ],
  },
  {
    title: 'गुलदस्ते की सूखी पंखुड़ी',
    titleEnglish: 'Dried Petals of Yesterday',
    linesHindi: [
      'ताज़े फूल तो दो दिन में मुरझाकर झड़ जाते हैं अक्सर',
      'पर तुम्हारे दिए अल्फ़ाज़ आज भी दिल में महकते हैं',
    ],
    linesHinglish: [
      'Taaze phool to do din mein murjhaakar jhad jaate hain aksar',
      'Par tumhaare diye alfaaz aaj bhi dil mein mehakte hain',
    ],
    linesEnglish: [
      'Fresh blossoms wilt and scatter within just a couple of days',
      'Yet the kind words you gifted me still bloom inside my heart',
    ],
  },
  {
    title: 'धुंधली सुबह की चाय',
    titleEnglish: 'Misty Morning Cup',
    linesHindi: [
      'बालकनी से नीचे देखता हूँ तो सड़कें ख़ाली मिलती हैं',
      'इन सर्द सुबहों में तुम्हारे साथ की सैर बहुत याद आती है',
    ],
    linesHinglish: [
      'Balcony se neeche dekhta hoon to sadkein khaali milti hain',
      'In sard subahon mein tumhaare saath ki sair bahut yaad aati hai',
    ],
    linesEnglish: [
      'Looking down from my balcony onto quiet, empty streets',
      'I deeply miss the crisp morning walks we used to take together',
    ],
  },
  {
    title: 'मन के आईने में तुम',
    titleEnglish: 'Your Image in the Mind',
    linesHindi: [
      'आँखें बंद करते ही सब कुछ साफ़ दिखाई देने लगता है',
      'तुम्हारी मुस्कान, तुम्हारी बातें और वो प्यारा सा साथ',
    ],
    linesHinglish: [
      'Aankhein band karte hi sab kuch saaf dikhai dene lagta hai',
      'Tumhaari muskaan, tumhaari baatein aur wo pyaara sa saath',
    ],
    linesEnglish: [
      'The moment I shut my eyes, everything appears crystal clear',
      'Your warm smile, your gentle voice, and those lovely days together',
    ],
  },
  {
    title: 'कहानी का मीठा पन्ना',
    titleEnglish: 'Favorite Chapter Re-Read',
    linesHindi: [
      'ज़िंदगी की किताब आगे तो बहुत बढ़ चुकी है अब',
      'पर हर रात मैं सिर्फ़ तुम्हारे नाम वाला पन्ना खोलता हूँ',
    ],
    linesHinglish: [
      'Zindagi ki kitaab aage to bahut badh chuki hai ab',
      'Par har raat main sirf tumhaare naam waala panna kholta hoon',
    ],
    linesEnglish: [
      'The book of my life has moved many chapters ahead by now',
      'Yet every single night I turn back to the pages bearing your name',
    ],
  },
  {
    title: 'ख़ामोशी के पार तुम्हारी आवाज़',
    titleEnglish: 'Your Voice Beyond Silence',
    linesHindi: [
      'जब भी कोई कठिन फ़ैसला लेना होता है जीवन में',
      'दिल पूछता है कि अगर तुम होते तो क्या सलाह देते',
    ],
    linesHinglish: [
      'Jab bhi koi kathin faisla lena hota hai jeevan mein',
      'Dil poochhta hai ki agar tum hote to kya salaah dete',
    ],
    linesEnglish: [
      'Whenever I face a difficult decision along my path',
      'My heart still asks what gentle advice you would have offered',
    ],
  },
  {
    title: 'बदलते शहर की यादें',
    titleEnglish: 'Carried Across Every Move',
    linesHindi: [
      'सामान तो हर बार बक्सों में बांधकर ले आया मैं',
      'पर तुम्हारी यादें हमेशा मेरे दिल के साथ ही सफ़र करती रहीं',
    ],
    linesHinglish: [
      'Saamaan to har baar bakson mein baandhkar le aaya main',
      'Par tumhaari yaadein hamesha mere dil ke saath hi safar karti raheen',
    ],
    linesEnglish: [
      'Each move I packed all my belongings neatly into boxes',
      'Yet memories of you always traveled silently inside my heart',
    ],
  },
  {
    title: 'मीठी तकरार की याद',
    titleEnglish: 'Missing Our Silly Quarrels',
    linesHindi: [
      'छोटी-छोटी बातों पर तुम्हारा वो प्यारा सा रूठ जाना',
      'आज बड़ी शांति के बीच बहुत ज़्यादा याद आता है',
    ],
    linesHinglish: [
      'Chhoti-chhoti baaton par tumhaara wo pyaara sa rooth jaana',
      'Aaj badi shaanti ke beech bahut zyada yaad aata hai',
    ],
    linesEnglish: [
      'How affectionately you used to pout over tiny things',
      'Returns to mind vividly amidst all this grown-up quiet today',
    ],
  },
  {
    title: 'पुराने गाने की लाइन',
    titleEnglish: 'Lyric That Brings You Back',
    linesHindi: [
      'एक ही गाने को दस बार सुनने की वजह तुम ही थे',
      'आज भी वो धुन बजती है तो पलकें भारी हो जाती हैं',
    ],
    linesHinglish: [
      'Ek hi gaane ko das baar sunne ki wajah tum hi the',
      'Aaj bhi wo dhun bajti hai to palkein bhaari ho jaati hain',
    ],
    linesEnglish: [
      'You were the reason I played that one song ten times over',
      'Even today when that tune plays, my eyelids grow heavy',
    ],
  },
  {
    title: 'बिछड़ने के बाद भी अपनापन',
    titleEnglish: 'Warmth Outliving Distance',
    linesHindi: [
      'माना कि अब हमारी रोज़ मुलाक़ात नहीं होती',
      'पर दुआओं में सबसे पहला नाम आज भी तुम्हारा है',
    ],
    linesHinglish: [
      'Maana ki ab hamaari roz mulaaqaat nahin hoti',
      'Par duaon mein sabse pehla naam aaj bhi tumhaara hai',
    ],
    linesEnglish: [
      'Even though we no longer cross paths every single day',
      'The very first name whispered in my prayers remains yours',
    ],
  },
  {
    title: 'सुकून की आख़िरी निशानी',
    titleEnglish: 'Last Trace of Comfort',
    linesHindi: [
      'भागती दुनिया से थककर जब भी आँख मूंदता हूँ',
      'तेरी यादों का घर ही सबसे सुरक्षित पनाह लगता है',
    ],
    linesHinglish: [
      'Bhaagti duniya se thakkar jab bhi aankh moondta hoon',
      'Teri yaadon ka ghar hi sabse surakshit panaah lagta hai',
    ],
    linesEnglish: [
      'Whenever I close my eyes weary from this racing world',
      'The home of your memories feels like my safest shelter',
    ],
  },
  {
    title: 'अनकही यादों का मौसम',
    titleEnglish: 'Season of Unspoken Memories',
    linesHindi: [
      'कुछ चेहरे उम्र भर याद रहते हैं बिना किसी शर्त के',
      'तुम भी उन्हीं चंद लोगों में से एक हो मेरे लिए',
    ],
    linesHinglish: [
      'Kuch chehre umar bhar yaad rehte hain bina kisi shart ke',
      'Tum bhi unhi chand logon mein se ek ho mere liye',
    ],
    linesEnglish: [
      'Certain faces stay remembered for a lifetime unconditionally',
      'You will forever remain one of those rare few to me',
    ],
  },
  {
    title: 'दिल की सुनहरी धरोहर',
    titleEnglish: 'Golden Heritage of the Heart',
    linesHindi: [
      'नए रास्ते, नए साथी और नए सफ़र मिल जाएँगे ज़रूर',
      'पर तेरी यादों जैसा मीठा एहसास कहीं और नहीं मिलेगा',
    ],
    linesHinglish: [
      'Naye raaste, naye saathi aur naye safar mil jaayenge zaroor',
      'Par teri yaadon jaisa meetha ehsaas kahin aur nahin milega',
    ],
    linesEnglish: [
      'New roads, new companions, and new journeys will surely come',
      'Yet nothing anywhere will match the sweetness of remembering you',
    ],
  },
  {
    title: 'आख़िरी मुलाक़ात का सफ़र',
    titleEnglish: 'Echoes of Our Last Goodbye',
    linesHindi: [
      'मुड़कर आखिरी बार जब हाथ हिलाया था तुमने चलते हुए',
      'वो धुंधला सा मंज़र आज भी मेरी आँखों में ठहरा है',
    ],
    linesHinglish: [
      'Mudkar aakhiri baar jab haath hilaya tha tumne chalte hue',
      'Wo dhundhla sa manzar aaj bhi meri aankhon mein thehra hai',
    ],
    linesEnglish: [
      'When you turned and waved one last time as you walked away',
      'That fading twilight scene still lingers clearly in my eyes',
    ],
  },
];

export const UNIQUE_YAAD_110 = buildUniqueShayaris(
  'yaad',
  'Yaad Shayari (याद शायरी)',
  '⏳',
  91,
  YAAD_ENTRIES
);
