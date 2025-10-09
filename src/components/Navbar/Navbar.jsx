import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Github } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <div className="navbar shadow-sm px-[80px] py-[16px] bg-white sticky top-0 z-50">

      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" src={logo} alt="page logo" />
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            HERO.IO
          </Link>
        </div>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-9 font-semibold text-black">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`pb-2 transition-all duration-200 ${
                  location.pathname === link.path ||
                  (link.path === "/" && location.pathname === "/")
                    ? "border-b-2 border-[#632EE3] text-[#632EE3]"
                    : "border-b-2 border-transparent hover:border-[#9F62F2]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[10px] px-[16px] rounded-[4px] hover:scale-105 transition-transform duration-200"
        >
          <Github />
          <p>Contribute</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
