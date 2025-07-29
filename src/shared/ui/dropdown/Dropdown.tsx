import type {
  ComponentPropsWithRef,
  Dispatch,
  ReactNode,
  SetStateAction
} from 'react'

import clsx from 'clsx'
import { createContext, use, useMemo, useState } from 'react'

import styles from './Dropdown.module.css'

interface DropdownContextProps {
  isOpened: boolean
  selected: string
  setIsOpened: Dispatch<SetStateAction<boolean>>
  handleSelect: (value: string) => void
}

const DropdownContext = createContext<DropdownContextProps>({
  selected: '',
  handleSelect: () => {},
  isOpened: false,
  setIsOpened: () => {}
})

const useDropdown = () => use(DropdownContext)

interface TriggerProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}

const DropdownTrigger = ({ children, className }: TriggerProps) => {
  const { setIsOpened, isOpened } = useDropdown()
  const handleClick = () => setIsOpened(!isOpened)
  return (
    <button
      className={clsx(styles.dropdownTrigger, className)}
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

interface ItemsProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

const DropdownList = ({ children, className, ...props }: ItemsProps) => {
  const { isOpened } = useDropdown()
  if (!isOpened) return null
  return (
    <div
      className={clsx(styles.dropdownList, className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface ItemProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  value?: number | string
}

const DropdownItem = ({ children, value, className }: ItemProps) => {
  const { handleSelect, setIsOpened } = useDropdown()
  const handleClick = () => {
    handleSelect(String(value ?? children))
    setIsOpened(false)
  }
  return (
    <button
      className={clsx(styles.dropdownItem, className)}
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

interface DropdownProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  selected: string
  handleSelect: (value: string) => void
}

const Dropdown = ({
  children,
  selected,
  handleSelect,
  className,
  ...props
}: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false)

  const value = useMemo(
    () => ({ setIsOpened, isOpened, selected, handleSelect }),
    [selected, isOpened]
  )

  return (
    <DropdownContext value={value}>
      <div
        className={clsx(styles.dropdown, className)}
        {...props}
      >
        {children}
      </div>
    </DropdownContext>
  )
}

Dropdown.Trigger = DropdownTrigger
Dropdown.List = DropdownList
Dropdown.Item = DropdownItem

export { Dropdown }
