import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-6 md:px-20 lg:px-32 py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl font-semibold text-gray-700 tracking-wide transition-all duration-700 hover:text-blue-600">
          CONTACT <span className="text-blue-500">US</span>
        </p>
        <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <img
          src={assets.contact_image}
          alt="contact"
          className="w-full md:max-w-[420px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/* Right - Info */}
        <div className="flex flex-col gap-6 md:w-2/4 text-gray-600 text-sm leading-relaxed">
          {/* Office Address */}
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-2">Our Office</p>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>

          {/* Contact Info */}
          <div className="mt-3">
            <p className="text-gray-800 font-medium">
              Tel: <span className="font-normal text-gray-600">(415) 555-0132</span>
            </p>
            <p className="text-gray-800 font-medium mt-2">
              Email:{" "}
              <span className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
                greatstackdev@gmail.com
              </span>
            </p>
          </div>

          {/* Careers Section */}
          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-800">Careers at Prescripto</p>
            <p>Learn more about our teams and job openings.</p>
            <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-20 text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
        <p className="leading-relaxed">
          We’d love to hear from you! Whether you have a question about features, pricing, or
          partnership opportunities — our team is happy to assist you.
        </p>
        <p className="mt-3 font-medium text-gray-800">
          📞 Available Monday to Friday — 9:00 AM to 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default Contact;
