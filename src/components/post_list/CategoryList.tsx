'use client'

import { useRouter } from 'next/navigation'
import { CategoryDetail } from '@/config/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CategoryButton } from './CategoryButton'

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

  return (
    <>
      <section className="mb-10 hidden sm:block">
        <ul className="flex gap-3">
          <CategoryButton
            href={`/blog/${language}/`}
            isCurrent={currentCategory === 'all'}
            displayName="All"
            count={allPostCount}
          />
          {categoryList.map((cg) => (
            <CategoryButton
              key={cg.dirName}
              href={`/blog/${language}/${cg.dirName}/`}
              displayName={cg.publicName}
              isCurrent={cg.dirName === currentCategory}
              count={cg.count}
            />
          ))}
        </ul>
      </section>
      <section className="mb-10 sm:hidden">
        <Select onValueChange={onCategoryChange} defaultValue={currentCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All ({allPostCount})</SelectItem>
            {categoryList.map((cg) => (
              <SelectItem key={cg.dirName} value={cg.dirName}>
                {cg.publicName} ({cg.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </>
  )
}

export default CategoryList
