import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

export default function ContactHeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 lg:px-24 text-white"
      style={{ backgroundImage: "url('/contact.jpg')" }} // Replace with your actual image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Let’s Talk
        </h1>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Have a question, need support, or ready to move your goods? We’re here to help. Reach out today and let’s start the conversation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-white text-[#871C10] font-bold py-4 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300"
          >
            <PhoneCall size={20} />
            Call Us
          </a>
          <a
            href="mailto:info@example.com"
            className="flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-[#871C10] transition duration-300"
          >
            <Mail size={20} />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
