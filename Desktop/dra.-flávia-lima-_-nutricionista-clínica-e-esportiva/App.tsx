
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, User, 
  Activity, Utensils
} from 'lucide-react';

// Components
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Schedule from './pages/Schedule.tsx';
import Blog from './pages/Blog.tsx';
import PatientArea from './pages/PatientArea.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-olive">Flávia Lima</span>
            <span className="text-[10px] uppercase tracking-widest font-sans text-gray-500">Nutricionista Clínica & Esportiva</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-olive ${
                  location.pathname === link.path ? 'text-olive underline underline-offset-8' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/area-do-paciente"
              className="bg-olive text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-olive-dark transition-all"
            >
              <User size={16} /> Área do Paciente
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-olive p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/area-do-paciente"
              onClick={() => setIsOpen(false)}
              className="block bg-olive text-white px-4 py-3 rounded-xl text-center font-semibold"
            >
              Acessar Área do Paciente
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
  >
    <Phone size={24} />
  </a>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/agenda" element={<Schedule />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/area-do-paciente" element={<PatientArea />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;