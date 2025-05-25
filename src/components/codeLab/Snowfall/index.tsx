'use client'
import { useEffect, useRef } from 'react'

// 눈송이의 속성을 정의하는 인터페이스
interface Snowflake {
  x: number
  y: number
  radius: number
  density: number // 눈송이의 움직임 다양성을 위한 값
  color: string // 눈송이 색상
}

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // 다크 모드 강제 적용
    const htmlElement = document.documentElement
    const originalTheme = localStorage.getItem('theme')
    const hasHtmlDarkTheme = htmlElement.classList.contains('dark')

    // 1. 다크 모드 테마 저장
    localStorage.setItem('theme', 'dark')

    // 2. html태그에 'dark' 클래스 직접 추가
    if (!hasHtmlDarkTheme) {
      htmlElement.classList.add('dark')
    }

    const canvasInstance = canvasRef.current
    // canvasInstance가 null이면 getContext는 호출되지 않고 contextInstance는 undefined/null이 됩니다.
    const contextInstance = canvasInstance?.getContext('2d')

    // canvas와 context가 모두 유효한 경우에만 전체 로직을 실행합니다.
    if (canvasInstance && contextInstance) {
      // 이 블록 내에서 canvasInstance와 contextInstance는 null이 아님이 보장됩니다.

      let animationFrameId: number
      let snowflakes: Snowflake[] = []
      const numSnowflakes: number = 150 // 눈송이 개수

      // 캔버스 크기를 설정하는 함수
      const setCanvasSize = () => {
        canvasInstance.width = window.innerWidth
        canvasInstance.height = window.innerHeight
      }

      // 눈송이 생성 함수
      const createSnowflakes = (): void => {
        snowflakes = [] // 기존 눈송이 배열 초기화
        for (let i = 0; i < numSnowflakes; i++) {
          snowflakes.push({
            x: Math.random() * canvasInstance.width, // canvasInstance 사용
            y: Math.random() * canvasInstance.height, // canvasInstance 사용
            radius: Math.random() * 3 + 1,
            density: Math.random() * numSnowflakes,
            color: 'rgba(255, 255, 255, 0.8)',
          })
        }
      }

      // 눈송이 위치 업데이트 함수
      const updateSnowflakes = (): void => {
        for (let i = 0; i < snowflakes.length; i++) {
          const s = snowflakes[i]
          // 눈송이 낙하 속도(반지름 제곱근 * 반지름에 따른 추가속도 계수 + 기본속도)
          s.y += Math.pow(s.radius, 0.5) * 0.5 + 0.2
          // 눈송이 좌우 방향(고유 각도↑하면다양한 패턴 * 반지름 제곱근 * 움직임 속도)
          s.x += Math.sin(s.density * 0.05) * s.radius * 0.1

          // 화면 아래로 벗어난 눈송이 처리 (canvasInstance 사용)
          if (s.y > canvasInstance.height + s.radius) {
            snowflakes[i].x = Math.random() * canvasInstance.width
            snowflakes[i].y = -s.radius
          }
          // 화면 좌우로 벗어난 눈송이 처리 (canvasInstance 사용)
          if (s.x > canvasInstance.width + s.radius) {
            // right -> left
            snowflakes[i].x = -s.radius
          } else if (s.x < -s.radius) {
            // left -> right
            snowflakes[i].x = canvasInstance.width + s.radius
          }
        }
      }

      // 눈송이 그리기 함수
      const drawSnowflakes = (): void => {
        // contextInstance와 canvasInstance가 null이 아님이 보장되므로 안전하게 사용 가능
        contextInstance.clearRect(
          0,
          0,
          canvasInstance.width,
          canvasInstance.height,
        )
        for (let i = 0; i < snowflakes.length; i++) {
          const s = snowflakes[i]
          contextInstance.fillStyle = s.color
          contextInstance.beginPath()
          contextInstance.arc(s.x, s.y, s.radius, 0, Math.PI * 2, true)
          contextInstance.fill()
        }
        updateSnowflakes() // 눈송이 위치 업데이트 후 다시 그리기 위해 호출
      }

      // 애니메이션 루프 정의
      const animate = (): void => {
        drawSnowflakes()
        animationFrameId = requestAnimationFrame(animate)
      }

      // 리사이즈 이벤트 핸들러
      const handleResize = (): void => {
        setCanvasSize()
        // 화면 크기가 변경되면 눈송이를 다시 생성하여 새 크기에 맞게 분포시킵니다.
        createSnowflakes()
      }

      // 초기 설정
      setCanvasSize() // 초기 캔버스 크기 설정
      createSnowflakes() // 눈송이 초기 생성
      animate() // 애니메이션 시작

      window.addEventListener('resize', handleResize)

      // 컴포넌트 언마운트 시 실행될 클린업 함수
      return () => {
        window.removeEventListener('resize', handleResize)
        if (animationFrameId) {
          // animationFrameId는 이 블록이 실행된 경우에만 설정됩니다.
          cancelAnimationFrame(animationFrameId)
        }

        // 테마 복원 로직
        if (!hasHtmlDarkTheme) {
          // Snowfall 컴포넌트가 'dark' 클래스를 추가했다면, 제거합니다.
          htmlElement.classList.remove('dark')
        }

        // localStorage의 테마 값을 원래대로 복원합니다.
        if (originalTheme) {
          localStorage.setItem('theme', originalTheme)
        } else {
          // 원래 테마 설정이 없었다면 'theme' 항목을 localStorage에서 제거합니다.
          localStorage.removeItem('theme')
        }
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[999]"
    />
  )
}

export default Snowfall
