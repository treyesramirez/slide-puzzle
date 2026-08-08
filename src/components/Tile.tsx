interface TileProps {
  value: number
  isMovable: boolean
  onClick: () => void
}

function Tile({ value, isMovable, onClick }: TileProps) {
  // The empty slot (0) renders as an invisible placeholder, not a clickable tile
  if (value === 0) {
    return <div className="w-16 h-16" />
  }

  return (
    <button
      onClick={onClick}
      disabled={!isMovable}
      className={`w-16 h-16 flex items-center justify-center text-xl font-bold rounded-lg transition-colors ${
        isMovable
          ? 'bg-indigo-600 hover:bg-indigo-500 cursor-pointer'
          : 'bg-slate-700 cursor-default'
      }`}
    >
      {value}
    </button>
  )
}

export default Tile