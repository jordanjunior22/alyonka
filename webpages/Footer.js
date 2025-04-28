import React from 'react';
import { Factory, TowerControl, Inspect, Link2 } from 'lucide-react'; // Import icons

export default function Footer() {
  return (
    <footer className="bg-[#871C10] text-white py-16 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-12 lg:space-y-0">
        
        {/* Left Section - Company Info */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-3xl font-extrabold mb-4">Transport Solutions</h3>
          <p className="text-lg mb-6">
            Providing dependable and efficient transportation solutions for all your needs. We’re here to ensure the safe and timely delivery of goods.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              <Factory size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <TowerControl size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Inspect size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Link2 size={24} />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-4 text-lg">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Copyright */}
        <div className="lg:w-1/3 text-center lg:text-right">
          <p className="text-lg">© 2025 Transport Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
