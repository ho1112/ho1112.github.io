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

  const onCategoryChange = (value: string) => {
    if (value === 'all') {
      router.push(`/blog/${language}/`)
    } else {
      router.push(`/blog/${language}/${value}`)
    }
  }

  const [isOpen, setIsOpen] = useState(false) // 드롭다운 열림 상태
  const [selectedValue, setSelectedValue] = useState(currentCategory) // 선택된 값

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: any) => {
    setSelectedValue(value)
    onCategoryChange(value) // 선택된 값으로 카테고리 변경
    setIsOpen(false) // 드롭다운 닫기
  }

  return (
    <>
      {/* pc */}
      <section className="mx-auto mb-10 px-4 hidden sm:block max-w-[1068px]">
        <ul className="flex gap-8 text-base font-bold">
          <CategoryButton
            href={`/blog/${language}/`}
            isCurrent={currentCategory === 'all'}
            displayName="HOME"
            // count={allPostCount}
          />
          <CategoryButton
            href={`/blog/${language}/weekly/`}
            isCurrent={currentCategory === 'weekly'}
            displayName="weekly"
          />
          <CategoryExpandableMenu
            displayName="webDev"
            isCurrent={currentCategory === 'webDev'}
            subCategories={[
              { subName: 'workLog', displayName: 'workLog', language },
              { subName: 'releaseNote', displayName: 'releaseNote', language },
              { subName: 'FE', displayName: 'FE', language },
              { subName: 'DevOps', displayName: 'DevOps', language },
              { subName: 'techStory', displayName: 'techStory', language },
            ]}
          />
          <CategoryButton
            href={`/blog/${language}/blog/`}
            isCurrent={currentCategory === 'blog'}
            displayName="blog"
          />
          <CategoryButton
            href={`/blog/${language}/codeLab/`}
            isCurrent={currentCategory === 'codeLab'}
            displayName="codeLab"
          />
        </ul>
      </section>
      {/* sp */}
      <section className="mb-10 px-4 sm:hidden">
        <div className="relative inline-block w-64">
          {/* 드롭다운 트리거 */}
          <div
            className="bg-white border border-gray-300 p-3 rounded-md cursor-pointer flex justify-between items-center"
            onClick={toggleDropdown}
          >
            <span>{selectedValue === 'all' ? 'HOME' : selectedValue}</span>
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
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
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect('HOME')}
              >
                HOME
              </li>
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect('weekly')}
              >
                weekly
              </li>
              <li
                className="flex items-center leading-initial px-2 hover:bg-gray-200"
                // onClick={(e) => e.preventDefault()}
              >
                webDev<i className="mcon align-top text-3xl">arrow_drop_down</i>
              </li>
              <ul className="ml-4">
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect('workLog')}
                >
                  workLog
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect('releaseNote')}
                >
                  releaseNote
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect('FE')}
                >
                  FE
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect('DevOps')}
                >
                  DevOps
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect('techStory')}
                >
                  techStory
                </li>
              </ul>
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect('blog')}
              >
                blog
              </li>
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect('codeLab')}
              >
                codeLab
              </li>
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default CategoryList
