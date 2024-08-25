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
  category: [
    {
      id: 1,
      name: "",
      image: "",
    },
  ],
  cartshow: false,
  setCartshow: () => {},
  addCategories: { id: 1, name: "", image: "" },
  setAddCategories: () => {},
  addFaq: { question: "", answer: "" },
  setAddFaq: () => {},
  addSubscriptions: {
    image: "",
    category: "",
    price: 0,
    delivery: "",
    theBest: "",
    firstDelivery: "",
    firstDelivery2: "",
    saveUp: 0,
  },
  setAddSubscriptions: () => {},
  addFlowers: {
    name: "",
    price: 0,
    category: { name: "", id: 1, bg_picture: "" },
    description: "",
    inStock: 0,
    src: "",
  },
  setAddFlowers: () => {},
  flowersCategory: { name: "", id: 1, bg_picture: "" },
  setFlowersCategory: () => {},
  addUsers: {
    review: "",
    username: "",
    email: "",
    last_name: "",
    first_name: "",
    password: "",
    profilePicture: "",
    phoneNumber: "",
    is_superuser: false,
    orders: [
      {
        RecipientsName: "",
        Recipients_Phone_number: "",
        DataofDelivery: "",
        Delivery_Time: "",
        street: "",
        houseNumber: "",
        total: 0,
        items: [
          {
            product: {
              image: "",
              name: "",
              price: 0,
              category: "",
              description: "",
            },
          },
        ],
      },
    ],
  },
  setAddUsers: () => {},
  recoverUsername: "",
  setRecoverUsername: () => {},
  singleCategoryState: [
    {
      name: "",
      price: 0,
      category: {
        name: "",
        id: 0,
        bg_picture: "",
      },
      description: "",
      inStock: 0,
      src: "",
    },
  ],
  setSingleCategoryState: () => {},
});

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [recoverUsername, setRecoverUsername] = useState("");
  const [burgerToShow, setBurgerToShow] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [adminCategories, setAdminCategories] = useState(false);
  const [adminFlowers, setAdminFlowers] = useState(false);
  const [adminUsers, setAdminUsers] = useState(false);
  const [adminSubscriptions, setAdminSubscriptions] = useState(false);
  const [adminFaq, setAdminFaq] = useState(false);
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
      name: "",
      price: 0,
      category: {
        name: "",
        id: 0,
        bg_picture: "",
      },
      description: "",
      inStock: 0,
      src: "",
    },
  ]);
  const [cartshow, setCartshow] = useState(false);
  const [addCategories, setAddCategories] = useState({
    id: 1,
    name: "",
    image: "",
  });

  const [addFaq, setAddFaq] = useState({
    question: "",
    answer: "",
  });

  const [flowersCategory, setFlowersCategory] = useState({
    name: "",
    id: 1,
    bg_picture: "",
  });

  const [addFlowers, setAddFlowers] = useState({
    name: "",
    price: 0,
    category: {
      name: "",
      id: 1,
      bg_picture: "",
    },
    description: "",
    inStock: 0,
    src: "",
  });

  const [addSubscriptions, setAddSubscriptions] = useState({
    image: "",
    category: "",
    price: 0,
    delivery: "",
    theBest: "",
    firstDelivery: "",
    firstDelivery2: "",
    saveUp: 0,
  });

  const [addUsers, setAddUsers] = useState({
    review: "",
    username: "",
    email: "",
    last_name: "",
    first_name: "",
    password: "",
    profilePicture: "",
    phoneNumber: "",
    is_superuser: false,
    orders: [
      {
        RecipientsName: "",
        Recipients_Phone_number: "",
        DataofDelivery: "",
        Delivery_Time: "",
        street: "",
        houseNumber: "",
        total: 0,
        items: [
          {
            product: {
              image: "",
              name: "",
              price: 0,
              category: "",
              description: "",
            },
          },
        ],
      },
    ],
  });

  const FooterChanger = () => {
    const location = useLocation();
    return location.pathname === "/login" ||
      location.pathname === "/signUp" ||
      location.pathname === "/admin-panel" ||
      location.pathname === "/restore" ? null : (
      <Footer />
    );
  };
  const HeaderChanger = () => {
    const location = useLocation();
    return location.pathname === "/login" ||
      location.pathname === "/signUp" ||
      location.pathname === "/admin-panel" ||
      location.pathname === "/restore" ? null : isSmallDevice ? (
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
        cartshow,
        setCartshow,
        adminFaq,
        setAdminFaq,
        addCategories,
        setAddCategories,
        addFaq,
        setAddFaq,
        addSubscriptions,
        setAddSubscriptions,
        addFlowers,
        setAddFlowers,
        flowersCategory,
        setFlowersCategory,
        addUsers,
        setAddUsers,
        recoverUsername,
        setRecoverUsername,
        singleCategoryState,
        setSingleCategoryState,
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
          <Route path="/restore" element={<Restore />} />
        </Routes>
        <FooterChanger />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
