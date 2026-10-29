import { useEffect } from 'react'
import { usePuzzleStore } from '../store/usePuzzleStore'

/**
 * Custom hook that tracks elapsed seconds while `isRunning` is true.
 * Stops automatically (via cleanup) when isRunning becomes false or the component unmounts.
 */
export function useTimer(isRunning: boolean) {
  const tick = usePuzzleStore((state) => state.tick)

  useEffect(() => {
    if (!isRunning) return

    const id = window.setInterval(() => {
      tick()
    }, 1000)

    return () => window.clearInterval(id)
  }, [isRunning, tick])
}
