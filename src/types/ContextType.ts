import { Tcategory } from "./Category";
import { Tcategories, Tproducts } from "./AddCategories";
import { Tsubscriptions } from "./AddCategories";
import { Tusers } from "./AddCategories";
import { TsingleCategory } from "./SingleCategoryType";
import { TFaqs } from "./AddCategories";

export interface TcontextType {
  burgerToShow: boolean;
  setBurgerToShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<Tcategory[]>>;
  category: Tcategory[];
  adminCategories: boolean;
  setAdminCategories: React.Dispatch<React.SetStateAction<boolean>>;
  adminFlowers: boolean;
  setAdminFlowers: React.Dispatch<React.SetStateAction<boolean>>;
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
  products: Tproducts[];
  setProducts: React.Dispatch<React.SetStateAction<Tproducts[]>>;
  users: Tusers[];
  setUsers: React.Dispatch<React.SetStateAction<Tusers[]>>;
  setRecoverUsername: React.Dispatch<React.SetStateAction<string>>;
  recoverUsername: string;
  setSingleCategoryState: React.Dispatch<
    React.SetStateAction<TsingleCategory[]>
  >;
  singleCategoryState: TsingleCategory[];
  setSingleProductState: React.Dispatch<React.SetStateAction<TsingleCategory>>;
  singlePorudctState: TsingleCategory;
}
