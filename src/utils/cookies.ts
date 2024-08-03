import { cookies } from 'next/headers';

export const getLanguageFromCookie = (): string => {
  const cookieStore = cookies()
  const lang = cookieStore.get('language')?.value ?? 'ja'
  return lang
}