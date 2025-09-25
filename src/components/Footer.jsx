import React from "react";
import tomato from "../assets/w-dish.jfif";
import mixer from "../assets/mixer.jfif";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-between h-[34rem] p-10 pl-20">
      {/* image filled box */}
      <div className="h-5/6">
        <img
          src={tomato}
          alt="White fruits' dish"
          className="rounded-2xl h-96 w-[28rem]"
        />
      </div>
      {/* Menu */}
      <div className="flex flex-col h-5/6">
        <h1 className="text-white text-2xl font-semibold">OUR MENU BENEFIT</h1>
        <div className="grid grid-cols-3 gap-10 h-full items-center">
          <div className="flex flex-col justify-around items-center h-[12rem] w-[8rem]">
            <img src={mixer} alt="" className="h-14 w-10"/>
            <h1 className="text-gray-100 text-xl font-bold uppercase">Fresh</h1>
            <p className="text-gray-300 text-center">
              Lorem ipsum, <br /> consectetur.
            </p>
          </div>
          <div className="flex flex-col justify-around items-center h-[12rem] w-[8rem]">
            <img src={mixer} alt="" className="h-14 w-10"/>
            <h1 className="text-gray-100 text-xl font-bold uppercase">Vitamin</h1>
            <p className="text-gray-300 text-center">
              Lorem ipsum, <br /> consectetur.
            </p>
          </div>
          <div className="flex flex-col justify-around items-center h-[12rem] w-[8rem]">
            <img src={mixer} alt="" className="h-14 w-10"/>
            <h1 className="text-gray-100 text-xl font-bold uppercase">Ore Anic</h1>
            <p className="text-gray-300 text-center">
              Lorem ipsum, <br /> consectetur.
            </p>
          </div>
        </div>
      </div>
      {/* Opening hours */}
      <div className="h-5/6 w-[22rem] border-l-2 border-gray-700 flex flex-col items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">OPENING HOURS</h1>
        <div className="flex justify-between">
          <h1>Monday</h1>
          <p>17.00 cm x17</p>
        </div>
      
      <div className="flex justify-between">
        <h1>Tuesday</h1>
        <p>13.60 cm x17</p>
      </div>
      <div className="flex justify-between">
        <h1>Wednesday</h1>
        <p>19.00 cm x17</p>
      </div>
      <div className="flex justify-between border-b-2 border-gray-700 pb-5">
        <h1>Thursday</h1>
        <p>13.00 cm x17</p>
      </div>
      <hr />
      {/* Quick links */}
      <div>
        <h1 className="text-white text-2xl font-semibold">QUICK LINKS</h1>
      </div>
      </div>
    </div>
  );
};

export default Footer;
