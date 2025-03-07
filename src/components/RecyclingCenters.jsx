import React from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';

const centers = [
  {
    name: 'City Recycling Center',
    address: 'Kathmandhu, Bhaktapur, lalitpur & Pokhara',
    phone: '+977 0012345678, +977 0098754321, +977 9820567864',
    hours: 'Mon-Sat: 7AM-8PM',
    materials: ['Paper', 'Plastic', 'Glass', 'Metal', 'Electronics'],
    image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'EcoHub Waste Management',
    address: 'Kathmandhu, Bhaktapur, lalitpur & Pokhara',
    phone: '+977 0012345678, +977 0098754321, +977 9820567864',
    hours: 'Mon-sat: 7AM-7PM',
    materials: ['Hazardous Waste', 'Electronics', 'Batteries', 'Paint'],
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Green Valley Recycling',
    address: 'Kathmandhu, Bhaktapur, lalitpur & Pokhara',
    phone: '+977 0012345678, +977 0098754321, +977 9820567864',
    hours: 'Everyday',
    materials: ['Yard Waste', 'Composting', 'Construction Debris'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  }
];

function RecyclingCenters() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Recycling Centers</h2>
        <p className="mt-2 text-sm md:text-base text-gray-600">Find recycling centers near you and learn what materials they accept</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {centers.map((center) => (
          <div key={center.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={center.image}
              alt={center.name}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">{center.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{center.address}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{center.phone}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{center.hours}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2 text-sm md:text-base">Accepted Materials:</h4>
                <div className="flex flex-wrap gap-2">
                  {center.materials.map((material) => (
                    <span
                      key={material}
                      className="px-2 md:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Before You Visit</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• Call ahead to verify operating hours and accepted materials</li>
          <li>• Sort your recyclables by type to speed up the process</li>
          <li>• Remove all non-recyclable components</li>
          <li>• Clean containers to prevent contamination</li>
        </ul>
      </div>
    </div>
  );
}

export default RecyclingCenters;
