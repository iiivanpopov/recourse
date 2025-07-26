import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'

import { useCursorPosition } from '@/shared/hooks'
import { Glow } from '@/shared/ui'

import styles from './CursorGlow.module.css'

export const CursorGlow = () => {
  const { absoluteX, absoluteY } = useCursorPosition()

  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0],
    config: {
      tension: 120,
      friction: 10
    }
  }))

  useEffect(() => {
    api.start({ xy: [absoluteX - 250, absoluteY - 250] })
  }, [absoluteX, absoluteY])

  return (
    <div className={styles.glowContainer}>
      <animated.div
        style={{
          position: 'absolute',
          transform: xy.to(
            (x, y) => `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`
          ),
          willChange: 'transform',
          pointerEvents: 'none'
        }}
      >
        <Glow />
      </animated.div>
    </div>
  )
}
