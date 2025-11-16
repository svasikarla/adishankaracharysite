import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookmarkIcon, PlayCircleIcon, BookOpenIcon } from "lucide-react"
import DarkModeToggle from "@/components/dark-mode-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3e9] dark:bg-[#1a1814] bg-[url('/temple-texture.png')] bg-repeat">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/om-symbol.jpg" alt="Om Symbol" width={40} height={40} className="text-[#e07c24]" />
          <h1 className="text-xl font-serif font-semibold text-[#8b5d33] dark:text-[#e07c24]">
            Wisdom of Adi Shankaracharya
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              {["Home", "About", "Teachings", "Concepts", "Tools"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#8b5d33] dark:text-[#e07c24] hover:text-[#e07c24] dark:hover:text-[#f7f3e9] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DarkModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-10 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <Image
              src="/shankaracharya-meditation.png"
              alt="Adi Shankaracharya Meditating"
              width={800}
              height={500}
              className="mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-radial from-[#e07c24]/30 to-transparent rounded-full blur-md"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
            Eternal Wisdom for the Modern Seeker
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-[#5a4a3f] dark:text-[#d9c5a9]">
            Discover the timeless teachings of Adi Shankaracharya and explore the profound philosophy of Advaita Vedanta
          </p>
          <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white px-8 py-6 rounded-md text-lg">
            Start Exploring
          </Button>
        </div>
        <div className="absolute inset-0 bg-[url('/temple-texture.png')] opacity-10 mix-blend-overlay"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#e9e1d3]/50 dark:bg-[#2a241e]/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative rounded-full overflow-hidden border-4 border-[#e07c24]/20 w-64 h-64 mx-auto">
                <Image
                  src="/shankaracharya-portrait.svg"
                  alt="Adi Shankaracharya Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
                About Adi Shankaracharya
              </h2>
              <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-4">
                Adi Shankaracharya (788-820 CE) was one of India's greatest philosophers and spiritual teachers. He
                consolidated the doctrine of Advaita Vedanta, a sub-school of Vedanta, which emphasizes non-dualism and
                the unity of Atman (individual soul) with Brahman (universal consciousness).
              </p>
              <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9]">
                Despite his short life of 32 years, Shankaracharya traveled across India, establishing four monastic
                institutions (mathas) and authoring numerous commentaries on ancient texts that continue to influence
                spiritual seekers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Teachings */}
      <section id="teachings" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2 text-center">
            Explore Teachings
          </h2>
          <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-8 text-center max-w-2xl mx-auto">
            Discover the profound wisdom in Shankaracharya's key texts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bhaja Govindam",
                description: "A devotional hymn that emphasizes the importance of seeking God",
                verse: "भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते",
                explanation:
                  "Worship Govinda, worship Govinda, worship Govinda, O fool! Rules of grammar will not save you at the time of death.",
              },
              {
                title: "Vivekachudamani",
                description: "The Crest Jewel of Discrimination",
                verse: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः",
                explanation:
                  "Brahman is real, the world is unreal, and the individual self is non-different from Brahman.",
              },
              {
                title: "Atma Bodha",
                description: "Self-Knowledge",
                verse: "तपोभिः क्षीणपापानां शान्तानां वीतरागिणाम्",
                explanation:
                  "I compose the ATMA-BODHA, this treatise of the Knowledge of the Self, for those who have purified themselves by austerities.",
              },
            ].map((teaching, index) => (
              <Card key={index} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
                <CardHeader>
                  <CardTitle className="text-[#8b5d33] dark:text-[#e07c24] font-serif">{teaching.title}</CardTitle>
                  <CardDescription>{teaching.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#f7f3e9] dark:bg-[#1a1814]/50 p-4 rounded-md mb-4">
                    <p className="font-sanskrit text-lg text-center mb-2">{teaching.verse}</p>
                  </div>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">{teaching.explanation}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#8b5d33] dark:text-[#e07c24] border-[#e07c24]/20"
                  >
                    <BookOpenIcon className="mr-2 h-4 w-4" />
                    Read More
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#8b5d33] dark:text-[#e07c24]">
                    <BookmarkIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Wisdom */}
      <section className="py-16 bg-[#e9e1d3]/50 dark:bg-[#2a241e]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2 text-center">
            Daily Wisdom
          </h2>
          <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-8 text-center max-w-2xl mx-auto">
            Contemplate on a verse from Shankaracharya's teachings
          </p>

          <div className="max-w-3xl mx-auto bg-white/80 dark:bg-[#2a241e]/80 rounded-lg p-6 border border-[#e07c24]/20">
            <div className="text-center mb-6">
              <p className="font-sanskrit text-2xl mb-2 text-[#8b5d33] dark:text-[#e07c24]">
                मनः एव मनुष्याणां कारणं बन्धमोक्षयोः
              </p>
              <p className="text-lg italic mb-4 text-[#5a4a3f] dark:text-[#d9c5a9]">
                manaḥ eva manuṣyāṇāṁ kāraṇaṁ bandhamokṣayoḥ
              </p>
              <div className="h-px w-24 bg-[#e07c24]/30 mx-auto mb-4"></div>
              <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9]">
                "The mind alone is the cause of bondage and liberation for human beings."
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 text-[#8b5d33] dark:text-[#e07c24] border-[#e07c24]/20"
              >
                <PlayCircleIcon className="h-5 w-5" />
                Listen to Chant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vedanta Concepts */}
      <section id="concepts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2 text-center">
            Vedanta Concepts
          </h2>
          <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-8 text-center max-w-2xl mx-auto">
            Explore the fundamental principles of Advaita Vedanta
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Atman", description: "Individual Soul" },
              { name: "Brahman", description: "Universal Consciousness" },
              { name: "Maya", description: "Cosmic Illusion" },
              { name: "Moksha", description: "Liberation" },
              { name: "Neti Neti", description: "Not This, Not This" },
            ].map((concept, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#e9e1d3] dark:bg-[#2a241e] flex items-center justify-center mb-4 border-2 border-[#e07c24]/20">
                  <Image src={`/concept-${concept.name.toLowerCase().split(' ')[0]}.jpg`} alt={concept.name} width={48} height={48} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-1">
                  {concept.name}
                </h3>
                <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Tools */}
      <section id="tools" className="py-16 bg-[#e9e1d3]/50 dark:bg-[#2a241e]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2 text-center">
            Spiritual Tools
          </h2>
          <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-8 text-center max-w-2xl mx-auto">
            Resources to deepen your understanding and practice
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "AI Q&A Assistant",
                description:
                  "Ask questions about Advaita Vedanta and receive insights based on Shankaracharya's teachings",
              },
              {
                title: "Study Paths",
                description: "Structured learning journeys for beginners, intermediate, and advanced seekers",
              },
              {
                title: "Chant Counter",
                description: "Digital tool to count mantras during meditation and japa practice",
              },
            ].map((tool, index) => (
              <Card key={index} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
                <CardHeader>
                  <CardTitle className="text-[#8b5d33] dark:text-[#e07c24] font-serif">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">{tool.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#e07c24] hover:bg-[#c06a1f] text-white">Access Tool</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#5a4a3f] dark:bg-[#1a1814] text-[#e9e1d3]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/om-symbol.jpg" alt="Om Symbol" width={32} height={32} className="text-[#e07c24]" />
              <h3 className="text-lg font-serif font-semibold text-[#e07c24]">Wisdom of Adi Shankaracharya</h3>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-6 justify-center">
                {["Home", "About", "Teachings", "Concepts", "Tools", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[#e9e1d3] hover:text-[#e07c24] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-center border-t border-[#e07c24]/20 pt-8">
            <p className="italic text-lg mb-4 max-w-2xl mx-auto">
              "The world is like a dream, empty and insubstantial. Realize this and be free."
            </p>
            <p className="text-sm text-[#e9e1d3]/70">
              © {new Date().getFullYear()} Wisdom of Adi Shankaracharya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

