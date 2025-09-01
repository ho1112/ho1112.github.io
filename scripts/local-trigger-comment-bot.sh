#!/bin/bash
# 로컬 포스트용 AI 봇 웹훅 호출 스크립트
# 사용법: npm run comment-bot

# .env 파일 자동 로드
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

echo "=== AI 봇 웹훅 호출 ==="

# 파일 경로들을 배열로 지정 (필요시 여기서 수정)
FILES=(
  "src/posts/weekly/250823/content_ja.mdx"
  "src/posts/weekly/250823/content_ko.mdx"  # 주석 해제하여 추가
  # "src/posts/weekly/250824/content_ja.mdx"  # 주석 해제하여 추가
)

echo "처리할 파일 수: ${#FILES[@]}개"
echo ""

# 환경변수 확인 및 웹훅 URL 조합
if [ -z "$COMMENT_BOT_WEBHOOK_URL" ]; then
    echo "❌ COMMENT_BOT_WEBHOOK_URL이 설정되지 않았습니다."
    echo ".env 파일에 COMMENT_BOT_WEBHOOK_URL을 설정해주세요."
    echo "예시: COMMENT_BOT_WEBHOOK_URL=/api/webhook/trigger-bot"
    exit 1
fi

if [ -z "$NEXT_PUBLIC_COMMENT_LOCAL_API_BASE_URL" ]; then
    echo "❌ NEXT_PUBLIC_COMMENT_LOCAL_API_BASE_URL이 설정되지 않았습니다."
    echo ".env 파일에 API 기본 URL을 설정해주세요."
    exit 1
fi

# 웹훅 URL 조합 (기본 URL + 웹훅 경로)
WEBHOOK_URL="${NEXT_PUBLIC_COMMENT_LOCAL_API_BASE_URL}${COMMENT_BOT_WEBHOOK_URL}"

echo "API 기본 URL: ${NEXT_PUBLIC_COMMENT_LOCAL_API_BASE_URL}"
echo "웹훅 경로: ${COMMENT_BOT_WEBHOOK_URL}"
echo "완성된 웹훅 URL: ${WEBHOOK_URL}"
echo ""

# 각 파일마다 웹훅 호출
for FILE_PATH in "${FILES[@]}"; do
    echo "📁 처리 중: $FILE_PATH"
    
    POST_ID=$(echo "$FILE_PATH" | sed 's|^src/posts/||' | sed 's|\.mdx$||')
    CATEGORY=$(echo "$POST_ID" | awk -F'/' '{print $1}')
    DATE=$(echo "$POST_ID" | awk -F'/' '{print $2}')
    LANG=$(echo "$POST_ID" | awk -F'/' '{print $3}' | sed 's/content_//')
    LOCAL_URL="http://localhost:3000/blog/${LANG}/${CATEGORY}/${DATE}"

    echo "  POST_ID: ${POST_ID}"
    echo "  Local URL: ${LOCAL_URL}"

    echo "  AI 봇에게 연락 중..."
    RESPONSE=$(curl -s -X POST -H "Content-Type: application/json" \
      -d "{\"post_id\": \"${POST_ID}\", \"url\": \"${LOCAL_URL}\"}" \
      "${WEBHOOK_URL}")

    if [ $? -eq 0 ]; then
        echo "  ✅ 성공: ${RESPONSE}"
    else
        echo "  ❌ 실패: ${RESPONSE}"
    fi
    
    echo ""
done

echo "=== 모든 파일 처리 완료 ==="
echo "이제 지정된 포스트들에서 AI 댓글을 확인할 수 있습니다."
