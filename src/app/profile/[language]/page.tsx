'use client'

import { useTheme } from 'next-themes'
import ItsMeWidgetLoader from '@/components/common/ItsMeWidget'

export default function ProfilePage({
  params,
}: {
  params: { language: 'ko' | 'ja' }
}) {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'
  const language = params.language

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지의 제목과 내용은 언어에 맞게 동적으로 표시할 수 있습니다. */}
      <h1 className="text-4xl font-bold">
        {language === 'ko' ? '프로필' : 'プロフィール'}
      </h1>
      <p className="mt-4 text-lg">
        {language === 'ko'
          ? '프로필 페이지에 오신 것을 환영합니다.'
          : 'プロフィールページへようこそ。'}
      </p>
      <ItsMeWidgetLoader
        key={`${language}-${theme}`}
        language={language}
        theme={theme}
      />
    </div>
  )
}
