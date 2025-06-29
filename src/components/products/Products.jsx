import React from "react";
import ProductItem from "./ProductItem";

const Skeleton = ({ count }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(count)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 animate-pulse rounded-lg h-[300px] w-full"
          >
            <div className="bg-gray-100 h-[285px]"></div>
            <div className="bg-gray-100 mt-2 h-6 w-10/12"></div>
            <div className="bg-gray-100 mt-2 h-6 w-6/12"></div>
            <div className="bg-gray-100 mt-2 h-6 w-1/3"></div>
          </div>
        ))}
    </div>
  );
};

const Products = ({ data, loading, count }) => {
  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading ? (
        <Skeleton count={count} />
      ) : (
        data?.map((product) => <ProductItem key={product.id} {...product} />)
      )}
    </div>
  );
};

export default React.memo(Products);
