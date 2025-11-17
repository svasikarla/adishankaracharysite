// Daily Wisdom utility - rotates quotes and verses based on the day
import { bhajaGovindamVerses } from '@/data/bhaja-govindam'
import { atmaBodhaVerses } from '@/data/atma-bodha'

export interface WisdomQuote {
  text: string
  author: string
  source: string
  sanskrit?: string
}

// Collection of inspiring quotes from Adi Shankaracharya's works
const inspirationalQuotes: WisdomQuote[] = [
  {
    text: "Brahman is the only truth, the world is illusion, and there is ultimately no difference between Brahman and individual self.",
    author: "Adi Shankaracharya",
    source: "Vivekachudamani",
    sanskrit: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः"
  },
  {
    text: "The Self is not born, nor does it die. It is eternal, unchanging, and beyond all qualities.",
    author: "Adi Shankaracharya",
    source: "Atma Bodha",
    sanskrit: "न जायते म्रियते वा विपश्चित्"
  },
  {
    text: "Seek Govinda, seek Govinda, seek Govinda, O fool! Rules of grammar will not save you at the time of your death.",
    author: "Adi Shankaracharya",
    source: "Bhaja Govindam",
    sanskrit: "भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते"
  },
  {
    text: "Knowledge alone is the direct means to liberation. As cooking is impossible without fire, so is liberation impossible without Self-knowledge.",
    author: "Adi Shankaracharya",
    source: "Atma Bodha",
    sanskrit: "बोधोऽन्यसाधनेभ्यो हि साक्षान्मोक्षैकसाधनम्"
  },
  {
    text: "The world is unreal like a dream. The wise one who knows this is not deluded.",
    author: "Adi Shankaracharya",
    source: "Vivekachudamani",
    sanskrit: "संसारः स्वप्नतुल्यः"
  },
  {
    text: "You are not the body, nor the mind. You are the eternal, blissful consciousness that witnesses all.",
    author: "Adi Shankaracharya",
    source: "Atma Bodha",
    sanskrit: "नाहं देहो न मे देहो बोधोऽहं"
  },
  {
    text: "He who has discrimination, dispassion, and the qualities of calmness, self-control, and withdrawal, is qualified for Self-knowledge.",
    author: "Adi Shankaracharya",
    source: "Vivekachudamani"
  },
  {
    text: "Time plays with all beings. Life is fleeting. Worship Govinda with a devoted heart.",
    author: "Adi Shankaracharya",
    source: "Bhaja Govindam",
    sanskrit: "कालः क्रीडति गच्छत्यायुः"
  }
]

// Get wisdom for today (rotates daily)
export function getTodaysWisdom(): WisdomQuote {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  const index = dayOfYear % inspirationalQuotes.length
  return inspirationalQuotes[index]
}

// Get verse of the day from Atma Bodha or Bhaja Govindam
export function getVerseOfTheDay() {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)

  // Alternate between the two texts
  const useAtmaBodha = dayOfYear % 2 === 0
  const verses = useAtmaBodha ? atmaBodhaVerses : bhajaGovindamVerses
  const index = Math.floor(dayOfYear / 2) % verses.length

  return {
    ...verses[index],
    source: useAtmaBodha ? 'Atma Bodha' : 'Bhaja Govindam'
  }
}

// Get multiple wisdom quotes for carousel/rotation
export function getWisdomCollection(count: number = 3): WisdomQuote[] {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)

  const quotes: WisdomQuote[] = []
  for (let i = 0; i < count; i++) {
    const index = (dayOfYear + i) % inspirationalQuotes.length
    quotes.push(inspirationalQuotes[index])
  }

  return quotes
}

export { inspirationalQuotes }
