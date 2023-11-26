import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import { Link } from 'react-router-dom'
import { getDocs, collection } from "@firebase/firestore";
import Navbar from '../components/Navbar';

function Finance() {

  const [data, setData] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "finance"))
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
    <div className='Finance'>
      <Navbar />
      <div className='flex flex-col text-black text-center bg-white'> {/** TESTING */}
        <h1 className='text-[#008080] md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>Finance</h1>
        <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
          <p className='text-center italic font-medium text-gray-400'>Looking for some opportunities? Don't worry, we've got you!</p>
        </div>

        <div className=''>
          {
              data?.map((data)=>(
                
                <div className='grid lg:grid-cols-3 justify-center mx-[120px] pb-12'>
              
                
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-blue-200">
                  <div className="card-body text-justify">
                    <h2 className="card-title">ASNB Savings</h2>
                    <p className="leading-5">RM{data.asnb}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-red-200">
                  <div className="card-body text-justify">
                    <h2 className="card-title">Hong Leong Bank</h2>
                    <p className="leading-5">RM{data.hongleong}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-purple-200">
                  <div className="card-body text-justify">
                    <h2 className="card-title">Ethereum</h2>
                    <p className="leading-5">RM{data.ethereum}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-yellow-200">
                  <div className="card-body text-justify">
                    <h2 className="card-title">MAE</h2>
                    <p className="leading-5">RM{data.mae}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-blue-200">
                  <div className="card-body text-justify">
                    <h2 className="card-title">TnG</h2>
                    <p className="leading-5">RM{data.asnb}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-green-200">
                  <div className="card-body text-justify">
                    <h2 className="card-title">Grab</h2>
                    <p className="leading-5">RM{data.grab}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
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

export default Finance