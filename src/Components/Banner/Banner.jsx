import React from "react";
import googlePlay from "../../assets/Google-play.png";
import appStore from "../../assets/App_Store_(iOS).svg.png";

const Banner  = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Productive
          </span>{" "}
          Apps
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          At <span className="text-purple-600 font-medium">HERO.IO</span>, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* App Buttons */}
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#"
            className="flex items-center border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-md shadow-sm transition"
          >
            <img src={googlePlay} alt="Google Play" className="h-5 mr-2" />
            Google Play
          </a>

          <a
            href="#"
            className="flex items-center border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-md shadow-sm transition"
          >
            <img src={appStore} alt="App Store" className="h-5 mr-2" />
            App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner ;
