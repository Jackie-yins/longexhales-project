import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Image placeholder */}
        <div className="w-full h-56 rounded-lg overflow-hidden" aria-hidden>
          <img 
            src="/images/image-xi.jpg" 
            alt="LongExhales about section" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Text section */}
        <div>
          <h2 
            style={{ color: '#d6b15a' }} 
            className="text-3xl font-bold font-heading mb-4"
          >
            About LongExhales
          </h2>

          <p style={{ color: '#e5e5e5' }} className="mb-4">
            LongExhales is the name of Nathan Fallou's wellness brand which is a holistic wellness space dedicated to helping individuals reconnect 
            with their breath, calm their mind, and unlock deeper states of healing and clarity.
          </p>

          <p style={{ color: '#e5e5e5' }} className="mb-6">
            Through breathwork journeys, ice bath sessions, sound healing, and mindful movement, 
            we create transformative experiences that restore balance and strengthen emotional resilience."the We is the medicine."
          </p>

          <button 
            style={{ backgroundColor: '#0fa3a3' }} 
            className="px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition"
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}