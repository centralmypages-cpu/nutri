
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-bold tracking-tighter mb-6 block">
              DR. MARCIO <span className="font-light text-blue-400">CASTRO</span>
            </span>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Transformando vidas através do sorriso. Referência em odontologia estética e reabilitação oral com tecnologia digital em Curitiba.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-slate-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="text-slate-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-slate-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Lentes de Contato</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Implantes Dentários</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Ortodontia Invisível</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Clareamento</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Reabilitação Oral</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Receba dicas exclusivas sobre saúde bucal e estética diretamente no seu e-mail.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2024 Dr. Marcio Castro Odontologia. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
          <p>Desenvolvido com <i className="fas fa-heart text-red-500 mx-1"></i> para sorrisos perfeitos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
