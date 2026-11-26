import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const FUNNY_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'सुबह का अलार्म और नींद का प्यार',
    titleEnglish: 'Morning Alarm vs True Love for Sleep',
    linesHindi: [
      'सुबह छह बजे का अलार्म बजाकर खुद को बहुत होशियार समझता हूँ रोज़',
      'फिर स्नूज़ बटन दबाते हुए रजाई कहती है—बस पाँच मिनट और मेरे दोस्त',
    ],
    linesHinglish: [
      'Subah chheh baje ka alarm bajaakar khud ko bahut hoshiyaar samajhta hoon roz',
      'Phir snooze button dabaate hue rajaai kehti hai—bas paanch minute aur mere dost',
    ],
    linesEnglish: [
      'I set a proud six a.m. alarm acting like some disciplined morning hero',
      'Then hit snooze twice while warm blankets whisper—just five more minutes pal',
    ],
  },
  {
    title: 'डाइटिंग का पहला सोमवार',
    titleEnglish: 'First Monday of Strict Dieting',
    linesHindi: [
      'आज से बिल्कुल तेल-मिठाई बंद, यह कसम सुबह बड़े जोश से खाई थी',
      'शाम को समोसा देखते ही सारा डाइट प्लान अगले सोमवार पर टाल दिया',
    ],
    linesHinglish: [
      'Aaj se bilkul tel-mithaai band, yeh kasam subah bade josh se khaayi thi',
      'Shaam ko samosa dekhte hi saara diet plan agle somwaar par taal diya',
    ],
    linesEnglish: [
      'Zero fried snacks starting today—I swore boldly over breakfast oats',
      'One whiff of hot samosas by five p.m. moved my diet cleanly to next Monday',
    ],
  },
  {
    title: 'महीने के अंत वाला बटुआ',
    titleEnglish: 'Wallet Reality on Month End',
    linesHindi: [
      'तारीख़ एक को जेब देखकर लगता है जैसे पूरा बाज़ार ही खरीद लें आज',
      'और पच्चीस तारीख़ आते ही फ़ोन में सिर्फ़ ओटीपी के मैसेज आते हैं',
    ],
    linesHinglish: [
      'Taareekh ek ko jeb dekhkar lagta hai jaise poora baazaar hi khareed lein aaj',
      'Aur pachhees taareekh aate hi phone mein sirf OTP ke message aate hain',
    ],
    linesEnglish: [
      'On payday first I check my balance feeling ready to buy the mall',
      'By the twenty-fifth my bank texts consist solely of tiny login OTPs',
    ],
  },
  {
    title: 'चाय प्रेमी की असली दवाई',
    titleEnglish: 'Real Medicine of Chai Lovers',
    linesHindi: [
      'सिर दर्द हो, बारिश हो या किसी दोस्त की शादी का लंबा कार्ड आया हो',
      'हमारे हर मर्ज़ की एक ही सरकारी दवा है—अदरक वाली कड़क चाय',
    ],
    linesHinglish: [
      'Sir dard ho, baarish ho ya kisi dost ki shaadi ka lamba card aaya ho',
      'Hamaare har marz ki ek hi sarkaari dawa hai—adrak waali kadak chai',
    ],
    linesEnglish: [
      'Headache, rainstorms, or surviving a three-hour neighborhood gossip session',
      'Every life problem shares one universal prescription—strong spiced ginger tea',
    ],
  },
  {
    title: 'जिम की सालाना सदस्यता',
    titleEnglish: 'Annual Gym Membership Reality',
    linesHindi: [
      'नए साल के जोश में पूरे साल की जिम फ़ीस एक साथ भर दी थी मैंने',
      'अब ट्रेनर भी फोन करके पूछता है—भाई ज़िंदा हो या सिर्फ़ फ़ोटो खिंचवानी थी',
    ],
    linesHinglish: [
      'Naye saal ke josh mein poore saal ki gym fees ek saath bhar di thi maine',
      'Ab trainer bhi phone karke poochhta hai—bhai zinda ho ya sirf photo khinchwaani thi',
    ],
    linesEnglish: [
      'Pumped with January hype I paid upfront for a full twelve-month gym pass',
      'Now even my trainer texts checking if I survived past the mirror selfie',
    ],
  },
  {
    title: 'सच्चे दोस्त की उधारी',
    titleEnglish: 'Best Friend Loan Repayment Plan',
    linesHindi: [
      'दोस्त ने कहा था—बस दो दिन के लिए दे दे भाई, तुरंत लौटा दूँगा',
      'अब छह महीने बाद मिला तो पूछता है—चाय के पैसे तू दे रहा है न',
    ],
    linesHinglish: [
      'Dost ne kaha tha—bas do din ke liye de de bhai, turant lauta doonga',
      'Ab chheh mahine baad mila to poochhta hai—chai ke paise tu de raha hai na',
    ],
    linesEnglish: [
      'Bro promised—spot me cash till Friday, I swear I will send it straight back',
      'Six months later he asks casually—so you are picking up today’s chai tab right',
    ],
  },
  {
    title: 'वाई-फाई बंद होते ही घर में एकता',
    titleEnglish: 'Family Unity When Wi-Fi Drops',
    linesHindi: [
      'जब तक राउटर की हरी बत्ती जलती है, सब अपने कमरों में व्यस्त दिखते हैं',
      'वाई-फाई बंद होते ही पूरा परिवार एक हॉल में बैठकर हालचाल पूछता है',
    ],
    linesHinglish: [
      'Jab tak router ki hari batti jalti hai, sab apne kamron mein vyast dikhte hain',
      'Wi-Fi band hote hi poora parivaar ek hall mein baithkar haalchaal poochhta hai',
    ],
    linesEnglish: [
      'While router lights blink steady green everyone hides solo in separate rooms',
      'The second Wi-Fi drops, the whole family gathers warmly asking how life goes',
    ],
  },
  {
    title: 'शादी में फ्री का गुलाब जामुन',
    titleEnglish: 'Targeting Free Gulab Jamun at Weddings',
    linesHindi: [
      'दूल्हे का नाम याद हो न हो, पर शादी का कार्ड मिलते ही तैयार हो जाते हैं',
      'क्योंकि हम रिश्ते निभाने से ज़्यादा गरम गुलाब जामुन की कद्र करते हैं',
    ],
    linesHinglish: [
      'Doolhe ka naam yaad ho na ho, par shaadi ka card milte hi taiyaar ho jaate hain',
      'Kyunki hum rishte nibhaane se zyada garam gulab jamun ki kadr karte hain',
    ],
    linesEnglish: [
      'Whether we recall the groom’s name or not, wedding invites trigger instant suits',
      'Nothing builds community spirit quite like fresh steaming gulab jamuns',
    ],
  },
  {
    title: 'सोमवार की सुबह वाला चेहरा',
    titleEnglish: 'Monday Morning Office Face',
    linesHindi: [
      'रविवार की रात ग्यारह बजे तक सब कुछ बहुत हसीन लगता है दुनिया में',
      'सोमवार सुबह साढ़े आठ बजे आईने में एक मासूम सा इंसान रोता दिखता है',
    ],
    linesHinglish: [
      'Raviwaar ki raat gyaarah baje tak sab kuch bahut haseen lagta hai duniya mein',
      'Somwaar subah saadhe aath baje aaine mein ek maasoom sa insaan rota dikhta hai',
    ],
    linesEnglish: [
      'Up until eleven Sunday night life glows peaceful, golden, and bright',
      'Come eight-thirty Monday morning the mirror reflects pure tragic comedy',
    ],
  },
  {
    title: 'मोबाइल बैटरी एक प्रतिशत पर दौड़',
    titleEnglish: 'Sprint When Phone Hits One Percent',
    linesHindi: [
      'जिंदगी में इतनी तेज़ी से तो कोई ओलंपिक खिलाड़ी भी नहीं दौड़ा होगा',
      'जितनी तेज़ हम दो प्रतिशत बैटरी देखकर चार्जर की ओर भागते हैं',
    ],
    linesHinglish: [
      'Zindagi mein itni tezi se to koi Olympic khiladi bhi nahin dauda hoga',
      'Jitni tez hum do pratishat battery dekhkar charger ki or bhaagte hain',
    ],
    linesEnglish: [
      'No Olympic sprinter ever launched out of blocks faster than us',
      'Sprinting across living rooms spotting two percent battery without a charger',
    ],
  },
  {
    title: 'माँ की चप्पल का रडार',
    titleEnglish: 'Precision Radar of Mom’s Slipper',
    linesHindi: [
      'दुनिया की सबसे सटीक मिसाइल तकनीक भी अभी तक फेल रही है यारो',
      'मम्मी के गुस्से और उड़ती हुई चप्पल के निशाने के सामने हर बार',
    ],
    linesHinglish: [
      'Duniya ki sabse sateek missile takneek bhi abhi tak fail rahi hai yaaro',
      'Mummy ke gusse aur udti hui chappal ke nishaane ke saamne har baar',
    ],
    linesEnglish: [
      'Modern GPS guidance still bows respectfully in quiet defeat',
      'Before Mom’s pinpoint radar aiming a flying slipper around hallway corners',
    ],
  },
  {
    title: 'ऑनलाइन शॉपिंग का पार्सल',
    titleEnglish: 'Excitement Over Online Parcel Arrival',
    linesHindi: [
      'मम्मी ने कहा पैसे बचाओ, मैंने भी सिर हिलाकर पूरा भरोसा दिलाया उन्हें',
      'तभी बाहर डिलीवरी भैया ने तीन नए पार्सल की घंटी बजा दी',
    ],
    linesHinglish: [
      'Mummy ne kaha paise bachaao, maine bhi sir hilaakar poora bharosa dilaaya unhein',
      'Tabhi baahar delivery bhaiya ne teen naye parcel ki ghanti baja di',
    ],
    linesEnglish: [
      'Mom urged saving cash and I nodded sincerely promising tight budgets',
      'Right then the doorbell chimed loudly announcing three flash-sale boxes',
    ],
  },
  {
    title: 'पढ़ाई शुरू करने से पहले की सफाई',
    titleEnglish: 'Cleaning Room Instead of Studying',
    linesHindi: [
      'किताब खोलते ही अचानक अलमारी जमाने की बहुत तेज़ इच्छा जाग जाती है',
      'परीक्षा से ठीक एक रात पहले मैं पूरा घर चमकाकर सो जाता हूँ',
    ],
    linesHinglish: [
      'Kitaab kholte hi achaanak almaari jamaane ki bahut tez ichha jaag jaati hai',
      'Pareeksha se theek ek raat pehle main poora ghar chamkaakar so jaata hoon',
    ],
    linesEnglish: [
      'Opening thick textbooks magically sparks sudden urges to organize drawers',
      'The night before finals I leave closets spotless and collapse straight asleep',
    ],
  },
  {
    title: 'मच्छर से रात भर की जंग',
    titleEnglish: 'Midnight Duel With One Mosquito',
    linesHindi: [
      'लाइट बंद करते ही कान के पास आकर सुरीला गाना सुनाने लगता है वह',
      'और बत्ती जलाते ही मच्छर ऐसे गायब होता है जैसे कभी था ही नहीं',
    ],
    linesHinglish: [
      'Light band karte hi kaan ke paas aakar sureela gaana sunaane lagta hai woh',
      'Aur batti jalaate hi machhar aise gaayab hota hai jaise kabhi tha hi nahin',
    ],
    linesEnglish: [
      'The instant bedroom lights click off, one mosquito starts humming opera beside my ear',
      'Flip lamps back bright and it vanishes clean like a master illusionist',
    ],
  },
  {
    title: 'सैलून वाले भैया का कटर',
    titleEnglish: 'Barber Turning Slight Trim Into Short',
    linesHindi: [
      'मैंने बड़े प्यार से कहा था—भैया बस साइड से हल्के-हल्के छोटे करना',
      'पाँच मिनट बाद आईने में किसी फौजी भर्ती का दृश्य दिखा दिया उन्होंने',
    ],
    linesHinglish: [
      'Maine bade pyar se kaha tha—bhaiya bas side se halke-halke chhote karna',
      'Paanch minute baad aaine mein kisi fauji bharti ka drishya dikha diya unhonne',
    ],
    linesEnglish: [
      'I politely requested—just trim half an inch neatly around the ears please',
      'Five minutes later the mirror revealed full military boot-camp buzz',
    ],
  },
  {
    title: 'दोस्त के पास हमेशा की स्कीम',
    titleEnglish: 'Friend Always Bringing Wild Plans',
    linesHindi: [
      'हर ग्रुप में एक ऐसा यार ज़रूर होता है जो गोवा जाने का प्लान बनाता है',
      'और खुद अगले दिन मम्मी ने मना कर दिया कहकर घर पर सोता मिलता है',
    ],
    linesHinglish: [
      'Har group mein ek aisa yaar zaroor hota hai jo Goa jaane ka plan banaata hai',
      'Aur khud agle din mummy ne mana kar diya kehkar ghar par sota milta hai',
    ],
    linesEnglish: [
      'Every friend group includes one hype master pitching epic beach road trips',
      'Who drops out by noon claiming Mom grounded him before packing started',
    ],
  },
  {
    title: 'पत्नी या मम्मी से बहस का नतीजा',
    titleEnglish: 'Result of Arguing With Mom',
    linesHindi: [
      'जब सारा तर्क खत्म हो जाए और घर में कोई जवाब न सूझे सामने से',
      'तो समझदार लोग चुपचाप धनिया लाने बाज़ार की ओर निकल पड़ते हैं',
    ],
    linesHinglish: [
      'Jab saara tark khatam ho jaaye aur ghar mein koi jawaab na soojhe saamne se',
      'To samajhdaar log chupchaap dhaniya laane baazaar ki or nikal padte hain',
    ],
    linesEnglish: [
      'When logic runs empty mid-debate inside the kitchen at Sunday lunch',
      'Wise veterans grab grocery totes quietly heading out for fresh cilantro',
    ],
  },
  {
    title: 'गोलगप्पे के साथ सूखी पापड़ी',
    titleEnglish: 'Waiting for Free Extra Papdi',
    linesHindi: [
      'चाहे बिल दो सौ का हो या पचास का, दिल उसी एक पल का इंतज़ार करता है',
      'जब भैया आखिरी गोलगप्पे के बाद हाथ में एक सूखी पापड़ी धर देते हैं',
    ],
    linesHinglish: [
      'Chaahe bill do sau ka ho ya pachaas ka, dil usi ek pal ka intezaar karta hai',
      'Jab bhaiya aakhiri golgappe ke baad haath mein ek sookhi paapdi dhar dete hain',
    ],
    linesEnglish: [
      'Whether the street snack tab hits fifty rupees or two hundred',
      'True joy peaks only when the vendor hands over that bonus crisp papdi',
    ],
  },
  {
    title: 'मेहमान के जाते ही नमकीन पर हमला',
    titleEnglish: 'Raiding Snacks Once Guests Leave',
    linesHindi: [
      'मेहमानों के सामने तो हम बड़े शरीफ बनकर बिस्कुट को छूते भी नहीं हैं',
      'गेट बंद होते ही भाई-बहन काजू-किशमिश के लिए युद्ध छेड़ देते हैं',
    ],
    linesHinglish: [
      'Mehmaanon ke saamne to hum bade shareef bankar biscuit ko chhoote bhi nahin hain',
      'Gate band hote hi bhai-behen kaaju-kishmish ke liye yuddh chhed dete hain',
    ],
    linesEnglish: [
      'In front of visiting guests we sit angelic ignoring the cookie tray completely',
      'The second the front gate latches, siblings sprint raiding every cashew left',
    ],
  },
  {
    title: 'खुद पर हँसने का मज़ेदार हुनर',
    titleEnglish: 'Art of Laughing at Own Silly Self',
    linesHindi: [
      'जो इंसान अपनी ही नादानियों पर खुलकर हँस लेना सीख जाता है यार',
      'दुनिया का कोई भी टेंशन उसके आगे दो मिनट ज़्यादा टिक नहीं पाता',
    ],
    linesHinglish: [
      'Jo insaan apni hi naadaaniyon par khulkar hans lena seekh jaata hai yaar',
      'Duniya ka koi bhi tension uske aage do minute zyada tik nahin paata',
    ],
    linesEnglish: [
      'Anyone mastering the fine art of chuckling at their own goofy blunders',
      'Leaves gloomy stress completely unemployed inside their living room',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'रात के दो बजे का फ्रिज दर्शन',
    titleEnglish: 'Two A.M. Fridge Inspection',
    linesHindi: [
      'भूख न भी हो तब भी आधी रात को फ्रिज का दरवाज़ा खुलता ही है घर में',
      'जैसे कोई नया खज़ाना दो घंटे पहले अपने आप अंदर प्रकट हो गया हो',
    ],
    linesHinglish: [
      'Bhookh na bhi ho tab bhi aadhi raat ko fridge ka darwaaza khulta hi hai ghar mein',
      'Jaise koi naya khazaana do ghante pehle apne aap andar prakat ho gaya ho',
    ],
    linesEnglish: [
      'Even completely full, I swing the refrigerator door wide at two a.m.',
      'Half expecting gourmet snacks to have magically spawned since eleven',
    ],
  },
  {
    title: 'ग्रुप प्रोजेक्ट का अकेला योद्धा',
    titleEnglish: 'Solo Warrior of Group Projects',
    linesHindi: [
      'कॉलेज के पांच लोगों वाले प्रोजेक्ट में काम तो वही पुराना चलता है रोज़',
      'एक बेचारा रात भर स्लाइड बनाता है, बाकी चार सुबह फ़ॉन्ट बदलते हैं',
    ],
    linesHinglish: [
      'College ke paanch logon waale project mein kaam to wahi puraana chalta hai roz',
      'Ek bechaara raat bhar slide banaata hai, baaki chaar subah font badalte hain',
    ],
    linesEnglish: [
      'Five-member college assignments follow nature’s exact timeless law',
      'One soul builds forty slides all night while four pick the title color at nine',
    ],
  },
  {
    title: 'फुर्सत में गूगल डॉक्टर बनना',
    titleEnglish: 'Checking Mild Sneeze Online',
    linesHindi: [
      'हल्की सी छींक आने पर इंटरनेट पर लक्षण डालकर देख लेना कभी मत करना',
      'दो मिनट में स्क्रीन बताती है कि अब वसीयत लिखने का वक़्त आ गया है',
    ],
    linesHinglish: [
      'Halki si chheenk aane par internet par lakshan daalkar dekh lena kabhi mat karna',
      'Do minute mein screen bataati hai ki ab wasiyat likhne ka waqt aa gaya hai',
    ],
    linesEnglish: [
      'Never search one tiny afternoon sneeze on late-night medical pages',
      'Within three clicks your browser recommends drafting a final will',
    ],
  },
  {
    title: 'संडे को कपड़े धोने का आलस',
    titleEnglish: 'Sunday Laundry Mountain Drama',
    linesHindi: [
      'हफ़्ते भर कुर्सी पर कपड़ों का पहाड़ खड़ा रहता है किसी क़िले की तरह',
      'रविवार शाम मम्मी की डाँट पड़ते ही पांच मिनट में अलमारी भर जाती है',
    ],
    linesHinglish: [
      'Hafte bhar kursi par kapdon ka pahaad khada rehta hai kisi kile ki tarah',
      'Raviwaar shaam mummy ki daant padte hi paanch minute mein almaari bhar jaati hai',
    ],
    linesEnglish: [
      'All week laundry builds a proud fortress atop the bedroom desk chair',
      'One sharp Sunday warning from Mom folds the entire mountain in four minutes',
    ],
  },
  {
    title: 'तस्वीर खिंचवाते वक़्त पेट अंदर',
    titleEnglish: 'Pulling Stomach In for Photos',
    linesHindi: [
      'जैसे ही कोई दोस्त कह दे—भाई एक अच्छी सी ग्रुप फ़ोटो लेते हैं अभी',
      'आधी महफ़िल पाँच सेकंड के लिए साँस रोककर पेट अंदर खींच लेती है',
    ],
    linesHinglish: [
      'Jaise hi koi dost keh de—bhai ek achhi si group photo lete hain abhi',
      'Aadhi mehfil paanch second ke liye saans rokkar pet andar kheench leti hai',
    ],
    linesEnglish: [
      'The instant somebody yells—hey everybody squeeze in for a group snap',
      'Half the room holds their breath sucking stomachs flat for five straight seconds',
    ],
  },
  {
    title: 'पड़ोसी के वाई-फाई की उम्मीद',
    titleEnglish: 'Hoping for Neighbor Free Wi-Fi',
    linesHindi: [
      'नए घर में शिफ्ट होते ही सबसे पहले पासवर्ड की तलाश शुरू होती है',
      'जब पड़ोसी भी स्मार्ट निकले और नाम रख दे—खुद का लगवा ले भाई',
    ],
    linesHinglish: [
      'Naye ghar mein shift hote hi sabse pehle password ki talaash shuru hoti hai',
      'Jab padosi bhi smart nikle aur naam rakh de—khud ka lagwa le bhai',
    ],
    linesEnglish: [
      'First ritual unpacking in a new apartment means scanning open Wi-Fi bars',
      'Until the clever neighbor names theirs—buy your own router buddy',
    ],
  },
  {
    title: 'स्कूल के दिनों का झूठा बुख़ार',
    titleEnglish: 'Fake Morning Fever on Exam Day',
    linesHindi: [
      'गणित के पेपर वाले दिन सुबह अचानक माथा गरम लगने लगता था मुझे',
      'पर थर्मामीटर देखते ही बुख़ार भी डरकर चुपचाप भाग जाता था कमरे से',
    ],
    linesHinglish: [
      'Ganit ke paper waale din subah achaanak maatha garam lagne lagta tha mujhe',
      'Par thermometer dekhte hi bukhaar bhi darkar chupchaap bhaag jaata tha kamre se',
    ],
    linesEnglish: [
      'Sudden mysterious forehead warmth always struck right on algebra quiz mornings',
      'Yet one glimpse of Mom’s glass thermometer cured it instantly flat',
    ],
  },
  {
    title: 'चाय की केतली और दो दोस्तों की बहस',
    titleEnglish: 'World Politics Solved Over Two Teas',
    linesHindi: [
      'दो दोस्त जब शाम को नुक्कड़ की चाय की दुकान पर मिल बैठते हैं साथ',
      'तो बीस मिनट में क्रिकेट टीम से लेकर पूरी दुनिया की नीति बदल देते हैं',
    ],
    linesHinglish: [
      'Do dost jab shaam ko nukkad ki chai ki dukaan par mil baithte hain saath',
      'To bees minute mein cricket team se lekar poori duniya ki neeti badal dete hain',
    ],
    linesEnglish: [
      'Park two best buddies at a street tea stall with five-rupee paper cups',
      'Inside twenty minutes they fix national lineups and global treaties alike',
    ],
  },
  {
    title: 'मॉल की खिड़की में टैग देखना',
    titleEnglish: 'Checking Price Tags Quietly in Mall',
    linesHindi: [
      'बड़े शोरूम में जैकेट पहनकर शीशे के सामने बड़े हीरो बन जाते हैं पहले',
      'फिर चुपके से प्राइस टैग देखकर कहते हैं—भैया इसका रंग थोड़ा हल्का है',
    ],
    linesHinglish: [
      'Bade showroom mein jacket pehankar sheeshe ke saamne bade hero ban jaate hain pehle',
      'Phir chupke se price tag dekhkar kehte hain—bhaiya iska rang thoda halka hai',
    ],
    linesEnglish: [
      'Trying on sleek jackets in fancy boutiques feels completely glamorous first',
      'Peeking quietly at the price tag brings—actually the shade feels slightly off',
    ],
  },
  {
    title: 'फ़ोन पर लंबा भाषण, आमने-सामने चुप्पी',
    titleEnglish: 'Brave in Group Chat, Quiet In Person',
    linesHindi: [
      'व्हाट्सऐप ग्रुप में तो शेर की तरह दस पैराग्राफ़ लिख देते हैं लोग',
      'आमने-सामने मिलते ही बस मुस्कुराकर कहते हैं—और सब बढ़िया चल रहा न',
    ],
    linesHinglish: [
      'WhatsApp group mein to sher ki tarah das paragraph likh dete hain log',
      'Aamne-saamne milte hi bas muskuraakar kehte hain—aur sab badhiya chal raha na',
    ],
    linesEnglish: [
      'Keyboard lions fire ten fiery paragraphs straight into family chats',
      'In person over tea they grin politely saying—so weather stays nice huh',
    ],
  },
  {
    title: 'कपड़ों की अलमारी का बड़ा झूठ',
    titleEnglish: 'Full Wardrobe With Nothing to Wear',
    linesHindi: [
      'अलमारी खोलते ही इतने कपड़े ऊपर गिरते हैं कि दो लोग दब जाएँ नीचे',
      'फिर भी पार्टी में जाने से पहले हर कोई कहता है—मेरे पास कुछ नया ही नहीं',
    ],
    linesHinglish: [
      'Almaari kholte hi itne kapde oopar girte hain ki do log dab jaayein neeche',
      'Phir bhi party mein jaane se pehle har koi kehta hai—mere paas kuch naya hi nahin',
    ],
    linesEnglish: [
      'Opening the closet sends an avalanche of shirts crashing onto the floor',
      'Still before dinner starts the sigh rings out—I literally own nothing to wear',
    ],
  },
  {
    title: 'नींद में चलने वाली मीटिंग',
    titleEnglish: 'Nodding Wise While Half Asleep',
    linesHindi: [
      'सुबह की ऑनलाइन मीटिंग में कैमरा बंद करके सिर हिलाते रहना कला है',
      'असली डर तब लगता है जब बॉस अचानक बोल दे—इस पर आपकी क्या राय है',
    ],
    linesHinglish: [
      'Subah ki online meeting mein camera band karke sir hilaate rehna kala hai',
      'Asli dar tab lagta hai jab boss achaanak bol de—is par aapki kya raay hai',
    ],
    linesEnglish: [
      'Keeping cameras muted during morning calls while half-napping is real art',
      'Pure panic strikes when the manager suddenly asks—what are your thoughts on that',
    ],
  },
  {
    title: 'रसोई में अदरक की खोज',
    titleEnglish: 'Hunting Ginger Lost Inside Fridge',
    linesHindi: [
      'मैंने पूरा फ्रिज दस बार छान मारा पर नींबू कहीं नज़र नहीं आया मुझे',
      'मम्मी ने आकर ठीक सामने की टोकरी से निकालकर पूछा—आँखें बंद थीं क्या',
    ],
    linesHinglish: [
      'Maine poora fridge das baar chhaan maara par neembu kahin nazar nahin aaya mujhe',
      'Mummy ne aakar theek saamne ki tokri se nikaalkar poochha—aankhein band thin kya',
    ],
    linesEnglish: [
      'I searched three fridge shelves twice insisting zero lemons existed indoors',
      'Mom reached dead center into the front tray asking—were your eyes shut',
    ],
  },
  {
    title: 'क्रिकेट मैच में मुफ्त की कोचिंग',
    titleEnglish: 'Living Room Cricket Coaching Experts',
    linesHindi: [
      'भले ही गली क्रिकेट में खुद पहली ही बॉल पर आउट होकर आए हों सुबह',
      'पर टीवी पर मैच देखते ही हर भारतीय कप्तान से ज़्यादा होशियार बन जाता है',
    ],
    linesHinglish: [
      'Bhale hi gali cricket mein khud pehli hi ball par out hokar aaye hon subah',
      'Par TV par match dekhte hi har Bhaartiya kaptaan se zyada hoshiyaar ban jaata hai',
    ],
    linesEnglish: [
      'Despite getting bowled on ball one down the alley before lunch',
      'Facing the living room TV turns every viewer into an elite national coach',
    ],
  },
  {
    title: 'शाम को पढ़ने का पक्का इरादा',
    titleEnglish: 'Evening Study Plan That Sleeps',
    linesHindi: [
      'आज शाम पाँच बजे से तीन घंटे लगातार पढ़ाई होगी—ऐसा तय किया था',
      'घड़ी में पाँच बजकर दो मिनट देख कर सोचा अब तो छह से ही बैठूँगा सीधे',
    ],
    linesHinglish: [
      'Aaj shaam paanch baje se teen ghante lagaataar padhaai hogi—aisa tay kiya tha',
      'Ghadi mein paanch bajkar do minute dekh kar socha ab to chheh se hi baithoonga seedhe',
    ],
    linesEnglish: [
      'Sharp at five p.m. I launch three solid focus hours—that was the vow',
      'Seeing five-oh-two on the clock means clearly waiting cleanly till six sharp',
    ],
  },
  {
    title: 'मोबाइल में खोई हुई नज़र',
    titleEnglish: 'Walking Straight Into Sofa While Texting',
    linesHindi: [
      'रील्स स्क्रॉल करते हुए जब कोई कमरे में बड़े ध्यान से चलता रहता है',
      'तब पैर की छोटी उँगली मेज़ के कोने से टकराकर सारा ज्ञान दे देती है',
    ],
    linesHinglish: [
      'Reels scroll karte hue jab koi kamre mein bade dhyaan se chalta rehta hai',
      'Tab pair ki chhoti ungli mez ke kone se takraakar saara gyaan de deti hai',
    ],
    linesEnglish: [
      'Strolling indoors completely glued to endless scrolling video feeds',
      'Ends swiftly when your pinky toe introduces itself to the coffee table leg',
    ],
  },
  {
    title: 'दोस्त की शादी में फ्री डांसर',
    titleEnglish: 'Unstoppable Dance at Best Friend Wedding',
    linesHindi: [
      'आम दिनों में पैर हिलाने में भी बहुत शर्म आती है महफ़िल के अंदर',
      'पर यार की बारात में नागिन डांस के बिना खाना हज़म नहीं होता हमें',
    ],
    linesHinglish: [
      'Aam dinon mein pair hilaane mein bhi bahut sharm aati hai mehfil ke andar',
      'Par yaar ki baaraat mein naagin dance ke bina khaana hazam nahin hota humein',
    ],
    linesEnglish: [
      'Normally I act way too shy to tap one foot near any dance floor',
      'At my best friend’s wedding parade, wild floor moves become mandatory duty',
    ],
  },
  {
    title: 'आखिरी दिन की तैयारी का कमाल',
    titleEnglish: 'Power of Last-Night Exam Hustle',
    linesHindi: [
      'साल भर तो किताब पर रखी धूल भी चैन से सोती रहती है किनारे',
      'पेपर से पहले वाली रात में हम पूरा सिलेबस तीन घंटे में निगल जाते हैं',
    ],
    linesHinglish: [
      'Saal bhar to kitaab par rakhi dhool bhi chain se soti rehti hai kinaare',
      'Paper se pehle waali raat mein hum poora syllabus teen ghante mein nigal jaate hain',
    ],
    linesEnglish: [
      'Nine whole months dust naps peacefully atop untouched study binders',
      'Midnight before finals unlocks superpowers absorbing six chapters by dawn',
    ],
  },
  {
    title: 'छुट्टी वाले दिन की तेज़ नींद',
    titleEnglish: 'Early Wakeup Only on Sunday',
    linesHindi: [
      'दफ़्तर जाने वाले दिन तो चार अलार्म भी जगाने में थक जाते हैं हमें',
      'और रविवार को बिना किसी काम के सुबह छह बजे आँखें खुल जाती हैं खुद',
    ],
    linesHinglish: [
      'Daftar jaane waale din to chaar alarm bhi jagaane mein thak jaate hain humein',
      'Aur raviwaar ko bina kisi kaam ke subah chheh baje aankhein khul jaati hain khud',
    ],
    linesEnglish: [
      'Workdays require four ringing alarms plus cold splashes just to blink',
      'Sunday morning pops my eyes wide open at six-fifteen with zero agenda',
    ],
  },
  {
    title: 'रिश्तेदारों के मीठे सवाल',
    titleEnglish: 'Classic Questions From Visiting Relatives',
    linesHindi: [
      'जैसे ही किसी पारिवारिक समारोह में पैर रखो बड़े सम्मान से आकर',
      'अंकल आते ही पूछते हैं—बेटा आगे क्या सोचा है, पैकेज कितना चल रहा है',
    ],
    linesHinglish: [
      'Jaise hi kisi paarivaarik samaaroh mein pair rakho bade sammaan se aakar',
      'Uncle aate hi poochhte hain—beta aage kya socha hai, package kitna chal raha hai',
    ],
    linesEnglish: [
      'Barely three minutes after arriving politely at any family gathering',
      'An uncle corners your plate asking—so what is your exact salary lately',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'होटल के मेन्यू कार्ड का डर',
    titleEnglish: 'Reading Right Side of Fancy Menu',
    linesHindi: [
      'बड़े रेस्टोरेंट में हम खाने की डिश के नाम से पहले दायाँ कोना देखते हैं',
      'जहाँ कीमत कम दिखे वहीं अँगुली रखकर कहते हैं—यह आज की स्पेशल लगती है',
    ],
    linesHinglish: [
      'Bade restaurant mein hum khaane ki dish ke naam se pehle daayaan kona dekhte hain',
      'Jahaan keemat kam dikhe wahin anguli rakhkar kehte hain—yeh aaj ki special lagti hai',
    ],
    linesEnglish: [
      'Inside upscale restaurants my eyes scan the right column before ingredients',
      'Pointing smoothly at the friendliest number saying—this looks like house specialty',
    ],
  },
  {
    title: 'नए जूते और बारिश की साजिश',
    titleEnglish: 'Fresh White Sneakers Inviting Rain',
    linesHindi: [
      'साल भर सूखा पड़ा रहे तो भी कोई बादल नज़र नहीं आता आसमान में कभी',
      'पर जिस दिन नए सफ़ेद जूते पहनकर निकलो, बारिश ज़रूर स्वागत करती है',
    ],
    linesHinglish: [
      'Saal bhar sookha pada rahe to bhi koi baadal nazar nahin aata aasmaan mein kabhi',
      'Par jis din naye safed joote pehankar niklo, baarish zaroor swaagat karti hai',
    ],
    linesEnglish: [
      'Months of bright dry sunshine roll smoothly past without a single cloud',
      'The exact morning you unbox fresh white sneakers, puddle season opens',
    ],
  },
  {
    title: 'मोबाइल सेल्फी और असली शक्ल',
    titleEnglish: 'Front Camera Reality Check',
    linesHindi: [
      'शीशे के सामने खड़े होकर खुद को किसी फ़िल्मी सितारे से कम नहीं समझते',
      'गलती से फ़्रंट कैमरा खुल जाए नीचे से, तो सारा घमंड उतर जाता है',
    ],
    linesHinglish: [
      'Sheeshe ke saamne khade hokar khud ko kisi filmi sitaare se kam nahin samajhte',
      'Galti se front camera khul jaaye neeche se, to saara ghamand utar jaata hai',
    ],
    linesEnglish: [
      'Bathroom mirrors gently whisper that I resemble a sleek movie star',
      'Accidentally opening the selfie camera at chin angle cures all vanity fast',
    ],
  },
  {
    title: 'दोस्त के घर की सख़्ती',
    titleEnglish: 'Acting Ultra Polite at Friend’s House',
    linesHindi: [
      'बाहर चाहे कितनी भी मस्ती और शोर-शराबा चलता रहे हम दोनों में',
      'पर दोस्त के पापा सामने दिखते ही हम संत महात्मा बन जाते हैं तुरंत',
    ],
    linesHinglish: [
      'Baahar chaahe kitni bhi masti aur shor-sharaaba chalta rahe hum dono mein',
      'Par dost ke papa saamne dikhte hi hum sant mahaatma ban jaate hain turant',
    ],
    linesEnglish: [
      'Outside we joke nonstop behaving like loud trouble on sneakers',
      'Step past his dad’s living room and both of us turn into saintly scholars',
    ],
  },
  {
    title: 'टूथपेस्ट के आखिरी दिन',
    titleEnglish: 'Squeezing Final Week Out of Toothpaste',
    linesHindi: [
      'नया ट्यूब लाने की जगह पूरी इंजीनियरिंग लगा देते हैं घर वाले रोज़',
      'बेलन से दबा-दबाकर टूथपेस्ट से पूरा एक महीना और निकाल लेते हैं',
    ],
    linesHinglish: [
      'Naya tube laane ki jagah poori engineering laga dete hain ghar waale roz',
      'Belan se daba-dabaakar toothpaste se poora ek mahina aur nikaal lete hain',
    ],
    linesEnglish: [
      'Instead of tossing an empty tube, real household engineering takes over',
      'Rolling pins squeeze another glorious three weeks cleanly out of plastic',
    ],
  },
  {
    title: 'हेडफोन लगाकर खामोश नाटक',
    titleEnglish: 'Wearing Headphones With No Music On',
    linesHindi: [
      'कई बार कान में हेडफ़ोन सिर्फ़ इसलिए लगाकर रखते हैं बस या सफर में',
      'ताकि बगल वाला बैठकर अपने मोहल्ले की पूरी कहानी न सुनाने लग जाए',
    ],
    linesHinglish: [
      'Kai baar kaan mein headphone sirf isiliye lagaakar rakhte hain bus ya safar mein',
      'Taaki bagal waala baithkar apne mohalle ki poori kahaani na sunaane lag jaaye',
    ],
    linesEnglish: [
      'Half the time headphones stay plugged tightly on trains with zero audio playing',
      'Purely as polite armor against seatmates reciting three hours of life drama',
    ],
  },
  {
    title: 'चश्मा सिर पर रखकर तलाश',
    titleEnglish: 'Searching Glasses Perched on Own Head',
    linesHindi: [
      'पूरी अलमारी, सोफ़ा और मेज़ छान मारी दस मिनट तक परेशान होकर',
      'भाई ने हँसकर कहा—ज़रा अपने सिर के ऊपर हाथ रखकर देख ले एक बार',
    ],
    linesHinglish: [
      'Poori almaari, sofa aur mez chhaan maari das minute tak pareshaan hokar',
      'Bhai ne hanskar kaha—zara apne sir ke oopar haath rakhkar dekh le ek baar',
    ],
    linesEnglish: [
      'Flipped cushions and desk drawers for ten whole stressed-out minutes',
      'Till my brother laughed pointing straight upward—try touching your hair buddy',
    ],
  },
  {
    title: 'सर्दियों में नहाने की बहादुरी',
    titleEnglish: 'Winter Shower Bravery',
    linesHindi: [
      'दिसंबर की ठंड में बाथरूम के दरवाज़े से आधा घंटा पानी से बात होती है',
      'फिर एक बाल्टी में से आधा मग छूकर ही खुद को विजेता घोषित कर देते हैं',
    ],
    linesHinglish: [
      'December ki thand mein bathroom ke darwaze se aadha ghanta paani se baat hoti hai',
      'Phir ek baalti mein se aadha mag chhookar hi khud ko vijeta ghoshit kar dete hain',
    ],
    linesEnglish: [
      'December mornings require twenty minutes negotiating quietly with cold taps',
      'Touching half a warm mug cheerfully earns a full cleanliness medal',
    ],
  },
  {
    title: 'मुफ़्त वाई-फ़ाई वाला कैफ़े',
    titleEnglish: 'One Coffee Lasting Four Hours',
    linesHindi: [
      'एक छोटी सी कॉफ़ी ऑर्डर करके पूरा लैपटॉप और चार्जर खोल लेते हैं मेज़ पर',
      'वेटर भी बार-बार पानी रखकर इशारा करता है—भाई अब किराया भी ले लें क्या',
    ],
    linesHinglish: [
      'Ek chhoti si coffee order karke poora laptop aur charger khol lete hain mez par',
      'Waiter bhi baar-baar paani rakhkar ishaara karta hai—bhai ab kiraaya bhi le lein kya',
    ],
    linesEnglish: [
      'Order one small Americano then unpack a laptop, charger, and full desk setup',
      'Four hours later the polite waiter whispers—shall I fetch monthly lease papers',
    ],
  },
  {
    title: 'सपने देखना बनाम हक़ीक़त',
    titleEnglish: 'Dreaming Travel vs Reality Couch',
    linesHindi: [
      'इंस्टाग्राम पर पहाड़ों की रील देखकर पूरा बैग मन ही मन पैक कर लेते हैं',
      'फिर जेब और छुट्टी देखकर कमरे का कूलर तेज़ करके लेट जाते हैं',
    ],
    linesHinglish: [
      'Instagram par pahaadon ki reel dekhkar poora bag mann hi mann pack kar lete hain',
      'Phir jeb aur chhutti dekhkar kamre ka cooler tez karke let jaate hain',
    ],
    linesEnglish: [
      'One mountain reel online mentally packs my boots, tent, and camera bag',
      'Checking leave balance and savings simply turns the bedroom fan higher',
    ],
  },
  {
    title: 'पत्नी से शॉपिंग की तारीख़',
    titleEnglish: 'Five-Minute Shopping Promise',
    linesHindi: [
      'मॉल जाते वक़्त हमेशा सुनने मिलता है—बस पाँच मिनट में निकल आएँगे बाहर',
      'तीन घंटे बाद पता चलता है कि अभी तो सिर्फ़ पहली दुकान का ट्रेलर था',
    ],
    linesHinglish: [
      'Mall jaate waqt hamesha sunne milta hai—bas paanch minute mein nikal aayenge baahar',
      'Teen ghante baad pata chalta hai ki abhi to sirf pehli dukaan ka trailer tha',
    ],
    linesEnglish: [
      'Leaving the parking lot brings the promise—just five quick minutes indoors',
      'Three hours later you learn store one was merely the opening trailer',
    ],
  },
  {
    title: 'सुबह की सैर और कचौड़ी',
    titleEnglish: 'Morning Walk Ending at Kachori',
    linesHindi: [
      'सेहत सुधारने के लिए सुबह पाँच बजे पार्क में तीन चक्कर लगाए थे बड़े जोश से',
      'वापस लौटते हुए बाहर गरम जलेबी-कचौड़ी खाकर सारा हिसाब बराबर कर दिया',
    ],
    linesHinglish: [
      'Sehat sudhaarne ke liye subah paanch baje park mein teen chakkar lagaaye the bade josh se',
      'Waapas laut-te hue baahar garam jalebi-kachori khaakar saara hisaab baraabar kar diya',
    ],
    linesEnglish: [
      'Briskly jogged three proud laps around the park track at six a.m.',
      'Stopped right outside the gate for hot kachori balancing math right back to zero',
    ],
  },
  {
    title: 'मोबाइल साइलेंट पर गुम',
    titleEnglish: 'Losing Silent Phone at Home',
    linesHindi: [
      'दुनिया का सबसे बड़ा रहस्य तब शुरू होता है जब फ़ोन साइलेंट पर खो जाए',
      'बाकी सब नंबर से रिंग कर-करके हम सोफ़े के नीचे कान लगाकर ढूँढते हैं',
    ],
    linesHinglish: [
      'Duniya ka sabse bada rahasya tab shuru hota hai jab phone silent par kho jaaye',
      'Baaki sab number se ring kar-karke hum sofe ke neeche kaan lagaakar dhoondhte hain',
    ],
    linesEnglish: [
      'Life’s ultimate thriller begins when a silent phone hides somewhere indoors',
      'Calling it from three backup numbers while pressing ears flat against couch cushions',
    ],
  },
  {
    title: 'लिफ़्ट का बटन दस बार दबाना',
    titleEnglish: 'Pressing Elevator Button Ten Times',
    linesHindi: [
      'सबको पता है कि एक बार बटन दबाने से भी लिफ़्ट उतनी ही तेज़ आएगी नीचे',
      'फिर भी जब तक पाँच बार न दबा लें, दिल को तसल्ली नहीं मिलती यार',
    ],
    linesHinglish: [
      'Sabko pata hai ki ek baar button dabaane se bhi lift utni hi tez aayegi neeche',
      'Phir bhi jab tak paanch baar na daba lein, dil ko tasalli nahin milti yaar',
    ],
    linesEnglish: [
      'Everyone knows one single tap summons the elevator at identical speed',
      'Yet pushing that glowing button six times feels weirdly productive anyway',
    ],
  },
  {
    title: 'बर्थडे पर केक बनाम चेहरा',
    titleEnglish: 'Cake Intended for Eating vs Face',
    linesHindi: [
      'पहले जन्मदिन पर लोग बड़े प्यार से केक खिलाते थे मुँह के अंदर',
      'आजकल यार लोग केक कम खरीदते हैं और चेहरे पर पोतने की तैयारी ज़्यादा करते हैं',
    ],
    linesHinglish: [
      'Pehle janmdin par log bade pyar se cake khilaate the munh ke andar',
      'Aajkal yaar log cake kam khareedte hain aur chehre par potne ki taiyaari zyada karte hain',
    ],
    linesEnglish: [
      'Birthdays once involved slicing cake politely onto paper plates with forks',
      'Modern best friends order frosting strictly as full facial spa treatment',
    ],
  },
  {
    title: 'ट्रैफ़िक सिग्नल का एक सेकंड',
    titleEnglish: 'Honking One Millisecond After Green',
    linesHindi: [
      'हरी बत्ती जलने में अभी आधा सेकंड बाकी रहता है चौराहे पर सामने',
      'पीछे वाला ऐसे हॉर्न बजाता है जैसे मैं खुद रॉकेट लेकर खड़ा हूँ यहाँ',
    ],
    linesHinglish: [
      'Hari batti jalne mein abhi aadha second baaki rehta hai chauraahe par saamne',
      'Peechhe waala aise horn bajaata hai jaise main khud rocket lekar khada hoon yahaan',
    ],
    linesEnglish: [
      'Half a blink before the intersection signal even flips fully green',
      'Cars behind blast horns acting like I should have launched into orbit already',
    ],
  },
  {
    title: 'मम्मी का टिफ़िन बॉक्स',
    titleEnglish: 'Strict Law of Returning Mom’s Tiffin',
    linesHindi: [
      'इंसान चाहे घर पर कुछ भी भूल जाए तो मम्मी माफ़ कर देती हैं एक बार',
      'पर उनका प्लास्टिक का टिफ़िन वापस न लाओ तो सीधी कार्रवाई तय है',
    ],
    linesHinglish: [
      'Insaan chaahe ghar par kuch bhi bhool jaaye to mummy maaf kar deti hain ek baar',
      'Par unka plastic ka tiffin waapas na laao to seedhi kaarwaai tay hai',
    ],
    linesEnglish: [
      'Misplace umbrellas or sweaters and Mom forgives calmly with one sigh',
      'Leave her prized food container at the office and full court martial awaits',
    ],
  },
  {
    title: 'बचपन का झूठा अमीरी खेल',
    titleEnglish: 'Childhood Richness Over Fake Notes',
    linesHindi: [
      'व्यापार वाले खेल में नक़ली नोट गिनते हुए खुद को सेठ समझ लेते थे हम',
      'बड़े हुए तो असली बिल देखकर उसी खेल में वापस जाने का मन करता है',
    ],
    linesHinglish: [
      'Vyaapaar waale khel mein nakli note ginte hue khud ko seth samajh lete the hum',
      'Bade hue to asli bill dekhkar usi khel mein waapas jaane ka mann karta hai',
    ],
    linesEnglish: [
      'Counting brightly colored Monopoly bills made us feel like moguls at nine',
      'Opening real utility invoices now makes board-game rent look charming',
    ],
  },
  {
    title: 'चश्मा साफ़ करने का देसी तरीका',
    titleEnglish: 'Cleaning Glasses With Own Shirt',
    linesHindi: [
      'हज़ार रुपये के चश्मे के साथ कंपनी सुंदर सा मखमल कपड़ा देती है अलग से',
      'पर हम हमेशा अपनी टी-शर्ट का कोना खींचकर ही शीशा साफ़ करते हैं',
    ],
    linesHinglish: [
      'Hazaar rupaye ke chashme ke saath company sundar sa makhmal kapda deti hai alag se',
      'Par hum hamesha apni t-shirt ka kona kheenchkar hi sheesha saaf karte hain',
    ],
    linesEnglish: [
      'Opticians thoughtfully pack velvety microfiber cloths inside every case',
      'Still ninety-nine percent of smudges get wiped purely with my shirt hem',
    ],
  },
  {
    title: 'शादी में फ़ोटोग्राफ़र की मांग',
    titleEnglish: 'Wedding Guest Posing More Than Couple',
    linesHindi: [
      'कभी-कभी शादी के एल्बम में दूल्हा-दुल्हन से ज़्यादा तस्वीरें उसकी दिखती हैं',
      'जो घर से बस तैयार होकर प्लेट के पास पोज़ देने ही आया था',
    ],
    linesHinglish: [
      'Kabhi-kabhi shaadi ke album mein doolha-dulhan se zyada tasveerein uski dikhti hain',
      'Jo ghar se bas taiyaar hokar plate ke paas pose dene hi aaya tha',
    ],
    linesEnglish: [
      'Open some wedding albums and one sharply dressed cousin steals more frames',
      'Than the actual bride and groom—mainly holding dessert plates by lights',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'मच्छरदानी के अंदर घुसा मेहमान',
    titleEnglish: 'Mosquito Trapped Inside Net With Me',
    linesHindi: [
      'बड़े सुकून से मच्छरदानी लगाकर लेटे थे कि आज चैन से सोएँगे रात भर',
      'दो मिनट बाद पता चला असली शिकारी तो अंदर ही बंद कर लिया मैंने',
    ],
    linesHinglish: [
      'Bade sukoon se machhardaani lagaakar lete the ki aaj chain se soyenge raat bhar',
      'Do minute baad pata chala asli shikaari to andar hi band kar liya maine',
    ],
    linesEnglish: [
      'Tucked every edge of the mosquito net tight promising peaceful sleep',
      'Two minutes later realized I locked the hungriest mosquito neatly inside with me',
    ],
  },
  {
    title: 'दवाई का स्वाद और बड़ा बच्चा',
    titleEnglish: 'Grown Adult Fearing Bitter Syrup',
    linesHindi: [
      'बाहर दुनिया से लड़ने की बड़ी-बड़ी बातें करते रहते हैं दोस्त हर शाम',
      'पर घर में कड़वी सिरप की चम्मच देखते ही चेहरा पांच साल वाला बन जाता है',
    ],
    linesHinglish: [
      'Baahar duniya se ladne ki badi-badi baatein karte rehte hain dost har shaam',
      'Par ghar mein kadwi syrup ki chammach dekhte hi chehra paanch saal waala ban jaata hai',
    ],
    linesEnglish: [
      'Out with buddies I talk boldly about conquering every wild storm alive',
      'Show me one spoon of bitter cough syrup and I negotiate like age five',
    ],
  },
  {
    title: 'सर्दियों में मोज़े की जोड़ी',
    titleEnglish: 'Mystery of Vanishing Matching Sock',
    linesHindi: [
      'वॉशिंग मशीन में हमेशा दो बराबर मोज़े साथ डालता हूँ पूरे होश में',
      'बाहर निकलते वक़्त हर बार एक मोज़ा किसी दूसरी दुनिया में चला जाता है',
    ],
    linesHinglish: [
      'Washing machine mein hamesha do baraabar moze saath daalta hoon poore hosh mein',
      'Baahar nikalte waqt har baar ek moja kisi doosri duniya mein chala jaata hai',
    ],
    linesEnglish: [
      'I drop exact matching pairs into the laundry drum in full daylight',
      'Spin cycle ends and one sock consistently teleports into another dimension',
    ],
  },
  {
    title: 'मैगी के दो मिनट का सच',
    titleEnglish: 'Truth Behind Two-Minute Noodles',
    linesHindi: [
      'पैकेट पर लिखा दो मिनट पढ़कर हमेशा भरोसे से गैस जलाता हूँ मैं',
      'सब्ज़ी काटते, मसाला भूनते और बर्तन धोते-धोते पूरा आधा घंटा बीत जाता है',
    ],
    linesHinglish: [
      'Packet par likha do minute padhkar hamesha bharose se gas jalaata hoon main',
      'Sabzi kaat-te, masaala bhoonte aur bartan dhote-dhote poora aadha ghanta beet jaata hai',
    ],
    linesEnglish: [
      'Reading ready in two minutes on the wrapper always fills me with false hope',
      'Chopping peppers, simmering broth, and scrubbing pans totals thirty-five minutes',
    ],
  },
  {
    title: 'दोस्त के साथ बाइक पर एडवेंचर',
    titleEnglish: 'Short-Cut Adventure With Best Friend',
    linesHindi: [
      'जब भी मेरा यार कहे—भाई इधर से चल, नया शॉर्टकट जानता हूँ मैं',
      'समझ जाओ आज पक्की सड़क छोड़कर कीचड़ वाले जंगल में घूमने वाले हैं',
    ],
    linesHinglish: [
      'Jab bhi mera yaar kahe—bhai idhar se chal, naya shortcut jaanta hoon main',
      'Samajh jaao aaj pakki sadak chhodkar keechad waale jangal mein ghoomne waale hain',
    ],
    linesEnglish: [
      'Whenever my co-pilot announces proudly—turn right here I know a crisp shortcut',
      'Prepare immediately to leave smooth asphalt for mysterious dirt trails',
    ],
  },
  {
    title: 'रविवार को बाल कटवाने की भीड़',
    titleEnglish: 'Sunday Afternoon Barber Shop Queue',
    linesHindi: [
      'हफ़्ते के छह दिन तो सैलून में कुर्सियाँ बिल्कुल खाली पड़ी दिखती हैं',
      'रविवार को पूरा शहर अचानक हीरो बनने एक ही दुकान पर पहुँच जाता है',
    ],
    linesHinglish: [
      'Hafte ke chheh din to saloon mein kursiyaan bilkul khaali padi dikhti hain',
      'Raviwaar ko poora shehar achaanak hero banne ek hi dukaan par pahunch jaata hai',
    ],
    linesEnglish: [
      'Monday through Saturday barber chairs sit peacefully deserted all afternoon',
      'Come Sunday at eleven, half the zip code queues simultaneously for trims',
    ],
  },
  {
    title: 'खाना बनाने की अनोखी रेसिपी',
    titleEnglish: 'Chef Experiments in Bachelor Kitchen',
    linesHindi: [
      'यूट्यूब पर वीडियो देखकर जब पहली बार कड़ाही चढ़ाई थी मैंने खुशी से',
      'बनाना तो पनीर था पर अंत में उसका नाम मिक्स खिचड़ी रखना पड़ा',
    ],
    linesHinglish: [
      'YouTube par video dekhkar jab pehli baar kadaahi chadhaayi thi maine khushi se',
      'Banaana to paneer tha par ant mein uska naam mix khichdi rakhna pada',
    ],
    linesEnglish: [
      'Fired up the wok cheerfully following a slick five-minute chef reel',
      'Intended royal cottage cheese curry—plated something legally closer to porridge',
    ],
  },
  {
    title: 'घर पर चार्जर की लड़ाई',
    titleEnglish: 'Sibling Battle Over Fast Charger',
    linesHindi: [
      'दुनिया में बड़े युद्ध ज़मीन के लिए हुए होंगे इतिहास के पन्नों में',
      'हमारे घर में असली संग्राम तो एकमात्र फास्ट चार्जर के लिए होता है',
    ],
    linesHinglish: [
      'Duniya mein bade yuddh zameen ke liye hue honge itihaas ke pannon mein',
      'Hamaare ghar mein asli sangraam to ekmaatra fast charger ke liye hota hai',
    ],
    linesEnglish: [
      'History books claim great empires clashed over gold and borderlines',
      'In our living room every peace treaty hinges on one shared fast charger',
    ],
  },
  {
    title: 'गाने के लिरिक्स में खुद का आविष्कार',
    titleEnglish: 'Inventing Own English Song Lyrics',
    linesHindi: [
      'अंग्रेज़ी गाना बजते ही पूरे आत्मविश्वास से सिर हिलाकर गाते हैं हम',
      'भले ही बीच के आधे शब्द अपनी ही कल्पना से बनाकर जोड़ दिए हों',
    ],
    linesHinglish: [
      'Angrezi gaana bajte hi poore aatmavishwas se sir hilaakar gaate hain hum',
      'Bhale hi beech ke aadhe shabd apni hi kalpana se banaakar jod diye hon',
    ],
    linesEnglish: [
      'When catchy pop verses drop, we belt out choruses with Grammy conviction',
      'Even if eighty percent of middle syllables are freely improvised phonetics',
    ],
  },
  {
    title: 'बिस्कुट का चाय में डूब जाना',
    titleEnglish: 'Tragedy of Biscuit Falling Into Chai',
    linesHindi: [
      'दिल टूटने का असली दर्द सिर्फ़ आशिक़ों को ही नहीं पता होता भाई',
      'गरम चाय में जब पारले-जी टूटकर डूब जाए तो आँखें भर आती हैं',
    ],
    linesHinglish: [
      'Dil tootne ka asli dard sirf aashiqon ko hi nahin pata hota bhai',
      'Garam chai mein jab Parle-G tootkar doob jaaye to aankhein bhar aati hain',
    ],
    linesEnglish: [
      'Heartbreak is hardly reserved exclusively for tragic poets in love',
      'Watching your crisp tea biscuit snap overboard mid-dip stings deeply too',
    ],
  },
  {
    title: 'गर्मी में कूलर में पानी भरना',
    titleEnglish: 'Midnight Duty Refilling Water Cooler',
    linesHindi: [
      'मई की दोपहरी में जब पंखा भी गरम हवा फेंककर आराम करने लगे',
      'तब सबसे छोटे भाई को ही बाल्टी लेकर कूलर भरने भेजा जाता है',
    ],
    linesHinglish: [
      'May ki dopehari mein jab pankha bhi garm hawa phenkkar aaraam karne lage',
      'Tab sabse chhote bhai ko hi baalti lekar cooler bharne bheja jaata hai',
    ],
    linesEnglish: [
      'When dry May afternoons turn ceiling fans into gentle warm hairdryers',
      'Every elder sibling assigns the youngest recruit immediate cooler-bucket duty',
    ],
  },
  {
    title: 'पार्क में अंकल लोगों की हँसी',
    titleEnglish: 'Morning Laughter Club Surprise',
    linesHindi: [
      'सुबह छह बजे टहलते हुए अचानक दस लोग ज़ोर से हँसने लगें साथ में',
      'पहले तो डर लगता है फिर याद आता है यह लाफ्टर क्लब की मीटिंग है',
    ],
    linesHinglish: [
      'Subah chheh baje tehalte hue achaanak das log zor se hansne lagein saath mein',
      'Pehle to dar lagta hai phir yaad aata hai yeh laughter club ki meeting hai',
    ],
    linesEnglish: [
      'During calm sunrise jogs, ten elders suddenly roar laughing toward trees',
      'Two startled seconds later you remember—ah yes, morning laughter yoga club',
    ],
  },
  {
    title: 'कपड़े पर लगी हल्दी का निशान',
    titleEnglish: 'Turmeric Stain Always Finding White Shirt',
    linesHindi: [
      'साल भर गहरे रंग की शर्ट पहनने पर कभी एक बूंद भी नहीं गिरती',
      'जिस दिन नई सफ़ेद कमीज़ पहनो, दाल ख़ुद उड़कर सामने आ बैठती है',
    ],
    linesHinglish: [
      'Saal bhar gehre rang ki shirt pehanne par kabhi ek boond bhi nahin girti',
      'Jis din nayi safed kameez pehano, daal khud udkar saamne aa baithti hai',
    ],
    linesEnglish: [
      'Wear navy or charcoal all season without spilling one rogue drop',
      'Unbutton crisp white linen once and yellow curry leaps clean off the spoon',
    ],
  },
  {
    title: 'ऑफिस के फ्राइडे की रौनक',
    titleEnglish: 'Friday Afternoon Office Joy',
    linesHindi: [
      'सोमवार से गुरुवार तक घड़ी की सुई मानो रेंगती हुई चलती है मेज़ पर',
      'शुक्रवार शाम पाँच बजते ही लैपटॉप बंद करने की रफ़्तार बिजली जैसी होती है',
    ],
    linesHinglish: [
      'Somwaar se guruwaar tak ghadi ki sui maano rengti hui chalti hai mez par',
      'Shukravaar shaam paanch bajte hi laptop band karne ki raftaar bijli jaisi hoti hai',
    ],
    linesEnglish: [
      'Monday through Thursday desk clocks creep like sleepy snails across glass',
      'Friday at five sharp sets world speed records snapping laptop lids shut',
    ],
  },
  {
    title: 'सपने में परीक्षा का डर',
    titleEnglish: 'Surprise Exam Nightmare Years Later',
    linesHindi: [
      'कॉलेज खत्म हुए भले ही पाँच साल गुज़र गए हों आराम से यारो',
      'फिर भी कभी-कभी सपने में आता है कि आज गणित का पेपर है और कुछ याद नहीं',
    ],
    linesHinglish: [
      'College khatam hue bhale hi paanch saal guzar gaye hon aaraam se yaaro',
      'Phir bhi kabhi-kabhi sapne mein aata hai ki aaj ganit ka paper hai aur kuch yaad nahin',
    ],
    linesEnglish: [
      'Years after tossing graduation caps high and signing work contracts',
      'Nightmares still arrive dreaming final math starts in five unprepared minutes',
    ],
  },
  {
    title: 'शादी में पनीर की खोज',
    titleEnglish: 'Hunting Paneer Cubes in Buffet Curry',
    linesHindi: [
      'बफ़े की लंबी लाइन में प्लेट लेकर पंद्रह मिनट खड़े रहे उम्मीद से',
      'और कड़ाही में कड़छी चलाने पर पूरा दो टुकड़ा पनीर ही हाथ आया',
    ],
    linesHinglish: [
      'Buffet ki lambi line mein plate lekar pandrah minute khade rahe ummeed se',
      'Aur kadaahi mein kadchhi chalaane par poora do tukda paneer hi haath aaya',
    ],
    linesEnglish: [
      'Queued patiently in wedding dinner lines clutching clean china for twenty minutes',
      'Stirred the whole pot carefully rescuing exactly two shy cubes of paneer',
    ],
  },
  {
    title: 'मैसेज टाइप करके मिटाना',
    titleEnglish: 'Typing and Deleting Bold Replies',
    linesHindi: [
      'गुस्से में कई बार पाँच लाइन का करारा जवाब लिख देता हूँ चैट में',
      'फिर सामने वाले का कद और अपनी शांति देखकर सिर्फ़ ओके भेज देता हूँ',
    ],
    linesHinglish: [
      'Gusse mein kai baar paanch line ka karaara jawaab likh deta hoon chat mein',
      'Phir saamne waale ka kad aur apni shaanti dekhkar sirf okay bhej deta hoon',
    ],
    linesEnglish: [
      'Fired up mid-annoyance I draft a crisp five-paragraph masterpiece reply',
      'Then sigh for peace, backspace all of it, and tap one polite thumbs-up',
    ],
  },
  {
    title: 'नए चप्पल की सुरक्षा',
    titleEnglish: 'Guarding New Footwear Outside Temple',
    linesHindi: [
      'मंदिर में भगवान से माँगने को तो सौ बड़े-बड़े वरदान याद रहते हैं',
      'पर जब चप्पल नई हो तो आधा ध्यान दरवाज़े के बाहर ही लगा रहता है',
    ],
    linesHinglish: [
      'Mandir mein bhagwaan se maangne ko to sau bade-bade vardaan yaad rehte hain',
      'Par jab chappal nayi ho to aadha dhyaan darwaze ke baahar hi laga rehta hai',
    ],
    linesEnglish: [
      'Stepping inside shrines brings heartfelt prayers for wisdom and health',
      'Unless you wore brand-new sneakers—then one eye monitors the shoe rack',
    ],
  },
  {
    title: 'दोस्त के साथ फोटो एडिटिंग',
    titleEnglish: 'Friend Editing Solely Himself in Photo',
    linesHindi: [
      'ग्रुप फ़ोटो खींचने के बाद दोस्त ने कहा—अभी फ़िल्टर लगाकर भेजता हूँ',
      'ज़ूम करके देखा तो उसने सिर्फ़ अपना चेहरा चमकाकर बाकी सबको धुँधला कर दिया',
    ],
    linesHinglish: [
      'Group photo kheenchne ke baad dost ne kaha—abhi filter lagaakar bhejta hoon',
      'Zoom karke dekha to usne sirf apna chehra chamkaakar baaki sabko dhundhla kar diya',
    ],
    linesEnglish: [
      'Buddy took our group photo promising—let me tweak the lighting quick',
      'Zoomed in noticing he brightened solely his jawline and blurred four friends',
    ],
  },
  {
    title: 'बाहर खाना vs घर की रोटी',
    titleEnglish: 'Fancy Pizza Craving Simple Dal',
    linesHindi: [
      'पाँच सौ का पिज़्ज़ा खाकर भी पेट थोड़ा अधूरा सा महसूस करता है रात को',
      'घर आकर दो गरम रोटी और अचार खाते ही आत्मा तृप्त हो जाती है',
    ],
    linesHinglish: [
      'Paanch sau ka pizza khaakar bhi pet thoda adhoora sa mehsoos karta hai raat ko',
      'Ghar aakar do garam roti aur achaar khaate hi aatma tript ho jaati hai',
    ],
    linesEnglish: [
      'Even after pricey stuffed-crust pizza, my appetite feels mysteriously unfinished',
      'Two warm home flatbreads with mango pickle bring instant royal bliss',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'अजनबी से मुस्कान की गड़बड़',
    titleEnglish: 'Waving Back to Wrong Person',
    linesHindi: [
      'किसी को दूर से हाथ हिलाते देखकर मैंने भी बड़े जोश में हाय कह दिया',
      'पास आने पर पता चला वह तो मेरे ठीक पीछे खड़े भाई को बुला रहा था',
    ],
    linesHinglish: [
      'Kisi ko door se haath hilaate dekhkar maine bhi bade josh mein hi keh diya',
      'Paas aane par pata chala woh to mere theek peechhe khade bhai ko bula raha tha',
    ],
    linesEnglish: [
      'Spotted someone waving cheerfully across the plaza so I grinned waving big back',
      'Turns out they were greeting their cousin standing directly behind me',
    ],
  },
  {
    title: 'सोफे पर रिमोट छिपाने की कला',
    titleEnglish: 'Sofa Swallowing TV Remote Daily',
    linesHindi: [
      'हाथ में था अभी दो मिनट पहले, पता नहीं कहाँ चला गया अचानक',
      'पता चलता है कि पूरा सोफ़ा पलटने के बाद भी वह मेरे ही नीचे दबा था',
    ],
    linesHinglish: [
      'Haath mein tha abhi do minute pehle, pata nahin kahaan chala gaya achaanak',
      'Pata chalta hai ki poora sofa palatne ke baad bhi woh mere hi neeche daba tha',
    ],
    linesEnglish: [
      'I held the remote two minutes ago—now it vanished cleanly off earth',
      'After flipping six throw pillows I notice I sat neatly on top of it',
    ],
  },
  {
    title: 'माँ के थैले में थैला',
    titleEnglish: 'Plastic Bag Inside Bigger Plastic Bag',
    linesHindi: [
      'किसी भी भारतीय घर की रसोई का सबसे बड़ा खज़ाना दरवाज़े के पीछे टँगा है',
      'एक बड़ी पन्नी खोलो तो उसके भीतर पचास छोटी-छोटी पन्नियाँ तह मिलती हैं',
    ],
    linesHinglish: [
      'Kisi bhi Bhaartiya ghar ki rasoi ka sabse bada khazaana darwaze ke peechhe tanga hai',
      'Ek badi panni kholo to uske bheetar pachaas chhoti-chhoti panniyaan teh milti hain',
    ],
    linesEnglish: [
      'Every traditional kitchen guards a prized vault behind the pantry knob',
      'Unzip one master grocery bag revealing fifty neatly folded bags inside',
    ],
  },
  {
    title: 'ऑटो वाले भैया की दार्शनिक बात',
    titleEnglish: 'Auto Driver Dropping Deep Wisdom',
    linesHindi: [
      'दो किलोमीटर के सफ़र में ऑटो वाले भैया ने ज़िंदगी का पूरा सार सुना दिया',
      'और उतरते वक़्त बड़े प्यार से दस रुपये ज़्यादा भी वसूल लिए मुस्कुराकर',
    ],
    linesHinglish: [
      'Do kilometer ke safar mein auto waale bhaiya ne zindagi ka poora saar suna diya',
      'Aur utarte waqt bade pyar se das rupaye zyada bhi vasool liye muskuraakar',
    ],
    linesEnglish: [
      'During a ten-minute rickshaw ride the driver solved all human existence',
      'Then cheerfully rounded the meter ten rupees higher with a serene wink',
    ],
  },
  {
    title: 'सैर के नाम पर चाट की दुकान',
    titleEnglish: 'Evening Walk Stopping at Chaat Cart',
    linesHindi: [
      'दोनों दोस्त रोज़ शाम को मोटापा घटाने की कसम खाकर बाहर निकलते हैं',
      'और हर शाम टहलते-टहलते आलू टिक्की के ठेले पर जाकर ही रुकते हैं',
    ],
    linesHinglish: [
      'Dono dost roz shaam ko motaapa ghataane ki kasam khaakar baahar nikalte hain',
      'Aur har shaam tehalte-tehalte aaloo tikki ke thele par jaakar hi rukte hain',
    ],
    linesEnglish: [
      'Two best friends lace walking sneakers daily swearing to drop five pounds',
      'Every single route magically terminates beside the spicy potato chaat cart',
    ],
  },
  {
    title: 'नया फोन और कवर की चिंता',
    titleEnglish: 'New Phone Wrapped Like Precious Relic',
    linesHindi: [
      'लाख रुपये का पतला फ़ोन भी खरीद लो तो सुकून तब तक नहीं मिलता है',
      'जब तक मोटा कवर और टेम्पर्ड ग्लास लगाकर ईंट जैसा भारी न बना दें',
    ],
    linesHinglish: [
      'Laakh rupaye ka patla phone bhi khareed lo to sukoon tab tak nahin milta hai',
      'Jab tak mota cover aur tempered glass lagaakar eent jaisa bhaari na bana dein',
    ],
    linesEnglish: [
      'Buy the sleekest featherlight smartphone engineers ever crafted',
      'Within ten minutes we armor it in thick bumpers heavy as a brick',
    ],
  },
  {
    title: 'रिश्तेदार की शादी में फ्री वाई-फ़ाई',
    titleEnglish: 'Checking Corner Socket at Wedding Hall',
    linesHindi: [
      'स्टेज पर दूल्हा-दुल्हन चाहे जितनी भी शानदार एंट्री ले रहे हों आगे',
      'हमारा एक दोस्त तो हमेशा कोने वाले प्लग के पास फ़ोन चार्ज करता मिलता है',
    ],
    linesHinglish: [
      'Stage par doolha-dulhan chaahe jitni bhi shaandaar entry le rahe hon aage',
      'Hamaara ek dost to hamesha kone waale plug ke paas phone charge karta milta hai',
    ],
    linesEnglish: [
      'Regardless how grand fireworks look around the banquet hall stage',
      'One buddy inevitably camps beside the far corner outlet charging his phone',
    ],
  },
  {
    title: 'माइक टेस्टिंग की अनंत परंपरा',
    titleEnglish: 'Endless Mic Testing Before Events',
    linesHindi: [
      'हर मोहल्ले के कार्यक्रम की शुरुआत हमेशा एक अमर संवाद से होती है',
      'हेलो-हेलो माइक चेक एक दो तीन, आवाज़ आ रही है क्या पीछे वालों को',
    ],
    linesHinglish: [
      'Har mohalle ke kaaryakram ki shuruwaat hamesha ek amar samvaad se hoti hai',
      'Hello-hello mic check ek do teen, aawaz aa rahi hai kya peechhe waalon ko',
    ],
    linesEnglish: [
      'Every neighborhood stage show opens with the sacred universal anthem',
      'Hello check check one two three—can folks near the back hear clearly now',
    ],
  },
  {
    title: 'मेज़ पर सोया लैपटॉप',
    titleEnglish: 'Twenty Browser Tabs Always Open',
    linesHindi: [
      'मेरे लैपटॉप की रैम भी अब हाथ जोड़कर विनती करती दिखती है मुझसे',
      'भाई पच्चीस टैब खोल रखे हैं, एक दो बंद कर दे वरना मैं ही सो जाऊँगा',
    ],
    linesHinglish: [
      'Mere laptop ki RAM bhi ab haath jodkar vinti karti dikhti hai mujhse',
      'Bhai pachhees tab khol rakhe hain, ek do band kar de warna main hi so jaaoonga',
    ],
    linesEnglish: [
      'Even my poor laptop fan wheezes folding virtual palms pleading softly',
      'Bro twenty-eight browser tabs are open—please close three before I faint',
    ],
  },
  {
    title: 'रविवार दोपहर की लंबी झपकी',
    titleEnglish: 'Three-Hour Sunday Power Nap',
    linesHindi: [
      'दोपहर तीन बजे बस पंद्रह मिनट आँख बंद करने का मन बनाया था मैंने',
      'आँख खुली तो बाहर शाम के साढ़े छह बज रहे थे और चाय सामने रखी थी',
    ],
    linesHinglish: [
      'Dopahar teen baje bas pandrah minute aankh band karne ka mann banaaya tha maine',
      'Aankh khuli to baahar shaam ke saadhe chheh baj rahe the aur chai saamne rakhi thi',
    ],
    linesEnglish: [
      'Laid down at three p.m. intending a crisp fifteen-minute power nap',
      'Woke up at six-thirty dusk unsure what year or continent I visited',
    ],
  },
  {
    title: 'दोस्त के नए जूते पर पहला कदम',
    titleEnglish: 'Friend Stepping First on New Shoes',
    linesHindi: [
      'नए जूते पहनकर कॉलेज पहुँचते ही बाकी यारों का एक ही मिशन होता है',
      'सबसे पहले उन सफ़ेद जूतों पर पैर रखकर उद्घाटन समारोह पूरा करना',
    ],
    linesHinglish: [
      'Naye joote pehankar college pahunchte hi baaki yaaron ka ek hi mission hota hai',
      'Sabse pehle un safed jooton par pair rakhkar udghatan samaaroh poora karna',
    ],
    linesEnglish: [
      'Walk onto campus rocking brand-new white kicks and friends unite instantly',
      'Racing to land the inaugural scuff mark right across your spotless toe',
    ],
  },
  {
    title: 'गर्मियों में आम का जूस',
    titleEnglish: 'Mango Season Outranking Every Fruit',
    linesHindi: [
      'साल भर चाहे सेब और कीवी की कितनी भी तारीफ़ कर लें लोग बाज़ार में',
      'गर्मियाँ आते ही हर घर का राजा सिर्फ़ ठंडा आम ही बनता है वापस',
    ],
    linesHinglish: [
      'Saal bhar chaahe seb aur kiwi ki kitni bhi taareef kar lein log baazaar mein',
      'Garmiyaan aate hi har ghar ka raaja sirf thanda aam hi banta hai waapas',
    ],
    linesEnglish: [
      'All winter nutrition charts praise apples, kiwis, and green smoothies',
      'The first week mangoes land in crates, every other fruit surrenders cleanly',
    ],
  },
  {
    title: 'फ़ोटो के लिए छुपती हँसी',
    titleEnglish: 'Freezing Smile Until Shutter Clicks',
    linesHindi: [
      'जब दोस्त वीडियो मोड ऑन करके कहे—सब लोग पोज़ देकर खड़े रहना भाई',
      'दस सेकंड बाद चेहरा अकड़ते ही सबको गजब का गुस्सा आता है उस पर',
    ],
    linesHinglish: [
      'Jab dost video mode on karke kahe—sab log pose dekar khade rehna bhai',
      'Das second baad chehra akadte hi sabko gajab ka gussa aata hai us par',
    ],
    linesEnglish: [
      'Nothing bonds siblings quite like holding frozen grins for twelve seconds',
      'Before realizing your helpful brother accidentally held video mode on',
    ],
  },
  {
    title: 'चॉकलेट छुपाने की गुप्त जगह',
    titleEnglish: 'Secret Chocolate Stash Inside Dal Jar',
    linesHindi: [
      'फ़्रिज के खुले हिस्से में रखी चॉकलेट पाँच मिनट भी सुरक्षित नहीं रहती यहाँ',
      'असली सुरक्षा तो दाल के डिब्बे के भीतर छिपाकर ही मिल पाती है घर में',
    ],
    linesHinglish: [
      'Fridge ke khule hisse mein rakhi chocolate paanch minute bhi surakshit nahin rehti yahaan',
      'Asli suraksha to daal ke dibbe ke bheetar chhipaakar hi mil paati hai ghar mein',
    ],
    linesEnglish: [
      'Leaving chocolates plainly on middle fridge shelves survives five minutes tops',
      'Real vault security hides them deep inside dried lentil jars on top shelves',
    ],
  },
  {
    title: 'कपड़ों की मैचिंग पर चर्चा',
    titleEnglish: 'Debating Exact Shade of Blue',
    linesHindi: [
      'मेरे लिए नीला रंग सिर्फ़ एक ही होता है हमेशा से देखने में यारो',
      'बहन ने उसमें से भी नेवी, स्काई और रॉयल ब्लू के पाँच भेद बता दिए',
    ],
    linesHinglish: [
      'Mere liye neela rang sirf ek hi hota hai hamesha se dekhne mein yaaro',
      'Behen ne usmein se bhi navy, sky aur royal blue ke paanch bhed bata diye',
    ],
    linesEnglish: [
      'To my simple eyes blue remains one straightforward pleasant color',
      'My sister listed six distinct shades separating midnight from ocean mist',
    ],
  },
  {
    title: 'होटल के छोटे साबुन की याद',
    titleEnglish: 'Packing Tiny Hotel Soaps Cheerfully',
    linesHindi: [
      'होटल का किराया चाहे दस हज़ार रुपये भरकर आ रहे हों हम बाहर से',
      'चेकआउट करते वक़्त छोटे शैम्पू और कॉफ़ी के पाउच बैग में ज़रूर जाते हैं',
    ],
    linesHinglish: [
      'Hotel ka kiraaya chaahe das hazaar rupaye bharkar aa rahe hon hum baahar se',
      'Checkout karte waqt chhote shampoo aur coffee ke pouch bag mein zaroor jaate hain',
    ],
    linesEnglish: [
      'Pay handsome nightly rates at any shiny resort down by the coast',
      'Still those tiny complimentary soaps and tea sachets proudly ride home packed',
    ],
  },
  {
    title: 'मुँह में पानी लाती इमली',
    titleEnglish: 'Instant Reaction Seeing Tamarind',
    linesHindi: [
      'कुछ चीजों का नाम सुनते ही ज़ुबान अपने आप काम शुरू कर देती है तुरंत',
      'जैसे इमली और गोलगप्पे का नाम पढ़ते ही मुँह में पानी आ जाता है',
    ],
    linesHinglish: [
      'Kuch cheezon ka naam sunte hi zubaan apne aap kaam shuru kar deti hai turant',
      'Jaise imli aur golgappe ka naam padhte hi munh mein paani aa jaata hai',
    ],
    linesEnglish: [
      'Certain magic words wake taste buds faster than any dinner bell',
      'Even reading tangy tamarind chaat triggers instant craving mid-scroll',
    ],
  },
  {
    title: 'बिन बुलाए सलाह देने वाले चाचा',
    titleEnglish: 'Free Advice From Every Corner',
    linesHindi: [
      'दुनिया में सब कुछ भले ही महंगा होता जा रहा हो हर साल लगातार',
      'पर बिन माँगे दी जाने वाली सलाह आज भी बिल्कुल मुफ़्त मिलती है',
    ],
    linesHinglish: [
      'Duniya mein sab kuch bhale hi mehnga hota ja raha ho har saal lagaataar',
      'Par bin maange di jaane waali salaah aaj bhi bilkul muft milti hai',
    ],
    linesEnglish: [
      'While groceries and rent climb higher nearly every single quarter',
      'Unsolicited life advice remains one hundred percent free everywhere',
    ],
  },
  {
    title: 'चाय ठंडी होने का दुख',
    titleEnglish: 'Heartbreak of Forgotten Cold Tea',
    linesHindi: [
      'काम के बीच में बड़े शौक से चाय बनाकर रखी थी मेज़ के कोने पर',
      'एक ईमेल का जवाब लिखते ही वह बर्फ़ की तरह ठंडी होकर देखने लगी मुझे',
    ],
    linesHinglish: [
      'Kaam ke beech mein bade shauk se chai banaakar rakhi thi mez ke kone par',
      'Ek email ka jawaab likhte hi woh barf ki tarah thandi hokar dekhne lagi mujhe',
    ],
    linesEnglish: [
      'Steeped a fresh steaming mug of tea proudly right beside my keyboard',
      'Answered one quick email and discovered lukewarm iced tea staring back',
    ],
  },
  {
    title: 'हँसी का हमेशा चालू मीटर',
    titleEnglish: 'Keeping Smile Meter Always Running',
    linesHindi: [
      'जिंदगी चाहे जितने भी गंभीर इम्तिहान सामने लाकर खड़ा कर दे रोज़',
      'दोस्तों के साथ पाँच मिनट हँस लेना हर बोझ को आधा कर देता है',
    ],
    linesHinglish: [
      'Zindagi chaahe jitne bhi gambheer imtihaan saamne laakar khada kar de roz',
      'Doston ke saath paanch minute hans lena har bojh ko aadha kar deta hai',
    ],
    linesEnglish: [
      'No matter how serious life’s endless pop quizzes stack up by noon',
      'Five minutes laughing helplessly with buddies halves every heavy weight',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'अजनबी शहर में देसी जुगाड़',
    titleEnglish: 'Desi Jugaad Solving Everything',
    linesHindi: [
      'जहाँ बड़ी-बड़ी मशीनें और इंजीनियर हाथ खड़े कर देते हैं थककर',
      'वहाँ एक रबर बैंड और पेन की स्प्रिंग से अपना जुगाड़ काम चला देता है',
    ],
    linesHinglish: [
      'Jahaan badi-badi mashinein aur engineer haath khade kar dete hain thakkar',
      'Wahaan ek rubber band aur pen ki spring se apna jugaad kaam chala deta hai',
    ],
    linesEnglish: [
      'Right where sleek imported manuals throw up puzzled warnings',
      'One clever rubber band and paperclip keeps daily operations rolling smooth',
    ],
  },
  {
    title: 'चुपके से मिठाई खाने की आवाज़',
    titleEnglish: 'Loudest Crinkle at Midnight Snacks',
    linesHindi: [
      'दिन के शोर में चाहे चिप्स का पैकेट बिल्कुल शांत खुल जाए हाथ से',
      'रात दो बजे सबके सोने पर वही रैपर लाउडस्पीकर जैसा शोर करता है',
    ],
    linesHinglish: [
      'Din ke shor mein chaahe chips ka packet bilkul shaant khul jaaye haath se',
      'Raat do baje sabke sone par wahi wrapper loudspeaker jaisa shor karta hai',
    ],
    linesEnglish: [
      'By noon crisp snack bags peel open quietly with zero drama',
      'At two a.m. in a silent house that same foil crinkles like thunder',
    ],
  },
  {
    title: 'दोस्त की कार में एसी की जंग',
    titleEnglish: 'Backseat Requests for AC Temperature',
    linesHindi: [
      'ड्राइविंग सीट वाला भाई बेचारा पूरा रास्ता सड़क देखकर चलाता है गाड़ी',
      'पीछे बैठने वाले हर पाँच मिनट में कहते हैं—भाई गाना बदल और एसी बढ़ा',
    ],
    linesHinglish: [
      'Driving seat waala bhai bechaara poora raasta sadak dekhkar chalaata hai gaadi',
      'Peechhe baithne waale har paanch minute mein kehte hain—bhai gaana badal aur AC badha',
    ],
    linesEnglish: [
      'The noble driver focuses humbly steering smoothly through busy lanes',
      'Backseat royalty commands every five minutes—skip track and crank AC high',
    ],
  },
  {
    title: 'फ़ोटो में आँख बंद आने की क़िस्मत',
    titleEnglish: 'Blinking Right on Best Group Photo',
    linesHindi: [
      'पूरी ज़िंदगी में एक बार इतनी शानदार जगह खड़े होकर फ़ोटो खिंचवाई थी',
      'सारी दुनिया सुंदर दिखी उसमें, बस मेरी ही दोनों आँखें बंद निकलीं',
    ],
    linesHinglish: [
      'Poori zindagi mein ek baar itni shaandaar jagah khade hokar photo khinchwaayi thi',
      'Saari duniya sundar dikhi usmein, bas meri hi dono aankhein band niklin',
    ],
    linesEnglish: [
      'Once in five years everybody aligns perfectly before golden sunset cliffs',
      'Twelve friends look magazine-ready while I blinked cleanly mid-shutter',
    ],
  },
  {
    title: 'कप की तली में आखिरी घूँट',
    titleEnglish: 'Saving Best Sip for Very Last',
    linesHindi: [
      'चाय या लस्सी पीते वक़्त सबसे बड़ा दिल तब टूटता है मेज़ पर आकर',
      'जब आखिरी घूँट पीने उठाओ और पता चले कप तो पहले ही खत्म हो गया',
    ],
    linesHinglish: [
      'Chai ya lassi peete waqt sabse bada dil tab toot-ta hai mez par aakar',
      'Jab aakhiri ghoont peene uthaao aur pata chale cup to pehle hi khatam ho gaya',
    ],
    linesEnglish: [
      'Real disappointment strikes mid-afternoon reaching cheerfully for your mango lassi',
      'Only to hear an empty straw rattle sadly across spotless ice',
    ],
  },
  {
    title: 'मज़ेदार मौसम में पकौड़ों की मांग',
    titleEnglish: 'Raindrops Demanding Onion Pakoras',
    linesHindi: [
      'जैसे ही बाहर काले बादल गरजकर दो बूँदें गिराते हैं छत के ऊपर',
      'हर घर के अंदर से एक ही आवाज़ आती है—आज तो गरमागरम पकौड़े बनेंगे',
    ],
    linesHinglish: [
      'Jaise hi baahar kaale baadal garajkar do boondein giraate hain chhat ke oopar',
      'Har ghar ke andar se ek hi aawaz aati hai—aaj to garmaagaram pakode banenge',
    ],
    linesEnglish: [
      'Two thunderclaps and three fresh monsoon drops tapping balcony rails',
      'Trigger immediate unanimous household legislation—hot crispy pakoras now',
    ],
  },
  {
    title: 'पार्किंग की जगह मिलने की खुशी',
    titleEnglish: 'Pure Joy Finding Front Parking Spot',
    linesHindi: [
      'जीवन की सबसे बड़ी खुशियों में से एक बिना किसी शक के यही होती है',
      'जब भीड़-भाड़ वाले बाज़ार में दुकान के ठीक सामने खाली पार्किंग मिल जाए',
    ],
    linesHinglish: [
      'Jeevan ki sabse badi khushiyon mein se ek bina kisi shak ke yahi hoti hai',
      'Jab bheed-bhaad waale baazaar mein dukaan ke theek saamne khaali parking mil jaaye',
    ],
    linesEnglish: [
      'Few triumphs rival rolling up to crowded Saturday markets',
      'And spotting one clean open parking space right outside the bakery door',
    ],
  },
  {
    title: 'अलमारी में बिखरे पुराने नोट',
    titleEnglish: 'Finding Forgotten Cash in Winter Coat',
    linesHindi: [
      'पूरी दुनिया की किसी भी लॉटरी से ज़्यादा खुशी उस वक़्त होती है दिल को',
      'जब सर्दियों की पुरानी जैकेट की जेब से सौ रुपये का नोट निकल आता है',
    ],
    linesHinglish: [
      'Poori duniya ki kisi bhi lottery se zyada khushi us waqt hoti hai dil ko',
      'Jab sardiyon ki puraani jacket ki jeb se sau rupaye ka note nikal aata hai',
    ],
    linesEnglish: [
      'No scratch-off ticket matches the electric thrill of cool October mornings',
      'Sliding hands into winter coats and discovering crisp forgotten cash inside',
    ],
  },
  {
    title: 'शादी के कार्ड में बाल आग्रह',
    titleEnglish: 'Cute Line Inside Childhood Wedding Card',
    linesHindi: [
      'बचपन में शादी के कार्ड पढ़कर सबसे ज़्यादा मज़ा इसी एक लाइन में आता था',
      'मेरे मामा की शादी में जलूल-जलूल आना—और वहीं से लड्डू की आस जगती थी',
    ],
    linesHinglish: [
      'Bachpan mein shaadi ke card padhkar sabse zyada maza isi ek line mein aata tha',
      'Mere maama ki shaadi mein jalool-jalool aana—aur wahin se laddoo ki aas jagti thi',
    ],
    linesEnglish: [
      'Reading wedding cards as kids peaked solely at that cute bottom invite',
      'Please definitely come to Uncle’s wedding—promising endless sweet laddoos',
    ],
  },
  {
    title: 'सैलरी क्रेडिट होते ही प्लान',
    titleEnglish: 'Salary Arriving vs Bills Waiting',
    linesHindi: [
      'महीने की पहली तारीख़ को वेतन आते ही दिल में हज़ारों सपने उड़ने लगते हैं',
      'पर बिजली, किराया और किराना वाले पहले से दरवाज़े पर खड़े मुस्कुराते हैं',
    ],
    linesHinglish: [
      'Mahine ki pehli taareekh ko vetan aate hi dil mein hazaaron sapne udne lagte hain',
      'Par bijli, kiraaya aur kiraana waale pehle se darwaze par khade muskuraate hain',
    ],
    linesEnglish: [
      'Payday morning launches ten exciting getaway dreams inside my head',
      'Meanwhile rent, Wi-Fi, and power bills sit smiling patiently on the doorstep',
    ],
  },
  {
    title: 'म्यूट माइक पर लंबी कहानी',
    titleEnglish: 'Speaking Five Minutes While Muted',
    linesHindi: [
      'ऑनलाइन कॉल में पूरे जोश से पाँच मिनट तक शानदार भाषण दे दिया मैंने',
      'अंत में किसी ने धीरे से कहा—भाई आपका माइक शुरू से ही बंद था',
    ],
    linesHinglish: [
      'Online call mein poore josh se paanch minute tak shaandaar bhaashan de diya maine',
      'Ant mein kisi ne dheere se kaha—bhai aapka mic shuru se hi band tha',
    ],
    linesEnglish: [
      'Delivered my finest three-minute strategy speech with sweeping hand gestures',
      'Only for someone to whisper gently—hey your microphone was muted the whole time',
    ],
  },
  {
    title: 'संडे को दस बजे का नाश्ता',
    titleEnglish: 'Sunday Breakfast Merging With Lunch',
    linesHindi: [
      'हफ़्ते के बाकी दिन तो आठ बजे नाश्ता करके भागना पड़ता है घर से',
      'संडे को सुबह ग्यारह बजे सीधे पराठे खाकर नाश्ता-लंच एक कर देते हैं',
    ],
    linesHinglish: [
      'Hafte ke baaki din to aath baje naashta karke bhaagna padta hai ghar se',
      'Sunday ko subah gyaarah baje seedhe paraathe khaakar naashta-lunch ek kar dete hain',
    ],
    linesEnglish: [
      'Weekdays mean grabbing toast at eight rushing toward buses half-dressed',
      'Sundays merge eleven a.m. parathas gracefully into a peaceful brunch',
    ],
  },
  {
    title: 'ऑनलाइन स्टेटस और जासूसी',
    titleEnglish: 'Saying Goodnight Then Scrolling Reels',
    linesHindi: [
      'रात ग्यारह बजे सबसे बड़े प्यार से गुड नाइट बोलकर विदा ले लेते हैं',
      'फिर दो बजे तक रील्स देखते हुए अचानक हँसने की आवाज़ आती है रजाई से',
    ],
    linesHinglish: [
      'Raat gyaarah baje sabse bade pyar se good night bolkar vida le lete hain',
      'Phir do baje tak reels dekhte hue achaanak hansne ki aawaz aati hai rajaai se',
    ],
    linesEnglish: [
      'Sent solemn goodnight texts at ten-thirty claiming total exhaustion',
      'Still found wide awake giggling under blankets at cute puppy videos past one',
    ],
  },
  {
    title: 'आइसक्रीम के डिब्बे में अदरक',
    titleEnglish: 'Frozen Peas Inside Ice Cream Tub',
    linesHindi: [
      'बचपन का सबसे बड़ा और गहरा सदमा हर भारतीय घर में एक ही रहा है',
      'फ़्रीज़र से आइसक्रीम का बड़ा डिब्बा खोलो तो अंदर जमी हुई मटर निकलती है',
    ],
    linesHinglish: [
      'Bachpan ka sabse bada aur gehra sadma har Bhaartiya ghar mein ek hi raha hai',
      'Freezer se ice cream ka bada dibba kholo to andar jami hui matar nikalti hai',
    ],
    linesEnglish: [
      'Every childhood shares one unforgettable freezer plot twist indoors',
      'Prying open a shiny chocolate ice cream tub revealing frozen green peas inside',
    ],
  },
  {
    title: 'चप्पल उल्टी पड़ी देख कर डर',
    titleEnglish: 'Flipping Upside-Down Slipper Fast',
    linesHindi: [
      'घर में कोई काम उल्टा हो न हो, मम्मी की नज़र चप्पल पर हमेशा रहती है',
      'एक चप्पल भी उल्टी दिखी नहीं कि तुरंत सीधा करो वरना लड़ाई होगी',
    ],
    linesHinglish: [
      'Ghar mein koi kaam ulta ho na ho, mummy ki nazar chappal par hamesha rehti hai',
      'Ek chappal bhi ulti dikhi nahin ki turant seedha karo warna ladaai hogi',
    ],
    linesEnglish: [
      'Nothing grabs household emergency alerts quicker than hallway footwear',
      'Spot one sandal flipped upside down and straighten it fast before drama starts',
    ],
  },
  {
    title: 'लम्बी कतार में लाइन बदलना',
    titleEnglish: 'Other Queue Moving Twice Faster',
    linesHindi: [
      'जिस लाइन में जाकर खड़े होते हैं वह अचानक कछुए की चाल चलने लगती है',
      'और जैसे ही दूसरी लाइन में जाओ, पहले वाली हवा की तरह आगे निकल जाती है',
    ],
    linesHinglish: [
      'Jis line mein jaakar khade hote hain woh achaanak kachhue ki chaal chalne lagti hai',
      'Aur jaise hi doosri line mein jaao, pehle waali hawa ki tarah aage nikal jaati hai',
    ],
    linesEnglish: [
      'Whichever checkout lane I join immediately freezes like winter molasses',
      'Switch neatly one aisle over and my old line sprints clear out the doors',
    ],
  },
  {
    title: 'चाय में दो बिस्कुट एक साथ',
    titleEnglish: 'Rescue Mission With Second Biscuit',
    linesHindi: [
      'कप में डूबे पहले बिस्कुट को बचाने के लिए दूसरा बिस्कुट उतारते हैं नीचे',
      'और दोनों मिलकर जब अंदर आराम करने लगें तो चम्मच से रेस्क्यू करना पड़ता है',
    ],
    linesHinglish: [
      'Cup mein doobe pehle biscuit ko bachaane ke liye doosra biscuit utaarte hain neeche',
      'Aur dono milkar jab andar aaraam karne lagein to chammach se rescue karna padta hai',
    ],
    linesEnglish: [
      'Sending a brave second biscuit down to rescue the fallen first cookie',
      'Ends swiftly requiring an emergency spoon brigade scooping soggy porridge',
    ],
  },
  {
    title: 'चालाक बिल्ली और खुला दूध',
    titleEnglish: 'Checking Kitchen Before Stepping Out',
    linesHindi: [
      'दो मिनट को बाहर जाने लगो तो मम्मी तीन बार याद दिलाकर पूछती हैं',
      'गैस बंद की, पंखा बंद किया और किचन का दरवाज़ा ठीक से लगाया न',
    ],
    linesHinglish: [
      'Do minute ko baahar jaane lago to mummy teen baar yaad dilaakar poochhti hain',
      'Gas band ki, pankha band kiya aur kitchen ka darwaaza theek se lagaaya na',
    ],
    linesEnglish: [
      'Stepping outside even for five minutes triggers the three-point flight check',
      'Stove off, fan switch down, and porch gate latched securely twice',
    ],
  },
  {
    title: 'गाने की धुन पर झाड़ू गिटार',
    titleEnglish: 'Turning Broom Into Stage Guitar',
    linesHindi: [
      'जब घर पर कोई भी मौजूद न हो और स्पीकर पर पुराना गाना बज रहा हो',
      'तो कमरे की झाड़ू भी एक पल में रॉकस्टार का गिटार बन जाती है',
    ],
    linesHinglish: [
      'Jab ghar par koi bhi maujood na ho aur speaker par puraana gaana baj raha ho',
      'To kamre ki jhaadoo bhi ek pal mein rockstar ka guitar ban jaati hai',
    ],
    linesEnglish: [
      'Empty living room plus classic nineties track blasting across speakers',
      'Transforms an innocent household broom straight into an electric arena guitar',
    ],
  },
  {
    title: 'ज़्यादा सोचने वाले की कॉमेडी',
    titleEnglish: 'Overthinker Creating Fake Scenarios',
    linesHindi: [
      'असली ज़िंदगी में तो कोई लड़ाई-झगड़ा हुआ ही नहीं किसी से सुबह से',
      'पर नहाते वक़्त दिमाग ने काल्पनिक बहस में दस करारे जवाब जीत लिए',
    ],
    linesHinglish: [
      'Asli zindagi mein to koi ladaai-jhagda hua hi nahin kisi se subah se',
      'Par nahaate waqt dimaag ne kaalpanik behas mein das karaare jawaab jeet liye',
    ],
    linesEnglish: [
      'Zero real arguments happened anywhere near me all morning long',
      'Still during a hot shower I bravely won three dramatic imaginary debates',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'बचपन का बस्ता और खिलौने',
    titleEnglish: 'Finding Lost Eraser Inside Bag',
    linesHindi: [
      'स्कूल बैग की सबसे नीचे वाली जेब किसी जादुई गुफ़ा से कम नहीं होती थी',
      'छह महीने पहले खोया हुआ रबड़ और आधा लंच बॉक्स वहीं से निकलता था',
    ],
    linesHinglish: [
      'School bag ki sabse neeche waali jeb kisi jaadui gufa se kam nahin hoti thi',
      'Chheh mahine pehle khoya hua rabar aur aadha lunch box wahin se nikalta tha',
    ],
    linesEnglish: [
      'That bottom zipper pocket on old school backpacks defied space and time',
      'Yielding erasers lost since September alongside fossilized orange peels',
    ],
  },
  {
    title: 'सब्ज़ी वाले भैया से मोलभाव',
    titleEnglish: 'Free Coriander Victory at Market',
    linesHindi: [
      'पूरी दो सौ की सब्ज़ी खरीदने के बाद भी असली जीत तब महसूस होती है',
      'जब सब्ज़ी वाले भैया मुस्कुराकर ऊपर से थोड़ा हरा धनिया-मिर्च डाल दें',
    ],
    linesHinglish: [
      'Poori do sau ki sabzi khareedne ke baad bhi asli jeet tab mehsoos hoti hai',
      'Jab sabzi waale bhaiya muskuraakar oopar se thoda hara dhaniya-mirch daal dein',
    ],
    linesEnglish: [
      'Regardless of paying full price across five baskets of fresh produce',
      'True market triumph comes with two free sprigs of cilantro tossed on top',
    ],
  },
  {
    title: 'कमरे के अंदर धूप का चश्मा',
    titleEnglish: 'Cool Sunglasses Inside Dim Room',
    linesHindi: [
      'रील्स बनाने के चक्कर में आजकल लोग अलग ही दुनिया में रहते हैं यार',
      'शाम सात बजे कमरे की लाइट बंद करके भी काला चश्मा लगाए दिखते हैं',
    ],
    linesHinglish: [
      'Reels banaane ke chakkar mein aajkal log alag hi duniya mein rehte hain yaar',
      'Shaam saat baje kamre ki light band karke bhi kaala chashma lagaaye dikhte hain',
    ],
    linesEnglish: [
      'Chasing viral short clips launches wild fashion rules nowadays',
      'Rocking jet-black aviators past seven p.m. indoors beneath dim lamps',
    ],
  },
  {
    title: 'नए जूते पहनकर बारिश का डर',
    titleEnglish: 'Walking TiPtoe Over Small Puddles',
    linesHindi: [
      'सफ़ेद जूते पहनकर सड़क पार करना किसी सर्कस के खेल से कम नहीं है',
      'हर छोटी कीचड़ की बूँद से बचने के लिए ऐसे कूदते हैं जैसे नदी पार कर रहे हों',
    ],
    linesHinglish: [
      'Safed joote pehankar sadak paar karna kisi circus ke khel se kam nahin hai',
      'Har chhoti keechad ki boond se bachne ke liye aise koodte hain jaise nadi paar kar rahe hon',
    ],
    linesEnglish: [
      'Crossing slightly damp streets in crisp white trainers turns pure gymnastics',
      'Leaping proudly over two-inch puddles like clearing mighty rapids',
    ],
  },
  {
    title: 'म्यूज़िक सुनते हुए तेज़ चलना',
    titleEnglish: 'Feeling Like Movie Hero With Music',
    linesHindi: [
      'कान में तेज़ धुन वाला गाना बजते ही चाल अपने आप बदल जाती है सड़क पर',
      'लगता है जैसे पीछे कैमरा चल रहा हो और मैं किसी फ़िल्म की एंट्री दे रहा हूँ',
    ],
    linesHinglish: [
      'Kaan mein tez dhun waala gaana bajte hi chaal apne aap badal jaati hai sadak par',
      'Lagta hai jaise peechhe camera chal raha ho aur main kisi film ki entry de raha hoon',
    ],
    linesEnglish: [
      'Drop one punchy bassline into earbuds while walking toward groceries',
      'Instantly my stride assumes slow-motion cinema cameras trailing behind',
    ],
  },
  {
    title: 'हल्की बारिश और गीले कपड़े',
    titleEnglish: 'Grabbing Clothes Off Line Mid-Shower',
    linesHindi: [
      'जैसे ही छत पर दो बूँद बारिश गिरी, पूरे घर में इमरजेंसी सायरन बज जाता है',
      'हर सदस्य ऐसे छत पर दौड़ता है जैसे सूखते कपड़े बचाना राष्ट्रीय मिशन हो',
    ],
    linesHinglish: [
      'Jaise hi chhat par do boond baarish giri, poore ghar mein emergency siren baj jaata hai',
      'Har sadasya aise chhat par daudta hai jaise sookhte kapde bachaana raashtriya mission ho',
    ],
    linesEnglish: [
      'Three stray raindrops hitting the tin awning trigger housewide sprint drills',
      'Everyone charges rooftop laundry lines like rescuing treasure from pirates',
    ],
  },
  {
    title: 'चुपचाप खींची गई फ़ोटो',
    titleEnglish: 'Candid Shot Catching Mouth Full',
    linesHindi: [
      'दोस्त हमेशा कहते हैं—तेरी बड़ी प्यारी नेचुरल फ़ोटो खींची है आज मैंने',
      'फ़ोन में देखो तो या तो मुँह में समोसा भरा होता है या आधा झपकी में',
    ],
    linesHinglish: [
      'Dost hamesha kehte hain—teri badi pyari natural photo kheenchi hai aaj maine',
      'Phone mein dekho to ya to munh mein samosa bhara hota hai ya aadha jhapki mein',
    ],
    linesEnglish: [
      'Friends always promise—trust me I captured your best natural candid angle',
      'Previewing the screen shows eyes half-shut mid-bite around hot snacks',
    ],
  },
  {
    title: 'संडे के कामों की लंबी लिस्ट',
    titleEnglish: 'Sunday Chore List Going Unread',
    linesHindi: [
      'शुक्रवार को बड़े जोश से संडे के दस काम लिखकर रखे थे नोटबुक में',
      'रविवार रात को वह नोटबुक भी मुस्कुराकर बोली—अगले हफ़्ते मिलना अब',
    ],
    linesHinglish: [
      'Shukravaar ko bade josh se Sunday ke das kaam likhkar rakhe the notebook mein',
      'Raviwaar raat ko woh notebook bhi muskuraakar boli—agle hafte milna ab',
    ],
    linesEnglish: [
      'Friday evening I scripted ten noble household errands neatly on sticky notes',
      'Sunday night that yellow pad winked kindly saying—better luck next week',
    ],
  },
  {
    title: 'आख़िरी समोसे की शराफ़त',
    titleEnglish: 'Polite Stand-Off Over Last Samosa',
    linesHindi: [
      'प्लेट में आखिरी समोसा बचते ही पूरी टेबल पर गजब की तहज़ीब आ जाती है',
      'सब एक-दूसरे को ऑफर करते हैं, और मन में चाहते हैं कोई ना बोल दे बस',
    ],
    linesHinglish: [
      'Plate mein aakhiri samosa bachte hi poori table par gajab ki tehzeeb aa jaati hai',
      'Sab ek-doosre ko offer karte hain, aur mann mein chaahte hain koi na bol de bas',
    ],
    linesEnglish: [
      'One final crispy samosa remaining brings sudden royal manners to the table',
      'Everyone insists—oh no please you take it—secretly praying they refuse',
    ],
  },
  {
    title: 'बचपन का झूठा जादूगर खेल',
    titleEnglish: 'Pretending to Control Automatic Doors',
    linesHindi: [
      'आज भी किसी मॉल के ऑटोमैटिक काँच के दरवाज़े के पास पहुँचते ही चुपके से',
      'हल्का सा हाथ ऐसे हिला देता हूँ जैसे मेरी जादुई शक्ति से खुला हो',
    ],
    linesHinglish: [
      'Aaj bhi kisi mall ke automatic kaanch ke darwaze ke paas pahunchte hi chupke se',
      'Halka sa haath aise hila deta hoon jaise meri jaadui shakti se khula ho',
    ],
    linesEnglish: [
      'Even at grown adulthood stepping toward sliding supermarket glass',
      'I quietly wave two fingers pretending Jedi powers parted the doors',
    ],
  },
  {
    title: 'दोपहर में बत्ती बुझाने की बहस',
    titleEnglish: 'Dad’s Sixth Sense for Empty Lights',
    linesHindi: [
      'दुनिया का कोई भी डिटेक्टर इतना तेज़ काम नहीं करता होगा आज तक',
      'जितनी जल्दी पापा दूसरे कमरे की खाली जलती लाइट पकड़ लेते हैं',
    ],
    linesHinglish: [
      'Duniya ka koi bhi detector itna tez kaam nahin karta hoga aaj tak',
      'Jitni jaldi papa doosre kamre ki khaali jalti light pakad lete hain',
    ],
    linesEnglish: [
      'No security sensor matches the pinpoint speed of household dads',
      'Detecting one forgotten empty hallway bulb glowing from three rooms away',
    ],
  },
  {
    title: 'बारिश में चाय वाले की भीड़',
    titleEnglish: 'Traffic Jam Outside Tea Stall',
    linesHindi: [
      'बड़े शहर की चौड़ी सड़कों पर शायद इतनी भीड़ न दिखे कभी शाम को',
      'जितनी पहली बारिश होते ही अदरक वाली चाय की टपरी पर लग जाती है',
    ],
    linesHinglish: [
      'Bade shehar ki chaudi sadkon par shaayad itni bheed na dikhe kabhi shaam ko',
      'Jitni pehli baarish hote hi adrak waali chai ki tapri par lag jaati hai',
    ],
    linesEnglish: [
      'Rush-hour downtown boulevards look calm compared to rainy evenings',
      'Outside the corner ginger-tea stall where half the block gathers smiling',
    ],
  },
  {
    title: 'कंप्यूटर रीस्टार्ट का जादू',
    titleEnglish: 'Turning Off and On Again Magic',
    linesHindi: [
      'बड़े-बड़े सॉफ्टवेयर इंजीनियर भी अंत में एक ही पवित्र मंत्र पर लौटते हैं',
      'एक बार बंद करके फिर से चालू कर दो, आधी समस्या खुद भाग जाती है',
    ],
    linesHinglish: [
      'Bade-bade software engineer bhi ant mein ek hi pavitra mantra par laut-te hain',
      'Ek baar band karke phir se chaaloo kar do, aadhi samasya khud bhaag jaati hai',
    ],
    linesEnglish: [
      'Even senior tech wizards eventually lean upon one ancient sacred spell',
      'Switch it completely off for ten seconds, boot back up, and breathe relieved',
    ],
  },
  {
    title: 'फ़ोटो में हँसी का नाटक',
    titleEnglish: 'Holding Cheek Smile Through Delay',
    linesHindi: [
      'पनीर कहकर दस सेकंड से गाल फैलाए खड़े थे कैमरे के सामने सब लोग',
      'अंकल ने बटन दबाकर पूछा—अरे बेटा यह फ़्लैश ऑन कैसे होता है इसमें',
    ],
    linesHinglish: [
      'Paneer kehkar das second se gaal failaaye khade the camera ke saamne sab log',
      'Uncle ne button dabaakar poochha—are beta yeh flash on kaise hota hai ismein',
    ],
    linesEnglish: [
      'Ten whole seconds everyone froze gleaming teeth shouting cheese at Uncle’s phone',
      'Before he squinted asking cheerfully—wait how do you turn the flash on',
    ],
  },
  {
    title: 'मेहमान की थाली में ज़्यादा प्यार',
    titleEnglish: 'Aunt Refusing Your Full Stomach',
    linesHindi: [
      'मौसी के घर एक ही वाक्य बिल्कुल अमान्य माना जाता है डाइनिंग टेबल पर',
      'पेट भर गया बोलने का मतलब उनके हिसाब से दो रोटी और रखी जाएँगी',
    ],
    linesHinglish: [
      'Mausi ke ghar ek hi vaakya bilkul amaanya maana jaata hai dining table par',
      'Pet bhar gaya bolne ka matlab unke hisaab se do roti aur rakhi jaayengi',
    ],
    linesEnglish: [
      'One sentence holds zero legal standing at Auntie’s Sunday dinner table',
      'Saying I am completely stuffed only serves two extra warm rotis faster',
    ],
  },
  {
    title: 'बचपन का टी.वी. एंटीना घुमाना',
    titleEnglish: 'Fixing Signal by Standing Next to TV',
    linesHindi: [
      'पुराने दिनों में मैच के ठीक आखिरी ओवर में स्क्रीन झिलमिला जाती थी',
      'और बेचारा छोटा भाई एंटीना पकड़कर आधे घंटे मूर्ति बना खड़ा रहता था',
    ],
    linesHinglish: [
      'Puraane dinon mein match ke theek aakhiri over mein screen jhilmila jaati thi',
      'Aur bechaara chhota bhai antenna pakadkar aadhe ghante moorti bana khada rehta tha',
    ],
    linesEnglish: [
      'In classic childhood cricket matches static always hit during the final over',
      'Turning the youngest sibling into a frozen human antenna statue for twenty minutes',
    ],
  },
  {
    title: 'दोस्त के साथ सीरियस डिस्कशन',
    titleEnglish: 'Trying Not to Laugh in Quiet Room',
    linesHindi: [
      'किसी गंभीर मीटिंग में बैठकर हँसी रोकना दुनिया का सबसे कठिन काम है',
      'और ठीक उसी पल तुम्हारे पास बैठा दोस्त आँख मारकर मुँह बना दे तो बस',
    ],
    linesHinglish: [
      'Kisi gambheer meeting mein baithkar hansi rokna duniya ka sabse kathin kaam hai',
      'Aur theek usi pal tumhaare paas baitha dost aankh maarkar munh bana de to bas',
    ],
    linesEnglish: [
      'Swallowing giggles inside dead-serious lectures is pure Olympic endurance',
      'Until your buddy beside you pulls one goofy eyebrow—total collapse',
    ],
  },
  {
    title: 'ठंडी हवा में गरम जलेबी',
    titleEnglish: 'Diet Rules Yielding to Hot Jalebi',
    linesHindi: [
      'तैलीय खाने से दूर रहने के सारे लेख मैंने पूरे ध्यान से पढ़ लिए आज',
      'फिर गरम जलेबी देखते ही लेख लिखने वाले को भी माफ़ कर दिया मैंने',
    ],
    linesHinglish: [
      'Tailiya khaane se door rehne ke saare lekh maine poore dhyaan se padh liye aaj',
      'Phir garam jalebi dekhte hi lekh likhne waale ko bhi maaf kar diya maine',
    ],
    linesEnglish: [
      'Read three earnest health articles warning cleanly against sweet syrupy treats',
      'One whiff of sizzling golden jalebi pardoned every author on the spot',
    ],
  },
  {
    title: 'चश्मे की सफाई और नई दुनिया',
    titleEnglish: 'HD Vision After Cleaning Lenses',
    linesHindi: [
      'पूरा दिन धुँधली दुनिया में घूमने के बाद जब चश्मा धोकर पहनते हैं वापस',
      'तो अचानक पेड़ की एक-एक पत्ती एचडी क्वालिटी में दिखाई देने लगती है',
    ],
    linesHinglish: [
      'Poora din dhundhli duniya mein ghoomne ke baad jab chashma dhokar pehante hain waapas',
      'To achaanak ped ki ek-ek patti HD quality mein dikhaayi dene lagti hai',
    ],
    linesEnglish: [
      'Roaming all afternoon behind smudged lenses leaves streets mildly foggy',
      'One rinse with soap suddenly upgrades every tree leaf straight to crisp HD',
    ],
  },
  {
    title: 'हँसते रहो तो दिन हल्का है',
    titleEnglish: 'Laughing Keeps Heavy Days Light',
    linesHindi: [
      'मुश्किलें तो हर किसी के दरवाज़े पर दस्तक देती ही रहती हैं समय-समय पर',
      'पर दो चुटकुलों की हँसी पूरी महफ़िल का मौसम फिर से खुशनुमा कर देती है',
    ],
    linesHinglish: [
      'Mushkilein to har kisi ke darwaze par dastak deti hi rehti hain samay-samay par',
      'Par do chutkulon ki hansi poori mehfil ka mausam phir se khushnuma kar deti hai',
    ],
    linesEnglish: [
      'Serious chores knock politely on everybody’s calendar week after week',
      'Still two shared laughs brighten the entire room warm and effortless again',
    ],
  },
];

export const UNIQUE_FUNNY_140 = buildUniqueShayaris(
  'funny',
  'Funny Shayari (फनी शायरी)',
  '😂',
  61,
  FUNNY_ENTRIES
);
