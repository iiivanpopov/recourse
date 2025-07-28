import { useCallback } from 'react'

export const useViewTransition = () =>
  useCallback((callback: () => void) => {
    if (document.startViewTransition) document.startViewTransition(callback)
    else callback()
  }, [])
