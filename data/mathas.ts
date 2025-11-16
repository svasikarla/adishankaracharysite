// The Four Mathas established by Adi Shankaracharya
// Based on authentic research from various sources

export interface Matha {
  id: string
  name: string
  sanskrit: string
  direction: 'North' | 'South' | 'East' | 'West'
  location: {
    city: string
    state: string
    region: string
  }
  coordinates?: {
    lat: number
    lng: number
  }
  established: string
  veda: string
  mahavakya: string
  mahavahyaMeaning: string
  firstAcharya: string
  presiding Deity: string
  description: string
  significance: string[]
  website?: string
  historicalBackground: string
  currentActivities: string[]
}

export const fourMathas: Matha[] = [
  {
    id: 'sringeri',
    name: 'Sringeri Sharada Peetham',
    sanskrit: 'शृङ्गेरी शारदा पीठम्',
    direction: 'South',
    location: {
      city: 'Sringeri',
      state: 'Karnataka',
      region: 'Chikkamagalur District, on the banks of River Tunga'
    },
    coordinates: {
      lat: 13.4167,
      lng: 75.2500
    },
    established: '8th Century CE (c. 788-820 CE)',
    veda: 'Yajurveda',
    mahavakya: 'Aham Brahmasmi - अहम् ब्रह्मास्मि',
    mahavahyaMeaning: 'I am Brahman - The great declaration that the individual self is identical with the universal consciousness',
    firstAcharya: 'Sureshvaracharya',
    presidingDeity: 'Goddess Sharada (Saraswati)',
    description: 'The Sringeri Sharada Peetham is one of the most prominent among the four mathas established by Adi Shankaracharya. Situated on the banks of the sacred River Tunga in Karnataka, it has been a continuous center of Advaita Vedanta learning for over 1200 years. The matha is renowned for its scholarship, spiritual guidance, and charitable activities.',
    significance: [
      'The only matha with an unbroken lineage of Shankaracharyas from the 8th century',
      'Houses the famous Sharada temple where Adi Shankaracharya is believed to have installed the deity',
      'Center of Vedic learning and Sanskrit scholarship',
      'Provides spiritual guidance to millions of devotees worldwide',
      'Maintains extensive charitable and educational institutions',
      'Preserves ancient manuscripts and texts',
      'Associated with Yajurveda and the Mahavakya "Aham Brahmasmi"'
    ],
    website: 'https://www.sringeri.net',
    historicalBackground: 'According to tradition, when Adi Shankaracharya reached Sringeri, he saw a cobra spreading its hood to give shade to a frog in labor. Deeply impressed by this natural compassion, he established his first matha here. The current matha stands on the same sacred ground where Shankaracharya meditated and taught. Sureshvaracharya, one of his foremost disciples and author of Naishkarmyasiddhi and Brihadaranyaka Upanishad Bhashya Vartika, was installed as the first pontiff.',
    currentActivities: [
      'Regular Vedic studies and Advaita Vedanta teachings',
      'Daily worship and rituals following ancient traditions',
      'Annual Navaratri celebrations attracting thousands',
      'Charitable hospitals and educational institutions',
      'Publication of Sanskrit and philosophical texts',
      'Spiritual camps and discourses',
      'Preservation and digitization of ancient manuscripts'
    ]
  },
  {
    id: 'dwarka',
    name: 'Dwarka Sharada Peetham',
    sanskrit: 'द्वारका शारदा पीठम्',
    direction: 'West',
    location: {
      city: 'Dwarka',
      state: 'Gujarat',
      region: 'Western coast, on the Arabian Sea'
    },
    coordinates: {
      lat: 22.2394,
      lng: 68.9678
    },
    established: '8th Century CE (c. 788-820 CE)',
    veda: 'Samaveda',
    mahavakya: 'Tat Tvam Asi - तत् त्वम् असि',
    mahavahyaMeaning: 'That Thou Art - The teaching that the individual self (thou) is identical with the ultimate reality (that)',
    firstAcharya: 'Padmapadacharya',
    presidingDeity: 'Lord Krishna (Dwarkadhish)',
    description: 'The Dwarka Sharada Peetham, also known as Kalika Peetham, is situated in the ancient city of Dwarka on the western coast of India. This sacred matha is located in one of the four Dhamas (holy abodes) and near the famous Dwarkadhish temple. It represents the Samaveda tradition and propagates the Mahavakya "Tat Tvam Asi" from the Chandogya Upanishad.',
    significance: [
      'Located in Dwarka, one of the four sacred Dhamas (Char Dham)',
      'Associated with Lord Krishna, connecting Vedanta with Bhakti',
      'Preserves the Samaveda tradition',
      'Teaches the profound Mahavakya "Tat Tvam Asi"',
      'Important center for integrating devotion and knowledge paths',
      'Overlooks the Arabian Sea, symbolizing the infinite',
      'Plays a crucial role in preserving Gujarati spiritual culture'
    ],
    website: 'https://www.dwarkapeeth.org',
    historicalBackground: 'Dwarka has been a spiritual center since ancient times, being the legendary capital of Lord Krishna. When Adi Shankaracharya visited this sacred city, he established a matha to spread Advaita Vedanta in the western parts of India. Padmapadacharya, known for his unwavering devotion to his guru and his scholarly works, was appointed as the first head. The matha has continued to guide spiritual seekers through the integration of devotion to Krishna with Vedantic knowledge.',
    currentActivities: [
      'Teaching Samaveda and Vedantic scriptures',
      'Bhakti-oriented spiritual discourses',
      'Annual festivals aligned with Krishna traditions',
      'Pilgrim guidance and spiritual counseling',
      'Preservation of Vedic chanting traditions',
      'Charitable activities for pilgrims',
      'Interfaith dialogues and cultural programs'
    ]
  },
  {
    id: 'puri',
    name: 'Govardhan Math',
    sanskrit: 'गोवर्धन मठ',
    direction: 'East',
    location: {
      city: 'Puri',
      state: 'Odisha',
      region: 'Eastern coast, near the Bay of Bengal'
    },
    coordinates: {
      lat: 19.8135,
      lng: 85.8312
    },
    established: '8th Century CE (c. 788-820 CE)',
    veda: 'Rigveda',
    mahavakya: 'Prajnanam Brahma - प्रज्ञानम् ब्रह्म',
    mahavahyaMeaning: 'Consciousness is Brahman - The declaration that pure consciousness itself is the ultimate reality',
    firstAcharya: 'Padmapadacharya (according to some sources) or Hastamalakacharya',
    presidingDeity: 'Lord Jagannath',
    description: 'The Govardhan Math in Puri is one of the four cardinal mathas established by Adi Shankaracharya in the east. Located in the sacred city of Puri, home to the famous Jagannath Temple, this matha represents the Rigveda tradition. It oversees the spiritual and philosophical development of devotees in eastern India and propagates the Mahavakya "Prajnanam Brahma" from the Aitareya Upanishad.',
    significance: [
      'Located in Puri, one of the four sacred Dhamas',
      'Connected with the famous Jagannath Temple',
      'Represents Rigveda tradition, the oldest Veda',
      'Teaches "Prajnanam Brahma" - Consciousness is Brahman',
      'Important center for integrating temple worship with Vedantic philosophy',
      'Preserves Odia spiritual and cultural traditions',
      'Historically influential in Bengal and Odisha regions'
    ],
    website: 'https://www.govardhanmath-puri.org',
    historicalBackground: 'Puri has been a major pilgrimage center for millennia, centered around Lord Jagannath. Adi Shankaracharya recognized the spiritual importance of this location and established the Govardhan Math to guide seekers in the eastern parts of India. The matha has played a crucial role in preserving Vedic traditions in Odisha and Bengal, even during periods of political upheaval. It continues to maintain a close relationship with the Jagannath Temple.',
    currentActivities: [
      'Rigveda studies and Vedantic teachings',
      'Coordination with Jagannath Temple activities',
      'Annual Rath Yatra and other festivals',
      'Spiritual guidance for millions of devotees',
      'Sanskrit education and Vedic schooling',
      'Social welfare and charitable work',
      'Preservation of Odia cultural heritage'
    ]
  },
  {
    id: 'joshimath',
    name: 'Jyotir Math',
    sanskrit: 'ज्योतिर्मठ',
    direction: 'North',
    location: {
      city: 'Joshimath (Jyotirmath)',
      state: 'Uttarakhand',
      region: 'Himalayas, near Badrinath'
    },
    coordinates: {
      lat: 30.5565,
      lng: 79.5645
    },
    established: '8th Century CE (c. 788-820 CE)',
    veda: 'Atharvaveda',
    mahavakya: 'Ayam Atma Brahma - अयम् आत्मा ब्रह्म',
    mahavahyaMeaning: 'This Self is Brahman - The declaration that the individual self is non-different from the universal Brahman',
    firstAcharya: 'Totakacharya',
    presidingDeity: 'Lord Badri Narayan (Vishnu)',
    description: 'Jyotir Math, located in the Himalayan town of Joshimath, is the northernmost of the four mathas established by Adi Shankaracharya. Situated near the sacred Badrinath shrine, this matha represents the Atharvaveda tradition. Despite a long period when the seat remained vacant, it was re-established in the 20th century and continues to guide spiritual seekers in northern India.',
    significance: [
      'Located in the sacred Himalayas, traditional abode of sages',
      'Near Badrinath, one of the four Dhamas',
      'Represents Atharvaveda tradition',
      'Teaches "Ayam Atma Brahma" from Mandukya Upanishad',
      'Gateway to several important pilgrimage sites',
      'Historically important for preserving Vedic traditions in the Himalayas',
      'Re-established in modern times, showing resilience of tradition'
    ],
    website: 'https://www.jyotirmath.com',
    historicalBackground: 'According to tradition, Adi Shankaracharya established Jyotir Math during his final journey to the Himalayas. Totakacharya, the author of Totakashtakam and known for his complete devotion, was installed as the first pontiff. The matha faced a long period when the seat of Shankaracharya remained vacant, but was successfully re-established in the 20th century by Swami Brahmananda Saraswati, continuing the unbroken spiritual tradition.',
    currentActivities: [
      'Atharvaveda studies and teaching',
      'Spiritual guidance for Himalayan pilgrims',
      'Coordination with Badrinath and other Himalayan temples',
      'Winter and summer seasonal activities',
      'Preservation of Himalayan spiritual traditions',
      'Charitable work for local communities',
      'Environmental conservation programs'
    ]
  }
]

// Additional information about the Matha system
export const mathaSystemInfo = {
  purpose: 'Adi Shankaracharya established these four mathas in the four cardinal directions of India to spread Advaita Vedanta philosophy and preserve Vedic traditions.',
  structure: 'Each matha is headed by a Shankaracharya (also called Jagadguru) who provides spiritual guidance and maintains the lineage of teachings.',
  significance: 'The four mathas represent the unity of India through spiritual and philosophical integration, with each matha preserving one of the four Vedas and teaching one of the four Mahavakyas (great sayings).',
  mahavakyas: [
    {
      sanskrit: 'प्रज्ञानम् ब्रह्म',
      transliteration: 'Prajnanam Brahma',
      meaning: 'Consciousness is Brahman',
      source: 'Aitareya Upanishad (Rigveda)'
    },
    {
      sanskrit: 'अहम् ब्रह्मास्मि',
      transliteration: 'Aham Brahmasmi',
      meaning: 'I am Brahman',
      source: 'Brihadaranyaka Upanishad (Yajurveda)'
    },
    {
      sanskrit: 'तत् त्वम् असि',
      transliteration: 'Tat Tvam Asi',
      meaning: 'That Thou Art',
      source: 'Chandogya Upanishad (Samaveda)'
    },
    {
      sanskrit: 'अयम् आत्मा ब्रह्म',
      transliteration: 'Ayam Atma Brahma',
      meaning: 'This Self is Brahman',
      source: 'Mandukya Upanishad (Atharvaveda)'
    }
  ]
}
