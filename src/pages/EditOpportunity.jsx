import React, { useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";

export default function EditOpportunity() {

    // const oppName = oppData.map((doc)=>{
    //    {doc.opportunityName}
    // })
    // console.log(oppName)

    // console.log(oppData.map((doc)=>{
    //     doc.data.opportunityName
    // }))

    // {oppData?.map((data) => (
    //     console.log(data.data.opportunityName)
    //     ))}

    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        getOpportunites()
    }, [])

    const getOpportunites = async() => {
        await getDocs(collection(firestore, 'opportunity'))
            .then(response => {
                console.log(response)
                const opps = response.docs.map(opp => ({
                    data: opp.data(), 
                    id: opp.id, 
                }))
                setOpportunities(opps)
            }).catch(error => console.log(error.message))
    }



    return(
        <div>
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    <form>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Select Opportunity:</span>
                            <select name="action" id="action" className='p-3 flex w-full h-10 rounded-lg text-black'>
                                <option disabled selected>Choose Opportunity</option>
                                {opportunity.map(opportunity => <option key={opportunity.id}>{opportunity.opportunityName}</option>)}
                                {/* <option>{oppName}</option> */}
                                {/* <option value="Create">Create Opportunity</option> */}
                                {/* <ul>

                                    {oppData?.map((data) => (
                                        console.log(...data)
                                        ))}
                                </ul> */}
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