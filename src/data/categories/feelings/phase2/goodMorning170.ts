import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const GOOD_MORNING_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'सुनहरी सुबह का सलाम',
    titleEnglish: 'Golden Morning Greeting',
    linesHindi: [
      'सूरज की पहली किरण के साथ एक मीठी दुआ भेजी है आपको',
      'आपका पूरा दिन खुशियों, ताज़गी और सुकून से भरा रहे आज',
    ],
    linesHinglish: [
      'Sooraj ki pehli kiran ke saath ek meethi dua bheji hai aapko',
      'Aapka poora din khushiyon, taazgi aur sukoon se bhara rahe aaj',
    ],
    linesEnglish: [
      'With the very first golden ray of dawn, I send a warm wish to you',
      'May your entire day unfold full of freshness, joy, and calm peace',
    ],
  },
  {
    title: 'चाय की चुस्की और ताज़गी',
    titleEnglish: 'Morning Chai Refreshment',
    linesHindi: [
      'सुबह की गरम चाय और चेहरे की हल्की सी मुस्कान काफी है',
      'हर कठिन काम को आसान बना देने के लिए यही शुरुआत काफी है',
    ],
    linesHinglish: [
      'Subah ki garam chai aur chehre ki halki si muskaan kaafi hai',
      'Har kathin kaam ko aasaan bana dene ke liye yahi shuruaat kaafi hai',
    ],
    linesEnglish: [
      'A warm cup of morning tea and a gentle smile are plenty',
      'Starting like that turns even the busiest schedule surprisingly smooth',
    ],
  },
  {
    title: 'नए दिन का तोहफ़ा',
    titleEnglish: 'Gift of a New Day',
    linesHindi: [
      'हर सुबह ईश्वर की तरफ़ से मिला एक नया खाली पन्ना होती है',
      'आज इस पर मुस्कुराहट और नेकी की सबसे सुंदर कहानी लिखिए',
    ],
    linesHinglish: [
      'Har subah Ishwar ki taraf se mila ek naya khaali panna hoti hai',
      'Aaj is par muskurahat aur neki ki sabse sundar kahaani likhiye',
    ],
    linesEnglish: [
      'Every morning arrives as a fresh blank page gifted straight from above',
      'Write a beautiful story of kindness and bright smiles across today',
    ],
  },
  {
    title: 'ओस की बूँदें',
    titleEnglish: 'Morning Dewdrops',
    linesHindi: [
      'फूलों पर सजी ओस की बूँदें बस यही पैगाम देती हैं हर रोज़',
      'चाहे रात कितनी भी लंबी रही हो, सुबह हमेशा उम्मीद जगाती है',
    ],
    linesHinglish: [
      'Phoolon par saji os ki boondein bas yahi paigaam deti hain har roz',
      'Chaahe raat kitni bhi lambi rahi ho, subah hamesha ummeed jagaati hai',
    ],
    linesEnglish: [
      'Sparkling dewdrops resting on petals whisper one quiet truth each dawn',
      'No matter how long the night felt, morning always wakes fresh hope',
    ],
  },
  {
    title: 'मुस्कान के साथ शुरुआत',
    titleEnglish: 'Start With a Smile',
    linesHindi: [
      'आईने के सामने खड़े होकर आज ख़ुद से प्यारा वादा कीजिए',
      'बिना किसी बोझ के हँसते हुए नए दिन का स्वागत कीजिए',
    ],
    linesHinglish: [
      'Aaine ke saamne khade hokar aaj khud se pyaara waada kijiye',
      'Bina kisi bojh ke hanste hue naye din ka swaagat kijiye',
    ],
    linesEnglish: [
      'Stand in front of the mirror this morning and make one kind promise',
      'Greet this brand-new day smiling lightly without carrying old weight',
    ],
  },
  {
    title: 'पंछियों के संग सुप्रभात',
    titleEnglish: 'Morning Birdsong',
    linesHindi: [
      'ताज़ी हवा और चिड़ियों का मीठा संगीत जगाने आया है आपको',
      'आलस्य छोड़िए, बाहर एक खुशनुमा दिन आपका इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Taazi hawa aur chidiyon ka meetha sangeet jagaane aaya hai aapko',
      'Aalasya chhodiye, baahar ek khushnuma din aapka intezaar kar raha hai',
    ],
    linesEnglish: [
      'Crisp morning air and sweet birdsong are outside waiting to wake you',
      'Step out warmly—a bright, cheerful day is already ready for you',
    ],
  },
  {
    title: 'मन की शांति वाली सुबह',
    titleEnglish: 'Peaceful Mind Dawn',
    linesHindi: [
      'सफलता की सबसे सुंदर सीढ़ी शांत और खुश मन से शुरू होती है',
      'सुबह की पहली साँस के साथ सारी चिंताएँ पीछे छोड़ दीजिए',
    ],
    linesHinglish: [
      'Safalta ki sabse sundar seedhi shaant aur khush man se shuru hoti hai',
      'Subah ki pehli saans ke saath saari chintaayein peechhe chhod dijiye',
    ],
    linesEnglish: [
      'Every meaningful triumph begins with a calm and cheerful heart',
      'With your first deep morning breath, leave yesterday’s worries behind',
    ],
  },
  {
    title: 'सकारात्मक सोच का उजाला',
    titleEnglish: 'Positive Morning Glow',
    linesHindi: [
      'एक छोटा सा अच्छा विचार पूरे दिन की दिशा बदल सकता है',
      'आज का हर क़दम पूरे आत्मविश्वास और ख़ुशी के साथ बढ़ाइए',
    ],
    linesHinglish: [
      'Ek chhota sa accha vichaar poore din ki disha badal sakta hai',
      'Aaj ka har qadam poore aatmvishwas aur khushi ke saath badhaaiye',
    ],
    linesEnglish: [
      'One gentle, hopeful thought can brighten the entire course of your day',
      'Take every step today filled with quiet confidence and warm energy',
    ],
  },
  {
    title: 'दिल से शुभ प्रभात',
    titleEnglish: 'Heartfelt Good Morning',
    linesHindi: [
      'रिश्ते अनमोल होते हैं और सुबह की याद उन्हें और निखारती है',
      'दिल की गहराई से आपको और आपके परिवार को प्यारा शुभ प्रभात',
    ],
    linesHinglish: [
      'Rishte anmol hote hain aur subah ki yaad unhein aur nikhaarti hai',
      'Dil ki gehraai se aapko aur aapke parivaar ko pyaara shubh prabhaat',
    ],
    linesEnglish: [
      'Cherished bonds shine even brighter when remembered early in the day',
      'From the bottom of my heart, a very warm good morning to you and yours',
    ],
  },
  {
    title: 'नया हौसला हर भोर',
    titleEnglish: 'Fresh Courage Every Dawn',
    linesHindi: [
      'कल चाहे जितनी थकान रही हो, आज फिर से शुरुआत कीजिए',
      'हर नई भोर इंसान को दोबारा चमकने का एक मौका ज़रूर देती है',
    ],
    linesHinglish: [
      'Kal chaahe jitni thakaan rahi ho, aaj phir se shuruaat kijiye',
      'Har nayi bhor insaan ko dobaara chamakne ka ek mauka zaroor deti hai',
    ],
    linesEnglish: [
      'No matter how tiring yesterday felt, begin gently again today',
      'Every single sunrise hands you a fresh chance to shine brightly',
    ],
  },
  {
    title: 'फूलों सी महकती सुबह',
    titleEnglish: 'Fragrant Morning',
    linesHindi: [
      'बाग़ों में खिलते फूलों जैसी ताज़गी आज आपके मन में रहे',
      'हर मिलने वाला इंसान आपकी प्यारी मुस्कान देखकर खुश हो जाए',
    ],
    linesHinglish: [
      'Baagon mein khilte phoolon jaisi taazgi aaj aapke man mein rahe',
      'Har milne waala insaan aapki pyaari muskaan dekhkar khush ho jaaye',
    ],
    linesEnglish: [
      'May the crisp freshness of blooming garden flowers fill your spirit',
      'And may everyone you meet today brighten at your warm smile',
    ],
  },
  {
    title: 'मेहनत और दुआ का संगम',
    titleEnglish: 'Effort Meets Grace',
    linesHindi: [
      'सच्ची लगन और अपनों की दुआ साथ हो तो रास्ते खुल ही जाते हैं',
      'आज भी पूरे जोश से निकलिए, कामयाबी कदम चूमने को तैयार है',
    ],
    linesHinglish: [
      'Sacchi lagan aur apnon ki dua saath ho to raaste khul hi jaate hain',
      'Aaj bhi poore josh se nikliye, kaamyaabi qadam choomne ko taiyaar hai',
    ],
    linesEnglish: [
      'When steady effort walks hand in hand with blessings, doors open wide',
      'Step out with bright focus today—good results are waiting ahead',
    ],
  },
  {
    title: 'खिड़की पर सुबह की ठंडी बयार',
    titleEnglish: 'Fresh Morning Breeze',
    linesHindi: [
      'खिड़की खोलिए और सुबह की ठंडी हवा को भीतर आने दीजिए',
      'नई उम्मीदों के साथ इस सुंदर दिन को अपना बना लीजिए',
    ],
    linesHinglish: [
      'Khidki kholiye aur subah ki thandi hawa ko bheetar aane dijiye',
      'Nayi ummeedon ke saath is sundar din ko apna bana lijiye',
    ],
    linesEnglish: [
      'Open your window wide and welcome the cool morning breeze inside',
      'With bright hopes in your pocket, make this lovely day yours',
    ],
  },
  {
    title: 'मीठी याद का संदेश',
    titleEnglish: 'Sweet Morning Note',
    linesHindi: [
      'सुबह-सुबह अपनों को याद करना सबसे प्यारी आदत होती है',
      'ताकि दूर रहकर भी दिलों के बीच की मिठास कम न हो कभी',
    ],
    linesHinglish: [
      'Subah-subah apnon ko yaad karna sabse pyaari aadat hoti hai',
      'Taaki door rehkar bhi dilon ke beech ki mithaas kam na ho kabhi',
    ],
    linesEnglish: [
      'Remembering dear ones early in the morning is such a sweet ritual',
      'Even across miles, the warmth between hearts stays fresh and close',
    ],
  },
  {
    title: 'उत्साह से भरा सवेरा',
    titleEnglish: 'Energetic Sunrise',
    linesHindi: [
      'जब इरादे नेक हों और दिल साफ़ हो तो हर दिन त्योहार है',
      'उठिए और अपनी मेहनत से आज के दिन को यादगार बनाइए',
    ],
    linesHinglish: [
      'Jab iraade nek hon aur dil saaf ho to har din tyohaar hai',
      'Uthiye aur apni mehnat se aaj ke din ko yaadgaar banaaiye',
    ],
    linesEnglish: [
      'When intentions are kind and your heart is clear, every morning feels festive',
      'Rise up steadily and turn today into a day worth remembering',
    ],
  },
  {
    title: 'दिल की गहराई से दुआ',
    titleEnglish: 'Morning Prayer for You',
    linesHindi: [
      'ईश्वर करे आज हर राह पर आपको अच्छे लोग और नेक सलाह मिलें',
      'स्वास्थ्य उत्तम रहे और घर में हमेशा हँसी गूँजती रहे',
    ],
    linesHinglish: [
      'Ishwar kare aaj har raah par aapko acche log aur nek salaah milein',
      'Swaasthya uttam rahe aur ghar mein hamesha hansi goonjti rahe',
    ],
    linesEnglish: [
      'May today bring kind company and wise moments at every turn',
      'May good health stay with you and laughter echo warmly at home',
    ],
  },
  {
    title: 'छोटी खुशियाँ आज की',
    titleEnglish: 'Small Joys Today',
    linesHindi: [
      'किसी बड़ी चमत्कारी बात का इंतज़ार मत कीजिए खुश होने को',
      'सुबह की धूप और अपनों की आवाज़ ही सबसे बड़ा वरदान है',
    ],
    linesHinglish: [
      'Kisi badi chamatkaari baat ka intezaar mat kijiye khush hone ko',
      'Subah ki dhoop aur apnon ki aawaaz hi sabse bada vardaan hai',
    ],
    linesEnglish: [
      'Never wait around for some dramatic miracle just to smile today',
      'Morning sunshine and the voices of loved ones are already magic enough',
    ],
  },
  {
    title: 'नए सपनों का स्वागत',
    titleEnglish: 'Welcoming New Dreams',
    linesHindi: [
      'रात के अंधेरे ने जो ख्वाब आँखों में सजाए थे चुपके से',
      'आज की सुनहरी सुबह उन्हें सच करने का समय लेकर आई है',
    ],
    linesHinglish: [
      'Raat ke andhere ne jo khwaab aankhon mein sajaaye the chupke se',
      'Aaj ki sunahri subah unhein sach karne ka samay lekar aayi hai',
    ],
    linesEnglish: [
      'The hopeful dreams planted quietly while you rested overnight',
      'Have woken up alongside this golden dawn ready to come true',
    ],
  },
  {
    title: 'सुकून भरा नमस्कार',
    titleEnglish: 'Peaceful Good Morning',
    linesHindi: [
      'भागदौड़ भरी दुनिया में भी थोड़ा ठहरकर मुस्कुराना ज़रूरी है',
      'आपको प्यार भरा नमस्कार, आपका आज का हर पल शुभ हो',
    ],
    linesHinglish: [
      'Bhaagdaud bhari duniya mein bhi thoda theharkar muskuraana zaroori hai',
      'Aapko pyaar bhara namaskaar, aapka aaj ka har pal shubh ho',
    ],
    linesEnglish: [
      'Even inside a fast-spinning world, pausing once to smile matters deeply',
      'Sending warm morning greetings—may every hour ahead treat you kindly',
    ],
  },
  {
    title: 'उजले मन का सवेरा',
    titleEnglish: 'Bright Heart Dawn',
    linesHindi: [
      'नाराज़गियाँ कल की वहीं सोती छोड़ आइए बिस्तर के पास',
      'आज नई ऊर्जा और हल्के मन के साथ कदम रखिए बाहर',
    ],
    linesHinglish: [
      'Naaraazgiyaan kal ki waheen soti chhod aaiye bistar ke paas',
      'Aaj nayi oorja aur halke man ke saath qadam rakhiye baahar',
    ],
    linesEnglish: [
      'Leave yesterday’s little frustrations asleep right beside the pillow',
      'Step outside today carrying fresh energy and a light, clear heart',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'आशा की किरण',
    titleEnglish: 'Ray of Morning Hope',
    linesHindi: [
      'हर सुबह आसमान हमें सिखाता है कि अंधेरा हमेशा नहीं रहता',
      'हौसला बनाए रखिए, आज का दिन आपके लिए बहुत खास होगा',
    ],
    linesHinglish: [
      'Har subah aasmaan humein sikhaata hai ki andhera hamesha nahin rehta',
      'Hausla banaaye rakhiye, aaj ka din aapke liye bahut khaas hoga',
    ],
    linesEnglish: [
      'Every morning sky reminds us gently that darkness never stays forever',
      'Keep your chin up—today holds something wonderfully kind for you',
    ],
  },
  {
    title: 'सूरज की मुस्कान',
    titleEnglish: 'Smiling Sun',
    linesHindi: [
      'देखिए पूर्व दिशा में सूरज भी मुस्कुराते हुए निकल आया है',
      'आप भी प्यारी सी हँसी के साथ आज की शुरुआत कर दीजिए',
    ],
    linesHinglish: [
      'Dekhiye poorv disha mein sooraj bhi muskuraate hue nikal aaya hai',
      'Aap bhi pyaari si hansi ke saath aaj ki shuruaat kar dijiye',
    ],
    linesEnglish: [
      'Look east—the morning sun has already risen with a golden grin',
      'Match it with your own bright smile as your day gets moving',
    ],
  },
  {
    title: 'प्यार और शांति की सुबह',
    titleEnglish: 'Love and Calm Morning',
    linesHindi: [
      'घर के आँगन में सुख-शांति और दिलों में अपनापन बना रहे',
      'यही मंगलकामना लेकर यह प्यारा गुड मॉर्निंग संदेश भेजा है',
    ],
    linesHinglish: [
      'Ghar ke aangan mein sukh-shaanti aur dilon mein apnaapan bana rahe',
      'Yahi mangalkaamna lekar ye pyaara good morning sandesh bheja hai',
    ],
    linesEnglish: [
      'May peace bless your courtyard and affection warm every heart at home',
      'I send this morning note carrying those exact good wishes for you',
    ],
  },
  {
    title: 'ताज़गी भरी भोर',
    titleEnglish: 'Crisp Early Dawn',
    linesHindi: [
      'सुबह का पहला घंटा पूरे दिन की लय तय कर देता है हमेशा',
      'इसे शांति, धन्यवाद और एक मुस्कान के साथ शुरू कीजिए आज',
    ],
    linesHinglish: [
      'Subah ka pehla ghanta poore din ki lay tay kar deta hai hamesha',
      'Ise shaanti, dhanyavaad aur ek muskaan ke saath shuru kijiye aaj',
    ],
    linesEnglish: [
      'The first quiet hour of dawn sets the gentle rhythm for the whole day',
      'Begin it with gratitude, stillness, and an unhurried smile today',
    ],
  },
  {
    title: 'दिल की खुशी का मंत्र',
    titleEnglish: 'Morning Mantra for Joy',
    linesHindi: [
      'कम उम्मीदें और ज़्यादा शुक्राना ही सुखी सुबह का राज़ है',
      'जो मिला है उसका मान रखिए, दिन अपने आप सुंदर हो जाएगा',
    ],
    linesHinglish: [
      'Kam ummeedein aur zyada shukraana hi sukhi subah ka raaz hai',
      'Jo mila hai uska maan rakhiye, din apne aap sundar ho jaayega',
    ],
    linesEnglish: [
      'Fewer demands and deeper gratitude hold the secret to joyful mornings',
      'Cherish what stands right in front of you, and the day turns luminous',
    ],
  },
  {
    title: 'सपनों को पंख देने का समय',
    titleEnglish: 'Time to Chase Dreams',
    linesHindi: [
      'ख्वाब रात की नींद में दिखते हैं पर पूरे दिन की मेहनत से होते हैं',
      'उठिए, आज का दिन आपके बड़े लक्ष्यों के और करीब ले जाएगा',
    ],
    linesHinglish: [
      'Khwaab raat ki neend mein dikhte hain par poore din ki mehnat se hote hain',
      'Uthiye, aaj ka din aapke bade lakshyon ke aur kareeb le jaayega',
    ],
    linesEnglish: [
      'Dreams appear in quiet sleep, yet come alive through steady daylight work',
      'Rise smoothly—today moves you one step closer to everything you want',
    ],
  },
  {
    title: 'शुभ संकल्प',
    titleEnglish: 'Morning Intention',
    linesHindi: [
      'आज मन में यह ठान लीजिए कि किसी का दिल नहीं दुखाना है',
      'मीठी वाणी और अच्छे कर्मों से हर जगह खुशबू फैलानी है',
    ],
    linesHinglish: [
      'Aaj man mein ye thaan lijiye ki kisi ka dil nahin dukhaana hai',
      'Meethi waani aur acche karmon se har jagah khushboo phailaani hai',
    ],
    linesEnglish: [
      'Make one quiet morning vow today to bring ease wherever you walk',
      'Spread warmth through gentle words and honest deeds all day long',
    ],
  },
  {
    title: 'मित्रों के नाम सुबह',
    titleEnglish: 'Good Morning Friends',
    linesHindi: [
      'अच्छे दोस्तों की याद सुबह-सुबह मन को तरोताज़ा कर देती है',
      'तुम सबकी हँसी सलामत रहे, यही दुआ हर भोर निकलती है',
    ],
    linesHinglish: [
      'Acche doston ki yaad subah-subah man ko tarotaaza kar deti hai',
      'Tum sabki hansi salaamat rahe, yahi dua har bhor nikalti hai',
    ],
    linesEnglish: [
      'Thinking of good friends early in the day refreshes the soul instantly',
      'May your laughter stay safe and loud—that is my wish every sunrise',
    ],
  },
  {
    title: 'बीते कल से आगे उजला आज',
    titleEnglish: 'Shining Present Day',
    linesHindi: [
      'बीते कल को बदलने की चाबी किसी के पास नहीं होती कभी',
      'पर आज को बेहतरीन बनाने की पूरी ताक़त आपके हाथों में है',
    ],
    linesHinglish: [
      'Beete kal ko badalne ki chaabi kisi ke paas nahin hoti kabhi',
      'Par aaj ko behtareen banaane ki poori taaqat aapke haathon mein hai',
    ],
    linesEnglish: [
      'Nobody owns a time machine to rewrite yesterday’s mistakes',
      'Yet the full power to make today remarkable sits right inside your hands',
    ],
  },
  {
    title: 'प्रकृति की मुस्कान',
    titleEnglish: 'Nature Waking Up',
    linesHindi: [
      'हल्की धूप, लहराते पत्ते और नीला आसमान कह रहा है आपसे',
      'ज़िंदगी बहुत खूबसूरत है, आज इसे खुलकर जी लीजिएगा',
    ],
    linesHinglish: [
      'Halki dhoop, lehraate patte aur neela aasmaan keh raha hai aapse',
      'Zindagi bahut khoobsurat hai, aaj ise khulkar jee lijiyega',
    ],
    linesEnglish: [
      'Soft golden sunlight, swaying leaves, and blue sky all remind you',
      'Life is genuinely lovely—go savor every bright hour of it today',
    ],
  },
  {
    title: 'मन के भीतर साफ़ सवेरा',
    titleEnglish: 'Inner Sunlight',
    linesHindi: [
      'बाहर के मौसम से ज़्यादा ज़रूरी है मन के भीतर का मौसम साफ़ रहे',
      'आपके दिल में आज सुख और संतोष की धूप खिली रहे',
    ],
    linesHinglish: [
      'Baahar ke mausam se zyada zaroori hai man ke bheetar ka mausam saaf rahe',
      'Aapke dil mein aaj sukh aur santosh ki dhoop khili rahe',
    ],
    linesEnglish: [
      'Far more important than any forecast outside is clear weather inside',
      'May steady contentment and calm sunshine fill your heart all day',
    ],
  },
  {
    title: 'मीठी सुबह की सौगात',
    titleEnglish: 'Sweet Morning Blessing',
    linesHindi: [
      'हर सुबह ईश्वर से बस इतनी सी अर्ज़ी रहती है मेरे दिल की',
      'मेरे अपने जहाँ भी हों, हमेशा स्वस्थ और मुस्कुराते रहें',
    ],
    linesHinglish: [
      'Har subah Ishwar se bas itni si arzi rehti hai mere dil ki',
      'Mere apne jahaan bhi hon, hamesha swasth aur muskuraate rahein',
    ],
    linesEnglish: [
      'Every dawn begins with one simple wish rising softly from my heart',
      'Wherever my dear ones are, may they stay healthy, safe, and smiling',
    ],
  },
  {
    title: 'सकारात्मक शुरुआत',
    titleEnglish: 'Positive Start',
    linesHindi: [
      'मुश्किलों से डरने वाले नहीं, मुस्कुराकर हल निकालने वाले बनिए',
      'सुबह की ऊर्जा के साथ हर चुनौती आज छोटी लगने लगेगी',
    ],
    linesHinglish: [
      'Mushkilon se darne waale nahin, muskuraakar hal nikaalne waale baniye',
      'Subah ki oorja ke saath har chunauti aaj chhoti lagne lagegi',
    ],
    linesEnglish: [
      'Face the morning not worrying about obstacles, but ready to solve them calmly',
      'With sunrise energy behind you, every challenge looks half its size',
    ],
  },
  {
    title: 'अच्छी सेहत और शांति',
    titleEnglish: 'Health and Serenity',
    linesHindi: [
      'दुनिया की सबसे बड़ी दौलत सुबह-सुबह चैन की साँस लेना है',
      'आपकी सेहत सलामत रहे और दिन खुशियों भरा गुज़रे यही कामना है',
    ],
    linesHinglish: [
      'Duniya ki sabse badi daulat subah-subah chain ki saans lena hai',
      'Aapki sehat salaamat rahe aur din khushiyon bhara guzre yahi kaamna hai',
    ],
    linesEnglish: [
      'The finest wealth alive is waking up healthy and breathing in peace',
      'Wishing you strong wellness and joyful hours from morning until night',
    ],
  },
  {
    title: 'नए अवसरों का दिन',
    titleEnglish: 'Day of Opportunities',
    linesHindi: [
      'हर नया सवेरा अपने साथ नए अवसर और नए रास्ते लेकर आता है',
      'खुली आँखों और बड़े दिल से आज उन रास्तों को अपनाइए',
    ],
    linesHinglish: [
      'Har naya sawera apne saath naye avsar aur naye raaste lekar aata hai',
      'Khuli aankhon aur bade dil se aaj un raaston ko apnaaiye',
    ],
    linesEnglish: [
      'Each new morning walks in carrying fresh doors and surprising chances',
      'Greet today with wide-open eyes and an eager, generous heart',
    ],
  },
  {
    title: 'मधुर मुस्कान',
    titleEnglish: 'Gentle Morning Smile',
    linesHindi: [
      'एक प्यारी सी मुस्कान किसी के पूरे दिन का बोझ हल्का कर सकती है',
      'आज अपने आसपास खुशियों की यही छोटी किरण बिखेर दीजिए',
    ],
    linesHinglish: [
      'Ek pyaari si muskaan kisi ke poore din ka bojh halka kar sakti hai',
      'Aaj apne aaspaas khushiyon ki yahi chhoti kiran bikher dijiye',
    ],
    linesEnglish: [
      'Even one genuine smile can lighten someone else’s entire afternoon',
      'Scatter small rays of warmth freely wherever your day takes you',
    ],
  },
  {
    title: 'शांति और प्रगति',
    titleEnglish: 'Calm Progress',
    linesHindi: [
      'तेज़ दौड़ने से ज़्यादा ज़रूरी है सही दिशा में लगातार बढ़ते रहना',
      'आज का एक शांत क़दम भी कल की बड़ी कामयाबी की नींव है',
    ],
    linesHinglish: [
      'Tez daudne se zyada zaroori hai sahi disha mein lagaataar badhte rehna',
      'Aaj ka ek shaant qadam bhi kal ki badi kaamyaabi ki neev hai',
    ],
    linesEnglish: [
      'Walking steadily in the right direction beats sprinting blindly any day',
      'Even one calm step forward today builds tomorrow’s lasting success',
    ],
  },
  {
    title: 'परिवार की दुआएँ',
    titleEnglish: 'Family Morning Warmth',
    linesHindi: [
      'घर की रसोई से आती चाय की खुशबू और अपनों के चेहरे की रौनक',
      'इससे सुंदर गुड मॉर्निंग भला किसी और जगह कहाँ मिल सकती है',
    ],
    linesHinglish: [
      'Ghar ki rasoi se aati chai ki khushboo aur apnon ke chehre ki raunak',
      'Isse sundar good morning bhala kisi aur jagah kahaan mil sakti hai',
    ],
    linesEnglish: [
      'The aroma of tea drifting from the kitchen and familiar faces at home',
      'Where else on earth could a sweeter good morning ever exist',
    ],
  },
  {
    title: 'भरोसे भरी शुरुआत',
    titleEnglish: 'Confident Sunrise',
    linesHindi: [
      'ऊपर वाले पर भरोसा और अपनी मेहनत पर यक़ीन रखकर घर से निकलिए',
      'हर बंद दरवाज़े की चाबी आज आपके धैर्य में छिपी मिलेगी',
    ],
    linesHinglish: [
      'Upar waale par bharosa aur apni mehnat par yaqeen rakhkar ghar se nikliye',
      'Har band darwaaze ki chaabi aaj aapke dhairya mein chhipi milegi',
    ],
    linesEnglish: [
      'Step out trusting both grace above and the honest work in your hands',
      'Patient focus will unlock every single door waiting ahead today',
    ],
  },
  {
    title: 'शुभ प्रभात का आशीष',
    titleEnglish: 'Morning Blessing Note',
    linesHindi: [
      'हर सुबह ईश्वर से यही प्रार्थना है कि आपके रास्ते फूलों से सजे रहें',
      'दुख की परछाई कभी करीब न आए और चेहरा सदा खिलखिलाता रहे',
    ],
    linesHinglish: [
      'Har subah Ishwar se yahi praarthna hai ki aapke raaste phoolon se saje rahein',
      'Dukh ki parchhaai kabhi qareeb na aaye aur chehra sada khilkhilaata rahe',
    ],
    linesEnglish: [
      'My morning wish is that bright, smooth paths stay laid out beneath your feet',
      'May sorrow stay far away and genuine joy always keep your face glowing',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'ठंडी हवा, गरम इरादे',
    titleEnglish: 'Cool Breeze Warm Resolve',
    linesHindi: [
      'सुबह की हवा भले ही ठंडी हो पर आपके इरादे गरम होने चाहिए',
      'जो सोचा है उसे पूरा करने की ताक़त आज ही जगा लेनी चाहिए',
    ],
    linesHinglish: [
      'Subah ki hawa bhale hi thandi ho par aapke iraade garam hone chahiye',
      'Jo socha hai use poora karne ki taaqat aaj hi jaga leni chahiye',
    ],
    linesEnglish: [
      'The early morning air might feel crisp, yet keep your passion warm',
      'Wake the steady drive inside you right now to chase what matters',
    ],
  },
  {
    title: 'अनमोल पलों की कद्र',
    titleEnglish: 'Treasure Today',
    linesHindi: [
      'आज जो दिन मिला है वो दुबारा ठीक इसी रूप में लौटकर नहीं आएगा',
      'इसलिए हर पल को पूरे प्यार और उत्साह के साथ गले लगाइए',
    ],
    linesHinglish: [
      'Aaj jo din mila hai wo dubaara theek isi roop mein lautkar nahin aayega',
      'Isliye har pal ko poore pyaar aur utsaah ke saath gale lagaaiye',
    ],
    linesEnglish: [
      'This exact morning will never circle back in quite the same way again',
      'Embrace every hour today with wholehearted presence and warmth',
    ],
  },
  {
    title: 'सुबह मुस्कान बाँटने का सुख',
    titleEnglish: 'Gift of Laughter',
    linesHindi: [
      'दुनिया में सबसे सस्ता पर सबसे क़ीमती तोहफ़ा किसी को हँसाना है',
      'आज की सुबह किसी एक चेहरे पर मुस्कान लाने की कोशिश कीजिए',
    ],
    linesHinglish: [
      'Duniya mein sabse sasta par sabse qeemti tohfa kisi ko hansaana hai',
      'Aaj ki subah kisi ek chehre par muskaan laane ki koshish kijiye',
    ],
    linesEnglish: [
      'Making someone smile costs nothing yet ranks among life’s richest gifts',
      'Try bringing a bright moment to just one person’s morning today',
    ],
  },
  {
    title: 'सुकून की छत',
    titleEnglish: 'Peaceful Rooftop Morning',
    linesHindi: [
      'सुबह-सुबह छत पर आकर दूर उगते सूरज को देखना सुकून देता है',
      'मन की सारी उलझनें अपने आप शांत होकर बिखर जाती हैं',
    ],
    linesHinglish: [
      'Subah-subah chhat par aakar door ugte sooraj ko dekhna sukoon deta hai',
      'Man ki saari uljhanein apne aap shaant hokar bikhar jaati hain',
    ],
    linesEnglish: [
      'Stepping onto the terrace early to watch the horizon wake up feels serene',
      'Every tangled thought quietly settles down under open morning sky',
    ],
  },
  {
    title: 'लक्ष्य की ओर पहला कदम',
    titleEnglish: 'First Step Forward',
    linesHindi: [
      'बड़े से बड़े सफ़र की शुरुआत हमेशा एक छोटे कदम से होती है',
      'आज बिना देर किए अपने सपने की ओर पहला कदम बढ़ा दीजिए',
    ],
    linesHinglish: [
      'Bade se bade safar ki shuruaat hamesha ek chhote qadam se hoti hai',
      'Aaj bina der kiye apne sapne ki or pehla qadam badha dijiye',
    ],
    linesEnglish: [
      'Even the longest adventure starts with one simple morning step',
      'Without putting it off another day, move gently toward your dream right now',
    ],
  },
  {
    title: 'नेक नीयत का इनाम',
    titleEnglish: 'Kind Intentions',
    linesHindi: [
      'जब आपकी नीयत साफ़ होती है तो प्रकृति ख़ुद मदद को आती है',
      'साफ़ मन के साथ आज के हर काम की शुरुआत कीजिएगा',
    ],
    linesHinglish: [
      'Jab aapki niyat saaf hoti hai to prakriti khud madad ko aati hai',
      'Saaf man ke saath aaj ke har kaam ki shuruaat kijiye',
    ],
    linesEnglish: [
      'When your intentions stay honest, the universe quietly clears the road',
      'Begin every task this morning with a clean, generous heart',
    ],
  },
  {
    title: 'मीठी वाणी का असर',
    titleEnglish: 'Power of Gentle Words',
    linesHindi: [
      'सुबह की पहली बातचीत अगर मीठी हो तो पूरा दिन सुहाना रहता है',
      'प्यार से बोलिए और पूरे दिन सकारात्मक माहौल बनाए रखिए',
    ],
    linesHinglish: [
      'Subah ki pehli baatcheet agar meethi ho to poora din suhaana rehta hai',
      'Pyaar se boliye aur poore din sakaaratmak maahaul banaaye rakhiye',
    ],
    linesEnglish: [
      'When your first conversation of the day is kind, the whole day shines',
      'Speak softly this morning and carry calm warmth everywhere you go',
    ],
  },
  {
    title: 'नए रंगों का सवेरा',
    titleEnglish: 'Colorful Sunrise',
    linesHindi: [
      'आसमान के बदलते गुलाबी रंग कह रहे हैं कि नया दिन आ गया',
      'ज़िंदगी के कैनवास पर आज फिर खुशियाँ भरने का समय आ गया',
    ],
    linesHinglish: [
      'Aasmaan ke badalte gulaabi rang keh rahe hain ki naya din aa gaya',
      'Zindagi ke canvas par aaj phir khushiyaan bharne ka samay aa gaya',
    ],
    linesEnglish: [
      'Soft pink hues spreading across the eastern sky announce a fresh day',
      'Time to brush bright joy across life’s canvas once again today',
    ],
  },
  {
    title: 'शांति से शुरू हुई सुहानी भोर',
    titleEnglish: 'Quiet Fulfillment',
    linesHindi: [
      'बड़ी दौलत से ज़्यादा ज़रूरी है सुबह उठकर मन का शांत रहना',
      'यही शांति हर दिन आपको जीवन में और आगे ले जाती है',
    ],
    linesHinglish: [
      'Badi daulat se zyada zaroori hai subah uthkar man ka shaant rehna',
      'Yahi shaanti har din aapko jeevan mein aur aage le jaati hai',
    ],
    linesEnglish: [
      'Waking up with a peaceful heart matters far more than stacked wealth',
      'That calm clarity is what lifts you steadily forward every day',
    ],
  },
  {
    title: 'प्यार भरा पैगाम',
    titleEnglish: 'Warm Morning Note',
    linesHindi: [
      'चाहे दूरी कितनी भी हो शहरों की, भावनाएँ तो पल भर में पहुँचती हैं',
      'मेरी ओर से मीठा गुड मॉर्निंग, आपका पूरा दिन मंगलमय हो',
    ],
    linesHinglish: [
      'Chaahe doori kitni bhi ho shehron ki, bhaavnaayein to pal bhar mein pahunchti hain',
      'Meri or se meetha good morning, aapka poora din mangalmay ho',
    ],
    linesEnglish: [
      'No matter how many miles lie between cities, warm thoughts arrive instantly',
      'Sending you a sweet good morning—may your whole day be blessed',
    ],
  },
  {
    title: 'नई उमंग, नया जोश',
    titleEnglish: 'Fresh Zeal',
    linesHindi: [
      'हर दिन अपने अंदर छुपी नई संभावनाओं को खोजने का मौका है',
      'आज पूरे आत्मविश्वास के साथ ख़ुद को आगे बढ़ता देखिए',
    ],
    linesHinglish: [
      'Har din apne andar chhipi nayi sambhaavanaon ko khojne ka mauka hai',
      'Aaj poore aatmvishwas ke saath khud ko aage badhta dekhiye',
    ],
    linesEnglish: [
      'Each morning brings another chance to discover fresh potential inside',
      'Step into today confident and watch yourself move steadily ahead',
    ],
  },
  {
    title: 'धूप और उम्मीद',
    titleEnglish: 'Sunlight and Hope',
    linesHindi: [
      'जैसे सुबह की धूप बंद कलियों को फूल बनने में मदद करती है',
      'वैसे ही आपकी आज की मुस्कान हर मुश्किल को आसान कर देगी',
    ],
    linesHinglish: [
      'Jaise subah ki dhoop band kaliyon ko phool banne mein madad karti hai',
      'Waise hi aapki aaj ki muskaan har mushkil ko aasaan kar degi',
    ],
    linesEnglish: [
      'Just as morning sunshine coaxes tight buds open into full flowers',
      'Your warm smile today will soften every tough knot ahead',
    ],
  },
  {
    title: 'तंदुरुस्ती और ताज़गी',
    titleEnglish: 'Wellness and Freshness',
    linesHindi: [
      'सुबह के कुछ मिनट सिर्फ़ अपनी सेहत और शांति के नाम रखिए',
      'पूरा दिन शरीर में स्फूर्ति और मन में मिठास बनी रहेगी',
    ],
    linesHinglish: [
      'Subah ke kuch minute sirf apni sehat aur shaanti ke naam rakhiye',
      'Poora din shareer mein sphoorti aur man mein mithaas bani rahegi',
    ],
    linesEnglish: [
      'Dedicate the first quiet minutes of dawn solely to your health and calm',
      'Steady energy and gentle sweetness will stay with you until nightfall',
    ],
  },
  {
    title: 'सुकून की गारंटी',
    titleEnglish: 'Secret to Calm Days',
    linesHindi: [
      'जवाब हर किसी को देने से ज़्यादा ज़रूरी है अपना चैन बचाए रखना',
      'आज की सुबह बस वही चुनिए जो आपके दिल को सुकून दे',
    ],
    linesHinglish: [
      'Jawaab har kisi ko dene se zyada zaroori hai apna chain bachaaye rakhna',
      'Aaj ki subah bas wahi chuniye jo aapke dil ko sukoon de',
    ],
    linesEnglish: [
      'Protecting your peace matters far more than replying to every noise',
      'Choose only what nourishes your calm spirit this morning',
    ],
  },
  {
    title: 'हल्की मुस्कान की शुरुआत',
    titleEnglish: 'Easy Smile Start',
    linesHindi: [
      'दिल भारी हो तो भी सुबह की चाय के साथ हल्का सा मुस्कुराइए',
      'आधे रास्ते तो अच्छी शुरुआत देखते ही ख़ुद आसान हो जाते हैं',
    ],
    linesHinglish: [
      'Dil bhaari ho to bhi subah ki chai ke saath halka sa muskuraaiye',
      'Aadhe raaste to acchi shuruaat dekhte hi khud aasaan ho jaate hain',
    ],
    linesEnglish: [
      'Even if yesterday felt heavy, greet your morning cup with a soft smile',
      'Half of life’s steep hills smooth out right after a gentle start',
    ],
  },
  {
    title: 'विश्वास की सुबह',
    titleEnglish: 'Morning of Trust',
    linesHindi: [
      'जब ख़ुद पर यक़ीन होता है तो हर सुबह जीत का पैगाम लगती है',
      'आज भी पूरे यक़ीन से आगे बढ़िए, अच्छा वक़्त आपके साथ है',
    ],
    linesHinglish: [
      'Jab khud par yaqeen hota hai to har subah jeet ka paigaam lagti hai',
      'Aaj bhi poore yaqeen se aage badhiye, accha waqt aapke saath hai',
    ],
    linesEnglish: [
      'When you trust yourself deeply, every sunrise feels like quiet promise',
      'Step forward steadily today—good fortune walks right beside patience',
    ],
  },
  {
    title: 'आशीर्वाद भरी सुबह',
    titleEnglish: 'Blessed Dawn',
    linesHindi: [
      'बड़ों का आशीर्वाद और छोटों का प्यार सुबह की सबसे बड़ी दौलत है',
      'ईश्वर करे आपके घर में हर दिन ऐसी ही रौशनी बनी रहे',
    ],
    linesHinglish: [
      'Badon ka aashirwaad aur chhoton ka pyaar subah ki sabse badi daulat hai',
      'Ishwar kare aapke ghar mein har din aisi hi raushni bani rahe',
    ],
    linesEnglish: [
      'Elders’ blessings and kids’ laughter are the truest wealth of any morning',
      'May warm light like that brighten your home every single day',
    ],
  },
  {
    title: 'चमकता हौसला',
    titleEnglish: 'Bright Spirit',
    linesHindi: [
      'सुबह उठते ही सबसे पहले अपने हिस्से की खुशियों के लिए शुक्र करें',
      'शुक्राना करने वालों के हिस्से में खुशियां खुद-ब-खुद बढ़ जाती हैं',
    ],
    linesHinglish: [
      'Subah uthte hi sabse pehle apne hisse ki khushiyon ke liye shukr karein',
      'Shukraana karne waalon ke hisse mein khushiyaan khud-ba-khud badh jaati hain',
    ],
    linesEnglish: [
      'Upon waking, start by thanking life for the blessings already in hand',
      'Joy multiplies effortlessly inside a grateful heart',
    ],
  },
  {
    title: 'मीठी धूप जैसा साथ',
    titleEnglish: 'Warm Sunlight',
    linesHindi: [
      'सर्दियों की मीठी धूप सा सुकून दे आपको आज का हर एक घंटा',
      'आप जहाँ भी जाएँ वहाँ आपकी मौजूदगी से उजाला हो जाए',
    ],
    linesHinglish: [
      'Sardiyon ki meethi dhoop sa sukoon de aapko aaj ka har ek ghanta',
      'Aap jahaan bhi jaayein wahaan aapki maujoodgi se ujaala ho jaaye',
    ],
    linesEnglish: [
      'May every hour today soothe you like gentle winter morning sun',
      'And may your warm presence brighten every room you step into',
    ],
  },
  {
    title: 'प्यारा शुभ प्रभात',
    titleEnglish: 'Sweet Morning Wishes',
    linesHindi: [
      'नया दिन, नई आशाएँ और दिल में नया विश्वास लेकर आया है सवेरा',
      'खुलकर मुस्कुराइए, आज का पूरा आसमान सिर्फ़ आपका है',
    ],
    linesHinglish: [
      'Naya din, nayi aashaayein aur dil mein naya vishwas lekar aaya hai sawera',
      'Khulkar muskuraaiye, aaj ka poora aasmaan sirf aapka hai',
    ],
    linesEnglish: [
      'A fresh day has arrived bearing bright hopes and renewed faith',
      'Smile wide today—this whole open morning sky belongs to you',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'सुकून भरा सफ़र',
    titleEnglish: 'Smooth Day Ahead',
    linesHindi: [
      'काम कितना भी ज़्यादा हो आज, मन में घबराहट मत आने देना',
      'मुस्कुराहट के साथ एक-एक क़दम बढ़ाओ, सब समय पर पूरा होगा',
    ],
    linesHinglish: [
      'Kaam kitna bhi zyada ho aaj, man mein ghabraahat mat aane dena',
      'Muskuraahat ke saath ek-ek qadam badhaao, sab samay par poora hoga',
    ],
    linesEnglish: [
      'No matter how full today’s to-do list looks, keep worry out the door',
      'Move steadily with a calm smile and everything will fall neatly in place',
    ],
  },
  {
    title: 'ताज़गी भरी मुस्कान',
    titleEnglish: 'Refreshing Morning Smile',
    linesHindi: [
      'रात की थकान को अलविदा कहकर नई ऊर्जा को गले लगाइए',
      'आपकी एक मुस्कान पूरे घर का माहौल खुशगवार बना देगी',
    ],
    linesHinglish: [
      'Raat ki thakaan ko alvida kehkar nayi oorja ko gale lagaaiye',
      'Aapki ek muskaan poore ghar ka maahaul khushgawaar bana degi',
    ],
    linesEnglish: [
      'Wave goodbye to yesterday’s fatigue and welcome bright morning energy',
      'One genuine smile from you lifts the mood of the whole house',
    ],
  },
  {
    title: 'प्रकृति का संगीत',
    titleEnglish: 'Song of Dawn',
    linesHindi: [
      'हवाओं में हल्की ठंडक और मन में मीठी उमंग भरी हो जब',
      'तब समझिए कि आज की सुबह आपके लिए कुछ ख़ास लेकर आई है',
    ],
    linesHinglish: [
      'Hawaon mein halki thandak aur man mein meethi umang bhari ho jab',
      'Tab samajhiye ki aaj ki subah aapke liye kuch khaas lekar aayi hai',
    ],
    linesEnglish: [
      'When cool air meets a bright sense of quiet anticipation inside',
      'You know today’s morning arrived carrying something special for you',
    ],
  },
  {
    title: 'ईमानदार कोशिश',
    titleEnglish: 'Honest Effort Wins',
    linesHindi: [
      'नतीजों की चिंता से ज़्यादा सुंदर होती है सुबह की सच्ची कोशिश',
      'आज अपना सर्वश्रेष्ठ दीजिए, बाकी ईश्वर पर छोड़ दीजिए',
    ],
    linesHinglish: [
      'Nateejon ki chinta se zyada sundar hoti hai subah ki sacchi koshish',
      'Aaj apna sarvashreshth dijiye, baaqi Ishwar par chhod dijiye',
    ],
    linesEnglish: [
      'Far finer than worrying over outcomes is giving your honest best today',
      'Pour sincere heart into your morning and trust everything else to unfold',
    ],
  },
  {
    title: 'शांति की पहली किरण',
    titleEnglish: 'First Ray of Peace',
    linesHindi: [
      'आँखें खुलते ही सबसे पहले खुद को शांत और सकारात्मक महसूस करें',
      'अच्छी सुबह ही एक खूबसूरत शाम की सच्ची नींव रखती है',
    ],
    linesHinglish: [
      'Aankhein khulte hi sabse pehle khud ko shaant aur sakaaratmak mehsoos karein',
      'Acchi subah hi ek khoobsurat shaam ki sacchi neev rakhti hai',
    ],
    linesEnglish: [
      'The moment your eyes open, invite calm and optimism right inside',
      'A peaceful morning lays the truest foundation for a joyful evening',
    ],
  },
  {
    title: 'ख़ुशख़बरी की उम्मीद',
    titleEnglish: 'Expecting Good News',
    linesHindi: [
      'सुबह की पहली दुआ यही है कि आज कोई अच्छी ख़बर मिले आपको',
      'हर रुका हुआ काम आसानी से पूरा होकर चेहरे पर हँसी लाए',
    ],
    linesHinglish: [
      'Subah ki pehli dua yahi hai ki aaj koi acchi khabar mile aapko',
      'Har ruka hua kaam aasaani se poora hokar chehre par hansi laaye',
    ],
    linesEnglish: [
      'My first morning wish is that delightful news reaches your phone today',
      'May every stalled plan fall smoothly into place and make you grin',
    ],
  },
  {
    title: 'सुबह के प्यारे संदेश का जादू',
    titleEnglish: 'Sweetness in Bonds',
    linesHindi: [
      'सुबह एक प्यारा संदेश अपनों से जुड़े रहने का सबसे सुंदर ज़रिया है',
      'आप हमेशा खुश रहें और जीवन में नई ऊँचाइयाँ छूते रहें',
    ],
    linesHinglish: [
      'Subah ek pyaara sandesh apnon se jude rehne ka sabse sundar zariya hai',
      'Aap hamesha khush rahein aur jeevan mein nayi oonchaaiyan chhoote rahein',
    ],
    linesEnglish: [
      'Sending a kind morning hello keeps beloved ties warm and alive',
      'Stay happy always and keep reaching brighter heights every day',
    ],
  },
  {
    title: 'नए हौसले की उड़ान',
    titleEnglish: 'Wings of Morning Hope',
    linesHindi: [
      'परिंदे भी हर सुबह बिना नक्शे के ऊँचे आसमान में उड़ चलते हैं',
      'आप भी भरोसे के साथ निकलिए, रास्ते अपने आप बनते जाएँगे',
    ],
    linesHinglish: [
      'Parinde bhi har subah bina naqshe ke oonche aasmaan mein ud chalte hain',
      'Aap bhi bharose ke saath nikliye, raaste apne aap bante jaayenge',
    ],
    linesEnglish: [
      'Birds take off across wide skies every dawn without holding a map',
      'Step out with quiet faith—the right path reveals itself as you walk',
    ],
  },
  {
    title: 'सुकून भरी चाय',
    titleEnglish: 'Quiet Morning Cup',
    linesHindi: [
      'हाथ में चाय का गरम कप और दिल में किसी भी बात की जल्दी नहीं',
      'सुबह के ये शांत दस मिनट पूरे दिन की ताक़त दे जाते हैं',
    ],
    linesHinglish: [
      'Haath mein chai ka garam cup aur dil mein kisi bhi baat ki jaldi nahin',
      'Subah ke ye shaant das minute poore din ki taaqat de jaate hain',
    ],
    linesEnglish: [
      'A warm teacup in your palms and zero rush inside your mind',
      'Ten peaceful morning minutes like that power you through the whole day',
    ],
  },
  {
    title: 'उज्ज्वल भविष्य की शुरुआत',
    titleEnglish: 'Bright Day Beginning',
    linesHindi: [
      'बड़े बदलाव हमेशा रोज़ की छोटी अच्छी आदतों से शुरू होते हैं',
      'आज की सुबह अपने लिए एक अच्छी आदत चुनकर दिन शुरू कीजिए',
    ],
    linesHinglish: [
      'Bade badlaav hamesha roz ki chhoti acchi aadaton se shuru hote hain',
      'Aaj ki subah apne liye ek acchi aadat chunkar din shuru kijiye',
    ],
    linesEnglish: [
      'Great transformations always grow out of tiny daily morning habits',
      'Pick one healthy step for yourself today and begin right away',
    ],
  },
  {
    title: 'सच्ची खुशी की तलाश',
    titleEnglish: 'Simple Morning Joy',
    linesHindi: [
      'खुश रहने के लिए किसी ख़ास तारीख़ का इंतज़ार मत कीजिए कभी',
      'आज की सुबह ही ज़िंदगी का सबसे ख़ूबसूरत दिन बन सकती है',
    ],
    linesHinglish: [
      'Khush rehne ke liye kisi khaas taarikh ka intezaar mat kijiye kabhi',
      'Aaj ki subah hi zindagi ka sabse khoobsurat din ban sakti hai',
    ],
    linesEnglish: [
      'Never wait for a special calendar date to finally allow yourself joy',
      'This ordinary morning has everything needed to become a wonderful day',
    ],
  },
  {
    title: 'मुस्कान भरी भोर',
    titleEnglish: 'Cheerful Daybreak',
    linesHindi: [
      'जब सुबह मुस्कुराहट के साथ शुरू हो तो शाम भी खुशनुमा रहती है',
      'दिल से शुभ प्रभात, आज आपका हर काम आसानी से बने',
    ],
    linesHinglish: [
      'Jab subah muskurahat ke saath shuru ho to shaam bhi khushnuma rehti hai',
      'Dil se shubh prabhaat, aaj aapka har kaam aasaani se bane',
    ],
    linesEnglish: [
      'When your morning opens with a genuine smile, twilight shines warmly too',
      'Warmest good morning—may everything on your plate go smoothly today',
    ],
  },
  {
    title: 'ओस से धुले पत्तों जैसा मन',
    titleEnglish: 'Fresh Heart Today',
    linesHindi: [
      'ओस से धुले पत्तों जैसा साफ़ और हल्का रहे आज आपका मन',
      'हर परेशानी दूर रहे और चारों ओर खुशियों की बहार खिली रहे',
    ],
    linesHinglish: [
      'Os se dhule patton jaisa saaf aur halka rahe aaj aapka man',
      'Har pareshaani door rahe aur chaaron or khushiyon ki bahaar khili rahe',
    ],
    linesEnglish: [
      'May your mind feel as clean and crisp as leaves washed in morning dew',
      'May worries stay away and bright joy bloom all around you today',
    ],
  },
  {
    title: 'प्रगति और शांति',
    titleEnglish: 'Growth and Peace',
    linesHindi: [
      'कामयाबी तभी अच्छी लगती है जब साथ में मन का चैन भी रहे',
      'आज का दिन आपको तरक़्क़ी और सुकून दोनों उपहार में दे',
    ],
    linesHinglish: [
      'Kaamyaabi tabhi acchi lagti hai jab saath mein man ka chain bhi rahe',
      'Aaj ka din aapko taraqqi aur sukoon donon uphaar mein de',
    ],
    linesEnglish: [
      'Achievement tastes sweetest when peacefulness walks right beside it',
      'May today gift you both steady progress and calm joy in equal measure',
    ],
  },
  {
    title: 'नए विचार, नई सुबह',
    titleEnglish: 'Fresh Perspective',
    linesHindi: [
      'हर सुबह दुनिया को एक नई और प्यारी नज़र से देखने का मौका है',
      'आज सिर्फ़ अच्छाइयों को देखिए, दिन अपने आप खूबसूरत लगेगा',
    ],
    linesHinglish: [
      'Har subah duniya ko ek nayi aur pyaari nazar se dekhne ka mauka hai',
      'Aaj sirf acchaaiyon ko dekhiye, din apne aap khoobsurat lagega',
    ],
    linesEnglish: [
      'Every morning invites you to view the world through kind new eyes',
      'Notice the goodness around you today and life turns brighter instantly',
    ],
  },
  {
    title: 'अपनों का साथ',
    titleEnglish: 'Warmth of Loved Ones',
    linesHindi: [
      'दुनिया की सबसे बड़ी ख़ुशी अपनों के सुरक्षित और खुश होने में है',
      'सुबह की यही दुआ आपके पूरे परिवार के नाम भेज रहा हूँ',
    ],
    linesHinglish: [
      'Duniya ki sabse badi khushi apnon ke surakshit aur khush hone mein hai',
      'Subah ki yahi dua aapke poore parivaar ke naam bhej raha hoon',
    ],
    linesEnglish: [
      'The deepest happiness is knowing everyone you love is safe and smiling',
      'I send this morning blessing warmly to your entire family',
    ],
  },
  {
    title: 'ऊर्जावान सवेरा',
    titleEnglish: 'Vibrant Morning',
    linesHindi: [
      'आलस्य और शक को बिस्तर के पास ही छोड़कर उठिए आज सुबह',
      'ताक़त और लगन के साथ पूरा दिन जीतने के लिए तैयार रहिए',
    ],
    linesHinglish: [
      'Aalasya aur shaq ko bistar ke paas hi chhodkar uthiye aaj subah',
      'Taaqat aur lagan ke saath poora din jeetne ke liye taiyaar rahiye',
    ],
    linesEnglish: [
      'Leave hesitation and sleepiness folded right beside your blanket today',
      'Step up with fresh drive and greet the hours ahead ready to shine',
    ],
  },
  {
    title: 'सुकून भरा आँगन',
    titleEnglish: 'Serene Morning Home',
    linesHindi: [
      'धूप की कोमल किरणें आपके आँगन को रोशन करने आ गई हैं',
      'मन में सुख और होठों पर मुस्कान रखकर दिन की शुरुआत करें',
    ],
    linesHinglish: [
      'Dhoop ki komal kirnein aapke aangan ko roshan karne aa gayi hain',
      'Man mein sukh aur hothon par muskaan rakhkar din ki shuruaat karein',
    ],
    linesEnglish: [
      'Gentle rays of sunrise have arrived to warm your home and courtyard',
      'Begin the day with peace inside your chest and a smile on your lips',
    ],
  },
  {
    title: 'ख़ुशनुमा एहसास',
    titleEnglish: 'Joyful Vibe',
    linesHindi: [
      'सुबह का हर नया पल एक ख़ूबसूरत एहसास बनकर आया है',
      'मेहनत कीजिए, मुस्कुराइए और अपनों को गले लगाइए आज',
    ],
    linesHinglish: [
      'Subah ka har naya pal ek khoobsurat ehsaas bankar aaya hai',
      'Mehnat kijiye, muskuraaiye aur apnon ko gale lagaaiye aaj',
    ],
    linesEnglish: [
      'Every fresh morning minute arrives wrapped like a quiet gift',
      'Work sincerely, smile often, and hold the people you love close today',
    ],
  },
  {
    title: 'सुनहरा दिन मुबारक',
    titleEnglish: 'Have a Golden Day',
    linesHindi: [
      'प्रार्थना है कि आज का सूरज आपके जीवन में नई खुशियाँ लाए',
      'सुबह से लेकर रात तक हर घड़ी आपके चेहरे पर रौनक बनी रहे',
    ],
    linesHinglish: [
      'Praarthna hai ki aaj ka sooraj aapke jeevan mein nayi khushiyaan laaye',
      'Subah se lekar raat tak har ghadi aapke chehre par raunak bani rahe',
    ],
    linesEnglish: [
      'I pray today’s rising sun brings fresh happiness across your doorstep',
      'May a joyful glow stay on your face from early morning until night',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'ताज़ा हवा और धूप',
    titleEnglish: 'Fresh Air and Sun',
    linesHindi: [
      'सुबह की सैर और ताज़ी हवा से बढ़कर कोई टॉनिक नहीं होता',
      'ख़ुद को थोड़ा समय दीजिए और इस प्यारे मौसम को महसूस कीजिए',
    ],
    linesHinglish: [
      'Subah ki sair aur taazi hawa se badhkar koi tonic nahin hota',
      'Khud ko thoda samay dijiye aur is pyaare mausam ko mehsoos kijiye',
    ],
    linesEnglish: [
      'No tonic works half as well as an early walk in crisp morning air',
      'Gift yourself ten unhurried minutes and soak in the sunrise today',
    ],
  },
  {
    title: 'नया दिन, नई उम्मीद',
    titleEnglish: 'New Day New Hope',
    linesHindi: [
      'चाहे कल कितने ही सवाल अनसुलझे रह गए हों जीवन में',
      'आज की सुबह नए जवाब और नई राह लेकर ज़रूर आएगी',
    ],
    linesHinglish: [
      'Chaahe kal kitne hi sawaal ansuljhe reh gaye hon jeevan mein',
      'Aaj ki subah naye jawaab aur nayi raah lekar zaroor aayegi',
    ],
    linesEnglish: [
      'Even if yesterday left a few questions dangling without answers',
      'Today’s sunlight brings fresh clarity and open doors ahead',
    ],
  },
  {
    title: 'मधुर शुरुआत',
    titleEnglish: 'Sweet Morning Start',
    linesHindi: [
      'किसी को याद करने के लिए किसी ख़ास मौके की ज़रूरत नहीं',
      'एक प्यारा सुप्रभात कह देना ही दिलों को जोड़ने के लिए काफी है',
    ],
    linesHinglish: [
      'Kisi ko yaad karne ke liye kisi khaas mauke ki zaroorat nahin',
      'Ek pyaara suprabhaat keh dena hi dilon ko jodne ke liye kaafi hai',
    ],
    linesEnglish: [
      'You never need a giant occasion just to check on someone dear',
      'A simple good morning message keeps warm hearts connected effortlessly',
    ],
  },
  {
    title: 'धैर्य का उजाला',
    titleEnglish: 'Light of Patience',
    linesHindi: [
      'सूरज भी एक दम से नहीं चमकता, धीरे-धीरे रोशनी फैलाता है',
      'आप भी धैर्य से काम लीजिए, सफलता धीरे-धीरे आपके पास आएगी',
    ],
    linesHinglish: [
      'Sooraj bhi ek dam se nahin chamakta, dheere-dheere roshni phailaata hai',
      'Aap bhi dhairya se kaam lijiye, safalta dheere-dheere aapke paas aayegi',
    ],
    linesEnglish: [
      'Even the morning sun rises gently, spreading light inch by inch',
      'Move with calm patience too—lasting rewards always arrive on time',
    ],
  },
  {
    title: 'खिलते फूलों जैसा मन',
    titleEnglish: 'Blooming Spirit',
    linesHindi: [
      'बगिया के फूलों की तरह आज आपका मन भी खिला-खिला रहे',
      'हर अधूरा ख्वाब आज पूरा होने की दिशा में कदम बढ़ाए',
    ],
    linesHinglish: [
      'Bagiya ke phoolon ki tarah aaj aapka man bhi khila-khila rahe',
      'Har adhoora khwaab aaj poora hone ki disha mein qadam badhaaye',
    ],
    linesEnglish: [
      'May your heart bloom bright and fresh like morning garden flowers',
      'And may every quiet dream step closer to reality today',
    ],
  },
  {
    title: 'दिल से शुभकामना',
    titleEnglish: 'Warm Wishes Today',
    linesHindi: [
      'कोई चिंता आज आपके चेहरे की मुस्कान न छीन पाए कभी',
      'आपका हर काम बनता जाए और हर घड़ी सुखद बीते आज',
    ],
    linesHinglish: [
      'Koi chinta aaj aapke chehre ki muskaan na chheen paaye kabhi',
      'Aapka har kaam banta jaaye aur har ghadi sukhad beete aaj',
    ],
    linesEnglish: [
      'May no stray worry touch the warm smile on your face today',
      'May every plan move forward smoothly and every hour feel kind',
    ],
  },
  {
    title: 'भोर में जागता नया जोश',
    titleEnglish: 'Genuine Enthusiasm',
    linesHindi: [
      'सुबह उठकर सबसे बड़ी ताक़त मन के अंदर का उत्साह होता है',
      'जो इंसान सुबह मुस्कुरा देता है, वह आधा दिन वैसे ही जीत लेता है',
    ],
    linesHinglish: [
      'Subah uthkar sabse badi taaqat man ke andar ka utsaah hota hai',
      'Jo insaan subah muskura deta hai, wah aadha din waise hi jeet leta hai',
    ],
    linesEnglish: [
      'The greatest strength on waking up is cheerful energy inside',
      'Anyone who greets the sunrise smiling has already won half the day',
    ],
  },
  {
    title: 'सपनों की ओर',
    titleEnglish: 'Toward Your Goals',
    linesHindi: [
      'नई सुबह कहती है कि अभी भी बहुत सुंदर सफ़र बाकी है आपका',
      'हिम्मत रखिए और अपने सबसे प्यारे लक्ष्य की ओर चल पड़िए',
    ],
    linesHinglish: [
      'Nayi subah kehti hai ki abhi bhi bahut sundar safar baaki hai aapka',
      'Himmat rakhiye aur apne sabse pyaare lakshya ki or chal padiye',
    ],
    linesEnglish: [
      'A new dawn whispers that your brightest chapters still lie ahead',
      'Take heart and walk steadily toward the goal closest to your soul',
    ],
  },
  {
    title: 'प्यारा साथ और सुबह',
    titleEnglish: 'Lovely Company Morning',
    linesHindi: [
      'जिन लोगों के होने से जीवन सुंदर लगता है उनकी कद्र कीजिए',
      'सुबह-सुबह एक मीठा संदेश भेजकर उन्हें मुस्कुराने की वजह दीजिए',
    ],
    linesHinglish: [
      'Jin logon ke hone se jeevan sundar lagta hai unki qadr kijiye',
      'Subah-subah ek meetha sandesh bhejkar unhein muskuraane ki wajah dijiye',
    ],
    linesEnglish: [
      'Cherish the people whose quiet presence makes your life brighter',
      'Send them a kind good morning text and hand them an early smile',
    ],
  },
  {
    title: 'शांति से भरी भोर',
    titleEnglish: 'Tranquil Dawn',
    linesHindi: [
      'भागदौड़ से पहले सुबह के कुछ पल बिल्कुल शांत बैठिए ज़रूर',
      'भीतर की शांति आपको हर बाहर के शोर से बचा लेगी आज',
    ],
    linesHinglish: [
      'Bhaagdaud se pehle subah ke kuch pal bilkul shaant baithiye zaroor',
      'Bheetar ki shaanti aapko har baahar ke shor se bacha legi aaj',
    ],
    linesEnglish: [
      'Before the rush begins, sit quietly for five peaceful minutes at dawn',
      'Inner stillness will shield you calmly from all outside noise today',
    ],
  },
  {
    title: 'आशाओं का सवेरा',
    titleEnglish: 'Dawn of Hopes',
    linesHindi: [
      'नए दिन के साथ नए सपनों की कोमल कली खिल रही है आज',
      'दिल से दुआ है कि हर मेहनत का मीठा फल मिले आपको',
    ],
    linesHinglish: [
      'Naye din ke saath naye sapnon ki komal kali khil rahi hai aaj',
      'Dil se dua hai ki har mehnat ka meetha phal mile aapko',
    ],
    linesEnglish: [
      'Tender buds of brand-new hopes open wide alongside this morning',
      'Sincere wishes that every honest effort brings sweet results your way',
    ],
  },
  {
    title: 'चाय और मुस्कान',
    titleEnglish: 'Chai and Morning Joy',
    linesHindi: [
      'सूरज निकल आया है और रसोई में चाय की खुशबू महक उठी है',
      'अब बस आपकी प्यारी मुस्कान की देर है दिन खूबसूरत बनने में',
    ],
    linesHinglish: [
      'Sooraj nikal aaya hai aur rasoi mein chai ki khushboo mehak uthi hai',
      'Ab bas aapki pyaari muskaan ki der hai din khoobsurat banne mein',
    ],
    linesEnglish: [
      'Sunlight has arrived and warm tea is already steaming in the kitchen',
      'All this beautiful morning needs now is your bright smile',
    ],
  },
  {
    title: 'शुभ विचारों संग दिन की शुरुआत',
    titleEnglish: 'Radiant Energy',
    linesHindi: [
      'अच्छी सोच के साथ घर से निकलने वाला इंसान हमेशा खुश रहता है',
      'आज हर छोटी बात में ख़ुशी ढूँढने की कोशिश कीजिएगा',
    ],
    linesHinglish: [
      'Acchi soch ke saath ghar se nikalne waala insaan hamesha khush rehta hai',
      'Aaj har chhoti baat mein khushi dhoondhne ki koshish kijiyega',
    ],
    linesEnglish: [
      'Anyone who steps out wearing a hopeful mindset carries daylight inside',
      'Look for tiny moments of gratitude today and watch joy multiply',
    ],
  },
  {
    title: 'उजले पलों का स्वागत',
    titleEnglish: 'Welcoming Bright Hours',
    linesHindi: [
      'जिंदगी का सबसे अच्छा हिस्सा हमेशा आने वाले कल में छिपा होता है',
      'उसी भरोसे के साथ आज की सुबह का दिल खोलकर स्वागत कीजिए',
    ],
    linesHinglish: [
      'Zindagi ka sabse accha hissa hamesha aane waale kal mein chhipa hota hai',
      'Usi bharose ke saath aaj ki subah ka dil kholkar swaagat kijiye',
    ],
    linesEnglish: [
      'Life’s sweetest surprises often wait patiently just around tomorrow',
      'Welcome this fresh morning with open arms and steady optimism',
    ],
  },
  {
    title: 'दिल की तसल्ली वाली सुबह',
    titleEnglish: 'Reassuring Morning',
    linesHindi: [
      'सब कुछ धीरे-धीरे अपनी सही जगह पर आ ही जाएगा, भरोसा रखिए',
      'सुबह की ताज़गी के साथ एक शांत मुस्कान पहन लीजिए आज',
    ],
    linesHinglish: [
      'Sab kuch dheere-dheere apni sahi jagah par aa hi jaayega, bharosa rakhiye',
      'Subah ki taazgi ke saath ek shaant muskaan pehen lijiye aaj',
    ],
    linesEnglish: [
      'Everything is gradually falling into its rightful place—trust the pace',
      'Put on a serene smile along with this crisp morning breeze today',
    ],
  },
  {
    title: 'मन के अंदर रौशनी',
    titleEnglish: 'Light Inside',
    linesHindi: [
      'बाहर के अँधेरे से ज़्यादा ज़रूरी है अंदर उम्मीद का दिया जलता रहे',
      'आपकी आज की सुबह रोशन और खुशियों से भरी हो यही दुआ है',
    ],
    linesHinglish: [
      'Baahar ke andhere se zyada zaroori hai andar ummeed ka diya jalta rahe',
      'Aapki aaj ki subah roshan aur khushiyon se bhari ho yahi dua hai',
    ],
    linesEnglish: [
      'Keeping the lamp of hope lit inside matters more than any cloud outside',
      'Wishing you a luminous morning overflowing with peace and cheer',
    ],
  },
  {
    title: 'ताज़ा शुरुआत का सुख',
    titleEnglish: 'Joy of Beginning Again',
    linesHindi: [
      'हर सुबह हमें फिर से अच्छा बनने और प्यार बांटने का मौका देती है',
      'इस सुंदर उपहार का आनंद लीजिए, शुभ प्रभात मेरे दोस्त',
    ],
    linesHinglish: [
      'Har subah humein phir se accha banne aur pyaar baantne ka mauka deti hai',
      'Is sundar uphaar ka aanand lijiye, shubh prabhaat mere dost',
    ],
    linesEnglish: [
      'Every morning hands us a fresh chance to show kindness and grow',
      'Enjoy this lovely gift of a brand-new day—good morning, my friend',
    ],
  },
  {
    title: 'मीठा आगाज़',
    titleEnglish: 'Sweet Opening',
    linesHindi: [
      'जैसे दिन की पहली धूप हर कोने को सुनहरा कर देती है धीरे से',
      'वैसे ही आपकी अच्छाई हर दिल को जीत लेगी आज भी',
    ],
    linesHinglish: [
      'Jaise din ki pehli dhoop har kone ko sunahra kar deti hai dheere se',
      'Waise hi aapki acchaai har dil ko jeet legi aaj bhi',
    ],
    linesEnglish: [
      'Just as early sunlight turns every quiet corner warm and gold',
      'Your gentle kindness will brighten every room you enter today',
    ],
  },
  {
    title: 'ख़ुशियों भरा सवेरा',
    titleEnglish: 'Happy Sunrise',
    linesHindi: [
      'मन में नए रंग, आँखों में सपने और होठों पर प्यारी हँसी सजाइए',
      'आपका आज का पूरा दिन आनंद और शांति से भरा रहे',
    ],
    linesHinglish: [
      'Man mein naye rang, aankhon mein sapne aur hothon par pyaari hansi sajaaiye',
      'Aapka aaj ka poora din aanand aur shaanti se bhara rahe',
    ],
    linesEnglish: [
      'Carry bright colors in your heart, big dreams in your eyes, and a warm smile',
      'May your whole day unfold rich in peace, laughter, and joy',
    ],
  },
  {
    title: 'हल्के-फुल्के कदम',
    titleEnglish: 'Light Steps Today',
    linesHindi: [
      'पिछले दिनों की थकान उतारकर हल्के कदमों से बाहर निकलिए',
      'आज की सुबह आपके लिए ताज़गी और सफलता लेकर खड़ी है',
    ],
    linesHinglish: [
      'Pichhle dinon ki thakaan utaarkar halke qadmon se baahar nikliye',
      'Aaj ki subah aapke liye taazgi aur safalta lekar khadi hai',
    ],
    linesEnglish: [
      'Shake off the fatigue of busy days and step out feeling light',
      'This bright morning stands waiting with fresh energy and good fortune',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'नेकी की खुशबू',
    titleEnglish: 'Scent of Kindness',
    linesHindi: [
      'अच्छे लोगों की याद सुबह की हवा में फूलों सी महकती है',
      'आप भी उनमें से एक हैं, आपको दिल से प्यार भरा सुप्रभात',
    ],
    linesHinglish: [
      'Acche logon ki yaad subah ki hawa mein phoolon si mehakti hai',
      'Aap bhi unmein se ek hain, aapko dil se pyaar bhara suprabhaat',
    ],
    linesEnglish: [
      'Thoughts of kind souls drift sweetly through the morning breeze like blossoms',
      'You are truly one of them—sending a heartfelt good morning your way',
    ],
  },
  {
    title: 'सूरज जैसी चमक',
    titleEnglish: 'Shine Like Sunrise',
    linesHindi: [
      'सूरज बिना किसी से पूछे हर घर में रोशनी फैला देता है रोज़',
      'आप भी आज अपनी मुस्कुराहट से हर जगह उजाला कर दीजिए',
    ],
    linesHinglish: [
      'Sooraj bina kisi se poochhe har ghar mein roshni phaila deta hai roz',
      'Aap bhi aaj apni muskurahat se har jagah ujaala kar dijiye',
    ],
    linesEnglish: [
      'The sun spreads golden warmth into every window without waiting to be asked',
      'Brighten every space around you with that same generosity today',
    ],
  },
  {
    title: 'सपनों को सच करने का दिन',
    titleEnglish: 'Make Dreams Real',
    linesHindi: [
      'जितनी बड़ी आपकी मेहनत होगी, उतनी ही सुंदर आपकी जीत होगी',
      'आज पूरे दिल से अपने काम में लग जाइए, शुभ प्रभात',
    ],
    linesHinglish: [
      'Jitni badi aapki mehnat hogi, utni hi sundar aapki jeet hogi',
      'Aaj poore dil se apne kaam mein lag jaaiye, shubh prabhaat',
    ],
    linesEnglish: [
      'The steadier your quiet effort, the sweeter your eventual triumph tastes',
      'Pour your heart wholeheartedly into today—warm good morning',
    ],
  },
  {
    title: 'सुकून भरा आशीर्वाद',
    titleEnglish: 'Blessing of Serenity',
    linesHindi: [
      'आज दिन भर कोई बाधा आपके हौसले को रोक न सके कभी',
      'आपके परिवार में प्यार, सेहत और खुशहाली हमेशा बनी रहे',
    ],
    linesHinglish: [
      'Aaj din bhar koi baadha aapke hausle ko rok na sake kabhi',
      'Aapke parivaar mein pyaar, sehat aur khushhaali hamesha bani rahe',
    ],
    linesEnglish: [
      'May no hurdle slow down your determination all through today',
      'May warmth, health, and harmony stay blessed inside your home',
    ],
  },
  {
    title: 'नई सुबह की ताक़त',
    titleEnglish: 'Strength of Dawn',
    linesHindi: [
      'जब भी लगे रास्ता लंबा है तो बस एक बार उगते सूरज को देखिए',
      'हर नई सुबह नया जोश और नई ताक़त भर देती है रगों में',
    ],
    linesHinglish: [
      'Jab bhi lage raasta lamba hai to bas ek baar ugte sooraj ko dekhiye',
      'Har nayi subah naya josh aur nayi taaqat bhar deti hai ragon mein',
    ],
    linesEnglish: [
      'Whenever the road feels steep, glance once toward the rising sun',
      'Every dawn pours fresh resilience and quiet spark right back into you',
    ],
  },
  {
    title: 'दिल का आराम',
    titleEnglish: 'Gentle Morning Ease',
    linesHindi: [
      'मन में अगर कृतज्ञता हो तो साधारण सुबह भी ख़ास बन जाती है',
      'आज अपने पास मौजूद हर अच्छी बात के लिए मुस्कुराइए ज़रूर',
    ],
    linesHinglish: [
      'Man mein agar kritagyata ho to saadhaaran subah bhi khaas ban jaati hai',
      'Aaj apne paas maujood har acchi baat ke liye muskuraaiye zaroor',
    ],
    linesEnglish: [
      'Gratitude turns even the quietest weekday morning into something special',
      'Take a second to smile over every good blessing sitting near you today',
    ],
  },
  {
    title: 'मुस्कान से सजा पूरा दिन',
    titleEnglish: 'Keep Smiling Today',
    linesHindi: [
      'सुबह की हँसी पूरे दिन का सबसे सुंदर गहना होती है इंसान का',
      'इसे आज शाम तक बिल्कुल इसी तरह सजाए रखिएगा चेहरे पर',
    ],
    linesHinglish: [
      'Subah ki hansi poore din ka sabse sundar gehna hoti hai insaan ka',
      'Ise aaj shaam tak bilkul isi tarah sajaaye rakhiyega chehre par',
    ],
    linesEnglish: [
      'An early morning smile is the finest ornament anyone can wear all day',
      'Keep it shining brightly across your face right through to sunset',
    ],
  },
  {
    title: 'प्यारा सा आमंत्रण',
    titleEnglish: 'Welcome the Day',
    linesHindi: [
      'हर सुबह ईश्वर द्वारा भेजा गया जीवन का नया निमंत्रण होती है',
      'इसे पूरे सम्मान और खुशी के साथ स्वीकार कीजिए आज',
    ],
    linesHinglish: [
      'Har subah Ishwar dwaara bheja gaya jeevan ka naya nimantran hoti hai',
      'Ise poore sammaan aur khushi ke saath sweekaar kijiye aaj',
    ],
    linesEnglish: [
      'Every morning arrives as a fresh invitation from life itself',
      'Accept today warmly with open hands and a cheerful heart',
    ],
  },
  {
    title: 'उम्मीदों का इंद्रधनुष',
    titleEnglish: 'Rainbow of Hopes',
    linesHindi: [
      'आज आपके सपनों के आसमान में खुशियों के सातों रंग खिलें',
      'हर पल नया उत्साह और हर काम में अपार सफलता मिले',
    ],
    linesHinglish: [
      'Aaj aapke sapnon ke aasmaan mein khushiyon ke saaton rang khilein',
      'Har pal naya utsaah aur har kaam mein apaar safalta mile',
    ],
    linesEnglish: [
      'May every bright color of joy paint the sky above your dreams today',
      'Wishing fresh spark in every moment and steady success in all you do',
    ],
  },
  {
    title: 'सच्ची दोस्ती की सुबह',
    titleEnglish: 'Morning to True Friends',
    linesHindi: [
      'सुबह की चाय तब और मीठी लगती है जब अच्छे यारों का साथ याद आए',
      'आपकी मुस्कान सलामत रहे, प्यारा सा गुड मॉर्निंग मेरे दोस्त',
    ],
    linesHinglish: [
      'Subah ki chai tab aur meethi lagti hai jab acche yaaron ka saath yaad aaye',
      'Aapki muskaan salaamat rahe, pyaara sa good morning mere dost',
    ],
    linesEnglish: [
      'Morning tea always tastes sweeter when warm memories of good friends cross by',
      'Keep shining and smiling—a very happy good morning to you, my friend',
    ],
  },
  {
    title: 'शांति का संदेश',
    titleEnglish: 'Message of Calm',
    linesHindi: [
      'हर भागदौड़ से पहले थोड़ा शांत रहकर गहरा श्वास लेना सीखिए',
      'आज का पूरा दिन आपके काबू में और बेहद आसान महसूस होगा',
    ],
    linesHinglish: [
      'Har bhaagdaud se pehle thoda shaant rehkar gehra shwaas lena seekhiye',
      'Aaj ka poora din aapke kaaboo mein aur behad aasaan mehsoos hoga',
    ],
    linesEnglish: [
      'Before jumping into the rush, pause once and take one deep, slow breath',
      'Notice how calm, grounded, and manageable the whole day feels after',
    ],
  },
  {
    title: 'खूबसूरत सोच',
    titleEnglish: 'Beautiful Mindset',
    linesHindi: [
      'संसार वैसा ही दिखता है जैसी हमारी सुबह की सोच होती है',
      'प्यार और उम्मीद से देखिए, हर चेहरा अपना सा लगने लगेगा',
    ],
    linesHinglish: [
      'Sansaar waisa hi dikhta hai jaisi hamaari subah ki soch hoti hai',
      'Pyaar aur ummeed se dekhiye, har chehra apna sa lagne lagega',
    ],
    linesEnglish: [
      'The world outside often mirrors the mindset you wake up wearing',
      'Look gently with hope today, and every corner feels a bit warmer',
    ],
  },
  {
    title: 'मीठी सुबह की छाया',
    titleEnglish: 'Gentle Morning Shade',
    linesHindi: [
      'दुनिया की तपती भीड़ में अपनों की दुआ ठंडी छाँव जैसी होती है',
      'मेरी यही दुआ है कि आज हर कदम पर आपको सुकून मिले',
    ],
    linesHinglish: [
      'Duniya ki tapti bheed mein apnon ki dua thandi chhaanv jaisi hoti hai',
      'Meri yahi dua hai ki aaj har qadam par aapko sukoon mile',
    ],
    linesEnglish: [
      'In a busy, rushing world, prayers from loved ones feel like cool shade',
      'My wish today is that steady calm meets every step you take',
    ],
  },
  {
    title: 'दिल की धड़कन में खुशी',
    titleEnglish: 'Joyful Heartbeat',
    linesHindi: [
      'रात बीती, तारे विदा हुए और सुनहरा सवेरा मुस्कुरा उठा है',
      'आज फिर ज़िंदगी से प्यार करने का एक नया दिन आया है',
    ],
    linesHinglish: [
      'Raat beeti, taare vida hue aur sunahra sawera muskura utha hai',
      'Aaj phir zindagi se pyaar karne ka ek naya din aaya hai',
    ],
    linesEnglish: [
      'Night slipped past, stars bowed out, and a golden dawn smiled awake',
      'Another brand-new day has arrived to fall in love with living again',
    ],
  },
  {
    title: 'सच्चे रास्ते की रोशनी',
    titleEnglish: 'Light on True Paths',
    linesHindi: [
      'सच्चाई और मेहनत का रास्ता कभी खाली हाथ नहीं लौटाता किसी को',
      'आज भी ईमानदारी से कदम बढ़ाइए, ईश्वर आपके साथ है',
    ],
    linesHinglish: [
      'Sacchaai aur mehnat ka raasta kabhi khaali haath nahin lautaata kisi ko',
      'Aaj bhi imaandaari se qadam badhaaiye, Ishwar aapke saath hai',
    ],
    linesEnglish: [
      'Walking with honesty and steady effort never leaves anyone empty-handed',
      'Step out sincerely today—grace walks right beside you',
    ],
  },
  {
    title: 'सवेरे का जादू',
    titleEnglish: 'Morning Magic',
    linesHindi: [
      'सुबह-सुबह हर चीज़ नई और ताज़ा दिखाई देती है इस धरती पर',
      'अपनी सोच को भी आज बिल्कुल ऐसी ही नई चमक दीजिए',
    ],
    linesHinglish: [
      'Subah-subah har cheez nayi aur taaza dikhaai deti hai is dharti par',
      'Apni soch ko bhi aaj bilkul aisi hi nayi chamak dijiye',
    ],
    linesEnglish: [
      'Early in the morning everything across the earth looks fresh and renewed',
      'Give your thoughts that exact same bright start right now',
    ],
  },
  {
    title: 'हँसता हुआ चेहरा',
    titleEnglish: 'Smiling Face',
    linesHindi: [
      'कोई काम छोटा या बड़ा नहीं होता अगर दिल से किया जाए तो',
      'चेहरे पर मुस्कान रखिए, आज हर मेहनत रंग लेकर आएगी',
    ],
    linesHinglish: [
      'Koi kaam chhota ya bada nahin hota agar dil se kiya jaaye to',
      'Chehre par muskaan rakhiye, aaj har mehnat rang lekar aayegi',
    ],
    linesEnglish: [
      'No task is ever too small when poured straight from a sincere heart',
      'Wear your smile proudly today—every bit of effort will bloom',
    ],
  },
  {
    title: 'दिलों की नज़दीकी',
    titleEnglish: 'Close in Heart',
    linesHindi: [
      'व्यस्तता चाहे जितनी बढ़ जाए जीवन में, अपनों को न भूलिए कभी',
      'एक छोटा सा सुप्रभात कई बार बहुत बड़ा अपनापन दे जाता है',
    ],
    linesHinglish: [
      'Vyastata chaahe jitni badh jaaye jeevan mein, apnon ko na bhooliye kabhi',
      'Ek chhota sa suprabhaat kai baar bahut bada apnaapan de jaata hai',
    ],
    linesEnglish: [
      'No matter how packed schedules grow, never forget the people you cherish',
      'Even one brief good morning text delivers whole oceans of warmth',
    ],
  },
  {
    title: 'आनंदमयी शुरुआत',
    titleEnglish: 'Joyous Opening',
    linesHindi: [
      'आने वाले हर पल का स्वागत खुले दिल और मुस्कान से कीजिए',
      'आज की सुबह आपके लिए सुख, शांति और समृद्धि लाए',
    ],
    linesHinglish: [
      'Aane waale har pal ka swaagat khule dil aur muskaan se kijiye',
      'Aaj ki subah aapke liye sukh, shaanti aur samriddhi laaye',
    ],
    linesEnglish: [
      'Greet every hour unfolding ahead with open hands and a bright grin',
      'May this lovely morning carry peace, joy, and abundance to your door',
    ],
  },
  {
    title: 'प्यारा शुभ दिन',
    titleEnglish: 'Wonderful Day Ahead',
    linesHindi: [
      'ताज़े फूलों की महक और अपनों की दुआओं के साथ निकलिए घर से',
      'आज का दिन आपकी उम्मीदों से भी ज़्यादा खूबसूरत होगा',
    ],
    linesHinglish: [
      'Taaze phoolon ki mehak aur apnon ki duaon ke saath nikliye ghar se',
      'Aaj ka din aapki ummeedon se bhi zyada khoobsurat hoga',
    ],
    linesEnglish: [
      'Step outside wrapped in fresh flower scents and warm blessings from home',
      'Today is going to turn out even brighter than you hoped',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'मुस्कान का पहला क़दम',
    titleEnglish: 'First Step Is a Smile',
    linesHindi: [
      'दिन कैसा बीतेगा इसका आधा फैसला सुबह के पहले दस मिनट करते हैं',
      'प्यार से उठिए, थोड़ा मुस्कुराइए और ख़ुद को शाबाशी दीजिए',
    ],
    linesHinglish: [
      'Din kaisa beetega iska aadha faisla subah ke pehle das minute karte hain',
      'Pyaar se uthiye, thoda muskuraaiye aur khud ko shaabaashi dijiye',
    ],
    linesEnglish: [
      'The first ten waking minutes decide half the mood of the whole day',
      'Wake gently, smile warmly, and give yourself quiet encouragement',
    ],
  },
  {
    title: 'सपनों में रंग भरें',
    titleEnglish: 'Color Your Dreams',
    linesHindi: [
      'सपने देखने से ही बात नहीं बनती, उन्हें जीने की शुरुआत भी ज़रूरी है',
      'आज की सुनहरी सुबह में अपने सपनों में नए रंग भर दीजिए',
    ],
    linesHinglish: [
      'Sapne dekhne se hi baat nahin banti, unhein jeene ki shuruaat bhi zaroori hai',
      'Aaj ki sunahri subah mein apne sapnon mein naye rang bhar dijiye',
    ],
    linesEnglish: [
      'Dreaming big is lovely, yet taking morning action brings them alive',
      'Brush bright new colors across your favorite goals today',
    ],
  },
  {
    title: 'दिल की हल्की उड़ान',
    titleEnglish: 'Light Morning Flight',
    linesHindi: [
      'मन से पुरानी शिकायतों का भार उतारकर रख दीजिए एक कोने में',
      'हल्के पंखों के साथ आज की खुले आसमान में उड़ान भरिए',
    ],
    linesHinglish: [
      'Man se purani shikaayaton ka bhaar utaarkar rakh dijiye ek kone mein',
      'Halke pankhon ke saath aaj ki khule aasmaan mein udaan bhariye',
    ],
    linesEnglish: [
      'Set yesterday’s heavy grudges down neatly in a quiet corner',
      'Spread light wings today and soar freely beneath bright open skies',
    ],
  },
  {
    title: 'प्रकृति की सीख',
    titleEnglish: 'Wisdom of Sunrise',
    linesHindi: [
      'पेड़ कभी नहीं सोचते कि फल कौन खाएगा, बस हर सुबह छाया देते हैं',
      'आप भी आज बिना हिसाब लगाए थोड़ी सी खुशी बांट आइएगा',
    ],
    linesHinglish: [
      'Ped kabhi nahin sochte ki phal kaun khaayega, bas har subah chhaaya dete hain',
      'Aap bhi aaj bina hisaab lagaaye thodi si khushi baant aaiyega',
    ],
    linesEnglish: [
      'Trees never keep score of who rests under them—they simply offer shade',
      'Share small pockets of kindness freely today without counting return',
    ],
  },
  {
    title: 'मन की मिठास',
    titleEnglish: 'Sweetness of Spirit',
    linesHindi: [
      'बाहर के शोरगुल के बीच भी दिल में मिठास बचाए रखना कला है',
      'सुबह-सुबह एक सुरीला गीत सुनिए और दिन को मधुर बनाइए',
    ],
    linesHinglish: [
      'Baahar ke shorgul ke beech bhi dil mein mithaas bachaaye rakhna kala hai',
      'Subah-subah ek sureela geet suniye aur din ko madhur banaaiye',
    ],
    linesEnglish: [
      'Keeping gentleness inside a noisy world is a quiet superpower',
      'Play one soothing song this morning and set a sweet tone for the day',
    ],
  },
  {
    title: 'आशा की किरणें',
    titleEnglish: 'Golden Beams',
    linesHindi: [
      'खिड़की से छनकर आती धूप बता रही है कि आज कुछ नया होने वाला है',
      'उत्साह बनाए रखिए, हर घड़ी आपके पक्ष में घूमने वाली है',
    ],
    linesHinglish: [
      'Khidki se chhankar aati dhoop bata rahi hai ki aaj kuch naya hone waala hai',
      'Utsaah banaaye rakhiye, har ghadi aapke paksh mein ghoomne waali hai',
    ],
    linesEnglish: [
      'Warm beams slipping through the window hint that good things await today',
      'Keep your enthusiasm bright—hours ahead are lining up in your favor',
    ],
  },
  {
    title: 'शांति से भरी शुरुआत',
    titleEnglish: 'Serene Opening',
    linesHindi: [
      'जल्दबाज़ी से ज़्यादा अच्छी होती है ठहराव के साथ की गई शुरुआत',
      'चाय का स्वाद लीजिए और अपनों को प्यारा गुड मॉर्निंग कहिए',
    ],
    linesHinglish: [
      'Jaldbaazi se zyada acchi hoti hai thehraav ke saath ki gayi shuruaat',
      'Chai ka swaad lijiye aur apnon ko pyaara good morning kahiye',
    ],
    linesEnglish: [
      'Far better than frantic rushing is beginning your day with calm grace',
      'Savor your morning cup slowly and send warmth to someone you love',
    ],
  },
  {
    title: 'नए अवसर का स्वागत',
    titleEnglish: 'Embrace Fresh Chances',
    linesHindi: [
      'हर नई सुबह अपने साथ एक नया चमत्कार छिपाकर लाती है दोस्त',
      'आज पूरी उम्मीद और मेहनत के साथ उसे खोज निकालिए',
    ],
    linesHinglish: [
      'Har nayi subah apne saath ek naya chamatkaar chhipaakar laati hai dost',
      'Aaj poori ummeed aur mehnat ke saath use khoj nikaaliye',
    ],
    linesEnglish: [
      'Every fresh morning arrives hiding a quiet surprise inside its hours',
      'Step out with bright hope and honest work to discover yours today',
    ],
  },
  {
    title: 'हौसलों की सुबह',
    titleEnglish: 'Courageous Dawn',
    linesHindi: [
      'बड़े लक्ष्य पाना मुश्किल नहीं होता जब सुबह हौसले से भरी हो',
      'आज अपने आप पर पहले से ज़्यादा यक़ीन रखकर निकलिए',
    ],
    linesHinglish: [
      'Bade lakshya paana mushkil nahin hota jab subah hausle se bhari ho',
      'Aaj apne aap par pehle se zyada yaqeen rakhkar nikliye',
    ],
    linesEnglish: [
      'No big goal feels out of reach when your morning starts full of courage',
      'Believe in yourself a little deeper as you step out the door today',
    ],
  },
  {
    title: 'प्यार और सम्मान',
    titleEnglish: 'Love and Respect',
    linesHindi: [
      'सुबह की सबसे प्यारी शुरुआत अपनों का हाल पूछ लेने से होती है',
      'आप सभी स्वस्थ रहें, खुश रहें, दिल से यही कामना है',
    ],
    linesHinglish: [
      'Subah ki sabse pyaari shuruaat apnon ka haal poochh lene se hoti hai',
      'Aap sabhi swasth rahein, khush rahein, dil se yahi kaamna hai',
    ],
    linesEnglish: [
      'One of the sweetest morning rituals is checking in on those you love',
      'Wishing everyone close to you strong health and bright smiles today',
    ],
  },
  {
    title: 'दिन को खास बनाइए',
    titleEnglish: 'Make Today Count',
    linesHindi: [
      'समय तो अपने हिसाब से शाम तक गुज़र ही जाएगा किसी तरह',
      'इसे ख़ास और यादगार बनाना सिर्फ़ आपके मूड और कर्म पर है',
    ],
    linesHinglish: [
      'Samay to apne hisaab se shaam tak guzar hi jaayega kisi tarah',
      'Ise khaas aur yaadgaar banaana sirf aapke mood aur karm par hai',
    ],
    linesEnglish: [
      'Hours will tick all the way to evening regardless of what we do',
      'Turning them into memories worth keeping is entirely up to us',
    ],
  },
  {
    title: 'मीठी सुबह की सौगातें',
    titleEnglish: 'Morning Blessings',
    linesHindi: [
      'आशा, उत्साह और अपनापन — ये तीन तोहफ़े आज आपके साथ रहें',
      'कोई भी राह कठिन न लगे और चेहरे पर रौनक खिली रहे',
    ],
    linesHinglish: [
      'Aasha, utsaah aur apnaapan — ye teen tohfe aaj aapke saath rahein',
      'Koi bhi raah kathin na lage aur chehre par raunak khili rahe',
    ],
    linesEnglish: [
      'Hope, enthusiasm, and warmth—may all three gifts walk beside you today',
      'May every road feel smooth and your smile stay luminous all day long',
    ],
  },
  {
    title: 'दिल के करीब वाले लोग',
    titleEnglish: 'Close to the Heart',
    linesHindi: [
      'दूरी कितनी भी बढ़ जाए, दिल के क़रीब लोग हर सुबह याद आते हैं',
      'आपको ढेर सारा प्यार और बहुत सुंदर शुभ प्रभात',
    ],
    linesHinglish: [
      'Doori kitni bhi badh jaaye, dil ke qareeb log har subah yaad aate hain',
      'Aapko dher saara pyaar aur bahut sundar shubh prabhaat',
    ],
    linesEnglish: [
      'No matter the distance, those dearest to the heart come to mind each dawn',
      'Sending lots of warmth and a wonderfully bright good morning to you',
    ],
  },
  {
    title: 'बेवजह चिंता छोड़ने की सुबह',
    titleEnglish: 'Art of Joy',
    linesHindi: [
      'जो चीज़ अपने बस में नहीं उसकी चिंता छोड़कर आगे बढ़ना सीखें',
      'आज की सुबह को पूरी आज़ादी और सुकून के साथ जिएँ',
    ],
    linesHinglish: [
      'Jo cheez apne bas mein nahin uski chinta chhodkar aage badhna seekhein',
      'Aaj ki subah ko poori aazaadi aur sukoon ke saath jiyein',
    ],
    linesEnglish: [
      'Release worrying over anything outside your hands and keep moving',
      'Live this bright morning freely wrapped in calm peace',
    ],
  },
  {
    title: 'ताज़ी किरणों का साथ',
    titleEnglish: 'Company of Sunshine',
    linesHindi: [
      'ओस की बूँदें, फूलों की मुस्कान और सुबह की मीठी किरणें',
      'सब मिलकर यही कह रही हैं — आपका दिन बहुत प्यारा बीते आज',
    ],
    linesHinglish: [
      'Os ki boondein, phoolon ki muskaan aur subah ki meethi kirnein',
      'Sab milkar yahi keh rahi hain — aapka din bahut pyaara beete aaj',
    ],
    linesEnglish: [
      'Sparkling dewdrops, smiling petals, and soft golden rays of sunrise',
      'All whisper together—may you have a genuinely lovely day ahead',
    ],
  },
  {
    title: 'आनंद की राह',
    titleEnglish: 'Path of Joy',
    linesHindi: [
      'मंज़िल पर पहुँचकर ही खुश होने की शर्त हटा दीजिए जीवन से',
      'आज सुबह सफ़र के हर छोटे मोड़ पर मुस्कुराने का आनंद लें',
    ],
    linesHinglish: [
      'Manzil par pahunchkar hi khush hone ki shart hata dijiye jeevan se',
      'Aaj subah safar ke har chhote mod par muskuraane ka aanand lein',
    ],
    linesEnglish: [
      'Drop the rule that happiness only waits at the final finish line',
      'Enjoy smiling gently at every small mile along the journey today',
    ],
  },
  {
    title: 'नेक इरादों की उजली भोर',
    titleEnglish: 'Lifted Spirit',
    linesHindi: [
      'दिल बड़ा और इरादे नेक हों तो हर सुबह नई जीत लिखती है',
      'आत्मविश्वास से भरकर आज के दिन को गले लगाइए',
    ],
    linesHinglish: [
      'Dil bada aur iraade nek hon to har subah nayi jeet likhti hai',
      'Aatmvishwas se bharkar aaj ke din ko gale lagaaiye',
    ],
    linesEnglish: [
      'With a generous heart and sincere purpose, every dawn writes quiet victories',
      'Hug this new morning tightly with steady faith in yourself',
    ],
  },
  {
    title: 'साफ़ दिल का सुकून',
    titleEnglish: 'Clean Heart Calm',
    linesHindi: [
      'रात को चैन से सोने के बाद सुबह हल्के मन से उठना सबसे बड़ा सुख है',
      'आज दिन भर यही शांति और ताज़गी आपके साथ बनी रहे',
    ],
    linesHinglish: [
      'Raat ko chain se sone ke baad subah halke man se uthna sabse bada sukh hai',
      'Aaj din bhar yahi shaanti aur taazgi aapke saath bani rahe',
    ],
    linesEnglish: [
      'Waking up light-hearted after restful sleep is one of life’s richest joys',
      'May that exact peace and freshness stay beside you until sunset',
    ],
  },
  {
    title: 'सकारात्मक सवेरा',
    titleEnglish: 'Bright Optimism',
    linesHindi: [
      'छोटी-छोटी बाधाओं से घबराने के बजाय उन्हें मुस्कुराकर पार करें',
      'सुबह की रोशनी कह रही है कि आज आपकी मेहनत जरूर चमकेगी',
    ],
    linesHinglish: [
      'Chhoti-chhoti baadhaon se ghabraane ke bajaay unhein muskuraakar paar karein',
      'Subah ki roshni keh rahi hai ki aaj aapki mehnat zaroor chamkegi',
    ],
    linesEnglish: [
      'Instead of stressing over minor bumps, step calmly over them smiling',
      'Morning light promises your steady effort will shine bright today',
    ],
  },
  {
    title: 'शुभ सुबह, शुभ जीवन',
    titleEnglish: 'Blessed Morning Life',
    linesHindi: [
      'आपके जीवन के हर दिन में खुशहाली और प्रेम के फूल खिलते रहें',
      'दिल की गहराइयों से आपको प्यार भरा सुप्रभात मेरे मित्र',
    ],
    linesHinglish: [
      'Aapke jeevan ke har din mein khushhaali aur prem ke phool khilte rahein',
      'Dil ki gehraaiyon se aapko pyaar bhara suprabhaat mere mitra',
    ],
    linesEnglish: [
      'May flowers of prosperity and warmth bloom across every day of your life',
      'Wishing you a deeply joyful good morning from the heart, dear friend',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'फूलों भरी भोर',
    titleEnglish: 'Blossoming Dawn',
    linesHindi: [
      'जैसे रात की चुप्पी के बाद सुबह का संगीत गूँज उठता है',
      'वैसे ही आपके हर इंतज़ार के बाद खुशियों का दौर शुरू हो आज',
    ],
    linesHinglish: [
      'Jaise raat ki chuppi ke baad subah ka sangeet goonj uthta hai',
      'Waise hi aapke har intezaar ke baad khushiyon ka daur shuru ho aaj',
    ],
    linesEnglish: [
      'Just as morning birdsong breaks sweetly after the silent night',
      'May a bright season of joy open right after every patient wait today',
    ],
  },
  {
    title: 'मीठी यादें सुबह की',
    titleEnglish: 'Warm Morning Thoughts',
    linesHindi: [
      'ताज़गी भरी हवा के साथ मन में अच्छे लोगों का ख़्याल आता है',
      'उन सभी को एक प्यारा नमस्कार जो दिल के सबसे करीब हैं',
    ],
    linesHinglish: [
      'Taazgi bhari hawa ke saath man mein acche logon ka khayaal aata hai',
      'Un sabhi ko ek pyaara namaskaar jo dil ke sabse qareeb hain',
    ],
    linesEnglish: [
      'Along with fresh morning air, dear names always drift warmly to mind',
      'Sending heartfelt morning greetings to everyone held closest to my heart',
    ],
  },
  {
    title: 'निर्मल मन की सुबह',
    titleEnglish: 'Pure Morning',
    linesHindi: [
      'दिल में जब कोई द्वेष न हो तो हर सुबह त्यौहार जैसी लगती है',
      'साफ़ मन और मुस्कान के साथ आज के दिन को सुंदर बनाइए',
    ],
    linesHinglish: [
      'Dil mein jab koi dwesh na ho to har subah tyohaar jaisi lagti hai',
      'Saaf man aur muskaan ke saath aaj ke din ko sundar banaaiye',
    ],
    linesEnglish: [
      'When your heart holds zero envy, every single sunrise feels celebratory',
      'Carry a clean mind and easy smile to make today gorgeous',
    ],
  },
  {
    title: 'आगे बढ़ने का हौसला',
    titleEnglish: 'Keep Moving Forward',
    linesHindi: [
      'कल की ठोकरों को सबक़ बनाकर आज की राह संवार लीजिए',
      'हर सुबह आपको पहले से ज़्यादा मज़बूत बनाने के लिए आती है',
    ],
    linesHinglish: [
      'Kal ki thokaron ko sabak banaakar aaj ki raah sanwaar lijiye',
      'Har subah aapko pehle se zyada mazboot banaane ke liye aati hai',
    ],
    linesEnglish: [
      'Turn yesterday’s stumbles into quiet wisdom lighting today’s path',
      'Each new morning arrives to help you stand steadier than before',
    ],
  },
  {
    title: 'सुकून का पहला घूँट',
    titleEnglish: 'First Sip of Calm',
    linesHindi: [
      'गरम चाय की पहली चुस्की के साथ मन को धन्यवाद दीजिए आज',
      'कि एक और खूबसूरत दिन आपके हिस्से में लिखा गया है',
    ],
    linesHinglish: [
      'Garam chai ki pehli chuski ke saath man ko dhanyavaad dijiye aaj',
      'Ki ek aur khoobsurat din aapke hisse mein likha gaya hai',
    ],
    linesEnglish: [
      'With the very first sip of morning tea, thank life quietly today',
      'Because another beautiful sunrise has been written into your story',
    ],
  },
  {
    title: 'दिल की रोशनी',
    titleEnglish: 'Inner Radiance',
    linesHindi: [
      'किसी की एक अच्छी बात पूरा दिन याद रहती है मन के अंदर',
      'आज किसी के लिए वही प्यारी सुबह वाली रोशनी बन जाइए',
    ],
    linesHinglish: [
      'Kisi ki ek acchi baat poora din yaad rehti hai man ke andar',
      'Aaj kisi ke liye wahi pyaari subah waali roshni ban jaaiye',
    ],
    linesEnglish: [
      'One thoughtful word stays tucked warmly inside someone’s heart all day',
      'Be that gentle morning light for somebody around you today',
    ],
  },
  {
    title: 'सच्ची खुशी की भोर',
    titleEnglish: 'Genuine Morning Joy',
    linesHindi: [
      'दिखावे की चमक से कहीं बड़ी होती है मन की शांत मुस्कान',
      'आपका आज का पूरा दिन सुकून और संतोष से भरा रहे',
    ],
    linesHinglish: [
      'Dikhaawe ki chamak se kahin badi hoti hai man ki shaant muskaan',
      'Aapka aaj ka poora din sukoon aur santosh se bhara rahe',
    ],
    linesEnglish: [
      'Far brighter than loud glitz is the quiet smile of a peaceful mind',
      'May your entire day overflow with calm joy and contentment',
    ],
  },
  {
    title: 'आशा भरी आँखें',
    titleEnglish: 'Hopeful Morning Eyes',
    linesHindi: [
      'नींद खुलते ही मन में बस यही बात दोहराइए प्यार से आज',
      'कि आज का हर पल मेरे पक्ष में कुछ अच्छा ही लेकर आएगा',
    ],
    linesHinglish: [
      'Neend khulte hi man mein bas yahi baat dohraaiye pyaar se aaj',
      'Ki aaj ka har pal mere paksh mein kuch accha hi lekar aayega',
    ],
    linesEnglish: [
      'As soon as you wake, whisper one gentle reminder to yourself',
      'That every hour unfolding today carries something good in store',
    ],
  },
  {
    title: 'सवेरे की मिठास',
    titleEnglish: 'Sweetness of Dawn',
    linesHindi: [
      'सुबह का मौसम जितना कोमल होता है, मन भी उतना ही सरल रखिए',
      'बड़ों का आशीष और अपनों का प्यार साथ लेकर आगे बढ़िए',
    ],
    linesHinglish: [
      'Subah ka mausam jitna komal hota hai, man bhi utna hi saral rakhiye',
      'Badon ka aashish aur apnon ka pyaar saath lekar aage badhiye',
    ],
    linesEnglish: [
      'Keep your spirit as gentle and clear as early morning light',
      'Carry elders’ blessings and family warmth beside you into the day',
    ],
  },
  {
    title: 'सुनहरे पल',
    titleEnglish: 'Golden Hours',
    linesHindi: [
      'काम के बीच भी अपनों से मुस्कुराकर बात करना मत भूलिएगा',
      'यही छोटे-छोटे पल दिन को सुनहरा बना देते हैं सचमुच',
    ],
    linesHinglish: [
      'Kaam ke beech bhi apnon se muskuraakar baat karna mat bhooliyega',
      'Yahi chhote-chhote pal din ko sunahra bana dete hain sachmuch',
    ],
    linesEnglish: [
      'Even between busy tasks, never forget to share a warm word with loved ones',
      'Those small moments are what turn ordinary days into gold',
    ],
  },
  {
    title: 'नए रंगों की कामना',
    titleEnglish: 'Wishing Bright Colors',
    linesHindi: [
      'आपकी ज़िंदगी की बगिया हमेशा नई खुशियों से महकती रहे',
      'दिल से शुभ प्रभात, हर सुबह आपके लिए मंगलकारी हो',
    ],
    linesHinglish: [
      'Aapki zindagi ki bagiya hamesha nayi khushiyon se mehakti rahe',
      'Dil se shubh prabhaat, har subah aapke liye mangalkaari ho',
    ],
    linesEnglish: [
      'May the garden of your life stay fragrant with fresh joys always',
      'Heartfelt good morning—may every sunrise bring blessings your way',
    ],
  },
  {
    title: 'चमकता दिन',
    titleEnglish: 'Radiant Day',
    linesHindi: [
      'बंद आँखों में सपने सजते हैं और खुली आँखों से पूरे होते हैं',
      'उठिए, आज अपने हर सुंदर ख्वाब को हक़ीक़त का रूप दीजिए',
    ],
    linesHinglish: [
      'Band aankhon mein sapne sajte hain aur khuli aankhon se poore hote hain',
      'Uthiye, aaj apne har sundar khwaab ko haqeeqat ka roop dijiye',
    ],
    linesEnglish: [
      'Closed eyes sketch the dreams, while open eyes build them in daylight',
      'Rise brightly and bring one cherished dream closer to reality today',
    ],
  },
  {
    title: 'सुकून की गूँज',
    titleEnglish: 'Echo of Calm',
    linesHindi: [
      'प्रातःकाल का शांत वातावरण मन को नई शक्ति प्रदान करता है',
      'इसी सकारात्मक ऊर्जा के साथ आज के सभी कार्य सफल हों आपके',
    ],
    linesHinglish: [
      'Praatahkaal ka shaant vaataavaran man ko nayi shakti pradaan karta hai',
      'Isi sakaaratmak oorja ke saath aaj ke sabhi kaarya safal hon aapke',
    ],
    linesEnglish: [
      'The serene quiet of early dawn restores fresh clarity to the mind',
      'May every plan you touch today succeed smoothly on that calm energy',
    ],
  },
  {
    title: 'तनाव पर भारी मीठी मुस्कान',
    titleEnglish: 'Winning With Kindness',
    linesHindi: [
      'तनाव हर किसी के जीवन में आता है पर मुस्कान सबका हल निकालती है',
      'शांत रहिए, मुस्कुराइए और विश्वास से आगे कदम बढ़ाइए',
    ],
    linesHinglish: [
      'Tanaav har kisi ke jeevan mein aata hai par muskaan sabka hal nikaalti hai',
      'Shaant rahiye, muskuraaiye aur vishwas se aage qadam badhaaiye',
    ],
    linesEnglish: [
      'Pressure visits everyone, yet a calm smile unlocks the clearest solutions',
      'Stay steady, smile gently, and step forward with quiet confidence',
    ],
  },
  {
    title: 'प्यार भरा सलाम',
    titleEnglish: 'Affectionate Hello',
    linesHindi: [
      'सुबह का यह छोटा सा संदेश सिर्फ़ एक औपचारिकता नहीं है दोस्त',
      'इसमें आपकी खुशी और सेहत के लिए मेरी सच्ची दुआ छिपी है',
    ],
    linesHinglish: [
      'Subah ka yeh chhota sa sandesh sirf ek aupchaarikta nahin hai dost',
      'Ismein aapki khushi aur sehat ke liye meri sacchi dua chhipi hai',
    ],
    linesEnglish: [
      'This quick morning greeting is never meant as a routine message, friend',
      'Tucked inside are my sincere wishes for your happiness and good health',
    ],
  },
  {
    title: 'ताज़गी का वरदान',
    titleEnglish: 'Gift of Freshness',
    linesHindi: [
      'नई सुबह मतलब नए रंग, नई साँसें और नए अवसरों का खज़ाना',
      'ईश्वर से प्रार्थना है कि आज आपका हर पल खुशियों से सजे',
    ],
    linesHinglish: [
      'Nayi subah matlab naye rang, nayi saansein aur naye avsaron ka khazaana',
      'Ishwar se praarthna hai ki aaj aapka har pal khushiyon se saje',
    ],
    linesEnglish: [
      'A new morning means crisp breaths, bright hues, and fresh opportunities',
      'May every single hour today unfold adorned with genuine joy',
    ],
  },
  {
    title: 'व्यस्त दिन में ख़ुद का ख़्याल',
    titleEnglish: 'Wellness First',
    linesHindi: [
      'चाहे जितने भी बड़े काम करने हों आज, ख़ुद का ख़्याल सबसे पहले रखें',
      'आपकी मुस्कान और सेहत सलामत रहे तो हर दिन सुंदर है',
    ],
    linesHinglish: [
      'Chaahe jitne bhi bade kaam karne hon aaj, khud ka khayaal sabse pehle rakhein',
      'Aapki muskaan aur sehat salaamat rahe to har din sundar hai',
    ],
    linesEnglish: [
      'No matter how big today’s schedule runs, care gently for yourself first',
      'When your smile and health stay whole, every single day shines bright',
    ],
  },
  {
    title: 'सुनहरा आगाज़',
    titleEnglish: 'Golden Beginning',
    linesHindi: [
      'आसमान की लालिमा कह रही है कि अंधेरा अब पीछे छूट चुका है',
      'उत्साह के साथ नए दिन का हाथ थाम लीजिए, शुभ प्रभात',
    ],
    linesHinglish: [
      'Aasmaan ki laalima keh rahi hai ki andhera ab peechhe chhoot chuka hai',
      'Utsaah ke saath naye din ka haath thaam lijiye, shubh prabhaat',
    ],
    linesEnglish: [
      'Warm crimson light across the horizon announces night has passed',
      'Take hold of this brand-new day eagerly—a very good morning to you',
    ],
  },
  {
    title: 'सफलता की सुबह',
    titleEnglish: 'Morning of Success',
    linesHindi: [
      'मेहनत करने वालों के लिए हर सुबह एक नई मंज़िल की तरफ़ रास्ता खोलती है',
      'आज भी पूरे मन से जुड़िए, सफलता दूर नहीं है आपसे',
    ],
    linesHinglish: [
      'Mehnat karne waalon ke liye har subah ek nayi manzil ki taraf raasta kholti hai',
      'Aaj bhi poore man se judiye, safalta door nahin hai aapse',
    ],
    linesEnglish: [
      'For those who work steadily, every dawn opens doors toward new milestones',
      'Step into today wholeheartedly—success is standing closer than you think',
    ],
  },
  {
    title: 'शुभ दिन की कामना',
    titleEnglish: 'Wishing a Lovely Day',
    linesHindi: [
      'हर सुबह ईश्वर से बस इतनी सी अर्ज़ी रहती है आपके लिए',
      'जीवन में हमेशा उजाला रहे और चेहरे पर मुस्कान खिली रहे',
    ],
    linesHinglish: [
      'Har subah Ishwar se bas itni si arzi rehti hai aapke liye',
      'Jeevan mein hamesha ujaala rahe aur chehre par muskaan khili rahe',
    ],
    linesEnglish: [
      'Every morning starts with one warm wish sent softly your way',
      'May steady light fill your path and a real smile brighten your face',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'शांति और उमंग',
    titleEnglish: 'Peace and Spark',
    linesHindi: [
      'सुबह की हवा में एक अलग सा सुकून और नई उमंग बसती है',
      'खुलकर साँस लीजिए और आज के हर अच्छे पल को महसूस कीजिए',
    ],
    linesHinglish: [
      'Subah ki hawa mein ek alag sa sukoon aur nayi umang basti hai',
      'Khulkar saans lijiye aur aaj ke har acche pal ko mehsoos kijiye',
    ],
    linesEnglish: [
      'Early morning air carries a special blend of peace and fresh spark',
      'Breathe deeply and welcome every good moment coming your way today',
    ],
  },
  {
    title: 'अच्छी सोच का जादू',
    titleEnglish: 'Magic of Positive Thought',
    linesHindi: [
      'सुबह अगर एक सकारात्मक वाक्य पढ़कर दिन शुरू किया जाए',
      'तो मुश्किल घड़ियों में भी मन बिल्कुल शांत और मज़बूत रहता है',
    ],
    linesHinglish: [
      'Subah agar ek sakaaratmak vaakya padhkar din shuru kiya jaaye',
      'To mushkil ghadiyon mein bhi man bilkul shaant aur mazboot rehta hai',
    ],
    linesEnglish: [
      'When your morning begins with just one uplifting, hopeful line',
      'Even busy challenges feel surprisingly calm and manageable later on',
    ],
  },
  {
    title: 'चमकता हुआ सवेरा',
    titleEnglish: 'Luminous Dawn',
    linesHindi: [
      'ताज़े फूलों सी मुस्कान और सूरज जैसी ऊर्जा लेकर उठिए आज',
      'प्यारा सा शुभ प्रभात, आपका हर काम समय पर और उत्तम हो',
    ],
    linesHinglish: [
      'Taaze phoolon si muskaan aur sooraj jaisi oorja lekar uthiye aaj',
      'Pyaara sa shubh prabhaat, aapka har kaam samay par aur uttam ho',
    ],
    linesEnglish: [
      'Wake carrying a flower-fresh smile and steady sunrise energy today',
      'Warm good morning—may everything you handle turn out wonderfully',
    ],
  },
  {
    title: 'दिलों की मुस्कान',
    titleEnglish: 'Heartfelt Cheer',
    linesHindi: [
      'जिंदगी सिर्फ़ सांस लेने का नाम नहीं, खुश रहने का भी नाम है',
      'आज की सुबह अपने लिए और अपनों के लिए हँसी चुनिएगा',
    ],
    linesHinglish: [
      'Zindagi sirf saans lene ka naam nahin, khush rehne ka bhi naam hai',
      'Aaj ki subah apne liye aur apnon ke liye hansi chuniyega',
    ],
    linesEnglish: [
      'Living is never just ticking off hours—it is choosing joy along the way',
      'Pick warmth and easy laughter for yourself and your loved ones today',
    ],
  },
  {
    title: 'ताज़गी का संदेश',
    titleEnglish: 'Fresh Morning Greeting',
    linesHindi: [
      'नए दिन का सूरज आपके आँगन में नई उम्मीदों का दीप जलाए',
      'हर घड़ी सुखमय हो और कोई चिंता पास न आने पाए',
    ],
    linesHinglish: [
      'Naye din ka sooraj aapke aangan mein nayi ummeedon ka deep jalaaye',
      'Har ghadi sukhmaya ho aur koi chinta paas na aane paaye',
    ],
    linesEnglish: [
      'May today’s rising sun light fresh lamps of hope inside your courtyard',
      'May every hour feel peaceful and worries stay miles outside your door',
    ],
  },
  {
    title: 'सुकून भरा स्वागत',
    titleEnglish: 'Peaceful Welcome',
    linesHindi: [
      'सुबह वह पुल है जो रात के आराम को दिन के सपनों से जोड़ता है',
      'इस पुल पर मुस्कान और विश्वास के साथ कदम रखिए आज',
    ],
    linesHinglish: [
      'Subah wah pul hai jo raat ke aaraam ko din ke sapnon se jodta hai',
      'Is pul par muskaan aur vishwas ke saath qadam rakhiye aaj',
    ],
    linesEnglish: [
      'Morning is the gentle bridge linking restful sleep to waking dreams',
      'Step across it today wearing steady confidence and a warm smile',
    ],
  },
  {
    title: 'अपनों की दुआ साथ',
    titleEnglish: 'Loved Ones Blessings',
    linesHindi: [
      'घर से निकलते समय अपनों का प्यार सबसे बड़ा कवच होता है',
      'आज हर काम में सफलता मिले, यही मंगलमय शुभकामना है',
    ],
    linesHinglish: [
      'Ghar se nikalte samay apnon ka pyaar sabse bada kavach hota hai',
      'Aaj har kaam mein safalta mile, yahi mangalmay shubhkaamna hai',
    ],
    linesEnglish: [
      'Carrying your family’s warmth out the front door is the best armor alive',
      'Wishing bright success in everything you tackle today',
    ],
  },
  {
    title: 'सुंदर सोच का उपहार',
    titleEnglish: 'Gift of Good Thoughts',
    linesHindi: [
      'प्यार से बोलना और मुस्कुराकर मिलना हर दिन को सुंदर बना देता है',
      'आपको और आपके परिवार को बहुत-बहुत शुभ प्रभात',
    ],
    linesHinglish: [
      'Pyaar se bolna aur muskuraakar milna har din ko sundar bana deta hai',
      'Aapko aur aapke parivaar ko bahut-bahut shubh prabhaat',
    ],
    linesEnglish: [
      'Speaking gently and greeting people with warmth beautifies any morning',
      'Sending heartfelt good morning wishes to you and your dear family',
    ],
  },
  {
    title: 'नई रोशनी, नया दिन',
    titleEnglish: 'New Light New Day',
    linesHindi: [
      'सूरज के साथ आपकी उम्मीदें भी हर दिन नई ऊँचाइयों को छुएँ',
      'मन शांत रहे, सेहत उत्तम रहे और हर शाम मुस्कुराती मिले',
    ],
    linesHinglish: [
      'Sooraj ke saath aapki ummeedein bhi har din nayi oonchaaiyon ko chhooyein',
      'Man shaant rahe, sehat uttam rahe aur har shaam muskuraati mile',
    ],
    linesEnglish: [
      'Like the climbing sun, may your hopes soar to brighter heights today',
      'May your mind stay calm, your health strong, and every evening happy',
    ],
  },
  {
    title: 'दिल से गुड मॉर्निंग',
    titleEnglish: 'Warmest Good Morning',
    linesHindi: [
      'चाय की मिठास और सुबह की ताज़गी जैसी खुशियाँ मिलें आपको आज',
      'ज़िंदगी का हर पल शुभ हो — प्यारा सा गुड मॉर्निंग मेरे यार',
    ],
    linesHinglish: [
      'Chai ki mithaas aur subah ki taazgi jaisi khushiyaan milein aapko aaj',
      'Zindagi ka har pal shubh ho — pyaara sa good morning mere yaar',
    ],
    linesEnglish: [
      'May today bring you joys as sweet as chai and crisp as early dawn',
      'May every moment be blessed—a very warm good morning, my friend',
    ],
  },
];

export const UNIQUE_GOOD_MORNING_170 = buildUniqueShayaris(
  'good-morning',
  'Good Morning Shayari (गुड मॉर्निंग शायरी)',
  '🌅',
  31,
  GOOD_MORNING_ENTRIES
);
