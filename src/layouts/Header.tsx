'use client'

import { Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollTracker } from '@/hook/useScrollTracker'
import ThemeSwitch from '@/layouts/theme/Switch'
import { cn } from '@/lib/utils'
import ScrollProgressBar from '@/components/common/ScrollProgressBar'
import IconLinkedin from '@/components/icon/LinkedIn'
import { Button } from '@/components/ui/button'
import { Language } from './theme/Language'

export const Header = () => {
  const { ref, transform, currentScrollTop } = useScrollTracker(60)
  const pathname = usePathname()
  const currentLanguage = pathname.includes('/ko') ? 'ko' : 'ja'

  return (
    <>
      <nav
        style={{ transform }}
        ref={ref}
        className={cn(
          'fixed z-40 flex w-full flex-col items-center justify-center bg-background',
          { 'border-b shadow-md': currentScrollTop > 48 },
        )}
      >
        <div className="mt-1 flex h-[60px] w-full max-w-[1200px] items-center justify-between px-4">
          <div className="flex items-center gap-4 text-lg font-medium">
            <Link
              href={`/blog/${currentLanguage}/`}
              className="text-2xl font-bold"
            >
              mintora
            </Link>
            <Link
              href={`/profile/${currentLanguage}/`}
              className="animate-tada-delayed font-bold"
            >
              profile
            </Link>
          </div>
          <div className="flex gap-3">
            <ThemeSwitch />
            <Language />
            <Button asChild variant="ghost" size="icon">
              {/* <Link href="https://github.com/ho1112" target="_blank">
                <Github className="size-[2rem]" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/in/lee-hoyeon/"
                target="_blank"
              >
                <IconLinkedin
                  className="fill-foreground transition hover:fill-chomin"
                  height={30}
                  width={30}
                />
              </Link>
            </Button>
          </div>
        </div>
      </nav>
      <ScrollProgressBar />
    </>
  )
}
