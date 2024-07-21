
// 'use client'
// 'use server'
import { Post } from '@/config/types';
import { MdxComponents } from '../mdx';
// import { HeadingItem, Post } from '@/config/types';
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
// import rehypeCodeTitles from 'rehype-code-titles';
// import rehypePrism from 'rehype-prism-plus';


interface Props {
  post: any;
  // category: string
  // slug: string
}

export const PostBody = ({post}: Props) => {
  // const [post, setPost] = useState<Post | null>(null);
  // const [serializedSource, setSerializedSource] = useState<any>(null)

  // // const [toc, setToc] = useState<HeadingItem[]>([]);
  // const { i18n } = useTranslation();
  // const language = i18n.language;

  
  // useEffect(() => {
  //   // 비동기 함수를 정의
  //   // getPostDetailがserver sideであるため、apiで取得
  //   const fetchPost = async() => {
  //     const response = await fetch(`/api/post/${slug}`, {
  //       method: 'POST', // 메서드를 POST로 설정
  //       body: JSON.stringify({ category: category, slug: slug, language: language }) // 필요한 데이터를 JSON 형태로 전송
  //     });
  //     const postData = await response.json();
  //     return await serialize(postData.content);
  //   }

  //   fetchPost()
  //   .then((data) => setSerializedSource(data))
  //   // const serialize = fetchPost(); // 비동기 함수 호출
  // }, [language]);  // 의존성 배열에 언어 추가
  // const fetchPost = async() => {
  //   return await serialize(post.content)
  // }

  // console.log("post ", post)
  // const markdown = `Just a link: www.nasa.gov.`

  // return serialize(markdown, {
  //   parseFrontmatter: true,
  //   mdxOptions: {
  //     remarkPlugins: [remarkToc, remarkGfm],
  //     rehypePlugins: [
  //       rehypeSlug,
  //       // rehypeCodeTitles,
  //       // rehypePrism,
  //       [
  //         rehypeAutolinkHeadings,
  //         {
  //           properties: {
  //             className: ['anchor'],
  //           },
  //         },
  //       ],
  //     ],
  //     format: 'mdx',
  //   },
  // });

  // return (
  //   <div>111</div>
  // )

  return (
    <>
    <div>
      
    {/* <Markdown
    // remarkPlugins={[remarkGfm]}
    rehypePlugins={[remarkA11yEmoji]}
    
    >{post ? post.content : markdown}</Markdown> */}
      {/* <div dangerouslySetInnerHTML={{ __html: post ? post.content : '' }}></div> */}
      
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions:
          {
            development: process.env.NODE_ENV === 'development',
            remarkPlugins: [
              // 깃허브 Flavored 마크다운 지원 추가 (version downgrade)
              remarkGfm,
              // 이모티콘 접근성 향상
              remarkA11yEmoji,
              // mdx 1줄 개행 지원
              remarkBreaks,
            ],
            rehypePlugins: [
              // pretty code block
              [
                // @ts-ignore
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
      </div>
    </>
  );
};
