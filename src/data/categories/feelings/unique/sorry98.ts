import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const SORRY_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'दिल से मांगी माफ़ी',
    titleEnglish: 'Apology From the Heart',
    linesHindi: [
      'लफ़्ज़ों में चाहे उतनी सफाई न आए मेरे दोस्त',
      'पर दिल की गहराई से अपनी ग़लती मान रहा हूँ आज',
    ],
    linesHinglish: [
      'Lafzon mein chaahe utni safaai na aaye mere dost',
      'Par dil ki gehraai se apni galti maan raha hoon aaj',
    ],
    linesEnglish: [
      'My words may stumble trying to explain it all clearly',
      'Yet from the very bottom of my heart, I own my mistake today',
    ],
  },
  {
    title: 'नाराज़गी छोड़ने की गुज़ारिश',
    titleEnglish: 'Letting Go of Hurt',
    linesHindi: [
      'तुम्हारी खामोशी अब सीने में चुभने लगी है बहुत',
      'प्लीज़ गुस्सा थूक दो और फिर से बात कर लो न',
    ],
    linesHinglish: [
      'Tumhaari khaamoshi ab seene mein chubhne lagi hai bahut',
      'Please gussa thook do aur phir se baat kar lo na',
    ],
    linesEnglish: [
      'Your heavy silence has begun aching inside my chest',
      'Please set this anger aside and speak with me again',
    ],
  },
  {
    title: 'गलती इंसान से ही होती है',
    titleEnglish: 'Human to Err',
    linesHindi: [
      'इंसान हूँ मैं भी, अनजाने में चूक हो गई मुझसे',
      'इस एक भूल के बदले पूरा रिश्ता मत तोड़ देना',
    ],
    linesHinglish: [
      'Insaan hoon main bhi, anjaane mein chook ho gayi mujhse',
      'Is ek bhool ke badle poora rishta mat tod dena',
    ],
    linesEnglish: [
      'I am only human, and I slipped unintentionally',
      'Do not throw away everything we share over one mistake',
    ],
  },
  {
    title: 'गुस्से के पल का पछतावा',
    titleEnglish: 'Regret After Harsh Words',
    linesHindi: [
      'उस वक़्त ज़ुबान फिसल गई थी गुस्से की तेज़ी में',
      'दिल से कभी तुम्हें दुख पहुँचाने का इरादा नहीं था',
    ],
    linesHinglish: [
      'Us waqt zubaan phisal gayi thi gusse ki tezi mein',
      'Dil se kabhi tumhein dukh pahunchaane ka iraada nahin tha',
    ],
    linesEnglish: [
      'My tongue slipped in a reckless moment of frustration',
      'Inside my heart I never once meant to bring you pain',
    ],
  },
  {
    title: 'रिश्ता अहमियत रखता है',
    titleEnglish: 'Valuing Our Bond Above Ego',
    linesHindi: [
      'अहम की लड़ाई में जीतकर भी मैं हार ही जाऊँगा',
      'मुझे बहस नहीं जीतनी, मुझे सिर्फ़ तुम्हारा साथ चाहिए',
    ],
    linesHinglish: [
      'Aham ki ladaai mein jeetkar bhi main haar hi jaaoonga',
      'Mujhe behas nahin jeetni, mujhe sirf tumhaara saath chahiye',
    ],
    linesEnglish: [
      'Even winning an argument of ego would leave me empty-handed',
      'I do not want to win a debate—I only want us whole again',
    ],
  },
  {
    title: 'रूठे चेहरे की मुस्कान',
    titleEnglish: 'Missing Your Warm Smile',
    linesHindi: [
      'तुम रूठ जाते हो तो पूरा दिन अधूरा सा लगता है',
      'एक छोटी सी मुस्कान दे दो तो मेरी जान में जान आए',
    ],
    linesHinglish: [
      'Tum rooth jaate ho to poora din adhoora sa lagta hai',
      'Ek chhoti si muskaan de do to meri jaan mein jaan aaye',
    ],
    linesEnglish: [
      'When you stay upset with me, the entire day feels hollow',
      'Give me just one small smile so I can breathe easy again',
    ],
  },
  {
    title: 'सज़ा काफी हो गई',
    titleEnglish: 'Enough Silence Now',
    linesHindi: [
      'जितनी सज़ा देनी थी मेरी ग़लती की, दे चुके हो तुम',
      'अब चुप रहकर और ज़्यादा तकलीफ़ मत दो प्लीज़',
    ],
    linesHinglish: [
      'Jitni saza deni thi meri galti ki, de chuke ho tum',
      'Ab chup rehkar aur zyada takleef mat do please',
    ],
    linesEnglish: [
      'Whatever punishment my mistake deserved, I have felt it whole',
      'Please do not hurt both of us further by staying silent',
    ],
  },
  {
    title: 'कान पकड़कर सॉरी',
    titleEnglish: 'Honest Apologies',
    linesHindi: [
      'आज फिर कान पकड़कर माफ़ी मांग रहा हूँ तुम्हारे आगे',
      'मेरे नादान दिल की खता को बड़ा दिल करके भुला दो',
    ],
    linesHinglish: [
      'Aaj phir kaan pakadkar maafi maang raha hoon tumhaare aage',
      'Mere nadaan dil ki khata ko bada dil karke bhula do',
    ],
    linesEnglish: [
      'Once again I hold out my hands honestly asking forgiveness',
      'Be generous and let go of this foolish lapse from me',
    ],
  },
  {
    title: 'रात भर की बेचैनी',
    titleEnglish: 'Sleepless With Regret',
    linesHindi: [
      'तुम्हें उदास करके मुझे खुद भी कहाँ नींद आती है',
      'सारी रात बस तुम्हें मनाने के तरीके सोचता रहा हूँ',
    ],
    linesHinglish: [
      'Tumhein udaas karke mujhe khud bhi kahaan neend aati hai',
      'Saari raat bas tumhein manaane ke tareeqe sochta raha hoon',
    ],
    linesEnglish: [
      'How could I ever sleep soundly after leaving you hurt',
      'All night long I lay awake wondering how to make things right',
    ],
  },
  {
    title: 'सुधार का वादा',
    titleEnglish: 'Promise to Do Better',
    linesHindi: [
      'सिर्फ़ सॉरी कहकर बात खत्म नहीं करना चाहता मैं',
      'वादा है कि दोबारा कभी यही ग़लती नहीं दोहराऊँगा',
    ],
    linesHinglish: [
      'Sirf sorry kehkar baat khatam nahin karna chaahta main',
      'Waada hai ki dobaara kabhi yahi galti nahin dohraaoonga',
    ],
    linesEnglish: [
      'I do not want to toss out an easy sorry and move on',
      'I promise with all sincerity never to repeat this mistake',
    ],
  },
  {
    title: 'दोस्ती से बढ़कर कुछ नहीं',
    titleEnglish: 'Nothing Above Friendship',
    linesHindi: [
      'हमारी दोस्ती इतनी हल्की नहीं कि एक झगड़े में टूट जाए',
      'चलो पुरानी बातें भूलकर फिर से चाय पीने चलते हैं',
    ],
    linesHinglish: [
      'Hamaari dosti itni halki nahin ki ek jhagde mein toot jaaye',
      'Chalo purani baatein bhoolkar phir se chai peene chalte hain',
    ],
    linesEnglish: [
      'Our friendship is far stronger than a single clumsy argument',
      'Let us leave yesterday behind and grab warm tea together',
    ],
  },
  {
    title: 'बिना शर्त माफ़ी',
    titleEnglish: 'Unconditional Apology',
    linesHindi: [
      'कोई बहाना नहीं बनाऊँगा आज अपनी सफाई में मैं',
      'सारी गलती मेरी थी, बस मुझे दिल से माफ़ कर दो',
    ],
    linesHinglish: [
      'Koi bahaana nahin banaaoonga aaj apni safaai mein main',
      'Saari galti meri thi, bas mujhe dil se maaf kar do',
    ],
    linesEnglish: [
      'I will offer zero excuses today trying to defend myself',
      'The fault was mine completely—please forgive me warmly',
    ],
  },
  {
    title: 'फूल जैसा नाज़ुक रिश्ता',
    titleEnglish: 'Handling Bonds With Care',
    linesHindi: [
      'अनजाने में ही सही पर फूल से रिश्ते को चोट लग गई',
      'अब पूरी उम्र इसे और ज़्यादा संभालकर रखूँगा मैं',
    ],
    linesHinglish: [
      'Anjaane mein hi sahi par phool se rishte ko chot lag gayi',
      'Ab poori umar ise aur zyada sanbhaalkar rakhoonga main',
    ],
    linesEnglish: [
      'Even unknowingly, I bruised something as tender as a bloom',
      'From now on I will guard our bond with twice the care',
    ],
  },
  {
    title: 'फ़ोन कॉल का इंतज़ार',
    titleEnglish: 'Waiting for Your Reply',
    linesHindi: [
      'सुबह से हर पाँच मिनट में मोबाइल देख रहा हूँ मैं',
      'शायद तुम्हारा एक छोटा सा हैलो आ जाए माफ़ी के साथ',
    ],
    linesHinglish: [
      'Subah se har paanch minute mein mobile dekh raha hoon main',
      'Shaayad tumhaara ek chhota sa hello aa jaaye maafi ke saath',
    ],
    linesEnglish: [
      'Since morning I have checked my phone every five minutes',
      'Hoping a brief hello arrives carrying gentle forgiveness',
    ],
  },
  {
    title: 'अपनों के सामने झुकना',
    titleEnglish: 'Bowing Before Loved Ones',
    linesHindi: [
      'झुकने से इज़्ज़त कम नहीं होती अपनों के सामने कभी',
      'अगर रिश्ते बच जाएँ तो सौ बार माफ़ी मांगना मंजूर है',
    ],
    linesHinglish: [
      'Jhukne se izzat kam nahin hoti apnon ke saamne kabhi',
      'Agar rishte bach jaayein to sau baar maafi maangna manzoor hai',
    ],
    linesEnglish: [
      'Bowing in apology never shrinks your honor before loved ones',
      'If it keeps us close, I would gladly say sorry a hundred times',
    ],
  },
  {
    title: 'भीगी आँखों की विनती',
    titleEnglish: 'Quiet Plea for Grace',
    linesHindi: [
      'मेरी आंखों में छुपा पछतावा पढ़ लो एक बार आकर',
      'इतनी देर तक किसी अपने को सताना ठीक नहीं होता',
    ],
    linesHinglish: [
      'Meri aankhon mein chhupa pachhtaawa padh lo ek baar aakar',
      'Itni der tak kisi apne ko sataana theek nahin hota',
    ],
    linesEnglish: [
      'Look once into my eyes and read the honest remorse inside',
      'Leaving someone who loves you aching this long hurts too much',
    ],
  },
  {
    title: 'रूठने और मनाने का हक़',
    titleEnglish: 'Right to Forgive and Mend',
    linesHindi: [
      'तुम्हारे सिवा किससे ग़लती करके माफ़ी माँगूँगा मैं',
      'तुम्हीं तो अपने हो जो हर नादानी संभाल लेते हो',
    ],
    linesHinglish: [
      'Tumhaare siwa kisse galti karke maafi maangoonga main',
      'Tumhin to apne ho jo har naadaani sanbhaal lete ho',
    ],
    linesEnglish: [
      'Who else besides you can I turn to after messing up',
      'You are my closest home, the one who softens every stumble',
    ],
  },
  {
    title: 'टूटे भरोसे को जोड़ना',
    titleEnglish: 'Rebuilding Trust Slowly',
    linesHindi: [
      'जानता हूँ भरोसे की चोट भरने में थोड़ा वक़्त लगता है',
      'बस एक आख़िरी मौका दे दो अपनी सच्चाई साबित करने का',
    ],
    linesHinglish: [
      'Jaanta hoon bharose ki chot bharne mein thoda waqt lagta hai',
      'Bas ek aakhiri mauqa de do apni sacchai saabit karne ka',
    ],
    linesEnglish: [
      'I know mending bruised trust takes patience and time',
      'Just grant me one honest chance to prove my care again',
    ],
  },
  {
    title: 'दिल की सफ़ाई में कुछ शब्द',
    titleEnglish: 'Clearing the Air',
    linesHindi: [
      'गलतफ़हमी की धूल ने हमारी तस्वीर धुंधली कर दी है',
      'आओ बैठकर बात करते हैं और सब फिर से साफ़ कर दें',
    ],
    linesHinglish: [
      'Galatfehmi ki dhool ne hamaari tasveer dhundhli kar di hai',
      'Aao baithkar baat karte hain aur sab phir se saaf kar dein',
    ],
    linesEnglish: [
      'Dust of misunderstanding has clouded what we built together',
      'Let us sit down, talk gently, and wipe the glass clean again',
    ],
  },
  {
    title: 'मेरी सबसे प्यारी आदत तुम',
    titleEnglish: 'Life Feels Off Without You',
    linesHindi: [
      'तुमसे बात किए बिना हर शाम बिल्कुल बेस्वाद लगती है',
      'मान भी जाओ यार, अब और कितना इंतज़ार कराओगे',
    ],
    linesHinglish: [
      'Tumse baat kiye bina har shaam bilkul beswaad lagti hai',
      'Maan bhi jaao yaar, ab aur kitna intezaar karaaoge',
    ],
    linesEnglish: [
      'Without talking to you, every evening feels utterly flat',
      'Please relent now, my friend—how much longer will you make me wait',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'अनजानी ठेस के लिए खेद',
    titleEnglish: 'Sorry for Unseen Hurt',
    linesHindi: [
      'कभी-कभी मज़ाक़ भी गहरी चोट दे जाता है अनजाने में',
      'अगर मेरी किसी बात से दिल दुखा हो तो तहेदिल से सॉरी',
    ],
    linesHinglish: [
      'Kabhi-kabhi mazaak bhi gehri chot de jaata hai anjaane mein',
      'Agar meri kisi baat se dil dukha ho to tahedil se sorry',
    ],
    linesEnglish: [
      'Sometimes even playful words wound unintentionally',
      'If anything I said stung your heart, I am truly, deeply sorry',
    ],
  },
  {
    title: 'वक्त के साथ ग़लती का एहसास',
    titleEnglish: 'Realizing My Mistake',
    linesHindi: [
      'शांत होकर सोचा तो अपनी ही ग़लती साफ़ दिखाई दी',
      'उस दिन मुझे वैसा बर्ताव बिल्कुल नहीं करना चाहिए था',
    ],
    linesHinglish: [
      'Shaant hokar socha to apni hi galti saaf dikhai di',
      'Us din mujhe waisa bartaav bilkul nahin karna chahiye tha',
    ],
    linesEnglish: [
      'Once my head cooled down, my own fault stood crystal clear',
      'I never should have reacted that way toward you that day',
    ],
  },
  {
    title: 'चॉकलेट और सॉरी नोट',
    titleEnglish: 'Sweet Truce Offered',
    linesHindi: [
      'नाराज़गी अपनी जगह ठीक है, पर अब मुंह तो मीठा कर लो',
      'एक प्यारे से सॉरी के साथ तुम्हारी पसंदीदा चॉकलेट लाया हूँ',
    ],
    linesHinglish: [
      'Naaraazgi apni jagah theek hai, par ab munh to meetha kar lo',
      'Ek pyaare se sorry ke saath tumhaari pasandeeda chocolate laaya hoon',
    ],
    linesEnglish: [
      'Your annoyance is fair, yet let us sweeten the mood now',
      'Along with an honest sorry, I brought your favorite chocolate',
    ],
  },
  {
    title: 'अहम से बड़ा प्यार',
    titleEnglish: 'Love Outweighs Pride',
    linesHindi: [
      'मेरी अकड़ तुम्हारे आँसुओं से बड़ी कभी नहीं हो सकती',
      'आगे से हमेशा पहले तुम्हारे दिल का ख़याल रखूँगा',
    ],
    linesHinglish: [
      'Meri akad tumhaare aansuon se badi kabhi nahin ho sakti',
      'Aage se hamesha pehle tumhaare dil ka khayaal rakhoonga',
    ],
    linesEnglish: [
      'My stubborn pride could never matter more than your tears',
      'Going forward, I will always place your feelings first',
    ],
  },
  {
    title: 'भूल सुधारने की चाह',
    titleEnglish: 'Eager to Make Amends',
    linesHindi: [
      'पीछे जाकर वो पल तो नहीं मिटा सकता हूँ मैं आज',
      'पर आने वाले हर दिन को खूबसूरत बनाने का वादा करता हूँ',
    ],
    linesHinglish: [
      'Peeche jaakar wo pal to nahin mita sakta hoon main aaj',
      'Par aane waale har din ko khoobsurat banaane ka waada karta hoon',
    ],
    linesEnglish: [
      'I cannot step backward in time to undo that careless moment',
      'Yet I vow to fill every coming day with warmth and care',
    ],
  },
  {
    title: 'दूरी का डर',
    titleEnglish: 'Afraid of Losing You',
    linesHindi: [
      'इस छोटी सी अनबन में कहीं हम दूर न हो जाएँ सच में',
      'यही डर मुझे हर पल भीतर से सता रहा है',
    ],
    linesHinglish: [
      'Is chhoti si anban mein kahin hum door na ho jaayein sach mein',
      'Yahi dar mujhe har pal bheetar se sata raha hai',
    ],
    linesEnglish: [
      'That one clumsy clash might actually push us apart for good',
      'Is the quiet worry nagging inside me every passing hour',
    ],
  },
  {
    title: 'सच्ची क्षमा याचना',
    titleEnglish: 'Humble Plea',
    linesHindi: [
      'जितनी बड़ी ग़लती थी, उससे बड़ा तुम्हारा दिल है जानता हूँ',
      'इस बार भी मुझे माफ़ करके अपना बड़प्पन दिखा दो',
    ],
    linesHinglish: [
      'Jitni badi galti thi, usse bada tumhaara dil hai jaanta hoon',
      'Is baar bhi mujhe maaf karke apna badappan dikha do',
    ],
    linesEnglish: [
      'As large as my lapse was, I know your grace runs larger still',
      'Forgive me once more with the warmth only you possess',
    ],
  },
  {
    title: 'बिना तुम्हारे सूना दिन',
    titleEnglish: 'Empty Without Talking',
    linesHindi: [
      'आज हर काम में मन उचाट सा रहा है सुबह से',
      'जब तक तुम मुस्कुराकर बात न करो, सुकून नहीं मिलता',
    ],
    linesHinglish: [
      'Aaj har kaam mein man uchaat sa raha hai subah se',
      'Jab tak tum muskurakar baat na karo, sukoon nahin milta',
    ],
    linesEnglish: [
      'Nothing held my focus since morning—my mind felt scattered',
      'Until you smile and speak to me again, peace stays away',
    ],
  },
  {
    title: 'मौन की दीवार गिराना',
    titleEnglish: 'Breaking the Silence',
    linesHindi: [
      'दोनों तरफ़ की चुप्पी सिर्फ़ फ़ासले बढ़ाती है यार',
      'मैं पहला कदम बढ़ा रहा हूँ, तुम भी हाथ थाम लो न',
    ],
    linesHinglish: [
      'Dono taraf ki chuppi sirf faasle badhaati hai yaar',
      'Main pehla kadam badha raha hoon, tum bhi haath thaam lo na',
    ],
    linesEnglish: [
      'Silence on both sides only builds taller walls between us',
      'Here I am taking the first step—won’t you take my hand too',
    ],
  },
  {
    title: 'पिघलती हुई नाराज़गी',
    titleEnglish: 'Melting the Tension',
    linesHindi: [
      'अच्छा बाबा मान ली अपनी ग़लती सौ फ़ीसदी मैंने',
      'अब वो प्यारी सी हँसी चेहरे पर वापस ले आओ न',
    ],
    linesHinglish: [
      'Accha baba maan li apni galti sau feesadi maine',
      'Ab wo pyaari si hansi chehre par waapas le aao na',
    ],
    linesEnglish: [
      'Alright, I admit my mistake one hundred percent completely',
      'Now bring that warm, familiar smile back onto your face',
    ],
  },
  {
    title: 'माफ़ी का हकदार',
    titleEnglish: 'Hoping for Another Chance',
    linesHindi: [
      'सच्चे रिश्तों में ग़लतियों से ज़्यादा अहमियत साथ की होती है',
      'मुझे यक़ीन है कि तुम मेरी भावना ज़रूर समझोगे',
    ],
    linesHinglish: [
      'Sacche rishton mein galtiyon se zyada ahmiyat saath ki hoti hai',
      'Mujhe yaqeen hai ki tum meri bhaavna zaroor samjhoge',
    ],
    linesEnglish: [
      'In genuine bonds, staying together outweighs small stumbles',
      'I trust you can feel how sincerely I mean these words',
    ],
  },
  {
    title: 'आँखों की नमी से सॉरी',
    titleEnglish: 'Sincere Tears of Regret',
    linesHindi: [
      'तुम्हें तकलीफ़ में देखकर दिल बहुत भारी हो गया है',
      'काश मैं अपने कहे शब्द वापस खींच पाता अभी',
    ],
    linesHinglish: [
      'Tumhein takleef mein dekhkar dil bahut bhaari ho gaya hai',
      'Kaash main apne kahe shabd waapas kheench paata abhi',
    ],
    linesEnglish: [
      'Seeing you hurt because of me weighs heavily on my chest',
      'How I wish I could pull those careless words right back',
    ],
  },
  {
    title: 'अधूरी बात पूरी करना',
    titleEnglish: 'Fixing What Broke',
    linesHindi: [
      'झगड़ा तो हर किसी के बीच हो जाता है कभी न कभी',
      'पर झुककर संभाल लेना ही प्यार की असली पहचान है',
    ],
    linesHinglish: [
      'Jhagda to har kisi ke beech ho jaata hai kabhi na kabhi',
      'Par jhukkar sanbhaal lena hi pyaar ki asli pehchaan hai',
    ],
    linesEnglish: [
      'Clashes happen between everyone who truly cares now and then',
      'Stepping softly forward to mend things proves real love',
    ],
  },
  {
    title: 'नई शुरुआत की गुज़ारिश',
    titleEnglish: 'Asking for a Clean Page',
    linesHindi: [
      'चलो कल की कड़वाहट को यहीं खत्म कर देते हैं आज',
      'एक ताज़ी मुस्कान के साथ फिर से शुरुआत करते हैं',
    ],
    linesHinglish: [
      'Chalo kal ki kadwaahat ko yahin khatam kar dete hain aaj',
      'Ek taazi muskaan ke saath phir se shuruaat karte hain',
    ],
    linesEnglish: [
      'Let us leave yesterdays bitterness behind right here today',
      'And open a clean new page together with a fresh smile',
    ],
  },
  {
    title: 'सच्चा पछतावा',
    titleEnglish: 'Honest Remorse',
    linesHindi: [
      'दिखावे के लिए नहीं, सच में शर्मिंदा हूँ अपने किए पर',
      'दिल से चाहता हूँ कि तुम्हारे चेहरे पर फिर सुकून लौटे',
    ],
    linesHinglish: [
      'Dikhawe ke liye nahin, sach mein sharminda hoon apne kiye par',
      'Dil se chaahta hoon ki tumhaare chehre par phir sukoon laute',
    ],
    linesEnglish: [
      'Not for show, I genuinely feel ashamed of how I acted',
      'All I want is to see peaceful joy return to your eyes',
    ],
  },
  {
    title: 'वक़्त पर क़द्र',
    titleEnglish: 'Cherishing You Now',
    linesHindi: [
      'तुम्हारे बिना दो घंटे बिताकर ही समझ आ गया मुझे',
      'कि मेरी दुनिया में तुम्हारी जगह कोई नहीं ले सकता',
    ],
    linesHinglish: [
      'Tumhaare bina do ghante bitaakar hi samajh aa gaya mujhe',
      'Ki meri duniya mein tumhaari jagah koi nahin le sakta',
    ],
    linesEnglish: [
      'Even two quiet hours apart reminded me instantly',
      'Nobody anywhere in this world can ever fill your place',
    ],
  },
  {
    title: 'हाथ थामे रहने की विनती',
    titleEnglish: 'Gentle Note of Care',
    linesHindi: [
      'चाहे जितना भी गुस्सा कर लो, हाथ कभी मत छोड़ना',
      'तुम्हारे बिना इस नादान को संभलना नहीं आता है',
    ],
    linesHinglish: [
      'Chaahe jitna bhi gussa kar lo, haath kabhi mat chhodna',
      'Tumhaare bina is nadaan ko sanbhalna nahin aata hai',
    ],
    linesEnglish: [
      'Scold me all you want, just never let go of my hand',
      'Without you beside me, this clumsy heart loses balance fast',
    ],
  },
  {
    title: 'दिल की गहराई से क्षमा',
    titleEnglish: 'Heartfelt Pardon',
    linesHindi: [
      'हर लफ़्ज़ के पीछे सिर्फ़ एक ही उम्मीद लिख रहा हूँ',
      'कि पढ़ते ही तुम्हारा गुस्सा थोड़ा कम हो जाएगा',
    ],
    linesHinglish: [
      'Har lafz ke peeche sirf ek hi ummeed likh raha hoon',
      'Ki padhte hi tumhaara gussa thoda kam ho jaayega',
    ],
    linesEnglish: [
      'Behind every word I write rests one simple hope',
      'That reading this softens the hurt inside your heart a bit',
    ],
  },
  {
    title: 'मुस्कुराने की शर्त',
    titleEnglish: 'Earn Back Your Smile',
    linesHindi: [
      'चाहो तो सौ काम करवा लो मुझसे सजा के तौर पर',
      'बस बदले में पहले की तरह हँसकर बात कर लो एक बार',
    ],
    linesHinglish: [
      'Chaaho to sau kaam karwa lo mujhse saza ke taur par',
      'Bas badle mein pehle ki tarah hanskar baat kar lo ek baar',
    ],
    linesEnglish: [
      'Give me a hundred chores as penalty if you wish',
      'Just laugh and talk with me like before once in return',
    ],
  },
  {
    title: 'माफ़ी का छोटा तोहफ़ा',
    titleEnglish: 'Olive Branch',
    linesHindi: [
      'गुस्से के बादल चाहे जितने काले क्यों न दिख रहे हों',
      'सच्चे प्यार की हवा पल भर में आसमान साफ़ कर देती है',
    ],
    linesHinglish: [
      'Gusse ke baadal chaahe jitne kaale kyun na dikh rahe hon',
      'Sacche pyaar ki hawa pal bhar mein aasmaan saaf kar deti hai',
    ],
    linesEnglish: [
      'No matter how dark storm clouds of anger look right now',
      'A breeze of honest care clears the sky in seconds',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'अनचाही भूल की भरपाई',
    titleEnglish: 'Making Up for Wrong',
    linesHindi: [
      'गलती मेरी थी और सज़ा तुम दोनों की ख़ामोशी काट रही है',
      'आओ इस अनचाही दूरी को यहीं खत्म कर देते हैं',
    ],
    linesHinglish: [
      'Galti meri thi aur saza tum dono ki khaamoshi kaat rahi hai',
      'Aao is anchaahi doori ko yahin khatam kar dete hain',
    ],
    linesEnglish: [
      'The mistake was mine, yet silence punishes both of us alike',
      'Let us end this unwanted distance right here and now',
    ],
  },
  {
    title: 'शर्मिंदगी का एहसास',
    titleEnglish: 'Humbled by Remorse',
    linesHindi: [
      'नज़रें मिलाकर बात करने की हिम्मत भी नहीं बची आज',
      'इतना बुरा लग रहा है तुम्हारा दिल दुखाकर मुझे',
    ],
    linesHinglish: [
      'Nazrein milaakar baat karne ki himmat bhi nahin bachi aaj',
      'Itna bura lag raha hai tumhaara dil dukhaakar mujhe',
    ],
    linesEnglish: [
      'I scarcely have the courage to meet your eyes squarely today',
      'Seeing how badly I hurt your heart weighs deeply on me',
    ],
  },
  {
    title: 'सच्ची दोस्ती की दुहाई',
    titleEnglish: 'For Old Times Sake',
    linesHindi: [
      'इतनी प्यारी यादें साथ बनाई हैं हमने सालों में',
      'एक खराब दिन को उन सब पर भारी मत पड़ने दो',
    ],
    linesHinglish: [
      'Itni pyaari yaadein saath banaai hain humne saalon mein',
      'Ek kharaab din ko un sab par bhaari mat padne do',
    ],
    linesEnglish: [
      'We built so many warm, precious memories over the years',
      'Do not let one rough afternoon outweigh all of those',
    ],
  },
  {
    title: 'गुस्सा थामने की विनती',
    titleEnglish: 'Softening the Storm',
    linesHindi: [
      'जब भी तुम नाराज़ होते हो, वक्त मानो रुक सा जाता है',
      'एक छोटा सा जवाब भेजकर इस पल को फिर से जिंदा कर दो',
    ],
    linesHinglish: [
      'Jab bhi tum naaraaz hote ho, waqt maano ruk sa jaata hai',
      'Ek chhota sa jawaab bhejkar is pal ko phir se zinda kar do',
    ],
    linesEnglish: [
      'Whenever you stay upset, time itself feels frozen still',
      'Send one small reply and bring warmth rushing back',
    ],
  },
  {
    title: 'भरोसा वापस पाने की कोशिश',
    titleEnglish: 'Earning Trust Back',
    linesHindi: [
      'कहने से ज़्यादा अब अपने कामों से दिखाना चाहता हूँ',
      'कि मेरे दिल में तुम्हारी इज़्ज़त सबसे ऊपर है',
    ],
    linesHinglish: [
      'Kehne se zyada ab apne kaamon se dikhana chaahta hoon',
      'Ki mere dil mein tumhaari izzat sabse upar hai',
    ],
    linesEnglish: [
      'More than promises, I want my actions ahead to show',
      'That respect for your heart stands above everything to me',
    ],
  },
  {
    title: 'अकेले पड़ने का डर',
    titleEnglish: 'Missing My Confidant',
    linesHindi: [
      'किससे साझा करूँ अपने दिन भर के छोटे-छोटे किस्से',
      'जब मेरा सबसे ख़ास साथी ही मुझसे रूठा बैठा है',
    ],
    linesHinglish: [
      'Kisse saajha karoon apne din bhar ke chhote-chhote kisse',
      'Jab mera sabse khaas saathi hi mujhse rootha baitha hai',
    ],
    linesEnglish: [
      'Who else can I share every little story of my day with',
      'When my favorite person sits upset and distant from me',
    ],
  },
  {
    title: 'माफ़ी से बड़ा दिल',
    titleEnglish: 'Grace to Forgive',
    linesHindi: [
      'कमियाँ तो हर इंसान में होती हैं कहीं न कहीं दोस्त',
      'माफ़ करना ही इंसान को सबसे बड़ा बनाता है',
    ],
    linesHinglish: [
      'Kamiyan to har insaan mein hoti hain kahin na kahin dost',
      'Maaf karna hi insaan ko sabse bada banaata hai',
    ],
    linesEnglish: [
      'Every human soul carries flaws somewhere along the way',
      'The grace to forgive is what lifts a heart truly tall',
    ],
  },
  {
    title: 'मीठे पलों का वास्ता',
    titleEnglish: 'Remember Our Smiles',
    linesHindi: [
      'वो हँसी के पल याद कर लो जो हमने साथ बांटे थे',
      'शायद फिर मेरी इस एक भूल को माफ़ करना आसान हो जाए',
    ],
    linesHinglish: [
      'Wo hansi ke pal yaad kar lo jo humne saath baante the',
      'Shaayad phir meri is ek bhool ko maaf karna aasaan ho jaaye',
    ],
    linesEnglish: [
      'Think back once to all those joyful hours we laughed together',
      'Maybe forgiving this one misstep will feel easier then',
    ],
  },
  {
    title: 'अनसुनी कॉल की कसक',
    titleEnglish: 'Missed Calls of Care',
    linesHindi: [
      'दस बार घंटी बजी पर तुमने उठाया नहीं फोन',
      'कम से कम मेरी एक आवाज़ तो सुन लो आख़िरी बार',
    ],
    linesHinglish: [
      'Das baar ghanti baji par tumne uthaya nahin phone',
      'Kam se kam meri ek aawaaz to sun lo aakhiri baar',
    ],
    linesEnglish: [
      'The line rang ten times yet you let it pass unanswered',
      'Please listen to my voice just once—I truly mean sorry',
    ],
  },
  {
    title: 'हाथ जोड़कर विनती',
    titleEnglish: 'Sincere Request',
    linesHindi: [
      'दिल की सारी अकड़ छोड़कर आज सच बोल रहा हूँ',
      'तुम्हारे बिना मेरी हर खुशी अधूरी रह जाती है',
    ],
    linesHinglish: [
      'Dil ki saari akad chhodkar aaj sach bol raha hoon',
      'Tumhaare bina meri har khushi adhoori reh jaati hai',
    ],
    linesEnglish: [
      'Dropping every ounce of stubborn pride, I speak plain truth today',
      'Without you near, every happiness of mine feels half-done',
    ],
  },
  {
    title: 'नए सिरे से दोस्ती',
    titleEnglish: 'Resetting Together',
    linesHindi: [
      'पिछले पन्ने पर दाग़ लग गया तो पूरी किताब मत फेंको',
      'चलो अगला पन्ना खोलते हैं और साफ़ कहानी लिखते हैं',
    ],
    linesHinglish: [
      'Pichhle panne par daag lag gaya to poori kitaab mat phenko',
      'Chalo agla panna kholte hain aur saaf kahaani likhte hain',
    ],
    linesEnglish: [
      'Do not throw away a whole book because one page got smudged',
      'Let us turn to the next clean leaf and write gently together',
    ],
  },
  {
    title: 'मेरी नादानी माफ़ करो',
    titleEnglish: 'Pardon My Clumsiness',
    linesHindi: [
      'कभी-कभी बिना सोचे बोल देता हूँ मैं जल्दबाज़ी में',
      'पर दिल में तुम्हारे लिए प्यार आज भी उतना ही सच्चा है',
    ],
    linesHinglish: [
      'Kabhi-kabhi bina soche bol deta hoon main jaldbaazi mein',
      'Par dil mein tumhaare liye pyaar aaj bhi utna hi saccha hai',
    ],
    linesEnglish: [
      'Sometimes words tumble out in reckless haste before I think',
      'Yet my affection for you inside stays just as pure and real',
    ],
  },
  {
    title: 'गुस्से के बाद प्यार',
    titleEnglish: 'After Every Rain',
    linesHindi: [
      'जैसे बारिश के बाद आसमान और ज़्यादा चमक उठता है',
      'वैसे ही इस झगड़े के बाद हमारा रिश्ता और मजबूत होगा',
    ],
    linesHinglish: [
      'Jaise baarish ke baad aasmaan aur zyada chamak uthta hai',
      'Waise hi is jhagde ke baad hamaara rishta aur mazboot hoga',
    ],
    linesEnglish: [
      'Just as the sky glows cleaner right after a heavy downpour',
      'Our bond will stand even steadier once this storm passes',
    ],
  },
  {
    title: 'चाय पर सुलह',
    titleEnglish: 'Peace Over Coffee',
    linesHindi: [
      'मिलकर बैठो तो बड़ी से बड़ी उलझन सुलझ जाती है',
      'आज शाम पाँच बजे कॉफी पर मिल रहे हैं न हम दोनों',
    ],
    linesHinglish: [
      'Milkar baitho to badi se badi uljhan sulajh jaati hai',
      'Aaj shaam paanch baje coffee par mil rahe hain na hum dono',
    ],
    linesEnglish: [
      'Even tangled knots loosen fast once we sit down face to face',
      'Can we meet over warm coffee at five this evening',
    ],
  },
  {
    title: 'सच्चे अल्फ़ाज़ों में माफ़ी',
    titleEnglish: 'Clean Honest Heart',
    linesHindi: [
      'तुमसे कुछ छुपाने या तुम्हें हराने की नीयत नहीं थी',
      'बस गलत शब्द चुन लिए गए सही बात कहने के लिए',
    ],
    linesHinglish: [
      'Tumse kuch chhupaane ya tumhein haraane ki neeyat nahin thi',
      'Bas galat shabd chun liye gaye sahi baat kehne ke liye',
    ],
    linesEnglish: [
      'I never meant to hide anything or hurt your pride',
      'I simply picked completely clumsy words at the wrong moment',
    ],
  },
  {
    title: 'माफ़ी का सुकून',
    titleEnglish: 'Relief of Forgiveness',
    linesHindi: [
      'तुम्हारी एक हाँ का इंतज़ार सुबह से शाम तक है मुझे',
      'इतनी भी क्या नाराज़गी कि एक सॉरी भी न मानो',
    ],
    linesHinglish: [
      'Tumhaari ek haan ka intezaar subah se shaam tak hai mujhe',
      'Itni bhi kya naaraazgi ki ek sorry bhi na maano',
    ],
    linesEnglish: [
      'From sunrise until dusk I wait for one forgiving word from you',
      'Surely anger cannot stand taller than an honest sorry forever',
    ],
  },
  {
    title: 'सच्चा अपनापन',
    titleEnglish: 'True Care Never Fades',
    linesHindi: [
      'गलती होने का यह मतलब नहीं कि प्यार कम हो गया है',
      'तुम्हारी जगह आज भी मेरे दिल में बिल्कुल वैसी ही है',
    ],
    linesHinglish: [
      'Galti hone ka yah matlab nahin ki pyaar kam ho gaya hai',
      'Tumhaari jagah aaj bhi mere dil mein bilkul waisi hi hai',
    ],
    linesEnglish: [
      'Making a mistake never means my care for you grew thin',
      'Your place inside my heart stands untouched and dear as ever',
    ],
  },
  {
    title: 'मुस्कुराता हुआ जवाब',
    titleEnglish: 'Hoping for Your Reply',
    linesHindi: [
      'सौ बार सॉरी लिखकर भेज दिया है चैट में मैंने',
      'अब एक प्यारी सी स्माइली भेजकर दिल खुश कर दो',
    ],
    linesHinglish: [
      'Sau baar sorry likhkar bhej diya hai chat mein maine',
      'Ab ek pyaari si smiley bhejkar dil khush kar do',
    ],
    linesEnglish: [
      'I have typed sorry across our messages a hundred times',
      'Send one gentle smile back now and lift this weight away',
    ],
  },
  {
    title: 'रिश्तों की परवाह',
    titleEnglish: 'Protecting Our Connection',
    linesHindi: [
      'लोग आसानी से छोड़ देते हैं गलतफ़हमी होने पर साथ',
      'पर मुझे तुम्हारे साथ हर हाल में जुड़े रहना है',
    ],
    linesHinglish: [
      'Log aasaani se chhod dete hain galatfehmi hone par saath',
      'Par mujhe tumhaare saath har haal mein jude rehna hai',
    ],
    linesEnglish: [
      'Too many people walk away easily at the first misunderstanding',
      'I want to stay standing right beside you through it all',
    ],
  },
  {
    title: 'दिल की सच्ची पुकार',
    titleEnglish: 'Calling Back Warmth',
    linesHindi: [
      'जितनी जल्दी हो सके इस चुप्पी को तोड़ दो प्लीज़',
      'तुम्हारी आवाज़ सुने बिना चैन नहीं आ रहा मुझे',
    ],
    linesHinglish: [
      'Jitni jaldi ho sake is chuppi ko tod do please',
      'Tumhaari aawaaz sune bina chain nahin aa raha mujhe',
    ],
    linesEnglish: [
      'Please break this heavy silence as soon as you can',
      'Without hearing your voice, peace refuses to settle in',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'वक़्त से बड़ा पछतावा',
    titleEnglish: 'Learning Gentle Patience',
    linesHindi: [
      'तुम्हारे बिना बीता हर एक घंटा सबक़ बन गया मेरे लिए',
      'अब कभी ऐसी नादानी दोबारा नहीं करूँगा यार',
    ],
    linesHinglish: [
      'Tumhaare bina beeta har ek ghanta sabaq ban gaya mere liye',
      'Ab kabhi aisi naadaani dobaara nahin karoonga yaar',
    ],
    linesEnglish: [
      'Every quiet hour spent without you taught me a clear lesson',
      'I will never repeat such carelessness ever again, friend',
    ],
  },
  {
    title: 'सच्चे दिल की विनती',
    titleEnglish: 'Sincere Entreaty',
    linesHindi: [
      'मुझे माफ़ करना शायद आसान न हो अभी तुम्हारे लिए',
      'पर यक़ीन मानो, मैं हर हाल में रिश्ते को बचाना चाहता हूँ',
    ],
    linesHinglish: [
      'Mujhe maaf karna shaayad aasaan na ho abhi tumhaare liye',
      'Par yaqeen maano, main har haal mein rishte ko bachaana chaahta hoon',
    ],
    linesEnglish: [
      'Forgiving me might not feel simple right away for you',
      'Still trust that my deepest wish is keeping us whole',
    ],
  },
  {
    title: 'गुस्से पर जीत',
    titleEnglish: 'Peace Over Anger',
    linesHindi: [
      'एक पल का गुस्सा कई दिनों की शांति छीन लेता है',
      'मेरी उस एक नासमझी के लिए दिल से क्षमा मांगता हूँ',
    ],
    linesHinglish: [
      'Ek pal ka gussa kai dinon ki shaanti chheen leta hai',
      'Meri us ek nasamjhi ke liye dil se kshama maangta hoon',
    ],
    linesEnglish: [
      'A single flash of temper steals days of gentle peace',
      'For my thoughtless lapse, I offer my sincerest apology',
    ],
  },
  {
    title: 'प्यार भरा इक़रार',
    titleEnglish: 'Owning the Fault',
    linesHindi: [
      'सही-ग़लत की गिनती अब बंद करते हैं यहीं पर',
      'मैं मानता हूँ चूक मेरी थी, चलो फिर से हँसते हैं',
    ],
    linesHinglish: [
      'Sahi-galat ki ginti ab band karte hain yahin par',
      'Main maanta hoon chook meri thi, chalo phir se hanste hain',
    ],
    linesEnglish: [
      'Let us stop keeping score of right and wrong right here',
      'I own that the slip was mine—come let us laugh again',
    ],
  },
  {
    title: 'आख़िरी बात नहीं',
    titleEnglish: 'Not Our Final Page',
    linesHindi: [
      'इतनी लंबी कहानी एक छोटे झगड़े पर ख़त्म नहीं हो सकती',
      'अभी तो हमें ज़िंदगी के बहुत से सुंदर दिन साथ देखने हैं',
    ],
    linesHinglish: [
      'Itni lambi kahaani ek chhote jhagde par khatam nahin ho sakti',
      'Abhi to humein zindagi ke bahut se sundar din saath dekhne hain',
    ],
    linesEnglish: [
      'A story this deep cannot end over one clumsy disagreement',
      'So many bright, lovely days still wait for us ahead',
    ],
  },
  {
    title: 'माँ-बाप से माफ़ी',
    titleEnglish: 'Respectful Apology',
    linesHindi: [
      'आपके सामने कभी ऊँची आवाज़ में नहीं बोलना चाहिए था',
      'बच्चा समझकर मेरी भूल को माफ़ कर दीजिएगा प्लीज़',
    ],
    linesHinglish: [
      'Aapke saamne kabhi oonchi aawaaz mein nahin bolna chahiye tha',
      'Baccha samajhkar meri bhool ko maaf kar dijiyega please',
    ],
    linesEnglish: [
      'I never should have raised my voice before you at all',
      'Please forgive my foolishness with your kind, patient grace',
    ],
  },
  {
    title: 'मीठी याद दिलाकर माफ़ी',
    titleEnglish: 'Holding Onto Us',
    linesHindi: [
      'तुम मेरे सबसे अच्छे राज़दार और सबसे करीब दोस्त हो',
      'खुद से दूर करके मुझे इतनी बड़ी सज़ा मत दो',
    ],
    linesHinglish: [
      'Tum mere sabse acche raazdaar aur sabse kareeb dost ho',
      'Khud se door karke mujhe itni badi saza mat do',
    ],
    linesEnglish: [
      'You remain my truest confidant and nearest friend in life',
      'Please do not punish me so harshly by pulling away',
    ],
  },
  {
    title: 'छोटी सी मुस्कान की आस',
    titleEnglish: 'Waiting on a Smile',
    linesHindi: [
      'जब तक तुम्हारी मुस्कान वापस नहीं दिखेगी मुझे',
      'तब तक हर पांच मिनट में यही सॉरी दोहराता रहूँगा',
    ],
    linesHinglish: [
      'Jab tak tumhaari muskaan waapas nahin dikhegi mujhe',
      'Tab tak har paanch minute mein yahi sorry dohrata rahoonga',
    ],
    linesEnglish: [
      'Until I see that familiar smile brighten your face again',
      'I will keep knocking softly with sorry every five minutes',
    ],
  },
  {
    title: 'नए सिरे से विश्वास',
    titleEnglish: 'Fresh Care Forward',
    linesHindi: [
      'हर इंसान को एक दूसरा मौका मिलना चाहिए जीवन में',
      'मेरा यह मौका सिर्फ़ तुम्हारी मुस्कान लौटाने के लिए होगा',
    ],
    linesHinglish: [
      'Har insaan ko ek doosra mauqa milna chahiye jeevan mein',
      'Mera yah mauqa sirf tumhaari muskaan lautaane ke liye hoga',
    ],
    linesEnglish: [
      'Everyone deserves one honest second chance when remorse is real',
      'Mine will be devoted entirely to keeping your smile bright',
    ],
  },
  {
    title: 'बिना अहंकार का प्रेम',
    titleEnglish: 'Love Without Pride',
    linesHindi: [
      'प्यार में छोटा या बड़ा होने का कोई हिसाब नहीं होता',
      'जिसकी गलती हो, उसका सिर झुकना ही स्वाभाविक है',
    ],
    linesHinglish: [
      'Pyaar mein chhota ya bada hone ka koi hisaab nahin hota',
      'Jiski galti ho, uska sir jhukna hi swaabhaavik hai',
    ],
    linesEnglish: [
      'In true love there is never a contest over status or pride',
      'Whoever slipped naturally bows their head first to mend',
    ],
  },
  {
    title: 'अनसुनी शिकायत का हल',
    titleEnglish: 'Listening Better Now',
    linesHindi: [
      'इस बार बोलने से ज़्यादा तुम्हारी बात सुनना चाहता हूँ मैं',
      'बैठो, जो भी मन में गिला है सब खुलकर कह दो आज',
    ],
    linesHinglish: [
      'Is baar bolne se zyada tumhaari baat sunna chaahta hoon main',
      'Baitho, jo bhi man mein gila hai sab khulkar keh do aaj',
    ],
    linesEnglish: [
      'This time I want to listen twice as much as I speak',
      'Sit down and let out every frustration inside openly today',
    ],
  },
  {
    title: 'धूप में छाँव सा साथ',
    titleEnglish: 'Rebuilding Warm Shade',
    linesHindi: [
      'तुम्हारी नाराज़गी ने एहसास दिलाया कि कितने ज़रूरी हो तुम',
      'अब कभी जाने-अनजाने भी तुम्हें ठेस नहीं पहुँचने दूँगा',
    ],
    linesHinglish: [
      'Tumhaari naaraazgi ne ehsaas dilaaya ki kitne zaroori ho tum',
      'Ab kabhi jaane-anjaane bhi tumhein thes nahin pahunchne doonga',
    ],
    linesEnglish: [
      'Seeing you hurt taught me just how vital you are in my life',
      'Never again will I allow careless words to touch your heart',
    ],
  },
  {
    title: 'साफ़ शब्दों में सॉरी',
    titleEnglish: 'Plain Words, Full Heart',
    linesHindi: [
      'घुमा-फिराकर बड़ी बातें लिखना नहीं आता मुझे दोस्त',
      'सीधी सी बात है कि मुझे अपनी गलती पर बहुत अफ़सोस है',
    ],
    linesHinglish: [
      'Ghuma-phiraakar badi baatein likhna nahin aata mujhe dost',
      'Seedhi si baat hai ki mujhe apni galti par bahut afsos hai',
    ],
    linesEnglish: [
      'I do not know how to dress up fancy excuses, friend',
      'Simply put, I deeply regret hurting you and am truly sorry',
    ],
  },
  {
    title: 'माफ़ी का फूल',
    titleEnglish: 'Flower of Peace',
    linesHindi: [
      'यह एक गुलाब और हज़ारों दुआएँ लेकर खड़ा हूँ बाहर',
      'अब दरवाज़ा खोल भी दो और गले लगा लो यार',
    ],
    linesHinglish: [
      'Yah ek gulaab aur hazaaron duaayein lekar khada hoon baahar',
      'Ab darwaaza khol bhi do aur gale laga lo yaar',
    ],
    linesEnglish: [
      'Standing outside holding one fresh rose and a thousand wishes',
      'Open the door now and let me hug this truce tight',
    ],
  },
  {
    title: 'अधूरे दिन को पूरा करो',
    titleEnglish: 'Make Today Whole Again',
    linesHindi: [
      'सुबह से दिल पर एक भारी सा पत्थर रखा हुआ है मेरे',
      'तुम माफ़ कर दो तो सीना बिल्कुल हल्का हो जाए',
    ],
    linesHinglish: [
      'Subah se dil par ek bhaari sa patthar rakha hua hai mere',
      'Tum maaf kar do to seena bilkul halka ho jaaye',
    ],
    linesEnglish: [
      'A heavy stone has sat across my chest ever since morning',
      'One forgiving nod from you will lift it clean away',
    ],
  },
  {
    title: 'हर हाल में तुम्हारे साथ',
    titleEnglish: 'Standing Through Flaws',
    linesHindi: [
      'इंसान ग़लतियों का पुतला है, पर रिश्ते तो सच्चे हैं',
      'चलो अपनी भूलों को सुधारकर फिर से एक साथ चलते हैं',
    ],
    linesHinglish: [
      'Insaan galtiyon ka putla hai, par rishte to sacche hain',
      'Chalo apni bhoolon ko sudhaarkar phir se ek saath chalte hain',
    ],
    linesEnglish: [
      'Humans are flawed by nature, yet real bonds stay sacred',
      'Let us mend our missteps and walk forward side by side',
    ],
  },
  {
    title: 'दिल दुखाने की माफ़ी',
    titleEnglish: 'Regretting Every Tear',
    linesHindi: [
      'मेरी वजह से अगर एक बूँद भी आँसू गिरा हो आँख से',
      'तो उम्र भर उसका अफ़सोस मेरे दिल में रहेगा दोस्त',
    ],
    linesHinglish: [
      'Meri wajah se agar ek boond bhi aansu gira ho aankh se',
      'To umar bhar uska afsos mere dil mein rahega dost',
    ],
    linesEnglish: [
      'If even a single tear fell from your eyes because of me',
      'Regret for that moment will ache inside me forever, friend',
    ],
  },
  {
    title: 'हल्का सा इशारा',
    titleEnglish: 'Just One Small Sign',
    linesHindi: [
      'अभी भी गुस्सा हो तो ठीक है, पर ब्लॉक तो मत करो न',
      'कम से कम मेरी हर रोज़ की माफ़ी पढ़ तो लिया करो',
    ],
    linesHinglish: [
      'Abhi bhi gussa ho to theek hai, par block to mat karo na',
      'Kam se kam meri har roz ki maafi padh to liya karo',
    ],
    linesEnglish: [
      'Stay upset a bit longer if you must, just keep the door cracked',
      'At least let my daily apologies reach across to your screen',
    ],
  },
  {
    title: 'सुकून लौटाने की उम्मीद',
    titleEnglish: 'Hoping for Peace Back',
    linesHindi: [
      'हवाएँ फिर से खुशनुमा हो जाएँगी हमारे आँगन की',
      'बस तुम एक बार मुस्कुराकर कह दो कि सब ठीक है',
    ],
    linesHinglish: [
      'Hawaayein phir se khushnuma ho jaayengi hamaare aangan ki',
      'Bas tum ek baar muskurakar keh do ki sab theek hai',
    ],
    linesEnglish: [
      'Warm breezes will sweep right back across our shared days',
      'As soon as you smile once and whisper that all is okay',
    ],
  },
  {
    title: 'माफ़ी का सबसे प्यारा रूप',
    titleEnglish: 'Gentle Change Ahead',
    linesHindi: [
      'सबसे अच्छी माफ़ी वही होती है जो बदलाव दिखाए',
      'मैं कल से बिल्कुल नए और बेहतर रूप में मिलूँगा तुम्हें',
    ],
    linesHinglish: [
      'Sabse acchi maafi wahi hoti hai jo badlaav dikhaaye',
      'Main kal se bilkul naye aur behtar roop mein miloonga tumhein',
    ],
    linesEnglish: [
      'The truest apology of all shines through real change',
      'Starting tomorrow, you will meet a calmer, kinder me',
    ],
  },
  // Block 5 (81-98)
  {
    title: 'रिश्तों की गरमाहट',
    titleEnglish: 'Warmth Over Frost',
    linesHindi: [
      'इतनी ठंडी ख़ामोशी हमारे बीच अच्छी नहीं लगती यार',
      'आओ अपने पुराने अपनेपन की धूप फिर से जगाते हैं',
    ],
    linesHinglish: [
      'Itni thandi khaamoshi hamaare beech acchi nahin lagti yaar',
      'Aao apne purane apnapan ki dhoop phir se jagaate hain',
    ],
    linesEnglish: [
      'This icy silence between us suits neither of our hearts',
      'Let us bring back the warm sunlight of how close we are',
    ],
  },
  {
    title: 'सच्ची भावना की कद्र',
    titleEnglish: 'Heart Laid Bare',
    linesHindi: [
      'शब्द कम पड़ रहे हैं अपनी गलती बयाँ करने के लिए',
      'पर उम्मीद है कि मेरी नीयत तुम साफ़ पढ़ पा रहे हो',
    ],
    linesHinglish: [
      'Shabd kam pad rahe hain apni galti bayaan karne ke liye',
      'Par ummeed hai ki meri neeyat tum saaf padh paa rahe ho',
    ],
    linesEnglish: [
      'Words fall short trying to capture how sorry I truly feel',
      'Yet I hope you can clearly read the honesty in my heart',
    ],
  },
  {
    title: 'ग़लतफ़हमी से ऊपर प्यार',
    titleEnglish: 'Care Above Confusion',
    linesHindi: [
      'कुछ बातें बिना बात किए और ज़्यादा उलझ जाती हैं',
      'एक बार आमने-सामने बैठकर सब ठीक कर लें न',
    ],
    linesHinglish: [
      'Kuch baatein bina baat kiye aur zyada ulajh jaati hain',
      'Ek baar aamne-saamne baithkar sab theek kar lein na',
    ],
    linesEnglish: [
      'Unspoken worries only tangle tighter when left unshared',
      'Let us sit down across each other and smooth it all out',
    ],
  },
  {
    title: 'नाराज़ दोस्त को मनाना',
    titleEnglish: 'Winning Back My Friend',
    linesHindi: [
      'तेरे बिना ग्रुप की हर महफ़िल बिल्कुल सूनी पड़ी है',
      'मान जा पगले, तुझ बिन कोई मज़ा ही नहीं आता',
    ],
    linesHinglish: [
      'Tere bina group ki har mehfil bilkul sooni padi hai',
      'Maan ja pagle, tujh bin koi maza hi nahin aata',
    ],
    linesEnglish: [
      'Without you around, our whole circle feels half-empty',
      'Come back now silly friend—nothing feels fun without you',
    ],
  },
  {
    title: 'दिल की सलामती',
    titleEnglish: 'Guarding Your Peace',
    linesHindi: [
      'तुम्हारी ख़ुशी हमेशा मेरी पहली प्राथमिकता रही है',
      'उसी खुशी को ठेस लगाने के लिए बार-बार माफ़ी मांगता हूँ',
    ],
    linesHinglish: [
      'Tumhaari khushi hamesha meri pehli praathmikta rahi hai',
      'Usi khushi ko thes lagaane ke liye baar-baar maafi maangta hoon',
    ],
    linesEnglish: [
      'Your happiness has always stood as my very first care',
      'For hurting that peace even briefly, I ask forgiveness again',
    ],
  },
  {
    title: 'अधूरी बात की माफ़ी',
    titleEnglish: 'Filling Unspoken Gaps',
    linesHindi: [
      'व्यस्तता के बहाने मैंने तुम्हें कम वक़्त दिया इधर',
      'इस लापरवाही के लिए आज तहेदिल से माफ़ी मांगता हूँ',
    ],
    linesHinglish: [
      'Vyastata ke bahaane maine tumhein kam waqt diya idhar',
      'Is laaparwaahi ke liye aaj tahedil se maafi maangta hoon',
    ],
    linesEnglish: [
      'Hiding behind busy schedules, I gave you too little time lately',
      'For that thoughtless neglect, I apologize from the heart',
    ],
  },
  {
    title: 'सच्चे दिल की स्वीकारोक्ति',
    titleEnglish: 'Humble Admission',
    linesHindi: [
      'अपनी भूल स्वीकार करना कमज़ोरी नहीं, समझदारी है',
      'मैं सिर झुकाकर अपनी हर चूक की माफ़ी चाहता हूँ',
    ],
    linesHinglish: [
      'Apni bhool sweekar karna kamzori nahin, samajhdaari hai',
      'Main sir jhukakar apni har chook ki maafi chaahta hoon',
    ],
    linesEnglish: [
      'Admitting where you went wrong is wisdom, never weakness',
      'With a humbled heart, I ask pardon for every misstep',
    ],
  },
  {
    title: 'बिना शर्त प्यार',
    titleEnglish: 'Standing Right Here',
    linesHindi: [
      'तुम चाहो तो दो दिन और चुप रह लो मुझसे अभी',
      'मैं यहीं इंतज़ार में खड़ा मिलूँगा जब तक तुम न मानो',
    ],
    linesHinglish: [
      'Tum chaaho to do din aur chup reh lo mujhse abhi',
      'Main yahin intezaar mein khada miloonga jab tak tum na maano',
    ],
    linesEnglish: [
      'Take another couple of quiet days if your heart needs space',
      'I will still be waiting warmly right here until you smile again',
    ],
  },
  {
    title: 'मुस्कान वापस लाने का वादा',
    titleEnglish: 'Restoring Your Joy',
    linesHindi: [
      'जितना उदास किया है मैंने तुम्हें अपनी एक भूल से',
      'उससे दुगनी खुशियाँ लौटाऊँगा वादा है तुमसे',
    ],
    linesHinglish: [
      'Jitna udaas kiya hai maine tumhein apni ek bhool se',
      'Usse dugni khushiyan lautaoonga waada hai tumse',
    ],
    linesEnglish: [
      'As much sorrow as my one stumble brought upon you',
      'I promise to return twice as much joy into your days',
    ],
  },
  {
    title: 'पुराना यार वापस चाहिए',
    titleEnglish: 'Wanting Us Back',
    linesHindi: [
      'मुझे वही हँसता-खेलता पुराना रिश्ता वापस चाहिए अपना',
      'नाराज़गी की इस दीवार को आज ही गिरा देते हैं न',
    ],
    linesHinglish: [
      'Mujhe wahi hansta-khelta purana rishta waapas chahiye apna',
      'Naaraazgi ki is deewar ko aaj hi gira dete hain na',
    ],
    linesEnglish: [
      'I simply want our easy, laughing old closeness back again',
      'Let us pull down this stiff wall of anger today',
    ],
  },
  {
    title: 'ख़ुद पर गुस्सा',
    titleEnglish: 'Disappointed in Myself',
    linesHindi: [
      'तुमसे ज़्यादा मुझे खुद पर गुस्सा आ रहा है आज',
      'कि मैंने अपने ही हाथों इतना प्यारा पल बिगाड़ दिया',
    ],
    linesHinglish: [
      'Tumse zyada mujhe khud par gussa aa raha hai aaj',
      'Ki maine apne hi haathon itna pyaara pal bigaad diya',
    ],
    linesEnglish: [
      'Far more than anyone else, I am angry with myself today',
      'For spoiling such a warm moment with my own careless hands',
    ],
  },
  {
    title: 'सुलह की मधुर चाय',
    titleEnglish: 'Truce Over Evening Tea',
    linesHindi: [
      'झगड़ा अपनी जगह, पर शाम की चाय का वक्त हो गया है',
      'चलो पाँच मिनट के लिए ही सही, गुस्सा किनारे रख दो',
    ],
    linesHinglish: [
      'Jhagda apni jagah, par shaam ki chai ka waqt ho gaya hai',
      'Chalo paanch minute ke liye hi sahi, gussa kinaare rakh do',
    ],
    linesEnglish: [
      'Arguments aside, it is already time for evening tea',
      'Even if just for five minutes, set the frown gently down',
    ],
  },
  {
    title: 'दिल की सच्ची दुआ',
    titleEnglish: 'Wishing You Peace',
    linesHindi: [
      'अगर सच में अब भी बात करने का मन न हो तुम्हारा',
      'तो बस दिल से दुआ है कि तुम जहाँ रहो, खुश रहो',
    ],
    linesHinglish: [
      'Agar sach mein ab bhi baat karne ka man na ho tumhaara',
      'To bas dil se dua hai ki tum jahaan raho, khush raho',
    ],
    linesEnglish: [
      'If your heart truly still feels unwilling to speak just yet',
      'My sincere wish remains that wherever you are, peace surrounds you',
    ],
  },
  {
    title: 'भूलने की दरख़्वास्त',
    titleEnglish: 'Asking to Move Past',
    linesHindi: [
      'बुरे पल को पकड़कर बैठे रहने से दर्द ही बढ़ता है',
      'दिल से माफ़ कर दो ताकि हम दोनों चैन से रह सकें',
    ],
    linesHinglish: [
      'Bure pal ko pakadkar baithe rehne se dard hi badhta hai',
      'Dil se maaf kar do taaki hum dono chain se reh sakein',
    ],
    linesEnglish: [
      'Clinging tight to an ugly hour only keeps the ache alive',
      'Forgive me warmly so both our hearts can breathe easy again',
    ],
  },
  {
    title: 'मेरी आखिरी गुज़ारिश',
    titleEnglish: 'One Last Plea',
    linesHindi: [
      'दुनिया की भीड़ में अपने बहुत कम मिलते हैं यार',
      'छोटी बात के पीछे एक सच्चा साथ मत खोने देना',
    ],
    linesHinglish: [
      'Duniya ki bheed mein apne bahut kam milte hain yaar',
      'Chhoti baat ke peeche ek saccha saath mat khone dena',
    ],
    linesEnglish: [
      'Truly loyal people are rare enough in this crowded world',
      'Never lose a genuine bond over one clumsy disagreement',
    ],
  },
  {
    title: 'माफ़ी का मीठा एहसास',
    titleEnglish: 'Warmth After Forgiveness',
    linesHindi: [
      'जब तुम माफ़ करके हल्का सा मुस्कुरा देते हो न',
      'तो सारा आसमान पहले से ज़्यादा नीला लगने लगता है',
    ],
    linesHinglish: [
      'Jab tum maaf karke halka sa muskura dete ho na',
      'To saara aasmaan pehle se zyada neela lagne lagta hai',
    ],
    linesEnglish: [
      'When you forgive softly and give that slight warm smile',
      'The entire sky outside turns twice as clear and blue',
    ],
  },
  {
    title: 'सदा तुम्हारा अपना',
    titleEnglish: 'Always Yours Sincerely',
    linesHindi: [
      'गलतियाँ भले हो जाएँ मुझसे कभी-कभार अनजाने में',
      'पर दिल के सबसे साफ कोने में सिर्फ़ तुम्हारा ही नाम है',
    ],
    linesHinglish: [
      'Galtiyan bhale ho jaayein mujhse kabhi-kabhaar anjaane mein',
      'Par dil ke sabse saaf kone mein sirf tumhaara hi naam hai',
    ],
    linesEnglish: [
      'Though clumsy errors may slip out from me once in a while',
      'Inside the purest corner of my heart lives only care for you',
    ],
  },
  {
    title: 'दिल से क्षमा याचना',
    titleEnglish: 'Truly Sorry From Inside',
    linesHindi: [
      'हाथों की उंगलियाँ जोड़कर आज सिर्फ़ इतना कहता हूँ',
      'दिल से सॉरी यार, अब मुस्कुरा दो और गले लगा लो',
    ],
    linesHinglish: [
      'Haathon ki ungliyan jodkar aaj sirf itna kehta hoon',
      'Dil se sorry yaar, ab muskura do aur gale laga lo',
    ],
    linesEnglish: [
      'With folded hands and full honesty, I ask just this today',
      'Deeply sorry my dear—smile now and bring our peace back home',
    ],
  },
];

export const UNIQUE_SORRY_98 = buildUniqueShayaris(
  'sorry',
  'Sorry Shayari (माफी शायरी)',
  '🙏',
  103,
  SORRY_ENTRIES
);
