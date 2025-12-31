'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { HeadingItem } from '@/config/types'
import { useHeadingsObserver } from '@/hook/useHeadingsObserver'
import { cn } from '@/lib/utils'
// import CopyLinkButton from '../common/CopyLinkButton'
import { ScrollTop } from '../common/TocButtons'

interface Props {
  toc: HeadingItem[]
}

/**
 * side TOC(with scroll spy)
 * 1280px~
 */
const TableOfContent = ({ toc }: Props) => {
  const activeIdList = useHeadingsObserver('h2, h3')
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return
    const activeEl = scrollRef.current.querySelector(
      '[data-active="true"]',
    ) as HTMLElement | null
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeIdList])

  return (
    <aside className="not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block ">
      <div className="sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]">
        <div
          ref={scrollRef}
          className="mb-4 border-l px-4 py-2 max-h-[60vh] overflow-y-auto pr-2"
        >
          <ul className="text-xs">
            {toc.map((item) => {
              const isH3 = item.indent === 1
              const isIntersecting = activeIdList.includes(item.link)
              return (
                <li
                  key={item.link}
                  data-active={isIntersecting ? 'true' : 'false'}
                  className={cn(
                    isH3 && 'ml-4',
                    isIntersecting && 'font-medium text-chomin',
                    'py-1 transition',
                  )}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex gap-2">
          <ScrollTop />
          {/* <ScrollToComment /> */}
          {/* <CopyLinkButton /> */}
        </div>
      </div>
    </aside>
  )
}

export default TableOfContent
