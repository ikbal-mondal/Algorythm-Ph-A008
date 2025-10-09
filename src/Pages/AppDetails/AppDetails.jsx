import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MdOutlineFileDownload, MdOutlineReviews } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import RechartCard from './RechartCard';


const AppDetails = () => {
     const {appsID} = useParams()

      const [appsData, setAppsData] = useState([])
     
        useEffect(() => {
           fetch('../appsData.json')
           .then(res => res.json())
        .then(data => setAppsData(data),
          
           )
          
        }, [])


          const appDetails = appsData?.find((appDetail) => appDetail.id === parseInt(appsID));

            const {image,title,companyName,downloads,ratingAvg,reviews,size,description} = appDetails || {}



    return (
        <div className='max-w-6xl mx-auto'>
      
      <div className="flex items-center my-12  border-1 border-gray-300 gap-5  p-6 bg-white rounded-t-lg">
        {/* App Icon */}
        <div className="w-[30%]  h-[100%]  flex items-center justify-center">
            <img src={image}  alt="App Icon" className=' w-full h-full border rounded'  />
        </div>
        
        {/* Title and Developer */}
        <div className='  space-y-2'>
            <h1 className="lg:text-5xl text-3xl  font-semibold text-gray-800">{title}</h1>
            <p className="text-xl text-gray-500">Developed by <span className="text-blue-600 text-xl">{companyName}</span></p>
         <hr className='w-full my-5 text-gray-300' />
            {/* Stats */}
            <div className="flex justify-content-center items-center   space-x-8">
                {/* Downloads */}
                <div className="flex flex-col items-center space-y-2">
                    <MdOutlineFileDownload className='text-4xl font-bold ' />
                    <span className="text-lg text-gray-500">Downloads</span>
                    <span className="text-3xl font-bold text-gray-800"> {downloads ? `${downloads.toString().slice(0, 2)}M` : 'N/A'}</span>
                </div>
                {/* Average Ratings */}
                <div className="flex flex-col items-center space-y-2">
                    <FaStar className='text-3xl font-bold' />
                    <span className="text-lg text-gray-500">Average Ratings</span>
                    <span className="text-3xl font-bold   "> {ratingAvg}</span>
                </div>
                {/* Total Reviews */}
                <div className="flex flex-col items-center space-y-2">
                    <MdOutlineReviews className='text-3xl font-bold' />
                    <span className="text-xl text-gray-500 ">Total Reviews</span>
                    <span className="text-3xl font-bold ">{reviews}</span>
                </div>
            </div>

            {/* Install Button */}
            <button className=" mt-2 bg-green-400 hover:bg-green-600 text-white font-bold text-xl py-3 px-6 rounded text-sm transition duration-150">
                Install Now ({size} MB)
            </button>
        </div>
        
    </div>
 <RechartCard ratingsData={appDetails?.ratings}></RechartCard>
          <div className="my-4 p-4 border-2 border-gray-100">
         <p><span className='text-lx underline font-bold'> Description:</span>{description}</p>
       </div>
      {/*  */}
       
     

      

        </div>
    );
};

export default AppDetails;