import type { ArrowProps } from '../ArrowIcon'

import { ArrowIcon } from '../ArrowIcon'

export const ArrowTopIcon = ({ style, ...props }: ArrowProps) => (
  <ArrowIcon
    style={{ ...style, rotate: '90deg' }}
    {...props}
  />
)
