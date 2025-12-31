'use client'

import { MessageSquareText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
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
  const [characterOrder, setCharacterOrder] = useState<Character[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [state, setState] = useState<State>('idle')
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollCheckRef = useRef<number | null>(null)
  const scrollStartPoint = 550

  // 초기화: 랜덤 순서 생성
  useEffect(() => {
    const shuffled = shuffleArray([...CHARACTERS])
    setCharacterOrder(shuffled)
  }, [])

  // 이미지 프리로딩
  useEffect(() => {
    if (characterOrder.length === 0) return

    // 현재 캐릭터의 모든 상태 이미지 프리로딩
    const currentChar = characterOrder[currentIndex]
    if (currentChar) {
      const states: State[] = ['idle', 'ready', 'up']
      states.forEach((s) => {
        const img = new Image()
        img.src = getImagePath(currentChar, s)
      })
    }

    // 다음 캐릭터의 idle 이미지도 프리로딩
    const nextIndex = (currentIndex + 1) % CHARACTERS.length
    const nextChar = characterOrder[nextIndex]
    if (nextChar) {
      const img = new Image()
      img.src = getImagePath(nextChar, 'idle')
    }
  }, [characterOrder, currentIndex])

  // 스크롤 완료 감지
  useEffect(() => {
    if (!isScrolling) return

    const checkScrollComplete = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop || 0

      if (scrollTop <= scrollStartPoint) {
        setIsScrolling(false)
        setState('idle')
        // 다음 캐릭터로 순환
        setCurrentIndex((prev) => (prev + 1) % CHARACTERS.length)
        if (scrollCheckRef.current) {
          cancelAnimationFrame(scrollCheckRef.current)
          scrollCheckRef.current = null
        }
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
  }, [isScrolling])

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

  const currentCharacter = characterOrder[currentIndex]
  const imagePath = currentCharacter
    ? getImagePath(currentCharacter, state)
    : null

  // 초기 로딩 중이거나 이미지 경로가 없을 때
  if (!imagePath || characterOrder.length === 0) {
    return (
      <button
        onClick={handleClick}
        className={className}
        style={{
          width: size,
          height: size,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <div style={{ width: size, height: size }} />
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'inline-block',
      }}
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
