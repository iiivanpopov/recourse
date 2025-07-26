import type { ReactNode } from 'react'

import type { I18nProviderProps } from '@/shared/providers'

import { I18nProvider } from '@/shared/providers'

export interface ProvidersProps {
  children: ReactNode
  i18n: Omit<I18nProviderProps, 'children'>
}

export const Providers = ({ children, i18n }: ProvidersProps) => {
  return <I18nProvider {...i18n}>{children}</I18nProvider>
}
