import React from "react";
import { FaWind, FaLungs, FaCloud, FaSmog, FaLeaf, FaVolumeUp, FaDrum, FaHeartbeat } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const ProductCard = ({ icon: Icon, title, desc, image, price, beforePrice }) => (
  <div
    className="bg-[#0c0c0c] rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden sm:w-full"
    style={{ borderTopColor: '#d6b15a', borderTopWidth: '4px' }}
  >
    {/* Image */}
    <div className="w-full h-40 bg-gray-800 overflow-hidden sm:h-32">
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>

    {/* Content */}
    <div className="p-6 sm:p-4">
      <div style={{ color: '#0fa3a3' }} className="text-3xl mb-3 sm:text-2xl"><Icon /></div>
      <h3 style={{ color: '#fafafa' }} className="text-lg font-semibold mb-3 sm:text-base">{title}</h3>
      <p style={{ color: '#e5e5e5' }} className="text-sm leading-relaxed mb-3 sm:text-xs">{desc}</p>

      {/* Prices */}
      <div className="flex items-center gap-2 mt-2">
        <span 
          className="font-bold text-xl sm:text-lg" 
          style={{ color: '#22c55e' }}  
        >
          {price}
        </span>
        <span 
          className="line-through text-sm sm:text-xs" 
          style={{ color: '#888' }}
        >
          {beforePrice}
        </span>
      </div>
    </div>
  </div>
);

export default function Products() {
  const products = [
    {
      icon: FaWind,
      title: "Breathwork Journeys",
      image: "/images/image-iii.jpg",
      price: "KSh 3,000",      
      beforePrice: "KSh 5,500", 
    },
    {
      icon: FaLungs,
      title: "Mindfulness Workshops",
      image: "/images/image-ix.jpg",
      price: "KSh 3,000",       
      beforePrice: "KSh 5,500",
    },
    {
      icon: FaCloud,
      title: "Healing Sessions",
      image: "/images/image-ii.jpg",
      price: "KSh 3,500",        
      beforePrice: "KSh 5,500",   
    },
    {
      icon: FaSmog,
      title: "Community Retreats",
      image: "/images/image-iv.jpg",
      price: "KSh 6,000",        
      beforePrice: "KSh 6,000",   
    },
    {
      icon: FaLeaf,
      title: "Kambo Medicine Circle",
      image: "/images/image-x.jpg",
      price: "KSh 4,000",       
      beforePrice: "KSh 5,500",  
    },
    {
      icon: FaVolumeUp,
      title: "Sound Healing Journey",
      image: "/images/image-xii.jpg",
      price: "KSh 3,500",      
      beforePrice: "KSh 5,500", 
    },
    {
      icon: FaDrum,
      title: "African Trance Dance",
      image: "/images/dance.jpg",
      price: "KSh 3,500",       
      beforePrice: "KSh 5,500", 
    },
    {
      icon: FaHeartbeat,
      title: "Men's Circle & Ho'oponopono",
      image: "/images/hooponopono.jpg",
      price: "KSh 3,000",       
      beforePrice: "KSh 5,500",  
    },
  ];

  return (
    <section id="products" className="py-16 bg-[#0c0c0c] sm:py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 sm:px-4">
        <h2 style={{ color: '#d6b15a' }} className="text-3xl font-bold font-heading mb-12 text-center sm:text-2xl sm:mb-8">
          Our Sessions & Experiences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}