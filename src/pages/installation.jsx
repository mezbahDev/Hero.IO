import React, { useState, useEffect } from "react";
import { CircleChevronDown } from "lucide-react";
import downloadIcon from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [showSortOptions, setShowSortOptions] = useState(false);

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

  // Size sort functionality
  const sortAppsBySize = (apps, sortType) => {
    const sortedApps = [...apps];

    switch (sortType) {
      case "size-high-to-low":
        return sortedApps.sort((a, b) => {
          const sizeA = parseFloat(a.size) || 0;
          const sizeB = parseFloat(b.size) || 0;
          return sizeB - sizeA;
        });

      case "size-low-to-high":
        return sortedApps.sort((a, b) => {
          const sizeA = parseFloat(a.size) || 0;
          const sizeB = parseFloat(b.size) || 0;
          return sizeA - sizeB;
        });

      default:
        return sortedApps;
    }
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    setShowSortOptions(false);
  };

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    // ✅ Uninstall করলেও event trigger করুন
    window.dispatchEvent(new Event("installedAppsUpdated"));
  };

  const sortedApps = sortAppsBySize(installedApps, sortBy);

  const getSortDisplayText = () => {
    switch (sortBy) {
      case "size-high-to-low":
        return "Size (High to Low)";
      case "size-low-to-high":
        return "Size (Low to High)";
      default:
        return "Sort By Size";
    }
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
            {sortedApps.length} {sortedApps.length === 1 ? "App" : "Apps"} Found
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <div
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="text-[#627382] flex items-center border py-[12px] px-[16px] rounded-[4px] cursor-pointer bg-white hover:bg-gray-50 transition"
            >
              {getSortDisplayText()} <CircleChevronDown className="ml-[10px]" />
            </div>

            {/* Sort Options Dropdown */}
            {showSortOptions && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-[4px] shadow-lg z-10">
                <div className="p-2">
                  <button
                    onClick={() => handleSortChange("size-high-to-low")}
                    className="text-black font-medium w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm transition"
                  >
                    Size (High to Low)
                  </button>
                  <button
                    onClick={() => handleSortChange("size-low-to-high")}
                    className="text-black font-medium w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm transition"
                  >
                    Size (Low to High)
                  </button>
                  <div className="border-t my-1"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full px-[40px] mt-4">
        {sortedApps.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[8px] shadow-md">
            <p className="text-[#627382] text-xl">No apps installed yet</p>
            <p className="text-[#627382] mt-2">
              Install apps from the Apps page to see them here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedApps.map((app) => (
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

      {/* Close dropdown when clicking outside */}
      {showSortOptions && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowSortOptions(false)}
        />
      )}
    </div>
  );
};

export default Installation;
