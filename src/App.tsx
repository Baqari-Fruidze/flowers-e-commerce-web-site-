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
import Cart from "./components/Cart";

export const Context = createContext<TcontextType>({
  burgerToShow: false,
  adminCategories: false,
  adminFlowers: false,
  adminUsers: false,
  adminSubscriptions: false,
  adminFaq: false,
  setBurgerToShow: () => {},
  setCategory: () => {},
  subscribe: false,
  setSubscribe: () => {},
  setAdminCategories: () => {},
  setAdminFlowers: () => {},
  setAdminUsers: () => {},
  setAdminSubscriptions: () => {},
  setAdminFaq: () => {},
  category: { id: 1, name: "", image: "" },
  cartshow: false,
  setCartshow: () => {},
});
function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [burgerToShow, setBurgerToShow] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [adminCategories, setAdminCategories] = useState(false);
  const [adminFlowers, setAdminFlowers] = useState(false);
  const [adminUsers, setAdminUsers] = useState(false);
  const [adminSubscriptions, setAdminSubscriptions] = useState(false);
  const [adminFaq, setAdminFaq] = useState(false);
  const [category, setCategory] = useState({
    id: 1,
    name: "",
    image: "",
  });
  const [cartshow, setCartshow] = useState(false);

  const FooterChanger = () => {
    const location = useLocation();
    return location.pathname === "/login" ||
      location.pathname === "/signUp" ||
      location.pathname === "/admin-panel" ? null : (
      <Footer />
    );
  };
  const HeaderChanger = () => {
    const location = useLocation();
    return location.pathname === "/login" ||
      location.pathname === "/signUp" ||
      location.pathname === "/admin-panel" ? null : isSmallDevice ? (
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
        adminFlowers,
        setAdminFlowers,
        adminUsers,
        setAdminUsers,
        adminSubscriptions,
        setAdminSubscriptions,
        adminFaq,
        setAdminFaq,
        cartshow,
        setCartshow,
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
          <Route path="admin-panel" element={<AdminPanel />} />
        </Routes>
        <FooterChanger />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
