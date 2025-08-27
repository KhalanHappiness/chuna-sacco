import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection/>
      
    </div>
  )
}

export default App
