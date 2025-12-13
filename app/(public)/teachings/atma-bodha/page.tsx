"use client"

import { useState, useEffect } from "react"
import { atmaBodhaVerses } from "@/data/atma-bodha"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  BookOpenIcon,
  SparklesIcon,
  SettingsIcon,
  BookmarkIcon,
  LayoutListIcon,
  BookTextIcon,
  TypeIcon
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SanskritAudioEnhanced from "@/components/SanskritAudioEnhanced"

type ViewMode = 'single' | 'scroll' | 'study'

export default function AtmaBodhaPage() {
  const [selectedVerse, setSelectedVerse] = useState(0)
  const [viewMode, setViewMode] = useState<ViewMode>('single')
  const [fontSize, setFontSize] = useState(16)
  const [bookmarkedVerses, setBookmarkedVerses] = useState<number[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentVerse = atmaBodhaVerses[selectedVerse]
  const progress = ((selectedVerse + 1) / atmaBodhaVerses.length) * 100

  // Load preferences from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('atma-font-size')
    const savedViewMode = localStorage.getItem('atma-view-mode')
    const savedBookmarks = localStorage.getItem('atma-bookmarks')

    if (savedFontSize) setFontSize(parseInt(savedFontSize))
    if (savedViewMode) setViewMode(savedViewMode as ViewMode)
    if (savedBookmarks) setBookmarkedVerses(JSON.parse(savedBookmarks))
  }, [])

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('atma-font-size', fontSize.toString())
    localStorage.setItem('atma-view-mode', viewMode)
    localStorage.setItem('atma-bookmarks', JSON.stringify(bookmarkedVerses))
  }, [fontSize, viewMode, bookmarkedVerses])

  const nextVerse = () => {
    if (selectedVerse < atmaBodhaVerses.length - 1) {
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

  const toggleBookmark = (verseNumber: number) => {
    setBookmarkedVerses(prev =>
      prev.includes(verseNumber)
        ? prev.filter(v => v !== verseNumber)
        : [...prev, verseNumber]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#e9e1d3] dark:from-[#1a1814] dark:via-[#1a1814] dark:to-[#2a241e]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Enhanced Header with Reading Controls */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link href="/teachings">
              <Button variant="ghost" className="text-[#e07c24] hover:text-[#c06a1f] hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e]">
                <ChevronLeftIcon className="mr-2 w-4 h-4" />
                Back to Teachings
              </Button>
            </Link>

            {/* Reading Controls */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-[#e07c24]/30">
                    {viewMode === 'single' && <BookOpenIcon className="w-4 h-4 mr-2" />}
                    {viewMode === 'scroll' && <LayoutListIcon className="w-4 h-4 mr-2" />}
                    {viewMode === 'study' && <BookTextIcon className="w-4 h-4 mr-2" />}
                    <span className="hidden md:inline">View</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Reading Mode</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setViewMode('single')}>
                    <BookOpenIcon className="w-4 h-4 mr-2" />
                    Single Verse
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setViewMode('scroll')}>
                    <LayoutListIcon className="w-4 h-4 mr-2" />
                    Continuous Scroll
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setViewMode('study')}>
                    <BookTextIcon className="w-4 h-4 mr-2" />
                    Study Mode
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-[#e07c24]/30">
                    <SettingsIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Reading Preferences</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="p-3 space-y-4">
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2 mb-2">
                        <TypeIcon className="w-4 h-4" />
                        Font Size: {fontSize}px
                      </label>
                      <Slider
                        value={[fontSize]}
                        onValueChange={(value) => setFontSize(value[0])}
                        min={14}
                        max={24}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-[#e9e1d3] dark:bg-[#2a241e] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e07c24] to-[#c06a1f] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
            <span>Progress: {Math.round(progress)}%</span>
            <span>{selectedVerse + 1} of {atmaBodhaVerses.length} verses</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <SparklesIcon className="w-6 h-6" />
              <Badge className="bg-white/20 text-white border-white/30">Sacred Text</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Disputed Authorship</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Atma Bodha
            </h1>
            <p className="font-sanskrit text-2xl md:text-3xl mb-3 opacity-90">
              आत्मबोध
            </p>
            <p className="text-lg md:text-xl opacity-95">
              Self-Knowledge
            </p>
          </div>
        </div>

        {/* Single Verse Mode */}
        {viewMode === 'single' && (
          <div className="max-w-5xl mx-auto">
            <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <Card className="bg-white/95 dark:bg-[#2a241e]/95 border-2 border-[#e07c24]/20 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-b-2 border-[#e07c24]/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {currentVerse.number}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                          Verse {currentVerse.number}
                        </CardTitle>
                        <CardDescription>Atma Bodha - Self-Knowledge</CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark(currentVerse.number)}
                      className={bookmarkedVerses.includes(currentVerse.number) ? 'text-[#e07c24]' : ''}
                    >
                      <BookmarkIcon className={`w-5 h-5 ${bookmarkedVerses.includes(currentVerse.number) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-10 space-y-8" style={{ fontSize: `${fontSize}px` }}>
                  {/* Sanskrit Text */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20 shadow-inner">
                    <h3 className="text-xs font-semibold text-[#e07c24] mb-4 uppercase tracking-wide">
                      Sanskrit
                    </h3>
                    <p className="font-sanskrit leading-relaxed text-[#8b5d33] dark:text-[#e07c24]" style={{ fontSize: `${fontSize * 1.5}px`, lineHeight: '1.8' }}>
                      {currentVerse.sanskrit}
                    </p>
                  </div>

                  {/* Transliteration */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border border-[#e07c24]/20">
                    <h3 className="text-xs font-semibold text-[#e07c24] mb-4 uppercase tracking-wide">
                      Transliteration
                    </h3>
                    <p className="italic text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed" style={{ fontSize: `${fontSize * 1.2}px`, lineHeight: '1.8' }}>
                      {currentVerse.transliteration}
                    </p>
                  </div>

                  {/* Sanskrit Audio Player */}
                  <SanskritAudioEnhanced
                    text={currentVerse.sanskrit}
                    transliteration={currentVerse.transliteration}
                    textId="atma-bodha"
                    verseNumber={currentVerse.number}
                  />

                  {/* Translation */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/30 shadow-lg">
                    <h3 className="text-xs font-semibold text-[#e07c24] mb-4 uppercase tracking-wide flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4" />
                      English Translation
                    </h3>
                    <p className="leading-relaxed text-[#8b5d33] dark:text-[#e07c24] font-medium" style={{ fontSize: `${fontSize * 1.25}px`, lineHeight: '1.8' }}>
                      {currentVerse.translation}
                    </p>
                  </div>

                  {/* Commentary */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#e07c24]/5 to-[#c06a1f]/5 dark:from-[#e07c24]/10 dark:to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                    <h3 className="text-sm font-bold text-[#e07c24] mb-4 uppercase tracking-wide flex items-center gap-2">
                      <BookOpenIcon className="w-5 h-5" />
                      Commentary & Explanation
                    </h3>
                    <p className="leading-relaxed text-[#5a4a3f] dark:text-[#d9c5a9]" style={{ fontSize: `${fontSize}px`, lineHeight: '1.9' }}>
                      {currentVerse.commentary}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Navigation */}
              <div className="flex justify-between items-center mt-8 gap-4">
                <Button
                  onClick={prevVerse}
                  disabled={selectedVerse === 0}
                  size="lg"
                  className="flex-1 md:flex-none bg-white dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] border-2 border-[#e07c24]/20 hover:bg-[#e9e1d3] dark:hover:bg-[#1a1814] hover:border-[#e07c24] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all"
                >
                  <ChevronLeftIcon className="w-5 h-5 mr-2" />
                  <span className="hidden md:inline">Previous</span>
                </Button>

                <div className="flex items-center gap-2">
                  {selectedVerse > 0 && (
                    <div className="hidden lg:block text-center px-4 py-2 rounded-lg bg-white/60 dark:bg-[#2a241e]/60 border border-[#e07c24]/20">
                      <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] mb-1">Previous</p>
                      <p className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                        Verse {atmaBodhaVerses[selectedVerse - 1].number}
                      </p>
                    </div>
                  )}

                  <div className="text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#e07c24] to-[#c06a1f] text-white shadow-lg">
                    <p className="text-sm font-bold">
                      {selectedVerse + 1} / {atmaBodhaVerses.length}
                    </p>
                  </div>

                  {selectedVerse < atmaBodhaVerses.length - 1 && (
                    <div className="hidden lg:block text-center px-4 py-2 rounded-lg bg-white/60 dark:bg-[#2a241e]/60 border border-[#e07c24]/20">
                      <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] mb-1">Next</p>
                      <p className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                        Verse {atmaBodhaVerses[selectedVerse + 1].number}
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  onClick={nextVerse}
                  disabled={selectedVerse === atmaBodhaVerses.length - 1}
                  size="lg"
                  className="flex-1 md:flex-none bg-gradient-to-r from-[#e07c24] to-[#c06a1f] hover:from-[#c06a1f] hover:to-[#e07c24] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all"
                >
                  <span className="hidden md:inline">Next</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Continuous Scroll Mode */}
        {viewMode === 'scroll' && (
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {atmaBodhaVerses.map((verse, idx) => (
                <Card
                  key={verse.number}
                  className={`bg-white/95 dark:bg-[#2a241e]/95 border-2 transition-all duration-300 ${
                    idx === selectedVerse
                      ? 'border-[#e07c24] shadow-2xl scale-[1.02]'
                      : 'border-[#e07c24]/20 shadow-lg hover:border-[#e07c24]/50'
                  }`}
                >
                  <CardHeader className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-b border-[#e07c24]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white flex items-center justify-center font-bold shadow-lg">
                          {verse.number}
                        </div>
                        <CardTitle className="text-lg font-serif text-[#8b5d33] dark:text-[#e07c24]">
                          Verse {verse.number}
                        </CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          toggleBookmark(verse.number)
                          setSelectedVerse(idx)
                        }}
                        className={bookmarkedVerses.includes(verse.number) ? 'text-[#e07c24]' : ''}
                      >
                        <BookmarkIcon className={`w-4 h-4 ${bookmarkedVerses.includes(verse.number) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6" style={{ fontSize: `${fontSize}px` }}>
                    <div className="space-y-4">
                      <p className="font-sanskrit text-[#8b5d33] dark:text-[#e07c24] leading-relaxed" style={{ fontSize: `${fontSize * 1.3}px` }}>
                        {verse.sanskrit}
                      </p>
                      <p className="italic text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed" style={{ fontSize: `${fontSize * 1.1}px` }}>
                        {verse.transliteration}
                      </p>

                      {/* Compact Audio Player */}
                      <div className="flex items-center gap-2">
                        <SanskritAudioEnhanced
                          text={verse.sanskrit}
                          transliteration={verse.transliteration}
                          textId="atma-bodha"
                          verseNumber={verse.number}
                          compact
                        />
                        <span className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">
                          Listen to pronunciation
                        </span>
                      </div>

                      <p className="font-medium text-[#8b5d33] dark:text-[#e07c24] leading-relaxed border-l-4 border-[#e07c24] pl-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                        {verse.translation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Study Mode */}
        {viewMode === 'study' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="bg-white/95 dark:bg-[#2a241e]/95 border-2 border-[#e07c24]/20 shadow-xl sticky top-4">
                  <CardHeader className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] text-white flex items-center justify-center font-bold">
                        {currentVerse.number}
                      </div>
                      <CardTitle className="text-lg">Verse {currentVerse.number}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6" style={{ fontSize: `${fontSize}px` }}>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-[#f7f3e9] dark:bg-[#1a1814]">
                        <p className="font-sanskrit text-[#8b5d33] dark:text-[#e07c24] leading-relaxed" style={{ fontSize: `${fontSize * 1.4}px` }}>
                          {currentVerse.sanskrit}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#e9e1d3] dark:bg-[#2a241e]">
                        <p className="italic text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed" style={{ fontSize: `${fontSize * 1.1}px` }}>
                          {currentVerse.transliteration}
                        </p>
                      </div>

                      {/* Sanskrit Audio Player */}
                      <SanskritAudioEnhanced
                        text={currentVerse.sanskrit}
                        transliteration={currentVerse.transliteration}
                        textId="atma-bodha"
                        verseNumber={currentVerse.number}
                      />

                      <div className="p-4 rounded-xl bg-[#f7f3e9] dark:bg-[#1a1814] border-l-4 border-[#e07c24]">
                        <p className="font-medium text-[#8b5d33] dark:text-[#e07c24] leading-relaxed" style={{ fontSize: `${fontSize * 1.15}px` }}>
                          {currentVerse.translation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="bg-white/95 dark:bg-[#2a241e]/95 border-2 border-[#e07c24]/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#8b5d33] dark:text-[#e07c24]">
                      <BookOpenIcon className="w-5 h-5" />
                      Commentary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6" style={{ fontSize: `${fontSize}px` }}>
                    <p className="leading-relaxed text-[#5a4a3f] dark:text-[#d9c5a9]" style={{ lineHeight: '1.9' }}>
                      {currentVerse.commentary}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 gap-4">
              <Button
                onClick={prevVerse}
                disabled={selectedVerse === 0}
                size="lg"
                className="flex-1 md:flex-none bg-white dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#e07c24] border-2 border-[#e07c24]/20 hover:bg-[#e9e1d3] dark:hover:bg-[#1a1814] hover:border-[#e07c24] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <ChevronLeftIcon className="w-5 h-5 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextVerse}
                disabled={selectedVerse === atmaBodhaVerses.length - 1}
                size="lg"
                className="flex-1 md:flex-none bg-gradient-to-r from-[#e07c24] to-[#c06a1f] hover:from-[#c06a1f] hover:to-[#e07c24] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Next
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Bookmarked Verses */}
        {bookmarkedVerses.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12">
            <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#8b5d33] dark:text-[#e07c24]">
                  <BookmarkIcon className="w-5 h-5 fill-current" />
                  Your Bookmarks ({bookmarkedVerses.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {bookmarkedVerses.map(verseNum => (
                    <button
                      key={verseNum}
                      onClick={() => setSelectedVerse(verseNum - 1)}
                      className="px-3 py-2 rounded-lg bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20 hover:border-[#e07c24] transition-all"
                    >
                      <span className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                        Verse {verseNum}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
