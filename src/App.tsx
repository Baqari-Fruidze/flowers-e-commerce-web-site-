import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { TcontextType } from "./types/ContextType";
import Header from "./components/Header";
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
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
