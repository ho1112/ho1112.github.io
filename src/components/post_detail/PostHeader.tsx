'use client';

import Link from 'next/link';
// import { useTranslation } from "react-i18next";

import { Post } from '@/config/types';
import { CalendarDays, Clock3 } from 'lucide-react';
import { HitsOfPost } from '../common/HitsOfPost';

interface Props {
  post: Post;
}

export const PostHeader = ({ post }: Props) => {
  // const { t } = useTranslation();

  return (
    <header className='mt-14 text-center'>
      <h1 className='mb-5 text-3xl'>{post.title}</h1>
      <div className='mb-3 text-base'>
        <Link
          href={`/blog/${post.categoryPath}`}
          className='font-semibold text-chomin no-underline underline-offset-4 hover:underline'
        >
          {post.categoryPublicName}
        </Link>
      </div>
      <div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
        <div className='flex items-center gap-1'>
          <CalendarDays className='w-3.5' />
          {/* <span>{post.year}{t('postHeader.year')} {post.month}{t('postHeader.month')} {post.day}{t('postHeader.day')}</span> */}
        </div>
        <div className='flex items-center gap-1'>
          <Clock3 className='w-3.5' />
          {/* <span>{post.readingMinutes}{t('postHeader.min')}</span> */}
        </div>
        <HitsOfPost url={post.url}/>
      </div>
      <hr className='mt-5' />
    </header>
  );
};
