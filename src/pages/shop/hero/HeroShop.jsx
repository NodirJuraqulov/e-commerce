import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import heroImg from "@/assets/shophero.png";

const HeroShop = () => {
  return (
    <div style={{ backgroundImage: `url(${heroImg})` }} className='w-full h-[316px] bg-cover bg-center flex flex-col items-center justify-center'>
      <h2 className='text-[48px] font-medium'>Shop</h2>
      <div className='flex items-center gap-2'>
        <p className='text-[16px] font-medium'>Home</p>
        <MdOutlineNavigateNext />
        <p className='text-[16px] font-light'>Shop</p>
      </div>
    </div>
  )
}

export default React.memo(HeroShop)