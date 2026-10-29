import { selectIsSolved, usePuzzleStore } from '../store/usePuzzleStore'
import { getMovableIndices } from '../utils/puzzle'
import Tile from './Tile'

function Board() {
  const board = usePuzzleStore((state) => state.board)
  const moveTile = usePuzzleStore((state) => state.moveTile)
  const isSolved = usePuzzleStore(selectIsSolved)
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
          isMovable={!isSolved && movableIndices.includes(index)}
          onClick={() => moveTile(index)}
        />
      ))}
    </div>
  )
}

export default Board