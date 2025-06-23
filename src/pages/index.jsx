import { Suspense } from "@/utils";
import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/home"));
const Shop = lazy(() => import("./shop/shop"));
const About = lazy(() => import("./about/About"));
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
              path: "/about",
              element: (
                <Suspense>
                  <About />
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
          ],
        },
      ])}
    </>
  );
};

export default MainRouters;
