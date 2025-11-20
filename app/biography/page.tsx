import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LifeTimeline from "@/components/LifeTimeline"
import TravelsMapEnhanced from "@/components/TravelsMapEnhanced"
import { DebatesSection, StoriesSection } from "@/components/DebatesAndStories"
import {
  CalendarIcon,
  MapIcon,
  MessageSquareIcon,
  BookOpenIcon,
  SparklesIcon,
  Building2Icon
} from "lucide-react"

export const metadata = {
  title: "Biography of Adi Shankaracharya - Life, Travels, & Teachings",
  description: "Complete life story of Adi Shankaracharya (788-820 CE): interactive timeline, travels across India, famous debates, and inspiring stories"
}

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#e9e1d3] dark:from-[#1a1814] dark:via-[#1a1814] dark:to-[#2a241e]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Hero Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                  <Image
                    src="/shankaracharya-portrait.png"
                    alt="Adi Shankaracharya"
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left text-white">
                <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <CalendarIcon className="w-3 h-3 mr-1" />
                  788-820 CE • 32 Years
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
                  Adi Shankaracharya
                </h1>
                <p className="text-xl md:text-2xl opacity-95 mb-4 leading-relaxed">
                  Jagadguru • Philosopher • Spiritual Revolutionary
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  In just 32 years, he revived Advaita Vedanta, established four mathas across India,
                  composed definitive commentaries on the Prasthana Trayi, and transformed Indian philosophy forever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CalendarIcon, label: 'Years Lived', value: '32', color: '#e07c24' },
              { icon: MapIcon, label: 'Distance Traveled', value: '25,000+ km', color: '#8b5cf6' },
              { icon: Building2Icon, label: 'Mathas Established', value: '4', color: '#10b981' },
              { icon: BookOpenIcon, label: 'Major Commentaries', value: '10+', color: '#3b82f6' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-[#2a241e] border-2 border-[#e07c24]/20 shadow-lg text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white dark:bg-[#2a241e] p-1 rounded-xl border-2 border-[#e07c24]/20">
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-[#e07c24] data-[state=active]:text-white flex items-center gap-2"
              >
                <CalendarIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Timeline</span>
              </TabsTrigger>
              <TabsTrigger
                value="travels"
                className="data-[state=active]:bg-[#e07c24] data-[state=active]:text-white flex items-center gap-2"
              >
                <MapIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Travels</span>
              </TabsTrigger>
              <TabsTrigger
                value="debates"
                className="data-[state=active]:bg-[#e07c24] data-[state=active]:text-white flex items-center gap-2"
              >
                <MessageSquareIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Debates</span>
              </TabsTrigger>
              <TabsTrigger
                value="stories"
                className="data-[state=active]:bg-[#e07c24] data-[state=active]:text-white flex items-center gap-2"
              >
                <SparklesIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Stories</span>
              </TabsTrigger>
              <TabsTrigger
                value="legacy"
                className="data-[state=active]:bg-[#e07c24] data-[state=active]:text-white flex items-center gap-2"
              >
                <BookOpenIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Legacy</span>
              </TabsTrigger>
            </TabsList>

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-8">
              <LifeTimeline />
            </TabsContent>

            {/* Travels Tab */}
            <TabsContent value="travels" className="space-y-8">
              <TravelsMapEnhanced />
            </TabsContent>

            {/* Debates Tab */}
            <TabsContent value="debates" className="space-y-8">
              <DebatesSection />
            </TabsContent>

            {/* Stories Tab */}
            <TabsContent value="stories" className="space-y-8">
              <StoriesSection />
            </TabsContent>

            {/* Legacy Tab */}
            <TabsContent value="legacy" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
                  Enduring Legacy
                </h2>
                <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">
                  1200+ years of continuous impact on Indian philosophy and spirituality
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Literary Works */}
                <Card className="border-2 border-[#e07c24]/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
                      <BookOpenIcon className="w-6 h-6" />
                      Literary Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#e07c24] mb-2">Bhashyas (Commentaries)</h4>
                      <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Brahma Sutra Bhashya</strong> - Definitive commentary on Vedanta Sutras</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Bhagavad Gita Bhashya</strong> - Commentary harmonizing all yogas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Upanishad Bhashyas</strong> - 10 principal Upanishads</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#e07c24] mb-2">Prakarana Granthas (Original Works)</h4>
                      <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Vivekachudamani</strong> - Crest Jewel of Discrimination (580 verses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Atma Bodha</strong> - Self-Knowledge (68 verses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Upadesa Sahasri</strong> - Thousand Teachings</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#e07c24] mb-2">Stotras (Devotional Hymns)</h4>
                      <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Bhaja Govindam</strong> - Worship Govinda (31 verses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Soundarya Lahari</strong> - Waves of Beauty (100 verses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Nirvana Shatkam</strong> - Six Verses on Liberation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span>Plus 50+ other hymns to various deities</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Institutional Legacy */}
                <Card className="border-2 border-[#e07c24]/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
                      <Building2Icon className="w-6 h-6" />
                      Institutional Legacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#e07c24] mb-2">Four Cardinal Mathas</h4>
                      <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-3">
                        Strategic establishment in four directions ensured preservation of Advaita Vedanta:
                      </p>
                      <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Sringeri</strong> (South) - Unbroken lineage of 36 acharyas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Puri</strong> (East) - Govardhan Matha, 33 acharyas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Dwarka</strong> (West) - Sharada Peetha, 31 acharyas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Jyotir Math</strong> (North) - Re-established, 40 acharyas</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#e07c24] mb-2">Dashanami Sampradaya</h4>
                      <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        Organized sannyasins into 10 orders, creating unified monastic tradition that continues today with millions of adherents worldwide.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#e07c24] mb-2">Principal Disciples</h4>
                      <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Padmapadacharya</strong> - Head of Puri Matha</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Sureshwaracharya</strong> - Head of Sringeri Matha</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Hastamalakacharya</strong> - Head of Dwarka Matha</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#e07c24]">•</span>
                          <span><strong>Totakacharya</strong> - Head of Jyotir Math</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Philosophical Impact */}
                <Card className="border-2 border-[#e07c24]/20 shadow-lg md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
                      <SparklesIcon className="w-6 h-6" />
                      Philosophical & Spiritual Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#e07c24] mb-3">Revival of Hinduism</h4>
                        <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Countered dominant Buddhist and Jain philosophies of 8th century India</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Revitalized Vedic studies and rituals while emphasizing knowledge</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Established supremacy of Upanishadic wisdom</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Unified diverse Hindu practices under Advaitic philosophy</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#e07c24] mb-3">Global Influence</h4>
                        <ul className="space-y-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Influenced Swami Vivekananda's teachings at the Parliament of World Religions (1893)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Shaped modern understanding of non-dualism worldwide</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Inspired countless spiritual seekers, philosophers, and scholars across centuries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#e07c24]">•</span>
                            <span>Foundational to modern Neo-Vedanta movement</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                      <p className="text-lg md:text-xl font-serif text-[#8b5d33] dark:text-[#e07c24] italic text-center leading-relaxed">
                        "Brahma satyam, jagan mithya, jivo brahmaiva naparah"
                      </p>
                      <p className="text-sm text-center text-[#5a4a3f] dark:text-[#d9c5a9] mt-3">
                        Brahman is real, the world is unreal, and the individual self is non-different from Brahman.
                      </p>
                      <p className="text-xs text-center text-[#e07c24] mt-2">
                        — The essence of Adi Shankaracharya's Advaita Vedanta
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
