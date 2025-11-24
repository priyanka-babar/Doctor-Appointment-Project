import React, { use, useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors} =useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

    const navigate=useNavigate()


    useEffect(() => {
        if(doctors.length>0 && speciality) {
 const related = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId);
        setRelDoc(related);
        }

       
    }, [doctors, speciality, docId]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
        Top Doctors To Book
      </h1>
      <p className="text-gray-500 mb-10">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {relDoc.slice(0, 5).map((item, index) => (
          <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
            key={index}
            className="bg-white shadow-md hover:shadow-lg rounded-2xl p-4 transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
            <div className="text-left">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-400">⭐ 4.8</p>
                <p className="text-xs text-green-500 font-medium">Available</p>
              </div>
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button onClick={()=>{navigate('/doctor');scrollTo(0,0)}} className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
        More
      </button>
    </div>
  )
}

export default RelatedDoctors