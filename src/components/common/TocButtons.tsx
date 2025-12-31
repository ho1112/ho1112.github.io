'use client'

import { ArrowUpToLine, MessageSquareText } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '../ui/button'

interface ButtonProps {
  size?: number
  className?: string
}

const CHARACTERS = ['mario', 'harrypotter', 'rocket', 'ironman'] as const
type Character = (typeof CHARACTERS)[number]
type State = 'idle' | 'ready' | 'up'

const getImagePath = (character: Character, state: State): string => {
  const extension = character === 'ironman' ? 'png' : 'svg'
  return `/icon/scroll/${character}_${state}.${extension}`
}

// 스크롤 위치를 가져오는 유틸 함수
const getScrollTop = (): number => {
  return document.documentElement.scrollTop || document.body.scrollTop || 0
}

// Fisher-Yates 셔플 알고리즘
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const ScrollTop = ({ size = 64, className }: ButtonProps) => {
  const characterOrder = useMemo(() => shuffleArray([...CHARACTERS]), [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [state, setState] = useState<State>('idle')
  const [isScrolling, setIsScrolling] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const scrollCheckRef = useRef<number | null>(null)
  const scrollStartPoint = 550
  const scrollHiddenPoint = 1000

  // 스크롤 위치 추적하여 버튼 표시/숨김
  const checkScrollPosition = useCallback(() => {
    setShowButton(getScrollTop() > scrollHiddenPoint)
  }, [scrollHiddenPoint])

  useEffect(() => {
    // 초기 체크
    checkScrollPosition()

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', checkScrollPosition, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [checkScrollPosition])

  // 이미지 프리로딩
  useEffect(() => {
    // 현재 캐릭터의 모든 상태 이미지 프리로딩
    const currentChar = characterOrder[currentIndex]
    const states: State[] = ['idle', 'ready', 'up']
    states.forEach((s) => {
      const img = new Image()
      img.src = getImagePath(currentChar, s)
    })

    // 다음 캐릭터의 idle 이미지도 프리로딩
    const nextIndex = (currentIndex + 1) % CHARACTERS.length
    const nextChar = characterOrder[nextIndex]
    const nextImg = new Image()
    nextImg.src = getImagePath(nextChar, 'idle')
  }, [characterOrder, currentIndex])

  // 스크롤 완료 감지
  useEffect(() => {
    if (!isScrolling) return

    const checkScrollComplete = () => {
      const scrollTop = getScrollTop()

      if (scrollTop <= scrollStartPoint) {
        setIsScrolling(false)
        setState('idle')
        // 다음 캐릭터로 순환
        setCurrentIndex((prev) => (prev + 1) % CHARACTERS.length)
        scrollCheckRef.current = null
      } else {
        scrollCheckRef.current = requestAnimationFrame(checkScrollComplete)
      }
    }

    scrollCheckRef.current = requestAnimationFrame(checkScrollComplete)

    return () => {
      if (scrollCheckRef.current) {
        cancelAnimationFrame(scrollCheckRef.current)
        scrollCheckRef.current = null
      }
    }
  }, [isScrolling, scrollStartPoint])

  const handleClick = () => {
    if (isScrolling) return

    setState('up')
    setIsScrolling(true)

    window.scrollTo({ top: scrollStartPoint, behavior: 'smooth' })
  }

  const handleMouseEnter = () => {
    if (state !== 'up' && !isScrolling) {
      setState('ready')
    }
  }

  const handleMouseLeave = () => {
    if (state !== 'up' && !isScrolling) {
      setState('idle')
    }
  }

  // 스크롤이 1000px 이하일 때 버튼 숨김
  if (!showButton) {
    return null
  }

  const currentCharacter = characterOrder[currentIndex]
  const imagePath = getImagePath(currentCharacter, state)

  // 공통 button 스타일
  const buttonStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'inline-block',
  }

  // 이미지 경로가 없을 때 원래 화살표 아이콘 표시
  if (!imagePath) {
    return (
      <button onClick={handleClick} className={className} style={buttonStyle}>
        <ArrowUpToLine size={22} />
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={buttonStyle}
    >
      <img
        src={imagePath}
        alt={`Scroll to top - ${currentCharacter}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      />
    </button>
  )
}

export const ScrollToComment = ({ size = 16, className }: ButtonProps) => {
  const scrollToGiscus = () =>
    document.querySelector('.giscus')?.scrollIntoView()
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToGiscus}
      className={className}
    >
      <MessageSquareText size={size} />
    </Button>
  )
}
