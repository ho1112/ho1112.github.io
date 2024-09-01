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
