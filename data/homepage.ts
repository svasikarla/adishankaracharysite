import {
    BookOpenIcon,
    GraduationCapIcon,
    LibraryIcon,
    SparklesIcon,
    Users2Icon,
    Building2Icon,
    PlayCircleIcon
} from "lucide-react"

export const CORE_CONCEPTS = [
    { name: "Atman", desc: "Individual Soul", link: "/philosophy/atman" },
    { name: "Brahman", desc: "Universal Consciousness", link: "/philosophy/brahman" },
    { name: "Maya", desc: "Cosmic Illusion", link: "/philosophy/maya" },
    { name: "Moksha", desc: "Liberation", link: "/philosophy/moksha" },
    { name: "Neti Neti", desc: "Not This, Not This", link: "/philosophy/neti-neti" },
]

export const FEATURES = [
    {
        title: "Sacred Texts",
        description: "Bhaja Govindam, Atma Bodha with verse-by-verse study",
        icon: BookOpenIcon,
        href: "/teachings",
        badge: "30+ Verses",
        color: "from-orange-500 to-orange-600"
    },
    {
        title: "Philosophy",
        description: "Deep dive into core Advaita Vedanta concepts",
        icon: SparklesIcon,
        href: "/philosophy",
        badge: "12 Concepts",
        color: "from-amber-500 to-amber-600"
    },
    {
        title: "Four Mathas",
        description: "Sacred monasteries in cardinal directions",
        icon: Building2Icon,
        href: "/mathas",
        badge: "Historical",
        color: "from-yellow-500 to-yellow-600"
    },
    {
        title: "Modern Teachers",
        description: "Contemporary Vedanta scholars",
        icon: Users2Icon,
        href: "/teachers",
        badge: "Live Sessions",
        color: "from-orange-500 to-orange-600"
    },
    {
        title: "Study Paths",
        description: "Guided journeys for all levels",
        icon: GraduationCapIcon,
        href: "/study-paths",
        badge: "Interactive",
        color: "from-amber-500 to-amber-600"
    },
    {
        title: "Chant Counter",
        description: "Track your mantra practice",
        icon: PlayCircleIcon,
        href: "/chant-counter",
        badge: "New",
        color: "from-yellow-500 to-yellow-600"
    },
]

export const JOURNEY_STEPS = [
    {
        step: "1",
        title: "Learn",
        description: "Start with Shankaracharya's life and basic concepts",
        link: "/biography",
        icon: BookOpenIcon
    },
    {
        step: "2",
        title: "Study",
        description: "Explore sacred texts with detailed commentary",
        link: "/teachings",
        icon: GraduationCapIcon
    },
    {
        step: "3",
        title: "Practice",
        description: "Advanced concepts and meditation practices",
        link: "/study-paths",
        icon: SparklesIcon
    }
]
