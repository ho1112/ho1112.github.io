import { CalendarDays, Clock3 } from 'lucide-react'
import Link from 'next/link'
import { Post } from '@/config/types'
import { getLanguageText } from '@/utils/language'
import { HitsOfPost } from '../common/HitsOfPost'

interface Props {
  language: string
  post: Post
}

export const PostHeader = ({ language, post }: Props) => {
  const t = getLanguageText(language, 'postHeader')

  return (
    <header className="mt-14 text-center">
      <h1 className="mb-5 text-3xl">{post.title}</h1>
      <div className="mb-3 text-base">
        <Link
          href={`/blog/${language}/${post.categoryPath}`}
          className="font-semibold text-chomin no-underline underline-offset-4 hover:underline"
        >
          {post.categoryPublicName}
        </Link>
      </div>
      <div className="flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
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
        <div className="flex items-center gap-1">
          <HitsOfPost url={post.url} />
        </div>
      </div>
      <hr className="mt-5" />
    </header>
  )
}
