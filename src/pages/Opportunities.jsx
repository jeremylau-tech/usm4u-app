import React from 'react'
import { Link } from 'react-router-dom'

function Opportunities() {
  return (
    <div className='Opportunities'>
      <div className='text-black text-center bg-white py-10'> {/** TESTING */}
        <div className="grid lg:grid-cols-3">
          {/* card */}
          <div className="card w-80 bg-base-100 shadow-2xl m-7">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body text-justify">
              <h2 className="card-title">Youth Entreprenuer Success 2022</h2>
              <p className="leading-5">Please join this if you intersted in Entreprenuer</p>
              <div className="card-actions justify-end">
                <Link to='/OpportunityDetail'>
                  <button  className="btn btn-sm">
                    Read more
                    <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opportunities
