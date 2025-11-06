import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-400 rounded-2xl px-6 md:px-10 lg:px-20 py-10 shadow-md">

            {/* ---- Left Side ---- */}
            <div className="flex flex-col gap-6 max-w-xl">
                <p className="text-3xl md:text-4xl font-bold  text-white leading-snug">
                    Book Appointment <br /> With Trusted Doctors
                </p>

                <div className="flex items-center gap-4">
                    <img src={assets.group_profiles} alt="Doctors" className="w-28 md:w-36" />
                    <p className=" text-sm md:text-base text-white">
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        and schedule your appointment hassle-free.
                    </p>
                </div>
                <a
                    href="#speciality"
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black-600 font-medium px-6 py-3 rounded-full w-fit text-sm md:text-base shadow-md transition-all duration-300"
                >
                    Book Appointment
                    <img src={assets.arrow_icon} alt="arrow" className="w-4" />
                </a>

            </div>

            {/* ---- Right Side ---- */}
            <div className="mt-8 md:mt-0">
                <img
                    src={assets.header_img}
                    alt="Doctor Illustration"
                    className="w-full max-w-md drop-shadow-xl"
                />
            </div>
        </div>
    )
}

export default Header
