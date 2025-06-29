import React, { useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import heroImg from "@/assets/shophero.png";
import { NavLink } from "react-router-dom";

const HeroShop = ({ text }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="w-full h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
    >
      <h2 className="text-[48px] font-medium">{text}</h2>
      <div className="flex items-center gap-2">
        <NavLink to={"/"}>
          <p className="text-[16px] font-medium">Home</p>
        </NavLink>
        <MdOutlineNavigateNext />
        <p className="text-[16px] font-light">{text}</p>
      </div>
    </div>
  );
};

export default React.memo(HeroShop);
