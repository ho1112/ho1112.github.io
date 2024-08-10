import { redirect } from 'next/navigation'
import { getLanguageFromCookie } from '@/utils/cookies'

export const dynamic = 'force-static'

export default function Home() {
  const lang = getLanguageFromCookie()
  redirect(`/blog/${lang}/`)
}
