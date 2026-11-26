import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const SHARABI_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'यारों की महफ़िल और शाम का रंग',
    titleEnglish: 'Evening Glow in Friends Gathering',
    linesHindi: [
      'मयख़ाने की रौनक़ बोतलों की गिनती से नहीं सजती है यारो',
      'चार पुराने दोस्त साथ बैठ जाएँ तो शाम अपने आप गुलाबी हो जाती है',
    ],
    linesHinglish: [
      'Maikhaane ki raunak botlon ki ginti se nahin sajti hai yaaro',
      'Chaar puraane dost saath baith jaayein to shaam apne aap gulaabi ho jaati hai',
    ],
    linesEnglish: [
      'Warmth inside a tavern never rises from counting amber bottles along shelves',
      'Sit four lifelong buddies down together and twilight turns rosy on its own',
    ],
  },
  {
    title: 'आँखों के नशे की सादगी',
    titleEnglish: 'Gentle Charm of Quiet Eyes',
    linesHindi: [
      'हमने तो सिर्फ़ साक़ी से पानी का गिलास ही माँगा था बैठकर',
      'नशा तो उनकी मुस्कान और बात करने के सलीके में घुलकर आ गया',
    ],
    linesHinglish: [
      'Humne to sirf saaqi se paani ka gilaas hi maanga tha baithkar',
      'Nasha to unki muskaan aur baat karne ke saleeke mein ghulkar aa gaya',
    ],
    linesEnglish: [
      'I sat down politely asking the host merely for cool spring water',
      'Intoxication floated softly straight through their warm smile and gentle tone',
    ],
  },
  {
    title: 'काँच के प्याले में चाँदनी',
    titleEnglish: 'Moonlight Resting Inside Crystal Glass',
    linesHindi: [
      'छत के नीचे बैठकर गम गिनने से बेहतर है आसमान देखना यारो',
      'जब प्याले में पूरा चाँद उतर आए तो तन्हाई भी खूबसूरत लगती है',
    ],
    linesHinglish: [
      'Chhat ke neeche baithkar gham ginne se behtar hai aasmaan dekhna yaaro',
      'Jab pyaale mein poora chaand utar aaye to tanhaai bhi khoobsurat lagti hai',
    ],
    linesEnglish: [
      'Far wiser gazing up at starry skies than tallying worries indoors',
      'When silver moonlight settles inside one quiet glass, solitude feels lovely',
    ],
  },
  {
    title: 'साक़ी से हल्की सी गुफ़्तगू',
    titleEnglish: 'Light Conversation With the Host',
    linesHindi: [
      'मयख़ाने में आने वाला हर इंसान हमेशा भूला-भटका नहीं होता साक़ी',
      'कुछ लोग सिर्फ़ दिन भर की थकान उतारने को एक शांत कोना ढूँढते हैं',
    ],
    linesHinglish: [
      'Maikhaane mein aane waala har insaan hamesha bhoola-bhatka nahin hota saaqi',
      'Kuch log sirf din bhar ki thakaan utaarne ko ek shaant kona dhoondhte hain',
    ],
    linesEnglish: [
      'Not every visitor stepping into twilight taverns carries lost directions',
      'Many simply seek one calm wooden corner to lay down daytime weight',
    ],
  },
  {
    title: 'झूमते कदमों की ईमानदारी',
    titleEnglish: 'Honesty of Unfiltered Hearts',
    linesHindi: [
      'शहर के सफ़ेदपोश लोग तो होश में रहकर भी बातें घुमाते रहते हैं',
      'मयख़ाने की मेज़ पर बैठा इंसान कम से कम सच बोलकर हल्का हो जाता है',
    ],
    linesHinglish: [
      'Shehar ke safedposh log to hosh mein rehkar bhi baatein ghumaate rehte hain',
      'Maikhaane ki mez par baitha insaan kam se kam sach bolkar halka ho jaata hai',
    ],
    linesEnglish: [
      'Polished society folks spin smooth riddles effortlessly completely sober',
      'At tavern tables people drop fancy masks and finally breathe plain truth',
    ],
  },
  {
    title: 'एक घूँट में गुज़री यादें',
    titleEnglish: 'Old Memories in One Quiet Sip',
    linesHindi: [
      'जाम में कोई जादू नहीं होता जो बीता हुआ कल लौटा लाए सामने',
      'बस पुरानी यारी के किस्से छिड़ते ही वक़्त कुछ देर ठहर जाता है',
    ],
    linesHinglish: [
      'Jaam mein koi jaadoo nahin hota jo beeta hua kal lauta laaye saamne',
      'Bas puraani yaari ke kisse chhidte hi waqt kuch der thehar jaata hai',
    ],
    linesEnglish: [
      'No glass pours actual sorcery capable of rewinding seasons backward',
      'Yet once buddies open old tales, busy clocks pause gently for an hour',
    ],
  },
  {
    title: 'पैमाने से परे दोस्ती का स्वाद',
    titleEnglish: 'Taste of Friendship Beyond Cups',
    linesHindi: [
      'चखने की प्लेट में भले ही सिर्फ़ मूँगफली और नींबू रखा हो मेज़ पर',
      'सच्चे दोस्तों की हँसी हर महफ़िल को शाही बना देती है शाम होते ही',
    ],
    linesHinglish: [
      'Chakhne ki plate mein bhale hi sirf moongfali aur neembu rakha ho mez par',
      'Sachhe doston ki hansi har mehfil ko shaahi bana deti hai shaam hote hi',
    ],
    linesEnglish: [
      'Even when the snack bowl holds solely roasted peanuts and sliced lime',
      'Hearty laughter of genuine friends turns humble benches into royal halls',
    ],
  },
  {
    title: 'बेवजह झूमती हुई शाम',
    titleEnglish: 'Carefree Evening Swaying Gently',
    linesHindi: [
      'हर मुस्कान के पीछे कोई बड़ी वजह हो ज़रूरी नहीं होता मेरे दोस्त',
      'कभी-कभी ठंडी हवा और मनपसंद गीत ही पूरा नशा कर देते हैं',
    ],
    linesHinglish: [
      'Har muskaan ke peechhe koi badi wajah ho zaroori nahin hota mere dost',
      'Kabhi-kabhi thandi hawa aur manpasand geet hi poora nasha kar dete hain',
    ],
    linesEnglish: [
      'Not every easy smile requires some grand headline triumph behind it',
      'Cool evening breeze paired with favorite classics intoxicates enough alone',
    ],
  },
  {
    title: 'खाली गिलास की ख़ामोश गवाही',
    titleEnglish: 'Empty Glass Keeping Quiet Secrets',
    linesHindi: [
      'इस कोने वाली मेज़ ने कितने ही अनकहे किस्से सुने हैं सालों से',
      'पर मजाल है कि सुबह होने पर इसने किसी एक का नाम भी बताया हो',
    ],
    linesHinglish: [
      'Is kone waali mez ne kitne hi ankhe kisse sune hain saalon se',
      'Par majaal hai ki subah hone par isne kisi ek ka naam bhi bataaya ho',
    ],
    linesEnglish: [
      'That quiet corner oak table has listened to thousands of secret confessions',
      'Yet never once spilled a single friend’s name back into morning streets',
    ],
  },
  {
    title: 'होश और जज़्बात का संगम',
    titleEnglish: 'Where Poise Meets Warm Emotion',
    linesHindi: [
      'पीने का सलीका वही जानता है जो महफ़िल की मर्यादा बचाए रखे',
      'जो दिल हल्का करे और किसी का दिल न दुखाए, वही सच्चा यार है',
    ],
    linesHinglish: [
      'Peene ka saleeka wahi jaanta hai jo mehfil ki maryaada bachaaye rakhe',
      'Jo dil halka kare aur kisi ka dil na dukhaaye, wahi sachha yaar hai',
    ],
    linesEnglish: [
      'Grace around evening glasses belongs strictly to those honoring every guest',
      'Unwinding gently without bruising a single feeling marks true class',
    ],
  },
  {
    title: 'मयख़ाने की पुरानी दीवारें',
    titleEnglish: 'Old Tavern Walls Holding Stories',
    linesHindi: [
      'इन पुरानी दीवारों पर लटकी घड़ी कभी जल्दी भागती नहीं दिखती',
      'क्योंकि यहाँ घड़ी नहीं, लोगों के सुकून से वक़्त नापा जाता है',
    ],
    linesHinglish: [
      'In puraani deewaaron par latki ghadi kabhi jaldi bhaagti nahin dikhti',
      'Kyunki yahaan ghadi nahin, logon ke sukoon se waqt naapa jaata hai',
    ],
    linesEnglish: [
      'The vintage clock hanging above worn brick walls never sprints anxiously',
      'Here hours get measured peacefully in deep sighs and warm stories',
    ],
  },
  {
    title: 'चाय और जाम की प्यारी तुलना',
    titleEnglish: 'Gentle Debate: Chai vs Evening Glass',
    linesHindi: [
      'कुछ लोग शाम को जाम के प्याले में दिन की थकान घोल देते हैं',
      'तो हम जैसे आशिक़ दो कप कड़क चाय से ही आसमान पर पहुँच जाते हैं',
    ],
    linesHinglish: [
      'Kuch log shaam ko jaam ke pyaale mein din ki thakaan ghol dete hain',
      'To hum jaise aashiq do cup kadak chai se hi aasmaan par pahunch jaate hain',
    ],
    linesEnglish: [
      'Some unwind long evenings swirling amber drinks around cozy tables',
      'While simple romantics like me float sky-high over two cups of spiced chai',
    ],
  },
  {
    title: 'साक़ी की मुस्कान का जादू',
    titleEnglish: 'Magic Inside Host’s Warm Welcome',
    linesHindi: [
      'महफ़िल की आधी प्यास तो मीठी आवाज़ में स्वागत से ही बुझ जाती है',
      'वरना रूखे लहजे में परोसा गया अमृत भी कड़वा ही लगता है',
    ],
    linesHinglish: [
      'Mehfil ki aadhi pyaas to meethi aawaz mein swaagat se hi bujh jaati hai',
      'Warna rookhe lehje mein parosa gaya amrit bhi kadwa hi lagta hai',
    ],
    linesEnglish: [
      'Half any guest’s thirst fades cleanly at one sincere smiling hello',
      'Even finest nectar turns oddly bitter if poured with cold indifference',
    ],
  },
  {
    title: 'सुकून से भरी आख़िरी घूँट',
    titleEnglish: 'Peaceful Final Sip Before Home',
    linesHindi: [
      'नशा इतना ही ठीक है कि घर का रास्ता बिल्कुल साफ़ दिखता रहे आगे',
      'और माँ-पापा के सामने आँखों में कोई शर्मिंदगी न झलके कभी',
    ],
    linesHinglish: [
      'Nasha itna hi theek hai ki ghar ka raasta bilkul saaf dikhta rahe aage',
      'Aur maa-papa ke saamne aankhon mein koi sharmindagi na jhalke kabhi',
    ],
    linesEnglish: [
      'Keep evening cheer light enough that home avenues stay crystal clear ahead',
      'And meeting family eyes indoors carries zero guilt or hesitation',
    ],
  },
  {
    title: 'दिल की बातें और दो प्याले',
    titleEnglish: 'Heartfelt Talks Across Two Glasses',
    linesHindi: [
      'दिन भर की चुप्पी जब शाम को दो यारों के बीच टूटती है आकर',
      'तो हर उलझन अपने आप बहुत छोटी और हलकी लगने लगती है',
    ],
    linesHinglish: [
      'Din bhar ki chuppi jab shaam ko do yaaron ke beech toot-ti hai aakar',
      'To har uljhan apne aap bahut chhoti aur halki lagne lagti hai',
    ],
    linesEnglish: [
      'When all-day silence finally melts over evening rounds with two pals',
      'Heavy knots from work shrink swiftly into funny harmless stories',
    ],
  },
  {
    title: 'बदलते मौसम में मयख़ाने की धुन',
    titleEnglish: 'Melodies Inside Rainy Evening Lounge',
    linesHindi: [
      'बाहर बारिश की बूंदें सड़क पर संगीत बजा रही हों धीमे-धीमे',
      'और अंदर पुराने ग़ज़ल की धुन चले तो शाम यादगार बन जाती है',
    ],
    linesHinglish: [
      'Baahar baarish ki boondein sadak par sangeet baja rahi hon dheeme-dheeme',
      'Aur andar puraane ghazal ki dhun chale to shaam yaadgaar ban jaati hai',
    ],
    linesEnglish: [
      'When soft monsoon drops tap silver rhythm across wet streets outside',
      'And classic ghazals hum inside, ordinary evenings turn timeless gold',
    ],
  },
  {
    title: 'नज़र से पिलाया हुआ प्यार',
    titleEnglish: 'Intoxication Served Through One Glance',
    linesHindi: [
      'असली मयख़ाना तो किसी की झील जैसी आँखों में बसा होता है दोस्त',
      'जिधर बस एक नज़र देख लो तो कई दिनों तक होश मीठा बना रहता है',
    ],
    linesHinglish: [
      'Asli maikhaana to kisi ki jheel jaisi aankhon mein basa hota hai dost',
      'Jidhar bas ek nazar dekh lo to kai dinon tak hosh meetha bana rehta hai',
    ],
    linesEnglish: [
      'The truest tavern sleeps peacefully inside someone’s deep lake-calm eyes',
      'One fleeting glance across the room leaves whole weeks glowing sweet',
    ],
  },
  {
    title: 'हिसाब से बाहर यारों की शाम',
    titleEnglish: 'Evenings Beyond Splitting Bills',
    linesHindi: [
      'सच्चे दोस्तों की महफ़िल में बिल कभी कैलकुलेटर से नहीं बँटता है',
      'आज मेरी जेब खुली है तो कल तेरे घर की छत पर जमेगी शाम',
    ],
    linesHinglish: [
      'Sachhe doston ki mehfil mein bill kabhi calculator se nahin bant-ta hai',
      'Aaj meri jeb khuli hai to kal tere ghar ki chhat par jamegi shaam',
    ],
    linesEnglish: [
      'Real brotherhood never breaks out tiny calculators splitting every nickel',
      'Tonight falls cheerfully on my tab—tomorrow we gather up on your roof',
    ],
  },
  {
    title: 'दर्द भुलाने से ज़्यादा हल्कापन',
    titleEnglish: 'Lightness Greater Than Forgetting',
    linesHindi: [
      'हम कोई ग़म छुपाने के लिए शाम को नहीं बैठते हैं मेज़ पर यारो',
      'बस ज़िंदगी की भागदौड़ में दो पल मुस्कुरा लेने का बहाना ढूँढते हैं',
    ],
    linesHinglish: [
      'Hum koi gham chhupaane ke liye shaam ko nahin baithte hain mez par yaaro',
      'Bas zindagi ki bhaagdaud mein do pal muskura lene ka bahaana dhoondhte hain',
    ],
    linesEnglish: [
      'We never gather around sunset tables merely hiding heavy scars inside',
      'We simply toast an honest pause to laugh amid life’s breathless sprint',
    ],
  },
  {
    title: 'सुबह की साफ़ ताज़गी की कद्र',
    titleEnglish: 'Respecting Fresh Morning Clarity',
    linesHindi: [
      'शाम चाहे कितनी भी रंगीन और मस्ती से भरी गुजरी हो हमारी',
      'सुबह की पहली किरण पर काम की मेज़ पर मुस्तैद मिलना ही शान है',
    ],
    linesHinglish: [
      'Shaam chaahe kitni bhi rangeen aur masti se bhari guzri ho hamaari',
      'Subah ki pehli kiran par kaam ki mez par mustaid milna hi shaan hai',
    ],
    linesEnglish: [
      'However lively and colorful last evening’s music rang until late',
      'Greeting sunrise crisp and ready at your post shows genuine poise',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'महफ़िल की ख़ामोश शराफ़त',
    titleEnglish: 'Quiet Dignity in Lively Gatherings',
    linesHindi: [
      'दो घूँट के बाद भी अपनी ज़ुबान मीठी रखना हर किसी को नहीं आता',
      'जो नशे में भी दूसरों की इज़्ज़त बढ़ा दे, वही असली महफ़िलबाज़ है',
    ],
    linesHinglish: [
      'Do ghoont ke baad bhi apni zubaan meethi rakhna har kisi ko nahin aata',
      'Jo nashe mein bhi doosron ki izzat badha de, wahi asli mehfilbaaz hai',
    ],
    linesEnglish: [
      'Not everyone keeps courtesy silky smooth late into evening rounds',
      'Whoever lifts others’ honor higher as hours deepen owns true grace',
    ],
  },
  {
    title: 'अधूरी ग़ज़ल और पूरा याराना',
    titleEnglish: 'Half-Remembered Song, Whole Brotherhood',
    linesHindi: [
      'शाम ढलते ही पुराने गीतों के बोल आधे-अधूरे ही सही याद आ जाते हैं',
      'सुर भले थोड़ा भटके पर दोस्तों का साथ उन्हें लाजवाब बना देता है',
    ],
    linesHinglish: [
      'Shaam dhalte hi puraane geeton ke bol aadhe-adhoore hi sahi yaad aa jaate hain',
      'Sur bhale thoda bhatke par doston ka saath unhein lajawaab bana deta hai',
    ],
    linesEnglish: [
      'By twilight old beloved choruses surface missing every second line',
      'Off-key notes somehow turn glorious sung loudly beside lifelong friends',
    ],
  },
  {
    title: 'बोतल के पार भी ज़िंदगी की समझ',
    titleEnglish: 'Clarity Beyond Bottom of Glass',
    linesHindi: [
      'किसी को लगता है मयख़ाने में सिर्फ़ बहकी हुई बातें होती हैं रोज़',
      'कभी आकर बैठो तो यहाँ दुनिया के सबसे खरे सच सुनने को मिलते हैं',
    ],
    linesHinglish: [
      'Kisi ko lagta hai maikhaane mein sirf behki hui baatein hoti hain roz',
      'Kabhi aakar baitho to yahaan duniya ke sabse khare sach sunne ko milte hain',
    ],
    linesEnglish: [
      'Outsiders assume twilight booths hold nothing deeper than dizzy chatter',
      'Pull up a chair once and hear the plainest honest truths on earth',
    ],
  },
  {
    title: 'प्याले में घुलता मीठा सन्नाटा',
    titleEnglish: 'Sweet Quiet Melting Inside Glass',
    linesHindi: [
      'दिन भर ऑफिस और ट्रैफ़िक के शोर से कान पक जाते हैं जब मेरे',
      'तब शाम का एक शांत कोना और धीमी धुन किसी वरदान सी लगती है',
    ],
    linesHinglish: [
      'Din bhar office aur traffic ke shor se kaan pak jaate hain jab mere',
      'Tab shaam ka ek shaant kona aur dheemi dhun kisi vardaan si lagti hai',
    ],
    linesEnglish: [
      'When daytime meetings and honking avenues leave ears thoroughly worn',
      'One quiet dim corner with gentle acoustic melodies feels heavenly',
    ],
  },
  {
    title: 'हल्की बरसात और छत की महफ़िल',
    titleEnglish: 'Light Rain on Rooftop Gathering',
    linesHindi: [
      'बड़े-बड़े क्लबों की तेज़ रोशनी से कहीं ज़्यादा सुकून यहाँ मिलता है',
      'जब छत पर चार कुर्सियाँ और हल्की फुहारें साथ बैठी दिखें',
    ],
    linesHinglish: [
      'Bade-bade clubon ki tez roshni se kahin zyada sukoon yahaan milta hai',
      'Jab chhat par chaar kursiyaan aur halki fuhaarein saath baithi dikhein',
    ],
    linesEnglish: [
      'No flashing downtown club outshines quiet rooftop evenings at home',
      'Four plastic chairs, cool drizzle mist, and unhurried stories spinning free',
    ],
  },
  {
    title: 'नशे से ऊपर दिल की सच्चाई',
    titleEnglish: 'Honesty Stronger Than Any Drink',
    linesHindi: [
      'जाम पीकर भी किसी का बुरा न सोचना बहुत ऊँचे किरदार की बात है',
      'ज़हर तो कुछ लोग बिल्कुल होश में रहकर भी मुँह से उगलते हैं',
    ],
    linesHinglish: [
      'Jaam peekar bhi kisi ka bura na sochna bahut oonche kirdaar ki baat hai',
      'Zehar to kuch log bilkul hosh mein rehkar bhi munh se ugalte hain',
    ],
    linesEnglish: [
      'Wishing everyone good even late into lively rounds reveals noble heart',
      'Plenty of harsh folks spill bitter venom completely stone-cold sober',
    ],
  },
  {
    title: 'साक़ी के हाथों में सुकून',
    titleEnglish: 'Quiet Ease in Steady Pour',
    linesHindi: [
      'मेहमान का मन पढ़कर जो प्याला भर दे बिना एक लफ़्ज़ पूछे ही',
      'उस साक़ी की समझदारी किसी डॉक्टर के नुस्खे से कम नहीं होती',
    ],
    linesHinglish: [
      'Mehmaan ka mann padhkar jo pyaala bhar de bina ek lafz poochhe hi',
      'Us saaqi ki samajhdaari kisi doctor ke nuskhe se kam nahin hoti',
    ],
    linesEnglish: [
      'Reading a weary traveler’s mood before pouring silently with a nod',
      'Such quiet hospitality rivals any prescription written on paper',
    ],
  },
  {
    title: 'सुकून की शाम, यारों के नाम',
    titleEnglish: 'Peaceful Sunset Dedicated to Friends',
    linesHindi: [
      'दुनिया भर के बड़े पदों और खिताबों को दरवाज़े के बाहर रख आना',
      'यहाँ सब सिर्फ़ यार हैं, न कोई मालिक है और न कोई छोटा',
    ],
    linesHinglish: [
      'Duniya bhar ke bade padon aur khitaabon ko darwaze ke baahar rakh aana',
      'Yahaan sab sirf yaar hain, na koi maalik hai aur na koi chhota',
    ],
    linesEnglish: [
      'Leave tall job badges and corner-office titles parked neatly outside',
      'Inside this circle everyone stands purely equal as lifelong buddies',
    ],
  },
  {
    title: 'प्यालों की खनक में पुरानी याद',
    titleEnglish: 'Old Memories in Clinking Glasses',
    linesHindi: [
      'चियर्स बोलते ही दो काँच के प्यालों से जो हल्की सी खनक उठती है',
      'वह आवाज़ कॉलेज के हॉस्टल वाली पुरानी शामों तक पहुँचा देती है',
    ],
    linesHinglish: [
      'Cheers bolte hi do kaanch ke pyaalon se jo halki si khanak uthti hai',
      'Woh aawaz college ke hostel waali puraani shaamon tak pahuncha deti hai',
    ],
    linesEnglish: [
      'That gentle crystal clink ringing softly around raised toasts',
      'Sends hearts racing straight back into carefree college hostel nights',
    ],
  },
  {
    title: 'चाँद को साक्षी मानकर चैन',
    titleEnglish: 'Peace Shared Under Watchful Moon',
    linesHindi: [
      'आज न कोई शिकवा करना है किसी से और न ही कल की चिंता ढोनी है',
      'चाँद भी ऊपर बैठा मुस्कुरा रहा है मानो कह रहा हो—आज बस जी लो',
    ],
    linesHinglish: [
      'Aaj na koi shikwa karna hai kisi se aur na hi kal ki chinta dhoni hai',
      'Chaand bhi oopar baitha muskura raha hai maano keh raha ho—aaj bas jee lo',
    ],
    linesEnglish: [
      'Tonight carries zero grudges to settle and zero tomorrow worries to haul',
      'Even the full moon grins down gently whispering—simply savor right now',
    ],
  },
  {
    title: 'खामोश शायर और खाली मेज़',
    titleEnglish: 'Quiet Poet at Corner Table',
    linesHindi: [
      'कलम हाथ में लेकर जो इंसान कोने की मेज़ पर बैठा लिखता रहता है',
      'वह पैमाने से कम और अपने जज़्बातों से ज़्यादा झूमता है शाम को',
    ],
    linesHinglish: [
      'Kalam haath mein lekar jo insaan kone ki mez par baitha likhta rehta hai',
      'Woh paimaane se kam aur apne jazbaaton se zyada jhoomta hai shaam ko',
    ],
    linesEnglish: [
      'The quiet writer scribbling notebooks alone in a dim wooden booth',
      'Sways far more deeply on pure feeling than anything poured inside glass',
    ],
  },
  {
    title: 'सच्ची बातों का असर गहरा',
    titleEnglish: 'Deep Echo of Plainspoken Words',
    linesHindi: [
      'दिखावे की महफ़िलों में अक्सर मीठे झूठ परोसे जाते हैं चाँदी में',
      'सादे अड्डे पर यारों के दो कड़वे सच भी दिल को सुकून दे जाते हैं',
    ],
    linesHinglish: [
      'Dikhaawe ki mehfilon mein aksar meethe jhooth parose jaate hain chaandi mein',
      'Saade adde par yaaron ke do kadwe sach bhi dil ko sukoon de jaate hain',
    ],
    linesEnglish: [
      'Polished galas serve sweet fiction neatly plated on silver trays',
      'Simple hangout tables hand you two blunt truths that actually heal',
    ],
  },
  {
    title: 'हँसी के संग छलकती पुरानी याद',
    titleEnglish: 'Old Stories Spilling With Laughter',
    linesHindi: [
      'जैसे ही पुरानी स्कूल ट्रिप का कोई बेतुका किस्सा छेड़ देता है कोई',
      'आधी टेबल पर ठहाके गूँजते हैं और आँखें हँसते-हँसते नम हो जाती हैं',
    ],
    linesHinglish: [
      'Jaise hi puraani school trip ka koi betuka kissa chhed deta hai koi',
      'Aadhi table par thahaake goonjte hain aur aankhein hanste-hanste nam ho jaati hain',
    ],
    linesEnglish: [
      'Mention one absurd memory from old sophomore road trips years back',
      'And half the table laughs till cheeks hurt and eyes mist warmly over',
    ],
  },
  {
    title: 'पीने वाले की साफ़ नियत',
    titleEnglish: 'Clean Heart Behind the Glass',
    linesHindi: [
      'ज़माने ने तो यूँ ही बदनाम कर रखा है शाम की इन महफ़िलों को यारो',
      'असली ख़राबी प्याले में नहीं, इंसान की अपनी सोच में होती है',
    ],
    linesHinglish: [
      'Zamaane ne to yoon hi badnaam kar rakha hai shaam ki in mehfilon ko yaaro',
      'Asli kharaabi pyaale mein nahin, insaan ki apni soch mein hoti hai',
    ],
    linesEnglish: [
      'Idle critics rush effortlessly to blame quiet evening taverns for chaos',
      'Yet trouble never lived inside crystal—it always starts inside character',
    ],
  },
  {
    title: 'बर्फ़ की तरह पिघलता तनाव',
    titleEnglish: 'Tension Melting Like Clear Ice',
    linesHindi: [
      'हफ़्ते भर का जमा हुआ तनाव ऐसे पिघलने लगता है धीमे-धीमे आज',
      'जैसे गिलास के अंदर बर्फ़ के टुकड़े चुपचाप पानी में मिल जाते हैं',
    ],
    linesHinglish: [
      'Hafte bhar ka jama hua tanaav aise pighalne lagta hai dheeme-dheeme aaj',
      'Jaise gilaas ke andar barf ke tukde chupchaap paani mein mil jaate hain',
    ],
    linesEnglish: [
      'Five days of stiff office pressure soften effortlessly tonight',
      'Melting clean away just like ice cubes swirling quietly down cool water',
    ],
  },
  {
    title: 'मोहब्बत के नशे की मिसाल',
    titleEnglish: 'Love Outlasting Any Pour',
    linesHindi: [
      'दुनिया भर के मयख़ाने देख लिए मैंने सफ़र करते हुए अलग शहरों में',
      'पर तुम्हारी एक मुस्कान जैसा नशा आज तक कहीं दोबारा न मिला',
    ],
    linesHinglish: [
      'Duniya bhar ke maikhaane dekh liye maine safar karte hue alag shehron mein',
      'Par tumhaari ek muskaan jaisa nasha aaj tak kahin dobaara na mila',
    ],
    linesEnglish: [
      'I stepped inside lively lounges spanning countless distant cities',
      'Yet never tasted anything half as heady as your unguarded smile',
    ],
  },
  {
    title: 'शहर की रोशनी में मस्त चाल',
    titleEnglish: 'Easy Stride Under Evening Lights',
    linesHindi: [
      'फ़िक्र को कुछ घंटे के लिए घर पर ताला लगाकर रख आया हूँ मैं',
      'आज शाम बस संगीत, हल्की हवा और दोस्तों की मुस्कान के नाम है',
    ],
    linesHinglish: [
      'Fikr ko kuch ghante ke liye ghar par taala lagaakar rakh aaya hoon main',
      'Aaj shaam bas sangeet, halki hawa aur doston ki muskaan ke naam hai',
    ],
    linesEnglish: [
      'I locked every nagging spreadsheet worry neatly indoors for three hours',
      'Tonight belongs solely to crisp music, cool breeze, and loyal grins',
    ],
  },
  {
    title: 'अधूरे ग़म को हँसी में उड़ाना',
    titleEnglish: 'Laughing Past Lingering Sorrows',
    linesHindi: [
      'हर छोटी चोट पर बैठकर रोते रहना हमारी आदत नहीं रही कभी',
      'हमने तो टूटे हुए प्यालों की जगह नए यार जोड़कर जश्न मनाना सीखा',
    ],
    linesHinglish: [
      'Har chhoti chot par baithkar rote rehna hamaari aadat nahin rahi kabhi',
      'Humne to toote hue pyaalon ki jagah naye yaar jodkar jashn manaana seekha',
    ],
    linesEnglish: [
      'Brooding endlessly over minor scrapes never matched our playful stride',
      'Raising fresh toasts with kind companions turns bruises into stories fast',
    ],
  },
  {
    title: 'ग़ज़ल की महफ़िल और वाह-वाह',
    titleEnglish: 'Chorus of Applause at Ghazal Night',
    linesHindi: [
      'जब कोई पुराना शेर दिल की बिल्कुल सही नस पर आकर छू जाए शाम को',
      'तो पूरी महफ़िल से एक साथ निकलती वाह-वाह दिन बना देती है',
    ],
    linesHinglish: [
      'Jab koi puraana sher dil ki bilkul sahi nas par aakar chhoo jaaye shaam ko',
      'To poori mehfil se ek saath nikalti waah-waah din bana deti hai',
    ],
    linesEnglish: [
      'When one classic couplet strikes the exact tender chord inside a room',
      'Unanimous murmured cheers across the table turn the whole week golden',
    ],
  },
  {
    title: 'शराफ़त में लिपटा मस्ताना अंदाज़',
    titleEnglish: 'Gentle Poise Inside Carefree Spirit',
    linesHindi: [
      'मस्त रहना अच्छी बात है पर अपनी मर्यादा की रेखा कभी मत भूलना',
      'असली मज़ा तभी है जब सुबह हर कोई तुम्हारी मौजूदगी को याद करके हँसे',
    ],
    linesHinglish: [
      'Mast rehna achhi baat hai par apni maryaada ki rekha kabhi mat bhoolna',
      'Asli maza tabhi hai jab subah har koi tumhaari maujoodgi ko yaad karke hanse',
    ],
    linesEnglish: [
      'Unwinding cheerfully feels great while honoring clear graceful bounds',
      'Best nights leave everyone smiling warmly recalling your jokes next morning',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'आख़िरी पैग पर घर की याद',
    titleEnglish: 'Thoughts Turning Homeward Last Round',
    linesHindi: [
      'महफ़िल चाहे जितनी भी जमी रहे रात के ग्यारह बजे तक यारो',
      'दिल की सुई हमेशा घर के दरवाज़े और अपनों की मुस्कान पर लौट आती है',
    ],
    linesHinglish: [
      'Mehfil chaahe jitni bhi jami rahe raat ke gyaarah baje tak yaaro',
      'Dil ki sui hamesha ghar ke darwaze aur apnon ki muskaan par laut aati hai',
    ],
    linesEnglish: [
      'No matter how lively music stays right past eleven p.m. with friends',
      'The heart’s true compass always swings steadily back toward loved ones home',
    ],
  },
  {
    title: 'फिसलन भरे मोड़ पर पक्का यार',
    titleEnglish: 'Steady Shoulder of Loyal Buddy',
    linesHindi: [
      'कभी कदम डगमगाएँ भी जिंदगी के किसी फिसलन भरे मोड़ पर अगर',
      'तो सँभालने के लिए कम से कम एक पक्का यार ज़रूर होना चाहिए पास',
    ],
    linesHinglish: [
      'Kabhi kadam dagmagayein bhi zindagi ke kisi phisalan bhare mod par agar',
      'To sambhaalne ke liye kam se kam ek pakka yaar zaroor hona chahiye paas',
    ],
    linesEnglish: [
      'Should boots ever wobble along slippery gravel turns in life',
      'Everybody deserves at least one rock-solid buddy holding your elbow steady',
    ],
  },
  {
    title: 'चंद बूंदों में छुपा सुकून का साज़',
    titleEnglish: 'Calm Rhythm Inside Evening Rain',
    linesHindi: [
      'सारी दुनिया की भागदौड़ से दो घंटे की छुट्टी मिल जाती है शाम को',
      'जब हाथ में प्याला, कान में गीत और सामने पुराना दोस्त बैठा हो',
    ],
    linesHinglish: [
      'Saari duniya ki bhaagdaud se do ghante ki chhutti mil jaati hai shaam ko',
      'Jab haath mein pyaala, kaan mein geet aur saamne puraana dost baitha ho',
    ],
    linesEnglish: [
      'Two blissful hours off from the noisy treadmill arrive cleanly at dusk',
      'One cold glass in hand, gentle songs playing, and an old friend grinning across',
    ],
  },
  {
    title: 'दिल खोल देने वाला सन्नाटा',
    titleEnglish: 'Quiet Corner Opening Guarded Hearts',
    linesHindi: [
      'जो बात इंसान महीनों तक अपने घर में भी नहीं कह पाता किसी से',
      'वह दो दोस्तों के बीच बैठते ही खुद ज़ुबान पर आ जाती है आसानी से',
    ],
    linesHinglish: [
      'Jo baat insaan mahinon tak apne ghar mein bhi nahin keh paata kisi se',
      'Woh do doston ke beech baithte hi khud zubaan par aa jaati hai aasaani se',
    ],
    linesEnglish: [
      'Feelings bottled shyly indoors for three heavy months on end',
      'Roll right off the tongue within minutes sitting beside trusted pals',
    ],
  },
  {
    title: 'ख़ुशी के जश्न का पहला जाम',
    titleEnglish: 'First Toast Raised to Good News',
    linesHindi: [
      'हमेशा ग़म ही नहीं होते महफ़िल सजाने का कारण मेरे दोस्तों',
      'जब किसी यार को नई तरक्की मिले तो जश्न भी वैसे ही मनता है',
    ],
    linesHinglish: [
      'Hamesha gham hi nahin hote mehfil sajaane ka kaaran mere doston',
      'Jab kisi yaar ko nayi tarakki mile to jashn bhi waise hi manta hai',
    ],
    linesEnglish: [
      'Heavy chapters are hardly the only reason friends pull chairs together',
      'When a buddy lands his dream break, glasses clink brightest in joy',
    ],
  },
  {
    title: 'बिन पिए झूमने का हुनर',
    titleEnglish: 'Art of Joy Without Any Bottle',
    linesHindi: [
      'असली मस्त इंसान को हमेशा किसी बोतल की ज़रूरत नहीं पड़ती है',
      'वह तो सादी हवा और प्यारी दोस्ती के नशे में ही गुनगुनाता रहता है',
    ],
    linesHinglish: [
      'Asli mast insaan ko hamesha kisi bottle ki zaroorat nahin padti hai',
      'Woh to saadi hawa aur pyari dosti ke nashe mein hi gungunaata rehta hai',
    ],
    linesEnglish: [
      'A naturally joyful spirit never waits on corks popping to celebrate',
      'Cool twilight air and rich friendship keep them humming brightly anytime',
    ],
  },
  {
    title: 'पुराने क़िस्सों की मीठी खुमारी',
    titleEnglish: 'Warm Glow of Vintage Stories',
    linesHindi: [
      'पाँच साल पुराना कोई मज़ेदार किस्सा सौवीं बार भी सुनाया जाए यहाँ',
      'तो हर बार उतनी ही ताज़ा हँसी फूट पड़ती है पूरी टेबल के चारों ओर',
    ],
    linesHinglish: [
      'Paanch saal puraana koi mazedaar kissa sauvin baar bhi sunaaya jaaye yahaan',
      'To har baar utni hi taaza hansi phoot padti hai poori table ke chaaron or',
    ],
    linesEnglish: [
      'Retell one legendary prank from five years back for the hundredth time',
      'And fresh roaring laughter erupts around the table like brand new',
    ],
  },
  {
    title: 'सर्द शाम में गरम दोस्ती',
    titleEnglish: 'Warm Friendship on Chilly Dusk',
    linesHindi: [
      'बाहर पारा चाहे कितना भी नीचे गिर जाए दिसंबर की रातों में',
      'यारों की महफ़िल और उनकी गर्मजोशी हमेशा मौसम गरम रखती है',
    ],
    linesHinglish: [
      'Baahar paara chaahe kitna bhi neeche gir jaaye December ki raaton mein',
      'Yaaron ki mehfil aur unki garmjoshi hamesha mausam garm rakhti hai',
    ],
    linesEnglish: [
      'No matter how steeply December frost drops outside cafe glass',
      'Close friends swapping warm stories keep the entire evening cozy',
    ],
  },
  {
    title: 'मदहोश करती सादगी की शाम',
    titleEnglish: 'Evening Charmed by Plain Warmth',
    linesHindi: [
      'न कोई महँगा सजावट वाला झूमर, न भारी संगीत का शोर यहाँ पर',
      'बस दो कुर्सियाँ, साफ आसमान और दिल से निकली सच्ची बातें काफी हैं',
    ],
    linesHinglish: [
      'Na koi mehnga sajaawat waala jhoomar, na bhaari sangeet ka shor yahaan par',
      'Bas do kursiyaan, saaf aasmaan aur dil se nikli sachhi baatein kaafi hain',
    ],
    linesEnglish: [
      'Zero crystal chandeliers and zero booming basslines needed tonight',
      'Two simple chairs beneath clear stars and honest conversation fill the soul',
    ],
  },
  {
    title: 'दिल की गहराई से उठी ग़ज़ल',
    titleEnglish: 'Verse Rising From Deep Heart',
    linesHindi: [
      'महफ़िल के आखिरी दौर में जब सबकी आवाज़ थोड़ी धीमी हो जाती है',
      'तब किसी कोने से निकली एक सच्ची शायरी सबका दिल छू जाती है',
    ],
    linesHinglish: [
      'Mehfil ke aakhiri daur mein jab sabki aawaz thodi dheemi ho jaati hai',
      'Tab kisi kone se nikli ek sachhi shayari sabka dil chhoo jaati hai',
    ],
    linesEnglish: [
      'Late into quiet gatherings when lively chatter slows to gentle murmurs',
      'One heartfelt two-line poem spoken softly touches every soul present',
    ],
  },
  {
    title: 'अजनबी भी बन जाते हैं हमसफ़र',
    titleEnglish: 'Strangers Turning Evening Allies',
    linesHindi: [
      'कभी-कभी बगल की मेज़ पर बैठा अनजान भी अपना सा लगने लगता है',
      'जब दोनों के ज़िंदगी के तजुर्बे एक ही कहानी में आकर मिल जाते हैं',
    ],
    linesHinglish: [
      'Kabhi-kabhi bagal ki mez par baitha anjaan bhi apna sa lagne lagta hai',
      'Jab dono ke zindagi ke tajurbe ek hi kahaani mein aakar mil jaate hain',
    ],
    linesEnglish: [
      'Sometimes a quiet stranger two tables away suddenly feels like kin',
      'When two separate life stories rhyme gently across shared lessons',
    ],
  },
  {
    title: 'प्याले से ज़्यादा सुकून का वज़न',
    titleEnglish: 'Peace Weighs More Than Any Cup',
    linesHindi: [
      'जो सुकून शाम को मन हल्का होने से मिलता है अपनों के बीच',
      'वह दुनिया की सबसे महँगी बोतल में भी भरकर नहीं बेचा जाता कभी',
    ],
    linesHinglish: [
      'Jo sukoon shaam ko mann halka hone se milta hai apnon ke beech',
      'Woh duniya ki sabse mehngi bottle mein bhi bharkar nahin becha jaata kabhi',
    ],
    linesEnglish: [
      'That calm weightlessness felt unloading your chest among true allies',
      'Cannot be bottled or sold at any price tag anywhere on earth',
    ],
  },
  {
    title: 'यादों की महफ़िल में रोशनी',
    titleEnglish: 'Lantern Glow in Memory Circle',
    linesHindi: [
      'जब भी कोई पुराना साथी शहर से बाहर चला जाता है नौकरी के लिए',
      'उसकी खाली कुर्सी पर भी हम एक गिलास उसकी याद में रख देते हैं',
    ],
    linesHinglish: [
      'Jab bhi koi puraana saathi shehar se baahar chala jaata hai naukri ke liye',
      'Uski khaali kursi par bhi hum ek gilaas uski yaad mein rakh dete hain',
    ],
    linesEnglish: [
      'Whenever an old buddy moves miles away chasing new work horizons',
      'We still raise our first cheerful toast fondly toward his empty seat',
    ],
  },
  {
    title: 'बेफ़िक्र हँसी का सबसे बड़ा नशा',
    titleEnglish: 'Carefree Laughter Beats Every Pour',
    linesHindi: [
      'दुनिया का हर नशा कुछ घंटों बाद उतर ही जाता है सुबह होते ही',
      'पर सच्चे यारों के साथ हँसी की खुमारी कई हफ़्तों तक रहती है',
    ],
    linesHinglish: [
      'Duniya ka har nasha kuch ghanton baad utar hi jaata hai subah hote hi',
      'Par sachhe yaaron ke saath hansi ki khumaari kai hafton tak rehti hai',
    ],
    linesEnglish: [
      'Every ordinary buzz fades cleanly out by sunrise next morning',
      'Yet that warm afterglow from laughing hard with close friends lasts weeks',
    ],
  },
  {
    title: 'शाम के सफ़र की सही मंज़िल',
    titleEnglish: 'Right Destination After Sunset',
    linesHindi: [
      'पूरी शाम घूमने के बाद भी अंत में इंसान वहीं पहुँचना चाहता है',
      'जहाँ बिना शर्त अपनापन और एक ठंडा गिलास पानी प्यार से मिले',
    ],
    linesHinglish: [
      'Poori shaam ghoomne ke baad bhi ant mein insaan wahin pahunchna chaahta hai',
      'Jahaan bina shart apnapan aur ek thanda gilaas paani pyar se mile',
    ],
    linesEnglish: [
      'After wandering busy bright streets all evening long',
      'Every heart yearns simply for unconditional welcome and calm home rest',
    ],
  },
  {
    title: 'आँखों की मस्ती, दिल की सादगी',
    titleEnglish: 'Playful Eyes, Simple Sincere Heart',
    linesHindi: [
      'चेहरे पर हल्की सी मस्ती और दिल के भीतर साफ़ नीयत रखना सीखो',
      'जिंदगी अपने आप किसी प्यारी सी शाम की तरह सुहानी लगने लगेगी',
    ],
    linesHinglish: [
      'Chehre par halki si masti aur dil ke bheetar saaf neeyat rakhna seekho',
      'Zindagi apne aap kisi pyari si shaam ki tarah suhaani lagne lagegi',
    ],
    linesEnglish: [
      'Carry playful sparkle in your gaze alongside spotless intent within',
      'Life naturally unfolds sweet as a breezy Friday twilight every week',
    ],
  },
  {
    title: 'नए मोड़ पर पुराना अंदाज़',
    titleEnglish: 'Vintage Style at Brand-New Turns',
    linesHindi: [
      'उम्र चाहे कितनी भी बढ़ती चली जाए कैलेंडर के पन्नों के साथ',
      'यारों के बीच बैठते ही हम फिर बीस साल वाले नौजवान बन जाते हैं',
    ],
    linesHinglish: [
      'Umr chaahe kitni bhi badhti chali jaaye calendar ke pannon ke saath',
      'Yaaron ke beech baithte hi hum phir bees saal waale naujawaan ban jaate hain',
    ],
    linesEnglish: [
      'No matter how many birthdays stack steadily across our calendars',
      'Pull up beside old schoolmates and instantly we feel twenty again',
    ],
  },
  {
    title: 'बिन बोले समझी गई प्यास',
    titleEnglish: 'Thirst Understood Without Asking',
    linesHindi: [
      'प्यासे की हालत बताने के लिए लंबे भाषण की ज़रूरत नहीं पड़ती',
      'सच्चा दोस्त बस आँखों की थकान देखकर ही मेज़ सजा देता है शाम को',
    ],
    linesHinglish: [
      'Pyaase ki haalat bataane ke liye lambe bhaashan ki zaroorat nahin padti',
      'Sachha dost bas aankhon ki thakaan dekhkar hi mez saja deta hai shaam ko',
    ],
    linesEnglish: [
      'Explaining deep weariness never calls for dramatic speeches',
      'One true pal spots tired eyes at five and sets two glasses waiting',
    ],
  },
  {
    title: 'महफ़िल में समय का थम जाना',
    titleEnglish: 'Time Standing Still in Good Company',
    linesHindi: [
      'दफ़्तर में एक घंटा भी पूरा एक साल जैसा लंबा लगता है कई बार',
      'और यारों की महफ़िल में चार घंटे कब बीत जाएँ पता नहीं चलता',
    ],
    linesHinglish: [
      'Daftar mein ek ghanta bhi poora ek saal jaisa lamba lagta hai kai baar',
      'Aur yaaron ki mehfil mein chaar ghante kab beet jaayein pata nahin chalta',
    ],
    linesEnglish: [
      'One slow office meeting drags past like three dreary winters',
      'Yet four lively hours with true friends evaporate inside one blink',
    ],
  },
  {
    title: 'मुस्कान के संग उठता हर जाम',
    titleEnglish: 'Every Glass Raised With Kindness',
    linesHindi: [
      'आज की शाम न किसी के जाने का अफ़सोस है, न कोई पुरानी शिकायत',
      'बस जो साथ हैं उनकी सलामती और लंबी हँसी के नाम एक सलाम है',
    ],
    linesHinglish: [
      'Aaj ki shaam na kisi ke jaane ka afsos hai, na koi puraani shikaayat',
      'Bas jo saath hain unki salaamati aur lambi hansi ke naam ek salaam hai',
    ],
    linesEnglish: [
      'Zero sighs over bygone chapters tonight and zero stale complaints',
      'Simply raising a warm cheer to everyone standing healthy beside us now',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'चंद लम्हों का शाहजहाँ',
    titleEnglish: 'King of Peaceful Evening Hours',
    linesHindi: [
      'ताज की ज़रूरत किसको है जब शाम को मन बिल्कुल आज़ाद हो जाए',
      'चार यार, मीठी ग़ज़ल और हल्की ठंड हर किसी को राजा बना देती है',
    ],
    linesHinglish: [
      'Taaj ki zaroorat kisko hai jab shaam ko mann bilkul aazaad ho jaaye',
      'Chaar yaar, meethi ghazal aur halki thand har kisi ko raaja bana deti hai',
    ],
    linesEnglish: [
      'Who misses heavy crowns when dusk sets your whole spirit free',
      'Four dear pals, gentle verses, and crisp evening air feel completely royal',
    ],
  },
  {
    title: 'भीतर के शोर से दो पल राहत',
    titleEnglish: 'Traveler Seeking Quiet Lounge',
    linesHindi: [
      'हर इंसान मयख़ाने में दुनिया भुलाने के लिए नहीं आता मेरे भाई',
      'कुछ लोग तो अपने ही भीतर के शोर से दो पल राहत लेने आते हैं',
    ],
    linesHinglish: [
      'Har insaan maikhaane mein duniya bhulaane ke liye nahin aata mere bhai',
      'Kuch log to apne hi bheetar ke shor se do pal raahat lene aate hain',
    ],
    linesEnglish: [
      'Not everyone wanders in aiming to forget the outer world entirely',
      'Many come purely seeking two calm hours away from inner noise',
    ],
  },
  {
    title: 'दिल की ज़ुबान खोलती शाम',
    titleEnglish: 'Evening Loosening Guarded Words',
    linesHindi: [
      'जो लोग दिन भर बिल्कुल शांत और गंभीर बने रहते हैं काम के बीच',
      'शाम की महफ़िल में उन्हीं के सबसे मज़ेदार चुटकुले सुनने मिलते हैं',
    ],
    linesHinglish: [
      'Jo log din bhar bilkul shaant aur gambheer bane rehte hain kaam ke beech',
      'Shaam ki mehfil mein unhin ke sabse mazedaar chutkule sunne milte hain',
    ],
    linesEnglish: [
      'Folks wearing stern poker faces around daytime boardrooms all week',
      'Inevitably crack the wildest funniest jokes once evening settles',
    ],
  },
  {
    title: 'साक़ी और सवेरे का वादा',
    titleEnglish: 'Host and Promise of Bright Dawn',
    linesHindi: [
      'रात कितनी भी मस्त और गहरी हो जाए गीतों के बीच बैठकर',
      'हर मुसाफ़िर को याद रहना चाहिए कि सुबह नया सवेरा इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Raat kitni bhi mast aur gehri ho jaaye geeton ke beech baithkar',
      'Har musaafir ko yaad rehna chahiye ki subah naya savera intezaar kar raha hai',
    ],
    linesEnglish: [
      'However enchanted midnight songs grow around warm lantern booths',
      'Remember softly that bright brand-new sunbeams greet every path at dawn',
    ],
  },
  {
    title: 'अधूरी बात का मीठा ज़ायका',
    titleEnglish: 'Sweet Pause Inside Unfinished Talk',
    linesHindi: [
      'सारी बातें एक ही रात में खत्म कर देना ज़रूरी नहीं होता दोस्तों',
      'कुछ किस्से अगले शुक्रवार की शाम के लिए भी बचाकर रखने चाहिए',
    ],
    linesHinglish: [
      'Saari baatein ek hi raat mein khatam kar dena zaroori nahin hota doston',
      'Kuch kisse agle shukravaar ki shaam ke liye bhi bachaakar rakhne chahiye',
    ],
    linesEnglish: [
      'No rule demands finishing every life update inside one single night',
      'Always tuck a couple juicy stories safely aside for next Friday night',
    ],
  },
  {
    title: 'काँच की चमक और मन की सफ़ाई',
    titleEnglish: 'Crystal Shine and Clear Conscience',
    linesHindi: [
      'प्याला तभी सुंदर लगता है जब वह अंदर और बाहर से बिल्कुल साफ़ हो',
      'इंसान का किरदार भी बिल्कुल वैसा ही पारदर्शी होना चाहिए यारो',
    ],
    linesHinglish: [
      'Pyaala tabhi sundar lagta hai jab woh andar aur baahar se bilkul saaf ho',
      'Insaan ka kirdaar bhi bilkul waisa hi paardarshi hona chahiye yaaro',
    ],
    linesEnglish: [
      'Fine crystal glistens brightest when spotless both inside and outside',
      'Human character shines prettiest carrying that exact transparent grace',
    ],
  },
  {
    title: 'बिना माँग के मिली महफ़िल',
    titleEnglish: 'Unexpected Evening Among Allies',
    linesHindi: [
      'जो शाम बिना किसी प्लान के अचानक बन जाती है दोस्तों के मिलने से',
      'वही पूरी ज़िंदगी की सबसे बेहतरीन और यादगार शाम साबित होती है',
    ],
    linesHinglish: [
      'Jo shaam bina kisi plan ke achaanak ban jaati hai doston ke milne se',
      'Wahi poori zindagi ki sabse behtareen aur yaadgaar shaam saabit hoti hai',
    ],
    linesEnglish: [
      'Impromptu evenings pulled together at six with zero calendar invites',
      'Almost always turn into our favorite lifelong nights worth retelling',
    ],
  },
  {
    title: 'मोहब्बत का बेदाग़ नशा',
    titleEnglish: 'Pure Intoxication of Sincere Love',
    linesHindi: [
      'अंगूर की बेलों में भी वह ताक़त कहाँ जो एक सच्ची मोहब्बत में होती है',
      'इश्क़ बिना एक बूँद चखे भी पूरी उम्र दिल को झूमने पर मजबूर करता है',
    ],
    linesHinglish: [
      'Angoor ki belon mein bhi woh taaqat kahaan jo ek sachhi mohabbat mein hoti hai',
      'Ishq bina ek boond chakhe bhi poori umr dil ko jhoomne par majboor karta hai',
    ],
    linesEnglish: [
      'No vineyard harvest matches the dizzy warmth inside genuine love',
      'One honest affection keeps hearts swaying gently across whole decades',
    ],
  },
  {
    title: 'गिलास में कम, बातों में ज़्यादा मज़ा',
    titleEnglish: 'More Richness in Talk Than Pour',
    linesHindi: [
      'महफ़िल का असली मज़ा ज़्यादा पीने से नहीं बल्कि ज़्यादा खुलने से आता है',
      'जब हर कोई अपने चेहरे का नक़ाब उतारकर बच्चों की तरह हँसने लगे',
    ],
    linesHinglish: [
      'Mehfil ka asli maza zyada peene se nahin balki zyada khulne se aata hai',
      'Jab har koi apne chehre ka naqaab utaarkar bachchon ki tarah hansne lage',
    ],
    linesEnglish: [
      'Evening magic rises never from pouring tall, rather from opening wide',
      'Watching grown friends shed stiff armor and laugh freely like kids',
    ],
  },
  {
    title: 'आँखों की गहराई में डूबा आशिक़',
    titleEnglish: 'Admirer Lost Inside Calm Gaze',
    linesHindi: [
      'साक़ी ने तो यूँ ही पूरा पैमाना भरकर सामने रख दिया था मेज़ पर',
      'पर मेरी निगाहें तो किसी की चुपचाप मुस्कुराती आँखों में अटक गईं',
    ],
    linesHinglish: [
      'Saaqi ne to yoon hi poora paimaana bharkar saamne rakh diya tha mez par',
      'Par meri nigaahein to kisi ki chupchaap muskuraati aankhon mein atak gayin',
    ],
    linesEnglish: [
      'The server politely poured a neat rimmed glass across the counter',
      'Yet my whole attention got caught cheerfully inside one smiling glance',
    ],
  },
  {
    title: 'तन्हाई का सुंदर साथी',
    titleEnglish: 'Quiet Companion to Still Nights',
    linesHindi: [
      'अकेले बैठकर भी कभी-कभी खुद के साथ जश्न मना लेना चाहिए दोस्त',
      'हर बार खुशी मनाने के लिए बड़ी भीड़ का इंतज़ार ज़रूरी नहीं होता',
    ],
    linesHinglish: [
      'Akele baithkar bhi kabhi-kabhi khud ke saath jashn mana lena chahiye dost',
      'Har baar khushi manaane ke liye badi bheed ka intezaar zaroori nahin hota',
    ],
    linesEnglish: [
      'Pouring a calm toast alone celebrating your own quiet progress matters too',
      'You never need twenty spectators just to honor a small good week',
    ],
  },
  {
    title: 'हल्की मुस्कान और भारी सुकून',
    titleEnglish: 'Light Smile and Heavy Peace',
    linesHindi: [
      'ज़िंदगी की कड़वी गोलियाँ निगलते-निगलते थक गया था मन बहुत दिन से',
      'आज शाम की मीठी हँसी ने सारा कड़वा स्वाद धोकर साफ़ कर दिया',
    ],
    linesHinglish: [
      'Zindagi ki kadwi goliyaan nigalte-nigalte thak gaya tha mann bahut din se',
      'Aaj shaam ki meethi hansi ne saara kadwa swaad dhokar saaf kar diya',
    ],
    linesEnglish: [
      'Swallowing harsh daytime realities left my chest weary all week long',
      'Tonight’s warm easy laughter washed every lingering bitterness clean',
    ],
  },
  {
    title: 'बदलते शहर में पुराना अड्डा',
    titleEnglish: 'Familiar Corner in Changing City',
    linesHindi: [
      'शहर में चाहे सौ नए चमकदार मॉल और बड़े होटल खुल गए हों आज',
      'पर यारों के साथ पुराने कोने वाली मेज़ की बराबरी कोई नहीं कर सकता',
    ],
    linesHinglish: [
      'Shehar mein chaahe sau naye chamakdaar mall aur bade hotel khul gaye hon aaj',
      'Par yaaron ke saath puraane kone waali mez ki baraabari koi nahin kar sakta',
    ],
    linesEnglish: [
      'Countless glossy towers and sleek rooftops opened downtown recently',
      'None ever rivals our scuffed back table shared warmly with old pals',
    ],
  },
  {
    title: 'खामोश साक़ी की समझदारी',
    titleEnglish: 'Wisdom of the Quiet Server',
    linesHindi: [
      'शायद ही कोई इंसान दुनिया के सुख-दुख इतने करीब से देखता होगा',
      'जितना शांत खड़ा साक़ी हर शाम अपनी मेज़ों पर बदलते चेहरे देखता है',
    ],
    linesHinglish: [
      'Shaayad hi koi insaan duniya ke sukh-dukh itne kareeb se dekhta hoga',
      'Jitna shaant khada saaqi har shaam apni mezon par badalte chehre dekhta hai',
    ],
    linesEnglish: [
      'Few folks witness human joys and hidden tears quite so closely',
      'As quiet servers polishing glasses calmly around shifting tables nightly',
    ],
  },
  {
    title: 'सपनों के नाम एक प्यारा जाम',
    titleEnglish: 'Sweet Toast Raised to Tomorrow',
    linesHindi: [
      'बीते हुए कल के नाम तो पूरी दुनिया आँसू बहा लेती है बैठकर',
      'चलो आज की शाम आने वाले सुनहरे कल के नाम मुस्कुराकर उठाते हैं',
    ],
    linesHinglish: [
      'Beete hue kal ke naam to poori duniya aansoo baha leti hai baithkar',
      'Chalo aaj ki shaam aane waale sunahare kal ke naam muskuraakar uthaate hain',
    ],
    linesEnglish: [
      'Anybody can sit around toasting regrets over yesterday’s rain',
      'Let us lift tonight’s glass smiling boldly toward golden mornings ahead',
    ],
  },
  {
    title: 'नज़रें मिलीं और वक़्त रुका',
    titleEnglish: 'Eyes Met and Clocks Paused',
    linesHindi: [
      'काफ़ी देर से हाथ में गिलास लिए सोच रहा था कि पियूँ या रुक जाऊँ',
      'इतने में उनकी मुस्कान दिखी और बिना पिए ही पूरा नशा उतर आया',
    ],
    linesHinglish: [
      'Kaafi der se haath mein gilaas liye soch raha tha ki piyoon ya ruk jaaoon',
      'Itne mein unki muskaan dikhi aur bina piye hi poora nasha utar aaya',
    ],
    linesEnglish: [
      'Swirling ice gently undecided whether to take even one more sip',
      'One glimpse of your smile settled across me sweeter than any vintage',
    ],
  },
  {
    title: 'संगीत की लहरों पर झूमता मन',
    titleEnglish: 'Mind Swaying Along Soft Melodies',
    linesHindi: [
      'जब पुराना किशोर या रफ़ी का गाना धीमे वॉल्यूम पर बजने लगे कहीं',
      'तो हर साधारण शाम अपने आप किसी शाही महफ़िल में बदल जाती है',
    ],
    linesHinglish: [
      'Jab puraana Kishore ya Rafi ka gaana dheeme volume par bajne lage kahin',
      'To har saadhaaran shaam apne aap kisi shaahi mehfil mein badal jaati hai',
    ],
    linesEnglish: [
      'Once timeless velvet melodies begin humming softly over evening speakers',
      'Any ordinary Tuesday transforms gently into an unforgettable gala',
    ],
  },
  {
    title: 'चंद दोस्तों की अनमोल दौलत',
    titleEnglish: 'Priceless Wealth of True Friends',
    linesHindi: [
      'जेब में भले बड़े नोट न हों तब भी यह शाम बहुत अमीर लगती है',
      'क्योंकि बगल में बैठा यार हर मुश्किल में साथ खड़े रहने का दम रखता है',
    ],
    linesHinglish: [
      'Jeb mein bhale bade note na hon tab bhi yeh shaam bahut ameer lagti hai',
      'Kyunki bagal mein baitha yaar har mushkil mein saath khade rehne ka dam rakhta hai',
    ],
    linesEnglish: [
      'Even with modest bills tucked inside jeans, tonight feels richly blessed',
      'When friends beside you carry loyalty sturdy enough for any storm',
    ],
  },
  {
    title: 'साफ़ दिल से निकली शायरी',
    titleEnglish: 'Poetry Born From Honest Heart',
    linesHindi: [
      'प्याला हाथ में आते ही हर कोई शायर क्यों बनने लगता है अचानक',
      'क्योंकि दिन भर की बनावट हटते ही दिल की सच्ची कविता जागती है',
    ],
    linesHinglish: [
      'Pyaala haath mein aate hi har koi shaayar kyun banne lagta hai achaanak',
      'Kyunki din bhar ki banaawat hat-te hi dil ki sachhi kavita jaagti hai',
    ],
    linesEnglish: [
      'Why does every quiet guest suddenly turn poetic by round two',
      'Because once daytime armor drops off, genuine unspoken poetry wakes inside',
    ],
  },
  {
    title: 'होश में रहकर जीने का सलीका',
    titleEnglish: 'Graceful Art of Balanced Living',
    linesHindi: [
      'मस्ती का मौसम आए तो जी भरकर मुस्कुराओ अपने प्यारों के संग',
      'बस इतना ध्यान रहे कि अगले दिन की ज़िम्मेदारी मुस्कुराकर निभा सको',
    ],
    linesHinglish: [
      'Masti ka mausam aaye to jee bharkar muskuraao apne pyaaron ke sang',
      'Bas itna dhyaan rahe ki agle din ki zimmedari muskuraakar nibha sako',
    ],
    linesEnglish: [
      'When festive seasons roll around, laugh wholehearted beside favorite friends',
      'Just guard tomorrow’s energy so sunrise duties meet a clear grin too',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'मयख़ाने की धूप-छाँव कहानी',
    titleEnglish: 'Sunlight and Shade Stories at Dusk',
    linesHindi: [
      'यहाँ कोई जीत की खुशी बाँटने आता है तो कोई हार का बोझ हल्का करने',
      'पर लौटते वक़्त हर किसी के चेहरे पर थोड़ी शांति ज़रूर दिखती है',
    ],
    linesHinglish: [
      'Yahaan koi jeet ki khushi baantne aata hai to koi haar ka bojh halka karne',
      'Par laut-te waqt har kisi ke chehre par thodi shaanti zaroor dikhti hai',
    ],
    linesEnglish: [
      'Some arrive celebrating fresh victories, others unloading heavy bruises',
      'Yet stepping back into night air everyone carries calmer shoulders home',
    ],
  },
  {
    title: 'प्याले के नीचे रखा पुराना नोट',
    titleEnglish: 'Old Coaster Under Evening Glass',
    linesHindi: [
      'मेज़ के कोने पर पड़े गत्ते के टुकड़े पर भी कभी कविता लिख दी थी हमने',
      'जब शब्दों की प्यास कागज़ और पेन के इंतज़ार में नहीं रुकी थी',
    ],
    linesHinglish: [
      'Mez ke kone par pade gatte ke tukde par bhi kabhi kavita likh di thi humne',
      'Jab shabdon ki pyaas kaagaz aur pen ke intezaar mein nahin ruki thi',
    ],
    linesEnglish: [
      'We even scribbled midnight couplets hastily across cardboard coasters once',
      'When inspired feelings refused waiting politely for leather notebooks',
    ],
  },
  {
    title: 'सर्द हवा में धुंधली परछाईं',
    titleEnglish: 'Warm Lantern Through Evening Mist',
    linesHindi: [
      'कोहरे भरी शाम में बाहर से मयख़ाने की पीली रोशनी ऐसी चमकती है',
      'जैसे ठंडे समंदर में किसी नाविक को दूर किनारा दिखाई दे गया हो',
    ],
    linesHinglish: [
      'Kohre bhari shaam mein baahar se maikhaane ki peeli roshni aisi chamakti hai',
      'Jaise thande samandar mein kisi naavik ko door kinaara dikhaayi de gaya ho',
    ],
    linesEnglish: [
      'Through chilly winter fog amber lantern light spills warm onto sidewalks',
      'Welcoming weary walkers like a calm harbor beacon seen from afar',
    ],
  },
  {
    title: 'बातों के बीच बहता वक़्त',
    titleEnglish: 'Hours Flowing Softly Through Stories',
    linesHindi: [
      'घड़ी की ओर देखना भूल जाने का असली सुख तब समझ में आता है',
      'जब दो दोस्त सालों बाद मिलकर पुरानी गलियों की सैर बातों में करें',
    ],
    linesHinglish: [
      'Ghadi ki or dekhna bhool jaane ka asli sukh tab samajh mein aata hai',
      'Jab do dost saalon baad milkar puraani galiyon ki sair baaton mein karein',
    ],
    linesEnglish: [
      'Pure bliss arrives the second you completely forget glancing at watches',
      'Two old friends wandering childhood streets again purely through conversation',
    ],
  },
  {
    title: 'अधूरे इश्क़ को सलाम करती शाम',
    titleEnglish: 'Gentle Toast to Sweet Bygone Love',
    linesHindi: [
      'जिसने कभी दिल से चाहा था, उसके नाम पर आज कोई शिकायत नहीं होगी',
      'बस उनकी खुशहाली के नाम पर एक शांत मुस्कान और छोटा जाम सही',
    ],
    linesHinglish: [
      'Jisne kabhi dil se chaaha tha, uske naam par aaj koi shikaayat nahin hogi',
      'Bas unki khushhaali ke naam par ek shaant muskaan aur chhota jaam sahi',
    ],
    linesEnglish: [
      'Zero bitter accusations tonight against someone who once held our trust',
      'Simply one calm smile and quiet toast wishing them bright joy ahead',
    ],
  },
  {
    title: 'दोस्त के बिना अधूरा पैमाना',
    titleEnglish: 'Glass Feels Incomplete Without Buddy',
    linesHindi: [
      'अकेले में तो पानी का स्वाद भी कुछ फीका ही लगता है कभी-कभी',
      'साथ बैठने वाला यार हो तो सादा नींबू पानी भी लाजवाब लगता है',
    ],
    linesHinglish: [
      'Akele mein to paani ka swaad bhi kuch feeka hi lagta hai kabhi-kabhi',
      'Saath baithne waala yaar ho to saada neembu paani bhi lajawaab lagta hai',
    ],
    linesEnglish: [
      'Sitting completely solo makes even chilled spring water taste oddly flat',
      'Put your favorite pal opposite you and simple lemonade turns festive',
    ],
  },
  {
    title: 'नशे से ज़्यादा गहरी मुस्कान',
    titleEnglish: 'Smile Running Deeper Than Any Buzz',
    linesHindi: [
      'किसी की एक झलक देखने के लिए आज तक किसी ने नशा नहीं छोड़ा',
      'बल्कि कई लोगों ने उनकी मुस्कान पाकर सारी बोतलें खुद छोड़ दीं',
    ],
    linesHinglish: [
      'Kisi ki ek jhalak dekhne ke liye aaj tak kisi ne nasha nahin chhoda',
      'Balki kai logon ne unki muskaan paakar saari botlein khud chhod din',
    ],
    linesEnglish: [
      'Rarely does external spirits compete once sincere affection walks nearby',
      'One genuine loving smile effortlessly leaves every bottle untouched on shelves',
    ],
  },
  {
    title: 'शहर की थकान उतारता गाना',
    titleEnglish: 'Evening Track Washing City Fatigue',
    linesHindi: [
      'महानगर की तेज़ भागती बसों और शोर ने दिन भर बहुत थका दिया था',
      'शाम की इस शांत धुन ने एक पल में सारा बोझ उतारकर रख दिया',
    ],
    linesHinglish: [
      'Mahaanagar ki tez bhaagti buson aur shor ne din bhar bahut thaka diya tha',
      'Shaam ki is shaant dhun ne ek pal mein saara bojh utaarkar rakh diya',
    ],
    linesEnglish: [
      'Rushing metros and relentless downtown horns wore patience razor thin',
      'One mellow evening ballad peeled the whole heavy workday off clean',
    ],
  },
  {
    title: 'चखने से ज़्यादा मीठी गपशप',
    titleEnglish: 'Banter Sweeter Than Any Platter',
    linesHindi: [
      'मेज़ पर क्या रखा है इससे ज़्यादा ज़रूरी है कि सामने कौन बैठा है',
      'अगर बात करने वाला यार हो तो दो घंटे भी दो मिनट लगते हैं',
    ],
    linesHinglish: [
      'Mez par kya rakha hai isse zyada zaroori hai ki saamne kaun baitha hai',
      'Agar baat karne waala yaar ho to do ghante bhi do minute lagte hain',
    ],
    linesEnglish: [
      'What sits plated across the table matters far less than who sits opposite',
      'With your best storyteller chatting, two hours slip past like two breaths',
    ],
  },
  {
    title: 'खामोश तारे और छत की ठंडक',
    titleEnglish: 'Quiet Stars and Rooftop Breeze',
    linesHindi: [
      'नीले आसमान के नीचे बैठकर पूरा शहर छोटा दिखने लगता है रात को',
      'और अपने सारे बड़े दुख तारे गिनते हुए हवा में घुल जाते हैं',
    ],
    linesHinglish: [
      'Neele aasmaan ke neeche baithkar poora shehar chhota dikhne lagta hai raat ko',
      'Aur apne saare bade dukh taare ginte hue hawa mein ghul jaate hain',
    ],
    linesEnglish: [
      'Under sprawling midnight skies, crowded city grids shrink calmly below',
      'Counting quiet stars dissolves heavy worries gently into cool night air',
    ],
  },
  {
    title: 'मयख़ाने से उधार नहीं लिया चैन',
    titleEnglish: 'Inner Peace Never Borrowed Outside',
    linesHindi: [
      'सुकून बाहर की किसी दुकान से दो घंटे के लिए उधार नहीं मिलता है',
      'जो अपने मन में शांत रहता है वह हर जगह खुश रह लेता है',
    ],
    linesHinglish: [
      'Sukoon baahar ki kisi dukaan se do ghante ke liye udhaar nahin milta hai',
      'Jo apne mann mein shaant rehta hai woh har jagah khush reh leta hai',
    ],
    linesEnglish: [
      'Lasting serenity cannot be rented across any counter for two easy hours',
      'Whoever carries quiet stillness inside thrives warmly anywhere on earth',
    ],
  },
  {
    title: 'साक़ी के पास सबसे ज़्यादा दुआएँ',
    titleEnglish: 'Server Gathering Quiet Blessings',
    linesHindi: [
      'थके हुए मुसाफ़िर को इज़्ज़त से पानी पिलाने वाला हर हाथ पाक है',
      'यहाँ लोग गिलास कम और अपना अकेलापन ज़्यादा बाँटकर लौटते हैं',
    ],
    linesHinglish: [
      'Thake hue musaafir ko izzat se paani pilaane waala har haath paak hai',
      'Yahaan log gilaas kam aur apna akelapan zyada baantkar laut-te hain',
    ],
    linesEnglish: [
      'Every gentle hand serving weary travelers with dignity earns grace',
      'Guests come carrying heavy solitude far more often than simple thirst',
    ],
  },
  {
    title: 'बिन कहे पढ़ी गई कहानी',
    titleEnglish: 'Story Read Without Single Word',
    linesHindi: [
      'कुछ लोग कोने में चुपचाप बैठकर बस बर्फ़ घुलते देखते रहते हैं देर तक',
      'उनकी खामोशी में हज़ारों अनकही दास्तानें छिपी होती हैं दोस्तों',
    ],
    linesHinglish: [
      'Kuch log kone mein chupchaap baithkar bas barf ghulte dekhte rehte hain der tak',
      'Unki khaamoshi mein hazaaron ankahi daastaanein chhipi hoti hain doston',
    ],
    linesEnglish: [
      'Some quiet souls sit gently watching ice melt in silent corners',
      'Holding whole novels of unspoken stories tucked neatly behind calm eyes',
    ],
  },
  {
    title: 'होश के किनारे पर मीठी मस्ती',
    titleEnglish: 'Sweet Joy Near Edge of Poise',
    linesHindi: [
      'इतनी ही मस्ती अच्छी लगती है जिससे किसी का रास्ता न रुके सड़क पर',
      'अपनी हँसी भी सलामत रहे और दुनिया का सम्मान भी बना रहे',
    ],
    linesHinglish: [
      'Itni hi masti achhi lagti hai jisse kisi ka raasta na ruke sadak par',
      'Apni hansi bhi salaamat rahe aur duniya ka sammaan bhi bana rahe',
    ],
    linesEnglish: [
      'Keep evening cheer graceful enough never to trouble a soul outside',
      'Guarding both your bright laughter and mutual dignity completely whole',
    ],
  },
  {
    title: 'दोस्त के नाम एक शांत सलाम',
    titleEnglish: 'Quiet Salute to Absent Friend',
    linesHindi: [
      'जो यार आज इस शहर में नहीं है हमारी शाम में शामिल होने को',
      'उसके नाम की खाली कुर्सी को देखकर भी दिल मुस्कुरा देता है',
    ],
    linesHinglish: [
      'Jo yaar aaj is shehar mein nahin hai hamaari shaam mein shaamil hone ko',
      'Uske naam ki khaali kursi ko dekhkar bhi dil muskura deta hai',
    ],
    linesEnglish: [
      'Even for that loyal friend stationed hundreds of miles away tonight',
      'Glancing toward one reserved chair beside us warms the whole table',
    ],
  },
  {
    title: 'सफ़र की थकान और शाम की राहत',
    titleEnglish: 'Road Fatigue Turned Evening Ease',
    linesHindi: [
      'हफ़्ते भर के लंबे सफ़र के बाद जब जूते उतरते हैं शुक्रवार शाम को',
      'तब एक ठंडे घूँट और धीमे गीत का सुकून शब्दों से परे होता है',
    ],
    linesHinglish: [
      'Hafte bhar ke lambe safar ke baad jab joote utarte hain shukravaar shaam ko',
      'Tab ek thande ghoont aur dheeme geet ka sukoon shabdon se pare hota hai',
    ],
    linesEnglish: [
      'When Friday evening finally unlaces dusty work boots after five rough days',
      'One chilled sip paired with soft acoustic chords feels beyond description',
    ],
  },
  {
    title: 'नज़र से शुरू, दिल पर खत्म',
    titleEnglish: 'Begun With Glance, Kept in Heart',
    linesHindi: [
      'इश्क़ और शाम दोनों की शुरुआत बड़ी शांत और मीठी होती है हमेशा',
      'जब तक समझ आता है कि दिल डूब चुका, तब तक बहुत देर हो जाती है',
    ],
    linesHinglish: [
      'Ishq aur shaam dono ki shuruwaat badi shaant aur meethi hoti hai hamesha',
      'Jab tak samajh aata hai ki dil doob chuka, tab tak bahut der ho jaati hai',
    ],
    linesEnglish: [
      'Both evening twilight and deep affection open wonderfully soft and sweet',
      'Before your mind notices how deep the glow runs, your whole heart smiles',
    ],
  },
  {
    title: 'पुराने यारों के नाम आख़िरी गीत',
    titleEnglish: 'Closing Song for Old Friends',
    linesHindi: [
      'महफ़िल उठने का वक़्त हो तो कोई उदास राग नहीं बजाना चाहिए',
      'एक प्यारे गीत पर गले मिलकर अगली मुलाक़ात का वादा करना चाहिए',
    ],
    linesHinglish: [
      'Mehfil uthne ka waqt ho to koi udaas raag nahin bajaana chahiye',
      'Ek pyare geet par gale milkar agli mulaakaat ka waada karna chahiye',
    ],
    linesEnglish: [
      'When closing time signals folding jackets before heading toward home',
      'Skip gloomy chords—share warm hugs and promise next month’s reunion',
    ],
  },
  {
    title: 'सुकून भरा अंतिम पैमाना',
    titleEnglish: 'Final Peaceful Measure of Night',
    linesHindi: [
      'आज न ज़्यादा पिया है और न ही कोई पुरानी कड़वाहट साथ लेकर चले हैं',
      'बस दिल हल्का और चेहरा मुस्कुराता हुआ घर की ओर मुड़ चले हैं',
    ],
    linesHinglish: [
      'Aaj na zyada piya hai aur na hi koi puraani kadwahat saath lekar chale hain',
      'Bas dil halka aur chehra muskuraata hua ghar ki or mud chale hain',
    ],
    linesEnglish: [
      'Zero excess tonight and zero sour regrets packed for the walk home',
      'Simply light shoulders and an easy smile steering straight toward rest',
    ],
  },
  {
    title: 'सवेरे की ताज़गी से भरा मन',
    titleEnglish: 'Mind Ready for Fresh Morning',
    linesHindi: [
      'शाम की मस्ती तभी सुंदर रहती है जब सुबह का सूरज दुश्मन न लगे',
      'जो रात को हँसे और सुबह काम पर चमके, वही असली खिलाड़ी है',
    ],
    linesHinglish: [
      'Shaam ki masti tabhi sundar rehti hai jab subah ka sooraj dushman na lage',
      'Jo raat ko hanse aur subah kaam par chamke, wahi asli khiladi hai',
    ],
    linesEnglish: [
      'Evening cheer stays sweetest when eight a.m. sunbeams never feel harsh',
      'Laugh freely tonight and shine crisp tomorrow—that defines real balance',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'बारिश में भीगता मयख़ाने का शीशा',
    titleEnglish: 'Raindrops Tracing Tavern Window Glass',
    linesHindi: [
      'बाहर तेज़ बूँदें काँच के शीशे पर लकीरें बनाती जा रही थीं लगातार',
      'और अंदर हम पुरानी यादों में खोए बिना बात के मुस्कुरा रहे थे',
    ],
    linesHinglish: [
      'Baahar tez boondein kaanch ke sheeshe par lakeerein banaati ja rahi thin lagaataar',
      'Aur andar hum puraani yaadon mein khoye bina baat ke muskura rahe the',
    ],
    linesEnglish: [
      'Rain streaks raced playfully down warm cafe panes outside',
      'While indoors we smiled effortlessly wandering fond old memories together',
    ],
  },
  {
    title: 'चंद घूँटों में छुपा दर्शन',
    titleEnglish: 'Simple Philosophy Over Slow Sips',
    linesHindi: [
      'दुनिया की बड़ी किताबें जो बातें सौ पन्नों में समझाती हैं जाकर',
      'बुज़ुर्ग दोस्तों की एक शाम दो वाक्यों में बिल्कुल साफ़ कर देती है',
    ],
    linesHinglish: [
      'Duniya ki badi kitaabein jo baatein sau pannon mein samjhaati hain jaakar',
      'Buzurg doston ki ek shaam do vaakyon mein bilkul saaf kar deti hai',
    ],
    linesEnglish: [
      'Heavy volumes take three hundred pages unpacking simple human truths',
      'One evening chatting with seasoned buddies clears it up in two warm lines',
    ],
  },
  {
    title: 'साक़ी से माफ़ी और नया वादा',
    titleEnglish: 'Light Grin and Promise to Host',
    linesHindi: [
      'आज बिल थोड़ा देर से सही पर ईमानदारी से चुका कर ही जाएँगे हम',
      'क्योंकि यारों की महफ़िल में उधार से ज़्यादा इज़्ज़त की क़द्र होती है',
    ],
    linesHinglish: [
      'Aaj bill thoda der se sahi par imaandari se chuka kar hi jaayenge hum',
      'Kyunki yaaron ki mehfil mein udhaar se zyada izzat ki kadr hoti hai',
    ],
    linesEnglish: [
      'Even after long slow rounds we always square every tab cleanly smiling',
      'In true company honor carries far heavier weight than leftover change',
    ],
  },
  {
    title: 'चेहरे की रौनक और मन का उजाला',
    titleEnglish: 'Bright Face and Unburdened Spirit',
    linesHindi: [
      'कभी-कभी दो घंटे की अच्छी संगत सौ दवाइयों से बेहतर असर करती है',
      'दिल हल्का होते ही चेहरे पर अपने आप गुलाबी चमक आ जाती है',
    ],
    linesHinglish: [
      'Kabhi-kabhi do ghante ki achhi sangat sau dawaaiyon se behtar asar karti hai',
      'Dil halka hote hi chehre par apne aap gulaabi chamak aa jaati hai',
    ],
    linesEnglish: [
      'Two joyful hours in warm company heal deeper than shelves of tonics',
      'Once heavy worries roll off, natural glow returns effortlessly to faces',
    ],
  },
  {
    title: 'खामोश मेज़ पर रखी डायरी',
    titleEnglish: 'Open Diary on Quiet Wooden Table',
    linesHindi: [
      'कई बेहतरीन शायरियाँ किसी कमरे में नहीं, शाम की मेज़ पर जन्म लेती हैं',
      'जहाँ हर टूटा-जुड़ा अनुभव खुद ही तुकबंदी बनकर कागज़ पर उतरता है',
    ],
    linesHinglish: [
      'Kai behtareen shaayariyaan kisi kamre mein nahin, shaam ki mez par janm leti hain',
      'Jahaan har toota-juda anubhav khud hi tukbandi bankar kaagaz par utarta hai',
    ],
    linesEnglish: [
      'Countless timeless couplets are born not at stern desks, rather at dusk booths',
      'Where lived joys and gentle scars rhyme smoothly straight onto ink',
    ],
  },
  {
    title: 'अजनबी शहर में पुरानी धुन',
    titleEnglish: 'Familiar Song in Distant City',
    linesHindi: [
      'किसी अनजान शहर के कोने में जब अपना पुराना हिंदी गाना सुनाई दे जाए',
      'तो एक घूँट में ही घर और मोहल्ले की पूरी हवा साथ आ बैठती है',
    ],
    linesHinglish: [
      'Kisi anjaan shehar ke kone mein jab apna puraana Hindi gaana sunaayi de jaaye',
      'To ek ghoont mein hi ghar aur mohalle ki poori hawa saath aa baithti hai',
    ],
    linesEnglish: [
      'Hearing a beloved classic tune drift through an unfamiliar foreign street',
      'Brings whole hometown breezes pulling right up beside your table fast',
    ],
  },
  {
    title: 'प्याले के पार दिखती उम्मीद',
    titleEnglish: 'Bright Hope Seen Beyond the Glass',
    linesHindi: [
      'हर मुश्किल दिन हमेशा के लिए कैलेंडर पर चिपक कर नहीं बैठता यारो',
      'थोड़ा हँसो, दोस्तों से मिलो—कल की सुबह फिर नई राह दिखा देगी',
    ],
    linesHinglish: [
      'Har mushkil din hamesha ke liye calendar par chipak kar nahin baithta yaaro',
      'Thoda hanso, doston se milo—kal ki subah phir nayi raah dikha degi',
    ],
    linesEnglish: [
      'Not one rough week stays glued permanently onto your calendar',
      'Laugh with loyal buddies tonight—sunrise tomorrow opens fresh paths wide',
    ],
  },
  {
    title: 'दोस्त के साथ आधी रात की सैर',
    titleEnglish: 'Midnight Stroll After Evening Chat',
    linesHindi: [
      'महफ़िल के बाद खाली सड़क पर टहलते हुए जो गपशप चलती है आपस में',
      'वही पूरी शाम की सबसे प्यारी और हल्की याद बनकर मन में रहती है',
    ],
    linesHinglish: [
      'Mehfil ke baad khaali sadak par tehalte hue jo gapshap chalti hai aapas mein',
      'Wahi poori shaam ki sabse pyari aur halki yaad bankar mann mein rehti hai',
    ],
    linesEnglish: [
      'Strolling quiet late sidewalks after closing time trading goofy jokes',
      'Often stays behind as the absolute warmest memory of the entire night',
    ],
  },
  {
    title: 'शोरगुल से दूर कोने की शांति',
    titleEnglish: 'Quiet Corner Far From Loud Crowds',
    linesHindi: [
      'जहाँ संगीत इतना धीमा हो कि दोस्त की बात आराम से सुनाई दे सके',
      'वहीं बैठकर शाम बिताने का असली आनंद आता है मेरे दोस्तों को',
    ],
    linesHinglish: [
      'Jahaan sangeet itna dheema ho ki dost ki baat aaraam se sunaayi de sake',
      'Wahin baithkar shaam bitaane ka asli aanand aata hai mere doston ko',
    ],
    linesEnglish: [
      'Give me a lounge where music stays gentle enough to hear friends laugh',
      'That calm cozy volume turns good evenings straight into perfection',
    ],
  },
  {
    title: 'सच्चे यारों की महफ़िल का नूर',
    titleEnglish: 'Glow Inside Circle of Real Friends',
    linesHindi: [
      'नक़ली लोगों के बीच महँगे जश्न से कहीं ज़्यादा रोशनी यहाँ होती है',
      'जब दो सच्चे दोस्त बिना किसी स्वार्थ के सामने बैठकर मुस्कुराएँ',
    ],
    linesHinglish: [
      'Nakli logon ke beech mehnge jashn se kahin zyada roshni yahaan hoti hai',
      'Jab do sachhe dost bina kisi swaarth ke saamne baithkar muskuraayein',
    ],
    linesEnglish: [
      'Far brighter warmth glows here than in pricey parties packed with users',
      'When two loyal friends sit grinning opposite each other with zero angle',
    ],
  },
  {
    title: 'गिलास में चाँद, दिल में आराम',
    titleEnglish: 'Moon Inside Cup, Ease Inside Chest',
    linesHindi: [
      'हर सवाल का जवाब आज ही मिल जाए ऐसी कोई ज़िद नहीं रही अब',
      'बस शाम को थोड़ा आराम और रात को चैन की नींद मिल जाए काफ़ी है',
    ],
    linesHinglish: [
      'Har sawaal ka jawaab aaj hi mil jaaye aisi koi zid nahin rahi ab',
      'Bas shaam ko thoda aaraam aur raat ko chain ki neend mil jaaye kaafi hai',
    ],
    linesEnglish: [
      'No stubborn rush left demanding every riddle solve itself before bed',
      'A calm quiet dusk and deep peaceful sleep feel more than plenty now',
    ],
  },
  {
    title: 'मीठे नशे सी बचपन की याद',
    titleEnglish: 'Childhood Memories Sweet as Buzz',
    linesHindi: [
      'बचपन में बिना किसी घूँट के भी कागज़ की नाव चलाकर झूम जाते थे हम',
      'आज भी यारों के संग वही बचपन लौट आए तो पूरी शाम बन जाती है',
    ],
    linesHinglish: [
      'Bachpan mein bina kisi ghoont ke bhi kaagaz ki naav chalaakar jhoom jaate the hum',
      'Aaj bhi yaaron ke sang wahi bachpan laut aaye to poori shaam ban jaati hai',
    ],
    linesEnglish: [
      'As kids sailing folded paper boats in rain puddles made us giddy free',
      'Recapturing that same carefree spark around buddies makes any night sing',
    ],
  },
  {
    title: 'दिल से पिलाई गई चाय या जाम',
    titleEnglish: 'Warmth Matters More Than What Is Poured',
    linesHindi: [
      'प्यार से परोसा गया सादा पानी भी अमूल्य लगता है थके मुसाफ़िर को',
      'और दिखावे से सजाई हुई दावत भी बिना अपनेपन के सूनी दिखती है',
    ],
    linesHinglish: [
      'Pyar se parosa gaya saada paani bhi amoolya lagta hai thake musaafir ko',
      'Aur dikhaawe se sajaayi hui daawat bhi bina apnepan ke sooni dikhti hai',
    ],
    linesEnglish: [
      'Even plain cool water poured warmly feels priceless to a weary traveler',
      'While flashy banquets lacking real affection stay hollow underneath',
    ],
  },
  {
    title: 'हँसी-मज़ाक में बीती थकान',
    titleEnglish: 'Work Fatigue Dissolved in Jokes',
    linesHindi: [
      'दो घंटे की हँसी-ठिठोली ने पूरे सप्ताह की भागदौड़ भुला दी आज',
      'वरना काम की फ़ाइलों ने तो दिमाग को बिल्कुल सुन्न कर दिया था',
    ],
    linesHinglish: [
      'Do ghante ki hansi-thitholi ne poore saptah ki bhaagdaud bhula di aaj',
      'Warna kaam ki filon ne to dimaag ko bilkul sunn kar diya tha',
    ],
    linesEnglish: [
      'Two brisk hours trading ridiculous stories erased five days of rush',
      'After endless spreadsheets nearly lulled every brain cell clean to sleep',
    ],
  },
  {
    title: 'आँखों की नमी से बनी कविता',
    titleEnglish: 'Verse Shaped by Quiet Mist',
    linesHindi: [
      'कभी-कभी महफ़िल में कोई गाना अचानक पुराने पल सामने ला देता है',
      'आँखें थोड़ी नम जरूर होती हैं पर होंठ मुस्कुराकर सलाम करते हैं',
    ],
    linesHinglish: [
      'Kabhi-kabhi mehfil mein koi gaana achaanak puraane pal saamne la deta hai',
      'Aankhein thodi nam zaroor hoti hain par honth muskuraakar salaam karte hain',
    ],
    linesEnglish: [
      'Occasionally an unexpected chorus summons cherished old afternoons back',
      'Eyes soften lightly with mist while lips smile gently saluting the past',
    ],
  },
  {
    title: 'मस्तमौला इंसान की पहचान',
    titleEnglish: 'Mark of Truly Free-Spirited Soul',
    linesHindi: [
      'कम हो तो भी बाँटकर खुश हो लेना और ज़्यादा मिले तो घमंड न करना',
      'यही सबसे प्यारी आदत हर मस्तमौला इंसान को खास बनाती है',
    ],
    linesHinglish: [
      'Kam ho to bhi baantkar khush ho lena aur zyada mile to ghamand na karna',
      'Yahi sabse pyari aadat har mastmaula insaan ko khaas banaati hai',
    ],
    linesEnglish: [
      'Sharing happily when cups run modest and staying humble when fortune pours',
      'That rare warm balance makes carefree souls loved everywhere they go',
    ],
  },
  {
    title: 'चाँदनी रात में धीमा संगीत',
    titleEnglish: 'Soft Music Under Moonlit Sky',
    linesHindi: [
      'बालकनी पर ठंडी हवा, हल्का संगीत और हाथों में पसंद का प्याला हो',
      'तो बड़ी से बड़ी छुट्टियों की सैर भी घर पर ही पूरी लगती है',
    ],
    linesHinglish: [
      'Balcony par thandi hawa, halka sangeet aur haathon mein pasand ka pyaala ho',
      'To badi se badi chhuttiyon ki sair bhi ghar par hi poori lagti hai',
    ],
    linesEnglish: [
      'Cool balcony breeze, gentle melodies, and a favorite glass in hand',
      'Makes staying right home feel richer than flying off on costly vacations',
    ],
  },
  {
    title: 'यारी का सबसे पक्का पैमाना',
    titleEnglish: 'Truest Measure of Deep Friendship',
    linesHindi: [
      'जब सब कुछ सही चल रहा हो तब तो पूरा शहर साथ बैठकर हँसता है',
      'असली यार वही है जो तुम्हारे चुप होने पर भी पास आकर बैठ जाए',
    ],
    linesHinglish: [
      'Jab sab kuch sahi chal raha ho tab to poora shehar saath baithkar hansta hai',
      'Asli yaar wahi hai jo tumhaare chup hone par bhi paas aakar baith jaaye',
    ],
    linesEnglish: [
      'When sunny skies shine smooth, half the town pulls chairs laughing near',
      'Real friends pull up quietly beside you even on nights words run dry',
    ],
  },
  {
    title: 'दिल की गहराई से उठी दुआ',
    titleEnglish: 'Warm Blessing Rising From Gatherings',
    linesHindi: [
      'हर शाम की महफ़िल खत्म होते वक़्त बस एक ही दुआ निकलती है दिल से',
      'सबके घर में सलामती, अच्छी सेहत और खुशियों की रोशनी बनी रहे',
    ],
    linesHinglish: [
      'Har shaam ki mehfil khatam hote waqt bas ek hi dua nikalati hai dil se',
      'Sabke ghar mein salaamati, achhi sehat aur khushiyon ki roshni bani rahe',
    ],
    linesEnglish: [
      'As every lively gathering wraps smoothly toward quiet midnight streets',
      'One heartfelt wish rises upward—health, safety, and bright joy for all homes',
    ],
  },
  {
    title: 'रंगीन शाम का सुंदर अंत',
    titleEnglish: 'Graceful Close to Colorful Dusk',
    linesHindi: [
      'इतनी सी बात याद रखना हमेशा हर शाम की मस्ती के बीच दोस्त',
      'चेहरे की हँसी बची रहे और किसी का दिल हमारी वजह से न टूटे कभी',
    ],
    linesHinglish: [
      'Itni si baat yaad rakhna hamesha har shaam ki masti ke beech dost',
      'Chehre ki hansi bachi rahe aur kisi ka dil hamaari wajah se na toote kabhi',
    ],
    linesEnglish: [
      'Hold one simple promise steady amidst every lively evening cheer',
      'Keep smiles glowing around the table and never bruise another heart once',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'नए मौसम के साथ नया अंदाज़',
    titleEnglish: 'Fresh Style With Changing Seasons',
    linesHindi: [
      'बदलती हवा के साथ पुरानी आदतों की धूल भी झाड़ देनी चाहिए थोड़ी',
      'नए दोस्तों, नए गीतों और नई मुस्कान का स्वागत खुलकर करना चाहिए',
    ],
    linesHinglish: [
      'Badalti hawa ke saath puraani aadaton ki dhool bhi jhaad deni chahiye thodi',
      'Naye doston, naye geeton aur nayi muskaan ka swaagat khulkar karna chahiye',
    ],
    linesEnglish: [
      'Shifting breezes invite brushing light dust off tired routines too',
      'Welcome new companions, fresh melodies, and brighter laughs wide open',
    ],
  },
  {
    title: 'मेज़ पर बिखरी यादों की तस्वीरें',
    titleEnglish: 'Old Memories Scattered on Table',
    linesHindi: [
      'फ़ोन की पुरानी गैलरी खोलते ही दो यारों की शाम हँसी से गूँज उठी',
      'हर धुँधली फ़ोटो के पीछे दस अनसुने मज़ेदार किस्से जाग उठे फिर से',
    ],
    linesHinglish: [
      'Phone ki puraani gallery kholte hi do yaaron ki shaam hansi se goonj uthi',
      'Har dhundhli photo ke peechhe das ansune mazedaar kisse jaag uthe phir se',
    ],
    linesEnglish: [
      'Scrolling old photo archives lit up our whole evening table with roaring laughs',
      'Every blurry snapshot woke ten ridiculous untold stories back alive',
    ],
  },
  {
    title: 'हल्के नशे में गहरा सच',
    titleEnglish: 'Simple Truth in Relaxed Moments',
    linesHindi: [
      'ज़िंदगी उतनी उलझी नहीं है जितना हम दिन के उजाले में बना लेते हैं',
      'शाम को सुकून से बैठकर देखो तो हर रास्ता सीधा और आसान दिखता है',
    ],
    linesHinglish: [
      'Zindagi utni uljhi nahin hai jitna hum din ke ujaale mein bana lete hain',
      'Shaam ko sukoon se baithkar dekho to har raasta seedha aur aasaan dikhta hai',
    ],
    linesEnglish: [
      'Life is rarely nearly as knotted as frantic daytime stress insists',
      'Sit calmly at dusk looking clearly and most winding trails straighten fast',
    ],
  },
  {
    title: 'शाम के सफ़र में संगीत साथी',
    titleEnglish: 'Melodies Riding Beside Twilight',
    linesHindi: [
      'कोई साथ बैठा हो या न हो, अच्छा संगीत हमेशा बेहतरीन साथी रहता है',
      'एक प्यारा गाना पूरी शाम को तन्हाई से निकालकर उत्सव बना देता है',
    ],
    linesHinglish: [
      'Koi saath baitha ho ya na ho, achha sangeet hamesha behtareen saathi rehta hai',
      'Ek pyara gaana poori shaam ko tanhaai se nikaalkar utsav bana deta hai',
    ],
    linesEnglish: [
      'Whether benches sit packed or quiet, great music stays finest company',
      'One soulful tune lifts lonely dusk straight into serene celebration',
    ],
  },
  {
    title: 'दिल की सलामती का जश्न',
    titleEnglish: 'Celebrating Whole and Steady Hearts',
    linesHindi: [
      'इतनी भागदौड़ और बदलते मौसमों के बाद भी हम सब हँस रहे हैं साथ',
      'इस ज़िंदादिली के नाम पर तो रोज़ एक मीठी शाम बनती है यारो',
    ],
    linesHinglish: [
      'Itni bhaagdaud aur badalte mausamon ke baad bhi hum sab hans rahe hain saath',
      'Is zindaadili ke naam par to roz ek meethi shaam banti hai yaaro',
    ],
    linesEnglish: [
      'After hectic years and shifting skies we still sit grinning side by side',
      'Resilient spirit like that deserves raising a happy toast anytime',
    ],
  },
  {
    title: 'छोटी सी महफ़िल, बड़ी खुशबू',
    titleEnglish: 'Small Gathering, Rich Lasting Warmth',
    linesHindi: [
      'दस हज़ार लोगों के मेले से कहीं ज़्यादा महक इस छोटे कमरे में है',
      'जहाँ तीन सच्चे मित्र दिल से दिल जोड़कर बैठे हुए मुस्कुरा रहे हैं',
    ],
    linesHinglish: [
      'Das hazaar logon ke mele se kahin zyada mehak is chhote kamre mein hai',
      'Jahaan teen sachhe mitra dil se dil jodkar baithe hue muskura rahe hain',
    ],
    linesEnglish: [
      'Far richer warmth fills this modest room than loud stadiums of ten thousand',
      'Where three honest friends trade smiles straight from unguarded hearts',
    ],
  },
  {
    title: 'प्याले से परे जीवन की मिठास',
    titleEnglish: 'Life Sweetness Beyond Any Glass',
    linesHindi: [
      'मिठास बोतलों में नहीं बल्कि आपके अपने बोलने के अंदाज़ में बसती है',
      'जिसकी आवाज़ में अपनापन हो, उसके पास बैठकर ही नशा हो जाता है',
    ],
    linesHinglish: [
      'Mithaas botlon mein nahin balki aapke apne bolne ke andaaz mein basti hai',
      'Jiski aawaz mein apnapan ho, uske paas baithkar hi nasha ho jaata hai',
    ],
    linesEnglish: [
      'Sweetness lives never in cellars—it rests inside gentle spoken kindness',
      'Sitting near someone whose voice breathes warmth brings instant delight',
    ],
  },
  {
    title: 'रविवार शाम का शांत आराम',
    titleEnglish: 'Quiet Ease of Sunday Twilight',
    linesHindi: [
      'हफ़्ते की सारी चिंता को कुछ देर के लिए किनारे रख देना ज़रूरी है',
      'रविवार की शाम बस सुकून की साँस और अपनों के साथ हँसने के लिए है',
    ],
    linesHinglish: [
      'Hafte ki saari chinta ko kuch der ke liye kinaare rakh dena zaroori hai',
      'Raviwaar ki shaam bas sukoon ki saans aur apnon ke saath hansne ke liye hai',
    ],
    linesEnglish: [
      'Tucking weekly worries safely on high shelves matters every once in a while',
      'Sunday dusk belongs strictly to deep breaths and easy living-room laughs',
    ],
  },
  {
    title: 'अनकही दोस्ती का रंगीन तोहफ़ा',
    titleEnglish: 'Colorful Gift of Quiet Brotherhood',
    linesHindi: [
      'बिन बोले जो दोस्त तुम्हारी थाली और गिलास का ध्यान रख ले चुपचाप',
      'उस इंसान से ज़्यादा अपना कोई और इस शहर में मिल नहीं सकता',
    ],
    linesHinglish: [
      'Bin bole jo dost tumhaari thaali aur gilaas ka dhyaan rakh le chupchaap',
      'Us insaan se zyada apna koi aur is shehar mein mil nahin sakta',
    ],
    linesEnglish: [
      'The buddy noticing quietly when your plate or cup runs low without asking',
      'Feels closer to true family than anyone else across the whole city',
    ],
  },
  {
    title: 'सूरज डूबने के बाद नई रौशनी',
    titleEnglish: 'Warm Glow After Sunset Falls',
    linesHindi: [
      'दिन ढलते ही बाज़ार की पीली बत्तियाँ और दोस्तों की चहल-पहल जागती है',
      'तब लगता है कि असली ज़िंदगी तो शाम के छह बजे ही शुरू होती है',
    ],
    linesHinglish: [
      'Din dhalte hi baazaar ki peeli battiyaan aur doston ki chahal-pahal jaagti hai',
      'Tab lagta hai ki asli zindagi to shaam ke chheh baje hi shuru hoti hai',
    ],
    linesEnglish: [
      'At sunset warm amber café lamps flicker awake alongside friendly chatter',
      'Making it feel like true living actually opens right at six p.m.',
    ],
  },
  {
    title: 'होश में रहकर इश्क़ की बातें',
    titleEnglish: 'Speaking Love With Clear Eyes',
    linesHindi: [
      'कुछ लोग सोचते हैं दिल की बातें सिर्फ़ नशे में ही बाहर आती हैं',
      'सच्चे आशिक़ तो पूरी साफ़ निगाहों से भी उतना ही गहरा इश्क़ करते हैं',
    ],
    linesHinglish: [
      'Kuch log sochte hain dil ki baatein sirf nashe mein hi baahar aati hain',
      'Sachhe aashiq to poori saaf nigaahon se bhi utna hi gehra ishq karte hain',
    ],
    linesEnglish: [
      'Some assume honest feelings need evening glasses just to step out',
      'True romantics speak just as boldly and tenderly with bright morning eyes',
    ],
  },
  {
    title: 'चंद सिक्कों से ज़्यादा कीमती शाम',
    titleEnglish: 'Evening Worth More Than Any Price',
    linesHindi: [
      'ज़िंदगी की सबसे बेहतरीन शामें अक्सर बहुत कम खर्च में ही बनती हैं',
      'बस संगत अच्छी हो तो नुक्कड़ की हवा भी जन्नत जैसी महसूस होती है',
    ],
    linesHinglish: [
      'Zindagi ki sabse behtareen shaamein aksar bahut kam kharch mein hi banti hain',
      'Bas sangat achhi ho to nukkad ki hawa bhi jannat jaisi mehsoos hoti hai',
    ],
    linesEnglish: [
      'Life’s finest evenings rarely arrive sporting steep restaurant checks',
      'Great company turns even a breezy street corner into pure paradise',
    ],
  },
  {
    title: 'शायर के प्याले में शब्दों की चमक',
    titleEnglish: 'Sparkle of Words in Poet’s Glass',
    linesHindi: [
      'कभी दो लाइनें लिखकर दोस्तों को सुनाओ तो उनकी वाह का मज़ा देखो',
      'लफ़्ज़ों का यह नशा हर दूसरे नशे से ज़्यादा मीठा और टिकाऊ होता है',
    ],
    linesHinglish: [
      'Kabhi do linein likhkar doston ko sunaao to unki waah ka maza dekho',
      'Lafzon ka yeh nasha har doosre nashe se zyada meetha aur tikaau hota hai',
    ],
    linesEnglish: [
      'Read two honest rhyming lines aloud across your friend table sometime',
      'Their smiling applause lingers sweeter and longer than any drink poured',
    ],
  },
  {
    title: 'बदलते वक़्त में स्थिर दोस्ती',
    titleEnglish: 'Steady Friendship in Changing Times',
    linesHindi: [
      'होटलों के नाम और शहर के नक्शे हर पाँच साल में बदलते रहते हैं',
      'पर जब वही पुराने यार बैठें तो पहली घूँट से ही बचपन लौट आता है',
    ],
    linesHinglish: [
      'Hotelon ke naam aur shehar ke nakshe har paanch saal mein badalte rehte hain',
      'Par jab wahi puraane yaar baithein to pehli ghoont se hi bachpan laut aata hai',
    ],
    linesEnglish: [
      'Lounge signs and avenue grids remodel every five brisk years',
      'Yet gather those exact old buddies and childhood magic wakes instantly',
    ],
  },
  {
    title: 'सफ़र की धूल और शाम का पानी',
    titleEnglish: 'Cool Wash After Dusty Miles',
    linesHindi: [
      'सड़क की लंबी धूप और थकान के बाद जब ठंडी छाँव नसीब होती है',
      'तो समझ आता है कि आराम की कीमत सिर्फ़ मेहनत करने वाला जानता है',
    ],
    linesHinglish: [
      'Sadak ki lambi dhoop aur thakaan ke baad jab thandi chhaanv naseeb hoti hai',
      'To samajh aata hai ki aaraam ki keemat sirf mehnat karne waala jaanta hai',
    ],
    linesEnglish: [
      'Stepping under cool shade after endless sun-baked highway miles',
      'Proves only folks who truly worked hard taste the sweetness of rest',
    ],
  },
  {
    title: 'दिल के कोने में जलती उम्मीद',
    titleEnglish: 'Warm Hope Lit Inside Heart',
    linesHindi: [
      'चाहे आज का दिन थोड़ा भारी और उलझा हुआ ही क्यों न रहा हो भाई',
      'दो मिनट मुस्कुराओ, कल फिर एक नई ताज़ा शुरुआत होने वाली है',
    ],
    linesHinglish: [
      'Chaahe aaj ka din thoda bhaari aur uljha hua hi kyun na raha ho bhai',
      'Do minute muskuraao, kal phir ek nayi taaza shuruwaat hone waali hai',
    ],
    linesEnglish: [
      'Even if today felt mildly tangled or heavier around your shoulders pal',
      'Smile easy tonight—tomorrow hands out a fresh clean starting line',
    ],
  },
  {
    title: 'चाँद की रोशनी में यारों की बात',
    titleEnglish: 'Buddy Talks Beneath Moonbeams',
    linesHindi: [
      'बंद कमरों से निकलकर जब चाँदनी के नीचे बैठते हैं हम सब कभी',
      'तो बिना किसी दिखावे के हर दिल अपनी असली कहानी कह देता है',
    ],
    linesHinglish: [
      'Band kamron se nikalkar jab chaandni ke neeche baithte hain hum sab kabhi',
      'To bina kisi dikhaawe ke har dil apni asli kahaani keh deta hai',
    ],
    linesEnglish: [
      'Step outside stuffy walls sitting gently beneath open silver moonlight',
      'And every guarded heart opens smoothly sharing its real story unadorned',
    ],
  },
  {
    title: 'सुकून भरा धीमा अंदाज़',
    titleEnglish: 'Calm Unhurried Evening Pace',
    linesHindi: [
      'सब कुछ जल्दी-जल्दी ख़त्म करने की आदत सिर्फ़ काम तक ही अच्छी है',
      'शाम की महफ़िल तो हमेशा आराम से घूँट-घूँट कर जी जाती है यारो',
    ],
    linesHinglish: [
      'Sab kuch jaldi-jaldi khatam karne ki aadat sirf kaam tak hi achhi hai',
      'Shaam ki mehfil to hamesha aaraam se ghoont-ghoont kar ji jaati hai yaaro',
    ],
    linesEnglish: [
      'Sprinting against deadlines belongs strictly inside daytime work hours',
      'Evening gatherings deserve being sipped unhurriedly one calm laugh at a time',
    ],
  },
  {
    title: 'हँसी से महकता पूरा आँगन',
    titleEnglish: 'Courtyard Scented With Laughter',
    linesHindi: [
      'किसी के दर्द का मज़ाक बनाने से कहीं ज़्यादा मज़ा इसमें है मेरे दोस्त',
      'कि तुम्हारे एक चुटकुले से उदास बैठा यार भी खिलखिला कर हँस पड़े',
    ],
    linesHinglish: [
      'Kisi ke dard ka mazaak banaane se kahin zyada maza ismein hai mere dost',
      'Ki tumhaare ek chutkule se udaas baitha yaar bhi khilkhila kar hans pade',
    ],
    linesEnglish: [
      'Far richer joy than poking fun at anyone’s stumble lies right here',
      'Watching your quiet friend burst out laughing brightly at one goofy line',
    ],
  },
  {
    title: 'शुक्रिया इस खूबसूरत शाम का',
    titleEnglish: 'Grateful for Another Lovely Dusk',
    linesHindi: [
      'दिन भर की मेहनत के बाद सुरक्षित घर और अच्छे दोस्त नसीब हैं हमें',
      'बस इसी एक बात के नाम पर रोज़ की शाम को सलाम करना बनता है',
    ],
    linesHinglish: [
      'Din bhar ki mehnat ke baad surakshit ghar aur achhe dost naseeb hain humein',
      'Bas isi ek baat ke naam par roz ki shaam ko salaam karna banta hai',
    ],
    linesEnglish: [
      'A safe warm roof after honest labor plus loyal friends who genuinely care',
      'That simple gift alone deserves saluting every peaceful sunset smiling',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'मस्ती और शराफ़त का प्यारा मेल',
    titleEnglish: 'Sweet Blend of Cheer and Grace',
    linesHindi: [
      'दिल हमेशा जवान रखो और चेहरे पर हल्की सी मुस्कान सजी रहने दो',
      'बाकी ज़िंदगी की हर उलझन यारों की महफ़िल में खुद सुलझ जाती है',
    ],
    linesHinglish: [
      'Dil hamesha jawaan rakho aur chehre par halki si muskaan saji rehne do',
      'Baaki zindagi ki har uljhan yaaron ki mehfil mein khud sulajh jaati hai',
    ],
    linesEnglish: [
      'Keep your spirit timelessly young with an easy grin resting lightly',
      'Most tangled knots loosen smoothly around good friends by twilight',
    ],
  },
  {
    title: 'बिन बोले दिया गया साथ',
    titleEnglish: 'Silent Support Across Evening Table',
    linesHindi: [
      'ज़्यादा सलाह देने वाले लोग अक्सर परेशानी में भी बोझ बढ़ा देते हैं',
      'चुपचाप बगल में बैठकर कंधे पर हाथ रखने वाला यार ही काफी होता है',
    ],
    linesHinglish: [
      'Zyada salaah dene waale log aksar pareshaani mein bhi bojh badha dete hain',
      'Chupchaap bagal mein baithkar kandhe par haath rakhne waala yaar hi kaafi hota hai',
    ],
    linesEnglish: [
      'Loud lecturers only stack extra pressure atop weary heads mid-storm',
      'One friend pulling beside you resting a calm hand on your shoulder heals all',
    ],
  },
  {
    title: 'सुकून के नाम एक और ग़ज़ल',
    titleEnglish: 'One More Couplet Dedicated to Peace',
    linesHindi: [
      'शोर मचाने से कोई भी महफ़िल कभी यादगार नहीं बन पाती है यार',
      'धीमे सुर और सच्चे जज़्बात ही रात को सुनहरा बना जाते हैं',
    ],
    linesHinglish: [
      'Shor machaane se koi bhi mehfil kabhi yaadgaar nahin ban paati hai yaar',
      'Dheeme sur aur sachhe jazbaat hi raat ko sunahara bana jaate hain',
    ],
    linesEnglish: [
      'Deafening speakers alone never turn any Friday evening unforgettable',
      'Mellow melodies and honest feelings paint ordinary nights pure gold',
    ],
  },
  {
    title: 'प्याले में चमकती शहर की रोशनी',
    titleEnglish: 'City Lights Reflecting in Glass',
    linesHindi: [
      'ऊँची छत पर बैठे हुए जब पूरे शहर की लाइटें नीचे चमकती दिखती हैं',
      'तब लगता है कि हर छोटे-बड़े संघर्ष का आज मीठा फल मिल रहा है',
    ],
    linesHinglish: [
      'Oonchi chhat par baithe hue jab poore shehar ki lightein neeche chamakti dikhti hain',
      'Tab lagta hai ki har chhote-bade sangharsh ka aaj meetha phal mil raha hai',
    ],
    linesEnglish: [
      'Looking across glittering city lights from a high quiet terrace at dusk',
      'Makes every tough climb look wonderfully worth the sweet view today',
    ],
  },
  {
    title: 'चाय वाले यार और जाम वाले यार',
    titleEnglish: 'Chai Buddies and Evening Crew Alike',
    linesHindi: [
      'प्याला चाहे चाय का हो या फिर शाम की महफ़िल का कोई ठंडा जाम',
      'जब दोस्त एक साथ हों तो हर चीज़ का स्वाद दोगुना हो जाता है',
    ],
    linesHinglish: [
      'Pyaala chaahe chai ka ho ya phir shaam ki mehfil ka koi thanda jaam',
      'Jab dost ek saath hon to har cheez ka swaad doguna ho jaata hai',
    ],
    linesEnglish: [
      'Whether mugs steam with roadside masala chai or glasses clink cool ice',
      'Everything tastes effortlessly twice as rich sitting beside your crew',
    ],
  },
  {
    title: 'पुराने क़िस्सों का अनमोल ख़ज़ाना',
    titleEnglish: 'Priceless Vault of Shared Tales',
    linesHindi: [
      'करोड़ों के बैंक खाते भी उतनी खुशी नहीं खरीद पाते जीवन भर में',
      'जितनी कॉलेज के दिनों की एक बेवकूफ़ी याद करके शाम को मिलती है',
    ],
    linesHinglish: [
      'Karodon ke bank khaate bhi utni khushi nahin khareed paate jeevan bhar mein',
      'Jitni college ke dinon ki ek bewakoofi yaad karke shaam ko milti hai',
    ],
    linesEnglish: [
      'Fat bank statements rarely purchase half the unfiltered joy felt tonight',
      'Recalling one ridiculous sophomore blunder until everyone cries laughing',
    ],
  },
  {
    title: 'नशे से परे इज़्ज़त का ताज',
    titleEnglish: 'Crown of Dignity Kept Intact',
    linesHindi: [
      'हर शाम की मस्ती के बाद भी अपनी ज़बान पर लगाम रखना बड़ी बात है',
      'ताकि किसी अपने के सामने कभी नज़रे झुकाने की नौबत न आए',
    ],
    linesHinglish: [
      'Har shaam ki masti ke baad bhi apni zabaan par lagaam rakhna badi baat hai',
      'Taaki kisi apne ke saamne kabhi nazrein jhukaane ki naubat na aaye',
    ],
    linesEnglish: [
      'Keeping kind control over words even mid-celebration speaks volumes',
      'So facing loved ones next morning never demands lowering your gaze',
    ],
  },
  {
    title: 'दिल की गहराइयों का शांत गीत',
    titleEnglish: 'Calm Melody Rising From Within',
    linesHindi: [
      'जब सारा शोर शांत हो जाता है रात के साढ़े ग्यारह बजे के आसपास',
      'तब मन के भीतर एक बहुत सुकून भरा मीठा गीत खुद बजने लगता है',
    ],
    linesHinglish: [
      'Jab saara shor shaant ho jaata hai raat ke saadhe gyaarah baje ke aaspaas',
      'Tab mann ke bheetar ek bahut sukoon bhara meetha geet khud bajne lagta hai',
    ],
    linesEnglish: [
      'Around eleven-thirty when restless street traffic finally settles calm',
      'A gentle serene tune begins humming effortlessly straight from within',
    ],
  },
  {
    title: 'अनकहे जज़्बातों की खूबसूरत शाम',
    titleEnglish: 'Lovely Evening of Quiet Feelings',
    linesHindi: [
      'सब कुछ शब्दों में लिखकर ही बयाँ किया जाए ज़रूरी नहीं होता दोस्त',
      'कभी-कभी साथ बैठकर ख़ामोशी पी लेना भी बहुत गहरा संवाद होता है',
    ],
    linesHinglish: [
      'Sab kuch shabdon mein likhkar hi bayaan kiya jaaye zaroori nahin hota dost',
      'Kabhi-kabhi saath baithkar khaamoshi pi lena bhi bahut gehra samvaad hota hai',
    ],
    linesEnglish: [
      'Not every deep feeling requires neat paragraphs laid across the table',
      'Sharing comfortable twilight silence beside trusted eyes says everything',
    ],
  },
  {
    title: 'महफ़िल की शान सादा व्यवहार',
    titleEnglish: 'Plain Warmth Crowning Every Gathering',
    linesHindi: [
      'बड़े-बड़े सूट पहनकर भी अगर व्यवहार में रूखापन रहे हमेशा तो क्या लाभ',
      'सादे कुर्ते में भी हँसकर गले लगाने वाला पूरी महफ़िल जीत लेता है',
    ],
    linesHinglish: [
      'Bade-bade suit pehankar bhi agar vyavahaar mein rookhapan rahe hamesha to kya laabh',
      'Saade kurte mein bhi hanskar gale lagaane waala poori mehfil jeet leta hai',
    ],
    linesEnglish: [
      'Tailored Italian suits accomplish nothing if manners stay chilly inside',
      'Anyone offering warm open hugs in plain cotton wins the whole room easily',
    ],
  },
  {
    title: 'सुकून से भरी मुसाफ़िर की रात',
    titleEnglish: 'Peaceful Night for Tired Traveler',
    linesHindi: [
      'लंबे सफ़र के बाद जब दोस्त के शहर में एक रात रुकने को मिलती है',
      'तो आधी रात तक जागकर भी सारी थकान गायब हो जाती है बातों में',
    ],
    linesHinglish: [
      'Lambe safar ke baad jab dost ke shehar mein ek raat rukne ko milti hai',
      'To aadhi raat tak jaagkar bhi saari thakaan gaayab ho jaati hai baaton mein',
    ],
    linesEnglish: [
      'Stopping one night in a close buddy’s town mid-way through long travel',
      'Erases every mile of fatigue laughing wide awake past midnight',
    ],
  },
  {
    title: 'तारीफ़ से ज़्यादा सच्ची यारी',
    titleEnglish: 'True Loyalty Outranks Polite Praise',
    linesHindi: [
      'मेज़ पर बैठकर मीठी बातें तो कोई भी बना लेता है दो पैग के बाद',
      'असली यार वही है जो अगले दिन सुबह भी वही वचन याद रखे पूरा',
    ],
    linesHinglish: [
      'Mez par baithkar meethi baatein to koi bhi bana leta hai do peg ke baad',
      'Asli yaar wahi hai jo agle din subah bhi wahi vachan yaad rakhe poora',
    ],
    linesEnglish: [
      'Anyone makes grand affectionate pledges over lively Friday night glasses',
      'True friends remember those exact words clearly at ten Saturday morning',
    ],
  },
  {
    title: 'प्याले के संग पुराना आँगन',
    titleEnglish: 'Old Courtyard Vibes Around Table',
    linesHindi: [
      'बचपन की गली में जो अपनापन हुआ करता था हर शाम खेलते वक़्त',
      'आज वही अपनापन यारों के साथ बैठते ही दोबारा ज़िंदा हो उठता है',
    ],
    linesHinglish: [
      'Bachpan ki gali mein jo apnapan hua karta tha har shaam khelte waqt',
      'Aaj wahi apnapan yaaron ke saath baithte hi dobaara zinda ho uthta hai',
    ],
    linesEnglish: [
      'That easy belonging we felt playing dusk games down childhood lanes',
      'Wakes completely alive again the second our old crew pulls chairs near',
    ],
  },
  {
    title: 'बेफ़िक्र मन की मीठी तान',
    titleEnglish: 'Sweet Melody of Untroubled Spirit',
    linesHindi: [
      'कल क्या होगा इसकी चिंता में आज की हँसी क्यों बर्बाद करें हम',
      'आज मिला है तो इसे पूरी खुशी और शांति से जी लेना ही बेहतर है',
    ],
    linesHinglish: [
      'Kal kya hoga iski chinta mein aaj ki hansi kyun barbaad karein hum',
      'Aaj mila hai to ise poori khushi aur shaanti se jee lena hi behtar hai',
    ],
    linesEnglish: [
      'Why trade tonight’s clear laughter worrying endlessly over next Tuesday',
      'Savoring right now with warmth and gratitude makes every hour richer',
    ],
  },
  {
    title: 'हवा में घुला सुरीला अंदाज़',
    titleEnglish: 'Melodic Grace Floating on Breeze',
    linesHindi: [
      'जब खिड़की से आती ताज़ी हवा और पुराने गीतों का जादू मिल जाए',
      'तो हर साधारण रात भी ज़िंदगी की एक सुंदर कविता बन जाती है',
    ],
    linesHinglish: [
      'Jab khidki se aati taaza hawa aur puraane geeton ka jaadoo mil jaaye',
      'To har saadhaaran raat bhi zindagi ki ek sundar kavita ban jaati hai',
    ],
    linesEnglish: [
      'Where crisp night breezes cross paths with timeless vintage melodies',
      'Even an ordinary evening folds gracefully into quiet living poetry',
    ],
  },
  {
    title: 'चंद दोस्तों के बीच राजा जैसा मन',
    titleEnglish: 'Feeling Rich Amid Handful of Friends',
    linesHindi: [
      'महल की ज़रूरत किसे पड़ती है जब यारों का दिल इतना विशाल हो',
      'छोटी सी छत पर भी बैठकर लगता है पूरी दुनिया अपने पास ही है',
    ],
    linesHinglish: [
      'Mahal ki zaroorat kise padti hai jab yaaron ka dil itna vishaal ho',
      'Chhoti si chhat par bhi baithkar lagta hai poori duniya apne paas hi hai',
    ],
    linesEnglish: [
      'Who longs for sprawling estates when friends carry hearts wide as oceans',
      'Sitting on a tiny terrace feels like holding the entire world in palm',
    ],
  },
  {
    title: 'नज़र की मिठास और दोस्ती की शाम',
    titleEnglish: 'Sweet Glance and Friendship Dusk',
    linesHindi: [
      'किसी की एक झलक और दो दोस्तों की पुरानी हँसी मिल जाए साथ',
      'तो इस शहर की हर शाम जन्नत से कम नहीं लगती है दोस्तों',
    ],
    linesHinglish: [
      'Kisi ki ek jhalak aur do doston ki puraani hansi mil jaaye saath',
      'To is shehar ki har shaam jannat se kam nahin lagti hai doston',
    ],
    linesEnglish: [
      'Pair one warm glance from someone dear with hearty old-friend laughs',
      'And every sunset across this whole city glows like open paradise',
    ],
  },
  {
    title: 'आख़िरी बात से पहले मुस्कान',
    titleEnglish: 'Warm Smile Before Last Toast',
    linesHindi: [
      'महफ़िल से उठते वक़्त हमेशा चेहरे पर मीठी मुस्कान लेकर निकलना',
      'ताकि अगली बार मिलने का इंतज़ार हर किसी को बड़ी खुशी से रहे',
    ],
    linesHinglish: [
      'Mehfil se uthte waqt hamesha chehre par meethi muskaan lekar nikalna',
      'Taaki agli baar milne ka intezaar har kisi ko badi khushi se rahe',
    ],
    linesEnglish: [
      'Always step out of evening gatherings wearing a warm genuine smile',
      'Leaving everyone eagerly counting days until the very next reunion',
    ],
  },
  {
    title: 'सलामत रहे हर यार का आँगन',
    titleEnglish: 'Blessings Upon Every Friend’s Home',
    linesHindi: [
      'मेरी हर शाम की सबसे प्यारी दुआ बस यही रहती है हमेशा से',
      'मेरे सारे दोस्त खुश रहें और उनके घरों में कभी कोई ग़म न आए',
    ],
    linesHinglish: [
      'Meri har shaam ki sabse pyari dua bas yahi rehti hai hamesha se',
      'Mere saare dost khush rahein aur unke gharon mein kabhi koi gham na aaye',
    ],
    linesEnglish: [
      'My favorite quiet prayer closing out every evening stays unchanged',
      'May every dear friend thrive brightly with sunny warmth inside their home',
    ],
  },
  {
    title: 'ज़िंदगी के नाम एक प्यारी शाम',
    titleEnglish: 'Lovely Evening Raised to Life Itself',
    linesHindi: [
      'शिकायतें तो किताबों में रोज़ लिखी जा सकती हैं दुनिया भर की',
      'चलो आज की शाम सिर्फ़ शुक्रगुज़ारी और मुस्कान के नाम कर देते हैं',
    ],
    linesHinglish: [
      'Shikaayatein to kitaabon mein roz likhi ja sakti hain duniya bhar ki',
      'Chalo aaj ki shaam sirf shukrguzaari aur muskaan ke naam kar dete hain',
    ],
    linesEnglish: [
      'Volumes of complaints could easily be drafted every single afternoon',
      'Tonight let us dedicate every toast cleanly to gratitude and easy smiles',
    ],
  },

  // Block 9 (161-175)
  {
    title: 'चाँद की रोशनी में शांत पैमाना',
    titleEnglish: 'Quiet Glass Under Silver Moonlight',
    linesHindi: [
      'रात के सन्नाटे में जब छत पर बैठकर हल्की हवा का आनंद लेते हैं',
      'तो बिना किसी शोर के भी पूरा दिन बेहद हल्का और प्यारा लगता है',
    ],
    linesHinglish: [
      'Raat ke sannaate mein jab chhat par baithkar halki hawa ka aanand lete hain',
      'To bina kisi shor ke bhi poora din behad halka aur pyara lagta hai',
    ],
    linesEnglish: [
      'Sitting quietly on rooftops enjoying cool midnight breeze without rush',
      'Turns even the busiest weekday wonderfully serene before sleep arrives',
    ],
  },
  {
    title: 'यारों संग पुराने गीतों का सफ़र',
    titleEnglish: 'Old Song Journey With Best Buddies',
    linesHindi: [
      'जैसे ही पुराना कैसेट या प्लेलिस्ट चालू होती है शाम के सात बजे',
      'हमारी पूरी टेबल बिना किसी तैयारी के संगीत की महफ़िल बन जाती है',
    ],
    linesHinglish: [
      'Jaise hi puraana cassette ya playlist chaaloo hoti hai shaam ke saat baje',
      'Hamaari poori table bina kisi taiyaari ke sangeet ki mehfil ban jaati hai',
    ],
    linesEnglish: [
      'The second classic playlists spin right around seven p.m. indoors',
      'Our casual dinner table blooms instantly into a cheerful music lounge',
    ],
  },
  {
    title: 'दिल की सच्ची बात का मोल',
    titleEnglish: 'Worth of Words Spoken From Heart',
    linesHindi: [
      'ज़्यादा बोलने से ज़्यादा ज़रूरी है कि जो बोलो वह दिल से निकले',
      'शाम की महफ़िल में दो सच्चे शब्द सौ बनावटी बातों पर भारी हैं',
    ],
    linesHinglish: [
      'Zyada bolne se zyada zaroori hai ki jo bolo woh dil se nikle',
      'Shaam ki mehfil mein do sachhe shabd sau banaawati baaton par bhaari hain',
    ],
    linesEnglish: [
      'Speaking genuinely matters far more than talking nonstop till midnight',
      'Two honest sentences around friends outweigh a hundred rehearsed speeches',
    ],
  },
  {
    title: 'ठंडी फुहार और मस्त मिज़ाज',
    titleEnglish: 'Cool Drizzle and Carefree Mood',
    linesHindi: [
      'सावन की हल्की फुहारों के बीच बैठकर दोस्तों संग गप मारने का मज़ा',
      'शहर के किसी भी बड़े रेस्टोरेंट के मेन्यू में लिखा नहीं मिलता',
    ],
    linesHinglish: [
      'Saawan ki halki fuhaaron ke beech baithkar doston sang gap maarne ka maza',
      'Shehar ke kisi bhi bade restaurant ke menu mein likha nahin milta',
    ],
    linesEnglish: [
      'Trading cheerful jokes beside buddies under light monsoon mist',
      'Cannot be ordered off any glossy upscale menu anywhere downtown',
    ],
  },
  {
    title: 'अधूरे ख्वाब पर भी मुस्कान',
    titleEnglish: 'Smiling Even Over Half-Done Dreams',
    linesHindi: [
      'जो मिला है उसका जश्न मनाओ और जो बाकी है उसके लिए मेहनत करो',
      'हर शाम को थोड़ा मुस्कुराकर जी लेना ही सबसे बड़ा हुनर है यारो',
    ],
    linesHinglish: [
      'Jo mila hai uska jashn manaao aur jo baaki hai uske liye mehnat karo',
      'Har shaam ko thoda muskuraakar jee lena hi sabse bada hunar hai yaaro',
    ],
    linesEnglish: [
      'Celebrate what already bloomed brightly and keep working steadily ahead',
      'Living every single evening with an unhurried smile remains highest craft',
    ],
  },
  {
    title: 'शराबी नहीं, जज़्बाती दिल',
    titleEnglish: 'Emotional Heart Behind Light Cheer',
    linesHindi: [
      'लोग सिर्फ़ हाथ में गिलास देखकर अनुमान लगा लेते हैं बाहर से ही',
      'अंदर झांकें तो पता चले कि दिल में कितना सच्चा प्यार भरा पड़ा है',
    ],
    linesHinglish: [
      'Log sirf haath mein gilaas dekhkar anumaan laga lete hain baahar se hi',
      'Andar jhaankein to pata chale ki dil mein kitna sachha pyar bhara pada hai',
    ],
    linesEnglish: [
      'Passersby judge quickly glancing solely at a glass along the table',
      'Look slightly closer and notice just how much warm tenderness lives inside',
    ],
  },
  {
    title: 'सालों बाद मिली पुरानी मुस्कान',
    titleEnglish: 'Old Smile Found Again Years Later',
    linesHindi: [
      'दस साल बाद जब पुराना कॉलेज यार अचानक सामने दिख जाए शाम को',
      'तो पहले पाँच मिनट बिना कुछ बोले बस गले लगकर हँसी आती है',
    ],
    linesHinglish: [
      'Das saal baad jab puraana college yaar achaanak saamne dikh jaaye shaam ko',
      'To pehle paanch minute bina kuch bole bas gale lagkar hansi aati hai',
    ],
    linesEnglish: [
      'Bumping unexpectedly into an old dorm roommate ten seasons later',
      'Brings five solid minutes of tight hugs and breathless smiles upfront',
    ],
  },
  {
    title: 'प्याले से हल्का हुआ दिन का बोझ',
    titleEnglish: 'Day Burden Lightened Gently at Dusk',
    linesHindi: [
      'सुबह नौ से छह तक की दौड़ में कमर सीधी करने की फुर्सत नहीं मिलती',
      'शाम को यारों के साथ बैठते ही सारा तनाव पंख लगाकर उड़ जाता है',
    ],
    linesHinglish: [
      'Subah nau se chheh tak ki daud mein kamar seedhi karne ki fursat nahin milti',
      'Shaam ko yaaron ke saath baithte hi saara tanaav pankh lagaakar ud jaata hai',
    ],
    linesEnglish: [
      'Between nine and six barely a quiet moment stops to catch a breath',
      'Pull up beside close buddies by seven and daytime stress flies away',
    ],
  },
  {
    title: 'अलविदा के पार नई शाम की मुस्कान',
    titleEnglish: 'Protecting Heart Peace Above All',
    linesHindi: [
      'किसी के भी जाने से अपनी पूरी दुनिया वीरान मत कर लेना कभी',
      'शामें फिर खिलेंगी और नए यार भी मिलेंगे मुस्कुराने के लिए',
    ],
    linesHinglish: [
      'Kisi ke bhi jaane se apni poori duniya veeraan mat kar lena kabhi',
      'Shaamein phir khilengi aur naye yaar bhi milenge muskuraane ke liye',
    ],
    linesEnglish: [
      'Never leave your whole joyful world parked empty over one goodbye',
      'Warm evenings bloom fresh again bringing kind new smiles alongside',
    ],
  },
  {
    title: 'चंद लम्हों का मीठा आराम',
    titleEnglish: 'Sweet Rest for Brief Evening Hours',
    linesHindi: [
      'जिंदगी में बड़े-बड़े सपनों के साथ थोड़ा सा ठहराव भी ज़रूरी है',
      'कभी-कभी बिना किसी काम के भी अपने लिए दो घंटे बचा लिया करो',
    ],
    linesHinglish: [
      'Zindagi mein bade-bade sapnon ke saath thoda sa thehraav bhi zaroori hai',
      'Kabhi-kabhi bina kisi kaam ke bhi apne liye do ghante bacha liya karo',
    ],
    linesEnglish: [
      'Alongside towering goals, gentle calm pauses matter just as deeply',
      'Save two unscheduled hours now and then purely to unwind peacefully',
    ],
  },
  {
    title: 'साक़ी और दोस्त का प्यारा रिश्ता',
    titleEnglish: 'Friendly Bond Between Guest and Host',
    linesHindi: [
      'सही मेहमाननवाज़ी वही है जहाँ ग्राहक भी दोस्त बनकर विदा हो शाम को',
      'प्यार से बोली गई दो बातें किसी भी जगह को घर बना देती हैं',
    ],
    linesHinglish: [
      'Sahi mehmaannavaazi wahi hai jahaan graahak bhi dost bankar vida ho shaam ko',
      'Pyar se boli gayi do baatein kisi bhi jagah ko ghar bana deti hain',
    ],
    linesEnglish: [
      'True hospitality sends every evening visitor home feeling like an old friend',
      'Two kind genuine sentences turn any cozy booth straight into home',
    ],
  },
  {
    title: 'सुकून से भरी हँसी की आवाज़',
    titleEnglish: 'Sound of Untroubled Evening Laugh',
    linesHindi: [
      'महफ़िल की सबसे खूबसूरत धुन किसी गायक का गाना नहीं होती दोस्त',
      'अपने दोस्तों की निश्चिंत हँसी सुनना दुनिया का सबसे प्यारा संगीत है',
    ],
    linesHinglish: [
      'Mehfil ki sabse khoobsurat dhun kisi gaayak ka gaana nahin hoti dost',
      'Apne doston ki nishchint hansi sunna duniya ka sabse pyara sangeet hai',
    ],
    linesEnglish: [
      'The finest music filling any room is never even the jukebox chorus',
      'Listening to dear friends laugh carefree remains Earth’s sweetest song',
    ],
  },
  {
    title: 'रात के आख़िरी पहर की शांति',
    titleEnglish: 'Peace of Late Quiet Hours',
    linesHindi: [
      'घर लौटते वक़्त जब ठंडी हवा माथे को छूकर गुज़रती है धीरे से',
      'तो लगता है आज की शाम बिल्कुल सही सलीके से जी ली गई है',
    ],
    linesHinglish: [
      'Ghar laut-te waqt jab thandi hawa maathe ko chhookar guzarti hai dheere se',
      'To lagta hai aaj ki shaam bilkul sahi saleeke se ji li gayi hai',
    ],
    linesEnglish: [
      'When crisp night air brushes your forehead lightly walking back indoors',
      'It feels unmistakable that tonight was lived with balance, warmth, and grace',
    ],
  },
  {
    title: 'होश, मोहब्बत और मस्ताना सफर',
    titleEnglish: 'Poise, Love, and Joyful Journey',
    linesHindi: [
      'ज़िंदगी के इस सफ़र में थोड़ा जोश, थोड़ा होश और खूब याराना रखो',
      'हर मौसम अपने आप किसी खूबसूरत शाम की तरह सुहाना रहेगा हमेशा',
    ],
    linesHinglish: [
      'Zindagi ke is safar mein thoda josh, thoda hosh aur khoob yaaraana rakho',
      'Har mausam apne aap kisi khoobsurat shaam ki tarah suhaana rahega hamesha',
    ],
    linesEnglish: [
      'Pack steady poise, playful spirit, and generous brotherhood for the road',
      'Every season ahead will stay as bright and pleasant as golden twilight',
    ],
  },
  {
    title: 'खुशियों से भरा आख़िरी सलाम',
    titleEnglish: 'Joyful Final Toast to All',
    linesHindi: [
      'सबको खुश रखना भले किसी एक इंसान के बस में न हो दुनिया में',
      'पर अपनी महफ़िल में बैठने वाले हर चेहरे को हँसाना हमारे बस में है',
    ],
    linesHinglish: [
      'Sabko khush rakhna bhale kisi ek insaan ke bas mein na ho duniya mein',
      'Par apni mehfil mein baithne waale har chehre ko hansaana hamaare bas mein hai',
    ],
    linesEnglish: [
      'Cheering the whole planet simultaneously sits outside one person’s reach',
      'Making every face seated around your table smile warmly stays completely ours',
    ],
  },
];

export const UNIQUE_SHARABI_175 = buildUniqueShayaris(
  'sharabi',
  'Sharabi Shayari (शराबी शायरी)',
  '🍷',
  26,
  SHARABI_ENTRIES
);
