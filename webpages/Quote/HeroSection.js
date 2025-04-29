import React from 'react';
import Link from 'next/link';
import { ArrowDownCircle } from 'lucide-react';

export default function DriveForUsHeroSection() {
  return (
    <section className="bg-[#FEECEB] text-[#871C10] py-24 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Become a Part of Our Fleet
          </h1>
          <p className="text-lg text-[#871C10]/90 mb-8">
            Join a team that values safety, reliability, and professionalism. Whether you're an experienced driver or just getting started, we offer great pay, flexible schedules, and a supportive community.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="#driver-application">
              <button className="cursor-pointer bg-[#871C10] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#70170c] transition duration-300 flex items-center gap-2">
                Apply Now
                <ArrowDownCircle size={24} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src="/drive.jpg" // Replace with your actual driver image
            alt="Drive for us"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
