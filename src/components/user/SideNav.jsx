
import { MdDashboard } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
const SideNav = () => {
    const navigate = useNavigate()
    const logoutFun= ()=>{
        localStorage.clear()
    
          
          navigate('/')
          location.reload()
    
    
      }
  return (
    <>
    <ul className="lg:block hidden">
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md hover:cursor-pointer flex items-center gap-3" onClick={()=>{
           navigate('/userProfile')
        }}>
          <MdDashboard />
          DashBoard
        </li>
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md whitespace-nowrap hover:cursor-pointer flex items-center gap-3" onClick={()=>{
          navigate('/kyc')
        }}>
          <BsFillShieldLockFill />
          Complate Kyc
        </li>
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md whitespace-nowrap hover:cursor-pointer flex items-center gap-3" onClick={()=>{
            navigate('/accsetting')
        }}>
          <IoMdSettings />
          Account Setting
        </li>
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md hover:cursor-pointer flex items-center gap-3" onClick={logoutFun}>
          <RiLogoutBoxFill />
          Logout
        </li>
      </ul></>
  )
}

export default SideNav