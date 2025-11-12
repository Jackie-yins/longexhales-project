import React from "react";

const Quote = ({ quote, name }) => (
  <div style={{ borderLeftColor: '#fbbf24', backgroundColor: '#ffffff' }} className="p-6 border-l-4 rounded-lg shadow-sm hover:shadow-md transition">
    <p style={{ color: '#525252' }} className="italic">"{quote}"</p>
    <div style={{ color: '#0d9488' }} className="mt-4 text-sm font-semibold">{name}</div>
  </div>
);

export default function Testimonials() {
  const items = [
    { quote: "I learned HTML & CSS and started small jobs.", name: "Jamal K." },
    { quote: "Great space to study after night shift — reliable Wi-Fi.", name: "Fatima N." }
  ];

  return (
    <section id="testimonials" style={{ backgroundColor: '#fafafa' }} className="py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <h2 style={{ color: '#064e3b' }} className="text-2xl font-bold font-heading mb-6">What people say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <div key={i} className="flex items-start gap-4">
              <img src="/src/assets/Images/avatar1.svg" alt="Avatar" style={{ width: 64, height: 64, borderRadius: 8 }} />
              <Quote {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
