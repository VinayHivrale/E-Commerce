import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Shopingcart from "./pages/Shopingcart";
import Navbar from "./components/Navbar/Navbar";
// import ProductListing from './components/productListing';
import Shopping from "./pages/Shopping";
import Home from "./pages/Home";
import Profile from "./components/ProfileInformation/Profile";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";
import Checkout from "./components/Checkout/Checkout";
import Address from "./components/Address/Address";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderPage from "./pages/OrderPage";
import OrderDetail from "./components/OrderDetails/OrderDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:levelOne/:levelTwo/:levelThree" element={<Shopping />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/api/products/id/:id" element={<ProductDetail />} />
          <Route path="/address-edit" element={<Address />} />
          <Route path="/profile-Edit" element={<ProfileEdit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Shopingcart />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products" element={<Shopping />} />
          <Route path="/order-Detail" element={<OrderDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
