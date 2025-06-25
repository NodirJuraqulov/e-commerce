import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

        {cart?.map((product) => (
          <div key={product.id} className="grid grid-cols-6 mb-5 items-center pb-5 border-b-1 border-[#E0E0E0]">
            <img
              src={product.thumbnail}
              alt=""
              className="w-20 h-20 bg-[#F9F1E7] rounded-[10px] object-contain"
            />

            <p className="truncate font-medium" title={product.title}>{product.title}</p>

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

              <button className="px-[6px] border-1 border-black cursor-pointer rounded-md" onClick={() => dispatch(incrementCart(product))}>
                +
              </button>
            </div>

            <strong className="font-medium">
              {product.price * product.quantity} $
            </strong>

            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => dispatch(removeCart(product))}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div className="w-[30%] bg-[#F9F1E7] h-[100%] flex flex-col rounded-md items-center justify-center py-5">
        <h2 className="text-[32px] font-semibold mb-10">Cart Totals</h2>

        <div className="flex gap-15 items-center">
            <p className="text-[16px] font-medium">Total</p>
            <strong className="text-[20px] font-medium text-[#B88E2F]">{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} $</strong>
        </div>
        
        <button className="rounded-[15px] py-3 px-14 border-1 border-black mt-10 cursor-pointer">Check Out</button>
      </div>
    </div>
  );
};

export default React.memo(CartView);
