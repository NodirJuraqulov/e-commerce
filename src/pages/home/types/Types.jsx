import React from 'react'
import Image1 from '@/assets/image1.png'
import Image2 from '@/assets/image2.png'
import Image3 from '@/assets/image3.png'

const Types = () => {
  return (
    <div className='container mx-auto my-14 px-6'>
      <div className='min-h-[685px] flex flex-col items-center justify-center'>
        <h2 className='text-[32px] font-bold text-[#333333]'>Browse The Range</h2>
        <p className='text-[20px] font-normal text-[#666666] mb-[62px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <div className='w-full grid grid-cols-3 justify-between items-center'>
          <div className='flex flex-col items-center justify-center gap-[30px]'>
            <img src={Image1} alt="#" />
            <h4 className='text-[24px] font-semibold text-[#333333]'>Dining</h4>
          </div>

          <div className='flex flex-col items-center justify-center gap-[30px]'>
            <img src={Image2} alt="#" />
            <h4 className='text-[24px] font-semibold text-[#333333]'>Living</h4>
          </div>

          <div className='flex flex-col items-center justify-center gap-[30px]'>
            <img src={Image3} alt="#" />
            <h4 className='text-[24px] font-semibold text-[#333333]'>Bedroom</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Types)