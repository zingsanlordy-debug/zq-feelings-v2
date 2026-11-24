import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const MOTIVATIONAL_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'अँधेरे में अपना उजाला',
    titleEnglish: 'Your Own Light in Dark',
    linesHindi: [
      'मशाल लेकर कोई रास्ता दिखाने नहीं आएगा हर बार',
      'अँधेरी रात में अपने हौसले का चिराग़ खुद जलाना पड़ता है',
    ],
    linesHinglish: [
      'Mashaal lekar koi raasta dikhane nahin aayega har baar',
      'Andheri raat mein apne hausle ka chiraag khud jalaana padta hai',
    ],
    linesEnglish: [
      'Nobody arrives carrying a torch to light every turn for you',
      'In dark hours you kindle the lamp of your own courage',
    ],
  },
  {
    title: 'पसीने की सच्ची कीमत',
    titleEnglish: 'Value of Honest Sweat',
    linesHindi: [
      'जो धूप में तपकर रास्ता बनाता है अपने पैरों से',
      'एक दिन वही छाँव बनकर दूसरों को राह दिखाता है',
    ],
    linesHinglish: [
      'Jo dhoop mein tapkar raasta banaata hai apne pairon se',
      'Ek din wahi chhaanv bankar doosron ko raah dikhata hai',
    ],
    linesEnglish: [
      'Whoever endures the blazing sun to carve out their own trail',
      'Someday becomes shade guiding countless travelers behind',
    ],
  },
  {
    title: 'थककर रुकना मना है',
    titleEnglish: 'Keep Stepping Forward',
    linesHindi: [
      'क़दम छोटे हों तो क्या हुआ, चलते रहना ज़रूरी है',
      'पहाड़ की चोटी पर एक ही छलांग से कोई नहीं पहुँचता',
    ],
    linesHinglish: [
      'Kadam chhote hon to kya hua, chalte rehna zaroori hai',
      'Pahaad ki choti par ek hi chhalaang se koi nahin pahunchta',
    ],
    linesEnglish: [
      'So what if each step looks modest, keeping motion is key',
      'Nobody ever reaches a mountain summit in one single leap',
    ],
  },
  {
    title: 'बहानों से दूरी',
    titleEnglish: 'Letting Go of Excuses',
    linesHindi: [
      'बहाने बनाना आसान है जब रास्ता कठिन दिखता है',
      'इतिहास तो वही लिखते हैं जो मुश्किल में डटे रहते हैं',
    ],
    linesHinglish: [
      'Bahaane banana aasaan hai jab raasta kathin dikhta hai',
      'Itihaas to wahi likhte hain jo mushkil mein date rehte hain',
    ],
    linesEnglish: [
      'Excuses come easily whenever the hillside looks steep',
      'History remembers only those who held steady through the climb',
    ],
  },
  {
    title: 'खुद से मुकाबला',
    titleEnglish: 'Competing With Yesterday',
    linesHindi: [
      'दुनिया से आगे निकलने की दौड़ में मत उलझना कभी',
      'बस कल से थोड़ा बेहतर आज बन जाओ, यही असली जीत है',
    ],
    linesHinglish: [
      'Duniya se aage nikalne ki daud mein mat ulajhna kabhi',
      'Bas kal se thoda behtar aaj ban jaao, yahi asli jeet hai',
    ],
    linesEnglish: [
      'Never tangle yourself racing anxiously against the whole crowd',
      'Simply grow slightly wiser today than yesterday—that is victory',
    ],
  },
  {
    title: 'आलोचना से निखार',
    titleEnglish: 'Fuel From Criticism',
    linesHindi: [
      'लोगों के तानों से कभी अपना रास्ता मत मोड़ना दोस्त',
      'यही पत्थर इकट्ठे करके अपनी इमारत मज़बूत बना लेना',
    ],
    linesHinglish: [
      'Logon ke taanon se kabhi apna raasta mat modna dost',
      'Yahi patthar ikatthe karke apni imaarat mazboot bana lena',
    ],
    linesEnglish: [
      'Never bend off course because of careless jeers, my friend',
      'Gather every thrown stone to lay a firmer foundation beneath you',
    ],
  },
  {
    title: 'सुबह की पहली मेहनत',
    titleEnglish: 'Early Morning Discipline',
    linesHindi: [
      'आलस्य का कंबल हटाते ही आधी जंग जीत ली जाती है',
      'सुबह जल्दी उठने वालों के दिन ज़्यादा लंबे होते हैं',
    ],
    linesHinglish: [
      'Aalasya ka kambal hataate hi aadhi jang jeet li jaati hai',
      'Subah jaldi uthne waalon ke din zyada lambe hote hain',
    ],
    linesEnglish: [
      'Throwing off the blanket of laziness already wins half the day',
      'Those who greet early dawn earn extra hours ahead of all',
    ],
  },
  {
    title: 'गिरकर सँभलने का जज़्बा',
    titleEnglish: 'Rising Every Fall',
    linesHindi: [
      'घुटनों पर धूल लग जाए तो झाड़कर फिर खड़े हो जाओ',
      'ज़मीन पर गिरना हार नहीं, उठने से मना करना हार है',
    ],
    linesHinglish: [
      'Ghutnon par dhool lag jaaye to jhaadkar phir khade ho jaao',
      'Zameen par girna haar nahin, uthne se mana karna haar hai',
    ],
    linesEnglish: [
      'When dust clings to your knees, brush it off and stand tall again',
      'Stumbling down is never defeat; refusing to stand back up is',
    ],
  },
  {
    title: 'पक्का संकल्प',
    titleEnglish: 'Unbreakable Commitment',
    linesHindi: [
      'मन जब पूरी तरह ठान ले किसी काम को करने की',
      'तो बड़ी से बड़ी दीवार भी दरवाज़ा बन जाती है',
    ],
    linesHinglish: [
      'Man jab poori tarah thaan le kisi kaam ko karne ki',
      'To badi se badi deewar bhi darwaaza ban jaati hai',
    ],
    linesEnglish: [
      'When your spirit decides completely without looking back',
      'Even the tallest brick wall turns into an open doorway',
    ],
  },
  {
    title: 'अभ्यास का जादू',
    titleEnglish: 'Power of Daily Practice',
    linesHindi: [
      'एक ही दिन में कोई जादूगर या माहिर नहीं बनता यहाँ',
      'रोज़ की छोटी-छोटी कोशिशें ही चमत्कार रचती हैं',
    ],
    linesHinglish: [
      'Ek hi din mein koi jaadugar ya maahir nahin banta yahaan',
      'Roz ki chhoti-chhoti koshishein hi chamatkaar rachti hain',
    ],
    linesEnglish: [
      'Nobody turns into a master overnight in just a single day',
      'Small, faithful daily practice slowly crafts true wonders',
    ],
  },
  {
    title: 'साहसी कश्ती',
    titleEnglish: 'Brave Through Waves',
    linesHindi: [
      'किनारे पर बंधी कश्तियाँ सुरक्षित ज़रूर रहती हैं सदा',
      'पर समंदर की असल उड़ान तो लहरों के बीच होती है',
    ],
    linesHinglish: [
      'Kinaare par bandhi kashtiyan surakshit zaroor rehti hain sada',
      'Par samandar ki asal udaan to lehron ke beech hoti hai',
    ],
    linesEnglish: [
      'Boats tied tight to the harbor stay completely safe forever',
      'Yet real sailing begins only out amidst rising ocean swells',
    ],
  },
  {
    title: 'असफलता से दोस्ती',
    titleEnglish: 'Teacher Named Failure',
    linesHindi: [
      'हार से डरकर कोशिश ही छोड़ देना सबसे बड़ी ग़लती है',
      'हर नाकामी अगली जीत का सबसे सटीक नक़्शा दे जाती है',
    ],
    linesHinglish: [
      'Haar se darkar koshish hi chhod dena sabse badi galti hai',
      'Har naakaami agli jeet ka sabse sateek naqsha de jaati hai',
    ],
    linesEnglish: [
      'Quitting out of fear of failure is the gravest mistake',
      'Every setback hands you the sharpest map toward your next win',
    ],
  },
  {
    title: 'ज़िम्मेदारी का ताज',
    titleEnglish: 'Owning Your Path',
    linesHindi: [
      'अपनी ज़िंदगी की पतंग की डोर खुद थामकर रखो',
      'हवा चाहे जैसी भी चले, उड़ान तुम्हारे हाथ रहेगी',
    ],
    linesHinglish: [
      'Apni zindagi ki patang ki dor khud thaamkar rakho',
      'Hawa chaahe jaisi bhi chale, udaan tumhaare haath rahegi',
    ],
    linesEnglish: [
      'Keep firm hold of the string flying the kite of your own life',
      'Whichever way gusts blow, the flight stays under your hand',
    ],
  },
  {
    title: 'सपनों के प्रति ईमानदारी',
    titleEnglish: 'Faithful to Your Vision',
    linesHindi: [
      'ख़्वाब देखना तभी सार्थक होता है इस दुनिया में',
      'जब उन्हें पूरा करने के लिए आज मेहनत की जाए',
    ],
    linesHinglish: [
      'Khwaab dekhna tabhi saarthak hota hai is duniya mein',
      'Jab unhein poora karne ke liye aaj mehnat ki jaaye',
    ],
    linesEnglish: [
      'Dreaming big only carries meaning when paired with today',
      'Wake up and put real effort behind each hope you carry',
    ],
  },
  {
    title: 'मुश्किल दौर की ताक़त',
    titleEnglish: 'Forged in Hardship',
    linesHindi: [
      'लोहा भी भट्टी में तपकर ही मजबूत औज़ार बनता है',
      'कठिन दिनों से घबराओ मत, ये तुम्हें तराश रहे हैं',
    ],
    linesHinglish: [
      'Loha bhi bhatti mein tapkar hi mazboot auzaar banta hai',
      'Kathin dinon se ghabrao mat, ye tumhein taraash rahe hain',
    ],
    linesEnglish: [
      'Even raw iron enters the furnace before turning into steel',
      'Never fear hard chapters—they are shaping your edge sharp',
    ],
  },
  {
    title: 'ख़ामोश संकल्प',
    titleEnglish: 'Quiet Dedication',
    linesHindi: [
      'अपने इरादों का शोर बाज़ार में मत मचाओ हर रोज़',
      'चुपचाप काम करते रहो, नतीजा खुद गूँज उठेगा',
    ],
    linesHinglish: [
      'Apne iraadon ka shor baazaar mein mat machao har roz',
      'Chupchaap kaam karte raho, nateeja khud goonj uthega',
    ],
    linesEnglish: [
      'Do not broadcast every plan down the crowded street daily',
      'Work quietly, and results will echo louder than any boast',
    ],
  },
  {
    title: 'डर के पार जीत',
    titleEnglish: 'Courage Beyond Fear',
    linesHindi: [
      'डर सिर्फ़ पहली सीढ़ी पर पैर रखने तक ही सताता है',
      'कदम बढ़ाते ही रास्ता खुद साफ दिखने लगता है',
    ],
    linesHinglish: [
      'Dar sirf pehli seedhi par pair rakhne tak hi sataata hai',
      'Kadam badhate hi raasta khud saaf dikhne lagta hai',
    ],
    linesEnglish: [
      'Fear only whispers loudest right before you take step one',
      'The second your foot moves forward, the way opens clear',
    ],
  },
  {
    title: 'अनुशासन की चाबी',
    titleEnglish: 'Power of Consistency',
    linesHindi: [
      'जोश दो दिन रहता है और फिर ठंडा पड़ जाता है',
      'पर अनुशासन तुम्हें साल भर आगे बढ़ाता रहता है',
    ],
    linesHinglish: [
      'Josh do din rehta hai aur phir thanda pad jaata hai',
      'Par anushaasan tumhein saal bhar aage badhata rehta hai',
    ],
    linesEnglish: [
      'Wild excitement burns bright for two days and cools fast',
      'Steady discipline carries you steadily through all seasons',
    ],
  },
  {
    title: 'हर दिन नया पन्ना',
    titleEnglish: 'Fresh Start Every Morning',
    linesHindi: [
      'कल की थकान और हार को रात के अंधेरे में छोड़ दो',
      'आज सूरज उगा है, फिर से पूरी ताक़त से जुट जाओ',
    ],
    linesHinglish: [
      'Kal ki thakaan aur haar ko raat ke andhere mein chhod do',
      'Aaj sooraj uga hai, phir se poori taaqat se jut jaao',
    ],
    linesEnglish: [
      'Leave yesterdays exhaustion inside the fading dark behind',
      'The sun rose again today—step forward with full heart',
    ],
  },
  {
    title: 'मंज़िल की प्यास',
    titleEnglish: 'Thirst for Greatness',
    linesHindi: [
      'जब आराम से ज़्यादा प्यारी अपनी मंज़िल लगने लगे',
      'तो समझ लेना अब कामयाबी ज़्यादा दूर नहीं है',
    ],
    linesHinglish: [
      'Jab aaraam se zyada pyaari apni manzil lagne lage',
      'To samajh lena ab kaamyaabi zyada door nahin hai',
    ],
    linesEnglish: [
      'When your goal feels dearer than comfortable ease',
      'Know for certain that success stands right around the bend',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'ताक़तवर सोच',
    titleEnglish: 'Power of Mindset',
    linesHindi: [
      'इंसान पहले अपने दिमाग़ में जीतता या हारता है',
      'सोच को ऊँचा रखो, कदम खुद-ब-खुद ऊँचाई पा लेंगे',
    ],
    linesHinglish: [
      'Insaan pehle apne dimaag mein jeetta ya haarta hai',
      'Soch ko ooncha rakho, kadam khud-ba-khud oonchaai paa lenge',
    ],
    linesEnglish: [
      'Every battle is won or lost first inside your own mindset',
      'Lift your thinking tall, and your footsteps climb to match',
    ],
  },
  {
    title: 'समय का सही उपयोग',
    titleEnglish: 'Respecting Every Hour',
    linesHindi: [
      'जो मिनट आज फालतू बातों में खर्च कर रहे हो तुम',
      'कल वही वक़्त तुम्हारे सपनों के काम आ सकता है',
    ],
    linesHinglish: [
      'Jo minute aaj faaltu baaton mein kharch kar rahe ho tum',
      'Kal wahi waqt tumhaare sapnon ke kaam aa sakta hai',
    ],
    linesEnglish: [
      'The scattered minutes wasted carelessly right now',
      'Could build the very dream you crave by next year',
    ],
  },
  {
    title: 'टूटे पंखों से भी उड़ान',
    titleEnglish: 'Rising Against Odds',
    linesHindi: [
      'सुविधाएँ कम हों तब भी इरादे बड़े हो सकते हैं',
      'छोटे घरों से ही अक्सर सबसे बड़ी कहानियाँ निकलती हैं',
    ],
    linesHinglish: [
      'Suvidhaayein kam hon tab bhi iraade bade ho sakte hain',
      'Chhote gharon se hi aksar sabse badi kahaaniyan nikalti hain',
    ],
    linesEnglish: [
      'Even with modest means, your determination can tower high',
      'Some of the grandest stories rise out of the humblest homes',
    ],
  },
  {
    title: 'सीखने की विनम्रता',
    titleEnglish: 'Humility to Learn',
    linesHindi: [
      'सब कुछ जान लेने का घमंड प्रगति को रोक देता है',
      'हमेशा एक विद्यार्थी बने रहो, तभी आगे बढ़ोगे',
    ],
    linesHinglish: [
      'Sab kuch jaan lene ka ghamand pragati ko rok deta hai',
      'Hamesha ek vidyaarthi bane raho, tabhi aage badhoge',
    ],
    linesEnglish: [
      'Assuming you already know everything halts every step forward',
      'Stay an eager learner forever, and growth never stops',
    ],
  },
  {
    title: 'एकाग्रता की शक्ति',
    titleEnglish: 'Laser Focus',
    linesHindi: [
      'सूरज की किरणें भी एक जगह टिकें तो आग लगा देती हैं',
      'अपने ध्यान को एक लक्ष्य पर केंद्रित करके देखो',
    ],
    linesHinglish: [
      'Sooraj ki kirnein bhi ek jagah tikein to aag laga deti hain',
      'Apne dhyaan ko ek lakshya par kendrit karke dekho',
    ],
    linesEnglish: [
      'Even scattered sunbeams spark fire once focused on one spot',
      'Gather your attention firmly on one clear goal and watch',
    ],
  },
  {
    title: 'आख़िरी मील की दौड़',
    titleEnglish: 'Final Stretch Grit',
    linesHindi: [
      'जब सब थककर बैठ जाएँ रास्ते के आख़िरी मोड़ पर',
      'बस दो कदम और बढ़ जाना तुम्हें विजेता बना देगा',
    ],
    linesHinglish: [
      'Jab sab thakkar baith jaayein raaste ke aakhiri mod par',
      'Bas do kadam aur badh jaana tumhein vijeta bana dega',
    ],
    linesEnglish: [
      'When the rest sit down exhausted just short of the crest',
      'Taking two steady extra steps crowns you the winner',
    ],
  },
  {
    title: 'सच्ची निष्ठा',
    titleEnglish: 'Sincerity in Work',
    linesHindi: [
      'छोटा हो या बड़ा, हर काम को पूरी इज़्ज़त से करो',
      'ईमानदार काम ही इंसान को भीड़ से अलग पहचान देता है',
    ],
    linesHinglish: [
      'Chhota ho ya bada, har kaam ko poori izzat se karo',
      'Imaandaar kaam hi insaan ko bheed se alag pehchaan deta hai',
    ],
    linesEnglish: [
      'Whether humble or grand, honor every task you touch',
      'Honest craftsmanship sets anyone effortlessly apart from the crowd',
    ],
  },
  {
    title: 'खुद पर यक़ीन',
    titleEnglish: 'Unshakable Self-Belief',
    linesHindi: [
      'अगर दुनिया को तुम पर भरोसा नहीं तो कोई बात नहीं',
      'जब तक खुद को खुद पर यक़ीन है, खेल तुम्हारे हाथ है',
    ],
    linesHinglish: [
      'Agar duniya ko tum par bharosa nahin to koi baat nahin',
      'Jab tak khud ko khud par yaqeen hai, khel tumhaare haath hai',
    ],
    linesEnglish: [
      'If others doubt what you can accomplish, let them watch',
      'As long as you believe in yourself, the game remains yours',
    ],
  },
  {
    title: 'मुश्किलों से निडर',
    titleEnglish: 'Fearless Through Storms',
    linesHindi: [
      'तेज़ बारिश से बाज़ कभी घोसले में नहीं छुपता है',
      'वो बादलों के ऊपर उड़कर तूफ़ान को चुनौती देता है',
    ],
    linesHinglish: [
      'Tez baarish se baaz kabhi ghonsle mein nahin chhupta hai',
      'Wo baadalon ke upar udkar toofaan ko chunauti deta hai',
    ],
    linesEnglish: [
      'A hawk never hides trembling inside a nest during storms',
      'It climbs straight above dark clouds and rides the wind',
    ],
  },
  {
    title: 'निरंतर प्रयास',
    titleEnglish: 'Steady Persistence',
    linesHindi: [
      'पेड़ एक दिन में सौ फीट ऊँचा नहीं खड़ा हो जाता',
      'हर दिन थोड़ा-थोड़ा पानी ही उसे विशाल बनाता है',
    ],
    linesHinglish: [
      'Ped ek din mein sau feet ooncha nahin khada ho jaata',
      'Har din thoda-thoda paani hi use vishaal banaata hai',
    ],
    linesEnglish: [
      'A mighty oak never shoots a hundred feet high overnight',
      'Daily drops of steady care raise it tall toward the sky',
    ],
  },
  {
    title: 'सकारात्मक बदलाव',
    titleEnglish: 'Changing Yourself First',
    linesHindi: [
      'दुनिया बदलने का इंतज़ार करते वक़्त मत बर्बाद करो',
      'अपनी एक बुरी आदत बदलते ही जीवन बदलने लगता है',
    ],
    linesHinglish: [
      'Duniya badalne ka intezaar karte waqt mat barbaad karo',
      'Apni ek buri aadat badalte hi jeevan badalne lagta hai',
    ],
    linesEnglish: [
      'Stop wasting years waiting for the outside world to fix itself',
      'Mend one stubborn daily habit, and your whole path transforms',
    ],
  },
  {
    title: 'थकान के पार सुकून',
    titleEnglish: 'Pride Beyond Sweat',
    linesHindi: [
      'आज का दर्द कल तुम्हारी सबसे बड़ी ताक़त बनेगा',
      'अभी जो मेहनत कर रहे हो, कल वही गर्व दिलाएगा',
    ],
    linesHinglish: [
      'Aaj ka dard kal tumhaari sabse badi taaqat banega',
      'Abhi jo mehnat kar rahe ho, kal wahi garv dilaayega',
    ],
    linesEnglish: [
      'Todays strain becomes tomorrows quiet backbone of strength',
      'Every tired hour invested right now earns pride ahead',
    ],
  },
  {
    title: 'नए रास्ते की हिम्मत',
    titleEnglish: 'Blazing Your Own Trail',
    linesHindi: [
      'बनी-बनाई लीक पर चलना बहुत सुरक्षित लगता है सबको',
      'पर नई पगडंडी बनाने वालों के नाम ही याद रखे जाते हैं',
    ],
    linesHinglish: [
      'Bani-banaai leek par chalna bahut surakshit lagta hai sabko',
      'Par nayi pagdandi banaane waalon ke naam hi yaad rakhe jaate hain',
    ],
    linesEnglish: [
      'Treading well-worn ruts always feels cozy and predictable',
      'Yet history honors those bold enough to cut a fresh path',
    ],
  },
  {
    title: 'असली कामयाबी',
    titleEnglish: 'Meaningful Success',
    linesHindi: [
      'सिर्फ़ पैसा जोड़ लेना ही बड़ी सफलता नहीं कहलाती',
      'असली जीत तब है जब तुम किसी के काम आ सको',
    ],
    linesHinglish: [
      'Sirf paisa jod lena hi badi safalta nahin kehlaati',
      'Asli jeet tab hai jab tum kisi ke kaam aa sako',
    ],
    linesEnglish: [
      'Stacking coins alone never measures genuine success',
      'True greatness shines when your climb lifts others upward too',
    ],
  },
  {
    title: 'शांत मन की ताक़त',
    titleEnglish: 'Strength in Composure',
    linesHindi: [
      'गुस्से में लिया गया फ़ैसला अक्सर नुकसान देता है',
      'शांत दिमाग़ से सोचा हर कदम कामयाबी की नींव रखता है',
    ],
    linesHinglish: [
      'Gusse mein liya gaya faisla aksar nuksaan deta hai',
      'Shaant dimaag se socha har kadam kaamyaabi ki neenv rakhta hai',
    ],
    linesEnglish: [
      'Decisions snapped out in anger rarely build lasting ground',
      'Calm, measured steps lay the strongest foundation for triumph',
    ],
  },
  {
    title: 'अधूरा काम पूरा करना',
    titleEnglish: 'Finishing What You Start',
    linesHindi: [
      'शुरुआत तो हर कोई बड़े जोश के साथ कर लेता है',
      'असली फ़र्क़ अंत तक टिके रहने वाले लोग पैदा करते हैं',
    ],
    linesHinglish: [
      'Shuruaat to har koi bade josh ke saath kar leta hai',
      'Asli farq ant tak tike rehne waale log paida karte hain',
    ],
    linesEnglish: [
      'Anybody can begin enthusiastically on day one',
      'Real change comes from those steady few who see it through',
    ],
  },
  {
    title: 'मुश्किल सवाल से प्यार',
    titleEnglish: 'Welcoming Hard Challenges',
    linesHindi: [
      'सरल राहें कभी हमें अपनी असली ताक़त नहीं दिखातीं',
      'बड़ी चुनौती सामने आते ही भीतर का योद्धा जागता है',
    ],
    linesHinglish: [
      'Saral raahein kabhi humein apni asli taaqat nahin dikhateen',
      'Badi chunauti saamne aate hi bheetar ka yoddha jaagta hai',
    ],
    linesEnglish: [
      'Easy tasks never reveal how much power sleeps inside us',
      'A towering challenge wakes up the quiet warrior within',
    ],
  },
  {
    title: 'भीतर की आग',
    titleEnglish: 'Steady Inner Flame',
    linesHindi: [
      'दूसरों के ताली बजाने से चलने वाला जोश अस्थायी है',
      'अंदर से जलने वाली आग ही तुम्हें मंज़िल तक ले जाएगी',
    ],
    linesHinglish: [
      'Doosron ke taali bajaane se chalne wala josh asthaayi hai',
      'Andar se jalne waali aag hi tumhein manzil tak le jaayegi',
    ],
    linesEnglish: [
      'Drive fueled only by outside applause fizzles quickly',
      'A quiet fire lit inside your chest carries you home',
    ],
  },
  {
    title: 'ज़िद और जूनून',
    titleEnglish: 'Grit and Passion',
    linesHindi: [
      'जहाँ रास्ते ख़त्म हो जाते हैं आम लोगों के लिए',
      'जूनून वाले मुसाफ़िर वहीं से नई राह बना देते हैं',
    ],
    linesHinglish: [
      'Jahaan raaste khatam ho jaate hain aam logon ke liye',
      'Junoon waale musaafir wahin se nayi raah bana dete hain',
    ],
    linesEnglish: [
      'Right where ordinary travelers turn back saying the road ended',
      'Passionate souls build a brand new trail forward',
    ],
  },
  {
    title: 'धैर्यवान विजेता',
    titleEnglish: 'Patient Winner',
    linesHindi: [
      'नदी धीरे-धीरे बहकर भी समंदर से मिल ही जाती है',
      'बस रुकना मत, एक दिन तुम्हारा वक़्त भी ज़रूर आएगा',
    ],
    linesHinglish: [
      'Nadi dheere-dheere behkar bhi samandar se mil hi jaati hai',
      'Bas rukna mat, ek din tumhaara waqt bhi zaroor aayega',
    ],
    linesEnglish: [
      'Even a gentle river reaches the vast ocean over steady miles',
      'Simply keep flowing—your hour of arrival will surely come',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'सोच का दायरा',
    titleEnglish: 'Expanding Horizons',
    linesHindi: [
      'अपने डर से बड़ी अपनी उम्मीद को बनाकर रखो हमेशा',
      'आसमान कभी छोटे पंखों से नाराज़ नहीं होता है',
    ],
    linesHinglish: [
      'Apne dar se badi apni ummeed ko banaakar rakho hamesha',
      'Aasmaan kabhi chhote pankhon se naaraaz nahin hota hai',
    ],
    linesEnglish: [
      'Always keep your hopes taller than your lingering doubts',
      'The wide sky never shuts its doors to modest wings',
    ],
  },
  {
    title: 'कठिन निर्णय का साहस',
    titleEnglish: 'Brave Choices',
    linesHindi: [
      'सुखद झूठ से ज़्यादा ज़रूरी है कड़वा सच स्वीकारना',
      'बड़े फ़ैसले ही बड़े जीवन की नींव रखा करते हैं',
    ],
    linesHinglish: [
      'Sukhad jhooth se zyada zaroori hai kadwa sach sweekarna',
      'Bade faisle hi bade jeevan ki neenv rakha karte hain',
    ],
    linesEnglish: [
      'Facing a tough truth matters far more than soothing comfort',
      'Courageous decisions build the ground for extraordinary lives',
    ],
  },
  {
    title: 'लक्ष्य पर नज़र',
    titleEnglish: 'Eyes on the Horizon',
    linesHindi: [
      'रास्ते के कंकड़ों को देखकर चाल धीमी मत कर लेना',
      'नज़रें हमेशा सामने की ऊँची चोटी पर टिकी रहनी चाहिए',
    ],
    linesHinglish: [
      'Raaste ke kankadon ko dekhkar chaal dheemi mat kar lena',
      'Nazrein hamesha saamne ki oonchi choti par tiki rehni chahiye',
    ],
    linesEnglish: [
      'Never slow your stride staring down at small pebbles underfoot',
      'Keep your eyes lifted steadily toward the summit ahead',
    ],
  },
  {
    title: 'हार से बड़ा हौसला',
    titleEnglish: 'Bigger Than Setbacks',
    linesHindi: [
      'कोई एक असफलता तुम्हारी पूरी काबिलियत तय नहीं करती',
      'उठो, ग़लती सुधारो और नए जोश से मैदान में उतरो',
    ],
    linesHinglish: [
      'Koi ek asafalta tumhaari poori qaabiliyat tay nahin karti',
      'Utho, galti sudhaaro aur naye josh se maidaan mein utaro',
    ],
    linesEnglish: [
      'One rough chapter never defines the limit of your capability',
      'Stand up, refine your aim, and step back onto the field',
    ],
  },
  {
    title: 'नए कौशल की ताकत',
    titleEnglish: 'Sharpening Your Tools',
    linesHindi: [
      'हर दिन अपने हुनर में एक नया पन्ना जोड़ते चलो',
      'कल की दुनिया उन्हीं की होगी जो आज सीख रहे हैं',
    ],
    linesHinglish: [
      'Har din apne hunar mein ek naya panna jodte chalo',
      'Kal ki duniya unhi ki hogi jo aaj seekh rahe hain',
    ],
    linesEnglish: [
      'Add one fresh skill or insight to your craft every day',
      'Tomorrow belongs naturally to those eager to learn today',
    ],
  },
  {
    title: 'शोर से दूर काम',
    titleEnglish: 'Deep Focused Effort',
    linesHindi: [
      'भीड़ की तालियों से ज़्यादा ज़रूरी है काम की सफ़ाई',
      'गुणवत्ता ही आख़िरकार हर मैदान जीतती है',
    ],
    linesHinglish: [
      'Bheed ki taaliyon se zyada zaroori hai kaam ki safaai',
      'Gunvatta hi aakhirkaar har maidaan jeetti hai',
    ],
    linesEnglish: [
      'Careful excellence outlasts fleeting cheers from the gallery',
      'True quality inevitably wins every field over time',
    ],
  },
  {
    title: 'अंदर की ताक़त',
    titleEnglish: 'Quiet Power Inside',
    linesHindi: [
      'जब दुनिया तुम्हें कमजोर समझे तो मुस्कुरा देना बस',
      'क्योंकि तुम्हारी असली ताकत तुम्हारी मेहनत जानती है',
    ],
    linesHinglish: [
      'Jab duniya tumhein kamzor samjhe to muskura dena bas',
      'Kyunki tumhaari asli taaqat tumhaari mehnat jaanti hai',
    ],
    linesEnglish: [
      'When others underestimate your reach, simply smile quietly',
      'Only your own sweat knows how far your roots reach deep',
    ],
  },
  {
    title: 'मज़बूत इरादे का फल',
    titleEnglish: 'Fruit of Firm Will',
    linesHindi: [
      'चट्टान कितनी भी सख़्त हो, झुकती ज़रूर है मेहनत के आगे',
      'बस हथौड़ी की चोट लगातार पड़ती रहनी चाहिए',
    ],
    linesHinglish: [
      'Chattan kitni bhi sakht ho, jhukti zaroor hai mehnat ke aage',
      'Bas hathaudi ki chot lagaataar padti rehni chahiye',
    ],
    linesEnglish: [
      'However stubborn the stone, it splits before steady effort',
      'Just keep delivering calm, faithful strikes day after day',
    ],
  },
  {
    title: 'कमज़ोरी पर जीत',
    titleEnglish: 'Conquering Yourself',
    linesHindi: [
      'दुनिया को जीतना तो फिर भी आसान काम है यारो',
      'असली वीरता अपने आलस्य और डर को हराने में है',
    ],
    linesHinglish: [
      'Duniya ko jeetna to phir bhi aasaan kaam hai yaaro',
      'Asli veerta apne aalasya aur dar ko haraane mein hai',
    ],
    linesEnglish: [
      'Winning applause out in the world is far easier than this',
      'True courage lies in defeating your own doubt and delay',
    ],
  },
  {
    title: 'मुश्किल राह का मज़ा',
    titleEnglish: 'Joy of Steep Trails',
    linesHindi: [
      'चढ़ाई पर हाँफना बताता है कि तुम ऊपर बढ़ रहे हो',
      'नीचे लुढ़कने में तो कोई ज़ोर ही नहीं लगता',
    ],
    linesHinglish: [
      'Chadhai par haanphna bataata hai ki tum upar badh rahe ho',
      'Neeche ludhakne mein to koi zor hi nahin lagta',
    ],
    linesEnglish: [
      'Feeling breathless on the climb proves you are gaining altitude',
      'Sliding downhill takes zero strength at all',
    ],
  },
  {
    title: 'हर ठोकर से सबक़',
    titleEnglish: 'Wisdom From Every Stumble',
    linesHindi: [
      'जहाँ एक बार पैर फिसले, वहाँ से रास्ता समझ आता है',
      'अनुभव से बड़ा कोई मार्गदर्शक नहीं मिलता जीवन में',
    ],
    linesHinglish: [
      'Jahaan ek baar pair phisle, wahaan se raasta samajh aata hai',
      'Anubhav se bada koi maargdarshak nahin milta jeevan mein',
    ],
    linesEnglish: [
      'Wherever your boots slipped once teaches you the terrain ahead',
      'No finer guide walks beside you than lived experience',
    ],
  },
  {
    title: 'सच्ची लगन',
    titleEnglish: 'Pure Dedication',
    linesHindi: [
      'बिना दिल लगाए किया काम बोझ सा लगता है हर पल',
      'लगन जुड़ते ही वही मेहनत खेल बन जाती है',
    ],
    linesHinglish: [
      'Bina dil lagaaye kiya kaam bojh sa lagta hai har pal',
      'Lagan judte hi wahi mehnat khel ban jaati hai',
    ],
    linesEnglish: [
      'Work done without heart feels heavier with every hour',
      'Add sincere passion, and hard labor turns into joyful craft',
    ],
  },
  {
    title: 'उम्मीद की मशाल',
    titleEnglish: 'Torch of Tomorrow',
    linesHindi: [
      'चाहे कितनी भी आंधियाँ बुझाने आएँ तुम्हारे चिराग़ को',
      'दोनों हाथों से आड़ बनकर रोशनी बचाए रखना',
    ],
    linesHinglish: [
      'Chaahe kitni bhi aandhiyan bujhaane aayein tumhaare chiraag ko',
      'Dono haathon se aad bankar roshni bachaaye rakhna',
    ],
    linesEnglish: [
      'No matter how fiercely gales rush to snuff out your flame',
      'Cup both hands gently around it and keep the light alive',
    ],
  },
  {
    title: 'नए शिखर की ओर',
    titleEnglish: 'Toward Higher Peaks',
    linesHindi: [
      'एक छोटी जीत पर रुककर आराम मत कर लेना बहुत देर',
      'तुम्हारे पंखों में इससे भी ऊँची उड़ान बाकी है अभी',
    ],
    linesHinglish: [
      'Ek chhoti jeet par rukkar aaraam mat kar lena bahut der',
      'Tumhaare pankhon mein isse bhi oonchi udaan baaki hai abhi',
    ],
    linesEnglish: [
      'Do not settle too long after conquering your first hill',
      'Far higher skies still await the stretch of your wings',
    ],
  },
  {
    title: 'ईमानदार प्रयास',
    titleEnglish: 'Effort With Integrity',
    linesHindi: [
      'रात को चैन की नींद तभी आती है इंसान को',
      'जब दिन भर अपने लक्ष्य के प्रति ईमानदार रहा हो',
    ],
    linesHinglish: [
      'Raat ko chain ki neend tabhi aati hai insaan ko',
      'Jab din bhar apne lakshya ke prati imaandaar raha ho',
    ],
    linesEnglish: [
      'Peaceful sleep visits easily at night only when',
      'You stayed faithful to your goals throughout the daylight hours',
    ],
  },
  {
    title: 'ख़ुद का निर्माण',
    titleEnglish: 'Building Yourself Up',
    linesHindi: [
      'दूसरों की कमियाँ गिनने से अपना क़द नहीं बढ़ता कभी',
      'खुद को बेहतर बनाने में ही सारी ऊर्जा लगा दो',
    ],
    linesHinglish: [
      'Doosron ki kamiyan ginne se apna qad nahin badhta kabhi',
      'Khud ko behtar banaane mein hi saari oorja laga do',
    ],
    linesEnglish: [
      'Counting flaws in others never adds an inch to your height',
      'Pour all that quiet energy into sharpening your own path',
    ],
  },
  {
    title: 'समय का सम्मान',
    titleEnglish: 'Honoring Now',
    linesHindi: [
      'कल से शुरू करूँगा कहना सबसे मीठा ज़हर है मन का',
      'जो भी बड़ा काम करना है, उसकी नींव आज ही रखो',
    ],
    linesHinglish: [
      'Kal se shuru karoonga kehna sabse meetha zehar hai man ka',
      'Jo bhi bada kaam karna hai, uski neenv aaj hi rakho',
    ],
    linesEnglish: [
      'Promising I will start tomorrow is minds sweetest trap',
      'Lay the very first brick of every worthy goal today',
    ],
  },
  {
    title: 'अधूरे डर से पार',
    titleEnglish: 'Stepping Past Doubt',
    linesHindi: [
      'क्या होगा अगर हार गए, इस सवाल से मत डरो',
      'सोचो क्या कमाल होगा अगर तुम जीत गए तो',
    ],
    linesHinglish: [
      'Kya hoga agar haar gaye, is sawaal se mat daro',
      'Socho kya kamaal hoga agar tum jeet gaye to',
    ],
    linesEnglish: [
      'Stop shrinking back asking what happens if things fail',
      'Picture how extraordinary tomorrow looks when you prevail',
    ],
  },
  {
    title: 'साहस की पहचान',
    titleEnglish: 'Quiet Courage',
    linesHindi: [
      'बहादुर वो नहीं होता जिसे कभी डर न लगा हो',
      'असली बहादुर वो है जो डर के बावजूद आगे बढ़े',
    ],
    linesHinglish: [
      'Bahaadur wo nahin hota jise kabhi dar na laga ho',
      'Asli bahaadur wo hai jo dar ke baawajood aage badhe',
    ],
    linesEnglish: [
      'Brave is not someone who never once felt trembling fear',
      'True courage belongs to those who step forward anyway',
    ],
  },
  {
    title: 'निरंतर निखार',
    titleEnglish: 'Refining Every Day',
    linesHindi: [
      'हर दिन एक प्रतिशत बेहतर होना भी साल भर में',
      'इंसान की पूरी तस्वीर बदलकर रख देता है',
    ],
    linesHinglish: [
      'Har din ek pratishat behtar hona bhi saal bhar mein',
      'Insaan ki poori tasveer badalkar rakh deta hai',
    ],
    linesEnglish: [
      'Improving by even one quiet percent every single day',
      'Transforms an entire life completely within a year',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'लक्ष्य की ओर धैर्य',
    titleEnglish: 'Patiently Persistent',
    linesHindi: [
      'जल्दी मिलने वाली चीज़ों की चमक जल्दी उतरती है',
      'मेहनत और धैर्य से पाई मंज़िल उम्र भर चमकती है',
    ],
    linesHinglish: [
      'Jaldi milne waali cheezon ki chamak jaldi utarti hai',
      'Mehnat aur dhairya se paai manzil umar bhar chamakti hai',
    ],
    linesEnglish: [
      'Shortcuts fade quickly beneath the first real test',
      'Heights reached with steady grit shine throughout a lifetime',
    ],
  },
  {
    title: 'चुनौती को सलाम',
    titleEnglish: 'Meeting Every Test',
    linesHindi: [
      'ज़िंदगी जब कठिन इम्तहान सामने रख दे अचानक',
      'तो समझना वो तुम्हें अगले स्तर के लिए तैयार कर रही है',
    ],
    linesHinglish: [
      'Zindagi jab kathin imtihaan saamne rakh de achanak',
      'To samajhna wo tumhein agle star ke liye taiyaar kar rahi hai',
    ],
    linesEnglish: [
      'When life suddenly places an uphill exam in front of you',
      'Recognize it is training your shoulders for the next level',
    ],
  },
  {
    title: 'सकारात्मक संगत',
    titleEnglish: 'Surroundings Matter',
    linesHindi: [
      'उन लोगों के करीब रहो जो तुम्हारे सपनों को पंख दें',
      'नीचे खींचने वाली बातों से हमेशा किनारा कर लो',
    ],
    linesHinglish: [
      'Un logon ke kareeb raho jo tumhaare sapnon ko pankh dein',
      'Neeche kheenchne waali baaton se hamesha kinaara kar lo',
    ],
    linesEnglish: [
      'Stay close to people who hand wings to your honest dreams',
      'Step gently away from voices eager only to pull you down',
    ],
  },
  {
    title: 'विश्वास की जड़ें',
    titleEnglish: 'Deep Rooted Faith',
    linesHindi: [
      'असफलता की आंधी पत्तों को उड़ा सकती है ज़रूर',
      'पर जड़ें गहरी हों तो नया वसंत फिर खिल उठता है',
    ],
    linesHinglish: [
      'Asafalta ki aandhi patton ko uda sakti hai zaroor',
      'Par jadein gehri hon to naya vasant phir khil uthta hai',
    ],
    linesEnglish: [
      'Gales of disappointment may strip away a few loose leaves',
      'Yet when roots hold firm, fresh spring always returns',
    ],
  },
  {
    title: 'मज़बूत कदमताल',
    titleEnglish: 'Steady Stride',
    linesHindi: [
      'तेज़ भागकर बीच रास्ते में हाँफ जाने से अच्छा है',
      'सधी हुई रफ़्तार से मंज़िल तक लगातार बढ़ते रहना',
    ],
    linesHinglish: [
      'Tez bhaagkar beech raaste mein haanph jaane se accha hai',
      'Sadhi hui raftaar se manzil tak lagaataar badhte rehna',
    ],
    linesEnglish: [
      'Better than sprinting wildly only to burn out halfway',
      'Is marching onward at a steady rhythm all the way home',
    ],
  },
  {
    title: 'अवसर की पहचान',
    titleEnglish: 'Spotting Hidden Doors',
    linesHindi: [
      'हर समस्या अपने साथ एक नया समाधान छुपाकर लाती है',
      'बस घबराने की जगह शांत होकर देखने की नज़र चाहिए',
    ],
    linesHinglish: [
      'Har samasya apne saath ek naya samaadhaan chhupaakar laati hai',
      'Bas ghabrane ki jagah shaant hokar dekhne ki nazar chahiye',
    ],
    linesEnglish: [
      'Every tangled problem carries a hidden seed of opportunity',
      'It only waits for calm eyes instead of panicked haste',
    ],
  },
  {
    title: 'अपनी कहानी के नायक',
    titleEnglish: 'Author of Your Own Tale',
    linesHindi: [
      'किसी मसीहा के आने की राह देखते मत बैठे रहो',
      'अपनी कहानी को खुद ही संवारने का वक़्त आ गया है',
    ],
    linesHinglish: [
      'Kisi masiha ke aane ki raah dekhte mat baithe raho',
      'Apni kahaani ko khud hi sanwaarne ka waqt aa gaya hai',
    ],
    linesEnglish: [
      'Stop sitting by the roadside waiting for some savior to arrive',
      'Now is the exact hour to stand up and steer your own story',
    ],
  },
  {
    title: 'मेहनत से चमक',
    titleEnglish: 'Polished by Effort',
    linesHindi: [
      'चमकने के लिए रगड़ और तपिश से गुज़रना पड़ता है',
      'कोयला भी भारी दबाव झेलकर ही हीरा बन पाता है',
    ],
    linesHinglish: [
      'Chamakne ke liye ragad aur tapish se guzarna padta hai',
      'Koyla bhi bhaari dabaav jhelkar hi heera ban paata hai',
    ],
    linesEnglish: [
      'To truly shine requires passing through friction and heat',
      'Even plain coal endures crushing pressure before turning diamond',
    ],
  },
  {
    title: 'सच्ची प्रेरणा',
    titleEnglish: 'Real Inspiration',
    linesHindi: [
      'बड़े भाषण सुनकर सिर्फ़ एक घंटे का जोश आता है',
      'अपनी परिस्थितियाँ देखकर जो जुनून जागे, वही असली है',
    ],
    linesHinglish: [
      'Bade bhaashan sunkar sirf ek ghante ka josh aata hai',
      'Apni paristhitiyan dekhkar jo junoon jaage, wahi asli hai',
    ],
    linesEnglish: [
      'Loud speeches spark fire for scarcely a passing hour',
      'Determination born from your own real struggle lasts forever',
    ],
  },
  {
    title: 'छोटे कदम, बड़ी दूरी',
    titleEnglish: 'Miles Built Step by Step',
    linesHindi: [
      'ईंट पर ईंट रखकर ही ऊँची मीनार खड़ी होती है',
      'रोज़ की छोटी मेहनत ही एक दिन बड़ा मुक़ाम बनाती है',
    ],
    linesHinglish: [
      'Eent par eent rakhkar hi oonchi meenaar khadi hoti hai',
      'Roz ki chhoti mehnat hi ek din bada muqaam banaati hai',
    ],
    linesEnglish: [
      'Towering monuments rise brick by patient brick',
      'Faithful daily steps quietly build extraordinary milestones',
    ],
  },
  {
    title: 'हार न मानने की जिद',
    titleEnglish: 'Unwilling to Quit',
    linesHindi: [
      'हालात कितने भी खिलाफ़ हों, मैदान मत छोड़ना कभी',
      'क्योंकि सबसे मजबूत योद्धा आखिरी ओवर में बाज़ी पलटते हैं',
    ],
    linesHinglish: [
      'Haalaat kitne bhi khilaaf hon, maidaan mat chhodna kabhi',
      'Kyunki sabse mazboot yoddha aakhiri over mein baazi palat-te hain',
    ],
    linesEnglish: [
      'No matter how fiercely the score leans against you today',
      'True fighters stay in the crease and turn the match around',
    ],
  },
  {
    title: 'ख़ुद से किया वादा',
    titleEnglish: 'Promise Kept to Self',
    linesHindi: [
      'दुनिया से किए वादों से ज़्यादा अहम है अपने आप से वादा',
      'जो खुद से किए संकल्प निभाता है, वही विजयी होता है',
    ],
    linesHinglish: [
      'Duniya se kiye waadon se zyada aham hai apne aap se waada',
      'Jo khud se kiye sankalp nibhata hai, wahi vijayi hota hai',
    ],
    linesEnglish: [
      'More sacred than any public vow is the promise kept to yourself',
      'Whoever honors their own word inevitably walks out victorious',
    ],
  },
  {
    title: 'थकान को हराना',
    titleEnglish: 'Beyond Weariness',
    linesHindi: [
      'जब शरीर कहे अब बस, पर सपना कहे अभी थोड़ा और',
      'वही दो अतिरिक्त कदम असली विजेता पैदा करते हैं',
    ],
    linesHinglish: [
      'Jab shareer kahe ab bas, par sapna kahe abhi thoda aur',
      'Wahi do atirikt kadam asli vijeta paida karte hain',
    ],
    linesEnglish: [
      'When tired muscles beg to quit while your dream whispers keep going',
      'Those two extra strides forge a champion in silence',
    ],
  },
  {
    title: 'तुलना से मुक्त मन',
    titleEnglish: 'Own Pace, Own Race',
    linesHindi: [
      'किसी और की घड़ी देखकर अपनी रफ़्तार मत आँकना कभी',
      'तुम्हारा सफ़र, तुम्हारी लड़ाई और तुम्हारी जीत अलग है',
    ],
    linesHinglish: [
      'Kisi aur ki ghadi dekhkar apni raftaar mat aankna kabhi',
      'Tumhaara safar, tumhaari ladaai aur tumhaari jeet alag hai',
    ],
    linesEnglish: [
      'Never measure your pace using someone elses clock',
      'Your journey, your climbs, and your victory belong solely to you',
    ],
  },
  {
    title: 'स्पष्ट लक्ष्य',
    titleEnglish: 'Clear Direction',
    linesHindi: [
      'जहाँ मंज़िल साफ़ हो वहाँ रास्ता खुद निकल आता है',
      'सिर्फ़ भटकने वालों को हर हवा तेज़ लगती है',
    ],
    linesHinglish: [
      'Jahaan manzil saaf ho wahaan raasta khud nikal aata hai',
      'Sirf bhatakne waalon ko har hawa tez lagti hai',
    ],
    linesEnglish: [
      'Where the destination shines clear, pathways open ahead',
      'Only travelers without an aim get blown off by every breeze',
    ],
  },
  {
    title: 'आत्मविश्वास की चमक',
    titleEnglish: 'Confidence From Preparation',
    linesHindi: [
      'असली आत्मविश्वास आईने में बोलने से नहीं आता कभी',
      'वो रात-दिन की पक्की तैयारी से अपने आप जन्म लेता है',
    ],
    linesHinglish: [
      'Asli aatmavishwaas aaine mein bolne se nahin aata kabhi',
      'Wo raat-din ki pakki taiyaari se apne aap janm leta hai',
    ],
    linesEnglish: [
      'Real confidence never comes from rehearsing speeches at a mirror',
      'It grows naturally out of quiet, thorough daily preparation',
    ],
  },
  {
    title: 'नए अवसर का निर्माण',
    titleEnglish: 'Creating Your Chance',
    linesHindi: [
      'बंद दरवाज़ों के बाहर खड़े होकर इंतज़ार मत करो',
      'अपनी मेहनत से एक नया दरवाज़ा खुद बना डालो',
    ],
    linesHinglish: [
      'Band darwaazon ke baahar khade hokar intezaar mat karo',
      'Apni mehnat se ek naya darwaaza khud bana daalo',
    ],
    linesEnglish: [
      'Stop standing patiently outside someone elses locked gate',
      'Build your own wide doorway with grit and honest skill',
    ],
  },
  {
    title: 'मुसीबत में मुस्कुराहट',
    titleEnglish: 'Steady Through Pressure',
    linesHindi: [
      'मुश्किल वक़्त में जो घबराहट पर काबू पा लेता है',
      'आधी चुनौती तो वो उसी क्षण जीत लेता है',
    ],
    linesHinglish: [
      'Mushkil waqt mein jo ghabraahat par kaaboo paa leta hai',
      'Aadhi chunauti to wo usi kshan jeet leta hai',
    ],
    linesEnglish: [
      'Whoever masters panic in the middle of a sudden storm',
      'Already claims half the victory in that very breath',
    ],
  },
  {
    title: 'अटूट लगन',
    titleEnglish: 'Unwavering Focus',
    linesHindi: [
      'एक छोटा सा पक्का लक्ष्य सौ अधूरी योजनाओं से बेहतर है',
      'एक काम पकड़ो और उसे पूरा करके ही दम लो',
    ],
    linesHinglish: [
      'Ek chhota sa pakka lakshya sau adhoori yojanaon se behtar hai',
      'Ek kaam pakdo aur use poora karke hi dam lo',
    ],
    linesEnglish: [
      'One concrete, clear goal beats a hundred half-baked wishes',
      'Choose one worthy climb and stay until you reach the top',
    ],
  },
  {
    title: 'नए युग की शुरुआत',
    titleEnglish: 'Start Right Now',
    linesHindi: [
      'सही समय का इंतज़ार अक्सर उम्र निकाल देता है',
      'तुम्हारे हाथ में जो आज है, वही सबसे सही समय है',
    ],
    linesHinglish: [
      'Sahi samay ka intezaar aksar umar nikaal deta hai',
      'Tumhaare haath mein jo aaj hai, wahi sabse sahi samay hai',
    ],
    linesEnglish: [
      'Waiting forever for the perfect hour quietly drains whole years',
      'This exact moment standing in your hands is the finest time',
    ],
  },
  // Block 5 (81-98)
  {
    title: 'असली ताक़त',
    titleEnglish: 'Real Strength',
    linesHindi: [
      'ऊँची आवाज़ में बोलने से कोई मज़बूत नहीं बनता यहाँ',
      'कठिन हालातों में शांत रहकर लड़ना असली ताक़त है',
    ],
    linesHinglish: [
      'Oonchi aawaaz mein bolne se koi mazboot nahin banta yahaan',
      'Kathin haalaaton mein shaant rehkar ladna asli taaqat hai',
    ],
    linesEnglish: [
      'Shouting loudest never proves real strength in anyone',
      'Staying poised and resilient under heavy weight is true power',
    ],
  },
  {
    title: 'उड़ान का हक़',
    titleEnglish: 'Born to Climb',
    linesHindi: [
      'दूसरों की छोटी सोच से अपने पंख मत कतरने देना',
      'जितना बड़ा सपना है, उतनी ही लंबी उड़ान भरना',
    ],
    linesHinglish: [
      'Doosron ki chhoti soch se apne pankh mat katarne dena',
      'Jitna bada sapna hai, utni hi lambi udaan bharna',
    ],
    linesEnglish: [
      'Never let someone elses small fears clip your wings short',
      'Fly as wide and high as your boldest honest dream reaches',
    ],
  },
  {
    title: 'पसीने से सजी जीत',
    titleEnglish: 'Victory Earned Clean',
    linesHindi: [
      'नक़ल और शॉर्टकट से मिली जीत मन को सुकून नहीं देती',
      'अपने पसीने से पाई कामयाबी का स्वाद ही अलग होता है',
    ],
    linesHinglish: [
      'Naqal aur shortcut se mili jeet man ko sukoon nahin deti',
      'Apne paseene se paai kaamyaabi ka swaad hi alag hota hai',
    ],
    linesEnglish: [
      'Victories snatched through shortcuts never bring real pride',
      'Success earned with honest sweat carries a sweetness unmatched',
    ],
  },
  {
    title: 'अंधेरे से सीख',
    titleEnglish: 'Stars Need Darkness',
    linesHindi: [
      'दिन के उजाले में तारे कभी दिखाई नहीं देते आसमान में',
      'चमकने के लिए ज़िंदगी में थोड़ा अँधेरा भी ज़रूरी है',
    ],
    linesHinglish: [
      'Din ke ujaale mein taare kabhi dikhai nahin dete aasmaan mein',
      'Chamakne ke liye zindagi mein thoda andhera bhi zaroori hai',
    ],
    linesEnglish: [
      'Stars stay invisible beneath bright midday skies',
      'Sometimes a little darkness arrives simply to show your glow',
    ],
  },
  {
    title: 'सच्चा योद्धा',
    titleEnglish: 'Spirit That Never Quits',
    linesHindi: [
      'जब सब कहे कि अब यह काम नामुमकिन लगता है',
      'बस मुस्कुराकर कहना कि अभी मेरी कोशिश बाकी है',
    ],
    linesHinglish: [
      'Jab sab kahe ki ab yah kaam naamumkin lagta hai',
      'Bas muskurakar kehna ki abhi meri koshish baaki hai',
    ],
    linesEnglish: [
      'When every voice around insists the hill looks impossible',
      'Simply smile calmly and reply that your effort has just begun',
    ],
  },
  {
    title: 'कल का निर्माण',
    titleEnglish: 'Shaping Tomorrow Today',
    linesHindi: [
      'तुम्हारे आज के छोटे-छोटे निर्णय और आदतें ही',
      'पाँच साल बाद तुम्हारी पूरी पहचान बनने वाली हैं',
    ],
    linesHinglish: [
      'Tumhaare aaj ke chhote-chhote nirnay aur aadatein hi',
      'Paanch saal baad tumhaari poori pehchaan banne waali hain',
    ],
    linesEnglish: [
      'Your quiet daily choices and steady habits right now',
      'Are sculpting the entire person you stand as five years ahead',
    ],
  },
  {
    title: 'धीमी मगर अटल चाल',
    titleEnglish: 'Slow Yet Unstoppable',
    linesHindi: [
      'चींटी भी लगातार चलकर मीलों की दूरी नाप लेती है',
      'तेज़ी से ज़्यादा ज़रूरी हर रोज़ चलते रहना है',
    ],
    linesHinglish: [
      'Cheenti bhi lagaataar chalkar meelon ki doori naap leti hai',
      'Tezi se zyada zaroori har roz chalte rehna hai',
    ],
    linesEnglish: [
      'Even a tiny ant covers miles by refusing to pause',
      'Showing up daily counts far more than bursts of speed',
    ],
  },
  {
    title: 'अधूरे डर को जलाना',
    titleEnglish: 'Burning Away Doubt',
    linesHindi: [
      'मन की शंकाओं से ज़्यादा ताक़तवर तुम्हारी मेहनत है',
      'काम शुरू करते ही आधे डर खुद धुआँ बन जाते हैं',
    ],
    linesHinglish: [
      'Man ki shankaon se zyada taaqatwar tumhaari mehnat hai',
      'Kaam shuru karte hi aadhe dar khud dhuaan ban jaate hain',
    ],
    linesEnglish: [
      'Your steady action holds ten times the force of quiet worry',
      'The moment you begin, half your fears dissolve like smoke',
    ],
  },
  {
    title: 'माँ-बाप का सपना',
    titleEnglish: 'Honoring Their Sacrifices',
    linesHindi: [
      'जब थकान से कदम रुकने लगें तो एक बार घर देख लेना',
      'तुम्हारे अपनों की उम्मीदें फिर से नई जान भर देंगी',
    ],
    linesHinglish: [
      'Jab thakaan se kadam rukne lagen to ek baar ghar dekh lena',
      'Tumhaare apnon ki ummeedein phir se nayi jaan bhar dengi',
    ],
    linesEnglish: [
      'When exhaustion tugs your steps down, picture home once',
      'The quiet pride of those who raised you restores fresh strength',
    ],
  },
  {
    title: 'सही समय की प्रतीक्षा नहीं',
    titleEnglish: 'Making Moments Count',
    linesHindi: [
      'वक़्त कभी खुद आकर तुम्हें आगे बढ़ने का न्योता नहीं देगा',
      'तुम्हें खुद ही हर साधारण दिन को ख़ास बनाना होगा',
    ],
    linesHinglish: [
      'Waqt kabhi khud aakar tumhein aage badhne ka nyota nahin dega',
      'Tumhein khud hi har saadhaaran din ko khaas banaana hoga',
    ],
    linesEnglish: [
      'Time never walks up handing engraved invitations to greatness',
      'You forge ordinary weekdays into stepping stones yourself',
    ],
  },
  {
    title: 'जीत की तैयारी',
    titleEnglish: 'Quiet Preparation',
    linesHindi: [
      'जब सब आराम की नींद में खोए हों रात को',
      'तब जो पसीना बहाता है, वही सुबह चमकता है',
    ],
    linesHinglish: [
      'Jab sab aaraam ki neend mein khoye hon raat ko',
      'Tab jo paseena bahaata hai, wahi subah chamakta hai',
    ],
    linesEnglish: [
      'While the world rests comfortably asleep through quiet nights',
      'Whoever keeps working silently shines brightest at sunrise',
    ],
  },
  {
    title: 'टूटी डोर से नई गाँठ',
    titleEnglish: 'Mending & Moving On',
    linesHindi: [
      'कोई योजना नाकाम हो जाए तो सपना मत बदलना',
      'सिर्फ़ तरीक़ा बदलो और दुगने हौसले से लग जाओ',
    ],
    linesHinglish: [
      'Koi yojana naakaam ho jaaye to sapna mat badalna',
      'Sirf tareeqa badlo aur dugne hausle se lag jaao',
    ],
    linesEnglish: [
      'If a plan falls short, never throw away the worthy dream',
      'Adjust your strategy and press onward with twice the heart',
    ],
  },
  {
    title: 'अपनी क़ीमत समझो',
    titleEnglish: 'Know Your Worth',
    linesHindi: [
      'खुद को कभी किसी की मंज़ूरी का मोहताज मत बनाना',
      'तुम्हारी काबिलियत तुम्हारे काम में खुद बोलती है',
    ],
    linesHinglish: [
      'Khud ko kabhi kisi ki manzoori ka mohtaaj mat banaana',
      'Tumhaari qaabiliyat tumhaare kaam mein khud bolti hai',
    ],
    linesEnglish: [
      'Never tether your self-worth to someone elses passing nod',
      'Your skill and integrity speak loudly inside everything you build',
    ],
  },
  {
    title: 'सकारात्मक ऊर्जा',
    titleEnglish: 'Unstoppable Spirit',
    linesHindi: [
      'जो हर परिस्थिति में कुछ नया सीखने का जज़्बा रखता है',
      'उसे इस पूरी दुनिया में कोई हरा नहीं सकता',
    ],
    linesHinglish: [
      'Jo har paristhiti mein kuch naya seekhne ka jazba rakhta hai',
      'Use is poori duniya mein koi hara nahin sakta',
    ],
    linesEnglish: [
      'A spirit eager to learn and adapt inside every circumstance',
      'Remains practically undefeated anywhere under the sky',
    ],
  },
  {
    title: 'आसमान की ऊँचाइयाँ',
    titleEnglish: 'Limitless Sky',
    linesHindi: [
      'अपनी सीमाएँ खुद तय मत करो डर के साये में',
      'कोशिश करके देखो, तुम अपने अंदाज़े से ज़्यादा ताकतवर हो',
    ],
    linesHinglish: [
      'Apni seemaayein khud tay mat karo dar ke saaye mein',
      'Koshish karke dekho, tum apne andaaze se zyada taaqatwar ho',
    ],
    linesEnglish: [
      'Stop drawing fences around yourself out of quiet doubt',
      'Step forward and discover how much stronger you truly are',
    ],
  },
  {
    title: 'हर सुबह नया जोश',
    titleEnglish: 'Fresh Fire Daily',
    linesHindi: [
      'उठो, अपनी मेज़ संभालो और लक्ष्य की तरफ़ देखो',
      'आज का दिन तुम्हें एक कदम और आगे ले जाने आया है',
    ],
    linesHinglish: [
      'Utho, apni mez sanbhaalo aur lakshya ki taraf dekho',
      'Aaj ka din tumhein ek kadam aur aage le jaane aaya hai',
    ],
    linesEnglish: [
      'Rise up, square your desk, and look clearly toward your aim',
      'Today arrived specifically to carry you one honest step further',
    ],
  },
  {
    title: 'विजेता की सोच',
    titleEnglish: 'Heart of a Champion',
    linesHindi: [
      'मुश्किलें तो हर किसी के रास्ते में आती हैं समान रूप से',
      'कोई बिखर जाता है तो कोई निखर कर सामने आता है',
    ],
    linesHinglish: [
      'Mushkilein to har kisi ke raaste mein aati hain samaan roop se',
      'Koi bikhar jaata hai to koi nikhar kar saamne aata hai',
    ],
    linesEnglish: [
      'Storms visit every travelers road sooner or later alike',
      'Some crumble quietly beneath them while others emerge forged bright',
    ],
  },
  {
    title: 'अंतहीन हौसला',
    titleEnglish: 'Enduring Spirit',
    linesHindi: [
      'जब तक साँसें चल रही हैं, तब तक हार संभव नहीं है',
      'कदम बढ़ाते चलो दोस्त, मंज़िल तुम्हारी राह देख रही है',
    ],
    linesHinglish: [
      'Jab tak saansein chal rahi hain, tab tak haar sambhav nahin hai',
      'Kadam badhate chalo dost, manzil tumhaari raah dekh rahi hai',
    ],
    linesEnglish: [
      'As long as breath fills your chest, defeat is never final',
      'Keep stepping steadily onward, friend—your destination awaits',
    ],
  },
];

export const UNIQUE_MOTIVATIONAL_98 = buildUniqueShayaris(
  'motivational',
  'Motivational Shayari (मोटिवेशनल शायरी)',
  '🔥',
  103,
  MOTIVATIONAL_ENTRIES
);
