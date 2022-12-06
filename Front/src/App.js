import { Store } from "./pages";
import { useEffect, useState } from "react";
import storeService from "./services/storeService";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    storeService
      .getItems()
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const addItemToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Store addItemToCart={addItemToCart} />} />
        <Route path="/cart" element={<div>shopping card</div>} />
      </Routes>
    </Router>
  );
}
