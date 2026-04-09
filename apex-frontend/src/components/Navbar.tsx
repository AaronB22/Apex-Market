import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, setUser } = useAuth();

  console.log(user?.username)
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
        {!user ? (
          <Link to="/signup" className="hover:text-blue-400">
            Sign Up
          </Link>
        ) : (
          <Link to="/signup" className="hover:text-blue-400">
            {user.username}
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
