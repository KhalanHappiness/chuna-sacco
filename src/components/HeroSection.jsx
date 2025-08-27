
import { Users, TrendingUp, Shield, BookOpen, Building2, CreditCard, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full inline-block text-sm font-medium mb-6">
              Trusted Since 1976
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              Your Financial Journey{' '}
              <span className="text-emerald-500">Starts Here</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-left">
              Empowering University of Nairobi community with tailored financial solutions. 
              From student loans to long-term savings, we're here to support your academic 
              and financial growth every step of the way.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="bg-emerald-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600 text-sm">Active Members</div>
              </div>
              <div>
                <div className="bg-emerald-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">KSh 2B+</div>
                <div className="text-gray-600 text-sm">Funds Disbursed</div>
              </div>
              <div>
                <div className="bg-emerald-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-gray-600 text-sm">Years Trusted</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 hover:scale-105 transform transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                Become a Member
              </button>
              <button className="text-emerald-600 border border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 hover:scale-105 hover:shadow-lg transform transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="relative inline-block">
                  {/* Excited person illustration */}
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-6xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    🤩
                  </div>
                  {/* Floating money elements */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg animate-bounce">
                    💰
                  </div>
                  <div className="absolute top-10 -left-4 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white animate-pulse">
                    ⭐
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Amazing Financial Growth!</h3>
                <p className="text-gray-600 text-lg">Join thousands who've transformed their financial future</p>
                
                {/* Success indicators */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
                    <div className="text-2xl font-bold text-emerald-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection