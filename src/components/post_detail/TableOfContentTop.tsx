import Link from 'next/link'
import { HeadingItem } from '@/config/types'
import { cn } from '@/lib/utils'

interface Props {
  toc: HeadingItem[]
}

/**
 * 目次
 * ~1279px
 */
const TableOfContentTop = ({ toc }: Props) => {
  if (toc.length === 0) return null

  return (
    <nav className="xl:hidden">
      <ul>
        {toc.map((item) => (
          <li
            key={item.link}
            className={cn(item.indent === 1 && 'ml-4', 'my-0 py-1 ')}
          >
            <Link
              href={item.link}
              className="underline-offset-4 hover:text-chomin"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  )
}

export default TableOfContentTop
