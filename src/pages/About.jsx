import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 md:px-20 lg:px-32 py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-3xl md:text-4xl font-semibold text-gray-700 tracking-wide transition-all duration-700 ease-in-out hover:text-blue-600">
          ABOUT <span className="text-blue-500">US</span>
        </p>
        <div className="mt-2 h-1 w-20 bg-blue-400 mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* About Content */}
      <div className="my-10 flex flex-col md:flex-row items-center gap-12">
        <img
          className="w-full md:max-w-[360px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out"
          src={assets.about_image}
          alt="about us"
        />

        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-gray-600 text-sm leading-relaxed">
          <p className="animate-fadeIn">
            Welcome to <span className="font-semibold text-gray-800">Prescripto</span>, your trusted
            partner in managing your healthcare needs conveniently and efficiently. We understand
            the challenges individuals face when it comes to scheduling doctor appointments and
            managing their health records.
          </p>
          <p className="animate-fadeIn delay-200">
            Prescripto is committed to excellence in healthcare technology. We continuously strive
            to enhance our platform, integrating the latest advancements to improve user experience
            and deliver superior service. Whether you're booking your first appointment or managing
            ongoing care, we’re here to support you every step of the way.
          </p>
          <b className="text-lg text-gray-800 mt-2">Our Vision</b>
          <p className="animate-fadeIn delay-300">
            Our vision is to create a seamless healthcare experience for every user. We aim to bridge
            the gap between patients and healthcare providers, making it easier for you to access
            the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-16 mb-8">
        <p className="text-2xl font-semibold text-gray-800">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-xl px-8 py-10 shadow-md hover:shadow-lg transition-all duration-500 bg-white hover:bg-blue-50 hover:-translate-y-2 hover:border-blue-300">
          <b className="block text-blue-600 mb-2 text-lg">Efficiency</b>
          <p className="text-gray-600">
            Streamlined appointment scheduling that fits into your busy lifestyle.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-xl px-8 py-10 shadow-md hover:shadow-lg transition-all duration-500 bg-white hover:bg-blue-50 hover:-translate-y-2 hover:border-blue-300">
          <b className="block text-blue-600 mb-2 text-lg">Convenience</b>
          <p className="text-gray-600">
            Access to a network of trusted healthcare professionals in your area.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-xl px-8 py-10 shadow-md hover:shadow-lg transition-all duration-500 bg-white hover:bg-blue-50 hover:-translate-y-2 hover:border-blue-300">
          <b className="block text-blue-600 mb-2 text-lg">Personalization</b>
          <p className="text-gray-600">
            Tailored recommendations and reminders to help you stay on top of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
