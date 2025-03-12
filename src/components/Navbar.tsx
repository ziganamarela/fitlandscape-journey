
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Updated nav links to match the image
  const navLinks = [
    { name: 'PowerTower', href: '#introduction' },
    { name: 'Accessories', href: '#features' },
    { name: 'Bundle', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="font-bold text-2xl">
            <span className="text-black font-bold">Fit</span>
            <span className="text-fitYellow font-bold">Anywhere</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-fitBlack hover:text-fitYellow transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#order"
            className="button-primary text-sm"
          >
            ORDER NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-fitBlack focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Styled to match the image */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center">
            <a href="#" className="font-bold text-2xl">
              <span className="text-black font-bold">Fit</span>
              <span className="text-fitYellow font-bold">Anywhere</span>
            </a>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="text-fitBlack"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-4 text-xl font-medium text-fitBlack border-b border-gray-100 hover:text-fitYellow"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-8">
            <a
              href="#order"
              className="w-full block py-4 bg-black text-white font-medium text-center rounded-full hover:bg-gray-900 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
