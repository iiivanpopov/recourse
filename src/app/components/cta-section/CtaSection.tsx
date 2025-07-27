import { animated } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { useIntersectionRatio } from '@/shared/hooks'
import { AnimatedButton, AnimatedGlow, AnimatedTypography } from '@/shared/ui'

import { AnimatedSection } from '../section'
import { AnimatedReactIcon } from './components/animated-react-icon'
import { useCtaSectionAnimation } from './hooks/useCtaSectionAnimation'

import styles from './CtaSection.module.css'

export const CtaSection = () => {
  const [ref, intersectionRatio] = useIntersectionRatio<HTMLDivElement>()
  const [iconRef, iconIntersectionRatio] =
    useIntersectionRatio<HTMLDivElement>()

  const {
    titleTransition,
    subtitleTransition,
    descriptionTransition,
    button1Transition,
    button2Transition,
    iconTransition,
    glow1Transition,
    glow2Transition
  } = useCtaSectionAnimation(intersectionRatio, iconIntersectionRatio)

  return (
    <AnimatedSection className={styles.section}>
      {glow1Transition((props, item) =>
        item ? (
          <AnimatedGlow
            className={styles.blob1}
            style={props}
          />
        ) : null
      )}
      {glow2Transition((props, item) =>
        item ? (
          <AnimatedGlow
            className={styles.blob2}
            style={props}
          />
        ) : null
      )}

      <div className={styles.content}>
        <div
          ref={ref}
          className={styles.cta}
        >
          <div className={styles.text}>
            <div className={styles.title}>
              {titleTransition((props, item) =>
                item ? (
                  <AnimatedTypography
                    variant='title'
                    style={props}
                    tag='h1'
                  >
                    <FormattedMessage id='course.title' />
                  </AnimatedTypography>
                ) : null
              )}
            </div>

            <div className={styles.subtitle}>
              {subtitleTransition((props, item) =>
                item ? (
                  <AnimatedTypography
                    variant='subtitle'
                    style={props}
                    tag='h2'
                  >
                    <FormattedMessage id='course.subtitle' />
                  </AnimatedTypography>
                ) : null
              )}
            </div>

            <div>
              {descriptionTransition((props, item) =>
                item ? (
                  <AnimatedTypography
                    variant='body'
                    className={styles.body}
                    style={props}
                    tag='div'
                  >
                    <FormattedMessage id='course.description' />
                  </AnimatedTypography>
                ) : null
              )}
            </div>
          </div>
          <div className={styles.actions}>
            {button1Transition((props, item) =>
              item ? (
                <AnimatedButton style={props}>
                  <FormattedMessage id='button.purchase_now' />
                </AnimatedButton>
              ) : null
            )}

            {button2Transition((props, item) =>
              item ? (
                <AnimatedButton
                  variant='outlined'
                  style={props}
                >
                  <FormattedMessage id='button.learn_more' />
                </AnimatedButton>
              ) : null
            )}
          </div>
        </div>

        <div
          ref={iconRef}
          className={styles.iconWrapper}
        >
          {iconTransition((style, item) =>
            item ? (
              <animated.div style={style}>
                <AnimatedReactIcon
                  className={styles.reactIcon}
                  delay={100}
                  size={512}
                />
              </animated.div>
            ) : null
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
