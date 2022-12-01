import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Item from "./pages/Item";
import Cart from "./components/Cart";
import CartPage from "./pages/CartPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Cart />
        <Routes>
          <Route element={<Dashboard />} path={"/"} />
          <Route element={<CartPage />} path={"/cart"} />
          <Route element={<Item />} path={"/product/:id"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
