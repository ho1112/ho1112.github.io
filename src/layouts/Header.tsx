'use client'

import { Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollTracker } from '@/hook/useScrollTracker'
import ThemeSwitch from '@/layouts/theme/Switch'
import ScrollProgressBar from '@/components/common/ScrollProgressBar'
import { Button } from '@/components/ui/button'
import { Language } from './theme/Language'

export const Header = () => {
  const { ref, transform } = useScrollTracker(65)
  const pathname = usePathname()
  const currentLanguage = pathname.startsWith('/blog/ko') ? 'ko' : 'ja'

  return (
    <nav
      style={{ transform }}
      ref={ref}
      className="fixed z-40 flex w-full flex-col items-center justify-center border-b bg-background shadow-sm"
    >
      <div className="mt-1 flex h-[64px] w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center text-lg font-medium">
          <Link href={`/blog/${currentLanguage}/`}>CM</Link>
        </div>
        <div className="flex gap-3">
          <ThemeSwitch />
          <Language />
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/ho1112" target="_blank">
              <Github className="size-[2rem]" />
            </Link>
          </Button>
        </div>
      </div>
      <ScrollProgressBar />
    </nav>
  )
}
