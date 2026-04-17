import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingElements({ openBooking }: { openBooking: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating elements only after scrolling past most of the hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Rotating Circular "Book Appointment" Button */}
      <button 
        onClick={openBooking}
        className="fixed bottom-6 right-6 z-50 w-24 h-24 rounded-full bg-black/10 backdrop-blur-md text-brand-primary-dark flex items-center justify-center shadow-xl hover:scale-105 transition-transform group border border-black/10"
      >
        <div className="absolute inset-0 rounded-full border border-black/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
        <div className="relative w-full h-full animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[11px] font-bold uppercase tracking-[0.2em] fill-brand-primary-dark">
              <textPath href="#curve" startOffset="0%">
                • Book Appointment • RR Dentistry
              </textPath>
            </text>
          </svg>
        </div>
        {/* Center Dot/Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-brand-primary-dark"></div>
        </div>
      </button>
    </div>
  );
}
