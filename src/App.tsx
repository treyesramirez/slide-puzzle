import { useState } from 'react'
import type { Board } from './types'
import { shuffleBoard, move, isSolved } from './utils/puzzle'
import { useTimer } from './hooks/useTimer'
import GameLayout from './components/GameLayout'

const BOARD_SIZE = 3

function App() {
  const [board, setBoard] = useState<Board>(() => shuffleBoard(BOARD_SIZE, 200))
  const [moves, setMoves] = useState(0)

  const solved = isSolved(board)
  const { elapsedSeconds, reset: resetTimer } = useTimer(!solved && moves > 0)

  const handleTileClick = (tileIndex: number) => {
    if (solved) return

    const newBoard = move(board, tileIndex)

    // Only count as a move if the board actually changed (i.e. the click was valid)
    if (newBoard !== board) {
      setBoard(newBoard)
      setMoves((prev) => prev + 1)
    }
  }

  const handleNewGame = () => {
    setBoard(shuffleBoard(BOARD_SIZE, 200))
    setMoves(0)
    resetTimer()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white p-4">
      <h1 className="text-3xl font-bold">Slide Puzzle</h1>
      <GameLayout
        board={board}
        moves={moves}
        elapsedSeconds={elapsedSeconds}
        isSolved={solved}
        onTileClick={handleTileClick}
        onNewGame={handleNewGame}
      />
    </div>
  )
}

export default App