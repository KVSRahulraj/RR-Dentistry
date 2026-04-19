/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg font-sans text-brand-text selection:bg-brand-secondary/30 selection:text-brand-primary-dark flex flex-col">
        <Header openBooking={() => setIsBookingOpen(true)} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home openBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/services/:id" element={<ServiceDetail openBooking={() => setIsBookingOpen(true)} />} />
          </Routes>
        </div>
        <Footer />
        <FloatingElements openBooking={() => setIsBookingOpen(true)} />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </Router>
  );
}
