import type { ComponentPropsWithoutRef, ReactNode, Ref } from 'react'

import clsx from 'clsx'

import styles from './Section.module.css'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
  className?: string
  ref?: Ref<HTMLElement>
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={clsx(styles.section, className)}
      {...props}
    >
      {children}
    </section>
  )
}
