import React, { useState } from 'react';
import { Trash2, Recycle, Battery, Box, Newspaper, Wine, X } from 'lucide-react';

const wasteCategories = [
  {
    icon: <Recycle className="h-6 w-6 text-green-500" />,
    title: 'Recyclables',
    description: 'Paper, cardboard, plastic containers, glass bottles, and metal cans',
    tips: 'Rinse containers before recycling. Remove caps and lids.',
    color: 'blue',
    details: {
      acceptedItems: [
        'Clean paper and cardboard',
        'Plastic bottles and containers (types 1-7)',
        'Glass bottles and jars',
        'Aluminum and steel cans',
        'Clean aluminum foil'
      ],
      preparation: [
        'Rinse all containers thoroughly',
        'Remove all food residue',
        'Flatten cardboard boxes',
        'Remove plastic caps from bottles'
      ],
      notAccepted: [
        'Greasy or food-stained paper',
        'Plastic bags and wraps',
        'Styrofoam',
        'Broken glass',
        'Electronics'
      ]
    }
  },
  {
    icon: <Battery className="h-6 w-6 text-red-600" />,
    title: 'Hazardous Waste',
    description: 'Batteries, electronics, chemicals, and paint',
    tips: 'Never mix different types of hazardous waste. Keep in original containers when possible.',
    color: 'red',
    details: {
      acceptedItems: [
        'Batteries (all types)',
        'Electronics and e-waste',
        'Paint and solvents',
        'Pesticides and herbicides',
        'Motor oil and filters'
      ],
      preparation: [
        'Keep in original containers',
        'Seal containers tightly',
        'Pack items separately',
        'Label unknown substances',
        'Transport in sturdy boxes'
      ],
      notAccepted: [
        'Explosives and ammunition',
        'Radioactive materials',
        'Biological waste',
        'Unknown chemicals',
        'Pressurized containers'
      ]
    }
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: 'Organic Waste',
    description: 'Food scraps, yard waste, and compostable materials',
    tips: 'Keep meat and dairy products out of home composting.',
    color: 'green',
    details: {
      acceptedItems: [
        'Fruit and vegetable scraps',
        'Coffee grounds and filters',
        'Tea bags',
        'Yard trimmings',
        'Grass clippings'
      ],
      preparation: [
        'Cut large items into smaller pieces',
        'Mix green and brown materials',
        'Keep material moist but not wet',
        'Ensure proper aeration',
        'Monitor temperature'
      ],
      notAccepted: [
        'Meat and fish',
        'Dairy products',
        'Oils and fats',
        'Diseased plants',
        'Pet waste'
      ]
    }
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: 'Paper Products',
    description: 'Newspapers, magazines, office paper, and cardboard',
    tips: 'Keep paper clean and dry. Remove plastic windows from envelopes.',
    color: 'yellow',
    details: {
      acceptedItems: [
        'Newspapers and magazines',
        'Office paper',
        'Cardboard boxes',
        'Paper bags',
        'Junk mail'
      ],
      preparation: [
        'Remove plastic wrapping',
        'Flatten all boxes',
        'Keep materials dry',
        'Remove staples if possible',
        'Sort by type'
      ],
      notAccepted: [
        'Waxed paper',
        'Food-contaminated paper',
        'Tissue paper',
        'Paper towels',
        'Laminated paper'
      ]
    }
  },
  {
    icon: <Wine className="h-6 w-6 text-blue-500" />,
    title: 'Glass',
    description: 'Bottles, jars, and other glass containers',
    tips: 'Separate by color. Remove caps and rinse containers.',
    color: 'purple',
    details: {
      acceptedItems: [
        'Clear glass bottles',
        'Colored glass containers',
        'Glass jars',
        'Wine bottles',
        'Beer bottles'
      ],
      preparation: [
        'Remove all caps and lids',
        'Rinse thoroughly',
        'Sort by color',
        'Remove labels if possible',
        'Handle with care'
      ],
      notAccepted: [
        'Window glass',
        'Mirrors',
        'Light bulbs',
        'Ceramics',
        'Broken glass'
      ]
    }
  }
];

function DetailPopup({ category, onClose }) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`p-3 rounded-full bg-${category.color}-100 text-${category.color}-600`}>
              {category.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Accepted Items</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.details.acceptedItems.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Preparation Guidelines</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.details.preparation.map((step, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Not Accepted</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.details.notAccepted.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              <span className="font-semibold">Pro tip:</span> {category.tips}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WasteGuide() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="space-y-8">
      <div className='text-center'>
        <h2>How We Works</h2>

      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Waste Management Guide</h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">Learn how to properly sort and dispose of different types of waste</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {wasteCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedCategory(category)}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition text-left w-full"
          >
            <div className={`inline-block p-3 rounded-full bg-${category.color}-100 text-${category.color}-600 mb-4`}>
              {category.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">{category.description}</p>
            <div className="bg-gray-50 p-3 md:p-4 rounded-md">
              <p className="text-xs md:text-sm text-gray-700">
                <span className="font-medium">Pro tip:</span> {category.tips}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <DetailPopup category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      )}

      <div className="bg-green-50 rounded-lg p-4 md:p-6 mt-8">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Why Proper Waste Management Matters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Environmental Impact</h4>
            <p className="text-sm md:text-base text-gray-600">Proper waste management helps reduce pollution and protects our ecosystems.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Resource Conservation</h4>
            <p className="text-sm md:text-base text-gray-600">Recycling helps conserve natural resources and reduce energy consumption.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Community Health</h4>
            <p className="text-sm md:text-base text-gray-600">Good waste management practices prevent disease spread and maintain public health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteGuide;
