import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_usm_white from '../assets/logo-usm-white.png';
import coco_logo from '../assets/c.jpg';
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-[90px] max-w-[1240px] mx-auto px-4 text-black bg-[#FFFFFF]'>
      <Link to='/' className='p-4'>
        <img className='w-[100px]' src={coco_logo} alt="/" />
      </Link>
      <ul className='hidden lg:flex'> {/** hidden on mobile devices, above mb: flex */}
        <Link to='/' className='p-4'>Home</Link>
        <Link to='/NetWorth' className='p-4'>Net Worth</Link>
        <Link to='/Opportunities' className='p-4'>Expenses</Link>
        <Link to='/InfoHub' className='p-4'>Mission</Link>
        <Link to='/Feedback' className='p-4'>Ask CoCo</Link>
        <Link to='/Login' className='w-[110px] h-[45px] mx-auto my-auto content-center ml-6'>
          <button className='bg-[#93E9BE] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
            Log In
          </button>
        </Link>
      </ul>
      {/** toggle between buttons; mb-medium breakpoint */}
      <div onClick={handleNav} className='block lg:hidden'> {/** above mb: hidden */}
        {nav ? <MdOutlineClose size={25} /> : <HiOutlineMenu size={25} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <a href='/' className=''>
          <img className='w-[100px] my-4 ml-8' src={coco_logo} alt="/" />
        </a>
        <ul className='p-4'>
          <a href='/' className='flex p-4 border-b border-gray-600'>Home</a>
          <a href='/Activities' className='flex p-4 border-b border-gray-600'>Net Worth</a>
          <a href='/Opportunities' className='flex p-4 border-b border-gray-600'>Expenses</a>
          <a href='/InfoHub' className='flex p-4 border-b border-gray-600'>Mission</a>
          <a href='/Feedback' className='flex p-4 border-b border-gray-600'>Ask CoCo</a>
        </ul>
        <div className='mx-7'>
          <Link to='/Login' className='w-[110px] h-[45px]'>
            <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto mt-14 content-center text-black hover:scale-105 duration-300'>
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
