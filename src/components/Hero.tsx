import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-brand-bg">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] bg-brand-primary-dark">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1024px)" srcSet="https://drive.google.com/thumbnail?id=1oiq2pyNCrZyh9nAO-H4F-4FAqHw9deCc&sz=w1920" />
          <img 
            src="https://drive.google.com/thumbnail?id=17O13HUSy_Q4kdrEkIixz620jcKwcbj9h&sz=w1000" 
            alt="RR Dentistry Hero" 
            className="w-full h-full object-cover object-[center_15%] md:object-center" 
            referrerPolicy="no-referrer" 
          />
        </picture>
      </motion.div>

      {/* Subtle Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>

      {/* Text Content */}
      <div className="absolute bottom-8 md:bottom-[15%] lg:bottom-[10%] left-0 right-0 z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Rounded Box with Continuous Lighting */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-flex mb-4 md:mb-6 lg:mb-10 rounded-full p-[2px] overflow-hidden shadow-lg"
          >
            {/* Animated Border Layer */}
            <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_20%,rgb(255,180,180)_50%,transparent_80%,transparent_100%)] opacity-70" />
            
            {/* Inner Content Layer */}
            <div className="relative w-full h-full px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/5 flex items-center justify-center">
              <span className="text-base sm:text-lg md:text-2xl lg:text-4xl font-medium text-[#f5d0c5] tracking-wide drop-shadow-lg relative z-10">
                Dentistry
              </span>
            </div>
          </motion.div>
          
          {/* Main Text */}
          <h1 className="text-[2.75rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[110px] text-white tracking-tight drop-shadow-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-medium italic inline-block"
            >
              CRAFTING
            </motion.span>{' '}
            <br className="hidden md:block lg:hidden" />
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="font-black inline-block"
            >
              BEAUTIFUL SMILES
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-3 md:mt-6 text-[15px] sm:text-lg md:text-2xl text-gray-100 max-w-2xl drop-shadow-md font-light"
          >
            Experience world-class dentistry in Hyderabad with our expert team and state-of-the-art facilities.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
