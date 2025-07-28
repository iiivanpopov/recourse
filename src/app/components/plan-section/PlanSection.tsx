import { animated, useInView } from '@react-spring/web'
import { FormattedMessage } from 'react-intl'

import { COURSE_MODULES, PLAN_TEXTS } from '@/app/constants'
import { useInViewAnimations } from '@/shared/hooks'
import { Accordion, Card, Typography } from '@/shared/ui'

import styles from './PlanSection.module.css'

export const PlanSection = () => {
  const [ref, inView] = useInView({
    amount: 0.2,
    rootMargin: '-20% 0%'
  })

  const textTrail = useInViewAnimations(PLAN_TEXTS.length, inView)
  const coursesTrail = useInViewAnimations(COURSE_MODULES.length, inView)

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      {textTrail.map((style, i) => {
        const text = PLAN_TEXTS[i]
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
          const module = COURSE_MODULES[i]
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
                        <FormattedMessage id={module.title} />
                      </Typography>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <ul className={styles.list}>
                      {module.topics.map(topicKey => (
                        <li key={topicKey}>
                          <Typography>
                            <FormattedMessage id={topicKey} />
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
