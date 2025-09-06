import { useState, useEffect } from 'react';
import { Users, TrendingUp, Shield, BookOpen, Building2, CreditCard, Phone, Mail, MapPin, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Your financial journey starts here",
      subtitle: "Empowering UoN community with tailored financial solutions",
      shortSubtitle: "Tailored financial solutions for UoN"
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Financial Growth",
      subtitle: "Building wealth together",
      shortSubtitle: "Building wealth together"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Modern Banking",
      subtitle: "Technology meets tradition",
      shortSubtitle: "Technology meets tradition"
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "University Community",
      subtitle: "Serving UoN since 1976",
      shortSubtitle: "Serving UoN since 1976"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-white overflow-hidden pt-16 md:pt-24 relative">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 items-center">
          
          {/* Image Slider - Responsive Height */}
          <div className="relative lg:col-span-3">
            <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden shadow-2xl">
              {/* Image Container - Responsive Heights */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay - Stronger on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:from-black/60 md:via-black/20"></div>
                    
                    {/* Slide Content - Responsive Text */}
                    <div className="absolute bottom-16 sm:top-1/2 sm:-translate-y-1/2 left-4 sm:left-6 text-white max-w-xs sm:max-w-md">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                        {slide.title}
                      </h3>
                      {/* Show shorter subtitle on mobile */}
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-3 sm:mb-0 block sm:hidden">
                        {slide.shortSubtitle}
                      </p>
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg hidden sm:block">
                        {slide.subtitle}
                      </p>

                      {index === 0 && (
                        <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                          <a
                            href="https://applications.chunasacco.co.ke/index.php?r=new-membership"
                            className="bg-emerald-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-emerald-600 hover:scale-105 transform transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                          >
                            Become a Member
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Hidden on very small screens */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1.5 sm:p-2 text-white transition-all duration-300 hover:scale-110 hidden xs:block"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1.5 sm:p-2 text-white transition-all duration-300 hover:scale-110 hidden xs:block"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Updates Card - Improved Mobile Layout */}
          <div className="lg:absolute lg:bottom-20 lg:right-6 bg-green-600 text-white rounded-xl lg:rounded-2xl shadow-lg p-3 sm:p-4 z-30 
                         mx-4 -mt-2 lg:mx-0 lg:mt-0 lg:max-w-sm">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2">Chuna Sacco updates</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              We've just launched a new loan product to support small businesses.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-emerald-600 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow hover:bg-gray-200 transition text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;