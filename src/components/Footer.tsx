import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-text text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-primary-dark font-bold text-xl">
                R
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                RR Dentistry
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Premium dental care in Hyderabad, combining advanced technology with a gentle, patient-first approach for lasting smiles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-primary-dark transition-colors text-gray-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-primary-dark transition-colors text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-primary-dark transition-colors text-gray-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-primary-dark transition-colors text-gray-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Our Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-brand-primary transition-colors">Meet the Team</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand-primary transition-colors">Smile Gallery</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-brand-primary transition-colors">Dental Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Top Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Root Canal Treatment</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Orthodontics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Teeth Whitening</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Kids Dentistry</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">123, Jubilee Hills Road No. 36, Hyderabad, Telangana 500033</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span className="text-gray-400">hello@rrdentistry.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 RR Dentistry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Designed in India by</span>
            <span className="text-brand-primary font-medium">Sriniva</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
