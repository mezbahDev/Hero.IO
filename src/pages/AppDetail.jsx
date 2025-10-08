import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description/Description";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/review.png";

const AppDetail = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedApp = data.find((item) => item.id === Number(id));
        setApp(selectedApp);
      })
      .catch((err) => console.log("Error loading app data:", err));
  }, [id]);

  const handleInstall = () => {
    setIsInstalled(true);
  };

  if (!app) return <p className="text-center mt-10 text-black">Loading...</p>;

  return (
    <div className="text-black bg-[#f1f1f1] p-[80px]">
      <div className="flex flex-col md:flex-row items-center w-full mb-10 gap-[100px]">
        <img
          src={app.image}
          alt={app.title}
          className="w-[350px] h-[350px] object-cover rounded-[12px] shadow"
        />

        <div className="w-full">
          <div className="pb-[30px] border-b-2 border-[#c7c7c7]">
            <h1 className="text-[32px] font-bold">{app.title}</h1>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                produced.io
              </span>
            </p>
          </div>

          <div className="pt-[30px]">
            <div className="flex flex-wrap gap-[50px] h-[120px]">
              <div className="flex flex-col items-center">
                <img
                  src={download}
                  alt=""
                  className="w-[40px] h-[40px] mb-[8px]"
                />
                <p className="text-[#001931]">Downloads</p>
                <h1 className="text-[#001931] text-[40px] font-extrabold">
                  {app.downloads}
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={rating}
                  alt=""
                  className="w-[40px] h-[40px] mb-[8px]"
                />
                <p className="text-[#001931]">Average Ratings</p>
                <h1 className="text-[#001931] text-[40px] font-extrabold">
                  {app.ratingAvg}
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={review}
                  alt=""
                  className="w-[40px] h-[40px] mb-[8px]"
                />
                <p className="text-[#001931]">Total Reviews</p>
                <h1 className="text-[#001931] text-[40px] font-extrabold">
                  {app.reviews}
                </h1>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`mt-[30px] text-white px-[20px] py-[14px] rounded-[8px] font-semibold text-[20px] transition 
                ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00D390] hover:scale-105 cursor-pointer"
                }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size})`}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[10px] shadow p-[40px] mt-[100px]">
        <h2 className="text-[24px] font-semibold text-[#001931] mb-6">
          Ratings
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={app.ratings}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#FF8C00"
              barSize={30}
              radius={[5, 5, 5, 5]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Description />
    </div>
  );
};

export default AppDetail;
