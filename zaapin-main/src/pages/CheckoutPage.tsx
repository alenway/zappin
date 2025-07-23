import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, CreditCard, Wallet, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = 49;
  const tax = Math.round(state.total * 0.05);
  const finalTotal = state.total + deliveryFee + tax;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-4">Your delicious food will be delivered in 30-45 minutes</p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-lg font-semibold">Checkout</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Delivery Address */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-black flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-500" />
              Delivery Address
            </h3>
            <button className="text-orange-500 text-sm font-medium">Change</button>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">Home</p>
            <p className="text-sm">123 Main Street, Downtown</p>
            <p className="text-sm">New York, NY 10001</p>
          </div>
        </div>

        {/* Delivery Time */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-black flex items-center mb-3">
            <Clock className="w-5 h-5 mr-2 text-orange-500" />
            Delivery Time
          </h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="delivery" className="mr-3" defaultChecked />
              <span className="text-gray-700">Standard Delivery (30-45 min)</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="delivery" className="mr-3" />
              <span className="text-gray-700">Express Delivery (15-25 min) +₹20</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-black mb-3">Order Summary</h3>
          <div className="space-y-2 mb-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span className="text-gray-700">{item.name} x {item.quantity}</span>
                <span className="font-semibold">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{state.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-black mb-4">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                name="payment" 
                value="card"
                checked={selectedPayment === 'card'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="mr-3" 
              />
              <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700">Credit/Debit Card</span>
            </label>
            <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                name="payment" 
                value="wallet"
                checked={selectedPayment === 'wallet'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="mr-3" 
              />
              <Wallet className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700">Digital Wallet</span>
            </label>
            <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                name="payment" 
                value="cod"
                checked={selectedPayment === 'cod'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="mr-3" 
              />
              <Banknote className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <button 
          onClick={handlePlaceOrder}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Place Order - ₹{finalTotal}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;