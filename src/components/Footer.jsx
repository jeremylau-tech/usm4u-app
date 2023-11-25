import React from 'react';
import logo_usm_black from '../assets/logo-usm-black.png';
import logo_usm4u_black from '../assets/logo-usm4u-black.png';
import coco_logo from '../assets/c.jpg';
import { ImMail } from 'react-icons/im';

function Footer() {
  return (
    <div className='bg-[#93E9BE]'>
      <div className='max-w-[1240px] px-8 mx-auto bg-[#93E9BE]'>
        <div className='max-w-fit mx-auto pt-7'>
          <img className='h-[110px] mx-auto md:inline-flex md:mr-7' src={coco_logo} alt="/" />
          {/* <img className='h-[90px] mx-auto md:inline-flex md:ml-7' src={logo_usm4u_black} alt="/" /> */}
        </div>
      </div>
      <div className='max-w-[1240px] px-8 mx-auto pb-5 text-center bg-[#93E9BE]'>
        <p className='pb-6 text-sm italic text-black'>A centralised finance application integrating our monetary lifestyle with hyper-personalised insights and a pocket buddy.</p>
        <div className='mx-auto inline-flex'>
          <ImMail size={25} className='mr-[6px]' />
          <a href="mailto:usm4u@gmail.com" className='font-medium'>coco.contact@gmail.com</a>
        </div>
      </div>
      <div className='w-full mx-auto py-3 bg-white text-black text-center text-xs font-bold tracking-wide'>
        <p>3Stooges , Malaysia © 2023</p>
      </div>
    </div>
  )
}

export default Footer
