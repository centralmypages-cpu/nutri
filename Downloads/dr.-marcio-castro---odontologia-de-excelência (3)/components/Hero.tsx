
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909608135-ca29e001ce9d?auto=format&fit=crop&w=2000&q=80"
          alt="Consultório Odontológico Moderno"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Odontologia de Alta Performance
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            O Sorriso dos Seus Sonhos <br /> Começa Aqui.
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            Especialista em reabilitação oral e estética avançada. Tecnologia, conforto e resultados extraordinários para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-600/40 text-center"
            >
              Agendar Avaliação
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              Nossos Serviços
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-sm text-white/60 leading-tight">Anos de <br />Experiência</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">5k+</span>
              <span className="text-sm text-white/60 leading-tight">Sorrisos <br />Transformados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links floating */}
      <div className="absolute right-8 bottom-12 hidden lg:flex flex-col gap-6 text-white/50">
        <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram text-2xl"></i></a>
        <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook text-2xl"></i></a>
        <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
        <div className="w-px h-12 bg-white/30 mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;
