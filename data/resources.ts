// Comprehensive Resources for Adi Shankaracharya and Advaita Vedanta Study
// Based on thorough web research

export interface DigitalArchive {
  id: string
  name: string
  description: string
  type: 'archive' | 'website' | 'library' | 'repository'
  url: string
  contents: string[]
  accessType: 'free' | 'partial' | 'subscription'
  languages: string[]
  specialFeatures?: string[]
}

export interface AuthenticText {
  id: string
  title: string
  author: string
  category: 'commentary' | 'prakarana' | 'stotra' | 'upanishad'
  authenticity: 'confirmed' | 'disputed' | 'attributed'
  translations: {
    translator: string
    year?: number
    publisher?: string
    quality: 'highly-recommended' | 'recommended' | 'available'
    url?: string
    notes?: string
  }[]
  description: string
}

export interface Organization {
  id: string
  name: string
  founded: number | string
  founder: string
  type: 'traditional-matha' | 'mission' | 'gurukulam' | 'society'
  description: string
  focus: string[]
  website?: string
  locations?: string[]
  resources?: string[]
}

// Digital Archives and Online Resources
export const digitalArchives: DigitalArchive[] = [
  {
    id: 'internet-archive-complete-works',
    name: 'Internet Archive - Complete Works of Sri Sankaracharya (20 Volumes, 1910)',
    description: 'The standard collection published by Sri Vani Vilas Press, Srirangam. Memorial Edition containing all major works.',
    type: 'archive',
    url: 'https://archive.org/details/CompleteWorksOfSriSankaracharyaIn20Volumes1910Edition',
    contents: [
      'Brahma Sutra Bhashya',
      'Principal Upanishad Commentaries',
      'Bhagavad Gita Bhashya',
      'Prakarana Granthas',
      'Stotras and devotional works'
    ],
    accessType: 'free',
    languages: ['Sanskrit', 'English'],
    specialFeatures: [
      'Historical 1910 edition',
      'Complete collection in one place',
      'Downloadable PDF format',
      'Public domain'
    ]
  },
  {
    id: 'wisdom-lib',
    name: 'WisdomLib.org',
    description: 'Comprehensive online library with Shankaracharya\'s commentaries in Sanskrit with English translations and transliterations.',
    type: 'library',
    url: 'https://www.wisdomlib.org',
    contents: [
      'Brahma Sutras with Shankara Bhashya',
      'Individual Upanishad commentaries (Isha, Kena, Katha, etc.)',
      'Searchable database',
      'IAST transliteration'
    ],
    accessType: 'free',
    languages: ['Sanskrit', 'English'],
    specialFeatures: [
      'Online reading interface',
      'Word-by-word analysis',
      'Searchable text',
      'Cross-references'
    ]
  },
  {
    id: 'shlokam-org',
    name: 'Shlokam.org',
    description: 'Verse-by-verse presentation of Shankaracharya\'s works with Sanskrit, transliteration, and meanings.',
    type: 'website',
    url: 'https://shlokam.org',
    contents: [
      'Bhaja Govindam (all 33 verses)',
      'Atma Bodha (68 verses)',
      'Soundarya Lahari (100 verses)',
      'Tattva Bodha',
      'Word-by-word meanings'
    ],
    accessType: 'free',
    languages: ['Sanskrit', 'English'],
    specialFeatures: [
      'Verse-by-verse layout',
      'Audio chanting',
      'Devanagari and transliteration',
      'Mobile-friendly'
    ]
  },
  {
    id: 'sanskrit-documents',
    name: 'Sanskrit Documents',
    description: 'Collection of Sanskrit texts including complete works of Shankaracharya in Devanagari.',
    type: 'repository',
    url: 'https://sanskritdocuments.org/iast/shankaracharya/',
    contents: [
      'Complete list of Shankaracharya works',
      'Sanskrit text in Devanagari',
      'PDF downloads',
      'ITX format files'
    ],
    accessType: 'free',
    languages: ['Sanskrit'],
    specialFeatures: [
      'Multiple file formats',
      'Original Sanskrit text',
      'No translations (pure Sanskrit)'
    ]
  },
  {
    id: 'gita-supersite',
    name: 'GitaSupersite (IIT Kanpur)',
    description: 'All commentaries on Bhagavad Gita including Shankaracharya\'s bhashya with English and Hindi translations.',
    type: 'website',
    url: 'https://www.gitasupersite.iitk.ac.in',
    contents: [
      'Bhagavad Gita with Shankara Bhashya',
      'Multiple commentaries for comparison',
      'Verse-by-verse analysis',
      'English and Hindi translations'
    ],
    accessType: 'free',
    languages: ['Sanskrit', 'English', 'Hindi'],
    specialFeatures: [
      'Academic quality',
      'Multiple translations',
      'Comparative study',
      'IIT Kanpur hosted'
    ]
  },
  {
    id: 'egangotri-trust',
    name: 'eGangotri Trust',
    description: 'Digitization of rare Sanskrit manuscripts including Shankaracharya works in Sharada script.',
    type: 'archive',
    url: 'https://archive.org (search eGangotri)',
    contents: [
      'Tattva Bodha manuscripts',
      'Atma Bodha manuscripts',
      'Rare Sharada script versions',
      'Palm leaf digitizations'
    ],
    accessType: 'free',
    languages: ['Sanskrit'],
    specialFeatures: [
      'Rare manuscripts',
      'Historical scripts',
      'Preservation work',
      'High-resolution scans'
    ]
  }
]

// Authentic Texts with Recommended Translations
export const authenticTexts: AuthenticText[] = [
  {
    id: 'brahma-sutra-bhashya',
    title: 'Brahma Sutra Bhashya',
    author: 'Adi Shankaracharya',
    category: 'commentary',
    authenticity: 'confirmed',
    description: 'Shankaracharya\'s masterpiece commentary on the Brahma Sutras, the foundational text of Vedanta. This is confirmed as authentic by all scholars.',
    translations: [
      {
        translator: 'Swami Gambhirananda',
        publisher: 'Advaita Ashrama',
        quality: 'highly-recommended',
        url: 'https://archive.org/details/brahma-sutra-bhasya-of-sankaracharya-swami-gambhirananda',
        notes: 'Regarded as indispensable for Vedanta students. Includes word-for-word meanings and running translation.'
      },
      {
        translator: 'Vasudeo Mahadeo Apte',
        year: 1960,
        publisher: 'Popular Book Depot',
        quality: 'recommended',
        url: 'https://archive.org/details/BrahmaSutraSankaraBhashyaEnglishTranslationVasudeoMahadeoApte1960'
      },
      {
        translator: 'Swami Vireswarananda',
        publisher: 'Ramakrishna Math',
        quality: 'recommended',
        notes: 'Sanskrit-English edition'
      }
    ]
  },
  {
    id: 'bhagavad-gita-bhashya',
    title: 'Bhagavad Gita Bhashya',
    author: 'Adi Shankaracharya',
    category: 'commentary',
    authenticity: 'confirmed',
    description: 'Shankaracharya\'s commentary on the Bhagavad Gita. The earliest extant commentary on the Gita.',
    translations: [
      {
        translator: 'Alladi Mahadeva Sastri',
        year: 1897,
        quality: 'highly-recommended',
        url: 'https://archive.org/details/Bhagavad-Gita.with.the.Commentary.of.Sri.Shankaracharya',
        notes: 'Most faithful to original Sanskrit. Stood the test of time since 1897.'
      },
      {
        translator: 'Swami Gambhirananda',
        publisher: 'Advaita Ashrama',
        quality: 'highly-recommended',
        url: 'https://archive.org/details/bhagavad-gita-with-the-commentary-of-adi-shankaracharya-by-swami-gambhirananda-a'
      },
      {
        translator: 'Dr. A.G. Krishna Warrier',
        publisher: 'Ramakrishna Math',
        quality: 'recommended'
      }
    ]
  },
  {
    id: 'upanishad-bhashyas',
    title: 'Principal Upanishad Commentaries',
    author: 'Adi Shankaracharya',
    category: 'commentary',
    authenticity: 'confirmed',
    description: 'Commentaries on 10-11 principal Upanishads. Certainly all genuine according to scholars.',
    translations: [
      {
        translator: 'Swami Gambhirananda',
        publisher: 'Advaita Ashrama',
        quality: 'highly-recommended',
        url: 'https://archive.org/details/eight-upanishads-with-the-commentary-of-s-swami-gambhirananda',
        notes: 'Eight Upanishads in 2 volumes - comprehensive and scholarly'
      }
    ]
  },
  {
    id: 'upadesa-sahasri',
    title: 'Upadesa Sahasri (A Thousand Teachings)',
    author: 'Adi Shankaracharya',
    category: 'prakarana',
    authenticity: 'confirmed',
    description: 'The ONLY non-commentary work that is certainly authentic. Original philosophical exposition by Shankaracharya.',
    translations: [
      {
        translator: 'Swami Jagadananda',
        publisher: 'Ramakrishna Math',
        quality: 'highly-recommended',
        notes: 'Scholarly translation with Sanskrit text'
      }
    ]
  },
  {
    id: 'atma-bodha',
    title: 'Atma Bodha (Self-Knowledge)',
    author: 'Attributed to Adi Shankaracharya',
    category: 'prakarana',
    authenticity: 'disputed',
    description: '68 verses on Self-knowledge. Authenticity doubted by some scholars but doesn\'t contradict Shankara\'s system.',
    translations: [
      {
        translator: 'Swami Nikhilananda',
        year: 1947,
        publisher: 'Sri Ramakrishna Math, Chennai',
        quality: 'highly-recommended',
        notes: 'Most comprehensive. 114-page introduction on Advaita Vedanta. Highest rated.'
      },
      {
        translator: 'Swami Chinmayananda',
        publisher: 'Chinmaya Mission',
        quality: 'recommended',
        notes: 'Verse-by-verse commentary'
      }
    ]
  },
  {
    id: 'vivekachudamani',
    title: 'Vivekachudamani (Crest Jewel of Discrimination)',
    author: 'Attributed to Adi Shankaracharya',
    category: 'prakarana',
    authenticity: 'disputed',
    description: '580 verses. Attribution questioned and mostly rejected by modern scholarship, but doesn\'t contradict his system.',
    translations: [
      {
        translator: 'Swami Madhavananda',
        year: 1921,
        publisher: 'Advaita Ashrama',
        quality: 'highly-recommended',
        notes: 'Historical significance. Widely referenced.'
      },
      {
        translator: 'Swami Prabhavananda & Christopher Isherwood',
        publisher: 'Vedanta Society',
        quality: 'highly-recommended',
        notes: 'Very accessible for Western readers'
      },
      {
        translator: 'John Grimes',
        year: 2004,
        quality: 'recommended',
        notes: 'Recent scholarly translation by professor of Hinduism/Buddhism'
      }
    ]
  },
  {
    id: 'bhaja-govindam',
    title: 'Bhaja Govindam (Moha Mudgara)',
    author: 'Adi Shankaracharya',
    category: 'stotra',
    authenticity: 'attributed',
    description: '31-33 verses (with disciples\' additions). Popular devotional hymn emphasizing bhakti alongside jnana.',
    translations: [
      {
        translator: 'Swami Chinmayananda',
        publisher: 'Chinmaya Mission',
        quality: 'highly-recommended',
        notes: 'Clear, precise commentary with word-by-word analysis'
      },
      {
        translator: 'T.M.P. Mahadevan',
        year: 1962,
        quality: 'recommended',
        notes: 'Scholarly English translation'
      }
    ]
  },
  {
    id: 'soundarya-lahari',
    title: 'Soundarya Lahari (Wave of Beauty)',
    author: 'Attributed to Adi Shankaracharya',
    category: 'stotra',
    authenticity: 'attributed',
    description: '100 verses praising Goddess Shakti. Combines devotion, Shakti worship, and Tantra.',
    translations: [
      {
        translator: 'Various',
        quality: 'available',
        url: 'https://shlokam.org/saundaryalahari/',
        notes: 'Available online with transliteration and meaning'
      }
    ]
  }
]

// Organizations and Institutions
export const organizations: Organization[] = [
  {
    id: 'chinmaya-mission',
    name: 'Chinmaya Mission',
    founded: 1953,
    founder: 'Swami Chinmayananda Saraswati',
    type: 'mission',
    description: 'Worldwide nonprofit dedicated to spreading knowledge of Advaita Vedanta, Bhagavad Gita, and Upanishads.',
    focus: [
      'Advaita Vedanta teachings',
      'Bhagavad Gita study',
      'Youth programs (CHYK)',
      'Balvihar (children\'s classes)',
      'Vedanta courses',
      'Publication of spiritual literature'
    ],
    website: 'https://www.chinmayamission.com',
    locations: ['Global - 300+ centers worldwide'],
    resources: [
      'Jnana Yajna (knowledge sacrifices)',
      'Sandeepany Sadhanalaya (Vedanta courses)',
      'Extensive publication catalog',
      'Online courses and lectures'
    ]
  },
  {
    id: 'ramakrishna-mission',
    name: 'Ramakrishna Mission',
    founded: 1897,
    founder: 'Swami Vivekananda',
    type: 'mission',
    description: 'Spiritual and humanitarian organization based on teachings of Sri Ramakrishna. Two arms: Math (spiritual) and Mission (service).',
    focus: [
      'Vedanta philosophy (all schools)',
      'Social service',
      'Education',
      'Healthcare',
      'Harmony of religions',
      'Monastery traditions'
    ],
    website: 'https://www.belurmath.org',
    locations: ['India', 'USA', 'Europe', 'Asia - multiple centers'],
    resources: [
      'Advaita Ashrama publications',
      'Ramakrishna Math publications',
      'Hospitals and schools',
      'Monastic training'
    ]
  },
  {
    id: 'vedanta-society',
    name: 'Vedanta Society',
    founded: 1894,
    founder: 'Swami Vivekananda',
    type: 'society',
    description: 'American arm of Ramakrishna movement. Founded after Parliament of Religions (1893).',
    focus: [
      'Advaita Vedanta teachings',
      'Ramakrishna-Vivekananda teachings',
      'Sunday services and lectures',
      'Monastic community',
      'Publications',
      'Interfaith dialogue'
    ],
    website: 'https://www.vedanta.org',
    locations: [
      'New York',
      'Hollywood',
      'San Francisco',
      'Boston',
      'Seattle',
      'Chicago',
      'Multiple USA locations'
    ],
    resources: [
      'Weekly lectures',
      'Vedanta Press publications',
      'Monastic retreats',
      'Online resources'
    ]
  },
  {
    id: 'arsha-vidya-gurukulam',
    name: 'Arsha Vidya Gurukulam',
    founded: 1986,
    founder: 'Swami Dayananda Saraswati (1930-2015)',
    type: 'gurukulam',
    description: 'Traditional Vedanta teaching institution. Created 400+ teachers through intensive 3-year residential programs.',
    focus: [
      'Traditional Vedanta teaching',
      'Sanskrit studies',
      'Intensive 3-year courses',
      'Teacher training',
      'Bhagavad Gita',
      'Upanishads and Brahma Sutras'
    ],
    website: 'https://www.arshavidya.in',
    locations: [
      'Saylorsburg, Pennsylvania, USA',
      'Rishikesh, Uttarakhand, India',
      'Coimbatore, Tamil Nadu, India',
      '60+ centers globally'
    ],
    resources: [
      '3-year residential Vedanta courses',
      'Teacher training programs',
      'Publications by Swami Dayananda',
      'Online study groups'
    ]
  }
]

// Academic Resources
export const academicSources = [
  {
    name: 'Stanford Encyclopedia of Philosophy - Śaṅkara',
    url: 'https://plato.stanford.edu/entries/shankara/',
    type: 'encyclopedia',
    description: 'Comprehensive academic article on Shankaracharya\'s philosophy'
  },
  {
    name: 'Internet Encyclopedia of Philosophy - Advaita Vedanta',
    url: 'https://iep.utm.edu/advaita-vedanta/',
    type: 'encyclopedia',
    description: 'Detailed academic coverage of Advaita Vedanta philosophy'
  },
  {
    name: 'ResearchGate - Investigation of Moksha in Advaita Vedanta',
    url: 'https://www.researchgate.net/publication/262829005',
    type: 'journal',
    description: 'Academic paper on moksha in Shankara and Gaudapada\'s Advaita'
  }
]
