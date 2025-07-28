import type { IParallax } from '@react-spring/parallax'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import clsx from 'clsx'
import { Fragment, useEffect, useRef, useState } from 'react'

import { ArrowBottomIcon, ArrowTopIcon } from '@/assets/icons'
import { Button } from '@/shared/ui'

import { CtaSection, SkillsSection } from './components'

import styles from './App.module.css'

const pages = [
  {
    id: 0,
    component: CtaSection,
    backgroundClass: styles.background1
  },
  {
    id: 0,
    component: SkillsSection,
    backgroundClass: styles.background2
  }
]
const totalPages = pages.length

export const App = () => {
  const parallax = useRef<IParallax | null>(null!)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallax.current?.container?.current) {
        const { scrollTop } = parallax.current.container.current
        const containerHeight = parallax.current.container.current.clientHeight

        const currentPageIndex = Math.round(scrollTop / containerHeight)

        if (
          currentPageIndex !== currentPage &&
          currentPageIndex >= 0 &&
          currentPageIndex < totalPages
        )
          setCurrentPage(currentPageIndex)
      }
    }

    const container = parallax.current?.container?.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentPage, totalPages])

  const scrollUp = () => {
    if (currentPage > 0 && parallax.current) {
      const newPage = currentPage - 1
      parallax.current.scrollTo(newPage)
    }
  }

  const scrollDown = () => {
    if (currentPage < totalPages - 1 && parallax.current) {
      const newPage = currentPage + 1
      parallax.current.scrollTo(newPage)
    }
  }

  return (
    <>
      <Parallax
        ref={parallax}
        pages={totalPages}
      >
        {pages.map((page, index) => (
          <Fragment key={page.id}>
            <ParallaxLayer
              className={clsx(styles.background, page.backgroundClass)}
              speed={1}
              offset={index}
            />
            <ParallaxLayer
              speed={1}
              offset={index}
            >
              <page.component />
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
          disabled={currentPage === totalPages - 1}
          onClick={scrollDown}
        >
          <ArrowBottomIcon />
        </Button>
      </div>
    </>
  )
}
