'use client'

import { useState, useEffect } from 'react'
import { CommentItem } from './CommentItem'
import { CommentForm } from './CommentForm'
import { mockComments } from '@/lib/mock-data/comments'

interface Comment {
  id: string
  content: string
  author_name: string
  author_avatar: string
  is_bot: boolean
  parent_id: string | null
  created_at: string
}

interface CommentSectionProps {
  postId: string
  language: string
}

export const CommentSection = ({ postId, language }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 댓글 데이터 로드 (현재는 mock 데이터 사용)
  useEffect(() => {
    const loadComments = async () => {
      try {
        setIsLoading(true)
        // TODO: 실제 API 호출로 교체
        // const response = await fetch(`/api/comments?postId=${postId}`)
        // const data = await response.json()

        // 현재는 mock 데이터 사용
        await new Promise((resolve) => setTimeout(resolve, 500)) // 로딩 시뮬레이션
        setComments(mockComments)
      } catch (error) {
        console.error('댓글을 불러오는데 실패했습니다:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadComments()
  }, [postId])

  // 댓글 제출 처리
  const handleSubmitComment = async (data: {
    content: string
    author_name: string
    parent_id?: string
  }) => {
    try {
      setIsSubmitting(true)

      // TODO: 실제 API 호출로 교체
      // const response = await fetch('/api/comments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...data, postId })
      // })
      // const newComment = await response.json()

      // 현재는 mock 데이터로 시뮬레이션
      const newComment: Comment = {
        id: `uuid-${Date.now()}`,
        content: data.content,
        author_name: data.author_name,
        author_avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.author_name}`,
        is_bot: false,
        parent_id: data.parent_id || null,
        created_at: new Date().toISOString(),
      }

      setComments((prev) => [...prev, newComment])

      // 답글 모드였다면 답글 모드 해제
      if (data.parent_id) {
        setReplyingTo(null)
      }
    } catch (error) {
      console.error('댓글 작성에 실패했습니다:', error)
      // TODO: 에러 처리 UI 추가
    } finally {
      setIsSubmitting(false)
    }
  }

  // 댓글과 답글을 분리하여 렌더링
  const renderComments = () => {
    const topLevelComments = comments.filter((comment) => !comment.parent_id)

    return topLevelComments.map((comment) => {
      const replies = comments.filter((reply) => reply.parent_id === comment.id)

      return (
        <div key={comment.id} className="comment-thread">
          <CommentItem
            comment={comment}
            language={language}
            onReply={() => setReplyingTo(comment.id)}
          />

          {/* 답글들 */}
          {replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} language={language} />
          ))}

          {/* 답글 폼 */}
          {replyingTo === comment.id && (
            <div className="ml-8 mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <CommentForm
                onSubmit={handleSubmitComment}
                parent_id={comment.id}
                onCancel={() => setReplyingTo(null)}
                language={language}
                isSubmitting={isSubmitting}
              />
            </div>
          )}
        </div>
      )
    })
  }

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {language === 'ko'
            ? '댓글을 불러오는 중...'
            : 'コメントを読み込み中...'}
        </p>
      </div>
    )
  }

  return (
    <div className="comment-section py-8 not-prose">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {language === 'ko' ? '댓글' : 'コメント'} ({comments.length})
      </h3>

      {/* 댓글 목록 */}
      {comments.length > 0 ? (
        <div className="space-y-2 mb-8">{renderComments()}</div>
      ) : (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400 mb-8">
          {language === 'ko'
            ? '아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!'
            : 'まだコメントがありません。最初のコメントを投稿してみましょう！'}
        </div>
      )}

      {/* 새 댓글 작성 폼 */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <CommentForm
          onSubmit={handleSubmitComment}
          language={language}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  )
}
