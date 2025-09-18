import React, { useState } from 'react';
import { Download, Search, FileText, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const DownloadsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [downloadingId, setDownloadingId] = useState(null);

  const downloads = [
    {
      id: 1,
      title: "Delegates Vetting Form",
      downloads: 282,
      category: "General Downloads",
      updateDate: "March 04, 2025",
      fileUrl: "https://www.chunasacco.co.ke/sites/default/files/2025-02/Delegates%20Vetting%20Form%202025%2004.03.2025.pdf", 
      filename: "delegates-vetting-form.pdf"
    },
    {
      id: 2,
      title: "2024 revision-chuna sacco bylaws",
      downloads: 161,
      category: "General Downloads",
      updateDate: "November 30, 2024",
      fileUrl: "https://www.chunasacco.co.ke/sites/default/files/2025-01/Bylaws%20-%204th%20Revision%202024_compressed_0.pdf",
      filename: "chuna-sacco-bylaws-2024.pdf"
    },
    {
      id: 3,
      title: "Sacco by laws 2023 revised",
      downloads: 242,
      category: "General Downloads",
      updateDate: "November 30, 2023",
      fileUrl: "https://www.chunasacco.co.ke/sites/default/files/2025-01/CHUNA%20SACCO%20UPDATED%20By-laws%202023%20-%20current.pdf",
      filename: "sacco-bylaws-2023.pdf"
    },
    {
      id: 4,
      title: "ATM Application Form",
      downloads: 41,
      category: "General Downloads, Loan Products Downloads, Savings Downloads",
      updateDate: "October 4, 2023",
      fileUrl: "https://www.chunasacco.co.ke/sites/default/files/downloads/forms/ATM%20Application.pdf",
      filename: "atm-application-form.pdf"
    },
    {
      id: 5,
      title: "Chuna form",
      downloads: 696,
      category: "General Downloads, Loan Products Downloads, Savings Downloads",
      updateDate: "April 25, 2025",
      fileUrl: "/downloads/chuna-form.pdf",
      filename: "chuna-form.pdf"
    },
    {
      id: 6,
      title: "Student Application Form",
      downloads: 239,
      category: "General Downloads, Loan Products Downloads, Savings Downloads",
      updateDate: "April 15, 2025",
      fileUrl: "https://www.chunasacco.co.ke/sites/default/files/2024-02/forms%20new%202023/Student%20Member%20application%20form_11zon.pdf",
      filename: "student-application-form.pdf"
    },
    {
      id: 7,
      title: "Change Salary Paypoint",
      downloads: 251,
      category: "General Downloads",
      updateDate: "November 30, 2020",
      fileUrl: "/downloads/change-salary-paypoint.pdf",
      filename: "change-salary-paypoint.pdf"
    },
    {
      id: 8,
      title: "Refund Form",
      downloads: 339,
      category: "General Downloads",
      updateDate: "November 30, 2020",
      fileUrl: "/downloads/refund-form.pdf",
      filename: "refund-form.pdf"
    },
    {
      id: 9,
      title: "Normal Premium Loan Form",
      downloads: 187,
      category: "General Downloads",
      updateDate: "November 30, 2020",
      fileUrl: "/downloads/normal-premium-loan-form.pdf",
      filename: "normal-premium-loan-form.pdf"
    },
    {
      id: 10,
      title: "Normal Jijenge Form",
      downloads: 410,
      category: "General Downloads",
      updateDate: "November 30, 2020",
      fileUrl: "/downloads/normal-jijenge-form.pdf",
      filename: "normal-jijenge-form.pdf"
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

  // Enhanced download function with error handling and loading states
  const handleDownload = async (item) => {
    setDownloadingId(item.id);
    
    try {
      console.log(`Downloading ${item.title}`);
      
      // Method 1: Direct download (if files are publicly accessible)
      const link = document.createElement('a');
      link.href = item.fileUrl;
      link.download = item.filename;
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Track download count (you can make an API call here)
      // await fetch(`/api/downloads/${item.id}/increment`, { method: 'POST' });
      
    } catch (error) {
      console.error('Download failed:', error);
      alert(`Failed to download ${item.title}. Please try again.`);
    } finally {
      setDownloadingId(null);
    }
  };

  // Alternative method for protected files or API-based downloads
  const handleDownloadWithFetch = async (item) => {
    setDownloadingId(item.id);
    
    try {
      console.log(`Downloading ${item.title}`);
      
      // Fetch the file from your API
      const response = await fetch(`/api/downloads/${item.id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // If auth required
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob
      const blob = await response.blob();
      
      // Create download URL
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = item.filename;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert(`Failed to download ${item.title}. Please try again.`);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 mt-28">
        <div className="absolute inset-0">
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Downloads</h1>
          <p className="text-xl text-gray-500">Access all your important documents and forms</p>
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
                        disabled={downloadingId === item.id}
                        className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all ${
                          downloadingId === item.id
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                        }`}
                      >
                        <Download className={`h-4 w-4 ${downloadingId === item.id ? 'animate-bounce' : ''}`} />
                        <span>{downloadingId === item.id ? 'Downloading...' : 'Download'}</span>
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
    </div>
  );
};

export default DownloadsPage;