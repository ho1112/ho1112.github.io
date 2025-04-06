'use client'
import { useEffect, useState } from 'react'

export default function RandomEmoji() {
  const messages = ['｡°(°.◜ᯅ◝°)°｡', '(˃̣̣̣̣︿˂̣̣̣̣ )', '(๑•́ ᎔ ก̀๑)', '╥﹏╥', '•᷄⌓•᷅']
  const [randomMessage, setRandomMessage] = useState('')

  useEffect(() => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    setRandomMessage(message)
  }, [])

  return (
    <p className="text-[15vw] lg:text-[150px] whitespace-nowrap mb-6">
      {randomMessage}
    </p>
  )
}
