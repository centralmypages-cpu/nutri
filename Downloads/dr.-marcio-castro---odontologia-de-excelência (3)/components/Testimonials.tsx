
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Juliana Mendes',
    role: 'Empresária',
    content: 'O Dr. Marcio transformou não só o meu sorriso, mas a minha autoconfiança. As lentes de contato ficaram tão naturais que ninguém percebe que não são meus dentes reais.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: '2',
    name: 'Ricardo Alves',
    role: 'Arquiteto',
    content: 'O atendimento é impecável desde a recepção. Fiz implantes e o processo foi extremamente tranquilo, sem dor e com uma recuperação super rápida.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Advogada',
    content: 'Minha experiência com o Invisalign foi perfeita. O Dr. Marcio acompanhou cada etapa com muito detalhismo e o resultado final superou minhas expectativas.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Experiência do Paciente</h2>
        <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">O que nossos pacientes dizem</p>
        <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-slate-50 p-10 rounded-3xl relative">
            <div className="absolute top-0 left-10 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <i className="fas fa-quote-left text-2xl"></i>
            </div>
            
            <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">
              "{t.content}"
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src={t.avatar} 
                alt={t.name} 
                loading="lazy"
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" 
              />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-blue-600 text-sm font-medium">{t.role}</p>
              </div>
            </div>
            
            <div className="mt-6 flex text-yellow-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-xs"></i>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Logos de Convênios com Fallback Seguro */}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 font-bold text-slate-400 text-xl italic">
            <i className="fas fa-shield-halved text-blue-500"></i> UNIMED
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-400 text-xl italic">
            <i className="fas fa-shield-halved text-blue-500"></i> AMIL
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-400 text-xl italic">
            <i className="fas fa-shield-halved text-blue-500"></i> BRADESCO
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-400 text-xl italic">
            <i className="fas fa-shield-halved text-blue-500"></i> SULAMÉRICA
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
