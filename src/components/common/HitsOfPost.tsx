'use client';

import { devHitsUrl } from '@/config/constant';
import { isDev } from '@/utils/development';
import { useTheme } from 'next-themes';

interface HitsOfPostProps {
  url: string;
}

export const HitsOfPost = ({ url }: HitsOfPostProps ) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? '000000' : 'ffffff'
  const hitUrl = isDev() ? devHitsUrl : url

  return (
    <div>
      <a href={`https://hits.sh/ho1112.github.io${hitUrl}`}>
        <img alt="Hits" src={`https://hits.sh/ho1112.github.io${hitUrl}.svg?style=flat-square&label=HITS&color=${theme}&labelColor=${theme}`} />
      </a>
    </div>
  );
};
