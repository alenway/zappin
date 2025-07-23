import React from 'react';
import { ArrowRight, Clock, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Delicious Food
            <span className="block text-orange-400">Delivered Fast</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Craving something delicious? Order from your favorite restaurants and get fresh, hot food delivered to your doorstep in minutes.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-5 h-5 text-orange-400 mr-1" />
                <span className="text-2xl font-bold">30</span>
              </div>
              <span className="text-sm text-gray-300">Min Delivery</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Star className="w-5 h-5 text-orange-400 mr-1" />
                <span className="text-2xl font-bold">4.8</span>
              </div>
              <span className="text-sm text-gray-300">Rating</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">500+</div>
              <span className="text-sm text-gray-300">Restaurants</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Order Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;