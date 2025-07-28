import type { ComponentPropsWithRef, ReactNode } from 'react'

import clsx from 'clsx'

import { LoaderIcon } from '@/assets/icons'

import styles from './Button.module.css'

export type ButtonVariant = 'contained' | 'icon' | 'outlined'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  className?: string
  isActive?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
}

export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'contained',
  isDisabled = false,
  isLoading = false,
  isActive = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        {
          [styles.disabled]: isDisabled || isLoading,
          [styles.active]: isActive && !(isDisabled && isLoading),
          [styles.loading]: isLoading
        },
        className
      )}
      type={type}
      {...props}
    >
      {children}
      {isLoading && <LoaderIcon className={styles.loadingIcon} />}
    </button>
  )
}
