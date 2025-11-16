// Modern Teachers and Scholars of Advaita Vedanta
// Based on authenticated research

export interface Teacher {
  id: string
  name: string
  title?: string
  lifespan?: string
  tradition: string
  description: string
  specialization: string[]
  teachingStyle: string
  majorWorks?: string[]
  onlineResources: {
    type: 'website' | 'youtube' | 'podcast' | 'audio' | 'app'
    name: string
    url: string
    description: string
  }[]
  legacy?: string
  imageUrl?: string
}

export const modernTeachers: Teacher[] = [
  {
    id: 'swami-param Arthananda',
    name: 'Swami Paramarthananda',
    title: 'Swamiji',
    lifespan: '1940-Present',
    tradition: 'Chinmaya Mission / Arsha Vidya',
    description: 'Renowned traditional teacher of Vedanta teaching in Chennai for over 40 years. Studied at Sandeepany Sadhanalaya under Swami Chinmayananda and received Sannyasa from Swami Dayananda Saraswati.',
    specialization: [
      'Systematic Vedanta teaching',
      'Bhagavad Gita',
      'Principal Upanishads',
      'Brahma Sutras',
      'Prakarana Granthas (Panchadashi, Naishkarmyasiddhi, Upadesa Sahasri)',
      'Clear English exposition'
    ],
    teachingStyle: 'Traditional, systematic, and methodical. Known for making complex Vedantic concepts accessible through clear English explanations. Teaches complete texts verse-by-verse over extended periods.',
    majorWorks: [
      'Bhagavad Gita complete commentary',
      'Principal Upanishads teachings',
      'Tattva Bodha commentary',
      'Panchadashi complete teaching',
      'Thousands of recorded lectures'
    ],
    onlineResources: [
      {
        type: 'website',
        name: 'Yogamalika - Official Website',
        url: 'https://www.yogamalika.org',
        description: 'Official archive of Swamiji\'s talks, digitally recorded, mastered and streamed by Vedanta Vidyarthi Sangha Trust'
      },
      {
        type: 'app',
        name: 'Sastraprakasika Android App',
        url: 'https://arshavidyacenter.org',
        description: 'Download and listen to extensive talks in MP3 format'
      },
      {
        type: 'audio',
        name: 'Arsha Vidya Center',
        url: 'https://arshavidyacenter.org/swami-talks/swami-paramathananda/',
        description: 'Audio talks including current online classes'
      },
      {
        type: 'website',
        name: 'English Sreyas',
        url: 'https://english.sreyas.in/introduction-to-vedanta-swami-paramarthananda/',
        description: 'Introduction to Vedanta and other courses'
      }
    ],
    legacy: 'Created systematic recordings of complete Vedantic texts that serve as comprehensive study material for students worldwide. Known for perfect clarity and traditional authenticity.'
  },
  {
    id: 'swami-sarvapriyananda',
    name: 'Swami Sarvapriyananda',
    title: 'Swamiji',
    lifespan: '1967-Present',
    tradition: 'Ramakrishna Order / Vedanta Society',
    description: 'Current head of Vedanta Society of New York since 2017. Fortune India calls him "one of the best known lecturers of Vedanta in the world today". Strong proponent of Upanishad philosophy and consciousness studies.',
    specialization: [
      'Advaita Vedanta philosophy',
      'Upanishad teachings',
      'Consciousness and Self',
      'Making Vedanta relevant to modern seekers',
      'Interfaith dialogue',
      'Integration of science and spirituality'
    ],
    teachingStyle: 'Contemporary, engaging, and accessible while maintaining traditional depth. Skilled at drawing connections between ancient wisdom and modern life. Excellent communicator with global appeal.',
    majorWorks: [
      'Sunday lectures at Vedanta Society NY',
      'Bhagavad Gita series',
      'Upanishad teachings',
      'Gospel of Sri Ramakrishna commentaries',
      'Hundreds of YouTube lectures'
    ],
    onlineResources: [
      {
        type: 'website',
        name: 'Vedanta Society of New York',
        url: 'https://www.vedantany.org',
        description: 'Official website with live streams every Sunday 11 AM EST'
      },
      {
        type: 'youtube',
        name: 'Vedanta Society of New York YouTube',
        url: 'https://www.youtube.com/@VedantaNY',
        description: 'Lectures edited and posted within 1-2 weeks. Extensive library of talks'
      },
      {
        type: 'podcast',
        name: 'Vedanta Talks - Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/vedanta-talks/id1247628265',
        description: 'All lectures available as podcasts'
      },
      {
        type: 'podcast',
        name: 'Vedanta Talks - Spotify',
        url: 'https://open.spotify.com/show/5IrDmqXhiGwwyQcIUjRhtB',
        description: 'Spotify podcast channel'
      }
    ],
    legacy: 'Bringing Vedanta to millions worldwide through modern media while maintaining traditional authenticity. Making ancient wisdom accessible to contemporary seekers.'
  },
  {
    id: 'swami-dayananda-saraswati',
    name: 'Swami Dayananda Saraswati',
    title: 'Pujya Swamiji',
    lifespan: '1930-2015',
    tradition: 'Arsha Vidya',
    description: 'Founder of Arsha Vidya Gurukulam. Rare teacher who communicated non-duality to modern Western listeners. Created 400+ teachers through ten intensive 3-year residential programs.',
    specialization: [
      'Traditional Vedanta teaching methodology',
      'Teacher training',
      'Sanskrit pedagogy',
      'Cross-cultural communication of Vedanta',
      'Bhagavad Gita',
      'Upanishads'
    ],
    teachingStyle: 'Traditional yet accessible, with deep understanding of Western culture. Designed intensive residential programs combining Vedanta and Sanskrit studies. Emphasized precision in understanding Sanskrit terms.',
    majorWorks: [
      'Bhagavad Gita Home Study Course (18 volumes)',
      'Upanishad commentaries',
      'Tattva Bodha teachings',
      'Numerous Sanskrit grammar texts',
      'Created complete Vedanta teaching curriculum'
    ],
    onlineResources: [
      {
        type: 'website',
        name: 'Arsha Vidya Gurukulam',
        url: 'https://www.arshavidya.in',
        description: 'Official website with teachings and programs'
      },
      {
        type: 'website',
        name: 'Arsha Vidya Sampradaya',
        url: 'https://arshavidyasampradaya.in/swamiji/',
        description: 'Dedicated site for Swamiji\'s teachings'
      },
      {
        type: 'audio',
        name: 'Arsha Vidya Center',
        url: 'https://arshavidyacenter.org/swami-talks/swami-dayananda/',
        description: 'Archive of audio talks'
      }
    ],
    legacy: 'Revived traditional Vedanta teaching methodology. Created a global network of Vedanta teachers. Established 60+ Arsha Vidya centers worldwide. His teaching lineage continues through hundreds of students.'
  },
  {
    id: 'swami-chinmayananda',
    name: 'Swami Chinmayananda',
    title: 'Pujya Gurudev',
    lifespan: '1916-1993',
    tradition: 'Chinmaya Mission',
    description: 'Founder of Chinmaya Mission in 1953. Pioneer in making Vedanta accessible through Jnana Yajnas (knowledge sacrifices). Started as a journalist and became one of the 20th century\'s most influential Vedanta teachers.',
    specialization: [
      'Bhagavad Gita',
      'Upanishads',
      'Mass Vedanta teaching through Jnana Yajnas',
      'Youth inspiration',
      'Making Vedanta practical',
      'Written commentaries'
    ],
    teachingStyle: 'Dynamic, inspiring, and practical. Known for wit and humor. Made Vedanta appealing to modern audiences through camps and yajnas. Emphasized living Vedanta in daily life.',
    majorWorks: [
      'Bhagavad Gita commentary',
      'Upanishad commentaries',
      'Vivekachudamani commentary',
      'Atma Bodha commentary',
      'Over 90 published books'
    ],
    onlineResources: [
      {
        type: 'website',
        name: 'Chinmaya Mission',
        url: 'https://www.chinmayamission.com',
        description: 'Global organization with 300+ centers'
      },
      {
        type: 'website',
        name: 'Chinmaya Mission Publications',
        url: 'https://www.chinmayamission.com/publications.php',
        description: 'Extensive catalog of Gurudev\'s works'
      }
    ],
    legacy: 'Founded global Chinmaya Mission with 300+ centers. Inspired entire generation of Vedanta teachers. Created CHYK (Chinmaya Yuva Kendra) youth movement. Published over 90 books making Vedanta accessible.'
  },
  {
    id: 'swami-vivekananda',
    name: 'Swami Vivekananda',
    title: 'Swamiji',
    lifespan: '1863-1902',
    tradition: 'Ramakrishna Order',
    description: 'Chief disciple of Sri Ramakrishna. Introduced Vedanta to the Western world at Parliament of Religions (1893). Founded Ramakrishna Mission and Vedanta Societies in USA.',
    specialization: [
      'Practical Vedanta',
      'Raja Yoga',
      'Harmony of religions',
      'Service as worship',
      'Strength and fearlessness',
      'East-West cultural bridge'
    ],
    teachingStyle: 'Fiery, inspirational, practical. Emphasized strength, service, and practical application. Made Vedanta relevant for nation-building and social service.',
    majorWorks: [
      'Raja Yoga',
      'Karma Yoga',
      'Bhakti Yoga',
      'Jnana Yoga',
      'Complete Works (9 volumes)',
      'Hundreds of lectures'
    ],
    onlineResources: [
      {
        type: 'website',
        name: 'Ramakrishna Mission',
        url: 'https://www.belurmath.org',
        description: 'Headquarters and main center'
      },
      {
        type: 'website',
        name: 'Complete Works Online',
        url: 'https://www.ramakrishnavivekananda.info/',
        description: 'All works available online'
      }
    ],
    legacy: 'Brought Vedanta to the West. Established Ramakrishna Mission combining spirituality with social service. Inspired Indian renaissance. His works continue to inspire millions worldwide.'
  }
]

// Teaching Lineages
export const teachingLineages = {
  arshaVidya: {
    name: 'Arsha Vidya Parampara',
    description: 'Traditional teacher-student lineage (guru-shishya parampara) in Vedanta',
    keyTeachers: [
      'Adi Shankaracharya (788-820 CE)',
      'Unbroken lineage through centuries',
      'Swami Dayananda Saraswati (1930-2015)',
      'Swami Paramarthananda',
      '400+ teachers trained by Swami Dayananda',
      '60+ global centers'
    ]
  },
  ramakrishna: {
    name: 'Ramakrishna-Vivekananda Tradition',
    description: 'Based on teachings of Sri Ramakrishna and Swami Vivekananda',
    keyTeachers: [
      'Sri Ramakrishna (1836-1886)',
      'Swami Vivekananda (1863-1902)',
      'Direct disciples of Vivekananda',
      'Modern teachers in Ramakrishna Order',
      'Swami Sarvapriyananda (current)'
    ]
  },
  chinmaya: {
    name: 'Chinmaya Mission Lineage',
    description: 'Founded by Swami Chinmayananda for mass Vedanta teaching',
    keyTeachers: [
      'Swami Sivananda (Guru)',
      'Swami Chinmayananda (1916-1993)',
      'Swami Tejomayananda (current head)',
      'Hundreds of Acharyas worldwide',
      '300+ centers globally'
    ]
  }
}
