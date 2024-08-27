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
  src: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export interface TCartType {
  id: number;
  user: number;
  items: CartItem[];
}
