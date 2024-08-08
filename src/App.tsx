import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { TcontextType } from "./types/ContextType";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCategory from "./pages/AllCategory"

const Context = createContext<TcontextType>({
  test: false,
  setTest: () => {},
});

function App() {
  const [test, setTest] = useState<boolean>(false);
  return (
    <Context.Provider value={{ test, setTest }}>
      <BrowserRouter>
     
        <Header />
        
        <Routes>
          <Route path="/" 
                 element={<Home />
                } 
              />

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
