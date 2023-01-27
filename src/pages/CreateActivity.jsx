import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import ActivitiesCreated from "../components/activities/ActivitiesCreated";

export default function CreateActivity() {
    //state for pop up window to tell user activity sucessfully created
    const [showModal, setShowModal] = useState(false)

    //ref for activity data
    const activityNameRef = useRef();
    const activityVenueRef = useRef();
    const activityDateRef = useRef();
    const activityRegLinkRef = useRef();
    const activityStartTimeRef = useRef();
    const activityEndTimeRef = useRef();
    const activityPosterRef = useRef();
    const ref = collection(firestore, "activity");

    //when user close pop up window, set visibility to false
    const handleOnClose = () => setShowModal(false);

    //when user submit input form, add the data to database
    const handleSave = async(e) => {
        setShowModal(true)
        e.preventDefault();

        let activityData = {
            activityName: activityNameRef.current.value, 
            activityVenue: activityVenueRef.current.value, 
            activityDate: activityDateRef.current.value, 
            activityRegLink: activityRegLinkRef.current.value, 
            activityStartTime: activityStartTimeRef.current.value, 
            activityEndTime: activityEndTimeRef.current.value, 
            activityPoster: activityPosterRef.current.value,
        }

        try{
            addDoc(ref, activityData);
        } catch(e) {
            console.log(e);
        }

        e.target.reset();
    }

    return(
        <div>
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    {/* Input form to obtain student activities details */}
                    <form onSubmit={ handleSave }>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Name:</span>
                            <input type="text" name="activity name" ref={activityNameRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Venue:</span> 
                            <input type="text" name="activity venue" ref={activityVenueRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Date:</span> 
                            <input type="date" name="activity date" ref={activityDateRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Registration Link:</span> 
                            <input type="url" name="activity link" ref={activityRegLinkRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Starting Time:</span>
                            <input type="time" name="activity start time" ref={activityStartTimeRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Ending Time:</span> 
                            <input type="time" name="activity end time" ref={activityEndTimeRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Poster:</span> 
                            <input type="file" name="activity poster" ref={activityPosterRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <input type="submit" value="Submit" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
            <div>
                {/* Component for pop up window */}
                <ActivitiesCreated onClose={ handleOnClose } visible={showModal}/>
            </div>
        </div>
    )
}