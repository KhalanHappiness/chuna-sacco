import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout components (appear on all pages)
import TopHeaderBar from './components/TopHeaderBar'
import Header from './components/Header'
import Footer from './components/Footer'

// Page components
import HomePage from './pages/HomePage'
import FosaProducts from './pages/FosaProducts'
import BosaProducts from './pages/BosaProducts'
import InsurancePage from './pages/InsurancePage'
// import AboutPage from './pages/AboutPage'
// import ProductsPage from './pages/ProductsPage'
// import FOSAServicesPage from './pages/FOSAServicesPage'
// import MembershipPage from './pages/MembershipPage'
// import ContactPage from './pages/ContactPage'
// import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopHeaderBar />
        <Header />
        
        {/* Main content area - changes based on route */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fosaProducts" element={<FosaProducts />} />
            <Route path="/bosaProducts" element={<BosaProducts />} />
            <Route path="/insurance" element={<InsurancePage />} />



            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/fosa-services" element={<FOSAServicesPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} /> */}
            {/* 404 route - catches any unmatched routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

// Simple 404 component
const NotFoundPage = () => (
  <div className="pt-28 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Go Home
      </a>
    </div>
  </div>
)

export default App