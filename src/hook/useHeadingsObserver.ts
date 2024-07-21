import { HeadingItem } from '@/config/types';
import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (toc: HeadingItem[], query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          setupIntersectionObserver();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [toc]);

  function setupIntersectionObserver() {
    const elements = document.querySelectorAll(query);
    if (!elements.length) return;

    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          setActiveIdList((prev) => Array.from(new Set([...prev, targetId])));
        } else {
          setActiveIdList(prev => prev.filter(id => id !== targetId));
        }
      });
    }, { rootMargin: '-32px 0px -80px 0px' });

    elements.forEach(elem => observer.current?.observe(elem));
  }

  return [...activeIdList];
};
