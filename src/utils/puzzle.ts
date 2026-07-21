import type { Board } from '../types'

export function generateSolvedBoard(size: number): Board {
  const board: Board = []
  const totalTiles = size * size
  for (let i = 1; i < totalTiles; i++) {
    board.push(i)
  }
  board.push(0) // empty space position at the end of the board
  return board
}

export function isSolved(board: Board): boolean {
  const solved = generateSolvedBoard(Math.sqrt(board.length))
  return board.every((tile, index) => tile === solved[index])
}

export function getMovableIndices(board: Board): number[] {
  const size = Math.sqrt(board.length)
  const emptyIndex = board.indexOf(0)
  const row = Math.floor(emptyIndex / size)
  const col = emptyIndex % size

  const candidates: number[] = []

  if (row > 0) candidates.push(emptyIndex - size) // up
  if (row < size - 1) candidates.push(emptyIndex + size) // down
  if (col > 0) candidates.push(emptyIndex - 1) // left
  if (col < size - 1) candidates.push(emptyIndex + 1) // right

  return candidates
}

export function move(board: Board, tileIndex: number): Board {
  const emptyIndex = board.indexOf(0)
  const movable = getMovableIndices(board)

  if (!movable.includes(tileIndex)) {
    return board // invalid move, do nothing
  }

  const newBoard = [...board]
  ;[newBoard[emptyIndex], newBoard[tileIndex]] = [newBoard[tileIndex], newBoard[emptyIndex]]
  return newBoard
}

export function shuffleBoard(size: number, moves = 200): Board {
  let board = generateSolvedBoard(size)

  for (let i = 0; i < moves; i++) {
    const movable = getMovableIndices(board)
    const randomIndex = movable[Math.floor(Math.random() * movable.length)]
    board = move(board, randomIndex)
  }

  return board
}