import Link from 'next/link';

import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 pb-16 pt-20 text-center'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/ho1112' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-chomin'
            height={30}
            width={30}
          />
        </Link>
        <Link href='https://www.linkedin.com/' target='_blank'>
          <IconLinkedin
            className='fill-foreground transition hover:fill-chomin'
            height={30}
            width={30}
          />
        </Link>
      </div>
      {/* TODO: 조회수 */}
      {/* <a href='https://hits.sh/www.d5br5.dev/blog/'>
        <img
          alt='Hits'
          src='https://hits.sh/www.d5br5.dev/blog.svg?view=today-total&style=for-the-badge&label=visitors&extraCount=1248&color=db2777&labelColor=db2777'
        />
      </a> */}
      <div>
        © 2024. <span className='font-semibold'>Hoyeon LEE</span> all rights reserved.
      </div>
    </footer>
  );
};
