"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface SanskritAudioProps {
  text: string
  transliteration: string
  compact?: boolean
}

export default function SanskritAudio({ text, transliteration, compact = false }: SanskritAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [rate, setRate] = useState(0.7) // Slower for clarity
  const [isMuted, setIsMuted] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if browser supports speech synthesis
    setIsSupported('speechSynthesis' in window)
  }, [])

  const speak = () => {
    if (!isSupported) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    // Use transliteration for better pronunciation
    const utterance = new SpeechSynthesisUtterance(transliteration)

    // Try to use Hindi/Sanskrit voice if available
    const voices = window.speechSynthesis.getVoices()
    const hindiVoice = voices.find(voice =>
      voice.lang.includes('hi') ||
      voice.lang.includes('sa') ||
      voice.lang.includes('IN')
    )

    if (hindiVoice) {
      utterance.voice = hindiVoice
    }

    utterance.rate = rate
    utterance.pitch = 1.0
    utterance.volume = isMuted ? 0 : 1.0

    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setIsPaused(false)
    }

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event)
      setIsPlaying(false)
      setIsPaused(false)
    }

    window.speechSynthesis.speak(utterance)
  }

  const pause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setIsPaused(true)
    }
  }

  const resume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
    }
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (isPlaying) {
      stop()
    }
  }

  const handleRateChange = (value: number[]) => {
    setRate(value[0])
    if (isPlaying) {
      stop()
    }
  }

  if (!isSupported) {
    return (
      <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] italic">
        Audio playback not supported in this browser
      </div>
    )
  }

  if (compact) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={isPlaying && !isPaused ? (isPaused ? resume : pause) : speak}
        className="border-[#e07c24] text-[#e07c24] hover:bg-[#e07c24] hover:text-white"
        title="Play Sanskrit pronunciation"
      >
        {isPlaying && !isPaused ? (
          <PauseIcon className="w-4 h-4" />
        ) : (
          <PlayIcon className="w-4 h-4" />
        )}
      </Button>
    )
  }

  return (
    <div className="flex flex-col gap-3 p-4 rounded-lg bg-[#f7f3e9] dark:bg-[#1a1814] border border-[#e07c24]/20">
      {/* Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={isPlaying && !isPaused ? pause : (isPaused ? resume : speak)}
          className="border-[#e07c24] text-[#e07c24] hover:bg-[#e07c24] hover:text-white"
        >
          {isPlaying && !isPaused ? (
            <>
              <PauseIcon className="w-4 h-4 mr-2" />
              Pause
            </>
          ) : isPaused ? (
            <>
              <PlayIcon className="w-4 h-4 mr-2" />
              Resume
            </>
          ) : (
            <>
              <PlayIcon className="w-4 h-4 mr-2" />
              Play Sanskrit
            </>
          )}
        </Button>

        {isPlaying && (
          <Button
            variant="outline"
            size="sm"
            onClick={stop}
            className="border-[#e07c24] text-[#e07c24] hover:bg-[#e07c24] hover:text-white"
          >
            Stop
          </Button>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="ml-auto text-[#e07c24]"
        >
          {isMuted ? (
            <VolumeXIcon className="w-4 h-4" />
          ) : (
            <Volume2Icon className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Speed Control */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] whitespace-nowrap">
          Speed: {rate.toFixed(1)}x
        </span>
        <Slider
          value={[rate]}
          onValueChange={handleRateChange}
          min={0.5}
          max={1.5}
          step={0.1}
          className="flex-1"
        />
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] italic">
        ℹ️ Computer-generated pronunciation. For authentic recitation, consult a Sanskrit teacher.
      </div>
    </div>
  )
}
