import React from "react";
import { useEffect, useState } from "react";
import NavbarSigned from '../components/NavbarSigned';
import { firestore } from "../firebase";
import { updateDoc, collection, getDocs, doc } from "@firebase/firestore";


export default function EditActivity() {
    //state for storing list of activities stored in firebase
    const [data, setData] = useState([]);
    //state for storing document ID to be updated
    const [selectedDocID, setSelectedDocID] = useState("");

    useEffect(() => {
        getActivities()
    }, [])

    //Function to get the activities stored in the database
    const getActivities = async () => {       
        await getDocs(collection(firestore, "activity"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setData(newData);
                console.log(data, newData);                
            })   
    }

    //Once user selects a choice in dropdown column, set the document ID
    const handleChange = (event) => {
        setSelectedDocID(event.target.value)
    }

    //Update once user click save
    const handleUpdate = async(e) => {
        console.log(selectedDocID)
        e.preventDefault();

        let activityData = {
            activityName: e.target.elements["activity name"].value,
            activityVenue: e.target.elements["activity venue"].value,
            activityDate: e.target.elements["activity date"].value,
            activityRegLink: e.target.elements["activity link"].value,
            activityStartTime: e.target.elements["activity start time"].value,
            activityEndTime: e.target.elements["activity end time"].value,
            activityPoster: e.target.elements["activity poster"].value,
        }

        try{
            updateDoc(doc(firestore, "activity", selectedDocID), activityData);
        } catch(e) {
            console.log(e);
        }
        e.target.reset();
    }  

    return(        
        <div>
            <NavbarSigned />
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    <form onSubmit={handleUpdate}>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Select Activity:</span>
                            <select onChange={handleChange} name="action" id="action" className='p-3 flex w-full h-10 rounded-lg text-black'>
                                <option disabled selected>Choose your activity</option>
                                {data.map((data) => (<option value={data.id} key={data.id}>{data.activityName}</option>))}
                            </select>    
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Name:</span>
                            <input type="text" name="activity name" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Venue:</span> 
                            <input type="text" name="activity venue" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Date:</span> 
                            <input type="date" name="activity date" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Registration Link:</span> 
                            <input type="url" name="activity link" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Starting Time:</span>
                            <input type="time" name="activity start time" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Ending Time:</span> 
                            <input type="time" name="activity end time" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Activity Poster:</span> 
                            <input type="file" name="activity poster" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <input type="submit" value="Save" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
        </div>
    )
}