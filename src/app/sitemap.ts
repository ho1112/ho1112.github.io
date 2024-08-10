import { MetadataRoute } from 'next'
import { languages } from '@/config/constant'
import { getSitemapPostList } from '@/lib/post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postLists = await Promise.all(
    languages.map(async (language) => {
      const postList = await getSitemapPostList(language)
      return postList
    }),
  )
  const flattenedPostLists = postLists.flat()

  const baseUrl = 'https://ho1112.github.io/'
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...flattenedPostLists,
  ]
}
