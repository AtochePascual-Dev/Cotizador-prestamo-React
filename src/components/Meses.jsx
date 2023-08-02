import React from 'react'

const Meses = () => {
  return (
    <select
      className="w-full mt-5 p-2 border rounded-lg text-center font-bold text-xl cursor-pointer outline-none text-gray-600">
      <option value="6">6 Meses</option>
      <option value="12">12 Meses</option>
      <option value="24">24 Meses</option>
    </select>
  )
}

export default Meses