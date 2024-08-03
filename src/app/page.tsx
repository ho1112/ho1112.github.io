import { getLanguageFromCookie } from '@/utils/cookies';
import { redirect } from 'next/navigation';

export const dynamic = 'force-static'

export default function Home() {
  const lang = getLanguageFromCookie()
  redirect(`/blog/${lang}/`);
}
