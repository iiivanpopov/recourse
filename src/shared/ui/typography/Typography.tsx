import type { ComponentPropsWithRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './Typography.module.css'

type Tag = 'div' | 'h1' | 'h2' | 'h3' | 'label'
type Variant =
  | 'body'
  | 'caption'
  | 'heading'
  | 'label'
  | 'overline'
  | 'subtitle'
  | 'title'

type TypographyProps<T extends Tag> = {
  children: ReactNode
  className?: string
  tag?: T
  variant?: Variant
} & ComponentPropsWithRef<T>

export const Typography = <T extends Tag = 'div'>({
  children,
  tag = 'div' as T,
  variant = 'body',
  className,
  ...props
}: TypographyProps<T>) => {
  const Component = tag as React.ElementType

  return (
    <Component
      className={clsx(styles.typography, styles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
