"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  PlusIcon,
  MinusIcon,
  RotateCcwIcon,
  TargetIcon,
  SparklesIcon,
  Volume2Icon,
  VolumeXIcon,
  CheckCircle2Icon
} from "lucide-react"

interface Mantra {
  id: string
  sanskrit: string
  transliteration: string
  meaning: string
  category: string
  recommendedCount: number
}

export default function ChantCounterPage() {
  const [count, setCount] = useState(0)
  const [goal, setGoal] = useState(108)
  const [selectedMantra, setSelectedMantra] = useState<string>("om")
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [history, setHistory] = useState<{ [key: string]: number }>({})
  const [showGoalMessage, setShowGoalMessage] = useState(false)

  // Load saved data from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem('chantCount')
    const savedGoal = localStorage.getItem('chantGoal')
    const savedMantra = localStorage.getItem('selectedMantra')
    const savedHistory = localStorage.getItem('chantHistory')

    if (savedCount) setCount(parseInt(savedCount))
    if (savedGoal) setGoal(parseInt(savedGoal))
    if (savedMantra) setSelectedMantra(savedMantra)
    if (savedHistory) setHistory(JSON.parse(savedHistory))
  }, [])

  const increment = useCallback(() => {
    setCount(c => c + 1)
    if (soundEnabled) {
      // Simple beep sound (could be replaced with actual mantra audio)
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 528 // Hz (Solfeggio frequency)
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    }
  }, [soundEnabled])

  // Keyboard support - spacebar to increment
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
        increment()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [increment])

  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('chantCount', count.toString())
    localStorage.setItem('chantGoal', goal.toString())
    localStorage.setItem('selectedMantra', selectedMantra)
    localStorage.setItem('chantHistory', JSON.stringify(history))

    // Check if goal is reached
    if (count === goal && count > 0) {
      setShowGoalMessage(true)
      setTimeout(() => setShowGoalMessage(false), 3000)
    }
  }, [count, goal, selectedMantra, history])

  const mantras: Mantra[] = [
    {
      id: "om",
      sanskrit: "ॐ",
      transliteration: "Om",
      meaning: "The primordial sound, representing the ultimate reality (Brahman)",
      category: "Pranava",
      recommendedCount: 108
    },
    {
      id: "gayatri",
      sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
      transliteration: "Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat",
      meaning: "We meditate on the glory of the Creator who has created the universe, who is worthy of worship, who is the embodiment of knowledge and light",
      category: "Vedic Mantra",
      recommendedCount: 108
    },
    {
      id: "mahamrityunjaya",
      sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्",
      transliteration: "Om Tryambakam Yajamahe, Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan, Mrityor Mukshiya Maamritat",
      meaning: "We worship the three-eyed one (Shiva) who is fragrant and nourishes all beings; may he liberate us from death for the sake of immortality",
      category: "Healing Mantra",
      recommendedCount: 108
    },
    {
      id: "shanti",
      sanskrit: "ॐ सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै तेजस्वि नावधीतमस्तु मा विद्विषावहै ॐ शान्तिः शान्तिः शान्तिः",
      transliteration: "Om Saha Navavatu, Saha Nau Bhunaktu, Saha Viryam Karavavahai, Tejasvi Navadhitamastu, Ma Vidvishavahai, Om Shanti Shanti Shantih",
      meaning: "May we be protected together, may we be nourished together, may we work together with energy and vigor, may our study be illuminating, may we not hate each other",
      category: "Peace Mantra",
      recommendedCount: 27
    },
    {
      id: "guru",
      sanskrit: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः गुरुः साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः",
      transliteration: "Gurur Brahma Gurur Vishnu, Gurur Devo Maheshwarah, Guruh Sakshat Param Brahma, Tasmai Sri Gurave Namah",
      meaning: "The Guru is Brahma, the Guru is Vishnu, the Guru is Shiva; The Guru is verily the Supreme Absolute itself, Salutations to that Guru",
      category: "Guru Mantra",
      recommendedCount: 108
    }
  ]

  const currentMantra = mantras.find(m => m.id === selectedMantra) || mantras[0]
  const progress = Math.min((count / goal) * 100, 100)


  const decrement = () => {
    if (count > 0) setCount(c => c - 1)
  }

  const reset = () => {
    if (count > 0) {
      // Save to history before resetting
      const today = new Date().toISOString().split('T')[0]
      setHistory(prev => ({
        ...prev,
        [today]: (prev[today] || 0) + count
      }))
    }
    setCount(0)
  }

  const setQuickGoal = (value: number) => {
    setGoal(value)
  }

  const getTotalChants = () => {
    return Object.values(history).reduce((sum, val) => sum + val, 0)
  }

  const getStreakDays = () => {
    const dates = Object.keys(history).sort().reverse()
    if (dates.length === 0) return 0

    let streak = 0
    const today = new Date()

    for (let i = 0; i < dates.length; i++) {
      const date = new Date(dates[i])
      const diff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

      if (diff === i) {
        streak++
      } else {
        break
      }
    }

    return streak
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#e9e1d3] dark:from-[#1a1814] dark:via-[#1a1814] dark:to-[#2a241e]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <SparklesIcon className="w-10 h-10" />
              <Badge className="bg-white/20 text-white border-white/30">Spiritual Practice Tool</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Chant Counter
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Track your mantra repetitions and build a consistent daily practice
            </p>
          </div>
        </div>

        {/* Main Counter Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Selected Mantra Display */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-2 bg-[#e07c24]">{currentMantra.category}</Badge>
                  <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                    {currentMantra.transliteration}
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="text-[#e07c24]"
                >
                  {soundEnabled ? <Volume2Icon className="w-5 h-5" /> : <VolumeXIcon className="w-5 h-5" />}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-r from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20">
                <p className="font-sanskrit text-3xl md:text-4xl text-center text-[#8b5d33] dark:text-[#e07c24] leading-relaxed mb-4">
                  {currentMantra.sanskrit}
                </p>
                <p className="text-sm text-center text-[#5a4a3f] dark:text-[#d9c5a9] italic">
                  {currentMantra.meaning}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Counter Card */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardContent className="pt-8 space-y-8">
              {/* Main Counter Display */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-bold text-[#e07c24] font-serif">
                    {count}
                  </div>
                  {showGoalMessage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce flex items-center gap-2">
                        <CheckCircle2Icon className="w-6 h-6" />
                        <span className="font-bold">Goal Reached!</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center gap-4 text-lg text-[#5a4a3f] dark:text-[#d9c5a9]">
                  <TargetIcon className="w-5 h-5 text-[#e07c24]" />
                  <span>Goal: {goal} repetitions</span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <Progress value={progress} className="h-4" />
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                    {Math.round(progress)}% Complete
                  </p>
                </div>
              </div>

              {/* Counter Buttons */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={decrement}
                  disabled={count === 0}
                  size="lg"
                  variant="outline"
                  className="w-16 h-16 rounded-full border-2 border-[#e07c24]/30 text-[#e07c24] hover:bg-[#e07c24] hover:text-white hover:border-[#e07c24] disabled:opacity-30"
                >
                  <MinusIcon className="w-6 h-6" />
                </Button>

                <Button
                  onClick={increment}
                  size="lg"
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] hover:from-[#c06a1f] hover:to-[#e07c24] text-white shadow-2xl transform hover:scale-105 transition-transform text-2xl font-bold"
                >
                  <PlusIcon className="w-12 h-12" />
                </Button>

                <Button
                  onClick={reset}
                  size="lg"
                  variant="outline"
                  className="w-16 h-16 rounded-full border-2 border-[#e07c24]/30 text-[#e07c24] hover:bg-[#e07c24] hover:text-white hover:border-[#e07c24]"
                >
                  <RotateCcwIcon className="w-6 h-6" />
                </Button>
              </div>

              <p className="text-center text-sm text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70">
                Click the large button or press spacebar to count
              </p>
            </CardContent>
          </Card>

          {/* Quick Goal Setters */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Set Your Goal
              </CardTitle>
              <CardDescription>
                Traditional mala bead counts for mantra repetition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[27, 54, 108, 216, 1008].map(value => (
                  <Button
                    key={value}
                    onClick={() => setQuickGoal(value)}
                    variant={goal === value ? "default" : "outline"}
                    className={goal === value
                      ? "bg-[#e07c24] text-white hover:bg-[#c06a1f]"
                      : "border-[#e07c24]/30 text-[#e07c24] hover:bg-[#e07c24] hover:text-white"
                    }
                  >
                    {value}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70 mt-4">
                <strong>108</strong> is the most common mala bead count, representing completeness in Hindu tradition
              </p>
            </CardContent>
          </Card>

          {/* Select Mantra */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Select Mantra
              </CardTitle>
              <CardDescription>
                Choose from traditional Vedic mantras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mantras.map(mantra => (
                  <button
                    key={mantra.id}
                    onClick={() => setSelectedMantra(mantra.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selectedMantra === mantra.id
                      ? 'border-[#e07c24] bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10'
                      : 'border-[#e07c24]/20 hover:border-[#e07c24] bg-gradient-to-r from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e]'
                      }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                            {mantra.transliteration}
                          </p>
                          <Badge variant="outline" className="text-xs border-[#e07c24]/30">
                            {mantra.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] line-clamp-2">
                          {mantra.meaning}
                        </p>
                      </div>
                      {selectedMantra === mantra.id && (
                        <CheckCircle2Icon className="w-5 h-5 text-[#e07c24] flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Your Practice Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20 text-center">
                  <div className="text-4xl font-bold text-[#e07c24] mb-2">
                    {getTotalChants()}
                  </div>
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                    Total Chants
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20 text-center">
                  <div className="text-4xl font-bold text-[#e07c24] mb-2">
                    {getStreakDays()}
                  </div>
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                    Day Streak
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20 text-center">
                  <div className="text-4xl font-bold text-[#e07c24] mb-2">
                    {Object.keys(history).length}
                  </div>
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                    Practice Days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
