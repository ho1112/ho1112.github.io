import { MetadataRoute } from 'next'
import { languages } from '@/config/constant'
import { getSitemapPostList } from '@/lib/post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mintora.me'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ]

  const postList = (
    await Promise.all(
      languages.map(async (lang) => {
        const langPostList = await getSitemapPostList(lang)
        return langPostList
      }),
    )
  ).flat()

  return [...staticPages, ...postList]
}
