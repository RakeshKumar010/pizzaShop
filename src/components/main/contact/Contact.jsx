import React from "react";
import contectImg from "../../../assets/OIP.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { BiSolidPhoneCall, BiSolidTimeFive } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 shadow-sm rounded-lg border border-gray-200">
        <h1 className="text-2xl lg:text-4xl text-center mb-2 font-extrabold">
          <span className="text-teal-400 "> Contact</span> Us
        </h1>
        <div className="flex flex-wrap-reverse flex-row my-6 items-center justify-around mx-6">
          <div className="lg:w-1/2 p-4 bg-white rounded-lg flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-teal-400">
                Contact Information
              </h2>
              <div className="flex items-center gap-1">
                <BiSolidPhoneCall />
                <p>+91</p>
              </div>
              <div className="flex items-center gap-1">
                <MdMarkEmailRead />
                <p>something4@gmail.com</p>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkedAlt />
                <p>Lorem ipsum, dolor sit amet consectetur.</p>
              </div>
           
                <p>We are open from Monday-friday 08:00 am to 05:00 pm</p>
          
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-teal-400">
                Follow Us
              </h2>
              <div className="flex items-center gap-1">
                <FaFacebook />
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-1">
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
              <div className="flex items-center gap-1">
                <SiYoutubemusic />
                <p>Youtube</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <img
              src={contectImg}
              alt="..."
              className="lg:w-full rounded-full  border-4 border-teal-400/25"
              style={{ boxShadow: "0 0 15px #036672" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
