import { getLanguageFromCookie } from '@/utils/cookies';
import { redirect } from 'next/navigation';

export default function Blog() {
  const lang = getLanguageFromCookie()
  redirect(`/blog/${lang}`);
}
