import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0c0c0c', color: '#e5e5e5' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-12 sm:px-4 sm:py-8">

        {/* Top Section */}
        <div style={{ borderBottomColor: '#333' }} className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-10 sm:pb-6">
          <h1 style={{ color: '#ffffff' }} className="text-2xl font-bold mb-6 md:mb-0 flex items-center gap-3 sm:text-xl">
            <span>Long<span style={{ color: '#d6b15a' }}>Exhales</span></span>
          </h1>

          <div className="flex space-x-6 text-xl sm:space-x-4 sm:text-lg" style={{ color: '#888' }}>
            <a href="#" style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
              onMouseLeave={(e) => e.target.style.color = '#888'}>
              <FaInstagram />
            </a>

            <a href="#" style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
              onMouseLeave={(e) => e.target.style.color = '#888'}>
              <FaFacebookF />
            </a>

            <a href="#" style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
              onMouseLeave={(e) => e.target.style.color = '#888'}>
              <FaTwitter />
            </a>

            <a href="#" style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
              onMouseLeave={(e) => e.target.style.color = '#888'}>
              <FaGithub />
            </a>

            <a href="#" style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
              onMouseLeave={(e) => e.target.style.color = '#888'}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-sm sm:gap-4 sm:mt-6">
          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4 sm:mb-2">Sessions</h3>
            <ul className="space-y-2 sm:space-y-1">
              {["Breathwork Journeys", "Ice Bath Ceremonies", "Sound Healing", "Ecstatic Dance"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ transition: 'color 0.3s', color: '#e5e5e5' }}
                    onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
                    onMouseLeave={(e) => e.target.style.color = '#e5e5e5'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4 sm:mb-2">Resources</h3>
            <ul className="space-y-2 sm:space-y-1">
              {["Articles", "Retreats", "Event Calendar", "Music Library"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ transition: 'color 0.3s', color: '#e5e5e5' }}
                    onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
                    onMouseLeave={(e) => e.target.style.color = '#e5e5e5'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4 sm:mb-2">Company</h3>
            <ul className="space-y-2 sm:space-y-1">
              {["About LongExhales", "Contact", "Partners", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ transition: 'color 0.3s', color: '#e5e5e5' }}
                    onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
                    onMouseLeave={(e) => e.target.style.color = '#e5e5e5'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4 sm:mb-2">Connect</h3>
            <ul className="space-y-2 sm:space-y-1">
              {["Instagram", "Facebook", "Twitter", "Email"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ transition: 'color 0.3s', color: '#e5e5e5' }}
                    onMouseEnter={(e) => e.target.style.color = '#0fa3a3'}
                    onMouseLeave={(e) => e.target.style.color = '#e5e5e5'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTopColor: '#333', color: '#bfbfbf' }} className="mt-10 text-center text-sm border-t pt-6 sm:mt-6 sm:pt-4">
          © LongExhales {new Date() .getFullYear()}  All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;