import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout components (appear on all pages)
import TopHeaderBar from './components/TopHeaderBar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Page components
import HomePage from './pages/HomePage'
import FosaProducts from './pages/FosaProducts'
import BosaProducts from './pages/BosaProducts'
import InsurancePage from './pages/InsurancePage'
import Mchuna from './pages/Mchuna'
import DownloadsPage from './pages/DownloadsPage'
import WhoWeAre from './pages/WhoWeAre'
import BoardOfDirectors from './pages/BoardOfDirectors'
// import ProductsPage from './pages/ProductsPage'
// import FOSAServicesPage from './pages/FOSAServicesPage'
// import MembershipPage from './pages/MembershipPage'
// import ContactPage from './pages/ContactPage'
// import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop/>
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
            <Route path="/mchuna" element={<Mchuna />} />
            <Route path="/downloads" element={<DownloadsPage/>}/>
            <Route path="/WhoWeAre" element={<WhoWeAre/>}/>
            <Route path="/boardofdirectors" element={<BoardOfDirectors/>}/>





            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/fosa-services" element={<FOSAServicesPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </main>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  )
}



export default App