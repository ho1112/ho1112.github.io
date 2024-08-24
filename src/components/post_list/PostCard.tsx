import { CalendarDays, Clock3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/config/types'
import { cn } from '@/lib/utils'
import { getLanguageText } from '@/utils/language'

interface Props {
  language: string
  post: Post
  index: number
}

const PostCard = ({ language, post, index }: Props) => {
  const t = getLanguageText(language, 'postHeader')

  return (
    <div
      className={cn({
        'md:col-span-2 md:row-span-2': index === 0, // 첫 번째 카드, 왼쪽 전면
        'md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-1':
          index === 1, // 두 번째 카드, 우상단
        'md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1':
          index === 2, // 세 번째 카드, 우하단 1열
        'md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1':
          index === 3, // 네 번째 카드, 우하단 2열
      })}
    >
      <Link href={post.url}>
        <li
          className="relative flex h-full flex-col overflow-hidden rounded-md border shadow-lg transition
            hover:shadow-xl dark:border-slate-700 dark:hover:border-white"
        >
          {/* 텍스트 가독성을 위한 그라디언트 */}
          <div className="z-[1] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-70" />
          {/* image */}
          <div className="w-full aspect-video rounded-t-md">
            <Image
              src={post.thumbnail}
              alt={`thumbnail for ${post.title}`}
              sizes="(max-width: 1000px) 50vw, 450px"
              fill
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          {/* post info */}
          <div className="absolute z-[2] bottom-0 flex flex-col p-4">
            <div className="flex flex-1 flex-col">
              <div className="font-medium text-xs lg:text-sm text-chomin">
                <span className="bg-black px-2 py-1">
                  {post.categoryPublicName}
                </span>
              </div>
              <h2 className="my-1 font-bold text-lg lg:text-xl text-white">
                {post.title}
              </h2>
              <div className="flex gap-3 font-medium text-[10px] lg:text-xs text-white">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-3.5" />
                  <span>
                    {post.year}
                    {t.year} {post.month}
                    {t.month} {post.day}
                    {t.day}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock3 className="w-3.5" />
                  <span>
                    {post.readingMinutes}
                    {t.min}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </div>
  )
}

export default PostCard
