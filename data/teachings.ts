export interface Teaching {
    id: string;
    title: string;
    sanskritTitle: string;
    category: 'Prakarana Granthas' | 'Stotras' | 'Bhashyas';
    description: string;
    versesCount?: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    slug: string;
}

export const TEACHINGS: Teaching[] = [
    {
        id: 'tg-1',
        title: 'Bhaja Govindam',
        sanskritTitle: 'भज गोविन्दम्',
        category: 'Stotras',
        description: 'Also known as Moha Mudgara (Hammer of Delusion). A famous composition emphasizing devotion (Bhakti) as a means to realization, and the futility of worldly pursuits.',
        versesCount: 31,
        difficulty: 'Beginner',
        slug: 'bhaja-govindam'
    },
    {
        id: 'tg-2',
        title: 'Atma Bodha',
        sanskritTitle: 'आत्मबोधः',
        category: 'Prakarana Granthas',
        description: 'Self-Knowledge. A text consisting of 68 verses that describes the path to Self-realization using various analogies to explain the nature of the Self (Atman).',
        versesCount: 68,
        difficulty: 'Beginner',
        slug: 'atma-bodha'
    },
    {
        id: 'tg-3',
        title: 'Tattva Bodha',
        sanskritTitle: 'तत्त्वबोधः',
        category: 'Prakarana Granthas',
        description: 'Knowledge of Truth. An introductory text in prose form that defines all the key terminologies of Vedanta (e.g., three bodies, five sheaths, three states).',
        difficulty: 'Beginner',
        slug: 'tattva-bodha'
    },
    {
        id: 'tg-4',
        title: 'Vivekachudamani',
        sanskritTitle: 'विवेकचूडामणि',
        category: 'Prakarana Granthas',
        description: 'The Crest-Jewel of Discrimination. A massive masterpiece of 580 verses in the form of a dialogue between a master and a disciple, covering the entire range of Advaita philosophy.',
        versesCount: 580,
        difficulty: 'Advanced',
        slug: 'vivekachudamani'
    },
    {
        id: 'tg-5',
        title: 'Nirvana Shatakam',
        sanskritTitle: 'निर्वाणषट्कम्',
        category: 'Stotras',
        description: 'Six verses on Liberation. A powerful chant where the author negates all false identifications (Neti Neti) to assert "I am Shiva, the form of Consciousness and Bliss".',
        versesCount: 6,
        difficulty: 'Intermediate',
        slug: 'nirvana-shatakam'
    },
    {
        id: 'tg-6',
        title: 'Upadesha Sahasri',
        sanskritTitle: 'उपदेशसाहस्री',
        category: 'Prakarana Granthas',
        description: 'A Thousand Teachings. One of the detailed independent works of Shankara, divided into prose and poetry sections, analyzing the "I"-thought and the method of self-inquiry.',
        difficulty: 'Advanced',
        slug: 'upadesha-sahasri'
    },
    {
        id: 'tg-7',
        title: 'Brahma Sutra Bhashya',
        sanskritTitle: 'ब्रह्मसूत्रभाष्यम्',
        category: 'Bhashyas',
        description: 'Shankara\'s commentary on the Brahma Sutras of Badarayana. This is considered his magnum opus and the definitive text establishing Advaita Vedanta against other schools.',
        difficulty: 'Advanced',
        slug: 'brahma-sutra-bhashya'
    },
    {
        id: 'tg-8',
        title: 'Soundarya Lahari',
        sanskritTitle: 'सौन्दर्यलहरी',
        category: 'Stotras',
        description: 'The Wave of Beauty. A devotional hymn dedicated to Goddess Lalita Tripurasundari, combining high poetry with Mantra Shastra and Tantra.',
        versesCount: 100,
        difficulty: 'Intermediate',
        slug: 'soundarya-lahari'
    },
    {
        id: 'tg-9',
        title: 'Maneesha Panchakam',
        sanskritTitle: 'मनीषापञ्चकम्',
        category: 'Stotras',
        description: 'Five verses of Conviction. Legend says Shankara composed these after meeting a Chandala in Kashi, realizing that the same Self shines in all beings regardless of caste.',
        versesCount: 5,
        difficulty: 'Intermediate',
        slug: 'maneesha-panchakam'
    },
    {
        id: 'tg-10',
        title: 'Drg-Drishya Viveka',
        sanskritTitle: 'दृग्दृश्यविवेक',
        category: 'Prakarana Granthas',
        description: 'Discrimination between the Seer and the Seen. 46 verses analyzing the distinction between the subject (Consciousness) and the object.',
        versesCount: 46,
        difficulty: 'Intermediate',
        slug: 'drg-drishya-viveka'
    }
];
