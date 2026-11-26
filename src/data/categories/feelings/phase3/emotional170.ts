import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const EMOTIONAL_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'आँसू रोककर मुस्कुरा देना',
    titleEnglish: 'Smiling Through Held-Back Tears',
    linesHindi: [
      'भीतर से कितना भी टूट जाए इंसान अपने हालात की वजह से',
      'अपनों के सामने आते ही चेहरे पर मुस्कान सजा ही लेता है',
    ],
    linesHinglish: [
      'Bheetar se kitna bhi toot jaaye insaan apne haalaat ki wajah se',
      'Apnon ke saamne aate hi chehre par muskaan saja hi leta hai',
    ],
    linesEnglish: [
      'No matter how heavy life presses inside behind closed ribs',
      'The second loved ones walk in, we gently put our brightest smile on',
    ],
  },
  {
    title: 'पहली बार घर छोड़ने की शाम',
    titleEnglish: 'Evening Leaving Home First Time',
    linesHindi: [
      'सपनों के लिए पहली बार सूटकेस बांधते वक़्त हाथ काँप जाते हैं',
      'दिल आगे बढ़ने को कहता है पर पैर चौखट पर अटक जाते हैं',
    ],
    linesHinglish: [
      'Sapnon ke liye pehli baar suitcase baandhte waqt haath kaanp jaate hain',
      'Dil aage badhne ko kehta hai par pair chaukhat par atak jaate hain',
    ],
    linesEnglish: [
      'Packing a suitcase toward big dreams makes steady hands tremble slightly',
      'Your heart whispers step forward while your shoes cling to the threshold',
    ],
  },
  {
    title: 'मज़बूत दिखने का चुप दबाव',
    titleEnglish: 'Quiet Pressure to Stay Strong',
    linesHindi: [
      'कुछ लोग इसलिए नहीं रोते कि उनके सीने में कोई दर्द नहीं होता',
      'बल्कि इसलिए क्योंकि उन्हें देखकर पूरा परिवार हिम्मत रखता है',
    ],
    linesHinglish: [
      'Kuch log isliye nahin rote ki unke seene mein koi dard nahin hota',
      'Balki isliye kyunki unhein dekhkar poora parivaar himmat rakhta hai',
    ],
    linesEnglish: [
      'Some people hold back tears not because their chest feels zero ache',
      'But because an entire household draws courage watching them stand firm',
    ],
  },
  {
    title: 'गले भर आना, शब्द न मिलना',
    titleEnglish: 'Throat Tight, Words Falling Short',
    linesHindi: [
      'कुछ भावनाएँ इतनी गहरी उतर जाती हैं दिल की तह तक यारो',
      'कि जुबान तक आते-आते सिर्फ़ गला भर आता है, बोल नहीं फूटते',
    ],
    linesHinglish: [
      'Kuch bhaavnaayein itni gehri utar jaati hain dil ki teh tak yaaro',
      'Ki jubaan tak aate-aate sirf gala bhar aata hai, bol nahin phoott-te',
    ],
    linesEnglish: [
      'Certain emotions drop so deeply inside the quiet corners of the chest',
      'That reaching your throat they only leave glistening eyes and silence',
    ],
  },
  {
    title: 'पापा के कंधे पर पहली थकान',
    titleEnglish: 'Noticing First Tiredness in Dad',
    linesHindi: [
      'जिस दिन पहली बार पापा की चाल में हल्की सी थकान दिखाई दी',
      'उसी शाम इंसान सच में बड़ा और जिम्मेदार महसूस करने लगा',
    ],
    linesHinglish: [
      'Jis din pehli baar papa ki chaal mein halki si thakaan dikhaayi di',
      'Usi shaam insaan sach mein bada aur zimmedar mehsoos karne laga',
    ],
    linesEnglish: [
      'The very afternoon you first notice subtle weariness in Dad’s stride',
      'Is the evening childhood finally steps quietly into full adulthood',
    ],
  },
  {
    title: 'सुकून की खोज में भटकना',
    titleEnglish: 'Searching Calm Between Deadlines',
    linesHindi: [
      'बचपन की रफ़्तार छोड़कर हम भागने तो लगे मंज़िल की ओर',
      'पर रास्ते में कहीं चैन से साँस लेना ही भूल गए यारो',
    ],
    linesHinglish: [
      'Bachpan ki raftaar chhodkar hum bhaagne to lage manzil ki or',
      'Par raaste mein kahin chain se saans lena hi bhool gaye yaaro',
    ],
    linesEnglish: [
      'We traded unhurried childhood paces for nonstop sprints toward goals',
      'And somehow forgot along the highway how to breathe smoothly in peace',
    ],
  },
  {
    title: 'अनसुनी चीख़ और शांत कमरा',
    titleEnglish: 'Silent Cry Inside Quiet Rooms',
    linesHindi: [
      'पूरे दिन लोगों से हँसकर बात करने के बाद जब कमरा बंद होता है',
      'तब दिल की सारी दबी हुई बातें आँखों से बाहर आ ही जाती हैं',
    ],
    linesHinglish: [
      'Poore din logon se hanskar baat karne ke baad jab kamra band hota hai',
      'Tab dil ki saari dabi hui baatein aankhon se baahar aa hi jaati hain',
    ],
    linesEnglish: [
      'After smiling warmly through ten conversations, once the door clicks shut',
      'Every unspoken feeling packed away all day spills gently down cheeks',
    ],
  },
  {
    title: 'पहली कमाई से माँ की साड़ी',
    titleEnglish: 'Mom’s Saree From First Paycheck',
    linesHindi: [
      'पहली तनख़्वाह से जब माँ के हाथ में नई साड़ी रखी मैंने चुपचाप',
      'उनकी खुशी और आँसुओं ने मेरे सारे संघर्ष का मोल चुका दिया',
    ],
    linesHinglish: [
      'Pehli tankhwaah se jab maa ke haath mein nayi saree rakhi maine chupchaap',
      'Unki khushi aur aansuon ne mere saare sangharsh ka mol chuka diya',
    ],
    linesEnglish: [
      'When my first paycheck placed a fresh saree gently in Mom’s lap',
      'Her beaming tears repaid every single sleepless night of my hustle',
    ],
  },
  {
    title: 'रिश्ते बचाने की खामोश कोशिश',
    titleEnglish: 'Quiet Effort Saving Warm Ties',
    linesHindi: [
      'हर बात पर चुप हो जाने वाला इंसान कमज़ोर नहीं होता कभी',
      'वह बस अपनों से बहस करके कोई रिश्ता खोना नहीं चाहता',
    ],
    linesHinglish: [
      'Har baat par chup ho jaane waala insaan kamzor nahin hota kabhi',
      'Woh bas apnon se behas karke koi rishta khona nahin chahta',
    ],
    linesEnglish: [
      'The person swallowing sharp replies calmly is never weak at all',
      'They simply refuse to trade cherished bonds for winning tiny fights',
    ],
  },
  {
    title: 'पुराना स्कूल और छूटे यार',
    titleEnglish: 'Empty Classrooms and Old Friends',
    linesHindi: [
      'बरसों बाद जब पुराने स्कूल के गेट से होकर गुज़रा मैं आज',
      'खाली मैदान देखकर आँखों में अपने आप नमी उतर आई',
    ],
    linesHinglish: [
      'Barson baad jab puraane school ke gate se hokar guzra main aaj',
      'Khaali maidaan dekhkar aankhon mein apne aap nami utar aayi',
    ],
    linesEnglish: [
      'Driving past the old iron school gates years down the road today',
      'Brought quiet mist instantly to my eyes seeing the empty playground',
    ],
  },
  {
    title: 'सब ठीक है का मीठा झूठ',
    titleEnglish: 'Gentle Little White Lie',
    linesHindi: [
      'मम्मी के फ़ोन पर हर बार कह देना कि यहाँ सब एकदम बढ़िया है',
      'परदेश में रहने वालों का सबसे प्यारा और भावुक झूठ होता है',
    ],
    linesHinglish: [
      'Mummy ke phone par har baar keh dena ki yahaan sab ekdum badhiya hai',
      'Pardesh mein rehne waalon ka sabse pyara aur bhaavuk jhooth hota hai',
    ],
    linesEnglish: [
      'Assuring Mom on every Sunday call that everything here goes wonderfully',
      'Is the sweetest, tenderest little lie anyone away from home ever tells',
    ],
  },
  {
    title: 'चोट लगने पर खुद संभालना',
    titleEnglish: 'Comforting Yourself After Bruises',
    linesHindi: [
      'जब बचपन में गिरते थे तो पूरा घर दौड़ा आता था उठाने को',
      'बड़े होने पर ठोकर लगे तो ख़ुद ही धूल झाड़कर मुस्कुराना पड़ता है',
    ],
    linesHinglish: [
      'Jab bachpan mein girte the to poora ghar dauda aata tha uthaane ko',
      'Bade hone par thokar lage to khud hi dhool jhaadkar muskuraana padta hai',
    ],
    linesEnglish: [
      'Skinning a knee in childhood brought the whole family running over fast',
      'As adults we brush dust calmly off our sleeves and smile right back',
    ],
  },
  {
    title: 'अधूरी बात का लंबा सफ़र',
    titleEnglish: 'Long Road of Unsaid Feelings',
    linesHindi: [
      'कितने ही जज़्बात इस दिल के अंदर बिना पते के खतों जैसे पड़े हैं',
      'न किसी को भेजे जा सके और न ही कभी फाड़े जा सके',
    ],
    linesHinglish: [
      'Kitne hi jazbaat is dil ke andar bina pate ke khaton jaise pade hain',
      'Na kisi ko bheje ja sake aur na hi kabhi phaade ja sake',
    ],
    linesEnglish: [
      'So many tender feelings sit inside the chest like unstamped letters',
      'Never mailed across the miles, yet far too precious to tear apart',
    ],
  },
  {
    title: 'बदलते मौसम में माँ की आवाज़',
    titleEnglish: 'Mom’s Voice When Weather Turns',
    linesHindi: [
      'ठंड बढ़ते ही सबसे पहले मम्मी का संदेश आ जाता है फ़ोन पर',
      'बेटा स्वेटर पहन कर ही निकलना, वहाँ हवा बहुत तेज़ चलती है',
    ],
    linesHinglish: [
      'Thand badhte hi sabse pehle mummy ka sandesh aa jaata hai phone par',
      'Beta sweater pehan kar hi nikalna, wahaan hawa bahut tez chalti hai',
    ],
    linesEnglish: [
      'The very day winter chill touches the air, Mom’s text chimes first',
      'Wear your warm sweater outside tonight—the winds blow sharp out there',
    ],
  },
  {
    title: 'मन के अंदर चलता समुद्र',
    titleEnglish: 'Quiet Tide Moving Inside',
    linesHindi: [
      'चेहरे की शांति देखकर किसी के भीतर का मौसम मत मापना यारो',
      'समुद्र भी ऊपर से बिल्कुल स्थिर दिखता है जब अंदर लहरें उठती हैं',
    ],
    linesHinglish: [
      'Chehre ki shaanti dekhkar kisi ke bheetar ka mausam mat maapna yaaro',
      'Samudra bhi oopar se bilkul sthir dikhta hai jab andar lehrein uthti hain',
    ],
    linesEnglish: [
      'Never measure the weather inside someone’s heart just from calm eyes',
      'Even deep oceans look glass-smooth on top while strong currents churn below',
    ],
  },
  {
    title: 'भीगे स्टेशन पर विदाई',
    titleEnglish: 'Quiet Goodbye at Rainy Platform',
    linesHindi: [
      'कुछ अलविदा ऐसे होते हैं जहाँ कोई शब्द नहीं बोला जाता स्टेशन पर',
      'बस दोनों तरफ़ की आँखें सब कुछ कहकर ट्रेन के साथ छूट जाती हैं',
    ],
    linesHinglish: [
      'Kuch alvida aise hote hain jahaan koi shabd nahin bola jaata station par',
      'Bas dono taraf ki aankhein sab kuch kehkar train ke saath chhoot jaati hain',
    ],
    linesEnglish: [
      'Some platform partings carry zero room for spoken speeches',
      'Two pairs of misty eyes say everything silently as the train pulls out',
    ],
  },
  {
    title: 'अकेले बैठकर खुद को सुनना',
    titleEnglish: 'Listening Gently to Your Soul',
    linesHindi: [
      'हर किसी को खुश रखने की कोशिश में कई साल निकल जाते हैं',
      'फिर एक शाम इंसान बैठकर खुद से पूछता है, क्या मैं खुश हूँ आज',
    ],
    linesHinglish: [
      'Har kisi ko khush rakhne ki koshish mein kai saal nikal jaate hain',
      'Phir ek shaam insaan baithkar khud se poochhta hai, kya main khush hoon aaj',
    ],
    linesEnglish: [
      'Years slip effortlessly past while trying hard to keep everybody pleased',
      'Until one quiet dusk you ask yourself softly, am I truly okay today',
    ],
  },
  {
    title: 'खामोश आँसुओं की गवाही',
    titleEnglish: 'Witness to Unseen Tears',
    linesHindi: [
      'रात के तकिये के सिवा कोई नहीं जानता इस पूरी दुनिया में',
      'कि कितनी बार इंसान टूटकर सुबह फिर से मजबूत खड़ा हुआ है',
    ],
    linesHinglish: [
      'Raat ke takiye ke siva koi nahin jaanta is poori duniya mein',
      'Ki kitni baar insaan tootkar subah phir se mazboot khada hua hai',
    ],
    linesEnglish: [
      'Nobody on earth besides a quiet bedroom pillow knows the full story',
      'Of how many times you broke softly at night and rose fearless by dawn',
    ],
  },
  {
    title: 'मेरी जान का अनमोल सब्र',
    titleEnglish: 'Precious Patience Carried Within',
    linesHindi: [
      'जो बात आज गले में अटक कर आँखों में पानी ला रही है शायद',
      'एक दिन वही किस्सा हमें मुस्कुराकर सुनाने की हिम्मत देगा',
    ],
    linesHinglish: [
      'Jo baat aaj gale mein atak kar aankhon mein paani la rahi hai shaayad',
      'Ek din wahi kissa humein muskuraakar sunaane ki himmat dega',
    ],
    linesEnglish: [
      'The heavy chapter tightening your throat with mist tonight',
      'Will one day turn into the story you tell smiling calmly across tables',
    ],
  },
  {
    title: 'बचपन का खोया हुआ पन्ना',
    titleEnglish: 'Lost Page From Carefree Youth',
    linesHindi: [
      'जब दस रुपये के नोट में पूरा मेला खरीद लेने का सपना देखते थे',
      'आज हज़ारों खर्च करके भी वह दिल की बेफ़िक्री वापस नहीं मिलती',
    ],
    linesHinglish: [
      'Jab das rupaye ke note mein poora mela khareed lene ka sapna dekhte the',
      'Aaj hazaaron kharch karke bhi woh dil ki befikri waapas nahin milti',
    ],
    linesEnglish: [
      'Back when one crumpled pocket bill felt enough to buy the whole fair',
      'Spending thousands now rarely buys back that breathless childhood ease',
    ],
  },

  // Block 2 (21-40)
  {
    title: 'दिल की गहराई का दर्द',
    titleEnglish: 'Ache Resting Deep Without Noise',
    linesHindi: [
      'हर ज़ख़्म पट्टी बाँधकर दिखाने लायक नहीं होता दुनिया को',
      'कुछ तकलीफ़ें चुपचाप समय के साथ दिल के अंदर ही सँभलती हैं',
    ],
    linesHinglish: [
      'Har zakhm patti baandhkar dikhaane laayak nahin hota duniya ko',
      'Kuch takleefein chupchaap samay ke saath dil ke andar hi sambhalti hain',
    ],
    linesEnglish: [
      'Not every bruise wears a neat white bandage visible on the sleeve',
      'Some quiet aches mend slowly inside out of sight over patient seasons',
    ],
  },
  {
    title: 'खाली घर की गूँजती दीवारें',
    titleEnglish: 'Quiet Walls After Guests Leave',
    linesHindi: [
      'त्योहार पर हँसी-ठिठोली से भरा घर अचानक सूना हो जाता है',
      'जब सब लोग अपने-अपने काम के शहरों की ओर लौट जाते हैं',
    ],
    linesHinglish: [
      'Tyohaar par hansi-thitholi se bhara ghar achaanak soona ho jaata hai',
      'Jab sab log apne-apne kaam ke shehron ki or laut jaate hain',
    ],
    linesEnglish: [
      'Right after festive laughter shakes the courtyard all week long',
      'Silence settles heavy the morning everyone catches flights back to work',
    ],
  },
  {
    title: 'बोल न पाने की उलझन',
    titleEnglish: 'Struggle to Say How Deeply',
    linesHindi: [
      'कई बार अपनों के सामने खड़े होकर भी जज़्बात जुबान पर नहीं आते',
      'क्योंकि डर लगता है कहीं आवाज़ काँपने से वे परेशान न हो जाएँ',
    ],
    linesHinglish: [
      'Kai baar apnon ke saamne khade hokar bhi jazbaat jubaan par nahin aate',
      'Kyunki dar lagta hai kahin aawaz kaanpne se we pareshaan na ho jaayein',
    ],
    linesEnglish: [
      'Often standing right before loved ones, feelings stay tucked behind lips',
      'Afraid one trembling syllable might make their loving hearts worry',
    ],
  },
  {
    title: 'बारिश में धुले पुराने ग़म',
    titleEnglish: 'Old Sorrows Washed in Rain',
    linesHindi: [
      'अच्छी बात यह है कि बारिश किसी से वजह नहीं पूछती बरसते हुए',
      'भीगकर रो लेना भी कभी-कभी मन को बहुत हल्का कर देता है',
    ],
    linesHinglish: [
      'Achhi baat yeh hai ki baarish kisi se wajah nahin poochhti baraste hue',
      'Bheegkar ro lena bhi kabhi-kabhi mann ko bahut halka kar deta hai',
    ],
    linesEnglish: [
      'The gentle kindness of monsoon rain is it never asks why your cheeks glisten',
      'Letting tears blend quietly with summer showers washes heavy hearts clean',
    ],
  },
  {
    title: 'बूढ़े माता-पिता की प्रतीक्षा',
    titleEnglish: 'Aging Parents Waiting by Gate',
    linesHindi: [
      'फोन पर भले ही कह देते हैं कि तुम अपने काम पर ध्यान दो बेटा',
      'पर हर रविवार शाम को उनकी आँखें दरवाज़े की ओर लगी रहती हैं',
    ],
    linesHinglish: [
      'Phone par bhale hi keh dete hain ki tum apne kaam par dhyaan do beta',
      'Par har ravivaar shaam ko unki aankhein darwaze ki or lagi rehti hain',
    ],
    linesEnglish: [
      'Over phone calls parents always say focus calmly on your busy career',
      'Yet every Sunday afternoon their loving eyes glance hopefully down the lane',
    ],
  },
  {
    title: 'अधूरा अपनापन भीड़ में',
    titleEnglish: 'Feeling Unheard Amidst Noise',
    linesHindi: [
      'सबसे अजीब अकेलापन तब महसूस होता है ज़िंदगी के मोड़ पर',
      'जब कमरे में दस लोग बैठे हों और कोई दिल की बात न समझे',
    ],
    linesHinglish: [
      'Sabse ajeeb akelapan tab mehsoos hota hai zindagi ke mod par',
      'Jab kamre mein das log baithe hon aur koi dil ki baat na samjhe',
    ],
    linesEnglish: [
      'The strangest loneliness arrives not in empty halls at midnight',
      'But sitting among ten loud voices while feeling completely unseen',
    ],
  },
  {
    title: 'मेरी जान की हिम्मत',
    titleEnglish: 'Gentle Courage Inside Mist',
    linesHindi: [
      'आँखें नम हों और गला भरा हो तब भी क़दम आगे बढ़ाते रहना',
      'इंसान के भीतर छिपे सबसे बड़े साहस की निशानी होती है',
    ],
    linesHinglish: [
      'Aankhein nam hon aur gala bhara ho tab bhi kadam aage badhaate rehna',
      'Insaan ke bheetar chhipe sabse bade saahas ki nishaani hoti hai',
    ],
    linesEnglish: [
      'Stepping steadily forward even with misty eyes and an aching chest',
      'Marks the quietest, bravest strength any human spirit ever carries',
    ],
  },
  {
    title: 'तस्वीर देखकर छलकती याद',
    titleEnglish: 'Memory Spilling From One Frame',
    linesHindi: [
      'बटुए में रखी वह पुरानी छोटी सी तस्वीर जब आज बाहर निकली',
      'तो लगा जैसे पूरा गुज़रा ज़माना एक पल में सामने आ खड़ा हुआ',
    ],
    linesHinglish: [
      'Batue mein rakhi woh puraani chhoti si tasveer jab aaj baahar nikli',
      'To laga jaise poora guzra zamaana ek pal mein saamne aa khada hua',
    ],
    linesEnglish: [
      'Pulling one worn tiny snapshot out from an old leather wallet today',
      'Brought an entire vanished era standing vividly right before my eyes',
    ],
  },
  {
    title: 'रिश्तों का चुपचाप टूटना',
    titleEnglish: 'Quiet Drift Without Loud Fights',
    linesHindi: [
      'हर रिश्ता किसी बड़े झगड़े से ही खत्म हो यह ज़रूरी नहीं होता',
      'कई बार कम होती बातें भी दो लोगों को मीलों दूर कर देती हैं',
    ],
    linesHinglish: [
      'Har rishta kisi bade jhagde se hi khatam ho yeh zaroori nahin hota',
      'Kai baar kam hoti baatein bhi do logon ko meelon door kar deti hain',
    ],
    linesEnglish: [
      'Not every close connection snaps apart during angry shouting matches',
      'Often slowly fading check-ins stretch silent miles between two hearts',
    ],
  },
  {
    title: 'मेहनती पिता की चुप थकान',
    titleEnglish: 'Quiet Ache in Hardworking Hands',
    linesHindi: [
      'पूरी उम्र जिन्होंने कभी अपने लिए एक दिन की छुट्टी नहीं ली',
      'उनके खुरदुरे हाथों को छूकर आज मेरा मन बहुत भावुक हो गया',
    ],
    linesHinglish: [
      'Poori umr jinhonne kabhi apne liye ek din ki chhutti nahin li',
      'Unke khurdure haathon ko chhookar aaj mera mann bahut bhaavuk ho gaya',
    ],
    linesEnglish: [
      'He worked decades without ever taking one selfish holiday for himself',
      'Touching his weathered, calloused palms today filled my heart to tears',
    ],
  },
  {
    title: 'छोटी मुस्कान के पीछे आँसू',
    titleEnglish: 'Tears Hidden Behind Gentle Grin',
    linesHindi: [
      'जो लोग हर किसी से कहते फिरते हैं कि मुझे कोई फ़र्क नहीं पड़ता',
      'दरअसल वही सबसे ज़्यादा गहराई से हर बात महसूस करते हैं',
    ],
    linesHinglish: [
      'Jo log har kisi se kehte phirte hain ki mujhe koi fark nahin padta',
      'Darasal wahi sabse zyada gehraai se har baat mehsoos karte hain',
    ],
    linesEnglish: [
      'Folks who shrug smiling saying nothing really bothers them at all',
      'Are usually the very souls who feel every gentle tremor twice as deep',
    ],
  },
  {
    title: 'दवा नहीं, अपनों की ज़रूरत',
    titleEnglish: 'Needing Loved Ones Over Remedies',
    linesHindi: [
      'बीमारी में डॉक्टर की पर्ची से ज़्यादा असर तब होता है यारो',
      'जब कोई अपना माथे पर हाथ रखकर हाल पूछने बैठ जाता है',
    ],
    linesHinglish: [
      'Bimaari mein doctor ki parchi se zyada asar tab hota hai yaaro',
      'Jab koi apna maathe par haath rakhkar haal poochhne baith jaata hai',
    ],
    linesEnglish: [
      'When sick in bed, warmer than every pharmacy bottle on the nightstand',
      'Is somebody you love sitting near checking softly on your fever',
    ],
  },
  {
    title: 'रात के दो बजे का सच',
    titleEnglish: 'Honest Truth at Two A.M.',
    linesHindi: [
      'दिन की रोशनी में तो इंसान हर ग़म को काम में छुपा लेता है',
      'रात के दो बजे का सन्नाटा सारे राज़ सामने रख देता है',
    ],
    linesHinglish: [
      'Din ki roshni mein to insaan har gham ko kaam mein chhupa leta hai',
      'Raat ke do baje ka sannaata saare raaz saamne rakh deta hai',
    ],
    linesEnglish: [
      'Under bright daylight we tuck heavy thoughts cleanly behind busy checklists',
      'Two in the morning stillness spreads every truth quietly across the ceiling',
    ],
  },
  {
    title: 'टूटे सपने पर चुप संभलना',
    titleEnglish: 'Quiet Recovery After Shattered Hopes',
    linesHindi: [
      'जब बरसों की मेहनत एक पल में बिखरती दिखे आँखों के आगे',
      'तब रोकर फिर से उठ खड़े होने में बड़ा कलेजा लगता है',
    ],
    linesHinglish: [
      'Jab barson ki mehnat ek pal mein bikharti dikhe aankhon ke aage',
      'Tab rokar phir se uth khade hone mein bada kaleja lagta hai',
    ],
    linesEnglish: [
      'Watching years of patient building crumble before your eyes in minutes',
      'Demands immense heart simply to wipe tears and start laying bricks again',
    ],
  },
  {
    title: 'बचपन की मेज़ पर खालीपन',
    titleEnglish: 'Empty Chair at Childhood Table',
    linesHindi: [
      'घर की उसी डाइनिंग टेबल पर आज भी बर्तन उतने ही सजते हैं',
      'बस सबके बड़े होकर बिखर जाने से शोर थोड़ा कम हो गया है',
    ],
    linesHinglish: [
      'Ghar ki usi dining table par aaj bhi bartan utne hi sajte hain',
      'Bas sabke bade hokar bikhar jaane se shor thoda kam ho gaya hai',
    ],
    linesEnglish: [
      'Plates still line the same family dinner table back at home',
      'Only as everyone grew up and scattered, the laughter grew quieter',
    ],
  },
  {
    title: 'बिना बोले दिल टूट जाना',
    titleEnglish: 'Heart Bruising Without a Word',
    linesHindi: [
      'हमें हमेशा किसी बड़े धोखे से ही चोट लगे यह ज़रूरी नहीं',
      'कभी-कभी किसी ख़ास का बदला हुआ लहज़ा ही रुला देता है',
    ],
    linesHinglish: [
      'Humein hamesha kisi bade dhokhe se hi chot lage yeh zaroori nahin',
      'Kabhi-kabhi kisi khaas ka badla hua lehja hi rula deta hai',
    ],
    linesEnglish: [
      'Heartache does not always arrive dressed in dramatic betrayals',
      'Sometimes just sensing a cold shift in someone’s tone stings deeply',
    ],
  },
  {
    title: 'सुकून की एक शाम का इंतज़ार',
    titleEnglish: 'Waiting for One Calm Dusk',
    linesHindi: [
      'दौड़ते-दौड़ते पैर थक गए हैं ज़िंदगी की इस लंबी सड़क पर',
      'अब बस एक शांत शाम चाहिए जहाँ कोई चिंता सिर पर न हो',
    ],
    linesHinglish: [
      'Daudte-daudte pair thak gaye hain zindagi ki is lambi sadak par',
      'Ab bas ek shaant shaam chahiye jahaan koi chinta sir par na ho',
    ],
    linesEnglish: [
      'Feet ache gently from sprinting relentlessly down life’s busy stretch',
      'All I ask is one unhurried sunset with zero heavy worries looming',
    ],
  },
  {
    title: 'माँ के आँगन की आखिरी विदाई',
    titleEnglish: 'Emotional Farewell at Home Gate',
    linesHindi: [
      'बेटी की शादी हो या बेटे के परदेश जाने की सुबह आई हो',
      'माँ का आँगन हर विदाई पर चुपचाप आँसू बहाता है',
    ],
    linesHinglish: [
      'Beti ki shaadi ho ya bete ke pardesh jaane ki subah aayi ho',
      'Maa ka aangan har vidaai par chupchaap aansoo bahaata hai',
    ],
    linesEnglish: [
      'Whether waving off a bride’s car or a son boarding distant morning flights',
      'A mother’s quiet courtyard always weeps softly at every parting gate',
    ],
  },
  {
    title: 'दिल का बोझ हल्का करना',
    titleEnglish: 'Unloading Weight Off Your Chest',
    linesHindi: [
      'हर बार अपने ही मन में बातें दबाकर मुस्कुराना ठीक नहीं',
      'कभी-कभी आँसुओं को बहने देना भी आत्मा को साफ कर देता है',
    ],
    linesHinglish: [
      'Har baar apne hi mann mein baatein dabaakar muskuraana theek nahin',
      'Kabhi-kabhi aansuon ko behne dena bhi aatma ko saaf kar deta hai',
    ],
    linesEnglish: [
      'Locking every heavy ache behind forced smiles does not serve the soul',
      'Letting honest tears roll freely washes inner dust clean away',
    ],
  },
  {
    title: 'उम्मीद से भरी भीगी पलकें',
    titleEnglish: 'Misty Eyelashes Holding Quiet Hope',
    linesHindi: [
      'आँखें भीगी जरूर हैं आज पुराने पलों को याद करके यार',
      'पर दिल जानता है कि आने वाला कल बहुत सुंदर होने वाला है',
    ],
    linesHinglish: [
      'Aankhein bheegi zaroor hain aaj puraane palon ko yaad karke yaar',
      'Par dil jaanta hai ki aane waala kal bahut sundar hone waala hai',
    ],
    linesEnglish: [
      'Yes, lashes glisten slightly tonight remembering chapters left behind',
      'Yet deep inside my heart knows bright, kinder mornings are already coming',
    ],
  },

  // Block 3 (41-60)
  {
    title: 'चुपचाप सहे गए ताने',
    titleEnglish: 'Swallowing Unfair Remarks Quietly',
    linesHindi: [
      'बुरे वक़्त में कई लोगों के चुभने वाले शब्द चुपचाप सुन लिए मैंने',
      'क्योंकि मुझे बहस से नहीं, अपने काम से जवाब देना था',
    ],
    linesHinglish: [
      'Bure waqt mein kai logon ke chubhne waale shabd chupchaap sun liye maine',
      'Kyunki mujhe behas se nahin, apne kaam se jawaab dena tha',
    ],
    linesEnglish: [
      'Through hard seasons I absorbed stinging remarks in steady silence',
      'Determined to answer someday through quiet results, not noisy fights',
    ],
  },
  {
    title: 'घर लौटकर माँ से लिपट जाना',
    titleEnglish: 'Hugging Mom After Long Months',
    linesHindi: [
      'महीनों बाद घर लौटकर जब दरवाज़े पर ही माँ गले लग जाती हैं',
      'तो लगता है दुनिया की सारी थकान एक सेकंड में उतर गई',
    ],
    linesHinglish: [
      'Maheenon baad ghar lautkar jab darwaze par hi maa gale lag jaati hain',
      'To lagta hai duniya ki saari thakaan ek second mein utar gayi',
    ],
    linesEnglish: [
      'Returning home after months away to Mom’s tight hug right on the porch',
      'Melts away half a year of solitary hustle in one warm heartbeat',
    ],
  },
  {
    title: 'नए शहर की पहली तन्हा शाम',
    titleEnglish: 'First Quiet Dusk in Strange City',
    linesHindi: [
      'नए कमरे में सामान जमाने के बाद जब पहली बार चाय बनाई मैंने',
      'तो सन्नाटे ने पूछा, आज किसके साथ बैठकर बात करोगे यार',
    ],
    linesHinglish: [
      'Naye kamre mein saamaan jamaane ke baad jab pehli baar chai banaayi maine',
      'To sannaate ne poochha, aaj kiske saath baithkar baat karoge yaar',
    ],
    linesEnglish: [
      'Unpacking boxes in an unfamiliar flat and brewing one lonely mug of tea',
      'Left the empty kitchen echoing quietly, who will chat beside you tonight',
    ],
  },
  {
    title: 'वक़्त ने सिखाया सँभलना',
    titleEnglish: 'Seasons Teaching Gentle Resilience',
    linesHindi: [
      'पहले छोटी सी बात पर भी मन घंटों तक उदास बैठा रहता था',
      'अब बड़े से बड़ा तूफ़ान भी आए तो आँख पोंछकर काम शुरू कर देता हूँ',
    ],
    linesHinglish: [
      'Pehle chhoti si baat par bhi mann ghanton tak udaas baitha rehta tha',
      'Ab bade se bada toofaan bhi aaye to aankh ponchhkar kaam shuru kar deta hoon',
    ],
    linesEnglish: [
      'Small setbacks used to dim my entire mood for days on end',
      'Now even wild squalls pass while I dry my eyes and keep moving calmly',
    ],
  },
  {
    title: 'दिल की किताब में छिपे आँसू',
    titleEnglish: 'Tears Pressed Inside Quiet Pages',
    linesHindi: [
      'कुछ पन्ने डायरी के ऐसे होते हैं जहाँ स्याही थोड़ी फैल गई हो',
      'शायद लिखते-लिखते कोई आँसू उस रात कागज़ पर गिर पड़ा था',
    ],
    linesHinglish: [
      'Kuch panne diary ke aise hote hain jahaan syaahi thodi phail gayi ho',
      'Shaayad likhte-likhte koi aansoo us raat kaagaz par gir pada tha',
    ],
    linesEnglish: [
      'Certain journal pages show faint blue smudges along the cursive lines',
      'Where one silent midnight teardrop splashed softly before drying out',
    ],
  },
  {
    title: 'अपनों की ख़ुशी के लिए समझौता',
    titleEnglish: 'Quiet Compromise for Family Smiles',
    linesHindi: [
      'अपनी पसंद के रंग छोड़कर जब घर के लिए सादे कपड़े चुनते हैं लोग',
      'तब समझ आता है कि त्याग कोई भाषण नहीं, एक एहसास होता है',
    ],
    linesHinglish: [
      'Apni pasand ke rang chhodkar jab ghar ke liye saade kapde chunte hain log',
      'Tab samajh aata hai ki tyaag koi bhaashan nahin, ek ehsaas hota hai',
    ],
    linesEnglish: [
      'Setting aside personal treats calmly so everyone at home stays comfortable',
      'Teaches you sacrifice is never loud poetry—it is everyday quiet love',
    ],
  },
  {
    title: 'अधूरी उम्मीद का दर्द',
    titleEnglish: 'Gentle Sting of Delayed Hopes',
    linesHindi: [
      'जब बहुत मेहनत के बाद भी नाम आखिरी लिस्ट में नहीं दिखता कभी',
      'तो एक पल के लिए बंद कमरे में दीवार से टिककर रोना आ ही जाता है',
    ],
    linesHinglish: [
      'Jab bahut mehnat ke baad bhi naam aakhiri list mein nahin dikhta kabhi',
      'To ek pal ke liye band kamre mein deewaar se tikkar rona aa hi jaata hai',
    ],
    linesEnglish: [
      'After pouring sleepless months into effort yet missing the final list',
      'Leaning silently against bedroom walls for one cry feels deeply human',
    ],
  },
  {
    title: 'पुराने दोस्त से अचानक भेंट',
    titleEnglish: 'Unexpected Hug From Old Friend',
    linesHindi: [
      'बरसों बाद सड़क पर अचानक बचपन का यार सामने खड़ा मिल जाए',
      'तो कुछ बोले बिना ही आँखें भर आती हैं और हँसी फूट पड़ती है',
    ],
    linesHinglish: [
      'Barson baad sadak par achaanak bachpan ka yaar saamne khada mil jaaye',
      'To kuch bole bina hi aankhein bhar aati hain aur hansi phoot padti hai',
    ],
    linesEnglish: [
      'Running suddenly into a childhood friend down a busy sidewalk years later',
      'Brings instant misty eyes and breathless laughter before saying hello',
    ],
  },
  {
    title: 'चुपचाप निभाई गई ज़िम्मेदारी',
    titleEnglish: 'Quiet Duty Carried Without Praise',
    linesHindi: [
      'सबके जन्मदिन और त्यौहार तो बड़े धूमधाम से मना दिए घर में उसने',
      'खुद का जन्मदिन काम की भागदौड़ में चुपचाप निकल गया फिर से',
    ],
    linesHinglish: [
      'Sabke janmdin aur tyohaar to bade dhoomdhaam se mana diye ghar mein usne',
      'Khud ka janmdin kaam ki bhaagdaud mein chupchaap nikal gaya phir se',
    ],
    linesEnglish: [
      'They arranged bright cakes and grand festivals for every single relative',
      'While their own birthday slipped quietly past amidst office errands',
    ],
  },
  {
    title: 'मन हल्का करती सच्ची माफ़ी',
    titleEnglish: 'Letting Go With Gentle Grace',
    linesHindi: [
      'जिन्होंने अनजाने में या जानबूझकर कभी दिल दुखाया हो मेरा',
      'आज मन हल्का करने के लिए मैंने सबको भीतर से माफ़ कर दिया',
    ],
    linesHinglish: [
      'Jinhonne anjaane mein ya jaanboojhkar kabhi dil dukhaaya ho mera',
      'Aaj mann halka karne ke liye maine sabko bheetar se maaf kar diya',
    ],
    linesEnglish: [
      'To everyone who bruised my trust knowingly or carelessly before',
      'Tonight I quietly forgive you all simply so my own chest breathes free',
    ],
  },
  {
    title: 'खामोश आँखों में छुपी कहानी',
    titleEnglish: 'Story Resting Behind Quiet Eyes',
    linesHindi: [
      'हमेशा हँसकर मिलने वालों से भी कभी पूछ लिया करो प्यार से',
      'तुम सच में ठीक हो न, यह सवाल कई बंद ताले खोल देता है',
    ],
    linesHinglish: [
      'Hamesha hanskar milne waalon se bhi kabhi poochh liya karo pyar se',
      'Tum sach mein theek ho na, yeh sawaal kai band taale khol deta hai',
    ],
    linesEnglish: [
      'Even cheerful friends deserve somebody asking softly once in a while',
      'Are you truly doing okay—one gentle question unlocks heavy doors',
    ],
  },
  {
    title: 'माँ के बिना सूना त्योहार',
    titleEnglish: 'Missing Mom’s Warmth on Festivals',
    linesHindi: [
      'बाज़ार से हर मिठाई और सजावट तो आ गई है घर के आँगन में',
      'पर माँ के हाथों की वह हल्की सी थपकी की कमी हर पल रहती है',
    ],
    linesHinglish: [
      'Baazaar se har mithaai aur sajaawat to aa gayi hai ghar ke aangan mein',
      'Par maa ke haathon ki woh halki si thapki ki kami har pal rehti hai',
    ],
    linesEnglish: [
      'Store-bought sweets and sparkling lights cover every table cleanly',
      'Yet nothing replaces the missing warmth of Mom’s hand upon my shoulder',
    ],
  },
  {
    title: 'भीगे हुए सफ़र का अंत',
    titleEnglish: 'Safe Shore After Stormy Miles',
    linesHindi: [
      'बहुत लंबे समय तक तूफ़ानों से लड़ने के बाद जब किनारा मिलता है',
      'तब खुशी से ज़्यादा आँखों में शुक्र के आँसू बह निकलते हैं',
    ],
    linesHinglish: [
      'Bahut lambe samay tak toofaanon se ladne ke baad jab kinaara milta hai',
      'Tab khushi se zyada aankhon mein shukr ke aansoo beh nikalte hain',
    ],
    linesEnglish: [
      'After rowing tirelessly against fierce waves and finally reaching shore',
      'Tears of pure relief fall even faster than shouts of victory',
    ],
  },
  {
    title: 'अधूरे ख्वाबों की कसक',
    titleEnglish: 'Tender Ache of Postponed Dreams',
    linesHindi: [
      'कभी-कभी घर की जरूरतों के आगे अपने छोटे शौक छोड़ने पड़ते हैं',
      'पर उन छूटे हुए शौकों की याद कभी-कभी शाम को सता जाती है',
    ],
    linesHinglish: [
      'Kabhi-kabhi ghar ki zarooraton ke aage apne chhote shauk chhodne padte hain',
      'Par un chhoote hue shaukon ki yaad kabhi-kabhi shaam ko sata jaati hai',
    ],
    linesEnglish: [
      'Sometimes family needs ask us gently to fold away our youthful hobbies',
      'Yet on quiet evenings those tucked-away guitars and paints softly call out',
    ],
  },
  {
    title: 'दिल की सच्चाई पर भरोसा',
    titleEnglish: 'Holding Onto Honest Feelings',
    linesHindi: [
      'दुनिया भले ही जज़्बातों को कमज़ोरी मानकर हँस दे कभी-कभी',
      'पर इंसान होने की सबसे बड़ी ख़ूबसूरती महसूस कर पाना ही है',
    ],
    linesHinglish: [
      'Duniya bhale hi jazbaaton ko kamzori maankar hans de kabhi-kabhi',
      'Par insaan hone ki sabse badi khoobsurati mehsoos kar paana hi hai',
    ],
    linesEnglish: [
      'Even if cold crowds mock open tenderness as naive vulnerability',
      'Feeling life deeply with an unguarded heart remains our highest grace',
    ],
  },
  {
    title: 'चुपचाप बदलते चेहरे',
    titleEnglish: 'Quiet Realization of Changing Faces',
    linesHindi: [
      'वक़्त के साथ जो लोग कल तक साए की तरह साथ चलते थे हमेशा',
      'आज वही लोग सामने से गुज़र कर अनजान बनते दिख जाते हैं',
    ],
    linesHinglish: [
      'Waqt ke saath jo log kal tak saaye ki tarah saath chalte the hamesha',
      'Aaj wahi log saamne se guzar kar anjaan bante dikh jaate hain',
    ],
    linesEnglish: [
      'People who once stayed glued beside us like afternoon shadows',
      'Sometimes walk straight past across the street pretending not to know',
    ],
  },
  {
    title: 'रात के सन्नाटे में प्रार्थना',
    titleEnglish: 'Quiet Midnight Prayer for Strength',
    linesHindi: [
      'जब किसी के पास बैठकर रोने का भी मौका न मिले जीवन में',
      'तब बस ऊपर आसमान की ओर देखकर हाथ जोड़ लेना काफ़ी होता है',
    ],
    linesHinglish: [
      'Jab kisi ke paas baithkar rone ka bhi mauka na mile jeevan mein',
      'Tab bas oopar aasmaan ki or dekhkar haath jod lena kaafi hota hai',
    ],
    linesEnglish: [
      'When life grants no quiet shoulder to lean against during dark turns',
      'Lifting wet eyes toward night skies folding your palms feels enough',
    ],
  },
  {
    title: 'पिता के गले लग जाने का पल',
    titleEnglish: 'Rare Moment Hugging Father Tight',
    linesHindi: [
      'पूरी ज़िंदगी पापा के सामने खुलकर बोलने में झिझक होती रही मुझे',
      'पर एक दिन गले लगते ही सारे साल का प्यार आँखों से बह गया',
    ],
    linesHinglish: [
      'Poori zindagi papa ke saamne khulkar bolne mein jhijhak hoti rahi mujhe',
      'Par ek din gale lagte hi saare saal ka pyar aankhon se beh gaya',
    ],
    linesEnglish: [
      'For years awkward shyness kept big feelings unspoken before Dad',
      'Then one tight hug melted twenty winters of love straight into tears',
    ],
  },
  {
    title: 'अकेले सफ़र में खुद की थपथपी',
    titleEnglish: 'Patting Your Own Tired Back',
    linesHindi: [
      'जब कोई ताली बजाने वाला पास न दिखे कठिन दौर के बीच',
      'तो ख़ुद ही अपने कंधे पर हाथ रखकर कहना, शाबाश तू टिका रहा',
    ],
    linesHinglish: [
      'Jab koi taali bajaane waala paas na dikhe kathin daur ke beech',
      'To khud hi apne kandhe par haath rakhkar kehna, shaabaash tu tika raha',
    ],
    linesEnglish: [
      'When nobody claps beside you through long, thankless uphill miles',
      'Place your own palm gently on your shoulder whispering, well done staying strong',
    ],
  },
  {
    title: 'सुकून से भरी अंतिम साँस जैसा चैन',
    titleEnglish: 'Deep Breath After Heavy Storms',
    linesHindi: [
      'हर आँसू हमेशा कमज़ोरी या हार की निशानी नहीं होता यारो',
      'कई बार यह दिल से भारी बोझ उतरने का पहला संकेत होता है',
    ],
    linesHinglish: [
      'Har aansoo hamesha kamzori ya haar ki nishaani nahin hota yaaro',
      'Kai baar yeh dil se bhaari bojh utarne ka pehla sanket hota hai',
    ],
    linesEnglish: [
      'Not every falling tear is a sign of defeat or breaking apart inside',
      'Often it is simply the first warm sign a heavy stone finally rolled off',
    ],
  },

  // Block 4 (61-80)
  {
    title: 'गाँव की मिट्टी और शहर की दौड़',
    titleEnglish: 'Village Soil vs City Sprint',
    linesHindi: [
      'शहर के बड़े मॉल में सब कुछ चमकदार दिखता है आँखों को रोज़',
      'पर गाँव की कच्ची पगडंडी याद आते ही दिल भर आता है आज भी',
    ],
    linesHinglish: [
      'Shehar ke bade mall mein sab kuch chamakdaar dikhta hai aankhon ko roz',
      'Par gaanv ki kachhi pagdandi yaad aate hi dil bhar aata hai aaj bhi',
    ],
    linesEnglish: [
      'City malls shimmer brightly beneath polished glass every weekend',
      'Yet remembering dusty village footpaths still pulls soft mist to my eyes',
    ],
  },
  {
    title: 'माफी न माँग पाने का पछतावा',
    titleEnglish: 'Regret of Delayed Apologies',
    linesHindi: [
      'वक़्त रहते किसी अपने से माफ़ी माँग लेना बहुत अच्छा होता है',
      'क्योंकि बाद में खाली कुर्सी देखकर रोने से कोई लौटता नहीं',
    ],
    linesHinglish: [
      'Waqt rehte kisi apne se maafi maang lena bahut achha hota hai',
      'Kyunki baad mein khaali kursi dekhkar rone se koi laut-ta nahin',
    ],
    linesEnglish: [
      'Say sorry gently while the person you love still sits right across from you',
      'Weeping beside an empty wooden chair later brings nobody back home',
    ],
  },
  {
    title: 'भीतर का टूटा हुआ आईना',
    titleEnglish: 'Quiet Cracks Beneath Strong Looks',
    linesHindi: [
      'दुनिया बाहर की मुस्कान देखकर सोचती है कि सब कुछ सही है',
      'किसी को अंदर की ख़ामोश दरारें सुनने का समय ही कहाँ है',
    ],
    linesHinglish: [
      'Duniya baahar ki muskaan dekhkar sochti hai ki sab kuch sahi hai',
      'Kisi ko andar ki khaamosh daraarein sunne ka samay hi kahaan hai',
    ],
    linesEnglish: [
      'Passersby see an easy grin and assume life runs smooth as silk',
      'Rarely does anyone pause long enough to hear quiet cracks beneath',
    ],
  },
  {
    title: 'दिल की कोमलता बचाए रखना',
    titleEnglish: 'Guarding Tenderness Inside Harshness',
    linesHindi: [
      'इतनी चोटें खाने के बाद भी जो दूसरों के आँसू पोंछने आगे आए',
      'उस इंसान का दिल किसी मंदिर से कम पवित्र नहीं होता है',
    ],
    linesHinglish: [
      'Itni chotein khaane ke baad bhi jo doosron ke aansoo ponchhne aage aaye',
      'Us insaan ka dil kisi mandir se kam pavitra nahin hota hai',
    ],
    linesEnglish: [
      'Someone stepping forward to dry others’ tears despite carrying fresh scars',
      'Holds a heart as sacred as quiet shrines bathed in morning bells',
    ],
  },
  {
    title: 'पुराने घर की चाबी',
    titleEnglish: 'Key to Our Childhood Home',
    linesHindi: [
      'पुराना घर बिकने के बाद भी उसकी चाबी जेब में रखे घूमना',
      'बताता है कि कुछ यादों का किराया उम्र भर दिल ही भरता है',
    ],
    linesHinglish: [
      'Puraana ghar bikne ke baad bhi uski chaabi jeb mein rakhe ghoomna',
      'Bataata hai ki kuch yaadon ka kiraaya umr bhar dil hi bharta hai',
    ],
    linesEnglish: [
      'Still keeping the brass key long after the childhood house changed hands',
      'Proves the heart keeps paying rent on old memories for a lifetime',
    ],
  },
  {
    title: 'माँ की थकी हुई उँगलियाँ',
    titleEnglish: 'Mom’s Weary Loving Hands',
    linesHindi: [
      'चूल्हे की आंच और घर के काम में घिस गईं माँ की हथेलियाँ',
      'आज जब उन्हें अपने हाथों में लिया तो आँसू रुक न सके',
    ],
    linesHinglish: [
      'Choolhe ki aanch aur ghar ke kaam mein ghis gayin maa ki hatheliyaan',
      'Aaj jab unhein apne haathon mein liya to aansoo ruk na sake',
    ],
    linesEnglish: [
      'Years beside hot stoves and tireless chores wore lines across Mom’s palms',
      'Holding her fragile hands softly between mine brought instant tears today',
    ],
  },
  {
    title: 'बिना कहे समझ लेने वाला यार',
    titleEnglish: 'Friend Reading Silent Eyes',
    linesHindi: [
      'जब शब्द साथ छोड़ दें और गला बिल्कुल भारी हो रहा हो भीतर',
      'तो एक ऐसा दोस्त ज़रूर होना चाहिए जो बिना पूछे गले लगा ले',
    ],
    linesHinglish: [
      'Jab shabd saath chhod dein aur gala bilkul bhaari ho raha ho bheetar',
      'To ek aisa dost zaroor hona chahiye jo bina poochhe gale laga le',
    ],
    linesEnglish: [
      'When sentences jam inside your throat and chest feels ready to burst',
      'Everybody needs one friend who wraps arms around you without asking why',
    ],
  },
  {
    title: 'अजनबी शहर में त्योहार की रात',
    titleEnglish: 'Festival Night Alone Far Away',
    linesHindi: [
      'बाहर आसमान में पटाखे और रोशनी की चमक बिखर रही थी रात भर',
      'पर अकेले कमरे की बालकनी में बैठकर बस घर याद आता रहा',
    ],
    linesHinglish: [
      'Baahar aasmaan mein pataakhe aur roshni ki chamak bikhar rahi thi raat bhar',
      'Par akele kamre ki balcony mein baithkar bas ghar yaad aata raha',
    ],
    linesEnglish: [
      'Fireworks painted bright sparkles across distant city rooftops tonight',
      'Yet sitting out on a quiet apartment balcony made me ache only for home',
    ],
  },
  {
    title: 'धूप में खड़े पापा का साया',
    titleEnglish: 'Dad’s Quiet Shadow Under Noon Sun',
    linesHindi: [
      'अपने फटे जूते छुपाकर जिन्होंने हमारे लिए नए जूते ला दिए हर बार',
      'उस पिता की ख़ामोशी के आगे दुनिया का हर धन छोटा लगता है',
    ],
    linesHinglish: [
      'Apne phate joote chhupaakar jinhonne hamaare liye naye joote la diye har baar',
      'Us pita ki khaamoshi ke aage duniya ka har dhan chhota lagta hai',
    ],
    linesEnglish: [
      'Hiding worn soles of his own while buying shiny new shoes for us',
      'A father’s quiet sacrifice humbles every treasure chest on earth',
    ],
  },
  {
    title: 'बचपन की टूटी गुड़िया',
    titleEnglish: 'Memories Inside Old Toy Box',
    linesHindi: [
      'पुराने बक्से से निकला बचपन का एक टूटा खिलौना देखकर आज',
      'लगा कि हमने बड़े होने की जल्दी में बहुत कुछ सस्ता बेच दिया',
    ],
    linesHinglish: [
      'Puraane bakse se nikla bachpan ka ek toota khilauna dekhkar aaj',
      'Laga ki humne bade hone ki jaldi mein bahut kuch sasta bech diya',
    ],
    linesEnglish: [
      'Uncovering one chipped wooden toy at the bottom of an attic trunk today',
      'Made me realize how recklessly we rushed away from simple joy',
    ],
  },
  {
    title: 'सालों बाद भी ताज़ा कमी',
    titleEnglish: 'Patient Ache of Sincere Care',
    linesHindi: [
      'हमें लगता था समय के साथ हर जज़्बात हल्का पड़ जाता है दिल में',
      'पर कुछ लोगों की कमी सालों बाद भी उतनी ही ताज़ा चुभती है',
    ],
    linesHinglish: [
      'Humein lagta tha samay ke saath har jazbaat halka pad jaata hai dil mein',
      'Par kuch logon ki kami saalon baad bhi utni hi taaza chubhti hai',
    ],
    linesEnglish: [
      'We assumed passing years would softly blur every strong feeling down',
      'Yet certain people remain missed just as sharply ten autumns later',
    ],
  },
  {
    title: 'दिल की गहराई से निकली आह',
    titleEnglish: 'Quiet Sigh Released to Evening Sky',
    linesHindi: [
      'शाम की ठंडी हवा में एक लंबी साँस छोड़कर मुस्कुरा दिया आज मैं',
      'क्योंकि हर चीज़ हमारे बस में नहीं होती, यह मान लेना ही सुकून है',
    ],
    linesHinglish: [
      'Shaam ki thandi hawa mein ek lambi saans chhodkar muskura diya aaj main',
      'Kyunki har cheez hamaare bas mein nahin hoti, yeh maan lena hi sukoon hai',
    ],
    linesEnglish: [
      'Exhaling one slow sigh into cool twilight air, I smiled peacefully',
      'Accepting what lies outside our grip is often where true calm starts',
    ],
  },
  {
    title: 'दोस्त के जाने का खालीपन',
    titleEnglish: 'Quiet Seat After Friend Moves',
    linesHindi: [
      'हॉस्टल का कमरा खाली करके जब दोस्त हमेशा को विदा हुआ था',
      'उस शाम खाली बिस्तर देखकर पहली बार दिल जोर से रोया था',
    ],
    linesHinglish: [
      'Hostel ka kamra khaali karke jab dost hamesha ko vida hua tha',
      'Us shaam khaali bistar dekhkar pehli baar dil zor se roya tha',
    ],
    linesEnglish: [
      'After packing suitcases and saying final goodbyes in that dorm hallway',
      'Staring at the bare mattress across the room finally broke my composure',
    ],
  },
  {
    title: 'छोटी बात से टूटा भरोसा',
    titleEnglish: 'Quiet Sting of Broken Words',
    linesHindi: [
      'इंसान को पैसों के नुकसान से ज़्यादा दुःख तब होता है जीवन में',
      'जब वह किसी पर आँख बंद करके भरोसा करे और वह टूट जाए',
    ],
    linesHinglish: [
      'Insaan ko paison ke nuksaan se zyada dukh tab hota hai jeevan mein',
      'Jab woh kisi par aankh band karke bharosa kare aur woh toot jaaye',
    ],
    linesEnglish: [
      'Far deeper than losing money hurts the quiet afternoon you learn',
      'Someone you trusted completely did not guard your heart the same way',
    ],
  },
  {
    title: 'आँसुओं से सींची मुस्कान',
    titleEnglish: 'Smile Grown Out of Tears',
    linesHindi: [
      'आज जो मुस्कान मेरे चेहरे पर इतनी शांत और स्थिर दिखती है तुम्हें',
      'उसकी जड़ों को बरसों तक मेरे आँसुओं ने ही सींचा है चुपचाप',
    ],
    linesHinglish: [
      'Aaj jo muskaan mere chehre par itni shaant aur sthir dikhti hai tumhein',
      'Uski jadon ko barson tak mere aansuon ne hi seencha hai chupchaap',
    ],
    linesEnglish: [
      'This calm, unshakeable smile sitting peacefully across my face today',
      'Was watered quietly at its roots through years of private tears',
    ],
  },
  {
    title: 'अधूरी बात का दर्द',
    titleEnglish: 'Heavy Weight of Unsaid Goodbyes',
    linesHindi: [
      'काश आखिरी बार मिलते वक़्त थोड़ा ज़्यादा वक़्त रोक लिया होता मैंने',
      'क्या पता था वह साधारण सी मुलाक़ात आखिरी साबित होने वाली है',
    ],
    linesHinglish: [
      'Kaash aakhiri baar milte waqt thoda zyada waqt rok liya hota maine',
      'Kya pata tha woh saadhaaran si mulaakaat aakhiri saabit hone waali hai',
    ],
    linesEnglish: [
      'If only I had lingered five extra minutes on that ordinary afternoon',
      'Never guessing how precious one routine wave goodbye would later become',
    ],
  },
  {
    title: 'भीड़ से अलग संवेदनशील दिल',
    titleEnglish: 'Tender Heart in a Hurried Crowd',
    linesHindi: [
      'संवेदनशील होना इस दुनिया में कोई बीमारी नहीं, एक वरदान है',
      'बस अपना दिल हर किसी की मेज़ पर खुला मत छोड़ देना यार',
    ],
    linesHinglish: [
      'Samvedansheel hona is duniya mein koi bimaari nahin, ek vardaan hai',
      'Bas apna dil har kisi ki mez par khula mat chhod dena yaar',
    ],
    linesEnglish: [
      'Carrying a deeply feeling heart is never a flaw—it is rare sensitivity',
      'Simply learn not to leave it unguarded on everybody’s table',
    ],
  },
  {
    title: 'खामोश शहर, जागती यादें',
    titleEnglish: 'Sleeping Streets, Waking Memories',
    linesHindi: [
      'जब घड़ी में तीन बजते हैं और सारा मोहल्ला सो रहा होता है',
      'तब पुराने किस्सों की फिल्म आँखों में अपने आप चलने लगती है',
    ],
    linesHinglish: [
      'Jab ghadi mein teen bajte hain aur saara mohalla so raha hota hai',
      'Tab puraane kisson ki film aankhon mein apne aap chalne lagti hai',
    ],
    linesEnglish: [
      'When clocks tick quietly past three a.m. across sleeping streets',
      'Old cherished chapters replay themselves vividly across closed lids',
    ],
  },
  {
    title: 'प्यार भरा आख़िरी आलिंगन',
    titleEnglish: 'Warm Embrace Saying Everything',
    linesHindi: [
      'जब कोई गले लगाकर पाँच सेकंड ज़्यादा रोके रखे बाहों में तुम्हें',
      'तो समझ लेना वह भीतर से बहुत थका हुआ है और सहारा चाहता है',
    ],
    linesHinglish: [
      'Jab koi gale lagaakar paanch second zyada roke rakhe baahon mein tumhein',
      'To samajh lena woh bheetar se bahut thaka hua hai aur sahaara chahta hai',
    ],
    linesEnglish: [
      'Whenever someone holds a hug five quiet seconds longer than usual',
      'Hold right back softly—often their spirit is silently running on empty',
    ],
  },
  {
    title: 'नए कल की सुहानी आशा',
    titleEnglish: 'Gentle Dawn Lifting Heavy Spirits',
    linesHindi: [
      'रो लेने से मन का आसमान बिल्कुल साफ हो जाता है बारिश के बाद',
      'अब फिर से मुस्कुराओ क्योंकि आगे का रास्ता तुम्हारा इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Ro lene se mann ka aasmaan bilkul saaf ho jaata hai baarish ke baad',
      'Ab phir se muskuraao kyunki aage ka raasta tumhaara intezaar kar raha hai',
    ],
    linesEnglish: [
      'Just like skies clear crisply after pouring down summer rain',
      'Let yourself smile again—brighter miles wait steadily ahead of you',
    ],
  },

  // Block 5 (81-100)
  {
    title: 'माँ-पापा की उम्र का डर',
    titleEnglish: 'Quiet Fear Watching Parents Age',
    linesHindi: [
      'आजकल सबसे ज़्यादा डर किसी हार या नुकसान का नहीं लगता मुझे',
      'बस माँ-पापा के सफेद होते बालों को देखकर दिल काँप जाता है',
    ],
    linesHinglish: [
      'Aajkal sabse zyada dar kisi haar ya nuksaan ka nahin lagta mujhe',
      'Bas maa-papa ke safed hote baalon ko dekhkar dil kaanp jaata hai',
    ],
    linesEnglish: [
      'Lately no setback at work scares me half as much inside',
      'As noticing more silver threads gathering softly in my parents’ hair',
    ],
  },
  {
    title: 'बिना आवाज़ का टूटना',
    titleEnglish: 'Breaking Silently Behind Closed Doors',
    linesHindi: [
      'कुछ आवाज़ें इतनी धीमी होती हैं कि दीवारों से भी नहीं टकरातीं',
      'पर इंसान की पूरी नींद और चैन चुपचाप छीन लेती हैं',
    ],
    linesHinglish: [
      'Kuch aawaazein itni dheemi hoti hain ki deewaaron se bhi nahin takraatin',
      'Par insaan ki poori neend aur chain chupchaap chheen leti hain',
    ],
    linesEnglish: [
      'Some inner aches whisper too softly to even echo off bedroom walls',
      'Yet still manage quietly to carry away hours of peaceful sleep',
    ],
  },
  {
    title: 'अजनबी शहर का स्टेशन',
    titleEnglish: 'Lonely Platform Far From Home',
    linesHindi: [
      'अनजान स्टेशन पर बैग उठाए खड़े रहना आसान नहीं होता यार',
      'तब सबसे ज़्यादा याद आता है कि घर पर कोई इंतज़ार नहीं कर रहा यहाँ',
    ],
    linesHinglish: [
      'Anjaan station par bag uthaaye khade rehna aasaan nahin hota yaar',
      'Tab sabse zyada yaad aata hai ki ghar par koi intezaar nahin kar raha yahaan',
    ],
    linesEnglish: [
      'Standing at an unfamiliar station gripping heavy luggage alone stings slightly',
      'Making you miss having warm family waiting right around the corner',
    ],
  },
  {
    title: 'बचपन का खोया आँगन',
    titleEnglish: 'Missing the Old Brick Courtyard',
    linesHindi: [
      'मिट्टी के आँगन में नंगे पैर दौड़ने का सुख कहाँ गया अब',
      'आज कालीन पर चलते हुए भी पैरों को वह सुकून नहीं मिलता',
    ],
    linesHinglish: [
      'Mitti ke aangan mein nange pair daudne ka sukh kahaan gaya ab',
      'Aaj kaaleen par chalte hue bhi pairon ko woh sukoon nahin milta',
    ],
    linesEnglish: [
      'Where did the joy of sprinting barefoot over cool mud courtyards go',
      'Even plush living room carpets never comfort tired feet quite the same',
    ],
  },
  {
    title: 'सुकून की एक झपकी',
    titleEnglish: 'Craving Carefree Afternoon Naps',
    linesHindi: [
      'वो दिन भी क्या थे जब दोपहर को माँ के पल्लू के पास सो जाते थे',
      'अब हज़ारों के गद्दे पर भी करवटें बदलते हुए सुबह हो जाती है',
    ],
    linesHinglish: [
      'Woh din bhi kya the jab dopahar ko maa ke pallu ke paas so jaate the',
      'Ab hazaaron ke gadde par bhi karwatein badalte hue subah ho jaati hai',
    ],
    linesEnglish: [
      'How blessed those afternoons were nodding off beside Mom’s sari hem',
      'Now even plush luxury mattresses find us tossing restlessly till dawn',
    ],
  },
  {
    title: 'प्यार में खामोश क़ुर्बानी',
    titleEnglish: 'Quiet Sacrifice Out of Love',
    linesHindi: [
      'कई बार किसी की खुशी के लिए ख़ुद पीछे हट जाना पड़ता है चुपचाप',
      'यही खामोश त्याग हर किसी के बस की बात नहीं होती',
    ],
    linesHinglish: [
      'Kai baar kisi ki khushi ke liye khud peechhe hat jaana padta hai chupchaap',
      'Yahi khaamosh tyaag har kisi ke bas ki baat nahin hoti',
    ],
    linesEnglish: [
      'Sometimes loving someone means stepping softly back so they shine ahead',
      'That quiet kind of selflessness takes rare strength inside the chest',
    ],
  },
  {
    title: 'दिल की गहराई का एहसास',
    titleEnglish: 'Feeling Life Too Deeply',
    linesHindi: [
      'बहुत ज़्यादा महसूस करने वाले लोग अक्सर बहुत जल्दी थक जाते हैं',
      'क्योंकि वे दुनिया के हर छोटे दर्द को अपने अंदर बसा लेते हैं',
    ],
    linesHinglish: [
      'Bahut zyada mehsoos karne waale log aksar bahut jaldi thak jaate hain',
      'Kyunki we duniya ke har chhote dard ko apne andar basa lete hain',
    ],
    linesEnglish: [
      'Tender-hearted people who sense every subtle shift wear out early',
      'Because they absorb half the unspoken weight of everyone around them',
    ],
  },
  {
    title: 'पुरानी घड़ी और थमा वक़्त',
    titleEnglish: 'Stopped Clock, Unforgotten Evening',
    linesHindi: [
      'दीवार पर बंद पड़ी दादाजी की पुरानी घड़ी देख कर आज',
      'ऐसा लगा जैसे उनके साथ बिताई हर शाम यहीं रुक गई हो',
    ],
    linesHinglish: [
      'Deewaar par band padi daadaaji ki puraani ghadi dekh kar aaj',
      'Aisa laga jaise unke saath bitaayi har shaam yahin ruk gayi ho',
    ],
    linesEnglish: [
      'Glancing up at Grandpa’s old stopped wall clock in the hallway today',
      'Made every peaceful evening spent listening to him feel frozen gently in place',
    ],
  },
  {
    title: 'मेहनत के बाद अकेली जीत',
    titleEnglish: 'Quiet Triumph in an Empty Room',
    linesHindi: [
      'जब जीत मिलने पर सबसे ख़ास इंसान पास न हो बधाई देने को',
      'तब वह चमचमाती ट्रॉफी भी हाथ में थोड़ी भारी लगने लगती है',
    ],
    linesHinglish: [
      'Jab jeet milne par sabse khaas insaan paas na ho badhaai dene ko',
      'Tab woh chamchamaati trophy bhi haath mein thodi bhaari lagne lagti hai',
    ],
    linesEnglish: [
      'When your proudest milestone arrives without your favorite person near',
      'Even a gleaming gold trophy feels slightly lonely resting in your hands',
    ],
  },
  {
    title: 'आँसू जो दुआ बन गए',
    titleEnglish: 'Tears That Turned Into Prayers',
    linesHindi: [
      'हर आँसू हमेशा किसी शिकायत को लेकर ही नहीं गिरता गालों पर',
      'कभी-कभी वह किसी की लंबी उम्र की दुआ बनकर भी बहता है',
    ],
    linesHinglish: [
      'Har aansoo hamesha kisi shikaayat ko lekar hi nahin girta gaalon par',
      'Kabhi-kabhi woh kisi ki lambi umr ki dua bankar bhi behta hai',
    ],
    linesEnglish: [
      'Not every warm drop down your cheek carries sorrow or complaint',
      'Sometimes tears simply roll softly as silent prayers for someone dear',
    ],
  },
  {
    title: 'खामोश रहकर सब सहना',
    titleEnglish: 'Enduring Storms Without Complaints',
    linesHindi: [
      'हालात कितने भी कठिन क्यों न चल रहे हों घर की चारदीवारी में',
      'बड़ा बेटा अक्सर सब कुछ अकेले ही अपने कंधों पर उठा लेता है',
    ],
    linesHinglish: [
      'Haalaat kitne bhi kathin kyun na chal rahe hon ghar ki chaardeewaari mein',
      'Bada beta aksar sab kuch akele hi apne kandhon par utha leta hai',
    ],
    linesEnglish: [
      'However storm-tossed family finances feel inside closed doors',
      'An older child quietly shoulders the entire weight without complaining',
    ],
  },
  {
    title: 'बिना ग़लती के झुकना',
    titleEnglish: 'Bending Gently Without Fault',
    linesHindi: [
      'कभी-कभी बिना किसी कसूर के भी हम इसलिए झुक जाते हैं सामने',
      'क्योंकि हमारे लिए अहंकार से ज़्यादा ज़रूरी सामने वाला इंसान होता है',
    ],
    linesHinglish: [
      'Kabhi-kabhi bina kisi kasoor ke bhi hum isliye jhuk jaate hain saamne',
      'Kyunki hamaare liye ahankaar se zyada zaroori saamne waala insaan hota hai',
    ],
    linesEnglish: [
      'Sometimes we apologize softly even when fault never belonged to us',
      'Simply because keeping the person matters miles more than pride',
    ],
  },
  {
    title: 'अधूरे ख्वाबों को सलाम',
    titleEnglish: 'Salute to Quietly Shelved Dreams',
    linesHindi: [
      'जो सपने हमने घर की छत के नीचे चुपचाप दफ़न कर दिए कभी',
      'उनका सम्मान हर उस चेहरे में दिखता है जिसे हमने खुश रखा',
    ],
    linesHinglish: [
      'Jo sapne humne ghar ki chhat ke neeche chupchaap dafan kar diye kabhi',
      'Unka sammaan har us chehre mein dikhta hai jise humne khush rakha',
    ],
    linesEnglish: [
      'Those personal dreams tucked softly away to keep home skies sunny',
      'Shine proudly reflected back in every loved one’s peaceful smile',
    ],
  },
  {
    title: 'चाय की केतली और अकेली शाम',
    titleEnglish: 'Kettle Whistle in Quiet Evening',
    linesHindi: [
      'शाम को केतली में पानी उबलने की आवाज़ भी कभी-कभी पूछ लेती है',
      'आज फिर एक ही कप बनेगा या किसी अपने को बुलाया है तुमने',
    ],
    linesHinglish: [
      'Shaam ko ketli mein paani ubalne ki aawaz bhi kabhi-kabhi poochh leti hai',
      'Aaj phir ek hi cup banega ya kisi apne ko bulaaya hai tumne',
    ],
    linesEnglish: [
      'Even the whistling stovetop kettle at six seems to whisper gently',
      'Brewing just one lonely mug tonight or expecting somebody over',
    ],
  },
  {
    title: 'नए सफ़र में पुरानी याद',
    titleEnglish: 'Carrying Old Warmth Into New Roads',
    linesHindi: [
      'चाहे कितनी भी तेज़ रफ़्तार वाली गाड़ी में आगे बढ़ जाएँ हम',
      'माँ के हाथ से खाए आख़िरी निवाले की खुशबू साथ चलती है',
    ],
    linesHinglish: [
      'Chaahe kitni bhi tez raftaar waali gaadi mein aage badh jaayein hum',
      'Maa ke haath se khaaye aakhiri nivaale ki khushboo saath chalti hai',
    ],
    linesEnglish: [
      'No matter how fast life carries us down gleaming modern highways',
      'The tender scent of Mom feeding our last bite before leaving stays near',
    ],
  },
  {
    title: 'दिल की गहराई से टूटना और संभलना',
    titleEnglish: 'Breaking Deeply, Healing Slowly',
    linesHindi: [
      'इंसान एक ही बार में पूरी तरह नहीं बदलता कभी भी ज़िंदगी में',
      'हज़ार छोटे-छोटे दर्द मिलकर उसे चुपचाप शांत बना देते हैं',
    ],
    linesHinglish: [
      'Insaan ek hi baar mein poori tarah nahin badalta kabhi bhi zindagi mein',
      'Hazaar chhote-chhote dard milkar use chupchaap shaant bana dete hain',
    ],
    linesEnglish: [
      'Nobody transforms from loud to quiet overnight in a single hour',
      'A hundred small heartbreaks slowly teach the spirit steady stillness',
    ],
  },
  {
    title: 'माँ की गोद जैसी ठंडक',
    titleEnglish: 'Cool Peace of Mother’s Lap',
    linesHindi: [
      'ज़िंदगी भर की दौड़ के बाद भी सबसे ज़्यादा सुकून वहीं मिलता है',
      'जहाँ माँ बिना कुछ पूछे सिर पर हाथ फेरती चली जाएँ',
    ],
    linesHinglish: [
      'Zindagi bhar ki daud ke baad bhi sabse zyada sukoon wahin milta hai',
      'Jahaan maa bina kuch poochhe sir par haath pherti chali jaayein',
    ],
    linesEnglish: [
      'Even after running uphill decades chasing goals around the map',
      'Nothing matches resting your tired head silently in Mom’s lap',
    ],
  },
  {
    title: 'खामोश आँखों की चमक',
    titleEnglish: 'Quiet Glow Through Wet Eyes',
    linesHindi: [
      'जब कोई तुम्हारे बुरे वक़्त में हाथ पकड़कर कहे, रो मत मैं हूँ',
      'तो समझो दुनिया की सबसे बड़ी दवा उसी पल मिल गई तुम्हें',
    ],
    linesHinglish: [
      'Jab koi tumhaare bure waqt mein haath pakadkar kahe, ro mat main hoon',
      'To samjho duniya ki sabse badi dawa usi pal mil gayi tumhein',
    ],
    linesEnglish: [
      'When someone grips your shaky fingers softly saying, do not cry I am here',
      'Know the finest healing balm on earth arrived right inside that moment',
    ],
  },
  {
    title: 'वक़्त की रफ़्तार पर आँसू',
    titleEnglish: 'Tears at Swiftly Passing Years',
    linesHindi: [
      'पता ही नहीं चला कब स्कूल की ड्रेस से ऑफिस की शर्ट तक आ गए',
      'और बचपन के सारे बेफ़िक्र दिन बस तस्वीरों में सिमट कर रह गए',
    ],
    linesHinglish: [
      'Pata hi nahin chala kab school ki dress se office ki shirt tak aa gaye',
      'Aur bachpan ke saare befikr din bas tasveeron mein simat kar reh gaye',
    ],
    linesEnglish: [
      'Nobody noticed how fast crisp school uniforms turned into office collars',
      'Leaving every carefree summer compressed neatly inside old photo frames',
    ],
  },
  {
    title: 'उम्मीद के सहारे जीना',
    titleEnglish: 'Living Gently on Quiet Hope',
    linesHindi: [
      'चाहे जितना भी भारी मन लेकर सोए हों हम कल रात को यार',
      'सुबह की पहली चाय फिर से जीने की छोटी उम्मीद दे ही जाती है',
    ],
    linesHinglish: [
      'Chaahe jitna bhi bhaari mann lekar soye hon hum kal raat ko yaar',
      'Subah ki pehli chai phir se jeene ki chhoti ummeed de hi jaati hai',
    ],
    linesEnglish: [
      'However heavy our hearts drifted off onto dark pillows last night',
      'The first warm cup of morning tea hands us quiet hope all over again',
    ],
  },

  // Block 6 (101-120)
  {
    title: 'सुकून की तलाश में थकान',
    titleEnglish: 'Weary Search for Quiet Rest',
    linesHindi: [
      'सपनों का पीछा करते हुए इतना दूर निकल आए हम अपने घर से',
      'कि अब लौटने के लिए भी कैलेंडर की छुट्टियाँ गिननी पड़ती हैं',
    ],
    linesHinglish: [
      'Sapnon ka peechha karte hue itna door nikal aaye hum apne ghar se',
      'Ki ab lautne ke liye bhi calendar ki chhuttiyaan ginni padti hain',
    ],
    linesEnglish: [
      'Chasing lofty ambitions carried us so many miles away from home',
      'That even visiting our own parents demands counting leave days ahead',
    ],
  },
  {
    title: 'अधूरी दुआओं की तड़प',
    titleEnglish: 'Tender Ache in Sincere Prayers',
    linesHindi: [
      'जो बात हम किसी इंसान के सामने बोलने में घबराते हैं अक्सर',
      'वह हर रात मंदिर की देहरी पर आँखों से बहकर निकल जाती है',
    ],
    linesHinglish: [
      'Jo baat hum kisi insaan ke saamne bolne mein ghabraate hain aksar',
      'Woh har raat mandir ki dehri par aankhon se behkar nikal jaati hai',
    ],
    linesEnglish: [
      'Thoughts too vulnerable to utter before any human listener',
      'Flow softly from misted eyes during quiet evening prayers instead',
    ],
  },
  {
    title: 'दिल की गहराई का सुकून',
    titleEnglish: 'Relief Inside Honest Vulnerability',
    linesHindi: [
      'ज़िंदगी में कम से कम एक इंसान ऐसा होना बहुत ज़रूरी है यार',
      'जिसके सामने आप बिना डरे अपने सारे आँसू बहा सको खुलकर',
    ],
    linesHinglish: [
      'Zindagi mein kam se kam ek insaan aisa hona bahut zaroori hai yaar',
      'Jiske saamne aap bina dare apne saare aansoo baha sako khulkar',
    ],
    linesEnglish: [
      'Everyone desperately needs at least one safe soul in this lifetime',
      'Before whom you can drop every guard and cry completely unashamed',
    ],
  },
  {
    title: 'पापा की खाली कुर्सी',
    titleEnglish: 'Empty Armchair in Living Hall',
    linesHindi: [
      'कुछ आवाज़ें घर से जाने के बाद भी दीवारों में बसी रहती हैं',
      'जैसे पापा की खाली कुर्सी आज भी उन्हीं का इंतज़ार करती दिखती है',
    ],
    linesHinglish: [
      'Kuch aawaazein ghar se jaane ke baad bhi deewaaron mein basi rehti hain',
      'Jaise papa ki khaali kursi aaj bhi unhin ka intezaar karti dikhti hai',
    ],
    linesEnglish: [
      'Certain gentle footsteps linger quietly inside hallways long after',
      'And an empty armchair still seems waiting warmly for its familiar voice',
    ],
  },
  {
    title: 'मुस्कान के पीछे छुपा सच',
    titleEnglish: 'Truth Tucked Behind Bright Grins',
    linesHindi: [
      'कितनी बार हँसकर टाल दी हमने अपनों के सामने अपनी तकलीफ़',
      'ताकि हमारे ग़म से किसी और का हँसता दिन उदास न हो जाए',
    ],
    linesHinglish: [
      'Kitni baar hanskar taal di humne apnon ke saamne apni takleef',
      'Taaki hamaare gham se kisi aur ka hansta din udaas na ho jaaye',
    ],
    linesEnglish: [
      'Countless times we laughed off sharp aches before our loved ones',
      'Only to keep our private rain from clouding someone else’s sunny afternoon',
    ],
  },
  {
    title: 'मेहनत से भरे भीगे ख्वाब',
    titleEnglish: 'Hard Work Carrying Misty Hopes',
    linesHindi: [
      'छोटी सी नौकरी में भी अपने घर के सपने बुनता रहता है इंसान',
      'शाम को थककर लौटता है पर सुबह फिर मुस्कुराकर निकल पड़ता है',
    ],
    linesHinglish: [
      'Chhoti si naukri mein bhi apne ghar ke sapne bunta rehta hai insaan',
      'Shaam ko thakkar laut-ta hai par subah phir muskuraakar nikal padta hai',
    ],
    linesEnglish: [
      'Even modest salaries carry entire families’ brightest hopes along',
      'Returning dog-tired at dusk, yet stepping out smiling again by dawn',
    ],
  },
  {
    title: 'बदलते मौसम में अकेला मन',
    titleEnglish: 'Wistful Heart Through Shifting Seasons',
    linesHindi: [
      'दिसंबर की शामें हमेशा थोड़ा भावुक कर ही देती हैं इंसान को',
      'न जाने क्यों पुराने सालों की यादें ठंडी हवा के साथ आ जाती हैं',
    ],
    linesHinglish: [
      'December ki shaamein hamesha thoda bhaavuk kar hi deti hain insaan ko',
      'Na jaane kyun puraane saalon ki yaadein thandi hawa ke saath aa jaati hain',
    ],
    linesEnglish: [
      'Early December twilights naturally soften even sturdy spirits inside',
      'Bringing cherished memories from years past drifting in on chilly wind',
    ],
  },
  {
    title: 'अधूरे शब्द, पूरी भावना',
    titleEnglish: 'Broken Sentences, Complete Heart',
    linesHindi: [
      'जब बहुत ज़्यादा प्यार या दर्द भर आता है किसी के दिल में',
      'तो टूटे-फूटे लफ़्ज़ भी पूरी कविता से ज़्यादा असर छोड़ते हैं',
    ],
    linesHinglish: [
      'Jab bahut zyada pyar ya dard bhar aata hai kisi ke dil mein',
      'To toote-phoote lafz bhi poori kavita se zyada asar chhodte hain',
    ],
    linesEnglish: [
      'When overwhelming tenderness or ache fills the heart clear to the brim',
      'Even stammered, simple words hit deeper than polished poetry ever could',
    ],
  },
  {
    title: 'पुराना शहर छोड़ते हुए',
    titleEnglish: 'Last Look Leaving Old Hometown',
    linesHindi: [
      'जिस गली में साइकिल चलाकर बड़े हुए थे हम बचपन में कभी',
      'वहाँ से सामान समेटकर निकलते वक़्त आँखें नम हो ही गईं',
    ],
    linesHinglish: [
      'Jis gali mein cycle chalaakar bade hue the hum bachpan mein kabhi',
      'Wahaan se saamaan sametkar nikalte waqt aankhein nam ho hi gayin',
    ],
    linesEnglish: [
      'Rolling packed suitcases down the exact lane where we learned to bike',
      'Left wet lashes gleaming before turning the corner one final time',
    ],
  },
  {
    title: 'सपनों के नीचे दबी नींद',
    titleEnglish: 'Sleep Traded Beneath Quiet Ambitions',
    linesHindi: [
      'कागज़ों और स्क्रीन पर आँखें गड़ाए गुज़र जाती हैं कई रातें चुपचाप',
      'ताकि एक दिन माँ-पापा की आँखों में चैन की नींद देख सकें हम',
    ],
    linesHinglish: [
      'Kaagazon aur screen par aankhein gadaaye guzar jaati hain kai raatein chupchaap',
      'Taaki ek din maa-papa ki aankhon mein chain ki neend dekh sakein hum',
    ],
    linesEnglish: [
      'Midnight after midnight slips past staring tiredly at glowing pages',
      'Just so one bright morning our parents can finally rest carefree forever',
    ],
  },
  {
    title: 'खामोश आँसुओं का सम्मान',
    titleEnglish: 'Respecting Tears Shed Quietly',
    linesHindi: [
      'लड़कों को रोना नहीं चाहिए, यह झूठी बात किसने सिखाई समाज को',
      'दर्द होने पर आँसू तो हर इंसान के सीने से बहते हैं यारो',
    ],
    linesHinglish: [
      'Ladkon ko rona nahin chahiye, yeh jhoothi baat kisne sikhaayi samaaj ko',
      'Dard hone par aansoo to har insaan ke seene se behte hain yaaro',
    ],
    linesEnglish: [
      'Who ever taught the world that strong men must never shed a tear',
      'When pain hits deeply, wet eyes belong evenly to every human heart',
    ],
  },
  {
    title: 'चुटकुले से ज़्यादा गहरी चुप्पी',
    titleEnglish: 'Silence Deeper Than Loud Jokes',
    linesHindi: [
      'महफ़िल से उठकर जाने के बाद जो खालीपन बचता है सीने में',
      'उसे किसी भी शोर या संगीत से भर पाना आसान नहीं होता',
    ],
    linesHinglish: [
      'Mehfil se uthkar jaane ke baad jo khaalipan bachta hai seene mein',
      'Use kisi bhi shor ya sangeet se bhar paana aasaan nahin hota',
    ],
    linesEnglish: [
      'The hollow quiet settling inside once lively party music fades out',
      'Can never easily be filled by loud noise or busy distractions afterward',
    ],
  },
  {
    title: 'बचपन का खोया संदूक',
    titleEnglish: 'Memories Inside Old Wooden Trunk',
    linesHindi: [
      'अलमारी के ऊपर रखे पुराने संदूक में सिर्फ़ कपड़े नहीं बंद हैं',
      'उसमें हमारी दादी के हाथ के स्वेटर और बचपन की यादें बंद हैं',
    ],
    linesHinglish: [
      'Almaari ke oopar rakhe puraane sandook mein sirf kapde nahin band hain',
      'Usmein hamaari daadi ke haath ke sweater aur bachpan ki yaadein band hain',
    ],
    linesEnglish: [
      'That dusty cedar chest atop the wardrobe holds far more than winter coats',
      'Inside rest Grandma’s hand-knitted sweaters and warmth from gentler years',
    ],
  },
  {
    title: 'दिल की सच्चाई पर आँसू',
    titleEnglish: 'Moved by Unexpected Kindness',
    linesHindi: [
      'कभी-कभी दुःख से नहीं, किसी के अनपेक्षित प्यार को देखकर भी',
      'आँखों में एक प्यारी सी नमी अपने आप उतर आती है यार',
    ],
    linesHinglish: [
      'Kabhi-kabhi dukh se nahin, kisi ke anpekshit pyar ko dekhkar bhi',
      'Aankhon mein ek pyari si nami apne aap utar aati hai yaar',
    ],
    linesEnglish: [
      'Sometimes mist fills our eyes not from sorrow or hard knocks at all',
      'But from witnessing sudden, unasked kindness touch us out of nowhere',
    ],
  },
  {
    title: 'थके क़दमों को सहारा',
    titleEnglish: 'Shelter for Weary Footsteps',
    linesHindi: [
      'पूरी दुनिया के सामने लोहे जैसा सख़्त बने रहने का बोझ मत ढोओ',
      'थोड़ी देर बैठकर आँसू पोंछ लेना भी नई ऊर्जा भर देता है',
    ],
    linesHinglish: [
      'Poori duniya ke saamne lohe jaisa sakht bane rehne ka bojh mat dhoo',
      'Thodi der baithkar aansoo ponchh lena bhi nayi oorja bhar deta hai',
    ],
    linesEnglish: [
      'Stop hauling the exhausting weight of acting unbreakable before everyone',
      'Sitting quietly for five honest minutes restores fresh strength inside',
    ],
  },
  {
    title: 'अधूरी बात का मीठा मलाल',
    titleEnglish: 'Soft Regret of Unfinished Visits',
    linesHindi: [
      'कल बात कर लूँगा सोचकर कई बार हम ज़रूरी कॉल टाल देते हैं',
      'फिर वक़्त हमें सिखाता है कि कल का भरोसा कम ही करना चाहिए',
    ],
    linesHinglish: [
      'Kal baat kar loonga sochkar kai baar hum zaroori call taal dete hain',
      'Phir waqt humein sikhaata hai ki kal ka bharosa kam hi karna chahiye',
    ],
    linesEnglish: [
      'Saying I will call back tomorrow makes us postpone loving check-ins',
      'Until time gently teaches us never to gamble carelessly on later',
    ],
  },
  {
    title: 'प्यार भरा अनमोल आभार',
    titleEnglish: 'Emotional Thanks From Deep Within',
    linesHindi: [
      'जो बुरे दिनों में भी मेरी टूटी बातों को सुनते रहे बिना थके',
      'उन दो-तीन लोगों का कर्ज़ इस पूरी उम्र नहीं उतर पाएगा',
    ],
    linesHinglish: [
      'Jo bure dinon mein bhi meri tooti baaton ko sunte rahe bina thake',
      'Un do-teen logon ka karz is poori umr nahin utar paayega',
    ],
    linesEnglish: [
      'To the two or three loyal souls who heard my rambling fears without tiring',
      'I could live ten lifetimes and never fully repay your gentle patience',
    ],
  },
  {
    title: 'आँगन में खिली पुरानी याद',
    titleEnglish: 'Blooms Remembering Better Days',
    linesHindi: [
      'घर के बाहर लगा पुराना आम का पेड़ आज भी हरा-भरा खड़ा है',
      'बस उसके नीचे बैठने वाले सारे बच्चे अब बड़े हो चुके हैं',
    ],
    linesHinglish: [
      'Ghar ke baahar laga puraana aam ka ped aaj bhi hara-bhara khada hai',
      'Bas uske neeche baithne waale saare bachche ab bade ho chuke hain',
    ],
    linesEnglish: [
      'The old mango tree outside our gate still stands broad and leafy green',
      'Only all the kids who played beneath its shade grew up and moved away',
    ],
  },
  {
    title: 'दिल के भीतर का कोमल संसार',
    titleEnglish: 'Tender World Hidden Within',
    linesHindi: [
      'बाहर से भले ही इंसान बिल्कुल शांत और व्यस्त दिखता रहे हमेशा',
      'अंदर उसके भी सैकड़ों एहसास हर धड़कन के साथ चलते हैं',
    ],
    linesHinglish: [
      'Baahar se bhale hi insaan bilkul shaant aur vyast dikhta rahe hamesha',
      'Andar uske bhi sainkdon ehsaas har dhadkan ke saath chalte hain',
    ],
    linesEnglish: [
      'Even someone looking brisk, composed, and busy across office halls',
      'Carries a hundred tender tides shifting quietly behind every heartbeat',
    ],
  },
  {
    title: 'आशा के नए पंख',
    titleEnglish: 'Fresh Wings Born After Tears',
    linesHindi: [
      'गहरे दर्द के बाद जब इंसान दोबारा मुस्कुराना सीख लेता है न',
      'तो उसकी मुस्कान में एक अलग ही चमक और शांति बस जाती है',
    ],
    linesHinglish: [
      'Gehre dard ke baad jab insaan dobaara muskuraana seekh leta hai na',
      'To uski muskaan mein ek alag hi chamak aur shaanti bas jaati hai',
    ],
    linesEnglish: [
      'Once someone learns to smile softly again on the far side of heartbreak',
      'An unmistakable warmth and quiet grace settles into every grin',
    ],
  },

  // Block 7 (121-140)
  {
    title: 'मेरी जान की सलामती की अरदास',
    titleEnglish: 'Emotional Prayer for Dear Ones',
    linesHindi: [
      'चाहे मेरे हिस्से में थोड़ी कम ख़ुशी आए तो भी गिला नहीं है',
      'बस जिनसे मैं प्यार करता हूँ उनकी आँखों में आँसू न आएं कभी',
    ],
    linesHinglish: [
      'Chaahe mere hisse mein thodi kam khushi aaye to bhi gila nahin hai',
      'Bas jinse main pyar karta hoon unki aankhon mein aansoo na aayein kabhi',
    ],
    linesEnglish: [
      'Even if my own plate holds slightly smaller shares of ease along the road',
      'Simply keep painful tears far away from every soul I hold dear',
    ],
  },
  {
    title: 'दूर होते रिश्ते का दुःख',
    titleEnglish: 'Ache Watching Closeness Thin',
    linesHindi: [
      'सबसे ज़्यादा तकलीफ़ तब नहीं होती जब कोई अजनबी दिल तोड़े',
      'बल्कि तब होती है जब बरसों पुराना अपना धीरे-धीरे दूर हो जाए',
    ],
    linesHinglish: [
      'Sabse zyada takleef tab nahin hoti jab koi anjaan dil tode',
      'Balki tab hoti hai jab barson puraana apna dheere-dheere door ho jaaye',
    ],
    linesEnglish: [
      'Strangers bruising your feelings stings only for a passing afternoon',
      'Real ache comes watching a decades-old bond drift quietly apart',
    ],
  },
  {
    title: 'बचपन वाली नींद की तलाश',
    titleEnglish: 'Longing for Deep Childhood Sleep',
    linesHindi: [
      'छत के पंखे के नीचे बिना किसी कल की चिंता के सो जाना यार',
      'आज जीवन की सबसे बड़ी दौलत से भी महँगा सपना बन गया है',
    ],
    linesHinglish: [
      'Chhat ke pankhe ke neeche bina kisi kal ki chinta ke so jaana yaar',
      'Aaj jeevan ki sabse badi daulat se bhi mehnga sapna ban gaya hai',
    ],
    linesEnglish: [
      'Falling fast asleep beneath ceiling fans with zero dread for Monday',
      'Feels pricier today than any luxury suite in the entire country',
    ],
  },
  {
    title: 'खामोश आँसुओं से लिखी कहानी',
    titleEnglish: 'Chapters Written With Wet Lashes',
    linesHindi: [
      'मेरी कामयाबी के चर्चे तो आसानी से कर लेते हैं सब लोग बाहर',
      'पर उस सफ़र के भीगे हुए पन्ने सिर्फ़ मेरी माँ ने देखे हैं',
    ],
    linesHinglish: [
      'Meri kaamyaabi ke charche to aasaani se kar lete hain sab log baahar',
      'Par us safar ke bheege hue panne sirf meri maa ne dekhe hain',
    ],
    linesEnglish: [
      'Everyone outdoors applauds easily when finished milestones shine bright',
      'Only my mother ever saw the tear-stained pages that built that road',
    ],
  },
  {
    title: 'चुप रहकर मन संभालना',
    titleEnglish: 'Steadying Heavy Hearts Quietly',
    linesHindi: [
      'हर बात किसी तीसरे को सुनाकर तमाशा बनाने से क्या हासिल होगा',
      'अपनी उलझन खुद सुलझाना ही समय के साथ इंसान सीख जाता है',
    ],
    linesHinglish: [
      'Har baat kisi teesre ko sunaakar tamaasha banaane se kya haasil hoga',
      'Apni uljhan khud suljhaana hi samay ke saath insaan seekh jaata hai',
    ],
    linesEnglish: [
      'Airing every private bruise before noisy spectators heals nothing',
      'With time we quietly learn how to untangle knots peacefully inside',
    ],
  },
  {
    title: 'पुराने खतों की महक',
    titleEnglish: 'Tender Scent of Folded Letters',
    linesHindi: [
      'पुराने बक्से से निकले पीले पड़ चुके कागज़ आज भी बोल उठते हैं',
      'कि कभी हम भी बिना किसी स्क्रीन के दिल से जुड़ा करते थे',
    ],
    linesHinglish: [
      'Puraane bakse se nikle peele pad chuke kaagaz aaj bhi bol uthte hain',
      'Ki kabhi hum bhi bina kisi screen ke dil se juda karte the',
    ],
    linesEnglish: [
      'Yellowed ink letters pulled gently out of old desk drawers still whisper',
      'Remembering how deeply hearts connected once without glowing screens',
    ],
  },
  {
    title: 'मेरी जान का दर्द समझना',
    titleEnglish: 'Understanding Unspoken Ache',
    linesHindi: [
      'कभी किसी की आँखें लाल दिखें और वह बोले बस नींद पूरी नहीं हुई',
      'तो समझ लेना कि उसे रात भर किसी बात ने बहुत सताया है',
    ],
    linesHinglish: [
      'Kabhi kisi ki aankhein laal dikhein aur woh bole bas neend poori nahin hui',
      'To samajh lena ki use raat bhar kisi baat ne bahut sataaya hai',
    ],
    linesEnglish: [
      'When somebody rubs tired red eyes claiming they merely slept short',
      'Often a heavy heart kept them awake wrestling quiet storms till four',
    ],
  },
  {
    title: 'रिश्ते निभाने की भीगी कीमत',
    titleEnglish: 'Quiet Cost of Staying Gentle',
    linesHindi: [
      'जो सबको जोड़कर रखने की कोशिश में लगा रहता है जीवन भर',
      'अक्सर वही इंसान अंदर से सबसे ज़्यादा टूटा हुआ मिलता है',
    ],
    linesHinglish: [
      'Jo sabko jodkar rakhne ki koshish mein laga rehta hai jeevan bhar',
      'Aksar wahi insaan andar se sabse zyada toota hua milta hai',
    ],
    linesEnglish: [
      'The peaceful soul endlessly gluing fractured relationships back whole',
      'Is frequently the very person carrying the quietest cracks inside',
    ],
  },
  {
    title: 'नए साल के नाम पुरानी याद',
    titleEnglish: 'Old Memories Entering New Years',
    linesHindi: [
      'साल तो हर बार नया आकर पुराना कैलेंडर उतार देता है दीवार से',
      'पर दिल की दीवार पर कुछ तारीख़ें हमेशा-हमेशा को ठहर जाती हैं',
    ],
    linesHinglish: [
      'Saal to har baar naya aakar puraana calendar utaar deta hai deewaar se',
      'Par dil ki deewaar par kuch taareekhein hamesha-hamesha ko thehar jaati hain',
    ],
    linesEnglish: [
      'Every January smoothly pulls last year’s paper grid off the wall',
      'Yet certain quiet dates stay nailed permanently upon the heart',
    ],
  },
  {
    title: 'आँसुओं को छिपाने की कला',
    titleEnglish: 'Graceful Art of Hiding Mist',
    linesHindi: [
      'तेज़ बारिश में पैदल चलने का असली फ़ायदा तो यही होता है यार',
      'चेहरे पर बहते आँसुओं को कोई अलग से पहचान नहीं पाता',
    ],
    linesHinglish: [
      'Tez baarish mein paidal chalne ka asli faayda to yahi hota hai yaar',
      'Chehre par behte aansuon ko koi alag se pehchaan nahin paata',
    ],
    linesEnglish: [
      'The quiet mercy of walking home slowly beneath pouring summer rain',
      'Is knowing nobody passing by can tell raindrops apart from tears',
    ],
  },
  {
    title: 'पिता की चुपचाप मुस्कान',
    titleEnglish: 'Quiet Pride Behind Dad’s Smile',
    linesHindi: [
      'ज़्यादा बोलकर प्यार जताने की आदत पापा को कभी रही ही नहीं',
      'पर मेरी जीत पर उनकी गीली आँखों ने सब कुछ कह दिया आज',
    ],
    linesHinglish: [
      'Zyada bolkar pyar jataane ki aadat papa ko kabhi rahi hi nahin',
      'Par meri jeet par unki geeli aankhon ne sab kuch keh diya aaj',
    ],
    linesEnglish: [
      'Dad never mastered giving grand emotional speeches out loud',
      'Yet glistening pride in his eyes when I succeeded said every word',
    ],
  },
  {
    title: 'बदलती दुनिया में अपनापन',
    titleEnglish: 'Searching Warmth in Busy Worlds',
    linesHindi: [
      'मकान तो बहुत बड़े और ऊँचे बन गए हैं अब हर गली में यारो',
      'पर पहले जैसा एक-दूसरे के घर बेरोकटोक जाने का सुकून खो गया',
    ],
    linesHinglish: [
      'Makaan to bahut bade aur oonche ban gaye hain ab har gali mein yaaro',
      'Par pehle jaisa ek-doosre ke ghar beroktok jaane ka sukoon kho gaya',
    ],
    linesEnglish: [
      'Houses grew taller and gates turned sleek across every avenue',
      'Yet knocking casually next door just for afternoon tea grew rare',
    ],
  },
  {
    title: 'अधूरे प्यार की भीगी याद',
    titleEnglish: 'Tender Glow of Unfinished Love',
    linesHindi: [
      'कुछ अधूरे रिश्ते भी जिंदगी में इसलिए खूबसूरत बने रहते हैं',
      'क्योंकि वे कभी रोज़मर्रा के झगड़ों से मैले नहीं हो पाए',
    ],
    linesHinglish: [
      'Kuch adhure rishte bhi zindagi mein isliye khoobsurat bane rehte hain',
      'Kyunki we kabhi rozmarra ke jhagdon se maile nahin ho paaye',
    ],
    linesEnglish: [
      'Certain unfinished chapters remain oddly sacred inside memory',
      'Untouched by harsh daily arguments, glowing forever pure and bright',
    ],
  },
  {
    title: 'बाज़ार से लौटकर ढूँढी आवाज़',
    titleEnglish: 'Quiet Alley Inside Memory',
    linesHindi: [
      'भीड़ भाड़ वाले बाज़ार से गुज़रकर जब मन घर लौट आता है',
      'तब भीतर की सूनी गली में किसी अपने की आवाज़ ढूँढता है',
    ],
    linesHinglish: [
      'Bheed bhaad waale baazaar se guzarkar jab mann ghar laut aata hai',
      'Tab bheetar ki sooni gali mein kisi apne ki aawaz dhoondhta hai',
    ],
    linesEnglish: [
      'Returning indoors from loud crowded markets full of busy voices',
      'The quiet hallway inside still listens for one familiar beloved sound',
    ],
  },
  {
    title: 'चुपचाप आगे बढ़ने का सबक़',
    titleEnglish: 'Lesson in Moving Gently Forward',
    linesHindi: [
      'पीछे मुड़कर देखने से सिर्फ़ गला ही भर आता है बार-बार यार',
      'अब आगे के सफ़र पर नज़र रखकर मुस्कुराने का वक़्त आ गया है',
    ],
    linesHinglish: [
      'Peechhe mudkar dekhne se sirf gala hi bhar aata hai baar-baar yaar',
      'Ab aage ke safar par nazar rakhkar muskuraane ka waqt aa gaya hai',
    ],
    linesEnglish: [
      'Staring endlessly into rearview mirrors only tightens the throat',
      'It is time to lift steady eyes toward sunlit curves waiting ahead',
    ],
  },
  {
    title: 'टूटे हुए मन की मरहम',
    titleEnglish: 'Balm for a Weary Spirit',
    linesHindi: [
      'जब अंदर सब कुछ बिखरा लग रहा हो तो ज़ोर मत लगाना ज़्यादा',
      'बस एक कप गरम पानी पियो और दो घंटे सो जाओ सुकून से',
    ],
    linesHinglish: [
      'Jab andar sab kuch bikhra lag raha ho to zor mat lagaana zyada',
      'Bas ek cup garam paani piyo aur do ghante so jaao sukoon se',
    ],
    linesEnglish: [
      'When everything inside feels tangled and stretched past breaking',
      'Do not fight the storm—sip warm tea and rest calmly for two hours',
    ],
  },
  {
    title: 'माँ की आवाज़ का जादू',
    titleEnglish: 'Healing Magic Inside Mom’s Call',
    linesHindi: [
      'कितनी भी बड़ी उदासी दिल पर भारी क्यों न पड़ रही हो शाम को',
      'मम्मी से पाँच मिनट बात होते ही आधा दर्द गायब हो जाता है',
    ],
    linesHinglish: [
      'Kitni bhi badi udaasi dil par bhaari kyun na pad rahi ho shaam ko',
      'Mummy se paanch minute baat hote hi aadha dard gaayab ho jaata hai',
    ],
    linesEnglish: [
      'However heavy a gray mood presses over your chest by dusk',
      'Five simple minutes hearing Mom on the phone washes half the ache away',
    ],
  },
  {
    title: 'खामोश रहकर जताया प्यार',
    titleEnglish: 'Affection Shown Through Quiet Acts',
    linesHindi: [
      'जिन्होंने कभी आई लव यू नहीं कहा मुँह से पूरी उम्र भर',
      'उन्होंने थाली में गरम रोटी परोसकर अपना सारा प्यार जता दिया',
    ],
    linesHinglish: [
      'Jinhonne kabhi I love you nahin kaha munh se poori umr bhar',
      'Unhonne thaali mein garam roti paroskar apna saara pyar jata diya',
    ],
    linesEnglish: [
      'Those elders who rarely said big affectionate phrases out loud',
      'Showed lifelong devotion serving the warmest meal straight to your plate',
    ],
  },
  {
    title: 'भीगे हुए दिन का सुकून',
    titleEnglish: 'Calm Found After Emotional Storm',
    linesHindi: [
      'रोकर हल्का हो जाने के बाद जब आँखें साफ़ दिखती हैं दुनिया को',
      'तो समझ आता है कि दर्द भी हमें थोड़ा इंसान बनाकर जाता है',
    ],
    linesHinglish: [
      'Rokar halka ho jaane ke baad jab aankhein saaf dikhti hain duniya ko',
      'To samajh aata hai ki dard bhi humein thoda insaan banaakar jaata hai',
    ],
    linesEnglish: [
      'Looking out with clear rinsed eyes after crying out bottled sorrow',
      'Shows gently how even heartache deepens our grace as humans',
    ],
  },
  {
    title: 'दिल की गहराइयों से विदा',
    titleEnglish: 'Releasing Heavy Days With Grace',
    linesHindi: [
      'जो बीत गया उसे धन्यवाद कहकर दिल से विदा कर देना सीखो',
      'क्योंकि हर कठिन रात के बाद ही सबसे उजला सवेरा आता है',
    ],
    linesHinglish: [
      'Jo beet gaya use dhanyavaad kehkar dil se vida kar dena seekho',
      'Kyunki har kathin raat ke baad hi sabse ujala savera aata hai',
    ],
    linesEnglish: [
      'Thank yesterday’s heavy chapters gently before waving them goodbye',
      'Because the brightest mornings always follow the longest dark nights',
    ],
  },

  // Block 8 (141-160)
  {
    title: 'बड़े शहर की अजनबी भीड़',
    titleEnglish: 'Lonely Miles in Fast Crowds',
    linesHindi: [
      'लाखों लोगों के बीच चलते हुए भी कभी कंधा अकेला लगता है',
      'तब पुराने शहर की गलियाँ और अपनों के चेहरे बहुत याद आते हैं',
    ],
    linesHinglish: [
      'Laakhon logon ke beech chalte hue bhi kabhi kandha akela lagta hai',
      'Tab puraane shehar ki galiyaan aur apnon ke chehre bahut yaad aate hain',
    ],
    linesEnglish: [
      'Brushing elbows past thousands rushing downtown can still feel lonely',
      'Pulling nostalgic aches straight back toward familiar lanes at home',
    ],
  },
  {
    title: 'दिल की बात जुबान पर अटकना',
    titleEnglish: 'Feelings Catching at the Throat',
    linesHindi: [
      'कई बार विदा लेते वक़्त बस खुश रहना कह कर मुड़ जाना पड़ता है',
      'क्योंकि एक शब्द और बोलते ही आँखों का बाँध टूट जाता',
    ],
    linesHinglish: [
      'Kai baar vida lete waqt bas khush rehna keh kar mud jaana padta hai',
      'Kyunki ek shabd aur bolte hi aankhon ka baandh toot jaata',
    ],
    linesEnglish: [
      'At tough goodbyes sometimes we simply say take care and turn away fast',
      'Knowing one more spoken sentence would break the floodgates completely',
    ],
  },
  {
    title: 'चुपके से छोड़ा गया घर',
    titleEnglish: 'Leaving Home Before Dawn Breaks',
    linesHindi: [
      'सुबह चार बजे सोते हुए माँ-पापा के पैर छूकर निकल पड़ना सफ़र पर',
      'हर कमाने वाले बच्चे के जीवन का सबसे भावुक पल होता है',
    ],
    linesHinglish: [
      'Subah chaar baje sote hue maa-papa ke pair chhookar nikal padna safar par',
      'Har kamaane waale bachche ke jeevan ka sabse bhaavuk pal hota hai',
    ],
    linesEnglish: [
      'Touching sleeping parents’ feet quietly at four a.m. before catching trains',
      'Stands as the most tender, emotional step in every earner’s journey',
    ],
  },
  {
    title: 'पुराने दोस्त की आवाज़',
    titleEnglish: 'Mist Hearing an Old Friend',
    linesHindi: [
      'जब बहुत थके हुए दिन में अचानक पुराने दोस्त का फ़ोन आ जाए',
      'तो पहले पाँच सेकंड तो आवाज़ सुनकर गला भर ही आता है',
    ],
    linesHinglish: [
      'Jab bahut thake hue din mein achaanak puraane dost ka phone aa jaaye',
      'To pehle paanch second to aawaz sunkar gala bhar hi aata hai',
    ],
    linesEnglish: [
      'When an old close friend unexpectedly rings at the end of a rough week',
      'The very first five seconds hearing their hello fills the throat warmly',
    ],
  },
  {
    title: 'मेहनत से चमकता मस्तक',
    titleEnglish: 'Quiet Pride Through Hard Nights',
    linesHindi: [
      'रात को देर से लौटकर जब पापा की दवाइयों की शीशी देखता हूँ मेज़ पर',
      'तो सारी थकान भूलकर अगले दिन दोगुनी मेहनत का जोश आ जाता है',
    ],
    linesHinglish: [
      'Raat ko der se lautkar jab papa ki dawaaiyon ki sheeshi dekhta hoon mez par',
      'To saari thakaan bhoolkar agle din doguni mehnat ka josh aa jaata hai',
    ],
    linesEnglish: [
      'Coming home exhausted and spotting Dad’s medicine bottles on the counter',
      'Erases every ache and lights double determination for sunrise tomorrow',
    ],
  },
  {
    title: 'दिल की गहराई में छुपा बचपन',
    titleEnglish: 'Tucked-Away Innocence Within',
    linesHindi: [
      'बड़ी-बड़ी ज़िम्मेदारियों के नीचे भी एक छोटा बच्चा बैठा रहता है अंदर',
      'जो बस चाहता है कोई प्यार से उसके सिर पर हाथ फेर दे एक बार',
    ],
    linesHinglish: [
      'Badi-badi zimmedariyon ke neeche bhi ek chhota bachcha baitha rehta hai andar',
      'Jo bas chahta hai koi pyar se uske sir par haath pher de ek baar',
    ],
    linesEnglish: [
      'Beneath tall piles of adult responsibilities still sits a tired child inside',
      'Quietly longing for one loving hand to smooth their hair gently once',
    ],
  },
  {
    title: 'सुकून की तलाश में मुसाफ़िर',
    titleEnglish: 'Traveler Seeking Quiet Rest',
    linesHindi: [
      'हर मुसाफ़िर बस पैसा कमाने के लिए ही घर से दूर नहीं जाता यारो',
      'कुछ लोग अपने घर में खुशियाँ लाने के लिए अकेलेपन को चुनते हैं',
    ],
    linesHinglish: [
      'Har musaafir bas paisa kamaane ke liye hi ghar se door nahin jaata yaaro',
      'Kuch log apne ghar mein khushiyaan laane ke liye akelepan ko chunte hain',
    ],
    linesEnglish: [
      'Not every traveler leaves home chasing selfish glitter or personal luxury',
      'Many quietly trade their own company for solitude so home stays bright',
    ],
  },
  {
    title: 'भीगे हुए पलों का सम्मान',
    titleEnglish: 'Honoring Tender Emotional Days',
    linesHindi: [
      'अपने रो लेने पर कभी शर्मिंदा मत होना मेरे प्यारे दोस्त',
      'आँसू बताते हैं कि अभी तुम्हारा दिल ज़िंदा और कोमल बना हुआ है',
    ],
    linesHinglish: [
      'Apne ro lene par kabhi sharminda mat hona mere pyare dost',
      'Aansoo bataate hain ki abhi tumhaara dil zinda aur komal bana hua hai',
    ],
    linesEnglish: [
      'Never apologize or feel ashamed over misty eyes when life hits close',
      'Tears prove your heart stayed deeply alive, warm, and genuinely human',
    ],
  },
  {
    title: 'अनसुनी दास्ताँ का बोझ',
    titleEnglish: 'Unheard Stories Inside Calm Eyes',
    linesHindi: [
      'बाहर से सबकी हिम्मत बढ़ाने वाले इंसान के पास भी कई रातें ऐसी होती हैं',
      'जब वह खुद ख़ामोश दीवार से पूछ लेता है, कब सब आसान होगा',
    ],
    linesHinglish: [
      'Baahar se sabki himmat badhaane waale insaan ke paas bhi kai raatein aisi hoti hain',
      'Jab woh khud khaamosh deewaar se poochh leta hai, kab sab aasaan hoga',
    ],
    linesEnglish: [
      'Even the strongest cheerleader lifting everybody else up during daylight',
      'Has quiet midnight hours asking empty ceilings when roads grow gentler',
    ],
  },
  {
    title: 'माँ-पापा का एक छोटा सा फोन',
    titleEnglish: 'Simple Check-In Call From Parents',
    linesHindi: [
      'ऑफिस के बीच में जब पापा पूछते हैं, खाना खा लिया क्या समय पर',
      'तो एक पल के लिए काम की सारी टेंशन बहुत छोटी लगने लगती है',
    ],
    linesHinglish: [
      'Office ke beech mein jab papa poochhte hain, khaana kha liya kya samay par',
      'To ek pal ke liye kaam ki saari tension bahut chhoti lagne lagti hai',
    ],
    linesEnglish: [
      'Midway through hectic workdays when Dad calls asking if you ate lunch yet',
      'Every stressful spreadsheet suddenly feels wonderfully small and calm',
    ],
  },
  {
    title: 'चेहरे पर टिकी झूठी हँसी',
    titleEnglish: 'Polite Smile Over Tired Heart',
    linesHindi: [
      'हर किसी को अपना दर्द समझा पाना मुमकिन नहीं होता इस सफ़र में',
      'इसीलिए इंसान ठीक हूँ कहकर मुस्कुरा देना सीख लेता है',
    ],
    linesHinglish: [
      'Har kisi ko apna dard samjha paana mumkin nahin hota is safar mein',
      'Isiliye insaan theek hoon kehkar muskura dena seekh leta hai',
    ],
    linesEnglish: [
      'Explaining deep aches to passing acquaintances rarely brings relief',
      'So we learn the gentle art of saying I am fine with a steady smile',
    ],
  },
  {
    title: 'अधूरे ख्वाब की नमी',
    titleEnglish: 'Gentle Mist Behind Brave Eyes',
    linesHindi: [
      'जो सपना घर की मजबूरी के कारण आँखों से बह गया था कभी',
      'आज अपने छोटे भाई की सफलता में उसे पूरा होता देख मुस्कुरा दिया',
    ],
    linesHinglish: [
      'Jo sapna ghar ki majboori ke kaaran aankhon se beh gaya tha kabhi',
      'Aaj apne chhote bhai ki safalta mein use poora hota dekh muskura diya',
    ],
    linesEnglish: [
      'The ambition I once traded gently away to cover family bills',
      'Smiled back proudly today watching my younger sibling cross that stage',
    ],
  },
  {
    title: 'माँ-पापा के आँगन की खुशबू',
    titleEnglish: 'Prayer Rising Straight From Emotion',
    linesHindi: [
      'मेरे बाद भी इस घर में हँसी और खुशबू हमेशा बनी रहे ईश्वर',
      'माँ-पापा के लिए हर बच्चा चुपचाप यही सबसे बड़ी दुआ माँगता है',
    ],
    linesHinglish: [
      'Mere baad bhi is ghar mein hansi aur khushboo hamesha bani rahe eeshwar',
      'Maa-papa ke liye har bachcha chupchaap yahi sabse badi dua maangta hai',
    ],
    linesEnglish: [
      'May warm laughter and sweet peace fill our parents’ courtyard forever',
      'Every child whispers that single prayer quietly from deep within',
    ],
  },
  {
    title: 'टूटे हुए मन का सवेरा',
    titleEnglish: 'Morning Light After Tearful Night',
    linesHindi: [
      'जितनी बार भी रात के सन्नाटे में मन बिखरा है आज तक यारो',
      'सुबह की चाय और नई धूप ने हमेशा बाँह पकड़कर उठाया है',
    ],
    linesHinglish: [
      'Jitni baar bhi raat ke sannaate mein mann bikhra hai aaj tak yaaro',
      'Subah ki chai aur nayi dhoop ne hamesha baanh pakadkar uthaaya hai',
    ],
    linesEnglish: [
      'Every single night the heart ever unraveled quietly under moonlight',
      'Fresh morning tea and gentle sunbeams still pulled me back up strong',
    ],
  },
  {
    title: 'यादों के पन्नों पर हल्की बूँद',
    titleEnglish: 'Soft Drop on Nostalgia Pages',
    linesHindi: [
      'पुराना घर, पुराने यार और स्कूल के बाहर की वो पीपल की छांव',
      'आज भी सोचते ही चेहरे पर मुस्कान और आँखों में नमी आ जाती है',
    ],
    linesHinglish: [
      'Puraana ghar, puraane yaar aur school ke baahar ki woh peepal ki chhaanv',
      'Aaj bhi sochte hi chehre par muskaan aur aankhon mein nami aa jaati hai',
    ],
    linesEnglish: [
      'Our old neighborhood, childhood pals, and the broad banyan shade outside school',
      'Still spark warm smiles alongside misty eyes every single time I remember',
    ],
  },
  {
    title: 'सच्चे साथ की कीमत',
    titleEnglish: 'True Value of Loyal Presence',
    linesHindi: [
      'जब आपके आँसू देखकर कोई बिना सवाल किए रुमाल बढ़ा दे आगे',
      'तो समझ लेना कि इस पूरी दुनिया में आपने एक हीरा कमा लिया',
    ],
    linesHinglish: [
      'Jab aapke aansoo dekhkar koi bina sawaal kiye rumaal badha de aage',
      'To samajh lena ki is poori duniya mein aapne ek heera kama liya',
    ],
    linesEnglish: [
      'When someone sees misty cheeks and quietly hands a tissue without probing',
      'Know without doubt you found a genuine diamond in this world',
    ],
  },
  {
    title: 'दिल की गहराई में सुकून',
    titleEnglish: 'Quiet Healing Deep Inside',
    linesHindi: [
      'वक़्त हर चीज़ को पहले जैसा भले ही न कर पाए जीवन में कभी',
      'पर दर्द को सहने की इतनी ताक़त ज़रूर दे देता है धीरे-धीरे',
    ],
    linesHinglish: [
      'Waqt har cheez ko pehle jaisa bhale hi na kar paaye jeevan mein kabhi',
      'Par dard ko sehne ki itni taaqat zaroor de deta hai dheere-dheere',
    ],
    linesEnglish: [
      'Time may never rewind everything neatly back to how it stood before',
      'Yet gently pours steady quiet grace into our lungs to breathe again',
    ],
  },
  {
    title: 'आँसुओं के पार की चमक',
    titleEnglish: 'Brightness Waiting Beyond Tears',
    linesHindi: [
      'जो बादल आज बरसकर आँखें नम कर रहे हैं तुम्हारी यार',
      'कल उन्हीं की वजह से ज़िंदगी की फसल हरी-भरी होने वाली है',
    ],
    linesHinglish: [
      'Jo baadal aaj baraskar aankhein nam kar rahe hain tumhaari yaar',
      'Kal unhin ki wajah se zindagi ki fasal hari-bhari hone waali hai',
    ],
    linesEnglish: [
      'The heavy rain clouds dimming your afternoon vision right now',
      'Are watering bright green harvests waiting smoothly right ahead',
    ],
  },
  {
    title: 'साँसों में बसा अपनापन',
    titleEnglish: 'Warmth Carried Inside Every Breath',
    linesHindi: [
      'चाहे कितनी भी ऊँचाई पर घर बना लें हम दुनिया के किसी कोने में',
      'दिल की धड़कन हमेशा अपनी जड़ों और अपनों के पास ही रहती है',
    ],
    linesHinglish: [
      'Chaahe kitni bhi oonchaai par ghar bana lein hum duniya ke kisi kone mein',
      'Dil ki dhadkan hamesha apni jadon aur apnon ke paas hi rehti hai',
    ],
    linesEnglish: [
      'No matter how high we build gleaming apartments anywhere across maps',
      'Our heartbeats stay rooted forever beside the loving folks who raised us',
    ],
  },
  {
    title: 'मेरी जान को दिलासा',
    titleEnglish: 'Gentle Comfort for Tired Hearts',
    linesHindi: [
      'अगर आज बहुत अकेला और थका हुआ लग रहा है मन भीतर से',
      'तो बस थोड़ी देर रुक जाना, तुमने अब तक बहुत हिम्मत दिखाई है',
    ],
    linesHinglish: [
      'Agar aaj bahut akela aur thaka hua lag raha hai mann bheetar se',
      'To bas thodi der ruk jaana, tumne ab tak bahut himmat dikhaayi hai',
    ],
    linesEnglish: [
      'If tonight feels unusually lonely and worn thin inside your chest',
      'Pause gently and remember how remarkably brave you have been so far',
    ],
  },

  // Block 9 (161-170)
  {
    title: 'घर लौट आने की खुशी',
    titleEnglish: 'Emotional Joy Coming Home',
    linesHindi: [
      'साल भर परदेश की ठोकरें खाने के बाद जब ट्रेन गाँव के पास आती है',
      'तो खिड़की से दिखते खेत ही आँखों में खुशी के आँसू ले आते हैं',
    ],
    linesHinglish: [
      'Saal bhar pardesh ki thokrein khaane ke baad jab train gaanv ke paas aati hai',
      'To khidki se dikhte khet hi aankhon mein khushi ke aansoo le aate hain',
    ],
    linesEnglish: [
      'After a long year hustling far away, when the train nears home fields',
      'Even green pastures glimpsed past window glass bring joyful mist to eyes',
    ],
  },
  {
    title: 'खामोश रहकर माफ़ करना',
    titleEnglish: 'Quiet Peace After Forgiving',
    linesHindi: [
      'बदला लेने की आग में इंसान सबसे पहले अपना ही सुकून जलाता है',
      'माफ़ करके आगे बढ़ जाने में जो शांति है वह अनमोल होती है',
    ],
    linesHinglish: [
      'Badla lene ki aag mein insaan sabse pehle apna hi sukoon jalaata hai',
      'Maaf karke aage badh jaane mein jo shaanti hai woh anmol hoti hai',
    ],
    linesEnglish: [
      'Nursing bitter revenge burns your own peace long before reaching others',
      'Releasing hurt quietly and stepping ahead feels pricelessly light',
    ],
  },
  {
    title: 'दिल की गहराई का बंधन',
    titleEnglish: 'Unbroken Tie of Deep Emotion',
    linesHindi: [
      'कुछ लोग हमारे साथ हर रोज़ नहीं चलते रास्ते पर परछाईं बनकर',
      'पर जब याद आते हैं तो पूरा मन भावनाओं से भर उठता है',
    ],
    linesHinglish: [
      'Kuch log hamaare saath har roz nahin chalte raaste par parchhaayin bankar',
      'Par jab yaad aate hain to poora mann bhaavnaon se bhar uthta hai',
    ],
    linesEnglish: [
      'Certain cherished souls do not walk beside us down everyday errands',
      'Yet the instant their memory rises, our whole chest brims with warmth',
    ],
  },
  {
    title: 'टूटे सपने पर नई शुरुआत',
    titleEnglish: 'Rising Softly From Ruined Plans',
    linesHindi: [
      'आज आँखों से आँसू पोछकर फिर से जूते के फीते बाँध लिए मैंने',
      'क्योंकि टूटकर रुक जाना मेरी मिट्टी के संस्कारों में नहीं है',
    ],
    linesHinglish: [
      'Aaj aankhon se aansoo pochhkar phir se joote ke feete baandh liye maine',
      'Kyunki tootkar ruk jaana meri mitti ke sanskaaron mein nahin hai',
    ],
    linesEnglish: [
      'Wiping away honest tears tonight, I laced my walking shoes right back up',
      'Because quitting when bruised was never how our roots raised us',
    ],
  },
  {
    title: 'बचपन की पुरानी तस्वीर',
    titleEnglish: 'Tears Over One Faded Snapshot',
    linesHindi: [
      'दादाजी की गोद में बैठकर खींची गई वह एक छोटी सी तस्वीर',
      'आज भी कमरे की दीवार पर लगकर पूरे परिवार को जोड़े रखती है',
    ],
    linesHinglish: [
      'Daadaaji ki god mein baithkar kheenchi gayi woh ek chhoti si tasveer',
      'Aaj bhi kamre ki deewaar par lagkar poore parivaar ko jode rakhti hai',
    ],
    linesEnglish: [
      'That small photograph taken sitting beaming in Grandpa’s warm lap',
      'Still hangs softly on the wall holding an entire family together',
    ],
  },
  {
    title: 'अधूरी शाम, पूरा एहसास',
    titleEnglish: 'Quiet Evening Full of Feeling',
    linesHindi: [
      'आज कोई बड़ा हादसा नहीं हुआ, न किसी ने कुछ बुरा कहा मुझसे',
      'बस शाम ढलते ही बिना वजह कुछ पुराने पल याद आ गए दिल को',
    ],
    linesHinglish: [
      'Aaj koi bada haadsa nahin hua, na kisi ne kuch bura kaha mujhse',
      'Bas shaam dhalte hi bina wajah kuch puraane pal yaad aa gaye dil ko',
    ],
    linesEnglish: [
      'Nothing tragic happened today and nobody spoke an unkind word',
      'Simply sunset rolled in gently bringing old wistful afternoons back near',
    ],
  },
  {
    title: 'मेरी जान की मुस्कान के लिए',
    titleEnglish: 'Smiling So Loved Ones Stay Calm',
    linesHindi: [
      'दिल चाहे कितना भी थक गया हो काम और चिंताओं के बोझ से',
      'घर का दरवाज़ा खोलते ही चेहरे पर ताज़ी मुस्कान ले आते हैं हम',
    ],
    linesHinglish: [
      'Dil chaahe kitna bhi thak gaya ho kaam aur chintaon ke bojh se',
      'Ghar ka darwaaza kholte hi chehre par taazi muskaan le aate hain hum',
    ],
    linesEnglish: [
      'Regardless how heavily deadlines press down on tired shoulders all day',
      'Turning the front doorknob brings an instant warm smile home to them',
    ],
  },
  {
    title: 'आशा भरी विदाई नहीं, इंतज़ार',
    titleEnglish: 'Parting Wrapped in Quiet Hope',
    linesHindi: [
      'हर आँसू हमेशा अलविदा कहने के लिए ही नहीं बहता आँखों से',
      'कुछ आँसू दोबारा मिलने की उम्मीद के साथ भी गिरते हैं',
    ],
    linesHinglish: [
      'Har aansoo hamesha alvida kehne ke liye hi nahin behta aankhon se',
      'Kuch aansoo dobaara milne ki ummeed ke saath bhi girte hain',
    ],
    linesEnglish: [
      'Not every tear rolls softly down just to signal a sad goodbye',
      'Many glisten warmly carrying steady hope until we meet again',
    ],
  },
  {
    title: 'सुकून की एक शाम अपनों संग',
    titleEnglish: 'One Peaceful Night With Loved Ones',
    linesHindi: [
      'दुनिया से जीतकर लाने के बाद भी असली खज़ाना वही शाम होती है',
      'जब पूरा परिवार बिना घड़ी देखे एक साथ हँसता-रोता बैठा हो',
    ],
    linesHinglish: [
      'Duniya se jeetkar laane ke baad bhi asli khazaana wahi shaam hoti hai',
      'Jab poora parivaar bina ghadi dekhe ek saath hansta-rota baitha ho',
    ],
    linesEnglish: [
      'Even after winning trophies outdoors, true gold remains one unhurried night',
      'Where family sits close laughing, tearing up, and ignoring every clock',
    ],
  },
  {
    title: 'भावुक मन का अनमोल सच',
    titleEnglish: 'Precious Truth of Tender Hearts',
    linesHindi: [
      'दिल का भावुक होना कमज़ोरी नहीं, सबसे बड़ी इंसानियत की पहचान है',
      'क्योंकि जो आँसू समझता है, वही किसी का सच्चा सहारा बन सकता है',
    ],
    linesHinglish: [
      'Dil ka bhaavuk hona kamzori nahin, sabse badi insaaniyat ki pehchaan hai',
      'Kyunki jo aansoo samajhta hai, wahi kisi ka sachha sahaara ban sakta hai',
    ],
    linesEnglish: [
      'Carrying a deeply feeling heart is never frailty—it is pure humanity',
      'Only someone who honors tears can become another’s truest shelter',
    ],
  },
];

export const UNIQUE_EMOTIONAL_170 = buildUniqueShayaris(
  'emotional',
  'Emotional Shayari (इमोशनल शायरी)',
  '🥹',
  31,
  EMOTIONAL_ENTRIES
);
