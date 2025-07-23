import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MessageCircle, FileText, Clock } from 'lucide-react';

const HelpPage = () => {
  const navigate = useNavigate();

  const helpOptions = [
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak directly with our support team',
      action: 'Call Now',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us for instant help',
      action: 'Start Chat',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond soon',
      action: 'Send Email',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FileText,
      title: 'FAQ',
      description: 'Find answers to common questions',
      action: 'View FAQ',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const faqItems = [
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 30-45 minutes. Express delivery is available for 15-25 minutes with an additional fee.'
    },
    {
      question: 'What are the delivery charges?',
      answer: 'Delivery fee is ₹49 for orders under ₹500. Free delivery for orders above ₹500.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'You can cancel your order within 2 minutes of placing it. After that, cancellation may not be possible.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order in real-time from the order confirmation page or your account section.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">Help & Support</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4">
        {/* Support Hours */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-orange-500 mr-2" />
            <h3 className="font-semibold text-black">Support Hours</h3>
          </div>
          <p className="text-gray-700">Monday - Sunday: 24/7 Available</p>
          <p className="text-sm text-gray-600">We're here to help you anytime!</p>
        </div>

        {/* Contact Options */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {helpOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <button
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-black mb-1">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <span className="text-orange-500 font-medium text-sm">{option.action}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-black mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;