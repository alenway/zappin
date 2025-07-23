import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChefHat, Coffee, IceCream, Utensils } from 'lucide-react';

const CategoriesPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'appetizers',
      name: 'Appetizers',
      icon: ChefHat,
      description: 'Start your meal right',
      color: 'bg-red-100 text-red-600',
      count: '12+ items'
    },
    {
      id: 'mains',
      name: 'Main Course',
      icon: Utensils,
      description: 'Hearty and satisfying',
      color: 'bg-orange-100 text-orange-600',
      count: '25+ items'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: IceCream,
      description: 'Sweet endings',
      color: 'bg-pink-100 text-pink-600',
      count: '15+ items'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: Coffee,
      description: 'Hot and cold drinks',
      color: 'bg-blue-100 text-blue-600',
      count: '20+ items'
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
          <h1 className="text-lg font-semibold">Categories</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/#${category.id}`)}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-black mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                <span className="text-orange-500 text-xs font-medium">{category.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;