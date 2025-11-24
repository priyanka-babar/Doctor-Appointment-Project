import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2024-07-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-full flex ml-20 py-1 bg-gray-50">
      <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md">

        {/* IMAGE + NAME CENTER */}
        <div className="flex flex-col ">
          <img
            src={userData.image}
            alt="Profile"
            className="w-28 h-28 rounded-xl object-cover shadow-md"
          />

          {/* NAME */}
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              className="mt-4 border p-2 rounded-lg text-center w-full max-w-xs"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {userData.name}
            </h2>
          )}
        </div>
        <hr className="mt-2"/>

        {/* CONTACT INFO */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
            Contact Information
          </p>

          <div className="grid grid-cols-[110px_1fr] gap-y-4 text-sm">

            {/* Email */}
            <p className="text-gray-500">Email id:</p>
            {isEdit ? (
              <input
                className="border rounded-md p-2 w-full"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-600 underline cursor-pointer">
                {userData.email}
              </p>
            )}

            {/* Phone */}
            <p className="text-gray-500">Phone:</p>
            {isEdit ? (
              <input
                className="border rounded-md p-2 w-full"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-600 underline cursor-pointer">
                {userData.phone}
              </p>
            )}

            {/* Address */}
            <p className="text-gray-500">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  className="border rounded-md p-2 w-full"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  className="border rounded-md p-2 w-full"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* BASIC INFO */}
        <div className="mt-8">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
            Basic Information
          </p>

          <div className="grid grid-cols-[110px_1fr] gap-y-4 text-sm">

            {/* Gender */}
            <p className="text-gray-500">Gender:</p>
            {isEdit ? (
              <select
                className="border rounded-md p-2 w-full"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}

            {/* DOB */}
            <p className="text-gray-500">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>
                {new Date(userData.dob).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-8">
          {!isEdit ? (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(false)}
              className="px-6 py-2 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              Save Information
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
