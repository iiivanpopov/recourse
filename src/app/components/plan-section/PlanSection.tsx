import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { useInViewAnimations } from '@/shared/hooks'
import { Card, Typography } from '@/shared/ui'
import { Accordion } from '@/shared/ui/accordion'

import { courseModules } from './constants'

import styles from './PlanSection.module.css'

const texts: {
  id: string
  tag: 'div' | 'h1' | 'h2'
  variant: 'body' | 'subtitle' | 'title'
}[] = [
  { tag: 'h1', variant: 'title', id: 'plan.title' },
  { tag: 'h2', variant: 'subtitle', id: 'plan.subtitle' }
]

export const PlanSection = () => {
  const [ref, inView] = useInView({
    amount: 0.2,
    rootMargin: '-20% 0%'
  })

  const textTrail = useInViewAnimations(texts.length, inView)
  const coursesTrail = useInViewAnimations(courseModules.length, inView)

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      {textTrail.map((style, i) => {
        const text = texts[i]
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
      <div className={styles.courses}>
        {coursesTrail.map((style, i) => {
          const module = courseModules[i]
          return (
            <animated.div
              key={module.title}
              className={styles.courseWrapper}
              style={style}
            >
              <Card className={styles.course}>
                <Accordion>
                  <Accordion.Trigger withIcon>
                    <div className={styles.triggerText}>
                      <span>{module.icon}</span>
                      <Typography
                        variant='label'
                        tag='div'
                      >
                        <FormattedMessage id={`plan.module${i + 1}.title`} />
                      </Typography>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <ul className={styles.list}>
                      {module.topics.map((topic, ti) => (
                        <li key={topic}>
                          <Typography>
                            <FormattedMessage
                              id={`plan.module${i + 1}.topic${ti + 1}`}
                            />
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion>
              </Card>
            </animated.div>
          )
        })}
      </div>
    </section>
  )
}
