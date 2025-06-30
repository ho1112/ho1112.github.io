import Link from 'next/link'
import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from '@/lib/post'
import { getLanguageText } from '@/utils/language'
import CategoryList from './CategoryList'
import PostCard from './PostCard'

interface PostListProps {
  language: string
  category?: string
}

const PostListPage = async ({ language, category }: PostListProps) => {
  const categoryList = await getCategoryDetailList(language)
  const allPostCount = await getAllPostCount(language)

  const t = getLanguageText(language, 'category')

  // 카테고리 페이지일 경우
  if (category) {
    const postList = await getSortedPostList(language, category)
    return (
      <>
        <section className="h-[48px] py-1 sm:border-b sm:shadow-md">
          <CategoryList
            language={language}
            allPostCount={allPostCount}
            categoryList={categoryList}
            currentCategory={category}
          />
        </section>
        <section className="mt-8 mx-auto px-4 w-full max-w-[1068px]">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {postList.map((post, index) => (
              <PostCard
                key={post.url + post.date}
                language={language}
                post={post}
                index={index}
                variant="grid"
              />
            ))}
          </ul>
        </section>
      </>
    )
  }

  // 메인 페이지일 경우
  const allPosts = await getSortedPostList(language)
  const latestPostList = allPosts.slice(0, 4)

  const allWorkLogPosts = allPosts.filter(
    (post) => post.categoryPublicName === 'workLog',
  )
  const workLogPosts = allWorkLogPosts.slice(0, 3)

  const allCodeLabPosts = allPosts.filter(
    (post) => post.categoryPublicName === 'codeLab',
  )
  const codeLabPosts = allCodeLabPosts.slice(0, 3)

  const allInspirationPosts = allPosts.filter(
    (post) => post.categoryPublicName === 'inspiration',
  )
  const inspirationPosts = allInspirationPosts.slice(0, 3)

  const otherCategories = categoryList.filter(
    (cat) =>
      cat.publicName !== 'workLog' &&
      cat.publicName !== 'codeLab' &&
      cat.publicName !== 'inspiration',
  )

  return (
    <>
      <section className="h-[48px] py-1 sm:border-b sm:shadow-md">
        <CategoryList
          language={language}
          allPostCount={allPostCount}
          categoryList={categoryList}
          currentCategory={category}
        />
      </section>
      {/* 최신 포스트 */}
      <section className="mt-4 mx-auto px-4 w-full max-w-[1068px]">
        <ul className="grid grid-cols-1 gap-1 md:grid-cols-4 md:grid-rows-2 md:h-[30vw]">
          {latestPostList.map((post, index) => (
            <PostCard
              key={post.url + post.date}
              language={language}
              post={post}
              index={index}
            />
          ))}
        </ul>
      </section>

      {/* workLog Posts */}
      <section className="mt-8 mx-auto px-4 w-full max-w-[1068px]">
        <h2 className="text-2xl font-bold mb-4">workLog</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workLogPosts.map((post, index) => (
            <PostCard
              key={post.url + post.date}
              language={language}
              post={post}
              index={index}
              variant="grid"
            />
          ))}
        </ul>
        {allWorkLogPosts.length > 3 && (
          <div className="mt-6 flex justify-center">
            <Link
              href={`/blog/${language}/workLog`}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-300"
            >
              workLog {t.more}
            </Link>
          </div>
        )}
      </section>

      {/* codeLab Posts */}
      <section className="mt-8 mx-auto px-4 w-full max-w-[1068px]">
        <h2 className="text-2xl font-bold mb-4">codeLab</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {inspirationPosts.map((post, index) => (
            <PostCard
              key={post.url + post.date}
              language={language}
              post={post}
              index={index}
              variant="grid"
            />
          ))}
        </ul>
        {allCodeLabPosts.length > 3 && (
          <div className="mt-6 flex justify-center">
            <Link
              href={`/blog/${language}/codeLab`}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-300"
            >
              codeLab {t.more}
            </Link>
          </div>
        )}
      </section>

      {/* inspiration Posts */}
      <section className="mt-8 mx-auto px-4 w-full max-w-[1068px]">
        <h2 className="text-2xl font-bold mb-4">inspiration</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {codeLabPosts.map((post, index) => (
            <PostCard
              key={post.url + post.date}
              language={language}
              post={post}
              index={index}
              variant="grid"
            />
          ))}
        </ul>
        {allInspirationPosts.length > 3 && (
          <div className="mt-6 flex justify-center">
            <Link
              href={`/blog/${language}/codeLab`}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-300"
            >
              inspiration {t.more}
            </Link>
          </div>
        )}
      </section>

      {/* Other Categories */}
      <section className="mt-8 mx-auto px-4 w-full max-w-[1068px]">
        <h2 className="text-2xl font-bold mb-4">{t.etc}</h2>
        <div className="flex flex-wrap gap-2">
          {otherCategories.map((cat) => (
            <Link
              key={cat.publicName}
              href={`/blog/${language}/${cat.dirName}`}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-300"
            >
              {cat.publicName}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default PostListPage
