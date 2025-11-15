import React, { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span 
          className={`bg-white h-0.5 w-6 rounded-full transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        />
        <span 
          className={`bg-white h-0.5 w-6 rounded-full my-1.5 ${isOpen ? 'opacity-0' : ''}`}
        />
        <span 
          className={`bg-white h-0.5 w-6 rounded-full transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-[#0c0c0c] border border-[#2a2a2a] rounded-lg shadow-lg py-4 min-w-48 z-50 md:hidden">
          <a 
            href="#services" 
            style={{ color: '#e5e5e5' }} 
            className="block px-6 py-2 hover:text-[#0fa3a3] transition font-medium hover:bg-[#1a1a1a]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            style={{ color: '#e5e5e5' }} 
            className="block px-6 py-2 hover:text-[#0fa3a3] transition font-medium hover:bg-[#1a1a1a]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#features" 
            style={{ color: '#e5e5e5' }} 
            className="block px-6 py-2 hover:text-[#0fa3a3] transition font-medium hover:bg-[#1a1a1a]"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#products" 
            style={{ color: '#e5e5e5' }} 
            className="block px-6 py-2 hover:text-[#0fa3a3] transition font-medium hover:bg-[#1a1a1a]"
            onClick={() => setIsOpen(false)}
          >
            Sessions
          </a>
          <a 
            href="#testimonials" 
            style={{ color: '#e5e5e5' }} 
            className="block px-6 py-2 hover:text-[#0fa3a3] transition font-medium hover:bg-[#1a1a1a]"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#cta" 
            style={{ color: '#e5e5e5' }} 
            className="block px-6 py-2 hover:text-[#0fa3a3] transition font-medium hover:bg-[#1a1a1a]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-sm sm:gap-4" aria-label="primary">
        <a href="#services" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
          Home
        </a>
        <a href="#about" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
          About
        </a>
        <a href="#features" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
          Features
        </a>
        <a href="#products" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
          Sessions
        </a>
        <a href="#testimonials" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
          Testimonials
        </a>
        <a href="#cta" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
          Contact
        </a>
      </div>
    </nav>
  );
}