import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Specialists from '../components/Specialists';
import Testimonials from '../components/Testimonials';
import BookAppointment from '../components/BookAppointment';

interface HomeProps {
  openBooking: () => void;
}

export default function Home({ openBooking }: HomeProps) {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <WhyChooseUs openBooking={openBooking} />
      <Team />
      <Specialists />
      <Testimonials />
      <BookAppointment />
    </main>
  );
}
