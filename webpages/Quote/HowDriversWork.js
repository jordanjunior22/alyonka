import React from 'react';

export default function HowOurDriversWorkSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#871C10] mb-6">
          How Our Drivers Work
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Our drivers are the backbone of our operations. With flexible routes, reliable equipment, and ongoing support, they deliver excellence on every mile.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-[#871C10] mb-3">Flexible Scheduling</h3>
            <p className="text-gray-700">
              We work with each driver to build routes and schedules that fit their lifestyle—whether local, regional, or long-haul.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-[#871C10] mb-3">Well-Maintained Fleet</h3>
            <p className="text-gray-700">
              Our trucks are modern, safe, and regularly serviced, giving drivers confidence on the road every day.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-[#871C10] mb-3">24/7 Support</h3>
            <p className="text-gray-700">
              Drivers have access to round-the-clock dispatch and operations support to solve issues fast and keep deliveries on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
