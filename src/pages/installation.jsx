import React, { useState, useEffect } from "react";
import { CircleChevronDown } from "lucide-react";
import downloadIcon from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  // localStorage থেকে installed apps load করুন
  const loadInstalledApps = () => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(savedApps);
  };

  useEffect(() => {
    // প্রথমবার load করুন
    loadInstalledApps();

    // ✅ Custom event listen করুন
    const handleInstalledAppsUpdate = () => {
      loadInstalledApps();
    };

    window.addEventListener("installedAppsUpdated", handleInstalledAppsUpdate);

    // Cleanup
    return () => {
      window.removeEventListener(
        "installedAppsUpdated",
        handleInstalledAppsUpdate
      );
    };
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    // ✅ Uninstall করলেও event trigger করুন
    window.dispatchEvent(new Event("installedAppsUpdated"));
  };

  return (
    <div className="flex flex-col items-center p-[80px] bg-[#f1f1f1] min-h-screen">
      <div className="flex flex-col items-center gap-[16px]">
        <h1 className="text-[48px] text-[#001931] font-bold">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-full px-[40px] mt-[40px]">
        <div className="flex justify-between items-center">
          <p className="text-black text-[24px] font-semibold">
            {installedApps.length} {installedApps.length === 1 ? "App" : "Apps"}{" "}
            Found
          </p>
          <div className="text-[#627382] flex items-center border py-[12px] px-[16px] rounded-[4px] cursor-pointer">
            Sort By Size <CircleChevronDown className="ml-[10px]" />
          </div>
        </div>
      </div>

      <div className="w-full px-[40px] mt-4">
        {installedApps.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[8px] shadow-md">
            <p className="text-[#627382] text-xl">No apps installed yet</p>
            <p className="text-[#627382] mt-2">
              Install apps from the Apps page to see them here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="w-full text-black flex flex-col gap-4 bg-white p-4 rounded-[8px] shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-[16px] items-center p-[16px]">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-[80px] h-[80px] object-cover rounded"
                    />
                    <div className="flex flex-col gap-[16px]">
                      <h1 className="text-[20px] font-medium">{app.title}</h1>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[4px] items-center">
                          <img
                            className="w-[20px]"
                            src={downloadIcon}
                            alt="download icon"
                          />
                          <p className="text-[#00D390] font-medium">
                            {app.downloads}
                          </p>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <img
                            className="w-[20px]"
                            src={ratings}
                            alt="ratings icon"
                          />
                          <p className="text-[#FF8811] font-medium">
                            {app.ratingAvg}
                          </p>
                        </div>
                        <div className="text-[#627382]">{app.size}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-red-500 hover:bg-red-600 h-[43px] px-[16px] rounded-[4px] font-semibold text-white transition"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;