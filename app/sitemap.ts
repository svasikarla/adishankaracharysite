import { MetadataRoute } from 'next'
import { CONCEPTS } from '@/data/concepts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishankaracharya.org'

  // Static pages
  const staticPages = [
    '',
    '/biography',
    '/teachings',
    '/philosophy',
    '/mathas',
    '/teachers',
    '/resources',
    '/study-paths',
    '/chant-counter',
    '/about',
    '/credits',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...staticPages]
}
