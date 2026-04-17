/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Specialists from './components/Specialists';
import Testimonials from './components/Testimonials';
import BookAppointment from './components/BookAppointment';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text selection:bg-brand-secondary/30 selection:text-brand-primary-dark">
      <Header openBooking={() => setIsBookingOpen(true)} />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyChooseUs openBooking={() => setIsBookingOpen(true)} />
        <Team />
        <Specialists />
        <Testimonials />
        <BookAppointment />
      </main>
      <Footer />
      <FloatingElements openBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
