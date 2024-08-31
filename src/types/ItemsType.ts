interface Category {
  id: number;
  name: string;
  bg_picture: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  inStock: number;
  src: string;
}
