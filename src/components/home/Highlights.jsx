import React from 'react';

function Highlights() {
  return (
    <div className='w-full py-[80px] px-4 bg-black'>
      <div>
        <h1 className='text-[#F68B1F] md:text-3xl sm:text-2xl text-xl font-bold text-center pb-4'>Highlights @ USM</h1>
      </div>
      <div className='max-w-[1240px] mx-8 md:mx-auto grid md:grid-cols-4 gap-2 md:gap-8 bg-gray-500]'>
        <div className='bg-gray-100 w-full shadow-xl flex flex-col px-4 py-6 my-4 rounded-xl hover:scale-105 duration-300'>
          <div className='text-center font-medium'>
            <h1 className='text-5xl mb-2'>29</h1>
            <h1 className='text-lg'>Ongoing Programs</h1>
          </div>
        </div>
        <div className='bg-gray-100 w-full shadow-xl flex flex-col px-4 py-6 my-4 rounded-xl hover:scale-105 duration-300'>
          <div className='text-center font-medium'>
            <h1 className='text-5xl mb-2'>29</h1>
            <h1 className='text-lg'>Opportunities</h1>
          </div>
        </div>
        <div className='bg-gray-100 w-full shadow-xl flex flex-col px-4 py-6 my-4 rounded-xl hover:scale-105 duration-300'>
          <div className='text-center font-medium'>
            <h1 className='text-5xl mb-2'>29</h1>
            <h1 className='text-lg'>Organizations</h1>
          </div>
        </div>
        <div className='bg-gray-100 w-full shadow-xl flex flex-col px-4 py-6 my-4 rounded-xl hover:scale-105 duration-300'>
          <div className='text-center font-medium'>
            <h1 className='text-5xl mb-2'>29</h1>
            <h1 className='text-lg'>Collaborators</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
