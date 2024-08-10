import { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export const ExternalLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target="_blank"
      href={href.toString() || ''}
      className="break-words text-chomin no-underline underline-offset-4 hover:underline"
    >
      {children}
    </a>
  )
}
