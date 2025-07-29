import type { UseSpringProps } from '@react-spring/web'

import { useSpring } from '@react-spring/web'

import { inViewAnimation } from '@/shared/constants'

export const useInViewAnimation = (
  inView = false,
  props: UseSpringProps = {}
) => useSpring({ ...inViewAnimation(inView), ...props })
