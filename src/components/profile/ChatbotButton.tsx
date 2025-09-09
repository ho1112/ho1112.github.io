'use client'

interface ChatbotButtonProps {
  language: 'ko' | 'ja'
}

export default function ChatbotButton({ language }: ChatbotButtonProps) {
  const handleClick = () => {
    document.getElementById('itsme')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <button
      onClick={handleClick}
      className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      {language === 'ko' ? '챗봇 보기' : 'チャットボットを見る'}
    </button>
  )
}
