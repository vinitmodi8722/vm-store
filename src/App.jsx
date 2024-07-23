import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Girlsection from "./components/Girlsection";
import Mansection from "./components/Mansection";
import Home from "./components/Home";
import "../src/App.css";
import Searchbyid from "./components/searchbyid";
import Success from "./components/Success.jsx";
import Cancel from "./components/Cancel.jsx";

const App = () => {
  const [cart, setcart] = useState([]);

  const handleClick = (product) => {
    console.log(product);
    setcart([...cart, product]);
  };

  return (
    <>
      <Navbar count={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart cartItems={cart} />} />
        <Route
          path="/Mansection"
          element={<Mansection handleClick={handleClick} />}
        />
        <Route
          path="/Girlsection"
          element={<Girlsection handleClick={handleClick} />}
        />
        <Route path="/searchbyid/:id" element={<Searchbyid />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Cancel" element={<Cancel/>} />
      </Routes>
    </>
  );
};

export default App;
