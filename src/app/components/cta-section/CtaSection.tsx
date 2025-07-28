import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { useInViewAnimation, useInViewAnimations } from '@/shared/hooks'
import { Button, Typography } from '@/shared/ui'

import { AnimatedReactIcon } from './components'

import styles from './CtaSection.module.css'

const texts: {
  id: string
  tag: 'div' | 'h1' | 'h2'
  variant: 'body' | 'subtitle' | 'title'
}[] = [
  { tag: 'h1', variant: 'title', id: 'course.title' },
  { tag: 'h2', variant: 'subtitle', id: 'course.subtitle' },
  { tag: 'div', variant: 'body', id: 'course.description' }
]

const buttons: {
  id: string
  variant: 'contained' | 'outlined'
}[] = [
  { variant: 'contained', id: 'button.purchase_now' },
  { variant: 'outlined', id: 'button.learn_more' }
]

export const CtaSection = () => {
  const [ref, inView] = useInView({
    amount: 0.4,
    rootMargin: '-20% 0%'
  })

  const textTrail = useInViewAnimations(texts.length, inView)
  const buttonTrail = useInViewAnimations(buttons.length, inView)
  const reactIconSpring = useInViewAnimation(inView)

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      <div className={styles.cta}>
        {textTrail.map((style, i) => (
          <animated.div
            key={texts[i].id}
            style={style}
          >
            <Typography
              variant={texts[i].variant}
              tag={texts[i].tag}
            >
              <FormattedMessage id={texts[i].id} />
            </Typography>
          </animated.div>
        ))}
        <div className={styles.actions}>
          {buttonTrail.map((style, i) => (
            <animated.div
              key={buttons[i].id}
              style={{ ...style }}
            >
              <Button variant={buttons[i].variant}>
                <FormattedMessage id={buttons[i].id} />
              </Button>
            </animated.div>
          ))}
        </div>
      </div>
      <animated.div
        className={styles.iconWrapper}
        style={reactIconSpring}
      >
        <AnimatedReactIcon
          className={styles.reactIcon}
          delay={100}
          inView={inView}
        />
      </animated.div>
    </section>
  )
}
