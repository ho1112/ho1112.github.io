'use client'

import { useTheme } from 'next-themes'
import ItsMeWigetLoader from '@/components/common/ItsMeWidget'

const ProfilePage = () => {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">プロフィール</h1>
      <p className="mt-4 text-lg">
        プロフィールページへようこそ。こちらで私の履歴書、ポートフォリオなどの情報をご確認いただけます。
      </p>
      <ItsMeWigetLoader language={'ja'} theme={theme} />
    </div>
  )
}

export default ProfilePage
