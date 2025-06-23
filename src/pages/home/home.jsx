import React from "react";
import Hero from "./hero/Hero";
import Types from "./types/Types";
import Products from "@/components/products/Products";
import { useProduct } from "@/api/hooks/useProduct";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { getProduct } = useProduct();
  const { data } = getProduct({ limit: 8, skip: 0 });
  return (
    <>
      <Hero />
      <Types />

      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
        <h2
          className="text-[40px] font-bold text-[#3A3A3A]"
          style={{ lineHeight: "48px" }}
        >
          Our Products
        </h2>

        <Products data={data?.data?.products} />

        <NavLink to={"/shop"}>
          <button
            className="border-1 border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] py-3 px-[78px] cursor-pointer"
            style={{ lineHeight: "24px" }}
          >
            Show More
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default React.memo(Home);
