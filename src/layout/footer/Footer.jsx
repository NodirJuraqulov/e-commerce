import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t-1 border-[#D9D9D9] mt-10">
      <div className="py-10 container mx-auto min-h-[420px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
          <div>
            <h4 className="text-[24px] font-bold">Furniro.</h4>
            <p className="text-[16px] font-normal text-[#9F9F9F] mt-[50px]">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-[108px]">
            <div>
              <h4 className="text-[16px] font-medium text-[#9F9F9F] mb-[55px]">
                Links
              </h4>

              <ul className="flex flex-col gap-[46px]">
                <li>
                  <NavLink to={"/"}>
                    <p className="text-[16px] font-medium">Home</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/shop"}>
                    <p className="text-[16px] font-medium">Shop</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>
                    <p className="text-[16px] font-medium">About</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>
                    <p className="text-[16px] font-medium">Contact</p>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-medium text-[#9F9F9F] mb-[55px]">
                Help
              </h4>

              <ul className="flex flex-col gap-[46px]">
                <li>
                  <a href="#" className="text-[16px] font-medium">
                    Payment Options
                  </a>
                </li>

                <li>
                  <a href="#" className="text-[16px] font-medium">
                    Returns
                  </a>
                </li>

                <li>
                  <a href="#" className="text-[16px] font-medium">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-medium text-[#9F9F9F] mb-[55px]">
                Newsletter
              </h4>

              <form className="flex items-end gap-[38px]" action="">
                <input
                  className="border-b-1 pb-[3px]"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <button className="text-[14px] font-medium border-b-1 cursor-pointer pb-[3px]">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-9
                 border-t border-[#D9D9D9]
                 text-center md:text-left"
        >
          <p className="text-[16px] font-normal">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
