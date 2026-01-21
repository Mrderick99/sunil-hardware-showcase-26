export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 
  | 'electrical'
  | 'plumbing'
  | 'construction'
  | 'paint'
  | 'fasteners'
  | 'safety';
