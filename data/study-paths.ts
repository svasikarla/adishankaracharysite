export interface StudyModule {
    title: string;
    description: string;
    duration: string;
    link?: string;
}

export interface StudyPath {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    estimatedTime: string;
    modules: StudyModule[];
    iconName: 'Compass' | 'Book' | 'Mountain';
}

export const STUDY_PATHS: StudyPath[] = [
    {
        id: 'path-1',
        title: 'Foundations of Advaita',
        description: 'A gentle introduction to non-dual philosophy through life stories and basic definitions.',
        level: 'Beginner',
        estimatedTime: '4 Weeks',
        iconName: 'Compass',
        modules: [
            {
                title: 'Life of Shankara',
                description: 'Understanding the historical context and major events.',
                duration: '1 Week',
                link: '/biography'
            },
            {
                title: 'Tattva Bodha Basics',
                description: 'Learning the terminology: 3 bodies, 5 sheaths, 3 states.',
                duration: '2 Weeks',
                link: '/teachings'
            },
            {
                title: 'Bhaja Govindam',
                description: 'Cultivating the right attitude of devotion and detachment.',
                duration: '1 Week',
                link: '/teachings'
            }
        ]
    },
    {
        id: 'path-2',
        title: 'Scriptural Study',
        description: 'Systematic study of Prakarana Granthas to deepen self-knowledge.',
        level: 'Intermediate',
        estimatedTime: '3 Months',
        iconName: 'Book',
        modules: [
            {
                title: 'Atma Bodha',
                description: 'Verse-by-verse study of Self-Knowledge.',
                duration: '4 Weeks',
                link: '/teachings'
            },
            {
                title: 'Drg-Drishya Viveka',
                description: 'Distinguishing the Seer from the Seen.',
                duration: '4 Weeks',
                link: '/teachings'
            },
            {
                title: 'Sadhana Panchakam',
                description: 'Imbibing the 40 instructions for spiritual discipline.',
                duration: '4 Weeks'
            }
        ]
    },
    {
        id: 'path-3',
        title: 'Advanced Contemplation',
        description: 'Nididhyasana (contemplation) on the Mahavakyas and subtler texts.',
        level: 'Advanced',
        estimatedTime: '6 Months+',
        iconName: 'Mountain',
        modules: [
            {
                title: 'Vivekachudamani',
                description: 'Detailed analysis of the subtle body and nature of the Self.',
                duration: '12 Weeks',
                link: '/teachings'
            },
            {
                title: 'Mandukya Karika',
                description: 'Analysis of the three states of consciousness (Avastha Traya).',
                duration: '8 Weeks'
            },
            {
                title: 'Brahma Sutra Reflection',
                description: 'Understanding the logic establishing Advaita.',
                duration: 'Ongoing'
            }
        ]
    }
];
