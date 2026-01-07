
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ef15995d?auto=format&fit=crop&w=1000&q=80" 
              alt="Dr. Marcio Castro" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-3xl -z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-blue-500 rounded-3xl -z-0"></div>
          
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
            <p className="text-blue-600 font-bold text-lg mb-1">Membro Efetivo</p>
            <p className="text-slate-800 font-medium">Sociedade Brasileira de Odontologia Estética</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">O Especialista</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Dr. Marcio Castro <br /> <span className="text-blue-600">CRO 12345</span>
          </h3>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Com mais de 15 anos de dedicação exclusiva à reabilitação oral e estética, o Dr. Marcio Castro é reconhecido por sua abordagem humanizada e pelo uso de tecnologias de ponta em seu consultório.
            </p>
            <p>
              Graduado em Odontologia pela UFPR, com especializações em Implantodontia e Prótese Dentária, sua filosofia de trabalho baseia-se na personalização de cada tratamento, respeitando as características únicas de cada face para entregar resultados naturais e duradouros.
            </p>
            <p>
              Frequentemente presente em congressos internacionais, ele traz para sua clínica as tendências mais modernas do Digital Smile Design e fluxos de trabalho 100% digitais.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <i className="fas fa-microscope text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Digital workflow</h4>
                <p className="text-sm">Tecnologia de escaneamento intraoral.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <i className="fas fa-hand-holding-heart text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Humanização</h4>
                <p className="text-sm">Cuidado gentil e sem dor.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a href="#contato" className="inline-flex items-center gap-3 text-blue-600 font-bold text-lg hover:gap-5 transition-all">
              Ver mais detalhes da formação <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
