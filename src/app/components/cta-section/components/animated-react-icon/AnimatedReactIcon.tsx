import type { ComponentPropsWithRef, CSSProperties } from 'react'

import { animated, easings, useSpring, useTransition } from '@react-spring/web'

const shape: CSSProperties = {
  strokeWidth: 8,
  strokeLinecap: 'round',
  fill: 'transparent'
}

interface AnimatedReactIconProps extends ComponentPropsWithRef<'svg'> {
  className?: string
  delay?: number
  size?: number
}

export const AnimatedReactIcon = ({
  size = 24,
  delay = 0,
  className,
  ref,
  ...props
}: AnimatedReactIconProps) => {
  const centerCircleSpring = useSpring({
    scale: 1,
    opacity: 1,
    from: { scale: 0, opacity: 0 },
    delay: 800 + delay,
    config: { duration: 300, easing: easings.easeOutBack }
  })

  const ellipsesData = [{ rotation: 0 }, { rotation: 60 }, { rotation: 120 }]

  const ellipsesTransition = useTransition(ellipsesData, {
    keys: item => item.rotation,
    from: { pathLength: 0, opacity: 0 },
    enter: { pathLength: 1, opacity: 1 },
    config: {
      tension: 120,
      friction: 14,
      duration: 1200,
      easing: easings.easeOutBack
    },
    trail: 300,
    delay
  })

  const circumference = 2 * Math.PI * 92

  return (
    <animated.svg
      ref={ref}
      className={className}
      fill='none'
      height={size}
      width={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      {...props}
    >
      <animated.circle
        style={{
          transform: centerCircleSpring.scale.to(s => `scale(${s})`),
          transformOrigin: '128px 128px',
          opacity: centerCircleSpring.opacity
        }}
        cx='128'
        cy='128'
        fill='currentColor'
        r='8'
      />

      {ellipsesTransition((style, item) => (
        <animated.ellipse
          key={item.rotation}
          style={{
            ...shape,
            strokeDasharray: style.pathLength.to(
              length => `${length * circumference} ${circumference}`
            ),
            opacity: style.opacity
          }}
          cx='128'
          cy='128'
          rx='92'
          ry='36'
          stroke='currentColor'
          transform={`rotate(${item.rotation} 128 128)`}
        />
      ))}
    </animated.svg>
  )
}
