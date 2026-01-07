
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Estética Dental',
    description: 'Facetas de porcelana e lentes de contato dental para um sorriso harmônico e radiante.',
    icon: 'fa-tooth',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Implantes Dentários',
    description: 'Recupere a função mastigatória e a autoestima com implantes de titânio de alta qualidade.',
    icon: 'fa-circle-plus',
    imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Invisalign',
    description: 'Alinhadores invisíveis para corrigir seus dentes com o máximo de discrição e conforto.',
    icon: 'fa-align-center',
    imageUrl: 'https://images.unsplash.com/photo-1593054352284-37e0c354e8e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Clareamento a Laser',
    description: 'Tecnologia avançada para remover manchas e clarear tons com rapidez e segurança.',
    icon: 'fa-wand-magic-sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1460150031242-c210928a0621?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Reabilitação Oral',
    description: 'Tratamentos complexos que devolvem a saúde completa da boca e ossos maxilares.',
    icon: 'fa-heart-pulse',
    imageUrl: 'https://images.unsplash.com/photo-1629909608135-ca29e001ce9d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Dsd - Digital Design',
    description: 'Planejamento digital do sorriso para que você veja o resultado antes mesmo de começar.',
    icon: 'fa-laptop-code',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Especialidades</h2>
        <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Excelência em cada detalhe</p>
        <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Unimos ciência, arte e tecnologia para proporcionar a melhor experiência odontológica que você já teve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-600">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                Saiba Mais <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
