// Comprehensive biographical data for Adi Shankaracharya
// Based on traditional accounts and historical scholarship

export interface TimelineEvent {
  year: string
  age: string
  title: string
  description: string
  location?: string
  significance?: string
  category: 'birth' | 'education' | 'travel' | 'debate' | 'establishment' | 'writing' | 'teaching' | 'samadhi'
}

export interface TravelLocation {
  id: string
  name: string
  modernName?: string
  state: string
  coordinates: { lat: number; lng: number }
  visitYear?: string
  purpose: string
  significance: string
  events: string[]
}

export interface Debate {
  id: string
  opponent: string
  opponentSchool: string
  location: string
  year?: string
  topic: string
  outcome: string
  significance: string
  relatedTexts?: string[]
}

export interface Story {
  id: string
  title: string
  category: 'miracle' | 'teaching' | 'debate' | 'compassion' | 'wisdom' | 'devotion'
  summary: string
  fullStory: string
  moralLesson: string
  relatedConcepts?: string[]
}

// Timeline of Adi Shankaracharya's Life (788-820 CE)
export const timeline: TimelineEvent[] = [
  {
    year: '788 CE',
    age: '0',
    title: 'Birth in Kaladi',
    description: 'Born to Shivaguru and Aryamba in Kaladi village, Kerala. Born after his parents\' intense prayers to Lord Shiva.',
    location: 'Kaladi, Kerala',
    significance: 'Traditional accounts describe miraculous circumstances surrounding his birth',
    category: 'birth'
  },
  {
    year: '791 CE',
    age: '3',
    title: 'Upanayana Ceremony',
    description: 'Received sacred thread ceremony and began Vedic education. Showed extraordinary memory and intelligence.',
    location: 'Kaladi, Kerala',
    category: 'education'
  },
  {
    year: '793 CE',
    age: '5',
    title: 'Mastery of Four Vedas',
    description: 'Mastered all four Vedas, six Vedangas, and various scriptures at an unprecedented young age.',
    location: 'Kaladi, Kerala',
    significance: 'Demonstrated exceptional brilliance that would characterize his entire life',
    category: 'education'
  },
  {
    year: '796 CE',
    age: '8',
    title: 'Father\'s Passing',
    description: 'Father Shivaguru passed away. Young Shankaracharya performed the last rites despite being a child.',
    location: 'Kaladi, Kerala',
    category: 'education'
  },
  {
    year: '799 CE',
    age: '11',
    title: 'Permission for Sannyasa',
    description: 'Obtained mother\'s permission for sannyasa (renunciation) through the famous crocodile incident at the river.',
    location: 'Poorna River, Kerala',
    significance: 'Pivotal moment - mother Aryamba granted permission for him to become a monk',
    category: 'education'
  },
  {
    year: '800 CE',
    age: '12',
    title: 'Meeting Guru Govinda Bhagavatpada',
    description: 'Traveled to Omkareshwar and became disciple of Govinda Bhagavatpada, disciple of Gaudapada.',
    location: 'Omkareshwar, Madhya Pradesh',
    significance: 'Found his guru in the lineage of Advaita Vedanta',
    category: 'education'
  },
  {
    year: '802 CE',
    age: '14',
    title: 'Completion of Studies',
    description: 'Completed advanced Vedantic studies under Govinda Bhagavatpada. Received instruction to write commentaries.',
    location: 'Omkareshwar',
    significance: 'Guru recognized his unique ability to revive and systematize Advaita Vedanta',
    category: 'education'
  },
  {
    year: '803 CE',
    age: '15',
    title: 'Arrival at Kashi (Varanasi)',
    description: 'Arrived at the holy city of Kashi. Had the transformative encounter with Lord Shiva as Chandala (untouchable).',
    location: 'Kashi (Varanasi), Uttar Pradesh',
    significance: 'Composed Manisha Panchakam after this profound spiritual experience',
    category: 'travel'
  },
  {
    year: '804 CE',
    age: '16',
    title: 'Brahma Sutra Bhashya Completed',
    description: 'Completed his masterwork commentary on Brahma Sutras, establishing Advaita interpretation.',
    location: 'Kashi',
    significance: 'Most important philosophical work - foundation of Advaita Vedanta',
    category: 'writing'
  },
  {
    year: '805 CE',
    age: '17',
    title: 'Debate with Mandana Mishra',
    description: 'Famous debate with Mandana Mishra, leading scholar of Mimamsa school. Mandana\'s wife Bharati served as judge.',
    location: 'Mahishmati (near Omkareshwar)',
    significance: 'Victory established supremacy of Advaita; Mandana became disciple Sureshwaracharya',
    category: 'debate'
  },
  {
    year: '806 CE',
    age: '18',
    title: 'Bhagavad Gita Bhashya',
    description: 'Completed commentary on Bhagavad Gita, harmonizing karma, bhakti, and jnana paths.',
    location: 'Kashi',
    category: 'writing'
  },
  {
    year: '807 CE',
    age: '19',
    title: 'Upanishad Commentaries Begin',
    description: 'Began writing commentaries on principal Upanishads including Isha, Kena, Katha, Prashna, Mundaka, Mandukya.',
    location: 'Kashi',
    significance: 'These commentaries remain authoritative interpretations',
    category: 'writing'
  },
  {
    year: '808 CE',
    age: '20',
    title: 'Journey to Kashmir',
    description: 'Traveled to Kashmir, the land of Sharada (Saraswati), to gain ultimate scholarly authority.',
    location: 'Kashmir',
    significance: 'Sought blessings of Goddess Sharada at Sharada Peetha',
    category: 'travel'
  },
  {
    year: '809 CE',
    age: '21',
    title: 'Debates in Kashmir',
    description: 'Engaged in numerous debates with Buddhist and other schools in Kashmir. Gained recognition as Sarvajna (all-knowing).',
    location: 'Kashmir',
    category: 'debate'
  },
  {
    year: '810 CE',
    age: '22',
    title: 'Establishment of Sringeri Matha',
    description: 'Established first matha at Sringeri in Karnataka (South). Appointed Sureshwaracharya as head.',
    location: 'Sringeri, Karnataka',
    significance: 'First of four cardinal mathas; associated with Yajur Veda and "Aham Brahmasmi"',
    category: 'establishment'
  },
  {
    year: '811 CE',
    age: '23',
    title: 'Travels in South India',
    description: 'Extensive travels through Tamil Nadu, Kerala, Andhra Pradesh. Composed many devotional hymns.',
    location: 'South India',
    category: 'travel'
  },
  {
    year: '812 CE',
    age: '24',
    title: 'Mother\'s Passing',
    description: 'Returned to Kaladi for mother Aryamba\'s final days. Performed her last rites despite sannyasi tradition.',
    location: 'Kaladi, Kerala',
    significance: 'Demonstrated compassion over rigid orthodoxy',
    category: 'teaching'
  },
  {
    year: '813 CE',
    age: '25',
    title: 'Establishment of Puri Matha',
    description: 'Established Govardhan Matha at Puri in Odisha (East). Appointed Padmapadacharya as head.',
    location: 'Puri, Odisha',
    significance: 'Associated with Rig Veda and "Prajnanam Brahma"',
    category: 'establishment'
  },
  {
    year: '814 CE',
    age: '26',
    title: 'Journey to Western India',
    description: 'Traveled to Gujarat and western regions. Visited sacred sites and engaged in philosophical discussions.',
    location: 'Gujarat and Western India',
    category: 'travel'
  },
  {
    year: '815 CE',
    age: '27',
    title: 'Establishment of Dwarka Matha',
    description: 'Established Sharada Matha at Dwarka in Gujarat (West). Appointed Hastamalaka as head.',
    location: 'Dwarka, Gujarat',
    significance: 'Associated with Sama Veda and "Tat Tvam Asi"',
    category: 'establishment'
  },
  {
    year: '816 CE',
    age: '28',
    title: 'Northern Campaign',
    description: 'Began extensive travels through Northern India, visiting holy sites and establishing Advaita teachings.',
    location: 'Northern India',
    category: 'travel'
  },
  {
    year: '817 CE',
    age: '29',
    title: 'Debates at Prayag',
    description: 'Major philosophical victories at Prayag (Allahabad), defeating scholars of various schools.',
    location: 'Prayag (Allahabad)',
    category: 'debate'
  },
  {
    year: '818 CE',
    age: '30',
    title: 'Establishment of Jyotir Math',
    description: 'Established Jyotir Math at Joshimath in Uttarakhand (North). Appointed Totakacharya as head.',
    location: 'Joshimath, Uttarakhand',
    significance: 'Associated with Atharva Veda and "Ayam Atma Brahma"; completed the four cardinal mathas',
    category: 'establishment'
  },
  {
    year: '819 CE',
    age: '31',
    title: 'Pilgrimage to Badrinath',
    description: 'Undertook pilgrimage to Badrinath temple. Composed devotional hymns and taught disciples.',
    location: 'Badrinath, Uttarakhand',
    category: 'travel'
  },
  {
    year: '820 CE',
    age: '32',
    title: 'Samadhi at Kedarnath',
    description: 'Attained Mahasamadhi (final liberation) at Kedarnath in the Himalayas, completing his earthly mission.',
    location: 'Kedarnath, Uttarakhand',
    significance: 'End of physical form; his teachings and mathas continue to guide millions',
    category: 'samadhi'
  }
]

// Major Travel Locations
export const travelLocations: TravelLocation[] = [
  {
    id: 'kaladi',
    name: 'Kaladi',
    state: 'Kerala',
    coordinates: { lat: 10.1661, lng: 76.5231 },
    visitYear: '788-799, 812',
    purpose: 'Birthplace and childhood home',
    significance: 'Sacred birthplace where his mother\'s temple now stands',
    events: [
      'Born here in 788 CE',
      'Received early Vedic education',
      'Obtained permission for sannyasa through crocodile incident',
      'Returned in 812 CE for mother\'s final rites'
    ]
  },
  {
    id: 'omkareshwar',
    name: 'Omkareshwar',
    state: 'Madhya Pradesh',
    coordinates: { lat: 22.2396, lng: 75.1797 },
    visitYear: '800-802',
    purpose: 'Discipleship under Govinda Bhagavatpada',
    significance: 'Where he received initiation and training in Advaita Vedanta',
    events: [
      'Met guru Govinda Bhagavatpada',
      'Completed advanced Vedantic studies',
      'Received instruction to write commentaries on Prasthana Trayi'
    ]
  },
  {
    id: 'kashi',
    name: 'Kashi (Varanasi)',
    state: 'Uttar Pradesh',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    visitYear: '803-807',
    purpose: 'Center for writing major commentaries',
    significance: 'Holiest city where he composed his most important works',
    events: [
      'Encounter with Lord Shiva as Chandala',
      'Composed Manisha Panchakam',
      'Wrote Brahma Sutra Bhashya',
      'Wrote Bhagavad Gita Bhashya',
      'Began Upanishad commentaries'
    ]
  },
  {
    id: 'sringeri',
    name: 'Sringeri',
    state: 'Karnataka',
    coordinates: { lat: 13.4167, lng: 75.2500 },
    visitYear: '810',
    purpose: 'Establishment of first matha',
    significance: 'First of four cardinal mathas, still thriving after 1200 years',
    events: [
      'Established Sringeri Sharada Peetham',
      'Appointed Sureshwaracharya as first head',
      'Associated with Yajur Veda',
      'Mahavakya: "Aham Brahmasmi" (I am Brahman)'
    ]
  },
  {
    id: 'puri',
    name: 'Puri',
    state: 'Odisha',
    coordinates: { lat: 19.8135, lng: 85.8312 },
    visitYear: '813',
    purpose: 'Establishment of eastern matha',
    significance: 'Govardhan Matha at the sacred Jagannath temple city',
    events: [
      'Established Govardhan Peetham',
      'Appointed Padmapadacharya as head',
      'Associated with Rig Veda',
      'Mahavakya: "Prajnanam Brahma" (Consciousness is Brahman)'
    ]
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    state: 'Gujarat',
    coordinates: { lat: 22.2394, lng: 68.9678 },
    visitYear: '815',
    purpose: 'Establishment of western matha',
    significance: 'Sharada Matha at Lord Krishna\'s legendary capital',
    events: [
      'Established Sharada Peetham',
      'Appointed Hastamalaka as head',
      'Associated with Sama Veda',
      'Mahavakya: "Tat Tvam Asi" (That Thou Art)'
    ]
  },
  {
    id: 'joshimath',
    name: 'Joshimath (Jyotir Math)',
    state: 'Uttarakhand',
    coordinates: { lat: 30.5565, lng: 79.5645 },
    visitYear: '818',
    purpose: 'Establishment of northern matha',
    significance: 'Final matha, gateway to Badrinath',
    events: [
      'Established Jyotir Peetham',
      'Appointed Totakacharya as head',
      'Associated with Atharva Veda',
      'Mahavakya: "Ayam Atma Brahma" (This Self is Brahman)'
    ]
  },
  {
    id: 'kashmir',
    name: 'Kashmir (Sharada Peetha)',
    state: 'Jammu & Kashmir',
    coordinates: { lat: 34.5260, lng: 74.8350 },
    visitYear: '808-809',
    purpose: 'Seek blessings of Goddess Sharada',
    significance: 'Ancient seat of learning and debates',
    events: [
      'Visited Sharada Peetha temple',
      'Engaged in debates with Buddhist scholars',
      'Gained recognition as Sarvajna (all-knowing)',
      'Received scholarly authority from Goddess Sharada'
    ]
  },
  {
    id: 'badrinath',
    name: 'Badrinath',
    state: 'Uttarakhand',
    coordinates: { lat: 30.7433, lng: 79.4938 },
    visitYear: '819',
    purpose: 'Pilgrimage and final teachings',
    significance: 'Sacred Vishnu temple in the Himalayas',
    events: [
      'Renovated and revived the Badrinath temple',
      'Composed devotional hymns',
      'Gave final teachings to disciples'
    ]
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    state: 'Uttarakhand',
    coordinates: { lat: 30.7346, lng: 79.0669 },
    visitYear: '820',
    purpose: 'Final samadhi (liberation)',
    significance: 'Place of Mahasamadhi at age 32',
    events: [
      'Attained Mahasamadhi in 820 CE',
      'Samadhi shrine behind Kedarnath temple',
      'Completed his divine mission on earth'
    ]
  }
]

// Famous Debates and Encounters
export const debates: Debate[] = [
  {
    id: 'mandana-mishra',
    opponent: 'Mandana Mishra',
    opponentSchool: 'Purva Mimamsa (Ritualism)',
    location: 'Mahishmati (near Omkareshwar)',
    year: '805 CE',
    topic: 'Superiority of Knowledge (Jnana) vs. Ritual Action (Karma)',
    outcome: 'Shankaracharya emerged victorious after multi-day debate. Mandana Mishra accepted Advaita and became disciple Sureshwaracharya.',
    significance: 'Most famous debate that established supremacy of Jnana over Karma. Mandana\'s wife Bharati (incarnation of Saraswati) served as impartial judge.',
    relatedTexts: ['Brahma Sutras', 'Bhagavad Gita']
  },
  {
    id: 'buddhist-kashmir',
    opponent: 'Buddhist Scholars of Kashmir',
    opponentSchool: 'Madhyamaka and Yogachara Buddhism',
    location: 'Kashmir',
    year: '808-809 CE',
    topic: 'Reality of Atman vs. Buddhist Anatman (No-Self)',
    outcome: 'Defeated multiple Buddhist scholars, establishing the reality of Atman (Self) against Buddhist no-self doctrine.',
    significance: 'Critical in reviving Vedantic philosophy against dominant Buddhist schools of the time.',
    relatedTexts: ['Upanishads', 'Brahma Sutras']
  },
  {
    id: 'bharati-ubhaya',
    opponent: 'Ubhaya Bharati (wife of Mandana Mishra)',
    opponentSchool: 'Mimamsa',
    location: 'Mahishmati',
    year: '805 CE',
    topic: 'Kama Shastra (Science of Desire) and Complete Knowledge',
    outcome: 'Shankaracharya requested time to study this aspect of knowledge. Through yogic powers, briefly entered the body of King Amaruka. Bharati conceded and accepted Advaita.',
    significance: 'Demonstrated that even knowledge of worldly matters doesn\'t contradict supreme realization. Bharati became follower of Advaita.',
    relatedTexts: ['Vivekachudamani']
  },
  {
    id: 'kumarila-bhatta',
    opponent: 'Kumarila Bhatta',
    opponentSchool: 'Purva Mimamsa',
    location: 'Prayag (Allahabad)',
    year: '804 CE',
    topic: 'Vedic Authority and Path to Liberation',
    outcome: 'Kumarila, already convinced of supremacy of knowledge, directed Shankaracharya to his disciple Mandana Mishra for debate.',
    significance: 'Kumarila was performing prayaschitta (atonement) for having pretended to be Buddhist to learn their philosophy. His acceptance of Advaita\'s supremacy was significant.',
    relatedTexts: ['Vedas', 'Mimamsa Sutras']
  },
  {
    id: 'chandala-shiva',
    opponent: 'Lord Shiva (as Chandala)',
    opponentSchool: 'Divine Teaching',
    location: 'Kashi (Varanasi)',
    year: '803 CE',
    topic: 'True Nature of Non-Duality',
    outcome: 'Shankaracharya initially asked the Chandala (untouchable) to move away. The Chandala questioned: "Which should move - the body or the Atman? Both are Brahman!" Shankaracharya recognized Lord Shiva and composed Manisha Panchakam.',
    significance: 'Profound lesson in practical non-duality. Taught that true Advaita must transcend social distinctions.',
    relatedTexts: ['Manisha Panchakam']
  },
  {
    id: 'abhinava-gupta',
    opponent: 'Kashmir Shaiva Scholars',
    opponentSchool: 'Kashmir Shaivism',
    location: 'Kashmir',
    year: '808 CE',
    topic: 'Nature of Consciousness and Reality',
    outcome: 'Engaged in sophisticated debates about the nature of Shiva-Shakti and consciousness. While respecting Shaiva philosophy, established Advaita\'s non-dual interpretation.',
    significance: 'Showed compatibility between Shaiva devotion and Advaita philosophy.',
    relatedTexts: ['Soundarya Lahari', 'Shiva Bhujangam']
  }
]

// Stories and Parables from Shankaracharya's Life
export const stories: Story[] = [
  {
    id: 'crocodile-incident',
    title: 'The Crocodile Incident - Permission for Sannyasa',
    category: 'miracle',
    summary: 'Young Shankaracharya obtains his mother\'s permission for renunciation through a dramatic encounter with a crocodile.',
    fullStory: 'When young Shankara was 8 years old, he desperately wanted to take sannyasa (renunciation) and seek the ultimate truth. His widowed mother Aryamba refused, unwilling to lose her only son. One day while bathing in the Poorna river, a crocodile caught Shankara\'s leg and began pulling him underwater. He cried out to his mother on the bank: "Mother! A crocodile has caught me! I am about to die! Please give me permission to take sannyasa in these final moments so I may die as a renunciate!" Terrified and helpless, Aryamba gave her permission. Immediately, the crocodile released him. Shankara emerged unharmed, touched his mother\'s feet, and reminded her: "Mother, you have given your word. A Brahmin\'s word is sacred." Though heartbroken, Aryamba honored her promise. Shankara promised to return for her final rites, which he faithfully did years later.',
    moralLesson: 'Total commitment to the spiritual path requires sacrifice and determination. The incident also shows the power of a mother\'s love and the importance of keeping one\'s word.',
    relatedConcepts: ['vairagya', 'moksha']
  },
  {
    id: 'manisha-panchakam',
    title: 'Encounter with Shiva as Chandala',
    category: 'teaching',
    summary: 'Lord Shiva appears as an untouchable to teach Shankaracharya about true non-duality.',
    fullStory: 'After completing his studies in Kashi, young Shankaracharya was walking to the Ganges for his morning bath. A Chandala (untouchable) with four dogs approached from the opposite direction. Following orthodox custom, Shankaracharya asked him to move aside. The Chandala smiled and asked: "O great teacher of non-duality! What should move aside? Is it the body made of the same five elements? Or is it the eternal Atman, which is one in all? If all is Brahman, where is high and low?" Stunned by this wisdom from an unexpected source, Shankaracharya fell at the Chandala\'s feet. The Chandala revealed himself as Lord Shiva with Goddess Parvati and the four Vedas (appearing as dogs). Shankaracharya immediately composed the Manisha Panchakam (Five Verses on Understanding), declaring that true Brahman-knowledge transcends all caste and social distinctions. He who has realized the Self is his guru, whether he be a Chandala or a Brahmin.',
    moralLesson: 'True Advaita must be lived, not just intellectually understood. The Supreme Reality dwells equally in all beings, beyond all social distinctions.',
    relatedConcepts: ['brahman', 'atman', 'jnana-yoga']
  },
  {
    id: 'totakashtakam',
    title: 'Totakacharya\'s Spontaneous Hymn',
    category: 'teaching',
    summary: 'A seemingly slow student demonstrates the power of guru bhakti by composing brilliant verses spontaneously.',
    fullStory: 'Totaka was one of Shankaracharya\'s disciples, known for his simple nature and total devotion to the guru, though he seemed intellectually slower than the other brilliant students like Padmapada and Sureshwara. One day, Shankaracharya waited to begin a class, saying he was waiting for one more student. The other disciples murmured that surely the great teacher shouldn\'t wait for the slow Totaka. Just then, Totaka arrived, soaking wet from washing his guru\'s clothes in the river. As he entered, he spontaneously composed eight perfect verses in the complex Totaka meter, praising the guru and expounding profound Vedantic truths. Everyone was stunned. Shankaracharya smiled and said: "True knowledge comes not from intellectual cleverness but from purity of heart and devotion to the guru. Totaka\'s devotion has earned him direct knowledge from the Supreme." Totaka later became the head of Jyotir Math in the North.',
    moralLesson: 'Intellectual brilliance alone doesn\'t grant Self-knowledge. Purity, devotion, and humility open the door to direct realization.',
    relatedConcepts: ['bhakti-yoga', 'jnana-yoga']
  },
  {
    id: 'mother-last-rites',
    title: 'Performing Mother\'s Last Rites',
    category: 'compassion',
    summary: 'Shankaracharya breaks sannyasi tradition to honor his promise to his mother.',
    fullStory: 'When Aryamba was on her deathbed in Kaladi, Shankaracharya received mystical knowledge of this and immediately traveled from afar to reach her. As he had promised years earlier, he came to be with her in her final moments. He taught her the essence of Advaita Vedanta, and she attained realization before her death. According to tradition, a sannyasi who has renounced everything should not perform funeral rites for relatives. However, Shankaracharya had promised his mother he would do so. The local Brahmins refused to help with the cremation, citing tradition. Undeterred, Shankaracharya himself carried his mother\'s body, created the funeral pyre, and performed all the last rites single-handedly. He explained that compassion and fulfilling one\'s word are higher than rigid orthodoxy. The place in Kaladi where he performed her cremation is still revered today.',
    moralLesson: 'Compassion and truth transcend rigid rules. True dharma sometimes requires breaking conventional traditions.',
    relatedConcepts: ['karma-yoga', 'dharma']
  },
  {
    id: 'scorpion-compassion',
    title: 'The Scorpion and the Saint',
    category: 'compassion',
    summary: 'Shankaracharya demonstrates that the wise remain true to their nature even when harmed.',
    fullStory: 'Once while bathing in a river, Shankaracharya saw a scorpion struggling in the water, about to drown. He scooped it up with his hand to place it safely on the bank. The scorpion, frightened, stung his hand. Shankaracharya felt the pain but gently placed the scorpion on dry ground. A moment later, the scorpion fell back into the water. Again, Shankaracharya reached out to save it, and again it stung him. This happened several times. A disciple watching nearby said, "Master, why do you keep saving this creature when it keeps stinging you?" Shankaracharya smiled and replied, "It is the nature of the scorpion to sting; it is my nature to save. Should I abandon my dharma because the scorpion follows its nature? The wise remain true to their essential nature regardless of circumstances."',
    moralLesson: 'The enlightened being remains established in their true nature of compassion and wisdom, undisturbed by the actions of others.',
    relatedConcepts: ['atman', 'karma-yoga', 'compassion']
  },
  {
    id: 'guru-arrival',
    title: 'Meeting Guru Govinda Bhagavatpada',
    category: 'devotion',
    summary: 'The prophesied meeting between guru and disciple that would change the philosophical landscape of India.',
    fullStory: 'Govinda Bhagavatpada, the great Advaita master and disciple of Gaudapada, lived in a cave at Omkareshwar, deep in meditation. When young Shankara arrived seeking a guru, Govinda Bhagavatpada was in samadhi. Shankara waited patiently outside the cave for days without food or water. When Govinda finally emerged from his meditation, he asked, "Who are you?" Shankara replied with a spontaneous hymn that became famous, describing the nature of the Self: "I am not the mind, intellect, ego, or memory... I am Shiva, I am Shiva, the eternal pure consciousness and bliss." Govinda immediately recognized that his own guru Gaudapada\'s prophecy was fulfilled - the one who would systematize and spread Advaita Vedanta had arrived. He accepted Shankara as his disciple and gave him the knowledge of Brahman. After completing his education, Govinda instructed Shankara: "Go forth and write commentaries on the Prasthana Trayi (Upanishads, Brahma Sutras, Bhagavad Gita). You are the one chosen to revive the eternal dharma."',
    moralLesson: 'When the disciple is ready, the guru appears. True discipleship requires patience, humility, and recognition of one\'s essential nature.',
    relatedConcepts: ['atman', 'brahman', 'guru-shishya-parampara']
  },
  {
    id: 'vedic-umbrella',
    title: 'Padmapada Walks on Water',
    category: 'miracle',
    summary: 'Devotion to the guru grants miraculous powers to Padmapada.',
    fullStory: 'Padmapada (originally named Sanandana) was one of Shankaracharya\'s first and most devoted disciples. One day, Shankaracharya was sitting on the far bank of a flooding river, about to begin teaching. Padmapada was on the other side, unable to cross due to the dangerous currents. Seeing his guru about to teach, and unable to bear missing even a moment of the precious discourse, Padmapada stepped onto the water to cross. His intense devotion and focus on his guru was so complete that lotuses (padmas) appeared beneath each footstep, allowing him to walk across. When he reached the other side, Shankaracharya blessed him and gave him the name "Padmapada" (lotus-footed). Padmapada later became the head of the Govardhan Matha at Puri.',
    moralLesson: 'Unwavering devotion and single-pointed focus on the truth can accomplish the seemingly impossible. Faith transcends physical limitations.',
    relatedConcepts: ['bhakti-yoga', 'shraddha']
  },
  {
    id: 'hastamalaka-recognition',
    title: 'Hastamalaka - The Boy Who Knew the Self',
    category: 'wisdom',
    summary: 'A young boy demonstrates perfect Self-knowledge, though unable to function in ordinary life.',
    fullStory: 'While traveling through Maharashtra, Shankaracharya met a Brahmin named Prabhakara whose young son appeared to be intellectually disabled. The boy didn\'t respond to questions, seemed unable to learn, and was considered a burden to the family. When Shankaracharya asked the boy, "Who are you? What is your name?" the boy replied with perfect verses of Advaita wisdom: "I am neither born nor do I die. I have no body, no mind, no senses. I am the eternal witnessing consciousness, pure and unchanging like the space. I am that by which everything is known but which cannot be known as an object." Shankaracharya immediately recognized that this boy was actually a perfected soul (siddha purusha) established in Brahman from birth. He asked the father\'s permission to take the boy as his disciple. The boy came to be called "Hastamalaka" because he perceived the Self as clearly as an amalaka fruit in one\'s palm (hasta). Hastamalaka became one of the four principal disciples and was appointed head of the Sharada Matha at Dwarka.',
    moralLesson: 'Perfect Self-knowledge can exist even without conventional learning. The appearance of limitation doesn\'t indicate spiritual limitation.',
    relatedConcepts: ['atman', 'brahman', 'jnana']
  },
  {
    id: 'four-mathas',
    title: 'Establishment of Four Cardinal Mathas',
    category: 'wisdom',
    summary: 'Strategic establishment of spiritual centers to preserve and spread Advaita Vedanta.',
    fullStory: 'Shankaracharya recognized that philosophical wisdom needed institutional support to survive and flourish across generations. He traveled to the four corners of India and established four mathas (monasteries) in the cardinal directions: Sringeri in the South, Puri in the East, Dwarka in the West, and Jyotir Math in the North. Each matha was associated with one of the four Vedas and one of the four Mahavakyas (great statements) from the Upanishads. He appointed his four principal disciples - Sureshwaracharya, Padmapadacharya, Hastamalakacharya, and Totakacharya - as the heads of these mathas. This brilliant organizational structure has preserved Advaita Vedanta for over 1,200 years. The mathas served as centers of learning, spiritual practice, and social welfare, ensuring that both the philosophical and practical aspects of Vedanta would endure. Each matha maintained a lineage of Shankaracharyas, creating an unbroken chain of teachers continuing to this day.',
    moralLesson: 'Spiritual wisdom needs both realization and organization. The combination of profound philosophy and practical structure ensures the teaching endures.',
    relatedConcepts: ['vedanta', 'guru-shishya-parampara']
  },
  {
    id: 'sarada-darshan',
    title: 'Vision of Goddess Sharada',
    category: 'devotion',
    summary: 'Shankaracharya receives ultimate scholarly authority from Goddess Saraswati.',
    fullStory: 'To establish his authority as a universal teacher, Shankaracharya traveled to Kashmir, considered the seat of learning and home to the temple of Goddess Sharada (Saraswati), the deity of knowledge. According to tradition, only those blessed by Sharada could claim the title of "Sarvajna" (all-knowing). When Shankaracharya reached the temple, the doors were locked and said to open only for the truly worthy. As he stood before the locked gates in meditation, the doors miraculously opened. Inside, he had a divine vision of Goddess Sharada seated on her throne. She tested his knowledge through questions spanning all the scriptures and sciences. Satisfied with his perfect answers, she granted him the title Sarvajna and blessed his mission to revive Advaita Vedanta. She presented him with the Srichakra (a mystical diagram) and authorized him to write commentaries with her blessings. This divine sanction gave Shankaracharya\'s interpretations unquestionable authority.',
    moralLesson: 'True knowledge is ultimately a blessing from the Divine. Intellectual achievement combined with divine grace creates lasting impact.',
    relatedConcepts: ['vidya', 'devotion', 'grace']
  }
]
