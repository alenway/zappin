export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  category: string;
  ingredients?: string[];
  preparationTime?: string;
  isVeg?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
}