import React from "react";
import bannerImg from "../../../assets/aboutBanner.jpg";
import AppStore from "../../global/AppStore";
const About = () => {
  
  return (
    <>
     
      <div className="flex flex-col items-center justify-center min-h-screen py-2 shadow-sm rounded-lg border border-gray-200">
      <h1 className="text-2xl lg:text-4xl text-center mb-2 font-extrabold">
        <span className="text-green-700 "> About </span>Our Pizza
      </h1>
  <div className="flex flex-wrap-reverse flex-row my-6 items-center justify-around mx-6">
    <div className="lg:w-1/2 p-4 bg-white rounded-lg ">
      <h2 className="text-xl font-semibold mb-2">Our Unique Approach</h2>
      <p className="mb-4">
      We are passionate about baking. Each of our pizza is a work of art, made with high-quality ingredients to ensure the best taste possible.
      </p>

     
      <h3 className="text-lg font-semibold mt-4 mb-2">Our Motto</h3>
      <p>Our mission is to bring joy to everyone who tastes our pizza. We believe that a truly excellent cake can make any day better.</p>
    </div>
    <div className="lg:w-1/3 p-4">
      <img
        src={"https://thumbs.dreamstime.com/b/pizza-chef-mascot-design-vector-illustration-created-vector-pizza-chef-mascot-design-vector-pizza-chef-mascot-design-117461146.jpg"}
        alt="..."
        className="lg:w-full "
       
      />
    </div>
  </div>
</div>

    </>
  );
};

export default About;
