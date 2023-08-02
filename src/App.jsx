import Buttom from "./components/Buttom"
import Header from "./components/Header"
import Rango from "./components/Rango"

function App() {

  return (
    <div className="max-w-lg my-20 mx-auto p-10 rounded-lg shadow-lg bg-white">
      <Header />

      <div className="my-5 flex justify-between">
        <Buttom />
        <Buttom />
      </div>

      <Rango />
    </div>
  )
}

export default App
