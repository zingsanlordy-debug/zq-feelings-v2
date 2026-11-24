import { buildUniqueShayaris, UniqueShayariEntry } from './helper';

const KHUSHI_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'चाय की प्याली में सुकून',
    titleEnglish: 'Peace in a Warm Cup of Tea',
    linesHindi: [
      'सुबह की ताज़ी हवा और हाथ में गरम चाय का प्याला हो',
      'तो समझो आज का दिन पहले से ही बेहद निराला हो',
    ],
    linesHinglish: [
      'Subah ki taazi hawa aur haath mein garam chai ka pyaala ho',
      'To samjho aaj ka din pehle se hi behad niraala ho',
    ],
    linesEnglish: [
      'Fresh morning air and a steaming cup of tea in hand',
      'Are all it takes to make today feel wonderfully special',
    ],
  },
  {
    title: 'बिना वजह की मुस्कान',
    titleEnglish: 'Smiling Without a Reason',
    linesHindi: [
      'खुश रहने के लिए किसी बड़े त्योहार की ज़रूरत नहीं',
      'दिल हल्का हो तो आम सा दिन भी ईद-दिवाली लगता है',
    ],
    linesHinglish: [
      'Khush rehne ke liye kisi bade tyohaar ki zaroorat nahin',
      'Dil halka ho to aam sa din bhi Eid-Diwali lagta hai',
    ],
    linesEnglish: [
      'Happiness never waits around for a grand holiday',
      'When your heart feels light, even an ordinary Tuesday glows bright',
    ],
  },
  {
    title: 'परिवार की खिलखिलाहट',
    titleEnglish: 'Laughter Around the Table',
    linesHindi: [
      'रात के खाने पर जब पूरा घर एक साथ हँसता है',
      'उस वक़्त दुनिया की हर दौलत फीकी पड़ जाती है',
    ],
    linesHinglish: [
      'Raat ke khaane par jab poora ghar ek saath hansta hai',
      'Us waqt duniya ki har daulat feeki pad jaati hai',
    ],
    linesEnglish: [
      'When the entire family shares laughter around the dinner table',
      'Every treasure in the world pales beside that warmth',
    ],
  },
  {
    title: 'छोटी जीत का आनंद',
    titleEnglish: 'Joy of Everyday Wins',
    linesHindi: [
      'बड़ी ख़ुशियों की राह देखते-देखते शाम न ढल जाए',
      'आज की छोटी सी मुस्कुराहट को अभी जी लेना चाहिए',
    ],
    linesHinglish: [
      'Badi khushiyon ki raah dekhte-dekhte shaam na dhal jaaye',
      'Aaj ki chhoti si muskurahat ko abhi jee lena chahiye',
    ],
    linesEnglish: [
      'Do not let evening fall waiting solely for huge milestones',
      'Savor every small, bright smile right here inside today',
    ],
  },
  {
    title: 'सूरज की गुनगुनी धूप',
    titleEnglish: 'Gentle Winter Sunshine',
    linesHindi: [
      'सर्दियों की छत पर गुनगुनी धूप में बैठने का मज़ा',
      'अमीरी की किसी भी महँगी चीज़ से कम नहीं होता',
    ],
    linesHinglish: [
      'Sardiyon ki chhat par gunguni dhoop mein baithne ka maza',
      'Ameeri ki kisi bhi mehngi cheez se kam nahin hota',
    ],
    linesEnglish: [
      'Basking in gentle winter sunshine up on the open terrace',
      'Brings joy richer than any luxury money can buy',
    ],
  },
  {
    title: 'बच्चों जैसी बेफिक्री',
    titleEnglish: 'Carefree Joy Within',
    linesHindi: [
      'अंदर के बचपन को कभी पूरी तरह बड़ा मत होने देना',
      'वही तो मुश्किल दिनों में भी चेहरे पर मुस्कान लाता है',
    ],
    linesHinglish: [
      'Andar ke bachpan ko kabhi poori tarah bada mat hone dena',
      'Wahi to mushkil dinon mein bhi chehre par muskaan laata hai',
    ],
    linesEnglish: [
      'Never allow the playful child inside your heart to grow old',
      'That spark is what keeps smiles alive even on busy days',
    ],
  },
  {
    title: 'बाँटने से बढ़ती ख़ुशी',
    titleEnglish: 'Joy Doubled by Sharing',
    linesHindi: [
      'अपनी थाली की मिठास किसी और के साथ बाँटकर देखो',
      'मन में उठने वाली खुशी दोगुनी होकर लौट आएगी',
    ],
    linesHinglish: [
      'Apni thaali ki mithaas kisi aur ke saath baantkar dekho',
      'Man mein uthne waali khushi doguni hokar laut aayegi',
    ],
    linesEnglish: [
      'Try sharing a sweet bite from your own plate with someone',
      'Watch how the joy inside your chest returns twice as bright',
    ],
  },
  {
    title: 'मन की हरियाली',
    titleEnglish: 'Spring Inside the Soul',
    linesHindi: [
      'बाहर चाहे पतझड़ का मौसम क्यों न चल रहा हो',
      'अगर मन खुश है तो हर तरफ़ फूल ही खिले दिखते हैं',
    ],
    linesHinglish: [
      'Baahar chaahe patjhad ka mausam kyun na chal raha ho',
      'Agar man khush hai to har taraf phool hi khile dikhte hain',
    ],
    linesEnglish: [
      'Even if autumn winds are blowing outside the window',
      'When the heart feels cheerful, blossoms seem to bloom everywhere',
    ],
  },
  {
    title: 'दोस्त की बेतुकी हँसी',
    titleEnglish: 'Laughing Over Silly Jokes',
    linesHindi: [
      'पुराने दोस्तों के साथ बिना मतलब हँसते रहने का सुकून',
      'किसी भी बड़ी दवा से ज़्यादा जल्दी दिल को ठीक करता है',
    ],
    linesHinglish: [
      'Purane doston ke saath bina matlab hanste rehne ka sukoon',
      'Kisi bhi badi dawa se zyada jaldi dil ko theek karta hai',
    ],
    linesEnglish: [
      'Laughing endlessly with old friends over silly jokes',
      'Heals a weary spirit faster than any medicine ever could',
    ],
  },
  {
    title: 'सुकून भरी साँस',
    titleEnglish: 'Deep Breath of Contentment',
    linesHindi: [
      'शिकायतों का बस्ता घर के बाहर छोड़कर देखो एक दिन',
      'आने वाली हर साँस तुम्हें जन्नत जैसी ताज़ी लगेगी',
    ],
    linesHinglish: [
      'Shikayaton ka basta ghar ke baahar chhodkar dekho ek din',
      'Aane waali har saans tumhein jannat jaisi taazi lagegi',
    ],
    linesEnglish: [
      'Leave the heavy bag of complaints outside your door one day',
      'Every breath you draw will taste as fresh as open sky',
    ],
  },
  {
    title: 'आज के पल का जश्न',
    titleEnglish: 'Celebrating Right Now',
    linesHindi: [
      'कल की फिक्र में आज की सुबह मत गँवाना कभी',
      'जिंदगी सिर्फ़ इसी पल में साँस ले रही है अभी',
    ],
    linesHinglish: [
      'Kal ki fikr mein aaj ki subah mat ganwana kabhi',
      'Zindagi sirf isi pal mein saans le rahi hai abhi',
    ],
    linesEnglish: [
      'Never squander todays morning worrying about tomorrow',
      'Life is breathing right inside this very moment in your hands',
    ],
  },
  {
    title: 'गुनगुनाती हुई शाम',
    titleEnglish: 'Humming Through Twilight',
    linesHindi: [
      'जब काम निपटाकर घर लौटते वक़्त मन गाना गुनगुनाए',
      'समझ लेना ज़िंदगी सही ताल पर चल रही है तुम्हारी',
    ],
    linesHinglish: [
      'Jab kaam niptaakar ghar laut-te waqt man gaana gungunaaye',
      'Samajh lena zindagi sahi taal par chal rahi hai tumhaari',
    ],
    linesEnglish: [
      'When you find yourself humming a tune walking home after work',
      'Know that your life is dancing cleanly to a happy rhythm',
    ],
  },
  {
    title: 'माँ के हाथ का खाना',
    titleEnglish: 'Joy of Home-Cooked Meals',
    linesHindi: [
      'पूरी दुनिया के पकवान एक तरफ़ रख दो चाहे',
      'माँ के हाथ की रोटी में मिलने वाली खुशी सबसे ऊपर है',
    ],
    linesHinglish: [
      'Poori duniya ke pakwaan ek taraf rakh do chaahe',
      'Maa ke haath ki roti mein milne waali khushi sabse upar hai',
    ],
    linesEnglish: [
      'Set every fancy feast in the world upon one side',
      'The joy inside a warm meal made by mother tops them all',
    ],
  },
  {
    title: 'ख़ुद से प्यार',
    titleEnglish: 'Warmth Toward Yourself',
    linesHindi: [
      'शीशे में देखकर कभी ख़ुद को भी शाबाशी दे दिया करो',
      'इतनी दूर हँसकर चलने के लिए तुम ख़ुद भी हकदार हो',
    ],
    linesHinglish: [
      'Sheeshe mein dekhkar kabhi khud ko bhi shaabaashi de diya karo',
      'Itni door hanskar chalne ke liye tum khud bhi haqdaar ho',
    ],
    linesEnglish: [
      'Look in the mirror sometimes and give yourself a kind cheer',
      'You deserve celebration too for walking this far with grace',
    ],
  },
  {
    title: 'चिड़ियों की चहचहाहट',
    titleEnglish: 'Morning Birdsong',
    linesHindi: [
      'अलार्म से पहले जब चिड़ियों की आवाज़ जगाती है सुबह',
      'लगता है प्रकृति खुद आकर नया दिन मुबारक कह रही है',
    ],
    linesHinglish: [
      'Alarm se pehle jab chidiyon ki aawaaz jagaati hai subah',
      'Lagta hai prakriti khud aakar naya din mubarak keh rahi hai',
    ],
    linesEnglish: [
      'When cheerful birdsong wakes you before the alarm rings',
      'It feels as if nature itself stepped over to wish you joy',
    ],
  },
  {
    title: 'शुक्रगुज़ारी का आनंद',
    titleEnglish: 'Joy of Gratitude',
    linesHindi: [
      'जितना है उसमें खुश रहना आ गया जिस इंसान को',
      'उससे ज़्यादा अमीर इस धरती पर कोई और नहीं है',
    ],
    linesHinglish: [
      'Jitna hai usmein khush rehna aa gaya jis insaan ko',
      'Usse zyada ameer is dharti par koi aur nahin hai',
    ],
    linesEnglish: [
      'Whoever masters being cheerful with what they already hold',
      'Has no richer soul anywhere upon this entire earth',
    ],
  },
  {
    title: 'बारिश में भीगने की उमंग',
    titleEnglish: 'Dancing in Rain',
    linesHindi: [
      'कभी-कभी छाता बंद करके बारिश में भीग लिया करो',
      'बचपन की आधी खुशियाँ तो वहीं कहीं छुपी मिलती हैं',
    ],
    linesHinglish: [
      'Kabhi-kabhi chhaata band karke baarish mein bheeg liya karo',
      'Bachpan ki aadhi khushiyan to wahin kahin chhupi milti hain',
    ],
    linesEnglish: [
      'Every once in a while, fold your umbrella and soak in the rain',
      'Half of childhoods purest joys wait right there in the drops',
    ],
  },
  {
    title: 'सच्ची दोस्ती की महफ़िल',
    titleEnglish: 'Warm Circle of Friends',
    linesHindi: [
      'थकी हुई शाम भी पल में रोशन हो जाती है',
      'जब दो-चार यार अचानक घर पर चाय पीने आ जाते हैं',
    ],
    linesHinglish: [
      'Thaki hui shaam bhi pal mein roshan ho jaati hai',
      'Jab do-chaar yaar achanak ghar par chai peene aa jaate hain',
    ],
    linesEnglish: [
      'Even an exhausting evening lights up in an instant',
      'When a few close friends drop by unexpectedly for tea',
    ],
  },
  {
    title: 'हल्के मन की उड़ान',
    titleEnglish: 'Flight of a Light Heart',
    linesHindi: [
      'पुरानी नाराज़गियाँ माफ़ करके हल्का कर लो सीना',
      'बिना बोझ के मन कितना ऊँचा उड़ता है, देखो तो सही',
    ],
    linesHinglish: [
      'Purani naaraazgiyan maaf karke halka kar lo seena',
      'Bina bojh ke man kitna ooncha udta hai, dekho to sahi',
    ],
    linesEnglish: [
      'Forgive old grudges and let your heart grow light again',
      'See just how high the spirit soars once free of heavy weight',
    ],
  },
  {
    title: 'मीठी यादों का उजाला',
    titleEnglish: 'Glow of Happy Days',
    linesHindi: [
      'चेहरे की झुर्रियाँ भी बेहद खूबसूरत लगती हैं बुढ़ापे में',
      'अगर वो उम्र भर मुस्कुराते रहने से बनी हों तो',
    ],
    linesHinglish: [
      'Chehre ki jhurriyan bhi behad khoobsurat lagti hain budhaape mein',
      'Agar wo umar bhar muskurate rehne se bani hon to',
    ],
    linesEnglish: [
      'Even laugh lines look extraordinarily lovely in older years',
      'When they were carved by a lifetime spent smiling warmly',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'पसंदीदा किताब और सुकून',
    titleEnglish: 'Favorite Book and Calm',
    linesHindi: [
      'बारिश की आवाज़ और हाथ में कोई प्यारी किताब हो',
      'इससे सस्ती और सच्ची खुशी भला कहाँ मिल सकती है',
    ],
    linesHinglish: [
      'Baarish ki aawaaz aur haath mein koi pyaari kitaab ho',
      'Isse sasti aur sacchi khushi bhala kahaan mil sakti hai',
    ],
    linesEnglish: [
      'Pattering rain outside and a cherished book in your hands',
      'Where else could purer, simpler happiness ever be found',
    ],
  },
  {
    title: 'खिलता हुआ आँगन',
    titleEnglish: 'Blooming Courtyard',
    linesHindi: [
      'गमले में नया फूल खिलते देखकर जो खुशी होती है',
      'वही बताती है कि दिल अब भी कितना मासूम और ज़िंदा है',
    ],
    linesHinglish: [
      'Gamle mein naya phool khilte dekhkar jo khushi hoti hai',
      'Wahi bataati hai ki dil ab bhi kitna maasoom aur zinda hai',
    ],
    linesEnglish: [
      'The sudden delight of spotting a fresh flower bloom in a pot',
      'Shows just how gentle and alive your heart remains inside',
    ],
  },
  {
    title: 'सुकून की नींद',
    titleEnglish: 'Restful Night Ahead',
    linesHindi: [
      'बिना किसी के दिल दुखाए जब दिन पूरा होता है',
      'रात को तकिये पर सिर रखते ही सुकून मिलता है',
    ],
    linesHinglish: [
      'Bina kisi ke dil dukhaaye jab din poora hota hai',
      'Raat ko takiye par sir rakhte hi sukoon milta hai',
    ],
    linesEnglish: [
      'When a day closes without having hurt a single soul',
      'The moment your head touches the pillow, sweet peace arrives',
    ],
  },
  {
    title: 'हँसी का तोहफ़ा',
    titleEnglish: 'Gift of a Cheerful Face',
    linesHindi: [
      'जेब में पैसा न भी हो तो किसी का दिन बना सकते हो',
      'बस मिलने वाले हर चेहरे को एक प्यारी मुस्कान दे दो',
    ],
    linesHinglish: [
      'Jeb mein paisa na bhi ho to kisi ka din bana sakte ho',
      'Bas milne waale har chehre ko ek pyaari muskaan de do',
    ],
    linesEnglish: [
      'Even with empty pockets you can brighten someones whole day',
      'Simply offer a warm, genuine smile to every face you meet',
    ],
  },
  {
    title: 'छुट्टी की सुनहरी सुबह',
    titleEnglish: 'Golden Holiday Morning',
    linesHindi: [
      'जब घड़ी देखने की कोई जल्दी न हो सुबह उठकर',
      'चैन की वो दो घड़ियाँ पूरे हफ़्ते की थकान मिटा देती हैं',
    ],
    linesHinglish: [
      'Jab ghadi dekhne ki koi jaldi na ho subah uthkar',
      'Chain ki wo do ghadiyan poore hafte ki thakaan mita deti hain',
    ],
    linesEnglish: [
      'Waking up without any rush to check the ticking clock',
      'Those unhurried morning hours wash away a whole weeks fatigue',
    ],
  },
  {
    title: 'खुश रहने का फ़ैसला',
    titleEnglish: 'Choosing Joy Daily',
    linesHindi: [
      'खुशी कोई बाज़ार में मिलने वाली चीज़ नहीं है दोस्त',
      'यह तो रोज़ सुबह लिया जाने वाला एक प्यारा फ़ैसला है',
    ],
    linesHinglish: [
      'Khushi koi baazaar mein milne waali cheez nahin hai dost',
      'Yah to roz subah liya jaane wala ek pyaara faisla hai',
    ],
    linesEnglish: [
      'Happiness is not an item stocked on market shelves, friend',
      'It is a gentle, daily choice we make each morning we rise',
    ],
  },
  {
    title: 'शाम की ताज़ी हवा',
    titleEnglish: 'Breeze on the Face',
    linesHindi: [
      'शाम को टहलते वक़्त जब ठंडी हवा चेहरे को छूती है',
      'लगता है जैसे सारा तनाव हवा में उड़ गया हो अभी',
    ],
    linesHinglish: [
      'Shaam ko tehalte waqt jab thandi hawa chehre ko chhooti hai',
      'Lagta hai jaise saara tanaav hawa mein ud gaya ho abhi',
    ],
    linesEnglish: [
      'When cool evening wind brushes softly against your cheeks on a walk',
      'It feels as if every trace of worry lifts right off into the air',
    ],
  },
  {
    title: 'प्यारा सा सरप्राइज़',
    titleEnglish: 'Unexpected Little Joy',
    linesHindi: [
      'बिना बताए किसी अपने का छोटा सा तोहफ़ा मिल जाना',
      'दिल को महीनों तक ख़ुशियों से भर जाता है',
    ],
    linesHinglish: [
      'Bina bataaye kisi apne ka chhota sa tohfa mil jaana',
      'Dil ko mahino tak khushiyon se bhar jaata hai',
    ],
    linesEnglish: [
      'Receiving a thoughtful little surprise out of the blue from a loved one',
      'Keeps the heart overflowing with warmth for months on end',
    ],
  },
  {
    title: 'हल्की मुस्कान की ताक़त',
    titleEnglish: 'Magic of Cheerfulness',
    linesHindi: [
      'जिंदगी की आधी उलझनें अपने आप सुलझ जाती हैं',
      'जब हम घबराने के बजाय मुस्कुराकर सामना करते हैं',
    ],
    linesHinglish: [
      'Zindagi ki aadhi uljhanein apne aap sulajh jaati hain',
      'Jab hum ghabrane ke bajaye muskurakar saamna karte hain',
    ],
    linesEnglish: [
      'Half of lifes knots untangle smoothly all on their own',
      'Whenever we meet problems with a calm smile instead of panic',
    ],
  },
  {
    title: 'अच्छी ख़बर की घंटी',
    titleEnglish: 'Ring of Good News',
    linesHindi: [
      'फ़ोन की घंटी बजी और उधर से कोई अच्छी ख़बर मिली',
      'एक पल में पूरा घर खुशियों की रौशनी से भर गया',
    ],
    linesHinglish: [
      'Phone ki ghanti baji aur udhar se koi acchi khabar mili',
      'Ek pal mein poora ghar khushiyon ki roshni se bhar gaya',
    ],
    linesEnglish: [
      'The phone rang and cheerful news arrived from the other end',
      'In a single instant the entire house glowed with celebration',
    ],
  },
  {
    title: 'संगीतमय सफ़र',
    titleEnglish: 'Melodies Along the Drive',
    linesHindi: [
      'खुली सड़क, सुहाना मौसम और मनपसंद गाना चल रहा हो',
      'ज़िंदगी की सबसे खूबसूरत सैर बस इतनी सी ही होती है',
    ],
    linesHinglish: [
      'Khuli sadak, suhana mausam aur manpasand gaana chal raha ho',
      'Zindagi ki sabse khoobsurat sair bas itni si hi hoti hai',
    ],
    linesEnglish: [
      'An open highway, pleasant skies, and your favorite song playing',
      'Lifes sweetest escape really is as simple as that',
    ],
  },
  {
    title: 'दयालु दिल की ख़ुशी',
    titleEnglish: 'Joy of Helping Someone',
    linesHindi: [
      'किसी बूढ़े के चेहरे पर सुकून लाकर देखना कभी',
      'उससे मिलने वाली अंदरूनी खुशी का कोई मोल नहीं',
    ],
    linesHinglish: [
      'Kisi boodhe ke chehre par sukoon laakar dekhna kabhi',
      'Usse milne waali andarooni khushi ka koi mol nahin',
    ],
    linesEnglish: [
      'Try bringing ease and relief to an elders tired face',
      'The quiet happiness blooming inside your chest is priceless',
    ],
  },
  {
    title: 'हर दिन एक नया त्यौहार',
    titleEnglish: 'Festive Spirit Every Day',
    linesHindi: [
      'अगर दिल में उमंग और आँखों में चमक ज़िंदा है',
      'तो तुम्हारे लिए साल के तीनों सौ पैंसठ दिन त्योहार हैं',
    ],
    linesHinglish: [
      'Agar dil mein umang aur aankhon mein chamak zinda hai',
      'To tumhaare liye saal ke teen sau painsath din tyohaar hain',
    ],
    linesEnglish: [
      'As long as excitement lives in your heart and sparkle in your eyes',
      'All three hundred sixty-five days of the year feel festive',
    ],
  },
  {
    title: 'ख़ुशमिज़ाज़ संगत',
    titleEnglish: 'Cheerful Souls Around',
    linesHindi: [
      'जिनके पास बैठते ही सारे ग़म हल्के लगने लगें',
      'ऐसे ज़िंदादिल दोस्तों को हमेशा संभालकर रखना चाहिए',
    ],
    linesHinglish: [
      'Jinke paas baithte hi saare gham halke lagne lagen',
      'Aise zindadil doston ko hamesha sanbhaalkar rakhna chahiye',
    ],
    linesEnglish: [
      'Friends beside whom every heavy worry suddenly feels feather-light',
      'Are vibrant treasures worth keeping close for all your life',
    ],
  },
  {
    title: 'ताज़गी भरी सुबह',
    titleEnglish: 'Bright Start to Today',
    linesHindi: [
      'कल की थकान रात भर की नींद में छोड़ आया हूँ',
      'आज नई मुस्कान और नए जोश के साथ उठा हूँ मैं',
    ],
    linesHinglish: [
      'Kal ki thakaan raat bhar ki neend mein chhod aaya hoon',
      'Aaj nayi muskaan aur naye josh ke saath utha hoon main',
    ],
    linesEnglish: [
      'I left yesterdays weariness behind inside nights quiet sleep',
      'This morning I rise wearing a fresh smile and eager spirit',
    ],
  },
  {
    title: 'सादा जीवन, गहरी ख़ुशी',
    titleEnglish: 'Simple Living, Rich Joy',
    linesHindi: [
      'कम ज़रूरतों में भी जो मन को भरना सीख ले',
      'उसकी हर सुबह और हर शाम बेहद खुशहाल गुज़रती है',
    ],
    linesHinglish: [
      'Kam zarooraton mein bhi jo man ko bharna seekh le',
      'Uski har subah aur har shaam behad khushhaal guzarti hai',
    ],
    linesEnglish: [
      'Whoever learns to find fullness in modest, simple needs',
      'Lives every single morning and evening with peaceful joy',
    ],
  },
  {
    title: 'खिलखिलाती बगिया',
    titleEnglish: 'Laughing Like Blossoms',
    linesHindi: [
      'फूल इसलिए भी खूबसूरत लगते हैं हर किसी को',
      'क्योंकि वो बिना शिकायत हर मौसम में खिलना जानते हैं',
    ],
    linesHinglish: [
      'Phool isliye bhi khoobsurat lagte hain har kisi ko',
      'Kyunki wo bina shikayat har mausam mein khilna jaante hain',
    ],
    linesEnglish: [
      'Flowers look enchanting to every passing eye because',
      'They know how to open cheerfully without cursing the weather',
    ],
  },
  {
    title: 'मीठी चाय, मीठी बातें',
    titleEnglish: 'Warm Conversations',
    linesHindi: [
      'सुकून के लिए किसी बड़े पहाड़ पर जाना ज़रूरी नहीं',
      'आँगन में बैठकर अपनों से दिल की बात कर लेना काफी है',
    ],
    linesHinglish: [
      'Sukoon ke liye kisi bade pahaad par jaana zaroori nahin',
      'Aangan mein baithkar apnon se dil ki baat kar lena kaafi hai',
    ],
    linesEnglish: [
      'Finding peace does not require climbing distant mountain peaks',
      'Sitting on the porch sharing heart-to-heart talks with family is plenty',
    ],
  },
  {
    title: 'नए कपड़ों सी ताज़गी',
    titleEnglish: 'Sparkle of Renewal',
    linesHindi: [
      'जैसे छोटे से नए खिलौने से बच्चा चहक उठता है',
      'वैसे ही छोटी-छोटी खुशियों को गले लगाना सीख लो',
    ],
    linesHinglish: [
      'Jaise chhote se naye khilaune se baccha chehak uthta hai',
      'Waise hi chhoti-chhoti khushiyon ko gale lagaana seekh lo',
    ],
    linesEnglish: [
      'Just as a child beams holding a simple brand new toy',
      'Learn to hug todays small joys with that same wide wonder',
    ],
  },
  {
    title: 'दिल का उजाला',
    titleEnglish: 'Radiance From Within',
    linesHindi: [
      'चेहरे की चमक किसी महँगी क्रीम से नहीं आती है',
      'अंदर से खुश रहने वाला इंसान खुद ही दमकता है',
    ],
    linesHinglish: [
      'Chehre ki chamak kisi mehngi cream se nahin aati hai',
      'Andar se khush rehne wala insaan khud hi damakta hai',
    ],
    linesEnglish: [
      'True radiance never comes out of an expensive jar',
      'A person happy deep inside glows brightly all by themselves',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'सकारात्मक नज़रिया',
    titleEnglish: 'Brighter Way of Seeing',
    linesHindi: [
      'आधे ख़ाली गिलास को आधा भरा देखने का हुनर सीखो',
      'ज़िंदगी पहले से कहीं ज़्यादा खूबसूरत लगने लगेगी',
    ],
    linesHinglish: [
      'Aadhe khaali gilaas ko aadha bhara dekhne ka hunar seekho',
      'Zindagi pehle se kahin zyada khoobsurat lagne lagegi',
    ],
    linesEnglish: [
      'Practice spotting the half-full side instead of the empty edge',
      'And watch how life instantly grows twice as lovely',
    ],
  },
  {
    title: 'मेहनत से मिली ख़ुशी',
    titleEnglish: 'Joy of Earned Rest',
    linesHindi: [
      'दिन भर की ईमानदार मेहनत के बाद जो आराम मिलता है',
      'उससे ज़्यादा मीठी खुशी शायद ही कहीं मिलती हो',
    ],
    linesHinglish: [
      'Din bhar ki imaandaar mehnat ke baad jo aaraam milta hai',
      'Usse zyada meethi khushi shaayad hi kahin milti ho',
    ],
    linesEnglish: [
      'The gentle rest earned after an honest days hard work',
      'Brings a sweetness scarcely matched by anything else on earth',
    ],
  },
  {
    title: 'रिश्तों की मिठास',
    titleEnglish: 'Warmth of True Ties',
    linesHindi: [
      'जब अपनों के साथ रिश्ते साफ़ और सच्चे होते हैं',
      'तो हर साधारण दिन भी जश्न जैसा महसूस होता है',
    ],
    linesHinglish: [
      'Jab apnon ke saath rishte saaf aur sacche hote hain',
      'To har saadhaaran din bhi jashn jaisa mehsoos hota hai',
    ],
    linesEnglish: [
      'When bonds with loved ones stay clear, warm, and honest',
      'Even the simplest day feels like a joyous celebration',
    ],
  },
  {
    title: 'हँसी का सिलसिला',
    titleEnglish: 'Contagious Laughter',
    linesHindi: [
      'मुस्कुराहट की ख़ासियत यही है कि यह रुकती नहीं',
      'एक चेहरे से शुरू होकर पूरे कमरे में फैल जाती है',
    ],
    linesHinglish: [
      'Muskurahat ki khaasiyat yahi hai ki yah rukti nahin',
      'Ek chehre se shuru hokar poore kamre mein phail jaati hai',
    ],
    linesEnglish: [
      'The lovely magic of a smile is that it refuses to stay still',
      'Starting on one face, it ripples gladly across the entire room',
    ],
  },
  {
    title: 'प्रकृति के क़रीब',
    titleEnglish: 'Peace Among Trees',
    linesHindi: [
      'सुबह-सुबह हरी घास पर नंगे पाँव चलकर देखो कभी',
      'ओस की बूँदें पैरों से होकर सीधे दिल को ठंडक देती हैं',
    ],
    linesHinglish: [
      'Subah-subah hari ghaas par nange paanv chalkar dekho kabhi',
      'Os ki boondein pairon se hokar seedhe dil ko thandak deti hain',
    ],
    linesEnglish: [
      'Walk barefoot over cool green grass at early sunrise',
      'Dewdrops send gentle freshness straight from your soles to your soul',
    ],
  },
  {
    title: 'अच्छी यादों का खज़ाना',
    titleEnglish: 'Pocket Full of Joy',
    linesHindi: [
      'जेब में पैसे कम हों तब भी अमीरी महसूस होती है',
      'जब दिल में हँसी-ख़ुशी भरी यादों का ख़ज़ाना हो',
    ],
    linesHinglish: [
      'Jeb mein paise kam hon tab bhi ameeri mehsoos hoti hai',
      'Jab dil mein hansi-khushi bhari yaadon ka khazaana ho',
    ],
    linesEnglish: [
      'Even with modest coins in pocket, one feels richly blessed',
      'When the heart holds a chest full of joyful, laughing memories',
    ],
  },
  {
    title: 'सुकून भरा संगीत',
    titleEnglish: 'Peace in Soft Music',
    linesHindi: [
      'कोई मधुर धुन जब कमरे में धीमे से बजती है',
      'तो थकी हुई आत्मा भी खुशी से झूमने लगती है',
    ],
    linesHinglish: [
      'Koi madhur dhun jab kamre mein dheeme se bajti hai',
      'To thaki hui aatma bhi khushi se jhoomne lagti hai',
    ],
    linesEnglish: [
      'When a gentle melody floats softly across a quiet room',
      'Even a weary spirit begins swaying lightly with joy',
    ],
  },
  {
    title: 'चिंता मुक्त पल',
    titleEnglish: 'Worry-Free Moments',
    linesHindi: [
      'आधे से ज़्यादा डर तो सिर्फ़ हमारे ख़्यालों में रहते हैं',
      'मन शांत रखो तो ज़िंदगी हर कदम पर खुशियाँ देती है',
    ],
    linesHinglish: [
      'Aadhe se zyada dar to sirf hamaare khayaalon mein rehte hain',
      'Man shaant rakho to zindagi har kadam par khushiyan deti hai',
    ],
    linesEnglish: [
      'More than half our worries exist only inside overthinking minds',
      'Keep the spirit calm, and life scatters joys at every step',
    ],
  },
  {
    title: 'नया सीखने की ख़ुशी',
    titleEnglish: 'Spark of Learning Something New',
    linesHindi: [
      'जब कोई नया काम पहली बार ठीक से बन जाता है',
      'वो छोटी सी खुशी पूरे हफ़्ते का उत्साह बढ़ा देती है',
    ],
    linesHinglish: [
      'Jab koi naya kaam pehli baar theek se ban jaata hai',
      'Wo chhoti si khushi poore hafte ka utsaah badha deti hai',
    ],
    linesEnglish: [
      'The moment something new works smoothly on your very first try',
      'That bright rush lifts your spirits for an entire week ahead',
    ],
  },
  {
    title: 'सच्ची प्रशंसा',
    titleEnglish: 'Warmth of Kind Praise',
    linesHindi: [
      'किसी की सच्ची तारीफ़ करके देखो आज बिना स्वार्थ के',
      'उनके चेहरे की ख़ुशी तुम्हारा भी दिन बना देगी',
    ],
    linesHinglish: [
      'Kisi ki sacchi taareef karke dekho aaj bina swaarth ke',
      'Unke chehre ki khushi tumhaara bhi din bana degi',
    ],
    linesEnglish: [
      'Offer someone sincere appreciation today with nothing expected back',
      'Watching their face brighten will instantly make your day too',
    ],
  },
  {
    title: 'हल्का-फुल्का अंदाज़',
    titleEnglish: 'Playful Spirit',
    linesHindi: [
      'गंभीरता ज़रूरी है पर हर वक़्त संजीदा रहना ठीक नहीं',
      'हल्की-फुल्की मस्ती जीवन को ताज़गी से भर देती है',
    ],
    linesHinglish: [
      'Gambheerata zaroori hai par har waqt sanjeeda rehna theek nahin',
      'Halki-phulki masti jeevan ko taazgi se bhar deti hai',
    ],
    linesEnglish: [
      'Seriousness has its place, yet solemnness all day grows dull',
      'A splash of lighthearted playfulness keeps life bright and fresh',
    ],
  },
  {
    title: 'सपनों के पूरे होने का दिन',
    titleEnglish: 'Day Dreams Come True',
    linesHindi: [
      'बरसों की मेहनत के बाद जब सपना हाथ में आता है',
      'आँखों से निकलने वाले खुशी के आँसू अनमोल होते हैं',
    ],
    linesHinglish: [
      'Barson ki mehnat ke baad jab sapna haath mein aata hai',
      'Aankhon se nikalne waale khushi ke aansu anmol hote hain',
    ],
    linesEnglish: [
      'When a long-worked-for dream finally rests inside your palms',
      'Those joyful tears brimming in your eyes become priceless',
    ],
  },
  {
    title: 'तारों भरा आसमान',
    titleEnglish: 'Under Starlit Skies',
    linesHindi: [
      'रात को खुली छत पर बैठकर जब सितारे चमकते दिखें',
      'दिल की सारी उलझनें कितनी छोटी लगने लगती हैं',
    ],
    linesHinglish: [
      'Raat ko khuli chhat par baithkar jab sitaare chamakte dikhein',
      'Dil ki saari uljhanein kitni chhoti lagne lagti hain',
    ],
    linesEnglish: [
      'Sitting on an open terrace watching stars shimmer overhead',
      'Makes every noisy worry inside seem wonderfully small',
    ],
  },
  {
    title: 'मनपसंद पकवान',
    titleEnglish: 'Joy of Favorite Flavors',
    linesHindi: [
      'बारिश का दिन हो और घर में गरम पकौड़े बन रहे हों',
      'बड़ी से बड़ी दावत भी इस सादगी के आगे कम लगती है',
    ],
    linesHinglish: [
      'Baarish ka din ho aur ghar mein garam pakode ban rahe hon',
      'Badi se badi daawat bhi is saadgi ke aage kam lagti hai',
    ],
    linesEnglish: [
      'A rainy afternoon with crisp snacks sizzling fresh at home',
      'Feels sweeter than the grandest banquet anywhere in town',
    ],
  },
  {
    title: 'नए दोस्त, नई बातें',
    titleEnglish: 'New Friends, Fresh Stories',
    linesHindi: [
      'हर नया इंसान अपने साथ एक नई दुनिया लेकर आता है',
      'मिलजुलकर हँसने से हर सफ़र यादगार बन जाता है',
    ],
    linesHinglish: [
      'Har naya insaan apne saath ek nayi duniya lekar aata hai',
      'Miljulkar hansne se har safar yaadgaar ban jaata hai',
    ],
    linesEnglish: [
      'Every new soul brings an entire fresh world along with them',
      'Sharing laughter side by side turns every road memorable',
    ],
  },
  {
    title: 'बदलते मौसम की ख़ुशबू',
    titleEnglish: 'Freshness of Changing Seasons',
    linesHindi: [
      'पहली गुलाबी ठंड जब सुबह की हवा में घुलती है',
      'तब मन बिना किसी कारण के भी चहकने लगता है',
    ],
    linesHinglish: [
      'Pehli gulaabi thand jab subah ki hawa mein ghulti hai',
      'Tab man bina kisi kaaran ke bhi chehakne lagta hai',
    ],
    linesEnglish: [
      'When the first crisp hint of autumn coolness blends into dawn',
      'The heart begins chirping brightly without needing a reason',
    ],
  },
  {
    title: 'शाम की सैर',
    titleEnglish: 'Peaceful Evening Stroll',
    linesHindi: [
      'फ़ोन जेब में रखकर बस यूं ही टहलने निकल जाना',
      'मन को तरोताज़ा करने का सबसे आसान तरीका है',
    ],
    linesHinglish: [
      'Phone jeb mein rakhkar bas yoon hi tehalne nikal jaana',
      'Man ko tarotaaza karne ka sabse aasaan tareeka hai',
    ],
    linesEnglish: [
      'Tucking your phone into your pocket and stepping out for a stroll',
      'Is the simplest secret to refreshing a busy mind',
    ],
  },
  {
    title: 'ख़ुशी का ठिकाना',
    titleEnglish: 'Home Full of Warmth',
    linesHindi: [
      'जहाँ आपके लौटने का कोई दिल से इंतज़ार करता हो',
      'उससे ज़्यादा खुशकिस्मत घर भला दुनिया में कहाँ होगा',
    ],
    linesHinglish: [
      'Jahaan aapke lautne ka koi dil se intezaar karta ho',
      'Usse zyada khushkismat ghar bhala duniya mein kahaan hoga',
    ],
    linesEnglish: [
      'A home where someone eagerly awaits your return each evening',
      'Is the happiest place anyone could ask for in this world',
    ],
  },
  {
    title: 'रंगों से भरी सोच',
    titleEnglish: 'Colorful Perspective',
    linesHindi: [
      'ज़िंदगी बिल्कुल किसी सादे कैनवास जैसी होती है',
      'तुम्हारी मुस्कान इसमें सबसे सुंदर रंग भर देती है',
    ],
    linesHinglish: [
      'Zindagi bilkul kisi saade canvas jaisi hoti hai',
      'Tumhaari muskaan ismein sabse sundar rang bhar deti hai',
    ],
    linesEnglish: [
      'Life is much like a wide, untouched canvas awaiting paint',
      'Your warm smile brushes the brightest colors across it',
    ],
  },
  {
    title: 'अच्छी नीयत का सुकून',
    titleEnglish: 'Ease of Clear Conscience',
    linesHindi: [
      'किसी के चेहरे पर मुस्कान की वजह बन सको अगर',
      'तो समझना तुमने आज की सबसे बड़ी दौलत कमा ली',
    ],
    linesHinglish: [
      'Kisi ke chehre par muskaan ki wajah ban sako agar',
      'To samajhna tumne aaj ki sabse badi daulat kamaa li',
    ],
    linesEnglish: [
      'If you can be the reason someone breaks into a smile today',
      'Know that you have earned the finest treasure of all',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'दिल की आज़ादी',
    titleEnglish: 'Freedom From Worry',
    linesHindi: [
      'दूसरों की रायों की कैद से बाहर निकलकर जीना सीखो',
      'असली खुशी अपनी शर्तों पर मुस्कुराने में मिलती है',
    ],
    linesHinglish: [
      'Doosron ki raayon ki qaid se baahar nikalkar jeena seekho',
      'Asli khushi apni sharton par muskurane mein milti hai',
    ],
    linesEnglish: [
      'Step out from the cage of constant outside opinions',
      'True happiness blooms when you smile wholeheartedly as yourself',
    ],
  },
  {
    title: 'पुरानी एल्बम की मुस्कान',
    titleEnglish: 'Smiles in Old Albums',
    linesHindi: [
      'बचपन की तस्वीरें देखकर जो खिलखिलाहट छूटती है',
      'वो पल भर में सालों की थकान उतार देती है',
    ],
    linesHinglish: [
      'Bachpan ki tasveerein dekhkar jo khilkhilaahat chhootti hai',
      'Wo pal bhar mein saalon ki thakaan utaar deti hai',
    ],
    linesEnglish: [
      'The burst of laughter while flipping through childhood photos',
      'Melts years of grown-up fatigue away in a heartbeat',
    ],
  },
  {
    title: 'छोटी सी छुट्टी',
    titleEnglish: 'Sweet Pause in Routine',
    linesHindi: [
      'हर वक़्त दौड़ते रहना ही ज़िंदगी नहीं होती मेरे यार',
      'कभी ठहरकर गहरी साँस लेना भी खुशी का हिस्सा है',
    ],
    linesHinglish: [
      'Har waqt daudte rehna hi zindagi nahin hoti mere yaar',
      'Kabhi theharkar gehri saans lena bhi khushi ka hissa hai',
    ],
    linesEnglish: [
      'Always sprinting nonstop is never all there is to living',
      'Pausing quietly to breathe deep is half of happiness too',
    ],
  },
  {
    title: 'हँसमुख स्वभाव',
    titleEnglish: 'Sunny Temperament',
    linesHindi: [
      'मुस्कुराता हुआ चेहरा हर दरवाज़ा आसानी से खोल देता है',
      'खुशमिज़ाज़ लोगों के रास्ते में दोस्त खुद मिल जाते हैं',
    ],
    linesHinglish: [
      'Muskurata hua chehra har darwaaza aasaani se khol deta hai',
      'Khushmizaaj logon ke raaste mein dost khud mil jaate hain',
    ],
    linesEnglish: [
      'A warm, smiling face gently opens every locked door',
      'Cheerful souls naturally gather kind friends along every path',
    ],
  },
  {
    title: 'शांति का कोना',
    titleEnglish: 'Quiet Corner of Joy',
    linesHindi: [
      'घर का वो शांत कोना जहाँ सिर्फ़ तुम्हारी पसंद की चीज़ें हों',
      'दुनिया की सबसे बड़ी सल्तनत से ज़्यादा प्यारा लगता है',
    ],
    linesHinglish: [
      'Ghar ka wo shaant kona jahaan sirf tumhaari pasand ki cheezein hon',
      'Duniya ki sabse badi saltanat se zyada pyaara lagta hai',
    ],
    linesEnglish: [
      'That cozy corner of home filled with your favorite small things',
      'Feels dearer than ruling the grandest kingdom on earth',
    ],
  },
  {
    title: 'ख़ुशियों की बारिश',
    titleEnglish: 'Showers of Delight',
    linesHindi: [
      'जब दुआएँ कबूल होती हैं बिना किसी शोर-शराबे के',
      'तब मन में खुशियों की धीमी-धीमी फुहार बरसती है',
    ],
    linesHinglish: [
      'Jab duaayein qubool hoti hain bina kisi shor-sharaabe ke',
      'Tab man mein khushiyon ki dheemi-dheemi fuhaar barasti hai',
    ],
    linesEnglish: [
      'When quiet prayers are answered gently without fanfare',
      'A soft, refreshing shower of joy rains inside the heart',
    ],
  },
  {
    title: 'अनमोल पल',
    titleEnglish: 'Treasured Seconds',
    linesHindi: [
      'कैमरे में क़ैद होने से ज़्यादा ज़रूरी है पल को जीना',
      'आँखों से देखी खूबसूरती दिल में हमेशा रहती है',
    ],
    linesHinglish: [
      'Camera mein qaid hone se zyada zaroori hai pal ko jeena',
      'Aankhon se dekhi khoobsurati dil mein hamesha rehti hai',
    ],
    linesEnglish: [
      'More important than snapping every frame is living the moment',
      'Beauty soaked in with your eyes stays vivid in your heart forever',
    ],
  },
  {
    title: 'मन की तरंग',
    titleEnglish: 'Ripples of Cheer',
    linesHindi: [
      'एक प्यारे संदेश से भी पूरा दिन खुशनुमा हो जाता है',
      'रिश्तों में अपनापन बनाए रखने का यही तो जादू है',
    ],
    linesHinglish: [
      'Ek pyaare sandesh se bhi poora din khushnuma ho jaata hai',
      'Rishton mein apnapan banaaye rakhne ka yahi to jaadu hai',
    ],
    linesEnglish: [
      'Even one thoughtful note can brighten an entire afternoon',
      'That is the quiet magic of keeping warmth alive between loved ones',
    ],
  },
  {
    title: 'ताज़े फूलों सी सुबह',
    titleEnglish: 'Fresh as Morning Blooms',
    linesHindi: [
      'हर नई सुबह अपने साथ ताज़े अवसर और उमंग लाती है',
      'मुस्कुराकर स्वागत करो तो दिन खुद-ब-खुद निखर जाता है',
    ],
    linesHinglish: [
      'Har nayi subah apne saath taaze avsar aur umang laati hai',
      'Muskurakar swaagat karo to din khud-ba-khud nikhar jaata hai',
    ],
    linesEnglish: [
      'Every morning arrives carrying fresh hopes and open chances',
      'Greet it with a smile, and the hours brighten effortlessly',
    ],
  },
  {
    title: 'हँसते हुए रिश्ते',
    titleEnglish: 'Relationships Full of Laughter',
    linesHindi: [
      'जिस रिश्ते में हँसी और मज़ाक़ खुले दिल से होता है',
      'वहाँ दूरियाँ कभी अपनी जगह नहीं बना पातीं',
    ],
    linesHinglish: [
      'Jis rishte mein hansi aur mazaak khule dil se hota hai',
      'Wahaan dooriyan kabhi apni jagah nahin bana paateen',
    ],
    linesEnglish: [
      'In bonds where laughter and playful teasing flow freely',
      'Cold distance never finds room to take root between hearts',
    ],
  },
  {
    title: 'रंगीन तितलियों सा मन',
    titleEnglish: 'Butterflies of Joy',
    linesHindi: [
      'जब मन खुश होता है तो कदम भी हल्के पड़ जाते हैं',
      'जैसे कोई तितली फूल से फूल पर नाचती फिरती हो',
    ],
    linesHinglish: [
      'Jab man khush hota hai to kadam bhi halke pad jaate hain',
      'Jaise koi titli phool se phool par naachti phirti ho',
    ],
    linesEnglish: [
      'When the heart feels light with joy, footsteps glide effortlessly',
      'Like a bright butterfly dancing lightly from flower to flower',
    ],
  },
  {
    title: 'मेहमाननवाज़ी का आनंद',
    titleEnglish: 'Joy of Hosting Loved Ones',
    linesHindi: [
      'जब घर में अपनों के क़दम पड़ते हैं लंबे अरसे बाद',
      'तो हर दीवार भी जैसे खुशी से मुस्कुरा उठती है',
    ],
    linesHinglish: [
      'Jab ghar mein apnon ke kadam padte hain lambe arse baad',
      'To har deewar bhi jaise khushi se muskura uthti hai',
    ],
    linesEnglish: [
      'When dear faces step back through your doorway after long apart',
      'Even the quiet walls of home seem to beam with warmth',
    ],
  },
  {
    title: 'धैर्य से मिली ख़ुशी',
    titleEnglish: 'Joy After Waiting',
    linesHindi: [
      'लंबे इंतज़ार के बाद जब कोई मुराद पूरी होती है',
      'तो उसकी मिठास कई बरसों तक होंठों पर रहती है',
    ],
    linesHinglish: [
      'Lambe intezaar ke baad jab koi muraad poori hoti hai',
      'To uski mithaas kai barson tak honthon par rehti hai',
    ],
    linesEnglish: [
      'When a cherished wish comes true after patient waiting',
      'Its sweetness lingers gladly on your smile for years',
    ],
  },
  {
    title: 'तनाव से दूरी',
    titleEnglish: 'Letting Go of Stress',
    linesHindi: [
      'जो चीज़ें हमारे बस में नहीं हैं उन पर सोचना छोड़ो',
      'बस मुस्कुराओ और आज की खूबसूरती का मज़ा लो',
    ],
    linesHinglish: [
      'Jo cheezein hamaare bas mein nahin hain un par sochna chhodo',
      'Bas muskurao aur aaj ki khoobsurati ka maza lo',
    ],
    linesEnglish: [
      'Stop wrestling endlessly with things beyond your reach',
      'Simply smile and enjoy the quiet beauty standing right here',
    ],
  },
  {
    title: 'सच्चा सुकून',
    titleEnglish: 'Undisturbed Peace',
    linesHindi: [
      'दुनिया से होड़ लगाने की आदत छोड़ दी जिस दिन',
      'उसी दिन से सुकून और खुशी दोनों घर आ गए',
    ],
    linesHinglish: [
      'Duniya se hod lagaane ki aadat chhod di jis din',
      'Usi din se sukoon aur khushi dono ghar aa gaye',
    ],
    linesEnglish: [
      'The very day I let go of racing blindly against everyone else',
      'Both calm peace and genuine happiness walked right home',
    ],
  },
  {
    title: 'आसमान के नीचे पिकनिक',
    titleEnglish: 'Picnic Under Open Skies',
    linesHindi: [
      'खुले मैदान, ठंडी हवा और सबका साथ में बैठना',
      'छुट्टी के दिन की इससे प्यारी तस्वीर क्या होगी',
    ],
    linesHinglish: [
      'Khule maidaan, thandi hawa aur sabka saath mein baithna',
      'Chhutti ke din ki isse pyaari tasveer kya hogi',
    ],
    linesEnglish: [
      'Green open grass, cool breeze, and loved ones seated close',
      'What prettier portrait of a carefree afternoon could exist',
    ],
  },
  {
    title: 'अच्छी सेहत का जश्न',
    titleEnglish: 'Blessing of Health',
    linesHindi: [
      'बिना दर्द के चल-फिर पाना और खुलकर साँस लेना',
      'इंसान की सबसे बड़ी पर अनदेखी खुशी यही है',
    ],
    linesHinglish: [
      'Bina dard ke chal-phir paana aur khulkar saans lena',
      'Insaan ki sabse badi par andekhi khushi yahi hai',
    ],
    linesEnglish: [
      'Walking freely without ache and breathing deep with ease',
      'Is lifes greatest happiness that so often goes unnoticed',
    ],
  },
  {
    title: 'सकारात्मक शब्द',
    titleEnglish: 'Gentle Cheerful Words',
    linesHindi: [
      'दो मीठे बोल किसी का बोझ आधा कर सकते हैं',
      'अच्छी बातें बाँटने से ख़ुद का मन भी खुश रहता है',
    ],
    linesHinglish: [
      'Do meethe bol kisi ka bojh aadha kar sakte hain',
      'Acchi baatein baantne se khud ka man bhi khush rehta hai',
    ],
    linesEnglish: [
      'Two kind words can cut someone elses heavy load in half',
      'Sharing gentle encouragement leaves your own heart glowing too',
    ],
  },
  {
    title: 'चमकता हुआ चेहरा',
    titleEnglish: 'Brightness on Every Face',
    linesHindi: [
      'जिस घर में रोज़ सुबह हँसी से दिन शुरू होता है',
      'वहाँ बरकत और खुशियाँ खुद रास्ता ढूँढ लेती हैं',
    ],
    linesHinglish: [
      'Jis ghar mein roz subah hansi se din shuru hota hai',
      'Wahaan barkat aur khushiyan khud raasta dhoondh leti hain',
    ],
    linesEnglish: [
      'In a home where mornings start with cheerful smiles',
      'Grace and good fortune find their own way straight inside',
    ],
  },
  {
    title: 'छोटी सी दुआ',
    titleEnglish: 'Small Wish for Joy',
    linesHindi: [
      'आज बस इतनी सी ख़्वाहिश है ज़िंदगी से मेरी',
      'मैं भी मुस्कुराऊँ और मेरे आसपास सब खुश रहें',
    ],
    linesHinglish: [
      'Aaj bas itni si khwahish hai zindagi se meri',
      'Main bhi muskuraoon aur mere aaspaas sab khush rahein',
    ],
    linesEnglish: [
      'Today my single simple wish from life is only this',
      'May I keep smiling gently, and may everyone near me stay happy',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'खुशियों का झरना',
    titleEnglish: 'Spring of Pure Joy',
    linesHindi: [
      'बाहर ढूँढोगे तो खुशियाँ कम पड़ जाएँगी अक्सर',
      'अंदर झाँको तो सुकून का पूरा झरना बह रहा है',
    ],
    linesHinglish: [
      'Baahar dhoondhoge to khushiyan kam pad jaayengi aksar',
      'Andar jhaanko to sukoon ka poora jharna beh raha hai',
    ],
    linesEnglish: [
      'Search only outside, and happiness always feels scarce',
      'Look gently within, and an entire spring of peace already flows',
    ],
  },
  {
    title: 'सच्चे पल का आनंद',
    titleEnglish: 'Living Without Filters',
    linesHindi: [
      'दुनिया को दिखाने के लिए नहीं, अपने लिए खुश रहो',
      'दिखावे से दूर वाली मुस्कान सबसे ज़्यादा सच्ची होती है',
    ],
    linesHinglish: [
      'Duniya ko dikhane ke liye nahin, apne liye khush raho',
      'Dikhawe se door waali muskaan sabse zyada sacchi hoti hai',
    ],
    linesEnglish: [
      'Be joyful for your own soul, not merely to impress a screen',
      'A smile far from performance shines truest and longest',
    ],
  },
  {
    title: 'सुबह की ताज़ी बूँदें',
    titleEnglish: 'Morning Dew Sparkle',
    linesHindi: [
      'पत्तों पर ठहरी ओस भी सूरज के साथ चमक उठती है',
      'सही संगति मिले तो छोटे पल भी हीरे बन जाते हैं',
    ],
    linesHinglish: [
      'Patton par thehri os bhi sooraj ke saath chamak uthti hai',
      'Sahi sangati mile to chhote pal bhi heere ban jaate hain',
    ],
    linesEnglish: [
      'Even tiny dewdrops on green leaves sparkle brightly with sunrise',
      'In good company, ordinary minutes shine like precious diamonds',
    ],
  },
  {
    title: 'ख़ुद का पसंदीदा साथी',
    titleEnglish: 'Happy in Your Own Skin',
    linesHindi: [
      'जिस दिन अपनी ही कंपनी अच्छी लगने लगे तुम्हें',
      'उस दिन से तुम कभी अकेले या उदास नहीं रहोगे',
    ],
    linesHinglish: [
      'Jis din apni hi company acchi lagne lage tumhein',
      'Us din se tum kabhi akele ya udaas nahin rahoge',
    ],
    linesEnglish: [
      'From the day you genuinely delight in your own company',
      'You will never feel lonely or joyless ever again',
    ],
  },
  {
    title: 'गर्मियों की ठंडी शाम',
    titleEnglish: 'Cool Summer Twilight',
    linesHindi: [
      'शाम को छत पर पानी छिड़कने के बाद की खुशबू',
      'और हवा के झोंके दिल को बचपन में ले जाते हैं',
    ],
    linesHinglish: [
      'Shaam ko chhat par paani chhidakne ke baad ki khushboo',
      'Aur hawa ke jhonke dil ko bachpan mein le jaate hain',
    ],
    linesEnglish: [
      'That warm earthen scent after sprinkling water on evening roofs',
      'Carries the heart straight back to carefree childhood summers',
    ],
  },
  {
    title: 'छोटी कामयाबी की मिठाई',
    titleEnglish: 'Sweet Taste of Progress',
    linesHindi: [
      'लक्ष्य की ओर बढ़ाया गया हर छोटा कदम जश्न के लायक है',
      'सफ़र का आनंद लेते हुए ही मंज़िल तक पहुँचना चाहिए',
    ],
    linesHinglish: [
      'Lakshya ki or badhaya gaya har chhota kadam jashn ke laayak hai',
      'Safar ka aanand lete hue hi manzil tak pahunchna chahiye',
    ],
    linesEnglish: [
      'Every modest step taken toward a goal deserves quiet applause',
      'Reaching any summit feels sweetest when you enjoy the climb',
    ],
  },
  {
    title: 'मनमोहक सवेरा',
    titleEnglish: 'Enchanting Dawn',
    linesHindi: [
      'खिड़की का पर्दा हटाते ही जब धूप कमरे में कूद आए',
      'तो नींद में भी होंठों पर मीठी मुस्कान आ जाती है',
    ],
    linesHinglish: [
      'Khidki ka parda hataate hi jab dhoop kamre mein kood aaye',
      'To neend mein bhi honthon par meethi muskaan aa jaati hai',
    ],
    linesEnglish: [
      'When pulling open curtains invites bright sunlight spilling in',
      'Even sleepy lips curve naturally into a soft morning smile',
    ],
  },
  {
    title: 'ख़ुशी की चाबी',
    titleEnglish: 'Key to Gladness',
    linesHindi: [
      'उम्मीदें कम रखो और प्यार ज़्यादा बाँटो दुनिया में',
      'यही हर वक़्त खुश रहने का सबसे आसान मंत्र है',
    ],
    linesHinglish: [
      'Ummeedein kam rakho aur pyaar zyada baanto duniya mein',
      'Yahi har waqt khush rehne ka sabse aasaan mantra hai',
    ],
    linesEnglish: [
      'Expect less perfection from others and give affection freely',
      'That simple habit unlocks lasting cheerfulness every single day',
    ],
  },
  {
    title: 'नए पन्ने की उमंग',
    titleEnglish: 'Excitement of Fresh Starts',
    linesHindi: [
      'नई शुरुआत का उत्साह उम्र का मोहताज नहीं होता',
      'जिस दिन मन मान ले, उसी दिन नया सवेरा हो जाता है',
    ],
    linesHinglish: [
      'Nayi shuruaat ka utsaah umar ka mohtaaj nahin hota',
      'Jis din man maan le, usi din naya savera ho jaata hai',
    ],
    linesEnglish: [
      'Excitement for fresh beginnings never checks your age',
      'The day your heart says yes, a bright new dawn begins',
    ],
  },
  {
    title: 'प्यार भरा संदेश',
    titleEnglish: 'Warm Text From Afar',
    linesHindi: [
      'अचानक किसी पुराने यार का हाल पूछने वाला संदेश',
      'दिल की सारी थकान एक सेकंड में गायब कर देता है',
    ],
    linesHinglish: [
      'Achanak kisi purane yaar ka haal poochhne wala sandesh',
      'Dil ki saari thakaan ek second mein gaayab kar deta hai',
    ],
    linesEnglish: [
      'An unexpected text from an old friend checking how you are',
      'Clears away weeks of weariness in just a single second',
    ],
  },
  {
    title: 'हँसी का जादू',
    titleEnglish: 'Healing Power of Laughs',
    linesHindi: [
      'दिल खोलकर हँस लेने से आधा बोझ उतर जाता है',
      'खुश रहना हमारी सेहत और आत्मा दोनों की खुराक है',
    ],
    linesHinglish: [
      'Dil kholkar hans lene se aadha bojh utar jaata hai',
      'Khush rehna hamaari sehat aur aatma dono ki khuraak hai',
    ],
    linesEnglish: [
      'Laughing wholeheartedly lifts half the weight off your chest',
      'Cheerfulness nourishes both the body and the tired soul alike',
    ],
  },
  {
    title: 'सुंदर सफ़र की याद',
    titleEnglish: 'Joy of Good Travels',
    linesHindi: [
      'पहाड़ों की हवा और दोस्तों के साथ की गई मस्ती',
      'सालों बाद भी चेहरों पर उतनी ही ताज़गी ले आती है',
    ],
    linesHinglish: [
      'Pahaadon ki hawa aur doston ke saath ki gayi masti',
      'Saalon baad bhi chehron par utni hi taazgi le aati hai',
    ],
    linesEnglish: [
      'Cool mountain breezes and silly trips with close friends',
      'Still spark the exact same brightness across faces years later',
    ],
  },
  {
    title: 'नए मौसम का रंग',
    titleEnglish: 'Colors of New Spring',
    linesHindi: [
      'बसंत आता है तो हर पेड़ नए पत्तों से सज जाता है',
      'वैसे ही एक अच्छी खबर पूरे जीवन में बहार लाती है',
    ],
    linesHinglish: [
      'Basant aata hai to har ped naye patton se saj jaata hai',
      'Waise hi ek acchi khabar poore jeevan mein bahaar laati hai',
    ],
    linesEnglish: [
      'When spring arrives, every tree dresses in bright green leaves',
      'Just so, one joyful moment brings spring across an entire life',
    ],
  },
  {
    title: 'सुकून भरा धन्यवाद',
    titleEnglish: 'Grateful Smile at Night',
    linesHindi: [
      'सोने से पहले आज की तीन अच्छी बातें याद कर लेना',
      'देखना हर रात तुम्हारी मुस्कुराते हुए गुज़रेगी',
    ],
    linesHinglish: [
      'Sone se pehle aaj ki teen acchi baatein yaad kar lena',
      'Dekhna har raat tumhaari muskurate hue guzaregi',
    ],
    linesEnglish: [
      'Recall three small good moments before closing your eyes tonight',
      'Watch how peacefully every evening ends with a gentle smile',
    ],
  },
  {
    title: 'दिल से स्वागत',
    titleEnglish: 'Open-Hearted Welcome',
    linesHindi: [
      'जो आया उसका स्वागत और जो बचा उसका आभार रखो',
      'खुशियों को आने के लिए बस इतनी सी जगह काफी है',
    ],
    linesHinglish: [
      'Jo aaya uska swaagat aur jo bacha uska aabhaar rakho',
      'Khushiyon ko aane ke liye bas itni si jagah kaafi hai',
    ],
    linesEnglish: [
      'Welcome whatever arrives and cherish whatever stayed',
      'That small open doorway is plenty for happiness to walk inside',
    ],
  },
  {
    title: 'मासूम हँसी',
    titleEnglish: 'Innocent Joy',
    linesHindi: [
      'छोटे बच्चे की बिना दांतों वाली खिलखिलाती हँसी',
      'दुनिया की सबसे बड़ी चिंता को भी पिघला देती है',
    ],
    linesHinglish: [
      'Chhote bacche ki bina daanton waali khilkhilaati hansi',
      'Duniya ki sabse badi chinta ko bhi pighla deti hai',
    ],
    linesEnglish: [
      'The bright, toothless giggle of a happy little child',
      'Melts even the heaviest worldly worry away in seconds',
    ],
  },
  {
    title: 'ख़ुद से मुलाक़ात',
    titleEnglish: 'Peaceful Solitude',
    linesHindi: [
      'कभी अपने मन के साथ बैठकर चाय पी लेना अकेले',
      'अंदर से शांत रहने का मज़ा कुछ और ही होता है',
    ],
    linesHinglish: [
      'Kabhi apne man ke saath baithkar chai pee lena akele',
      'Andar se shaant rehne ka maza kuch aur hi hota hai',
    ],
    linesEnglish: [
      'Sit quietly over a warm cup with your own thoughts sometimes',
      'Feeling at ease deep inside carries a joy unlike any other',
    ],
  },
  {
    title: 'सच्चे प्यार की मुस्कान',
    titleEnglish: 'Warmth of Affection',
    linesHindi: [
      'जब कोई प्यार से तुम्हारा नाम पुकारकर मुस्कुराए',
      'उस पल से बढ़कर कोई जन्नत ज़मीन पर नहीं होती',
    ],
    linesHinglish: [
      'Jab koi pyaar se tumhaara naam pukaarkar muskuraaye',
      'Us pal se badhkar koi jannat zameen par nahin hoti',
    ],
    linesEnglish: [
      'When someone calls your name affectionately with a warm smile',
      'No finer heaven exists anywhere upon this earth',
    ],
  },
  {
    title: 'सफ़र की मिठास',
    titleEnglish: 'Sweetness Along the Way',
    linesHindi: [
      'मंज़िल पर तो एक दिन पहुँच ही जाओगे तुम दोस्त',
      'रास्ते में मिलने वाले हर फूल की खुशबू लेते चलो',
    ],
    linesHinglish: [
      'Manzil par to ek din pahunch hi jaaoge tum dost',
      'Raaste mein milne waale har phool ki khushboo lete chalo',
    ],
    linesEnglish: [
      'You will surely reach your destination someday, my friend',
      'Pause along the road to enjoy the scent of every flower passed',
    ],
  },
  {
    title: 'चमकता आज',
    titleEnglish: 'Shining Present',
    linesHindi: [
      'बीते कल को जाने दो और आने वाले कल की चिंता छोड़ो',
      'आज का ये खूबसूरत दिन तुम्हारी हँसी का इंतज़ार कर रहा है',
    ],
    linesHinglish: [
      'Beete kal ko jaane do aur aane waale kal ki chinta chhodo',
      'Aaj ka ye khoobsurat din tumhaari hansi ka intezaar kar raha hai',
    ],
    linesEnglish: [
      'Let yesterday rest and release worries about tomorrow',
      'This lovely day right here is waiting for your smile',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'मुस्कान का संक्रामक असर',
    titleEnglish: 'Spreading Cheer',
    linesHindi: [
      'जब तुम दिल से मुस्कुराते हो सुबह-सुबह उठकर',
      'तो आसपास की हवा भी ताज़ी और प्यारी लगने लगती है',
    ],
    linesHinglish: [
      'Jab tum dil se muskurate ho subah-subah uthkar',
      'To aaspaas ki hawa bhi taazi aur pyaari lagne lagti hai',
    ],
    linesEnglish: [
      'When you rise and smile warmly right from the heart',
      'Even the surrounding air feels brighter and sweeter',
    ],
  },
  {
    title: 'अच्छी किताबें और शांत मन',
    titleEnglish: 'Quiet Joy of Stories',
    linesHindi: [
      'शहर के शोर से दूर एक प्यारी सी कहानी पढ़ लेना',
      'मन को छुट्टी पर भेजने का सबसे सरल रास्ता है',
    ],
    linesHinglish: [
      'Shehar ke shor se door ek pyaari si kahaani padh lena',
      'Man ko chhutti par bhejne ka sabse saral raasta hai',
    ],
    linesEnglish: [
      'Slipping away from city noise into a wonderful story',
      'Is the easiest way to send your mind on a peaceful holiday',
    ],
  },
  {
    title: 'त्यौहारों जैसी रौनक',
    titleEnglish: 'Everyday Radiance',
    linesHindi: [
      'दीयों की तरह मन के अंदर भी उम्मीद जलाए रखो',
      'हर साधारण शाम त्यौहार जैसी जगमगा उठेगी',
    ],
    linesHinglish: [
      'Diyon ki tarah man ke andar bhi ummeed jalaaye rakho',
      'Har saadhaaran shaam tyohaar jaisi jagmaga uthegi',
    ],
    linesEnglish: [
      'Keep hope burning softly inside your chest like clay lamps',
      'And even quiet evenings will glow like festive nights',
    ],
  },
  {
    title: 'दोपहर की मीठी झपकी',
    titleEnglish: 'Sweet Afternoon Nap',
    linesHindi: [
      'इतवार की दोपहर को बिना चिंता आधे घंटे सो लेना',
      'बड़े से बड़े आराम से भी ज़्यादा सुकून देता है',
    ],
    linesHinglish: [
      'Itwaar ki dopahar ko bina chinta aadhe ghante so lena',
      'Bade se bade aaraam se bhi zyada sukoon deta hai',
    ],
    linesEnglish: [
      'Catching a peaceful half-hour nap on a quiet Sunday afternoon',
      'Brings deeper relief than the fanciest getaway',
    ],
  },
  {
    title: 'साफ़ आकाश की सुंदरता',
    titleEnglish: 'Clear Blue Skies',
    linesHindi: [
      'बारिश थमने के बाद धुला हुआ नीला आसमान देखकर',
      'लगता है ज़िंदगी भी हर धुंध के बाद साफ़ हो जाती है',
    ],
    linesHinglish: [
      'Baarish thamne ke baad dhula hua neela aasmaan dekhkar',
      'Lagta hai zindagi bhi har dhundh ke baad saaf ho jaati hai',
    ],
    linesEnglish: [
      'Gazing at clear blue skies washed fresh after heavy rain',
      'Reminds us how brightly life clears up after every fog',
    ],
  },
  {
    title: 'ताली बजाकर प्रोत्साहन',
    titleEnglish: 'Cheering Others On',
    linesHindi: [
      'दूसरों की जीत पर दिल से ताली बजाना सीख लो',
      'तुम्हारे अपने हिस्से की खुशियाँ अपने आप बढ़ जाएँगी',
    ],
    linesHinglish: [
      'Doosron ki jeet par dil se taali bajaana seekh lo',
      'Tumhaare apne hisse ki khushiyan apne aap badh jaayengi',
    ],
    linesEnglish: [
      'Learn to clap warmly when someone else celebrates a win',
      'Your own share of joy will multiply naturally in return',
    ],
  },
  {
    title: 'अनमोल स्वादिष्ट पल',
    titleEnglish: 'Shared Dessert',
    linesHindi: [
      'आइसक्रीम के एक कप को हँसते हुए आपस में बाँटना',
      'करोड़ों के होटल से भी ज़्यादा मीठी याद देता है',
    ],
    linesHinglish: [
      'Ice cream ke ek cup ko hanste hue aapas mein baantna',
      'Karodon ke hotel se bhi zyada meethi yaad deta hai',
    ],
    linesEnglish: [
      'Sharing one cup of ice cream while laughing together',
      'Creates sweeter memories than any five-star dining room',
    ],
  },
  {
    title: 'ताज़ा पवन का स्पर्श',
    titleEnglish: 'Cool Touch of Dawn',
    linesHindi: [
      'सुबह पाँच बजे की शांत सड़क और मंद-मंद हवा',
      'पूरे शरीर में नई ऊर्जा और खुशी भर देती है',
    ],
    linesHinglish: [
      'Subah paanch baje ki shaant sadak aur mand-mand hawa',
      'Poore shareer mein nayi oorja aur khushi bhar deti hai',
    ],
    linesEnglish: [
      'Quiet five-AM lanes and a gentle early-morning breeze',
      'Fill every breath with fresh energy and quiet joy',
    ],
  },
  {
    title: 'मन की हलचल में शांति',
    titleEnglish: 'Joyful Calm',
    linesHindi: [
      'बहुत ज़्यादा सोचने की आदत को थोड़ा विराम दो आज',
      'ज़िंदगी को बस सादगी से बहने और खिलने दो आज',
    ],
    linesHinglish: [
      'Bahut zyada sochne ki aadat ko thoda viraam do aaj',
      'Zindagi ko bas saadgi se behne aur khilne do aaj',
    ],
    linesEnglish: [
      'Give overthinking a gentle afternoon off today',
      'Simply let life flow softly and bloom right before you',
    ],
  },
  {
    title: 'सपने और सचाई',
    titleEnglish: 'Joyful Reality',
    linesHindi: [
      'सपनों से भी सुंदर लगती है कभी-कभी हक़ीक़त',
      'जब अपनों का हाथ और दिल में संतोष साथ होता है',
    ],
    linesHinglish: [
      'Sapnon se bhi sundar lagti hai kabhi-kabhi haqeeqat',
      'Jab apnon ka haath aur dil mein santosh saath hota hai',
    ],
    linesEnglish: [
      'Sometimes real life feels even lovelier than our dreams',
      'When loved ones hold your hand and peace fills the chest',
    ],
  },
  {
    title: 'गुलज़ार शाम',
    titleEnglish: 'Blooming Dusk',
    linesHindi: [
      'ढलते सूरज के साथ पंछियों का घर लौटना देखकर',
      'मन में एक अनोखी शांति और खुशी उतर आती है',
    ],
    linesHinglish: [
      'Dhalte sooraj ke saath panchhiyon ka ghar lautna dekhkar',
      'Man mein ek anokhi shaanti aur khushi utar aati hai',
    ],
    linesEnglish: [
      'Watching birds wing homeward beneath a warm setting sun',
      'Settles a calm, gentle joy deep inside the spirit',
    ],
  },
  {
    title: 'ख़ुश रहने की कला',
    titleEnglish: 'Art of Staying Glad',
    linesHindi: [
      'हर चीज़ परफेक्ट हो यह ज़रूरी नहीं खुश होने को',
      'अधूरेपन में भी सुंदरता देख लेना असली कला है',
    ],
    linesHinglish: [
      'Har cheez perfect ho yah zaroori nahin khush hone ko',
      'Adhoorepan mein bhi sundarta dekh lena asli kala hai',
    ],
    linesEnglish: [
      'Nothing needs to be spotless before you allow yourself joy',
      'Spotting beauty inside imperfect days is the true art of living',
    ],
  },
  {
    title: 'नन्हे कदमों की खनक',
    titleEnglish: 'Sound of Little Footsteps',
    linesHindi: [
      'घर में नन्हे पैरों की दौड़ और प्यारी किलकारियाँ',
      'थके हुए दिन को पल भर में स्वर्ग बना देती हैं',
    ],
    linesHinglish: [
      'Ghar mein nanhe pairon ki daud aur pyaari kilkaariyan',
      'Thake hue din ko pal bhar mein swarg bana deti hain',
    ],
    linesEnglish: [
      'Pattering little footsteps and joyful giggles at home',
      'Turn an exhausting day into pure paradise in seconds',
    ],
  },
  {
    title: 'मुस्कुराहट का आईना',
    titleEnglish: 'Mirror Reflecting Smiles',
    linesHindi: [
      'दुनिया बिल्कुल आईने की तरह व्यवहार करती है हमसे',
      'हँसकर देखोगे तो सामने से भी मुस्कान मिलेगी',
    ],
    linesHinglish: [
      'Duniya bilkul aaine ki tarah vyavahaar karti hai humse',
      'Hanskar dekhoge to saamne se bhi muskaan milegi',
    ],
    linesEnglish: [
      'The world mirrors back whatever expression we wear toward it',
      'Greet it smiling, and smiles come greeting right back',
    ],
  },
  {
    title: 'बेफिक्र सफर',
    titleEnglish: 'Lighthearted Journey',
    linesHindi: [
      'सामान कम हो तो यात्रा ज़्यादा मज़ेदार होती है',
      'मन में चिंता कम हो तो ज़िंदगी खुशहाल होती है',
    ],
    linesHinglish: [
      'Saamaan kam ho to yaatra zyada mazedaar hoti hai',
      'Man mein chinta kam ho to zindagi khushhaal hoti hai',
    ],
    linesEnglish: [
      'Traveling light makes every road far more enjoyable',
      'Carrying fewer worries makes an entire life far happier',
    ],
  },
  {
    title: 'अनमोल मुस्कान',
    titleEnglish: 'Smile That Lifts All',
    linesHindi: [
      'तुम्हारी एक हँसी किसी उदास दोस्त का दिन बना सकती है',
      'इसलिए खुद भी खुश रहो और खुशियाँ बाँटते चलो',
    ],
    linesHinglish: [
      'Tumhaari ek hansi kisi udaas dost ka din bana sakti hai',
      'Isliye khud bhi khush raho aur khushiyan baant-te chalo',
    ],
    linesEnglish: [
      'One cheerful laugh from you can rescue a weary friends day',
      'So stay bright inside and scatter joy wherever you walk',
    ],
  },
  {
    title: 'पसंदीदा गाना',
    titleEnglish: 'Heart Lifting Song',
    linesHindi: [
      'इयरफ़ोन में अपना मनपसंद गीत बजते ही',
      'भीड़ भरी बस का सफ़र भी सुहाना लगने लगता है',
    ],
    linesHinglish: [
      'Earphone mein apna manpasand geet bajte hi',
      'Bheed bhari bus ka safar bhi suhana lagne lagta hai',
    ],
    linesEnglish: [
      'The second your favorite tune plays through earphones',
      'Even a crowded bus commute turns curiously pleasant',
    ],
  },
  {
    title: 'सुकून भरी शामें',
    titleEnglish: 'Golden Dusk Peace',
    linesHindi: [
      'बालकनी में बैठकर चाय के साथ आसमान देखना',
      'भागदौड़ के बीच सुकून की सबसे प्यारी सौगात है',
    ],
    linesHinglish: [
      'Balcony mein baithkar chai ke saath aasmaan dekhna',
      'Bhaagdaud ke beech sukoon ki sabse pyaari saugaat hai',
    ],
    linesEnglish: [
      'Watching twilight skies from the balcony with warm tea',
      'Is the sweetest gift of calm amidst busy modern days',
    ],
  },
  {
    title: 'दिल की हल्की धुन',
    titleEnglish: 'Happy Heartbeat',
    linesHindi: [
      'न कोई बड़ी शिकायत है, न किसी से कोई गिला',
      'आज दिल बस खुश रहना चाहता है बिना किसी वजह',
    ],
    linesHinglish: [
      'Na koi badi shikayat hai, na kisi se koi gila',
      'Aaj dil bas khush rehna chaahta hai bina kisi wajah',
    ],
    linesEnglish: [
      'No heavy grudges held, no complaints against a soul',
      'Today my heart simply wants to stay glad without a reason',
    ],
  },
  {
    title: 'मीठा एहसास',
    titleEnglish: 'Warm Feeling Inside',
    linesHindi: [
      'छोटी बातों में बड़ा सुकून तलाश लेना सीख लिया है',
      'तभी तो हर दिन मेरे लिए इतना प्यारा बन गया है',
    ],
    linesHinglish: [
      'Chhoti baaton mein bada sukoon talaash lena seekh liya hai',
      'Tabhi to har din mere liye itna pyaara ban gaya hai',
    ],
    linesEnglish: [
      'I have learned to gather deep peace inside small moments',
      'That is why every ordinary day feels so sweet now',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'ख़ुशी का सरल सूत्र',
    titleEnglish: 'Simple Formula for Joy',
    linesHindi: [
      'तुलना करना बंद करके शुक्र मनाना शुरू कर दो',
      'खुशी खुद चलकर तुम्हारे दरवाज़े पर दस्तक देगी',
    ],
    linesHinglish: [
      'Tulna karna band karke shukr manaana shuru kar do',
      'Khushi khud chalkar tumhaare darwaaze par dastak degi',
    ],
    linesEnglish: [
      'Trade comparison for simple gratitude starting today',
      'And joy itself will walk straight up to knock at your door',
    ],
  },
  {
    title: 'मुस्कुराता परिवार',
    titleEnglish: 'Joyful Home Ties',
    linesHindi: [
      'माँ की हँसी और पापा के चेहरे का संतोष देखकर',
      'दिल की सारी थकान पल भर में छूमंतर हो जाती है',
    ],
    linesHinglish: [
      'Maa ki hansi aur papa ke chehre ka santosh dekhkar',
      'Dil ki saari thakaan pal bhar mein chhoomantar ho jaati hai',
    ],
    linesEnglish: [
      'Seeing mothers laugh and quiet pride upon fathers face',
      'Makes every ounce of fatigue vanish in an instant',
    ],
  },
  {
    title: 'मन की बाग़बानी',
    titleEnglish: 'Tending Inner Joy',
    linesHindi: [
      'मन बिल्कुल किसी बग़ीचे की तरह होता है दोस्त',
      'अच्छे ख़्याल बोओगे तो खुशियाँ ही खुशियाँ खिलेंगी',
    ],
    linesHinglish: [
      'Man bilkul kisi bageeche ki tarah hota hai dost',
      'Acche khayaal booge to khushiyan hi khushiyan khilengi',
    ],
    linesEnglish: [
      'The mind is just like a quiet garden waiting for seeds, friend',
      'Plant bright thoughts inside, and joy blooms everywhere',
    ],
  },
  {
    title: 'सच्चा उत्साह',
    titleEnglish: 'Genuine Delight',
    linesHindi: [
      'जब अपनी मेहनत से किसी को खुश कर पाते हैं हम',
      'उस दिन रात तक चेहरे की मुस्कान नहीं उतरती',
    ],
    linesHinglish: [
      'Jab apni mehnat se kisi ko khush kar paate hain hum',
      'Us din raat tak chehre ki muskaan nahin utarti',
    ],
    linesEnglish: [
      'On days our effort brings real joy to someone dear',
      'That warm smile stays on our face right into sleep',
    ],
  },
  {
    title: 'चहकती सुबह',
    titleEnglish: 'Chirpy Morning',
    linesHindi: [
      'हर सुबह नई रोशनी के साथ एक संदेश लाती है',
      'कि ज़िंदगी अभी भी बेहद प्यारी और उम्मीद भरी है',
    ],
    linesHinglish: [
      'Har subah nayi roshni ke saath ek sandesh laati hai',
      'Ki zindagi abhi bhi behad pyaari aur ummeed bhari hai',
    ],
    linesEnglish: [
      'Every dawn brings a gentle reminder wrapped in sunlight',
      'That life remains wonderfully kind and full of promise',
    ],
  },
  {
    title: 'पुरानी यादों की हँसी',
    titleEnglish: 'Smiling Over Old Stories',
    linesHindi: [
      'पुराने किस्से सुनाते वक़्त जब आँखें चमक उठती हैं',
      'वही बताता है कि हमने ज़िंदगी को कितने प्यार से जिया',
    ],
    linesHinglish: [
      'Purane kisse sunaate waqt jab aankhein chamak uthti hain',
      'Wahi bataata hai ki humne zindagi ko kitne pyaar se jiya',
    ],
    linesEnglish: [
      'When eyes light up fondly while retelling old tales',
      'It proves how richly and joyfully we lived those days',
    ],
  },
  {
    title: 'दया का मीठा स्वाद',
    titleEnglish: 'Sweetness of Generosity',
    linesHindi: [
      'देकर जो सुकून मिलता है इस छोटे से दिल को',
      'वो अपने लिए समेटकर रखने में कभी नहीं मिलता',
    ],
    linesHinglish: [
      'Dekar jo sukoon milta hai is chhote se dil ko',
      'Wo apne liye sametkar rakhne mein kabhi nahin milta',
    ],
    linesEnglish: [
      'The quiet happiness felt when giving freely to another',
      'Never comes from hoarding everything solely for oneself',
    ],
  },
  {
    title: 'साधारण दिन की ख़ूबसूरती',
    titleEnglish: 'Beauty of Ordinary Days',
    linesHindi: [
      'कोई ख़ास मौका न हो तब भी जश्न मना सकते हो',
      'ज़िंदा होना और मुस्कुरा पाना ही सबसे बड़ा जश्न है',
    ],
    linesHinglish: [
      'Koi khaas mauqa na ho tab bhi jashn mana sakte ho',
      'Zinda hona aur muskura paana hi sabse bada jashn hai',
    ],
    linesEnglish: [
      'You need no special occasion on the calendar to celebrate',
      'Being alive and able to smile is celebration enough',
    ],
  },
  {
    title: 'अच्छा माहौल',
    titleEnglish: 'Warm Atmosphere',
    linesHindi: [
      'घर में जब प्यार और सम्मान की हवा बहती है',
      'तो हर कोना ख़ुशियों के फूलों से महक उठता है',
    ],
    linesHinglish: [
      'Ghar mein jab pyaar aur sammaan ki hawa behti hai',
      'To har kona khushiyon ke phoolon se mehak uthta hai',
    ],
    linesEnglish: [
      'When kindness and mutual respect breeze through a home',
      'Every corner blooms fragrant with quiet happiness',
    ],
  },
  {
    title: 'मन की मधुरता',
    titleEnglish: 'Sweetness of Heart',
    linesHindi: [
      'कड़वाहट दिल से निकालते ही जगह खाली हो जाती है',
      'और उस खाली जगह में सुकून आकर बस जाता है',
    ],
    linesHinglish: [
      'Kadwaahat dil se nikaalte hi jagah khaali ho jaati hai',
      'Aur us khaali jagah mein sukoon aakar bas jaata hai',
    ],
    linesEnglish: [
      'The moment bitterness leaves the chest, space opens up',
      'And serene happiness moves gently right inside to stay',
    ],
  },
  {
    title: 'आनंद भरा सफ़र',
    titleEnglish: 'Joyful Mile by Mile',
    linesHindi: [
      'सिर्फ़ मंज़िल का इंतज़ार करने वाले थक जाते हैं',
      'जो हर कदम पर मुस्कुराते हैं, वो सफ़र जीत लेते हैं',
    ],
    linesHinglish: [
      'Sirf manzil ka intezaar karne waale thak jaate hain',
      'Jo har kadam par muskurate hain, wo safar jeet lete hain',
    ],
    linesEnglish: [
      'Those eyeing only the far finish line soon grow weary',
      'Those who smile at every step win the whole journey',
    ],
  },
  {
    title: 'ताज़ी उम्मीदें',
    titleEnglish: 'Fresh Morning Hopes',
    linesHindi: [
      'हर ढलती शाम के बाद एक उजली सुबह खड़ी है',
      'बस मुस्कुराते रहो, ज़िंदगी बहुत खूबसूरत बनी है',
    ],
    linesHinglish: [
      'Har dhalti shaam ke baad ek ujli subah khadi hai',
      'Bas muskurate raho, zindagi bahut khoobsurat bani hai',
    ],
    linesEnglish: [
      'Behind every fading sunset waits a bright, clean dawn',
      'Simply keep smiling—life was woven with wonderful grace',
    ],
  },
  {
    title: 'हँसते हुए मौसम',
    titleEnglish: 'Cheerful Seasons',
    linesHindi: [
      'ठंडी बारिश, गुनगुनी धूप और खिली हुई चाँदनी',
      'हर मौसम ने तुम्हें खुश रहने का नया बहाना दिया है',
    ],
    linesHinglish: [
      'Thandi baarish, gunguni dhoop aur khili hui chaandni',
      'Har mausam ne tumhein khush rehne ka naya bahaana diya hai',
    ],
    linesEnglish: [
      'Cool monsoon rain, warm winter sun, and silver moonlight',
      'Every season hands you a fresh excuse to smile warmly',
    ],
  },
  {
    title: 'अच्छी नीयत की ख़ुशबू',
    titleEnglish: 'Fragrance of Kindness',
    linesHindi: [
      'जहाँ निस्वार्थ प्यार हो और चेहरे पर सच्ची हँसी हो',
      'वहाँ हर दिन सुकून की नई कहानी बन जाती है',
    ],
    linesHinglish: [
      'Jahaan niswaarth pyaar ho aur chehre par sacchi hansi ho',
      'Wahaan har din sukoon ki nayi kahaani ban jaati hai',
    ],
    linesEnglish: [
      'Where selfless care meets an honest, gentle laugh',
      'Every day turns into a lovely new chapter of peace',
    ],
  },
  {
    title: 'हल्के पंख',
    titleEnglish: 'Featherlight Spirits',
    linesHindi: [
      'ईर्ष्या और तुलना का बोझ उतारकर देखो एक बार',
      'मन पंछी बनकर खुले आकाश में उड़ने लगेगा',
    ],
    linesHinglish: [
      'Irshya aur tulna ka bojh utaarkar dekho ek baar',
      'Man panchhi bankar khule aakaash mein udne lagega',
    ],
    linesEnglish: [
      'Set down the weight of envy and comparison just once',
      'Your heart will turn into a free bird soaring skyward',
    ],
  },
  {
    title: 'अपनों की खुशी',
    titleEnglish: 'Happy Loved Ones',
    linesHindi: [
      'जब तुम्हारे अपनों के चेहरे खुशी से दमकते दिखें',
      'उससे बड़ी कोई कामयाबी इस संसार में नहीं होती',
    ],
    linesHinglish: [
      'Jab tumhaare apnon ke chehre khushi se damakte dikhein',
      'Usse badi koi kaamyaabi is sansaar mein nahin hoti',
    ],
    linesEnglish: [
      'Seeing the faces of your loved ones glow with real joy',
      'Stands taller than any earthly achievement could ever be',
    ],
  },
  {
    title: 'दिल की उमंग',
    titleEnglish: 'Spark in the Heart',
    linesHindi: [
      'उम्र चाहे कितनी भी बढ़ती जाए कैलेंडर के पन्नों पर',
      'दिल की उमंग हमेशा बीस साल जैसी जवान रहनी चाहिए',
    ],
    linesHinglish: [
      'Umar chaahe kitni bhi badhti jaaye calendar ke pannon par',
      'Dil ki umang hamesha bees saal jaisi jawaan rehni chahiye',
    ],
    linesEnglish: [
      'No matter how many years turn on the calendar pages',
      'Keep your inner enthusiasm young, eager, and bright',
    ],
  },
  {
    title: 'मुस्कुराता हुआ आज',
    titleEnglish: 'Smiling Through Today',
    linesHindi: [
      'ज़िंदगी को थोड़ा कम सुलझाओ और थोड़ा ज़्यादा जी लो',
      'आज की मुस्कान को कल के लिए मत बचाकर रखो',
    ],
    linesHinglish: [
      'Zindagi ko thoda kam suljhao aur thoda zyada jee lo',
      'Aaj ki muskaan ko kal ke liye mat bachaakar rakho',
    ],
    linesEnglish: [
      'Analyze life a little less and live it a little more',
      'Never save todays smile waiting for some distant tomorrow',
    ],
  },
  {
    title: 'चहकती हुई ज़िंदगी',
    titleEnglish: 'Vibrant Joyful Life',
    linesHindi: [
      'छोटी-छोटी खुशियों को गले लगाने की आदत डाल लो',
      'तुम्हारी पूरी ज़िंदगी खुद ही महफ़िल बन जाएगी',
    ],
    linesHinglish: [
      'Chhoti-chhoti khushiyon ko gale lagaane ki aadat daal lo',
      'Tumhaari poori zindagi khud hi mehfil ban jaayegi',
    ],
    linesEnglish: [
      'Make a habit of welcoming every tiny joy with open arms',
      'And your whole life turns into a warm, lively celebration',
    ],
  },
  {
    title: 'हर पल का आनंद',
    titleEnglish: 'Savor Every Breath',
    linesHindi: [
      'साँसों का चलना ही ऊपर वाले का सबसे बड़ा उपहार है',
      'हर पल को प्यार, मुस्कान और धन्यवाद के साथ जियो',
    ],
    linesHinglish: [
      'Saanson ka chalna hi upar waale ka sabse bada upahaar hai',
      'Har pal ko pyaar, muskaan aur dhanyavaad ke saath jiyo',
    ],
    linesEnglish: [
      'Each steady breath itself is lifes most precious gift',
      'Live every moment wrapped in warmth, smiles, and gratitude',
    ],
  },
];

export const UNIQUE_KHUSHI_140 = buildUniqueShayaris(
  'khushi',
  'Khushi Shayari (खुशी शायरी)',
  '😊',
  61,
  KHUSHI_ENTRIES
);
