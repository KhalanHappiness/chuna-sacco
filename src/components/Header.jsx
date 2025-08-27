import React from 'react'
import { Building2 } from 'lucide-react';


const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-emerald-500 text-white p-2 rounded-lg mr-3">
              <Building2 className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900">Chuna DT Sacco</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">About</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Membership</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600">Login</button>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Header