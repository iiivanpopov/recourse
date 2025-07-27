import type { RefObject } from 'react'

import { useEffect, useRef, useState } from 'react'

type UseIntersectionRatioReturn<T extends Element = HTMLDivElement> = [
  RefObject<T>,
  number
]

const steps = 20
const thresholds = Array.from({ length: steps + 1 }, (_, i) => i / steps)

export function useIntersectionRatio<
  T extends Element = HTMLDivElement
>(): UseIntersectionRatioReturn<T> {
  const ref = useRef<T | null>(null!)
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRatio(entry.intersectionRatio)
      },
      {
        threshold: thresholds
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return [ref as RefObject<T>, ratio]
}
