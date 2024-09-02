interface Product {
  image: string;
  name: string;
  price: number;
  category: {
    id: number;
    image: string;
    name: string;
  };
  description: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

export interface TOrder {
  recipientsName: string;
  recipientsPhoneNumber: string;
  dateOfDelivery: string;
  deliveryTime: string;
  city: string;
  street: string;
  houseNumber: string;
  total: number;
  items: OrderItem[];
}
