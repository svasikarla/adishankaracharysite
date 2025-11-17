"use client"

import { useState, useMemo } from "react"
import { vivekachudamaniVerses, vivekachudamaniMetadata } from "@/data/vivekachudamani"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeftIcon, ChevronRightIcon, BookOpenIcon, SparklesIcon, FilterIcon, LightbulbIcon } from "lucide-react"
import Link from "next/link"

const themeLabels: Record<string, string> = {
  'qualification': 'Qualification',
  'bondage': 'Bondage',
  'discrimination': 'Discrimination',
  'self': 'Self',
  'brahman': 'Brahman',
  'maya': 'Maya',
  'inquiry': 'Inquiry',
  'meditation': 'Meditation',
  'liberation': 'Liberation',
  'jnani': 'Liberated Sage'
}

const themeColors: Record<string, string> = {
  'qualification': 'bg-blue-600',
  'bondage': 'bg-red-600',
  'discrimination': 'bg-purple-600',
  'self': 'bg-green-600',
  'brahman': 'bg-yellow-600',
  'maya': 'bg-pink-600',
  'inquiry': 'bg-indigo-600',
  'meditation': 'bg-teal-600',
  'liberation': 'bg-orange-600',
  'jnani': 'bg-cyan-600'
}

export default function VivekachudamaniPage() {
  const [selectedVerse, setSelectedVerse] = useState(0)
  const [selectedTheme, setSelectedTheme] = useState<string>("all")

  const filteredVerses = useMemo(() => {
    if (selectedTheme === "all") {
      return vivekachudamaniVerses
    }
    return vivekachudamaniVerses.filter(v => v.theme === selectedTheme)
  }, [selectedTheme])

  const currentVerse = filteredVerses[selectedVerse]

  const nextVerse = () => {
    if (selectedVerse < filteredVerses.length - 1) {
      setSelectedVerse(selectedVerse + 1)
    }
  }

  const prevVerse = () => {
    if (selectedVerse > 0) {
      setSelectedVerse(selectedVerse - 1)
    }
  }

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme)
    setSelectedVerse(0) // Reset to first verse when changing theme
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
              <Badge className="bg-white/20 text-white border-white/30">Disputed Authorship</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Vivekachudamani
            </h1>
            <p className="font-sanskrit text-3xl md:text-4xl mb-6 opacity-90">
              विवेकचूडामणि
            </p>
            <p className="text-xl md:text-2xl font-serif mb-4 opacity-95">
              The Crest-Jewel of Discrimination
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              {vivekachudamaniMetadata.keyTeaching}. This comprehensive guide contains {vivekachudamaniMetadata.selectedVerses} carefully selected verses from the original {vivekachudamaniMetadata.totalVerses}-verse text, organized into 10 thematic sections for systematic study.
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
                  {vivekachudamaniMetadata.theme}. It systematically presents the entire spiritual journey from the initial qualifications of a seeker through the ultimate state of liberation and the characteristics of a realized sage.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Authorship & Authenticity
                </h3>
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-600 text-white mt-1">Disputed Authorship</Badge>
                  <p className="leading-relaxed flex-1">
                    While traditionally attributed to Adi Shankaracharya (788-820 CE), modern scholars debate its authorship. Regardless of origin, the text remains one of the most comprehensive and systematic presentations of Advaita Vedanta philosophy, highly valued for its practical guidance and profound insights.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  The 10 Thematic Sections
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(themeLabels).map(([key, label]) => (
                    <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/10">
                      <div className={`w-3 h-3 rounded-full ${themeColors[key]} mt-1.5`} />
                      <div className="flex-1">
                        <span className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">{label}</span>
                        <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] mt-0.5">
                          {vivekachudamaniVerses.filter(v => v.theme === key).length} verses
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e07c24]/20">
                <Badge variant="outline" className="border-[#e07c24]/30">Knowledge Path (Jnana)</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Philosophical</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Self-Inquiry</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">Advaita Vedanta</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">{vivekachudamaniMetadata.selectedVerses} Selected Verses</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">{vivekachudamaniMetadata.difficulty}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Theme Filter & Verse Navigation */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24]">
              Verse by Verse Study
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-[#e07c24] text-white text-base px-4 py-2">
                {selectedTheme === "all" ? "All Themes" : themeLabels[selectedTheme]}
              </Badge>
              <Badge className="bg-[#8b5d33] dark:bg-[#e07c24]/80 text-white text-base px-4 py-2">
                Verse {selectedVerse + 1} of {filteredVerses.length}
              </Badge>
            </div>
          </div>

          {/* Theme Filter */}
          <div className="mb-8 p-6 bg-white/80 dark:bg-[#2a241e]/80 rounded-2xl border border-[#e07c24]/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-2 text-[#8b5d33] dark:text-[#e07c24]">
                <FilterIcon className="w-5 h-5" />
                <span className="font-semibold">Filter by Theme:</span>
              </div>
              <Select value={selectedTheme} onValueChange={handleThemeChange}>
                <SelectTrigger className="w-full md:w-64 bg-white dark:bg-[#1a1814] border-[#e07c24]/30">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Themes ({vivekachudamaniVerses.length} verses)</SelectItem>
                  {Object.entries(themeLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${themeColors[key]}`} />
                        {label} ({vivekachudamaniVerses.filter(v => v.theme === key).length})
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Verse Selector */}
          <div className="flex flex-wrap gap-2 mb-8 p-6 bg-white/80 dark:bg-[#2a241e]/80 rounded-2xl border border-[#e07c24]/20 shadow-lg">
            <p className="w-full text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-3 font-medium">
              Select a verse to study{selectedTheme !== "all" ? ` (${themeLabels[selectedTheme]} theme)` : ""}:
            </p>
            {filteredVerses.map((verse, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVerse(idx)}
                className={`relative group w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                  selectedVerse === idx
                    ? 'bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white scale-110 shadow-lg'
                    : 'bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] hover:scale-105 border border-[#e07c24]/20 hover:border-[#e07c24]'
                }`}
                title={`Verse ${verse.number} - ${themeLabels[verse.theme]}`}
              >
                {verse.number}
                {selectedTheme === "all" && (
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${themeColors[verse.theme]} border-2 border-white dark:border-[#1a1814]`} />
                )}
              </button>
            ))}
          </div>

          {/* Current Verse Display */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-b-2 border-[#e07c24]/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white flex items-center justify-center font-bold text-lg">
                    {currentVerse.number}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                      Verse {currentVerse.number}
                    </CardTitle>
                    <CardDescription>
                      Vivekachudamani - The Crest-Jewel of Discrimination
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`${themeColors[currentVerse.theme]} text-white`}>
                    {themeLabels[currentVerse.theme]}
                  </Badge>
                  <BookOpenIcon className="w-6 h-6 text-[#e07c24]" />
                </div>
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

              {/* Practical Application */}
              {currentVerse.practicalApplication && (
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-l-4 border-green-600">
                  <h3 className="text-base font-bold text-green-700 dark:text-green-400 mb-4 uppercase tracking-wide flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    Practical Application
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-[#5a4a3f] dark:text-[#d9c5a9]">
                    {currentVerse.practicalApplication}
                  </p>
                </div>
              )}
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
                {selectedVerse + 1} / {filteredVerses.length}
              </p>
            </div>

            <Button
              onClick={nextVerse}
              disabled={selectedVerse === filteredVerses.length - 1}
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
                How to Study Vivekachudamani
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-[#5a4a3f] dark:text-[#d9c5a9]">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">1. Thematic Study</h4>
                  <p className="text-sm">Use the theme filter to study verses by topic. This allows you to deeply explore specific aspects of Advaita Vedanta.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">2. Practice Discrimination</h4>
                  <p className="text-sm">The core teaching is viveka (discrimination). Apply the practical applications to develop this crucial skill.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">3. Progressive Path</h4>
                  <p className="text-sm">Follow the 10 themes in order from Qualification to Jnani to understand the complete spiritual journey.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-[#1a1814]/60 border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-2">4. Daily Contemplation</h4>
                  <p className="text-sm">Study one verse daily with deep reflection. The practical applications provide specific guidance for integration.</p>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                <p className="text-sm italic">
                  <strong className="text-[#e07c24]">Recommended Approach:</strong> {vivekachudamaniMetadata.practiceInstructions}
                </p>
              </div>

              <div className="mt-4 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-600">
                <p className="text-sm">
                  <strong className="text-blue-700 dark:text-blue-400">Prerequisites:</strong> {vivekachudamaniMetadata.prerequisites}
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
                Related Texts & Concepts
              </CardTitle>
              <CardDescription>
                Continue your study with these related teachings and philosophical concepts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3">Related Sacred Texts</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {vivekachudamaniMetadata.relatedTexts.map((text) => (
                    <Link key={text} href={`/teachings/${text.toLowerCase().replace(/ /g, '-')}`}>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                        <h3 className="font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] transition-colors">
                          {text}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3">Key Philosophical Concepts</h3>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
