import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import clsx from 'clsx'
import { Fragment } from 'react'

import { ArrowBottomIcon, ArrowTopIcon } from '@/assets/icons'
import { useParallaxScroll } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import { SECTIONS, SECTIONS_COUNT } from './constants'

import styles from './App.module.css'

export const App = () => {
  const { parallaxRef, currentPage, scrollUp, scrollDown } =
    useParallaxScroll(SECTIONS_COUNT)

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
        <Button
          aria-label='Scroll 1 page upwards'
          variant='icon'
          disabled={currentPage === 0}
          onClick={scrollUp}
        >
          <ArrowTopIcon />
        </Button>
        <Button
          aria-label='Scroll 1 page downwards'
          variant='icon'
          disabled={currentPage === SECTIONS_COUNT - 1}
          onClick={scrollDown}
        >
          <ArrowBottomIcon />
        </Button>
      </div>
    </>
  )
}
