import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import Facebook from "@/assets/facebook.svg";
import Linkedin from "@/assets/linkedin.svg";
import Twitter from "@/assets/twitter.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { incrementCart, decrementCart } from "@/redux/features/cart";

const Detail = ({ product }) => {
  const { title, price, rating, description, sku, category, tags, images } =
    product || {};
  const [activeSize, setActiveSize] = useState("L");
  const sizes = ["L", "XL", "XS"];
  const [next, setNext] = useState(0);

  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const cartItem = cart.find((i) => i.id === product.id);
  const qty = cartItem?.quantity ?? 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlus = () => {
    if (qty === 0) {
      dispatch(addToCart(product));
    } else {
      dispatch(incrementCart(product));
    }
  };

  return (
    <div className="w-full container mx-auto pt-[35px] pb-[55px] flex px-4 flex-col lg:flex-row justify-between">
      <div className="max-w-[550px]">
        <div className="flex flex-col lg:flex-row gap-4 mt-5 ">
          <div className="flex flex-col gap-5 overflow-x-auto">
            {images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="w-20 h-20 object-contain rounded-[10px] bg-[#F9F1E7] p-4 cursor-pointer"
                onClick={() => setNext(index)}
              />
            ))}
          </div>

          <img
            className="w-[423px] h-[500px] object-contain bg-[#F9F1E7] rounded-[10px]"
            src={images[next]}
            alt=""
          />
        </div>
      </div>

      <div className="w-[50%]">
        <h4 className="text-[42px] truncate" title={title}>
          {title}
        </h4>
        <strong className="text-[24px] font-medium text-[#9F9F9F] mb-4">
          {price} $
        </strong>
        <div className="flex items-center gap-4 mb-4">
          <Rate allowHalf defaultValue={rating} />
          <p className="text-[13px] text-[#9F9F9F] pl-[22px] border-l-1 border-[#9F9F9F]">
            Customer Review
          </p>
        </div>
        <p className="text-[13px]">{description}</p>

        <div className="my-5">
          <p className="text-[14px] text-[#9F9F9F] mb-3">Size</p>

          <div className="flex gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`rounded-md text-[13px] transition-all w-[30px] h-[30px] duration-200
            ${
              activeSize === size
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7] text-black hover:text-black hover:shadow-md"
            }
          `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] text-[#9F9F9F] mb-3">Color</p>

          <div className="flex gap-4">
            <button className="w-[30px] h-[30px] rounded-full bg-[#816DFA] cursor-pointer hover:scale-105"></button>
            <button className="w-[30px] h-[30px] rounded-full bg-[#000000] cursor-pointer hover:scale-105"></button>
            <button className="w-[30px] h-[30px] rounded-full bg-[#B88E2F] cursor-pointer hover:scale-105"></button>
          </div>
        </div>

        <div className="flex items-center gap-[18px] mt-8">
          <div className="w-[160px] h-[64px] shadow-md flex items-center justify-between px-2 py-5 rounded-[15px]">
            <button
              onClick={() => dispatch(decrementCart(product))}
              disabled={qty <= 1}
              className="text-[20px] cursor-pointer shadow-lg px-[14px] py-1 active:shadow"
            >
              -
            </button>
            <span className="text-[20px] px-2">{qty}</span>
            <button
              onClick={handlePlus}
              className="text-[20px] cursor-pointer shadow-lg px-3 py-1 active:shadow"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(toggleWishlist(product))}
            className="w-[215px] h-[64px] shadow-md py-4 px-10 rounded-[15px] text-[18px] cursor-pointer active:shadow"
          >
            {wishlist.some((w) => w.id === product.id)
              ? "In Wishlist"
              : "Add To Wishlist"}
          </button>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-[215px] h-[64px] shadow-md py-4 px-12 rounded-[15px] text-[18px] cursor-pointer active:shadow"
          >
            {qty ? "Added" : "Add To Cart"}
          </button>
        </div>

        <div className="flex gap-[14px] pt-10 mt-15 border-t-1 text-[16px] text-[#9F9F9F] border-[#D9D9D9]">
          <div>
            <p className="mb-3">SKU</p>
            <p className="mb-3">Category</p>
            <p className="mb-3">Tags</p>
            <p>Share</p>
          </div>
          <div>
            <p className="mb-3">:</p>
            <p className="mb-3">:</p>
            <p className="mb-3">:</p>
            <p>:</p>
          </div>
          <div>
            <p className="mb-3">{sku}</p>
            <p className="mb-3">{category}</p>
            <p className="mb-3">{tags.join(", ")}</p>
            <div className="flex gap-6">
              <img src={Facebook} alt="Facebook" />
              <img src={Linkedin} alt="Linkedin" />
              <img src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Detail);
