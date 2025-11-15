// src/components/Testimonials.jsx
import React from "react";

const TestimonialCard = ({ quote, name, avatar }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#0c0c0c] p-8 rounded-lg shadow-sm hover:shadow-md transition sm:p-6">
    {/* Left: Testimony */}
    <div className="sm:order-2">
      <p style={{ color: "#e5e5e5" }} className="italic text-lg mb-6 sm:text-base">
        "{quote}"
      </p>
      <div style={{ color: "#d6b15a" }} className="font-semibold sm:text-sm">
        {name}
      </div>
    </div>

    {/* Right: Avatar Image */}
    <div className="flex justify-center md:justify-end sm:order-1">
      <img
        src={avatar}
        alt={name}
        style={{
          width: 120,
          height: 120,
          borderRadius: 12,
          objectFit: "cover",
        }}
        className="sm:w-20 sm:h-20"
      />
    </div>
  </div>
);

export default function Testimonials() {
  const items = [
    {
      quote:
        "LongExhales helped me release stress and feel grounded after a hectic week.",
      name: "Kirian K.",
      avatar: "/images/image-vi.jpg",   
    },
    {
      quote:
        "The guided breathwork sessions transformed how I handle anxiety and focus daily.",
      name: "Emilliana M.",
      avatar: "/images/image-xi.jpg",  
    },
  ];

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: "#0c0c0c" }}
      className="py-16 sm:py-8"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-24 sm:px-4">
        <h2
          style={{ color: "#d6b15a" }}
          className="text-3xl font-bold font-heading mb-12 text-center sm:text-2xl sm:mb-8"
        >
          What People Say About LongExhales
        </h2>

        <div className="space-y-8 sm:space-y-6">
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}