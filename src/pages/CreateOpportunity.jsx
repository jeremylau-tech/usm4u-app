import React, { useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import OpportunitiesCreated from "../components/activities/OpportunitiesCreated";

export default function CreateOpportunity() {
    const [showModal, setShowModal] = useState(false)

    const opportunityNameRef = useRef();
    const opportunityVenueRef = useRef();
    const opportunityDateRef = useRef();
    const opportunityRegLinkRef = useRef();
    const opportunityPosterRef = useRef();
    const ref = collection(firestore, "opportunity");

    const handleOnClose = () => setShowModal(false);
    const handleSave = async(e) => {
        setShowModal(true)
        e.preventDefault();

        let opportunityData = {
            opportunityName: opportunityNameRef.current.value, 
            opportunityVenue: opportunityVenueRef.current.value, 
            opportunityDate: opportunityDateRef.current.value, 
            opportunityRegLink: opportunityRegLinkRef.current.value, 
            opportunityPoster: opportunityPosterRef.current.value,
        }

        try{
            addDoc(ref, opportunityData);
        } catch(e) {
            console.log(e);
        }

        e.target.reset();
    }

    return(
        <div>
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    <form onSubmit={ handleSave }>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Name:</span>
                            <input type="text" name="Opportunity name" ref={opportunityNameRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Venue:</span> 
                            <input type="text" name="Opportunity venue"ref={opportunityVenueRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Date:</span> 
                            <input type="date" name="Opportunity date" ref={opportunityDateRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Registration Link:</span> 
                            <input type="url" name="Opportunity link" ref={opportunityRegLinkRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Poster:</span> 
                            <input type="file" name="Opportunity poster" ref={opportunityPosterRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <input type="submit" value="Submit" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
            <div>
                <OpportunitiesCreated onClose={ handleOnClose } visible={showModal} />
            </div>
        </div>
    )
}