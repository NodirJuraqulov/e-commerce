import Products from "@/components/products/Products";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Empty from "@/assets/empty.png";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[120px] container mx-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-5 mt-[120px]">Wishlist</h2>

      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img className="w-45 mt-5" src={Empty} alt="empty" />
          <h3 className="text-xl font-semibold my-5 text-gray-500">
            Your wishlist is empty
          </h3>
          <NavLink to={"/shop"}>
            <button
              className="border-1 border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] py-3 px-[78px] cursor-pointer"
              style={{ lineHeight: "24px" }}
            >
              Add To Wishlist
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default React.memo(Wishlist);
