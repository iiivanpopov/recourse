import { useEffect, useState } from 'react'

export const useCursorPosition = () => {
  const [value, setValue] = useState({
    clientX: 0,
    clientY: 0,
    scrollX: window.scrollX,
    scrollY: window.scrollY
  })

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setValue(prev => ({
        ...prev,
        clientX: event.clientX,
        clientY: event.clientY
      }))
    }

    const onScroll = () => {
      setValue(prev => ({
        ...prev,
        scrollX: window.scrollX,
        scrollY: window.scrollY
      }))
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return {
    ...value,
    absoluteX: value.clientX + value.scrollX,
    absoluteY: value.clientY + value.scrollY
  }
}
