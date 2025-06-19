import React from 'react'
import { FiPhone } from "react-icons/fi";

const Head = () => {
  return (
    <div className='bg-blue-950 flex justify-between py-2'>
      <div className='max-w-[980px] flex justify-between w-full items-center mx-auto'>
          <div>
              <p className='text-white text-[18px] '>Free shipping</p>
          </div>
          <div>
              <p className='text-white text-[18px]' >Payment Mode</p>
          </div>
          <div className='flex gap-x-3 items-center'>
              <FiPhone className='text-white' />
              <p className='text-white text-[18px] '>Call us 951 555 5555</p>
          </div>
      </div>
        
    </div>
  )
}

export default Head