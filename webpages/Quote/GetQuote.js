import React from 'react';
import Link from 'next/link';
import { PhoneCall, ArrowDownCircle } from 'lucide-react'; // Import MoveRight icon

export default function GetAQuoteHeroSection() {
  return (
    <section className="bg-[#871C10] text-white py-24 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Get a Fast & Reliable Quote <br /> For Your Shipment
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Whether you’re shipping across town or across borders, we’ll provide you with a customized quote that fits your needs—fast, simple, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="#quote-form">
              <button className="cursor-pointer bg-white text-[#871C10] font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 flex items-center gap-2">
                Get a Quote 
                <ArrowDownCircle size={24} className="ml-2" />
              </button>
            </Link>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-white hover:text-white/80 transition duration-200"
            >
              <PhoneCall size={20} />
              Call Us Directly
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/quote.jpg" // Replace with your actual image
            alt="Get a quote"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
