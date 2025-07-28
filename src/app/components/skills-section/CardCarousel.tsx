import type { MouseEventHandler } from 'react'

import { useState } from 'react'

import { SKILL_CARDS } from '@/app/constants'
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons'
import { useViewTransition } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import { SkillCard } from './SkillCard'

import styles from './CardCarousel.module.css'

export const SkillCardCarousel = () => {
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
          variant='icon'
          className={styles.navigation}
          onClick={previous}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant='icon'
          className={styles.navigation}
          onClick={next}
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className={styles.cardWrapper}>
        <SkillCard {...SKILL_CARDS[currentCard]} />
      </div>
    </div>
  )
}
