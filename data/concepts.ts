import { Concept } from "@/types"

export const CONCEPTS: Concept[] = [
  {
    id: 'c-1',
    name: 'Brahman',
    sanskritName: 'ब्रह्मन्',
    shortDescription: 'The Ultimate Reality, formless, infinite, and changeless.',
    fullDescription: 'Brahman is the non-dual reality, the substratum of the universe. It is Sat-Chit-Ananda (Existence-Consciousness-Bliss). It is not a God in the sky, but the very essence of existence itself, from which everything emerges and into which everything merges.',
    keyPoints: [
      'Nirguna Brahman: The absolute, attribute-less reality.',
      'Saguna Brahman: The same reality engaged in creation (God/Ishvara).',
      'Sat-Chit-Ananda: Its nature is Existence, Consciousness, and Bliss.'
    ],
    scripturalReferences: [
      {
        source: 'Chandogya Upanishad',
        reference: '3.14.1',
        quote: 'Sarvam Khalvidam Brahma (All this is verily Brahman)'
      }
    ],
    relatedConcepts: ['c-2', 'c-3', 'c-4'],
    academicSources: [],
    slug: 'brahman'
  },
  {
    id: 'c-2',
    name: 'Atman',
    sanskritName: 'आत्मन्',
    shortDescription: 'The True Self, identical to Brahman, distinct from the body-mind.',
    fullDescription: 'Atman is the pure consciousness that witnesses the waking, dreaming, and deep sleep states. It is distinct from the physical body, the mind, and the ego. Advaita asserts "Ayam Atma Brahma" - this Self is Brahman.',
    keyPoints: [
      'Distinct from the three bodies (gross, subtle, causal).',
      'The "Witness" (Sakshi) of all experiences.',
      'Identical to Brahman in essence.'
    ],
    scripturalReferences: [
      {
        source: 'Chandogya Upanishad',
        reference: '6.8.7',
        quote: 'Tat Tvam Asi (That Thou Art)'
      }
    ],
    relatedConcepts: ['c-1', 'c-5', 'c-6'],
    academicSources: [],
    slug: 'atman'
  },
  {
    id: 'c-3',
    name: 'Maya',
    sanskritName: 'माया',
    shortDescription: 'The cosmic illusion or power of Brahman that projects the universe.',
    fullDescription: 'Maya is the mysterious power that makes the One appear as the Many. It veils the Truth (Avarana Shakti) and projects the false world of names and forms (Vikshepa Shakti). It is neither real (sat) nor unreal (asat), but inexplicable (anirvachaniya).',
    keyPoints: [
      'Avarana Shakti: The power to conceal the truth.',
      'Vikshepa Shakti: The power to project the illusion.',
      'Anirvachaniya: Indescribable as either real or unreal.'
    ],
    scripturalReferences: [
      {
        source: 'Rig Veda / Brihadaranyaka',
        reference: '2.5.19',
        quote: 'Indro mayabhih puru-rupa iyate (The Lord assumes many forms through Maya)'
      }
    ],
    relatedConcepts: ['c-1', 'c-5'],
    academicSources: [],
    slug: 'maya'
  },
  {
    id: 'c-4',
    name: 'Moksha',
    sanskritName: 'मोक्ष',
    shortDescription: 'Liberation from the cycle of birth and death (Samsara).',
    fullDescription: 'Moksha is not a place you go to after death, but the realization of one\'s true nature as Brahman. It is the removal of ignorance (Avidya). Once realized, "the knot of the heart is broken, and all doubts are dispelled."',
    keyPoints: [
      'The ultimate goal of human life (Paramapurushartha).',
      'Freedom from the cycle of Samsara.',
      'Attained through Self-Knowledge (Jnana).'
    ],
    scripturalReferences: [
      {
        source: 'Mundaka Upanishad',
        reference: '3.2.9',
        quote: 'Brahmavid Brahmaiva Bhavati (The knower of Brahman becomes Brahman)'
      }
    ],
    relatedConcepts: ['c-1', 'c-2', 'c-5'],
    academicSources: [],
    slug: 'moksha'
  },
  {
    id: 'c-5',
    name: 'Jiva',
    sanskritName: 'जीव',
    shortDescription: 'The individual sentient being.',
    fullDescription: 'The Jiva is Brahman identified with the body and mind. Due to ignorance, the Jiva thinks, "I am the doer, I am the enjoyer." Advaita teaches that the Jiva is essentially Brahman, limited only by the Upadhis (limitations).',
    keyPoints: [
      'Individual soul associated with ignorance (Avidya).',
      'Subject to the laws of Karma and Samsara.',
      'Essentially non-different from Brahman.'
    ],
    scripturalReferences: [],
    relatedConcepts: ['c-2', 'c-4', 'c-6'],
    academicSources: [],
    slug: 'jiva'
  },
  {
    id: 'c-6',
    name: 'Neti Neti',
    sanskritName: 'नेति नेति',
    shortDescription: 'Not this, not this. The method of negation.',
    fullDescription: 'The analytical process of negating everything that is objectifiable (body, mind, senses, world) to arrive at the subject (Consciousness) which cannot be negated.',
    keyPoints: [
      'Method of negation to remove superimpositions.',
      'Used to transcend identification with the non-Self.',
      'Leads to the realization of the absolute Self.'
    ],
    scripturalReferences: [
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '2.3.6',
        quote: 'Neti neti (Not this, not this)'
      }
    ],
    relatedConcepts: ['c-1', 'c-2'],
    academicSources: [],
    slug: 'neti-neti'
  }
];
