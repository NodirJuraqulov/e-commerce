import React from "react";
import Img1 from "@/assets/filterimg1.svg";
import Img2 from "@/assets/filterimg2.svg";
import Img3 from "@/assets/filterimg3.svg";

const Filter = () => {
  return (
    <div className="min-h-[100px] px-4 bg-[#F9F1E7] w-full mb-[46px]">
      <div
        className="container mx-auto h-full
           flex flex-col gap-5 md:flex-row
           items-center
           justify-center md:justify-between"
      >
        <div className="flex items-center gap-6">
          <img src={Img1} alt="Filter" />
          <h4 className="text-[20px] font-normal">Filter</h4>
          <img src={Img2} alt="Filter" />
          <img src={Img3} alt="Filter" />
          <p className="font-normal text-[16px] pl-[34px] border-l-2 border-[#9F9F9F]">
            Showing 1–16 of 32 results
          </p>
        </div>

        <div>
          <form className="flex items-center gap-7 justify-center" action="">
            <div className="flex items-center gap-4">
              <label className="text-[20px] font-normal" htmlFor="/">
                Show
              </label>
              <input
                className="text-[20px] text-[#9F9F9F] bg-white py-3 w-[55px] pl-[14px] flex items-center justify-center font-normal"
                type="number"
                name="number"
                id="number"
                placeholder="16"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-[20px] font-normal" htmlFor="/">
                Short by
              </label>
              <select
                className="text-[20px] font-normal text-[#9F9F9F] appearance-none bg-white py-3 pl-[30px] pr-[86px]"
                name="category"
                id="category"
              >
                <option className="text-[#9F9F9F]" value="default">
                  Default
                </option>
                <option className="text-[#9F9F9F]" value="electronics">
                  Electronics
                </option>
                <option className="text-[#9F9F9F]" value="clothing">
                  Clothing
                </option>
                <option className="text-[#9F9F9F]" value="accessories">
                  Accessories
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filter);
