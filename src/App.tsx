import GameLayout from './components/GameLayout'
import { useTimer } from './hooks/useTimer'
import { selectIsSolved, usePuzzleStore } from './store/usePuzzleStore'

function App() {
  const moves = usePuzzleStore((state) => state.moves)
  const solved = usePuzzleStore(selectIsSolved)

  useTimer(moves > 0 && !solved)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white p-4">
      <h1 className="text-3xl font-bold">Slide Puzzle</h1>
      <GameLayout />
    </div>
  )
}

export default App
