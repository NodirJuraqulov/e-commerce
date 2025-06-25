import React from 'react'
import Img1 from '@/assets/supportimg1.svg'
import Img2 from '@/assets/supportimg2.svg'
import Img3 from '@/assets/supportimg3.svg'
import Img4 from '@/assets/supportimg4.svg'

const Support = () => {
  return (
    <div className='w-full h-[270px] bg-[#FAF3EA] flex items-center justify-center gap-[55px] py-[100px] px-[53px]'>
      <div className='flex items-center gap-2.5'>
        <div>
          <img src={Img1} alt="support" />
        </div>

        <div>
          <h4 className='text-[#242424] text-[25px] leading-[150%] font-semibold'>High Quality</h4>
          <p className='text-[#898989] text-[20px] leading-[150%] font-medium'>crafted from top materials</p>
        </div>
      </div>

      <div className='flex items-center gap-2.5'>
        <div>
          <img src={Img2} alt="support" />
        </div>

        <div>
          <h4 className='text-[#242424] text-[25px] leading-[150%] font-semibold'>Warranty Protection</h4>
          <p className='text-[#898989] text-[20px] leading-[150%] font-medium'>Over 2 years</p>
        </div>
      </div>

      <div className='flex items-center gap-2.5'>
        <div>
          <img src={Img3} alt="support" />
        </div>

        <div>
          <h4 className='text-[#242424] text-[25px] leading-[150%] font-semibold'>Free Shipping</h4>
          <p className='text-[#898989] text-[20px] leading-[150%] font-medium'>Order over 150 $</p>
        </div>
      </div>

      <div className='flex items-center gap-2.5'>
        <div>
          <img src={Img4} alt="support" />
        </div>

        <div>
          <h4 className='text-[#242424] text-[25px] leading-[150%] font-semibold'>24 / 7 Support</h4>
          <p className='text-[#898989] text-[20px] leading-[150%] font-medium'>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Support)