import { Tcategory } from "./Category";
export interface TcontextType {
  burgerToShow: boolean;
  setBurgerToShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<Tcategory>>;
  category: Tcategory;
}
