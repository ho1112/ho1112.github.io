import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`py-2 px-4 ${isCurrent ? 'font-bold' : ''}`}>
        {displayName}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 bg-white shadow-lg">
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
      )}
    </div>
  )
}
