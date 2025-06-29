import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HeroShop from "./hero/HeroShop";
import Filter from "./filter/Filter";
import Support from "./support/Support";
import Products from "@/components/products/Products";

const Shop = () => {
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  // const [page, setPage] = useState(1);
  const page = parseInt(params.get("page") || 1);
  const pageSize = parseInt(params.get("pageSize") || 16);

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    // setPage(page);
    if (pageS !== pageSize) {
      params.set("pageSize", pageS);
      params.set("page", "1");
    } else {
      params.set("page", page.toString());
    }
    setParams(params);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[100px]">
      <HeroShop text="Shop" />

      <Filter />

      <div className="container mx-auto">
        <Products data={data?.data?.products} />
      </div>

      <div className="mt-[70px] h-[60px] flex items-center justify-center mb-[85px]">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
          showSizeChanger={false}
        />
      </div>

      <Support />
    </div>
  );
};

export default React.memo(Shop);
