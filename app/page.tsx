"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpenIcon,
  GraduationCapIcon,
  LibraryIcon,
  SparklesIcon,
  Users2Icon,
  Building2Icon,
  ArrowRightIcon,
  QuoteIcon,
  CalendarIcon,
  TrendingUpIcon,
  PlayCircleIcon
} from "lucide-react"
import { getTodaysWisdom, getVerseOfTheDay } from "@/lib/wisdom"

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [verseOfDay, setVerseOfDay] = useState<any>(null)
  const [todaysWisdom, setTodaysWisdom] = useState<any>(null)

  useEffect(() => {
    setVerseOfDay(getVerseOfTheDay())
    setTodaysWisdom(getTodaysWisdom())
  }, [])

  return (
    <div className="min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[#f7f3e9] via-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:via-[#2a241e] dark:to-[#1a1814]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#e07c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-[#e07c24]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content - More Compact */}
            <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-5">
              <Badge className="inline-flex items-center gap-2 bg-[#e07c24]/10 dark:bg-[#e07c24]/20 border border-[#e07c24]/30 text-[#e07c24] hover:bg-[#e07c24]/20">
                <SparklesIcon className="w-4 h-4" />
                Advaita Vedanta Philosophy
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] leading-tight">
                Discover the <span className="text-[#e07c24] dark:text-[#f7f3e9]">Eternal Wisdom</span> of Adi Shankaracharya
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                1200 years of profound teachings • Authentic texts • Guided study paths
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Link href="/biography">
                  <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white px-6 py-5 rounded-xl shadow-lg group">
                    Discover His Life
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/teachings">
                  <Button variant="outline" className="border-2 border-[#e07c24] text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#e07c24] hover:text-white px-6 py-5 rounded-xl">
                    Explore Teachings
                  </Button>
                </Link>
              </div>

              {/* Compact Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e07c24]/20">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#e07c24]">1200+</div>
                  <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">Years</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#e07c24]">100+</div>
                  <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">Texts</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#e07c24]">4</div>
                  <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">Mathas</div>
                </div>
              </div>
            </div>

            {/* Compact Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#e07c24]/20 to-transparent rounded-2xl blur-xl"></div>
                <Image
                  src="/shankaracharya-meditation.png"
                  alt="Adi Shankaracharya Meditating"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Verse of the Day - Dynamic */}
      {verseOfDay && (
        <section className="py-8 bg-gradient-to-r from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white/90 text-sm font-medium">Verse of the Day</div>
                    <div className="text-white/70 text-xs">{verseOfDay.source} • Verse {verseOfDay.number}</div>
                  </div>
                </div>
                <div className="flex-1 border-l border-white/30 pl-6">
                  <p className="text-white text-base md:text-lg leading-relaxed line-clamp-2 md:line-clamp-1">
                    {verseOfDay.translation}
                  </p>
                  <Link href={`/teachings/${verseOfDay.source === 'Atma Bodha' ? 'atma-bodha' : 'bhaja-govindam'}`}>
                    <Button variant="link" className="text-white hover:text-white/80 px-0 mt-1">
                      Read Full Verse <ArrowRightIcon className="ml-1 w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Concepts - Compact */}
      <section className="py-12 bg-white dark:bg-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
              Core Concepts
            </h2>
            <p className="text-sm md:text-base text-[#5a4a3f] dark:text-[#d9c5a9]">
              Five fundamental principles of Advaita Vedanta
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Atman", desc: "Individual Soul", link: "/philosophy/atman" },
              { name: "Brahman", desc: "Universal Consciousness", link: "/philosophy/brahman" },
              { name: "Maya", desc: "Cosmic Illusion", link: "/philosophy/maya" },
              { name: "Moksha", desc: "Liberation", link: "/philosophy/moksha" },
              { name: "Neti Neti", desc: "Not This, Not This", link: "/philosophy/neti-neti" },
            ].map((concept, index) => (
              <Link key={index} href={concept.link}>
                <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#2a241e] dark:to-[#1a1814] border border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-[#2a241e] flex items-center justify-center mb-3 border-2 border-[#e07c24]/30 group-hover:border-[#e07c24] group-hover:scale-105 transition-all shadow-md">
                    <Image
                      src={`/concept-${concept.name.toLowerCase().split(' ')[0]}.jpg`}
                      alt={concept.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                    {concept.name}
                  </h3>
                  <p className="text-xs text-[#e07c24]">{concept.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Wisdom Quote */}
      {todaysWisdom && (
        <section className="py-10 bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-[#e07c24]/30 bg-white/50 dark:bg-[#1a1814]/50 backdrop-blur">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4">
                    <QuoteIcon className="w-8 h-8 md:w-10 md:h-10 text-[#e07c24] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <blockquote className="text-lg md:text-xl lg:text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-4 leading-relaxed">
                        "{todaysWisdom.text}"
                      </blockquote>
                      {todaysWisdom.sanskrit && (
                        <p className="text-base md:text-lg font-sanskrit text-[#5a4a3f] dark:text-[#d9c5a9] mb-3 opacity-80">
                          {todaysWisdom.sanskrit}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm md:text-base font-medium text-[#e07c24]">
                            — {todaysWisdom.author}
                          </p>
                          <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">
                            {todaysWisdom.source}
                          </p>
                        </div>
                        <Badge className="bg-[#e07c24]/10 text-[#e07c24] border-[#e07c24]/30">
                          <TrendingUpIcon className="w-3 h-3 mr-1" />
                          Daily Wisdom
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Main Features - Compact Grid */}
      <section className="py-12 bg-white dark:bg-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
              Explore the Knowledge Base
            </h2>
            <p className="text-sm md:text-base text-[#5a4a3f] dark:text-[#d9c5a9]">
              Comprehensive resources for your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
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
                badge: "6 Concepts",
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
            ].map((feature, index) => (
              <Link key={index} href={feature.href} className="group">
                <Card className="h-full border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                        <feature.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <Badge variant="outline" className="border-[#e07c24]/30 text-[#e07c24] text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-[#8b5d33] dark:text-[#e07c24] font-serif group-hover:text-[#e07c24] transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">{feature.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="link" className="text-[#e07c24] px-0 text-sm">
                      Explore <ArrowRightIcon className="ml-1 w-3 h-3" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Journey - Compact */}
      <section className="py-12 bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
              Start Your Journey
            </h2>
            <p className="text-sm md:text-base text-[#5a4a3f] dark:text-[#d9c5a9]">
              Three simple steps to begin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
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
            ].map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="relative bg-white dark:bg-[#2a241e] rounded-xl p-6 border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e07c24] to-[#c06a1f] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2 group-hover:text-[#e07c24] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        {item.description}
                      </p>
                    </div>
                    <item.icon className="w-5 h-5 text-[#e07c24] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="py-12 bg-white dark:bg-[#1a1814]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#e07c24] to-[#c06a1f] rounded-2xl p-8 md:p-10 text-center overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10">
              <Image src="/om-symbol.jpg" alt="Om" width={48} height={48} className="mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                Begin Your Spiritual Journey
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Explore 1200 years of wisdom with authentic texts and guided study paths
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/biography">
                  <Button className="bg-white text-[#e07c24] hover:bg-[#f7f3e9] px-6 py-5 rounded-xl shadow-lg font-semibold">
                    Read Biography
                  </Button>
                </Link>
                <Link href="/study-paths">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#e07c24] px-6 py-5 rounded-xl font-semibold">
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
