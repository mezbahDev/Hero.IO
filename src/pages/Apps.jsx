import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import noApps from "../../public/assets/App-Error.png";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const [allCards, setAllCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .catch((err) => console.log("Error loading data:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCards = allCards.filter(
    (card) =>
      card.title && card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInstall = (app) => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.find((installedApp) => installedApp.id === app.id)) {
      const updatedApps = [...installedApps, app];
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      window.dispatchEvent(new Event("installedAppsUpdated"));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen flex flex-col items-center p-[80px] gap-[40px]">
      {/* Header */}
      <div className="text-black text-center">
        <h1 className="text-[48px] font-bold mb-2">Our All Applications</h1>
        <p className="text-[18px] text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="w-full flex justify-between items-center px-[130px] mt-[46px]">
        <p className="text-[24px] font-semibold">
          <span className="font-semibold text-black">
            ({filteredCards.length}) Apps Found
          </span>
        </p>

        <div className="relative w-64">
          <input
            type="search"
            placeholder="Search Apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {allCards.length === 0 ? (
        <div className="flex flex-col items-center gap-[20px]">
          <img
            src={noApps}
            alt="No apps found"
            className="w-72 h-72 object-contain mb-6"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            NO APPS AVAILABLE
          </h2>
          <p className="text-gray-500 text-lg">
            Failed to load apps. Please try again later.
          </p>
          <button
            onClick={handleGoHome}
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer text-white w-[150px] py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Go Home
          </button>
        </div>
      ) : filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black mt-10">
          {filteredCards.map((singleCard) => {
            const installedApps =
              JSON.parse(localStorage.getItem("installedApps")) || [];
            const isInstalled = installedApps.some(
              (app) => app.id === singleCard.id
            );

            return (
              <Card
                key={singleCard.id}
                singleCard={singleCard}
                onInstall={() => handleInstall(singleCard)}
                isInstalled={isInstalled}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[20px]">
          <img
            src={noApps}
            alt="No apps found"
            className="w-72 h-72 object-contain mb-6"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-gray-500 text-lg">
            No results found for "{searchQuery}". Try searching with a different
            keyword.
          </p>
          <button
            onClick={handleGoHome}
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer text-white w-[150px] py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Go Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
