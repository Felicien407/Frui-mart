import React from "react";
import orange from "../assets/orange2.png";
import mixer from "../assets/mixer.jfif";
import oranges from "../assets/orange2.png";
import juice from "../assets/juice.png";
import fruits from "../assets/fruits1.png";
import tomato from "../assets/dish.jfif";

const Stem = () => {
  return (
    <div className="h-[99rem] bg-gray-800">
      {/* Upper */}
      <div className="flex items-center justify-center h-[34rem] p-10 pl-20 bg-gray-700">
        {/* Left part */}
        <div className="w-1/2 h-full p-10 pl-13">
          <h1 className="text-7xl font-bold text-white mb-10">
            Orange Benefit
          </h1>
          <div className="flex items-center h-50">
            <img src={orange} className="h-42" alt="Orange" />
            <div className="flex flex-col justify-around ml-10 h-50">
              <p className="text-gray-300 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora ea facere, reprehenderit quasi eveniet quod quisquam.
              </p>
              <button className="h-12 w-42 font-bold rounded bg-amber-600 text-white cursor-pointer">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={mixer}
            alt="Juice mixer"
            className="h-[28rem] w-[26rem] rounded-xl"
          />
        </div>
      </div>

      {/* Middle */}
      <div className="h-[32.5rem] bg-black/30 p-12 pl-24 pr-24 grid grid-cols-3 gap-5 shadow">
        {/* 1st card */}
        <div className="flex flex-col items-center justify-center border-2 rounded-2xl hover:shadow-slate-950 cursor-pointer">
          <img src={oranges} alt="Orange" className="h-74 w-74" />
          <h2 className="text-white text-xl font-bold">ARCU VOLUT FAT VITAE</h2>
          <p className="text-gray-400">Phestiers lgeart</p>
        </div>
        {/* 2nd card */}
        <div className="flex flex-col items-center justify-center  border-2 rounded-2xl hover:shadow-slate-950 cursor-pointer">
          <img src={juice} alt="Orange" className="h-74 w-74" />
          <h2 className="text-white text-xl font-bold">$19,99,90,99E</h2>
          <p className="text-gray-400">Orviste past brongs</p>
        </div>
        {/* 3rd card */}
        <div className="flex flex-col items-center justify-center border-2 rounded-2xl hover:shadow-slate-950 cursor-pointer">
          <img src={fruits} alt="Fruits dish" className="h-74 w-74" />
          <h2 className="text-white text-xl font-bold">SFIELY TUN DPENARD</h2>
          <p className="text-gray-400">Ongand suniers</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-12 pl-24 pr-24 flex items-center justify-between gap-10 bg-gray-700 h-[32.5rem]">
        {/* heading text */}
        <div>
          <p className="text-white text-6xl font-sans font-semibold">
            Just imagine seeds and summer in gell sunshine.
          </p>
        </div>
        {/* image filled box */}
        <div>
          <img
            src={tomato}
            alt="Strawberries"
            className="rounded-2xl h-96 w-[70rem]"
          />
        </div>
        {/* Ads */}
        <div className="h-96 w-[50rem] bg-white p-12 flex flex-col items-center justify-around rounded-2xl">
          <h1 className="text-2xl font-bold ">
            EBEE WOUS <br />
            <spam className="text-3xl font-bold">BENEFIT.</spam>
          </h1>
          <p className="underline decoration-amber-600 text-center">
            Wotv &viral, extremly test lorem <br />
            FREELANCING SOME FRUITS
          </p>
          <button className="h-12 w-42 font-bold rounded bg-amber-600 text-white cursor-pointer">
            HEAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stem;
