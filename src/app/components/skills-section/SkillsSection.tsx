import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { cards } from '@/app/components/skills-section/constants'
import { useInViewAnimation } from '@/shared/hooks'
import { useInViewAnimations } from '@/shared/hooks/useInViewAnimations'
import { useViewport } from '@/shared/hooks/useViewport'
import { Typography } from '@/shared/ui'

import { CardCarousel, SkillCard } from './components'

import styles from './SkillsSection.module.css'

export const SkillsSection = () => {
  const [ref, inView] = useInView({ amount: 0.4, rootMargin: '-20% 0%' })

  const cardsTrail = useInViewAnimations(cards.length, inView)
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
      <div
        className={
          viewport.width > 1024 ? styles.skillCards : styles.skillCarousel
        }
      >
        {viewport.width > 1024 &&
          cardsTrail.map((style, i) => (
            <animated.div
              key={cards[i].id}
              style={style}
            >
              <SkillCard {...cards[i]} />
            </animated.div>
          ))}
        {viewport.width <= 1024 && (
          <animated.div style={cardCarouselSpring}>
            <CardCarousel />
          </animated.div>
        )}
      </div>
    </section>
  )
}
