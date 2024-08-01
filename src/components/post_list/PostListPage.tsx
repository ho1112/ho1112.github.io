import CategoryList from './CategoryList';
import PostCard from './PostCard';
import { getAllPostCount, getCategoryDetailList, getSortedPostList } from '@/lib/post';

interface PostListProps {
  language: string
  category?: string;
}

const PostListPage = async ({ language, category }: PostListProps) => {
  const postList = await getSortedPostList(language, category);
  const categoryList = await getCategoryDetailList(language);
  const allPostCount = await getAllPostCount(language);

  return (
    <section className='mx-auto mt-12 w-full max-w-[950px] px-4'>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section>
        <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12'>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PostListPage;
