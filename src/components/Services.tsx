import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "single-visit-crowns",
    title: "Single Visit Crowns",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M12 22c0-6 12-8 14 0c0 4-14 4-14 0z" />
        <path d="M26 22c0-6 12-8 12 0c0 4-12 4-12 0z" />
        <path d="M38 22c0-6 12-8 14 0c0 4-14 4-14 0z" />
        <path d="M32 30v12m-4-4l4 4 4-4" />
        <path d="M14 46c0-6 10-6 10 0v8c0 4-4 4-5 0v-2h-5z" />
        <path d="M40 46c0-6 10-6 10 0v8c0 4-4 4-5 0v-2h-5z" />
        <path d="M24 48c4 4 12 4 16 0" />
      </svg>
    )
  },
  {
    id: "microscope-root-canals",
    title: "Microscope\nAssessed Root\nCanals",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M14 26c0-8 8-10 12-10h2" />
        <path d="M36 16h2c4 0 12 2 12 10v12c0 6-4 12-6 12s-4-6-4-6-2 6-6 6-6-6-6-6-2 6-6 6-6-6-6-12V26" />
        <path d="M32 12v12" />
        <path d="M28 12h8v4h-8z" />
        <path d="M36 14h12" />
        <path d="M48 12v4" />
        <circle cx="32" cy="26" r="2" />
      </svg>
    )
  },
  {
    id: "full-mouth-rehab",
    title: "Full Mouth\nRehabilitation",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M12 26c0-8 40-8 40 0v4c0 4-40 4-40 0v-4z" />
        <path d="M12 38c0 8 40 8 40 0v-4c0-4-40-4-40 0v4z" />
        <path d="M20 22v8M28 22v8M36 22v8M44 22v8" />
        <path d="M20 34v8M28 34v8M36 34v8M44 34v8" />
      </svg>
    )
  },
  {
    id: "invisalign",
    title: "Invisalign",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M14 34c0 10 36 10 36 0" />
        <path d="M20 34v6M28 34v8M36 34v8M44 34v6" />
        <path d="M12 30h40" />
        <path d="M12 30c0 14 40 14 40 0" strokeDasharray="4 4" />
        <path d="M48 20v6M45 23h6" />
        <path d="M16 44v4M14 46h4" />
      </svg>
    )
  },
  {
    id: "cleanups",
    title: "Cleanups",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M24 20c0-8 16-8 16 0v16c0 8-4 16-8 16s-4-8-4-8-0 8-4 8-8-8-8-16v-16z" />
        <path d="M10 32c0-4 22-8 44-4" />
        <path d="M10 32c0 4 22 8 44 4" strokeDasharray="4 4" />
        <path d="M44 14l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
        <path d="M20 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
      </svg>
    )
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M22 24c0-10 20-10 20 0v12c0 6-5 10-10 10s-10-4-10-10V24z" />
        <path d="M32 46v12" />
        <path d="M28 50h8" />
        <path d="M28 54h8" />
        <path d="M26 46h12" />
      </svg>
    )
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M22 26c0-10 20-10 20 0v14c0 8-5 14-10 14s-10-6-10-14V26z" />
        <path d="M44 16l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
        <path d="M16 20l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
        <path d="M48 40l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
      </svg>
    )
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric\nDentistry",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 text-brand-text">
        <path d="M20 26c0-12 24-12 24 0v16c0 8-6 14-12 14s-12-6-12-14V26z" />
        <circle cx="28" cy="28" r="2" fill="currentColor" />
        <circle cx="36" cy="28" r="2" fill="currentColor" />
        <path d="M28 34c0 4 8 4 8 0" />
      </svg>
    )
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate services to create a seamless infinite scroll effect for desktop
  const duplicatedServices = [...services, ...services, ...services, ...services];

  // Group services into chunks of 4 for mobile Ludo Box layout
  const mobileServiceGroups = [];
  for (let i = 0; i < services.length; i += 4) {
    mobileServiceGroups.push(services.slice(i, i + 4));
  }

  // JS-driven infinite scroll for mobile that allows manual swiping
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let isDown = false;

    // Detect touch/click to pause auto-scroll
    const handleDown = () => { isDown = true; };
    const handleUp = () => { isDown = false; };
    
    el.addEventListener('mousedown', handleDown);
    el.addEventListener('mouseup', handleUp);
    el.addEventListener('mouseleave', handleUp);
    el.addEventListener('touchstart', handleDown);
    el.addEventListener('touchend', handleUp);

    const scroll = () => {
      if (!isDown) {
        // Adjust the numeric value (0.8) to make it faster or slower
        el.scrollLeft += 0.50; 
        
        // Loop when hitting a threshold
        // By using multiplied items, we just reset scroll when we are 1/3 deep
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      el.removeEventListener('mousedown', handleDown);
      el.removeEventListener('mouseup', handleUp);
      el.removeEventListener('mouseleave', handleUp);
      el.removeEventListener('touchstart', handleDown);
      el.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FCF9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        {/* Desktop View: Marquee */}
        <div className="hidden md:block relative overflow-hidden w-full">
          {/* Left/Right Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FCF9F9] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FCF9F9] to-transparent z-10 pointer-events-none"></div>

          {/* Services Carousel */}
          <div className="flex animate-marquee w-max gap-24 pb-8 pt-4 px-4 hover:[animation-play-state:paused]">
            {duplicatedServices.map((service, index) => (
              <Link 
                key={index}
                to={`/services/${service.id}`} 
                className="flex-none w-[200px] flex flex-col items-center justify-start text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div className="group-hover:text-brand-primary transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg text-brand-text font-medium whitespace-pre-line leading-snug group-hover:text-brand-primary-dark transition-colors duration-300">
                  {service.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile View: Ludo Boxes Carousel */}
        <div className="md:hidden relative w-[100vw] -ml-4 pb-6">
          {/* Left/Right Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FCF9F9] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FCF9F9] to-transparent z-10 pointer-events-none"></div>
          
          {/* Native scroll container */}
          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto gap-4 px-4 hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...mobileServiceGroups, ...mobileServiceGroups, ...mobileServiceGroups].map((group, groupIndex) => (
              <div key={groupIndex} className="w-[calc(100vw-2rem)] flex-shrink-0 grid grid-cols-2 grid-rows-2 gap-3">
                {group.map((service, itemIndex) => (
                  <Link 
                    key={`${groupIndex}-${itemIndex}`}
                    to={`/services/${service.id}`}
                    className="bg-white border border-brand-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center aspect-square shadow-sm [&>svg]:!mb-3 [&>svg]:!w-14 [&>svg]:!h-14 hover:border-brand-primary hover:shadow-md transition-all active:scale-95"
                  >
                    <div className="text-brand-text">
                      {service.icon}
                    </div>
                    <h4 className="text-[14px] text-brand-text font-semibold whitespace-pre-line leading-tight">
                      {service.title}
                    </h4>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
