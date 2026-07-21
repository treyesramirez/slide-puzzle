# Slide Puzzle 🧩

Juego de puzzle deslizante construido con **React + TypeScript + Zustand**, 
desarrollado como proyecto de aprendizaje para dominar manejo de estado en React.

## 🎯 Objetivo del proyecto

Aprender a usar **Zustand** para manejo de estado global en aplicaciones React,
implementando un juego completo desde cero: lógica pura, UI, estado global,
persistencia, testing y deploy.

## 🚀 Demo

_(pendiente — se agregará el link una vez desplegado)_

## 🛠️ Stack

- React + TypeScript
- Vite
- Zustand (manejo de estado)
- Vitest (testing)
- ESLint + Prettier

## ✅ Checklist de desarrollo

### Fase 0 — Setup
- [x] Proyecto inicializado con Vite
- [x] ESLint + Prettier configurados
- [x] Repositorio en GitHub
- [x] Estructura de carpetas definida

### Fase 1 — Lógica pura del puzzle
- [ ] Funciones puras del juego (`generateSolvedBoard`, `shuffleBoard`, `isSolved`, `move`)
- [ ] Tests unitarios con Vitest

### Fase 2 — UI con estado local
- [ ] Componentes `Board` y `Tile`
- [ ] Movimiento de fichas funcional
- [ ] Contador de movimientos y cronómetro

### Fase 3 — Migración a Zustand
- [ ] Store de Zustand (`usePuzzleStore`)
- [ ] UI conectada al store, sin prop drilling

### Fase 4 — Features con estado global
- [ ] Selector de dificultad (3x3, 4x4, 5x5)
- [ ] Persistencia de mejores tiempos (`localStorage`)
- [ ] Modo oscuro/claro
- [ ] Undo de movimientos

### Fase 5 — Pulido
- [ ] Animaciones de transición
- [ ] Soporte de teclado
- [ ] Diseño responsive

### Fase 6 — Testing y calidad
- [ ] Tests del store
- [ ] Revisión de performance/renders

### Fase 7 — Deploy y portafolio
- [ ] Deploy en Vercel/Netlify
- [ ] README final con screenshots

## 📖 Learned

This approach consider that the Board Game is a square board.

If needed in the future, the interface definition can be changed to:

```ts
export interface Board {
  tiles: number[]
  rows: number
  cols: number
}
```

Then `getMovableIndices` / `move` / `isSolved` would receive `rows` / `cols` as parameters instead of inferring them using `sqrt`.