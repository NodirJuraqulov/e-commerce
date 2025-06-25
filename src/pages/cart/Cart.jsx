import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroShop from "../shop/hero/HeroShop";
import CartView from "./CartView";
import Support from "../shop/support/Support";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-25">
      <HeroShop text="Cart" />

      <CartView data={cart}/>

      <Support />
    </div>
  );
};

export default Cart;
