import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { TcontextType } from "./types/ContextType";
import Header from "./components/Header";
import { useMediaQuery } from "@uidotdev/usehooks";
import LargeHeader from "./components/LargeHeader";
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
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
