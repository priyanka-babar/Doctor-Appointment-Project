import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 md:px-10 border-b bg-white shadow-sm">

      {/* LOGO */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-40 cursor-pointer"
      />

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/doctors">ALL DOCTORS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </ul>

      {/* DESKTOP PROFILE OR LOGIN */}
      <div className="hidden md:block">
        {token ? (
          <div className="relative group cursor-pointer flex items-center gap-2">
            <img src={assets.profile_pic} className="w-8 h-8 rounded-full" />
            <img src={assets.dropdown_icon} className="w-3" />

            {/* DROPDOWN */}
            <div className="absolute top-10 right-0 bg-white shadow-lg w-40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate("/my-profile")}>My Profile</p>
              <p className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate("/my-appointments")}>My Appointments</p>
              <p className="px-4 py-2 hover:bg-gray-100 text-red-600" onClick={() => setToken(false)}>Logout</p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* MOBILE MENU BUTTON */}
      <img
        onClick={() => setShowMenu(true)}
        src={assets.menu_icon}
        className="w-7 h-7 md:hidden cursor-pointer"
      />

      {/* ▼▼▼ MOBILE SLIDE MENU ▼▼▼ */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50">

          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-6 animate-slideLeft">

            {/* TOP (LOGO + CLOSE BUTTON) */}
            <div className="flex items-center justify-between mb-6">
              <img src={assets.logo} className="w-32 cursor-pointer" />
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                className="w-6 cursor-pointer"
              />
            </div>

            {/* MENU LINKS */}
            <ul className="flex flex-col gap-6 text-gray-700 font-medium text-lg">
              <NavLink to="/" onClick={() => setShowMenu(false)} className="hover:text-primary">
                HOME
              </NavLink>
              <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="hover:text-primary">
                ALL DOCTORS
              </NavLink>
              <NavLink to="/about" onClick={() => setShowMenu(false)} className="hover:text-primary">
                ABOUT
              </NavLink>
              <NavLink to="/contact" onClick={() => setShowMenu(false)} className="hover:text-primary">
                CONTACT
              </NavLink>

              {/* PROFILE OPTIONS IN MOBILE */}
              {token && (
                <>
                  <NavLink to="/my-profile" onClick={() => setShowMenu(false)}>
                    My Profile
                  </NavLink>
                  <NavLink to="/my-appointments" onClick={() => setShowMenu(false)}>
                    My Appointments
                  </NavLink>
                  <p
                    onClick={() => { setToken(false); setShowMenu(false); }}
                    className="text-red-600"
                  >
                    Logout
                  </p>
                </>
              )}

              {!token && (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-primary text-white px-5 py-2 rounded-full mt-2"
                >
                  Create Account
                </button>
              )}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
