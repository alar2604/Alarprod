export interface Coordinator {
  id: string;
  name: {
    ta: string;
    en: string;
  };
  phone: string;
  waNum: string;
  location: string;
  area: {
    ta: string;
    en: string;
  };
}

export interface City {
  id: string;
  name: {
    ta: string;
    en: string;
  };
  region?: {
    ta: string;
    en: string;
  };
}

export const cities: City[] = [
  { id: 'chennai', name: { ta: 'சென்னை', en: 'Chennai' }, region: { ta: 'வட தமிழகம்', en: 'North TN' } },
  { id: 'coimbatore', name: { ta: 'கோயம்புத்தூர் - சூலூர்', en: 'Coimbatore - Soolur' }, region: { ta: 'மேற்கு தமிழகம்', en: 'West TN' } },
  { id: 'madurai', name: { ta: 'மதுரை - தெப்பக்குளம்', en: 'Madurai - Theppakulam' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'trichy', name: { ta: 'திருச்சி', en: 'Trichy' }, region: { ta: 'மத்திய தமிழகம்', en: 'Central TN' } },
  { id: 'thirunelveli', name: { ta: 'திருநெல்வேலி', en: 'Thirunelveli' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'thoothukudi', name: { ta: 'தூத்துக்குடி', en: 'Thoothukudi' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'kanyakumari', name: { ta: 'கன்னியாகுமரி - நாகர்கோவில்', en: 'Kanyakumari - Nagercoil' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'thanjavur', name: { ta: 'தஞ்சாவூர்', en: 'Thanjavur' }, region: { ta: 'டெல்டா', en: 'Delta' } },
  { id: 'thiruvarur', name: { ta: 'திருவாரூர்', en: 'Thiruvarur' }, region: { ta: 'டெல்டா', en: 'Delta' } },
  { id: 'nagapattinam', name: { ta: 'நாகப்பட்டினம்', en: 'Nagapattinam' }, region: { ta: 'டெல்டா', en: 'Delta' } },
  { id: 'dindigul', name: { ta: 'திண்டுக்கல்', en: 'Dindigul' }, region: { ta: 'மத்திய தமிழகம்', en: 'Central TN' } },
  { id: 'theni', name: { ta: 'தேனி', en: 'Theni' }, region: { ta: 'மேற்கு தொடர்ச்சி', en: 'Western Ghats' } },
  { id: 'tiruppur', name: { ta: 'திருப்பூர் - உடுமலைப்பேட்டை', en: 'Tiruppur - Udumalaipet' }, region: { ta: 'மேற்கு தமிழகம்', en: 'West TN' } },
  { id: 'cuddalore', name: { ta: 'கடலூர் - சிதம்பரம்', en: 'Cuddalore - Chidambaram' }, region: { ta: 'வட தமிழகம்', en: 'North TN' } },
  { id: 'villupuram', name: { ta: 'விழுப்புரம்', en: 'Villupuram' }, region: { ta: 'வட தமிழகம்', en: 'North TN' } },
  { id: 'thiruvannamalai', name: { ta: 'திருவண்ணாமலை', en: 'Thiruvannamalai' }, region: { ta: 'வட தமிழகம்', en: 'North TN' } },
  { id: 'vellore', name: { ta: 'வேலூர் - திருப்பத்தூர்', en: 'Vellore - Thirupattur' }, region: { ta: 'வட தமிழகம்', en: 'North TN' } },
  { id: 'kanchipuram', name: { ta: 'காஞ்சிபுரம்', en: 'Kanchipuram' }, region: { ta: 'வட தமிழகம்', en: 'North TN' } },
  { id: 'krishnagiri', name: { ta: 'கிருஷ்ணகிரி - ஓசூர்', en: 'Krishnagiri - Hosur' }, region: { ta: 'மேற்கு தமிழகம்', en: 'West TN' } },
  { id: 'ariyalur', name: { ta: 'அரியலூர்', en: 'Ariyalur' }, region: { ta: 'மத்திய தமிழகம்', en: 'Central TN' } },
  { id: 'sivagangai', name: { ta: 'சிவகங்கை', en: 'Sivagangai' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'tenkasi', name: { ta: 'தென்காசி - சங்கரன்கோவில்', en: 'Tenkasi - Sankarankovil' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'virudhunagar', name: { ta: 'விருதுநகர் - சாத்தூர்', en: 'Virudhunagar - Sattur' }, region: { ta: 'தென் தமிழகம்', en: 'South TN' } },
  { id: 'puducherry', name: { ta: 'புதுச்சேரி', en: 'Puducherry' }, region: { ta: 'யூனியன் பிரதேசம்', en: 'Union Territory' } },
  { id: 'online', name: { ta: 'ஆன்லைன் / பிற மாவட்டங்கள் / பிற மாநிலங்கள்', en: 'Online / Other districts / Other states' }, region: { ta: 'அஞ்சல் வழி', en: 'Courier / Postal' } },
];

export const coordinators: Coordinator[] = [
  {
    id: 'coord-ariyalur',
    name: { ta: 'தமிழ்க்களம்', en: 'Thamizhkkalam' },
    phone: '+919843427724',
    waNum: '919843427724',
    location: 'ariyalur',
    area: { ta: 'அரியலூர் நகரம்', en: 'Ariyalur Town' }
  },
  {
    id: 'coord-chennai',
    name: { ta: 'BE 4 BOOKS', en: 'BE 4 BOOKS' },
    phone: '+919042461472',
    waNum: '919042461472',
    location: 'chennai',
    area: { ta: 'சென்னை & புறநகர்', en: 'Chennai & Suburbs' }
  },
  {
    id: 'coord-coimbatore',
    name: { ta: 'அலர் கள ஒருங்கிணைப்பாளர்', en: 'Alar Field Coordinator' },
    phone: '+919843255244',
    waNum: '919843255244',
    location: 'coimbatore',
    area: { ta: 'சூலூர், கோயம்புத்தூர்', en: 'Soolur, Coimbatore' }
  },
  {
    id: 'coord-cuddalore',
    name: { ta: 'அலர் கள ஒருங்கிணைப்பாளர்', en: 'Alar Field Coordinator' },
    phone: '+919790137315',
    waNum: '9790137315',
    location: 'cuddalore',
    area: { ta: 'சிதம்பரம், கடலூர்', en: 'Chidambaram, Cuddalore' }
  },
  {
    id: 'coord-dindigul',
    name: { ta: 'வெற்றிமொழி வெளியீட்டகம்', en: 'Vetri Mozhi Veliyeedagam' },
    phone: '+919715168794',
    waNum: '919715168794',
    location: 'dindigul',
    area: { ta: 'திண்டுக்கல் நகரம்', en: 'Dindigul City' }
  },
  {
    id: 'coord-kanchipuram',
    name: { ta: 'குரு புக் சென்டர்', en: 'Guru Book Center' },
    phone: '+918610726359',
    waNum: '918610726359',
    location: 'kanchipuram',
    area: { ta: 'காஞ்சிபுரம்', en: 'Kanchipuram' }
  },
  {
    id: 'coord-kanyakumari',
    name: { ta: 'KUMARI BOOK SHOP', en: 'KUMARI BOOK SHOP' },
    phone: '+918072571033',
    waNum: '918072571033',
    location: 'kanyakumari',
    area: { ta: 'நாகர்கோவில், கன்னியாகுமரி', en: 'Nagercoil, Kanyakumari' }
  },
  {
    id: 'coord-krishnagiri',
    name: { ta: 'MOSTLY BOOKS', en: 'MOSTLY BOOKS' },
    phone: '+919986721337',
    waNum: '919986721337',
    location: 'krishnagiri',
    area: { ta: 'ஓசூர், கிருஷ்ணகிரி', en: 'Hosur, Krishnagiri' }
  },
  {
    id: 'coord-madurai',
    name: { ta: 'THEERA BOOKS (தீர புக்ஸ்)', en: 'THEERA BOOKS' },
    phone: '+919976633688',
    waNum: '919976633688',
    location: 'madurai',
    area: { ta: 'தெப்பக்குளம், மதுரை', en: 'Theppakulam, Madurai' }
  },
  {
    id: 'coord-nagapattinam',
    name: { ta: 'அலர் கள ஒருங்கிணைப்பாளர்', en: 'Alar Field Coordinator' },
    phone: '+919843217578',
    waNum: '919843217578',
    location: 'nagapattinam',
    area: { ta: 'நாகப்பட்டினம்', en: 'Nagapattinam' }
  },
  {
    id: 'coord-online',
    name: { ta: 'COTTON CANDY BOOKS', en: 'COTTON CANDY BOOKS' },
    phone: '+919629008192',
    waNum: '919629008192',
    location: 'online',
    area: { ta: 'அனைத்து மாவட்டங்கள் & மாநிலங்கள்', en: 'All Districts & States (Postal)' }
  },
  {
    id: 'coord-puducherry',
    name: { ta: 'பாரதி புக்ஸ் (BHARATHI BOOKS)', en: 'BHARATHI BOOKS' },
    phone: '+919443534364',
    waNum: '919443534364',
    location: 'puducherry',
    area: { ta: 'புதுச்சேரி நகரம்', en: 'Puducherry' }
  },
  {
    id: 'coord-sivagangai',
    name: { ta: 'கணியன் பூங்குன்றனார் புத்தகாலயம்', en: 'Kaniyan Poongundranar Puthagalayam' },
    phone: '+919486780918',
    waNum: '919486780918',
    location: 'sivagangai',
    area: { ta: 'சிவகங்கை & காரைக்குடி', en: 'Sivagangai & Karaikudi' }
  },
  {
    id: 'coord-tenkasi',
    name: { ta: 'சங்கரன் ஐயா புத்தகக் கடை', en: 'Sankaran Ayya Book Shop' },
    phone: '+919488041947',
    waNum: '919488041947',
    location: 'tenkasi',
    area: { ta: 'சங்கரன்கோவில், தென்காசி', en: 'Sankarankovil, Tenkasi' }
  },
  {
    id: 'coord-thanjavur',
    name: { ta: 'SIMLY NOOL ANGADI (சிம்லி நூல் அங்காடி)', en: 'SIMLY NOOL ANGADI' },
    phone: '+919600832452',
    waNum: '919600832452',
    location: 'thanjavur',
    area: { ta: 'தஞ்சாவூர் நகரம்', en: 'Thanjavur' }
  },
  {
    id: 'coord-theni',
    name: { ta: 'உரையாடல் பதிப்பகம்', en: 'Uraiyadal Pathippagam' },
    phone: '+919043364410',
    waNum: '919043364410',
    location: 'theni',
    area: { ta: 'தேனி & பெரியகுளம்', en: 'Theni & Periyakulam' }
  },
  {
    id: 'coord-thirunelveli',
    name: { ta: 'கரிசல் புத்தக நிலையம் (KARISAL PUTHAGA NILAIYAM)', en: 'KARISAL PUTHAGA NILAIYAM' },
    phone: '+918220678407',
    waNum: '918220678407',
    location: 'thirunelveli',
    area: { ta: 'திருநெல்வேலி சந்திப்பு', en: 'Tirunelveli Junction' }
  },
  {
    id: 'coord-thiruvannamalai',
    name: { ta: 'புழுதி பதிப்பகம் (PUZHUTHI PATHIPPAGAM)', en: 'PUZHUTHI PATHIPPAGAM' },
    phone: '+919488805933',
    waNum: '919488805933',
    location: 'thiruvannamalai',
    area: { ta: 'திருவண்ணாமலை கிரிவலப் பாதை', en: 'Thiruvannamalai' }
  },
  {
    id: 'coord-thiruvarur',
    name: { ta: 'அலர் கள ஒருங்கிணைப்பாளர்', en: 'Alar Field Coordinator' },
    phone: '+919629023711',
    waNum: '919629023711',
    location: 'thiruvarur',
    area: { ta: 'திருவாரூர்', en: 'Thiruvarur' }
  },
  {
    id: 'coord-thoothukudi',
    name: { ta: 'அலர் கள ஒருங்கிணைப்பாளர்', en: 'Alar Field Coordinator' },
    phone: '+919488716962',
    waNum: '919488716962',
    location: 'thoothukudi',
    area: { ta: 'தூத்துக்குடி & கோவில்பட்டி', en: 'Thoothukudi & Kovilpatti' }
  },
  {
    id: 'coord-tiruppur',
    name: { ta: 'வேலா புக் சென்டர் (VELA BOOK CENTRE)', en: 'VELA BOOK CENTRE' },
    phone: '+919842650929',
    waNum: '919842650929',
    location: 'tiruppur',
    area: { ta: 'உடுமலைப்பேட்டை, திருப்பூர்', en: 'Udumalaipet, Tiruppur' }
  },
  {
    id: 'coord-trichy',
    name: { ta: 'அலர் கள ஒருங்கிணைப்பாளர்', en: 'Alar Field Coordinator' },
    phone: '+919500901729',
    waNum: '919500901729',
    location: 'trichy',
    area: { ta: 'திருச்சி & ஸ்ரீரங்கம்', en: 'Trichy & Srirangam' }
  },
  {
    id: 'coord-vellore',
    name: { ta: 'தேநீர் பதிப்பகம்', en: 'Theneer Pathippagam' },
    phone: '+919080909600',
    waNum: '919080909600',
    location: 'vellore',
    area: { ta: 'திருப்பத்தூர் & வேலூர்', en: 'Thirupattur & Vellore' }
  },
  {
    id: 'coord-villupuram',
    name: { ta: 'எழுஞாயிறு வாசகர் வட்டம்', en: 'Ezhunjayiru Vasagar Vattam' },
    phone: '+917094526838',
    waNum: '917094526838',
    location: 'villupuram',
    area: { ta: 'விழுப்புரம்', en: 'Villupuram' }
  },
  {
    id: 'coord-virudhunagar',
    name: { ta: 'அறிவொளி புத்தகக் கடை', en: 'Arivoli Puthaga Kadai' },
    phone: '+919443544607',
    waNum: '919443544607',
    location: 'virudhunagar',
    area: { ta: 'சாத்தூர், விருதுநகர்', en: 'Sattur, Virudhunagar' }
  }
];
