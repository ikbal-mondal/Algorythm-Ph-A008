import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineFileDownload, MdOutlineReviews } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import RechartCard from "./RechartCard";
import { toast } from "react-toastify";
import LocalSpinner from "../../Components/LocalSpinner"; // Adjust path if necessary
import { AlertCircle } from "lucide-react";

const AppDetails = () => {
  const { appsID } = useParams();
  const [isInstalled, setIsInstalled] = useState(false);
  const [appsData, setAppsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    fetch("../appsData.json")
      .then((res) => res.json())
      .then((data) => setAppsData(data))
      .catch((error) => {
        console.error("Error fetching app data:", error);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 700);
      });
  }, []);

  const appDetails = appsData?.find(
    (appDetail) => appDetail.id === parseInt(appsID)
  );
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    id,
  } = appDetails || {};

  useEffect(() => {
    if (id) {
      const installedApps =
        JSON.parse(localStorage.getItem("installApp")) || [];
      const alreadyInstalled = installedApps.some((item) => item.id === id);
      setIsInstalled(alreadyInstalled);
    }
  }, [id]);

  const handleAdToInstallToLS = () => {
    if (isInstalled) {
      toast.error("This App is already installed.");
      return;
    }

    const installedApps = JSON.parse(localStorage.getItem("installApp")) || [];
    installedApps.push(appDetails);
    localStorage.setItem("installApp", JSON.stringify(installedApps));

    setIsInstalled(true);
    toast.success("App Installed Successfully!");
  };

  const buttonText = isInstalled ? "Installed" : `Install Now (${size} MB)`;

  const buttonClasses = isInstalled
    ? "bg-gray-400 cursor-not-allowed text-gray-700"
    : "bg-green-600 hover:bg-green-700 text-white";

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LocalSpinner type="svg" color="indigo" size="lg" />
      </div>
    );
  }

  if (!appDetails && appsData.length > 0) {
    return (
      <div className="text-center  text-xl font-semibold">
        <div className=" flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800 text-center p-6">
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md  dark:border-gray-700 shadow-lg rounded-xl p-10  flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-red-500 to-cyan-400 text-white mb-6 animate-pulse">
              <AlertCircle size={40} />
            </div>
            <h1 className="text-2xl font-bold text-red-600 dark:text-gray-100 mb-3 ">
              App Not Found
            </h1>
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              The page or app you’re looking for doesn’t exist.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-5 cursor-pointer py-2 rounded bg-gradient-to-r from-red-600 to-cyan-400 text-white font-semibold shadow hover:opacity-90 transition"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
            <img
              src={image}
              alt={`${title} Icon`}
              className="w-full h-full object-cover rounded-2xl shadow-md border border-gray-200"
            />
          </div>

          <div className="flex-grow text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">{companyName}</span>
            </p>

            <button
              onClick={handleAdToInstallToLS}
              disabled={isInstalled}
              className={`
                                w-full sm:w-auto mt-2 font-semibold py-3 px-6 rounded-full text-base tracking-wide
                                transition duration-200 ease-in-out transform hover:scale-[1.02]
                                ${buttonClasses}
                            `}
            >
              {buttonText}
            </button>
          </div>
        </div>

        <hr className="w-full my-6 border-gray-200" />

        <div className="flex justify-around sm:justify-between items-center text-center">
          <div className="flex flex-col items-center">
            <MdOutlineFileDownload className="text-3xl text-indigo-500 mb-1" />
            
            <span className="text-2xl font-bold text-gray-800">
              {downloads ? `${downloads.toString().slice(0, 2)}M` : "N/A"}
            </span>
            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
              Downloads
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-gray-200 px-4 sm:px-8">
            <FaStar className="text-3xl text-yellow-500 mb-1" />
            <span className="text-2xl font-bold text-gray-800">
              {ratingAvg}
            </span>
            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
              Rating
            </span>
          </div>

          <div className="flex flex-col items-center">
            <MdOutlineReviews className="text-3xl text-indigo-500 mb-1" />
            <span className="text-2xl font-bold text-gray-800">{reviews}</span>
            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
              Reviews
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ratings & Distribution
        </h2>

        <RechartCard ratingsData={appDetails?.ratings}></RechartCard>
      </div>

      <div className="mt-8 bg-white p-4 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-3">
          Description
        </h2>
        <div className="text-gray-700 space-y-4 leading-relaxed text-sm">
          {description &&
            description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
