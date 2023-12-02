import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {PiUserCircleDuotone} from 'react-icons/pi'
import {BiSolidDownArrow} from 'react-icons/bi'

const NavBar = () => {
  const[show,setShow]=useState(true)
  const [logStatus,setLogStatus]=useState(false)
  const [userNav,setUserNav]=useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    let adminData = localStorage.getItem('admin')
    console.log(adminData);
    let data = localStorage.getItem('data')
    console.log(data);
    if(data){
      setLogStatus(true)
    }
  })
  const showFun=()=>{
    setShow(!show)
    setUserNav(false)
  }
  const logoutFun= ()=>{
    localStorage.clear()

      
      navigate('/')
      location.reload()


  }
  return (
    <div>{!logStatus?
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center select-none ">
            <img
              src="https://thumbs.dreamstime.com/b/pizza-chef-mascot-design-vector-illustration-created-vector-pizza-chef-mascot-design-vector-pizza-chef-mascot-design-117461146.jpg"
              className="h-20 "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ranger Pos
            </span>
          </Link>
          <div className="flex md:order-2 ">
          <Link to={"#"}>
            <button
              type="button"
              className="text-white  bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-2 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 hidden lg:block"
            >
              Create Account
            </button>
            </Link>
            <Link to={'#'}>
            <button
              type="button"
              className="text-black  hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 hidden lg:block"
            >
            Sign In
            </button>
              
            </Link>
            <button
              onClick={showFun}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={show?"items-center justify-between hidden w-full md:flex md:w-auto md:order-1":"items-center justify-between  w-full md:flex md:w-auto md:order-1"}
            id="navbar-cta"
            
          >
            <ul className="flex bg-gray-700/30  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li onClick={showFun}>
                <Link
                  to={"./"}
                  className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent hover:bg-gray-100 md:text-green-700 md:p-0 md:dark:text-green-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li onClick={showFun}>
                <Link
                  to={"./brosfundraiser"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Browse Fundraisers
                </Link>
              </li>
              <li onClick={showFun}>
                <Link
                  to={"./howitw"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How It Works
                </Link>
              </li>
              <li onClick={showFun}>
                <Link
                  to={"./stories"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Stories
                </Link>
              </li> */}
              <li onClick={showFun}>
                <Link
                  to={"./about"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li onClick={showFun}>
                <Link
                  to={"#"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </Link>
              </li>
             
              <li onClick={showFun}>

                <Link to={"#"}>
                  <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 lg:hidden"
                  >
                  SignIn
                  </button>
                </Link>
                <Link to={"#"}>
                  <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 lg:hidden"
                  >
                    Create Account
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      :
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center select-none">
            <img
              src="https://thumbs.dreamstime.com/b/pizza-chef-mascot-design-vector-illustration-created-vector-pizza-chef-mascot-design-vector-pizza-chef-mascot-design-117461146.jpg"
              className="h-20  "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ranger Pos
            </span>
          </Link>
          <div className="flex md:order-2 ">
          <Link to={"./predetails"}>
            <button
              type="button"
              className="text-white  bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-2 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 hidden lg:block"
            >
              Start a Fundraiser
            </button>
            </Link>
            <div className="  lg:block ">
              <div className="active:bg-gray-700 flex w-fit items-center hover:cursor-pointer rounded-full select-none" onClick={()=>{
                setUserNav(!userNav)
                setShow(true)
              }}>
             <PiUserCircleDuotone className="text-4xl text-gray-600"/>
             <BiSolidDownArrow className="text-xs"/>
             </div>
             <ul className={userNav?"shadow-md border-2 rounded-md  absolute [&>li]:p-2  backdrop-blur-sm right-0 lg:right-auto":"hidden"}>
              <li className="hover:bg-green-700 hover:text-white hover:cursor-pointer rounded-t-md" onClick={()=>{
                navigate('/userProfile')
                setUserNav(!userNav)

              }}>Profile</li>
                 <li className="hover:bg-green-700 hover:text-white hover:cursor-pointer whitespace-nowrap lg:hidden "onClick={()=>{
                setUserNav(!userNav)
                navigate('/accsetting')
              }}>User Setting</li>
              <li className="hover:bg-green-700 hover:text-white hover:cursor-pointer rounded-t-md  " onClick={()=>{
             
                setUserNav(!userNav)
navigate('/kyc')
              }}>Complate Kyc</li>
           
           
              <li className="hover:bg-green-700 hover:text-white hover:cursor-pointer rounded-b-md" onClick={logoutFun}>Logout</li>
             </ul>
             
            </div>
            {/* <Link to={'/login'}>
            <button
              type="button"
              className="text-black  hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 hidden lg:block"
            >
            Sign In
            </button>
              
            </Link> */}
            <button
              onClick={showFun}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={show?"items-center justify-between hidden w-full md:flex md:w-auto md:order-1":"items-center justify-between  w-full md:flex md:w-auto md:order-1"}
            id="navbar-cta"
            
          >
            <ul className="flex bg-gray-700/30  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li onClick={showFun}>
                <Link
                  to={"./"}
                  className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent hover:bg-gray-100 md:text-green-700 md:p-0 md:dark:text-green-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li onClick={showFun}>
                <Link
                  to={"./brosfundraiser"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Browse Fundraisers
                </Link>
              </li>
              <li onClick={showFun}>
                <Link
                  to={"./howitw"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How It Works
                </Link>
              </li>
              <li onClick={showFun}>
                <Link
                  to={"./stories"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Stories
                </Link>
              </li> */}
              <li onClick={showFun}>
                <Link
                  to={"./about"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li onClick={showFun}>
                <Link
                  to={"./contact"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </Link>
              </li>
            
              <li onClick={showFun}>

                <Link to={"./predetails"}>
                  <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-700 lg:hidden"
                  >
                    Start a Fundraiser
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>}
    </div>
  );
};

export default NavBar;
