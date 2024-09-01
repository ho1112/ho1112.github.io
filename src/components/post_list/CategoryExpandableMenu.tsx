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
      <button className={`pt-2 pb-3 px-4 ${isCurrent ? 'font-bold' : ''}`}>
        {displayName}
      </button>

      <ul
        className="absolute z-10 -mt-px bg-white shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
      >
        {subCategories.map((sub) => (
          <li key={sub.subName} className="whitespace-nowrap">
            <a
              href={`/blog/${sub.language}/${sub.subName}/`}
              className="block py-2 px-4 hover:bg-gray-100"
            >
              {sub.displayName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
