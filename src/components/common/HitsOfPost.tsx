'use client';

import { useTheme } from 'next-themes';

interface HitsOfPostProps {
  url: string;
}

export const HitsOfPost = ({ url }: HitsOfPostProps ) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? '000000' : 'ffffff'

  return (
    <div>
      <a href={`https://hits.sh/ho1112.github.io${url}`}>
        <img alt="Hits" src={`https://hits.sh/ho1112.github.io${url}.svg?style=flat-square&label=HITS&color=${theme}&labelColor=${theme}`} />
      </a>
    </div>
  );
};
