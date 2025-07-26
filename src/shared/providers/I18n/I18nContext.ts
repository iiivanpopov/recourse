import { createContext } from 'react'

export const LOCALE = {
  EN: 'en',
  UA: 'uk',
  RU: 'ru'
} as const
export type Locale = (typeof LOCALE)[keyof typeof LOCALE]

interface I18nContextProps {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextProps>({
  locale: LOCALE.EN,
  setLocale: () => {}
})
