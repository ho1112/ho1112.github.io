import { MDXComponents } from 'mdx/types'
import { Callout } from './Callout'
import { Image } from './Image'
import { ExternalLink } from './Link'

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  blockquote: Callout,
  Callout,
}
