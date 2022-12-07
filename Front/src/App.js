import { Store, Cart } from "./pages";
import { useEffect, useState } from "react";
import storeService from "./services/storeService";
import cartService from "./services/cartService";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    storeService
      .getItems()
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const addItemToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const addOrderToDb = (order) => {
    cartService.addOrder(order);
    alert("The order has been successfully added to DB");
    setCartItems([]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Store addItemToCart={addItemToCart} items={items} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} addOrderToDb={addOrderToDb} />}
        />
      </Routes>
    </Router>
  );
}
