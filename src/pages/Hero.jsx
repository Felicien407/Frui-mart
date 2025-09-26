import React from "react";
import hero from "../assets/hero2.jfif"

const Hero = () => {
  return (
    // container
    <div className="flex justify-between p-12 pl-28 pr-28 bg-gray-800 h-[39rem] font-sans">
      {/* left side */}
      <div className="flex flex-col justify-between w-1/3 h-[29rem] text-white">
        <h1 className="text-2xl">Premium Restaurant</h1>
        <h2 className="text-7xl font-bold">
          Anida <br />
          Dedelay
        </h2>
        <p className="text-2xl font-semibold">
          BEST HEALTHY SALAD SERVED <br /> IN OUR RESTAURANT
        </p>
        <button className="h-16 w-44 font-bold rounded bg-amber-600 cursor-pointer">LEARN MORE</button>
      </div>
      {/* Hero image */}
      <div className="w-2/3 flex justify-center items-center">
        <img src={hero} alt="Hero image" className="w-full mr-2 rounded-2xl" />
      </div>
      {/* Side button */}
      <button className="h-16 w-36 text-white font-bold rounded bg-amber-600 cursor-pointer">SIGN IN</button>
    </div>
  );
};

export default Hero;
