import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">Zappin</h1>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-sm">Deliver to: <strong>Downtown</strong></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#appetizers" className="text-gray-600 hover:text-orange-500 transition-colors">Appetizers</a>
            <a href="#mains" className="text-gray-600 hover:text-orange-500 transition-colors">Main Course</a>
            <a href="#desserts" className="text-gray-600 hover:text-orange-500 transition-colors">Desserts</a>
            <a href="#beverages" className="text-gray-600 hover:text-orange-500 transition-colors">Beverages</a>
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for food..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#appetizers" className="text-gray-600 hover:text-orange-500 transition-colors">Appetizers</a>
              <a href="#mains" className="text-gray-600 hover:text-orange-500 transition-colors">Main Course</a>
              <a href="#desserts" className="text-gray-600 hover:text-orange-500 transition-colors">Desserts</a>
              <a href="#beverages" className="text-gray-600 hover:text-orange-500 transition-colors">Beverages</a>
              <div className="pt-4 border-t border-gray-200">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search for food..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;