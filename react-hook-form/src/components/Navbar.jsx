import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 grid grid-cols-3 items-center">

        <div className="flex justify-start">
          <span className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">
            👤
          </span>
        </div>

        <ul className="flex items-center justify-center gap-6">
          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>

        <div className="flex justify-end">
          <button
            onClick={() => setToggle((prev) => !prev)}
           className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700">
            See UserCard
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar