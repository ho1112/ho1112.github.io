import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import * as Icon from './Icons'

type CalloutType = 'info' | 'warn' | 'danger' | 'normal' | 'border'

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType
  title?: string
}

interface IconType {
  [key: string]: {
    icon: () => JSX.Element
    boxClass: string
  }
}

const metadata: IconType = {
  info: {
    icon: Icon.Warn,
    boxClass: 'text-informative-foreground bg-informative',
  },
  danger: {
    icon: Icon.Danger,
    boxClass: 'text-destructive-foreground bg-destructive',
  },
  warn: {
    icon: Icon.Info,
    boxClass: 'text-warning-foreground bg-warning',
  },

  normal: {
    icon: Icon.Normal,
    boxClass: 'text-secondary-foreground bg-secondary',
  },

  border: {
    icon: Icon.Normal,
    boxClass: 'text-secondary-foreground border border-gray-200',
  },
}

export const Callout = (props: CalloutProps) => {
  const type = props.type || 'normal'
  const metaObj = metadata[type]
  const Icon = metaObj.icon
  const boxClassName = metaObj.boxClass

  return (
    <div
      className={cn(
        'my-6 flex items-center gap-3 rounded-md px-5 py-4',
        boxClassName,
      )}
    >
      {type !== 'normal' && type !== 'border' && (
        <div>
          <Icon />
        </div>
      )}

      <div className="callout-contents flex-1">
        {props.title && (
          <span style={{ fontWeight: 'bold' }}>{props.title}</span>
        )}
        {props.children}
      </div>
    </div>
  )
}
