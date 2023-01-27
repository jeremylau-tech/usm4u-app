import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_usm_white from '../assets/logo-usm-white.png';
import { Link } from "react-router-dom";

function NavbarSigned() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-[90px] max-w-[1240px] mx-auto px-4 text-white'>
      <Link to='/' className='p-4'>
        <img className='w-[200px]' src={logo_usm_white} alt="/" />
      </Link>
      <ul className='hidden lg:flex'> 
        <Link to='/HomeSigned' className='p-4 flex'>Home</Link>

      <div className="dropdown p-4">
            <label tabIndex={0} className="flex">Activities</label>
            <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52 text-black hover:bg-white active:bg-white">
              <li><a href='/CreateActivity'>Create Activity</a></li>
              <li><a href='/EditActivity'>Edit Activity</a></li>
            </ul>
          </div>

          <div className="dropdown p-4">
            <label tabIndex={0} className="flex">Opportunities</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
              <li><a href='/CreateOpportunity'>Create Opportunity</a></li>
              <li><a href='/EditOpportunity'>Edit Opportunity</a></li>
            </ul>
          </div>

        
        {/** <Link to='/Login' className='w-[110px] h-[45px] mx-auto my-auto content-center ml-6'> */}
        <Link to='/Login' className='w-[110px] h-[45px] mx-auto my-auto content-center'>
          <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
            Sign Out
          </button>
        </Link>
      </ul>
      {/** toggle between buttons; mb-medium breakpoint */}
      <div onClick={handleNav} className='block lg:hidden'> {/** above mb: hidden */}
        {nav ? <MdOutlineClose size={25} /> : <HiOutlineMenu size={25} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <a href='/' className=''>
          <img className='w-[200px] my-4 ml-8' src={logo_usm_white} alt="/" />
        </a>
        <ul className='p-4'>
          <a href='/' className='flex p-4 border-b border-gray-600'>Home</a>
          <a href='/Activities' className='flex p-4 border-b border-gray-600'>Activities</a>
          <a href='/Opportunities' className='flex p-4 border-b border-gray-600'>Opportunities</a>
        </ul>
        <div className='mx-7'>
          <Link to='/Home' className='w-[110px] h-[45px]'>
            <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto mt-14 content-center text-black hover:scale-105 duration-300'>
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarSigned
