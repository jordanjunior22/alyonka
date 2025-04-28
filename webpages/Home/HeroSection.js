import React from 'react';
import { Truck, Box } from 'lucide-react'; // Import Lucid React icons

export default function HeroSection() {
  return (
    <section className="relative bg-[#871C10] text-white py-16 px-6 lg:px-20">
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Dependable Transportation Solutions for Every Need
          </h1>
          <p className="text-lg mb-6">
            Whether you’re shipping goods or driving with us, our commitment to safety, efficiency, and reliability sets us apart. Join us today.
          </p>

          {/* Badge */}
          <div className="inline-block bg-[#871C10]/80 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-md">
            24/7 Dispatch Support | 500+ Loads Delivered | DOT Certified
          </div>

          {/* CTAs */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#drive-with-us"
              className="inline-flex items-center text-white bg-black py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:bg-gray-800"
            >
              <Truck className="mr-2" size={24} /> Drive for Us
            </a>
            <a
              href="#book-load"
              className="inline-flex items-center text-black bg-white py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200"
            >
              <Box className="mr-2" size={24} /> Book a Load
            </a>
          </div>
        </div>

        {/* Right Section - Truck Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/truck.jpg"
            alt="Transport truck"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
