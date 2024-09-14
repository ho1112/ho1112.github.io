import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props {
  isCurrent: boolean
  displayName: string
  href: string
  count?: number
}

export const CategoryButton = ({
  isCurrent,
  displayName,
  href,
  count,
}: Props) => {
  return (
    <div>
      <button
        className={cn(
          'pt-2 pb-2 px-4 hover:border-b-[3px] hover:border-chomin-light',
          {
            'border-b-[3px] border-chomin-light': isCurrent,
          },
        )}
      >
        <Link href={href}>
          {displayName} {count && `(${count})`}
        </Link>
      </button>
    </div>
  )
}
