import type { ComponentPropsWithRef } from 'react'

import clsx from 'clsx'
import { useId } from 'react'

import { LoaderIcon } from '@/assets/icons'
import { Typography } from '@/shared/ui'

import styles from './Input.module.css'

interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'onChange' | 'value'> {
  className?: string
  error?: string
  hint?: string
  isDisabled?: boolean
  isError?: boolean
  isLoading?: boolean
  isValid?: boolean
  label?: string
  ref?: React.Ref<HTMLInputElement>
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
  isError = false,
  isValid = false,
  isLoading = false,
  isDisabled = false,
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
              [styles.inputError]: isError,
              [styles.inputValid]: isValid,
              [styles.inputLoading]: isLoading,
              [styles.inputDisabled]: isDisabled || isLoading
            },
            {
              [styles.underlined]: variant === 'underlined',
              [styles.ghost]: variant === 'ghost'
            }
          )}
          disabled={isDisabled || isLoading}
          id={id}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {isLoading && <LoaderIcon className={styles.loadingIcon} />}
      </div>

      {isError && error && (
        <Typography
          variant='label'
          className={styles.error}
          tag='div'
        >
          {error}
        </Typography>
      )}

      {hint && !isError && (
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
