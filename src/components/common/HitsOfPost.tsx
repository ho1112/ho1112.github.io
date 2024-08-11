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
        const response = await fetch(
          `https://hits.sh/api/urns/ho1112.github.io${url}`,
        )
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
      {isDev() ? (
        <a href={`https://hits.sh/ho1112.github.io${hitUrl}`}>
          <img
            alt="Hits"
            src={`https://hits.sh/ho1112.github.io${hitUrl}.svg?style=flat-square&label=%20&color=ffffff&labelColor=ffffff`}
          />
        </a>
      ) : (
        <>
          <Eye className="w-3.5" />
          <span>{hits}</span>
        </>
      )}
    </>
  )
}
