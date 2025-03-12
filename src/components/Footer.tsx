
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <a href="mailto:be@fitanywhere.today" className="flex items-center text-fitBlack hover:text-fitYellow transition-colors duration-300">
                <Mail size={18} className="mr-2" />
                <span>be@fitanywhere.today</span>
              </a>
            </div>
            <p className="text-sm text-fitBlack/60 mt-2">
              © 2025 FitAnywhere. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-fitBlack hover:text-fitYellow transition-colors duration-300"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
