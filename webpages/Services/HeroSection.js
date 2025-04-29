import React from 'react';
import { ArrowDownCircle } from 'lucide-react'; // Importing the double arrow down icon

export default function ServicesHeroSection() {
  return (
    <section className="bg-[#871C10] text-white py-20 px-6 lg:px-24 text-center lg:text-left">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">


        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Reliable Freight Solutions Tailored to Your Needs
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
            We provide a variety of transportation services to help you move goods efficiently, on time, and safely.
            Whether it's Full Truckload, Refrigerated Transport, or Long Haul Freight, our team ensures exceptional service.
          </p>

          <p className="text-lg text-gray-200 mb-8">
            Explore our services to find the perfect logistics solution for your business. Your satisfaction is our priority.
          </p>

          {/* CTA Button with Arrow Icon */}
          <a href="#services" className="bg-white text-[#871C10] cursor-pointer hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-3 transition duration-300">
            Explore Our Services
            <ArrowDownCircle size={24} className="ml-2" />
          </a>
        </div>
        
        {/* Optional Image */}
        <div className="flex-1 hidden lg:block">
          <img 
            src="/service-hero.jpg" 
            alt="Our Freight Services"
            className="w-full rounded-2xl shadow-lg object-cover h-96"
          />
        </div>
      </div>
    </section>
  );
}
