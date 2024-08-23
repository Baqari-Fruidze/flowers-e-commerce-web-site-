export interface TaddCategories {
  id: number;
  name: string;
  image: string;
}
export interface TaddFaq{
    question: string,
    answer: string,
}
export interface TaddSubscriptions {
  image: string;
  category: string;
  price: number;
  delivery: string;
  theBest: string;
  firstDelivery: string;
  firstDelivery2: string;
  saveUp: number;
}

export interface TaddFlowers {
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

export interface TflowersCategory {
  name: string;
  id: number;
  bg_picture: string;
}

export type TaddUsers = {
  review: string;
  username: string;
  email: string;
  last_name: string;
  first_name: string;
  password: string;
  profilePicture: string;
  phoneNumber: string;
  is_superuser: boolean;
  orders: {
    RecipientsName: string;
    Recipients_Phone_number: string;
    DataofDelivery: string;
    Delivery_Time: string;
    street: string;
    houseNumber: string;
    total: number;
    items: {
      product: {
        image: string;
        name: string;
        price: number;
        category: string;
        description: string;
      };
    }[];
  }[];
};
