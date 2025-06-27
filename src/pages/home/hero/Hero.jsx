import React from 'react'
import heroImg from '@/assets/bghero.png'

const Hero = () => {
  return (
    <div className='w-full min-h-[400px] md:h-[550px] lg:h-[712px] mt-16 md:mt-25 mb-10 bg-cover bg-center' style={{ backgroundImage: `url(${heroImg})` }}>
      <div className='container mx-auto h-full flex items-center justify-center md:justify-end px-4'>
        <div className='bg-[#FFFFFFB2] py-[50px] px-10 rounded-[10px] w-[643px]'>
          <p className='text-[16px] font-semibold text-[#333333]' style={{ letterSpacing: "3px" }}>New Arrival</p>
          <h3 className='text-[52px] font-bold text-[#B88E2F] mt-1 mb-4' style={{ lineHeight: "65px" }}>Discover Our New Collection</h3>
          <p className='text-[18px] font-medium text-[#333333] mb-[46px]' style={{ lineHeight: "24px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestiae quisquam qui, quaerat numquam explicabo?</p>
          <button className='text-[16px] font-bold text-white px-18 py-6 bg-[#B88E2F]'>BUY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Hero)