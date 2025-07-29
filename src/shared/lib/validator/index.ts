import { pipe } from './pipe'
import { email } from './validations/email'
import { required } from './validations/required'

export const v = {
  email,
  required,
  pipe
}
