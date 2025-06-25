import React from "react";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addToCart } from "@/redux/features/cart";

const ProductItem = (product) => {
  const navigate = useNavigate();
  const { thumbnail, title, category, price } = product;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div
      key={product.id}
      className="cursor-pointer bg-[#F4F5F7] p-3 group rounded-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="bg-white overflow-hidden rounded-md relative">
        <img
          src={thumbnail}
          alt={title}
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => dispatch(toggleWishlist(product))}
          className="absolute top-3 right-3 cursor-pointer p-2 px-3 bg-[#F4F5F7] rounded-full"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <HeartFilled />
          ) : (
            <HeartOutlined />
          )}
        </button>

        <button onClick={() => dispatch(addToCart(product))} className="absolute top-15 right-3 cursor-pointer p-3 bg-[#F4F5F7] rounded-full">
          <BsFillCartPlusFill />
        </button>
      </div>
      <div className="p-2">
        <h3 className="text-[18px] font-semibold text-[#3A3A3A]">{title}</h3>
        <p className="text-[16px] font-medium text-[#898989]">{category}</p>
        <span className="text-[18px] font-semibold text-[#3A3A3A]">
          {price}$
        </span>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
