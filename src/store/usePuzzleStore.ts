import { create } from 'zustand'
import type { Board } from '../types'
import { shuffleBoard, move, isSolved as checkIsSolved } from '../utils/puzzle'

const BOARD_SIZE = 3
const SHUFFLE_MOVES = 200

interface PuzzleState {
  board: Board
  moves: number
  elapsedSeconds: number

  // Actions
  moveTile: (tileIndex: number) => void
  newGame: () => void
  tick: () => void
}

export const usePuzzleStore = create<PuzzleState>((set, get) => ({
  board: shuffleBoard(BOARD_SIZE, SHUFFLE_MOVES),
  moves: 0,
  elapsedSeconds: 0,

  moveTile: (tileIndex) => {
    const currentBoard = get().board
    
    if (checkIsSolved(currentBoard)) return
    
    const newBoard = move(currentBoard, tileIndex)
    
    if (newBoard !== currentBoard) {
      set((state) => ({
        board: newBoard,
        moves: state.moves + 1,
      }))
    }
  },

  newGame: () => {
    const newBoard = shuffleBoard(BOARD_SIZE, SHUFFLE_MOVES)
    set({
      board: newBoard,
      moves: 0,
      elapsedSeconds: 0,
    })
  },

  tick: () => {
    set((state) => ({
      elapsedSeconds: state.elapsedSeconds + 1,
    }))
  },
}))

// Derived value: computed from `board` on read, not stored as state.
export const selectIsSolved = (state: PuzzleState) => checkIsSolved(state.board)