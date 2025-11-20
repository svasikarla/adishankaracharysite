/**
 * Audio Configuration for Sanskrit Verses
 *
 * This file tracks which verses have authentic pre-recorded audio available.
 * When audio is not available, the system falls back to browser TTS.
 *
 * Audio File Organization:
 * - public/audio/bhaja-govindam/verse-1.mp3
 * - public/audio/atma-bodha/verse-1.mp3
 * - public/audio/vivekachudamani/verse-1.mp3
 */

export interface AudioMetadata {
  verseNumber: number
  hasAudio: boolean
  audioUrl?: string
  source?: string // e.g., "Shlokam.org", "Chinmaya Publications"
  reciter?: string // e.g., "MS Subbulakshmi", "Swami Chinmayananda"
  duration?: number // in seconds
  quality?: 'low' | 'medium' | 'high' | 'studio'
}

export interface TextAudioConfig {
  textId: string
  textName: string
  audioBasePath: string
  verses: AudioMetadata[]
  defaultSource?: string
}

/**
 * Bhaja Govindam Audio Configuration
 * 33 verses total
 */
export const bhajaGovindamAudio: TextAudioConfig = {
  textId: 'bhaja-govindam',
  textName: 'Bhaja Govindam',
  audioBasePath: '/audio/bhaja-govindam',
  defaultSource: 'Shlokam.org / MS Subbulakshmi',
  verses: [
    // Currently no audio files - all will use TTS fallback
    // When audio is added, update hasAudio to true and provide audioUrl
    { verseNumber: 1, hasAudio: false },
    { verseNumber: 2, hasAudio: false },
    { verseNumber: 3, hasAudio: false },
    { verseNumber: 4, hasAudio: false },
    { verseNumber: 5, hasAudio: false },
    { verseNumber: 6, hasAudio: false },
    { verseNumber: 7, hasAudio: false },
    { verseNumber: 8, hasAudio: false },
    { verseNumber: 9, hasAudio: false },
    { verseNumber: 10, hasAudio: false },
    { verseNumber: 11, hasAudio: false },
    { verseNumber: 12, hasAudio: false },
    { verseNumber: 13, hasAudio: false },
    { verseNumber: 14, hasAudio: false },
    { verseNumber: 15, hasAudio: false },
    { verseNumber: 16, hasAudio: false },
    { verseNumber: 17, hasAudio: false },
    { verseNumber: 18, hasAudio: false },
    { verseNumber: 19, hasAudio: false },
    { verseNumber: 20, hasAudio: false },
    { verseNumber: 21, hasAudio: false },
    { verseNumber: 22, hasAudio: false },
    { verseNumber: 23, hasAudio: false },
    { verseNumber: 24, hasAudio: false },
    { verseNumber: 25, hasAudio: false },
    { verseNumber: 26, hasAudio: false },
    { verseNumber: 27, hasAudio: false },
    { verseNumber: 28, hasAudio: false },
    { verseNumber: 29, hasAudio: false },
    { verseNumber: 30, hasAudio: false },
    { verseNumber: 31, hasAudio: false },
    { verseNumber: 32, hasAudio: false },
    { verseNumber: 33, hasAudio: false },
  ]
}

/**
 * Atma Bodha Audio Configuration
 * 68 verses total
 */
export const atmaBodhaAudio: TextAudioConfig = {
  textId: 'atma-bodha',
  textName: 'Atma Bodha',
  audioBasePath: '/audio/atma-bodha',
  verses: Array.from({ length: 68 }, (_, i) => ({
    verseNumber: i + 1,
    hasAudio: false
  }))
}

/**
 * Vivekachudamani Audio Configuration
 * Currently 15 verses available, eventually 581 total
 */
export const vivekachudamaniAudio: TextAudioConfig = {
  textId: 'vivekachudamani',
  textName: 'Vivekachudamani',
  audioBasePath: '/audio/vivekachudamani',
  defaultSource: 'Chinmaya Publications',
  verses: Array.from({ length: 15 }, (_, i) => ({
    verseNumber: i + 1,
    hasAudio: false
  }))
}

/**
 * Get audio metadata for a specific verse
 */
export function getAudioMetadata(
  textId: 'bhaja-govindam' | 'atma-bodha' | 'vivekachudamani',
  verseNumber: number
): AudioMetadata | null {
  const configs = {
    'bhaja-govindam': bhajaGovindamAudio,
    'atma-bodha': atmaBodhaAudio,
    'vivekachudamani': vivekachudamaniAudio
  }

  const config = configs[textId]
  if (!config) return null

  const metadata = config.verses.find(v => v.verseNumber === verseNumber)
  if (!metadata) return null

  // Generate audio URL if not explicitly provided
  if (metadata.hasAudio && !metadata.audioUrl) {
    metadata.audioUrl = `${config.audioBasePath}/verse-${verseNumber}.mp3`
  }

  return metadata
}

/**
 * Check if audio exists for a verse
 */
export function hasAudioForVerse(
  textId: 'bhaja-govindam' | 'atma-bodha' | 'vivekachudamani',
  verseNumber: number
): boolean {
  const metadata = getAudioMetadata(textId, verseNumber)
  return metadata?.hasAudio ?? false
}

/**
 * Get all verses with available audio for a text
 */
export function getVersesWithAudio(
  textId: 'bhaja-govindam' | 'atma-bodha' | 'vivekachudamani'
): AudioMetadata[] {
  const configs = {
    'bhaja-govindam': bhajaGovindamAudio,
    'atma-bodha': atmaBodhaAudio,
    'vivekachudamani': vivekachudamaniAudio
  }

  const config = configs[textId]
  return config?.verses.filter(v => v.hasAudio) ?? []
}

/**
 * Get audio statistics for a text
 */
export function getAudioStats(textId: 'bhaja-govindam' | 'atma-bodha' | 'vivekachudamani') {
  const configs = {
    'bhaja-govindam': bhajaGovindamAudio,
    'atma-bodha': atmaBodhaAudio,
    'vivekachudamani': vivekachudamaniAudio
  }

  const config = configs[textId]
  if (!config) return null

  const totalVerses = config.verses.length
  const versesWithAudio = config.verses.filter(v => v.hasAudio).length
  const percentageComplete = (versesWithAudio / totalVerses) * 100

  return {
    textName: config.textName,
    totalVerses,
    versesWithAudio,
    percentageComplete: Math.round(percentageComplete),
    defaultSource: config.defaultSource
  }
}
