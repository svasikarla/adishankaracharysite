// Type definitions for data files

export interface BhajaGovindamVerse {
  number: number
  sanskrit: string
  transliteration: string
  translation: string
  commentary: string
  category: 'main' | 'dvadasha' | 'charpata'
}

export interface AtmaBodhaVerse {
  number: number
  sanskrit: string
  transliteration: string
  translation: string
  commentary: string
}

export interface Concept {
  id: string
  name: string
  sanskritName: string
  shortDescription: string
  fullDescription: string
  keyPoints: string[]
  scripturalReferences: {
    source: string
    reference: string
    quote: string
  }[]
  relatedConcepts: string[]
  academicSources: {
    title: string
    author: string
    url?: string
  }[]
}

export interface Matha {
  id: string
  name: string
  sanskrit: string
  direction: 'North' | 'South' | 'East' | 'West'
  location: {
    city: string
    state: string
    region: string
  }
  coordinates?: {
    lat: number
    lng: number
  }
  established: string
  veda: string
  mahavakya: string
  mahavahyaMeaning: string
  firstAcharya: string
  presidingDeity: string
  description: string
  significance: string[]
  website?: string
  historicalBackground: string
  currentActivities: string[]
}

export interface Teacher {
  id: string
  name: string
  title?: string
  lifespan?: string
  tradition: string
  description: string
  specialization: string[]
  teachingStyle: string
  majorWorks?: string[]
  onlineResources: {
    type: 'website' | 'youtube' | 'podcast' | 'audio' | 'app'
    name: string
    url: string
    description: string
  }[]
  legacy?: string
  imageUrl?: string
}

export interface DigitalArchive {
  id: string
  name: string
  description: string
  type: 'archive' | 'website' | 'library' | 'repository'
  url: string
  contents: string[]
  accessType: 'free' | 'partial' | 'subscription'
  languages: string[]
  specialFeatures?: string[]
}

export interface AuthenticText {
  id: string
  title: string
  author: string
  category: 'commentary' | 'prakarana' | 'stotra' | 'upanishad'
  authenticity: 'confirmed' | 'disputed' | 'attributed'
  translations: {
    translator: string
    year?: number
    publisher?: string
    quality: 'highly-recommended' | 'recommended' | 'available'
    url?: string
    notes?: string
  }[]
  description: string
}

export interface Organization {
  id: string
  name: string
  founded: number | string
  founder: string
  type: 'traditional-matha' | 'mission' | 'gurukulam' | 'society'
  description: string
  focus: string[]
  website?: string
  locations?: string[]
  resources?: string[]
}
