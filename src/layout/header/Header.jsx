import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/vite.svg";
import Person from "@/assets/person.svg";
import Search from "@/assets/search.svg";
import Heart from "@/assets/heart.svg";
import Cart from "@/assets/cart.svg";

const Header = () => {
  return (
    <header className="h-[100px] bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-full">
        <NavLink to={"/"}>
          <div className="flex items-center gap-[5px]">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Furniro</h1>
          </div>
        </NavLink>

        <div className="flex items-center gap-[75px]">
          <NavLink to={"/"}>
            <p className="text-[16px] font-medium hover:underline">Home</p>
          </NavLink>
          <NavLink to={"/shop"}>
            <p className="text-[16px] font-medium hover:underline">Shop</p>
          </NavLink>
          <NavLink to={"/wishlist"}>
            <p className="text-[16px] font-medium hover:underline">Wishlist</p>
          </NavLink>
          <NavLink to={"/cart"}>
            <p className="text-[16px] font-medium hover:underline">Cart</p>
          </NavLink>
          <NavLink to={"/contact"}>
            <p className="text-[16px] font-medium hover:underline">Contact</p>
          </NavLink>
        </div>

        <div className="flex items-center gap-[45px]">
          <button className="cursor-pointer">
            <NavLink to={"/contact"}>
              <img src={Person} alt="Person" />
            </NavLink>
          </button>
          <button className="cursor-pointer">
            <img src={Search} alt="Search" />
          </button>
          <button className="cursor-pointer">
            <NavLink to={"/wishlist"}>
              <img src={Heart} alt="Heart" />
            </NavLink>
          </button>
          <button className="cursor-pointer">
            <NavLink to={"/cart"}>
              <img src={Cart} alt="Cart" />
            </NavLink>
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
