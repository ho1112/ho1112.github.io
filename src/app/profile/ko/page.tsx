'use client'

import { useTheme } from 'next-themes'
import ItsMeWigetLoader from '@/components/common/ItsMeWidget'

const ProfilePage = () => {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">프로필</h1>
      <p className="mt-4 text-lg">
        프로필 페이지에 오신 것을 환영합니다. 이곳에서 저의 이력서, 포트폴리오
        등 다양한 정보를 확인하실 수 있습니다.
      </p>
      <ItsMeWigetLoader language={'ko'} theme={theme} />
    </div>
  )
}

export default ProfilePage
