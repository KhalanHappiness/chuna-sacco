import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Grace Wanjiku",
    role: "Small Business Owner",
    business: "Wanjiku's Tailoring Shop",
    content: "The SACCO has been instrumental in growing my tailoring business. Their flexible loan terms and low interest rates allowed me to buy new equipment and expand. The staff is always helpful and understanding.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1494790108755-2616c64e9b8f?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "David Kiprotich",
    role: "Teacher & Farmer",
    content: "I've been saving with this SACCO for over 5 years now. The dividends are excellent and the mobile banking makes it so convenient. I was able to get a loan to start my poultry farm thanks to them.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Samuel Ochieng",
    role: "Logistics Manager",
    business: "TransCorp Ltd",
    content: "Professional service and transparent processes. The SACCO helped me secure a mortgage for my family home. Their financial advisory services are top-notch and have helped me plan for my retirement.",
    rating: 4,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Mary Nyambura",
    role: "Entrepreneur",
    business: "Fresh Produce Supplier",
    content: "The emergency loan facility saved my business during tough times. The quick approval process and reasonable terms meant I could restock my inventory without delay. Highly recommend this SACCO.",
    rating: 3,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

const MemberTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  // Auto-advance testimonials every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg - gray py-20 px-6 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how Chuna Sacco has transformed the financial lives of thousands of members across our community.
          </p>
        </div>
      
        {/* Split-Screen Testimonial */}
        <div className="overflow-hidden shadow-2xl bg-white border-0 rounded-2xl">
          <div className="grid lg:grid-cols-2 min-h-[400px]">
            {/* Left Side - Testimonial Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16 bg-gradient-to-br from-green-600 to-green-800 text-white relative">
              <div className="absolute top-8 left-8 text-white/20">
                <Quote size={80} />
              </div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="mb-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < currentTestimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="mb-8">
                  <p className="text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium">
                    "{currentTestimonial.content}"
                  </p>
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Customer Details */}
            <div className="flex flex-col justify-center items-center p-8 lg:p-12 xl:p-16 bg-white text-center lg:text-left">
              <div className="w-full max-w-sm">
                {/* Customer Photo */}
                <div className="mb-8 flex justify-center lg:justify-start">
                  <div className="relative">
                    <img
                      src={currentTestimonial.photo}
                      alt={`${currentTestimonial.name}'s profile`}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-emerald-500/20 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-600 rounded-full border-4 border-white"></div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {currentTestimonial.role}
                  </p>
                  {currentTestimonial.business && (
                    <p className="text-green-600 font-semibold">
                      {currentTestimonial.business}
                    </p>
                  )}

                  {/* Member Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mt-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Verified SACCO Member
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

export default MemberTestimonials;