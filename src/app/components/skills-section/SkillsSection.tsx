import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { SKILL_CARDS } from '@/app/constants'
import { BREAKPOINTS } from '@/shared/constants'
import {
  useInViewAnimation,
  useInViewAnimations,
  useViewport
} from '@/shared/hooks'
import { Typography } from '@/shared/ui'

import { SkillCardCarousel } from './CardCarousel'
import { SkillCard } from './SkillCard'

import styles from './SkillsSection.module.css'

export const SkillsSection = () => {
  const [ref, inView] = useInView({ amount: 0.4, rootMargin: '-20% 0%' })

  const cardsTrail = useInViewAnimations(SKILL_CARDS.length, inView)
  const textSpring = useInViewAnimation(inView)
  const cardCarouselSpring = useInViewAnimation(inView)

  const viewport = useViewport()

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      <animated.div style={textSpring}>
        <Typography
          variant='title'
          tag='h1'
        >
          <FormattedMessage id='skills.title' />
        </Typography>
      </animated.div>
      {viewport.width > BREAKPOINTS.LG && (
        <div className={styles.skillCards}>
          {cardsTrail.map((style, i) => (
            <animated.div
              key={SKILL_CARDS[i].id}
              style={style}
            >
              <SkillCard {...SKILL_CARDS[i]} />
            </animated.div>
          ))}
        </div>
      )}
      {viewport.width <= 1024 && (
        <animated.div
          className={styles.skillCarousel}
          style={cardCarouselSpring}
        >
          <SkillCardCarousel />
        </animated.div>
      )}
    </section>
  )
}
