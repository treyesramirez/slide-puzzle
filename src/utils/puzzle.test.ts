import { describe, it, expect } from 'vitest'
import {
  generateSolvedBoard,
  isSolved,
  getMovableIndices,
  move,
  shuffleBoard,
} from './puzzle'

describe('generateSolvedBoard', () => {
  it('genera un tablero 3x3 resuelto', () => {
    expect(generateSolvedBoard(3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0])
  })
})

describe('isSolved', () => {
  it('detecta un tablero resuelto', () => {
    expect(isSolved([1, 2, 3, 4, 5, 6, 7, 8, 0])).toBe(true)
  })

  it('detecta un tablero no resuelto', () => {
    expect(isSolved([1, 2, 3, 4, 5, 6, 7, 0, 8])).toBe(false)
  })
})

describe('getMovableIndices', () => {
  it('con el vacío en el centro, hay 4 movimientos posibles', () => {
    const board = [1, 2, 3, 4, 0, 5, 6, 7, 8]
    expect(getMovableIndices(board).sort()).toEqual([1, 3, 5, 7])
  })

  it('con el vacío en una esquina, hay solo 2 movimientos posibles', () => {
    const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    expect(getMovableIndices(board).sort()).toEqual([1, 3])
  })
})

describe('move', () => {
  it('mueve una ficha válida al espacio vacío', () => {
    const board = [1, 2, 3, 4, 0, 5, 6, 7, 8]
    const result = move(board, 3) // mover la ficha 4 hacia la derecha
    expect(result).toEqual([1, 2, 3, 0, 4, 5, 6, 7, 8])
  })

  it('ignora un movimiento inválido y devuelve el mismo tablero', () => {
    const board = [1, 2, 3, 4, 0, 5, 6, 7, 8]
    const result = move(board, 0) // no es adyacente al vacío
    expect(result).toEqual(board)
  })
})

describe('shuffleBoard', () => {
  it('genera siempre un tablero solucionable (aunque no resuelto)', () => {
    const board = shuffleBoard(3, 100)
    // No podemos verificar "solubilidad" directamente sin un solver,
    // pero sí podemos verificar que contiene exactamente los mismos valores
    expect(board.slice().sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('con 0 movimientos, el tablero queda resuelto', () => {
    expect(shuffleBoard(3, 0)).toEqual(generateSolvedBoard(3))
  })
})