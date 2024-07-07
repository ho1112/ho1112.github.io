'use client';

import Image from 'next/image';

export const Language = () => {

  const switchLang = () => {
    alert('gogo')
  }

  return (
    <div className='relative px-6 py-2 w-8 h-auto cursor-pointer rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground aspect-square' onClick={switchLang}>
      <Image
        className='absolute top-3 right-2 z-[1]'
        src="/icon/korea-flag.svg"
        width={20}
        height={20}
        alt="Korean"
      />
      <Image
        className='absolute left-2 bottom-3 z-[2]'
        src="/icon/japan-flag.svg"
        width={20}
        height={20}
        alt="Japanese"
      />
    </div>
  )

}