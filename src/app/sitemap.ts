import { MetadataRoute } from 'next';

import { getSitemapPostList } from '@/lib/post';
import { getLanguageFromCookie } from '@/utils/\bcookies';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lang = getLanguageFromCookie()

  const postList = await getSitemapPostList(lang);
  const baseUrl = 'https://ho1112.github.io/';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postList,
  ];
}
