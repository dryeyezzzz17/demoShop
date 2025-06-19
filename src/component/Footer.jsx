import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full max-w-[1200px] justify-between items-center mx-auto my-15 '>
      <div className='flex flex-col gap-y-3'>
          <h2 className='text-[20px] font-semibold'>Customer Service</h2>
          <ul className='text-[16px]'>
            <li>Contact us</li>
            <li>Sell with us</li>
            <li>Shipping</li>
          </ul>
      </div>

      <div className='flex flex-col gap-y-3'>
        <h2 className='text-[20px] font-semibold'>Links</h2>
          <ul>
            <li>Contact us</li>
            <li>Sell with us</li>
            <li>Shipping</li>
          </ul>
      </div>

      <div className='flex flex-col gap-y-3'>
        <h2 className='text-[20px] font-semibold'>Newsletter</h2>
        <p className='text-[16px]'>Sign Up for our Newsletter</p>
        <div className='flex items-center justify-center'>
          <input type="email" name="" id="" className="w-50 h-10 border border-gray-300 bg-white px-4  shadow-sm focus:outline-none focus:border-blue-500"
          placeholder='Enter your Email here'/>
          <button className="w-25 h-10 border border-gray-300 bg-white px-4  shadow-sm focus:outline-none
           focus:border-blue-500">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer