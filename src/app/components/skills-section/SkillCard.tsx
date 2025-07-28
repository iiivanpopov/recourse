import { FormattedMessage } from 'react-intl'

import { Card, Typography } from '@/shared/ui'

import styles from './SkillCard.module.css'

interface SkillCardProps {
  keys: string[]
  skill: 'architecture' | 'react' | 'typescript'
}

export const SkillCard = ({ skill, keys }: SkillCardProps) => (
  <Card className={styles.card}>
    <Typography
      variant='heading'
      tag='div'
    >
      <FormattedMessage id={`skills.${skill}.title`} />
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
            <FormattedMessage id={`skills.${skill}.${key}`} />
          </Typography>
        </li>
      ))}
    </ul>
  </Card>
)
