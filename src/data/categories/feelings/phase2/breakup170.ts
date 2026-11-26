import { buildUniqueShayaris, UniqueShayariEntry } from '../unique/helper';

const BREAKUP_ENTRIES: UniqueShayariEntry[] = [
  // Block 1 (1-20)
  {
    title: 'अधूरा सफ़र, पूरी सीख',
    titleEnglish: 'Incomplete Road, Complete Lesson',
    linesHindi: [
      'हम दोनों ने चाहा तो था साथ चलना उम्र भर के लिए शायद',
      'कुछ रास्तों पर आकर अलग होना भी ज़रूरी हो जाता है',
    ],
    linesHinglish: [
      'Hum donon ne chaaha to tha saath chalna umr bhar ke liye shaayad',
      'Kuch raaston par aakar alag hona bhi zaroori ho jaata hai',
    ],
    linesEnglish: [
      'Maybe both of us truly hoped to walk together for a lifetime',
      'Yet at certain crossroads, parting ways becomes the healthiest step',
    ],
  },
  {
    title: 'ख़ामोश विदाई',
    titleEnglish: 'Gentle Farewell',
    linesHindi: [
      'लड़-झगड़ कर जाने से बेहतर था कि चुपचाप मुड़ जाते हम',
      'कम से कम अच्छी यादों की खुशबू तो सलामत रह जाती है',
    ],
    linesHinglish: [
      'Lad-jhagad kar jaane se behtar tha ki chupchaap mud jaate hum',
      'Kam se kam acchi yaadon ki khushboo to salaamat reh jaati hai',
    ],
    linesEnglish: [
      'Turning away gently beats ending in bitter shouting matches',
      'At least the warmth of our good memories survives untouched',
    ],
  },
  {
    title: 'अधूरी चैट का कोना',
    titleEnglish: 'Drafts Never Sent',
    linesHindi: [
      'आज भी टाइप करके मिटा देते हैं कई बातें रात के सन्नाटे में',
      'ब्रेकअप के बाद भी आदत जाने में थोड़ा वक़्त तो लगता है',
    ],
    linesHinglish: [
      'Aaj bhi type karke mita dete hain kai baatein raat ke sannaate mein',
      'Breakup ke baad bhi aadat jaane mein thoda waqt to lagta hai',
    ],
    linesEnglish: [
      'I still type out messages and backspace them in the quiet night',
      'Even after a breakup, letting go of daily habits takes a little time',
    ],
  },
  {
    title: 'दिल की समझौता नहीं',
    titleEnglish: 'Outgrowing Each Other',
    linesHindi: [
      'कोई बुरा नहीं था हमारे बीच, बस सोच की राहें बदल गईं',
      'जब ख़ुशी की बजाय थकान मिलने लगे तो रुक जाना सही है',
    ],
    linesHinglish: [
      'Koi bura nahin tha hamaare beech, bas soch ki raahein badal gayeen',
      'Jab khushi ki bajaay thakaan milne lage to ruk jaana sahi hai',
    ],
    linesEnglish: [
      'Neither of us was the villain—our paths simply grew in different directions',
      'When staying drains more peace than it brings, pausing is the right call',
    ],
  },
  {
    title: 'चाय दो से एक कप',
    titleEnglish: 'One Cup Instead of Two',
    linesHindi: [
      'कल तक शाम की चाय में दो कप की आदत थी मेरी टेबल पर',
      'अब एक कप में भी पूरा सुकून ढूँढना सीख रहा हूँ धीरे-धीरे',
    ],
    linesHinglish: [
      'Kal tak shaam ki chai mein do cup ki aadat thi meri table par',
      'Ab ek cup mein bhi poora sukoon dhoondhna seekh raha hoon dheere-dheere',
    ],
    linesEnglish: [
      'My evening table used to hold two warm teacups out of habit',
      'Slowly I am learning how to find calm in pouring just one',
    ],
  },
  {
    title: 'दिल का मौसम बदला',
    titleEnglish: 'Changing Inner Weather',
    linesHindi: [
      'पहले तुम्हारे बिना एक घंटा भी काटना भारी लगता था मुझे',
      'आज पूरा महीना गुज़र जाता है और मन बिल्कुल शांत रहता है',
    ],
    linesHinglish: [
      'Pehle tumhaare bina ek ghanta bhi kaatna bhaari lagta tha mujhe',
      'Aaj poora mahina guzar jaata hai aur man bilkul shaant rehta hai',
    ],
    linesEnglish: [
      'Once upon a time even one hour without you felt unbearable',
      'Now a whole month slips by and my heart feels steady and calm',
    ],
  },
  {
    title: 'इज़्ज़त के साथ दूरी',
    titleEnglish: 'Parting With Respect',
    linesHindi: [
      'रिश्ता टूट भी जाए तो एक-दूसरे का सम्मान नहीं खोना चाहिए',
      'हम कभी अजनबी न थे, यही याद रखकर आगे बढ़ना चाहिए',
    ],
    linesHinglish: [
      'Rishta toot bhi jaaye to ek-doosre ka sammaan nahin khona chahiye',
      'Hum kabhi ajnabi na the, yahi yaad rakhkar aage badhna chahiye',
    ],
    linesEnglish: [
      'Even when a relationship ends, mutual respect should never vanish',
      'Remembering we once cared deeply helps both of us move forward gently',
    ],
  },
  {
    title: 'ख़ुद से दोबारा मुलाक़ात',
    titleEnglish: 'Reclaiming Myself',
    linesHindi: [
      'ब्रेकअप ने भले ही दिल को थोड़ा सा झकझोर दिया पहले दिन',
      'पर उसी मोड़ से मेरी ख़ुद से असली मुलाक़ात भी शुरू हुई',
    ],
    linesHinglish: [
      'Breakup ne bhale hi dil ko thoda sa jhakjhor diya pehle din',
      'Par usi mod se meri khud se asli mulaaqaat bhi shuru hui',
    ],
    linesEnglish: [
      'The breakup surely shook my world during those first quiet days',
      'Yet right from that turn, I started meeting my true self again',
    ],
  },
  {
    title: 'यादों की धूप-छाँव',
    titleEnglish: 'Bittersweet Flashbacks',
    linesHindi: [
      'कोई पुराना गाना बजते ही आज भी हल्की मुस्कान आ जाती है',
      'अच्छी बात ये है कि अब उस याद में आँखें नम नहीं होतीं',
    ],
    linesHinglish: [
      'Koi purana gaana bajte hi aaj bhi halki muskaan aa jaati hai',
      'Acchi baat ye hai ki ab us yaad mein aankhein nam nahin hoteen',
    ],
    linesEnglish: [
      'An old song on the radio still brings a gentle smile to my face',
      'The best part is that those memories no longer leave my eyes wet',
    ],
  },
  {
    title: 'ज़बरदस्ती का साथ नहीं',
    titleEnglish: 'Never Force Love',
    linesHindi: [
      'जिस बंधन को संभालने में दोनों को हर रोज़ टूटना पड़े अंदर से',
      'उसे प्यार की निशानी मानकर ज़बरदस्ती पकड़े रखना ठीक नहीं',
    ],
    linesHinglish: [
      'Jis bandhan ko sambhaalne mein donon ko har roz tootna pade andar se',
      'Use pyaar ki nishaani maankar zabardasti pakde rakhna theek nahin',
    ],
    linesEnglish: [
      'A bond that leaves both people breaking quietly every single day',
      'Should never be held onto out of stubbornness in the name of love',
    ],
  },
  {
    title: 'नींद की वापसी',
    titleEnglish: 'Peaceful Sleep Returns',
    linesHindi: [
      'करवटें बदलते हुए गुज़री थीं शुरुआती रातें जाने के बाद तेरे',
      'अब दिल हल्का है और सुबह की धूप पहले से ज़्यादा प्यारी लगती है',
    ],
    linesHinglish: [
      'Karwatein badalte hue guzri theen shuruaati raatein jaane ke baad tere',
      'Ab dil halka hai aur subah ki dhoop pehle se zyada pyaari lagti hai',
    ],
    linesEnglish: [
      'Tossing and turning filled those first nights after you walked away',
      'Now my chest feels light and morning sunlight looks warmer than ever',
    ],
  },
  {
    title: 'अधूरा अध्याय',
    titleEnglish: 'When Pages Stay Unfinished',
    linesHindi: [
      'ज़िंदगी की किताब का हर पन्ना मुकम्मल हो ऐसा ज़रूरी तो नहीं',
      'कुछ अधूरे हिस्से भी हमें बेहतर इंसान बनाकर आगे बढ़ा देते हैं',
    ],
    linesHinglish: [
      'Zindagi ki kitaab ka har panna mukammal ho aisa zaroori to nahin',
      'Kuch adhoore hisse bhi humein behtar insaan banaakar aage badha dete hain',
    ],
    linesEnglish: [
      'Not every chapter in life’s book needs a neat happily-ever-after ending',
      'Some unfinished chapters simply shape us into wiser, steadier souls',
    ],
  },
  {
    title: 'दोस्त बनकर भी नहीं',
    titleEnglish: 'Clean Space Needed',
    linesHindi: [
      'ब्रेकअप के बाद दोस्त बने रहने की बात सुनने में अच्छी लगती है',
      'पर सच्चे जज़्बातों को साफ़ होने के लिए थोड़ी दूरी ज़रूरी होती है',
    ],
    linesHinglish: [
      'Breakup ke baad dost bane rehne ki baat sunne mein acchi lagti hai',
      'Par sacche jazbaaton ko saaf hone ke liye thodi doori zaroori hoti hai',
    ],
    linesEnglish: [
      'Staying friends right after a breakup sounds mature on paper',
      'In reality, real feelings need quiet space to settle and heal cleanly',
    ],
  },
  {
    title: 'तुम्हारी खुशी की दुआ',
    titleEnglish: 'Wishing You Well',
    linesHindi: [
      'रास्ते अलग हो गए तो क्या, मन में कोई नफ़रत नहीं पाली हमने',
      'जहाँ भी रहो मुस्कुराते रहो, बस यही आख़िरी बात कही हमने',
    ],
    linesHinglish: [
      'Raaste alag ho gaye to kya, man mein koi nafrat nahin paali humne',
      'Jahaan bhi raho muskuraate raho, bas yahi aakhiri baat kahi humne',
    ],
    linesEnglish: [
      'Our roads forked apart, yet I refused to carry bitterness along',
      'Stay happy wherever life takes you—that is all I wish for you now',
    ],
  },
  {
    title: 'खाली गली, नया रास्ता',
    titleEnglish: 'Quiet Street New Path',
    linesHindi: [
      'जिस मोड़ पर रोज़ मिलते थे हम दोनों शाम की चाय के लिए',
      'आज वहाँ से गुज़रा तो दिल ने बस शांत मुस्कान से सलाम किया',
    ],
    linesHinglish: [
      'Jis mod par roz milte the hum donon shaam ki chai ke liye',
      'Aaj wahaan se guzra to dil ne bas shaant muskaan se salaam kiya',
    ],
    linesEnglish: [
      'I walked past the street corner where we used to meet every evening',
      'Today my heart simply nodded at the memory with a quiet, steady smile',
    ],
  },
  {
    title: 'टूटने के बाद निखार',
    titleEnglish: 'Growth After Rain',
    linesHindi: [
      'ज़मीन पर जब बारिश बरसती है तो मिट्टी थोड़ा बिखरती ज़रूर है',
      'पर उसी नमी के बाद सबसे प्यारे फूल भी तो खिलते हैं',
    ],
    linesHinglish: [
      'Zameen par jab baarish barasti hai to mitti thoda bikharti zaroor hai',
      'Par usi nami ke baad sabse pyaare phool bhi to khilte hain',
    ],
    linesEnglish: [
      'Heavy rain always scatters the earth a little at the start',
      'Yet right after that downpour, the brightest blossoms begin to open',
    ],
  },
  {
    title: 'दिल का बोझ हल्का',
    titleEnglish: 'Letting Go Gently',
    linesHindi: [
      'हर बात मन में दबाकर रखने से ज़्यादा थकान कुछ नहीं देती',
      'एक गहरी साँस लेकर छोड़ देना ही सबसे बड़ी राहत देती है',
    ],
    linesHinglish: [
      'Har baat man mein dabaakar rakhne se zyada thakaan kuch nahin deti',
      'Ek gehri saans lekar chhod dena hi sabse badi raahat deti hai',
    ],
    linesEnglish: [
      'Nothing drains you faster than keeping unspoken weight locked inside',
      'Taking one slow breath and finally letting go brings true relief',
    ],
  },
  {
    title: 'अपनी पहचान वापस',
    titleEnglish: 'Back in My Rhythm',
    linesHindi: [
      'किसी और की पसंद के मुताबिक़ ख़ुद को ढालते-ढालते थक गया था',
      'अब फिर से अपने मन के गाने सुनना और गुनगुनाना शुरू किया है',
    ],
    linesHinglish: [
      'Kisi aur ki pasand ke mutaabiq khud ko dhalte-dhalte thak gaya tha',
      'Ab phir se apne man ke gaane sunna aur gungunaana shuru kiya hai',
    ],
    linesEnglish: [
      'I grew tired trying to reshape myself to fit someone else’s checklist',
      'Now I am humming my own favorite songs again without holding back',
    ],
  },
  {
    title: 'वक़्त की मरहमपट्टी',
    titleEnglish: 'Slow Steady Healing',
    linesHindi: [
      'कोई जादू एक रात में सारा दर्द ग़ायब नहीं कर देता कभी',
      'बस हर गुज़रता दिन थोड़ा-थोड़ा सुकून जोड़ता जाता है दिल में',
    ],
    linesHinglish: [
      'Koi jaadu ek raat mein saara dard gaayab nahin kar deta kabhi',
      'Bas har guzarta din thoda-thoda sukoon jodta jaata hai dil mein',
    ],
    linesEnglish: [
      'No magic erases heartache completely in a single overnight sleep',
      'Each passing morning just adds a little more calm back into your chest',
    ],
  },
  {
    title: 'नए कल की शुरुआत',
    titleEnglish: 'Starting Fresh Today',
    linesHindi: [
      'कल जो खत्म हुआ वो मेरी पूरी ज़िंदगी नहीं था, सिर्फ़ एक मोड़ था',
      'आगे की पूरी सड़क अभी खाली है और मेरा इंतज़ार कर रही है',
    ],
    linesHinglish: [
      'Kal jo khatm hua wo meri poori zindagi nahin tha, sirf ek mod tha',
      'Aage ki poori sadak abhi khaali hai aur mera intezaar kar rahi hai',
    ],
    linesEnglish: [
      'What ended yesterday was never my whole life—it was just one bend',
      'The entire open highway ahead is still waiting cleanly for my steps',
    ],
  },
  // Block 2 (21-40)
  {
    title: 'अधूरी फ़ोन कॉल',
    titleEnglish: 'Quiet Phone Screen',
    linesHindi: [
      'रात के बारह बजे अब मोबाइल की स्क्रीन चमकती नहीं पहले जैसी',
      'पर इस सन्नाटे में भी अब अपनी धड़कनों से दोस्ती हो चली है',
    ],
    linesHinglish: [
      'Raat ke baarah baje ab mobile ki screen chamakti nahin pehle jaisi',
      'Par is sannaate mein bhi ab apni dhadkanon se dosti ho chali hai',
    ],
    linesEnglish: [
      'My phone screen no longer lights up at midnight like it used to',
      'Yet even inside this quiet, I am growing comfortable with my own heart',
    ],
  },
  {
    title: 'ग़लत वक़्त के सही लोग',
    titleEnglish: 'Right People Wrong Timing',
    linesHindi: [
      'कुछ लोग दिल के बेहद क़रीब होकर भी साथ नहीं चल पाते पूरा',
      'शायद उनके होने से हमें बस मोहब्बत का मतलब सीखना होता है',
    ],
    linesHinglish: [
      'Kuch log dil ke behad qareeb hokar bhi saath nahin chal paate poora',
      'Shaayad unke hone se humein bas mohabbat ka matlab seekhna hota hai',
    ],
    linesEnglish: [
      'Some souls sit close to your heart yet cannot walk the whole distance',
      'Perhaps they arrive simply to teach us what gentle love feels like',
    ],
  },
  {
    title: 'दिल से माफ़ी दोनों को',
    titleEnglish: 'Forgiving Both Sides',
    linesHindi: [
      'मैंने तुम्हें भी माफ़ कर दिया और ख़ुद को भी आज़ाद किया है',
      'गलतियाँ दोनों से हुईं, अब बोझ उठाकर चलना बेकार है',
    ],
    linesHinglish: [
      'Maine tumhein bhi maaf kar diya aur khud ko bhi aazaad kiya hai',
      'Galtiyaan donon se hueen, ab bojh uthaakar chalna bekaar hai',
    ],
    linesEnglish: [
      'I forgave you completely and let myself off the hook too',
      'Both of us made human mistakes—carrying that weight any further serves nobody',
    ],
  },
  {
    title: 'यादों की खिड़की',
    titleEnglish: 'Closing the Window Gently',
    linesHindi: [
      'पुरानी यादों की खिड़की अब थोड़ा कम ही खोलता हूँ मैं शाम को',
      'बाहर ताज़ी हवा बह रही है, उसी का स्वागत करता हूँ अब',
    ],
    linesHinglish: [
      'Purani yaadon ki khidki ab thoda kam hi kholta hoon main shaam ko',
      'Baahar taazi hawa beh rahi hai, usi ka swaagat karta hoon ab',
    ],
    linesEnglish: [
      'I rarely open the window to yesterday’s memories anymore at dusk',
      'Fresh air is blowing right outside—that is what I welcome in now',
    ],
  },
  {
    title: 'टूटे हिस्से का सबक़',
    titleEnglish: 'Wisdom in Pieces',
    linesHindi: [
      'हर टूटा हुआ रिश्ता हार नहीं होता इंसान की ज़िंदगी में',
      'कई बार वो हमें हमारी असली क़दर पहचानना सिखा देता है',
    ],
    linesHinglish: [
      'Har toota hua rishta haar nahin hota insaan ki zindagi mein',
      'Kai baar wo humein hamaari asli qadr pehchaanna sikha deta hai',
    ],
    linesEnglish: [
      'Not every ended relationship counts as a defeat in your life',
      'Often it arrives to finally show you your own true worth',
    ],
  },
  {
    title: 'सुकून की चाय',
    titleEnglish: 'Peaceful Morning Tea',
    linesHindi: [
      'सुबह की पहली चाय पीते वक़्त अब किसी के रिप्लाई का इंतज़ार नहीं',
      'अपनी ही कंपनी में बैठकर अख़बार पढ़ने का मज़ा लौट आया है',
    ],
    linesHinglish: [
      'Subah ki pehli chai peete waqt ab kisi ke reply ka intezaar nahin',
      'Apni hi company mein baithkar akhbaar padhne ka maza laut aaya hai',
    ],
    linesEnglish: [
      'Sipping morning tea no longer involves checking my phone every minute',
      'The quiet joy of simply enjoying my own company has returned at last',
    ],
  },
  {
    title: 'अधूरी कहानी का सम्मान',
    titleEnglish: 'Honoring What Was',
    linesHindi: [
      'जो वक़्त साथ बिताया वो सच में बहुत ख़ूबसूरत था हम दोनों का',
      'आज अलग होने का मतलब ये नहीं कि वो सब कुछ झूठा था',
    ],
    linesHinglish: [
      'Jo waqt saath bitaaya wo sach mein bahut khoobsurat tha hum donon ka',
      'Aaj alag hone ka matlab ye nahin ki wo sab kuch jhootha tha',
    ],
    linesEnglish: [
      'The season we shared together held genuine beauty for both of us',
      'Ending today does not erase how real those smiles once were',
    ],
  },
  {
    title: 'बिना किसी शोर के',
    titleEnglish: 'Quiet Acceptance',
    linesHindi: [
      'न स्टेटस पर ताने लिखे मैंने, न किसी दोस्त से शिकायत की',
      'बस चुपचाप मान लिया कि कुछ कहानियाँ यहीं तक लिखी होती हैं',
    ],
    linesHinglish: [
      'Na status par taane likhe maine, na kisi dost se shikaayat ki',
      'Bas chupchaap maan liya ki kuch kahaaniyaan yaheen tak likhi hoti hain',
    ],
    linesEnglish: [
      'I posted zero indirect captions and complained to nobody at all',
      'I simply accepted that some stories were only meant to run this far',
    ],
  },
  {
    title: 'जाते-जाते माफ़ी और सुकून',
    titleEnglish: 'No Grudges Kept',
    linesHindi: [
      'जाते-जाते दिल की किताब से सारे गिले-शिकवे पोंछ दिए मैंने',
      'आने वाली खुशियों के लिए मन में साफ़ जगह बनानी ज़रूरी थी',
    ],
    linesHinglish: [
      'Jaate-jaate dil ki kitaab se saare gile-shikwe ponchh diye maine',
      'Aane waali khushiyon ke liye man mein saaf jagah banaani zaroori thi',
    ],
    linesEnglish: [
      'As the chapter closed, I wiped every complaint cleanly off my chest',
      'Clearing out heavy corners makes room for brighter joys ahead',
    ],
  },
  {
    title: 'नए पंख',
    titleEnglish: 'Finding New Wings',
    linesHindi: [
      'पहले लगता था तुम्हारे बिना उड़ना शायद नामुमकिन सा होगा',
      'आज हवा में निकला तो पता चला कि मेरे पंख अभी सलामत हैं',
    ],
    linesHinglish: [
      'Pehle lagta tha tumhaare bina udna shaayad naamumkin sa hoga',
      'Aaj hawa mein nikla to pata chala ki mere pankh abhi salaamat hain',
    ],
    linesEnglish: [
      'I used to wonder if flying without your hand would ever feel possible',
      'Stepping out into the wind today proved my wings were intact all along',
    ],
  },
  {
    title: 'ख़ाली कुर्सी की शांति',
    titleEnglish: 'Calm Empty Chair',
    linesHindi: [
      'सामने की खाली कुर्सी को देखकर अब दिल घबराता नहीं मेरा',
      'बल्कि सुकून मिलता है कि वहाँ अब कोई अनचाहा तनाव नहीं बैठा',
    ],
    linesHinglish: [
      'Saamne ki khaali kursi ko dekhkar ab dil ghabraata nahin mera',
      'Balki sukoon milta hai ki wahaan ab koi anchaaha tanaav nahin baitha',
    ],
    linesEnglish: [
      'Looking at the empty chair across from me no longer makes my chest ache',
      'Instead I feel peaceful knowing constant tension no longer sits there',
    ],
  },
  {
    title: 'प्यार का सही अर्थ',
    titleEnglish: 'True Meaning of Care',
    linesHindi: [
      'मोहब्बत का मतलब किसी को बांधकर रखना नहीं होता कभी',
      'कभी-कभी आज़ाद छोड़ देना ही सबसे सच्चा प्यार होता है',
    ],
    linesHinglish: [
      'Mohabbat ka matlab kisi ko baandhkar rakhna nahin hota kabhi',
      'Kabhi-kabhi aazaad chhod dena hi sabse saccha pyaar hota hai',
    ],
    linesEnglish: [
      'Love never means holding onto someone against the rhythm of their life',
      'Sometimes letting go with kindness is the purest care you can offer',
    ],
  },
  {
    title: 'भीगे मौसम की सीख',
    titleEnglish: 'After the Storm',
    linesHindi: [
      'जब बादल बरस चुकते हैं तो आसमान कितना नीला दिखता है ना',
      'दिल की भी यही कहानी है, रो लेने के बाद सब साफ़ दिखता है',
    ],
    linesHinglish: [
      'Jab baadal baras chukte hain to aasmaan kitna neela dikhta hai na',
      'Dil ki bhi yahi kahaani hai, ro lene ke baad sab saaf dikhta hai',
    ],
    linesEnglish: [
      'Notice how bright blue the sky looks right after rainclouds empty out',
      'The human heart works the same way—after grieving, everything clears up',
    ],
  },
  {
    title: 'अकेलेपन से दोस्ती',
    titleEnglish: 'Friends With Solitude',
    linesHindi: [
      'तन्हाई से डरकर लोग अक्सर गलत रिश्तों में लौट जाते हैं',
      'मैंने अकेले बैठना सीख लिया तो गलत चुनाव ही ख़त्म हो गए',
    ],
    linesHinglish: [
      'Tanhaai se darkar log aksar galat rishton mein laut jaate hain',
      'Maine akele baithna seekh liya to galat chunaav hi khatm ho gaye',
    ],
    linesEnglish: [
      'Fearing quiet nights pushes many people straight back into wrong matches',
      'Once I learned to enjoy my own space, settling stopped completely',
    ],
  },
  {
    title: 'हँसी का लौटना',
    titleEnglish: 'Authentic Laugh Again',
    linesHindi: [
      'ब्रेकअप के महीनों बाद आज बिना किसी वजह के ज़ोर से हँसा मैं',
      'लगा जैसे बरसों से बंद कमरे की सारी खिड़कियाँ खुल गईं',
    ],
    linesHinglish: [
      'Breakup ke mahinon baad aaj bina kisi wajah ke zor se hansa main',
      'Laga jaise barson se band kamre ki saari khidkiyaan khul gayeen',
    ],
    linesEnglish: [
      'Months after the breakup, I burst out laughing today for no big reason',
      'It felt like throwing open every window in a long-shuttered room',
    ],
  },
  {
    title: 'कद्र की पहचान',
    titleEnglish: 'Knowing My Value',
    linesHindi: [
      'जहाँ मेरी मौजूदगी से ज़्यादा मेरी ख़ामोशी सुकून देने लगे उन्हें',
      'वहाँ से खुद-ब-खुद दूर हट जाना ही मेरी असली समझदारी थी',
    ],
    linesHinglish: [
      'Jahaan meri maujoodgi se zyada meri khaamoshi sukoon dene lage unhein',
      'Wahaan se khud-ba-khud door hat jaana hi meri asli samajhdaari thi',
    ],
    linesEnglish: [
      'When my absence brought them more ease than my voice ever did',
      'Stepping gracefully out of the frame was the wisest gift I gave us both',
    ],
  },
  {
    title: 'तस्वीरों से आगे जीवन',
    titleEnglish: 'Life Beyond Old Photos',
    linesHindi: [
      'फ़ोन की एल्बम में पुरानी तस्वीरें देखकर अब दिल भारी नहीं होता',
      'समझ आ गया है कि वो उस दौर की ख़ुशी थी, आज की राह अलग है',
    ],
    linesHinglish: [
      'Phone ki album mein purani tasveerein dekhkar ab dil bhaari nahin hota',
      'Samajh aa gaya hai ki wo us daur ki khushi thi, aaj ki raah alag hai',
    ],
    linesEnglish: [
      'Scrolling past old photos no longer turns my chest heavy',
      'That joy belonged to an earlier chapter, and today walks a different road',
    ],
  },
  {
    title: 'दिल की दोबारा बुनाई',
    titleEnglish: 'Rebuilding Slowly',
    linesHindi: [
      'दिल की दीवार में दरार आई थी, पूरी इमारत नहीं गिरी मेरी',
      'मैं अब पहले से ज़्यादा मजबूत नींव पर नया घर बना रहा हूँ',
    ],
    linesHinglish: [
      'Dil ki deewar mein daraar aayi thi, poori imaarat nahin giri meri',
      'Main ab pehle se zyada mazboot neev par naya ghar bana raha hoon',
    ],
    linesEnglish: [
      'Only one wall cracked—my whole foundation never collapsed',
      'Now I am rebuilding my peace on steadier ground than ever before',
    ],
  },
  {
    title: 'अनचाहा समझौता नहीं',
    titleEnglish: 'No More Half Measures',
    linesHindi: [
      'आधा-अधूरा अपनापन लेने की मेरी आदत अब छूट चुकी है',
      'या तो दिल से साथ हो कोई, या फिर मैं अकेले ही बिल्कुल ठीक हूँ',
    ],
    linesHinglish: [
      'Aadha-adhoora apnaapan lene ki meri aadat ab chhoot chuki hai',
      'Ya to dil se saath ho koi, ya phir main akele hi bilkul theek hoon',
    ],
    linesEnglish: [
      'I outgrew the habit of accepting half-hearted crumbs of affection',
      'Either meet me wholeheartedly, or I am genuinely happy on my own',
    ],
  },
  {
    title: 'वक़्त के साथ समझ',
    titleEnglish: 'Perspective With Time',
    linesHindi: [
      'जिस दिन अलग हुए थे, लगा था सब कुछ थम गया यहीं पर',
      'एक साल बाद पीछे देखा तो लगा वही फ़ैसला सबसे सही था',
    ],
    linesHinglish: [
      'Jis din alag hue the, laga tha sab kuch tham gaya yaheen par',
      'Ek saal baad peechhe dekha to laga wahi faisla sabse sahi tha',
    ],
    linesEnglish: [
      'The afternoon we parted, it felt like time itself froze right there',
      'Looking back a year later, that difficult ending saved us both',
    ],
  },
  // Block 3 (41-60)
  {
    title: 'नींद से पहले शांति',
    titleEnglish: 'Quiet Before Sleep',
    linesHindi: [
      'सोने से पहले अब सिर में सौ सवालों का शोर नहीं गूँजता',
      'तकिये पर सिर रखते ही एक शांत सा सुकून गले लगा लेता है',
    ],
    linesHinglish: [
      'Sone se pehle ab sir mein sau sawaalon ka shor nahin goonjta',
      'Takiye par sir rakhte hi ek shaant sa sukoon gale laga leta hai',
    ],
    linesEnglish: [
      'Before sleep, a hundred anxious questions no longer echo in my mind',
      'As soon as my head touches the pillow, calm settles right beside me',
    ],
  },
  {
    title: 'बिखरे धागे समेटे',
    titleEnglish: 'Gathered Loose Ends',
    linesHindi: [
      'हमने कोशिश तो पूरी की थी उलझे धागों को बचाने की यार',
      'जब धागे ही कमजोर पड़ जाएँ तो उन्हें छोड़ देना ही बेहतर है',
    ],
    linesHinglish: [
      'Humne koshish to poori ki thi uljhe dhaagon ko bachaane ki yaar',
      'Jab dhaage hi kamzor pad jaayein to unhein chhod dena hi behtar hai',
    ],
    linesEnglish: [
      'We gave it an honest shot trying to save every tangled thread',
      'When the fabric itself grows frail, laying it down gently makes sense',
    ],
  },
  {
    title: 'दिल का नया पन्ना',
    titleEnglish: 'Blank New Page',
    linesHindi: [
      'पुरानी स्याही के धब्बों को ही देखते रहने से क्या होगा भला',
      'आज ज़िंदगी की डायरी का बिल्कुल साफ़ नया पन्ना पलटा है मैंने',
    ],
    linesHinglish: [
      'Purani syaahi ke dhabbon ko hi dekhte rehne se kya hoga bhala',
      'Aaj zindagi ki diary ka bilkul saaf naya panna palta hai maine',
    ],
    linesEnglish: [
      'What good comes from staring at old ink smudges forever',
      'Today I turned cleanly onto a crisp blank page in my journal',
    ],
  },
  {
    title: 'प्यार में आज़ादी',
    titleEnglish: 'Freedom Over Friction',
    linesHindi: [
      'जहाँ हर बात पर सफ़ाई देनी पड़े और डर बना रहे मन में',
      'उस बंधन से बाहर आकर आज़ाद साँस लेना ज़्यादा ज़रूरी था',
    ],
    linesHinglish: [
      'Jahaan har baat par safaai deni pade aur dar bana rahe man mein',
      'Us bandhan se baahar aakar aazaad saans lena zyada zaroori tha',
    ],
    linesEnglish: [
      'Where every sentence requires an explanation and worry hangs overhead',
      'Stepping out to breathe freely again was the bravest choice',
    ],
  },
  {
    title: 'मुस्कान उधार नहीं',
    titleEnglish: 'Own My Smile',
    linesHindi: [
      'अपनी खुशी की चाबी किसी दूसरे की जेब में रखना ग़लत था मेरा',
      'अब मेरे मुस्कुराने की वजह मैं ख़ुद हूँ, कोई और नहीं',
    ],
    linesHinglish: [
      'Apni khushi ki chaabi kisi doosre ki jeb mein rakhna galat tha mera',
      'Ab mere muskuraane ki wajah main khud hoon, koi aur nahin',
    ],
    linesEnglish: [
      'Leaving the key to my happiness inside someone else’s pocket was my mistake',
      'From here on, I am the reason behind my own smile',
    ],
  },
  {
    title: 'चुपचाप दूरी',
    titleEnglish: 'Soft Distance',
    linesHindi: [
      'बिना किसी कड़वाहट के भी दो लोग अलग रास्ते चुन सकते हैं',
      'हर अंत में दुश्मनी हो ऐसा ज़रूरी नहीं होता मेरे दोस्त',
    ],
    linesHinglish: [
      'Bina kisi kadwaahat ke bhi do log alag raaste chun sakte hain',
      'Har ant mein dushmani ho aisa zaroori nahin hota mere dost',
    ],
    linesEnglish: [
      'Two people can choose separate paths without turning into enemies',
      'Not every goodbye has to end in anger or ruined memories',
    ],
  },
  {
    title: 'हवा का रुख बदला',
    titleEnglish: 'Wind Changed Direction',
    linesHindi: [
      'बंद खिड़कियों में कब तक उदासी का धुआँ समेटकर रखता मैं',
      'हवा का रुख़ बदला और मैंने भी नए सफ़र का दामन थाम लिया',
    ],
    linesHinglish: [
      'Band khidkiyon mein kab tak udaasi ka dhuaan sametkar rakhta main',
      'Hawa ka rukh badla aur maine bhi naye safar ka daaman thaam liya',
    ],
    linesEnglish: [
      'How long could I stay inside a shut room holding yesterday’s fog',
      'The breeze shifted, and I stepped out ready for a fresh chapter',
    ],
  },
  {
    title: 'दिल की समझ',
    titleEnglish: 'Heart Understands',
    linesHindi: [
      'पहली बार दिल टूटा तो लगा कि दुनिया ही उजड़ गई सारी',
      'बाद में समझा कि वो बस एक कच्चा घर था जो बदलना था',
    ],
    linesHinglish: [
      'Pehli baar dil toota to laga ki duniya hi ujad gayi saari',
      'Baad mein samjha ki wo bas ek kaccha ghar tha jo badalna tha',
    ],
    linesEnglish: [
      'The first heartbreak makes it feel as if your whole world collapsed',
      'Later you realize it was only a fragile shelter making way for stronger ground',
    ],
  },
  {
    title: 'अनकही शुक्रिया',
    titleEnglish: 'Quiet Gratitude',
    linesHindi: [
      'साथ रहने के लिए भी शुक्रिया और वक़्त रहते जाने के लिए भी',
      'तुम्हारे दोनों फ़ैसलों ने मुझे आज का बेहतर इंसान बनाया है',
    ],
    linesHinglish: [
      'Saath rehne ke liye bhi shukriya aur waqt rehte jaane ke liye bhi',
      'Tumhaare donon faislon ne mujhe aaj ka behtar insaan banaaya hai',
    ],
    linesEnglish: [
      'Thank you for the season you stayed, and for leaving when it was time',
      'Both choices helped shape me into the stronger person standing here today',
    ],
  },
  {
    title: 'सुकून की तलाश पूरी',
    titleEnglish: 'Peace Found Within',
    linesHindi: [
      'दूसरों में जो सुकून मैं बरसों तक ढूँढता रहा भटककर',
      'ब्रेकअप के बाद वही सुकून मुझे ख़ुद के भीतर शांत बैठा मिला',
    ],
    linesHinglish: [
      'Doosron mein jo sukoon main barson tak dhoondhta raha bhatakkar',
      'Breakup ke baad wahi sukoon mujhe khud ke bheetar shaant baitha mila',
    ],
    linesEnglish: [
      'The calm I spent years chasing inside somebody else’s approval',
      'Was sitting quietly inside my own chest the whole time',
    ],
  },
  {
    title: 'मीठी आदत छूटी',
    titleEnglish: 'Habit Outgrown',
    linesHindi: [
      'हर छोटी बात सबसे पहले तुम्हें बताने की आदत थी मेरी',
      'अब दिन की कहानियाँ मैं ख़ुद से ही मुस्कुराकर साझा कर लेता हूँ',
    ],
    linesHinglish: [
      'Har chhoti baat sabse pehle tumhein bataane ki aadat thi meri',
      'Ab din ki kahaaniyaan main khud se hi muskuraakar saajha kar leta hoon',
    ],
    linesEnglish: [
      'I used to rush to tell you every tiny highlight of my afternoon',
      'Now I smile and hold those little daily stories comfortably on my own',
    ],
  },
  {
    title: 'आँसू से मुस्कान तक',
    titleEnglish: 'Tears to Quiet Smiles',
    linesHindi: [
      'शुरू में जो नाम सुनते ही गला भर आता था मेरा अचानक',
      'आज उसी नाम पर एक परिपक्व मुस्कान के साथ आगे बढ़ जाता हूँ',
    ],
    linesHinglish: [
      'Shuru mein jo naam sunte hi gala bhar aata tha mera achaanak',
      'Aaj usi naam par ek paripakwa muskaan ke saath aage badh jaata hoon',
    ],
    linesEnglish: [
      'At first hearing your name made my throat tighten out of nowhere',
      'Today I nod with a steady, grown-up smile and keep walking smoothly',
    ],
  },
  {
    title: 'डगमगाकर संभलने का हुनर',
    titleEnglish: 'My Own Anchor',
    linesHindi: [
      'जब हाथ छूटता है तो इंसान थोड़ा डगमगाता ज़रूर है पहले',
      'पर गिरने से पहले खुद को थाम लेने का हुनर भी आ जाता है',
    ],
    linesHinglish: [
      'Jab haath chhoot-ta hai to insaan thoda dagmagaata zaroor hai pehle',
      'Par girne se pehle khud ko thaam lene ka hunar bhi aa jaata hai',
    ],
    linesEnglish: [
      'When a familiar hand lets go, your balance wobbles briefly',
      'Soon enough you discover how strong your own footing really is',
    ],
  },
  {
    title: 'नए दोस्त, नया उजाला',
    titleEnglish: 'Old Circle New Light',
    linesHindi: [
      'एक रिश्ता टूटा तो एहसास हुआ कि कितने अपने आसपास खड़े हैं',
      'मेरे यारों और परिवार ने एक पल भी अकेला महसूस नहीं होने दिया',
    ],
    linesHinglish: [
      'Ek rishta toota to ehsaas hua ki kitne apne aaspaas khade hain',
      'Mere yaaron aur parivaar ne ek pal bhi akela mehsoos nahin hone diya',
    ],
    linesEnglish: [
      'When one bond ended, I noticed how many true loved ones stood right here',
      'My friends and family never let a single evening feel truly lonely',
    ],
  },
  {
    title: 'सही दूरी का सम्मान',
    titleEnglish: 'Healthy Boundaries',
    linesHindi: [
      'कुछ लोगों से प्यार करने का सबसे अच्छा तरीका उनसे दूर रहना है',
      'ताकि न उनका दिल दुखे और न मेरा सुकून दोबारा बिखरे',
    ],
    linesHinglish: [
      'Kuch logon se pyaar karne ka sabse accha tareeka unse door rehna hai',
      'Taaki na unka dil dukhe aur na mera sukoon dobaara bikhre',
    ],
    linesEnglish: [
      'Sometimes the kindest way to care for someone is from a calm distance',
      'So neither their heart gets bruised nor my peace shatters twice',
    ],
  },
  {
    title: 'पुराना शहर, नया मैं',
    titleEnglish: 'Same Town Newer Me',
    linesHindi: [
      'सड़कें वही हैं, शाम की चाय और हवा भी बिल्कुल वैसी ही है',
      'बस उस भीड़ में अब मैं पहले से ज़्यादा सँभला हुआ चलता हूँ',
    ],
    linesHinglish: [
      'Sadkein wahi hain, shaam ki chai aur hawa bhi bilkul waisi hi hai',
      'Bas us bheed mein ab main pehle se zyada sambhla hua chalta hoon',
    ],
    linesEnglish: [
      'The streets look unchanged and the evening air feels just the same',
      'Only now I walk through those lanes steadier and wiser than before',
    ],
  },
  {
    title: 'वक़्त से बड़ा मरहम नहीं',
    titleEnglish: 'Time Heals Softly',
    linesHindi: [
      'चाहे जितना गहरा हो दर्द, वक़्त की धूप में हल्का पड़ ही जाता है',
      'बस सब्र रखो, हर टूटा हुआ दिल फिर से धड़कना सीख जाता है',
    ],
    linesHinglish: [
      'Chaahe jitna gehra ho dard, waqt ki dhoop mein halka pad hi jaata hai',
      'Bas sabr rakho, har toota hua dil phir se dhadakna seekh jaata hai',
    ],
    linesEnglish: [
      'No matter how deep the ache feels, time gently softens every edge',
      'Stay patient—every bruised heart eventually remembers how to beat bright again',
    ],
  },
  {
    title: 'ज़ख़्म से फूल तक',
    titleEnglish: 'Blooming After Pain',
    linesHindi: [
      'सर्दियाँ बीतने पर सूखी टहनियों पर भी नए पत्ते निकल आते हैं',
      'मेरा दिल भी इस पतझड़ के बाद फिर से हरा होने लगा है',
    ],
    linesHinglish: [
      'Sardiyaan beetne par sookhi tehniyon par bhi naye patte nikal aate hain',
      'Mera dil bhi is patjhad ke baad phir se hara hone laga hai',
    ],
    linesEnglish: [
      'Once winter passes, fresh green leaves sprout on bare branches again',
      'My heart too is quietly turning bright and alive after its autumn',
    ],
  },
  {
    title: 'रिश्ता टूटे पर उम्मीद नहीं',
    titleEnglish: 'Choosing Peace',
    linesHindi: [
      'कहानी ख़त्म होने का मतलब ये नहीं कि प्यार ख़त्म हो गया दुनिया से',
      'इसका मतलब बस इतना है कि ये पन्ना यहीं पूरा होना लिखा था',
    ],
    linesHinglish: [
      'Kahaani khatm hone ka matlab ye nahin ki pyaar khatm ho gaya duniya se',
      'Iska matlab bas itna hai ki ye panna yaheen poora hona likha tha',
    ],
    linesEnglish: [
      'One story ending does not mean real love vanished from the earth',
      'It simply means that particular chapter reached its natural last line',
    ],
  },
  {
    title: 'मुस्कुराता हुआ आगे',
    titleEnglish: 'Stepping Forward',
    linesHindi: [
      'पीछे मुड़कर देखने में आँखों को सिर्फ़ धूल ही मिलती है अक्सर',
      'आगे की ओर चलो, हर मोड़ पर नया उजाला बाहें फैलाए खड़ा है',
    ],
    linesHinglish: [
      'Peechhe mudkar dekhne mein aankhon ko sirf dhool hi milti hai aksar',
      'Aage ki or chalo, har mod par naya ujaala baahein phailaaye khada hai',
    ],
    linesEnglish: [
      'Glancing backward too often only fills your eyes with old dust',
      'Look ahead—fresh daylight stands waiting around the very next bend',
    ],
  },
  // Block 4 (61-80)
  {
    title: 'आख़िरी गुडबाय',
    titleEnglish: 'Soft Last Goodbye',
    linesHindi: [
      'आख़िरी अलविदा में भी कोई नफ़रत नहीं, बस एक दुआ रखी है',
      'मेरे हिस्से की ख़ुशी भी तुम्हारी राहों में बिछाकर रखी है',
    ],
    linesHinglish: [
      'Aakhiri alvida mein bhi koi nafrat nahin, bas ek dua rakhi hai',
      'Mere hisse ki khushi bhi tumhaari raahon mein bichhaakar rakhi hai',
    ],
    linesEnglish: [
      'Even in my final goodbye there is zero anger—only a quiet blessing',
      'May steady happiness meet you along every road you choose from here',
    ],
  },
  {
    title: 'बेफ़िक्र शामें वापस',
    titleEnglish: 'Carefree Evenings Back',
    linesHindi: [
      'रिश्ते की उलझन में शामें गुज़र जाती थीं फ़िक्र करते-करते',
      'अब बिना किसी डर के टहलना और सुकून से सोना अच्छा लगता है',
    ],
    linesHinglish: [
      'Rishte ki uljhan mein shaamein guzar jaati theen fikr karte-karte',
      'Ab bina kisi dar ke tehalna aur sukoon se sona accha lagta hai',
    ],
    linesEnglish: [
      'So many evenings once disappeared worrying over constant tension',
      'Now taking quiet walks and sleeping peacefully feels wonderful again',
    ],
  },
  {
    title: 'ख़ाली दिल, भरा मन',
    titleEnglish: 'Light Heart Full Life',
    linesHindi: [
      'किसी एक इंसान के चले जाने से जीवन खाली नहीं हो जाता',
      'जब ख़ुद से प्यार बढ़ जाए तो हर कोना ख़ुद-ब-ख़ुद भर जाता है',
    ],
    linesHinglish: [
      'Kisi ek insaan ke chale jaane se jeevan khaali nahin ho jaata',
      'Jab khud se pyaar badh jaaye to har kona khud-ba-khud bhar jaata hai',
    ],
    linesEnglish: [
      'One person walking out never turns an entire life empty',
      'Once you start caring well for yourself, every quiet room feels full',
    ],
  },
  {
    title: 'नए रंगों की सुबह',
    titleEnglish: 'Morning of New Colors',
    linesHindi: [
      'ब्रेकअप ने मुझे तोड़ने की कोशिश तो बहुत की थी पहले हफ्ते में',
      'पर मेरी सुबह हर दिन पहले से ज़्यादा सुनहरी होकर निकली',
    ],
    linesHinglish: [
      'Breakup ne mujhe todne ki koshish to bahut ki thi pehle hafte mein',
      'Par meri subah har din pehle se zyada sunahri hokar nikli',
    ],
    linesEnglish: [
      'That first week after the split certainly tested every ounce of my strength',
      'Yet each sunrise since has broken brighter and warmer than the last',
    ],
  },
  {
    title: 'दिल की सुनकर चलना',
    titleEnglish: 'Listening to Peace',
    linesHindi: [
      'जहाँ बार-बार रोना पड़े और मन भारी रहे हर शाम को',
      'वहाँ से निकल आना कोई हार नहीं, ख़ुद पर किया सबसे बड़ा एहसान है',
    ],
    linesHinglish: [
      'Jahaan baar-baar rona pade aur man bhaari rahe har shaam ko',
      'Wahaan se nikal aana koi haar nahin, khud par kiya sabse bada ehsaan hai',
    ],
    linesEnglish: [
      'Leaving a space that leaves you crying most evenings is never failure',
      'Walking away is the greatest kindness you can show your own soul',
    ],
  },
  {
    title: 'ब्रेकअप के बाद की असली सीख',
    titleEnglish: 'Guarding My Heart',
    linesHindi: [
      'तुम्हारे जाने के बाद एक बहुत ज़रूरी बात सीख ली मैंने',
      'कि दिल इतना सस्ता नहीं कि बार-बार गलत जगह टूटने दूँ इसे',
    ],
    linesHinglish: [
      'Tumhaare jaane ke baad ek bahut zaroori baat seekh li maine',
      'Ki dil itna sasta nahin ki baar-baar galat jagah tootne doon ise',
    ],
    linesEnglish: [
      'One essential rule stayed with me after you left',
      'My heart is far too precious to hand over where it keeps getting bruised',
    ],
  },
  {
    title: 'आँधी के बाद सन्नाटा',
    titleEnglish: 'Calm After the Gale',
    linesHindi: [
      'रिश्ता टूटने का शोर भी कुछ दिनों बाद शांत हो जाता है',
      'फिर उसी ख़ामोशी में इंसान ख़ुद को नए सिरे से गढ़ता है',
    ],
    linesHinglish: [
      'Rishta tootne ka shor bhi kuch dinon baad shaant ho jaata hai',
      'Phir usi khaamoshi mein insaan khud ko naye sire se gadhta hai',
    ],
    linesEnglish: [
      'Even the storm inside your chest quiets down after a handful of weeks',
      'And inside that stillness, you rebuild yourself stronger from scratch',
    ],
  },
  {
    title: 'बिन किसी शिकवे के',
    titleEnglish: 'No Bitterness Left',
    linesHindi: [
      'कोई शिकवा बाकी होता तो शायद आज भी पीछे मुड़कर देखता मैं',
      'मैंने हर बात दिल से साफ़ करके आगे कदम बढ़ाया है',
    ],
    linesHinglish: [
      'Koi shikwa baaki hota to shaayad aaj bhi peechhe mudkar dekhta main',
      'Maine har baat dil se saaf karke aage kadam badhaaya hai',
    ],
    linesEnglish: [
      'If any lingering grudge remained, I might still look over my shoulder',
      'I cleared everything cleanly from my chest before stepping forward',
    ],
  },
  {
    title: 'अधूरी दुआ का जवाब',
    titleEnglish: 'Hidden Blessing',
    linesHindi: [
      'कभी-कभी ऊपर वाला हमारा दिल टूटने से नहीं, बड़ी ग़लती से बचाता है',
      'जब वो किसी ऐसे इंसान को दूर करता है जो हमारे लिए सही न था',
    ],
    linesHinglish: [
      'Kabhi-kabhi upar waala hamaara dil tootne se nahin, badi galti se bachaata hai',
      'Jab wo kisi aise insaan ko door karta hai jo hamaare liye sahi na tha',
    ],
    linesEnglish: [
      'Sometimes life rescues you from a lifelong mismatch disguised as heartbreak',
      'When someone unsuited quietly steps out of your path in time',
    ],
  },
  {
    title: 'मन की हल्की उड़ान',
    titleEnglish: 'Lighter Every Day',
    linesHindi: [
      'रोज़ की छोटी-छोटी बहस और मनमुटाव से आज़ाद हो गया हूँ',
      'अब फिर से अपनी किताबों, चाय और संगीत में खोया रहता हूँ',
    ],
    linesHinglish: [
      'Roz ki chhoti-chhoti behas aur manmutaav se aazaad ho gaya hoon',
      'Ab phir se apni kitaabon, chai aur sangeet mein khoya rehta hoon',
    ],
    linesEnglish: [
      'Free at last from daily tension and endless misunderstandings',
      'I am happily lost again in good books, warm tea, and favorite playlists',
    ],
  },
  {
    title: 'पुरानी गली, नया सुकून',
    titleEnglish: 'New Peace on Old Streets',
    linesHindi: [
      'जिन यादों से पहले भागता फिरता था मैं आँखें चुराकर',
      'आज उन्हीं को मुस्कुराकर देखता हूँ क्योंकि दर्द जा चुका है',
    ],
    linesHinglish: [
      'Jin yaadon se pehle bhaagta phirta tha main aankhein churaakar',
      'Aaj unheen ko muskuraakar dekhta hoon kyonki dard jaa chuka hai',
    ],
    linesEnglish: [
      'The memories I used to dodge at all costs months ago',
      'Now meet a calm smile because the sharp sting has finally left',
    ],
  },
  {
    title: 'सपनों की वापसी',
    titleEnglish: 'Dreams Back on Track',
    linesHindi: [
      'किसी एक रिश्ते की फ़िक्र में अपने कई ख्वाब रोक दिए थे मैंने',
      'अब फिर से अपने हर अधूरे लक्ष्य की ओर दौड़ लगा दी है',
    ],
    linesHinglish: [
      'Kisi ek rishte ki fikr mein apne kai khwaab rok diye the maine',
      'Ab phir se apne har adhoore lakshya ki or daud laga di hai',
    ],
    linesEnglish: [
      'Trying to hold one relationship together put half my dreams on pause',
      'Now I am chasing every postponed goal with full energy again',
    ],
  },
  {
    title: 'खुद से वादा नया',
    titleEnglish: 'Promise to Myself',
    linesHindi: [
      'आगे से जब भी किसी के साथ जुड़ूँगा तो इतना याद रखूँगा',
      'किसी को प्यार करते वक़्त ख़ुद को कभी पीछे नहीं छोड़ूँगा',
    ],
    linesHinglish: [
      'Aage se jab bhi kisi ke saath judunga to itna yaad rakhunga',
      'Kisi ko pyaar karte waqt khud ko kabhi peechhe nahin chhodunga',
    ],
    linesEnglish: [
      'Next time my heart opens up to someone new, I will keep one rule',
      'Never abandon myself just to stay close to somebody else',
    ],
  },
  {
    title: 'क़िस्मत के अगले मोड़ पर भरोसा',
    titleEnglish: 'Trusting Timing',
    linesHindi: [
      'ब्रेकअप का मतलब ये नहीं कि प्यार में कोई कमी रह गई थी मेरे',
      'शायद मेरी कहानी का सबसे अच्छा हिस्सा अभी लिखा जाना बाकी है',
    ],
    linesHinglish: [
      'Breakup ka matlab ye nahin ki pyaar mein koi kami reh gayi thi mere',
      'Shaayad meri kahaani ka sabse accha hissa abhi likha jaana baaki hai',
    ],
    linesEnglish: [
      'A breakup never means my capacity to love fell short',
      'Perhaps the finest chapter of my story simply has not arrived yet',
    ],
  },
  {
    title: 'सच्ची राहत',
    titleEnglish: 'Real Relief',
    linesHindi: [
      'अधूरे रिश्ते में हर रोज़ थोड़ा-थोड़ा मरने से बेहतर था',
      'एक दिन सच स्वीकार कर के ज़िंदगी को दोबारा गले लगा लेना',
    ],
    linesHinglish: [
      'Adhoore rishte mein har roz thoda-thoda marne se behtar tha',
      'Ek din sach sweekaar karke zindagi ko dobaara gale laga lena',
    ],
    linesEnglish: [
      'Far better than shrinking slowly every week inside a fading bond',
      'Was accepting the truth one morning and hugging life warmly again',
    ],
  },
  {
    title: 'मन का आसमान साफ़',
    titleEnglish: 'Clear Blue Sky Inside',
    linesHindi: [
      'उदासी की धुंध छँट गई है अब मेरे मन के आसमान से',
      'मैं फिर से पूरी चमक के साथ जीने के लिए तैयार खड़ा हूँ',
    ],
    linesHinglish: [
      'Udaasi ki dhundh chhant gayi hai ab mere man ke aasmaan se',
      'Main phir se poori chamak ke saath jeene ke liye taiyaar khada hoon',
    ],
    linesEnglish: [
      'The heavy grey fog has cleared off the sky inside my mind',
      'I am standing bright and ready to live fully once more',
    ],
  },
  {
    title: 'दो दिल, अलग रास्ते',
    titleEnglish: 'Two Hearts Different Paths',
    linesHindi: [
      'कदम न मिलें तो साथ चलते रहने का नाटक भारी पड़ जाता है',
      'अपने-अपने रास्ते पर ख़ुश रहना ही दोनों की भलाई में होता है',
    ],
    linesHinglish: [
      'Qadam na milein to saath chalte rehne ka naatak bhaari pad jaata hai',
      'Apne-apne raaste par khush rehna hi donon ki bhalaai mein hota hai',
    ],
    linesEnglish: [
      'When two paces fall out of step, pretending gets exhausting fast',
      'Finding peace along separate roads honors both lives better',
    ],
  },
  {
    title: 'आँसू भी काम आए',
    titleEnglish: 'Strength Washed Clean',
    linesHindi: [
      'जो आँसू शुरुआती दिनों में कमज़ोरी लगते थे मुझको यार',
      'उन्हीं ने मन की सारी धूल धोकर दिल को बिल्कुल साफ़ कर दिया',
    ],
    linesHinglish: [
      'Jo aansoo shuruaati dinon mein kamzori lagte the mujhko yaar',
      'Unheen ne man ki saari dhool dhokar dil ko bilkul saaf kar diya',
    ],
    linesEnglish: [
      'Those early tears that felt like sheer weakness at the start',
      'Washed every layer of dust away and left my heart clean again',
    ],
  },
  {
    title: 'छोटी खुशियाँ लौट आईं',
    titleEnglish: 'Little Joys Returned',
    linesHindi: [
      'शाम की सैर, गरम कॉफ़ी और दोस्तों के साथ बेमतलब की हँसी',
      'ब्रेकअप के बाद ये छोटी खुशियाँ पहले से ज़्यादा मीठी लगती हैं',
    ],
    linesHinglish: [
      'Shaam ki sair, garam coffee aur doston ke saath bematlab ki hansi',
      'Breakup ke baad ye chhoti khushiyaan pehle se zyada meethi lagti hain',
    ],
    linesEnglish: [
      'Evening walks, hot coffee, and silly laughter with close friends',
      'After a hard breakup, life’s simple joys taste twice as sweet',
    ],
  },
  {
    title: 'नई ऊर्जा का स्वागत',
    titleEnglish: 'Welcoming Fresh Energy',
    linesHindi: [
      'बीते हुए कल पर अटककर कोई नई मंज़िल नहीं छू पाता कभी',
      'इसलिए मुस्कुराकर आज की सुबह का हाथ थाम लिया है मैंने',
    ],
    linesHinglish: [
      'Beete hue kal par atakkar koi nayi manzil nahin chhoo paata kabhi',
      'Isliye muskuraakar aaj ki subah ka haath thaam liya hai maine',
    ],
    linesEnglish: [
      'Nobody reaches new summits while anchored permanently to yesterday',
      'So I smiled cleanly and took hold of this brand-new morning',
    ],
  },
  // Block 5 (81-100)
  {
    title: 'बदलाव को गले लगाना',
    titleEnglish: 'Embracing the Shift',
    linesHindi: [
      'हर बदलाव शुरुआत में थोड़ा अजनबी और कठिन ज़रूर लगता है',
      'पर कुछ ही दिनों में वही नया रास्ता अपना घर बन जाता है',
    ],
    linesHinglish: [
      'Har badlaav shuruaat mein thoda ajnabi aur kathin zaroor lagta hai',
      'Par kuch hi dinon mein wahi naya raasta apna ghar ban jaata hai',
    ],
    linesEnglish: [
      'Every sudden shift feels unfamiliar and heavy on day one',
      'Within weeks, that new path starts feeling naturally like home',
    ],
  },
  {
    title: 'अधूरे ख्वाब का सम्मान',
    titleEnglish: 'Honest Closure',
    linesHindi: [
      'जो बात कभी पूरी न हो सकी उसे ज़बरदस्ती खींचने से क्या लाभ',
      'अधूरे ख्वाब को सुंदर मोड़ पर छोड़ देना भी कला होती है',
    ],
    linesHinglish: [
      'Jo baat kabhi poori na ho saki use zabardasti kheenchne se kya laabh',
      'Adhoore khwaab ko sundar mod par chhod dena bhi kala hoti hai',
    ],
    linesEnglish: [
      'Dragging out something clearly unfinished helps nobody in the end',
      'Leaving an incomplete dream at a graceful bend is an art of its own',
    ],
  },
  {
    title: 'सुकून की कीमत',
    titleEnglish: 'Priceless Calm',
    linesHindi: [
      'प्यार ज़रूरी है जीवन में, पर मानसिक शांति से बड़ा कुछ नहीं',
      'ब्रेकअप के बाद मिली ये शांति किसी जीत से कम नहीं लगी',
    ],
    linesHinglish: [
      'Pyaar zaroori hai jeevan mein, par maansik shaanti se bada kuch nahin',
      'Breakup ke baad mili ye shaanti kisi jeet se kam nahin lagi',
    ],
    linesEnglish: [
      'Love is precious, yet nothing outranks quiet peace inside your mind',
      'The calm that arrived after letting go feels like a quiet victory',
    ],
  },
  {
    title: 'अपने साथ ईमानदारी',
    titleEnglish: 'Truth to Myself',
    linesHindi: [
      'दुनिया को खुश दिखाने के लिए ख़ुद से झूठ बोलना बंद किया मैंने',
      'रोया भी तो खुलकर रोया, और जब उबरा तो पूरा उबर गया',
    ],
    linesHinglish: [
      'Duniya ko khush dikhaane ke liye khud se jhooth bolna band kiya maine',
      'Roya bhi to khulkar roya, aur jab ubra to poora ubar gaya',
    ],
    linesEnglish: [
      'I stopped lying to myself just to look unbothered in public',
      'I grieved honestly, healed thoroughly, and came out whole',
    ],
  },
  {
    title: 'ज़ख़्म नहीं, निशान',
    titleEnglish: 'Healed Scar',
    linesHindi: [
      'अब वो चोट दुखती नहीं, बस हल्का सा निशान बाकी है उस पर',
      'जो याद दिलाता है कि मैं कितने मुश्किल मोड़ से सँभलकर निकला हूँ',
    ],
    linesHinglish: [
      'Ab wo chot dukhti nahin, bas halka sa nishaan baaki hai us par',
      'Jo yaad dilaata hai ki main kitne mushkil mod se sambhalkar nikla hoon',
    ],
    linesEnglish: [
      'That old bruise no longer stings—only a faint mark remains',
      'Reminding me gently how bravely I survived a steep turn',
    ],
  },
  {
    title: 'चुपचाप आगे बढ़ना',
    titleEnglish: 'Moving Quietly Ahead',
    linesHindi: [
      'ज़ोर-शोर से ऐलान करने की ज़रूरत नहीं कि मैं बदल गया हूँ',
      'मेरी शांत मुस्कान ही बता देती है कि अब मैं आगे निकल चुका हूँ',
    ],
    linesHinglish: [
      'Zor-shor se ailaan karne ki zaroorat nahin ki main badal gaya hoon',
      'Meri shaant muskaan hi bata deti hai ki ab main aage nikal chuka hoon',
    ],
    linesEnglish: [
      'There is no need to announce loudly that I moved on',
      'My calm, unhurried smile says clearly that I am already miles ahead',
    ],
  },
  {
    title: 'वक़्त की रफ़्तार',
    titleEnglish: 'Gentle Pace of Days',
    linesHindi: [
      'एक पल में सब कुछ ठीक नहीं होता, खुद को थोड़ी मोहलत दो',
      'धीरे-धीरे हर टूटी हुई चीज़ अपनी जगह पर लौटने लगती है',
    ],
    linesHinglish: [
      'Ek pal mein sab kuch theek nahin hota, khud ko thodi mohlat do',
      'Dheere-dheere har tooti hui cheez apni jagah par lautne lagti hai',
    ],
    linesEnglish: [
      'Nothing resets completely overnight—give yourself patient grace',
      'Bit by bit, every shaken piece settles back into harmony',
    ],
  },
  {
    title: 'बेचैनी से बाहर खुली साँस',
    titleEnglish: 'Unburdened Heart',
    linesHindi: [
      'किसी के रूठने-मनाने के डर से बाहर आकर साँस ली आज',
      'दिल को लगा जैसे कई दिनों बाद कोई भारी पत्थर उतर गया',
    ],
    linesHinglish: [
      'Kisi ke roothne-manaane ke dar se baahar aakar saans li aaj',
      'Dil ko laga jaise kai dinon baad koi bhaari patthar utar gaya',
    ],
    linesEnglish: [
      'Stepping free from walking on eggshells let me breathe deeply today',
      'It felt as though a heavy stone finally lifted off my chest',
    ],
  },
  {
    title: 'नई सुबह की चाय',
    titleEnglish: 'Brand New Morning',
    linesHindi: [
      'सूरज हर सुबह बिना किसी पिछली शिकायत के निकलता है न',
      'आज से मेरी ज़िंदगी भी बिल्कुल वैसी ही ताज़ा शुरुआत कर रही है',
    ],
    linesHinglish: [
      'Sooraj har subah bina kisi pichhli shikaayat ke nikalta hai na',
      'Aaj se meri zindagi bhi bilkul waisi hi taaza shuruaat kar rahi hai',
    ],
    linesEnglish: [
      'Notice how the morning sun rises fresh without holding yesterday’s grudges',
      'Starting today, my life steps out with that exact same fresh energy',
    ],
  },
  {
    title: 'अपनी क़ीमत समझना',
    titleEnglish: 'Self-Worth Restored',
    linesHindi: [
      'किसी एक की पसंद से मेरी पूरी क़ीमत तय नहीं हो सकती कभी',
      'मैं जैसा हूँ अपने आप में पूरा हूँ, यही भरोसा लौट आया है',
    ],
    linesHinglish: [
      'Kisi ek ki pasand se meri poori qeemat tay nahin ho sakti kabhi',
      'Main jaisa hoon apne aap mein poora hoon, yahi bharosa laut aaya hai',
    ],
    linesEnglish: [
      'One person’s choice could never define my entire worth',
      'That quiet certainty—that I am whole on my own—has come right back',
    ],
  },
  {
    title: 'सफ़र अभी बाकी है',
    titleEnglish: 'Long Road Ahead',
    linesHindi: [
      'बीस की उम्र के एक पड़ाव पर सब कुछ खत्म मान लेना नादानी थी',
      'अभी तो ज़िंदगी के सबसे सुंदर दृश्य देखने बाकी हैं मुझे',
    ],
    linesHinglish: [
      'Bees ki umr ke ek padaav par sab kuch khatm maan lena naadaani thi',
      'Abhi to zindagi ke sabse sundar drishya dekhne baaki hain mujhe',
    ],
    linesEnglish: [
      'Thinking everything ended at one early stop was innocent overthinking',
      'The most breathtaking views of my journey still lie ahead of me',
    ],
  },
  {
    title: 'ख़ामोश आशीर्वाद',
    titleEnglish: 'Silent Blessings',
    linesHindi: [
      'दिल टूटने के बाद भी किसी के लिए बुरा नहीं सोचा मैंने कभी',
      'इतनी सी अच्छाई ही मेरी रूह को हमेशा शांत रखती है',
    ],
    linesHinglish: [
      'Dil tootne ke baad bhi kisi ke liye bura nahin socha maine kabhi',
      'Itni si acchaai hi meri rooh ko hamesha shaant rakhti hai',
    ],
    linesEnglish: [
      'Even after heartbreak, I never once wished harm on them',
      'Holding onto that gentle kindness keeps my own spirit at peace',
    ],
  },
  {
    title: 'आदत नहीं, सुकून ज़रूरी है',
    titleEnglish: 'Peace Over Attachment',
    linesHindi: [
      'आदत की वजह से किसी गलत मोड़ पर टिके रहना समझदारी नहीं',
      'साहस करके रास्ता मोड़ लेना ही बेहतर कल की निशानी है',
    ],
    linesHinglish: [
      'Aadat ki wajah se kisi galat mod par tike rehna samajhdaari nahin',
      'Saahas karke raasta mod lena hi behtar kal ki nishaani hai',
    ],
    linesEnglish: [
      'Staying stuck at the wrong turn purely out of comfort helps no one',
      'Gathering courage to switch lanes points toward a healthier tomorrow',
    ],
  },
  {
    title: 'मीठी यादें संभालकर',
    titleEnglish: 'Keeping Good Memories',
    linesHindi: [
      'हर रिश्ते का अंत कड़वा हो ऐसा जरूरी तो नहीं मेरे यार',
      'कुछ प्यारे पल संभालकर बाक़ी बोझ यहीं छोड़ देना ठीक है',
    ],
    linesHinglish: [
      'Har rishte ka ant kadwa ho aisa zaroori to nahin mere yaar',
      'Kuch pyaare pal sambhaalkar baaqi bojh yaheen chhod dena theek hai',
    ],
    linesEnglish: [
      'Every ending does not need to leave a sour taste behind, friend',
      'Tuck away the kind moments gently and drop the heavy baggage here',
    ],
  },
  {
    title: 'खुद को गले लगाना',
    titleEnglish: 'Holding Myself Steady',
    linesHindi: [
      'जब किसी अपने ने हाथ छोड़ा तो मैंने खुद को गले लगा लिया',
      'समझ आया कि सबसे वफ़ादार साथी इंसान खुद ही होता है अपना',
    ],
    linesHinglish: [
      'Jab kisi apne ne haath chhoda to maine khud ko gale laga liya',
      'Samajh aaya ki sabse wafaadaar saathi insaan khud hi hota hai apna',
    ],
    linesEnglish: [
      'When familiar hands slipped away, I wrapped my arms around myself',
      'And learned you are always your own most loyal lifelong ally',
    ],
  },
  {
    title: 'गुनगुनाती शाम',
    titleEnglish: 'Humming at Sunset',
    linesHindi: [
      'जिस शाम को कभी अकेले काटने से डर लगता था बहुत मुझे',
      'आज उसी शाम में छत पर बैठकर ग़ज़लें गुनगुनाता हूँ मैं',
    ],
    linesHinglish: [
      'Jis shaam ko kabhi akele kaatne se dar lagta tha bahut mujhe',
      'Aaj usi shaam mein chhat par baithkar ghazalein gungunaata hoon main',
    ],
    linesEnglish: [
      'The very twilight hours I used to dread spending alone',
      'Find me humming softly on the terrace watching the colors fade',
    ],
  },
  {
    title: 'बेफ़िक्र सफ़र',
    titleEnglish: 'Lighter Journey',
    linesHindi: [
      'सफ़र तब तक ही भारी लगता है जब तक पिछला बोझ साथ रहे',
      'सामान हल्का होते ही हर चढ़ाई आसान लगने लगती है',
    ],
    linesHinglish: [
      'Safar tab tak hi bhaari lagta hai jab tak pichhla bojh saath rahe',
      'Saamaan halka hote hi har chadhaai aasaan lagne lagti hai',
    ],
    linesEnglish: [
      'The trail only feels steep while yesterday’s weight stays strapped on',
      'Once you lighten your pack, every upward climb feels breezy again',
    ],
  },
  {
    title: 'दिल की सलामती की दुआ',
    titleEnglish: 'Prayer for Peace',
    linesHindi: [
      'दुआ बस इतनी सी है कि हर टूटने वाले दिल को सँभलना आ जाए',
      'किसी के जाने से किसी की मुस्कुराहट हमेशा के लिए न खो जाए',
    ],
    linesHinglish: [
      'Dua bas itni si hai ki har tootne waale dil ko sambhalna aa jaaye',
      'Kisi ke jaane se kisi ki muskurahat hamesha ke liye na kho jaaye',
    ],
    linesEnglish: [
      'My simple wish is that every bruised heart learns how to mend gently',
      'May no goodbye ever steal away anyone’s smile for good',
    ],
  },
  {
    title: 'सही समय पर अलग',
    titleEnglish: 'Parted in Time',
    linesHindi: [
      'अच्छा ही हुआ कि हम गलत राह पर ज़्यादा दूर नहीं चले गए',
      'वक़्त रहते रुक जाने से दोनों की ज़िंदगी सँवर गई सच कहूँ',
    ],
    linesHinglish: [
      'Accha hi hua ki hum galat raah par zyada door nahin chale gaye',
      'Waqt rehte ruk jaane se donon ki zindagi sanwar gayi sach kahoon',
    ],
    linesEnglish: [
      'It was a quiet blessing we never walked too far down the wrong road',
      'Stopping in time gave both of us room to build happier lives',
    ],
  },
  {
    title: 'नए रंग, नई राह',
    titleEnglish: 'Fresh Colors Ahead',
    linesHindi: [
      'टूटकर बिखरने से ज़्यादा सुंदर होता है फिर से जुड़कर निखरना',
      'मेरा आज कल से ज़्यादा शांत और उजला दिखाई देता है मुझे',
    ],
    linesHinglish: [
      'Tootkar bikharne se zyada sundar hota hai phir se judkar nikharna',
      'Mera aaj kal se zyada shaant aur ujla dikhaai deta hai mujhe',
    ],
    linesEnglish: [
      'More beautiful than breaking apart is healing into someone radiant',
      'My present looks calmer and brighter than yesterday ever did',
    ],
  },
  // Block 6 (101-120)
  {
    title: 'अधूरी बात का अंत',
    titleEnglish: 'Closing Unsaid Words',
    linesHindi: [
      'सारी अनकही बातें आज मन के किसी शांत कोने में रख दी हैं',
      'हर सवाल का जवाब मिल जाए, ये भी तो ज़रूरी नहीं हमेशा',
    ],
    linesHinglish: [
      'Saari ankahi baatein aaj man ke kisi shaant kone mein rakh di hain',
      'Har sawaal ka jawaab mil jaaye, ye bhi to zaroori nahin hamesha',
    ],
    linesEnglish: [
      'I tucked every remaining unsaid thought neatly into a quiet corner',
      'Not every unanswered question requires closure to let you move forward',
    ],
  },
  {
    title: 'नए संगीत की धुन',
    titleEnglish: 'New Soundtrack',
    linesHindi: [
      'उदास गानों की प्लेलिस्ट अब धीरे-धीरे बदलने लगी है मेरी',
      'लगता है दिल ने भी अब नई सुबह की धुन गुनगुनानी शुरू कर दी',
    ],
    linesHinglish: [
      'Udaas gaanon ki playlist ab dheere-dheere badalne lagi hai meri',
      'Lagta hai dil ne bhi ab nayi subah ki dhun gungunaani shuru kar di',
    ],
    linesEnglish: [
      'My sad late-night playlist is slowly swapping out for brighter tracks',
      'It looks like my heart finally started humming a new morning tune',
    ],
  },
  {
    title: 'दिल से निकलना आसान नहीं',
    titleEnglish: 'Honest Healing Takes Time',
    linesHindi: [
      'झूठ नहीं कहूँगा कि एक पल में सब भूल गया हूँ मैं यार',
      'पर ये सच है कि अब उस याद से मेरी नींद नहीं टूटती बार-बार',
    ],
    linesHinglish: [
      'Jhooth nahin kahunga ki ek pal mein sab bhool gaya hoon main yaar',
      'Par ye sach hai ki ab us yaad se meri neend nahin toot-ti baar-baar',
    ],
    linesEnglish: [
      'I will not lie and claim I forgot everything overnight, friend',
      'Yet the truth is that those memories no longer wake me up in the dark',
    ],
  },
  {
    title: 'रिश्तों की परिपक्वता',
    titleEnglish: 'Emotional Maturity',
    linesHindi: [
      'प्यार करना भी कला है और सही वक़्त पर हट जाना भी कला है',
      'दोनों को इज़्ज़त के साथ संभाल पाना ही असली समझदारी है',
    ],
    linesHinglish: [
      'Pyaar karna bhi kala hai aur sahi waqt par hat jaana bhi kala hai',
      'Donon ko izzat ke saath sambhaal paana hi asli samajhdaari hai',
    ],
    linesEnglish: [
      'Loving deeply is an art, and stepping back respectfully is an art too',
      'Handling both with grace is what real maturity looks like',
    ],
  },
  {
    title: 'ख़ाली रास्तों की रौनक',
    titleEnglish: 'Beauty on Quiet Roads',
    linesHindi: [
      'भीड़ भरे मेले से निकलकर शांत पगडंडी पर चलना सीख लिया',
      'ब्रेकअप के बाद मैंने ख़ुद के साथ वक़्त बिताना सीख लिया',
    ],
    linesHinglish: [
      'Bheed bhare mele se nikal kar shaant pagdandi par chalna seekh liya',
      'Breakup ke baad maine khud ke saath waqt bitaana seekh liya',
    ],
    linesEnglish: [
      'Stepping out of noisy chaos onto a quiet footpath felt strangely freeing',
      'Since the breakup, I truly learned how to enjoy my own company',
    ],
  },
  {
    title: 'प्यार और स्वाभिमान',
    titleEnglish: 'Love Meets Self-Respect',
    linesHindi: [
      'मोहब्बत में झुकना अच्छा है पर गिर जाना कभी ठीक नहीं होता',
      'जहाँ आत्मसम्मान घायल हो, वहाँ रुकने का कोई अर्थ नहीं होता',
    ],
    linesHinglish: [
      'Mohabbat mein jhukna accha hai par gir jaana kabhi theek nahin hota',
      'Jahaan aatmasammaan ghaayal ho, wahaan rukne ka koi arth nahin hota',
    ],
    linesEnglish: [
      'Compromising gently in love is noble, yet losing yourself is never right',
      'Where self-respect keeps getting wounded, staying loses all meaning',
    ],
  },
  {
    title: 'दिल के टुकड़े नहीं, रत्न',
    titleEnglish: 'Reshaped Like Gems',
    linesHindi: [
      'पत्थर भी तराशे जाने के बाद ही मूर्ति की शक्ल पाता है न',
      'ये दर्द भी मुझे अंदर से ज़्यादा निखार कर छोड़ गया है',
    ],
    linesHinglish: [
      'Patthar bhi taraashe jaane ke baad hi moorti ki shakl paata hai na',
      'Ye dard bhi mujhe andar se zyada nikhaar kar chhod gaya hai',
    ],
    linesEnglish: [
      'Even raw stone takes the chisel before turning into something timeless',
      'This ache too carved deeper wisdom and poise inside my heart',
    ],
  },
  {
    title: 'तुम्हारी नई दुनिया',
    titleEnglish: 'Different Horizons',
    linesHindi: [
      'तुम अपनी नई मंज़िलों पर पूरे हौसले से आगे बढ़ना हमेशा',
      'मेरी दुआएँ आज भी बिना किसी शर्त के तुम्हारे साथ रहेंगी',
    ],
    linesHinglish: [
      'Tum apni nayi manzilon par poore hausle se aage badhna hamesha',
      'Meri duaayein aaj bhi bina kisi shart ke tumhaare saath rahengi',
    ],
    linesEnglish: [
      'Keep stepping boldly toward every new horizon waiting ahead of you',
      'My quiet goodwill still goes with you without a single condition attached',
    ],
  },
  {
    title: 'पुराने दर्द की छुट्टी',
    titleEnglish: 'Letting Yesterday Go',
    linesHindi: [
      'कल के आँसुओं से आज की चाय का स्वाद फीका क्यों करूँ मैं',
      'बीते वक़्त को वहीं छोड़कर आज के पल को जी भर जी लूँ मैं',
    ],
    linesHinglish: [
      'Kal ke aansuon se aaj ki chai ka swaad feeka kyon karoon main',
      'Beete waqt ko waheen chhodkar aaj ke pal ko jee bhar jee loon main',
    ],
    linesEnglish: [
      'Why let yesterday’s tears water down the warmth of today’s morning tea',
      'I am leaving the past where it belongs and savoring today completely',
    ],
  },
  {
    title: 'दिल की धड़कन शांत',
    titleEnglish: 'Calm Heartbeat',
    linesHindi: [
      'न कोई बेचैनी, न किसी के ऑनलाइन आने का इंतज़ार अब बाक़ी है',
      'फ़ोन से ज़्यादा अब खुली हवा और किताबों से दोस्ती पक्की है',
    ],
    linesHinglish: [
      'Na koi bechaini, na kisi ke online aane ka intezaar ab baaqi hai',
      'Phone se zyada ab khuli hawa aur kitaabon se dosti pakki hai',
    ],
    linesEnglish: [
      'No restless checking, no waiting to see an online dot glow anymore',
      'Fresh air and good books hold my attention better than any screen',
    ],
  },
  {
    title: 'नए मौसम की महक',
    titleEnglish: 'Scent of Spring',
    linesHindi: [
      'खिले हुए फूल कभी बीते हुए पतझड़ की शिकायत नहीं करते',
      'जब नया मौसम आता है तो दिल भी ख़ुद-ब-ख़ुद खिल उठता है',
    ],
    linesHinglish: [
      'Khile hue phool kabhi beete hue patjhad ki shikaayat nahin karte',
      'Jab naya mausam aata hai to dil bhi khud-ba-khud khil uthta hai',
    ],
    linesEnglish: [
      'Spring blossoms never waste time complaining about last autumn’s wind',
      'When your new season arrives, the heart blooms naturally on its own',
    ],
  },
  {
    title: 'कठिन फैसले की खूबसूरती',
    titleEnglish: 'Beauty of Hard Choices',
    linesHindi: [
      'सही फ़ैसले अक्सर शुरुआत में सबसे ज़्यादा कठिन लगते हैं दिल को',
      'पर आगे चलकर उन्हीं से ज़िंदगी को असली सुकून नसीब होता है',
    ],
    linesHinglish: [
      'Sahi faisle aksar shuruaat mein sabse zyada kathin lagte hain dil ko',
      'Par aage chalkar unheen se zindagi ko asli sukoon naseeb hota hai',
    ],
    linesEnglish: [
      'The right decisions often feel like the heaviest ones on day one',
      'Yet down the road, they are the choices that deliver lasting peace',
    ],
  },
  {
    title: 'दिल की गहरी समझ',
    titleEnglish: 'Gentle Wisdom',
    linesHindi: [
      'किसी के जाने से ज़िंदगी रुकती नहीं, बस तरीका बदल जाता है',
      'इंसान हर मोड़ पर थोड़ा और समझदार होकर आगे बढ़ जाता है',
    ],
    linesHinglish: [
      'Kisi ke jaane se zindagi rukti nahin, bas tareeka badal jaata hai',
      'Insaan har mod par thoda aur samajhdaar hokar aage badh jaata hai',
    ],
    linesEnglish: [
      'When someone leaves, life never pauses—it simply shifts rhythm',
      'And at every turn you walk forward carrying gentler wisdom than before',
    ],
  },
  {
    title: 'चुपचाप संभल जाना',
    titleEnglish: 'Rising Quietly',
    linesHindi: [
      'जितनी खामोशी से रिश्ता टूटा था हमारे बीच उस शाम को',
      'उतनी ही शांति से मैंने ख़ुद को फिर से जोड़ लिया आज को',
    ],
    linesHinglish: [
      'Jitni khaamoshi se rishta toota tha hamaare beech us shaam ko',
      'Utni hi shaanti se maine khud ko phir se jod liya aaj ko',
    ],
    linesEnglish: [
      'As quietly as our bond came undone on that dusk evening',
      'Just as peacefully I pieced my own heart back together for today',
    ],
  },
  {
    title: 'मोहब्बत का नया मतलब',
    titleEnglish: 'Redefining Love',
    linesHindi: [
      'अब मेरे लिए प्यार का मतलब सिर्फ़ किसी एक का होना नहीं है',
      'अपने आप से सुकून और सच्चाई से जीना भी मोहब्बत ही है',
    ],
    linesHinglish: [
      'Ab mere liye pyaar ka matlab sirf kisi ek ka hona nahin hai',
      'Apne aap se sukoon aur sacchaai se jeena bhi mohabbat hi hai',
    ],
    linesEnglish: [
      'Love to me no longer means losing myself inside one single person',
      'Living peacefully and honestly with myself is deep love too',
    ],
  },
  {
    title: 'बिखरी यादें समेटीं',
    titleEnglish: 'Neatly Packed Past',
    linesHindi: [
      'पुराने तौहफ़े और ख़त किसी बक्से में आराम से बंद रख दिए हैं',
      'अब कमरे की हर दीवार पर सिर्फ़ मेरे नए सपने सजे हुए हैं',
    ],
    linesHinglish: [
      'Purane tohfe aur khat kisi bakse mein aaraam se band rakh diye hain',
      'Ab kamre ki har deewar par sirf mere naye sapne saje hue hain',
    ],
    linesEnglish: [
      'Old keepsakes and notes sit neatly packed inside a quiet drawer now',
      'Every wall in my room holds only fresh dreams for the days ahead',
    ],
  },
  {
    title: 'वक़्त ने सिखा दिया',
    titleEnglish: 'Time Was Kind',
    linesHindi: [
      'जब लगा था कि इस ग़म से बाहर निकलना मुमकिन ही नहीं होगा',
      'तभी वक़्त ने चुपचाप कंधा थपथपाकर नया सवेरा दिखा दिया',
    ],
    linesHinglish: [
      'Jab laga tha ki is gham se baahar nikalna mumkin hi nahin hoga',
      'Tabhi waqt ne chupchaap kandha thapthapaakar naya sawera dikha diya',
    ],
    linesEnglish: [
      'Right when stepping out of that sadness felt nearly impossible',
      'Time tapped my shoulder softly and opened a bright new morning',
    ],
  },
  {
    title: 'पतझड़ के बाद भी नई कोंपल',
    titleEnglish: 'Fresh Green Growth',
    linesHindi: [
      'बंजर से लगने वाले दिनों में भी उम्मीद की कोंपल फूट ही जाती है',
      'दिल को बस थोड़ा सा धैर्य और अपनापन देना पड़ता है हर दिन',
    ],
    linesHinglish: [
      'Banjar se lagne waale dinon mein bhi ummeed ki konpal phoot hi jaati hai',
      'Dil ko bas thoda sa dhairya aur apnaapan dena padta hai har din',
    ],
    linesEnglish: [
      'Even in seasons that look dry and bare, new shoots of hope push through',
      'Your heart only asks for steady patience and gentle care each day',
    ],
  },
  {
    title: 'बिखरकर ख़ुद को पहचानना',
    titleEnglish: 'Safe and Steady',
    linesHindi: [
      'टूटना भी ज़रूरी होता है कभी-कभी ख़ुद को पहचानने के लिए',
      'वरना पता ही नहीं चलता कि हमारे अंदर कितनी हिम्मत छुपी है',
    ],
    linesHinglish: [
      'Tootna bhi zaroori hota hai kabhi-kabhi khud ko pehchaanne ke liye',
      'Warna pata hi nahin chalta ki hamaare andar kitni himmat chhipi hai',
    ],
    linesEnglish: [
      'Sometimes breaking open is how you finally meet your real strength',
      'Otherwise you never realize how much quiet courage lives inside you',
    ],
  },
  {
    title: 'हल्की मुस्कान की जीत',
    titleEnglish: 'Quiet Smile Wins',
    linesHindi: [
      'तुम खुश रहो अपने नए आसमान में, यही दिल से कामना है मेरी',
      'और मैं भी अपने छोटे से आँगन में अब बहुत चैन से रहता हूँ',
    ],
    linesHinglish: [
      'Tum khush raho apne naye aasmaan mein, yahi dil se kaamna hai meri',
      'Aur main bhi apne chhote se aangan mein ab bahut chain se rehta hoon',
    ],
    linesEnglish: [
      'Be genuinely happy beneath your new skies—that is my honest wish',
      'And right here inside my own quiet courtyard, I finally feel at peace',
    ],
  },
  // Block 7 (121-140)
  {
    title: 'रास्ते अलग, यादें प्यारी',
    titleEnglish: 'Separate Roads Fondly Kept',
    linesHindi: [
      'कुछ लोग हमारे साथ पूरे सफ़र के लिए नहीं बने होते शायद',
      'पर उनके साथ काटे हुए मील हमेशा मीठे ही रहते हैं यादों में',
    ],
    linesHinglish: [
      'Kuch log hamaare saath poore safar ke liye nahin bane hote shaayad',
      'Par unke saath kaate hue meel hamesha meethe hi rehte hain yaadon mein',
    ],
    linesEnglish: [
      'Maybe some companions were never meant for the entire journey',
      'Yet the miles we walked together still stay sweet in memory',
    ],
  },
  {
    title: 'दिल के नए दरवाज़े',
    titleEnglish: 'Opening New Doors',
    linesHindi: [
      'एक दरवाज़ा बंद होने पर ही हमें दूसरी खिड़कियाँ दिखाई देती हैं',
      'ज़िंदगी हमेशा नए अवसर लेकर पीछे खड़ी मुस्कुराती रहती है',
    ],
    linesHinglish: [
      'Ek darwaaza band hone par hi humein doosri khidkiyaan dikhaai deti hain',
      'Zindagi hamesha naye avsar lekar peechhe khadi muskuraati rehti hai',
    ],
    linesEnglish: [
      'Only when one door shuts do we notice the bright windows around us',
      'Life is always standing close by smiling with brand-new chances',
    ],
  },
  {
    title: 'सुकून की बारिश',
    titleEnglish: 'Refreshing Rain',
    linesHindi: [
      'मन के अंदर की सारी घुटन जैसे पहली बारिश में धुल गई हो',
      'ब्रेकअप के बाद पहली बार मौसम इतना ताज़ा लगा है आज',
    ],
    linesHinglish: [
      'Man ke andar ki saari ghutan jaise pehli baarish mein dhul gayi ho',
      'Breakup ke baad pehli baar mausam itna taaza laga hai aaj',
    ],
    linesEnglish: [
      'Every trace of old heaviness felt washed clean in today’s first rain',
      'For the first time since the split, the air outside feels genuinely new',
    ],
  },
  {
    title: 'नए सवेरे का साथ',
    titleEnglish: 'Walking With Dawn',
    linesHindi: [
      'कल की यादों से अब आँख नहीं चुराता मैं राह चलते वक़्त',
      'सुबह की पहली किरण के साथ नए कदम उठा लेता हूँ रोज़',
    ],
    linesHinglish: [
      'Kal ki yaadon se ab aankh nahin churaata main raah chalte waqt',
      'Subah ki pehli kiran ke saath naye qadam utha leta hoon roz',
    ],
    linesEnglish: [
      'I no longer flinch or look away when old memories cross my path',
      'Every morning sunlight gives me steady footing for brand-new steps',
    ],
  },
  {
    title: 'ख़ुद की कदर सबसे पहले',
    titleEnglish: 'Honoring Myself First',
    linesHindi: [
      'दूसरों को मनाने के चक्कर में अपना सुकून मत गिरवी रखना कभी',
      'जो सच में तुम्हारा होगा वो तुम्हें कभी इतना तोड़ेगा ही नहीं',
    ],
    linesHinglish: [
      'Doosron ko manaane ke chakkar mein apna sukoon mat girvi rakhna kabhi',
      'Jo sach mein tumhaara hoga wo tumhein kabhi itna todega hi nahin',
    ],
    linesEnglish: [
      'Never pawn your mental peace just to keep someone else comfortable',
      'Whoever is truly meant for you will never ask you to shrink like that',
    ],
  },
  {
    title: 'अधूरी दास्तान का मोल',
    titleEnglish: 'Value of Every Page',
    linesHindi: [
      'हर अधूरी दास्तान बेकार नहीं जाती इंसान की ज़िंदगी में',
      'वो हमें बताती है कि अगली बार किस चीज़ को संभालकर रखना है',
    ],
    linesHinglish: [
      'Har adhoori daastaan bekaar nahin jaati insaan ki zindagi mein',
      'Wo humein bataati hai ki agli baar kis cheez ko sambhaalkar rakhna hai',
    ],
    linesEnglish: [
      'No unfinished chapter is ever wasted in the long run',
      'It teaches you gently what deserves your best care next time around',
    ],
  },
  {
    title: 'मुस्कान बिना बनावट के',
    titleEnglish: 'Real Smile Back',
    linesHindi: [
      'महीनों तक सिर्फ़ लोगों को दिखाने के लिए मुस्कुराता रहा था मैं',
      'आज आइने में देखा तो आँखों में असली चमक वापस दिखी मुझे',
    ],
    linesHinglish: [
      'Mahinon tak sirf logon ko dikhaane ke liye muskuraata raha tha main',
      'Aaj aaine mein dekha to aankhon mein asli chamak waapas dikhi mujhe',
    ],
    linesEnglish: [
      'For months I wore polite smiles just so others would not worry',
      'Looking in the mirror today, my eyes finally held real warmth again',
    ],
  },
  {
    title: 'खिड़की वाली सीट और खुला आसमान',
    titleEnglish: 'Joy of Solo Miles',
    linesHindi: [
      'खिड़की वाली सीट, ईयरफ़ोन में पसंदीदा धुन और खुला आसमान',
      'ज़िंदगी की सबसे शांत यात्राएँ अक्सर अकेले ही होती हैं यारो',
    ],
    linesHinglish: [
      'Khidki waali seat, earphone mein pasandeeda dhun aur khula aasmaan',
      'Zindagi ki sabse shaant yaatrayein aksar akele hi hoti hain yaaro',
    ],
    linesEnglish: [
      'A window seat, a favorite song in my ears, and wide open sky',
      'Some of life’s calmest journeys happen when you travel peacefully solo',
    ],
  },
  {
    title: 'घुटने से बेहतर खुली आज़ादी',
    titleEnglish: 'Respect Over Regret',
    linesHindi: [
      'अधूरे प्यार में घुटने से अच्छा है पूरी आज़ादी चुन लेना',
      'टूटे हुए रिश्ते से ज़्यादा महँगा होता है अपनी नज़र में गिर जाना',
    ],
    linesHinglish: [
      'Adhoore pyaar mein ghutne se accha hai poori aazaadi chun lena',
      'Toote hue rishte se zyada mehanga hota hai apni nazar mein gir jaana',
    ],
    linesEnglish: [
      'Choosing clean freedom beats suffocating slowly inside half-love',
      'Losing respect in your own eyes always costs far more than any goodbye',
    ],
  },
  {
    title: 'ग़म से दोस्ती नहीं',
    titleEnglish: 'Ready for Joy',
    linesHindi: [
      'दर्द आया तो मेहमान की तरह कुछ दिन रुक कर चला भी गया',
      'मैंने उसे अपने घर का स्थायी पता कभी बनने ही नहीं दिया',
    ],
    linesHinglish: [
      'Dard aaya to mehmaan ki tarah kuch din ruk kar chala bhi gaya',
      'Maine use apne ghar ka sthaayi pata kabhi banne hi nahin diya',
    ],
    linesEnglish: [
      'Heartache visited like a temporary guest and eventually packed up',
      'I never let sadness claim a permanent address inside my house',
    ],
  },
  {
    title: 'बिन किसी शिकवे के विदा',
    titleEnglish: 'Peaceful Parting',
    linesHindi: [
      'जितनी मोहब्बत से हाथ पकड़ा था हमने पहले दिन तुम्हारा',
      'उतनी ही शालीनता से आज रास्ता अलग कर लिया है हमने',
    ],
    linesHinglish: [
      'Jitni mohabbat se haath pakda tha humne pehle din tumhaara',
      'Utni hi shaaleenta se aaj raasta alag kar liya hai humne',
    ],
    linesEnglish: [
      'With the same warmth we showed when first holding hands',
      'With that exact grace we let each other go cleanly today',
    ],
  },
  {
    title: 'दिल की ताज़गी',
    titleEnglish: 'Freshness Restored',
    linesHindi: [
      'लम्बे इंतज़ार और अधूरी बातों से थका हुआ था मन मेरा',
      'अलग होकर जैसे मुरझाए पौधे को फिर से पानी मिल गया हो',
    ],
    linesHinglish: [
      'Lambe intezaar aur adhoori baaton se thaka hua tha man mera',
      'Alag hokar jaise murjhaaye paudhe ko phir se paani mil gaya ho',
    ],
    linesEnglish: [
      'Endless waiting and half-finished talks had drained my spirit dry',
      'Parting ways felt like pouring fresh water over a thirsty plant',
    ],
  },
  {
    title: 'यादों का मीठा रंग',
    titleEnglish: 'Warm Pastel Past',
    linesHindi: [
      'सब कुछ मिटा देने की ज़िद अब बिल्कुल नहीं है मन में मेरे',
      'जो अच्छा था वो याद रहेगा, बाक़ी वक़्त के हवाले कर दिया',
    ],
    linesHinglish: [
      'Sab kuch mita dene ki zid ab bilkul nahin hai man mein mere',
      'Jo accha tha wo yaad rahega, baaqi waqt ke hawaale kar diya',
    ],
    linesEnglish: [
      'I no longer feel the urge to erase every trace of what we shared',
      'The kind moments stay warmly remembered, and the rest belongs to time',
    ],
  },
  {
    title: 'दिल फिर से तैयार',
    titleEnglish: 'Open to Tomorrow',
    linesHindi: [
      'एक बार दिल टूटा तो क्या हुआ, धड़कना तो नहीं छोड़ेगा न',
      'ये फिर से मुस्कुराएगा, फिर से नई खुशियों पर भरोसा करेगा',
    ],
    linesHinglish: [
      'Ek baar dil toota to kya hua, dhadakna to nahin chhodega na',
      'Ye phir se muskuraayega, phir se nayi khushiyon par bharosa karega',
    ],
    linesEnglish: [
      'So a heart got bruised once—it is not going to stop beating for life',
      'It will smile softly again and learn to trust gentle days once more',
    ],
  },
  {
    title: 'ख़ाली शाम का सुकून',
    titleEnglish: 'Still Evening',
    linesHindi: [
      'बिना किसी लड़ाई या जवाबदेही के बीती आज की पूरी शाम',
      'इतनी सी ख़ामोशी भी कभी-कभी किसी जन्नत से कम नहीं लगती',
    ],
    linesHinglish: [
      'Bina kisi ladaai ya jawaabdehi ke beeti aaj ki poori shaam',
      'Itni si khaamoshi bhi kabhi-kabhi kisi jannat se kam nahin lagti',
    ],
    linesEnglish: [
      'An entire evening passed without a single argument or heavy tension',
      'That simple pocket of peace feels nothing short of heaven sometimes',
    ],
  },
  {
    title: 'नए कदम का हौसला',
    titleEnglish: 'Braver Steps Now',
    linesHindi: [
      'पीछे छूट गए मोड़ों से डरकर आगे का सफ़र नहीं रोकते कभी',
      'जो बीत गया उसे सलाम करो और नया अध्याय शुरू करो अभी',
    ],
    linesHinglish: [
      'Peechhe chhoot gaye modon se darkar aage ka safar nahin rokte kabhi',
      'Jo beet gaya use salaam karo aur naya adhyaay shuru karo abhi',
    ],
    linesEnglish: [
      'Never halt the whole road ahead out of fear of bends already behind you',
      'Salute what ended, take a deep breath, and step cleanly into today',
    ],
  },
  {
    title: 'अपने साथ की मिठास',
    titleEnglish: 'Sweetness Within',
    linesHindi: [
      'दूसरों से मिलने वाले प्यार से पहले ख़ुद से प्यार ज़रूरी है',
      'ब्रेकअप ने मुझे मेरी ज़िंदगी का सबसे बड़ा सच सिखा दिया',
    ],
    linesHinglish: [
      'Doosron se milne waale pyaar se pehle khud se pyaar zaroori hai',
      'Breakup ne mujhe meri zindagi ka sabse bada sach sikha diya',
    ],
    linesEnglish: [
      'Loving yourself steadily comes long before expecting love from someone else',
      'This breakup handed me the clearest truth I will ever carry forward',
    ],
  },
  {
    title: 'नया उजाला',
    titleEnglish: 'Morning Light Again',
    linesHindi: [
      'जब हर तरफ़ से अंधेरा सा लगने लगा था जाने के बाद तुम्हारे',
      'तभी मेरी खुद की हिम्मत ने मेरे घर में दिया जला दिया',
    ],
    linesHinglish: [
      'Jab har taraf se andhera sa lagne laga tha jaane ke baad tumhaare',
      'Tabhi meri khud ki himmat ne mere ghar mein diya jala diya',
    ],
    linesEnglish: [
      'Right when every corner looked dim after our goodbye',
      'My own quiet resilience lit a warm lamp inside my home',
    ],
  },
  {
    title: 'बेफ़िक्री की लौटती हवा',
    titleEnglish: 'Carefree Breeze',
    linesHindi: [
      'आज फिर हवा में वही कॉलेज वाली बेफ़िक्री महसूस हुई मुझे',
      'लगा जैसे एक भारी सफ़र ख़त्म हुआ और नया सवेरा आ गया',
    ],
    linesHinglish: [
      'Aaj phir hawa mein wahi college waali befikri mehsoos hui mujhe',
      'Laga jaise ek bhaari safar khatm hua aur naya sawera aa gaya',
    ],
    linesEnglish: [
      'Today the afternoon breeze felt carefree again like college days',
      'As if one heavy chapter closed and an effortless morning began',
    ],
  },
  {
    title: 'सुकून के नाम एक पंक्ति',
    titleEnglish: 'Dedicated to Peace',
    linesHindi: [
      'रिश्ता टूटा तो दिल भी संभला और सोच भी बड़ी हो गई मेरी',
      'अब मेरे हर फ़ैसले के केंद्र में सिर्फ़ मेरा सुकून रहता है',
    ],
    linesHinglish: [
      'Rishta toota to dil bhi sambhla aur soch bhi badi ho gayi meri',
      'Ab mere har faisle ke kendra mein sirf mera sukoon rehta hai',
    ],
    linesEnglish: [
      'A relationship ended, my heart steadied, and my vision widened',
      'Now my own peace sits squarely at the center of every choice I make',
    ],
  },
  // Block 8 (141-160)
  {
    title: 'नए रास्तों का निमंत्रण',
    titleEnglish: 'Invitation to Begin Again',
    linesHindi: [
      'हर अंत अपने साथ एक शांत नई शुरुआत लेकर आता है हमेशा',
      'बस पुरानी यादों की गाँठ थोड़ी सी ढीली करनी पड़ती है',
    ],
    linesHinglish: [
      'Har ant apne saath ek shaant nayi shuruaat lekar aata hai hamesha',
      'Bas purani yaadon ki gaanth thodi si dheeli karni padti hai',
    ],
    linesEnglish: [
      'Every ending arrives carrying a quiet new beginning tucked inside',
      'All it asks is loosening our tight grip on yesterday',
    ],
  },
  {
    title: 'बिन कहे समझ जाना',
    titleEnglish: 'Silent Clarity',
    linesHindi: [
      'जब शब्दों की ज़रूरत ही ख़त्म हो जाए दो लोगों के बीच कभी',
      'तब चुपचाप अलग हो जाना ही सबसे सही रास्ता बचता है',
    ],
    linesHinglish: [
      'Jab shabdon ki zaroorat hi khatm ho jaaye do logon ke beech kabhi',
      'Tab chupchaap alag ho jaana hi sabse sahi raasta bachta hai',
    ],
    linesEnglish: [
      'When two people run completely out of safe words to share',
      'Stepping gracefully apart becomes the kindest path left',
    ],
  },
  {
    title: 'वक़्त के साथ हल्कापन',
    titleEnglish: 'Weightless Again',
    linesHindi: [
      'कल जो दर्द पहाड़ जैसा लगता था सीने पर रखा हुआ मुझे',
      'आज वक़्त ने उसे रुई के फाहे सा हल्का कर दिया है',
    ],
    linesHinglish: [
      'Kal jo dard pahaad jaisa lagta tha seene par rakha hua mujhe',
      'Aaj waqt ne use rui ke faahe sa halka kar diya hai',
    ],
    linesEnglish: [
      'The hurt that once sat like a heavy mountain on my chest',
      'Has been softened by time into something light as cotton',
    ],
  },
  {
    title: 'दिल की सलामती सबसे ऊपर',
    titleEnglish: 'Inner Peace First',
    linesHindi: [
      'चाहे कितनी भी मोहब्बत हो पर हर शाम उदासी ठीक नहीं होती',
      'जहाँ मुस्कान खोने लगे, वहाँ से लौट आना ही अक़्लमंदी है',
    ],
    linesHinglish: [
      'Chaahe kitni bhi mohabbat ho par har shaam udaasi theek nahin hoti',
      'Jahaan muskaan khone lage, wahaan se laut aana hi aqlmandi hai',
    ],
    linesEnglish: [
      'No matter how deep the bond, crying every evening is never healthy',
      'Walking back home before your smile disappears for good is real wisdom',
    ],
  },
  {
    title: 'चमकता हुआ आज',
    titleEnglish: 'Brighter Present',
    linesHindi: [
      'बीते हुए रिश्तों की परछाई में आज की धूप मत ढँको यार',
      'बाहर निकलो, तुम्हारे हिस्से की खुशियाँ अभी ताज़ा खिली हैं',
    ],
    linesHinglish: [
      'Beete hue rishton ki parchhaai mein aaj ki dhoop mat dhanko yaar',
      'Baahar niklo, tumhaare hisse ki khushiyaan abhi taaza khili hain',
    ],
    linesEnglish: [
      'Never let the shadow of a finished bond cover today’s sunshine',
      'Step right outside—brand-new joys are blooming fresh for you',
    ],
  },
  {
    title: 'दिल की मज़बूत धड़कन',
    titleEnglish: 'Steady Pulse',
    linesHindi: [
      'मेरी धड़कनें किसी एक नाम की मोहताज कभी नहीं थीं दोस्त',
      'वो कल भी जी रही थीं और आज भी पूरी ताक़त से धड़क रही हैं',
    ],
    linesHinglish: [
      'Meri dhadkanein kisi ek naam ki mohtaaj kabhi nahin theen dost',
      'Wo kal bhi jee rahi theen aur aaj bhi poori taaqat se dhadak rahi hain',
    ],
    linesEnglish: [
      'My heartbeat never belonged exclusively to one single name',
      'It carried me before, and it beats strong and steady today too',
    ],
  },
  {
    title: 'ख़ाली पन्नों की शांति',
    titleEnglish: 'Calm Blank Pages',
    linesHindi: [
      'कुछ अधूरी कहानियाँ इसी तरह शांत विराम माँगती हैं आख़िर में',
      'न किसी की हार होती है और न किसी के सिर कोई दोष रहता है',
    ],
    linesHinglish: [
      'Kuch adhoori kahaaniyaan isi tarah shaant viraam maangti hain aakhir mein',
      'Na kisi ki haar hoti hai aur na kisi ke sar koi dosh rehta hai',
    ],
    linesEnglish: [
      'Some unfinished stories simply ask for a peaceful full stop',
      'Nobody leaves defeated, and nobody carries pointless blame away',
    ],
  },
  {
    title: 'अपनी दुनिया सँवारना',
    titleEnglish: 'Tending My Garden',
    linesHindi: [
      'दूसरों के बगीचे सींचते-सींचते अपना आँगन सूख गया था मेरा',
      'अब हर सुबह अपने ही सपनों के पौधे को पानी देता हूँ मैं',
    ],
    linesHinglish: [
      'Doosron ke bageeche seenchte-seenchte apna aangan sookh gaya tha mera',
      'Ab har subah apne hi sapnon ke paudhe ko paani deta hoon main',
    ],
    linesEnglish: [
      'Busy tending somebody else’s garden left my own courtyard dry',
      'Now every morning begins watering my own neglected dreams first',
    ],
  },
  {
    title: 'सुकून की नई सुबह',
    titleEnglish: 'Gentle New Morning',
    linesHindi: [
      'फ़ोन में नोटिफ़िकेशन न भी हो तो दिन उदास नहीं लगता अब',
      'खिड़की की चिड़ियों की चहचहाहट ज़्यादा प्यारी लगती है मुझे',
    ],
    linesHinglish: [
      'Phone mein notification na bhi ho to din udaas nahin lagta ab',
      'Khidki ki chidiyon ki chehchahaahat zyada pyaari lagti hai mujhe',
    ],
    linesEnglish: [
      'Even an empty notification bar no longer makes the morning feel dull',
      'Listening to sparrows outside my window sounds far sweeter anyway',
    ],
  },
  {
    title: 'बिना शर्त आगे बढ़ना',
    titleEnglish: 'Moving Forward Cleanly',
    linesHindi: [
      'कोई शर्त या उम्मीद नहीं रखी है अब मैंने बीते दिनों से',
      'जो था वो अच्छा था, जो आगे है वो उससे भी बेहतर होगा',
    ],
    linesHinglish: [
      'Koi shart ya ummeed nahin rakhi hai ab maine beete dinon se',
      'Jo tha wo accha tha, jo aage hai wo usse bhi behtar hoga',
    ],
    linesEnglish: [
      'I hold zero lingering conditions over the days already behind me',
      'What happened taught me well, and what comes next will be even better',
    ],
  },
  {
    title: 'दिल की समझदारी की जीत',
    titleEnglish: 'Maturity Wins',
    linesHindi: [
      'गुस्से में दरवाज़ा पटककर जाने से ज़्यादा सुंदर होता है ये',
      'कि एक हल्की सी मुस्कान देकर चुपचाप आगे निकल जाया जाए',
    ],
    linesHinglish: [
      'Gusse mein darwaaza patakkar jaane se zyada sundar hota hai ye',
      'Ki ek halki si muskaan dekar chupchaap aage nikal jaaya jaaye',
    ],
    linesEnglish: [
      'Far finer than slamming doors in anger at the finish line',
      'Is offering a calm nod and walking gently onto your next road',
    ],
  },
  {
    title: 'नए रंगों की तैयारी',
    titleEnglish: 'Ready for Bright Days',
    linesHindi: [
      'ब्रेकअप ज़िंदगी का पूर्ण विराम नहीं, सिर्फ़ एक अर्धविराम है',
      'आगे अभी अनगिनत खूबसूरत वाक्य लिखे जाने बाकी हैं यार',
    ],
    linesHinglish: [
      'Breakup zindagi ka poorn viraam nahin, sirf ek ardhviraam hai',
      'Aage abhi anginat khoobsurat vaakya likhe jaane baaki hain yaar',
    ],
    linesEnglish: [
      'A breakup is never a final period on life—it is only a comma',
      'Countless joyful sentences still wait ahead to be written cleanly',
    ],
  },
  {
    title: 'आख़िरी धूप',
    titleEnglish: 'Golden Sunset Peace',
    linesHindi: [
      'शाम की सुनहरी धूप में खड़े होकर आज मन बेहद हल्का लगा',
      'जैसे बरसों बाद मैंने अपने कंधे से कोई पुराना बोझ उतार दिया',
    ],
    linesHinglish: [
      'Shaam ki sunahri dhoop mein khade hokar aaj man behad halka laga',
      'Jaise barson baad maine apne kandhe se koi purana bojh utaar diya',
    ],
    linesEnglish: [
      'Standing out in warm sunset light today, my heart felt remarkably light',
      'As though I finally set down an old weight I had carried for years',
    ],
  },
  {
    title: 'दिल की असली आज़ादी',
    titleEnglish: 'True Emotional Freedom',
    linesHindi: [
      'आज़ादी सिर्फ़ बाहर की नहीं, मन के भीतर की भी होती है दोस्त',
      'गलत रिश्ते से निकलकर जो सुकून मिला वो सबसे बड़ा है',
    ],
    linesHinglish: [
      'Aazaadi sirf baahar ki nahin, man ke bheetar ki bhi hoti hai dost',
      'Galat rishte se nikal kar jo sukoon mila wo sabse bada hai',
    ],
    linesEnglish: [
      'Freedom lives inside the heart even more than outside walls',
      'The relief that arrives after leaving the wrong match is unmatched',
    ],
  },
  {
    title: 'मुस्कुराता हुआ मन',
    titleEnglish: 'Lighter Spirit',
    linesHindi: [
      'अब किसी के आने-जाने से मन का संतुलन नहीं बिगड़ता मेरा',
      'मैं ख़ुद अपने भीतर एक शांत समुद्र सा बन चुका हूँ',
    ],
    linesHinglish: [
      'Ab kisi ke aane-jaane se man ka santulan nahin bigadta mera',
      'Main khud apne bheetar ek shaant samudra sa ban chuka hoon',
    ],
    linesEnglish: [
      'People coming or going no longer shakes my inner balance',
      'I have grown steady inside, calm like a deep quiet sea',
    ],
  },
  {
    title: 'साफ़ आसमान',
    titleEnglish: 'Clear Horizon',
    linesHindi: [
      'बारिश के बाद जैसे हवा में मिट्टी की मीठी ख़ुशबू आती है',
      'ब्रेकअप से उबरने के बाद ज़िंदगी भी उतनी ही ताज़ा लगती है',
    ],
    linesHinglish: [
      'Baarish ke baad jaise hawa mein mitti ki meethi khushboo aati hai',
      'Breakup se ubarne ke baad zindagi bhi utni hi taaza lagti hai',
    ],
    linesEnglish: [
      'Just like the sweet scent of rain-washed earth after a storm',
      'Life feels crisp and brand new once you heal past a breakup',
    ],
  },
  {
    title: 'अपनी कहानी का नायक',
    titleEnglish: 'Hero of My Own Story',
    linesHindi: [
      'मैं किसी की अधूरी कहानी का सहायक किरदार बनकर नहीं रहूँगा',
      'मेरी अपनी दुनिया है और उसकी कमान अब मेरे ही हाथों में है',
    ],
    linesHinglish: [
      'Main kisi ki adhoori kahaani ka sahaayak kirdaar bankar nahin rahunga',
      'Meri apni duniya hai aur uski kamaan ab mere hi haathon mein hai',
    ],
    linesEnglish: [
      'I refuse to linger as a side character in somebody else’s half-told tale',
      'I have a life of my own, and the steering wheel sits firmly in my hands',
    ],
  },
  {
    title: 'सब कुछ अच्छा होगा',
    titleEnglish: 'Everything Turns Fine',
    linesHindi: [
      'आज थोड़ा भारी लग रहा है तो घबराना बिल्कुल मत मेरे दोस्त',
      'कल इसी मोड़ को याद करके तुम चैन से मुस्कुराने वाले हो',
    ],
    linesHinglish: [
      'Aaj thoda bhaari lag raha hai to ghabraana bilkul mat mere dost',
      'Kal isi mod ko yaad karke tum chain se muskuraane waale ho',
    ],
    linesEnglish: [
      'If today still feels a little heavy, please do not panic, friend',
      'Someday soon you will look back at this exact bend and smile in peace',
    ],
  },
  {
    title: 'ख़ुद से नई दोस्ती',
    titleEnglish: 'Befriending Myself',
    linesHindi: [
      'ब्रेकअप ने एक अच्छा काम तो किया है मेरी ज़िंदगी में अब',
      'मैं अपना सबसे अच्छा दोस्त बनना सीख गया हूँ आखिरकार',
    ],
    linesHinglish: [
      'Breakup ne ek accha kaam to kiya hai meri zindagi mein ab',
      'Main apna sabse accha dost banna seekh gaya hoon aakhirkaar',
    ],
    linesEnglish: [
      'If that breakup brought one lasting blessing into my world',
      'It taught me how to become my own kindest, steadier best friend',
    ],
  },
  {
    title: 'सुकून भरा कल',
    titleEnglish: 'Peaceful Tomorrow',
    linesHindi: [
      'बीते हुए दरवाज़े पर बार-बार दस्तक देने से क्या फायदा यार',
      'आगे का पूरा आसमान अभी खुला है, उड़ान भरने को तैयार',
    ],
    linesHinglish: [
      'Beete hue darwaaze par baar-baar dastak dene se kya faayda yaar',
      'Aage ka poora aasmaan abhi khula hai, udaan bharne ko taiyaar',
    ],
    linesEnglish: [
      'What good is knocking repeatedly on a door belonging to yesterday',
      'Wide open skies stretch out right ahead, waiting for your flight',
    ],
  },
  // Block 9 (161-170)
  {
    title: 'दिल की सलामती पर ध्यान',
    titleEnglish: 'Protecting My Smile',
    linesHindi: [
      'जो बात मेरी नींद और हँसी दोनों छीन लेती थी रोज़ शाम',
      'उसे पीछे छोड़कर आगे बढ़ जाना ही मेरा सबसे सही फ़ैसला था',
    ],
    linesHinglish: [
      'Jo baat meri neend aur hansi donon chheen leti thi roz shaam',
      'Use peechhe chhodkar aage badh jaana hi mera sabse sahi faisla tha',
    ],
    linesEnglish: [
      'Anything that stole both my sleep and my laugh every single night',
      'Walking past it was always going to be the smartest choice I made',
    ],
  },
  {
    title: 'वक़्त से सुलह',
    titleEnglish: 'Peace With Time',
    linesHindi: [
      'समय हर सवाल का जवाब शब्दों में नहीं देता हमें कभी',
      'बस एक दिन सुकून देकर समझा देता है कि जो हुआ अच्छा हुआ',
    ],
    linesHinglish: [
      'Samay har sawaal ka jawaab shabdon mein nahin deta humein kabhi',
      'Bas ek din sukoon dekar samjha deta hai ki jo hua accha hua',
    ],
    linesEnglish: [
      'Time rarely explains every ending with neat spoken answers',
      'One calm morning it simply gives you peace and lets you see why it fit',
    ],
  },
  {
    title: 'सच्चे प्यार का इंतज़ार',
    titleEnglish: 'Patient for Real Love',
    linesHindi: [
      'एक अनुभव कठिन रहा तो इसका मतलब ये नहीं कि उम्मीद छोड़ दूँ',
      'सही इंसान आएगा तो बिना किसी शोर के सब सँवार देगा',
    ],
    linesHinglish: [
      'Ek anubhav kathin raha to iska matlab ye nahin ki ummeed chhod doon',
      'Sahi insaan aayega to bina kisi shor ke sab sanwaar dega',
    ],
    linesEnglish: [
      'One rough chapter does not mean I need to give up on warmth forever',
      'When the right person arrives, everything aligns effortlessly without friction',
    ],
  },
  {
    title: 'साफ़ दिल का सफ़र',
    titleEnglish: 'Clean Heart Journey',
    linesHindi: [
      'टूटने के बाद भी मैंने अपने दिल को कठोर नहीं होने दिया',
      'बस अब किसे भीतर आने देना है, इसका चुनाव थोड़ा समझदारी से किया',
    ],
    linesHinglish: [
      'Tootne ke baad bhi maine apne dil ko kathor nahin hone diya',
      'Bas ab kise bheetar aane dena hai, iska chunaav thoda samajhdaari se kiya',
    ],
    linesEnglish: [
      'Even after heartache, I refused to let my heart turn bitter and hard',
      'I simply became a little wiser about who gets invited inside',
    ],
  },
  {
    title: 'हल्का-सा विराम',
    titleEnglish: 'Gentle Pause',
    linesHindi: [
      'ब्रेकअप के बाद सबसे पहले थोड़ा रुक कर साँस लेना ज़रूरी है',
      'हर दौड़ तुरंत जीतने के लिए नहीं, कुछ सँभलने के लिए भी होती है',
    ],
    linesHinglish: [
      'Breakup ke baad sabse pehle thoda ruk kar saans lena zaroori hai',
      'Har daud turant jeetne ke liye nahin, kuch sambhalne ke liye bhi hoti hai',
    ],
    linesEnglish: [
      'Right after a breakup, slowing down to catch your breath comes first',
      'Not every season is for sprinting—some are meant purely for healing',
    ],
  },
  {
    title: 'खुशियों की दोबारा दस्तक',
    titleEnglish: 'Happiness Knocks Again',
    linesHindi: [
      'जिस घर में पुराने दर्द ने डेरा डाला था कुछ महीनों पहले',
      'अब उसी घर की खिड़की पर फिर से नई खुशियाँ दस्तक दे रही हैं',
    ],
    linesHinglish: [
      'Jis ghar mein purane dard ne dera daala tha kuch mahinon pehle',
      'Ab usi ghar ki khidki par phir se nayi khushiyaan dastak de rahi hain',
    ],
    linesEnglish: [
      'Inside the very house where sorrow lingered just a few months ago',
      'Fresh laughter and calm joy are knocking gently at the window again',
    ],
  },
  {
    title: 'ज़िंदादिली कायम',
    titleEnglish: 'Spirit Unbroken',
    linesHindi: [
      'एक रिश्ता ही तो छूटा है हाथों से, ज़िंदादिली तो अभी बाकी है',
      'मेरी हँसी और मेरे ख्वाबों की पूरी दुनिया अभी सलामत खड़ी है',
    ],
    linesHinglish: [
      'Ek rishta hi to chhoota hai haathon se, zindaadili to abhi baaki hai',
      'Meri hansi aur mere khwaabon ki poori duniya abhi salaamat khadi hai',
    ],
    linesEnglish: [
      'Only one bond slipped from my hands—my love for living stays intact',
      'My real laugh and every bright dream of mine still stand tall',
    ],
  },
  {
    title: 'सुकून भरा अंत, नई शुरुआत',
    titleEnglish: 'Graceful End New Start',
    linesHindi: [
      'दो दिलों का अलग होना हमेशा हार की निशानी नहीं होता',
      'कभी-कभी वो दोनों के बेहतर जीवन की सबसे बड़ी शुरुआत होता है',
    ],
    linesHinglish: [
      'Do dilon ka alag hona hamesha haar ki nishaani nahin hota',
      'Kabhi-kabhi wo donon ke behtar jeevan ki sabse badi shuruaat hota hai',
    ],
    linesEnglish: [
      'Two hearts choosing different paths is not always a tragedy',
      'Sometimes it becomes the quiet start of happier lives for both',
    ],
  },
  {
    title: 'आख़िरी मुस्कुराहट',
    titleEnglish: 'Parting Smile',
    linesHindi: [
      'अच्छी यादों को दिल के संदूक में संभालकर रख लिया मैंने',
      'और मुस्कुराकर ज़िंदगी के अगले मोड़ की ओर कदम बढ़ा दिए',
    ],
    linesHinglish: [
      'Acchi yaadon ko dil ke sandook mein sambhaalkar rakh liya maine',
      'Aur muskuraakar zindagi ke agle mod ki or kadam badha diye',
    ],
    linesEnglish: [
      'I tucked the fondest memories neatly into the keepsake chest of my heart',
      'And stepped forward with a calm smile toward the next bright bend',
    ],
  },
  {
    title: 'दिल फिर मुस्कुराया',
    titleEnglish: 'Heart Smiled Again',
    linesHindi: [
      'वक़्त ने हर बिखरी हुई बात को प्यार से समेट दिया आख़िर',
      'ब्रेकअप की उदासी पीछे छूटी और मेरा दिल फिर से मुस्कुरा उठा',
    ],
    linesHinglish: [
      'Waqt ne har bikhri hui baat ko pyaar se samet diya aakhir',
      'Breakup ki udaasi peechhe chhooti aur mera dil phir se muskura utha',
    ],
    linesEnglish: [
      'Time gently gathered every scattered piece back into place at last',
      'The weight of goodbye stayed behind, and my heart smiled brightly again',
    ],
  },
];

export const UNIQUE_BREAKUP_170 = buildUniqueShayaris(
  'breakup',
  'Breakup Shayari (ब्रेकअप शायरी)',
  '💔',
  31,
  BREAKUP_ENTRIES
);
