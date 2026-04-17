export default function Specialists() {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Dental Surgeon & Implantologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80",
      specialty: "Implantology"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Endodontist (Root Canal Specialist)",
      image: "https://images.unsplash.com/photo-1594824436998-ef4378f13459?w=400&h=500&fit=crop&q=80",
      specialty: "Endodontics"
    },
    {
      name: "Dr. Amit Patel",
      title: "Orthodontist (Braces & Aligners)",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80",
      specialty: "Orthodontics"
    },
    {
      name: "Dr. Sneha Reddy",
      title: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80",
      specialty: "Pedodontics"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">Our Experts</h2>
            <h3 className="text-4xl font-bold text-brand-text mb-4">Meet Our Specialists</h3>
            <p className="text-lg text-gray-600">
              Our clinic houses specialists from various branches of dentistry, ensuring you receive expert care for any dental issue.
            </p>
          </div>
          <a href="#team" className="hidden md:inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary-dark font-medium rounded-full hover:bg-brand-primary transition-colors">
            View All Staff
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary-dark shadow-sm">
                  {doc.specialty}
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-brand-text mb-1">{doc.name}</h4>
                <p className="text-sm text-brand-primary-dark font-medium">{doc.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#team" className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary-dark font-medium rounded-full hover:bg-brand-primary transition-colors">
            View All Staff
          </a>
        </div>
      </div>
    </section>
  );
}
