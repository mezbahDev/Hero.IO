import React from "react";
import playImg from "../assets/googlePlay.png";
import appImg from "../assets/appStore.png";

const Home = () => {
  return (
    <div className="p-[80px] flex flex-col items-center gap-[40px]">
      <div className="flex flex-col gap-[16px]">
        <div className="text-black leading-[84px] flex flex-col items-center font-bold text-[72px] ">
          <h1>We Build</h1>
          <h1>
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              Productive{" "}
            </span>
            Apps
          </h1>
        </div>
        <p className="text-[#627382] text-[20px] text-center max-w-[1100px]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>

      <div className="flex gap-6 ">
        {/* Google Play */}
        <a
          href="#"
          className="flex items-center gap-2 border border-[#D2D2D2] px-6 py-3 rounded-[6px]"
        >
          <img src={playImg} alt="Google Play" className="w-8] h-8" />
          <p className=" text-[20px] font-semibold text-[#001931]">
            Google Play
          </p>
        </a>

        {/* App Store */}
        <a
          href="#"
          className="flex items-center gap-2 border border-[#D2D2D2] px-6 py-3 rounded-[6px]"
        >
          <img src={appImg} alt="App Store" className="w-8 h-8" />
          <p className="text-[20px] font-semibold text-[#001931]">App Store</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
