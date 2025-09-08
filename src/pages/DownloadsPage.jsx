import React, { useState } from 'react';
import { Download, Search, FileText, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const DownloadsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const downloads = [
    {
      id: 1,
      title: "Vehicle KRA Transfer form",
      downloads: 282,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    },
    {
      id: 2,
      title: "Vehicle Insurance Form to Insurance Company",
      downloads: 161,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    },
    {
      id: 3,
      title: "Vehicle As Security Requirements",
      downloads: 242,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    },
    {
      id: 4,
      title: "UWS_Childrens_Account_Opening_Form Fillable",
      downloads: 41,
      category: "General Downloads, Loan Products Downloads, Savings Downloads",
      updateDate: "October 4, 2023"
    },
    {
      id: 5,
      title: "UWS-loan-form-Fillable",
      downloads: 696,
      category: "General Downloads, Loan Products Downloads, Savings Downloads",
      updateDate: "April 25, 2025"
    },
    {
      id: 6,
      title: "UWS-Application-for-Membership-fillable",
      downloads: 239,
      category: "General Downloads, Loan Products Downloads, Savings Downloads",
      updateDate: "April 15, 2025"
    },
    {
      id: 7,
      title: "Send Wave Procedure",
      downloads: 251,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    },
    {
      id: 8,
      title: "Property As Security Requirements",
      downloads: 339,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    },
    {
      id: 9,
      title: "NSE Shares As Security Requirements",
      downloads: 187,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    },
    {
      id: 10,
      title: "MPESA Procedure",
      downloads: 410,
      category: "General Downloads",
      updateDate: "November 30, 2020"
    }
  ];

  const filteredDownloads = downloads.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDownloads.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredDownloads.slice(startIndex, endIndex);

  const handleDownload = (item) => {
    console.log(`Downloading ${item.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-green-600 text-white px-3 py-1 rounded text-xl font-bold">
                UWS
              </div>
              <span className="ml-2 text-sm text-gray-600">UNITED WOMEN SACCO</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">HOME</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">ABOUT US</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">MEMBERSHIP</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">SAVINGS PRODUCTS</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">LOAN PRODUCTS</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">PAYMENT DETAILS</a>
              <a href="#" className="text-green-600 font-medium">RESOURCES</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">PORTAL</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">HOME</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">ABOUT US</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">MEMBERSHIP</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">SAVINGS PRODUCTS</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">LOAN PRODUCTS</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">PAYMENT DETAILS</a>
              <a href="#" className="block px-3 py-2 text-green-600">RESOURCES</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">PORTAL</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="absolute inset-0">
          <div className="bg-black bg-opacity-40 w-full h-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Downloads</h1>
          <p className="text-xl text-green-100">Access all your important documents and forms</p>
        </div>
      </div>

      {/* Downloads Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Display</label>
              <select 
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-600">downloads per page</span>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Downloads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categories
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Update Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-red-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.downloads} downloads</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.updateDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDownload(item)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredDownloads.length)} of {filteredDownloads.length} downloads
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:text-gray-300"
            >
              Previous
            </button>
            
            {[...Array(Math.min(3, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 text-sm rounded ${
                    currentPage === pageNum
                      ? 'bg-green-600 text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            {totalPages > 3 && <span className="text-gray-500">...</span>}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:text-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">PRODUCT LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-green-400">Membership</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Savings Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Loan Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Payment Details</a></li>
              </ul>
            </div>

            {/* Resource Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">RESOURCE LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-green-400">Downloads</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Jobs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Media</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Latest News</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-green-400">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Meetings</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Governance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Contacts</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 United Women Sacco. Website Design by Peak & Dale.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <p className="text-sm text-gray-600 mb-2">
            Welcome to our site, if you need help simply reply to this message, we are online and ready to help.
          </p>
          <div className="flex items-center justify-between">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Online</span>
            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;