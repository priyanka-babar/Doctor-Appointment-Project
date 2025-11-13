import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState()

  const fetchDocInfo = async () => {
    const info = doctors.find(doc => doc._id === docId)
    setDocInfo(info)
  }
  const getAvailableSlots=async()=>{
    setDocSlots([])

    // getting current date

    let today=new date()
    for(i=0;i<7;i++){
      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)
      // setting end time of the date with index
      let endTime=new Date()
      endTime.setDate(today.getDate()+1)
      endTime.setHours(21,0,0,0)

      // setting hours
      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  return docInfo && (
    <div className='max-w-6xl mx-auto px-4 py-10'>

      {/* Doctor Card Section */}
      <div className='bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 p-6'>

        {/* Doctor Image */}
        <div className='flex-shrink-0'>
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className='w-60 h-60 object-cover rounded-2xl shadow-md'
          />
        </div>

        {/* Doctor Info */}
        <div className='flex flex-col justify-start'>
          {/* Name + Verified */}
          <div>
            <h2 className='text-2xl font-semibold flex items-center gap-2'>
              {docInfo.name}
              <img src={assets.verified_icon} alt="verified" className='w-5 h-5' />
            </h2>

            {/* Degree + Speciality + Experience inline */}
            <div className='flex flex-wrap items-center gap-2 mt-1 text-gray-600'>
              <p>{docInfo.degree} – {docInfo.speciality}</p>
              <button className='bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-lg font-medium'>
                {docInfo.experience}
              </button>
            </div>
          </div>

          {/* About (reduced spacing) */}
          <div className='mt-3'>
            <p className='text-lg font-semibold flex items-center gap-2'>
              About <img src={assets.info_icon} alt="info" className='w-5 h-5' />
            </p>
            <p className='text-gray-700 mt-1 leading-relaxed text-sm'>
              {docInfo.about}
            </p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Appointment
