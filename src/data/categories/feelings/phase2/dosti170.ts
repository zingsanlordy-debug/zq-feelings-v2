import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const DOSTI_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'चाय और पक्के यार',
    titleEnglish: 'Chai and True Friends',
    linesHindi: [
      'महँगे कैफ़े की कॉफ़ी से ज़्यादा सुकून वहाँ मिलता है',
      'जहाँ नुक्कड़ की चाय और दो पागल दोस्त साथ हों',
    ],
    linesHinglish: [
      'Mehange cafe ki coffee se zyada sukoon wahaan milta hai',
      'Jahaan nukkad ki chai aur do paagal dost saath hon',
    ],
    linesEnglish: [
      'More peace lives there than in any fancy pricey cafe',
      'Where a roadside tea stall meets two crazy lifelong friends',
    ],
  },
  {
    title: 'बिना मतलब का साथ',
    titleEnglish: 'Friendship Without Agenda',
    linesHindi: [
      'मतलब की दुनिया में बस एक यही रिश्ता खरा निकला',
      'दोस्ती ने कभी जेब नहीं देखी, सिर्फ़ दिल का हाल पूछा',
    ],
    linesHinglish: [
      'Matlab ki duniya mein bas ek yahi rishta khara nikla',
      'Dosti ne kabhi jeb nahin dekhi, sirf dil ka haal poochha',
    ],
    linesEnglish: [
      'In a calculating world, only this bond proved pure gold',
      'True friendship never checked my wallet, only how my heart was doing',
    ],
  },
  {
    title: 'आधी रात का कॉल',
    titleEnglish: 'Midnight Call Friend',
    linesHindi: [
      'ज़िंदगी में कम से कम एक यार ऐसा ज़रूर होना चाहिए',
      'जो रात के तीन बजे भी कहे — बोल भाई, किधर आना है',
    ],
    linesHinglish: [
      'Zindagi mein kam se kam ek yaar aisa zaroor hona chahiye',
      'Jo raat ke teen baje bhi kahe — bol bhai, kidhar aana hai',
    ],
    linesEnglish: [
      'Everyone deserves at least one friend like this in life',
      'Who answers at three in the morning saying—just tell me where to show up',
    ],
  },
  {
    title: 'बचपन वाली गली',
    titleEnglish: 'Old Childhood Lane',
    linesHindi: [
      'साल गुज़र गए पर आज भी मिलते ही वही बचपना जाग जाता है',
      'असली यारों के आगे उम्र का हर हिसाब हार जाता है',
    ],
    linesHinglish: [
      'Saal guzar gaye par aaj bhi milte hi wahi bachpana jaag jaata hai',
      'Asli yaaron ke aage umr ka har hisaab haar jaata hai',
    ],
    linesEnglish: [
      'Years slipped by, yet one meetup brings back our childhood spark',
      'Every count of age loses its power in front of real friends',
    ],
  },
  {
    title: 'सच्चे दोस्त की पहचान',
    titleEnglish: 'Sign of a Real Buddy',
    linesHindi: [
      'मुँह पर गाली और पीठ पीछे तारीफ़ करने का हुनर रखते हैं',
      'कमबख़्त दोस्त ही हैं जो हर मुश्किल को आसान करते हैं',
    ],
    linesHinglish: [
      'Munh par gaali aur peeth peechhe taarif karne ka hunar rakhte hain',
      'Kambakht dost hi hain jo har mushkil ko aasaan karte hain',
    ],
    linesEnglish: [
      'They roast you to your face and defend your name behind your back',
      'Crazy friends are the ones who turn every storm into something light',
    ],
  },
  {
    title: 'भीड़ में भी अपना',
    titleEnglish: 'My Person in the Crowd',
    linesHindi: [
      'हज़ार लोगों की महफ़िल में भी नज़रें जिसे ढूँढती हैं',
      'वही दोस्त है जिसकी एक मुस्कान से थकान उतरती है',
    ],
    linesHinglish: [
      'Hazaar logon ki mehfil mein bhi nazrein jise dhoondhti hain',
      'Wahi dost hai jiski ek muskaan se thakaan utarti hai',
    ],
    linesEnglish: [
      'Even inside a hall of a thousand people, my eyes look for one face',
      'That is the friend whose single smile melts away all exhaustion',
    ],
  },
  {
    title: 'ख़ामोशी पढ़ने वाला यार',
    titleEnglish: 'Reader of Unsaid Words',
    linesHindi: [
      'जब मैंने मुस्कुराकर कहा कि सब बिल्कुल ठीक चल रहा है',
      'उसी ने गले लगाकर पूछा — सच बता, बात क्या सता रही है',
    ],
    linesHinglish: [
      'Jab maine muskuraakar kaha ki sab bilkul theek chal raha hai',
      'Usi ne gale lagaakar poochha — sach bata, baat kya sata rahi hai',
    ],
    linesEnglish: [
      'When I forced a smile and claimed everything was going fine',
      'Only my friend hugged me and asked—tell me honestly what is hurting',
    ],
  },
  {
    title: 'यारी का दस्तूर',
    titleEnglish: 'Code of Brotherhood',
    linesHindi: [
      'वक्त बुरा हो तो लोग रास्ता बदल लेते हैं अक्सर सुना है',
      'मेरा यार तो अंधेरों में भी हाथ थामे साथ खड़ा रहा है',
    ],
    linesHinglish: [
      'Waqt bura ho to log raasta badal lete hain aksar suna hai',
      'Mera yaar to andheron mein bhi haath thaame saath khada raha hai',
    ],
    linesEnglish: [
      'People often switch sidewalks when times turn rough, so I heard',
      'My friend stayed right beside me holding steady through the dark',
    ],
  },
  {
    title: 'सुकून भरा रिश्ता',
    titleEnglish: 'Effortless Bond',
    linesHindi: [
      'जिससे महीनों बात न हो फिर भी दिल में दूरी न आए',
      'ऐसी बेतकल्लुफ़ यारी हर किसी के हिस्से में कहाँ आए',
    ],
    linesHinglish: [
      'Jisse mahinon baat na ho phir bhi dil mein doori na aaye',
      'Aisi betakalluf yaari har kisi ke hisse mein kahaan aaye',
    ],
    linesEnglish: [
      'Not talking for months yet feeling zero distance when you reconnect',
      'Not everyone is lucky enough to own a friendship that effortless',
    ],
  },
  {
    title: 'ख़ुशी और ग़म का हिस्सेदार',
    titleEnglish: 'Equal Partner in Life',
    linesHindi: [
      'आधा ग़म बांटने वाला और दोगुनी ख़ुशी देने वाला यार',
      'ज़िंदगी की सबसे महँगी दौलत से भी बड़ा होता है मेरे यार',
    ],
    linesHinglish: [
      'Aadha gham baantne waala aur doguni khushi dene waala yaar',
      'Zindagi ki sabse mehangi daulat se bhi bada hota hai mere yaar',
    ],
    linesEnglish: [
      'A friend who splits your sorrow in half and doubles every joy',
      'Is worth far more than the rarest fortune in this world',
    ],
  },
  {
    title: 'बैकबेंच वाली यादें',
    titleEnglish: 'Backbench Memories',
    linesHindi: [
      'स्कूल की आखिरी बेंच और वो बेफ़िक्र हँसी के ठहाके',
      'आज भी याद आते हैं जब ज़िंदगी के इम्तिहान सताते हैं आके',
    ],
    linesHinglish: [
      'School ki aakhiri bench aur wo befikr hansi ke thahaake',
      'Aaj bhi yaad aate hain jab zindagi ke imtihaan sataate hain aake',
    ],
    linesEnglish: [
      'The last bench at school and those carefree bursts of laughter',
      'Still cross my mind whenever adult life feels a little too heavy',
    ],
  },
  {
    title: 'ताक़त बनकर साथ रहना',
    titleEnglish: 'Strength in Tough Times',
    linesHindi: [
      'जब सारा शहर मेरी हार का तमाशा देखने को बैठा था',
      'तब एक दोस्त चुपचाप मेरी ढाल बनकर मेरे आगे खड़ा था',
    ],
    linesHinglish: [
      'Jab saara shehar meri haar ka tamaasha dekhne ko baitha tha',
      'Tab ek dost chupchaap meri dhaal bankar mere aage khada tha',
    ],
    linesEnglish: [
      'When the whole crowd sat waiting to watch me fall apart',
      'One loyal friend quietly stepped forward to stand as my shield',
    ],
  },
  {
    title: 'नए शहर में पुरानी यारी',
    titleEnglish: 'Old Bond New City',
    linesHindi: [
      'मीलों की दूरी भी उस यारी को कम नहीं कर सकी कभी',
      'जिनकी यादें मोबाइल की गैलरी में आज भी साँस लेती हैं अभी',
    ],
    linesHinglish: [
      'Meelon ki doori bhi us yaari ko kam nahin kar saki kabhi',
      'Jinki yaadein mobile ki gallery mein aaj bhi saans leti hain abhi',
    ],
    linesEnglish: [
      'Even miles between cities could never shrink our friendship',
      'Our favorite memories still breathe right inside my phone gallery',
    ],
  },
  {
    title: 'दिल की अदालत में दोस्ती',
    titleEnglish: 'Unspoken Trust',
    linesHindi: [
      'सफ़ाई माँगनी पड़े तो वो रिश्ता महज़ औपचारिकता है',
      'सच्ची दोस्ती में तो बिना कहे ही हर ग़लती माफ़ हो जाया करती है',
    ],
    linesHinglish: [
      'Safaai maangni pade to wo rishta mehaz aupchaarikta hai',
      'Sacchi dosti mein to bina kahe hi har galti maaf ho jaaya karti hai',
    ],
    linesEnglish: [
      'If you constantly have to explain yourself, that bond is just formality',
      'In real friendship, half the mistakes are forgiven before an apology starts',
    ],
  },
  {
    title: 'कमबख़्त हँसी की वजह',
    titleEnglish: 'Reason Behind My Laugh',
    linesHindi: [
      'बिना किसी वजह के घंटों हँसा देने का जादू सिर्फ़ इनमें है',
      'मेरे पागल दोस्तों के बिना ये ज़िंदगी अधूरी सी लगती है',
    ],
    linesHinglish: [
      'Bina kisi wajah ke ghanton hansa dene ka jaadu sirf inmein hai',
      'Mere paagal doston ke bina ye zindagi adhoori si lagti hai',
    ],
    linesEnglish: [
      'Only they possess the magic to make me laugh for hours over nothing',
      'Without my crazy friends, life always feels half complete',
    ],
  },
  {
    title: 'मुश्किल वक़्त का सहारा',
    titleEnglish: 'Anchor in Rough Seas',
    linesHindi: [
      'जब जेब खाली और हौसला थोड़ा डगमगाया सा लगा मुझे',
      'यारों ने कंधे पर हाथ रखकर कहा — चल, साथ सँभाल लेंगे तुझे',
    ],
    linesHinglish: [
      'Jab jeb khaali aur hausla thoda dagmagaaya sa laga mujhe',
      'Yaaron ne kandhe par haath rakhkar kaha — chal, saath sambhaal lenge tujhe',
    ],
    linesEnglish: [
      'When my pockets were empty and my confidence began to shake',
      'My friends rested a hand on my shoulder and said—we will handle it together',
    ],
  },
  {
    title: 'फ़िल्टर से दूर यारी',
    titleEnglish: 'No Filter Friendship',
    linesHindi: [
      'न बनावट की मुस्कान, न कोई दिखावे का लिबास पहना हमने',
      'दोस्ती वो घर है जहाँ हम जैसे हैं वैसे ही अपनाए जाते हैं',
    ],
    linesHinglish: [
      'Na banaawat ki muskaan, na koi dikhaawe ka libaas pehna humne',
      'Dosti wo ghar hai jahaan hum jaise hain waise hi apnaaye jaate hain',
    ],
    linesEnglish: [
      'No fake smiles and no polished mask to keep up appearances',
      'Friendship is the one home where you are accepted exactly as you are',
    ],
  },
  {
    title: 'गिने-चुने पर हीरे जैसे',
    titleEnglish: 'Few But Diamonds',
    linesHindi: [
      'भीड़ इकट्ठी करने का शौक़ कभी पाला ही नहीं हमने यारो',
      'मेरे पास दो-चार दोस्त हैं, पर सब के सब कोहिनूर जैसे हैं',
    ],
    linesHinglish: [
      'Bheed ikatthi karne ka shauq kabhi paala hi nahin humne yaaro',
      'Mere paas do-chaar dost hain, par sab ke sab Kohinoor jaise hain',
    ],
    linesEnglish: [
      'I never cared about collecting a noisy crowd around me',
      'I only keep three or four friends, and every single one is a diamond',
    ],
  },
  {
    title: 'वक़्त के साथ और गहरी',
    titleEnglish: 'Deeper With Time',
    linesHindi: [
      'हर रिश्ता वक़्त की धूल में थोड़ा धुंधला पड़ जाता है',
      'बस एक यारी है जो साल दर साल और ज़्यादा निखर आती है',
    ],
    linesHinglish: [
      'Har rishta waqt ki dhool mein thoda dhundhla pad jaata hai',
      'Bas ek yaari hai jo saal dar saal aur zyada nikhar aati hai',
    ],
    linesEnglish: [
      'Most bonds fade a little under the dust of passing years',
      'Friendship is the rare one that grows brighter every single season',
    ],
  },
  {
    title: 'बाइक राइड और बातें',
    titleEnglish: 'Late Night Ride Talks',
    linesHindi: [
      'सुनसान सड़क, ठंडी हवा और पीछे बैठे यार की बेतुकी बातें',
      'किसी महँगे टूर से भी ज़्यादा सुकून देती हैं ऐसी शामें और रातें',
    ],
    linesHinglish: [
      'Sunsaan sadak, thandi hawa aur peechhe baithe yaar ki betuki baatein',
      'Kisi mehange tour se bhi zyada sukoon deti hain aisi shaamein aur raatein',
    ],
    linesEnglish: [
      'An open road, cool breeze, and a friend talking nonsense behind you',
      'Nights like that heal better than any luxury vacation ever could',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'नाराज़गी पल भर की',
    titleEnglish: 'Short-Lived Fights',
    linesHindi: [
      'लड़ते हैं ऐसे जैसे कल से शक्ल भी नहीं देखेंगे दोबारा',
      'और पाँच मिनट बाद ही पूछते हैं — चाय पीने चलेगा क्या यारा',
    ],
    linesHinglish: [
      'Ladte hain aise jaise kal se shakl bhi nahin dekhenge dobaara',
      'Aur paanch minute baad hi poochhte hain — chai peene chalega kya yaara',
    ],
    linesEnglish: [
      'We argue like we will never speak to each other again',
      'And five minutes later ask—want to grab tea right now, buddy',
    ],
  },
  {
    title: 'कंधे से कंधा मिलाकर',
    titleEnglish: 'Allies in Every Battle',
    linesHindi: [
      'किस्मत में अगर अच्छे दोस्त लिखे हों तो आधी जंग जीत गए समझो',
      'सही यार साथ हों तो पत्थर भी रास्तों से हट जाते हैं समझो',
    ],
    linesHinglish: [
      'Kismat mein agar acche dost likhe hon to aadhi jung jeet gaye samjho',
      'Sahi yaar saath hon to patthar bhi raaston se hat jaate hain samjho',
    ],
    linesEnglish: [
      'If good friends are written in your fate, half your battle is won',
      'With true buddies beside you, even boulders clear out of your path',
    ],
  },
  {
    title: 'ख़ुशकिस्मत हूँ मैं',
    titleEnglish: 'Lucky to Have You',
    linesHindi: [
      'हर किसी को ज़िंदगी में परिवार के बाहर परिवार नहीं मिलता',
      'मैं ख़ुशकिस्मत हूँ कि मुझे दोस्तों के रूप में भाई मिले हैं',
    ],
    linesHinglish: [
      'Har kisi ko zindagi mein parivaar ke baahar parivaar nahin milta',
      'Main khushkismat hoon ki mujhe doston ke roop mein bhai mile hain',
    ],
    linesEnglish: [
      'Not everyone finds a second family outside their own home',
      'I am truly blessed to have found brothers disguised as friends',
    ],
  },
  {
    title: 'ग़म छुपाने न देना',
    titleEnglish: 'Never Letting Me Hide Pain',
    linesHindi: [
      'दुनिया को लगता है मैं बहुत मज़बूत इंसान हूँ अंदर से',
      'सिर्फ़ मेरा यार जानता है कि मैं कब चुपचाप टूट जाता हूँ',
    ],
    linesHinglish: [
      'Duniya ko lagta hai main bahut mazboot insaan hoon andar se',
      'Sirf mera yaar jaanta hai ki main kab chupchaap toot jaata hoon',
    ],
    linesEnglish: [
      'The world assumes I am unbreakable from the inside out',
      'Only my best friend knows the exact moment I quietly crack',
    ],
  },
  {
    title: 'कॉलेज कैंटीन की रौनक',
    titleEnglish: 'College Canteen Magic',
    linesHindi: [
      'एक प्लेट समोसे और चार दोस्तों के बीच बंटती हँसी',
      'ज़िंदगी की सबसे अमीर यादें हमेशा कम पैसों में ही बनीं',
    ],
    linesHinglish: [
      'Ek plate samose aur chaar doston ke beech bantti hansi',
      'Zindagi ki sabse ameer yaadein hamesha kam paison mein hi baneen',
    ],
    linesEnglish: [
      'One plate of snacks shared alongside four friends laughing loudly',
      'Life’s richest memories were always built on the smallest budgets',
    ],
  },
  {
    title: 'सलाह नहीं, साथ चाहिए',
    titleEnglish: 'Presence Over Advice',
    linesHindi: [
      'दुनिया मुफ़्त के मशवरे देकर आगे बढ़ जाती है मुसीबत में',
      'सच्चा दोस्त बस पास बैठकर सारा बोझ हल्का कर जाता है',
    ],
    linesHinglish: [
      'Duniya muft ke mashware dekar aage badh jaati hai museebat mein',
      'Saccha dost bas paas baithkar saara bojh halka kar jaata hai',
    ],
    linesEnglish: [
      'People hand out free lectures and walk away when trouble hits',
      'A real friend just sits beside you until half the weight disappears',
    ],
  },
  {
    title: 'दूरी से फ़र्क़ नहीं',
    titleEnglish: 'Distance Changes Nothing',
    linesHindi: [
      'शहर बदल जाने से दिल के पते कभी नहीं बदलते मेरे दोस्त',
      'एक कॉल की घंटी आज भी हमें उसी पुराने मोड़ पर ले आती है',
    ],
    linesHinglish: [
      'Shehar badal jaane se dil ke pate kabhi nahin badalte mere dost',
      'Ek call ki ghanti aaj bhi humein usi purane mod par le aati hai',
    ],
    linesEnglish: [
      'Changing cities never alters the address written on the heart',
      'One phone ring still brings us right back to our favorite corner',
    ],
  },
  {
    title: 'यारों की दुआ',
    titleEnglish: 'Friends Who Pray',
    linesHindi: [
      'माँ-बाप के बाद अगर कोई दिल से कामयाबी माँगता है तुम्हारी',
      'तो वो एक सच्चा दोस्त है जो तुम्हारी जीत में ख़ुद को देखता है',
    ],
    linesHinglish: [
      'Maa-baap ke baad agar koi dil se kaamyaabi maangta hai tumhaari',
      'To wo ek saccha dost hai jo tumhaari jeet mein khud ko dekhta hai',
    ],
    linesEnglish: [
      'After parents, if anyone genuinely prays for your success',
      'It is the true friend who celebrates your win like it is their own',
    ],
  },
  {
    title: 'अटूट भरोसा',
    titleEnglish: 'Unshaken Faith',
    linesHindi: [
      'हज़ार अफ़वाहें भी उस रिश्ते को हिला नहीं पातीं कभी',
      'जिसकी नींव दिखावे पर नहीं, सच्चे भरोसे पर रखी गई हो',
    ],
    linesHinglish: [
      'Hazaar afwaahein bhi us rishte ko hila nahin paateen kabhi',
      'Jiski neev dikhaawe par nahin, sacche bharose par rakhi gayi ho',
    ],
    linesEnglish: [
      'Not even a thousand rumors can shake a bond like ours',
      'When its foundation is built on pure trust instead of show',
    ],
  },
  {
    title: 'पागलपन का पार्टनर',
    titleEnglish: 'Partner in Madness',
    linesHindi: [
      'समझदार लोग तो हर मोड़ पर मिल जाएँगे राह चलते हुए',
      'पर तुम्हारे जैसा पागल साथी मिलना क़िस्मत की बात है यार',
    ],
    linesHinglish: [
      'Samajhdaar log to har mod par mil jaayenge raah chalte hue',
      'Par tumhaare jaisa paagal saathi milna qismat ki baat hai yaar',
    ],
    linesEnglish: [
      'Sensible acquaintances show up around every second street corner',
      'Finding a wonderfully crazy partner in crime like you is pure luck',
    ],
  },
  {
    title: 'इज़्ज़त की रखवाली',
    titleEnglish: 'Guarding Your Name',
    linesHindi: [
      'जहाँ तुम्हारी ग़ैर-मौजूदगी में भी कोई तुम्हारे पक्ष में बोले',
      'समझ लेना वही इंसान दोस्ती के सही मायने जानता है',
    ],
    linesHinglish: [
      'Jahaan tumhaari gair-maujoodgi mein bhi koi tumhaare paksh mein bole',
      'Samajh lena wahi insaan dosti ke sahi maayne jaanta hai',
    ],
    linesEnglish: [
      'Where someone speaks up for you even when you are not in the room',
      'Know right then that they understand the real meaning of loyalty',
    ],
  },
  {
    title: 'उम्मीद की किरण',
    titleEnglish: 'Light in Dark Days',
    linesHindi: [
      'जब हर दरवाज़ा बंद लगने लगे और मन बोझिल हो जाए',
      'तब दोस्त की एक आवाज़ भी नई उम्मीद जगा देती है दिल में',
    ],
    linesHinglish: [
      'Jab har darwaaza band lagne lage aur man bojhil ho jaaye',
      'Tab dost ki ek aawaaz bhi nayi ummeed jaga deti hai dil mein',
    ],
    linesEnglish: [
      'When every door feels locked and your mind grows heavy',
      'Even a quick voice note from a friend lights fresh hope inside',
    ],
  },
  {
    title: 'बिन बोले मदद',
    titleEnglish: 'Silent Help',
    linesHindi: [
      'दोस्ती वो नहीं जो फोटो खिंचवाने के लिए हाथ मिलाए',
      'दोस्ती वो है जो बिना मांगे तुम्हारी कमी पूरी कर जाए',
    ],
    linesHinglish: [
      'Dosti wo nahin jo photo khinchwaane ke liye haath milaaye',
      'Dosti wo hai jo bina maange tumhaari kami poori kar jaaye',
    ],
    linesEnglish: [
      'Friendship is not about shaking hands just for social media photos',
      'It is quietly stepping in to cover your gap before you even ask',
    ],
  },
  {
    title: 'सच्चाई का आईना',
    titleEnglish: 'Mirror of Truth',
    linesHindi: [
      'झूठी तारीफ़ करने वाले तो दरबार में बहुत मिल जाते हैं',
      'असली यार वही है जो ग़लती पर कान खींचकर सही राह दिखाए',
    ],
    linesHinglish: [
      'Jhoothi taarif karne waale to darbaar mein bahut mil jaate hain',
      'Asli yaar wahi hai jo galti par kaan kheenchar sahi raah dikhaaye',
    ],
    linesEnglish: [
      'Flatterers crowd around anyone who likes empty praise',
      'A real friend pulls you aside when you are wrong and sets you straight',
    ],
  },
  {
    title: 'दोस्त यार की महफ़िल',
    titleEnglish: 'Circle of True Friends',
    linesHindi: [
      'न राजा बनने का घमंड, न रंक होने का डर सताता है यहाँ',
      'यारों की महफ़िल में हर शख़्स बस अपना सा नज़र आता है',
    ],
    linesHinglish: [
      'Na raja banne ka ghamand, na rank hone ka dar sataata hai yahaan',
      'Yaaron ki mehfil mein har shakhs bas apna sa nazar aata hai',
    ],
    linesEnglish: [
      'No pride of status and no fear of falling short exists here',
      'Inside a circle of true friends, everyone feels completely like home',
    ],
  },
  {
    title: 'मुस्कान लौटाने वाला',
    titleEnglish: 'Bringer of Smiles',
    linesHindi: [
      'पूरे दिन की थकान और चिड़चिड़ाहट बस एक पल में ग़ायब हो गई',
      'जब शाम को पुराने दोस्त के साथ बेवजह गपशप शुरू हो गई',
    ],
    linesHinglish: [
      'Poore din ki thakaan aur chidchidahat bas ek pal mein gaayab ho gayi',
      'Jab shaam ko purane dost ke saath bewajah gapshap shuru ho gayi',
    ],
    linesEnglish: [
      'All day exhaustion and irritation vanished in a single minute',
      'The moment evening gossip started with my oldest friend',
    ],
  },
  {
    title: 'ज़िंदगी भर का वादा',
    titleEnglish: 'Lifelong Promise',
    linesHindi: [
      'प्यार के वादे टूटते देखे हैं मैंने वक़्त की आंधियों में',
      'पर दोस्ती के नाम पर आज भी कई यार उम्र भर साथ निभाते हैं',
    ],
    linesHinglish: [
      'Pyaar ke waade toot-te dekhe hain maine waqt ki aandhiyon mein',
      'Par dosti ke naam par aaj bhi kai yaar umr bhar saath nibhaate hain',
    ],
    linesEnglish: [
      'I have watched romantic promises snap in the storms of time',
      'Yet in the name of friendship, real pals stay side by side for life',
    ],
  },
  {
    title: 'साथ की क़ीमत',
    titleEnglish: 'Value of Togetherness',
    linesHindi: [
      'महँगे तोहफ़े देने से दोस्ती बड़ी नहीं हो जाती कभी',
      'बस ज़रूरत के वक़्त मौजूद रहना ही सबसे बड़ा तोहफ़ा है अभी',
    ],
    linesHinglish: [
      'Mehange tohfe dene se dosti badi nahin ho jaati kabhi',
      'Bas zaroorat ke waqt maujood rehna hi sabse bada tohfa hai abhi',
    ],
    linesEnglish: [
      'Expensive presents never make a friendship bigger than it is',
      'Simply showing up when it counts is still the greatest gift of all',
    ],
  },
  {
    title: 'दिल से जुड़ा बंधन',
    titleEnglish: 'Heart-Bound Loyalty',
    linesHindi: [
      'ख़ून का रिश्ता न सही पर हर धड़कन में नाम शामिल है उनका',
      'कुछ दोस्त ज़िंदगी में आकर सारी कमियाँ पूरी कर जाते हैं',
    ],
    linesHinglish: [
      'Khoon ka rishta na sahi par har dhadkan mein naam shaamil hai unka',
      'Kuch dost zindagi mein aakar saari kamiyaan poori kar jaate hain',
    ],
    linesEnglish: [
      'Not bound by blood, yet their name lives in every honest beat',
      'Some friends walk into your life and heal every missing piece',
    ],
  },
  {
    title: 'सफ़र का हमराही',
    titleEnglish: 'Road Companion',
    linesHindi: [
      'मंज़िलें कितनी भी दूर हों, सफ़र ख़ूबसूरत बन ही जाता है',
      'जब तुम्हारे जैसा ज़िंदादिल यार सफ़र में साथ मिल जाता है',
    ],
    linesHinglish: [
      'Manzilein kitni bhi door hon, safar khoobsurat ban hi jaata hai',
      'Jab tumhaare jaisa zindaadil yaar safar mein saath mil jaata hai',
    ],
    linesEnglish: [
      'No matter how far the destination sits, the journey turns bright',
      'Whenever a lively friend like you walks that road beside me',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'चुटकुले और ठहाके',
    titleEnglish: 'Jokes and Laughter',
    linesHindi: [
      'दुनिया की सबसे बड़ी थेरेपी किसी क्लिनिक में नहीं मिलती',
      'वो दोस्तों के साथ पुराने क़िस्से याद करके हँसने में मिलती है',
    ],
    linesHinglish: [
      'Duniya ki sabse badi therapy kisi clinic mein nahin milti',
      'Wo doston ke saath purane qisse yaad karke hansne mein milti hai',
    ],
    linesEnglish: [
      'The best therapy in the world is not sold inside any clinic',
      'It happens when you laugh over old stories with your closest friends',
    ],
  },
  {
    title: 'दिल की किताब खुली',
    titleEnglish: 'Open Book Friendship',
    linesHindi: [
      'जिसके सामने अपने राज़ छुपाने की ज़रूरत न पड़े कभी',
      'उस दोस्त के जैसा सुरक्षित कोना इस धरती पर कहीं नहीं अभी',
    ],
    linesHinglish: [
      'Jiske saamne apne raaz chhupaane ki zaroorat na pade kabhi',
      'Us dost ke jaisa surakshit kona is dharti par kahin nahin abhi',
    ],
    linesEnglish: [
      'Someone in front of whom you never need to lock away your secrets',
      'There is no safer corner on earth than sitting with that friend',
    ],
  },
  {
    title: 'बिन बुलाए मेहमान',
    titleEnglish: 'Uninvited Like Home',
    linesHindi: [
      'औपचारिकता वाले लोग घर आने से पहले वक़्त पूछते हैं',
      'सच्चे यार तो सीधे दरवाज़ा खटखटाकर फ़्रिज खोल लेते हैं',
    ],
    linesHinglish: [
      'Aupchaarikta waale log ghar aane se pehle waqt poochhte hain',
      'Sacche yaar to seedhe darwaaza khatkhataakar fridge khol lete hain',
    ],
    linesEnglish: [
      'Polite acquaintances text before dropping by your house',
      'Real friends knock once and walk straight toward your fridge',
    ],
  },
  {
    title: 'ईमानदार यारी',
    titleEnglish: 'Honest Friendship',
    linesHindi: [
      'चाहे सौ गलतियाँ करूँ दुनिया की नज़रों में मैं कभी',
      'असली यार पहले डाँटता है, फिर हाथ पकड़कर बाहर निकालता है',
    ],
    linesHinglish: [
      'Chaahe sau galtiyaan karoon duniya ki nazron mein main kabhi',
      'Asli yaar pehle daant-ta hai, phir haath pakadkar baahar nikaalta hai',
    ],
    linesEnglish: [
      'Even if I slip a hundred times in the eyes of the world',
      'A real friend scolds me first and then pulls me right out of the mess',
    ],
  },
  {
    title: 'मुसीबत में पहला नाम',
    titleEnglish: 'First Speed Dial',
    linesHindi: [
      'फ़ोन की कॉन्टैक्ट लिस्ट में चाहे सैकड़ों नंबर सेव हों',
      'मुसीबत पड़ते ही उँगली हमेशा एक या दो नामों पर ही रुकती है',
    ],
    linesHinglish: [
      'Phone ki contact list mein chaahe saikdon number save hon',
      'Museebat padte hi ungli hamesha ek ya do naamon par hi rukti hai',
    ],
    linesEnglish: [
      'Even with hundreds of contacts saved inside my phone',
      'The moment crisis strikes, my thumb stops on just one or two names',
    ],
  },
  {
    title: 'बदलाव के बीच स्थिर',
    titleEnglish: 'Constant Amid Change',
    linesHindi: [
      'मौसम बदले, शहर बदले और लोगों के लहजे भी बदल गए',
      'बस एक तुम थे यार जो आज भी बिल्कुल पहले जैसे ही मिले',
    ],
    linesHinglish: [
      'Mausam badle, shehar badle aur logon ke lehje bhi badal gaye',
      'Bas ek tum the yaar jo aaj bhi bilkul pehle jaise hi mile',
    ],
    linesEnglish: [
      'Seasons shifted, cities changed, and people’s tones turned cold',
      'Only you, my friend, stayed warm and true just like day one',
    ],
  },
  {
    title: 'सुकून की छाया',
    titleEnglish: 'Cool Shade',
    linesHindi: [
      'ज़िंदगी की कड़कती धूप में जब पैर थकने लगते हैं मेरे',
      'दोस्तों का साथ किसी घने पेड़ की ठंडी छाँव सा लगता है',
    ],
    linesHinglish: [
      'Zindagi ki kadakti dhoop mein jab pair thakne lagte hain mere',
      'Doston ka saath kisi ghane ped ki thandi chhaanv sa lagta hai',
    ],
    linesEnglish: [
      'Under the harsh midday heat of life when my steps grow tired',
      'The company of friends feels like cool shade under an old tree',
    ],
  },
  {
    title: 'कामयाबी में जश्न',
    titleEnglish: 'Celebrating Together',
    linesHindi: [
      'जलन और मुक़ाबला इस दुनिया की पुरानी आदत रही है',
      'सिर्फ़ यार ही हैं जो मेरी छोटी जीत पर भी सबसे तेज़ तालियाँ बजाते हैं',
    ],
    linesHinglish: [
      'Jalan aur muqaabla is duniya ki purani aadat rahi hai',
      'Sirf yaar hi hain jo meri chhoti jeet par bhi sabse tez taaliyaan bajaate hain',
    ],
    linesEnglish: [
      'Jealousy and silent rivalry are old habits of this world',
      'Only real friends clap the loudest even for my smallest win',
    ],
  },
  {
    title: 'कसम नहीं, फ़र्ज़',
    titleEnglish: 'Duty of the Heart',
    linesHindi: [
      'बड़ी-बड़ी क़समें खाने वाले अक्सर राह में गायब मिलते हैं',
      'चुपचाप निभाने वाले यार ही ज़िंदगी के असली नगीने होते हैं',
    ],
    linesHinglish: [
      'Badi-badi qasmein khaane waale aksar raah mein gaayab milte hain',
      'Chupchaap nibhaane waale yaar hi zindagi ke asli nageene hote hain',
    ],
    linesEnglish: [
      'People who swear loud oaths often vanish halfway down the road',
      'Quietly loyal friends are the true gemstones of a lifetime',
    ],
  },
  {
    title: 'दिल की दवा यारी',
    titleEnglish: 'Medicine for the Soul',
    linesHindi: [
      'आँखों के नीचे की थकान भी मुस्कान में बदल जाती है तब',
      'जब पुराना दोस्त अचानक मिलकर कहता है — और भाई, कैसा है अब',
    ],
    linesHinglish: [
      'Aankhon ke neeche ki thakaan bhi muskaan mein badal jaati hai tab',
      'Jab purana dost achaanak milkar kehta hai — aur bhai, kaisa hai ab',
    ],
    linesEnglish: [
      'Even dark tired lines under my eyes fade straight into a smile',
      'When an old buddy bumps into me asking—hey brother, how are you now',
    ],
  },
  {
    title: 'दोनों तरफ़ से निभाना',
    titleEnglish: 'Two-Way Street',
    linesHindi: [
      'एक तरफ़ से खींचा गया धागा अक्सर बीच से टूट जाता है',
      'दोनों तरफ़ की इज़्ज़त से ही यारी का रंग और पक्का होता है',
    ],
    linesHinglish: [
      'Ek taraf se kheencha gaya dhaaga aksar beech se toot jaata hai',
      'Donon taraf ki izzat se hi yaari ka rang aur pakka hota hai',
    ],
    linesEnglish: [
      'A thread pulled from only one side eventually snaps in the middle',
      'Mutual respect is what deepens the color of real friendship',
    ],
  },
  {
    title: 'शाम की महफ़िल',
    titleEnglish: 'Evening Hangout',
    linesHindi: [
      'सूरज ढलते ही एक ही अड्डे पर फिर से जुट जाना है',
      'दुनिया की फ़िक्र छोड़कर दो पल फिर बचपन जी आना है',
    ],
    linesHinglish: [
      'Sooraj dhalte hi ek hi adde par phir se jut jaana hai',
      'Duniya ki fikr chhodkar do pal phir bachpan jee aana hai',
    ],
    linesEnglish: [
      'As sunset falls, meeting back at our usual hangout spot',
      'Dropping the weight of the world to relive childhood for an hour',
    ],
  },
  {
    title: 'ग़म में ढाल बनना',
    titleEnglish: 'Shielding Each Other',
    linesHindi: [
      'तुम्हारी आँख में आँसू आए और मैं चुपचाप खड़ा देखूँ',
      'इतना कमज़ोर रिश्ता कभी हमने बनाया ही नहीं मेरे दोस्त',
    ],
    linesHinglish: [
      'Tumhaari aankh mein aansoo aaye aur main chupchaap khada dekhoon',
      'Itna kamzor rishta kabhi humne banaaya hi nahin mere dost',
    ],
    linesEnglish: [
      'Watching tears in your eyes while standing silent on the side',
      'We never built a bond that weak, my dear friend',
    ],
  },
  {
    title: 'यादगार ट्रिप',
    titleEnglish: 'Unforgettable Road Trip',
    linesHindi: [
      'अधूरे प्लान और अचानक बनी पहाड़ों की वो सैर याद है',
      'दोस्तों के साथ भटक जाना भी ज़िंदगी की सबसे सुंदर राह है',
    ],
    linesHinglish: [
      'Adhoore plan aur achaanak bani pahaadon ki wo sair yaad hai',
      'Doston ke saath bhatak jaana bhi zindagi ki sabse sundar raah hai',
    ],
    linesEnglish: [
      'Half-baked plans and that spontaneous trip into the hills',
      'Getting lost with your friends is still the prettiest road in life',
    ],
  },
  {
    title: 'अहम से ऊपर यारी',
    titleEnglish: 'Above Ego',
    linesHindi: [
      'जहाँ अहंकार हार जाए और अपनापन हर बार जीत जाए',
      'समझ लेना वह दोस्ती उम्र भर का साथ बनकर टिक जाए',
    ],
    linesHinglish: [
      'Jahaan ahankaar haar jaaye aur apnaapan har baar jeet jaaye',
      'Samajh lena wah dosti umr bhar ka saath bankar tik jaaye',
    ],
    linesEnglish: [
      'Where ego loses every time and warmth wins without a fight',
      'Count on that friendship to stay standing for a whole lifetime',
    ],
  },
  {
    title: 'एक जैसा पागलपन',
    titleEnglish: 'Shared Wavelength',
    linesHindi: [
      'जब भीड़ में सिर्फ़ एक नज़र मिलने से दोनों की हँसी छूट जाए',
      'समझो वो दोस्ती शब्दों की मोहताज नहीं, रूह से जुड़ जाए',
    ],
    linesHinglish: [
      'Jab bheed mein sirf ek nazar milne se donon ki hansi chhoot jaaye',
      'Samjho wo dosti shabdon ki mohtaaj nahin, rooh se jud jaaye',
    ],
    linesEnglish: [
      'When a single glance across a room sets both of you laughing',
      'That friendship needs zero words—it runs straight from the soul',
    ],
  },
  {
    title: 'भरोसे का नाम दोस्त',
    titleEnglish: 'Another Word for Trust',
    linesHindi: [
      'डिक्शनरी में चाहे जितने भी भारी शब्द लिखे हों प्यार के',
      'मेरी किताब में भरोसे का दूसरा नाम सिर्फ़ दोस्त लिखा है',
    ],
    linesHinglish: [
      'Dictionary mein chaahe jitne bhi bhaari shabd likhe hon pyaar ke',
      'Meri kitaab mein bharose ka doosra naam sirf dost likha hai',
    ],
    linesEnglish: [
      'No matter how many grand words dictionaries keep for affection',
      'In my book, the second word for trust is simply friend',
    ],
  },
  {
    title: 'टूटने न देना यारी',
    titleEnglish: 'Never Let It Break',
    linesHindi: [
      'ग़लतफ़हमियाँ आएँ तो बात करके सुलझा लेना मेरे यार',
      'सच्चे दोस्त दोबारा नहीं मिलते इस तेज़ भागती दुनिया के पार',
    ],
    linesHinglish: [
      'Galatfehmiyaan aayein to baat karke suljha lena mere yaar',
      'Sacche dost dobaara nahin milte is tez bhaagti duniya ke paar',
    ],
    linesEnglish: [
      'If misunderstandings ever creep in, talk it out and clear the air',
      'True friends are far too rare to lose in this fast-moving world',
    ],
  },
  {
    title: 'सच्ची दोस्ती की अमीरी',
    titleEnglish: 'Richest Person Alive',
    linesHindi: [
      'बैंक बैलेंस कम हो तो भी दिल कभी गरीब नहीं लगता मुझे',
      'जब तक मेरे सिर पर यारों की दुआओं का हाथ रहता है',
    ],
    linesHinglish: [
      'Bank balance kam ho to bhi dil kabhi gareeb nahin lagta mujhe',
      'Jab tak mere sir par yaaron ki duaon ka haath rehta hai',
    ],
    linesEnglish: [
      'Even when my bank balance runs low, my spirit never feels poor',
      'As long as my friends keep wishing the best for me every day',
    ],
  },
  {
    title: 'दुआओं में दोस्त',
    titleEnglish: 'Always in My Prayers',
    linesHindi: [
      'ज़िंदगी के हर मोड़ पर तुझे हर ख़ुशी मिले यही दुआ है',
      'तेरा नाम मेरी दुआओं में अपनों से भी पहले लिखा हुआ है',
    ],
    linesHinglish: [
      'Zindagi ke har mod par tujhe har khushi mile yahi dua hai',
      'Tera naam meri duaon mein apnon se bhi pehle likha hua hai',
    ],
    linesEnglish: [
      'May every turn of life bring you pure happiness—that is my wish',
      'Your name is written right near the top of every prayer I say',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'छोटी-सी कॉल का जादू',
    titleEnglish: 'Power of One Call',
    linesHindi: [
      'महीनों की चुप्पी के बाद भी एक कॉल पर सब ताज़ा हो गया',
      'पुराना यार बोला — और बता नालायक, कहाँ गायब हो गया',
    ],
    linesHinglish: [
      'Mahinon ki chuppi ke baad bhi ek call par sab taaza ho gaya',
      'Purana yaar bola — aur bata naalaayak, kahaan gaayab ho gaya',
    ],
    linesEnglish: [
      'After months of silence, one phone call refreshed everything',
      'My old buddy opened with—hey idiot, where on earth did you disappear',
    ],
  },
  {
    title: 'वफ़ादारी की मिसाल',
    titleEnglish: 'Example of Loyalty',
    linesHindi: [
      'सच्ची यारी सिर्फ़ सुख के दिनों में साथ बैठने का नाम नहीं',
      'अंधेरी सुरंग के आख़िर तक साथ चलने का जिगर चाहिए भाई',
    ],
    linesHinglish: [
      'Sacchi yaari sirf sukh ke dinon mein saath baithne ka naam nahin',
      'Andheri surang ke aakhir tak saath chalne ka jigar chahiye bhai',
    ],
    linesEnglish: [
      'Real friendship is not just sitting together on sunny afternoons',
      'It takes the heart to walk all the way through the dark tunnel too',
    ],
  },
  {
    title: 'मीम और मैसेज',
    titleEnglish: 'Midnight Memes',
    linesHindi: [
      'बिना कुछ कहे प्यार जताने का नया तरीका सीख लिया हमने',
      'रोज़ रात को एक-दूसरे को मज़ेदार मीम भेजकर सो जाते हैं हम',
    ],
    linesHinglish: [
      'Bina kuch kahe pyaar jataane ka naya tareeka seekh liya humne',
      'Roz raat ko ek-doosre ko mazedaar meme bhejkar so jaate hain hum',
    ],
    linesEnglish: [
      'We mastered the modern art of saying I care without a speech',
      'Sending each other funny reels every night before going to sleep',
    ],
  },
  {
    title: 'अजनबी से भाई तक',
    titleEnglish: 'From Strangers to Brothers',
    linesHindi: [
      'पहली मुलाक़ात में सोचा न था कि इतनी गहरी बात हो जाएगी',
      'देखते ही देखते एक अजनबी शख़्स मेरी जान बन जाएगा',
    ],
    linesHinglish: [
      'Pehli mulaaqaat mein socha na tha ki itni gehri baat ho jaayegi',
      'Dekhte hi dekhte ek ajnabi shakhs meri jaan ban jaayega',
    ],
    linesEnglish: [
      'On the day we first met, I never guessed it would run this deep',
      'Before I knew it, a complete stranger became family to me',
    ],
  },
  {
    title: 'गिरने पर थाम लेना',
    titleEnglish: 'Catching Me Fall',
    linesHindi: [
      'दुनिया तो ठोकर लगने पर हँसने के बहाने ढूँढती है अक्सर',
      'सच्चा दोस्त पहले हाथ थामकर उठाता है, फिर हँसी-मज़ाक करता है',
    ],
    linesHinglish: [
      'Duniya to thokar lagne par hansne ke bahaane dhoondhti hai aksar',
      'Saccha dost pehle haath thaamkar uthaata hai, phir hansi-mazaak karta hai',
    ],
    linesEnglish: [
      'The world usually looks for an excuse to laugh when you trip',
      'A true friend pulls you up onto your feet first, and jokes later',
    ],
  },
  {
    title: 'पुराना ग्रुप चैट',
    titleEnglish: 'Old Group Chat',
    linesHindi: [
      'चाहे हफ़्तों तक सन्नाटा रहे हमारे पुराने ग्रुप में कभी',
      'एक छोटा सा मैसेज आते ही फिर से पूरा मेला लग जाता है अभी',
    ],
    linesHinglish: [
      'Chaahe hafton tak sannaata rahe hamaare purane group mein kabhi',
      'Ek chhota sa message aate hi phir se pura mela lag jaata hai abhi',
    ],
    linesEnglish: [
      'Our old group chat might stay quiet for weeks at a stretch',
      'One random text drops in and suddenly the whole carnival wakes up',
    ],
  },
  {
    title: 'दिल बड़ा रखने वाले',
    titleEnglish: 'Big-Hearted Friends',
    linesHindi: [
      'हिसाब-किताब से बाहर रहकर जो निभाया जाए वो रिश्ता प्यारा है',
      'कमियाँ देखकर भी जो गले लगाए, वही तो यार हमारा है',
    ],
    linesHinglish: [
      'Hisaab-kitaab se baahar rehkar jo nibhaaya jaaye wo rishta pyaara hai',
      'Kamiyaan dekhkar bhi jo gale lagaaye, wahi to yaar hamaara hai',
    ],
    linesEnglish: [
      'A bond lived outside scorecards and ledgers is truly beautiful',
      'Someone who sees your flaws and still hugs you tight is a real friend',
    ],
  },
  {
    title: 'हर मौसम में साथ',
    titleEnglish: 'All-Weather Friend',
    linesHindi: [
      'बरसात में छाता और धूप में साया बनकर चले जो संग',
      'उन्हीं दोस्तों से ज़िंदगी की तस्वीर में भरते हैं असली रंग',
    ],
    linesHinglish: [
      'Barsaaton mein chhaata aur dhoop mein saaya bankar chale jo sang',
      'Unheen doston se zindagi ki tasveer mein bharte hain asli rang',
    ],
    linesEnglish: [
      'An umbrella in the rain and steady shade beneath harsh sun',
      'Friends like that paint the truest colors across life’s canvas',
    ],
  },
  {
    title: 'बातों का सिलसिला',
    titleEnglish: 'Endless Conversations',
    linesHindi: [
      'वक़्त का पता ही नहीं चलता जब हम दोनों बैठते हैं साथ',
      'लगता है हर अधूरी बात आज ही पूरी कर लेनी है हाथोहाथ',
    ],
    linesHinglish: [
      'Waqt ka pata hi nahin chalta jab hum donon baithte hain saath',
      'Lagta hai har adhoori baat aaj hi poori kar leni hai haathohath',
    ],
    linesEnglish: [
      'Clocks stop making sense whenever the two of us sit down to talk',
      'It feels like we need to catch up on every single story right away',
    ],
  },
  {
    title: 'ख़ुदग़र्ज़ दौर में यार',
    titleEnglish: 'Gold in a Selfish Era',
    linesHindi: [
      'जहाँ हर मुस्कान के पीछे कोई न कोई फ़ायदा छिपा होता है',
      'वहाँ बिना शर्त साथ खड़ा दोस्त किसी फरिश्ते से कम नहीं होता है',
    ],
    linesHinglish: [
      'Jahaan har muskaan ke peechhe koi na koi faayda chhipa hota hai',
      'Wahaan bina shart saath khada dost kisi farishte se kam nahin hota hai',
    ],
    linesEnglish: [
      'Where almost every polite smile hides a quiet favor behind it',
      'An unconditional friend standing by you is nothing short of grace',
    ],
  },
  {
    title: 'बेफ़िक्री के दिन',
    titleEnglish: 'Carefree Days',
    linesHindi: [
      'दुनिया की सबसे कीमती दौलत तिजोरी में नहीं मिलती कभी',
      'वो तो स्कूल से कॉलेज तक दोस्तों के साथ बिताए दिनों में मिलती है',
    ],
    linesHinglish: [
      'Duniya ki sabse keemti daulat tijori mein nahin milti kabhi',
      'Wo to school se college tak doston ke saath bitaaye dinon mein milti hai',
    ],
    linesEnglish: [
      'The richest treasure in life is never locked inside a bank vault',
      'It lives in the carefree years spent growing up alongside your friends',
    ],
  },
  {
    title: 'नाम काफी है',
    titleEnglish: 'Your Name Is Enough',
    linesHindi: [
      'भीड़ में जब कोई पहचान पूछे तो फ़ख़्र से बताता हूँ नाम तेरा',
      'तेरी यारी ही मेरी ज़िंदगी की सबसे बड़ी शान है यारा मेरा',
    ],
    linesHinglish: [
      'Bheed mein jab koi pehchaan poochhe to fakhr se bataata hoon naam tera',
      'Teri yaari hi meri zindagi ki sabse badi shaan hai yaara mera',
    ],
    linesEnglish: [
      'Whenever someone asks who stands in my corner, I say your name proudly',
      'Your friendship remains one of the greatest prides of my life',
    ],
  },
  {
    title: 'दिल की तसल्ली',
    titleEnglish: 'Peace of Mind',
    linesHindi: [
      'दुनिया चाहे जितनी तेज़ भागे पर एक बात का सुकून रहता है',
      'कि कहीं भी अटक जाऊँ तो मेरा यार बस एक कॉल दूर रहता है',
    ],
    linesHinglish: [
      'Duniya chaahe jitni tez bhaage par ek baat ka sukoon rehta hai',
      'Ki kahin bhi atak jaaoon to mera yaar bas ek call door rehta hai',
    ],
    linesEnglish: [
      'No matter how fast the world rushes by, one comfort always stays',
      'If I ever get stuck anywhere, my friend is just one phone call away',
    ],
  },
  {
    title: 'अनकहा रिश्ता',
    titleEnglish: 'Unspoken Connection',
    linesHindi: [
      'सौ बार जताने से भी वो बात नहीं बनती जो एक नज़र में बन जाए',
      'दोस्ती वही सच्ची है जो बिना शब्दों के भी दिल तक उतर जाए',
    ],
    linesHinglish: [
      'Sau baar jataane se bhi wo baat nahin banti jo ek nazar mein ban jaaye',
      'Dosti wahi sacchi hai jo bina shabdon ke bhi dil tak utar jaaye',
    ],
    linesEnglish: [
      'Saying it a hundred times cannot match what one knowing look says',
      'True friendship sinks straight into the heart without needing speeches',
    ],
  },
  {
    title: 'लड़ाई से ज़्यादा प्यार',
    titleEnglish: 'More Love Than Fights',
    linesHindi: [
      'दिन भर की टाँग-खिंचाई के बाद भी जो सबसे ज़्यादा फ़िक्र करे',
      'उस दोस्त जैसा अनमोल साथी भगवान हर किसी को नसीब करे',
    ],
    linesHinglish: [
      'Din bhar ki taang-khinchaai ke baad bhi jo sabse zyada fikr kare',
      'Us dost jaisa anmol saathi Bhagwan har kisi ko naseeb kare',
    ],
    linesEnglish: [
      'Someone who teases you all day yet cares for you more than anyone',
      'May everyone be blessed with a priceless friend just like that',
    ],
  },
  {
    title: 'ज़िंदादिल साथी',
    titleEnglish: 'Lively Soulmate Friend',
    linesHindi: [
      'मायूस शामों में भी रौनक भर देने का हुनर आता है तुम्हें',
      'तुम साथ हो तो ज़िंदगी हर दिन एक नया त्योहार लगती है हमें',
    ],
    linesHinglish: [
      'Maayoos shaamon mein bhi raunak bhar dene ka hunar aata hai tumhein',
      'Tum saath ho to zindagi har din ek naya tyohaar lagti hai humein',
    ],
    linesEnglish: [
      'You have a gift for bringing brightness even into dull evenings',
      'With you around, ordinary days start feeling like little celebrations',
    ],
  },
  {
    title: 'वक़्त बदलने पर भी अटूट यारी',
    titleEnglish: 'Unbreakable Pact',
    linesHindi: [
      'वक़्त चाहे करवट बदले या रास्ते थोड़े अलग हो जाएँ कभी',
      'दिल की पुरानी मेज़ पर तुम्हारी कुर्सी हमेशा ख़ाली रहेगी अभी',
    ],
    linesHinglish: [
      'Waqt chaahe karwat badle ya raaste thode alag ho jaayein kabhi',
      'Dil ki purani mez par tumhaari kursi hamesha khaali rahegi abhi',
    ],
    linesEnglish: [
      'Even if seasons turn or our daily paths drift slightly apart',
      'Your chair at the table in my heart will always stay reserved for you',
    ],
  },
  {
    title: 'यारी में बराबरी',
    titleEnglish: 'Equals in Friendship',
    linesHindi: [
      'दोस्ती में न कोई बड़ा होता है न कोई छोटा माना जाता है',
      'जहाँ सिर्फ़ दिल से दिल का दर्जा बराबर रखा जाता है',
    ],
    linesHinglish: [
      'Dosti mein na koi bada hota hai na koi chhota maana jaata hai',
      'Jahaan sirf dil se dil ka darja baraabar rakha jaata hai',
    ],
    linesEnglish: [
      'In genuine friendship, nobody ranks higher or lower than another',
      'It is the one place where two hearts stand on completely equal ground',
    ],
  },
  {
    title: 'पुराना शहर, पुराने यार',
    titleEnglish: 'Hometown Crew',
    linesHindi: [
      'छुट्टियों में घर लौटने की सबसे बड़ी वजहों में एक तुम हो',
      'शहर की गलियों में आज भी हमारे ठहाकों की गूँज ज़िंदा है दोस्तों',
    ],
    linesHinglish: [
      'Chhuttiyon mein ghar lautne ki sabse badi wajahon mein ek tum ho',
      'Shehar ki galiyon mein aaj bhi hamaare thahaakon ki goonj zinda hai doston',
    ],
    linesEnglish: [
      'Seeing you is still one of the biggest reasons I love coming home',
      'The echo of our laughter still lingers across those hometown streets',
    ],
  },
  {
    title: 'सौ मर्ज़ों की दवा',
    titleEnglish: 'Cure for Everything',
    linesHindi: [
      'दुनिया की कोई भी उदासी ज़्यादा देर टिक नहीं पाती पास मेरे',
      'जब दो-चार पुराने यार बैठकर पुराने क़िस्से छेड़ देते हैं मेरे',
    ],
    linesHinglish: [
      'Duniya ki koi bhi udaasi zyada der tik nahin paati paas mere',
      'Jab do-chaar purane yaar baithkar purane qisse chhed dete hain mere',
    ],
    linesEnglish: [
      'No heaviness in the world can linger around me for very long',
      'Once a couple of old friends sit down and pull out classic stories',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'मज़बूत सहारा',
    titleEnglish: 'Steady Backbone',
    linesHindi: [
      'पीठ पीछे साज़िश करने वालों से कभी डरा नहीं मैं दोस्त',
      'मेरे कंधे के पीछे खड़े यार पूरी फ़ौज से कम नहीं हैं दोस्त',
    ],
    linesHinglish: [
      'Peeth peechhe saazish karne waalon se kabhi dara nahin main dost',
      'Mere kandhe ke peechhe khade yaar poori fauj se kam nahin hain dost',
    ],
    linesEnglish: [
      'I never feared people whispering plots behind my back',
      'The friends standing in my corner are stronger than any army',
    ],
  },
  {
    title: 'मीठी छेड़छाड़',
    titleEnglish: 'Playful Banter',
    linesHindi: [
      'बिन बात के तंग करना और फिर ख़ुद ही मनाने आ जाना',
      'ये प्यारा सा अधिकार सिर्फ़ सच्चे दोस्तों के पास ही होता है ना',
    ],
    linesHinglish: [
      'Bin baat ke tang karna aur phir khud hi manaane aa jaana',
      'Ye pyaara sa adhikaar sirf sacche doston ke paas hi hota hai na',
    ],
    linesEnglish: [
      'Teasing me for no reason and then being the first to cheer me up',
      'Only real friends hold that sweet kind of lifelong license',
    ],
  },
  {
    title: 'ख़ामोशी की ज़ुबान',
    titleEnglish: 'Language of Silence',
    linesHindi: [
      'जब शब्दों में अपनी उलझन कहना भी मुश्किल लगने लगे कभी',
      'सच्चा दोस्त बस आँखें पढ़कर पूरी बात समझ जाता है तभी',
    ],
    linesHinglish: [
      'Jab shabdon mein apni uljhan kehna bhi mushkil lagne lage kabhi',
      'Saccha dost bas aankhein padhkar poori baat samajh jaata hai tabhi',
    ],
    linesEnglish: [
      'When even putting your storm into words feels too hard',
      'A true friend reads your eyes and understands the whole story',
    ],
  },
  {
    title: 'सच्ची दोस्ती की रौशनी',
    titleEnglish: 'Lantern in the Fog',
    linesHindi: [
      'भटकती राहों में जब मंज़िल का कोई निशान नज़र न आए',
      'दोस्त की सच्ची सलाह किसी रोशन चिराग़ सी राह दिखा जाए',
    ],
    linesHinglish: [
      'Bhatakti raahon mein jab manzil ka koi nishaan nazar na aaye',
      'Dost ki sacchi salaah kisi roshan chiraag si raah dikha jaaye',
    ],
    linesEnglish: [
      'On foggy roads when not a single signpost shows the way',
      'Honest advice from a friend shines like a warm lantern ahead',
    ],
  },
  {
    title: 'अजनबी शहर में अपनापन',
    titleEnglish: 'Home Far From Home',
    linesHindi: [
      'बड़े शहर की भीड़ में हर चेहरा पराया सा लगता था पहले',
      'एक यार क्या मिला, सारा शहर अपना सा लगने लगा अब मुझे',
    ],
    linesHinglish: [
      'Bade shehar ki bheed mein har chehra paraaya sa lagta tha pehle',
      'Ek yaar kya mila, saara shehar apna sa lagne laga ab mujhe',
    ],
    linesEnglish: [
      'Every face inside this big city felt distant and unfamiliar at first',
      'Once I found one true friend, the whole town started feeling like home',
    ],
  },
  {
    title: 'दिल साफ तो यारी पक्की',
    titleEnglish: 'Clean Heart Clean Bond',
    linesHindi: [
      'दिमाग़ से चलने वाले लोग रिश्ते ज़्यादा दिन नहीं चला पाते',
      'दिल साफ़ हो तो बरसों की दोस्ती में भी ज़ंग नहीं लगता कभी',
    ],
    linesHinglish: [
      'Dimaag se chalne waale log rishte zyada din nahin chala paate',
      'Dil saaf ho to barson ki dosti mein bhi zang nahin lagta kabhi',
    ],
    linesEnglish: [
      'People who run relationships like math rarely keep them long',
      'When both hearts are clean, even decades cannot put rust on a friendship',
    ],
  },
  {
    title: 'एक जैसा स्वाद',
    titleEnglish: 'Same Taste Same Madness',
    linesHindi: [
      'पसंद के गाने भी एक से और हर बेवकूफ़ी में भी साझेदारी',
      'हमारी दोस्ती तो किसी फ़िल्म की सबसे मज़ेदार कहानी लगती है यारी',
    ],
    linesHinglish: [
      'Pasand ke gaane bhi ek se aur har bewakoofi mein bhi saajhedaari',
      'Hamaari dosti to kisi film ki sabse mazedaar kahaani lagti hai yaari',
    ],
    linesEnglish: [
      'Matching playlists and equal shares in every wild idea we cook up',
      'Our friendship feels straight out of the best feel-good movie ever',
    ],
  },
  {
    title: 'माँ-बाप जैसा ख़्याल',
    titleEnglish: 'Protective Care',
    linesHindi: [
      'खाना खाया या नहीं और घर सही सलामत पहुँचे या नहीं तुम',
      'दोस्त जब फ़िक्र करे तो उसमें घर जैसा ही प्यार झलकता है',
    ],
    linesHinglish: [
      'Khaana khaaya ya nahin aur ghar sahi salaamat pahunche ya nahin tum',
      'Dost jab fikr kare to usmein ghar jaisa hi pyaar jhalakta hai',
    ],
    linesEnglish: [
      'Asking if you ate today and checking that you got home safe',
      'When a friend cares like that, it carries the warmth of home itself',
    ],
  },
  {
    title: 'ताली के बाद रुकने वाले दोस्त',
    titleEnglish: 'Tested by Time',
    linesHindi: [
      'भीड़ तो तालियों के शोर के साथ आती-जाती रहती है रोज़',
      'असली यार वही है जो ख़ामोशी के दिनों में भी वहीं खड़ा मिले',
    ],
    linesHinglish: [
      'Bheed to taaliyon ke shor ke saath aati-jaati rehti hai roz',
      'Asli yaar wahi hai jo khaamoshi ke dinon mein bhi waheen khada mile',
    ],
    linesEnglish: [
      'Crowds show up and vanish right along with the applause',
      'A real friend is the one still standing there during your quiet days',
    ],
  },
  {
    title: 'दिल की रौनक',
    titleEnglish: 'Joy of the Room',
    linesHindi: [
      'जिसके आने से सूना कमरा भी महफ़िल में बदल जाता है फ़ौरन',
      'वो यार ज़िंदगी का सबसे ख़ूबसूरत तोहफ़ा कहलाता है यारों',
    ],
    linesHinglish: [
      'Jiske aane se soona kamra bhi mehfil mein badal jaata hai fauran',
      'Wo yaar zindagi ka sabse khoobsurat tohfa kehlaata hai yaaron',
    ],
    linesEnglish: [
      'Someone whose arrival turns an empty room into a warm gathering',
      'That friend is truly one of life’s brightest gifts',
    ],
  },
  {
    title: 'अधूरापन दूर करना',
    titleEnglish: 'Making Life Whole',
    linesHindi: [
      'सब कुछ पास होकर भी मन कभी-कभी सूना सा रहता है',
      'और एक दोस्त के साथ बैठकर सब कुछ पूरा लगने लगता है',
    ],
    linesHinglish: [
      'Sab kuch paas hokar bhi man kabhi-kabhi soona sa rehta hai',
      'Aur ek dost ke saath baithkar sab kuch poora lagne lagta hai',
    ],
    linesEnglish: [
      'Sometimes you can have everything yet still feel oddly hollow',
      'Then an hour with a true friend makes life feel whole again',
    ],
  },
  {
    title: 'ग़म में भी हँसा दे',
    titleEnglish: 'Laughing Through Tears',
    linesHindi: [
      'आँखों में नमी हो और वो कोई पुराना मज़ाक छेड़ दे धीरे से',
      'सच्चे दोस्त रोते हुए को भी हँसाने का हुनर बख़ूबी जानते हैं',
    ],
    linesHinglish: [
      'Aankhon mein nami ho aur wo koi purana mazaak chhed de dheere se',
      'Sacche dost rote hue ko bhi hansaane ka hunar bakhoobi jaante hain',
    ],
    linesEnglish: [
      'Eyes glistening with tears while they softly crack an inside joke',
      'Real friends know the gentle art of making you smile right through pain',
    ],
  },
  {
    title: 'साथ की गर्माहट',
    titleEnglish: 'Warmth of Brotherhood',
    linesHindi: [
      'सर्दियों की रात में अलाव जैसी गर्माहट देते हैं कुछ लोग',
      'यार पास हों तो दुनिया की हर ठंडक बेअसर हो जाती है',
    ],
    linesHinglish: [
      'Sardiyon ki raat mein alaav jaisi garmaahat dete hain kuch log',
      'Yaar paas hon to duniya ki har thandak beasar ho jaati hai',
    ],
    linesEnglish: [
      'Some people feel like a warm bonfire on a freezing winter night',
      'With true friends nearby, the coldest world loses its bite',
    ],
  },
  {
    title: 'ज़िंदगी के साथी',
    titleEnglish: 'Fellow Travelers',
    linesHindi: [
      'सफ़र चाहे जैसा भी हो, हमराही अच्छा होना सबसे ज़रूरी है',
      'सच्चे यार न मिलें तो ज़िंदगी की सबसे लंबी सड़क भी सूनी है',
    ],
    linesHinglish: [
      'Safar chaahe jaisa bhi ho, humraahi accha hona sabse zaroori hai',
      'Sacche yaar na milein to zindagi ki sabse lambi sadak bhi sooni hai',
    ],
    linesEnglish: [
      'Whatever the terrain, having the right travel partner matters most',
      'Without real friends, even the grandest road feels strangely lonely',
    ],
  },
  {
    title: 'ताक़त की जड़',
    titleEnglish: 'Roots of Courage',
    linesHindi: [
      'पेड़ कितना भी ऊँचा उठे पर जड़ों के सहारे ही टिकता है',
      'इंसान भी ज़िंदगी की आँधियों में सच्चे दोस्तों से ही सँभलता है',
    ],
    linesHinglish: [
      'Ped kitna bhi ooncha uthe par jadon ke sahaare hi tikta hai',
      'Insaan bhi zindagi ki aandhiyon mein sacche doston se hi sambhalta hai',
    ],
    linesEnglish: [
      'No matter how tall a tree grows, it stands steady thanks to its roots',
      'People too survive life’s fiercest winds anchored by loyal friends',
    ],
  },
  {
    title: 'मीठी यादों का बक्सा',
    titleEnglish: 'Box of Golden Moments',
    linesHindi: [
      'एक दिन जब हम सब अपनी-अपनी भागदौड़ में व्यस्त हो जाएँगे',
      'तब यही पुरानी तस्वीरें और यारी के क़िस्से चेहरे पर मुस्कान लाएँगे',
    ],
    linesHinglish: [
      'Ek din jab hum sab apni-apni bhaagdaud mein vyast ho jaayenge',
      'Tab yahi purani tasveerein aur yaari ke qisse chehre par muskaan laayenge',
    ],
    linesEnglish: [
      'One day when we all get busy chasing different deadlines and lives',
      'These very photos and old stories will still bring back our best smiles',
    ],
  },
  {
    title: 'दिल से शुक्रिया यारा',
    titleEnglish: 'Thank You My Friend',
    linesHindi: [
      'हर बार ज़ुबान से शुक्रिया कहना आसान नहीं होता मेरे दोस्त',
      'पर तेरे हर साथ का एहसान दिल की गहराई में दर्ज रहता है',
    ],
    linesHinglish: [
      'Har baar zubaan se shukriya kehna aasaan nahin hota mere dost',
      'Par tere har saath ka ehsaan dil ki gehraai mein darj rehta hai',
    ],
    linesEnglish: [
      'Saying thank you out loud every time does not come easily to me',
      'Yet every moment you stood by me is quietly carved inside my heart',
    ],
  },
  {
    title: 'मुसीबत में चट्टान',
    titleEnglish: 'Rock Solid Friend',
    linesHindi: [
      'लहरें चाहे जितनी ज़ोर से टकराएँ किनारे की चट्टानों से',
      'सच्चे यारों की तरह वो अपनी जगह से कभी हिलती नहीं हैं',
    ],
    linesHinglish: [
      'Lehrein chaahe jitni zor se takraayein kinaare ki chattaanon se',
      'Sacche yaaron ki tarah wo apni jagah se kabhi hilti nahin hain',
    ],
    linesEnglish: [
      'No matter how fiercely the waves crash against coastal rocks',
      'Like loyal friends, they never budge an inch from where they stand',
    ],
  },
  {
    title: 'प्यारा सा रिश्ता',
    titleEnglish: 'Sweetest Connection',
    linesHindi: [
      'न कोई उम्मीद का बोझ, न कोई दिखावे का बंधन है इसमें',
      'दोस्ती दुनिया का सबसे हल्का पर सबसे मज़बूत रिश्ता है दिल में',
    ],
    linesHinglish: [
      'Na koi ummeed ka bojh, na koi dikhaawe ka bandhan hai ismein',
      'Dosti duniya ka sabse halka par sabse mazboot rishta hai dil mein',
    ],
    linesEnglish: [
      'No heavy expectations and no pressure to keep up fake appearances',
      'Friendship is the lightest yet strongest bond a heart can carry',
    ],
  },
  {
    title: 'एक कॉल पर हाज़िर',
    titleEnglish: 'Always One Call Away',
    linesHindi: [
      'दुनिया की सबसे बड़ी ताक़त पैसों में नहीं छिपी होती यार',
      'वो तो एक कॉल पर दौड़े चले आने वाले दोस्तों में होती है',
    ],
    linesHinglish: [
      'Duniya ki sabse badi taaqat paison mein nahin chhipi hoti yaar',
      'Wo to ek call par daude chale aane waale doston mein hoti hai',
    ],
    linesEnglish: [
      'True power in this world is never hidden inside stacks of cash',
      'It lives in friends who drop everything and rush over on one call',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'सच्ची यारी का असर',
    titleEnglish: 'Effect of Real Friendship',
    linesHindi: [
      'एक अच्छा दोस्त तुम्हें ख़ुद का बेहतर रूप दिखा देता है',
      'गलत राह पर चलते कदमों को प्यार से रोककर बचा लेता है',
    ],
    linesHinglish: [
      'Ek accha dost tumhein khud ka behtar roop dikha deta hai',
      'Galat raah par chalte kadmon ko pyaar se rokkar bacha leta hai',
    ],
    linesEnglish: [
      'A good friend mirrors the finest version waiting inside you',
      'And gently holds you back whenever your steps drift down the wrong lane',
    ],
  },
  {
    title: 'बर्थडे सरप्राइज़',
    titleEnglish: 'Midnight Birthday Chaos',
    linesHindi: [
      'बाक़ी सब सिर्फ़ मैसेज भेजकर अपनी रस्म निभा देते हैं रात में',
      'दोस्त तो बारह बजे दरवाज़े पर केक लेकर शोर मचा देते हैं',
    ],
    linesHinglish: [
      'Baaqi sab sirf message bhejkar apni rasm nibha dete hain raat mein',
      'Dost to baarah baje darwaaze par cake lekar shor macha dete hain',
    ],
    linesEnglish: [
      'Everyone else settles for a quick text message to check the box',
      'Real friends bang on your door at midnight holding cake and loud cheers',
    ],
  },
  {
    title: 'हौसले की उड़ान',
    titleEnglish: 'Wings of Encouragement',
    linesHindi: [
      'जब मैंने ख़ुद पर भी शक करना शुरू कर दिया था एक वक़्त पर',
      'मेरे यारों ने यक़ीन दिलाया कि मैं हर मंज़िल पा सकता हूँ',
    ],
    linesHinglish: [
      'Jab maine khud par bhi shaq karna shuru kar diya tha ek waqt par',
      'Mere yaaron ne yaqeen dilaaya ki main har manzil paa sakta hoon',
    ],
    linesEnglish: [
      'During a season when I even began doubting myself',
      'My friends reminded me until I believed I could reach any goal',
    ],
  },
  {
    title: 'बिना शर्त अपनापन',
    titleEnglish: 'Unconditional Welcome',
    linesHindi: [
      'हार कर लौटूँ या जीत का ताज पहनकर आऊँ उनके पास',
      'दोस्तों की बाँहें हर हाल में मेरे लिए खुली मिलती हैं ख़ास',
    ],
    linesHinglish: [
      'Haar kar lautoon ya jeet ka taaj pehenkar aaoon unke paas',
      'Doston ki baahein har haal mein mere liye khuli milti hain khaas',
    ],
    linesEnglish: [
      'Whether I return empty-handed or wearing the crown of victory',
      'My friends always keep their arms wide open either way',
    ],
  },
  {
    title: 'ख़ामोश सफ़र में गीत',
    titleEnglish: 'Song in Silent Miles',
    linesHindi: [
      'लंबी यात्रा हो या ज़िंदगी की उबाऊ और थकी हुई शाम',
      'एक यार साथ हो तो हर पल सुरीले गीत सा बीत जाता है',
    ],
    linesHinglish: [
      'Lambi yatra ho ya zindagi ki ubaau aur thaki hui shaam',
      'Ek yaar saath ho to har pal surile geet sa beet jaata hai',
    ],
    linesEnglish: [
      'Whether on a long highway trip or a slow, exhausting evening',
      'With one good friend along, every hour flows like a favorite song',
    ],
  },
  {
    title: 'दिखावे से दूर सच्ची यारी',
    titleEnglish: 'No Show-Off Needed',
    linesHindi: [
      'अमीरी दिखाने वाले बहुत देखे हैं इस चमकती दुनिया में मैंने',
      'दिल की अमीरी तो बस अपने पुराने यारों में ही देखी है मैंने',
    ],
    linesHinglish: [
      'Ameeri dikhaane waale bahut dekhe hain is chamakti duniya mein maine',
      'Dil ki ameeri to bas apne purane yaaron mein hi dekhi hai maine',
    ],
    linesEnglish: [
      'I have met plenty of people flaunting wealth in this flashy world',
      'True richness of heart is something I mostly found in my old friends',
    ],
  },
  {
    title: 'बेचैनी में सुकून',
    titleEnglish: 'Calm in Restlessness',
    linesHindi: [
      'जब दिमाग़ में हज़ार सवालों का शोर थमने का नाम न ले',
      'दोस्त के साथ टहलने निकल जाओ, मन अपने आप हल्का हो जाए',
    ],
    linesHinglish: [
      'Jab dimaag mein hazaar sawaalon ka shor thamne ka naam na le',
      'Dost ke saath tehalne nikal jaao, man apne aap halka ho jaaye',
    ],
    linesEnglish: [
      'When a thousand noisy questions refuse to quiet inside your head',
      'Just step out for a walk with a friend and watch your mind settle',
    ],
  },
  {
    title: 'सच्ची दोस्ती की पहचान',
    titleEnglish: 'Tested Loyalty',
    linesHindi: [
      'जब हालात कठिन हों और साथ रहने में कोई फ़ायदा न दिखे',
      'तब जो हाथ न छोड़े, बस उसी का नाम दोस्ती की किताब में लिखे',
    ],
    linesHinglish: [
      'Jab haalaat kathin hon aur saath rehne mein koi faayda na dikhe',
      'Tab jo haath na chhode, bas usi ka naam dosti ki kitaab mein likhe',
    ],
    linesEnglish: [
      'When circumstances turn harsh and loyalty offers zero profit',
      'Whoever still holds your hand deserves the title of true friend',
    ],
  },
  {
    title: 'बचपन की साइकिल',
    titleEnglish: 'Childhood Bicycle Days',
    linesHindi: [
      'एक साइकिल पर तीन दोस्तों की सवारी और बेफ़िक्र दोपहर',
      'आज बड़ी गाड़ियों में भी वैसी ख़ुशी कहाँ मिलती है हर पहर',
    ],
    linesHinglish: [
      'Ek cycle par teen doston ki sawaari aur befikr dopahar',
      'Aaj badi gaadiyon mein bhi waisi khushi kahaan milti hai har pehar',
    ],
    linesEnglish: [
      'Three friends squeezed onto one bicycle on a carefree afternoon',
      'Even spacious cars today rarely deliver joy that pure',
    ],
  },
  {
    title: 'मुस्कान की ज़िम्मेदारी',
    titleEnglish: 'Keeper of My Joy',
    linesHindi: [
      'दुनिया वजह ढूँढती है कि किसी तरह आँखों को नम कर दे',
      'मेरे दोस्त सौ बहाने ढूँढते हैं कि किसी तरह मुझे हँसा दें',
    ],
    linesHinglish: [
      'Duniya wajah dhoondhti hai ki kisi tarah aankhon ko nam kar de',
      'Mere dost sau bahaane dhoondhte hain ki kisi tarah mujhe hansa dein',
    ],
    linesEnglish: [
      'The world keeps looking for ways to put heaviness in your eyes',
      'My friends invent a hundred silly reasons just to make me laugh',
    ],
  },
  {
    title: 'रूहानी अपनापन',
    titleEnglish: 'Soul-Deep Kinship',
    linesHindi: [
      'कुछ लोग हमारे ख़ानदान का हिस्सा नहीं होते फिर भी अपने हैं',
      'लगता है पिछले जन्मों के बिछड़े भाई आज फिर मिले हैं',
    ],
    linesHinglish: [
      'Kuch log hamaare khaandaan ka hissa nahin hote phir bhi apne hain',
      'Lagta hai pichhle janmon ke bichhde bhai aaj phir mile hain',
    ],
    linesEnglish: [
      'Some people share none of your family name yet feel completely yours',
      'Like long-lost brothers who somehow found their way back to you',
    ],
  },
  {
    title: 'पीठ पीछे भी बेदाग़ भरोसा',
    titleEnglish: 'Blind Trust',
    linesHindi: [
      'तुम मेरे पीछे क्या कहते हो इस बात की कभी चिंता नहीं मुझे',
      'मैं जानता हूँ मेरी इज़्ज़त हमेशा सुरक्षित है तेरे पास मेरे दोस्त',
    ],
    linesHinglish: [
      'Tum mere peechhe kya kehte ho is baat ki kabhi chinta nahin mujhe',
      'Main jaanta hoon meri izzat hamesha surakshit hai tere paas mere dost',
    ],
    linesEnglish: [
      'I never worry about what you might say when I am not around',
      'I know my dignity is always safe inside your hands, my friend',
    ],
  },
  {
    title: 'हर बात में मज़ाक',
    titleEnglish: 'Serious Moments Made Light',
    linesHindi: [
      'कितनी भी गंभीर मुसीबत हो, पहले तो उस पर भी हँस लेते हैं',
      'फिर मिलकर हर परेशानी का हल चुटकियों में निकाल लेते हैं',
    ],
    linesHinglish: [
      'Kitni bhi gambhir museebat ho, pehle to us par bhi hans lete hain',
      'Phir milkar har pareshaani ka hal chutkiyon mein nikaal lete hain',
    ],
    linesEnglish: [
      'No matter how serious the problem looks, we laugh at it first',
      'And then side by side we figure out a way right through it',
    ],
  },
  {
    title: 'कमल सी यारी',
    titleEnglish: 'Pure in Every Season',
    linesHindi: [
      'मतलबी दौर की कीचड़ में भी जो रिश्ता बेदाग़ खिला रहे',
      'वही सच्ची यारी है जो हर मौसम में ख़ुशबू फैलाती रहे',
    ],
    linesHinglish: [
      'Matlabi daur ki keechad mein bhi jo rishta bedaag khila rahe',
      'Wahi sacchi yaari hai jo har mausam mein khushboo phailaati rahe',
    ],
    linesEnglish: [
      'A bond that blooms spotless even inside a self-serving era',
      'That is true friendship—spreading warmth in every kind of weather',
    ],
  },
  {
    title: 'सच्चा दर्पण',
    titleEnglish: 'True Reflection',
    linesHindi: [
      'अकेले में इंसान ख़ुद को सबसे ज़्यादा समझता है कहते हैं',
      'पर मुझे मेरा असली रूप अक्सर मेरे दोस्तों के आईने में दिखता है',
    ],
    linesHinglish: [
      'Akele mein insaan khud ko sabse zyada samajhta hai kehte hain',
      'Par mujhe mera asli roop aksar mere doston ke aaine mein dikhta hai',
    ],
    linesEnglish: [
      'They say solitude teaches you the most about who you are',
      'Yet I often see my truest self reflected through my friends’ eyes',
    ],
  },
  {
    title: 'क़दम से क़दम',
    titleEnglish: 'Step for Step',
    linesHindi: [
      'आगे निकलने की होड़ में लोग अपने ही साथियों को गिरा देते हैं',
      'सच्चे यार तो कामयाबी की सीढ़ी पर भी हाथ थामे चढ़ते हैं',
    ],
    linesHinglish: [
      'Aage nikalne ki hod mein log apne hi saathiyon ko gira dete hain',
      'Sacche yaar to kaamyaabi ki seedhi par bhi haath thaame chadhte hain',
    ],
    linesEnglish: [
      'In the rush to get ahead, many push their own companions down',
      'True friends climb the ladder of success holding each other steady',
    ],
  },
  {
    title: 'राहत की सांस',
    titleEnglish: 'Breath of Relief',
    linesHindi: [
      'पूरी दुनिया के सामने ताक़तवर बनने का नाटक थका देता है',
      'दोस्त के सामने आकर बस राहत की एक गहरी साँस निकलती है',
    ],
    linesHinglish: [
      'Poori duniya ke saamne taaqatwar banne ka naatak thaka deta hai',
      'Dost ke saamne aakar bas raahat ki ek gehri saans nikalti hai',
    ],
    linesEnglish: [
      'Pretending to be invincible in front of the world gets exhausting',
      'Sitting beside a friend finally lets you exhale in pure relief',
    ],
  },
  {
    title: 'सपनों के साझेदार',
    titleEnglish: 'Co-Pilots of Dreams',
    linesHindi: [
      'बड़े ख्वाब देखने में थोड़ा डर तो हर किसी को लगता है यार',
      'पर दो दोस्त साथ मिल जाएँ तो हर नामुमकिन भी आसान लगता है',
    ],
    linesHinglish: [
      'Bade khwaab dekhne mein thoda dar to har kisi ko lagta hai yaar',
      'Par do dost saath mil jaayein to har naamumkin bhi aasaan lagta hai',
    ],
    linesEnglish: [
      'Dreaming huge feels a little intimidating for anyone on their own',
      'When two loyal friends team up, even impossible plans feel doable',
    ],
  },
  {
    title: 'छोटा-सा घेरा, बड़ी दुनिया',
    titleEnglish: 'Small Circle Big World',
    linesHindi: [
      'हज़ारों फॉलोअर्स से बढ़कर चार सच्चे दोस्तों की आवाज़ होती है',
      'जहाँ हर बात बिना किसी दिखावे के दिल से कही जाती है',
    ],
    linesHinglish: [
      'Hazaaron followers se badhkar chaar sacche doston ki aawaaz hoti hai',
      'Jahaan har baat bina kisi dikhaawe ke dil se kahi jaati hai',
    ],
    linesEnglish: [
      'Four genuine voices outweigh a thousand online followers any day',
      'Where every word is spoken straight from the heart without performance',
    ],
  },
  {
    title: 'सदाबहार यारी',
    titleEnglish: 'Evergreen Bond',
    linesHindi: [
      'उम्र के हर पड़ाव पर नए लोग मिलते और बिछड़ते रहेंगे दोस्त',
      'पर जवानी की दोस्ती की महक बुढ़ापे तक ताज़ा रहेगी मेरे दोस्त',
    ],
    linesHinglish: [
      'Umr ke har padaav par naye log milte aur bichhadte rahenge dost',
      'Par jawaani ki dosti ki mehak budhaape tak taaza rahegi mere dost',
    ],
    linesEnglish: [
      'At every milestone of life, new people will come and drift away',
      'Yet the warmth of youth’s true friendships stays fresh until old age',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'हल्की बारिश और दोस्त',
    titleEnglish: 'Rain and Good Company',
    linesHindi: [
      'रिमझिम फुहारों में गरम समोसे और यारों की महफ़िल सजी हो',
      'तो समझ लो ख़ुशियों ने ख़ुद आकर तुम्हारा दरवाज़ा खटखटाया है',
    ],
    linesHinglish: [
      'Rimjhim fuhaaron mein garam samose aur yaaron ki mehfil saji ho',
      'To samajh lo khushiyon ne khud aakar tumhaara darwaaza khatkhataaya hai',
    ],
    linesEnglish: [
      'Gentle drizzle outside, hot snacks on the table, and friends around',
      'That is happiness walking up and knocking straight on your door',
    ],
  },
  {
    title: 'बेबाक सच',
    titleEnglish: 'Fearless Honesty',
    linesHindi: [
      'दुनिया तुम्हारे मुँह पर हाँ में हाँ मिलाकर पीछे हँसती है',
      'असली यार पहले मुँह पर टोकता है और फिर दुनिया से लड़ जाता है',
    ],
    linesHinglish: [
      'Duniya tumhaare munh par haan mein haan milaakar peechhe hansti hai',
      'Asli yaar pehle munh par tokta hai aur phir duniya se lad jaata hai',
    ],
    linesEnglish: [
      'Strangers nod politely to your face and chuckle behind your back',
      'A real friend corrects you upfront and fights the world for you after',
    ],
  },
  {
    title: 'दिल का पासवर्ड',
    titleEnglish: 'Password to My Heart',
    linesHindi: [
      'सबके सामने हँसकर टाल देने की आदत पुरानी है मेरी यारो',
      'मेरे उदास होने का पासवर्ड बस मेरे ख़ास दोस्तों के पास है',
    ],
    linesHinglish: [
      'Sabke saamne hanskar taal dene ki aadat purani hai meri yaaro',
      'Mere udaas hone ka password bas mere khaas doston ke paas hai',
    ],
    linesEnglish: [
      'Laughing off heavy feelings in public is an old habit of mine',
      'Only my closest friends know the password behind my quiet mood',
    ],
  },
  {
    title: 'साथ खाने का मज़ा',
    titleEnglish: 'Sharing the Last Bite',
    linesHindi: [
      'अपनी पसंद का आख़िरी निवाला भी बिना सोचे दे देने वाले दोस्त',
      'ज़ाहिर नहीं करते पर प्यार अपनों से भी ज़्यादा रखते हैं दोस्त',
    ],
    linesHinglish: [
      'Apni pasand ka aakhiri niwaala bhi bina soche de dene waale dost',
      'Zaahir nahin karte par pyaar apnon se bhi zyada rakhte hain dost',
    ],
    linesEnglish: [
      'Friends who hand over their favorite last bite without thinking twice',
      'Rarely say soft words, yet carry deeper love than anyone else',
    ],
  },
  {
    title: 'मुश्किलों की छुट्टी',
    titleEnglish: 'Fearless Together',
    linesHindi: [
      'मुसीबत चाहे पहाड़ जैसी बड़ी बनकर सामने आ जाए कभी',
      'दो पागल यार मिल जाएँ तो हर पहाड़ रेत सा बिखर जाए तभी',
    ],
    linesHinglish: [
      'Museebat chaahe pahaad jaisi badi bankar saamne aa jaaye kabhi',
      'Do paagal yaar mil jaayein to har pahaad ret sa bikhar jaaye tabhi',
    ],
    linesEnglish: [
      'Even if trouble shows up towering like an impossible mountain',
      'Two stubborn friends together can crumble it down like dry sand',
    ],
  },
  {
    title: 'दिल की सुनने वाला',
    titleEnglish: 'Patient Listener',
    linesHindi: [
      'आजकल लोगों के पास किसी की पूरी बात सुनने का वक़्त नहीं',
      'शुक्र है मेरे यार आज भी मेरी बकवास घंटों चुपचाप सुन लेते हैं',
    ],
    linesHinglish: [
      'Aajkal logon ke paas kisi ki poori baat sunne ka waqt nahin',
      'Shukr hai mere yaar aaj bhi meri bakwaas ghanton chupchaap sun lete hain',
    ],
    linesEnglish: [
      'Nowadays nobody has the patience to listen through a full story',
      'Thank goodness my friends still sit through hours of my rambling',
    ],
  },
  {
    title: 'पक्की डोर',
    titleEnglish: 'Unbreakable Thread',
    linesHindi: [
      'रिश्तों के बाज़ार में सौदेबाज़ी खूब देखी है हमने यारो',
      'दोस्ती ही एक धागा है जो बिना किसी शर्त के जुड़ा रहता है',
    ],
    linesHinglish: [
      'Rishton ke baazaar mein saudebaazi khoob dekhi hai humne yaaro',
      'Dosti hi ek dhaaga hai jo bina kisi shart ke juda rehta hai',
    ],
    linesEnglish: [
      'I have seen plenty of bargaining inside the marketplace of favors',
      'Friendship is the one pure thread tied without conditions attached',
    ],
  },
  {
    title: 'सुकून की शामें',
    titleEnglish: 'Golden Evenings',
    linesHindi: [
      'घड़ी की सुइयाँ देखनी बंद हो जाती हैं हर इतवार शाम को',
      'जब चाय के कप के साथ यारों का वही पुराना अड्डा सजता है',
    ],
    linesHinglish: [
      'Ghadi ki suiyaan dekhni band ho jaati hain har itwaar shaam ko',
      'Jab chai ke cup ke saath yaaron ka wahi purana adda sajta hai',
    ],
    linesEnglish: [
      'Nobody bothers checking the clock on Sunday evenings anymore',
      'When hot teacups and the old friend circle gather at our spot',
    ],
  },
  {
    title: 'चमकता सितारा',
    titleEnglish: 'Steady Star',
    linesHindi: [
      'गिरते वक़्त जो हाथ बढ़ाए वही असली हीरा कहलाता है',
      'ख़ुशियों में ताली बजाने वाले तो हर गली में मिल जाते हैं',
    ],
    linesHinglish: [
      'Girte waqt jo haath badhaaye wahi asli heera kehlaata hai',
      'Khushiyon mein taali bajaane waale to har gali mein mil jaate hain',
    ],
    linesEnglish: [
      'The one who reaches out while you fall is the real diamond',
      'People willing to clap at your party exist on every street',
    ],
  },
  {
    title: 'साथ का गुरूर',
    titleEnglish: 'Proud of My Crew',
    linesHindi: [
      'ज़िंदगी में कुछ और कमाया हो या नहीं इस बात का ग़म नहीं',
      'ऐसे यार कमा लिए हैं जिन पर पूरी दुनिया के सामने नाज़ है',
    ],
    linesHinglish: [
      'Zindagi mein kuch aur kamaaya ho ya nahin is baat ka gham nahin',
      'Aise yaar kama liye hain jin par poori duniya ke saamne naaz hai',
    ],
    linesEnglish: [
      'Whether I built massive riches or not bothers me very little',
      'I earned friends I can stand beside and boast about to the world',
    ],
  },
  {
    title: 'नए मोड़ पर पुराना यार',
    titleEnglish: 'Same Smile Years Later',
    linesHindi: [
      'दस साल बाद भी मिलने पर जब पहली ही बात मज़ाक से शुरू हो',
      'तब यक़ीन होता है कि वक़्त हर चीज़ को नहीं बदल पाता कभी',
    ],
    linesHinglish: [
      'Das saal baad bhi milne par jab pehli hi baat mazaak se shuru ho',
      'Tab yaqeen hota hai ki waqt har cheez ko nahin badal paata kabhi',
    ],
    linesEnglish: [
      'When meeting ten years later still begins with a burst of teasing',
      'You realize time cannot actually erase everything after all',
    ],
  },
  {
    title: 'दिल की दवा',
    titleEnglish: 'Balm for Tired Days',
    linesHindi: [
      'ज़िंदगी के भारी दिनों में जब मन बैठने सा लगने लगे',
      'तब दोस्त की बस एक झप्पी भी नई जान फूँक देती है अंदर',
    ],
    linesHinglish: [
      'Zindagi ke bhaari dinon mein jab man baithne sa lagne lage',
      'Tab dost ki bas ek jhappi bhi nayi jaan phoonk deti hai andar',
    ],
    linesEnglish: [
      'On heavy days when your spirit starts sinking under the weight',
      'Even one tight hug from a friend breathes fresh life right back in',
    ],
  },
  {
    title: 'यारों की महफ़िल ही खुशी',
    titleEnglish: 'Address of Happiness',
    linesHindi: [
      'ख़ुश होने के लिए बड़ी वजहों का इंतज़ार बेकार है यारो',
      'अच्छे दोस्त पास हों तो खाली जेब में भी जश्न मन जाता है',
    ],
    linesHinglish: [
      'Khush hone ke liye badi wajahon ka intezaar bekaar hai yaaro',
      'Acche dost paas hon to khaali jeb mein bhi jashn man jaata hai',
    ],
    linesEnglish: [
      'Waiting around for grand milestones just to feel happy is a waste',
      'With good friends beside you, even broke evenings feel like a party',
    ],
  },
  {
    title: 'बेफ़िक्र हँसी',
    titleEnglish: 'Unfiltered Joy',
    linesHindi: [
      'बड़े होने की दौड़ में हमने न जाने क्या-क्या खो दिया पीछे',
      'बस एक दोस्तों की महफ़िल है जहाँ आज भी बचपन ज़िंदा है',
    ],
    linesHinglish: [
      'Bade hone ki daud mein humne na jaane kya-kya kho diya peechhe',
      'Bas ek doston ki mehfil hai jahaan aaj bhi bachpan zinda hai',
    ],
    linesEnglish: [
      'In the race to act grown-up, we left so much joy behind',
      'Only inside a circle of real friends does our childhood still breathe',
    ],
  },
  {
    title: 'रखवाला यार',
    titleEnglish: 'Quiet Protector',
    linesHindi: [
      'तुम सामने से चाहे जितना मज़ाक उड़ाओ मेरा मेरे दोस्त',
      'पर मैं जानता हूँ कि ज़रूरत पड़ी तो सबसे पहले तुम ही आओगे',
    ],
    linesHinglish: [
      'Tum saamne se chaahe jitna mazaak udaao mera mere dost',
      'Par main jaanta hoon ki zaroorat padi to sabse pehle tum hi aaoge',
    ],
    linesEnglish: [
      'Tease me all you want right to my face, my friend',
      'Deep down I know you will still be the very first person to show up',
    ],
  },
  {
    title: 'ताउम्र का बंधन',
    titleEnglish: 'Bond for Every Age',
    linesHindi: [
      'फ़ोटो के फ़िल्टर चाहे कितने भी बदलते रहें ज़माने में',
      'हमारी दोस्ती का रंग हर साल और गहरा होता जाता है',
    ],
    linesHinglish: [
      'Photo ke filter chaahe kitne bhi badalte rahein zamaane mein',
      'Hamaari dosti ka rang har saal aur gehra hota jaata hai',
    ],
    linesEnglish: [
      'Trends and photo filters keep changing every passing season',
      'Yet the warmth of our friendship grows deeper year after year',
    ],
  },
  {
    title: 'उम्मीद से बढ़कर',
    titleEnglish: 'Beyond Expectations',
    linesHindi: [
      'मैंने तो बस मुश्किल में किसी से थोड़ा सा वक़्त माँगा था',
      'मेरे यारों ने पूरी शाम मेरे नाम करके सारा दर्द बाँट लिया',
    ],
    linesHinglish: [
      'Maine to bas mushkil mein kisi se thoda sa waqt maanga tha',
      'Mere yaaron ne poori shaam mere naam karke saara dard baant liya',
    ],
    linesEnglish: [
      'During a rough patch, I only asked someone for ten spare minutes',
      'My friends cleared their whole evening just to share the weight with me',
    ],
  },
  {
    title: 'सच्ची दोस्ती की खुशबू',
    titleEnglish: 'Fragrance of Loyalty',
    linesHindi: [
      'इत्र की महक तो शाम ढलते-ढलते उड़ जाती है हवाओं में',
      'सच्चे दोस्त की यादें ताउम्र दिल में ख़ुशबू बनकर बसी रहती हैं',
    ],
    linesHinglish: [
      'Itr ki mehak to shaam dhalte-dhalte ud jaati hai hawaon mein',
      'Sacche dost ki yaadein taumr dil mein khushboo bankar basi rehti hain',
    ],
    linesEnglish: [
      'Expensive perfume fades into thin air before the evening ends',
      'Memories of a true friend perfume the heart for a whole lifetime',
    ],
  },
  {
    title: 'बिन कहे समझ',
    titleEnglish: 'Instant Understanding',
    linesHindi: [
      'जहाँ आधी बात शुरू होते ही सामने वाला पूरी कहानी समझ जाए',
      'ऐसी यारी ज़िंदगी की सबसे बड़ी नेमत से कम नहीं होती भाई',
    ],
    linesHinglish: [
      'Jahaan aadhi baat shuru hote hi saamne waala poori kahaani samajh jaaye',
      'Aisi yaari zindagi ki sabse badi nemat se kam nahin hoti bhai',
    ],
    linesEnglish: [
      'Where you start half a sentence and they already finish the thought',
      'A friendship like that is nothing short of one of life’s best blessings',
    ],
  },
  {
    title: 'हर मोड़ पर दुआ',
    titleEnglish: 'Blessings for My Buddy',
    linesHindi: [
      'चाहे जितने भी फासले आ जाएँ हमारे शहरों के बीच कभी',
      'तेरी कामयाबी की दुआ हर सुबह मेरे दिल से ज़रूर निकलेगी',
    ],
    linesHinglish: [
      'Chaahe jitne bhi faasle aa jaayein hamaare shehron ke beech kabhi',
      'Teri kaamyaabi ki dua har subah meri dil se zaroor niklegi',
    ],
    linesEnglish: [
      'No matter how many miles sit between our zip codes someday',
      'A sincere wish for your happiness still leaves my heart every morning',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'चाय पर राजनीति',
    titleEnglish: 'Chai Stall Debates',
    linesHindi: [
      'दुनिया भर के बड़े मसले हल कर देते हैं हम आधे घंटे में',
      'बस शर्त ये है कि कुल्हड़ वाली चाय और तीन दोस्त साथ होने चाहिए',
    ],
    linesHinglish: [
      'Duniya bhar ke bade masle hal kar dete hain hum aadhe ghante mein',
      'Bas shart ye hai ki kulhad waali chai aur teen dost saath hone chahiye',
    ],
    linesEnglish: [
      'We solve every major problem in the world within thirty minutes',
      'All it takes is clay-cup tea and three friends standing around together',
    ],
  },
  {
    title: 'बेमिसाल वफ़ा',
    titleEnglish: 'Unmatched Devotion',
    linesHindi: [
      'बदलते चेहरों के इस दौर में जो आज भी एक जैसा खड़ा है',
      'उस यार का क़द मेरे लिए किसी भी ताज से बहुत बड़ा है',
    ],
    linesHinglish: [
      'Badalte chehron ke is daur mein jo aaj bhi ek jaisa khada hai',
      'Us yaar ka qad mere liye kisi bhi taaj se bahut bada hai',
    ],
    linesEnglish: [
      'In an era of shifting faces, someone who still stands steady',
      'Holds a stature in my life taller than any crown ever could',
    ],
  },
  {
    title: 'सच्चा हमसफ़र यार',
    titleEnglish: 'True Road Partner',
    linesHindi: [
      'प्यार में लोग बदल जाते हैं अक्सर मंज़िल के करीब आकर',
      'पर सच्चा दोस्त आधी राह में भी हाथ छोड़कर नहीं भागता कभी',
    ],
    linesHinglish: [
      'Pyaar mein log badal jaate hain aksar manzil ke kareeb aakar',
      'Par saccha dost aadhi raah mein bhi haath chhodkar nahin bhaagta kabhi',
    ],
    linesEnglish: [
      'In romance, people sometimes switch sides right before the finish line',
      'A real friend never drops your hand halfway through the climb',
    ],
  },
  {
    title: 'हँसी का ठेका',
    titleEnglish: 'Laughter Guaranteed',
    linesHindi: [
      'दुनिया की कोई भी दवा उतना सुकून नहीं दे पाती मुझे',
      'जितना दो बेवकूफ़ दोस्तों के बीच बैठकर हँसने से मिलता है',
    ],
    linesHinglish: [
      'Duniya ki koi bhi dawa utna sukoon nahin de paati mujhe',
      'Jitna do bewakoof doston ke beech baithkar hansne se milta hai',
    ],
    linesEnglish: [
      'No pill in any pharmacy gives me half as much peace',
      'As sitting between two goofy friends and laughing until it hurts',
    ],
  },
  {
    title: 'अटूट यारी का निशान',
    titleEnglish: 'Mark of True Friendship',
    linesHindi: [
      'कठिन वक़्त ने बहुत से नक़ाब उतार दिए चेहरे से लोगों के',
      'शुक्र है मेरे सच्चे दोस्तों ने उस दिन भी मेरा साथ नहीं छोड़ा',
    ],
    linesHinglish: [
      'Kathin waqt ne bahut se naqaab utaar diye chehre se logon ke',
      'Shukr hai mere sacche doston ne us din bhi mera saath nahin chhoda',
    ],
    linesEnglish: [
      'Hard times peeled the masks right off a lot of familiar faces',
      'Thankfully my true friends never stepped away even on that day',
    ],
  },
  {
    title: 'दिल से निभाया रिश्ता',
    titleEnglish: 'Kept From the Heart',
    linesHindi: [
      'दिखावे के इस युग में भी कुछ लोग सच में दिल से निभाते हैं',
      'बिन बताए समझ जाते हैं और बिन जतलाए साथ निभा जाते हैं',
    ],
    linesHinglish: [
      'Dikhaawe ke is yug mein bhi kuch log sach mein dil se nibhaate hain',
      'Bin bataaye samajh jaate hain aur bin jatlaaye saath nibha jaate hain',
    ],
    linesEnglish: [
      'Even in this age of performance, a few people still care sincerely',
      'They understand without hints and stand loyal without boasting',
    ],
  },
  {
    title: 'गली की यादें',
    titleEnglish: 'Street Corner Memories',
    linesHindi: [
      'शाम की धूप और मोहल्ले की मोड़ पर खड़े चार यार',
      'बड़े शहरों की रौशनी भी उस सादगी के आगे फीकी है मेरे यार',
    ],
    linesHinglish: [
      'Shaam ki dhoop aur mohalle ki mod par khade chaar yaar',
      'Bade shehron ki raushni bhi us saadgi ke aage feeki hai mere yaar',
    ],
    linesEnglish: [
      'Golden evening light and four friends standing at the street corner',
      'Even dazzling city skylines look pale next to simple moments like that',
    ],
  },
  {
    title: 'ग़मों का बंटवारा',
    titleEnglish: 'Dividing the Storm',
    linesHindi: [
      'अकेले रोते तो शायद टूटकर बिखर जाते हम उस रात को',
      'मेरे यारों ने आकर हर दर्द को बराबर हिस्सों में बाँट लिया',
    ],
    linesHinglish: [
      'Akele rote to shaayad tootkar bikhar jaate hum us raat ko',
      'Mere yaaron ne aakar har dard ko baraabar hisson mein baant liya',
    ],
    linesEnglish: [
      'Crying alone that night might have shattered me completely',
      'My friends showed up and split the pain into smaller pieces we could carry',
    ],
  },
  {
    title: 'सपनों को पंख',
    titleEnglish: 'Fuel for Big Dreams',
    linesHindi: [
      'जब दुनिया तुम्हारी कोशिशों पर हँसकर मुँह मोड़ लेती है',
      'तब दोस्त की एक शाबाशी फिर से उड़ान भरने की ताक़त देती है',
    ],
    linesHinglish: [
      'Jab duniya tumhaari koshishon par hanskar munh mod leti hai',
      'Tab dost ki ek shaabaashi phir se udaan bharne ki taaqat deti hai',
    ],
    linesEnglish: [
      'When onlookers scoff at your attempts and walk away',
      'One word of belief from a friend gives your wings strength to rise again',
    ],
  },
  {
    title: 'दिल का आईना दोस्ती',
    titleEnglish: 'Purest Mirror',
    linesHindi: [
      'जो तुम्हें तुम्हारे अच्छे वक़्त में भी ज़मीन पर टिकाए रखे',
      'वही दोस्त तुम्हें हर ऊँचाई पर भी सही इंसान बनाए रखे',
    ],
    linesHinglish: [
      'Jo tumhein tumhaare acche waqt mein bhi zameen par tikaaye rakhe',
      'Wahi dost tumhein har oonchaai par bhi sahi insaan banaaye rakhe',
    ],
    linesEnglish: [
      'Someone who keeps your feet grounded even when success arrives',
      'Is the friend who helps you stay human at every height',
    ],
  },
  {
    title: 'ख़ास जगह',
    titleEnglish: 'Permanent Seat',
    linesHindi: [
      'ज़िंदगी में चाहे कितने भी नए लोग जुड़ते रहें सफ़र में मेरे',
      'दिल की पहली कतार में हमेशा पुराने यार ही बैठेंगे मेरे',
    ],
    linesHinglish: [
      'Zindagi mein chaahe kitne bhi naye log judte rahein safar mein mere',
      'Dil ki pehli kataar mein hamesha purane yaar hi baithenge mere',
    ],
    linesEnglish: [
      'No matter how many new faces join me along the road ahead',
      'The front row of my heart will always belong to my oldest friends',
    ],
  },
  {
    title: 'बातचीत का सुकून',
    titleEnglish: 'Healing Talk',
    linesHindi: [
      'दिल की गांठें खोलने के लिए किसी जादू की ज़रूरत नहीं होती',
      'बस एक समझदार यार से आधे घंटे दिल खोलकर बात करनी होती है',
    ],
    linesHinglish: [
      'Dil ki gaanthein kholne ke liye kisi jaadu ki zaroorat nahin hoti',
      'Bas ek samajhdaar yaar se aadhe ghante dil kholkar baat karni hoti hai',
    ],
    linesEnglish: [
      'Untying the knots inside your chest takes no complicated magic',
      'Just thirty honest minutes talking things out with a wise friend',
    ],
  },
  {
    title: 'हसीन शाम और यार',
    titleEnglish: 'Sunset and Smiles',
    linesHindi: [
      'ढलते सूरज के साथ छत पर बैठकर गिटार और पुरानी बातें',
      'दुनिया की सारी थकान उतार देती हैं दोस्तों संग बिताई वो रातें',
    ],
    linesHinglish: [
      'Dhalte sooraj ke saath chhat par baithkar guitar aur purani baatein',
      'Duniya ki saari thakaan utaar deti hain doston sang bitaayi wo raatein',
    ],
    linesEnglish: [
      'Sitting on the terrace at dusk with old songs and familiar laughter',
      'Nights spent like that wash away every trace of exhaustion',
    ],
  },
  {
    title: 'सच्ची दोस्ती की ताक़त',
    titleEnglish: 'Quiet Superpower',
    linesHindi: [
      'बाहर से चाहे मैं कितना भी शांत और सीधा दिखता हूँ यारो',
      'कोई मेरे यार को कुछ कहे तो चट्टान बनकर आगे खड़ा रहता हूँ',
    ],
    linesHinglish: [
      'Baahar se chaahe main kitna bhi shaant aur seedha dikhta hoon yaaro',
      'Koi mere yaar ko kuch kahe to chattaan bankar aage khada rehta hoon',
    ],
    linesEnglish: [
      'I might look calm and easygoing on the outside every day',
      'Yet touch one hair on my friend’s head and I turn solid as stone',
    ],
  },
  {
    title: 'इज़्ज़त और प्यार',
    titleEnglish: 'Respect and Warmth',
    linesHindi: [
      'मज़ाक अपनी जगह है पर दिल से इज़्ज़त भी बेइंतहा करते हैं हम',
      'अपने यारों को कभी झुकने नहीं देते, हर हाल में संग खड़े रहते हैं हम',
    ],
    linesHinglish: [
      'Mazaak apni jagah hai par dil se izzat bhi beinteha karte hain hum',
      'Apne yaaron ko kabhi jhukne nahin dete, har haal mein sang khade rehte hain hum',
    ],
    linesEnglish: [
      'Banter stays playful, yet our respect for each other runs deep',
      'We never let our friends stand humiliated—we back them through anything',
    ],
  },
  {
    title: 'ज़िंदा यादें',
    titleEnglish: 'Living Memories',
    linesHindi: [
      'तस्वीरें पुरानी होकर थोड़ी धुंधली पड़ सकती हैं एल्बम में',
      'पर यारों के साथ बिताए पल आज भी दिल में बिल्कुल नए से हैं',
    ],
    linesHinglish: [
      'Tasveerein purani hokar thodi dhundhli pad sakti hain album mein',
      'Par yaaron ke saath bitaaye pal aaj bhi dil mein bilkul naye se hain',
    ],
    linesEnglish: [
      'Printed photographs might fade softly inside an old album',
      'Yet the moments lived with true friends feel brand new in my memory',
    ],
  },
  {
    title: 'दिल की गहराई से',
    titleEnglish: 'From Deep Within',
    linesHindi: [
      'दुनिया की सबसे सुंदर कविता भी वो एहसास नहीं लिख पाती',
      'जो दोस्त के साथ ख़ामोशी में बैठकर महसूस हो जाया करता है',
    ],
    linesHinglish: [
      'Duniya ki sabse sundar kavita bhi wo ehsaas nahin likh paati',
      'Jo dost ke saath khaamoshi mein baithkar mehsoos ho jaaya karta hai',
    ],
    linesEnglish: [
      'Even the finest poem in print fails to capture that peaceful feeling',
      'Of sitting beside a true friend in comfortable, unbothered silence',
    ],
  },
  {
    title: 'कंधे का सहारा',
    titleEnglish: 'Steady Shoulder',
    linesHindi: [
      'थक कर जब कहीं टिकने को जी चाहे इस भागदौड़ भरी दुनिया में',
      'तो दोस्त का कंधा किसी महल से कम सुकून नहीं देता दिल को',
    ],
    linesHinglish: [
      'Thak kar jab kahin tikne ko jee chaahe is bhaagdaud bhari duniya mein',
      'To dost ka kandha kisi mehal se kam sukoon nahin deta dil ko',
    ],
    linesEnglish: [
      'When you are tired and just need somewhere safe to lean in this rush',
      'A friend’s shoulder feels more comforting than any grand palace',
    ],
  },
  {
    title: 'पसंदीदा लोग',
    titleEnglish: 'Favorite Humans',
    linesHindi: [
      'मेरी ज़िंदगी की सबसे अच्छी कहानियाँ किसी किताब में नहीं लिखीं',
      'वो मेरे उन गिने-चुने दोस्तों के साथ हर शाम लिखी गई हैं',
    ],
    linesHinglish: [
      'Meri zindagi ki sabse acchi kahaaniyaan kisi kitaab mein nahin likheen',
      'Wo mere un gine-chune doston ke saath har shaam likhi gayi hain',
    ],
    linesEnglish: [
      'My favorite chapters of life were never printed inside any book',
      'They were written across evenings spent with my handful of true friends',
    ],
  },
  {
    title: 'हल्के-फुल्के पल',
    titleEnglish: 'Lightest Moments',
    linesHindi: [
      'दुनिया के नियम और सख़्ती दरवाज़े के बाहर छूट जाते हैं तब',
      'जब दोस्तों की हँसी के बीच अपना असली रूप खुलकर बाहर आता है',
    ],
    linesHinglish: [
      'Duniya ke niyam aur sakhti darwaaze ke baahar chhoot jaate hain tab',
      'Jab doston ki hansi ke beech apna asli roop khulkar baahar aata hai',
    ],
    linesEnglish: [
      'Every stiff rule of the outside world drops right outside the door',
      'The second laughter with your closest friends lets your real self breathe',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'सच्ची दोस्ती की उम्र',
    titleEnglish: 'Timeless Bond',
    linesHindi: [
      'सफ़ेद बाल आ जाएँ तब भी यही नालायक़ दोस्त साथ बैठेंगे मेरे',
      'चाय के कप हाथ में लेकर हम फिर वही पुराने क़िस्से छेड़ेंगे मेरे',
    ],
    linesHinglish: [
      'Safed baal aa jaayein tab bhi yahi naalaayak dost saath baithenge mere',
      'Chai ke cup haath mein lekar hum phir wahi purane qisse chhedenge mere',
    ],
    linesEnglish: [
      'Even when our hair turns silver, these same silly friends will sit by me',
      'Holding warm cups of tea and retelling our oldest stories all over again',
    ],
  },
  {
    title: 'कड़वी मगर सच्ची सलाह',
    titleEnglish: 'Honest Truth',
    linesHindi: [
      'मीठा झूठ बोलकर जो गड्ढे में धकेल दे वो अपना नहीं होता',
      'कड़वा सच बोलकर जो बचा ले, वही सच्चा यार कहलाता है',
    ],
    linesHinglish: [
      'Meetha jhooth bolkar jo gaddhe mein dhakel de wo apna nahin hota',
      'Kadwa sach bolkar jo bacha le, wahi saccha yaar kehlaata hai',
    ],
    linesEnglish: [
      'Anyone who whispers sweet lies while you walk into trouble is no ally',
      'The one who speaks an uncomfortable truth to save you is a real friend',
    ],
  },
  {
    title: 'यारी का तोहफ़ा',
    titleEnglish: 'Priceless Gift',
    linesHindi: [
      'क़िस्मत ने कई चीज़ें छीनी होंगी मुझसे इस लंबे सफ़र में',
      'पर अच्छे दोस्त देकर उसने सारा हिसाब बराबर कर दिया दिल में',
    ],
    linesHinglish: [
      'Qismat ne kai cheezein chheeni hongi mujhse is lambe safar mein',
      'Par acche dost dekar usne saara hisaab baraabar kar diya dil mein',
    ],
    linesEnglish: [
      'Fate may have taken a few things away along this long road',
      'Yet by gifting me loyal friends, it settled the score generously',
    ],
  },
  {
    title: 'दिल से जुड़ा नाम',
    titleEnglish: 'Written on the Heart',
    linesHindi: [
      'साल भर बात न हो तो भी दिल में जगह कम नहीं होती उनकी',
      'सच्चे दोस्त हमेशा रूह के सबसे क़रीब वाले कोने में रहते हैं',
    ],
    linesHinglish: [
      'Saal bhar baat na ho to bhi dil mein jagah kam nahin hoti unki',
      'Sacche dost hamesha rooh ke sabse qareeb waale kone mein rehte hain',
    ],
    linesEnglish: [
      'Even if a whole year passes without a call, their place never shrinks',
      'Real friends forever live inside the warmest corner of the soul',
    ],
  },
  {
    title: 'हँसी-ठिठोली का घर',
    titleEnglish: 'House of Laughter',
    linesHindi: [
      'ज़िंदगी की भागदौड़ में बस एक यही ठिकाना सुकून देता है',
      'जहाँ हर यार बिना किसी फ़िक्र के दिल खोलकर हँस लेता है',
    ],
    linesHinglish: [
      'Zindagi ki bhaagdaud mein bas ek yahi thikaana sukoon deta hai',
      'Jahaan har yaar bina kisi fikr ke dil kholkar hans leta hai',
    ],
    linesEnglish: [
      'In the relentless rush of life, only this circle feels like pure peace',
      'Where every friend drops their guard and laughs without a single worry',
    ],
  },
  {
    title: 'दोस्त नाम का फरिश्ता',
    titleEnglish: 'Angel Named Friend',
    linesHindi: [
      'जब हर उम्मीद का दिया बुझता हुआ दिखने लगता है आँखों को',
      'तब दोस्त आकर हौसले की नई लौ जला देता है राहों में',
    ],
    linesHinglish: [
      'Jab har ummeed ka diya bujhta hua dikhne lagta hai aankhon ko',
      'Tab dost aakar hausle ki nayi lau jala deta hai raahon mein',
    ],
    linesEnglish: [
      'When every lamp of hope appears to flicker low before your eyes',
      'A true friend arrives and sparks fresh courage right along your path',
    ],
  },
  {
    title: 'अनगिनत किस्से',
    titleEnglish: 'Countless Stories',
    linesHindi: [
      'हमारी दोस्ती के किस्से किसी एक शाम में पूरे नहीं हो सकते',
      'हर मुलाक़ात के साथ एक नया यादगार पन्ना जुड़ जाता है इसमें',
    ],
    linesHinglish: [
      'Hamaari dosti ke qisse kisi ek shaam mein poore nahin ho sakte',
      'Har mulaaqaat ke saath ek naya yaadgaar panna jud jaata hai ismein',
    ],
    linesEnglish: [
      'The stories of our friendship could never fit into a single evening',
      'Every time we meet, another unforgettable page gets added to the book',
    ],
  },
  {
    title: 'सच्ची दोस्ती की जीत',
    titleEnglish: 'Victory of Loyalty',
    linesHindi: [
      'नफ़रत और स्वार्थ की आंधियाँ बहुत चलीं आसपास हमारे',
      'पर सच्ची यारी का पेड़ हर तूफ़ान के बाद भी हरा ही रहा यारो',
    ],
    linesHinglish: [
      'Nafrat aur swaarth ki aandhiyaan bahut chaleen aaspaas hamaare',
      'Par sacchi yaari ka ped har toofaan ke baad bhi hara hi raha yaaro',
    ],
    linesEnglish: [
      'Storms of envy and selfishness blew hard around us plenty of times',
      'Yet the tree of our true friendship stayed green through every gale',
    ],
  },
  {
    title: 'तुम जैसा कोई नहीं',
    titleEnglish: 'One of a Kind Friend',
    linesHindi: [
      'हज़ारों मिल जाएँगे ज़िंदगी की इस लंबी यात्रा में आगे चलकर',
      'पर तुम्हारी जगह कोई ले सके, ऐसा शख़्स अब तक बना ही नहीं यार',
    ],
    linesHinglish: [
      'Hazaaron mil jaayenge zindagi ki is lambi yatra mein aage chalkar',
      'Par tumhaari jagah koi le sake, aisa shakhs ab tak bana hi nahin yaar',
    ],
    linesEnglish: [
      'Thousands of acquaintances will cross paths with me down the road',
      'Yet nobody has ever been made who could replace your spot, my friend',
    ],
  },
  {
    title: 'दोस्ती ज़िंदाबाद',
    titleEnglish: 'Long Live True Friends',
    linesHindi: [
      'चाहे जितने बदल जाएँ मौसम और हालात इस दुनिया के मेरे यार',
      'हमारी यारी कल भी बेमिसाल थी और आने वाले हर कल में रहेगी तैयार',
    ],
    linesHinglish: [
      'Chaahe jitne badal jaayein mausam aur haalaat is duniya ke mere yaar',
      'Hamaari yaari kal bhi bemisaal thi aur aane waale har kal mein rahegi taiyaar',
    ],
    linesEnglish: [
      'No matter how wildly seasons and circumstances shift around us',
      'Our friendship stood unmatched yesterday and will stand tall every tomorrow',
    ],
  },
];

export const UNIQUE_DOSTI_170 = buildUniqueShayaris(
  'dosti',
  'Dosti Shayari (दोस्ती शायरी)',
  '🤝',
  31,
  DOSTI_ENTRIES
);
