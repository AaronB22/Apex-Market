import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/messageBoard" className="hover:text-blue-400">
          Message Board
        </Link>
        <Link to="/profile" className="hover:text-blue-400">
          Profile
        </Link>
        <Link to="/sell" className="hover:text-blue-400">
          Upload Item
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
