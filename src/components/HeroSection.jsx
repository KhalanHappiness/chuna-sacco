import { useState, useEffect } from 'react';
import { Users, TrendingUp, Shield, BookOpen, Building2, CreditCard, Phone, Mail, MapPin, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Your financial journey starts here",
      subtitle: "Empowering University of Nairobi community with tailored financial solutions. From student loans to long-term savings, we are here to support your academic and financial growth every step of the way."
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Financial Growth",
      subtitle: "Building wealth together"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Modern Banking",
      subtitle: "Technology meets tradition"
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "University Community",
      subtitle: "Serving UoN since 1976"
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
    <section className="bg-white  overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          
          {/* Image Slider */}
          <div className="relative lg:col-span-3">
            <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50  overflow-hidden shadow-2xl">
              {/* Image Container */}
              <div className="relative h-[600px] overflow-hidden">
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
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Slide Content */}
                    


                    <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white max-w-md">
                      <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-white/90 text-lg">{slide.subtitle}</p>

                     {index === 0 && (
                        <div className="flex space-x-4 mt-4">
                          <a
                            href="https://applications.chunasacco.co.ke/index.php?r=new-membership"
                            className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 hover:scale-105 transform transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                          >
                            Become a Member
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

           
          </div>

          <div className="absolute bottom-20 right-6 bg-emerald-600 text-white max-w-sm rounded-2xl shadow-lg p-4 z-20">
            <h3 className="text-xl font-bold mb-2">Chuna Sacco updates</h3>
            <p className="text-sm mb-4">
              We’ve just launched a new loan product to support small businesses.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-emerald-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
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