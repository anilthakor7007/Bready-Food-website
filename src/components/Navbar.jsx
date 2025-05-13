import { useState } from "react";
import React from "react";
import { FaAngleDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import LOGO from "../assets/images/logo-light.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const menuItems = [
    {
      title: "Homepage",
      to: "/",
    },
    { title: "About", to: "/about" },
    {
      title: "Product",
      to: "/product",
    },
    {
      title: "Pages",
      to: "/pages",
    },
    { title: "Gallery", to: "/gallery" },
    { title: "Blogs", to: "/blogs" },
    { title: "Contact", to: "/contact" },
  ];

  const cartItems = [
    {
      title: "Kingsman",
      img: "images/shopping-cart/1.png",
      qty: 12,
      total: 176,
    },
    { title: "Joseph", img: "images/shopping-cart/2.png", qty: 12, total: 176 },
    {
      title: "Todd Snyder",
      img: "images/shopping-cart/3.png",
      qty: 12,
      total: 176,
    },
  ];

  return (
    <header className="bg-white flex justify-between items-center ">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-14 mx-auto p-4 hover:border-b-indigo-500 ">
        {/* Left Menu */}
        <div className="flex space-x-16">
          {menuItems.slice(0, 4).map((item, index) => (
            <div key={index} className="relative group">
              <NavLink
               className={({ isActive }) =>
                `px-3 py-2 text-lg font-medium transition-colors duration-300 relative ${
                  isActive
                    ? 'text-gray-600 border-b-2 border-yellow-400'
                    : 'text-gray-700 hover:text-gray-600 before:content-[""] before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-yellow-500 before:transition-[width] before:duration-300 hover:before:w-full'
                }`}
                to={item.to}
              >
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <a href="index.html" className="flex-shrink-0">
          <img src={LOGO} alt="Logo" className="h-30" />
        </a>

        {/* Right Menu */}
        <div className="flex items-center space-x-16">
          {menuItems.slice(4).map((item, index) => (
          <NavLink
          key={index}
          className={({ isActive }) =>
           `px-3 py-2 text-lg font-medium transition-colors duration-300 relative ${
             isActive
               ? 'text-gray-600 border-b-2 border-yellow-400'
               : 'text-gray-700 hover:text-gray-600 before:content-[""] before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-yellow-500 before:transition-[width] before:duration-300 hover:before:w-full'
           }`}
           to={item.to}
         >
           {item.title}
         </NavLink>
          ))}
          <div className="flex items-center space-x-6 ">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaSearch />
            </a>
            <div className="relative">
              <button
                onClick={toggleCart}
                className="text-gray-700 hover:text-blue-600 flex items-center"
              >
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  20
                </span>
              </button>
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4">
                  <div className="max-h-64 overflow-y-auto">
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 py-2 border-b"
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-12 h-12"
                        />
                        <div>
                          <a
                            href="product-detail.html"
                            className="text-gray-700 hover:text-blue-600"
                          >
                            {item.title}
                          </a>
                          <p className="text-sm text-gray-500">
                            Quantity:{" "}
                            <span className="font-semibold">{item.qty}</span> |
                            Total: £{item.total}
                          </p>
                        </div>
                        <button className="text-gray-500 hover:text-red-600">
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-sm">
                      Number of items: <span className="font-semibold">36</span>
                    </p>
                    <p className="text-sm">
                      Item Total: <span className="font-semibold">£528.00</span>
                    </p>
                    <a
                      href="cart.html"
                      className="block mt-2 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                      Check out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden p-4">
        <div className="flex items-center justify-between min-w-100">
          <a href="index.html">
            <img src={LOGO} alt="Logo" className="h-10" />
          </a>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaSearch />
            </a>
            <button
              onClick={toggleCart}
              className="text-gray-700 hover:text-blue-600 relative"
            >
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                20
              </span>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="mt-4 space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative p-1 hover:bg-orange-100 rounded-md"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="text-gray-700   block py-2 p-1 "
                  >
                    {item.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Cart */}
        {isCartOpen && (
          <div className="mt-4 bg-white shadow-lg rounded-md p-4">
            <div className="max-h-64 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 py-2 border-b"
                >
                  <img src={item.img} alt={item.title} className="w-12 h-12" />
                  <div>
                    <a
                      href="product-detail.html"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {item.title}
                    </a>
                    <p className="text-sm text-gray-500">
                      Quantity:{" "}
                      <span className="font-semibold">{item.qty}</span> | Total:
                      £{item.total}
                    </p>
                  </div>
                  <button className="text-gray-500 hover:text-red-600">
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-sm">
                Number of items: <span className="font-semibold">36</span>
              </p>
              <p className="text-sm">
                Item Total: <span className="font-semibold">£528.00</span>
              </p>
              <a
                href="cart.html"
                className="block mt-2 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Check out
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
