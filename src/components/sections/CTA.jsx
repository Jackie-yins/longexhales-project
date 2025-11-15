import React from "react";

export default function CTA() {
  return (
    <section 
      id="cta" 
      className="py-20 sm:py-12" 
      style={{ background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-24 text-center sm:px-4">

        <h2 
          style={{ color: '#d6b15a' }} 
          className="text-4xl lg:text-5xl font-bold font-heading mb-6 sm:text-2xl md:text-3xl"
        >
          Ready to Transform Your Mind & Body?
        </h2>

        <p 
          style={{ color: '#e5e5e5' }} 
          className="text-lg mb-8 max-w-2xl mx-auto sm:text-base"
        >
          Step into the LongExhales experience—breathwork, cold immersion, and mindful healing 
          designed to help you breathe deeper, release stress, and reconnect with yourself.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:gap-3">
          <button
            style={{ backgroundColor: '#0fa3a3' }}
            className="px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition sm:px-6 sm:py-3 sm:w-full md:w-auto"
          >
            Book a Session
          </button>

          <button
            style={{
              backgroundColor: 'transparent',
              borderColor: '#d6b15a',
              borderWidth: '2px',
              color: '#d6b15a'
            }}
            className="px-8 py-4 rounded-lg font-semibold hover:bg-[#d6b15a]/10 transition sm:px-6 sm:py-3 sm:w-full md:w-auto"
          >
            Learn More
          </button>
        </div>

        {/* Trust Badge */}
        <p 
          style={{ color: '#b5b5b5' }} 
          className="mt-12 text-sm sm:mt-8 sm:text-xs"
        >
          ✓ 800+ Breathwork Journeys | ✓ 150+ Ice Bath Sessions | ✓ 98% Positive Feedback
        </p>

      </div>
    </section>
  );
}