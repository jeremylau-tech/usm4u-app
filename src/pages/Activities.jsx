import React from 'react'
import { Link } from 'react-router-dom'

function Activities() {
  return (
    <div className='Activities'>
      <div className='text-black text-center bg-white py-10'> {/** TESTING */}
        <div className="grid lg:grid-cols-3">
          {/* card */}
          <div className="card w-80 bg-base-100 shadow-2xl m-7">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body text-justify">
              <h2 className="card-title">Youth Entreprenuer Success 2022</h2>
              <p className="leading-5">Please join this if you intersted in Entreprenuer</p>
              <div className="card-actions justify-end">
                <Link to='/ActivityDetail'>
                  <button  className="btn btn-sm">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>        
  )
}

export default Activities
