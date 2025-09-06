import React, { useState } from 'react';
import { Download, ChevronRight, Clock, DollarSign, Users, BookOpen, PiggyBank, AlertCircle, CheckCircle2, GraduationCap, Home, Car } from 'lucide-react';

const ServiceCard = ({ title, amount, period, features, downloadText, icon: Icon, highlighted = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border-2 border-green-200 bg-green-50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border-b-4 border-b-green-600 ${highlighted ? 'ring-2 ring-green-500 ring-offset-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {highlighted && (
        <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-green-500 opacity-10"></div>
      )}
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <Icon className="h-8 w-8 text-green-600" />
          {highlighted && (
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
              POPULAR
            </span>
          )}
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-green-800">{title}</h3>
        
        {amount && (
          <div className="mb-4">
            <span className="text-3xl font-bold text-green-600">Ksh {amount}</span>
            {period && <span className="ml-2 text-sm text-green-800 opacity-70">/ {period}</span>}
          </div>
        )}
        
        <ul className="mb-6 space-y-3">
          {features.slice(0, isHovered ? features.length : 3).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-green-800">{feature}</span>
            </li>
          ))}
          {features.length > 3 && !isHovered && (
            <div className="text-sm text-gray-500 font-medium">
              +{features.length - 3} more benefits
            </div>
          )}
        </ul>
        
        <button 
          className="group w-full rounded-lg bg-green-600 hover:bg-green-700 px-4 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg"
        >
          <span className="flex items-center justify-center space-x-2">
            <Download className="h-4 w-4" />
            <span>{downloadText}</span>
            <ChevronRight className={`h-4 w-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
          </span>
        </button>
      </div>
    </div>
  );
};

const BosaProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products', icon: Users },
    { id: 'emergency', name: 'Emergency Loans', icon: AlertCircle },
    { id: 'normal', name: 'Normal Loans', icon: DollarSign },
    { id: 'special', name: 'Special Loans', icon: BookOpen }
  ];

  const services = [
    {
      id: 1,
      title: "Emergency Loan 6 Months",
      amount: "300,000 Max",
      period: "PAYABLE IN 24 MONTHS",
      category: 'emergency',
      features: [
        "Minimum net pay of Ksh 5,500.00 after disbursement",
        "Member salary must pass through FOSA",
        "Maximum repayment period is 6 months",
        "Interest rate is charged 10% upfront",
        "Processed within a day"
      ],
      downloadText: "Download Form",
      icon: AlertCircle
    },
    {
      id: 2,
      title: "Emergency Loan 12 Months",
      amount: "300,000 Max",
      period: "PAYABLE IN 30 MONTHS",
      category: 'emergency',
      features: [
        "Maximum repayment period is 12 months",
        "A third rule is applicable",
        "Effective interest rate is charged at 15% p.a",
        "Processed within a day",
        "Able to top up"
      ],
      downloadText: "Download Form",
      icon: AlertCircle
    },
    {
      id: 3,
      title: "Emergency Loan 20 Months",
      amount: "300,000 Max",
      period: "PAYABLE IN 20 MONTHS",
      category: 'emergency',
      features: [
        "Maximum repayment period is 20 months",
        "A third rule is applicable",
        "Effective interest rate is charged at p.a",
        "Processed within a day",
        "Able to top up"
      ],
      downloadText: "Download Form",
      icon: AlertCircle,
      highlighted: true
    },
    {
      id: 4,
      title: "School Fees Loan",
      amount: "300,000 Max",
      period: "PAYABLE IN 60 MONTHS",
      category: 'special',
      features: [
        "Maximum repayment period is 72 months",
        "A third rule is applicable",
        "Effective interest rate is charged at 12% P.A",
        "Processed within a day",
        "Able to top up"
      ],
      downloadText: "Download Form",
      icon: GraduationCap
    },
    {
      id: 5,
      title: "Jiunge Loan 72 Months",
      amount: "6,000,000 Max",
      period: "PAYABLE IN 72 MONTHS",
      category: 'special',
      features: [
        "Deposits Multiplier: 3 (three) times",
        "Must have been a member for at least three months",
        "Fully filled Jiunge Loan application form",
        "Latest pay slip",
        "OPEN FOSA being your monthly salary pay point"
      ],
      downloadText: "Download Form",
      icon: Users
    },
    {
      id: 6,
      title: "Normal 60",
      amount: "UP to 6million",
      period: "60 MONTHS",
      category: 'normal',
      features: [
        "Application must be made on the official loan form duly completed",
        "Agreement and Guarantorship in-line with membership",
        "Member and Guarantor MUST reside in original pay slip front more than one month old",
        "Lending conditions relating at the time of application",
        "Must details on the loan form"
      ],
      downloadText: "Download Form",
      icon: DollarSign
    },
    {
      id: 7,
      title: "Normal Loan (24 Months)",
      amount: "1,000,000 Max",
      period: "PAYABLE IN 24 MONTHS",
      category: 'normal',
      features: [
        "Application must be made on the official loan form duly completed",
        "Agreement and Guarantorship in-line with membership",
        "The Loan Applicant MUST reside in original pay slip front more than one month old",
        "Lending conditions relating at the time of application",
        "Must details on the loan form"
      ],
      downloadText: "Download Form",
      icon: DollarSign
    },
    {
      id: 8,
      title: "Normal (36 Months)",
      amount: "3,000,000 Max",
      period: "PAYABLE IN 36 MONTHS",
      category: 'normal',
      features: [
        "Application must be made on the official loan form duly completed",
        "Agreement and Guarantorship in-line with membership",
        "The Loan Applicant MUST reside in original pay slip front more than one month old",
        "Lending conditions relating at the time of application",
        "Must details on the loan form"
      ],
      downloadText: "Download Form",
      icon: DollarSign
    },
    {
      id: 9,
      title: "Normal (48 Months)",
      amount: "6,000,000 Max",
      period: "PAYABLE IN 48 MONTHS",
      category: 'normal',
      features: [
        "Application must be made on the official loan form duly completed",
        "Agreement and Guarantorship in-line with membership",
        "The Loan Applicant MUST reside in original pay slip front more than one month old",
        "Lending conditions relating at the time of application",
        "Must details on the loan form"
      ],
      downloadText: "Download Form",
      icon: DollarSign
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white/95 px-6 py-14 text-gray-900 mt-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 text-sm font-semibold text-green-600 uppercase tracking-wide">
              BOSA
            </div>
            <h1 className="mb-4 text-4xl font-bold text-green-800 md:text-3xl">
              Chuna Back Office Products Available For You
            </h1>
            <div className="mx-auto h-1 w-16 bg-green-600 mb-8"></div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>

    
      
    </div>
  );
};

export default BosaProducts;