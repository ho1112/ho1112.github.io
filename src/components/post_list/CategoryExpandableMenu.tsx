import { cn } from '@/lib/utils'

interface Props {
  displayName: string
  isCurrent: boolean
  subCategories: {
    subName: string
    displayName: string
    language: string
  }[]
}

export const CategoryExpandableMenu = ({
  displayName,
  isCurrent,
  subCategories,
}: Props) => {
  return (
    <div className="relative group">
      <button
        className={cn(
          'pt-2 pb-2 px-4 border-b-[3px] border-transparent group-hover:border-chomin-light',
          {
            'border-b-[3px] border-chomin-light': isCurrent,
          },
        )}
      >
        {displayName}
        <i className="material-icons absolute align-top">arrow_drop_down</i>
      </button>
      <ul
        className="absolute z-10 bg-white shadow-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
      >
        {subCategories.map((sub) => (
          <li key={sub.subName} className="whitespace-nowrap">
            <a
              href={`/blog/${sub.language}/${sub.subName}/`}
              className="block py-2 px-4 hover:bg-chomin-light"
            >
              {sub.displayName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
