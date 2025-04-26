import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open/close state for the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" text-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black font-bold text-xl">
          <a href="/">Transporter</a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-black hover:text-gray-500">Home</a>
          <a href="/about" className="text-black hover:text-gray-500">About</a>
          <a href="/services" className="text-black hover:text-gray-500">Services</a>
          <a href="/quote" className="text-black hover:text-gray-500">Get a Quote</a>
          {/* <a href="/track" className="text-black hover:text-gray-500">Track Shipment</a> */}
          <a href="/contact" className="text-black hover:text-gray-500">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4 mt-2 space-y-4">
          <a href="/" className="text-black hover:text-gray-500 block">Home</a>
          <a href="/about" className="text-black hover:text-gray-500 block">About</a>
          <a href="/services" className="text-black hover:text-gray-500 block">Services</a>
          <a href="/quote" className="text-black hover:text-gray-500 block">Get a Quote</a>
          {/* <a href="/track" className="text-black hover:text-gray-500 block">Track Shipment</a> */}
          <a href="/contact" className="text-black hover:text-gray-500 block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
