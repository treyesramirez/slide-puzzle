import type { Board as BoardType } from '../types'
import { getMovableIndices } from '../utils/puzzle'
import Tile from './Tile'

interface BoardProps {
  board: BoardType
  onTileClick: (tileIndex: number) => void
}

function Board({ board, onTileClick }: BoardProps) {
  const size = Math.sqrt(board.length)
  const movableIndices = getMovableIndices(board)

  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {board.map((tileValue, index) => (
        <Tile
          key={index}
          value={tileValue}
          isMovable={movableIndices.includes(index)}
          onClick={() => onTileClick(index)}
        />
      ))}
    </div>
  )
}

export default Board