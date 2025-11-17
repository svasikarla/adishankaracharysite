import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: {
    default: 'Wisdom of Adi Shankaracharya | Advaita Vedanta Knowledge Base',
    template: '%s | Wisdom of Adi Shankaracharya'
  },
  description: 'Comprehensive knowledge base on Adi Shankaracharya and Advaita Vedanta philosophy. Explore authentic teachings, texts, concepts, and resources for spiritual seekers.',
  keywords: [
    'Adi Shankaracharya',
    'Advaita Vedanta',
    'Bhaja Govindam',
    'Atma Bodha',
    'Brahman',
    'Atman',
    'Maya',
    'Moksha',
    'Vedanta philosophy',
    'Self-knowledge',
    'Non-dualism'
  ],
  authors: [{ name: 'Wisdom of Adi Shankaracharya' }],
  creator: 'Wisdom of Adi Shankaracharya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Wisdom of Adi Shankaracharya',
    description: 'Explore the timeless teachings of Adi Shankaracharya and the profound philosophy of Advaita Vedanta',
    siteName: 'Wisdom of Adi Shankaracharya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisdom of Adi Shankaracharya',
    description: 'Explore the timeless teachings of Adi Shankaracharya and Advaita Vedanta philosophy',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#f7f3e9] dark:bg-[#1a1814] bg-[url('/temple-texture.png')] bg-repeat">
        <Navigation />
        <main>{children}</main>
        <footer className="py-12 bg-[#5a4a3f] dark:bg-[#1a1814] text-[#e9e1d3] mt-16">
          <div className="container mx-auto px-4">
            {/* Acknowledgments Section */}
            <div className="max-w-4xl mx-auto mb-12 pb-8 border-b border-[#e07c24]/20">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#e07c24] mb-4 text-center">
                Acknowledgments & Gratitude
              </h3>
              <p className="text-center text-[#e9e1d3] mb-6 leading-relaxed">
                This website is a humble effort to share the profound wisdom of Adi Shankaracharya. We are deeply grateful to the following sources and scholars whose tireless work in preserving, translating, and making these sacred teachings accessible has made this platform possible:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#5a4a3f]/50 dark:bg-[#2a241e] rounded-lg p-4 border border-[#e07c24]/10">
                  <h4 className="font-semibold text-[#e07c24] mb-2">Sacred Text Translations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://shlokam.org" target="_blank" rel="noopener noreferrer" className="text-[#e9e1d3] hover:text-[#e07c24] transition-colors flex items-center gap-1">
                        <span>Shlokam.org</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-[#e9e1d3]/70 text-xs">Sanskrit texts with transliteration</span>
                    </li>
                    <li>
                      <a href="https://sanskritdocuments.org" target="_blank" rel="noopener noreferrer" className="text-[#e9e1d3] hover:text-[#e07c24] transition-colors flex items-center gap-1">
                        <span>Sanskrit Documents</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-[#e9e1d3]/70 text-xs">Digital library of Sanskrit texts</span>
                    </li>
                    <li>
                      <span className="text-[#e9e1d3]">Swami Nikhilananda</span>
                      <span className="text-[#e9e1d3]/70 text-xs block">Translations and commentaries</span>
                    </li>
                    <li>
                      <span className="text-[#e9e1d3]">Swami Chinmayananda</span>
                      <span className="text-[#e9e1d3]/70 text-xs block">Atma Bodha commentary</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#5a4a3f]/50 dark:bg-[#2a241e] rounded-lg p-4 border border-[#e07c24]/10">
                  <h4 className="font-semibold text-[#e07c24] mb-2">Scholarly Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.shankaracharya.org" target="_blank" rel="noopener noreferrer" className="text-[#e9e1d3] hover:text-[#e07c24] transition-colors flex items-center gap-1">
                        <span>Shankaracharya.org</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-[#e9e1d3]/70 text-xs">Comprehensive teachings archive</span>
                    </li>
                    <li>
                      <span className="text-[#e9e1d3]">Internet Encyclopedia of Philosophy</span>
                      <span className="text-[#e9e1d3]/70 text-xs block">Advaita Vedanta articles</span>
                    </li>
                    <li>
                      <span className="text-[#e9e1d3]">Stanford Encyclopedia of Philosophy</span>
                      <span className="text-[#e9e1d3]/70 text-xs block">Academic perspectives</span>
                    </li>
                    <li>
                      <span className="text-[#e9e1d3]">Various Vedanta Organizations</span>
                      <span className="text-[#e9e1d3]/70 text-xs block">Educational materials</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-[#e9e1d3]/80 italic">
                  Special gratitude to all the modern teachers, scholars, and institutions who continue to preserve and propagate these timeless teachings. We also acknowledge the countless unnamed sages and teachers who have kept this wisdom alive through the ages.
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-[#e9e1d3]/60">
                  <strong className="text-[#e07c24]">Disclaimer:</strong> This website is an educational resource created for the study and appreciation of Advaita Vedanta philosophy. All Sanskrit verses, translations, and commentaries are compiled from publicly available sources. We encourage readers to consult authentic texts and qualified teachers for proper understanding.
                </p>
              </div>
            </div>

            {/* Quote and Copyright */}
            <div className="text-center border-t border-[#e07c24]/20 pt-8">
              <p className="italic text-lg mb-4 max-w-2xl mx-auto">
                "The world is like a dream, empty and insubstantial. Realize this and be free."
              </p>
              <p className="text-sm text-[#e9e1d3]/70">
                © {new Date().getFullYear()} Wisdom of Adi Shankaracharya. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
