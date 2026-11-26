import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const MISS_YOU_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'पसंदीदा गाने पर तुम्हारी दस्तक',
    titleEnglish: 'Your Knock Inside Favorite Songs',
    linesHindi: [
      'इयरफ़ोन लगाते ही हर पुराना गाना तुम्हारा पता पूछने लगता है',
      'भीड़ में बैठकर भी मन चुपके से तुम्हारे पास चला जाता है',
    ],
    linesHinglish: [
      'Earphone lagaate hi har puraana gaana tumhaara pata poochhne lagta hai',
      'Bheed mein baithkar bhi mann chupke se tumhaare paas chala jaata hai',
    ],
    linesEnglish: [
      'The second earphones go in, every old song starts asking for you',
      'Even sitting in a noisy crowd, my thoughts slip quietly beside you',
    ],
  },
  {
    title: 'चाय की भाप में धुँधली तस्वीर',
    titleEnglish: 'Your Face in Rising Tea Steam',
    linesHindi: [
      'शाम की चाय आज भी दो कप बन जाती है आदत की वजह से',
      'एक कप हाथ में रहता है और दूसरे में तुम्हारी याद महकती है',
    ],
    linesHinglish: [
      'Shaam ki chai aaj bhi do cup ban jaati hai aadat ki wajah se',
      'Ek cup haath mein rehta hai aur doosre mein tumhaari yaad mehakti hai',
    ],
    linesEnglish: [
      'Evening tea still brews for two out of pure muscle memory',
      'One warm mug sits in my palm while memories linger across the other',
    ],
  },
  {
    title: 'पिन्ड चैट की आदत',
    titleEnglish: 'Habit of Opening Pinned Chat',
    linesHindi: [
      'फोन उठाते ही उँगलियाँ अपने आप तुम्हारी चैट खोल देती हैं',
      'भले ही कोई नया संदेश न हो, पर पुराना पढ़कर सुकून मिलता है',
    ],
    linesHinglish: [
      'Phone uthaate hi ungliyaan apne aap tumhaari chat khol deti hain',
      'Bhale hi koi naya sandesh na ho, par puraana padhkar sukoon milta hai',
    ],
    linesEnglish: [
      'Pick up the phone and my thumb still taps straight onto our chat',
      'Even with no fresh text waiting, reading old lines brings calm',
    ],
  },
  {
    title: 'शहर बदला, मौसम वही रहा',
    titleEnglish: 'New City, Same Missing Sky',
    linesHindi: [
      'नए शहर की ऊँची इमारतों में सब कुछ चमकदार दिखता है बाहर से',
      'पर शाम ढलते ही आँखें तुम्हारे शहर की सड़कें ढूँढने लगती हैं',
    ],
    linesHinglish: [
      'Naye shehar ki oonchi imaarton mein sab kuch chamakdaar dikhta hai baahar se',
      'Par shaam dhalte hi aankhein tumhaare shehar ki sadkein dhoondhne lagti hain',
    ],
    linesEnglish: [
      'Glass towers in this new city gleam brightly from every sidewalk',
      'Yet the moment dusk arrives, my eyes miss the quiet lanes back home',
    ],
  },
  {
    title: 'ऑनलाइन दिखने का सुकून',
    titleEnglish: 'Quiet Relief Seeing You Online',
    linesHindi: [
      'बिना कुछ लिखे ही तुम्हारा नाम ऑनलाइन देख लेना काफ़ी लगता है',
      'लगता है तुम इसी दुनिया में मेरे आस-पास ही साँस ले रहे हो',
    ],
    linesHinglish: [
      'Bina kuch likhe hi tumhaara naam online dekh lena kaafi lagta hai',
      'Lagta hai tum isi duniya mein mere aas-paas hi saans le rahe ho',
    ],
    linesEnglish: [
      'Spotting your name online for two seconds feels oddly comforting',
      'As if across all these miles you are still right here nearby',
    ],
  },
  {
    title: 'हल्की बारिश और तुम्हारा नाम',
    titleEnglish: 'First Drizzle Spelling Your Name',
    linesHindi: [
      'पहली बूँद गिरते ही खिड़की के शीशे पर अजीब सा एहसास जागा',
      'जैसे आसमान ने भी आज मेरी तरह तुम्हें दिल से याद किया हो',
    ],
    linesHinglish: [
      'Pehli boond girte hi khidki ke sheeshe par ajeeb sa ehsaas jaaga',
      'Jaise aasmaan ne bhi aaj meri tarah tumhein dil se yaad kiya ho',
    ],
    linesEnglish: [
      'The first raindrop tapping the window woke a gentle ache inside',
      'Almost as if the overcast sky missed your smile right beside me',
    ],
  },
  {
    title: 'वॉइस नोट की गुनगुनाहट',
    titleEnglish: 'Replaying Old Voice Notes',
    linesHindi: [
      'जब बहुत खामोशी छा जाए कमरे में तो पुराने वॉइस नोट सुन लेता हूँ',
      'तुम्हारी हँसी की आवाज़ आज भी पूरे कमरे में धूप भर देती है',
    ],
    linesHinglish: [
      'Jab bahut khaamoshi chha jaaye kamre mein to puraane voice note sun leta hoon',
      'Tumhaari hansi ki aawaz aaj bhi poore kamre mein dhoop bhar deti hai',
    ],
    linesEnglish: [
      'When silence grows heavy inside the room, I replay your old voice clips',
      'Just three seconds of your laughter still floods the room with sunlight',
    ],
  },
  {
    title: 'बगल वाली खाली कुर्सी',
    titleEnglish: 'Empty Chair Across the Table',
    linesHindi: [
      'उस कोने वाले कैफ़े में आज भी वही कॉफ़ी ऑर्डर की थी मैंने',
      'बस सामने वाली खाली कुर्सी ने तुम्हारी कमी साफ़ दिखा दी',
    ],
    linesHinglish: [
      'Us kone waale cafe mein aaj bhi wahi coffee order ki thi maine',
      'Bas saamne waali khaali kursi ne tumhaari kami saaf dikha di',
    ],
    linesEnglish: [
      'I ordered our usual corner-table coffee at that little cafe today',
      'Only the empty wooden chair across from me echoed how far you are',
    ],
  },
  {
    title: 'अधूरी बात का इंतज़ार',
    titleEnglish: 'Waiting for Unfinished Stories',
    linesHindi: [
      'दिन भर में दस बार सोचता हूँ कि यह किस्सा तुम्हें सुनाऊँगा आज',
      'फिर याद आता है कि अब मिलने में थोड़े दिन बाकी हैं यार',
    ],
    linesHinglish: [
      'Din bhar mein das baar sochta hoon ki yeh kissa tumhein sunaaoonga aaj',
      'Phir yaad aata hai ki ab milne mein thode din baaqi hain yaar',
    ],
    linesEnglish: [
      'Ten times a day I catch myself saving funny stories just to tell you',
      'Before remembering our next coffee catch-up is still days away',
    ],
  },
  {
    title: 'रेलवे स्टेशन की आखिरी नज़र',
    titleEnglish: 'Last Glance From Train Window',
    linesHindi: [
      'ट्रेन छूटते वक़्त हाथ हिलाती तुम्हारी वह धुँधली सी तस्वीर',
      'हर बार वापस लौटने की तारीख़ गिनने पर मजबूर कर देती है',
    ],
    linesHinglish: [
      'Train chhootte waqt haath hilaati tumhaari woh dhundhli si tasveer',
      'Har baar waapas lautne ki taareekh ginne par majboor kar deti hai',
    ],
    linesEnglish: [
      'That fading sight of you waving goodbye along the moving platform',
      'Starts my countdown to coming back before the train even clears town',
    ],
  },
  {
    title: 'कपड़ों में बसी तुम्हारी खुशबू',
    titleEnglish: 'Your Scent on Borrowed Jackets',
    linesHindi: [
      'अलमारी में टँगी तुम्हारी पुरानी जैकेट से आज भी वही महक आती है',
      'लगता है जैसे तुम अभी बस पाँच मिनट पहले यहीं से गए हो',
    ],
    linesHinglish: [
      'Almaari mein tangi tumhaari puraani jacket se aaj bhi wahi mehak aati hai',
      'Lagta hai jaise tum abhi bas paanch minute pehle yahin se gaye ho',
    ],
    linesEnglish: [
      'Your old jacket hanging in my closet still carries that familiar scent',
      'Making it feel like you stepped out only five short minutes ago',
    ],
  },
  {
    title: 'दो पल की बात का लालच',
    titleEnglish: 'Craving Just Two Minutes Talk',
    linesHindi: [
      'न कोई लंबा सफ़र चाहिए, न घंटों की मुलाक़ात माँगता हूँ मैं',
      'बस दो मिनट तुम्हारी आवाज़ सुन लूँ तो पूरा दिन संभल जाता है',
    ],
    linesHinglish: [
      'Na koi lamba safar chahiye, na ghanton ki mulaakaat maangta hoon main',
      'Bas do minute tumhaari aawaz sun loon to poora din sambhal jaata hai',
    ],
    linesEnglish: [
      'I ask for neither grand getaways nor hours around fancy tables',
      'Two quick minutes hearing your voice puts my entire day back in place',
    ],
  },
  {
    title: 'गैलरी के सबसे प्यारे फोल्डर',
    titleEnglish: 'Favorite Folder in Phone Gallery',
    linesHindi: [
      'रात को सोने से पहले फ़ोन की पुरानी गैलरी खुल ही जाती है',
      'तुम्हारी मुस्कान वाली तस्वीर देखकर ही आँखों को नींद आती है',
    ],
    linesHinglish: [
      'Raat ko sone se pehle phone ki puraani gallery khul hi jaati hai',
      'Tumhaari muskaan waali tasveer dekhkar hi aankhon ko neend aati hai',
    ],
    linesEnglish: [
      'Right before sleep, my thumb drifts back into old photo albums',
      'One look at your bright smile finally lets my tired eyes rest',
    ],
  },
  {
    title: 'भीड़ में भी एक चेहरा ढूँढना',
    titleEnglish: 'Scanning Crowds for One Face',
    linesHindi: [
      'बाज़ार की भीड़ हो या मॉल की जगमगाती हुई सीढ़ियाँ हों',
      'अक्सर तुमसे मिलती-जुलती परछाईं देखकर कदम रुक जाते हैं',
    ],
    linesHinglish: [
      'Baazaar ki bheed ho ya mall ki jagmagaati hui seedhiyaan hon',
      'Aksar tumse milti-julti parchhaayin dekhkar kadam ruk jaate hain',
    ],
    linesEnglish: [
      'Through busy street markets or bright crowded escalators downtown',
      'My steps still pause whenever someone walks past with your posture',
    ],
  },
  {
    title: 'दूर रहकर भी क़रीब',
    titleEnglish: 'Near Inside Distance',
    linesHindi: [
      'मीलों का फ़ासला सिर्फ़ नक़्शे और टिकट पर ही बड़ा दिखता है',
      'दिल की धड़कन के सबसे करीब आज भी सिर्फ़ तुम्हारा नाम है',
    ],
    linesHinglish: [
      'Meelon ka faasla sirf nakshe aur ticket par hi bada dikhta hai',
      'Dil ki dhadkan ke sabse kareeb aaj bhi sirf tumhaara naam hai',
    ],
    linesEnglish: [
      'Hundreds of miles only look intimidating across maps and flight tickets',
      'Closest to every quiet heartbeat still rests your unmistakable name',
    ],
  },
  {
    title: 'सर्द शाम में यादों की गर्माहट',
    titleEnglish: 'Soft Blanket of Memories',
    linesHindi: [
      'जब सर्द हवाएँ शाम को खिड़की से भीतर झोंका मारती हैं',
      'तब तुम्हारी मीठी यादें कंबल बनकर दिल को गर्म रखती हैं',
    ],
    linesHinglish: [
      'Jab sard hawaaein shaam ko khidki se bheetar jhonka maarti hain',
      'Tab tumhaari meethi yaadein kambal bankar dil ko garm rakhti hain',
    ],
    linesEnglish: [
      'When chilly evening drafts sneak softly through half-open shutters',
      'Warm memories of you wrap around the heart like a soft wool blanket',
    ],
  },
  {
    title: 'मीम देखते ही पहला ख़्याल',
    titleEnglish: 'First Thought Upon Funny Memes',
    linesHindi: [
      'हर मज़ेदार बात सुनते ही सबसे पहले तेरी शक्ल याद आती है यार',
      'तेरे बिना हँसने का मज़ा भी थोड़ा अधूरा सा लगता है आजकल',
    ],
    linesHinglish: [
      'Har mazedaar baat sunte hi sabse pehle teri shakl yaad aati hai yaar',
      'Tere bina hansne ka maza bhi thoda adhoora sa lagta hai aajkal',
    ],
    linesEnglish: [
      'Every hilarious line immediately makes me picture your grin first',
      'Even good jokes feel slightly unfinished until you laugh along',
    ],
  },
  {
    title: 'आसमान के एक ही चाँद के नीचे',
    titleEnglish: 'Under One Shared Night Moon',
    linesHindi: [
      'शहर अलग सही, घड़ी के काँटे और मौसम भले अलग हों हमारे',
      'पर रात को एक ही चाँद को देखकर दोनों एक-दूसरे को याद करते हैं',
    ],
    linesHinglish: [
      'Shehar alag sahi, ghadi ke kaante aur mausam bhale alag hon hamaare',
      'Par raat ko ek hi chaand ko dekhkar dono ek-doosre ko yaad karte hain',
    ],
    linesEnglish: [
      'Different cities, different clocks, and different skies overhead tonight',
      'Yet looking up at the very same moon brings us right back side by side',
    ],
  },
  {
    title: 'तेरी कमी हर खुशी में',
    titleEnglish: 'Missing You Inside Good News',
    linesHindi: [
      'जब भी कोई अच्छी ख़बर मिलती है मुझे अपने काम के बीच में',
      'तो दिल चाहता है सबसे पहले दौड़कर तुम्हारे गले लग जाऊँ',
    ],
    linesHinglish: [
      'Jab bhi koi achhi khabar milti hai mujhe apne kaam ke beech mein',
      'To dil chahta hai sabse pehle daudkar tumhaare gale lag jaaun',
    ],
    linesEnglish: [
      'Whenever bright good news lands on my desk in the middle of the day',
      'My first urge is still racing straight over to hug you tight',
    ],
  },
  {
    title: 'सुकून का नाम तुम हो',
    titleEnglish: 'Peace Carries Your Name',
    linesHindi: [
      'दिन भर की थकान के बाद जब बिस्तर पर सिर रखता हूँ मैं',
      'तो तुम्हारी याद लोरी बनकर आँखों को चैन दे जाती है',
    ],
    linesHinglish: [
      'Din bhar ki thakaan ke baad jab bistar par sir rakhta hoon main',
      'To tumhaari yaad lori bankar aankhon ko chain de jaati hai',
    ],
    linesEnglish: [
      'When exhaustion finally drops my head onto the pillow after midnight',
      'Remembering your calm voice settles over my eyelids like a lullaby',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'फ़ोन की घंटी का भ्रम',
    titleEnglish: 'Phantom Ring in Quiet Rooms',
    linesHindi: [
      'आजकल हवा से पत्ता भी हिलता है तो लगता है संदेश आया तेरा',
      'इतनी शिद्दत से शायद किसी का इंतज़ार पहले कभी नहीं किया',
    ],
    linesHinglish: [
      'Aajkal hawa se patta bhi hilta hai to lagta hai sandesh aaya tera',
      'Itni shiddat se shaayad kisi ka intezaar pehle kabhi nahin kiya',
    ],
    linesEnglish: [
      'Even rustling leaves outside fool me into checking for your ping',
      'I never knew waiting for one hello could feel this wide awake',
    ],
  },
  {
    title: 'पुराने रास्ते, ताज़ा निशान',
    titleEnglish: 'Old Sidewalks, Fresh Footprints',
    linesHindi: [
      'जिस मोड़ पर हम घंटों खड़े होकर बेमतलब की बातें करते थे',
      'आज उस सड़क से गुज़रते हुए क़दम अपने आप धीमे हो गए',
    ],
    linesHinglish: [
      'Jis mod par hum ghanton khade hokar bematlab ki baatein karte the',
      'Aaj us sadak se guzarte hue kadam apne aap dheeme ho gaye',
    ],
    linesEnglish: [
      'Passing the street corner where we once talked nonsense for hours',
      'Made my footsteps slow down naturally without even realizing why',
    ],
  },
  {
    title: 'तस्वीरों से बात करने की आदत',
    titleEnglish: 'Talking Quietly to Photographs',
    linesHindi: [
      'वक़्त कम होने से बातें भले ही कम हो गई हों हमारे बीच में',
      'पर तुम्हारी मुस्कुराती तस्वीर से मेरी गुफ़्तगू आज भी रोज़ होती है',
    ],
    linesHinglish: [
      'Waqt kam hone se baatein bhale hi kam ho gayi hon hamaare beech mein',
      'Par tumhaari muskuraati tasveer se meri guftagoo aaj bhi roz hoti hai',
    ],
    linesEnglish: [
      'Busy calendars may have trimmed down how long we talk each week',
      'Yet I still catch up daily with your smiling portrait on my desk',
    ],
  },
  {
    title: 'सुबह की अंगड़ाई में पहला ख़्याल',
    titleEnglish: 'First Thought Before Coffee Brews',
    linesHindi: [
      'अलार्म बंद करने के तुरंत बाद जो पहला नाम दिमाग़ में आता है',
      'वह तुम्हारा ही है जिसे देखे हुए न जाने कितने दिन गुज़र गए',
    ],
    linesHinglish: [
      'Alarm band karne ke turant baad jo pehla naam dimaag mein aata hai',
      'Woh tumhaara hi hai jise dekhe hue na jaane kitne din guzar gaye',
    ],
    linesEnglish: [
      'Right after tapping snooze on my morning alarm at seven sharp',
      'Your name still crosses my mind first after all these quiet weeks',
    ],
  },
  {
    title: 'एयरपोर्ट की काँच वाली दीवार',
    titleEnglish: 'Behind the Airport Glass Wall',
    linesHindi: [
      'सुरक्षा जाँच के उस पार जाते हुए जब तुमने मुड़कर हाथ हिलाया था',
      'वह पाँच सेकंड का दृश्य आज भी मेरी आँखों के सामने ठहरा है',
    ],
    linesHinglish: [
      'Suraksha jaanch ke us paar jaate hue jab tumne mudkar haath hilaaya tha',
      'Woh paanch second ka drishya aaj bhi meri aankhon ke saamne thehra hai',
    ],
    linesEnglish: [
      'That quick glance and wave right before stepping past airport security',
      'Still stands frozen vividly in front of my eyes months later',
    ],
  },
  {
    title: 'अधूरे स्क्रीनशॉट का खज़ाना',
    titleEnglish: 'Treasure of Old Chat Screenshots',
    linesHindi: [
      'फ़ोन बदलते समय सबसे ज़्यादा डर बस इस बात का लगता है मुझे',
      'कहीं तुम्हारी प्यारी बातों के पुराने स्क्रीनशॉट न खो जाएँ',
    ],
    linesHinglish: [
      'Phone badalte samay sabse zyada dar bas is baat ka lagta hai mujhe',
      'Kahin tumhaari pyari baaton ke puraane screenshot na kho jaayein',
    ],
    linesEnglish: [
      'The biggest worry when switching to a brand-new phone each time',
      'Is losing those saved screenshots of our late-night silly banter',
    ],
  },
  {
    title: 'हवा का रुख़ तुम्हारी तरफ़',
    titleEnglish: 'Breezes Blowing Toward Your City',
    linesHindi: [
      'शाम की ठंडी हवा से आज मैंने एक छोटा सा पैग़ाम भेजा है',
      'अगर माथे को छूकर गुज़रे तो समझ लेना मैंने याद किया है तुम्हें',
    ],
    linesHinglish: [
      'Shaam ki thandi hawa se aaj maine ek chhota sa paigaam bheja hai',
      'Agar maathe ko chhookar guzre to samajh lena maine yaad kiya hai tumhein',
    ],
    linesEnglish: [
      'I whispered a tiny hello onto the cool evening breeze just now',
      'If a gentle gust brushes your forehead, know I was thinking of you',
    ],
  },
  {
    title: 'घर लौटते क़दमों की थकान',
    titleEnglish: 'Missing You Walking Home',
    linesHindi: [
      'ऑफिस से निकलते ही पहले तुम्हारे साथ गोलगप्पे खाने रुकते थे',
      'अब सीधा कमरे पर आ जाता हूँ क्योंकि साथ चलने वाला नहीं है कोई',
    ],
    linesHinglish: [
      'Office se nikalte hi pehle tumhaare saath golgappe khaane rukte the',
      'Ab seedha kamre par aa jaata hoon kyunki saath chalne waala nahin hai koi',
    ],
    linesEnglish: [
      'After work we always detoured for street snacks before heading home',
      'Now I walk straight upstairs because nobody shares the detour anymore',
    ],
  },
  {
    title: 'बिना बोले दिल की धड़कन',
    titleEnglish: 'Heart Missing You Quietly',
    linesHindi: [
      'किसी को याद करने का मतलब हर वक़्त उदास रहना नहीं होता',
      'कभी-कभी बंद आँखों से मुस्कुरा देना भी यादों का सबसे प्यारा रूप है',
    ],
    linesHinglish: [
      'Kisi ko yaad karne ka matlab har waqt udaas rehna nahin hota',
      'Kabhi-kabhi band aankhon se muskura dena bhi yaadon ka sabse pyara roop hai',
    ],
    linesEnglish: [
      'Missing someone deeply does not mean walking around downcast all day',
      'Smiling softly with closed eyes is sometimes the sweetest way to miss you',
    ],
  },
  {
    title: 'तुम्हारी लिखी आख़िरी चिट्ठी',
    titleEnglish: 'Folded Note Inside Wallet',
    linesHindi: [
      'पर्स की सबसे अंदर वाली जेब में आज भी एक पुराना टिकट रखा है',
      'जिस पर तुमने मज़ाक़ में अपना नाम लिखकर मुझे दिया था कभी',
    ],
    linesHinglish: [
      'Purse ki sabse andar waali jeb mein aaj bhi ek puraana ticket rakha hai',
      'Jis par tumne mazaaq mein apna naam likhkar mujhe diya tha kabhi',
    ],
    linesEnglish: [
      'Inside the back pocket of my wallet sits a faded movie stub',
      'Where you playfully scribbled your signature years ago',
    ],
  },
  {
    title: 'संडे वाली लंबी नींद में कमी',
    titleEnglish: 'Empty Quiet of Sunday Mornings',
    linesHindi: [
      'रविवार की सुबह देर तक सोकर भी वह ताज़गी नहीं मिलती आजकल',
      'क्योंकि जगाकर चाय देने वाली तुम्हारी आवाज़ जो दूर है मुझसे',
    ],
    linesHinglish: [
      'Ravivaar ki subah der tak sokar bhi woh taazgi nahin milti aajkal',
      'Kyunki jagaakar chai dene waali tumhaari aawaz jo door hai mujhse',
    ],
    linesEnglish: [
      'Even sleeping late on sunny Sundays rarely refreshes me lately',
      'Because your cheerful voice teasing me awake over tea is far away',
    ],
  },
  {
    title: 'गुस्सा भी तुम्हारे होने जैसा प्यारा',
    titleEnglish: 'Missing Even Your Cute Tantrums',
    linesHindi: [
      'जब पास थे तो तुम्हारे छोटे-छोटे नखरों से कभी चिढ़ भी होती थी',
      'आज दूर हो तो उन्हीं प्यारी ज़िदों को सुनने को कान तरसते हैं',
    ],
    linesHinglish: [
      'Jab paas the to tumhaare chhote-chhote nakhron se kabhi chidh bhi hoti thi',
      'Aaj door ho to unhin pyari ziddon ko sunne ko kaan taraste hain',
    ],
    linesEnglish: [
      'When you were close, your tiny stubborn tantrums made me roll my eyes',
      'Now miles apart, I miss every single playful argument we ever had',
    ],
  },
  {
    title: 'मेहफ़िल में अकेलेपन का एहसास',
    titleEnglish: 'Quiet Absence in Full Rooms',
    linesHindi: [
      'हज़ार लाइटें जल रही हों और संगीत भी तेज़ चल रहा हो सामने',
      'पर जब तुम नहीं होते तो हर जश्न थोड़ा अधूरा सा महसूस होता है',
    ],
    linesHinglish: [
      'Hazaar lightein jal rahi hon aur sangeet bhi tez chal raha ho saamne',
      'Par jab tum nahin hote to har jashn thoda adhoora sa mehsoos hota hai',
    ],
    linesEnglish: [
      'A thousand fairy lights may twinkle while loud music fills the hall',
      'Yet whenever you are missing, every celebration feels half complete',
    ],
  },
  {
    title: 'फ़ासलों का पुल बने शब्द',
    titleEnglish: 'Words Bridging the Miles',
    linesHindi: [
      'जब मिलने में वक़्त लगता है तो यह छोटे-छोटे संदेश ही पुल बनते हैं',
      'एक छोटा सा कॉल ही मीलों की दूरी को दो इंच का कर देता है',
    ],
    linesHinglish: [
      'Jab milne mein waqt lagta hai to yeh chhote-chhote sandesh hi pul bante hain',
      'Ek chhota sa call hi meelon ki doori ko do inch ka kar deta hai',
    ],
    linesEnglish: [
      'While schedules keep us apart, quick midnight texts build tiny bridges',
      'And one warm phone call shrinks five hundred miles down to inches',
    ],
  },
  {
    title: 'हॉस्टल की खिड़की से घर की याद',
    titleEnglish: 'Missing Home From Hostel Window',
    linesHindi: [
      'मेस की थाली देखकर आज फिर माँ के हाथ की दाल याद आ गई',
      'सपने पूरे करने की क़ीमत कई बार अपनों की दूरी से चुकानी पड़ती है',
    ],
    linesHinglish: [
      'Mess ki thaali dekhkar aaj phir maa ke haath ki daal yaad aa gayi',
      'Sapne poore karne ki keemat kai baar apnon ki doori se chukaani padti hai',
    ],
    linesEnglish: [
      'Looking at tonight’s canteen tray made me crave Mom’s simple kitchen meal',
      'Chasing big ambitions often asks us to pay in quiet homesickness',
    ],
  },
  {
    title: 'याद आना कोई मजबूरी नहीं',
    titleEnglish: 'Missing You Isn’t Habit, It’s Love',
    linesHindi: [
      'तुम याद आते हो क्योंकि तुम आदत नहीं, दिल की ज़रूरत बन चुके हो',
      'फ़ुर्सत में तो हर कोई सोचता है, हम तो काम के बीच भी तुम्हें याद करते हैं',
    ],
    linesHinglish: [
      'Tum yaad aate ho kyunki tum aadat nahin, dil ki zaroorat ban chuke ho',
      'Fursat mein to har koi sochta hai, hum to kaam ke beech bhi tumhein yaad karte hain',
    ],
    linesEnglish: [
      'You cross my mind not out of boredom, but because my heart keeps you close',
      'Anyone remembers during free hours—I miss you right inside busy meetings',
    ],
  },
  {
    title: 'चश्मे पर जमी धुंध सा नाम',
    titleEnglish: 'Name Mist Across Winter Glass',
    linesHindi: [
      'सर्दियों की सुबह कार के ठंडे शीशे पर भाप जमते ही हाथ चला',
      'और अनजाने में फिर से तेरा पहला अक्षर लिख बैठा उँगलियों से',
    ],
    linesHinglish: [
      'Sardiyon ki subah car ke thande sheeshe par bhaap jamte hi haath chala',
      'Aur anjaane mein phir se tera pehla akshar likh baitha ungliyon se',
    ],
    linesEnglish: [
      'The second winter mist frosted over the cold windshield this morning',
      'My fingertip traced your initials across the fogged glass automatically',
    ],
  },
  {
    title: 'दोस्त के जाने का सूनापन',
    titleEnglish: 'Quiet Left Behind by Best Friend',
    linesHindi: [
      'जब से तुम नौकरी के लिए दूसरे शहर शिफ़्ट हुए हो मेरे यार',
      'शाम की टपरी वाली चाय में भी पहले जैसा स्वाद नहीं आ रहा',
    ],
    linesHinglish: [
      'Jab se tum naukri ke liye doosre shehar shift hue ho mere yaar',
      'Shaam ki tapri waali chai mein bhi pehle jaisa swaad nahin aa raha',
    ],
    linesEnglish: [
      'Ever since your job moved you across to another city, my friend',
      'Even evening tea at our favorite street stall tastes half as lively',
    ],
  },
  {
    title: 'इंतज़ार की प्यारी घड़ी',
    titleEnglish: 'Sweet Clock Counting Until We Meet',
    linesHindi: [
      'तुम्हारे लौटने की तारीख़ अब सिर्फ़ कैलेंडर पर कुछ दिन दूर है',
      'हर गुज़रती सुबह बस मिलने की उत्सुकता बढ़ाती जा रही है',
    ],
    linesHinglish: [
      'Tumhaare lautne ki taareekh ab sirf calendar par kuch din door hai',
      'Har guzarti subah bas milne ki utsukta badhaati ja rahi hai',
    ],
    linesEnglish: [
      'Your return date now sits just a handful of square days away',
      'Every sunrise simply turns up my excitement to finally see you smile',
    ],
  },
  {
    title: 'दिल की कॉपी पर खाली जगह',
    titleEnglish: 'Space Reserved Only for You',
    linesHindi: [
      'ज़िंदगी में नए लोग, नए शहर और नए काम जुड़ते रहते हैं रोज़',
      'पर तुम्हारी खाली जगह कोई दूसरा इंसान कभी भर नहीं पाता',
    ],
    linesHinglish: [
      'Zindagi mein naye log, naye shehar aur naye kaam judte rehte hain roz',
      'Par tumhaari khaali jagah koi doosra insaan kabhi bhar nahin paata',
    ],
    linesEnglish: [
      'Fresh cities, new faces, and busy routines keep piling onto life',
      'Yet nobody else ever steps smoothly into the space carved for you',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'हँसी रुकने के बाद की याद',
    titleEnglish: 'Missing You Once Laughs Fade',
    linesHindi: [
      'दोस्तों के बीच बैठकर दिन भर खूब ठहाके लगा लेता हूँ मैं',
      'पर रात को सन्नाटा होते ही सबसे ज़्यादा तुम्हारी कमी खलती है',
    ],
    linesHinglish: [
      'Doston ke beech baithkar din bhar khoob thahake laga leta hoon main',
      'Par raat ko sannaata hote hi sabse zyada tumhaari kami khalti hai',
    ],
    linesEnglish: [
      'Surrounded by friends all afternoon, I laugh effortlessly out loud',
      'Yet the second midnight quiets the room, missing you hits deep',
    ],
  },
  {
    title: 'रब से मिलने की छोटी अर्ज़ी',
    titleEnglish: 'Quick Prayer for One Reunion',
    linesHindi: [
      'आज आसमान से गुज़रते हुए बादलों को देखकर बस इतना सोचा',
      'काश उड़कर पाँच मिनट के लिए तुम्हारे सामने आ पाता मैं',
    ],
    linesHinglish: [
      'Aaj aasmaan se guzarte hue baadalon ko dekhkar bas itna socha',
      'Kaash udhkar paanch minute ke liye tumhaare saamne aa paata main',
    ],
    linesEnglish: [
      'Watching drifting clouds glide across the late afternoon sky today',
      'I wished I could teleport right across to you for five short minutes',
    ],
  },
  {
    title: 'अधूरी मूवी का टिकिट',
    titleEnglish: 'Saving That Movie for Us',
    linesHindi: [
      'कई बेहतरीन फिल्में आ गईं और चली भी गईं सिनेमाघरों से यार',
      'पर मैंने सोच रखा है कि वह कहानी तुम्हारे साथ बैठकर ही देखूँगा',
    ],
    linesHinglish: [
      'Kai behtareen filmein aa gayin aur chali bhi gayin cinemagharon se yaar',
      'Par maine soch rakha hai ki woh kahaani tumhaare saath baithkar hi dekhoonga',
    ],
    linesEnglish: [
      'Plenty of great movies arrived and left theaters over these past months',
      'Yet I am holding off on watching our favorites until you sit beside me',
    ],
  },
  {
    title: 'बिना हिचकी के भी याद आना',
    titleEnglish: 'Thinking of You Every Hour',
    linesHindi: [
      'लोग कहते हैं कोई याद करता है तो हिचकी आती है बार-बार',
      'अगर सच होता तो मेरी यादों से तुम्हें साँस लेने की फ़ुर्सत न मिलती',
    ],
    linesHinglish: [
      'Log kehte hain koi yaad karta hai to hichki aati hai baar-baar',
      'Agar sach hota to meri yaadon se tumhein saans lene ki fursat na milti',
    ],
    linesEnglish: [
      'Old sayings claim hiccups strike whenever somebody thinks of you',
      'If that were true, my constant thoughts would never let you breathe',
    ],
  },
  {
    title: 'भीगे मौसम में तेरी जैकेट',
    titleEnglish: 'Cold Rain Without Your Hug',
    linesHindi: [
      'हल्की ठंडक उतरते ही शहर की सड़कें सुनहरी दिखने लगी हैं',
      'बस जेब में हाथ डालकर चलने की बजाय तुम्हारा हाथ ढूँढता हूँ',
    ],
    linesHinglish: [
      'Halki thandak utarte hi shehar ki sadkein sunahari dikhne lagi hain',
      'Bas jeb mein haath daalkar chalne ki bajaay tumhaara haath dhoondhta hoon',
    ],
    linesEnglish: [
      'Early autumn chill turns evening streetlights warm and golden now',
      'Only instead of stuffing hands in pockets, I keep reaching for yours',
    ],
  },
  {
    title: 'पुरानी किताब के बीच सूखा फूल',
    titleEnglish: 'Pressed Flower Between Pages',
    linesHindi: [
      'किताब खोलते ही जो सूखा गुलाब आज हाथ में आकर गिरा मेरे',
      'उसने एक पल में बरसों पुरानी शाम को फिर से ज़िंदा कर दिया',
    ],
    linesHinglish: [
      'Kitaab kholte hi jo sookha gulaab aaj haath mein aakar gira mere',
      'Usne ek pal mein barson puraani shaam ko phir se zinda kar diya',
    ],
    linesEnglish: [
      'A dried rose fluttering out from between two dusty textbook pages',
      'Brought back an entire sunlit afternoon from years ago in one breath',
    ],
  },
  {
    title: 'रात के सन्नाटे में कॉल लॉग',
    titleEnglish: 'Scrolling Old Call History',
    linesHindi: [
      'कभी-कभी कुछ नहीं सूझता तो कॉल लॉग में तुम्हारा नाम देखता हूँ',
      'वो घंटे भर की बातों का समय आज भी दिल को हल्का कर देता है',
    ],
    linesHinglish: [
      'Kabhi-kabhi kuch nahin soojhta to call log mein tumhaara naam dekhta hoon',
      'Woh ghante bhar ki baaton ka samay aaj bhi dil ko halka kar deta hai',
    ],
    linesEnglish: [
      'On quiet evenings I still scroll past old call logs bearing your name',
      'Seeing those hour-long call timestamps still warms my heart instantly',
    ],
  },
  {
    title: 'दूर शहर से आती खुशबू',
    titleEnglish: 'Familiar Aroma Across Miles',
    linesHindi: [
      'ताज़ा कॉफ़ी की महक जब किसी गली से गुज़रते हुए आती है',
      'तो अनजाने में तेरे साथ बिताई हर सुबह आँखों में तैर जाती है',
    ],
    linesHinglish: [
      'Taaza coffee ki mehak jab kisi gali se guzarte hue aati hai',
      'To anjaane mein tere saath bitaayi har subah aankhon mein tair jaati hai',
    ],
    linesEnglish: [
      'Whenever roasted coffee aroma drifts out from a narrow corner cafe',
      'Every unhurried morning we once shared swims straight across my mind',
    ],
  },
  {
    title: 'शब्द छोटे, यादें गहरी',
    titleEnglish: 'Few Words, Deepest Longing',
    linesHindi: [
      'मिस यू लिख देने से अंदर की तड़प पूरी कहाँ दिख पाती है',
      'यह तो तब समझ आता है जब सामने वाली तस्वीर को देर तक देखा जाए',
    ],
    linesHinglish: [
      'Miss you likh dene se andar ki tadap poori kahaan dikh paati hai',
      'Yeh to tab samajh aata hai jab saamne waali tasveer ko der tak dekha jaaye',
    ],
    linesEnglish: [
      'Typing two quick words like miss you barely scratches the surface',
      'Real longing hides in staring quietly at one favorite photo too long',
    ],
  },
  {
    title: 'हर मोड़ पर तुम्हारी सलाह',
    titleEnglish: 'Missing Your Honest Advice',
    linesHindi: [
      'जब भी कोई बड़ा फ़ैसला लेना होता है जीवन में अकेले खड़े होकर',
      'तो सबसे पहले सोचता हूँ कि तुम होते तो क्या रास्ता दिखाते',
    ],
    linesHinglish: [
      'Jab bhi koi bada faisla lena hota hai jeevan mein akele khade hokar',
      'To sabse pehle sochta hoon ki tum hote to kya raasta dikhaate',
    ],
    linesEnglish: [
      'Whenever a tough crossroads arrives while standing on my own',
      'My very first thought asks what wise move you would have suggested',
    ],
  },
  {
    title: 'नींद से जागने पर अधूरा सपना',
    titleEnglish: 'Half-Finished Dream at Dawn',
    linesHindi: [
      'आज सुबह आँख खुली तो लगा जैसे तुम यहीं पास बैठे थे मेरे',
      'पर करवट बदलते ही हक़ीक़त ने बताया कि सफ़र अभी बाकी है',
    ],
    linesHinglish: [
      'Aaj subah aankh khuli to laga jaise tum yahin paas baithe the mere',
      'Par karwat badalte hi hakeekat ne bataaya ki safar abhi baaqi hai',
    ],
    linesEnglish: [
      'Waking at dawn, for one drowsy second it felt like you sat right here',
      'Turning over gently reminded me you are still cities away right now',
    ],
  },
  {
    title: 'पायदान पर रखे अनगिनत इंतज़ार',
    titleEnglish: 'Countless Mornings Waiting Gently',
    linesHindi: [
      'सुबह अख़बार से ज़्यादा तुम्हारे एक मैसेज का इंतज़ार रहता है',
      'गुड मॉर्निंग आते ही लगता है दिन की असली शुरुआत अब हुई है',
    ],
    linesHinglish: [
      'Subah akhbaar se zyada tumhaare ek message ka intezaar rehta hai',
      'Good morning aate hi lagta hai din ki asli shuruaat ab hui hai',
    ],
    linesEnglish: [
      'More than morning headlines, I wait for one bright ping from you',
      'The instant your good morning lands, my day genuinely begins',
    ],
  },
  {
    title: 'लंच बॉक्स और घर का खाना',
    titleEnglish: 'Missing Home Kitchen Flavors',
    linesHindi: [
      'ऑफिस के डब्बे में आज भी सब कुछ बढ़िया पक कर आया था',
      'पर मम्मी के हाथ वाली रोटी की कमी कोई रसोई पूरी नहीं करती',
    ],
    linesHinglish: [
      'Office ke dabbe mein aaj bhi sab kuch badhiya pak kar aaya tha',
      'Par mummy ke haath waali roti ki kami koi rasoi poori nahin karti',
    ],
    linesEnglish: [
      'Even today’s lunch delivery packed tasty meals neatly in boxes',
      'Yet no chef on earth replaces missing the warmth of Mom’s kitchen',
    ],
  },
  {
    title: 'हवाई जहाज़ की तेज़ आवाज़',
    titleEnglish: 'Looking Up at Passing Planes',
    linesHindi: [
      'आसमान में उड़ते हर हवाई जहाज़ को देखकर दिल पूछता है चुपके से',
      'क्या इस बार इसमें बैठकर तुम मेरी तरफ़ लौट रहे हो यार',
    ],
    linesHinglish: [
      'Aasmaan mein udte har hawai jahaaz ko dekhkar dil poochhta hai chupke se',
      'Kya is baar ismein baithkar tum meri taraf laut rahe ho yaar',
    ],
    linesEnglish: [
      'Every time a plane hums high above evening rooftops, my heart wonders',
      'Could this be the flight finally bringing you right back to town',
    ],
  },
  {
    title: 'बिना तार का दिल से जुड़ाव',
    titleEnglish: 'Wireless Connection of Hearts',
    linesHindi: [
      'नेटवर्क कभी कमजोर भी पड़ जाए पहाड़ों या सफ़र के बीच में',
      'पर दिलों का सिग्नल तुम्हारे नाम पर हमेशा फुल रहता है',
    ],
    linesHinglish: [
      'Network kabhi kamzor bhi pad jaaye pahaadon ya safar ke beech mein',
      'Par dilon ka signal tumhaare naam par hamesha full rehta hai',
    ],
    linesEnglish: [
      'Mobile bars may flicker out across winding mountain highways',
      'Yet the quiet signal connecting my thoughts to you stays full strength',
    ],
  },
  {
    title: 'सफ़र की हर सीट पर खालीपन',
    titleEnglish: 'Empty Seat Beside Every Window',
    linesHindi: [
      'बस की खिड़की से गुज़रते पेड़-पौधे आज कुछ ज़्यादा सुंदर लगे',
      'मन ने बस एक ही कमी महसूस की कि काश तुम बगल में होते',
    ],
    linesHinglish: [
      'Bus ki khidki se guzarte ped-paudhe aaj kuch zyada sundar lage',
      'Mann ne bas ek hi kami mehsoos ki ki kaash tum bagal mein hote',
    ],
    linesEnglish: [
      'Green trees blurring past the bus window looked extra lovely today',
      'My only quiet wish was wishing you sat smiling in the seat beside me',
    ],
  },
  {
    title: 'छोटी सी मुलाकात की तलब',
    titleEnglish: 'Longing for One Brief Hello',
    linesHindi: [
      'हफ़्ते और महीने तो यूँ ही कैलेंडर पर बदलते रहते हैं यारो',
      'बस मन चाहता है कि एक शाम आमने-सामने बैठकर जी भर हँस लें',
    ],
    linesHinglish: [
      'Hafte aur maheene to yoon hi calendar par badalte rehte hain yaaro',
      'Bas mann chahta hai ki ek shaam aamne-saamne baithkar jee bhar hans lein',
    ],
    linesEnglish: [
      'Weeks and months slip quietly across wall calendars all on their own',
      'I just crave one real evening sitting across from you laughing out loud',
    ],
  },
  {
    title: 'अधूरा स्क्रीन और पूरी याद',
    titleEnglish: 'Video Call Screen Missing Touch',
    linesHindi: [
      'वीडियो कॉल पर तुम्हारा हँसता हुआ चेहरा बहुत प्यारा लगता है आज भी',
      'बस स्क्रीन को छूकर गले लगा पाने की कमी हर बार रह जाती है',
    ],
    linesHinglish: [
      'Video call par tumhaara hansta hua chehra bahut pyara lagta hai aaj bhi',
      'Bas screen ko chhookar gale laga paane ki kami har baar reh jaati hai',
    ],
    linesEnglish: [
      'Seeing your grin across video calls still brightens my whole evening',
      'Only wishing I could reach right past glass pixels for a real hug lingers',
    ],
  },
  {
    title: 'जन्मदिन नहीं, रोज़ की याद',
    titleEnglish: 'Missing You on Ordinary Days',
    linesHindi: [
      'ख़ास दिनों पर तो सारी दुनिया याद कर लेती है संदेश भेजकर',
      'असली याद तो मंगलवार की एक सामान्य सी शाम में सताती है',
    ],
    linesHinglish: [
      'Khaas dinon par to saari duniya yaad kar leti hai sandesh bhejkar',
      'Asli yaad to mangalvaar ki ek saamaanya si shaam mein sataati hai',
    ],
    linesEnglish: [
      'Anybody sends warm thoughts when holidays and birthdays roll around',
      'Real missing strikes quietly on an unremarkable Tuesday dusk',
    ],
  },
  {
    title: 'तुम्हारे लौटने का मीठा सपना',
    titleEnglish: 'Sweet Dream of Your Homecoming',
    linesHindi: [
      'जिस दिन तुम वापस आओगे उस दिन सारी थकान उतार दूँगा मैं',
      'घड़ी बंद करके बस घंटों तुम्हारी बातें सुनता रहूँगा बैठकर',
    ],
    linesHinglish: [
      'Jis din tum waapas aaoge us din saari thakaan utaar doonga main',
      'Ghadi band karke bas ghanton tumhaari baatein sunta rahoonga baithkar',
    ],
    linesEnglish: [
      'The day you finally walk back through that door, every sigh vanishes',
      'I will ignore every clock just to sit listening to your stories for hours',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'कप बोर्ड पर लिखा नाम',
    titleEnglish: 'Favorite Mug Waiting on Shelf',
    linesHindi: [
      'रसोई के शेल्फ़ पर तुम्हारा पसंदीदा कप अब भी अलग रखा हुआ है',
      'ताकि जिस दिन अचानक आओ, गरम चाय उसी में परोस सकूँ',
    ],
    linesHinglish: [
      'Rasoi ke shelf par tumhaara pasandeeda cup ab bhi alag rakha hua hai',
      'Taaki jis din achaanak aao, garam chai usi mein paros sakoon',
    ],
    linesEnglish: [
      'Your favorite painted mug still waits untouched on the kitchen shelf',
      'Ready to pour fresh hot tea the second you surprise me at the door',
    ],
  },
  {
    title: 'तालों में बंद नहीं होती यादें',
    titleEnglish: 'Memories Refusing Closed Doors',
    linesHindi: [
      'शहर बदल लेने से और घर के ताले बदल देने से क्या होता है',
      'यादें तो बिना दस्तक दिए भी सीधे दिल के कमरे में उतर आती हैं',
    ],
    linesHinglish: [
      'Shehar badal lene se aur ghar ke taale badal dene se kya hota hai',
      'Yaadein to bina dastak diye bhi seedhe dil ke kamre mein utar aati hain',
    ],
    linesEnglish: [
      'Changing postal codes or locking new apartment doors changes nothing',
      'Fond memories still step straight into the heart without knocking once',
    ],
  },
  {
    title: 'सन्नाटे में गूँजता नाम',
    titleEnglish: 'Name Echoing Through Dusk',
    linesHindi: [
      'जब शाम को घर की लाइटें जलने लगती हैं एक के बाद एक',
      'तब सबसे ज़्यादा तुम्हारी आवाज़ की गूँज कम महसूस होती है',
    ],
    linesHinglish: [
      'Jab shaam ko ghar ki lightein jalne lagti hain ek ke baad ek',
      'Tab sabse zyada tumhaari aawaz ki goonj kam mehsoos hoti hai',
    ],
    linesEnglish: [
      'As warm porch lights flicker on down the neighborhood one by one',
      'The missing echo of your voice inside this hallway grows clearest',
    ],
  },
  {
    title: 'खामोश आँखों की गुहार',
    titleEnglish: 'Quiet Eyes Hoping to Meet',
    linesHindi: [
      'बोलकर दिखाना मेरी आदत में कभी रहा ही नहीं शुरू से',
      'पर मेरी ख़ामोशी हर रोज़ बस तुम्हें ही पुकारती रहती है',
    ],
    linesHinglish: [
      'Bolkar dikhaana meri aadat mein kabhi raha hi nahin shuru se',
      'Par meri khaamoshi har roz bas tumhein hi pukaarti rehti hai',
    ],
    linesEnglish: [
      'Putting heavy longing into dramatic speeches was never my style',
      'Yet all of my quiet pauses still call out softly for your company',
    ],
  },
  {
    title: 'लम्हों की धीमी घड़ी',
    titleEnglish: 'Slow Clock Between Visits',
    linesHindi: [
      'जब तुम पास होते हो तो दिन पलक झपकते ही बीत जाते हैं',
      'और तुम्हारे जाने के बाद एक शाम भी हफ़्ते जैसी लंबी लगती है',
    ],
    linesHinglish: [
      'Jab tum paas hote ho to din palak jhapkate hi beet jaate hain',
      'Aur tumhaare jaane ke baad ek shaam bhi hafte jaisi lambi lagti hai',
    ],
    linesEnglish: [
      'Whole weeks vanish in an eye-blink whenever we spend time together',
      'Once you leave, even a single Tuesday evening stretches like seven days',
    ],
  },
  {
    title: 'भीगे पन्नों पर हल्की मुस्कान',
    titleEnglish: 'Gentle Grin Reading Old Notes',
    linesHindi: [
      'पुरानी डायरी के कोने में तुम्हारी लिखावट देखकर दिल खिल उठा',
      'कितना प्यारा वक़्त था जब हम हर बात कागज़ पर लिख दिया करते थे',
    ],
    linesHinglish: [
      'Puraani diary ke kone mein tumhaari likhaawat dekhkar dil khil utha',
      'Kitna pyara waqt tha jab hum har baat kaagaz par likh diya karte the',
    ],
    linesEnglish: [
      'Spotting your handwriting in an old notebook corner brightened my evening',
      'How lovely those days were when every thought lived neatly on paper',
    ],
  },
  {
    title: 'चहलपहल में सूनी जगह',
    titleEnglish: 'Quiet Corner Amidst Laughter',
    linesHindi: [
      'सब लोग हँस रहे हैं आज के डिनर पर एक साथ बैठकर',
      'पर एक कोना ऐसा है दिल का जहाँ सिर्फ़ तुम्हारी कमी बैठी है',
    ],
    linesHinglish: [
      'Sab log hans rahe hain aaj ke dinner par ek saath baithkar',
      'Par ek kona aisa hai dil ka jahaan sirf tumhaari kami baithi hai',
    ],
    linesEnglish: [
      'Friends laugh cheerfully around tonight’s bustling dinner table',
      'Yet one quiet corner in my chest keeps saving a spot for you',
    ],
  },
  {
    title: 'मीलों दूर से शुभ रात्रि',
    titleEnglish: 'Goodnight Whispered Across Miles',
    linesHindi: [
      'बिस्तर पर सोने जाते वक़्त हर रात एक ही दुआ निकलती है दिल से',
      'तुम जहाँ भी हो, सुकून से सोना और कल सुबह मुस्कुराकर उठना',
    ],
    linesHinglish: [
      'Bistar par sone jaate waqt har raat ek hi dua nikalti hai dil se',
      'Tum jahaan bhi ho, sukoon se sona aur kal subah muskuraakar uthna',
    ],
    linesEnglish: [
      'Every night turning off the lamp, one quiet wish drifts your way',
      'Sleep peacefully wherever you are and wake up smiling bright tomorrow',
    ],
  },
  {
    title: 'अधूरे सफ़र का हमराही',
    titleEnglish: 'Companion Missing on Long Drives',
    linesHindi: [
      'आज फिर वही सुनसान हाईवे और ढलते सूरज का नारंगी आसमान था',
      'गाड़ी तो पूरी स्पीड पर थी, पर दिल पुरानी यादों में अटका रहा',
    ],
    linesHinglish: [
      'Aaj phir wahi sunsaan highway aur dhalte sooraj ka naarangi aasmaan tha',
      'Gaadi to poori speed par thi, par dil puraani yaadon mein atka raha',
    ],
    linesEnglish: [
      'Open highway ahead under a glowing orange sunset sky again tonight',
      'The car cruised smooth and fast while my heart stayed parked beside you',
    ],
  },
  {
    title: 'भीड़ भरी मेट्रो में ख़्याल',
    titleEnglish: 'Daydreaming Inside Metro Rush',
    linesHindi: [
      'सुबह की भीड़ भरी मेट्रो में सब अपने फ़ोन में व्यस्त दिखते हैं',
      'और मैं खिड़की के बाहर देखते हुए तुम्हारे साथ वाली शामें गिनता हूँ',
    ],
    linesHinglish: [
      'Subah ki bheed bhari metro mein sab apne phone mein vyast dikhte hain',
      'Aur main khidki ke baahar dekhte hue tumhaare saath waali shaamein ginta hoon',
    ],
    linesEnglish: [
      'During morning metro rush everyone stares down at glowing screens',
      'While I gaze past window glass replaying quiet evenings spent with you',
    ],
  },
  {
    title: 'गुलाब की ख़ुशबू जैसा एहसास',
    titleEnglish: 'Lingering Trace Like Rose Scent',
    linesHindi: [
      'कुछ लोग गुलाब की ख़ुशबू की तरह होते हैं ज़िंदगी में यारो',
      'चाहे हाथ से चले जाएँ, पर हथेलियों में महक छोड़ जाते हैं',
    ],
    linesHinglish: [
      'Kuch log gulaab ki khushboo ki tarah hote hain zindagi mein yaaro',
      'Chaahe haath se chale jaayein, par hatheliyon mein mehak chhod jaate hain',
    ],
    linesEnglish: [
      'Some rare souls walk through our lives like fresh rose fragrance',
      'Long after stepping away, their warmth lingers gently across our palms',
    ],
  },
  {
    title: 'नए दोस्तों में पुरानी यारी',
    titleEnglish: 'Missing Old Bond Among New Faces',
    linesHindi: [
      'नए शहर में बहुत अच्छे और प्यारे लोग मिल गए हैं अब तो मुझे',
      'पर बचपन की आधी बात समझ जाने वाला कोई तुम जैसा नहीं मिला',
    ],
    linesHinglish: [
      'Naye shehar mein bahut achhe aur pyare log mil gaye hain ab to mujhe',
      'Par bachpan ki aadhi baat samajh jaane wala koi tum jaisa nahin mila',
    ],
    linesEnglish: [
      'I have met plenty of warm, kind people in this unfamiliar city already',
      'Still, nobody finishes my half-spoken sentences quite the way you do',
    ],
  },
  {
    title: 'तुम्हारी पसंद का गाना रेडियो पर',
    titleEnglish: 'Your Song Playing on City Radio',
    linesHindi: [
      'ट्रैफ़िक सिग्नल पर अचानक रेडियो ने तुम्हारा पसंदीदा गाना बजा दिया',
      'गाड़ी रुकी थी लाल बत्ती पर, और दिल पूरा सफ़र कर आया तुम्हारे पास',
    ],
    linesHinglish: [
      'Traffic signal par achaanak radio ne tumhaara pasandeeda gaana baja diya',
      'Gaadi ruki thi laal batti par, aur dil poora safar kar aaya tumhaare paas',
    ],
    linesEnglish: [
      'At a long red light, the car radio suddenly played your go-to song',
      'Traffic stayed frozen while my mind drove miles straight back to you',
    ],
  },
  {
    title: 'इंतज़ार से सजी दहलीज़',
    titleEnglish: 'Doorstep Dressed in Quiet Hope',
    linesHindi: [
      'दरवाज़े की दस्तक पर आज भी कान एकदम सतर्क हो जाते हैं मेरे',
      'शायद तुम बिना बताए आकर हँसते हुए सरप्राइज़ दे दो मुझे',
    ],
    linesHinglish: [
      'Darwaze ki dastak par aaj bhi kaan ekdum satark ho jaate hain mere',
      'Shaayad tum bina bataaye aakar hanste hue surprise de do mujhe',
    ],
    linesEnglish: [
      'My ears still perk up instantly at any sudden knock near the door',
      'Half-hoping you might appear smiling out of nowhere as a surprise',
    ],
  },
  {
    title: 'अजनबी रास्तों पर तेरा भरोसा',
    titleEnglish: 'Missing Your Calm Assurance',
    linesHindi: [
      'जब काम के दबाव में सिर भारी होने लगता है कभी-कभी',
      'तो तुम्हारी एक आवाज़ याद आती है, सब ठीक हो जाएगा चिंता मत कर',
    ],
    linesHinglish: [
      'Jab kaam ke dabaav mein sir bhaari hone lagta hai kabhi-kabhi',
      'To tumhaari ek aawaz yaad aati hai, sab theek ho jaayega chinta mat kar',
    ],
    linesEnglish: [
      'Whenever heavy work pressure leaves my head spinning late at night',
      'I miss hearing your calm voice promise everything will turn out fine',
    ],
  },
  {
    title: 'आँगन में बरसती पुरानी धूप',
    titleEnglish: 'Old Sunlight Across Empty Yard',
    linesHindi: [
      'सर्दियों की धूप में जब घर का आँगन खाली पड़ा दिखता है आज',
      'तो मूँगफली खाते हुए की गई हमारी सारी शरारतें याद आती हैं',
    ],
    linesHinglish: [
      'Sardiyon ki dhoop mein jab ghar ka aangan khaali pada dikhta hai aaj',
      'To moongphali khaate hue ki gayi hamaari saari sharaaratein yaad aati hain',
    ],
    linesEnglish: [
      'Looking out at our quiet courtyard bathed in pale winter sunshine',
      'Brings back every goofy prank we pulled shelling peanuts together',
    ],
  },
  {
    title: 'संदेश टाइप करके मिटाना',
    titleEnglish: 'Typing and Deleting Late Texts',
    linesHindi: [
      'कितनी बार रात को दो लाइनें लिखकर मिटा दीं तुम्हारी चैट में',
      'कि कहीं तुम गहरी नींद में होगे और मेरी वजह से जाग न जाओ',
    ],
    linesHinglish: [
      'Kitni baar raat ko do linein likhkar mita deen tumhaari chat mein',
      'Ki kahin tum gehri neend mein hoge aur meri wajah se jaag na jaao',
    ],
    linesEnglish: [
      'Countless midnights I typed two sweet lines then cleared the box quietly',
      'Worrying a glowing notification screen might wake you from deep rest',
    ],
  },
  {
    title: 'एक चेहरे में पूरी दुनिया',
    titleEnglish: 'One Face Holding Whole Worlds',
    linesHindi: [
      'दुनिया की सबसे खूबसूरत जगह देखने का शौक अब कम हो गया',
      'जब से समझ आया कि मेरा सारा सुकून सिर्फ़ तुम्हारे चेहरे में है',
    ],
    linesHinglish: [
      'Duniya ki sabse khoobsurat jagah dekhne ka shauk ab kam ho gaya',
      'Jab se samajh aaya ki mera saara sukoon sirf tumhaare chehre mein hai',
    ],
    linesEnglish: [
      'Chasing famous postcards around the globe lost half its appeal',
      'Once I realized my truest peace simply lives inside your smile',
    ],
  },
  {
    title: 'पसंदीदा फूल देख कर ठहरना',
    titleEnglish: 'Pausing Before Your Favorite Blooms',
    linesHindi: [
      'सड़क किनारे पीले फूल खिले देखकर आज गाड़ी रोक दी मैंने',
      'तुम पास होते तो ज़रूर एक तस्वीर लेने को कहते मुस्कुराते हुए',
    ],
    linesHinglish: [
      'Sadak kinaare peele phool khile dekhkar aaj gaadi rok di maine',
      'Tum paas hote to zaroor ek tasveer lene ko kehte muskuraate hue',
    ],
    linesEnglish: [
      'Spotting bright yellow marigolds along the roadside made me pull over',
      'If you were riding beside me, you would insist on stopping for photos',
    ],
  },
  {
    title: 'फ़ासलों से न कम होने वाला प्यार',
    titleEnglish: 'Love Unshrunk by Distance',
    linesHindi: [
      'कहते हैं नज़रों से दूर होने पर रिश्ते थोड़े ठंडे पड़ जाते हैं',
      'पर तुम्हारे दूर जाने के बाद तो प्यार और भी गहरा हो गया है',
    ],
    linesHinglish: [
      'Kehte hain nazron se door hone par rishte thode thande pad jaate hain',
      'Par tumhaare door jaane ke baad to pyar aur bhi gehra ho gaya hai',
    ],
    linesEnglish: [
      'People claim out of sight slowly cools down even close connections',
      'Yet ever since miles stepped between us, caring for you only deepened',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'दोस्त के बिना अधूरी ट्रिप',
    titleEnglish: 'Road Trip Incomplete Without You',
    linesHindi: [
      'पहाड़ों की वादियाँ भी आज थोड़ा उदास दिख रही थीं सुबह से',
      'क्योंकि इस बार बैकपैक लिए मेरा सबसे पागल दोस्त साथ नहीं था',
    ],
    linesHinglish: [
      'Pahaadon ki waadiyaan bhi aaj thoda udaas dikh rahi theen subah se',
      'Kyunki is baar backpack liye mera sabse paagal dost saath nahin tha',
    ],
    linesEnglish: [
      'Even misty mountain valleys seemed noticeably quieter since sunrise',
      'Because this trip missed my craziest friend laughing right behind me',
    ],
  },
  {
    title: 'खामोश रात, खुला संदेश बॉक्स',
    titleEnglish: 'Silent Night, Open Chat Window',
    linesHindi: [
      'नींद आँखों से कोसों दूर हो जब आधी रात के बाद कभी',
      'तो तुम्हारी पुरानी चैट ही सबसे अच्छी दोस्त बनकर पास बैठती है',
    ],
    linesHinglish: [
      'Neend aankhon se koson door ho jab aadhi raat ke baad kabhi',
      'To tumhaari puraani chat hi sabse achhi dost bankar paas baithti hai',
    ],
    linesEnglish: [
      'When sleep stays stubbornly far past two o’clock in the morning',
      'Reading back through our old thread sits beside me like an old friend',
    ],
  },
  {
    title: 'आख़िरी बस स्टैंड की याद',
    titleEnglish: 'Memory at the Last Bus Stop',
    linesHindi: [
      'जिस बस स्टैंड पर खड़े होकर हमने घंटों बारिश रुकने का इंतज़ार किया था',
      'आज वहाँ से गुज़रते हुए वह भीगा हुआ दिन फिर याद आ गया',
    ],
    linesHinglish: [
      'Jis bus stand par khade hokar humne ghanton baarish rukne ka intezaar kiya tha',
      'Aaj wahaan se guzarte hue woh bheega hua din phir yaad aa gaya',
    ],
    linesEnglish: [
      'Driving past the sheltered bus stop where we waited out heavy rain',
      'Brought back that entire soaked, laughing afternoon in a flash',
    ],
  },
  {
    title: 'तेरी आवाज़ की गर्माहट',
    titleEnglish: 'Warmth Carried in Your Voice',
    linesHindi: [
      'हज़ार मोटिवेशनल बातें एक तरफ़ और तेरा एक हेलो दूसरी तरफ़',
      'तू बोल देता है तो अंदर की सारी बेचैनी दो सेकंड में शांत हो जाती है',
    ],
    linesHinglish: [
      'Hazaar motivational baatein ek taraf aur tera ek hello doosri taraf',
      'Tu bol deta hai to andar ki saari bechaini do second mein shaant ho jaati hai',
    ],
    linesEnglish: [
      'A thousand pep talks cannot match one warm hello from your end',
      'The second you speak, every anxious knot inside untangles instantly',
    ],
  },
  {
    title: 'अधूरी पहेली का गुम हिस्सा',
    titleEnglish: 'Missing Piece of Today’s Puzzle',
    linesHindi: [
      'सब कुछ समय पर हो रहा है और दिन भी ठीक ही गुज़र रहा है',
      'बस एक तुम्हारे बिना आज की तस्वीर कुछ अधूरी सी लग रही है',
    ],
    linesHinglish: [
      'Sab kuch samay par ho raha hai aur din bhi theek hi guzar raha hai',
      'Bas ek tumhaare bina aaj ki tasveer kuch adhoori si lag rahi hai',
    ],
    linesEnglish: [
      'Tasks get finished smoothly and the workday moves along fine',
      'Still, without you here, the whole picture feels missing its centerpiece',
    ],
  },
  {
    title: 'चाँद को भेजा संदेश',
    titleEnglish: 'Note Sent Up to the Moon',
    linesHindi: [
      'आज छत पर खड़े होकर मैंने चाँद से तुम्हारा हाल पूछ लिया',
      'क्योंकि वह बिना किसी टिकट के तुम्हारे शहर से भी गुज़रता है',
    ],
    linesHinglish: [
      'Aaj chhat par khade hokar maine chaand se tumhaara haal poochh liya',
      'Kyunki woh bina kisi ticket ke tumhaare shehar se bhi guzarta hai',
    ],
    linesEnglish: [
      'Standing on the rooftop tonight, I asked the bright moon how you are',
      'Since it drifts cleanly across your city sky too without needing a pass',
    ],
  },
  {
    title: 'सुबह की ठंडी ओस में याद',
    titleEnglish: 'Morning Dew Carrying Your Thought',
    linesHindi: [
      'ताज़ी घास पर जमी ओस को देखकर आज फिर से मन भर आया',
      'बचपन के गाँव वाली सुबह और घर के सब लोग बहुत याद आए',
    ],
    linesHinglish: [
      'Taazi ghaas par jami os ko dekhkar aaj phir se mann bhar aaya',
      'Bachpan ke gaanv waali subah aur ghar ke sab log bahut yaad aaye',
    ],
    linesEnglish: [
      'Spotting fresh morning dew across park grass softened my heart today',
      'Making me miss crisp village dawns and everyone gathered back home',
    ],
  },
  {
    title: 'तुम्हारे बिना खाली शामें',
    titleEnglish: 'Evenings Too Quiet Without You',
    linesHindi: [
      'सुबह तो काम की भागदौड़ में पता ही नहीं चलता कि वक़्त कैसे बीता',
      'असली इम्तिहान तो शाम छह बजे के बाद शुरू होता है जब घर लौटता हूँ',
    ],
    linesHinglish: [
      'Subah to kaam ki bhaagdaud mein pata hi nahin chalta ki waqt kaise beeta',
      'Asli imtihaan to shaam chhah baje ke baad shuru hota hai jab ghar laut-ta hoon',
    ],
    linesEnglish: [
      'Busy mornings fly past cleanly inside back-to-back chores and errands',
      'The real test begins after six when walking into a quiet apartment',
    ],
  },
  {
    title: 'पसंदीदा किताबों में नाम',
    titleEnglish: 'Bookmark Resting Inside Old Reads',
    linesHindi: [
      'मेरी हर किताब में आज भी तुम्हारा दिया वह बुकमार्क रखा है',
      'जहाँ से कहानी पढ़ना शुरू करता हूँ, पहले तुम्हारी याद खुलती है',
    ],
    linesHinglish: [
      'Meri har kitaab mein aaj bhi tumhaara diya woh bookmark rakha hai',
      'Jahaan se kahaani padhna shuru karta hoon, pehle tumhaari yaad khulti hai',
    ],
    linesEnglish: [
      'That handmade bookmark you gifted still holds my spot in every book',
      'Every time I open a page, memories of you open right before the plot',
    ],
  },
  {
    title: 'यादें जो मुस्कुराहट लाएँ',
    titleEnglish: 'Memories Bringing Quiet Grins',
    linesHindi: [
      'अचानक काम करते-करते होंठों पर एक हल्की मुस्कान आ जाती है',
      'लोग पूछते हैं क्या हुआ, कैसे बताऊँ तुम्हारी कोई बात याद आ गई',
    ],
    linesHinglish: [
      'Achaanak kaam karte-karte honthon par ek halki muskaan aa jaati hai',
      'Log poochhte hain kya hua, kaise bataaun tumhaari koi baat yaad aa gayi',
    ],
    linesEnglish: [
      'Out of nowhere a soft grin breaks out while staring at spreadsheets',
      'Coworkers ask what is funny—hard to explain one memory of you hit',
    ],
  },
  {
    title: 'अजनबी भीड़ में अपनापन',
    titleEnglish: 'Warmth Amidst Unfamiliar Faces',
    linesHindi: [
      'दुनिया में बहुत से लोग नाम और चेहरा पहचानते हैं मेरा अब',
      'पर दिल के अंदर झांककर पढ़ने वाला इंसान तुमसे दूर कहीं है',
    ],
    linesHinglish: [
      'Duniya mein bahut se log naam aur chehra pehchaante hain mera ab',
      'Par dil ke andar jhaankkar padhne waala insaan tumse door kahin hai',
    ],
    linesEnglish: [
      'Dozens of acquaintances recognize my face and shake hands daily',
      'Yet the one soul who truly reads my silence sits miles across the map',
    ],
  },
  {
    title: 'रब से जल्दी मिलने की दुआ',
    titleEnglish: 'Wishing Time Speeds Up Soon',
    linesHindi: [
      'कागज़ के पन्नों से ज़्यादा तेज़ पलट जाएँ ये दूरी वाले दिन अब',
      'बस इतनी सी प्रार्थना है कि अगली मुलाक़ात बहुत करीब आ जाए',
    ],
    linesHinglish: [
      'Kaagaz ke pannon se zyada tez palat jaayein yeh doori waale din ab',
      'Bas itni si prarthana hai ki agli mulaakaat bahut kareeb aa jaaye',
    ],
    linesEnglish: [
      'May these long days of distance flip past faster than paper pages',
      'My only wish is pulling our very next reunion right around the corner',
    ],
  },
  {
    title: 'दिल के कोने में बजती धुन',
    titleEnglish: 'Melody Playing Softly Inside',
    linesHindi: [
      'बाहर शहर में चाहे कितना भी हॉर्न और ट्रैफ़िक का शोर हो',
      'मेरे भीतर आज भी तुम्हारी मीठी आवाज़ का संगीत बजता रहता है',
    ],
    linesHinglish: [
      'Baahar shehar mein chaahe kitna bhi horn aur traffic ka shor ho',
      'Mere bheetar aaj bhi tumhaari meethi aawaz ka sangeet bajta rehta hai',
    ],
    linesEnglish: [
      'No matter how fiercely city horns blare along crowded avenues',
      'Inside my chest a quiet tune made of your voice still plays smoothly',
    ],
  },
  {
    title: 'त्योहार पर घर की खाली कुर्सी',
    titleEnglish: 'Festival Morning Missing You Home',
    linesHindi: [
      'दिवाली पर सारा घर रंगीन झालरों से चमक रहा है बाहर से',
      'पर तुम घर नहीं आ पाए इसलिए आँगन में आधी ही रौनक है',
    ],
    linesHinglish: [
      'Diwali par saara ghar rangeen jhaalaron se chamak raha hai baahar se',
      'Par tum ghar nahin aa paaye isliye aangan mein aadhi hi raunak hai',
    ],
    linesEnglish: [
      'Fairy lights glitter from every balcony across the house tonight',
      'Yet because work kept you away, our courtyard feels half as bright',
    ],
  },
  {
    title: 'सुकून भरा पुराना वक़्त',
    titleEnglish: 'Missing Easy Unhurried Days',
    linesHindi: [
      'वो दिन भी क्या गज़ब थे जब हम बिना घड़ी देखे घंटों बैठते थे',
      'अब पाँच मिनट बात करने के लिए भी दोनों को समय निकालना पड़ता है',
    ],
    linesHinglish: [
      'Woh din bhi kya gazab the jab hum bina ghadi dekhe ghanton baithte the',
      'Ab paanch minute baat karne ke liye bhi dono ko samay nikaalna padta hai',
    ],
    linesEnglish: [
      'How priceless those afternoons were when we hung out without checking clocks',
      'Now even squeezing five minutes to chat demands careful scheduling',
    ],
  },
  {
    title: 'आँखों की पुतलियों में बसे तुम',
    titleEnglish: 'Living Right Behind My Eyes',
    linesHindi: [
      'कौन कहता है कि तुम मुझसे बहुत दूर रहते हो आजकल यार',
      'आँखें बंद करते ही सबसे पहले तुम ही तो सामने आ जाते हो',
    ],
    linesHinglish: [
      'Kaun kehta hai ki tum mujhse bahut door rehte ho aajkal yaar',
      'Aankhein band karte hi sabse pehle tum hi to saamne aa jaate ho',
    ],
    linesEnglish: [
      'Whoever claims you stay far away from me clearly does not see',
      'The second my eyelids drop shut, you stand right in front of me',
    ],
  },
  {
    title: 'चाय और पकौड़ों वाली कमी',
    titleEnglish: 'Rainy Snacks Missing Company',
    linesHindi: [
      'बाहर झमाझम बारिश बरस रही है और मेज़ पर गरम चाय रखी है',
      'बस एक तुम सामने होते तो यह मौसम सौ गुना हसीन हो जाता',
    ],
    linesHinglish: [
      'Baahar jhamaajham baarish baras rahi hai aur mez par garam chai rakhi hai',
      'Bas ek tum saamne hote to yeh mausam sau guna haseen ho jaata',
    ],
    linesEnglish: [
      'Rain drums warmly outdoors while steaming tea rests beside the window',
      'Only having you sitting opposite would make this weather a hundred times sweeter',
    ],
  },
  {
    title: 'बिछड़ना सिर्फ़ नक़्शे की बात',
    titleEnglish: 'Apart Only Across Maps',
    linesHindi: [
      'ट्रेन की पटरी चाहे दो अलग शहरों में ले जाए हम दोनों को',
      'पर दिल के अंदर का रास्ता हमेशा एक ही दरवाज़े पर रुकता है',
    ],
    linesHinglish: [
      'Train ki patri chaahe do alag shehron mein le jaaye hum dono ko',
      'Par dil ke andar ka raasta hamesha ek hi darwaze par rukta hai',
    ],
    linesEnglish: [
      'Steel tracks may pull our journeys into completely opposite towns',
      'Yet the quiet footpath inside my heart always stops right at your door',
    ],
  },
  {
    title: 'तेरी ख़ामोशी की याद',
    titleEnglish: 'Missing Even Quiet Companionableness',
    linesHindi: [
      'कमाल तो यह था कि जब हम दोनों चुप भी रहते थे साथ बैठकर',
      'तब भी एक अलग ही सुकून महसूस होता था जो आजकल नहीं मिलता',
    ],
    linesHinglish: [
      'Kamaal to yeh tha ki jab hum dono chup bhi rehte the saath baithkar',
      'Tab bhi ek alag hi sukoon mehsoos hota tha jo aajkal nahin milta',
    ],
    linesEnglish: [
      'The magic was sitting silently together without uttering a single syllable',
      'And still feeling a deep comfort I cannot find anywhere else lately',
    ],
  },
  {
    title: 'दिल की डोर तुमसे बंधी',
    titleEnglish: 'Heart Tied Firmly to Yours',
    linesHindi: [
      'हवा चाहे पूरब चले या पश्चिम दिशा की तरफ़ मुड़ जाए शाम को',
      'मेरी हर याद का सिरा आकर हमेशा तुम्हीं से जुड़ जाता है',
    ],
    linesHinglish: [
      'Hawa chaahe poorab chale ya pashchim disha ki taraf mud jaaye shaam ko',
      'Meri har yaad ka sira aakar hamesha tumhin se jud jaata hai',
    ],
    linesEnglish: [
      'Whether winds sweep east or turn gently west toward dusk',
      'Every wandering memory of mine still circles right back around you',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'पुराने मैसेज का सुकून',
    titleEnglish: 'Comfort in Re-reading Old Texts',
    linesHindi: [
      'जब बहुत ज़्यादा याद सताए और तुम किसी मीटिंग में व्यस्त रहो',
      'तो तुम्हारे पुराने गुड मॉर्निंग पढ़कर ही मन को बहला लेता हूँ',
    ],
    linesHinglish: [
      'Jab bahut zyada yaad sataaye aur tum kisi meeting mein vyast raho',
      'To tumhaare puraane good morning padhkar hi mann ko behla leta hoon',
    ],
    linesEnglish: [
      'When missing you hits hard while you are stuck inside back-to-back calls',
      'I scroll up to reread your cheerful morning texts just to feel close',
    ],
  },
  {
    title: 'आसमान के तारे गिनते हुए',
    titleEnglish: 'Counting Night Stars Remembering You',
    linesHindi: [
      'बालकनी में खड़े होकर रात के तारे देखना अब आदत बन गई है',
      'क्योंकि हर चमकते तारे में तुम्हारी प्यारी मुस्कान दिख जाती है',
    ],
    linesHinglish: [
      'Balcony mein khade hokar raat ke taare dekhna ab aadat ban gayi hai',
      'Kyunki har chamakte taare mein tumhaari pyari muskaan dikh jaati hai',
    ],
    linesEnglish: [
      'Stepping out onto the dark balcony to gaze at stars has turned habitual',
      'Because every bright twinkle reminds me softly of your warm grin',
    ],
  },
  {
    title: 'अधूरी बात, पूरा एहसास',
    titleEnglish: 'Brief Ping, Endless Warmth',
    linesHindi: [
      'पूरे दिन की थकान पल भर में उड़ जाती है सिर्फ़ इतना पढ़ने से',
      'जब तुम लिख देते हो, घर पहुँच गया क्या, ध्यान रखना अपना',
    ],
    linesHinglish: [
      'Poore din ki thakaan pal bhar mein ud jaati hai sirf itna padhne se',
      'Jab tum likh dete ho, ghar pahunch gaya kya, dhyaan rakhna apna',
    ],
    linesEnglish: [
      'An entire day’s exhaustion evaporates the second three words appear',
      'Did you reach safely yet, take care—written kindly by you',
    ],
  },
  {
    title: 'दोस्त के जाने से सूनी गली',
    titleEnglish: 'Empty Street Without Childhood Friend',
    linesHindi: [
      'शाम को गली में बच्चे खेलते दिखते हैं आज भी पहले की तरह',
      'पर बचपन के दोस्त के बिना वह पूरी सड़क खाली-खाली लगती है',
    ],
    linesHinglish: [
      'Shaam ko gali mein bachche khelte dikhte hain aaj bhi pehle ki tarah',
      'Par bachpan ke dost ke bina woh poori sadak khaali-khaali lagti hai',
    ],
    linesEnglish: [
      'Neighborhood kids still shout and play down the lane at sunset',
      'Yet without my childhood best friend around, the street feels quiet',
    ],
  },
  {
    title: 'दूरी सिखाती है क़द्र करना',
    titleEnglish: 'Distance Teaches True Value',
    linesHindi: [
      'जब रोज़ मिलते थे तो साथ होने की कीमत इतनी समझ नहीं आती थी',
      'फ़ासलों ने सिखा दिया कि एक मुलाक़ात कितनी अनमोल होती है',
    ],
    linesHinglish: [
      'Jab roz milte the to saath hone ki keemat itni samajh nahin aati thi',
      'Faaslon ne sikha diya ki ek mulaakaat kitni anmol hoti hai',
    ],
    linesEnglish: [
      'Seeing each other daily hid how precious effortless company really was',
      'Distance quietly taught me how priceless even one shared coffee is',
    ],
  },
  {
    title: 'मेरी हर कहानी तुमसे जुड़ी',
    titleEnglish: 'Every Tale Links Back to You',
    linesHindi: [
      'चाहे नई जगह घूमने जाऊँ या कोई नई डिश चख कर देखूँ आज',
      'मन में पहला विचार यही आता है कि तुम्हें यह बहुत पसंद आती',
    ],
    linesHinglish: [
      'Chaahe nayi jagah ghoomne jaaun ya koi nayi dish chakh kar dekhoon aaj',
      'Mann mein pehla vichaar yahi aata hai ki tumhein yeh bahut pasand aati',
    ],
    linesEnglish: [
      'Whether exploring a scenic overlook or tasting something delicious',
      'My first quiet thought always goes, you would have adored this spot',
    ],
  },
  {
    title: 'तकिये के नीचे रखा ख्वाब',
    titleEnglish: 'Sweet Hopes Under the Pillow',
    linesHindi: [
      'रात को नींद न आए तो बस यही सोचकर आँखें बंद कर लेता हूँ',
      'कि शायद सपने में ही सही, आज तुमसे थोड़ी सी मुलाक़ात हो जाए',
    ],
    linesHinglish: [
      'Raat ko neend na aaye to bas yahi sochkar aankhein band kar leta hoon',
      'Ki shaayad sapne mein hi sahi, aaj tumse thodi si mulaakaat ho jaaye',
    ],
    linesEnglish: [
      'When sleep skips midnight, I gently close my eyes with one small hope',
      'Maybe inside a kind dream tonight, we can catch up smiling together',
    ],
  },
  {
    title: 'कागज़ पर अनजाने में नाम',
    titleEnglish: 'Doodling Initials During Calls',
    linesHindi: [
      'मीटिंग के दौरान खाली डायरी पर पेन अपने आप चलने लगता है',
      'और पन्ने के कोने में फिर से तेरा ही नाम लिख देता है',
    ],
    linesHinglish: [
      'Meeting ke dauraan khaali diary par pen apne aap chalne lagta hai',
      'Aur panne ke kone mein phir se tera hi naam likh deta hai',
    ],
    linesEnglish: [
      'During dull afternoon meetings, my pen wanders absentmindedly across paper',
      'And fills the margin corners once more with your familiar initials',
    ],
  },
  {
    title: 'घर के गेट पर इंतज़ार',
    titleEnglish: 'Looking Toward the Front Gate',
    linesHindi: [
      'बाहर कोई भी कार आकर रुकती है गली के मोड़ पर शाम को',
      'तो दिल में एक उम्मीद सी जागती है कि कहीं तुम तो नहीं आए',
    ],
    linesHinglish: [
      'Baahar koi bhi car aakar rukti hai gali ke mod par shaam ko',
      'To dil mein ek ummeed si jaagti hai ki kahin tum to nahin aaye',
    ],
    linesEnglish: [
      'Whenever headlights slow down outside near the corner turn at dusk',
      'A hopeful flutter asks silently if that might finally be your cab',
    ],
  },
  {
    title: 'यादें हैं तो तन्हाई नहीं',
    titleEnglish: 'Never Alone With Your Memories',
    linesHindi: [
      'लोग कहते हैं अकेले कमरे में इंसान बहुत उदास हो जाता है',
      'उन्हें क्या पता तुम्हारी मीठी यादें मेरे साथ हर वक़्त रहती हैं',
    ],
    linesHinglish: [
      'Log kehte hain akele kamre mein insaan bahut udaas ho jaata hai',
      'Unhein kya pata tumhaari meethi yaadein mere saath har waqt rehti hain',
    ],
    linesEnglish: [
      'Folks warn that living in an empty apartment grows lonely fast',
      'Little do they know your warm memories keep lively company right beside me',
    ],
  },
  {
    title: 'तुम्हारी आवाज़ की मिठास',
    titleEnglish: 'Missing the Softness of Your Voice',
    linesHindi: [
      'फ़ोन पर तुम चाहे बस दो ही बातें करके रख दो व्यस्त होने पर',
      'पर तुम्हारी आवाज़ में बसी मिठास पूरे हफ्ते की ऊर्जा दे जाती है',
    ],
    linesHinglish: [
      'Phone par tum chaahe bas do hi baatein karke rakh do vyast hone par',
      'Par tumhaari aawaz mein basi mithaas poore hafte ki oorja de jaati hai',
    ],
    linesEnglish: [
      'Even if a tight schedule cuts our phone chat down to two sentences',
      'The gentle warmth inside your tone fuels my whole week ahead',
    ],
  },
  {
    title: 'फूलों के बाज़ार में याद',
    titleEnglish: 'Remembering You Near Flower Stalls',
    linesHindi: [
      'सुबह-सुबह फूलों की दुकान के पास से निकलते ही याद आ गए तुम',
      'तुम्हें ताज़े मोगरे की ख़ुशबू कितनी ज़्यादा पसंद थी हमेशा से',
    ],
    linesHinglish: [
      'Subah-subah phoolon ki dukaan ke paas se nikalte hi yaad aa gaye tum',
      'Tumhein taaze mogre ki khushboo kitni zyada pasand thi hamesha se',
    ],
    linesEnglish: [
      'Walking past morning jasmine stalls instantly brought you to mind',
      'Remembering how deeply you always loved fresh white blossoms',
    ],
  },
  {
    title: 'स्क्रीन से ज़्यादा असली मुस्कान',
    titleEnglish: 'Missing Real Laughs Beyond Glass',
    linesHindi: [
      'इमोजी और स्टिकर भी अपना काम बख़ूबी कर देते हैं चैट बॉक्स में',
      'पर सामने बैठकर तुम्हारी आँखों की चमक देखने की बात ही कुछ और है',
    ],
    linesHinglish: [
      'Emoji aur sticker bhi apna kaam bakhoobi kar dete hain chat box mein',
      'Par saamne baithkar tumhaari aankhon ki chamak dekhne ki baat hi kuch aur hai',
    ],
    linesEnglish: [
      'Laughing emojis and playful stickers try hard inside text threads',
      'Yet nothing beats catching that genuine sparkle in your eyes across a table',
    ],
  },
  {
    title: 'सपनों के शहर में घर की सुगंध',
    titleEnglish: 'Longing for Home Scent in Big City',
    linesHindi: [
      'बड़े शहर की दौड़ में आगे तो बढ़ रहे हैं धीरे-धीरे हम सब',
      'पर कभी-कभी शाम को माँ की गोद और घर का आँगन बहुत याद आता है',
    ],
    linesHinglish: [
      'Bade shehar ki daud mein aage to badh rahe hain dheere-dheere hum sab',
      'Par kabhi-kabhi shaam ko maa ki god aur ghar ka aangan bahut yaad aata hai',
    ],
    linesEnglish: [
      'We keep climbing steadily through the bright rush of big cities',
      'Yet some dusk hours ache deeply for Mom’s warmth and home’s open yard',
    ],
  },
  {
    title: 'समय से तेज़ दौड़ती याद',
    titleEnglish: 'Thought Outrunning Every Clock',
    linesHindi: [
      'हवाई जहाज़ भी कई घंटे लगाता है दो शहरों को जोड़ने में',
      'पर तुम्हारी याद एक सेकंड से भी कम वक़्त में मेरे पास आ जाती है',
    ],
    linesHinglish: [
      'Hawai jahaaz bhi kai ghante lagaata hai do shehron ko jodne mein',
      'Par tumhaari yaad ek second se bhi kam waqt mein mere paas aa jaati hai',
    ],
    linesEnglish: [
      'Even fast jets take hours crossing between two distant airports',
      'Yet one thought of you lands inside my heart in under half a second',
    ],
  },
  {
    title: 'छुट्टी का दिन, अधूरी गप्पें',
    titleEnglish: 'Day Off Missing Our Catch-Ups',
    linesHindi: [
      'छुट्टी के दिन पहले एक फोन से पूरा प्लान बन जाया करता था',
      'अब वही खाली दिन तुम्हारी यादों के नाम होकर गुज़र जाता है',
    ],
    linesHinglish: [
      'Chhutti ke din pehle ek phone se poora plan ban jaaya karta tha',
      'Ab wahi khaali din tumhaari yaadon ke naam hokar guzar jaata hai',
    ],
    linesEnglish: [
      'Holidays once started with one fast call turning into spontaneous plans',
      'Now that quiet afternoon drifts gently past wrapped in your memories',
    ],
  },
  {
    title: 'दिल की धड़कन में इंतज़ार',
    titleEnglish: 'Patient Waiting Inside My Pulse',
    linesHindi: [
      'इंतज़ार थोड़ा थकाने वाला ज़रूर होता है कई बार राह देखते हुए',
      'पर जब सामने तुम्हारा प्यारा चेहरा हो तो हर पल जायज़ लगता है',
    ],
    linesHinglish: [
      'Intezaar thoda thakaane waala zaroor hota hai kai baar raah dekhte hue',
      'Par jab saamne tumhaara pyara chehra ho to har pal jaayaz lagta hai',
    ],
    linesEnglish: [
      'Counting quiet days apart can occasionally tire the heart a little',
      'Yet knowing your bright smile waits ahead makes every hour worthwhile',
    ],
  },
  {
    title: 'मेरी दुआ में तेरा सुकून',
    titleEnglish: 'Wishing You Calm From Afar',
    linesHindi: [
      'पास न रहकर भी हर पल तुम्हारी खैरियत माँगता रहता हूँ रब से',
      'तुम खुश रहो, मेरी आधी यादों को इसी बात से चैन मिल जाता है',
    ],
    linesHinglish: [
      'Paas na rehkar bhi har pal tumhaari khairiyat maangta rehta hoon rab se',
      'Tum khush raho, meri aadhi yaadon ko isi baat se chain mil jaata hai',
    ],
    linesEnglish: [
      'Even across miles, my quiet prayers ask heaven for your well-being',
      'Knowing you are safe and smiling brings instant calm to half my longing',
    ],
  },
  {
    title: 'चाय की प्याली, तेरी कमी',
    titleEnglish: 'Warm Cup Missing Your Company',
    linesHindi: [
      'तुलसी और अदरक वाली चाय में स्वाद तो बिल्कुल वैसा ही है आज',
      'बस पीने के बाद किससे कहूँ अच्छी बनी है, यही कमी रह जाती है',
    ],
    linesHinglish: [
      'Tulsi aur adrak waali chai mein swaad to bilkul waisa hi hai aaj',
      'Bas peene ke baad kisse kahoon achhi bani hai, yahi kami reh jaati hai',
    ],
    linesEnglish: [
      'Ginger and basil tea brewed to the exact rich flavor this evening',
      'Only wondering whom to glance at smiling over the taste stays missing',
    ],
  },
  {
    title: 'फिर मिलने की मीठी आस',
    titleEnglish: 'Sweet Hope of Meeting Soon',
    linesHindi: [
      'आज भले ही फ़ोन की स्क्रीन से काम चलाना पड़ रहा हो हम दोनों को',
      'पर जल्द ही वह दिन आएगा जब बिना घड़ी देखे हम साथ बैठेंगे',
    ],
    linesHinglish: [
      'Aaj bhale hi phone ki screen se kaam chalaana pad raha ho hum dono ko',
      'Par jald hi woh din aayega jab bina ghadi dekhe hum saath baithenge',
    ],
    linesEnglish: [
      'Even if glowing phone screens hold us together right now across cities',
      'Soon enough we will sit face to face forgetting every clock exists',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'गली की पुरानी बेंच',
    titleEnglish: 'Our Old Neighborhood Park Bench',
    linesHindi: [
      'पार्क की उस नीली बेंच पर आज कोई और दो दोस्त बैठे हँस रहे थे',
      'उन्हें देखकर अपनी पुरानी शामें और तुम्हारे क़िस्से याद आ गए',
    ],
    linesHinglish: [
      'Park ki us neeli bench par aaj koi aur do dost baithe hans rahe the',
      'Unhein dekhkar apni puraani shaamein aur tumhaare kisse yaad aa gaye',
    ],
    linesEnglish: [
      'Two new friends sat laughing on our favorite blue park bench today',
      'Seeing them brought back all our careless dusk stories in a rush',
    ],
  },
  {
    title: 'रात के सन्नाटे में तस्वीर',
    titleEnglish: 'Holding Your Photo in Quiet Nights',
    linesHindi: [
      'कमरे की बत्ती बुझते ही सारा दिन आँखों के सामने घूम जाता है',
      'और आखिरी ख़्याल हमेशा तुम्हारी मुस्कान पर आकर ठहरता है',
    ],
    linesHinglish: [
      'Kamre ki batti bujhte hi saara din aankhon ke saamne ghoom jaata hai',
      'Aur aakhiri khayaal hamesha tumhaari muskaan par aakar theharta hai',
    ],
    linesEnglish: [
      'Once bedroom lights switch off, the busy day winds cleanly down',
      'And my very last wakeful thought always rests peacefully on your smile',
    ],
  },
  {
    title: 'पसंदीदा रंग देख कर मुस्कुराना',
    titleEnglish: 'Smiling at Your Favorite Color',
    linesHindi: [
      'बाज़ार में आसमानी रंग का कुर्ता देखते ही कदम ठिठक गए आज',
      'क्योंकि मुझे तुरंत याद आया कि यह रंग तुम पर कितना जँचता है',
    ],
    linesHinglish: [
      'Baazaar mein aasmaani rang ka kurta dekhte hi kadam thithak gaye aaj',
      'Kyunki mujhe turant yaad aaya ki yeh rang tum par kitna janchta hai',
    ],
    linesEnglish: [
      'Spotting a crisp sky-blue shirt in a shop window stopped my steps today',
      'Instantly remembering how effortlessly that shade lights up your face',
    ],
  },
  {
    title: 'अधूरी बात पूरी करने आना',
    titleEnglish: 'Come Back to Finish Our Talk',
    linesHindi: [
      'पिछली मुलाक़ात में आधी बातें तो जल्दबाज़ी में छूट ही गई थीं',
      'अगली बार जब आओ तो कम से कम दो दिन का खाली वक़्त लेकर आना',
    ],
    linesHinglish: [
      'Pichhli mulaakaat mein aadhi baatein to jaldbaazi mein chhoot hi gayi theen',
      'Agli baar jab aao to kam se kam do din ka khaali waqt lekar aana',
    ],
    linesEnglish: [
      'Last time we met, rushed schedules cut half our stories short',
      'Next time you come back, bring at least two unhurried days with you',
    ],
  },
  {
    title: 'मौसम बदला, मन वहीं अटका',
    titleEnglish: 'Seasons Turned, Heart Stayed With You',
    linesHindi: [
      'गर्मी गई, बारिश आई और अब हल्की ठंड ने भी दस्तक दे दी',
      'बस एक तुम्हारी याद ही है जो हर मौसम में एक जैसी ताज़ा है',
    ],
    linesHinglish: [
      'Garmi gayi, baarish aayi aur ab halki thand ne bhi dastak de di',
      'Bas ek tumhaari yaad hi hai jo har mausam mein ek jaisi taaza hai',
    ],
    linesEnglish: [
      'Summer faded, monsoons drifted past, and crisp winter air arrived',
      'Only thinking of you stays wonderfully fresh through every season',
    ],
  },
  {
    title: 'भीगे रास्ते पर धीमे कदम',
    titleEnglish: 'Slow Steps Along Damp Streets',
    linesHindi: [
      'अकेले टहलते वक़्त अक्सर लगता है कोई साथ चल रहा है मेरे',
      'मुड़कर देखता हूँ तो बस तुम्हारी यादों की परछाईं मुस्कुराती है',
    ],
    linesHinglish: [
      'Akele tehalte waqt aksar lagta hai koi saath chal raha hai mere',
      'Mudkar dekhta hoon to bas tumhaari yaadon ki parchhaayin muskuraati hai',
    ],
    linesEnglish: [
      'During evening walks alone, I still sense footsteps keeping pace',
      'Glancing sideways reveals only warm memories of you smiling along',
    ],
  },
  {
    title: 'मीठे शब्दों की खोज',
    titleEnglish: 'Searching Words for Deep Longing',
    linesHindi: [
      'ज़्यादा भारी-भरकम शब्द लिखना नहीं आता मुझे कभी भी यार',
      'बस दिल कहता है कि आज तुम्हारी बहुत याद आ रही है, जल्दी मिलो',
    ],
    linesHinglish: [
      'Zyada bhaari-bharkam shabd likhna nahin aata mujhe kabhi bhi yaar',
      'Bas dil kehta hai ki aaj tumhaari bahut yaad aa rahi hai, jaldi milo',
    ],
    linesEnglish: [
      'I never claimed to craft grand, dramatic poetry when feelings rise',
      'My heart simply says I miss you fiercely today—let us meet soon',
    ],
  },
  {
    title: 'तस्वीरों वाली कॉफ़ी मेज़',
    titleEnglish: 'Coffee Table Holding Old Photos',
    linesHindi: [
      'टेबल के काँच के नीचे रखी हमारी कॉलेज वाली ग्रुप फोटो देख कर',
      'आज भी हर दोस्त को बारी-बारी फ़ोन करने का मन कर जाता है',
    ],
    linesHinglish: [
      'Table ke kaanch ke neeche rakhi hamaari college waali group photo dekh kar',
      'Aaj bhi har dost ko baari-baari phone karne ka mann kar jaata hai',
    ],
    linesEnglish: [
      'Looking at our framed college squad photo under the glass coffee table',
      'Makes me want to dial every single friend one by one right now',
    ],
  },
  {
    title: 'चुटकुले से ज़्यादा तेरी हँसी याद',
    titleEnglish: 'Missing Your Laugh More Than Jokes',
    linesHindi: [
      'कोई बहुत मज़ेदार बात पढ़कर हँसी तो आ जाती है चेहरे पर',
      'पर तुम्हारे पेट पकड़कर हँसने वाली आवाज़ की कमी खल जाती है',
    ],
    linesHinglish: [
      'Koi bahut mazedaar baat padhkar hansi to aa jaati hai chehre par',
      'Par tumhaare pet pakadkar hansne waali aawaz ki kami khal jaati hai',
    ],
    linesEnglish: [
      'Funny posts online still pull a quick chuckle onto my lips',
      'Yet nothing replaces hearing your infectious laugh doubling you over',
    ],
  },
  {
    title: 'रास्ते भर तेरा नाम गुनगुनाना',
    titleEnglish: 'Humming Your Name All Way Home',
    linesHindi: [
      'शाम को घर लौटते हुए बिना सोचे कोई मीठी धुन गुनगुनाता रहा',
      'घर पहुँचकर ध्यान आया कि वह तो तुम्हारा ही पसंदीदा गीत था',
    ],
    linesHinglish: [
      'Shaam ko ghar laut-te hue bina soche koi meethi dhun gungunaata raha',
      'Ghar pahunchkar dhyaan aaya ki woh to tumhaara hi pasandeeda geet tha',
    ],
    linesEnglish: [
      'Walking home from work I caught myself humming an easy tune absentmindedly',
      'Only at the doorstep did I realize it was your absolute favorite song',
    ],
  },
  {
    title: 'बिना कहे पास होने का एहसास',
    titleEnglish: 'Sensing You Close Without Words',
    linesHindi: [
      'कुछ लोग हमारे पास न बैठकर भी हमारे बहुत क़रीब रहते हैं',
      'तुम उन्हीं गिने-चुने लोगों में हो जिनका नाम दिल पर लिखा है',
    ],
    linesHinglish: [
      'Kuch log hamaare paas na baithkar bhi hamaare bahut kareeb rehte hain',
      'Tum unhin gine-chune logon mein ho jinka naam dil par likha hai',
    ],
    linesEnglish: [
      'Certain people live close inside your spirit even when sitting miles away',
      'You belong to those rare few whose names remain etched upon my heart',
    ],
  },
  {
    title: 'अँधेरे में चमकती याद की लौ',
    titleEnglish: 'Memory’s Lamp Glowing Softly',
    linesHindi: [
      'दिन भर के शोर के बाद जब सब अपने-अपने कमरों में सो जाते हैं',
      'तब मेरी मेज़ पर सिर्फ़ तुम्हारी याद का शांत दीया जलता है',
    ],
    linesHinglish: [
      'Din bhar ke shor ke baad jab sab apne-apne kamron mein so jaate hain',
      'Tab meri mez par sirf tumhaari yaad ka shaant diya jalta hai',
    ],
    linesEnglish: [
      'After noisy hours settle and every apartment window turns dark',
      'One soft lamp of fond thoughts stays lit warmly across my desk for you',
    ],
  },
  {
    title: 'तेरी जगह कोई ले नहीं पाया',
    titleEnglish: 'Nobody Ever Filled Your Spot',
    linesHindi: [
      'ज़िंदगी की ट्रेन पर रोज़ नए मुसाफ़िर चढ़ते-उतरते रहते हैं यार',
      'पर खिड़की वाली वह ख़ास सीट आज भी सिर्फ़ तुम्हारे नाम है',
    ],
    linesHinglish: [
      'Zindagi ki train par roz naye musaafir chadh-te utarte rehte hain yaar',
      'Par khidki waali woh khaas seat aaj bhi sirf tumhaare naam hai',
    ],
    linesEnglish: [
      'Fresh travelers board and step off life’s train at every stop',
      'Yet that favorite sunny window seat still carries only your name tag',
    ],
  },
  {
    title: 'मेरी जान की सलामती सबसे पहले',
    titleEnglish: 'Your Safety Above My Longing',
    linesHindi: [
      'याद तो बहुत आती है तुम्हारी हर सुबह और हर ढलती शाम को',
      'पर तुम जहाँ हो वहाँ खुश और सुरक्षित रहो, यही सबसे बड़ी बात है',
    ],
    linesHinglish: [
      'Yaad to bahut aati hai tumhaari har subah aur har dhalti shaam ko',
      'Par tum jahaan ho wahaan khush aur surakshit raho, yahi sabse badi baat hai',
    ],
    linesEnglish: [
      'Missing you knocks softly at sunrise and again through fading dusk',
      'Still, knowing you are happy and safe wherever you are comes first',
    ],
  },
  {
    title: 'धूप में तेरी छतरी याद आई',
    titleEnglish: 'Remembering Your Shade Under Harsh Sun',
    linesHindi: [
      'तेज़ धूप में सड़क पर चलते हुए आज अचानक तुम याद आए बहुत',
      'तुम होते तो मेरी तरफ़ छाँव करके ख़ुद धूप में चलते मुस्कुराते हुए',
    ],
    linesHinglish: [
      'Tez dhoop mein sadak par chalte hue aaj achaanak tum yaad aaye bahut',
      'Tum hote to meri taraf chhaanv karke khud dhoop mein chalte muskuraate hue',
    ],
    linesEnglish: [
      'Walking down sunbaked pavement at noon made me miss you sharply',
      'You would always tilt the shade over me while smiling in the glare',
    ],
  },
  {
    title: 'फ़ोटो फ्रेम में बंद मुस्कान',
    titleEnglish: 'Warm Smile Preserved in Frame',
    linesHindi: [
      'मेज़ के कोने में रखी तस्वीर रोज़ सुबह गुड मॉर्निंग कहती है मुझे',
      'तभी तो इतने दूर होने पर भी तुम हमेशा यहीं पास लगते हो',
    ],
    linesHinglish: [
      'Mez ke kone mein rakhi tasveer roz subah good morning kehti hai mujhe',
      'Tabhi to itne door hone par bhi tum hamesha yahin paas lagte ho',
    ],
    linesEnglish: [
      'The small framed snapshot on my corner shelf wishes me morning daily',
      'Keeping you right beside me despite every mile stretched between us',
    ],
  },
  {
    title: 'बचपन के घर का दरवाज़ा',
    titleEnglish: 'Missing Our Old Wooden Front Door',
    linesHindi: [
      'बड़े शहर के फ्लैट का दरवाज़ा खुद ही बंद हो जाता है झटके से',
      'गाँव वाले घर की वह खटखटाने वाली कुंडी बहुत याद आती है',
    ],
    linesHinglish: [
      'Bade shehar ke flat ka darwaaza khud hi band ho jaata hai jhatke se',
      'Gaanv waale ghar ki woh khatkhataane waali kundi bahut yaad aati hai',
    ],
    linesEnglish: [
      'City apartment doors snap shut automatically with cold metal locks',
      'I miss the old wooden latch back home where neighbors walked right in',
    ],
  },
  {
    title: 'तेरे लौटने का जश्न बाकी है',
    titleEnglish: 'Celebration Waiting Until You Return',
    linesHindi: [
      'कामयाबी की छोटी-बड़ी खुशियाँ तो मिल रही हैं धीरे-धीरे अब',
      'पर असली पार्टी तभी होगी जब तुम सामने बैठकर ताली बजाओगे',
    ],
    linesHinglish: [
      'Kaamyaabi ki chhoti-badi khushiyaan to mil rahi hain dheere-dheere ab',
      'Par asli party tabhi hogi jab tum saamne baithkar taali bajaaoge',
    ],
    linesEnglish: [
      'Small and steady wins keep arriving along the road lately',
      'Yet real celebration waits until you sit right here cheering along',
    ],
  },
  {
    title: 'शाम की अधूरी सैर',
    titleEnglish: 'Half-Complete Evening Walk',
    linesHindi: [
      'रोज़ की तरह आज भी पाँच हज़ार क़दम पूरे कर लिए पार्क में',
      'बस साथ चलने वाला हाथ न होने से रास्ता थोड़ा लंबा लगा आज',
    ],
    linesHinglish: [
      'Roz ki tarah aaj bhi paanch hazaar kadam poore kar liye park mein',
      'Bas saath chalne waala haath na hone se raasta thoda lamba laga aaj',
    ],
    linesEnglish: [
      'I finished my usual five thousand evening steps around the park loop',
      'Only without your hand swinging beside mine, the track felt twice as long',
    ],
  },
  {
    title: 'प्यार भरा एक मिस यू संदेश',
    titleEnglish: 'Simple Loving Miss You Ping',
    linesHindi: [
      'कोई बहुत बड़ी वजह नहीं है आज यह संदेश भेजने के पीछे यार',
      'बस मन थोड़ा तुम्हें याद कर रहा था तो सोचा बता दूँ तुम्हें',
    ],
    linesHinglish: [
      'Koi bahut badi wajah nahin hai aaj yeh sandesh bhejne ke peechhe yaar',
      'Bas mann thoda tumhein yaad kar raha tha to socha bata doon tumhein',
    ],
    linesEnglish: [
      'Zero dramatic excuse behind dropping this quick text into your inbox',
      'My heart simply missed you a little extra today, so I wanted you to know',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'गली की चाय और बिस्कुट',
    titleEnglish: 'Street Tea and Missing Talks',
    linesHindi: [
      'आज उसी नुक्कड़ पर चाय और पारले-जी खाया मैंने अकेले बैठकर',
      'स्वाद वही पुराना था, बस तेरी हँसी की कमी महसूस होती रही',
    ],
    linesHinglish: [
      'Aaj usi nukkad par chai aur Parle-G khaaya maine akele baithkar',
      'Swaad wahi puraana tha, bas teri hansi ki kami mehsoos hoti rahi',
    ],
    linesEnglish: [
      'Dunked biscuits into hot tea alone at our exact old street corner today',
      'The flavor stayed identical—only missing your laugh beside me stood out',
    ],
  },
  {
    title: 'नए मौसम की पहली हवा',
    titleEnglish: 'First Cool Breeze Missing You',
    linesHindi: [
      'अक्टूबर की पहली हल्की ठंडक ने आज शाम को सुहाना कर दिया',
      'काश हम दोनों छत पर बैठकर घंटों पुराने गाने सुन पाते',
    ],
    linesHinglish: [
      'October ki pehli halki thandak ne aaj shaam ko suhaana kar diya',
      'Kaash hum dono chhat par baithkar ghanton puraane gaane sun paate',
    ],
    linesEnglish: [
      'October’s first crisp chill turned tonight’s breeze irresistibly pleasant',
      'How lovely it would be sitting together playing old classics on the roof',
    ],
  },
  {
    title: 'तेरी बातों की मिठास',
    titleEnglish: 'Missing Sweetness of Your Stories',
    linesHindi: [
      'लोग कितनी भी लंबी बातें सुना दें दिन भर में मेरे सामने आकर',
      'तुम्हारी पाँच मिनट की बेमतलब गप्पों जैसा सुकून कहीं नहीं मिलता',
    ],
    linesHinglish: [
      'Log kitni bhi lambi baatein suna dein din bhar mein mere saamne aakar',
      'Tumhaari paanch minute ki bematlab gappon jaisa sukoon kahin nahin milta',
    ],
    linesEnglish: [
      'Colleagues talk nonstop through endless meetings from nine until six',
      'Yet nothing relaxes my mind like five minutes of your silly storytelling',
    ],
  },
  {
    title: 'अकेले सफ़र में खिड़की का साथ',
    titleEnglish: 'Solo Train Ride, Thoughts of You',
    linesHindi: [
      'ट्रेन की खिड़की से गुज़रते छोटे-छोटे स्टेशन देख रहा हूँ अभी',
      'हर स्टेशन पर मन चाहता है कि काश तुम यहीं से चढ़ जाओ अंदर',
    ],
    linesHinglish: [
      'Train ki khidki se guzarte chhote-chhote station dekh raha hoon abhi',
      'Har station par mann chahta hai ki kaash tum yahin se chadh jaao andar',
    ],
    linesEnglish: [
      'Watching quiet rural stations blur past my train window this evening',
      'Makes me wish at every single stop that you might hop right aboard',
    ],
  },
  {
    title: 'आँखों में बसा पुराना वक़्त',
    titleEnglish: 'Golden Times Kept Inside Eyes',
    linesHindi: [
      'वक़्त के साथ हम दोनों आगे बढ़ गए अपनी-अपनी मंज़िल की ओर',
      'पर साथ बिताया हर पल आज भी आँखों में ताज़ा सजा हुआ है',
    ],
    linesHinglish: [
      'Waqt ke saath hum dono aage badh gaye apni-apni manzil ki or',
      'Par saath bitaaya har pal aaj bhi aankhon mein taaza saja hua hai',
    ],
    linesEnglish: [
      'Time naturally carried both of us forward toward separate destinations',
      'Still, every afternoon we shared stays fresh and vivid behind my eyes',
    ],
  },
  {
    title: 'मेरी जान की याद का मौसम',
    titleEnglish: 'Season Painted With Your Memory',
    linesHindi: [
      'चाहे कैलेंडर कोई भी महीना दिखाए, मेरे लिए हर मौसम एक जैसा है',
      'जब तुम पास होते हो तो बसंत है, दूर होते हो तो इंतज़ार का मौसम',
    ],
    linesHinglish: [
      'Chaahe calendar koi bhi maheena dikhaaye, mere liye har mausam ek jaisa hai',
      'Jab tum paas hote ho to basant hai, door hote ho to intezaar ka mausam',
    ],
    linesEnglish: [
      'No matter which month sits printed across the top of the calendar',
      'Near you feels like blooming spring; apart feels like gentle waiting',
    ],
  },
  {
    title: 'दिल की कॉपी में सबसे प्यारा नाम',
    titleEnglish: 'Sweetest Name Inside Heart’s Notebook',
    linesHindi: [
      'लाख व्यस्त रहूँ अपने रोज़ के कामों और जिम्मेदारियों के बीच',
      'दिल की कॉपी के हर पन्ने के ऊपर सबसे पहले तुम्हारा नाम है',
    ],
    linesHinglish: [
      'Laakh vyast rahoon apne roz ke kaamon aur zimmedariyon ke beech',
      'Dil ki copy ke har panne ke oopar sabse pehle tumhaara naam hai',
    ],
    linesEnglish: [
      'No matter how endlessly daily duties pack my schedule tight',
      'At the very top of every page inside my heart sits your name first',
    ],
  },
  {
    title: 'नज़रें ढूँढें तेरी परछाईं',
    titleEnglish: 'Eyes Looking Quietly for Your Shadow',
    linesHindi: [
      'जब भी कोई दरवाज़ा खुलता है या घंटी बजती है मेरे कमरे की',
      'तो अनजाने में नज़रें सबसे पहले तुम्हारी ही आहट तलाशती हैं',
    ],
    linesHinglish: [
      'Jab bhi koi darwaaza khulta hai ya ghanti bajti hai mere kamre ki',
      'To anjaane mein nazrein sabse pehle tumhaari hi aahat talaashti hain',
    ],
    linesEnglish: [
      'Whenever an office door swings open or someone chimes my bell',
      'My eyes still reflexively scan the threshold hoping it is you',
    ],
  },
  {
    title: 'सुकून भरा पुराना ठिकाना',
    titleEnglish: 'Missing My Safest Shelter',
    linesHindi: [
      'थककर दुनिया की दौड़ से जब मन कहीं छुप जाना चाहता है',
      'तो सबसे ज़्यादा तुम्हारा कंधा और तुम्हारी बाहें याद आती हैं',
    ],
    linesHinglish: [
      'Thakkar duniya ki daud se jab mann kahin chhup jaana chahta hai',
      'To sabse zyada tumhaara kandha aur tumhaari baahein yaad aati hain',
    ],
    linesEnglish: [
      'When the constant race outdoors leaves my spirit craving shelter',
      'Nothing pulls harder at my heart than missing your comforting hug',
    ],
  },
  {
    title: 'तुम्हारे बिना अधूरा गाना',
    titleEnglish: 'Song Unfinished Without Your Hum',
    linesHindi: [
      'आज वही पुराना गाना बजा कार में पर मैं अकेला गुनगुना न सका',
      'क्योंकि उसकी दूसरी लाइन हमेशा तुम गाया करते थे मुस्कुराकर',
    ],
    linesHinglish: [
      'Aaj wahi puraana gaana baja car mein par main akela gunguna na saka',
      'Kyunki uski doosri line hamesha tum gaaya karte the muskuraakar',
    ],
    linesEnglish: [
      'Our old duet played on the dashboard today, yet I could not sing along',
      'Because you always jumped in smiling to sing every second verse',
    ],
  },
  {
    title: 'छोटी सी मुलाकात की उम्मीद',
    titleEnglish: 'Holding Onto Next Meet Hope',
    linesHindi: [
      'सारी दुनिया की दूरी भी छोटी लगने लगती है बस एक उम्मीद से',
      'कि अगले महीने फिर से हम दोनों एक ही मेज़ पर चाय पिएँगे',
    ],
    linesHinglish: [
      'Saari duniya ki doori bhi chhoti lagne lagti hai bas ek ummeed se',
      'Ki agle maheene phir se hum dono ek hi mez par chai piyenge',
    ],
    linesEnglish: [
      'Every mile across the country shrinks easily behind one bright thought',
      'Next month we are finally pouring hot tea across the same table again',
    ],
  },
  {
    title: 'दोस्त के बिना बोरिंग संडे',
    titleEnglish: 'Quiet Sundays Missing Your Chaos',
    linesHindi: [
      'जब तुम होते थे तो संडे कब सुबह से रात हो जाता था पता न चलता',
      'अब तो दोपहर से ही घड़ी देखता हूँ कि कल फिर काम पर जाना है',
    ],
    linesHinglish: [
      'Jab tum hote the to Sunday kab subah se raat ho jaata tha pata na chalta',
      'Ab to dopahar se hi ghadi dekhta hoon ki kal phir kaam par jaana hai',
    ],
    linesEnglish: [
      'With you around, Sunday mornings tumbled straight into midnight unseen',
      'Now by noon I already check the clock dreading Monday morning traffic',
    ],
  },
  {
    title: 'आँखों की नमी में छुपा प्यार',
    titleEnglish: 'Affection Inside Mist of Eyes',
    linesHindi: [
      'याद आना कोई कमज़ोरी नहीं, किसी के ख़ास होने की निशानी है',
      'हर आँसू नहीं बहता, कुछ जज़्बात बस आँखों में चमक बन जाते हैं',
    ],
    linesHinglish: [
      'Yaad aana koi kamzori nahin, kisi ke khaas hone ki nishaani hai',
      'Har aansoo nahin behta, kuch jazbaat bas aankhon mein chamak ban jaate hain',
    ],
    linesEnglish: [
      'Missing somebody deeply is never weakness—it proves how rare they are',
      'Not every tender feeling falls as tears; some simply shimmer quietly inside',
    ],
  },
  {
    title: 'लम्हों की रेत से फिसलता वक़्त',
    titleEnglish: 'Missing Times Slipping Like Sand',
    linesHindi: [
      'मुट्ठी में रेत की तरह फिसल गए वो बेफ़िक्र कॉलेज वाले दिन',
      'अब बस ग्रुप की पुरानी तस्वीरें देखकर दिल को तसल्ली मिलती है',
    ],
    linesHinglish: [
      'Mutthi mein ret ki tarah phisal gaye woh befikr college waale din',
      'Ab bas group ki puraani tasveerein dekhkar dil ko tasalli milti hai',
    ],
    linesEnglish: [
      'Carefree college afternoons slipped smoothly like warm sand through fingers',
      'Now scrolling through messy group snapshots brings sweet comfort at night',
    ],
  },
  {
    title: 'दूरी में भी जुड़ाव की डोर',
    titleEnglish: 'Unbroken Cord Across Cities',
    linesHindi: [
      'ज़्यादा बात न होने पर भी कभी यह मत सोचना कि भूल गया हूँ तुम्हें',
      'मेरी हर चुप्पी में भी तुम्हारा ही नाम सबसे पहले गूँजता है',
    ],
    linesHinglish: [
      'Zyada baat na hone par bhi kabhi yeh mat sochna ki bhool gaya hoon tumhein',
      'Meri har chuppi mein bhi tumhaara hi naam sabse pehle goonjta hai',
    ],
    linesEnglish: [
      'Even when weeks stay silent, never doubt for one heartbeat that I forgot',
      'Inside every pause of my day, your name still echoes loudly first',
    ],
  },
  {
    title: 'पसंदीदा जगह पर खालीपन',
    titleEnglish: 'Quiet Sunset at Our Old Spot',
    linesHindi: [
      'नदी किनारे वाली उसी सीढ़ी पर आज ढलते सूरज को देखा मैंने',
      'रंग तो बिल्कुल वही सुनहरे थे, बस बगल में तुम्हारी जगह खाली थी',
    ],
    linesHinglish: [
      'Nadi kinaare waali usi seedhi par aaj dhalte sooraj ko dekha maine',
      'Rang to bilkul wahi sunahare the, bas bagal mein tumhaari jagah khaali thi',
    ],
    linesEnglish: [
      'I watched sunset from those exact stone riverfront steps today',
      'The water shone equally golden—only the stone beside me sat empty',
    ],
  },
  {
    title: 'खामोश शहर, शोर करती यादें',
    titleEnglish: 'Quiet Streets, Loud Memories',
    linesHindi: [
      'रात के ग्यारह बजे के बाद जब पूरी सड़क सो जाती है बाहर',
      'तब तुम्हारी यादें कमरे में सबसे ज़्यादा शोर मचाने लगती हैं',
    ],
    linesHinglish: [
      'Raat ke gyaarah baje ke baad jab poori sadak so jaati hai baahar',
      'Tab tumhaari yaadein kamre mein sabse zyada shor machaane lagti hain',
    ],
    linesEnglish: [
      'Past eleven at night when streetlights hum over deserted sidewalks',
      'Memories of you grow loudest right inside the stillness of my room',
    ],
  },
  {
    title: 'एक कॉल की दूरी पर सुकून',
    titleEnglish: 'Calm Sitting One Call Away',
    linesHindi: [
      'पता नहीं क्यों आज मन बहुत हल्का और थोड़ा भावुक सा हो रहा है',
      'लगता है एक बार तुम्हारी आवाज़ सुनने से ही सब संभल जाएगा',
    ],
    linesHinglish: [
      'Pata nahin kyun aaj mann bahut halka aur thoda bhaavuk sa ho raha hai',
      'Lagta hai ek baar tumhaari aawaz sunne se hi sab sambhal jaayega',
    ],
    linesEnglish: [
      'No idea why my heart feels extra tender and wistful this evening',
      'Just hearing your familiar voice for a minute would steady everything',
    ],
  },
  {
    title: 'तुम्हारी मुस्कान की तलब',
    titleEnglish: 'Craving One Real Smile of Yours',
    linesHindi: [
      'चाँद को देखकर तो हर कोई शायरी लिख देता है आसमान की ओर',
      'मुझे तो सिर्फ़ तुम्हारे चेहरे की एक सच्ची मुस्कान देखनी है यार',
    ],
    linesHinglish: [
      'Chaand ko dekhkar to har koi shayari likh deta hai aasmaan ki or',
      'Mujhe to sirf tumhaare chehre ki ek sachhi muskaan dekhni hai yaar',
    ],
    linesEnglish: [
      'Anyone can gaze upward at silver moonlight and rhyme pretty lines',
      'All I truly crave right now is seeing your genuine smile in person',
    ],
  },
  {
    title: 'यादों से सजी शाम-ए-इंतज़ार',
    titleEnglish: 'Evening Lit With Patient Fondness',
    linesHindi: [
      'वैसे तो सब कुछ अच्छा चल रहा है जीवन के इस मोड़ पर अभी',
      'पर जब तुम पास आ जाओगे तो यही ज़िंदगी और भी प्यारी लगेगी',
    ],
    linesHinglish: [
      'Waise to sab kuch achha chal raha hai jeevan ke is mod par abhi',
      'Par jab tum paas aa jaaoge to yahi zindagi aur bhi pyari lagegi',
    ],
    linesEnglish: [
      'Truthfully, life moves along gracefully enough in this season',
      'Yet once you step back beside me, everything will shine twice as sweet',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'अजनबी शहर में तेरी याद',
    titleEnglish: 'Thinking of You Far From Home',
    linesHindi: [
      'शहर नया है, रास्ते अनजान हैं और भाषा भी थोड़ी अलग है यहाँ',
      'ऐसे में सबसे ज़्यादा तुम्हारा अपनापन और साथ याद आता है',
    ],
    linesHinglish: [
      'Shehar naya hai, raaste anjaan hain aur bhasha bhi thodi alag hai yahaan',
      'Aise mein sabse zyada tumhaara apnapan aur saath yaad aata hai',
    ],
    linesEnglish: [
      'Unfamiliar streets, strange signs, and a different language all around',
      'Make me miss the effortless comfort of your company most of all',
    ],
  },
  {
    title: 'दोस्त की खाली सीट',
    titleEnglish: 'Missing Friend Across the Desk',
    linesHindi: [
      'क्लास और ऑफिस की मेज़ पर आज कोई और बैठ गया है तुम्हारी जगह',
      'काम तो हो रहा है पर पहले वाली मस्ती अब कहीं दिखती ही नहीं',
    ],
    linesHinglish: [
      'Class aur office ki mez par aaj koi aur baith gaya hai tumhaari jagah',
      'Kaam to ho raha hai par pehle waali masti ab kahin dikhti hi nahin',
    ],
    linesEnglish: [
      'Somebody new sits at your old corner desk in the room nowadays',
      'Work still gets finished, yet none of that old daily laughter remains',
    ],
  },
  {
    title: 'मीलों दूर से प्यार भरा संदेश',
    titleEnglish: 'Warm Hello From Across the Map',
    linesHindi: [
      'नाराज़गी नहीं, बस तुम्हारी बहुत याद आ रही थी इस शाम मुझे',
      'इसीलिए चुपके से दो लाइनों में अपना हाल लिख भेजा है तुम्हें',
    ],
    linesHinglish: [
      'Naaraazgi nahin, bas tumhaari bahut yaad aa rahi thi is shaam mujhe',
      'Isiliye chupke se do lainon mein apna haal likh bheja hai tumhein',
    ],
    linesEnglish: [
      'No complaints at all—just an extra wave of missing you this evening',
      'So I tucked my quiet thoughts neatly into these two lines for you',
    ],
  },
  {
    title: 'तुम्हारे लौटने का मीठा दिन',
    titleEnglish: 'Sweet Countdown to Seeing You',
    linesHindi: [
      'आज कैलेंडर का एक और दिन काट दिया मैंने सुबह उठते ही',
      'क्योंकि हर गुज़रता दिन मुझे तुम्हारे मिलने के थोड़ा और करीब लाता है',
    ],
    linesHinglish: [
      'Aaj calendar ka ek aur din kaat diya maine subah uthte hi',
      'Kyunki har guzarta din mujhe tumhaare milne ke thoda aur kareeb laata hai',
    ],
    linesEnglish: [
      'I crossed off another square on the wall calendar right after waking',
      'Knowing every sunset pulls your arrival one honest day closer',
    ],
  },
  {
    title: 'बारिश में भीगा पुराना वादा',
    titleEnglish: 'Rainy Promise Still Remembered',
    linesHindi: [
      'बाहर बारिश की बूँदें गिरते ही तुम्हारा वो वादा याद आया मुझे',
      'कि अगली बार मानसून में हम फिर से लंबी ड्राइव पर चलेंगे साथ',
    ],
    linesHinglish: [
      'Baahar baarish ki boondein girte hi tumhaara woh waada yaad aaya mujhe',
      'Ki agli baar monsoon mein hum phir se lambi drive par chalenge saath',
    ],
    linesEnglish: [
      'Rain tapping outside reminded me of the cheerful promise you made',
      'That next monsoon we will definitely head out on that long scenic drive',
    ],
  },
  {
    title: 'सपनों के बीच तेरी दस्तक',
    titleEnglish: 'Your Voice Inside Midnight Dreams',
    linesHindi: [
      'आज रात फिर किसी पुराने क़िस्से पर मुस्कुराते देखा तुम्हें सपने में',
      'सुबह आँख खुली तो मन पूरा दिन खुशियों से भरा रहा',
    ],
    linesHinglish: [
      'Aaj raat phir kisi puraane kisse par muskuraate dekha tumhein sapne mein',
      'Subah aankh khuli to mann poora din khushiyon se bhara raha',
    ],
    linesEnglish: [
      'Last night I dreamed of you laughing over an old inside joke again',
      'Waking up afterward left a quiet glow lasting right through evening',
    ],
  },
  {
    title: 'गुलदस्ते सा महकता इंतजार',
    titleEnglish: 'Waiting Fragrant With Warmth',
    linesHindi: [
      'तुम्हारी याद कोई बोझ नहीं, मेरे दिल का सबसे प्यारा हिस्सा है',
      'जब भी मन भारी होता है, तुम्हारा ख़्याल मुस्कुराने की वजह बनता है',
    ],
    linesHinglish: [
      'Tumhaari yaad koi bojh nahin, mere dil ka sabse pyara hissa hai',
      'Jab bhi mann bhaari hota hai, tumhaara khayaal muskuraane ki wajah banta hai',
    ],
    linesEnglish: [
      'Missing you is never a heavy burden—it feels like warmth saved inside',
      'Whenever a rough afternoon weighs me down, thinking of you makes me smile',
    ],
  },
  {
    title: 'फ़ोन के दूसरी तरफ़ सुकून',
    titleEnglish: 'Peace on the Other End of Line',
    linesHindi: [
      'बहुत सारा काम और ज़िम्मेदारी भले ही हमें दूर रखती हो दिन में',
      'पर रात को एक बार हाल पूछ लेना ही सारा फ़ासला मिटा देता है',
    ],
    linesHinglish: [
      'Bahut saara kaam aur zimmedari bhale hi humein door rakhti ho din mein',
      'Par raat ko ek baar haal poochh lena hi saara faasla mita deta hai',
    ],
    linesEnglish: [
      'Packed schedules and chores may keep our days miles apart',
      'Yet one kind check-in before bedtime erases every bit of distance',
    ],
  },
  {
    title: 'मेरी हर याद की मंज़िल तुम',
    titleEnglish: 'Every Memory Leads Home to You',
    linesHindi: [
      'दिन चाहे कहीं से भी शुरू हो और किसी भी गली में खत्म हो जाए',
      'शाम को मेरी हर सोच आकर तुम्हारे ही दरवाज़े पर रुकती है',
    ],
    linesHinglish: [
      'Din chaahe kahin se bhi shuru ho aur kisi bhi gali mein khatam ho jaaye',
      'Shaam ko meri har soch aakar tumhaare hi darwaze par rukti hai',
    ],
    linesEnglish: [
      'No matter where my morning starts or which busy street ends my day',
      'Come evening, every quiet thought still walks straight back to your door',
    ],
  },
  {
    title: 'जल्दी मिलने की प्यारी दुआ',
    titleEnglish: 'Wishing Our Reunion Comes Soon',
    linesHindi: [
      'बहुत दिन हो गए आमने-सामने बैठकर जी भर के बात किए हुए',
      'बस एक बार जल्दी से मिल जाओ, आधी दुनिया तो वैसे ही ठीक हो जाएगी',
    ],
    linesHinglish: [
      'Bahut din ho gaye aamne-saamne baithkar jee bhar ke baat kiye hue',
      'Bas ek baar jaldi se mil jaao, aadhi duniya to waise hi theek ho jaayegi',
    ],
    linesEnglish: [
      'Far too many days have passed since we sat talking face to face',
      'Let us meet up soon—half the world will feel right again instantly',
    ],
  },
];

export const UNIQUE_MISS_YOU_170 = buildUniqueShayaris(
  'miss-you',
  'Miss You Shayari (मिस यू शायरी)',
  '🥺',
  31,
  MISS_YOU_ENTRIES
);
