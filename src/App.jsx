import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Features from './components/sections/Features';
import About from './components/sections/About';
import CTA from './components/sections/CTA';
import Testimonials from './components/Testimonials';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Products />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
