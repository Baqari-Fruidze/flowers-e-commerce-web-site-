export interface TsingleCategory {
  id: number;
  name: string;
  price: number;
  category: {
    name: string;
    id: number;
    image: string;
  };
  description: string;
  inStock: number;
  image: string;
}
