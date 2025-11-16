// Advaita Vedanta Philosophical Concepts
// Based on authentic sources: Stanford Encyclopedia, Internet Encyclopedia of Philosophy, academic papers

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

export const concepts: Concept[] = [
  {
    id: 'atman',
    name: 'Atman',
    sanskritName: 'आत्मन्',
    shortDescription: 'The Individual Self or Soul',
    fullDescription: 'Atman is the eternal, innermost essence of every individual being. In Advaita Vedanta, Atman is understood as pure consciousness, beyond the body, mind, and intellect. It is the witnessing awareness that remains unchanged through all experiences of waking, dream, and deep sleep states. Shankaracharya teaches that Atman is non-different from Brahman - the ultimate realization that "I am That" (Tat Tvam Asi).',
    keyPoints: [
      'Atman is pure consciousness, the true Self beyond body and mind',
      'It is eternal, unchanging, and the witness of all experiences',
      'Atman is identical with Brahman (non-dualism)',
      'It is self-luminous - consciousness revealing itself',
      'Realizing the Atman is the goal of Advaita Vedanta',
      'The jivatman (individual soul) is Atman identified with limiting adjuncts (upadhis)'
    ],
    scripturalReferences: [
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '4.4.5',
        quote: 'This Atman is Brahman - Ayam Atma Brahma'
      },
      {
        source: 'Chandogya Upanishad',
        reference: '6.8.7',
        quote: 'Tat Tvam Asi - That Thou Art'
      },
      {
        source: 'Mandukya Upanishad',
        reference: '2',
        quote: 'All this is verily Brahman. This Atman is Brahman'
      }
    ],
    relatedConcepts: ['brahman', 'maya', 'moksha'],
    academicSources: [
      {
        title: 'Advaita Vedanta',
        author: 'Internet Encyclopedia of Philosophy',
        url: 'https://iep.utm.edu/advaita-vedanta/'
      },
      {
        title: 'Śaṅkara - Stanford Encyclopedia of Philosophy',
        author: 'Stanford Encyclopedia',
        url: 'https://plato.stanford.edu/entries/shankara/'
      }
    ]
  },
  {
    id: 'brahman',
    name: 'Brahman',
    sanskritName: 'ब्रह्मन्',
    shortDescription: 'The Ultimate Reality, Universal Consciousness',
    fullDescription: 'Brahman is the fundamental, absolute reality underlying all existence. It is described as Sat-Chit-Ananda (Existence-Consciousness-Bliss) and is infinite, eternal, and unchanging. In Advaita Vedanta, Brahman is the non-dual reality - there is nothing other than Brahman. The phenomenal world is a superimposition on Brahman, like waves on the ocean. Brahman is beyond all attributes (nirguna) in its highest sense, though it appears with attributes (saguna) when viewed through ignorance.',
    keyPoints: [
      'Brahman is Sat-Chit-Ananda: Pure Existence, Pure Consciousness, Pure Bliss',
      'It is infinite (Ananta) and eternal, beyond time and space',
      'Nirguna Brahman: attributeless, formless absolute reality',
      'Saguna Brahman: Brahman with attributes, as conceived by devotees (Ishvara)',
      'The phenomenal world is a superimposition on Brahman, like a rope mistaken for snake',
      'Brahman is non-dual (Advaita) - there is no second reality',
      'It is both the material and efficient cause of the universe'
    ],
    scripturalReferences: [
      {
        source: 'Taittiriya Upanishad',
        reference: '2.1.1',
        quote: 'Brahman is Existence, Knowledge, Infinity - Satyam Jnanam Anantam Brahma'
      },
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '3.9.28',
        quote: 'This Brahman is without prior and without posterior, without interior and without exterior'
      },
      {
        source: 'Mundaka Upanishad',
        reference: '1.1.6',
        quote: 'From Brahman emerges life, mind, all sense organs, space, air, fire, water, earth'
      }
    ],
    relatedConcepts: ['atman', 'maya', 'moksha', 'neti-neti'],
    academicSources: [
      {
        title: 'Sankara\'s concept of Brahman',
        author: 'JETIR Research Paper',
        url: 'https://www.jetir.org/papers/JETIR2112468.pdf'
      },
      {
        title: 'The Advaita Vedanta philosophy',
        author: 'Multi-Subject Journal',
        url: 'https://www.multisubjectjournal.com/article/229/5-1-12-255.pdf'
      }
    ]
  },
  {
    id: 'maya',
    name: 'Maya',
    sanskritName: 'माया',
    shortDescription: 'The Cosmic Illusion, Creative Power',
    fullDescription: 'Maya is the mysterious power that creates the appearance of the phenomenal world. It is neither completely real nor completely unreal - it is described as anirvachaniya (indescribable). Maya is the force that makes the one Brahman appear as the many, and the eternal appear as temporal. It operates through the three gunas (sattva, rajas, tamas) and creates the entire manifest universe. Like a magician\'s illusion, Maya makes us perceive multiplicity where there is only unity, and change where there is only the changeless Brahman.',
    keyPoints: [
      'Maya is the cosmic creative power that manifests the phenomenal world',
      'It is neither real (sat) nor unreal (asat) - it is mithya (dependent reality)',
      'Maya operates through three gunas: sattva (purity), rajas (activity), tamas (inertia)',
      'It creates the illusion of multiplicity and separateness',
      'Maya is beginningless (anadi) but ends with Self-knowledge',
      'The world created by Maya is like a dream or mirage - it appears real but is not ultimately so',
      'Maya has two powers: veiling (avarana) and projecting (vikshepa)'
    ],
    scripturalReferences: [
      {
        source: 'Svetasvatara Upanishad',
        reference: '4.9-10',
        quote: 'Know Maya to be Prakriti (Nature) and the wielder of Maya to be the great Lord'
      },
      {
        source: 'Vivekachudamani',
        reference: 'Verse 110',
        quote: 'The universe exists in the Supreme Brahman like the foam in the ocean'
      },
      {
        source: 'Bhagavad Gita',
        reference: '7.14',
        quote: 'This divine Maya of Mine, made up of the three gunas, is difficult to overcome'
      }
    ],
    relatedConcepts: ['brahman', 'atman', 'moksha'],
    academicSources: [
      {
        title: 'Maya (religion) - Wikipedia',
        author: 'Multiple scholars',
        url: 'https://en.wikipedia.org/wiki/Maya_(religion)'
      },
      {
        title: 'The spiritual philosophy of Advaita',
        author: 'PMC (PubMed Central)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10956581/'
      }
    ]
  },
  {
    id: 'moksha',
    name: 'Moksha',
    sanskritName: 'मोक्ष',
    shortDescription: 'Liberation from the Cycle of Birth and Death',
    fullDescription: 'Moksha is the ultimate goal of human existence - liberation from samsara (the cycle of birth, death, and rebirth). In Advaita Vedanta, moksha is not a state to be attained but the recognition of what already is - the realization that the individual self (Atman) is non-different from the universal consciousness (Brahman). It is the cessation of ignorance (avidya) and the dawn of Self-knowledge (atma-jnana). Moksha is characterized by freedom from all suffering, limitations, and identification with the body-mind complex.',
    keyPoints: [
      'Moksha is liberation from samsara - the cycle of birth and death',
      'In Advaita, moksha is realizing one\'s true nature as Brahman',
      'It is attained through jnana (knowledge), not through karma (actions) or bhakti (devotion) alone',
      'Moksha is not a place to go or a state to achieve - it is recognizing what always is',
      'The liberated one (jivanmukta) lives free while still in the body',
      'Videhamukti is final liberation after death of the physical body',
      'Moksha is described as sat-chit-ananda - eternal existence, consciousness, and bliss'
    ],
    scripturalReferences: [
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '4.4.6-7',
        quote: 'The knower of Brahman becomes Brahman indeed'
      },
      {
        source: 'Mundaka Upanishad',
        reference: '3.2.9',
        quote: 'The knot of the heart is cut, all doubts are resolved, and all karma cease when He is seen'
      },
      {
        source: 'Bhagavad Gita',
        reference: '18.55',
        quote: 'Through devotion he comes to know Me in truth, who and what I am; having known Me in truth, he enters into Me forthwith'
      }
    ],
    relatedConcepts: ['atman', 'brahman', 'maya', 'neti-neti'],
    academicSources: [
      {
        title: 'An Investigation of Moksha in the Advaita Vedanta of Shankara and Gaudapada',
        author: 'ResearchGate',
        url: 'https://www.researchgate.net/publication/262829005'
      },
      {
        title: 'The Path to Liberation in Advaita Vedanta',
        author: 'Philosophy Institute',
        url: 'https://philosophy.institute/indian-philosophy/advaita-vedanta-path-to-liberation-knowledge/'
      }
    ]
  },
  {
    id: 'neti-neti',
    name: 'Neti Neti',
    sanskritName: 'नेति नेति',
    shortDescription: 'Not This, Not This - Method of Negation',
    fullDescription: 'Neti Neti is a fundamental method of Vedantic inquiry described in the Upanishads, particularly the Brihadaranyaka Upanishad. It means "not this, not this" and is a process of systematic negation used to discriminate between the Self (Atman) and the not-Self (anatman). By negating everything that can be objectified - "I am not the body, not the mind, not the intellect, not the emotions" - the seeker arrives at the pure witnessing consciousness that cannot be negated because it is the subject of all experience. This is apophatic theology - defining the ultimate reality by what it is not.',
    keyPoints: [
      'Neti Neti means "not this, not this" - a method of systematic negation',
      'First mentioned in Brihadaranyaka Upanishad 2.3.6 as the best description of Brahman',
      'Used to discriminate between the eternal Self and temporary modifications',
      'Process: negate body, senses, mind, intellect, ego - what remains is pure consciousness',
      'The purpose is to remove obstructions produced by ignorance',
      'Adi Shankara extensively used and explained this method in his commentaries',
      'It leads to the direct realization: "I am the witness, the pure consciousness"'
    ],
    scripturalReferences: [
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '2.3.6',
        quote: 'This Self is described as "neti, neti" (not this, not this). It is incomprehensible, indestructible, unattached, unfettered, does not suffer, does not fail'
      },
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '3.9.26',
        quote: 'By what means can the knower be known? The Self is described as "not this, not this"'
      },
      {
        source: 'Taittiriya Upanishad',
        reference: '2.9.1',
        quote: 'Words and mind return, being unable to reach Brahman'
      }
    ],
    relatedConcepts: ['atman', 'brahman', 'moksha', 'viveka'],
    academicSources: [
      {
        title: 'Neti neti - Wikipedia',
        author: 'Multiple scholars',
        url: 'https://en.wikipedia.org/wiki/Neti_neti'
      },
      {
        title: 'Neti-neti or Apophatic Theology',
        author: 'Gold Coast Hindu',
        url: 'https://goldcoasthindu.wordpress.com/2021/02/20/neti-neti-or-apophatic-theology-knowledge-obtained-by-negation/'
      }
    ]
  },
  {
    id: 'viveka',
    name: 'Viveka',
    sanskritName: 'विवेक',
    shortDescription: 'Discrimination between Real and Unreal',
    fullDescription: 'Viveka is the faculty of discrimination - the ability to distinguish between the eternal (nitya) and the temporary (anitya), between the Self (Atman) and the not-Self (anatman), between what is real (satya) and what is apparently real (mithya). It is considered one of the four essential qualifications (sadhana chatushtaya) for a spiritual seeker. Viveka is not mere intellectual understanding but a penetrating insight that sees through appearances to reality.',
    keyPoints: [
      'Viveka means discrimination or discernment',
      'Primary discrimination: between eternal Brahman and temporary world',
      'Listed as first qualification in Vivekachudamani (Crest Jewel of Discrimination)',
      'Requires discrimination between: Self/non-Self, permanent/impermanent, joy/pleasure',
      'Viveka leads to vairagya (dispassion) naturally',
      'Must be cultivated through study, reflection, and meditation',
      'The classic example: discriminating between rope and snake, gold and ornament'
    ],
    scripturalReferences: [
      {
        source: 'Vivekachudamani',
        reference: 'Verse 1',
        quote: 'Among all means of liberation, devotion is supreme. To seek earnestly to know one\'s real nature is said to be devotion'
      },
      {
        source: 'Vivekachudamani',
        reference: 'Verse 20',
        quote: 'Discrimination between the Self and non-Self, is most difficult to attain without Divine grace'
      },
      {
        source: 'Atma Bodha',
        reference: 'Verse 8',
        quote: 'Discrimination between Self and non-Self must always be practiced'
      }
    ],
    relatedConcepts: ['neti-neti', 'vairagya', 'moksha'],
    academicSources: [
      {
        title: 'The Basic Concepts of Advaita Vedanta',
        author: 'Indian Philosophy Portal',
        url: 'http://indianphilosophy.50webs.com/advaita.htm'
      }
    ]
  }
]
