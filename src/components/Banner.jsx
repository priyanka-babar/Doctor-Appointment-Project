import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
    return (
        <div className='flex bg-blue-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 '>
            {/* -------left side-------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className="flex flex-col items-center text-center text-3xl sm:text-4xl font-semibold text-white space-y-4">
                    <p>Book Appointment</p>
                    <p >With 100+ Trusted Doctors</p>

                    <button onClick={()=>navigate('/login')} className="mt-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium border border-gray-300 shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                        Create Account
                    </button>
                </div>

            </div>
            {/* -------right side-------- */}

            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img src={assets.appointment_img} alt="" className='w-full absolute bottom-0 right-0 max-w-md' />

            </div>
        </div>
    )
}

export default Banner