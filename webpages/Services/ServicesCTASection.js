import React from 'react';
import { Truck, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ServicesCTASection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-20"
      style={{ backgroundImage: 'url(/services-cta.jpg)' }} // Make sure this image exists in your public folder
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">
        Looking for a Reliable Freight Partner You Can Trust?
        </h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-200">
          From local deliveries to nationwide freight hauling, our expert team ensures your cargo is moved securely, efficiently, and on schedule — every time.
        </p>

        {/* Service Highlights */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex flex-col items-center text-center">
            <Truck size={40} className="text-white mb-2" />
            <p className="text-lg font-semibold">Modern, Well-Maintained Fleet</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock size={40} className="text-white mb-2" />
            <p className="text-lg font-semibold">On-Time Delivery Guaranteed</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={40} className="text-white mb-2" />
            <p className="text-lg font-semibold">Safety & Compliance First</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/services"
          className="bg-white text-[#871C10] hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
