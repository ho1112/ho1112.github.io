import { MetadataRoute } from 'next';

import { getSitemapPostList } from '@/lib/post';
import { cookies } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cookieStore = cookies()
  const lang = cookieStore.get('i18next')?.value ?? 'ja'
  
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
