import Buttom from "./components/Buttom"
import Header from "./components/Header"
import Meses from "./components/Meses"
import Rango from "./components/Rango"
import Resultado from "./components/Resultado"

function App() {

  return (
    <div className="max-w-lg my-20 mx-auto p-10 rounded-lg shadow-lg bg-white">
      <Header />

      <div className="mb-5 flex justify-between">
        <Buttom />
        <Buttom />
      </div>

      <Rango />

      <p className="mb-5 text-6xl text-center font-extrabold text-indigo-600">1000</p>

      <h2 className="text-2xl font-extrabold text-gray-600 text-center">
        Elige un <span className="text-indigo-600">plazo</span> a pagar
      </h2>

      <Meses />

      <Resultado />
    </div>
  )
}

export default App
