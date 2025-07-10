import { MetadataRoute } from 'next'
import { baseDomain, languages } from '@/config/constant'
import { getSitemapPostList } from '@/lib/post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseDomain,
      lastModified: new Date(),
    },
    {
      url: `${baseDomain}blog/`,
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
    url: `${baseDomain}${url}/`,
    lastModified,
  }))

  return [...staticPages, ...postList]
}
