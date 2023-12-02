import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import AdSidebar from "./AdSidebar";

const AdDashbord = () => {
  
  const navigater = useNavigate();
  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (!adminData) {
      navigater("/admin");
    }
  }, []);
  return (
    <>
    

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold mb-4">Needer</h1>
            <div className="flex justify-between border-2 p-7 rounded-lg border-black  flex-wrap gap-2">
              <div
                style={{ width: "48%" }}
                className="p-4 rounded-lg border-black border-2"
              >
                <h2>Total Needer</h2>
                <p className="text-white mt-2 p-3 shadow-md rounded-lg bg-blue-400">
                  181
                </p>
              </div>
              <div
                style={{ width: "48%" }}
                className="p-4 rounded-lg border-black border-2"
              >
                <h2>Approved Needer</h2>
                <p className="text-white mt-2 p-3 shadow-md rounded-lg bg-green-400">
                  21
                </p>
              </div>
              <div
                style={{ width: "48%" }}
                className="p-4 rounded-lg border-black border-2"
              >
                <h2>Rejected Needer</h2>
                <p className="text-white mt-2 p-3 shadow-md rounded-lg bg-red-400">
                  80
                </p>
              </div>
              
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">Donor</h1>
            <div className="flex justify-between border-2 p-7 rounded-lg border-black  flex-wrap gap-2">
              <div
                style={{ width: "48%" }}
                className="p-4 rounded-lg border-black border-2"
              >
                <h2>Donors</h2>
                <p className="text-white mt-2 p-3 shadow-md rounded-lg bg-blue-400">
                  181
                </p>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdDashbord;
