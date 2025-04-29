import Link from 'next/link'; // Make sure you import Link if using Next.js
import { Truck } from 'lucide-react';

export default function AboutHeroSection() {
  return (
    <section className="bg-[#871C10] text-white py-20 px-6 lg:px-24 text-center lg:text-left">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Optional Image */}
        <div className="flex-1 hidden lg:block">
          <img 
            src="/truck-team.jpeg" 
            alt="Our Transport Team" 
            className="w-full rounded-2xl shadow-lg object-cover h-96"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
            At Transport Solutions, we’re more than just a freight company — we’re your dedicated logistics partner.
            With years of experience and a passion for delivering excellence, we ensure that your goods arrive safely,
            on time, and with professionalism every step of the way.
          </p>
          <p className="text-lg text-gray-200 mb-8">
            From local distribution to long-haul transportation, we are driven by reliability, innovation, and a commitment
            to customer satisfaction.
          </p>

          {/* CTA Button with Icon */}
          <Link href="/careers">
            <button className="bg-white text-[#871C10] cursor-pointer hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center gap-3">
              {/* Truck Icon for Drive For Us */}
              <Truck size={24} />
              Drive For Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
