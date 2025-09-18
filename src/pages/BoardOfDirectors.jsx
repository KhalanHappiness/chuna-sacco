import React, { useState, useEffect } from 'react';
import { Users, Award, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const BoardOfDirectors = () => {
  const [isVisible, setIsVisible] = useState(false);
    const [imageErrors, setImageErrors] = useState({});


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boardMembers = [
    {
      id: 1,
      name: "Mr. Kelah Omwando",
      position: "Chairman",
      image: "https://www.chunasacco.co.ke/sites/default/files/board/KEFAH%20JUMA%20OMWANDO.jpg",
      bio: "Experienced leader with over 15 years in cooperative management and financial services.",
      isExecutive: true
    },
    {
      id: 2,
      name: "JOHN WAWERU",
      position: "Treasurer",
      image: "https://www.chunasacco.co.ke/sites/default/files/board/JOHN%20WAWERU.jpg",
      bio: "Financial expert with extensive background in accounting and treasury management.",
      isExecutive: true
    },
    {
      id: 3,
      name: "Ms. Monicah Kiragu",
      position: "Hon. Secretary",
      image: "https://www.chunasacco.co.ke/sites/default/files/board/MONICAH%20KIRAGU.jpg",
      bio: "Administrative professional with strong organizational and communication skills.",
      isExecutive: true
    },
    {
      id: 4,
      name: "George O. Ochieng",
      position: "Vice Chairman",
      image: "https://www.chunasacco.co.ke/sites/default/files/board/GEORGE%20OCHIENG.png",
      bio: "Strategic leader supporting the vision and mission of the cooperative society.",
      isExecutive: true
    },
    {
      id: 5,
      name: "Julius N. Matano",
      position: "Board Member",
      image: "https://www.chunasacco.co.ke/sites/default/files/board/JULIUS%20MATANO.jpg",
      bio: "Dedicated member contributing to policy development and strategic decisions."
    },
    {
      id: 6,
      name: "Marilyn K. Nabakwe",
      position: "Board Member",
      image: "https://www.chunasacco.co.ke/sites/default/files/board/MARLYNN%20NABAKWE.jpg",
      bio: "Committed to ensuring member welfare and cooperative growth."
    },
   
    {
      id: 9,
      name: "PROF. RICHARD N. ONWONGA",
      position: "Board Member",
      image: "https://www.chunasacco.co.ke/sites/default/files/Membership%20page/prof%20richard.png",
      bio: "Academic leader with expertise in research and institutional development."
    }
  ];

  const executives = boardMembers.filter(member => member.isExecutive);
  const regularMembers = boardMembers.filter(member => !member.isExecutive);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 mt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">THE BOARD</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Members Of The <span className="text-yellow-300">Board</span>
            </h1>
            
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
              The board of directors has the ultimate decision-making authority and responsibility for directing and controlling the affairs of the SACCO and providing effective and efficient management of overall operations.
            </p>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 lg:h-20">
            <path fill="rgba(248, 250, 252, 1)" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Executive Board Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-800 font-semibold">EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Executive Board Members
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our executive team provides strategic direction and ensures operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((member, index) => (
            <div
              key={member.id}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-66 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Executive Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      EXECUTIVE
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                    <p className="text-emerald-100">{member.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regular Board Members Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Board Members
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to our cooperative's success and member welfare
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Fixed Image Container */}
                <div className="relative w-full h-80 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden">
                {!imageErrors[member.id] ? (
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(member.id)}
                    style={{
                        // Ensure the image covers the container while preserving aspect ratio
                        objectFit: 'cover',
                        objectPosition: 'center top' // Focus on the top part (face area)
                    }}
                    />
                ) : (
                    // Fallback when image fails to load
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-200 to-teal-200">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-emerald-600">
                            {getInitials(member.name)}
                        </span>
                        </div>
                        <p className="text-emerald-700 font-medium">Photo Coming Soon</p>
                    </div>
                    </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/0 to-transparent opacity-0 group-hover:from-emerald-600/10 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            ))}
        </div>
        </div>
        </div>

      
    </div>
  );
};

export default BoardOfDirectors;