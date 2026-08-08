import type { Board as BoardType } from '../types'
import Header from './Header'
import Board from './Board'

interface GameLayoutProps {
  board: BoardType
  moves: number
  elapsedSeconds: number
  isSolved: boolean
  onTileClick: (tileIndex: number) => void
  onNewGame: () => void
}

/**
 * Purely structural component: arranges Header, Board and the New Game button.
 *
 * NOTE: this component doesn't use `moves` or `elapsedSeconds` for anything of its own —
 * it only forwards them to Header. This is prop drilling in practice: as the tree grows,
 * intermediate components end up carrying props they don't care about, just to pass
 * them further down. We'll fix this in Phase 3 with Zustand.
 */
function GameLayout({
  board,
  moves,
  elapsedSeconds,
  isSolved,
  onTileClick,
  onNewGame,
}: GameLayoutProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Header moves={moves} elapsedSeconds={elapsedSeconds} isSolved={isSolved} />
      <Board board={board} onTileClick={onTileClick} />
      <button
        onClick={onNewGame}
        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
      >
        New Game
      </button>
    </div>
  )
}

export default GameLayout