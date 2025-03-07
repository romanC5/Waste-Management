import React from 'react';
import { X, Leaf } from 'lucide-react';

function WelcomePopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative overflow-hidden">
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 h-160">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Welcome to EcoWise
          </h2>

          <div className="space-y-4 text-gray-600">
          <p className="text-center">
          Ecowise is a waste management webapp aimed to clean our environment and create a hygienic surrounding for the citizens to live on a clean environment.  
            </p>

            <p className="text-center">
              Your one-stop solution for responsible waste management and environmental care.
            </p>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">What we offer:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                  Comprehensive waste management guide
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                  Locations of recycling centers
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                  Easy illegal dumping reporting system
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;