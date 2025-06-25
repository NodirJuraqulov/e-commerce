import Products from "@/components/products/Products";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-30 container mx-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-5">Wishlist</h2>

      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Wishlist);
