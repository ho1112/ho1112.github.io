import dayjs from 'dayjs'
import Link from 'next/link'
import { devHitsUrl } from '@/config/constant'
import { isDev } from '@/utils/development'
import IconGithub from '@/components/icon/Github'
import IconLinkedin from '@/components/icon/LinkedIn'

export const Footer = () => {
  const hitUrl = isDev() ? devHitsUrl : '/blog'

  return (
    <footer className="flex flex-col items-center justify-center gap-4 pb-16 pt-20 text-center">
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/ho1112" target="_blank">
          <IconGithub
            className="fill-foreground transition hover:fill-chomin"
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/lee-hoyeon/" target="_blank">
          <IconLinkedin
            className="fill-foreground transition hover:fill-chomin"
            height={30}
            width={30}
          />
        </Link>
      </div>
      {/* hits.seeyoufarm */}
      {/* <a href="https://hits.seeyoufarm.com">
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fho1112.github.io%2Fblog&count_bg=%2331CED2&title_bg=%2331CED2&icon=&icon_color=%23E7E7E7&title=TOTAL VIEWS&edge_flat=false"/>
      </a> */}
      {/* hits.sh */}
      <a href={`https://hits.sh/ho1112.github.io${hitUrl}/`}>
        <img
          alt="Hits"
          src={`https://hits.sh/ho1112.github.io${hitUrl}.svg?view=today-total&style=for-the-badge&label=TOTAL%20VIEW&color=31ced2&labelColor=31ced2"/`}
        />
      </a>
      <div>
        © {dayjs().year()} <span className="font-semibold">Hoyeon LEE</span> |
        Powered by Next.js, GitHub Pages
      </div>
    </footer>
  )
}
