// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import { Post } from '@/config/types'
import { MdxComponents } from '../mdx'

interface Props {
  post: Post
}

export const PostBody = ({ post }: Props) => {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // 깃허브 Flavored 마크다운 지원 추가 (version downgrade)
            remarkGfm,
            // 텍스트 단축 코드를 실제 이모지 문자로 변환
            remarkEmoji,
            // 이모티콘 접근성 향상(html태그로 감싸줌)
            remarkA11yEmoji,
            // mdx 1줄 개행 지원
            remarkBreaks,
          ],
          rehypePlugins: [
            // pretty code block
            [
              // @ts-expect-error lib
              rehypePrettyCode,
              {
                theme: { dark: 'github-dark-dimmed', light: 'github-light' },
              },
            ],
            // toc id를 추가하고 제목을 연결
            rehypeSlug,
          ],
        },
      }}
      components={MdxComponents}
    />
  )
}
