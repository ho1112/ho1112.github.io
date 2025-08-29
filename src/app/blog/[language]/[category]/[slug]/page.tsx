import { Metadata } from 'next'
import { baseDomain, languages } from '@/config/constant'
import {
  getPostDetail,
  getPostPaths,
  parsePostAbstract,
  parseToc,
} from '@/lib/post'
import { CommentSection } from '@/components/comments/CommentSection'
import FloatingButton from '@/components/common/FloatingButton'
// import { Giscus } from '@/components/post_detail/Giscus'
import { PostBody } from '@/components/post_detail/PostBody'
import { PostHeader } from '@/components/post_detail/PostHeader'
import TocSidebar from '@/components/post_detail/TableOfContentSidebar'
import TocTop from '@/components/post_detail/TableOfContentTop'

type Props = {
  params: { language: string; category: string; slug: string }
}

// 허용된 param 외 접근시 404
export const dynamicParams = false
export const dynamic = 'force-static'

export async function generateMetadata({
  params: { language, category, slug },
}: Props): Promise<Metadata> {
  const post = await getPostDetail(language, category, slug)

  const title = `${post.title} | mintora`
  const imageURL = `${baseDomain}${post.thumbnail.slice(1)}`

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: 'article',
      publishedTime: post.date.toISOString(),
      url: `${baseDomain}${post.url.slice(1)}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: post.desc,
      images: [imageURL],
    },
  }
}

export function generateStaticParams() {
  const paramList = languages.flatMap((language) => {
    const postPaths: string[] = getPostPaths(language)
    return postPaths.map((path) => {
      const { categoryPath, slug } = parsePostAbstract(language, path)
      return { language, category: categoryPath, slug }
    })
  })

  return paramList
}

const PostDetail = async ({ params: { language, category, slug } }: Props) => {
  const post = await getPostDetail(language, category, slug)
  const toc = parseToc(post.content)
  const imageURL = `${post.thumbnail}`

  return (
    <>
      {/* image + header */}
      <div
        className="bg-cover bg-no-repeat bg-center relative w-full h-[550px]"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="prose dark:prose-invert absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[750px] mx-auto px-5 sm:px-6 bg-background">
          <div className=" px-5 py-3">
            <PostHeader language={language} post={post} />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="prose dark:prose-invert relative mx-auto w-full max-w-[750px] px-5 sm:px-6">
        <TocTop toc={toc} />
        <article className="relative">
          <TocSidebar toc={toc} />
          <PostBody post={post} />
        </article>
        <hr />
        {/* <Giscus language={language} /> */}
        <CommentSection
          postId={`${language}/${category}/${slug}`}
          language={language}
        />
        <FloatingButton />
      </div>
    </>
  )
}

export default PostDetail
