import React from "react";
import { Link } from "react-router-dom";
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { LiaMapMarkerAltSolid } from "react-icons/lia";


const NePreDetails = () => {
  return (
    <div className="flex justify-center bg-gray-800/80">
      <div
        className="w-11/12 rounded-md my-2 relative bg-white  lg:w-96"
        style={{ minHeight: "85vh" }}
      >
        <h2 className="p-2 border-b-2 text-center text-xl text-teal-400">
          Tell us about your needer
        </h2>
        <form className="p-3.5">
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="text"
              placeholder="Needer's full name *"
              required
              className="border-0  w-11/12 rounded-md"
            />
            <CiUser />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="text"
              placeholder="Needer's age *"
              required
              className="border-0  w-11/12 rounded-md"
            />
            <CiCalendarDate />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="text"
              placeholder="Address *"
              required
              className="border-0  w-11/12 rounded-md"
            />
            <LiaMapMarkerAltSolid />
          </div>
          

          <div className="absolute right-0 bottom-0  w-full">
            <p
              style={{ fontSize: "10px" }}
              className="px-2 mb-2 mx-auto text-gray-900 rounded-sm bg-teal-200 w-fit"
            >
              Madad Karo zero platform fee policy will ensure more funds for
              you.
            </p>
            <Link to={'/nestory'}>
            <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NePreDetails