import React from 'react'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import { AuthProvider } from './contexts/AuthContext'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-20 pb-12">
          <ProductGrid />
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
