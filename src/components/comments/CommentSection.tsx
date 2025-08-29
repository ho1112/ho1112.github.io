'use client'

import { useState } from 'react'
import {
  useComments,
  useCreateComment,
  useCreateReply,
} from '@/hook/useComments'
import { CommentForm } from '@/components/comments/CommentForm'
import { CommentItem } from '@/components/comments/CommentItem'
import { useToast } from '@/components/ui/use-toast'

interface CommentSectionProps {
  postId: string
  language: string
}

export const CommentSection = ({
  postId: slug,
  language,
}: CommentSectionProps) => {
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const { toast } = useToast()

  // TanStack Query 훅 사용
  const { data: comments = [], isLoading, error } = useComments(slug)
  const createCommentMutation = useCreateComment()
  const createReplyMutation = useCreateReply()

  // 댓글 제출 처리
  const handleSubmitComment = async (data: {
    content: string
    author_name: string
    parent_id?: string
  }) => {
    try {
      if (data.parent_id) {
        // 답글 작성
        await createReplyMutation.mutateAsync({
          ...data,
          post_id: slug,
          author_avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.author_name}`,
          is_bot: false,
          parent_id: data.parent_id, // 명시적으로 설정
          language: language,
        })
        setReplyingTo(null) // 답글 모드 해제

        // 성공 토스트
        toast({
          title: language === 'ko' ? '답글 작성 완료' : '返信投稿完了',
          description:
            language === 'ko'
              ? '답글이 성공적으로 작성되었습니다.'
              : '返信が正常に投稿されました。',
        })
      } else {
        // 새 댓글 작성
        await createCommentMutation.mutateAsync({
          ...data,
          post_id: slug,
          author_avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.author_name}`,
          is_bot: false,
          parent_id: null, // 명시적으로 null 설정
          language: language,
        })

        // 성공 토스트
        toast({
          title: language === 'ko' ? '댓글 작성 완료' : 'コメント投稿完了',
          description:
            language === 'ko'
              ? '댓글이 성공적으로 작성되었습니다.'
              : 'コメントが正常に投稿されました。',
        })
      }
    } catch (error) {
      console.error('댓글 작성에 실패했습니다:', error)

      // 에러 토스트
      toast({
        title: language === 'ko' ? '오류 발생' : 'エラーが発生しました',
        description:
          language === 'ko'
            ? '댓글 작성에 실패했습니다. 다시 시도해주세요.'
            : 'コメントの投稿に失敗しました。もう一度お試しください。',
        variant: 'destructive',
      })
    }
  }

  // 댓글과 답글을 분리하여 렌더링
  const renderComments = () => {
    const topLevelComments = comments.filter((comment) => !comment.parent_id)

    return topLevelComments.map((comment) => {
      // 백엔드에서 replies 배열을 제공하는 경우 그것을 사용, 없으면 기존 로직 사용
      const replies =
        comment.replies ||
        comments.filter((reply) => reply.parent_id === comment.id)

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
                isSubmitting={createReplyMutation.isPending}
              />
            </div>
          )}
        </div>
      )
    })
  }

  // 에러 상태 처리
  if (error) {
    return (
      <div className="py-8 text-center">
        <div className="text-red-600 dark:text-red-400 mb-2">
          {language === 'ko' ? '⚠️' : '⚠️'}
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'ko'
            ? '댓글을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.'
            : 'コメントの読み込みに失敗しました。しばらくしてから再試行してください。'}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-chomin text-white rounded-md hover:bg-chomin-dark"
        >
          {language === 'ko' ? '새로고침' : '再読み込み'}
        </button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-chomin mx-auto"></div>
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
          isSubmitting={createCommentMutation.isPending}
        />
      </div>
    </div>
  )
}
