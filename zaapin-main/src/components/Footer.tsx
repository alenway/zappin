import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Zappin</h3>
            <p className="text-gray-400 mb-6">
              Delicious food delivered fast. Your favorite restaurants, just a tap away. Fresh ingredients, hot delivery, happy customers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Partner with Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Food Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Food Categories</h4>
            <ul className="space-y-2">
              <li><a href="#appetizers" className="text-gray-400 hover:text-orange-400 transition-colors">Appetizers</a></li>
              <li><a href="#mains" className="text-gray-400 hover:text-orange-400 transition-colors">Main Course</a></li>
              <li><a href="#desserts" className="text-gray-400 hover:text-orange-400 transition-colors">Desserts</a></li>
              <li><a href="#beverages" className="text-gray-400 hover:text-orange-400 transition-colors">Beverages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-orange-500 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-orange-500 mr-3" />
                <span className="text-gray-400">support@zappin.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">123 Food Street, Flavor City, FC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zappin. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;