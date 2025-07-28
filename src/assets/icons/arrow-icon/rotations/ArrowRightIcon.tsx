import type { ArrowProps } from '../ArrowIcon'

import { ArrowIcon } from '../ArrowIcon'

export const ArrowRightIcon = ({ style, ...props }: ArrowProps) => (
  <ArrowIcon
    style={{ ...style, rotate: '180deg' }}
    {...props}
  />
)
