export default function Hero() {
  return (
    <section id="hero" className="py-24" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #faf5ff 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: headline skeleton */}
          <div>
            <h1 style={{ color: '#064e3b' }} className="text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Make space for work, study, and play — right in your neighborhood.
            </h1>
            <p style={{ color: '#525252' }} className="mt-4 text-base max-w-xl">
              Fast internet, hands-on tech lessons, and a safe gaming lounge — all under one roof.
            </p>
            <div className="mt-6 flex gap-4">
              <button style={{ backgroundColor: '#0d9488' }} className="px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition">Book a Session</button>
              <button style={{ backgroundColor: '#f59e0b' }} className="px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition">See Services</button>
            </div>
          </div>

          {/* Right: media placeholder */}
          <div className="w-full h-64 rounded-md flex items-center justify-center" aria-hidden>
            <img src="/src/assets/Images/hero.svg" alt="Hero placeholder" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
