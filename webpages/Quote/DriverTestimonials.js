import React from 'react';
import { Quote } from 'lucide-react';

export default function DriverTestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#871C10] mb-6">
          What Our Drivers Say
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Hear directly from our team about what it’s like to drive with us. Real stories. Real support. Real success.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <Quote className="text-[#871C10] mb-4" size={32} />
            <p className="text-gray-700 mb-4 italic">
              “I've driven for different companies, but this one really cares about drivers. The dispatch team is always helpful, and my routes fit my schedule.”
            </p>
            <div className="font-bold text-[#871C10]">James T., Regional Driver</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <Quote className="text-[#871C10] mb-4" size={32} />
            <p className="text-gray-700 mb-4 italic">
              “Reliable equipment and no stress. The trucks are in great condition, and I never worry about breakdowns. I feel safe every mile.”
            </p>
            <div className="font-bold text-[#871C10]">Linda M., Long-Haul Driver</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-left">
            <Quote className="text-[#871C10] mb-4" size={32} />
            <p className="text-gray-700 mb-4 italic">
              “I joined with little experience, but the team helped me grow. I now handle my own routes with confidence and consistency.”
            </p>
            <div className="font-bold text-[#871C10]">Carlos R., Local Driver</div>
          </div>
        </div>
      </div>
    </section>
  );
}
