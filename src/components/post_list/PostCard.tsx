'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';

import { Post } from '@/config/types';
import { CalendarDays, Clock3 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('');

  useEffect(() => {
    const cookieLanguage = Cookies.get('i18next');
    setLanguage(cookieLanguage || i18n.language);
  }, [i18n.language]);

  return (
    <Link href={post.url}>
      <li className='flex h-full flex-col gap-3 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white'>
        <div className='relative aspect-video w-full rounded-t-md border-b'>
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes='(max-width: 1000px) 50vw, 450px'
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='flex flex-1 flex-col justify-between p-4 pt-1'>
          <div>
            <div className='text-sm font-medium text-chomin lg:text-base'>
              {post.categoryPublicName}
            </div>
            <h2 className='mb-3 mt-1 text-lg font-bold sm:text-xl md:text-lg'>{post.title}</h2>
          </div>
          <div className='flex justify-between gap-3 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-1'>
              <CalendarDays className='w-3.5' />
              {language &&
                <span>{post.year}{t('postHeader.year')} {post.month}{t('postHeader.month')} {post.day}{t('postHeader.day')}</span>
              }
            </div>
            <div className='flex items-center gap-1'>
              <Clock3 className='w-3.5' />
              {language &&
                <span>{post.readingMinutes}{t('postHeader.min')}</span>
              }
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
