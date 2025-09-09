'use client'

import { useTheme } from 'next-themes'
import ItsMeWidgetLoader from '@/components/common/ItsMeWidget'

interface ChatbotSectionProps {
  language: 'ko' | 'ja'
}

export default function ChatbotSection({ language }: ChatbotSectionProps) {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className="mb-8" id="itsme">
      <ItsMeWidgetLoader
        key={`${language}-${theme}`}
        language={language}
        theme={theme}
      />
    </div>
  )
}
