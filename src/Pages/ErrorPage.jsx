import React from 'react';
import errorPageImage from '../assets/error-404.png'

import Footer from '../Components/Footer/Footer';
const ErrorPage = () => {
  return (
      <div className="">
      
    <div className="flex items-center justify-center  bg-gray-50 p-4">
      
      <div className="text-center">
       <div className="relative w-full  bg-contain bg-center bg-no-repeat">
            <img src={errorPageImage} alt="" />
          </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl">
          Oops, page not found!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
        >
          Go Back!
        </button>
      </div>
    </div>
    <Footer></Footer>
      </div>
  );
};

export default ErrorPage;