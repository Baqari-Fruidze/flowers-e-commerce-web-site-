interface Product {
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
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
