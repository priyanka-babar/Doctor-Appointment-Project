import React, { useContext } from "react";
import { AppContext } from "../context/Appcontext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="px-6 sm:px-12 py-10">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
        My Appointments
      </h2>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-5 border border-gray-100"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl border shadow-sm"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-1 text-sm text-gray-600 space-y-1">
              <p className="text-lg font-semibold text-gray-800">
                {item.name}
              </p>
              <p className="text-blue-600">{item.speciality}</p>

              <div className="mt-3">
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-xs">{item.address.line1}</p>
                <p className="text-xs">{item.address.line2}</p>
              </div>

              <div className="mt-3">
                <p className="font-medium text-gray-700">Date & Time:</p>
                <p className="text-xs">25 July, 2024 | 8:30 PM</p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col justify-center gap-3 mt-3 sm:mt-0">
              <button className="px-6 py-2 rounded-full border text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>

              <button className="px-6 py-2 rounded-full border text-sm font-medium text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
