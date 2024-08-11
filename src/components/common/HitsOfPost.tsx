'use client'

import { useTheme } from 'next-themes'
import { ICON_SVG_BASE64_EYES, devHitsUrl } from '@/config/constant'
import { isDev } from '@/utils/development'

interface HitsOfPostProps {
  url: string
}

export const HitsOfPost = ({ url }: HitsOfPostProps) => {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? '121212' : 'ffffff'
  const hitUrl = isDev() ? devHitsUrl : url

  return (
    <a href={`https://hits.sh/ho1112.github.io${hitUrl}`}>
      <img
        alt="Hits"
        src={`https://hits.sh/ho1112.github.io${hitUrl}.svg?style=flat-square&label=%20&color=${theme}&labelColor=${theme}&logo=data:image/svg+xml;base64,${ICON_SVG_BASE64_EYES}`}
      />
    </a>
  )
}
