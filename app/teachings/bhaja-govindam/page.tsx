"use client"

import { useState } from "react"
import { bhajaGovindamVerses } from "@/data/bhaja-govindam"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, BookOpenIcon, Volume2Icon } from "lucide-react"

export default function BhajaGovindamPage() {
  const [selectedVerse, setSelectedVerse] = useState(0)
  const currentVerse = bhajaGovindamVerses[selectedVerse]

  const categoryLabels = {
    main: "Main Verse",
    dvadasha: "Dvādashamanjarikā",
    charpata: "Charpat Panjarikā"
  }

  const nextVerse = () => {
    if (selectedVerse < bhajaGovindamVerses.length - 1) {
      setSelectedVerse(selectedVerse + 1)
    }
  }

  const prevVerse = () => {
    if (selectedVerse > 0) {
      setSelectedVerse(selectedVerse - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Badge className="mb-4 bg-[#e07c24] text-white">Sacred Text</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
          Bhaja Govindam
        </h1>
        <p className="font-sanskrit text-2xl text-[#e07c24] mb-4">भज गोविन्दम्</p>
        <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-6">
          Also known as <span className="font-semibold">Moha Mudgara</span> (The Destroyer of Illusion)
        </p>
        <p className="text-md text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed max-w-3xl mx-auto">
          A devotional hymn composed by Adi Shankaracharya that emphasizes the importance of devotion to God (bhakti) alongside knowledge (jñāna). The work consists of 31 verses that urge the seeker to focus on spiritual pursuits rather than getting lost in mere intellectual or worldly activities.
        </p>
      </div>

      {/* About the Text */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              About This Text
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[#5a4a3f] dark:text-[#d9c5a9]">
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Historical Context:</strong> According to tradition, Shankaracharya composed this hymn when he saw an elderly scholar still engrossed in studying grammatical rules. The opening verse "Bhaja Govindam, Bhaja Govindam, Govindam Bhaja Moodhamate" arose spontaneously, urging the scholar to worship God rather than remain absorbed in mere intellectual pursuits.
            </p>
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Structure:</strong> The 31 verses are divided into two groups: the main verses by Shankaracharya himself (Dvādashamanjarikā - 12 verses) and additional verses composed by his disciples (Charpat Panjarikā - 19 verses). Together they form a complete teaching on the temporary nature of worldly life and the urgency of spiritual practice.
            </p>
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Key Themes:</strong> Impermanence of life, illusion of worldly attachments, importance of devotion, urgency of spiritual seeking, discrimination between eternal and temporary, and the supremacy of God-realization over mere intellectual knowledge.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="outline" className="border-[#e07c24]/30">Devotional</Badge>
              <Badge variant="outline" className="border-[#e07c24]/30">Philosophical</Badge>
              <Badge variant="outline" className="border-[#e07c24]/30">Practical Wisdom</Badge>
              <Badge variant="outline" className="border-[#e07c24]/30">Renunciation</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Verse Navigation */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24]">
            Verse by Verse Study
          </h2>
          <Badge className="bg-[#e07c24] text-white">
            Verse {selectedVerse + 1} of {bhajaGovindamVerses.length}
          </Badge>
        </div>

        {/* Quick Verse Selector */}
        <div className="flex flex-wrap gap-2 mb-8 p-4 bg-[#f7f3e9]/50 dark:bg-[#1a1814]/50 rounded-lg">
          {bhajaGovindamVerses.map((verse, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedVerse(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                selectedVerse === idx
                  ? 'bg-[#e07c24] text-white scale-110'
                  : 'bg-white dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e] border border-[#e07c24]/20'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Current Verse Display */}
        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Verse {currentVerse.number}
                </CardTitle>
                <Badge className="bg-[#e9e1d3] text-[#8b5d33] dark:bg-[#2a241e] dark:text-[#e07c24]">
                  {categoryLabels[currentVerse.category]}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="text-[#e07c24]">
                <Volume2Icon className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sanskrit */}
            <div className="p-6 bg-[#f7f3e9] dark:bg-[#1a1814] rounded-lg border-l-4 border-[#e07c24]">
              <div className="text-xs font-semibold text-[#e07c24] mb-2 uppercase tracking-wide">Sanskrit</div>
              <p className="font-sanskrit text-2xl md:text-3xl text-[#8b5d33] dark:text-[#e07c24] leading-relaxed">
                {currentVerse.sanskrit}
              </p>
            </div>

            {/* Transliteration */}
            <div>
              <div className="text-xs font-semibold text-[#e07c24] mb-2 uppercase tracking-wide">Transliteration</div>
              <p className="text-lg italic text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                {currentVerse.transliteration}
              </p>
            </div>

            {/* Translation */}
            <div>
              <div className="text-xs font-semibold text-[#e07c24] mb-2 uppercase tracking-wide">Translation</div>
              <p className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] leading-relaxed">
                "{currentVerse.translation}"
              </p>
            </div>

            {/* Commentary */}
            <div>
              <div className="text-xs font-semibold text-[#e07c24] mb-3 uppercase tracking-wide flex items-center gap-2">
                <BookOpenIcon className="w-4 h-4" />
                Commentary
              </div>
              <p className="text-md text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                {currentVerse.commentary}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevVerse}
            disabled={selectedVerse === 0}
            className="bg-[#e07c24] hover:bg-[#c06a1f] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-2" />
            Previous Verse
          </Button>

          <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
            {selectedVerse + 1} / {bhajaGovindamVerses.length}
          </div>

          <Button
            onClick={nextVerse}
            disabled={selectedVerse === bhajaGovindamVerses.length - 1}
            className="bg-[#e07c24] hover:bg-[#c06a1f] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Verse
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Authentic Sources */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              Authentic Sources & Translations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-[#5a4a3f] dark:text-[#d9c5a9]">
            <div>
              <strong>• Shlokam.org:</strong> All 33 verses with Sanskrit, transliteration, word-by-word meaning, and translation
            </div>
            <div>
              <strong>• Swami Chinmayananda's Commentary:</strong> Systematic and precise with word-to-word analysis (highly recommended)
            </div>
            <div>
              <strong>• T.M.P. Mahadevan Translation (1962):</strong> Scholarly English translation and commentary
            </div>
            <div>
              <strong>• SanskritDocuments.org:</strong> PDF version with complete text in Devanagari
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
