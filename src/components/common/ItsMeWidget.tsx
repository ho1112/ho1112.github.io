'use client'

import { useEffect, useRef } from 'react'

interface Props {
  language: 'ko' | 'ja'
  theme: 'light' | 'dark'
}

export default function ItsMeWidgetLoader({ language, theme }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 이전에 있던 모든 것을 깨끗하게 지웁니다.
    container.innerHTML = ''

    let isCancelled = false

    // 스크립트들을 생성합니다.
    const reactScript = document.createElement('script')
    reactScript.src = 'https://unpkg.com/react@18/umd/react.development.js'

    const reactDOMScript = document.createElement('script')
    reactDOMScript.src =
      'https://unpkg.com/react-dom@18/umd/react-dom.development.js'

    const widgetScript = document.createElement('script')
    widgetScript.src = `https://its-me-vert.vercel.app/widget.js?lang=${language}&theme=${theme}`

    // 스크립트 로딩 순서를 보장합니다.
    reactScript.onload = () => {
      if (isCancelled || !container) return
      container.appendChild(reactDOMScript)
    }

    reactDOMScript.onload = () => {
      if (isCancelled || !container) return
      container.appendChild(widgetScript)
    }

    // 첫 번째 스크립트 로딩을 시작합니다.
    container.appendChild(reactScript)

    // 정리(Cleanup) 함수
    return () => {
      isCancelled = true
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [language, theme]) // language나 theme이 바뀔 때마다 이 로직이 다시 실행됩니다.

  return <div ref={containerRef} id="its-me-chatbot-container" />
}
