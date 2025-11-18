// Advaita Vedanta Philosophical Concepts
// Based on authentic sources: Stanford Encyclopedia, Internet Encyclopedia of Philosophy, academic papers

import type { Concept } from '@/types'

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
  },
  {
    id: 'vairagya',
    name: 'Vairagya',
    sanskritName: 'वैराग्य',
    shortDescription: 'Dispassion and Detachment from the Unreal',
    fullDescription: 'Vairagya is dispassion or detachment from all worldly objects and pleasures, both seen and unseen (this world and the next). It naturally arises from viveka (discrimination) when one clearly sees that all temporary objects cannot provide lasting happiness. Vairagya is not about forceful renunciation or suppression of desires, but the natural falling away of attachment when one recognizes that true fulfillment lies only in the eternal Self. It is the second of the four qualifications (sadhana chatushtaya) for a spiritual seeker.',
    keyPoints: [
      'Vairagya means dispassion or non-attachment to worldly pleasures',
      'Second qualification in the fourfold path (sadhana chatushtaya)',
      'Arises naturally from viveka (discrimination between real and unreal)',
      'Applies to both visible objects (drishta) and invisible rewards (adrishta/heaven)',
      'Not forceful renunciation but natural falling away of desires',
      'Essential for turning the mind inward toward Self-inquiry',
      'Ranges from mild disinterest to complete detachment (para vairagya)'
    ],
    scripturalReferences: [
      {
        source: 'Vivekachudamani',
        reference: 'Verse 21',
        quote: 'Dispassion (vairagya) is the turning away from things which are seen and heard, such as this world and the next, by constantly seeing their defects'
      },
      {
        source: 'Bhagavad Gita',
        reference: '6.35',
        quote: 'Through practice (abhyasa) and dispassion (vairagya), the mind can be controlled'
      },
      {
        source: 'Atma Bodha',
        reference: 'Verse 2',
        quote: 'For those who desire liberation and practice discrimination and dispassion, knowledge of Atman is like fire to burn away ignorance'
      }
    ],
    relatedConcepts: ['viveka', 'moksha', 'maya'],
    academicSources: [
      {
        title: 'The Four Qualifications in Advaita Vedanta',
        author: 'Vedanta Society',
        url: 'https://www.vedanta.org/what-is-vedanta/the-four-qualifications/'
      },
      {
        title: 'Vairagya in Shankaras Philosophy',
        author: 'Indian Philosophy Research',
        url: 'http://indianphilosophy.50webs.com/advaita.htm'
      }
    ]
  },
  {
    id: 'jnana-yoga',
    name: 'Jnana Yoga',
    sanskritName: 'ज्ञानयोग',
    shortDescription: 'The Path of Knowledge and Self-Inquiry',
    fullDescription: 'Jnana Yoga is the path of knowledge or wisdom leading to Self-realization. It is the direct path taught by Adi Shankaracharya, emphasizing discriminative knowledge (viveka), dispassion (vairagya), and systematic inquiry into the nature of the Self. The practice involves three stages: shravana (hearing the teachings), manana (reflection and reasoning), and nididhyasana (deep meditation). Jnana Yoga is not mere intellectual knowledge but direct, experiential realization of one\'s identity with Brahman. While considered the most direct path, it requires tremendous mental discipline and purity.',
    keyPoints: [
      'Jnana Yoga is the path of knowledge and Self-inquiry',
      'Emphasized as the direct path by Adi Shankaracharya',
      'Three stages: shravana (hearing), manana (reflection), nididhyasana (meditation)',
      'Requires the four qualifications (sadhana chatushtaya)',
      'Not intellectual learning but direct experiential realization',
      'Uses methods like neti-neti (not this, not this) to discriminate Self from non-Self',
      'Culminates in the realization "Aham Brahmasmi" (I am Brahman)'
    ],
    scripturalReferences: [
      {
        source: 'Bhagavad Gita',
        reference: '4.38',
        quote: 'There is nothing in this world as purifying as knowledge. One who is perfected in yoga finds this knowledge within oneself in due course of time'
      },
      {
        source: 'Mundaka Upanishad',
        reference: '1.2.12',
        quote: 'Having examined the worlds won by action, let the seeker of Brahman arrive at detachment. The uncreated cannot be attained by what is created. To know That, approach a guru with humility'
      },
      {
        source: 'Vivekachudamani',
        reference: 'Verse 3',
        quote: 'Of all means of liberation, devotion is supreme. To seek earnestly to know ones real nature is said to be devotion'
      }
    ],
    relatedConcepts: ['viveka', 'vairagya', 'moksha', 'atman', 'brahman'],
    academicSources: [
      {
        title: 'Jnana Yoga - The Path of Knowledge',
        author: 'Swami Vivekananda',
        url: 'https://en.wikisource.org/wiki/Jnana-Yoga'
      },
      {
        title: 'The Three Paths in Hindu Philosophy',
        author: 'Stanford Encyclopedia',
        url: 'https://plato.stanford.edu/entries/shankara/'
      }
    ]
  },
  {
    id: 'karma-yoga',
    name: 'Karma Yoga',
    sanskritName: 'कर्मयोग',
    shortDescription: 'The Path of Selfless Action',
    fullDescription: 'Karma Yoga is the path of selfless action performed without attachment to results. Taught extensively in the Bhagavad Gita and incorporated into Advaita Vedanta by Shankaracharya, it purifies the mind and prepares one for Self-knowledge. The key principle is nishkama karma - action without desire for personal gain. By offering all actions and their results to the Divine (Ishvara), the practitioner transcends ego and develops chitta shuddhi (purity of mind). While Shankaracharya emphasized jnana (knowledge) as the direct means to liberation, he acknowledged karma yoga as essential preparation, especially for those still identified with being a doer.',
    keyPoints: [
      'Karma Yoga is the path of selfless, desireless action',
      'Taught in Bhagavad Gita and incorporated into Advaita by Shankaracharya',
      'Key principle: perform duty without attachment to results',
      'All actions offered to Ishvara (the Divine)',
      'Purifies the mind (chitta shuddhi) and prepares for Self-knowledge',
      'Transcends the ego-sense of being the doer (kartritva)',
      'In Advaita, seen as preparatory to jnana yoga'
    ],
    scripturalReferences: [
      {
        source: 'Bhagavad Gita',
        reference: '2.47',
        quote: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action'
      },
      {
        source: 'Bhagavad Gita',
        reference: '3.19',
        quote: 'Therefore, always perform your duty perfectly, without attachment. By doing work without attachment, one attains the Supreme'
      },
      {
        source: 'Bhagavad Gita',
        reference: '18.46',
        quote: 'By performing ones duties, worshiping the Lord from whom all beings originate, one attains perfection'
      }
    ],
    relatedConcepts: ['jnana-yoga', 'bhakti-yoga', 'maya'],
    academicSources: [
      {
        title: 'Karma Yoga - Swami Vivekananda',
        author: 'Ramakrishna Mission',
        url: 'https://en.wikisource.org/wiki/Karma-Yoga'
      },
      {
        title: 'Shankaras Commentary on Karma Yoga',
        author: 'Advaita Academy',
        url: 'https://www.advaita.org.uk/discourses/bhagavad_gita/gita_intro.htm'
      }
    ]
  },
  {
    id: 'bhakti-yoga',
    name: 'Bhakti Yoga',
    sanskritName: 'भक्तियोग',
    shortDescription: 'The Path of Devotion and Love',
    fullDescription: 'Bhakti Yoga is the path of devotion, love, and surrender to the Divine. While Adi Shankaracharya primarily emphasized jnana (knowledge), he also composed numerous devotional hymns and recognized bhakti as a powerful means of purifying the heart and mind. In the Advaita context, bhakti begins with devotion to Saguna Brahman (God with attributes - Ishvara) and gradually leads to the realization of Nirguna Brahman (attributeless reality). Shankaracharya defined supreme devotion as the intense desire to know one\'s true Self. His hymns to Shiva, Vishnu, and Devi demonstrate the integration of devotion with non-dual wisdom.',
    keyPoints: [
      'Bhakti is the path of devotion, love, and surrender to the Divine',
      'Shankaracharya composed numerous devotional hymns despite emphasis on jnana',
      'In Advaita, bhakti to Saguna Brahman (Ishvara) purifies the mind',
      'Supreme bhakti defined as intense desire to know the Self',
      'Nine forms of bhakti: hearing, singing, remembering, serving, etc.',
      'Devotion removes ego and cultivates humility',
      'Ultimately transcends duality and merges with non-dual realization'
    ],
    scripturalReferences: [
      {
        source: 'Bhagavad Gita',
        reference: '9.34',
        quote: 'Fix your mind on Me, be devoted to Me, worship Me, bow down to Me. Having thus disciplined yourself, with Me as your supreme goal, you will come to Me'
      },
      {
        source: 'Vivekachudamani',
        reference: 'Verse 31',
        quote: 'The supreme devotion (para bhakti) is the seeking of ones own real nature'
      },
      {
        source: 'Svetasvatara Upanishad',
        reference: '6.23',
        quote: 'To one who has supreme devotion to God and devotion to the guru as to God, these truths become revealed'
      }
    ],
    relatedConcepts: ['jnana-yoga', 'karma-yoga', 'brahman', 'moksha'],
    academicSources: [
      {
        title: 'Bhakti in Shankaras Philosophy',
        author: 'Journal of Indian Philosophy',
        url: 'https://www.jstor.org/stable/23447147'
      },
      {
        title: 'Devotional Compositions of Adi Shankaracharya',
        author: 'Sanskrit Studies',
        url: 'https://www.advaita-vedanta.org/articles/shankara-stotras.html'
      }
    ]
  },
  {
    id: 'vedanta',
    name: 'Vedanta',
    sanskritName: 'वेदान्त',
    shortDescription: 'The End and Culmination of the Vedas',
    fullDescription: 'Vedanta literally means "the end of the Vedas" and refers to the Upanishads and the philosophical system based on them. The three foundational texts of Vedanta are called Prasthana Trayi: the Upanishads (Shruti Prasthana), Brahma Sutras (Nyaya Prasthana), and Bhagavad Gita (Smriti Prasthana). Adi Shankaracharya wrote commentaries on all three, establishing Advaita Vedanta - non-dualistic interpretation - as the preeminent school. Other interpretations include Vishishtadvaita (qualified non-dualism) and Dvaita (dualism), but Shankaracharya\'s Advaita remains the most influential, teaching the absolute identity of Atman and Brahman.',
    keyPoints: [
      'Vedanta means "end of the Vedas" - refers to Upanishads and their philosophy',
      'Based on Prasthana Trayi: Upanishads, Brahma Sutras, Bhagavad Gita',
      'Shankaracharya established Advaita (non-dual) interpretation',
      'Three main schools: Advaita, Vishishtadvaita, Dvaita',
      'Advaita teaches absolute non-duality of Atman and Brahman',
      'Liberation through knowledge (jnana), not merely rituals (karma)',
      'Influenced Indian philosophy, spirituality, and culture for over 1200 years'
    ],
    scripturalReferences: [
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '1.4.10',
        quote: 'Brahman alone was in the beginning. It knew itself only as "I am Brahman." Therefore it became all'
      },
      {
        source: 'Brahma Sutras',
        reference: '1.1.1',
        quote: 'Athato Brahma Jijnasa - Now, therefore, the inquiry into Brahman'
      },
      {
        source: 'Bhagavad Gita',
        reference: '15.15',
        quote: 'I am seated in the hearts of all. From Me come memory, knowledge, and understanding. I am verily that which is to be known through the Vedas'
      }
    ],
    relatedConcepts: ['brahman', 'atman', 'moksha', 'jnana-yoga'],
    academicSources: [
      {
        title: 'Advaita Vedanta - Stanford Encyclopedia',
        author: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/shankara/'
      },
      {
        title: 'Introduction to Vedanta',
        author: 'Internet Encyclopedia of Philosophy',
        url: 'https://iep.utm.edu/advaita-vedanta/'
      },
      {
        title: 'The Three Schools of Vedanta',
        author: 'Oxford Bibliographies',
        url: 'https://www.oxfordbibliographies.com/display/document/obo-9780195399318/obo-9780195399318-0171.xml'
      }
    ]
  },
  {
    id: 'avidya',
    name: 'Avidya',
    sanskritName: 'अविद्या',
    shortDescription: 'Ignorance - The Root Cause of Suffering',
    fullDescription: 'Avidya (ignorance or nescience) is the fundamental cause of all suffering and bondage in Advaita Vedanta. It is not mere lack of information but a positive force that veils (avarana) our true nature and projects (vikshepa) the illusory world of duality. Avidya makes us mistake the rope for a snake, the Self for the body-mind. It has two powers: concealing Brahman and projecting the phenomenal world. Avidya is beginningless (anadi) but can be destroyed by Self-knowledge (atma-jnana). All practices - discrimination, dispassion, meditation - aim at removing this fundamental ignorance and revealing the Self that was never actually hidden.',
    keyPoints: [
      'Avidya is fundamental ignorance - the root cause of bondage',
      'Not mere absence of knowledge but a positive veiling force',
      'Has two powers: avarana (veiling) and vikshepa (projecting)',
      'Makes us identify the Self with body, mind, and ego',
      'Beginningless (anadi) but can be ended through knowledge',
      'Creates the illusion of duality, separation, and multiplicity',
      'Destroyed only by direct Self-knowledge (atma-jnana), not by actions',
      'Often equated with maya at the cosmic level'
    ],
    scripturalReferences: [
      {
        source: 'Vivekachudamani',
        reference: 'Verse 111',
        quote: 'This veiling power (avarana shakti) covers the real nature of things, making them appear as something else, like the blue appearance of the sky'
      },
      {
        source: 'Brihadaranyaka Upanishad',
        reference: '4.4.19',
        quote: 'In that state he does not see, for although seeing, he does not see; for there is no cessation of the seeing of the seer, because he is imperishable. But there is no second thing separate from him that he could see'
      },
      {
        source: 'Mandukya Karika',
        reference: '1.16',
        quote: 'When the individual self, deluded by ignorance, imagines it is a limited being, then it appears bound; when it knows itself to be Brahman, it is free'
      }
    ],
    relatedConcepts: ['maya', 'brahman', 'atman', 'moksha', 'jnana-yoga'],
    academicSources: [
      {
        title: 'The Concept of Avidya in Advaita Vedanta',
        author: 'Journal of Indian Philosophy',
        url: 'https://www.jstor.org/stable/23449822'
      },
      {
        title: 'Maya and Avidya in Shankaras Philosophy',
        author: 'Philosophy Institute',
        url: 'http://indianphilosophy.50webs.com/advaita.htm'
      }
    ]
  }
]
