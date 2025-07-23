import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, CreditCard, Heart, HelpCircle, Settings, LogOut, Edit, Save, X } from 'lucide-react';

const AccountPage = () => {
  const navigate = useNavigate();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567'
  });
  const [address, setAddress] = useState({
    type: 'Home',
    street: '123 Main Street',
    area: 'Downtown',
    city: 'New York',
    zipCode: '10001'
  });

  const menuItems = [
    { icon: CreditCard, label: 'Payment Methods', description: 'Manage payment options' },
    { icon: Heart, label: 'Favorites', description: 'Your favorite restaurants and dishes' },
    { icon: HelpCircle, label: 'Help & Support', description: 'Get help and contact support', action: () => navigate('/help') },
    { icon: Settings, label: 'Settings', description: 'App preferences and notifications' },
  ];

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    // Here you would typically save to backend
  };

  const handleSaveAddress = () => {
    setIsEditingAddress(false);
    // Here you would typically save to backend
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
          <h1 className="text-lg font-semibold">Account</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-black">Profile Information</h2>
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
          >
            {isEditingProfile ? <X className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-orange-500" />
          </div>
          <div className="flex-1">
            {isEditingProfile ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Phone Number"
                />
                <button
                  onClick={handleSaveProfile}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-black">{profile.name}</h3>
                <p className="text-gray-600">{profile.email}</p>
                <p className="text-sm text-gray-500">{profile.phone}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-black">Delivery Address</h2>
          <button
            onClick={() => setIsEditingAddress(!isEditingAddress)}
            className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
          >
            {isEditingAddress ? <X className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mt-1">
            <MapPin className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1">
            {isEditingAddress ? (
              <div className="space-y-3">
                <select
                  value={address.type}
                  onChange={(e) => setAddress({...address, type: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => setAddress({...address, street: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Street Address"
                />
                <input
                  type="text"
                  value={address.area}
                  onChange={(e) => setAddress({...address, area: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Area/Locality"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) => setAddress({...address, city: e.target.value})}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    value={address.zipCode}
                    onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="ZIP Code"
                  />
                </div>
                <button
                  onClick={handleSaveAddress}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Address
                </button>
              </div>
            ) : (
              <div>
                <p className="font-medium text-black">{address.type}</p>
                <p className="text-sm text-gray-600">{address.street}</p>
                <p className="text-sm text-gray-600">{address.area}</p>
                <p className="text-sm text-gray-600">{address.city}, {address.zipCode}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Order History */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-black mb-3">Recent Orders</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-black">Chicken Biryani + 2 items</p>
                <p className="text-sm text-gray-600">Yesterday, 7:30 PM</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-black">₹649</p>
                <p className="text-sm text-green-600">Delivered</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-black">Margherita Pizza + 1 item</p>
                <p className="text-sm text-gray-600">Dec 28, 8:15 PM</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-black">₹498</p>
                <p className="text-sm text-green-600">Delivered</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-3 text-orange-500 font-medium text-sm">View All Orders</button>
        </div>

        {/* Logout Button */}
        <button className="w-full flex items-center space-x-4 p-4 hover:bg-red-50 rounded-lg transition-colors text-left mt-6 border-t border-gray-200">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-red-600">Logout</h3>
            <p className="text-sm text-gray-600">Sign out of your account</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccountPage;