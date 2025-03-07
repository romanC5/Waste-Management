import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusCircle } from 'lucide-react';

function findBestResponse(question) {
  const predefinedResponses = {
    recycling: "Recycling is the process of converting waste into reusable material. Common recyclable items include paper, plastic (types 1-7), glass, and metal. Remember to clean items before recycling!",
    composting: "Composting is great for organic waste! You can compost fruit/vegetable scraps, coffee grounds, yard waste, and paper. Avoid meat, dairy, and oily foods.",
    "electronic waste": "Electronic waste (e-waste) should never go in regular trash. Take it to specialized recycling centers or electronics stores that offer recycling services.",
    "hazardous waste": "Hazardous waste includes batteries, chemicals, paint, and motor oil. These require special disposal at designated facilities.",
    "plastic types": "There are 7 types of recyclable plastics:\n1. PET (bottles)\n2. HDPE (containers)\n3. PVC (pipes)\n4. LDPE (bags)\n5. PP (bottle caps)\n6. PS (foam)\n7. Other",
    default: "I'm here to help with waste management questions! You can ask about recycling, composting, electronic waste, hazardous materials, or specific items."
  };

  const lowercaseQuestion = question.toLowerCase();
  
  // Check for specific keywords
  for (const [key, response] of Object.entries(predefinedResponses)) {
    if (lowercaseQuestion.includes(key)) {
      return response;
    }
  }

  // Check if question contains common waste-related terms
  const wasteTerms = ['trash', 'garbage', 'waste', 'dispose', 'throw', 'bin'];
  if (wasteTerms.some(term => lowercaseQuestion.includes(term))) {
    return "For specific items, please check our waste guide or contact your local recycling center. As a general rule, separate recyclables, compostables, and regular waste.";
  }

  return predefinedResponses.default;
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm EcoBot, your waste management assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse = {
      text: findBestResponse(inputText),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-xl w-80 transition-all duration-200 ${
        isMinimized ? 'h-14' : 'h-[500px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold text-gray-800">EcoBot</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700"
          >
            <MinusCircle className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="p-4 h-[380px] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Chatbot;
