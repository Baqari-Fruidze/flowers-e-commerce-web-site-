import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import AboutUs from "./pages/AboutUs";
import SingleProduct from "./pages/SingleProduct";
import Subscribe from "./pages/Subscribe";
import AdminPanel from "./pages/AdminPanel";
import Restore from "./pages/Restore";
import {
  TFaqs,
  Tusers,
  Tsubscriptions,
  Tcategories,
} from "./types/AddCategories";
import Checkout from "./pages/Checkout";
import MyAddress from "./components/MyProlile/MyAddress";
import MyLikes from "./components/MyProlile/MyLikes";
import MyOrder from "./components/MyProlile/MyOrder";
import MySetting from "./components/MyProlile/MySetting";
import ScrollToTop from "./units/SqrollToTop";
import Search from "./pages/Search";

export const Context = createContext<TcontextType>({
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
  adminReview: false,
  setAdminReview: () => {},
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
  tokenChecker: false,
  setTockenChecker: () => {},
  isMyProfile: false,
  setIsMyProfile: () => {},
  isAcount: false,
  setIsAcount: () => {},
  quantity: 0,
  setQuantity: () => {},
});

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [isAcount, setIsAcount] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [recoverUsername, setRecoverUsername] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [adminCategories, setAdminCategories] = useState(false);
  const [adminProducts, setAdminProducts] = useState(false);
  const [adminUsers, setAdminUsers] = useState(false);
  const [adminSubscriptions, setAdminSubscriptions] = useState(false);
  const [adminFaq, setAdminFaq] = useState(false);
  const [adminReview, setAdminReview] = useState(false)
  const [tokenChecker, setTockenChecker] = useState(false);
  const [quantity, setQuantity] = useState(1);
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
        adminReview,
        setAdminReview,
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
        <ScrollToTop />
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
          <Route path="/search" element={<Search />} />
        </Routes>
        <FooterChanger />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
