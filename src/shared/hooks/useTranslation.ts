import type { MessageDescriptor } from 'react-intl'

import { useIntl } from 'react-intl'

export const useTranslation = () => {
  const intl = useIntl()
  return {
    t: (id: string, options: Omit<MessageDescriptor, 'id'> = {}) =>
      intl.formatMessage({ id, ...options }),
    $t: (strings: TemplateStringsArray, ...values: string[]) =>
      intl.formatMessage({
        id: strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '')
      }),
    intl
  }
}
