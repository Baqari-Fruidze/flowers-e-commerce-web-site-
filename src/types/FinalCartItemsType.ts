// Type for the Category
type Category = {
  id: number;
  name: string;
  bg_picture: string;
};

// Type for the Product
type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  inStock: number;
  src: string;
};

// Type for the CartItem
type CartItem = {
  product: Product;
  quantity: number;
};

// Type for the overall structure
export type Cart = {
  id: number;
  user: number;
  items: CartItem[];
};
