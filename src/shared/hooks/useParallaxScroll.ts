import type { IParallax } from '@react-spring/parallax'

import { useEffect, useRef, useState } from 'react'

export const useParallaxScroll = (sectionsCount: number) => {
  const parallaxRef = useRef<IParallax | null>(null!)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current?.container?.current) {
        const { scrollTop } = parallaxRef.current.container.current
        const containerHeight =
          parallaxRef.current.container.current.clientHeight
        const currentPageIndex = Math.round(scrollTop / containerHeight)

        if (
          currentPageIndex !== currentPage &&
          currentPageIndex >= 0 &&
          currentPageIndex < sectionsCount
        )
          setCurrentPage(currentPageIndex)
      }
    }

    const container = parallaxRef.current?.container?.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentPage, sectionsCount])

  const scrollUp = () => {
    if (currentPage > 0 && parallaxRef.current) {
      const newPage = currentPage - 1
      parallaxRef.current.scrollTo(newPage)
      setCurrentPage(newPage)
    }
  }

  const scrollDown = () => {
    if (currentPage < sectionsCount - 1 && parallaxRef.current) {
      const newPage = currentPage + 1
      parallaxRef.current.scrollTo(newPage)
      setCurrentPage(newPage)
    }
  }

  return { parallaxRef, currentPage, scrollUp, scrollDown }
}
