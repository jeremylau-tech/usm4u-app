import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { firestore } from '../../firebase'
import { getDocs, collection } from "@firebase/firestore";

function Announcement() {
  const [data, setData] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "announcement"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setData(newData);
            console.log(data, newData);                
        })   
  }

  useEffect(()=>{
    fetchPost();
  }, [])

  return (
    <div className='w-full py-16 lg:px-[200px] px-[50px] text-white text-center bg-white'>
      <div>
        <h1 className='text-[#F68B1F] md:text-3xl sm:text-2xl text-xl font-bold text-center'>Announcement</h1>
      </div>
      <div className='text-black my-5'>
      {
        data?.map((data)=>(
        <div className='bg-gray-200 md:rounded-xl rounded-lg shadow-xl my-10'>
          <div className='md:px-[80px] px-[30px] pt-10 grid lg:grid-cols-2 lg:gap-8 gap-2'>
            {/** <h1 className='font-medium text-lg lg:text-left'>MPP Election Day</h1>  {/** title */}
            <h1 className='font-medium text-lg lg:text-left'>{data.name}</h1>  {/** title */}
            <h1 className='font-medium text-md lg:text-right'>[ {data.date} ]</h1>  {/** date */}
          </div>
          <div className='md:px-[80px] px-[40px] md:mb-3 mb-5 md:mt-3 mt-6 text-justify'>
            {/** <p>All students are required to vote at Dewan Pelajar from 8am - 6pm.</p>  {/** details */}
            <p>{data.shortDesc}</p>  {/** details */}
          </div>
          <div className='px-[80px] pt-5 pb-10 flex justify-center'>    {/** button */}
            <Link to='/AnnouncementDetail' state={{data: data}} className='w-[110px] h-[45px]'>
              <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
                Read More


                {/** 21/1 - testing 
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>/
*/}

              </button>
            </Link>
          </div>
        </div>
        ))
      }        
      </div>
    </div>
  )
}

export default Announcement