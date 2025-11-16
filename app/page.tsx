import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenIcon, GraduationCapIcon, LibraryIcon, SparklesIcon, Users2Icon, Building2Icon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
                Eternal Wisdom for the Modern Seeker
              </h1>
              <p className="text-lg md:text-xl mb-8 text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                Explore the profound teachings of Adi Shankaracharya and discover the timeless philosophy of Advaita Vedanta through authentic texts, scholarly resources, and guided study paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/biography">
                  <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white px-8 py-6 text-lg">
                    Discover His Life
                  </Button>
                </Link>
                <Link href="/teachings">
                  <Button variant="outline" className="border-[#e07c24] text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e] px-8 py-6 text-lg">
                    Explore Teachings
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/shankaracharya-meditation.png"
                  alt="Adi Shankaracharya Meditating"
                  width={600}
                  height={400}
                  className="mx-auto rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-radial from-[#e07c24]/20 to-transparent rounded-lg blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-[#e9e1d3]/30 dark:bg-[#2a241e]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                <div className="text-sm md:text-base text-[#5a4a3f] dark:text-[#d9c5a9]">{concept.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
              Comprehensive Knowledge Base
            </h2>
            <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] max-w-2xl mx-auto">
              Explore authentic teachings, scholarly resources, and guided study paths to deepen your understanding of Advaita Vedanta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sacred Texts",
                description: "Verse-by-verse study of Bhaja Govindam, Atma Bodha, and other authentic works with translations and commentary",
                icon: BookOpenIcon,
                href: "/teachings",
                color: "bg-orange-50 dark:bg-orange-950/20"
              },
              {
                title: "Philosophy & Concepts",
                description: "Deep dive into Atman, Brahman, Maya, Moksha, and other fundamental concepts with scholarly explanations",
                icon: SparklesIcon,
                href: "/philosophy",
                color: "bg-amber-50 dark:bg-amber-950/20"
              },
              {
                title: "The Four Mathas",
                description: "Explore the sacred monasteries established in the four cardinal directions of India",
                icon: Building2Icon,
                href: "/mathas",
                color: "bg-yellow-50 dark:bg-yellow-950/20"
              },
              {
                title: "Modern Teachers",
                description: "Learn from contemporary Vedanta scholars including Swami Paramarthananda and Swami Sarvapriyananda",
                icon: Users2Icon,
                href: "/teachers",
                color: "bg-orange-50 dark:bg-orange-950/20"
              },
              {
                title: "Digital Archives",
                description: "Access authentic translations, manuscripts, and scholarly resources from trusted institutions",
                icon: LibraryIcon,
                href: "/resources",
                color: "bg-amber-50 dark:bg-amber-950/20"
              },
              {
                title: "Study Paths",
                description: "Guided learning journeys for beginners, intermediate, and advanced seekers",
                icon: GraduationCapIcon,
                href: "/study-paths",
                color: "bg-yellow-50 dark:bg-yellow-950/20"
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-[#e07c24]" />
                    </div>
                    <CardTitle className="text-[#8b5d33] dark:text-[#e07c24] font-serif group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9]">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-[#e07c24] px-0">
                      Explore →
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Wisdom */}
      <section className="py-16 bg-[#e9e1d3]/50 dark:bg-[#2a241e]/50">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] rounded-lg p-8 md:p-12 text-center border border-[#e07c24]/20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
              Begin Your Journey
            </h2>
            <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-8 max-w-2xl mx-auto">
              Start with the biography of Adi Shankaracharya to understand his life and mission, then explore the teachings that have transformed millions of seekers for over 1200 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/biography">
                <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white px-8 py-6 text-lg">
                  Read Biography
                </Button>
              </Link>
              <Link href="/study-paths">
                <Button variant="outline" className="border-[#e07c24] text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e] px-8 py-6 text-lg">
                  View Study Paths
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
