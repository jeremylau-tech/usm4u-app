import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import { Link } from 'react-router-dom'
import { getDocs, collection } from "@firebase/firestore";
import Navbar from '../components/Navbar';

function Score() {

  const [data, setData] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "score"))
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

  const calculateSum = () => {
    return data.reduce((sum, item) => {
      // Convert strings to numbers before adding to the sum
      const salaValue = parseFloat(item.sala) || 0;
      const fnbValue = parseFloat(item.fnb) || 0;
      const utiValue = parseFloat(item.uti) || 0;
  
      return sum + salaValue + fnbValue + utiValue; // Add other properties as needed
    }, 0);
  };
  
  return (
    
    <div className='Score'>

      <Navbar />
      <div className='flex flex-col text-black text-center bg-white'> {/** TESTING */}
        <h1 className='text-[#008080] md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>Score</h1>
        <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
          <p className='text-center italic font-medium text-gray-400'>Your Financial Score :D</p>
        </div>

        <div className=''>
          {
              data?.map((data)=>(
              
                <div className='grid lg:grid-cols-3 justify-center mx-[120px] pb-12 shadow-2xl'>
                
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-green-300">
                  <div className="card-body text-justify">
                    <h2 className="card-title">ASNB Dividend</h2>
                    <p className="leading-5">RM{data.divi}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-green-300">
                  <div className="card-body text-justify">
                    <h2 className="card-title">Salary </h2>
                    <p className="leading-5">RM{data.sala}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>

                <br/>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-red-300">
                  <div className="card-body text-justify">
                    <h2 className="card-title">FnB</h2>
                    <p className="leading-5">RM{data.fnb}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-2xl m-7 bg-red-300">
                  <div className="card-body text-justify">
                    <h2 className="card-title">Utilities</h2>
                    <p className="leading-5">RM{data.uti}</p>
                    <div className="card-actions justify-end">
                      <Link to='/ActivityDetail' state={{data: data}}> 
                      </Link>
                    </div>
                  </div>
                </div>
                <h1><b>Integrated with ❤</b></h1>
                <h1>{data.hari}</h1>
            </div>
                
            ))
          }
        </div>

        
      </div>
    </div>
  )
}

export default Score