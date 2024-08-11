'use client'

import { Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import { devHitsUrl } from '@/config/constant'
import { isDev } from '@/utils/development'

interface HitsOfPostProps {
  url: string
}

export const HitsOfPost = ({ url }: HitsOfPostProps) => {
  const [hits, setHits] = useState<number | string>('-')
  const hitUrl = isDev() ? devHitsUrl : url

  useEffect(() => {
    const fetchHits = async () => {
      try {
        const response = isDev()
          ? await fetch(`/api/hits?url=${hitUrl}`)
          : await fetch(`https://hits.sh/api/urns/ho1112.github.io${url}`)

        const data = await response.json()
        setHits(data.total)
      } catch (error) {
        setHits('-')
        console.error('get Hits Error', error)
      }
    }

    fetchHits()
  }, [hitUrl])

  return (
    <>
      <Eye className="w-3.5" />
      <span>{hits}</span>
    </>
  )
}
