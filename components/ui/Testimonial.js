import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jessica Nguyen',
    position: 'Logistics Manager at FreshGrocer Co.',
    text: "Outstanding service! Our shipments always arrive on time and in perfect condition. Their team is reliable and responsive — they truly go above and beyond.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'Operations Director at BuildMax Supplies',
    text: "Professional and efficient from start to finish. I appreciate how smoothly our freight moves every single time. Highly recommend for long-haul needs.",
    rating: 4,
  },
  {
    id: 3,
    name: 'Emily Chen',
    position: 'Procurement Lead at Pacific Organics',
    text: "Their refrigerated transport kept our sensitive goods perfectly preserved. Communication was excellent, and the delivery crew was polite and punctual.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#871C10] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Trusted by businesses nationwide for dependable freight transportation.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ id, name, position, text, rating }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700 mb-4 italic">“{text}”</p>

            <div className="flex items-center mb-2 text-yellow-500">
              {Array.from({ length: rating }).map((_, idx) => (
                <Star key={idx} size={20} fill="currentColor" stroke="currentColor" />
              ))}
              {Array.from({ length: 5 - rating }).map((_, idx) => (
                <Star key={idx + rating} size={20} stroke="currentColor" />
              ))}
            </div>

            <div className="text-sm text-gray-900 font-semibold">{name}</div>
            <div className="text-xs text-gray-500">{position}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
