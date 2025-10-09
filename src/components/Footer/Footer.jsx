import React from "react";
import logo from "../../../public/assets/logo.png";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="px-[80px] bg-[#001931] flex flex-col">
      <div className="flex justify-between border-b-1 border-[#E5E7EB] py-10 ">
        <div className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" src={logo} alt="page logo" />
          <a className="text-xl font-bold text-white"> HERO.IO</a>
        </div>
        <div className="flex flex-col gap-[16[px]">
          <p>Social Links</p>
          <div className="flex gap-4">
            <Twitter className="text-white w-[20px] h-[20px]" />
            <Linkedin className="text-white w-[20px] h-[20px]" />
            <Facebook className="text-white w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
