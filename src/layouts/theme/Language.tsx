'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Language = () => {

  const [currentLanguage, setCurrentLanguage] = useState({
    src: '/icon/japan-flag.svg',
    alt: 'Japanese'
  })
  const [subLanguage, setSubLanguage] = useState({
    src: '/icon/korea-flag.svg',
    alt: 'Korean'
  })


  const switchLang = () => {
    setCurrentLanguage(prev => ({
      src: prev.src === '/icon/japan-flag.svg' ? '/icon/korea-flag.svg' : '/icon/japan-flag.svg',
      alt: prev.alt === 'Japanese' ? 'Korean' : 'Japanese'
    }))
    setSubLanguage(prev => ({
      src: prev.src === '/icon/korea-flag.svg' ? '/icon/japan-flag.svg' : '/icon/korea-flag.svg',
      alt: prev.alt === 'Korean' ? 'Japanese' : 'Korean'
    }))
  }

  return (
    <div className='relative px-6 py-2 w-8 h-auto cursor-pointer rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground aspect-square' onClick={switchLang}>
      <Image
        className='absolute left-2 bottom-3 z-[2]'
        src={currentLanguage.src}
        width={28}
        height={28}
        alt={currentLanguage.alt}
      />
      <Image
        className='absolute top-2 right-2 z-[1]'
        src={subLanguage.src}
        width={26}
        height={26}
        alt={subLanguage.alt}
      />
    </div>
  )

}