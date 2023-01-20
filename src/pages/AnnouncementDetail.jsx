import React from 'react'
import { useLocation } from "react-router-dom";

function AnnouncementDetail() {
  const location = useLocation();
  const data = location.state?.data;
  
  return (
    <div className='AnnouncementDetail'>
      <div className='text-black bg-white'>
        <div className='flex flex-col text-black text-center bg-[#F68B1F] p-7'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>{data ? data.name : "Go to Home"}</h1>
        </div>
        <h2 className="text-2xl font-bold pl-5 pb-3 pt-5">Date</h2>
        <p className="text-xl pl-5 pb-3 mb-5">{data ? data.date : "Go to Home"}</p>
        <h2 className="text-2xl font-bold pl-5 pb-3">Time</h2>
        <p className="text-xl pl-5 pb-3 mb-5">{data ? data.time : "Go to Home"}</p>
        <h2 className="text-2xl font-bold pl-5 pb-3">Venue</h2>
        <p className="text-xl pl-5 pb-3 mb-5">{data ? data.venue : "Go to Home"}</p>
        <h2 className="text-2xl font-bold pl-5 pb-3">Details</h2>
        <p className="text-xl pl-5 pb-3 mb-5">{data ? data.fullDesc : "Go to Home"}</p>
        <div className="pl-5 pb-3">
          <a href={data ? data.activityRegLink : "Go to Home"} className="btn" > Register Now</a>
        </div>
    </div>
    </div>
  )
}

export default AnnouncementDetail
