'use client'
// import { Metadata } from 'next';

import FloatingButton from '@/components/common/FloatingButton';
import Giscus from '@/components/post_detail/Giscus';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSidebar from '@/components/post_detail/TableOfContentSidebar';
import TocTop from '@/components/post_detail/TableOfContentTop';
// import { baseDomain } from '@/config/const';
// import { getPostDetail, getPostPaths, parsePostAbstract } from '@/lib/post';
import { parseToc } from '@/lib/postUtils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeadingItem, Post } from '@/config/types';
// import { getPostPaths, parsePostAbstract } from '@/lib/post';
import { PostBody } from '@/components/post_detail/PostBody';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

// export async function generateMetadata({ params: { category, slug } }: Props): Promise<Metadata> {
//   const post = await getPostDetail(category, slug);

//   const title = `${post.title} | choco-mint`;
//   const imageURL = `${baseDomain}${post.thumbnail}`;

//   return {
//     title,
//     description: post.desc,

//     openGraph: {
//       title,
//       description: post.desc,
//       type: 'article',
//       publishedTime: post.date.toISOString(),
//       url: `${baseDomain}${post.url}`,
//       images: [imageURL],
//     },
//     twitter: {
//       title,
//       description: post.desc,
//       images: [imageURL],
//     },
//   };
// }

// export function generateStaticParams() {
//   const postPaths: string[] = getPostPaths();
//   const paramList = postPaths
//     .map((path) => parsePostAbstract(path))
//     .map((item) => ({ category: item.categoryPath, slug: item.slug }));
//   return paramList;
// }

const PostDetail = ({ params: { category, slug } }: Props) => {
  const [post, setPost] = useState<Post | null>(null);
  const [toc, setToc] = useState<HeadingItem[]>([]);
  const { i18n } = useTranslation();
  const language = i18n.language;

  const fetchPost = async() => {
    const response = await fetch(`/api/post/${slug}`, {
      method: 'POST', // 메서드를 POST로 설정
      body: JSON.stringify({ category: category, slug: slug, language: language }) // 필요한 데이터를 JSON 형태로 전송
    });
    const postData = await response.json();
    setPost(postData);
    const toc = parseToc(postData.content);
    setToc(toc)
  }

  useEffect(() => {
    fetchPost()
  }, [language])


  return (
    <div className='prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6'>
      {post ?
      <PostHeader post={post} />
      : <div>loading...</div>
      }
      <TocTop toc={toc} />
      <article className='relative'>
      {post?.content &&
        <TocSidebar toc={toc} />
      }
      <PostBody source={post ? post.content : ''} />
      </article>
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;
