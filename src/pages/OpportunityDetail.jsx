import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';

function OpportunityDetail() {
    const location = useLocation();
    const data = location.state?.data;
    return(
        <div className="OpportunityDetail">
            <Navbar />
            <div className='text-black bg-white pb-12'>
                <div className='flex flex-col text-black text-center h-[90px] p-7'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mt-3 mb-2 mx-[80px]'>{data ? data.opportunityName : "Go to Home"}</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-8 mx-[100px]'>
                    <div className="py-6 bg-white">
                        <img className="rounded-md mx-auto h-[300px]" src="https://placeimg.com/400/225/arch" alt="Poster"/>
                    </div>
                    <div className='grid gap-4 my-auto mr-8'>
                        <div className='flex gap-2 text-lg'>
                            <h2 className="font-bold">Date :</h2>
                            <p className="">{data ? data.opportunityDate : "Go to Home"}</p>
                        </div>
                        <div className='flex gap-2 text-lg'>
                            <h2 className="font-bold">Venue :</h2>
                            <p className="">{data ? data.opportunityVenue : "Go to Home"}</p>
                        </div>
                        <div className="mt-4 mb-2">
                            <a href={data ? data.opportunityRegLink : "Go to Home"}>
                                <button className='bg-[#F68B1F] w-[140px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
                                Apply Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default OpportunityDetail

/*
<div className='text-black bg-white'>
                <div className='flex flex-col text-black text-center bg-[#F68B1F] p-7'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>{data ? data.opportunityName : "Go to Home"}</h1>
                </div>
                <h2 className="text-2xl font-bold pl-5 pb-3 pt-5">Date</h2>
                <p className="text-xl pl-5 pb-3 mb-5">{data ? data.opportunityDate : "Go to Home"}</p>
                <h2 className="text-2xl font-bold pl-5 pb-3">Venue</h2>
                <p className="text-xl pl-5 pb-3 mb-5">{data ? data.opportunityVenue : "Go to Home"}</p>
                <div className="pl-5 pb-3">                    
                    <a href={data ? data.opportunityRegLink : "Go to Home"}>
                                <button className='bg-[#F68B1F] w-[140px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
                                Register Now
                                </button>
                            </a>
                </div>
            </div>
            <div className="p-5 bg-white">
                <img className="rounded-md mx-auto" src="https://placeimg.com/400/225/arch" alt="Poster"/>
            </div>
*/