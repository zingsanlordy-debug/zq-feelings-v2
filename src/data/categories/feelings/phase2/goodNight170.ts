import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const GOOD_NIGHT_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'चाँदनी की लोरी',
    titleEnglish: 'Moonlight Lullaby',
    linesHindi: [
      'सारे दिन की थकान को अब रात के सन्नाटे में छोड़ दीजिए',
      'चाँद की ठंडी रोशनी के साथ मीठी नींद को गले लगा लीजिए',
    ],
    linesHinglish: [
      'Saare din ki thakaan ko ab raat ke sannaate mein chhod dijiye',
      'Chaand ki thandi roshni ke saath meethi neend ko gale laga lijiye',
    ],
    linesEnglish: [
      'Leave all of today’s tiredness resting outside in the quiet night',
      'Close your eyes beneath soft moonlight and welcome gentle sleep',
    ],
  },
  {
    title: 'तारों भरी चादर',
    titleEnglish: 'Blanket of Stars',
    linesHindi: [
      'आसमान में टिमटिमाते तारे पहरा दे रहे हैं आपकी नींद का आज',
      'बिना किसी चिंता के सो जाइए, शुभ रात्रि मेरे ख़ास',
    ],
    linesHinglish: [
      'Aasmaan mein timtimaate taare pehra de rahe hain aapki neend ka aaj',
      'Bina kisi chinta ke so jaaiye, shubh raatri mere khaas',
    ],
    linesEnglish: [
      'Twinkling stars across the sky are standing gentle watch over your rest tonight',
      'Let every worry go and sleep deeply—good night, dear friend',
    ],
  },
  {
    title: 'दिल को सुकून वाली रात',
    titleEnglish: 'Peaceful Mind Tonight',
    linesHindi: [
      'जो बात आज अधूरी रह गई, उसे कल की सुबह पर छोड़ आइए',
      'रात बनी ही है ताकि आप चैन से आराम कर सकें, शुभ रात्रि',
    ],
    linesHinglish: [
      'Jo baat aaj adhoori reh gayi, use kal ki subah par chhod aaiye',
      'Raat bani hi hai taaki aap chain se aaraam kar sakein, shubh raatri',
    ],
    linesEnglish: [
      'Leave whatever went unfinished today gently waiting for morning light',
      'Night exists solely so your heart and body can rest easy—good night',
    ],
  },
  {
    title: 'मीठे सपनों की दस्तक',
    titleEnglish: 'Knock of Sweet Dreams',
    linesHindi: [
      'पलकों की खिड़की पर मीठे ख्वाब दस्तक देने आ गए हैं',
      'आँखें बंद कीजिए, सुनहरे सपने आपका इंतज़ार कर रहे हैं',
    ],
    linesHinglish: [
      'Palkon ki khidki par meethe khwaab dastak dene aa gaye hain',
      'Aankhein band kijiye, sunahre sapne aapka intezaar kar rahe hain',
    ],
    linesEnglish: [
      'Sweet dreams have arrived knocking softly at your tired eyelids',
      'Close your eyes calmly—bright golden visions await your rest',
    ],
  },
  {
    title: 'शांति से भरा विश्राम',
    titleEnglish: 'Serene Night Rest',
    linesHindi: [
      'तकिये पर सिर रखते ही दिन भर का हर बोझ उतर जाए आपका',
      'ईश्वर करे रात की हर घड़ी आपको गहरी राहत दे जाए',
    ],
    linesHinglish: [
      'Takiye par sir rakhte hi din bhar ka har bojh utar jaaye aapka',
      'Ishwar kare raat ki har ghadi aapko gehri raahat de jaaye',
    ],
    linesEnglish: [
      'The second your head meets the pillow, may every heavy thought melt away',
      'May every quiet hour tonight fill you with deep calm and renewal',
    ],
  },
  {
    title: 'रात की ठंडी हवा',
    titleEnglish: 'Cool Night Breeze',
    linesHindi: [
      'हल्की-हल्की ठंडी हवा कह रही है कि अब आराम का समय हुआ',
      'अपनों को याद करके मुस्कुराइए, और प्यार से सो जाइए',
    ],
    linesHinglish: [
      'Halki-halki thandi hawa keh rahi hai ki ab aaraam ka samay hua',
      'Apnon ko yaad karke muskuraaiye, aur pyaar se so jaaiye',
    ],
    linesEnglish: [
      'A cool evening breeze whispers softly that it is time to unwind',
      'Think fondly of everyone you love, smile once, and drift peacefully off',
    ],
  },
  {
    title: 'सुकून भरा गुड नाइट',
    titleEnglish: 'Calm Good Night',
    linesHindi: [
      'सोने से पहले दिल में किसी के लिए कोई कड़वाहट मत रखिएगा',
      'हल्के मन से सोइए ताकि कल की सुबह मुस्कुराकर उठ सकें',
    ],
    linesHinglish: [
      'Sone se pehle dil mein kisi ke liye koi kadwaahat mat rakhiyega',
      'Halke man se soiye taaki kal ki subah muskuraakar uth sakein',
    ],
    linesEnglish: [
      'Carry zero bitterness to bed inside your heart tonight',
      'Sleep lightly and clear so you wake smiling wide tomorrow dawn',
    ],
  },
  {
    title: 'चाँद की मुस्कुराहट',
    titleEnglish: 'Smiling Moon',
    linesHindi: [
      'छत के ऊपर चाँद भी हल्के से मुस्कुरा रहा है आपकी ओर देख',
      'कह रहा है — दिन अच्छा बीता, अब चैन से सो जाओ दोस्त',
    ],
    linesHinglish: [
      'Chhat ke upar chaand bhi halke se muskura raha hai aapki or dekh',
      'Keh raha hai — din accha beeta, ab chain se so jaao dost',
    ],
    linesEnglish: [
      'High above the terrace, the moon smiles softly down your way',
      'Whispering—you did well today, now rest peacefully, my friend',
    ],
  },
  {
    title: 'दुआओं भरी रात',
    titleEnglish: 'Night Wrapped in Prayers',
    linesHindi: [
      'हर रात सोने से पहले अपनों की सलामती की दुआ माँगता हूँ मैं',
      'आज की मेरी दुआ में भी आपका नाम सबसे ऊपर लिखा है',
    ],
    linesHinglish: [
      'Har raat sone se pehle apnon ki salaamati ki dua maangta hoon main',
      'Aaj ki meri dua mein bhi aapka naam sabse upar likha hai',
    ],
    linesEnglish: [
      'Every night before drifting asleep, I wish safety over the people I cherish',
      'Tonight too your name sits right at the top of my quiet prayers',
    ],
  },
  {
    title: 'हल्के मन की नींद',
    titleEnglish: 'Unburdened Sleep',
    linesHindi: [
      'कल क्या होगा इसकी फ़िक्र में आज की नींद ख़राब मत कीजिए',
      'आने वाला सवेरा अपने साथ नए हल लेकर ज़रूर आएगा',
    ],
    linesHinglish: [
      'Kal kya hoga iski fikr mein aaj ki neend kharaab mat kijiye',
      'Aane waala sawera apne saath naye hal lekar zaroor aayega',
    ],
    linesEnglish: [
      'Never sacrifice tonight’s peaceful sleep worrying over tomorrow',
      'Morning light always arrives carrying fresh answers tucked inside',
    ],
  },
  {
    title: 'प्यारी सी याद रात को',
    titleEnglish: 'Fond Night Thought',
    linesHindi: [
      'सोने से पहले बस एक प्यारा संदेश भेजना था आपको दिल से',
      'ताकि रात की तन्हाई में भी अपनापन महसूस होता रहे आपको',
    ],
    linesHinglish: [
      'Sone se pehle bas ek pyaara sandesh bhejna tha aapko dil se',
      'Taaki raat ki tanhaai mein bhi apnaapan mehsoos hota rahe aapko',
    ],
    linesEnglish: [
      'Before turning off the lights, I wanted to send one warm note your way',
      'So even inside quiet midnight hours, you feel cared for and close',
    ],
  },
  {
    title: 'आराम का हक़',
    titleEnglish: 'You Earned This Rest',
    linesHindi: [
      'पूरा दिन मेहनत और भागदौड़ करके थक गए होंगे न आप भी',
      'अब फ़ोन रखिए और ख़ुद को चैन की नींद का तोहफ़ा दीजिए',
    ],
    linesHinglish: [
      'Poora din mehnat aur bhaagdaud karke thak gaye honge na aap bhi',
      'Ab phone rakhiye aur khud ko chain ki neend ka tohfa dijiye',
    ],
    linesEnglish: [
      'After giving your energy to work and duties all day long',
      'Set the phone aside now and gift yourself deep, restful sleep',
    ],
  },
  {
    title: 'ख़ामोश रात का गीत',
    titleEnglish: 'Song of Quiet Night',
    linesHindi: [
      'रात की ख़ामोशी भी बहुत प्यारी होती है जब मन शांत हो',
      'ईश्वर करे आज आपके हर सपने में सिर्फ़ खुशियाँ ही खुशियाँ हों',
    ],
    linesHinglish: [
      'Raat ki khaamoshi bhi bahut pyaari hoti hai jab man shaant ho',
      'Ishwar kare aaj aapke har sapne mein sirf khushiyaan hi khushiyaan hon',
    ],
    linesEnglish: [
      'Nighttime stillness feels genuinely soothing when the mind slows down',
      'May every dream visiting your sleep tonight hold nothing but pure joy',
    ],
  },
  {
    title: 'सुनहरे ख्वाब मुबारक',
    titleEnglish: 'Wishing Golden Dreams',
    linesHindi: [
      'आज की रात आपके सारे अधूरे ख्वाबों को सँवारने आई है',
      'आराम से सो जाइए, शुभ रात्रि और प्यारे सपने',
    ],
    linesHinglish: [
      'Aaj ki raat aapke saare adhoore khwaabon ko sanwaarne aayi hai',
      'Aaraam se so jaaiye, shubh raatri aur pyaare sapne',
    ],
    linesEnglish: [
      'Tonight has arrived gently to cradle every quiet hope you carry',
      'Sleep warmly and easily—good night and sweetest dreams to you',
    ],
  },
  {
    title: 'दिन भर की शुक्रिया',
    titleEnglish: 'Night Gratitude',
    linesHindi: [
      'सोने से पहले आज मिले हर अच्छे पल के लिए शुक्रिया कहिए',
      'कृतज्ञ मन के साथ आने वाली नींद सबसे गहरी होती है',
    ],
    linesHinglish: [
      'Sone se pehle aaj mile har acche pal ke liye shukriya kahiye',
      'Kritagya man ke saath aane waali neend sabse gehri hoti hai',
    ],
    linesEnglish: [
      'Before drifting off, whisper thanks for one good thing today brought',
      'Sleep that arrives inside a grateful heart is always the sweetest kind',
    ],
  },
  {
    title: 'दीयों की शांत रोशनी',
    titleEnglish: 'Soft Night Lamp',
    linesHindi: [
      'कमरे की मद्धम रोशनी में हर थकावट घुल रही है धीरे-धीरे',
      'पलकें मूंदिए, कल फिर नई ऊर्जा से चमकना है आपको',
    ],
    linesHinglish: [
      'Kamre ki maddham roshni mein har thakaawat ghul rahi hai dheere-dheere',
      'Palkein moondiye, kal phir nayi oorja se chamakna hai aapko',
    ],
    linesEnglish: [
      'Under dim bedroom light, every trace of fatigue melts steadily away',
      'Close your eyes peacefully—tomorrow brings fresh brightness for you',
    ],
  },
  {
    title: 'अपनों के नाम शुभ रात्रि',
    titleEnglish: 'Good Night Family',
    linesHindi: [
      'सारे परिवार के चेहरे पर मुस्कान रहे और घर में शांति बसी रहे',
      'इसी प्यारी भावना के साथ आप सभी को शुभ रात्रि',
    ],
    linesHinglish: [
      'Saare parivaar ke chehre par muskaan rahe aur ghar mein shaanti basi rahe',
      'Isi pyaari bhaavna ke saath aap sabhi ko shubh raatri',
    ],
    linesEnglish: [
      'May warm smiles rest on your family’s faces and serenity fill every room',
      'With love and gratitude, wishing everyone a peaceful good night',
    ],
  },
  {
    title: 'सपनों का बगीचा',
    titleEnglish: 'Garden of Dreams',
    linesHindi: [
      'रात की कोमल गोद में जाकर मन के सारे फूल खिल जाते हैं',
      'मीठे सपनों के बगीचे में आज सुकून से टहल आइए',
    ],
    linesHinglish: [
      'Raat ki komal god mein jaakar man ke saare phool khil jaate hain',
      'Meethe sapnon ke bageeche mein aaj sukoon se tehal aaiye',
    ],
    linesEnglish: [
      'Tucked inside night’s gentle quiet, tired thoughts blossom calmly',
      'Stroll softly through a bright garden of pleasant dreams tonight',
    ],
  },
  {
    title: 'रात का प्यारा संदेश',
    titleEnglish: 'Sweet Bedtime Note',
    linesHindi: [
      'दिन भर चाहे जितनी व्यस्तता रही हो, रात अपनों के नाम होती है',
      'दिल से शुभ रात्रि, आपका कल का दिन बहुत सुंदर होगा',
    ],
    linesHinglish: [
      'Din bhar chaahe jitni vyastata rahi ho, raat apnon ke naam hoti hai',
      'Dil se shubh raatri, aapka kal ka din bahut sundar hoga',
    ],
    linesEnglish: [
      'No matter how frantic the daylight hours felt, night belongs to calm reflection',
      'Heartfelt good night—tomorrow is already shaping up to be lovely',
    ],
  },
  {
    title: 'शांति का आलिंगन',
    titleEnglish: 'Embrace of Peace',
    linesHindi: [
      'चाँदनी रात में हर उलझन थोड़ी छोटी दिखने लगती है न',
      'उसी सुकून के साथ आज गहरी और मीठी नींद में खो जाइए',
    ],
    linesHinglish: [
      'Chaandni raat mein har uljhan thodi chhoti dikhne lagti hai na',
      'Usi sukoon ke saath aaj gehri aur meethi neend mein kho jaaiye',
    ],
    linesEnglish: [
      'Under calm moonlight, even big puzzles shrink down to gentler sizes',
      'Drift off smoothly into deep, restful slumber with that exact peace',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'नींद की परियाँ',
    titleEnglish: 'Gentle Sleep Arrives',
    linesHindi: [
      'आसमान से उतरकर सुकून आपके कमरे में आ बैठा है अब',
      'सारी सोच-विचार को ताला लगाकर चैन से सो जाइए सब',
    ],
    linesHinglish: [
      'Aasmaan se utarkar sukoon aapke kamre mein aa baitha hai ab',
      'Saari soch-vichaar ko taala lagaakar chain se so jaaiye sab',
    ],
    linesEnglish: [
      'Calm serenity has floated down quietly into your room tonight',
      'Lock away overthinking for the night and fall safely asleep',
    ],
  },
  {
    title: 'थकान को अलविदा',
    titleEnglish: 'Goodbye Fatigue',
    linesHindi: [
      'दिन भर की जिम्मेदारियाँ बख़ूबी निभा लीं आज भी आपने',
      'अब अपने आप को आराम देने का समय है, शुभ रात्रि',
    ],
    linesHinglish: [
      'Din bhar ki zimmedaariyaan bakhoobi nibha leen aaj bhi aapne',
      'Ab apne aap ko aaraam dene ka samay hai, shubh raatri',
    ],
    linesEnglish: [
      'You handled every responsibility with quiet grace once again today',
      'Now it is purely your turn to recharge and rest—good night',
    ],
  },
  {
    title: 'चाँद और तारे साथ',
    titleEnglish: 'Moon and Stars Watching',
    linesHindi: [
      'जब सारा शहर सो जाता है तब चाँद चुपचाप रोशनी बाँटता है',
      'आपकी रात भी उतनी ही शीतल और शांत रहे यही दुआ है',
    ],
    linesHinglish: [
      'Jab saara shehar so jaata hai tab chaand chupchaap roshni baant-ta hai',
      'Aapki raat bhi utni hi sheetal aur shaant rahe yahi dua hai',
    ],
    linesEnglish: [
      'Once the bustling town falls silent, the moon pours soft silver light everywhere',
      'Wishing your night feels just as cool, serene, and undisturbed',
    ],
  },
  {
    title: 'प्यारी झपकी',
    titleEnglish: 'Peaceful Slumber',
    linesHindi: [
      'बिना किसी भारी ख़्याल के आज सिर रखिए नरम तकिये पर',
      'सुबह जब उठें तो नई मुस्कुराहट आपका इंतज़ार कर रही हो',
    ],
    linesHinglish: [
      'Bina kisi bhaari khayaal ke aaj sir rakhiye naram takiye par',
      'Subah jab uthein to nayi muskurahat aapka intezaar kar rahi ho',
    ],
    linesEnglish: [
      'Rest your head upon a soft pillow free from heavy thoughts tonight',
      'So tomorrow morning greets you with fresh ease and a bright smile',
    ],
  },
  {
    title: 'मौन की मिठास',
    titleEnglish: 'Sweetness of Silence',
    linesHindi: [
      'दिन के शोर के बाद रात का मौन किसी वरदान से कम नहीं होता',
      'इस शांति को महसूस कीजिए और चैन की नींद लीजिए',
    ],
    linesHinglish: [
      'Din ke shor ke baad raat ka maun kisi vardaan se kam nahin hota',
      'Is shaanti ko mehsoos kijiye aur chain ki neend lijiye',
    ],
    linesEnglish: [
      'After hours of daytime noise, nighttime stillness feels like pure blessing',
      'Let that quiet wrap smoothly around you as you drift off to sleep',
    ],
  },
  {
    title: 'कल की नई ऊर्जा',
    titleEnglish: 'Recharging for Dawn',
    linesHindi: [
      'रात की अच्छी नींद कल के सारे बड़े काम आसान कर देती है',
      'इसलिए देर तक मत जागिए, मुस्कुराकर सो जाइए अब',
    ],
    linesHinglish: [
      'Raat ki acchi neend kal ke saare bade kaam aasaan kar deti hai',
      'Isliye der tak mat jaagiye, muskuraakar so jaaiye ab',
    ],
    linesEnglish: [
      'Deep, uninterrupted sleep makes tomorrow’s biggest goals feel effortless',
      'Do not stay up scrolling late—smile once and rest early tonight',
    ],
  },
  {
    title: 'माफ़ी और शांति',
    titleEnglish: 'Forgive and Rest',
    linesHindi: [
      'अगर आज किसी की बात बुरी लगी हो तो मन से जाने दीजिए',
      'सोते समय दिल साफ़ रखना सबसे बड़ी सुकून की दवा है',
    ],
    linesHinglish: [
      'Agar aaj kisi ki baat buri lagi ho to man se jaane dijiye',
      'Sote samay dil saaf rakhna sabse badi sukoon ki dawa hai',
    ],
    linesEnglish: [
      'If someone’s careless remark stung earlier today, release it gently now',
      'Keeping a light, unburdened chest before sleep is the best medicine',
    ],
  },
  {
    title: 'पलकों में संजोए सुनहरे ख्वाब',
    titleEnglish: 'Dreaming of Dawn',
    linesHindi: [
      'बंद पलकों में वही सुनहरे ख्वाब संजोकर रखिए रात को',
      'जिन्हें सच होते देखने के लिए आप कल सुबह फिर उठेंगे',
    ],
    linesHinglish: [
      'Band palkon mein wahi sunahre khwaab sanjokar rakhiye raat ko',
      'Jinhein sach hote dekhne ke liye aap kal subah phir uthenge',
    ],
    linesEnglish: [
      'Tuck only your warmest, brightest visions behind closed eyelids tonight',
      'The very ones you will wake excited to chase when sunrise returns',
    ],
  },
  {
    title: 'सुकून का कंबल',
    titleEnglish: 'Blanket of Calm',
    linesHindi: [
      'दिन चाहे जैसा भी गुज़रा हो, रात सब बराबर कर देती है आकर',
      'आराम की चादर ओढ़िए और शांति से आँखें बंद कीजिए',
    ],
    linesHinglish: [
      'Din chaahe jaisa bhi guzra ho, raat sab baraabar kar deti hai aakar',
      'Aaraam ki chaadar odhiye aur shaanti se aankhein band kijiye',
    ],
    linesEnglish: [
      'No matter how bumpy the day felt, night arrives to smooth everything even',
      'Pull up the blanket of calm and close your eyes in peace',
    ],
  },
  {
    title: 'दिल की शुभकामना रात को',
    titleEnglish: 'Warm Night Wishes',
    linesHindi: [
      'मेरी यही प्रार्थना है कि कोई बुरा सपना न छू पाए नींद आपकी',
      'हर पल सुकून भरा रहे — बहुत प्यारी शुभ रात्रि आपको',
    ],
    linesHinglish: [
      'Meri yahi praarthna hai ki koi bura sapna na chhoo paaye neend aapki',
      'Har pal sukoon bhara rahe — bahut pyaari shubh raatri aapko',
    ],
    linesEnglish: [
      'My quiet wish is that zero restless thoughts disturb your sleep tonight',
      'May every hour feel restful—a deeply peaceful good night to you',
    ],
  },
  {
    title: 'चमकते सितारों सा विश्राम',
    titleEnglish: 'Starlit Rest',
    linesHindi: [
      'नीले आसमान पर हज़ारों सितारे भी अब धीरे-धीरे शांत हैं',
      'आप भी थकान को विदा कीजिए और मीठी नींद में खो जाइए',
    ],
    linesHinglish: [
      'Neele aasmaan par hazaaron sitaare bhi ab dheere-dheere shaant hain',
      'Aap bhi thakaan ko vida kijiye aur meethi neend mein kho jaaiye',
    ],
    linesEnglish: [
      'Across the deep night sky, even thousands of stars glow calmly still',
      'Bid farewell to today’s tiredness and drift into sweet, deep sleep',
    ],
  },
  {
    title: 'दोस्त के नाम शुभ रात्रि',
    titleEnglish: 'Good Night Friend',
    linesHindi: [
      'सच्चे दोस्तों की याद हर रात दिन को थोड़ा और सुंदर बनाती है',
      'चैन से सो जाना मेरे यार, कल फिर नई मस्ती करनी है',
    ],
    linesHinglish: [
      'Sacche doston ki yaad har raat din ko thoda aur sundar banaati hai',
      'Chain se so jaana mere yaar, kal phir nayi masti karni hai',
    ],
    linesEnglish: [
      'Thinking of loyal friends each evening makes the whole day feel sweeter',
      'Sleep well tonight, buddy—tomorrow brings brand-new laughs to share',
    ],
  },
  {
    title: 'गहरी नींद का वरदान',
    titleEnglish: 'Blessing of Deep Sleep',
    linesHindi: [
      'सारी दुनिया के खज़ानों से बढ़कर होती है एक शांत रात की नींद',
      'ईश्वर करे आज आपको वही अनमोल विश्राम प्राप्त हो',
    ],
    linesHinglish: [
      'Saari duniya ke khazaanon se badhkar hoti hai ek shaant raat ki neend',
      'Ishwar kare aaj aapko wahi anmol vishraam praapt ho',
    ],
    linesEnglish: [
      'One night of peaceful, undisturbed sleep outweighs half the world’s gold',
      'May that exact priceless rest wrap warmly around you tonight',
    ],
  },
  {
    title: 'अधूरी चिंता छोड़ें',
    titleEnglish: 'Drop Unfinished Worry',
    linesHindi: [
      'दुनिया की सारी समस्याएँ आज ही रात में हल नहीं हो जाएँगी',
      'थोड़ा विश्राम कीजिए, तरोताज़ा दिमाग हर रास्ता ढूँढ लेगा कल',
    ],
    linesHinglish: [
      'Duniya ki saari samasyaayein aaj hi raat mein hal nahin ho jaayengi',
      'Thoda vishraam kijiye, tarotaaza dimaag har raasta dhoondh lega kal',
    ],
    linesEnglish: [
      'Not every puzzle in life needs solving before midnight tonight',
      'Rest smoothly—a refreshed mind always discovers clearer paths tomorrow',
    ],
  },
  {
    title: 'प्यारी रात का आगाज़',
    titleEnglish: 'Gentle Evening Close',
    linesHindi: [
      'सूरज ढल गया और तारों ने आसमान का मंच संभाल लिया है',
      'अपनों को शुभ रात्रि कहिए और सुकून की गोद में सो जाइए',
    ],
    linesHinglish: [
      'Sooraj dhal gaya aur taaron ne aasmaan ka manch sambhaal liya hai',
      'Apnon ko shubh raatri kahiye aur sukoon ki god mein so jaaiye',
    ],
    linesEnglish: [
      'Sunset faded softly and stars have taken over the night sky',
      'Say good night to loved ones and slip calmly into restful sleep',
    ],
  },
  {
    title: 'मन का सन्नाटा प्यारा',
    titleEnglish: 'Quiet Peaceful Mind',
    linesHindi: [
      'कभी-कभी रात का एकांत हमें अपने दिल की सबसे सच्ची बात सुनाता है',
      'उसी मधुर शांति के साथ पलकें झपका लीजिए आज',
    ],
    linesHinglish: [
      'Kabhi-kabhi raat ka ekaant humein apne dil ki sabse sacchi baat sunaata hai',
      'Usi madhur shaanti ke saath palkein jhapka lijiye aaj',
    ],
    linesEnglish: [
      'Sometimes quiet midnight air lets you hear your own heart’s gentlest truth',
      'Hold onto that serene calm as your eyelids grow comfortably heavy',
    ],
  },
  {
    title: 'थके क़दमों को रात का सहारा',
    titleEnglish: 'Wings of Dreams',
    linesHindi: [
      'जहाँ दिन में कदम थक जाते हैं, वहाँ रात सपनों को पंख देती है',
      'मीठी नींद लीजिए, कल फिर नई उड़ान भरनी है आपको',
    ],
    linesHinglish: [
      'Jahaan din mein qadam thak jaate hain, wahaan raat sapnon ko pankh deti hai',
      'Meethi neend lijiye, kal phir nayi udaan bharni hai aapko',
    ],
    linesEnglish: [
      'Where tired footsteps pause at dusk, night hands fresh wings to your dreams',
      'Rest deeply tonight—tomorrow waits for you to soar once more',
    ],
  },
  {
    title: 'शीतल रात्रि',
    titleEnglish: 'Cool Serene Night',
    linesHindi: [
      'चाँद की किरणें आपके कमरे में ठंडक और शांति लेकर आएँ',
      'आप गहरी नींद में सोएँ और हर घड़ी सुरक्षित रहें',
    ],
    linesHinglish: [
      'Chaand ki kirnein aapke kamre mein thandak aur shaanti lekar aayein',
      'Aap gehri neend mein soyen aur har ghadi surakshit rahein',
    ],
    linesEnglish: [
      'May cool silver moonbeams drift silently across your bedroom window',
      'May you sleep safely and rise refreshed at first daylight',
    ],
  },
  {
    title: 'सुकून का विराम',
    titleEnglish: 'Peaceful Pause',
    linesHindi: [
      'ज़िंदगी की तेज़ रफ़्तार को कुछ घंटों के लिए रोकने का वक़्त है रात',
      'गहरी साँस लें और ख़ुद को बिल्कुल शांत छोड़ दें अब',
    ],
    linesHinglish: [
      'Zindagi ki tez raftaar ko kuch ghanton ke liye rokne ka waqt hai raat',
      'Gehri saans lein aur khud ko bilkul shaant chhod dein ab',
    ],
    linesEnglish: [
      'Night is nature’s gentle pause button on a busy spinning day',
      'Take one slow exhale and let every tight muscle relax completely',
    ],
  },
  {
    title: 'मीठे सपनों के संग',
    titleEnglish: 'With Sweetest Dreams',
    linesHindi: [
      'आँखों के पीछे प्यारी यादें और सामने सुनहरा कल सजा रहे',
      'दिल की गहराई से आपको प्यार भरी शुभ रात्रि',
    ],
    linesHinglish: [
      'Aankhon ke peechhe pyaari yaadein aur saamne sunahra kal saja rahe',
      'Dil ki gehraai se aapko pyaar bhari shubh raatri',
    ],
    linesEnglish: [
      'May fond memories soothe your evening and golden hope wait for morning',
      'Wishing you a deeply peaceful, affectionate good night from the heart',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'रात का सुकून',
    titleEnglish: 'Nighttime Tranquility',
    linesHindi: [
      'मोबाइल की चमक बंद कीजिए और दिल की शांति महसूस कीजिए',
      'चैन की नींद से ज़्यादा कीमती कोई चीज़ नहीं होती रात में',
    ],
    linesHinglish: [
      'Mobile ki chamak band kijiye aur dil ki shaanti mehsoos kijiye',
      'Chain ki neend se zyada keemti koi cheez nahin hoti raat mein',
    ],
    linesEnglish: [
      'Switch off the glowing screen and feel quiet peace settle inside the room',
      'Nothing late at night is worth more than calm, uninterrupted sleep',
    ],
  },
  {
    title: 'सितारों का पहरा',
    titleEnglish: 'Guarded by Stars',
    linesHindi: [
      'आसमान के सारे सितारे आपकी मीठी नींद के लिए रोशन हैं आज',
      'बेफिक्र होकर आँखें मूंदिए, शुभ रात्रि मेरे दोस्त',
    ],
    linesHinglish: [
      'Aasmaan ke saare sitaare aapki meethi neend ke liye roshan hain aaj',
      'Befikr hokar aankhein moondiye, shubh raatri mere dost',
    ],
    linesEnglish: [
      'Every star overhead tonight shines gently over your peaceful sleep',
      'Close your eyes without a single worry—good night, dear friend',
    ],
  },
  {
    title: 'दिल हल्का, नींद गहरी',
    titleEnglish: 'Light Heart Deep Rest',
    linesHindi: [
      'जितना हल्का आपका मन होगा, उतनी ही सुंदर आपकी नींद होगी',
      'आज की सारी थकान उतारकर बिस्तर पर लेट जाइए अब',
    ],
    linesHinglish: [
      'Jitna halka aapka man hoga, utni hi sundar aapki neend hogi',
      'Aaj ki saari thakaan utaarkar bistar par let jaaiye ab',
    ],
    linesEnglish: [
      'The lighter your thoughts feel, the sweeter and deeper your sleep turns',
      'Set down every ounce of today’s effort and stretch out comfortably now',
    ],
  },
  {
    title: 'चाँदनी में दुआ',
    titleEnglish: 'Moonlit Blessing',
    linesHindi: [
      'चाँदनी रात की ठंडक आपके मन को भी वैसी ही शांति दे जाए',
      'कल सुबह जब जागें तो हर तरफ़ खुशियाँ ही खुशियाँ दिखें',
    ],
    linesHinglish: [
      'Chaandni raat ki thandak aapke man ko bhi waisi hi shaanti de jaaye',
      'Kal subah jab jaagein to har taraf khushiyaan hi khushiyaan dikhein',
    ],
    linesEnglish: [
      'May the cool stillness of moonlight calm every corner of your mind',
      'So when you wake tomorrow, bright cheer greets you everywhere',
    ],
  },
  {
    title: 'सोने से पहले याद',
    titleEnglish: 'Last Thought Tonight',
    linesHindi: [
      'रात को सोने से पहले अपनों को एक बार याद ज़रूर किया कीजिए',
      'मीठी यादों के साथ आई हुई नींद हमेशा ताज़गी देती है',
    ],
    linesHinglish: [
      'Raat ko sone se pehle apnon ko ek baar yaad zaroor kiya kijiye',
      'Meethi yaadon ke saath aayi hui neend hamesha taazgi deti hai',
    ],
    linesEnglish: [
      'Think warmly once of someone dear right before turning out the light',
      'Sleep that arrives wrapped in fond affection always wakes you refreshed',
    ],
  },
  {
    title: 'रेशमी ख्वाब',
    titleEnglish: 'Velvet Dreams',
    linesHindi: [
      'आज की रात किसी रेशमी चादर सी मुलायम और सुखद रहे आपके लिए',
      'प्यारे और सुकून भरे सपनों के साथ शुभ रात्रि',
    ],
    linesHinglish: [
      'Aaj ki raat kisi reshami chaadar si mulaayam aur sukhad rahe aapke liye',
      'Pyaare aur sukoon bhare sapnon ke saath shubh raatri',
    ],
    linesEnglish: [
      'May tonight feel as soft and comforting as a fresh silk blanket',
      'Wishing you gentle dreams and a wonderful good night',
    ],
  },
  {
    title: 'अंधेरे में उम्मीद',
    titleEnglish: 'Quiet Hope at Night',
    linesHindi: [
      'अंधेरी रात सिर्फ़ आराम का संकेत होती है, किसी अंत का नहीं',
      'विश्वास से सो जाइए, कल का उजाला पहले से ज़्यादा उज्ज्वल होगा',
    ],
    linesHinglish: [
      'Andheri raat sirf aaraam ka sanket hoti hai, kisi ant ka nahin',
      'Vishwas se so jaaiye, kal ka ujaala pehle se zyada ujjwal hoga',
    ],
    linesEnglish: [
      'Quiet darkness is simply a gentle sign to rest, never an ending',
      'Sleep with calm faith—tomorrow’s light will shine brighter still',
    ],
  },
  {
    title: 'शांति की राग',
    titleEnglish: 'Evening Melody',
    linesHindi: [
      'हल्का संगीत, शांत कमरा और मन में किसी बात की दौड़ नहीं',
      'इस प्यारे एहसास के साथ आज चैन से सो जाइएगा',
    ],
    linesHinglish: [
      'Halka sangeet, shaant kamra aur man mein kisi baat ki daud nahin',
      'Is pyaare ehsaas ke saath aaj chain se so jaaiyega',
    ],
    linesEnglish: [
      'Soft music, a quiet bedroom, and zero hurry left inside your head',
      'Hold onto that peaceful feeling as you fall soundly asleep tonight',
    ],
  },
  {
    title: 'नए दिन की तैयारी',
    titleEnglish: 'Resting for Tomorrow',
    linesHindi: [
      'हर सुंदर कल की शुरुआत एक शांत और पूरी नींद से होती है',
      'ख़ुद को प्यार दीजिए और समय से सो जाइए आज',
    ],
    linesHinglish: [
      'Har sundar kal ki shuruaat ek shaant aur poori neend se hoti hai',
      'Khud ko pyaar dijiye aur samay se so jaaiye aaj',
    ],
    linesEnglish: [
      'Every joyful tomorrow begins with a full, peaceful night of sleep',
      'Show yourself real kindness and head off to rest on time tonight',
    ],
  },
  {
    title: 'रात का आशीर्वाद',
    titleEnglish: 'Nighttime Blessing',
    linesHindi: [
      'ऊपर वाले की निगाह हर वक़्त आपके घर पर बरसती रहे रात भर',
      'आप सुरक्षित और शांत सोएँ — शुभ रात्रि',
    ],
    linesHinglish: [
      'Upar waale ki nigaah har waqt aapke ghar par barasti rahe raat bhar',
      'Aap surakshit aur shaant soyen — shubh raatri',
    ],
    linesEnglish: [
      'May quiet grace watch gently over your home all through the night',
      'Sleep safe, warm, and peacefully—good night',
    ],
  },
  {
    title: 'तनाव से आज़ादी',
    titleEnglish: 'Free From Tension',
    linesHindi: [
      'दिन भर के तनाव को कमरे के दरवाज़े के बाहर ही उतार दीजिए',
      'भीतर सिर्फ़ शांति, मुस्कान और आराम लेकर आइएगा',
    ],
    linesHinglish: [
      'Din bhar ke tanaav ko kamre ke darwaaze ke baahar hi utaar dijiye',
      'Bheetar sirf shaanti, muskaan aur aaraam lekar aaiyega',
    ],
    linesEnglish: [
      'Hang today’s stress on a hook right outside your bedroom door',
      'Carry only calm, gentle ease, and rest inside with you tonight',
    ],
  },
  {
    title: 'मधुर विश्राम',
    titleEnglish: 'Sweet Rest',
    linesHindi: [
      'फ़िक्र करने से रास्ता नहीं मिलता, विश्राम से ताक़त ज़रूर मिलती है',
      'इसलिए गहरी नींद सोइए और कल नई स्फूर्ति के साथ जागिए',
    ],
    linesHinglish: [
      'Fikr karne se raasta nahin milta, vishraam se taaqat zaroor milti hai',
      'Isliye gehri neend soiye aur kal nayi sphoorti ke saath jaagiye',
    ],
    linesEnglish: [
      'Late-night worrying rarely solves puzzles, while deep rest restores strength',
      'Sleep soundly tonight and wake ready with bright clarity tomorrow',
    ],
  },
  {
    title: 'नींद और मुस्कान',
    titleEnglish: 'Sleep With a Smile',
    linesHindi: [
      'सोते वक़्त चेहरे पर एक छोटी सी मुस्कान बहुत ज़रूरी होती है',
      'वही मुस्कान रात भर मन को हल्का और खुश रखती है',
    ],
    linesHinglish: [
      'Sote waqt chehre par ek chhoti si muskaan bahut zaroori hoti hai',
      'Wahi muskaan raat bhar man ko halka aur khush rakhti hai',
    ],
    linesEnglish: [
      'Falling asleep with one small, soft smile does wonders for the heart',
      'That gentle warmth keeps your spirit calm and bright all night long',
    ],
  },
  {
    title: 'चाँद का पैगाम',
    titleEnglish: 'Moonlight Note',
    linesHindi: [
      'खिड़की से झाँकते चाँद ने कहा है अभी-अभी कान में मेरे',
      'सब अपने चैन से सो रहे हैं, अब आप भी विश्राम कीजिए',
    ],
    linesHinglish: [
      'Khidki se jhaankte chaand ne kaha hai abhi-abhi kaan mein mere',
      'Sab apne chain se so rahe hain, ab aap bhi vishraam kijiye',
    ],
    linesEnglish: [
      'The silver moon peeking past my window just whispered softly',
      'Everyone is resting calmly now—time for you to sleep well too',
    ],
  },
  {
    title: 'सच्चे सुख की रात',
    titleEnglish: 'Night of True Peace',
    linesHindi: [
      'छत सुरक्षित हो, परिवार पास हो और मन में संतोष हो जब',
      'तो समझिए हर रात किसी सुंदर आशीर्वाद से कम नहीं होती',
    ],
    linesHinglish: [
      'Chhat surakshit ho, parivaar paas ho aur man mein santosh ho jab',
      'To samajhiye har raat kisi sundar aashirwaad se kam nahin hoti',
    ],
    linesEnglish: [
      'With a safe roof overhead, family nearby, and quiet contentment inside',
      'Every ordinary night becomes nothing short of a pure blessing',
    ],
  },
  {
    title: 'प्यारी सी गुड नाइट',
    titleEnglish: 'Lovely Good Night',
    linesHindi: [
      'चाँद-तारे भी अब आराम की तैयारी में जुट गए हैं ऊपर',
      'मेरी तरफ़ से प्यार भरी शुभ रात्रि, बहुत मीठी नींद आए आपको',
    ],
    linesHinglish: [
      'Chaand-taare bhi ab aaraam ki taiyaari mein jut gaye hain upar',
      'Meri taraf se pyaar bhari shubh raatri, bahut meethi neend aaye aapko',
    ],
    linesEnglish: [
      'Even the high stars look ready to dim into restful quiet above',
      'Sending a warm good night your way—may the sweetest sleep find you soon',
    ],
  },
  {
    title: 'दिल की शांति के लिए',
    titleEnglish: 'For Heart Serenity',
    linesHindi: [
      'आज जो भी मिला उसके लिए धन्यवाद और जो छूटा उसकी चिंता नहीं',
      'इसी शांत भाव के साथ सो जाइए, शुभ रात्रि',
    ],
    linesHinglish: [
      'Aaj jo bhi mila uske liye dhanyavaad aur jo chhoota uski chinta nahin',
      'Isi shaant bhaav ke saath so jaaiye, shubh raatri',
    ],
    linesEnglish: [
      'Gratitude for everything today held, and zero stress over what slipped past',
      'Slip peacefully to sleep holding that serene balance—good night',
    ],
  },
  {
    title: 'आसमान की चादर',
    titleEnglish: 'Sky Full of Peace',
    linesHindi: [
      'रात का गहरा नीला रंग आंखों को बड़ा सुकून देता है हमेशा',
      'सारी उलझनों को छोड़कर चैन से सो जाइए अब',
    ],
    linesHinglish: [
      'Raat ka gehra neela rang aankhon ko bada sukoon deta hai hamesha',
      'Saari uljhanon ko chhodkar chain se so jaaiye ab',
    ],
    linesEnglish: [
      'The deep indigo night sky always soothes tired eyes at the end of day',
      'Set every puzzle aside and rest safely until morning',
    ],
  },
  {
    title: 'कल की उम्मीद के साथ',
    titleEnglish: 'Sleeping With Hope',
    linesHindi: [
      'आने वाला सवेरा आपकी झोली में कई नई खुशियाँ डालने वाला है',
      'इसी प्यारी उम्मीद को तकिये के पास रखकर सो जाइए',
    ],
    linesHinglish: [
      'Aane waala sawera aapki jholi mein kai nayi khushiyaan daalne waala hai',
      'Isi pyaari ummeed ko takiye ke paas rakhkar so jaaiye',
    ],
    linesEnglish: [
      'Tomorrow’s sunrise arrives ready to tuck fresh joys into your day',
      'Rest easy tonight keeping that quiet hope right beside your pillow',
    ],
  },
  {
    title: 'ख़ूबसूरत नींद',
    titleEnglish: 'Restful Night',
    linesHindi: [
      'रात केवल दिन के ख़त्म होने का नाम नहीं है दोस्त मेरे',
      'ये हमारे शरीर और आत्मा को फिर से ताज़ा करने का उपहार है',
    ],
    linesHinglish: [
      'Raat kewal din ke khatm hone ka naam nahin hai dost mere',
      'Ye hamaare shareer aur aatma ko phir se taaza karne ka uphaar hai',
    ],
    linesEnglish: [
      'Night is never merely the closing curtain on today, my friend',
      'It is life’s gentle gift designed to restore both body and spirit',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'शांति से भरी साँस',
    titleEnglish: 'Calm Evening Breath',
    linesHindi: [
      'सोने से पहले तीन बार गहरी और शांत साँस लेकर देखिएगा',
      'पल भर में सारा बोझ उतर जाएगा और नींद जल्दी आ जाएगी',
    ],
    linesHinglish: [
      'Sone se pehle teen baar gehri aur shaant saans lekar dekhiyega',
      'Pal bhar mein saara bojh utar jaayega aur neend jaldi aa jaayegi',
    ],
    linesEnglish: [
      'Try taking three slow, quiet breaths right before closing your eyes tonight',
      'Notice how quickly heaviness melts away and gentle sleep takes over',
    ],
  },
  {
    title: 'सपनों का महल',
    titleEnglish: 'Palace of Sweet Dreams',
    linesHindi: [
      'आज रात आपके ख्वाबों में सिर्फ़ उजाले और मुस्कुराहटें हों',
      'सुबह जब उठें तो तन और मन दोनों हल्के महसूस हों',
    ],
    linesHinglish: [
      'Aaj raat aapke khwaabon mein sirf ujaale aur muskurahatein hon',
      'Subah jab uthein to tan aur man donon halke mehsoos hon',
    ],
    linesEnglish: [
      'May only bright warmth and gentle smiles visit your dreams tonight',
      'So when daylight returns, both mind and body feel completely renewed',
    ],
  },
  {
    title: 'रात्रि का सुकून',
    titleEnglish: 'Peace of Night',
    linesHindi: [
      'भागती दुनिया भी रात होते ही थोड़ा ठहरकर आराम करती है',
      'आप भी खुद को थोड़ा वक़्त दीजिए और मीठी नींद सोइए',
    ],
    linesHinglish: [
      'Bhaagti duniya bhi raat hote hi thoda theharkar aaraam karti hai',
      'Aap bhi khud ko thoda waqt dijiye aur meethi neend soiye',
    ],
    linesEnglish: [
      'Even the fastest-moving city slows down to rest once night arrives',
      'Give yourself that exact same gentle pause and sleep well tonight',
    ],
  },
  {
    title: 'अपनों की ख़ुशी की दुआ',
    titleEnglish: 'Prayers for Loved Ones',
    linesHindi: [
      'सारे अपने चैन से सोएँ और किसी के हिस्से में कोई दुख न आए',
      'यही सुंदर प्रार्थना लेकर आज की रात विदा होती है',
    ],
    linesHinglish: [
      'Saare apne chain se soyen aur kisi ke hisse mein koi dukh na aaye',
      'Yahi sundar praarthna lekar aaj ki raat vida hoti hai',
    ],
    linesEnglish: [
      'May everyone dear sleep comfortably without sorrow touching their door',
      'Carrying that gentle prayer, let today wind smoothly down to rest',
    ],
  },
  {
    title: 'मीठा विश्राम',
    titleEnglish: 'Sweet Slumber',
    linesHindi: [
      'चाँद ने भी बादलों के पीछे से प्यारा इशारा किया है अभी',
      'अब चश्मा और फ़ोन रखकर सो जाइए, शुभ रात्रि',
    ],
    linesHinglish: [
      'Chaand ne bhi baadalon ke peechhe se pyaara ishaara kiya hai abhi',
      'Ab chashma aur phone rakhkar so jaaiye, shubh raatri',
    ],
    linesEnglish: [
      'Even the moon peeking behind soft clouds signaled it is late',
      'Set your glasses and phone down now and sleep peacefully—good night',
    ],
  },
  {
    title: 'निर्मल रात',
    titleEnglish: 'Clear Peaceful Night',
    linesHindi: [
      'किसी की ग़लती या कड़वी बात को रात तक मत खींचिए कभी',
      'दिल हल्का कीजिए और सुकून से सो जाइए मेरे मित्र',
    ],
    linesHinglish: [
      'Kisi ki galti ya kadwi baat ko raat tak mat kheenchiye kabhi',
      'Dil halka kijiye aur sukoon se so jaaiye mere mitra',
    ],
    linesEnglish: [
      'Never carry anyone’s sharp remark or mistake all the way into bedtime',
      'Lighten your chest cleanly and sleep calmly tonight, my friend',
    ],
  },
  {
    title: 'तारों की छतरी',
    titleEnglish: 'Canopy of Stars',
    linesHindi: [
      'सूरज के जाने पर आसमान में तारों की छतरी सज जाती है',
      'उसी सुंदर छतरी के नीचे सुकून भरी नींद आती है',
    ],
    linesHinglish: [
      'Sooraj ke jaane par aasmaan mein taaron ki chhatri saj jaati hai',
      'Usi sundar chhatri ke neeche sukoon bhari neend aati hai',
    ],
    linesEnglish: [
      'Once sunset steps away, a quiet canopy of stars opens overhead',
      'And tucked safely beneath it, restful sleep arrives right on cue',
    ],
  },
  {
    title: 'शांत पल रात के',
    titleEnglish: 'Calm Hours Tonight',
    linesHindi: [
      'जब दिन भर की आवाज़ें थम जाती हैं कमरे के चारों ओर',
      'तब सुकून ख़ुद आकर माथे पर हाथ फेर देता है धीरे से',
    ],
    linesHinglish: [
      'Jab din bhar ki aawaazein tham jaati hain kamre ke chaaron or',
      'Tab sukoon khud aakar maathe par haath pher deta hai dheere se',
    ],
    linesEnglish: [
      'When every daytime sound finally quiets outside your bedroom walls',
      'Peace itself steps in and smooths every crease off your forehead',
    ],
  },
  {
    title: 'सपनों को सलाम',
    titleEnglish: 'Salute to Sweet Dreams',
    linesHindi: [
      'आज का हर अच्छा पल संजोकर रखिए और बाकी सब भूल जाइए',
      'सुनहरे सपनों के साथ बहुत-बहुत शुभ रात्रि आपको',
    ],
    linesHinglish: [
      'Aaj ka har accha pal sanjokar rakhiye aur baaqi sab bhool jaaiye',
      'Sunahre sapnon ke saath bahut-bahut shubh raatri aapko',
    ],
    linesEnglish: [
      'Keep only today’s warmest moments close and let everything else fade',
      'Wishing you golden dreams and a deeply calming good night',
    ],
  },
  {
    title: 'आराम की घड़ी',
    titleEnglish: 'Hour of Rest',
    linesHindi: [
      'जितनी शिद्दत से काम करते हैं दिन में, उतने प्यार से सोइए रात में',
      'सेहत और शांति दोनों इसी संतुलन से सलामत रहती हैं',
    ],
    linesHinglish: [
      'Jitni shiddat se kaam karte hain din mein, utne pyaar se soiye raat mein',
      'Sehat aur shaanti donon isi santulan se salaamat rehti hain',
    ],
    linesEnglish: [
      'Rest tonight with the same genuine care you gave your work all day',
      'Both bright health and steady peace thrive on that gentle balance',
    ],
  },
  {
    title: 'हवा का मीठा झोंका',
    titleEnglish: 'Soft Night Breeze',
    linesHindi: [
      'रात की हवा खिड़की से आकर कोई मीठा गीत सुना रही है',
      'आँखें बंद कीजिए, आपकी गहरी नींद का समय आ गया है',
    ],
    linesHinglish: [
      'Raat ki hawa khidki se aakar koi meetha geet suna rahi hai',
      'Aankhein band kijiye, aapki gehri neend ka samay aa gaya hai',
    ],
    linesEnglish: [
      'A soft night breeze drifting past the curtains hums a quiet lullaby',
      'Close your eyes calmly—your hour of peaceful rest has arrived',
    ],
  },
  {
    title: 'सुकून भरा अंतिम संदेश',
    titleEnglish: 'Peaceful Last Text',
    linesHindi: [
      'सोने से पहले यह आखिरी संदेश भेज रहा हूँ मुस्कान के साथ',
      'आपकी रात शुभ हो और आने वाला कल और भी प्यारा हो',
    ],
    linesHinglish: [
      'Sone se pehle yeh aakhiri sandesh bhej raha hoon muskaan ke saath',
      'Aapki raat shubh ho aur aane waala kal aur bhi pyaara ho',
    ],
    linesEnglish: [
      'Sending this final message before sleep with a warm smile behind it',
      'Have a wonderfully restful night and an even brighter tomorrow',
    ],
  },
  {
    title: 'हल्की पलकों का विश्राम',
    titleEnglish: 'Rest for Tired Eyes',
    linesHindi: [
      'दिन भर की रोशनी देखने के बाद पलकें भी अब विश्राम माँगती हैं',
      'इन्हें प्यार से बंद कर लीजिए, शुभ रात्रि मेरे यार',
    ],
    linesHinglish: [
      'Din bhar ki roshni dekhne ke baad palkein bhi ab vishraam maangti hain',
      'Inhein pyaar se band kar lijiye, shubh raatri mere yaar',
    ],
    linesEnglish: [
      'After taking in the bright world all day long, tired eyelids ask for calm',
      'Let them shut gently right now—good night, dear friend',
    ],
  },
  {
    title: 'दिल की गहराई से शुभ रात्रि',
    titleEnglish: 'Good Night From the Heart',
    linesHindi: [
      'ईश्वर आपके घर में हर रात चैन और सुरक्षा की चादर बिछाए',
      'हर आँख में मीठे सपने हों और कोई दुख करीब न आए',
    ],
    linesHinglish: [
      'Ishwar aapke ghar mein har raat chain aur suraksha ki chaadar bichhaaye',
      'Har aankh mein meethe sapne hon aur koi dukh qareeb na aaye',
    ],
    linesEnglish: [
      'May calm comfort and safety blanket your home every single night',
      'May sweet dreams grace every pillow and worry stay far away',
    ],
  },
  {
    title: 'शांत हृदय',
    titleEnglish: 'Still Heart Tonight',
    linesHindi: [
      'सोच का शोर कम होते ही रात बहुत खूबसूरत लगने लगती है',
      'खुद को शांत कीजिए और चैन से आराम कीजिए आज',
    ],
    linesHinglish: [
      'Soch ka shor kam hote hi raat bahut khoobsurat lagne lagti hai',
      'Khud ko shaant kijiye aur chain se aaraam kijiye aaj',
    ],
    linesEnglish: [
      'The moment inner chatter quiets down, nighttime feels wonderfully gentle',
      'Let your mind grow still and rest completely tonight',
    ],
  },
  {
    title: 'नई सुबह का वादा',
    titleEnglish: 'Promise of Tomorrow',
    linesHindi: [
      'हर रात हमें विश्वास दिलाती है कि फिर से एक प्यारी सुबह आएगी',
      'इसी सुंदर भरोसे के साथ मीठी नींद में खो जाइए',
    ],
    linesHinglish: [
      'Har raat humein vishwas dilaati hai ki phir se ek pyaari subah aayegi',
      'Isi sundar bharose ke saath meethi neend mein kho jaaiye',
    ],
    linesEnglish: [
      'Every night carries a quiet promise that another gentle dawn will arrive',
      'Tucked inside that calm trust, drift smoothly off to sleep',
    ],
  },
  {
    title: 'तारे और ख्वाब',
    titleEnglish: 'Stars and Dreams',
    linesHindi: [
      'आकाश के अनगिनत तारे भी अब सो जाने का संकेत दे रहे हैं',
      'शुभ रात्रि, मीठे सपने आपका स्वागत करने को तैयार हैं',
    ],
    linesHinglish: [
      'Aakaash ke anginat taare bhi ab so jaane ka sanket de rahe hain',
      'Shubh raatri, meethe sapne aapka swaagat karne ko taiyaar hain',
    ],
    linesEnglish: [
      'Countless stars overhead softly signal it is finally time for rest',
      'Good night—gentle, pleasant dreams are already waiting for you',
    ],
  },
  {
    title: 'सपनों में उजाला',
    titleEnglish: 'Light Inside Dreams',
    linesHindi: [
      'रात चाहे बाहर से गहरी दिखे पर आपके सपनों में उजाला रहे',
      'चेहरे पर मुस्कान के साथ चैन की नींद आए आपको',
    ],
    linesHinglish: [
      'Raat chaahe baahar se gehri dikhe par aapke sapnon mein ujaala rahe',
      'Chehre par muskaan ke saath chain ki neend aaye aapko',
    ],
    linesEnglish: [
      'Though night sits dark outside your window, may light fill your dreams',
      'May deep, peaceful slumber find you wearing a calm smile',
    ],
  },
  {
    title: 'मुलायम रात',
    titleEnglish: 'Soft Quiet Night',
    linesHindi: [
      'तकिये पर सिर रखते ही आज की सारी भागदौड़ शांत हो जाए',
      'कल के सुंदर दिन के लिए भरपूर आराम मिले आपको',
    ],
    linesHinglish: [
      'Takiye par sir rakhte hi aaj ki saari bhaagdaud shaant ho jaaye',
      'Kal ke sundar din ke liye bharpoor aaraam mile aapko',
    ],
    linesEnglish: [
      'May every trace of today’s hustle settle softly as your head rests',
      'And may deep sleep recharge you completely for a lovely tomorrow',
    ],
  },
  {
    title: 'सुकून भरी विदाई दिन को',
    titleEnglish: 'Peaceful End of Day',
    linesHindi: [
      'आज का दिन अब शांत होकर यादों के पन्ने में सिमट चुका है',
      'प्यार से शुभ रात्रि कहिए और गहरी नींद का आनंद लीजिए',
    ],
    linesHinglish: [
      'Aaj ka din ab shaant hokar yaadon ke panne mein simat chuka hai',
      'Pyaar se shubh raatri kahiye aur gehri neend ka aanand lijiye',
    ],
    linesEnglish: [
      'Today has wound calmly down and tucked itself neatly into memory',
      'Wish your world a gentle good night and enjoy deep, unbroken rest',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'चाँद की ठंडी छाया',
    titleEnglish: 'Cool Moonlight Shade',
    linesHindi: [
      'पूरे दिन की धूप के बाद चाँद की ठंडी छाया कितनी भली लगती है',
      'उसी सुकून को समेटकर आज आराम से सो जाइए आप',
    ],
    linesHinglish: [
      'Poore din ki dhoop ke baad chaand ki thandi chhaaya kitni bhali lagti hai',
      'Usi sukoon ko sametkar aaj aaraam se so jaaiye aap',
    ],
    linesEnglish: [
      'After bright daytime heat, how soothing cool moonlight feels overhead',
      'Wrap yourself inside that quiet comfort and sleep peacefully tonight',
    ],
  },
  {
    title: 'बिना फ़िक्र की रात',
    titleEnglish: 'Carefree Night',
    linesHindi: [
      'जो बात आज हल न हो सकी उसे ऊपर वाले के भरोसे छोड़िए',
      'दिल से फ़िक्र निकालकर आज सुकून से सो जाइए',
    ],
    linesHinglish: [
      'Jo baat aaj hal na ho saki use upar waale ke bharose chhodiye',
      'Dil se fikr nikaalkar aaj sukoon se so jaaiye',
    ],
    linesEnglish: [
      'Hand over whatever remained unsolved today to quiet patience and grace',
      'Release every heavy knot and sleep calmly through the night',
    ],
  },
  {
    title: 'मीठी यादों का तकिया',
    titleEnglish: 'Pillow of Sweet Memories',
    linesHindi: [
      'मन में कोई मीठी याद और होठों पर हल्की मुस्कान रखकर सोइए',
      'रात बहुत प्यारी गुज़रेगी और सुबह ताज़गी भरी होगी',
    ],
    linesHinglish: [
      'Man mein koi meethi yaad aur hothon par halki muskaan rakhkar soiye',
      'Raat bahut pyaari guzregi aur subah taazgi bhari hogi',
    ],
    linesEnglish: [
      'Sleep holding one fond memory close and a gentle smile on your lips',
      'The night will pass peacefully and sunrise will feel crisp and bright',
    ],
  },
  {
    title: 'सुकून का घर',
    titleEnglish: 'Home of Peace',
    linesHindi: [
      'सारा दिन चाहे जहाँ भी घूमें पर असली सुकून अपने बिस्तर में ही है',
      'आराम कीजिए, घर की शांति आपको बुला रही है, शुभ रात्रि',
    ],
    linesHinglish: [
      'Saara din chaahe jahaan bhi ghoomein par asli sukoon apne bistar mein hi hai',
      'Aaraam kijiye, ghar ki shaanti aapko bula rahi hai, shubh raatri',
    ],
    linesEnglish: [
      'Wherever the day takes you, real comfort waits inside your own bed',
      'Rest easy now—the quiet peace of home welcomes you—good night',
    ],
  },
  {
    title: 'तारों जैसा उजाला',
    titleEnglish: 'Gentle Starlight',
    linesHindi: [
      'कमरे में अंधेरा हो तब भी मन में उम्मीदों के तारे चमकते रहें',
      'मीठे सपनों के साथ गहरी नींद आए आपको आज रात',
    ],
    linesHinglish: [
      'Kamre mein andhera ho tab bhi man mein ummeedon ke taare chamakte rahein',
      'Meethe sapnon ke saath gehri neend aaye aapko aaj raat',
    ],
    linesEnglish: [
      'Even after turning the bedroom lights off, keep stars of hope glowing inside',
      'May sweet dreams carry you gently through deep sleep tonight',
    ],
  },
  {
    title: 'शांत सफ़र नींद का',
    titleEnglish: 'Voyage Into Rest',
    linesHindi: [
      'अब सपनों की नगरी की शांत यात्रा पर निकलने का वक़्त है',
      'टिकट सिर्फ़ एक हल्की सी मुस्कान है — शुभ रात्रि',
    ],
    linesHinglish: [
      'Ab sapnon ki nagri ki shaant yatra par nikalne ka waqt hai',
      'Ticket sirf ek halki si muskaan hai — shubh raatri',
    ],
    linesEnglish: [
      'Time to embark quietly toward the peaceful land of dreams tonight',
      'The only boarding pass needed is one gentle smile—good night',
    ],
  },
  {
    title: 'चैन की साँस',
    titleEnglish: 'Peaceful Sigh',
    linesHindi: [
      'आज का सारा काम पूरा करके जब बिस्तर पर बैठते हैं हम',
      'तब निकलती चैन की साँस पूरे दिन की सबसे सुंदर चीज़ होती है',
    ],
    linesHinglish: [
      'Aaj ka saara kaam poora karke jab bistar par baithte hain hum',
      'Tab nikalti chain ki saans poore din ki sabse sundar cheez hoti hai',
    ],
    linesEnglish: [
      'When every daytime chore is wrapped up and you finally sink into bed',
      'That long exhale of relief is easily the sweetest moment of the day',
    ],
  },
  {
    title: 'खूबसूरत ख्वाबों का मौसम',
    titleEnglish: 'Season of Sweet Dreams',
    linesHindi: [
      'हल्की हवा, शांत घर और आँखों में प्यारे ख्वाबों का मौसम',
      'दिल से यही दुआ है कि आज की रात बहुत आरामदेह हो आपकी',
    ],
    linesHinglish: [
      'Halki hawa, shaant ghar aur aankhon mein pyaare khwaabon ka mausam',
      'Dil se yahi dua hai ki aaj ki raat bahut aaraamdeh ho aapki',
    ],
    linesEnglish: [
      'Soft night air, a still house, and warm dreams waiting at the edge of sleep',
      'Wishing from the heart that tonight feels deeply restorative for you',
    ],
  },
  {
    title: 'अपनों के लिए प्रार्थना',
    titleEnglish: 'Evening Prayer',
    linesHindi: [
      'हर रात सोने से पहले सबकी भलाई की दुआ करना अच्छी आदत है',
      'इससे दिल भी शांत होता है और नींद भी बहुत सुकून की आती है',
    ],
    linesHinglish: [
      'Har raat sone se pehle sabki bhalaai ki dua karna acchi aadat hai',
      'Isse dil bhi shaant hota hai aur neend bhi bahut sukoon ki aati hai',
    ],
    linesEnglish: [
      'Wishing well over loved ones before sleep is such a grounding evening habit',
      'It calms the chest gently and invites remarkably peaceful slumber',
    ],
  },
  {
    title: 'रोशनी से विश्राम तक',
    titleEnglish: 'From Light to Rest',
    linesHindi: [
      'दिन ने अपना पूरा उजाला बाँट दिया, अब रात की शांति की बारी है',
      'थके कदमों को आराम दीजिए, शुभ रात्रि मेरे मित्र',
    ],
    linesHinglish: [
      'Din ne apna poora ujaala baant diya, ab raat ki shaanti ki baari hai',
      'Thake qadmon ko aaraam dijiye, shubh raatri mere mitra',
    ],
    linesEnglish: [
      'Daylight shared every ounce of brightness—now it is night’s turn to soothe',
      'Give your tired steps full rest tonight—good night, dear friend',
    ],
  },
  {
    title: 'प्यारा विश्राम',
    titleEnglish: 'Tender Rest',
    linesHindi: [
      'कठिन दिन भी बीत जाते हैं जब रात को थोड़ा चैन मिल जाए',
      'आराम से सो जाइए, कल फिर सब नया लगने लगेगा',
    ],
    linesHinglish: [
      'Kathin din bhi beet jaate hain jab raat ko thoda chain mil jaaye',
      'Aaraam se so jaaiye, kal phir sab naya lagne lagega',
    ],
    linesEnglish: [
      'Even heavy days soften completely once a peaceful night steps in',
      'Sleep comfortably now—tomorrow morning will look brand new again',
    ],
  },
  {
    title: 'सुकून की घड़ी',
    titleEnglish: 'Hour of Serenity',
    linesHindi: [
      'घड़ी की सुइयाँ भी कह रही हैं कि अब काम बंद करने का समय है',
      'फ़िक्रें कल के लिए छोड़िए और मीठी नींद में खो जाइए',
    ],
    linesHinglish: [
      'Ghadi ki suiyaan bhi keh rahi hain ki ab kaam band karne ka samay hai',
      'Fikrein kal ke liye chhodiye aur meethi neend mein kho jaaiye',
    ],
    linesEnglish: [
      'The hands on the clock agree it is officially time to close today’s work',
      'Leave plans patiently for morning and sink into gentle sleep',
    ],
  },
  {
    title: 'चाँद जैसा उजाला मन में',
    titleEnglish: 'Moonlight Calm Within',
    linesHindi: [
      'जैसे चाँद बिना शोर मचाए पूरी धरती को ठंडक पहुँचाता है',
      'वैसे ही आपकी आज की रात बिल्कुल शांत और सुखद हो',
    ],
    linesHinglish: [
      'Jaise chaand bina shor machaaye poori dharti ko thandak pahunchaata hai',
      'Waise hi aapki aaj ki raat bilkul shaant aur sukhad ho',
    ],
    linesEnglish: [
      'Just as the moon cools the quiet earth without making a single sound',
      'May tonight bring that exact serene calm across your heart',
    ],
  },
  {
    title: 'बंद आँखों में भी उम्मीद के रंग',
    titleEnglish: 'Colors in Dreams',
    linesHindi: [
      'आँखें बंद होने पर भी उम्मीद के रंग फीके नहीं पड़ते कभी',
      'अच्छे सपनों के साथ चैन से सोइए — शुभ रात्रि',
    ],
    linesHinglish: [
      'Aankhein band hone par bhi ummeed ke rang feeke nahin padte kabhi',
      'Acche sapnon ke saath chain se soiye — shubh raatri',
    ],
    linesEnglish: [
      'Even behind closed eyes, bright colors of hope never dim',
      'Sleep peacefully among sweet dreams tonight—warm good night',
    ],
  },
  {
    title: 'दिन भर की थकान उतारे',
    titleEnglish: 'Washing Fatigue Away',
    linesHindi: [
      'गर्म पानी से मुँह धोकर जब हम चैन की चादर ओढ़ते हैं',
      'तब सारा तनाव अपने आप रात की हवा में घुल जाता है',
    ],
    linesHinglish: [
      'Garam paani se munh dhokar jab hum chain ki chaadar odhte hain',
      'Tab saara tanaav apne aap raat ki hawa mein ghul jaata hai',
    ],
    linesEnglish: [
      'Washing away the day and pulling a clean blanket up around your shoulders',
      'Lets lingering tension dissolve effortlessly into the night air',
    ],
  },
  {
    title: 'नए सपने बुनने का वक़्त',
    titleEnglish: 'Weaving New Dreams',
    linesHindi: [
      'रात हमें आराम भी देती है और कल के सपने बुनने की शांति भी',
      'अच्छे विचारों के साथ आज बिस्तर पर जाइएगा',
    ],
    linesHinglish: [
      'Raat humein aaraam bhi deti hai aur kal ke sapne bunne ki shaanti bhi',
      'Acche vichaaron ke saath aaj bistar par jaaiyega',
    ],
    linesEnglish: [
      'Night offers deep rest alongside quiet space to weave bright hopes',
      'Head to bed tonight holding gentle, encouraging thoughts close',
    ],
  },
  {
    title: 'दिल की तसल्ली वाली रात',
    titleEnglish: 'Comforting Night',
    linesHindi: [
      'सब कुछ अच्छा होगा, यही यक़ीन रखकर आँखें मूँदा कीजिए रात को',
      'मन को मिलने वाली यह तसल्ली सबसे अच्छी नींद लाती है',
    ],
    linesHinglish: [
      'Sab kuch accha hoga, yahi yaqeen rakhkar aankhein moonda kijiye raat ko',
      'Man ko milne waali yeh tasalli sabse acchi neend laati hai',
    ],
    linesEnglish: [
      'Close your eyes trusting quietly that everything will work out gently',
      'That calm reassurance inside always invites the deepest rest',
    ],
  },
  {
    title: 'प्यारी झपकी मुबारक',
    titleEnglish: 'Sleep Deeply Tonight',
    linesHindi: [
      'कोई अधूरी चिंता आपके तकिये के पास न आने पाए आज रात',
      'सिर्फ़ सुकून और मीठे सपने साथ रहें, शुभ रात्रि',
    ],
    linesHinglish: [
      'Koi adhoori chinta aapke takiye ke paas na aane paaye aaj raat',
      'Sirf sukoon aur meethe sapne saath rahein, shubh raatri',
    ],
    linesEnglish: [
      'May not a single stray worry linger anywhere near your pillow tonight',
      'Keep only calm comfort and pleasant dreams beside you—good night',
    ],
  },
  {
    title: 'शांति का वरदान',
    titleEnglish: 'Gift of Serenity',
    linesHindi: [
      'जब सारा जग सो जाता है तब ईश्वर की शांति हर घर में उतरती है',
      'आप भी उस शांति का हिस्सा बनिए और आराम से सो जाइए',
    ],
    linesHinglish: [
      'Jab saara jag so jaata hai tab Ishwar ki shaanti har ghar mein utarti hai',
      'Aap bhi us shaanti ka hissa baniye aur aaraam se so jaaiye',
    ],
    linesEnglish: [
      'When the noisy world turns quiet, serene grace settles softly into every home',
      'Rest peacefully inside that stillness and sleep soundly tonight',
    ],
  },
  {
    title: 'सुनहरी सुबह का इंतज़ार',
    titleEnglish: 'Waiting for Sunrise',
    linesHindi: [
      'चाँद को कह दीजिए कि रात अच्छी थी, अब आराम करने जा रहे हैं',
      'कल फिर सुनहरी सुबह के साथ नई शुरुआत करनी है, शुभ रात्रि',
    ],
    linesHinglish: [
      'Chaand ko keh dijiye ki raat acchi thi, ab aaraam karne jaa rahe hain',
      'Kal phir sunahri subah ke saath nayi shuruaat karni hai, shubh raatri',
    ],
    linesEnglish: [
      'Tell the moon thank you for a peaceful evening—time to drift asleep',
      'Tomorrow morning brings a bright new start once again—good night',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'तारे सुनाएँ कहानी',
    titleEnglish: 'Stories Told by Stars',
    linesHindi: [
      'खिड़की से दिखते तारे जैसे कोई पुरानी मीठी कहानी सुना रहे हैं',
      'आप भी चैन की नींद सोइए, सब अपने सलामत और खुश हैं',
    ],
    linesHinglish: [
      'Khidki se dikhte taare jaise koi purani meethi kahaani suna rahe hain',
      'Aap bhi chain ki neend soiye, sab apne salaamat aur khush hain',
    ],
    linesEnglish: [
      'Stars glimmering past your window feel like gentle bedtime stories',
      'Sleep comfortably tonight knowing everyone dear is safe and well',
    ],
  },
  {
    title: 'थकी आँखों का आराम',
    titleEnglish: 'Relief for Tired Eyes',
    linesHindi: [
      'सारे दिन स्क्रीन और काम से थकी आँखों को अब आराम चाहिए',
      'रोशनी बुझाइए और चुपचाप नींद की गोद में आ जाइए',
    ],
    linesHinglish: [
      'Saare din screen aur kaam se thaki aankhon ko ab aaraam chahiye',
      'Roshni bujhaaiye aur chupchaap neend ki god mein aa jaaiye',
    ],
    linesEnglish: [
      'Eyes tired from screens and long tasks deserve calm darkness now',
      'Turn off the lamp and slip softly into restful sleep',
    ],
  },
  {
    title: 'शांत मन की रात',
    titleEnglish: 'Peaceful Mind Night',
    linesHindi: [
      'रात कितनी सुंदर होगी यह इस बात से तय होता है कि दिल कितना शांत है',
      'सारी बातों को छोड़कर आज खुद को सुकून दीजिए, शुभ रात्रि',
    ],
    linesHinglish: [
      'Raat kitni sundar hogi yeh is baat se tay hota hai ki dil kitna shaant hai',
      'Saari baaton ko chhodkar aaj khud ko sukoon dijiye, shubh raatri',
    ],
    linesEnglish: [
      'How peaceful your night feels depends solely on how calm your heart rests',
      'Let go of today’s noise and grant yourself gentle rest—good night',
    ],
  },
  {
    title: 'प्यारी रात का संदेश',
    titleEnglish: 'Warm Bedtime Greeting',
    linesHindi: [
      'चाहे कितनी भी दूर हों हम इस बड़े शहर से आज की शाम',
      'शुभ रात्रि का यह छोटा सा संदेश दिलों को पास ले आता है',
    ],
    linesHinglish: [
      'Chaahe kitni bhi door hon hum is bade shehar se aaj ki shaam',
      'Shubh raatri ka yeh chhota sa sandesh dilon ko paas le aata hai',
    ],
    linesEnglish: [
      'No matter how far apart our homes sit tonight across the map',
      'One thoughtful good night message brings warm hearts right beside each other',
    ],
  },
  {
    title: 'सपनों के झूले',
    titleEnglish: 'Cradled in Dreams',
    linesHindi: [
      'मीठे सपनों के झूले में झूलते हुए गुज़र जाए आज की रात',
      'कल फिर मुस्कान के साथ हो हमारी प्यारी मुलाक़ात',
    ],
    linesHinglish: [
      'Meethe sapnon ke jhoole mein jhoolte hue guzar jaaye aaj ki raat',
      'Kal phir muskaan ke saath ho hamaari pyaari mulaaqaat',
    ],
    linesEnglish: [
      'May tonight glide gently past cradling you inside sweet dreams',
      'Until tomorrow morning greets us both with bright smiles again',
    ],
  },
  {
    title: 'अच्छी नींद का सुख',
    titleEnglish: 'Joy of Sound Sleep',
    linesHindi: [
      'दुनिया की कोई भी दौलत अच्छी नींद की जगह नहीं ले सकती',
      'इसलिए हर रात समय पर सोकर ख़ुद को यह तोहफ़ा ज़रूर दें',
    ],
    linesHinglish: [
      'Duniya ki koi bhi daulat acchi neend ki jagah nahin le sakti',
      'Isliye har raat samay par sokar khud ko yeh tohfa zaroor dein',
    ],
    linesEnglish: [
      'No luxury on earth can ever replace a solid night of restful sleep',
      'Keep gifting yourself early, calm bedtimes every single night',
    ],
  },
  {
    title: 'ठंडी चाँदनी',
    titleEnglish: 'Cool Silver Moon',
    linesHindi: [
      'चाँद की ठंडी किरणें मन की सारी गर्मी को शांत कर देती हैं',
      'एक गिलास पानी पीकर सुकून से सो जाइए अब',
    ],
    linesHinglish: [
      'Chaand ki thandi kirnein man ki saari garmi ko shaant kar deti hain',
      'Ek gilaas paani peekar sukoon se so jaaiye ab',
    ],
    linesEnglish: [
      'Cool moonbeams quietly soothe away every leftover trace of daytime tension',
      'Take a sip of water, turn down the sheets, and rest peacefully now',
    ],
  },
  {
    title: 'दिन का सुंदर समापन',
    titleEnglish: 'Lovely Close of Day',
    linesHindi: [
      'हर अच्छी चीज़ के लिए शुक्र और हर कमी के लिए माफ़ी माँग लीजिए',
      'बस इतनी सी तैयारी काफी है एक खूबसूरत रात सोने के लिए',
    ],
    linesHinglish: [
      'Har acchi cheez ke liye shukr aur har kami ke liye maafi maang lijiye',
      'Bas itni si taiyaari kaafi hai ek khoobsurat raat sone ke liye',
    ],
    linesEnglish: [
      'Whisper thanks for today’s blessings and grace for any small slips',
      'That simple ritual is all you need for a deeply peaceful night',
    ],
  },
  {
    title: 'सुकून भरा कोना',
    titleEnglish: 'Quiet Sleep Corner',
    linesHindi: [
      'बिस्तर पर लेटते ही लगे कि दुनिया का सबसे सुरक्षित कोना मिल गया',
      'इसी आराम के साथ प्यारी और गहरी नींद आए आपको',
    ],
    linesHinglish: [
      'Bistar par let-te hi lage ki duniya ka sabse surakshit kona mil gaya',
      'Isi aaraam ke saath pyaari aur gehri neend aaye aapko',
    ],
    linesEnglish: [
      'Settling under your covers should feel like the safest corner in the world',
      'May warm comfort carry you swiftly into deep sleep tonight',
    ],
  },
  {
    title: 'मीठे ख्वाबों की बारात',
    titleEnglish: 'Sweet Dreams Await',
    linesHindi: [
      'पलकें झुकने लगी हैं अब धीरे-धीरे नींद की दस्तक पर',
      'चलिए अब मुस्कुराकर आराम कीजिए, शुभ रात्रि मेरे दोस्त',
    ],
    linesHinglish: [
      'Palkein jhukne lagi hain ab dheere-dheere neend ki dastak par',
      'Chaliye ab muskuraakar aaraam kijiye, shubh raatri mere dost',
    ],
    linesEnglish: [
      'Eyelids are gently growing heavy as quiet sleep knocks at the door',
      'Smile softly and let yourself rest now—good night, my friend',
    ],
  },
  {
    title: 'दुआओं की छाँव',
    titleEnglish: 'Shade of Prayers',
    linesHindi: [
      'बड़ों की दुआओं की ठंडी छाँव में कोई डर पास नहीं आता रात को',
      'आप भी इसी सुरक्षा के एहसास में चैन से सो जाइए',
    ],
    linesHinglish: [
      'Badon ki duaon ki thandi chhaanv mein koi dar paas nahin aata raat ko',
      'Aap bhi isi suraksha ke ehsaas mein chain se so jaaiye',
    ],
    linesEnglish: [
      'Under the gentle shade of family blessings, no fear lingers in the dark',
      'Rest comfortably tonight wrapped in that quiet safety',
    ],
  },
  {
    title: 'साफ़ दिल, सुकून भरी रात',
    titleEnglish: 'Clear Heart Calm Night',
    linesHindi: [
      'न किसी से शिकायत, न कल की कोई घबराहट दिल के अंदर',
      'बस ऐसी ही हल्की और सुंदर हो आपकी आज की हर रात',
    ],
    linesHinglish: [
      'Na kisi se shikaayat, na kal ki koi ghabraahat dil ke andar',
      'Bas aisi hi halki aur sundar ho aapki aaj ki har raat',
    ],
    linesEnglish: [
      'No lingering grudges and zero anxiety about tomorrow inside your chest',
      'May every single night feel that light, clear, and peaceful for you',
    ],
  },
  {
    title: 'रात का उपहार',
    titleEnglish: 'Gift of the Night',
    linesHindi: [
      'रात हर इंसान को फिर से नया बनने का शांत अवसर देती है',
      'सारी थकावट छोड़कर कल की ताज़गी के लिए आराम कीजिए',
    ],
    linesHinglish: [
      'Raat har insaan ko phir se naya banne ka shaant avsar deti hai',
      'Saari thakaawat chhodkar kal ki taazgi ke liye aaraam kijiye',
    ],
    linesEnglish: [
      'Night hands every soul a calm invitation to wake refreshed tomorrow',
      'Leave today’s tiredness behind and rest completely tonight',
    ],
  },
  {
    title: 'अनमोल विश्राम',
    titleEnglish: 'Precious Rest',
    linesHindi: [
      'पूरे दिन की मेहनत तब सफल लगती है जब रात सुकून से कटे',
      'आज आपको वही अनमोल विश्राम मिले, दिल से शुभ रात्रि',
    ],
    linesHinglish: [
      'Poore din ki mehnat tab safal lagti hai jab raat sukoon se kate',
      'Aaj aapko wahi anmol vishraam mile, dil se shubh raatri',
    ],
    linesEnglish: [
      'An entire day’s hard work feels rewarding when evening ends in real peace',
      'Wishing you that priceless rest from the heart—warm good night',
    ],
  },
  {
    title: 'ख़ुशियों भरे सपने',
    titleEnglish: 'Joyful Dreams',
    linesHindi: [
      'आँखों के भीतर आज सिर्फ़ प्यारे और सकारात्मक सपने सजें',
      'हर थकान दूर हो जाए और सुबह खुशियों के साथ आँख खुले',
    ],
    linesHinglish: [
      'Aankhon ke bheetar aaj sirf pyaare aur sakaaratmak sapne sajen',
      'Har thakaan door ho jaaye aur subah khushiyon ke saath aankh khule',
    ],
    linesEnglish: [
      'May only bright, encouraging dreams visit behind closed eyes tonight',
      'May every ounce of weariness fade before a joyful morning wakes you',
    ],
  },
  {
    title: 'चंदा मामा की शांति',
    titleEnglish: 'Quiet Moonlight Peace',
    linesHindi: [
      'बचपन में जो चंदा लोरी गाकर सुलाया करता था छत पर',
      'आज भी वही ठंडक आपके मन पर बरसा रहा है चुपचाप',
    ],
    linesHinglish: [
      'Bachpan mein jo chanda lori gaakar sulaaya karta tha chhat par',
      'Aaj bhi wahi thandak aapke man par barsa raha hai chupchaap',
    ],
    linesEnglish: [
      'The same gentle moon that watched over childhood nights on the rooftop',
      'Still pours quiet coolness smoothly over your heart tonight',
    ],
  },
  {
    title: 'मुस्कुराता हुआ आराम',
    titleEnglish: 'Restful Grin',
    linesHindi: [
      'जो चीज़ आज अधूरी रही उसे कल हँसते हुए पूरा कर लेंगे',
      'अभी बस आराम कीजिए, नींद का समय हो गया है प्यारे',
    ],
    linesHinglish: [
      'Jo cheez aaj adhoori rahi use kal hanste hue poora kar lenge',
      'Abhi bas aaraam kijiye, neend ka samay ho gaya hai pyaare',
    ],
    linesEnglish: [
      'Anything left half-done today can be finished smiling tomorrow morning',
      'For right now, simply unwind—it is time for restful sleep',
    ],
  },
  {
    title: 'सपनों से मुलाकात',
    titleEnglish: 'Meeting Sweet Dreams',
    linesHindi: [
      'रात की शांत घड़ियों में खुद से मिलना भी अच्छा लगता है',
      'मन को शांत करके मीठे सपनों से मिलने जाइए अब',
    ],
    linesHinglish: [
      'Raat ki shaant ghadiyon mein khud se milna bhi accha lagta hai',
      'Man ko shaant karke meethe sapnon se milne jaaiye ab',
    ],
    linesEnglish: [
      'Quiet nighttime hours offer a soothing space to check in gently with yourself',
      'Calm your thoughts and step softly into pleasant dreams now',
    ],
  },
  {
    title: 'रात का सुंदर सन्नाटा',
    titleEnglish: 'Gentle Stillness',
    linesHindi: [
      'जब हर गली सो जाती है तो हवा में अजीब सा सुकून तैरता है',
      'उसी ठंडे सुकून में आज की रात बेहद हल्की लगे आपको',
    ],
    linesHinglish: [
      'Jab har gali so jaati hai to hawa mein ajeeb sa sukoon tairta hai',
      'Usi thande sukoon mein aaj ki raat behad halki lage aapko',
    ],
    linesEnglish: [
      'Once every lane turns quiet, cool serenity drifts softly through the breeze',
      'May tonight feel light, peaceful, and restorative inside that stillness',
    ],
  },
  {
    title: 'शुभ रात्रि का उपहार',
    titleEnglish: 'Blessing for Tonight',
    linesHindi: [
      'कल के उजाले से पहले आज की रात आपको पूरी शांति दे जाए',
      'अच्छे से सोइए — बहुत-बहुत शुभ रात्रि मेरे मित्र',
    ],
    linesHinglish: [
      'Kal ke ujaale se pehle aaj ki raat aapko poori shaanti de jaaye',
      'Acche se soiye — bahut-bahut shubh raatri mere mitra',
    ],
    linesEnglish: [
      'Before tomorrow’s daylight returns, may tonight deliver total calm',
      'Sleep warmly and deeply—wishing you a wonderful good night, my friend',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'नर्म तकिया, मीठी नींद',
    titleEnglish: 'Soft Pillow Sweet Sleep',
    linesHindi: [
      'दिन भर के सफ़र के बाद तकिये का सहारा किसी जन्नत जैसा है',
      'आँखें बंद कीजिए, गहरी नींद दरवाज़े पर खड़ी है आपके',
    ],
    linesHinglish: [
      'Din bhar ke safar ke baad takiye ka sahaara kisi jannat jaisa hai',
      'Aankhein band kijiye, gehri neend darwaaze par khadi hai aapke',
    ],
    linesEnglish: [
      'After a long day in motion, resting onto a soft pillow feels heavenly',
      'Close your eyes calmly—deep, welcome sleep is already right beside you',
    ],
  },
  {
    title: 'प्यार और शांति की रात',
    titleEnglish: 'Night of Love and Peace',
    linesHindi: [
      'दिलों में अपनापन और घरों में सुकून हमेशा यूं ही बना रहे',
      'ईश्वर करे आज हर कोई चैन से सोए, शुभ रात्रि',
    ],
    linesHinglish: [
      'Dilon mein apnaapan aur gharon mein sukoon hamesha yoon hi bana rahe',
      'Ishwar kare aaj har koi chain se soye, shubh raatri',
    ],
    linesEnglish: [
      'May warmth stay alive in hearts and serene peace fill every home',
      'May everyone rest comfortably and safely tonight—good night',
    ],
  },
  {
    title: 'आसमान का सुकून',
    titleEnglish: 'Calm Night Sky',
    linesHindi: [
      'ऊपर अनंत आकाश और नीचे शांत धरती — कितना सुंदर संतुलन है',
      'आप भी आज उसी शांति के साथ गहरी नींद में उतर जाइए',
    ],
    linesHinglish: [
      'Upar anant aakaash aur neeche shaant dharti — kitna sundar santulan hai',
      'Aap bhi aaj usi shaanti ke saath gehri neend mein utar jaaiye',
    ],
    linesEnglish: [
      'Boundless quiet sky above and resting earth below—such gentle harmony',
      'Sink comfortably into that exact stillness and sleep peacefully tonight',
    ],
  },
  {
    title: 'सपनों के पास',
    titleEnglish: 'Close to Dreams',
    linesHindi: [
      'जो बातें जागते हुए उलझती हैं, वो नींद में अक्सर आसान हो जाती हैं',
      'आराम कीजिए, सुबह नया नज़रिया साथ लेकर उठेगा आपके',
    ],
    linesHinglish: [
      'Jo baatein jaagte hue ulajhti hain, wo neend mein aksar aasaan ho jaati hain',
      'Aaraam kijiye, subah naya nazariya saath lekar uthega aapke',
    ],
    linesEnglish: [
      'Knots that look tangled while awake often untie after a full night’s rest',
      'Rest peacefully now—fresh clarity will wake right beside you tomorrow',
    ],
  },
  {
    title: 'सच्ची राहत की रात',
    titleEnglish: 'Night of Real Relief',
    linesHindi: [
      'दिन भर चाहे जितनी दौड़-धूप रही हो आपके रास्ते में आज',
      'रात की शांति हर कदम की थकान मिटा देने वाली है',
    ],
    linesHinglish: [
      'Din bhar chaahe jitni daud-dhoop rahi ho aapke raaste mein aaj',
      'Raat ki shaanti har qadam ki thakaan mita dene waali hai',
    ],
    linesEnglish: [
      'No matter how busy or tiring every mile of today felt',
      'Quiet nighttime rest is ready to soothe away every single ache',
    ],
  },
  {
    title: 'चैन की चादर',
    titleEnglish: 'Sheet of Serenity',
    linesHindi: [
      'चादर ओढ़ते ही मन से हर डर और हर अधूरी बहस बाहर कर दें',
      'सिर्फ़ आराम और सकारात्मक विचारों को ही भीतर रहने दें',
    ],
    linesHinglish: [
      'Chaadar odhte hi man se har dar aur har adhoori behas baahar kar dein',
      'Sirf aaraam aur sakaaratmak vichaaron ko hi bheetar rehne dein',
    ],
    linesEnglish: [
      'As soon as you pull the covers up, leave worries and arguments outside',
      'Invite only calm comfort and hopeful thoughts inside tonight',
    ],
  },
  {
    title: 'मीठी यादों भरी रात',
    titleEnglish: 'Night of Sweet Memories',
    linesHindi: [
      'अपनों की हँसी याद करके सोने से दिल कभी अकेला नहीं लगता',
      'प्यार भरी यादों के साथ शुभ रात्रि मेरे ख़ास दोस्त',
    ],
    linesHinglish: [
      'Apnon ki hansi yaad karke sone se dil kabhi akela nahin lagta',
      'Pyaar bhari yaadon ke saath shubh raatri mere khaas dost',
    ],
    linesEnglish: [
      'Drifting asleep recalling the laughter of loved ones leaves no room for loneliness',
      'Wishing a warm good night wrapped in fond memories, my dear friend',
    ],
  },
  {
    title: 'तारों का संग',
    titleEnglish: 'Starlight Company',
    linesHindi: [
      'चाँद-तारों की महफ़िल भी अब शांत होकर आराम को तैयार है',
      'आप भी मीठे सपनों की दुनिया में कदम रख दीजिए अब',
    ],
    linesHinglish: [
      'Chaand-taaron ki mehfil bhi ab shaant hokar aaraam ko taiyaar hai',
      'Aap bhi meethe sapnon ki duniya mein qadam rakh dijiye ab',
    ],
    linesEnglish: [
      'Moon and stars above look serene and ready for peaceful quiet too',
      'Step gently into the soft world of sweet dreams now',
    ],
  },
  {
    title: 'सुकून भरा विश्राम',
    titleEnglish: 'Restful Night Ahead',
    linesHindi: [
      'मेहनत की थकान तब बहुत मीठी लगती है जब नींद गहरी आए',
      'आज की रात आपको वही सुकून भरा विश्राम दे जाए',
    ],
    linesHinglish: [
      'Mehnat ki thakaan tab bahut meethi lagti hai jab neend gehri aaye',
      'Aaj ki raat aapko wahi sukoon bhara vishraam de jaaye',
    ],
    linesEnglish: [
      'Honest tiredness feels wonderfully rewarding when deep sleep answers it',
      'May tonight bring that exact rich, restorative slumber to you',
    ],
  },
  {
    title: 'रौशन कल के लिए नींद',
    titleEnglish: 'Sleeping for Bright Dawn',
    linesHindi: [
      'चैन से सोने वाले ही सुबह मुस्कुराते हुए दुनिया को जीतते हैं',
      'प्यार से आराम कीजिए, कल आपका इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Chain se sone waale hi subah muskuraate hue duniya ko jeet-te hain',
      'Pyaar se aaraam kijiye, kal aapka intezaar kar raha hai',
    ],
    linesEnglish: [
      'Those who rest well at night wake smiling ready to shine at sunrise',
      'Relax comfortably now—a wonderful tomorrow is waiting for you',
    ],
  },
  {
    title: 'दिलों की नज़दीकी रात को',
    titleEnglish: 'Warm Hearts at Night',
    linesHindi: [
      'हर रात एक बार अपनों को शुभ रात्रि कह देना प्यारा रिवाज़ है',
      'इससे दूर रहकर भी मन हमेशा जुड़ा महसूस करता है',
    ],
    linesHinglish: [
      'Har raat ek baar apnon ko shubh raatri keh dena pyaara riwaaz hai',
      'Isse door rehkar bhi man hamesha juda mehsoos karta hai',
    ],
    linesEnglish: [
      'Saying good night to dear ones before bed is such a comforting ritual',
      'Even miles apart, it keeps warm hearts feeling close and safe',
    ],
  },
  {
    title: 'ख़ुशी के ख्वाब',
    titleEnglish: 'Happy Dreams',
    linesHindi: [
      'कोई अधूरी चिंता न जगाए आपको रात के बीच कभी भी',
      'हल्की मुस्कान और मीठे ख्वाबों के साथ सो जाइएगा',
    ],
    linesHinglish: [
      'Koi adhoori chinta na jagaaye aapko raat ke beech kabhi bhi',
      'Halki muskaan aur meethe khwaabon ke saath so jaaiyega',
    ],
    linesEnglish: [
      'May no sudden worry wake you up in the middle of the night',
      'Sleep smoothly through to morning surrounded by happy dreams',
    ],
  },
  {
    title: 'धीमी लोरी हवा की',
    titleEnglish: 'Breeze Lullaby',
    linesHindi: [
      'पत्तों की सरसराहट मानो रात की धीमी सी लोरी सुना रही है',
      'आराम से आँखें बंद करें, बहुत प्यारी शुभ रात्रि आपको',
    ],
    linesHinglish: [
      'Patton ki sarsaraahat maano raat ki dheemi si lori suna rahi hai',
      'Aaraam se aankhein band karein, bahut pyaari shubh raatri aapko',
    ],
    linesEnglish: [
      'Softly rustling leaves outside hum like a calm evening lullaby',
      'Close your eyes peacefully—wishing you a deeply soothing good night',
    ],
  },
  {
    title: 'शांत घर, सुकून भरी नींद',
    titleEnglish: 'Peaceful Home Sleep',
    linesHindi: [
      'घर के हर कोने में सुकून और हर दिल में संतोष बसा रहे आज',
      'प्यार भरी शुभ रात्रि, ईश्वर सबका कल्याण करे',
    ],
    linesHinglish: [
      'Ghar ke har kone mein sukoon aur har dil mein santosh basa rahe aaj',
      'Pyaar bhari shubh raatri, Ishwar sabka kalyaan kare',
    ],
    linesEnglish: [
      'May serenity fill every corner of your home and calm warm every heart',
      'Affectionate good night—may grace keep everyone safe and blessed',
    ],
  },
  {
    title: 'कल का उजाला करीब',
    titleEnglish: 'Sunrise Is Close',
    linesHindi: [
      'रात कितनी भी शांत हो, कुछ ही घंटों में नया सवेरा आएगा',
      'तब तक भरपूर आराम कीजिए और प्यारे सपने देखिए',
    ],
    linesHinglish: [
      'Raat kitni bhi shaant ho, kuch hi ghanton mein naya sawera aayega',
      'Tab tak bharpoor aaraam kijiye aur pyaare sapne dekhiye',
    ],
    linesEnglish: [
      'As still as night sits now, a golden sunrise waits just a few hours away',
      'Rest deeply until then and enjoy the sweetest dreams',
    ],
  },
  {
    title: 'चिंतामुक्त विश्राम',
    titleEnglish: 'Worry-Free Rest',
    linesHindi: [
      'अपनी सारी फ़िक्रें ऊपर वाले के हाथों में सौंपकर सोया कीजिए',
      'जिम्मेदारियों का बोझ उतारने के बाद ही गहरी नींद आती है',
    ],
    linesHinglish: [
      'Apni saari fikrein upar waale ke haathon mein saumpkar soya kijiye',
      'Zimmedaariyon ka bojh utaarne ke baad hi gehri neend aati hai',
    ],
    linesEnglish: [
      'Hand your worries calmly over to grace before turning out the lights',
      'True, refreshing sleep arrives once you lay those heavy packs down',
    ],
  },
  {
    title: 'नींद की दहलीज़',
    titleEnglish: 'Doorstep of Sleep',
    linesHindi: [
      'थकी हुई आँखों को अब मीठी नींद के हवाले कर दीजिए',
      'सुबह फिर ताज़गी और जोश के साथ उठेंगे, शुभ रात्रि',
    ],
    linesHinglish: [
      'Thaki hui aankhon ko ab meethi neend ke hawaale kar dijiye',
      'Subah phir taazgi aur josh ke saath uthenge, shubh raatri',
    ],
    linesEnglish: [
      'Hand your tired eyes over gently to comfortable rest right now',
      'Morning will wake you bright and energized again—good night',
    ],
  },
  {
    title: 'दिल का आराम रात',
    titleEnglish: 'Heart at Ease Tonight',
    linesHindi: [
      'दिन भर के हर अच्छे-बुरे अनुभव को शांत मन से स्वीकार करें',
      'रात आपके दिल को हल्का करने आई है, आराम कीजिए',
    ],
    linesHinglish: [
      'Din bhar ke har acche-bure anubhav ko shaant man se sweekaar karein',
      'Raat aapke dil ko halka karne aayi hai, aaraam kijiye',
    ],
    linesEnglish: [
      'Accept every bright and bumpy moment of today with quiet grace',
      'Night arrived solely to lighten your heart—rest comfortably now',
    ],
  },
  {
    title: 'सुनहरे सपनों की रात',
    titleEnglish: 'Night of Golden Dreams',
    linesHindi: [
      'रात की चाँदनी में आपके चेहरे की मुस्कान हमेशा बनी रहे',
      'गहरी नींद और मीठे सपनों के साथ शुभ रात्रि',
    ],
    linesHinglish: [
      'Raat ki chaandni mein aapke chehre ki muskaan hamesha bani rahe',
      'Gehri neend aur meethe sapnon ke saath shubh raatri',
    ],
    linesEnglish: [
      'Under gentle moonlight, may calm joy stay softly upon your face',
      'Wishing you unbroken sleep and golden dreams—good night',
    ],
  },
  {
    title: 'विश्राम और शांति',
    titleEnglish: 'Rest and Peace',
    linesHindi: [
      'ज़िंदगी खूबसूरत है, बस उसे देखने के लिए थोड़ा विश्राम ज़रूरी है',
      'आराम से सो जाइए, कल फिर से मुस्कान बांटनी है आपको',
    ],
    linesHinglish: [
      'Zindagi khoobsurat hai, bas use dekhne ke liye thoda vishraam zaroori hai',
      'Aaraam se so jaaiye, kal phir se muskaan baantni hai aapko',
    ],
    linesEnglish: [
      'Life is genuinely lovely—sometimes all we need is good sleep to see it clearly',
      'Rest easy tonight; tomorrow is waiting for your smile once more',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'सुकून भरा अंतिम पल',
    titleEnglish: 'Calm Final Hour',
    linesHindi: [
      'सोने से पहले बस एक प्यारी सोच मन में लेकर आँखें मूंदिए',
      'कि ईश्वर हमेशा आपके साथ है और सब कुछ अच्छा होगा',
    ],
    linesHinglish: [
      'Sone se pehle bas ek pyaari soch man mein lekar aankhein moondiye',
      'Ki Ishwar hamesha aapke saath hai aur sab kuch accha hoga',
    ],
    linesEnglish: [
      'Hold one soothing thought close before drifting off tonight',
      'You are safely watched over, and better days are unfolding gently',
    ],
  },
  {
    title: 'चाँदनी रात का सलाम',
    titleEnglish: 'Moonlit Greeting',
    linesHindi: [
      'तारों की महफ़िल और चाँदनी रात का नजारा सुंदर है आज',
      'मेरी ओर से बहुत प्यारी शुभ रात्रि और मीठे सपने आपको',
    ],
    linesHinglish: [
      'Taaron ki mehfil aur chaandni raat ka nazaara sundar hai aaj',
      'Meri or se bahut pyaari shubh raatri aur meethe sapne aapko',
    ],
    linesEnglish: [
      'The gathering of stars and silver moon looks serene overhead tonight',
      'Sending a very warm good night and the sweetest dreams your way',
    ],
  },
  {
    title: 'ठंडक भरी नींद',
    titleEnglish: 'Cool Soothing Sleep',
    linesHindi: [
      'सारी दुनिया के शोर से दूर अब अपने सपनों के कमरे में चलिए',
      'जहाँ सिर्फ़ शांति, राहत और मीठी नींद बसती है',
    ],
    linesHinglish: [
      'Saari duniya ke shor se door ab apne sapnon ke kamre mein chaliye',
      'Jahaan sirf shaanti, raahat aur meethi neend basti hai',
    ],
    linesEnglish: [
      'Step far away from daytime noise into your quiet corner of dreams',
      'Where nothing lives except calm comfort and uninterrupted sleep',
    ],
  },
  {
    title: 'हर रात नया सुकून',
    titleEnglish: 'Nightly Calm',
    linesHindi: [
      'कल की थकान और आज की चिंता को यहीं विराम दीजिए अब',
      'मीठी नींद में जाकर कल के लिए ताज़ा ऊर्जा समेटिए',
    ],
    linesHinglish: [
      'Kal ki thakaan aur aaj ki chinta ko yaheen viraam dijiye ab',
      'Meethi neend mein jaakar kal ke liye taaza oorja sametiye',
    ],
    linesEnglish: [
      'Place a calm full stop on yesterday’s weariness and today’s worries now',
      'Gather fresh energy inside deep, restful slumber for tomorrow',
    ],
  },
  {
    title: 'मुस्कान के साथ शुभ रात्रि',
    titleEnglish: 'Smiling Good Night',
    linesHindi: [
      'अगर आज किसी की मदद की हो तो मन बहुत शांत रहता है रात को',
      'उसी प्यारे एहसास के साथ आज चैन की नींद सोइएगा',
    ],
    linesHinglish: [
      'Agar aaj kisi ki madad ki ho to man bahut shaant rehta hai raat ko',
      'Usi pyaare ehsaas ke saath aaj chain ki neend soiyega',
    ],
    linesEnglish: [
      'Doing even one small kindness during the day makes nighttime sleep feel pure',
      'Rest comfortably tonight wrapped in that quiet warmth',
    ],
  },
  {
    title: 'सपनों का सुनहरा आसमान',
    titleEnglish: 'Golden Dream Sky',
    linesHindi: [
      'चाहे दिन में बादल रहे हों पर रात के सपने बिल्कुल साफ़ रहें',
      'दिल की गहराइयों से शुभ रात्रि, सुरक्षित और शांत रहें',
    ],
    linesHinglish: [
      'Chaahe din mein baadal rahe hon par raat ke sapne bilkul saaf rahein',
      'Dil ki gehraaiyon se shubh raatri, surakshit aur shaant rahein',
    ],
    linesEnglish: [
      'Even if clouds passed through your afternoon, may your dreams glow clear',
      'Heartfelt good night—stay peaceful, safe, and deeply rested',
    ],
  },
  {
    title: 'नींद का सुंदर सफ़र',
    titleEnglish: 'Sweet Journey to Sleep',
    linesHindi: [
      'अब विचारों की किताब बंद करके तकिये के पास रख दीजिए',
      'कल फिर नया पन्ना खोलेंगे — शुभ रात्रि मेरे मित्र',
    ],
    linesHinglish: [
      'Ab vichaaron ki kitaab band karke takiye ke paas rakh dijiye',
      'Kal phir naya panna kholenge — shubh raatri mere mitra',
    ],
    linesEnglish: [
      'Close the heavy book of overthinking and set it beside your nightstand',
      'Tomorrow opens a fresh page cleanly—good night, my friend',
    ],
  },
  {
    title: 'शीतल चाँदनी में आराम',
    titleEnglish: 'Cool Moonlit Rest',
    linesHindi: [
      'शीतल हवाओं के बीच पलकों को आराम करने दीजिएगा अब',
      'पूरी रात खुशियों भरे सपने आपके साथ रहें',
    ],
    linesHinglish: [
      'Sheetal hawaon ke beech palkon ko aaraam karne dijiyega ab',
      'Poori raat khushiyon bhare sapne aapke saath rahein',
    ],
    linesEnglish: [
      'Let tired eyelids rest effortlessly amid the cool evening breeze now',
      'May bright, pleasant dreams stay gently beside you until dawn',
    ],
  },
  {
    title: 'दिल की शांति, घर की रौनक',
    titleEnglish: 'Calm Heart Happy Home',
    linesHindi: [
      'अच्छी नींद तभी आती है जब दिल में अपनों के लिए प्यार भरा हो',
      'आपका घर हमेशा शांति और हँसी से भरा रहे, शुभ रात्रि',
    ],
    linesHinglish: [
      'Acchi neend tabhi aati hai jab dil mein apnon ke liye pyaar bhara ho',
      'Aapka ghar hamesha shaanti aur hansi se bhara rahe, shubh raatri',
    ],
    linesEnglish: [
      'Peaceful sleep comes naturally when your heart holds warmth for loved ones',
      'May your home stay full of laughter and serenity—good night',
    ],
  },
  {
    title: 'हल्के-फुल्के सपने',
    titleEnglish: 'Lighthearted Dreams',
    linesHindi: [
      'रात की शांति में हर थका हुआ मन फिर से मुस्कुरा उठता है',
      'आज आपको भी बिल्कुल ऐसी ही सुकून भरी नींद नसीब हो',
    ],
    linesHinglish: [
      'Raat ki shaanti mein har thaka hua man phir se muskura uthta hai',
      'Aaj aapko bhi bilkul aisi hi sukoon bhari neend naseeb ho',
    ],
    linesEnglish: [
      'Inside night’s calm embrace, every weary spirit gently smiles again',
      'May that exact peaceful, restoring slumber find you tonight',
    ],
  },
  {
    title: 'तारों की सौगात',
    titleEnglish: 'Gift From the Stars',
    linesHindi: [
      'चाँद ने रोशनी भेजी और तारों ने भेजा मीठा आराम आपके नाम',
      'प्यार से सो जाइए, बहुत-बहुत शुभ रात्रि आपको',
    ],
    linesHinglish: [
      'Chaand ne roshni bheji aur taaron ne bheja meetha aaraam aapke naam',
      'Pyaar se so jaaiye, bahut-bahut shubh raatri aapko',
    ],
    linesEnglish: [
      'The moon sent soft silver light and stars sent sweet rest to your window',
      'Sleep comfortably tonight—wishing you a lovely good night',
    ],
  },
  {
    title: 'सुकून से भरी मुस्कान',
    titleEnglish: 'Peaceful Bedtime Smile',
    linesHindi: [
      'पूरा दिन जैसा भी बीता हो, रात में सिर्फ़ शांति चुनिए अपने लिए',
      'चैन से सोइए ताकि सुबह एक नई चमक के साथ जाग सकें',
    ],
    linesHinglish: [
      'Poora din jaisa bhi beeta ho, raat mein sirf shaanti chuniye apne liye',
      'Chain se soiye taaki subah ek nayi chamak ke saath jaag sakein',
    ],
    linesEnglish: [
      'However today unfolded, choose pure calm for yourself tonight',
      'Sleep deeply so you greet sunrise tomorrow with fresh radiance',
    ],
  },
  {
    title: 'प्यार भरा विराम',
    titleEnglish: 'Gentle Night Pause',
    linesHindi: [
      'कल के बड़े सपनों के लिए आज की मीठी नींद बहुत ज़रूरी है',
      'देर मत कीजिए, आराम से सो जाइए मेरे ख़ास मित्र',
    ],
    linesHinglish: [
      'Kal ke bade sapnon ke liye aaj ki meethi neend bahut zaroori hai',
      'Der mat kijiye, aaraam se so jaaiye mere khaas mitra',
    ],
    linesEnglish: [
      'Restful sleep tonight fuels every bright plan waiting tomorrow morning',
      'Do not stay awake too late—drift peacefully off now, dear friend',
    ],
  },
  {
    title: 'शांत रात का वरदान',
    titleEnglish: 'Silent Night Blessing',
    linesHindi: [
      'जहाँ अपनों की दुआ हो वहाँ रात का अंधेरा भी रोशन लगता है',
      'सुकून भरी नींद लीजिए — दिल से शुभ रात्रि',
    ],
    linesHinglish: [
      'Jahaan apnon ki dua ho wahaan raat ka andhera bhi roshan lagta hai',
      'Sukoon bhari neend lijiye — dil se shubh raatri',
    ],
    linesEnglish: [
      'Where loved ones hold you in their prayers, even midnight glows warm',
      'Enjoy deep, calming rest tonight—good night from the heart',
    ],
  },
  {
    title: 'गहरी नींद, सुनहरी सुबह',
    titleEnglish: 'Deep Sleep Golden Dawn',
    linesHindi: [
      'रात जितनी गहरी और शांत होगी, सुबह उतनी ही खिली-खिली होगी',
      'प्यारे सपनों के साथ आज आराम से सो जाइए आप',
    ],
    linesHinglish: [
      'Raat jitni gehri aur shaant hogi, subah utni hi khili-khili hogi',
      'Pyaare sapnon ke saath aaj aaraam se so jaaiye aap',
    ],
    linesEnglish: [
      'The deeper and calmer tonight’s sleep feels, the brighter morning breaks',
      'Slip peacefully beneath your blanket with sweet dreams ahead',
    ],
  },
  {
    title: 'थके पंखों को आराम',
    titleEnglish: 'Resting Tired Wings',
    linesHindi: [
      'ऊँचे आसमान में उड़ने वाले पंछी भी रात को घोंसले में लौटते हैं',
      'अब आपके विश्राम करने का समय हो गया है, शुभ रात्रि',
    ],
    linesHinglish: [
      'Oonche aasmaan mein udne waale panchhi bhi raat ko ghonsle mein laut-te hain',
      'Ab aapke vishraam karne ka samay ho gaya hai, shubh raatri',
    ],
    linesEnglish: [
      'Even birds soaring high across the sky return to their nests at nightfall',
      'Now it is completely your turn to rest softly—good night',
    ],
  },
  {
    title: 'दिल को भाती रात',
    titleEnglish: 'Soothing Nighttime',
    linesHindi: [
      'जब मन में संतोष होता है तो रात बहुत प्यारी और हल्की लगती है',
      'ईश्वर करे आज आपको वही संतोष भरी नींद मिले',
    ],
    linesHinglish: [
      'Jab man mein santosh hota hai to raat bahut pyaari aur halki lagti hai',
      'Ishwar kare aaj aapko wahi santosh bhari neend mile',
    ],
    linesEnglish: [
      'When quiet contentment sits inside your chest, night feels wonderfully light',
      'May that exact peaceful, satisfied rest find you tonight',
    ],
  },
  {
    title: 'सपनों में मुस्कान',
    titleEnglish: 'Smiling in Dreams',
    linesHindi: [
      'इतनी सुंदर हो आज की रात कि सपनों में भी मुस्कान बनी रहे',
      'सुबह आँख खुलते ही मन खुशी से भर जाए आपका',
    ],
    linesHinglish: [
      'Itni sundar ho aaj ki raat ki sapnon mein bhi muskaan bani rahe',
      'Subah aankh khulte hi man khushi se bhar jaaye aapka',
    ],
    linesEnglish: [
      'May tonight be gentle enough to keep a smile right through your dreams',
      'So your heart wakes filled with ease at first morning light',
    ],
  },
  {
    title: 'चाँद की लोरी साथ',
    titleEnglish: 'Moon’s Soft Song',
    linesHindi: [
      'बादलों के बीच से झाँकता चाँद आपको मीठी नींद का न्योता दे रहा है',
      'बिना किसी देरी के आराम कीजिए, शुभ रात्रि मेरे यार',
    ],
    linesHinglish: [
      'Baadalon ke beech se jhaankta chaand aapko meethi neend ka nyota de raha hai',
      'Bina kisi deri ke aaraam kijiye, shubh raatri mere yaar',
    ],
    linesEnglish: [
      'Peeking gently between soft clouds, the moon invites you into rest',
      'Put off nothing further—sleep comfortably tonight, dear friend',
    ],
  },
  {
    title: 'सुकून भरा शुभ रात्रि',
    titleEnglish: 'Serene Good Night',
    linesHindi: [
      'हर थकावट मिट जाए और हर अधूरा सपना कल सच होने को तैयार रहे',
      'इसी प्यारी दुआ के साथ आपको बहुत-बहुत शुभ रात्रि',
    ],
    linesHinglish: [
      'Har thakaawat mit jaaye aur har adhoora sapna kal sach hone ko taiyaar rahe',
      'Isi pyaari dua ke saath aapko bahut-bahut shubh raatri',
    ],
    linesEnglish: [
      'May every trace of weariness vanish and every dream grow ready for tomorrow',
      'Carrying that warm wish, wishing you a deeply restful good night',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'प्यारी रात का अंत',
    titleEnglish: 'Sweet Close of Night',
    linesHindi: [
      'आँखें बंद करने से पहले मुस्कुराना मत भूलिएगा आज की रात',
      'क्योंकि कल एक और सुंदर सुबह आपका इंतज़ार कर रही है',
    ],
    linesHinglish: [
      'Aankhein band karne se pehle muskuraana mat bhooliyega aaj ki raat',
      'Kyonki kal ek aur sundar subah aapka intezaar kar rahi hai',
    ],
    linesEnglish: [
      'Do not forget one gentle smile before shutting your eyes tonight',
      'Because another beautiful sunrise is already waiting for you tomorrow',
    ],
  },
  {
    title: 'सुकून के तारे',
    titleEnglish: 'Stars of Peace',
    linesHindi: [
      'सारी दुनिया के ख्वाबों से प्यारा हो आज आपका हर एक सपना',
      'चैन की नींद में सो जाइए, शुभ रात्रि मेरे अपने',
    ],
    linesHinglish: [
      'Saari duniya ke khwaabon se pyaara ho aaj aapka har ek sapna',
      'Chain ki neend mein so jaaiye, shubh raatri mere apne',
    ],
    linesEnglish: [
      'May every dream gracing your rest tonight feel gentle and bright',
      'Drift smoothly into deep slumber—good night, dear one',
    ],
  },
  {
    title: 'हल्की साँसों में विश्राम',
    titleEnglish: 'Quiet Breathing Rest',
    linesHindi: [
      'कमरे में शांति, मन में संतोष और तकिये पर सिर रखिए अब',
      'ईश्वर करे आज की रात आपको सबसे मीठी नींद मिले',
    ],
    linesHinglish: [
      'Kamre mein shaanti, man mein santosh aur takiye par sir rakhiye ab',
      'Ishwar kare aaj ki raat aapko sabse meethi neend mile',
    ],
    linesEnglish: [
      'Stillness in the room, contentment in the heart—rest your head softly now',
      'May tonight bring you the sweetest, deepest sleep of the week',
    ],
  },
  {
    title: 'दिल की दुआ रात में',
    titleEnglish: 'Midnight Goodwill',
    linesHindi: [
      'दूर रहकर भी अपनों के लिए अच्छी नींद की दुआ माँगते हैं हम',
      'सुकून से सोइए, कल नई रौशनी फिर से मुस्कुराएगी',
    ],
    linesHinglish: [
      'Door rehkar bhi apnon ke liye acchi neend ki dua maangte hain hum',
      'Sukoon se soiye, kal nayi raushni phir se muskuraayegi',
    ],
    linesEnglish: [
      'Even from miles away, I send wishes for peaceful sleep over everyone dear',
      'Rest comfortably—fresh golden morning light will smile again soon',
    ],
  },
  {
    title: 'शांति की मुहर',
    titleEnglish: 'Seal of Serenity',
    linesHindi: [
      'दिन भर के हर पन्ने पर अब शांति की मुहर लगाकर सो जाइए',
      'कल फिर एक प्यारी सी सुबह नए रंग लेकर आएगी',
    ],
    linesHinglish: [
      'Din bhar ke har panne par ab shaanti ki muhar lagaakar so jaaiye',
      'Kal phir ek pyaari si subah naye rang lekar aayegi',
    ],
    linesEnglish: [
      'Stamp today’s final page calmly with peace and drift off to sleep',
      'Tomorrow will return early carrying bright fresh colors once more',
    ],
  },
  {
    title: 'तनाव मुक्त नींद',
    titleEnglish: 'Stress-Free Slumber',
    linesHindi: [
      'कोई भी बात इतनी बड़ी नहीं कि आपकी रात की नींद छीन सके',
      'निश्चिंत होकर आँखें बंद करें, सब ठीक हो जाएगा कल',
    ],
    linesHinglish: [
      'Koi bhi baat itni badi nahin ki aapki raat ki neend chheen sake',
      'Nishchint hokar aankhein band karein, sab theek ho jaayega kal',
    ],
    linesEnglish: [
      'No problem is big enough to deserve stealing tonight’s peaceful rest',
      'Close your eyes calmly—everything looks steadier in morning light',
    ],
  },
  {
    title: 'रेशमी सपनों की रात',
    titleEnglish: 'Silky Dreams',
    linesHindi: [
      'चाँद की शीतलता आपके सारे दुख-दर्द को दूर कर दे आज रात',
      'सिर्फ़ मीठे ख्वाब और गहरी नींद साथ रहें आपके',
    ],
    linesHinglish: [
      'Chaand ki sheetalta aapke saare dukh-dard ko door kar de aaj raat',
      'Sirf meethe khwaab aur gehri neend saath rahein aapke',
    ],
    linesEnglish: [
      'May cool moonlight gently wash away every tired ache tonight',
      'Keep only pleasant dreams and unbroken slumber by your side',
    ],
  },
  {
    title: 'आराम की मधुर रात',
    titleEnglish: 'Sweet Night of Rest',
    linesHindi: [
      'हँसते-हँसते दिन गुज़ारा, अब सुकून के साथ रात भी गुज़ारिए',
      'आप सभी को प्यार और सम्मान भरा शुभ रात्रि',
    ],
    linesHinglish: [
      'Hanste-hanste din guzaara, ab sukoon ke saath raat bhi guzaariye',
      'Aap sabhi ko pyaar aur sammaan bhara shubh raatri',
    ],
    linesEnglish: [
      'You walked through the day smiling—now spend the night in deep ease too',
      'Sending heartfelt warmth and respectful good night wishes to everyone',
    ],
  },
  {
    title: 'चाँद तारों का आशीष',
    titleEnglish: 'Starlit Blessings',
    linesHindi: [
      'चाँद तारों के नीचे बसी हर बस्ती में चैन से सोएँ सब लोग',
      'आपकी रात भी बेहद शांत और आनंदमयी हो आज',
    ],
    linesHinglish: [
      'Chaand taaron ke neeche basi har basti mein chain se soyen sab log',
      'Aapki raat bhi behad shaant aur aanandmayi ho aaj',
    ],
    linesEnglish: [
      'May every home resting under moon and stars sleep safely in peace tonight',
      'And may your own night feel deeply calm and comforting',
    ],
  },
  {
    title: 'दिल से शुभ रात्रि',
    titleEnglish: 'Heartfelt Good Night',
    linesHindi: [
      'मीठी नींद, सुंदर सपने और कल की सुनहरी सुबह का वादा',
      'इसी प्यारी शुभकामना के साथ शुभ रात्रि मेरे दोस्त',
    ],
    linesHinglish: [
      'Meethi neend, sundar sapne aur kal ki sunahri subah ka waada',
      'Isi pyaari shubhkaamna ke saath shubh raatri mere dost',
    ],
    linesEnglish: [
      'Sweet sleep, gentle dreams, and the quiet promise of a golden sunrise',
      'Leaving you with that warm wish—good night, my dear friend',
    ],
  },
];

export const UNIQUE_GOOD_NIGHT_170 = buildUniqueShayaris(
  'good-night',
  'Good Night Shayari (गुड नाइट शायरी)',
  '🌌',
  31,
  GOOD_NIGHT_ENTRIES
);
