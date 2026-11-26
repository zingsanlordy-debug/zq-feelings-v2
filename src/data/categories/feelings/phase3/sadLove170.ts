import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const SAD_LOVE_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'चाय के कप में अधूरी शाम',
    titleEnglish: 'Unfinished Evening in Tea Cup',
    linesHindi: [
      'दो कप चाय आज भी अनजाने में बना बैठता हूँ बारिश की शाम को',
      'एक कप हाथ में होता है और दूसरा तुम्हारी खुशबू के नाम रहता है',
    ],
    linesHinglish: [
      'Do cup chai aaj bhi anjaane mein bana baithta hoon baarish ki shaam ko',
      'Ek cup haath mein hota hai aur doosra tumhaari khushboo ke naam rehta hai',
    ],
    linesEnglish: [
      'Even today I absentmindedly brew two cups whenever evening rains fall',
      'One warms my own palms while the other waits quietly beside your memory',
    ],
  },
  {
    title: 'दूरी में भी जुड़ा दिल',
    titleEnglish: 'Connected Hearts Across Miles',
    linesHindi: [
      'शहर अलग हैं और रास्तों के मोड़ भी जुदा हो चुके हैं हमारे',
      'फिर भी हर अच्छी ख़बर सबसे पहले तुम्हें बताने का मन करता है',
    ],
    linesHinglish: [
      'Shehar alag hain aur raaston ke mod bhi juda ho chuke hain hamaare',
      'Phir bhi har achhi khabar sabse pehle tumhein bataane ka mann karta hai',
    ],
    linesEnglish: [
      'Different cities and separate crossroads divide our calendars now',
      'Yet every bright piece of news still makes me reach for your name first',
    ],
  },
  {
    title: 'बिना शिकायत की मोहब्बत',
    titleEnglish: 'Love Without Single Complaint',
    linesHindi: [
      'तुम्हारे जाने के बाद भी कभी नाम के आगे कड़वाहट नहीं लिखी मैंने',
      'क्योंकि सच्ची चाहत हमेशा सामने वाले की खुशी में सुकून ढूँढती है',
    ],
    linesHinglish: [
      'Tumhaare jaane ke baad bhi kabhi naam ke aage kadwahat nahin likhi maine',
      'Kyunki sachhi chaahat hamesha saamne waale ki khushi mein sukoon dhoondhti hai',
    ],
    linesEnglish: [
      'Even after your footsteps turned away I never attached bitterness to your name',
      'Genuine affection still discovers quiet peace inside seeing you smile elsewhere',
    ],
  },
  {
    title: 'अनभेजे संदेशों की किताब',
    titleEnglish: 'Book of Unsent Drafts',
    linesHindi: [
      'फ़ोन के नोट्स में आज भी दर्जनों अधूरे पैराग्राफ़ सोए हुए हैं',
      'लिख तो देता हूँ रोज़ तुम्हारे लिए, बस भेजने की हिम्मत रुक जाती है',
    ],
    linesHinglish: [
      'Phone ke notes mein aaj bhi darjanon adhoore paragraph soye hue hain',
      'Likh to deta hoon roz tumhaare liye, bas bhejne ki himmat ruk jaati hai',
    ],
    linesEnglish: [
      'Dozens of unfinished paragraphs still sleep silently inside my phone notes',
      'I write to you every evening and simply pause right before pressing send',
    ],
  },
  {
    title: 'मुस्कान के पीछे छुपी चाहत',
    titleEnglish: 'Quiet Longing Behind Easy Smiles',
    linesHindi: [
      'भीड़ में जब कोई अचानक तुम्हारे जैसा नाम पुकार देता है कहीं से',
      'पलक झपकने से पहले एक मीठी सी टीस मुस्कान में घुल जाती है',
    ],
    linesHinglish: [
      'Bheed mein jab koi achaanak tumhaare jaisa naam pukaar deta hai kahin se',
      'Palak jhapakne se pehle ek meethi si tees muskaan mein ghul jaati hai',
    ],
    linesEnglish: [
      'Whenever someone across a busy street calls out a name sounding like yours',
      'Before my eyelids blink, a tender ache melts right into my quiet smile',
    ],
  },
  {
    title: 'खामोश दुआ में तुम्हारा ज़िक्र',
    titleEnglish: 'Your Name in Quiet Prayers',
    linesHindi: [
      'भले ही अब हर रोज़ बात करने का हक वक़्त ने ले लिया हो हमसे',
      'पर सुबह की हर पहली दुआ में आज भी पहला हिस्सा तुम्हारा ही है',
    ],
    linesHinglish: [
      'Bhale hi ab har roz baat karne ka haq waqt ne le liya ho humse',
      'Par subah ki har pehli dua mein aaj bhi pehla hissa tumhaara hi hai',
    ],
    linesEnglish: [
      'Even though passing seasons reclaimed our habit of talking every hour',
      'My very first morning prayer still saves its warmest blessing just for you',
    ],
  },
  {
    title: 'खिड़की पर ठहरी बरसात',
    titleEnglish: 'Rain Paused Along Windowpane',
    linesHindi: [
      'सावन की पहली बूंदें जब काँच पर धीमे-धीमे दस्तक देती हैं आज',
      'तो छतरी के नीचे साथ भीगने वाला वह पुराना अक्तूबर याद आता है',
    ],
    linesHinglish: [
      'Saawan ki pehli boondein jab kaanch par dheeme-dheeme dastak deti hain aaj',
      'To chhatri ke neeche saath bheegne waala woh puraana October yaad aata hai',
    ],
    linesEnglish: [
      'When monsoon drops begin tapping gently along cool window glass',
      'That old October afternoon sharing one small umbrella rises softly back',
    ],
  },
  {
    title: 'अधूरे वादे की कोमल महक',
    titleEnglish: 'Soft Scent of Unkept Promises',
    linesHindi: [
      'हर कहानी का शादी या साथ तक पहुँचना ज़रूरी नहीं होता शायद',
      'कुछ मुलाक़ातें बस दिल को बेहतर इंसान बनाने के लिए आती हैं',
    ],
    linesHinglish: [
      'Har kahaani ka shaadi ya saath tak pahunchna zaroori nahin hota shaayad',
      'Kuch mulaakaatein bas dil ko behtar insaan banaane ke liye aati hain',
    ],
    linesEnglish: [
      'Not every love story is meant to reach golden anniversaries together',
      'Certain crossings arrive simply to teach the heart how deeply it can care',
    ],
  },
  {
    title: 'पुरानी प्लेलिस्ट का आखिरी गीत',
    titleEnglish: 'Final Track on Shared Playlist',
    linesHindi: [
      'गाड़ी चलाते हुए जब भी तुम्हारा पसंदीदा गाना बज उठता है रेडियो पर',
      'सड़क तो वही रहती है पर मन कुछ देर को पुरानी गली मुड़ जाता है',
    ],
    linesHinglish: [
      'Gaadi chalaate hue jab bhi tumhaara pasandeeda gaana baj uthta hai radio par',
      'Sadak to wahi rehti hai par mann kuch der ko puraani gali mud jaata hai',
    ],
    linesEnglish: [
      'Whenever your favorite song plays unexpectedly across the car stereo',
      'The highway stays ahead while my mind quietly turns down our old lane',
    ],
  },
  {
    title: 'रिश्ते का शालीन सम्मान',
    titleEnglish: 'Dignified Respect After Goodbye',
    linesHindi: [
      'हम अलग हुए तो क्या हुआ, दोस्ती और इज़्ज़त आज भी ज़िंदा रखी है',
      'जिसके साथ सबसे हसीन पल जिए हों, उसकी बुराई मुझसे नहीं होती',
    ],
    linesHinglish: [
      'Hum alag hue to kya hua, dosti aur izzat aaj bhi zinda rakhi hai',
      'Jiske saath sabse haseen pal jiye hon, uski buraai mujhse nahin hoti',
    ],
    linesEnglish: [
      'So what if our paths parted ways—grace and quiet respect still stand intact',
      'I could never speak harshly of someone who shared my brightest days',
    ],
  },
  {
    title: 'आधी रात का हल्का सा स्पर्श',
    titleEnglish: 'Gentle Echo at Midnight',
    linesHindi: [
      'चाँदनी जब कमरे की दहलीज़ से चुपचाप भीतर उतर आती है रात को',
      'तब लगता है जैसे तुम्हारे हाथों की ठंडक माथे पर ठहर गई हो',
    ],
    linesHinglish: [
      'Chaandni jab kamre ki dehleez se chupchaap bheetar utar aati hai raat ko',
      'Tab lagta hai jaise tumhaare haathon ki thandak maathe par thehar gayi ho',
    ],
    linesEnglish: [
      'When silver moonlight slips softly past the bedroom sill late at night',
      'It almost feels as though your cool palm rests kindly across my brow',
    ],
  },
  {
    title: 'बिना छुए संभाला प्यार',
    titleEnglish: 'Love Held Without Touching',
    linesHindi: [
      'पास रहकर भी कभी-कभी दो लोग बहुत अजनबी बने रहते हैं दुनिया में',
      'और दूर रहकर भी एक नाम पूरी धड़कन को थामे रखता है उम्र भर',
    ],
    linesHinglish: [
      'Paas rehkar bhi kabhi-kabhi do log bahut ajnabi bane rehte hain duniya mein',
      'Aur door rehkar bhi ek naam poori dhadkan ko thaame rehta hai umr bhar',
    ],
    linesEnglish: [
      'Two people can sit inches apart yet remain distant strangers inside',
      'While one absent name keeps cradling a heartbeat faithfully for years',
    ],
  },
  {
    title: 'चश्मे की धुंध और तेरी छवि',
    titleEnglish: 'Misted Lenses and Familiar Outline',
    linesHindi: [
      'सर्द सुबह जब गरम चाय की भाप से चश्मा धुँधला पड़ जाता है',
      'उस धुँधलेपन में भी सामने वाली कुर्सी पर तेरा ही अक्स दिखता है',
    ],
    linesHinglish: [
      'Sard subah jab garam chai ki bhaap se chashma dhundhla pad jaata hai',
      'Us dhundhlepan mein bhi saamne waali kursi par tera hi aks dikhta hai',
    ],
    linesEnglish: [
      'When steam from winter tea fogs up my glasses at dawn',
      'Even through the gentle haze your familiar outline sits across the table',
    ],
  },
  {
    title: 'वक़्त से हारी मीठी उम्मीद',
    titleEnglish: 'Sweet Hope Outpaced by Timing',
    linesHindi: [
      'कमी न तुम्हारे प्यार में थी और न ही मेरे समर्पण में कोई खोट था',
      'बस घड़ी की दोनों सुइयाँ कभी एक ही वक़्त पर साथ मिल न सकीं',
    ],
    linesHinglish: [
      'Kami na tumhaare pyar mein thi aur na hi mere samarpan mein koi khot tha',
      'Bas ghadi ki dono suiyaan kabhi ek hi waqt par saath mil na sakein',
    ],
    linesEnglish: [
      'Neither your affection nor my devotion lacked honesty or warmth',
      'Our two clock hands simply never struck the exact same hour together',
    ],
  },
  {
    title: 'आँखों में संभाला सफ़र',
    titleEnglish: 'Whole Journey Kept Inside Eyes',
    linesHindi: [
      'कुछ प्रेम पत्र लिफ़ाफ़ों में नहीं बल्कि आँखों की चमक में लिखे जाते हैं',
      'जिन्हें सिर्फ़ वही पढ़ पाता है जिसने उन्हें बिना कहे महसूस किया हो',
    ],
    linesHinglish: [
      'Kuch prem patra lifaafon mein nahin balki aankhon ki chamak mein likhe jaate hain',
      'Jinhein sirf wahi padh paata hai jisne unhein bina kahe mehsoos kiya ho',
    ],
    linesEnglish: [
      'Certain love letters are never sealed inside paper—they shimmer in quiet eyes',
      'Readable only to the one soul who understood every word left unspoken',
    ],
  },
  {
    title: 'दिल की दराज में सूखा गुलाब',
    titleEnglish: 'Pressed Rose Inside Desk Drawer',
    linesHindi: [
      'कॉलेज की पुरानी डायरी आज भी किताबों के बीच सहेज रखी है मैंने',
      'उसके अंदर रखा सूखा फूल आज भी पहले दिन जैसी कहानी कहता है',
    ],
    linesHinglish: [
      'College ki puraani diary aaj bhi kitaabon ke beech sahej rakhi hai maine',
      'Uske andar rakha sookha phool aaj bhi pehle din jaisi kahaani kehta hai',
    ],
    linesEnglish: [
      'I still guard that worn college notebook neatly between newer shelves',
      'The pressed petals tucked inside still whisper our very first chapter softly',
    ],
  },
  {
    title: 'हल्की सी कसक का सुकून',
    titleEnglish: 'Quiet Peace Inside Gentle Ache',
    linesHindi: [
      'हर दर्द हमेशा इंसान को तोड़ने के लिए नहीं आता है ज़िंदगी में',
      'कभी-कभी अधूरा प्यार दिल को पत्थर से ज़्यादा कोमल बना जाता है',
    ],
    linesHinglish: [
      'Har dard hamesha insaan ko todne ke liye nahin aata hai zindagi mein',
      'Kabhi-kabhi adhoora pyar dil ko patthar se zyada komal bana jaata hai',
    ],
    linesEnglish: [
      'Not every heartache enters life intending to shatter your spirit',
      'Sometimes unfinished love softens rough edges into lasting tenderness',
    ],
  },
  {
    title: 'भीड़ में खोई पहचान की हँसी',
    titleEnglish: 'Echo of Familiar Laughter Nearby',
    linesHindi: [
      'मेट्रो स्टेशन पर रोज़ हज़ारों चेहरे पास से गुज़र जाते हैं चुपचाप',
      'पर एक ख़ास हँसी जैसी आवाज़ सुनकर आज भी कदम ठिठक जाते हैं',
    ],
    linesHinglish: [
      'Metro station par roz hazaaron chehre paas se guzar jaate hain chupchaap',
      'Par ek khaas hansi jaisi aawaz sunkar aaj bhi kadam thithak jaate hain',
    ],
    linesEnglish: [
      'Thousands of brisk strangers sweep past me across busy platforms daily',
      'Yet catching one laugh resembling yours still stops my stride cold',
    ],
  },
  {
    title: 'खामोश विदाई का उजाला',
    titleEnglish: 'Graceful Glow of Silent Farewell',
    linesHindi: [
      'हमने बिना तमाशे और बिना शोर के एक-दूसरे का हाथ छोड़ा था धीरे से',
      'ताकि कल को जब भी निगाहें मिलें तो नज़रों में शर्मिंदगी न रहे',
    ],
    linesHinglish: [
      'Humne bina tamaashe aur bina shor ke ek-doosre ka haath chhoda tha dheere se',
      'Taaki kal ko jab bhi nigaahein milein to nazron mein sharmindagi na rahe',
    ],
    linesEnglish: [
      'We let go gently without shouting or burning bridges behind us',
      'So if our paths ever cross tomorrow, neither gaze turns away in shame',
    ],
  },
  {
    title: 'शाम के धुंधलके में तेरी सलामती',
    titleEnglish: 'Wishing You Safe Dusk Always',
    linesHindi: [
      'अब मेरे हिस्से में तुम्हारी मंज़िल की राह तकना भले न लिखा हो',
      'पर जहां भी रहो, आसमान हमेशा तुम्हारे सिर पर साफ़ रहे यही दुआ है',
    ],
    linesHinglish: [
      'Ab mere hisse mein tumhaari manzil ki raah takna bhale na likha ho',
      'Par jahaan bhi raho, aasmaan hamesha tumhaare sir par saaf rahe yahi dua hai',
    ],
    linesEnglish: [
      'Even if walking beside your tomorrow is not written in my chapters',
      'Wherever you stay, I pray gentle clear skies always shelter your steps',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'ट्रेन की खिड़की वाली खामोश यादें',
    titleEnglish: 'Window Seat Holding Quiet Memories',
    linesHindi: [
      'ट्रेन की खिड़की से पीछे छूटते पेड़ देखकर आज फिर याद आया मुझे',
      'कुछ लोग सफ़र में बहुत दूर तक साथ आकर चुपचाप उतर जाते हैं',
    ],
    linesHinglish: [
      'Train ki khidki se peechhe chhoot-te ped dekhkar aaj phir yaad aaya mujhe',
      'Kuch log safar mein bahut door tak saath aakar chupchaap utar jaate hain',
    ],
    linesEnglish: [
      'Watching green trees blur past the train window reminded me once more',
      'Some travelers ride warmly beside you for miles before stepping off quietly',
    ],
  },
  {
    title: 'बदलते मौसम सा अधूरा इश्क़',
    titleEnglish: 'Unfinished Love Like Shifting Season',
    linesHindi: [
      'न तुमने कभी झूठे ख़्वाब दिखाए थे, न मैंने कभी कोई ज़िद की थी',
      'बस वक़्त की तेज़ हवा ने हमारे नाज़ुक फूल को थोड़ा पहले समेट लिया',
    ],
    linesHinglish: [
      'Na tumne kabhi jhoothe khwaab dikhaaye the, na maine kabhi koi zid ki thi',
      'Bas waqt ki tez hawa ne hamaare naazuk phool ko thoda pehle samet liya',
    ],
    linesEnglish: [
      'You never spun false promises, nor did I demand impossible moons',
      'Swift winds of timing simply folded our delicate blossom slightly early',
    ],
  },
  {
    title: 'लास्ट सीन से परे की फ़िक्र',
    titleEnglish: 'Caring Beyond Last Seen Status',
    linesHindi: [
      'अब न मैसेज भेजने की जल्दी है और न ही लास्ट सीन गिनने की आदत',
      'बस तुम अपनी दुनिया में चैन से सो रहे होगे, यही सोचकर सुकून मिलता है',
    ],
    linesHinglish: [
      'Ab na message bhejne ki jaldi hai aur na hi last seen ginne ki aadat',
      'Bas tum apni duniya mein chain se so rahe hoge, yahi sochkar sukoon milta hai',
    ],
    linesEnglish: [
      'I no longer rush to text or count timestamps next to your chat window',
      'Simply trusting you rest peacefully in your own world feels calm enough',
    ],
  },
  {
    title: 'मोहब्बत की अनकही मर्यादा',
    titleEnglish: 'Unspoken Boundary of True Care',
    linesHindi: [
      'चाहता तो सौ बार रोक सकता था तुम्हें जाते वक़्त दरवाज़े पर खड़े होकर',
      'पर प्यार का मतलब किसी के पंख बाँधना कभी नहीं होता मेरे दोस्त',
    ],
    linesHinglish: [
      'Chaahta to sau baar rok sakta tha tumhein jaate waqt darwaze par khade hokar',
      'Par pyar ka matlab kisi ke pankh baandhna kabhi nahin hota mere dost',
    ],
    linesEnglish: [
      'Standing by the door I could have pleaded a hundred times to make you stay',
      'Yet genuine love never ties weights around someone’s wings to hold them',
    ],
  },
  {
    title: 'चंद लम्हों की अमर विरासत',
    titleEnglish: 'Timeless Legacy of Brief Moments',
    linesHindi: [
      'तुम मेरे जीवन के कुछ ही पन्नों में ठहरे रहे पूरी कहानी के दौरान',
      'पर आज भी मेरी पूरी किताब की सबसे प्यारी महक उन्हीं पन्नों से आती है',
    ],
    linesHinglish: [
      'Tum mere jeevan ke kuch hi pannon mein thehre rahe poori kahaani ke dauraan',
      'Par aaj bhi meri poori kitaab ki sabse pyari mehak unhin pannon se aati hai',
    ],
    linesEnglish: [
      'You appeared across only a small handful of pages in my whole story',
      'Yet the sweetest fragrance throughout the entire book rises from those pages',
    ],
  },
  {
    title: 'धूप में भीगती यादों की बूँद',
    titleEnglish: 'Raindrop Gleaming Under Bright Sun',
    linesHindi: [
      'कभी-कभी धूप खिली रहती है और हल्की फुहार भी बरस जाती है अचानक',
      'बिल्कुल वैसी ही है तुम्हारी याद—मुस्कुराहट के संग हल्की सी नमी',
    ],
    linesHinglish: [
      'Kabhi-kabhi dhoop khili rehti hai aur halki fuhaar bhi baras jaati hai achaanak',
      'Bilkul waisi hi hai tumhaari yaad—muskurahat ke sang halki si nami',
    ],
    linesEnglish: [
      'Sometimes golden sunshine glows steady while a light drizzle suddenly falls',
      'That captures remembering you—bright smiles touched with gentle mist',
    ],
  },
  {
    title: 'खामोश शहर की आखिरी स्ट्रीटलाइट',
    titleEnglish: 'Last Streetlight on Quiet Road',
    linesHindi: [
      'गली के मोड़ पर वह पीली स्ट्रीटलाइट आज भी वैसी ही टिमटिमाती है शाम को',
      'जहाँ पहली बार हमने बिना कहे बहुत देर तक चलना सीखा था साथ-साथ',
    ],
    linesHinglish: [
      'Gali ke mod par woh peeli streetlight aaj bhi waisi hi timtimaati hai shaam ko',
      'Jahaan pehli baar humne bina kahe bahut der tak chalna seekha tha saath-saath',
    ],
    linesEnglish: [
      'That warm amber streetlight at the corner still flickers identically at dusk',
      'Right where we first learned to walk unhurried miles in comfortable silence',
    ],
  },
  {
    title: 'तक़दीर से मीठी सी तकरार',
    titleEnglish: 'Gentle Quarrel With Destiny',
    linesHindi: [
      'बस इतनी सी शिकायत रहती है कभी-कभी ऊपर वाले की लिखावट से मुझे',
      'जब मिलाना ही नहीं था आगे चलकर, तो इतनी गहराई से मिलवाया क्यों',
    ],
    linesHinglish: [
      'Bas itni si shikaayat rehti hai kabhi-kabhi oopar waale ki likhaawat se mujhe',
      'Jab milaana hi nahin tha aage chalkar, to itni gehraai se milwaaya kyun',
    ],
    linesEnglish: [
      'My only gentle question to whoever drafts fate above stays simple',
      'If our chapters had to diverge later, why weave our souls so deeply first',
    ],
  },
  {
    title: 'तस्वीरों से परे की रोशनी',
    titleEnglish: 'Warmth Beyond Old Photographs',
    linesHindi: [
      'मोबाइल की पुरानी गैलरी साफ़ करते वक़्त आज भी हाथ ठहर जाते हैं मेरे',
      'कुछ चेहरे स्क्रीन से हटा भी दो तो मन की दीवार से नहीं उतरते',
    ],
    linesHinglish: [
      'Mobile ki puraani gallery saaf karte waqt aaj bhi haath thehar jaate hain mere',
      'Kuch chehre screen se hata bhi do to mann ki deewaar se nahin utarte',
    ],
    linesEnglish: [
      'While clearing old phone albums even now my thumb pauses mid-swipe',
      'Removing photos off glass screens never takes a face off the heart’s wall',
    ],
  },
  {
    title: 'अनकहे प्यार की सुंदरता',
    titleEnglish: 'Quiet Beauty of Unspoken Love',
    linesHindi: [
      'हर बात ज़ुबान से कहकर तौली जाए यह ज़रूरी तो नहीं मोहब्बत में',
      'कुछ एहसास चुपचाप दिल में रहकर भी पूरी उम्र रोशन कर देते हैं',
    ],
    linesHinglish: [
      'Har baat zubaan se kehkar tauli jaaye yeh zaroori to nahin mohabbat mein',
      'Kuch ehsaas chupchaap dil mein rehkar bhi poori umr roshan kar dete hain',
    ],
    linesEnglish: [
      'Not every emotion needs to be spoken aloud and measured in sentences',
      'Some quiet feelings stay tucked inside illuminating an entire lifetime',
    ],
  },
  {
    title: 'दिल की गहराई में बसा घर',
    titleEnglish: 'Room Saved Inside Quiet Heart',
    linesHindi: [
      'दुनिया की नज़रों में भले ही हम बरसों पहले अजनबी हो चुके हों अब',
      'पर दिल के एक शांत कमरे की खिड़की आज भी तुम्हारी ओर खुलती है',
    ],
    linesHinglish: [
      'Duniya ki nazron mein bhale hi hum barson pehle ajnabi ho chuke hon ab',
      'Par dil ke ek shaant kamre ki khidki aaj bhi tumhaari or khulti hai',
    ],
    linesEnglish: [
      'To passing eyes outside we may look like polite strangers years apart',
      'Yet one quiet room inside still opens its sole window straight toward you',
    ],
  },
  {
    title: 'फूलों सी कोमल याद का स्पर्श',
    titleEnglish: 'Petal-Soft Memory at Dusk',
    linesHindi: [
      'थक कर जब बिस्तर पर आँखें मूँदता हूँ हर शाम की भागदौड़ के बाद',
      'तो तुम्हारी एक पुरानी हँसी पूरे दिन की कड़वाहट धो देती है पल में',
    ],
    linesHinglish: [
      'Thak kar jab bistar par aankhein moondta hoon har shaam ki bhaagdaud ke baad',
      'To tumhaari ek puraani hansi poore din ki kadwahat dho deti hai pal mein',
    ],
    linesEnglish: [
      'Closing weary eyelids each night after hours of relentless hustle',
      'One remembered sound of your laugh rinses the whole rough day clean',
    ],
  },
  {
    title: 'अधूरे ग़ज़ल की आखिरी बहर',
    titleEnglish: 'Final Couplet of Unsung Song',
    linesHindi: [
      'तुम वह अधूरी ग़ज़ल हो जिसे कभी मंच पर गाया नहीं गया खुलकर',
      'पर हर गुनगुनाने वाला उसे अपने सबसे निजी पल में ज़रूर दोहराता है',
    ],
    linesHinglish: [
      'Tum woh adhoori ghazal ho jise kabhi manch par gaaya nahin gaya khulkar',
      'Par har gungunaane waala use apne sabse niji pal mein zaroor dohraata hai',
    ],
    linesEnglish: [
      'You are that unfinished lyric never sung boldly beneath bright spotlights',
      'Yet softly hummed in secret during life’s most tender, private hours',
    ],
  },
  {
    title: 'हाथ छूटने के बाद का सम्मान',
    titleEnglish: 'Grace Lingering After Hands Part',
    linesHindi: [
      'हम साथ नहीं हैं तो क्या, तुम आज भी मेरी सबसे प्यारी सीख हो',
      'तुम्हीं से जाना था कि बिना स्वार्थ किसी को चाहना कैसा होता है',
    ],
    linesHinglish: [
      'Hum saath nahin hain to kya, tum aaj bhi meri sabse pyari seekh ho',
      'Tumhin se jaana tha ki bina swaarth kisi ko chaahna kaisa hota hai',
    ],
    linesEnglish: [
      'Even walking separate roads, you remain my gentlest lesson ever learned',
      'Through you I discovered how it feels to care cleanly with zero conditions',
    ],
  },
  {
    title: 'सर्द हवा में छूटा मफ़लर',
    titleEnglish: 'Warm Scarf Left From Winter',
    linesHindi: [
      'अलमारी के कोने में टँगा पुराना स्वेटर आज भी मौसम पहचान लेता है',
      'जैसे ही दिसंबर आता है, उसमें तुम्हारी बातों की गर्माहट जाग उठती है',
    ],
    linesHinglish: [
      'Almaari ke kone mein tanga puraana sweater aaj bhi mausam pehchaan leta hai',
      'Jaise hi December aata hai, usmein tumhaari baaton ki garmahat jaag uthti hai',
    ],
    linesEnglish: [
      'That old knit hanging silently inside the closet still senses shifting air',
      'As December arrives, warmth from your old stories wakes softly in its wool',
    ],
  },
  {
    title: 'चाँद को सौंपा खामोश पैग़ाम',
    titleEnglish: 'Quiet Note Sent via Moon',
    linesHindi: [
      'छत पर खड़े होकर जब पूरा आसमान निहारता हूँ सन्नाटे में कभी',
      'तो लगता है वही चाँद तुम्हारी बालकनी पर भी रोशनी कर रहा होगा',
    ],
    linesHinglish: [
      'Chhat par khade hokar jab poora aasmaan nihaarata hoon sannaate mein kabhi',
      'To lagta hai wahi chaand tumhaari balcony par bhi roshni kar raha hoga',
    ],
    linesEnglish: [
      'Standing on my rooftop gazing across wide quiet midnight skies',
      'It comforts me knowing this exact same moon silvers your balcony too',
    ],
  },
  {
    title: 'रास्ते अलग पर दुआ एक',
    titleEnglish: 'Separate Paths, Same Kind Wish',
    linesHindi: [
      'तुम्हारी मंज़िल अब किसी और बगिया के रास्ते होकर जाती है बेशक',
      'पर मेरी दुआ हमेशा यही रहेगी कि काँटे कभी तुम्हारे पाँव न छुएँ',
    ],
    linesHinglish: [
      'Tumhaari manzil ab kisi aur bagiya ke raaste hokar jaati hai beshak',
      'Par meri dua hamesha yahi rahegi ki kaante kabhi tumhaare paanv na chhuein',
    ],
    linesEnglish: [
      'Your road certainly winds through distant gardens far away from mine now',
      'Yet my constant wish stays clear—may sharp thorns never brush your feet',
    ],
  },
  {
    title: 'सुकून देती पुरानी लिखावट',
    titleEnglish: 'Comfort Inside Faded Ink',
    linesHindi: [
      'किताब के कोने में पेंसिल से लिखा तुम्हारा छोटा सा नोट आज भी है',
      'मिटा भी सकता था वक़्त के साथ, पर यादों की निशानी कौन मिटाता है',
    ],
    linesHinglish: [
      'Kitaab ke kone mein pencil se likha tumhaara chhota sa note aaj bhi hai',
      'Mita bhi sakta tha waqt ke saath, par yaadon ki nishaani kaun mitaata hai',
    ],
    linesEnglish: [
      'That tiny pencil margin note in your handwriting still sits in my book',
      'I could have erased it years ago, yet nobody wipes away sacred footprints',
    ],
  },
  {
    title: 'भीगे हुए दिन का साफ़ आईना',
    titleEnglish: 'Clear Mirror After Rainy Love',
    linesHindi: [
      'टूटकर बिखरने से ज़्यादा हमने चुपचाप सँभलना सीख लिया धीरे-धीरे',
      'अधूरे प्यार ने हमें दर्द में भी मुस्कुराने का सुंदर हुनर दे दिया',
    ],
    linesHinglish: [
      'Tootkar bikharne se zyada humne chupchaap sambhalna seekh liya dheere-dheere',
      'Adhoore pyar ne humein dard mein bhi muskuraane ka sundar hunar de diya',
    ],
    linesEnglish: [
      'Rather than shattering in pieces, we learned gently how to gather strength',
      'Unfinished love handed us the quiet grace to smile softly through mist',
    ],
  },
  {
    title: 'हमेशा के लिए हल्की सी याद',
    titleEnglish: 'Gentle Echo Kept Forever',
    linesHindi: [
      'पूरी उम्र गुज़र जाएगी और नए मौसम भी आते रहेंगे दरवाज़े पर',
      'पर कुछ लोगों की जगह दिल में न कोई भरता है, न कभी बदलती है',
    ],
    linesHinglish: [
      'Poori umr guzar jaayegi aur naye mausam bhi aate rahenge darwaze par',
      'Par kuch logon ki jagah dil mein na koi bharta hai, na kabhi badalti hai',
    ],
    linesEnglish: [
      'Whole decades will roll past bringing brand-new seasons to our doors',
      'Yet certain quiet seats inside the heart stay uniquely theirs forever',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'स्टेटस के पीछे छुपी चुप्पी',
    titleEnglish: 'Quiet Pause Behind Short Status',
    linesHindi: [
      'जब कोई गाना बिना कैप्शन के स्टेटस पर लगा दिखता है आधी रात को',
      'तो समझदारों को पूरा पैराग्राफ़ बिना लिखे ही समझ आ जाता है',
    ],
    linesHinglish: [
      'Jab koi gaana bina caption ke status par laga dikhta hai aadhi raat ko',
      'To samajhdaaron ko poora paragraph bina likhe hi samajh aa jaata hai',
    ],
    linesEnglish: [
      'When a song gets posted past midnight with zero caption underneath',
      'Hearts that have loved deeply read every unwritten paragraph at once',
    ],
  },
  {
    title: 'मीठी यादों का पुराना शहर',
    titleEnglish: 'Old Town of Sweet Memories',
    linesHindi: [
      'उस शहर में अब कोई काम नहीं है मेरा सालों से जाने-आने का',
      'फिर भी नक्शे पर जब उसका नाम दिखता है तो आँखें ठहर जाती हैं',
    ],
    linesHinglish: [
      'Us shehar mein ab koi kaam nahin hai mera saalon se jaane-aane ka',
      'Phir bhi nakshe par jab uska naam dikhta hai to aankhein thehar jaati hain',
    ],
    linesEnglish: [
      'I hold zero errands left in that little town from years gone by',
      'Still whenever its name flickers on a map, my eyes linger warmly',
    ],
  },
  {
    title: 'अनसुनी कॉल की मीठी घंटी',
    titleEnglish: 'Memory of Familiar Ringtone',
    linesHindi: [
      'नंबर तो कब का डिलीट कर दिया था फ़ोन की लिस्ट से मैंने शांत होकर',
      'पर उँगलियों को आज भी आखिरी चार अंक ज़ुबानी याद बने हुए हैं',
    ],
    linesHinglish: [
      'Number to kab ka delete kar diya tha phone ki list se maine shaant hokar',
      'Par ungliyon ko aaj bhi aakhiri chaar ank zubaani yaad bane hue hain',
    ],
    linesEnglish: [
      'I calmly cleared that contact out of my phonebook seasons ago',
      'Yet my fingertips still remember the final four digits effortlessly',
    ],
  },
  {
    title: 'प्यार में जिद से ऊपर सुकून',
    titleEnglish: 'Choosing Your Peace Over Holding',
    linesHindi: [
      'किसी को ज़बरदस्ती रोक लेने में भला कौन सी जीत छिपी होती है',
      'अगर मेरे दूर रहने से तुम्हारी हँसी सलामत है, तो यही सही है',
    ],
    linesHinglish: [
      'Kisi ko zabardasti rok lene mein bhala kaun si jeet chhipi hoti hai',
      'Agar mere door rehne se tumhaari hansi salaamat hai, to yahi sahi hai',
    ],
    linesEnglish: [
      'What victory hides inside insisting someone remain where they feel uneasy',
      'If stepping gently aside protects your bright smile, let it be so',
    ],
  },
  {
    title: 'शाम की बालकनी और दो पल',
    titleEnglish: 'Two Quiet Minutes on Balcony',
    linesHindi: [
      'सूरज ढलते वक़्त जब आसमान हल्का गुलाबी सा रंग ओढ़ लेता है',
      'तब दो मिनट चुपचाप खड़े होकर तुम्हारी याद से बात कर लेता हूँ',
    ],
    linesHinglish: [
      'Sooraj dhalte waqt jab aasmaan halka gulaabi sa rang odh leta hai',
      'Tab do minute chupchaap khade hokar tumhaari yaad se baat kar leta hoon',
    ],
    linesEnglish: [
      'As sunset brushes pale rose across evening clouds above the street',
      'I stand quietly for two calm minutes sharing silent thoughts with your memory',
    ],
  },
  {
    title: 'फुर्सत में खुलने वाली परतें',
    titleEnglish: 'Quiet Layers Opening Slowly',
    linesHindi: [
      'दिन भर के काम में तो दिमाग सौ जगह उलझा रहता है लगातार',
      'रात को तकिये पर सिर रखते ही दिल का अधूरा किस्सा जाग जाता है',
    ],
    linesHinglish: [
      'Din bhar ke kaam mein to dimaag sau jagah uljha rehta hai lagaataar',
      'Raat ko takiye par sir rakhte hi dil ka adhoora kissa jaag jaata hai',
    ],
    linesEnglish: [
      'Daylight errands keep busy thoughts spinning across a hundred tasks',
      'Yet the moment my head meets the pillow, our unfinished story wakes softly',
    ],
  },
  {
    title: 'खामोश मोहब्बत का सम्मान',
    titleEnglish: 'Honor of Quietly Loving Once',
    linesHindi: [
      'कुछ लोग जीवन में एक ही बार पूरी शिद्दत से दस्तक देते हैं दिल पर',
      'वे चले भी जाएँ तो खालीपन नहीं, एक शांत एहसास छोड़ जाते हैं',
    ],
    linesHinglish: [
      'Kuch log jeevan mein ek hi baar poori shiddat se dastak dete hain dil par',
      'We chale bhi jaayein to khaalipan nahin, ek shaant ehsaas chhod jaate hain',
    ],
    linesEnglish: [
      'Some souls knock upon your heart deeply only once in a lifetime',
      'Even after parting they leave serene gratitude rather than hollowness',
    ],
  },
  {
    title: 'मुस्कान के संग अधूरी बात',
    titleEnglish: 'Smile Carrying Unfinished Words',
    linesHindi: [
      'जब भी कोई पूछता है कि क्या तुम आज भी उन्हें याद करते हो कभी',
      'मैं मुस्कुराकर बस इतना कहता हूँ—अच्छे लोगों को भला कौन भूलता है',
    ],
    linesHinglish: [
      'Jab bhi koi poochhta hai ki kya tum aaj bhi unhein yaad karte ho kabhi',
      'Main muskuraakar bas itna kehta hoon—achhe logon ko bhala kaun bhoolta hai',
    ],
    linesEnglish: [
      'Whenever someone gently asks if I still think about you sometimes',
      'I smile softly and reply—who ever truly forgets a genuinely kind soul',
    ],
  },
  {
    title: 'गुलमोहर के नीचे छूटे शब्द',
    titleEnglish: 'Words Left Beneath Gulmohar Tree',
    linesHindi: [
      'सड़क किनारे गुलमोहर आज भी मई की धूप में लाल फूल बिखेरता है',
      'बस उनके नीचे बैठकर हँसी-मज़ाक करने वाली वह दोपहरी अब याद है',
    ],
    linesHinglish: [
      'Sadak kinaare gulmohar aaj bhi May ki dhoop mein laal phool bikherta hai',
      'Bas unke neeche baithkar hansi-mazaak karne waali woh dopehari ab yaad hai',
    ],
    linesEnglish: [
      'Roadside flame trees still scatter scarlet blossoms through warm May noon',
      'Only those carefree afternoons laughing beneath their shade stay in memory',
    ],
  },
  {
    title: 'बिना इल्ज़ाम की दूरी',
    titleEnglish: 'Distance Without Single Blame',
    linesHindi: [
      'रिश्ते टूटने के पीछे हमेशा कोई बेवफ़ाई या धोखा ही हो ज़रूरी नहीं',
      'कभी-कभी दो अच्छे इंसान बस गलत वक़्त पर टकरा जाते हैं',
    ],
    linesHinglish: [
      'Rishte tootne ke peechhe hamesha koi bewafaai ya dhokha hi ho zaroori nahin',
      'Kabhi-kabhi do achhe insaan bas galat waqt par takra jaate hain',
    ],
    linesEnglish: [
      'Not every parting stems from betrayal, lies, or broken trust',
      'Sometimes two genuinely good people simply collide during mismatched seasons',
    ],
  },
  {
    title: 'कॉफ़ी की भाप में नाम',
    titleEnglish: 'Name Traced in Warm Steam',
    linesHindi: [
      'मेज़ पर ठंडी होती कॉफ़ी को देखकर आज हल्की सी हँसी आ गई मुझे',
      'क्योंकि तुम्हारे जाने के बाद भी बात करने की मेरी आदत नहीं बदली',
    ],
    linesHinglish: [
      'Mez par thandi hoti coffee ko dekhkar aaj halki si hansi aa gayi mujhe',
      'Kyunki tumhaare jaane ke baad bhi baat karne ki meri aadat nahin badli',
    ],
    linesEnglish: [
      'Glancing down at cooling coffee across the table drew a gentle chuckle',
      'Even without you here, my habit of drifting into endless chats never changed',
    ],
  },
  {
    title: 'सुकून भरा अंतिम सलाम',
    titleEnglish: 'Peaceful Final Salutation',
    linesHindi: [
      'दिल की ज़मीन पर तुम्हारे कदमों के निशान अब भी बहुत प्यारे लगते हैं',
      'जहाँ रहो खुश रहो, मेरी मोहब्बत का सबसे सुंदर अंत यही है',
    ],
    linesHinglish: [
      'Dil ki zameen par tumhaare kadmon ke nishaan ab bhi bahut pyare lagte hain',
      'Jahaan raho khush raho, meri mohabbat ka sabse sundar ant yahi hai',
    ],
    linesEnglish: [
      'Across quiet soil inside my heart your soft footprints still look lovely',
      'Stay happy wherever life guides you—that remains love’s finest ending',
    ],
  },
  {
    title: 'खामोश निगाहों का संवाद',
    titleEnglish: 'Silent Dialogue of Soft Eyes',
    linesHindi: [
      'अगर कभी किसी महफ़िल में अचानक नज़रें मिल भी जाएँ हमारी',
      'तो बस एक हल्की सी मुस्कान दे देना, सारा हाल उसी में मिल जाएगा',
    ],
    linesHinglish: [
      'Agar kabhi kisi mehfil mein achaanak nazrein mil bhi jaayein hamaari',
      'To bas ek halki si muskaan de dena, saara haal usi mein mil jaayega',
    ],
    linesEnglish: [
      'If our gazes ever chance to meet across some crowded room someday',
      'Offer just one gentle nod and smile—everything worth saying lives inside it',
    ],
  },
  {
    title: 'अधूरे खत की मीठी खुशबू',
    titleEnglish: 'Sweet Ink on Unfinished Letter',
    linesHindi: [
      'सारी बातें पूरी हो जाएँ तो कहानी वहीं खत्म हो जाती है सुनते ही',
      'कुछ अधूरा रह जाना ही मोहब्बत को सालों तक ज़िंदा रखता है',
    ],
    linesHinglish: [
      'Saari baatein poori ho jaayein to kahaani wahin khatam ho jaati hai sunte hi',
      'Kuch adhoora reh jaana hi mohabbat ko saalon tak zinda rakhta hai',
    ],
    linesEnglish: [
      'When every loose thread ties shut, the story ends cleanly on the spot',
      'Leaving one tender chapter unfinished keeps affection alive across decades',
    ],
  },
  {
    title: 'तितलियों सा चंचल एहसास',
    titleEnglish: 'Butterfly-Light Passing Feeling',
    linesHindi: [
      'तुम मेरे पास किसी तितली की तरह सिर्फ़ कुछ बहारों तक ही ठहरे थे',
      'पर उतने ही रंग भर गए मेरी सादी सी ज़िंदगी के कैनवास पर',
    ],
    linesHinglish: [
      'Tum mere paas kisi titli ki tarah sirf kuch bahaaron tak hi thehre the',
      'Par utne hi rang bhar gaye meri saadi si zindagi ke canvas par',
    ],
    linesEnglish: [
      'Like a bright butterfly you lingered beside me for only brief springs',
      'Yet brushed unforgettable colors across my quiet everyday canvas',
    ],
  },
  {
    title: 'इंतज़ार से आगे की समझ',
    titleEnglish: 'Wisdom Growing Past Waiting',
    linesHindi: [
      'अब दरवाज़े पर आँखें बिछाकर हर आहट पर मुड़ना छोड़ दिया है मैंने',
      'क्योंकि सच्चा इश्क़ किसी की वापसी का मोहताज नहीं होता कभी',
    ],
    linesHinglish: [
      'Ab darwaze par aankhein bichhaakar har aahat par mudna chhod diya hai maine',
      'Kyunki sachha ishq kisi ki waapsi ka mohtaaj nahin hota kabhi',
    ],
    linesEnglish: [
      'I no longer sit guarding the front porch turning at every soft footstep',
      'True affection never depends on someone walking back through the door',
    ],
  },
  {
    title: 'आकाश में तैरता नाम',
    titleEnglish: 'Name Drifting Above Quiet Clouds',
    linesHindi: [
      'जब भी सफ़ेद बादल नीले आसमान में धीरे-धीरे अपना रूप बदलते हैं',
      'मन अनजाने ही उनमें तुम्हारी मुस्कान की तस्वीर बना लेता है',
    ],
    linesHinglish: [
      'Jab bhi safed baadal neele aasmaan mein dheere-dheere apna roop badalte hain',
      'Mann anjaane hi unmein tumhaari muskaan ki tasveer bana leta hai',
    ],
    linesEnglish: [
      'Whenever white afternoon clouds drift lazily reshaping overhead',
      'My mind playfully sketches the curve of your smile right across the blue',
    ],
  },
  {
    title: 'भीतर संजोई सादगी की चमक',
    titleEnglish: 'Gentle Spark Kept Within',
    linesHindi: [
      'तुम्हारे जाने ने मुझसे मेरी खुशियों का घर नहीं छीना है दोस्त',
      'बल्कि सिखाया है कि अकेले भी किसी को पूरी इज़्ज़त से चाहा जा सकता है',
    ],
    linesHinglish: [
      'Tumhaare jaane ne mujhse meri khushiyon ka ghar nahin chheena hai dost',
      'Balki sikhaaya hai ki akele bhi kisi ko poori izzat se chaaha ja sakta hai',
    ],
    linesEnglish: [
      'Your departure did not steal away the quiet home of peace inside me',
      'It taught me how gracefully one heart can cherish someone from afar',
    ],
  },
  {
    title: 'चंदन सी शीतल यादें',
    titleEnglish: 'Cool Sandalwood Memories',
    linesHindi: [
      'जलन और गुस्सा अक्सर रिश्तों की राख छोड़ जाते हैं जाते वक़्त',
      'पर हमारा साथ आज भी मन पर चंदन की तरह शीतल असर रखता है',
    ],
    linesHinglish: [
      'Jalan aur gussa aksar rishton ki raakh chhod jaate hain jaate waqt',
      'Par hamaara saath aaj bhi mann par chandan ki tarah sheetal asar rakhta hai',
    ],
    linesEnglish: [
      'Anger and spite usually leave cold ashes behind whenever ties unwind',
      'Yet thoughts of you still cool my mind like fresh sandalwood paste',
    ],
  },
  {
    title: 'दिल की किताब का सुनहरा कोना',
    titleEnglish: 'Golden Corner of Heart’s Book',
    linesHindi: [
      'ज़िंदगी की भागदौड़ में कितने ही अध्याय जुड़ेंगे अब आगे चलकर',
      'पर तुम्हारा पन्ना हमेशा सुनहरी स्याही से अलग ही चमकेगा',
    ],
    linesHinglish: [
      'Zindagi ki bhaagdaud mein kitne hi adhyaay judenge ab aage chalkar',
      'Par tumhaara panna hamesha sunahari syaahi se alag hi chamkega',
    ],
    linesEnglish: [
      'Countless new chapters will keep filling my journey in years ahead',
      'Still your single page will always shimmer apart in quiet golden ink',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'रिमझिम फुहारों की सरगोशी',
    titleEnglish: 'Whisper Inside Light Drizzle',
    linesHindi: [
      'सड़क पर गीली मिट्टी की खुशबू उठते ही सब कुछ शांत हो जाता है',
      'ऐसा लगता है जैसे प्रकृति ख़ुद हमारे अधूरे किस्से पर मरहम रख रही हो',
    ],
    linesHinglish: [
      'Sadak par geeli mitti ki khushboo uthte hi sab kuch shaant ho jaata hai',
      'Aisa lagta hai jaise prakriti khud hamaare adhoore kisse par marham rakh rahi ho',
    ],
    linesEnglish: [
      'The moment rain-soaked earth breathes its sweet scent across the road',
      'Nature itself seems to lay a cool balm over unfinished chapters',
    ],
  },
  {
    title: 'साँसों में बसी पुरानी धुन',
    titleEnglish: 'Old Melody Carried Softly',
    linesHindi: [
      'कुछ गीत ऐसे होते हैं जिन्हें सिर्फ़ एक बार किसी के साथ सुना जाए',
      'फिर पूरी उम्र वे अकेले में वही पुराना मंज़र सामने ले आते हैं',
    ],
    linesHinglish: [
      'Kuch geet aise hote hain jinhein sirf ek baar kisi ke saath suna jaaye',
      'Phir poori umr we akele mein wahi puraana manzar saamne le aate hain',
    ],
    linesEnglish: [
      'Certain melodies only need to be shared beside someone a single afternoon',
      'For decades after, one opening note paints that entire sunlit scene back',
    ],
  },
  {
    title: 'पलकों के किनारे ठहरा मोती',
    titleEnglish: 'Quiet Pearl Along Eyelashes',
    linesHindi: [
      'न मैंने कभी तमाशा किया और न ही सबको अपना दर्द सुनाया घूमकर',
      'बस एक नम मुस्कान ही मेरी सबसे सच्ची गवाह रही है हर शाम की',
    ],
    linesHinglish: [
      'Na maine kabhi tamaasha kiya aur na hi sabko apna dard sunaaya ghoomkar',
      'Bas ek nam muskaan hi meri sabse sachhi gawaah rahi hai har shaam ki',
    ],
    linesEnglish: [
      'I never staged loud scenes or paraded private aches for sympathy',
      'One soft misty smile has been the sole quiet witness to every dusk',
    ],
  },
  {
    title: 'सपनों के मोड़ पर मुलाक़ात',
    titleEnglish: 'Brief Crossing at Dream Bend',
    linesHindi: [
      'जागती दुनिया में भले ही हमारी गलियाँ अब अलग-अलग शहर में हों',
      'नींद की शांत घाटी में आज भी तुम बिना पूछे मिलने आ जाते हो',
    ],
    linesHinglish: [
      'Jaagti duniya mein bhale hi hamaari galiyaan ab alag-alag shehar mein hon',
      'Neend ki shaant ghaati mein aaj bhi tum bina poochhe milne aa jaate ho',
    ],
    linesEnglish: [
      'Waking hours may keep our street signs worlds apart across the map',
      'Yet inside quiet valleys of sleep you still visit gently unannounced',
    ],
  },
  {
    title: 'दिल से निकली मीठी रज़ामंदी',
    titleEnglish: 'Tender Acceptance From Within',
    linesHindi: [
      'हमेशा सब कुछ अपनी मर्ज़ी से मिल जाए तो इंसान कभी ठहरता नहीं',
      'तुम्हारे न मिलने ने मुझे ईश्वर की मर्ज़ी के आगे झुकना सिखाया',
    ],
    linesHinglish: [
      'Hamesha sab kuch apni marzi se mil jaaye to insaan kabhi theharta nahin',
      'Tumhaare na milne ne mujhe eeshwar ki marzi ke aage jhukna sikhaaya',
    ],
    linesEnglish: [
      'If every wish arrived instantly on demand we would never grow still',
      'Missing your hand taught me quiet grace and trust in higher timing',
    ],
  },
  {
    title: 'खामोश लाइब्रेरी वाली नज़र',
    titleEnglish: 'Quiet Glance Across Study Hall',
    linesHindi: [
      'किताब के पन्ने पलटने का बहाना बनाकर जो नज़रें चुराया करते थे',
      'आज भी किसी किताब की खुशबू में वही मासूम सा इश्क़ महकता है',
    ],
    linesHinglish: [
      'Kitaab ke panne palatne ka bahaana banaakar jo nazrein churaaya karte the',
      'Aaj bhi kisi kitaab ki khushboo mein wahi maasoom sa ishq mehakta hai',
    ],
    linesEnglish: [
      'Stealing quick glances while pretending to turn textbook pages quietly',
      'Still scents fresh paper with the sweetest innocence of young love',
    ],
  },
  {
    title: 'मोहब्बत का बेदाग़ आईना',
    titleEnglish: 'Untainted Mirror of Care',
    linesHindi: [
      'मैंने चाहा था तो पूरी ईमानदारी से चाहा था बिना किसी शर्त के',
      'आज भी आईने के सामने खड़ा होता हूँ तो दिल बिल्कुल हल्का लगता है',
    ],
    linesHinglish: [
      'Maine chaaha tha to poori imaandari se chaaha tha bina kisi shart ke',
      'Aaj bhi aaine ke saamne khada hota hoon to dil bilkul halka lagta hai',
    ],
    linesEnglish: [
      'When I loved you, I offered every ounce cleanly without bargains',
      'Standing before any mirror today, my conscience rests completely light',
    ],
  },
  {
    title: 'सुकून भरी अनकही विदा',
    titleEnglish: 'Serene Unspoken Goodbye',
    linesHindi: [
      'कभी-कभी शब्दों में अलविदा कहना बहुत भारी पड़ जाता है होंठों पर',
      'इसलिए ख़ामोशी ने ही बड़ी नज़ाकत से हमारे बीच पुल समेट लिया',
    ],
    linesHinglish: [
      'Kabhi-kabhi shabdon mein alvida kehna bahut bhaari pad jaata hai honthon par',
      'Isiliye khaamoshi ne hi badi nazaakat se hamaare beech pul samet liya',
    ],
    linesEnglish: [
      'Spoken goodbyes sometimes feel far too heavy for trembling lips to bear',
      'So quiet grace gently folded the bridge between us without harsh sound',
    ],
  },
  {
    title: 'चुपचाप संभाला हुआ तोहफ़ा',
    titleEnglish: 'Small Keepsake Guarded Safely',
    linesHindi: [
      'तुम्हारे हाथ का दिया वह छोटा सा कीचेन आज भी चाबियों में लगा है',
      'हर बार दरवाज़ा खोलते हुए लगता है जैसे पुरानी हँसी साथ खड़ी हो',
    ],
    linesHinglish: [
      'Tumhaare haath ka diya woh chhota sa keychain aaj bhi chaabiyon mein laga hai',
      'Har baar darwaaza kholte hue lagta hai jaise puraani hansi saath khadi ho',
    ],
    linesEnglish: [
      'That tiny keychain you handed me once still jingles on my daily keys',
      'Unlocking the front door each night feels like your warm chuckle waits beside me',
    ],
  },
  {
    title: 'हवा में घुली अधूरी दुआ',
    titleEnglish: 'Half-Whispered Wish on Breeze',
    linesHindi: [
      'चाहे तुम मेरे शहर में न आओ अब कभी भी किसी मोड़ से होकर',
      'पर तुम्हारे घर के आँगन में खुशियों की धूप हमेशा खिली रहे यही आस है',
    ],
    linesHinglish: [
      'Chaahe tum mere shehar mein na aao ab kabhi bhi kisi mod se hokar',
      'Par tumhaare ghar ke aangan mein khushiyon ki dhoop hamesha khili rahe yahi aas hai',
    ],
    linesEnglish: [
      'Even if your journeys never steer back through my hometown again',
      'I hope bright morning sunlight always warms every corner of your home',
    ],
  },
  {
    title: 'वक़्त की रेत पर लिखा नाम',
    titleEnglish: 'Name Written Near Gentle Tide',
    linesHindi: [
      'लहरें किनारे से लिखा नाम भले ही पल में बहा ले जाती हों रोज़',
      'पर मन के समंदर की गहराई में वह अक्षर कभी नहीं मिटते हैं',
    ],
    linesHinglish: [
      'Lehrein kinaare se likha naam bhale hi pal mein baha le jaati hon roz',
      'Par mann ke samandar ki gehraai mein woh akshar kabhi nahin mit-te hain',
    ],
    linesEnglish: [
      'Ocean tides easily rinse away names traced along wet shore sand',
      'Yet letters carved deep inside the heart outlast every passing wave',
    ],
  },
  {
    title: 'साँझ ढले यादों की रौशनी',
    titleEnglish: 'Warm Lantern of Dusk Memories',
    linesHindi: [
      'जब सारा घर काम निपटा कर शांत हो जाता है रात के नौ बजे',
      'तब तुम्हारी एक मीठी सी याद मन के आँगन में दीया जला देती है',
    ],
    linesHinglish: [
      'Jab saara ghar kaam nipta kar shaant ho jaata hai raat ke nau baje',
      'Tab tumhaari ek meethi si yaad mann ke aangan mein diya jala deti hai',
    ],
    linesEnglish: [
      'When evening chores settle and the whole house turns quiet at nine',
      'One gentle memory of you lights a steady little lantern inside my chest',
    ],
  },
  {
    title: 'दोराहे पर खड़ी समझदारी',
    titleEnglish: 'Quiet Wisdom at the Crossroads',
    linesHindi: [
      'हमने अपनी ख़ुशी के लिए किसी तीसरे का दिल कभी नहीं दुखाया यार',
      'यही कारण है कि अधूरा रहकर भी हमारा प्यार बहुत पाक रहा',
    ],
    linesHinglish: [
      'Humne apni khushi ke liye kisi teesre ka dil kabhi nahin dukhaaya yaar',
      'Yahi kaaran hai ki adhoora rehkar bhi hamaara pyar bahut paak raha',
    ],
    linesEnglish: [
      'We refused to bruise innocent hearts just to claim our own happiness',
      'That is why even left unfinished, our affection stayed completely pure',
    ],
  },
  {
    title: 'आँसू और मुस्कान का संगम',
    titleEnglish: 'Where Soft Mist Meets Smile',
    linesHindi: [
      'अजीब सा जादू है इस अधूरी मोहब्बत के एहसास में भी दोस्तों',
      'नमी आती है आँखों में तो होठों पर अपने आप मुस्कान भी आ जाती है',
    ],
    linesHinglish: [
      'Ajeeb sa jaadoo hai is adhoori mohabbat ke ehsaas mein bhi doston',
      'Nami aati hai aankhon mein to honthon par apne aap muskaan bhi aa jaati hai',
    ],
    linesEnglish: [
      'A tender quiet magic lives inside unfinished affection too',
      'Soft mist rises to my lashes right alongside an involuntary warm smile',
    ],
  },
  {
    title: 'मज़बूत कदमों के नीचे कोमल दिल',
    titleEnglish: 'Tender Heart Beneath Steady Steps',
    linesHindi: [
      'बाहर से भले ही ज़िंदगी ने हमें काफी सख़्त और सँभला बना दिया हो',
      'पर तुम्हारे ज़िक्र भर से आज भी भीतर बर्फ़ की तरह पिघल जाता हूँ',
    ],
    linesHinglish: [
      'Baahar se bhale hi zindagi ne humein kaafi sakht aur sambhla bana diya ho',
      'Par tumhaare zikr bhar se aaj bhi bheetar barf ki tarah pighal jaata hoon',
    ],
    linesEnglish: [
      'Outwardly busy years shaped me steady, composed, and tough enough',
      'Yet one casual mention of your name still melts my chest like summer ice',
    ],
  },
  {
    title: 'बिना माँग की चाहत का फूल',
    titleEnglish: 'Blossom Grown Without Demands',
    linesHindi: [
      'मैंने कभी तुमसे चाँद या बड़ी सौगात की फरमाइश नहीं रखी थी',
      'बस शाम को पाँच मिनट हाल पूछ लेना ही मेरी पूरी दुनिया थी',
    ],
    linesHinglish: [
      'Maine kabhi tumse chaand ya badi saugaat ki farmaaish nahin rakhi thi',
      'Bas shaam ko paanch minute haal poochh lena hi meri poori duniya thi',
    ],
    linesEnglish: [
      'I never asked you for grand gifts or dramatic promises under stars',
      'Five quiet evening minutes asking how my day went held my whole world',
    ],
  },
  {
    title: 'सपनों के पार भी अपनापन',
    titleEnglish: 'Belonging Beyond Shared Futures',
    linesHindi: [
      'ज़िंदगी की राह में अब भले ही हम अपने-अपने कामों में मसरूफ़ हों',
      'पर किसी भी कठिन मोड़ पर आवाज़ दोगे तो सबसे पहले मैं ही दिखूँगा',
    ],
    linesHinglish: [
      'Zindagi ki raah mein ab bhale hi hum apne-apne kaamon mein masroof hon',
      'Par kisi bhi kathin mod par aawaz doge to sabse pehle main hi dikhoonga',
    ],
    linesEnglish: [
      'Even absorbed in separate routines along life’s busy avenues now',
      'Call once at any stormy turn and I will still stand first beside you',
    ],
  },
  {
    title: 'दिल की गहराइयों का शांत रंग',
    titleEnglish: 'Calm Shade Inside Deep Affection',
    linesHindi: [
      'गहरे समुद्र की तरह शांत हो जाती है मोहब्बत एक उम्र के बाद',
      'शोर ऊपर की लहरों में रहता है, नीचे तो बस स्थिर समर्पण होता है',
    ],
    linesHinglish: [
      'Gehre samandar ki tarah shaant ho jaati hai mohabbat ek umr ke baad',
      'Shor oopar ki lehron mein rehta hai, neeche to bas sthir samarpan hota hai',
    ],
    linesEnglish: [
      'Like deep ocean water, true love grows wonderfully calm over time',
      'Restless noise stays on surface ripples while silent devotion rests below',
    ],
  },
  {
    title: 'हल्की सर्दी में गुनगुनी धूप',
    titleEnglish: 'Gentle Sunshine on Crisp Morning',
    linesHindi: [
      'तुम बिल्कुल जनवरी की दोपहर की उस गुनगुनी धूप जैसे थे मेरे लिए',
      'जितनी देर रहे सुकून दिया और जाने पर भी कोई शिकायत न रही',
    ],
    linesHinglish: [
      'Tum bilkul January ki dopahar ki us gunguni dhoop jaise the mere liye',
      'Jitni der rahe sukoon diya aur jaane par bhi koi shikaayat na rahi',
    ],
    linesEnglish: [
      'You felt exactly like soft golden sunlight on a brisk January noon',
      'Pure comfort while you lingered, leaving zero bitterness when clouds moved on',
    ],
  },
  {
    title: 'अधूरे साज़ का मीठा स्वर',
    titleEnglish: 'Sweet Note From Unfinished String',
    linesHindi: [
      'अधूरा रह जाने से किसी रिश्ते की सच्चाई कम नहीं हो जाती कभी',
      'जैसे टूटा हुआ सितार भी अपनी आखिरी धुन में मीठा ही बजता है',
    ],
    linesHinglish: [
      'Adhoora reh jaane se kisi rishte ki sachhaai kam nahin ho jaati kabhi',
      'Jaise toota hua sitaar bhi apni aakhiri dhun mein meetha hi bajta hai',
    ],
    linesEnglish: [
      'Ending unfinished never reduces the honesty of what we truly shared',
      'Even one gentle string plucked lightly rings out sweetly in the room',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'कॉलेज गेट पर छूटी शाम',
    titleEnglish: 'Evening Left Near Campus Gate',
    linesHindi: [
      'सीढ़ियों पर बैठकर जो बेमतलब की बातें दो घंटे चलती थीं रोज़',
      'आज वही सबसे महँगी और कीमती दौलत बनकर याद आती हैं',
    ],
    linesHinglish: [
      'Seedhiyon par baithkar jo bematlab ki baatein do ghante chalti thin roz',
      'Aaj wahi sabse mehngi aur keemti daulat bankar yaad aati hain',
    ],
    linesEnglish: [
      'Those aimless two-hour chats sitting casually on worn stone steps',
      'Now shimmer back as the richest memories wealth could never buy',
    ],
  },
  {
    title: 'बिना कहे समझा गया इशारा',
    titleEnglish: 'Unspoken Cue Understood Instantly',
    linesHindi: [
      'इतनी दूर आने के बाद भी कोई दूसरा उतना समझ नहीं पाया मुझे',
      'जितना तुम बस मेरी आवाज़ के बदलते लहजे से भाँप लिया करते थे',
    ],
    linesHinglish: [
      'Itni door aane ke baad bhi koi doosra utna samajh nahin paaya mujhe',
      'Jitna tum bas meri aawaz ke badalte lehje se bhaanp liya karte the',
    ],
    linesEnglish: [
      'Even after walking so many miles, nobody else reads me quite that clearly',
      'Just the slightest shift across my voice once told you my entire mood',
    ],
  },
  {
    title: 'सुकून भरा धीमा सफ़र',
    titleEnglish: 'Gentle Pace of Quiet Healing',
    linesHindi: [
      'मैंने जल्दी-जल्दी किसी और में तुम्हारा चेहरा ढूँढने की गलती नहीं की',
      'अपनी यादों को सँवारते हुए ख़ुद ही आगे बढ़ना बेहतर समझा मैंने',
    ],
    linesHinglish: [
      'Maine jaldi-jaldi kisi aur mein tumhaara chehra dhoondhne ki galti nahin ki',
      'Apni yaadon ko sanwaarte hue khud hi aage badhna behtar samjha maine',
    ],
    linesEnglish: [
      'I never made the mistake of rushing to search your outline in someone new',
      'Healing steadily while honoring warm memories felt far more honest',
    ],
  },
  {
    title: 'सपने में साथ टहलना',
    titleEnglish: 'Walking Together Inside Quiet Dreams',
    linesHindi: [
      'कुछ अधूरी सैर ऐसी होती हैं जो सड़कों पर नहीं, ख़्वाबों में पूरी होती हैं',
      'जहाँ न घड़ी की फिक्र रहती है और न ही किसी के बुलावे का डर',
    ],
    linesHinglish: [
      'Kuch adhoori sair aisi hoti hain jo sadkon par nahin, khwaabon mein poori hoti hain',
      'Jahaan na ghadi ki fikr rehti hai aur na hi kisi ke bulaawe ka dar',
    ],
    linesEnglish: [
      'Some unfinished walks finish peacefully inside quiet dreams instead of streets',
      'Where clocks never hurry us and nobody has to wave goodbye at dusk',
    ],
  },
  {
    title: 'आँखों की नमी में छुपा आभार',
    titleEnglish: 'Gratitude Shining Inside Mist',
    linesHindi: [
      'दिल दुखा भी होगा कभी तो सिर्फ़ इतना कि तुम बहुत जल्दी चले गए',
      'वरना जितने दिन साथ थे, तुमने मुझे हँसना ही सिखाया था हर पल',
    ],
    linesHinglish: [
      'Dil dukha bhi hoga kabhi to sirf itna ki tum bahut jaldi chale gaye',
      'Warna jitne din saath the, tumne mujhe hansna hi sikhaaya tha har pal',
    ],
    linesEnglish: [
      'If sorrow ever knocked, it was solely because our season closed too soon',
      'Every single day you stayed, you only taught my heart brighter laughter',
    ],
  },
  {
    title: 'तितलियों से भरा पुराना बगीचा',
    titleEnglish: 'Old Garden Still Full of Wings',
    linesHindi: [
      'पार्क की उस बेंच पर आज कोई और दो दोस्त हँसते हुए दिख गए मुझे',
      'देखकर जलन नहीं हुई, बस अपना खूबसूरत बीता हुआ कल मुस्कुरा उठा',
    ],
    linesHinglish: [
      'Park ki us bench par aaj koi aur do dost hanste hue dikh gaye mujhe',
      'Dekhkar jalan nahin hui, bas apna khoobsurat beeta hua kal muskura utha',
    ],
    linesEnglish: [
      'Spotting two young friends laughing softly on our old wooden park bench',
      'Brought zero envy—just a warm smile waving back at our lovely yesterday',
    ],
  },
  {
    title: 'नए सवेरे में पुरानी कोमलता',
    titleEnglish: 'Old Softness Inside New Morning',
    linesHindi: [
      'ज़िंदगी ने आगे बढ़ा दिया है हमें नई ज़िम्मेदारियों के साथ बेशक',
      'पर दिल की कोमलता आज भी तुम्हारे ही नाम से संभली हुई है',
    ],
    linesHinglish: [
      'Zindagi ne aage badha diya hai humein nayi zimmedariyon ke saath beshak',
      'Par dil ki komalta aaj bhi tumhaare hi naam se sambhli hui hai',
    ],
    linesEnglish: [
      'Life certainly carried both of us onward into fresh responsibilities',
      'Yet the softest grace within my chest still carries your gentle imprint',
    ],
  },
  {
    title: 'शब्दों से परे की सलामती',
    titleEnglish: 'Blessings Spoken Without Sound',
    linesHindi: [
      'हर जन्मदिन पर मैसेज भेजना भले अब मुनासिब न लगता हो वक़्त को',
      'पर आसमान से हर साल तुम्हारी लंबी खुशी की दुआ ज़रूर माँग लेता हूँ',
    ],
    linesHinglish: [
      'Har janmdin par message bhejna bhale ab munaasib na lagta ho waqt ko',
      'Par aasmaan se har saal tumhaari lambi khushi ki dua zaroor maang leta hoon',
    ],
    linesEnglish: [
      'Even if sending birthday texts no longer fits neatly inside our boundaries',
      'I quietly look up each year asking skies to wrap you in lasting joy',
    ],
  },
  {
    title: 'अनचाही दूरी का सलीका',
    titleEnglish: 'Graceful Poise Across Distance',
    linesHindi: [
      'रोकर हाथ थामने की कोशिश में अक्सर इज़्ज़त भी फिसल जाती है हाथ से',
      'हमने चुपचाप मुड़कर अपने प्यार की गरिमा को बचाए रखा हमेशा',
    ],
    linesHinglish: [
      'Rokar haath thaamne ki koshish mein aksar izzat bhi phisal jaati hai haath se',
      'Humne chupchaap mudkar apne pyar ki garima ko bachaaye rakha hamesha',
    ],
    linesEnglish: [
      'Clinging tightly in desperation often wears away mutual grace',
      'Stepping back gently kept every ounce of dignity around our love intact',
    ],
  },
  {
    title: 'खामोश किताब के बीच सूखा पत्ता',
    titleEnglish: 'Dry Autumn Leaf Between Pages',
    linesHindi: [
      'कभी सोचा न था कि एक छोटा सा सूखा पत्ता इतनी बात कह देगा',
      'जिसे तुमने मज़ाक में मेरी कॉपी के भीतर रख दिया था उस शाम',
    ],
    linesHinglish: [
      'Kabhi socha na tha ki ek chhota sa sookha patta itni baat keh dega',
      'Jise tumne mazaak mein meri copy ke bheetar rakh diya tha us shaam',
    ],
    linesEnglish: [
      'I never imagined one crisp fallen leaf could speak volumes years later',
      'The one you playfully tucked inside my notebook that breezy evening',
    ],
  },
  {
    title: 'सर्द रात में गरम यादों का दीया',
    titleEnglish: 'Warm Lamp on Chilly Night',
    linesHindi: [
      'दिसंबर की ठंडी रातें अक्सर पुराने किस्सों को ताज़ा कर देती हैं मन में',
      'और उनमें से हर किस्सा आज भी चेहरे पर सुकून ही लाता है',
    ],
    linesHinglish: [
      'December ki thandi raatein aksar puraane kisson ko taaza kar deti hain mann mein',
      'Aur unmein se har kissa aaj bhi chehre par sukoon hi laata hai',
    ],
    linesEnglish: [
      'Crisp December nights gently wake tucked-away chapters inside memory',
      'And somehow every single recollection still rests warmly across my face',
    ],
  },
  {
    title: 'बदलते शहरों में स्थिर जज़्बात',
    titleEnglish: 'Steady Feeling Across Moving Cities',
    linesHindi: [
      'कमरे का पता और नौकरी का शहर कई बार बदल गया इन सालों में',
      'बस दिल के कोने में एक पुराना नंबर और चेहरा कभी नहीं बदला',
    ],
    linesHinglish: [
      'Kamre ka pata aur naukri ka shehar kai baar badal gaya in saalon mein',
      'Bas dil ke kone mein ek puraana number aur chehra kabhi nahin badla',
    ],
    linesEnglish: [
      'Apartment keys and city zip codes shifted several times over recent years',
      'Only one familiar face quietly stored inside my chest never changed',
    ],
  },
  {
    title: 'लौट न पाने का खूबसूरत सबब',
    titleEnglish: 'Gentle Reason Neither Looks Back',
    linesHindi: [
      'तुम अपनी राह पर बहुत आगे निकल गए हो, यह जानकर खुशी होती है',
      'क्योंकि तुम्हारी उड़ान के आगे मेरी कोई भी चाहत छोटी ही लगती है',
    ],
    linesHinglish: [
      'Tum apni raah par bahut aage nikal gaye ho, yeh jaankar khushi hoti hai',
      'Kyunki tumhaari udaan ke aage meri koi bhi chaahat chhoti hi lagti hai',
    ],
    linesEnglish: [
      'Hearing how brightly you have climbed along your path genuinely gladdens me',
      'Seeing you soar freely matters far more than holding onto old wishes',
    ],
  },
  {
    title: 'चाँदनी रात का हल्का सा गीत',
    titleEnglish: 'Soft Humming Under Silver Moon',
    linesHindi: [
      'धीमे सुर में गुनगुनाया गया कोई भी पुराना गीत आज भी असर करता है',
      'क्योंकि उसमें शब्द कम और हमारे बीते हुए पल ज़्यादा बसे होते हैं',
    ],
    linesHinglish: [
      'Dheeme sur mein gungunaaya gaya koi bhi puraana geet aaj bhi asar karta hai',
      'Kyunki usmein shabd kam aur hamaare beete hue pal zyada base hote hain',
    ],
    linesEnglish: [
      'Any old tune hummed softly under breath still carries unexpected weight',
      'Holding fewer written lyrics and far more sunlit hours we once lived',
    ],
  },
  {
    title: 'बिन बताए रखी हुई फ़िक्र',
    titleEnglish: 'Care Guarded Without Announcements',
    linesHindi: [
      'अब तुम्हें बताकर अपनी मौजूदगी का बोझ नहीं डालना चाहता मैं कभी',
      'बस तुम्हारी सलामती की ख़बर कहीं से मिल जाए, यही काफ़ी रहता है',
    ],
    linesHinglish: [
      'Ab tumhein bataakar apni maujoodgi ka bojh nahin daalna chaahta main kabhi',
      'Bas tumhaari salaamati ki khabar kahin se mil jaaye, yahi kaafi rehta hai',
    ],
    linesEnglish: [
      'I never wish to weigh down your peaceful days by announcing my presence',
      'Simply hearing through passing breeze that you are thriving feels plenty',
    ],
  },
  {
    title: 'अधूरे इश्क़ की परिपक्व समझ',
    titleEnglish: 'Mature Grace of Unfinished Love',
    linesHindi: [
      'छोटी उम्र में लगता था कि साथ छूटा तो सब कुछ खत्म हो गया शायद',
      'बड़े होकर समझ आया कि सच्चा प्यार बिछड़कर भी इंसान को सँवारता है',
    ],
    linesHinglish: [
      'Chhoti umr mein lagta tha ki saath chhoota to sab kuch khatam ho gaya shaayad',
      'Bade hokar samajh aaya ki sachha pyar bichhadkar bhi insaan ko sanwaarta hai',
    ],
    linesEnglish: [
      'Younger hearts assume parting spells the sudden end of everything bright',
      'Growing wiser shows real love keeps shaping us gracefully even apart',
    ],
  },
  {
    title: 'धड़कन के किनारे ठहरी शाम',
    titleEnglish: 'Quiet Dusk Resting Near Heartbeat',
    linesHindi: [
      'सूरज जब समंदर या क्षितिज में धीरे से डूबता हुआ दिखाई देता है',
      'तो समझ आता है कि कुछ विदाई भी कितनी सुंदर और शांत हो सकती हैं',
    ],
    linesHinglish: [
      'Sooraj jab samandar ya kshitij mein dheere se doobta hua dikhaayi deta hai',
      'To samajh aata hai ki kuch vidaai bhi kitni sundar aur shaant ho sakti hain',
    ],
    linesEnglish: [
      'Watching golden sun melt gently into calm ocean horizons at dusk',
      'Reminds me just how peaceful and luminous certain goodbyes can remain',
    ],
  },
  {
    title: 'दिल के किसी शांत कोने में तुम',
    titleEnglish: 'A Quiet Place Kept Just for You',
    linesHindi: [
      'चाहे हज़ारों नई ज़िम्मेदारियाँ कंधों पर आ जाएँ आने वाले कल में',
      'पर एक कोमल कोना हमेशा खाली रहेगा सिर्फ़ तुम्हारी प्यारी याद के लिए',
    ],
    linesHinglish: [
      'Chaahe hazaaron nayi zimmedariyaan kandhon par aa jaayein aane waale kal mein',
      'Par ek komal kona hamesha khaali rahega sirf tumhaari pyari yaad ke liye',
    ],
    linesEnglish: [
      'Even as a thousand fresh duties rest across my shoulders tomorrow',
      'One gentle corner inside remains quietly reserved for warm thoughts of you',
    ],
  },
  {
    title: 'मुस्कान से लिपटी खामोश नमी',
    titleEnglish: 'Soft Mist Wrapped in Kind Smile',
    linesHindi: [
      'किसी ने पूछा कि अधूरी मोहब्बत की निशानी कैसी दिखती है आख़िर',
      'मैंने मुस्कुराकर कहा—बिल्कुल बारिश के बाद खिली हुई धूप जैसी',
    ],
    linesHinglish: [
      'Kisi ne poochha ki adhoori mohabbat ki nishaani kaisi dikhti hai aakhir',
      'Maine muskuraakar kaha—bilkul baarish ke baad khili hui dhoop jaisi',
    ],
    linesEnglish: [
      'Someone asked how unfinished love truly looks once seasons settle down',
      'I smiled and answered—exactly like clear sunbeams breaking after gentle rain',
    ],
  },
  {
    title: 'दिल की दहलीज़ पर ठहरा सलाम',
    titleEnglish: 'Gentle Greeting Along Heart Threshold',
    linesHindi: [
      'हमारी कहानी दुनिया की सबसे मशहूर दास्ताँ भले न बन सकी हो',
      'पर मेरी ज़िंदगी की सबसे सच्ची और पाक इबारत हमेशा तुम ही रहोगे',
    ],
    linesHinglish: [
      'Hamaari kahaani duniya ki sabse mashhoor daastaan bhale na ban saki ho',
      'Par meri zindagi ki sabse sachhi aur paak ibaarat hamesha tum hi rahoge',
    ],
    linesEnglish: [
      'Our story may never turn into legends whispered across crowded towns',
      'Yet you will forever stand as the purest verse written inside my life',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'पुराने कैफ़े की कोने वाली मेज़',
    titleEnglish: 'Corner Table at Old Cafe',
    linesHindi: [
      'शहर के उस पुराने कैफ़े के बाहर से आज फिर गुज़रना हुआ अचानक',
      'अंदर कोई और बैठा था पर कोने वाली मेज़ ने तुरंत पहचान लिया मुझे',
    ],
    linesHinglish: [
      'Shehar ke us puraane cafe ke baahar se aaj phir guzarna hua achaanak',
      'Andar koi aur baitha tha par kone waali mez ne turant pehchaan liya mujhe',
    ],
    linesEnglish: [
      'Walking past our old downtown cafe unexpectedly brought a gentle pause',
      'New faces sat inside, yet that quiet corner table recognized me right away',
    ],
  },
  {
    title: 'सर्दियों की धुंध में गुम आहट',
    titleEnglish: 'Soft Footstep in Winter Fog',
    linesHindi: [
      'कोहरे भरी सुबह में जब दूर से कोई हल्की परछाईं आगे बढ़ती है',
      'तो एक सेकंड के लिए दिल पुरानी उम्मीद से धड़क उठता है धीरे से',
    ],
    linesHinglish: [
      'Kohre bhari subah mein jab door se koi halki parchhaayin aage badhti hai',
      'To ek second ke liye dil puraani ummeed se dhadak uthta hai dheere se',
    ],
    linesEnglish: [
      'When a blurred silhouette walks forward through thick morning winter mist',
      'For one quick heartbeat my chest stirs softly with familiar hope',
    ],
  },
  {
    title: 'बातें कम पर एहसास पूरा',
    titleEnglish: 'Fewer Words, Unbroken Feeling',
    linesHindi: [
      'रोज़-रोज़ चैट बॉक्स हरा दिखने से ही अपनापन साबित नहीं होता यारो',
      'कभी-कभी सालों की चुप्पी भी एक सच्चे रिश्ते को कम नहीं करती',
    ],
    linesHinglish: [
      'Roz-roz chat box hara dikhne se hi apnapan saabit nahin hota yaaro',
      'Kabhi-kabhi saalon ki chuppi bhi ek sachhe rishte ko kam nahin karti',
    ],
    linesEnglish: [
      'Green online dots flashing daily are not what prove real closeness',
      'Even years of quiet distance cannot shrink what two hearts once meant',
    ],
  },
  {
    title: 'अधूरी शाम के नाम एक मुस्कुराहट',
    titleEnglish: 'Smile Offered to Unfinished Dusk',
    linesHindi: [
      'जो पल अधूरे रह गए उन पर बैठकर अफ़सोस मनाने से क्या लाभ',
      'जितना साथ मिला उसे सँजोकर मुस्कुरा देना ही असली शुक्रिया है',
    ],
    linesHinglish: [
      'Jo pal adhoore reh gaye un par baithkar afsos manaane se kya laabh',
      'Jitna saath mila use sanjokar muskura dena hi asli shukriya hai',
    ],
    linesEnglish: [
      'Why spend whole evenings sighing over chapters that closed halfway through',
      'Smiling gratefully for every bright hour we did share feels much truer',
    ],
  },
  {
    title: 'खामोश मोड़ पर खड़ी याद',
    titleEnglish: 'Memory Waiting at Quiet Bend',
    linesHindi: [
      'गली के उस मोड़ पर हमेशा एक पुरानी शाम इंतज़ार करती दिखती है',
      'जहाँ पहली बार तुमने कहा था—घर पहुँचकर मैसेज ज़रूर करना मुझे',
    ],
    linesHinglish: [
      'Gali ke us mod par hamesha ek puraani shaam intezaar karti dikhti hai',
      'Jahaan pehli baar tumne kaha tha—ghar pahunchkar message zaroor karna mujhe',
    ],
    linesEnglish: [
      'At that neighborhood turn one sweet evening still greets me softly',
      'Right where you first told me—text me the second you reach home safely',
    ],
  },
  {
    title: 'नए मौसम से पुराना रिश्ता',
    titleEnglish: 'Old Bond With Every New Rain',
    linesHindi: [
      'हर बार जब जुलाई के पहले बादल आसमान पर घिरकर आते हैं काले होकर',
      'दिल की पुरानी अलमारी से तुम्हारी मीठी सी याद बाहर आ जाती है',
    ],
    linesHinglish: [
      'Har baar jab July ke pehle baadal aasmaan par ghirkar aate hain kaale hokar',
      'Dil ki puraani almaari se tumhaari meethi si yaad baahar aa jaati hai',
    ],
    linesEnglish: [
      'Every July when dark monsoon clouds gather slowly across the skyline',
      'Sweet tucked-away thoughts of you step right out of memory’s quiet shelf',
    ],
  },
  {
    title: 'टूटे बिना बिछड़ने की कला',
    titleEnglish: 'Art of Parting Without Breaking',
    linesHindi: [
      'हमने दर्द को नफरत में बदलने का रास्ता कभी नहीं चुना जीवन में',
      'शायद यही वजह है कि आज भी तुम्हारा नाम लेते हुए सुकून आता है',
    ],
    linesHinglish: [
      'Humne dard ko nafrat mein badalne ka raasta kabhi nahin chuna jeevan mein',
      'Shaayad yahi wajah hai ki aaj bhi tumhaara naam lete hue sukoon aata hai',
    ],
    linesEnglish: [
      'We refused to ever let quiet heartache harden into cold resentment',
      'Perhaps that explains why speaking your name still brings gentle calm',
    ],
  },
  {
    title: 'आधी किताब में छूटा बुकमार्क',
    titleEnglish: 'Bookmark Left Midway Through Story',
    linesHindi: [
      'हमारी कहानी कुछ ऐसी किताब थी जिसका अंत कभी छापा ही नहीं गया',
      'बस बीच के एक बेहद सुंदर पन्ने पर बुकमार्क अब तक लगा हुआ है',
    ],
    linesHinglish: [
      'Hamaari kahaani kuch aisi kitaab thi jiska ant kabhi chhaapa hi nahin gaya',
      'Bas beech ke ek behad sundar panne par bookmark ab tak laga hua hai',
    ],
    linesEnglish: [
      'Our tale was like a novel whose final pages never went to press',
      'Only a worn ribbon bookmark still rests gently inside its loveliest chapter',
    ],
  },
  {
    title: 'शाम की हवा में तेरी हँसी',
    titleEnglish: 'Your Laughter Along Evening Wind',
    linesHindi: [
      'कभी-कभी बिना किसी कारण के भी हवा में मीठी सी ताज़गी घुली लगती है',
      'ऐसा महसूस होता है जैसे कहीं दूर तुम दिल खोलकर मुस्कुरा रहे हो',
    ],
    linesHinglish: [
      'Kabhi-kabhi bina kisi kaaran ke bhi hawa mein meethi si taazgi ghuli lagti hai',
      'Aisa mehsoos hota hai jaise kahin door tum dil kholkar muskura rahe ho',
    ],
    linesEnglish: [
      'Sometimes evening breezes carry an unexpected sweetness out of nowhere',
      'Almost as though miles away you just laughed freely with full joy',
    ],
  },
  {
    title: 'बिना हक़ के निभाया अपनापन',
    titleEnglish: 'Care Offered Without Claiming Rights',
    linesHindi: [
      'अब किसी हक़ या रिश्ते का नाम माँगने की कोई चाह बची नहीं दिल में',
      'बिना नाम के भी किसी को दिल से चाह लेना कम खूबसूरत नहीं होता',
    ],
    linesHinglish: [
      'Ab kisi haq ya rishte ka naam maangne ki koi chaah bachi nahin dil mein',
      'Bina naam ke bhi kisi ko dil se chaah lena kam khoobsurat nahin hota',
    ],
    linesEnglish: [
      'No urge remains to ask for labels, claims, or formal promises anymore',
      'Cherishing someone warmly without any title still shines wonderfully pure',
    ],
  },
  {
    title: 'पुराने चैट से संभला दिल',
    titleEnglish: 'Warmth Saved in Archived Chats',
    linesHindi: [
      'नए मैसेज भले अब दोनों तरफ से कभी आते-जाते न दिखते हों स्क्रीन पर',
      'पर पुरानी बातों के कुछ स्क्रीनशॉट आज भी हँसाने का काम कर देते हैं',
    ],
    linesHinglish: [
      'Naye message bhale ab dono taraf se kabhi aate-jaate na dikhte hon screen par',
      'Par puraani baaton ke kuch screenshot aaj bhi hansaane ka kaam kar dete hain',
    ],
    linesEnglish: [
      'Fresh bubbles may never appear across our silent chat thread anymore',
      'Still a couple saved old jokes tucked in archives make me smile anytime',
    ],
  },
  {
    title: 'दूर से भेजी गई दुआ का नूर',
    titleEnglish: 'Light of Distant Silent Prayers',
    linesHindi: [
      'हाथ पकड़कर साथ चलना शायद हमारी रेखाओं में लिखा ही नहीं था कभी',
      'पर दूर से तुम्हारी खुशहाली देखना भी कम सुकून नहीं देता मुझे',
    ],
    linesHinglish: [
      'Haath pakadkar saath chalna shaayad hamaari rekhaon mein likha hi nahin tha kabhi',
      'Par door se tumhaari khushhaali dekhna bhi kam sukoon nahin deta mujhe',
    ],
    linesEnglish: [
      'Walking hand in hand through decades was perhaps never etched on our palms',
      'Yet watching your life blossom brightly from afar fills me with deep peace',
    ],
  },
  {
    title: 'आँखों में ठहरी सादगी की चमक',
    titleEnglish: 'Simple Glow Resting in Eyes',
    linesHindi: [
      'साल गुज़रने पर भी जब कोई तुम्हारा पुराना जिक्र छेड़ देता है महफ़िल में',
      'चेहरे की चमक बता देती है कि दिल में इज़्ज़त आज भी ज़िंदा है',
    ],
    linesHinglish: [
      'Saal guzarne par bhi jab koi tumhaara puraana zikr chhed deta hai mehfil mein',
      'Chehre ki chamak bata deti hai ki dil mein izzat aaj bhi zinda hai',
    ],
    linesEnglish: [
      'Years later when friends casually recall your name around evening tea',
      'The gentle light across my face reveals lasting respect still alive inside',
    ],
  },
  {
    title: 'अधूरी मुलाक़ात का मीठा वज़न',
    titleEnglish: 'Sweet Weight of Missed Meeting',
    linesHindi: [
      'एक आखिरी चाय साथ बैठकर पीने की हसरत बस मन में ही रह गई थी',
      'शायद यही अधूरापन हमें ज़िंदगी के किसी मोड़ पर फिर मुस्कुराकर मिला दे',
    ],
    linesHinglish: [
      'Ek aakhiri chai saath baithkar peene ki hasrat bas mann mein hi reh gayi thi',
      'Shaayad yahi adhoorapan humein zindagi ke kisi mod par phir muskuraakar mila de',
    ],
    linesEnglish: [
      'One final cup of tea sitting calmly across from each other stayed unshared',
      'Perhaps life saves that quiet cup for a friendly bend years down the road',
    ],
  },
  {
    title: 'सुकून की तलाश और तेरा नाम',
    titleEnglish: 'Quiet Search Ending at Your Name',
    linesHindi: [
      'दुनिया भर की दौड़ में जब मन बिल्कुल थककर चूर होने लगता है',
      'तो कुछ सेकंड तुम्हारी शांत मुस्कान याद करके नई ऊर्जा आ जाती है',
    ],
    linesHinglish: [
      'Duniya bhar ki daud mein jab mann bilkul thakkar choor hone lagta hai',
      'To kuch second tumhaari shaant muskaan yaad karke nayi oorja aa jaati hai',
    ],
    linesEnglish: [
      'When relentless worldly noise wears my weary spirit nearly thin',
      'Recalling your calm smile for five quiet seconds restores gentle strength',
    ],
  },
  {
    title: 'धूप में चमकती ओस की बूंद',
    titleEnglish: 'Dewdrop Gleaming in Morning Sun',
    linesHindi: [
      'घास पर ठहरी सुबह की ओस की तरह तुम बहुत कम देर रहे मेरे पास',
      'पर उतनी ही देर में पूरा आँगन सूरज की तरह जगमगा गए थे',
    ],
    linesHinglish: [
      'Ghaas par thehri subah ki os ki tarah tum bahut kam der rahe mere paas',
      'Par utni hi der mein poora aangan sooraj ki tarah jagmaga gaye the',
    ],
    linesEnglish: [
      'Like morning dew resting on green blades, you stayed only briefly near me',
      'Yet scattered tiny rainbows sparkling across my whole quiet yard',
    ],
  },
  {
    title: 'राह से हटकर बनाई दुआ',
    titleEnglish: 'Stepping Back With Kindest Wish',
    linesHindi: [
      'अगर मेरी चुप्पी से तुम्हारी नई सुबह आसान और ख़ूबसूरत बनती है',
      'तो मैं पूरी ख़ुशी से अपनी आवाज़ हमेशा के लिए शांत रख लूँगा',
    ],
    linesHinglish: [
      'Agar meri chuppi se tumhaari nayi subah aasaan aur khoobsurat banti hai',
      'To main poori khushi se apni aawaz hamesha ke liye shaant rakh loonga',
    ],
    linesEnglish: [
      'If my quiet stepping aside leaves your brand-new mornings lighter and brighter',
      'I gladly tuck my own voice away cleanly without a single heavy sound',
    ],
  },
  {
    title: 'अधूरे ख्वाब की शांत खुशबू',
    titleEnglish: 'Soft Scent of Unfulfilled Wish',
    linesHindi: [
      'कुछ सपने पूरे न होकर भी दिल के गमले में महकते रहते हैं हमेशा',
      'उन्हें पानी की नहीं बल्कि बस थोड़ी सी सच्ची कद्र की ज़रूरत होती है',
    ],
    linesHinglish: [
      'Kuch sapne poore na hokar bhi dil ke gamle mein mehekte rehte hain hamesha',
      'Unhein paani ki nahin balki bas thodi si sachhi kadr ki zaroorat hoti hai',
    ],
    linesEnglish: [
      'Certain hopes bloom sweetly inside heart pots even without coming true',
      'Needing no rain at all—only quiet gratitude for having dared to dream',
    ],
  },
  {
    title: 'खामोश सफ़र का मीठा साथी',
    titleEnglish: 'Gentle Companion in Quiet Travel',
    linesHindi: [
      'भले ही सामने वाली सीट पर आज कोई बैठा न हो लंबी यात्रा में',
      'फिर भी तुम्हारी यादें हमेशा सबसे प्यारी हमसफ़र बनी रहती हैं',
    ],
    linesHinglish: [
      'Bhale hi saamne waali seat par aaj koi baitha na ho lambi yaatra mein',
      'Phir bhi tumhaari yaadein hamesha sabse pyari humsafar bani rehti hain',
    ],
    linesEnglish: [
      'Even when the passenger seat stays empty across long quiet highway miles',
      'Warm memories of you still ride beside me as the gentlest companion',
    ],
  },
  {
    title: 'प्यार का हमेशा हरा रहने वाला पेड़',
    titleEnglish: 'Evergreen Tree of Honest Care',
    linesHindi: [
      'मौसम बदलते रहते हैं और पत्तियाँ गिरकर नई जगह भी बनाती हैं रोज़',
      'पर सच्चे एहसास की जड़ हमेशा दिल की मिट्टी में हरी बनी रहती है',
    ],
    linesHinglish: [
      'Mausam badalte rehte hain aur pattiyaan girkar nayi jagah bhi banaati hain roz',
      'Par sachhe ehsaas ki jad hamesha dil ki mitti mein hari bani rehti hai',
    ],
    linesEnglish: [
      'Seasons keep turning and autumn leaves drift gracefully down every lane',
      'Yet the root of honest affection stays green deep inside quiet soil',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'सर्द हवा में अनकही फ़िक्र',
    titleEnglish: 'Unspoken Care in Cold Breeze',
    linesHindi: [
      'आज जब हवा बहुत तेज़ और ठंडी चलने लगी बाहर शाम होते ही',
      'तो दिल ने चुपके से यही दुआ की कि तुमने गर्म शॉल ओढ़ रखी हो',
    ],
    linesHinglish: [
      'Aaj jab hawa bahut tez aur thandi chalne lagi baahar shaam hote hi',
      'To dil ne chupke se yahi dua ki ki tumne garm shawl odh rakhi ho',
    ],
    linesEnglish: [
      'When sudden chilly winds began sweeping streets right around dusk today',
      'My heart whispered quietly hoping you remembered to wear a warm coat',
    ],
  },
  {
    title: 'अधूरे सफ़र की साफ़ तस्वीर',
    titleEnglish: 'Clear Frame of Brief Journey',
    linesHindi: [
      'साथ बिताए हुए दिन गिनती में भले बहुत ज़्यादा न रहे हों हमारे',
      'पर उनकी सादगी और सच्चाई पूरी उम्र से ज़्यादा गहरी रही है',
    ],
    linesHinglish: [
      'Saath bitaaye hue din ginti mein bhale bahut zyada na rahe hon hamaare',
      'Par unki saadgi aur sachhaai poori umr se zyada gehri rahi hai',
    ],
    linesEnglish: [
      'Our shared days may count relatively small upon the calendar',
      'Yet their honesty and warmth run deeper than an ordinary lifetime',
    ],
  },
  {
    title: 'बदलते वक़्त में सँभली चाहत',
    titleEnglish: 'Care Preserved Through Shifting Years',
    linesHindi: [
      'हमने अपने टूटे हिस्सों से किसी दूसरे का घर कभी नहीं जलाया यार',
      'बल्कि उसी दर्द से सीखकर सबके प्रति और भी कोमल हो गए हैं',
    ],
    linesHinglish: [
      'Humne apne toote hisson se kisi doosre ka ghar kabhi nahin jalaaya yaar',
      'Balki usi dard se seekhkar sabke prati aur bhi komal ho gaye hain',
    ],
    linesEnglish: [
      'We never let our own bruised moments spill harshness onto someone else',
      'Instead that quiet ache taught us deeper kindness toward every passing soul',
    ],
  },
  {
    title: 'गुज़री हुई शाम की महक',
    titleEnglish: 'Fragrance of Passing Evening',
    linesHindi: [
      'रात की रानी जब हवा में अपनी खुशबू घोलती है छत के कोने से',
      'तो तुम्हारी पुरानी बातें बिना बुलाए पास आकर बैठ जाती हैं चुपचाप',
    ],
    linesHinglish: [
      'Raat ki rani jab hawa mein apni khushboo gholti hai chhat ke kone se',
      'To tumhaari puraani baatein bina bulaaye paas aakar baith jaati hain chupchaap',
    ],
    linesEnglish: [
      'When night-blooming jasmine perfumes cool air across the terrace',
      'Your fondest stories pull up a quiet chair beside me uninvited',
    ],
  },
  {
    title: 'आँखों की गहराई में छवि',
    titleEnglish: 'Gentle Image Inside Quiet Eyes',
    linesHindi: [
      'न मैंने कभी सबको दिखाकर अपनी चाहत का प्रदर्शन किया सड़क पर',
      'न कभी दिल के भीतर बसी तुम्हारी तस्वीर पर धूल जमने दी मैंने',
    ],
    linesHinglish: [
      'Na maine kabhi sabko dikhaakar apni chaahat ka pradarshan kiya sadak par',
      'Na kabhi dil ke bheetar basi tumhaari tasveer par dhool jamne di maine',
    ],
    linesEnglish: [
      'I never turned my feelings into loud spectacle out in public view',
      'Nor ever allowed dust to settle over your gentle portrait kept inside',
    ],
  },
  {
    title: 'मुस्कुराकर दी गई आज़ादी',
    titleEnglish: 'Freedom Offered With Gentle Smile',
    linesHindi: [
      'प्यार अगर किसी को पिंजरे में रखे तो वह अपनापन नहीं, डर होता है',
      'सच्ची मोहब्बत हमेशा खुली छत और पूरा आसमान सामने रख देती है',
    ],
    linesHinglish: [
      'Pyar agar kisi ko pinjare mein rakhe to woh apnapan nahin, dar hota hai',
      'Sachhi mohabbat hamesha khuli chhat aur poora aasmaan saamne rakh deti hai',
    ],
    linesEnglish: [
      'Affection that locks someone inside cages is fear, never true love',
      'Genuine care opens wide rooftops and hands you the entire bright sky',
    ],
  },
  {
    title: 'कम शब्दों में पूरा सच',
    titleEnglish: 'Entire Truth Inside Few Words',
    linesHindi: [
      'तुम मेरे पास न रहकर भी मेरी हर अच्छी आदत का हिस्सा बन चुके हो',
      'किसी के जाने के बाद भी उसका सुंदर असर ज़िंदा रहना बड़ी बात है',
    ],
    linesHinglish: [
      'Tum mere paas na rehkar bhi meri har achhi aadat ka hissa ban chuke ho',
      'Kisi ke jaane ke baad bhi uska sundar asar zinda rehna badi baat hai',
    ],
    linesEnglish: [
      'Even absent from my daily routine, you shaped my finest gentle habits',
      'Leaving behind lasting goodness long after parting is rare grace',
    ],
  },
  {
    title: 'पुराने मोड़ पर हल्की मुस्कान',
    titleEnglish: 'Soft Smile at Familiar Turn',
    linesHindi: [
      'जिस रास्ते पर कभी तुम्हारे साथ चलते हुए थकान महसूस नहीं होती थी',
      'आज अकेले भी उस पर चलूँ तो कदम अपने आप हल्के हो जाते हैं',
    ],
    linesHinglish: [
      'Jis raaste par kabhi tumhaare saath chalte hue thakaan mehsoos nahin hoti thi',
      'Aaj akele bhi us par chaloon to kadam apne aap halke ho jaate hain',
    ],
    linesEnglish: [
      'Along that avenue where walking beside you once erased all fatigue',
      'Strolling alone today still makes my footsteps feel surprisingly light',
    ],
  },
  {
    title: 'साफ़ दिल से निकली शुक्रिया',
    titleEnglish: 'Honest Thanks From Clean Heart',
    linesHindi: [
      'जाते-जाते बहुत कुछ सिखा दिया तुमने बिना एक कड़वा लफ़्ज़ बोले',
      'शुक्रिया उस हर मुस्कान के लिए जो कभी मेरी वजह से आई थी चेहरे पर',
    ],
    linesHinglish: [
      'Jaate-jaate bahut kuch sikha diya tumne bina ek kadwa lafz bole',
      'Shukriya us har muskaan ke liye jo kabhi meri wajah se aayi thi chehre par',
    ],
    linesEnglish: [
      'Parting gently without one harsh syllable taught me lasting poise',
      'Thank you for every bright smile that once bloomed because of our days',
    ],
  },
  {
    title: 'अनसुनी ग़ज़ल की आखिरी कड़ी',
    titleEnglish: 'Final Line of Quiet Ghazal',
    linesHindi: [
      'हर प्रेम कहानी का मिलन होना ज़रूरी नहीं होता मेरे दोस्त यहाँ',
      'कुछ कहानियाँ सिर्फ़ दिल को इंसानियत सिखाने के लिए लिखी जाती हैं',
    ],
    linesHinglish: [
      'Har prem kahaani ka milan hona zaroori nahin hota mere dost yahaan',
      'Kuch kahaaniyaan sirf dil ko insaaniyat sikhaane ke liye likhi jaati hain',
    ],
    linesEnglish: [
      'Not every love tale needs wedding bells to justify its beauty',
      'Certain chapters are penned purely to teach a heart deeper tenderness',
    ],
  },
  {
    title: 'बारिश में धुली हुई शिकायतें',
    titleEnglish: 'Complaints Washed Away by Rain',
    linesHindi: [
      'जितनी भी छोटी-मोटी नाराज़गियाँ थीं हमारे बीच आख़िरी दिनों में',
      'वक़्त की पहली बारिश ने उन सबको धोकर बस मीठी यादें बचाई हैं',
    ],
    linesHinglish: [
      'Jitni bhi chhoti-moti naaraazgiyaan thin hamaare beech aakhiri dinon mein',
      'Waqt ki pehli baarish ne un sabko dhokar bas meethi yaadein bachaayi hain',
    ],
    linesEnglish: [
      'Whatever small misunderstandings gathered across our final weeks together',
      'Time’s steady rain washed them clean, leaving only sweet memories behind',
    ],
  },
  {
    title: 'चाँद की रोशनी में खामोश वादा',
    titleEnglish: 'Silent Promise Under Pale Moon',
    linesHindi: [
      'मैं हमेशा तुम्हारे हक़ में अच्छी दुआ ही करूँगा कहीं भी रहूँ दुनिया में',
      'तुम्हारी ख़ुशी से बढ़कर कोई मेरी अपनी ज़िद कभी थी ही नहीं',
    ],
    linesHinglish: [
      'Main hamesha tumhaare haq mein achhi dua hi karoonga kahin bhi rahoon duniya mein',
      'Tumhaari khushi se badhkar koi meri apni zid kabhi thi hi nahin',
    ],
    linesEnglish: [
      'Wherever I stand across the earth, my wishes will stay gently on your side',
      'No personal stubbornness of mine ever stood taller than your happiness',
    ],
  },
  {
    title: 'सुकून की गली में ठहरा पल',
    titleEnglish: 'Calm Moment on Peaceful Street',
    linesHindi: [
      'अजीब बात है कि तुम्हारे बिना भी दिल में कोई शोर बाकी नहीं बचा',
      'बस एक शांत सी नदी बहती है जिसमें तुम्हारा अक्स झिलमिलाता है',
    ],
    linesHinglish: [
      'Ajeeb baat hai ki tumhaare bina bhi dil mein koi shor baaki nahin bacha',
      'Bas ek shaant si nadi behti hai jismein tumhaara aks jhilmilaata hai',
    ],
    linesEnglish: [
      'Oddly enough, zero noisy storms remain inside my chest without you',
      'Only a calm clear river flows gently, still reflecting your quiet outline',
    ],
  },
  {
    title: 'पुराने रूमाल की तह में याद',
    titleEnglish: 'Memory Folded in Old Handkerchief',
    linesHindi: [
      'सफर के दौरान छूटी हुई छोटी-छोटी चीजें भी कितनी अनमोल हो जाती हैं',
      'जब वे किसी ऐसे इंसान की हों जिससे रोज़ बात नहीं हो पाती अब',
    ],
    linesHinglish: [
      'Safar ke dauraan chhooti hui chhoti-chhoti cheezein bhi kitni anmol ho jaati hain',
      'Jab we kisi aise insaan ki hon jisse roz baat nahin ho paati ab',
    ],
    linesEnglish: [
      'Even tiny forgotten trinkets turn priceless once journeys divide',
      'Especially belonging to someone whose voice we no longer hear each day',
    ],
  },
  {
    title: 'तितली के पंख सी नाज़ुक याद',
    titleEnglish: 'Memory Delicate as Butterfly Wing',
    linesHindi: [
      'ज़्यादा ज़ोर से छूने पर रंग उतर जाते हैं नाज़ुक तितली के पंखों से',
      'इसीलिए मैं तुम्हारी याद को दूर से ही देखकर मुस्कुरा लेता हूँ',
    ],
    linesHinglish: [
      'Zyada zor se chhoone par rang utar jaate hain naazuk titli ke pankhon se',
      'Isiliye main tumhaari yaad ko door se hi dekhkar muskura leta hoon',
    ],
    linesEnglish: [
      'Pressing too heavily brushes bright dust right off butterfly wings',
      'So I gently admire your memory from afar with a quiet, careful smile',
    ],
  },
  {
    title: 'शहर की रोशनी में तुम्हारी तलाश',
    titleEnglish: 'Gentle Glimpse Amid City Lights',
    linesHindi: [
      'ऊँची इमारतों और रंगीन लाइटों के बीच आज भी आँखें ढूँढती हैं कभी',
      'वह सादी सी हँसी जो बिना किसी दिखावे के दिल जीत लेती थी',
    ],
    linesHinglish: [
      'Oonchi imaarton aur rangeen lighton ke beech aaj bhi aankhein dhoondhti hain kabhi',
      'Woh saadi si hansi jo bina kisi dikhaawe ke dil jeet leti thi',
    ],
    linesEnglish: [
      'Amidst towering glass buildings and neon avenues, my eyes still scan gently',
      'For one unpretentious smile that once won my heart with zero effort',
    ],
  },
  {
    title: 'वक़्त से बड़ा सच्चा एहसास',
    titleEnglish: 'Honest Feeling Outlasting Years',
    linesHindi: [
      'कैलेंडर के पन्ने तो हर साल तेज़ी से पलटते ही रहते हैं दुनिया में',
      'पर कुछ तारीख़ें हमेशा के लिए मन पर ठहर जाती हैं बिना घड़ी देखे',
    ],
    linesHinglish: [
      'Calendar ke panne to har saal tezi se palat-te hi rehte hain duniya mein',
      'Par kuch taareekhein hamesha ke liye mann par thehar jaati hain bina ghadi dekhe',
    ],
    linesEnglish: [
      'Calendar pages keep flipping relentlessly faster year after year',
      'Yet certain sacred dates stay anchored forever inside memory’s clock',
    ],
  },
  {
    title: 'खामोश दिल का सुंदर आँगन',
    titleEnglish: 'Peaceful Courtyard Inside Quiet Heart',
    linesHindi: [
      'अधूरे प्यार ने कभी मुझे दुनिया से नफ़रत करना नहीं सिखाया दोस्तों',
      'उसने तो हर टूटते हुए इंसान को गले लगाने का हौसला दे दिया मुझे',
    ],
    linesHinglish: [
      'Adhoore pyar ne kabhi mujhe duniya se nafrat karna nahin sikhaaya doston',
      'Usne to har toot-te hue insaan ko gale lagaane ka hausla de diya mujhe',
    ],
    linesEnglish: [
      'Unfinished love never once taught me to grow bitter toward the world',
      'Instead it gave me open arms ready to comfort anyone else hurting',
    ],
  },
  {
    title: 'धूप और छाँव का मीठा संगम',
    titleEnglish: 'Sweet Blend of Sun and Shade',
    linesHindi: [
      'तुम्हारी याद कभी धूप सी उजली होती है तो कभी छाँव सी ठंडी',
      'दोनों ही रूपों में यह मेरे मन को हमेशा संतुलित रखती है आज भी',
    ],
    linesHinglish: [
      'Tumhaari yaad kabhi dhoop si ujali hoti hai to kabhi chhaanv si thandi',
      'Dono hi roopon mein yeh mere mann ko hamesha santulit rakhti hai aaj bhi',
    ],
    linesEnglish: [
      'Thoughts of you shine warm like noon sun or soothe like cool tree shade',
      'Either way they keep my restless spirit wonderfully steady to this day',
    ],
  },
  {
    title: 'तुम्हारे नाम का शांत उजाला',
    titleEnglish: 'Gentle Light Around Your Name',
    linesHindi: [
      'किसी को पा लेना ही मोहब्बत की एकमात्र मंज़िल नहीं होती कभी भी',
      'किसी की सलामती से खुश हो जाना भी तो इश्क़ की सबसे ऊँची चोटी है',
    ],
    linesHinglish: [
      'Kisi ko pa lena hi mohabbat ki ekmaatra manzil nahin hoti kabhi bhi',
      'Kisi ki salaamati se khush ho jaana bhi to ishq ki sabse oonchi choti hai',
    ],
    linesEnglish: [
      'Possessing someone forever is never love’s solitary summit',
      'Feeling genuine joy simply hearing they are well stands far higher',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'सुबह की पहली चिड़िया की चहक',
    titleEnglish: 'Morning Sparrow Song at Window',
    linesHindi: [
      'आँगन की मुंडेर पर सुबह-सुबह चहचहाती चिड़िया जगा जाती है मुझे',
      'और पहला ख़्याल बस यही आता है कि नया दिन तुम्हें खुशियाँ दे',
    ],
    linesHinglish: [
      'Aangan ki munder par subah-subah chehchahaati chidiya jaga jaati hai mujhe',
      'Aur pehla khayaal bas yahi aata hai ki naya din tumhein khushiyaan de',
    ],
    linesEnglish: [
      'Early sparrows chirping along the windowsill wake me gently at dawn',
      'And my first quiet thought hopes this fresh morning hands you joy',
    ],
  },
  {
    title: 'रिश्ते के पार भी दोस्ती की डोर',
    titleEnglish: 'Thread of Friendship Beyond Love',
    linesHindi: [
      'प्यार के रास्ते भले मोड़ पर आकर रुक गए हों किसी कारणवश',
      'पर दिल से निकली सच्ची दोस्ती कभी भी किसी शर्त से नहीं टूटती',
    ],
    linesHinglish: [
      'Pyar ke raaste bhale mod par aakar ruk gaye hon kisi kaaranvash',
      'Par dil se nikli sachhi dosti kabhi bhi kisi shart se nahin toot-ti',
    ],
    linesEnglish: [
      'Even when romantic roads pause quietly at an unexpected bend',
      'True goodwill born from deep friendship never breaks over lost titles',
    ],
  },
  {
    title: 'खामोश शहर की आखिरी बस',
    titleEnglish: 'Final Evening Bus Homeward',
    linesHindi: [
      'रात की आखिरी बस की खिड़की से चमकती शहर की रोशनियाँ देखकर',
      'दिल बस इतना कहता है—काश तुम भी इस पल सुकून में होगे कहीं',
    ],
    linesHinglish: [
      'Raat ki aakhiri bus ki khidki se chamakti shehar ki roshniyaan dekhkar',
      'Dil bas itna kehta hai—kaash tum bhi is pal sukoon mein hoge kahin',
    ],
    linesEnglish: [
      'Watching city streetlights glide softly past the late bus window',
      'My heart simply whispers—hope you sit wrapped in peaceful warmth tonight',
    ],
  },
  {
    title: 'सुकून भरा धीमा एहसास',
    titleEnglish: 'Calm Unhurried Heart Feeling',
    linesHindi: [
      'अब दिल में कोई हड़बड़ी या जवाब पाने की बेचैनी नहीं रही पहले जैसी',
      'बल्कि एक गहरी शांति है जिसमें हर पुराना पल मुस्कुराता दिखता है',
    ],
    linesHinglish: [
      'Ab dil mein koi hadbadi ya jawaab paane ki bechaini nahin rahi pehle jaisi',
      'Balki ek gehri shaanti hai jismein har puraana pal muskuraata dikhta hai',
    ],
    linesEnglish: [
      'Gone is that frantic restlessness demanding answers every waking hour',
      'In its place rests deep quiet calm where every shared memory smiles warmly',
    ],
  },
  {
    title: 'पुरानी घड़ी और थमा हुआ वक़्त',
    titleEnglish: 'Old Watch Holding Frozen Minute',
    linesHindi: [
      'मेरी मेज़ की पुरानी घड़ी आज भी कभी-कभी उसी शाम पर अटक जाती है',
      'जब हमने पहली बार बारिश में गरम भुट्टा खाते हुए खूब ठहाके लगाए थे',
    ],
    linesHinglish: [
      'Meri mez ki puraani ghadi aaj bhi kabhi-kabhi usi shaam par atak jaati hai',
      'Jab humne pehli baar baarish mein garam bhutta khaate hue khoob thahaake lagaaye the',
    ],
    linesEnglish: [
      'Even now my desk clock pauses fondly around that playful evening',
      'Laughing endlessly together over roasted corn while gentle rain poured',
    ],
  },
  {
    title: 'बिना कहे निभाया गया साथ',
    titleEnglish: 'Silent Loyalty Kept Across Time',
    linesHindi: [
      'सबको साथ चलते दिखना ही वफ़ादारी की एकमात्र निशानी नहीं होती',
      'अकेले रहकर भी किसी के नाम की इज़्ज़त बचाए रखना बड़ी वफ़ा है',
    ],
    linesHinglish: [
      'Sabko saath chalte dikhna hi wafaadaari ki ekmaatra nishaani nahin hoti',
      'Akele rehkar bhi kisi ke naam ki izzat bachaaye rakhna badi wafa hai',
    ],
    linesEnglish: [
      'Walking visibly side by side is not the sole proof of true devotion',
      'Guarding someone’s dignity quietly even while walking alone is deep loyalty',
    ],
  },
  {
    title: 'आकाशगंगा सा फैला प्यार',
    titleEnglish: 'Affection Wide as Starry Sky',
    linesHindi: [
      'दिल की गहराइयों में कुछ जज़्बात तारों की तरह टिमटिमाते रहते हैं',
      'वे दिन के उजाले में दिखें या न दिखें, रात होते ही जगमगा उठते हैं',
    ],
    linesHinglish: [
      'Dil ki gehraaiyon mein kuch jazbaat taaron ki tarah timtimaate rehte hain',
      'We din ke ujaale mein dikhein ya na dikhein, raat hote hi jagmaga uthte hain',
    ],
    linesEnglish: [
      'Some feelings inside the heart twinkle quietly like high midnight stars',
      'Unseen through busy daylight hours, shining clearly once night descends',
    ],
  },
  {
    title: 'चंदन की खुशबू सा ठहराव',
    titleEnglish: 'Stillness Sweet as Cedar Air',
    linesHindi: [
      'दुनिया कहती है कि अधूरा इश्क़ इंसान को बहुत उदास छोड़ जाता है',
      'पर मुझे लगता है कि इसने मेरी आँखों को दुनिया देखने का नया रंग दिया',
    ],
    linesHinglish: [
      'Duniya kehti hai ki adhoora ishq insaan ko bahut udaas chhod jaata hai',
      'Par mujhe lagta hai ki isne meri aankhon ko duniya dekhne ka naya rang diya',
    ],
    linesEnglish: [
      'Crowds insist unfinished love leaves only gray sorrow trailing behind',
      'Yet to me it gifted softer eyes capable of noticing beauty everywhere',
    ],
  },
  {
    title: 'अनभेजी शुभकामना का फूल',
    titleEnglish: 'Unposted Flower of Warm Wishes',
    linesHindi: [
      'हर नई सफलता की ख़बर सुनकर दिल मन ही मन ताली बजा देता है तेरे लिए',
      'भले ही बधाई भेजने वालों की कतार में आज मेरा नाम न लिखा हो',
    ],
    linesHinglish: [
      'Har nayi safalta ki khabar sunkar dil mann hi mann taali baja deta hai tere liye',
      'Bhale hi badhaai bhejne waalon ki kataar mein aaj mera naam na likha ho',
    ],
    linesEnglish: [
      'Whenever news of your new milestone reaches me, I applaud silently inside',
      'Even if my signature no longer sits on your crowded greeting list',
    ],
  },
  {
    title: 'भीगे हुए काँच पर उभरा अक्षर',
    titleEnglish: 'Letter Drawn on Steamy Window',
    linesHindi: [
      'सर्दियों में कार के धुँधले शीशे पर उँगली से लिखा वह पहला अक्षर',
      'शीशा साफ़ होते ही मिट गया पर मन से कभी धुँधला न हो सका',
    ],
    linesHinglish: [
      'Sardiyon mein car ke dhundhle sheeshe par ungli se likha woh pehla akshar',
      'Sheesha saaf hote hi mit gaya par mann se kabhi dhundhla na ho saka',
    ],
    linesEnglish: [
      'That single initial traced playfully across misty winter windshield glass',
      'Vanished the second defrosters cleared, yet never blurred inside my mind',
    ],
  },
  {
    title: 'मन की शांत झील में कंकड़',
    titleEnglish: 'Gentle Ripple Across Still Lake',
    linesHindi: [
      'बरसों की शांति के बीच अचानक किसी शाम तुम्हारी हँसी जैसा स्वर सुनकर',
      'दिल की झील में बस एक कोमल सी लहर उठकर फिर शांत हो जाती है',
    ],
    linesHinglish: [
      'Barson ki shaanti ke beech achaanak kisi shaam tumhaari hansi jaisa swar sunkar',
      'Dil ki jheel mein bas ek komal si lehar uthkar phir shaant ho jaati hai',
    ],
    linesEnglish: [
      'After peaceful years, catching one note sounding like your warm laugh',
      'Sends one soft gentle ripple across the lake before calm settles back',
    ],
  },
  {
    title: 'प्यार से संजोई गई यादों की पोटली',
    titleEnglish: 'Bundle of Memories Tied With Care',
    linesHindi: [
      'सारा सामान बाँधते वक़्त एक छोटी पोटली अलग रख ली थी मैंने हमेशा',
      'जिसमें न कोई शिकायत है, न आँसू—बस तुम्हारी प्यारी बातें बंद हैं',
    ],
    linesHinglish: [
      'Saara saamaan baandhte waqt ek chhoti potli alag rakh li thi maine hamesha',
      'Jismein na koi shikaayat hai, na aansoo—bas tumhaari pyari baatein band hain',
    ],
    linesEnglish: [
      'While packing away old days I tucked one tiny bundle gently aside',
      'Containing zero complaints or bitterness—solely your brightest words',
    ],
  },
  {
    title: 'सपनों के आँगन में मीठा विराम',
    titleEnglish: 'Sweet Pause Inside Dream Courtyard',
    linesHindi: [
      'हमारी कहानी कहीं रुकी ज़रूर है पर कभी टूटी नहीं है अंदर से',
      'जैसे दो मधुर सुर एक सुंदर विराम के बाद फिर अपनी धुन में बजते हैं',
    ],
    linesHinglish: [
      'Hamaari kahaani kahin ruki zaroor hai par kabhi tooti nahin hai andar se',
      'Jaise do madhur sur ek sundar viraam ke baad phir apni dhun mein bajte hain',
    ],
    linesEnglish: [
      'Our tale certainly reached a pause, yet never shattered underneath',
      'Like two gentle melodies resting cleanly between bright bars of music',
    ],
  },
  {
    title: 'दूरी को भी कोमल बनाती दुआ',
    titleEnglish: 'Prayer Softening Every Mile Apart',
    linesHindi: [
      'तुम्हारे शहर और मेरे शहर के बीच सैकड़ों किलोमीटर की सड़क सही',
      'पर दिल की एक मीठी दुआ हर सुबह एक पल में तुम तक पहुँच जाती है',
    ],
    linesHinglish: [
      'Tumhaare shehar aur mere shehar ke beech saikdon kilometer ki sadak sahi',
      'Par dil ki ek meethi dua har subah ek pal mein tum tak pahunch jaati hai',
    ],
    linesEnglish: [
      'Hundreds of highway miles stretch clearly between your town and mine',
      'Yet one quiet morning prayer crosses every border in half a heartbeat',
    ],
  },
  {
    title: 'आँखों की नमी में छुपा सम्मान',
    titleEnglish: 'Quiet Respect Held in Mist',
    linesHindi: [
      'जब भी कोई नया दोस्त पूछता है कि इतना धैर्य कहाँ से लाते हो जीवन में',
      'तो याद आता है कि अधूरे प्यार ने ही दिल को इतना विशाल बना दिया',
    ],
    linesHinglish: [
      'Jab bhi koi naya dost poochhta hai ki itna dhairya kahaan se laate ho jeevan mein',
      'To yaad aata hai ki adhoore pyar ne hi dil ko itna vishaal bana diya',
    ],
    linesEnglish: [
      'Whenever new friends wonder where such steady patience inside me comes from',
      'I smile recalling how loving and letting go gently widened my whole heart',
    ],
  },
  {
    title: 'तितलियों के रंगों सा अधूरा ख़त',
    titleEnglish: 'Unfinished Note in Bright Hues',
    linesHindi: [
      'दिल की डायरी के आख़िरी पन्ने पर बस तुम्हारा नाम लिखा छोड़ दिया',
      'न कोई तारीख़ डाली, न अलविदा लिखा—बस एक सुंदर मुस्कान बना दी',
    ],
    linesHinglish: [
      'Dil ki diary ke aakhiri panne par bas tumhaara naam likha chhod diya',
      'Na koi taareekh daali, na alvida likha—bas ek sundar muskaan bana di',
    ],
    linesEnglish: [
      'On the final blank sheet inside my journal I wrote solely your name',
      'Adding no date and no heavy farewell—only sketching a small kind smile',
    ],
  },
  {
    title: 'बदलते समय की कोमल परख',
    titleEnglish: 'Gentle Test of Moving Years',
    linesHindi: [
      'वक़्त के साथ इंसान बहुत कुछ भूल जाने का दावा करता रहता है यहाँ',
      'पर कुछ लोगों की आवाज़ एक पल में सालों की धूल झाड़ देती है',
    ],
    linesHinglish: [
      'Waqt ke saath insaan bahut kuch bhool jaane ka daawa karta rehta hai yahaan',
      'Par kuch logon ki aawaz ek pal mein saalon ki dhool jhaad deti hai',
    ],
    linesEnglish: [
      'As years stack up people proudly claim they have forgotten nearly all',
      'Yet one familiar voice instantly brushes dust off whole decades gone by',
    ],
  },
  {
    title: 'मीठी चाय में घुली पुरानी बात',
    titleEnglish: 'Old Chat Stirred Into Warm Tea',
    linesHindi: [
      'अदरक वाली चाय में आज भी वही पुराना स्वाद आ जाता है कभी-कभी',
      'जैसे तुमने अभी-अभी हँसकर कहा हो—एक घूँट मेरे हिस्से का भी पीना',
    ],
    linesHinglish: [
      'Adrak waali chai mein aaj bhi wahi puraana swaad aa jaata hai kabhi-kabhi',
      'Jaise tumne abhi-abhi hanskar kaha ho—ek ghoont mere hisse ka bhi peena',
    ],
    linesEnglish: [
      'Spiced ginger tea still catches that exact nostalgic warmth some evenings',
      'As if you just chuckled beside me saying—save one warm sip for me too',
    ],
  },
  {
    title: 'सुकून से भरी अंतिम मुस्कान',
    titleEnglish: 'Final Smile Resting in Peace',
    linesHindi: [
      'अब अगर कोई पूछे कि अधूरे प्यार से क्या हासिल हुआ तुम्हें आख़िर',
      'तो कहूँगा—किसी से बेइंतहा प्यार कर पाने का सबसे पाक एहसास मिला',
    ],
    linesHinglish: [
      'Ab agar koi poochhe ki adhure pyar se kya haasil hua tumhein aakhir',
      'To kahoonga—kisi se beinteha pyar kar paane ka sabse paak ehsaas mila',
    ],
    linesEnglish: [
      'If anyone ever asks what unfinished love left inside my palms at last',
      'I answer—the sacred certainty that my heart knew how to love wholeheartedly',
    ],
  },
  {
    title: 'सदा सलामत रहने वाला नाम',
    titleEnglish: 'A Name Blessed Forevermore',
    linesHindi: [
      'मेरी हर कहानी में तुम्हारा ज़िक्र किसी ठंडी हवा की तरह रहेगा हमेशा',
      'न आँखें भारी होंगी पढ़कर, न मन दुखेगा—बस एक मीठा सुकून उतरेगा',
    ],
    linesHinglish: [
      'Meri har kahaani mein tumhaara zikr kisi thandi hawa ki tarah rahega hamesha',
      'Na aankhein bhaari hongi padhkar, na mann dukhega—bas ek meetha sukoon utrega',
    ],
    linesEnglish: [
      'Across every chapter I live, mentions of you will blow like cool breeze',
      'Bringing zero heaviness to weary eyes—only soft, grateful serenity',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'आँगन में ठहरी चाँदनी की छाँव',
    titleEnglish: 'Moonlit Shadow Across Courtyard',
    linesHindi: [
      'रात की चाँदनी जब शांत आँगन में चुपचाप उतर कर ठहर जाती है',
      'तब लगता है जैसे तुम्हारी खामोश दुआ मेरे सिर पर हाथ फेर रही हो',
    ],
    linesHinglish: [
      'Raat ki chaandni jab shaant aangan mein chupchaap utar kar thehar jaati hai',
      'Tab lagta hai jaise tumhaari khaamosh dua mere sir par haath pher rahi ho',
    ],
    linesEnglish: [
      'When quiet moonlight settles gently across the courtyard late at night',
      'It feels almost like your silent good wishes smoothing my weary hair',
    ],
  },
  {
    title: 'दिल की दराज में सलामत मुस्कुराहट',
    titleEnglish: 'Smile Kept Safe Inside Drawer',
    linesHindi: [
      'कुछ तस्वीरें एल्बम से ज़्यादा दिल के भीतर सुरक्षित रखी जाती हैं',
      'ताकि वक़्त की कोई भी तेज़ आँधी उनके रंग फीके न कर पाए',
    ],
    linesHinglish: [
      'Kuch tasveerein album se zyada dil ke bheetar surakshit rakhi jaati hain',
      'Taaki waqt ki koi bhi tez aandhi unke rang feeke na kar paaye',
    ],
    linesEnglish: [
      'Some snapshots are stored safely inside quiet hearts instead of albums',
      'So no passing storm of time ever fades their warm sunlit colors',
    ],
  },
  {
    title: 'सड़क किनारे खड़ी पुरानी बेंच',
    titleEnglish: 'Quiet Wooden Bench by Roadside',
    linesHindi: [
      'बरसों बाद भी उस पुरानी बेंच पर बैठकर मन बिल्कुल हल्का हो गया',
      'क्योंकि हर अधूरी दास्ताँ आँसू नहीं, कभी-कभी मीठी मुस्कान भी देती है',
    ],
    linesHinglish: [
      'Barson baad bhi us puraani bench par baithkar mann bilkul halka ho gaya',
      'Kyunki har adhoori daastaan aansoo nahin, kabhi-kabhi meethi muskaan bhi deti hai',
    ],
    linesEnglish: [
      'Sitting down on that worn wooden bench years later lifted every weight',
      'Proving unfinished stories bring gentle smiles far more often than tears',
    ],
  },
  {
    title: 'अनसुनी शाम में तेरी सलामती',
    titleEnglish: 'Your Wellbeing in Quiet Dusk',
    linesHindi: [
      'रोज़ की बातचीत टूट जाने से दिल की शुभकामनाएँ कभी नहीं रुकतीं',
      'आज भी हर मंगल दिन पर मन तुम्हारे बेहतर कल की आस लगाता है',
    ],
    linesHinglish: [
      'Roz ki baatcheet toot jaane se dil ki shubhkamnayein kabhi nahin ruktin',
      'Aaj bhi har mangal din par mann tumhaare behtar kal ki aas lagaata hai',
    ],
    linesEnglish: [
      'Daily chats ending quietly never interrupts genuine goodwill from afar',
      'Every auspicious morning still finds me wishing you brighter tomorrows',
    ],
  },
  {
    title: 'बिना शोर के निभाई गई प्रीत',
    titleEnglish: 'Quiet Love Kept Without Noise',
    linesHindi: [
      'बड़े-बड़े वादों की ज़रूरत उन्हें पड़ती है जिन्हें वक़्त पर शक होता है',
      'हमने तो बिना किसी वादे के भी एक-दूसरे को सालों तक संभाला है',
    ],
    linesHinglish: [
      'Bade-bade waadon ki zaroorat unhein padti hai jinhein waqt par shak hota hai',
      'Humne to bina kisi waade ke bhi ek-doosre ko saalon tak sambhaala hai',
    ],
    linesEnglish: [
      'Grand dramatic vows belong to those doubting what tomorrow might bring',
      'Without making noisy oaths, we held each other warmly across quiet years',
    ],
  },
  {
    title: 'खामोश शहर में बसी तेरी खुशबू',
    titleEnglish: 'Your Soft Scent Across Quiet City',
    linesHindi: [
      'बारिश थमने के बाद जब सड़कों पर पीली लाइटें झिलमिलाने लगती हैं',
      'तब हर गीला पत्ता तुम्हारे साथ बीती हुई शाम की याद दिला जाता है',
    ],
    linesHinglish: [
      'Baarish thamne ke baad jab sadkon par peeli lightein jhilmilaane lagti hain',
      'Tab har geela patta tumhaare saath beeti hui shaam ki yaad dila jaata hai',
    ],
    linesEnglish: [
      'Once rain stops and amber streetlights shimmer over wet pavement',
      'Every glistening leaf reminds me softly of evenings walked beside you',
    ],
  },
  {
    title: 'दिल की किताब में कोमल विराम',
    titleEnglish: 'Soft Comma Inside Heart Story',
    linesHindi: [
      'हमारी कहानी पर पूर्णविराम नहीं बल्कि एक प्यारा सा अल्पविराम लगा है',
      'जहाँ याद आते ही मन ठहरता है और मुस्कुराकर आगे बढ़ जाता है',
    ],
    linesHinglish: [
      'Hamaari kahaani par poornviraam nahin balki ek pyara sa alpviraam laga hai',
      'Jahaan yaad aate hi mann theharta hai aur muskuraakar aage badh jaata hai',
    ],
    linesEnglish: [
      'No harsh period closes our story—only a gentle comma rests between lines',
      'Where memory pauses warmly, smiles quietly, and walks gracefully ahead',
    ],
  },
  {
    title: 'प्यार से संभाली गई सादगी',
    titleEnglish: 'Simplicity Guarded With Love',
    linesHindi: [
      'तुमसे बिछड़कर भी मैंने अपने दिल को कभी पत्थर नहीं बनने दिया',
      'ताकि कभी तुम्हारी याद आए तो उसे रहने के लिए नर्म जगह मिले',
    ],
    linesHinglish: [
      'Tumse bichhadkar bhi maine apne dil ko kabhi patthar nahin banne diya',
      'Taaki kabhi tumhaari yaad aaye to use rehne ke liye narm jagah mile',
    ],
    linesEnglish: [
      'Even after parting ways, I never let my heart harden into stone',
      'So whenever your memory visits, it still finds soft welcoming ground',
    ],
  },
  {
    title: 'सुबह की हवा में अनकहा आभार',
    titleEnglish: 'Unspoken Thanks in Morning Air',
    linesHindi: [
      'शुक्रिया उस वक़्त का भी जब हम साथ थे और उस वक़्त का भी जब दूर हुए',
      'दोनों ने मिलकर ही आज मुझे इतना शांत और संवेदनशील इंसान बनाया है',
    ],
    linesHinglish: [
      'Shukriya us waqt ka bhi jab hum saath the aur us waqt ka bhi jab door hue',
      'Dono ne milkar hi aaj mujhe itna shaant aur samvedansheel insaan banaaya hai',
    ],
    linesEnglish: [
      'Thank you both for our bright days together and the quiet season apart',
      'Together those hours shaped me into the calm, gentle person standing today',
    ],
  },
  {
    title: 'अधूरे प्यार का अमर उजाला',
    titleEnglish: 'Timeless Glow of Unfinished Love',
    linesHindi: [
      'सारी कहानियाँ एक छत के नीचे आकर पूरी हों ज़रूरी नहीं मेरे दोस्त',
      'कुछ मोहब्बतें आसमान की तरह दूर रहकर भी पूरी दुनिया ढक लेती हैं',
    ],
    linesHinglish: [
      'Saari kahaaniyaan ek chhat ke neeche aakar poori hon zaroori nahin mere dost',
      'Kuch mohabbatein aasmaan ki tarah door rehkar bhi poori duniya dhak leti hain',
    ],
    linesEnglish: [
      'Not every love story finishes beneath one shared roof on earth',
      'Some affections stretch like wide blue sky, sheltering whole lives from afar',
    ],
  },
];

export const UNIQUE_SAD_LOVE_170 = buildUniqueShayaris(
  'sad-love',
  'Sad Love Shayari (सैड लव शायरी)',
  '🌧️',
  31,
  SAD_LOVE_ENTRIES
);
