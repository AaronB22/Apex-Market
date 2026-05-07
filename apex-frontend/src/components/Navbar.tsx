import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, setUser } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/messageBoard" className="hover:text-blue-400">
          Message Board
        </Link>
        <Link to="/upload" className="hover:text-blue-400">
          Upload Item
        </Link>
        {!user ? (
          <Link to="/signin" className="hover:text-blue-400">
            Sign In
          </Link>
        ) : (
          <Link to="/profile" className="hover:text-blue-400">
            {user.username}
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
