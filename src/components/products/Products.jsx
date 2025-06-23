import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-8">
      {data?.map((product) => (
        <div key={product.id} className="cursor-pointer">
          <img
            src={product.thumbnail}
            alt={product.title}
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Products);
