'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import i18n from "@/i18n";
import Cookies from 'js-cookie';

export const Language = () => {
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    src: '/icon/' + (i18n.language === 'ja' ? 'japan' : 'korea') + '-flag.svg',
    alt: i18n.language === 'ja' ? 'Japanese' : 'Korean',
    code: i18n.language
  });
  const [subLanguage, setSubLanguage] = useState({
    src: '/icon/' + (i18n.language === 'ja' ? 'korea' : 'japan') + '-flag.svg',
    alt: i18n.language === 'ja' ? 'Korean' : 'Japanese',
    code: i18n.language === 'ja' ? 'ko' : 'ja'
  });

  const switchLang = () => {
    const newLang = i18n.language === 'ja' ? 'ko' : 'ja';
    changeLanguage(newLang)
    Cookies.set('i18next', newLang, { expires: 365 });
  }

  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang, () => {
      setCurrentLanguage({
        src: '/icon/' + (newLang === 'ja' ? 'japan' : 'korea') + '-flag.svg',
        alt: newLang === 'ja' ? 'Japanese' : 'Korean',
        code: newLang,
      });
      setSubLanguage({
        src: '/icon/' + (newLang === 'ja' ? 'korea' : 'japan') + '-flag.svg',
        alt: newLang === 'ja' ? 'Korean' : 'Japanese',
        code: newLang === 'ja' ? 'ko' : 'ja',
      });
    });
  }

  useEffect(() => {
    setMounted(true);
    const storedLang = Cookies.get('i18next')
    if (storedLang && i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang).then(() => {
         // 상태 업데이트로 컴포넌트 강제 리렌더링
         // state updateでコンポーネンんと強制リーレンダリング
        changeLanguage(storedLang)
      });
    }
  }, []);

  if (!mounted) {
    return null;
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