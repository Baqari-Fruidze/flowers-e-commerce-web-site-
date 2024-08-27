import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createContext, SetStateAction, useState } from "react";

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

import { TFaqs, Tproducts, Tusers, Tsubscriptions, Tcategories } from "./types/AddCategories";


export const Context = createContext<TcontextType>({
  burgerToShow: false,
  setBurgerToShow: () => { },
  category: [
    {
      id: 1,
      name: "",
      image: "",
    },
  ],
  setCategory: () => { },

  adminCategories: false,
  setAdminCategories: () => { },
  adminFlowers: false,
  setAdminFlowers: () => { },
  adminUsers: false,
  setAdminUsers: () => { },
  adminSubscriptions: false,
  setAdminSubscriptions: () => { },
  adminFaq: false,
  setAdminFaq: () => { },

  subscribe: false,
  setSubscribe: () => { },
  cartshow: false,

  setCartshow: () => { },
  categories: [{ id: 1, name: "", image: "" }],
  setCategories: () => { },

  faqs: [{ id: 1, question: "", answer: "" }],
  setFaqs: () => { },

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
      saveUp: 0
    }
  ],
  setSubscriptions: () => { },

  products: [
    {
      name: "",
      price: 0,
      description: "",
      inStock: 0,
      src: "",
      category: { name: "", id: 1, bg_picture: "" },
    }
  ],
  setProducts: () => { },

  users: [{
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
  }],

  setUsers: () => { },


  recoverUsername: "",
  setRecoverUsername: () => { },
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
  dataToMap: [
    {
      id: 1,
      name: "",
      image: "",
    },
  ],
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
  const [categories, setCategories] = useState
  <Tcategories[]>
  ([{
    id: 1,
    name: "",
    image: "",

  }]);

  const [faqs, setFaqs] = useState<
  TFaqs[]
  >([{
    id: 1,
    question: "",
    answer: ""
}])

  const [products, setProducts] = useState<
  Tproducts[]
  >
    name: "",
    price: 0,
    description: "",
    inStock: 0,
    src: "",
    category: {
      name: "",

      id: 0,
      image: "",

    },
  }]);

  const [subscriptions, setSubscriptions] = useState<
  Tsubscriptions[]
  >([{
    id: 1,
    image: "",
    category: "",
    price: 0,
    delivery: "",
    theBest: "",
    firstDelivery: "",
    firstDelivery2: "",
    saveUp: 0,
  }]);

  const [users, setUsers] = useState<
  Tusers[]
  >([{
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

  }]);;


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
        categories,
        setCategories,
        faqs,
        setFaqs,
        subscriptions,
        setSubscriptions,
        products,
        setProducts,
        users,
        setUsers,
        recoverUsername,
        setRecoverUsername,
        singleCategoryState,
        setSingleCategoryState,
        setSingleProductState,
        singlePorudctState,
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
