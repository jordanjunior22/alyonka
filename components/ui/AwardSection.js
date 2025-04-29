import React from 'react';
import { Award, ShieldCheck, ThumbsUp } from 'lucide-react'; // Lucide icons

export default function AwardsSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#871C10] mb-6">
          Our Commitment Recognized
        </h2>
        <p className="text-lg text-gray-700 mb-14 max-w-2xl mx-auto">
          We are proud to be recognized for our unwavering commitment to excellence, safety, and customer satisfaction.
        </p>

        {/* Badges/Awards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Award 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <Award size={50} className="text-[#871C10]" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Top Logistics Company 2024</h4>
            <p className="text-gray-600 text-center max-w-xs">
              Recognized for outstanding service and reliability in freight transportation.
            </p>
          </div>

          {/* Award 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <ShieldCheck size={50} className="text-[#871C10]" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Certified Safety Excellence</h4>
            <p className="text-gray-600 text-center max-w-xs">
              Awarded for maintaining the highest safety standards in the industry.
            </p>
          </div>

          {/* Award 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <ThumbsUp size={50} className="text-[#871C10]" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Customer Choice Award</h4>
            <p className="text-gray-600 text-center max-w-xs">
              Voted by customers for exceptional service, support, and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
