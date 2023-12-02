import SideNav from "./SideNav";
import Swal from 'sweetalert2'
const Kyc = () => {
  const submitFun =(e)=>{
    e.preventDefault()
    Swal.fire({
      title: "Good job!",
      text: "You Kyc is Complated",
      confirmButtonColor:'#036672',
      icon: "success",
      customClass: {
        confirmButton: "bg-teal-400 shadow-gray-600 shadow-lg py-2 px-10  mt-4 text-white rounded-md  hover:bg-teal-600",

      },
      buttonsStyling: false
    });
  }
  return (
    <>
      <div className="flex justify-between mb-4 " style={{ minHeight: "77vh" }}>
        <SideNav />
        <div className="w-full flex justify-between bg-gray-500/20  rounded-xl lg:mr-10 gap-9 lg:p-9 flex-wrap lg:flex-nowrap  ">
          <form onSubmit={submitFun} className="bg-white  w-full rounded-lg  shadow-gray-600 flex  flex-col   p-8 ">
            <h1 className="text-2xl text-teal-400 font-bold mb-4 text-center">
        Complate Kyc
            </h1>

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
       Final Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kyc;
