import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/featured" className="hover:text-blue-400">
          Featured
        </Link>
        <Link to="/search" className="hover:text-blue-400">
          Search
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About Us
        </Link>
        <Link to="/sell" className="hover:text-blue-400">
          Upload Item
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
