import type { ArrowProps } from './ArrowIcon'

import { ArrowIcon } from './ArrowIcon'

export const ArrowBottomIcon = ({ style, ...props }: ArrowProps) => (
  <ArrowIcon
    style={{ ...style, rotate: '270deg' }}
    {...props}
  />
)
