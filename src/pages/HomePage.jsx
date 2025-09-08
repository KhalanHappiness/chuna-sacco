import React from 'react'
import HeroSection from '../components/HeroSection'
import FinancialProductsSection from '../components/FinancialProductsSection'
import MemberTestimonials from '../components/MemberTestimonials'
import LatestUpdates from '../components/LatestUpdates'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FinancialProductsSection />
      <LatestUpdates />
      <MemberTestimonials />
    </div>
  )
}

export default HomePage