import type { MouseEventHandler } from 'react'

import { useState } from 'react'

import { cards } from '@/app/components/skills-section/constants'
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/'
import { useViewTransition } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import { SkillCard } from '../skill-card'

import styles from './CardCarousel.module.css'

export const CardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const startTransition = useViewTransition()

  const next: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    startTransition(() => setCurrentCard((currentCard + 1) % 3))
  }

  const previous: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    startTransition(() =>
      setCurrentCard(currentCard - 1 < 0 ? 2 : currentCard - 1)
    )
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.actions}>
        <Button
          className={styles.navigation}
          onClick={previous}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          className={styles.navigation}
          onClick={next}
        >
          <ArrowRightIcon />
        </Button>
      </div>

      <SkillCard {...cards[currentCard]} />
    </div>
  )
}
