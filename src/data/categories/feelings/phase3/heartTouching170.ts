import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const HEART_TOUCHING_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'खामोश सेवा की कीमत',
    titleEnglish: 'Worth of Quiet Service',
    linesHindi: [
      'जो इंसान बिना किसी दिखावे के सबका ख़्याल रखता है घर में',
      'अक्सर उसी की थकान किसी की नज़रों में नहीं आती कभी',
    ],
    linesHinglish: [
      'Jo insaan bina kisi dikhaawe ke sabka khayaal rakhta hai ghar mein',
      'Aksar usi ki thakaan kisi ki nazron mein nahin aati kabhi',
    ],
    linesEnglish: [
      'The person who quietly looks after everyone at home without boasting',
      'Is often the very one whose own exhaustion goes completely unnoticed',
    ],
  },
  {
    title: 'मुस्कान के पीछे का भार',
    titleEnglish: 'Weight Behind Easy Smiles',
    linesHindi: [
      'सबसे ज़्यादा हँसाने वाले लोगों के सीने में झांककर देखो कभी',
      'वहाँ भी कई अनकही कहानियाँ चुपचाप सोई हुई मिलती हैं',
    ],
    linesHinglish: [
      'Sabse zyada hansaane waale logon ke seene mein jhaankkar dekho kabhi',
      'Wahaan bhi kai ankahi kahaaniyaan chupchaap soyi hui milti hain',
    ],
    linesEnglish: [
      'Look closely behind the faces who keep the whole room laughing',
      'Often a dozen unspoken chapters sleep quietly inside their chests too',
    ],
  },
  {
    title: 'वक़्त पर कही दो मीठी बातें',
    titleEnglish: 'Two Kind Words at Right Time',
    linesHindi: [
      'दौलत तो शायद किसी दिन इंसान अपने दम पर कमा भी ले',
      'पर टूटे वक़्त में किसी का दो मीठे शब्द बोल देना अनमोल होता है',
    ],
    linesHinglish: [
      'Daulat to shaayad kisi din insaan apni dam par kama bhi le',
      'Par toote waqt mein kisi ka do meethe shabd bol dena anmol hota hai',
    ],
    linesEnglish: [
      'Wealth can be built slowly over years through sheer determination',
      'Yet two gentle words spoken when someone breaks down remain priceless',
    ],
  },
  {
    title: 'साफ़ नीयत की शांति',
    titleEnglish: 'Sleep Earned by Clean Intent',
    linesHindi: [
      'किसी का बुरा न सोचने वाला इंसान भले थोड़ा देर से आगे बढ़े',
      'पर रात को तकिये पर सिर रखते ही उसे सुकून की नींद ज़रूर आती है',
    ],
    linesHinglish: [
      'Kisi ka bura na sochne waala insaan bhale thoda der se aage badhe',
      'Par raat ko takiye par sir rakhte hi use sukoon ki neend zaroor aati hai',
    ],
    linesEnglish: [
      'Someone who wishes zero harm on others might climb slightly slower',
      'Yet the second their head meets the pillow, deep sleep arrives easily',
    ],
  },
  {
    title: 'बूढ़े हाथों की काँपती लकीरें',
    titleEnglish: 'Trembling Lines on Aging Palms',
    linesHindi: [
      'जिन हाथों ने कभी हमें उँगली पकड़कर दौड़ना सिखाया था बचपन में',
      'उम्र ढलने पर उन काँपती हथेलियों का सहारा बनना मत भूलना',
    ],
    linesHinglish: [
      'Jin haathon ne kabhi humein ungli pakadkar daudna sikhaaya tha bachpan mein',
      'Umr dhalne par un kaanpti hatheliyon ka sahaara banna mat bhoolna',
    ],
    linesEnglish: [
      'Those steady hands that once held our tiny fingers teaching us to run',
      'Deserve our gentlest grip when years make those very palms tremble',
    ],
  },
  {
    title: 'दिल से माफ़ करने का बड़प्पन',
    titleEnglish: 'Quiet Grace of True Forgiveness',
    linesHindi: [
      'सज़ा देने के लिए तो एक पल का गुस्सा ही काफ़ी होता है इंसान में',
      'किसी की ग़लती माफ़ करने के लिए बहुत बड़ा दिल चाहिए होता है',
    ],
    linesHinglish: [
      'Saza dene ke liye to ek pal ka gussa hi kaafi hota hai insaan mein',
      'Kisi ki galti maaf karne ke liye bahut bada dil chahiye hota hai',
    ],
    linesEnglish: [
      'One sharp flash of anger is enough to punish someone instantly',
      'Truly forgiving a wound takes a far wider, steadier heart',
    ],
  },
  {
    title: 'ज़िम्मेदारियों के बीच खोया बचपन',
    titleEnglish: 'Youth Traded for Family Peace',
    linesHindi: [
      'कुछ लोग उम्र से पहले ही बड़े और गंभीर हो जाया करते हैं',
      'क्योंकि घर की ज़िम्मेदारियाँ उनके कंधों पर जल्दी आ बैठती हैं',
    ],
    linesHinglish: [
      'Kuch log umr se pehle hi bade aur gambheer ho jaaya karte hain',
      'Kyunki ghar ki zimmedariyaan unke kandhon par jaldi aa baithti hain',
    ],
    linesEnglish: [
      'Some young souls grow calm and serious years ahead of schedule',
      'Because household duties settle quietly onto their shoulders early',
    ],
  },
  {
    title: 'अजनबी की मदद का सुकून',
    titleEnglish: 'Peace in Helping Strangers',
    linesHindi: [
      'किसी अनजान राहगीर के चेहरे पर मुस्कान लाकर देखो कभी',
      'बिना किसी मंदिर-मस्जिद गए भी भीतर ईश्वरीय सुकून उतर आता है',
    ],
    linesHinglish: [
      'Kisi anjaan raahgeer ke chehre par muskaan laakar dekho kabhi',
      'Bina kisi mandir-masjid gaye bhi bheetar eeshwariya sukoon utar aata hai',
    ],
    linesEnglish: [
      'Brighten the face of one passing stranger without expecting thanks',
      'Deep sacred calm settles smoothly inside even without stepping in temples',
    ],
  },
  {
    title: 'तस्वीरों से बाहर असली ज़िंदगी',
    titleEnglish: 'Real Life Outside Photo Frames',
    linesHindi: [
      'कैमरे के सामने मुस्कुराने में तो बस एक सेकंड लगता है आजकल',
      'असली ख़ूबसूरती तब है जब आप अकेले में भी ख़ुद से खुश हों',
    ],
    linesHinglish: [
      'Camera ke saamne muskuraane mein to bas ek second lagta hai aajkal',
      'Asli khoobsurati tab hai jab aap akele mein bhi khud se khush hon',
    ],
    linesEnglish: [
      'Flashing a picture-ready smile takes barely half a second nowadays',
      'True beauty shines when you feel genuinely at peace sitting alone',
    ],
  },
  {
    title: 'प्यार शब्दों का मोहताज नहीं',
    titleEnglish: 'Care Needs No Grand Speech',
    linesHindi: [
      'मैं तुमसे प्यार करता हूँ कहने से कहीं ज़्यादा असर तब होता है',
      'जब कोई चुपचाप पूछे, तुम घर सुरक्षित पहुँच गए हो न',
    ],
    linesHinglish: [
      'Main tumse pyar karta hoon kehne se kahin zyada asar tab hota hai',
      'Jab koi chupchaap poochhe, tum ghar surakshit pahunch gaye ho na',
    ],
    linesEnglish: [
      'Far warmer than grand declarations echoing across crowded rooms',
      'Is someone asking softly late at night, did you make it home safe',
    ],
  },
  {
    title: 'टूटे हुए मन को जोड़ने की कला',
    titleEnglish: 'Art of Mending Tired Hearts',
    linesHindi: [
      'पत्थर तो कोई भी उठाकर फेंक सकता है साफ़ पानी के तालाब में',
      'किसी उदास मन में फिर से उम्मीद जगाना असली कला होती है',
    ],
    linesHinglish: [
      'Patthar to koi bhi uthaakar phenk sakta hai saaf paani ke taalaab mein',
      'Kisi udaas mann mein phir se ummeed jagaana asli kala hoti hai',
    ],
    linesEnglish: [
      'Anybody can toss a heavy stone rippling still water apart',
      'Quietly rekindling hope inside a weary heart is genuine grace',
    ],
  },
  {
    title: 'पसीने के सिक्कों का स्वाभिमान',
    titleEnglish: 'Dignity in Honest Sweat',
    linesHindi: [
      'हलाल की रोटी चाहे आधी मिले पर स्वाभिमान पूरा रखती है',
      'पसीने से कमाए सिक्कों में चमक किसी हीरे से कम नहीं होती',
    ],
    linesHinglish: [
      'Halaal ki roti chaahe aadhi mile par swaabhimaan poora rakhti hai',
      'Paseene se kamaaye sikkon mein chamak kisi heere se kam nahin hoti',
    ],
    linesEnglish: [
      'Even half a loaf earned honestly preserves your self-respect intact',
      'Coins born of sincere sweat gleam brighter than stolen diamonds',
    ],
  },
  {
    title: 'हर किसी की अपनी लड़ाई',
    titleEnglish: 'Everyone Carries Hidden Battles',
    linesHindi: [
      'किसी के व्यवहार पर तुरंत राय बनाने से पहले थोड़ा रुक जाना',
      'क्या पता वह भीतर किस अनकही जंग से जूझकर मुस्कुरा रहा हो',
    ],
    linesHinglish: [
      'Kisi ke vyavahaar par turant raay banaane se pehle thoda ruk jaana',
      'Kya pata woh bheetar kis ankahi jung se joojhkar muskura raha ho',
    ],
    linesEnglish: [
      'Pause gently before judging someone’s quiet mood too quickly',
      'You never know what silent storm they survived just to smile today',
    ],
  },
  {
    title: 'माँ की थाली का आखिरी हिस्सा',
    titleEnglish: 'Mother Saving the Last Portion',
    linesHindi: [
      'सबको पेट भर खिलाने के बाद अक्सर ख़ुद आधी रोटी पर संतोष कर लेना',
      'माँ जैसा निस्वार्थ त्याग दुनिया की किसी किताब में नहीं मिलता',
    ],
    linesHinglish: [
      'Sabko pet bhar khilaane ke baad aksar khud aadhi roti par santosh kar lena',
      'Maa jaisa niswaarth tyaag duniya ki kisi kitaab mein nahin milta',
    ],
    linesEnglish: [
      'Serving everyone full plates before quietly settling for whatever remains',
      'Is a mother’s selfless miracle no textbook could ever fully capture',
    ],
  },
  {
    title: 'वक़्त पर समझी गई क़द्र',
    titleEnglish: 'Valuing People While Here',
    linesHindi: [
      'फूल चढ़ाने वालों की भीड़ तो दुनिया से जाने के बाद भी जुड़ जाती है',
      'जीते जी किसी का हाथ थाम लेना ही सबसे बड़ी इंसानियत है',
    ],
    linesHinglish: [
      'Phool chadhaane waalon ki bheed to duniya se jaane ke baad bhi jud jaati hai',
      'Jeete jee kisi ka haath thaam lena hi sabse badi insaaniyat hai',
    ],
    linesEnglish: [
      'Crowds always show up bearing flowers once someone is gone',
      'Holding a tired hand warmly while they walk beside you is true humanity',
    ],
  },
  {
    title: 'रिश्तों में सुनने का धैर्य',
    titleEnglish: 'Patience to Truly Listen',
    linesHindi: [
      'जवाब देने के लिए तो हर कोई कान लगाए बैठा रहता है यहाँ',
      'बस कोई समझने के लिए चुपचाप सुन ले, यही सबसे बड़ी दौलत है',
    ],
    linesHinglish: [
      'Jawaab dene ke liye to har koi kaan lagaaye baitha rehta hai yahaan',
      'Bas koi samajhne ke liye chupchaap sun le, yahi sabse badi daulat hai',
    ],
    linesEnglish: [
      'Everyone waits impatiently just to fire back their own reply',
      'Finding one person who listens calmly to understand is pure treasure',
    ],
  },
  {
    title: 'छोटी बातों से बड़ा असर',
    titleEnglish: 'Big Grace in Small Gestures',
    linesHindi: [
      'रिश्ते महँगे तोहफ़ों से नहीं, छोटे-छोटे ध्यान रखने से पलते हैं',
      'थके चेहरे को देखकर बिना कहे चाय बना देना ही काफ़ी होता है',
    ],
    linesHinglish: [
      'Rishte mehnge tohfon se nahin, chhote-chhote dhyaan rakhne se palte hain',
      'Thake chehre ko dekhkar bina kahe chai bana dena hi kaafi hota hai',
    ],
    linesEnglish: [
      'Deep ties rarely thrive on shiny wrappers—they grow through gentle care',
      'Brewing tea silently when noticing a weary face says everything',
    ],
  },
  {
    title: 'अपने आप से सुलह',
    titleEnglish: 'Making Peace Within Yourself',
    linesHindi: [
      'दूसरों को मनाते-मनाते अक्सर इंसान ख़ुद से बहुत दूर निकल जाता है',
      'कभी शाम को बैठकर अपने ही दिल का हाल पूछ लेना भी ज़रूरी है',
    ],
    linesHinglish: [
      'Doosron ko manaate-manaate aksar insaan khud se bahut door nikal jaata hai',
      'Kabhi shaam ko baithkar apne hi dil ka haal poochh lena bhi zaroori hai',
    ],
    linesEnglish: [
      'Spending years pleasing others often drifts you miles from yourself',
      'Sitting quietly at dusk to ask your own heart how it feels matters too',
    ],
  },
  {
    title: 'दुःख बाँटने से हल्का होता है',
    titleEnglish: 'Shared Sorrow Weighs Half',
    linesHindi: [
      'अकेले कमरे में घुटते रहने से कोई दर्द छोटा नहीं हो जाता कभी',
      'किसी सच्चे अपने से बाँट लो तो मन का बोझ आधा रह जाता है',
    ],
    linesHinglish: [
      'Akele kamre mein ghutte rehne se koi dard chhota nahin ho jaata kabhi',
      'Kisi sachhe apne se baant lo to mann ka bojh aadha reh jaata hai',
    ],
    linesEnglish: [
      'Swallowing heavy pain behind locked doors never shrinks its weight',
      'Sharing one honest hour with someone trusted lifts half the burden',
    ],
  },
  {
    title: 'दयालुता ही असली सुंदरता',
    titleEnglish: 'Kindness Outshines Every Mirror',
    linesHindi: [
      'चेहरे की चमक तो उम्र की धूप में धीरे-धीरे ढल ही जाती है',
      'इंसान का कोमल स्वभाव उसे आखिरी साँस तक खूबसूरत बनाए रखता है',
    ],
    linesHinglish: [
      'Chehre ki chamak to umr ki dhoop mein dheere-dheere dhal hi jaati hai',
      'Insaan ka komal swabhaav use aakhiri saans tak khoobsurat banaaye rakhta hai',
    ],
    linesEnglish: [
      'Youthful glow in mirrors softens gradually beneath passing decades',
      'A gentle, generous spirit keeps a soul radiant to its final breath',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'अधूरी नींद, पूरे सपने',
    titleEnglish: 'Short Sleep, Honest Dreams',
    linesHindi: [
      'परिवार को बेहतर कल देने के लिए जो रात की नींद क़ुर्बान करते हैं',
      'उनके खामोश बलिदान पर ही घरों की मजबूत छत खड़ी होती है',
    ],
    linesHinglish: [
      'Parivaar ko behtar kal dene ke liye jo raat ki neend kurbaan karte hain',
      'Unke khaamosh balidaan par hi gharon ki mazboot chhat khadi hoti hai',
    ],
    linesEnglish: [
      'Those who sacrifice peaceful sleep to build a safer tomorrow for loved ones',
      'Hold up the quiet roof of happiness above every family’s head',
    ],
  },
  {
    title: 'रिश्तों की नाज़ुक डोर',
    titleEnglish: 'Fragile Thread of Warm Ties',
    linesHindi: [
      'अहंकार की जीत में अक्सर हम अपनों को हमेशा के लिए हार जाते हैं',
      'जहाँ प्यार सच्चा हो, वहाँ थोड़ा सा झुक जाने में कोई बुराई नहीं',
    ],
    linesHinglish: [
      'Ahankaar ki jeet mein aksar hum apnon ko hamesha ke liye haar jaate hain',
      'Jahaan pyar sachha ho, wahaan thoda sa jhuk jaane mein koi buraai nahin',
    ],
    linesEnglish: [
      'Winning petty ego fights often costs us the people we love most',
      'Where affection is genuine, bending gently is never defeat',
    ],
  },
  {
    title: 'मासूम सवाल और बड़ा जवाब',
    titleEnglish: 'Simple Question, Deep Answer',
    linesHindi: [
      'बचपन में लगता था बड़े होते ही हर मनपसंद चीज़ मिल जाएगी हमें',
      'बड़े हुए तो समझ आया कि सबसे बड़ी चीज़ बस मन की शांति थी',
    ],
    linesHinglish: [
      'Bachpan mein lagta tha bade hote hi har manpasand cheez mil jaayegi humein',
      'Bade hue to samajh aaya ki sabse badi cheez bas mann ki shaanti thi',
    ],
    linesEnglish: [
      'As kids we assumed adulthood meant buying every toy on the shelf',
      'Growing up revealed the rarest prize on earth was simply peace of mind',
    ],
  },
  {
    title: 'चोट खाकर भी नर्म दिल',
    titleEnglish: 'Soft Heart After Hard Knocks',
    linesHindi: [
      'दुनिया की सख़्ती देखकर पत्थर बन जाना बहुत आसान काम होता है',
      'पर ठोकरें खाकर भी दूसरों के लिए नर्म दिल रखना कमाल है',
    ],
    linesHinglish: [
      'Duniya ki sakhti dekhkar patthar ban jaana bahut aasaan kaam hota hai',
      'Par thokrein khaakar bhi doosron ke liye narm dil rakhna kamaal hai',
    ],
    linesEnglish: [
      'Turning cold like stone after getting bruised by life is effortless',
      'Keeping your heart tender toward others despite scars is rare courage',
    ],
  },
  {
    title: 'खामोश आँसुओं का मोल',
    titleEnglish: 'Weight of Unseen Tears',
    linesHindi: [
      'जो आँसू तकिये के भीतर चुपचाप जज़्ब हो जाते हैं रात के अँधेरे में',
      'सुबह वही आँसू इंसान के चेहरे पर एक शांत समझदारी बन जाते हैं',
    ],
    linesHinglish: [
      'Jo aansoo takiye ke bheetar chupchaap jazb ho jaate hain raat ke andhere mein',
      'Subah wahi aansoo insaan ke chehre par ek shaant samajhdaari ban jaate hain',
    ],
    linesEnglish: [
      'Quiet tears soaked silently into pillows during lonely midnight hours',
      'Turn by sunrise into calm grace and unmistakable wisdom on your face',
    ],
  },
  {
    title: 'असली अमीरी का पैमाना',
    titleEnglish: 'True Measure of Richness',
    linesHindi: [
      'जब किसी कठिन वक़्त में दो लोग कहें, घबरा मत मैं हूँ न तेरे साथ',
      'तो समझ लेना तुम इस धरती के सबसे अमीर इंसान हो यार',
    ],
    linesHinglish: [
      'Jab kisi kathin waqt mein do log kahein, ghabra mat main hoon na tere saath',
      'To samajh lena tum is dharti ke sabse ameer insaan ho yaar',
    ],
    linesEnglish: [
      'When storms roll in and two loyal voices say, do not worry I am here',
      'Know without doubt you stand wealthier than anyone on earth',
    ],
  },
  {
    title: 'बदलाव का कोमल सबक़',
    titleEnglish: 'Gentle Lesson in Letting Change',
    linesHindi: [
      'पेड़ भी पतझड़ में पुराने पत्ते गिराने से डरते नहीं हैं कभी',
      'क्योंकि उन्हें पता है कि नए मौसम में नई कोपलें ज़रूर आएँगी',
    ],
    linesHinglish: [
      'Ped bhi patjhad mein puraane patte giraane se darte nahin hain kabhi',
      'Kyunki unhein pata hai ki naye mausam mein nayi kopalein zaroor aayengi',
    ],
    linesEnglish: [
      'Even wise old trees never panic when autumn shakes dry leaves free',
      'Trusting quietly that fresh spring buds will soon bloom along bare limbs',
    ],
  },
  {
    title: 'बिन माँगी दुआ की ताक़त',
    titleEnglish: 'Power of Unasked Blessings',
    linesHindi: [
      'किसी भूखे को खाना या प्यासे को पानी पिलाकर लौटते हुए देखना',
      'पीछे से मिली एक दुआ आपकी पूरी ज़िंदगी की मुश्किल टाल देती है',
    ],
    linesHinglish: [
      'Kisi bhookhe ko khaana ya pyaase ko paani pilaakar laut-te hue dekhna',
      'Peechhe se mili ek dua aapki poori zindagi ki mushkil taal deti hai',
    ],
    linesEnglish: [
      'Hand a warm meal or cool water quietly to someone weary in need',
      'That whispered thank-you behind your back clears storms years ahead',
    ],
  },
  {
    title: 'शब्दों का सही चुनाव',
    titleEnglish: 'Choosing Words That Heal',
    linesHindi: [
      'तलवार का घाव तो कुछ हफ़्तों की दवा से भर भी जाता है यारो',
      'पर तीखे लफ़्ज़ों का निशान सालों तक दिल के कोने में चुभता है',
    ],
    linesHinglish: [
      'Talwaar ka ghaav to kuch hafton ki dawa se bhar bhi jaata hai yaaro',
      'Par teekhe lafzon ka nishaan saalon tak dil ke kone mein chubhta hai',
    ],
    linesEnglish: [
      'A scraped wound heals cleanly after a few weeks of patient care',
      'Yet careless sharp words leave echoes aching in hearts for years',
    ],
  },
  {
    title: 'छोटी सी माफ़ी, बड़ा सुकून',
    titleEnglish: 'Small Apology, Deep Relief',
    linesHindi: [
      'गलती मान लेने से कोई छोटा या कमजोर नहीं बन जाता कभी',
      'बल्कि यह साबित होता है कि रिश्ते आपके लिए अहमियत रखते हैं',
    ],
    linesHinglish: [
      'Galti maan lene se koi chhota ya kamzor nahin ban jaata kabhi',
      'Balki yeh saabit hota hai ki rishte aapke liye ahmiyat rakhte hain',
    ],
    linesEnglish: [
      'Admitting a mistake never shrinks your dignity by one single inch',
      'It proves how deeply you treasure the bond standing before you',
    ],
  },
  {
    title: 'अस्पताल की बेंच वाला अपना',
    titleEnglish: 'Mark of Genuine Companionship',
    linesHindi: [
      'खुशियों की पार्टी में तो सारा शहर तालियाँ बजाने आ जाता है',
      'असली अपना वही है जो अस्पताल की बेंच पर साथ बैठा रहे',
    ],
    linesHinglish: [
      'Khushiyon ki party mein to saara shehar taaliyaan bajaane aa jaata hai',
      'Asli apna wahi hai jo aspataal ki bench par saath baitha rahe',
    ],
    linesEnglish: [
      'Half the town shows up smiling whenever party confetti flies high',
      'True family is whoever sits calmly beside you on cold waiting-room benches',
    ],
  },
  {
    title: 'पिता की पुरानी घड़ी',
    titleEnglish: 'Father’s Worn Wristwatch',
    linesHindi: [
      'पापा ने खुद दस साल पुरानी घड़ी कभी नहीं बदली अपनी कलाई से',
      'ताकि हमारी ज़िंदगी की रफ़्तार कभी किसी कमी से रुक न जाए',
    ],
    linesHinglish: [
      'Papa ne khud das saal puraani ghadi kabhi nahin badli apni kalaai se',
      'Taaki hamaari zindagi ki raftaar kabhi kisi kami se ruk na jaaye',
    ],
    linesEnglish: [
      'Dad wore that scuffed ten-year-old watch faithfully on his wrist',
      'Just so our clocks forward into dreams never missed a single beat',
    ],
  },
  {
    title: 'मन के उजाले की खोज',
    titleEnglish: 'Searching Light Within the Mind',
    linesHindi: [
      'बाहर दुनिया में कितना भी शोर और अंधेरा पसरा दिखे शाम को',
      'अगर भीतर उम्मीद का दीया जल रहा है तो रास्ता साफ दिखता है',
    ],
    linesHinglish: [
      'Baahar duniya mein kitna bhi shor aur andhera pasra dikhe shaam ko',
      'Agar bheetar ummeed ka diya jal raha hai to raasta saaf dikhta hai',
    ],
    linesEnglish: [
      'No matter how noisy or shadowy streets look outside at dusk',
      'Keeping one steady lamp lit inside turns every footpath clear ahead',
    ],
  },
  {
    title: 'हिसाब-किताब से परे दिल का रिश्ता',
    titleEnglish: 'Affection Free From Bargains',
    linesHindi: [
      'जहाँ हर मदद के बदले हिसाब लिखा जाए कॉपी के पन्ने पर',
      'वह कोई व्यापार भले हो सकता है, पर दिल का रिश्ता नहीं होता',
    ],
    linesHinglish: [
      'Jahaan har madad ke badle hisaab likha jaaye copy ke panne par',
      'Woh koi vyaapaar bhale ho sakta hai, par dil ka rishta nahin hota',
    ],
    linesEnglish: [
      'Wherever every favor gets tallied carefully across mental ledgers',
      'That might pass as tidy business, never true warmth of the heart',
    ],
  },
  {
    title: 'अधूरी इच्छाओं में संतोष',
    titleEnglish: 'Grace Inside Unfulfilled Wants',
    linesHindi: [
      'सब कुछ मिल जाए इसी में खुशी नहीं बसी होती हमेशा जीवन की',
      'जो मिला है उसे गले लगाकर मुस्कुराना भी बहुत बड़ा गुण है',
    ],
    linesHinglish: [
      'Sab kuch mil jaaye isi mein khushi nahin basi hoti hamesha jeevan ki',
      'Jo mila hai use gale lagaakar muskuraana bhi bahut bada gun hai',
    ],
    linesEnglish: [
      'Joy does not hide only inside grabbing every prize on our wish list',
      'Embracing what already rests in our palms smiling is deep wisdom',
    ],
  },
  {
    title: 'खामोश शहर की सुबह',
    titleEnglish: 'Quiet City Morning Awakening',
    linesHindi: [
      'सुबह पाँच बजे की शांत हवा इंसान से साफ़-साफ़ बात करती है',
      'उस वक़्त हर उलझन अपने आप बहुत छोटी दिखने लगती है',
    ],
    linesHinglish: [
      'Subah paanch baje ki shaant hawa insaan se saaf-saaf baat karti hai',
      'Us waqt har uljhan apne aap bahut chhoti dikhne lagti hai',
    ],
    linesEnglish: [
      'Still five a.m. breezes speak with astonishing clarity to tired minds',
      'At dawn, yesterday’s tangled knots naturally shrink back down to size',
    ],
  },
  {
    title: 'आँखों की भाषा अनमोल',
    titleEnglish: 'Priceless Language of Gentle Eyes',
    linesHindi: [
      'ज़ुबान से तो दुनिया भर की मीठी बातें कोई भी बना लेता है आजकल',
      'असली सच्चाई हमेशा इंसान की शांत आँखों से पढ़ी जाती है',
    ],
    linesHinglish: [
      'Jubaan se to duniya bhar ki meethi baatein koi bhi bana leta hai aajkal',
      'Asli sachhaai hamesha insaan ki shaant aankhon se padhi jaati hai',
    ],
    linesEnglish: [
      'Anybody can polish charming speeches on their tongue nowadays',
      'Honesty always reads clearly inside calm, unguarded eyes instead',
    ],
  },
  {
    title: 'वक़्त के मरहम पर यक़ीन',
    titleEnglish: 'Trusting Time’s Gentle Remedy',
    linesHindi: [
      'जब हर दरवाज़ा बंद लगे और कोई रास्ता न सूझे सामने से',
      'तब बस थोड़ा ठहर जाना, वक़्त हर घाव पर पट्टी बाँध ही देता है',
    ],
    linesHinglish: [
      'Jab har darwaaza band lage aur koi raasta na soojhe saamne se',
      'Tab bas thoda thehar jaana, waqt har ghaav par patti baandh hi deta hai',
    ],
    linesEnglish: [
      'When every doorway seems latched tight and fog covers the bend ahead',
      'Pause patiently—time still finds gentle ways to bandage bruised wings',
    ],
  },
  {
    title: 'बचपन की सादगी लौटाओ',
    titleEnglish: 'Return to Childhood Simplicity',
    linesHindi: [
      'नफ़रत और हिसाब ने इंसान के कंधे बहुत भारी कर दिए हैं आज',
      'काश फिर से हम बारिश में भीगने वाली सादगी वापस पा सकें',
    ],
    linesHinglish: [
      'Nafrat aur hisaab ne insaan ke kandhe bahut bhaari kar diye hain aaj',
      'Kaash phir se hum baarish mein bheegne waali saadgi waapas pa sakein',
    ],
    linesEnglish: [
      'Grudges and endless scorekeeping weigh heavily on adult shoulders',
      'If only we could reclaim the pure wonder of dancing barefoot in rain',
    ],
  },
  {
    title: 'साथ चलने की खामोश कसम',
    titleEnglish: 'Silent Vow to Walk Together',
    linesHindi: [
      'न कोई अंगूठी की ज़रूरत है, न बड़े मंच पर कोई ऐलान करना है',
      'हर कठिन दिन में किसी का हाथ न छोड़ना ही सबसे सच्ची कसम है',
    ],
    linesHinglish: [
      'Na koi angoothi ki zaroorat hai, na bade manch par koi ailaan karna hai',
      'Har kathin din mein kisi ka haath na chhodna hi sabse sachhi kasam hai',
    ],
    linesEnglish: [
      'No shiny rings or loud speeches on crowded stages are required',
      'Never letting go of someone’s hand through rough seasons is the truest vow',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'अनकही कहानियों का बोझ',
    titleEnglish: 'Weight of Unspoken Chapters',
    linesHindi: [
      'हर इंसान के भीतर एक किताब बंद रहती है जिसके पन्ने कोरे दिखते हैं',
      'पर जब कोई अपना हाथ थामे तो सारी कहानी आँखों से बह आती है',
    ],
    linesHinglish: [
      'Har insaan ke bheetar ek kitaab band rehti hai jiske panne kore dikhte hain',
      'Par jab koi apna haath thaame to saari kahaani aankhon se beh aati hai',
    ],
    linesEnglish: [
      'Inside each person sits a quiet book appearing blank on the cover',
      'Yet one trusted touch opens every hidden page straight through their eyes',
    ],
  },
  {
    title: 'नए सवेरे की नम्रता',
    titleEnglish: 'Humility of Every New Dawn',
    linesHindi: [
      'अंधेरी रात कितनी भी लंबी और डरावनी क्यों न लगे रास्ते में',
      'सूरज उगते ही अपनी सारी ताक़त चुपचाप रोशनी में बदल जाती है',
    ],
    linesHinglish: [
      'Andheri raat kitni bhi lambi aur daraawni kyun na lage raaste mein',
      'Sooraj ugte hi apni saari taaqat chupchaap roshni mein badal jaati hai',
    ],
    linesEnglish: [
      'However endless and daunting a long dark night feels mid-journey',
      'Sunrise arrives quietly and turns every shadow back into clear light',
    ],
  },
  {
    title: 'कद्र खोने से पहले समझ',
    titleEnglish: 'Appreciating Before Moments Pass',
    linesHindi: [
      'आज जो लोग हमारे पास बैठे हैं, वही वक़्त का सबसे बड़ा वरदान हैं',
      'इन्हें फ़ोन की स्क्रीन के लिए कल पर टालना समझदारी नहीं होती',
    ],
    linesHinglish: [
      'Aaj jo log hamaare paas baithe hain, wahi waqt ka sabse bada vardaan hain',
      'Inhein phone ki screen ke liye kal par taalna samajhdaari nahin hoti',
    ],
    linesEnglish: [
      'The loved ones sitting right beside us today are life’s greatest gift',
      'Trading their presence for glowing screens is a bargain we always regret',
    ],
  },
  {
    title: 'विनम्रता से महकता आँगन',
    titleEnglish: 'Grace Found in Simple Souls',
    linesHindi: [
      'दिखावे की चमक अक्सर बस दो दिनों का ही असर रखती है आँखों पर',
      'इंसान की विनम्रता और सच्चाई हमेशा दिल में घर कर जाती है',
    ],
    linesHinglish: [
      'Dikhaawe ki chamak aksar bas do dinon ka hi asar rakhti hai aankhon par',
      'Insaan ki vinamrata aur sachhaai hamesha dil mein ghar kar jaati hai',
    ],
    linesEnglish: [
      'Flashy showmanship dazzles eyes only for a fleeting day or two',
      'Quiet humility and honesty build a lasting home inside every heart',
    ],
  },
  {
    title: 'माँ की दुआ का छत्र',
    titleEnglish: 'Umbrella of a Mother’s Prayer',
    linesHindi: [
      'दुनिया की सबसे बड़ी मुसीबत भी दरवाज़े के बाहर से लौट जाती है',
      'जब घर से निकलते वक़्त माँ सिर पर हाथ रखकर विदा करती है',
    ],
    linesHinglish: [
      'Duniya ki sabse badi musibat bhi darwaze ke baahar se laut jaati hai',
      'Jab ghar se nikalte waqt maa sir par haath rakhkar vida karti hai',
    ],
    linesEnglish: [
      'Even towering troubles turn around outside the gate untouched',
      'When your mother rests her warm palm over your head as you leave home',
    ],
  },
  {
    title: 'सुकून भरी चुप्पी का मोल',
    titleEnglish: 'Value of Peaceful Silence',
    linesHindi: [
      'हर बहस जीतकर भी अगर घर का माहौल भारी हो जाए शाम को',
      'तो समझो थोड़ी सी चुप्पी साधकर भी आप असली विजेता बन सकते थे',
    ],
    linesHinglish: [
      'Har behas jeetkar bhi agar ghar ka mahaul bhaari ho jaaye shaam ko',
      'To samjho thodi si chuppi saadhkar bhi aap asli vijeta ban sakte the',
    ],
    linesEnglish: [
      'If winning an argument leaves the whole living room heavy with tension',
      'Staying gently silent would have made you the far wiser victor',
    ],
  },
  {
    title: 'टूटे हुए सपनों से सीख',
    titleEnglish: 'Wisdom Carved From Broken Plans',
    linesHindi: [
      'जो चीज़ें हमारे हाथों से फिसलती हैं कभी-कभी हमारी मर्ज़ी के बिना',
      'वही आगे चलकर हमें उससे बेहतर राहों के लायक़ बना जाती हैं',
    ],
    linesHinglish: [
      'Jo cheezein hamaare haathon se phisalti hain kabhi-kabhi hamaari marzi ke bina',
      'Wahi aage chalkar humein usse behtar raahon ke laayak bana jaati hain',
    ],
    linesEnglish: [
      'Plans that slip unexpectedly from our grip despite honest trying',
      'Quietly shape our hands ready for far better roads waiting ahead',
    ],
  },
  {
    title: 'मदद करने वाले की खुशनसीबी',
    titleEnglish: 'Privilege of Being Helpful',
    linesHindi: [
      'किसी के काम आ जाना कोई एहसान नहीं, इंसान का सौभाग्य होता है',
      'क्योंकि ऊपरवाला मदद के लिए भी चुन-चुनकर नेक हाथ बनाता है',
    ],
    linesHinglish: [
      'Kisi ke kaam aa jaana koi ehsaan nahin, insaan ka saubhaagya hota hai',
      'Kyunki ooparwaala madad ke liye bhi chun-chunkar nek haath banaata hai',
    ],
    linesEnglish: [
      'Stepping up to help someone is never a favor—it is pure privilege',
      'Because grace carefully chooses kind hands to deliver quiet relief',
    ],
  },
  {
    title: 'गुज़रे हुए कल से दोस्ती',
    titleEnglish: 'Making Peace With Yesterday',
    linesHindi: [
      'अपनी पुरानी ग़लतियों के लिए ख़ुद को ताउम्र कोसना बंद करो यार',
      'उस वक़्त तुमने उतना ही किया जितना तुम्हें तब समझ आता था',
    ],
    linesHinglish: [
      'Apni puraani galtiyon ke liye khud ko taa-umr kosna band karo yaar',
      'Us waqt tumne utna hi kiya jitna tumhein tab samajh aata tha',
    ],
    linesEnglish: [
      'Stop putting yourself on trial forever over mistakes made years ago',
      'Back then you simply acted with whatever wisdom you held at the time',
    ],
  },
  {
    title: 'दिल की गहराई का आईना',
    titleEnglish: 'Mirror Reflecting True Depth',
    linesHindi: [
      'तालाब जब तक शांत रहता है तब तक उसकी गहराई साफ़ दिखती है',
      'इंसान का मन भी शांत होने पर ही सही फ़ैसले ले पाता है',
    ],
    linesHinglish: [
      'Taalaab jab tak shaant rehta hai tab tak uski gehraai saaf dikhti hai',
      'Insaan ka mann bhi shaant hone par hi sahi faisle le paata hai',
    ],
    linesEnglish: [
      'Only when a pond rests perfectly still can you see clear to the bottom',
      'A calm heart likewise sees every right decision without distortion',
    ],
  },
  {
    title: 'सच्चे प्यार का साधारण रूप',
    titleEnglish: 'Ordinary Face of Real Love',
    linesHindi: [
      'न चाँद-तारे तोड़कर लाने का वादा, न कोई फ़िल्मी डायलॉग बाज़ी',
      'धूप में छतरी खोल देना और तबीयत पूछ लेना ही असली मोहब्बत है',
    ],
    linesHinglish: [
      'Na chaand-taare todkar laane ka waada, na koi filmy dialogue baazi',
      'Dhoop mein chhatri khol dena aur tabiyat poochh lena hi asli mohabbat hai',
    ],
    linesEnglish: [
      'No wild promises of plucking stars or theatrical movie speeches',
      'Opening shade under noon sun and checking your fever is genuine love',
    ],
  },
  {
    title: 'धूप और छाँव का संगम',
    titleEnglish: 'Harmony of Sunshine and Shade',
    linesHindi: [
      'ज़िंदगी सिर्फ़ खुशियों से बने तो इंसान घमंडी बन सकता है शायद',
      'थोड़े ग़म और आँसू ही हमें दूसरों का दर्द समझना सिखाते हैं',
    ],
    linesHinglish: [
      'Zindagi sirf khushiyon se bane to insaan ghamandi ban sakta hai shaayad',
      'Thode gham aur aansoo hi humein doosron ka dard samajhna sikhaate hain',
    ],
    linesEnglish: [
      'An unbroken string of easy wins could subtly harden any spirit',
      'Passing storms and quiet tears teach us how to understand others gently',
    ],
  },
  {
    title: 'भीतर की आवाज़ पर भरोसा',
    titleEnglish: 'Trusting the Quiet Voice Within',
    linesHindi: [
      'दुनिया तो आपके हर कदम पर दस अलग-अलग सलाह देगी हमेशा',
      'सही रास्ता वही है जहाँ चलते हुए आपका अंतर्मन शांत रहे',
    ],
    linesHinglish: [
      'Duniya to aapke har kadam par das alag-alag salaah degi hamesha',
      'Sahi raasta wahi hai jahaan chalte hue aapka antarman shaant rahe',
    ],
    linesEnglish: [
      'Crowds will hand you ten loud opinions at every single crossroads',
      'The right road is simply whichever keeps your conscience quiet and clear',
    ],
  },
  {
    title: 'बुज़ुर्गों की छांव की अहमियत',
    titleEnglish: 'Shelter Beneath Elders’ Blessings',
    linesHindi: [
      'जिस घर में दादा-दादी के क़िस्से और आशीष गूँजते रहते हैं',
      'उस आँगन में संस्कारों की जड़ें कभी सूखने नहीं पातीं',
    ],
    linesHinglish: [
      'Jis ghar mein daada-daadi ke kisse aur aasheesh goonjte rehte hain',
      'Us aangan mein sanskaaron ki jadein kabhi sookhne nahin paatin',
    ],
    linesEnglish: [
      'In homes echoing with grandparents’ gentle stories and warm blessings',
      'The deep roots of kindness and character never dry out',
    ],
  },
  {
    title: 'आँसुओं को मुस्कुराने की वजह',
    titleEnglish: 'Reason Behind Smiling Through Mist',
    linesHindi: [
      'इंसान की सबसे बड़ी जीत तब होती है जब पुरानी तकलीफ़ें याद आएं',
      'और आँखों में आँसू नहीं, बल्कि होंठों पर एक हल्की मुस्कान आए',
    ],
    linesHinglish: [
      'Insaan ki sabse badi jeet tab hoti hai jab puraani takleefein yaad aayein',
      'Aur aankhon mein aansoo nahin, balki honthon par ek halki muskaan aaye',
    ],
    linesEnglish: [
      'True healing arrives the morning old memories surface unexpectedly',
      'And instead of stinging tears, only a peaceful little smile appears',
    ],
  },
  {
    title: 'छोटी ख़ुशियों का खज़ाना',
    titleEnglish: 'Treasure Chest of Small Joys',
    linesHindi: [
      'सुबह की पहली बारिश, मीठी चाय और किसी पुराने यार का अचानक कॉल',
      'इन्हीं छोटे-छोटे मोतियों से ज़िंदगी का सबसे सुंदर हार बनता है',
    ],
    linesHinglish: [
      'Subah ki pehli baarish, meethi chai aur kisi puraane yaar ka achaanak call',
      'Inhin chhote-chhote motiyon se zindagi ka sabse sundar haar banta hai',
    ],
    linesEnglish: [
      'First monsoon drizzle, warm tea, and a surprise call from an old pal',
      'String together smoothly into life’s finest pearl necklace',
    ],
  },
  {
    title: 'सच्चाई की मधुर ताक़त',
    titleEnglish: 'Quiet Power of Plain Truth',
    linesHindi: [
      'झूठ बोलने वालों को सौ बातें याद रखनी पड़ती हैं दिन-रात',
      'सच बोलने वाला इंसान बिल्कुल हल्का और बेफ़िक्र घूमता है',
    ],
    linesHinglish: [
      'Jhooth bolne waalon ko sau baatein yaad rakhni padti hain din-raat',
      'Sach bolne waala insaan bilkul halka aur befikr ghoomta hai',
    ],
    linesEnglish: [
      'Spinning clever stories forces you to guard a hundred flimsy details',
      'Speaking plain truth lets you walk through every room carefree and light',
    ],
  },
  {
    title: 'मेरी जान की अहमियत',
    titleEnglish: 'Recognizing Your Own Worth',
    linesHindi: [
      'खुद की थाली खाली रखकर हर किसी को खुश करने की कोशिश में',
      'कहीं अपने ही अस्तित्व की अहमियत मत भुला देना मेरे दोस्त',
    ],
    linesHinglish: [
      'Khud ki thaali khaali rakhkar har kisi ko khush karne ki koshish mein',
      'Kahin apne hi astitva ki ahmiyat mat bhula dena mere dost',
    ],
    linesEnglish: [
      'Pouring endlessly from an empty cup just to keep everyone smiling',
      'Should never make you forget your own heart deserves tenderness too',
    ],
  },
  {
    title: 'दोस्त के कंधे का सहारा',
    titleEnglish: 'Comfort of a Friend’s Shoulder',
    linesHindi: [
      'जिंदगी की राहों में जब हर रास्ता धुँधला दिखने लगे कभी-कभी',
      'तो एक अच्छे दोस्त के साथ दस मिनट पैदल चल लेना भी काफी होता है',
    ],
    linesHinglish: [
      'Zindagi ki raahon mein jab har raasta dhundhla dikhne lage kabhi-kabhi',
      'To ek achhe dost ke saath das minute paidal chal lena bhi kaafi hota hai',
    ],
    linesEnglish: [
      'When fog blurs every sign along life’s unpredictable road',
      'A ten-minute quiet walk beside one trusted friend clears the air',
    ],
  },
  {
    title: 'नए पन्ने की उजली स्याही',
    titleEnglish: 'Bright Ink on Clean Pages',
    linesHindi: [
      'कल चाहे कितना भी भारी या मुश्किल गुज़रा हो तुम्हारा सफ़र',
      'हर नई सुबह हाथ में फिर से एक बिल्कुल कोरा पन्ना थमाती है',
    ],
    linesHinglish: [
      'Kal chaahe kitna bhi bhaari ya mushkil guzra ho tumhaara safar',
      'Har nayi subah haath mein phir se ek bilkul kora panna thamaati hai',
    ],
    linesEnglish: [
      'No matter how heavy or rocky yesterday’s steep climb turned out',
      'Every morning places a brand-new blank page gently into your palm',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'दिल से जुड़ा सच्चा नाता',
    titleEnglish: 'Bond Rooted Inside Heartbeats',
    linesHindi: [
      'खून के रिश्तों से बढ़कर भी कुछ बंधन बन जाते हैं दुनिया में',
      'जहाँ बिना किसी स्वार्थ के दो इंसान एक-दूसरे की ढाल बनते हैं',
    ],
    linesHinglish: [
      'Khoon ke rishton se badhkar bhi kuch bandhan ban jaate hain duniya mein',
      'Jahaan bina kisi swaarth ke do insaan ek-doosre ki dhaal bante hain',
    ],
    linesEnglish: [
      'Beyond bloodlines, rare bonds form quietly along life’s highway',
      'Where two souls stand steadfastly as each other’s selfless shield',
    ],
  },
  {
    title: 'सहनशीलता का मीठा फल',
    titleEnglish: 'Sweet Fruit of Quiet Patience',
    linesHindi: [
      'धीरज रखने का मतलब कमज़ोर होकर चुपचाप बैठ जाना नहीं होता',
      'बल्कि सही मौसम आने तक अपनी जड़ों को मज़बूत करना होता है',
    ],
    linesHinglish: [
      'Dheeraj rakhne ka matlab kamzor hokar chupchaap baith jaana nahin hota',
      'Balki sahi mausam aane tak apni jadon ko mazboot karna hota hai',
    ],
    linesEnglish: [
      'Practicing patience never means shrinking back in quiet defeat',
      'It means anchoring deep roots steadily until the right season arrives',
    ],
  },
  {
    title: 'खूबसूरत शब्दों की दवा',
    titleEnglish: 'Medicine Woven From Gentle Words',
    linesHindi: [
      'हज़ार दर्द भरी गोलियाँ भी कई बार उस बेचैनी को नहीं रोक पातीं',
      'जिसे माँ के हाथ फेरने और दो प्यार भरे शब्द शांत कर देते हैं',
    ],
    linesHinglish: [
      'Hazaar dard bhari goliyaan bhi kai baar us bechaini ko nahin rok paatin',
      'Jise maa ke haath pherne aur do pyar bhare shabd shaant kar dete hain',
    ],
    linesEnglish: [
      'A shelf full of medicine rarely calms the deepest quiet ache',
      'That melts swiftly beneath a loving touch and two tender words',
    ],
  },
  {
    title: 'सादगी में छुपा बड़प्पन',
    titleEnglish: 'Greatness Wrapped in Modesty',
    linesHindi: [
      'सबसे ऊँचे पेड़ अक्सर फलों से लदकर नीचे झुक जाया करते हैं',
      'असली ज्ञान और सफलता हमेशा इंसान को और विनम्र बनाती है',
    ],
    linesHinglish: [
      'Sabse oonche ped aksar phalon se ladkar neeche jhuk jaaya karte hain',
      'Asli gyaan aur safalta hamesha insaan ko aur vinamra banaati hai',
    ],
    linesEnglish: [
      'The tallest fruit-bearing branches always bow gracefully toward earth',
      'Genuine wisdom and true success invariably soften a person’s pride',
    ],
  },
  {
    title: 'अधूरे ख्वाबों की खूबसूरती',
    titleEnglish: 'Beauty Inside Half-Finished Dreams',
    linesHindi: [
      'हर चीज़ समय पर पूरी हो जाए यह ज़रूरी तो नहीं इस जीवन में',
      'कुछ अधूरे ख्वाब ही हमें अगले दिन सुबह जागने की वजह देते हैं',
    ],
    linesHinglish: [
      'Har cheez samay par poori ho jaaye yeh zaroori to nahin is jeevan mein',
      'Kuch adhure khwaab hi humein agle din subah jaagne ki wajah dete hain',
    ],
    linesEnglish: [
      'Not every cherished wish must finish right on our neat schedule',
      'Sometimes unfinished dreams are the very reason dawn wakes us smiling',
    ],
  },
  {
    title: 'चेहरे पढ़ने का हुनर',
    titleEnglish: 'Skill of Reading Silent Faces',
    linesHindi: [
      'भीड़ में कोई बार-बार मुस्कान ठीक कर रहा हो अपनी अगर',
      'तो समझ लेना वह अपने अंदर चल रहे तूफ़ान को छुपा रहा है',
    ],
    linesHinglish: [
      'Bheed mein koi baar-baar muskaan theek kar raha ho apni agar',
      'To samajh lena woh apne andar chal rahe toofaan ko chhupa raha hai',
    ],
    linesEnglish: [
      'Notice someone adjusting their smile a bit too carefully in a crowd',
      'Often they are holding back an entire storm quietly behind their ribs',
    ],
  },
  {
    title: 'दिल के कोने की सफ़ाई',
    titleEnglish: 'Clearing Corners Inside the Heart',
    linesHindi: [
      'पुराने गिले-शिकवे मन में रखकर घूमने से सिवाय थकान के कुछ नहीं मिलता',
      'जिसे माफ़ कर सको उसे माफ़ करो, जिसे भूलना है उसे जाने दो',
    ],
    linesHinglish: [
      'Puraane gile-shikwe mann mein rakhkar ghoomne se sivaay thakaan ke kuch nahin milta',
      'Jise maaf kar sako use maaf karo, jise bhoolna hai use jaane do',
    ],
    linesEnglish: [
      'Hauling dusty old grudges around brings nothing beyond sore shoulders',
      'Forgive what heals smoothly, and gently release whatever weighs you down',
    ],
  },
  {
    title: 'मेहनत से लिखा नसीब',
    titleEnglish: 'Destiny Written Through Sweat',
    linesHindi: [
      'हाथों की लकीरों को कोसने से ज़्यादा असर तब दिखता है यार',
      'जब इंसान उन्हीं हाथों से दिन-रात मेहनत करना शुरू कर दे',
    ],
    linesHinglish: [
      'Haathon ki lakeeron ko kosne se zyada asar tab dikhta hai yaar',
      'Jab insaan unhin haathon se din-raat mehnat karna shuru kar de',
    ],
    linesEnglish: [
      'Far more changes than staring sadly at the creases on your palms',
      'The day you put those exact hands steadily to work toward tomorrow',
    ],
  },
  {
    title: 'प्यार भरा एक स्पर्श',
    titleEnglish: 'Healing Inside One Warm Touch',
    linesHindi: [
      'रोते हुए बच्चे के सिर पर बस एक हाथ फिर जाए प्यार से अगर',
      'तो सारी दुनिया की तकलीफ़ एक पल में छोटी लगने लगती है',
    ],
    linesHinglish: [
      'Rote hue bachche ke sir par bas ek haath phir jaaye pyar se agar',
      'To saari duniya ki takleef ek pal mein chhoti lagne lagti hai',
    ],
    linesEnglish: [
      'One gentle palm stroking a crying child’s head with steady love',
      'Shrinks every monster in the room back down to harmless size',
    ],
  },
  {
    title: 'सफर का असली आनंद',
    titleEnglish: 'Real Joy Along the Road',
    linesHindi: [
      'केवल मंज़िल तक पहुँच जाने को ही कामयाबी मत समझ बैठना दोस्त',
      'रास्ते में बने सुंदर रिश्ते और यादें ही असली सफ़र की कमाई हैं',
    ],
    linesHinglish: [
      'Kewal manzil tak pahunch jaane ko hi kaamyaabi mat samajh baithna dost',
      'Raaste mein bane sundar rishte aur yaadein hi asli safar ki kamaai hain',
    ],
    linesEnglish: [
      'Never mistake reaching a distant finish line for the whole reward',
      'The friendships and memories gathered along the road are true wealth',
    ],
  },
  {
    title: 'छोटी मुस्कान, बड़ी राहत',
    titleEnglish: 'Small Smile, Deep Comfort',
    linesHindi: [
      'लिफ्ट में या सड़क पर किसी अनजान को देखकर मुस्कुरा देना कभी',
      'क्या पता उस दिन किसी का मन उसी छोटी मुस्कान से संभल जाए',
    ],
    linesHinglish: [
      'Lift mein ya sadak par kisi anjaan ko dekhkar muskura dena kabhi',
      'Kya pata us din kisi ka mann usi chhoti muskaan se sambhal jaaye',
    ],
    linesEnglish: [
      'Share an effortless warm smile with a stranger on the sidewalk today',
      'You never know whose lonely day gets lifted by that tiny spark',
    ],
  },
  {
    title: 'अहसास जो शब्दों से बड़े',
    titleEnglish: 'Feelings Taller Than Words',
    linesHindi: [
      'कुछ पल इतने गहरे और पवित्र होते हैं जीवन के सफ़र में यारो',
      'कि उन्हें कागज़ पर उतारने की हर कोशिश अधूरी सी लगती है',
    ],
    linesHinglish: [
      'Kuch pal itne gehre aur pavitra hote hain jeevan ke safar mein yaaro',
      'Ki unhein kaagaz par utaarne ki har koshish adhoori si lagti hai',
    ],
    linesEnglish: [
      'Some moments along this journey feel so sacred and deeply quiet',
      'That every attempt to pin them onto paper feels gently incomplete',
    ],
  },
  {
    title: 'विश्वास की मज़बूत नींव',
    titleEnglish: 'Strong Foundation of Trust',
    linesHindi: [
      'काँच के बर्तन और रिश्तों में विश्वास एक जैसे ही होते हैं दोनों',
      'एक बार दरार पड़ जाए तो फिर जुड़ने में उम्र गुज़र जाती है',
    ],
    linesHinglish: [
      'Kaanch ke bartan aur rishton mein vishwas ek jaise hi hote hain dono',
      'Ek baar daraar pad jaaye to phir judne mein umr guzar jaati hai',
    ],
    linesEnglish: [
      'Crystal glass and human trust share the exact same delicate nature',
      'Once cracked carelessly, mending them cleanly takes half a lifetime',
    ],
  },
  {
    title: 'बदलते मौसम में अपनों का साथ',
    titleEnglish: 'Steady Company Through Shifting Winds',
    linesHindi: [
      'सफलता आने पर तो दुनिया सेल्फ़ी खिंचवाने आगे आ खड़ी होती है',
      'जो हार में भी कंधे पर हाथ रखे, उसी को जीवन भर सँभालना',
    ],
    linesHinglish: [
      'Safalta aane par to duniya selfie khinchwaane aage aa khadi hoti hai',
      'Jo haar mein bhi kandhe par haath rakhe, usi ko jeevan bhar sambhaalna',
    ],
    linesEnglish: [
      'When trophies shine bright, crowds line up eager for smiling selfies',
      'Cherish lifelong whoever kept a steady hand on your shoulder in defeat',
    ],
  },
  {
    title: 'खुशियों की सरल परिभाषा',
    titleEnglish: 'Simple Meaning of Contentment',
    linesHindi: [
      'शाम को घर लौटते हुए अगर कोई दरवाज़े पर इंतज़ार कर रहा हो',
      'तो समझ लो दुनिया की सबसे बड़ी दौलत तुम्हारे घर में रहती है',
    ],
    linesHinglish: [
      'Shaam ko ghar laut-te hue agar koi darwaze par intezaar kar raha ho',
      'To samjho duniya ki sabse badi daulat tumhaare ghar mein rehti hai',
    ],
    linesEnglish: [
      'Walking up to your door at dusk knowing someone waits warmly inside',
      'Means the greatest fortune on earth already lives under your roof',
    ],
  },
  {
    title: 'प्यार से सींचा जीवन',
    titleEnglish: 'Life Watered With Tenderness',
    linesHindi: [
      'पौधों को सिर्फ़ पानी ही नहीं, रोज़ थोड़ी सी धूप और देखभाल चाहिए',
      'इंसानों को भी आगे बढ़ने के लिए बस थोड़ा प्यार और सम्मान चाहिए',
    ],
    linesHinglish: [
      'Paudhon ko sirf paani hi nahin, roz thodi si dhoop aur dekhbhaal chahiye',
      'Insaanon ko bhi aage badhne ke liye bas thoda pyar aur sammaan chahiye',
    ],
    linesEnglish: [
      'Houseplants need more than water—they thrive on gentle sunlight and care',
      'People too flourish wonderfully with a little steady respect and warmth',
    ],
  },
  {
    title: 'भीगे बादल और ठंडी सांस',
    titleEnglish: 'Deep Breath After Rain Clouds',
    linesHindi: [
      'कभी-कभी बहुत ज़्यादा सोचने से बेहतर होता है थोड़ी देर रुक जाना',
      'गहरी साँस लो, ऊपर आसमान देखो और सब समय पर छोड़ दो',
    ],
    linesHinglish: [
      'Kabhi-kabhi bahut zyada sochne se behtar hota hai thodi der ruk jaana',
      'Gehri saans lo, oopar aasmaan dekho aur sab samay par chhod do',
    ],
    linesEnglish: [
      'Sometimes overthinking steals peace that a two-minute pause restores',
      'Breathe deep, look up at wide open skies, and let time unfold calmly',
    ],
  },
  {
    title: 'सच्चे दिल की चमक',
    titleEnglish: 'Quiet Glow of Sincere Souls',
    linesHindi: [
      'महँगे कपड़ों और परफ़्यूम से कुछ देर की पहचान बन सकती है शायद',
      'पर आपकी नेकी की महक बरसों बाद भी लोगों को याद रहती है',
    ],
    linesHinglish: [
      'Mehnge kapdon aur perfume se kuch der ki pehchaan ban sakti hai shaayad',
      'Par aapki neki ki mehak barson baad bhi logon ko yaad rehti hai',
    ],
    linesEnglish: [
      'Tailored coats and costly cologne turn heads for an evening or two',
      'Yet the fragrance of genuine kindness stays remembered decades later',
    ],
  },
  {
    title: 'आशा की छोटी किरण',
    titleEnglish: 'One Slender Beam of Hope',
    linesHindi: [
      'कितने भी घने बादल घेर लें पूरे शहर के आकाश को अचानक',
      'सूरज की एक पतली सी किरण पूरे मौसम का मिज़ाज बदल देती है',
    ],
    linesHinglish: [
      'Kitne bhi ghane baadal gher lein poore shehar ke aakaash ko achaanak',
      'Sooraj ki ek patli si kiran poore mausam ka mizaaj badal deti hai',
    ],
    linesEnglish: [
      'No matter how thickly gray storm clouds crowd across the city sky',
      'One slender golden sunbeam shifts the mood of the whole afternoon',
    ],
  },
  {
    title: 'बचपन की नादान हँसी',
    titleEnglish: 'Carefree Laughter of Childhood',
    linesHindi: [
      'उम्र के साथ समझदारी आना अच्छी बात है इस दुनिया में चलने को',
      'पर अपने अंदर के उस छोटे बच्चे को कभी मरने मत देना दोस्त',
    ],
    linesHinglish: [
      'Umr ke saath samajhdaari aana achhi baat hai is duniya mein chalne ko',
      'Par apne andar ke us chhote bachche ko kabhi marne mat dena dost',
    ],
    linesEnglish: [
      'Growing wiser with passing seasons helps us steer through stormy roads',
      'Yet never let that curious, playful kid inside your chest go quiet',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'अपनत्व की अनकही परिभाषा',
    titleEnglish: 'Unspoken Meaning of Belonging',
    linesHindi: [
      'घर ईंट और सीमेंट की चार मज़बूत दीवारों से नहीं बनता कभी',
      'जहाँ एक-दूसरे के आँसू पोंछे जाएँ, असली घर वहीं बसता है',
    ],
    linesHinglish: [
      'Ghar eent aur cement ki chaar mazboot deewaaron se nahin banta kabhi',
      'Jahaan ek-doosre ke aansoo ponchhe jaayein, asli ghar wahin basta hai',
    ],
    linesEnglish: [
      'A home is never forged strictly out of brick walls and painted cement',
      'Real home lives wherever gentle hands reach out to dry each other’s tears',
    ],
  },
  {
    title: 'वक़्त पर कही सही बात',
    titleEnglish: 'Kind Words Spoken in Season',
    linesHindi: [
      'जब किसी के पाँव थक रहे हों लंबी चढ़ाई चढ़ते-चढ़ते पहाड़ पर',
      'तब बस इतना कह देना कि हम साथ हैं, नई जान फूँक देता है',
    ],
    linesHinglish: [
      'Jab kisi ke paanv thak rahe hon lambi chadhaai chadh-te chadh-te pahaad par',
      'Tab bas itna keh dena ki hum saath hain, nayi jaan phoonk deta hai',
    ],
    linesEnglish: [
      'When someone’s legs burn halfway up a steep, unforgiving mountain trail',
      'Hearing simply we are right beside you breathes fresh strength straight back',
    ],
  },
  {
    title: 'माँ-पापा की अधूरी ख़्वाहिशें',
    titleEnglish: 'Quiet Dreams Parents Set Aside',
    linesHindi: [
      'अपनी कितनी ही इच्छाएँ चुपचाप टाल दीं उन्होंने हमारे बचपन में',
      'अब जब कमाने लगे हो तो उनकी आँखों की चमक लौटा देना यार',
    ],
    linesHinglish: [
      'Apni kitni hi ichhaayein chupchaap taal deen unhonne hamaare bachpan mein',
      'Ab jab kamaane lage ho to unki aankhon ki chamak lauta dena yaar',
    ],
    linesEnglish: [
      'How many personal dreams did our parents quietly postpone while raising us',
      'Now that you earn your own way, go light up their eyes again',
    ],
  },
  {
    title: 'बिना अपेक्षा का प्यार',
    titleEnglish: 'Love Without Silent Expectations',
    linesHindi: [
      'जब हम लोगों से बदले में कुछ पाने की उम्मीद थोड़ी कम कर देते हैं',
      'तब दिल के आधे दर्द अपने आप शांत होकर विदा हो जाते हैं',
    ],
    linesHinglish: [
      'Jab hum logon se badle mein kuch paane ki ummeed thodi kam kar dete hain',
      'Tab dil ke aadhe dard apne aap shaant hokar vida ho jaate hain',
    ],
    linesEnglish: [
      'The day we loosen tight demands about what others owe us in return',
      'Half the quiet disappointments in our hearts pack up and fade away',
    ],
  },
  {
    title: 'नज़रिए का जादू',
    titleEnglish: 'Quiet Magic of Perspective',
    linesHindi: [
      'काँच के उसी आधे गिलास को देख कर कोई शिकायत करता रहता है',
      'तो कोई शुक्र मनाकर अपनी प्यास बुझा लेता है मुस्कुराते हुए',
    ],
    linesHinglish: [
      'Kaanch ke usi aadhe gilaas ko dekh kar koi shikaayat karta rehta hai',
      'To koi shukr manaakar apni pyaas bujha leta hai muskuraate hue',
    ],
    linesEnglish: [
      'Staring at the exact same half-full glass, one voice grumbles all day',
      'While another says thank you smiling and quenches its thirst peacefully',
    ],
  },
  {
    title: 'सच्चे सम्मान की राह',
    titleEnglish: 'Road Leading to Lasting Honor',
    linesHindi: [
      'डर पैदा करके आप कुछ दिन लोगों को चुप तो करा सकते हैं शायद',
      'पर दिल से सम्मान हमेशा अच्छाई और ईमानदारी को ही मिलता है',
    ],
    linesHinglish: [
      'Dar paida karke aap kuch din logon ko chup to kara sakte hain shaayad',
      'Par dil se sammaan hamesha achhaai aur imaandari ko hi milta hai',
    ],
    linesEnglish: [
      'Fear may silence a room briefly while eyes glance toward the floor',
      'Yet lasting, heartfelt honor bows exclusively to goodness and integrity',
    ],
  },
  {
    title: 'ठोकरों का अनमोल सबक़',
    titleEnglish: 'Priceless Lesson in Small Stumbles',
    linesHindi: [
      'हर बार जीत जाना ही इंसान को बड़ा नहीं बनाता इस सफ़र में',
      'कभी-कभी हार हमें वह सिखा जाती है जो सौ किताबें नहीं सिखातीं',
    ],
    linesHinglish: [
      'Har baar jeet jaana hi insaan ko bada nahin banaata is safar mein',
      'Kabhi-kabhi haar humein woh sikha jaati hai jo sau kitaabein nahin sikhaatin',
    ],
    linesEnglish: [
      'An unbroken streak of easy wins rarely deepens anyone’s character',
      'Sometimes a tough stumble teaches wisdom a hundred books could never impart',
    ],
  },
  {
    title: 'खामोश रहकर सहारा बनना',
    titleEnglish: 'Standing Steadily Without Fanfare',
    linesHindi: [
      'जताकर की गई मदद अक्सर लेने वाले की नज़रें झुका देती है',
      'चुपचाप दिया गया सहारा ही सच्चे रिश्ते की पहचान होता है',
    ],
    linesHinglish: [
      'Jataakar ki gayi madad aksar lene waale ki nazrein jhuka deti hai',
      'Chupchaap diya gaya sahaara hi sachhe rishte ki pehchaan hota hai',
    ],
    linesEnglish: [
      'Loudly advertised favors often make the receiver’s head hang low',
      'Help extended softly behind closed doors marks true nobility of heart',
    ],
  },
  {
    title: 'दिल की सच्ची आवाज़',
    titleEnglish: 'Honest Voice Inside Quiet Hours',
    linesHindi: [
      'रात को आईने के सामने खड़े होकर ख़ुद से आँखें मिला सको अगर',
      'तो समझ लेना कि तुमने आज का दिन बहुत सही जिया है दोस्त',
    ],
    linesHinglish: [
      'Raat ko aaine ke saamne khade hokar khud se aankhein mila sako agar',
      'To samajh lena ki tumne aaj ka din bahut sahi jiya hai dost',
    ],
    linesEnglish: [
      'If standing before the bathroom mirror late at night you meet your own gaze',
      'Without flinching once, know you lived an honest, worthy day',
    ],
  },
  {
    title: 'प्रकृति की कोमल सीख',
    titleEnglish: 'Gentle Teaching From Nature',
    linesHindi: [
      'नदी अपना मीठा पानी खुद कभी नहीं पीती, बस बहती चली जाती है',
      'देने की आदत ही इंसान को धरती पर सबसे ऊँचा बनाती है',
    ],
    linesHinglish: [
      'Nadi apna meetha paani khud kabhi nahin peeti, bas behti chali jaati hai',
      'Dene ki aadat hi insaan ko dharti par sabse ooncha banaati hai',
    ],
    linesEnglish: [
      'A flowing river never drinks its own sweet water, yet nourishes miles',
      'A habit of generous giving lifts every human spirit highest of all',
    ],
  },
  {
    title: 'बदलते रिश्तों की सच्चाई',
    titleEnglish: 'Quiet Truth of Changing Ties',
    linesHindi: [
      'कुछ लोग हमारे पूरे जीवन के लिए नहीं, सिर्फ़ एक सबक़ के लिए आते हैं',
      'उनसे नाराज़ होने के बजाय अनुभव लेकर आगे बढ़ना बेहतर है',
    ],
    linesHinglish: [
      'Kuch log hamaare poore jeevan ke liye nahin, sirf ek sabak ke liye aate hain',
      'Unse naaraaz hone ke bajaay anubhav lekar aage badhna behtar hai',
    ],
    linesEnglish: [
      'Some people cross our path not for decades, only to teach one chapter',
      'Carry the wisdom gratefully forward rather than nursing lasting resentment',
    ],
  },
  {
    title: 'थके हुए कंधों का आराम',
    titleEnglish: 'Rest for Weary Shoulders',
    linesHindi: [
      'हर वक़्त मज़बूत दिखने का नाटक करना ज़रूरी नहीं होता कभी-कभी',
      'अपनों के सामने दो पल रोकर मन हल्का कर लेना भी ताकत है',
    ],
    linesHinglish: [
      'Har waqt mazboot dikhne ka naatak karna zaroori nahin hota kabhi-kabhi',
      'Apnon ke saamne do pal rokar mann halka kar lena bhi taaqat hai',
    ],
    linesEnglish: [
      'Wearing steel armor around the clock is exhausting for any soul',
      'Letting tears fall safely beside people who love you takes real strength',
    ],
  },
  {
    title: 'प्यार भरा धन्यवाद',
    titleEnglish: 'Heartfelt Word of Gratitude',
    linesHindi: [
      'जो लोग हमारे बिना माँगे हर रोज़ हमारी फ़िक्र करते रहते हैं',
      'कभी समय निकालकर उन्हें दिल से शुक्रिया जरूर कहना चाहिए',
    ],
    linesHinglish: [
      'Jo log hamaare bina maange har roz hamaari fikr karte rehte hain',
      'Kabhi samay nikaalkar unhein dil se shukriya zaroor kehna chahiye',
    ],
    linesEnglish: [
      'The quiet souls who check on us effortlessly day after day',
      'Deserve us pausing tonight simply to say thank you from the heart',
    ],
  },
  {
    title: 'आँखों की नमी और उम्मीद',
    titleEnglish: 'Morning Mist Holding Bright Hope',
    linesHindi: [
      'कोहरा कितना भी घना क्यों न छाया हो सर्दियों की सुबह सड़क पर',
      'चार क़दम आगे बढ़ते ही रास्ता अपने आप साफ़ दिखने लगता है',
    ],
    linesHinglish: [
      'Kohra kitna bhi ghana kyun na chhaaya ho sardiyon ki subah sadak par',
      'Chaar kadam aage badhte hi raasta apne aap saaf dikhne lagta hai',
    ],
    linesEnglish: [
      'No matter how thickly winter fog hides the highway ahead at dawn',
      'Walk four steady paces forward and the next stretch opens cleanly',
    ],
  },
  {
    title: 'दिल की गहराई से मुस्कान',
    titleEnglish: 'Smile Born Deep Inside',
    linesHindi: [
      'पैसे से महँगा सोफ़ा और सुंदर झूमर खरीदा जा सकता है घर के लिए',
      'पर उस कमरे में गूँजने वाली सच्ची हँसी सिर्फ़ प्यार से आती है',
    ],
    linesHinglish: [
      'Paise se mehnga sofa aur sundar jhoomar khareeda jaata hai ghar ke liye',
      'Par us kamre mein goonjne waali sachhi hansi sirf pyar se aati hai',
    ],
    linesEnglish: [
      'Money furnishes a house with plush sofas and sparkling chandeliers',
      'Yet the genuine laughter echoing down hallways arrives only through love',
    ],
  },
  {
    title: 'अजनबी शहर का अपनापन',
    titleEnglish: 'Warmth Found Far From Home',
    linesHindi: [
      'कभी-कभी अनजान रास्तों पर भी कोई फरिश्ता बनकर मिल जाता है',
      'जो सिखा देता है कि इस दुनिया में अच्छाई अभी बाकी है दोस्त',
    ],
    linesHinglish: [
      'Kabhi-kabhi anjaan raaston par bhi koi farishta bankar mil jaata hai',
      'Jo sikha deta hai ki is duniya mein achhaai abhi baaqi hai dost',
    ],
    linesEnglish: [
      'Even along unfamiliar highways, unexpected kindness steps out like grace',
      'Reminding your heart gently how much goodness still thrives in this world',
    ],
  },
  {
    title: 'मेरी जान का सुकून',
    titleEnglish: 'Treasure of Inner Quietness',
    linesHindi: [
      'जब दूसरों को नीचा दिखाने की दौड़ से बाहर निकल आता है मन',
      'तब ज़िंदगी का असली स्वाद और सुकून समझ आने लगता है',
    ],
    linesHinglish: [
      'Jab doosron ko neecha dikhaane ki daud se baahar nikal aata hai mann',
      'Tab zindagi ka asli swaad aur sukoon samajh aane lagta hai',
    ],
    linesEnglish: [
      'The moment your heart steps out of tiring races to outshine everyone',
      'Life finally starts tasting rich, unhurried, and genuinely calm',
    ],
  },
  {
    title: 'छोटी सी नेकी की गूँज',
    titleEnglish: 'Echoes of Tiny Good Deeds',
    linesHindi: [
      'हमें लगता है किसी के साथ किया अच्छा व्यवहार बस वहीं खत्म हो गया',
      'पर वही नेकी घूमकर एक दिन हमारे आँगन में लौट आती है',
    ],
    linesHinglish: [
      'Humein lagta hai kisi ke saath kiya achha vyavahaar bas wahin khatam ho gaya',
      'Par wahi neki ghoomkar ek din hamaare aangan mein laut aati hai',
    ],
    linesEnglish: [
      'We assume one quiet act of grace vanishes the moment it is done',
      'Yet kindness travels full circle and always finds its way home to us',
    ],
  },
  {
    title: 'अकेले बैठने की ताक़त',
    titleEnglish: 'Strength in Quiet Solitude',
    linesHindi: [
      'जिसने अकेले में अपने विचारों से दोस्ती कर ली हो जीवन भर',
      'उसे भीड़ से बाहर हो जाने का डर कभी सताता ही नहीं है',
    ],
    linesHinglish: [
      'Jisne akele mein apne vichaaron se dosti kar li ho jeevan bhar',
      'Use bheed se baahar ho jaane ka dar kabhi sataata hi nahin hai',
    ],
    linesEnglish: [
      'Whoever learns to sit comfortably as friends with their own thoughts',
      'Never fears standing apart from noisy, shifting crowds anymore',
    ],
  },
  {
    title: 'साफ़ दिल का इंसान',
    titleEnglish: 'Rare Worth of Clean Hearts',
    linesHindi: [
      'चालाक लोगों से तो दुनिया भरी पड़ी है हर गली-नुक्कड़ पर यारो',
      'कोई सीधा और साफ़ दिल वाला इंसान मिले तो उसे संभालकर रखना',
    ],
    linesHinglish: [
      'Chaalaak logon se to duniya bhari padi hai har gali-nukkad par yaaro',
      'Koi seedha aur saaf dil waala insaan mile to use sambhaalkar rakhna',
    ],
    linesEnglish: [
      'Clever talkers crowd every busy street corner from sunrise to dusk',
      'Whenever you meet a genuinely plain, honest heart, treasure them closely',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'पसंदीदा किताब जैसी ज़िंदगी',
    titleEnglish: 'Life Read Like Favorite Books',
    linesHindi: [
      'हर अध्याय में एक ही जैसा सुख मिले यह मुमकिन नहीं कहानी में',
      'पर कठिन पन्नों को पलटने का हौसला ही अंत को सुंदर बनाता है',
    ],
    linesHinglish: [
      'Har adhyaay mein ek hi jaisa sukh mile yeh mumkin nahin kahaani mein',
      'Par kathin pannon ko palatne ka hausla hi ant ko sundar banaata hai',
    ],
    linesEnglish: [
      'No great story stays smooth and sunny across every single chapter',
      'Courage to turn past the heavy pages makes the final arc worthwhile',
    ],
  },
  {
    title: 'आँसुओं में भी मुस्कान की जगह',
    titleEnglish: 'Space for Hope Amid Tears',
    linesHindi: [
      'जब तकलीफ़ बहुत बड़ी हो और शब्द छोटे पड़ने लगें दिल में',
      'तब बस इतना याद रखना कि हर रात के बाद सवेरा तय होता है',
    ],
    linesHinglish: [
      'Jab takleef bahut badi ho aur shabd chhote padne lagen dil mein',
      'Tab bas itna yaad rakhna ki har raat ke baad savera tay hota hai',
    ],
    linesEnglish: [
      'When heartache rises taller than ordinary comforting words can climb',
      'Remember steadily that sunrise remains guaranteed after every dark hour',
    ],
  },
  {
    title: 'बिना आवाज़ के रोना',
    titleEnglish: 'Tears That Make Zero Sound',
    linesHindi: [
      'सबसे गहरा दर्द वह नहीं जो चीख-चिल्लाकर सबको सुनाया जाता है',
      'बल्कि वह है जब कोई बाथरूम में नल खोलकर चुपचाप रो लेता है',
    ],
    linesHinglish: [
      'Sabse gehra dard woh nahin jo cheekh-chillaakar sabko sunaaya jaata hai',
      'Balki woh hai jab koi bathroom mein nal kholkar chupchaap ro leta hai',
    ],
    linesEnglish: [
      'Deepest pain rarely announces itself loudly across crowded rooms',
      'It hides behind a running faucet while someone cries silently alone',
    ],
  },
  {
    title: 'दया से भरी एक नज़र',
    titleEnglish: 'Gentle Glance Full of Grace',
    linesHindi: [
      'ताने मारकर तो किसी का हौसला एक सेकंड में तोड़ा जा सकता है',
      'पर प्यार भरी एक नज़र गिरते हुए इंसान को संभाल लेती है',
    ],
    linesHinglish: [
      'Taane maarkar to kisi ka hausla ek second mein toda ja sakta hai',
      'Par pyar bhari ek nazar girte hue insaan ko sambhaal leti hai',
    ],
    linesEnglish: [
      'One careless sarcastic remark can snap someone’s confidence in half',
      'While one warm, believing look lifts a stumbling soul right back up',
    ],
  },
  {
    title: 'पुरानी यादों का सुकून',
    titleEnglish: 'Gentle Shelter of Old Memories',
    linesHindi: [
      'बचपन के वे दिन जब घड़ी नहीं, भूख और नींद से समय तय होता था',
      'आज भी थकान बढ़ने पर दिल वहीं लौट जाना चाहता है',
    ],
    linesHinglish: [
      'Bachpan ke woh din jab ghadi nahin, bhookh aur neend se samay tay hota tha',
      'Aaj bhi thakaan badhne par dil wahin laut jaana chahta hai',
    ],
    linesEnglish: [
      'Childhood days when hunger and sleep marked hours instead of alarms',
      'Still beckon softly whenever adult exhaustion piles up high',
    ],
  },
  {
    title: 'सपने और ज़िम्मेदारी का संतुलन',
    titleEnglish: 'Balancing Dreams and Duty',
    linesHindi: [
      'अपने शौक और घर की ज़रूरतों के बीच जो रोज़ तालमेल बिठाता है',
      'उस साधारण से इंसान के अंदर भी एक महान योद्धा रहता है',
    ],
    linesHinglish: [
      'Apne shauk aur ghar ki zarooraton ke beech jo roz taalmel bithaata hai',
      'Us saadhaaran se insaan ke andar bhi ek mahaan yoddha rehta hai',
    ],
    linesEnglish: [
      'Anyone balancing personal dreams beside daily family duties quietly',
      'Carries the quiet heart of a remarkable warrior inside ordinary clothes',
    ],
  },
  {
    title: 'रिश्तों में वक़्त का तोहफ़ा',
    titleEnglish: 'Gift of Undivided Presence',
    linesHindi: [
      'आजकल सबसे कीमती तोहफ़ा कोई घड़ी या गहना नहीं होता यार',
      'फ़ोन नीचे रखकर किसी की बात ध्यान से सुन लेना सबसे बड़ा तोहफ़ा है',
    ],
    linesHinglish: [
      'Aajkal sabse keemti tohfa koi ghadi ya gehna nahin hota yaar',
      'Phone neeche rakhkar kisi ki baat dhyaan se sun lena sabse bada tohfa hai',
    ],
    linesEnglish: [
      'The rarest gift nowadays is never a luxury watch or gold chain',
      'Putting your phone face down to listen wholeheartedly is priceless',
    ],
  },
  {
    title: 'चमकता हुआ स्वाभिमान',
    titleEnglish: 'Quiet Glow of Self-Dignity',
    linesHindi: [
      'जहाँ आपके होने और न होने से किसी को कोई फ़र्क न पड़े कभी',
      'वहाँ से बिना शोर किए सम्मानपूर्वक लौट आना ही समझदारी है',
    ],
    linesHinglish: [
      'Jahaan aapke hone aur na hone se kisi ko koi fark na pade kabhi',
      'Wahaan se bina shor kiye sammaanpoorvak laut aana hi samajhdaari hai',
    ],
    linesEnglish: [
      'Wherever your presence or absence makes zero difference to anyone',
      'Stepping back calmly with your dignity intact is purest wisdom',
    ],
  },
  {
    title: 'धूप में पसीना, छाँव में सुकून',
    titleEnglish: 'Earned Peace After Honest Toil',
    linesHindi: [
      'जिसने दिन भर धूप में खड़े होकर ईमानदारी से काम किया हो',
      'शाम की ठंडी हवा का असली मज़ा वही इंसान समझ पाता है',
    ],
    linesHinglish: [
      'Jisne din bhar dhoop mein khade hokar imaandari se kaam kiya ho',
      'Shaam ki thandi hawa ka asli maza wahi insaan samajh paata hai',
    ],
    linesEnglish: [
      'Only those who worked honestly beneath harsh midday sun all day',
      'Truly taste the sweetness inside cool evening breezes at dusk',
    ],
  },
  {
    title: 'दिल की गहराई से माफ़ी',
    titleEnglish: 'Peace Chosen Over Bitterness',
    linesHindi: [
      'ज़िंदगी बहुत छोटी है किसी से बरसों तक नफ़रत पालकर रखने को',
      'मन साफ़ रखिए ताकि हर सुबह चेहरे पर ताज़गी बनी रहे',
    ],
    linesHinglish: [
      'Zindagi bahut chhoti hai kisi se barson tak nafrat paalkar rakhne ko',
      'Mann saaf rakhiye taaki har subah chehre par taazgi bani rahe',
    ],
    linesEnglish: [
      'Life is far too brief to spend years watering old bitterness inside',
      'Keep your mind light and clear so mornings greet your smile fresh',
    ],
  },
  {
    title: 'इंसानियत का छोटा दीपक',
    titleEnglish: 'Small Lamp of Everyday Humanity',
    linesHindi: [
      'हम पूरी दुनिया का दुःख एक दिन में नहीं मिटा सकते शायद',
      'पर अपने आस-पास के दो लोगों का दिन तो ज़रूर बेहतर कर सकते हैं',
    ],
    linesHinglish: [
      'Hum poori duniya ka dukh ek din mein nahin mita sakte shaayad',
      'Par apne aas-paas ke do logon ka din to zaroor behtar kar sakte hain',
    ],
    linesEnglish: [
      'None of us can mend the entire world’s sorrow before sunset tonight',
      'Yet lifting two nearby souls a little lighter is always within reach',
    ],
  },
  {
    title: 'अधूरापन भी ज़रूरी है',
    titleEnglish: 'Why Small Gaps Matter',
    linesHindi: [
      'हर इंसान में कुछ न कुछ कमियाँ और कुछ ख़ूबियाँ रहती हैं साथ',
      'इसी अधूरेपन की वजह से हम एक-दूसरे का हाथ थामते हैं',
    ],
    linesHinglish: [
      'Har insaan mein kuch na kuch kamiyaan aur kuch khoobiyaan rehti hain saath',
      'Isi adhoorepan ki wajah se hum ek-doosre ka haath thaamte hain',
    ],
    linesEnglish: [
      'Every single soul carries mixed strengths alongside gentle flaws',
      'Those very imperfections are why human hands reach out to hold each other',
    ],
  },
  {
    title: 'माँ की थकान भरी हँसी',
    titleEnglish: 'Mother’s Smile Through Fatigue',
    linesHindi: [
      'चूल्हे के पास पसीने में भीगकर भी मुस्कुराते हुए खाना परोसना',
      'माँ का यही प्रेम हमें ताउम्र ज़मीन से जोड़े रखता है',
    ],
    linesHinglish: [
      'Choolhe ke paas paseene mein bheegkar bhi muskuraate hue khaana parosna',
      'Maa ka yahi prem humein taa-umr zameen se jode rakhta hai',
    ],
    linesEnglish: [
      'Smiling gently beside warm kitchen stoves while serving hot meals',
      'A mother’s quiet devotion keeps us anchored humbly for life',
    ],
  },
  {
    title: 'साधारण दिनों की अद्भुत चमक',
    titleEnglish: 'Quiet Magic in Ordinary Days',
    linesHindi: [
      'किसी बड़े चमत्कार की प्रतीक्षा में आज का दिन मत गँवा देना',
      'साँसों का चलना और अपनों का पास होना ही सबसे बड़ा चमत्कार है',
    ],
    linesHinglish: [
      'Kisi bade chamatkaar ki prateeksha mein aaj ka din mat ganwa dena',
      'Saanson ka chalna aur apnon ka paas hona hi sabse bada chamatkaar hai',
    ],
    linesEnglish: [
      'Do not waste today waiting idly for fireworks or grand miracles',
      'Breathing peacefully beside people you love is already miracle enough',
    ],
  },
  {
    title: 'टूटे मन की ख़ामोश पुकार',
    titleEnglish: 'Gentle Empathy for Quiet Pain',
    linesHindi: [
      'कभी कोई दोस्त अचानक बिना वजह चुप दिखने लगे महफ़िल में',
      'तो मज़ाक़ करने से पहले एक बार प्यार से उसका हाथ पकड़ लेना',
    ],
    linesHinglish: [
      'Kabhi koi dost achaanak bina wajah chup dikhne lage mehfil mein',
      'To mazaaq karne se pehle ek baar pyar se uska haath pakad lena',
    ],
    linesEnglish: [
      'When a usually lively friend falls oddly silent around the table',
      'Hold their hand gently before rushing in with another joke',
    ],
  },
  {
    title: 'सच्चे प्यार का धीरज',
    titleEnglish: 'Patience Woven Into Real Love',
    linesHindi: [
      'सच्चा प्यार तेज़ आँधी की तरह आकर शोर नहीं मचाता कभी',
      'वह सुबह की धूप की तरह धीरे-धीरे पूरे जीवन को गरम कर देता है',
    ],
    linesHinglish: [
      'Sachha pyar tez aandhi ki tarah aakar shor nahin machaata kabhi',
      'Woh subah ki dhoop ki tarah dheere-dheere poore jeevan ko garam kar deta hai',
    ],
    linesEnglish: [
      'Real love rarely storms through doors waving loud banners around',
      'It arrives like early sunlight slowly warming every corner of life',
    ],
  },
  {
    title: 'जीवन के मोड़ पर विनम्रता',
    titleEnglish: 'Staying Humble Through Turns',
    linesHindi: [
      'आज वक़्त अच्छा है तो अपनी आवाज़ थोड़ी नीची और नरम रखिए',
      'क्योंकि मौसम बदलने में और सिक्का पलटने में देर नहीं लगती',
    ],
    linesHinglish: [
      'Aaj waqt achha hai to apni aawaz thodi neechi aur naram rakhiye',
      'Kyunki mausam badalne mein aur sikka palatne mein der nahin lagti',
    ],
    linesEnglish: [
      'While winds blow warmly in your favor, keep your voice soft and kind',
      'Seasons flip unexpectedly faster than anyone ever anticipates',
    ],
  },
  {
    title: 'अपने अंदर का सुकून',
    titleEnglish: 'Peace Already Dwelling Inside',
    linesHindi: [
      'पहाड़ों की यात्राओं और बड़े शहरों में बहुत ढूँढा चैन मैंने',
      'आख़िर में समझ आया कि सुकून कहीं बाहर नहीं, भीतर ही रहता है',
    ],
    linesHinglish: [
      'Pahaadon ki yaatraon aur bade shehron mein bahut dhoondha chain maine',
      'Aakhir mein samajh aaya ki sukoon kahin baahar nahin, bheetar hi rehta hai',
    ],
    linesEnglish: [
      'I hunted high across mountain passes and gleaming cities for calm',
      'Only to discover peace had been quietly waiting indoors within me',
    ],
  },
  {
    title: 'दिल की सच्ची भावना',
    titleEnglish: 'Honest Tenderness of Heart',
    linesHindi: [
      'जब किसी के लिए बिना किसी फायदे के प्रार्थना निकल जाए दिल से',
      'तो समझ लेना कि वह रिश्ता आत्मा के बहुत करीब पहुँच चुका है',
    ],
    linesHinglish: [
      'Jab kisi ke liye bina kisi faayde ke prarthana nikal jaaye dil se',
      'To samajh lena ki woh rishta aatma ke bahut kareeb pahunch chuka hai',
    ],
    linesEnglish: [
      'When sincere prayers rise effortlessly for someone with zero motive',
      'Know that bond has gently reached right to the core of your soul',
    ],
  },
  {
    title: 'नए कल की उजली उम्मीद',
    titleEnglish: 'Clear Hope for Bright Tomorrows',
    linesHindi: [
      'आज की थकान को कल के सपनों के आड़े मत आने देना यार',
      'बस रात भर आराम कर लो, कल का सूरज नई ऊर्जा लाएगा',
    ],
    linesHinglish: [
      'Aaj ki thakaan ko kal ke sapnon ke aade mat aane dena yaar',
      'Bas raat bhar aaraam kar lo, kal ka sooraj nayi oorja laayega',
    ],
    linesEnglish: [
      'Never let tonight’s heavy fatigue talk you out of tomorrow’s dreams',
      'Rest gently until sunrise—morning always brings fresh energy along',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'काँटों के बीच खिला फूल',
    titleEnglish: 'Bloom Rising Between Thorns',
    linesHindi: [
      'कठिन परिस्थितियों में जो अपनी अच्छाई नहीं खोता कभी',
      'वही इंसान इस दुनिया में सबसे सुंदर मिसाल बनकर चमकता है',
    ],
    linesHinglish: [
      'Kathin paristhitiyon mein jo apni achhaai nahin khota kabhi',
      'Wahi insaan is duniya mein sabse sundar misaal bankar chamakta hai',
    ],
    linesEnglish: [
      'Someone who refuses to lose tenderness inside thorny seasons',
      'Shines brightest of all as a living example of quiet strength',
    ],
  },
  {
    title: 'साँसों से भी कीमती वक़्त',
    titleEnglish: 'Time Pricier Than Breaths',
    linesHindi: [
      'पैसा कम पड़ जाए तो इंसान दोबारा कमा सकता है मेहनत करके',
      'पर अपनों के साथ गुज़रा वक़्त कभी वापस खरीदा नहीं जाता',
    ],
    linesHinglish: [
      'Paisa kam pad jaaye to insaan dobaara kama sakta hai mehnat karke',
      'Par apnon ke saath guzra waqt kabhi waapas khareeda nahin jaata',
    ],
    linesEnglish: [
      'Money lost along the way can always be earned back through grit',
      'Hours missed beside people you love can never be bought back once gone',
    ],
  },
  {
    title: 'दिल से निकली सच्ची बात',
    titleEnglish: 'Truth Spoken Straight From Soul',
    linesHindi: [
      'जो बात दिमाग़ से बोली जाती है वह बस कानों तक रुक जाती है',
      'जो बात दिल से निकलती है वही सीधे दूसरे दिल में उतरती है',
    ],
    linesHinglish: [
      'Jo baat dimaag se boli jaati hai woh bas kaanon tak ruk jaati hai',
      'Jo baat dil se nikalti hai wahi seedhe doosre dil mein utarti hai',
    ],
    linesEnglish: [
      'Clever lines drafted strictly in the head rarely travel past the ears',
      'Words spoken softly from the heart land effortlessly inside another soul',
    ],
  },
  {
    title: 'सुकून भरा अंतिम पड़ाव',
    titleEnglish: 'Peaceful Glow of Content Hearts',
    linesHindi: [
      'बहुत आगे निकल जाने की होड़ में पीछे छूटे लोग मत भूल जाना',
      'क्योंकि दिन के अंत में सुकून उन्हीं के पास बैठकर मिलता है',
    ],
    linesHinglish: [
      'Bahut aage nikal jaane ki hod mein peechhe chhoote log mat bhool jaana',
      'Kyunki din ke ant mein sukoon unhin ke paas baithkar milta hai',
    ],
    linesEnglish: [
      'Never leave beloved folks behind while sprinting toward distant peaks',
      'Because at sunset real peace always sits right beside those who stayed',
    ],
  },
  {
    title: 'प्यार और सम्मान की नींव',
    titleEnglish: 'Pillar of Mutual Respect',
    linesHindi: [
      'जहाँ एक-दूसरे के सपनों का सम्मान न किया जाए मन से',
      'वहाँ साथ रहकर भी दो इंसान बहुत दूर खड़े महसूस होते हैं',
    ],
    linesHinglish: [
      'Jahaan ek-doosre ke sapnon ka sammaan na kiya jaaye mann se',
      'Wahaan saath rehkar bhi do insaan bahut door khade mehsoos hote hain',
    ],
    linesEnglish: [
      'Wherever two people stop cheering earnestly for each other’s dreams',
      'Distance grows loud even while sitting across the same dinner table',
    ],
  },
  {
    title: 'अनजानी राहों में रोशनी',
    titleEnglish: 'Lantern Along Uncharted Trails',
    linesHindi: [
      'जब रास्ता बिल्कुल नया हो और आगे कोई निशान न दिखे दूर तक',
      'तो छोटे-छोटे क़दम उठाते रहो, मंज़िल खुद करीब आती जाएगी',
    ],
    linesHinglish: [
      'Jab raasta bilkul naya ho aur aage koi nishaan na dikhe door tak',
      'To chhote-chhote kadam uthaate raho, manzil khud kareeb aati jaayegi',
    ],
    linesEnglish: [
      'When stepping onto unfamiliar ground with zero road signs in sight',
      'Keep taking small steady paces—the destination slowly walks toward you',
    ],
  },
  {
    title: 'मेहनत से सजा छोटा आँगन',
    titleEnglish: 'Modest Yard Blessed With Effort',
    linesHindi: [
      'बड़े महलों से ज़्यादा सुकून उस छोटे से कमरे में मिलता है',
      'जहाँ शाम को पूरा परिवार एक साथ बैठकर हँसता-मुस्कुराता है',
    ],
    linesHinglish: [
      'Bade mehlon se zyada sukoon us chhote se kamre mein milta hai',
      'Jahaan shaam ko poora parivaar ek saath baithkar hansta-muskuraata hai',
    ],
    linesEnglish: [
      'More real comfort fills one modest living room than grand empty halls',
      'Whenever an entire family gathers inside laughing through dusk',
    ],
  },
  {
    title: 'दिल की सफ़ाई सबसे ज़रूरी',
    titleEnglish: 'Clean Heart Above Everything',
    linesHindi: [
      'शीशा कितना भी चमका लें अगर मन के भीतर धूल जमी हो तो',
      'बाहर की कोई सजावट इंसान को सच्ची शांति नहीं दे पाती',
    ],
    linesHinglish: [
      'Sheesha kitna bhi chamka lein agar mann ke bheetar dhool jami ho to',
      'Baahar ki koi sajaawat insaan ko sachhi shaanti nahin de paati',
    ],
    linesEnglish: [
      'No matter how bright mirrors shine if heavy dust rests inside the heart',
      'Outer glamour alone never hands a restless spirit genuine calm',
    ],
  },
  {
    title: 'हौसले का छोटा चिराग़',
    titleEnglish: 'Quiet Ember of Steady Hope',
    linesHindi: [
      'तूफ़ान चाहे कितनी भी ताक़त से बुझाना चाहे दीये की लौ को',
      'अगर हथेली की ओट हो तो छोटा चिराग़ भी सवेरे तक जलता है',
    ],
    linesHinglish: [
      'Toofaan chaahe kitni bhi taaqat se bujhaana chaahe diye ki lau ko',
      'Agar hatheli ki ot ho to chhota chiraag bhi savere tak jalta hai',
    ],
    linesEnglish: [
      'No matter how fiercely midnight gusts try snuffing out one small flame',
      'Cupped gently behind steady palms, a tiny lamp burns clear till dawn',
    ],
  },
  {
    title: 'मुस्कुराहट का संक्रामक जादू',
    titleEnglish: 'Contagious Grace of Smiles',
    linesHindi: [
      'थके हुए दिन में आपकी एक छोटी सी मुस्कान और प्यारा नमस्ते',
      'किसी उदास चेहरे पर पूरे हफ़्ते की रोशनी जगा सकता है',
    ],
    linesHinglish: [
      'Thake hue din mein aapki ek chhoti si muskaan aur pyara namaste',
      'Kisi udaas chehre par poore hafte ki roshni jaga sakta hai',
    ],
    linesEnglish: [
      'One gentle grin and cheerful greeting halfway through an exhausting day',
      'Can kindle a spark inside someone’s weary heart lasting all week',
    ],
  },
  {
    title: 'माँ-बाप की अनमोल धरोहर',
    titleEnglish: 'Priceless Legacy From Parents',
    linesHindi: [
      'ज़मीन-जायदाद से बड़ी धरोहर वो संस्कार होते हैं जो माँ-पापा देते हैं',
      'क्योंकि वही बुरे से बुरे वक़्त में इंसान को झुकने नहीं देते',
    ],
    linesHinglish: [
      'Zameen-jaaydaad se badi dharohar woh sanskaar hote hain jo maa-papa dete hain',
      'Kyunki wahi bure se bure waqt mein insaan ko jhukne nahin dete',
    ],
    linesEnglish: [
      'Far richer than land or savings are the quiet values parents pass down',
      'Those very roots keep you standing tall through every difficult storm',
    ],
  },
  {
    title: 'मन की गहराई का सागर',
    titleEnglish: 'Ocean Resting Quietly Within',
    linesHindi: [
      'कुछ लोग ऊपर से बिल्कुल शांत और साधारण दिखाई देते हैं हमेशा',
      'पर उनके भीतर करुणा और समझदारी का पूरा समुद्र बहता है',
    ],
    linesHinglish: [
      'Kuch log oopar se bilkul shaant aur saadhaaran dikhaayi dete hain hamesha',
      'Par unke bheetar karuna aur samajhdaari ka poora samudra behta hai',
    ],
    linesEnglish: [
      'Some quiet souls appear completely ordinary from across the street',
      'While oceans of deep compassion and wisdom move calmly underneath',
    ],
  },
  {
    title: 'अपनी रफ़्तार पर खिलता बीज',
    titleEnglish: 'Staying True to Quiet Dreams',
    linesHindi: [
      'दूसरों की देखा-देखी अपने रास्ते बार-बार मत बदलो मेरे दोस्त',
      'क्योंकि हर बीज अपने ही तय समय पर अंकुरित होकर फूल बनता है',
    ],
    linesHinglish: [
      'Doosron ki dekha-dekhi apne raaste baar-baar mat badlo mere dost',
      'Kyunki har beej apne hi tay samay par ankurit hokar phool banta hai',
    ],
    linesEnglish: [
      'Stop switching lanes nervously just watching somebody else’s pace',
      'Every honest seed sprouts and blooms beautifully right on its own schedule',
    ],
  },
  {
    title: 'खामोश सेवा का सम्मान',
    titleEnglish: 'Honoring Unseen Everyday Care',
    linesHindi: [
      'सड़क साफ़ करने वाले से लेकर खाना परोसने वाले हर हाथ का आदर करो',
      'इन्हीं की खामोश मेहनत से हमारा पूरा शहर चलता है हर रोज़',
    ],
    linesHinglish: [
      'Sadak saaf karne waale se lekar khaana parosne waale har haath ka aadar karo',
      'Inhin ki khaamosh mehnat se hamaara poora shehar chalta hai har roz',
    ],
    linesEnglish: [
      'Respect every quiet worker sweeping dawn streets or serving hot meals',
      'Their unseen everyday grit keeps our entire city running gracefully',
    ],
  },
  {
    title: 'रिश्तों में भरोसे का पुल',
    titleEnglish: 'Bridge Built on Daily Trust',
    linesHindi: [
      'दो इंसानों को पास लाने के लिए बड़े वादों की ज़रूरत नहीं पड़ती',
      'बस समय पर पहुँचना और बात का मान रख लेना ही काफ़ी होता है',
    ],
    linesHinglish: [
      'Do insaanon ko paas laane ke liye bade waadon ki zaroorat nahin padti',
      'Bas samay par pahunchna aur baat ka maan rakh lena hi kaafi hota hai',
    ],
    linesEnglish: [
      'Building lasting closeness never asks for dramatic solemn oaths',
      'Simply showing up when promised and keeping words proves enough',
    ],
  },
  {
    title: 'दिल को छूने वाली सादगी',
    titleEnglish: 'Simplicity Touching Every Soul',
    linesHindi: [
      'बिना मतलब के किसी के घर का दरवाज़ा खटखटा कर हाल पूछ आना',
      'आज की भागती दुनिया में सबसे प्यारा और दुर्लभ तोहफ़ा है',
    ],
    linesHinglish: [
      'Bina matlab ke kisi ke ghar ka darwaaza khatkhata kar haal poochh aana',
      'Aaj ki bhaagti duniya mein sabse pyara aur durlabh tohfa hai',
    ],
    linesEnglish: [
      'Dropping by someone’s door with zero agenda simply to ask how they are',
      'Is one of the warmest, rarest gifts left in today’s hurried world',
    ],
  },
  {
    title: 'आँखों की नमी से निकली रोशनी',
    titleEnglish: 'Light Born Out of Mist',
    linesHindi: [
      'जो इंसान ख़ुद टूटने का दर्द महसूस कर चुका हो जीवन में कभी',
      'वह कभी किसी दूसरे का दिल जानबूझकर नहीं दुखाता है',
    ],
    linesHinglish: [
      'Jo insaan khud tootne ka dard mehsoos kar chuka ho jeevan mein kabhi',
      'Woh kabhi kisi doosre ka dil jaanboojhkar nahin dukhaata hai',
    ],
    linesEnglish: [
      'Anyone who has once felt their own heart crack cleanly inside',
      'Steps carefully never to bruise another gentle spirit on purpose',
    ],
  },
  {
    title: 'सुकून भरा कोना घर का',
    titleEnglish: 'Quiet Corner Called Safe',
    linesHindi: [
      'दुनिया की सारी थकान दरवाज़े के बाहर चप्पल संग उतर जाती है',
      'जब घर में कोई प्यार से पूछे, आज का दिन कैसा गया तुम्हारा',
    ],
    linesHinglish: [
      'Duniya ki saari thakaan darwaze ke baahar chappal sang utar jaati hai',
      'Jab ghar mein koi pyar se poochhe, aaj ka din kaisa gaya tumhaara',
    ],
    linesEnglish: [
      'Worldly fatigue drops right beside your shoes at the doorway',
      'The second someone asks warmly, tell me how your whole day went',
    ],
  },
  {
    title: 'सच्ची दुआओं की बारिश',
    titleEnglish: 'Gentle Rain of Sincere Wishes',
    linesHindi: [
      'दुनिया में सबसे बड़ा चमत्कार तब होता है जब किसी अंजान की मदद से',
      'उसके होंठों पर मुस्कान आए और दिल से दुआ निकल जाए आपके लिए',
    ],
    linesHinglish: [
      'Duniya mein sabse bada chamatkaar tab hota hai jab kisi anjaan ki madad se',
      'Uske honthon par muskaan aaye aur dil se dua nikal jaaye aapke liye',
    ],
    linesEnglish: [
      'Real magic happens whenever one small favor offered to a stranger',
      'Lights up their smile and sends a sincere blessing straight toward you',
    ],
  },
  {
    title: 'बदलते वक़्त में स्थिर मन',
    titleEnglish: 'Steady Heart in Shifting Times',
    linesHindi: [
      'घड़ी की सुइयाँ रुकती नहीं और मौसम हमेशा बदलते रहते हैं यारो',
      'जो हर मोड़ पर अपनी इंसानियत बचा ले, वही सबसे बड़ा विजेता है',
    ],
    linesHinglish: [
      'Ghadi ki suiyaan rukti nahin aur mausam hamesha badalte rehte hain yaaro',
      'Jo har mod par apni insaaniyat bacha le, wahi sabse bada vijeta hai',
    ],
    linesEnglish: [
      'Clocks never stop ticking and seasons keep shifting across the sky',
      'Whoever protects their humanity at every turn emerges truly victorious',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'मौन की मधुर वाणी',
    titleEnglish: 'Sweet Speech Held in Silence',
    linesHindi: [
      'हर सवाल का जवाब बोलकर देना ज़रूरी नहीं होता मेरे दोस्त',
      'कभी-कभी शांत रहकर मुस्कुरा देना सबसे बड़ा उत्तर बन जाता है',
    ],
    linesHinglish: [
      'Har sawaal ka jawaab bolkar dena zaroori nahin hota mere dost',
      'Kabhi-kabhi shaant rehkar muskura dena sabse bada uttar ban jaata hai',
    ],
    linesEnglish: [
      'Not every sharp question deserves an equally loud comeback',
      'Sometimes offering one serene smile says more than an entire debate',
    ],
  },
  {
    title: 'कोने में खड़ा चुपचाप प्यार',
    titleEnglish: 'Care Running Quiet and Deep',
    linesHindi: [
      'दिखावे की भीड़ में अक्सर सबसे सच्चा इंसान कोने में खड़ा होता है',
      'क्योंकि उसे शोर मचाकर अपना प्यार साबित करना नहीं आता',
    ],
    linesHinglish: [
      'Dikhaawe ki bheed mein aksar sabse sachha insaan kone mein khada hota hai',
      'Kyunki use shor machaakar apna pyar saabit karna nahin aata',
    ],
    linesEnglish: [
      'Amidst showy crowds, the truest friend often stands quietly near the edge',
      'Never knowing how to turn genuine affection into noisy performance',
    ],
  },
  {
    title: 'खुशियों की चाबी अपने पास',
    titleEnglish: 'Key to Joy Rests Inside',
    linesHindi: [
      'अपनी शांति का रिमोट कंट्रोल दूसरों के हाथों में मत थमा देना',
      'कोई क्या बोलता है इससे ज़्यादा ज़रूरी है कि आप ख़ुद को क्या मानते हो',
    ],
    linesHinglish: [
      'Apni shaanti ka remote control doosron ke haathon mein mat thama dena',
      'Koi kya bolta hai isse zyada zaroori hai ki aap khud ko kya maante ho',
    ],
    linesEnglish: [
      'Never hand the remote control of your peace into someone else’s grip',
      'Who you know yourself to be outweighs every passing rumor outside',
    ],
  },
  {
    title: 'मेहनत से चमकता भविष्य',
    titleEnglish: 'Tomorrow Lit by Today’s Grit',
    linesHindi: [
      'आज की चुपचाप की गई मेहनत कल पूरे शहर में शोर मचाएगी एक दिन',
      'बस बिना रुके, बिना थके अपने छोटे-छोटे क़दम बढ़ाते रहिए',
    ],
    linesHinglish: [
      'Aaj ki chupchaap ki gayi mehnat kal poore shehar mein shor machaayegi ek din',
      'Bas bina ruke, bina thake apne chhote-chhote kadam badhaate rahiye',
    ],
    linesEnglish: [
      'Every quiet hour spent grinding today echoes cleanly tomorrow',
      'Keep placing one honest step ahead without worrying who applauds yet',
    ],
  },
  {
    title: 'दिल की किताब में प्यार',
    titleEnglish: 'Love Written Inside Quiet Pages',
    linesHindi: [
      'कभी पुराने खतों और तस्वीरों को फिर से खोलकर देखना सुकून से',
      'पता चलेगा कि कितनी छोटी-छोटी खुशियों ने हमें यहाँ तक पहुँचाया है',
    ],
    linesHinglish: [
      'Kabhi puraane khaton aur tasveeron ko phir se kholkar dekhna sukoon se',
      'Pata chalega ki kitni chhoti-chhoti khushiyon ne humein yahaan tak pahunchaaya hai',
    ],
    linesEnglish: [
      'Open old letters and dusty snapshots slowly on a quiet Sunday',
      'You will marvel how many tiny joys carried you safely all the way here',
    ],
  },
  {
    title: 'सच्चाई का उजला रास्ता',
    titleEnglish: 'Bright Road of Plain Integrity',
    linesHindi: [
      'रास्ते में भले ही थोड़े पत्थर ज़्यादा मिलें सच चलने वालों को',
      'पर मंज़िल तक पहुँचकर उनके चेहरे पर कभी शर्मिंदगी नहीं होती',
    ],
    linesHinglish: [
      'Raaste mein bhale hi thode patthar zyada milein sach chalne waalon ko',
      'Par manzil tak pahunchkar unke chehre par kabhi sharmindagi nahin hoti',
    ],
    linesEnglish: [
      'Honest trails occasionally scatter a few extra stones along the climb',
      'Yet arriving at the summit leaves zero guilt anywhere in your mirror',
    ],
  },
  {
    title: 'माँ के हाथों का आशीर्वाद',
    titleEnglish: 'Warm Grace From Mother’s Palms',
    linesHindi: [
      'बड़े से बड़े डॉक्टर की दवाई से भी तेज़ असर होता है उस हाथ में',
      'जब माँ सिर पर तेल लगाकर कहती हैं, अब सब ठीक हो जाएगा बेटा',
    ],
    linesHinglish: [
      'Bade se bade doctor ki dawaai se bhi tez asar hota hai us haath mein',
      'Jab maa sir par tel lagaakar kehti hain, ab sab theek ho jaayega beta',
    ],
    linesEnglish: [
      'Swifter than any prescription works the quiet magic in one gentle palm',
      'When Mom strokes your forehead whispering softly, everything will pass',
    ],
  },
  {
    title: 'अधूरी बातों की कदर',
    titleEnglish: 'Respecting Unfinished Goodbyes',
    linesHindi: [
      'हर किसी से लड़कर अलग होने की ज़रूरत नहीं होती जीवन में यार',
      'कुछ अधूरे अध्यायों को सम्मान के साथ बंद कर देना भी कला है',
    ],
    linesHinglish: [
      'Har kisi se ladkar alag hone ki zaroorat nahin hoti jeevan mein yaar',
      'Kuch adhure adhyaayon ko sammaan ke saath band kar dena bhi kala hai',
    ],
    linesEnglish: [
      'Not every parting chapter needs noisy slams or bitter blame behind',
      'Closing an unfinished story gently with mutual respect takes real grace',
    ],
  },
  {
    title: 'आँखों की गहराई में सुकून',
    titleEnglish: 'Calm Resting Behind Steady Eyes',
    linesHindi: [
      'भीड़ कितनी भी तेज़ भाग रही हो आपके आस-पास सड़क पर आज',
      'अपनी रफ़्तार खुद तय करना ही मन को शांत रखने का पहला सूत्र है',
    ],
    linesHinglish: [
      'Bheed kitni bhi tez bhaag rahi ho aapke aas-paas sadak par aaj',
      'Apni raftaar khud tay karna hi mann ko shaant rakhne ka pehla sootra hai',
    ],
    linesEnglish: [
      'Regardless how frantically the crowd sprints past along every avenue',
      'Choosing your own steady pace remains step one toward inner calm',
    ],
  },
  {
    title: 'बचपन के आँगन की धूप',
    titleEnglish: 'Sunlight Across Childhood Yards',
    linesHindi: [
      'मिट्टी के खिलौने और कागज़ के नोट बहुत सस्ते आते थे बाज़ार में',
      'पर उनके साथ जो ख़ुशी जुड़ी थी वह आज करोड़ों में नहीं मिलती',
    ],
    linesHinglish: [
      'Mitti ke khilaune aur kaagaz ke note bahut saste aate the baazaar mein',
      'Par unke saath jo khushi judi thi woh aaj karodon mein nahin milti',
    ],
    linesEnglish: [
      'Clay toys and paper play money cost practically nothing back then',
      'Yet the pure joy wrapped inside them cannot be purchased for millions now',
    ],
  },
  {
    title: 'प्यार भरा एक हौसला',
    titleEnglish: 'Lift Inside One Kind Word',
    linesHindi: [
      'जब कोई गिरकर उठने की कोशिश कर रहा हो अपने बल पर दोबारा',
      'तो ताली न सही, बस एक सच्चा हौसला दे देना बहुत बड़ा पुण्य है',
    ],
    linesHinglish: [
      'Jab koi girkar uthne ki koshish kar raha ho apne bal par dobaara',
      'To taali na sahi, bas ek sachha hausla de dena bahut bada punya hai',
    ],
    linesEnglish: [
      'Watching someone push shakily back onto their feet after falling',
      'One genuine word of encouragement weighs heavier than loud applause',
    ],
  },
  {
    title: 'इंसान की सबसे प्यारी अदा',
    titleEnglish: 'Loveliest Trait Any Person Holds',
    linesHindi: [
      'ख़ुद तकलीफ़ में रहकर भी दूसरे के लिए दुआ माँग लेने की आदत',
      'इंसान को भीड़ में आम होते हुए भी सबसे ख़ास बना देती है',
    ],
    linesHinglish: [
      'Khud takleef mein rehkar bhi doosre ke liye dua maang lene ki aadat',
      'Insaan ko bheed mein aam hote hue bhi sabse khaas bana deti hai',
    ],
    linesEnglish: [
      'Praying sincerely for someone else’s brightness while facing your own rain',
      'Turns an ordinary soul walking past into somebody unforgettable',
    ],
  },
  {
    title: 'सुकून की छोटी सी कुटिया',
    titleEnglish: 'Modest Shelter Full of Peace',
    linesHindi: [
      'ज़रूरतों की लिस्ट जितनी छोटी रखते जाओगे अपने जीवन में दोस्त',
      'मुस्कुराने के बहाने उतने ही ज़्यादा अपने आप मिलते जाएँगे',
    ],
    linesHinglish: [
      'Zarooraton ki list jitni chhoti rakhte jaaoge apne jeevan mein dost',
      'Muskuraane ke bahaane utne hi zyada apne aap milte jaayenge',
    ],
    linesEnglish: [
      'The shorter you keep your restless list of endless wants each year',
      'The more effortless reasons to smile appear right beside your morning tea',
    ],
  },
  {
    title: 'वक़्त की अनकही कद्र',
    titleEnglish: 'Quiet Value of Fleeting Hours',
    linesHindi: [
      'आज जो छोटे-छोटे पल हमें मामूली लग रहे हैं रोज़मर्रा के बीच में',
      'दस साल बाद वही पल ज़िंदगी की सबसे कीमती यादें बन जाएँगे',
    ],
    linesHinglish: [
      'Aaj jo chhote-chhote pal humein maamooli lag rahe hain rozmarra ke beech mein',
      'Das saal baad wahi pal zindagi ki sabse keemti yaadein ban jaayenge',
    ],
    linesEnglish: [
      'Those ordinary afternoon errands slipping carelessly past right now',
      'Become ten years later the exact golden memories we miss the sharpest',
    ],
  },
  {
    title: 'चेहरे से दिल तक का सफ़र',
    titleEnglish: 'Journey From Face to Heart',
    linesHindi: [
      'आँखें तो एक पल में किसी की सूरत पर अटक जाती हैं इस दुनिया में',
      'पर दिल हमेशा उम्र भर के लिए किसी के स्वभाव पर रुकता है',
    ],
    linesHinglish: [
      'Aankhein to ek pal mein kisi ki soorat par atak jaati hain is duniya mein',
      'Par dil hamesha umr bhar ke liye kisi ke swabhaav par rukta hai',
    ],
    linesEnglish: [
      'Eyes pause easily for a second admiring pretty outlines passing by',
      'Yet the heart settles down lifelong only beside gentle character',
    ],
  },
  {
    title: 'प्यार का शांत समंदर',
    titleEnglish: 'Calm Ocean of Deep Affection',
    linesHindi: [
      'बड़े-बड़े वादों की बजाय छोटा सा साथ निभाना ज़्यादा कठिन होता है',
      'जो हर मौसम में एक जैसा बना रहे, वही सच्चा अपना कहलाता है',
    ],
    linesHinglish: [
      'Bade-bade waadon ki bajaay chhota sa saath nibhaana zyada kathin hota hai',
      'Jo har mausam mein ek jaisa bana rahe, wahi sachha apna kehlaata hai',
    ],
    linesEnglish: [
      'Keeping small everyday loyalty outweighs making thunderous vows',
      'Whoever stays unchanged through fair skies and squalls is true kin',
    ],
  },
  {
    title: 'आने वाले कल की चमक',
    titleEnglish: 'Brightness Waiting Round Tomorrow',
    linesHindi: [
      'कभी यह मत समझना कि तुम्हारी मेहनत कोई देख नहीं रहा यहाँ',
      'वक़्त सब कुछ गिनता है और सही घड़ी पर सूद समेत लौटाता है',
    ],
    linesHinglish: [
      'Kabhi yeh mat samajhna ki tumhaari mehnat koi dekh nahin raha yahaan',
      'Waqt sab kuch ginta hai aur sahi ghadi par sood samet lautaata hai',
    ],
    linesEnglish: [
      'Never imagine your silent daily hustle goes completely unseen',
      'Time keeps an honest ledger and returns every ounce in full bloom',
    ],
  },
  {
    title: 'दिल जीत लेने वाला स्पर्श',
    titleEnglish: 'Grace in Gentle Understanding',
    linesHindi: [
      'किसी की गलती पर उँगली उठाने से पहले उसके हालात देख लेना',
      'कई बार टूटा हुआ इंसान सिर्फ़ एक नरम शब्द का भूखा होता है',
    ],
    linesHinglish: [
      'Kisi ki galti par ungli uthaane se pehle uske haalaat dekh lena',
      'Kai baar toota hua insaan sirf ek naram shabd ka bhookha hota hai',
    ],
    linesEnglish: [
      'Notice what weight someone carries before pointing out a misstep',
      'Often a bruised spirit is simply starving for one gentle sentence',
    ],
  },
  {
    title: 'हृदय की निर्मलता',
    titleEnglish: 'Purity Living Inside Clear Hearts',
    linesHindi: [
      'जितना सरल और साफ़ मन रखोगे अपनी रोज़ की ज़िंदगी में तुम',
      'ईश्वर भी उतनी ही आसानी से तुम्हारी राहें खोलता जाएगा',
    ],
    linesHinglish: [
      'Jitna saral aur saaf mann rakhoge apni roz ki zindagi mein tum',
      'Ishwar bhi utni hi aasaani se tumhaari raahein kholta jaayega',
    ],
    linesEnglish: [
      'The simpler and cleaner you keep your intentions through daily storms',
      'The more smoothly hidden doors swing open right along your footpath',
    ],
  },
  {
    title: 'दिल छू जाने वाला सफ़र',
    titleEnglish: 'Journey Leaving Hearts Touched',
    linesHindi: [
      'हम दुनिया से कुछ लेकर नहीं जाने वाले जब विदा होंगे एक दिन',
      'सिर्फ़ अपने पीछे छोड़ी गई मुस्कानें ही हमारी असली पहचान होंगी',
    ],
    linesHinglish: [
      'Hum duniya se kuch lekar nahin jaane waale jab vida honge ek din',
      'Sirf apne peechhe chhodi gayi muskaanein hi hamaari asli pehchaan hongi',
    ],
    linesEnglish: [
      'None of us pack shiny trophies when our final evening closes down',
      'Only the smiles left glowing behind on other faces mark our true name',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'सच्ची दोस्ती की छांव',
    titleEnglish: 'Cool Shade of Faithful Friends',
    linesHindi: [
      'जब दुनिया के सारे हिसाब-किताब बोझ बनने लगें मन पर कभी',
      'तब एक सच्चे दोस्त की हँसी पूरी शाम को ताज़ा कर देती है',
    ],
    linesHinglish: [
      'Jab duniya ke saare hisaab-kitaab bojh banne lagen mann par kabhi',
      'Tab ek sachhe dost ki hansi poori shaam ko taaza kar deti hai',
    ],
    linesEnglish: [
      'When worldly scorecards start pressing heavily against your spirit',
      'One carefree laugh beside an old friend washes the evening clean',
    ],
  },
  {
    title: 'प्यार में समर्पण का सौंदर्य',
    titleEnglish: 'Quiet Beauty of True Care',
    linesHindi: [
      'प्यार का मतलब किसी को बांधकर रखना नहीं होता कभी यारो',
      'बल्कि उसे उड़ने के लिए खुला आसमान देना ही असली प्रेम है',
    ],
    linesHinglish: [
      'Pyar ka matlab kisi ko baandhkar rakhna nahin hota kabhi yaaro',
      'Balki use udne ke liye khula aasmaan dena hi asli prem hai',
    ],
    linesEnglish: [
      'Real love never builds neat cages trying to hold somebody close',
      'Handing your loved ones wide open sky to soar freely is truest devotion',
    ],
  },
  {
    title: 'वक़्त की मरहम पर भरोसा',
    titleEnglish: 'Faith in Time’s Gentle Cure',
    linesHindi: [
      'जो गहरे निशान आज किसी तरह मिटते नहीं दिख रहे दिल से',
      'एक दिन वही निशान हमें और भी मज़बूत इंसान बना जाते हैं',
    ],
    linesHinglish: [
      'Jo gehre nishaan aaj kisi tarah mit-te nahin dikh rahe dil se',
      'Ek din wahi nishaan humein aur bhi mazboot insaan bana jaate hain',
    ],
    linesEnglish: [
      'Deep bruises that seem stubbornly etched across today’s quiet chest',
      'One day forge the exact backbone making us infinitely steadier',
    ],
  },
  {
    title: 'सादगी का अनमोल ताज',
    titleEnglish: 'Priceless Crown of Gentle Grace',
    linesHindi: [
      'ज़्यादा बोलने से नहीं, सही वक़्त पर सही बात कहने से कद्र होती है',
      'इंसान की शांति ही उसका सबसे चमकदार आभूषण होती है',
    ],
    linesHinglish: [
      'Zyada bolne se nahin, sahi waqt par sahi baat kehne se kadr hoti hai',
      'Insaan ki shaanti hi uska sabse chamakdaar aabhooshan hoti hai',
    ],
    linesEnglish: [
      'Respect comes not from talking loudest, but speaking true words in season',
      'Composure remains the finest jewel anyone can ever wear in public',
    ],
  },
  {
    title: 'आँखों की पुतली में सजी दुनिया',
    titleEnglish: 'World Framed Through Kind Eyes',
    linesHindi: [
      'अगर आप दुनिया में अच्छाई ढूँढने निकलेंगे हर सुबह उठकर',
      'तो हर साधारण दिन में भी कोई न कोई खुशी मिल ही जाएगी',
    ],
    linesHinglish: [
      'Agar aap duniya mein achhaai dhoondhne niklenge har subah uthkar',
      'To har saadhaaran din mein bhi koi na koi khushi mil hi jaayegi',
    ],
    linesEnglish: [
      'Step outside each morning looking quietly for small acts of goodness',
      'And even unremarkable days hand you genuine reasons to feel grateful',
    ],
  },
  {
    title: 'मन की थकान उतारने वाली रात',
    titleEnglish: 'Night Unloading Tired Thoughts',
    linesHindi: [
      'आज जो भी अधूरा रह गया उस पर ज़्यादा परेशान मत होना यार',
      'चाँद भी आधा होकर भी पूरे आसमान को खूबसूरती देता है',
    ],
    linesHinglish: [
      'Aaj jo bhi adhoora reh gaya us par zyada pareshaan mat hona yaar',
      'Chaand bhi aadha hokar bhi poore aasmaan ko khoobsurati deta hai',
    ],
    linesEnglish: [
      'Do not fret harshly tonight over small chores left half-finished',
      'Even a crescent half-moon still graces the entire midnight sky',
    ],
  },
  {
    title: 'अपनत्व का छोटा सा स्पर्श',
    titleEnglish: 'Small Touch of Real Warmth',
    linesHindi: [
      'किसी के दुःख में बैठकर सिर्फ़ चुपचाप उसका हाथ थाम लेना',
      'दुनिया की सबसे बड़ी दिलासा से भी कहीं ज़्यादा ताक़तवर होता है',
    ],
    linesHinglish: [
      'Kisi ke dukh mein baithkar sirf chupchaap uska haath thaam lena',
      'Duniya ki sabse badi dilaasa se bhi kahin zyada taaqatwar hota hai',
    ],
    linesEnglish: [
      'Sitting quietly beside someone hurting while holding their hand steady',
      'Holds deeper healing power than the grandest speech ever delivered',
    ],
  },
  {
    title: 'प्यार भरा आत्मसम्मान',
    titleEnglish: 'Loving Respect for Yourself',
    linesHindi: [
      'दूसरों से प्यार की भीख माँगने से कहीं बेहतर है मेरे दोस्त',
      'अपने ही चेहरे को आईने में देखकर मुस्कुराना सीख लिया जाए',
    ],
    linesHinglish: [
      'Doosron se pyar ki bheekh maangne se kahin behtar hai mere dost',
      'Apne hi chehre ko aaine mein dekhkar muskuraana seekh liya jaaye',
    ],
    linesEnglish: [
      'Far wiser than chasing breadcrumbs of affection from indifferent hands',
      'Is learning to look warmly at your own reflection and smile first',
    ],
  },
  {
    title: 'सपनों के प्रति कोमल विश्वास',
    titleEnglish: 'Gentle Faith Inside Quiet Dreams',
    linesHindi: [
      'धीमे-धीमे ही सही पर अगर दिशा सही चुनी है आपने रास्ते की',
      'तो एक दिन मंज़िल आपकी मेहनत के आगे झुककर सलाम करेगी',
    ],
    linesHinglish: [
      'Dheeme-dheeme hi sahi par agar disha sahi chuni hai aapne raaste ki',
      'To ek din manzil aapki mehnat ke aage jhukkar salaam karegi',
    ],
    linesEnglish: [
      'Even advancing step by quiet step, provided your compass points true',
      'One bright morning every summit ahead bows down to your persistence',
    ],
  },
  {
    title: 'दिल को छू जाने वाली अंतिम सीख',
    titleEnglish: 'Lasting Lesson Touching Every Heart',
    linesHindi: [
      'बड़ा बनने की दौड़ में बस इतना याद रखना हर क़दम पर',
      'अच्छा इंसान बने रहना हर ताज और हर पद से ऊपर होता है',
    ],
    linesHinglish: [
      'Bada banne ki daud mein bas itna yaad rakhna har kadam par',
      'Achha insaan bane rehna har taaj aur har pad se oopar hota hai',
    ],
    linesEnglish: [
      'Amidst every race to climb higher across crowded ladders of life',
      'Remaining a genuinely good human outranks every crown and title',
    ],
  },
];

export const UNIQUE_HEART_TOUCHING_170 = buildUniqueShayaris(
  'heart-touching',
  'Heart Touching Shayari (हार्ट टचिंग शायरी)',
  '💗',
  31,
  HEART_TOUCHING_ENTRIES
);
