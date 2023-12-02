import React from "react";
import { Link } from "react-router-dom";
import { CiUser, CiMail, CiPenpot } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";
import {  CiCalendarDate } from "react-icons/ci";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
const PreDetails = () => {
  return (
    <div className="flex justify-center bg-gray-800/80">
      <div
        className="w-11/12 rounded-md my-2 relative bg-white  lg:w-96"
        style={{ minHeight: "85vh" }}
      >
        <h2 className="p-2 border-b-2 text-center text-xl text-teal-400">
          Tell us more about your Fundraiser
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
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="text"
              placeholder="How mush do you want to raise? *"
              required
              className="border-0  w-11/12 rounded-md"
            />
            <CiUser />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <select
              id="countries"
              class="bg-gray-50 border-0  w-11/12 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>The Needer is my</option>
              <option value="self">Self</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="grandFather">GrandFather</option>
              <option value="grandMother">GrandMother</option>
              <option value="son">Son</option>
              <option value="sister">Sister</option>
              <option value="brother">Brother</option>
              <option value="cousin">Cousin</option>
              <option value="aunty">Aunty</option>
              <option value="uncal">Uncal</option>
              <option value="relative">Relative</option>
              <option value="Other">Other</option>
            </select>
            <CiMail />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <select
              id="countries"
              class="bg-gray-50 border-0  w-11/12 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Your Education Qualification *</option>
              <option value="10th/12th">10th/12th pass</option>
              <option value="graduate">Graduate</option>
              <option value="pGraduate">
                Postgraduate (Masters, PHD, etc.)
              </option>
              <option value="below10th">Below 10th pass</option>
            </select>
            <IoSchoolOutline className="text-gray-600" />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <select
              id="countries"
              class="bg-gray-50 border-0  w-11/12 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Your Employment Status *</option>
              <option value="salaried">Salaried</option>
              <option value="selfEmp">Self-employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="below10th">Below 10th pass</option>
            </select>
            <CiPenpot className="text-gray-600" />
          </div>

          

          <div className="absolute right-0 bottom-0  w-full">
            <p
              style={{ fontSize: "10px" }}
              className="px-2 mb-2 mx-auto text-gray-900 rounded-sm bg-teal-200 w-fit"
            >
              Madad Karo zero platform fee policy will ensure more funds for
              you.
            </p>
            <Link to={'/needer'}>
            <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreDetails;
