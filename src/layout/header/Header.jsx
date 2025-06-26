import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/vite.svg";
import Person from "@/assets/person.svg";
import Search from "@/assets/search.svg";
import Heart from "@/assets/heart.svg";
import Cart from "@/assets/cart.svg";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useProduct } from "@/api/hooks/useProduct";
import useDebounce from "@/hooks/useDebounce";

const linkStyle = "text-[16px] font-medium transition-colors duration-200";
const activeClass = "text-[#B88E2F]";

const Header = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const off = (e) => {
      if (e.key === "Escape") setIsOpen(false);
      if (
        isOpen &&
        boxRef.current &&
        !boxRef.current.contains(e.target) &&
        e.type !== "keydown"
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", off);
    document.addEventListener("touchstart", off);
    document.addEventListener("keydown", off);
    return () => {
      ["mousedown", "touchstart", "keydown"].forEach((ev) =>
        document.removeEventListener(ev, off)
      );
    };
  }, [isOpen]);

  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { getSearchProduct } = useProduct();
  const [value, setValue] = useState("");
  const text = useDebounce(value);
  const { data } = getSearchProduct({ q: text.trim() });
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white shadow-md
                    transition-all duration-300 ease-in-out
                    ${shrink ? "h-[60px]" : "h-[100px]"}`}
      >
        <div
          className={`container mx-auto flex items-center justify-between h-full
                      transition-all duration-300 ease-in-out
                      ${shrink ? "py-2" : "py-4"}`}
        >
          <NavLink to="/" className="flex items-center gap-1">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">E-commerce</h1>
          </NavLink>

          <nav className="hidden md:flex items-center gap-[75px]">
            {["/", "/shop", "/contact"].map((path, i) => {
              const text = ["Home", "Shop", "Contact"][i];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeClass : ""}`
                  }
                >
                  {text}
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-[45px]">
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
              aria-label="Open menu"
            >
              <AiOutlineMenu size={28} />
            </button>

            <div ref={boxRef} className="relative">
              {!isOpen && (
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-1 rounded-full cursor-pointer"
                >
                  <img src={Search} alt="Search" />
                </button>
              )}

              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    key="search-input"
                    type="text"
                    autoFocus
                    placeholder="Search…"
                    value={value}
                    onChange={handleChange}
                    initial={{ width: 0, opacity: 0, x: 0 }}
                    animate={{ width: 230, opacity: 1, x: -10 }}
                    exit={{ width: 0, opacity: 0, x: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    className="pl-10 pr-3 py-1 rounded-md bg-white shadow-md
                               focus:outline-none focus:ring-1 focus:ring-[#B88E2F]
                               origin-right"
                  />
                )}
              </AnimatePresence>

              {isOpen && (
                <img
                  src={Search}
                  alt=""
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60 pointer-events-none"
                />
              )}
            </div>

            <NavLink to="/contact" className="p-1 rounded-full">
              {({ isActive }) => (
                <img
                  src={Person}
                  alt="Person"
                  className={isActive ? "grayscale-0" : "grayscale"}
                />
              )}
            </NavLink>

            <div className="relative">
              <NavLink to="/wishlist" className="p-1 rounded-full">
                {({ isActive }) => (
                  <img
                    src={Heart}
                    alt="Heart"
                    className={isActive ? "grayscale-0" : "grayscale"}
                  />
                )}
              </NavLink>
              {wishlist.length > 0 && (
                <div className="absolute w-5 h-5 text-sm font-medium rounded-full bg-red-600 flex items-center justify-center top-4 right-[-9px]">
                  {wishlist.length}
                </div>
              )}
            </div>

            <div className="relative">
              <NavLink to="/cart" className="p-1 rounded-full">
                {({ isActive }) => (
                  <img
                    src={Cart}
                    alt="Cart"
                    className={isActive ? "grayscale-0" : "grayscale"}
                  />
                )}
              </NavLink>
              {cart.length > 0 && (
                <div className="absolute w-5 h-5 text-sm font-medium rounded-full bg-red-600 flex items-center justify-center top-4 right-[-9px]">
                  {cart.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute left-50 top-[70px] w-56 bg-white rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-3 right-3 p-1"
              aria-label="Close menu"
            >
              <AiOutlineClose size={24} />
            </button>

            <nav className="flex flex-col gap-6 mt-6 text-center">
              {["Home", "Shop", "Contact"].map((t) => (
                <NavLink
                  key={t}
                  to={t === "Home" ? "/" : `/${t.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium hover:text-[#B88E2F] transition"
                >
                  {t}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="mt-25">
        {data?.data?.products?.length ? (
          <div>
            {data?.data?.products?.map((item) => (
              <div key={item.id}>
                <img src={item.thumbnail} width={60} alt="img" />
                <h4>{item.title}</h4>
                <p>
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        ) : value ? (
          <p>Not found</p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default React.memo(Header);
