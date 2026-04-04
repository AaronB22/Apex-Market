import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex gap-6 justify-center">
        <Link to="/new" className="hover:text-blue-400">
          New Cars
        </Link>
        <Link to="/used" className="hover:text-blue-400">
          Used Cars
        </Link>
        <Link to="/service" className="hover:text-blue-400">
          Service
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
