import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
        <Footer />
      </body>
    </html>
  )
}

