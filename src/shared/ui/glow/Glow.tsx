import type { ComponentPropsWithRef } from 'react'

import clsx from 'clsx'

import styles from './Glow.module.css'

interface GlowProps extends ComponentPropsWithRef<'div'> {
  className?: string
}

export const Glow = ({ className, ...props }: GlowProps) => (
  <div
    className={clsx(styles.glow, className)}
    {...props}
  />
)
