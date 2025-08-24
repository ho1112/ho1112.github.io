// import Cookies from 'js-cookie'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export const Language = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLanguage = pathname.includes('/ko') ? 'ko' : 'ja'
  const newLanguage = currentLanguage === 'ko' ? 'ja' : 'ko'

  const switchLang = () => {
    const newPath = pathname.replace(`/${currentLanguage}`, `/${newLanguage}`)
    // Cookies.set('language', newLanguage, { expires: 30 })
    router.push(newPath)
  }

  const imageAlt = {
    currentLanguage: currentLanguage === 'ko' ? '한국어' : '日本語',
    subLanguage: currentLanguage === 'ko' ? '日本語' : '한국어',
  }

  return (
    <div
      className="relative px-6 py-2 w-8 h-auto cursor-pointer rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground aspect-square"
      onClick={switchLang}
    >
      <Image
        className="absolute left-2 bottom-3 z-[2]"
        src={`/icon/${currentLanguage}-flag` + '.svg'}
        width={28}
        height={28}
        alt={imageAlt.currentLanguage}
      />
      <Image
        className="absolute top-2 right-2 z-[1]"
        src={`/icon/${newLanguage}-flag` + '.svg'}
        width={26}
        height={26}
        alt={imageAlt.subLanguage}
      />
    </div>
  )
}
