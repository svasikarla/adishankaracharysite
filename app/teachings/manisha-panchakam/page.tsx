"use client"

import { useState, useEffect } from "react"
import { manishaPanchakamVerses } from "@/data/manisha-panchakam"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ChevronLeftIcon, ChevronRightIcon, BookOpenIcon, LayoutListIcon, BookTextIcon, SettingsIcon, BookmarkIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import SanskritAudio from "@/components/SanskritAudio"

type ViewMode = 'single' | 'scroll' | 'study'

export default function ManishaPanchakamPage() {
  const [selectedVerse, setSelectedVerse] = useState(0)
  const [viewMode, setViewMode] = useState<ViewMode>('single')
  const [fontSize, setFontSize] = useState(16)
  const [bookmarkedVerses, setBookmarkedVerses] = useState<number[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentVerse = manishaPanchakamVerses[selectedVerse]
  const progress = ((selectedVerse + 1) / manishaPanchakamVerses.length) * 100

  // Load preferences from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('manisha-font-size')
    const savedViewMode = localStorage.getItem('manisha-view-mode')
    const savedBookmarks = localStorage.getItem('manisha-bookmarks')

    if (savedFontSize) setFontSize(parseInt(savedFontSize))
    if (savedViewMode) setViewMode(savedViewMode as ViewMode)
    if (savedBookmarks) setBookmarkedVerses(JSON.parse(savedBookmarks))
  }, [])

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('manisha-font-size', fontSize.toString())
    localStorage.setItem('manisha-view-mode', viewMode)
    localStorage.setItem('manisha-bookmarks', JSON.stringify(bookmarkedVerses))
  }, [fontSize, viewMode, bookmarkedVerses])

  const nextVerse = () => {
    if (selectedVerse < manishaPanchakamVerses.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedVerse(selectedVerse + 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const prevVerse = () => {
    if (selectedVerse > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedVerse(selectedVerse - 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const toggleBookmark = (verseIndex: number) => {
    setBookmarkedVerses(prev =>
      prev.includes(verseIndex)
        ? prev.filter(i => i !== verseIndex)
        : [...prev, verseIndex]
    )
  }

  const VerseContent = ({ verse, index }: { verse: typeof currentVerse, index?: number }) => (
    <div className="space-y-6" style={{ fontSize: `${fontSize}px` }}>
      {/* Sanskrit */}
      <div className="p-6 bg-[#f7f3e9] dark:bg-[#1a1814] rounded-lg border-l-4 border-[#e07c24]">
        <div className="text-xs font-semibold text-[#e07c24] mb-2 uppercase tracking-wide">Sanskrit</div>
        <p className="font-sanskrit text-2xl md:text-3xl text-[#8b5d33] dark:text-[#e07c24] leading-relaxed">
          {verse.sanskrit}
        </p>
      </div>

      {/* Transliteration */}
      <div>
        <div className="text-xs font-semibold text-[#e07c24] mb-2 uppercase tracking-wide">Transliteration</div>
        <p className="text-lg italic text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
          {verse.transliteration}
        </p>
      </div>

      {/* Sanskrit Audio Player */}
      <SanskritAudio
        text={verse.sanskrit}
        transliteration={verse.transliteration}
      />

      {/* Translation */}
      <div>
        <div className="text-xs font-semibold text-[#e07c24] mb-2 uppercase tracking-wide">Translation</div>
        <p className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] leading-relaxed">
          "{verse.translation}"
        </p>
      </div>

      {/* Commentary */}
      <div>
        <div className="text-xs font-semibold text-[#e07c24] mb-3 uppercase tracking-wide flex items-center gap-2">
          <BookOpenIcon className="w-4 h-4" />
          Commentary
        </div>
        <p className="text-md text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
          {verse.commentary}
        </p>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back to Teachings Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link href="/#teachings">
          <Button variant="ghost" className="text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#f7f3e9] dark:hover:bg-[#2a241e]">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Teachings
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Badge className="mb-4 bg-[#e07c24] text-white">Sacred Text</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
          Manisha Panchakam
        </h1>
        <p className="font-sanskrit text-2xl text-[#e07c24] mb-4">मनीषा पञ्चकम्</p>
        <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-6">
          Five Verses on <span className="font-semibold">Wisdom and Spiritual Equality</span>
        </p>
        <p className="text-md text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed max-w-3xl mx-auto">
          A profound teaching composed by Adi Shankaracharya after his encounter with a chandala (outcaste) who revealed the ultimate truth about non-duality. These {manishaPanchakamVerses.length} verses emphasize that true wisdom transcends all social distinctions, and the realized being sees the same Self in all.
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
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Historical Context:</strong> This profound teaching arose from Shankaracharya's encounter with a chandala (outcaste) who taught him the ultimate truth about non-duality. When Shankaracharya asked the chandala to move aside, the outcaste posed a profound question: "Do you want my body to move or the Atman?" This awakened Shankaracharya to recognize his own subtle attachment to social identity.
            </p>
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Key Teaching:</strong> True knowledge is the realization that the one Consciousness pervades all beings. Social distinctions are superficial; Self-realization is the only true qualification. The hymn declares that caste, birth, and social status are entirely irrelevant to spiritual realization.
            </p>
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Core Themes:</strong> Each verse concludes with the refrain "He who knows this knows the Vedas; such a person is complete and partless," emphasizing that true Vedic knowledge is experiential realization of non-dual Consciousness, not mere intellectual understanding or ritual performance.
            </p>
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Social Significance:</strong> One of the earliest explicit teachings on spiritual equality in Hindu philosophy, predating modern social reform movements by centuries. Shankaracharya explicitly states that even a chandala who has Self-knowledge is his guru.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="outline" className="border-[#e07c24]/30">Non-Duality</Badge>
              <Badge variant="outline" className="border-[#e07c24]/30">Spiritual Equality</Badge>
              <Badge variant="outline" className="border-[#e07c24]/30">Self-Knowledge</Badge>
              <Badge variant="outline" className="border-[#e07c24]/30">Social Reform</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reading Controls */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
              Verse by Verse Study
            </h2>
            <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
              Choose your preferred reading experience
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Selector */}
            <div className="flex gap-2 bg-white/80 dark:bg-[#2a241e]/80 p-1 rounded-lg border border-[#e07c24]/20">
              <Button
                variant={viewMode === 'single' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('single')}
                className={viewMode === 'single' ? 'bg-[#e07c24] hover:bg-[#c06a1f]' : ''}
              >
                <BookOpenIcon className="w-4 h-4 mr-2" />
                Single
              </Button>
              <Button
                variant={viewMode === 'scroll' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('scroll')}
                className={viewMode === 'scroll' ? 'bg-[#e07c24] hover:bg-[#c06a1f]' : ''}
              >
                <LayoutListIcon className="w-4 h-4 mr-2" />
                Scroll
              </Button>
              <Button
                variant={viewMode === 'study' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('study')}
                className={viewMode === 'study' ? 'bg-[#e07c24] hover:bg-[#c06a1f]' : ''}
              >
                <BookTextIcon className="w-4 h-4 mr-2" />
                Study
              </Button>
            </div>

            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-[#e07c24]/20">
                  <SettingsIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-3">
                  <div className="text-sm font-semibold mb-2 text-[#8b5d33] dark:text-[#e07c24]">
                    Font Size: {fontSize}px
                  </div>
                  <Slider
                    value={[fontSize]}
                    onValueChange={(value) => setFontSize(value[0])}
                    min={14}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                </div>
                <DropdownMenuSeparator />
                {bookmarkedVerses.length > 0 && (
                  <>
                    <div className="px-2 py-2">
                      <div className="text-sm font-semibold mb-2 text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
                        <BookmarkIcon className="w-4 h-4" />
                        Bookmarks ({bookmarkedVerses.length})
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {bookmarkedVerses.sort((a, b) => a - b).map(idx => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedVerse(idx)
                              setViewMode('single')
                            }}
                            className="px-2 py-1 text-xs bg-[#e07c24] text-white rounded hover:bg-[#c06a1f]"
                          >
                            {idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Progress Bar */}
        {viewMode === 'single' && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-[#8b5d33] dark:text-[#e07c24]">
                Progress: Verse {selectedVerse + 1} of {manishaPanchakamVerses.length}
              </span>
              <span className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="relative h-2 bg-[#e9e1d3] dark:bg-[#2a241e] rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e07c24] to-[#c06a1f] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Quick Verse Selector */}
        {viewMode === 'single' && (
          <div className="flex flex-wrap gap-2 mb-8 p-4 bg-[#f7f3e9]/50 dark:bg-[#1a1814]/50 rounded-lg">
            {manishaPanchakamVerses.map((verse, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setSelectedVerse(idx)
                    setIsTransitioning(false)
                  }, 150)
                }}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  selectedVerse === idx
                    ? 'bg-[#e07c24] text-white scale-110'
                    : 'bg-white dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] hover:bg-[#e9e1d3] dark:hover:bg-[#3a3430] border border-[#e07c24]/20'
                }`}
              >
                {idx + 1}
                {bookmarkedVerses.includes(idx) && (
                  <BookmarkIcon className="absolute -top-1 -right-1 w-3 h-3 fill-[#e07c24] text-[#e07c24]" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Single Verse Mode */}
        {viewMode === 'single' && (
          <>
            <Card className={`bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20 transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                      Verse {currentVerse.number}
                    </CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(selectedVerse)}
                    className={bookmarkedVerses.includes(selectedVerse) ? 'text-[#e07c24]' : 'text-gray-400'}
                  >
                    <BookmarkIcon className={`w-5 h-5 ${bookmarkedVerses.includes(selectedVerse) ? 'fill-[#e07c24]' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <VerseContent verse={currentVerse} />
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
                Previous
              </Button>

              <div className="text-center">
                <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                  {selectedVerse > 0 && (
                    <div className="mb-1 text-xs opacity-70">
                      ← Verse {manishaPanchakamVerses[selectedVerse - 1].number}
                    </div>
                  )}
                  <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                    {selectedVerse + 1} / {manishaPanchakamVerses.length}
                  </div>
                  {selectedVerse < manishaPanchakamVerses.length - 1 && (
                    <div className="mt-1 text-xs opacity-70">
                      Verse {manishaPanchakamVerses[selectedVerse + 1].number} →
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={nextVerse}
                disabled={selectedVerse === manishaPanchakamVerses.length - 1}
                className="bg-[#e07c24] hover:bg-[#c06a1f] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}

        {/* Continuous Scroll Mode */}
        {viewMode === 'scroll' && (
          <div className="space-y-8">
            {manishaPanchakamVerses.map((verse, idx) => (
              <Card key={idx} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                        Verse {verse.number}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleBookmark(idx)}
                      className={bookmarkedVerses.includes(idx) ? 'text-[#e07c24]' : 'text-gray-400'}
                    >
                      <BookmarkIcon className={`w-5 h-5 ${bookmarkedVerses.includes(idx) ? 'fill-[#e07c24]' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <VerseContent verse={verse} index={idx} />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Study Mode (Split Screen) */}
        {viewMode === 'study' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Verse Text */}
            <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20 sticky top-4 h-fit">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                      Verse {currentVerse.number}
                    </CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(selectedVerse)}
                    className={bookmarkedVerses.includes(selectedVerse) ? 'text-[#e07c24]' : 'text-gray-400'}
                  >
                    <BookmarkIcon className={`w-5 h-5 ${bookmarkedVerses.includes(selectedVerse) ? 'fill-[#e07c24]' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6" style={{ fontSize: `${fontSize}px` }}>
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

                {/* Navigation */}
                <div className="flex justify-between items-center pt-4">
                  <Button
                    onClick={prevVerse}
                    disabled={selectedVerse === 0}
                    size="sm"
                    className="bg-[#e07c24] hover:bg-[#c06a1f] text-white disabled:opacity-50"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                    {selectedVerse + 1} / {manishaPanchakamVerses.length}
                  </span>
                  <Button
                    onClick={nextVerse}
                    disabled={selectedVerse === manishaPanchakamVerses.length - 1}
                    size="sm"
                    className="bg-[#e07c24] hover:bg-[#c06a1f] text-white disabled:opacity-50"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right: Commentary */}
            <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5" />
                  Commentary & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6" style={{ fontSize: `${fontSize}px` }}>
                <div>
                  <div className="text-xs font-semibold text-[#e07c24] mb-3 uppercase tracking-wide">Commentary</div>
                  <p className="text-md text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                    {currentVerse.commentary}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
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
              <strong>• Shlokam.org:</strong> Complete text with Sanskrit, transliteration, and detailed translations
            </div>
            <div>
              <strong>• Chinmaya Mission:</strong> Swami Chinmayananda's commentary on spiritual equality and non-dual wisdom
            </div>
            <div>
              <strong>• Ramakrishna Mission:</strong> Scholarly translations emphasizing the social reform aspect
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
