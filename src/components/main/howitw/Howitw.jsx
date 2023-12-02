import React from "react";
import AppStore from "../../global/AppStore";

const Howitw = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 mt-8">
        <h1 className=" text-5xl font-semibold">How to Works</h1>
        <p className="text-center">
          CompanyName is the best place to fundraise for what you care about,
          whether you are an individual, group, or organization.
        </p>
        <img
          decoding="async"
          className="lg:w-2/3 w-full m-3 rounded-md  overlay-true"
          src="https://www.gofundme.com/c/wp-content/uploads/2023/07/HowItWorks-Thumb.jpg"
          alt=""
          loading="lazy"
          data-airgap-id="43"
          speechify-initial-font-family="CircularXXWeb, Trebuchet, Helvetica, Arial, sans-serif"
          speechify-initial-font-size="16px"
        ></img>
      </div>
      <div className="my-8 flex flex-col  justify-center items-center gap-10">
        <ol className="space-y-4 text-gray-900 flex flex-wrap justify-around list-none list-inside dark:text-gray-400 w-11/12">
          <li>
            <strong>1. Start your fundraiser</strong>
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li className="underline">Watch a video tutorial</li>
            </ul>
          </li>
          <li>
            <strong>1. Start your fundraiser</strong>
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li className="underline">Watch a video tutorial</li>
            </ul>
          </li>
          <li>
            <strong>1. Start your fundraiser</strong>
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li className="underline">Watch a video tutorial</li>
            </ul>
          </li>
        </ol>
        <button
          type="button"
          className="focus:outline-none text-white shadow-xl shadow-teal-800 bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Start your fundraiser
        </button>
      </div>

     <AppStore/>
    </>
  );
};

export default Howitw;
