import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open/close state for the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 text-lg p-8">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-[#871C10] font-bold text-xl">
          <a href="/">Transporter</a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Home</a>
          <a href="/about" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">About</a>
          <a href="/services" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Services</a>
          <a href="/quote" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Get a Quote</a>
          <a href="/track" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Drive For Us</a>
          <a href="/contact" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#871C10]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4 mt-2 space-y-4 bg-[#871C10] text-white">
          <a href="/" className="hover:text-gray-300 block">Home</a>
          <a href="/about" className="hover:text-gray-300 block">About</a>
          <a href="/services" className="hover:text-gray-300 block">Services</a>
          <a href="/quote" className="hover:text-gray-300 block">Get a Quote</a>
          <a href="/track" className="hover:text-gray-300 block">Drive For Us</a>
          <a href="/contact" className="hover:text-gray-300 block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
