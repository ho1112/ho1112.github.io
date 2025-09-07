'use client'

import { CalendarDays, Clock3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Post } from '@/config/types'
import { getLanguageText } from '@/utils/language'

interface LatestSectionProps {
  language: string
  latestPosts: Post[]
  allPostCount: number
}

const LatestSection = ({
  language,
  latestPosts,
  allPostCount,
}: LatestSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0) // 기본값으로 첫 번째 포스트(인덱스 0)가 70% 차지
  const t = getLanguageText(language, 'category')
  const tPostHeader = getLanguageText(language, 'postHeader')

  // 동적 그리드 컬럼 크기 계산
  const getGridTemplateColumns = () => {
    if (hoveredIndex === null) {
      return 'repeat(4, 1fr)' // 기본: 25%씩 균등
    }

    const columns = []
    for (let i = 0; i < 4; i++) {
      if (i === hoveredIndex) {
        columns.push('7fr') // 70%
      } else {
        columns.push('1fr') // 10%
      }
    }
    return columns.join(' ')
  }

  return (
    <section className="mt-4 mx-auto px-4 w-full max-w-[1068px]">
      <h2 className="text-2xl font-bold mb-4">{t.latest}</h2>
      <ul
        className="flex flex-col gap-4 md:grid md:gap-px md:h-[30vw] transition-all duration-500 ease-out"
        style={{
          gridTemplateColumns: getGridTemplateColumns(),
        }}
      >
        {latestPosts.map((post, index) => {
          const isCollapsed = hoveredIndex !== null && hoveredIndex !== index // 10% 상태인지 확인
          const isExpanded = hoveredIndex === index // 70% 상태인지 확인

          return (
            <div
              key={post.url + post.date}
              className={`group ${isExpanded ? 'border-2 border-chomin rounded-md' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Link href={post.url}>
                <li
                  className="flex md:relative md:flex-col md:h-full overflow-hidden rounded-md border shadow-lg transition
                    hover:shadow-xl dark:border-slate-700 dark:hover:border-white"
                >
                  {/* 텍스트 가독성을 위한 그라디언트 (md 이상에서만) */}
                  <div className="z-[1] hidden md:block before:absolute before:inset-0 before:bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_60%)]" />
                  {/* image */}
                  <div className="relative w-[30%] md:w-full aspect-square rounded-t-md md:h-full md:aspect-auto">
                    <Image
                      className="transition-transform duration-300 group-hover:md:scale-110"
                      src={post.thumbnail}
                      alt={`thumbnail for ${post.title}`}
                      sizes="(max-width: 767px) 30vw, (max-width: 1000px) 50vw, 450px"
                      fill
                      priority
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  {/* post info */}
                  <div
                    className={`w-[70%] md:w-full md:absolute z-[2] bottom-0 flex flex-col ${isCollapsed ? 'p-2' : 'p-4'}`}
                  >
                    <div className="flex flex-1 flex-col md:flex-initial">
                      <div className="font-medium text-xs lg:text-sm text-chomin">
                        <span className="bg-black px-2 py-1">
                          {post.categoryPublicName}
                        </span>
                      </div>
                      <h2
                        className={`my-1 font-bold text-gray-800 dark:text-white md:text-white ${isCollapsed ? 'text-xs lg:text-sm line-clamp-2' : 'text-lg lg:text-xl line-clamp-2 md:line-clamp-2 lg:line-clamp-none'}`}
                      >
                        {post.title}
                      </h2>
                      {/* 모바일/태블릿에서는 항상 표시, PC에서만 10% 상태일 때 숨김 */}
                      <div
                        className={`flex gap-3 font-medium text-[10px] lg:text-xs text-gray-500 dark:text-white md:text-white ${isCollapsed ? 'lg:hidden' : ''}`}
                      >
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-3.5" />
                          <span>
                            {post.year}
                            {tPostHeader.year} {post.month}
                            {tPostHeader.month} {post.day}
                            {tPostHeader.day}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock3 className="w-3.5" />
                          <span>
                            {post.readingMinutes}
                            {tPostHeader.min}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            </div>
          )
        })}
      </ul>
      <div className="mt-6 flex justify-center">
        <Link
          href={`/blog/${language}/all`}
          className="px-4 py-2 bg-chomin text-white rounded-full text-sm font-semibold hover:bg-chomin-dark"
        >
          {`❐ ${t.all}(${allPostCount})`}
        </Link>
      </div>
    </section>
  )
}

export default LatestSection
