import type { MetadataRoute } from 'next'

const SITE_URL = 'https://przedluzanie-wlosow.example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/v2/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
