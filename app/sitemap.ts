import { MetadataRoute } from 'next'
import { concepts } from '@/data/concepts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishankaracharya.org'

  // Static pages
  const staticPages = [
    '',
    '/biography',
    '/teachings',
    '/teachings/bhaja-govindam',
    '/teachings/atma-bodha',
    '/philosophy',
    '/mathas',
    '/teachers',
    '/resources',
    '/study-paths',
    '/chant-counter',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic philosophy concept pages
  const conceptPages = concepts.map(concept => ({
    url: `${baseUrl}/philosophy/${concept.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...conceptPages]
}
