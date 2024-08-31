interface Category {
  id: number;
  name: string;
  bg_picture: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  inStock: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  id: number;
}

export interface TCartType {
  id: number;
  user: number;
  items: CartItem[];
}
