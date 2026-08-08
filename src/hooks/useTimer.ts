import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that tracks elapsed seconds while `isRunning` is true.
 * Stops automatically (via cleanup) when isRunning becomes false or the component unmounts.
 */
export function useTimer(isRunning: boolean) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  const reset = () => setElapsedSeconds(0)

  return { elapsedSeconds, reset }
}