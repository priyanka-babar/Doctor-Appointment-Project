import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 px-6 md:px-16 py-12 mt-10 border-t border-gray-200">
      
      {/* ------- Top Section ------- */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* ------- Left Section ------- */}
        <div className="md:w-1/3">
          <img 
            src={assets.logo} 
            alt="Prescripto Logo" 
            className="w-32 mb-4"
          />
          <p className="text-sm leading-6 text-gray-600">
            Book appointments with experienced and trusted doctors in just a few clicks.  
            Explore a wide range of specialities and choose the best care for you.  
            We make healthcare simple, secure, and accessible for everyone.  
            Your health journey starts here with confidence and convenience.
          </p>
        </div>

        {/* ------- Center Section ------- */}
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-4">COMPANY</p>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
            <li className="hover:text-blue-600 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* ------- Right Section ------- */}
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-4">GET IN TOUCH</p>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">+91 123546789</li>
            <li className="hover:text-blue-600 cursor-pointer">doctorappointment@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* ------- Bottom Section ------- */}
      <hr className="border-gray-200 my-8" />
      <p className="text-center text-sm text-gray-500">
        © 2025 Prescripto. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
