export interface TeamMember {
  id: string;
  name: {
    ta: string;
    en: string;
  };
  role: {
    ta: string;
    en: string;
  };
  department: 'editorial' | 'design' | 'research' | 'distribution';
  departmentName: {
    ta: string;
    en: string;
  };
  bio: {
    ta: string;
    en: string;
  };
  focus: {
    ta: string;
    en: string;
  };
  initials: string;
  avatarColor: string;
  image?: string;
  featured?: boolean;
}

export interface Department {
  id: 'all' | 'editorial' | 'design' | 'research' | 'distribution';
  name: {
    ta: string;
    en: string;
  };
  description: {
    ta: string;
    en: string;
  };
}

export const departments: Department[] = [
  {
    id: 'all',
    name: { ta: 'அனைத்துப் பிரிவுகளும்', en: 'All Departments' },
    description: { ta: 'அலர் வெளியீட்டின் அனைத்துப் படைப்பு மற்றும் பதிப்பு ஆளுமைகள்', en: 'All creative, editorial, and production leaders at Alar' }
  },
  {
    id: 'editorial',
    name: { ta: 'பதிப்பு & தலைமை', en: 'Editorial & Leadership' },
    description: { ta: 'கையெழுத்துப் பிரதிகளின் தேர்வு, நுணுக்கமான திருத்தம் மற்றும் வெளியீட்டுத் திட்டமிடல்', en: 'Manuscript curation, scholarly editing, and publishing vision' }
  },
  {
    id: 'design',
    name: { ta: 'கலை & அச்சு வடிவமைப்பு', en: 'Art & Production' },
    description: { ta: 'மரபார்ந்த அழகியலுடன் கூடிய அட்டை வடிவமைப்பு, எழுத்துரு மற்றும் அச்சு நேர்த்தி', en: 'Bespoke cover art, classical Tamil typography, and archival binding' }
  },
  {
    id: 'research',
    name: { ta: 'ஆய்வு & மொழிபெயர்ப்பு', en: 'Research & Translation' },
    description: { ta: 'வாய்மொழி மரபு, சூழலியல் ஆவணங்கள் மற்றும் உலக இலக்கிய மொழிபெயர்ப்புகள்', en: 'Oral histories, ecological archives, and comparative world literature' }
  },
  {
    id: 'distribution',
    name: { ta: 'மக்கள் தொடர்பு & விநியோகம்', en: 'Outreach & Distribution' },
    description: { ta: 'தமிழ்நாடு தழுவிய கள ஒருங்கிணைப்பாளர்கள் மற்றும் வாசகர் வட்ட நெட்வொர்க்', en: 'Grassroots field coordinators and independent reader communities' }
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'meenakshi-sundaram',
    name: {
      ta: 'கி. மீனாட்சி சுந்தரம்',
      en: 'K. Meenakshi Sundaram'
    },
    role: {
      ta: 'தலைமை நிர்வாகி & முதன்மை வெளியீட்டாளர்',
      en: 'Managing Director & Chief Publisher'
    },
    department: 'editorial',
    departmentName: {
      ta: 'பதிப்பு & தலைமை',
      en: 'Editorial & Leadership'
    },
    bio: {
      ta: '25 ஆண்டுகளுக்கும் மேலான பதிப்புத்துறை அனுபவம் கொண்டவர். வணிக அழுத்தங்களைத் தாண்டி, காலத்தால் அழியாத செவ்விலக்கியங்களையும் சமூக அக்கறையுள்ள ஆய்வு நூல்களையும் எளிய மக்களிடம் கொண்டுசேர்ப்பதை வாழ்நாள் இயக்கமாகக் கொண்டவர்.',
      en: 'Over 25 years of literary publishing leadership. Dedicated to publishing enduring classics, scholarly studies, and grassroots literature free from purely commercial compromise.'
    },
    focus: {
      ta: 'செவ்வியல் மறுபதிப்புகள் & மக்கள் பதிப்புத் திட்டங்கள்',
      en: 'Classical Reprints & People’s Editions'
    },
    initials: 'MS',
    avatarColor: 'from-[#2D6A4F] to-[#1B4332]',
    featured: true
  },
  {
    id: 'senthamizh-selvi',
    name: {
      ta: 'முனைவர் இரா. செந்தமிழ்ச் செல்வி',
      en: 'Dr. R. Senthamizh Selvi'
    },
    role: {
      ta: 'தலைமைப் பதிப்பாசிரியர் & ஆவண இயக்குநர்',
      en: 'Chief Editorial Director & Archival Lead'
    },
    department: 'editorial',
    departmentName: {
      ta: 'பதிப்பு & தலைமை',
      en: 'Editorial & Leadership'
    },
    bio: {
      ta: 'தமிழ் இலக்கியத்தில் முனைவர் பட்டம் பெற்றவர். நூற்றாண்டு கால தமிழ்ச் சிறுகதைகள், பழங்குடி வாழ்வியல் ஆவணங்கள் மற்றும் கையெழுத்துப் பிரதி ஆய்வுகளில் ஆழ்ந்த புலமை மிக்கவர். நூலின் நம்பகத்தன்மையும் ஆய்வு ஒழுங்கும் இவரது வழிகாட்டலில் உறுதிசெய்யப்படுகின்றன.',
      en: 'Doctorate in Tamil Literature and archival research. Specializes in a century of Tamil short fiction, indigenous life documentation, and rigorous text authentication.'
    },
    focus: {
      ta: 'வரலாற்று ஆவணங்கள் & இலக்கியத் தொகுப்புகள்',
      en: 'Historical Archives & Fiction Anthologies'
    },
    initials: 'SS',
    avatarColor: 'from-[#872B5E] to-[#5C163D]',
    featured: true
  },
  {
    id: 'anand-rajasekaran',
    name: {
      ta: 'ஆனந்த் ராஜசேகரன்',
      en: 'Anand Rajasekaran'
    },
    role: {
      ta: 'முதுநிலைத் திட்டப் பதிப்பாசிரியர் — புனைகதை & நாட்டாரியல்',
      en: 'Senior Commissioning Editor — Fiction & Folklore'
    },
    department: 'editorial',
    departmentName: {
      ta: 'பதிப்பு & தலைமை',
      en: 'Editorial & Leadership'
    },
    bio: {
      ta: 'புதிய எழுத்தாளர்களின் ஆக்கங்களை அடையாளங்கண்டு செப்பனிடுவதிலும், மண்ணின் மணமும் வட்டார வழக்குகளும் நிறைந்த புனைகதைகளைத் தொகுப்பதிலும் பங்காற்றுபவர். ‘பழம்படு பனை’ தொகுப்பின் ஆசிரியர் குழு ஒருங்கிணைப்பாளர்.',
      en: 'Discovers and mentors emerging storytellers while curating regional anthologies rooted in vernacular oral traditions. Editorial coordinator for the Pazhampadu Panai anthology.'
    },
    focus: {
      ta: 'வட்டார புனைகதைகள் & பனைசார் கதைக் களம்',
      en: 'Vernacular Fiction & Palm-Culture Narratives'
    },
    initials: 'AR',
    avatarColor: 'from-[#B45309] to-[#78350F]'
  },
  {
    id: 'dharani-dharan',
    name: {
      ta: 'மா. தரணிதரன்',
      en: 'M. Dharani Dharan'
    },
    role: {
      ta: 'தலைமை கலை இயக்குநர் & அட்டை வடிவமைப்பு',
      en: 'Creative Art Director & Cover Designer'
    },
    department: 'design',
    departmentName: {
      ta: 'கலை & அச்சு வடிவமைப்பு',
      en: 'Art & Production'
    },
    bio: {
      ta: 'நவீனத்துவமும் பாரம்பரிய இந்தியக் கலைக் கூறுகளும் இணைந்த நூல் அட்டைகளை உருவாக்குவதில் பெயர் பெற்றவர். ஒவ்வொரு நூலின் கருத்தியல் ஆழத்தையும் ஒரு காட்சிச் சட்டகத்தில் கொண்டுவரும் அரிய கலைத் தேர்ச்சி கொண்டவர்.',
      en: 'Renowned for minimalist covers that harmonize modern typography with classical Indian artistic motifs. Crafts evocative book covers that capture the soul of each manuscript.'
    },
    focus: {
      ta: 'எழுத்துரு கலை (Typography) & அட்டை அழகியல்',
      en: 'Tamil Typography & Visual Identity'
    },
    initials: 'DD',
    avatarColor: 'from-[#0369A1] to-[#075985]',
    featured: true
  },
  {
    id: 'vasanthakumari',
    name: {
      ta: 'பொ. வசந்தகுமாரி',
      en: 'P. Vasanthakumari'
    },
    role: {
      ta: 'அச்சு & நூல் வடிவமைப்பு மேலாளர்',
      en: 'Head of Print Production & Book Architecture'
    },
    department: 'design',
    departmentName: {
      ta: 'கலை & அச்சு வடிவமைப்பு',
      en: 'Art & Production'
    },
    bio: {
      ta: 'கடின அட்டை (Hardbound) கட்டமைப்பு, மரபான நூல் தையல் முறை (Thread-sewn binding) மற்றும் நீண்ட காலம் உழைக்கும் அமிலமில்லா காகிதத் தேர்வில் 18 ஆண்டு தொழில்நுட்ப நிபுணத்துவம் பெற்றவர்.',
      en: '18 years of technical mastery in hardbound book architecture, Smyth-sewn archival binding, and premium acid-free paper curation designed to endure for generations.'
    },
    focus: {
      ta: 'கடின அட்டைத் தையல் & காப்பகத் தரம் (Archival Quality)',
      en: 'Hardcover Binding & Archival Craft'
    },
    initials: 'VK',
    avatarColor: 'from-[#047857] to-[#065F46]'
  },
  {
    id: 'ilango-bharathi',
    name: {
      ta: 'இளங்கோ பாரதி',
      en: 'Ilango Bharathi'
    },
    role: {
      ta: 'ஓவியர் & கையெழுத்துக் கலைஞர்',
      en: 'Staff Illustrator & Calligrapher'
    },
    department: 'design',
    departmentName: {
      ta: 'கலை & அச்சு வடிவமைப்பு',
      en: 'Art & Production'
    },
    bio: {
      ta: 'மரச்செதுக்கு பாணி ஓவியங்கள் (Woodcut art), கோட்டுச் சித்திரங்கள் மற்றும் பாரம்பரிய தமிழ் கையெழுத்து வடிவங்களை நேர்த்தியாக உருவாக்குபவர். நூலின் உட்பக்கங்களை இலக்கிய நயத்தோடு அலங்கரிப்பவர்.',
      en: 'Crafts handcrafted woodcut illustrations, intricate pen-and-ink line art, and classical Tamil calligraphic titles that grace title pages and chapter headers.'
    },
    focus: {
      ta: 'மரச்செதுக்கு ஓவியங்கள் & தமிழ் வனப்பெழுத்து',
      en: 'Woodcut Illustrations & Calligraphy'
    },
    initials: 'IB',
    avatarColor: 'from-[#4F46E5] to-[#3730A3]'
  },
  {
    id: 'vimalanathan',
    name: {
      ta: 'பேராசிரியர் சு. விமலநாதன்',
      en: 'Prof. S. Vimalanathan'
    },
    role: {
      ta: 'மொழிபெயர்ப்பு & ஒப்பிலக்கியப் பொறுப்பாளர்',
      en: 'Director of Translations & Comparative Literature'
    },
    department: 'research',
    departmentName: {
      ta: 'ஆய்வு & மொழிபெயர்ப்பு',
      en: 'Research & Translation'
    },
    bio: {
      ta: 'கன்னடம், மலையாளம், வங்கம் மற்றும் ஆங்கில இலக்கியங்களை மூலத்தின் ஆன்மா சிதையாமல் தமிழுக்குக் கொண்டுவரும் மொழிபெயர்ப்புக் குழுவை வழிநடத்துபவர். பல்துறை செவ்விலக்கியங்களின் ஒப்பாய்வாளர்.',
      en: 'Directs translation initiatives bringing Kannada, Malayalam, Bengali, and world classics into Tamil while preserving the voice and cultural nuance of the original authors.'
    },
    focus: {
      ta: 'இந்திய மொழிபெயர்ப்புகள் & உலக இலக்கியம்',
      en: 'Pan-Indian Translations & World Classics'
    },
    initials: 'VN',
    avatarColor: 'from-[#BE123C] to-[#881337]'
  },
  {
    id: 'kavitha-thangavel',
    name: {
      ta: 'கவிதா தங்கவேல்',
      en: 'Kavitha Thangavel'
    },
    role: {
      ta: 'பண்பாட்டு ஆவண & சூழலியல் ஆய்வாளர்',
      en: 'Head of Archival & Ecological Research'
    },
    department: 'research',
    departmentName: {
      ta: 'ஆய்வு & மொழிபெயர்ப்பு',
      en: 'Research & Translation'
    },
    bio: {
      ta: 'களஆய்வு மேற்கொண்டு பனை சார் தொழில் நுணுக்கங்கள், மூலிகை மரபுகள் மற்றும் விளிம்புநிலை மக்களின் வாய்மொழிப் பாடல்களை நேரில் சேகரித்து நூல்வடிவாக்கும் பணியில் முன்னிற்பவர்.',
      en: 'Leads field ethnography, documenting palmyra craftsmanship, indigenous botanical wisdom, and oral folklore through grassroots expeditions across Tamil Nadu.'
    },
    focus: {
      ta: 'நாட்டார் பாடல்கள் & சூழலியல் மானுடவியல்',
      en: 'Ethnobotany & Oral History'
    },
    initials: 'KT',
    avatarColor: 'from-[#15803D] to-[#14532D]'
  },
  {
    id: 'muthukumar',
    name: {
      ta: 'செ. முத்துக்குமார்',
      en: 'C. Muthukumar'
    },
    role: {
      ta: 'கள ஒருங்கிணைப்பு & விநியோக இயக்குநர்',
      en: 'Director of Field Networks & Logistics'
    },
    department: 'distribution',
    departmentName: {
      ta: 'மக்கள் தொடர்பு & விநியோகம்',
      en: 'Outreach & Distribution'
    },
    bio: {
      ta: 'தமிழ்நாடு முழுவதும் 25+ மாவட்டங்களில் செயல்படும் அலர் கள ஒருங்கிணைப்பாளர்களை ஒருங்கிணைத்து, தபால் கட்டணமின்றி வாசகர்கள் கையிலேயே நேரடியாக நூல்கள் போய்ச்சேர வழிவகுப்பவர்.',
      en: 'Coordinates Alar’s grassroots network of 25+ regional coordinators across Tamil Nadu, ensuring readers receive publications directly without intermediary postal markups.'
    },
    focus: {
      ta: 'மாவட்ட கள வலையமைப்பு & புத்தகத் திருவிழாக்கள்',
      en: 'Regional Coordinator Hubs & Book Fairs'
    },
    initials: 'MK',
    avatarColor: 'from-[#CA8A04] to-[#854D0E]'
  },
  {
    id: 'nivetha-ramanathan',
    name: {
      ta: 'நிவேதா ராமநாதன்',
      en: 'Nivetha Ramanathan'
    },
    role: {
      ta: 'வாசகர் வட்டம் & மக்கள் தொடர்பு மேலாளர்',
      en: 'Reader Community & Literary Outreach Lead'
    },
    department: 'distribution',
    departmentName: {
      ta: 'மக்கள் தொடர்பு & விநியோகம்',
      en: 'Outreach & Distribution'
    },
    bio: {
      ta: 'கல்லூரிகள், கிராமப்புற நூலகங்கள் மற்றும் இலக்கிய அமைப்புகளில் வாசகர் சந்திப்புகளை ஒழுங்குசெய்து, வாசிப்புப் பழக்கத்தை அடுத்த தலைமுறை இளைஞர்களிடம் விதைக்கும் மக்கள் தொடர்பாளர்.',
      en: 'Organizes community reading circles, rural library drives, and youth literary forums, nurturing dialogue between contemporary writers, researchers, and young readers.'
    },
    focus: {
      ta: 'நூலக முன்னெடுப்புகள் & வாசிப்பு வட்டங்கள்',
      en: 'Library Outreach & Literary Circles'
    },
    initials: 'NR',
    avatarColor: 'from-[#9333EA] to-[#6B21A8]'
  }
];

export const publishingPillars = [
  {
    number: '01',
    title: {
      ta: 'பொறுப்புடன் கூடிய இலக்கியத் தேர்வு',
      en: 'Curation with Responsibility'
    },
    desc: {
      ta: 'வெறும் சந்தை லாபத்தை முதன்மையாகக் கொள்ளாமல், மனித அறிவையும் விழுமியங்களையும் வளர்த்தெடுக்கும் செறிவான ஆக்கங்களை மட்டுமே தேடி வெளியிடுகிறோம்.',
      en: 'Publishing driven by literary substance and human dignity rather than commercial fads, curating books that stand the test of time.'
    }
  },
  {
    number: '02',
    title: {
      ta: 'அழகுணர்ச்சியுடன் கூடிய அச்சு நேர்த்தி',
      en: 'Typographic & Bookcraft Excellence'
    },
    desc: {
      ta: 'ஒவ்வொரு பக்கத்தின் எழுத்துரு வடிவம், காகிதத் தரம், அட்டை ஓவியம் முதல் தையல் வரை வாசிப்பின் முழுமையான சுகத்தை வழங்கும் கலைப் படைப்பு.',
      en: 'From bespoke typography and cover art to archival thread-sewn bindings, every volume is crafted as a collector’s tactile artwork.'
    }
  },
  {
    number: '03',
    title: {
      ta: 'மண்ணின் குரலும் மரபுப் பாதுகாப்பும்',
      en: 'Roots, Ecology & Oral Heritage'
    },
    desc: {
      ta: 'காலவெள்ளத்தில் மறைந்துபோகும் தொல்மரபுகள், நாட்டுப்புற கதைகள் மற்றும் சூழலியல் ஆவணங்களை அடுத்த தலைமுறைக்காகப் பாதுகாத்து ஆவணப்படுத்துகிறோம்.',
      en: 'Documenting fragile oral histories, indigenous ecological traditions, and folk memories before they vanish from cultural memory.'
    }
  },
  {
    number: '04',
    title: {
      ta: 'அனைவருக்குமான மக்கள் பதிப்புத் திட்டம்',
      en: 'Accessible Grassroots Distribution'
    },
    desc: {
      ta: '25+ கள மையங்கள் மூலம் இடைத்தரகர்கள் மற்றும் அதிகப்படியான அஞ்சல் கட்டணங்களின்றி நியாயமான விலையில் வாசகர்களுக்கு நேரடியாக நூல்களை வழங்குகிறோம்.',
      en: 'Eliminating commercial barriers through regional coordinator networks, bringing definitive literature directly to readers at affordable prices.'
    }
  }
];

export const editorialStats = [
  {
    value: '12+',
    label: {
      ta: 'வெளியான பெருந்தொகுப்புகள்',
      en: 'Definitive Anthologies'
    }
  },
  {
    value: '150+',
    label: {
      ta: 'இணைந்த எழுத்தாளர்கள் & ஆய்வாளர்கள்',
      en: 'Curated Authors & Scholars'
    }
  },
  {
    value: '25+',
    label: {
      ta: 'மாவட்டக் கள ஒருங்கிணைப்பு மையங்கள்',
      en: 'Regional Coordinator Hubs'
    }
  },
  {
    value: '100%',
    label: {
      ta: 'சுயாதீன மக்கள் பதிப்பு இயக்கம்',
      en: 'Independent Grassroots Publishing'
    }
  }
];
