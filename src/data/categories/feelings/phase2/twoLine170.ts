import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const TWO_LINE_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'अनकही ज़ुबान',
    titleEnglish: 'When Silence Speaks',
    linesHindi: [
      'हर बात ज़ुबान से कही जाए यह ज़रूरी तो नहीं मेरे यार',
      'कुछ जवाब वक़्त की ख़ामोशी ज़्यादा साफ़ दे जाया करती है',
    ],
    linesHinglish: [
      'Har baat zubaan se kahi jaaye yeh zaroori to nahin mere yaar',
      'Kuch jawaab waqt ki khaamoshi zyada saaf de jaaya karti hai',
    ],
    linesEnglish: [
      'Not every truth needs to be spoken out loud, my friend',
      'Sometimes quiet time delivers the clearest answer of all',
    ],
  },
  {
    title: 'वक़्त और इंसान',
    titleEnglish: 'Time Changes Perspective',
    linesHindi: [
      'वक़्त का तराज़ू हर रिश्ते का असली वज़न तौल देता है',
      'कौन साथ है और कौन साथ दिखता है, फ़र्क़ खोल देता है',
    ],
    linesHinglish: [
      'Waqt ka taraazu har rishte ka asli wazan taul deta hai',
      'Kaun saath hai aur kaun saath dikhta hai, farq khol deta hai',
    ],
    linesEnglish: [
      'The scale of time weighs every bond honestly sooner or later',
      'Showing clearly who walks beside you and who only stands for photos',
    ],
  },
  {
    title: 'हौसले की चिंगारी',
    titleEnglish: 'Spark Within',
    linesHindi: [
      'रास्ते कभी ख़त्म नहीं होते मंज़िल की तलाश करने वालों के',
      'बस हिम्मत की एक छोटी चिंगारी अंधेरे में जलानी पड़ती है',
    ],
    linesHinglish: [
      'Raaste kabhi khatm nahin hote manzil ki talaash karne waalon ke',
      'Bas himmat ki ek chhoti chingaari andhere mein jalaani padti hai',
    ],
    linesEnglish: [
      'Paths never run out for people determined to keep searching forward',
      'You only need to strike one small spark of courage in the dark',
    ],
  },
  {
    title: 'मन की निर्मल सादगी',
    titleEnglish: 'Clean Heart Peace',
    linesHindi: [
      'चेहरे की चमक से कहीं बड़ी होती है मन की सादगी दोस्त',
      'झूठे नक़ाब उतर जाते हैं, किरदार हमेशा याद रह जाता है',
    ],
    linesHinglish: [
      'Chehre ki chamak se kahin badi hoti hai man ki saadgi dost',
      'Jhoothe naqaab utar jaate hain, kirdaar hamesha yaad reh jaata hai',
    ],
    linesEnglish: [
      'Simplicity of soul outshines surface polish every single time',
      'Clever masks slip away eventually, while true character stays remembered',
    ],
  },
  {
    title: 'ठहराव का जादू',
    titleEnglish: 'Power of Pause',
    linesHindi: [
      'तेज़ हवा में दौड़ने से ज़्यादा ज़रूरी है सही दिशा चुनना',
      'दो पल ठहरकर सोचना कई बड़ी ठोकरों से बचा लेता है',
    ],
    linesHinglish: [
      'Tez hawa mein daudne se zyada zaroori hai sahi disha chunna',
      'Do pal theharkar sochna kai badi thokaron se bacha leta hai',
    ],
    linesEnglish: [
      'Choosing the right direction matters far more than running at top speed',
      'Pausing two quiet seconds saves you from ten heavy stumbles',
    ],
  },
  {
    title: 'अधूरा सच',
    titleEnglish: 'Quiet Realization',
    linesHindi: [
      'लोग अक्सर वही सुनते हैं जो उनके मन को अच्छा लगे पहले',
      'सच्चाई सुनने के लिए थोड़ा सा बड़ा दिल चाहिए होता है',
    ],
    linesHinglish: [
      'Log aksar wahi sunte hain jo unke man ko accha lage pehle',
      'Sacchaai sunne ke liye thoda sa bada dil chahiye hota hai',
    ],
    linesEnglish: [
      'Most folks listen first to whatever flatters their comfort',
      'Hearing plain truth gracefully takes a slightly bigger heart',
    ],
  },
  {
    title: 'अपनी क़दर जानो',
    titleEnglish: 'Know Your Worth',
    linesHindi: [
      'सूरज की क़ीमत बादल छाने के बाद ही समझ आती है अक्सर',
      'ख़ुद को सस्ता मत बनाइए, अपनी मौजूदगी को ख़ास रखिए',
    ],
    linesHinglish: [
      'Sooraj ki qeemat baadal chhaane ke baad hi samajh aati hai aksar',
      'Khud ko sasta mat banaaiye, apni maujoodgi ko khaas rakhiye',
    ],
    linesEnglish: [
      'People usually appreciate warm sunshine only once clouds roll overhead',
      'Never discount yourself—keep your presence rare and respected',
    ],
  },
  {
    title: 'मुस्कान का असर',
    titleEnglish: 'Quiet Smile Strength',
    linesHindi: [
      'एक हल्की मुस्कान सैकड़ों सवालों का सबसे शांत जवाब होती है',
      'शोर मचाने वालों को चुपचाप आगे बढ़कर पीछे छोड़ दीजिए',
    ],
    linesHinglish: [
      'Ek halki muskaan saikdon sawaalon ka sabse shaant jawaab hoti hai',
      'Shor machaane waalon ko chupchaap aage badhkar peechhe chhod dijiye',
    ],
    linesEnglish: [
      'One calm smile answers a hundred noisy doubts without a single word',
      'Leave loud critics behind simply by outgrowing where they stand',
    ],
  },
  {
    title: 'मेहनत का नशा',
    titleEnglish: 'Focus Over Noise',
    linesHindi: [
      'किस्मत की लकीरें अक्सर पसीने की स्याही से ही लिखी जाती हैं',
      'हाथ पर हाथ रखकर बैठने वालों को सिर्फ़ बहाने मिलते हैं',
    ],
    linesHinglish: [
      'Kismat ki lakeerein aksar paseene ki syaahi se hi likhi jaati hain',
      'Haath par haath rakhkar baithne waalon ko sirf bahaane milte hain',
    ],
    linesEnglish: [
      'Lines of destiny are most often written in steady sweat and grit',
      'Sitting idle only brings home an endless collection of excuses',
    ],
  },
  {
    title: 'दिलों की भाषा',
    titleEnglish: 'Unspoken Language',
    linesHindi: [
      'आँखों के इशारे कई बार पूरी किताब से ज़्यादा बोल जाते हैं',
      'समझने वाले बिना कुछ कहे भी दिल का हाल पढ़ लेते हैं',
    ],
    linesHinglish: [
      'Aankhon ke ishaare kai baar poori kitaab se zyada bol jaate hain',
      'Samajhne waale bina kuch kahe bhi dil ka haal padh lete hain',
    ],
    linesEnglish: [
      'One honest glance often says more than an entire printed volume',
      'People who truly care read your heart before you even speak',
    ],
  },
  {
    title: 'सच्चे लोगों की कमी',
    titleEnglish: 'Rare Sincerity',
    linesHindi: [
      'मीठा बोलने वालों की भीड़ में सच्चे लोग कम ही दिखते हैं अब',
      'जो मुँह पर सही कहे, उसी का हाथ थामकर रखिएगा',
    ],
    linesHinglish: [
      'Meetha bolne waalon ki bheed mein sacche log kam hi dikhte hain ab',
      'Jo munh par sahi kahe, usi ka haath thaamkar rakhiyega',
    ],
    linesEnglish: [
      'Inside a crowd of smooth talkers, honest souls stand out rare today',
      'Hold tightly onto anyone brave enough to tell you the truth straight',
    ],
  },
  {
    title: 'छोटी खुशियाँ बड़ी',
    titleEnglish: 'Small Things Matter',
    linesHindi: [
      'बड़ी ख़ुशियों के इंतज़ार में आज की चाय ठंडी मत होने दीजिए',
      'जिंदगी इन्हीं छोटे-छोटे सुकून भरे पलों से मिलकर बनती है',
    ],
    linesHinglish: [
      'Badi khushiyon ke intezaar mein aaj ki chai thandi mat hone dijiye',
      'Zindagi inheen chhote-chhote sukoon bhare palon se milkar banti hai',
    ],
    linesEnglish: [
      'Never let today’s hot tea go cold while waiting on grand milestones',
      'Real life is stitched together out of small, ordinary peaceful moments',
    ],
  },
  {
    title: 'सब्र का फल मीठा',
    titleEnglish: 'Patience Pays',
    linesHindi: [
      'बीज बोते ही अगले दिन फल नहीं उगते किसी भी बगीचे में',
      'थोड़ा धैर्य रखिए, सही मौसम आते ही मेहनत रंग लाएगी',
    ],
    linesHinglish: [
      'Beej bote hi agle din phal nahin ugte kisi bhi bageeche mein',
      'Thoda dhairya rakhiye, sahi mausam aate hi mehnat rang laayegi',
    ],
    linesEnglish: [
      'No seed planted today yields sweet fruit the very next afternoon',
      'Stay patient—when the season aligns, quiet effort blooms brightly',
    ],
  },
  {
    title: 'आत्मविश्वास की उड़ान',
    titleEnglish: 'Self-Belief Flight',
    linesHindi: [
      'पंखों से ज़्यादा उड़ान के लिए हौसलों का मज़बूत होना ज़रूरी है',
      'खुद पर भरोसा हो तो आंधियों में भी रास्ता निकल आता है',
    ],
    linesHinglish: [
      'Pankhon se zyada udaan ke liye hauslon ka mazboot hona zaroori hai',
      'Khud par bharosa ho to aandhiyon mein bhi raasta nikal aata hai',
    ],
    linesEnglish: [
      'Steady courage matters even more than wings when taking off',
      'Believe firmly in yourself and you will steer right through headwinds',
    ],
  },
  {
    title: 'अहम और प्यार',
    titleEnglish: 'Ego vs Love',
    linesHindi: [
      'जहाँ अहम बड़ा हो जाए वहाँ बड़े से बड़ा रिश्ता छोटा पड़ जाता है',
      'थोड़ा झुक जाने से कद कभी कम नहीं होता मेरे दोस्त',
    ],
    linesHinglish: [
      'Jahaan aham bada ho jaaye wahaan bade se bada rishta chhota pad jaata hai',
      'Thoda jhuk jaane se qad kabhi kam nahin hota mere dost',
    ],
    linesEnglish: [
      'Wherever pride swells too large, even the strongest bond shrinks away',
      'Bending kindly first never lowers anyone’s stature, my friend',
    ],
  },
  {
    title: 'असली अमीरी',
    titleEnglish: 'True Wealth',
    linesHindi: [
      'असली दौलत तिजोरी के नोटों में नहीं, रात की शांत नींद में है',
      'और ऐसे दो लोग हों जिन्हें आपकी सच में परवाह रहती हो',
    ],
    linesHinglish: [
      'Asli daulat tijori ke noton mein nahin, raat ki shaant neend mein hai',
      'Aur aise do log hon jinhein aapki sach mein parwaah rehti ho',
    ],
    linesEnglish: [
      'Real riches live not inside locked safes, but in deep peaceful sleep',
      'And having two true people who genuinely check on your heart',
    ],
  },
  {
    title: 'भीड़ से अलग चलने की हिम्मत',
    titleEnglish: 'Courage to Walk Alone',
    linesHindi: [
      'भीड़ के पीछे चलकर तो हर कोई सुरक्षित महसूस कर लेता है',
      'असली हिम्मत अपनी सही राह अकेले बनाने में लगती है',
    ],
    linesHinglish: [
      'Bheed ke peechhe chalkar to har koi surakshit mehsoos kar leta hai',
      'Asli himmat apni sahi raah akele banaane mein lagti hai',
    ],
    linesEnglish: [
      'Anyone feels cozy following the footprints of a big crowd',
      'Real nerve is carving out an honest trail when you walk solo',
    ],
  },
  {
    title: 'निखरता इंसान',
    titleEnglish: 'Refined by Trials',
    linesHindi: [
      'हीरा भी बिना तराशे अपनी चमक दुनिया को दिखा नहीं पाता',
      'कठिन वक़्त हमें तोड़ने नहीं, बल्कि निखारने आया करता है',
    ],
    linesHinglish: [
      'Heera bhi bina taraashe apni chamak duniya ko dikha nahin paata',
      'Kathin waqt humein todne nahin, balki nikhaarne aaya karta hai',
    ],
    linesEnglish: [
      'Even a raw diamond cannot shine until pressure cuts clean facets',
      'Tough chapters show up not to break us, but to bring out our best',
    ],
  },
  {
    title: 'सादा जीवन, गहरी सोच',
    titleEnglish: 'Simple Life Deep Mind',
    linesHindi: [
      'दिखावे की दौड़ से बाहर आकर देखिए कितना सुकून मिलता है',
      'सादा जीवन और सच्चे विचार ही सबसे बड़ी शांति देते हैं',
    ],
    linesHinglish: [
      'Dikhaawe ki daud se baahar aakar dekhiye kitna sukoon milta hai',
      'Saada jeevan aur sacche vichaar hi sabse badi shaanti dete hain',
    ],
    linesEnglish: [
      'Step off the endless treadmill of showing off and feel real relief',
      'Simple living paired with honest thinking brings unmatched calm',
    ],
  },
  {
    title: 'यादों की महक',
    titleEnglish: 'Lingering Fragrance',
    linesHindi: [
      'लोग तो चले जाते हैं वक़्त के साथ अपने-अपने शहरों में वापस',
      'बस उनकी मीठी बातें हमारे दिल के आँगन में रह जाती हैं',
    ],
    linesHinglish: [
      'Log to chale jaate hain waqt ke saath apne-apne shehron mein waapas',
      'Bas unki meethi baatein hamaare dil ke aangan mein reh jaati hain',
    ],
    linesEnglish: [
      'People eventually head home to different towns as seasons turn',
      'Yet their kindest words stay lingering gently inside our hearts',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'अंधेरे का अंत',
    titleEnglish: 'After Dark Comes Light',
    linesHindi: [
      'दीया चाहे छोटा सा हो, पूरे कमरे के अंधेरे को हरा देता है',
      'एक छोटी उम्मीद भी पूरी ज़िंदगी को रोशन कर सकती है',
    ],
    linesHinglish: [
      'Diya chaahe chhota sa ho, poore kamre ke andhere ko hara deta hai',
      'Ek chhoti ummeed bhi poori zindagi ko roshan kar sakti hai',
    ],
    linesEnglish: [
      'Even a tiny clay lamp pushes darkness out of a whole room',
      'One steady spark of hope can light up an entire season of life',
    ],
  },
  {
    title: 'बोलने से पहले सोच',
    titleEnglish: 'Think Before Speaking',
    linesHindi: [
      'ज़ुबान से निकले शब्द कभी वापस नहीं लौटते कमान से तीर की तरह',
      'इसलिए गुस्से में भी लहजे की मर्यादा बचाकर रखनी चाहिए',
    ],
    linesHinglish: [
      'Zubaan se nikle shabd kabhi waapas nahin laut-te kamaan se teer ki tarah',
      'Isliye gusse mein bhi lehje ki maryaada bachaakar rakhni chahiye',
    ],
    linesEnglish: [
      'Spoken words never fly back once released, like arrows off a bow',
      'Even inside anger, protect the grace of how you speak',
    ],
  },
  {
    title: 'आईने की सच्चाई',
    titleEnglish: 'Mirror Truth',
    linesHindi: [
      'दुनिया को बदलने की ज़िद से पहले ख़ुद को सँवार लेना बेहतर है',
      'चेहरे की धूल पोंछने के लिए आईने को नहीं, खुद को साफ़ करते हैं',
    ],
    linesHinglish: [
      'Duniya ko badalne ki zid se pehle khud ko sanwaar lena behtar hai',
      'Chehre ki dhool ponchhne ke liye aaine ko nahin, khud ko saaf karte hain',
    ],
    linesEnglish: [
      'Better than demanding the whole world change is refining yourself first',
      'To wipe dust off your face, you clean your cheek—never the mirror',
    ],
  },
  {
    title: 'ख़ुद को जीतने की कला',
    titleEnglish: 'Quiet Victory',
    linesHindi: [
      'दूसरों को हराकर मिलने वाली खुशी बस दो पल की मेहमान होती है',
      'ख़ुद की कमज़ोरी को जीत लेना ही ज़िंदगी की असली जीत है',
    ],
    linesHinglish: [
      'Doosron ko haraakar milne waali khushi bas do pal ki mehmaan hoti hai',
      'Khud ki kamzori ko jeet lena hi zindagi ki asli jeet hai',
    ],
    linesEnglish: [
      'Thrill from beating someone else only lasts two fleeting minutes',
      'Mastering your own doubts is the truest victory of a lifetime',
    ],
  },
  {
    title: 'हर बहस से ऊपर चुप्पी',
    titleEnglish: 'Strength in Restraint',
    linesHindi: [
      'हर सवाल पर बहस करना ज़रूरी नहीं होता मेरे दोस्त जीवन में',
      'कभी-कभी शांत रह जाना सामने वाले से बड़ा होने का सबूत है',
    ],
    linesHinglish: [
      'Har sawaal par behas karna zaroori nahin hota mere dost jeevan mein',
      'Kabhi-kabhi shaant reh jaana saamne waale se bada hone ka saboot hai',
    ],
    linesEnglish: [
      'Not every loud argument deserves your time or breath, friend',
      'Walking away in calm dignity often proves real emotional strength',
    ],
  },
  {
    title: 'शांत बहती गहरी नदियाँ',
    titleEnglish: 'Depth Over Noise',
    linesHindi: [
      'गहरी नदियाँ हमेशा शांत बहती हैं बिना किसी शोरगुल के',
      'जो सच में काबिल होते हैं वो ख़ुद का ढोल नहीं पीटा करते',
    ],
    linesHinglish: [
      'Gehri nadiyaan hamesha shaant behti hain bina kisi shorgul ke',
      'Jo sach mein kaabil hote hain wo khud ka dhol nahin peeta karte',
    ],
    linesEnglish: [
      'Deep rivers always flow silently without splashing across rocks',
      'People of genuine substance never need to beat their own drums',
    ],
  },
  {
    title: 'नए मोड़ का डर नहीं',
    titleEnglish: 'Fearless at Turns',
    linesHindi: [
      'नए रास्तों पर थोड़ा डर लगना बिल्कुल स्वाभाविक बात है दोस्त',
      'पर उन्हीं अनजान रास्तों के आगे सबसे सुंदर नज़ारे मिलते हैं',
    ],
    linesHinglish: [
      'Naye raaston par thoda dar lagna bilkul swaabhaavik baat hai dost',
      'Par unheen anjaan raaston ke aage sabse sundar nazaare milte hain',
    ],
    linesEnglish: [
      'Feeling nervous at the start of an unfamiliar path is completely human',
      'Yet the most breathtaking views always wait beyond unknown bends',
    ],
  },
  {
    title: 'पीठ पीछे साथ निभाता दोस्त',
    titleEnglish: 'Cherish Real Allies',
    linesHindi: [
      'जो तुम्हारी ग़ैर-मौजूदगी में भी तुम्हारे लिए खड़ा रहे अडिग',
      'ऐसे इंसान को ज़िंदगी में कभी सस्ते में मत खो देना',
    ],
    linesHinglish: [
      'Jo tumhaari gair-maujoodgi mein bhi tumhaare liye khada rahe adig',
      'Aise insaan ko zindagi mein kabhi saste mein mat kho dena',
    ],
    linesEnglish: [
      'Whoever defends your name cleanly when you are not in the room',
      'Is someone far too precious to ever let slip lightly out of life',
    ],
  },
  {
    title: 'वक़्त की कीमत',
    titleEnglish: 'Respect Every Hour',
    linesHindi: [
      'पैसा गया तो मेहनत से दोबारा कमाया जा सकता है एक दिन',
      'बीता हुआ वक़्त दुनिया की सारी दौलत से भी लौटकर नहीं आता',
    ],
    linesHinglish: [
      'Paisa gaya to mehnat se dobaara kamaaya jaata sakta hai ek din',
      'Beeta hua waqt duniya ki saari daulat se bhi lautkar nahin aata',
    ],
    linesEnglish: [
      'Lost money can be earned back steadily through honest work',
      'Spent hours never return, not even for all the gold on earth',
    ],
  },
  {
    title: 'प्यार का सरल नियम',
    titleEnglish: 'Simple Rule of Love',
    linesHindi: [
      'मोहब्बत दिखावे से नहीं, छोटी-छोटी परवाह से ज़िंदा रहती है',
      'बस किसी के बुरे दिन में उसका हाथ थामे रखना काफी होता है',
    ],
    linesHinglish: [
      'Mohabbat dikhaawe se nahin, chhoti-chhoti parwaah se zinda rehti hai',
      'Bas kisi ke bure din mein uska haath thaame rakhna kaafi hota hai',
    ],
    linesEnglish: [
      'Affection thrives not on grand gestures, but on tiny daily care',
      'Simply holding someone’s hand through an ordinary rough day says everything',
    ],
  },
  {
    title: 'ख़्वाब और हक़ीक़त',
    titleEnglish: 'Dreams Need Sweat',
    linesHindi: [
      'सपने तो सोते हुए हर इंसान देख लेता है रात के सन्नाटे में',
      'पूरे उन्हीं के होते हैं जो सुबह जल्दी उठकर काम में जुटते हैं',
    ],
    linesHinglish: [
      'Sapne to sote hue har insaan dekh leta hai raat ke sannaate mein',
      'Poore unheen ke hote hain jo subah jaldi uthkar kaam mein jut-te hain',
    ],
    linesEnglish: [
      'Everyone drifts through pretty dreams while asleep at night',
      'They belong only to those who wake early and build them in daylight',
    ],
  },
  {
    title: 'संतोष सबसे बड़ा सुख',
    titleEnglish: 'Contentment Is Richness',
    linesHindi: [
      'जितना मिला है उसका आनंद लेना सीख जाइए आज ही से',
      'वरना हर नई चीज़ भी कुछ दिनों बाद पुरानी लगने लगेगी',
    ],
    linesHinglish: [
      'Jitna mila hai uska aanand lena seekh jaaiye aaj hi se',
      'Warna har nayi cheez bhi kuch dinon baad purani lagne lagegi',
    ],
    linesEnglish: [
      'Learn starting today to savor what already sits warmly in your hands',
      'Otherwise even every shiny new win feels ordinary within a week',
    ],
  },
  {
    title: 'मुश्किल और हिम्मत',
    titleEnglish: 'Storms Build Sailors',
    linesHindi: [
      'शांत समुद्र में तो कोई भी नाव बड़ी आसानी से चला लेता है',
      'असली मल्लाह की पहचान हमेशा ऊँची लहरों में ही होती है',
    ],
    linesHinglish: [
      'Shaant samudra mein to koi bhi naav badi aasaani se chala leta hai',
      'Asli mallaah ki pehchaan hamesha oonchi lehron mein hi hoti hai',
    ],
    linesEnglish: [
      'Anyone can steer smoothly across glass-calm coastal waters',
      'A true captain only shows their mettle when tall waves roll in',
    ],
  },
  {
    title: 'तर्क से ज़्यादा ज़रूरी रिश्ते',
    titleEnglish: 'Gentle Words Heal',
    linesHindi: [
      'तर्क में जीतकर भी कई बार हम अपने खास लोगों को खो देते हैं',
      'जहाँ प्यार बचाना हो, वहाँ मुस्कुराकर हार मान लेना बेहतर है',
    ],
    linesHinglish: [
      'Tark mein jeetkar bhi kai baar hum apne khaas logon ko kho dete hain',
      'Jahaan pyaar bachaana ho, wahaan muskuraakar haar maan lena behtar hai',
    ],
    linesEnglish: [
      'Winning a sharp debate sometimes costs you the person you cherish',
      'When protecting love matters more, smiling and yielding is wiser',
    ],
  },
  {
    title: 'बाहरी शोर से परे मन का चैन',
    titleEnglish: 'Quiet Inside',
    linesHindi: [
      'बाहर के शोर को रोक पाना हमारे बस में कभी नहीं होता दोस्त',
      'अपने भीतर का कोना शांत रखना हमेशा हमारे ही हाथ में है',
    ],
    linesHinglish: [
      'Baahar ke shor ko rok paana hamaare bas mein kabhi nahin hota dost',
      'Apne bheetar ka kona shaant rakhna hamesha hamaare hi haath mein hai',
    ],
    linesEnglish: [
      'Quieting the noisy outside world is rarely within our reach',
      'Yet guarding the peace inside your own chest is always yours to choose',
    ],
  },
  {
    title: 'क़दमों की आवाज़',
    titleEnglish: 'Let Results Speak',
    linesHindi: [
      'इरादे ऊँचे हों तो लोगों को बताकर समय बर्बाद मत कीजिए',
      'काम पूरा होने पर आपकी कामयाबी खुद शोर मचा देगी',
    ],
    linesHinglish: [
      'Iraade oonche hon to logon ko bataakar samay barbaad mat kijiye',
      'Kaam poora hone par aapki kaamyaabi khud shor macha degi',
    ],
    linesEnglish: [
      'When your goals run high, stop wasting breath announcing every plan',
      'Once the work finishes cleanly, results make plenty of sound on their own',
    ],
  },
  {
    title: 'दयालुता की ताकत',
    titleEnglish: 'Kindness Lasts',
    linesHindi: [
      'ताक़त से आप किसी को झुका सकते हैं कुछ देर के लिए शायद',
      'पर दिल जीतने के लिए आज भी नर्मी और अच्छाई ही काम आती है',
    ],
    linesHinglish: [
      'Taaqat se aap kisi ko jhuka sakte hain kuch der ke liye shaayad',
      'Par dil jeetne ke liye aaj bhi narmi aur acchaai hi kaam aati hai',
    ],
    linesEnglish: [
      'Force might make someone yield briefly on the surface',
      'Winning genuine hearts still belongs strictly to warmth and kindness',
    ],
  },
  {
    title: 'तज़ुर्बे की सीख',
    titleEnglish: 'Wisdom From Mistakes',
    linesHindi: [
      'गलतियाँ होना बुरा नहीं, उन्हीं से न सीखना सबसे बड़ी भूल है',
      'हर ठोकर हमें अगली बार और सँभलकर चलना सिखा जाती है',
    ],
    linesHinglish: [
      'Galtiyaan hona bura nahin, unheen se na seekhna sabse badi bhool hai',
      'Har thokar humein agli baar aur sambhalkar chalna sikha jaati hai',
    ],
    linesEnglish: [
      'Making an honest slip is normal—refusing to learn from it is the real trap',
      'Every stumble teaches your steps how to balance steadier next time',
    ],
  },
  {
    title: 'हल्का मन',
    titleEnglish: 'Drop Extra Baggage',
    linesHindi: [
      'माफ़ करना सीखिए दूसरों की ख़ातिर नहीं, अपने चैन की ख़ातिर',
      'कड़वाहट ढोते रहने से अपना ही सफ़र भारी लगने लगता है',
    ],
    linesHinglish: [
      'Maaf karna seekhiye doosron ki khaatir nahin, apne chain ki khaatir',
      'Kadwaahat dhote rehne se apna hi safar bhaari lagne lagta hai',
    ],
    linesEnglish: [
      'Learn to forgive not just for them, but for your own peaceful sleep',
      'Hauling old resentment only weighs down your own shoulders on the climb',
    ],
  },
  {
    title: 'चमकता किरदार',
    titleEnglish: 'True Character',
    linesHindi: [
      'कपड़ों के ब्रांड तो रोज़ बदल जाते हैं इस बाज़ार में यारो',
      'असली पहचान हमेशा इंसान के व्यवहार और ज़ुबान से होती है',
    ],
    linesHinglish: [
      'Kapdon ke brand to roz badal jaate hain is baazaar mein yaaro',
      'Asli pehchaan hamesha insaan ke vyavahaar aur zubaan se hoti hai',
    ],
    linesEnglish: [
      'Designer tags and trends swap out every other season in stores',
      'Your lasting signature always lives in how kindly you treat people',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'आशा और धैर्य',
    titleEnglish: 'Hope Plus Patience',
    linesHindi: [
      'आज का दिन थोड़ा भारी हो सकता है पर पूरी कहानी नहीं है ये',
      'कल के पन्ने पर सुंदर मोड़ आपका इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Aaj ka din thoda bhaari ho sakta hai par poori kahaani nahin hai ye',
      'Kal ke panne par sundar mod aapka intezaar kar raha hai',
    ],
    linesEnglish: [
      'Today might feel heavy, yet it is never the entire story',
      'A gentler, brighter turn already waits right on tomorrow’s page',
    ],
  },
  {
    title: 'बिन कहे मदद',
    titleEnglish: 'Quiet Generosity',
    linesHindi: [
      'सच्ची मदद वही होती है जिसमें सामने वाले की नज़रों में लाज बचे',
      'देकर जताने से तो उपकार का सारा स्वाद ही ख़त्म हो जाता है',
    ],
    linesHinglish: [
      'Sacchi madad wahi hoti hai jismein saamne waale ki nazron mein laaj bache',
      'Dekar jataane se to upkaar ka saara swaad hi khatm ho jaata hai',
    ],
    linesEnglish: [
      'Real generosity protects the dignity of the person receiving help',
      'Boasting about a favor steals away all its quiet grace instantly',
    ],
  },
  {
    title: 'सलाहें हज़ार, सफ़र अपना',
    titleEnglish: 'Trust Inner Voice',
    linesHindi: [
      'दुनिया हज़ार सलाह देगी पर सफ़र आपको खुद ही तय करना है',
      'अपने मन की साफ़ आवाज़ को कभी अनसुना मत कीजिएगा',
    ],
    linesHinglish: [
      'Duniya hazaar salaah degi par safar aapko khud hi tay karna hai',
      'Apne man ki saaf aawaaz ko kabhi ansuna mat kijiyega',
    ],
    linesEnglish: [
      'Everyone offers a dozen opinions, yet you are the one walking the miles',
      'Never drown out the calm, honest voice speaking from inside you',
    ],
  },
  {
    title: 'मुस्कान की दौलत',
    titleEnglish: 'Richness of Smiles',
    linesHindi: [
      'चेहरे की हँसी सिर्फ़ ख़ुशी का इज़हार नहीं होती मेरे दोस्त',
      'यह हमारे अंदर की ताक़त और उम्मीद की भी निशानी होती है',
    ],
    linesHinglish: [
      'Chehre ki hansi sirf khushi ka izhaar nahin hoti mere dost',
      'Yeh hamaare andar ki taaqat aur ummeed ki bhi nishaani hoti hai',
    ],
    linesEnglish: [
      'A bright smile is never merely proof that everything went smoothly',
      'Often it is the quiet badge of resilience and steady hope inside',
    ],
  },
  {
    title: 'संयम की जीत',
    titleEnglish: 'Power of Calm',
    linesHindi: [
      'गुस्से के पाँच मिनट कई महीनों की बनी-बनाई बात बिगाड़ देते हैं',
      'थोड़ा सा संयम पूरी ज़िंदगी की शांति बचा सकता है',
    ],
    linesHinglish: [
      'Gusse ke paanch minute kai mahinon ki bani-banaayi baat bigaad dete hain',
      'Thoda sa sanyam poori zindagi ki shaanti bacha sakta hai',
    ],
    linesEnglish: [
      'Five careless minutes of anger can undo months of patient trust',
      'Holding steady for a breath protects peace for years ahead',
    ],
  },
  {
    title: 'सच्चा रिश्ता',
    titleEnglish: 'Real Connection',
    linesHindi: [
      'रोज़ बात न भी हो तो दिल के तार जुड़े रहते हैं अपनों से',
      'सच्चे रिश्ते वक़्त या दूरी के मोहताज कभी नहीं होते',
    ],
    linesHinglish: [
      'Roz baat na bhi ho to dil ke taar jude rehte hain apnon se',
      'Sacche rishte waqt ya doori ke mohtaaj kabhi nahin hote',
    ],
    linesEnglish: [
      'Even without texting daily, true hearts stay quietly tuned together',
      'Real bonds never crumble over busy schedules or extra miles',
    ],
  },
  {
    title: 'आगे का नज़ारा',
    titleEnglish: 'Eyes on Horizon',
    linesHindi: [
      'कार का आगे वाला शीशा हमेशा पीछे वाले शीशे से बड़ा होता है',
      'क्योंकि आगे देखना हमेशा पीछे देखने से ज़्यादा ज़रूरी है',
    ],
    linesHinglish: [
      'Car ka aage waala sheesha hamesha peechhe waale sheeshe se bada hota hai',
      'Kyonki aage dekhna hamesha peechhe dekhne se zyada zaroori hai',
    ],
    linesEnglish: [
      'A car’s front windshield is always built ten times wider than the rearview mirror',
      'Because where you are headed matters infinitely more than what passed behind',
    ],
  },
  {
    title: 'छोटी सी कोशिश',
    titleEnglish: 'Tiny Daily Steps',
    linesHindi: [
      'हर दिन सिर्फ़ एक प्रतिशत बेहतर बनना भी कमाल कर देता है',
      'साल के अंत में आप ख़ुद को बिल्कुल नए रूप में पाते हैं',
    ],
    linesHinglish: [
      'Har din sirf ek pratishat behtar banna bhi kamaal kar deta hai',
      'Saal ke ant mein aap khud ko bilkul naye roop mein paate hain',
    ],
    linesEnglish: [
      'Improving by just one quiet percent today looks tiny in the moment',
      'By year’s end, those small steps reshape your whole life seamlessly',
    ],
  },
  {
    title: 'ईमानदारी का सुकून',
    titleEnglish: 'Peace of Honesty',
    linesHindi: [
      'झूठ बोलकर जीती हुई बाज़ी भी अंदर से भारी महसूस होती है',
      'सच्चाई से चलकर हार भी जाओ तो मन बिल्कुल हल्का रहता है',
    ],
    linesHinglish: [
      'Jhooth bolkar jeeti hui baazi bhi andar se bhaari mehsoos hoti hai',
      'Sacchaai se chalkar haar bhi jaao to man bilkul halka rehta hai',
    ],
    linesEnglish: [
      'A win bought with deception always sits heavy inside your chest',
      'Even if honesty loses a round, your mind rests clear and unbothered',
    ],
  },
  {
    title: 'उम्मीद का पुल',
    titleEnglish: 'Bridge of Hope',
    linesHindi: [
      'निराशा किनारे पर ही बैठाकर रखती है इंसान को हमेशा',
      'उम्मीद वो पुल है जो हमें हर मुश्किल नदी के पार ले जाती है',
    ],
    linesHinglish: [
      'Niraasha kinaare par hi baithaakar rakhti hai insaan ko hamesha',
      'Ummeed wo pul hai jo humein har mushkil nadi ke paar le jaati hai',
    ],
    linesEnglish: [
      'Self-doubt keeps you parked endlessly along the muddy riverbank',
      'Hope is the sturdy bridge carrying you cleanly to the far side',
    ],
  },
  {
    title: 'कठोर दुनिया में कोमल हृदय',
    titleEnglish: 'Protect Softness',
    linesHindi: [
      'दुनिया की सख़्ती देखकर अपना दिल पत्थर मत बना लेना कभी',
      'फूलों की तरह नर्म रहकर भी लोग हर दिल में बस जाते हैं',
    ],
    linesHinglish: [
      'Duniya ki sakhti dekhkar apna dil patthar mat bana lena kabhi',
      'Phoolon ki tarah narm rehkar bhi log har dil mein bas jaate hain',
    ],
    linesEnglish: [
      'Never let harsh times harden your heart into cold stone',
      'Staying gentle like blossoms is how you leave warmth everywhere you go',
    ],
  },
  {
    title: 'सही संगति',
    titleEnglish: 'Choose Your Circle',
    linesHindi: [
      'अच्छी संगत इंसान को बिना पंख के ही ऊँचा उड़ा देती है',
      'और गलत साथ सुनहरे सफ़र को भी भटका देता है राह से',
    ],
    linesHinglish: [
      'Acchi sangat insaan ko bina pankh ke hi ooncha uda deti hai',
      'Aur galat saath sunahre safar ko bhi bhatka deta hai raah se',
    ],
    linesEnglish: [
      'Good company lifts your spirit high even before you grow wings',
      'While toxic company can pull even the clearest journey off course',
    ],
  },
  {
    title: 'दवा से नहीं, दिनों से भरते घाव',
    titleEnglish: 'Gentle Time',
    linesHindi: [
      'कुछ ज़ख़्म किसी दवा से नहीं, सिर्फ़ गुज़रते दिनों से भरते हैं',
      'ख़ुद पर थोड़ा भरोसा रखिए, कल आज से ज़्यादा आसान होगा',
    ],
    linesHinglish: [
      'Kuch zakhm kisi dawa se nahin, sirf guzarte dinon se bharte hain',
      'Khud par thoda bharosa rakhiye, kal aaj se zyada aasaan hoga',
    ],
    linesEnglish: [
      'Some bruises mend not from medicine, only from gently passing days',
      'Keep trusting yourself—tomorrow will feel noticeably lighter than today',
    ],
  },
  {
    title: 'तुलना छोड़ते ही मिलता चैन',
    titleEnglish: 'Simple Formula for Joy',
    linesHindi: [
      'तुलना करना बंद करते ही जिंदगी में सुकून आ जाता है',
      'हर फूल की अपनी खुशबू और अपना मौसम होता है दोस्त',
    ],
    linesHinglish: [
      'Tulna karna band karte hi zindagi mein sukoon aa jaata hai',
      'Har phool ki apni khushboo aur apna mausam hota hai dost',
    ],
    linesEnglish: [
      'The moment you stop comparing timelines, peace walks back in',
      'Every flower blooms in its own season carrying its own unique scent',
    ],
  },
  {
    title: 'मन की सुंदरता',
    titleEnglish: 'Inner Grace',
    linesHindi: [
      'दिल की खूबसूरती उम्र बढ़ने के साथ कभी कम नहीं होती',
      'मीठा बोलने वाले लोग हर उम्र में प्यारे लगते हैं सबको',
    ],
    linesHinglish: [
      'Dil ki khoobsurati umr badhne ke saath kabhi kam nahin hoti',
      'Meetha bolne waale log har umr mein pyaare lagte hain sabko',
    ],
    linesEnglish: [
      'Kindness inside a person never fades away with passing candles',
      'Gentle speakers stay deeply beloved at every stage of life',
    ],
  },
  {
    title: 'ज़िद और सपना',
    titleEnglish: 'Grit Meets Vision',
    linesHindi: [
      'मंज़िलें उन्हीं के कदम चूमती हैं जो थक कर बैठते नहीं',
      'हौसलों की ताक़त से बड़ी कोई ताक़त नहीं होती दुनिया में',
    ],
    linesHinglish: [
      'Manzilein unheen ke qadam choomti hain jo thak kar baithte nahin',
      'Hauslon ki taaqat se badi koi taaqat nahin hoti duniya mein',
    ],
    linesEnglish: [
      'Summits greet only those climbers who refuse to quit mid-slope',
      'Nothing on earth outmatches quiet, stubborn perseverance',
    ],
  },
  {
    title: 'भीतर का उजाला',
    titleEnglish: 'Light Inside You',
    linesHindi: [
      'सूरज ढल भी जाए तो घबराने की कोई बात नहीं होती यार',
      'अगर तुम्हारे अंदर उम्मीद का छोटा सा चिराग़ जलता हो',
    ],
    linesHinglish: [
      'Sooraj dhal bhi jaaye to ghabraane ki koi baat nahin hoti yaar',
      'Agar tumhaare andar ummeed ka chhota sa chiraag jalta ho',
    ],
    linesEnglish: [
      'Even after sunset drops low, there is zero reason to panic, friend',
      'As long as one steady lantern of hope keeps burning inside you',
    ],
  },
  {
    title: 'सादगी का आकर्षण',
    titleEnglish: 'Charm of Simplicity',
    linesHindi: [
      'हज़ार बनावटें मिलकर भी सादगी की बराबरी नहीं कर पातीं',
      'सच्चा इंसान अपने सरल स्वभाव से ही सबका दिल जीत लेता है',
    ],
    linesHinglish: [
      'Hazaar banaawatein milkar bhi saadgi ki baraabari nahin kar paateen',
      'Saccha insaan apne saral swabhaav se hi sabka dil jeet leta hai',
    ],
    linesEnglish: [
      'A thousand polished masks cannot rival quiet natural grace',
      'An honest soul wins rooms effortlessly just by staying real',
    ],
  },
  {
    title: 'सीखने की उम्र',
    titleEnglish: 'Always Learning',
    linesHindi: [
      'जब इंसान सीखना बंद कर दे तभी सच में बूढ़ा होने लगता है',
      'जिज्ञासा और उत्साह मन को हमेशा जवान रखते हैं',
    ],
    linesHinglish: [
      'Jab insaan seekhna band kar de tabhi sach mein boodha hone lagta hai',
      'Jigyaasa aur utsaah man ko hamesha jawaan rakhte hain',
    ],
    linesEnglish: [
      'You only truly grow old the day curiosity turns off inside you',
      'Wonder and eagerness to learn keep the spirit forever young',
    ],
  },
  {
    title: 'ज़िंदगी का संगीत',
    titleEnglish: 'Rhythm of Life',
    linesHindi: [
      'उतार-चढ़ाव के बिना धड़कन भी सीधी लकीर बन जाती है दोस्त',
      'मुश्किल और आसान पल मिलकर ही जीवन को पूरा बनाते हैं',
    ],
    linesHinglish: [
      'Utaar-chadhaav ke bina dhadkan bhi seedhi lakeer ban jaati hai dost',
      'Mushkil aur aasaan pal milkar hi jeevan ko poora banaate hain',
    ],
    linesEnglish: [
      'Without peaks and valleys, even a heartbeat turns into a flat line',
      'Smooth days and tough days together compose the music of living',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'मज़बूत नींव',
    titleEnglish: 'Solid Foundation',
    linesHindi: [
      'ऊँची इमारत देखकर लोग अक्सर उसकी नींव भूल जाते हैं',
      'जो चुपचाप मेहनत करते हैं, वही सबसे ऊपर टिके रहते हैं',
    ],
    linesHinglish: [
      'Oonchi imaarat dekhkar log aksar uski neev bhool jaate hain',
      'Jo chupchaap mehnat karte hain, wahi sabse upar tike rehte hain',
    ],
    linesEnglish: [
      'Admiring tall skyscrapers, folks forget the hidden foundation underneath',
      'Those who build quietly underground stay standing tallest longest',
    ],
  },
  {
    title: 'दिल की भाषा',
    titleEnglish: 'Quiet Care',
    linesHindi: [
      'हर बार बड़े शब्द बोलकर प्यार जताना ज़रूरी नहीं होता',
      'गर्म चाय बनाकर रख देना भी तो मोहब्बत का इज़हार है',
    ],
    linesHinglish: [
      'Har baar bade shabd bolkar pyaar jataana zaroori nahin hota',
      'Garm chai banaakar rakh dena bhi to mohabbat ka izhaar hai',
    ],
    linesEnglish: [
      'Affection does not always show up wrapped inside grand poetry',
      'Quietly pouring a warm cup of tea says love just as loudly',
    ],
  },
  {
    title: 'वक़्त की परख',
    titleEnglish: 'True Test of Time',
    linesHindi: [
      'तारीफ़ों के पुल तो अच्छे वक़्त में हर कोई बाँध देता है',
      'बुरे दिन आते ही असली और नक़ली का फ़र्क़ दिख जाता है',
    ],
    linesHinglish: [
      'Taarifon ke pul to acche waqt mein har koi baandh deta hai',
      'Bure din aate hi asli aur naqli ka farq dikh jaata hai',
    ],
    linesEnglish: [
      'During sunny seasons, crowds line up eager to sing your praises',
      'The first stormy afternoon reveals immediately who is real and who is not',
    ],
  },
  {
    title: 'सच्चा आभार',
    titleEnglish: 'Everyday Gratitude',
    linesHindi: [
      'जो आज आपके पास है वो भी कभी आपकी दुआओं में माँगा गया था',
      'इसलिए हर सुबह शुक्राना करके दिन शुरू करना चाहिए',
    ],
    linesHinglish: [
      'Jo aaj aapke paas hai wo bhi kabhi aapki duaon mein maanga gaya tha',
      'Isliye har subah shukraana karke din shuru karna chahiye',
    ],
    linesEnglish: [
      'Much of what feels ordinary today was once something you wished hard for',
      'Begin every morning with one quiet thank you in your heart',
    ],
  },
  {
    title: 'जल्दबाज़ी से बचकर सुकून',
    titleEnglish: 'Calm Wins Long',
    linesHindi: [
      'जल्दबाज़ी में किए फ़ैसले अक्सर बाद में भारी पड़ते हैं दिल पर',
      'शांत दिमाग से लिया गया कदम हमेशा सुरक्षा देता है',
    ],
    linesHinglish: [
      'Jaldbaazi mein kiye faisle aksar baad mein bhaari padte hain dil par',
      'Shaant dimaag se liya gaya qadam hamesha suraksha deta hai',
    ],
    linesEnglish: [
      'Choices rushed in panic often come back feeling heavy months later',
      'One calm step made with a cool head protects your future well',
    ],
  },
  {
    title: 'डर के पार खड़ा आत्मबल',
    titleEnglish: 'Inner Resilience',
    linesHindi: [
      'टूटने का डर तो हर किसी के मन में थोड़ा सा रहता ही है',
      'फिर से खड़े हो जाने की आदत ही इंसान को ख़ास बनाती है',
    ],
    linesHinglish: [
      'Tootne ka dar to har kisi ke man mein thoda sa rehta hi hai',
      'Phir se khade ho jaane ki aadat hi insaan ko khaas banaati hai',
    ],
    linesEnglish: [
      'Everyone feels a quiet flicker of fear before hard leaps',
      'Getting back up one more time than you fall makes you extraordinary',
    ],
  },
  {
    title: 'शोर से दूर सुकून',
    titleEnglish: 'Stillness Over Noise',
    linesHindi: [
      'दुनिया की हर बहस में शामिल होना ज़रूरी नहीं होता मेरे भाई',
      'अपनी शांति बचाए रखना सबसे बड़ी बुद्धिमानी होती है',
    ],
    linesHinglish: [
      'Duniya ki har behas mein shaamil hona zaroori nahin hota mere bhai',
      'Apni shaanti bachaaye rakhna sabse badi buddhimaani hoti hai',
    ],
    linesEnglish: [
      'You do not have to attend every noisy argument you are invited to',
      'Protecting your quiet peace is the sharpest wisdom you can hold',
    ],
  },
  {
    title: 'अधूरी नींद और सपने',
    titleEnglish: 'Passion Keeps Awake',
    linesHindi: [
      'लक्ष्य जब दिल से जुड़ा हो तो थकान भी मीठी लगने लगती है',
      'आँखों के सामने बस कामयाबी की सुबह दिखाई देती है',
    ],
    linesHinglish: [
      'Lakshya jab dil se juda ho to thakaan bhi meethi lagne lagti hai',
      'Aankhon ke saamne bas kaamyaabi ki subah dikhaai deti hai',
    ],
    linesEnglish: [
      'When your mission means something deep, even hard work feels energizing',
      'All you see ahead is the bright morning of reaching your mark',
    ],
  },
  {
    title: 'दिलों की कद्र',
    titleEnglish: 'Handle Hearts Gently',
    linesHindi: [
      'सपने और दिल दोनों बहुत नाज़ुक होते हैं इंसान के अंदर',
      'इनके साथ हमेशा बहुत कोमलता से पेश आना चाहिए हमें',
    ],
    linesHinglish: [
      'Sapne aur dil donon bahut naazuk hote hain insaan ke andar',
      'Inke saath hamesha bahut komalta se pesh aana chahiye humein',
    ],
    linesEnglish: [
      'Both human dreams and human hearts are surprisingly fragile things',
      'Always handle someone else’s trust with gentle, careful hands',
    ],
  },
  {
    title: 'अकेले वक़्त में अपना ही हाथ',
    titleEnglish: 'Self-Trust First',
    linesHindi: [
      'जब कोई भी हाथ बढ़ाने वाला पास न दिखे मुश्किल वक़्त में',
      'तब अपने दोनों हाथ ही सबसे मज़बूत सहारा बन जाते हैं',
    ],
    linesHinglish: [
      'Jab koi bhi haath badhaane waala paas na dikhe mushkil waqt mein',
      'Tab apne donon haath hi sabse mazboot sahaara ban jaate hain',
    ],
    linesEnglish: [
      'When nobody seems close enough to lend a hand in tough times',
      'Your own two steady hands become the strongest anchor you need',
    ],
  },
  {
    title: 'अच्छाई का असर',
    titleEnglish: 'Goodness Ripples Out',
    linesHindi: [
      'एक नेक काम चाहे छोटा ही क्यों न हो, कभी बेकार नहीं जाता',
      'किसी न किसी मोड़ पर वही दुआ बनकर वापस लौट आता है',
    ],
    linesHinglish: [
      'Ek nek kaam chaahe chhota hi kyon na ho, kabhi bekaar nahin jaata',
      'Kisi na kisi mod par wahi dua bankar waapas laut aata hai',
    ],
    linesEnglish: [
      'No sincere act of kindness—however small—ever disappears wasted',
      'Around some distant bend, it always returns disguised as grace',
    ],
  },
  {
    title: 'चेहरे और दिल',
    titleEnglish: 'Beyond Appearances',
    linesHindi: [
      'मुस्कुराते चेहरे देखकर हर किसी को सुखी मत समझ लेना कभी',
      'बहुत से लोग अपने दर्द को बहुत सलीक़े से छुपा लेते हैं',
    ],
    linesHinglish: [
      'Muskuraate chehre dekhkar har kisi ko sukhi mat samajh lena kabhi',
      'Bahut se log apne dard ko bahut saleeqe se chhupa lete hain',
    ],
    linesEnglish: [
      'Never assume every smiling face walks through an effortless week',
      'Many strong souls carry quiet battles tucked neatly out of sight',
    ],
  },
  {
    title: 'मंज़िल का नशा',
    titleEnglish: 'Eyes Forward',
    linesHindi: [
      'पत्थर फेंकने वालों पर रुककर पलटने से सफ़र लंबा हो जाता है',
      'कदम बढ़ाते रहिए, मंज़िल खुद रास्ता दे देगी एक दिन',
    ],
    linesHinglish: [
      'Patthar phenkne waalon par rukkar palatne se safar lamba ho jaata hai',
      'Qadam badhaate rahiye, manzil khud raasta de degi ek din',
    ],
    linesEnglish: [
      'Stopping to argue with every pebble thrown slows the whole climb down',
      'Keep moving steadily forward and the summit clears itself for you',
    ],
  },
  {
    title: 'प्यारा एहसास',
    titleEnglish: 'Warm Feeling',
    linesHindi: [
      'दुनिया के सबसे सुंदर पल बिना प्लान बनाए ही मिल जाते हैं',
      'कभी चाय की टपरी पर, कभी किसी पुराने दोस्त के कॉल पर',
    ],
    linesHinglish: [
      'Duniya ke sabse sundar pal bina plan banaaye hi mil jaate hain',
      'Kabhi chai ki tapri par, kabhi kisi purane dost ke call par',
    ],
    linesEnglish: [
      'Life’s finest moments almost always arrive completely unscheduled',
      'At a roadside tea stall or on an unexpected call from an old friend',
    ],
  },
  {
    title: 'रिश्तों की देखभाल',
    titleEnglish: 'Watering Bonds',
    linesHindi: [
      'पौधे की तरह हर रिश्ते को भी थोड़ा वक़्त और पानी चाहिए होता है',
      'व्यस्तता के बहाने अपनों से दूर मत होते चले जाइएगा',
    ],
    linesHinglish: [
      'Paudhe ki tarah har rishte ko bhi thoda waqt aur paani chahiye hota hai',
      'Vyastata ke bahaane apnon se door mat hote chale jaaiyega',
    ],
    linesEnglish: [
      'Like garden plants, cherished relationships need steady time and care',
      'Never let busy calendars slowly drift you apart from the people you love',
    ],
  },
  {
    title: 'सच्ची सुंदरता',
    titleEnglish: 'Real Beauty',
    linesHindi: [
      'आवाज़ की मिठास और नज़रों की शराफ़त इंसान को अनमोल बनाती है',
      'दिल सुंदर हो तो शक्ल अपने आप रोशन लगने लगती है',
    ],
    linesHinglish: [
      'Aawaaz ki mithaas aur nazron ki sharaafat insaan ko anmol banaati hai',
      'Dil sundar ho to shakl apne aap roshan lagne lagti hai',
    ],
    linesEnglish: [
      'Gentleness of voice and decency of gaze make someone unforgettable',
      'When the heart inside is kind, the whole face naturally glows warm',
    ],
  },
  {
    title: 'नई सुबह की ताकत',
    titleEnglish: 'Fresh Start Power',
    linesHindi: [
      'एक रात में सब कुछ भले न बदले पर एक फ़ैसला सब बदल सकता है',
      'आज से बेहतर होने की छोटी सी शुरुआत अभी भी हो सकती है',
    ],
    linesHinglish: [
      'Ek raat mein sab kuch bhale na badle par ek faisla sab badal sakta hai',
      'Aaj se behtar hone ki chhoti si shuruaat abhi bhi ho sakti hai',
    ],
    linesEnglish: [
      'Everything rarely transforms overnight, yet one bold choice shifts the arc',
      'Starting small toward a healthier tomorrow can begin this very minute',
    ],
  },
  {
    title: 'मन का आईना',
    titleEnglish: 'Reflection Within',
    linesHindi: [
      'जैसी ऊर्जा आप दुनिया को देते हैं वही लौटकर आती है पास',
      'इसलिए हर मुलाक़ात में थोड़ा प्यार और सम्मान छोड़ आया कीजिए',
    ],
    linesHinglish: [
      'Jaisi oorja aap duniya ko dete hain wahi lautkar aati hai paas',
      'Isliye har mulaaqaat mein thoda pyaar aur sammaan chhod aaya kijiye',
    ],
    linesEnglish: [
      'Whatever energy you send outward tends to circle gently right back',
      'Leave behind a little warmth and respect in every room you walk through',
    ],
  },
  {
    title: 'ख़ामोश जीत',
    titleEnglish: 'Silent Success',
    linesHindi: [
      'अंधेरे कमरे में की गई मेहनत ही उजाले में ताज पहनती है दोस्त',
      'बिना प्रचार के बस अपने काम को बेहतरीन बनाते रहिए',
    ],
    linesHinglish: [
      'Andhere kamre mein ki gayi mehnat hi ujaale mein taaj pehenti hai dost',
      'Bina prachaar ke bas apne kaam ko behtareen banaate rahiye',
    ],
    linesEnglish: [
      'Late-night work done behind closed doors earns the crown in daylight',
      'Skip empty hype and keep sharpening your craft quietly every day',
    ],
  },
  {
    title: 'कैलेन्डर से बड़ी ज़िंदादिली',
    titleEnglish: 'Lively Spirit',
    linesHindi: [
      'उम्र तो महज़ कैलेंडर के पन्ने पलटने का नाम है यारो',
      'असली जवानी तो दिल के ज़िंदादिल और खुश रहने में है',
    ],
    linesHinglish: [
      'Umr to mehaz calendar ke panne palatne ka naam hai yaaro',
      'Asli jawaani to dil ke zindaadil aur khush rehne mein hai',
    ],
    linesEnglish: [
      'Age is merely turning pages across a wall calendar, friend',
      'Staying genuinely young lives inside an eager, joyful spirit',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'सच्ची समझदारी',
    titleEnglish: 'True Wisdom',
    linesHindi: [
      'कम बोलना और ज़्यादा सुनना भी बड़ी समझदारी की निशानी है',
      'जो बात ज़रूरी न हो उसे मुस्कुराकर टाल देना ही बेहतर है',
    ],
    linesHinglish: [
      'Kam bolna aur zyada sunna bhi badi samajhdaari ki nishaani hai',
      'Jo baat zaroori na ho use muskuraakar taal dena hi behtar hai',
    ],
    linesEnglish: [
      'Speaking thoughtfully and listening deeply is a rare quiet skill',
      'Smiling past unnecessary drama saves energy for what matters',
    ],
  },
  {
    title: 'सपनो की उड़ान',
    titleEnglish: 'Soaring High',
    linesHindi: [
      'ऊँचाइयों से वही डरते हैं जिन्होंने कभी उड़ान भरी ही न हो',
      'पहला कदम उठाइए, हवाएँ ख़ुद आपका साथ देने लगेंगी',
    ],
    linesHinglish: [
      'Oonchaaiyon se wahi darte hain jinhone kabhi udaan bhari hi na ho',
      'Pehla qadam uthaaiye, hawaayein khud aapka saath dene lagengi',
    ],
    linesEnglish: [
      'Only people who never tried leaping stay afraid of open sky',
      'Take the first brave step and watch the wind lift your wings',
    ],
  },
  {
    title: 'हर दौर के गुज़र जाने का सच',
    titleEnglish: 'Time Keeps Moving',
    linesHindi: [
      'अच्छा वक़्त हो या कठिन दौर, दोनों की सबसे अच्छी बात एक है',
      'कि दोनों हमेशा के लिए नहीं रुकते, धीरे-धीरे गुज़र ही जाते हैं',
    ],
    linesHinglish: [
      'Accha waqt ho ya kathin daur, donon ki sabse acchi baat ek hai',
      'Ki donon hamesha ke liye nahin rukte, dheere-dheere guzar hi jaate hain',
    ],
    linesEnglish: [
      'Sunny seasons and stormy chapters share one reassuring truth',
      'Neither stays permanently—everything eventually shifts and moves on',
    ],
  },
  {
    title: 'दिल की गहराई से बात',
    titleEnglish: 'Spoken Sincerely',
    linesHindi: [
      'काग़ज़ पर लिखी दो लाइनें भी पूरी कहानी कह जाती हैं कभी',
      'जब वो शब्दों से नहीं, सीधे सच्चे एहसास से लिखी गई हों',
    ],
    linesHinglish: [
      'Kaagaz par likhi do linein bhi poori kahaani keh jaati hain kabhi',
      'Jab wo shabdon se nahin, seedhe sacche ehsaas se likhi gayi hon',
    ],
    linesEnglish: [
      'Even two plain lines on paper carry an entire novel inside them',
      'Whenever they come straight from lived truth rather than clever ink',
    ],
  },
  {
    title: 'आनंद का रहस्य',
    titleEnglish: 'Secret of Peace',
    linesHindi: [
      'हर किसी को खुश करने की ज़िद इंसान को थका देती है जल्दी',
      'ख़ुद से ईमानदार रहना ही सबसे हल्का जीवन देता है',
    ],
    linesHinglish: [
      'Har kisi ko khush karne ki zid insaan ko thaka deti hai jaldi',
      'Khud se imaandaar rehna hi sabse halka jeevan deta hai',
    ],
    linesEnglish: [
      'Trying desperately to please every room wears you down fast',
      'Living honestly with yourself gives the lightest, clearest peace',
    ],
  },
  {
    title: 'छोटी बात, बड़ा असर',
    titleEnglish: 'Little Gestures Count',
    linesHindi: [
      'कोई बहुत बड़ा तोहफ़ा नहीं, बस वक़्त पर किया एक फ़ोन काफी है',
      'अपनों को याद रखने के लिए छोटे-छोटे इशारे ही बहुत होते हैं',
    ],
    linesHinglish: [
      'Koi bahut bada tohfa nahin, bas waqt par kiya ek phone kaafi hai',
      'Apnon ko yaad rakhne ke liye chhote-chhote ishaare hi bahut hote hain',
    ],
    linesEnglish: [
      'No grand luxury present is needed—one timely check-in call says plenty',
      'Tiny, thoughtful gestures are enough to keep loved ones feeling treasured',
    ],
  },
  {
    title: 'दूसरों से नहीं, ख़ुद से रोशनी',
    titleEnglish: 'Real Inspiration',
    linesHindi: [
      'दूसरों की चमक देखकर जलने से ज़्यादा अच्छा है ख़ुद जलना सीखना',
      'सूरज बनने के लिए थोड़ी सी तपिश तो सहनी ही पड़ती है',
    ],
    linesHinglish: [
      'Doosron ki chamak dekhkar jalne se zyada accha hai khud jalna seekhna',
      'Sooraj banne ke liye thodi si tapish to sehni hi padti hai',
    ],
    linesEnglish: [
      'Instead of envying someone else’s spotlight, learn how to ignite your own',
      'Even the rising sun endures steady heat before lighting up the sky',
    ],
  },
  {
    title: 'मुश्किल वक़्त में टिकी मुस्कान',
    titleEnglish: 'Steady Under Pressure',
    linesHindi: [
      'मुस्कुराते रहना आसान है जब सब कुछ योजना के अनुसार चले',
      'तूफ़ान में भी शांत रहना ही असली मज़बूती की पहचान है',
    ],
    linesHinglish: [
      'Muskuraate rehna aasaan hai jab sab kuch yojana ke anusaar chale',
      'Toofaan mein bhi shaant rehna hi asli mazbooti ki pehchaan hai',
    ],
    linesEnglish: [
      'Smiling feels effortless whenever every piece goes exactly to plan',
      'Staying grounded inside unexpected storms proves true inner strength',
    ],
  },
  {
    title: 'अनकहे जज़्बात',
    titleEnglish: 'Quietly Felt',
    linesHindi: [
      'हर आँसू दुख का नहीं और हर हँसी ख़ुशी की नहीं होती हमेशा',
      'किसी को समझने के लिए उसके पास बैठकर सुनना ज़रूरी है',
    ],
    linesHinglish: [
      'Har aansoo dukh ka nahin aur har hansi khushi ki nahin hoti hamesha',
      'Kisi ko samajhne ke liye uske paas baithkar sunna zaroori hai',
    ],
    linesEnglish: [
      'Not every tear is sorrow, and not every bright laugh means life is easy',
      'To truly understand someone, sit down beside them and actually listen',
    ],
  },
  {
    title: 'पहाड़ों में नहीं, भीतर बसती शांति',
    titleEnglish: 'Finding Serenity',
    linesHindi: [
      'शांति किसी दूर पहाड़ की चोटी पर नहीं छिपी होती यारो',
      'वो तो हमारे ही शांत और संतुष्ट विचारों में रहती है',
    ],
    linesHinglish: [
      'Shaanti kisi door pahaad ki choti par nahin chhipi hoti yaaro',
      'Wo to hamaare hi shaant aur santusht vichaaron mein rehti hai',
    ],
    linesEnglish: [
      'Serenity is not hiding exclusively atop some distant mountain peak',
      'It lives right inside calm, grateful thoughts wherever you stand today',
    ],
  },
  {
    title: 'सफ़र का मज़ा',
    titleEnglish: 'Enjoy the Climb',
    linesHindi: [
      'मंज़िल पर पहुँचने की जल्दी में रास्ते के फूल मत कुचल देना',
      'सफ़र का आनंद लेना भी उतना ही ज़रूरी होता है जीवन में',
    ],
    linesHinglish: [
      'Manzil par pahunchne ki jaldi mein raaste ke phool mat kuchal dena',
      'Safar ka aanand lena bhi utna hi zaroori hota hai jeevan mein',
    ],
    linesEnglish: [
      'In a frantic sprint toward the finish line, never trample the wildflowers nearby',
      'Savoring the road itself matters just as much as arriving',
    ],
  },
  {
    title: 'नफ़रत से दूर सेहतमंद मन',
    titleEnglish: 'Healthy Heart',
    linesHindi: [
      'हल्का खाना, साफ़ हवा और किसी से नफ़रत न रखने की आदत',
      'बस इतनी सी चीज़ें इंसान को सालों तक जवाँ रखती हैं',
    ],
    linesHinglish: [
      'Halka khaana, saaf hawa aur kisi se nafrat na rakhne ki aadat',
      'Bas itni si cheezein insaan ko saalon tak jawaan rakhti hain',
    ],
    linesEnglish: [
      'Simple meals, fresh morning air, and carrying zero grudges against anyone',
      'Those modest habits keep a person vibrant for decades',
    ],
  },
  {
    title: 'भरोसे का वजन',
    titleEnglish: 'Weight of Trust',
    linesHindi: [
      'भरोसा कमाने में बरसों की ईमानदारी लग जाती है इंसान को',
      'गँवाने के लिए बस एक छोटा सा झूठ ही काफी होता है',
    ],
    linesHinglish: [
      'Bharosa kamaane mein barson ki imaandaari lag jaati hai insaan ko',
      'Ganwaane ke liye bas ek chhota sa jhooth hi kaafi hota hai',
    ],
    linesEnglish: [
      'Earning deep trust takes years of quiet consistency',
      'Losing it forever takes just one careless lie',
    ],
  },
  {
    title: 'सही समय की प्रतीक्षा',
    titleEnglish: 'Right Timing',
    linesHindi: [
      'कुछ देर से मिलने वाली चीज़ें ज़्यादा टिकाऊ होती हैं जीवन में',
      'जल्दी टूटने वाली शाख से बेहतर है मज़बूत पेड़ बनना',
    ],
    linesHinglish: [
      'Kuch der se milne waali cheezein zyada tikaau hoti hain jeevan mein',
      'Jaldi tootne waali shaakh se behtar hai mazboot ped banna',
    ],
    linesEnglish: [
      'Blessings that take a little longer to mature almost always last longest',
      'Growing deep roots as a sturdy oak beats shooting up like fragile grass',
    ],
  },
  {
    title: 'हल्की मुस्कान',
    titleEnglish: 'Gentle Grin',
    linesHindi: [
      'कभी-कभी सब कुछ ठीक करने के लिए किसी जादू की ज़रूरत नहीं',
      'बस एक कप चाय और एक सच्ची मुस्कान काफी हो जाती है',
    ],
    linesHinglish: [
      'Kabhi-kabhi sab kuch theek karne ke liye kisi jaadu ki zaroorat nahin',
      'Bas ek cup chai aur ek sacchi muskaan kaafi ho jaati hai',
    ],
    linesEnglish: [
      'Sometimes turning a tough afternoon around requires zero grand magic',
      'Just one warm cup of tea and one real smile do the trick',
    ],
  },
  {
    title: 'किरदार की खुशबू',
    titleEnglish: 'Scent of Goodness',
    linesHindi: [
      'फूल मुरझाने के बाद भी हाथों में अपनी खुशबू छोड़ जाते हैं',
      'अच्छे लोगों का साथ भी दिल पर ऐसी ही छाप छोड़ता है',
    ],
    linesHinglish: [
      'Phool murjhaane ke baad bhi haathon mein apni khushboo chhod jaate hain',
      'Acche logon ka saath bhi dil par aisi hi chhaap chhodta hai',
    ],
    linesEnglish: [
      'Long after petals fade, a rose leaves faint perfume across your palms',
      'Time spent around genuinely good people leaves that exact trace on the heart',
    ],
  },
  {
    title: 'असली साहस',
    titleEnglish: 'True Bravery',
    linesHindi: [
      'डर न लगना बहादुरी नहीं होती, ये तो बस लापरवाही है दोस्त',
      'डर लगने के बावजूद सही कदम उठाना ही असली साहस है',
    ],
    linesHinglish: [
      'Dar na lagna bahaaduri nahin hoti, ye to bas laaparwaahi hai dost',
      'Dar lagne ke baawajood sahi qadam uthaana hi asli saahas hai',
    ],
    linesEnglish: [
      'Never feeling nervous is not bravery—it is mostly recklessness',
      'Feeling the butterflies and still taking the right step forward is courage',
    ],
  },
  {
    title: 'मन की किताब',
    titleEnglish: 'Open Heart Book',
    linesHindi: [
      'जिंदगी की किताब में कुछ पन्ने दुख के भी आते हैं ज़रूर',
      'पर उनके बिना पूरी कहानी कभी सुंदर बन ही नहीं पाती',
    ],
    linesHinglish: [
      'Zindagi ki kitaab mein kuch panne dukh ke bhi aate hain zaroor',
      'Par unke bina poori kahaani kabhi sundar ban hi nahin paati',
    ],
    linesEnglish: [
      'A few rainy pages always slip inside the book of every human life',
      'Without those contrasts, the brightest chapters would never shine as deep',
    ],
  },
  {
    title: 'डर से नहीं, कर्म से झुकता सिर',
    titleEnglish: 'Commanded Respect',
    linesHindi: [
      'डर से झुकाया गया सिर कुछ ही दिनों में सीधा हो जाता है',
      'प्यार और सम्मान से झुकाया गया दिल हमेशा जुड़ा रहता है',
    ],
    linesHinglish: [
      'Dar se jhukaaya gaya sir kuch hi dinon mein seedha ho jaata hai',
      'Pyaar aur sammaan se jhukaaya gaya dil hamesha juda rehta hai',
    ],
    linesEnglish: [
      'Respect forced through fear snaps away the second backs are turned',
      'Respect earned through warmth and fairness stays loyal for decades',
    ],
  },
  {
    title: 'सुनहरा नियम',
    titleEnglish: 'Golden Rule',
    linesHindi: [
      'जैसा व्यवहार आप ख़ुद के लिए चाहते हैं इस दुनिया से हमेशा',
      'बिल्कुल वैसा ही पहले दूसरों को देना शुरू कर दीजिए',
    ],
    linesHinglish: [
      'Jaisa vyavahaar aap khud ke liye chahte hain is duniya se hamesha',
      'Bilkul waisa hi pehle doosron ko dena shuru kar dijiye',
    ],
    linesEnglish: [
      'The exact grace and patience you hope to receive from the world',
      'Begin offering freely to the people right in front of you first',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'गहरी बात, छोटे शब्द',
    titleEnglish: 'Short Yet Deep',
    linesHindi: [
      'बड़े-बड़े भाषण अक्सर दिमाग के ऊपर से निकल जाते हैं दोस्त',
      'दिल को छूने के लिए बस दो सच्ची पंक्तियाँ काफी होती हैं',
    ],
    linesHinglish: [
      'Bade-bade bhaashan aksar dimaag ke upar se nikal jaate hain dost',
      'Dil ko chhoone ke liye bas do sacchi panktiyaan kaafi hoti hain',
    ],
    linesEnglish: [
      'Long, heavy speeches often float right past busy minds',
      'To touch a heart genuinely, two honest lines are always plenty',
    ],
  },
  {
    title: 'परख की कसौटी',
    titleEnglish: 'Character Under Pressure',
    linesHindi: [
      'चम्मच से समुद्र की गहराई कभी नापी नहीं जा सकती यारो',
      'इंसान की गहराई भी उसके सबसे कठिन दिन में दिखती है',
    ],
    linesHinglish: [
      'Chammach se samudra ki gehraai kabhi naapi nahin jaa sakti yaaro',
      'Insaan ki gehraai bhi uske sabse kathin din mein dikhti hai',
    ],
    linesEnglish: [
      'You can never measure an ocean’s depth using a teacup',
      'A person’s true character only shows clearly under real pressure',
    ],
  },
  {
    title: 'खुश रहने की आदत',
    titleEnglish: 'Habit of Happiness',
    linesHindi: [
      'मुश्किलों में भी मुस्करा लेने का हुनर हर किसी को नहीं आता',
      'पर जो सीख ले उसे कोई भी परिस्थिति हरा नहीं पाती',
    ],
    linesHinglish: [
      'Mushkilon mein bhi muskura lene ka hunar har kisi ko nahin aata',
      'Par jo seekh le use koi bhi paristhiti hara nahin paati',
    ],
    linesEnglish: [
      'Keeping a light heart inside heavy weeks is a rare quiet art',
      'Anyone who masters it can walk undefeated through any season',
    ],
  },
  {
    title: 'शब्दों की मर्यादा',
    titleEnglish: 'Weight of Words',
    linesHindi: [
      'मीठे शब्दों से पत्थर भी पिघलकर रास्ता दे देते हैं कभी',
      'कड़वे लफ़्ज़ तो अपनों को भी अजनबी बना दिया करते हैं',
    ],
    linesHinglish: [
      'Meethe shabdon se patthar bhi pighalkar raasta de dete hain kabhi',
      'Kadwe lafz to apnon ko bhi ajnabi bana diya karte hain',
    ],
    linesEnglish: [
      'Gentle speech can soften even the hardest wall into an open door',
      'Harsh words turn even familiar loved ones into distant strangers',
    ],
  },
  {
    title: 'अपनी रफ़्तार से चलो',
    titleEnglish: 'Walk Your Pace',
    linesHindi: [
      'हर दौड़ में सबसे पहले पहुँचना ज़रूरी नहीं होता जीवन में',
      'सही सलामत और संतुष्ट पहुँचना कहीं ज़्यादा मायने रखता है',
    ],
    linesHinglish: [
      'Har daud mein sabse pehle pahunchna zaroori nahin hota jeevan mein',
      'Sahi salaamat aur santusht pahunchna kahin zyada maayne rakhta hai',
    ],
    linesEnglish: [
      'Finishing first in every crowded race rarely guarantees peace',
      'Arriving healthy, honest, and whole matters infinitely more',
    ],
  },
  {
    title: 'सुकून की शाम',
    titleEnglish: 'Peaceful Dusk',
    linesHindi: [
      'दिन भर की थकान उतर जाती है जब घर की रोशनी दिखती है',
      'सारे शहरों से प्यारा अपना छोटा सा आशियाना ही लगता है',
    ],
    linesHinglish: [
      'Din bhar ki thakaan utar jaati hai jab ghar ki raushni dikhti hai',
      'Saare shehron se pyaara apna chhota sa aashiyaana hi lagta hai',
    ],
    linesEnglish: [
      'All day exhaustion melts right away the second home lights appear',
      'No grand skyline beats your own warm, familiar roof at dusk',
    ],
  },
  {
    title: 'प्यार का प्रमाण',
    titleEnglish: 'Proof of Caring',
    linesHindi: [
      'हज़ार झूठी कसमें खाने से बेहतर है एक बार साथ निभा जाना',
      'वफ़ा शब्दों से नहीं, हमेशा वक़्त और कर्म से दिखती है',
    ],
    linesHinglish: [
      'Hazaar jhoothi qasmein khaane se behtar hai ek baar saath nibha jaana',
      'Wafa shabdon se nahin, hamesha waqt aur karm se dikhti hai',
    ],
    linesEnglish: [
      'Showing up once when needed beats swearing a thousand loud vows',
      'Loyalty is proven in action and presence—never speeches alone',
    ],
  },
  {
    title: 'सीखने की राह',
    titleEnglish: 'Growth Mindset',
    linesHindi: [
      'जब भी कोई नया दरवाज़ा बंद मिले तो घबराइएगा मत कभी',
      'ताला खोलने के लिए सिर्फ़ सही चाबी ढूँढने की देर होती है',
    ],
    linesHinglish: [
      'Jab bhi koi naya darwaaza band mile to ghabraaiyega mat kabhi',
      'Taala kholne ke liye sirf sahi chaabi dhoondhne ki der hoti hai',
    ],
    linesEnglish: [
      'Whenever an important door stays shut at first knock, stay patient',
      'Every stubborn lock simply asks for the right skill and timing',
    ],
  },
  {
    title: 'सच्ची खुशी अंदर',
    titleEnglish: 'Inside Out Joy',
    linesHindi: [
      'बाहर के मौसम से कब तक अपने मन का तापमान तय करोगे',
      'अपनी ख़ुशी का थर्मोस्टेट अपने ही दिल में लगाना सीखो',
    ],
    linesHinglish: [
      'Baahar ke mausam se kab tak apne man ka taapmaan tay karoge',
      'Apni khushi ka thermostat apne hi dil mein lagaana seekho',
    ],
    linesEnglish: [
      'How long will you let outside weather dictate your mood inside',
      'Learn to set your own calm temperature from deep within your heart',
    ],
  },
  {
    title: 'दिल बड़ा रखो',
    titleEnglish: 'Big Heart Living',
    linesHindi: [
      'छोटी-छोटी बातों पर नाराज़ होने से ज़्यादा कीमती होता है समय',
      'दिल बड़ा रखिए, अनदेखा करना सीखने से आधे तनाव ख़त्म हैं',
    ],
    linesHinglish: [
      'Chhoti-chhoti baaton par naaraaz hone se zyada keemti hota hai samay',
      'Dil bada rakhiye, andekha karna seekhne se aadhe tanaav khatm hain',
    ],
    linesEnglish: [
      'Your precious hours deserve better than lingering over tiny slights',
      'Let small noise roll off gracefully and half your stress disappears',
    ],
  },
  {
    title: 'उम्मीद की डोर',
    titleEnglish: 'Thread of Belief',
    linesHindi: [
      'पतंग कितनी भी ऊँची उड़े पर डोर के सहारे ही संतुलन पाती है',
      'इंसान भी ज़मीन से जुड़ा रहे तभी ऊँचाइयों पर टिकता है',
    ],
    linesHinglish: [
      'Patang kitni bhi oonchi ude par dor ke sahaare hi santulan paati hai',
      'Insaan bhi zameen se juda rahe tabhi oonchaaiyon par tikta hai',
    ],
    linesEnglish: [
      'No matter how high a kite climbs, a steady string keeps it balanced',
      'Staying humble and grounded is how anyone endures at great heights',
    ],
  },
  {
    title: 'वक़्त से दोस्ती',
    titleEnglish: 'Friends With Time',
    linesHindi: [
      'ज़ल्दी पाने की चाह में अक्सर इंसान अधूरा ही रुक जाता है',
      'वक़्त को अपना दोस्त बनाइए, हर चीज़ समय पर पकती है',
    ],
    linesHinglish: [
      'Jaldi paane ki chaah mein aksar insaan adhoora hi ruk jaata hai',
      'Waqt ko apna dost banaaiye, har cheez samay par pakti hai',
    ],
    linesEnglish: [
      'Rushing the harvest always leaves fruit sour and half-grown',
      'Make time your steady partner—everything ripens right on schedule',
    ],
  },
  {
    title: 'अच्छी नींद की दवा',
    titleEnglish: 'Clear Conscience Sleep',
    linesHindi: [
      'किसी का दिल न दुखाने की आदत इंसान को सबसे सुकून देती है',
      'साफ़ ज़मीर से बढ़कर कोई मुलायम तकिया नहीं दुनिया में',
    ],
    linesHinglish: [
      'Kisi ka dil na dukhaane ki aadat insaan ko sabse sukoon deti hai',
      'Saaf zameer se badhkar koi mulaayam takiya nahin duniya mein',
    ],
    linesEnglish: [
      'Making it a habit never to harm another soul brings rare comfort',
      'Nothing in the world feels softer than sleeping on a clean conscience',
    ],
  },
  {
    title: 'मेहनत का उजाला',
    titleEnglish: 'Glow of Hustle',
    linesHindi: [
      'जो लोग रातों को जागकर अपने हुनर को तराशते रहते हैं',
      'एक दिन उन्हीं की कहानी दुनिया बैठकर चाव से सुनती है',
    ],
    linesHinglish: [
      'Jo log raaton ko jaagkar apne hunar ko taraashte rehte hain',
      'Ek din unheen ki kahaani duniya baithkar chaav se sunti hai',
    ],
    linesEnglish: [
      'Those who quietly sharpen their craft long after midnight',
      'Eventually build stories the whole world sits down eager to hear',
    ],
  },
  {
    title: 'सादगी में शोभा',
    titleEnglish: 'Grace in Modesty',
    linesHindi: [
      'झुके हुए फलों से लदे पेड़ हमेशा सबसे ज़्यादा सुंदर दिखते हैं',
      'विनम्रता हर कामयाब इंसान का सबसे अनमोल आभूषण है',
    ],
    linesHinglish: [
      'Jhuke hue phalon se lade ped hamesha sabse zyada sundar dikhte hain',
      'Vinamrata har kaamyaab insaan ka sabse anmol aabhooshan hai',
    ],
    linesEnglish: [
      'Branches heavy with sweet fruit always bow gently toward the earth',
      'Humility remains the finest crown any successful person wears',
    ],
  },
  {
    title: 'एकांत में परखी गई ईमानदारी',
    titleEnglish: 'Who You Are Quietly',
    linesHindi: [
      'आपकी असली पहचान तब दिखती है जब कोई देख न रहा हो आपको',
      'ईमानदारी किसी कैमरे के सामने नहीं, एकांत में परखी जाती है',
    ],
    linesHinglish: [
      'Aapki asli pehchaan tab dikhti hai jab koi dekh na raha ho aapko',
      'Imaandaari kisi camera ke saamne nahin, ekaant mein parkhi jaati hai',
    ],
    linesEnglish: [
      'Your real character shines clearest when nobody else is watching',
      'Integrity is never tested in front of cameras—it lives in private choices',
    ],
  },
  {
    title: 'सुकून की कुंजी',
    titleEnglish: 'Key to Calm',
    linesHindi: [
      'दूसरों से कम उम्मीद और खुद पर ज़्यादा भरोसा रखना सीखिए',
      'ज़िंदगी की आधे से ज़्यादा मायूसी यहीं ख़त्म हो जाएगी',
    ],
    linesHinglish: [
      'Doosron se kam ummeed aur khud par zyada bharosa rakhna seekhiye',
      'Zindagi ki aadhe se zyada maayoosi yaheen khatm ho jaayegi',
    ],
    linesEnglish: [
      'Expect a little less from passersby and rely steadier on yourself',
      'Half of life’s quiet disappointments vanish almost overnight',
    ],
  },
  {
    title: 'छोटी सी मुस्कान',
    titleEnglish: 'Shared Warmth',
    linesHindi: [
      'मुस्कान बाँटने से कभी कम नहीं होती मेरे प्यारे दोस्त',
      'बल्कि सामने वाले के चेहरे से लौटकर दोगुनी हो जाती है',
    ],
    linesHinglish: [
      'Muskaan baantne se kabhi kam nahin hoti mere pyaare dost',
      'Balki saamne waale ke chehre se lautkar doguni ho jaati hai',
    ],
    linesEnglish: [
      'Giving away a genuine smile never leaves you with less, friend',
      'It bounces straight off another face and doubles right back to you',
    ],
  },
  {
    title: 'सच्ची दौलत समय',
    titleEnglish: 'Time With Loved Ones',
    linesHindi: [
      'अपनों को तोहफ़ों से ज़्यादा आपके थोड़े से वक़्त की ज़रूरत होती है',
      'काम के बीच में कुछ घंटे सिर्फ़ उनके नाम ज़रूर रखिए',
    ],
    linesHinglish: [
      'Apnon ko tohfon se zyada aapke thode se waqt ki zaroorat hoti hai',
      'Kaam ke beech mein kuch ghante sirf unke naam zaroor rakhiye',
    ],
    linesEnglish: [
      'Loved ones treasure your undivided presence far more than expensive gifts',
      'Carve out unhurried hours just for them amid every busy week',
    ],
  },
  {
    title: 'आशा भरी नज़र',
    titleEnglish: 'Hopeful Gaze',
    linesHindi: [
      'अंधेरी सुरंग में भी आख़िरी छोर पर रोशनी ज़रूर चमकती है',
      'बस बीच रास्ते में कदम रोक देने की ग़लती मत कीजिए',
    ],
    linesHinglish: [
      'Andheri surang mein bhi aakhiri chhor par roshni zaroor chamakti hai',
      'Bas beech raaste mein qadam rok dene ki galti mat kijiye',
    ],
    linesEnglish: [
      'Even the longest dark tunnel opens onto clear daylight at the far end',
      'Just make sure you never quit walking halfway through the shade',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'सच्चाई का बल',
    titleEnglish: 'Strength of Truth',
    linesHindi: [
      'सच बोलने वाले को कभी याद नहीं रखना पड़ता कि कल क्या कहा था',
      'साफ़ बात कहने का सुकून हर चालाकी से बड़ा होता है',
    ],
    linesHinglish: [
      'Sach bolne waale ko kabhi yaad nahin rakhna padta ki kal kya kaha tha',
      'Saaf baat kehne ka sukoon har chaalaaki se bada hota hai',
    ],
    linesEnglish: [
      'Honest people never need to memorize which story they told yesterday',
      'The peace of plain truth beats every clever script ever written',
    ],
  },
  {
    title: 'दिल की सुनहरा सोच',
    titleEnglish: 'Golden Thought',
    linesHindi: [
      'जितना कम सामान होगा जीवन में, सफ़र उतना ही हल्का रहेगा',
      'जितनी कम नफ़रत होगी दिल में, नींद उतनी ही मीठी आएगी',
    ],
    linesHinglish: [
      'Jitna kam saamaan hoga jeevan mein, safar utna hi halka rahega',
      'Jitni kam nafrat hogi dil mein, neend utni hi meethi aayegi',
    ],
    linesEnglish: [
      'The lighter you pack your life, the freer the journey feels',
      'The less resentment you keep inside, the sweeter your sleep turns',
    ],
  },
  {
    title: 'मौसम और मन',
    titleEnglish: 'Seasons Inside',
    linesHindi: [
      'बारिश सभी के लिए एक जैसी बरसती है आसमान से नीचे',
      'कोई भीगकर रोता है और कोई काग़ज़ की नाव चलाता है',
    ],
    linesHinglish: [
      'Baarish sabhi ke liye ek jaisi barasti hai aasmaan se neeche',
      'Koi bheegkar rota hai aur koi kaagaz ki naav chalaata hai',
    ],
    linesEnglish: [
      'The exact same rain falls equally across every street below',
      'One person grumbles at wet shoes while another floats paper boats',
    ],
  },
  {
    title: 'ग़मों से ऊपर उठना',
    titleEnglish: 'Rise Above',
    linesHindi: [
      'जो बात बदल नहीं सकती उस पर अटकने से कुछ नहीं बदलता',
      'आगे की ओर देखिए, नई राहें खुली बाँहें लिए खड़ी हैं',
    ],
    linesHinglish: [
      'Jo baat badal nahin sakti us par atakne se kuch nahin badalta',
      'Aage ki or dekhiye, nayi raahein khuli baahein liye khadi hain',
    ],
    linesEnglish: [
      'Staring at what cannot be rewritten changes nothing behind you',
      'Turn toward the horizon—brand-new roads stand open right ahead',
    ],
  },
  {
    title: 'दोस्त नाम की दवा',
    titleEnglish: 'Magic of Friendship',
    linesHindi: [
      'अच्छे दोस्तों से मिलने के बाद आधी थकान वहीं छूट जाती है',
      'दिल को हल्का रखने के लिए ऐसे दो यार काफी होते हैं',
    ],
    linesHinglish: [
      'Acche doston se milne ke baad aadhi thakaan waheen chhoot jaati hai',
      'Dil ko halka rakhne ke liye aise do yaar kaafi hote hain',
    ],
    linesEnglish: [
      'One evening around true friends melts half your week’s stress away',
      'Two loyal buddies are all anyone needs to keep the heart light',
    ],
  },
  {
    title: 'लगन का कमाल',
    titleEnglish: 'Power of Persistence',
    linesHindi: [
      'पानी की एक बूँद भी लगातार गिरकर पत्थर में राह बना देती है',
      'छोटी पर रोज़ की मेहनत हर नामुमकिन को मुमकिन कर देती है',
    ],
    linesHinglish: [
      'Paani ki ek boond bhi lagaataar girkar patthar mein raah bana deti hai',
      'Chhoti par roz ki mehnat har naamumkin ko mumkin kar deti hai',
    ],
    linesEnglish: [
      'Steady drops of water carve pathways straight through solid stone over time',
      'Small daily consistency turns impossible goals completely reachable',
    ],
  },
  {
    title: 'किसी के चेहरे की मुस्कान बनना',
    titleEnglish: 'Being Someone’s Smile',
    linesHindi: [
      'किसी की मुस्कान की वजह बन जाना सबसे बड़ा सुकून है यार',
      'ताली तो हर कोई बजाता है, सहारा बनने का हुनर रखिए',
    ],
    linesHinglish: [
      'Kisi ki muskaan ki wajah ban jaana sabse bada sukoon hai yaar',
      'Taali to har koi bajaata hai, sahaara banne ka hunar rakhiye',
    ],
    linesEnglish: [
      'Becoming the reason someone smiles sincerely feels unmatched',
      'Plenty of people clap from seats—learn the grace of stepping up to help',
    ],
  },
  {
    title: 'नए विचार की ताकत',
    titleEnglish: 'Mindset Shift',
    linesHindi: [
      'नज़रिया बदलते ही पुरानी परेशानियाँ भी अवसर दिखने लगती हैं',
      'बस एक शांत दिमाग और सकारात्मक सोच की ज़रूरत होती है',
    ],
    linesHinglish: [
      'Nazariya badalte hi purani pareshaaniyaan bhi avsar dikhne lagti hain',
      'Bas ek shaant dimaag aur sakaaratmak soch ki zaroorat hoti hai',
    ],
    linesEnglish: [
      'Shift your angle slightly and old roadblocks look like hidden doorways',
      'All it takes is a cool head and steady willingness to see possibilities',
    ],
  },
  {
    title: 'प्यार का संतुलन',
    titleEnglish: 'Respectful Love',
    linesHindi: [
      'रिश्ते में हक़ जताना अच्छी बात है पर आज़ादी देना उससे बड़ी',
      'जहाँ भरोसा पूरा हो वहाँ बंदिशों की ज़रूरत ही नहीं पड़ती',
    ],
    linesHinglish: [
      'Rishte mein haq jataana acchi baat hai par aazaadi dena usse badi',
      'Jahaan bharosa poora ho wahaan bandishon ki zaroorat hi nahin padti',
    ],
    linesEnglish: [
      'Closeness in love feels sweet, yet giving breathing room feels wiser still',
      'Where deep trust lives, heavy rules and fences are never needed',
    ],
  },
  {
    title: 'सफलता का राज़',
    titleEnglish: 'Quiet Discipline',
    linesHindi: [
      'जहाँ लोग आराम चुनते हैं, वहाँ कुछ लोग अपनी आदतें सुधारते हैं',
      'यही छोटा सा फ़र्क़ कुछ सालों बाद बड़ी पहचान बना देता है',
    ],
    linesHinglish: [
      'Jahaan log aaraam chunte hain, wahaan kuch log apni aadatein sudhaarte hain',
      'Yahi chhota sa farq kuch saalon baad badi pehchaan bana deta hai',
    ],
    linesEnglish: [
      'Where crowds hit snooze, a few quietly refine their daily discipline',
      'That small daily margin writes an extraordinary difference years later',
    ],
  },
  {
    title: 'डिक्शनरी से परे अनकहे एहसास',
    titleEnglish: 'Language of Care',
    linesHindi: [
      'दुनिया की सबसे बड़ी डिक्शनरी में भी कुछ जज़्बात नहीं मिलते',
      'गले लगाकर चुप हो जाना हज़ार वाक्यों से भारी होता है',
    ],
    linesHinglish: [
      'Duniya ki sabse badi dictionary mein bhi kuch jazbaat nahin milte',
      'Gale lagaakar chup ho jaana hazaar vaakyon se bhaari hota hai',
    ],
    linesEnglish: [
      'Not even the thickest dictionary holds words for every deep emotion',
      'One quiet hug says infinitely more than a thousand polished phrases',
    ],
  },
  {
    title: 'चमकता भविष्य',
    titleEnglish: 'Built Today',
    linesHindi: [
      'कल कैसा होगा यह किसी ज्योतिषी के हाथ में नहीं होता दोस्त',
      'आज की हमारी छोटी कोशिशें ही कल का रूप गढ़ती हैं',
    ],
    linesHinglish: [
      'Kal kaisa hoga yeh kisi jyotishi ke haath mein nahin hota dost',
      'Aaj ki hamaari chhoti koshishein hi kal ka roop gadhti hain',
    ],
    linesEnglish: [
      'Tomorrow is never tucked secretly inside fortune cards',
      'The small, honest choices we make today sculpt every bit of tomorrow',
    ],
  },
  {
    title: 'अजनबी भी अपने',
    titleEnglish: 'Kindness to Strangers',
    linesHindi: [
      'रास्ते में मिले हर अजनबी से भी थोड़ा मुस्कुराकर बात कीजिए',
      'क्या पता किसके भारी दिन को आपकी एक झलक हल्का कर दे',
    ],
    linesHinglish: [
      'Raaste mein mile har ajnabi se bhi thoda muskuraakar baat kijiye',
      'Kya pata kiske bhaari din ko aapki ek jhalak halka kar de',
    ],
    linesEnglish: [
      'Offer polite warmth even to strangers crossing your path today',
      'You never know whose heavy afternoon brightens from one kind word',
    ],
  },
  {
    title: 'दिल की हिम्मत',
    titleEnglish: 'Brave Heart',
    linesHindi: [
      'आँखों में नमी आ जाए तो कभी शर्मिंदा मत होना मेरे यार',
      'आँसू तो इस बात का सबूत हैं कि दिल अभी ज़िंदा है अंदर',
    ],
    linesHinglish: [
      'Aankhon mein nami aa jaaye to kabhi sharminda mat hona mere yaar',
      'Aansoo to is baat ka saboot hain ki dil abhi zinda hai andar',
    ],
    linesEnglish: [
      'Never feel embarrassed if your eyes glisten on tender evenings, friend',
      'Tears are gentle proof that your heart still feels deeply and stays alive',
    ],
  },
  {
    title: 'शांति से भरी राह',
    titleEnglish: 'Peaceful Path',
    linesHindi: [
      'बहुत ज़्यादा तेज़ भागकर भी अक्सर लोग घर से दूर हो जाते हैं',
      'कभी-कभी धीमे चलकर अपनों के साथ रहना ज़्यादा कीमती है',
    ],
    linesHinglish: [
      'Bahut zyada tez bhaagkar bhi aksar log ghar se door ho jaate hain',
      'Kabhi-kabhi dheeme chalkar apnon ke saath rehna zyada keemti hai',
    ],
    linesEnglish: [
      'Sprinting too hard sometimes leaves people miles away from those they love',
      'Walking a little slower beside family is often the richest life of all',
    ],
  },
  {
    title: 'सच्ची सीख',
    titleEnglish: 'Real Wisdom',
    linesHindi: [
      'किताबें हमें दुनिया का ज्ञान सिखाती हैं हर रोज़ पन्नों में',
      'पर असली सबक़ हमेशा ज़िंदगी के तज़ुर्बों से ही मिलता है',
    ],
    linesHinglish: [
      'Kitaabein humein duniya ka gyaan sikhaati hain har roz pannon mein',
      'Par asli sabak hamesha zindagi ke tazurbon se hi milta hai',
    ],
    linesEnglish: [
      'Textbooks teach crisp facts neatly across printed pages',
      'Yet the truest lessons always arrive straight from lived experience',
    ],
  },
  {
    title: 'आँधी में भी जलता प्यार का दिया',
    titleEnglish: 'Warm Lantern',
    linesHindi: [
      'नफ़रत की आँधी में भी प्यार का छोटा दिया बचाए रखिए',
      'दुनिया को रोशनी हमेशा इन्हीं शांत चिराग़ों से मिलती है',
    ],
    linesHinglish: [
      'Nafrat ki aandhi mein bhi pyaar ka chhota diya bachaaye rakhiye',
      'Duniya ko roshni hamesha inheen shaant chiraagon se milti hai',
    ],
    linesEnglish: [
      'Even in cold winds of cynicism, shield your small lamp of kindness',
      'The world still borrows all its light from steady, gentle flames like yours',
    ],
  },
  {
    title: 'ख़ुशियों की चाबी',
    titleEnglish: 'Key to Joy',
    linesHindi: [
      'जो खो गया उसका शोक और जो बचा है उसकी कद्र के बीच फ़र्क़ है',
      'जो कद्र करना सीख ले, वही हर हाल में खुश रहता है',
    ],
    linesHinglish: [
      'Jo kho gaya uska shok aur jo bacha hai uski qadr ke beech farq hai',
      'Jo qadr karna seekh le, wahi har haal mein khush rehta hai',
    ],
    linesEnglish: [
      'There is a whole world between mourning what left and treasuring what stayed',
      'Those who learn gratitude stay quietly joyful through every turn',
    ],
  },
  {
    title: 'क़दम बढ़ते ही छोटे लगते पहाड़',
    titleEnglish: 'Resolute Will',
    linesHindi: [
      'पहाड़ दूर से ही ज़्यादा ऊँचा और डरावना लगता है आँखों को',
      'क़दम बढ़ाते ही हर चढ़ाई आसान लगने लगती है दोस्त',
    ],
    linesHinglish: [
      'Pahaad door se hi zyada ooncha aur daraawana lagta hai aankhon ko',
      'Qadam badhaate hi har chadhaai aasaan lagne lagti hai dost',
    ],
    linesEnglish: [
      'Mountains always look tallest and steepest from far down in the valley',
      'Once your boots start moving upward, every step turns manageable',
    ],
  },
  {
    title: 'अंत में सिर्फ़ मुस्कान की गिनती',
    titleEnglish: 'Simple Final Truth',
    linesHindi: [
      'अंत में कोई यह नहीं गिनता कि हमारे पास कितनी चीज़ें थीं',
      'सब यही याद रखते हैं कि हमारे होने से कितने चेहरे मुस्कुराए',
    ],
    linesHinglish: [
      'Ant mein koi yeh nahin ginta ki hamaare paas kitni cheezein theen',
      'Sab yahi yaad rakhte hain ki hamaare hone se kitne chehre muskuraaye',
    ],
    linesEnglish: [
      'At the very end, nobody counts how many possessions filled your shelves',
      'People remember only how many faces smiled brighter because you walked by',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'शोर से नहीं, सधे शब्दों से असर',
    titleEnglish: 'Power of Calm Words',
    linesHindi: [
      'शोर मचाने से कोई बात ज़्यादा सच्ची नहीं बन जाती कभी',
      'शांत और सधे हुए शब्द ही दिलों पर गहरा असर छोड़ते हैं',
    ],
    linesHinglish: [
      'Shor machaane se koi baat zyada sacchi nahin ban jaati kabhi',
      'Shaant aur sadhe hue shabd hi dilon par gehra asar chhodte hain',
    ],
    linesEnglish: [
      'Raising the volume never turns a weak argument into truth',
      'Calm, measured words leave the deepest mark on every listening heart',
    ],
  },
  {
    title: 'दिल हल्का रखकर सफ़र करना',
    titleEnglish: 'Travel Light',
    linesHindi: [
      'हर बात को दिल से लगा लेना सफ़र को मुश्किल बना देता है',
      'कुछ बातों को हवा के साथ उड़ जाने देना ही अक़्लमंदी है',
    ],
    linesHinglish: [
      'Har baat ko dil se laga lena safar ko mushkil bana deta hai',
      'Kuch baaton ko hawa ke saath ud jaane dena hi aqlmandi hai',
    ],
    linesEnglish: [
      'Taking every passing remark straight to heart makes the road exhausting',
      'Letting petty noise blow cleanly away on the breeze is real wisdom',
    ],
  },
  {
    title: 'अकेले में कंधा थपथपाने वाला यार',
    titleEnglish: 'Hand On Your Shoulder',
    linesHindi: [
      'भीड़ में हाथ मिलाने वाले सैकड़ों मिल जाएँगे राहों में',
      'अकेले में कंधा थपथपाने वाला एक यार ही काफ़ी होता है',
    ],
    linesHinglish: [
      'Bheed mein haath milaane waale saikdon mil jaayenge raahon mein',
      'Akele mein kandha thapthapaane waala ek yaar hi kaafi hota hai',
    ],
    linesEnglish: [
      'Hundreds will shake your hand cheerfully in crowded rooms',
      'Just one friend who pats your shoulder quietly when things fail is enough',
    ],
  },
  {
    title: 'अपनों की कद्र',
    titleEnglish: 'Value Near Ones',
    linesHindi: [
      'इंसान बाहर के लोगों को ख़ुश रखने में व्यस्त रहता है अक्सर',
      'और घर के सबसे क़रीब लोगों को ही कम समय दे पाता है',
    ],
    linesHinglish: [
      'Insaan baahar ke logon ko khush rakhne mein vyast rehta hai aksar',
      'Aur ghar ke sabse qareeb logon ko hi kam samay de paata hai',
    ],
    linesEnglish: [
      'So often we spend our best energy impressing acquaintances outside',
      'And hand leftover minutes to the very family waiting at home',
    ],
  },
  {
    title: 'नए रंगों की उम्मीद',
    titleEnglish: 'Brighter Horizon',
    linesHindi: [
      'कोई एक मौसम हमेशा के लिए नहीं रुकता इस धरती पर',
      'पतझड़ के ठीक पीछे वसंत की बहार आने को तैयार रहती है',
    ],
    linesHinglish: [
      'Koi ek mausam hamesha ke liye nahin rukta is dharti par',
      'Patjhad ke theek peechhe vasant ki bahaar aane ko taiyaar rehti hai',
    ],
    linesEnglish: [
      'No single season stays frozen over the earth forever',
      'Right behind every bare autumn stands spring ready to burst into bloom',
    ],
  },
  {
    title: 'खुद पर यकीन',
    titleEnglish: 'Believe In Yourself',
    linesHindi: [
      'दुनिया आपके बारे में क्या सोचती है यह उनका काम है मेरे दोस्त',
      'आप अपने बारे में क्या सोचते हैं, यही आपकी असली ताक़त है',
    ],
    linesHinglish: [
      'Duniya aapke baare mein kya sochti hai yeh unka kaam hai mere dost',
      'Aap apne baare mein kya sochte hain, yahi aapki asli taaqat hai',
    ],
    linesEnglish: [
      'What onlookers guess about you is purely their own business, friend',
      'How firmly you respect and trust yourself is where your real power sits',
    ],
  },
  {
    title: 'घड़ी से चुराए पाँच मिनट की चाय',
    titleEnglish: 'Warm Pause',
    linesHindi: [
      'भागती घड़ी से पाँच मिनट चुराकर बैठना भी कला है यारो',
      'एक कप गरम चाय कई बार पूरी थकान को धो देती है',
    ],
    linesHinglish: [
      'Bhaagti ghadi se paanch minute churaakar baithna bhi kala hai yaaro',
      'Ek cup garam chai kai baar poori thakaan ko dho deti hai',
    ],
    linesEnglish: [
      'Stealing five quiet minutes back from a rushing clock is an art',
      'One warm cup of tea washes away half a long afternoon’s fatigue',
    ],
  },
  {
    title: 'नेक दिल की पहचान',
    titleEnglish: 'Kind Heart Mark',
    linesHindi: [
      'जब अपनी परेशानी में भी किसी दूसरे की मदद करने का मन करे',
      'समझ लेना कि आपके अंदर की इंसानियत अभी पूरी तरह ज़िंदा है',
    ],
    linesHinglish: [
      'Jab apni pareshaani mein bhi kisi doosre ki madad karne ka man kare',
      'Samajh lena ki aapke andar ki insaaniyat abhi poori tarah zinda hai',
    ],
    linesEnglish: [
      'When even amid your own heavy week you still reach out to help someone',
      'Know right then that true humanity shines completely alive inside you',
    ],
  },
  {
    title: 'दूसरों के बदले न अपनी नेकी',
    titleEnglish: 'Protect Your Joy',
    linesHindi: [
      'किसी के ग़लत व्यवहार की वजह से ख़ुद की अच्छाई मत छोड़िएगा',
      'वो अपने हिस्से का काम कर रहे हैं, आप अपने हिस्से का कीजिए',
    ],
    linesHinglish: [
      'Kisi ke galat vyavahaar ki wajah se khud ki acchaai mat chhodiyega',
      'Wo apne hisse ka kaam kar rahe hain, aap apne hisse ka kijiye',
    ],
    linesEnglish: [
      'Never drop your own kindness just because someone treated you poorly',
      'They reveal their character, and you keep honoring yours',
    ],
  },
  {
    title: 'ताउम्र विद्यार्थी बने रहने का सुख',
    titleEnglish: 'Humble Learner',
    linesHindi: [
      'जो इंसान ख़ुद को हमेशा सीखने वाला मानता है जीवन भर',
      'ज़िंदगी उसे हर दिन कुछ नया और सुंदर सिखाती रहती है',
    ],
    linesHinglish: [
      'Jo insaan khud ko hamesha seekhne waala maanta hai jeevan bhar',
      'Zindagi use har din kuch naya aur sundar sikhaati rehti hai',
    ],
    linesEnglish: [
      'Whoever walks through life with the open curiosity of a student',
      'Gets handed fresh wonder and quiet lessons every single morning',
    ],
  },
  {
    title: 'वक़्त पर अपने-आप खुलती गाँठें',
    titleEnglish: 'Clear Understanding',
    linesHindi: [
      'हर सवाल का जवाब तुरंत मिल जाए ऐसा ज़रूरी नहीं होता',
      'कुछ गाँठें वक़्त आने पर ख़ुद ही बड़ी आसानी से खुल जाती हैं',
    ],
    linesHinglish: [
      'Har sawaal ka jawaab turant mil jaaye aisa zaroori nahin hota',
      'Kuch gaanthein waqt aane par khud hi badi aasaani se khul jaati hain',
    ],
    linesEnglish: [
      'Not every knot in life needs untying the same afternoon it forms',
      'Given a little time, many tangled threads loosen gently on their own',
    ],
  },
  {
    title: 'हौसला और धैर्य',
    titleEnglish: 'Courage and Calm',
    linesHindi: [
      'ताक़तवर होना अच्छी बात है पर धैर्यवान होना उससे बड़ा गुण है',
      'सही समय का इंतज़ार करने वाले ही बड़ी बाज़ी जीतते हैं',
    ],
    linesHinglish: [
      'Taaqatwar hona acchi baat hai par dhairyawaan hona usse bada gun hai',
      'Sahi samay ka intezaar karne waale hi badi baazi jeet-te hain',
    ],
    linesEnglish: [
      'Strength opens doors, yet steady patience builds empires that last',
      'Those willing to wait for the right moment always play the finest hand',
    ],
  },
  {
    title: 'ख़ुशी के छोटे रंग',
    titleEnglish: 'Little Sparks of Joy',
    linesHindi: [
      'बड़ी कामयाबी से ज़्यादा सुकून कई बार छोटी बातों में मिलता है',
      'माँ के हाथ का खाना हो या शाम को दोस्तों के साथ टहलना',
    ],
    linesHinglish: [
      'Badi kaamyaabi se zyada sukoon kai baar chhoti baaton mein milta hai',
      'Maa ke haath ka khaana ho ya shaam ko doston ke saath tehalna',
    ],
    linesEnglish: [
      'Deep joy shows up far more often in tiny rituals than grand trophies',
      'Mom’s home-cooked dinner or a relaxed evening stroll with friends',
    ],
  },
  {
    title: 'दिल से जुड़ाव',
    titleEnglish: 'Heart Connection',
    linesHindi: [
      'सिर्फ़ पास बैठने से कोई अपना नहीं बन जाता मेरे दोस्त',
      'दिलों के बीच की समझ ही किसी रिश्ते को अनमोल बनाती है',
    ],
    linesHinglish: [
      'Sirf paas baithne se koi apna nahin ban jaata mere dost',
      'Dilon ke beech ki samajh hi kisi rishte ko anmol banaati hai',
    ],
    linesEnglish: [
      'Sitting across the same table never automatically builds closeness',
      'Gentle understanding between two hearts is what makes any bond priceless',
    ],
  },
  {
    title: 'उज्ज्वल सोच',
    titleEnglish: 'Bright Outlook',
    linesHindi: [
      'काँटों की शिकायत करने से बाग़ में फूल नहीं बढ़ जाते कभी',
      'फूलों को देखकर मुस्कुराइए, पूरा मौसम ख़ुशनुमा लगेगा',
    ],
    linesHinglish: [
      'Kaanton ki shikaayat karne se baag mein phool nahin badh jaate kabhi',
      'Phoolon ko dekhkar muskuraaiye, poora mausam khushnuma lagega',
    ],
    linesEnglish: [
      'Complaining about thorns never grew an extra rose in any garden',
      'Smile toward the blossoms instead and the whole season feels brighter',
    ],
  },
  {
    title: 'हार के बाद फिर खड़े होने का मौका',
    titleEnglish: 'Greeting Dawn',
    linesHindi: [
      'कल की हार पर बैठने से बेहतर है आज फिर से खड़ा होना',
      'हर नया दिन हमें शून्य से चमकने का मौका ज़रूर देता है',
    ],
    linesHinglish: [
      'Kal ki haar par baithne se behtar hai aaj phir se khada hona',
      'Har naya din humein shoonya se chamakne ka mauka zaroor deta hai',
    ],
    linesEnglish: [
      'Far better than brooding over yesterday’s stumble is standing fresh today',
      'Every new morning hands you another clean slate to shine brightly',
    ],
  },
  {
    title: 'मुसीबत में पैसे से बड़े सच्चे रिश्ते',
    titleEnglish: 'Strength in Loyalty',
    linesHindi: [
      'पैसे से तो सिर्फ़ सहूलियत खरीदी जा सकती है बाज़ार से यारो',
      'असली मुसीबत में हमेशा सच्चे रिश्ते ही काम आते हैं',
    ],
    linesHinglish: [
      'Paise se to sirf sahooliyat khareedi jaa sakti hai baazaar se yaaro',
      'Asli museebat mein hamesha sacche rishte hi kaam aate hain',
    ],
    linesEnglish: [
      'Money only buys convenience across shiny store counters, friend',
      'In real life storms, genuine loved ones remain our truest shelter',
    ],
  },
  {
    title: 'ज़िंदगी की मिठास',
    titleEnglish: 'Sweetness of Living',
    linesHindi: [
      'थोड़ी सी हँसी, थोड़ा सा धैर्य और ढेर सारा अपनापन दिल में',
      'बस इतनी सी चीज़ों से पूरी ज़िंदगी गुलज़ार हो जाती है',
    ],
    linesHinglish: [
      'Thodi si hansi, thoda sa dhairya aur dher saara apnaapan dil mein',
      'Bas itni si cheezon se poori zindagi gulzaar ho jaati hai',
    ],
    linesEnglish: [
      'A touch of laughter, steady patience, and real warmth inside the heart',
      'Those three simple ingredients turn an entire lifetime into a garden',
    ],
  },
  {
    title: 'अपनों की मुस्कान',
    titleEnglish: 'Smiling Family',
    linesHindi: [
      'दुनिया की सारी दौलत भी उस खुशी के आगे छोटी है यार',
      'जो हमें अपने परिवार के चेहरे पर मुस्कान देखकर मिलती है',
    ],
    linesHinglish: [
      'Duniya ki saari daulat bhi us khushi ke aage chhoti hai yaar',
      'Jo humein apne parivaar ke chehre par muskaan dekhkar milti hai',
    ],
    linesEnglish: [
      'All the wealth on earth shrinks beside one pure kind of happiness',
      'Seeing genuine, carefree smiles lighting up your family’s faces',
    ],
  },
  {
    title: 'क़दमों की सचाई',
    titleEnglish: 'Honest Footsteps',
    linesHindi: [
      'रास्ता चाहे कितना भी लंबा और थकाने वाला क्यों न लगे',
      'अगर इरादा नेक है तो हर मोड़ पर मदद मिल ही जाती है',
    ],
    linesHinglish: [
      'Raasta chaahe kitna bhi lamba aur thakaane waala kyon na lage',
      'Agar iraada nek hai to har mod par madad mil hi jaati hai',
    ],
    linesEnglish: [
      'No matter how winding and tiring a long journey seems at first',
      'When intentions stay sincere, quiet help shows up around every bend',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'भीड़ में नहीं, भीतर मिला सुकून',
    titleEnglish: 'Calm Found Within',
    linesHindi: [
      'बाहर ढूँढने निकले थे जिसे हम बरसों से इस भीड़ में',
      'वह सुकून तो हमारे अपने शांत मन के भीतर ही बैठा था',
    ],
    linesHinglish: [
      'Baahar dhoondhne nikle the jise hum barson se is bheed mein',
      'Wah sukoon to hamaare apne shaant man ke bheetar hi baitha tha',
    ],
    linesEnglish: [
      'What we spent years hunting outside in noisy crowded squares',
      'Was resting peacefully inside our own quiet hearts all along',
    ],
  },
  {
    title: 'दिल से जुड़ा रिश्ता',
    titleEnglish: 'Soulful Tie',
    linesHindi: [
      'दूरी बढ़ने से सिर्फ़ मिलना कम होता है मेरे प्यारे दोस्त',
      'दिल में बसी मोहब्बत और यादें तो हमेशा पास ही रहती हैं',
    ],
    linesHinglish: [
      'Doori badhne se sirf milna kam hota hai mere pyaare dost',
      'Dil mein basi mohabbat aur yaadein to hamesha paas hi rehti hain',
    ],
    linesEnglish: [
      'Extra miles only cut down how often two friends meet in person',
      'Affection and shared memories stay tucked right beside each other always',
    ],
  },
  {
    title: 'खुलकर उड़ने के लिए खुला मन',
    titleEnglish: 'Believe and Fly',
    linesHindi: [
      'उड़ान भरने के लिए बड़े आसमान से ज़्यादा खुले मन की ज़रूरत है',
      'अपने डर को पीछे छोड़िए, दुनिया आपका स्वागत करने को तैयार है',
    ],
    linesHinglish: [
      'Udaan bharne ke liye bade aasmaan se zyada khule man ki zaroorat hai',
      'Apne dar ko peechhe chhodiye, duniya aapka swaagat karne ko taiyaar hai',
    ],
    linesEnglish: [
      'To fly far, an open fearless mindset matters even more than wide sky',
      'Leave hesitation behind—the horizon is ready to welcome you forward',
    ],
  },
  {
    title: 'टूटने के बाद और मज़बूत इंसान',
    titleEnglish: 'Healing Takes Days',
    linesHindi: [
      'हर टूटी चीज़ दोबारा पहले जैसी भले न दिखे दुनिया को',
      'पर पहले से ज़्यादा मजबूत और समझदार ज़रूर बन जाती है',
    ],
    linesHinglish: [
      'Har tooti cheez dobaara pehle jaisi bhale na dikhe duniya ko',
      'Par pehle se zyada mazboot aur samajhdaar zaroor ban jaati hai',
    ],
    linesEnglish: [
      'What mends after cracking may never look identical to day one',
      'Yet it returns steadier, wiser, and far stronger than before',
    ],
  },
  {
    title: 'दिल की सुनहरा सीख',
    titleEnglish: 'Wise Heart Note',
    linesHindi: [
      'कमियाँ हर किसी के अंदर होती हैं इस धरती पर मेरे भाई',
      'रिश्ता वही सुंदर है जहाँ एक-दूसरे की कमियों को संभाल लिया जाए',
    ],
    linesHinglish: [
      'Kamiyaan har kisi ke andar hoti hain is dharti par mere bhai',
      'Rishta wahi sundar hai jahaan ek-doosre ki kamiyon ko sambhaal liya jaaye',
    ],
    linesEnglish: [
      'Every human being carries flaws beneath the surface, brother',
      'A beautiful bond is simply two people supporting each other gently through them',
    ],
  },
  {
    title: 'आशा की छोटी लौ',
    titleEnglish: 'Tiny Flame of Hope',
    linesHindi: [
      'रात कितनी भी गहरी हो पर सुबह का सूरज कभी देर नहीं करता',
      'बस भरोसा रखिए, आपके अच्छे दिन बस आने ही वाले हैं',
    ],
    linesHinglish: [
      'Raat kitni bhi gehri ho par subah ka sooraj kabhi der nahin karta',
      'Bas bharosa rakhiye, aapke acche din bas aane hi waale hain',
    ],
    linesEnglish: [
      'No matter how dark the hour feels, sunrise never misses its appointment',
      'Stay hopeful—brighter mornings are already on their way to you',
    ],
  },
  {
    title: 'मेहनत का सम्मान',
    titleEnglish: 'Respect Honest Work',
    linesHindi: [
      'मेहनत की रोटी में जो स्वाद और सुकून मिलता है इंसान को',
      'वो किसी भी शॉर्टकट की चमक में कभी नहीं मिल सकता',
    ],
    linesHinglish: [
      'Mehnat ki roti mein jo swaad aur sukoon milta hai insaan ko',
      'Wo kisi bhi shortcut ki chamak mein kabhi nahin mil sakta',
    ],
    linesEnglish: [
      'The quiet pride resting inside bread earned honestly by your own hands',
      'Can never be matched by any flashy shortcut in this world',
    ],
  },
  {
    title: 'ख़ुशी का सरल मंत्र',
    titleEnglish: 'Easy Peace Mantra',
    linesHindi: [
      'माफ़ करना, शुक्र अदा करना और प्यार से बोलना सीख लीजिए',
      'जीवन की हर राह अपने आप फूलों सी कोमल हो जाएगी',
    ],
    linesHinglish: [
      'Maaf karna, shukr ada karna aur pyaar se bolna seekh lijiye',
      'Jeevan ki har raah apne aap phoolon si komal ho jaayegi',
    ],
    linesEnglish: [
      'Practice forgiving quickly, giving thanks daily, and speaking softly',
      'And watch every rugged path grow gentler beneath your feet',
    ],
  },
  {
    title: 'अनमोल ज़िंदगी',
    titleEnglish: 'Precious Life',
    linesHindi: [
      'ज़िंदगी सिर्फ़ दिन गिनने का नाम नहीं, हर दिन को जीने का नाम है',
      'आज जो पल हाथ में है उसे पूरे दिल से महसूस कीजिए',
    ],
    linesHinglish: [
      'Zindagi sirf din ginne ka naam nahin, har din ko jeene ka naam hai',
      'Aaj jo pal haath mein hai use poore dil se mehsoos kijiye',
    ],
    linesEnglish: [
      'Life is never about counting calendar boxes—it is about living inside them',
      'Savor this present hour right in front of you with your whole heart',
    ],
  },
  {
    title: 'दो लाइन में पूरा सार',
    titleEnglish: 'Essence in Two Lines',
    linesHindi: [
      'अच्छे लोगों का साथ रखिए और मन में हमेशा उजाला रखिए',
      'जिंदगी अपने आप किसी खूबसूरत शायरी सी बन जाएगी',
    ],
    linesHinglish: [
      'Acche logon ka saath rakhiye aur man mein hamesha ujaala rakhiye',
      'Zindagi apne aap kisi khoobsurat shayari si ban jaayegi',
    ],
    linesEnglish: [
      'Keep genuine people close and guard warm light inside your thoughts',
      'And life itself unfolds gracefully like a timeless two-line poem',
    ],
  },
];

export const UNIQUE_TWO_LINE_170 = buildUniqueShayaris(
  '2-line',
  '2 Line Shayari (दो लाइन शायरी)',
  '✨',
  31,
  TWO_LINE_ENTRIES
);
