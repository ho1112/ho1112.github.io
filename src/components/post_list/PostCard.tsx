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
  variant?: 'featured' | 'grid'
}

const PostCard = ({ language, post, index, variant = 'featured' }: Props) => {
  const t = getLanguageText(language, 'postHeader')

  const cardWrapperClass =
    variant === 'featured'
      ? cn('group', {
          'md:col-span-2 md:row-span-2': index === 0,
          'md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-1':
            index === 1,
          'md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1':
            index === 2,
          'md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1':
            index === 3,
        })
      : 'group'

  return (
    <div className={cardWrapperClass}>
      <Link href={post.url}>
        <li
          className="flex md:relative md:flex-col md:h-full overflow-hidden rounded-md border shadow-lg transition
            hover:shadow-xl dark:border-slate-700 dark:hover:border-white"
        >
          {/* 텍스트 가독성을 위한 그라디언트 (md 이상에서만) */}
          <div className="z-[1] hidden md:block before:absolute before:inset-0 before:bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_60%)]" />
          {/* image */}
          <div className="relative w-[30%] md:w-full aspect-square md:aspect-video rounded-t-md">
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
          <div className="w-[70%] md:w-full md:absolute z-[2] bottom-0 flex flex-col p-4">
            <div className="flex flex-1 flex-col">
              <div className="font-medium text-xs lg:text-sm text-chomin">
                <span className="bg-black px-2 py-1">
                  {post.categoryPublicName}
                </span>
              </div>
              <h2
                className={cn(
                  'my-1 font-bold text-gray-800 dark:text-white md:text-white',
                  variant === 'grid'
                    ? 'text-base lg:text-lg'
                    : 'text-lg lg:text-xl',
                )}
              >
                {post.title}
              </h2>
              <div className="flex gap-3 font-medium text-[10px] lg:text-xs text-gray-500 dark:text-white md:text-white">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-3.5" />
                  <span>
                    {post.year}
                    {t.year} {post.month}
                    {t.month} {post.day}
                    {t.day}
                  </span>
                </div>
                <div className="flex   gap-1">
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
