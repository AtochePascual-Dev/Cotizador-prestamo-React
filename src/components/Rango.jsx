const Rango = ({ cantidad, setCantidad }) => {


  return (
    <input
      type="range"
      className="w-full h-6 mb-5 cursor-pointer accent-lime-500 hover:accent-lime-600"
      min="0"
      max="20000"
      step="100"
      value={cantidad}
      onChange={(e) => setCantidad(Number(e.target.value))} />
  )
}

export default Rango