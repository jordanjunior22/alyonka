import React from 'react';
import { User, Flag, PersonStanding } from 'lucide-react'; // Import Lucid React icons

export default function AboutUsSection() {
  return (
    <section className="relative bg-[#f5f5f5] py-20 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#871C10] mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a transportation company committed to providing reliable, efficient, and cost-effective solutions for all your shipping and delivery needs. Learn more about who we are and what we stand for.
          </p>
        </div>

        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left Section - Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h3 className="text-3xl font-semibold text-[#871C10] mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to revolutionize the transportation industry by providing efficient and safe delivery solutions tailored to meet the needs of businesses and individuals alike.
            </p>
            <p className="text-lg text-gray-600">
              We pride ourselves on our commitment to excellence, customer satisfaction, and on-time delivery. Our team works tirelessly to ensure that every shipment is handled with care and precision.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2">
            <img
              src="/dummy.jpg"
              alt="Our Team"
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-[#871C10] mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <Flag size={48} className="text-[#871C10] mb-4" />
              <h4 className="text-xl font-semibold text-[#871C10] mb-4">Integrity</h4>
              <p className="text-center text-gray-600">
                We uphold the highest standards of integrity in all of our actions, ensuring trust and transparency with our customers.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <PersonStanding size={48} className="text-[#871C10] mb-4" />
              <h4 className="text-xl font-semibold text-[#871C10] mb-4">Teamwork</h4>
              <p className="text-center text-gray-600">
                Our success is driven by collaboration, where each team member’s contribution is valued and our goals are shared.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <User size={48} className="text-[#871C10] mb-4" />
              <h4 className="text-xl font-semibold text-[#871C10] mb-4">Customer-Centric</h4>
              <p className="text-center text-gray-600">
                We put the needs of our customers first, providing personalized solutions and dedicated service to ensure satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-[#871C10] mb-6">Meet Our Team</h3>
          <p className="text-lg text-gray-600 mb-12">
            Our team of dedicated professionals is at the heart of our business, working together to deliver the best possible service.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-x-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center mb-8 sm:mb-0">
              <img
                src="/dummy.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h4 className="font-semibold text-[#871C10] mb-2">John Doe</h4>
              <p className="text-gray-600">CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center mb-8 sm:mb-0">
              <img
                src="/dummy.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h4 className="font-semibold text-[#871C10] mb-2">Jane Smith</h4>
              <p className="text-gray-600">COO</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center mb-8 sm:mb-0">
              <img
                src="/dummy.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h4 className="font-semibold text-[#871C10] mb-2">Michael Lee</h4>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
