import React from "react";
import Logo from "../assets/Logo.png";
import { CgUser } from "react-icons/cg";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <div className="flex justify-between items-center h-24 pt-3.5 pb-3.5 bg-gray-900">
        {/* logo */}
        <div className="flex justify-center items-center h-full w-96">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        {/* Nav links */}
        <div className="h-full w-full flex items-center justify-between ">
          <ul className="flex justify-around items-center w-full h-full ml-96 text-2l text-white font-semibold uppercase">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Account and cart icons */}
        <div className="flex justify-center items-center h-full w-52 gap-2">
          <div className="h-full w-1/2 flex items-center justify-center bg-gray-700 text-2xl text-white font-bold">
            <CgUser></CgUser>
          </div>
          <div className="h-full w-1/2 flex items-center justify-center bg-gray-700 text-2xl text-white font-bold">
            <BsCart></BsCart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
