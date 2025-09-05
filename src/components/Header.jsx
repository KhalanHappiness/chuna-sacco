import React from 'react'
import { Building2 } from 'lucide-react';
import chunaLogo from '../assets/chuna.png'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-8 left-0 w-full bg-white shadow-sm z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Logo Image */}
            <img 
              src={chunaLogo} 
              alt="Chuna DT Sacco Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Membership</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 transition-colors">Login</button>
            <a 
              href="https://applications.chunasacco.co.ke/index.php?r=new-membership" 
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Join Now
            </a>
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {/* Animated hamburger/X icon */}
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with full-screen overlay */}
        <div className={`md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-center"
            >
              Home
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-center"
            >
              About
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-center"
            >
              Products
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-center"
            >
              Membership
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-center"
            >
              Contact
            </a>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
              <button 
                onClick={handleLinkClick}
                className="block w-full px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-center"
              >
                Login
              </button>
              <button 
                onClick={handleLinkClick}
                className="block w-full bg-emerald-500 text-white px-4 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Join Now
              </button>
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
  );
};

export default Header