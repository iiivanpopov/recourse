import type { Locale } from '@/shared/providers'

import { LOCAL_STORAGE } from '@/shared/constants'
import { LOCALE } from '@/shared/providers'

const files = import.meta.glob('@/assets/locales/*.json')

export const parseLocale = (): Locale =>
  (localStorage.getItem(LOCAL_STORAGE.LANGUAGE) as Locale) ?? LOCALE.EN

export const saveLocale = (locale: Locale): Locale => {
  localStorage.setItem(LOCAL_STORAGE.LANGUAGE, locale)
  return locale
}

export const loadLocale = async (
  locale: Locale
): Promise<{ [key: string]: string }> => {
  const file = await files[`/src/assets/locales/${locale}.json`]()
  return (
    file as {
      default: {
        [key: string]: string
      }
    }
  ).default
}
