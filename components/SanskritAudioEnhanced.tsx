"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  PlayIcon,
  PauseIcon,
  Volume2Icon,
  VolumeXIcon,
  DownloadIcon,
  ExternalLinkIcon,
  InfoIcon
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { getAudioMetadata } from "@/data/audio-config"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SanskritAudioEnhancedProps {
  text: string
  transliteration: string
  textId: 'bhaja-govindam' | 'atma-bodha' | 'vivekachudamani'
  verseNumber: number
  compact?: boolean
}

type AudioMode = 'authentic' | 'tts' | 'unavailable'

export default function SanskritAudioEnhanced({
  text,
  transliteration,
  textId,
  verseNumber,
  compact = false
}: SanskritAudioEnhancedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [rate, setRate] = useState(0.8) // Slower for learning
  const [volume, setVolume] = useState(1.0)
  const [audioMode, setAudioMode] = useState<AudioMode>('unavailable')
  const [ttsSupported, setTtsSupported] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const metadata = getAudioMetadata(textId, verseNumber)

  useEffect(() => {
    // Check if browser supports speech synthesis for TTS fallback
    setTtsSupported('speechSynthesis' in window)

    // Determine audio mode
    if (metadata?.hasAudio) {
      setAudioMode('authentic')
    } else if ('speechSynthesis' in window) {
      setAudioMode('tts')
    } else {
      setAudioMode('unavailable')
    }
  }, [metadata])

  // ============ AUTHENTIC AUDIO HANDLERS ============

  const playAuthenticAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
      setIsPaused(false)
    }
  }

  const pauseAuthenticAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      setIsPaused(true)
    }
  }

  const stopAuthenticAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setIsPaused(false)
      setCurrentTime(0)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setIsPaused(false)
    setCurrentTime(0)
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleRateChange = (value: number[]) => {
    const newRate = value[0]
    setRate(newRate)
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate
    }
  }

  const handleSeek = (value: number[]) => {
    const seekTime = value[0]
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
  }

  const downloadAudio = () => {
    if (metadata?.audioUrl) {
      const link = document.createElement('a')
      link.href = metadata.audioUrl
      link.download = `${textId}-verse-${verseNumber}.mp3`
      link.click()
    }
  }

  // ============ TTS HANDLERS ============

  const speakWithTTS = () => {
    if (!ttsSupported) return

    window.speechSynthesis.cancel()

    // Enhanced transliteration for better pronunciation
    const enhancedText = transliteration
      .replace(/ḥ/g, 'ha')  // Visarga
      .replace(/ṁ/g, 'm')   // Anusvara
      .replace(/ṃ/g, 'm')   // Anusvara variant
      .replace(/ṅ/g, 'ng')  // Velar nasal
      .replace(/ñ/g, 'ny')  // Palatal nasal
      .replace(/ṭ/g, 't')   // Retroflex t
      .replace(/ḍ/g, 'd')   // Retroflex d
      .replace(/ṇ/g, 'n')   // Retroflex n
      .replace(/ś/g, 'sh')  // Palatal s
      .replace(/ṣ/g, 'sh')  // Retroflex s
      .replace(/ṛ/g, 'ri')  // Vocalic r
      .replace(/ā/g, 'aa')  // Long a
      .replace(/ī/g, 'ee')  // Long i
      .replace(/ū/g, 'oo')  // Long u

    const utterance = new SpeechSynthesisUtterance(enhancedText)

    // Try to find the best available voice
    const voices = window.speechSynthesis.getVoices()
    const preferredVoices = [
      voices.find(v => v.name.includes('Google') && v.lang.includes('hi')),
      voices.find(v => v.lang.includes('hi-IN')),
      voices.find(v => v.lang.includes('sa')),
      voices.find(v => v.lang.includes('IN')),
      voices.find(v => v.name.includes('Lekha')), // Indian English
    ].filter(Boolean)

    if (preferredVoices[0]) {
      utterance.voice = preferredVoices[0]
    }

    utterance.rate = rate
    utterance.pitch = 1.0
    utterance.volume = volume

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

  const pauseTTS = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setIsPaused(true)
      setIsPlaying(false)
    }
  }

  const resumeTTS = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
      setIsPlaying(true)
    }
  }

  const stopTTS = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
  }

  // ============ UNIFIED HANDLERS ============

  const play = () => {
    if (audioMode === 'authentic') {
      playAuthenticAudio()
    } else if (audioMode === 'tts') {
      speakWithTTS()
    }
  }

  const pause = () => {
    if (audioMode === 'authentic') {
      pauseAuthenticAudio()
    } else if (audioMode === 'tts') {
      pauseTTS()
    }
  }

  const resume = () => {
    if (audioMode === 'authentic') {
      playAuthenticAudio()
    } else if (audioMode === 'tts') {
      resumeTTS()
    }
  }

  const stop = () => {
    if (audioMode === 'authentic') {
      stopAuthenticAudio()
    } else if (audioMode === 'tts') {
      stopTTS()
    }
  }

  const toggleMute = () => {
    if (volume > 0) {
      handleVolumeChange([0])
    } else {
      handleVolumeChange([1.0])
    }
  }

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // ============ RENDER HELPERS ============

  const renderAudioBadge = () => {
    if (audioMode === 'authentic') {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className="bg-green-600 text-white text-xs">
                ✓ Authentic Recording
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-xs">
                {metadata?.reciter && <p>Reciter: {metadata.reciter}</p>}
                {metadata?.source && <p>Source: {metadata.source}</p>}
                <p className="text-green-400 mt-1">High-quality authentic Sanskrit pronunciation</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    } else if (audioMode === 'tts') {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="border-yellow-600 text-yellow-600 text-xs">
                <InfoIcon className="w-3 h-3 mr-1" />
                Computer Generated
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs max-w-xs">
                This is computer-generated pronunciation using text-to-speech.
                For authentic recitation, consult a Sanskrit teacher or seek authentic recordings.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }
    return null
  }

  const renderExternalLinks = () => {
    if (audioMode === 'tts' && !compact) {
      return (
        <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] space-y-1">
          <p className="font-semibold">Find authentic recordings:</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://shlokam.org/bhajagovindamall/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#e07c24] hover:underline"
            >
              Shlokam.org
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
            <a
              href="https://www.chinmayapublications.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#e07c24] hover:underline"
            >
              Chinmaya Publications
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          </div>
        </div>
      )
    }
    return null
  }

  // ============ COMPACT MODE ============

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={isPlaying ? pause : (isPaused ? resume : play)}
          disabled={audioMode === 'unavailable'}
          className="border-[#e07c24] text-[#e07c24] hover:bg-[#e07c24] hover:text-white"
          title={audioMode === 'authentic' ? 'Play authentic recording' : 'Play computer-generated pronunciation'}
        >
          {isPlaying ? (
            <PauseIcon className="w-4 h-4" />
          ) : (
            <PlayIcon className="w-4 h-4" />
          )}
        </Button>
        {renderAudioBadge()}
      </div>
    )
  }

  // ============ FULL MODE ============

  if (audioMode === 'unavailable') {
    return (
      <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Audio playback not supported in this browser
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3 p-4 rounded-lg bg-[#f7f3e9] dark:bg-[#1a1814] border border-[#e07c24]/20">
      {/* Hidden audio element for authentic recordings */}
      {audioMode === 'authentic' && metadata?.audioUrl && (
        <audio
          ref={audioRef}
          src={metadata.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          preload="metadata"
        />
      )}

      {/* Status Badge */}
      <div className="flex items-center justify-between">
        {renderAudioBadge()}
        {audioMode === 'authentic' && metadata?.audioUrl && (
          <Button
            variant="ghost"
            size="sm"
            onClick={downloadAudio}
            className="text-[#e07c24] hover:text-[#c06a1f]"
            title="Download audio"
          >
            <DownloadIcon className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Progress Bar (only for authentic audio) */}
      {audioMode === 'authentic' && duration > 0 && (
        <div className="space-y-1">
          <Slider
            value={[currentTime]}
            onValueChange={handleSeek}
            min={0}
            max={duration}
            step={0.1}
            className="flex-1"
          />
          <div className="flex justify-between text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      )}

      {/* Playback Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={isPlaying ? pause : (isPaused ? resume : play)}
          className="border-[#e07c24] text-[#e07c24] hover:bg-[#e07c24] hover:text-white"
        >
          {isPlaying ? (
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
              Play
            </>
          )}
        </Button>

        {(isPlaying || isPaused) && (
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
          {volume === 0 ? (
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

      {/* Volume Control (only for authentic audio) */}
      {audioMode === 'authentic' && (
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] whitespace-nowrap">
            Volume
          </span>
          <Slider
            value={[volume]}
            onValueChange={handleVolumeChange}
            min={0}
            max={1}
            step={0.1}
            className="flex-1"
          />
        </div>
      )}

      {/* External Links (for TTS mode) */}
      {renderExternalLinks()}
    </div>
  )
}
