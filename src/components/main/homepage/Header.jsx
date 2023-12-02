import React from "react";
import { Link } from "react-router-dom";
import homeBannerImg from '../../../assets/home banner.webp'
const Header = () => {
  const phoneNumber = "+91746463546";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="flex justify-center items-center flex-wrap-reverse mb-6">
      <div className="lg:w-1/2 flex flex-col justify-center items-center  lg:items-start lg:gap-6 mt-3 lg:mt-0">
        <p className="lg:text-7xl font-serif lg:leading-snug font-extrabold hidden lg:block">
        Made Fresh  <br /> Made , <br />{" "}
          <span className="text-green-700 ">For You</span>
        </p>
        <p className="lg:text-7xl text-2xl lg:font-serif lg:leading-snug font-extrabold lg:hidden ">
          Your Presonal <span className="text-green-700 "> Donor</span>
        </p>
          <p className="lg:text-start text-center text-base mb-4 lg:mb-0">
          Welcome to a magnificent experience of rich taste & celebrate.
          </p>
        <div className="flex justify-center gap-4 flex-wrap">
      
       
            <p   onClick={handleCall} className="py-2 px-5 shadow-xl rounded-md hover:cursor-pointer shadow-green-100 bg-green-700 text-white hover:bg-green-700 ">
             Call For Order
            </p>
    
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <img
          src={"https://t4.ftcdn.net/jpg/00/71/27/57/360_F_71275778_e4d7y5ADlApa9g0A4tm0Jqc5Q3FznuGI.jpg"}
          alt="bannder"
          className="w-full h-fit rounded-full shadow-2xl shadow-black"
        />
      </div>
    </div>
  );
};

export default Header;
