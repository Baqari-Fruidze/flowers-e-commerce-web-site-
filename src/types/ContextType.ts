import { Tcategory } from "./Category";
<<<<<<< HEAD
import { TaddCategories} from "./AddCategories"
import { TaddFlowers } from "./AddFlowers";
=======
import { TaddCategories } from "./AddCategories";
import { TaddFaq } from "./AddCategories";
import { TaddSubscriptions } from "./AddCategories";
import { TaddFlowers } from "./AddCategories";
import { TflowersCategory } from "./AddCategories";
import { TaddUsers } from "./AddCategories";
>>>>>>> 8766afb9de6625b50311e22eef77a14711e4cf88

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
<<<<<<< HEAD

  addCategories: TaddCategories;
  setAddCategories: React.Dispatch<React.SetStateAction<TaddCategories>>; 
  addFlowers: TaddFlowers;
  setAddFlowers: React.Dispatch<React.SetStateAction<TaddFlowers>>;
=======
  setCartshow: React.Dispatch<React.SetStateAction<boolean>>;
  cartshow: boolean;
  addCategories: TaddCategories;
  setAddCategories: React.Dispatch<React.SetStateAction<TaddCategories>>;
  addFaq: TaddFaq;
  setAddFaq: React.Dispatch<React.SetStateAction<TaddFaq>>;
  addSubscriptions: TaddSubscriptions;
  setAddSubscriptions: React.Dispatch<React.SetStateAction<TaddSubscriptions>>;
  addFlowers: TaddFlowers;
  setAddFlowers: React.Dispatch<React.SetStateAction<TaddFlowers>>;
  flowersCategory: TflowersCategory;
  setFlowersCategory: React.Dispatch<React.SetStateAction<TflowersCategory>>;
  addUsers: TaddUsers;
  setAddUsers: React.Dispatch<React.SetStateAction<TaddUsers>>;
>>>>>>> 8766afb9de6625b50311e22eef77a14711e4cf88
}
