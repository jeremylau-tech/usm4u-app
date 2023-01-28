import React, { useState, useEffect } from "react";
import NavbarSigned from '../components/NavbarSigned';
import { firestore } from "../firebase";
import { updateDoc, collection, getDocs, doc } from "@firebase/firestore";


export default function EditOpportunity() {
    //state for storing list of opportunities stored in firebase
    const [data, setData] = useState([]);
    //state for storing document ID to be updated
    const [selectedDocID, setSelectedDocID] = useState("");

    useEffect(() => {
        fetchPost()
    }, [])

    //Function to get the opportunities stored in the database
    const fetchPost = async () => {       
        await getDocs(collection(firestore, "opportunity"))
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

        let opportunityData = {
            opportunityName: e.target.elements["Opportunity name"].value,
            opportunityVenue: e.target.elements["Opportunity venue"].value,
            opportunityDate: e.target.elements["Opportunity date"].value,
            opportunityRegLink: e.target.elements["Opportunity link"].value,
            opportunityPoster: e.target.elements["Opportunity poster"].value,
        }

        try{
            updateDoc(doc(firestore, "opportunity", selectedDocID), opportunityData);
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
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Select Opportunity:</span>
                            <select onChange={handleChange} name="action" id="action" className='p-3 flex w-full h-10 rounded-lg text-black'>
                                <option disabled selected>Choose Opportunity</option>
                                {data.map((data) => (<option value={data.id} key={data.id}>{data.opportunityName}</option>))}
                            </select>    
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Name:</span>
                            <input type="text" name="Opportunity name" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Venue:</span> 
                            <input type="text" name="Opportunity venue" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Date:</span> 
                            <input type="date" name="Opportunity date" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Registration Link:</span> 
                            <input type="url" name="Opportunity link" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Opportunity Poster:</span> 
                            <input type="file" name="Opportunity poster" className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <input type="submit" value="Save" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
        </div>
    )
}
