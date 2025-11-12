import React from "react";
import { FaLaptopCode, FaUsers, FaGlobeAfrica, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaLaptopCode,
      title: "Tech Innovation",
      desc: "We merge technology with advocacy to build digital platforms for community empowerment.",
    },
    {
      icon: FaUsers,
      title: "Community Engagement",
      desc: "We train young people, CBOs, and rights defenders to use tech for social change.",
    },
    {
      icon: FaGlobeAfrica,
      title: "Climate Action",
      desc: "Our digital campaigns raise awareness and mobilize local climate action initiatives.",
    },
    {
      icon: FaShieldAlt,
      title: "Good Governance",
      desc: "We promote transparency and accountability through digital reporting systems.",
    },
  ];

  return (
    <section id="features" className="py-16" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-12">Our Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-lg hover:shadow-lg transition" style={{ borderLeftColor: '#0d9488', borderLeftWidth: '4px' }}>
              <div style={{ color: '#a855f7' }} className="text-3xl mb-4"><f.icon /></div>
              <h3 style={{ color: '#171717' }} className="font-semibold mb-2">{f.title}</h3>
              <p style={{ color: '#525252' }} className="text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
