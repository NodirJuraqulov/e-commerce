import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  incrementCart,
  decrementCart,
  removeCart,
} from "@/redux/features/cart";
import { NavLink, useNavigate } from "react-router-dom";
import Empty from "@/assets/empty.png";
import { use } from "react";

const CartView = ({ data }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 py-15">
      <div className="w-full lg:w-[70%]">
        <div className="bg-[#F9F1E7] h-[55px] flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 cl:gap-20 rounded-md mb-[55px] px-6 sm:px-10 md:px-[80px] lg:px-[140px]">
          <h4 className="font-normal">Product</h4>
          <h4 className="w-24 text-center font-normal">Price</h4>
          <h4 className="w-28 text-center font-normal">Quantity</h4>
          <h4 className="w-24 text-center font-normal">Subtotal</h4>
        </div>

        {cart.length ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-2 sm:grid-cols-6 items-center gap-4 pb-5 mb-5 border-b border-[#E0E0E0]"
            >
              <img
                src={product.thumbnail}
                alt=""
                className="w-20 h-20 bg-[#F9F1E7] rounded-[10px] object-contain"
              />

              <p className="truncate font-medium sm:col-span-1">
                {product.title}
              </p>

              <strong className="sm:col-auto ml-0 sm:ml-6">
                {product.price} $
              </strong>

              <div className="flex items-center gap-2">
                <button
                  className="disabled:opacity-40 px-2 rounded-md border border-black"
                  disabled={product.quantity <= 1}
                  onClick={() => dispatch(decrementCart(product))}
                >
                  -
                </button>
                <span className="w-6 text-center">{product.quantity}</span>
                <button
                  className="px-2 border border-black rounded-md"
                  onClick={() => dispatch(incrementCart(product))}
                >
                  +
                </button>
              </div>

              <strong className="font-medium ml-15">
                {Math.round(product.price * product.quantity * 10) / 10} $
              </strong>

              <button
                className="text-red-500 hover:text-red-600 justify-self-end"
                onClick={() => dispatch(removeCart(product))}
              >
                <MdOutlineDeleteOutline className="text-2xl" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center">
            <img className="w-30 mt-5" src={Empty} alt="empty" />
            <h3 className="text-xl font-semibold my-5 text-gray-500">
              Your cart is empty
            </h3>
            <NavLink to="/shop">
              <button className="border border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] py-3 px-10">
                Add To Cart
              </button>
            </NavLink>
          </div>
        )}
      </div>

      {cart.length ? (
        <div className="w-full lg:w-[30%] bg-[#F9F1E7] rounded-md flex flex-col items-center py-8">
          <h2 className="text-[32px] font-semibold mb-10">Cart Totals</h2>
          <div className="flex gap-8 items-center">
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
          <button
            onClick={() => navigate("/checkout")}
            className="rounded-[15px] py-3 px-14 border border-black bg-white mt-10"
          >
            Check Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(CartView);
