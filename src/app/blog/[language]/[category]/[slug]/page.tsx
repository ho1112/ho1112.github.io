import { Metadata } from 'next';

import FloatingButton from '@/components/common/FloatingButton';
import Giscus from '@/components/post_detail/Giscus';
import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSidebar from '@/components/post_detail/TableOfContentSidebar';
import TocTop from '@/components/post_detail/TableOfContentTop';
import { baseDomain, languages } from '@/config/constant';
import { getPostDetail, getPostPaths, parsePostAbstract, parseToc } from '@/lib/post';

type Props = {
  params: { language: string; category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateMetadata({ params: { language, category, slug } }: Props): Promise<Metadata> {
  const post = await getPostDetail(language, category, slug);

  const title = `${post.title} | choco-mint`;
  const imageURL = `${baseDomain}${post.thumbnail}`;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: 'article',
      publishedTime: post.date.toISOString(),
      url: `${baseDomain}${post.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: post.desc,
      images: [imageURL],
    },
  };
}

export function generateStaticParams() {
  const paramList = languages.flatMap((language) => {
    const postPaths: string[] = getPostPaths(language);
    return postPaths.map((path) => {
      const { categoryPath, slug } = parsePostAbstract(language, path);
      return { language, category: categoryPath, slug };
    });
  });

  return paramList;
}

const PostDetail = async ({ params: { language, category, slug } }: Props) => {
  const post = await getPostDetail(language, category, slug);
  const toc = parseToc(post.content);

  return (
    <div className='prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6'>
      <PostHeader post={post} />
      <TocTop toc={toc} />
      <article className='relative'>
        <TocSidebar toc={toc} />
        <PostBody post={post} />
      </article>
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;
