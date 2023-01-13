import React from 'react'

function InfoHub() {
  return (
    <div className='InfoHub'>
      {/** Page title and desciption */}
      <div className='flex flex-col justify-center text-center bg-white'>
        <h1 className='text-[#F68B1F] md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>InfoHub</h1>
        <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
          <p className='text-center italic font-medium text-gray-400'>Here, we provide everything you need as a USMian!</p>
        </div>
      </div>
      {/** Page content */}
      <div className='text-black text-center bg-white py-10'>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg border border-gray-200 md:w-[500px] w-[450px] text-gray-900">
            <a href="https://maps.usm.my/main/" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Campus Map
            </a>
            <a href="https://www.myusminfo.com/usminfo/facilities/shuttle-bus" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Shuttle Bus
            </a>
            <a href="https://www.myusminfo.com/usminfo/facilities/banking" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Banking Services
            </a>
            <a href="https://www.myusminfo.com/usminfo/facilities/panel-clinics" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Panel Clinics
            </a>
            <a href="https://www.myusminfo.com/usminfo/facilities/libraries" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Libraries
            </a>
            <a href="https://www.myusminfo.com/usminfo/facilities/sports" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Sports and Recreation Facilities
            </a>
            <a href="https://www.myusminfo.com/usminfo/links" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Useful Links
            </a>
            <a href="https://drive.google.com/file/d/1vIWMFbVRjPrtclC1G_gAW5NfBNLQVt-d/view?usp=sharing" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              Academic Calendar
            </a>
            <a href="https://www.myusminfo.com/usminfo/academic-related/schools-faqs/com-usm" className="block px-6 py-3 border-gray-200 w-full hover:bg-gray-100 focus:outline-none focus:ring-0 transition duration-200 cursor-pointer">
              FAQs (School of Computer Sciences)
            </a> {/** last list - w/o border-b */}
          </div>
        </div>
        <div className='flex text-xs italic my-6 mx-6 justify-center text-gray-400'>
          <p>© USMinfo | Your Campus 101 Guide</p>
        </div>
      </div>
    </div>
  )
}

export default InfoHub
