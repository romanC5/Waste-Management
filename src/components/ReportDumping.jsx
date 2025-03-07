import React, { useState } from 'react';
import { Camera, AlertTriangle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function ReportDumping() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    date: '',
    time: '',
    contact: ''
  });

  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Combine date and time into a single DateTime string
      const dateTime = `${formData.date}T${formData.time}`;

      // Create a new FormData object with the combined DateTime
      const formDataObj = new FormData();
      formDataObj.append('location', formData.location);
      formDataObj.append('description', formData.description);
      formDataObj.append('dateTime', dateTime); // Combined DateTime
      formDataObj.append('contact', formData.contact);

      // Add files to formData
      if (files.length > 0) {
        files.forEach((file, index) => {
          formDataObj.append('FileUpload', file);
        });
      }

      // Send the form data to the backend
      const response = await axios.post('http://localhost:5000/api/form', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response from server:', response.data);

      // Reset form
      setFormData({
        location: '',
        description: '',
        date: '',
        time: '',
        contact: ''
      });
      setFiles([]);

      // Show toast notification
      toast.success('Thank you for your report. Authorities have been notified.', {
        position: "top-right",
        autoClose: 5000, // Close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit the report. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div className="space-y-8 p-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Report Illegal Dumping</h2>
        <p className="mt-2 text-gray-600">Help keep our community clean by reporting illegal waste dumping</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Contact Information (optional)</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>

            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload photos</span></p>
                  <p className="text-xs text-gray-500">(Optional)</p>
                </div>
                <input type="file" className="hidden" accept="image/*" multiple onChange={handleFileChange} />
              </label>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">Submit Report</button>
          </form>
        </div>

        {/* Other components like Google Maps and Important Information */}
      </div>

      {/* ToastContainer must be included to display toasts */}
      <ToastContainer />
    </div>
  );
}

export default ReportDumping;