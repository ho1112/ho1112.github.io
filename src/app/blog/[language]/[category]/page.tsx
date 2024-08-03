import { Metadata } from 'next';

import PostListPage from '@/components/post_list/PostListPage';
import { baseDomain, blogName, blogThumbnailURL, languages } from '@/config/constant';
import { getCategoryList, getCategoryPublicName } from '@/lib/post';

type Props = {
  params: { language:string; category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;
export const dynamic = 'force-static'

export function generateStaticParams() {
  const categoryList = getCategoryList()
  const paramList: { language: string, category: string }[] = languages.flatMap((language) => {
    return categoryList.map((category) => {
      return { language, category };
    });
  });

  return paramList;
}

export async function generateMetadata({ params: { category } }: Props): Promise<Metadata> {
  const cg = getCategoryPublicName(category);
  const title = `${cg} | ${blogName}`;
  const url = `${baseDomain}/${category}`;

  return {
    title,
    openGraph: {
      title,
      url,
      images: [blogThumbnailURL],
    },
    twitter: {
      title,
      images: [blogThumbnailURL],
    },
  };
}

const CategoryPage = async ({ params: {language, category} }: Props) => {
  return <PostListPage language={language} category={category} />;
};

export default CategoryPage;
