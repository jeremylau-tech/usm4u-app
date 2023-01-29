import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import { Link } from 'react-router-dom'
import { getDocs, collection } from "@firebase/firestore";
import Navbar from '../components/Navbar';

function Activities() {

  const [data, setData] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "activity"))
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
    
    <div className='Activities'>
      <Navbar />
      <div className='flex flex-col text-black text-center bg-white'> {/** TESTING */}
        <h1 className='text-[#F68B1F] md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>Activities</h1>
        <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
          <p className='text-center italic font-medium text-gray-400'>USMians, it is time to participate in some interesting activities!</p>
        </div>
        
        <div className='grid lg:grid-cols-3 justify-center mx-[120px] pb-12'>
        {
              data?.map((data)=>(
                <div className='flex justify-center'>
                    <div className="card w-[340px] bg-base-100 shadow-2xl m-7">
                      <figure><img src="https://scontent-kut2-2.xx.fbcdn.net/v/t39.30808-6/320601357_1404449593426093_9026444688142777961_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGKivPALndWDg63hLHssrHTGLaeK8znh7UYtp4rzOeHtQKmJkVy0gcv8Z6zfal6NVaEIDBo6eqsgpRXqsgCIxHZ&_nc_ohc=6-spOwEKHzYAX_w7of2&_nc_ht=scontent-kut2-2.xx&oh=00_AfARui1BJyp6YmK-QmE-ajCzf4fAZ0cgv6Dn15MwUB3R4g&oe=63D8B5EF" alt="Event" /></figure>
                      <div className="card-body text-justify">
                        <h2 className="card-title">{data.activityName}</h2>
                        <p className="leading-5">{data.activityDate}</p>
                        <div className="card-actions justify-end">
                          <Link to='/ActivityDetail' state={{data: data}}> 

                            <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
            ))
          }     
        </div>
      </div>
    </div>        
  )
}

export default Activities
