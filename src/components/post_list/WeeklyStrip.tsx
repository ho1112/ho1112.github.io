'use client'

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Newspaper,
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { Post } from '@/config/types'
import { getLanguageText } from '@/utils/language'

interface WeeklyStripProps {
  language: string
  weeklyPosts: Post[]
}

const WeeklyStrip = ({ language, weeklyPosts }: WeeklyStripProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const tWeekly = getLanguageText(language, 'weekly')

  if (weeklyPosts.length === 0) return null

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 260
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="mt-6 mx-auto px-4 w-full max-w-[1068px]">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-chomin/10">
            <Newspaper className="w-3.5 h-3.5 text-chomin" />
            <span className="text-xs font-bold text-chomin tracking-wide">
              WEEKLY
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tWeekly.desc}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <Link
            href={`/blog/${language}/weekly`}
            className="ml-2 text-xs font-semibold text-chomin hover:text-chomin-dark transition-colors"
          >
            {tWeekly.viewAll} →
          </Link>
        </div>
      </div>

      {/* 카드 스트립 */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {weeklyPosts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="group shrink-0 w-[240px] flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-chomin dark:hover:border-chomin hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* 상단 민트 라인 */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-chomin to-chomin-dark group-hover:h-1 transition-all duration-200" />
            </div>

            <div className="p-3.5">
              {/* 날짜 */}
              <div className="flex items-center gap-1 mb-2 text-[10px] text-gray-400">
                <CalendarDays className="w-3 h-3" />
                <span>
                  {post.month}/{post.day}
                </span>
              </div>

              {/* 제목 */}
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 line-clamp-2 leading-snug group-hover:text-chomin transition-colors duration-200">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default WeeklyStrip
