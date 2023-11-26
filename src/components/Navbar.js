import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_usm_white from '../assets/logo-usm-white.png';
import coco_logo from '../assets/c.jpg';
import { Link } from "react-router-dom";

function NavbarSigned() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    
    <div className='flex justify-between items-center h-[90px] max-w-[1240px] mx-auto px-4 text-black'>
      <Link to='/' className='p-4'>
        <img className='w-[100px]' src={coco_logo} alt="/" />
      </Link>
      <ul className='hidden lg:flex'> 
        <Link to='/' className='p-4 flex'>Home</Link>
        <Link to='/networth' className='p-4'>Net Worth</Link>
        <Link to='/expenses' className='p-4'>Daily</Link>
        <Link to='/feedback' className='p-4'>Feedback</Link>
        <Link to='/askcoco' className='p-4'>Ask CoCo</Link>

        {/** <Link to='/Login' className='w-[110px] h-[45px] mx-auto my-auto content-center ml-6'> */}
        <Link to='/Login' className='w-[110px] h-[45px] mx-auto my-auto content-center'>
          <button className='bg-[#93E9BE] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
            Sign Out
          </button>
        </Link>
      </ul>
      {/** toggle between buttons; mb-medium breakpoint */}
      <div onClick={handleNav} className='block lg:hidden'> {/** above mb: hidden */}
        {nav ? <MdOutlineClose size={25} /> : <HiOutlineMenu size={25} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <a href='/' className=''>
          <img className='w-[200px] my-4 ml-8' src={coco_logo} alt="/" />
        </a>
        <ul className='p-4'>
          <a href='/' className='flex p-4 border-b border-gray-600'>Home</a>
          <a href='/networth' className='flex p-4 border-b border-gray-600'>Net Worth</a>
          <a href='/expenses' className='flex p-4 border-b border-gray-600'>Daily</a>
          <a href='/feedback' className='flex p-4 border-b border-gray-600'>Feedback</a>
          <a href='/askcoco' className='flex p-4 border-b border-gray-600'>Ask CoCo</a>
        </ul>
        <div className='mx-7'>
        </div>
      </div>
    </div>
  )
}

export default NavbarSigned
