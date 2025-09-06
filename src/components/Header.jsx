import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import chunaLogo from '../assets/chuna.png'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = React.useState(false)
  const location = useLocation()

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsProductsDropdownOpen(false)
  }

  // Check if current path matches the link
  const isActiveLink = (path) => {
    return location.pathname === path
  }

  // Products dropdown items
  const productItems = [
    { name: 'FOSA Products', path: '/fosaProducts' },
    { name: 'BOSA Products', path: '/bosaProducts' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Agency Banking', path: '/products/agency-banking' },
    { name: 'Mchuna', path: '/mchuna' }
  ]

  // Navigation links configuration
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/fosaProducts', hasDropdown: true },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="fixed top-8 left-0 w-full bg-white shadow-sm z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Logo - Link to home */}
            <Link to="/" onClick={handleLinkClick}>
              <img 
                src={chunaLogo} 
                alt="Chuna DT Sacco Logo" 
                className="h-12 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative">
            {navigationLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsProductsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsProductsDropdownOpen(false)}
              >
                {link.hasDropdown ? (
                  <div className="flex items-center">
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-1 transition-colors ${
                        isActiveLink(link.path) || location.pathname.startsWith('/products/')
                          ? 'text-green-600 font-semibold border-b-2 border-green-600'
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isProductsDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50 transition-all duration-200 ${
                      isProductsDropdownOpen 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 translate-y-2 invisible'
                    }`}>
                      <div className="py-2">
                        {productItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={handleLinkClick}
                            className={`block px-4 py-3 text-sm transition-colors hover:bg-green-50 hover:text-green-600 ${
                              isActiveLink(item.path)
                                ? 'text-green-600 bg-green-50 font-medium'
                                : 'text-gray-700'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`transition-colors ${
                      isActiveLink(link.path)
                        ? 'text-green-600 font-semibold border-b-2 border-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`transition-colors ${
                isActiveLink('/login')
                  ? 'text-green-600 font-semibold'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Login
            </Link>
            <a 
              href="https://applications.chunasacco.co.ke/index.php?r=new-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigationLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 text-center ${
                    isActiveLink(link.path) || (link.hasDropdown && location.pathname.startsWith('/products/'))
                      ? 'text-green-600 bg-green-50 font-semibold'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {link.name}
                </Link>
                
                {/* Mobile Products Submenu */}
                {link.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {productItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActiveLink(item.path)
                            ? 'text-green-600 bg-green-50 font-medium'
                            : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
              <Link
                to="/login"
                onClick={handleLinkClick}
                className={`block w-full px-4 py-3 rounded-lg transition-all duration-200 text-center ${
                  isActiveLink('/login')
                    ? 'text-green-600 bg-green-50 font-semibold'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                Login
              </Link>
              <a
                href="https://applications.chunasacco.co.ke/index.php?r=new-membership"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>

        {/* Overlay backdrop */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  )
}

export default Header