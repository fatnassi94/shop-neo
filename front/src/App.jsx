import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MenuItems from "./components/MenuItems.jsx";
import Item from "./components/Item.jsx";
import Offer from "./components/Offer.jsx";
import Login from "./components/Login.jsx";
import Home from "./pages/Layout.jsx";
import Cart from "./pages/Cart.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import Product from "./pages/Product.jsx";
import Verify from "./pages/Verify.jsx";
import ShopProvider from "./context/ShopContext.jsx";
const App = () => {
  return (
    <ShopProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact>
          <Route path="product/:id" element={<Product />} />
          <Route index element={<MenuItems />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="offer/:id" element={<Offer />} />
          <Route path="myorders" element={<MyOrders />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/verify/:token" element={<Verify />} />
      </Routes>
    </ShopProvider>
  );
};

export default App;
