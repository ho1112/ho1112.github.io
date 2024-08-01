import PostListPage from '@/components/post_list/PostListPage';

type Props = {
  params: { language: string };
};

const Lng = ({ params }: Props) => {
  const { language } = params;

  return (
    <PostListPage language={language} />
  )
};

export default Lng;
