'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const FontProvider = () => {
  const pathname = usePathname()
  const currentLanguage = pathname.includes('/ko') ? 'ko' : 'ja'

  useEffect(() => {
    // body에 언어별 클래스 추가
    document.body.classList.remove('lang-ko', 'lang-ja')
    document.body.classList.add(`lang-${currentLanguage}`)

    // html lang 속성도 동적으로 변경
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])

  return null
}
