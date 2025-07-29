import { animated, useInView } from '@react-spring/web'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import { useInViewAnimations, useTranslation } from '@/shared/hooks'
import { Button, Input, Typography } from '@/shared/ui'
import { v } from '@/shared/validation'

import styles from './NewslettersSection.module.css'

export const NewslettersSection = () => {
  const [ref, inView] = useInView({
    rootMargin: '-20% 0%',
    amount: 0.2
  })

  const { $t } = useTranslation()

  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const trail = useInViewAnimations(4, inView)

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const onSubscribe = () => {
    if (email.trim() === '') setError($t`input.error.required`)

    const validationResult = v.pipe(email, v.required, v.email)

    if (validationResult.errors.length > 0) {
      setError($t`input.error.${validationResult.errors[0]}`)
      setIsSuccess(false)
    } else {
      setError('')
      setIsSuccess(true)
    }
  }

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      <animated.div style={trail[0]}>
        <Typography
          variant='title'
          tag='h1'
        >
          <FormattedMessage id='newsletters.title' />
        </Typography>
      </animated.div>
      <animated.div style={trail[1]}>
        <Typography
          variant='subtitle'
          tag='h2'
        >
          <FormattedMessage id='newsletters.subtitle' />
        </Typography>
      </animated.div>
      <animated.div style={trail[2]}>
        <Input
          hint={$t`input.hint.newsletters`}
          isValid={!error && isSuccess}
          label={$t`input.label.email`}
          error={error ?? undefined}
          isError={!!error}
          onChange={onEmailChange}
          placeholder={$t`input.placeholder.email`}
        />
      </animated.div>
      <animated.div style={trail[3]}>
        <Button onClick={onSubscribe}>
          <FormattedMessage id='button.subscribe' />
        </Button>
      </animated.div>
    </section>
  )
}
