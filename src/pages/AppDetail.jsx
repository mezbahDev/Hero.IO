// AppDetail.jsx
import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

const AppDetail = () => {
  return (
    <div className="text-black bg-[#f1f1f1]">
      <div className="flex items-center w-full">
        <img src="../assets/hero.png" alt="" className="w-[350px] h-[350px]" />
        <div className=" w-full ">
          <div className="pb-[30px] border-b-2 border-[#c7c7c7]">
            <h1 className="text-[32px] font-bold">
              SmPlan: ToDo List With Reminder
            </h1>
            <p className="text-[#627382]">
              Developed by
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                produced.io
              </span>
            </p>
          </div>

          <div className="pt-[30px]">
            <div className="flex gap-[24px]">
              <div>
                <img
                  src="../assets/icon-downloads.png"
                  alt=""
                  className="w-[40] h-[40]"
                />
                <p className="text-[#001931]">Downloads</p>
                <h1 className="text-[#001931] text-[40px] font-extrabold">
                  8M
                </h1>
              </div>
              <div>
                <img
                  src="../assets/icon-downloads.png"
                  alt=""
                  className="w-[40] h-[40]"
                />
                <p className="text-[#001931]">Average Ratings</p>
                <h1 className="text-[#001931] text-[40px] font-extrabold">
                  4.9
                </h1>
              </div>
              <div>
                <img
                  src="../assets/icon-downloads.png"
                  alt=""
                  className="w-[40] h-[40]"
                />
                <p className="text-[#001931]">Total Reviews</p>
                <h1 className="text-[#001931] text-[40px] font-extrabold">
                  54K
                </h1>
              </div>
            </div>
            <button className="bg-[#00D390] mt-[30px] text-white px-[20px] py-[14px] rounded-[8px] font-semibold text-[20px]">
              Install Now <span>20MB</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
