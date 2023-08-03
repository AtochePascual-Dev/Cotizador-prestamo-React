import React from 'react'
import { calcularTotalaPagar } from '../helpers'

const Resultado = ({ cantidad, meses }) => {
  return (
    <div className="my-5 space-y-2 bg-gray-100 p-5">
      <h2 className="text-xl font-extrabold text-gray-600 text-center">
        Resumen de<span className="text-indigo-600"> pagos</span>
      </h2>

      <p className="text-center font-bold text-gray-600"> Meses {meses}</p>
      <p className="text-center font-bold text-gray-600">Total a Pagar {calcularTotalaPagar(cantidad, meses)}</p>
      <p className="text-center font-bold text-gray-600"> Mensuales </p>
    </div>
  )
}

export default Resultado