import React, { useState } from 'react';
import { Recycle, Clock, Phone, MapPin, AlertTriangle, Info, Menu, X, Leaf } from 'lucide-react';
import RecyclingCenters from './components/RecyclingCenters';
import WasteGuide from './components/WasteGuide';
import ReportDumping from './components/ReportDumping';
import WelcomePopup from './components/WelcomePopup';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('guide');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [currentPage, setCurrentPage] = useState('main');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    setCurrentPage('main');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const renderMainContent = () => (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {activeTab === 'guide' && <WasteGuide />}
      {activeTab === 'centers' && <RecyclingCenters />}
      {activeTab === 'report' && <ReportDumping />}
    </main>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'contact':
        return <Contact />;
      default:
        return renderMainContent();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      
      {/* Header */}
      <header className="bg-white shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">EcoWise</h1>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-4">
              <button
                onClick={() => handleTabChange('guide')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'guide' && currentPage === 'main'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Info className="h-4 w-4" />
                  <span>Waste Guide</span>
                </div>
              </button>
              <button
                onClick={() => handleTabChange('centers')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'centers' && currentPage === 'main'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MapPin className="h-4 w-4" />
                  <span>Recycling Centers</span>
                </div>
              </button>
              <button
                onClick={() => handleTabChange('report')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'report' && currentPage === 'main'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Report Dumping</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2 pt-4">
                <button
                  onClick={() => handleTabChange('guide')}
                  className={`px-4 py-3 rounded-lg transition w-full text-left ${
                    activeTab === 'guide' && currentPage === 'main'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Info className="h-4 w-4" />
                    <span>Waste Guide</span>
                  </div>
                </button>
                <button
                  onClick={() => handleTabChange('centers')}
                  className={`px-4 py-3 rounded-lg transition w-full text-left ${
                    activeTab === 'centers' && currentPage === 'main'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Recycling Centers</span>
                  </div>
                </button>
                <button
                  onClick={() => handleTabChange('report')}
                  className={`px-4 py-3 rounded-lg transition w-full text-left ${
                    activeTab === 'report' && currentPage === 'main'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Report Dumping</span>
                  </div>
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">© 2024 EcoWise. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <button
                onClick={() => handlePageChange('privacy')}
                className="text-gray-600 hover:text-green-600 text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handlePageChange('terms')}
                className="text-gray-600 hover:text-green-600 text-sm"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handlePageChange('contact')}
                className="text-gray-600 hover:text-green-600 text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
