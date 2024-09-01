export interface Tcategories {
  id: number;
  name: string;
  image: "";
}

export interface TFaqs {
  id: number;
  question: string;
  answer: string;
}


export interface Tsubscriptions {
  id: number;
  image: string;
  category: string;
  price: number;
  delivery: string;
  theBest: string;
  firstDelivery: string;
  firstDelivery2: string;
  saveUp: number;
}

export interface Tproducts {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: number;
  image: string;
  category: {
    name: string;
    id: number;
    bg_picture: string;
  };
}

export interface TflowersCategory {
  name: string;
  id: number;
  bg_picture: string;
}

export type Tusers = {
  id: number;
  review: string;
  username: string;
  email: string;
  last_name: string;
  first_name: string;
  password: string;
  profilePicture: string;
  phoneNumber: string;
  is_superuser: boolean;
  // orders: {
  //   RecipientsName: string;
  //   Recipients_Phone_number: string;
  //   DataofDelivery: string;
  //   Delivery_Time: string;
  //   street: string;
  //   houseNumber: string;
  //   total: number;
  //   items: {
  //     product: {
  //       image: string;
  //       name: string;
  //       price: number;
  //       category: string;
  //       description: string;
  //     };
  //   }[];
  // }[];
};
