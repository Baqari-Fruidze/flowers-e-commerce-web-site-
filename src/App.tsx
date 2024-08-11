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
export const Context = createContext<TcontextType>({
  burgerToShow: false,
  setBurgerToShow: () => {},
});

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [burgerToShow, setBurgerToShow] = useState(false);

  return (
    <Context.Provider value={{ burgerToShow, setBurgerToShow }}>
      <BrowserRouter>
        {isSmallDevice ? <Header /> : <LargeHeader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-categories-products" element={<AllCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/singleCategory" element={<SingleCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
