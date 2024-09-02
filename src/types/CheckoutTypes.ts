export interface TcheckoutTypes {
  recipientName: string;
  recipientPhoneNumber: number;
  deliveryTime: string;
  dateOfDelivery: string;
  street: string;
  houseNumber: number;
  city: string;
  items?: TOrderItem[];
  total?: number;
}

interface TOrderItem {
  product_id: number;
  quantity: number;
}
