import type { UseTrailProps } from '@react-spring/web'

import { useTrail } from '@react-spring/web'

import { inViewAnimation } from '@/shared/animations'

export const useInViewAnimations = (
  items = 1,
  inView = false,
  props: UseTrailProps = {}
) => useTrail(items, { ...inViewAnimation(inView), ...props })
