import React, {useState, useEffect} from 'react'
import { firestore } from '../firebase'
import { Link } from 'react-router-dom'
import { getDocs, collection } from "@firebase/firestore";

function Opportunities() {

  const [opportunities, setOpportunities] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "feedback"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setOpportunities(newData);
            console.log(opportunities, newData);                
        })   
  }

  useEffect(()=>{
    fetchPost();
  }, [])

  return (
    <div className='Opportunities'>
      <div className='flex flex-col text-black text-center bg-white'> {/** TESTING */}
        <h1 className='text-[#F68B1F] md:text-4xl sm:text-3xl text-2xl font-bold mt-10 mb-2'>Opportunities</h1>
        <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
          <p className='text-center italic font-medium text-gray-400'>Looking for some opportunities? Don't worry, we've got you!</p>
        </div>

        <div className="grid lg:grid-cols-3">
          {
              opportunities?.map((opportunity)=>(
                <div>
                    {/* card */}
                    <div className="card w-80 bg-base-100 shadow-2xl m-7">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body text-justify">
                        <h2 className="card-title">{opportunity.name}</h2>
                        <p className="leading-5">{opportunity.message}</p>
                        <div className="card-actions justify-end">
                          <Link to='/ActivityDetail'>
                            <button  className="btn btn-sm">
                              Read more
                              <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
