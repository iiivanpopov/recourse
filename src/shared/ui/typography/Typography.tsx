import type { ComponentPropsWithRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './Typography.module.css'

export type TypographyTag = 'div' | 'h1' | 'h2' | 'h3' | 'label'
export type TypographyVariant =
  | 'body'
  | 'caption'
  | 'heading'
  | 'label'
  | 'overline'
  | 'subtitle'
  | 'title'

type TypographyProps<T extends TypographyTag> = {
  children: ReactNode
  className?: string
  tag?: T
  variant?: TypographyVariant
} & ComponentPropsWithRef<T>

export const Typography = <T extends TypographyTag = 'div'>({
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
