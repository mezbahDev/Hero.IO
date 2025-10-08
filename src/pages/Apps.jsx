import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Apps = () => {
  const [allCards, setAllCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .catch((err) => console.log("Error loading data:", err));
  }, []);

  const filteredCards = allCards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
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
          <svg
            className="h-5 w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            type="search"
            placeholder="Search Apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {filteredCards.length > 0 ? (
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
        <p className="text-black text-6xl mt-10">No Apps Found</p>
      )}
    </div>
  );
};

export default Apps;
