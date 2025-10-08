import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = (
    <div className="flex gap-9 text-black font-semibold cursor-pointer">
      <li className="text-gradient-to-r from-[#632EE3] to-[#9F62F2]" to="/home">
        Home
      </li>
      <li to="/Apps">Apps</li>
      <li to="/installation">Installation</li>
    </div>
  );

  return (
    <div className="navbar shadow-sm px-[80px] py-[16px]">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" src={logo} alt="page logo" />
          <a className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {" "}
            HERO.IO
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="text-white flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[12px] px-[16px] rounded-[4px]">
          <Github />
          <p>Contribute</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
