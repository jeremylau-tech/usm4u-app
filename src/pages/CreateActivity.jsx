import React from "react";
export default function CreateActivity() {
    return(
        <div>
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className="flex justify-center">
                    <select className="w-96 h-16 mb-20 text-xl border-orange-500 border-4 rounded-lg text-black focus:ring-4 focus:outline-none font-medium px-4 py-2.5 text-center inline-flex items-center" name="action" id="action">
                        <option disabled selected>Choose your action</option>
                        <option value="Create"><a href="/CreateActivity"></a>Create Activity</option>
                        <option value="Edit"><a href="/EditActivity"></a>Edit Activity</option>
                    </select>
                </div>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    <form>
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
                        <input type="submit" value="Submit" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
        </div>
    )
}