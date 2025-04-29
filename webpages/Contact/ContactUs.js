import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPageSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* Left Section - Contact Info and Map */}
        <div className="lg:w-1/2 flex flex-col space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6 text-center lg:text-left">
              Get In Touch With Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
              Have any questions or need assistance? We’d love to hear from you! Reach out to us through any of the methods below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin size={30} className="text-[#871C10]" />
                <p className="text-lg text-gray-700 font-semibold">
                  Our Office: 123 Transport Street, Yaoundé, Cameroon
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={30} className="text-[#871C10]" />
                <p className="text-lg text-gray-700 font-semibold">
                  Phone: +237 655 123 456
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={30} className="text-[#871C10]" />
                <p className="text-lg text-gray-700 font-semibold">
                  Email: contact@transportsolutions.com
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-6 border border-[#871C10] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8157921383743!2d11.512139474994745!3d3.8480328961497345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd55e0145a5f9%3A0xf0f0af706aec94a3!2sYaound%C3%A9!5e0!3m2!1sen!2scm!4v1682112345678"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#871C10] mb-6 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-[#871C10] mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-4 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-[#871C10] mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-4 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-[#871C10] mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-4 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#871C10] transition duration-300 text-black"
                rows="4"
                placeholder="Write your message"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-8 bg-[#871C10] text-white text-lg font-semibold rounded-full hover:bg-[#6e140f] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
