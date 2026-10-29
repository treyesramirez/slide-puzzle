import Header from './Header'
import Board from './Board'
import { usePuzzleStore } from '../store/usePuzzleStore'

function GameLayout() {
  const newGame = usePuzzleStore((state) => state.newGame)
  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
      <Board />
      <button
        onClick={() => newGame()}
        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
      >
        New Game
      </button>
    </div>
  )
}

export default GameLayout
