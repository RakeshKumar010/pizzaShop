import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser, CiMail, CiLock, CiPhone } from "react-icons/ci";

const LoginUser = () => {
  const[email,setEmail]=useState()
  const[pass,setPass]=useState()
const navigater =useNavigate()

  const changeFun =(e)=>{
const{value,name}=e.target;
  if(name=='email'){
    setEmail(value)
  }
  if(name=='pass'){
    setPass(value)
  }
  }
  const submitFun =(e)=>{
    e.preventDefault()
    let data={
      'eamil':email,
    'pass':pass
    }

    localStorage.setItem('data',JSON.stringify(data))
    navigater('/userProfile')

  }
  return (
    <div
      className="flex justify-center bg-white items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-11/12 rounded-md my-2 flex flex-col  relative  items-center shadow-teal-400 shadow-lg border-2 py-4  lg:w-96">
        <h1 className="text-xl font-bold mb-3">LogIn</h1>

        <form className=" w-full px-5" onSubmit={submitFun}>
   
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
            name="email"
              type="email"
              placeholder="Email Address *"
              required
              className="border-0  w-11/12"
              onChange={changeFun}
            />
            <CiMail />
          </div>
          <div className="flex justify-between  border-b-2 w-full items-center pr-2 mb-24">
            <input
            name="pass"
              type="password"
              placeholder="Creaate a Password*"
              required
              className="border-0  w-11/12"
              onChange={changeFun}
            />
            <CiLock />
          </div>

          <div className="absolute right-0 bottom-0  w-full">
            <p className=" text-center mb-2">
           
              <Link to={"/sigupfund"} className="text-teal-400">
              Want to start a fundraiser? Click here
              </Link>
            </p>
            {/* <Link to={"/userProfile"}> */}
              {" "}
              <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
                Next
              </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
