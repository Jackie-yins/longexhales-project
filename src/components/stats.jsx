import React from "react";

const Stat = ({ value, label }) => (
  <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f3e8ff 100%)', borderColor: '#dcfce7' }} className="text-center h-16 flex flex-col justify-center p-4 rounded-lg border">
    <div style={{ color: '#0d9488' }} className="text-3xl md:text-4xl font-bold">{value}</div>
    <div style={{ color: '#525252' }} className="text-sm mt-2">{label}</div>
  </div>
);

export default function Stats() {
  return (
    <section id="stats" style={{ backgroundColor: '#064e3b' }} className="py-12 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <h2 style={{ color: '#ffffff' }} className="text-3xl font-bold font-heading text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Stat value="1.2k+" label="Visitors/month" />
          <Stat value="320+" label="Coding students" />
          <Stat value="45" label="Community events" />
          <Stat value="95%" label="Satisfaction" />
        </div>
      </div>
    </section>
  );
}
