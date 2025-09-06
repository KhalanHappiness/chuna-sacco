import React, { useState } from 'react';
import { Download, ChevronRight, Clock, DollarSign, Users, BookOpen, PiggyBank, AlertCircle, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ title, amount, period, features, downloadText, icon: Icon, highlighted = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border-2 border-green-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border-b-4 border-b-green-600 ${highlighted ? 'ring-2 ring-green-500 ring-offset-2' : ''}`}
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


const FosaProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Services', icon: Users },
    { id: 'loans', name: 'Loans', icon: DollarSign },
    { id: 'savings', name: 'Savings', icon: PiggyBank },
    { id: 'accounts', name: 'Accounts', icon: BookOpen }
  ];

  const services = [
    {
      id: 1,
      title: "Salary in Advance",
      amount: "60% of Basic Salary",
      period: "PAYABLE IN 14 MONTHS",
      category: 'loans',
      features: [
        "Maximum loan amount is 60% of Member basic salary",
        "Member salary must pass through FOSA for at least 12 months",
        "Recovered within 3 month",
        "A third unit is applicable",
        "Interest rate is charged at 10% upfront",
        "Processed within 3 day"
      ],
      downloadText: "Download Form",
      icon: Clock
    },
    {
      id: 2,
      title: "Salary Advance",
      amount: "60% of Net Salary", 
      period: "PAYABLE IN 14 MONTHS",
      category: 'loans',
      features: [
        "Salary must pass through FOSA at least three months",
        "Loan recovered within a maximum of one (1) month",
        "Processed within 3 hours"
      ],
      downloadText: "Download Form",
      icon: DollarSign
    },
    {
      id: 3,
      title: "FOSA Loan",
      amount: "300,000 max",
      period: "PAYABLE IN 48 MONTHS", 
      category: 'loans',
      features: [
        "Third rule apply",
        "Not pegged to deposit contribution but on salary",
        "Maximum repayment period is 17 months",
        "A third rule is applicable",
        "Effective interest rate is charged at 13% P.A",
        "Processed within a day",
        "Able to top up"
      ],
      downloadText: "Download Form",
      icon: DollarSign,
      highlighted: true
    },
    {
      id: 4,
      title: "Emergency Loan 20 Months",
      amount: "300,000 Max",
      period: "PAYABLE IN 20 MONTHS",
      category: 'loans', 
      features: [
        "Interest rate of 3% per month amortized",
        "Turn around time is one day",
        "Third rule apply"
      ],
      downloadText: "Download Form",
      icon: AlertCircle
    },
    {
      id: 5,
      title: "Karibu EMG Loan",
      amount: "100,000 Max",
      period: "PAYABLE IN 16 MONTHS",
      category: 'loans',
      features: [
        "Designed for new Sacco members",
        "A least (1/3) of the loan is deducted as deposits and 1st 5000 share capital",
        "Maximum repayment period is twelve (12) months",
        "Maximum amount is ksh 100,000",
        "Loan must be fully secured",
        "Competitive interest rate"
      ],
      downloadText: "Download Form",
      icon: Users
    },
    {
      id: 6,
      title: "Education Savings Account",
      amount: "Savings Account",
      period: "INTEREST PAYABLE IN 30 MONTHS",
      category: 'savings',
      features: [
        "Designed for all Sacco members",
        "Minimum monthly contribution of 500 shillings",
        "Withdrawable three times a year",
        "Earns minimum interest of 10%"
      ],
      downloadText: "Download Form",
      icon: BookOpen
    },
    {
      id: 7,
      title: "Holiday Savings Account", 
      amount: "Savings Account",
      period: "INTEREST PAYABLE IN 12 MONTHS",
      category: 'savings',
      features: [
        "Designed for all Sacco members",
        "Minimum monthly contribution of 500 shillings",
        "Withdrawable three times a year",
        "Earns minimum interest of 10%"
      ],
      downloadText: "Download Form",
      icon: PiggyBank
    },
    {
      id: 8,
      title: "Junior Savings Account",
      amount: "Savings Account", 
      period: "INTEREST PAYABLE IN 24 MONTHS",
      category: 'savings',
      features: [
        "Designed for all Sacco members",
        "Minimum monthly contribution of 500 shillings",
        "Withdrawable three times a year", 
        "Earns minimum interest of 10%"
      ],
      downloadText: "Download Form",
      icon: Users
    },
    {
      id: 9,
      title: "FOSA Ordinary Account",
      amount: "Ordinary Account",
      category: 'accounts',
      features: [
        "No ledger fees or account maintenance Fees",
        "No withdrawal limit",
        "Minimum balance of 500 shillings", 
        "Zero benefaction on every activity"
      ],
      downloadText: "Download Form",
      icon: BookOpen
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className=" bg-white/95 px-6 py-14 text-gray-900 mt-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-3xl">
              Chuna Sacco Front Office Service Activities
            </h1>
            <p className="text-xl text-gray-500 md:text-1xl">
              Comprehensive financial services designed for your needs
            </p>
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

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-green-100">
            Contact us today to learn more about our services and how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-all duration-200 hover:shadow-lg hover:scale-105">
              Contact Us
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-green-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FosaProducts