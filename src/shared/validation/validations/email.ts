import type { Validator } from '../types'

import { mapCondition } from '../mapCondition'

const regex = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

export const email: Validator = (value: unknown, message = 'email') =>
  mapCondition(
    regex.test(typeof value === 'string' ? value : String(value)),
    message
  )
