'use client'

import { useState } from 'react'

interface CommentFormProps {
  onSubmit: (data: {
    content: string
    author_name: string
    parent_id?: string
  }) => void
  parent_id?: string
  onCancel?: () => void
  language: string
  isSubmitting?: boolean
}

export const CommentForm = ({
  onSubmit,
  parent_id,
  onCancel,
  language,
  isSubmitting = false,
}: CommentFormProps) => {
  const [content, setContent] = useState('')
  const [authorName, setAuthorName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || !authorName.trim()) return

    onSubmit({
      content: content.trim(),
      author_name: authorName.trim(),
      ...(parent_id && { parent_id }),
    })

    setContent('')
    if (!parent_id) {
      setAuthorName('')
    }
  }

  const isReply = !!parent_id

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 닉네임 입력 필드 - 대댓글에도 표시 */}
      <div>
        <input
          type="text"
          id="author-name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder={
            language === 'ko'
              ? '닉네임을 입력하세요'
              : 'ニックネームを入力してください'
          }
          required
        />
      </div>

      <div>
        <textarea
          id="comment-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          maxLength={1000}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder={
            isReply
              ? language === 'ko'
                ? '답글을 입력하세요'
                : '返信を入力してください'
              : language === 'ko'
                ? '댓글을 입력하세요'
                : 'コメントを入力してください'
          }
          required
        />
      </div>

      <div className="flex justify-end space-x-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            {language === 'ko' ? '취소' : 'キャンセル'}
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting || !content.trim() || !authorName.trim()}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? language === 'ko'
              ? '작성 중...'
              : '投稿中...'
            : isReply
              ? language === 'ko'
                ? '답글 작성'
                : '返信投稿'
              : language === 'ko'
                ? '댓글 작성'
                : 'コメント投稿'}
        </button>
      </div>
    </form>
  )
}
