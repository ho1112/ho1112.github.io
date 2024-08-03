import { cookies } from 'next/headers';

export const getLanguageFromCookie = (): string => {
  const cookieStore = cookies()
  const lang = cookieStore.get('i18next')?.value ?? 'ja'
  return lang
}