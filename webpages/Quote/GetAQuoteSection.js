import React from 'react';
import { Truck, Box, CheckCircle, MapPin } from 'lucide-react'; // Import icons

export default function GetAQuoteSection() {
  return (
    <section className="relative bg-[#f5f5f5] py-20 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Form */}
        <div className="bg-gradient-to-r from-[#871C10] to-[#d95f5f] p-8 rounded-lg shadow-lg lg:w-1/2 text-center lg:text-left max-w-xl mx-auto mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Get Your Personalized Quote
          </h2>
          <p className="text-lg text-white mb-6">
            Share a few details about your needs, and we'll provide you with a customized quote.
          </p>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="block text-lg font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="w-full p-4 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-4 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="service-type" className="block text-lg font-semibold text-white mb-2">
                Type of Service
              </label>
              <select
                id="service-type"
                className="w-full p-4 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
              >
                <option value="shipment">Shipment</option>
                <option value="freight">Freight</option>
                <option value="personal">Personal</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className="block text-lg font-semibold text-white mb-2">
                Additional Details
              </label>
              <textarea
                id="details"
                className="w-full p-4 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                rows="4"
                placeholder="Tell us more about your needs"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-8 bg-[#871C10] text-white text-lg font-semibold rounded-full hover:bg-[#6e140f] transition duration-300"
            >
              Get Quote
            </button>
          </form>
        </div>

        {/* Right Section - Procedures Steps */}
        <div className="lg:w-1/2 max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#871C10] mb-4 text-center">
            Our Simple Process
          </h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We believe in keeping things simple and transparent. Here’s how we work to provide you the best service:
          </p>

          {/* Steps */}
          <div>
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center mb-8">
              <Truck className="mx-auto text-[#871C10] mb-4" size={40} />
              <h4 className="text-xl font-semibold text-[#871C10] mb-2">Pick-up Arrangement</h4>
              <p className="text-gray-600">
                We coordinate the perfect time for pick-up and confirm the details to ensure everything goes smoothly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center mb-8">
              <MapPin className="mx-auto text-[#871C10] mb-4" size={40} />
              <h4 className="text-xl font-semibold text-[#871C10] mb-2">Route Optimization</h4>
              <p className="text-gray-600">
                Our advanced systems plan the most efficient and secure routes for your goods, ensuring on-time delivery.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center mb-8">
              <CheckCircle className="mx-auto text-[#871C10] mb-4" size={40} />
              <h4 className="text-xl font-semibold text-[#871C10] mb-2">Delivery Confirmation</h4>
              <p className="text-gray-600">
                Upon delivery, we confirm that everything has arrived safely and meet your satisfaction.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
              <Box className="mx-auto text-[#871C10] mb-4" size={40} />
              <h4 className="text-xl font-semibold text-[#871C10] mb-2">Feedback and Support</h4>
              <p className="text-gray-600">
                We always value your feedback and provide continuous support to resolve any issues or queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
