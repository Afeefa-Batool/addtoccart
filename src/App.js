import React from "react";
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <>
      <CartProvider />
      <Home />
      <Cart />
    </>
  );
}

export default App;
