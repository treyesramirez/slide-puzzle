/**
 * Represents the board as a flat array.
 * The value 0 represents the empty space.
 * Eg: for a 3x3 board, a solved board is [1,2,3,4,5,6,7,8,0]
 *
 * NOTE: this design assumes a square board (size x size).
 * board.length must be a perfect square (9, 16, 25, ...).
 */
export type Board = number[]

export interface PuzzleConfig {
  size: number
}