import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import clsx from 'clsx'
import { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import type { Locale } from '@/shared/providers'

import { ArrowBottomIcon, ArrowTopIcon, LanguageIcon } from '@/assets/icons'
import { useParallaxScroll } from '@/shared/hooks'
import { useI18n } from '@/shared/providers'
import { Button, Dropdown, Typography } from '@/shared/ui'

import { SECTIONS, SECTIONS_COUNT } from './constants'

import styles from './App.module.css'

export const App = () => {
  const { parallaxRef, currentPage, scrollUp, scrollDown } =
    useParallaxScroll(SECTIONS_COUNT)
  const { locale, setLocale } = useI18n()

  return (
    <>
      <Parallax
        ref={parallaxRef}
        pages={SECTIONS_COUNT}
      >
        {SECTIONS.map((Section, index) => (
          <Fragment key={Section.id}>
            <ParallaxLayer
              className={clsx(
                styles.background,
                styles[Section.backgroundClass]
              )}
              speed={1}
              offset={index}
            />
            <ParallaxLayer
              speed={1}
              offset={index}
            >
              <Section.Component />
            </ParallaxLayer>
          </Fragment>
        ))}
      </Parallax>
      <div className={styles.navigationButtons}>
        <div className={styles.topNavigationButtons}>
          <Dropdown
            className={styles.languageDropdown}
            handleSelect={newLocale => setLocale(newLocale as Locale)}
            selected={locale}
          >
            <Dropdown.Trigger className={styles.languageDropdownTrigger}>
              <div className={styles.languageDropdownContent}>
                <LanguageIcon className={styles.languageIcon} />
                <Typography
                  variant='body'
                  className={styles.languageText}
                  tag='div'
                >
                  <FormattedMessage id='language' />
                </Typography>
              </div>
            </Dropdown.Trigger>
            <Dropdown.List className={styles.languageDropdownList}>
              <Dropdown.Item value='en'>
                <Typography>English</Typography>
              </Dropdown.Item>
              <Dropdown.Item value='ru'>
                <Typography>Русский</Typography>
              </Dropdown.Item>
              <Dropdown.Item value='uk'>
                <Typography>Українська</Typography>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
          <Button
            aria-label='Scroll 1 page upwards'
            variant='icon'
            className={styles.scrollButton}
            isDisabled={currentPage === 0}
            onClick={scrollUp}
          >
            <ArrowTopIcon />
          </Button>
        </div>
        <Button
          aria-label='Scroll 1 page downwards'
          variant='icon'
          className={styles.scrollButton}
          isDisabled={currentPage === SECTIONS_COUNT - 1}
          onClick={scrollDown}
        >
          <ArrowBottomIcon />
        </Button>
      </div>
    </>
  )
}
