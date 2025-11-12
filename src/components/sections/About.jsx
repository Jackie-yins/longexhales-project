import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image placeholder */}
        <div className="w-full h-56 rounded-lg overflow-hidden" aria-hidden>
          <img src="/src/assets/Images/about.svg" alt="About placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Copy skeleton */}
        <div>
          <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-4">About IbraTech Hub</h2>
          <p style={{ color: '#525252' }} className="mb-4">
            IbraTech Hub is a digital advocacy platform that empowers communities, youth, and CBOs
            to champion human rights, gender equality, and climate action using modern technology.
          </p>
          <p style={{ color: '#525252' }} className="mb-6">
            We integrate coding, data, and media to amplify voices, strengthen governance,
            and create innovative tech solutions for social impact.
          </p>
          <button style={{ backgroundColor: '#a855f7' }} className="px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition">Learn More</button>
        </div>
      </div>
    </section>
  );
}
