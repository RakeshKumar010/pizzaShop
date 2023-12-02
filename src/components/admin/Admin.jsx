import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigater = useNavigate();

  const changeFun = (e) => {
    const { value, name } = e.target;
    if (name == "email") {
      setEmail(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  };
  useEffect(() => {
    const adminData= localStorage.getItem('admin')
    if(adminData)
    {

      navigater("/admin");
    }
  }, []);

  const submitFun = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    navigater("/admin");
    localStorage.setItem("admin", JSON.stringify(data));
  };
  return (
    <>
    
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#" onSubmit={submitFun}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to Admin
          </h5>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={changeFun}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={changeFun}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-teal-400 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Admin;
