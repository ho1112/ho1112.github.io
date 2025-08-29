import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Comment } from '@/config/types'

// API 엔드포인트 (환경별 설정)
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_COMMENT_PROD_API_BASE_URL ||
      (() => {
        throw new Error(
          '프로덕션 환경에서 NEXT_PUBLIC_COMMENT_PROD_API_BASE_URL이 설정되지 않았습니다.',
        )
      })()
    : process.env.NEXT_PUBLIC_COMMENT_LOCAL_API_BASE_URL ||
      (() => {
        throw new Error(
          '로컬 환경에서 NEXT_PUBLIC_COMMENT_LOCAL_API_BASE_URL이 설정되지 않았습니다.',
        )
      })()

// 댓글 목록 조회
export const useComments = (postId: string) => {
  const compositePostId = postId

  return useQuery({
    queryKey: ['comments', compositePostId],
    queryFn: async (): Promise<Comment[]> => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/comments?postId=${compositePostId}`,
        )
        if (!response.ok) throw new Error('댓글을 불러오는데 실패했습니다')
        const json = await response.json()
        // 응답이 배열이거나, { data: [] } 또는 { comments: [] } 형태를 모두 지원
        if (Array.isArray(json)) return json
        if (Array.isArray(json?.data)) return json.data
        if (Array.isArray(json?.comments)) return json.comments
        return []
      } catch (error) {
        // API 실패 시 빈 배열 반환
        return []
      }
    },
    staleTime: 1000 * 60 * 2, // 2분
  })
}

// 새 댓글 작성
export const useCreateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (
      newComment: Omit<Comment, 'id' | 'created_at'> & {
        language: string
      },
    ) => {
      const response = await fetch(`${API_BASE_URL}/api/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: newComment.post_id,
          content: newComment.content,
          author_name: newComment.author_name,
          parent_id: newComment.parent_id,
        }),
      })
      if (!response.ok) throw new Error('댓글 작성에 실패했습니다')
      return response.json()
    },
    onSuccess: async (data, variables) => {
      // 댓글 작성 성공 시 댓글 목록 새로고침
      await queryClient.invalidateQueries({
        queryKey: ['comments', variables.post_id],
      })
      await queryClient.refetchQueries({
        queryKey: ['comments', variables.post_id],
      })
    },
  })
}

// 답글 작성
export const useCreateReply = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (
      newReply: Omit<Comment, 'id' | 'created_at'> & {
        post_id?: string
        language: string
      },
    ) => {
      const response = await fetch(`${API_BASE_URL}/api/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: newReply.post_id,
          content: newReply.content,
          author_name: newReply.author_name,
          parent_id: newReply.parent_id,
        }),
      })
      if (!response.ok) throw new Error('답글 작성에 실패했습니다')
      return response.json()
    },
    onSuccess: async (data, variables) => {
      // 답글 작성 성공 시 댓글 목록 새로고침
      if (variables.post_id) {
        await queryClient.invalidateQueries({
          queryKey: ['comments', variables.post_id],
        })
        await queryClient.refetchQueries({
          queryKey: ['comments', variables.post_id],
        })
      } else {
        // post_id가 없으면 모든 댓글 쿼리 무효화
        await queryClient.invalidateQueries({
          queryKey: ['comments'],
        })
      }
    },
  })
}
