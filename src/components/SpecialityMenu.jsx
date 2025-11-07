import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="text-center py-10 px-6 md:px-16 bg-gray-50">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Find By Speciality
      </h1>

      {/* Sub text */}
      <p className="text-gray-600 text-sm md:text-base mb-10">
        Simply browse through our extensive list of trusted doctors,
        <br className="hidden sm:block" />
        and schedule your appointment hassle-free.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctor/${item.speciality}`}
            className="flex flex-col items-center bg-white shadow-md hover:shadow-lg rounded-xl p-4 hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-gray-800 font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
