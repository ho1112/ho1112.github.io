import { getLanguageFromCookie } from '@/utils/cookies';
import { redirect } from 'next/navigation';

export default function Home() {
  const lang = getLanguageFromCookie()
  redirect(`/blog/${lang}/`);
}
