import React, { useEffect, useState } from 'react';
import AppsCard from '../../Components/AppsCard/AppsCard';

const Apps = () => {

    const [appsData, setAppsData] = useState([])

   useEffect(() => {
      fetch('appsData.json')
      .then(res => res.json())
      .then(data =>setAppsData(data)
      )
     

   }, [])

    return (
        <div>
            <div className="flex mt-16 lg:w-5xl mx-auto justify-between items-center">

                <div className="">
                  <h2 className='text-2xl font-bold'> ({appsData.length})  <span>Apps Found</span></h2>
                </div>
                <div className="">
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
                </div>

            </div>
            <div className=" lg:w-5xl mt-2 container  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {
                appsData.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
            }
           </div>
        </div>
    );
};

export default Apps;