import { useState } from "react"
import Buttom from "./components/Buttom"
import Header from "./components/Header"
import Meses from "./components/Meses"
import Rango from "./components/Rango"
import Resultado from "./components/Resultado"

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);

  const handleClickDecremento = () => {
    const valor = cantidad - 100;
    if (valor < 0) return;
    setCantidad(valor)
  };

  const handleClickIncremento = () => {
    const valor = cantidad + 100;
    if (valor > 20000) return;
    setCantidad(valor)
  };

  return (
    <div className="max-w-lg my-20 mx-auto p-10 rounded-lg shadow-lg bg-white">
      <Header />

      <div className="mb-5 flex justify-between">
        <Buttom
          operador="-"
          fn={handleClickDecremento}
        />
        <Buttom
          operador="+"
          fn={handleClickIncremento}
        />
      </div>

      <Rango
        cantidad={cantidad}
        setCantidad={setCantidad}
      />

      <p className="mb-5 text-6xl text-center font-extrabold text-indigo-600">{cantidad}</p>

      <h2 className="text-2xl font-extrabold text-gray-600 text-center">
        Elige un <span className="text-indigo-600">plazo</span> a pagar
      </h2>

      <Meses
        meses={meses}
        setMeses={setMeses}
      />

      <Resultado
        cantidad={cantidad}
        meses={meses}
      />
    </div>
  )
}

export default App
