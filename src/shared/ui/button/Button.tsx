import type { ComponentPropsWithRef, ReactNode } from 'react'

import clsx from 'clsx'

import { LoaderIcon } from '@/assets/icons'

import styles from './Button.module.css'

export type ButtonVariant = 'contained' | 'icon' | 'outlined'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  active?: boolean
  children: ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  variant?: ButtonVariant
}

export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'contained',
  disabled = false,
  loading = false,
  active = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        {
          [styles.active]: active && !(disabled && loading),
          [styles.loading]: loading
        },
        className
      )}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {children}
      {loading && <LoaderIcon className={styles.loadingIcon} />}
    </button>
  )
}
