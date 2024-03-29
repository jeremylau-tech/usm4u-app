import React from 'react';
import Typed from 'react-typed';
import bgb_usm from '../../assets/bgb-usm.jpg';
import logo_usm4u_white from '../../assets/logo-usm4u-white.png'; //update
import coco_logo from '../../assets/c.jpg';

function Hero() {
  return (
    <div className='text-white'>
      {/* <div classname='bg-white'>
        <img className='h-[400px] w-full object-cover' src={bgb_usm} alt="/" />
      </div> */}
      <div className='max-w-[900px] w-full mx-auto my-14 text-center flex flex-col justify-center'>
        <img className='w-[300px] mx-auto' src={coco_logo} alt="/" />
        <p className='md:text-base sm:text-sm text-xs font-medium text-gray-400'>COCO : REVOLUTIONIZING YOUR FINANCIAL JOURNEY</p>
        <p className='md:text-lg sm:text-base text-sm font-medium italic py-10 px-3 text-[#008080]'>A centralised finance application integrating 
our monetary lifestyle with hyper-personalised insights and a pocket buddy.</p>
        <div className='flex justify-center items-center'>
          <p className='md:text-xl sm:text-lg text-base font-semibold'>#</p>
          <Typed
          className='md:text-2xl sm:text-xl text-lg font-bold'
          strings={['CoCo', 'CompleteCoverage']}
          typeSpeed={120}
          backSpeed={140}
          loop />
        </div>
      </div>
    </div>
  )
}

export default Hero
