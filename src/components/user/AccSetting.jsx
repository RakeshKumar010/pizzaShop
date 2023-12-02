
import SideNav from "./SideNav";

const AccSetting = () => {
  return (
    <>
      <div className="flex justify-between mb-4 " style={{ minHeight: "77vh" }}>
        <SideNav />
        <div className="w-full flex justify-between bg-gray-500/20  rounded-xl lg:mr-10 gap-9 lg:p-9 flex-wrap lg:flex-nowrap  ">
          <div className="bg-white lg:w-1/2 w-full rounded-lg  shadow-gray-600 flex items-start flex-col   p-8 ">
            <h1 className="text-lg text-teal-400 font-semibold mb-4">Basic Info</h1>
          
            <div className="mb-3 w-full">
              <h1 className="font-semibold">Full Name</h1>
              <input
                type="text"
                className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
                defaultValue={"Rakesh Kumar"}
              />
            </div>
            <div className="mb-3 w-full">
              <h1 className="font-semibold">Email</h1>
              <input
                type="text"
                className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
                defaultValue={"rakeshkumar748844@gmail.com"}
              />
            </div>
            <div className="mb-3 w-full">
              <h1 className="font-semibold">Phone No.</h1>
              <input
                type="text"
                className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
                defaultValue={"+91 7091506903"}
              />
            </div>
            <div className="mb-3 w-full">
              <h1 className="font-semibold">Address</h1>
              <input
                type="text"
                className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
                defaultValue={"Bander Bagicha, Patna"}
              />
            </div>
            <div className="mb-3 w-full">
              <h1 className="font-semibold">Password</h1>
              
              <input
                type="password"
                className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
                defaultValue={"rakesh"}
              />
            </div>
            <button className="bg-teal-400 shadow-gray-600 shadow-lg py-2 px-10  mt-4 text-white rounded-lg  hover:bg-teal-600">
                Save
              </button>
          </div>
          <div className="bg-white lg:w-1/2 w-full rounded-lg  shadow-gray-600 flex items-start flex-col   p-8 ">
          <h1 className="text-lg text-teal-400 font-semibold mb-4">Bank Account Info</h1>
          
          <div className="mb-3 w-full">
            <h1 className="font-semibold">Holder Name</h1>
            <input
              type="text"
              className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
              defaultValue={"Rakesh Kumar"}
            />
          </div>
          <div className="mb-3 w-full">
            <h1 className="font-semibold">Ifsc Code</h1>
            <input
              type="text"
              className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
              defaultValue={"SBIN000003"}
            />
          </div>
          <div className="mb-3 w-full">
            <h1 className="font-semibold">Account No.</h1>
            <input
              type="text"
              className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
              defaultValue={"**********7654"}
            />
          </div>
          <div className="mb-3 w-full">
            <h1 className="font-semibold">Aadhar No.</h1>
            <input
              type="text"
              className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
              defaultValue={"*****57745"}
            />
          </div>
          <div className="mb-3 w-full">
            <h1 className="font-semibold">Phone No.</h1>
            
            <input
              type="text"
              className="border-0 border-b-2  focus:ring-0 focus:border-gray-500  w-full  p-0 text-sm"
              defaultValue={"+91 9746464631"}
            />
          </div>
          <button className="bg-teal-400 shadow-gray-600 shadow-lg py-2 px-10  mt-4 text-white rounded-lg  hover:bg-teal-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccSetting;
