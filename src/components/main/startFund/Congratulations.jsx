import React from "react";

const Congratulations = () => {
  return (
    <div className="flex justify-center bg-white">
      <div
        className="w-11/12 rounded-md my-2 flex flex-col  items-center shadow-teal-400 shadow-sm py-4  lg:w-96"
   
      >
        <h1 className="text-xl font-bold">Congratulations!</h1>
        <p className="text-sm">Your Fundraiser is live </p>
        <div className="bg-teal-100/50 flex justify-center flex-col items-center gap-2 p-3 rounded-md text-teal-600 text-sm m-3">
          <img
            src="https://ketto.gumlet.io/assets/images/thankyou-img.png?w=576&dpr=1.0"
            alt=".."
          />
          <p className="font-bold">Did you know?</p>
          <p className="  text-center">
            Fundraisers that receive a donation within
            <br /> the first 24 hours are 10x more likely to <br />
            reach their goals.
          </p>
        </div>
        <p className=" text-center text-sm leading-6">
          You can always improve your fundraiser later. <br />
          For now, share it with 3-4 people closest to you and <br />
          <span className="font-bold">Get your first donation today!</span>
        </p>
        <button
        
          type="button"
          className="text-white bg-emerald-500 font-medium rounded-md text-sm  py-2.5 mr-2 mb-2 hover:bg-emerald-600 my-4 px-12"
        >
          Share on Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
