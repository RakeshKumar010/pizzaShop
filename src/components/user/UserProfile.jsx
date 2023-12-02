import React from "react";
import SideNav from "./SideNav";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {

  const navigate = useNavigate()
  return (
    <div className="flex justify-between mb-4 " style={{ minHeight: "77vh" }}>
      <SideNav/>
      <div className="w-full flex justify-between bg-gray-500/20  rounded-xl lg:mr-10 gap-9 lg:p-9 flex-wrap lg:flex-nowrap h-full ">
        <div className="bg-white lg:w-1/2 w-full rounded-lg  shadow-gray-600 flex items-center flex-col  gap-7 p-4">
          <img
            src="https://img.freepik.com/premium-photo/poor-kid-crying-cute-indian-baby-generative-ai_849906-10315.jpg?w=360"
            alt="..."
            className="rounded-md w-full shadow-gray-600 shadow-lg"
          />

          <div className=" h-full w-full ">
            <h1 className="text-teal-400 text-xl font-bold ">My Profile</h1>
            <div className="flex gap-3 m-2">
              <p>Name:</p>
              <p>Rakesh Kumar</p>
            </div>
            <div className="flex gap-3 m-2">
              <p>Email:</p>
              <p>rakeshkumar748844@gmail.com</p>
            </div>
            <div className="flex gap-3 m-2">
              <p>Phone:</p>
              <p>+91 7091506903</p>
            </div>
            <div className="flex gap-3 m-2">
              <p>Adderss:</p>
              <p> Bander Bagicha, Patna</p>
            </div>
            <div className="flex  mt-4">
              <button className="bg-teal-400 shadow-gray-600 shadow-lg py-2 px-5 text-white rounded-lg m-auto hover:bg-teal-600" onClick={()=>{
         
                navigate('/accsetting')
              }}>
                Account Settings
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  gap-9">
          <div className="w-full lg:h-60 p-4 rounded-lg  bg-white shadow-gray-600 overflow-y-auto">
            <h1 className="text-xl text-teal-400 font-bold">My fundraise</h1>
            <div className="m-3 ">
              <h1 className="text-base font-semibold uppercase">Medical Expenses</h1>
              <div className="flex flex-col gap-2">
              <p className="text-sm">
              I am currently facing a significant health challenge that requires costly medical treatment. Your generous donation will help me afford the care I need to recover.
              </p>
              <p className="text-sm font-semibold">Total Money :- ₹110000</p>
              <div className="flex items-center gap-2">
                <input type="range" value="66" className="w-full accent-teal-500" />
                <p>66%</p>
              </div>
              </div>
            </div>
              <hr />
            <div className="m-3 my-y ">
              <h1 className="text-base font-semibold uppercase">Educational Costs</h1>
              <div className="flex flex-col gap-2">
              <p className="text-sm">
              I have been accepted into a prestigious educational program, but I lack the funds to cover tuition and related expenses. Your contribution will help me pursue this incredible opportunity
              </p>
              <p className="text-sm font-semibold">Total Money :- ₹330000</p>
              <div className="flex items-center gap-2">
                <input type="range" value="7" className="w-full accent-teal-500" />
                <p>7%</p>
              </div>
              </div>
            </div>
              <hr />
            <div className="m-3 my-y ">
              <h1 className="text-base font-semibold uppercase">Supporting a Family </h1>
              <div className="flex flex-col gap-2">
              <p className="text-sm">
              As the primary provider for my family, recent circumstances have put us in a tough spot financially. Your donation will help us meet our basic needs during this challenging time.
              </p>
              <p className="text-sm font-semibold">Total Money :- ₹20000</p>
              <div className="flex items-center gap-2">
                <input type="range" value="44" className="w-full accent-teal-500" />
                <p>44%</p>
              </div>
              </div>
            </div>
              <hr />
          </div>
          <div className="w-full lg:h-60 p-4 rounded-lg  bg-white shadow-gray-600 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl text-teal-400 font-bold">
                My Donor
              </h1>
          
            </div>
            <div className="flow-root mx-3">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://thumbs.dreamstime.com/b/smiling-indian-man-looking-camera-mature-wearing-spectacles-portrait-middle-eastern-confident-businessman-office-195195079.jpg" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹3200
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA=" alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Bonnie Green
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹3467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://media.gettyimages.com/id/628330148/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=gi&k=20&c=352q8xVLCr_8b_I8QyGIPFscwFmNMbwhO6o7NKh2XtU=" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Michael Gough
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹6700
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Lana Byrd
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹367
                    </div>
                  </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://static6.depositphotos.com/1008005/595/i/450/depositphotos_5954955-stock-photo-senior-indian-man.jpg" alt="Thomas image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Thomes Lean
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹2367
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
