-----

### \#\# 문서 1: API 명세서 (API\_SPEC.md) - v2

*두 프로젝트를 잇는 가장 중요한 '설계도'이자 '약속'입니다.*

**프로젝트명: Echo Chamber (가제)**

**1. 댓글 목록 조회**

  - **Endpoint:** `GET /api/comments`
  - **Query Parameter:**
      - `postId` (타입: `string`, **필수**): **블로그 포스트의 URL 슬러그 값** (예: `how-to-use-nextjs`)
  - **성공 응답 (`200 OK`):**
    ```json
    [
      {
        "id": "uuid-1",
        "content": "이 글 정말 유용하네요!",
        "author_name": "Mintora",
        "author_avatar": "url/to/avatar.png",
        "is_bot": false,
        "parent_id": null,
        "created_at": "2025-08-26T19:13:00Z"
      },
      {
        "id": "uuid-2",
        "content": "와! 저도 그렇게 생각해요! 😍",
        "author_name": "긍정적인 신입(봇)",
        "author_avatar": "url/to/bot_avatar.png",
        "is_bot": true,
        "parent_id": "uuid-1", // uuid-1 댓글의 대댓글
        "created_at": "2025-08-26T19:15:00Z"
      }
    ]
    ```

**2. 새 댓글 작성**

  - **Endpoint:** `POST /api/comments`
  - **Request Body:**
    ```json
    {
      "postId": "string", // 블로그 포스트의 URL 슬러그 값
      "content": "string",
      "author_name": "string",
      "parent_id": "uuid" // (선택 사항) 대댓글일 경우 부모 댓글의 id
    }
    ```
  - **성공 응답 (`201 Created`):** 생성된 댓글 객체 1개

-----

### \#\# 문서 2: 블로그 리포지토리 작업 계획서

*Cursor AI에게 이 내용을 컨텍스트로 주고, 단계별로 작업을 지시하면 됩니다.*

**프로젝트 목표:** 기존 Giscus 댓글 시스템을 자체 제작한 댓글 컴포넌트로 교체한다. 이 컴포넌트는 외부 댓글 API와 통신하여 댓글을 보여주고 작성하는 역할을 한다.

**1단계: UI 컴포넌트 목업(Mockup) 개발**

1.  **파일 생성:** `components/CommentSection.tsx`, `components/CommentItem.tsx`, `components/CommentForm.tsx` 파일을 생성한다.
2.  **가짜 데이터 생성:** `mock-data/comments.js` 파일을 만들고, `API_SPEC.md`에 정의된 형식에 맞는 가짜 댓글/대댓글 데이터를 5\~6개 작성한다.
3.  **UI 구현:**
      - `CommentSection.tsx`에서 가짜 데이터를 불러와 `CommentItem.tsx` 컴포넌트를 이용해 목록을 렌더링한다.
      - **요구사항:** 대댓글은 1단계 깊이로만 들여쓰기하여 표현한다.
      - `CommentForm.tsx`에서 댓글을 입력하고 제출할 수 있는 폼 UI를 구현한다. (기능은 아직 없음)

**2단계: API 연동**

1.  **`postId` 획득:** Next.js의 `useRouter` 훅을 사용해 현재 페이지의 URL에서 **포스트 슬러그**를 가져오는 로직을 구현한다.
2.  **데이터 조회:** `TanStack Query(React Query)`를 설치하고, 가짜 데이터를 불러오는 대신 `GET /api/comments?postId=[현재 슬러그]` API를 호출하도록 로직을 수정한다.
3.  **데이터 생성:** 댓글 폼 제출 시, `POST /api/comments` API로 새로운 댓글 데이터(**`postId` 포함**)를 전송하는 로직을 구현한다.
4.  **상태 처리:** API 요청 시 로딩 상태, 요청 성공/실패 상태를 처리하고 사용자에게 피드백을 보여준다. `TanStack Query`의 `onSuccess` 콜백을 이용해 댓글 작성 성공 시 댓글 목록을 자동으로 다시 불러오도록(refetch) 구현한다.

-----

### \#\# 문서 3: 댓글/봇 시스템 리포지토리 작업 계획서

*이 문서는 다음 단계에서, 새로운 리포지토리를 만들었을 때 사용할 로드맵입니다.*

**프로젝트 목표:** 블로그에 댓글 서비스를 제공하는 백엔드 시스템과, 자동으로 댓글을 다는 AI 봇 시스템을 구축한다.

**1단계: 댓글 API 및 DB 구축 (Supabase)**

1.  Supabase 프로젝트를 생성하고, `API_SPEC.md`에 맞게 `comments` 테이블을 설계한다. `postId` 컬럼은 `Text` 타입으로 설정한다.
2.  `GET /api/comments`와 `POST /api/comments` 엔드포인트를 Vercel 서버리스 함수와 Supabase API를 이용해 구현한다.

**2단계: AI 봇 시스템 구현**

1.  새 글 발행 시 \*\*URL 슬러그(`postId`)\*\*를 포함한 알림을 받을 웹훅 엔드포인트를 구현한다.
2.  웹훅 수신 시, 해당 URL에 접속해 글 본문을 파싱하고 LLM API를 호출하여 페르소나별 댓글을 생성하는 로직을 개발한다.
3.  Vercel Cron Jobs를 이용해 생성된 댓글을 시간차를 두고 DB에 저장하는 스케줄링 로직을 구현한다.

**3단계: 관리자 대시보드 개발**

1.  로그인 기능을 갖춘 별도의 관리자 페이지를 만든다.
2.  모든 댓글을 확인하고 **`postId`별로 필터링**, 삭제할 수 있는 UI를 구현한다.
3.  AI가 생성한 댓글(`status: 'pending'`)을 검토하고 승인(`status: 'approved'`)하는 기능을 구현한다.