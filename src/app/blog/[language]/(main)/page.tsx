import PostListPage from '@/components/post_list/PostListPage';

type Props = {
  params: { language: string };
};

// // 허용된 param 외 접근시 404
export const dynamicParams = false;
export const dynamic = 'force-static'

export function generateStaticParams() {
  return [
    { language: 'ko' },
    { language: 'ja' },
  ];
}

const Lng = ({ params }: Props) => {
  const { language } = params;

  return (
    <PostListPage language={language} />
  )
};

export default Lng;
