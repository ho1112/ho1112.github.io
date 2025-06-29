import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from '@/lib/post'
import CategoryList from './CategoryList'
import PostCard from './PostCard'

interface PostListProps {
  language: string
  category?: string
}

const PostListPage = async ({ language, category }: PostListProps) => {
  const postList = await getSortedPostList(language, category)
  const categoryList = await getCategoryDetailList(language)
  const allPostCount = await getAllPostCount(language)

  // 최신 포스터4개를 표시
  const latestPostList = postList.slice(0, 4)
  // 최신을 제외한 모든 포스터
  const allPostList = postList.slice(4)

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
        <ul className="grid grid-cols-1 gap-1 md:grid-cols-4 md:grid-rows-2">
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
      {/* 나머지 포스트를 3열 그리드로 표시하는 새로운 섹션 */}
      <section className="mt-8 mx-auto px-4 w-full max-w-[1068px]">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {allPostList.map((post, index) => (
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

export default PostListPage
