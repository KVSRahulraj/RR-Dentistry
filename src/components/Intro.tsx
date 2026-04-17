export default function Intro() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">Welcome to RR Dentistry</h2>
        <p className="text-2xl md:text-4xl font-serif font-medium text-brand-text leading-tight mb-8 md:mb-12">
          We are redefining dental care in Hyderabad by combining <span className="text-brand-primary-dark">world-class technology</span> with a <span className="text-brand-primary-dark">gentle, patient-first approach</span>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-brand-bg border border-gray-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary-dark">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-text mb-2">Patient Comfort</h3>
            <p className="text-gray-600 text-sm">Anxiety-free environment designed to make you feel relaxed and cared for.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-brand-bg border border-gray-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary-dark">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-text mb-2">Modern Tech</h3>
            <p className="text-gray-600 text-sm">Equipped with the latest diagnostic and treatment technologies for precision.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-brand-bg border border-gray-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary-dark">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-text mb-2">Strict Hygiene</h3>
            <p className="text-gray-600 text-sm">Uncompromising sterilization protocols ensuring the highest safety standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
