import React from 'react'

function Opportunities() {
  return (
    <div className='Opportunities'>
      <div className='text-black text-center bg-white py-10'> {/** TESTING */}
        <p>Opportunities</p>
        <div className="grid lg:grid-cols-3">
          {/* card */}
          <div className="card w-80 bg-base-100 shadow-2xl m-7">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body text-justify">
              <h2 className="card-title">Youth Entreprenuer Success 2022</h2>
              <p className="leading-5">Please join this if you intersted in Entreprenuer</p>
              <div className="card-actions justify-end">
                <a href='../pages/OpportunitiesDetail'>
                  <button className="btn btn-sm">Read more</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-80 bg-base-100 shadow-2xl m-7">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body text-justify">
              <h2 className="card-title">Varsity Hackathon 2023</h2>
              <p className="leading-5">Its back again in 2023</p>
              <div className="card-actions justify-end">
                <a href='../pages/OpportunitiesDetail'>
                  <button className="btn btn-sm">Read more</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-80 bg-base-100 shadow-2xl m-7">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body text-justify">
              <h2 className="card-title">Varsity Hackathon 2023</h2>
              <p className="leading-5">Its back again in 2023</p>
              <div className="card-actions justify-end">
                <a href='../pages/OpportunitiesDetail'>
                  <button className="btn btn-sm">Read more</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-80 bg-base-100 shadow-2xl m-7">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body text-justify">
              <h2 className="card-title">Varsity Hackathon 2023</h2>
              <p className="leading-5">Its back again in 2023</p>
              <div className="card-actions justify-end">
                <a href='../pages/OpportunitiesDetail'>
                  <button className="btn btn-sm">Read more</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Opportunities
