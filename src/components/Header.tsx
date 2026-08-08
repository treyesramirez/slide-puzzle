interface HeaderProps {
  moves: number
  elapsedSeconds: number
  isSolved: boolean
}

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function Header({ moves, elapsedSeconds, isSolved }: HeaderProps) {
  return (
    <div className="flex gap-6 text-lg">
      <span>Moves: {moves}</span>
      <span>Time: {formatTime(elapsedSeconds)}</span>
      {isSolved && <span className="text-green-400 font-bold">Solved! 🎉</span>}
    </div>
  )
}

export default Header