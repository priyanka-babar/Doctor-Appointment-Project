import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-8 shadow-sm bg-white">
      {/* Logo */}
      <img src={assets.logo} alt="logo" className="w-50 h-auto" />

      {/* Navigation Menu */}
      <ul className="flex gap-8 text-gray-700 font-medium">
        <NavLink to="/" className="flex flex-col items-center group">
          <li className="cursor-pointer hover:text-blue-600">HOME</li>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-blue-600 transition-all duration-300" />
        </NavLink>

        <NavLink to="/doctors" className="flex flex-col items-center group">
          <li className="cursor-pointer hover:text-blue-600">ALL DOCTORS</li>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-blue-600 transition-all duration-300" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center group">
          <li className="cursor-pointer hover:text-blue-600">ABOUT</li>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-blue-600 transition-all duration-300" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center group">
          <li className="cursor-pointer hover:text-blue-600">CONTACT</li>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-blue-600 transition-all duration-300" />
        </NavLink>
      </ul>

      {/* Button */}
     <div>
  {token ? (
    <div className="flex items-center gap-2 cursor-pointer group relative">
      {/* Profile Image */}
      <img
        src={assets.profile_pic}
        alt=""
        className="w-8 h-8 rounded-full border border-gray-300"
      />

      {/* Dropdown Icon */}
      <img
        src={assets.dropdown_icon}
        alt=""
        className="w-3 transition-transform duration-300 group-hover:rotate-180"
      />

      {/* Dropdown Menu */}
      <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg w-40 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 z-50">
        <div className="flex flex-col text-gray-700">
          <p   onClick={()=>navigate('/my-profile')} className="px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer">My Profile</p>
          <p  onClick={()=>navigate('/my-appointments')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Appointments</p>
          <p onClick={()=>setToken(false)} className="px-4 py-2 hover:bg-gray-100 rounded-b-lg text-red-600 cursor-pointer">Logout</p>
        </div>
      </div>
    </div>
  ) : (
    <button
      onClick={() => navigate("/login")}
      className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
    >
      Create Account
    </button>
  )}
</div>

    </div>
  );
};

export default Navbar;
