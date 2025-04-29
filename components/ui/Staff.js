import React from 'react';
import Link from 'next/link';
import { Users, Truck } from 'lucide-react';

export default function StaffAndServicesCTA() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 lg:px-24 text-white"
      style={{ backgroundImage: "url('/staff.jpg')" }} // replace with your actual image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Our Staff. Our Services. Your Success.
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
          Our team is made up of experienced, dedicated professionals committed to delivering reliable transportation solutions. With top-tier service and industry know-how, we go the extra mile—literally—for every client.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/about">
            <button className="flex cursor-pointer items-center gap-2 bg-white text-[#871C10] font-bold py-4 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300">
              <Users size={20} />
              Meet Our Staff
            </button>
          </Link>
          <Link href="/services">
            <button className=" cursor-pointer flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-[#871C10] transition duration-300">
              <Truck size={20} />
              View Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
