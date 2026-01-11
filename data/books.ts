export const books = [
  {
    id: 'albert-enum-kalaikalanjiyam',
    title: {
      ta: 'ஆல்பர்ட் எனும் கலைக்களஞ்சியம்',
      en: 'Albert Enum Kalaikalanjiyam'
    },
    author: {
      ta: 'எஸ். அற்புதராஜ்',
      en: 'S. Arputharaj'
    },
    price: '399',
    image: '/images/cver.webp',
    desc: {
      ta: 'இந்த புத்தகம், "ஆல்பர்ட் எனும் கலைக்களஞ்சியம்", திரு. ஆல்பர்ட்டின் கலை மற்றும் இலக்கிய உலகிற்கான ஆழமான பங்களிப்புகளை முன்னிலைப்படுத்தும் கட்டுரைகளின் தொகுப்பாகும்.',
      en: 'This book, "Albert Enum Kalaikalanjiyam", is a curated collection of essays highlighting Mr. Albert’s profound contributions to the world of art and literature. A must-read for enthusiasts of Tamil creative thought and cultural heritage.'
    },
    rating: 5,
    details: {
      publisher: { ta: 'அலர் வெளியீடு', en: 'Alar veliyeedu' },
      language: { ta: 'தமிழ்', en: 'Tamil' },
      pages: { ta: '400', en: '400' },
      isbn: '9788198726735',
      edition: { ta: 'ஏப்ரல் 2025 (அலர் வெளியீடு)', en: 'April 2025 (Alar Veliyeedu)' },
      category: { ta: 'கட்டுரைத் தொகுப்பு', en: 'Essay Collection' },
      binding: { ta: 'பேப்பர்பேக் (Paperback)', en: 'Paperback' },
      paper: { ta: '18.6 kg Maplitho', en: '18.6 kg Maplitho' },
      code: '001',
      authorBio: {
        ta: 'எஸ். அற்புதராஜ், பேராசிரியர் ஆல்பர்ட்டுடன் அவருடைய இளமைக் காலம் முதல் எழுபது ஆண்டு காலம் உடனிருந்து பழகியவர். திருச்சி செயிண்ட் ஜோஸப் மேல்நிலைப் பள்ளியில் உதவித் தலைமை ஆசிரியராகப் பணிபுரிந்து ஓய்வு பெற்றவர். சிறுகதைகள் கொஞ்சம், கவிதைகள் கொஞ்சம் எழுதியிருக்கிறார். நல்ல இலக்கிய ரசனை உள்ளவர்.',
        en: 'S. Arputharaj was acquainted with Professor Albert for seventy years, since his youth. He retired as the Assistant Headmaster from St. Joseph\'s Higher Secondary School, Trichy. He has written some short stories and poems and possesses a keen appreciation for literature.'
      },
      relatedArticles: [
        {
          title: { ta: 'எஸ்.ஆல்பர்ட்: ஒரு பேராசிரியரும் பொதுமன்றமும்', en: 'S. Albert: A Professor and the Public Sphere' },
          excerpt: { ta: 'தமிழ் கலை, இலக்கியப் புலத்தின் ரகசிய அற்புதம் என அவரை அறிந்தவர்கள் ஆல்பர்ட்டை அழைப்பார்கள்.', en: 'Those who knew him would call Albert a secret marvel of the Tamil art and literary field.' },
          link: 'http://www.hindutamil.in/news/opinion/columns/666284-s-albert.html'
        },
        {
          title: { ta: 'அபூர்வ ரசனையாளர் ஆல்பர்ட்﻿', en: 'Albert: A Rare Connoisseur' },
          excerpt: { ta: 'பழந்தமிழ் இலக்கியத்தின் பள்ளியாகத் திகழ்ந்தவர் ரசிகமணி டி.கே.சி. அவரது ‘வட்டத் தொட்டி’ என்னும் இலக்கிய அமைப்பு தமிழ் அறிஞர்கள் பலர் உருவாகக் களம் அமைத்துக் கொடுத்தது.', en: 'Rasikamani T.K.C. was a pioneer in classical Tamil literature. His \'Vatta Thotti\' literary circle served as a platform for many Tamil scholars to emerge.' },
          link: 'https://www.hindutamil.in/news/literature/61954-.html'
        }
      ],
      quotes: [
        {
          text: { ta: '“Man with a capital M” என்று மாக்ஸிம் கார்க்கி சிலரைப் புகழ்வார். அத்தகைய மனிதர்களிலொருவர் ஆல்பர்ட்.', en: 'Maxim Gorky would praise some people as a "Man with a capital M". Albert is one such man.' },
          author: { ta: ' - எஸ்.வி. ராஜதுரை, பெரியாரிய-மார்க்ஸிய அறிஞர்', en: '- S.V. Rajadurai, Periyarist-Marxist Scholar' }
        },
        {
          text: { ta: '“எந்த ஒரு படைப்பையும் நிதானமாக அணுக வேண்டும். ஒரு படைப்புப் புரியவில்லை என்றால் அதைப் பற்றி அவசர முடிவு எதுவும் கொள்ளக்கூடாது; அதைச் சில காலம் கழித்து மீண்டும் படித்துப் பார்க்க வேண்டும்.” இவ்வாறு ஆல்பர்ட் கூறியவை, படைப்புகளை எளிதில் புரிந்துகொள்ள முடியாமல் தவிக்கும் நம்மைப் போன்றோருக்குப் பெரிதும் உதவியதாக இருந்தது.', en: '“One should approach any work calmly. If a work is not understood, one should not make any hasty decisions about it; one should read it again after some time.” What Albert said thus was very helpful for those like us who struggle to easily understand creative works.' },
          author: { ta: '- அம்ஷன் குமார், ஆவணப்பட இயக்குநர்', en: '- Amshan Kumar, Documentary Film Director' }
        },
        {
          text: { ta: 'ஆல்பர்ட் கொடுத்த கண்களின் வழியாகத்தான் நான் இன்று இந்த உலகைப் பார்க்கிறேன். அவரது பார்வை என்னை முழுமையாக மாற்றிவிட்டது. நான் எழுதிய ஒவ்வொரு கதைக்கும் பின்னால் ஆல்பர்ட் இருக்கிறார் என்பதே உண்மை.', en: 'It is through the eyes Albert gave me that I see the world today. His perspective has completely changed me. The truth is that Albert is behind every story I have written.' },
          author: { ta: '- இமையம், எழுத்தாளர்', en: '- Imayam, Writer' }
        }
      ],
      buyLinks: {
        dodo: 'https://dodobooks.in/products/albert-enum-kalaikalanjiyam'
      }
    }
  },
  {
    id: 'sathyajit-ray-kathaigal',
    title: {
      ta: 'சத்யஜித் ரே கதைகள்',
      en: 'Sathyajith Rey Kathaigal'
    },
    author: {
      ta: 'சத்யஜித் ரே',
      en: 'Sathyajit Ray'
    },
    translator: {
      ta: 'எஸ். அற்புதராஜ்',
      en: 'S. Arputharaj'
    },
    price: '399',
    image: '/images/sathyajithrey.webp',
    desc: {
      ta: 'சத்யஜித் ரே எழுதிய சுவாரஸ்யமான சிறுகதைகளின் தொகுப்பு. தமிழில் எஸ். அற்புதராஜ் அவர்கள் அழகாக மொழிபெயர்த்துள்ளார்.',
      en: 'A collection of interesting short stories written by Sathyajit Ray. Beautifully translated into Tamil by S. Arputharaj.'
    },
    rating: 5,
    details: {
      publisher: { ta: 'அலர் வெளியீடு', en: 'Alar veliyeedu' },
      language: { ta: 'தமிழ்', en: 'Tamil' },
      pages: { ta: '400', en: '400' },
      isbn: '9788198726735',
      edition: { ta: 'ஆகஸ்ட் 2025 (அலர் வெளியீடு)', en: 'August 2025 (Alar Veliyeedu)' }
    }
  },
  {
    id: 'sagayam-seitha-sagayam',
    title: {
      ta: 'சகாயம் செய்த சகாயம்',
      en: 'Sagayam Seitha Sagayam'
    },
    author: {
      ta: 'பெருமாள்முருகன்',
      en: 'Perumal Murugan'
    },
    price: '150',
    image: '/images/sagayam.webp',
    desc: {
      ta: 'நாமக்கல் மாவட்ட ஆட்சியராக உ. சகாயம் பணியாற்றியபோது, தனது அலுவலகத்தில் ‘லஞ்சம் தவிர்த்து, நெஞ்சம் நிமிர்த்து’ என்று ஒரு பலகையை மாட்டிவைத்தார். விளிம்புநிலை மக்களின் துயரங்களைத் துடைத்தெறிந்த சகாயத்தின் பணிகளைப் பதிவுசெய்கிறது.',
      en: 'When U. Sagayam served as the District Collector of Namakkal, he hung a board in his office that read \'Reject Bribes, Hold Head High\'. This book records the works of Sagayam who wiped away the sorrows of marginalized people.'
    },
    rating: 5,
    details: {
      publisher: { ta: 'அலர் வெளியீடு', en: 'Alar veliyeedu' },
      language: { ta: 'தமிழ்', en: 'Tamil' },
      pages: { ta: '136', en: '136' },
      isbn: '978-81-987267-1-1',
      edition: { ta: 'டிசம்பர் 2025 (அலர் வெளியீடு)', en: 'December 2025 (Alar Veliyeedu)' }
    }
  },
  {
    id: 'nenjam-marapathillai',
    title: {
      ta: 'நெஞ்சம் மறப்பதில்லை',
      en: 'Nenjam Marappathillai'
    },
    author: {
      ta: 'அமுதன் அடிகள்',
      en: 'Amuthan Adigal'
    },
    price: '200',
    image: '/images/kundrakudiadigal.webp',
    desc: {
      ta: 'நினைவும் உணர்வும் சார்ந்த அமுதன் அடிகள் அவர்களின் இலக்கியப் படைப்பு. ஆன்மிகம் மற்றும் மனித உறவுகள் பற்றிய ஆழமான பார்வை.',
      en: 'A literary work by Amuthan Adigal based on memory and feeling. A profound look at spirituality and human relationships.'
    },
    rating: 5,
    details: {
      publisher: { ta: 'அலர் வெளியீடு', en: 'Alar veliyeedu' },
      language: { ta: 'தமிழ்', en: 'Tamil' },
      pages: { ta: '144', en: '144' },
      isbn: '9788198726797',
      edition: { ta: 'ஜூலை 2025 (அலர் வெளியீடு)', en: 'July 2025 (Alar Veliyeedu)' }
    }
  }
];
