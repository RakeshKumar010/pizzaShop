import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser, CiMail, CiLock, CiPhone } from "react-icons/ci";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas";
const SignUpFund = () => {
  const navigator = useNavigate();

  const initialValues ={
    name:"",
    address:"",
    email:"",
    password:"",

    mobile:""
  }
const formik = useFormik({
  initialValues:initialValues,
  validationSchema:signUpSchema,
  onSubmit:async(values)=>{
 
    let result = await fetch("http://localhost:8000/signup", {
          method: "post",
          body: JSON.stringify({name:values.name,email:values.email,password:values.password,mobile:values.mobile,address:values.address}),
          headers: { "content-type": "application/json" },
        });
        result = await result.json();
        if (result) {
            navigator("/predetails");
          }
          let pandingData = { email: values.email, password: values.password };
          console.log(pandingData);
        localStorage.setItem("pdata", JSON.stringify(pandingData));
  }
})




// console.log(formik);

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [pass, setPass] = useState();
  // const [mobile, setMobile] = useState();

  // const submitFun = async (e) => {
  //   e.preventDefault();
  //   let result = await fetch("http://localhost:8000/signup", {
  //     method: "post",
  //     body: JSON.stringify({name,email,pass,mobile}),
  //     headers: { "content-type": "application/json" },
  //   });
  //   result = await result.json();
  //   if (result) {
  //     // console.log(result);
  //     navigator("/predetails");
  //   }
  //   let pandingData = { eamil: email, pass: pass };
  //   localStorage.setItem("pdata", JSON.stringify(pandingData));
  // };

  // const changeFun = (e) => {
  //   const { value, name } = e.target;
  //   if (name == "name") {
  //     setName(value);
  //   } else if (name == "email") {
  //     setEmail(value);
  //   } else if (name == "pass") {
  //     setPass(value);
  //   } else if (name == "mobile") {
  //     setMobile(value);
  //   } else {
  //     alert("your code is wrong");
  //   }
  // };
  return (
    <div className="flex justify-center bg-gray-800/80">
      <div
        className="w-11/12 rounded-md my-2 relative bg-white  lg:w-96"
        style={{ minHeight: "70vh" }}
      >
        <h2 className="p-2 border-b-2 text-center text-xl text-teal-400">
          Start Your Fundraise
        </h2>


        {/* <form className="p-3.5" onSubmit={submitFun}> */}
        <form className="p-3.5" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
          <div className="flex justify-between  border-b-2 w-full  items-center pr-2 ">
            <input
              type="text"
              placeholder="Name *"
              required
              className="border-0  w-11/12 rounded-md"
              name="name"
              
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              
            />
            <CiUser />
          </div>
         {formik.errors.name && formik.touched.name ?<p className=" text-red-400 text-sm">{formik.errors.name}</p>:null}
          </div>
          <div className="mb-3">
          <div className="flex justify-between  border-b-2 w-full  items-center pr-2 ">
            <input
              type="text"
              placeholder="Address *"
              required
              className="border-0  w-11/12 rounded-md"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              
            />
            <CiPhone />
          </div>
         {formik.errors.address && formik.touched.address ? <p className=" text-red-400 text-sm">{formik.errors.address}</p>:null}
          </div>
          <div className="mb-3">
          <div className="flex justify-between  border-b-2 w-full  items-center pr-2 ">
            <input
              type="email"
              placeholder="Email *"
              required
              className="border-0  w-11/12 rounded-md"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              
            />
            <CiMail />
          </div>
          {formik.errors.email && formik.touched.email ?<p className=" text-red-400 text-sm">{formik.errors.email}</p>: null}
          </div>
          <div className="mb-3">
          <div className="flex justify-between  border-b-2 w-full  items-center pr-2 ">
            <input
              type="password"
              placeholder="Password*"
              required
              className="border-0  w-11/12 rounded-md"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              
            />
            <CiLock />
          </div>
         {formik.errors.password && formik.touched.password ? <p className=" text-red-400 text-sm">{formik.errors.password}</p>:null}
          </div>
        
          <div className="mb-3">
          <div className="flex justify-between  border-b-2 w-full  items-center pr-2 ">
            <input
              type="number"
              placeholder="Mobile *"
              required
              className="border-0  w-11/12 rounded-md"
              name="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              
            />
            <CiPhone />
          </div>
         {formik.errors.mobile && formik.touched.mobile ? <p className=" text-red-400 text-sm">{formik.errors.mobile}</p>:null}
          </div>
         

          <div className="absolute right-0 bottom-0  w-full">
            <p className=" text-center mb-2">
              Already have a account?{" "}
              <Link to={"/login"} className="text-teal-400">
                {" "}
                Login
              </Link>
            </p>

            <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFund;
