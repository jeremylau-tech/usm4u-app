import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import { Link } from 'react-router-dom'
import { getDocs, collection } from "@firebase/firestore";
import Navbar from '../components/Navbar';

function Opportunities() {

  const [data, setData] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "opportunity"))
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
    <div className='Opportunities'>
      <Navbar />
      <div className='flex flex-col text-black text-center bg-white'> {/** TESTING */}
        <h1 className='text-[#F68B1F] md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>Opportunities</h1>
        <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
          <p className='text-center italic font-medium text-gray-400'>Looking for some opportunities? Don't worry, we've got you!</p>
        </div>

        <div className='grid lg:grid-cols-3 justify-center mx-[120px] pb-12'>
          {
              data?.map((data)=>(
                <div className='flex justify-center'>
                    {/* card */}
                    <div className="card w-[340px] bg-base-100 shadow-2xl m-7">
                      <figure><img src="https://scontent-kut2-2.xx.fbcdn.net/v/t39.30808-6/319046112_682891436556532_4453730902663629266_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHl1KwBzn8ML3JEfbSgj8ey9i1pD7t7aRr2LWkPu3tpGjoM-JK3MaM7-5ukPLC33qhoAgOhmZoLT6j-oyT1wycd&_nc_ohc=7BZAChEJBkoAX9ZQWwY&_nc_ht=scontent-kut2-2.xx&oh=00_AfC8BPPAcZMHe75ckgs7KKiP7A3ix2s-7ncrYYlw6Q1bRQ&oe=63D93F6F" alt="Shoes" /></figure>
                      <div className="card-body text-justify">
                        <h2 className="card-title">{data.opportunityName}</h2>
                        <p className="leading-5">{data.opportunityDate}</p>
                        <div className="card-actions justify-end">
                          <Link to='/OpportunityDetail' state={{data: data}}>
                            
                            {/**
                            <button  className="btn btn-sm">
                              Read more
                              <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            */}

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

export default Opportunities