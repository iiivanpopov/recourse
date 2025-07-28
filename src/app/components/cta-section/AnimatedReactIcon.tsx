import type { ComponentPropsWithRef, CSSProperties } from 'react'

import { animated, to, useSpring } from '@react-spring/web'

const shape: CSSProperties = {
  strokeWidth: 8,
  strokeLinecap: 'round',
  fill: 'transparent'
}

const circumference = 2 * Math.PI * 92
const ellipsesData = [{ rotation: 0 }, { rotation: 60 }, { rotation: 120 }]

interface AnimatedReactIconProps extends ComponentPropsWithRef<'svg'> {
  className?: string
  delay?: number
  inView?: boolean
}

export const AnimatedReactIcon = ({
  delay = 0,
  className,
  inView = false,
  ref,
  ...props
}: AnimatedReactIconProps) => {
  const centerCircleSpring = useSpring({
    from: {
      scale: 0
    },
    to: inView
      ? {
          scale: 1
        }
      : {
          scale: 0
        },
    delay: 300 + delay,
    config: { tension: 25, friction: 5 }
  })

  const ellipseSpring1 = useSpring({
    from: { pathLength: 0 },
    to: inView ? { pathLength: 1 } : { pathLength: 0 },
    delay,
    config: { tension: 15, friction: 5 }
  })

  const ellipseSpring2 = useSpring({
    from: { pathLength: 0 },
    to: inView ? { pathLength: 1 } : { pathLength: 0 },
    delay: delay + 150,
    config: { tension: 15, friction: 5 }
  })

  const ellipseSpring3 = useSpring({
    from: { pathLength: 0 },
    to: inView ? { pathLength: 1 } : { pathLength: 0 },
    delay: delay + 300,
    config: { tension: 15, friction: 5 }
  })

  const ellipseSprings = [ellipseSpring1, ellipseSpring2, ellipseSpring3]

  return (
    <animated.svg
      ref={ref}
      aria-label='React Icon'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      {...props}
    >
      <animated.circle
        style={{
          transform: to([centerCircleSpring.scale], s => `scale(${s})`),
          transformOrigin: '128px 128px'
        }}
        cx='128'
        cy='128'
        fill='currentColor'
        r='8'
      />
      {ellipsesData.map((ellipse, index) => {
        const spring = ellipseSprings[index]
        return (
          <animated.ellipse
            key={ellipse.rotation}
            style={{
              ...shape,
              strokeDasharray: to(
                [spring.pathLength],
                length => `${length * circumference} ${circumference}`
              )
            }}
            cx='128'
            cy='128'
            rx='92'
            ry='36'
            stroke='currentColor'
            transform={`rotate(${ellipse.rotation} 128 128)`}
          />
        )
      })}
    </animated.svg>
  )
}
