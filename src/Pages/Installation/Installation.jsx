import { DownloadIcon, StarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
  // Use the description and image data you previously generated
  const installApp = JSON.parse(localStorage.getItem("installApp")) || [];
 

  const [sortOrder, setSortOrder] = useState('size'); // 'size', 'name', 'rating', 'downloads'

   const handleUninstall = (id) => {
    const newUnInstall = installApp.filter((item) => item.id !== id);
        localStorage.setItem("installApp", JSON.stringify(newUnInstall));
        
        window.location.reload();
         toast.success('Uninstalled This App')
  };

  const sortApps = (apps) => {
    switch (sortOrder) {
      case 'size':
        return [...apps].sort((a, b) => a.size - b.size);
      case 'name':
        return [...apps].sort((a, b) => a.title.localeCompare(b.title));
      case 'rating':
        return [...apps].sort((a, b) => b.ratingAvg - a.ratingAvg);
      case 'downloads':
        return [...apps].sort((a, b) => b.reviews - a.reviews); // Using 'reviews' as downloads for simplicity
      default:
        return apps;
    }
  };

  const formattedApps = sortApps(installApp);

  return (
    <div className=" bg-gray-50 p-4 sm:p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Your Installed Apps
          </h1>
          <p className="text-base text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header Section */}
        

        {/* Info Bar & Sort */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700 font-semibold">{installApp.length} Apps Found</p>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="size">Sort By Size</option>
              <option value="name">Sort By Name</option>
              <option value="rating">Sort By Rating</option>
              <option value="downloads">Sort By Downloads</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* App List */}
        <div className="space-y-4">
          {formattedApps.length > 0 ? (
            formattedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* App Icon (Placeholder box, replace with actual image) */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  {app.image ? (
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500 text-xs">App Icon</span>
                  )}
                </div>

                {/* App Details */}
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <DownloadIcon />
                    <span className="mr-3">
                      {app.reviews >= 1000000
                        ? `${(app.reviews / 1000000).toFixed(0)}M`
                        : app.reviews >= 1000
                        ? `${(app.reviews / 1000).toFixed(0)}K`
                        : app.reviews}
                    </span>
                    <StarIcon />
                    <span className="mr-3">{app.ratingAvg}</span>
                    <span className="text-gray-500">{app.size} MB</span>
                  </div>
                </div>

                {/* Uninstall Button */}
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
           <div className="">
               
             <p className="text-center text-gray-500 py-8 font-bold text-xl">All Installed Apps Show Here. <span className='text-blue-500 font-bold text-xl'>Not installed any Apps</span> .</p>
           </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;