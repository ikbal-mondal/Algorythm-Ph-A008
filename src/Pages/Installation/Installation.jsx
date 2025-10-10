import { DownloadIcon, StarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import LocalSpinner from '../../Components/LocalSpinner'; 

const Installation = () => {
 
  const allInstalledApps = JSON.parse(localStorage.getItem("installApp")) || [];
  const installApp = [...allInstalledApps].reverse(); 
 
  const [sortOrder, setSortOrder] = useState('size'); 
  const [isUninstalling, setIsUninstalling] = useState(false); 
  const [listKey, setListKey] = useState(0); 

  const handleUninstall = (id) => {
      setIsUninstalling(true);

      setTimeout(() => {
         
          const originalApps = JSON.parse(localStorage.getItem("installApp")) || [];
          const newUnInstall = originalApps.filter((item) => item.id !== id);
          localStorage.setItem("installApp", JSON.stringify(newUnInstall));
          
          setListKey(prev => prev + 1);
           
          toast.info('Uninstalled successfully');
          setIsUninstalling(false);
      }, 500); 
  };
const sortApps = (apps) => {
  switch (sortOrder) {
    case "size":
      return [...apps].sort((a, b) => a.size - b.size);

    case "name":
      return [...apps].sort((a, b) => a.title.localeCompare(b.title));

    case "rating":
      return [...apps].sort((a, b) => b.ratingAvg - a.ratingAvg);

    case "downloads-desc": 
      return [...apps].sort((a, b) => b.downloads - a.downloads);

    case "downloads-asc": 
      return [...apps].sort((a, b) => a.downloads - b.downloads);

    default:
      return apps;
  }
};


  const formattedApps = sortApps(installApp);

  return (
    <div className=" bg-gray-50 p-4 sm:p-6 md:p-8 min-h-screen">
        <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                Your Installed Apps
            </h1>
            <p className="text-base text-gray-600">
                Manage the applications currently installed on your device.
            </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-6">
       
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <p className="text-gray-700 font-semibold">{installApp.length} Apps Installed</p>
                <div className="relative">
                  <select
  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm cursor-pointer"
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
  disabled={isUninstalling}
>
  <option value="size">Sort By Size</option>
  <option value="name">Sort By Name</option>
  <option value="rating">Sort By Rating</option>
  <option value="downloads-desc">Downloads: High to Low</option>
  <option value="downloads-asc">Downloads: Low to High</option>
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

            {isUninstalling ? (
                <div className="py-12">
                     <LocalSpinner type="mini" color="red" />
                     <p className='text-center text-sm text-gray-500 mt-4'>Uninstalling app...</p>
                </div>
            ) : (
                <div className="space-y-4" key={listKey}> 
                    {formattedApps.length > 0 ? (
                        formattedApps.map((app) => (
                            <div
                                key={app.id}
                                className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                            >
                            
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                                    {app.image ? (
                                        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-gray-500 text-xs">Icon</span>
                                    )}
                                </div>

                                <div className="ml-4 flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800">{app.title}</h3>
                                    <p className="text-xs text-gray-500">by {app.companyName || 'Unknown'}</p>
                                    <div className="flex items-center text-sm text-gray-600 mt-2 space-x-4">
                                        
                                        <div className='flex items-center'>
                                            <DownloadIcon className='w-4 h-4 mr-1 text-indigo-500' />
                                            <span className="text-xs">
                                                {app.reviews >= 1000000
                                                    ? `${(app.reviews / 1000000).toFixed(1)}M`
                                                    : app.reviews >= 1000
                                                    ? `${(app.reviews / 1000).toFixed(0)}K`
                                                    : app.reviews}
                                            </span>
                                        </div>

                                        <div className='flex items-center'>
                                            <StarIcon className='w-4 h-4 mr-1 text-yellow-500' />
                                            <span className="text-xs">{app.ratingAvg}</span>
                                        </div>

                                        <span className="text-xs font-semibold text-gray-700 bg-gray-200 py-0.5 px-2 rounded-full">{app.size} MB</span>
                                    </div>
                                </div>

                         
                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white cursor-pointer font-medium py-2 px-6 rounded text-sm transition-colors duration-200 shadow-lg"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="bg-gray-50 rounded-xl border border-dashed border-gray-300 py-16">
                            <p className="text-center text-gray-500 font-medium text-lg">
                                No Apps Installed. Install one from the All Apps page!
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
  );
};

export default Installation;