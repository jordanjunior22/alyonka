const Footer = () => {
  return (
    <footer className="bg-[#871C10] text-white p-8">
      <div className="container mx-auto py-20 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Info */}
          <div>
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png" // Replace with your actual logo path
                alt="Transporter Logo"
                className="h-auto max-h-12" // Logo size
              />
            </a>
            <p className="mt-4 text-sm">
              Transporter is your reliable partner in trucking and logistics solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/services" className="hover:text-gray-300">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>Email: contact@transporter.com</li>
              <li>Phone: +1 800-123-4567</li>
              <li>Address: 123 Transport St, City, Country</li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <ul className="mt-4 flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Transporter. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
