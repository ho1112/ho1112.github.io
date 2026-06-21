'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import ItsMeWidgetLoader from '@/components/common/ItsMeWidget'

interface ChatbotSectionProps {
  language: 'ko' | 'ja'
}

export default function ChatbotSection({ language }: ChatbotSectionProps) {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    // 페이지 로드 시 해시가 #itsme이면 부드럽게 중앙으로 스크롤
    if (window.location.hash === '#itsme') {
      setTimeout(() => {
        document.getElementById('itsme')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 100)
    }
  }, [])

  return (
    <div className="mb-8 scroll-mt-32" id="itsme">
      <ItsMeWidgetLoader
        key={`${language}-${theme}`}
        language={language}
        theme={theme}
      />
    </div>
  )
}
