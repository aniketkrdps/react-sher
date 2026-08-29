import React from 'react'

const Navbar = ({setCartScreen}) => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl">👤</span>
        <span className="font-semibold text-gray-800">MyShop</span>
      </div>

      <div className="flex items-center gap-1">
        <button
         onClick={() => setCartScreen(false)}
         className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
          Home
        </button>
        <button
        onClick={() => setCartScreen(true)}
         className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
          Cart
          
        </button>
      </div>

      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Login
      </button>
    </nav>
  )
}

export default Navbar