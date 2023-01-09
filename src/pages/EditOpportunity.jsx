import React from "react";
export default function EditOpportunity() {
    return(
        <div>
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className="flex justify-center">
                    <select className="w-96 h-16 mb-20 text-xl border-orange-500 border-4 rounded-lg text-black focus:ring-4 focus:outline-none font-medium px-4 py-2.5 text-center inline-flex items-center" name="action" id="action">
                        <option disabled selected>Choose your action</option>
                        <option value="Create"><a href="/CreateOpportunity"></a>Create Opportunity</option>
                        <option value="Edit"><a href="/EditOpportunity"></a>Edit Opportunity</option>
                    </select>
                </div>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    <form>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Select Opportunity:</span>
                            <select name="action" id="action" className='p-3 flex w-full h-10 rounded-lg text-black'>
                                <option disabled selected>Choose Opportunity</option>
                                {/* <option value="Create">Create Opportunity</option> */}
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