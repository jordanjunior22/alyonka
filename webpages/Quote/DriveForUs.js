import React from 'react';
import { Truck, DollarSign, Clock, User } from 'lucide-react'; // Import icons

export default function DriveForUsSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#871C10] to-[#d95f5f] py-20 px-6 lg:px-20 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Information */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Drive with Us and Start Earning!
          </h2>
          <p className="text-lg mb-8">
            Join our team and experience a rewarding career with flexible hours, great pay, and more. We value our drivers and provide all the tools for your success.
          </p>

          {/* Key Benefits */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Truck size={30} />
              <p className="text-lg font-semibold">Reliable & Safe Fleet</p>
            </div>
            <div className="flex items-center space-x-4">
              <DollarSign size={30} />
              <p className="text-lg font-semibold">Competitive Pay</p>
            </div>
            <div className="flex items-center space-x-4">
              <Clock size={30} />
              <p className="text-lg font-semibold">Flexible Hours</p>
            </div>
            <div className="flex items-center space-x-4">
              <User size={30} />
              <p className="text-lg font-semibold">Supportive Team</p>
            </div>
          </div>
        </div>

        {/* Right Section - Application Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#871C10] mb-6 text-center">
            Ready to Join Our Team?
          </h3>
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="block text-lg font-semibold text-[#871C10] mb-2">
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="w-full p-4 border border-[#871C10] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-[#871C10] mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                className="w-full p-4 border border-[#871C10] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-[#871C10] mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-4 border border-[#871C10] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-lg font-semibold text-[#871C10] mb-2">
                Years of Driving Experience
              </label>
              <input
                id="experience"
                type="number"
                className="w-full p-4 border border-[#871C10] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your years of driving experience"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full py-3 px-8 bg-[#871C10] text-white text-lg font-semibold rounded-full hover:bg-[#6e140f] transition duration-300"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
