import { redirect } from 'next/navigation'
import { getLanguageFromCookie } from '@/utils/cookies'

export const dynamic = 'force-static'

export default function Blog() {
  const lang = getLanguageFromCookie()
  redirect(`/blog/${lang}`)
}
