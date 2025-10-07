import React from 'react';
import Banner from '../../Components/Banner/Banner';
import heroImage from '../../assets/hero.png'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="flex mb-6 mx-6 justify-center items-center">
            <img className='' src={heroImage} alt="" />
           </div>
            <div className="text-center my-8">
                <h1 className='lg:text-5xl text-3xl mb-2 font-bold text-gray-800'>Trending Apps</h1>
                <p className='text-2lg text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        </div>
    );
};

export default Home;