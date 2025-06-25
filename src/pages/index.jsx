import { Suspense } from "@/utils";
import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/home"));
const Shop = lazy(() => import("./shop/shop"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));
const Cart = lazy(() => import("./cart/Cart"));
const Contact = lazy(() => import("./contact/Contact"));
const ProductDetail = lazy(() => import("./productDetail/ProductDetail"));

const MainRouters = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <Suspense>
              <Layout />
            </Suspense>
          ),
          children: [
            {
              path: "/",
              element: (
                <Suspense>
                  <Home />
                </Suspense>
              ),
            },
            {
              path: "/shop",
              element: (
                <Suspense>
                  <Shop />
                </Suspense>
              ),
            },
            {
              path: "/product/:id",
              element: (
                <Suspense>
                  <ProductDetail />
                </Suspense>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <Suspense>
                  <Wishlist />
                </Suspense>
              ),
            },
            {
              path: "/contact",
              element: (
                <Suspense>
                  <Contact />
                </Suspense>
              ),
            },
            {
              path: "/cart",
              element: (
                <Suspense>
                  <Cart />
                </Suspense>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default MainRouters;
