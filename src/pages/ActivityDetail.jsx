import React from "react";

function ActivityDetail() {
    return(
        <div className="ActivityDetail">
            <div className='text-black bg-white'>
                <h1 className="text-4xl text-center font-medium p-5">Youth Entreprenuer Success 2022</h1>
                <h2 className="text-2xl font-normal pl-5 pb-3">Venue: </h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">Date: </h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">Link: </h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">Start Time: </h2>
                <h2 className="text-2xl font-normal pl-5 pb-3">End Time: </h2>
            </div>
            <div className="p-5 bg-white">
                <img className="rounded-md mx-auto" src="https://placeimg.com/400/225/arch" alt="Poster"/>
            </div>
        </div>        
    )
}

export default ActivityDetail