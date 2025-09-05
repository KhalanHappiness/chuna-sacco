import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'

import TopHeaderBar from './components/TopHeaderBar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FinancialProductsSection from './components/FinancialProductsSection'
import MemberTestimonials from './components/MemberTestimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopHeaderBar/>
      <Header />
      <HeroSection/>
      <FinancialProductsSection/>
      <MemberTestimonials/>

      
    </div>
  )
}

export default App
