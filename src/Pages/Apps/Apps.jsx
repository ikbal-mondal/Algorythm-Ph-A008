import React, { useEffect, useState } from 'react';
import AppsCard from '../../Components/AppsCard/AppsCard';
import LocalSpinner from '../../Components/LocalSpinner';


const Apps = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [appsData, setAppsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State for initial data loading
    const [isSearching, setIsSearching] = useState(false); // State for search operation

    // 1. DATA LOADING EFFECT (Initial Fetch)
    useEffect(() => {
        setIsLoading(true); // Set loading true before fetch

        fetch('appsData.json')
            .then(res => res.json())
            .then(data => {
                setAppsData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Handle error if needed
            })
            .finally(() => {
                setIsLoading(false); // Set loading false after fetch completes
            });
    }, []);

    // 2. SEARCH LOGIC WITH DELAY/LOADING FEEDBACK
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        
        // Show the search loader
        setIsSearching(true);

        // Simulate a brief delay for filtering to show search feedback
        setTimeout(() => {
            setIsSearching(false);
        }, 800); // Loader displays for 300ms
    };

    // Filter the apps based on the search term
    const filteredApps = appsData.filter(app =>
        app?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()?.trim())
    );

    // Conditional rendering for content area
    const ContentDisplay = () => {
        // State 1: Show spinner during search
        if (isSearching) {
            // Use the LocalSpinner for in-page search feedback
            return <LocalSpinner />;
        }

        // State 2: No apps found after search/filter
        if (filteredApps.length === 0) {
            return (
                <div className="lg:w-5xl container mx-auto border-2 border-gray-100 py-12 my-12 bg-white rounded-lg shadow-md">
                    <p className='text-center text-2xl text-gray-500'>No App Found</p>
                </div>
            );
        }

        // State 3: Display filtered apps
        return (
            <div className="lg:w-5xl mt-2 container mx-auto grid grid-cols-1 md:grid-cols-3 my-4 lg:grid-cols-4 gap-6">
                {
                    filteredApps?.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                }
            </div>
        );
    };

    return (
        <div className='bg-gray-50 min-h-screen p-4'>

            <div className="text-center ">
                <h2 className='text-4xl pt-8 font-bold'>Our All Applications</h2>
                <p className='text-xl my-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* If initial data is loading, show the spinner over the whole content area */}
            {isLoading ? (
                <div className="py-24">
                     <LocalSpinner />
                </div>
            ) : (
                <>
                    {/* Search and Stats Section (Only visible after initial load) */}
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row mt-10 justify-between items-center px-4 sm:px-0">

                        <div className="mb-4 sm:mb-0">
                            <h2 className='text-2xl font-bold'> ({filteredApps?.length}) <span>Apps Found</span></h2>
                        </div>
                        
                        <div className="">
                            <label className="flex items-center input bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full max-w-xs">
                                <svg className="h-5 w-5 opacity-50 text-gray-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input 
                                    onChange={handleSearchChange} 
                                    type="search" 
                                    required 
                                    placeholder="Search by App Title..." 
                                    className='focus:outline-none w-full text-gray-700 placeholder-gray-500'
                                    value={searchTerm}
                                />
                            </label>
                        </div>
                    </div>
                    
                    {/* Content Display (App Cards or No App Found/Spinner) */}
                    <ContentDisplay />
                </>
            )}
        </div>
    );
};

export default Apps;