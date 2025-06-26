import React from "react";
import Error from "@/assets/error.avif";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={Error} alt="error" className="w-[600px]" />

        <NavLink to={"/"}>
          <button
            className="border-1 border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] py-3 px-[78px] cursor-pointer"
            style={{ lineHeight: "24px" }}
          >
            Main Page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
