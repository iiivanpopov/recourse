import type { ValidationResponse } from './types'

export const mapCondition = (
  condition: boolean,
  message = 'unexpected_error'
): ValidationResponse =>
  condition ? { isError: false } : { isError: true, message }
