import type { Validator } from '../types'

import { mapCondition } from '../mapCondition'

export const required: Validator = (value: unknown, message = 'required') =>
  mapCondition(value !== '' && value !== undefined && value !== null, message)
