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
          tag='h1'
          variant='title'
        >
          <FormattedMessage id='course.title' />
        </Typography>
        <div className={styles.footer__language}>
          <Typography
            tag='div'
            variant='heading'
          >
            <FormattedMessage id='information.language' />
          </Typography>
        </div>
        <div className={styles.footer__contacts}>
          <Typography
            tag='div'
            variant='heading'
          >
            <FormattedMessage id='information.contacts' />
          </Typography>
        </div>
      </footer>
    </>
  )
}
