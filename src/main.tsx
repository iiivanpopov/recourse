import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import type { ProvidersProps } from '@/app'

import { App, Providers } from '@/app'
import { loadLocale, parseLocale, saveLocale } from '@/shared/utils'

import '@/assets/styles/theme.css'
import '@/assets/fonts/noto-sans/index.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/global.css'

const init = async () => {
  const rootElement = document.getElementById('root')!
  const root = createRoot(rootElement)

  const defaultLocale = saveLocale(parseLocale())
  const defaultMessages = await loadLocale(defaultLocale)
  document.documentElement.lang = defaultLocale

  const providersProps: Omit<ProvidersProps, 'children'> = {
    i18n: {
      defaultLocale,
      defaultMessages
    }
  }

  root.render(
    <StrictMode>
      <Providers {...providersProps}>
        <App />
      </Providers>
    </StrictMode>
  )
}

init()
