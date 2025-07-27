import { FormattedMessage } from 'react-intl'

import { Typography } from '@/shared/ui'

import { CtaSection, CursorGlow, SkillsSection } from './components'

import styles from './App.module.css'

export const App = () => {
  return (
    <>
      <CursorGlow />
      <main className={styles.layout}>
        <CtaSection />
        <SkillsSection />
      </main>
      <footer className={styles.footer}>
        <Typography
          variant='title'
          tag='h1'
        >
          <FormattedMessage id='course.title' />
        </Typography>
        <div className={styles.language}>
          <Typography
            variant='heading'
            tag='div'
          >
            <FormattedMessage id='information.language' />
          </Typography>
        </div>
        <div className={styles.contacts}>
          <Typography
            variant='heading'
            tag='div'
          >
            <FormattedMessage id='information.contacts' />
          </Typography>
        </div>
      </footer>
    </>
  )
}
