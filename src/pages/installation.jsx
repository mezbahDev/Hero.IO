import React from "react";
import { CircleChevronDown } from "lucide-react";
import downloadIcon from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

const installation = () => {
  return (
    <div className="flex flex-col items-center p-[80px] bg-[#f1f1f1]">
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
          <p className="text-black text-[24px] font-semibold">1 Apps Found</p>
          <div className="text-[#627382] flex items-center border py-[12px] px-[16px] rounded-[4px] cursor-pointer">
            Sort By Size <CircleChevronDown className="ml-[10px]" />
          </div>
        </div>
      </div>

      <div className="w-full text-black flex flex-col gap-4 bg-white p-4 mt-4 rounded-[8px] shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-[16px] items-center p-[16px]">
            <img src={downloadIcon} alt="" className="w-[80px] h-[80px]" />
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[20px] font-medium">
                Forest: Focus For Productivity
              </h1>
              <div className="flex gap-[16px]">
                <div className="flex gap-[4px] items-center">
                  <img
                    className="w-[20px]"
                    src={downloadIcon}
                    alt="download icon"
                  />
                  <p className="text-[#00D390] font-medium">9M</p>
                </div>
                <div className="flex items-center gap-[4px]">
                  <img className="w-[20px]" src={ratings} alt="ratings icon" />
                  <p className="text-[#FF8811] font-medium">5</p>
                </div>
                <div className="text-[#627382]">50 MB</div>
              </div>
            </div>
          </div>
          <button className="bg-[#00D390] h-[43px] px-[16px] rounded-[4px] font-semibold text-white">
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default installation;
