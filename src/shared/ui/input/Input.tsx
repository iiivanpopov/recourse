import type { ComponentPropsWithRef } from 'react'

import clsx from 'clsx'
import { useId } from 'react'

import { LoaderIcon } from '@/assets/icons'
import { Typography } from '@/shared/ui'

import styles from './Input.module.css'

interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'onChange' | 'value'> {
  className?: string
  disabled?: boolean
  error?: string
  hint?: string
  label?: string
  loading?: boolean
  ref?: React.Ref<HTMLInputElement>
  valid?: boolean
  value?: string
  variant?: 'ghost' | 'outlined' | 'underlined'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  value,
  onChange,
  label,
  hint,
  error,
  valid = false,
  loading = false,
  disabled = false,
  variant = 'outlined',
  className,
  ...rest
}: InputProps) => {
  const id = useId()

  return (
    <div className={clsx(styles.inputWrapper, className)}>
      {label && (
        <Typography
          variant='label'
          className={styles.label}
          tag='label'
          htmlFor={id}
        >
          {label}
        </Typography>
      )}

      <div style={{ position: 'relative' }}>
        <input
          className={clsx(
            styles.input,
            {
              [styles.inputError]: !!error,
              [styles.inputValid]: valid,
              [styles.inputLoading]: loading
            },
            {
              [styles.underlined]: variant === 'underlined',
              [styles.ghost]: variant === 'ghost'
            }
          )}
          disabled={disabled || loading}
          id={id}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {loading && <LoaderIcon className={styles.loadingIcon} />}
      </div>

      {error && (
        <Typography
          variant='label'
          className={styles.error}
          tag='div'
        >
          {error}
        </Typography>
      )}

      {hint && !error && (
        <Typography
          variant='caption'
          className={styles.hint}
          tag='div'
        >
          {hint}
        </Typography>
      )}
    </div>
  )
}
