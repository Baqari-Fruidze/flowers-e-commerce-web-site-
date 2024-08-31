import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { TcontextType } from "./types/ContextType";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCategory from "./pages/AllCategory";
import { useMediaQuery } from "@uidotdev/usehooks";
import LargeHeader from "./components/LargeHeader";
import SingleCategory from "./pages/SingleCategory";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import SingleProduct from "./pages/SingleProduct";
import Subscribe from "./pages/Subscribe";
import AdminPanel from "./pages/AdminPanel";
import Restore from "./pages/Restore";
import { Tcategory } from "./types/Category";
import { TsingleCategory } from "./types/SingleCategoryType";
import {
  TFaqs,
  Tusers,
  Tsubscriptions,
  Tcategories,
  Tproducts,
} from "./types/AddCategories";
import { TCartType } from "./types/CartType";
import Checkout from "./pages/Checkout";
import MyAddress from "./components/MyProlile/MyAddress";
import MyLikes from "./components/MyProlile/MyLikes";
import MyOrder from "./components/MyProlile/MyOrder";
import MySetting from "./components/MyProlile/MySetting";
export const Context = createContext<TcontextType>({
  burgerToShow: false,
  setBurgerToShow: () => {},
  category: [
    {
      id: 1,
      name: "",
      image: "",
    },
  ],
  setCategory: () => {},
  adminCategories: false,
  setAdminCategories: () => {},
  adminProducts: false,
  setAdminProducts: () => {},
  adminUsers: false,
  setAdminUsers: () => {},
  adminSubscriptions: false,
  setAdminSubscriptions: () => {},
  adminFaq: false,
  setAdminFaq: () => {},
  subscribe: false,
  setSubscribe: () => {},
  cartshow: false,
  setCartshow: () => {},
  categories: [{ id: 1, name: "", image: "" }],
  setCategories: () => {},
  faqs: [{ id: 1, question: "", answer: "" }],
  setFaqs: () => {},
  subscriptions: [
    {
      id: 1,
      image: "",
      category: "",
      price: 0,
      delivery: "",
      theBest: "",
      firstDelivery: "",
      firstDelivery2: "",
      saveUp: 0,
    },
  ],
  setSubscriptions: () => {},
  products: [
    {
      id: 0,
      name: "",
      price: 0,
      description: "",
      inStock: 0,
      image: "",
      category: { name: "", id: 1, bg_picture: "" },
    },
  ],
  setProducts: () => {},
  users: {
    id: 0,
    review: "",
    username: "",
    email: "",
    last_name: "",
    first_name: "",
    password: "",
    profilePicture: "",
    phoneNumber: "",
    is_superuser: false,
  },
  setUsers: () => {},
  recoverUsername: "",
  setRecoverUsername: () => {},
  singleCategoryState: [
    {
      id: 1,
      name: "",
      price: 0,
      category: {
        name: "",
        id: 0,
        image: "",
      },
      description: "",
      inStock: 0,
      image: "",
    },
  ],
  setSingleCategoryState: () => {},
  singlePorudctState: {
    id: 1,
    name: "",
    price: 0,
    category: {
      name: "",
      id: 0,
      image: "",
    },
    description: "",
    inStock: 0,
    image: "",
  },
  setSingleProductState: () => {},
  tokenChecker: false,
  setTockenChecker: () => {},
  isMyProfile: false,
  setIsMyProfile: () => {},
  isAcount: false,
  setIsAcount: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartItemsState: {
    id: 1,
    user: 1,
    items: [
      {
        product: {
          id: 1,
          name: "",
          price: 1,
          category: {
            name: "",
            id: 1,
            bg_picture: "",
          },
          description: "",
          inStock: 1,
          src: "",
        },
        quantity: 1,
      },
    ],
  },
  setCartItemsState: () => {},
});

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [isAcount, setIsAcount] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [recoverUsername, setRecoverUsername] = useState("");
  const [burgerToShow, setBurgerToShow] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [adminCategories, setAdminCategories] = useState(false);
  const [adminProducts, setAdminProducts] = useState(false);
  const [adminUsers, setAdminUsers] = useState(false);
  const [adminSubscriptions, setAdminSubscriptions] = useState(false);
  const [adminFaq, setAdminFaq] = useState(false);
  const [tokenChecker, setTockenChecker] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState<Tcategory[]>([
    {
      id: 1,
      name: "",
      image: "",
    },
  ]);
  const [singleCategoryState, setSingleCategoryState] = useState<
    TsingleCategory[]
  >([
    {
      id: 1,
      name: "",
      price: 0,
      category: {
        name: "",
        id: 0,
        image: "",
      },
      description: "",
      inStock: 0,
      image: "",
    },
  ]);
  const [cartshow, setCartshow] = useState(false);
  const [categories, setCategories] = useState<Tcategories[]>([
    {
      id: 1,
      name: "",
      image: "",
    },
  ]);
  const [faqs, setFaqs] = useState<TFaqs[]>([
    {
      id: 1,
      question: "",
      answer: "",
    },
  ]);
  const [subscriptions, setSubscriptions] = useState<Tsubscriptions[]>([
    {
      id: 1,
      image: "",
      category: "",
      price: 0,
      delivery: "",
      theBest: "",
      firstDelivery: "",
      firstDelivery2: "",
      saveUp: 0,
    },
  ]);
  const [products, setProducts] = useState<Tproducts[]>([
    {
      id: 0,
      name: "",
      price: 0,
      description: "",
      inStock: 0,
      image: "",
      category: { name: "", id: 1, bg_picture: "" },
    },
  ]);
  const [users, setUsers] = useState<Tusers>({
    id: 0,
    review: "",
    username: "",
    email: "",
    last_name: "",
    first_name: "",
    password: "",
    profilePicture: "",
    phoneNumber: "",
    is_superuser: false,
  });
  const [singlePorudctState, setSingleProductState] = useState<TsingleCategory>(
    {
      id: 1,
      name: "",
      price: 0,
      category: {
        name: "",
        id: 0,
        image: "",
      },
      description: "",
      inStock: 0,
      image: "",
    }
  );
  const FooterChanger = () => {
    const location = useLocation();
    return location.pathname === "/login" ||
      location.pathname === "/signUp" ||
      location.pathname === "/admin-panel" ||
      location.pathname === "/restore" ||
      location.pathname === "/checkout" ? null : (
      <Footer />
    );
  };
  const HeaderChanger = () => {
    const location = useLocation();
    return location.pathname === "/login" ||
      location.pathname === "/signUp" ||
      location.pathname === "/admin-panel" ||
      location.pathname === "/restore" ||
      location.pathname === "/checkout" ? null : isSmallDevice ? (
      <Header />
    ) : (
      <LargeHeader />
    );
  };

  return (
    <Context.Provider
      value={{
        subscribe,
        setSubscribe,
        burgerToShow,
        setBurgerToShow,
        category,
        setCategory,
        adminCategories,
        setAdminCategories,
        adminProducts,
        setAdminProducts,
        adminUsers,
        setAdminUsers,
        adminSubscriptions,
        setAdminSubscriptions,
        cartshow,
        setCartshow,
        adminFaq,
        setAdminFaq,
        categories,
        setCategories,
        faqs,
        setFaqs,
        subscriptions,
        setSubscriptions,
        users,
        setUsers,
        recoverUsername,
        setRecoverUsername,
        singleCategoryState,
        setSingleCategoryState,
        setSingleProductState,
        singlePorudctState,
        products,
        setProducts,
        tokenChecker,
        setTockenChecker,
        setQuantity,
        quantity,
        isMyProfile,
        setIsMyProfile,
        isAcount,
        setIsAcount,
      }}
    >
      <BrowserRouter>
        <HeaderChanger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/subscriptions" element={<Subscribe />} />
          <Route path="/all-categories-products" element={<AllCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/:singleCategory" element={<SingleCategory />} />
          <Route
            path="/:singleCategory/:singleProduct"
            element={<SingleProduct />}
          />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/restore" element={<Restore />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/My-address" element={<MyAddress />} />
          <Route path="/My-setting" element={<MySetting />} />
          <Route path="/My-likes" element={<MyLikes />} />
          <Route path="/My-order" element={<MyOrder />} />
        </Routes>
        <FooterChanger />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
