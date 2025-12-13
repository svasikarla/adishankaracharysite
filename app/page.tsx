"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, QuoteIcon, TrendingUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Components
import { Hero } from "@/components/ui-custom/Hero"
import { Section } from "@/components/ui-custom/Section"
import { FeatureCard } from "@/components/ui-custom/FeatureCard"
import { ConceptCard } from "@/components/ui-custom/ConceptCard"

// Data
import { CORE_CONCEPTS, FEATURES } from "@/data/homepage"
import { getTodaysWisdom } from "@/lib/wisdom"

export default function Home() {
  const [todaysWisdom, setTodaysWisdom] = useState<any>(null)

  useEffect(() => {
    setTodaysWisdom(getTodaysWisdom())
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Core Concepts */}
      <Section className="bg-background">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-accent mb-3">
            Core Concepts
          </h2>
          <p className="text-muted-foreground text-lg">
            Five fundamental principles of Advaita Vedanta architecture
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CORE_CONCEPTS.map((concept, index) => (
            <ConceptCard key={index} {...concept} />
          ))}
        </div>
      </Section>

      {/* Daily Wisdom & Verse Combined */}
      {todaysWisdom && (
        <Section variant="alternate">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-background/60 backdrop-blur-sm shadow-xl">
              <CardContent className="pt-10 pb-10 px-6 md:px-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="hidden md:flex flex-col items-center justify-center border-r-2 border-primary/10 pr-8 min-w-[140px]">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <QuoteIcon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">Daily Wisdom</span>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-accent mb-6 leading-relaxed">
                      "{todaysWisdom.text}"
                    </blockquote>

                    {todaysWisdom.sanskrit && (
                      <p className="text-lg font-sanskrit text-foreground/70 mb-4 italic">
                        {todaysWisdom.sanskrit}
                      </p>
                    )}

                    <div className="flex items-center justify-center md:justify-between border-t border-primary/10 pt-4 mt-6">
                      <div>
                        <p className="text-lg font-semibold text-primary">
                          — {todaysWisdom.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {todaysWisdom.source}
                        </p>
                      </div>
                      <Link href="/teachings">
                        <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary/80 hover:bg-primary/5">
                          Browse All Teachings <ArrowRightIcon className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>
      )}

      {/* Knowledge Base Features */}
      <Section>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-accent mb-3">
            Explore the Knowledge Base
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive resources for your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="alternate">
        <div className="relative bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl mx-auto max-w-5xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur">
              <TrendingUpIcon className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Begin Your Spiritual Journey
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Start with the study paths designed to guide you from basics to advanced contemplation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/study-paths">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-xl shadow-lg text-lg font-semibold border-2 border-transparent">
                  Start Learning
                </Button>
              </Link>
              <Link href="/biography">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white px-8 py-6 rounded-xl text-lg font-semibold">
                  Read Biography
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
