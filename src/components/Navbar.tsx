import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import SignInForm from './Auth/SignInForm'
import SignUpForm from './Auth/SignUpForm'

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth()
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-primary">GroceryApp</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">{user.email}</span>
                <button className="btn-primary flex items-center">
                  <span className="mr-2">Cart</span>
                  <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowSignIn(true)
                    setShowSignUp(false)
                  }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setShowSignUp(true)
                    setShowSignIn(false)
                  }}
                  className="btn-primary"
                >
                  Sign Up
                </button>
              </>
            )}
            {user ? (
              <>
                <span className="text-gray-700">{user.email}</span>
                <button className="btn-primary flex items-center">
                  <span className="mr-2">Cart</span>
                  <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowSignIn(true)
                    setShowSignUp(false)
                  }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setShowSignUp(true)
                    setShowSignIn(false)
                  }}
                  className="btn-primary"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Auth Modals */}
      {(showSignIn || showSignUp) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">
              {showSignIn ? 'Sign In' : 'Sign Up'}
            </h2>
            {showSignIn ? <SignInForm /> : <SignUpForm />}
            <button
              onClick={() => {
                setShowSignIn(false)
                setShowSignUp(false)
              }}
              className="mt-4 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {(showSignIn || showSignUp) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">
              {showSignIn ? 'Sign In' : 'Sign Up'}
            </h2>
            {showSignIn ? <SignInForm /> : <SignUpForm />}
            <button
              onClick={() => {
                setShowSignIn(false)
                setShowSignUp(false)
              }}
              className="mt-4 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
