import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppsCard = ({app}) => {
   
    const {title,downloads,ratingAvg,image,id} = app;
    
    return (
        <div>
            <Link to={`/app-details/${id}`}>
            <div className=" border-2 border-gray-200 rounded-xl bg-white shadow p-4">
      {/* Image Placeholder */}
       
      <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4">
       <img  className='w-[100%] h-[100%] object-contain' src={image} alt="" />
      </div>

      {/* Title */}
      <h2 className="text-md font-semibold text-gray-900 mb-2">
        Name: {title}
      </h2>

      {/* Downloads and Rating */}
      <div className="flex items-center justify-between">
        {/* Downloads */}
        <div className="flex items-center space-x-1 bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
            <FaDownload className="text-sm" />
            <span>
                {downloads ? `${downloads.toString().slice(0, 2)}M` : 'N/A'}
            </span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
          <FaStar className="text-sm" />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </div></Link>
        </div>
    );
};

export default AppsCard;