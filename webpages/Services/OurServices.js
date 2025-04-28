import React from 'react';
import { Truck, Box, Globe, Shield } from 'lucide-react'; // Import Lucid React icons

export default function OurServices() {
  return (
    <section className="relative bg-[#f5f5f5] py-20 px-6 lg:px-20">
      <div className="absolute top-0 left-0 right-0 -z-10">
        {/* Background diagonal dividers */}
        <svg width="100%" height="200px" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#871C10" d="M0,0 L0,80 L720,200 L1440,80 L1440,0 Z" />
        </svg>
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#871C10] mb-4">
          Our Unique Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer unparalleled services in the transportation industry, ensuring every delivery is safe, fast, and efficient. Discover what sets us apart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Service Card 1 */}
        <div className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 right-0 -z-10 bg-[#871C10] h-full w-full rounded-xl shadow-lg opacity-40"></div>
          <Truck size={48} className="text-[#871C10] mb-6" />
          <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Freight Delivery</h3>
          <p className="text-center text-gray-600">
            Fast and reliable freight delivery with optimized routes to ensure your goods arrive on time.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 right-0 -z-10 bg-[#871C10] h-full w-full rounded-xl shadow-lg opacity-40"></div>
          <Box size={48} className="text-[#871C10] mb-6" />
          <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Load Booking</h3>
          <p className="text-center text-gray-600">
            Easily book a load with our seamless platform, ensuring quick confirmation and transparent pricing.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 right-0 -z-10 bg-[#871C10] h-full w-full rounded-xl shadow-lg opacity-40"></div>
          <Globe size={48} className="text-[#871C10] mb-6" />
          <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Global Coverage</h3>
          <p className="text-center text-gray-600">
            Our network spans across continents, ensuring we can deliver wherever you need us to go.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 right-0 -z-10 bg-[#871C10] h-full w-full rounded-xl shadow-lg opacity-40"></div>
          <Shield size={48} className="text-[#871C10] mb-6" />
          <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Safety & Security</h3>
          <p className="text-center text-gray-600">
            We prioritize safety with constant vehicle monitoring and secure handling of your goods.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-[#871C10] py-3 px-8 rounded-full font-semibold text-lg shadow-md"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
