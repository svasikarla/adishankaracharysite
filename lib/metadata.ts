import type { Metadata } from 'next'

const siteConfig = {
  name: 'Wisdom of Adi Shankaracharya',
  description: 'Explore the timeless teachings of Adi Shankaracharya and the profound philosophy of Advaita Vedanta. Study sacred texts, learn philosophical concepts, and discover the path to Self-realization.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://adishankaracharya.org',
  ogImage: '/og-image.jpg',
  twitterHandle: '@shankaracharya',
  keywords: [
    'Adi Shankaracharya',
    'Advaita Vedanta',
    'Hindu Philosophy',
    'Self-realization',
    'Bhaja Govindam',
    'Atma Bodha',
    'Brahman',
    'Atman',
    'Maya',
    'Moksha',
    'Vedanta',
    'Indian Philosophy',
    'Spiritual Wisdom',
    'Non-dualism',
    'Sanskrit Texts'
  ]
}

export function createMetadata({
  title,
  description,
  image,
  pathname,
  keywords = [],
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  pathname?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const fullDescription = description || siteConfig.description
  const fullImage = image || siteConfig.ogImage
  const fullUrl = pathname ? `${siteConfig.url}${pathname}` : siteConfig.url
  const allKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: 'Adi Shankaracharya Educational Initiative' }],
    creator: 'Adi Shankaracharya Educational Initiative',
    publisher: 'Adi Shankaracharya Educational Initiative',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: fullUrl,
    },
    metadataBase: new URL(siteConfig.url),
  }
}

export { siteConfig }
