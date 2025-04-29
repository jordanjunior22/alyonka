import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Listen for scroll events to toggle fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md' : 'sticky top-0'
      } text-lg p-8 transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo Image */}
        <div>
          <a href="/">
            <img
              src="/logo.png" // Replace with your actual logo path
              alt="Transporter Logo"
              className="h-auto max-h-12 sm:max-h-16 md:max-h-12 lg:max-h-20" // Responsive logo size
            />
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Home</a>
          <a href="/about" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">About</a>
          <a href="/services" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Services</a>
          <a href="/get-a-quote" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Get a Quote</a>
          <a href="/drive-for-us" className="text-[#871C10] hover:text-gray-500 dark:text-white dark:hover:text-[#871C10]">Drive For Us</a>
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
        <div className="md:hidden p-4 space-y-4 bg-[#871C10] text-white">
          <a href="/" className="hover:text-gray-300 block">Home</a>
          <a href="/about" className="hover:text-gray-300 block">About</a>
          <a href="/services" className="hover:text-gray-300 block">Services</a>
          <a href="/get-a-quote" className="hover:text-gray-300 block">Get a Quote</a>
          <a href="/drive-for-us" className="hover:text-gray-300 block">Drive For Us</a>
          <a href="/contact" className="hover:text-gray-300 block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
