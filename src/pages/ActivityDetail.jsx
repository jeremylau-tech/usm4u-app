import React from "react";
import { useLocation } from "react-router-dom";

function ActivityDetail() {
    const location = useLocation();
    const data = location.state?.data;
    return(
        <div className="ActivityDetail">
            <div className='text-black bg-white pb-12'>
                <div className='flex flex-col text-black text-center h-[90px] p-7'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mt-3 mb-2 mx-[80px]'>{data ? data.activityName : "Go to Home"}</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-8 mx-[100px]'>
                    <div className="py-6 bg-white">
                        <img className="rounded-md mx-auto h-[300px]" src="https://placeimg.com/400/225/arch" alt="Poster"/>
                    </div>
                    <div className='grid gap-4 my-auto mr-8'>
                        <div className='flex gap-2 text-lg'>
                            <h2 className="font-bold">Date :</h2>
                            <p className="">{data ? data.activityDate : "Go to Home"}</p>
                        </div>
                        <div className='flex gap-2 text-lg'>
                            <h2 className="font-bold">Start Time :</h2>
                            <p className="">{data ? data.activityStartTime : "Go to Home"}</p>
                        </div>
                        <div className='flex gap-2 text-lg'>
                            <h2 className="font-bold">End Time :</h2>
                            <p className="">{data ? data.activityEndTime : "Go to Home"}</p>
                        </div>
                        <div className='flex gap-2 text-lg'>
                            <h2 className="font-bold">Venue :</h2>
                            <p className="">{data ? data.activityVenue : "Go to Home"}</p>
                        </div>
                        <div className="mt-4 mb-2">
                            <a href={data ? data.activityRegLink : "Go to Home"}>
                                <button className='bg-[#F68B1F] w-[140px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
                                Register Now
                                </button>
                            </a>
                        </div>
                    </div>
{/**
                    <h2 className="text-xl font-bold pl-5 pb-3 pt-5">Date</h2>
                    <p className="text-md pl-5 pb-3 mb-5">{data ? data.activityDate : "Go to Home"}</p>
                    <h2 className="text-xl font-bold pl-5 pb-3">Start Time</h2>
                    <p className="text-md pl-5 pb-3 mb-5">{data ? data.activityStartTime : "Go to Home"}</p>
                    <h2 className="text-xl font-bold pl-5 pb-3">End Time</h2>
                    <p className="text-md pl-5 pb-3 mb-5">{data ? data.activityEndTime : "Go to Home"}</p>
                    <h2 className="text-xl font-bold pl-5 pb-3">Venue</h2>
                    <p className="text-md pl-5 pb-3 mb-5">{data ? data.activityVenue : "Go to Home"}</p>
                    <div className="pl-5 pb-3">
                        <a href={data ? data.activityRegLink : "Go to Home"} className="btn" > Register Now</a>
                    </div> */}
                </div>
            </div>
        </div>        
    )
}

export default ActivityDetail