import { Tcategory } from "./Category";
export interface TcontextType {
  burgerToShow: boolean;
  setBurgerToShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<Tcategory>>;
  category: Tcategory;
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
}
