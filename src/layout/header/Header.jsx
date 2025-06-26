import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/vite.svg";
import Person from "@/assets/person.svg";
import Search from "@/assets/search.svg";
import Heart from "@/assets/heart.svg";
import Cart from "@/assets/cart.svg";

const linkStyle = "text-[16px] font-medium transition-colors duration-200";
const activeClass = "text-[#B88E2F]";

const Header = () => {
  return (
    <header className="h-[100px] bg-white shadow-md fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-full">
        <NavLink to="/" className="flex items-center gap-1">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">E-commerce</h1>
        </NavLink>

        <nav className="flex items-center gap-[75px]">
          {["/", "/shop", "/wishlist", "/cart", "/contact"].map((path, i) => {
            const text = ["Home", "Shop", "Wishlist", "Cart", "Contact"][i];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeClass : ""}`
                }
              >
                {text}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-[45px]">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <img src={Search} alt="Search" />
          </button>

          <NavLink to="/contact" className="p-1 rounded-full hover:bg-gray-100">
            {({ isActive }) => (
              <img
                src={Person}
                alt="Person"
                className={isActive ? "grayscale-0" : "grayscale"}
              />
            )}
          </NavLink>

          <NavLink
            to="/wishlist"
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {({ isActive }) => (
              <img
                src={Heart}
                alt="Heart"
                className={isActive ? "grayscale-0" : "grayscale"}
              />
            )}
          </NavLink>

          <NavLink to="/cart" className="p-1 rounded-full hover:bg-gray-100">
            {({ isActive }) => (
              <img
                src={Cart}
                alt="Cart"
                className={isActive ? "grayscale-0" : "grayscale"}
              />
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
