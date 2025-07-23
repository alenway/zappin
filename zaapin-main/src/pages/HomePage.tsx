import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import { appetizerProducts, mainCourseProducts, dessertProducts, beverageProducts } from '../data/products';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Hero />
      
      <CategorySection
        id="appetizers"
        title="Appetizers"
        description="Start your meal with our delicious appetizers and starters."
        products={appetizerProducts}
        bgColor="bg-white"
      />
      
      <CategorySection
        id="mains"
        title="Main Course"
        description="Satisfy your hunger with our hearty and flavorful main dishes."
        products={mainCourseProducts}
        bgColor="bg-gray-50"
      />
      
      <CategorySection
        id="desserts"
        title="Desserts"
        description="End your meal on a sweet note with our decadent desserts."
        products={dessertProducts}
        bgColor="bg-white"
      />
      
      <CategorySection
        id="beverages"
        title="Beverages"
        description="Refresh yourself with our selection of hot and cold beverages."
        products={beverageProducts}
        bgColor="bg-gray-50"
      />
    </div>
  );
};

export default HomePage;