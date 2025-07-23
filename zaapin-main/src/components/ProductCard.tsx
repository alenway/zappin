import React from 'react';
import { Star, ShoppingCart, Clock, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = (product) => {
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    badge,
    preparationTime,
    isVeg
  } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            {badge}
          </span>
        )}
        {isVeg !== undefined && (
          <div className={`absolute top-3 right-3 w-6 h-6 border-2 flex items-center justify-center ${
            isVeg ? 'border-green-500' : 'border-red-500'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
        )}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 shadow-md transition-colors opacity-0 group-hover:opacity-100"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-black mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({reviews})</span>
          </div>
          {preparationTime && (
            <div className="flex items-center text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span className="text-xs">{preparationTime}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;