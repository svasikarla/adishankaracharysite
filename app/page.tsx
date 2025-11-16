import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenIcon, GraduationCapIcon, LibraryIcon, SparklesIcon, Users2Icon, Building2Icon, ArrowRightIcon, QuoteIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#f7f3e9] via-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:via-[#2a241e] dark:to-[#1a1814]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#e07c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-[#e07c24]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e07c24]/10 dark:bg-[#e07c24]/20 border border-[#e07c24]/30 text-[#e07c24] text-sm font-medium mb-6">
                  <SparklesIcon className="w-4 h-4" />
                  Advaita Vedanta Philosophy
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] leading-tight">
                Discover the <span className="text-[#e07c24] dark:text-[#f7f3e9]">Eternal Wisdom</span> of Adi Shankaracharya
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Journey through 1200 years of profound teachings, explore the timeless philosophy of Advaita Vedanta, and discover the path to self-realization through authentic texts and guided study.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="/biography">
                  <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Discover His Life
                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/teachings">
                  <Button variant="outline" className="border-2 border-[#e07c24] text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#e07c24] hover:text-white dark:hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300">
                    Explore Teachings
                  </Button>
                </Link>
              </div>

              {/* Quick Stats Numbers */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e07c24]/20">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-[#e07c24]">1200+</div>
                  <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mt-1">Years of Wisdom</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-[#e07c24]">100+</div>
                  <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mt-1">Sacred Texts</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-[#e07c24]">4</div>
                  <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mt-1">Sacred Mathas</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#e07c24]/30 to-[#f7f3e9]/30 dark:from-[#e07c24]/20 dark:to-transparent rounded-2xl blur-2xl"></div>
                <Image
                  src="/shankaracharya-meditation.png"
                  alt="Adi Shankaracharya Meditating"
                  width={600}
                  height={600}
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts - Fixed Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
              Core Concepts of Advaita Vedanta
            </h2>
            <p className="text-lg md:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] max-w-3xl mx-auto">
              Explore the fundamental principles that form the foundation of non-dual philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                name: "Atman",
                description: "Individual Soul",
                detail: "The eternal self within each being, identical to Brahman"
              },
              {
                name: "Brahman",
                description: "Universal Consciousness",
                detail: "The ultimate reality, infinite and unchanging"
              },
              {
                name: "Maya",
                description: "Cosmic Illusion",
                detail: "The veil that obscures our true nature"
              },
              {
                name: "Moksha",
                description: "Liberation",
                detail: "Freedom from the cycle of birth and death"
              },
              {
                name: "Neti Neti",
                description: "Not This, Not This",
                detail: "The method of negation to realize the truth"
              },
            ].map((concept, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#2a241e] dark:to-[#1a1814] border border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-[#2a241e] flex items-center justify-center mb-4 border-2 border-[#e07c24]/30 group-hover:border-[#e07c24] group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Image
                    src={`/concept-${concept.name.toLowerCase().split(' ')[0]}.jpg`}
                    alt={concept.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  {concept.name}
                </h3>
                <p className="text-sm font-medium text-[#e07c24] mb-2">{concept.description}</p>
                <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {concept.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Wisdom Quote */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-serif text-white">"</div>
          <div className="absolute bottom-10 right-10 text-9xl font-serif text-white rotate-180">"</div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="w-12 h-12 md:w-16 md:h-16 text-white/80 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6 leading-relaxed">
              "Brahman is the only truth, the world is illusion, and there is ultimately no difference between Brahman and individual self."
            </blockquote>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              — Adi Shankaracharya
            </p>
            <p className="text-sm md:text-base text-white/70 mt-2 italic">
              The essence of Advaita Vedanta
            </p>
          </div>
        </div>
      </section>

      {/* Main Features - Enhanced */}
      <section className="py-16 md:py-24 bg-[#f7f3e9] dark:bg-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
              Comprehensive Knowledge Base
            </h2>
            <p className="text-lg md:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] max-w-3xl mx-auto">
              Explore authentic teachings, scholarly resources, and guided study paths to deepen your understanding of Advaita Vedanta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Sacred Texts",
                description: "Verse-by-verse study of Bhaja Govindam, Atma Bodha, and other authentic works with translations and commentary",
                icon: BookOpenIcon,
                href: "/teachings",
                gradient: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20"
              },
              {
                title: "Philosophy & Concepts",
                description: "Deep dive into Atman, Brahman, Maya, Moksha, and other fundamental concepts with scholarly explanations",
                icon: SparklesIcon,
                href: "/philosophy",
                gradient: "from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20"
              },
              {
                title: "The Four Mathas",
                description: "Explore the sacred monasteries established in the four cardinal directions of India",
                icon: Building2Icon,
                href: "/mathas",
                gradient: "from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20"
              },
              {
                title: "Modern Teachers",
                description: "Learn from contemporary Vedanta scholars including Swami Paramarthananda and Swami Sarvapriyananda",
                icon: Users2Icon,
                href: "/teachers",
                gradient: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20"
              },
              {
                title: "Digital Archives",
                description: "Access authentic translations, manuscripts, and scholarly resources from trusted institutions",
                icon: LibraryIcon,
                href: "/resources",
                gradient: "from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20"
              },
              {
                title: "Study Paths",
                description: "Guided learning journeys for beginners, intermediate, and advanced seekers",
                icon: GraduationCapIcon,
                href: "/study-paths",
                gradient: "from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20"
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href} className="group">
                <Card className="h-full bg-white dark:bg-[#2a241e] border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-[#e07c24]" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-[#8b5d33] dark:text-[#e07c24] font-serif group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-[#e07c24] px-0 group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Path Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#e9e1d3] via-[#f7f3e9] to-[#e9e1d3] dark:from-[#2a241e] dark:via-[#1a1814] dark:to-[#2a241e]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg md:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] max-w-3xl mx-auto">
              Follow a structured path from beginner to advanced understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Foundation",
                description: "Begin with the life story of Adi Shankaracharya and basic concepts of Advaita Vedanta",
                link: "/biography"
              },
              {
                step: "02",
                title: "Study Texts",
                description: "Explore sacred texts like Bhaja Govindam and Atma Bodha with detailed commentary",
                link: "/teachings"
              },
              {
                step: "03",
                title: "Deep Practice",
                description: "Advanced philosophical concepts and meditation practices for self-realization",
                link: "/study-paths"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#e07c24] to-transparent -translate-y-1/2"></div>
                )}
                <Link href={item.link}>
                  <div className="bg-white dark:bg-[#2a241e] rounded-2xl p-8 border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="text-5xl font-bold text-[#e07c24]/20 mb-4">{item.step}</div>
                    <h3 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Button variant="link" className="text-[#e07c24] px-0">
                      Start Here <ArrowRightIcon className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#e07c24] via-[#c06a1f] to-[#e07c24] dark:from-[#e07c24]/90 dark:via-[#c06a1f]/90 dark:to-[#e07c24]/90 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <Image src="/om-symbol.jpg" alt="Om Symbol" width={64} height={64} className="mx-auto opacity-90" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Begin Your Spiritual Journey Today
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Start with the biography of Adi Shankaracharya to understand his life and mission, then explore the teachings that have transformed millions of seekers for over 1200 years.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/biography">
                  <Button className="bg-white text-[#e07c24] hover:bg-[#f7f3e9] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                    Read Biography
                  </Button>
                </Link>
                <Link href="/study-paths">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#e07c24] px-8 py-6 text-lg rounded-xl transition-all duration-300 font-semibold">
                    View Study Paths
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
