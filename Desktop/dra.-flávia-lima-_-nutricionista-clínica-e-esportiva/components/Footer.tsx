
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-olive">Flávia Lima</span>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-gray-500">Nutrição Clínica & Esportiva</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Transformando vidas através da nutrição consciente. Atendimento especializado em São Paulo e consultas online para todo o mundo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-softBeige flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-softBeige flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-softBeige flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-all"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-olive mb-6">Navegação</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/sobre" className="hover:text-olive">Sobre a Dra.</Link></li>
              <li><Link to="/servicos" className="hover:text-olive">Nossos Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-olive">Blog de Saúde</Link></li>
              <li><Link to="/agenda" className="hover:text-olive">Agendar Horário</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-olive mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-olive">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-olive">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-olive">Ética Profissional</a></li>
              <li className="font-bold text-olive/80">CRN 3-12345/P</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© 2024 Nutricionista Flávia Lima. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">Feito com <Heart size={12} className="text-red-400" /> para sua saúde.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
