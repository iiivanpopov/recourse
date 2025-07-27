import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { Card, Glow, Typography } from '@/shared/ui'

import { Section } from '../section'
import {
  architectureSkillKeys,
  reactSkillKeys,
  typescriptSkillKeys
} from './constants/skills'
import { useSkillsSectionAnimation } from './hooks/useSkillsSectionAnimation'

import styles from './SkillsSection.module.css'

const cards = [
  {
    titleId: 'skills.react.title',
    keys: reactSkillKeys,
    baseId: 'skills.react.'
  },
  {
    titleId: 'skills.typescript.title',
    keys: typescriptSkillKeys,
    baseId: 'skills.typescript.'
  },
  {
    titleId: 'skills.architecture.title',
    keys: architectureSkillKeys,
    baseId: 'skills.architecture.'
  }
]

export const SkillsSection = () => {
  const [ref, inView] = useInView({ amount: 0.4 })

  const trail = useSkillsSectionAnimation(inView)

  return (
    <Section className={styles.skillsSection}>
      <Glow className={styles.blob1} />
      <Glow className={styles.blob2} />
      <Glow className={styles.blob3} />

      <div
        ref={ref}
        className={styles.skillCards}
      >
        {trail.map((style, i) => {
          const { titleId, keys, baseId } = cards[i]
          return (
            <animated.div
              key={titleId}
              style={style}
            >
              <Card className={styles.skillsCard}>
                <Typography
                  variant='heading'
                  tag='div'
                >
                  <FormattedMessage id={titleId} />
                </Typography>
                <ul className={styles.skills}>
                  {keys.map(key => (
                    <li
                      key={key}
                      className={styles.skill}
                    >
                      <Typography
                        variant='body'
                        tag='div'
                      >
                        <FormattedMessage id={`${baseId}${key}`} />
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            </animated.div>
          )
        })}
      </div>
    </Section>
  )
}
