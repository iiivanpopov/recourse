import { FormattedMessage, useIntl } from 'react-intl'

import { Card, Typography } from '@/shared/ui'

import styles from './SkillCard.module.css'

interface ReactCardProps {
  keys: string[]
  skill: 'architecture' | 'react' | 'typescript'
}

export const SkillCard = ({ skill, keys }: ReactCardProps) => {
  const { formatMessage } = useIntl()

  return (
    <Card className={styles.card}>
      <Typography
        variant='heading'
        tag='div'
      >
        <FormattedMessage id={`skills.${skill}.title`} />
      </Typography>
      <ul
        aria-label={`${formatMessage({ id: `skills.${skill}.title` })} skills list`}
        className={styles.skills}
      >
        {keys.map(key => (
          <li
            key={key}
            aria-label={`${formatMessage({ id: `skills.${skill}.title` })} skill`}
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
}
