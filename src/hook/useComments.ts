import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Comment } from '@/config/types'
import { mockComments } from '@/lib/mock-data/comments'

// API 엔드포인트 (나중에 실제 주소로 교체)
const API_BASE_URL = 'https://api.example.com' // placeholder

// 댓글 목록 조회
export const useComments = (postId: string) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: async (): Promise<Comment[]> => {
      // 현재는 Mock 데이터 사용
      // 나중에 실제 API 호출로 교체:
      // const response = await fetch(`${API_BASE_URL}/comments?post_id=${postId}`)
      // if (!response.ok) throw new Error('댓글을 불러오는데 실패했습니다')
      // return response.json()

      return mockComments
    },
    staleTime: 1000 * 60 * 2, // 2분
  })
}

// 새 댓글 작성
export const useCreateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newComment: Omit<Comment, 'id' | 'created_at'>) => {
      // 현재는 Mock 데이터에 추가
      // 나중에 실제 API 호출로 교체:
      // const response = await fetch(`${API_BASE_URL}/comments`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newComment)
      // })
      // if (!response.ok) throw new Error('댓글 작성에 실패했습니다')
      // return response.json()

      // Mock 데이터에 새 댓글 추가 (실제로는 API 응답 사용)
      const now = new Date()
      const japanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000) // UTC+9 (일본 시간)
      const mockNewComment: Comment = {
        ...newComment,
        id: Date.now().toString(),
        created_at: japanTime.toISOString().slice(0, -1), // 일본 시간 기준
      }

      // Mock 데이터 업데이트 (실제로는 서버에서 처리)
      mockComments.push(mockNewComment)

      return mockNewComment
    },
    onSuccess: (data, variables) => {
      // 댓글 작성 성공 시 댓글 목록 새로고침
      queryClient.invalidateQueries({
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
      newReply: Omit<Comment, 'id' | 'created_at'> & { post_id?: string },
    ) => {
      // 현재는 Mock 데이터에 추가
      // 나중에 실제 API 호출로 교체:
      // const response = await fetch(`${API_BASE_URL}/comments`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newReply)
      // })
      // if (!response.ok) throw new Error('답글 작성에 실패했습니다')
      // return response.json()

      // Mock 데이터에 새 답글 추가
      const now = new Date()
      const japanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000) // UTC+9 (일본 시간)
      const mockNewReply: Comment = {
        ...newReply,
        id: Date.now().toString(),
        created_at: japanTime.toISOString().slice(0, -1), // 일본 시간 기준
      }

      mockComments.push(mockNewReply)

      return mockNewReply
    },
    onSuccess: (data, variables) => {
      // 답글 작성 성공 시 댓글 목록 새로고침
      if (variables.post_id) {
        queryClient.invalidateQueries({
          queryKey: ['comments', variables.post_id],
        })
      } else {
        // post_id가 없으면 모든 댓글 쿼리 무효화
        queryClient.invalidateQueries({
          queryKey: ['comments'],
        })
      }
    },
  })
}
