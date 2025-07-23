import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  bgColor?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  description,
  products,
  bgColor = 'bg-slate-50'
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All {title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;