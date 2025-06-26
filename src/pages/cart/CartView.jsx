import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  incrementCart,
  decrementCart,
  removeCart,
} from "@/redux/features/cart";
import { NavLink } from "react-router-dom";
import Empty from "@/assets/empty.png";

const CartView = ({ data }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between py-15 container mx-auto">
      <div className="mr-[30px] w-[70%]">
        <div className="px-[140px] bg-[#F9F1E7] h-[55px] flex items-center rounded-md mb-[55px]">
          <h4 className="mr-[114px] pl-2 font-normal">Product</h4>
          <h4 className="mr-[80px] font-normal">Price</h4>
          <h4 className="mr-[76px] font-normal">Quantity</h4>
          <h4 className="font-normal">Subtotal</h4>
        </div>

        {cart.length ? (
          cart?.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-6 mb-5 items-center pb-5 border-b-1 border-[#E0E0E0]"
            >
              <img
                src={product.thumbnail}
                alt=""
                className="w-20 h-20 bg-[#F9F1E7] rounded-[10px] object-contain"
              />

              <p className="truncate font-medium" title={product.title}>
                {product.title}
              </p>

              <strong className="ml-6">{product.price} $</strong>

              <div className="flex items-center gap-2">
                <button
                  className="disabled:opacity-40 px-2 rounded-md cursor-pointer border-1 border-black"
                  disabled={product.quantity <= 1}
                  onClick={() => dispatch(decrementCart(product))}
                >
                  -
                </button>

                <span className="w-6 text-center">{product.quantity}</span>

                <button
                  className="px-[6px] border-1 border-black cursor-pointer rounded-md"
                  onClick={() => dispatch(incrementCart(product))}
                >
                  +
                </button>
              </div>

              <strong className="font-medium">
                {Math.round(product.price * product.quantity * 10) / 10} $
              </strong>

              <button
                className="text-red-500 hover:text-red-600 cursor-pointer"
                onClick={() => dispatch(removeCart(product))}
              >
                <MdOutlineDeleteOutline className="text-2xl" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img className="w-30 mt-5" src={Empty} alt="empty" />
            <h3 className="text-xl font-semibold my-5 text-gray-500">
              Your cart is empty
            </h3>
            <NavLink to={"/shop"}>
              <button
                className="border-1 border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] py-3 px-[78px] cursor-pointer"
                style={{ lineHeight: "24px" }}
              >
                Add To Cart
              </button>
            </NavLink>
          </div>
        )}
      </div>
      {cart.length ? (
        <div className="w-[30%] bg-[#F9F1E7] h-[100%] flex flex-col rounded-md items-center justify-center py-5">
          <h2 className="text-[32px] font-semibold mb-10">Cart Totals</h2>

          <div className="flex gap-15 items-center">
            <p className="text-[16px] font-medium">Total</p>
            <strong className="text-[20px] font-medium text-[#B88E2F]">
              {Math.round(
                cart.reduce(
                  (sum, { price, quantity }) => sum + price * quantity,
                  0
                ) * 10
              ) / 10}{" "}
              $
            </strong>
          </div>

          <button className="rounded-[15px] py-3 px-14 border-1 border-black mt-10 cursor-pointer">
            Check Out
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default React.memo(CartView);
