'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CategoryDetail } from '@/config/types'
import { CategoryButton } from './CategoryButton'
import { CategoryExpandableMenu } from './CategoryExpandableMenu'

interface CategoryListProps {
  language: string
  categoryList: CategoryDetail[]
  allPostCount: number
  currentCategory?: string
}

const CategoryList = ({
  language,
  categoryList,
  allPostCount,
  currentCategory = 'all',
}: CategoryListProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(currentCategory)
  const onCategoryChange = (value: string) => {
    if (value === 'all') {
      router.push(`/blog/${language}/`)
    } else {
      router.push(`/blog/${language}/${value}`)
    }
  }

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    onCategoryChange(value)
    setIsOpen(false)
  }

  const categories = [
    {
      displayName: 'HOME',
      value: 'all',
      isCurrent: currentCategory === 'all',
      href: `/blog/${language}/`,
    },
    {
      displayName: 'weekly',
      value: 'weekly',
      isCurrent: currentCategory === 'weekly',
      href: `/blog/${language}/weekly/`,
    },
    {
      displayName: 'workLog',
      value: 'workLog',
      isCurrent: currentCategory === 'workLog',
      href: `/blog/${language}/workLog/`,
    },
    {
      displayName: 'Dev',
      value: 'Dev',
      isCurrent: currentCategory === 'Dev',
      subCategories: [
        { value: 'releaseNote', displayName: 'releaseNote', language },
        { value: 'Web', displayName: 'Web', language },
      ],
    },
    {
      displayName: 'blog',
      value: 'blog',
      isCurrent: currentCategory === 'blog',
      href: `/blog/${language}/blog/`,
    },
    {
      displayName: 'codeLab',
      value: 'codeLab',
      isCurrent: currentCategory === 'codeLab',
      href: `/blog/${language}/codeLab/`,
    },
  ]

  return (
    <>
      {/* pc */}
      <section className="mx-auto mb-10 px-4 hidden sm:block max-w-[1068px]">
        <ul className="flex gap-8 text-base font-bold">
          {categories.map((category) =>
            category.subCategories ? (
              <CategoryExpandableMenu
                key={category.displayName}
                displayName={category.displayName}
                isCurrent={category.isCurrent}
                subCategories={category.subCategories}
              />
            ) : (
              <CategoryButton
                key={category.displayName}
                href={category.href}
                isCurrent={category.isCurrent}
                displayName={category.displayName}
              />
            ),
          )}
        </ul>
      </section>
      {/* sp */}
      <section className="mb-10 px-4 sm:hidden">
        <div className="relative inline-block w-64">
          {/* 드롭다운 트리거 */}
          <div
            className="flex justify-between items-center bg-white border border-gray-300 p-3 rounded-md cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedValue === 'all' ? 'HOME' : selectedValue}</span>
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* 드롭다운 목록 */}
          {isOpen && (
            <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {categories.map((category) =>
                category.subCategories ? (
                  <>
                    <li
                      key={category.value}
                      className="flex items-center leading-initial px-2 hover:bg-gray-200"
                    >
                      {category.value}
                      <i className="mcon align-top text-3xl">arrow_drop_down</i>
                    </li>
                    <ul className="ml-4">
                      {category.subCategories.map((subCategory) => (
                        <li
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelect(subCategory.value)}
                        >
                          {subCategory.displayName}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <li
                    key={category.value}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelect(category.value)}
                  >
                    {category.displayName}
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default CategoryList
