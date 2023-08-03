const Buttom = ({ operador, fn }) => {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-2xl text-center text-white bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
      onClick={fn}>
      {operador}
    </button>
  )
}

export default Buttom