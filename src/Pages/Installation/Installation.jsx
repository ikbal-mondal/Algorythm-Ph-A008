import React, { useState, useEffect } from 'react';
// Assuming you have an SVG for the download icon (e.g., download-icon.svg)
// or you use a library like Heroicons. For simplicity, I'll use text or a simple SVG for icons.

// Placeholder for an SVG download icon
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block text-gray-500 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Placeholder for a star icon
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block text-yellow-500 mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
  </svg>
);


const Installation = () => {
  // Use the description and image data you previously generated
  const [installedApps, setInstalledApps] = useState([
    {
      "image": "https://img.icons8.com/color/96/chat--v1.png",
      "title": "ChatMaster",
      "companyName": "ChatTech Inc.",
      "id": 1,
      "description": "...", // Long description not needed for this component view
      "size": 48.5, // in MB
      "reviews": 1324, // Using 'reviews' as download count for display
      "ratingAvg": 4.6,
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeRd6XqwcJ_4wALtMAHWjakOIYydmEmFFUw&s",
      "title": "FitTrack",
      "companyName": "HealthWave",
      "id": 2,
      "description": "...",
      "size": 60.2,
      "reviews": 845,
      "ratingAvg": 4.4,
    },
   
  ]);

  const [sortOrder, setSortOrder] = useState('size'); // 'size', 'name', 'rating', 'downloads'

  useEffect(() => {
    // In a real application, you might fetch this data from an API
    // For now, we're using static data
    // Example: fetch('/api/installed-apps').then(res => res.json()).then(data => setInstalledApps(data));
  }, []);

  const handleUninstall = (id) => {
    setInstalledApps(prevApps => prevApps.filter(app => app.id !== id));
    console.log(`Uninstall app with ID: ${id}`);
    // In a real app, you'd likely make an API call here to uninstall
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

  const formattedApps = sortApps(installedApps);

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
          <p className="text-gray-700 font-semibold">{installedApps.length} Apps Found</p>
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
            <p className="text-center text-gray-500 py-8">No apps found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;