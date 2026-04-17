import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Vikram S.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      platform: "Google Review",
      text: "Exceptional service! The clinic is spotless, and Dr. Rajesh explained the entire implant procedure clearly. Virtually painless experience.",
      stars: 5
    },
    {
      name: "Anjali M.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      platform: "Practo",
      text: "Got my root canal done here. I was terrified, but the team made me feel so comfortable. Highly recommend RR Dentistry for anyone with dental anxiety.",
      stars: 5
    },
    {
      name: "Rahul D.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      platform: "Google Review",
      text: "State-of-the-art facility. The staff is very professional and appointments are always on time. Best dental clinic in Hyderabad.",
      stars: 5
    },
    {
      name: "Kavya R.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      platform: "Practo",
      text: "Took my 5-year-old for her first checkup. Dr. Sneha was amazing with her! My daughter actually looks forward to going to the dentist now.",
      stars: 5
    },
    {
      name: "Suresh K.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      platform: "Google Review",
      text: "Got my Invisalign treatment started here. Very transparent pricing and excellent follow-up care. The results are already showing.",
      stars: 5
    }
  ];

  // Duplicate for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-brand-text text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-4">Patient Stories</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Don't Just Take Our Word For It</h3>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Read what our patients have to say about their experience at RR Dentistry.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-text to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-text to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex gap-4 md:gap-6 animate-marquee w-max px-4 md:px-6">
          {duplicatedReviews.map((review, idx) => (
            <div key={idx} className="w-[280px] sm:w-[350px] md:w-[400px] bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex-shrink-0">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                  <img src={review.image} alt={review.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-brand-primary/20" />
                  <div>
                    <h4 className="font-bold text-base md:text-lg">{review.name}</h4>
                    <p className="text-[10px] md:text-xs text-brand-primary mt-1">{review.platform}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-brand-accent">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed italic font-serif">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
