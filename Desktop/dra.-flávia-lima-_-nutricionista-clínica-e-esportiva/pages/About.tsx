
import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in py-24 bg-softBeige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                alt="Dra. Flávia Lima" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-olive rounded-full flex items-center justify-center text-white text-center p-8 border-[12px] border-softBeige shadow-2xl animate-bounce-slow">
              <span className="font-serif text-xl font-bold leading-tight tracking-tight">Ciência &<br/>Cuidado</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-6xl font-serif text-olive tracking-tight">Flávia Lima</h1>
              <div className="h-1 w-20 bg-olive rounded-full"></div>
            </div>
            
            <h2 className="text-2xl text-olive/70 font-serif italic">"Sua saúde é o reflexo das suas escolhas diárias."</h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Como nutricionista formada pela <strong>USP</strong> e entusiasta do estilo de vida saudável, dedico minha carreira a transformar a ciência da nutrição em algo aplicável, saboroso e sustentável.
              </p>
              <p>
                Acredito que a dieta perfeita não é aquela que te proíbe de viver, mas a que te dá energia para conquistar seus maiores desafios. Seja você um atleta de elite ou alguém buscando mais qualidade de vida.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-olive/10">
              {[
                { label: 'Formação', value: 'Nutrição - USP' },
                { label: 'Especialização', value: 'Performance Esportiva' },
                { label: 'Atendimentos', value: '+5.000 horas' },
                { label: 'Registro', value: 'CRN 3-12345' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-olive font-bold text-lg group-hover:text-olive-light transition-colors">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
