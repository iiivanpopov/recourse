import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { CTA_BUTTONS, CTA_TEXTS } from '@/app/constants/uiElements'
import { useInViewAnimation, useInViewAnimations } from '@/shared/hooks'
import { Button, Typography } from '@/shared/ui'

import { AnimatedReactIcon } from './AnimatedReactIcon'

import styles from './CtaSection.module.css'

export const CtaSection = () => {
  const [ref, inView] = useInView({
    amount: 0.4,
    rootMargin: '-20% 0%'
  })

  const textTrail = useInViewAnimations(CTA_TEXTS.length, inView)
  const buttonTrail = useInViewAnimations(CTA_BUTTONS.length, inView)
  const reactIconSpring = useInViewAnimation(inView)

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      <div className={styles.cta}>
        {textTrail.map((style, i) => {
          const text = CTA_TEXTS[i]
          return (
            <animated.div
              key={text.id}
              style={style}
            >
              <Typography
                variant={text.variant}
                tag={text.tag}
              >
                <FormattedMessage id={text.id} />
              </Typography>
            </animated.div>
          )
        })}
        <div className={styles.actions}>
          {buttonTrail.map((style, i) => {
            const button = CTA_BUTTONS[i]
            return (
              <animated.div
                key={button.id}
                style={{ ...style }}
              >
                <Button variant={button.variant}>
                  <FormattedMessage id={button.id} />
                </Button>
              </animated.div>
            )
          })}
        </div>
      </div>
      <AnimatedReactIcon
        className={styles.reactIcon}
        delay={100}
        inView={inView}
        style={reactIconSpring}
      />
    </section>
  )
}
