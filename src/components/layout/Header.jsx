import Navigation from './/Navigation';
export default function Header() {
  return (
    <header style={{ backgroundColor: '#0c0c0c', borderBottomColor: '#2a2a2a' }} className="border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-24 py-4 flex items-center justify-between sm:px-4">
          <div>
            <h1 style={{ color: '#fafafa' }} className="font-bold sm:text-lg">LongExhales</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm sm:gap-4" aria-label="primary">
          <a href="#services" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
            Home
          </a>
          <a href="#about" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
            About
          </a>
          <a href="#contact" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
            Features
          </a>
          <a href="#contact" style={{ color: '#e5e5e5' }} className="hover:text-[#0fa3a3] transition font-medium">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}