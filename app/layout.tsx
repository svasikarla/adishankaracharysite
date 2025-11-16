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
