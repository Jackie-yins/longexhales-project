import React from "react";

const Stat = ({ value, label }) => (
  <div
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)',
      borderColor: 'rgba(255,255,255,0.3)',
      backdropFilter: 'blur(8px)'
    }}
    className="text-center h-16 flex flex-col justify-center p-4 rounded-lg border sm:h-14 sm:p-3"
  >
    <div style={{ color: '#d6b15a' }} className="text-3xl md:text-4xl font-bold sm:text-2xl">{value}</div>
    <div style={{ color: '#e5e5e5' }} className="text-sm mt-2 sm:text-xs">{label}</div>
  </div>
);

export default function Stats() {
  return (
    <section id="stats" style={{ backgroundColor: '#0c0c0c' }} className="py-12 text-white sm:py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 sm:px-4">
        <h2 style={{ color: '#fafafa' }} className="text-3xl font-bold font-heading text-center mb-12 sm:text-2xl sm:mb-8">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-3">
          <Stat value="800+" label="Breathwork Journeys" />
          <Stat value="150+" label="Ice Bath Sessions" />
          <Stat value="25" label="Healing Retreats" />
          <Stat value="98%" label="Positive Feedback" />
        </div>
      </div>
    </section>
  );
}