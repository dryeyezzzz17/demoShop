import React from 'react'
import { FiMenu } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
const Nav = () => {
  return (
    <div className='w-full max-w-[1180px] flex justify-between items-center mx-auto my-5 gap-x-10'>


      <div className='flex gap-x-2 items-center '>
        <FiMenu className='text-xl'/>
        <h1 className='text-xl font-bold '>Mern store</h1>
      </div>

      <div className='h-[30px]'>
          <input 
          type="text"
          required="true"
          placeholder='Search Products'
          className="w-120 h-10 border border-gray-300 bg-white px-4 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
      </div>

      <div className='flex justify-between items-center gap-x-4'>
          <FiShoppingBag className='text-[18px]  '/>
          <p className='text-[18px]  '>Brand</p>
          <p className='text-[18px]   '>Shop</p>
          <p className='text-[18px]  '>Welcome</p>
      </div>

    </div>
  )
}

export default Nav