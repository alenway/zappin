import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Leaf, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    navigate('/cart');
  };

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
          <h1 className="text-lg font-semibold">Product Details</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.badge}
          </span>
        )}
        {product.isVeg !== undefined && (
          <div className={`absolute top-4 right-4 w-8 h-8 border-2 flex items-center justify-center bg-white ${
            product.isVeg ? 'border-green-500' : 'border-red-500'
          }`}>
            <div className={`w-3 h-3 rounded-full ${product.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-black mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>
        </div>

        {/* Rating and Time */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>
          {product.preparationTime && (
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{product.preparationTime}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center mb-6">
          <span className="text-3xl font-bold text-black">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through ml-3">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Ingredients */}
        {product.ingredients && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Spice Level */}
        {product.spiceLevel && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Spice Level</h3>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.spiceLevel === 'mild' ? 'bg-green-100 text-green-800' :
                product.spiceLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {product.spiceLevel.charAt(0).toUpperCase() + product.spiceLevel.slice(1)}
              </span>
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Quantity</h3>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add {quantity} to Cart - ₹{product.price * quantity}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;