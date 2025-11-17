"use client"

import { useState } from "react"
import { nirvanaShatkamVerses, nirvanaShatkamMetadata } from "@/data/nirvana-shatkam"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, BookOpenIcon, SparklesIcon, HeartIcon } from "lucide-react"
import Link from "next/link"

export default function NirvanaShatkamPage() {
  const [selectedVerse, setSelectedVerse] = useState(0)
  const currentVerse = nirvanaShatkamVerses[selectedVerse]

  const nextVerse = () => {
    if (selectedVerse < nirvanaShatkamVerses.length - 1) {
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
              <Badge className="bg-white/20 text-white border-white/30">Sacred Stotra</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Nirvana Shatkam
            </h1>
            <p className="font-sanskrit text-3xl md:text-4xl mb-6 opacity-90">
              निर्वाण षट्कम्
            </p>
            <p className="text-xl md:text-2xl font-serif mb-4 opacity-95">
              Six Verses on Liberation (Atma Shatkam)
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-6">
              A profound hymn of self-realization by Adi Shankaracharya that systematically negates all false identifications to reveal the true nature of the Self. Each verse culminates in the declaration: <span className="font-bold italic">"I am Consciousness-Bliss, I am Shiva"</span>
            </p>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
              <p className="font-sanskrit text-2xl md:text-3xl mb-2 text-center">
                चिदानन्दरूपः शिवोऽहम् शिवोऽहम्
              </p>
              <p className="text-sm md:text-base text-center italic opacity-90">
                Cidānandarūpaḥ Śivo'ham Śivo'ham
              </p>
              <p className="text-xs md:text-sm text-center mt-2 opacity-75">
                "I am of the nature of Consciousness and Bliss, I am Shiva, I am Shiva"
              </p>
            </div>
          </div>
        </div>

        {/* About the Text */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                About This Sacred Hymn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-[#5a4a3f] dark:text-[#d9c5a9]">
              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Purpose & Significance
                </h3>
                <p className="leading-relaxed">
                  {nirvanaShatkamMetadata.practiceInstructions}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  The Neti Neti Method
                </h3>
                <p className="leading-relaxed">
                  Nirvana Shatkam employs the powerful {'"'}Neti Neti{'"'} (Not this, Not this) method from the Upanishads. By systematically negating everything that you are NOT—mind, body, emotions, social roles, even spiritual concepts—what remains is your true nature: pure Consciousness (Chit) that is Bliss itself (Ananda). This is called the Via Negativa or path of negation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  What Each Verse Negates
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Verse 1: Mind, intellect, ego, senses, five elements",
                    "Verse 2: Prana, vital airs, body tissues, five sheaths",
                    "Verse 3: Emotions, attachments, the four purusharthas",
                    "Verse 4: Virtue, sin, pleasure, pain, rituals",
                    "Verse 5: Death, doubt, caste, birth, relationships",
                    "Verse 6: All thought constructs and forms"
                  ].map((theme, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/10">
                      <span className="text-[#e07c24] font-bold">•</span>
                      <span className="text-sm">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                <h3 className="font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Audio Practice Recommendation
                </h3>
                <p className="text-sm leading-relaxed">
                  {nirvanaShatkamMetadata.audioPractice}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e07c24]/20">
                <Badge variant="outline" className="border-[#e07c24]/30">Self-Realization</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Neti Neti Method</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Advanced Practice</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Advaita Vedanta</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">6 Verses</Badge>
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
              Verse {selectedVerse + 1} of {nirvanaShatkamVerses.length}
            </Badge>
          </div>

          {/* Quick Verse Selector */}
          <div className="flex flex-wrap gap-2 mb-8 p-6 bg-white/80 dark:bg-[#2a241e]/80 rounded-2xl border border-[#e07c24]/20 shadow-lg">
            <p className="w-full text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-3 font-medium">
              Select a verse to study:
            </p>
            {nirvanaShatkamVerses.map((verse, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVerse(idx)}
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-base font-semibold transition-all duration-200 ${
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
                      Nirvana Shatkam - Liberation Through Negation
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

              {/* Meditation Guide (if available) */}
              {currentVerse.meditationGuide && (
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#c06a1f]/10 to-[#e07c24]/5 dark:from-[#c06a1f]/20 dark:to-[#e07c24]/10 border-l-4 border-[#c06a1f]">
                  <h3 className="text-base font-bold text-[#c06a1f] mb-4 uppercase tracking-wide flex items-center gap-2">
                    <HeartIcon className="w-5 h-5" />
                    Meditation Practice Guide
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-[#5a4a3f] dark:text-[#d9c5a9]">
                    {currentVerse.meditationGuide}
                  </p>
                </div>
              )}

              {/* Refrain Reminder */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#e07c24] to-[#c06a1f] text-white">
                <p className="text-center font-sanskrit text-2xl md:text-3xl mb-3">
                  चिदानन्दरूपः शिवोऽहम् शिवोऽहम्
                </p>
                <p className="text-center text-sm md:text-base italic opacity-90">
                  Cidānandarūpaḥ Śivo'ham Śivo'ham
                </p>
                <p className="text-center text-xs md:text-sm mt-2 opacity-75">
                  I am Consciousness-Bliss, I am Shiva, I am Shiva
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
                {selectedVerse + 1} / {nirvanaShatkamVerses.length}
              </p>
            </div>

            <Button
              onClick={nextVerse}
              disabled={selectedVerse === nirvanaShatkamVerses.length - 1}
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
                How to Practice Nirvana Shatkam
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-[#5a4a3f] dark:text-[#d9c5a9]">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">1. Daily Recitation</h4>
                  <p className="text-sm">Chant all 6 verses daily, preferably in the morning. The repetition helps dissolve false identifications over time.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">2. Contemplative Study</h4>
                  <p className="text-sm">Study one verse per week. Don't rush. Let the negations sink deep into your understanding.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">3. Meditation Practice</h4>
                  <p className="text-sm">Use the meditation guides provided with each verse. Practice witnessing your thoughts and emotions without identification.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">4. Affirm Your True Nature</h4>
                  <p className="text-sm">After each negation, rest in the affirmation: "I am Consciousness-Bliss, I am Shiva." Feel the truth of it.</p>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                <p className="text-sm italic">
                  <strong className="text-[#e07c24]">Advanced Practice:</strong> This text is best approached after gaining foundational knowledge through texts like Tattva Bodha and Atma Bodha. The negations can be intellectually understood by beginners, but direct realization comes through sustained practice under proper guidance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Texts */}
        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Related Sacred Texts
              </CardTitle>
              <CardDescription>
                Continue your study with these complementary teachings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'atma-bodha', name: 'Atma Bodha', description: 'Self-Knowledge' },
                  { id: 'bhaja-govindam', name: 'Bhaja Govindam', description: 'Worship Govinda' },
                  { id: 'vivekachudamani', name: 'Vivekachudamani', description: 'Crest-Jewel of Discrimination' }
                ].map((text) => (
                  <Link key={text.id} href={`/teachings/${text.id}`}>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                      <h3 className="font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] mb-1 transition-colors">
                        {text.name}
                      </h3>
                      <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                        {text.description}
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
