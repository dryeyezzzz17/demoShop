import React from 'react'
import feature from '../assets/feature.jpg'
import superSale from '../assets/superSale.jpg'
import mega from '../assets/megaSaleBanner.jpg'
 

const Hero = () => {
  return (
    <div className='w-full max-w-[1200px] flex flex-row mt-10 items-center justify-center mx-auto gap-x-5 '>
      <div className='flex flex-col gap-y-5'>
        <img src={feature} alt=""
        className="h-[250px] w-[400px] object-fit"
         />
        <img src={superSale} alt="" 
        className="h-[180px] w-[400px] object-fit"
        />
      </div>

      <div className='h-full'>
        <img src={mega} alt="" 
        className="h-[450px] w-[700px] object-fit"
        />
      </div>

      <div className='flex flex-col gap-y-5'>
        <img src={feature} alt=""
        className="h-[250px] w-[400px] object-fit"
         />
        <img src={superSale} alt="" 
        className="h-[180px] w-[400px] object-fit"
        />
      </div>
    </div>
  )
}

export default Hero