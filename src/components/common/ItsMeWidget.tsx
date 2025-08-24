'use client'

import { useEffect, useRef } from 'react'

interface Props {
  language: 'ko' | 'ja'
  theme: 'light' | 'dark'
}

export default function ItsMeWidgetLoader({ language, theme }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // 페이지 이동 시 기존의 스크립트를 삭제
    const existingScript = ref.current.querySelector('script')
    if (existingScript) {
      ref.current.removeChild(existingScript)
    }

    // react CDN을 수동으로 추가
    const reactScript = document.createElement('script')
    reactScript.src = 'https://unpkg.com/react@18/umd/react.development.js'

    const reactDOMScript = document.createElement('script')
    reactDOMScript.src =
      'https://unpkg.com/react-dom@18/umd/react-dom.development.js'

    // 위젯 스크립트를 추가
    const widgetScript = document.createElement('script')
    widgetScript.src = `https://its-me-vert.vercel.app/widget.js?lang=${language}&theme=${theme}`

    ref.current.appendChild(reactScript)
    ref.current.appendChild(reactDOMScript)
    ref.current?.appendChild(widgetScript)
  }, [language, theme])

  return <div ref={ref} id="its-me-chatbot-container" />
}
