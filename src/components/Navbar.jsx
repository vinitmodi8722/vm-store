import React, { useState } from "react";
import logo from "../components/image/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchCircle } from "react-icons/io5";
import Darkmode from "./Darkmode";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "../redux/slices/cartSlice";
import productItem from "./productItem";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Girl's watch",
    link: "/Girlsection",
  },
  {
    id: 3,
    name: "Man's watch",
    link: "/Mansection",
  },
];

const Navbar = () => {
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredProducts = productItem.filter((product) =>
      product.itemName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);


    if (query.trim() === "") {
      setSearchQuery("");
    }
  };

  function handleSearchById(id) {
    navigate("/searchbyid/" + id);
    setSearchQuery(""); 
  }

  return (
    <>
      <div className="navv">
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
          <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center">
              <div>
                <a
                  href="/"
                  className="font-bold text-2xl sm:text-3xl flex gap-2"
                >
                  <img src={logo} alt="logo" className="w-10" />
                  store
                </a>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="relative group hover">
                  <input
                    type="text"
                    placeholder="Search any item"
                    className="w-[200px] sm:w-[200px] dark:text-black group-hover:w-[230px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-blue-700"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                  <IoSearchCircle className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 h-14 w-9 -mr-3" />
                  <div className="search-container dark:text-black absolute">
                    {searchQuery.trim() !== "" && (
                      <div className="search-results bg-yellow-200">
                        <h2>Search Results:</h2>
                        {searchResults.length === 0 ? (
                          <p>No items available</p>
                        ) : (
                          <ul>
                            {searchResults.map((product) => (
                              <li
                                key={product.id}
                                onClick={() => handleSearchById(product.id)}
                              >
                                {product.itemName}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  to="/Cart"
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group relative" // Added relative class
                >
                  <span className="group-hover:block hidden transition-all duration-200">
                    Order
                  </span>
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  <div className="totalcart rounded-full bg-red-800 text-yellow-300">
                    {totalQuantity}
                  </div>
                </Link>
                <Darkmode />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ul className="flex items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
