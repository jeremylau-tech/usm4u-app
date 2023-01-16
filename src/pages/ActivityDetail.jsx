import React from "react";
import { useLocation } from "react-router-dom";

function ActivityDetail() {
    const location = useLocation();
    const data = location.state?.data;
    return(
        <div className="ActivityDetail">
            <div className='text-black bg-white'>
                <h1 className="text-4xl text-center font-medium p-5">{data ? data.activityName : "Go to Home"}</h1>
                <h2 className="text-2xl font-normal pl-5 pb-3">{data ? data.activityDate : "Go to Home"}</h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">{data ? data.activityStartTime : "Go to Home"}</h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">{data ? data.activityEndTime : "Go to Home"}</h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">{data ? data.activityVenue : "Go to Home"}</h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">{data ? data.activityRegLink : "Go to Home"}</h2>
            </div>
            <div className="p-5 bg-white">
                <img className="rounded-md mx-auto" src={data ? data.activityPoster : "Go to Home"} alt="Poster"/>
            </div>
        </div>        
    )
}

export default ActivityDetail