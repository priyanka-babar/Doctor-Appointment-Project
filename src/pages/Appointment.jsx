import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOFWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState()


  useEffect(() => {   
        console.log("docInfo:", docInfo);
        console.log("docSlots:", docSlots);
        console.log("Selected Slot Index:", slotIndex);
        console.log("Selected Slot Time:", slotTime);

  }, [docInfo, docSlots, slotIndex, slotTime]);



  const fetchDocInfo = async () => {
    const info = doctors.find(doc => doc._id === docId)
    setDocInfo(info)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeslots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,          // 👉 FIX: AM/PM added here
        });

        timeslots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => [...prev, timeslots])
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) getAvailableSlots()
  }, [docInfo])

  return docInfo && (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Doctor Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start transform transition-all duration-500 hover:shadow-2xl">

        {/* Image */}
        <img src={docInfo.image} className="w-64 h-64 object-cover rounded-2xl shadow-md" />

        {/* Info */}
        <div className="flex flex-col justify-start">

          <h2 className="text-3xl font-bold">{docInfo.name}</h2>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>{docInfo.degree} • {docInfo.speciality}</p>
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-lg">{docInfo.experience}</span>
          </div>

          {/* About */}
          <p className="text-xl font-semibold mt-4 flex items-center gap-2">
            About
            <img src={assets.info_icon} className="w-5 h-5" />
          </p>
          <p className="text-gray-700 mt-2 text-sm leading-relaxed">{docInfo.about}</p>

          <p className="text-gray-600 mt-4 text-lg">
            Appointment Fee:
            <span className="font-semibold text-gray-800 ml-1">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Slot Section */}
      <div className="mt-10">
        <p className="text-lg font-semibold">Booking Slot</p>

        {/* Date Slots */}
        <div className="flex gap-4 overflow-x-auto mt-4 pb-2">
          {
            docSlots.map((daySlots, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`min-w-[70px] px-4 py-4 mt-1 rounded-full cursor-pointer text-center shadow-sm transition-all 
                  ${slotIndex === index ? 'bg-primary text-white scale-110' : 'bg-white border border-gray-200'}
                `}
              >
                <p className="font-semibold">{daysOFWeek[daySlots[0]?.datetime.getDay()]}</p>
                <p className="text-sm mt-1">{daySlots[0]?.datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        {/* Time Slots */}
        <p className="mt-6 text-lg font-medium">Available Time</p>
        <div className="flex  gap-3 overflow-x-auto mt-3 pb-2">
          {
            docSlots[slotIndex]?.map((slot, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(slot.time)}
                className={`px-5 flex-shrink-0  py-1 rounded-full text-sm cursor-pointer transition-all 
                  ${slot.time === slotTime
                    ? 'bg-primary text-white scale-105'
                    : 'bg-white border border-gray-300 text-gray-600'}
                `}
              >
                {slot.time}
              </p>
            ))
          }
        </div>

        {/* Book Button */}
        <button className="bg-primary text-white px-10 py-3 rounded-full text-lg mt-8 hover:bg-indigo-700 transition-all shadow-md">
          Book Appointment
        </button>

      </div>

      {/* Related Doctors */}
      <div className="mt-12">
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>

    </div>
  )
}

export default Appointment
