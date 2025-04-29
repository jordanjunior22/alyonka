import React from 'react';

export default function CallToActionBanner() {
  return (
    <section 
      className="relative  text-white py-20 px-6 md:px-16 shadow-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center md:text-left md:items-start max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">
          Need Reliable Freight Transport?
        </h2>
        <p className="text-lg mb-6">
          Let us handle your next shipment with care, speed, and professionalism. Get in touch today for a quote.
        </p>
        <button className="bg-white text-[#871C10] hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
          Request a Quote
        </button>
      </div>
    </section>
  );
}
