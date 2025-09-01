import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns'
import { ja, ko } from 'date-fns/locale'

interface CommentItemProps {
  comment: {
    id: string
    content: string
    author_name: string
    author_avatar: string
    is_bot: boolean
    parent_id: string | null
    created_at: string
    replies?: Array<{
      id: string
      content: string
      author_name: string
      author_avatar: string
      is_bot: boolean
      parent_id: string | null
      created_at: string
    }>
  }
  language: string
  onReply?: (commentId: string) => void
}

export const CommentItem = ({
  comment,
  language,
  onReply,
}: CommentItemProps) => {
  const locale = language === 'ko' ? ko : ja

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      const now = new Date()
      const hoursDiff = differenceInHours(now, date)

      if (hoursDiff < 24) {
        // 24시간 이내: 상대적 시간 (초 단위까지)
        const minutesDiff = differenceInMinutes(now, date)
        const secondsDiff = differenceInSeconds(now, date)

        if (secondsDiff < 60) {
          return language === 'ko'
            ? `${secondsDiff}초 전`
            : `${secondsDiff}秒前`
        } else if (minutesDiff < 60) {
          return language === 'ko'
            ? `${minutesDiff}분 전`
            : `${minutesDiff}分前`
        } else {
          return language === 'ko'
            ? `${hoursDiff}시간 전`
            : `${hoursDiff}時間前`
        }
      } else {
        // 24시간 이상: 상대적 시간 (초 단위까지)
        const minutesDiff = differenceInMinutes(now, date)
        const secondsDiff = differenceInSeconds(now, date)

        if (secondsDiff < 60) {
          return language === 'ko'
            ? `${secondsDiff}초 전`
            : `${secondsDiff}秒前`
        } else if (minutesDiff < 60) {
          return language === 'ko'
            ? `${minutesDiff}분 전`
            : `${minutesDiff}分前`
        } else if (hoursDiff < 24) {
          return language === 'ko'
            ? `${hoursDiff}시간 전`
            : `${hoursDiff}時間前`
        } else {
          // 24시간 이상: 절대 날짜 + 시간 (시:분:초)
          if (language === 'ko') {
            return format(date, 'yyyy년 M월 d일 HH:mm:ss', { locale })
          } else {
            return format(date, 'yyyy年M月d日 HH:mm:ss', { locale })
          }
        }
      }
    } catch {
      return dateString
    }
  }

  return (
    <div className="comment-item">
      <div className="flex items-start space-x-3 py-2">
        {comment.parent_id && (
          <span className="text-gray-400 dark:text-gray-500 text-lg select-none flex-shrink-0 w-8 text-center">
            ↪︎
          </span>
        )}
        <div className="flex items-start space-x-3 flex-1 border-b border-chomin/20 dark:border-chomin/30 pb-4">
          <img
            src={comment.author_avatar}
            alt={`${comment.author_name}의 아바타`}
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {comment.author_name}
              </span>
              {comment.is_bot && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              )}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(comment.created_at)}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {comment.content}
            </p>
            {onReply && (
              <button
                onClick={() => onReply?.(comment.id)}
                className="text-sm text-chomin hover:text-chomin-dark font-medium"
              >
                {language === 'ko' ? '답글' : '返信'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
