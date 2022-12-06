import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Store } from "./pages";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Store addItemToCart={addItemToCart} />} />
          <Route path="/cart" element={<div>shopping card</div>} />
        </Routes>
      </div>
    </Router>
  );
}
