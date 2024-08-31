import { Tcategories } from "./AddCategories";
import { Tsubscriptions } from "./AddCategories";
import { Tusers } from "./AddCategories";
import { TFaqs } from "./AddCategories";

export interface TcontextType {
  isAcount: boolean;
  setIsAcount: React.Dispatch<React.SetStateAction<boolean>>;
  isMyProfile: boolean;
  setIsMyProfile: React.Dispatch<React.SetStateAction<boolean>>;
  adminCategories: boolean;
  setAdminCategories: React.Dispatch<React.SetStateAction<boolean>>;
  adminProducts: boolean;
  setAdminProducts: React.Dispatch<React.SetStateAction<boolean>>;
  adminUsers: boolean;
  setAdminUsers: React.Dispatch<React.SetStateAction<boolean>>;
  adminSubscriptions: boolean;
  setAdminSubscriptions: React.Dispatch<React.SetStateAction<boolean>>;
  adminFaq: boolean;
  setAdminFaq: React.Dispatch<React.SetStateAction<boolean>>;
  subscribe: boolean;
  setSubscribe: React.Dispatch<React.SetStateAction<boolean>>;
  setCartshow: React.Dispatch<React.SetStateAction<boolean>>;
  cartshow: boolean;
  categories: Tcategories[];
  setCategories: React.Dispatch<React.SetStateAction<Tcategories[]>>;
  faqs: TFaqs[];
  setFaqs: React.Dispatch<React.SetStateAction<TFaqs[]>>;
  subscriptions: Tsubscriptions[];
  setSubscriptions: React.Dispatch<React.SetStateAction<Tsubscriptions[]>>;
  users: Tusers;
  setUsers: React.Dispatch<React.SetStateAction<Tusers>>;
  setRecoverUsername: React.Dispatch<React.SetStateAction<string>>;
  recoverUsername: string;
  tokenChecker: boolean;
  setTockenChecker: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
