import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function WhyChooseUs({ openBooking }: { openBooking: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const features = [
    {
      title: "Skilled Professionals",
      desc: "Our team comprises highly qualified specialists with years of clinical experience."
    },
    {
      title: "Advanced Sterilization",
      desc: "We follow strict international protocols for hygiene and instrument sterilization."
    },
    {
      title: "Modern Technology",
      desc: "Equipped with 3D imaging, lasers, and digital scanners for precise treatments."
    },
    {
      title: "Comfortable Experience",
      desc: "A soothing environment designed to alleviate dental anxiety and ensure comfort."
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headings (Centered Highlight) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-brand-primary/10 mb-4">
            <h2 className="text-sm font-bold tracking-widest text-brand-primary-dark uppercase">Why Choose Us</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 md:mb-6">Experience the New Standard of Dentistry</h3>
          <p className="text-base md:text-lg text-gray-600">
            We believe that a visit to the dentist should be a positive, stress-free experience. Here is why thousands of patients trust us with their smiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/50 rounded-3xl transform -rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3]">
              <motion.img 
                style={{ y, scale: 1.2 }}
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80" 
                alt="RR Dentistry Clinic Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-brand-primary text-brand-primary-dark p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="text-4xl font-bold mb-2 text-brand-primary-dark">15+</div>
              <div className="text-sm font-medium">Years of Excellence in Dental Care in Hyderabad</div>
            </div>
          </div>

          {/* Right: Content (Features Grid & Button) */}
          <div className="flex flex-col h-full mt-8 md:mt-0 lg:pt-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-10 lg:mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-brand-bg p-6 rounded-2xl border border-gray-100 hover:border-brand-primary-dark/50 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-brand-primary-dark mb-4" />
                  <h4 className="text-lg font-bold text-brand-text mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Button */}
            <div className="flex justify-start">
              <button 
                onClick={openBooking} 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-brand-primary text-brand-primary-dark font-medium rounded-full hover:bg-brand-primary transition-colors shadow-sm w-full sm:w-auto"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
