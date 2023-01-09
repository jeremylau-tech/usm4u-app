import React from 'react'

function ActivitiesList() {
  return (
    <div className='Activities'>
      <div className='text-black text-center bg-white py-10'> {/** TESTING */}
        <p>Activities</p>
        {/* card */}
        <div className="card w-96 bg-base-100 shadow-2xl p-6 m-7">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-2xl p-6 m-7">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>        
  )
}

export default ActivitiesList
