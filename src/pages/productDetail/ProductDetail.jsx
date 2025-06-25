import React, { useEffect } from "react";
import { useProduct } from "@/api/hooks/useProduct";
import { MdOutlineNavigateNext } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import Detail from "./Detail";
import Description from "./Description";
import Products from "@/components/products/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, getProductByCategory } = useProduct();
  const { data: product, isLoading } = getProductById(id);
  const { data: relatedData, isLoading: relatedLoading } = getProductByCategory(
    product?.category
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  const relatedProducts = relatedData?.products
    ?.filter((p) => p.id !== product.id) // asosiy productni chiqarib tashlaymiz
    ?.slice(0, 4); // faqat 4 ta

  return (
    <div className="w-full">
      <div className="w-full h-[100px] bg-[#F9F1E7] mt-25">
        <div className="container mx-auto h-full flex items-center gap-6">
          <NavLink to={"/"}>
            <h4 className="text-[16px] font-normal text-[#9F9F9F]">Home</h4>
          </NavLink>
          <MdOutlineNavigateNext />
          <NavLink to={"/shop"}>
            <h4 className="text-[16px] font-normal text-[#9F9F9F]">Shop</h4>
          </NavLink>
          <MdOutlineNavigateNext />
          <h4 className="text-[16px] font-normal pl-[34px] border-l-2 border-[#9F9F9F]">
            {product?.title}
          </h4>
        </div>
      </div>

      <Detail product={product} />

      <Description product={product} />

      <div className="container mx-auto mt-10">
        <div className="flex flex-col items-center mt-10 gap-[35px]">
          <h2 className="text-[36px] font-medium">Related Products</h2>

          {relatedLoading ? (
            <div>Loading related products...</div>
          ) : (
            <Products data={relatedProducts} />
          )}

          <NavLink to={"/shop"}>
            <button
              className="border-1 border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] py-3 px-[78px] cursor-pointer"
              style={{ lineHeight: "24px" }}
            >
              Show More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);
