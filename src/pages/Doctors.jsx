import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, specialityData } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // 🔁 Filter doctors when URL or doctor list changes
  useEffect(() => {
    if (doctors && Array.isArray(doctors)) {
      if (speciality) {
        const filtered = doctors.filter(
          (doc) => doc.speciality?.toLowerCase() === speciality.toLowerCase()
        );
        setFilterDoc(filtered);
      } else {
        setFilterDoc(doctors);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [speciality, doctors]);

  const handleSpecialityClick = (spec) => {
    if (spec.toLowerCase() === speciality?.toLowerCase()) {
      navigate('/doctors'); 
    } else {
      navigate(`/doctors/${spec}`);
    }
  };

  return (
    <div className="p-6">
      <p className="text-gray-600 text-lg mb-4">
        Browse through the doctor specialities.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Left side: Speciality list */}
        <div className="w-full sm:w-1/5 bg-white shadow-md rounded-xl p-4">
          <h3 className="font-semibold text-gray-700 mb-3">Specialities</h3>
          <div className="flex flex-col gap-3 text-gray-600">
            {specialityData.map((spec) => (
              <div
                key={spec.speciality}
                onClick={() => handleSpecialityClick(spec.speciality)}
                className={`flex items-center gap-2 cursor-pointer p-1 rounded-md transition-colors duration-200 ${
                  speciality?.toLowerCase() === spec.speciality.toLowerCase()
                    ? 'text-blue-600 font-semibold border-l-4 border-blue-600 pl-2 bg-blue-50'
                    : 'hover:text-blue-500 hover:bg-gray-50'
                }`}
              >
                {/* optional icon/image for each speciality */}
                {spec.image && (
                  <img
                    src={spec.image}
                    alt={spec.speciality}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                )}
                <p>{spec.speciality}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Doctor cards */}
        <div className="w-full sm:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="bg-white shadow-md hover:shadow-lg rounded-2xl p-4 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={item.image || assets.defaultDoctor}
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
            ))
          ) : (
            <p>No doctors found for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
