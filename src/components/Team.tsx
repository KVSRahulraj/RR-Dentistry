export default function Team() {
  const stats = [
    { number: "5000+", label: "Happy Patients" },
    { number: "1000+", label: "Implants Placed" },
    { number: "2500+", label: "Root Canals" },
    { number: "500+", label: "Smile Designs" },
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-primary text-brand-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary-dark uppercase mb-4">Our Legacy</h2>
          <h3 className="text-4xl font-bold mb-6">A Team Dedicated to Your Smile</h3>
          <p className="text-lg text-brand-primary-dark/80">
            Behind every successful treatment is a team of passionate professionals working together to deliver exceptional results.
          </p>
        </div>

        {/* Wide Team Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 aspect-[21/9] relative">
          <img 
            src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548?w=1200&h=500&fit=crop&q=80" 
            alt="RR Dentistry Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-primary-dark/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">{stat.number}</div>
              <div className="text-sm md:text-base font-medium text-brand-primary-dark/90 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
