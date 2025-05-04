import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white py-4 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold">Productos App</Link>
        <div>
          <Link to="/new-product/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Nuevo Producto</Link>
        </div>
      </div>
    </nav>
  )
}
