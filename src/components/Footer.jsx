import { Users, TrendingUp, Shield, BookOpen, Building2, CreditCard, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-emerald-500 text-white p-2 rounded-lg mr-3">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Chuna DT Sacco</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the University of Nairobi community with tailored financial solutions. We've been serving members since 1976.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-600">Mchuna Application</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-600">Help Desk</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-600">Online Loan Application</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-600">Asset Financing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-600">Group Loan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-600">New Membership Application</a></li>

            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                University of Nairobi, Main Campus
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +254 (0) 123 4567
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                info@chunadtsacco.co.ke
              </li>
              <li className="text-gray-400">
                Mon-Fri: 8AM-5PM
              </li>
            </ul>
          </div>
          
          {/* Stay Updated */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on new products and services.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-gray-100 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 px-4 py-2 rounded-r-lg hover:bg-emerald-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chuna DT Sacco Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
