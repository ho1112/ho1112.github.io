import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  formatDistance,
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
      <div className="flex items-start space-x-3 py-4">
        {comment.parent_id && (
          <span className="text-gray-400 dark:text-gray-500 text-lg select-none flex-shrink-0 w-8 text-center">
            ↪︎
          </span>
        )}
        <div className="flex items-start space-x-3 flex-1 border-b border-gray-200 dark:border-gray-700 pb-4">
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
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  봇
                </span>
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
                onClick={() => onReply(comment.id)}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                답글 달기
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
