
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="sobre" className="py-20 bg-white">
          <About />
        </section>
        
        <section id="servicos" className="py-20 bg-slate-50">
          <Services />
        </section>

        <section id="depoimentos" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="contato" className="py-20 bg-slate-50">
          <Contact />
        </section>
      </main>

      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default App;
