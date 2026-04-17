import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BookAppointment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="book" className="py-12 md:py-20 bg-brand-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            {/* Left: Form */}
            <div className="p-6 md:p-16">
              <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">Request an Appointment</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">Ready to Transform Your Smile?</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address (Optional)</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select id="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-600">
                    <option value="">Select a service</option>
                    <option value="consultation">General Consultation</option>
                    <option value="implants">Dental Implants</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="ortho">Orthodontics (Braces/Aligners)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Any specific concerns? (Optional)</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>
                
                <button type="button" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-primary text-brand-primary-dark font-medium rounded-full hover:bg-brand-primary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                  Book Appointment <ArrowRight className="w-5 h-5" />
                </button>

                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <a href="https://wa.me/919657580595" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20bd5a] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </form>
            </div>

            {/* Right: Info & Image */}
            <div className="relative bg-brand-primary text-brand-primary-dark p-6 md:p-16 flex flex-col justify-between overflow-hidden">
              {/* Overlay Image */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay overflow-hidden">
                <motion.img 
                  style={{ y, scale: 1.3 }}
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop&q=80" 
                  alt="Clinic Reception" 
                  className="w-full h-full object-cover grayscale brightness-50"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Experience Advanced Dentistry in Hyderabad</h3>
                <p className="text-brand-primary-dark/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                  Join thousands of satisfied patients who have trusted us with their smiles. Our team is ready to provide you with personalized, world-class dental care.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Phone className="w-5 h-5 text-brand-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us Directly</h4>
                      <p className="text-brand-primary-dark/80">+91 98765 43210</p>
                      <p className="text-brand-primary-dark/80">+91 40 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-brand-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-brand-primary-dark/80">hello@rajdentistry.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <MapPin className="w-5 h-5 text-brand-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Visit Our Clinic</h4>
                      <p className="text-brand-primary-dark/80 leading-relaxed mb-3">
                        123, Jubilee Hills Road No. 36,<br />
                        Hyderabad, Telangana 500033
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Jubilee+Hills+Road+No.+36,+Hyderabad,+Telangana+500033" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-primary-dark hover:text-brand-primary-dark/80 transition-colors font-medium text-sm"
                      >
                        Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 rounded-xl overflow-hidden h-48 relative z-10 border border-white/10 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.324316886494!2d78.4023243153702!3d17.43000598805305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9146a84c2f8d%3A0x6b4a3a3b5c6d7e8f!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
