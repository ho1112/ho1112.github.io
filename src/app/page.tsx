import { getLanguageFromCookie } from '@/utils/\bcookies';
import { redirect } from 'next/navigation';

export default function Home() {
  const lang = getLanguageFromCookie()

  redirect(`/blog/${lang}/`);
}
