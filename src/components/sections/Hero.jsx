// src/components/Hero.jsx

const Stat = ({ value, label }) => (
  <div
    style={{
      background: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    }}
    className="text-center p-4 rounded-lg border sm:p-3"
  >
    <div style={{ color: '#d6b15a' }} className="text-2xl md:text-3xl font-bold sm:text-xl">
      {value}
    </div>
    <div style={{ color: '#e5e5e5' }} className="text-xs md:text-sm mt-2 sm:text-xs">
      {label}
    </div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-32 relative flex flex-col items-center justify-center min-h-screen sm:py-20"
      style={{
        backgroundImage: 'url(/images/exhale.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <div className="max-w-4xl mx-auto px-6 text-center sm:px-4">
          <h1
            style={{ color: '#fafafa' }}
            className="text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 sm:text-3xl md:text-4xl"
          >
            Reconnect, Breathe, and Heal with LongExhales
          </h1>
          <p
            style={{ color: '#e5e5e5' }}
            className="text-lg mb-8 max-w-2xl mx-auto sm:text-base"
          >
            Guided breathwork, ice bath ceremonies, and mindful movement to restore balance, clarity, and calm.
          </p>
          <button
            style={{ backgroundColor: '#0fa3a3' }}
            className="px-8 py-4 rounded-lg font-medium text-white hover:opacity-90 transition text-lg sm:px-6 sm:py-3 sm:text-base sm:w-full md:w-auto"
          >
            Book a Session
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 w-full bg-linear-to-t from-black/60 to-transparent py-12 sm:py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-24 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 sm:gap-2">
            <Stat value="800+" label="Breathwork Journeys" />
            <Stat value="150+" label="Ice Bath Sessions" />
            <Stat value="25" label="Healing Retreats" />
            <Stat value="98%" label="Positive Feedback" />
          </div>
        </div>
      </div>
    </section>
  );
}