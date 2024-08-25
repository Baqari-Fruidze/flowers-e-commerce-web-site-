export interface TsingleCategory {
  name: string;
  price: number;
  category: {
    name: string;
    id: number;
    bg_picture: string;
  };
  description: string;
  inStock: number;
  src: string;
}
