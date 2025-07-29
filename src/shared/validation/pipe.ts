import type { Validator } from './types'

export const pipe = (
  value: unknown,
  ...validators: [Validator, string][] | Validator[]
) => ({
  errors: validators.flatMap(validator => {
    const [fn, message] = Array.isArray(validator)
      ? validator
      : [validator, undefined]
    const validated = fn(value, message)
    return validated.isError ? validated.message : []
  })
})
