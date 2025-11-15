import React from "react";
import { FaLaptopCode, FaUsers, FaGlobeAfrica, FaShieldAlt } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 sm:gap-3">
    <div style={{ color: '#9b87f5' }} className="text-3xl shrink-0 mt-1 sm:text-2xl"><Icon /></div>
    <div>
      <h3 style={{ color: '#0d0d0d' }} className="font-semibold mb-2 sm:text-lg">{title}</h3>
      <p style={{ color: '#4a4a4a' }} className="text-sm sm:text-xs">{desc}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FaLaptopCode,
      title: "Mindful Digital Experiences",
      desc: "We craft serene, immersive interfaces that help users unwind, breathe, and reconnect.",
    },
    {
      icon: FaUsers,
      title: "Emotional Wellness First",
      desc: "Every feature is built to guide users toward calmness, clarity, and inner balance.",
    },
    {
      icon: FaGlobeAfrica,
      title: "Global Calming Influence",
      desc: "LongExhales promotes healthier digital habits and emotional awareness worldwide.",
    },
    {
      icon: FaShieldAlt,
      title: "Safe & Supportive Space",
      desc: "We ensure a secure environment where users feel protected and emotionally grounded.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white sm:py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 sm:px-4">
        <h2 style={{ color: '#6b21a8' }} className="text-3xl font-bold font-heading mb-12 text-center sm:text-2xl sm:mb-8">
          What LongExhales Offers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 sm:gap-6 sm:mb-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/image-vii.jpg"
              alt="Features showcase"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>

          <div className="space-y-8 sm:space-y-6">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;