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

  const postRelativePaths = (
    await Promise.all(
      languages.map(async (lang) => {
        return await getSitemapPostList(lang)
      }),
    )
  ).flat()

  const postList = postRelativePaths.map(({ url, lastModified }) => ({
    url: `${baseUrl}${url}`,
    lastModified,
  }))

  return [...staticPages, ...postList]
}
