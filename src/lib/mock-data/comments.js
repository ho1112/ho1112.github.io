export const mockComments = [
  {
    id: 'uuid-1',
    content:
      '이 글 정말 유용하네요! Next.js 13의 새로운 기능들이 잘 정리되어 있어서 도움이 많이 됐습니다.',
    author_name: 'Mintora',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mintora',
    is_bot: false,
    parent_id: null,
    created_at: '2025-01-26T19:13:00',
  },
  {
    id: 'uuid-2',
    content:
      '와! 저도 그렇게 생각해요! 😍 특히 App Router 부분이 정말 혁신적이에요.',
    author_name: '긍정적인 신입(봇)',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bot1',
    is_bot: true,
    parent_id: 'uuid-1',
    created_at: '2025-01-26T19:15:00',
  },
  {
    id: 'uuid-7',
    content:
      '와! 저도 그렇게 생각해요! 😍 특히 App Router 부분이 정말 혁신적이에요.',
    author_name: '긍정적인 신입(봇)',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bot1',
    is_bot: true,
    parent_id: 'uuid-1',
    created_at: '2025-08-26T20:45:00',
  },
  {
    id: 'uuid-3',
    content:
      'Turbopack에 대한 설명이 궁금했는데 이 글에서 잘 다뤄주셨네요. 성능 향상이 정말 체감됩니다.',
    author_name: '개발자김',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DevKim',
    is_bot: false,
    parent_id: null,
    created_at: '2025-01-26T20:30:00',
  },
  {
    id: 'uuid-4',
    content:
      'Streaming과 Suspense 부분이 조금 어려웠는데 이 글로 이해가 됐어요. 감사합니다!',
    author_name: '학습중인개발자',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Learner',
    is_bot: false,
    parent_id: null,
    created_at: '2025-01-26T21:45:00',
  },
  {
    id: 'uuid-5',
    content:
      '정말 좋은 글이에요! Next.js 13으로 마이그레이션할 때 이 글을 참고하겠습니다.',
    author_name: '마이그레이션준비중',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Migrator',
    is_bot: false,
    parent_id: null,
    created_at: '2025-01-26T22:10:00',
  },
  {
    id: 'uuid-6',
    content:
      '저도 마이그레이션을 고려하고 있어요! 혹시 특별히 주의해야 할 점이 있나요?',
    author_name: '호기심많은개발자',
    author_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Curious',
    is_bot: false,
    parent_id: 'uuid-5',
    created_at: '2025-01-26T22:25:00',
  },
]
