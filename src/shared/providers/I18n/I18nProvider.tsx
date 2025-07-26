import type { ReactNode } from 'react'

import { useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import { loadLocale } from '@/shared/utils'

import type { Locale, LOCALE } from './I18nContext'

import { I18nContext } from './I18nContext'

export interface I18nProviderProps {
  children: ReactNode
  defaultLocale: (typeof LOCALE)[keyof typeof LOCALE]
  defaultMessages: { [key: string]: string }
}

export const I18nProvider = ({
  children,
  defaultLocale,
  defaultMessages
}: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [messages, setMessages] = useState(defaultMessages)

  const value = useMemo(
    () => ({
      locale,
      setLocale: async (locale: Locale) => {
        setLocale(locale)

        const loaded = await loadLocale(locale)
        setMessages(loaded)
      }
    }),
    [locale]
  )

  return (
    <I18nContext value={value}>
      <IntlProvider
        messages={messages}
        defaultLocale={defaultLocale}
        locale={locale}
      >
        {children}
      </IntlProvider>
    </I18nContext>
  )
}
