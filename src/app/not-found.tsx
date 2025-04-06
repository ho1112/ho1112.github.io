'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const messages = ['｡°(°.◜ᯅ◝°)°｡', '(˃̣̣̣̣︿˂̣̣̣̣ )', '(๑•́ ᎔ ก̀๑)', '╥﹏╥', '•᷄⌓•᷅']
  const [randomMessage, setRandomMessage] = useState('')

  useEffect(() => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    setRandomMessage(message)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mt-28 text-center px-4">
      <p className="text-[15vw] lg:text-[150px] whitespace-nowrap mb-6">
        {randomMessage}
      </p>
      <h2 className="text-2xl font-semibold mb-4">Not Found</h2>
      <Link
        href="/"
        className="border border-[#e4e4e4] rounded-md text-gray-800 leading-[38px] px-4"
      >
        Home
      </Link>
    </div>
  )
}
