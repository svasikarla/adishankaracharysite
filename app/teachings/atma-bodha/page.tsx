"use client"

import { useState } from "react"
import { atmaBodhaVerses } from "@/data/atma-bodha"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, BookOpenIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"

export default function AtmaBodhaPage() {
  const [selectedVerse, setSelectedVerse] = useState(0)
  const currentVerse = atmaBodhaVerses[selectedVerse]

  const nextVerse = () => {
    if (selectedVerse < atmaBodhaVerses.length - 1) {
      setSelectedVerse(selectedVerse + 1)
    }
  }

  const prevVerse = () => {
    if (selectedVerse > 0) {
      setSelectedVerse(selectedVerse - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#e9e1d3] dark:from-[#1a1814] dark:via-[#1a1814] dark:to-[#2a241e]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto mb-8">
          <Link href="/teachings">
            <Button variant="ghost" className="text-[#e07c24] hover:text-[#c06a1f] hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e]">
              <ChevronLeftIcon className="mr-2 w-4 h-4" />
              Back to Teachings
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <SparklesIcon className="w-8 h-8" />
              <Badge className="bg-white/20 text-white border-white/30">Sacred Text</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Atma Bodha
            </h1>
            <p className="font-sanskrit text-3xl md:text-4xl mb-6 opacity-90">
              आत्मबोध
            </p>
            <p className="text-xl md:text-2xl font-serif mb-4 opacity-95">
              Self-Knowledge
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              A systematic teaching on the path to Self-realization and knowledge of Atman, composed by Adi Shankaracharya. This profound text of 68 verses illuminates the nature of the Self and the means to realize it.
            </p>
          </div>
        </div>

        {/* About the Text */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                About This Text
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-[#5a4a3f] dark:text-[#d9c5a9]">
              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Purpose & Significance
                </h3>
                <p className="leading-relaxed">
                  Atma Bodha (Self-Knowledge) is a concise manual for Self-realization, written in simple Sanskrit verses. It systematically explains the relationship between the individual self (jiva) and the Supreme Self (Brahman), providing clear guidance on the path to liberation through knowledge.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Authorship Status
                </h3>
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-600 text-white mt-1">Disputed Authorship</Badge>
                  <p className="leading-relaxed flex-1">
                    While traditionally attributed to Adi Shankaracharya, modern scholarship debates its authorship. Regardless of its origin, the text is revered for its clear exposition of Advaita Vedanta principles and practical guidance for spiritual seekers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Key Themes
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "The qualifications of a spiritual seeker",
                    "The supremacy of knowledge (jnana) for liberation",
                    "Discrimination between Self and non-Self (viveka)",
                    "The nature of Brahman and Atman",
                    "The illusory nature of the world (maya)",
                    "Methods to remove ignorance (avidya)",
                    "The characteristics of a liberated being",
                    "Practical techniques for Self-inquiry"
                  ].map((theme, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/10">
                      <span className="text-[#e07c24] font-bold">•</span>
                      <span className="text-sm">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e07c24]/20">
                <Badge variant="outline" className="border-[#e07c24]/30">Knowledge Path (Jnana)</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Philosophical</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Self-Inquiry</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Advaita Vedanta</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">68 Verses</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Verse Navigation */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24]">
              Verse by Verse Study
            </h2>
            <Badge className="bg-[#e07c24] text-white text-base px-4 py-2">
              Verse {selectedVerse + 1} of {atmaBodhaVerses.length}
            </Badge>
          </div>

          {/* Quick Verse Selector */}
          <div className="flex flex-wrap gap-2 mb-8 p-6 bg-white/80 dark:bg-[#2a241e]/80 rounded-2xl border border-[#e07c24]/20 shadow-lg">
            <p className="w-full text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-3 font-medium">
              Select a verse to study:
            </p>
            {atmaBodhaVerses.map((verse, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVerse(idx)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                  selectedVerse === idx
                    ? 'bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white scale-110 shadow-lg'
                    : 'bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] hover:scale-105 border border-[#e07c24]/20 hover:border-[#e07c24]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Current Verse Display */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-b-2 border-[#e07c24]/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white flex items-center justify-center font-bold text-lg">
                    {currentVerse.number}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                      Verse {currentVerse.number}
                    </CardTitle>
                    <CardDescription>
                      Atma Bodha - Self-Knowledge
                    </CardDescription>
                  </div>
                </div>
                <BookOpenIcon className="w-6 h-6 text-[#e07c24]" />
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8 space-y-8">
              {/* Sanskrit Text */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20">
                <h3 className="text-sm font-semibold text-[#e07c24] mb-3 uppercase tracking-wide">
                  Sanskrit
                </h3>
                <p className="font-sanskrit text-2xl md:text-3xl leading-relaxed text-[#8b5d33] dark:text-[#e07c24]">
                  {currentVerse.sanskrit}
                </p>
              </div>

              {/* Transliteration */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border border-[#e07c24]/20">
                <h3 className="text-sm font-semibold text-[#e07c24] mb-3 uppercase tracking-wide">
                  Transliteration
                </h3>
                <p className="text-lg md:text-xl italic text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                  {currentVerse.transliteration}
                </p>
              </div>

              {/* Translation */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/30">
                <h3 className="text-sm font-semibold text-[#e07c24] mb-3 uppercase tracking-wide flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4" />
                  English Translation
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-[#8b5d33] dark:text-[#e07c24] font-medium">
                  {currentVerse.translation}
                </p>
              </div>

              {/* Commentary */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#e07c24]/5 to-[#c06a1f]/5 dark:from-[#e07c24]/10 dark:to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                <h3 className="text-base font-bold text-[#e07c24] mb-4 uppercase tracking-wide flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5" />
                  Commentary & Explanation
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#5a4a3f] dark:text-[#d9c5a9]">
                  {currentVerse.commentary}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 gap-4">
            <Button
              onClick={prevVerse}
              disabled={selectedVerse === 0}
              className="flex-1 md:flex-none bg-white dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] border-2 border-[#e07c24]/20 hover:bg-[#e9e1d3] dark:hover:bg-[#1a1814] hover:border-[#e07c24] disabled:opacity-50 disabled:cursor-not-allowed py-6"
            >
              <ChevronLeftIcon className="w-5 h-5 mr-2" />
              Previous Verse
            </Button>

            <div className="hidden md:block text-center px-6">
              <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                {selectedVerse + 1} / {atmaBodhaVerses.length}
              </p>
            </div>

            <Button
              onClick={nextVerse}
              disabled={selectedVerse === atmaBodhaVerses.length - 1}
              className="flex-1 md:flex-none bg-gradient-to-r from-[#e07c24] to-[#c06a1f] hover:from-[#c06a1f] hover:to-[#e07c24] text-white disabled:opacity-50 disabled:cursor-not-allowed py-6 shadow-lg"
            >
              Next Verse
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Study Tips */}
        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-3">
                <SparklesIcon className="w-6 h-6" />
                How to Study Atma Bodha
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-[#5a4a3f] dark:text-[#d9c5a9]">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">1. Sequential Study</h4>
                  <p className="text-sm">Study verses in order as each builds upon previous concepts, creating a systematic path to understanding.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">2. Reflect Deeply</h4>
                  <p className="text-sm">Don't rush. Spend time contemplating each verse and its commentary before moving to the next.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">3. Memorize Key Verses</h4>
                  <p className="text-sm">Commit important verses to memory for daily contemplation and integration into your practice.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">4. Apply Discrimination</h4>
                  <p className="text-sm">Practice viveka (discrimination) between Self and non-Self in daily life as taught in the verses.</p>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                <p className="text-sm italic">
                  <strong className="text-[#e07c24]">Note:</strong> While this text provides profound philosophical insights, traditional study recommends guidance from a qualified teacher (guru) for proper understanding and realization of the teachings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Concepts */}
        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Related Philosophical Concepts
              </CardTitle>
              <CardDescription>
                Explore key Advaita Vedanta concepts discussed in Atma Bodha
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'atman', name: 'Atman', description: 'The Individual Self' },
                  { id: 'brahman', name: 'Brahman', description: 'Ultimate Reality' },
                  { id: 'maya', name: 'Maya', description: 'Cosmic Illusion' },
                  { id: 'moksha', name: 'Moksha', description: 'Liberation' },
                  { id: 'viveka', name: 'Viveka', description: 'Discrimination' },
                  { id: 'neti-neti', name: 'Neti Neti', description: 'Not This, Not This' }
                ].map((concept) => (
                  <Link key={concept.id} href={`/philosophy/${concept.id}`}>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                      <h3 className="font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] mb-1 transition-colors">
                        {concept.name}
                      </h3>
                      <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        {concept.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
