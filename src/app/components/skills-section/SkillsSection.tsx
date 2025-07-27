import { FormattedMessage } from 'react-intl'

import { Card, Glow, Typography } from '@/shared/ui'

import { Section } from '../section'
import {
  architectureSkillKeys,
  reactSkillKeys,
  typescriptSkillKeys
} from './constants/skills'

import styles from './SkillsSection.module.css'

export const SkillsSection = () => {
  return (
    <Section className={styles.skillsSection}>
      <Glow className={styles.blob1} />
      <Glow className={styles.blob2} />
      <Glow className={styles.blob3} />

      <Typography
        variant='title'
        tag='h1'
      >
        <FormattedMessage id='skills.title' />
      </Typography>
      <div className={styles.skillCards}>
        <Card className={styles.skillsCard}>
          <Typography
            variant='heading'
            tag='div'
          >
            <FormattedMessage id='skills.react.title' />
          </Typography>
          <ul className={styles.skills}>
            {reactSkillKeys.map(key => (
              <li
                key={key}
                className={styles.skill}
              >
                <Typography
                  variant='body'
                  tag='div'
                >
                  <FormattedMessage id={`skills.react.${key}`} />
                </Typography>
              </li>
            ))}
          </ul>
        </Card>
        <Card className={styles.skillsCard}>
          <Typography
            variant='heading'
            tag='div'
          >
            <FormattedMessage id='skills.typescript.title' />
          </Typography>
          <ul className={styles.skills}>
            {typescriptSkillKeys.map(key => (
              <li
                key={key}
                className={styles.skill}
              >
                <Typography
                  variant='body'
                  tag='div'
                >
                  <FormattedMessage id={`skills.typescript.${key}`} />
                </Typography>
              </li>
            ))}
          </ul>
        </Card>
        <Card className={styles.skillsCard}>
          <Typography
            variant='heading'
            tag='div'
          >
            <FormattedMessage id='skills.architecture.title' />
          </Typography>
          <ul className={styles.skills}>
            {architectureSkillKeys.map(key => (
              <li
                key={key}
                className={styles.skill}
              >
                <Typography
                  variant='body'
                  tag='div'
                >
                  <FormattedMessage id={`skills.architecture.${key}`} />
                </Typography>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
