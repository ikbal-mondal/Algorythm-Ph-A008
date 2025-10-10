import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom Link
import Banner from '../../Components/Banner/Banner';
import heroImage from '../../assets/hero.png';
import StatsSection from '../../Components/Footer/StatsSection';
import AppsCard from '../../Components/AppsCard/AppsCard';
import LocalSpinner from '../../Components/LocalSpinner';

const Home = () => {
    const [appsData, setAppsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); 

        fetch('../appsData.json')
            .then(res => res.json())
            .then(data => {
                setAppsData(data);
            })
            .catch(error => {
                console.error("Error fetching app data:", error);
            })
            .finally(() => {
               
                setTimeout(() => setIsLoading(false), 700);
            });
    }, []);

    const homeSliceData = appsData.slice(0,8);

    
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
               
                <LocalSpinner type="svg" color="indigo" size="lg" />
            </div>
        );
    }

  
    return (
        <div className='bg-gray-50'>
            <Banner></Banner>

       
            <div className="flex mx-6 bg-gray-50 justify-center items-center">
                <img className='max-w-full h-auto' src={heroImage} alt="Hero illustration" />
            </div>

          
            <div className="">
                <StatsSection></StatsSection>
            </div>

       
            <div className="text-center bg-gray-50 py-12">
                <h1 className='lg:text-5xl text-3xl mb-2 font-bold text-gray-800'>Trending Apps</h1>
                <p className='text-2lg text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>

           
            <div className="lg:w-5xl mt-24 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {homeSliceData.map(app => <AppsCard key={app.id} app={app}></AppsCard>)}
            </div>

          
            <div className="flex items-center mb-16 mt-6 justify-center">
                <Link to='/apps'>
                    <button className="bg-gradient-to-r cursor-pointer from-violet-600 to-purple-500 text-white font-medium py-3 px-12 rounded-lg shadow-lg hover:from-violet-700 hover:to-purple-600 transition duration-150 ease-in-out">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;