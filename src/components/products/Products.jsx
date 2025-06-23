import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-8">
      {data?.map((product) => (
        <div key={product.id} className="cursor-pointer bg-[#F4F5F7] p-3">
          <div className="bg-white">
            <img
              src={product.thumbnail}
              alt={product.title}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          </div>
          <div className="p-2">
            <h3 className="text-[18px] font-semibold text-[#3A3A3A]">{product.title}</h3>
            <p className="text-[16px] font-medium text-[#898989]">{product.category}</p>
            <span className="text-[18px] font-semibold text-[#3A3A3A]">{product.price}$</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Products);
