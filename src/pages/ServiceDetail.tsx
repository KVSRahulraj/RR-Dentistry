import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail({ openBooking }: { openBooking: () => void }) {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="pt-24 lg:pt-32 pb-16 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center text-sm font-medium text-gray-500 mb-6 sm:mb-12 gap-y-2">
          <Link to="/" className="hover:text-brand-primary-dark transition-colors flex items-center gap-1 shrink-0">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <span className="text-brand-primary-dark truncate">{service.title}</span>
        </nav>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-20 items-start">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-[48px] lg:top-32 z-20 w-full bg-brand-bg pt-4 pb-8 lg:bg-transparent lg:pt-0 lg:pb-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-brand-primary-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full mix-blend-multiply"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Quick Action under image (Desktop Only) */}
            <div className="hidden lg:flex mt-6 lg:mt-8 bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-gray-100 flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <h4 className="font-bold text-brand-text text-[15px] sm:text-lg">Ready to transform your smile?</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Our experts are here to help.</p>
              </div>
              <button 
                onClick={openBooking}
                className="w-full sm:w-auto px-6 py-3 bg-brand-primary-dark text-white rounded-full font-bold shadow-md"
              >
                Book Consult
              </button>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col w-full relative z-0 pt-2 lg:pt-0"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 w-fit mb-6">
              <span className="text-xs font-bold tracking-widest text-brand-primary-dark uppercase">
                Premium Dental Care
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-brand-text leading-tight mb-6">
              {service.title}
            </h1>
            
            <div className="prose prose-lg text-gray-600 mb-10">
              <p className="leading-relaxed">
                {service.description}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-text mb-6">Why choose our clinic for this?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At RR Dentistry, we prioritize your comfort and well-being. Using the latest technological advancements and minimally invasive techniques, we ensure this procedure is highly effective while keeping you completely relaxed.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-4 lg:mb-12">
              {service.benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-50 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                  <span className="text-brand-text font-medium text-sm md:text-base leading-tight">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Quick Action at bottom (Mobile Only) */}
            <div className="flex lg:hidden mt-8 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <h4 className="font-bold text-brand-text text-[15px] sm:text-lg">Ready to transform your smile?</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Our experts are here to help.</p>
              </div>
              <button 
                onClick={openBooking}
                className="w-full sm:w-auto px-6 py-3 bg-brand-primary-dark text-white rounded-full font-bold shadow-md"
              >
                Book Consult
              </button>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}
