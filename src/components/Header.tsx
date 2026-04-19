import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export default function Header({ openBooking }: { openBooking: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.7;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTop = !isScrolled;
  const isTransparent = isHome && isTop;

  const textColor = isTransparent ? 'text-white' : 'text-brand-primary-dark';
  const hoverColor = isTransparent ? 'hover:text-white/80' : 'hover:text-brand-primary';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!isTransparent ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5 lg:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`flex items-center gap-3 md:gap-4 ${textColor} transition-colors duration-300`}>
            <svg width="24" height="32" viewBox="0 0 24 32" className="fill-current w-5 h-6 md:w-6 md:h-8">
              <circle cx="4" cy="28" r="4"/>
              <polygon points="6,0 14,0 22,32 14,32"/>
            </svg>
            <span className="font-bold text-base md:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase">
              RR Dentistry
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-8 rounded-full px-8 py-3 transition-all duration-300 ${isTransparent ? 'bg-white/10 backdrop-blur-md border border-white/20' : ''}`}>
            <a href="#" className={`${textColor} ${hoverColor} font-medium transition-colors text-sm uppercase tracking-wider`}>Home</a>
            <a href="#about" className={`${textColor} ${hoverColor} font-medium transition-colors text-sm uppercase tracking-wider`}>About</a>
            
            {/* Mega Menu Trigger */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 ${textColor} ${hoverColor} font-medium transition-colors py-1 text-sm uppercase tracking-wider`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4 ml-0.5" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] ${isTransparent ? 'bg-white/10 border-white/20' : 'bg-white border-gray-100'} backdrop-blur-lg rounded-2xl shadow-xl border p-6 transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {servicesData.map((service) => (
                    <Link key={service.id} to={`/services/${service.id}`} className={`flex items-center gap-3 p-2 rounded-lg transition-colors group/item ${isTransparent ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`} onClick={() => setIsServicesOpen(false)}>
                      <div className={`w-2 h-2 rounded-full transition-colors ${isTransparent ? 'bg-white/40 group-hover/item:bg-white' : 'bg-brand-primary-dark/30 group-hover/item:bg-brand-primary-dark'}`}></div>
                      <span className={`text-sm font-medium transition-colors ${isTransparent ? 'text-white/90 group-hover/item:text-white' : 'text-gray-800 group-hover/item:text-brand-primary-dark'}`}>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="#gallery" className={`${textColor} ${hoverColor} font-medium transition-colors text-sm uppercase tracking-wider`}>Gallery</a>
            <a href="#contact" className={`${textColor} ${hoverColor} font-medium transition-colors text-sm uppercase tracking-wider`}>Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Right Side: CTA */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={openBooking}
                className={`px-5 lg:px-8 py-2.5 lg:py-3 rounded-full border-2 transition-all duration-300 text-xs lg:text-sm font-bold tracking-wide shadow-sm hover:shadow-md whitespace-nowrap ${
                  !isTransparent 
                    ? 'border-brand-primary bg-brand-primary text-white hover:bg-brand-primary-dark hover:border-brand-primary-dark' 
                    : 'border-white bg-white text-brand-primary-dark hover:bg-white/90 hover:border-white/90'
                }`}
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`lg:hidden p-2 ${textColor} transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
          <a href="#" className="font-medium text-lg text-gray-800 p-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="font-medium text-lg text-gray-800 p-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          
          <div className="flex flex-col gap-2">
            <div className="font-medium text-lg text-gray-800 p-2 flex justify-between items-center" onClick={() => setIsServicesOpen(!isServicesOpen)}>
              Services <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all ${isServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
              {servicesData.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className="text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <a href="#gallery" className="font-medium text-lg text-gray-800 p-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="font-medium text-lg text-gray-800 p-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4">
            <button onClick={() => { openBooking(); setIsMobileMenuOpen(false); }} className="flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-primary-dark transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
