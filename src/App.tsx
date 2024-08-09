import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { TcontextType } from "./types/ContextType";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCategory from "./pages/AllCategory"
import Home from "./pages/Home";


import { useMediaQuery } from "@uidotdev/usehooks";
import LargeHeader from "./components/LargeHeader";
export const Context = createContext<TcontextType>({
  burgerToShow: false,
  setBurgerToShow: () => {},
test: false,
  setTest: () => {}})


function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [burgerToShow, setBurgerToShow] = useState(false);

  return (
    <Context.Provider value={{ burgerToShow, setBurgerToShow }}>
      <BrowserRouter>

        {isSmallDevice ? <Header /> : <LargeHeader />}
        <Routes>
          <Route path="/" element={<Home />} />

     
        <Header />
        
        <Routes>
          <Route path="/" 
                 element={<Home />
                } 
              />all-categories-products

          <Route path="/all-categories-products" 
                 element={<AllCategory />
                } 
              />

        </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
