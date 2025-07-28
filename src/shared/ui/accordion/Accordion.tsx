import type { Dispatch, ReactNode, SetStateAction } from 'react'

import clsx from 'clsx'
import { createContext, use, useMemo, useState } from 'react'

import { ArrowBottomIcon, ArrowTopIcon } from '@/assets/icons'
import { useViewTransition } from '@/shared/hooks'

import styles from './Accordion.module.css'

interface AccordionContextProps {
  isOpened: boolean
  setIsOpened: Dispatch<SetStateAction<boolean>>
}

const AccordionContext = createContext<AccordionContextProps>({
  setIsOpened: () => {},
  isOpened: false
})

const useAccordion = () => use(AccordionContext)

interface TriggerProps {
  children: ReactNode
  className?: string
  withIcon?: boolean
}

const Trigger = ({ className, withIcon, children }: TriggerProps) => {
  const { setIsOpened, isOpened } = useAccordion()
  const startTransition = useViewTransition()

  return (
    <button
      className={clsx(
        styles.trigger,
        { [styles.withIcon]: withIcon },
        className
      )}
      type='button'
      onClick={() => startTransition(() => setIsOpened(!isOpened))}
    >
      {children}
      {withIcon && !isOpened && <ArrowBottomIcon className={styles.icon} />}
      {withIcon && isOpened && <ArrowTopIcon className={styles.icon} />}
    </button>
  )
}

interface ContentProps {
  children: ReactNode
  className?: string
}

const Content = ({ children, className }: ContentProps) => {
  const { isOpened } = useAccordion()

  return (
    <div
      className={clsx(styles.content, { [styles.opened]: isOpened }, className)}
      style={{ maxHeight: isOpened ? '400px' : '0' }}
    >
      {children}
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  className?: string
}

const Accordion = ({ children, className }: AccordionProps) => {
  const [isOpened, setIsOpened] = useState(false)

  const value = useMemo(
    () => ({
      setIsOpened,
      isOpened
    }),
    [isOpened]
  )

  return (
    <AccordionContext value={value}>
      <div className={clsx(styles.accordion, className)}>{children}</div>
    </AccordionContext>
  )
}

Accordion.Trigger = Trigger
Accordion.Content = Content

export { Accordion }
