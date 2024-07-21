"use client";

import { useState, useEffect } from "react";
// @ts-expect-error no types
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import type { FC, ReactNode } from "react";
import type { MDXProps } from "mdx/types";
import type { EvaluateOptions } from "@mdx-js/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { MdxComponents } from "../mdx";

type ReactMDXContent = (props: MDXProps) => ReactNode;
type Runtime = Pick<EvaluateOptions, "jsx" | "jsxs" | "Fragment">;

const runtime = { jsx, jsxs, Fragment } as Runtime;

export const PostBody: FC<{ source?: string }> = ({ source = "" }) => {
  const [MdxContent, setMdxContent] = useState<ReactMDXContent>(() => () => null);

  useEffect(() => {
    const rehypePlugins = [
      rehypeSlug,
      [rehypePrettyCode, {
        theme: {
          dark: 'github-dark-dimmed',
          light: 'github-light'
        }
      }]
    ];
    const remarkPlugins = [remarkGfm, remarkBreaks, remarkA11yEmoji]; // remarkBreaks ok
    const options = {
      ...runtime,
      rehypePlugins: rehypePlugins as any,
      remarkPlugins: remarkPlugins as any,
    };
    evaluate(source, options).then(r => setMdxContent(() => r.default));

  }, [source]);

  return <MdxContent
  components={MdxComponents}/>;
};